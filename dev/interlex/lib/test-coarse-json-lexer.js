(async function() {
  'use strict';
  var GTNG, GUY, SQL, Test, abbrlxm, alert, condense_lexemes, debug, echo, f, get_scanner, help, info, inspect, log, plain, praise, reverse, rpr, tabulate_lexeme, tabulate_lexemes, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('interlex/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  ({f} = require('../../../apps/effstring'));

  SQL = String.raw;

  ({condense_lexemes, abbrlxm, tabulate_lexemes, tabulate_lexeme} = require('./helpers'));

  // { internals: ct_internals
  //   isa
  //   std
  //   type_of               } = require '../../../apps/cleartype'
  get_scanner = function() {
    /*
    Coarse JSON lexer
    This is deliberately NOT a JSON validator.
    It recognizes enough structure to determine the extent of a
    JSON-like value:
     "..."       string
     {...}       compound
     [...]       compound
     anything    atom
    Strings are handled in their own lexer level so that escaped
    quotes do not terminate the string.
    Arrays and objects share one compound level. Nested delimiters
    are counted by the caller rather than by recursive lexer levels;
    InterLex deliberately does not support recursive level jumps.
    */
    var Grammar, compound, g_cfg, gnd, grammar, scanJsonValue, string;
    ({Grammar} = require('interlex'));
    g_cfg = {
      strategy: 'first',
      emit_signals: false,
      reset_stack: true,
      reset_errors: true
    };
    grammar = new Grammar(g_cfg);
    gnd = grammar.new_level({
      name: 'gnd'
    });
    //=========================================================================================================
    gnd.new_token('string_start', /"/, {
      jump: 'string'
    });
    gnd.new_token('object_start', /\{/, {
      jump: 'compound'
    });
    gnd.new_token('array_start', /\[/, {
      jump: 'compound'
    });
    // A coarse "JSON primitive".

    // We intentionally don't distinguish number / true / false / null,
    // and we don't fully validate their syntax.

    // A chunk ends at whitespace or at a character that has structural
    // significance for JSON.
    gnd.new_token('atom', /[^\s\{\}\[\]",:]+/);
    gnd.new_token('whitespace', /\s+/);
    // These are irrelevant for finding the extent of a compound value,
    // but they allow InterLex to continue scanning after the value.
    gnd.new_token('punctuation', /[,:\]\}]/);
    //=========================================================================================================
    // string level
    //---------------------------------------------------------------------------------------------------------
    string = grammar.new_level({
      name: 'string'
    });
    string.new_token('escape', /\\[\s\S]/);
    // Any run of ordinary string characters.
    // In particular, neither '"' nor '\' belongs to this token.
    string.new_token('text', /[^"\\]+/, {
      merge: true
    });
    // The first unescaped '"' ends the string and returns to the
    // previous level.
    string.new_token('end', /"/, {
      jump: '..'
    });
    //=========================================================================================================
    // compound level
    //---------------------------------------------------------------------------------------------------------
    // This level is intentionally recursive only in the *data* sense,
    // not through InterLex level jumps.

    // Every opening brace/bracket contributes +1 nesting depth.
    // Every closing brace/bracket contributes -1.

    // We deliberately do not distinguish { from [ and } from ] here;
    // doing so would turn this into syntax validation, which we don't
    // want at this stage.
    compound = grammar.new_level({
      name: 'compound'
    });
    compound.new_token('open', /[\{\[]/);
    compound.new_token('close', /[\}\]]/);
    // A quote starts a genuine string level even while we're inside
    // a compound value.
    compound.new_token('string_start', /"/, {
      jump: 'string'
    });
    compound.new_token('atom', /[^\s\{\}\[\]",:]+/);
    compound.new_token('whitespace', /\s+/);
    compound.new_token('punctuation', /[,:\]]/);
    //=========================================================================================================
    // scanner
    //---------------------------------------------------------------------------------------------------------
    scanJsonValue = function(source, start = 0) {
      var depth, input, is_first, kind, lexeme;
      if (typeof source !== 'string') {
        throw new TypeError('source must be a string');
      }
      if ((!Number.isInteger(start)) || (start < 0) || (start >= source.length)) {
        throw new RangeError(`invalid start position: ${rpr(start)}`);
      }
      input = source.slice(start);
      is_first = true;
      kind = null;
      depth = 0;
      for (lexeme of grammar.scan(input)) {
        //.....................................................................................................
        // First lexeme determines the kind of value.
        if (is_first) {
          is_first = false;
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
                kind: 'primitive'
              };
            default:
              throw new SyntaxError("expected JSON value at ${start}, found ${lexeme.name}");
          }
          continue;
        }
        //.....................................................................................................
        // String: the closing quote is the first `end` token in the
        // string level.
        // ---------------------------------------------------------
        if (kind === 'string') {
          if ((lexeme.level.name === 'string') && (lexeme.name === 'end')) {
            return {
              start,
              end: start + lexeme.stop,
              length: lexeme.stop,
              kind: 'string'
            };
          }
          continue;
        }
        //.....................................................................................................
        // Compound: count opening / closing delimiters.

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
                kind: 'compound'
              };
            }
          }
        }
      }
      throw new SyntaxError("unterminated JSON-like value starting at ${start}");
    };
    return scanJsonValue;
  };

  //===========================================================================================================
  this.cjlx = {
    //---------------------------------------------------------------------------------------------------------
    basics: function() {
      var end, i, len, matcher, part, probes_and_matchers, scanJsonValue, start, text, Ωcjlx___1;
      probes_and_matchers = [[['abc"hello"xyz', 3], [3, 10, '"hello"']], [['abc"he\\"llo\\""xyz', 3], [3, 14, '"he\\"llo\\""']], [['abc{"g":"he\\"llo\\""}xyz', 3], [3, 20, '{"g":"he\\"llo\\""}']], [['𪜀𪜁𪜂', 0], [0, 6, '𪜀𪜁𪜂']], [['abc"𪜀𪜁𪜂"xyz', 3], [3, 11, '"𪜀𪜁𪜂"']], [['𪜀𪜁𪜂["xyz",]', 6], [6, 14, '["xyz",]']], [['𪜀𪜁𪜂["xyz",[4,6,+8]]', 6], [6, 22, '["xyz",[4,6,+8]]']], [['abc[whatever,{},[4,{"k":[{"L":false}]},+8]]xyz', 3], [3, 43, '[whatever,{},[4,{"k":[{"L":false}]},+8]]']], [['abc[whatever,+,-]xyz', 3], [3, 17, '[whatever,+,-]']], [['abc{a::whatever,verbose:+,colors:-}xyz', 3], [3, 35, '{a::whatever,verbose:+,colors:-}']]];
      scanJsonValue = get_scanner();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtY29hcnNlLWpzb24tbGV4ZXIuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQUE7QUFBQSxNQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQSxFQUFBLGdCQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsV0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsZUFBQSxFQUFBLGdCQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQTs7RUFJQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLHNCQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsT0FIRixFQUlFLEdBSkYsQ0FBQSxHQUk0QixHQUFHLENBQUMsR0FKaEMsRUFkQTs7O0VBb0JBLElBQUEsR0FBNEIsT0FBQSxDQUFRLDJCQUFSOztFQUM1QixDQUFBLENBQUUsSUFBRixDQUFBLEdBQTRCLElBQTVCOztFQUNBLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLHlCQUFSLENBQTVCOztFQUNBLEdBQUEsR0FBNEIsTUFBTSxDQUFDOztFQUNuQyxDQUFBLENBQUUsZ0JBQUYsRUFDRSxPQURGLEVBRUUsZ0JBRkYsRUFHRSxlQUhGLENBQUEsR0FHNEIsT0FBQSxDQUFRLFdBQVIsQ0FINUIsRUF4QkE7Ozs7OztF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LENBQUEsQ0FBQSxHQUFBO0FBQ3hDLFVBQUE7TUFBRSxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLEtBQWxCO1FBQXlCLFdBQUEsRUFBYSxLQUF0QztRQUE2QyxhQUFBLEVBQWU7TUFBNUQ7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLElBQWxCO1FBQXdCLFdBQUEsRUFBYSxLQUFyQztRQUE0QyxhQUFBLEVBQWU7TUFBM0QsRUFEaEI7O01BR0UsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QixJQUFDLENBQUEsSUFBL0I7YUFDQztJQUxxQyxDQUFBLElBQXhDOztBQW5OQSIsInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzdHJpY3QnXG5cblxuXG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2ludGVybGV4L3Rlc3QtYmFzaWNzJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG4jIFdHVVkgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL3dlYmd1eSdcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcblNRTCAgICAgICAgICAgICAgICAgICAgICAgPSBTdHJpbmcucmF3XG57IGNvbmRlbnNlX2xleGVtZXNcbiAgYWJicmx4bVxuICB0YWJ1bGF0ZV9sZXhlbWVzXG4gIHRhYnVsYXRlX2xleGVtZSAgICAgICB9ID0gcmVxdWlyZSAnLi9oZWxwZXJzJ1xuIyB7IGludGVybmFsczogY3RfaW50ZXJuYWxzXG4jICAgaXNhXG4jICAgc3RkXG4jICAgdHlwZV9vZiAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2NsZWFydHlwZSdcblxuXG5nZXRfc2Nhbm5lciA9IC0+XG4gICMjI1xuICBDb2Fyc2UgSlNPTiBsZXhlclxuICBUaGlzIGlzIGRlbGliZXJhdGVseSBOT1QgYSBKU09OIHZhbGlkYXRvci5cbiAgSXQgcmVjb2duaXplcyBlbm91Z2ggc3RydWN0dXJlIHRvIGRldGVybWluZSB0aGUgZXh0ZW50IG9mIGFcbiAgSlNPTi1saWtlIHZhbHVlOlxuICAgXCIuLi5cIiAgICAgICBzdHJpbmdcbiAgIHsuLi59ICAgICAgIGNvbXBvdW5kXG4gICBbLi4uXSAgICAgICBjb21wb3VuZFxuICAgYW55dGhpbmcgICAgYXRvbVxuICBTdHJpbmdzIGFyZSBoYW5kbGVkIGluIHRoZWlyIG93biBsZXhlciBsZXZlbCBzbyB0aGF0IGVzY2FwZWRcbiAgcXVvdGVzIGRvIG5vdCB0ZXJtaW5hdGUgdGhlIHN0cmluZy5cbiAgQXJyYXlzIGFuZCBvYmplY3RzIHNoYXJlIG9uZSBjb21wb3VuZCBsZXZlbC4gTmVzdGVkIGRlbGltaXRlcnNcbiAgYXJlIGNvdW50ZWQgYnkgdGhlIGNhbGxlciByYXRoZXIgdGhhbiBieSByZWN1cnNpdmUgbGV4ZXIgbGV2ZWxzO1xuICBJbnRlckxleCBkZWxpYmVyYXRlbHkgZG9lcyBub3Qgc3VwcG9ydCByZWN1cnNpdmUgbGV2ZWwganVtcHMuXG4gICMjI1xuICB7IEdyYW1tYXIgfSA9IHJlcXVpcmUgJ2ludGVybGV4J1xuICBnX2NmZyAgICAgICA9XG4gICAgc3RyYXRlZ3k6ICAgICAgICdmaXJzdCdcbiAgICBlbWl0X3NpZ25hbHM6ICAgZmFsc2VcbiAgICByZXNldF9zdGFjazogICAgdHJ1ZVxuICAgIHJlc2V0X2Vycm9yczogICB0cnVlXG4gIGdyYW1tYXIgICAgID0gbmV3IEdyYW1tYXIgZ19jZmdcbiAgZ25kICAgICAgICAgPSBncmFtbWFyLm5ld19sZXZlbCB7IG5hbWU6ICdnbmQnIH1cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBnbmQubmV3X3Rva2VuICdzdHJpbmdfc3RhcnQnLCAvXCIvLCAgeyAgICAganVtcDogJ3N0cmluZycsIH1cbiAgZ25kLm5ld190b2tlbiAnb2JqZWN0X3N0YXJ0JywgL1xcey8sIHsgICAgIGp1bXA6ICdjb21wb3VuZCcsIH1cbiAgZ25kLm5ld190b2tlbiAnYXJyYXlfc3RhcnQnLCAgL1xcWy8sIHsgICAgIGp1bXA6ICdjb21wb3VuZCcsIH1cblxuICAjIEEgY29hcnNlIFwiSlNPTiBwcmltaXRpdmVcIi5cbiAgI1xuICAjIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgZGlzdGluZ3Vpc2ggbnVtYmVyIC8gdHJ1ZSAvIGZhbHNlIC8gbnVsbCxcbiAgIyBhbmQgd2UgZG9uJ3QgZnVsbHkgdmFsaWRhdGUgdGhlaXIgc3ludGF4LlxuICAjXG4gICMgQSBjaHVuayBlbmRzIGF0IHdoaXRlc3BhY2Ugb3IgYXQgYSBjaGFyYWN0ZXIgdGhhdCBoYXMgc3RydWN0dXJhbFxuICAjIHNpZ25pZmljYW5jZSBmb3IgSlNPTi5cbiAgZ25kLm5ld190b2tlbiAnYXRvbScsICAgICAgIC9bXlxcc1xce1xcfVxcW1xcXVwiLDpdKy9cbiAgZ25kLm5ld190b2tlbiAnd2hpdGVzcGFjZScsIC9cXHMrL1xuXG4gICMgVGhlc2UgYXJlIGlycmVsZXZhbnQgZm9yIGZpbmRpbmcgdGhlIGV4dGVudCBvZiBhIGNvbXBvdW5kIHZhbHVlLFxuICAjIGJ1dCB0aGV5IGFsbG93IEludGVyTGV4IHRvIGNvbnRpbnVlIHNjYW5uaW5nIGFmdGVyIHRoZSB2YWx1ZS5cbiAgZ25kLm5ld190b2tlbiAncHVuY3R1YXRpb24nLCAvWyw6XFxdXFx9XS9cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAjIHN0cmluZyBsZXZlbFxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHN0cmluZyA9IGdyYW1tYXIubmV3X2xldmVsKHsgbmFtZTogJ3N0cmluZycgfSk7XG4gICMgQmFja3NsYXNoICsgZm9sbG93aW5nIGNoYXJhY3RlciBpcyBhbHdheXMgb25lIGxleGljYWwgdW5pdCBoZXJlLlxuICAjIFdlIGRvIG5vdCB2YWxpZGF0ZSB3aGV0aGVyIHRoZSBlc2NhcGUgaXMgb25lIG9mIEpTT04ncyBsZWdhbFxuICAjIGVzY2FwZXMuIFRoYXQncyBpbnRlbnRpb25hbC5cbiAgc3RyaW5nLm5ld190b2tlbiAnZXNjYXBlJywgL1xcXFxbXFxzXFxTXS9cbiAgIyBBbnkgcnVuIG9mIG9yZGluYXJ5IHN0cmluZyBjaGFyYWN0ZXJzLlxuICAjIEluIHBhcnRpY3VsYXIsIG5laXRoZXIgJ1wiJyBub3IgJ1xcJyBiZWxvbmdzIHRvIHRoaXMgdG9rZW4uXG4gIHN0cmluZy5uZXdfdG9rZW4gJ3RleHQnLCAvW15cIlxcXFxdKy8sIHsgbWVyZ2U6IHRydWUsIH1cbiAgIyBUaGUgZmlyc3QgdW5lc2NhcGVkICdcIicgZW5kcyB0aGUgc3RyaW5nIGFuZCByZXR1cm5zIHRvIHRoZVxuICAjIHByZXZpb3VzIGxldmVsLlxuICBzdHJpbmcubmV3X3Rva2VuICdlbmQnLCAvXCIvLCB7IGp1bXA6ICcuLicsIH1cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAjIGNvbXBvdW5kIGxldmVsXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyBUaGlzIGxldmVsIGlzIGludGVudGlvbmFsbHkgcmVjdXJzaXZlIG9ubHkgaW4gdGhlICpkYXRhKiBzZW5zZSxcbiAgIyBub3QgdGhyb3VnaCBJbnRlckxleCBsZXZlbCBqdW1wcy5cbiAgI1xuICAjIEV2ZXJ5IG9wZW5pbmcgYnJhY2UvYnJhY2tldCBjb250cmlidXRlcyArMSBuZXN0aW5nIGRlcHRoLlxuICAjIEV2ZXJ5IGNsb3NpbmcgYnJhY2UvYnJhY2tldCBjb250cmlidXRlcyAtMS5cbiAgI1xuICAjIFdlIGRlbGliZXJhdGVseSBkbyBub3QgZGlzdGluZ3Vpc2ggeyBmcm9tIFsgYW5kIH0gZnJvbSBdIGhlcmU7XG4gICMgZG9pbmcgc28gd291bGQgdHVybiB0aGlzIGludG8gc3ludGF4IHZhbGlkYXRpb24sIHdoaWNoIHdlIGRvbid0XG4gICMgd2FudCBhdCB0aGlzIHN0YWdlLlxuICBjb21wb3VuZCA9IGdyYW1tYXIubmV3X2xldmVsIHsgbmFtZTogJ2NvbXBvdW5kJyB9XG4gIGNvbXBvdW5kLm5ld190b2tlbiAnb3BlbicsICAgICAgICAgIC9bXFx7XFxbXS9cbiAgY29tcG91bmQubmV3X3Rva2VuICdjbG9zZScsICAgICAgICAgL1tcXH1cXF1dL1xuICAjIEEgcXVvdGUgc3RhcnRzIGEgZ2VudWluZSBzdHJpbmcgbGV2ZWwgZXZlbiB3aGlsZSB3ZSdyZSBpbnNpZGVcbiAgIyBhIGNvbXBvdW5kIHZhbHVlLlxuICBjb21wb3VuZC5uZXdfdG9rZW4gJ3N0cmluZ19zdGFydCcsICAvXCIvLCB7IGp1bXA6ICdzdHJpbmcnLCB9XG4gIGNvbXBvdW5kLm5ld190b2tlbiAnYXRvbScsICAgICAgICAgIC9bXlxcc1xce1xcfVxcW1xcXVwiLDpdKy9cbiAgY29tcG91bmQubmV3X3Rva2VuICd3aGl0ZXNwYWNlJywgICAgL1xccysvXG4gIGNvbXBvdW5kLm5ld190b2tlbiAncHVuY3R1YXRpb24nLCAgIC9bLDpcXF1dL1xuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICMgc2Nhbm5lclxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgc2Nhbkpzb25WYWx1ZSA9ICggc291cmNlLCBzdGFydCA9IDAgKSAtPlxuICAgIGlmIHR5cGVvZiBzb3VyY2UgaXNudCAnc3RyaW5nJ1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvciAnc291cmNlIG11c3QgYmUgYSBzdHJpbmcnXG5cbiAgICBpZiAoIG5vdCBOdW1iZXIuaXNJbnRlZ2VyIHN0YXJ0ICkgb3IgKCBzdGFydCA8IDAgKSBvciAoIHN0YXJ0ID49IHNvdXJjZS5sZW5ndGggKVxuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IgXCJpbnZhbGlkIHN0YXJ0IHBvc2l0aW9uOiAje3JwciBzdGFydH1cIlxuICAgIGlucHV0ID0gc291cmNlLnNsaWNlKHN0YXJ0KTtcbiAgICBpc19maXJzdCA9IHRydWU7XG4gICAga2luZCA9IG51bGw7XG4gICAgZGVwdGggPSAwO1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZm9yIGxleGVtZSBmcm9tIGdyYW1tYXIuc2NhbiBpbnB1dFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIEZpcnN0IGxleGVtZSBkZXRlcm1pbmVzIHRoZSBraW5kIG9mIHZhbHVlLlxuICAgICAgaWYgaXNfZmlyc3RcbiAgICAgICAgaXNfZmlyc3QgPSBmYWxzZVxuICAgICAgICBzd2l0Y2ggbGV4ZW1lLm5hbWVcbiAgICAgICAgICB3aGVuICdzdHJpbmdfc3RhcnQnXG4gICAgICAgICAgICBraW5kID0gJ3N0cmluZyc7XG4gICAgICAgICAgd2hlbiAnb2JqZWN0X3N0YXJ0JywgICdhcnJheV9zdGFydCdcbiAgICAgICAgICAgIGtpbmQgPSAnY29tcG91bmQnO1xuICAgICAgICAgICAgZGVwdGggPSAxO1xuICAgICAgICAgIHdoZW4gJ2F0b20nXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBzdGFydCxcbiAgICAgICAgICAgICAgZW5kOiBzdGFydCArIGxleGVtZS5zdG9wLFxuICAgICAgICAgICAgICBsZW5ndGg6IGxleGVtZS5sZW5ndGgsXG4gICAgICAgICAgICAgIGtpbmQ6ICdwcmltaXRpdmUnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IgXCJleHBlY3RlZCBKU09OIHZhbHVlIGF0ICR7c3RhcnR9LCBmb3VuZCAke2xleGVtZS5uYW1lfVwiXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIFN0cmluZzogdGhlIGNsb3NpbmcgcXVvdGUgaXMgdGhlIGZpcnN0IGBlbmRgIHRva2VuIGluIHRoZVxuICAgICAgIyBzdHJpbmcgbGV2ZWwuXG4gICAgICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgaWYga2luZCBpcyAnc3RyaW5nJ1xuICAgICAgICBpZiAoIGxleGVtZS5sZXZlbC5uYW1lIGlzICdzdHJpbmcnICkgYW5kICggbGV4ZW1lLm5hbWUgaXMgJ2VuZCcgKVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGFydCxcbiAgICAgICAgICAgIGVuZDogc3RhcnQgKyBsZXhlbWUuc3RvcCxcbiAgICAgICAgICAgIGxlbmd0aDogbGV4ZW1lLnN0b3AsXG4gICAgICAgICAgICBraW5kOiAnc3RyaW5nJyxcbiAgICAgICAgICB9O1xuICAgICAgICBjb250aW51ZTtcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBDb21wb3VuZDogY291bnQgb3BlbmluZyAvIGNsb3NpbmcgZGVsaW1pdGVycy5cbiAgICAgICNcbiAgICAgICMgV2UgZGVsaWJlcmF0ZWx5IGRvbid0IGNoZWNrIHdoZXRoZXIgYF1gIGNsb3NlcyBgW2Agb3IgYH1gXG4gICAgICAjIGNsb3NlcyBge2AuIFRoYXQncyB2YWxpZGF0aW9uLCBhbmQgdGhpcyBzY2FubmVyIGRvZXNuJ3QgZG9cbiAgICAgICMgdmFsaWRhdGlvbi5cbiAgICAgICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBpZiBraW5kIGlzICdjb21wb3VuZCdcbiAgICAgICAgaWYgbGV4ZW1lLmxldmVsLm5hbWUgaXNudCAnY29tcG91bmQnXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgaWYgbGV4ZW1lLm5hbWUgaXMgJ29wZW4nXG4gICAgICAgICAgZGVwdGgrKztcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgaWYgbGV4ZW1lLm5hbWUgaXMgJ2Nsb3NlJ1xuICAgICAgICAgIGRlcHRoLS07XG4gICAgICAgICAgaWYgZGVwdGggaXMgMFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgc3RhcnQsXG4gICAgICAgICAgICAgIGVuZDogc3RhcnQgKyBsZXhlbWUuc3RvcCxcbiAgICAgICAgICAgICAgbGVuZ3RoOiBsZXhlbWUuc3RvcCxcbiAgICAgICAgICAgICAga2luZDogJ2NvbXBvdW5kJyxcbiAgICAgICAgICAgIH1cbiAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IgXCJ1bnRlcm1pbmF0ZWQgSlNPTi1saWtlIHZhbHVlIHN0YXJ0aW5nIGF0ICR7c3RhcnR9XCJcbiAgcmV0dXJuIHNjYW5Kc29uVmFsdWVcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AY2pseCA9XG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBiYXNpY3M6IC0+XG4gICAgcHJvYmVzX2FuZF9tYXRjaGVycyA9IFtcbiAgICAgIFsgWyAnYWJjXCJoZWxsb1wieHl6JywgMyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLCBbIDMsIDEwLCAnXCJoZWxsb1wiJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdIF1cbiAgICAgIFsgWyAnYWJjXCJoZVxcXFxcImxsb1xcXFxcIlwieHl6JywgMyAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLCBbIDMsIDE0LCAnXCJoZVxcXFxcImxsb1xcXFxcIlwiJyAgICAgICAgICAgICAgICAgICAgICAgICAgICBdIF1cbiAgICAgIFsgWyAnYWJje1wiZ1wiOlwiaGVcXFxcXCJsbG9cXFxcXCJcIn14eXonLCAzICAgICAgICAgICAgICAgICAgICAgIF0sIFsgMywgMjAsICd7XCJnXCI6XCJoZVxcXFxcImxsb1xcXFxcIlwifScgICAgICAgICAgICAgICAgICAgICAgXSBdXG4gICAgICBbIFsgJ/CqnIDwqpyB8KqcgicsIDAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIFsgMCwgNiwgJ/CqnIDwqpyB8KqcgicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdIF1cbiAgICAgIFsgWyAnYWJjXCLwqpyA8KqcgfCqnIJcInh5eicsIDMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLCBbIDMsIDExLCAnXCLwqpyA8KqcgfCqnIJcIicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdIF1cbiAgICAgIFsgWyAn8KqcgPCqnIHwqpyCW1wieHl6XCIsXScsIDYgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLCBbIDYsIDE0LCAnW1wieHl6XCIsXScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdIF1cbiAgICAgIFsgWyAn8KqcgPCqnIHwqpyCW1wieHl6XCIsWzQsNiwrOF1dJywgNiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLCBbIDYsIDIyLCAnW1wieHl6XCIsWzQsNiwrOF1dJyAgICAgICAgICAgICAgICAgICAgICAgICBdIF1cbiAgICAgIFsgWyAnYWJjW3doYXRldmVyLHt9LFs0LHtcImtcIjpbe1wiTFwiOmZhbHNlfV19LCs4XV14eXonLCAzIF0sIFsgMywgNDMsICdbd2hhdGV2ZXIse30sWzQse1wia1wiOlt7XCJMXCI6ZmFsc2V9XX0sKzhdXScgXSBdXG4gICAgICBbIFsgJ2FiY1t3aGF0ZXZlciwrLC1deHl6JywgMyAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIFsgMywgMTcsICdbd2hhdGV2ZXIsKywtXScgICAgICAgICAgICAgICAgICAgICAgICAgICBdIF1cbiAgICAgIFsgWyAnYWJje2E6OndoYXRldmVyLHZlcmJvc2U6Kyxjb2xvcnM6LX14eXonLCAzICAgICAgICAgXSwgWyAzLCAzNSwgJ3thOjp3aGF0ZXZlcix2ZXJib3NlOissY29sb3JzOi19JyAgICAgICAgIF0gXVxuICAgICAgXVxuICAgIHNjYW5Kc29uVmFsdWUgPSBnZXRfc2Nhbm5lcigpXG4gICAgZm9yIFsgWyB0ZXh0LCBzdGFydCwgXSwgbWF0Y2hlciBdIGluIHByb2Jlc19hbmRfbWF0Y2hlcnNcbiAgICAgIHsgc3RhcnQsIGVuZCwgfSA9IHNjYW5Kc29uVmFsdWUgdGV4dCwgc3RhcnRcbiAgICAgIHBhcnQgICAgICAgICAgICA9IHRleHRbIHN0YXJ0IC4uLiBlbmQgXVxuICAgICAgZWNobyBbWyB0ZXh0LCBzdGFydCwgXSwgWyBzdGFydCwgZW5kLCBwYXJ0LCBdIF1cbiAgICAgIEBlcSAoIM6pY2pseF9fXzEgPSAtPiBbIHN0YXJ0LCBlbmQsIHBhcnQsIF0gKSwgbWF0Y2hlclxuICAgIDtudWxsXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICMgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgc2hvd19wYXNzZXM6IHRydWUsIHJlcG9ydF9jaGVja3M6IHRydWUsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgQGNqbHhcbiAgO251bGxcblxuIl19
