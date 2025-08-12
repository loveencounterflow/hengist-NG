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
        for (_ = i = 1; i <= 20; _ = ++i) {
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
        var get_random, i, idx, on_stats, result, Ωbrbr__36;
        on_stats = function(stats) {};
        // info 'Ωbrbr__33', stats
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
        var get_random, on_stats, result;
        on_stats = function(stats) {};
        // info 'Ωbrbr__33', stats
        get_random = new Get_random({
          seed: settings.my_seed_1,
          on_stats
        });
        result = get_random.set_of_texts({
          min: '⼀',
          max: '⿕',
          min_length: 1,
          max_length: 10
        });
        debug('Ωbrbr__35', result);
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
      //.........................................................................................................
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLFFBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUE7SUFBQSxvQkFBQTs7O0VBR0EsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixXQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsS0FIRixFQUlFLElBSkYsRUFLRSxJQUxGLEVBTUUsSUFORixFQU9FLEdBUEYsRUFRRSxJQVJGLEVBU0UsT0FURixFQVVFLEdBVkYsQ0FBQSxHQVU0QixHQUFHLENBQUMsR0FWaEM7O0VBV0EsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUI7O0VBQ0EsS0FBQSxHQUE0QixRQUFBLENBQUUsQ0FBRixDQUFBO1dBQVMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFmLENBQXFCLENBQXJCO0VB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RUFBWSxDQUFsQztVQUFxQyxVQUFBLEVBQVk7UUFBakQsQ0FBeEI7UUFDZCxLQUFBLENBQU0sV0FBTixFQUFtQixNQUFuQjtBQUNBLGVBQU87TUFOTixDQUFBLElBSlA7O0FBWUksYUFBTztJQWJtQztFQXhPNUMsRUEzQ0Y7OztFQW9TQSxJQUFHLE1BQUEsS0FBVSxPQUFPLENBQUMsSUFBckI7SUFBK0IsTUFBUyxDQUFBLENBQUEsQ0FBQSxHQUFBO0FBQ3hDLFVBQUE7TUFBRSxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLEtBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLElBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxDQUFFLElBQUksSUFBSixDQUFTLFdBQVQsQ0FBRixDQUF3QixDQUFDLElBQXpCLENBQThCLENBQUUsS0FBRixDQUE5QixFQUZGOztBQUlFLGFBQU87SUFMK0IsQ0FBQSxJQUF4Qzs7QUFwU0EiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuJ3VzZSBzdHJpY3QnXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdicmljYWJyYWMnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbndyaXRlICAgICAgICAgICAgICAgICAgICAgPSAoIHAgKSAtPiBwcm9jZXNzLnN0ZG91dC53cml0ZSBwXG5DICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnYW5zaXMnXG57IG5mYSB9ICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNpbmdsZS1maWxlLW1vZHVsZXMnXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnNldHRpbmdzID1cbiAgICBteV9zZWVkXzE6IDI4NzM0NjIxMzRcbiAgICBteV9zZWVkXzI6IDI4NzM0NjIxMzQgKyAxXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRlc3RzID0gdGVzdHMgPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0X3JhbmRvbV9mbG9hdDogLT5cbiAgICB7IEdldF9yYW5kb20sXG4gICAgICBpbnRlcm5hbHMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfcmFuZG9tX3Rvb2xzKClcbiAgICBtYXRjaGVycyAgICAgICAgPSBbXVxuICAgIHByb2JlcyAgICAgICAgICA9IFtdXG4gICAgbWF4X2NvdW50ICAgICAgID0gMWU0XG4gICAgc2VlbiAgICAgICAgICAgID0gbmV3IFNldCgpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZ2V0X3JhbmRvbSA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCB9XG4gICAgICBmb3IgaWR4IGluIFsgMCAuLi4gbWF4X2NvdW50IF1cbiAgICAgICAgbWF0Y2hlcnMucHVzaCB0ID0gZ2V0X3JhbmRvbS5mbG9hdCgpXG4gICAgICAgIHNlZW4uYWRkIHRcbiAgICAgIEBlcSAoIM6pYnJicl9fXzEgPSAtPiBtYXRjaGVycy5ldmVyeSAoIHQgKSAtPiAwIDw9IHQgPD0gMSApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJyYnJfX18yID0gLT4gc2Vlbi5zaXplICksIG1heF9jb3VudFxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBnZXRfcmFuZG9tID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIH1cbiAgICAgIGZvciBpZHggaW4gWyAwIC4uLiBtYXhfY291bnQgXVxuICAgICAgICBwcm9iZXMucHVzaCB0ID0gZ2V0X3JhbmRvbS5mbG9hdCgpXG4gICAgICBAZXEgKCDOqWJyYnJfX18zID0gLT4gcHJvYmVzICksIG1hdGNoZXJzXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGdldF9yYW5kb20gPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMiwgfVxuICAgICAgY291bnQgPSAwXG4gICAgICBmb3IgaWR4IGluIFsgMCAuLi4gbWF4X2NvdW50IF1cbiAgICAgICAgY291bnQrKyBpZiAoIHQgPSBnZXRfcmFuZG9tLmZsb2F0KCkgKSBpbiBtYXRjaGVyc1xuICAgICAgQGVxICggzqlicmJyX19fNCA9IC0+IGNvdW50ICksIDBcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZ2V0X3JhbmRvbSAgICA9IG5ldyBHZXRfcmFuZG9tKClcbiAgICAgIGNvdW50ID0gMFxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4uIG1heF9jb3VudCBdXG4gICAgICAgIGNvdW50KysgaWYgKCB0ID0gZ2V0X3JhbmRvbS5mbG9hdCgpICkgaW4gbWF0Y2hlcnNcbiAgICAgIEBlcSAoIM6pYnJicl9fXzUgPSAtPiBjb3VudCA8IDEwICksIHRydWVcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZ2V0X3JhbmRvbSAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgfVxuICAgICAgbWluICAgICAgICAgPSAxMDBcbiAgICAgIG1heCAgICAgICAgID0gOTk5XG4gICAgICBidWNrZXRzICAgICA9IHt9XG4gICAgICBmb3IgYnVja2V0IGluIFsgbWluIC4uLiBtYXggXVxuICAgICAgICBidWNrZXRzWyBNYXRoLmZsb29yIGJ1Y2tldCAvIDEwIF0gPSAwXG4gICAgICBmb3IgaWR4IGluIFsgMCAuLi4gbWF4X2NvdW50IF1cbiAgICAgICAgdCA9IGdldF9yYW5kb20uZmxvYXQgeyBtaW4sIG1heCwgfVxuICAgICAgICAjIGRlYnVnICfOqWJyYnJfX182JywgdFxuICAgICAgICBidWNrZXQgPSBNYXRoLmZsb29yIHQgLyAxMFxuICAgICAgICBidWNrZXRzWyBidWNrZXQgXSsrXG4gICAgICAgIEBlcSAoIM6pYnJicl9fXzcgPSAtPiBtaW4gPD0gdCA8PSBtYXggKSwgdHJ1ZVxuICAgICAgZm9yIF8sIGNvdW50IG9mIGJ1Y2tldHNcbiAgICAgICAgQGVxICggzqlicmJyX19fOCA9IC0+IDUwIDw9IGNvdW50IDw9IDE1MCApLCB0cnVlXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9yYW5kb21faW50ZWdlcjogLT5cbiAgICB7IEdldF9yYW5kb20sXG4gICAgICBpbnRlcm5hbHMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfcmFuZG9tX3Rvb2xzKClcbiAgICBtYXhfY291bnQgICAgICAgPSAxZTRcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBnZXRfcmFuZG9tICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCB9XG4gICAgICBtaW4gICAgICAgICA9IDEwMFxuICAgICAgbWF4ICAgICAgICAgPSA5OTlcbiAgICAgIGJ1Y2tldHMgICAgID0ge31cbiAgICAgIGZvciBidWNrZXQgaW4gWyBtaW4gLi4uIG1heCBdXG4gICAgICAgIGJ1Y2tldHNbIE1hdGguZmxvb3IgYnVja2V0IC8gMTAgXSA9IDBcbiAgICAgIGZvciBpZHggaW4gWyAwIC4uLiBtYXhfY291bnQgXVxuICAgICAgICB0ID0gZ2V0X3JhbmRvbS5pbnRlZ2VyIHsgbWluLCBtYXgsIH1cbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyX19fOScsIHRcbiAgICAgICAgYnVja2V0ID0gTWF0aC5mbG9vciB0IC8gMTBcbiAgICAgICAgYnVja2V0c1sgYnVja2V0IF0rK1xuICAgICAgICBAZXEgKCDOqWJyYnJfXzEwID0gLT4gbWluIDw9IHQgPD0gbWF4ICksIHRydWVcbiAgICAgIGZvciBfLCBjb3VudCBvZiBidWNrZXRzXG4gICAgICAgIEBlcSAoIM6pYnJicl9fMTEgPSAtPiA1MCA8PSBjb3VudCA8PSAxNTAgKSwgdHJ1ZVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRfcmFuZG9tX2NocjogLT5cbiAgICB7IEdldF9yYW5kb20sXG4gICAgICBpbnRlcm5hbHMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfcmFuZG9tX3Rvb2xzKClcbiAgICBtYXhfY291bnQgICAgICAgPSAxZTRcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBnZXRfcmFuZG9tICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCB9XG4gICAgICBmb3IgaWR4IGluIFsgMCAuLi4gbWF4X2NvdW50IF1cbiAgICAgICAgdCA9IGdldF9yYW5kb20uY2hyKClcbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyX18xMicsIHJwciB0XG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIH1cbiAgICAgIHJlc3VsdCA9ICggZ2V0X3JhbmRvbS5jaHIgeyBtaW46ICdBJywgbWF4OiAnWicsIH0gZm9yIF8gaW4gWyAxIC4uIDQwIF0gKS5qb2luICcnXG4gICAgICBAZXEgKCDOqWJyYnJfXzEzID0gLT4gcmVzdWx0ICksICdQUUtFU1VVTllIQkVXR0hHV0VDUlNaWkxWT1NGUVNFVE5TRVhERkdGJ1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBvbl9zdGF0cyAgICA9ICggc3RhdHMgKSAtPlxuICAgICAgICAjIGRlYnVnICfOqWJyYnJfXzE0Jywgc3RhdHNcbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzIsIG9uX3N0YXRzLCB9XG4gICAgICByZXN1bHQgICAgICA9ICggZ2V0X3JhbmRvbS5jaHIgeyBtaW46ICdBJywgbWF4OiAnWicsIH0gZm9yIF8gaW4gWyAxIC4uIDQwIF0gKS5qb2luICcnXG4gICAgICBAZXEgKCDOqWJyYnJfXzE1ID0gLT4gcmVzdWx0IGlzICdQUUtFU1VVTllIQkVXR0hHV0VDUlNaWkxWT1NGUVNFVE5TRVhERkdGJyApLCBmYWxzZVxuICAgICAgQGVxICggzqlicmJyX18xNiA9IC0+IC9eW0EtWl17NDB9JC8udGVzdCByZXN1bHQgKSwgdHJ1ZVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRfcmFuZG9tX3RleHQ6IC0+XG4gICAgeyBHZXRfcmFuZG9tLFxuICAgICAgaW50ZXJuYWxzLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3JhbmRvbV90b29scygpXG4gICAgbWF4X2NvdW50ICAgICAgID0gMWU0XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgb25fc3RhdHMgICAgPSAoIHN0YXRzICkgLT5cbiAgICAgICAgIyBpbmZvICfOqWJyYnJfXzE3Jywgc3RhdHNcbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIG9uX3N0YXRzLCB9XG4gICAgICByZXN1bHQgICAgICA9IGdldF9yYW5kb20udGV4dCB7IG1pbjogJ0EnLCBtYXg6ICdaJywgbGVuZ3RoOiA0MCwgfVxuICAgICAgQGVxICggzqlicmJyX18xOCA9IC0+IHJlc3VsdCApLCAnUFFLRVNVVU5ZSEJFV0dIR1dFQ1JTWlpMVk9TRlFTRVROU0VYREZHRidcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgY291bnRfYXR0ZW1wdHMgID0gKCBuICkgLT4gcmV0cmllc1sgbiBdID0gKCByZXRyaWVzWyBuIF0gPz0gMCApICsgMVxuICAgICAgcmV0cmllcyAgICAgICAgPSB7fVxuICAgICAgb25fc3RhdHMgICAgICAgID0gKCBzdGF0cyApIC0+XG4gICAgICAgICMgaGVscCAnzqlicmJyX18xOScsIHN0YXRzXG4gICAgICAgIHJldHVybiBudWxsIHVubGVzcyBzdGF0cy5uYW1lIGlzICdjaHInXG4gICAgICAgIGNvdW50X2F0dGVtcHRzIHN0YXRzLnN0YXRzLnJldHJpZXNcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIHZhbGlkX3JlICAgID0gLy8vIF4gWyBcXHUwMDIwLVxcdTAwN2UgXFx1MDBhMC1cXHUwMGFjIFxcdTAwYWUtXFx1MDBmZiBdeyAxNTAgfSAkIC8vL3ZcbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBudWxsLCBvbl9zdGF0cywgfVxuICAgICAgZm9yIF8gaW4gWyAxIC4uIDEgXVxuICAgICAgIyBmb3IgXyBpbiBbIDEgLi4gMTAgXVxuICAgICAgICByZXN1bHQgPSBnZXRfcmFuZG9tLnRleHQgeyBtaW46IDB4MDAsIG1heDogMHhmZiwgbGVuZ3RoOiAxNTAsIH1cbiAgICAgICAgQGVxICggzqlicmJyX18yMCA9IC0+IHZhbGlkX3JlLnRlc3QgcmVzdWx0ICksIHRydWVcbiAgICAgICMgZGVidWcgJ86pYnJicl9fMjEnLCByZXRyaWVzXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9yYW5kb21fc2V0X29mX2NocnM6IC0+XG4gICAgeyBHZXRfcmFuZG9tLFxuICAgICAgaW50ZXJuYWxzLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3JhbmRvbV90b29scygpXG4gICAgbWF4X2NvdW50ICAgICAgID0gMWU0XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgcmV0cmllcyAgICAgICAgID0gMFxuICAgICAgb25fc3RhdHMgICAgICAgID0gKCBzdGF0cyApIC0+XG4gICAgICAgIHJldHJpZXMgKz0gc3RhdHMuc3RhdHMucmV0cmllc1xuICAgICAgICAjIHVyZ2UgJ86pYnJicl9fMjInLCBzdGF0cyBpZiBzdGF0cy5uYW1lIGlzICdzZXRfb2ZfY2hycydcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIHZhbGlkX3JlICAgID0gLy8vIF4gWyBcXHUwMDIwLVxcdTAwN2UgXFx1MDBhMC1cXHUwMGFjIFxcdTAwYWUtXFx1MDBmZiBdeyA1MCB9ICQgLy8vdlxuICAgICAgZ2V0X3JhbmRvbSAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IG51bGwsIG9uX3N0YXRzLCB9XG4gICAgICBmb3IgXyBpbiBbIDEgLi4gMjAgXVxuICAgICAgICByZXN1bHQgICAgICA9IGdldF9yYW5kb20uc2V0X29mX2NocnMgeyBtaW46IDB4MDAsIG1heDogMHhmZiwgc2l6ZTogNTAsIH1cbiAgICAgICAgcmVzdWx0X3JwciAgPSBbIHJlc3VsdC4uLiwgXS5qb2luICcnXG4gICAgICAgIEBlcSAoIM6pYnJicl9fMjMgPSAtPiB2YWxpZF9yZS50ZXN0IHJlc3VsdF9ycHIgKSwgdHJ1ZVxuICAgICAgICAjIGRlYnVnICfOqWJyYnJfXzI0JywgcmV0cmllc1xuICAgICAgICByZXRyaWVzID0gMFxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICByZXRyaWVzICAgICAgICAgPSAwXG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgLT5cbiAgICAgICAgcmV0cmllcyArPSBzdGF0cy5zdGF0cy5yZXRyaWVzXG4gICAgICAgICMgdXJnZSAnzqlicmJyX18yNScsIHN0YXRzIGlmIHN0YXRzLm5hbWUgaXMgJ3NldF9vZl9jaHJzJ1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgdmFsaWRfcmUgICAgPSAvLy8gXiBbIDAtOSBdeyAxMCB9ICQgLy8vdlxuICAgICAgZ2V0X3JhbmRvbSAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IG51bGwsIG9uX3N0YXRzLCB9XG4gICAgICBmb3IgXyBpbiBbIDEgLi4gMjAgXVxuICAgICAgICByZXN1bHQgICAgICA9IGdldF9yYW5kb20uc2V0X29mX2NocnMgeyBtaW46ICcwJywgbWF4OiAnOScsIHNpemU6IDEwLCB9XG4gICAgICAgIHJlc3VsdF9ycHIgID0gWyByZXN1bHQuLi4sIF0uam9pbiAnJ1xuICAgICAgICBAZXEgKCDOqWJyYnJfXzI2ID0gLT4gcmVzdWx0LnNpemUgICAgICAgICAgICAgICksIDEwXG4gICAgICAgIEBlcSAoIM6pYnJicl9fMjcgPSAtPiB2YWxpZF9yZS50ZXN0IHJlc3VsdF9ycHIgKSwgdHJ1ZVxuICAgICAgICAjIGRlYnVnICfOqWJyYnJfXzI4JywgcmV0cmllcywgcnByIHJlc3VsdFxuICAgICAgICByZXRyaWVzID0gMFxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRfcmFuZG9tX3NldF9vZl90ZXh0czogLT5cbiAgICB7IEdldF9yYW5kb20sXG4gICAgICBpbnRlcm5hbHMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfcmFuZG9tX3Rvb2xzKClcbiAgICBtYXhfY291bnQgICAgICAgPSAxZTRcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICByZXRyaWVzICAgICAgICAgPSAwXG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgLT5cbiAgICAgICAgcmV0cmllcyArPSBzdGF0cy5zdGF0cy5yZXRyaWVzXG4gICAgICAgICMgdXJnZSAnzqlicmJyX18yOScsIHN0YXRzIGlmIHN0YXRzLm5hbWUgaXMgJ3NldF9vZl9jaHJzJ1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgdmFsaWRfcmUgICAgPSAvLy8gXiBbIDAtOSBdeyAzIH0gJCAvLy92XG4gICAgICBnZXRfcmFuZG9tICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogbnVsbCwgb25fc3RhdHMsIH1cbiAgICAgIGZvciBfIGluIFsgMSAuLiAyMCBdXG4gICAgICAgIHJlc3VsdCAgICAgID0gZ2V0X3JhbmRvbS5zZXRfb2ZfdGV4dHMgeyBtaW46ICcwJywgbWF4OiAnOScsIGxlbmd0aDogMywgc2l6ZTogMTAsIH1cbiAgICAgICAgQGVxICggzqlicmJyX18zMCA9IC0+IHJlc3VsdC5zaXplICAgICAgICAgICAgICApLCAxMFxuICAgICAgICBmb3IgcmFuZG9tX3RleHQgZnJvbSByZXN1bHRcbiAgICAgICAgICBAZXEgKCDOqWJyYnJfXzMxID0gLT4gdmFsaWRfcmUudGVzdCByYW5kb21fdGV4dCApLCB0cnVlXG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fMzInLCByZXRyaWVzLCBycHIgcmVzdWx0XG4gICAgICAgIHJldHJpZXMgPSAwXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9yYW5kb21fdGV4dF9vZl92YXJpYWJsZV9sZW5ndGg6IC0+XG4gICAgeyBHZXRfcmFuZG9tLFxuICAgICAgaW50ZXJuYWxzLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3JhbmRvbV90b29scygpXG4gICAgbWF0Y2hlcnMgICAgICAgID0gWyAnzrXOp86aJywgJ86/zr3Ors+GJywgJ86SzpknLCAnzp/OoM6fz4LOmycsICfOtycsICfPiM+IzqnOvycsICfOus6dzrUnLCAnzprOvM6vzronLCAnz4XOmScsICfOn86bJywgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIG9uX3N0YXRzICAgID0gKCBzdGF0cyApIC0+XG4gICAgICAgICMgaW5mbyAnzqlicmJyX18zMycsIHN0YXRzXG4gICAgICBnZXRfcmFuZG9tICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCBvbl9zdGF0cywgfVxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4gOSBdXG4gICAgICAgIHJlc3VsdCAgICAgID0gZ2V0X3JhbmRvbS50ZXh0IHsgbWluOiAnzpEnLCBtYXg6ICfPiScsIG1pbl9sZW5ndGg6IDEsIG1heF9sZW5ndGg6IDUsIH1cbiAgICAgICAgZGVidWcgJ86pYnJicl9fMzUnLCBycHIgcmVzdWx0XG4gICAgICAgIEBlcSAoIM6pYnJicl9fMzYgPSAtPiByZXN1bHQgKSwgbWF0Y2hlcnNbIGlkeCBdXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9yYW5kb21fc2V0X29mX3RleHRzX29mX3ZhcmlhYmxlX2xlbmd0aDogLT5cbiAgICB7IEdldF9yYW5kb20sXG4gICAgICBpbnRlcm5hbHMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfcmFuZG9tX3Rvb2xzKClcbiAgICAjIG1hdGNoZXJzICAgICAgICA9IFsgJ861zqfOmicsICfOv869zq7PhicsICfOks6ZJywgJ86fzqDOn8+CzpsnLCAnzrcnLCAnz4jPiM6pzr8nLCAnzrrOnc61JywgJ86azrzOr866JywgJ8+FzpknLCAnzp/OmycsIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBvbl9zdGF0cyAgICA9ICggc3RhdHMgKSAtPlxuICAgICAgICAjIGluZm8gJ86pYnJicl9fMzMnLCBzdGF0c1xuICAgICAgZ2V0X3JhbmRvbSAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgb25fc3RhdHMsIH1cbiAgICAgIHJlc3VsdCAgICAgID0gZ2V0X3JhbmRvbS5zZXRfb2ZfdGV4dHMgeyBtaW46ICfivIAnLCBtYXg6ICfiv5UnLCBtaW5fbGVuZ3RoOiAxLCBtYXhfbGVuZ3RoOiAxMCwgfVxuICAgICAgZGVidWcgJ86pYnJicl9fMzUnLCByZXN1bHRcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdGVzdHMsIH1cbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICByZXR1cm4gbnVsbFxuIl19
//# sourceURL=../src/test-basics.coffee