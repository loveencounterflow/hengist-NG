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
        var get_random, i, idx, matchers, on_stats, result, result_rounds, result_rpr, Ωbrbr__71;
        //.....................................................................................................
        result_rounds = null;
        on_stats = (stats) => {
          var Ωbrbr__69;
          if (stats.name !== 'walk_unique') {
            // debug 'Ωbrbr__67', stats
            return null;
          }
          result_rounds = stats.rounds;
          // debug 'Ωbrbr__68', result_rounds
          return this.eq((Ωbrbr__69 = function() {
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
          // debug 'Ωbrbr__70', rpr result
          result_rpr = [...result].join('');
          this.eq((Ωbrbr__71 = function() {
            return result_rpr;
          }), matchers[idx].result_rpr);
        }
        // @eq ( Ωbrbr__72 = -> result_rounds ), matchers[ idx ].result_rounds
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
        var cfg, get_random, on_stats, result_rounds, Ωbrbr__75;
        result_rounds = null;
        on_stats = (stats) => {};
        // info 'Ωbrbr__73', stats if stats.name is 'walk'
        // result_rounds = stats.rounds if stats.name is 'walk'
        // @eq ( Ωbrbr__74 = -> result_rounds >= 0 ), true
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
        this.throws((Ωbrbr__75 = function() {
          return get_random.text(cfg);
        }), /exhausted/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var cfg, get_random, on_stats, result_rounds, Ωbrbr__78;
        result_rounds = null;
        on_stats = (stats) => {};
        // info 'Ωbrbr__76', stats if stats.name is 'walk'
        // result_rounds = stats.rounds if stats.name is 'walk'
        // @eq ( Ωbrbr__77 = -> result_rounds >= 0 ), true
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
        this.eq((Ωbrbr__78 = function() {
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
        var get_random, idx, matcher, on_stats, producer, result, value, Ωbrbr__82, Ωbrbr__83, Ωbrbr__84;
        idx = -1;
        get_random = new Get_random({
          seed: settings.my_seed_1,
          on_stats
        });
        on_stats = (stats) => {
          var Ωbrbr__80;
          // info 'Ωbrbr__79', idx, stats # if stats.name is 'walk'
          if (stats.name === 'walk') {
            this.eq((Ωbrbr__80 = function() {
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
          // debug 'Ωbrbr__81', idx, rpr value
          result.values.push(value);
          this.eq((Ωbrbr__82 = function() {
            return value;
          }), matcher.values[idx]);
        }
        this.eq((Ωbrbr__83 = function() {
          return idx;
        }), 10);
        this.eq((Ωbrbr__84 = function() {
          return result.values.length;
        }), 11);
        return null;
      })();
      // #.......................................................................................................
      // do =>
      //   get_random      = new Get_random { seed: settings.my_seed_1, on_stats, }
      //   result_rounds  = null
      //   on_stats        = ( stats ) =>
      //     info 'Ωbrbr__85', stats if stats.name is 'walk'
      //     result_rounds = stats.rounds if stats.name is 'walk'
      //     @eq ( Ωbrbr__86 = -> result_rounds >= 0 ), true
      //   #.....................................................................................................
      //   producer  = -> get_random.text { min: '0', max: '9', length: 1, }
      //   count     = 0
      //   seen      = new Set()
      //   for x from get_random.walk { producer, seen, n: 5, }
      //     count++
      //     debug 'Ωbrbr__87', count, rpr x
      //   return null
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    walk_unique: function() {
      var Get_random, internals;
      ({Get_random, internals} = SFMODULES.unstable.require_get_random());
      (() => {        //.......................................................................................................
        var get_random, idx, matchers, on_stats, producer, value, Ωbrbr__91;
        get_random = new Get_random({
          seed: settings.my_seed_1,
          on_stats
        });
        matchers = [15, 16, 14, 11, 17, 19, 13, 10, 18, 12];
        on_stats = (stats) => {
          var Ωbrbr__89;
          if (stats.name === 'walk_unique') {
            // info 'Ωbrbr__88', stats
            return this.eq((Ωbrbr__89 = function() {
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
          // debug 'Ωbrbr__90', idx, rpr value
          this.eq((Ωbrbr__91 = function() {
            return value;
          }), matchers[idx]);
        }
        return null;
      })();
      (() => {        //.......................................................................................................
        var get_random, on_stats, producer, Ωbrbr__93;
        get_random = new Get_random({
          seed: settings.my_seed_1,
          on_stats
        });
        on_stats = (stats) => {
          var Ωbrbr__92;
          if (stats.name === 'walk_unique') {
            return this.eq((Ωbrbr__92 = function() {
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
        this.throws((Ωbrbr__93 = function() {
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
        var get_random, idx, matchers, on_stats, producer, value, Ωbrbr__97;
        get_random = new Get_random({
          seed: settings.my_seed_1,
          on_stats
        });
        matchers = [15, 16, 14, 11, 17, 19, 13, 10, 18, 12];
        on_stats = (stats) => {
          var Ωbrbr__95;
          if (stats.name === 'walk_unique') {
            // info 'Ωbrbr__94', stats
            return this.eq((Ωbrbr__95 = function() {
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
          // debug 'Ωbrbr__96', idx, rpr value
          this.eq((Ωbrbr__97 = function() {
            return value;
          }), matchers[idx]);
        }
        return null;
      })();
      (() => {        //.......................................................................................................
        var get_random, idx, matchers, max_rounds, on_stats, producer, results, value, Ωbrbr_101;
        get_random = new Get_random({
          seed: settings.my_seed_1,
          on_stats
        });
        matchers = '¨¯yD¾ÖÑõ`%AãV[åH5¶ÂüýÙÅO®ÃEÍÄGñ?XItZ-Ë¬Úd.kK2öJÞ6wsïéÜÿ9°x§ÁB_·À0ò&qè8÷ì«nµ²"½Ým<óeM{Qí@PçÐ+j¥ß^©æC¡±Óib,c\\³7£r~aê¿Ç:ÎSzùØº(|T¼¦ª/úu¢ÛY¤É#ðþø¸oFU1}p$W Õô4ÌäÈë>Ïv×LR]fg\'î´¹ûÒâÊ)»hÔ!;à*NáÆ=3l';
        results = [];
        max_rounds = 1_000;
        on_stats = (stats) => {
          var Ωbrbr__99;
          if (stats.name === 'walk_unique') {
            // info 'Ωbrbr__98', stats
            return this.eq((Ωbrbr__99 = function() {
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
          // debug 'Ωbrbr_100', idx, rpr value
          this.eq((Ωbrbr_101 = function() {
            return value;
          }), matchers[idx]);
          results.push(value);
        }
        // debug 'Ωbrbr_102', rpr results.join ''
        return null;
      })();
      (() => {        //.......................................................................................................
        var get_random, idx, matchers, max_rounds, on_stats, producer, results, seen, value, Ωbrbr_106;
        get_random = new Get_random({
          seed: settings.my_seed_1,
          on_stats
        });
        matchers = '»hÔ!;à*NáÆ=3l';
        results = [];
        max_rounds = 1_000;
        on_stats = (stats) => {
          var Ωbrbr_104;
          if (stats.name === 'walk_unique') {
            // info 'Ωbrbr_103', stats
            return this.eq((Ωbrbr_104 = function() {
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
          // debug 'Ωbrbr_105', idx, rpr value
          this.eq((Ωbrbr_106 = function() {
            return value;
          }), matchers[idx]);
          results.push(value);
        }
        // debug 'Ωbrbr_107', rpr results.join ''
        return null;
      })();
      (() => {        //.......................................................................................................
        var get_random, idx, matchers, on_stats, producer, purview, results, seen, value, Ωbrbr_111, Ωbrbr_112, Ωbrbr_113;
        get_random = new Get_random({
          seed: settings.my_seed_1,
          on_stats
        });
        matchers = 'pqkesunyhbewgcrszlvofqset';
        results = [];
        on_stats = (stats) => {
          var Ωbrbr_109;
          if (stats.name === 'walk_unique') {
            // info 'Ωbrbr_108', stats
            return this.eq((Ωbrbr_109 = function() {
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
          // debug 'Ωbrbr_110', idx, rpr value
          this.eq((Ωbrbr_111 = function() {
            return value;
          }), matchers[idx]);
          results.push(value);
        }
        this.eq((Ωbrbr_112 = function() {
          return [...seen].join('');
        }), 'ofqset');
        this.eq((Ωbrbr_113 = function() {
          return seen.size;
        }), purview + 1);
        // debug 'Ωbrbr_114', rpr results.join ''
        return null;
      })();
      (() => {        //.......................................................................................................
        var get_random, idx, matchers, on_stats, producer, purview, results, seen, value, Ωbrbr_118, Ωbrbr_119, Ωbrbr_120;
        get_random = new Get_random({
          seed: settings.my_seed_1,
          on_stats
        });
        matchers = '4325614325614325614325614';
        results = [];
        on_stats = (stats) => {
          var Ωbrbr_116;
          if (stats.name === 'walk_unique') {
            // info 'Ωbrbr_115', stats
            return this.eq((Ωbrbr_116 = function() {
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
          // debug 'Ωbrbr_117', idx, rpr value
          this.eq((Ωbrbr_118 = function() {
            return value;
          }), matchers[idx]);
          results.push(value);
        }
        this.eq((Ωbrbr_119 = function() {
          return [...seen].join('');
        }), '325614');
        this.eq((Ωbrbr_120 = function() {
          return seen.size;
        }), purview + 1);
        // debug 'Ωbrbr_121', rpr results.join ''
        return null;
      })();
      (() => {        //.......................................................................................................
        var get_random, idx, matchers, on_stats, producer, purview, results, seen, value, Ωbrbr_125, Ωbrbr_126, Ωbrbr_127;
        get_random = new Get_random({
          seed: settings.my_seed_1,
          on_stats
        });
        matchers = '532647132657432165472365172436512736541236541';
        results = [];
        on_stats = (stats) => {
          var Ωbrbr_123;
          if (stats.name === 'walk_unique') {
            // info 'Ωbrbr_122', stats
            return this.eq((Ωbrbr_123 = function() {
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
          // debug 'Ωbrbr_124', idx, rpr value
          this.eq((Ωbrbr_125 = function() {
            return value;
          }), matchers[idx]);
          results.push(value);
        }
        this.eq((Ωbrbr_126 = function() {
          return [...seen].join('');
        }), '236541');
        this.eq((Ωbrbr_127 = function() {
          return seen.size;
        }), purview + 1);
        // debug 'Ωbrbr_128', rpr results.join ''
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
        var on_exhaustion, sentinel, stats, Ωbrbr_129, Ωbrbr_130, Ωbrbr_131, Ωbrbr_132, Ωbrbr_133, Ωbrbr_134, Ωbrbr_139, Ωbrbr_140, Ωbrbr_141;
        sentinel = Symbol('sentinel');
        on_exhaustion = function() {
          return sentinel;
        };
        stats = new internals.Stats({
          name: 'something',
          on_exhaustion
        });
        this.eq((Ωbrbr_129 = function() {
          return stats.name;
        }), 'something');
        this.eq((Ωbrbr_130 = function() {
          return stats.max_rounds;
        }), internals.max_rounds);
        this.eq((Ωbrbr_131 = function() {
          return stats.rounds;
        }), 0);
        this.throws((Ωbrbr_132 = function() {
          return stats.rounds++;
        }), /Cannot set property/);
        this.eq((Ωbrbr_133 = function() {
          return stats.retry();
        }), internals.go_on);
        this.eq((Ωbrbr_134 = function() {
          return stats.rounds;
        }), 1);
        stats._rounds = internals.max_rounds - 1;
        // debug 'Ωbrbr_135', stats
        // debug 'Ωbrbr_136', stats.rounds
        // debug 'Ωbrbr_137', internals.max_rounds
        // debug 'Ωbrbr_138', stats.max_rounds
        this.eq((Ωbrbr_139 = function() {
          return stats.retry();
        }), internals.go_on);
        this.eq((Ωbrbr_140 = function() {
          return stats.retry();
        }), sentinel);
        this.eq((Ωbrbr_141 = function() {
          return stats.retry();
        }), sentinel);
        return null;
      })();
      (() => {        //.......................................................................................................
        var on_exhaustion, stats, Ωbrbr_142, Ωbrbr_143, Ωbrbr_144;
        on_exhaustion = void 0;
        stats = new internals.Stats({
          name: 'something',
          on_exhaustion
        });
        stats._rounds = internals.max_rounds - 1;
        this.eq((Ωbrbr_142 = function() {
          return stats.retry();
        }), internals.go_on);
        this.throws((Ωbrbr_143 = function() {
          return stats.retry();
        }), /exhausted/);
        this.throws((Ωbrbr_144 = function() {
          return stats.retry();
        }), /exhausted/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var on_exhaustion, stats, Ωbrbr_145, Ωbrbr_146, Ωbrbr_147;
        on_exhaustion = null;
        stats = new internals.Stats({
          name: 'something',
          on_exhaustion
        });
        stats._rounds = internals.max_rounds - 1;
        this.eq((Ωbrbr_145 = function() {
          return stats.retry();
        }), internals.go_on);
        this.throws((Ωbrbr_146 = function() {
          return stats.retry();
        }), /exhausted/);
        this.throws((Ωbrbr_147 = function() {
          return stats.retry();
        }), /exhausted/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var on_exhaustion, stats, Ωbrbr_148, Ωbrbr_149, Ωbrbr_150;
        on_exhaustion = 'error';
        stats = new internals.Stats({
          name: 'something',
          on_exhaustion
        });
        stats._rounds = internals.max_rounds - 1;
        this.eq((Ωbrbr_148 = function() {
          return stats.retry();
        }), internals.go_on);
        this.throws((Ωbrbr_149 = function() {
          return stats.retry();
        }), /exhausted/);
        this.throws((Ωbrbr_150 = function() {
          return stats.retry();
        }), /exhausted/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var max_rounds, on_exhaustion, on_stats, sentinel, stats, stats_result, Ωbrbr_151, Ωbrbr_152, Ωbrbr_153, Ωbrbr_154, Ωbrbr_155, Ωbrbr_156, Ωbrbr_157, Ωbrbr_158, Ωbrbr_159, Ωbrbr_160, Ωbrbr_161, Ωbrbr_162;
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
        this.eq((Ωbrbr_151 = function() {
          return stats.rounds;
        }), 0);
        this.eq((Ωbrbr_152 = function() {
          return stats.retry();
        }), internals.go_on);
        this.eq((Ωbrbr_153 = function() {
          return stats.rounds;
        }), 1);
        this.eq((Ωbrbr_154 = function() {
          return stats.retry();
        }), internals.go_on);
        this.eq((Ωbrbr_155 = function() {
          return stats.rounds;
        }), 2);
        this.eq((Ωbrbr_156 = function() {
          return stats.retry();
        }), internals.go_on);
        this.eq((Ωbrbr_157 = function() {
          return stats.rounds;
        }), 3);
        this.eq((Ωbrbr_158 = function() {
          return stats.retry();
        }), sentinel);
        this.eq((Ωbrbr_159 = function() {
          return stats.finish('value');
        }), 'value');
        this.throws((Ωbrbr_160 = function() {
          return stats.finish('value');
        }), /finished/);
        this.throws((Ωbrbr_161 = function() {
          return stats.retry();
        }), /finished/);
        this.throws((Ωbrbr_162 = function() {
          return stats.retry();
        }), /finished/);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    require_format_stack_parse_line: function() {
      var Format_stack, format_stack, i, len, matcher, probe, probes_and_matchers, type_of, Ωbrbr_163, Ωbrbr_164, Ωbrbr_165, Ωbrbr_166, Ωbrbr_167, Ωbrbr_168;
      ({Format_stack, format_stack} = SFMODULES.unstable.require_format_stack());
      ({type_of} = SFMODULES.unstable.require_type_of());
      //.......................................................................................................
      probes_and_matchers = [
        [
          `at <anonymous> (/path/to/hengist-NG/dev/bricabrac/src/test-dbric.coffee:290:11)`,
          {
            callee: '<anonymous>',
            path: '/path/to/hengist-NG/dev/bricabrac/src/test-dbric.coffee',
            folder_path: '/path/to/hengist-NG/dev/bricabrac/src/',
            file_name: 'test-dbric.coffee',
            line_nr: 290,
            column_nr: 11,
            type: 'main'
          }
        ],
        [
          `at Object.<anonymous> (/path/to/hengist-NG/dev/bricabrac/src/test-dbric.coffee:245:41)`,
          {
            callee: 'Object.<anonymous>',
            path: '/path/to/hengist-NG/dev/bricabrac/src/test-dbric.coffee',
            folder_path: '/path/to/hengist-NG/dev/bricabrac/src/',
            file_name: 'test-dbric.coffee',
            line_nr: 245,
            column_nr: 41,
            type: 'main'
          }
        ],
        [
          `at Object.<anonymous> (/path/to/hengist-NG/dev/bricabrac/src/test-dbric.coffee:3:1)`,
          {
            callee: 'Object.<anonymous>',
            path: '/path/to/hengist-NG/dev/bricabrac/src/test-dbric.coffee',
            folder_path: '/path/to/hengist-NG/dev/bricabrac/src/',
            file_name: 'test-dbric.coffee',
            line_nr: 3,
            column_nr: 1,
            type: 'main'
          }
        ],
        [
          `at do_something (../whatever/src/test-dbric.coffee:3:1)`,
          {
            callee: 'do_something',
            path: '../whatever/src/test-dbric.coffee',
            folder_path: '../whatever/src/',
            file_name: 'test-dbric.coffee',
            line_nr: 3,
            column_nr: 1,
            type: 'external'
          }
        ],
        [
          `at do_something (./node_modules/test-dbric.coffee:3:1)`,
          {
            callee: 'do_something',
            path: './node_modules/test-dbric.coffee',
            folder_path: './node_modules/',
            file_name: 'test-dbric.coffee',
            line_nr: 3,
            column_nr: 1,
            type: 'dependency'
          }
        ],
        [
          `at Module._compile (node:internal/modules/cjs/loader:1738:14)`,
          {
            callee: 'Module._compile',
            path: 'node:internal/modules/cjs/loader',
            folder_path: 'node:internal/modules/cjs/',
            file_name: 'loader',
            line_nr: 1738,
            column_nr: 14,
            type: 'internal'
          }
        ],
        [
          `at Object..js (node:internal/modules/cjs/loader:1871:10)`,
          {
            callee: 'Object..js',
            path: 'node:internal/modules/cjs/loader',
            folder_path: 'node:internal/modules/cjs/',
            file_name: 'loader',
            line_nr: 1871,
            column_nr: 10,
            type: 'internal'
          }
        ],
        [
          `at Module.load (node:internal/modules/cjs/loader:1470:32)`,
          {
            callee: 'Module.load',
            path: 'node:internal/modules/cjs/loader',
            folder_path: 'node:internal/modules/cjs/',
            file_name: 'loader',
            line_nr: 1470,
            column_nr: 32,
            type: 'internal'
          }
        ],
        [
          `at Module._load (node:internal/modules/cjs/loader:1290:12)`,
          {
            callee: 'Module._load',
            path: 'node:internal/modules/cjs/loader',
            folder_path: 'node:internal/modules/cjs/',
            file_name: 'loader',
            line_nr: 1290,
            column_nr: 12,
            type: 'internal'
          }
        ],
        [
          `at TracingChannel.traceSync (node:diagnostics_channel:322:14)`,
          {
            callee: 'TracingChannel.traceSync',
            path: 'node:diagnostics_channel',
            folder_path: '',
            file_name: 'node:diagnostics_channel',
            line_nr: 322,
            column_nr: 14,
            type: 'internal'
          }
        ],
        [
          `at wrapModuleLoad (node:internal/modules/cjs/loader:238:24)`,
          {
            callee: 'wrapModuleLoad',
            path: 'node:internal/modules/cjs/loader',
            folder_path: 'node:internal/modules/cjs/',
            file_name: 'loader',
            line_nr: 238,
            column_nr: 24,
            type: 'internal'
          }
        ],
        [
          `at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)`,
          {
            callee: 'Module.executeUserEntryPoint [as runMain]',
            path: 'node:internal/modules/run_main',
            folder_path: 'node:internal/modules/',
            file_name: 'run_main',
            line_nr: 154,
            column_nr: 5,
            type: 'internal'
          }
        ],
        [
          `at node:internal/main/run_main_module:33:47`,
          {
            callee: '[anonymous]',
            path: 'node:internal/main/run_main_module',
            folder_path: 'node:internal/main/',
            file_name: 'run_main_module',
            line_nr: 33,
            column_nr: 47,
            type: 'internal'
          }
        ],
        [
          `some other format`,
          {
            callee: '',
            path: '',
            folder_path: 'some other format',
            file_name: '',
            line_nr: '',
            column_nr: '',
            type: 'unparsable'
          }
        ]
      ];
      //.......................................................................................................
      this.eq((Ωbrbr_163 = function() {
        return type_of(format_stack.parse_line);
      }), 'function');
      for (i = 0, len = probes_and_matchers.length; i < len; i++) {
        [probe, matcher] = probes_and_matchers[i];
        this.eq((Ωbrbr_164 = function() {
          return format_stack.parse_line(probe);
        }), matcher);
      }
      //.......................................................................................................
      this.throws((Ωbrbr_165 = function() {
        return format_stack.parse_line(673);
      }), /expected a text, got a float/);
      this.throws((Ωbrbr_166 = function() {
        return format_stack.parse_line(false);
      }), /expected a text, got a boolean/);
      this.throws((Ωbrbr_167 = function() {
        return format_stack.parse_line(Symbol('abc'));
      }), /expected a text, got a symbol/);
      this.throws((Ωbrbr_168 = function() {
        return format_stack.parse_line("line 1\nline 2");
      }), /expected a single line, got a text with line breaks/);
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    require_format_stack_format_line: function() {
      var Format_stack, format_stack, i, len, matcher, probe, probes_and_matchers, strip_ansi, type_of, Ωbrbr_169, Ωbrbr_170, Ωbrbr_171, Ωbrbr_176, Ωbrbr_177, Ωbrbr_178, Ωbrbr_179;
      ({Format_stack, format_stack} = SFMODULES.unstable.require_format_stack());
      ({strip_ansi} = SFMODULES.require_strip_ansi());
      ({type_of} = SFMODULES.unstable.require_type_of());
      //.......................................................................................................
      probes_and_matchers = [[`at <anonymous> (/path/to/hengist-NG/dev/bricabrac/src/test-dbric.coffee:290:11)`, '—— /path/to/hengist-NG/dev/bricabrac/src/——test-dbric.coffee —— (290——:11) ——             —— # <anonymous>() ——                                 ——'], [`at Object.<anonymous> (/path/to/hengist-NG/dev/bricabrac/src/test-dbric.coffee:245:41)`, '—— /path/to/hengist-NG/dev/bricabrac/src/——test-dbric.coffee —— (245——:41) ——             —— # Object.<anonymous>() ——                          ——'], [`at Object.<anonymous> (/path/to/hengist-NG/dev/bricabrac/src/test-dbric.coffee:3:1)`, '—— /path/to/hengist-NG/dev/bricabrac/src/——test-dbric.coffee —— (3——:1) ——                —— # Object.<anonymous>() ——                          ——'], [`at do_something (../whatever/src/test-dbric.coffee:3:1)`, '—— ../whatever/src/——test-dbric.coffee —— (3——:1) ——                                      —— # do_something() ——                                ——'], [`at do_something (../node_modules/whatever/src/test-dbric.coffee:3:1)`, '—— ../node_modules/whatever/src/——test-dbric.coffee —— (3——:1) ——                         —— # do_something() ——                                ——'], [`at do_something (./node_modules/test-dbric.coffee:3:1)`, '—— ./node_modules/——test-dbric.coffee —— (3——:1) ——                                       —— # do_something() ——                                ——'], [`at Module._compile (node:internal/modules/cjs/loader:1738:14)`, '—— node:internal/modules/cjs/——loader —— (1738——:14) ——                                   —— # Module._compile() ——                             ——'], [`at Object..js (node:internal/modules/cjs/loader:1871:10)`, '—— node:internal/modules/cjs/——loader —— (1871——:10) ——                                   —— # Object..js() ——                                  ——'], [`at Module.load (node:internal/modules/cjs/loader:1470:32)`, '—— node:internal/modules/cjs/——loader —— (1470——:32) ——                                   —— # Module.load() ——                                 ——'], [`at Module._load (node:internal/modules/cjs/loader:1290:12)`, '—— node:internal/modules/cjs/——loader —— (1290——:12) ——                                   —— # Module._load() ——                                ——'], [`at TracingChannel.traceSync (node:diagnostics_channel:322:14)`, '—— ——node:diagnostics_channel —— (322——:14) ——                                            —— # TracingChannel.traceSync() ——                    ——'], [`at wrapModuleLoad (node:internal/modules/cjs/loader:238:24)`, '—— node:internal/modules/cjs/——loader —— (238——:24) ——                                    —— # wrapModuleLoad() ——                              ——'], [`at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)`, '—— node:internal/modules/——run_main —— (154——:5) ——                                       —— # Module.executeUserEntryPoint [as runMain]() ——   ——'], [`at node:internal/main/run_main_module:33:47`, '—— node:internal/main/——run_main_module —— (33——:47) ——                                   —— # [anonymous]() ——                                 ——'], [`some other format`, '—— some other format—— —— (——:) ——                                                        —— # () ——                                            ——']];
      //.......................................................................................................
      this.eq((Ωbrbr_169 = function() {
        return type_of(format_stack.cfg);
      }), 'pod');
      this.eq((Ωbrbr_170 = function() {
        return type_of(format_stack.format_line);
      }), 'function');
      for (i = 0, len = probes_and_matchers.length; i < len; i++) {
        [probe, matcher] = probes_and_matchers[i];
        this.eq((Ωbrbr_171 = function() {
          return strip_ansi(format_stack.format_line(probe), '——');
        }), matcher);
        echo(format_stack.format_line(probe));
      }
      // debug 'Ωbrbr_174', do Ωbrbr_175 = -> rpr strip_ansi ( format_stack.format_line probe ), '——'
      //.......................................................................................................
      this.throws((Ωbrbr_176 = function() {
        return format_stack.format_line(673);
      }), /expected a text, got a float/);
      this.throws((Ωbrbr_177 = function() {
        return format_stack.format_line(false);
      }), /expected a text, got a boolean/);
      this.throws((Ωbrbr_178 = function() {
        return format_stack.format_line(Symbol('abc'));
      }), /expected a text, got a symbol/);
      this.throws((Ωbrbr_179 = function() {
        return format_stack.format_line("line 1\nline 2");
      }), /expected a single line, got a text with line breaks/);
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
      // ( new Test guytest_cfg ).test { tests, }
      (new Test(guytest_cfg)).test({
        require_format_stack_parse_line: tests.require_format_stack_parse_line
      });
      (new Test(guytest_cfg)).test({
        require_format_stack_format_line: tests.require_format_stack_format_line
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
        return debug('Ωbrbr_180', d = {...a, ...(clean(b)), ...(clean(c))});
      };
      //.........................................................................................................
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLFFBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUE7SUFBQTsrREFBQTs7O0VBR0EsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixXQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsS0FIRixFQUlFLElBSkYsRUFLRSxJQUxGLEVBTUUsSUFORixFQU9FLEdBUEYsRUFRRSxJQVJGLEVBU0UsT0FURixFQVVFLEdBVkYsQ0FBQSxHQVU0QixHQUFHLENBQUMsR0FWaEM7O0VBV0EsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUI7O0VBQ0EsS0FBQSxHQUE0QixRQUFBLENBQUUsQ0FBRixDQUFBO1dBQVMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFmLENBQXFCLENBQXJCO0VB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Y0FBQSxDQUFBLEVBQUE7aUJBQUMsTUFBTSxDQUFDLFdBQVA7O0FBQXFCO1lBQUEsS0FBQSxNQUFBOztrQkFBNkI7OEJBQTdCLENBQUUsQ0FBRixFQUFLLENBQUw7O1lBQUEsQ0FBQTs7Y0FBckI7UUFBVDtlQUNSLEtBQUEsQ0FBTSxXQUFOLEVBQW1CLENBQUEsR0FBSSxDQUFFLEdBQUEsQ0FBRixFQUFRLEdBQUEsQ0FBRSxLQUFBLENBQU0sQ0FBTixDQUFGLENBQVIsRUFBd0IsR0FBQSxDQUFFLEtBQUEsQ0FBTSxDQUFOLENBQUYsQ0FBeEIsQ0FBdkI7TUFOVyxFQU5mOztBQWNFLGFBQU87SUFmK0IsQ0FBQSxJQUF4Qzs7QUEzMUJBIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbid1c2Ugc3RyaWN0J1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnYnJpY2FicmFjJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHdoaXRlXG4gIGJsdWVcbiAgZ29sZFxuICBncmV5XG4gIHJlZFxuICBib2xkXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG53cml0ZSAgICAgICAgICAgICAgICAgICAgID0gKCBwICkgLT4gcHJvY2Vzcy5zdGRvdXQud3JpdGUgcFxuQyAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2Fuc2lzJ1xueyBuZmEgfSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zaW5nbGUtZmlsZS1tb2R1bGVzJ1xuXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5zZXR0aW5ncyA9XG4gICAgbXlfc2VlZF8xOiAyODczNDYyMTM0XG4gICAgbXlfc2VlZF8yOiAyODczNDYyMTM0ICsgMVxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkB0ZXN0cyA9IHRlc3RzID1cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9yYW5kb21fZmxvYXQ6IC0+XG4gICAgeyBHZXRfcmFuZG9tLFxuICAgICAgaW50ZXJuYWxzLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2dldF9yYW5kb20oKVxuICAgIG1hdGNoZXJzICAgICAgICA9IFtdXG4gICAgcHJvYmVzICAgICAgICAgID0gW11cbiAgICBtYXhfY291bnQgICAgICAgPSAxZTRcbiAgICBzZWVuICAgICAgICAgICAgPSBuZXcgU2V0KClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBnZXRfcmFuZG9tID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIH1cbiAgICAgIGZvciBpZHggaW4gWyAwIC4uLiBtYXhfY291bnQgXVxuICAgICAgICBtYXRjaGVycy5wdXNoIHQgPSBnZXRfcmFuZG9tLmZsb2F0KClcbiAgICAgICAgc2Vlbi5hZGQgdFxuICAgICAgZm9yIHZhbHVlLCBpZHggaW4gbWF0Y2hlcnNcbiAgICAgICAgZGVidWcgJ86pYnJicl9fXzEnLCB7IGlkeCwgdmFsdWUsIH0gdW5sZXNzIDAgPCB2YWx1ZSA8PSAxXG4gICAgICBAZXEgKCDOqWJyYnJfX18yID0gLT4gbWF0Y2hlcnMuZXZlcnkgKCB0ICkgLT4gMCA8IHQgPD0gMSApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJyYnJfX18zID0gLT4gc2Vlbi5zaXplICksIG1heF9jb3VudFxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBnZXRfcmFuZG9tID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIH1cbiAgICAgIGZvciBpZHggaW4gWyAwIC4uLiBtYXhfY291bnQgXVxuICAgICAgICBwcm9iZXMucHVzaCB0ID0gZ2V0X3JhbmRvbS5mbG9hdCgpXG4gICAgICBAZXEgKCDOqWJyYnJfX180ID0gLT4gcHJvYmVzICksIG1hdGNoZXJzXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGdldF9yYW5kb20gPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMiwgfVxuICAgICAgY291bnQgPSAwXG4gICAgICBmb3IgaWR4IGluIFsgMCAuLi4gbWF4X2NvdW50IF1cbiAgICAgICAgY291bnQrKyBpZiAoIHQgPSBnZXRfcmFuZG9tLmZsb2F0KCkgKSBpbiBtYXRjaGVyc1xuICAgICAgQGVxICggzqlicmJyX19fNSA9IC0+IGNvdW50ICksIDBcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZ2V0X3JhbmRvbSAgICA9IG5ldyBHZXRfcmFuZG9tKClcbiAgICAgIGNvdW50ID0gMFxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4uIG1heF9jb3VudCBdXG4gICAgICAgIGNvdW50KysgaWYgKCB0ID0gZ2V0X3JhbmRvbS5mbG9hdCgpICkgaW4gbWF0Y2hlcnNcbiAgICAgIEBlcSAoIM6pYnJicl9fXzYgPSAtPiBjb3VudCA8IDEwICksIHRydWVcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZ2V0X3JhbmRvbSAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgfVxuICAgICAgbWluICAgICAgICAgPSAxMDBcbiAgICAgIG1heCAgICAgICAgID0gOTk5XG4gICAgICBidWNrZXRzICAgICA9IHt9XG4gICAgICBmb3IgYnVja2V0IGluIFsgbWluIC4uLiBtYXggXVxuICAgICAgICBidWNrZXRzWyBNYXRoLmZsb29yIGJ1Y2tldCAvIDEwIF0gPSAwXG4gICAgICBmb3IgaWR4IGluIFsgMCAuLi4gbWF4X2NvdW50IF1cbiAgICAgICAgdCA9IGdldF9yYW5kb20uZmxvYXQgeyBtaW4sIG1heCwgfVxuICAgICAgICAjIGRlYnVnICfOqWJyYnJfX183JywgdFxuICAgICAgICBidWNrZXQgPSBNYXRoLmZsb29yIHQgLyAxMFxuICAgICAgICBidWNrZXRzWyBidWNrZXQgXSsrXG4gICAgICAgIEBlcSAoIM6pYnJicl9fXzggPSAtPiBtaW4gPD0gdCA8PSBtYXggKSwgdHJ1ZVxuICAgICAgZm9yIF8sIGNvdW50IG9mIGJ1Y2tldHNcbiAgICAgICAgQGVxICggzqlicmJyX19fOSA9IC0+IDUwIDw9IGNvdW50IDw9IDE1MCApLCB0cnVlXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9yYW5kb21faW50ZWdlcjogLT5cbiAgICB7IEdldF9yYW5kb20sXG4gICAgICBpbnRlcm5hbHMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X3JhbmRvbSgpXG4gICAgbWF4X2NvdW50ICAgICAgID0gMWU0XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZ2V0X3JhbmRvbSAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgfVxuICAgICAgbWluICAgICAgICAgPSAxMDBcbiAgICAgIG1heCAgICAgICAgID0gOTk5XG4gICAgICBidWNrZXRzICAgICA9IHt9XG4gICAgICBmb3IgYnVja2V0IGluIFsgbWluIC4uLiBtYXggXVxuICAgICAgICBidWNrZXRzWyBNYXRoLmZsb29yIGJ1Y2tldCAvIDEwIF0gPSAwXG4gICAgICBmb3IgaWR4IGluIFsgMCAuLi4gbWF4X2NvdW50IF1cbiAgICAgICAgdCA9IGdldF9yYW5kb20uaW50ZWdlciB7IG1pbiwgbWF4LCB9XG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fMTAnLCB0XG4gICAgICAgIGJ1Y2tldCA9IE1hdGguZmxvb3IgdCAvIDEwXG4gICAgICAgIGJ1Y2tldHNbIGJ1Y2tldCBdKytcbiAgICAgICAgQGVxICggzqlicmJyX18xMSA9IC0+IG1pbiA8PSB0IDw9IG1heCApLCB0cnVlXG4gICAgICBmb3IgXywgY291bnQgb2YgYnVja2V0c1xuICAgICAgICBAZXEgKCDOqWJyYnJfXzEyID0gLT4gNTAgPD0gY291bnQgPD0gMTUwICksIHRydWVcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0X3JhbmRvbV9jaHI6IC0+XG4gICAgeyBHZXRfcmFuZG9tLFxuICAgICAgaW50ZXJuYWxzLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2dldF9yYW5kb20oKVxuICAgIG1heF9jb3VudCAgICAgICA9IDFlNFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIH1cbiAgICAgIGZvciBpZHggaW4gWyAwIC4uLiBtYXhfY291bnQgXVxuICAgICAgICB0ID0gZ2V0X3JhbmRvbS5jaHIoKVxuICAgICAgICAjIGRlYnVnICfOqWJyYnJfXzEzJywgcnByIHRcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZ2V0X3JhbmRvbSAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgfVxuICAgICAgcmVzdWx0ID0gKCBnZXRfcmFuZG9tLmNociB7IG1pbjogJ0EnLCBtYXg6ICdaJywgfSBmb3IgXyBpbiBbIDEgLi4gNDAgXSApLmpvaW4gJydcbiAgICAgIEBlcSAoIM6pYnJicl9fMTQgPSAtPiByZXN1bHQgKSwgJ1BRS0VTVVVOWUhCRVdHSEdXRUNSU1paTFZPU0ZRU0VUTlNFWERGR0YnXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIG9uX3N0YXRzICAgID0gKCBzdGF0cyApIC0+XG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fMTUnLCBzdGF0c1xuICAgICAgZ2V0X3JhbmRvbSAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMiwgb25fc3RhdHMsIH1cbiAgICAgIHJlc3VsdCAgICAgID0gKCBnZXRfcmFuZG9tLmNociB7IG1pbjogJ0EnLCBtYXg6ICdaJywgfSBmb3IgXyBpbiBbIDEgLi4gNDAgXSApLmpvaW4gJydcbiAgICAgIEBlcSAoIM6pYnJicl9fMTYgPSAtPiByZXN1bHQgaXMgJ1BRS0VTVVVOWUhCRVdHSEdXRUNSU1paTFZPU0ZRU0VUTlNFWERGR0YnICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWJyYnJfXzE3ID0gLT4gL15bQS1aXXs0MH0kLy50ZXN0IHJlc3VsdCApLCB0cnVlXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIG9uX3N0YXRzICAgID0gKCBzdGF0cyApIC0+XG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fMTgnLCBzdGF0c1xuICAgICAgZ2V0X3JhbmRvbSAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMiwgb25fc3RhdHMsIH1cbiAgICAgIHJlc3VsdCAgICAgID0gKCBnZXRfcmFuZG9tLmNociB7IG1heDogMHhmZiwgZmlsdGVyOiAvW2FlaW91eUFFSU9VWV0vLCB9IGZvciBfIGluIFsgMSAuLiA0MCBdICkuam9pbiAnJ1xuICAgICAgIyBkZWJ1ZyAnzqlicmJyX18xOScsIHJwciByZXN1bHRcbiAgICAgIEBlcSAoIM6pYnJicl9fMjAgPSAtPiAvXlthZWlvdXlBRUlPVVldezQwfSQvLnRlc3QgcmVzdWx0ICksIHRydWVcbiAgICAgIEBlcSAoIM6pYnJicl9fMjEgPSAtPiByZXN1bHQgKSwgJ3l5VXlJdXVVYWFJdVVhVUlJeU9Jb0FZRU9pT1lJdWlPdWFpQVVVZUUnXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9yYW5kb21fY2hyX3Byb2R1Y2VyOiAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfcmFuZG9tKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICByb3VuZHMgICAgICA9IDBcbiAgICAgIG9uX3N0YXRzICAgID0gKCBzdGF0cyApIC0+IHJvdW5kcyArPSBzdGF0cy5yb3VuZHMgaWYgc3RhdHMubmFtZSBpcyAnY2hyJ1xuICAgICAgZ2V0X3JhbmRvbSAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMiwgb25fc3RhdHMsIH1cbiAgICAgIGNociAgICAgICAgID0gZ2V0X3JhbmRvbS5jaHJfcHJvZHVjZXIgeyBtYXg6IDB4ZmYsIGZpbHRlcjogL1thZWlvdXlBRUlPVVldLywgfVxuICAgICAgcmVzdWx0ICAgICAgPSAoIGNocigpIGZvciBfIGluIFsgMSAuLiA0MCBdICkuam9pbiAnJ1xuICAgICAgIyBkZWJ1ZyAnzqlicmJyX18yMicsIHJvdW5kcywgKCBycHIgcmVzdWx0IClcbiAgICAgIEBlcSAoIM6pYnJicl9fMjMgPSAtPiAvXlthZWlvdXlBRUlPVVldezQwfSQvLnRlc3QgcmVzdWx0ICksIHRydWVcbiAgICAgIEBlcSAoIM6pYnJicl9fMjQgPSAtPiByZXN1bHQgKSwgJ3l5VXlJdXVVYWFJdVVhVUlJeU9Jb0FZRU9pT1lJdWlPdWFpQVVVZUUnXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9yYW5kb21fdGV4dDogLT5cbiAgICB7IEdldF9yYW5kb20sXG4gICAgICBpbnRlcm5hbHMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X3JhbmRvbSgpXG4gICAgbWF4X2NvdW50ICAgICAgID0gMWU0XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgb25fc3RhdHMgICAgPSAoIHN0YXRzICkgLT5cbiAgICAgICAgIyBpbmZvICfOqWJyYnJfXzI1Jywgc3RhdHNcbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIG9uX3N0YXRzLCB9XG4gICAgICByZXN1bHQgICAgICA9IGdldF9yYW5kb20udGV4dCB7IG1pbjogJ0EnLCBtYXg6ICdaJywgbGVuZ3RoOiA0MCwgfVxuICAgICAgQGVxICggzqlicmJyX18yNiA9IC0+IHJlc3VsdCApLCAnUFFLRVNVVU5ZSEJFV0dIR1dFQ1JTWlpMVk9TRlFTRVROU0VYREZHRidcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgY291bnRfYXR0ZW1wdHMgID0gKCBuICkgLT4gcm91bmRzWyBuIF0gPSAoIHJvdW5kc1sgbiBdID89IDAgKSArIDFcbiAgICAgIHJvdW5kcyAgICAgICAgPSB7fVxuICAgICAgb25fc3RhdHMgICAgICAgID0gKCBzdGF0cyApIC0+XG4gICAgICAgICMgaGVscCAnzqlicmJyX18yNycsIHN0YXRzXG4gICAgICAgIHJldHVybiBudWxsIHVubGVzcyBzdGF0cy5uYW1lIGlzICdjaHInXG4gICAgICAgIGNvdW50X2F0dGVtcHRzIHN0YXRzLnJvdW5kc1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgdmFsaWRfcmUgICAgPSAvLy8gXiBbIFxcdTAwMjAtXFx1MDA3ZSBcXHUwMGEwLVxcdTAwYWMgXFx1MDBhZS1cXHUwMGZmIF17IDE1MCB9ICQgLy8vdlxuICAgICAgZ2V0X3JhbmRvbSAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IG51bGwsIG9uX3N0YXRzLCB9XG4gICAgICBmb3IgXyBpbiBbIDEgLi4gMSBdXG4gICAgICAjIGZvciBfIGluIFsgMSAuLiAxMCBdXG4gICAgICAgIHJlc3VsdCA9IGdldF9yYW5kb20udGV4dCB7IG1pbjogMHgwMCwgbWF4OiAweGZmLCBsZW5ndGg6IDE1MCwgfVxuICAgICAgICBAZXEgKCDOqWJyYnJfXzI4ID0gLT4gdmFsaWRfcmUudGVzdCByZXN1bHQgKSwgdHJ1ZVxuICAgICAgIyBkZWJ1ZyAnzqlicmJyX18yOScsIHJvdW5kc1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRfcmFuZG9tX3NldF9vZl9jaHJzOiAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfcmFuZG9tKClcbiAgICBtYXhfY291bnQgICAgICAgPSAxZTRcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICByb3VuZHMgICAgICAgICA9IDBcbiAgICAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSAtPlxuICAgICAgICByb3VuZHMgKz0gc3RhdHMucm91bmRzXG4gICAgICAgICMgdXJnZSAnzqlicmJyX18zMCcsIHN0YXRzIGlmIHN0YXRzLm5hbWUgaXMgJ3NldF9vZl9jaHJzJ1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgdmFsaWRfcmUgICAgPSAvLy8gXiBbIFxcdTAwMjAtXFx1MDA3ZSBcXHUwMGEwLVxcdTAwYWMgXFx1MDBhZS1cXHUwMGZmIF17IDUwIH0gJCAvLy92XG4gICAgICBnZXRfcmFuZG9tICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogbnVsbCwgb25fc3RhdHMsIH1cbiAgICAgIGZvciBfIGluIFsgMSAuLiAyMCBdXG4gICAgICAgIHJlc3VsdCAgICAgID0gZ2V0X3JhbmRvbS5zZXRfb2ZfY2hycyB7IG1pbjogMHgwMCwgbWF4OiAweGZmLCBzaXplOiA1MCwgfVxuICAgICAgICByZXN1bHRfcnByICA9IFsgcmVzdWx0Li4uLCBdLmpvaW4gJydcbiAgICAgICAgQGVxICggzqlicmJyX18zMSA9IC0+IHZhbGlkX3JlLnRlc3QgcmVzdWx0X3JwciApLCB0cnVlXG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fMzInLCByb3VuZHNcbiAgICAgICAgcm91bmRzID0gMFxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICByb3VuZHMgICAgICAgICA9IDBcbiAgICAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSAtPlxuICAgICAgICByb3VuZHMgKz0gc3RhdHMucm91bmRzXG4gICAgICAgICMgdXJnZSAnzqlicmJyX18zMycsIHN0YXRzIGlmIHN0YXRzLm5hbWUgaXMgJ3NldF9vZl9jaHJzJ1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgdmFsaWRfcmUgICAgPSAvLy8gXiBbIDAtOSBdeyAxMCB9ICQgLy8vdlxuICAgICAgZ2V0X3JhbmRvbSAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IG51bGwsIG9uX3N0YXRzLCB9XG4gICAgICBmb3IgXyBpbiBbIDEgLi4gMjAgXVxuICAgICAgICByZXN1bHQgICAgICA9IGdldF9yYW5kb20uc2V0X29mX2NocnMgeyBtaW46ICcwJywgbWF4OiAnOScsIHNpemU6IDEwLCB9XG4gICAgICAgIHJlc3VsdF9ycHIgID0gWyByZXN1bHQuLi4sIF0uam9pbiAnJ1xuICAgICAgICBAZXEgKCDOqWJyYnJfXzM0ID0gLT4gcmVzdWx0LnNpemUgICAgICAgICAgICAgICksIDEwXG4gICAgICAgIEBlcSAoIM6pYnJicl9fMzUgPSAtPiB2YWxpZF9yZS50ZXN0IHJlc3VsdF9ycHIgKSwgdHJ1ZVxuICAgICAgICAjIGRlYnVnICfOqWJyYnJfXzM2Jywgcm91bmRzLCBycHIgcmVzdWx0XG4gICAgICAgIHJvdW5kcyA9IDBcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0X3JhbmRvbV9zZXRfb2ZfdGV4dHM6IC0+XG4gICAgeyBHZXRfcmFuZG9tLFxuICAgICAgaW50ZXJuYWxzLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2dldF9yYW5kb20oKVxuICAgIG1heF9jb3VudCAgICAgICA9IDFlNFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHJvdW5kcyAgICAgICAgID0gMFxuICAgICAgb25fc3RhdHMgICAgICAgID0gKCBzdGF0cyApIC0+XG4gICAgICAgIHJvdW5kcyArPSBzdGF0cy5yb3VuZHNcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIHZhbGlkX3JlICAgID0gLy8vIF4gWyAwLTkgXXsgMyB9ICQgLy8vdlxuICAgICAgZ2V0X3JhbmRvbSAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IG51bGwsIG9uX3N0YXRzLCB9XG4gICAgICBmb3IgXyBpbiBbIDEgLi4gMSBdXG4gICAgICAgIHJlc3VsdCAgICAgID0gZ2V0X3JhbmRvbS5zZXRfb2ZfdGV4dHMgeyBtaW46ICcwJywgbWF4OiAnOScsIGxlbmd0aDogMywgc2l6ZTogMTAsIH1cbiAgICAgICAgQGVxICggzqlicmJyX18zNyA9IC0+IHJlc3VsdC5zaXplICAgICAgICAgICAgICApLCAxMFxuICAgICAgICBmb3IgcmFuZG9tX3RleHQgZnJvbSByZXN1bHRcbiAgICAgICAgICBAZXEgKCDOqWJyYnJfXzM4ID0gLT4gdmFsaWRfcmUudGVzdCByYW5kb21fdGV4dCApLCB0cnVlXG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fMzknLCByb3VuZHMsIHJwciByZXN1bHRcbiAgICAgICAgcm91bmRzID0gMFxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRfcmFuZG9tX3RleHRfb2ZfdmFyaWFibGVfbGVuZ3RoOiAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfcmFuZG9tKClcbiAgICBtYXRjaGVycyAgICAgICAgPSBbICfOtc6nzponLCAnzr/Ovc6uz4YnLCAnzpLOmScsICfOn86gzp/Pgs6bJywgJ863JywgJ8+Iz4jOqc6/JywgJ866zp3OtScsICfOms68zq/OuicsICfPhc6ZJywgJ86fzpsnLCBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgcmVzdWx0X3JvdW5kcyAgID0gbnVsbFxuICAgICAgb25fc3RhdHMgICAgICAgID0gKCBzdGF0cyApID0+XG4gICAgICAgICMgaW5mbyAnzqlicmJyX180MCcsIHN0YXRzXG4gICAgICAgIHJlc3VsdF9yb3VuZHMgPSBzdGF0cy5yb3VuZHNcbiAgICAgICAgQGVxICggzqlicmJyX180MSA9IC0+IHJlc3VsdF9yb3VuZHMgPj0gMCApLCB0cnVlXG4gICAgICBnZXRfcmFuZG9tICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCBvbl9zdGF0cywgfVxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4gOSBdXG4gICAgICAgIHJlc3VsdCAgICAgID0gZ2V0X3JhbmRvbS50ZXh0IHsgbWluOiAnzpEnLCBtYXg6ICfPiScsIG1pbl9sZW5ndGg6IDEsIG1heF9sZW5ndGg6IDUsIH1cbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyX180MicsIHJwciByZXN1bHRcbiAgICAgICAgQGVxICggzqlicmJyX180MyA9IC0+IHJlc3VsdCApLCBtYXRjaGVyc1sgaWR4IF1cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0X3JhbmRvbV90ZXh0X29mX3ZhcmlhYmxlX2xlbmd0aF93aXRoX2ZpbHRlcjogLT5cbiAgICB7IEdldF9yYW5kb20sXG4gICAgICBpbnRlcm5hbHMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X3JhbmRvbSgpXG4gICAgcmVzdWx0X21hdGNoZXJzID0gWyAnzpHOus64JywgJ86RzqMnLCAnzpHOnCcsICfOkc6vzqXOlCcsICfOkc6uzrTOmycsICfOkc6uz4LOtM6gJywgJ86Rzr7Ooc6kzpgnLCAnzpHOpM6azp4nLCAnzpHOs865zpTOtScsICfOkc6uJywgXVxuICAgIHJvdW5kX21hdGNoZXJzICA9IFsgMzQsIDE1LCAxODksIDEyMSwgNzUsIDQ3LCA4NywgNDMsIDExOSwgMjAwLCBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgcmVzdWx0X3JvdW5kcyAgPSBudWxsXG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgPT5cbiAgICAgICAgcmV0dXJuIG51bGwgdW5sZXNzIHN0YXRzLm5hbWUgaXMgJ3RleHQnXG4gICAgICAgICMgaW5mbyAnzqlicmJyX180NCcsIGlkeCwgc3RhdHNcbiAgICAgICAgcmVzdWx0X3JvdW5kcyA9IHN0YXRzLnJvdW5kc1xuICAgICAgICBAZXEgKCDOqWJyYnJfXzQ1ID0gLT4gIHJlc3VsdF9yb3VuZHMgKSwgcm91bmRfbWF0Y2hlcnNbIGlkeCBdXG4gICAgICBnZXRfcmFuZG9tICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCBvbl9zdGF0cywgfVxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4gOSBdXG4gICAgICAgIHJlc3VsdCAgICAgID0gZ2V0X3JhbmRvbS50ZXh0IHsgbWluOiAnzpEnLCBtYXg6ICfPiScsIG1pbl9sZW5ndGg6IDEsIG1heF9sZW5ndGg6IDUsIGZpbHRlcjogL17OkS92LCB9XG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fNDYnLCBycHIgcmVzdWx0XG4gICAgICAgIEBlcSAoIM6pYnJicl9fNDcgPSAtPiAvXs6RW86RLc+JXXswLDR9JC92LnRlc3QgcmVzdWx0ICksIHRydWVcbiAgICAgICAgQGVxICggzqlicmJyX180OCA9IC0+IHJlc3VsdCApLCByZXN1bHRfbWF0Y2hlcnNbIGlkeCBdXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9yYW5kb21fdGV4dF9wcm9kdWNlcjogLT5cbiAgICB7IEdldF9yYW5kb20sXG4gICAgICBpbnRlcm5hbHMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X3JhbmRvbSgpXG4gICAgcmVzdWx0X21hdGNoZXJzID0gWyAnzpHOus64JywgJ86RzqMnLCAnzpHOnCcsICfOkc6vzqXOlCcsICfOkc6uzrTOmycsICfOkc6uz4LOtM6gJywgJ86Rzr7Ooc6kzpgnLCAnzpHOpM6azp4nLCAnzpHOs865zpTOtScsICfOkc6uJywgXVxuICAgIHJvdW5kX21hdGNoZXJzICA9IFsgMzQsIDE1LCAxODksIDEyMSwgNzUsIDQ3LCA4NywgNDMsIDExOSwgMjAwLCBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgcmVzdWx0X3JvdW5kcyAgPSBudWxsXG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgPT5cbiAgICAgICAgcmV0dXJuIG51bGwgdW5sZXNzIHN0YXRzLm5hbWUgaXMgJ3RleHQnXG4gICAgICAgICMgaW5mbyAnzqlicmJyX180OScsIGlkeCwgc3RhdHNcbiAgICAgICAgcmVzdWx0X3JvdW5kcyA9IHN0YXRzLnJvdW5kc1xuICAgICAgICBAZXEgKCDOqWJyYnJfXzUwID0gLT4gIHJlc3VsdF9yb3VuZHMgKSwgcm91bmRfbWF0Y2hlcnNbIGlkeCBdXG4gICAgICBnZXRfcmFuZG9tICAgICAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgb25fc3RhdHMsIH1cbiAgICAgIGdldF9yYW5kb21fdGV4dCA9IGdldF9yYW5kb20udGV4dF9wcm9kdWNlciB7IG1pbjogJ86RJywgbWF4OiAnz4knLCBtaW5fbGVuZ3RoOiAxLCBtYXhfbGVuZ3RoOiA1LCBmaWx0ZXI6IC9ezpEvdiwgfVxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4gOSBdXG4gICAgICAgIHJlc3VsdCAgICAgID0gZ2V0X3JhbmRvbV90ZXh0KClcbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyX181MScsIHJwciByZXN1bHRcbiAgICAgICAgQGVxICggzqlicmJyX181MiA9IC0+IC9ezpFbzpEtz4ldezAsNH0kL3YudGVzdCByZXN1bHQgKSwgdHJ1ZVxuICAgICAgICBAZXEgKCDOqWJyYnJfXzUzID0gLT4gcmVzdWx0ICksIHJlc3VsdF9tYXRjaGVyc1sgaWR4IF1cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0X3JhbmRvbV9mbG9hdF9wcm9kdWNlcjogLT5cbiAgICB7IEdldF9yYW5kb20sXG4gICAgICBpbnRlcm5hbHMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X3JhbmRvbSgpXG4gICAgcmVzdWx0X21hdGNoZXJzID0gWyAxNi4wODQ3MTI4NDg1MzI5NDUsIDE2LjQyNTYwNzk0MDE4MjA5LCAxNC4wMDkxNTIwOTkwMjQ1MDQsIDE4LjE3NDY0MjEyMTg4NDk3MiwgMTIuODYxMTUwMzI2MjA3MjgsIDEwLjIwODMwMjgzNDA3MTIxOSwgMTguNzUzMDkxNDQ4NDUyMzI0LCAxMi40MzAxODMyMDk5NDQ1MTYsIDEyLjYyNzcxNTA1NjI5NjQzOCwgMTIuNDI1MjU5MDY3Njc2OTYxLCBdXG4gICAgIyByb3VuZF9tYXRjaGVycyAgPSBbIDM0LCAxNSwgMTg5LCAxMjEsIDc1LCA0NywgODcsIDQzLCAxMTksIDIwMCwgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHJlc3VsdF9yb3VuZHMgID0gbnVsbFxuICAgICAgb25fc3RhdHMgICAgICAgID0gKCBzdGF0cyApID0+XG4gICAgICAgIHJldHVybiBudWxsIHVubGVzcyBzdGF0cy5uYW1lIGlzICd0ZXh0J1xuICAgICAgICAjIGluZm8gJ86pYnJicl9fNTQnLCBpZHgsIHN0YXRzXG4gICAgICAgIHJlc3VsdF9yb3VuZHMgPSBzdGF0cy5yb3VuZHNcbiAgICAgICAgQGVxICggzqlicmJyX181NSA9IC0+ICByZXN1bHRfcm91bmRzICksIHJvdW5kX21hdGNoZXJzWyBpZHggXVxuICAgICAgZ2V0X3JhbmRvbSAgICAgICAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgb25fc3RhdHMsIH1cbiAgICAgIGZpbHRlciAgICAgICAgICAgID0gKCBuICkgLT4gKCBNYXRoLmZsb29yIG4gKSAlJSAyIGlzIDBcbiAgICAgIGdldF9yYW5kb21fZmxvYXQgID0gZ2V0X3JhbmRvbS5mbG9hdF9wcm9kdWNlciB7IG1pbjogMTAsIG1heDogMjAsIGZpbHRlciwgfVxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4gOSBdXG4gICAgICAgIHJlc3VsdCAgICAgID0gZ2V0X3JhbmRvbV9mbG9hdCgpXG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fNTYnLCBycHIgcmVzdWx0XG4gICAgICAgIEBlcSAoIM6pYnJicl9fNTcgPSAtPiByZXN1bHQgKSwgcmVzdWx0X21hdGNoZXJzWyBpZHggXVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRfcmFuZG9tX2ludGVnZXJfcHJvZHVjZXI6IC0+XG4gICAgeyBHZXRfcmFuZG9tLFxuICAgICAgaW50ZXJuYWxzLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2dldF9yYW5kb20oKVxuICAgIHJlc3VsdF9tYXRjaGVycyA9IFsgMTYsIDE2LCAxNCwgMTIsIDE4LCAxOCwgMjAsIDEwLCAxMiwgMTIsIF1cbiAgICByb3VuZHNfbWF0Y2hlciAgPSBbIDAsIDAsIDAsIDAsIDEsIDAsIDEsIDEsIDIsIDEgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIG15X29uX3N0YXRzICAgICAgICAgPSAoIHN0YXRzICkgPT5cbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyX181OCcsIHN0YXRzXG4gICAgICAgIHJvdW5kcy5wdXNoIHN0YXRzLnJvdW5kcyBpZiBzdGF0cy5uYW1lIGlzICdpbnRlZ2VyJ1xuICAgICAgcm91bmRzICAgICAgICAgICAgID0gW11cbiAgICAgIGdldF9yYW5kb20gICAgICAgICAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgb25fc3RhdHM6IG15X29uX3N0YXRzLCB9XG4gICAgICBmaWx0ZXIgICAgICAgICAgICAgID0gKCBuICkgLT4gKCBNYXRoLmZsb29yIG4gKSAlJSAyIGlzIDBcbiAgICAgIGdldF9yYW5kb21faW50ZWdlciAgPSBnZXRfcmFuZG9tLmludGVnZXJfcHJvZHVjZXIgeyBtaW46IDEwLCBtYXg6IDIwLCBmaWx0ZXIsIH1cbiAgICAgICMgZGVidWcgJ86pYnJicl9fNTknLCBnZXRfcmFuZG9tLmNmZ1xuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4gOSBdXG4gICAgICAgIHJlc3VsdCA9IGdldF9yYW5kb21faW50ZWdlcigpXG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fNjAnLCBycHIgcmVzdWx0XG4gICAgICAgIEBlcSAoIM6pYnJicl9fNjEgPSAtPiByZXN1bHQgKSwgcmVzdWx0X21hdGNoZXJzWyBpZHggXVxuICAgICAgQGVxICggzqlicmJyX182MiA9IC0+IHJvdW5kcyApLCByb3VuZHNfbWF0Y2hlclxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRfcmFuZG9tX3NldF9vZl90ZXh0c19vZl92YXJpYWJsZV9sZW5ndGg6IC0+XG4gICAgeyBHZXRfcmFuZG9tLFxuICAgICAgaW50ZXJuYWxzLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2dldF9yYW5kb20oKVxuICAgICMgbWF0Y2hlcnMgICAgICAgID0gWyAnzrXOp86aJywgJ86/zr3Ors+GJywgJ86SzpknLCAnzp/OoM6fz4LOmycsICfOtycsICfPiM+IzqnOvycsICfOus6dzrUnLCAnzprOvM6vzronLCAnz4XOmScsICfOn86bJywgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHJlc3VsdF9yb3VuZHMgID0gbnVsbFxuICAgICAgb25fc3RhdHMgICAgICAgID0gKCBzdGF0cyApID0+XG4gICAgICAgIGluZm8gJ86pYnJicl9fNjMnLCBzdGF0cyBpZiBzdGF0cy5uYW1lIGlzICdzZXRfb2ZfdGV4dHMnXG4gICAgICAgIHJlc3VsdF9yb3VuZHMgPSBzdGF0cy5yb3VuZHMgaWYgc3RhdHMubmFtZSBpcyAnc2V0X29mX3RleHRzJ1xuICAgICAgICBAZXEgKCDOqWJyYnJfXzY0ID0gLT4gcmVzdWx0X3JvdW5kcyA+PSAwICksIHRydWVcbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIG9uX3N0YXRzLCB9XG4gICAgICBtYXRjaGVycyAgICA9IFtcbiAgICAgICAgbmV3IFNldCBbICfivonivZXivKLivpfivq7ivqknLCAn4r+L4ry94ryE4ryg4r664ry0JywgJ+K8tOK+vOK8picsICfivo/ivponLCAn4r+T4r2b4r6x4r2z4r6d4ryt4r6I4r6c4ryj4r6lJywgXVxuICAgICAgICBuZXcgU2V0IFsgJ+K+neK8peK/h+K8nuK8reK8tScsICfivZDivLjivbonLCAn4ryU4r+T4ryM4r6j4r6F4r6y4r2B4ryNJywgJ+K9suK8qeK8keK/jCcsICfivKnivrbivJXivZPivZAnLCBdXG4gICAgICAgIG5ldyBTZXQgWyAn4ryi4r+A4r6z4r+V4ryU4r+A4ryX4r6J4r2UJywgJ+K+h+K+muK8oOK8mOK8vOK+kCcsICfivI/iv4nivpzivKbivpzivIbivZ4nLCAn4r2N4r2g4r6/4ryU4ryX4r+OJywgJ+K+h+K9pOK/g+K+heK9i+K+jicsIF1cbiAgICAgICAgbmV3IFNldCBbICfivJjivILivpvivpbivKjivpvivpwnLCAn4r2J4ryb4r+J4ryY4r+S4r2C4ryr4r2X4r6cJywgJ+K8lOK/i+K/hCcsICfivJ/ivIXivI7ivoLivK7ivbXivr7ivrzivZQnLCAn4r6o4r2p4r6Q4ryK4ryC4r2GJywgXVxuICAgICAgICBuZXcgU2V0IFsgJ+K9v+K9qeK9iicsICfivL3ivpbivpzivrbivqnivq4nLCAn4r624ryu4r6DJywgJ+K9v+K9uOK+veK8oeK9u+K+iuK8ticsICfivYbivKDivbTivL/ivLzivL/ivavivognLCBdXG4gICAgICAgIG5ldyBTZXQgWyAn4r2jJywgJ+K+seK9u+K9gOK9m+K+veK+suK8puK+tuK8uScsICfivJXivZfivIzivJbivb3ivabivY4nLCAn4r2a4r6M4ry+4r6M4ryn4ryb4ry5JywgJ+K+guK8o+K/gScsIF1cbiAgICAgICAgbmV3IFNldCBbICfivpjivbLivp/ivaTivJgnLCAn4r6B4r6n4r2c4ryV4r6w4r6Q4rypJywgJ+K8seK+keK/g+K/kuK8veK8mScsICfiv4/ivrDivpPivJDivIgnLCAn4r2Y4r2X4r294ryY4r+AJywgXVxuICAgICAgICBuZXcgU2V0IFsgJ+K9s+K8seK8pOK+vuK9t+K+oOK8v+K+lScsICfivJvivILiv4PivLbivK3ivKsnLCAn4ryr4r6A4r6E4r+L4ryP4ry+JywgJ+K9geK8veK8ueK+r+K/g+K9ruK+s+K9keK9qeK9kycsICfivK/ivY7ivrHivavivanivrMnLCBdXG4gICAgICAgIG5ldyBTZXQgWyAn4ry34r6V4ryI4ry24r2p4r2/4r6h4ryD4r6cJywgJ+K+seK/h+K+nuK+tOK9nScsICfivrUnLCAn4r274r+U4r2A4r+O4r6R4r2M4ryk4r2YJywgJ+K/iuK8reK8s+K/kuK8kOK9peK9meK+suK9nycsIF1cbiAgICAgICAgbmV3IFNldCBbICfivaPivaonLCAn4r2Z4ryf4r2w4r6XJywgJ+K9sCcsICfivLTiv5HivoHivbonLCAn4r6Q4r2M4r6g4r6t4r2YJywgXVxuICAgICAgICBdXG4gICAgICBmb3IgaWR4IGluIFsgMCAuLiA5IF1cbiAgICAgICAgcmVzdWx0ID0gZ2V0X3JhbmRvbS5zZXRfb2ZfdGV4dHMgeyBtaW46ICfivIAnLCBtYXg6ICfiv5UnLCBzaXplOiA1LCBtaW5fbGVuZ3RoOiAxLCBtYXhfbGVuZ3RoOiAxMCwgfVxuICAgICAgICBAZXEgKCDOqWJyYnJfXzY1ID0gLT4gcmVzdWx0ICksIG1hdGNoZXJzWyBpZHggXVxuICAgICAgICAjIGRlYnVnICfOqWJyYnJfXzY2JywgcmVzdWx0XG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmVzdWx0X3JvdW5kcyAgPSBudWxsXG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgPT5cbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyX182NycsIHN0YXRzXG4gICAgICAgIHJldHVybiBudWxsIHVubGVzcyBzdGF0cy5uYW1lIGlzICd3YWxrX3VuaXF1ZSdcbiAgICAgICAgcmVzdWx0X3JvdW5kcyA9IHN0YXRzLnJvdW5kc1xuICAgICAgICAjIGRlYnVnICfOqWJyYnJfXzY4JywgcmVzdWx0X3JvdW5kc1xuICAgICAgICBAZXEgKCDOqWJyYnJfXzY5ID0gLT4gcmVzdWx0X3JvdW5kcyApLCBtYXRjaGVyc1sgaWR4IF0ucmVzdWx0X3JvdW5kc1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBnZXRfcmFuZG9tICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCBvbl9zdGF0cywgfVxuICAgICAgbWF0Y2hlcnMgICAgPSBbXG4gICAgICAgIHsgcmVzdWx0X3JvdW5kczogIDQsIHJlc3VsdF9ycHI6ICc1NjQxNzkzMDgyJywgfVxuICAgICAgICB7IHJlc3VsdF9yb3VuZHM6IDYzLCByZXN1bHRfcnByOiAnMjgxNjc5NDUzMCcsIH1cbiAgICAgICAgeyByZXN1bHRfcm91bmRzOiAxMSwgcmVzdWx0X3JwcjogJzQ1MzgxOTYwNzInLCB9XG4gICAgICAgIHsgcmVzdWx0X3JvdW5kczogMjAsIHJlc3VsdF9ycHI6ICc3ODMxOTI0MDU2JywgfVxuICAgICAgICB7IHJlc3VsdF9yb3VuZHM6IDc2LCByZXN1bHRfcnByOiAnMDMyNTQ2NzgxOScsIH1cbiAgICAgICAgeyByZXN1bHRfcm91bmRzOiAgNywgcmVzdWx0X3JwcjogJzMxNDk3NjA1ODInLCB9XG4gICAgICAgIHsgcmVzdWx0X3JvdW5kczogMjAsIHJlc3VsdF9ycHI6ICcyODU3MzYxMDk0JywgfVxuICAgICAgICB7IHJlc3VsdF9yb3VuZHM6IDMxLCByZXN1bHRfcnByOiAnNDUyMzc4NjA5MScsIH1cbiAgICAgICAgeyByZXN1bHRfcm91bmRzOiAxMywgcmVzdWx0X3JwcjogJzQ4MTM1NjAyOTcnLCB9XG4gICAgICAgIHsgcmVzdWx0X3JvdW5kczogMTksIHJlc3VsdF9ycHI6ICc3NDkxMDY1ODIzJywgfVxuICAgICAgICBdXG4gICAgICBmb3IgaWR4IGluIFsgMCAuLiA5IF1cbiAgICAgICAgcmVzdWx0ICAgICAgPSBnZXRfcmFuZG9tLnNldF9vZl90ZXh0cyB7IG1pbjogJzAnLCBtYXg6ICc5Jywgc2l6ZTogMTAsIGxlbmd0aDogMSwgb25fc3RhdHMsIH1cbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyX183MCcsIHJwciByZXN1bHRcbiAgICAgICAgcmVzdWx0X3JwciAgPSBbIHJlc3VsdC4uLiwgXS5qb2luICcnXG4gICAgICAgIEBlcSAoIM6pYnJicl9fNzEgPSAtPiByZXN1bHRfcnByICAgICApLCBtYXRjaGVyc1sgaWR4IF0ucmVzdWx0X3JwclxuICAgICAgICAjIEBlcSAoIM6pYnJicl9fNzIgPSAtPiByZXN1bHRfcm91bmRzICksIG1hdGNoZXJzWyBpZHggXS5yZXN1bHRfcm91bmRzXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGV4aGF1c3Rpb246IC0+XG4gICAgeyBHZXRfcmFuZG9tLFxuICAgICAgaW50ZXJuYWxzLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2dldF9yYW5kb20oKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHJlc3VsdF9yb3VuZHMgID0gbnVsbFxuICAgICAgb25fc3RhdHMgICAgICAgID0gKCBzdGF0cyApID0+XG4gICAgICAgICMgaW5mbyAnzqlicmJyX183MycsIHN0YXRzIGlmIHN0YXRzLm5hbWUgaXMgJ3dhbGsnXG4gICAgICAgICMgcmVzdWx0X3JvdW5kcyA9IHN0YXRzLnJvdW5kcyBpZiBzdGF0cy5uYW1lIGlzICd3YWxrJ1xuICAgICAgICAjIEBlcSAoIM6pYnJicl9fNzQgPSAtPiByZXN1bHRfcm91bmRzID49IDAgKSwgdHJ1ZVxuICAgICAgZ2V0X3JhbmRvbSAgICAgID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIG9uX3N0YXRzLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGNmZyA9XG4gICAgICAgIG1pbjogICAgICAgICAgICAnQSdcbiAgICAgICAgbWF4OiAgICAgICAgICAgICdaJ1xuICAgICAgICBsZW5ndGg6ICAgICAgICAgM1xuICAgICAgICBmaWx0ZXI6ICAgICAgICAgL15bYS16XXszfSQvXG4gICAgICAgIG9uX2V4aGF1c3Rpb246ICdlcnJvcidcbiAgICAgIEB0aHJvd3MgKCDOqWJyYnJfXzc1ID0gLT4gZ2V0X3JhbmRvbS50ZXh0IGNmZyApLCAvZXhoYXVzdGVkL1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICByZXN1bHRfcm91bmRzICA9IG51bGxcbiAgICAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSA9PlxuICAgICAgICAjIGluZm8gJ86pYnJicl9fNzYnLCBzdGF0cyBpZiBzdGF0cy5uYW1lIGlzICd3YWxrJ1xuICAgICAgICAjIHJlc3VsdF9yb3VuZHMgPSBzdGF0cy5yb3VuZHMgaWYgc3RhdHMubmFtZSBpcyAnd2FsaydcbiAgICAgICAgIyBAZXEgKCDOqWJyYnJfXzc3ID0gLT4gcmVzdWx0X3JvdW5kcyA+PSAwICksIHRydWVcbiAgICAgIGdldF9yYW5kb20gICAgICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCBvbl9zdGF0cywgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBjZmcgPVxuICAgICAgICBtaW46ICAgICAgICAgICAgJ0EnXG4gICAgICAgIG1heDogICAgICAgICAgICAnWidcbiAgICAgICAgbGVuZ3RoOiAgICAgICAgIDNcbiAgICAgICAgZmlsdGVyOiAgICAgICAgIC9eW2Etel17M30kL1xuICAgICAgICBvbl9leGhhdXN0aW9uOiAtPiBudWxsXG4gICAgICBAZXEgKCDOqWJyYnJfXzc4ID0gLT4gZ2V0X3JhbmRvbS50ZXh0IGNmZyApLCBudWxsXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHdhbGs6IC0+XG4gICAgeyBHZXRfcmFuZG9tLFxuICAgICAgaW50ZXJuYWxzLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2dldF9yYW5kb20oKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGlkeCAgICAgICAgICAgICA9IC0xXG4gICAgICBnZXRfcmFuZG9tICAgICAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgb25fc3RhdHMsIH1cbiAgICAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSA9PlxuICAgICAgICAjIGluZm8gJ86pYnJicl9fNzknLCBpZHgsIHN0YXRzICMgaWYgc3RhdHMubmFtZSBpcyAnd2FsaydcbiAgICAgICAgaWYgc3RhdHMubmFtZSBpcyAnd2FsaydcbiAgICAgICAgICBAZXEgKCDOqWJyYnJfXzgwID0gLT4gc3RhdHMucm91bmRzICksIG1hdGNoZXIucm91bmRzXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJlc3VsdCAgICA9XG4gICAgICAgIHZhbHVlczogICBbXVxuICAgICAgbWF0Y2hlciAgID1cbiAgICAgICAgdmFsdWVzOiAgIFsgJ8SCxI3DgCcsICd0xKLFhScsICfEvsOmxbEnLCAnSHDFlycsICfFmnpeJywgJ8SWxKfFuycsICfFvMOJxYknLCAnw63ErMSMJywgJ8SpdcS3JywgJ8OsxKt4JywgJ8WqbXwnIF1cbiAgICAgICAgcm91bmRzOiAgIDBcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcHJvZHVjZXIgID0gLT4gZ2V0X3JhbmRvbS50ZXh0IHsgbWluOiAnQScsIG1heDogMHgwMTdmLCBsZW5ndGg6IDMsIG9uX3N0YXRzLCB9XG4gICAgICBmb3IgdmFsdWUgZnJvbSBnZXRfcmFuZG9tLndhbGsgeyBwcm9kdWNlciwgbjogMTEsIG9uX3N0YXRzLCB9XG4gICAgICAgIGlkeCsrXG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fODEnLCBpZHgsIHJwciB2YWx1ZVxuICAgICAgICByZXN1bHQudmFsdWVzLnB1c2ggdmFsdWVcbiAgICAgICAgQGVxICggzqlicmJyX184MiA9IC0+IHZhbHVlICksIG1hdGNoZXIudmFsdWVzWyBpZHggXVxuICAgICAgQGVxICggzqlicmJyX184MyA9IC0+IGlkeCAgICAgICAgICAgICAgICAgICAgKSwgMTBcbiAgICAgIEBlcSAoIM6pYnJicl9fODQgPSAtPiByZXN1bHQudmFsdWVzLmxlbmd0aCAgICksIDExXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIGRvID0+XG4gICAgIyAgIGdldF9yYW5kb20gICAgICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCBvbl9zdGF0cywgfVxuICAgICMgICByZXN1bHRfcm91bmRzICA9IG51bGxcbiAgICAjICAgb25fc3RhdHMgICAgICAgID0gKCBzdGF0cyApID0+XG4gICAgIyAgICAgaW5mbyAnzqlicmJyX184NScsIHN0YXRzIGlmIHN0YXRzLm5hbWUgaXMgJ3dhbGsnXG4gICAgIyAgICAgcmVzdWx0X3JvdW5kcyA9IHN0YXRzLnJvdW5kcyBpZiBzdGF0cy5uYW1lIGlzICd3YWxrJ1xuICAgICMgICAgIEBlcSAoIM6pYnJicl9fODYgPSAtPiByZXN1bHRfcm91bmRzID49IDAgKSwgdHJ1ZVxuICAgICMgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjICAgcHJvZHVjZXIgID0gLT4gZ2V0X3JhbmRvbS50ZXh0IHsgbWluOiAnMCcsIG1heDogJzknLCBsZW5ndGg6IDEsIH1cbiAgICAjICAgY291bnQgICAgID0gMFxuICAgICMgICBzZWVuICAgICAgPSBuZXcgU2V0KClcbiAgICAjICAgZm9yIHggZnJvbSBnZXRfcmFuZG9tLndhbGsgeyBwcm9kdWNlciwgc2VlbiwgbjogNSwgfVxuICAgICMgICAgIGNvdW50KytcbiAgICAjICAgICBkZWJ1ZyAnzqlicmJyX184NycsIGNvdW50LCBycHIgeFxuICAgICMgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHdhbGtfdW5pcXVlOiAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfcmFuZG9tKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBnZXRfcmFuZG9tICAgICAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgb25fc3RhdHMsIH1cbiAgICAgIG1hdGNoZXJzICAgICAgICA9IFsgMTUsIDE2LCAxNCwgMTEsIDE3LCAxOSwgMTMsIDEwLCAxOCwgMTIsIF1cbiAgICAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSA9PlxuICAgICAgICAjIGluZm8gJ86pYnJicl9fODgnLCBzdGF0c1xuICAgICAgICBAZXEgKCDOqWJyYnJfXzg5ID0gLT4gc3RhdHMucm91bmRzICksIDQgaWYgc3RhdHMubmFtZSBpcyAnd2Fsa191bmlxdWUnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHByb2R1Y2VyICA9IC0+IGdldF9yYW5kb20uaW50ZWdlciB7IG1pbjogMTAsIG1heDogMTksIG9uX3N0YXRzLCB9XG4gICAgICBpZHggICAgICAgPSAtMVxuICAgICAgZm9yIHZhbHVlIGZyb20gZ2V0X3JhbmRvbS53YWxrX3VuaXF1ZSB7IHByb2R1Y2VyLCBuOiAxMCwgb25fc3RhdHMsIH1cbiAgICAgICAgaWR4KytcbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyX185MCcsIGlkeCwgcnByIHZhbHVlXG4gICAgICAgIEBlcSAoIM6pYnJicl9fOTEgPSAtPiB2YWx1ZSApLCBtYXRjaGVyc1sgaWR4IF1cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZ2V0X3JhbmRvbSAgICAgID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIG9uX3N0YXRzLCB9XG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgPT5cbiAgICAgICAgQGVxICggzqlicmJyX185MiA9IC0+IHN0YXRzLnJvdW5kcyApLCA0IGlmIHN0YXRzLm5hbWUgaXMgJ3dhbGtfdW5pcXVlJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBwcm9kdWNlciAgPSAtPiBnZXRfcmFuZG9tLmludGVnZXIgeyBtaW46IDEwLCBtYXg6IDE5LCBvbl9zdGF0cywgfVxuICAgICAgQHRocm93cyAoIM6pYnJicl9fOTMgPSAtPiB2YWx1ZSBmb3IgdmFsdWUgZnJvbSBnZXRfcmFuZG9tLndhbGtfdW5pcXVlIHsgcHJvZHVjZXIsIG46IDExLCBvbl9zdGF0cywgfSApLCAvZXhoYXVzdGVkL1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBnZXRfcmFuZG9tICAgICAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgb25fc3RhdHMsIH1cbiAgICAgIG1hdGNoZXJzICAgICAgICA9IFsgMTUsIDE2LCAxNCwgMTEsIDE3LCAxOSwgMTMsIDEwLCAxOCwgMTIsIF1cbiAgICAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSA9PlxuICAgICAgICAjIGluZm8gJ86pYnJicl9fOTQnLCBzdGF0c1xuICAgICAgICBAZXEgKCDOqWJyYnJfXzk1ID0gLT4gc3RhdHMucm91bmRzICksIGdldF9yYW5kb20uY2ZnLm1heF9yb3VuZHMgKyAxIGlmIHN0YXRzLm5hbWUgaXMgJ3dhbGtfdW5pcXVlJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBwcm9kdWNlciAgPSAtPiBnZXRfcmFuZG9tLmludGVnZXIgeyBtaW46IDEwLCBtYXg6IDE5LCBvbl9zdGF0cywgfVxuICAgICAgaWR4ICAgICAgID0gLTFcbiAgICAgIGZvciB2YWx1ZSBmcm9tIGdldF9yYW5kb20ud2Fsa191bmlxdWUgeyBwcm9kdWNlciwgbjogMjAsIG9uX3N0YXRzLCBvbl9leGhhdXN0aW9uOiAnc3RvcCcsIH1cbiAgICAgICAgaWR4KytcbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyX185NicsIGlkeCwgcnByIHZhbHVlXG4gICAgICAgIEBlcSAoIM6pYnJicl9fOTcgPSAtPiB2YWx1ZSApLCBtYXRjaGVyc1sgaWR4IF1cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZ2V0X3JhbmRvbSAgICAgID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIG9uX3N0YXRzLCB9XG4gICAgICBtYXRjaGVycyAgICAgICAgPSAnwqjCr3lEwr7DlsORw7VgJUHDo1Zbw6VINcK2w4LDvMO9w5nDhU/CrsODRcONw4RHw7E/WEl0Wi3Di8Ksw5pkLmtLMsO2SsOeNndzw6/DqcOcw785wrB4wqfDgUJfwrfDgDDDsiZxw6g4w7fDrMKrbsK1wrJcIsK9w51tPMOzZU17UcOtQFDDp8OQK2rCpcOfXsKpw6ZDwqHCscOTaWIsY1xcXFzCszfCo3J+YcOqwr/DhzrDjlN6w7nDmMK6KHxUwrzCpsKqL8O6dcKiw5tZwqTDiSPDsMO+w7jCuG9GVTF9cCRXwqDDlcO0NMOMw6TDiMOrPsOPdsOXTFJdZmdcXCfDrsK0wrnDu8OSw6LDiinCu2jDlCE7w6AqTsOhw4Y9M2wnXG4gICAgICByZXN1bHRzICAgICAgICAgPSBbXVxuICAgICAgbWF4X3JvdW5kcyAgICAgID0gMV8wMDBcbiAgICAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSA9PlxuICAgICAgICAjIGluZm8gJ86pYnJicl9fOTgnLCBzdGF0c1xuICAgICAgICBAZXEgKCDOqWJyYnJfXzk5ID0gLT4gc3RhdHMucm91bmRzICksIG1heF9yb3VuZHMgKyAxIGlmIHN0YXRzLm5hbWUgaXMgJ3dhbGtfdW5pcXVlJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBwcm9kdWNlciAgPSAtPiBnZXRfcmFuZG9tLmNociB7IG1pbjogMHgyMCwgbWF4OiAweGZmLCBvbl9zdGF0cywgfVxuICAgICAgaWR4ICAgICAgID0gLTFcbiAgICAgIGZvciB2YWx1ZSBmcm9tIGdldF9yYW5kb20ud2Fsa191bmlxdWUgeyBwcm9kdWNlciwgbjogMjAwLCBvbl9zdGF0cywgb25fZXhoYXVzdGlvbjogJ3N0b3AnLCBtYXhfcm91bmRzLCB9XG4gICAgICAgIGlkeCsrXG4gICAgICAgICMgZGVidWcgJ86pYnJicl8xMDAnLCBpZHgsIHJwciB2YWx1ZVxuICAgICAgICBAZXEgKCDOqWJyYnJfMTAxID0gLT4gdmFsdWUgKSwgbWF0Y2hlcnNbIGlkeCBdXG4gICAgICAgIHJlc3VsdHMucHVzaCB2YWx1ZVxuICAgICAgIyBkZWJ1ZyAnzqlicmJyXzEwMicsIHJwciByZXN1bHRzLmpvaW4gJydcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZ2V0X3JhbmRvbSAgICAgID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIG9uX3N0YXRzLCB9XG4gICAgICBtYXRjaGVycyAgICAgICAgPSAnwrtow5QhO8OgKk7DocOGPTNsJ1xuICAgICAgcmVzdWx0cyAgICAgICAgID0gW11cbiAgICAgIG1heF9yb3VuZHMgICAgICA9IDFfMDAwXG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgPT5cbiAgICAgICAgIyBpbmZvICfOqWJyYnJfMTAzJywgc3RhdHNcbiAgICAgICAgQGVxICggzqlicmJyXzEwNCA9IC0+IHN0YXRzLnJvdW5kcyApLCBtYXhfcm91bmRzICsgMSBpZiBzdGF0cy5uYW1lIGlzICd3YWxrX3VuaXF1ZSdcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc2VlbiAgICAgID0gbmV3IFNldCAnwqjCr3lEwr7DlsORw7VgJUHDo1Zbw6VINcK2w4LDvMO9w5nDhU/CrsODRcONw4RHw7E/WEl0Wi3Di8Ksw5pkLmtLMsO2SsOeNndzw6/DqcOcw785wrB4wqfDgUJfwrfDgDDDsiZxw6g4w7fDrMKrbsK1wrJcIsK9w51tPMOzZU17UcOtQFDDp8OQK2rCpcOfXsKpw6ZDwqHCscOTaWIsY1xcXFzCszfCo3J+YcOqwr/DhzrDjlN6w7nDmMK6KHxUwrzCpsKqL8O6dcKiw5tZwqTDiSPDsMO+w7jCuG9GVTF9cCRXwqDDlcO0NMOMw6TDiMOrPsOPdsOXTFJdZmdcXCfDrsK0wrnDu8OSw6LDiiknXG4gICAgICBwcm9kdWNlciAgPSAtPiBnZXRfcmFuZG9tLmNociB7IG1pbjogMHgyMCwgbWF4OiAweGZmLCBvbl9zdGF0cywgfVxuICAgICAgaWR4ICAgICAgID0gLTFcbiAgICAgIGZvciB2YWx1ZSBmcm9tIGdldF9yYW5kb20ud2Fsa191bmlxdWUgeyBwcm9kdWNlciwgbjogMjAwLCBzZWVuLCBvbl9zdGF0cywgb25fZXhoYXVzdGlvbjogJ3N0b3AnLCBtYXhfcm91bmRzLCB9XG4gICAgICAgIGlkeCsrXG4gICAgICAgICMgZGVidWcgJ86pYnJicl8xMDUnLCBpZHgsIHJwciB2YWx1ZVxuICAgICAgICBAZXEgKCDOqWJyYnJfMTA2ID0gLT4gdmFsdWUgKSwgbWF0Y2hlcnNbIGlkeCBdXG4gICAgICAgIHJlc3VsdHMucHVzaCB2YWx1ZVxuICAgICAgIyBkZWJ1ZyAnzqlicmJyXzEwNycsIHJwciByZXN1bHRzLmpvaW4gJydcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZ2V0X3JhbmRvbSAgICAgID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIG9uX3N0YXRzLCB9XG4gICAgICBtYXRjaGVycyAgICAgICAgPSAncHFrZXN1bnloYmV3Z2Nyc3psdm9mcXNldCdcbiAgICAgIHJlc3VsdHMgICAgICAgICA9IFtdXG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgPT5cbiAgICAgICAgIyBpbmZvICfOqWJyYnJfMTA4Jywgc3RhdHNcbiAgICAgICAgQGVxICggzqlicmJyXzEwOSA9IC0+IHN0YXRzLnJvdW5kcyApLCA3IGlmIHN0YXRzLm5hbWUgaXMgJ3dhbGtfdW5pcXVlJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzZWVuICAgICAgPSBuZXcgU2V0KClcbiAgICAgIHB1cnZpZXcgICA9IDUgIyMjIE5PVEUgbWF4aW11bSBzaXplIG9mICd3aW5kb3cnIHdoZXJlIHVucWl1ZW5lc3MgaXMgZ3VhcmFudGVlZDsgYHNlZW5gIHdpbGwgbm90IGdyb3cgYmV5b25kIHRoaXMgIyMjXG4gICAgICBwcm9kdWNlciAgPSAtPiBnZXRfcmFuZG9tLmNociB7IG1pbjogJ2EnLCBtYXg6ICd6Jywgb25fc3RhdHMsIH1cbiAgICAgIGlkeCAgICAgICA9IC0xXG4gICAgICBmb3IgdmFsdWUgZnJvbSBnZXRfcmFuZG9tLndhbGtfdW5pcXVlIHsgcHJvZHVjZXIsIG46IDI1LCBzZWVuLCBwdXJ2aWV3LCBvbl9zdGF0cywgb25fZXhoYXVzdGlvbjogJ3N0b3AnLCB9XG4gICAgICAgIGlkeCsrXG4gICAgICAgICMgZGVidWcgJ86pYnJicl8xMTAnLCBpZHgsIHJwciB2YWx1ZVxuICAgICAgICBAZXEgKCDOqWJyYnJfMTExID0gLT4gdmFsdWUgKSwgbWF0Y2hlcnNbIGlkeCBdXG4gICAgICAgIHJlc3VsdHMucHVzaCB2YWx1ZVxuICAgICAgQGVxICggzqlicmJyXzExMiA9IC0+IFsgc2Vlbi4uLiwgXS5qb2luICcnICksICdvZnFzZXQnXG4gICAgICBAZXEgKCDOqWJyYnJfMTEzID0gLT4gc2Vlbi5zaXplICksIHB1cnZpZXcgKyAxXG4gICAgICAjIGRlYnVnICfOqWJyYnJfMTE0JywgcnByIHJlc3VsdHMuam9pbiAnJ1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBnZXRfcmFuZG9tICAgICAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgb25fc3RhdHMsIH1cbiAgICAgIG1hdGNoZXJzICAgICAgICA9ICc0MzI1NjE0MzI1NjE0MzI1NjE0MzI1NjE0J1xuICAgICAgcmVzdWx0cyAgICAgICAgID0gW11cbiAgICAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSA9PlxuICAgICAgICAjIGluZm8gJ86pYnJicl8xMTUnLCBzdGF0c1xuICAgICAgICBAZXEgKCDOqWJyYnJfMTE2ID0gLT4gc3RhdHMucm91bmRzICksIDY0IGlmIHN0YXRzLm5hbWUgaXMgJ3dhbGtfdW5pcXVlJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzZWVuICAgICAgPSBuZXcgU2V0KClcbiAgICAgIHB1cnZpZXcgICA9IDUgIyMjIE5PVEUgbWF4aW11bSBzaXplIG9mICd3aW5kb3cnIHdoZXJlIHVucWl1ZW5lc3MgaXMgZ3VhcmFudGVlZDsgYHNlZW5gIHdpbGwgbm90IGdyb3cgYmV5b25kIHRoaXMgIyMjXG4gICAgICBwcm9kdWNlciAgPSAtPiBnZXRfcmFuZG9tLmNociB7IG1pbjogJzEnLCBtYXg6ICc2Jywgb25fc3RhdHMsIH1cbiAgICAgIGlkeCAgICAgICA9IC0xXG4gICAgICBmb3IgdmFsdWUgZnJvbSBnZXRfcmFuZG9tLndhbGtfdW5pcXVlIHsgcHJvZHVjZXIsIG46IDI1LCBzZWVuLCBwdXJ2aWV3LCBvbl9zdGF0cywgb25fZXhoYXVzdGlvbjogJ3N0b3AnLCB9XG4gICAgICAgIGlkeCsrXG4gICAgICAgICMgZGVidWcgJ86pYnJicl8xMTcnLCBpZHgsIHJwciB2YWx1ZVxuICAgICAgICBAZXEgKCDOqWJyYnJfMTE4ID0gLT4gdmFsdWUgKSwgbWF0Y2hlcnNbIGlkeCBdXG4gICAgICAgIHJlc3VsdHMucHVzaCB2YWx1ZVxuICAgICAgQGVxICggzqlicmJyXzExOSA9IC0+IFsgc2Vlbi4uLiwgXS5qb2luICcnICksICczMjU2MTQnXG4gICAgICBAZXEgKCDOqWJyYnJfMTIwID0gLT4gc2Vlbi5zaXplICksIHB1cnZpZXcgKyAxXG4gICAgICAjIGRlYnVnICfOqWJyYnJfMTIxJywgcnByIHJlc3VsdHMuam9pbiAnJ1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBnZXRfcmFuZG9tICAgICAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgb25fc3RhdHMsIH1cbiAgICAgIG1hdGNoZXJzICAgICAgICA9ICc1MzI2NDcxMzI2NTc0MzIxNjU0NzIzNjUxNzI0MzY1MTI3MzY1NDEyMzY1NDEnXG4gICAgICByZXN1bHRzICAgICAgICAgPSBbXVxuICAgICAgb25fc3RhdHMgICAgICAgID0gKCBzdGF0cyApID0+XG4gICAgICAgICMgaW5mbyAnzqlicmJyXzEyMicsIHN0YXRzXG4gICAgICAgIEBlcSAoIM6pYnJicl8xMjMgPSAtPiBzdGF0cy5yb3VuZHMgKSwgMTI5IGlmIHN0YXRzLm5hbWUgaXMgJ3dhbGtfdW5pcXVlJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzZWVuICAgICAgPSBuZXcgU2V0KClcbiAgICAgIHB1cnZpZXcgICA9IDUgIyMjIE5PVEUgbWF4aW11bSBzaXplIG9mICd3aW5kb3cnIHdoZXJlIHVucWl1ZW5lc3MgaXMgZ3VhcmFudGVlZDsgYHNlZW5gIHdpbGwgbm90IGdyb3cgYmV5b25kIHRoaXMgIyMjXG4gICAgICBwcm9kdWNlciAgPSAtPiBnZXRfcmFuZG9tLmNociB7IG1pbjogJzEnLCBtYXg6ICc3Jywgb25fc3RhdHMsIH1cbiAgICAgIGlkeCAgICAgICA9IC0xXG4gICAgICBmb3IgdmFsdWUgZnJvbSBnZXRfcmFuZG9tLndhbGtfdW5pcXVlIHsgcHJvZHVjZXIsIG46IDQ1LCBzZWVuLCBwdXJ2aWV3LCBvbl9zdGF0cywgb25fZXhoYXVzdGlvbjogJ3N0b3AnLCB9XG4gICAgICAgIGlkeCsrXG4gICAgICAgICMgZGVidWcgJ86pYnJicl8xMjQnLCBpZHgsIHJwciB2YWx1ZVxuICAgICAgICBAZXEgKCDOqWJyYnJfMTI1ID0gLT4gdmFsdWUgKSwgbWF0Y2hlcnNbIGlkeCBdXG4gICAgICAgIHJlc3VsdHMucHVzaCB2YWx1ZVxuICAgICAgQGVxICggzqlicmJyXzEyNiA9IC0+IFsgc2Vlbi4uLiwgXS5qb2luICcnICksICcyMzY1NDEnXG4gICAgICBAZXEgKCDOqWJyYnJfMTI3ID0gLT4gc2Vlbi5zaXplICksIHB1cnZpZXcgKyAxXG4gICAgICAjIGRlYnVnICfOqWJyYnJfMTI4JywgcnByIHJlc3VsdHMuam9pbiAnJ1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzdGF0czogLT5cbiAgICB7IEdldF9yYW5kb20sXG4gICAgICBpbnRlcm5hbHMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X3JhbmRvbSgpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgc2VudGluZWwgICAgICA9IFN5bWJvbCAnc2VudGluZWwnXG4gICAgICBvbl9leGhhdXN0aW9uID0gLT4gc2VudGluZWxcbiAgICAgIHN0YXRzID0gbmV3IGludGVybmFscy5TdGF0cyB7IG5hbWU6ICdzb21ldGhpbmcnLCBvbl9leGhhdXN0aW9uLCB9XG4gICAgICBAZXEgICAgICggzqlicmJyXzEyOSA9IC0+IHN0YXRzLm5hbWUgICAgICAgICAgICksICdzb21ldGhpbmcnXG4gICAgICBAZXEgICAgICggzqlicmJyXzEzMCA9IC0+IHN0YXRzLm1heF9yb3VuZHMgICAgICksIGludGVybmFscy5tYXhfcm91bmRzXG4gICAgICBAZXEgICAgICggzqlicmJyXzEzMSA9IC0+IHN0YXRzLnJvdW5kcyAgICAgICAgICksIDBcbiAgICAgIEB0aHJvd3MgKCDOqWJyYnJfMTMyID0gLT4gc3RhdHMucm91bmRzKysgICAgICAgKSwgL0Nhbm5vdCBzZXQgcHJvcGVydHkvXG4gICAgICBAZXEgICAgICggzqlicmJyXzEzMyA9IC0+IHN0YXRzLnJldHJ5KCkgICAgICAgICksIGludGVybmFscy5nb19vblxuICAgICAgQGVxICAgICAoIM6pYnJicl8xMzQgPSAtPiBzdGF0cy5yb3VuZHMgICAgICAgICApLCAxXG4gICAgICBzdGF0cy5fcm91bmRzID0gaW50ZXJuYWxzLm1heF9yb3VuZHMgLSAxXG4gICAgICAjIGRlYnVnICfOqWJyYnJfMTM1Jywgc3RhdHNcbiAgICAgICMgZGVidWcgJ86pYnJicl8xMzYnLCBzdGF0cy5yb3VuZHNcbiAgICAgICMgZGVidWcgJ86pYnJicl8xMzcnLCBpbnRlcm5hbHMubWF4X3JvdW5kc1xuICAgICAgIyBkZWJ1ZyAnzqlicmJyXzEzOCcsIHN0YXRzLm1heF9yb3VuZHNcbiAgICAgIEBlcSAoIM6pYnJicl8xMzkgPSAtPiBzdGF0cy5yZXRyeSgpICksIGludGVybmFscy5nb19vblxuICAgICAgQGVxICggzqlicmJyXzE0MCA9IC0+IHN0YXRzLnJldHJ5KCkgKSwgc2VudGluZWxcbiAgICAgIEBlcSAoIM6pYnJicl8xNDEgPSAtPiBzdGF0cy5yZXRyeSgpICksIHNlbnRpbmVsXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIG9uX2V4aGF1c3Rpb24gPSB1bmRlZmluZWRcbiAgICAgIHN0YXRzID0gbmV3IGludGVybmFscy5TdGF0cyB7IG5hbWU6ICdzb21ldGhpbmcnLCBvbl9leGhhdXN0aW9uLCB9XG4gICAgICBzdGF0cy5fcm91bmRzID0gaW50ZXJuYWxzLm1heF9yb3VuZHMgLSAxXG4gICAgICBAZXEgICAgICggzqlicmJyXzE0MiA9IC0+IHN0YXRzLnJldHJ5KCkgKSwgaW50ZXJuYWxzLmdvX29uXG4gICAgICBAdGhyb3dzICggzqlicmJyXzE0MyA9IC0+IHN0YXRzLnJldHJ5KCkgKSwgL2V4aGF1c3RlZC9cbiAgICAgIEB0aHJvd3MgKCDOqWJyYnJfMTQ0ID0gLT4gc3RhdHMucmV0cnkoKSApLCAvZXhoYXVzdGVkL1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBvbl9leGhhdXN0aW9uID0gbnVsbFxuICAgICAgc3RhdHMgPSBuZXcgaW50ZXJuYWxzLlN0YXRzIHsgbmFtZTogJ3NvbWV0aGluZycsIG9uX2V4aGF1c3Rpb24sIH1cbiAgICAgIHN0YXRzLl9yb3VuZHMgPSBpbnRlcm5hbHMubWF4X3JvdW5kcyAtIDFcbiAgICAgIEBlcSAgICAgKCDOqWJyYnJfMTQ1ID0gLT4gc3RhdHMucmV0cnkoKSApLCBpbnRlcm5hbHMuZ29fb25cbiAgICAgIEB0aHJvd3MgKCDOqWJyYnJfMTQ2ID0gLT4gc3RhdHMucmV0cnkoKSApLCAvZXhoYXVzdGVkL1xuICAgICAgQHRocm93cyAoIM6pYnJicl8xNDcgPSAtPiBzdGF0cy5yZXRyeSgpICksIC9leGhhdXN0ZWQvXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIG9uX2V4aGF1c3Rpb24gPSAnZXJyb3InXG4gICAgICBzdGF0cyA9IG5ldyBpbnRlcm5hbHMuU3RhdHMgeyBuYW1lOiAnc29tZXRoaW5nJywgb25fZXhoYXVzdGlvbiwgfVxuICAgICAgc3RhdHMuX3JvdW5kcyA9IGludGVybmFscy5tYXhfcm91bmRzIC0gMVxuICAgICAgQGVxICAgICAoIM6pYnJicl8xNDggPSAtPiBzdGF0cy5yZXRyeSgpICksIGludGVybmFscy5nb19vblxuICAgICAgQHRocm93cyAoIM6pYnJicl8xNDkgPSAtPiBzdGF0cy5yZXRyeSgpICksIC9leGhhdXN0ZWQvXG4gICAgICBAdGhyb3dzICggzqlicmJyXzE1MCA9IC0+IHN0YXRzLnJldHJ5KCkgKSwgL2V4aGF1c3RlZC9cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgc2VudGluZWwgICAgICA9IFN5bWJvbCAnc2VudGluZWwnXG4gICAgICBzdGF0c19yZXN1bHQgID0gbnVsbFxuICAgICAgb25fZXhoYXVzdGlvbiA9IC0+IHNlbnRpbmVsXG4gICAgICBvbl9zdGF0cyAgICAgID0gLT4gc2VudGluZWxcbiAgICAgIG1heF9yb3VuZHMgICA9IDNcbiAgICAgIHN0YXRzID0gbmV3IGludGVybmFscy5TdGF0cyB7IG5hbWU6ICdzb21ldGhpbmcnLCBvbl9leGhhdXN0aW9uLCBvbl9zdGF0cywgbWF4X3JvdW5kcywgfVxuICAgICAgQGVxICAgICAoIM6pYnJicl8xNTEgPSAtPiBzdGF0cy5yb3VuZHMgKSwgMFxuICAgICAgQGVxICAgICAoIM6pYnJicl8xNTIgPSAtPiBzdGF0cy5yZXRyeSgpICksIGludGVybmFscy5nb19vblxuICAgICAgQGVxICAgICAoIM6pYnJicl8xNTMgPSAtPiBzdGF0cy5yb3VuZHMgKSwgMVxuICAgICAgQGVxICAgICAoIM6pYnJicl8xNTQgPSAtPiBzdGF0cy5yZXRyeSgpICksIGludGVybmFscy5nb19vblxuICAgICAgQGVxICAgICAoIM6pYnJicl8xNTUgPSAtPiBzdGF0cy5yb3VuZHMgKSwgMlxuICAgICAgQGVxICAgICAoIM6pYnJicl8xNTYgPSAtPiBzdGF0cy5yZXRyeSgpICksIGludGVybmFscy5nb19vblxuICAgICAgQGVxICAgICAoIM6pYnJicl8xNTcgPSAtPiBzdGF0cy5yb3VuZHMgKSwgM1xuICAgICAgQGVxICAgICAoIM6pYnJicl8xNTggPSAtPiBzdGF0cy5yZXRyeSgpICksIHNlbnRpbmVsXG4gICAgICBAZXEgICAgICggzqlicmJyXzE1OSA9IC0+IHN0YXRzLmZpbmlzaCAndmFsdWUnICksICd2YWx1ZSdcbiAgICAgIEB0aHJvd3MgKCDOqWJyYnJfMTYwID0gLT4gc3RhdHMuZmluaXNoICd2YWx1ZScgKSwgL2ZpbmlzaGVkL1xuICAgICAgQHRocm93cyAoIM6pYnJicl8xNjEgPSAtPiBzdGF0cy5yZXRyeSgpICksIC9maW5pc2hlZC9cbiAgICAgIEB0aHJvd3MgKCDOqWJyYnJfMTYyID0gLT4gc3RhdHMucmV0cnkoKSApLCAvZmluaXNoZWQvXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlcXVpcmVfZm9ybWF0X3N0YWNrX3BhcnNlX2xpbmU6IC0+XG4gICAgeyBGb3JtYXRfc3RhY2ssXG4gICAgICBmb3JtYXRfc3RhY2ssICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2Zvcm1hdF9zdGFjaygpXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcHJvYmVzX2FuZF9tYXRjaGVycyA9IFtcbiAgICAgIFsgXCJcIlwiYXQgPGFub255bW91cz4gKC9wYXRoL3RvL2hlbmdpc3QtTkcvZGV2L2JyaWNhYnJhYy9zcmMvdGVzdC1kYnJpYy5jb2ZmZWU6MjkwOjExKVwiXCJcIiwgICAgICAgICAgICAgIHsgY2FsbGVlOiAnPGFub255bW91cz4nLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiAnL3BhdGgvdG8vaGVuZ2lzdC1ORy9kZXYvYnJpY2FicmFjL3NyYy90ZXN0LWRicmljLmNvZmZlZScsIGZvbGRlcl9wYXRoOiAnL3BhdGgvdG8vaGVuZ2lzdC1ORy9kZXYvYnJpY2FicmFjL3NyYy8nLCAgZmlsZV9uYW1lOiAndGVzdC1kYnJpYy5jb2ZmZWUnLCAgICAgICAgbGluZV9ucjogMjkwLCAgY29sdW1uX25yOiAxMSwgdHlwZTogJ21haW4nLCAgICAgICB9LCBdXG4gICAgICBbIFwiXCJcImF0IE9iamVjdC48YW5vbnltb3VzPiAoL3BhdGgvdG8vaGVuZ2lzdC1ORy9kZXYvYnJpY2FicmFjL3NyYy90ZXN0LWRicmljLmNvZmZlZToyNDU6NDEpXCJcIlwiLCAgICAgICB7IGNhbGxlZTogJ09iamVjdC48YW5vbnltb3VzPicsICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogJy9wYXRoL3RvL2hlbmdpc3QtTkcvZGV2L2JyaWNhYnJhYy9zcmMvdGVzdC1kYnJpYy5jb2ZmZWUnLCBmb2xkZXJfcGF0aDogJy9wYXRoL3RvL2hlbmdpc3QtTkcvZGV2L2JyaWNhYnJhYy9zcmMvJywgIGZpbGVfbmFtZTogJ3Rlc3QtZGJyaWMuY29mZmVlJywgICAgICAgIGxpbmVfbnI6IDI0NSwgIGNvbHVtbl9ucjogNDEsIHR5cGU6ICdtYWluJywgICAgICAgfSwgXVxuICAgICAgWyBcIlwiXCJhdCBPYmplY3QuPGFub255bW91cz4gKC9wYXRoL3RvL2hlbmdpc3QtTkcvZGV2L2JyaWNhYnJhYy9zcmMvdGVzdC1kYnJpYy5jb2ZmZWU6MzoxKVwiXCJcIiwgICAgICAgICAgeyBjYWxsZWU6ICdPYmplY3QuPGFub255bW91cz4nLCAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6ICcvcGF0aC90by9oZW5naXN0LU5HL2Rldi9icmljYWJyYWMvc3JjL3Rlc3QtZGJyaWMuY29mZmVlJywgZm9sZGVyX3BhdGg6ICcvcGF0aC90by9oZW5naXN0LU5HL2Rldi9icmljYWJyYWMvc3JjLycsICBmaWxlX25hbWU6ICd0ZXN0LWRicmljLmNvZmZlZScsICAgICAgICBsaW5lX25yOiAzLCAgICBjb2x1bW5fbnI6IDEsICB0eXBlOiAnbWFpbicsICAgICAgIH0sIF1cbiAgICAgIFsgXCJcIlwiYXQgZG9fc29tZXRoaW5nICguLi93aGF0ZXZlci9zcmMvdGVzdC1kYnJpYy5jb2ZmZWU6MzoxKVwiXCJcIiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2FsbGVlOiAnZG9fc29tZXRoaW5nJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiAnLi4vd2hhdGV2ZXIvc3JjL3Rlc3QtZGJyaWMuY29mZmVlJywgICAgICAgICAgICAgICAgICAgICAgIGZvbGRlcl9wYXRoOiAnLi4vd2hhdGV2ZXIvc3JjLycsICAgICAgICAgICAgICAgICAgICAgICAgZmlsZV9uYW1lOiAndGVzdC1kYnJpYy5jb2ZmZWUnLCAgICAgICAgbGluZV9ucjogMywgICAgY29sdW1uX25yOiAxLCAgdHlwZTogJ2V4dGVybmFsJywgICB9LCBdXG4gICAgICBbIFwiXCJcImF0IGRvX3NvbWV0aGluZyAoLi9ub2RlX21vZHVsZXMvdGVzdC1kYnJpYy5jb2ZmZWU6MzoxKVwiXCJcIiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNhbGxlZTogJ2RvX3NvbWV0aGluZycsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogJy4vbm9kZV9tb2R1bGVzL3Rlc3QtZGJyaWMuY29mZmVlJywgICAgICAgICAgICAgICAgICAgICAgICBmb2xkZXJfcGF0aDogJy4vbm9kZV9tb2R1bGVzLycsICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVfbmFtZTogJ3Rlc3QtZGJyaWMuY29mZmVlJywgICAgICAgIGxpbmVfbnI6IDMsICAgIGNvbHVtbl9ucjogMSwgIHR5cGU6ICdkZXBlbmRlbmN5JywgfSwgXVxuICAgICAgWyBcIlwiXCJhdCBNb2R1bGUuX2NvbXBpbGUgKG5vZGU6aW50ZXJuYWwvbW9kdWxlcy9janMvbG9hZGVyOjE3Mzg6MTQpXCJcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjYWxsZWU6ICdNb2R1bGUuX2NvbXBpbGUnLCAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6ICdub2RlOmludGVybmFsL21vZHVsZXMvY2pzL2xvYWRlcicsICAgICAgICAgICAgICAgICAgICAgICAgZm9sZGVyX3BhdGg6ICdub2RlOmludGVybmFsL21vZHVsZXMvY2pzLycsICAgICAgICAgICAgICBmaWxlX25hbWU6ICdsb2FkZXInLCAgICAgICAgICAgICAgICAgICBsaW5lX25yOiAxNzM4LCBjb2x1bW5fbnI6IDE0LCB0eXBlOiAnaW50ZXJuYWwnLCAgIH0sIF1cbiAgICAgIFsgXCJcIlwiYXQgT2JqZWN0Li5qcyAobm9kZTppbnRlcm5hbC9tb2R1bGVzL2Nqcy9sb2FkZXI6MTg3MToxMClcIlwiXCIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2FsbGVlOiAnT2JqZWN0Li5qcycsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiAnbm9kZTppbnRlcm5hbC9tb2R1bGVzL2Nqcy9sb2FkZXInLCAgICAgICAgICAgICAgICAgICAgICAgIGZvbGRlcl9wYXRoOiAnbm9kZTppbnRlcm5hbC9tb2R1bGVzL2Nqcy8nLCAgICAgICAgICAgICAgZmlsZV9uYW1lOiAnbG9hZGVyJywgICAgICAgICAgICAgICAgICAgbGluZV9ucjogMTg3MSwgY29sdW1uX25yOiAxMCwgdHlwZTogJ2ludGVybmFsJywgICB9LCBdXG4gICAgICBbIFwiXCJcImF0IE1vZHVsZS5sb2FkIChub2RlOmludGVybmFsL21vZHVsZXMvY2pzL2xvYWRlcjoxNDcwOjMyKVwiXCJcIiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNhbGxlZTogJ01vZHVsZS5sb2FkJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogJ25vZGU6aW50ZXJuYWwvbW9kdWxlcy9janMvbG9hZGVyJywgICAgICAgICAgICAgICAgICAgICAgICBmb2xkZXJfcGF0aDogJ25vZGU6aW50ZXJuYWwvbW9kdWxlcy9janMvJywgICAgICAgICAgICAgIGZpbGVfbmFtZTogJ2xvYWRlcicsICAgICAgICAgICAgICAgICAgIGxpbmVfbnI6IDE0NzAsIGNvbHVtbl9ucjogMzIsIHR5cGU6ICdpbnRlcm5hbCcsICAgfSwgXVxuICAgICAgWyBcIlwiXCJhdCBNb2R1bGUuX2xvYWQgKG5vZGU6aW50ZXJuYWwvbW9kdWxlcy9janMvbG9hZGVyOjEyOTA6MTIpXCJcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjYWxsZWU6ICdNb2R1bGUuX2xvYWQnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6ICdub2RlOmludGVybmFsL21vZHVsZXMvY2pzL2xvYWRlcicsICAgICAgICAgICAgICAgICAgICAgICAgZm9sZGVyX3BhdGg6ICdub2RlOmludGVybmFsL21vZHVsZXMvY2pzLycsICAgICAgICAgICAgICBmaWxlX25hbWU6ICdsb2FkZXInLCAgICAgICAgICAgICAgICAgICBsaW5lX25yOiAxMjkwLCBjb2x1bW5fbnI6IDEyLCB0eXBlOiAnaW50ZXJuYWwnLCAgIH0sIF1cbiAgICAgIFsgXCJcIlwiYXQgVHJhY2luZ0NoYW5uZWwudHJhY2VTeW5jIChub2RlOmRpYWdub3N0aWNzX2NoYW5uZWw6MzIyOjE0KVwiXCJcIiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2FsbGVlOiAnVHJhY2luZ0NoYW5uZWwudHJhY2VTeW5jJywgICAgICAgICAgICAgICAgICBwYXRoOiAnbm9kZTpkaWFnbm9zdGljc19jaGFubmVsJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbGRlcl9wYXRoOiAnJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZV9uYW1lOiAnbm9kZTpkaWFnbm9zdGljc19jaGFubmVsJywgbGluZV9ucjogMzIyLCAgY29sdW1uX25yOiAxNCwgdHlwZTogJ2ludGVybmFsJywgICB9LCBdXG4gICAgICBbIFwiXCJcImF0IHdyYXBNb2R1bGVMb2FkIChub2RlOmludGVybmFsL21vZHVsZXMvY2pzL2xvYWRlcjoyMzg6MjQpXCJcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNhbGxlZTogJ3dyYXBNb2R1bGVMb2FkJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogJ25vZGU6aW50ZXJuYWwvbW9kdWxlcy9janMvbG9hZGVyJywgICAgICAgICAgICAgICAgICAgICAgICBmb2xkZXJfcGF0aDogJ25vZGU6aW50ZXJuYWwvbW9kdWxlcy9janMvJywgICAgICAgICAgICAgIGZpbGVfbmFtZTogJ2xvYWRlcicsICAgICAgICAgICAgICAgICAgIGxpbmVfbnI6IDIzOCwgIGNvbHVtbl9ucjogMjQsIHR5cGU6ICdpbnRlcm5hbCcsICAgfSwgXVxuICAgICAgWyBcIlwiXCJhdCBNb2R1bGUuZXhlY3V0ZVVzZXJFbnRyeVBvaW50IFthcyBydW5NYWluXSAobm9kZTppbnRlcm5hbC9tb2R1bGVzL3J1bl9tYWluOjE1NDo1KVwiXCJcIiwgICAgICAgICAgeyBjYWxsZWU6ICdNb2R1bGUuZXhlY3V0ZVVzZXJFbnRyeVBvaW50IFthcyBydW5NYWluXScsIHBhdGg6ICdub2RlOmludGVybmFsL21vZHVsZXMvcnVuX21haW4nLCAgICAgICAgICAgICAgICAgICAgICAgICAgZm9sZGVyX3BhdGg6ICdub2RlOmludGVybmFsL21vZHVsZXMvJywgICAgICAgICAgICAgICAgICBmaWxlX25hbWU6ICdydW5fbWFpbicsICAgICAgICAgICAgICAgICBsaW5lX25yOiAxNTQsICBjb2x1bW5fbnI6IDUsICB0eXBlOiAnaW50ZXJuYWwnLCAgIH0sIF1cbiAgICAgIFsgXCJcIlwiYXQgbm9kZTppbnRlcm5hbC9tYWluL3J1bl9tYWluX21vZHVsZTozMzo0N1wiXCJcIiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2FsbGVlOiAnW2Fub255bW91c10nLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiAnbm9kZTppbnRlcm5hbC9tYWluL3J1bl9tYWluX21vZHVsZScsICAgICAgICAgICAgICAgICAgICAgIGZvbGRlcl9wYXRoOiAnbm9kZTppbnRlcm5hbC9tYWluLycsICAgICAgICAgICAgICAgICAgICAgZmlsZV9uYW1lOiAncnVuX21haW5fbW9kdWxlJywgICAgICAgICAgbGluZV9ucjogMzMsICAgY29sdW1uX25yOiA0NywgdHlwZTogJ2ludGVybmFsJywgICB9LCBdXG4gICAgICBbIFwiXCJcInNvbWUgb3RoZXIgZm9ybWF0XCJcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNhbGxlZTogJycsIHBhdGg6ICcnLCBmb2xkZXJfcGF0aDogJ3NvbWUgb3RoZXIgZm9ybWF0JywgZmlsZV9uYW1lOiAnJywgbGluZV9ucjogJycsIGNvbHVtbl9ucjogJycsIHR5cGU6ICd1bnBhcnNhYmxlJyB9LCBdXG4gICAgICBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgKCDOqWJyYnJfMTYzID0gLT4gdHlwZV9vZiBmb3JtYXRfc3RhY2sucGFyc2VfbGluZSApLCAnZnVuY3Rpb24nXG4gICAgZm9yIFsgcHJvYmUsIG1hdGNoZXIsIF0gaW4gcHJvYmVzX2FuZF9tYXRjaGVyc1xuICAgICAgQGVxICggzqlicmJyXzE2NCA9IC0+IGZvcm1hdF9zdGFjay5wYXJzZV9saW5lIHByb2JlICksIG1hdGNoZXJcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEB0aHJvd3MgKCDOqWJyYnJfMTY1ID0gLT4gZm9ybWF0X3N0YWNrLnBhcnNlX2xpbmUgNjczICAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgYSB0ZXh0LCBnb3QgYSBmbG9hdC9cbiAgICBAdGhyb3dzICggzqlicmJyXzE2NiA9IC0+IGZvcm1hdF9zdGFjay5wYXJzZV9saW5lIGZhbHNlICAgICAgICAgICAgKSwgL2V4cGVjdGVkIGEgdGV4dCwgZ290IGEgYm9vbGVhbi9cbiAgICBAdGhyb3dzICggzqlicmJyXzE2NyA9IC0+IGZvcm1hdF9zdGFjay5wYXJzZV9saW5lIFN5bWJvbCAnYWJjJyAgICAgKSwgL2V4cGVjdGVkIGEgdGV4dCwgZ290IGEgc3ltYm9sL1xuICAgIEB0aHJvd3MgKCDOqWJyYnJfMTY4ID0gLT4gZm9ybWF0X3N0YWNrLnBhcnNlX2xpbmUgXCJsaW5lIDFcXG5saW5lIDJcIiApLCAvZXhwZWN0ZWQgYSBzaW5nbGUgbGluZSwgZ290IGEgdGV4dCB3aXRoIGxpbmUgYnJlYWtzL1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlcXVpcmVfZm9ybWF0X3N0YWNrX2Zvcm1hdF9saW5lOiAtPlxuICAgIHsgRm9ybWF0X3N0YWNrLFxuICAgICAgZm9ybWF0X3N0YWNrLCAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9mb3JtYXRfc3RhY2soKVxuICAgIHsgc3RyaXBfYW5zaSwgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9zdHJpcF9hbnNpKClcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwcm9iZXNfYW5kX21hdGNoZXJzID0gW1xuICAgICAgWyBcIlwiXCJhdCA8YW5vbnltb3VzPiAoL3BhdGgvdG8vaGVuZ2lzdC1ORy9kZXYvYnJpY2FicmFjL3NyYy90ZXN0LWRicmljLmNvZmZlZToyOTA6MTEpXCJcIlwiLCAgICAgICAgJ+KAlOKAlCAvcGF0aC90by9oZW5naXN0LU5HL2Rldi9icmljYWJyYWMvc3JjL+KAlOKAlHRlc3QtZGJyaWMuY29mZmVlIOKAlOKAlCAoMjkw4oCU4oCUOjExKSDigJTigJQgICAgICAgICAgICAg4oCU4oCUICMgPGFub255bW91cz4oKSDigJTigJQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDigJTigJQnLCBdXG4gICAgICBbIFwiXCJcImF0IE9iamVjdC48YW5vbnltb3VzPiAoL3BhdGgvdG8vaGVuZ2lzdC1ORy9kZXYvYnJpY2FicmFjL3NyYy90ZXN0LWRicmljLmNvZmZlZToyNDU6NDEpXCJcIlwiLCAn4oCU4oCUIC9wYXRoL3RvL2hlbmdpc3QtTkcvZGV2L2JyaWNhYnJhYy9zcmMv4oCU4oCUdGVzdC1kYnJpYy5jb2ZmZWUg4oCU4oCUICgyNDXigJTigJQ6NDEpIOKAlOKAlCAgICAgICAgICAgICDigJTigJQgIyBPYmplY3QuPGFub255bW91cz4oKSDigJTigJQgICAgICAgICAgICAgICAgICAgICAgICAgIOKAlOKAlCcsIF1cbiAgICAgIFsgXCJcIlwiYXQgT2JqZWN0Ljxhbm9ueW1vdXM+ICgvcGF0aC90by9oZW5naXN0LU5HL2Rldi9icmljYWJyYWMvc3JjL3Rlc3QtZGJyaWMuY29mZmVlOjM6MSlcIlwiXCIsICAgICfigJTigJQgL3BhdGgvdG8vaGVuZ2lzdC1ORy9kZXYvYnJpY2FicmFjL3NyYy/igJTigJR0ZXN0LWRicmljLmNvZmZlZSDigJTigJQgKDPigJTigJQ6MSkg4oCU4oCUICAgICAgICAgICAgICAgIOKAlOKAlCAjIE9iamVjdC48YW5vbnltb3VzPigpIOKAlOKAlCAgICAgICAgICAgICAgICAgICAgICAgICAg4oCU4oCUJywgXVxuICAgICAgWyBcIlwiXCJhdCBkb19zb21ldGhpbmcgKC4uL3doYXRldmVyL3NyYy90ZXN0LWRicmljLmNvZmZlZTozOjEpXCJcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ+KAlOKAlCAuLi93aGF0ZXZlci9zcmMv4oCU4oCUdGVzdC1kYnJpYy5jb2ZmZWUg4oCU4oCUICgz4oCU4oCUOjEpIOKAlOKAlCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oCU4oCUICMgZG9fc29tZXRoaW5nKCkg4oCU4oCUICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDigJTigJQnLCBdXG4gICAgICBbIFwiXCJcImF0IGRvX3NvbWV0aGluZyAoLi4vbm9kZV9tb2R1bGVzL3doYXRldmVyL3NyYy90ZXN0LWRicmljLmNvZmZlZTozOjEpXCJcIlwiLCAgICAgICAgICAgICAgICAgICAn4oCU4oCUIC4uL25vZGVfbW9kdWxlcy93aGF0ZXZlci9zcmMv4oCU4oCUdGVzdC1kYnJpYy5jb2ZmZWUg4oCU4oCUICgz4oCU4oCUOjEpIOKAlOKAlCAgICAgICAgICAgICAgICAgICAgICAgICDigJTigJQgIyBkb19zb21ldGhpbmcoKSDigJTigJQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKAlOKAlCcsIF1cbiAgICAgIFsgXCJcIlwiYXQgZG9fc29tZXRoaW5nICguL25vZGVfbW9kdWxlcy90ZXN0LWRicmljLmNvZmZlZTozOjEpXCJcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICfigJTigJQgLi9ub2RlX21vZHVsZXMv4oCU4oCUdGVzdC1kYnJpYy5jb2ZmZWUg4oCU4oCUICgz4oCU4oCUOjEpIOKAlOKAlCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKAlOKAlCAjIGRvX3NvbWV0aGluZygpIOKAlOKAlCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oCU4oCUJywgXVxuICAgICAgWyBcIlwiXCJhdCBNb2R1bGUuX2NvbXBpbGUgKG5vZGU6aW50ZXJuYWwvbW9kdWxlcy9janMvbG9hZGVyOjE3Mzg6MTQpXCJcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgICAgJ+KAlOKAlCBub2RlOmludGVybmFsL21vZHVsZXMvY2pzL+KAlOKAlGxvYWRlciDigJTigJQgKDE3MzjigJTigJQ6MTQpIOKAlOKAlCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oCU4oCUICMgTW9kdWxlLl9jb21waWxlKCkg4oCU4oCUICAgICAgICAgICAgICAgICAgICAgICAgICAgICDigJTigJQnLCBdXG4gICAgICBbIFwiXCJcImF0IE9iamVjdC4uanMgKG5vZGU6aW50ZXJuYWwvbW9kdWxlcy9janMvbG9hZGVyOjE4NzE6MTApXCJcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAn4oCU4oCUIG5vZGU6aW50ZXJuYWwvbW9kdWxlcy9janMv4oCU4oCUbG9hZGVyIOKAlOKAlCAoMTg3MeKAlOKAlDoxMCkg4oCU4oCUICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDigJTigJQgIyBPYmplY3QuLmpzKCkg4oCU4oCUICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKAlOKAlCcsIF1cbiAgICAgIFsgXCJcIlwiYXQgTW9kdWxlLmxvYWQgKG5vZGU6aW50ZXJuYWwvbW9kdWxlcy9janMvbG9hZGVyOjE0NzA6MzIpXCJcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICfigJTigJQgbm9kZTppbnRlcm5hbC9tb2R1bGVzL2Nqcy/igJTigJRsb2FkZXIg4oCU4oCUICgxNDcw4oCU4oCUOjMyKSDigJTigJQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKAlOKAlCAjIE1vZHVsZS5sb2FkKCkg4oCU4oCUICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oCU4oCUJywgXVxuICAgICAgWyBcIlwiXCJhdCBNb2R1bGUuX2xvYWQgKG5vZGU6aW50ZXJuYWwvbW9kdWxlcy9janMvbG9hZGVyOjEyOTA6MTIpXCJcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ+KAlOKAlCBub2RlOmludGVybmFsL21vZHVsZXMvY2pzL+KAlOKAlGxvYWRlciDigJTigJQgKDEyOTDigJTigJQ6MTIpIOKAlOKAlCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oCU4oCUICMgTW9kdWxlLl9sb2FkKCkg4oCU4oCUICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDigJTigJQnLCBdXG4gICAgICBbIFwiXCJcImF0IFRyYWNpbmdDaGFubmVsLnRyYWNlU3luYyAobm9kZTpkaWFnbm9zdGljc19jaGFubmVsOjMyMjoxNClcIlwiXCIsICAgICAgICAgICAgICAgICAgICAgICAgICAn4oCU4oCUIOKAlOKAlG5vZGU6ZGlhZ25vc3RpY3NfY2hhbm5lbCDigJTigJQgKDMyMuKAlOKAlDoxNCkg4oCU4oCUICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDigJTigJQgIyBUcmFjaW5nQ2hhbm5lbC50cmFjZVN5bmMoKSDigJTigJQgICAgICAgICAgICAgICAgICAgIOKAlOKAlCcsIF1cbiAgICAgIFsgXCJcIlwiYXQgd3JhcE1vZHVsZUxvYWQgKG5vZGU6aW50ZXJuYWwvbW9kdWxlcy9janMvbG9hZGVyOjIzODoyNClcIlwiXCIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICfigJTigJQgbm9kZTppbnRlcm5hbC9tb2R1bGVzL2Nqcy/igJTigJRsb2FkZXIg4oCU4oCUICgyMzjigJTigJQ6MjQpIOKAlOKAlCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKAlOKAlCAjIHdyYXBNb2R1bGVMb2FkKCkg4oCU4oCUICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oCU4oCUJywgXVxuICAgICAgWyBcIlwiXCJhdCBNb2R1bGUuZXhlY3V0ZVVzZXJFbnRyeVBvaW50IFthcyBydW5NYWluXSAobm9kZTppbnRlcm5hbC9tb2R1bGVzL3J1bl9tYWluOjE1NDo1KVwiXCJcIiwgICAgJ+KAlOKAlCBub2RlOmludGVybmFsL21vZHVsZXMv4oCU4oCUcnVuX21haW4g4oCU4oCUICgxNTTigJTigJQ6NSkg4oCU4oCUICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oCU4oCUICMgTW9kdWxlLmV4ZWN1dGVVc2VyRW50cnlQb2ludCBbYXMgcnVuTWFpbl0oKSDigJTigJQgICDigJTigJQnLCBdXG4gICAgICBbIFwiXCJcImF0IG5vZGU6aW50ZXJuYWwvbWFpbi9ydW5fbWFpbl9tb2R1bGU6MzM6NDdcIlwiXCIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAn4oCU4oCUIG5vZGU6aW50ZXJuYWwvbWFpbi/igJTigJRydW5fbWFpbl9tb2R1bGUg4oCU4oCUICgzM+KAlOKAlDo0Nykg4oCU4oCUICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDigJTigJQgIyBbYW5vbnltb3VzXSgpIOKAlOKAlCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKAlOKAlCcsIF1cbiAgICAgIFsgXCJcIlwic29tZSBvdGhlciBmb3JtYXRcIlwiXCIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICfigJTigJQgc29tZSBvdGhlciBmb3JtYXTigJTigJQg4oCU4oCUICjigJTigJQ6KSDigJTigJQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKAlOKAlCAjICgpIOKAlOKAlCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oCU4oCUJywgXVxuICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqlicmJyXzE2OSA9IC0+IHR5cGVfb2YgZm9ybWF0X3N0YWNrLmNmZyAgICAgICAgICksICdwb2QnXG4gICAgQGVxICggzqlicmJyXzE3MCA9IC0+IHR5cGVfb2YgZm9ybWF0X3N0YWNrLmZvcm1hdF9saW5lICksICdmdW5jdGlvbidcbiAgICBmb3IgWyBwcm9iZSwgbWF0Y2hlciwgXSBpbiBwcm9iZXNfYW5kX21hdGNoZXJzXG4gICAgICBAZXEgKCDOqWJyYnJfMTcxID0gLT4gc3RyaXBfYW5zaSAoIGZvcm1hdF9zdGFjay5mb3JtYXRfbGluZSBwcm9iZSApLCAn4oCU4oCUJyApLCBtYXRjaGVyXG4gICAgICBlY2hvIGZvcm1hdF9zdGFjay5mb3JtYXRfbGluZSBwcm9iZVxuICAgICAgIyBkZWJ1ZyAnzqlicmJyXzE3NCcsIGRvIM6pYnJicl8xNzUgPSAtPiBycHIgc3RyaXBfYW5zaSAoIGZvcm1hdF9zdGFjay5mb3JtYXRfbGluZSBwcm9iZSApLCAn4oCU4oCUJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQHRocm93cyAoIM6pYnJicl8xNzYgPSAtPiBmb3JtYXRfc3RhY2suZm9ybWF0X2xpbmUgNjczICAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgYSB0ZXh0LCBnb3QgYSBmbG9hdC9cbiAgICBAdGhyb3dzICggzqlicmJyXzE3NyA9IC0+IGZvcm1hdF9zdGFjay5mb3JtYXRfbGluZSBmYWxzZSAgICAgICAgICAgICksIC9leHBlY3RlZCBhIHRleHQsIGdvdCBhIGJvb2xlYW4vXG4gICAgQHRocm93cyAoIM6pYnJicl8xNzggPSAtPiBmb3JtYXRfc3RhY2suZm9ybWF0X2xpbmUgU3ltYm9sICdhYmMnICAgICApLCAvZXhwZWN0ZWQgYSB0ZXh0LCBnb3QgYSBzeW1ib2wvXG4gICAgQHRocm93cyAoIM6pYnJicl8xNzkgPSAtPiBmb3JtYXRfc3RhY2suZm9ybWF0X2xpbmUgXCJsaW5lIDFcXG5saW5lIDJcIiApLCAvZXhwZWN0ZWQgYSBzaW5nbGUgbGluZSwgZ290IGEgdGV4dCB3aXRoIGxpbmUgYnJlYWtzL1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdGVzdHMsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyByZXF1aXJlX2Zvcm1hdF9zdGFja19wYXJzZV9saW5lOiB0ZXN0cy5yZXF1aXJlX2Zvcm1hdF9zdGFja19wYXJzZV9saW5lLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgcmVxdWlyZV9mb3JtYXRfc3RhY2tfZm9ybWF0X2xpbmU6IHRlc3RzLnJlcXVpcmVfZm9ybWF0X3N0YWNrX2Zvcm1hdF9saW5lLCB9XG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgZGVtb19jbGVhbiA9IC0+XG4gICAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBnZXRfcmFuZG9tX2ludGVnZXJfcHJvZHVjZXI6IHRlc3RzLmdldF9yYW5kb21faW50ZWdlcl9wcm9kdWNlciwgfVxuICAgIGEgPSB7fVxuICAgIGIgPSB7IG86IDYsIH1cbiAgICBjID0geyBvOiB1bmRlZmluZWQsIH1cbiAgICBjbGVhbiA9ICggeCApIC0+IE9iamVjdC5mcm9tRW50cmllcyAoIFsgaywgdiwgXSBmb3IgaywgdiBvZiB4IHdoZW4gdj8gKVxuICAgIGRlYnVnICfOqWJyYnJfMTgwJywgZCA9IHsgYS4uLiwgKCBjbGVhbiBiICkuLi4sICggY2xlYW4gYyApLi4uLCB9XG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgcmV0dXJuIG51bGxcbiJdfQ==
//# sourceURL=../src/test-basics.coffee