(async function() {
  'use strict';
  var C, GTNG, GUY, SFMODULES, Test, alert, blue, bold, debug, echo, f, gold, grey, help, info, inspect, log, nfa, plain, praise, red, reverse, rpr, settings, tests, urge, warn, whisper, white, write,
    indexOf = [].indexOf;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('bricabrac'));

  ({rpr, inspect, echo, white, blue, gold, grey, red, bold, reverse, log} = GUY.trm);

  ({f} = require('../../../apps/effstring'));

  write = function(p) {
    return process.stdout.write(p);
  };

  C = require('ansis');

  ({nfa} = require('../../../apps/normalize-function-arguments'));

  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  SFMODULES = require('../../../apps/bricabrac-single-file-modules');

  //===========================================================================================================
  settings = {
    my_seed_1: 2873462134,
    my_seed_2: 2873462134 + 1
  };

  //===========================================================================================================
  this.tests = tests = {
    //---------------------------------------------------------------------------------------------------------
    get_random_float: function() {
      var Get_random, internals, matchers, max_count, probes, seen;
      ({Get_random, internals} = SFMODULES.unstable.require_random_tools());
      matchers = [];
      probes = [];
      max_count = 1e4;
      seen = new Set();
      (() => {        //.......................................................................................................
        var get_random, i, idx, ref, t, Ωbrbr___1, Ωbrbr___2;
        get_random = new Get_random({
          seed: settings.my_seed_1
        });
        for (idx = i = 0, ref = max_count; (0 <= ref ? i < ref : i > ref); idx = 0 <= ref ? ++i : --i) {
          matchers.push(t = get_random.float());
          seen.add(t);
        }
        this.eq((Ωbrbr___1 = function() {
          return matchers.every(function(t) {
            return (0 <= t && t <= 1);
          });
        }), true);
        this.eq((Ωbrbr___2 = function() {
          return seen.size;
        }), max_count);
        return null;
      })();
      (() => {        //.......................................................................................................
        var get_random, i, idx, ref, t, Ωbrbr___3;
        get_random = new Get_random({
          seed: settings.my_seed_1
        });
        for (idx = i = 0, ref = max_count; (0 <= ref ? i < ref : i > ref); idx = 0 <= ref ? ++i : --i) {
          probes.push(t = get_random.float());
        }
        this.eq((Ωbrbr___3 = function() {
          return probes;
        }), matchers);
        return null;
      })();
      (() => {        //.......................................................................................................
        var count, get_random, i, idx, ref, ref1, t, Ωbrbr___4;
        get_random = new Get_random({
          seed: settings.my_seed_2
        });
        count = 0;
        for (idx = i = 0, ref = max_count; (0 <= ref ? i < ref : i > ref); idx = 0 <= ref ? ++i : --i) {
          if (ref1 = (t = get_random.float()), indexOf.call(matchers, ref1) >= 0) {
            count++;
          }
        }
        this.eq((Ωbrbr___4 = function() {
          return count;
        }), 0);
        return null;
      })();
      (() => {        //.......................................................................................................
        var count, get_random, i, idx, ref, ref1, t, Ωbrbr___5;
        get_random = new Get_random();
        count = 0;
        for (idx = i = 0, ref = max_count; (0 <= ref ? i < ref : i > ref); idx = 0 <= ref ? ++i : --i) {
          if (ref1 = (t = get_random.float()), indexOf.call(matchers, ref1) >= 0) {
            count++;
          }
        }
        this.eq((Ωbrbr___5 = function() {
          return count < 10;
        }), true);
        return null;
      })();
      (() => {        //.......................................................................................................
        var _, bucket, buckets, count, get_random, i, idx, j, max, min, ref, ref1, ref2, t, Ωbrbr___7, Ωbrbr___8;
        get_random = new Get_random({
          seed: settings.my_seed_1
        });
        min = 100;
        max = 999;
        buckets = {};
        for (bucket = i = ref = min, ref1 = max; (ref <= ref1 ? i < ref1 : i > ref1); bucket = ref <= ref1 ? ++i : --i) {
          buckets[Math.floor(bucket / 10)] = 0;
        }
        for (idx = j = 0, ref2 = max_count; (0 <= ref2 ? j < ref2 : j > ref2); idx = 0 <= ref2 ? ++j : --j) {
          t = get_random.float({min, max});
          // debug 'Ωbrbr___6', t
          bucket = Math.floor(t / 10);
          buckets[bucket]++;
          this.eq((Ωbrbr___7 = function() {
            return (min <= t && t <= max);
          }), true);
        }
        for (_ in buckets) {
          count = buckets[_];
          this.eq((Ωbrbr___8 = function() {
            return (50 <= count && count <= 150);
          }), true);
        }
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    get_random_integer: function() {
      var Get_random, internals, max_count;
      ({Get_random, internals} = SFMODULES.unstable.require_random_tools());
      max_count = 1e4;
      (() => {        //.......................................................................................................
        var _, bucket, buckets, count, get_random, i, idx, j, max, min, ref, ref1, ref2, t, Ωbrbr__10, Ωbrbr__11;
        get_random = new Get_random({
          seed: settings.my_seed_1
        });
        min = 100;
        max = 999;
        buckets = {};
        for (bucket = i = ref = min, ref1 = max; (ref <= ref1 ? i < ref1 : i > ref1); bucket = ref <= ref1 ? ++i : --i) {
          buckets[Math.floor(bucket / 10)] = 0;
        }
        for (idx = j = 0, ref2 = max_count; (0 <= ref2 ? j < ref2 : j > ref2); idx = 0 <= ref2 ? ++j : --j) {
          t = get_random.integer({min, max});
          // debug 'Ωbrbr___9', t
          bucket = Math.floor(t / 10);
          buckets[bucket]++;
          this.eq((Ωbrbr__10 = function() {
            return (min <= t && t <= max);
          }), true);
        }
        for (_ in buckets) {
          count = buckets[_];
          this.eq((Ωbrbr__11 = function() {
            return (50 <= count && count <= 150);
          }), true);
        }
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    get_random_chr: function() {
      var Get_random, internals, max_count;
      ({Get_random, internals} = SFMODULES.unstable.require_random_tools());
      max_count = 1e4;
      (() => {        //.......................................................................................................
        var get_random, i, idx, ref, t;
        get_random = new Get_random({
          seed: settings.my_seed_1
        });
        for (idx = i = 0, ref = max_count; (0 <= ref ? i < ref : i > ref); idx = 0 <= ref ? ++i : --i) {
          t = get_random.chr();
        }
        // debug 'Ωbrbr__12', rpr t
        return null;
      })();
      (() => {        //.......................................................................................................
        var _, get_random, result, Ωbrbr__13;
        get_random = new Get_random({
          seed: settings.my_seed_1
        });
        result = ((function() {
          var i, results;
          results = [];
          for (_ = i = 1; i <= 40; _ = ++i) {
            results.push(get_random.chr({
              min: 'A',
              max: 'Z'
            }));
          }
          return results;
        })()).join('');
        this.eq((Ωbrbr__13 = function() {
          return result;
        }), 'PQKESUUNYHBEWGHGWECRSZZLVOSFQSETNSEXDFGF');
        return null;
      })();
      (() => {        //.......................................................................................................
        var _, get_random, on_stats, result, Ωbrbr__15, Ωbrbr__16;
        on_stats = function(stats) {};
        // debug 'Ωbrbr__14', stats
        get_random = new Get_random({
          seed: settings.my_seed_2,
          on_stats
        });
        result = ((function() {
          var i, results;
          results = [];
          for (_ = i = 1; i <= 40; _ = ++i) {
            results.push(get_random.chr({
              min: 'A',
              max: 'Z'
            }));
          }
          return results;
        })()).join('');
        this.eq((Ωbrbr__15 = function() {
          return result === 'PQKESUUNYHBEWGHGWECRSZZLVOSFQSETNSEXDFGF';
        }), false);
        this.eq((Ωbrbr__16 = function() {
          return /^[A-Z]{40}$/.test(result);
        }), true);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    get_random_text: function() {
      var Get_random, internals, max_count;
      ({Get_random, internals} = SFMODULES.unstable.require_random_tools());
      max_count = 1e4;
      (() => {        //.......................................................................................................
        var get_random, on_stats, result, Ωbrbr__18;
        on_stats = function(stats) {};
        // info 'Ωbrbr__17', stats
        get_random = new Get_random({
          seed: settings.my_seed_1,
          on_stats
        });
        result = get_random.text({
          min: 'A',
          max: 'Z',
          length: 40
        });
        this.eq((Ωbrbr__18 = function() {
          return result;
        }), 'PQKESUUNYHBEWGHGWECRSZZLVOSFQSETNSEXDFGF');
        return null;
      })();
      (() => {        //.......................................................................................................
        var _, count_attempts, get_random, i, on_stats, result, retries, valid_re, Ωbrbr__20;
        count_attempts = function(n) {
          return retries[n] = (retries[n] != null ? retries[n] : retries[n] = 0) + 1;
        };
        retries = {};
        on_stats = function(stats) {
          if (stats.name !== 'chr') {
            // help 'Ωbrbr__19', stats
            return null;
          }
          count_attempts(stats.stats.retries);
          return null;
        };
        valid_re = /^[\u0020-\u007e\u00a0-\u00ac\u00ae-\u00ff]{150}$/v;
        get_random = new Get_random({
          seed: null,
          on_stats
        });
        for (_ = i = 1; i <= 1; _ = ++i) {
          // for _ in [ 1 .. 10 ]
          result = get_random.text({
            min: 0x00,
            max: 0xff,
            length: 150
          });
          this.eq((Ωbrbr__20 = function() {
            return valid_re.test(result);
          }), true);
        }
        // debug 'Ωbrbr__21', retries
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    get_random_set_of_chrs: function() {
      var Get_random, internals, max_count;
      ({Get_random, internals} = SFMODULES.unstable.require_random_tools());
      max_count = 1e4;
      (() => {        //.......................................................................................................
        var _, get_random, i, on_stats, result, result_rpr, retries, valid_re, Ωbrbr__23;
        retries = 0;
        on_stats = function(stats) {
          retries += stats.stats.retries;
          // urge 'Ωbrbr__22', stats if stats.name is 'set_of_chrs'
          return null;
        };
        valid_re = /^[\u0020-\u007e\u00a0-\u00ac\u00ae-\u00ff]{50}$/v;
        get_random = new Get_random({
          seed: null,
          on_stats
        });
        for (_ = i = 1; i <= 20; _ = ++i) {
          result = get_random.set_of_chrs({
            min: 0x00,
            max: 0xff,
            size: 50
          });
          result_rpr = [...result].join('');
          this.eq((Ωbrbr__23 = function() {
            return valid_re.test(result_rpr);
          }), true);
          // debug 'Ωbrbr__24', retries
          retries = 0;
        }
        return null;
      })();
      (() => {        //.......................................................................................................
        var _, get_random, i, on_stats, result, result_rpr, retries, valid_re, Ωbrbr__26, Ωbrbr__27;
        retries = 0;
        on_stats = function(stats) {
          retries += stats.stats.retries;
          // urge 'Ωbrbr__25', stats if stats.name is 'set_of_chrs'
          return null;
        };
        valid_re = /^[0-9]{10}$/v;
        get_random = new Get_random({
          seed: null,
          on_stats
        });
        for (_ = i = 1; i <= 20; _ = ++i) {
          result = get_random.set_of_chrs({
            min: '0',
            max: '9',
            size: 10
          });
          result_rpr = [...result].join('');
          this.eq((Ωbrbr__26 = function() {
            return result.size;
          }), 10);
          this.eq((Ωbrbr__27 = function() {
            return valid_re.test(result_rpr);
          }), true);
          // debug 'Ωbrbr__28', retries, rpr result
          retries = 0;
        }
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    get_random_set_of_texts: function() {
      var Get_random, internals, max_count;
      ({Get_random, internals} = SFMODULES.unstable.require_random_tools());
      max_count = 1e4;
      (() => {        //.......................................................................................................
        var _, get_random, i, on_stats, random_text, result, retries, valid_re, Ωbrbr__30, Ωbrbr__31;
        retries = 0;
        on_stats = function(stats) {
          retries += stats.stats.retries;
          // urge 'Ωbrbr__29', stats if stats.name is 'set_of_chrs'
          return null;
        };
        valid_re = /^[0-9]{3}$/v;
        get_random = new Get_random({
          seed: null,
          on_stats
        });
        for (_ = i = 1; i <= 1; _ = ++i) {
          result = get_random.set_of_texts({
            min: '0',
            max: '9',
            length: 3,
            size: 10
          });
          this.eq((Ωbrbr__30 = function() {
            return result.size;
          }), 10);
          for (random_text of result) {
            this.eq((Ωbrbr__31 = function() {
              return valid_re.test(random_text);
            }), true);
          }
          // debug 'Ωbrbr__32', retries, rpr result
          retries = 0;
        }
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    get_random_text_of_variable_length: function() {
      var Get_random, internals, matchers;
      ({Get_random, internals} = SFMODULES.unstable.require_random_tools());
      matchers = ['εΧΚ', 'ονήφ', 'ΒΙ', 'ΟΠΟςΛ', 'η', 'ψψΩο', 'κΝε', 'Κμίκ', 'υΙ', 'ΟΛ'];
      (() => {        //.......................................................................................................
        var get_random, i, idx, on_stats, result, result_retries, Ωbrbr__36;
        result_retries = null;
        on_stats = (stats) => {
          var Ωbrbr_result_retries__34;
          // info 'Ωbrbr__33', stats
          result_retries = stats.stats.retries;
          return this.eq((Ωbrbr_result_retries__34 = function() {
            return result_retries >= 0;
          }), true);
        };
        get_random = new Get_random({
          seed: settings.my_seed_1,
          on_stats
        });
        for (idx = i = 0; i <= 9; idx = ++i) {
          result = get_random.text({
            min: 'Α',
            max: 'ω',
            min_length: 1,
            max_length: 5
          });
          debug('Ωbrbr__35', rpr(result));
          this.eq((Ωbrbr__36 = function() {
            return result;
          }), matchers[idx]);
        }
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    get_random_set_of_texts_of_variable_length: function() {
      var Get_random, internals;
      ({Get_random, internals} = SFMODULES.unstable.require_random_tools());
      (() => {        // matchers        = [ 'εΧΚ', 'ονήφ', 'ΒΙ', 'ΟΠΟςΛ', 'η', 'ψψΩο', 'κΝε', 'Κμίκ', 'υΙ', 'ΟΛ', ]
        //.......................................................................................................
        var get_random, i, idx, matchers, on_stats, result, result_retries, Ωbrbr__39;
        result_retries = null;
        on_stats = (stats) => {
          var Ωbrbr_result_retries__38;
          if (stats.name === 'set_of_texts') {
            info('Ωbrbr__37', stats);
          }
          if (stats.name === 'set_of_texts') {
            result_retries = stats.stats.retries;
          }
          return this.eq((Ωbrbr_result_retries__38 = function() {
            return result_retries >= 0;
          }), true);
        };
        get_random = new Get_random({
          seed: settings.my_seed_1,
          on_stats
        });
        matchers = [new Set(['⾉⽕⼢⾗⾮⾩', '⿋⼽⼄⼠⾺⼴', '⼴⾼⼦', '⾏⾚', '⿓⽛⾱⽳⾝⼭⾈⾜⼣⾥']), new Set(['⾝⼥⿇⼞⼭⼵', '⽐⼸⽺', '⼔⿓⼌⾣⾅⾲⽁⼍', '⽲⼩⼑⿌', '⼩⾶⼕⽓⽐']), new Set(['⼢⿀⾳⿕⼔⿀⼗⾉⽔', '⾇⾚⼠⼘⼼⾐', '⼏⿉⾜⼦⾜⼆⽞', '⽍⽠⾿⼔⼗⿎', '⾇⽤⿃⾅⽋⾎']), new Set(['⼘⼂⾛⾖⼨⾛⾜', '⽉⼛⿉⼘⿒⽂⼫⽗⾜', '⼔⿋⿄', '⼟⼅⼎⾂⼮⽵⾾⾼⽔', '⾨⽩⾐⼊⼂⽆']), new Set(['⽿⽩⽊', '⼽⾖⾜⾶⾩⾮', '⾶⼮⾃', '⽿⽸⾽⼡⽻⾊⼶', '⽆⼠⽴⼿⼼⼿⽫⾈']), new Set(['⽣', '⾱⽻⽀⽛⾽⾲⼦⾶⼹', '⼕⽗⼌⼖⽽⽦⽎', '⽚⾌⼾⾌⼧⼛⼹', '⾂⼣⿁']), new Set(['⾘⽲⾟⽤⼘', '⾁⾧⽜⼕⾰⾐⼩', '⼱⾑⿃⿒⼽⼙', '⿏⾰⾓⼐⼈', '⽘⽗⽽⼘⿀']), new Set(['⽳⼱⼤⾾⽷⾠⼿⾕', '⼛⼂⿃⼶⼭⼫', '⼫⾀⾄⿋⼏⼾', '⽁⼽⼹⾯⿃⽮⾳⽑⽩⽓', '⼯⽎⾱⽫⽩⾳']), new Set(['⼷⾕⼈⼶⽩⽿⾡⼃⾜', '⾱⿇⾞⾴⽝', '⾵', '⽻⿔⽀⿎⾑⽌⼤⽘', '⿊⼭⼳⿒⼐⽥⽙⾲⽟']), new Set(['⽣⽪', '⽙⼟⽰⾗', '⽰', '⼴⿑⾁⽺', '⾐⽌⾠⾭⽘'])];
        for (idx = i = 0; i <= 9; idx = ++i) {
          result = get_random.set_of_texts({
            min: '⼀',
            max: '⿕',
            size: 5,
            min_length: 1,
            max_length: 10
          });
          this.eq((Ωbrbr__39 = function() {
            return result;
          }), matchers[idx]);
        }
        // debug 'Ωbrbr__40', result
        return null;
      })();
      (() => {        //.......................................................................................................
        var get_random, i, idx, matchers, on_stats, result, result_retries, result_rpr, Ωbrbr__42;
        //.....................................................................................................
        result_retries = null;
        on_stats = (stats) => {
          var Ωbrbr_result_retries__41;
          if (stats.name === 'set_of_texts') {
            result_retries = stats.stats.retries;
          }
          return this.eq((Ωbrbr_result_retries__41 = function() {
            return result_retries >= 0;
          }), true);
        };
        //.....................................................................................................
        get_random = new Get_random({
          seed: settings.my_seed_1,
          on_stats
        });
        matchers = [
          {
            result_retries: 4,
            result_rpr: '5641793082'
          },
          {
            result_retries: 63,
            result_rpr: '2816794530'
          },
          {
            result_retries: 11,
            result_rpr: '4538196072'
          },
          {
            result_retries: 20,
            result_rpr: '7831924056'
          },
          {
            result_retries: 76,
            result_rpr: '0325467819'
          },
          {
            result_retries: 7,
            result_rpr: '3149760582'
          },
          {
            result_retries: 20,
            result_rpr: '2857361094'
          },
          {
            result_retries: 31,
            result_rpr: '4523786091'
          },
          {
            result_retries: 13,
            result_rpr: '4813560297'
          },
          {
            result_retries: 19,
            result_rpr: '7491065823'
          }
        ];
        for (idx = i = 0; i <= 9; idx = ++i) {
          result = get_random.set_of_texts({
            min: '0',
            max: '9',
            size: 10,
            length: 1
          });
          result_rpr = [...result].join('');
          this.eq((Ωbrbr__42 = function() {
            return result_rpr;
          }), matchers[idx].result_rpr);
        }
        // @eq ( Ωbrbr__43 = -> result_retries ), matchers[ idx ].result_retries
        return null;
      })();
      //.......................................................................................................
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
      (new Test(guytest_cfg)).test({tests});
      // ( new Test guytest_cfg ).test { get_random_text: tests.get_random_text, }
      //.........................................................................................................
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLFFBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUE7SUFBQSxvQkFBQTs7O0VBR0EsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixXQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsS0FIRixFQUlFLElBSkYsRUFLRSxJQUxGLEVBTUUsSUFORixFQU9FLEdBUEYsRUFRRSxJQVJGLEVBU0UsT0FURixFQVVFLEdBVkYsQ0FBQSxHQVU0QixHQUFHLENBQUMsR0FWaEM7O0VBV0EsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUI7O0VBQ0EsS0FBQSxHQUE0QixRQUFBLENBQUUsQ0FBRixDQUFBO1dBQVMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFmLENBQXFCLENBQXJCO0VB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WUFBWSxHQUFBLEVBQUssR0FBakI7WUFBc0IsSUFBQSxFQUFNLEVBQTVCO1lBQWdDLE1BQUEsRUFBUTtVQUF4QyxDQUF4QjtVQUNkLFVBQUEsR0FBYyxDQUFFLEdBQUEsTUFBRixDQUFjLENBQUMsSUFBZixDQUFvQixFQUFwQjtVQUNkLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7bUJBQUc7VUFBSCxDQUFkLENBQUosRUFBdUMsUUFBUSxDQUFFLEdBQUYsQ0FBTyxDQUFDLFVBQXZEO1FBSEYsQ0FuQk47O0FBd0JNLGVBQU87TUF6Qk4sQ0FBQSxJQTdCUDs7QUF3REksYUFBTztJQXpEbUM7RUEzTzVDLEVBM0NGOzs7RUFrVkEsSUFBRyxNQUFBLEtBQVUsT0FBTyxDQUFDLElBQXJCO0lBQStCLE1BQVMsQ0FBQSxDQUFBLENBQUEsR0FBQTtBQUN4QyxVQUFBO01BQUUsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixLQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixJQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QixDQUFFLEtBQUYsQ0FBOUIsRUFGRjs7O0FBS0UsYUFBTztJQU4rQixDQUFBLElBQXhDOztBQWxWQSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2JyaWNhYnJhYydcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICB3aGl0ZVxuICBibHVlXG4gIGdvbGRcbiAgZ3JleVxuICByZWRcbiAgYm9sZFxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xud3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcbkMgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdhbnNpcydcbnsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2luZ2xlLWZpbGUtbW9kdWxlcydcblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuc2V0dGluZ3MgPVxuICAgIG15X3NlZWRfMTogMjg3MzQ2MjEzNFxuICAgIG15X3NlZWRfMjogMjg3MzQ2MjEzNCArIDFcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AdGVzdHMgPSB0ZXN0cyA9XG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRfcmFuZG9tX2Zsb2F0OiAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9yYW5kb21fdG9vbHMoKVxuICAgIG1hdGNoZXJzICAgICAgICA9IFtdXG4gICAgcHJvYmVzICAgICAgICAgID0gW11cbiAgICBtYXhfY291bnQgICAgICAgPSAxZTRcbiAgICBzZWVuICAgICAgICAgICAgPSBuZXcgU2V0KClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBnZXRfcmFuZG9tID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIH1cbiAgICAgIGZvciBpZHggaW4gWyAwIC4uLiBtYXhfY291bnQgXVxuICAgICAgICBtYXRjaGVycy5wdXNoIHQgPSBnZXRfcmFuZG9tLmZsb2F0KClcbiAgICAgICAgc2Vlbi5hZGQgdFxuICAgICAgQGVxICggzqlicmJyX19fMSA9IC0+IG1hdGNoZXJzLmV2ZXJ5ICggdCApIC0+IDAgPD0gdCA8PSAxICksIHRydWVcbiAgICAgIEBlcSAoIM6pYnJicl9fXzIgPSAtPiBzZWVuLnNpemUgKSwgbWF4X2NvdW50XG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGdldF9yYW5kb20gPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgfVxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4uIG1heF9jb3VudCBdXG4gICAgICAgIHByb2Jlcy5wdXNoIHQgPSBnZXRfcmFuZG9tLmZsb2F0KClcbiAgICAgIEBlcSAoIM6pYnJicl9fXzMgPSAtPiBwcm9iZXMgKSwgbWF0Y2hlcnNcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZ2V0X3JhbmRvbSA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8yLCB9XG4gICAgICBjb3VudCA9IDBcbiAgICAgIGZvciBpZHggaW4gWyAwIC4uLiBtYXhfY291bnQgXVxuICAgICAgICBjb3VudCsrIGlmICggdCA9IGdldF9yYW5kb20uZmxvYXQoKSApIGluIG1hdGNoZXJzXG4gICAgICBAZXEgKCDOqWJyYnJfX180ID0gLT4gY291bnQgKSwgMFxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBnZXRfcmFuZG9tICAgID0gbmV3IEdldF9yYW5kb20oKVxuICAgICAgY291bnQgPSAwXG4gICAgICBmb3IgaWR4IGluIFsgMCAuLi4gbWF4X2NvdW50IF1cbiAgICAgICAgY291bnQrKyBpZiAoIHQgPSBnZXRfcmFuZG9tLmZsb2F0KCkgKSBpbiBtYXRjaGVyc1xuICAgICAgQGVxICggzqlicmJyX19fNSA9IC0+IGNvdW50IDwgMTAgKSwgdHJ1ZVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBnZXRfcmFuZG9tICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCB9XG4gICAgICBtaW4gICAgICAgICA9IDEwMFxuICAgICAgbWF4ICAgICAgICAgPSA5OTlcbiAgICAgIGJ1Y2tldHMgICAgID0ge31cbiAgICAgIGZvciBidWNrZXQgaW4gWyBtaW4gLi4uIG1heCBdXG4gICAgICAgIGJ1Y2tldHNbIE1hdGguZmxvb3IgYnVja2V0IC8gMTAgXSA9IDBcbiAgICAgIGZvciBpZHggaW4gWyAwIC4uLiBtYXhfY291bnQgXVxuICAgICAgICB0ID0gZ2V0X3JhbmRvbS5mbG9hdCB7IG1pbiwgbWF4LCB9XG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fXzYnLCB0XG4gICAgICAgIGJ1Y2tldCA9IE1hdGguZmxvb3IgdCAvIDEwXG4gICAgICAgIGJ1Y2tldHNbIGJ1Y2tldCBdKytcbiAgICAgICAgQGVxICggzqlicmJyX19fNyA9IC0+IG1pbiA8PSB0IDw9IG1heCApLCB0cnVlXG4gICAgICBmb3IgXywgY291bnQgb2YgYnVja2V0c1xuICAgICAgICBAZXEgKCDOqWJyYnJfX184ID0gLT4gNTAgPD0gY291bnQgPD0gMTUwICksIHRydWVcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0X3JhbmRvbV9pbnRlZ2VyOiAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9yYW5kb21fdG9vbHMoKVxuICAgIG1heF9jb3VudCAgICAgICA9IDFlNFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIH1cbiAgICAgIG1pbiAgICAgICAgID0gMTAwXG4gICAgICBtYXggICAgICAgICA9IDk5OVxuICAgICAgYnVja2V0cyAgICAgPSB7fVxuICAgICAgZm9yIGJ1Y2tldCBpbiBbIG1pbiAuLi4gbWF4IF1cbiAgICAgICAgYnVja2V0c1sgTWF0aC5mbG9vciBidWNrZXQgLyAxMCBdID0gMFxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4uIG1heF9jb3VudCBdXG4gICAgICAgIHQgPSBnZXRfcmFuZG9tLmludGVnZXIgeyBtaW4sIG1heCwgfVxuICAgICAgICAjIGRlYnVnICfOqWJyYnJfX185JywgdFxuICAgICAgICBidWNrZXQgPSBNYXRoLmZsb29yIHQgLyAxMFxuICAgICAgICBidWNrZXRzWyBidWNrZXQgXSsrXG4gICAgICAgIEBlcSAoIM6pYnJicl9fMTAgPSAtPiBtaW4gPD0gdCA8PSBtYXggKSwgdHJ1ZVxuICAgICAgZm9yIF8sIGNvdW50IG9mIGJ1Y2tldHNcbiAgICAgICAgQGVxICggzqlicmJyX18xMSA9IC0+IDUwIDw9IGNvdW50IDw9IDE1MCApLCB0cnVlXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9yYW5kb21fY2hyOiAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9yYW5kb21fdG9vbHMoKVxuICAgIG1heF9jb3VudCAgICAgICA9IDFlNFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIH1cbiAgICAgIGZvciBpZHggaW4gWyAwIC4uLiBtYXhfY291bnQgXVxuICAgICAgICB0ID0gZ2V0X3JhbmRvbS5jaHIoKVxuICAgICAgICAjIGRlYnVnICfOqWJyYnJfXzEyJywgcnByIHRcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZ2V0X3JhbmRvbSAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgfVxuICAgICAgcmVzdWx0ID0gKCBnZXRfcmFuZG9tLmNociB7IG1pbjogJ0EnLCBtYXg6ICdaJywgfSBmb3IgXyBpbiBbIDEgLi4gNDAgXSApLmpvaW4gJydcbiAgICAgIEBlcSAoIM6pYnJicl9fMTMgPSAtPiByZXN1bHQgKSwgJ1BRS0VTVVVOWUhCRVdHSEdXRUNSU1paTFZPU0ZRU0VUTlNFWERGR0YnXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIG9uX3N0YXRzICAgID0gKCBzdGF0cyApIC0+XG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fMTQnLCBzdGF0c1xuICAgICAgZ2V0X3JhbmRvbSAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMiwgb25fc3RhdHMsIH1cbiAgICAgIHJlc3VsdCAgICAgID0gKCBnZXRfcmFuZG9tLmNociB7IG1pbjogJ0EnLCBtYXg6ICdaJywgfSBmb3IgXyBpbiBbIDEgLi4gNDAgXSApLmpvaW4gJydcbiAgICAgIEBlcSAoIM6pYnJicl9fMTUgPSAtPiByZXN1bHQgaXMgJ1BRS0VTVVVOWUhCRVdHSEdXRUNSU1paTFZPU0ZRU0VUTlNFWERGR0YnICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWJyYnJfXzE2ID0gLT4gL15bQS1aXXs0MH0kLy50ZXN0IHJlc3VsdCApLCB0cnVlXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9yYW5kb21fdGV4dDogLT5cbiAgICB7IEdldF9yYW5kb20sXG4gICAgICBpbnRlcm5hbHMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfcmFuZG9tX3Rvb2xzKClcbiAgICBtYXhfY291bnQgICAgICAgPSAxZTRcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBvbl9zdGF0cyAgICA9ICggc3RhdHMgKSAtPlxuICAgICAgICAjIGluZm8gJ86pYnJicl9fMTcnLCBzdGF0c1xuICAgICAgZ2V0X3JhbmRvbSAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgb25fc3RhdHMsIH1cbiAgICAgIHJlc3VsdCAgICAgID0gZ2V0X3JhbmRvbS50ZXh0IHsgbWluOiAnQScsIG1heDogJ1onLCBsZW5ndGg6IDQwLCB9XG4gICAgICBAZXEgKCDOqWJyYnJfXzE4ID0gLT4gcmVzdWx0ICksICdQUUtFU1VVTllIQkVXR0hHV0VDUlNaWkxWT1NGUVNFVE5TRVhERkdGJ1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBjb3VudF9hdHRlbXB0cyAgPSAoIG4gKSAtPiByZXRyaWVzWyBuIF0gPSAoIHJldHJpZXNbIG4gXSA/PSAwICkgKyAxXG4gICAgICByZXRyaWVzICAgICAgICA9IHt9XG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgLT5cbiAgICAgICAgIyBoZWxwICfOqWJyYnJfXzE5Jywgc3RhdHNcbiAgICAgICAgcmV0dXJuIG51bGwgdW5sZXNzIHN0YXRzLm5hbWUgaXMgJ2NocidcbiAgICAgICAgY291bnRfYXR0ZW1wdHMgc3RhdHMuc3RhdHMucmV0cmllc1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgdmFsaWRfcmUgICAgPSAvLy8gXiBbIFxcdTAwMjAtXFx1MDA3ZSBcXHUwMGEwLVxcdTAwYWMgXFx1MDBhZS1cXHUwMGZmIF17IDE1MCB9ICQgLy8vdlxuICAgICAgZ2V0X3JhbmRvbSAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IG51bGwsIG9uX3N0YXRzLCB9XG4gICAgICBmb3IgXyBpbiBbIDEgLi4gMSBdXG4gICAgICAjIGZvciBfIGluIFsgMSAuLiAxMCBdXG4gICAgICAgIHJlc3VsdCA9IGdldF9yYW5kb20udGV4dCB7IG1pbjogMHgwMCwgbWF4OiAweGZmLCBsZW5ndGg6IDE1MCwgfVxuICAgICAgICBAZXEgKCDOqWJyYnJfXzIwID0gLT4gdmFsaWRfcmUudGVzdCByZXN1bHQgKSwgdHJ1ZVxuICAgICAgIyBkZWJ1ZyAnzqlicmJyX18yMScsIHJldHJpZXNcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0X3JhbmRvbV9zZXRfb2ZfY2hyczogLT5cbiAgICB7IEdldF9yYW5kb20sXG4gICAgICBpbnRlcm5hbHMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfcmFuZG9tX3Rvb2xzKClcbiAgICBtYXhfY291bnQgICAgICAgPSAxZTRcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICByZXRyaWVzICAgICAgICAgPSAwXG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgLT5cbiAgICAgICAgcmV0cmllcyArPSBzdGF0cy5zdGF0cy5yZXRyaWVzXG4gICAgICAgICMgdXJnZSAnzqlicmJyX18yMicsIHN0YXRzIGlmIHN0YXRzLm5hbWUgaXMgJ3NldF9vZl9jaHJzJ1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgdmFsaWRfcmUgICAgPSAvLy8gXiBbIFxcdTAwMjAtXFx1MDA3ZSBcXHUwMGEwLVxcdTAwYWMgXFx1MDBhZS1cXHUwMGZmIF17IDUwIH0gJCAvLy92XG4gICAgICBnZXRfcmFuZG9tICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogbnVsbCwgb25fc3RhdHMsIH1cbiAgICAgIGZvciBfIGluIFsgMSAuLiAyMCBdXG4gICAgICAgIHJlc3VsdCAgICAgID0gZ2V0X3JhbmRvbS5zZXRfb2ZfY2hycyB7IG1pbjogMHgwMCwgbWF4OiAweGZmLCBzaXplOiA1MCwgfVxuICAgICAgICByZXN1bHRfcnByICA9IFsgcmVzdWx0Li4uLCBdLmpvaW4gJydcbiAgICAgICAgQGVxICggzqlicmJyX18yMyA9IC0+IHZhbGlkX3JlLnRlc3QgcmVzdWx0X3JwciApLCB0cnVlXG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fMjQnLCByZXRyaWVzXG4gICAgICAgIHJldHJpZXMgPSAwXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHJldHJpZXMgICAgICAgICA9IDBcbiAgICAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSAtPlxuICAgICAgICByZXRyaWVzICs9IHN0YXRzLnN0YXRzLnJldHJpZXNcbiAgICAgICAgIyB1cmdlICfOqWJyYnJfXzI1Jywgc3RhdHMgaWYgc3RhdHMubmFtZSBpcyAnc2V0X29mX2NocnMnXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB2YWxpZF9yZSAgICA9IC8vLyBeIFsgMC05IF17IDEwIH0gJCAvLy92XG4gICAgICBnZXRfcmFuZG9tICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogbnVsbCwgb25fc3RhdHMsIH1cbiAgICAgIGZvciBfIGluIFsgMSAuLiAyMCBdXG4gICAgICAgIHJlc3VsdCAgICAgID0gZ2V0X3JhbmRvbS5zZXRfb2ZfY2hycyB7IG1pbjogJzAnLCBtYXg6ICc5Jywgc2l6ZTogMTAsIH1cbiAgICAgICAgcmVzdWx0X3JwciAgPSBbIHJlc3VsdC4uLiwgXS5qb2luICcnXG4gICAgICAgIEBlcSAoIM6pYnJicl9fMjYgPSAtPiByZXN1bHQuc2l6ZSAgICAgICAgICAgICAgKSwgMTBcbiAgICAgICAgQGVxICggzqlicmJyX18yNyA9IC0+IHZhbGlkX3JlLnRlc3QgcmVzdWx0X3JwciApLCB0cnVlXG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fMjgnLCByZXRyaWVzLCBycHIgcmVzdWx0XG4gICAgICAgIHJldHJpZXMgPSAwXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9yYW5kb21fc2V0X29mX3RleHRzOiAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9yYW5kb21fdG9vbHMoKVxuICAgIG1heF9jb3VudCAgICAgICA9IDFlNFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHJldHJpZXMgICAgICAgICA9IDBcbiAgICAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSAtPlxuICAgICAgICByZXRyaWVzICs9IHN0YXRzLnN0YXRzLnJldHJpZXNcbiAgICAgICAgIyB1cmdlICfOqWJyYnJfXzI5Jywgc3RhdHMgaWYgc3RhdHMubmFtZSBpcyAnc2V0X29mX2NocnMnXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB2YWxpZF9yZSAgICA9IC8vLyBeIFsgMC05IF17IDMgfSAkIC8vL3ZcbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBudWxsLCBvbl9zdGF0cywgfVxuICAgICAgZm9yIF8gaW4gWyAxIC4uIDEgXVxuICAgICAgICByZXN1bHQgICAgICA9IGdldF9yYW5kb20uc2V0X29mX3RleHRzIHsgbWluOiAnMCcsIG1heDogJzknLCBsZW5ndGg6IDMsIHNpemU6IDEwLCB9XG4gICAgICAgIEBlcSAoIM6pYnJicl9fMzAgPSAtPiByZXN1bHQuc2l6ZSAgICAgICAgICAgICAgKSwgMTBcbiAgICAgICAgZm9yIHJhbmRvbV90ZXh0IGZyb20gcmVzdWx0XG4gICAgICAgICAgQGVxICggzqlicmJyX18zMSA9IC0+IHZhbGlkX3JlLnRlc3QgcmFuZG9tX3RleHQgKSwgdHJ1ZVxuICAgICAgICAjIGRlYnVnICfOqWJyYnJfXzMyJywgcmV0cmllcywgcnByIHJlc3VsdFxuICAgICAgICByZXRyaWVzID0gMFxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRfcmFuZG9tX3RleHRfb2ZfdmFyaWFibGVfbGVuZ3RoOiAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9yYW5kb21fdG9vbHMoKVxuICAgIG1hdGNoZXJzICAgICAgICA9IFsgJ861zqfOmicsICfOv869zq7PhicsICfOks6ZJywgJ86fzqDOn8+CzpsnLCAnzrcnLCAnz4jPiM6pzr8nLCAnzrrOnc61JywgJ86azrzOr866JywgJ8+FzpknLCAnzp/OmycsIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICByZXN1bHRfcmV0cmllcyAgPSBudWxsXG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgPT5cbiAgICAgICAgIyBpbmZvICfOqWJyYnJfXzMzJywgc3RhdHNcbiAgICAgICAgcmVzdWx0X3JldHJpZXMgPSBzdGF0cy5zdGF0cy5yZXRyaWVzXG4gICAgICAgIEBlcSAoIM6pYnJicl9yZXN1bHRfcmV0cmllc19fMzQgPSAtPiByZXN1bHRfcmV0cmllcyA+PSAwICksIHRydWVcbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIG9uX3N0YXRzLCB9XG4gICAgICBmb3IgaWR4IGluIFsgMCAuLiA5IF1cbiAgICAgICAgcmVzdWx0ICAgICAgPSBnZXRfcmFuZG9tLnRleHQgeyBtaW46ICfOkScsIG1heDogJ8+JJywgbWluX2xlbmd0aDogMSwgbWF4X2xlbmd0aDogNSwgfVxuICAgICAgICBkZWJ1ZyAnzqlicmJyX18zNScsIHJwciByZXN1bHRcbiAgICAgICAgQGVxICggzqlicmJyX18zNiA9IC0+IHJlc3VsdCApLCBtYXRjaGVyc1sgaWR4IF1cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0X3JhbmRvbV9zZXRfb2ZfdGV4dHNfb2ZfdmFyaWFibGVfbGVuZ3RoOiAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9yYW5kb21fdG9vbHMoKVxuICAgICMgbWF0Y2hlcnMgICAgICAgID0gWyAnzrXOp86aJywgJ86/zr3Ors+GJywgJ86SzpknLCAnzp/OoM6fz4LOmycsICfOtycsICfPiM+IzqnOvycsICfOus6dzrUnLCAnzprOvM6vzronLCAnz4XOmScsICfOn86bJywgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHJlc3VsdF9yZXRyaWVzICA9IG51bGxcbiAgICAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSA9PlxuICAgICAgICBpbmZvICfOqWJyYnJfXzM3Jywgc3RhdHMgaWYgc3RhdHMubmFtZSBpcyAnc2V0X29mX3RleHRzJ1xuICAgICAgICByZXN1bHRfcmV0cmllcyA9IHN0YXRzLnN0YXRzLnJldHJpZXMgaWYgc3RhdHMubmFtZSBpcyAnc2V0X29mX3RleHRzJ1xuICAgICAgICBAZXEgKCDOqWJyYnJfcmVzdWx0X3JldHJpZXNfXzM4ID0gLT4gcmVzdWx0X3JldHJpZXMgPj0gMCApLCB0cnVlXG4gICAgICBnZXRfcmFuZG9tICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCBvbl9zdGF0cywgfVxuICAgICAgbWF0Y2hlcnMgICAgPSBbXG4gICAgICAgIG5ldyBTZXQgWyAn4r6J4r2V4ryi4r6X4r6u4r6pJywgJ+K/i+K8veK8hOK8oOK+uuK8tCcsICfivLTivrzivKYnLCAn4r6P4r6aJywgJ+K/k+K9m+K+seK9s+K+neK8reK+iOK+nOK8o+K+pScsIF1cbiAgICAgICAgbmV3IFNldCBbICfivp3ivKXiv4fivJ7ivK3ivLUnLCAn4r2Q4ry44r26JywgJ+K8lOK/k+K8jOK+o+K+heK+suK9geK8jScsICfivbLivKnivJHiv4wnLCAn4ryp4r624ryV4r2T4r2QJywgXVxuICAgICAgICBuZXcgU2V0IFsgJ+K8ouK/gOK+s+K/leK8lOK/gOK8l+K+ieK9lCcsICfivofivprivKDivJjivLzivpAnLCAn4ryP4r+J4r6c4rym4r6c4ryG4r2eJywgJ+K9jeK9oOK+v+K8lOK8l+K/jicsICfivofivaTiv4PivoXivYvivo4nLCBdXG4gICAgICAgIG5ldyBTZXQgWyAn4ryY4ryC4r6b4r6W4ryo4r6b4r6cJywgJ+K9ieK8m+K/ieK8mOK/kuK9guK8q+K9l+K+nCcsICfivJTiv4viv4QnLCAn4ryf4ryF4ryO4r6C4ryu4r214r6+4r684r2UJywgJ+K+qOK9qeK+kOK8iuK8guK9hicsIF1cbiAgICAgICAgbmV3IFNldCBbICfivb/ivanivYonLCAn4ry94r6W4r6c4r624r6p4r6uJywgJ+K+tuK8ruK+gycsICfivb/ivbjivr3ivKHivbvivorivLYnLCAn4r2G4ryg4r204ry/4ry84ry/4r2r4r6IJywgXVxuICAgICAgICBuZXcgU2V0IFsgJ+K9oycsICfivrHivbvivYDivZvivr3ivrLivKbivrbivLknLCAn4ryV4r2X4ryM4ryW4r294r2m4r2OJywgJ+K9muK+jOK8vuK+jOK8p+K8m+K8uScsICfivoLivKPiv4EnLCBdXG4gICAgICAgIG5ldyBTZXQgWyAn4r6Y4r2y4r6f4r2k4ryYJywgJ+K+geK+p+K9nOK8leK+sOK+kOK8qScsICfivLHivpHiv4Piv5LivL3ivJknLCAn4r+P4r6w4r6T4ryQ4ryIJywgJ+K9mOK9l+K9veK8mOK/gCcsIF1cbiAgICAgICAgbmV3IFNldCBbICfivbPivLHivKTivr7ivbfivqDivL/ivpUnLCAn4ryb4ryC4r+D4ry24ryt4ryrJywgJ+K8q+K+gOK+hOK/i+K8j+K8vicsICfivYHivL3ivLnivq/iv4Piva7ivrPivZHivanivZMnLCAn4ryv4r2O4r6x4r2r4r2p4r6zJywgXVxuICAgICAgICBuZXcgU2V0IFsgJ+K8t+K+leK8iOK8tuK9qeK9v+K+oeK8g+K+nCcsICfivrHiv4fivp7ivrTivZ0nLCAn4r61JywgJ+K9u+K/lOK9gOK/juK+keK9jOK8pOK9mCcsICfiv4rivK3ivLPiv5LivJDivaXivZnivrLivZ8nLCBdXG4gICAgICAgIG5ldyBTZXQgWyAn4r2j4r2qJywgJ+K9meK8n+K9sOK+lycsICfivbAnLCAn4ry04r+R4r6B4r26JywgJ+K+kOK9jOK+oOK+reK9mCcsIF1cbiAgICAgICAgXVxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4gOSBdXG4gICAgICAgIHJlc3VsdCA9IGdldF9yYW5kb20uc2V0X29mX3RleHRzIHsgbWluOiAn4ryAJywgbWF4OiAn4r+VJywgc2l6ZTogNSwgbWluX2xlbmd0aDogMSwgbWF4X2xlbmd0aDogMTAsIH1cbiAgICAgICAgQGVxICggzqlicmJyX18zOSA9IC0+IHJlc3VsdCApLCBtYXRjaGVyc1sgaWR4IF1cbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyX180MCcsIHJlc3VsdFxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJlc3VsdF9yZXRyaWVzICA9IG51bGxcbiAgICAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSA9PlxuICAgICAgICByZXN1bHRfcmV0cmllcyA9IHN0YXRzLnN0YXRzLnJldHJpZXMgaWYgc3RhdHMubmFtZSBpcyAnc2V0X29mX3RleHRzJ1xuICAgICAgICBAZXEgKCDOqWJyYnJfcmVzdWx0X3JldHJpZXNfXzQxID0gLT4gcmVzdWx0X3JldHJpZXMgPj0gMCApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIG9uX3N0YXRzLCB9XG4gICAgICBtYXRjaGVycyAgICA9IFtcbiAgICAgICAgeyByZXN1bHRfcmV0cmllczogIDQsIHJlc3VsdF9ycHI6ICc1NjQxNzkzMDgyJywgfVxuICAgICAgICB7IHJlc3VsdF9yZXRyaWVzOiA2MywgcmVzdWx0X3JwcjogJzI4MTY3OTQ1MzAnLCB9XG4gICAgICAgIHsgcmVzdWx0X3JldHJpZXM6IDExLCByZXN1bHRfcnByOiAnNDUzODE5NjA3MicsIH1cbiAgICAgICAgeyByZXN1bHRfcmV0cmllczogMjAsIHJlc3VsdF9ycHI6ICc3ODMxOTI0MDU2JywgfVxuICAgICAgICB7IHJlc3VsdF9yZXRyaWVzOiA3NiwgcmVzdWx0X3JwcjogJzAzMjU0Njc4MTknLCB9XG4gICAgICAgIHsgcmVzdWx0X3JldHJpZXM6ICA3LCByZXN1bHRfcnByOiAnMzE0OTc2MDU4MicsIH1cbiAgICAgICAgeyByZXN1bHRfcmV0cmllczogMjAsIHJlc3VsdF9ycHI6ICcyODU3MzYxMDk0JywgfVxuICAgICAgICB7IHJlc3VsdF9yZXRyaWVzOiAzMSwgcmVzdWx0X3JwcjogJzQ1MjM3ODYwOTEnLCB9XG4gICAgICAgIHsgcmVzdWx0X3JldHJpZXM6IDEzLCByZXN1bHRfcnByOiAnNDgxMzU2MDI5NycsIH1cbiAgICAgICAgeyByZXN1bHRfcmV0cmllczogMTksIHJlc3VsdF9ycHI6ICc3NDkxMDY1ODIzJywgfVxuICAgICAgICBdXG4gICAgICBmb3IgaWR4IGluIFsgMCAuLiA5IF1cbiAgICAgICAgcmVzdWx0ICAgICAgPSBnZXRfcmFuZG9tLnNldF9vZl90ZXh0cyB7IG1pbjogJzAnLCBtYXg6ICc5Jywgc2l6ZTogMTAsIGxlbmd0aDogMSwgfVxuICAgICAgICByZXN1bHRfcnByICA9IFsgcmVzdWx0Li4uLCBdLmpvaW4gJydcbiAgICAgICAgQGVxICggzqlicmJyX180MiA9IC0+IHJlc3VsdF9ycHIgICAgICksIG1hdGNoZXJzWyBpZHggXS5yZXN1bHRfcnByXG4gICAgICAgICMgQGVxICggzqlicmJyX180MyA9IC0+IHJlc3VsdF9yZXRyaWVzICksIG1hdGNoZXJzWyBpZHggXS5yZXN1bHRfcmV0cmllc1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdGVzdHMsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGdldF9yYW5kb21fdGV4dDogdGVzdHMuZ2V0X3JhbmRvbV90ZXh0LCB9XG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgcmV0dXJuIG51bGxcbiJdfQ==
//# sourceURL=../src/test-basics.coffee