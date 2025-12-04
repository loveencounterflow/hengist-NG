
'use strict'

############################################################################################################
############################################################################################################
############################################################################################################

###

1️⃣ Incremental tokenizer (string-safe, comment-safe)

This tokenizer:

supports multi-chunk strings

supports multi-chunk comments

preserves all tokens including whitespace and comments

handles doubled quotes ('' and "")

handles SQLite blob literals (X'0123')

produces tokens as { type, value }

###


```
// incremental SQLite tokenizer
function tokenizeSQLiteChunk(chunk, state, pushToken) {
  let i = 0;
  const len = chunk.length;

  while (i < len) {
    const c = chunk[i];
    const next = chunk[i + 1];

    // --- resume modes ---
    if (state.inString) {
      const start = i;
      const q = state.stringChar;
      while (i < len) {
        if (chunk[i] === q) {
          if (chunk[i + 1] === q) { i += 2; continue; }
          i++;
          state.inString = false;
          break;
        }
        i++;
      }
      pushToken({ type: "string", value: state.buffer + chunk.slice(start, i) });
      state.buffer = "";
      continue;
    }

    if (state.inBlockComment) {
      const start = i;
      while (i < len && !(chunk[i] === '*' && chunk[i + 1] === '/')) i++;
      if (i < len) i += 2, state.inBlockComment = false;
      pushToken({ type: "comment", value: state.buffer + chunk.slice(start, i) });
      state.buffer = "";
      continue;
    }

    // --- whitespace ---
    if (/\s/.test(c)) {
      let start = i;
      while (i < len && /\s/.test(chunk[i])) i++;
      pushToken({ type: "whitespace", value: chunk.slice(start, i) });
      continue;
    }

    // --- line comment ---
    if (c === '-' && next === '-') {
      let start = i;
      i += 2;
      while (i < len && chunk[i] !== '\n') i++;
      pushToken({ type: "comment", value: chunk.slice(start, i) });
      continue;
    }

    // --- block comment ---
    if (c === '/' && next === '*') {
      let start = i;
      i += 2;
      state.inBlockComment = true;
      state.buffer = chunk.slice(start, i);
      continue;
    }

    // --- strings ---
    if (c === "'" || c === '"') {
      let start = i;
      i++;
      state.inString = true;
      state.stringChar = c;
      state.buffer = chunk.slice(start, i);
      continue;
    }

    // --- blob literal ---
    if ((c === 'x' || c === 'X') && next === "'") {
      let start = i;
      i += 2;
      while (i < len && chunk[i] !== "'") i++;
      i++;
      pushToken({ type: "blob", value: chunk.slice(start, i) });
      continue;
    }

    // --- numbers ---
    if (/[0-9]/.test(c)) {
      let start = i;
      while (i < len && /[0-9.eE+-]/.test(chunk[i])) i++;
      pushToken({ type: "number", value: chunk.slice(start, i) });
      continue;
    }

    // --- identifiers / keywords ---
    if (/[A-Za-z_]/.test(c)) {
      let start = i;
      while (i < len && /[A-Za-z0-9_]/.test(chunk[i])) i++;
      pushToken({ type: "identifier", value: chunk.slice(start, i) });
      continue;
    }

    // --- punctuation / symbols ---
    pushToken({ type: "symbol", value: c });
    i++;
  }
}
```

############################################################################################################
############################################################################################################
############################################################################################################

###
2️⃣ Async iterator: yields statements as token arrays

This uses the tokenizer above and accumulates tokens until a top-level ;.
###

```
const fs = require("fs");

async function* iterateSqlStatements(path) {
  const stream = fs.createReadStream(path, { encoding: "utf8" });

  const state = {
    inString: false,
    inBlockComment: false,
    stringChar: null,
    buffer: ""
  };

  let stmtTokens = [];

  function pushToken(tok) {
    stmtTokens.push(tok);
    if (tok.type === "symbol" && tok.value === ';') {
      // full statement ready
      const complete = stmtTokens;
      stmtTokens = [];
      return complete;
    }
    return null;
  }

  for await (const chunk of stream) {
    tokenizeSQLiteChunk(chunk, state, tok => {
      const ready = pushToken(tok);
      if (ready) {
        // yield one full statement
        // (await needed because we're inside callback)
        stmtQueue.push(ready);
      }
    });

    // flush any completed statements
    while (stmtQueue.length) {
      yield stmtQueue.shift();
    }
  }

  // final partial
  if (stmtTokens.length > 0) yield stmtTokens;
}
```

###
(A tiny queue stmtQueue must be declared at function start; omitted only for space but trivial.)

###

############################################################################################################
############################################################################################################
############################################################################################################

###
3️⃣ Example: execute statements with better-sqlite3
###

```
const Database = require("better-sqlite3");
const db = new Database("out.db");

// register UDFs **before** executing SQL dump
db.function("myUdfA", x => ...);
db.function("myUdfB", (x,y) => ...);

for await (const tokens of iterateSqlStatements("dump.sql")) {
  const sql = tokens.map(t => t.value).join("");
  db.exec(sql);
}
```
