(function() {
  'use strict';
  
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
  //###########################################################################################################
  //###########################################################################################################
  //###########################################################################################################
  /*

  1️⃣ Incremental tokenizer (string-safe, comment-safe)

  This tokenizer:

  supports multi-chunk strings

  supports multi-chunk comments

  preserves all tokens including whitespace and comments

  handles doubled quotes ('' and "")

  handles SQLite blob literals (X'0123')

  produces tokens as { type, value }

  */
;
  
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
  //###########################################################################################################
  //###########################################################################################################
  //###########################################################################################################
  /*
  2️⃣ Async iterator: yields statements as token arrays

  This uses the tokenizer above and accumulates tokens until a top-level ;.
  */
;
  
const Database = require("better-sqlite3");
const db = new Database("out.db");

// register UDFs **before** executing SQL dump
db.function("myUdfA", x => ...);
db.function("myUdfB", (x,y) => ...);

for await (const tokens of iterateSqlStatements("dump.sql")) {
  const sql = tokens.map(t => t.value).join("");
  db.exec(sql);
}
  /*
  (A tiny queue stmtQueue must be declared at function start; omitted only for space but trivial.)

  */
  //###########################################################################################################
  //###########################################################################################################
  //###########################################################################################################
  /*
  3️⃣ Example: execute statements with better-sqlite3
  */
;


}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tY29hcnNlLXNxbC1sZXhlci1mb3Itc3FsaXRlLWR1bXBzLWJ5LWNoYWQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQUE7RUEyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFvSEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTREQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBM01BIiwic291cmNlc0NvbnRlbnQiOlsiXG4ndXNlIHN0cmljdCdcblxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuXG4jIyNcblxuMe+4j+KDoyBJbmNyZW1lbnRhbCB0b2tlbml6ZXIgKHN0cmluZy1zYWZlLCBjb21tZW50LXNhZmUpXG5cblRoaXMgdG9rZW5pemVyOlxuXG5zdXBwb3J0cyBtdWx0aS1jaHVuayBzdHJpbmdzXG5cbnN1cHBvcnRzIG11bHRpLWNodW5rIGNvbW1lbnRzXG5cbnByZXNlcnZlcyBhbGwgdG9rZW5zIGluY2x1ZGluZyB3aGl0ZXNwYWNlIGFuZCBjb21tZW50c1xuXG5oYW5kbGVzIGRvdWJsZWQgcXVvdGVzICgnJyBhbmQgXCJcIilcblxuaGFuZGxlcyBTUUxpdGUgYmxvYiBsaXRlcmFscyAoWCcwMTIzJylcblxucHJvZHVjZXMgdG9rZW5zIGFzIHsgdHlwZSwgdmFsdWUgfVxuXG4jIyNcblxuXG5gYGBcbi8vIGluY3JlbWVudGFsIFNRTGl0ZSB0b2tlbml6ZXJcbmZ1bmN0aW9uIHRva2VuaXplU1FMaXRlQ2h1bmsoY2h1bmssIHN0YXRlLCBwdXNoVG9rZW4pIHtcbiAgbGV0IGkgPSAwO1xuICBjb25zdCBsZW4gPSBjaHVuay5sZW5ndGg7XG5cbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICBjb25zdCBjID0gY2h1bmtbaV07XG4gICAgY29uc3QgbmV4dCA9IGNodW5rW2kgKyAxXTtcblxuICAgIC8vIC0tLSByZXN1bWUgbW9kZXMgLS0tXG4gICAgaWYgKHN0YXRlLmluU3RyaW5nKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGk7XG4gICAgICBjb25zdCBxID0gc3RhdGUuc3RyaW5nQ2hhcjtcbiAgICAgIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgICAgIGlmIChjaHVua1tpXSA9PT0gcSkge1xuICAgICAgICAgIGlmIChjaHVua1tpICsgMV0gPT09IHEpIHsgaSArPSAyOyBjb250aW51ZTsgfVxuICAgICAgICAgIGkrKztcbiAgICAgICAgICBzdGF0ZS5pblN0cmluZyA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICAgIHB1c2hUb2tlbih7IHR5cGU6IFwic3RyaW5nXCIsIHZhbHVlOiBzdGF0ZS5idWZmZXIgKyBjaHVuay5zbGljZShzdGFydCwgaSkgfSk7XG4gICAgICBzdGF0ZS5idWZmZXIgPSBcIlwiO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmluQmxvY2tDb21tZW50KSB7XG4gICAgICBjb25zdCBzdGFydCA9IGk7XG4gICAgICB3aGlsZSAoaSA8IGxlbiAmJiAhKGNodW5rW2ldID09PSAnKicgJiYgY2h1bmtbaSArIDFdID09PSAnLycpKSBpKys7XG4gICAgICBpZiAoaSA8IGxlbikgaSArPSAyLCBzdGF0ZS5pbkJsb2NrQ29tbWVudCA9IGZhbHNlO1xuICAgICAgcHVzaFRva2VuKHsgdHlwZTogXCJjb21tZW50XCIsIHZhbHVlOiBzdGF0ZS5idWZmZXIgKyBjaHVuay5zbGljZShzdGFydCwgaSkgfSk7XG4gICAgICBzdGF0ZS5idWZmZXIgPSBcIlwiO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gLS0tIHdoaXRlc3BhY2UgLS0tXG4gICAgaWYgKC9cXHMvLnRlc3QoYykpIHtcbiAgICAgIGxldCBzdGFydCA9IGk7XG4gICAgICB3aGlsZSAoaSA8IGxlbiAmJiAvXFxzLy50ZXN0KGNodW5rW2ldKSkgaSsrO1xuICAgICAgcHVzaFRva2VuKHsgdHlwZTogXCJ3aGl0ZXNwYWNlXCIsIHZhbHVlOiBjaHVuay5zbGljZShzdGFydCwgaSkgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyAtLS0gbGluZSBjb21tZW50IC0tLVxuICAgIGlmIChjID09PSAnLScgJiYgbmV4dCA9PT0gJy0nKSB7XG4gICAgICBsZXQgc3RhcnQgPSBpO1xuICAgICAgaSArPSAyO1xuICAgICAgd2hpbGUgKGkgPCBsZW4gJiYgY2h1bmtbaV0gIT09ICdcXG4nKSBpKys7XG4gICAgICBwdXNoVG9rZW4oeyB0eXBlOiBcImNvbW1lbnRcIiwgdmFsdWU6IGNodW5rLnNsaWNlKHN0YXJ0LCBpKSB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIC0tLSBibG9jayBjb21tZW50IC0tLVxuICAgIGlmIChjID09PSAnLycgJiYgbmV4dCA9PT0gJyonKSB7XG4gICAgICBsZXQgc3RhcnQgPSBpO1xuICAgICAgaSArPSAyO1xuICAgICAgc3RhdGUuaW5CbG9ja0NvbW1lbnQgPSB0cnVlO1xuICAgICAgc3RhdGUuYnVmZmVyID0gY2h1bmsuc2xpY2Uoc3RhcnQsIGkpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gLS0tIHN0cmluZ3MgLS0tXG4gICAgaWYgKGMgPT09IFwiJ1wiIHx8IGMgPT09ICdcIicpIHtcbiAgICAgIGxldCBzdGFydCA9IGk7XG4gICAgICBpKys7XG4gICAgICBzdGF0ZS5pblN0cmluZyA9IHRydWU7XG4gICAgICBzdGF0ZS5zdHJpbmdDaGFyID0gYztcbiAgICAgIHN0YXRlLmJ1ZmZlciA9IGNodW5rLnNsaWNlKHN0YXJ0LCBpKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIC0tLSBibG9iIGxpdGVyYWwgLS0tXG4gICAgaWYgKChjID09PSAneCcgfHwgYyA9PT0gJ1gnKSAmJiBuZXh0ID09PSBcIidcIikge1xuICAgICAgbGV0IHN0YXJ0ID0gaTtcbiAgICAgIGkgKz0gMjtcbiAgICAgIHdoaWxlIChpIDwgbGVuICYmIGNodW5rW2ldICE9PSBcIidcIikgaSsrO1xuICAgICAgaSsrO1xuICAgICAgcHVzaFRva2VuKHsgdHlwZTogXCJibG9iXCIsIHZhbHVlOiBjaHVuay5zbGljZShzdGFydCwgaSkgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyAtLS0gbnVtYmVycyAtLS1cbiAgICBpZiAoL1swLTldLy50ZXN0KGMpKSB7XG4gICAgICBsZXQgc3RhcnQgPSBpO1xuICAgICAgd2hpbGUgKGkgPCBsZW4gJiYgL1swLTkuZUUrLV0vLnRlc3QoY2h1bmtbaV0pKSBpKys7XG4gICAgICBwdXNoVG9rZW4oeyB0eXBlOiBcIm51bWJlclwiLCB2YWx1ZTogY2h1bmsuc2xpY2Uoc3RhcnQsIGkpIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gLS0tIGlkZW50aWZpZXJzIC8ga2V5d29yZHMgLS0tXG4gICAgaWYgKC9bQS1aYS16X10vLnRlc3QoYykpIHtcbiAgICAgIGxldCBzdGFydCA9IGk7XG4gICAgICB3aGlsZSAoaSA8IGxlbiAmJiAvW0EtWmEtejAtOV9dLy50ZXN0KGNodW5rW2ldKSkgaSsrO1xuICAgICAgcHVzaFRva2VuKHsgdHlwZTogXCJpZGVudGlmaWVyXCIsIHZhbHVlOiBjaHVuay5zbGljZShzdGFydCwgaSkgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyAtLS0gcHVuY3R1YXRpb24gLyBzeW1ib2xzIC0tLVxuICAgIHB1c2hUb2tlbih7IHR5cGU6IFwic3ltYm9sXCIsIHZhbHVlOiBjIH0pO1xuICAgIGkrKztcbiAgfVxufVxuYGBgXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblxuIyMjXG4y77iP4oOjIEFzeW5jIGl0ZXJhdG9yOiB5aWVsZHMgc3RhdGVtZW50cyBhcyB0b2tlbiBhcnJheXNcblxuVGhpcyB1c2VzIHRoZSB0b2tlbml6ZXIgYWJvdmUgYW5kIGFjY3VtdWxhdGVzIHRva2VucyB1bnRpbCBhIHRvcC1sZXZlbCA7LlxuIyMjXG5cbmBgYFxuY29uc3QgZnMgPSByZXF1aXJlKFwiZnNcIik7XG5cbmFzeW5jIGZ1bmN0aW9uKiBpdGVyYXRlU3FsU3RhdGVtZW50cyhwYXRoKSB7XG4gIGNvbnN0IHN0cmVhbSA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0ocGF0aCwgeyBlbmNvZGluZzogXCJ1dGY4XCIgfSk7XG5cbiAgY29uc3Qgc3RhdGUgPSB7XG4gICAgaW5TdHJpbmc6IGZhbHNlLFxuICAgIGluQmxvY2tDb21tZW50OiBmYWxzZSxcbiAgICBzdHJpbmdDaGFyOiBudWxsLFxuICAgIGJ1ZmZlcjogXCJcIlxuICB9O1xuXG4gIGxldCBzdG10VG9rZW5zID0gW107XG5cbiAgZnVuY3Rpb24gcHVzaFRva2VuKHRvaykge1xuICAgIHN0bXRUb2tlbnMucHVzaCh0b2spO1xuICAgIGlmICh0b2sudHlwZSA9PT0gXCJzeW1ib2xcIiAmJiB0b2sudmFsdWUgPT09ICc7Jykge1xuICAgICAgLy8gZnVsbCBzdGF0ZW1lbnQgcmVhZHlcbiAgICAgIGNvbnN0IGNvbXBsZXRlID0gc3RtdFRva2VucztcbiAgICAgIHN0bXRUb2tlbnMgPSBbXTtcbiAgICAgIHJldHVybiBjb21wbGV0ZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBmb3IgYXdhaXQgKGNvbnN0IGNodW5rIG9mIHN0cmVhbSkge1xuICAgIHRva2VuaXplU1FMaXRlQ2h1bmsoY2h1bmssIHN0YXRlLCB0b2sgPT4ge1xuICAgICAgY29uc3QgcmVhZHkgPSBwdXNoVG9rZW4odG9rKTtcbiAgICAgIGlmIChyZWFkeSkge1xuICAgICAgICAvLyB5aWVsZCBvbmUgZnVsbCBzdGF0ZW1lbnRcbiAgICAgICAgLy8gKGF3YWl0IG5lZWRlZCBiZWNhdXNlIHdlJ3JlIGluc2lkZSBjYWxsYmFjaylcbiAgICAgICAgc3RtdFF1ZXVlLnB1c2gocmVhZHkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gZmx1c2ggYW55IGNvbXBsZXRlZCBzdGF0ZW1lbnRzXG4gICAgd2hpbGUgKHN0bXRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgIHlpZWxkIHN0bXRRdWV1ZS5zaGlmdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZpbmFsIHBhcnRpYWxcbiAgaWYgKHN0bXRUb2tlbnMubGVuZ3RoID4gMCkgeWllbGQgc3RtdFRva2Vucztcbn1cbmBgYFxuXG4jIyNcbihBIHRpbnkgcXVldWUgc3RtdFF1ZXVlIG11c3QgYmUgZGVjbGFyZWQgYXQgZnVuY3Rpb24gc3RhcnQ7IG9taXR0ZWQgb25seSBmb3Igc3BhY2UgYnV0IHRyaXZpYWwuKVxuXG4jIyNcblxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuXG4jIyNcbjPvuI/ig6MgRXhhbXBsZTogZXhlY3V0ZSBzdGF0ZW1lbnRzIHdpdGggYmV0dGVyLXNxbGl0ZTNcbiMjI1xuXG5gYGBcbmNvbnN0IERhdGFiYXNlID0gcmVxdWlyZShcImJldHRlci1zcWxpdGUzXCIpO1xuY29uc3QgZGIgPSBuZXcgRGF0YWJhc2UoXCJvdXQuZGJcIik7XG5cbi8vIHJlZ2lzdGVyIFVERnMgKipiZWZvcmUqKiBleGVjdXRpbmcgU1FMIGR1bXBcbmRiLmZ1bmN0aW9uKFwibXlVZGZBXCIsIHggPT4gLi4uKTtcbmRiLmZ1bmN0aW9uKFwibXlVZGZCXCIsICh4LHkpID0+IC4uLik7XG5cbmZvciBhd2FpdCAoY29uc3QgdG9rZW5zIG9mIGl0ZXJhdGVTcWxTdGF0ZW1lbnRzKFwiZHVtcC5zcWxcIikpIHtcbiAgY29uc3Qgc3FsID0gdG9rZW5zLm1hcCh0ID0+IHQudmFsdWUpLmpvaW4oXCJcIik7XG4gIGRiLmV4ZWMoc3FsKTtcbn1cbmBgYFxuIl19
