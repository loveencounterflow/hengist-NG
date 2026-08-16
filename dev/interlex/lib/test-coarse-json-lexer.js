(async function() {
  'use strict';
  var GTNG, GUY, SQL, Test, abbrlxm, alert, condense_lexemes, debug, echo, f, help, info, inspect, log, plain, praise, reverse, rpr, tabulate_lexeme, tabulate_lexemes, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('interlex/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  ({f} = require('../../../apps/effstring'));

  SQL = String.raw;

  ({condense_lexemes, abbrlxm, tabulate_lexemes, tabulate_lexeme} = require('./helpers'));

  
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
  // { internals: ct_internals
  //   isa
  //   std
  //   type_of               } = require '../../../apps/cleartype'
;

  //===========================================================================================================
  this.cjlx = {
    //---------------------------------------------------------------------------------------------------------
    basics: function() {
      var end, i, len, matcher, part, probes_and_matchers, start, text, Ωcjlx___1;
      probes_and_matchers = [[['abc"hello"xyz', 3], [3, 10, '"hello"']], [['abc"he\\"llo\\""xyz', 3], [3, 14, '"he\\"llo\\""']], [['abc{"g":"he\\"llo\\""}xyz', 3], [3, 20, '{"g":"he\\"llo\\""}']], [['𪜀𪜁𪜂', 0], [0, 6, '𪜀𪜁𪜂']], [['abc"𪜀𪜁𪜂"xyz', 3], [3, 11, '"𪜀𪜁𪜂"']], [['𪜀𪜁𪜂["xyz",]', 6], [6, 14, '["xyz",]']], [['𪜀𪜁𪜂["xyz",[4,6,+8]]', 6], [6, 22, '["xyz",[4,6,+8]]']], [['abc[whatever,{},[4,{"k":[{"L":false}]},+8]]xyz', 3], [3, 43, '[whatever,{},[4,{"k":[{"L":false}]},+8]]']], [['abc[whatever,+,-]xyz', 3], [3, 17, '[whatever,+,-]']], [['abc{a::whatever,verbose:+,colors:-}xyz', 3], [3, 35, '{a::whatever,verbose:+,colors:-}']]];
      for (i = 0, len = probes_and_matchers.length; i < len; i++) {
        [[text, start], matcher] = probes_and_matchers[i];
        ({start, end} = scanJsonValue(text, start));
        part = text.slice(start, end);
        echo([[text, start], [start, end, part]]);
        this.eq((Ωcjlx___1 = function() {
          return [start, end, part];
        }), matcher);
      }
      return null;
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var guytest_cfg;
      guytest_cfg = {
        throw_on_error: false,
        show_passes: false,
        report_checks: false
      };
      guytest_cfg = {
        throw_on_error: true,
        show_passes: false,
        report_checks: false
      };
      // guytest_cfg = { throw_on_error: false, show_passes: true, report_checks: true, }
      (new Test(guytest_cfg)).test(this.cjlx);
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtY29hcnNlLWpzb24tbGV4ZXIuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQUE7QUFBQSxNQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQSxFQUFBLGdCQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxlQUFBLEVBQUEsZ0JBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBOztFQUlBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0Isc0JBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxPQUhGLEVBSUUsR0FKRixDQUFBLEdBSTRCLEdBQUcsQ0FBQyxHQUpoQyxFQWRBOzs7RUFvQkEsSUFBQSxHQUE0QixPQUFBLENBQVEsMkJBQVI7O0VBQzVCLENBQUEsQ0FBRSxJQUFGLENBQUEsR0FBNEIsSUFBNUI7O0VBQ0EsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUI7O0VBQ0EsR0FBQSxHQUE0QixNQUFNLENBQUM7O0VBQ25DLENBQUEsQ0FBRSxnQkFBRixFQUNFLE9BREYsRUFFRSxnQkFGRixFQUdFLGVBSEYsQ0FBQSxHQUc0QixPQUFBLENBQVEsV0FBUixDQUg1Qjs7RUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7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eEMsVUFBQTtNQUFFLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsS0FBbEI7UUFBeUIsV0FBQSxFQUFhLEtBQXRDO1FBQTZDLGFBQUEsRUFBZTtNQUE1RDtNQUNkLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsSUFBbEI7UUFBd0IsV0FBQSxFQUFhLEtBQXJDO1FBQTRDLGFBQUEsRUFBZTtNQUEzRCxFQURoQjs7TUFHRSxDQUFFLElBQUksSUFBSixDQUFTLFdBQVQsQ0FBRixDQUF3QixDQUFDLElBQXpCLENBQThCLElBQUMsQ0FBQSxJQUEvQjthQUNDO0lBTHFDLENBQUEsSUFBeEM7O0FBbldBIiwic291cmNlc0NvbnRlbnQiOlsiXG4ndXNlIHN0cmljdCdcblxuXG5cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnaW50ZXJsZXgvdGVzdC1iYXNpY3MnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbiMgV0dVWSAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvd2ViZ3V5J1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuU1FMICAgICAgICAgICAgICAgICAgICAgICA9IFN0cmluZy5yYXdcbnsgY29uZGVuc2VfbGV4ZW1lc1xuICBhYmJybHhtXG4gIHRhYnVsYXRlX2xleGVtZXNcbiAgdGFidWxhdGVfbGV4ZW1lICAgICAgIH0gPSByZXF1aXJlICcuL2hlbHBlcnMnXG4jIHsgaW50ZXJuYWxzOiBjdF9pbnRlcm5hbHNcbiMgICBpc2FcbiMgICBzdGRcbiMgICB0eXBlX29mICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvY2xlYXJ0eXBlJ1xuXG5cbmBgYFxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB7IEdyYW1tYXIgfSA9IHJlcXVpcmUoJ2ludGVybGV4Jyk7XG5cblxuLypcbiAqIENvYXJzZSBKU09OIGxleGVyXG4gKlxuICogVGhpcyBpcyBkZWxpYmVyYXRlbHkgTk9UIGEgSlNPTiB2YWxpZGF0b3IuXG4gKlxuICogSXQgcmVjb2duaXplcyBlbm91Z2ggc3RydWN0dXJlIHRvIGRldGVybWluZSB0aGUgZXh0ZW50IG9mIGFcbiAqIEpTT04tbGlrZSB2YWx1ZTpcbiAqXG4gKiAgIFwiLi4uXCIgICAgICAgc3RyaW5nXG4gKiAgIHsuLi59ICAgICAgIGNvbXBvdW5kXG4gKiAgIFsuLi5dICAgICAgIGNvbXBvdW5kXG4gKiAgIGFueXRoaW5nICAgIGF0b21cbiAqXG4gKiBTdHJpbmdzIGFyZSBoYW5kbGVkIGluIHRoZWlyIG93biBsZXhlciBsZXZlbCBzbyB0aGF0IGVzY2FwZWRcbiAqIHF1b3RlcyBkbyBub3QgdGVybWluYXRlIHRoZSBzdHJpbmcuXG4gKlxuICogQXJyYXlzIGFuZCBvYmplY3RzIHNoYXJlIG9uZSBjb21wb3VuZCBsZXZlbC4gTmVzdGVkIGRlbGltaXRlcnNcbiAqIGFyZSBjb3VudGVkIGJ5IHRoZSBjYWxsZXIgcmF0aGVyIHRoYW4gYnkgcmVjdXJzaXZlIGxleGVyIGxldmVscztcbiAqIEludGVyTGV4IGRlbGliZXJhdGVseSBkb2VzIG5vdCBzdXBwb3J0IHJlY3Vyc2l2ZSBsZXZlbCBqdW1wcy5cbiAqL1xuXG5jb25zdCBncmFtbWFyID0gbmV3IEdyYW1tYXIoe1xuICBzdHJhdGVneTogJ2ZpcnN0JyxcbiAgZW1pdF9zaWduYWxzOiBmYWxzZSxcbiAgcmVzZXRfc3RhY2s6IHRydWUsXG4gIHJlc2V0X2Vycm9yczogdHJ1ZSxcbn0pO1xuXG5cbi8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuLy8gZ3JvdW5kIGxldmVsXG4vLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcblxuY29uc3QgZ3JvdW5kID0gZ3JhbW1hci5uZXdfbGV2ZWwoeyBuYW1lOiAnZ3JvdW5kJyB9KTtcblxuZ3JvdW5kLm5ld190b2tlbih7XG4gIG5hbWU6ICdzdHJpbmdfc3RhcnQnLFxuICBmaXQ6IC9cIi8sXG4gIGp1bXA6ICdzdHJpbmcnLFxufSk7XG5cbmdyb3VuZC5uZXdfdG9rZW4oe1xuICBuYW1lOiAnb2JqZWN0X3N0YXJ0JyxcbiAgZml0OiAvXFx7LyxcbiAganVtcDogJ2NvbXBvdW5kJyxcbn0pO1xuXG5ncm91bmQubmV3X3Rva2VuKHtcbiAgbmFtZTogJ2FycmF5X3N0YXJ0JyxcbiAgZml0OiAvXFxbLyxcbiAganVtcDogJ2NvbXBvdW5kJyxcbn0pO1xuXG5cbi8vIEEgY29hcnNlIFwiSlNPTiBwcmltaXRpdmVcIi5cbi8vXG4vLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IGRpc3Rpbmd1aXNoIG51bWJlciAvIHRydWUgLyBmYWxzZSAvIG51bGwsXG4vLyBhbmQgd2UgZG9uJ3QgZnVsbHkgdmFsaWRhdGUgdGhlaXIgc3ludGF4LlxuLy9cbi8vIEEgY2h1bmsgZW5kcyBhdCB3aGl0ZXNwYWNlIG9yIGF0IGEgY2hhcmFjdGVyIHRoYXQgaGFzIHN0cnVjdHVyYWxcbi8vIHNpZ25pZmljYW5jZSBmb3IgSlNPTi5cbmdyb3VuZC5uZXdfdG9rZW4oe1xuICBuYW1lOiAnYXRvbScsXG4gIGZpdDogL1teXFxzXFx7XFx9XFxbXFxdXCIsOl0rLyxcbn0pO1xuXG5ncm91bmQubmV3X3Rva2VuKHtcbiAgbmFtZTogJ3doaXRlc3BhY2UnLFxuICBmaXQ6IC9cXHMrLyxcbn0pO1xuXG5cbi8vIFRoZXNlIGFyZSBpcnJlbGV2YW50IGZvciBmaW5kaW5nIHRoZSBleHRlbnQgb2YgYSBjb21wb3VuZCB2YWx1ZSxcbi8vIGJ1dCB0aGV5IGFsbG93IEludGVyTGV4IHRvIGNvbnRpbnVlIHNjYW5uaW5nIGFmdGVyIHRoZSB2YWx1ZS5cbmdyb3VuZC5uZXdfdG9rZW4oe1xuICBuYW1lOiAncHVuY3R1YXRpb24nLFxuICBmaXQ6IC9bLDpcXF1cXH1dLyxcbn0pO1xuXG5cbi8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuLy8gc3RyaW5nIGxldmVsXG4vLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcblxuY29uc3Qgc3RyaW5nID0gZ3JhbW1hci5uZXdfbGV2ZWwoeyBuYW1lOiAnc3RyaW5nJyB9KTtcblxuXG4vLyBCYWNrc2xhc2ggKyBmb2xsb3dpbmcgY2hhcmFjdGVyIGlzIGFsd2F5cyBvbmUgbGV4aWNhbCB1bml0IGhlcmUuXG4vL1xuLy8gV2UgZG8gbm90IHZhbGlkYXRlIHdoZXRoZXIgdGhlIGVzY2FwZSBpcyBvbmUgb2YgSlNPTidzIGxlZ2FsXG4vLyBlc2NhcGVzLiBUaGF0J3MgaW50ZW50aW9uYWwuXG5zdHJpbmcubmV3X3Rva2VuKHtcbiAgbmFtZTogJ2VzY2FwZScsXG4gIGZpdDogL1xcXFxbXFxzXFxTXS8sXG59KTtcblxuXG4vLyBBbnkgcnVuIG9mIG9yZGluYXJ5IHN0cmluZyBjaGFyYWN0ZXJzLlxuLy9cbi8vIEluIHBhcnRpY3VsYXIsIG5laXRoZXIgJ1wiJyBub3IgJ1xcJyBiZWxvbmdzIHRvIHRoaXMgdG9rZW4uXG5zdHJpbmcubmV3X3Rva2VuKHtcbiAgbmFtZTogJ3RleHQnLFxuICBmaXQ6IC9bXlwiXFxcXF0rLyxcbiAgbWVyZ2U6IHRydWUsXG59KTtcblxuXG4vLyBUaGUgZmlyc3QgdW5lc2NhcGVkICdcIicgZW5kcyB0aGUgc3RyaW5nIGFuZCByZXR1cm5zIHRvIHRoZVxuLy8gcHJldmlvdXMgbGV2ZWwuXG5zdHJpbmcubmV3X3Rva2VuKHtcbiAgbmFtZTogJ2VuZCcsXG4gIGZpdDogL1wiLyxcbiAganVtcDogJy4uJyxcbn0pO1xuXG5cbi8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuLy8gY29tcG91bmQgbGV2ZWxcbi8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuLy9cbi8vIFRoaXMgbGV2ZWwgaXMgaW50ZW50aW9uYWxseSByZWN1cnNpdmUgb25seSBpbiB0aGUgKmRhdGEqIHNlbnNlLFxuLy8gbm90IHRocm91Z2ggSW50ZXJMZXggbGV2ZWwganVtcHMuXG4vL1xuLy8gRXZlcnkgb3BlbmluZyBicmFjZS9icmFja2V0IGNvbnRyaWJ1dGVzICsxIG5lc3RpbmcgZGVwdGguXG4vLyBFdmVyeSBjbG9zaW5nIGJyYWNlL2JyYWNrZXQgY29udHJpYnV0ZXMgLTEuXG4vL1xuLy8gV2UgZGVsaWJlcmF0ZWx5IGRvIG5vdCBkaXN0aW5ndWlzaCB7IGZyb20gWyBhbmQgfSBmcm9tIF0gaGVyZTtcbi8vIGRvaW5nIHNvIHdvdWxkIHR1cm4gdGhpcyBpbnRvIHN5bnRheCB2YWxpZGF0aW9uLCB3aGljaCB3ZSBkb24ndFxuLy8gd2FudCBhdCB0aGlzIHN0YWdlLlxuXG5jb25zdCBjb21wb3VuZCA9IGdyYW1tYXIubmV3X2xldmVsKHsgbmFtZTogJ2NvbXBvdW5kJyB9KTtcblxuY29tcG91bmQubmV3X3Rva2VuKHtcbiAgbmFtZTogJ29wZW4nLFxuICBmaXQ6IC9bXFx7XFxbXS8sXG59KTtcblxuY29tcG91bmQubmV3X3Rva2VuKHtcbiAgbmFtZTogJ2Nsb3NlJyxcbiAgZml0OiAvW1xcfVxcXV0vLFxufSk7XG5cblxuLy8gQSBxdW90ZSBzdGFydHMgYSBnZW51aW5lIHN0cmluZyBsZXZlbCBldmVuIHdoaWxlIHdlJ3JlIGluc2lkZVxuLy8gYSBjb21wb3VuZCB2YWx1ZS5cbmNvbXBvdW5kLm5ld190b2tlbih7XG4gIG5hbWU6ICdzdHJpbmdfc3RhcnQnLFxuICBmaXQ6IC9cIi8sXG4gIGp1bXA6ICdzdHJpbmcnLFxufSk7XG5cbmNvbXBvdW5kLm5ld190b2tlbih7XG4gIG5hbWU6ICdhdG9tJyxcbiAgZml0OiAvW15cXHNcXHtcXH1cXFtcXF1cIiw6XSsvLFxufSk7XG5cbmNvbXBvdW5kLm5ld190b2tlbih7XG4gIG5hbWU6ICd3aGl0ZXNwYWNlJyxcbiAgZml0OiAvXFxzKy8sXG59KTtcblxuY29tcG91bmQubmV3X3Rva2VuKHtcbiAgbmFtZTogJ3B1bmN0dWF0aW9uJyxcbiAgZml0OiAvWyw6XFxdXS8sXG59KTtcblxuXG4vLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbi8vIHNjYW5uZXJcbi8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG5mdW5jdGlvbiBzY2FuSnNvblZhbHVlKHNvdXJjZSwgc3RhcnQgPSAwKSB7XG4gIGlmICh0eXBlb2Ygc291cmNlICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NvdXJjZSBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gIH1cblxuICBpZiAoIU51bWJlci5pc0ludGVnZXIoc3RhcnQpIHx8IHN0YXJ0IDwgMCB8fCBzdGFydCA+PSBzb3VyY2UubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYGludmFsaWQgc3RhcnQgcG9zaXRpb246ICR7c3RhcnR9YCk7XG4gIH1cblxuICBjb25zdCBpbnB1dCA9IHNvdXJjZS5zbGljZShzdGFydCk7XG5cbiAgbGV0IGZpcnN0ID0gdHJ1ZTtcbiAgbGV0IGtpbmQgPSBudWxsO1xuICBsZXQgZGVwdGggPSAwO1xuXG4gIGZvciAoY29uc3QgbGV4ZW1lIG9mIGdyYW1tYXIuc2NhbihpbnB1dCkpIHtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEZpcnN0IGxleGVtZSBkZXRlcm1pbmVzIHRoZSBraW5kIG9mIHZhbHVlLlxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgaWYgKGZpcnN0KSB7XG4gICAgICBmaXJzdCA9IGZhbHNlO1xuXG4gICAgICBzd2l0Y2ggKGxleGVtZS5uYW1lKSB7XG4gICAgICAgIGNhc2UgJ3N0cmluZ19zdGFydCc6XG4gICAgICAgICAga2luZCA9ICdzdHJpbmcnO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ29iamVjdF9zdGFydCc6XG4gICAgICAgIGNhc2UgJ2FycmF5X3N0YXJ0JzpcbiAgICAgICAgICBraW5kID0gJ2NvbXBvdW5kJztcbiAgICAgICAgICBkZXB0aCA9IDE7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXRvbSc6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBzdGFydCArIGxleGVtZS5zdG9wLFxuICAgICAgICAgICAgbGVuZ3RoOiBsZXhlbWUubGVuZ3RoLFxuICAgICAgICAgICAga2luZDogJ3ByaW1pdGl2ZScsXG4gICAgICAgICAgfTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihcbiAgICAgICAgICAgIGBleHBlY3RlZCBKU09OIHZhbHVlIGF0ICR7c3RhcnR9LCBmb3VuZCAke2xleGVtZS5uYW1lfWBcbiAgICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFN0cmluZzogdGhlIGNsb3NpbmcgcXVvdGUgaXMgdGhlIGZpcnN0IGBlbmRgIHRva2VuIGluIHRoZVxuICAgIC8vIHN0cmluZyBsZXZlbC5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGlmIChraW5kID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKFxuICAgICAgICBsZXhlbWUubGV2ZWwubmFtZSA9PT0gJ3N0cmluZycgJiZcbiAgICAgICAgbGV4ZW1lLm5hbWUgPT09ICdlbmQnXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdGFydCxcbiAgICAgICAgICBlbmQ6IHN0YXJ0ICsgbGV4ZW1lLnN0b3AsXG4gICAgICAgICAgbGVuZ3RoOiBsZXhlbWUuc3RvcCxcbiAgICAgICAgICBraW5kOiAnc3RyaW5nJyxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgY29udGludWU7XG4gICAgfVxuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBDb21wb3VuZDogY291bnQgb3BlbmluZyAvIGNsb3NpbmcgZGVsaW1pdGVycy5cbiAgICAvL1xuICAgIC8vIFdlIGRlbGliZXJhdGVseSBkb24ndCBjaGVjayB3aGV0aGVyIGBdYCBjbG9zZXMgYFtgIG9yIGB9YFxuICAgIC8vIGNsb3NlcyBge2AuIFRoYXQncyB2YWxpZGF0aW9uLCBhbmQgdGhpcyBzY2FubmVyIGRvZXNuJ3QgZG9cbiAgICAvLyB2YWxpZGF0aW9uLlxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgaWYgKGtpbmQgPT09ICdjb21wb3VuZCcpIHtcbiAgICAgIGlmIChsZXhlbWUubGV2ZWwubmFtZSAhPT0gJ2NvbXBvdW5kJykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxleGVtZS5uYW1lID09PSAnb3BlbicpIHtcbiAgICAgICAgZGVwdGgrKztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChsZXhlbWUubmFtZSA9PT0gJ2Nsb3NlJykge1xuICAgICAgICBkZXB0aC0tO1xuXG4gICAgICAgIGlmIChkZXB0aCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGFydCxcbiAgICAgICAgICAgIGVuZDogc3RhcnQgKyBsZXhlbWUuc3RvcCxcbiAgICAgICAgICAgIGxlbmd0aDogbGV4ZW1lLnN0b3AsXG4gICAgICAgICAgICBraW5kOiAnY29tcG91bmQnLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXG4gICAgYHVudGVybWluYXRlZCBKU09OLWxpa2UgdmFsdWUgc3RhcnRpbmcgYXQgJHtzdGFydH1gXG4gICk7XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNjYW5Kc29uVmFsdWUsXG59O1xuYGBgXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQGNqbHggPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYmFzaWNzOiAtPlxuICAgIHByb2Jlc19hbmRfbWF0Y2hlcnMgPSBbXG4gICAgICBbIFsgJ2FiY1wiaGVsbG9cInh5eicsIDMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgWyAzLCAxMCwgJ1wiaGVsbG9cIicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSBdXG4gICAgICBbIFsgJ2FiY1wiaGVcXFxcXCJsbG9cXFxcXCJcInh5eicsIDMgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgWyAzLCAxNCwgJ1wiaGVcXFxcXCJsbG9cXFxcXCJcIicgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSBdXG4gICAgICBbIFsgJ2FiY3tcImdcIjpcImhlXFxcXFwibGxvXFxcXFwiXCJ9eHl6JywgMyAgICAgICAgICAgICAgICAgICAgICBdLCBbIDMsIDIwLCAne1wiZ1wiOlwiaGVcXFxcXCJsbG9cXFxcXCJcIn0nICAgICAgICAgICAgICAgICAgICAgIF0gXVxuICAgICAgWyBbICfwqpyA8KqcgfCqnIInLCAwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLCBbIDAsIDYsICfwqpyA8KqcgfCqnIInICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSBdXG4gICAgICBbIFsgJ2FiY1wi8KqcgPCqnIHwqpyCXCJ4eXonLCAzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgWyAzLCAxMSwgJ1wi8KqcgPCqnIHwqpyCXCInICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSBdXG4gICAgICBbIFsgJ/CqnIDwqpyB8KqcgltcInh5elwiLF0nLCA2ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgWyA2LCAxNCwgJ1tcInh5elwiLF0nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSBdXG4gICAgICBbIFsgJ/CqnIDwqpyB8KqcgltcInh5elwiLFs0LDYsKzhdXScsIDYgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgWyA2LCAyMiwgJ1tcInh5elwiLFs0LDYsKzhdXScgICAgICAgICAgICAgICAgICAgICAgICAgXSBdXG4gICAgICBbIFsgJ2FiY1t3aGF0ZXZlcix7fSxbNCx7XCJrXCI6W3tcIkxcIjpmYWxzZX1dfSwrOF1deHl6JywgMyBdLCBbIDMsIDQzLCAnW3doYXRldmVyLHt9LFs0LHtcImtcIjpbe1wiTFwiOmZhbHNlfV19LCs4XV0nIF0gXVxuICAgICAgWyBbICdhYmNbd2hhdGV2ZXIsKywtXXh5eicsIDMgICAgICAgICAgICAgICAgICAgICAgICAgICBdLCBbIDMsIDE3LCAnW3doYXRldmVyLCssLV0nICAgICAgICAgICAgICAgICAgICAgICAgICAgXSBdXG4gICAgICBbIFsgJ2FiY3thOjp3aGF0ZXZlcix2ZXJib3NlOissY29sb3JzOi19eHl6JywgMyAgICAgICAgIF0sIFsgMywgMzUsICd7YTo6d2hhdGV2ZXIsdmVyYm9zZTorLGNvbG9yczotfScgICAgICAgICBdIF1cbiAgICAgIF1cbiAgICBmb3IgWyBbIHRleHQsIHN0YXJ0LCBdLCBtYXRjaGVyIF0gaW4gcHJvYmVzX2FuZF9tYXRjaGVyc1xuICAgICAgeyBzdGFydCwgZW5kLCB9ID0gc2Nhbkpzb25WYWx1ZSB0ZXh0LCBzdGFydFxuICAgICAgcGFydCAgICAgICAgICAgID0gdGV4dFsgc3RhcnQgLi4uIGVuZCBdXG4gICAgICBlY2hvIFtbIHRleHQsIHN0YXJ0LCBdLCBbIHN0YXJ0LCBlbmQsIHBhcnQsIF0gXVxuICAgICAgQGVxICggzqljamx4X19fMSA9IC0+IFsgc3RhcnQsIGVuZCwgcGFydCwgXSApLCBtYXRjaGVyXG4gICAgO251bGxcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgIyBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCBzaG93X3Bhc3NlczogdHJ1ZSwgcmVwb3J0X2NoZWNrczogdHJ1ZSwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCBAY2pseFxuICA7bnVsbFxuXG4iXX0=
