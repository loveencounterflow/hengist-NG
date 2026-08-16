
'use strict'



GUY                       = require 'guy'
{ alert
  debug
  help
  info
  plain
  praise
  urge
  warn
  whisper }               = GUY.trm.get_loggers 'interlex/test-basics'
{ rpr
  inspect
  echo
  reverse
  log     }               = GUY.trm
# WGUY                      = require '../../../apps/webguy'
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG
{ f }                     = require '../../../apps/effstring'
SQL                       = String.raw
{ condense_lexemes
  abbrlxm
  tabulate_lexemes
  tabulate_lexeme       } = require './helpers'
# { internals: ct_internals
#   isa
#   std
#   type_of               } = require '../../../apps/cleartype'


```
'use strict';

const { Grammar } = require('interlex');


/*
 * Coarse JSON lexer
 *
 * This is deliberately NOT a JSON validator.
 *
 * It recognizes enough structure to determine the extent of a
 * JSON-like value:
 *
 *   "..."       string
 *   {...}       compound
 *   [...]       compound
 *   anything    atom
 *
 * Strings are handled in their own lexer level so that escaped
 * quotes do not terminate the string.
 *
 * Arrays and objects share one compound level. Nested delimiters
 * are counted by the caller rather than by recursive lexer levels;
 * InterLex deliberately does not support recursive level jumps.
 */

const grammar = new Grammar({
  strategy: 'first',
  emit_signals: false,
  reset_stack: true,
  reset_errors: true,
});


// ─────────────────────────────────────────────────────────────
// ground level
// ─────────────────────────────────────────────────────────────

const ground = grammar.new_level({ name: 'ground' });

ground.new_token({
  name: 'string_start',
  fit: /"/,
  jump: 'string',
});

ground.new_token({
  name: 'object_start',
  fit: /\{/,
  jump: 'compound',
});

ground.new_token({
  name: 'array_start',
  fit: /\[/,
  jump: 'compound',
});


// A coarse "JSON primitive".
//
// We intentionally don't distinguish number / true / false / null,
// and we don't fully validate their syntax.
//
// A chunk ends at whitespace or at a character that has structural
// significance for JSON.
ground.new_token({
  name: 'atom',
  fit: /[^\s\{\}\[\]",:]+/,
});

ground.new_token({
  name: 'whitespace',
  fit: /\s+/,
});


// These are irrelevant for finding the extent of a compound value,
// but they allow InterLex to continue scanning after the value.
ground.new_token({
  name: 'punctuation',
  fit: /[,:\]\}]/,
});


// ─────────────────────────────────────────────────────────────
// string level
// ─────────────────────────────────────────────────────────────

const string = grammar.new_level({ name: 'string' });


// Backslash + following character is always one lexical unit here.
//
// We do not validate whether the escape is one of JSON's legal
// escapes. That's intentional.
string.new_token({
  name: 'escape',
  fit: /\\[\s\S]/,
});


// Any run of ordinary string characters.
//
// In particular, neither '"' nor '\' belongs to this token.
string.new_token({
  name: 'text',
  fit: /[^"\\]+/,
  merge: true,
});


// The first unescaped '"' ends the string and returns to the
// previous level.
string.new_token({
  name: 'end',
  fit: /"/,
  jump: '..',
});


// ─────────────────────────────────────────────────────────────
// compound level
// ─────────────────────────────────────────────────────────────
//
// This level is intentionally recursive only in the *data* sense,
// not through InterLex level jumps.
//
// Every opening brace/bracket contributes +1 nesting depth.
// Every closing brace/bracket contributes -1.
//
// We deliberately do not distinguish { from [ and } from ] here;
// doing so would turn this into syntax validation, which we don't
// want at this stage.

const compound = grammar.new_level({ name: 'compound' });

compound.new_token({
  name: 'open',
  fit: /[\{\[]/,
});

compound.new_token({
  name: 'close',
  fit: /[\}\]]/,
});


// A quote starts a genuine string level even while we're inside
// a compound value.
compound.new_token({
  name: 'string_start',
  fit: /"/,
  jump: 'string',
});

compound.new_token({
  name: 'atom',
  fit: /[^\s\{\}\[\]",:]+/,
});

compound.new_token({
  name: 'whitespace',
  fit: /\s+/,
});

compound.new_token({
  name: 'punctuation',
  fit: /[,:\]]/,
});


// ─────────────────────────────────────────────────────────────
// scanner
// ─────────────────────────────────────────────────────────────

function scanJsonValue(source, start = 0) {
  if (typeof source !== 'string') {
    throw new TypeError('source must be a string');
  }

  if (!Number.isInteger(start) || start < 0 || start >= source.length) {
    throw new RangeError(`invalid start position: ${start}`);
  }

  const input = source.slice(start);

  let first = true;
  let kind = null;
  let depth = 0;

  for (const lexeme of grammar.scan(input)) {

    // ---------------------------------------------------------
    // First lexeme determines the kind of value.
    // ---------------------------------------------------------

    if (first) {
      first = false;

      switch (lexeme.name) {
        case 'string_start':
          kind = 'string';
          break;

        case 'object_start':
        case 'array_start':
          kind = 'compound';
          depth = 1;
          break;

        case 'atom':
          return {
            start,
            end: start + lexeme.stop,
            length: lexeme.length,
            kind: 'primitive',
          };

        default:
          throw new SyntaxError(
            `expected JSON value at ${start}, found ${lexeme.name}`
          );
      }

      continue;
    }


    // ---------------------------------------------------------
    // String: the closing quote is the first `end` token in the
    // string level.
    // ---------------------------------------------------------

    if (kind === 'string') {
      if (
        lexeme.level.name === 'string' &&
        lexeme.name === 'end'
      ) {
        return {
          start,
          end: start + lexeme.stop,
          length: lexeme.stop,
          kind: 'string',
        };
      }

      continue;
    }


    // ---------------------------------------------------------
    // Compound: count opening / closing delimiters.
    //
    // We deliberately don't check whether `]` closes `[` or `}`
    // closes `{`. That's validation, and this scanner doesn't do
    // validation.
    // ---------------------------------------------------------

    if (kind === 'compound') {
      if (lexeme.level.name !== 'compound') {
        continue;
      }

      if (lexeme.name === 'open') {
        depth++;
        continue;
      }

      if (lexeme.name === 'close') {
        depth--;

        if (depth === 0) {
          return {
            start,
            end: start + lexeme.stop,
            length: lexeme.stop,
            kind: 'compound',
          };
        }
      }
    }
  }

  throw new SyntaxError(
    `unterminated JSON-like value starting at ${start}`
  );
}


module.exports = {
  scanJsonValue,
};
```

#===========================================================================================================
@cjlx =

  #---------------------------------------------------------------------------------------------------------
  basics: ->
    probes_and_matchers = [
      [ [ 'abc"hello"xyz', 3                                  ], [ 3, 10, '"hello"'                                  ] ]
      [ [ 'abc"he\\"llo\\""xyz', 3                            ], [ 3, 14, '"he\\"llo\\""'                            ] ]
      [ [ 'abc{"g":"he\\"llo\\""}xyz', 3                      ], [ 3, 20, '{"g":"he\\"llo\\""}'                      ] ]
      [ [ '𪜀𪜁𪜂', 0                                            ], [ 0, 6, '𪜀𪜁𪜂'                                       ] ]
      [ [ 'abc"𪜀𪜁𪜂"xyz', 3                                    ], [ 3, 11, '"𪜀𪜁𪜂"'                                    ] ]
      [ [ '𪜀𪜁𪜂["xyz",]', 6                                    ], [ 6, 14, '["xyz",]'                                 ] ]
      [ [ '𪜀𪜁𪜂["xyz",[4,6,+8]]', 6                            ], [ 6, 22, '["xyz",[4,6,+8]]'                         ] ]
      [ [ 'abc[whatever,{},[4,{"k":[{"L":false}]},+8]]xyz', 3 ], [ 3, 43, '[whatever,{},[4,{"k":[{"L":false}]},+8]]' ] ]
      [ [ 'abc[whatever,+,-]xyz', 3                           ], [ 3, 17, '[whatever,+,-]'                           ] ]
      [ [ 'abc{a::whatever,verbose:+,colors:-}xyz', 3         ], [ 3, 35, '{a::whatever,verbose:+,colors:-}'         ] ]
      ]
    for [ [ text, start, ], matcher ] in probes_and_matchers
      { start, end, } = scanJsonValue text, start
      part            = text[ start ... end ]
      echo [[ text, start, ], [ start, end, part, ] ]
      @eq ( Ωcjlx___1 = -> [ start, end, part, ] ), matcher
    ;null

#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false, show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true, show_passes: false, report_checks: false, }
  # guytest_cfg = { throw_on_error: false, show_passes: true, report_checks: true, }
  ( new Test guytest_cfg ).test @cjlx
  ;null

