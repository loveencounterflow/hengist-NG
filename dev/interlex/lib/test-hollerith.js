(async function() {
  'use strict';
  var GTNG, GUY, SFMODULES, Test, abbrlxm, alert, condense_lexemes, debug, echo, f, help, info, inspect, log, plain, praise, reverse, rpr, tabulate_lexeme, tabulate_lexemes, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('interlex/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  ({f} = require('../../../apps/effstring'));

  ({condense_lexemes, abbrlxm, tabulate_lexemes, tabulate_lexeme} = require('./helpers'));

  // { internals: ct_internals
  //   isa
  //   std
  //   type_of               } = require '../../../apps/cleartype'
  SFMODULES = require('../../../apps/bricabrac-single-file-modules');

  //###########################################################################################################

  //===========================================================================================================
  this.interlex_tasks = {
    //=========================================================================================================
    hollerith: {
      //-------------------------------------------------------------------------------------------------------
      h10mvp2: function() {
        var Grammar, Lexeme, Token, cfg, compile_sortkey_lexer, constants_10mvp2, decode, encode, i, index_matcher, index_result, j, len, len1, letters, lexeme, lexeme_matcher, lexeme_result, lexemes, lexer, mantissa, name, probe, probes_and_matchers, ref, ref1, regex, type_of, Ωilxhol___8, Ωilxhol___9;
        ({Grammar, Token, Lexeme} = require('../../../apps/interlex'));
        ({regex} = require('regex'));
        ({type_of} = SFMODULES.unstable.require_type_of());
        ({encode, decode} = SFMODULES.unstable.require_anybase());
        //.....................................................................................................
        cfg = constants_10mvp2 = Object.freeze({
          max_integer: +999,
          min_integer: -999,
          // MLKJIHGFEDCBA
          // N XYZ
          zpuns: 'NOPQRSTUVW', // zero and positive uniliteral numbers
          nuns: 'EFGHIJKLM', // negative          uniliteral numbers
          zpun_max: +9,
          nun_min: -9,
          zero_pad_length: 3,
          alphabet: '0123456789',
          pmag: '  XYZ', // positive 'magnifier' for 1 to 8 positive digits
          nmag: '  CBA', // negative 'magnifier' for 1 to 8 negative digits
          nlead_re: /^9*(?=[0-9])/ // 'negative leader', discardable leading digits of lifted negative numbers
        });
        //.....................................................................................................
        compile_sortkey_lexer = function(cfg) {
          var R, alphabet, cast_nnum, cast_nun, cast_other, cast_pnum, cast_pun, cast_zero, first, fit_nnum, fit_nun, fit_other, fit_pnum, fit_pun, fit_zero, max_digit, nmag, nmag_letters, nuns, nuns_letters, pmag, pmag_letters, puns_letters, zero_letters, zpuns;
          ({nuns, zpuns, nmag, pmag, alphabet} = cfg);
          // base              = alphabet.length
          //...................................................................................................
          nuns_letters = nuns;
          puns_letters = zpuns.slice(1);
          nmag_letters = nmag.slice(1);
          pmag_letters = pmag.slice(1);
          zero_letters = zpuns[0];
          max_digit = alphabet.at(-1);
          //...................................................................................................
          fit_nun = regex`(?<letters> [ ${nuns_letters} ]  )                                  `;
          fit_pun = regex`(?<letters> [ ${puns_letters} ]  )                                  `;
          fit_nnum = regex`(?<letters> [ ${nmag_letters} ]  ) (?<mantissa> [ ${alphabet}  ]* ) `;
          fit_pnum = regex`(?<letters> [ ${pmag_letters} ]  ) (?<mantissa> [ ${alphabet}  ]* ) `;
          fit_zero = regex`(?<letters> [ ${zero_letters} ]+ )                                  `;
          fit_other = regex`(?<letters> .                    )                                  `;
          //...................................................................................................
          cast_nun = function({
              data: d
            }) {
            return d.index = (cfg.nuns.indexOf(d.letters)) - cfg.nuns.length;
          };
          cast_pun = function({
              data: d
            }) {
            return d.index = +cfg.zpuns.indexOf(d.letters);
          };
          cast_nnum = function({
              data: d
            }) {
            var mantissa;
            mantissa = d.mantissa.padStart(cfg.zero_pad_length, max_digit);
            // debug 'Ωilxhol___1', ( rpr d.mantissa ), ( rpr mantissa )
            return d.index = (decode(mantissa, alphabet)) - cfg.max_integer;
          };
          cast_pnum = function({
              data: d
            }) {
            return d.index = decode(d.mantissa, alphabet);
          };
          cast_zero = function({
              data: d
            }) {
            var _;
            return d.index = (function() {
              var i, len, ref, results;
              ref = d.letters;
              results = [];
              for (i = 0, len = ref.length; i < len; i++) {
                _ = ref[i];
                results.push(0);
              }
              return results;
            })();
          };
          // cast_zero     = ( P ) -> debug 'Ωilxhol___2', P
          cast_other = null; // ({ data: d, }) -> # debug 'Ωilxhol___3', 'other', d #; d.letters = d.letters.join '-'
          //...................................................................................................
          R = new Grammar({
            emit_signals: false
          });
          first = R.new_level({
            name: 'first'
          });
          first.new_token({
            name: 'nun',
            fit: fit_nun,
            cast: cast_nun
          });
          first.new_token({
            name: 'pun',
            fit: fit_pun,
            cast: cast_pun
          });
          first.new_token({
            name: 'nnum',
            fit: fit_nnum,
            cast: cast_nnum
          });
          first.new_token({
            name: 'pnum',
            fit: fit_pnum,
            cast: cast_pnum
          });
          first.new_token({
            name: 'zero',
            fit: fit_zero,
            cast: cast_zero
          });
          first.new_token({
            name: 'other',
            fit: fit_other,
            merge: 'list',
            cast: cast_other
          });
          //...................................................................................................
          return R;
        };
        //.....................................................................................................
        probes_and_matchers = [
          ['B000NNNNNN',
          [-999],
          'nnum:B,000|zero:NNNNNN'],
          ['C00NNNNNNN',
          [-99],
          'nnum:C,00|zero:NNNNNNN'],
          ['C09NNNNNNN',
          [-90],
          'nnum:C,09|zero:NNNNNNN'],
          ['C88NNNNNNN',
          [-11],
          'nnum:C,88|zero:NNNNNNN'],
          ['C89NNNNNNN',
          [-10],
          'nnum:C,89|zero:NNNNNNN'],
          ['ENNNNNNNNN',
          [-9],
          'nun:E|zero:NNNNNNNNN'],
          ['FNNNNNNNNN',
          [-8],
          'nun:F|zero:NNNNNNNNN'],
          ['GNNNNNNNNN',
          [-7],
          'nun:G|zero:NNNNNNNNN'],
          ['HNNNNNNNNN',
          [-6],
          'nun:H|zero:NNNNNNNNN'],
          ['INNNNNNNNN',
          [-5],
          'nun:I|zero:NNNNNNNNN'],
          ['JNNNNNNNNN',
          [-4],
          'nun:J|zero:NNNNNNNNN'],
          ['KNNNNNNNNN',
          [-3],
          'nun:K|zero:NNNNNNNNN'],
          ['LNNNNNNNNN',
          [-2],
          'nun:L|zero:NNNNNNNNN'],
          ['MNNNNNNNNN',
          [-1],
          'nun:M|zero:NNNNNNNNN'],
          ['NC79NNNNNN',
          [0,
          -20],
          'zero:N|nnum:C,79|zero:NNNNNN'],
          ['NNNNNNNNNN',
          [0],
          'zero:NNNNNNNNNN'],
          ['NX20NNNNNN',
          [0,
          20],
          'zero:N|pnum:X,20|zero:NNNNNN'],
          ['WNNNNNNNNN',
          [9],
          'pun:W|zero:NNNNNNNNN'],
          ['X10KNNNNNN',
          [10,
          -3],
          'pnum:X,10|nun:K|zero:NNNNNN'],
          ['X10LNNNNNN',
          [10,
          -2],
          'pnum:X,10|nun:L|zero:NNNNNN'],
          ['X10MNNNNNN',
          [10,
          -1],
          'pnum:X,10|nun:M|zero:NNNNNN'],
          ['X10NNNNNNN',
          [10],
          'pnum:X,10|zero:NNNNNNN'],
          // [ 'X10NNNNNNN', [ 10, 0,        ], 'pnum:X,10|zero:NNNNNNN',              ]
          ['X10ONNNNNN',
          [10,
          1],
          'pnum:X,10|pun:O|zero:NNNNNN'],
          ['X10X10MNNN',
          [10,
          10,
          -1],
          'pnum:X,10|pnum:X,10|nun:M|zero:NNN'],
          ['X10X10NNNN',
          [10,
          10],
          'pnum:X,10|pnum:X,10|zero:NNNN'],
          ['X10X20NNNN',
          [10,
          20],
          'pnum:X,10|pnum:X,20|zero:NNNN'],
          ['X20NNNNNNN',
          [20],
          'pnum:X,20|zero:NNNNNNN'],
          ['X20X10NNNN',
          [20,
          10],
          'pnum:X,20|pnum:X,10|zero:NNNN'],
          ['X90NNNNNNN',
          [90],
          'pnum:X,90|zero:NNNNNNN'],
          ['Y900NNNNNN',
          [900],
          'pnum:Y,900|zero:NNNNNN'],
          ['N',
          [0],
          'zero:N'],
          ['5',
          [],
          'other:5'],
          ['äöü',
          [],
          'other:äöü'],
          ['X10',
          [10],
          'pnum:X,10'],
          ['K',
          [-3],
          'nun:K']
        ];
        //.....................................................................................................
        lexer = compile_sortkey_lexer(cfg);
        lexemes = lexer.scan_to_list('5');
        tabulate_lexemes(lexemes);
        lexemes = lexer.scan_to_list('N');
        tabulate_lexemes(lexemes);
        lexemes = lexer.scan_to_list('äöü');
        tabulate_lexemes(lexemes);
        for (i = 0, len = probes_and_matchers.length; i < len; i++) {
          [probe, index_matcher, lexeme_matcher] = probes_and_matchers[i];
          // urge 'Ωilxhol___4', rpr probe
          lexemes = [];
          lexeme_result = [];
          index_result = [];
          ref = lexer.scan_to_list(probe);
          for (j = 0, len1 = ref.length; j < len1; j++) {
            lexeme = ref[j];
            name = lexeme.name;
            letters = lexeme.data.letters;
            if ((type_of(letters)) === 'list') {
              letters = letters.join('');
            }
            mantissa = (ref1 = lexeme.data.mantissa) != null ? ref1 : null;
            lexemes.push({name, letters, mantissa});
            lexeme_result.push(mantissa != null ? `${name}:${letters},${mantissa}` : `${name}:${letters}`);
            if (lexeme.data.index != null) {
              index_result.push(lexeme.data.index);
            }
          }
          index_result = index_result.flat();
          while ((index_result.length > 1) && ((index_result.at(-1)) === 0)) {
            index_result.pop();
          }
          lexeme_result = lexeme_result.join('|');
          // tabulate_lexemes lexemes
          // debug 'Ωilxhol___5', lexeme for lexeme in lexemes
          info('Ωilxhol___6', rpr(lexeme_result), rpr(index_result));
          // help 'Ωilxhol___7', rpr index_result # if index_result.length > 0
          this.eq((Ωilxhol___8 = function() {
            return lexeme_result;
          }), lexeme_matcher);
          this.eq((Ωilxhol___9 = function() {
            return index_result;
          }), index_matcher);
        }
        //.....................................................................................................
        return null;
      }
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
      return (new Test(guytest_cfg)).test(this.interlex_tasks);
    })();
  }

  // ( new Test guytest_cfg ).test { linking: @interlex_tasks.linking, }
// ( new Test guytest_cfg ).test { flexible_new_token_syntax: @interlex_tasks.basics.flexible_new_token_syntax, }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtaG9sbGVyaXRoLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUEsRUFBQSxnQkFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsZUFBQSxFQUFBLGdCQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQTs7RUFJQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLHNCQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsT0FIRixFQUlFLEdBSkYsQ0FBQSxHQUk0QixHQUFHLENBQUMsR0FKaEMsRUFkQTs7O0VBb0JBLElBQUEsR0FBNEIsT0FBQSxDQUFRLDJCQUFSOztFQUM1QixDQUFBLENBQUUsSUFBRixDQUFBLEdBQTRCLElBQTVCOztFQUNBLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLHlCQUFSLENBQTVCOztFQUNBLENBQUEsQ0FBRSxnQkFBRixFQUNFLE9BREYsRUFFRSxnQkFGRixFQUdFLGVBSEYsQ0FBQSxHQUc0QixPQUFBLENBQVEsV0FBUixDQUg1QixFQXZCQTs7Ozs7O0VBK0JBLFNBQUEsR0FBNEIsT0FBQSxDQUFRLDZDQUFSLEVBL0I1Qjs7Ozs7RUFx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QUEsS0FBVSxPQUFPLENBQUMsSUFBckI7SUFBK0IsTUFBUyxDQUFBLENBQUEsQ0FBQSxHQUFBO0FBQ3hDLFVBQUE7TUFBRSxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLEtBQWxCO1FBQXlCLFdBQUEsRUFBYSxLQUF0QztRQUE2QyxhQUFBLEVBQWU7TUFBNUQ7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLElBQWxCO1FBQXdCLFdBQUEsRUFBYSxLQUFyQztRQUE0QyxhQUFBLEVBQWU7TUFBM0QsRUFEaEI7O2FBR0UsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QixJQUFDLENBQUEsY0FBL0I7SUFKc0MsQ0FBQSxJQUF4Qzs7O0VBeExBOztBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG4ndXNlIHN0cmljdCdcblxuXG5cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnaW50ZXJsZXgvdGVzdC1iYXNpY3MnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbiMgV0dVWSAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvd2ViZ3V5J1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xueyBjb25kZW5zZV9sZXhlbWVzXG4gIGFiYnJseG1cbiAgdGFidWxhdGVfbGV4ZW1lc1xuICB0YWJ1bGF0ZV9sZXhlbWUgICAgICAgfSA9IHJlcXVpcmUgJy4vaGVscGVycydcbiMgeyBpbnRlcm5hbHM6IGN0X2ludGVybmFsc1xuIyAgIGlzYVxuIyAgIHN0ZFxuIyAgIHR5cGVfb2YgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9jbGVhcnR5cGUnXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2luZ2xlLWZpbGUtbW9kdWxlcydcblxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiNcbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQGludGVybGV4X3Rhc2tzID1cblxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGhvbGxlcml0aDpcblxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBoMTBtdnAyOiAtPlxuICAgICAgeyBHcmFtbWFyXG4gICAgICAgIFRva2VuXG4gICAgICAgIExleGVtZSAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2ludGVybGV4J1xuICAgICAgeyByZWdleCwgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAncmVnZXgnXG4gICAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAgIHsgZW5jb2RlLCBkZWNvZGUsICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2FueWJhc2UoKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBjZmcgPSBjb25zdGFudHNfMTBtdnAyID0gT2JqZWN0LmZyZWV6ZVxuICAgICAgICBtYXhfaW50ZWdlcjogICs5OTlcbiAgICAgICAgbWluX2ludGVnZXI6ICAtOTk5XG4gICAgICAgICMgTUxLSklIR0ZFRENCQVxuICAgICAgICAjIE4gWFlaXG4gICAgICAgIHpwdW5zOiAgICAgICAgJ05PUFFSU1RVVlcnICMgemVybyBhbmQgcG9zaXRpdmUgdW5pbGl0ZXJhbCBudW1iZXJzXG4gICAgICAgIG51bnM6ICAgICAgICAgJ0VGR0hJSktMTScgICMgbmVnYXRpdmUgICAgICAgICAgdW5pbGl0ZXJhbCBudW1iZXJzXG4gICAgICAgIHpwdW5fbWF4OiAgICAgKzlcbiAgICAgICAgbnVuX21pbjogICAgICAtOVxuICAgICAgICB6ZXJvX3BhZF9sZW5ndGg6ICAzXG4gICAgICAgIGFscGhhYmV0OiAgICAgJzAxMjM0NTY3ODknXG4gICAgICAgIHBtYWc6ICAgICAgICAgJyAgWFlaJyAgICMgcG9zaXRpdmUgJ21hZ25pZmllcicgZm9yIDEgdG8gOCBwb3NpdGl2ZSBkaWdpdHNcbiAgICAgICAgbm1hZzogICAgICAgICAnICBDQkEnICAgIyBuZWdhdGl2ZSAnbWFnbmlmaWVyJyBmb3IgMSB0byA4IG5lZ2F0aXZlIGRpZ2l0c1xuICAgICAgICBubGVhZF9yZTogICAgIC9eOSooPz1bMC05XSkvICAgICAgICAgIyAnbmVnYXRpdmUgbGVhZGVyJywgZGlzY2FyZGFibGUgbGVhZGluZyBkaWdpdHMgb2YgbGlmdGVkIG5lZ2F0aXZlIG51bWJlcnNcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgY29tcGlsZV9zb3J0a2V5X2xleGVyID0gKCBjZmcgKSAtPlxuICAgICAgICB7IG51bnMsXG4gICAgICAgICAgenB1bnMsXG4gICAgICAgICAgbm1hZyxcbiAgICAgICAgICBwbWFnLFxuICAgICAgICAgIGFscGhhYmV0LCAgICAgfSA9IGNmZ1xuICAgICAgICAjIGJhc2UgICAgICAgICAgICAgID0gYWxwaGFiZXQubGVuZ3RoXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgbnVuc19sZXR0ZXJzICA9IG51bnNcbiAgICAgICAgcHVuc19sZXR0ZXJzICA9IHpwdW5zWyAgMSAuLiAgXVxuICAgICAgICBubWFnX2xldHRlcnMgID0gbm1hZ1sgICAxIC4uICBdXG4gICAgICAgIHBtYWdfbGV0dGVycyAgPSBwbWFnWyAgIDEgLi4gIF1cbiAgICAgICAgemVyb19sZXR0ZXJzICA9IHpwdW5zWyAgMCAgICAgXVxuICAgICAgICBtYXhfZGlnaXQgICAgID0gYWxwaGFiZXQuYXQgLTFcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBmaXRfbnVuICAgICAgID0gcmVnZXhcIig/PGxldHRlcnM+IFsgI3tudW5zX2xldHRlcnN9IF0gICkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgZml0X3B1biAgICAgICA9IHJlZ2V4XCIoPzxsZXR0ZXJzPiBbICN7cHVuc19sZXR0ZXJzfSBdICApICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgIGZpdF9ubnVtICAgICAgPSByZWdleFwiKD88bGV0dGVycz4gWyAje25tYWdfbGV0dGVyc30gXSAgKSAoPzxtYW50aXNzYT4gWyAje2FscGhhYmV0fSAgXSogKSBcIlxuICAgICAgICBmaXRfcG51bSAgICAgID0gcmVnZXhcIig/PGxldHRlcnM+IFsgI3twbWFnX2xldHRlcnN9IF0gICkgKD88bWFudGlzc2E+IFsgI3thbHBoYWJldH0gIF0qICkgXCJcbiAgICAgICAgZml0X3plcm8gICAgICA9IHJlZ2V4XCIoPzxsZXR0ZXJzPiBbICN7emVyb19sZXR0ZXJzfSBdKyApICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgIGZpdF9vdGhlciAgICAgPSByZWdleFwiKD88bGV0dGVycz4gLiAgICAgICAgICAgICAgICAgICAgKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGNhc3RfbnVuICAgICAgPSAoeyBkYXRhOiBkLCB9KSAtPiBkLmluZGV4ID0gKCBjZmcubnVucy5pbmRleE9mIGQubGV0dGVycyApIC0gY2ZnLm51bnMubGVuZ3RoXG4gICAgICAgIGNhc3RfcHVuICAgICAgPSAoeyBkYXRhOiBkLCB9KSAtPiBkLmluZGV4ID0gK2NmZy56cHVucy5pbmRleE9mICBkLmxldHRlcnNcbiAgICAgICAgY2FzdF9ubnVtICAgICA9ICh7IGRhdGE6IGQsIH0pIC0+XG4gICAgICAgICAgbWFudGlzc2EgID0gZC5tYW50aXNzYS5wYWRTdGFydCBjZmcuemVyb19wYWRfbGVuZ3RoLCBtYXhfZGlnaXRcbiAgICAgICAgICAjIGRlYnVnICfOqWlseGhvbF9fXzEnLCAoIHJwciBkLm1hbnRpc3NhICksICggcnByIG1hbnRpc3NhIClcbiAgICAgICAgICBkLmluZGV4ICAgPSAoIGRlY29kZSBtYW50aXNzYSwgYWxwaGFiZXQgKSAtIGNmZy5tYXhfaW50ZWdlclxuICAgICAgICBjYXN0X3BudW0gICAgID0gKHsgZGF0YTogZCwgfSkgLT4gZC5pbmRleCA9IGRlY29kZSBkLm1hbnRpc3NhLCBhbHBoYWJldFxuICAgICAgICBjYXN0X3plcm8gICAgID0gKHsgZGF0YTogZCwgfSkgLT4gZC5pbmRleCA9ICggMCBmb3IgXyBpbiBkLmxldHRlcnMgKVxuICAgICAgICAjIGNhc3RfemVybyAgICAgPSAoIFAgKSAtPiBkZWJ1ZyAnzqlpbHhob2xfX18yJywgUFxuICAgICAgICBjYXN0X290aGVyICAgID0gbnVsbCAjICh7IGRhdGE6IGQsIH0pIC0+ICMgZGVidWcgJ86paWx4aG9sX19fMycsICdvdGhlcicsIGQgIzsgZC5sZXR0ZXJzID0gZC5sZXR0ZXJzLmpvaW4gJy0nXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgUiAgICAgICAgICAgPSBuZXcgR3JhbW1hciB7IGVtaXRfc2lnbmFsczogZmFsc2UsIH1cbiAgICAgICAgZmlyc3QgICAgICAgPSBSLm5ld19sZXZlbCB7IG5hbWU6ICdmaXJzdCcsIH1cbiAgICAgICAgZmlyc3QubmV3X3Rva2VuICAgeyBuYW1lOiAnbnVuJywgICAgICBmaXQ6IGZpdF9udW4sICAgICAgICAgICAgICAgICAgY2FzdDogY2FzdF9udW4sICAgIH1cbiAgICAgICAgZmlyc3QubmV3X3Rva2VuICAgeyBuYW1lOiAncHVuJywgICAgICBmaXQ6IGZpdF9wdW4sICAgICAgICAgICAgICAgICAgY2FzdDogY2FzdF9wdW4sICAgIH1cbiAgICAgICAgZmlyc3QubmV3X3Rva2VuICAgeyBuYW1lOiAnbm51bScsICAgICBmaXQ6IGZpdF9ubnVtLCAgICAgICAgICAgICAgICAgY2FzdDogY2FzdF9ubnVtLCAgIH1cbiAgICAgICAgZmlyc3QubmV3X3Rva2VuICAgeyBuYW1lOiAncG51bScsICAgICBmaXQ6IGZpdF9wbnVtLCAgICAgICAgICAgICAgICAgY2FzdDogY2FzdF9wbnVtLCAgIH1cbiAgICAgICAgZmlyc3QubmV3X3Rva2VuICAgeyBuYW1lOiAnemVybycsICAgICBmaXQ6IGZpdF96ZXJvLCAgICAgICAgICAgICAgICAgY2FzdDogY2FzdF96ZXJvLCAgIH1cbiAgICAgICAgZmlyc3QubmV3X3Rva2VuICAgeyBuYW1lOiAnb3RoZXInLCAgICBmaXQ6IGZpdF9vdGhlciwgbWVyZ2U6ICdsaXN0JywgY2FzdDogY2FzdF9vdGhlciwgIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICByZXR1cm4gUlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBwcm9iZXNfYW5kX21hdGNoZXJzID0gW1xuICAgICAgICBbICdCMDAwTk5OTk5OJywgWyAtOTk5LCAgICAgICAgIF0sICdubnVtOkIsMDAwfHplcm86Tk5OTk5OJywgICAgICAgICAgICAgIF1cbiAgICAgICAgWyAnQzAwTk5OTk5OTicsIFsgLTk5LCAgICAgICAgICBdLCAnbm51bTpDLDAwfHplcm86Tk5OTk5OTicsICAgICAgICAgICAgICBdXG4gICAgICAgIFsgJ0MwOU5OTk5OTk4nLCBbIC05MCwgICAgICAgICAgXSwgJ25udW06QywwOXx6ZXJvOk5OTk5OTk4nLCAgICAgICAgICAgICAgXVxuICAgICAgICBbICdDODhOTk5OTk5OJywgWyAtMTEsICAgICAgICAgIF0sICdubnVtOkMsODh8emVybzpOTk5OTk5OJywgICAgICAgICAgICAgIF1cbiAgICAgICAgWyAnQzg5Tk5OTk5OTicsIFsgLTEwLCAgICAgICAgICBdLCAnbm51bTpDLDg5fHplcm86Tk5OTk5OTicsICAgICAgICAgICAgICBdXG4gICAgICAgIFsgJ0VOTk5OTk5OTk4nLCBbIC05LCAgICAgICAgICAgXSwgJ251bjpFfHplcm86Tk5OTk5OTk5OJywgICAgICAgICAgICAgICAgXVxuICAgICAgICBbICdGTk5OTk5OTk5OJywgWyAtOCwgICAgICAgICAgIF0sICdudW46Rnx6ZXJvOk5OTk5OTk5OTicsICAgICAgICAgICAgICAgIF1cbiAgICAgICAgWyAnR05OTk5OTk5OTicsIFsgLTcsICAgICAgICAgICBdLCAnbnVuOkd8emVybzpOTk5OTk5OTk4nLCAgICAgICAgICAgICAgICBdXG4gICAgICAgIFsgJ0hOTk5OTk5OTk4nLCBbIC02LCAgICAgICAgICAgXSwgJ251bjpIfHplcm86Tk5OTk5OTk5OJywgICAgICAgICAgICAgICAgXVxuICAgICAgICBbICdJTk5OTk5OTk5OJywgWyAtNSwgICAgICAgICAgIF0sICdudW46SXx6ZXJvOk5OTk5OTk5OTicsICAgICAgICAgICAgICAgIF1cbiAgICAgICAgWyAnSk5OTk5OTk5OTicsIFsgLTQsICAgICAgICAgICBdLCAnbnVuOkp8emVybzpOTk5OTk5OTk4nLCAgICAgICAgICAgICAgICBdXG4gICAgICAgIFsgJ0tOTk5OTk5OTk4nLCBbIC0zLCAgICAgICAgICAgXSwgJ251bjpLfHplcm86Tk5OTk5OTk5OJywgICAgICAgICAgICAgICAgXVxuICAgICAgICBbICdMTk5OTk5OTk5OJywgWyAtMiwgICAgICAgICAgIF0sICdudW46THx6ZXJvOk5OTk5OTk5OTicsICAgICAgICAgICAgICAgIF1cbiAgICAgICAgWyAnTU5OTk5OTk5OTicsIFsgLTEsICAgICAgICAgICBdLCAnbnVuOk18emVybzpOTk5OTk5OTk4nLCAgICAgICAgICAgICAgICBdXG4gICAgICAgIFsgJ05DNzlOTk5OTk4nLCBbIDAsIC0yMCwgICAgICAgXSwgJ3plcm86TnxubnVtOkMsNzl8emVybzpOTk5OTk4nLCAgICAgICAgXVxuICAgICAgICBbICdOTk5OTk5OTk5OJywgWyAwLCAgICAgICAgICAgIF0sICd6ZXJvOk5OTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgWyAnTlgyME5OTk5OTicsIFsgMCwgMjAsICAgICAgICBdLCAnemVybzpOfHBudW06WCwyMHx6ZXJvOk5OTk5OTicsICAgICAgICBdXG4gICAgICAgIFsgJ1dOTk5OTk5OTk4nLCBbIDksICAgICAgICAgICAgXSwgJ3B1bjpXfHplcm86Tk5OTk5OTk5OJywgICAgICAgICAgICAgICBdXG4gICAgICAgIFsgJ1gxMEtOTk5OTk4nLCBbIDEwLCAtMywgICAgICAgXSwgJ3BudW06WCwxMHxudW46S3x6ZXJvOk5OTk5OTicsICAgICAgICAgXVxuICAgICAgICBbICdYMTBMTk5OTk5OJywgWyAxMCwgLTIsICAgICAgIF0sICdwbnVtOlgsMTB8bnVuOkx8emVybzpOTk5OTk4nLCAgICAgICAgIF1cbiAgICAgICAgWyAnWDEwTU5OTk5OTicsIFsgMTAsIC0xLCAgICAgICBdLCAncG51bTpYLDEwfG51bjpNfHplcm86Tk5OTk5OJywgICAgICAgICBdXG4gICAgICAgIFsgJ1gxME5OTk5OTk4nLCBbIDEwLCAgICAgICAgICAgXSwgJ3BudW06WCwxMHx6ZXJvOk5OTk5OTk4nLCAgICAgICAgICAgICAgXVxuICAgICAgICAjIFsgJ1gxME5OTk5OTk4nLCBbIDEwLCAwLCAgICAgICAgXSwgJ3BudW06WCwxMHx6ZXJvOk5OTk5OTk4nLCAgICAgICAgICAgICAgXVxuICAgICAgICBbICdYMTBPTk5OTk5OJywgWyAxMCwgMSwgICAgICAgIF0sICdwbnVtOlgsMTB8cHVuOk98emVybzpOTk5OTk4nLCAgICAgICAgXVxuICAgICAgICBbICdYMTBYMTBNTk5OJywgWyAxMCwgMTAsIC0xLCAgIF0sICdwbnVtOlgsMTB8cG51bTpYLDEwfG51bjpNfHplcm86Tk5OJywgIF1cbiAgICAgICAgWyAnWDEwWDEwTk5OTicsIFsgMTAsIDEwLCAgICAgICBdLCAncG51bTpYLDEwfHBudW06WCwxMHx6ZXJvOk5OTk4nLCAgICAgICBdXG4gICAgICAgIFsgJ1gxMFgyME5OTk4nLCBbIDEwLCAyMCwgICAgICAgXSwgJ3BudW06WCwxMHxwbnVtOlgsMjB8emVybzpOTk5OJywgICAgICAgXVxuICAgICAgICBbICdYMjBOTk5OTk5OJywgWyAyMCwgICAgICAgICAgIF0sICdwbnVtOlgsMjB8emVybzpOTk5OTk5OJywgICAgICAgICAgICAgIF1cbiAgICAgICAgWyAnWDIwWDEwTk5OTicsIFsgMjAsIDEwLCAgICAgICBdLCAncG51bTpYLDIwfHBudW06WCwxMHx6ZXJvOk5OTk4nLCAgICAgICBdXG4gICAgICAgIFsgJ1g5ME5OTk5OTk4nLCBbIDkwLCAgICAgICAgICAgXSwgJ3BudW06WCw5MHx6ZXJvOk5OTk5OTk4nLCAgICAgICAgICAgICAgXVxuICAgICAgICBbICdZOTAwTk5OTk5OJywgWyA5MDAsICAgICAgICAgIF0sICdwbnVtOlksOTAwfHplcm86Tk5OTk5OJywgICAgICAgICAgICAgIF1cbiAgICAgICAgWyAnTicsICAgICAgICAgIFsgMCwgICAgICAgICAgICBdLCAnemVybzpOJyAsICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgIFsgJzUnLCAgICAgICAgICBbICAgICAgICAgICAgICAgXSwgJ290aGVyOjUnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICBbICfDpMO2w7wnLCAgICAgICAgWyAgICAgICAgICAgICAgIF0sICdvdGhlcjrDpMO2w7wnLCAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgWyAnWDEwJywgICAgICAgIFsgMTAsICAgICAgICAgICBdLCAncG51bTpYLDEwJywgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgIFsgJ0snLCAgICAgICAgICBbIC0zLCAgICAgICAgICAgXSwgJ251bjpLJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGxleGVyICAgPSBjb21waWxlX3NvcnRrZXlfbGV4ZXIgY2ZnXG4gICAgICBsZXhlbWVzID0gbGV4ZXIuc2Nhbl90b19saXN0ICc1JzsgdGFidWxhdGVfbGV4ZW1lcyBsZXhlbWVzXG4gICAgICBsZXhlbWVzID0gbGV4ZXIuc2Nhbl90b19saXN0ICdOJzsgdGFidWxhdGVfbGV4ZW1lcyBsZXhlbWVzXG4gICAgICBsZXhlbWVzID0gbGV4ZXIuc2Nhbl90b19saXN0ICfDpMO2w7wnOyB0YWJ1bGF0ZV9sZXhlbWVzIGxleGVtZXNcbiAgICAgIGZvciBbIHByb2JlLCBpbmRleF9tYXRjaGVyLCBsZXhlbWVfbWF0Y2hlciwgXSBpbiBwcm9iZXNfYW5kX21hdGNoZXJzXG4gICAgICAgICMgdXJnZSAnzqlpbHhob2xfX180JywgcnByIHByb2JlXG4gICAgICAgIGxleGVtZXMgICAgICAgICA9IFtdXG4gICAgICAgIGxleGVtZV9yZXN1bHQgICA9IFtdXG4gICAgICAgIGluZGV4X3Jlc3VsdCAgICA9IFtdXG4gICAgICAgIGZvciBsZXhlbWUgaW4gbGV4ZXIuc2Nhbl90b19saXN0IHByb2JlXG4gICAgICAgICAgbmFtZSAgICAgID0gbGV4ZW1lLm5hbWVcbiAgICAgICAgICBsZXR0ZXJzICAgPSBsZXhlbWUuZGF0YS5sZXR0ZXJzXG4gICAgICAgICAgbGV0dGVycyAgID0gbGV0dGVycy5qb2luICcnIGlmICggdHlwZV9vZiBsZXR0ZXJzICkgaXMgJ2xpc3QnXG4gICAgICAgICAgbWFudGlzc2EgID0gbGV4ZW1lLmRhdGEubWFudGlzc2EgPyBudWxsXG4gICAgICAgICAgbGV4ZW1lcy5wdXNoIHsgbmFtZSwgbGV0dGVycywgbWFudGlzc2EsIH1cbiAgICAgICAgICBsZXhlbWVfcmVzdWx0LnB1c2ggaWYgbWFudGlzc2E/IHRoZW4gXCIje25hbWV9OiN7bGV0dGVyc30sI3ttYW50aXNzYX1cIiBlbHNlIFwiI3tuYW1lfToje2xldHRlcnN9XCJcbiAgICAgICAgICBpbmRleF9yZXN1bHQucHVzaCBsZXhlbWUuZGF0YS5pbmRleCBpZiBsZXhlbWUuZGF0YS5pbmRleD9cbiAgICAgICAgaW5kZXhfcmVzdWx0ICAgID0gaW5kZXhfcmVzdWx0LmZsYXQoKVxuICAgICAgICBpbmRleF9yZXN1bHQucG9wKCkgd2hpbGUgKCBpbmRleF9yZXN1bHQubGVuZ3RoID4gMSApIGFuZCAoICggaW5kZXhfcmVzdWx0LmF0IC0xICkgaXMgMCApXG4gICAgICAgIGxleGVtZV9yZXN1bHQgICA9IGxleGVtZV9yZXN1bHQuam9pbiAnfCdcbiAgICAgICAgIyB0YWJ1bGF0ZV9sZXhlbWVzIGxleGVtZXNcbiAgICAgICAgIyBkZWJ1ZyAnzqlpbHhob2xfX181JywgbGV4ZW1lIGZvciBsZXhlbWUgaW4gbGV4ZW1lc1xuICAgICAgICBpbmZvICfOqWlseGhvbF9fXzYnLCAoIHJwciBsZXhlbWVfcmVzdWx0ICksICggcnByIGluZGV4X3Jlc3VsdCApXG4gICAgICAgICMgaGVscCAnzqlpbHhob2xfX183JywgcnByIGluZGV4X3Jlc3VsdCAjIGlmIGluZGV4X3Jlc3VsdC5sZW5ndGggPiAwXG4gICAgICAgIEBlcSAoIM6paWx4aG9sX19fOCA9IC0+IGxleGVtZV9yZXN1bHQgICksIGxleGVtZV9tYXRjaGVyXG4gICAgICAgIEBlcSAoIM6paWx4aG9sX19fOSA9IC0+IGluZGV4X3Jlc3VsdCAgICksIGluZGV4X21hdGNoZXJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAjIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsIHNob3dfcGFzc2VzOiB0cnVlLCByZXBvcnRfY2hlY2tzOiB0cnVlLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IEBpbnRlcmxleF90YXNrc1xuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgbGlua2luZzogQGludGVybGV4X3Rhc2tzLmxpbmtpbmcsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGZsZXhpYmxlX25ld190b2tlbl9zeW50YXg6IEBpbnRlcmxleF90YXNrcy5iYXNpY3MuZmxleGlibGVfbmV3X3Rva2VuX3N5bnRheCwgfVxuIl19
