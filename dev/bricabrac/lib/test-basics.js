(async function() {
  'use strict';
  var C, GTNG, GUY, SFMODULES, Test, alert, blue, bold, debug, echo, f, gold, grey, help, info, inspect, log, nfa, plain, praise, red, reverse, rpr, settings, tests, urge, warn, whisper, white, write,
    indexOf = [].indexOf,
    modulo = function(a, b) { return (+a % (b = +b) + b) % b; };

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
      ({Get_random, internals} = SFMODULES.unstable.require_get_random());
      matchers = [];
      probes = [];
      max_count = 1e4;
      seen = new Set();
      (() => {        //.......................................................................................................
        var get_random, i, idx, j, len, ref, t, value, Ωbrbr___2, Ωbrbr___3;
        get_random = new Get_random({
          seed: settings.my_seed_1
        });
        for (idx = i = 0, ref = max_count; (0 <= ref ? i < ref : i > ref); idx = 0 <= ref ? ++i : --i) {
          matchers.push(t = get_random.float());
          seen.add(t);
        }
        for (idx = j = 0, len = matchers.length; j < len; idx = ++j) {
          value = matchers[idx];
          if (!((0 < value && value <= 1))) {
            debug('Ωbrbr___1', {idx, value});
          }
        }
        this.eq((Ωbrbr___2 = function() {
          return matchers.every(function(t) {
            return (0 < t && t <= 1);
          });
        }), true);
        this.eq((Ωbrbr___3 = function() {
          return seen.size;
        }), max_count);
        return null;
      })();
      (() => {        //.......................................................................................................
        var get_random, i, idx, ref, t, Ωbrbr___4;
        get_random = new Get_random({
          seed: settings.my_seed_1
        });
        for (idx = i = 0, ref = max_count; (0 <= ref ? i < ref : i > ref); idx = 0 <= ref ? ++i : --i) {
          probes.push(t = get_random.float());
        }
        this.eq((Ωbrbr___4 = function() {
          return probes;
        }), matchers);
        return null;
      })();
      (() => {        //.......................................................................................................
        var count, get_random, i, idx, ref, ref1, t, Ωbrbr___5;
        get_random = new Get_random({
          seed: settings.my_seed_2
        });
        count = 0;
        for (idx = i = 0, ref = max_count; (0 <= ref ? i < ref : i > ref); idx = 0 <= ref ? ++i : --i) {
          if (ref1 = (t = get_random.float()), indexOf.call(matchers, ref1) >= 0) {
            count++;
          }
        }
        this.eq((Ωbrbr___5 = function() {
          return count;
        }), 0);
        return null;
      })();
      (() => {        //.......................................................................................................
        var count, get_random, i, idx, ref, ref1, t, Ωbrbr___6;
        get_random = new Get_random();
        count = 0;
        for (idx = i = 0, ref = max_count; (0 <= ref ? i < ref : i > ref); idx = 0 <= ref ? ++i : --i) {
          if (ref1 = (t = get_random.float()), indexOf.call(matchers, ref1) >= 0) {
            count++;
          }
        }
        this.eq((Ωbrbr___6 = function() {
          return count < 10;
        }), true);
        return null;
      })();
      (() => {        //.......................................................................................................
        var _, bucket, buckets, count, get_random, i, idx, j, max, min, ref, ref1, ref2, t, Ωbrbr___8, Ωbrbr___9;
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
          // debug 'Ωbrbr___7', t
          bucket = Math.floor(t / 10);
          buckets[bucket]++;
          this.eq((Ωbrbr___8 = function() {
            return (min <= t && t <= max);
          }), true);
        }
        for (_ in buckets) {
          count = buckets[_];
          this.eq((Ωbrbr___9 = function() {
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
      ({Get_random, internals} = SFMODULES.unstable.require_get_random());
      max_count = 1e4;
      (() => {        //.......................................................................................................
        var _, bucket, buckets, count, get_random, i, idx, j, max, min, ref, ref1, ref2, t, Ωbrbr__11, Ωbrbr__12;
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
          // debug 'Ωbrbr__10', t
          bucket = Math.floor(t / 10);
          buckets[bucket]++;
          this.eq((Ωbrbr__11 = function() {
            return (min <= t && t <= max);
          }), true);
        }
        for (_ in buckets) {
          count = buckets[_];
          this.eq((Ωbrbr__12 = function() {
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
      ({Get_random, internals} = SFMODULES.unstable.require_get_random());
      max_count = 1e4;
      (() => {        //.......................................................................................................
        var get_random, i, idx, ref, t;
        get_random = new Get_random({
          seed: settings.my_seed_1
        });
        for (idx = i = 0, ref = max_count; (0 <= ref ? i < ref : i > ref); idx = 0 <= ref ? ++i : --i) {
          t = get_random.chr();
        }
        // debug 'Ωbrbr__13', rpr t
        return null;
      })();
      (() => {        //.......................................................................................................
        var _, get_random, result, Ωbrbr__14;
        get_random = new Get_random({
          seed: settings.my_seed_1
        });
        result = ((function() {
          var i, results1;
          results1 = [];
          for (_ = i = 1; i <= 40; _ = ++i) {
            results1.push(get_random.chr({
              min: 'A',
              max: 'Z'
            }));
          }
          return results1;
        })()).join('');
        this.eq((Ωbrbr__14 = function() {
          return result;
        }), 'PQKESUUNYHBEWGHGWECRSZZLVOSFQSETNSEXDFGF');
        return null;
      })();
      (() => {        //.......................................................................................................
        var _, get_random, on_stats, result, Ωbrbr__16, Ωbrbr__17;
        on_stats = function(stats) {};
        // debug 'Ωbrbr__15', stats
        get_random = new Get_random({
          seed: settings.my_seed_2,
          on_stats
        });
        result = ((function() {
          var i, results1;
          results1 = [];
          for (_ = i = 1; i <= 40; _ = ++i) {
            results1.push(get_random.chr({
              min: 'A',
              max: 'Z'
            }));
          }
          return results1;
        })()).join('');
        this.eq((Ωbrbr__16 = function() {
          return result === 'PQKESUUNYHBEWGHGWECRSZZLVOSFQSETNSEXDFGF';
        }), false);
        this.eq((Ωbrbr__17 = function() {
          return /^[A-Z]{40}$/.test(result);
        }), true);
        return null;
      })();
      (() => {        //.......................................................................................................
        var _, get_random, on_stats, result, Ωbrbr__20, Ωbrbr__21;
        on_stats = function(stats) {};
        // debug 'Ωbrbr__18', stats
        get_random = new Get_random({
          seed: settings.my_seed_2,
          on_stats
        });
        result = ((function() {
          var i, results1;
          results1 = [];
          for (_ = i = 1; i <= 40; _ = ++i) {
            results1.push(get_random.chr({
              max: 0xff,
              filter: /[aeiouyAEIOUY]/
            }));
          }
          return results1;
        })()).join('');
        // debug 'Ωbrbr__19', rpr result
        this.eq((Ωbrbr__20 = function() {
          return /^[aeiouyAEIOUY]{40}$/.test(result);
        }), true);
        this.eq((Ωbrbr__21 = function() {
          return result;
        }), 'yyUyIuuUaaIuUaUIIyOIoAYEOiOYIuiOuaiAUUeE');
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    get_random_chr_producer: function() {
      var Get_random, internals;
      ({Get_random, internals} = SFMODULES.unstable.require_get_random());
      (() => {        //.......................................................................................................
        var _, chr, get_random, on_stats, result, rounds, Ωbrbr__23, Ωbrbr__24;
        rounds = 0;
        on_stats = function(stats) {
          if (stats.name === 'chr') {
            return rounds += stats.rounds;
          }
        };
        get_random = new Get_random({
          seed: settings.my_seed_2,
          on_stats
        });
        chr = get_random.chr_producer({
          max: 0xff,
          filter: /[aeiouyAEIOUY]/
        });
        result = ((function() {
          var i, results1;
          results1 = [];
          for (_ = i = 1; i <= 40; _ = ++i) {
            results1.push(chr());
          }
          return results1;
        })()).join('');
        // debug 'Ωbrbr__22', rounds, ( rpr result )
        this.eq((Ωbrbr__23 = function() {
          return /^[aeiouyAEIOUY]{40}$/.test(result);
        }), true);
        this.eq((Ωbrbr__24 = function() {
          return result;
        }), 'yyUyIuuUaaIuUaUIIyOIoAYEOiOYIuiOuaiAUUeE');
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    get_random_text: function() {
      var Get_random, internals, max_count;
      ({Get_random, internals} = SFMODULES.unstable.require_get_random());
      max_count = 1e4;
      (() => {        //.......................................................................................................
        var get_random, on_stats, result, Ωbrbr__26;
        on_stats = function(stats) {};
        // info 'Ωbrbr__25', stats
        get_random = new Get_random({
          seed: settings.my_seed_1,
          on_stats
        });
        result = get_random.text({
          min: 'A',
          max: 'Z',
          length: 40
        });
        this.eq((Ωbrbr__26 = function() {
          return result;
        }), 'PQKESUUNYHBEWGHGWECRSZZLVOSFQSETNSEXDFGF');
        return null;
      })();
      (() => {        //.......................................................................................................
        var _, count_attempts, get_random, i, on_stats, result, rounds, valid_re, Ωbrbr__28;
        count_attempts = function(n) {
          return rounds[n] = (rounds[n] != null ? rounds[n] : rounds[n] = 0) + 1;
        };
        rounds = {};
        on_stats = function(stats) {
          if (stats.name !== 'chr') {
            // help 'Ωbrbr__27', stats
            return null;
          }
          count_attempts(stats.rounds);
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
          this.eq((Ωbrbr__28 = function() {
            return valid_re.test(result);
          }), true);
        }
        // debug 'Ωbrbr__29', rounds
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    get_random_set_of_chrs: function() {
      var Get_random, internals, max_count;
      ({Get_random, internals} = SFMODULES.unstable.require_get_random());
      max_count = 1e4;
      (() => {        //.......................................................................................................
        var _, get_random, i, on_stats, result, result_rpr, rounds, valid_re, Ωbrbr__31;
        rounds = 0;
        on_stats = function(stats) {
          rounds += stats.rounds;
          // urge 'Ωbrbr__30', stats if stats.name is 'set_of_chrs'
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
          this.eq((Ωbrbr__31 = function() {
            return valid_re.test(result_rpr);
          }), true);
          // debug 'Ωbrbr__32', rounds
          rounds = 0;
        }
        return null;
      })();
      (() => {        //.......................................................................................................
        var _, get_random, i, on_stats, result, result_rpr, rounds, valid_re, Ωbrbr__34, Ωbrbr__35;
        rounds = 0;
        on_stats = function(stats) {
          rounds += stats.rounds;
          // urge 'Ωbrbr__33', stats if stats.name is 'set_of_chrs'
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
          this.eq((Ωbrbr__34 = function() {
            return result.size;
          }), 10);
          this.eq((Ωbrbr__35 = function() {
            return valid_re.test(result_rpr);
          }), true);
          // debug 'Ωbrbr__36', rounds, rpr result
          rounds = 0;
        }
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    get_random_set_of_texts: function() {
      var Get_random, internals, max_count;
      ({Get_random, internals} = SFMODULES.unstable.require_get_random());
      max_count = 1e4;
      (() => {        //.......................................................................................................
        var _, get_random, i, on_stats, random_text, result, rounds, valid_re, Ωbrbr__37, Ωbrbr__38;
        rounds = 0;
        on_stats = function(stats) {
          rounds += stats.rounds;
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
          this.eq((Ωbrbr__37 = function() {
            return result.size;
          }), 10);
          for (random_text of result) {
            this.eq((Ωbrbr__38 = function() {
              return valid_re.test(random_text);
            }), true);
          }
          // debug 'Ωbrbr__39', rounds, rpr result
          rounds = 0;
        }
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    get_random_text_of_variable_length: function() {
      var Get_random, internals, matchers;
      ({Get_random, internals} = SFMODULES.unstable.require_get_random());
      matchers = ['εΧΚ', 'ονήφ', 'ΒΙ', 'ΟΠΟςΛ', 'η', 'ψψΩο', 'κΝε', 'Κμίκ', 'υΙ', 'ΟΛ'];
      (() => {        //.......................................................................................................
        var get_random, i, idx, on_stats, result, result_rounds, Ωbrbr__43;
        result_rounds = null;
        on_stats = (stats) => {
          var Ωbrbr__41;
          // info 'Ωbrbr__40', stats
          result_rounds = stats.rounds;
          return this.eq((Ωbrbr__41 = function() {
            return result_rounds >= 0;
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
          // debug 'Ωbrbr__42', rpr result
          this.eq((Ωbrbr__43 = function() {
            return result;
          }), matchers[idx]);
        }
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    get_random_text_of_variable_length_with_filter: function() {
      var Get_random, internals, result_matchers, round_matchers;
      ({Get_random, internals} = SFMODULES.unstable.require_get_random());
      result_matchers = ['Ακθ', 'ΑΣ', 'ΑΜ', 'ΑίΥΔ', 'ΑήδΛ', 'ΑήςδΠ', 'ΑξΡΤΘ', 'ΑΤΚΞ', 'ΑγιΔε', 'Αή'];
      round_matchers = [34, 15, 189, 121, 75, 47, 87, 43, 119, 200];
      (() => {        //.......................................................................................................
        var get_random, i, idx, on_stats, result, result_rounds, Ωbrbr__47, Ωbrbr__48;
        result_rounds = null;
        on_stats = (stats) => {
          var Ωbrbr__45;
          if (stats.name !== 'text') {
            return null;
          }
          // info 'Ωbrbr__44', idx, stats
          result_rounds = stats.rounds;
          return this.eq((Ωbrbr__45 = function() {
            return result_rounds;
          }), round_matchers[idx]);
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
            max_length: 5,
            filter: /^Α/v
          });
          // debug 'Ωbrbr__46', rpr result
          this.eq((Ωbrbr__47 = function() {
            return /^Α[Α-ω]{0,4}$/v.test(result);
          }), true);
          this.eq((Ωbrbr__48 = function() {
            return result;
          }), result_matchers[idx]);
        }
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    get_random_text_producer: function() {
      var Get_random, internals, result_matchers, round_matchers;
      ({Get_random, internals} = SFMODULES.unstable.require_get_random());
      result_matchers = ['Ακθ', 'ΑΣ', 'ΑΜ', 'ΑίΥΔ', 'ΑήδΛ', 'ΑήςδΠ', 'ΑξΡΤΘ', 'ΑΤΚΞ', 'ΑγιΔε', 'Αή'];
      round_matchers = [34, 15, 189, 121, 75, 47, 87, 43, 119, 200];
      (() => {        //.......................................................................................................
        var get_random, get_random_text, i, idx, on_stats, result, result_rounds, Ωbrbr__52, Ωbrbr__53;
        result_rounds = null;
        on_stats = (stats) => {
          var Ωbrbr__50;
          if (stats.name !== 'text') {
            return null;
          }
          // info 'Ωbrbr__49', idx, stats
          result_rounds = stats.rounds;
          return this.eq((Ωbrbr__50 = function() {
            return result_rounds;
          }), round_matchers[idx]);
        };
        get_random = new Get_random({
          seed: settings.my_seed_1,
          on_stats
        });
        get_random_text = get_random.text_producer({
          min: 'Α',
          max: 'ω',
          min_length: 1,
          max_length: 5,
          filter: /^Α/v
        });
        for (idx = i = 0; i <= 9; idx = ++i) {
          result = get_random_text();
          // debug 'Ωbrbr__51', rpr result
          this.eq((Ωbrbr__52 = function() {
            return /^Α[Α-ω]{0,4}$/v.test(result);
          }), true);
          this.eq((Ωbrbr__53 = function() {
            return result;
          }), result_matchers[idx]);
        }
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    get_random_float_producer: function() {
      var Get_random, internals, result_matchers;
      ({Get_random, internals} = SFMODULES.unstable.require_get_random());
      result_matchers = [16.084712848532945, 16.42560794018209, 14.009152099024504, 18.174642121884972, 12.86115032620728, 10.208302834071219, 18.753091448452324, 12.430183209944516, 12.627715056296438, 12.425259067676961];
      (() => {        // round_matchers  = [ 34, 15, 189, 121, 75, 47, 87, 43, 119, 200, ]
        //.......................................................................................................
        var filter, get_random, get_random_float, i, idx, on_stats, result, result_rounds, Ωbrbr__57;
        result_rounds = null;
        on_stats = (stats) => {
          var Ωbrbr__55;
          if (stats.name !== 'text') {
            return null;
          }
          // info 'Ωbrbr__54', idx, stats
          result_rounds = stats.rounds;
          return this.eq((Ωbrbr__55 = function() {
            return result_rounds;
          }), round_matchers[idx]);
        };
        get_random = new Get_random({
          seed: settings.my_seed_1,
          on_stats
        });
        filter = function(n) {
          return modulo(Math.floor(n), 2) === 0;
        };
        get_random_float = get_random.float_producer({
          min: 10,
          max: 20,
          filter
        });
        for (idx = i = 0; i <= 9; idx = ++i) {
          result = get_random_float();
          // debug 'Ωbrbr__56', rpr result
          this.eq((Ωbrbr__57 = function() {
            return result;
          }), result_matchers[idx]);
        }
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    get_random_integer_producer: function() {
      var Get_random, internals, result_matchers, rounds_matcher;
      ({Get_random, internals} = SFMODULES.unstable.require_get_random());
      result_matchers = [16, 16, 14, 12, 18, 18, 20, 10, 12, 12];
      rounds_matcher = [0, 0, 0, 0, 1, 0, 1, 1, 2, 1];
      (() => {        //.......................................................................................................
        var filter, get_random, get_random_integer, i, idx, my_on_stats, result, rounds, Ωbrbr__61, Ωbrbr__62;
        my_on_stats = (stats) => {
          if (stats.name === 'integer') {
            // debug 'Ωbrbr__58', stats
            return rounds.push(stats.rounds);
          }
        };
        rounds = [];
        get_random = new Get_random({
          seed: settings.my_seed_1,
          on_stats: my_on_stats
        });
        filter = function(n) {
          return modulo(Math.floor(n), 2) === 0;
        };
        get_random_integer = get_random.integer_producer({
          min: 10,
          max: 20,
          filter
        });
// debug 'Ωbrbr__59', get_random.cfg
        for (idx = i = 0; i <= 9; idx = ++i) {
          result = get_random_integer();
          // debug 'Ωbrbr__60', rpr result
          this.eq((Ωbrbr__61 = function() {
            return result;
          }), result_matchers[idx]);
        }
        this.eq((Ωbrbr__62 = function() {
          return rounds;
        }), rounds_matcher);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    get_random_set_of_texts_of_variable_length: function() {
      var Get_random, internals;
      ({Get_random, internals} = SFMODULES.unstable.require_get_random());
      (() => {        // matchers        = [ 'εΧΚ', 'ονήφ', 'ΒΙ', 'ΟΠΟςΛ', 'η', 'ψψΩο', 'κΝε', 'Κμίκ', 'υΙ', 'ΟΛ', ]
        //.......................................................................................................
        var get_random, i, idx, matchers, on_stats, result, result_rounds, Ωbrbr__65;
        result_rounds = null;
        on_stats = (stats) => {
          var Ωbrbr__64;
          if (stats.name === 'set_of_texts') {
            info('Ωbrbr__63', stats);
          }
          if (stats.name === 'set_of_texts') {
            result_rounds = stats.rounds;
          }
          return this.eq((Ωbrbr__64 = function() {
            return result_rounds >= 0;
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
          this.eq((Ωbrbr__65 = function() {
            return result;
          }), matchers[idx]);
        }
        // debug 'Ωbrbr__66', result
        return null;
      })();
      (() => {        //.......................................................................................................
        var get_random, i, idx, matchers, on_stats, result, result_rounds, result_rpr, Ωbrbr__69;
        //.....................................................................................................
        result_rounds = null;
        on_stats = (stats) => {
          var Ωbrbr__67;
          if (stats.name !== 'walk_unique') {
            // debug 'Ωbrbr_161', stats
            return null;
          }
          result_rounds = stats.rounds;
          // debug 'Ωbrbr_161', result_rounds
          return this.eq((Ωbrbr__67 = function() {
            return result_rounds;
          }), matchers[idx].result_rounds);
        };
        //.....................................................................................................
        get_random = new Get_random({
          seed: settings.my_seed_1,
          on_stats
        });
        matchers = [
          {
            result_rounds: 4,
            result_rpr: '5641793082'
          },
          {
            result_rounds: 63,
            result_rpr: '2816794530'
          },
          {
            result_rounds: 11,
            result_rpr: '4538196072'
          },
          {
            result_rounds: 20,
            result_rpr: '7831924056'
          },
          {
            result_rounds: 76,
            result_rpr: '0325467819'
          },
          {
            result_rounds: 7,
            result_rpr: '3149760582'
          },
          {
            result_rounds: 20,
            result_rpr: '2857361094'
          },
          {
            result_rounds: 31,
            result_rpr: '4523786091'
          },
          {
            result_rounds: 13,
            result_rpr: '4813560297'
          },
          {
            result_rounds: 19,
            result_rpr: '7491065823'
          }
        ];
        for (idx = i = 0; i <= 9; idx = ++i) {
          result = get_random.set_of_texts({
            min: '0',
            max: '9',
            size: 10,
            length: 1,
            on_stats
          });
          // debug 'Ωbrbr__68', rpr result
          result_rpr = [...result].join('');
          this.eq((Ωbrbr__69 = function() {
            return result_rpr;
          }), matchers[idx].result_rpr);
        }
        // @eq ( Ωbrbr__70 = -> result_rounds ), matchers[ idx ].result_rounds
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    exhaustion: function() {
      var Get_random, internals;
      ({Get_random, internals} = SFMODULES.unstable.require_get_random());
      (() => {        //.......................................................................................................
        var cfg, get_random, on_stats, result_rounds, Ωbrbr__73;
        result_rounds = null;
        on_stats = (stats) => {};
        // info 'Ωbrbr__71', stats if stats.name is 'walk'
        // result_rounds = stats.rounds if stats.name is 'walk'
        // @eq ( Ωbrbr__72 = -> result_rounds >= 0 ), true
        get_random = new Get_random({
          seed: settings.my_seed_1,
          on_stats
        });
        //.....................................................................................................
        cfg = {
          min: 'A',
          max: 'Z',
          length: 3,
          filter: /^[a-z]{3}$/,
          on_exhaustion: 'error'
        };
        this.throws((Ωbrbr__73 = function() {
          return get_random.text(cfg);
        }), /exhausted/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var cfg, get_random, on_stats, result_rounds, Ωbrbr__76;
        result_rounds = null;
        on_stats = (stats) => {};
        // info 'Ωbrbr__74', stats if stats.name is 'walk'
        // result_rounds = stats.rounds if stats.name is 'walk'
        // @eq ( Ωbrbr__75 = -> result_rounds >= 0 ), true
        get_random = new Get_random({
          seed: settings.my_seed_1,
          on_stats
        });
        //.....................................................................................................
        cfg = {
          min: 'A',
          max: 'Z',
          length: 3,
          filter: /^[a-z]{3}$/,
          on_exhaustion: function() {
            return null;
          }
        };
        this.eq((Ωbrbr__76 = function() {
          return get_random.text(cfg);
        }), null);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    walk: function() {
      var Get_random, internals;
      ({Get_random, internals} = SFMODULES.unstable.require_get_random());
      (() => {        //.......................................................................................................
        var get_random, idx, matcher, on_stats, producer, result, value, Ωbrbr__80, Ωbrbr__81, Ωbrbr__82;
        idx = -1;
        get_random = new Get_random({
          seed: settings.my_seed_1,
          on_stats
        });
        on_stats = (stats) => {
          var Ωbrbr__78;
          // info 'Ωbrbr__77', idx, stats # if stats.name is 'walk'
          if (stats.name === 'walk') {
            this.eq((Ωbrbr__78 = function() {
              return stats.rounds;
            }), matcher.rounds);
          }
          return null;
        };
        //.....................................................................................................
        result = {
          values: []
        };
        matcher = {
          values: ['ĂčÀ', 'tĢŅ', 'ľæű', 'Hpŗ', 'Śz^', 'ĖħŻ', 'żÉŉ', 'íĬČ', 'ĩuķ', 'ìīx', 'Ūm|'],
          rounds: 0
        };
        //.....................................................................................................
        producer = function() {
          return get_random.text({
            min: 'A',
            max: 0x017f,
            length: 3,
            on_stats
          });
        };
        for (value of get_random.walk({
          producer,
          n: 11,
          on_stats
        })) {
          idx++;
          // debug 'Ωbrbr__79', idx, rpr value
          result.values.push(value);
          this.eq((Ωbrbr__80 = function() {
            return value;
          }), matcher.values[idx]);
        }
        this.eq((Ωbrbr__81 = function() {
          return idx;
        }), 10);
        this.eq((Ωbrbr__82 = function() {
          return result.values.length;
        }), 11);
        return null;
      })();
      // #.......................................................................................................
      // do =>
      //   get_random      = new Get_random { seed: settings.my_seed_1, on_stats, }
      //   result_rounds  = null
      //   on_stats        = ( stats ) =>
      //     info 'Ωbrbr__83', stats if stats.name is 'walk'
      //     result_rounds = stats.rounds if stats.name is 'walk'
      //     @eq ( Ωbrbr__84 = -> result_rounds >= 0 ), true
      //   #.....................................................................................................
      //   producer  = -> get_random.text { min: '0', max: '9', length: 1, }
      //   count     = 0
      //   seen      = new Set()
      //   for x from get_random.walk { producer, seen, n: 5, }
      //     count++
      //     debug 'Ωbrbr__85', count, rpr x
      //   return null
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    walk_unique: function() {
      var Get_random, internals;
      ({Get_random, internals} = SFMODULES.unstable.require_get_random());
      (() => {        //.......................................................................................................
        var get_random, idx, matchers, on_stats, producer, value, Ωbrbr__89;
        get_random = new Get_random({
          seed: settings.my_seed_1,
          on_stats
        });
        matchers = [15, 16, 14, 11, 17, 19, 13, 10, 18, 12];
        on_stats = (stats) => {
          var Ωbrbr__87;
          if (stats.name === 'walk_unique') {
            // info 'Ωbrbr__86', stats
            return this.eq((Ωbrbr__87 = function() {
              return stats.rounds;
            }), 4);
          }
        };
        //.....................................................................................................
        producer = function() {
          return get_random.integer({
            min: 10,
            max: 19,
            on_stats
          });
        };
        idx = -1;
        for (value of get_random.walk_unique({
          producer,
          n: 10,
          on_stats
        })) {
          idx++;
          // debug 'Ωbrbr__88', idx, rpr value
          this.eq((Ωbrbr__89 = function() {
            return value;
          }), matchers[idx]);
        }
        return null;
      })();
      (() => {        //.......................................................................................................
        var get_random, on_stats, producer, Ωbrbr__91;
        get_random = new Get_random({
          seed: settings.my_seed_1,
          on_stats
        });
        on_stats = (stats) => {
          var Ωbrbr__90;
          if (stats.name === 'walk_unique') {
            return this.eq((Ωbrbr__90 = function() {
              return stats.rounds;
            }), 4);
          }
        };
        //.....................................................................................................
        producer = function() {
          return get_random.integer({
            min: 10,
            max: 19,
            on_stats
          });
        };
        this.throws((Ωbrbr__91 = function() {
          var results1, value;
          results1 = [];
          for (value of get_random.walk_unique({
            producer,
            n: 11,
            on_stats
          })) {
            results1.push(value);
          }
          return results1;
        }), /exhausted/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var get_random, idx, matchers, on_stats, producer, value, Ωbrbr__95;
        get_random = new Get_random({
          seed: settings.my_seed_1,
          on_stats
        });
        matchers = [15, 16, 14, 11, 17, 19, 13, 10, 18, 12];
        on_stats = (stats) => {
          var Ωbrbr__93;
          if (stats.name === 'walk_unique') {
            // info 'Ωbrbr__92', stats
            return this.eq((Ωbrbr__93 = function() {
              return stats.rounds;
            }), get_random.cfg.max_rounds + 1);
          }
        };
        //.....................................................................................................
        producer = function() {
          return get_random.integer({
            min: 10,
            max: 19,
            on_stats
          });
        };
        idx = -1;
        for (value of get_random.walk_unique({
          producer,
          n: 20,
          on_stats,
          on_exhaustion: 'stop'
        })) {
          idx++;
          // debug 'Ωbrbr__94', idx, rpr value
          this.eq((Ωbrbr__95 = function() {
            return value;
          }), matchers[idx]);
        }
        return null;
      })();
      (() => {        //.......................................................................................................
        var get_random, idx, matchers, max_rounds, on_stats, producer, results, value, Ωbrbr__99;
        get_random = new Get_random({
          seed: settings.my_seed_1,
          on_stats
        });
        matchers = '¨¯yD¾ÖÑõ`%AãV[åH5¶ÂüýÙÅO®ÃEÍÄGñ?XItZ-Ë¬Úd.kK2öJÞ6wsïéÜÿ9°x§ÁB_·À0ò&qè8÷ì«nµ²"½Ým<óeM{Qí@PçÐ+j¥ß^©æC¡±Óib,c\\³7£r~aê¿Ç:ÎSzùØº(|T¼¦ª/úu¢ÛY¤É#ðþø¸oFU1}p$W Õô4ÌäÈë>Ïv×LR]fg\'î´¹ûÒâÊ)»hÔ!;à*NáÆ=3l';
        results = [];
        max_rounds = 1_000;
        on_stats = (stats) => {
          var Ωbrbr__97;
          if (stats.name === 'walk_unique') {
            // info 'Ωbrbr__96', stats
            return this.eq((Ωbrbr__97 = function() {
              return stats.rounds;
            }), max_rounds + 1);
          }
        };
        //.....................................................................................................
        producer = function() {
          return get_random.chr({
            min: 0x20,
            max: 0xff,
            on_stats
          });
        };
        idx = -1;
        for (value of get_random.walk_unique({
          producer,
          n: 200,
          on_stats,
          on_exhaustion: 'stop',
          max_rounds
        })) {
          idx++;
          // debug 'Ωbrbr__98', idx, rpr value
          this.eq((Ωbrbr__99 = function() {
            return value;
          }), matchers[idx]);
          results.push(value);
        }
        // debug 'Ωbrbr_100', rpr results.join ''
        return null;
      })();
      (() => {        //.......................................................................................................
        var get_random, idx, matchers, max_rounds, on_stats, producer, results, seen, value, Ωbrbr_104;
        get_random = new Get_random({
          seed: settings.my_seed_1,
          on_stats
        });
        matchers = '»hÔ!;à*NáÆ=3l';
        results = [];
        max_rounds = 1_000;
        on_stats = (stats) => {
          var Ωbrbr_102;
          if (stats.name === 'walk_unique') {
            // info 'Ωbrbr_101', stats
            return this.eq((Ωbrbr_102 = function() {
              return stats.rounds;
            }), max_rounds + 1);
          }
        };
        //.....................................................................................................
        seen = new Set('¨¯yD¾ÖÑõ`%AãV[åH5¶ÂüýÙÅO®ÃEÍÄGñ?XItZ-Ë¬Úd.kK2öJÞ6wsïéÜÿ9°x§ÁB_·À0ò&qè8÷ì«nµ²"½Ým<óeM{Qí@PçÐ+j¥ß^©æC¡±Óib,c\\³7£r~aê¿Ç:ÎSzùØº(|T¼¦ª/úu¢ÛY¤É#ðþø¸oFU1}p$W Õô4ÌäÈë>Ïv×LR]fg\'î´¹ûÒâÊ)');
        producer = function() {
          return get_random.chr({
            min: 0x20,
            max: 0xff,
            on_stats
          });
        };
        idx = -1;
        for (value of get_random.walk_unique({
          producer,
          n: 200,
          seen,
          on_stats,
          on_exhaustion: 'stop',
          max_rounds
        })) {
          idx++;
          // debug 'Ωbrbr_103', idx, rpr value
          this.eq((Ωbrbr_104 = function() {
            return value;
          }), matchers[idx]);
          results.push(value);
        }
        // debug 'Ωbrbr_105', rpr results.join ''
        return null;
      })();
      (() => {        //.......................................................................................................
        var get_random, idx, matchers, on_stats, producer, purview, results, seen, value, Ωbrbr_109, Ωbrbr_110, Ωbrbr_111;
        get_random = new Get_random({
          seed: settings.my_seed_1,
          on_stats
        });
        matchers = 'pqkesunyhbewgcrszlvofqset';
        results = [];
        on_stats = (stats) => {
          var Ωbrbr_107;
          if (stats.name === 'walk_unique') {
            // info 'Ωbrbr_106', stats
            return this.eq((Ωbrbr_107 = function() {
              return stats.rounds;
            }), 7);
          }
        };
        //.....................................................................................................
        seen = new Set();
        purview = 5/* NOTE maximum size of 'window' where unqiueness is guaranteed; `seen` will not grow beyond this */
        producer = function() {
          return get_random.chr({
            min: 'a',
            max: 'z',
            on_stats
          });
        };
        idx = -1;
        for (value of get_random.walk_unique({
          producer,
          n: 25,
          seen,
          purview,
          on_stats,
          on_exhaustion: 'stop'
        })) {
          idx++;
          // debug 'Ωbrbr_108', idx, rpr value
          this.eq((Ωbrbr_109 = function() {
            return value;
          }), matchers[idx]);
          results.push(value);
        }
        this.eq((Ωbrbr_110 = function() {
          return [...seen].join('');
        }), 'ofqset');
        this.eq((Ωbrbr_111 = function() {
          return seen.size;
        }), purview + 1);
        // debug 'Ωbrbr_112', rpr results.join ''
        return null;
      })();
      (() => {        //.......................................................................................................
        var get_random, idx, matchers, on_stats, producer, purview, results, seen, value, Ωbrbr_116, Ωbrbr_117, Ωbrbr_118;
        get_random = new Get_random({
          seed: settings.my_seed_1,
          on_stats
        });
        matchers = '4325614325614325614325614';
        results = [];
        on_stats = (stats) => {
          var Ωbrbr_114;
          if (stats.name === 'walk_unique') {
            // info 'Ωbrbr_113', stats
            return this.eq((Ωbrbr_114 = function() {
              return stats.rounds;
            }), 64);
          }
        };
        //.....................................................................................................
        seen = new Set();
        purview = 5/* NOTE maximum size of 'window' where unqiueness is guaranteed; `seen` will not grow beyond this */
        producer = function() {
          return get_random.chr({
            min: '1',
            max: '6',
            on_stats
          });
        };
        idx = -1;
        for (value of get_random.walk_unique({
          producer,
          n: 25,
          seen,
          purview,
          on_stats,
          on_exhaustion: 'stop'
        })) {
          idx++;
          // debug 'Ωbrbr_115', idx, rpr value
          this.eq((Ωbrbr_116 = function() {
            return value;
          }), matchers[idx]);
          results.push(value);
        }
        this.eq((Ωbrbr_117 = function() {
          return [...seen].join('');
        }), '325614');
        this.eq((Ωbrbr_118 = function() {
          return seen.size;
        }), purview + 1);
        // debug 'Ωbrbr_119', rpr results.join ''
        return null;
      })();
      (() => {        //.......................................................................................................
        var get_random, idx, matchers, on_stats, producer, purview, results, seen, value, Ωbrbr_123, Ωbrbr_124, Ωbrbr_125;
        get_random = new Get_random({
          seed: settings.my_seed_1,
          on_stats
        });
        matchers = '532647132657432165472365172436512736541236541';
        results = [];
        on_stats = (stats) => {
          var Ωbrbr_121;
          if (stats.name === 'walk_unique') {
            // info 'Ωbrbr_120', stats
            return this.eq((Ωbrbr_121 = function() {
              return stats.rounds;
            }), 129);
          }
        };
        //.....................................................................................................
        seen = new Set();
        purview = 5/* NOTE maximum size of 'window' where unqiueness is guaranteed; `seen` will not grow beyond this */
        producer = function() {
          return get_random.chr({
            min: '1',
            max: '7',
            on_stats
          });
        };
        idx = -1;
        for (value of get_random.walk_unique({
          producer,
          n: 45,
          seen,
          purview,
          on_stats,
          on_exhaustion: 'stop'
        })) {
          idx++;
          // debug 'Ωbrbr_122', idx, rpr value
          this.eq((Ωbrbr_123 = function() {
            return value;
          }), matchers[idx]);
          results.push(value);
        }
        this.eq((Ωbrbr_124 = function() {
          return [...seen].join('');
        }), '236541');
        this.eq((Ωbrbr_125 = function() {
          return seen.size;
        }), purview + 1);
        // debug 'Ωbrbr_126', rpr results.join ''
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    stats: function() {
      var Get_random, internals;
      ({Get_random, internals} = SFMODULES.unstable.require_get_random());
      (() => {        //.......................................................................................................
        var on_exhaustion, sentinel, stats, Ωbrbr_127, Ωbrbr_128, Ωbrbr_129, Ωbrbr_130, Ωbrbr_131, Ωbrbr_132, Ωbrbr_137, Ωbrbr_138, Ωbrbr_139;
        sentinel = Symbol('sentinel');
        on_exhaustion = function() {
          return sentinel;
        };
        stats = new internals.Stats({
          name: 'something',
          on_exhaustion
        });
        this.eq((Ωbrbr_127 = function() {
          return stats.name;
        }), 'something');
        this.eq((Ωbrbr_128 = function() {
          return stats.max_rounds;
        }), internals.max_rounds);
        this.eq((Ωbrbr_129 = function() {
          return stats.rounds;
        }), 0);
        this.throws((Ωbrbr_130 = function() {
          return stats.rounds++;
        }), /Cannot set property/);
        this.eq((Ωbrbr_131 = function() {
          return stats.retry();
        }), internals.go_on);
        this.eq((Ωbrbr_132 = function() {
          return stats.rounds;
        }), 1);
        stats._rounds = internals.max_rounds - 1;
        // debug 'Ωbrbr_133', stats
        // debug 'Ωbrbr_134', stats.rounds
        // debug 'Ωbrbr_135', internals.max_rounds
        // debug 'Ωbrbr_136', stats.max_rounds
        this.eq((Ωbrbr_137 = function() {
          return stats.retry();
        }), internals.go_on);
        this.eq((Ωbrbr_138 = function() {
          return stats.retry();
        }), sentinel);
        this.eq((Ωbrbr_139 = function() {
          return stats.retry();
        }), sentinel);
        return null;
      })();
      (() => {        //.......................................................................................................
        var on_exhaustion, stats, Ωbrbr_140, Ωbrbr_141, Ωbrbr_142;
        on_exhaustion = void 0;
        stats = new internals.Stats({
          name: 'something',
          on_exhaustion
        });
        stats._rounds = internals.max_rounds - 1;
        this.eq((Ωbrbr_140 = function() {
          return stats.retry();
        }), internals.go_on);
        this.throws((Ωbrbr_141 = function() {
          return stats.retry();
        }), /exhausted/);
        this.throws((Ωbrbr_142 = function() {
          return stats.retry();
        }), /exhausted/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var on_exhaustion, stats, Ωbrbr_143, Ωbrbr_144, Ωbrbr_145;
        on_exhaustion = null;
        stats = new internals.Stats({
          name: 'something',
          on_exhaustion
        });
        stats._rounds = internals.max_rounds - 1;
        this.eq((Ωbrbr_143 = function() {
          return stats.retry();
        }), internals.go_on);
        this.throws((Ωbrbr_144 = function() {
          return stats.retry();
        }), /exhausted/);
        this.throws((Ωbrbr_145 = function() {
          return stats.retry();
        }), /exhausted/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var on_exhaustion, stats, Ωbrbr_146, Ωbrbr_147, Ωbrbr_148;
        on_exhaustion = 'error';
        stats = new internals.Stats({
          name: 'something',
          on_exhaustion
        });
        stats._rounds = internals.max_rounds - 1;
        this.eq((Ωbrbr_146 = function() {
          return stats.retry();
        }), internals.go_on);
        this.throws((Ωbrbr_147 = function() {
          return stats.retry();
        }), /exhausted/);
        this.throws((Ωbrbr_148 = function() {
          return stats.retry();
        }), /exhausted/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var max_rounds, on_exhaustion, on_stats, sentinel, stats, stats_result, Ωbrbr_149, Ωbrbr_150, Ωbrbr_151, Ωbrbr_152, Ωbrbr_153, Ωbrbr_154, Ωbrbr_155, Ωbrbr_156, Ωbrbr_157, Ωbrbr_158, Ωbrbr_159, Ωbrbr_160;
        sentinel = Symbol('sentinel');
        stats_result = null;
        on_exhaustion = function() {
          return sentinel;
        };
        on_stats = function() {
          return sentinel;
        };
        max_rounds = 3;
        stats = new internals.Stats({
          name: 'something',
          on_exhaustion,
          on_stats,
          max_rounds
        });
        this.eq((Ωbrbr_149 = function() {
          return stats.rounds;
        }), 0);
        this.eq((Ωbrbr_150 = function() {
          return stats.retry();
        }), internals.go_on);
        this.eq((Ωbrbr_151 = function() {
          return stats.rounds;
        }), 1);
        this.eq((Ωbrbr_152 = function() {
          return stats.retry();
        }), internals.go_on);
        this.eq((Ωbrbr_153 = function() {
          return stats.rounds;
        }), 2);
        this.eq((Ωbrbr_154 = function() {
          return stats.retry();
        }), internals.go_on);
        this.eq((Ωbrbr_155 = function() {
          return stats.rounds;
        }), 3);
        this.eq((Ωbrbr_156 = function() {
          return stats.retry();
        }), sentinel);
        this.eq((Ωbrbr_157 = function() {
          return stats.finish('value');
        }), 'value');
        this.throws((Ωbrbr_158 = function() {
          return stats.finish('value');
        }), /finished/);
        this.throws((Ωbrbr_159 = function() {
          return stats.retry();
        }), /finished/);
        this.throws((Ωbrbr_160 = function() {
          return stats.retry();
        }), /finished/);
        return null;
      })();
      //.......................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var demo_clean, guytest_cfg;
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
      (new Test(guytest_cfg)).test({
        walk_unique: tests.walk_unique
      });
      //.........................................................................................................
      demo_clean = function() {
        var a, b, c, clean, d;
        (new Test(guytest_cfg)).test({
          get_random_integer_producer: tests.get_random_integer_producer
        });
        a = {};
        b = {
          o: 6
        };
        c = {
          o: void 0
        };
        clean = function(x) {
          var k, v;
          return Object.fromEntries((function() {
            var results1;
            results1 = [];
            for (k in x) {
              v = x[k];
              if (v != null) {
                results1.push([k, v]);
              }
            }
            return results1;
          })());
        };
        return debug('Ωbrbr_161', d = {...a, ...(clean(b)), ...(clean(c))});
      };
      //.........................................................................................................
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLFFBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUE7SUFBQTsrREFBQTs7O0VBR0EsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixXQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsS0FIRixFQUlFLElBSkYsRUFLRSxJQUxGLEVBTUUsSUFORixFQU9FLEdBUEYsRUFRRSxJQVJGLEVBU0UsT0FURixFQVVFLEdBVkYsQ0FBQSxHQVU0QixHQUFHLENBQUMsR0FWaEM7O0VBV0EsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUI7O0VBQ0EsS0FBQSxHQUE0QixRQUFBLENBQUUsQ0FBRixDQUFBO1dBQVMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFmLENBQXFCLENBQXJCO0VB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SSxDQUFFLElBQUksSUFBSixDQUFTLFdBQVQsQ0FBRixDQUF3QixDQUFDLElBQXpCLENBQThCO1VBQUUsMkJBQUEsRUFBNkIsS0FBSyxDQUFDO1FBQXJDLENBQTlCO1FBQ0EsQ0FBQSxHQUFJLENBQUE7UUFDSixDQUFBLEdBQUk7VUFBRSxDQUFBLEVBQUc7UUFBTDtRQUNKLENBQUEsR0FBSTtVQUFFLENBQUEsRUFBRztRQUFMO1FBQ0osS0FBQSxHQUFRLFFBQUEsQ0FBRSxDQUFGLENBQUE7QUFBUSxjQUFBLENBQUEsRUFBQTtpQkFBQyxNQUFNLENBQUMsV0FBUDs7QUFBcUI7WUFBQSxLQUFBLE1BQUE7O2tCQUE2Qjs4QkFBN0IsQ0FBRSxDQUFGLEVBQUssQ0FBTDs7WUFBQSxDQUFBOztjQUFyQjtRQUFUO2VBQ1IsS0FBQSxDQUFNLFdBQU4sRUFBbUIsQ0FBQSxHQUFJLENBQUUsR0FBQSxDQUFGLEVBQVEsR0FBQSxDQUFFLEtBQUEsQ0FBTSxDQUFOLENBQUYsQ0FBUixFQUF3QixHQUFBLENBQUUsS0FBQSxDQUFNLENBQU4sQ0FBRixDQUF4QixDQUF2QjtNQU5XLEVBTGY7O0FBYUUsYUFBTztJQWQrQixDQUFBLElBQXhDOztBQWp4QkEiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuJ3VzZSBzdHJpY3QnXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdicmljYWJyYWMnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbndyaXRlICAgICAgICAgICAgICAgICAgICAgPSAoIHAgKSAtPiBwcm9jZXNzLnN0ZG91dC53cml0ZSBwXG5DICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnYW5zaXMnXG57IG5mYSB9ICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNpbmdsZS1maWxlLW1vZHVsZXMnXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnNldHRpbmdzID1cbiAgICBteV9zZWVkXzE6IDI4NzM0NjIxMzRcbiAgICBteV9zZWVkXzI6IDI4NzM0NjIxMzQgKyAxXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRlc3RzID0gdGVzdHMgPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0X3JhbmRvbV9mbG9hdDogLT5cbiAgICB7IEdldF9yYW5kb20sXG4gICAgICBpbnRlcm5hbHMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X3JhbmRvbSgpXG4gICAgbWF0Y2hlcnMgICAgICAgID0gW11cbiAgICBwcm9iZXMgICAgICAgICAgPSBbXVxuICAgIG1heF9jb3VudCAgICAgICA9IDFlNFxuICAgIHNlZW4gICAgICAgICAgICA9IG5ldyBTZXQoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGdldF9yYW5kb20gPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgfVxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4uIG1heF9jb3VudCBdXG4gICAgICAgIG1hdGNoZXJzLnB1c2ggdCA9IGdldF9yYW5kb20uZmxvYXQoKVxuICAgICAgICBzZWVuLmFkZCB0XG4gICAgICBmb3IgdmFsdWUsIGlkeCBpbiBtYXRjaGVyc1xuICAgICAgICBkZWJ1ZyAnzqlicmJyX19fMScsIHsgaWR4LCB2YWx1ZSwgfSB1bmxlc3MgMCA8IHZhbHVlIDw9IDFcbiAgICAgIEBlcSAoIM6pYnJicl9fXzIgPSAtPiBtYXRjaGVycy5ldmVyeSAoIHQgKSAtPiAwIDwgdCA8PSAxICksIHRydWVcbiAgICAgIEBlcSAoIM6pYnJicl9fXzMgPSAtPiBzZWVuLnNpemUgKSwgbWF4X2NvdW50XG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGdldF9yYW5kb20gPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgfVxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4uIG1heF9jb3VudCBdXG4gICAgICAgIHByb2Jlcy5wdXNoIHQgPSBnZXRfcmFuZG9tLmZsb2F0KClcbiAgICAgIEBlcSAoIM6pYnJicl9fXzQgPSAtPiBwcm9iZXMgKSwgbWF0Y2hlcnNcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZ2V0X3JhbmRvbSA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8yLCB9XG4gICAgICBjb3VudCA9IDBcbiAgICAgIGZvciBpZHggaW4gWyAwIC4uLiBtYXhfY291bnQgXVxuICAgICAgICBjb3VudCsrIGlmICggdCA9IGdldF9yYW5kb20uZmxvYXQoKSApIGluIG1hdGNoZXJzXG4gICAgICBAZXEgKCDOqWJyYnJfX181ID0gLT4gY291bnQgKSwgMFxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBnZXRfcmFuZG9tICAgID0gbmV3IEdldF9yYW5kb20oKVxuICAgICAgY291bnQgPSAwXG4gICAgICBmb3IgaWR4IGluIFsgMCAuLi4gbWF4X2NvdW50IF1cbiAgICAgICAgY291bnQrKyBpZiAoIHQgPSBnZXRfcmFuZG9tLmZsb2F0KCkgKSBpbiBtYXRjaGVyc1xuICAgICAgQGVxICggzqlicmJyX19fNiA9IC0+IGNvdW50IDwgMTAgKSwgdHJ1ZVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBnZXRfcmFuZG9tICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCB9XG4gICAgICBtaW4gICAgICAgICA9IDEwMFxuICAgICAgbWF4ICAgICAgICAgPSA5OTlcbiAgICAgIGJ1Y2tldHMgICAgID0ge31cbiAgICAgIGZvciBidWNrZXQgaW4gWyBtaW4gLi4uIG1heCBdXG4gICAgICAgIGJ1Y2tldHNbIE1hdGguZmxvb3IgYnVja2V0IC8gMTAgXSA9IDBcbiAgICAgIGZvciBpZHggaW4gWyAwIC4uLiBtYXhfY291bnQgXVxuICAgICAgICB0ID0gZ2V0X3JhbmRvbS5mbG9hdCB7IG1pbiwgbWF4LCB9XG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fXzcnLCB0XG4gICAgICAgIGJ1Y2tldCA9IE1hdGguZmxvb3IgdCAvIDEwXG4gICAgICAgIGJ1Y2tldHNbIGJ1Y2tldCBdKytcbiAgICAgICAgQGVxICggzqlicmJyX19fOCA9IC0+IG1pbiA8PSB0IDw9IG1heCApLCB0cnVlXG4gICAgICBmb3IgXywgY291bnQgb2YgYnVja2V0c1xuICAgICAgICBAZXEgKCDOqWJyYnJfX185ID0gLT4gNTAgPD0gY291bnQgPD0gMTUwICksIHRydWVcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0X3JhbmRvbV9pbnRlZ2VyOiAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfcmFuZG9tKClcbiAgICBtYXhfY291bnQgICAgICAgPSAxZTRcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBnZXRfcmFuZG9tICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCB9XG4gICAgICBtaW4gICAgICAgICA9IDEwMFxuICAgICAgbWF4ICAgICAgICAgPSA5OTlcbiAgICAgIGJ1Y2tldHMgICAgID0ge31cbiAgICAgIGZvciBidWNrZXQgaW4gWyBtaW4gLi4uIG1heCBdXG4gICAgICAgIGJ1Y2tldHNbIE1hdGguZmxvb3IgYnVja2V0IC8gMTAgXSA9IDBcbiAgICAgIGZvciBpZHggaW4gWyAwIC4uLiBtYXhfY291bnQgXVxuICAgICAgICB0ID0gZ2V0X3JhbmRvbS5pbnRlZ2VyIHsgbWluLCBtYXgsIH1cbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyX18xMCcsIHRcbiAgICAgICAgYnVja2V0ID0gTWF0aC5mbG9vciB0IC8gMTBcbiAgICAgICAgYnVja2V0c1sgYnVja2V0IF0rK1xuICAgICAgICBAZXEgKCDOqWJyYnJfXzExID0gLT4gbWluIDw9IHQgPD0gbWF4ICksIHRydWVcbiAgICAgIGZvciBfLCBjb3VudCBvZiBidWNrZXRzXG4gICAgICAgIEBlcSAoIM6pYnJicl9fMTIgPSAtPiA1MCA8PSBjb3VudCA8PSAxNTAgKSwgdHJ1ZVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRfcmFuZG9tX2NocjogLT5cbiAgICB7IEdldF9yYW5kb20sXG4gICAgICBpbnRlcm5hbHMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X3JhbmRvbSgpXG4gICAgbWF4X2NvdW50ICAgICAgID0gMWU0XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZ2V0X3JhbmRvbSAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgfVxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4uIG1heF9jb3VudCBdXG4gICAgICAgIHQgPSBnZXRfcmFuZG9tLmNocigpXG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fMTMnLCBycHIgdFxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBnZXRfcmFuZG9tICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCB9XG4gICAgICByZXN1bHQgPSAoIGdldF9yYW5kb20uY2hyIHsgbWluOiAnQScsIG1heDogJ1onLCB9IGZvciBfIGluIFsgMSAuLiA0MCBdICkuam9pbiAnJ1xuICAgICAgQGVxICggzqlicmJyX18xNCA9IC0+IHJlc3VsdCApLCAnUFFLRVNVVU5ZSEJFV0dIR1dFQ1JTWlpMVk9TRlFTRVROU0VYREZHRidcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgb25fc3RhdHMgICAgPSAoIHN0YXRzICkgLT5cbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyX18xNScsIHN0YXRzXG4gICAgICBnZXRfcmFuZG9tICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8yLCBvbl9zdGF0cywgfVxuICAgICAgcmVzdWx0ICAgICAgPSAoIGdldF9yYW5kb20uY2hyIHsgbWluOiAnQScsIG1heDogJ1onLCB9IGZvciBfIGluIFsgMSAuLiA0MCBdICkuam9pbiAnJ1xuICAgICAgQGVxICggzqlicmJyX18xNiA9IC0+IHJlc3VsdCBpcyAnUFFLRVNVVU5ZSEJFV0dIR1dFQ1JTWlpMVk9TRlFTRVROU0VYREZHRicgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6pYnJicl9fMTcgPSAtPiAvXltBLVpdezQwfSQvLnRlc3QgcmVzdWx0ICksIHRydWVcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgb25fc3RhdHMgICAgPSAoIHN0YXRzICkgLT5cbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyX18xOCcsIHN0YXRzXG4gICAgICBnZXRfcmFuZG9tICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8yLCBvbl9zdGF0cywgfVxuICAgICAgcmVzdWx0ICAgICAgPSAoIGdldF9yYW5kb20uY2hyIHsgbWF4OiAweGZmLCBmaWx0ZXI6IC9bYWVpb3V5QUVJT1VZXS8sIH0gZm9yIF8gaW4gWyAxIC4uIDQwIF0gKS5qb2luICcnXG4gICAgICAjIGRlYnVnICfOqWJyYnJfXzE5JywgcnByIHJlc3VsdFxuICAgICAgQGVxICggzqlicmJyX18yMCA9IC0+IC9eW2FlaW91eUFFSU9VWV17NDB9JC8udGVzdCByZXN1bHQgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlicmJyX18yMSA9IC0+IHJlc3VsdCApLCAneXlVeUl1dVVhYUl1VWFVSUl5T0lvQVlFT2lPWUl1aU91YWlBVVVlRSdcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0X3JhbmRvbV9jaHJfcHJvZHVjZXI6IC0+XG4gICAgeyBHZXRfcmFuZG9tLFxuICAgICAgaW50ZXJuYWxzLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2dldF9yYW5kb20oKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHJvdW5kcyAgICAgID0gMFxuICAgICAgb25fc3RhdHMgICAgPSAoIHN0YXRzICkgLT4gcm91bmRzICs9IHN0YXRzLnJvdW5kcyBpZiBzdGF0cy5uYW1lIGlzICdjaHInXG4gICAgICBnZXRfcmFuZG9tICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8yLCBvbl9zdGF0cywgfVxuICAgICAgY2hyICAgICAgICAgPSBnZXRfcmFuZG9tLmNocl9wcm9kdWNlciB7IG1heDogMHhmZiwgZmlsdGVyOiAvW2FlaW91eUFFSU9VWV0vLCB9XG4gICAgICByZXN1bHQgICAgICA9ICggY2hyKCkgZm9yIF8gaW4gWyAxIC4uIDQwIF0gKS5qb2luICcnXG4gICAgICAjIGRlYnVnICfOqWJyYnJfXzIyJywgcm91bmRzLCAoIHJwciByZXN1bHQgKVxuICAgICAgQGVxICggzqlicmJyX18yMyA9IC0+IC9eW2FlaW91eUFFSU9VWV17NDB9JC8udGVzdCByZXN1bHQgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlicmJyX18yNCA9IC0+IHJlc3VsdCApLCAneXlVeUl1dVVhYUl1VWFVSUl5T0lvQVlFT2lPWUl1aU91YWlBVVVlRSdcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0X3JhbmRvbV90ZXh0OiAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfcmFuZG9tKClcbiAgICBtYXhfY291bnQgICAgICAgPSAxZTRcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBvbl9zdGF0cyAgICA9ICggc3RhdHMgKSAtPlxuICAgICAgICAjIGluZm8gJ86pYnJicl9fMjUnLCBzdGF0c1xuICAgICAgZ2V0X3JhbmRvbSAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgb25fc3RhdHMsIH1cbiAgICAgIHJlc3VsdCAgICAgID0gZ2V0X3JhbmRvbS50ZXh0IHsgbWluOiAnQScsIG1heDogJ1onLCBsZW5ndGg6IDQwLCB9XG4gICAgICBAZXEgKCDOqWJyYnJfXzI2ID0gLT4gcmVzdWx0ICksICdQUUtFU1VVTllIQkVXR0hHV0VDUlNaWkxWT1NGUVNFVE5TRVhERkdGJ1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBjb3VudF9hdHRlbXB0cyAgPSAoIG4gKSAtPiByb3VuZHNbIG4gXSA9ICggcm91bmRzWyBuIF0gPz0gMCApICsgMVxuICAgICAgcm91bmRzICAgICAgICA9IHt9XG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgLT5cbiAgICAgICAgIyBoZWxwICfOqWJyYnJfXzI3Jywgc3RhdHNcbiAgICAgICAgcmV0dXJuIG51bGwgdW5sZXNzIHN0YXRzLm5hbWUgaXMgJ2NocidcbiAgICAgICAgY291bnRfYXR0ZW1wdHMgc3RhdHMucm91bmRzXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB2YWxpZF9yZSAgICA9IC8vLyBeIFsgXFx1MDAyMC1cXHUwMDdlIFxcdTAwYTAtXFx1MDBhYyBcXHUwMGFlLVxcdTAwZmYgXXsgMTUwIH0gJCAvLy92XG4gICAgICBnZXRfcmFuZG9tICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogbnVsbCwgb25fc3RhdHMsIH1cbiAgICAgIGZvciBfIGluIFsgMSAuLiAxIF1cbiAgICAgICMgZm9yIF8gaW4gWyAxIC4uIDEwIF1cbiAgICAgICAgcmVzdWx0ID0gZ2V0X3JhbmRvbS50ZXh0IHsgbWluOiAweDAwLCBtYXg6IDB4ZmYsIGxlbmd0aDogMTUwLCB9XG4gICAgICAgIEBlcSAoIM6pYnJicl9fMjggPSAtPiB2YWxpZF9yZS50ZXN0IHJlc3VsdCApLCB0cnVlXG4gICAgICAjIGRlYnVnICfOqWJyYnJfXzI5Jywgcm91bmRzXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9yYW5kb21fc2V0X29mX2NocnM6IC0+XG4gICAgeyBHZXRfcmFuZG9tLFxuICAgICAgaW50ZXJuYWxzLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2dldF9yYW5kb20oKVxuICAgIG1heF9jb3VudCAgICAgICA9IDFlNFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHJvdW5kcyAgICAgICAgID0gMFxuICAgICAgb25fc3RhdHMgICAgICAgID0gKCBzdGF0cyApIC0+XG4gICAgICAgIHJvdW5kcyArPSBzdGF0cy5yb3VuZHNcbiAgICAgICAgIyB1cmdlICfOqWJyYnJfXzMwJywgc3RhdHMgaWYgc3RhdHMubmFtZSBpcyAnc2V0X29mX2NocnMnXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB2YWxpZF9yZSAgICA9IC8vLyBeIFsgXFx1MDAyMC1cXHUwMDdlIFxcdTAwYTAtXFx1MDBhYyBcXHUwMGFlLVxcdTAwZmYgXXsgNTAgfSAkIC8vL3ZcbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBudWxsLCBvbl9zdGF0cywgfVxuICAgICAgZm9yIF8gaW4gWyAxIC4uIDIwIF1cbiAgICAgICAgcmVzdWx0ICAgICAgPSBnZXRfcmFuZG9tLnNldF9vZl9jaHJzIHsgbWluOiAweDAwLCBtYXg6IDB4ZmYsIHNpemU6IDUwLCB9XG4gICAgICAgIHJlc3VsdF9ycHIgID0gWyByZXN1bHQuLi4sIF0uam9pbiAnJ1xuICAgICAgICBAZXEgKCDOqWJyYnJfXzMxID0gLT4gdmFsaWRfcmUudGVzdCByZXN1bHRfcnByICksIHRydWVcbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyX18zMicsIHJvdW5kc1xuICAgICAgICByb3VuZHMgPSAwXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHJvdW5kcyAgICAgICAgID0gMFxuICAgICAgb25fc3RhdHMgICAgICAgID0gKCBzdGF0cyApIC0+XG4gICAgICAgIHJvdW5kcyArPSBzdGF0cy5yb3VuZHNcbiAgICAgICAgIyB1cmdlICfOqWJyYnJfXzMzJywgc3RhdHMgaWYgc3RhdHMubmFtZSBpcyAnc2V0X29mX2NocnMnXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB2YWxpZF9yZSAgICA9IC8vLyBeIFsgMC05IF17IDEwIH0gJCAvLy92XG4gICAgICBnZXRfcmFuZG9tICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogbnVsbCwgb25fc3RhdHMsIH1cbiAgICAgIGZvciBfIGluIFsgMSAuLiAyMCBdXG4gICAgICAgIHJlc3VsdCAgICAgID0gZ2V0X3JhbmRvbS5zZXRfb2ZfY2hycyB7IG1pbjogJzAnLCBtYXg6ICc5Jywgc2l6ZTogMTAsIH1cbiAgICAgICAgcmVzdWx0X3JwciAgPSBbIHJlc3VsdC4uLiwgXS5qb2luICcnXG4gICAgICAgIEBlcSAoIM6pYnJicl9fMzQgPSAtPiByZXN1bHQuc2l6ZSAgICAgICAgICAgICAgKSwgMTBcbiAgICAgICAgQGVxICggzqlicmJyX18zNSA9IC0+IHZhbGlkX3JlLnRlc3QgcmVzdWx0X3JwciApLCB0cnVlXG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fMzYnLCByb3VuZHMsIHJwciByZXN1bHRcbiAgICAgICAgcm91bmRzID0gMFxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRfcmFuZG9tX3NldF9vZl90ZXh0czogLT5cbiAgICB7IEdldF9yYW5kb20sXG4gICAgICBpbnRlcm5hbHMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X3JhbmRvbSgpXG4gICAgbWF4X2NvdW50ICAgICAgID0gMWU0XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgcm91bmRzICAgICAgICAgPSAwXG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgLT5cbiAgICAgICAgcm91bmRzICs9IHN0YXRzLnJvdW5kc1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgdmFsaWRfcmUgICAgPSAvLy8gXiBbIDAtOSBdeyAzIH0gJCAvLy92XG4gICAgICBnZXRfcmFuZG9tICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogbnVsbCwgb25fc3RhdHMsIH1cbiAgICAgIGZvciBfIGluIFsgMSAuLiAxIF1cbiAgICAgICAgcmVzdWx0ICAgICAgPSBnZXRfcmFuZG9tLnNldF9vZl90ZXh0cyB7IG1pbjogJzAnLCBtYXg6ICc5JywgbGVuZ3RoOiAzLCBzaXplOiAxMCwgfVxuICAgICAgICBAZXEgKCDOqWJyYnJfXzM3ID0gLT4gcmVzdWx0LnNpemUgICAgICAgICAgICAgICksIDEwXG4gICAgICAgIGZvciByYW5kb21fdGV4dCBmcm9tIHJlc3VsdFxuICAgICAgICAgIEBlcSAoIM6pYnJicl9fMzggPSAtPiB2YWxpZF9yZS50ZXN0IHJhbmRvbV90ZXh0ICksIHRydWVcbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyX18zOScsIHJvdW5kcywgcnByIHJlc3VsdFxuICAgICAgICByb3VuZHMgPSAwXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9yYW5kb21fdGV4dF9vZl92YXJpYWJsZV9sZW5ndGg6IC0+XG4gICAgeyBHZXRfcmFuZG9tLFxuICAgICAgaW50ZXJuYWxzLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2dldF9yYW5kb20oKVxuICAgIG1hdGNoZXJzICAgICAgICA9IFsgJ861zqfOmicsICfOv869zq7PhicsICfOks6ZJywgJ86fzqDOn8+CzpsnLCAnzrcnLCAnz4jPiM6pzr8nLCAnzrrOnc61JywgJ86azrzOr866JywgJ8+FzpknLCAnzp/OmycsIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICByZXN1bHRfcm91bmRzICAgPSBudWxsXG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgPT5cbiAgICAgICAgIyBpbmZvICfOqWJyYnJfXzQwJywgc3RhdHNcbiAgICAgICAgcmVzdWx0X3JvdW5kcyA9IHN0YXRzLnJvdW5kc1xuICAgICAgICBAZXEgKCDOqWJyYnJfXzQxID0gLT4gcmVzdWx0X3JvdW5kcyA+PSAwICksIHRydWVcbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIG9uX3N0YXRzLCB9XG4gICAgICBmb3IgaWR4IGluIFsgMCAuLiA5IF1cbiAgICAgICAgcmVzdWx0ICAgICAgPSBnZXRfcmFuZG9tLnRleHQgeyBtaW46ICfOkScsIG1heDogJ8+JJywgbWluX2xlbmd0aDogMSwgbWF4X2xlbmd0aDogNSwgfVxuICAgICAgICAjIGRlYnVnICfOqWJyYnJfXzQyJywgcnByIHJlc3VsdFxuICAgICAgICBAZXEgKCDOqWJyYnJfXzQzID0gLT4gcmVzdWx0ICksIG1hdGNoZXJzWyBpZHggXVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRfcmFuZG9tX3RleHRfb2ZfdmFyaWFibGVfbGVuZ3RoX3dpdGhfZmlsdGVyOiAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfcmFuZG9tKClcbiAgICByZXN1bHRfbWF0Y2hlcnMgPSBbICfOkc66zrgnLCAnzpHOoycsICfOkc6cJywgJ86Rzq/Opc6UJywgJ86Rzq7OtM6bJywgJ86Rzq7Pgs60zqAnLCAnzpHOvs6hzqTOmCcsICfOkc6kzprOnicsICfOkc6zzrnOlM61JywgJ86Rzq4nLCBdXG4gICAgcm91bmRfbWF0Y2hlcnMgID0gWyAzNCwgMTUsIDE4OSwgMTIxLCA3NSwgNDcsIDg3LCA0MywgMTE5LCAyMDAsIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICByZXN1bHRfcm91bmRzICA9IG51bGxcbiAgICAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSA9PlxuICAgICAgICByZXR1cm4gbnVsbCB1bmxlc3Mgc3RhdHMubmFtZSBpcyAndGV4dCdcbiAgICAgICAgIyBpbmZvICfOqWJyYnJfXzQ0JywgaWR4LCBzdGF0c1xuICAgICAgICByZXN1bHRfcm91bmRzID0gc3RhdHMucm91bmRzXG4gICAgICAgIEBlcSAoIM6pYnJicl9fNDUgPSAtPiAgcmVzdWx0X3JvdW5kcyApLCByb3VuZF9tYXRjaGVyc1sgaWR4IF1cbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIG9uX3N0YXRzLCB9XG4gICAgICBmb3IgaWR4IGluIFsgMCAuLiA5IF1cbiAgICAgICAgcmVzdWx0ICAgICAgPSBnZXRfcmFuZG9tLnRleHQgeyBtaW46ICfOkScsIG1heDogJ8+JJywgbWluX2xlbmd0aDogMSwgbWF4X2xlbmd0aDogNSwgZmlsdGVyOiAvXs6RL3YsIH1cbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyX180NicsIHJwciByZXN1bHRcbiAgICAgICAgQGVxICggzqlicmJyX180NyA9IC0+IC9ezpFbzpEtz4ldezAsNH0kL3YudGVzdCByZXN1bHQgKSwgdHJ1ZVxuICAgICAgICBAZXEgKCDOqWJyYnJfXzQ4ID0gLT4gcmVzdWx0ICksIHJlc3VsdF9tYXRjaGVyc1sgaWR4IF1cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0X3JhbmRvbV90ZXh0X3Byb2R1Y2VyOiAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfcmFuZG9tKClcbiAgICByZXN1bHRfbWF0Y2hlcnMgPSBbICfOkc66zrgnLCAnzpHOoycsICfOkc6cJywgJ86Rzq/Opc6UJywgJ86Rzq7OtM6bJywgJ86Rzq7Pgs60zqAnLCAnzpHOvs6hzqTOmCcsICfOkc6kzprOnicsICfOkc6zzrnOlM61JywgJ86Rzq4nLCBdXG4gICAgcm91bmRfbWF0Y2hlcnMgID0gWyAzNCwgMTUsIDE4OSwgMTIxLCA3NSwgNDcsIDg3LCA0MywgMTE5LCAyMDAsIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICByZXN1bHRfcm91bmRzICA9IG51bGxcbiAgICAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSA9PlxuICAgICAgICByZXR1cm4gbnVsbCB1bmxlc3Mgc3RhdHMubmFtZSBpcyAndGV4dCdcbiAgICAgICAgIyBpbmZvICfOqWJyYnJfXzQ5JywgaWR4LCBzdGF0c1xuICAgICAgICByZXN1bHRfcm91bmRzID0gc3RhdHMucm91bmRzXG4gICAgICAgIEBlcSAoIM6pYnJicl9fNTAgPSAtPiAgcmVzdWx0X3JvdW5kcyApLCByb3VuZF9tYXRjaGVyc1sgaWR4IF1cbiAgICAgIGdldF9yYW5kb20gICAgICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCBvbl9zdGF0cywgfVxuICAgICAgZ2V0X3JhbmRvbV90ZXh0ID0gZ2V0X3JhbmRvbS50ZXh0X3Byb2R1Y2VyIHsgbWluOiAnzpEnLCBtYXg6ICfPiScsIG1pbl9sZW5ndGg6IDEsIG1heF9sZW5ndGg6IDUsIGZpbHRlcjogL17OkS92LCB9XG4gICAgICBmb3IgaWR4IGluIFsgMCAuLiA5IF1cbiAgICAgICAgcmVzdWx0ICAgICAgPSBnZXRfcmFuZG9tX3RleHQoKVxuICAgICAgICAjIGRlYnVnICfOqWJyYnJfXzUxJywgcnByIHJlc3VsdFxuICAgICAgICBAZXEgKCDOqWJyYnJfXzUyID0gLT4gL17OkVvOkS3PiV17MCw0fSQvdi50ZXN0IHJlc3VsdCApLCB0cnVlXG4gICAgICAgIEBlcSAoIM6pYnJicl9fNTMgPSAtPiByZXN1bHQgKSwgcmVzdWx0X21hdGNoZXJzWyBpZHggXVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRfcmFuZG9tX2Zsb2F0X3Byb2R1Y2VyOiAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfcmFuZG9tKClcbiAgICByZXN1bHRfbWF0Y2hlcnMgPSBbIDE2LjA4NDcxMjg0ODUzMjk0NSwgMTYuNDI1NjA3OTQwMTgyMDksIDE0LjAwOTE1MjA5OTAyNDUwNCwgMTguMTc0NjQyMTIxODg0OTcyLCAxMi44NjExNTAzMjYyMDcyOCwgMTAuMjA4MzAyODM0MDcxMjE5LCAxOC43NTMwOTE0NDg0NTIzMjQsIDEyLjQzMDE4MzIwOTk0NDUxNiwgMTIuNjI3NzE1MDU2Mjk2NDM4LCAxMi40MjUyNTkwNjc2NzY5NjEsIF1cbiAgICAjIHJvdW5kX21hdGNoZXJzICA9IFsgMzQsIDE1LCAxODksIDEyMSwgNzUsIDQ3LCA4NywgNDMsIDExOSwgMjAwLCBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgcmVzdWx0X3JvdW5kcyAgPSBudWxsXG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgPT5cbiAgICAgICAgcmV0dXJuIG51bGwgdW5sZXNzIHN0YXRzLm5hbWUgaXMgJ3RleHQnXG4gICAgICAgICMgaW5mbyAnzqlicmJyX181NCcsIGlkeCwgc3RhdHNcbiAgICAgICAgcmVzdWx0X3JvdW5kcyA9IHN0YXRzLnJvdW5kc1xuICAgICAgICBAZXEgKCDOqWJyYnJfXzU1ID0gLT4gIHJlc3VsdF9yb3VuZHMgKSwgcm91bmRfbWF0Y2hlcnNbIGlkeCBdXG4gICAgICBnZXRfcmFuZG9tICAgICAgICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCBvbl9zdGF0cywgfVxuICAgICAgZmlsdGVyICAgICAgICAgICAgPSAoIG4gKSAtPiAoIE1hdGguZmxvb3IgbiApICUlIDIgaXMgMFxuICAgICAgZ2V0X3JhbmRvbV9mbG9hdCAgPSBnZXRfcmFuZG9tLmZsb2F0X3Byb2R1Y2VyIHsgbWluOiAxMCwgbWF4OiAyMCwgZmlsdGVyLCB9XG4gICAgICBmb3IgaWR4IGluIFsgMCAuLiA5IF1cbiAgICAgICAgcmVzdWx0ICAgICAgPSBnZXRfcmFuZG9tX2Zsb2F0KClcbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyX181NicsIHJwciByZXN1bHRcbiAgICAgICAgQGVxICggzqlicmJyX181NyA9IC0+IHJlc3VsdCApLCByZXN1bHRfbWF0Y2hlcnNbIGlkeCBdXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9yYW5kb21faW50ZWdlcl9wcm9kdWNlcjogLT5cbiAgICB7IEdldF9yYW5kb20sXG4gICAgICBpbnRlcm5hbHMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X3JhbmRvbSgpXG4gICAgcmVzdWx0X21hdGNoZXJzID0gWyAxNiwgMTYsIDE0LCAxMiwgMTgsIDE4LCAyMCwgMTAsIDEyLCAxMiwgXVxuICAgIHJvdW5kc19tYXRjaGVyICA9IFsgMCwgMCwgMCwgMCwgMSwgMCwgMSwgMSwgMiwgMSBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgbXlfb25fc3RhdHMgICAgICAgICA9ICggc3RhdHMgKSA9PlxuICAgICAgICAjIGRlYnVnICfOqWJyYnJfXzU4Jywgc3RhdHNcbiAgICAgICAgcm91bmRzLnB1c2ggc3RhdHMucm91bmRzIGlmIHN0YXRzLm5hbWUgaXMgJ2ludGVnZXInXG4gICAgICByb3VuZHMgICAgICAgICAgICAgPSBbXVxuICAgICAgZ2V0X3JhbmRvbSAgICAgICAgICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCBvbl9zdGF0czogbXlfb25fc3RhdHMsIH1cbiAgICAgIGZpbHRlciAgICAgICAgICAgICAgPSAoIG4gKSAtPiAoIE1hdGguZmxvb3IgbiApICUlIDIgaXMgMFxuICAgICAgZ2V0X3JhbmRvbV9pbnRlZ2VyICA9IGdldF9yYW5kb20uaW50ZWdlcl9wcm9kdWNlciB7IG1pbjogMTAsIG1heDogMjAsIGZpbHRlciwgfVxuICAgICAgIyBkZWJ1ZyAnzqlicmJyX181OScsIGdldF9yYW5kb20uY2ZnXG4gICAgICBmb3IgaWR4IGluIFsgMCAuLiA5IF1cbiAgICAgICAgcmVzdWx0ID0gZ2V0X3JhbmRvbV9pbnRlZ2VyKClcbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyX182MCcsIHJwciByZXN1bHRcbiAgICAgICAgQGVxICggzqlicmJyX182MSA9IC0+IHJlc3VsdCApLCByZXN1bHRfbWF0Y2hlcnNbIGlkeCBdXG4gICAgICBAZXEgKCDOqWJyYnJfXzYyID0gLT4gcm91bmRzICksIHJvdW5kc19tYXRjaGVyXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9yYW5kb21fc2V0X29mX3RleHRzX29mX3ZhcmlhYmxlX2xlbmd0aDogLT5cbiAgICB7IEdldF9yYW5kb20sXG4gICAgICBpbnRlcm5hbHMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X3JhbmRvbSgpXG4gICAgIyBtYXRjaGVycyAgICAgICAgPSBbICfOtc6nzponLCAnzr/Ovc6uz4YnLCAnzpLOmScsICfOn86gzp/Pgs6bJywgJ863JywgJ8+Iz4jOqc6/JywgJ866zp3OtScsICfOms68zq/OuicsICfPhc6ZJywgJ86fzpsnLCBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgcmVzdWx0X3JvdW5kcyAgPSBudWxsXG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgPT5cbiAgICAgICAgaW5mbyAnzqlicmJyX182MycsIHN0YXRzIGlmIHN0YXRzLm5hbWUgaXMgJ3NldF9vZl90ZXh0cydcbiAgICAgICAgcmVzdWx0X3JvdW5kcyA9IHN0YXRzLnJvdW5kcyBpZiBzdGF0cy5uYW1lIGlzICdzZXRfb2ZfdGV4dHMnXG4gICAgICAgIEBlcSAoIM6pYnJicl9fNjQgPSAtPiByZXN1bHRfcm91bmRzID49IDAgKSwgdHJ1ZVxuICAgICAgZ2V0X3JhbmRvbSAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgb25fc3RhdHMsIH1cbiAgICAgIG1hdGNoZXJzICAgID0gW1xuICAgICAgICBuZXcgU2V0IFsgJ+K+ieK9leK8ouK+l+K+ruK+qScsICfiv4vivL3ivITivKDivrrivLQnLCAn4ry04r684rymJywgJ+K+j+K+micsICfiv5PivZvivrHivbPivp3ivK3ivojivpzivKPivqUnLCBdXG4gICAgICAgIG5ldyBTZXQgWyAn4r6d4ryl4r+H4rye4ryt4ry1JywgJ+K9kOK8uOK9uicsICfivJTiv5PivIzivqPivoXivrLivYHivI0nLCAn4r2y4ryp4ryR4r+MJywgJ+K8qeK+tuK8leK9k+K9kCcsIF1cbiAgICAgICAgbmV3IFNldCBbICfivKLiv4DivrPiv5XivJTiv4DivJfivonivZQnLCAn4r6H4r6a4ryg4ryY4ry84r6QJywgJ+K8j+K/ieK+nOK8puK+nOK8huK9nicsICfivY3ivaDivr/ivJTivJfiv44nLCAn4r6H4r2k4r+D4r6F4r2L4r6OJywgXVxuICAgICAgICBuZXcgU2V0IFsgJ+K8mOK8guK+m+K+luK8qOK+m+K+nCcsICfivYnivJviv4nivJjiv5LivYLivKvivZfivpwnLCAn4ryU4r+L4r+EJywgJ+K8n+K8heK8juK+guK8ruK9teK+vuK+vOK9lCcsICfivqjivanivpDivIrivILivYYnLCBdXG4gICAgICAgIG5ldyBTZXQgWyAn4r2/4r2p4r2KJywgJ+K8veK+luK+nOK+tuK+qeK+ricsICfivrbivK7ivoMnLCAn4r2/4r244r694ryh4r274r6K4ry2JywgJ+K9huK8oOK9tOK8v+K8vOK8v+K9q+K+iCcsIF1cbiAgICAgICAgbmV3IFNldCBbICfivaMnLCAn4r6x4r274r2A4r2b4r694r6y4rym4r624ry5JywgJ+K8leK9l+K8jOK8luK9veK9puK9jicsICfivZrivozivL7ivozivKfivJvivLknLCAn4r6C4ryj4r+BJywgXVxuICAgICAgICBuZXcgU2V0IFsgJ+K+mOK9suK+n+K9pOK8mCcsICfivoHivqfivZzivJXivrDivpDivKknLCAn4ryx4r6R4r+D4r+S4ry94ryZJywgJ+K/j+K+sOK+k+K8kOK8iCcsICfivZjivZfivb3ivJjiv4AnLCBdXG4gICAgICAgIG5ldyBTZXQgWyAn4r2z4ryx4ryk4r6+4r234r6g4ry/4r6VJywgJ+K8m+K8guK/g+K8tuK8reK8qycsICfivKvivoDivoTiv4vivI/ivL4nLCAn4r2B4ry94ry54r6v4r+D4r2u4r6z4r2R4r2p4r2TJywgJ+K8r+K9juK+seK9q+K9qeK+sycsIF1cbiAgICAgICAgbmV3IFNldCBbICfivLfivpXivIjivLbivanivb/ivqHivIPivpwnLCAn4r6x4r+H4r6e4r604r2dJywgJ+K+tScsICfivbviv5TivYDiv47ivpHivYzivKTivZgnLCAn4r+K4ryt4ryz4r+S4ryQ4r2l4r2Z4r6y4r2fJywgXVxuICAgICAgICBuZXcgU2V0IFsgJ+K9o+K9qicsICfivZnivJ/ivbDivpcnLCAn4r2wJywgJ+K8tOK/keK+geK9uicsICfivpDivYzivqDivq3ivZgnLCBdXG4gICAgICAgIF1cbiAgICAgIGZvciBpZHggaW4gWyAwIC4uIDkgXVxuICAgICAgICByZXN1bHQgPSBnZXRfcmFuZG9tLnNldF9vZl90ZXh0cyB7IG1pbjogJ+K8gCcsIG1heDogJ+K/lScsIHNpemU6IDUsIG1pbl9sZW5ndGg6IDEsIG1heF9sZW5ndGg6IDEwLCB9XG4gICAgICAgIEBlcSAoIM6pYnJicl9fNjUgPSAtPiByZXN1bHQgKSwgbWF0Y2hlcnNbIGlkeCBdXG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fNjYnLCByZXN1bHRcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXN1bHRfcm91bmRzICA9IG51bGxcbiAgICAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSA9PlxuICAgICAgICAjIGRlYnVnICfOqWJyYnJfMTYxJywgc3RhdHNcbiAgICAgICAgcmV0dXJuIG51bGwgdW5sZXNzIHN0YXRzLm5hbWUgaXMgJ3dhbGtfdW5pcXVlJ1xuICAgICAgICByZXN1bHRfcm91bmRzID0gc3RhdHMucm91bmRzXG4gICAgICAgICMgZGVidWcgJ86pYnJicl8xNjEnLCByZXN1bHRfcm91bmRzXG4gICAgICAgIEBlcSAoIM6pYnJicl9fNjcgPSAtPiByZXN1bHRfcm91bmRzICksIG1hdGNoZXJzWyBpZHggXS5yZXN1bHRfcm91bmRzXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIG9uX3N0YXRzLCB9XG4gICAgICBtYXRjaGVycyAgICA9IFtcbiAgICAgICAgeyByZXN1bHRfcm91bmRzOiAgNCwgcmVzdWx0X3JwcjogJzU2NDE3OTMwODInLCB9XG4gICAgICAgIHsgcmVzdWx0X3JvdW5kczogNjMsIHJlc3VsdF9ycHI6ICcyODE2Nzk0NTMwJywgfVxuICAgICAgICB7IHJlc3VsdF9yb3VuZHM6IDExLCByZXN1bHRfcnByOiAnNDUzODE5NjA3MicsIH1cbiAgICAgICAgeyByZXN1bHRfcm91bmRzOiAyMCwgcmVzdWx0X3JwcjogJzc4MzE5MjQwNTYnLCB9XG4gICAgICAgIHsgcmVzdWx0X3JvdW5kczogNzYsIHJlc3VsdF9ycHI6ICcwMzI1NDY3ODE5JywgfVxuICAgICAgICB7IHJlc3VsdF9yb3VuZHM6ICA3LCByZXN1bHRfcnByOiAnMzE0OTc2MDU4MicsIH1cbiAgICAgICAgeyByZXN1bHRfcm91bmRzOiAyMCwgcmVzdWx0X3JwcjogJzI4NTczNjEwOTQnLCB9XG4gICAgICAgIHsgcmVzdWx0X3JvdW5kczogMzEsIHJlc3VsdF9ycHI6ICc0NTIzNzg2MDkxJywgfVxuICAgICAgICB7IHJlc3VsdF9yb3VuZHM6IDEzLCByZXN1bHRfcnByOiAnNDgxMzU2MDI5NycsIH1cbiAgICAgICAgeyByZXN1bHRfcm91bmRzOiAxOSwgcmVzdWx0X3JwcjogJzc0OTEwNjU4MjMnLCB9XG4gICAgICAgIF1cbiAgICAgIGZvciBpZHggaW4gWyAwIC4uIDkgXVxuICAgICAgICByZXN1bHQgICAgICA9IGdldF9yYW5kb20uc2V0X29mX3RleHRzIHsgbWluOiAnMCcsIG1heDogJzknLCBzaXplOiAxMCwgbGVuZ3RoOiAxLCBvbl9zdGF0cywgfVxuICAgICAgICAjIGRlYnVnICfOqWJyYnJfXzY4JywgcnByIHJlc3VsdFxuICAgICAgICByZXN1bHRfcnByICA9IFsgcmVzdWx0Li4uLCBdLmpvaW4gJydcbiAgICAgICAgQGVxICggzqlicmJyX182OSA9IC0+IHJlc3VsdF9ycHIgICAgICksIG1hdGNoZXJzWyBpZHggXS5yZXN1bHRfcnByXG4gICAgICAgICMgQGVxICggzqlicmJyX183MCA9IC0+IHJlc3VsdF9yb3VuZHMgKSwgbWF0Y2hlcnNbIGlkeCBdLnJlc3VsdF9yb3VuZHNcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZXhoYXVzdGlvbjogLT5cbiAgICB7IEdldF9yYW5kb20sXG4gICAgICBpbnRlcm5hbHMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X3JhbmRvbSgpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgcmVzdWx0X3JvdW5kcyAgPSBudWxsXG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgPT5cbiAgICAgICAgIyBpbmZvICfOqWJyYnJfXzcxJywgc3RhdHMgaWYgc3RhdHMubmFtZSBpcyAnd2FsaydcbiAgICAgICAgIyByZXN1bHRfcm91bmRzID0gc3RhdHMucm91bmRzIGlmIHN0YXRzLm5hbWUgaXMgJ3dhbGsnXG4gICAgICAgICMgQGVxICggzqlicmJyX183MiA9IC0+IHJlc3VsdF9yb3VuZHMgPj0gMCApLCB0cnVlXG4gICAgICBnZXRfcmFuZG9tICAgICAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgb25fc3RhdHMsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgY2ZnID1cbiAgICAgICAgbWluOiAgICAgICAgICAgICdBJ1xuICAgICAgICBtYXg6ICAgICAgICAgICAgJ1onXG4gICAgICAgIGxlbmd0aDogICAgICAgICAzXG4gICAgICAgIGZpbHRlcjogICAgICAgICAvXlthLXpdezN9JC9cbiAgICAgICAgb25fZXhoYXVzdGlvbjogJ2Vycm9yJ1xuICAgICAgQHRocm93cyAoIM6pYnJicl9fNzMgPSAtPiBnZXRfcmFuZG9tLnRleHQgY2ZnICksIC9leGhhdXN0ZWQvXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHJlc3VsdF9yb3VuZHMgID0gbnVsbFxuICAgICAgb25fc3RhdHMgICAgICAgID0gKCBzdGF0cyApID0+XG4gICAgICAgICMgaW5mbyAnzqlicmJyX183NCcsIHN0YXRzIGlmIHN0YXRzLm5hbWUgaXMgJ3dhbGsnXG4gICAgICAgICMgcmVzdWx0X3JvdW5kcyA9IHN0YXRzLnJvdW5kcyBpZiBzdGF0cy5uYW1lIGlzICd3YWxrJ1xuICAgICAgICAjIEBlcSAoIM6pYnJicl9fNzUgPSAtPiByZXN1bHRfcm91bmRzID49IDAgKSwgdHJ1ZVxuICAgICAgZ2V0X3JhbmRvbSAgICAgID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIG9uX3N0YXRzLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGNmZyA9XG4gICAgICAgIG1pbjogICAgICAgICAgICAnQSdcbiAgICAgICAgbWF4OiAgICAgICAgICAgICdaJ1xuICAgICAgICBsZW5ndGg6ICAgICAgICAgM1xuICAgICAgICBmaWx0ZXI6ICAgICAgICAgL15bYS16XXszfSQvXG4gICAgICAgIG9uX2V4aGF1c3Rpb246IC0+IG51bGxcbiAgICAgIEBlcSAoIM6pYnJicl9fNzYgPSAtPiBnZXRfcmFuZG9tLnRleHQgY2ZnICksIG51bGxcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgd2FsazogLT5cbiAgICB7IEdldF9yYW5kb20sXG4gICAgICBpbnRlcm5hbHMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X3JhbmRvbSgpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgaWR4ICAgICAgICAgICAgID0gLTFcbiAgICAgIGdldF9yYW5kb20gICAgICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCBvbl9zdGF0cywgfVxuICAgICAgb25fc3RhdHMgICAgICAgID0gKCBzdGF0cyApID0+XG4gICAgICAgICMgaW5mbyAnzqlicmJyX183NycsIGlkeCwgc3RhdHMgIyBpZiBzdGF0cy5uYW1lIGlzICd3YWxrJ1xuICAgICAgICBpZiBzdGF0cy5uYW1lIGlzICd3YWxrJ1xuICAgICAgICAgIEBlcSAoIM6pYnJicl9fNzggPSAtPiBzdGF0cy5yb3VuZHMgKSwgbWF0Y2hlci5yb3VuZHNcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmVzdWx0ICAgID1cbiAgICAgICAgdmFsdWVzOiAgIFtdXG4gICAgICBtYXRjaGVyICAgPVxuICAgICAgICB2YWx1ZXM6ICAgWyAnxILEjcOAJywgJ3TEosWFJywgJ8S+w6bFsScsICdIcMWXJywgJ8Wael4nLCAnxJbEp8W7JywgJ8W8w4nFiScsICfDrcSsxIwnLCAnxKl1xLcnLCAnw6zEq3gnLCAnxaptfCcgXVxuICAgICAgICByb3VuZHM6ICAgMFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBwcm9kdWNlciAgPSAtPiBnZXRfcmFuZG9tLnRleHQgeyBtaW46ICdBJywgbWF4OiAweDAxN2YsIGxlbmd0aDogMywgb25fc3RhdHMsIH1cbiAgICAgIGZvciB2YWx1ZSBmcm9tIGdldF9yYW5kb20ud2FsayB7IHByb2R1Y2VyLCBuOiAxMSwgb25fc3RhdHMsIH1cbiAgICAgICAgaWR4KytcbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyX183OScsIGlkeCwgcnByIHZhbHVlXG4gICAgICAgIHJlc3VsdC52YWx1ZXMucHVzaCB2YWx1ZVxuICAgICAgICBAZXEgKCDOqWJyYnJfXzgwID0gLT4gdmFsdWUgKSwgbWF0Y2hlci52YWx1ZXNbIGlkeCBdXG4gICAgICBAZXEgKCDOqWJyYnJfXzgxID0gLT4gaWR4ICAgICAgICAgICAgICAgICAgICApLCAxMFxuICAgICAgQGVxICggzqlicmJyX184MiA9IC0+IHJlc3VsdC52YWx1ZXMubGVuZ3RoICAgKSwgMTFcbiAgICAgIHJldHVybiBudWxsXG4gICAgIyAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgZG8gPT5cbiAgICAjICAgZ2V0X3JhbmRvbSAgICAgID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIG9uX3N0YXRzLCB9XG4gICAgIyAgIHJlc3VsdF9yb3VuZHMgID0gbnVsbFxuICAgICMgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgPT5cbiAgICAjICAgICBpbmZvICfOqWJyYnJfXzgzJywgc3RhdHMgaWYgc3RhdHMubmFtZSBpcyAnd2FsaydcbiAgICAjICAgICByZXN1bHRfcm91bmRzID0gc3RhdHMucm91bmRzIGlmIHN0YXRzLm5hbWUgaXMgJ3dhbGsnXG4gICAgIyAgICAgQGVxICggzqlicmJyX184NCA9IC0+IHJlc3VsdF9yb3VuZHMgPj0gMCApLCB0cnVlXG4gICAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgICBwcm9kdWNlciAgPSAtPiBnZXRfcmFuZG9tLnRleHQgeyBtaW46ICcwJywgbWF4OiAnOScsIGxlbmd0aDogMSwgfVxuICAgICMgICBjb3VudCAgICAgPSAwXG4gICAgIyAgIHNlZW4gICAgICA9IG5ldyBTZXQoKVxuICAgICMgICBmb3IgeCBmcm9tIGdldF9yYW5kb20ud2FsayB7IHByb2R1Y2VyLCBzZWVuLCBuOiA1LCB9XG4gICAgIyAgICAgY291bnQrK1xuICAgICMgICAgIGRlYnVnICfOqWJyYnJfXzg1JywgY291bnQsIHJwciB4XG4gICAgIyAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgd2Fsa191bmlxdWU6IC0+XG4gICAgeyBHZXRfcmFuZG9tLFxuICAgICAgaW50ZXJuYWxzLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2dldF9yYW5kb20oKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGdldF9yYW5kb20gICAgICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCBvbl9zdGF0cywgfVxuICAgICAgbWF0Y2hlcnMgICAgICAgID0gWyAxNSwgMTYsIDE0LCAxMSwgMTcsIDE5LCAxMywgMTAsIDE4LCAxMiwgXVxuICAgICAgb25fc3RhdHMgICAgICAgID0gKCBzdGF0cyApID0+XG4gICAgICAgICMgaW5mbyAnzqlicmJyX184NicsIHN0YXRzXG4gICAgICAgIEBlcSAoIM6pYnJicl9fODcgPSAtPiBzdGF0cy5yb3VuZHMgKSwgNCBpZiBzdGF0cy5uYW1lIGlzICd3YWxrX3VuaXF1ZSdcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcHJvZHVjZXIgID0gLT4gZ2V0X3JhbmRvbS5pbnRlZ2VyIHsgbWluOiAxMCwgbWF4OiAxOSwgb25fc3RhdHMsIH1cbiAgICAgIGlkeCAgICAgICA9IC0xXG4gICAgICBmb3IgdmFsdWUgZnJvbSBnZXRfcmFuZG9tLndhbGtfdW5pcXVlIHsgcHJvZHVjZXIsIG46IDEwLCBvbl9zdGF0cywgfVxuICAgICAgICBpZHgrK1xuICAgICAgICAjIGRlYnVnICfOqWJyYnJfXzg4JywgaWR4LCBycHIgdmFsdWVcbiAgICAgICAgQGVxICggzqlicmJyX184OSA9IC0+IHZhbHVlICksIG1hdGNoZXJzWyBpZHggXVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBnZXRfcmFuZG9tICAgICAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgb25fc3RhdHMsIH1cbiAgICAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSA9PlxuICAgICAgICBAZXEgKCDOqWJyYnJfXzkwID0gLT4gc3RhdHMucm91bmRzICksIDQgaWYgc3RhdHMubmFtZSBpcyAnd2Fsa191bmlxdWUnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHByb2R1Y2VyICA9IC0+IGdldF9yYW5kb20uaW50ZWdlciB7IG1pbjogMTAsIG1heDogMTksIG9uX3N0YXRzLCB9XG4gICAgICBAdGhyb3dzICggzqlicmJyX185MSA9IC0+IHZhbHVlIGZvciB2YWx1ZSBmcm9tIGdldF9yYW5kb20ud2Fsa191bmlxdWUgeyBwcm9kdWNlciwgbjogMTEsIG9uX3N0YXRzLCB9ICksIC9leGhhdXN0ZWQvXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGdldF9yYW5kb20gICAgICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCBvbl9zdGF0cywgfVxuICAgICAgbWF0Y2hlcnMgICAgICAgID0gWyAxNSwgMTYsIDE0LCAxMSwgMTcsIDE5LCAxMywgMTAsIDE4LCAxMiwgXVxuICAgICAgb25fc3RhdHMgICAgICAgID0gKCBzdGF0cyApID0+XG4gICAgICAgICMgaW5mbyAnzqlicmJyX185MicsIHN0YXRzXG4gICAgICAgIEBlcSAoIM6pYnJicl9fOTMgPSAtPiBzdGF0cy5yb3VuZHMgKSwgZ2V0X3JhbmRvbS5jZmcubWF4X3JvdW5kcyArIDEgaWYgc3RhdHMubmFtZSBpcyAnd2Fsa191bmlxdWUnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHByb2R1Y2VyICA9IC0+IGdldF9yYW5kb20uaW50ZWdlciB7IG1pbjogMTAsIG1heDogMTksIG9uX3N0YXRzLCB9XG4gICAgICBpZHggICAgICAgPSAtMVxuICAgICAgZm9yIHZhbHVlIGZyb20gZ2V0X3JhbmRvbS53YWxrX3VuaXF1ZSB7IHByb2R1Y2VyLCBuOiAyMCwgb25fc3RhdHMsIG9uX2V4aGF1c3Rpb246ICdzdG9wJywgfVxuICAgICAgICBpZHgrK1xuICAgICAgICAjIGRlYnVnICfOqWJyYnJfXzk0JywgaWR4LCBycHIgdmFsdWVcbiAgICAgICAgQGVxICggzqlicmJyX185NSA9IC0+IHZhbHVlICksIG1hdGNoZXJzWyBpZHggXVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBnZXRfcmFuZG9tICAgICAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgb25fc3RhdHMsIH1cbiAgICAgIG1hdGNoZXJzICAgICAgICA9ICfCqMKveUTCvsOWw5HDtWAlQcOjVlvDpUg1wrbDgsO8w73DmcOFT8Kuw4NFw43DhEfDsT9YSXRaLcOLwqzDmmQua0syw7ZKw542d3PDr8Opw5zDvznCsHjCp8OBQl/Ct8OAMMOyJnHDqDjDt8OswqtuwrXCslwiwr3DnW08w7NlTXtRw61AUMOnw5ArasKlw59ewqnDpkPCocKxw5NpYixjXFxcXMKzN8Kjcn5hw6rCv8OHOsOOU3rDucOYwroofFTCvMKmwqovw7p1wqLDm1nCpMOJI8Oww77DuMK4b0ZVMX1wJFfCoMOVw7Q0w4zDpMOIw6s+w492w5dMUl1mZ1xcJ8OuwrTCucO7w5LDosOKKcK7aMOUITvDoCpOw6HDhj0zbCdcbiAgICAgIHJlc3VsdHMgICAgICAgICA9IFtdXG4gICAgICBtYXhfcm91bmRzICAgICAgPSAxXzAwMFxuICAgICAgb25fc3RhdHMgICAgICAgID0gKCBzdGF0cyApID0+XG4gICAgICAgICMgaW5mbyAnzqlicmJyX185NicsIHN0YXRzXG4gICAgICAgIEBlcSAoIM6pYnJicl9fOTcgPSAtPiBzdGF0cy5yb3VuZHMgKSwgbWF4X3JvdW5kcyArIDEgaWYgc3RhdHMubmFtZSBpcyAnd2Fsa191bmlxdWUnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHByb2R1Y2VyICA9IC0+IGdldF9yYW5kb20uY2hyIHsgbWluOiAweDIwLCBtYXg6IDB4ZmYsIG9uX3N0YXRzLCB9XG4gICAgICBpZHggICAgICAgPSAtMVxuICAgICAgZm9yIHZhbHVlIGZyb20gZ2V0X3JhbmRvbS53YWxrX3VuaXF1ZSB7IHByb2R1Y2VyLCBuOiAyMDAsIG9uX3N0YXRzLCBvbl9leGhhdXN0aW9uOiAnc3RvcCcsIG1heF9yb3VuZHMsIH1cbiAgICAgICAgaWR4KytcbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyX185OCcsIGlkeCwgcnByIHZhbHVlXG4gICAgICAgIEBlcSAoIM6pYnJicl9fOTkgPSAtPiB2YWx1ZSApLCBtYXRjaGVyc1sgaWR4IF1cbiAgICAgICAgcmVzdWx0cy5wdXNoIHZhbHVlXG4gICAgICAjIGRlYnVnICfOqWJyYnJfMTAwJywgcnByIHJlc3VsdHMuam9pbiAnJ1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBnZXRfcmFuZG9tICAgICAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgb25fc3RhdHMsIH1cbiAgICAgIG1hdGNoZXJzICAgICAgICA9ICfCu2jDlCE7w6AqTsOhw4Y9M2wnXG4gICAgICByZXN1bHRzICAgICAgICAgPSBbXVxuICAgICAgbWF4X3JvdW5kcyAgICAgID0gMV8wMDBcbiAgICAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSA9PlxuICAgICAgICAjIGluZm8gJ86pYnJicl8xMDEnLCBzdGF0c1xuICAgICAgICBAZXEgKCDOqWJyYnJfMTAyID0gLT4gc3RhdHMucm91bmRzICksIG1heF9yb3VuZHMgKyAxIGlmIHN0YXRzLm5hbWUgaXMgJ3dhbGtfdW5pcXVlJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzZWVuICAgICAgPSBuZXcgU2V0ICfCqMKveUTCvsOWw5HDtWAlQcOjVlvDpUg1wrbDgsO8w73DmcOFT8Kuw4NFw43DhEfDsT9YSXRaLcOLwqzDmmQua0syw7ZKw542d3PDr8Opw5zDvznCsHjCp8OBQl/Ct8OAMMOyJnHDqDjDt8OswqtuwrXCslwiwr3DnW08w7NlTXtRw61AUMOnw5ArasKlw59ewqnDpkPCocKxw5NpYixjXFxcXMKzN8Kjcn5hw6rCv8OHOsOOU3rDucOYwroofFTCvMKmwqovw7p1wqLDm1nCpMOJI8Oww77DuMK4b0ZVMX1wJFfCoMOVw7Q0w4zDpMOIw6s+w492w5dMUl1mZ1xcJ8OuwrTCucO7w5LDosOKKSdcbiAgICAgIHByb2R1Y2VyICA9IC0+IGdldF9yYW5kb20uY2hyIHsgbWluOiAweDIwLCBtYXg6IDB4ZmYsIG9uX3N0YXRzLCB9XG4gICAgICBpZHggICAgICAgPSAtMVxuICAgICAgZm9yIHZhbHVlIGZyb20gZ2V0X3JhbmRvbS53YWxrX3VuaXF1ZSB7IHByb2R1Y2VyLCBuOiAyMDAsIHNlZW4sIG9uX3N0YXRzLCBvbl9leGhhdXN0aW9uOiAnc3RvcCcsIG1heF9yb3VuZHMsIH1cbiAgICAgICAgaWR4KytcbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyXzEwMycsIGlkeCwgcnByIHZhbHVlXG4gICAgICAgIEBlcSAoIM6pYnJicl8xMDQgPSAtPiB2YWx1ZSApLCBtYXRjaGVyc1sgaWR4IF1cbiAgICAgICAgcmVzdWx0cy5wdXNoIHZhbHVlXG4gICAgICAjIGRlYnVnICfOqWJyYnJfMTA1JywgcnByIHJlc3VsdHMuam9pbiAnJ1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBnZXRfcmFuZG9tICAgICAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgb25fc3RhdHMsIH1cbiAgICAgIG1hdGNoZXJzICAgICAgICA9ICdwcWtlc3VueWhiZXdnY3Jzemx2b2Zxc2V0J1xuICAgICAgcmVzdWx0cyAgICAgICAgID0gW11cbiAgICAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSA9PlxuICAgICAgICAjIGluZm8gJ86pYnJicl8xMDYnLCBzdGF0c1xuICAgICAgICBAZXEgKCDOqWJyYnJfMTA3ID0gLT4gc3RhdHMucm91bmRzICksIDcgaWYgc3RhdHMubmFtZSBpcyAnd2Fsa191bmlxdWUnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNlZW4gICAgICA9IG5ldyBTZXQoKVxuICAgICAgcHVydmlldyAgID0gNSAjIyMgTk9URSBtYXhpbXVtIHNpemUgb2YgJ3dpbmRvdycgd2hlcmUgdW5xaXVlbmVzcyBpcyBndWFyYW50ZWVkOyBgc2VlbmAgd2lsbCBub3QgZ3JvdyBiZXlvbmQgdGhpcyAjIyNcbiAgICAgIHByb2R1Y2VyICA9IC0+IGdldF9yYW5kb20uY2hyIHsgbWluOiAnYScsIG1heDogJ3onLCBvbl9zdGF0cywgfVxuICAgICAgaWR4ICAgICAgID0gLTFcbiAgICAgIGZvciB2YWx1ZSBmcm9tIGdldF9yYW5kb20ud2Fsa191bmlxdWUgeyBwcm9kdWNlciwgbjogMjUsIHNlZW4sIHB1cnZpZXcsIG9uX3N0YXRzLCBvbl9leGhhdXN0aW9uOiAnc3RvcCcsIH1cbiAgICAgICAgaWR4KytcbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyXzEwOCcsIGlkeCwgcnByIHZhbHVlXG4gICAgICAgIEBlcSAoIM6pYnJicl8xMDkgPSAtPiB2YWx1ZSApLCBtYXRjaGVyc1sgaWR4IF1cbiAgICAgICAgcmVzdWx0cy5wdXNoIHZhbHVlXG4gICAgICBAZXEgKCDOqWJyYnJfMTEwID0gLT4gWyBzZWVuLi4uLCBdLmpvaW4gJycgKSwgJ29mcXNldCdcbiAgICAgIEBlcSAoIM6pYnJicl8xMTEgPSAtPiBzZWVuLnNpemUgKSwgcHVydmlldyArIDFcbiAgICAgICMgZGVidWcgJ86pYnJicl8xMTInLCBycHIgcmVzdWx0cy5qb2luICcnXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGdldF9yYW5kb20gICAgICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCBvbl9zdGF0cywgfVxuICAgICAgbWF0Y2hlcnMgICAgICAgID0gJzQzMjU2MTQzMjU2MTQzMjU2MTQzMjU2MTQnXG4gICAgICByZXN1bHRzICAgICAgICAgPSBbXVxuICAgICAgb25fc3RhdHMgICAgICAgID0gKCBzdGF0cyApID0+XG4gICAgICAgICMgaW5mbyAnzqlicmJyXzExMycsIHN0YXRzXG4gICAgICAgIEBlcSAoIM6pYnJicl8xMTQgPSAtPiBzdGF0cy5yb3VuZHMgKSwgNjQgaWYgc3RhdHMubmFtZSBpcyAnd2Fsa191bmlxdWUnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNlZW4gICAgICA9IG5ldyBTZXQoKVxuICAgICAgcHVydmlldyAgID0gNSAjIyMgTk9URSBtYXhpbXVtIHNpemUgb2YgJ3dpbmRvdycgd2hlcmUgdW5xaXVlbmVzcyBpcyBndWFyYW50ZWVkOyBgc2VlbmAgd2lsbCBub3QgZ3JvdyBiZXlvbmQgdGhpcyAjIyNcbiAgICAgIHByb2R1Y2VyICA9IC0+IGdldF9yYW5kb20uY2hyIHsgbWluOiAnMScsIG1heDogJzYnLCBvbl9zdGF0cywgfVxuICAgICAgaWR4ICAgICAgID0gLTFcbiAgICAgIGZvciB2YWx1ZSBmcm9tIGdldF9yYW5kb20ud2Fsa191bmlxdWUgeyBwcm9kdWNlciwgbjogMjUsIHNlZW4sIHB1cnZpZXcsIG9uX3N0YXRzLCBvbl9leGhhdXN0aW9uOiAnc3RvcCcsIH1cbiAgICAgICAgaWR4KytcbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyXzExNScsIGlkeCwgcnByIHZhbHVlXG4gICAgICAgIEBlcSAoIM6pYnJicl8xMTYgPSAtPiB2YWx1ZSApLCBtYXRjaGVyc1sgaWR4IF1cbiAgICAgICAgcmVzdWx0cy5wdXNoIHZhbHVlXG4gICAgICBAZXEgKCDOqWJyYnJfMTE3ID0gLT4gWyBzZWVuLi4uLCBdLmpvaW4gJycgKSwgJzMyNTYxNCdcbiAgICAgIEBlcSAoIM6pYnJicl8xMTggPSAtPiBzZWVuLnNpemUgKSwgcHVydmlldyArIDFcbiAgICAgICMgZGVidWcgJ86pYnJicl8xMTknLCBycHIgcmVzdWx0cy5qb2luICcnXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGdldF9yYW5kb20gICAgICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCBvbl9zdGF0cywgfVxuICAgICAgbWF0Y2hlcnMgICAgICAgID0gJzUzMjY0NzEzMjY1NzQzMjE2NTQ3MjM2NTE3MjQzNjUxMjczNjU0MTIzNjU0MSdcbiAgICAgIHJlc3VsdHMgICAgICAgICA9IFtdXG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgPT5cbiAgICAgICAgIyBpbmZvICfOqWJyYnJfMTIwJywgc3RhdHNcbiAgICAgICAgQGVxICggzqlicmJyXzEyMSA9IC0+IHN0YXRzLnJvdW5kcyApLCAxMjkgaWYgc3RhdHMubmFtZSBpcyAnd2Fsa191bmlxdWUnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNlZW4gICAgICA9IG5ldyBTZXQoKVxuICAgICAgcHVydmlldyAgID0gNSAjIyMgTk9URSBtYXhpbXVtIHNpemUgb2YgJ3dpbmRvdycgd2hlcmUgdW5xaXVlbmVzcyBpcyBndWFyYW50ZWVkOyBgc2VlbmAgd2lsbCBub3QgZ3JvdyBiZXlvbmQgdGhpcyAjIyNcbiAgICAgIHByb2R1Y2VyICA9IC0+IGdldF9yYW5kb20uY2hyIHsgbWluOiAnMScsIG1heDogJzcnLCBvbl9zdGF0cywgfVxuICAgICAgaWR4ICAgICAgID0gLTFcbiAgICAgIGZvciB2YWx1ZSBmcm9tIGdldF9yYW5kb20ud2Fsa191bmlxdWUgeyBwcm9kdWNlciwgbjogNDUsIHNlZW4sIHB1cnZpZXcsIG9uX3N0YXRzLCBvbl9leGhhdXN0aW9uOiAnc3RvcCcsIH1cbiAgICAgICAgaWR4KytcbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyXzEyMicsIGlkeCwgcnByIHZhbHVlXG4gICAgICAgIEBlcSAoIM6pYnJicl8xMjMgPSAtPiB2YWx1ZSApLCBtYXRjaGVyc1sgaWR4IF1cbiAgICAgICAgcmVzdWx0cy5wdXNoIHZhbHVlXG4gICAgICBAZXEgKCDOqWJyYnJfMTI0ID0gLT4gWyBzZWVuLi4uLCBdLmpvaW4gJycgKSwgJzIzNjU0MSdcbiAgICAgIEBlcSAoIM6pYnJicl8xMjUgPSAtPiBzZWVuLnNpemUgKSwgcHVydmlldyArIDFcbiAgICAgICMgZGVidWcgJ86pYnJicl8xMjYnLCBycHIgcmVzdWx0cy5qb2luICcnXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHN0YXRzOiAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfcmFuZG9tKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBzZW50aW5lbCAgICAgID0gU3ltYm9sICdzZW50aW5lbCdcbiAgICAgIG9uX2V4aGF1c3Rpb24gPSAtPiBzZW50aW5lbFxuICAgICAgc3RhdHMgPSBuZXcgaW50ZXJuYWxzLlN0YXRzIHsgbmFtZTogJ3NvbWV0aGluZycsIG9uX2V4aGF1c3Rpb24sIH1cbiAgICAgIEBlcSAgICAgKCDOqWJyYnJfMTI3ID0gLT4gc3RhdHMubmFtZSAgICAgICAgICAgKSwgJ3NvbWV0aGluZydcbiAgICAgIEBlcSAgICAgKCDOqWJyYnJfMTI4ID0gLT4gc3RhdHMubWF4X3JvdW5kcyAgICAgKSwgaW50ZXJuYWxzLm1heF9yb3VuZHNcbiAgICAgIEBlcSAgICAgKCDOqWJyYnJfMTI5ID0gLT4gc3RhdHMucm91bmRzICAgICAgICAgKSwgMFxuICAgICAgQHRocm93cyAoIM6pYnJicl8xMzAgPSAtPiBzdGF0cy5yb3VuZHMrKyAgICAgICApLCAvQ2Fubm90IHNldCBwcm9wZXJ0eS9cbiAgICAgIEBlcSAgICAgKCDOqWJyYnJfMTMxID0gLT4gc3RhdHMucmV0cnkoKSAgICAgICAgKSwgaW50ZXJuYWxzLmdvX29uXG4gICAgICBAZXEgICAgICggzqlicmJyXzEzMiA9IC0+IHN0YXRzLnJvdW5kcyAgICAgICAgICksIDFcbiAgICAgIHN0YXRzLl9yb3VuZHMgPSBpbnRlcm5hbHMubWF4X3JvdW5kcyAtIDFcbiAgICAgICMgZGVidWcgJ86pYnJicl8xMzMnLCBzdGF0c1xuICAgICAgIyBkZWJ1ZyAnzqlicmJyXzEzNCcsIHN0YXRzLnJvdW5kc1xuICAgICAgIyBkZWJ1ZyAnzqlicmJyXzEzNScsIGludGVybmFscy5tYXhfcm91bmRzXG4gICAgICAjIGRlYnVnICfOqWJyYnJfMTM2Jywgc3RhdHMubWF4X3JvdW5kc1xuICAgICAgQGVxICggzqlicmJyXzEzNyA9IC0+IHN0YXRzLnJldHJ5KCkgKSwgaW50ZXJuYWxzLmdvX29uXG4gICAgICBAZXEgKCDOqWJyYnJfMTM4ID0gLT4gc3RhdHMucmV0cnkoKSApLCBzZW50aW5lbFxuICAgICAgQGVxICggzqlicmJyXzEzOSA9IC0+IHN0YXRzLnJldHJ5KCkgKSwgc2VudGluZWxcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgb25fZXhoYXVzdGlvbiA9IHVuZGVmaW5lZFxuICAgICAgc3RhdHMgPSBuZXcgaW50ZXJuYWxzLlN0YXRzIHsgbmFtZTogJ3NvbWV0aGluZycsIG9uX2V4aGF1c3Rpb24sIH1cbiAgICAgIHN0YXRzLl9yb3VuZHMgPSBpbnRlcm5hbHMubWF4X3JvdW5kcyAtIDFcbiAgICAgIEBlcSAgICAgKCDOqWJyYnJfMTQwID0gLT4gc3RhdHMucmV0cnkoKSApLCBpbnRlcm5hbHMuZ29fb25cbiAgICAgIEB0aHJvd3MgKCDOqWJyYnJfMTQxID0gLT4gc3RhdHMucmV0cnkoKSApLCAvZXhoYXVzdGVkL1xuICAgICAgQHRocm93cyAoIM6pYnJicl8xNDIgPSAtPiBzdGF0cy5yZXRyeSgpICksIC9leGhhdXN0ZWQvXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIG9uX2V4aGF1c3Rpb24gPSBudWxsXG4gICAgICBzdGF0cyA9IG5ldyBpbnRlcm5hbHMuU3RhdHMgeyBuYW1lOiAnc29tZXRoaW5nJywgb25fZXhoYXVzdGlvbiwgfVxuICAgICAgc3RhdHMuX3JvdW5kcyA9IGludGVybmFscy5tYXhfcm91bmRzIC0gMVxuICAgICAgQGVxICAgICAoIM6pYnJicl8xNDMgPSAtPiBzdGF0cy5yZXRyeSgpICksIGludGVybmFscy5nb19vblxuICAgICAgQHRocm93cyAoIM6pYnJicl8xNDQgPSAtPiBzdGF0cy5yZXRyeSgpICksIC9leGhhdXN0ZWQvXG4gICAgICBAdGhyb3dzICggzqlicmJyXzE0NSA9IC0+IHN0YXRzLnJldHJ5KCkgKSwgL2V4aGF1c3RlZC9cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgb25fZXhoYXVzdGlvbiA9ICdlcnJvcidcbiAgICAgIHN0YXRzID0gbmV3IGludGVybmFscy5TdGF0cyB7IG5hbWU6ICdzb21ldGhpbmcnLCBvbl9leGhhdXN0aW9uLCB9XG4gICAgICBzdGF0cy5fcm91bmRzID0gaW50ZXJuYWxzLm1heF9yb3VuZHMgLSAxXG4gICAgICBAZXEgICAgICggzqlicmJyXzE0NiA9IC0+IHN0YXRzLnJldHJ5KCkgKSwgaW50ZXJuYWxzLmdvX29uXG4gICAgICBAdGhyb3dzICggzqlicmJyXzE0NyA9IC0+IHN0YXRzLnJldHJ5KCkgKSwgL2V4aGF1c3RlZC9cbiAgICAgIEB0aHJvd3MgKCDOqWJyYnJfMTQ4ID0gLT4gc3RhdHMucmV0cnkoKSApLCAvZXhoYXVzdGVkL1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBzZW50aW5lbCAgICAgID0gU3ltYm9sICdzZW50aW5lbCdcbiAgICAgIHN0YXRzX3Jlc3VsdCAgPSBudWxsXG4gICAgICBvbl9leGhhdXN0aW9uID0gLT4gc2VudGluZWxcbiAgICAgIG9uX3N0YXRzICAgICAgPSAtPiBzZW50aW5lbFxuICAgICAgbWF4X3JvdW5kcyAgID0gM1xuICAgICAgc3RhdHMgPSBuZXcgaW50ZXJuYWxzLlN0YXRzIHsgbmFtZTogJ3NvbWV0aGluZycsIG9uX2V4aGF1c3Rpb24sIG9uX3N0YXRzLCBtYXhfcm91bmRzLCB9XG4gICAgICBAZXEgICAgICggzqlicmJyXzE0OSA9IC0+IHN0YXRzLnJvdW5kcyApLCAwXG4gICAgICBAZXEgICAgICggzqlicmJyXzE1MCA9IC0+IHN0YXRzLnJldHJ5KCkgKSwgaW50ZXJuYWxzLmdvX29uXG4gICAgICBAZXEgICAgICggzqlicmJyXzE1MSA9IC0+IHN0YXRzLnJvdW5kcyApLCAxXG4gICAgICBAZXEgICAgICggzqlicmJyXzE1MiA9IC0+IHN0YXRzLnJldHJ5KCkgKSwgaW50ZXJuYWxzLmdvX29uXG4gICAgICBAZXEgICAgICggzqlicmJyXzE1MyA9IC0+IHN0YXRzLnJvdW5kcyApLCAyXG4gICAgICBAZXEgICAgICggzqlicmJyXzE1NCA9IC0+IHN0YXRzLnJldHJ5KCkgKSwgaW50ZXJuYWxzLmdvX29uXG4gICAgICBAZXEgICAgICggzqlicmJyXzE1NSA9IC0+IHN0YXRzLnJvdW5kcyApLCAzXG4gICAgICBAZXEgICAgICggzqlicmJyXzE1NiA9IC0+IHN0YXRzLnJldHJ5KCkgKSwgc2VudGluZWxcbiAgICAgIEBlcSAgICAgKCDOqWJyYnJfMTU3ID0gLT4gc3RhdHMuZmluaXNoICd2YWx1ZScgKSwgJ3ZhbHVlJ1xuICAgICAgQHRocm93cyAoIM6pYnJicl8xNTggPSAtPiBzdGF0cy5maW5pc2ggJ3ZhbHVlJyApLCAvZmluaXNoZWQvXG4gICAgICBAdGhyb3dzICggzqlicmJyXzE1OSA9IC0+IHN0YXRzLnJldHJ5KCkgKSwgL2ZpbmlzaGVkL1xuICAgICAgQHRocm93cyAoIM6pYnJicl8xNjAgPSAtPiBzdGF0cy5yZXRyeSgpICksIC9maW5pc2hlZC9cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHRlc3RzLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgd2Fsa191bmlxdWU6IHRlc3RzLndhbGtfdW5pcXVlLCB9XG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgZGVtb19jbGVhbiA9IC0+XG4gICAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBnZXRfcmFuZG9tX2ludGVnZXJfcHJvZHVjZXI6IHRlc3RzLmdldF9yYW5kb21faW50ZWdlcl9wcm9kdWNlciwgfVxuICAgIGEgPSB7fVxuICAgIGIgPSB7IG86IDYsIH1cbiAgICBjID0geyBvOiB1bmRlZmluZWQsIH1cbiAgICBjbGVhbiA9ICggeCApIC0+IE9iamVjdC5mcm9tRW50cmllcyAoIFsgaywgdiwgXSBmb3IgaywgdiBvZiB4IHdoZW4gdj8gKVxuICAgIGRlYnVnICfOqWJyYnJfMTYxJywgZCA9IHsgYS4uLiwgKCBjbGVhbiBiICkuLi4sICggY2xlYW4gYyApLi4uLCB9XG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgcmV0dXJuIG51bGxcbiJdfQ==
//# sourceURL=../src/test-basics.coffee