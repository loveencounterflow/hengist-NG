(async function() {
  'use strict';
  var FS, GTNG, GUY, PATH, SFMODULES, Test, alert, blue, bold, debug, echo, f, gold, green, grey, help, info, inspect, log, nfa, plain, praise, red, reverse, rpr, tests, urge, warn, whisper, white;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('bricabrac-dbric'));

  ({rpr, inspect, echo, white, green, blue, gold, grey, red, bold, reverse, log} = GUY.trm);

  ({f} = require('../../../apps/effstring'));

  // write                     = ( p ) -> process.stdout.write p
  ({nfa} = require('../../../apps/normalize-function-arguments'));

  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  SFMODULES = require('../../../apps/bricabrac-sfmodules');

  FS = require('node:fs');

  PATH = require('node:path');

  // #===========================================================================================================
  // remove = ( path ) ->
  //   try
  //     FS.unlinkSync path
  //     help 'Ωflrt___1', "removed #{rpr path}"
  //   catch error
  //     throw error unless error.code is 'ENOENT'
  //     urge 'Ωflrt___2', "no such FS object: #{rpr path}"
  //   return null

  //===========================================================================================================
  this.tests = tests = {
    //---------------------------------------------------------------------------------------------------------
    basics: function() {
      var Counting_map, find_repetitions, i, len, matches, n, pattern_1, pattern_n, text, word, words;
      Counting_map = class Counting_map extends Map {
        constructor(iterable, delta = 0) {
          var key;
          super();
          this.delta = delta;
          for (key of iterable) {
            this.set(key);
          }
          void 0;
        }

        get(key) {
          var ref;
          return (ref = super.get(key)) != null ? ref : 0;
        }

        get_count(key) {
          return (this.get(key)) + this.delta;
        }

        set(key) {
          return super.set(key, (this.get(key)) + 1);
        }

      };
      text = `programmierung
⿱⻗⿰界界
abcabcabc
aaabbbccc
⿵冂⿱(⿰三三三三)(⿰丅丅丅丅)`;
      text = text.replace(/[\(\)⿱⿰⿵]/gv, '');
      words = text.split(/\s+/gv);
      pattern_1 = /(.)(?=.*\1)/gv;
      n = 2;
      pattern_n = new RegExp(`(?=(.{${n}})(?=.*\\1))`, 'gv');
      find_repetitions = function(word) {
        return [...(word.matchAll(pattern_n))].map((m) => {
          return m[1];
        });
      };
      for (i = 0, len = words.length; i < len; i++) {
        word = words[i];
        matches = word.match(pattern_1);
        debug('Ωcrmmd___3', rpr(word), matches, new Counting_map(matches, 1));
        debug('Ωcrmmd___4', rpr(word), find_repetitions(word));
      }
      //console.log(matches); // ["r", "o", "g", "r", "a", "m", "i"]
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    nr2: function() {
      var Counting_map, area, chr_count, count, find_all_repetitions, find_reduplication_candidates, i, idx_count, indexes, is_repetitive, len, pattern_1, repetition, repetitions, text, word, words, x;
      Counting_map = class Counting_map extends Map {
        constructor(iterable, delta = 0) {
          var key;
          super();
          this.delta = delta;
          for (key of iterable) {
            this.set(key);
          }
          void 0;
        }

        get(key) {
          var ref;
          return (ref = super.get(key)) != null ? ref : 0;
        }

        get_count(key) {
          return (this.get(key)) + this.delta;
        }

        set(key) {
          return super.set(key, (this.get(key)) + 1);
        }

      };
      text = `programmierung
⿱⻗⿰界界
xxaaaabbbbccccxx
xxabcabcabcabcxx
x0abcabcabcabcx0
器:口口口口犬
器:口口犬口口
⿵冂⿱(⿰三三三三)(⿰丅丅丅丅)
dfpqrstdf
dfpqdstdf`;
      // 口犬口犬口
      // 器:㗊犬
      // 器:哭吅
      // 㗊:吕吕
      // 㗊:吅吅
      // 吕:口口
      // 吅:口口
      text = text.replace(/[\(\)⿱⿰⿵]/gv, '');
      words = text.split(/\s+/gv);
      pattern_1 = /(.)(?=.*\1)/gv;
      // n                 = 2
      // pattern_n         = new RegExp """(?=(.{#{n}})(?=.*\\1))""", 'gv'
      // find_repetitions  = ( word ) -> [ ( word.matchAll pattern_n )..., ].map ( m ) => m[ 1 ]
      //-------------------------------------------------------------------------------------------------------
      is_repetitive = function(t) {
        var tt, tt_1;
        tt = t + t;
        tt_1 = tt.replace(/^.(.*?).$/v, '$1');
        return (tt_1.indexOf(t)) > -1;
      };
      //-------------------------------------------------------------------------------------------------------
      find_reduplication_candidates = function(word) {
        var R, candidate, chr, chrs, extra_count, extra_counts, i, idx_1, idx_2, j, len, len1, max_length, n, repeated_chrs;
        R = new Map();
        chrs = Array.from(word);
        if (chrs.length === 1) {
          return R;
        }
        max_length = Math.floor(chrs.length / 2);
        extra_counts = (function() {
          var i, ref, results;
          results = [];
          for (n = i = 1, ref = max_length; i <= ref; n = i += +1) {
            results.push(n);
          }
          return results;
        })();
        repeated_chrs = new Set(word.match(pattern_1));
// debug 'Ωcrmmd___5', { extra_counts, }
//.....................................................................................................
        for (idx_1 = i = 0, len = chrs.length; i < len; idx_1 = ++i) {
          chr = chrs[idx_1];
          if (!repeated_chrs.has(chr)) {
            continue;
          }
          if (!R.has(chr)) {
            R.set(chr, idx_1);
          }
          for (j = 0, len1 = extra_counts.length; j < len1; j++) {
            extra_count = extra_counts[j];
            idx_2 = idx_1 + extra_count;
            if (idx_2 >= chrs.length) {
              break;
            }
            // continue unless matches chr
            candidate = chrs.slice(idx_1, +idx_2 + 1 || 9e9).join('');
            if (R.has(candidate)) {
              continue;
            }
            if (is_repetitive(candidate)) {
              continue;
            }
            R.set(candidate, idx_1);
          }
        }
        //.....................................................................................................
        return R;
      };
      //-------------------------------------------------------------------------------------------------------
      find_all_repetitions = function(word) {
        var R, candidate, candidates, idx_0, idx_1, idx_2, indexes, last_idx, x;
        R = new Map();
        candidates = find_reduplication_candidates(word);
        info('Ωcrmmd___7', rpr(word));
// help 'Ωcrmmd___8', candidates
//.....................................................................................................
        for (x of candidates) {
          [candidate, idx_0] = x;
          indexes = new Set([idx_0]);
          // urge 'Ωcrmmd___9', idx_0, reverse ( rpr candidate )
          idx_1 = idx_0 + 1;
          while (true) {
            if (idx_1 > word.length/* TAINT: what about chrs beyond 0xffff? */) {
              break;
            }
            idx_2 = word.indexOf(candidate, idx_1);
            if (idx_2 < 0) {
              break;
            }
            idx_1 += 1;
            if (indexes.has(idx_2)) {
              continue;
            }
            // debug 'Ωcrmmd__10', idx_2, ( rpr candidate ), [ indexes..., ], idx_2
            /* NOTE: filter out overlapping matches like 'aba' in 'ababa' */
            last_idx = [...indexes].at(-1);
            if (last_idx + candidate.length > idx_2/* TAINT: what about chrs beyond 0xffff? */) {
/* TAINT should not have to use this cludge */              continue;
            }
            indexes.add(idx_2);
          }
          if (indexes.size > 1) {
            R.set(candidate, [...indexes]);
          }
        }
        //.....................................................................................................
        return R;
      };
//=======================================================================================================
      for (i = 0, len = words.length; i < len; i++) {
        word = words[i];
        repetitions = find_all_repetitions(word);
        count = 0;
        for (x of repetitions) {
          [repetition, indexes] = x;
          count++;
          chr_count = repetition.length;
          idx_count = indexes.length;
          area = chr_count * idx_count;
          urge('Ωcrmmd__11', count, ':', chr_count, idx_count, area, rpr(word), rpr(repetition), indexes);
        }
      }
      //console.log(matches); // ["r", "o", "g", "r", "a", "m", "i"]
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    nr3: function() {
      var is_repetitive;
      is_repetitive = function(t) {
        var tt, tt_1;
        tt = t + t;
        tt_1 = tt.replace(/^.(.*?).$/v, '$1');
        debug('Ωcrmmd__12', rpr(t));
        // debug 'Ωcrmmd__13', rpr tt
        // debug 'Ωcrmmd__14', rpr tt_1
        return (tt_1.indexOf(t)) > -1;
      };
      info('Ωcrmmd__15', is_repetitive('abc'));
      info('Ωcrmmd__16', is_repetitive('a'));
      info('Ωcrmmd__17', is_repetitive('aa'));
      info('Ωcrmmd__18', is_repetitive('aaa'));
      info('Ωcrmmd__19', is_repetitive('aaac'));
      info('Ωcrmmd__20', is_repetitive('abca'));
      info('Ωcrmmd__21', is_repetitive('abcabc'));
      return null;
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var guytest_cfg;
      // demo_infinite_proxy()
      // demo_colorful_proxy()
      guytest_cfg = {
        throw_on_error: false,
        show_passes: false,
        report_checks: false
      };
      guytest_cfg = {
        throw_on_error: true,
        show_passes: true,
        report_checks: true
      };
      return (new Test(guytest_cfg)).test({
        nr2: tests.nr2
      });
    })();
  }

  // ( new Test guytest_cfg ).test { nr3: tests.nr3, }
// # ( new Test guytest_cfg ).test { sample_db_with_bsql: tests.sample_db_with_bsql, }
// ( new Test guytest_cfg ).test { udf_functions_with_nsql: tests.udf_functions_with_nsql, }
// ( new Test guytest_cfg ).test { udf_functions_with_bsql: tests.udf_functions_with_bsql, }
// ( new Test guytest_cfg ).test { udf_aggregates_with_bsql: tests.udf_aggregates_with_bsql, }
// ( new Test guytest_cfg ).test { udf_aggregates_with_nsql: tests.udf_aggregates_with_nsql, }
// ( new Test guytest_cfg ).test { udf_table_function_with_bsql: tests.udf_table_function_with_bsql, }
// ( new Test guytest_cfg ).test { file_mirror_as_table_function: tests.file_mirror_as_table_function, }

  // echo 'a\u2028b\nz'

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtcmVwZXRpdGlvbi1maW5kZXIuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQUE7QUFBQSxNQUFBLEVBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQTs7O0VBR0EsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixpQkFBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLEtBSEYsRUFJRSxLQUpGLEVBS0UsSUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsR0FSRixFQVNFLElBVEYsRUFVRSxPQVZGLEVBV0UsR0FYRixDQUFBLEdBVzRCLEdBQUcsQ0FBQyxHQVhoQzs7RUFZQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1QixFQXpCQTs7O0VBMkJBLENBQUEsQ0FBRSxHQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLDRDQUFSLENBQTVCOztFQUNBLElB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SUwsRUFwREY7OztFQThNQSxJQUFHLE1BQUEsS0FBVSxPQUFPLENBQUMsSUFBckI7SUFBK0IsTUFBUyxDQUFBLENBQUEsQ0FBQSxHQUFBO0FBQ3hDLFVBQUEsV0FBQTs7O01BRUUsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixLQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixJQUFsQjtRQUEwQixXQUFBLEVBQWEsSUFBdkM7UUFBNkMsYUFBQSxFQUFlO01BQTVEO2FBQ2QsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QjtRQUFFLEdBQUEsRUFBSyxLQUFLLENBQUM7TUFBYixDQUE5QjtJQUxzQyxDQUFBLElBQXhDOzs7RUE5TUE7Ozs7Ozs7Ozs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2JyaWNhYnJhYy1kYnJpYydcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICB3aGl0ZVxuICBncmVlblxuICBibHVlXG4gIGdvbGRcbiAgZ3JleVxuICByZWRcbiAgYm9sZFxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuIyB3cml0ZSAgICAgICAgICAgICAgICAgICAgID0gKCBwICkgLT4gcHJvY2Vzcy5zdGRvdXQud3JpdGUgcFxueyBuZmEgfSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG5GUyAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpmcydcblBBVEggICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG5cblxuIyAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiMgcmVtb3ZlID0gKCBwYXRoICkgLT5cbiMgICB0cnlcbiMgICAgIEZTLnVubGlua1N5bmMgcGF0aFxuIyAgICAgaGVscCAnzqlmbHJ0X19fMScsIFwicmVtb3ZlZCAje3JwciBwYXRofVwiXG4jICAgY2F0Y2ggZXJyb3JcbiMgICAgIHRocm93IGVycm9yIHVubGVzcyBlcnJvci5jb2RlIGlzICdFTk9FTlQnXG4jICAgICB1cmdlICfOqWZscnRfX18yJywgXCJubyBzdWNoIEZTIG9iamVjdDogI3tycHIgcGF0aH1cIlxuIyAgIHJldHVybiBudWxsXG5cblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRlc3RzID0gdGVzdHMgPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYmFzaWNzOiAtPlxuICAgIGNsYXNzIENvdW50aW5nX21hcCBleHRlbmRzIE1hcFxuICAgICAgY29uc3RydWN0b3I6ICggaXRlcmFibGUsIGRlbHRhID0gMCApIC0+XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgQGRlbHRhICA9IGRlbHRhXG4gICAgICAgIEBzZXQga2V5IGZvciBrZXkgZnJvbSBpdGVyYWJsZVxuICAgICAgICA7dW5kZWZpbmVkXG4gICAgICBnZXQ6ICAgICAgICAoIGtleSApIC0+ICggc3VwZXIga2V5ICkgPyAwXG4gICAgICBnZXRfY291bnQ6ICAoIGtleSApIC0+ICggQGdldCBrZXkgKSArIEBkZWx0YVxuICAgICAgc2V0OiAgICAgICAgKCBrZXkgKSAtPiBzdXBlciBrZXksICggQGdldCBrZXkgKSArIDFcbiAgICB0ZXh0ICAgID0gXCJcIlwiXG4gICAgcHJvZ3JhbW1pZXJ1bmdcbiAgICDiv7Hiu5fiv7DnlYznlYxcbiAgICBhYmNhYmNhYmNcbiAgICBhYWFiYmJjY2NcbiAgICDiv7XlhoLiv7Eo4r+w5LiJ5LiJ5LiJ5LiJKSjiv7DkuIXkuIXkuIXkuIUpXG4gICAgXCJcIlwiXG4gICAgdGV4dCAgICAgICAgICAgICAgPSB0ZXh0LnJlcGxhY2UgL1tcXChcXCniv7Hiv7Div7VdL2d2LCAnJ1xuICAgIHdvcmRzICAgICAgICAgICAgID0gdGV4dC5zcGxpdCAvXFxzKy9ndlxuICAgIHBhdHRlcm5fMSAgICAgICAgID0gLy8vICguKSAoPz0uKlxcMSkgLy8vZ3ZcbiAgICBuICAgICAgICAgICAgICAgICA9IDJcbiAgICBwYXR0ZXJuX24gICAgICAgICA9IG5ldyBSZWdFeHAgXCJcIlwiKD89KC57I3tufX0pKD89LipcXFxcMSkpXCJcIlwiLCAnZ3YnXG4gICAgZmluZF9yZXBldGl0aW9ucyAgPSAoIHdvcmQgKSAtPiBbICggd29yZC5tYXRjaEFsbCBwYXR0ZXJuX24gKS4uLiwgXS5tYXAgKCBtICkgPT4gbVsgMSBdXG4gICAgZm9yIHdvcmQgaW4gd29yZHNcbiAgICAgIG1hdGNoZXMgPSB3b3JkLm1hdGNoIHBhdHRlcm5fMVxuICAgICAgZGVidWcgJ86pY3JtbWRfX18zJywgKCBycHIgd29yZCwgKSwgbWF0Y2hlcywgbmV3IENvdW50aW5nX21hcCBtYXRjaGVzLCAxXG4gICAgICBkZWJ1ZyAnzqljcm1tZF9fXzQnLCAoIHJwciB3b3JkLCApLCBmaW5kX3JlcGV0aXRpb25zIHdvcmRcbiAgICAjY29uc29sZS5sb2cobWF0Y2hlcyk7IC8vIFtcInJcIiwgXCJvXCIsIFwiZ1wiLCBcInJcIiwgXCJhXCIsIFwibVwiLCBcImlcIl1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBucjI6IC0+XG4gICAgY2xhc3MgQ291bnRpbmdfbWFwIGV4dGVuZHMgTWFwXG4gICAgICBjb25zdHJ1Y3RvcjogKCBpdGVyYWJsZSwgZGVsdGEgPSAwICkgLT5cbiAgICAgICAgc3VwZXIoKVxuICAgICAgICBAZGVsdGEgID0gZGVsdGFcbiAgICAgICAgQHNldCBrZXkgZm9yIGtleSBmcm9tIGl0ZXJhYmxlXG4gICAgICAgIDt1bmRlZmluZWRcbiAgICAgIGdldDogICAgICAgICgga2V5ICkgLT4gKCBzdXBlciBrZXkgKSA/IDBcbiAgICAgIGdldF9jb3VudDogICgga2V5ICkgLT4gKCBAZ2V0IGtleSApICsgQGRlbHRhXG4gICAgICBzZXQ6ICAgICAgICAoIGtleSApIC0+IHN1cGVyIGtleSwgKCBAZ2V0IGtleSApICsgMVxuICAgIHRleHQgICAgPSBcIlwiXCJcbiAgICBwcm9ncmFtbWllcnVuZ1xuICAgIOK/seK7l+K/sOeVjOeVjFxuICAgIHh4YWFhYWJiYmJjY2NjeHhcbiAgICB4eGFiY2FiY2FiY2FiY3h4XG4gICAgeDBhYmNhYmNhYmNhYmN4MFxuICAgIOWZqDrlj6Plj6Plj6Plj6PniqxcbiAgICDlmag65Y+j5Y+j54qs5Y+j5Y+jXG4gICAg4r+15YaC4r+xKOK/sOS4ieS4ieS4ieS4iSko4r+w5LiF5LiF5LiF5LiFKVxuICAgIGRmcHFyc3RkZlxuICAgIGRmcHFkc3RkZlxuICAgIFwiXCJcIlxuICAgICMg5Y+j54qs5Y+j54qs5Y+jXG4gICAgIyDlmag645eK54qsXG4gICAgIyDlmag65ZOt5ZCFXG4gICAgIyDjl4o65ZCV5ZCVXG4gICAgIyDjl4o65ZCF5ZCFXG4gICAgIyDlkJU65Y+j5Y+jXG4gICAgIyDlkIU65Y+j5Y+jXG4gICAgdGV4dCAgICAgICAgICAgICAgPSB0ZXh0LnJlcGxhY2UgL1tcXChcXCniv7Hiv7Div7VdL2d2LCAnJ1xuICAgIHdvcmRzICAgICAgICAgICAgID0gdGV4dC5zcGxpdCAvXFxzKy9ndlxuICAgIHBhdHRlcm5fMSAgICAgICAgID0gLy8vICguKSAoPz0uKlxcMSkgLy8vZ3ZcbiAgICAjIG4gICAgICAgICAgICAgICAgID0gMlxuICAgICMgcGF0dGVybl9uICAgICAgICAgPSBuZXcgUmVnRXhwIFwiXCJcIig/PSgueyN7bn19KSg/PS4qXFxcXDEpKVwiXCJcIiwgJ2d2J1xuICAgICMgZmluZF9yZXBldGl0aW9ucyAgPSAoIHdvcmQgKSAtPiBbICggd29yZC5tYXRjaEFsbCBwYXR0ZXJuX24gKS4uLiwgXS5tYXAgKCBtICkgPT4gbVsgMSBdXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBpc19yZXBldGl0aXZlID0gKCB0ICkgLT5cbiAgICAgIHR0ICAgID0gdCArIHRcbiAgICAgIHR0XzEgID0gdHQucmVwbGFjZSAvXi4oLio/KS4kL3YsICckMSdcbiAgICAgIHJldHVybiAoIHR0XzEuaW5kZXhPZiB0ICkgPiAtMVxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZmluZF9yZWR1cGxpY2F0aW9uX2NhbmRpZGF0ZXMgPSAoIHdvcmQgKSAtPlxuICAgICAgUiAgICAgICAgICAgICA9IG5ldyBNYXAoKVxuICAgICAgY2hycyAgICAgICAgICA9IEFycmF5LmZyb20gd29yZFxuICAgICAgcmV0dXJuIFIgaWYgY2hycy5sZW5ndGggaXMgMVxuICAgICAgbWF4X2xlbmd0aCAgICA9IGNocnMubGVuZ3RoIC8vIDJcbiAgICAgIGV4dHJhX2NvdW50cyAgPSAoIG4gZm9yIG4gaW4gWyAxIC4uIG1heF9sZW5ndGggXSBieSArMSApXG4gICAgICByZXBlYXRlZF9jaHJzID0gbmV3IFNldCB3b3JkLm1hdGNoIHBhdHRlcm5fMVxuICAgICAgIyBkZWJ1ZyAnzqljcm1tZF9fXzUnLCB7IGV4dHJhX2NvdW50cywgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBmb3IgY2hyLCBpZHhfMSBpbiBjaHJzXG4gICAgICAgIGNvbnRpbnVlIHVubGVzcyByZXBlYXRlZF9jaHJzLmhhcyBjaHJcbiAgICAgICAgUi5zZXQgY2hyLCBpZHhfMSB1bmxlc3MgUi5oYXMgY2hyXG4gICAgICAgIGZvciBleHRyYV9jb3VudCBpbiBleHRyYV9jb3VudHNcbiAgICAgICAgICBpZHhfMiA9IGlkeF8xICsgZXh0cmFfY291bnRcbiAgICAgICAgICBicmVhayBpZiBpZHhfMiA+PSBjaHJzLmxlbmd0aFxuICAgICAgICAjIGNvbnRpbnVlIHVubGVzcyBtYXRjaGVzIGNoclxuICAgICAgICAgIGNhbmRpZGF0ZSA9IGNocnNbIGlkeF8xIC4uIGlkeF8yIF0uam9pbiAnJ1xuICAgICAgICAgIGNvbnRpbnVlIGlmIFIuaGFzIGNhbmRpZGF0ZVxuICAgICAgICAgIGNvbnRpbnVlIGlmIGlzX3JlcGV0aXRpdmUgY2FuZGlkYXRlXG4gICAgICAgICAgUi5zZXQgY2FuZGlkYXRlLCBpZHhfMVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gUlxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZmluZF9hbGxfcmVwZXRpdGlvbnMgPSAoIHdvcmQgKSAtPlxuICAgICAgUiAgICAgICAgICAgPSBuZXcgTWFwKClcbiAgICAgIGNhbmRpZGF0ZXMgID0gZmluZF9yZWR1cGxpY2F0aW9uX2NhbmRpZGF0ZXMgd29yZFxuICAgICAgaW5mbyAnzqljcm1tZF9fXzcnLCBycHIgd29yZFxuICAgICAgIyBoZWxwICfOqWNybW1kX19fOCcsIGNhbmRpZGF0ZXNcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZm9yIFsgY2FuZGlkYXRlLCBpZHhfMCwgXSBmcm9tIGNhbmRpZGF0ZXNcbiAgICAgICAgaW5kZXhlcyA9IG5ldyBTZXQgWyBpZHhfMCwgXVxuICAgICAgICAjIHVyZ2UgJ86pY3JtbWRfX185JywgaWR4XzAsIHJldmVyc2UgKCBycHIgY2FuZGlkYXRlIClcbiAgICAgICAgaWR4XzEgPSBpZHhfMCArIDFcbiAgICAgICAgbG9vcFxuICAgICAgICAgIGJyZWFrIGlmIGlkeF8xID4gd29yZC5sZW5ndGggIyMjIFRBSU5UOiB3aGF0IGFib3V0IGNocnMgYmV5b25kIDB4ZmZmZj8gIyMjXG4gICAgICAgICAgaWR4XzIgPSB3b3JkLmluZGV4T2YgY2FuZGlkYXRlLCBpZHhfMVxuICAgICAgICAgIGJyZWFrIGlmIGlkeF8yIDwgMFxuICAgICAgICAgIGlkeF8xICs9IDFcbiAgICAgICAgICBjb250aW51ZSBpZiBpbmRleGVzLmhhcyBpZHhfMlxuICAgICAgICAgICMgZGVidWcgJ86pY3JtbWRfXzEwJywgaWR4XzIsICggcnByIGNhbmRpZGF0ZSApLCBbIGluZGV4ZXMuLi4sIF0sIGlkeF8yXG4gICAgICAgICAgIyMjIE5PVEU6IGZpbHRlciBvdXQgb3ZlcmxhcHBpbmcgbWF0Y2hlcyBsaWtlICdhYmEnIGluICdhYmFiYScgIyMjXG4gICAgICAgICAgbGFzdF9pZHggPSBbIGluZGV4ZXMuLi4sIF0uYXQgLTEgIyMjIFRBSU5UIHNob3VsZCBub3QgaGF2ZSB0byB1c2UgdGhpcyBjbHVkZ2UgIyMjXG4gICAgICAgICAgY29udGludWUgaWYgbGFzdF9pZHggKyBjYW5kaWRhdGUubGVuZ3RoID4gaWR4XzIgIyMjIFRBSU5UOiB3aGF0IGFib3V0IGNocnMgYmV5b25kIDB4ZmZmZj8gIyMjXG4gICAgICAgICAgaW5kZXhlcy5hZGQgaWR4XzJcbiAgICAgICAgUi5zZXQgY2FuZGlkYXRlLCBbIGluZGV4ZXMuLi4sIF0gaWYgaW5kZXhlcy5zaXplID4gMVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gUlxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZm9yIHdvcmQgaW4gd29yZHNcbiAgICAgIHJlcGV0aXRpb25zID0gZmluZF9hbGxfcmVwZXRpdGlvbnMgd29yZFxuICAgICAgY291bnQgICAgICAgPSAwXG4gICAgICBmb3IgWyByZXBldGl0aW9uLCBpbmRleGVzLCBdIGZyb20gcmVwZXRpdGlvbnNcbiAgICAgICAgY291bnQrK1xuICAgICAgICBjaHJfY291bnQgICA9IHJlcGV0aXRpb24ubGVuZ3RoXG4gICAgICAgIGlkeF9jb3VudCAgID0gaW5kZXhlcy5sZW5ndGhcbiAgICAgICAgYXJlYSAgICAgICAgPSBjaHJfY291bnQgKiBpZHhfY291bnRcbiAgICAgICAgdXJnZSAnzqljcm1tZF9fMTEnLCBjb3VudCwgJzonLCBjaHJfY291bnQsIGlkeF9jb3VudCwgYXJlYSwgKCBycHIgd29yZCApLCAoIHJwciByZXBldGl0aW9uICksIGluZGV4ZXNcbiAgICAjY29uc29sZS5sb2cobWF0Y2hlcyk7IC8vIFtcInJcIiwgXCJvXCIsIFwiZ1wiLCBcInJcIiwgXCJhXCIsIFwibVwiLCBcImlcIl1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBucjM6IC0+XG4gICAgaXNfcmVwZXRpdGl2ZSA9ICggdCApIC0+XG4gICAgICB0dCAgICA9IHQgKyB0XG4gICAgICB0dF8xICA9IHR0LnJlcGxhY2UgL14uKC4qPykuJC92LCAnJDEnXG4gICAgICBkZWJ1ZyAnzqljcm1tZF9fMTInLCBycHIgdFxuICAgICAgIyBkZWJ1ZyAnzqljcm1tZF9fMTMnLCBycHIgdHRcbiAgICAgICMgZGVidWcgJ86pY3JtbWRfXzE0JywgcnByIHR0XzFcbiAgICAgIHJldHVybiAoIHR0XzEuaW5kZXhPZiB0ICkgPiAtMVxuICAgIGluZm8gJ86pY3JtbWRfXzE1JywgaXNfcmVwZXRpdGl2ZSAnYWJjJ1xuICAgIGluZm8gJ86pY3JtbWRfXzE2JywgaXNfcmVwZXRpdGl2ZSAnYSdcbiAgICBpbmZvICfOqWNybW1kX18xNycsIGlzX3JlcGV0aXRpdmUgJ2FhJ1xuICAgIGluZm8gJ86pY3JtbWRfXzE4JywgaXNfcmVwZXRpdGl2ZSAnYWFhJ1xuICAgIGluZm8gJ86pY3JtbWRfXzE5JywgaXNfcmVwZXRpdGl2ZSAnYWFhYydcbiAgICBpbmZvICfOqWNybW1kX18yMCcsIGlzX3JlcGV0aXRpdmUgJ2FiY2EnXG4gICAgaW5mbyAnzqljcm1tZF9fMjEnLCBpc19yZXBldGl0aXZlICdhYmNhYmMnXG4gICAgO251bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICAjIGRlbW9faW5maW5pdGVfcHJveHkoKVxuICAjIGRlbW9fY29sb3JmdWxfcHJveHkoKVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IHRydWUsIHJlcG9ydF9jaGVja3M6IHRydWUsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBucjI6IHRlc3RzLm5yMiwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgbnIzOiB0ZXN0cy5ucjMsIH1cbiAgIyAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgc2FtcGxlX2RiX3dpdGhfYnNxbDogdGVzdHMuc2FtcGxlX2RiX3dpdGhfYnNxbCwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdWRmX2Z1bmN0aW9uc193aXRoX25zcWw6IHRlc3RzLnVkZl9mdW5jdGlvbnNfd2l0aF9uc3FsLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB1ZGZfZnVuY3Rpb25zX3dpdGhfYnNxbDogdGVzdHMudWRmX2Z1bmN0aW9uc193aXRoX2JzcWwsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHVkZl9hZ2dyZWdhdGVzX3dpdGhfYnNxbDogdGVzdHMudWRmX2FnZ3JlZ2F0ZXNfd2l0aF9ic3FsLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB1ZGZfYWdncmVnYXRlc193aXRoX25zcWw6IHRlc3RzLnVkZl9hZ2dyZWdhdGVzX3dpdGhfbnNxbCwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdWRmX3RhYmxlX2Z1bmN0aW9uX3dpdGhfYnNxbDogdGVzdHMudWRmX3RhYmxlX2Z1bmN0aW9uX3dpdGhfYnNxbCwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgZmlsZV9taXJyb3JfYXNfdGFibGVfZnVuY3Rpb246IHRlc3RzLmZpbGVfbWlycm9yX2FzX3RhYmxlX2Z1bmN0aW9uLCB9XG5cbiAgIyBlY2hvICdhXFx1MjAyOGJcXG56J1xuIl19
