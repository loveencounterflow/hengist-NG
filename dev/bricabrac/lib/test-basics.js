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
      var Format_stack, format_stack, i, len, matcher, probe, probes_and_matchers, strip_ansi, type_of, Ωbrbr_169, Ωbrbr_170, Ωbrbr_176, Ωbrbr_177, Ωbrbr_178, Ωbrbr_179;
      ({Format_stack, format_stack} = SFMODULES.unstable.require_format_stack());
      ({strip_ansi} = SFMODULES.require_strip_ansi());
      ({type_of} = SFMODULES.unstable.require_type_of());
      //.......................................................................................................
      probes_and_matchers = [[`at <anonymous> (/path/to/hengist-NG/dev/bricabrac/src/test-dbric.coffee:290:11)`, '—— /path/to/hengist-NG/dev/bricabrac/src/——test-dbric.coffee —— (290——:11) ——             —— # <anonymous>() ——'], [`at Object.<anonymous> (/path/to/hengist-NG/dev/bricabrac/src/test-dbric.coffee:245:41)`, '—— /path/to/hengist-NG/dev/bricabrac/src/——test-dbric.coffee —— (245——:41) ——             —— # Object.<anonymous>() ——'], [`at Object.<anonymous> (/path/to/hengist-NG/dev/bricabrac/src/test-dbric.coffee:3:1)`, '—— /path/to/hengist-NG/dev/bricabrac/src/——test-dbric.coffee —— (3——:1) ——                —— # Object.<anonymous>() ——'], [`at do_something (../whatever/src/test-dbric.coffee:3:1)`, '—— ../whatever/src/——test-dbric.coffee —— (3——:1) ——                                      —— # do_something() ——'], [`at do_something (./node_modules/test-dbric.coffee:3:1)`, '—— ./node_modules/——test-dbric.coffee —— (3——:1) ——                                       —— # do_something() ——'], [`at Module._compile (node:internal/modules/cjs/loader:1738:14)`, '—— node:internal/modules/cjs/——loader —— (1738——:14) ——                                   —— # Module._compile() ——'], [`at Object..js (node:internal/modules/cjs/loader:1871:10)`, '—— node:internal/modules/cjs/——loader —— (1871——:10) ——                                   —— # Object..js() ——'], [`at Module.load (node:internal/modules/cjs/loader:1470:32)`, '—— node:internal/modules/cjs/——loader —— (1470——:32) ——                                   —— # Module.load() ——'], [`at Module._load (node:internal/modules/cjs/loader:1290:12)`, '—— node:internal/modules/cjs/——loader —— (1290——:12) ——                                   —— # Module._load() ——'], [`at TracingChannel.traceSync (node:diagnostics_channel:322:14)`, '—— ——node:diagnostics_channel —— (322——:14) ——                                            —— # TracingChannel.traceSync() ——'], [`at wrapModuleLoad (node:internal/modules/cjs/loader:238:24)`, '—— node:internal/modules/cjs/——loader —— (238——:24) ——                                    —— # wrapModuleLoad() ——'], [`at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)`, '—— node:internal/modules/——run_main —— (154——:5) ——                                       —— # Module.executeUserEntryPoint [as runMain]() ——'], [`at node:internal/main/run_main_module:33:47`, '—— node:internal/main/——run_main_module —— (33——:47) ——                                   —— # [anonymous]() ——']];
      //.......................................................................................................
      this.eq((Ωbrbr_169 = function() {
        return type_of(format_stack.cfg);
      }), 'pod');
      this.eq((Ωbrbr_170 = function() {
        return type_of(format_stack.format_line);
      }), 'function');
      for (i = 0, len = probes_and_matchers.length; i < len; i++) {
        [probe, matcher] = probes_and_matchers[i];
        // @eq ( Ωbrbr_171 = -> strip_ansi ( format_stack.format_line probe ), '——' ), matcher
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLFFBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUE7SUFBQTsrREFBQTs7O0VBR0EsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixXQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsS0FIRixFQUlFLElBSkYsRUFLRSxJQUxGLEVBTUUsSUFORixFQU9FLEdBUEYsRUFRRSxJQVJGLEVBU0UsT0FURixFQVVFLEdBVkYsQ0FBQSxHQVU0QixHQUFHLENBQUMsR0FWaEM7O0VBV0EsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUI7O0VBQ0EsS0FBQSxHQUE0QixRQUFBLENBQUUsQ0FBRixDQUFBO1dBQVMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFmLENBQXFCLENBQXJCO0VBQVQ7O0VBQzVCLENBQUEsR0FBNEIsT0FBQSxDQUFRLE9BQVI7O0VBQzVCLENBQUEsQ0FBRSxHQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLDRDQUFSLENBQTVCOztFQUNBLElBQUEsR0FBNEIsT0FBQSxDQUFRLDJCQUFSOztFQUM1QixDQUFBLENBQUUsSUFBRixDQUFBLEdBQTRCLElBQTVCOztFQUNBLFNBQUEsR0FBNEIsT0FBQSxDQUFRLDZDQUFSLEVBOUI1Qjs7O0VBbUNBLFFBQUEsR0FDSTtJQUFBLFNBQUEsRUFBVyxVQUFYO0lBQ0EsU0FBQSxFQUFXLFVBQUEsR0FBYTtFQUR4QixFQXBDSjs7O0VBd0NBLElBQUMsQ0FBQSxLQUFELEdBQVMsS0FBQSxHQUdQLENBQUE7O0lBQUEsZ0JBQUEsRUFBa0IsUUFBQSxDQUFBLENBQUE7QUFDcEIsVUFBQSxVQUFBLEVBQUEsU0FBQSxFQUFBLFFBQUEsRUFBQSxTQUFBLEVBQUEsTUFBQSxFQUFBO01BQUksQ0FBQSxDQUFFLFVBQUYsRUFDRSxTQURGLENBQUEsR0FDa0IsU0FBUyxDQUFDLFFBQVEsQ0FBQyxrQkFBbkIsQ0FBQSxDQURsQjtNQUVBLFFBQUEsR0FBa0I7TUFDbEIsTUFBQSxHQUFrQjtNQUNsQixTQUFBLEdBQWtCO01BQ2xCLElBQUEsR0FBa0IsSUFBSSxHQUFKLENBQUE7TUFFZixDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDUCxZQUFBLFVBQUEsRUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLENBQUEsRUFBQSxLQUFBLEVBQUEsU0FBQSxFQUFBO1FBQU0sVUFBQSxHQUFhLElBQUksVUFBSixDQUFlO1VBQUUsSUFBQSxFQUFNLFFBQVEsQ0FBQztRQUFqQixDQUFmO1FBQ2IsS0FBVyx3RkFBWDtVQUNFLFFBQVEsQ0FBQyxJQUFULENBQWMsQ0FBQSxHQUFJLFVBQVUsQ0FBQyxLQUFYLENBQUEsQ0FBbEI7VUFDQSxJQUFJLENBQUMsR0FBTCxDQUFTLENBQVQ7UUFGRjtRQUdBLEtBQUEsc0RBQUE7O1VBQ0UsTUFBMEMsQ0FBQSxDQUFBLEdBQUksS0FBSixJQUFJLEtBQUosSUFBYSxDQUFiLEVBQTFDO1lBQUEsS0FBQSxDQUFNLFdBQU4sRUFBbUIsQ0FBRSxHQUFGLEVBQU8sS0FBUCxDQUFuQixFQUFBOztRQURGO1FBRUEsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxRQUFRLENBQUMsS0FBVCxDQUFlLFFBQUEsQ0FBRSxDQUFGLENBQUE7bUJBQVMsQ0FBQSxDQUFBLEdBQUksQ0FBSixJQUFJLENBQUosSUFBUyxDQUFUO1VBQVQsQ0FBZjtRQUFILENBQWQsQ0FBSixFQUEyRCxJQUEzRDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDO1FBQVIsQ0FBZCxDQUFKLEVBQWtDLFNBQWxDO0FBQ0EsZUFBTztNQVROLENBQUE7TUFXQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDUCxZQUFBLFVBQUEsRUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxDQUFBLEVBQUE7UUFBTSxVQUFBLEdBQWEsSUFBSSxVQUFKLENBQWU7VUFBRSxJQUFBLEVBQU0sUUFBUSxDQUFDO1FBQWpCLENBQWY7UUFDYixLQUFXLHdGQUFYO1VBQ0UsTUFBTSxDQUFDLElBQVAsQ0FBWSxDQUFBLEdBQUksVUFBVSxDQUFDLEtBQVgsQ0FBQSxDQUFoQjtRQURGO1FBRUEsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRztRQUFILENBQWQsQ0FBSixFQUErQixRQUEvQjtBQUNBLGVBQU87TUFMTixDQUFBO01BT0EsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxLQUFBLEVBQUEsVUFBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUE7UUFBTSxVQUFBLEdBQWEsSUFBSSxVQUFKLENBQWU7VUFBRSxJQUFBLEVBQU0sUUFBUSxDQUFDO1FBQWpCLENBQWY7UUFDYixLQUFBLEdBQVE7UUFDUixLQUFXLHdGQUFYO1VBQ0UsV0FBVyxDQUFFLENBQUEsR0FBSSxVQUFVLENBQUMsS0FBWCxDQUFBLENBQU4sZ0JBQThCLFVBQTlCLFVBQVg7WUFBQSxLQUFBLEdBQUE7O1FBREY7UUFFQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHO1FBQUgsQ0FBZCxDQUFKLEVBQThCLENBQTlCO0FBQ0EsZUFBTztNQU5OLENBQUE7TUFRQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDUCxZQUFBLEtBQUEsRUFBQSxVQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQTtRQUFNLFVBQUEsR0FBZ0IsSUFBSSxVQUFKLENBQUE7UUFDaEIsS0FBQSxHQUFRO1FBQ1IsS0FBVyx3RkFBWDtVQUNFLFdBQVcsQ0FBRSxDQUFBLEdBQUksVUFBVSxDQUFDLEtBQVgsQ0FBQSxDQUFOLGdCQUE4QixVQUE5QixVQUFYO1lBQUEsS0FBQSxHQUFBOztRQURGO1FBRUEsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxLQUFBLEdBQVE7UUFBWCxDQUFkLENBQUosRUFBbUMsSUFBbkM7QUFDQSxlQUFPO01BTk4sQ0FBQTtNQVFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsQ0FBQSxFQUFBLE1BQUEsRUFBQSxPQUFBLEVBQUEsS0FBQSxFQUFBLFVBQUEsRUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxTQUFBLEVBQUE7UUFBTSxVQUFBLEdBQWMsSUFBSSxVQUFKLENBQWU7VUFBRSxJQUFBLEVBQU0sUUFBUSxDQUFDO1FBQWpCLENBQWY7UUFDZCxHQUFBLEdBQWM7UUFDZCxHQUFBLEdBQWM7UUFDZCxPQUFBLEdBQWMsQ0FBQTtRQUNkLEtBQWMseUdBQWQ7VUFDRSxPQUFPLENBQUUsSUFBSSxDQUFDLEtBQUwsQ0FBVyxNQUFBLEdBQVMsRUFBcEIsQ0FBRixDQUFQLEdBQW9DO1FBRHRDO1FBRUEsS0FBVyw2RkFBWDtVQUNFLENBQUEsR0FBSSxVQUFVLENBQUMsS0FBWCxDQUFpQixDQUFFLEdBQUYsRUFBTyxHQUFQLENBQWpCLEVBQVo7O1VBRVEsTUFBQSxHQUFTLElBQUksQ0FBQyxLQUFMLENBQVcsQ0FBQSxHQUFJLEVBQWY7VUFDVCxPQUFPLENBQUUsTUFBRixDQUFQO1VBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTttQkFBRyxDQUFBLEdBQUEsSUFBTyxDQUFQLElBQU8sQ0FBUCxJQUFZLEdBQVo7VUFBSCxDQUFkLENBQUosRUFBd0MsSUFBeEM7UUFMRjtRQU1BLEtBQUEsWUFBQTs7VUFDRSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO21CQUFHLENBQUEsRUFBQSxJQUFNLEtBQU4sSUFBTSxLQUFOLElBQWUsR0FBZjtVQUFILENBQWQsQ0FBSixFQUEyQyxJQUEzQztRQURGO0FBRUEsZUFBTztNQWZOLENBQUEsSUF6Q1A7O0FBMERJLGFBQU87SUEzRFMsQ0FBbEI7O0lBOERBLGtCQUFBLEVBQW9CLFFBQUEsQ0FBQSxDQUFBO0FBQ3RCLFVBQUEsVUFBQSxFQUFBLFNBQUEsRUFBQTtNQUFJLENBQUEsQ0FBRSxVQUFGLEVBQ0UsU0FERixDQUFBLEdBQ2tCLFNBQVMsQ0FBQyxRQUFRLENBQUMsa0JBQW5CLENBQUEsQ0FEbEI7TUFFQSxTQUFBLEdBQWtCO01BRWYsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxDQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBLEVBQUEsVUFBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLFNBQUEsRUFBQTtRQUFNLFVBQUEsR0FBYyxJQUFJLFVBQUosQ0FBZTtVQUFFLElBQUEsRUFBTSxRQUFRLENBQUM7UUFBakIsQ0FBZjtRQUNkLEdBQUEsR0FBYztRQUNkLEdBQUEsR0FBYztRQUNkLE9BQUEsR0FBYyxDQUFBO1FBQ2QsS0FBYyx5R0FBZDtVQUNFLE9BQU8sQ0FBRSxJQUFJLENBQUMsS0FBTCxDQUFXLE1BQUEsR0FBUyxFQUFwQixDQUFGLENBQVAsR0FBb0M7UUFEdEM7UUFFQSxLQUFXLDZGQUFYO1VBQ0UsQ0FBQSxHQUFJLFVBQVUsQ0FBQyxPQUFYLENBQW1CLENBQUUsR0FBRixFQUFPLEdBQVAsQ0FBbkIsRUFBWjs7VUFFUSxNQUFBLEdBQVMsSUFBSSxDQUFDLEtBQUwsQ0FBVyxDQUFBLEdBQUksRUFBZjtVQUNULE9BQU8sQ0FBRSxNQUFGLENBQVA7VUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO21CQUFHLENBQUEsR0FBQSxJQUFPLENBQVAsSUFBTyxDQUFQLElBQVksR0FBWjtVQUFILENBQWQsQ0FBSixFQUF3QyxJQUF4QztRQUxGO1FBTUEsS0FBQSxZQUFBOztVQUNFLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7bUJBQUcsQ0FBQSxFQUFBLElBQU0sS0FBTixJQUFNLEtBQU4sSUFBZSxHQUFmO1VBQUgsQ0FBZCxDQUFKLEVBQTJDLElBQTNDO1FBREY7QUFFQSxlQUFPO01BZk4sQ0FBQSxJQUpQOztBQXFCSSxhQUFPO0lBdEJXLENBOURwQjs7SUF1RkEsY0FBQSxFQUFnQixRQUFBLENBQUEsQ0FBQTtBQUNsQixVQUFBLFVBQUEsRUFBQSxTQUFBLEVBQUE7TUFBSSxDQUFBLENBQUUsVUFBRixFQUNFLFNBREYsQ0FBQSxHQUNrQixTQUFTLENBQUMsUUFBUSxDQUFDLGtCQUFuQixDQUFBLENBRGxCO01BRUEsU0FBQSxHQUFrQjtNQUVmLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsVUFBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBO1FBQU0sVUFBQSxHQUFjLElBQUksVUFBSixDQUFlO1VBQUUsSUFBQSxFQUFNLFFBQVEsQ0FBQztRQUFqQixDQUFmO1FBQ2QsS0FBVyx3RkFBWDtVQUNFLENBQUEsR0FBSSxVQUFVLENBQUMsR0FBWCxDQUFBO1FBRE4sQ0FETjs7QUFJTSxlQUFPO01BTE4sQ0FBQTtNQU9BLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsQ0FBQSxFQUFBLFVBQUEsRUFBQSxNQUFBLEVBQUE7UUFBTSxVQUFBLEdBQWMsSUFBSSxVQUFKLENBQWU7VUFBRSxJQUFBLEVBQU0sUUFBUSxDQUFDO1FBQWpCLENBQWY7UUFDZCxNQUFBLEdBQVM7O0FBQUU7VUFBQSxLQUFnRCwyQkFBaEQ7MEJBQUEsVUFBVSxDQUFDLEdBQVgsQ0FBZTtjQUFFLEdBQUEsRUFBSyxHQUFQO2NBQVksR0FBQSxFQUFLO1lBQWpCLENBQWY7VUFBQSxDQUFBOztZQUFGLENBQStELENBQUMsSUFBaEUsQ0FBcUUsRUFBckU7UUFDVCxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHO1FBQUgsQ0FBZCxDQUFKLEVBQStCLDBDQUEvQjtBQUNBLGVBQU87TUFKTixDQUFBO01BTUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxDQUFBLEVBQUEsVUFBQSxFQUFBLFFBQUEsRUFBQSxNQUFBLEVBQUEsU0FBQSxFQUFBO1FBQU0sUUFBQSxHQUFjLFFBQUEsQ0FBRSxLQUFGLENBQUEsRUFBQSxFQUFwQjs7UUFFTSxVQUFBLEdBQWMsSUFBSSxVQUFKLENBQWU7VUFBRSxJQUFBLEVBQU0sUUFBUSxDQUFDLFNBQWpCO1VBQTRCO1FBQTVCLENBQWY7UUFDZCxNQUFBLEdBQWM7O0FBQUU7VUFBQSxLQUFnRCwyQkFBaEQ7MEJBQUEsVUFBVSxDQUFDLEdBQVgsQ0FBZTtjQUFFLEdBQUEsRUFBSyxHQUFQO2NBQVksR0FBQSxFQUFLO1lBQWpCLENBQWY7VUFBQSxDQUFBOztZQUFGLENBQStELENBQUMsSUFBaEUsQ0FBcUUsRUFBckU7UUFDZCxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLE1BQUEsS0FBVTtRQUFiLENBQWQsQ0FBSixFQUE2RSxLQUE3RTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsYUFBYSxDQUFDLElBQWQsQ0FBbUIsTUFBbkI7UUFBSCxDQUFkLENBQUosRUFBa0QsSUFBbEQ7QUFDQSxlQUFPO01BUE4sQ0FBQTtNQVNBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsQ0FBQSxFQUFBLFVBQUEsRUFBQSxRQUFBLEVBQUEsTUFBQSxFQUFBLFNBQUEsRUFBQTtRQUFNLFFBQUEsR0FBYyxRQUFBLENBQUUsS0FBRixDQUFBLEVBQUEsRUFBcEI7O1FBRU0sVUFBQSxHQUFjLElBQUksVUFBSixDQUFlO1VBQUUsSUFBQSxFQUFNLFFBQVEsQ0FBQyxTQUFqQjtVQUE0QjtRQUE1QixDQUFmO1FBQ2QsTUFBQSxHQUFjOztBQUFFO1VBQUEsS0FBaUUsMkJBQWpFOzBCQUFBLFVBQVUsQ0FBQyxHQUFYLENBQWU7Y0FBRSxHQUFBLEVBQUssSUFBUDtjQUFhLE1BQUEsRUFBUTtZQUFyQixDQUFmO1VBQUEsQ0FBQTs7WUFBRixDQUFnRixDQUFDLElBQWpGLENBQXNGLEVBQXRGLEVBSHBCOztRQUtNLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsc0JBQXNCLENBQUMsSUFBdkIsQ0FBNEIsTUFBNUI7UUFBSCxDQUFkLENBQUosRUFBMkQsSUFBM0Q7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHO1FBQUgsQ0FBZCxDQUFKLEVBQStCLDBDQUEvQjtBQUNBLGVBQU87TUFSTixDQUFBLElBMUJQOztBQW9DSSxhQUFPO0lBckNPLENBdkZoQjs7SUErSEEsdUJBQUEsRUFBeUIsUUFBQSxDQUFBLENBQUE7QUFDM0IsVUFBQSxVQUFBLEVBQUE7TUFBSSxDQUFBLENBQUUsVUFBRixFQUNFLFNBREYsQ0FBQSxHQUNrQixTQUFTLENBQUMsUUFBUSxDQUFDLGtCQUFuQixDQUFBLENBRGxCO01BR0csQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLFVBQUEsRUFBQSxRQUFBLEVBQUEsTUFBQSxFQUFBLE1BQUEsRUFBQSxTQUFBLEVBQUE7UUFBTSxNQUFBLEdBQWM7UUFDZCxRQUFBLEdBQWMsUUFBQSxDQUFFLEtBQUYsQ0FBQTtVQUFhLElBQTBCLEtBQUssQ0FBQyxJQUFOLEtBQWMsS0FBeEM7bUJBQUEsTUFBQSxJQUFVLEtBQUssQ0FBQyxPQUFoQjs7UUFBYjtRQUNkLFVBQUEsR0FBYyxJQUFJLFVBQUosQ0FBZTtVQUFFLElBQUEsRUFBTSxRQUFRLENBQUMsU0FBakI7VUFBNEI7UUFBNUIsQ0FBZjtRQUNkLEdBQUEsR0FBYyxVQUFVLENBQUMsWUFBWCxDQUF3QjtVQUFFLEdBQUEsRUFBSyxJQUFQO1VBQWEsTUFBQSxFQUFRO1FBQXJCLENBQXhCO1FBQ2QsTUFBQSxHQUFjOztBQUFFO1VBQUEsS0FBZSwyQkFBZjswQkFBQSxHQUFBLENBQUE7VUFBQSxDQUFBOztZQUFGLENBQThCLENBQUMsSUFBL0IsQ0FBb0MsRUFBcEMsRUFKcEI7O1FBTU0sSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxzQkFBc0IsQ0FBQyxJQUF2QixDQUE0QixNQUE1QjtRQUFILENBQWQsQ0FBSixFQUEyRCxJQUEzRDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUc7UUFBSCxDQUFkLENBQUosRUFBK0IsMENBQS9CO0FBQ0EsZUFBTztNQVROLENBQUEsSUFIUDs7QUFjSSxhQUFPO0lBZmdCLENBL0h6Qjs7SUFpSkEsZUFBQSxFQUFpQixRQUFBLENBQUEsQ0FBQTtBQUNuQixVQUFBLFVBQUEsRUFBQSxTQUFBLEVBQUE7TUFBSSxDQUFBLENBQUUsVUFBRixFQUNFLFNBREYsQ0FBQSxHQUNrQixTQUFTLENBQUMsUUFBUSxDQUFDLGtCQUFuQixDQUFBLENBRGxCO01BRUEsU0FBQSxHQUFrQjtNQUVmLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsVUFBQSxFQUFBLFFBQUEsRUFBQSxNQUFBLEVBQUE7UUFBTSxRQUFBLEdBQWMsUUFBQSxDQUFFLEtBQUYsQ0FBQSxFQUFBLEVBQXBCOztRQUVNLFVBQUEsR0FBYyxJQUFJLFVBQUosQ0FBZTtVQUFFLElBQUEsRUFBTSxRQUFRLENBQUMsU0FBakI7VUFBNEI7UUFBNUIsQ0FBZjtRQUNkLE1BQUEsR0FBYyxVQUFVLENBQUMsSUFBWCxDQUFnQjtVQUFFLEdBQUEsRUFBSyxHQUFQO1VBQVksR0FBQSxFQUFLLEdBQWpCO1VBQXNCLE1BQUEsRUFBUTtRQUE5QixDQUFoQjtRQUNkLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUc7UUFBSCxDQUFkLENBQUosRUFBK0IsMENBQS9CO0FBQ0EsZUFBTztNQU5OLENBQUE7TUFRQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDUCxZQUFBLENBQUEsRUFBQSxjQUFBLEVBQUEsVUFBQSxFQUFBLENBQUEsRUFBQSxRQUFBLEVBQUEsTUFBQSxFQUFBLE1BQUEsRUFBQSxRQUFBLEVBQUE7UUFBTSxjQUFBLEdBQWtCLFFBQUEsQ0FBRSxDQUFGLENBQUE7aUJBQVMsTUFBTSxDQUFFLENBQUYsQ0FBTixHQUFjLHFCQUFFLE1BQU0sQ0FBRSxDQUFGLElBQU4sTUFBTSxDQUFFLENBQUYsSUFBUyxDQUFqQixDQUFBLEdBQXVCO1FBQTlDO1FBQ2xCLE1BQUEsR0FBZ0IsQ0FBQTtRQUNoQixRQUFBLEdBQWtCLFFBQUEsQ0FBRSxLQUFGLENBQUE7VUFFaEIsSUFBbUIsS0FBSyxDQUFDLElBQU4sS0FBYyxLQUFqQzs7QUFBQSxtQkFBTyxLQUFQOztVQUNBLGNBQUEsQ0FBZSxLQUFLLENBQUMsTUFBckI7QUFDQSxpQkFBTztRQUpTO1FBS2xCLFFBQUEsR0FBYztRQUNkLFVBQUEsR0FBYyxJQUFJLFVBQUosQ0FBZTtVQUFFLElBQUEsRUFBTSxJQUFSO1VBQWM7UUFBZCxDQUFmO1FBQ2QsS0FBUywwQkFBVCxHQUFBOztVQUVFLE1BQUEsR0FBUyxVQUFVLENBQUMsSUFBWCxDQUFnQjtZQUFFLEdBQUEsRUFBSyxJQUFQO1lBQWEsR0FBQSxFQUFLLElBQWxCO1lBQXdCLE1BQUEsRUFBUTtVQUFoQyxDQUFoQjtVQUNULElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7bUJBQUcsUUFBUSxDQUFDLElBQVQsQ0FBYyxNQUFkO1VBQUgsQ0FBZCxDQUFKLEVBQTZDLElBQTdDO1FBSEYsQ0FUTjs7QUFjTSxlQUFPO01BZk4sQ0FBQSxJQVpQOztBQTZCSSxhQUFPO0lBOUJRLENBakpqQjs7SUFrTEEsc0JBQUEsRUFBd0IsUUFBQSxDQUFBLENBQUE7QUFDMUIsVUFBQSxVQUFBLEVBQUEsU0FBQSxFQUFBO01BQUksQ0FBQSxDQUFFLFVBQUYsRUFDRSxTQURGLENBQUEsR0FDa0IsU0FBUyxDQUFDLFFBQVEsQ0FBQyxrQkFBbkIsQ0FBQSxDQURsQjtNQUVBLFNBQUEsR0FBa0I7TUFFZixDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDUCxZQUFBLENBQUEsRUFBQSxVQUFBLEVBQUEsQ0FBQSxFQUFBLFFBQUEsRUFBQSxNQUFBLEVBQUEsVUFBQSxFQUFBLE1BQUEsRUFBQSxRQUFBLEVBQUE7UUFBTSxNQUFBLEdBQWlCO1FBQ2pCLFFBQUEsR0FBa0IsUUFBQSxDQUFFLEtBQUYsQ0FBQTtVQUNoQixNQUFBLElBQVUsS0FBSyxDQUFDLE9BQXhCOztBQUVRLGlCQUFPO1FBSFM7UUFJbEIsUUFBQSxHQUFjO1FBQ2QsVUFBQSxHQUFjLElBQUksVUFBSixDQUFlO1VBQUUsSUFBQSxFQUFNLElBQVI7VUFBYztRQUFkLENBQWY7UUFDZCxLQUFTLDJCQUFUO1VBQ0UsTUFBQSxHQUFjLFVBQVUsQ0FBQyxXQUFYLENBQXVCO1lBQUUsR0FBQSxFQUFLLElBQVA7WUFBYSxHQUFBLEVBQUssSUFBbEI7WUFBd0IsSUFBQSxFQUFNO1VBQTlCLENBQXZCO1VBQ2QsVUFBQSxHQUFjLENBQUUsR0FBQSxNQUFGLENBQWMsQ0FBQyxJQUFmLENBQW9CLEVBQXBCO1VBQ2QsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTttQkFBRyxRQUFRLENBQUMsSUFBVCxDQUFjLFVBQWQ7VUFBSCxDQUFkLENBQUosRUFBaUQsSUFBakQsRUFGUjs7VUFJUSxNQUFBLEdBQVM7UUFMWDtBQU1BLGVBQU87TUFkTixDQUFBO01BZ0JBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsQ0FBQSxFQUFBLFVBQUEsRUFBQSxDQUFBLEVBQUEsUUFBQSxFQUFBLE1BQUEsRUFBQSxVQUFBLEVBQUEsTUFBQSxFQUFBLFFBQUEsRUFBQSxTQUFBLEVBQUE7UUFBTSxNQUFBLEdBQWlCO1FBQ2pCLFFBQUEsR0FBa0IsUUFBQSxDQUFFLEtBQUYsQ0FBQTtVQUNoQixNQUFBLElBQVUsS0FBSyxDQUFDLE9BQXhCOztBQUVRLGlCQUFPO1FBSFM7UUFJbEIsUUFBQSxHQUFjO1FBQ2QsVUFBQSxHQUFjLElBQUksVUFBSixDQUFlO1VBQUUsSUFBQSxFQUFNLElBQVI7VUFBYztRQUFkLENBQWY7UUFDZCxLQUFTLDJCQUFUO1VBQ0UsTUFBQSxHQUFjLFVBQVUsQ0FBQyxXQUFYLENBQXVCO1lBQUUsR0FBQSxFQUFLLEdBQVA7WUFBWSxHQUFBLEVBQUssR0FBakI7WUFBc0IsSUFBQSxFQUFNO1VBQTVCLENBQXZCO1VBQ2QsVUFBQSxHQUFjLENBQUUsR0FBQSxNQUFGLENBQWMsQ0FBQyxJQUFmLENBQW9CLEVBQXBCO1VBQ2QsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTttQkFBRyxNQUFNLENBQUM7VUFBVixDQUFkLENBQUosRUFBaUQsRUFBakQ7VUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO21CQUFHLFFBQVEsQ0FBQyxJQUFULENBQWMsVUFBZDtVQUFILENBQWQsQ0FBSixFQUFpRCxJQUFqRCxFQUhSOztVQUtRLE1BQUEsR0FBUztRQU5YO0FBT0EsZUFBTztNQWZOLENBQUEsSUFwQlA7O0FBcUNJLGFBQU87SUF0Q2UsQ0FsTHhCOztJQTJOQSx1QkFBQSxFQUF5QixRQUFBLENBQUEsQ0FBQTtBQUMzQixVQUFBLFVBQUEsRUFBQSxTQUFBLEVBQUE7TUFBSSxDQUFBLENBQUUsVUFBRixFQUNFLFNBREYsQ0FBQSxHQUNrQixTQUFTLENBQUMsUUFBUSxDQUFDLGtCQUFuQixDQUFBLENBRGxCO01BRUEsU0FBQSxHQUFrQjtNQUVmLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsQ0FBQSxFQUFBLFVBQUEsRUFBQSxDQUFBLEVBQUEsUUFBQSxFQUFBLFdBQUEsRUFBQSxNQUFBLEVBQUEsTUFBQSxFQUFBLFFBQUEsRUFBQSxTQUFBLEVBQUE7UUFBTSxNQUFBLEdBQWlCO1FBQ2pCLFFBQUEsR0FBa0IsUUFBQSxDQUFFLEtBQUYsQ0FBQTtVQUNoQixNQUFBLElBQVUsS0FBSyxDQUFDO0FBQ2hCLGlCQUFPO1FBRlM7UUFHbEIsUUFBQSxHQUFjO1FBQ2QsVUFBQSxHQUFjLElBQUksVUFBSixDQUFlO1VBQUUsSUFBQSxFQUFNLElBQVI7VUFBYztRQUFkLENBQWY7UUFDZCxLQUFTLDBCQUFUO1VBQ0UsTUFBQSxHQUFjLFVBQVUsQ0FBQyxZQUFYLENBQXdCO1lBQUUsR0FBQSxFQUFLLEdBQVA7WUFBWSxHQUFBLEVBQUssR0FBakI7WUFBc0IsTUFBQSxFQUFRLENBQTlCO1lBQWlDLElBQUEsRUFBTTtVQUF2QyxDQUF4QjtVQUNkLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7bUJBQUcsTUFBTSxDQUFDO1VBQVYsQ0FBZCxDQUFKLEVBQWlELEVBQWpEO1VBQ0EsS0FBQSxxQkFBQTtZQUNFLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7cUJBQUcsUUFBUSxDQUFDLElBQVQsQ0FBYyxXQUFkO1lBQUgsQ0FBZCxDQUFKLEVBQWtELElBQWxEO1VBREYsQ0FGUjs7VUFLUSxNQUFBLEdBQVM7UUFOWDtBQU9BLGVBQU87TUFkTixDQUFBLElBSlA7O0FBb0JJLGFBQU87SUFyQmdCLENBM056Qjs7SUFtUEEsa0NBQUEsRUFBb0MsUUFBQSxDQUFBLENBQUE7QUFDdEMsVUFBQSxVQUFBLEVBQUEsU0FBQSxFQUFBO01BQUksQ0FBQSxDQUFFLFVBQUYsRUFDRSxTQURGLENBQUEsR0FDa0IsU0FBUyxDQUFDLFFBQVEsQ0FBQyxrQkFBbkIsQ0FBQSxDQURsQjtNQUVBLFFBQUEsR0FBa0IsQ0FBRSxLQUFGLEVBQVMsTUFBVCxFQUFpQixJQUFqQixFQUF1QixPQUF2QixFQUFnQyxHQUFoQyxFQUFxQyxNQUFyQyxFQUE2QyxLQUE3QyxFQUFvRCxNQUFwRCxFQUE0RCxJQUE1RCxFQUFrRSxJQUFsRTtNQUVmLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsVUFBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsUUFBQSxFQUFBLE1BQUEsRUFBQSxhQUFBLEVBQUE7UUFBTSxhQUFBLEdBQWtCO1FBQ2xCLFFBQUEsR0FBa0IsQ0FBRSxLQUFGLENBQUEsR0FBQTtBQUN4QixjQUFBLFNBQUE7O1VBQ1EsYUFBQSxHQUFnQixLQUFLLENBQUM7aUJBQ3RCLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7bUJBQUcsYUFBQSxJQUFpQjtVQUFwQixDQUFkLENBQUosRUFBMkMsSUFBM0M7UUFIZ0I7UUFJbEIsVUFBQSxHQUFjLElBQUksVUFBSixDQUFlO1VBQUUsSUFBQSxFQUFNLFFBQVEsQ0FBQyxTQUFqQjtVQUE0QjtRQUE1QixDQUFmO1FBQ2QsS0FBVyw4QkFBWDtVQUNFLE1BQUEsR0FBYyxVQUFVLENBQUMsSUFBWCxDQUFnQjtZQUFFLEdBQUEsRUFBSyxHQUFQO1lBQVksR0FBQSxFQUFLLEdBQWpCO1lBQXNCLFVBQUEsRUFBWSxDQUFsQztZQUFxQyxVQUFBLEVBQVk7VUFBakQsQ0FBaEIsRUFBdEI7O1VBRVEsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTttQkFBRztVQUFILENBQWQsQ0FBSixFQUErQixRQUFRLENBQUUsR0FBRixDQUF2QztRQUhGO0FBSUEsZUFBTztNQVhOLENBQUEsSUFKUDs7QUFpQkksYUFBTztJQWxCMkIsQ0FuUHBDOztJQXdRQSw4Q0FBQSxFQUFnRCxRQUFBLENBQUEsQ0FBQTtBQUNsRCxVQUFBLFVBQUEsRUFBQSxTQUFBLEVBQUEsZUFBQSxFQUFBO01BQUksQ0FBQSxDQUFFLFVBQUYsRUFDRSxTQURGLENBQUEsR0FDa0IsU0FBUyxDQUFDLFFBQVEsQ0FBQyxrQkFBbkIsQ0FBQSxDQURsQjtNQUVBLGVBQUEsR0FBa0IsQ0FBRSxLQUFGLEVBQVMsSUFBVCxFQUFlLElBQWYsRUFBcUIsTUFBckIsRUFBNkIsTUFBN0IsRUFBcUMsT0FBckMsRUFBOEMsT0FBOUMsRUFBdUQsTUFBdkQsRUFBK0QsT0FBL0QsRUFBd0UsSUFBeEU7TUFDbEIsY0FBQSxHQUFrQixDQUFFLEVBQUYsRUFBTSxFQUFOLEVBQVUsR0FBVixFQUFlLEdBQWYsRUFBb0IsRUFBcEIsRUFBd0IsRUFBeEIsRUFBNEIsRUFBNUIsRUFBZ0MsRUFBaEMsRUFBb0MsR0FBcEMsRUFBeUMsR0FBekM7TUFFZixDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDUCxZQUFBLFVBQUEsRUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLFFBQUEsRUFBQSxNQUFBLEVBQUEsYUFBQSxFQUFBLFNBQUEsRUFBQTtRQUFNLGFBQUEsR0FBaUI7UUFDakIsUUFBQSxHQUFrQixDQUFFLEtBQUYsQ0FBQSxHQUFBO0FBQ3hCLGNBQUE7VUFBUSxJQUFtQixLQUFLLENBQUMsSUFBTixLQUFjLE1BQWpDO0FBQUEsbUJBQU8sS0FBUDtXQUFSOztVQUVRLGFBQUEsR0FBZ0IsS0FBSyxDQUFDO2lCQUN0QixJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO21CQUFJO1VBQUosQ0FBZCxDQUFKLEVBQXVDLGNBQWMsQ0FBRSxHQUFGLENBQXJEO1FBSmdCO1FBS2xCLFVBQUEsR0FBYyxJQUFJLFVBQUosQ0FBZTtVQUFFLElBQUEsRUFBTSxRQUFRLENBQUMsU0FBakI7VUFBNEI7UUFBNUIsQ0FBZjtRQUNkLEtBQVcsOEJBQVg7VUFDRSxNQUFBLEdBQWMsVUFBVSxDQUFDLElBQVgsQ0FBZ0I7WUFBRSxHQUFBLEVBQUssR0FBUDtZQUFZLEdBQUEsRUFBSyxHQUFqQjtZQUFzQixVQUFBLEVBQVksQ0FBbEM7WUFBcUMsVUFBQSxFQUFZLENBQWpEO1lBQW9ELE1BQUEsRUFBUTtVQUE1RCxDQUFoQixFQUF0Qjs7VUFFUSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO21CQUFHLGdCQUFnQixDQUFDLElBQWpCLENBQXNCLE1BQXRCO1VBQUgsQ0FBZCxDQUFKLEVBQXFELElBQXJEO1VBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTttQkFBRztVQUFILENBQWQsQ0FBSixFQUErQixlQUFlLENBQUUsR0FBRixDQUE5QztRQUpGO0FBS0EsZUFBTztNQWJOLENBQUEsSUFMUDs7QUFvQkksYUFBTztJQXJCdUMsQ0F4UWhEOztJQWdTQSx3QkFBQSxFQUEwQixRQUFBLENBQUEsQ0FBQTtBQUM1QixVQUFBLFVBQUEsRUFBQSxTQUFBLEVBQUEsZUFBQSxFQUFBO01BQUksQ0FBQSxDQUFFLFVBQUYsRUFDRSxTQURGLENBQUEsR0FDa0IsU0FBUyxDQUFDLFFBQVEsQ0FBQyxrQkFBbkIsQ0FBQSxDQURsQjtNQUVBLGVBQUEsR0FBa0IsQ0FBRSxLQUFGLEVBQVMsSUFBVCxFQUFlLElBQWYsRUFBcUIsTUFBckIsRUFBNkIsTUFBN0IsRUFBcUMsT0FBckMsRUFBOEMsT0FBOUMsRUFBdUQsTUFBdkQsRUFBK0QsT0FBL0QsRUFBd0UsSUFBeEU7TUFDbEIsY0FBQSxHQUFrQixDQUFFLEVBQUYsRUFBTSxFQUFOLEVBQVUsR0FBVixFQUFlLEdBQWYsRUFBb0IsRUFBcEIsRUFBd0IsRUFBeEIsRUFBNEIsRUFBNUIsRUFBZ0MsRUFBaEMsRUFBb0MsR0FBcEMsRUFBeUMsR0FBekM7TUFFZixDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDUCxZQUFBLFVBQUEsRUFBQSxlQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxRQUFBLEVBQUEsTUFBQSxFQUFBLGFBQUEsRUFBQSxTQUFBLEVBQUE7UUFBTSxhQUFBLEdBQWlCO1FBQ2pCLFFBQUEsR0FBa0IsQ0FBRSxLQUFGLENBQUEsR0FBQTtBQUN4QixjQUFBO1VBQVEsSUFBbUIsS0FBSyxDQUFDLElBQU4sS0FBYyxNQUFqQztBQUFBLG1CQUFPLEtBQVA7V0FBUjs7VUFFUSxhQUFBLEdBQWdCLEtBQUssQ0FBQztpQkFDdEIsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTttQkFBSTtVQUFKLENBQWQsQ0FBSixFQUF1QyxjQUFjLENBQUUsR0FBRixDQUFyRDtRQUpnQjtRQUtsQixVQUFBLEdBQWtCLElBQUksVUFBSixDQUFlO1VBQUUsSUFBQSxFQUFNLFFBQVEsQ0FBQyxTQUFqQjtVQUE0QjtRQUE1QixDQUFmO1FBQ2xCLGVBQUEsR0FBa0IsVUFBVSxDQUFDLGFBQVgsQ0FBeUI7VUFBRSxHQUFBLEVBQUssR0FBUDtVQUFZLEdBQUEsRUFBSyxHQUFqQjtVQUFzQixVQUFBLEVBQVksQ0FBbEM7VUFBcUMsVUFBQSxFQUFZLENBQWpEO1VBQW9ELE1BQUEsRUFBUTtRQUE1RCxDQUF6QjtRQUNsQixLQUFXLDhCQUFYO1VBQ0UsTUFBQSxHQUFjLGVBQUEsQ0FBQSxFQUF0Qjs7VUFFUSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO21CQUFHLGdCQUFnQixDQUFDLElBQWpCLENBQXNCLE1BQXRCO1VBQUgsQ0FBZCxDQUFKLEVBQXFELElBQXJEO1VBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTttQkFBRztVQUFILENBQWQsQ0FBSixFQUErQixlQUFlLENBQUUsR0FBRixDQUE5QztRQUpGO0FBS0EsZUFBTztNQWROLENBQUEsSUFMUDs7QUFxQkksYUFBTztJQXRCaUIsQ0FoUzFCOztJQXlUQSx5QkFBQSxFQUEyQixRQUFBLENBQUEsQ0FBQTtBQUM3QixVQUFBLFVBQUEsRUFBQSxTQUFBLEVBQUE7TUFBSSxDQUFBLENBQUUsVUFBRixFQUNFLFNBREYsQ0FBQSxHQUNrQixTQUFTLENBQUMsUUFBUSxDQUFDLGtCQUFuQixDQUFBLENBRGxCO01BRUEsZUFBQSxHQUFrQixDQUFFLGtCQUFGLEVBQXNCLGlCQUF0QixFQUF5QyxrQkFBekMsRUFBNkQsa0JBQTdELEVBQWlGLGlCQUFqRixFQUFvRyxrQkFBcEcsRUFBd0gsa0JBQXhILEVBQTRJLGtCQUE1SSxFQUFnSyxrQkFBaEssRUFBb0wsa0JBQXBMO01BR2YsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBOztBQUNQLFlBQUEsTUFBQSxFQUFBLFVBQUEsRUFBQSxnQkFBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsUUFBQSxFQUFBLE1BQUEsRUFBQSxhQUFBLEVBQUE7UUFBTSxhQUFBLEdBQWlCO1FBQ2pCLFFBQUEsR0FBa0IsQ0FBRSxLQUFGLENBQUEsR0FBQTtBQUN4QixjQUFBO1VBQVEsSUFBbUIsS0FBSyxDQUFDLElBQU4sS0FBYyxNQUFqQztBQUFBLG1CQUFPLEtBQVA7V0FBUjs7VUFFUSxhQUFBLEdBQWdCLEtBQUssQ0FBQztpQkFDdEIsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTttQkFBSTtVQUFKLENBQWQsQ0FBSixFQUF1QyxjQUFjLENBQUUsR0FBRixDQUFyRDtRQUpnQjtRQUtsQixVQUFBLEdBQW9CLElBQUksVUFBSixDQUFlO1VBQUUsSUFBQSxFQUFNLFFBQVEsQ0FBQyxTQUFqQjtVQUE0QjtRQUE1QixDQUFmO1FBQ3BCLE1BQUEsR0FBb0IsUUFBQSxDQUFFLENBQUYsQ0FBQTt3QkFBVyxJQUFJLENBQUMsS0FBTCxDQUFXLENBQVgsR0FBa0IsRUFBcEIsS0FBeUI7UUFBbEM7UUFDcEIsZ0JBQUEsR0FBb0IsVUFBVSxDQUFDLGNBQVgsQ0FBMEI7VUFBRSxHQUFBLEVBQUssRUFBUDtVQUFXLEdBQUEsRUFBSyxFQUFoQjtVQUFvQjtRQUFwQixDQUExQjtRQUNwQixLQUFXLDhCQUFYO1VBQ0UsTUFBQSxHQUFjLGdCQUFBLENBQUEsRUFBdEI7O1VBRVEsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTttQkFBRztVQUFILENBQWQsQ0FBSixFQUErQixlQUFlLENBQUUsR0FBRixDQUE5QztRQUhGO0FBSUEsZUFBTztNQWROLENBQUEsSUFMUDs7QUFxQkksYUFBTztJQXRCa0IsQ0F6VDNCOztJQWtWQSwyQkFBQSxFQUE2QixRQUFBLENBQUEsQ0FBQTtBQUMvQixVQUFBLFVBQUEsRUFBQSxTQUFBLEVBQUEsZUFBQSxFQUFBO01BQUksQ0FBQSxDQUFFLFVBQUYsRUFDRSxTQURGLENBQUEsR0FDa0IsU0FBUyxDQUFDLFFBQVEsQ0FBQyxrQkFBbkIsQ0FBQSxDQURsQjtNQUVBLGVBQUEsR0FBa0IsQ0FBRSxFQUFGLEVBQU0sRUFBTixFQUFVLEVBQVYsRUFBYyxFQUFkLEVBQWtCLEVBQWxCLEVBQXNCLEVBQXRCLEVBQTBCLEVBQTFCLEVBQThCLEVBQTlCLEVBQWtDLEVBQWxDLEVBQXNDLEVBQXRDO01BQ2xCLGNBQUEsR0FBa0IsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixFQUEwQixDQUExQixFQUE2QixDQUE3QjtNQUVmLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsTUFBQSxFQUFBLFVBQUEsRUFBQSxrQkFBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsV0FBQSxFQUFBLE1BQUEsRUFBQSxNQUFBLEVBQUEsU0FBQSxFQUFBO1FBQU0sV0FBQSxHQUFzQixDQUFFLEtBQUYsQ0FBQSxHQUFBO1VBRXBCLElBQTRCLEtBQUssQ0FBQyxJQUFOLEtBQWMsU0FBMUM7O21CQUFBLE1BQU0sQ0FBQyxJQUFQLENBQVksS0FBSyxDQUFDLE1BQWxCLEVBQUE7O1FBRm9CO1FBR3RCLE1BQUEsR0FBcUI7UUFDckIsVUFBQSxHQUFzQixJQUFJLFVBQUosQ0FBZTtVQUFFLElBQUEsRUFBTSxRQUFRLENBQUMsU0FBakI7VUFBNEIsUUFBQSxFQUFVO1FBQXRDLENBQWY7UUFDdEIsTUFBQSxHQUFzQixRQUFBLENBQUUsQ0FBRixDQUFBO3dCQUFXLElBQUksQ0FBQyxLQUFMLENBQVcsQ0FBWCxHQUFrQixFQUFwQixLQUF5QjtRQUFsQztRQUN0QixrQkFBQSxHQUFzQixVQUFVLENBQUMsZ0JBQVgsQ0FBNEI7VUFBRSxHQUFBLEVBQUssRUFBUDtVQUFXLEdBQUEsRUFBSyxFQUFoQjtVQUFvQjtRQUFwQixDQUE1QixFQU41Qjs7UUFRTSxLQUFXLDhCQUFYO1VBQ0UsTUFBQSxHQUFTLGtCQUFBLENBQUEsRUFBakI7O1VBRVEsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTttQkFBRztVQUFILENBQWQsQ0FBSixFQUErQixlQUFlLENBQUUsR0FBRixDQUE5QztRQUhGO1FBSUEsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRztRQUFILENBQWQsQ0FBSixFQUErQixjQUEvQjtBQUNBLGVBQU87TUFkTixDQUFBLElBTFA7O0FBcUJJLGFBQU87SUF0Qm9CLENBbFY3Qjs7SUEyV0EsMENBQUEsRUFBNEMsUUFBQSxDQUFBLENBQUE7QUFDOUMsVUFBQSxVQUFBLEVBQUE7TUFBSSxDQUFBLENBQUUsVUFBRixFQUNFLFNBREYsQ0FBQSxHQUNrQixTQUFTLENBQUMsUUFBUSxDQUFDLGtCQUFuQixDQUFBLENBRGxCO01BSUcsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBOztBQUNQLFlBQUEsVUFBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsUUFBQSxFQUFBLFFBQUEsRUFBQSxNQUFBLEVBQUEsYUFBQSxFQUFBO1FBQU0sYUFBQSxHQUFpQjtRQUNqQixRQUFBLEdBQWtCLENBQUUsS0FBRixDQUFBLEdBQUE7QUFDeEIsY0FBQTtVQUFRLElBQTJCLEtBQUssQ0FBQyxJQUFOLEtBQWMsY0FBekM7WUFBQSxJQUFBLENBQUssV0FBTCxFQUFrQixLQUFsQixFQUFBOztVQUNBLElBQWdDLEtBQUssQ0FBQyxJQUFOLEtBQWMsY0FBOUM7WUFBQSxhQUFBLEdBQWdCLEtBQUssQ0FBQyxPQUF0Qjs7aUJBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTttQkFBRyxhQUFBLElBQWlCO1VBQXBCLENBQWQsQ0FBSixFQUEyQyxJQUEzQztRQUhnQjtRQUlsQixVQUFBLEdBQWMsSUFBSSxVQUFKLENBQWU7VUFBRSxJQUFBLEVBQU0sUUFBUSxDQUFDLFNBQWpCO1VBQTRCO1FBQTVCLENBQWY7UUFDZCxRQUFBLEdBQWMsQ0FDWixJQUFJLEdBQUosQ0FBUSxDQUFFLFFBQUYsRUFBWSxRQUFaLEVBQXNCLEtBQXRCLEVBQTZCLElBQTdCLEVBQW1DLFlBQW5DLENBQVIsQ0FEWSxFQUVaLElBQUksR0FBSixDQUFRLENBQUUsUUFBRixFQUFZLEtBQVosRUFBbUIsVUFBbkIsRUFBK0IsTUFBL0IsRUFBdUMsT0FBdkMsQ0FBUixDQUZZLEVBR1osSUFBSSxHQUFKLENBQVEsQ0FBRSxXQUFGLEVBQWUsUUFBZixFQUF5QixTQUF6QixFQUFvQyxRQUFwQyxFQUE4QyxRQUE5QyxDQUFSLENBSFksRUFJWixJQUFJLEdBQUosQ0FBUSxDQUFFLFNBQUYsRUFBYSxXQUFiLEVBQTBCLEtBQTFCLEVBQWlDLFdBQWpDLEVBQThDLFFBQTlDLENBQVIsQ0FKWSxFQUtaLElBQUksR0FBSixDQUFRLENBQUUsS0FBRixFQUFTLFFBQVQsRUFBbUIsS0FBbkIsRUFBMEIsU0FBMUIsRUFBcUMsVUFBckMsQ0FBUixDQUxZLEVBTVosSUFBSSxHQUFKLENBQVEsQ0FBRSxHQUFGLEVBQU8sV0FBUCxFQUFvQixTQUFwQixFQUErQixTQUEvQixFQUEwQyxLQUExQyxDQUFSLENBTlksRUFPWixJQUFJLEdBQUosQ0FBUSxDQUFFLE9BQUYsRUFBVyxTQUFYLEVBQXNCLFFBQXRCLEVBQWdDLE9BQWhDLEVBQXlDLE9BQXpDLENBQVIsQ0FQWSxFQVFaLElBQUksR0FBSixDQUFRLENBQUUsVUFBRixFQUFjLFFBQWQsRUFBd0IsUUFBeEIsRUFBa0MsWUFBbEMsRUFBZ0QsUUFBaEQsQ0FBUixDQVJZLEVBU1osSUFBSSxHQUFKLENBQVEsQ0FBRSxXQUFGLEVBQWUsT0FBZixFQUF3QixHQUF4QixFQUE2QixVQUE3QixFQUF5QyxXQUF6QyxDQUFSLENBVFksRUFVWixJQUFJLEdBQUosQ0FBUSxDQUFFLElBQUYsRUFBUSxNQUFSLEVBQWdCLEdBQWhCLEVBQXFCLE1BQXJCLEVBQTZCLE9BQTdCLENBQVIsQ0FWWTtRQVlkLEtBQVcsOEJBQVg7VUFDRSxNQUFBLEdBQVMsVUFBVSxDQUFDLFlBQVgsQ0FBd0I7WUFBRSxHQUFBLEVBQUssR0FBUDtZQUFZLEdBQUEsRUFBSyxHQUFqQjtZQUFzQixJQUFBLEVBQU0sQ0FBNUI7WUFBK0IsVUFBQSxFQUFZLENBQTNDO1lBQThDLFVBQUEsRUFBWTtVQUExRCxDQUF4QjtVQUNULElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7bUJBQUc7VUFBSCxDQUFkLENBQUosRUFBK0IsUUFBUSxDQUFFLEdBQUYsQ0FBdkM7UUFGRixDQWxCTjs7QUFzQk0sZUFBTztNQXZCTixDQUFBO01BeUJBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsVUFBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsUUFBQSxFQUFBLFFBQUEsRUFBQSxNQUFBLEVBQUEsYUFBQSxFQUFBLFVBQUEsRUFBQSxTQUFBOztRQUNNLGFBQUEsR0FBaUI7UUFDakIsUUFBQSxHQUFrQixDQUFFLEtBQUYsQ0FBQSxHQUFBO0FBQ3hCLGNBQUE7VUFDUSxJQUFtQixLQUFLLENBQUMsSUFBTixLQUFjLGFBQWpDOztBQUFBLG1CQUFPLEtBQVA7O1VBQ0EsYUFBQSxHQUFnQixLQUFLLENBQUMsT0FGOUI7O2lCQUlRLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7bUJBQUc7VUFBSCxDQUFkLENBQUosRUFBc0MsUUFBUSxDQUFFLEdBQUYsQ0FBTyxDQUFDLGFBQXREO1FBTGdCLEVBRnhCOztRQVNNLFVBQUEsR0FBYyxJQUFJLFVBQUosQ0FBZTtVQUFFLElBQUEsRUFBTSxRQUFRLENBQUMsU0FBakI7VUFBNEI7UUFBNUIsQ0FBZjtRQUNkLFFBQUEsR0FBYztVQUNaO1lBQUUsYUFBQSxFQUFnQixDQUFsQjtZQUFxQixVQUFBLEVBQVk7VUFBakMsQ0FEWTtVQUVaO1lBQUUsYUFBQSxFQUFlLEVBQWpCO1lBQXFCLFVBQUEsRUFBWTtVQUFqQyxDQUZZO1VBR1o7WUFBRSxhQUFBLEVBQWUsRUFBakI7WUFBcUIsVUFBQSxFQUFZO1VBQWpDLENBSFk7VUFJWjtZQUFFLGFBQUEsRUFBZSxFQUFqQjtZQUFxQixVQUFBLEVBQVk7VUFBakMsQ0FKWTtVQUtaO1lBQUUsYUFBQSxFQUFlLEVBQWpCO1lBQXFCLFVBQUEsRUFBWTtVQUFqQyxDQUxZO1VBTVo7WUFBRSxhQUFBLEVBQWdCLENBQWxCO1lBQXFCLFVBQUEsRUFBWTtVQUFqQyxDQU5ZO1VBT1o7WUFBRSxhQUFBLEVBQWUsRUFBakI7WUFBcUIsVUFBQSxFQUFZO1VBQWpDLENBUFk7VUFRWjtZQUFFLGFBQUEsRUFBZSxFQUFqQjtZQUFxQixVQUFBLEVBQVk7VUFBakMsQ0FSWTtVQVNaO1lBQUUsYUFBQSxFQUFlLEVBQWpCO1lBQXFCLFVBQUEsRUFBWTtVQUFqQyxDQVRZO1VBVVo7WUFBRSxhQUFBLEVBQWUsRUFBakI7WUFBcUIsVUFBQSxFQUFZO1VBQWpDLENBVlk7O1FBWWQsS0FBVyw4QkFBWDtVQUNFLE1BQUEsR0FBYyxVQUFVLENBQUMsWUFBWCxDQUF3QjtZQUFFLEdBQUEsRUFBSyxHQUFQO1lBQVksR0FBQSxFQUFLLEdBQWpCO1lBQXNCLElBQUEsRUFBTSxFQUE1QjtZQUFnQyxNQUFBLEVBQVEsQ0FBeEM7WUFBMkM7VUFBM0MsQ0FBeEIsRUFBdEI7O1VBRVEsVUFBQSxHQUFjLENBQUUsR0FBQSxNQUFGLENBQWMsQ0FBQyxJQUFmLENBQW9CLEVBQXBCO1VBQ2QsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTttQkFBRztVQUFILENBQWQsQ0FBSixFQUF1QyxRQUFRLENBQUUsR0FBRixDQUFPLENBQUMsVUFBdkQ7UUFKRixDQXRCTjs7QUE0Qk0sZUFBTztNQTdCTixDQUFBLElBN0JQOztBQTRESSxhQUFPO0lBN0RtQyxDQTNXNUM7O0lBMmFBLFVBQUEsRUFBWSxRQUFBLENBQUEsQ0FBQTtBQUNkLFVBQUEsVUFBQSxFQUFBO01BQUksQ0FBQSxDQUFFLFVBQUYsRUFDRSxTQURGLENBQUEsR0FDa0IsU0FBUyxDQUFDLFFBQVEsQ0FBQyxrQkFBbkIsQ0FBQSxDQURsQjtNQUdHLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsR0FBQSxFQUFBLFVBQUEsRUFBQSxRQUFBLEVBQUEsYUFBQSxFQUFBO1FBQU0sYUFBQSxHQUFpQjtRQUNqQixRQUFBLEdBQWtCLENBQUUsS0FBRixDQUFBLEdBQUEsRUFBQSxFQUR4Qjs7OztRQUtNLFVBQUEsR0FBa0IsSUFBSSxVQUFKLENBQWU7VUFBRSxJQUFBLEVBQU0sUUFBUSxDQUFDLFNBQWpCO1VBQTRCO1FBQTVCLENBQWYsRUFMeEI7O1FBT00sR0FBQSxHQUNFO1VBQUEsR0FBQSxFQUFnQixHQUFoQjtVQUNBLEdBQUEsRUFBZ0IsR0FEaEI7VUFFQSxNQUFBLEVBQWdCLENBRmhCO1VBR0EsTUFBQSxFQUFnQixZQUhoQjtVQUlBLGFBQUEsRUFBZTtRQUpmO1FBS0YsSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxVQUFVLENBQUMsSUFBWCxDQUFnQixHQUFoQjtRQUFILENBQWQsQ0FBUixFQUFnRCxXQUFoRDtBQUNBLGVBQU87TUFmTixDQUFBO01BaUJBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsR0FBQSxFQUFBLFVBQUEsRUFBQSxRQUFBLEVBQUEsYUFBQSxFQUFBO1FBQU0sYUFBQSxHQUFpQjtRQUNqQixRQUFBLEdBQWtCLENBQUUsS0FBRixDQUFBLEdBQUEsRUFBQSxFQUR4Qjs7OztRQUtNLFVBQUEsR0FBa0IsSUFBSSxVQUFKLENBQWU7VUFBRSxJQUFBLEVBQU0sUUFBUSxDQUFDLFNBQWpCO1VBQTRCO1FBQTVCLENBQWYsRUFMeEI7O1FBT00sR0FBQSxHQUNFO1VBQUEsR0FBQSxFQUFnQixHQUFoQjtVQUNBLEdBQUEsRUFBZ0IsR0FEaEI7VUFFQSxNQUFBLEVBQWdCLENBRmhCO1VBR0EsTUFBQSxFQUFnQixZQUhoQjtVQUlBLGFBQUEsRUFBZSxRQUFBLENBQUEsQ0FBQTttQkFBRztVQUFIO1FBSmY7UUFLRixJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFVBQVUsQ0FBQyxJQUFYLENBQWdCLEdBQWhCO1FBQUgsQ0FBZCxDQUFKLEVBQTRDLElBQTVDO0FBQ0EsZUFBTztNQWZOLENBQUEsSUFwQlA7O0FBcUNJLGFBQU87SUF0Q0csQ0EzYVo7O0lBb2RBLElBQUEsRUFBTSxRQUFBLENBQUEsQ0FBQTtBQUNSLFVBQUEsVUFBQSxFQUFBO01BQUksQ0FBQSxDQUFFLFVBQUYsRUFDRSxTQURGLENBQUEsR0FDa0IsU0FBUyxDQUFDLFFBQVEsQ0FBQyxrQkFBbkIsQ0FBQSxDQURsQjtNQUdHLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsVUFBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsUUFBQSxFQUFBLFFBQUEsRUFBQSxNQUFBLEVBQUEsS0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUE7UUFBTSxHQUFBLEdBQWtCLENBQUM7UUFDbkIsVUFBQSxHQUFrQixJQUFJLFVBQUosQ0FBZTtVQUFFLElBQUEsRUFBTSxRQUFRLENBQUMsU0FBakI7VUFBNEI7UUFBNUIsQ0FBZjtRQUNsQixRQUFBLEdBQWtCLENBQUUsS0FBRixDQUFBLEdBQUE7QUFDeEIsY0FBQSxTQUFBOztVQUNRLElBQUcsS0FBSyxDQUFDLElBQU4sS0FBYyxNQUFqQjtZQUNFLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7cUJBQUcsS0FBSyxDQUFDO1lBQVQsQ0FBZCxDQUFKLEVBQXFDLE9BQU8sQ0FBQyxNQUE3QyxFQURGOztBQUVBLGlCQUFPO1FBSlMsRUFGeEI7O1FBUU0sTUFBQSxHQUNFO1VBQUEsTUFBQSxFQUFVO1FBQVY7UUFDRixPQUFBLEdBQ0U7VUFBQSxNQUFBLEVBQVUsQ0FBRSxLQUFGLEVBQVMsS0FBVCxFQUFnQixLQUFoQixFQUF1QixLQUF2QixFQUE4QixLQUE5QixFQUFxQyxLQUFyQyxFQUE0QyxLQUE1QyxFQUFtRCxLQUFuRCxFQUEwRCxLQUExRCxFQUFpRSxLQUFqRSxFQUF3RSxLQUF4RSxDQUFWO1VBQ0EsTUFBQSxFQUFVO1FBRFYsRUFYUjs7UUFjTSxRQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsVUFBVSxDQUFDLElBQVgsQ0FBZ0I7WUFBRSxHQUFBLEVBQUssR0FBUDtZQUFZLEdBQUEsRUFBSyxNQUFqQjtZQUF5QixNQUFBLEVBQVEsQ0FBakM7WUFBb0M7VUFBcEMsQ0FBaEI7UUFBSDtRQUNaLEtBQUE7Ozs7VUFBQTtVQUNFLEdBQUEsR0FBUjs7VUFFUSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQWQsQ0FBbUIsS0FBbkI7VUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO21CQUFHO1VBQUgsQ0FBZCxDQUFKLEVBQThCLE9BQU8sQ0FBQyxNQUFNLENBQUUsR0FBRixDQUE1QztRQUpGO1FBS0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRztRQUFILENBQWQsQ0FBSixFQUErQyxFQUEvQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUFqQixDQUFkLENBQUosRUFBK0MsRUFBL0M7QUFDQSxlQUFPO01BdkJOLENBQUEsSUFIUDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNENJLGFBQU87SUE3Q0gsQ0FwZE47O0lBb2dCQSxXQUFBLEVBQWEsUUFBQSxDQUFBLENBQUE7QUFDZixVQUFBLFVBQUEsRUFBQTtNQUFJLENBQUEsQ0FBRSxVQUFGLEVBQ0UsU0FERixDQUFBLEdBQ2tCLFNBQVMsQ0FBQyxRQUFRLENBQUMsa0JBQW5CLENBQUEsQ0FEbEI7TUFHRyxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDUCxZQUFBLFVBQUEsRUFBQSxHQUFBLEVBQUEsUUFBQSxFQUFBLFFBQUEsRUFBQSxRQUFBLEVBQUEsS0FBQSxFQUFBO1FBQU0sVUFBQSxHQUFrQixJQUFJLFVBQUosQ0FBZTtVQUFFLElBQUEsRUFBTSxRQUFRLENBQUMsU0FBakI7VUFBNEI7UUFBNUIsQ0FBZjtRQUNsQixRQUFBLEdBQWtCLENBQUUsRUFBRixFQUFNLEVBQU4sRUFBVSxFQUFWLEVBQWMsRUFBZCxFQUFrQixFQUFsQixFQUFzQixFQUF0QixFQUEwQixFQUExQixFQUE4QixFQUE5QixFQUFrQyxFQUFsQyxFQUFzQyxFQUF0QztRQUNsQixRQUFBLEdBQWtCLENBQUUsS0FBRixDQUFBLEdBQUE7QUFDeEIsY0FBQTtVQUNRLElBQTBDLEtBQUssQ0FBQyxJQUFOLEtBQWMsYUFBeEQ7O21CQUFBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7cUJBQUcsS0FBSyxDQUFDO1lBQVQsQ0FBZCxDQUFKLEVBQXFDLENBQXJDLEVBQUE7O1FBRmdCLEVBRnhCOztRQU1NLFFBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxVQUFVLENBQUMsT0FBWCxDQUFtQjtZQUFFLEdBQUEsRUFBSyxFQUFQO1lBQVcsR0FBQSxFQUFLLEVBQWhCO1lBQW9CO1VBQXBCLENBQW5CO1FBQUg7UUFDWixHQUFBLEdBQVksQ0FBQztRQUNiLEtBQUE7Ozs7VUFBQTtVQUNFLEdBQUEsR0FBUjs7VUFFUSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO21CQUFHO1VBQUgsQ0FBZCxDQUFKLEVBQThCLFFBQVEsQ0FBRSxHQUFGLENBQXRDO1FBSEY7QUFJQSxlQUFPO01BYk4sQ0FBQTtNQWVBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsVUFBQSxFQUFBLFFBQUEsRUFBQSxRQUFBLEVBQUE7UUFBTSxVQUFBLEdBQWtCLElBQUksVUFBSixDQUFlO1VBQUUsSUFBQSxFQUFNLFFBQVEsQ0FBQyxTQUFqQjtVQUE0QjtRQUE1QixDQUFmO1FBQ2xCLFFBQUEsR0FBa0IsQ0FBRSxLQUFGLENBQUEsR0FBQTtBQUN4QixjQUFBO1VBQVEsSUFBMEMsS0FBSyxDQUFDLElBQU4sS0FBYyxhQUF4RDttQkFBQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO3FCQUFHLEtBQUssQ0FBQztZQUFULENBQWQsQ0FBSixFQUFxQyxDQUFyQyxFQUFBOztRQURnQixFQUR4Qjs7UUFJTSxRQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsVUFBVSxDQUFDLE9BQVgsQ0FBbUI7WUFBRSxHQUFBLEVBQUssRUFBUDtZQUFXLEdBQUEsRUFBSyxFQUFoQjtZQUFvQjtVQUFwQixDQUFuQjtRQUFIO1FBQ1osSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtBQUFFLGNBQUEsUUFBQSxFQUFBO0FBQUM7VUFBQSxLQUFBOzs7O1lBQUE7MEJBQUE7VUFBQSxDQUFBOztRQUFILENBQWQsQ0FBUixFQUF1RyxXQUF2RztBQUNBLGVBQU87TUFQTixDQUFBO01BU0EsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxVQUFBLEVBQUEsR0FBQSxFQUFBLFFBQUEsRUFBQSxRQUFBLEVBQUEsUUFBQSxFQUFBLEtBQUEsRUFBQTtRQUFNLFVBQUEsR0FBa0IsSUFBSSxVQUFKLENBQWU7VUFBRSxJQUFBLEVBQU0sUUFBUSxDQUFDLFNBQWpCO1VBQTRCO1FBQTVCLENBQWY7UUFDbEIsUUFBQSxHQUFrQixDQUFFLEVBQUYsRUFBTSxFQUFOLEVBQVUsRUFBVixFQUFjLEVBQWQsRUFBa0IsRUFBbEIsRUFBc0IsRUFBdEIsRUFBMEIsRUFBMUIsRUFBOEIsRUFBOUIsRUFBa0MsRUFBbEMsRUFBc0MsRUFBdEM7UUFDbEIsUUFBQSxHQUFrQixDQUFFLEtBQUYsQ0FBQSxHQUFBO0FBQ3hCLGNBQUE7VUFDUSxJQUFzRSxLQUFLLENBQUMsSUFBTixLQUFjLGFBQXBGOzttQkFBQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO3FCQUFHLEtBQUssQ0FBQztZQUFULENBQWQsQ0FBSixFQUFxQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQWYsR0FBNEIsQ0FBakUsRUFBQTs7UUFGZ0IsRUFGeEI7O1FBTU0sUUFBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFVBQVUsQ0FBQyxPQUFYLENBQW1CO1lBQUUsR0FBQSxFQUFLLEVBQVA7WUFBVyxHQUFBLEVBQUssRUFBaEI7WUFBb0I7VUFBcEIsQ0FBbkI7UUFBSDtRQUNaLEdBQUEsR0FBWSxDQUFDO1FBQ2IsS0FBQTs7Ozs7VUFBQTtVQUNFLEdBQUEsR0FBUjs7VUFFUSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO21CQUFHO1VBQUgsQ0FBZCxDQUFKLEVBQThCLFFBQVEsQ0FBRSxHQUFGLENBQXRDO1FBSEY7QUFJQSxlQUFPO01BYk4sQ0FBQTtNQWVBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsVUFBQSxFQUFBLEdBQUEsRUFBQSxRQUFBLEVBQUEsVUFBQSxFQUFBLFFBQUEsRUFBQSxRQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUEsRUFBQTtRQUFNLFVBQUEsR0FBa0IsSUFBSSxVQUFKLENBQWU7VUFBRSxJQUFBLEVBQU0sUUFBUSxDQUFDLFNBQWpCO1VBQTRCO1FBQTVCLENBQWY7UUFDbEIsUUFBQSxHQUFrQjtRQUNsQixPQUFBLEdBQWtCO1FBQ2xCLFVBQUEsR0FBa0I7UUFDbEIsUUFBQSxHQUFrQixDQUFFLEtBQUYsQ0FBQSxHQUFBO0FBQ3hCLGNBQUE7VUFDUSxJQUF1RCxLQUFLLENBQUMsSUFBTixLQUFjLGFBQXJFOzttQkFBQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO3FCQUFHLEtBQUssQ0FBQztZQUFULENBQWQsQ0FBSixFQUFxQyxVQUFBLEdBQWEsQ0FBbEQsRUFBQTs7UUFGZ0IsRUFKeEI7O1FBUU0sUUFBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFVBQVUsQ0FBQyxHQUFYLENBQWU7WUFBRSxHQUFBLEVBQUssSUFBUDtZQUFhLEdBQUEsRUFBSyxJQUFsQjtZQUF3QjtVQUF4QixDQUFmO1FBQUg7UUFDWixHQUFBLEdBQVksQ0FBQztRQUNiLEtBQUE7Ozs7OztVQUFBO1VBQ0UsR0FBQSxHQUFSOztVQUVRLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7bUJBQUc7VUFBSCxDQUFkLENBQUosRUFBOEIsUUFBUSxDQUFFLEdBQUYsQ0FBdEM7VUFDQSxPQUFPLENBQUMsSUFBUixDQUFhLEtBQWI7UUFKRixDQVZOOztBQWdCTSxlQUFPO01BakJOLENBQUE7TUFtQkEsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxVQUFBLEVBQUEsR0FBQSxFQUFBLFFBQUEsRUFBQSxVQUFBLEVBQUEsUUFBQSxFQUFBLFFBQUEsRUFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQTtRQUFNLFVBQUEsR0FBa0IsSUFBSSxVQUFKLENBQWU7VUFBRSxJQUFBLEVBQU0sUUFBUSxDQUFDLFNBQWpCO1VBQTRCO1FBQTVCLENBQWY7UUFDbEIsUUFBQSxHQUFrQjtRQUNsQixPQUFBLEdBQWtCO1FBQ2xCLFVBQUEsR0FBa0I7UUFDbEIsUUFBQSxHQUFrQixDQUFFLEtBQUYsQ0FBQSxHQUFBO0FBQ3hCLGNBQUE7VUFDUSxJQUF1RCxLQUFLLENBQUMsSUFBTixLQUFjLGFBQXJFOzttQkFBQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO3FCQUFHLEtBQUssQ0FBQztZQUFULENBQWQsQ0FBSixFQUFxQyxVQUFBLEdBQWEsQ0FBbEQsRUFBQTs7UUFGZ0IsRUFKeEI7O1FBUU0sSUFBQSxHQUFZLElBQUksR0FBSixDQUFRLG9MQUFSO1FBQ1osUUFBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFVBQVUsQ0FBQyxHQUFYLENBQWU7WUFBRSxHQUFBLEVBQUssSUFBUDtZQUFhLEdBQUEsRUFBSyxJQUFsQjtZQUF3QjtVQUF4QixDQUFmO1FBQUg7UUFDWixHQUFBLEdBQVksQ0FBQztRQUNiLEtBQUE7Ozs7Ozs7VUFBQTtVQUNFLEdBQUEsR0FBUjs7VUFFUSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO21CQUFHO1VBQUgsQ0FBZCxDQUFKLEVBQThCLFFBQVEsQ0FBRSxHQUFGLENBQXRDO1VBQ0EsT0FBTyxDQUFDLElBQVIsQ0FBYSxLQUFiO1FBSkYsQ0FYTjs7QUFpQk0sZUFBTztNQWxCTixDQUFBO01Bb0JBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsVUFBQSxFQUFBLEdBQUEsRUFBQSxRQUFBLEVBQUEsUUFBQSxFQUFBLFFBQUEsRUFBQSxPQUFBLEVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQTtRQUFNLFVBQUEsR0FBa0IsSUFBSSxVQUFKLENBQWU7VUFBRSxJQUFBLEVBQU0sUUFBUSxDQUFDLFNBQWpCO1VBQTRCO1FBQTVCLENBQWY7UUFDbEIsUUFBQSxHQUFrQjtRQUNsQixPQUFBLEdBQWtCO1FBQ2xCLFFBQUEsR0FBa0IsQ0FBRSxLQUFGLENBQUEsR0FBQTtBQUN4QixjQUFBO1VBQ1EsSUFBMEMsS0FBSyxDQUFDLElBQU4sS0FBYyxhQUF4RDs7bUJBQUEsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtxQkFBRyxLQUFLLENBQUM7WUFBVCxDQUFkLENBQUosRUFBcUMsQ0FBckMsRUFBQTs7UUFGZ0IsRUFIeEI7O1FBT00sSUFBQSxHQUFZLElBQUksR0FBSixDQUFBO1FBQ1osT0FBQSxHQUFZLENBQUU7UUFDZCxRQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsVUFBVSxDQUFDLEdBQVgsQ0FBZTtZQUFFLEdBQUEsRUFBSyxHQUFQO1lBQVksR0FBQSxFQUFLLEdBQWpCO1lBQXNCO1VBQXRCLENBQWY7UUFBSDtRQUNaLEdBQUEsR0FBWSxDQUFDO1FBQ2IsS0FBQTs7Ozs7OztVQUFBO1VBQ0UsR0FBQSxHQUFSOztVQUVRLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7bUJBQUc7VUFBSCxDQUFkLENBQUosRUFBOEIsUUFBUSxDQUFFLEdBQUYsQ0FBdEM7VUFDQSxPQUFPLENBQUMsSUFBUixDQUFhLEtBQWI7UUFKRjtRQUtBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBRSxHQUFBLElBQUYsQ0FBWSxDQUFDLElBQWIsQ0FBa0IsRUFBbEI7UUFBSCxDQUFkLENBQUosRUFBNkMsUUFBN0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQztRQUFSLENBQWQsQ0FBSixFQUFrQyxPQUFBLEdBQVUsQ0FBNUMsRUFqQk47O0FBbUJNLGVBQU87TUFwQk4sQ0FBQTtNQXNCQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDUCxZQUFBLFVBQUEsRUFBQSxHQUFBLEVBQUEsUUFBQSxFQUFBLFFBQUEsRUFBQSxRQUFBLEVBQUEsT0FBQSxFQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUE7UUFBTSxVQUFBLEdBQWtCLElBQUksVUFBSixDQUFlO1VBQUUsSUFBQSxFQUFNLFFBQVEsQ0FBQyxTQUFqQjtVQUE0QjtRQUE1QixDQUFmO1FBQ2xCLFFBQUEsR0FBa0I7UUFDbEIsT0FBQSxHQUFrQjtRQUNsQixRQUFBLEdBQWtCLENBQUUsS0FBRixDQUFBLEdBQUE7QUFDeEIsY0FBQTtVQUNRLElBQTJDLEtBQUssQ0FBQyxJQUFOLEtBQWMsYUFBekQ7O21CQUFBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7cUJBQUcsS0FBSyxDQUFDO1lBQVQsQ0FBZCxDQUFKLEVBQXFDLEVBQXJDLEVBQUE7O1FBRmdCLEVBSHhCOztRQU9NLElBQUEsR0FBWSxJQUFJLEdBQUosQ0FBQTtRQUNaLE9BQUEsR0FBWSxDQUFFO1FBQ2QsUUFBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFVBQVUsQ0FBQyxHQUFYLENBQWU7WUFBRSxHQUFBLEVBQUssR0FBUDtZQUFZLEdBQUEsRUFBSyxHQUFqQjtZQUFzQjtVQUF0QixDQUFmO1FBQUg7UUFDWixHQUFBLEdBQVksQ0FBQztRQUNiLEtBQUE7Ozs7Ozs7VUFBQTtVQUNFLEdBQUEsR0FBUjs7VUFFUSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO21CQUFHO1VBQUgsQ0FBZCxDQUFKLEVBQThCLFFBQVEsQ0FBRSxHQUFGLENBQXRDO1VBQ0EsT0FBTyxDQUFDLElBQVIsQ0FBYSxLQUFiO1FBSkY7UUFLQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUUsR0FBQSxJQUFGLENBQVksQ0FBQyxJQUFiLENBQWtCLEVBQWxCO1FBQUgsQ0FBZCxDQUFKLEVBQTZDLFFBQTdDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUM7UUFBUixDQUFkLENBQUosRUFBa0MsT0FBQSxHQUFVLENBQTVDLEVBakJOOztBQW1CTSxlQUFPO01BcEJOLENBQUE7TUFzQkEsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxVQUFBLEVBQUEsR0FBQSxFQUFBLFFBQUEsRUFBQSxRQUFBLEVBQUEsUUFBQSxFQUFBLE9BQUEsRUFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBO1FBQU0sVUFBQSxHQUFrQixJQUFJLFVBQUosQ0FBZTtVQUFFLElBQUEsRUFBTSxRQUFRLENBQUMsU0FBakI7VUFBNEI7UUFBNUIsQ0FBZjtRQUNsQixRQUFBLEdBQWtCO1FBQ2xCLE9BQUEsR0FBa0I7UUFDbEIsUUFBQSxHQUFrQixDQUFFLEtBQUYsQ0FBQSxHQUFBO0FBQ3hCLGNBQUE7VUFDUSxJQUE0QyxLQUFLLENBQUMsSUFBTixLQUFjLGFBQTFEOzttQkFBQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO3FCQUFHLEtBQUssQ0FBQztZQUFULENBQWQsQ0FBSixFQUFxQyxHQUFyQyxFQUFBOztRQUZnQixFQUh4Qjs7UUFPTSxJQUFBLEdBQVksSUFBSSxHQUFKLENBQUE7UUFDWixPQUFBLEdBQVksQ0FBRTtRQUNkLFFBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxVQUFVLENBQUMsR0FBWCxDQUFlO1lBQUUsR0FBQSxFQUFLLEdBQVA7WUFBWSxHQUFBLEVBQUssR0FBakI7WUFBc0I7VUFBdEIsQ0FBZjtRQUFIO1FBQ1osR0FBQSxHQUFZLENBQUM7UUFDYixLQUFBOzs7Ozs7O1VBQUE7VUFDRSxHQUFBLEdBQVI7O1VBRVEsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTttQkFBRztVQUFILENBQWQsQ0FBSixFQUE4QixRQUFRLENBQUUsR0FBRixDQUF0QztVQUNBLE9BQU8sQ0FBQyxJQUFSLENBQWEsS0FBYjtRQUpGO1FBS0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFFLEdBQUEsSUFBRixDQUFZLENBQUMsSUFBYixDQUFrQixFQUFsQjtRQUFILENBQWQsQ0FBSixFQUE2QyxRQUE3QztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDO1FBQVIsQ0FBZCxDQUFKLEVBQWtDLE9BQUEsR0FBVSxDQUE1QyxFQWpCTjs7QUFtQk0sZUFBTztNQXBCTixDQUFBLElBN0hQOztBQW1KSSxhQUFPO0lBcEpJLENBcGdCYjs7SUEycEJBLEtBQUEsRUFBTyxRQUFBLENBQUEsQ0FBQTtBQUNULFVBQUEsVUFBQSxFQUFBO01BQUksQ0FBQSxDQUFFLFVBQUYsRUFDRSxTQURGLENBQUEsR0FDa0IsU0FBUyxDQUFDLFFBQVEsQ0FBQyxrQkFBbkIsQ0FBQSxDQURsQjtNQUdHLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsYUFBQSxFQUFBLFFBQUEsRUFBQSxLQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQTtRQUFNLFFBQUEsR0FBZ0IsTUFBQSxDQUFPLFVBQVA7UUFDaEIsYUFBQSxHQUFnQixRQUFBLENBQUEsQ0FBQTtpQkFBRztRQUFIO1FBQ2hCLEtBQUEsR0FBUSxJQUFJLFNBQVMsQ0FBQyxLQUFkLENBQW9CO1VBQUUsSUFBQSxFQUFNLFdBQVI7VUFBcUI7UUFBckIsQ0FBcEI7UUFDUixJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEtBQUssQ0FBQztRQUFULENBQWQsQ0FBUixFQUFpRCxXQUFqRDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsS0FBSyxDQUFDO1FBQVQsQ0FBZCxDQUFSLEVBQWlELFNBQVMsQ0FBQyxVQUEzRDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsS0FBSyxDQUFDO1FBQVQsQ0FBZCxDQUFSLEVBQWlELENBQWpEO1FBQ0EsSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxLQUFLLENBQUMsTUFBTjtRQUFILENBQWQsQ0FBUixFQUFpRCxxQkFBakQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEtBQUssQ0FBQyxLQUFOLENBQUE7UUFBSCxDQUFkLENBQVIsRUFBaUQsU0FBUyxDQUFDLEtBQTNEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxLQUFLLENBQUM7UUFBVCxDQUFkLENBQVIsRUFBaUQsQ0FBakQ7UUFDQSxLQUFLLENBQUMsT0FBTixHQUFnQixTQUFTLENBQUMsVUFBVixHQUF1QixFQVQ3Qzs7Ozs7UUFjTSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEtBQUssQ0FBQyxLQUFOLENBQUE7UUFBSCxDQUFkLENBQUosRUFBc0MsU0FBUyxDQUFDLEtBQWhEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxLQUFLLENBQUMsS0FBTixDQUFBO1FBQUgsQ0FBZCxDQUFKLEVBQXNDLFFBQXRDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxLQUFLLENBQUMsS0FBTixDQUFBO1FBQUgsQ0FBZCxDQUFKLEVBQXNDLFFBQXRDO0FBQ0EsZUFBTztNQWxCTixDQUFBO01Bb0JBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsYUFBQSxFQUFBLEtBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBO1FBQU0sYUFBQSxHQUFnQjtRQUNoQixLQUFBLEdBQVEsSUFBSSxTQUFTLENBQUMsS0FBZCxDQUFvQjtVQUFFLElBQUEsRUFBTSxXQUFSO1VBQXFCO1FBQXJCLENBQXBCO1FBQ1IsS0FBSyxDQUFDLE9BQU4sR0FBZ0IsU0FBUyxDQUFDLFVBQVYsR0FBdUI7UUFDdkMsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxLQUFLLENBQUMsS0FBTixDQUFBO1FBQUgsQ0FBZCxDQUFSLEVBQTBDLFNBQVMsQ0FBQyxLQUFwRDtRQUNBLElBQUMsQ0FBQSxNQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsS0FBSyxDQUFDLEtBQU4sQ0FBQTtRQUFILENBQWQsQ0FBUixFQUEwQyxXQUExQztRQUNBLElBQUMsQ0FBQSxNQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsS0FBSyxDQUFDLEtBQU4sQ0FBQTtRQUFILENBQWQsQ0FBUixFQUEwQyxXQUExQztBQUNBLGVBQU87TUFQTixDQUFBO01BU0EsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxhQUFBLEVBQUEsS0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUE7UUFBTSxhQUFBLEdBQWdCO1FBQ2hCLEtBQUEsR0FBUSxJQUFJLFNBQVMsQ0FBQyxLQUFkLENBQW9CO1VBQUUsSUFBQSxFQUFNLFdBQVI7VUFBcUI7UUFBckIsQ0FBcEI7UUFDUixLQUFLLENBQUMsT0FBTixHQUFnQixTQUFTLENBQUMsVUFBVixHQUF1QjtRQUN2QyxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEtBQUssQ0FBQyxLQUFOLENBQUE7UUFBSCxDQUFkLENBQVIsRUFBMEMsU0FBUyxDQUFDLEtBQXBEO1FBQ0EsSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxLQUFLLENBQUMsS0FBTixDQUFBO1FBQUgsQ0FBZCxDQUFSLEVBQTBDLFdBQTFDO1FBQ0EsSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxLQUFLLENBQUMsS0FBTixDQUFBO1FBQUgsQ0FBZCxDQUFSLEVBQTBDLFdBQTFDO0FBQ0EsZUFBTztNQVBOLENBQUE7TUFTQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDUCxZQUFBLGFBQUEsRUFBQSxLQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQTtRQUFNLGFBQUEsR0FBZ0I7UUFDaEIsS0FBQSxHQUFRLElBQUksU0FBUyxDQUFDLEtBQWQsQ0FBb0I7VUFBRSxJQUFBLEVBQU0sV0FBUjtVQUFxQjtRQUFyQixDQUFwQjtRQUNSLEtBQUssQ0FBQyxPQUFOLEdBQWdCLFNBQVMsQ0FBQyxVQUFWLEdBQXVCO1FBQ3ZDLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsS0FBSyxDQUFDLEtBQU4sQ0FBQTtRQUFILENBQWQsQ0FBUixFQUEwQyxTQUFTLENBQUMsS0FBcEQ7UUFDQSxJQUFDLENBQUEsTUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEtBQUssQ0FBQyxLQUFOLENBQUE7UUFBSCxDQUFkLENBQVIsRUFBMEMsV0FBMUM7UUFDQSxJQUFDLENBQUEsTUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEtBQUssQ0FBQyxLQUFOLENBQUE7UUFBSCxDQUFkLENBQVIsRUFBMEMsV0FBMUM7QUFDQSxlQUFPO01BUE4sQ0FBQTtNQVNBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsVUFBQSxFQUFBLGFBQUEsRUFBQSxRQUFBLEVBQUEsUUFBQSxFQUFBLEtBQUEsRUFBQSxZQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQTtRQUFNLFFBQUEsR0FBZ0IsTUFBQSxDQUFPLFVBQVA7UUFDaEIsWUFBQSxHQUFnQjtRQUNoQixhQUFBLEdBQWdCLFFBQUEsQ0FBQSxDQUFBO2lCQUFHO1FBQUg7UUFDaEIsUUFBQSxHQUFnQixRQUFBLENBQUEsQ0FBQTtpQkFBRztRQUFIO1FBQ2hCLFVBQUEsR0FBZTtRQUNmLEtBQUEsR0FBUSxJQUFJLFNBQVMsQ0FBQyxLQUFkLENBQW9CO1VBQUUsSUFBQSxFQUFNLFdBQVI7VUFBcUIsYUFBckI7VUFBb0MsUUFBcEM7VUFBOEM7UUFBOUMsQ0FBcEI7UUFDUixJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEtBQUssQ0FBQztRQUFULENBQWQsQ0FBUixFQUF5QyxDQUF6QztRQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsS0FBSyxDQUFDLEtBQU4sQ0FBQTtRQUFILENBQWQsQ0FBUixFQUEwQyxTQUFTLENBQUMsS0FBcEQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEtBQUssQ0FBQztRQUFULENBQWQsQ0FBUixFQUF5QyxDQUF6QztRQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsS0FBSyxDQUFDLEtBQU4sQ0FBQTtRQUFILENBQWQsQ0FBUixFQUEwQyxTQUFTLENBQUMsS0FBcEQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEtBQUssQ0FBQztRQUFULENBQWQsQ0FBUixFQUF5QyxDQUF6QztRQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsS0FBSyxDQUFDLEtBQU4sQ0FBQTtRQUFILENBQWQsQ0FBUixFQUEwQyxTQUFTLENBQUMsS0FBcEQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEtBQUssQ0FBQztRQUFULENBQWQsQ0FBUixFQUF5QyxDQUF6QztRQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsS0FBSyxDQUFDLEtBQU4sQ0FBQTtRQUFILENBQWQsQ0FBUixFQUEwQyxRQUExQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxPQUFiO1FBQUgsQ0FBZCxDQUFSLEVBQWlELE9BQWpEO1FBQ0EsSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxLQUFLLENBQUMsTUFBTixDQUFhLE9BQWI7UUFBSCxDQUFkLENBQVIsRUFBaUQsVUFBakQ7UUFDQSxJQUFDLENBQUEsTUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEtBQUssQ0FBQyxLQUFOLENBQUE7UUFBSCxDQUFkLENBQVIsRUFBMEMsVUFBMUM7UUFDQSxJQUFDLENBQUEsTUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEtBQUssQ0FBQyxLQUFOLENBQUE7UUFBSCxDQUFkLENBQVIsRUFBMEMsVUFBMUM7QUFDQSxlQUFPO01BbkJOLENBQUEsSUFsRFA7O0FBdUVJLGFBQU87SUF4RUYsQ0EzcEJQOztJQXN1QkEsK0JBQUEsRUFBaUMsUUFBQSxDQUFBLENBQUE7QUFDbkMsVUFBQSxZQUFBLEVBQUEsWUFBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUEsRUFBQSxtQkFBQSxFQUFBLE9BQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBO01BQUksQ0FBQSxDQUFFLFlBQUYsRUFDRSxZQURGLENBQUEsR0FDa0MsU0FBUyxDQUFDLFFBQVEsQ0FBQyxvQkFBbkIsQ0FBQSxDQURsQztNQUVBLENBQUEsQ0FBRSxPQUFGLENBQUEsR0FBa0MsU0FBUyxDQUFDLFFBQVEsQ0FBQyxlQUFuQixDQUFBLENBQWxDLEVBRko7O01BSUksbUJBQUEsR0FBc0I7UUFDcEI7VUFBRSxDQUFBLCtFQUFBLENBQUY7VUFBc0c7WUFBRSxNQUFBLEVBQVEsYUFBVjtZQUF1RCxJQUFBLEVBQU0seURBQTdEO1lBQXdILFdBQUEsRUFBYSx3Q0FBckk7WUFBZ0wsU0FBQSxFQUFXLG1CQUEzTDtZQUF1TixPQUFBLEVBQVMsR0FBaE87WUFBc08sU0FBQSxFQUFXLEVBQWpQO1lBQXFQLElBQUEsRUFBTTtVQUEzUCxDQUF0RztTQURvQjtRQUVwQjtVQUFFLENBQUEsc0ZBQUEsQ0FBRjtVQUFzRztZQUFFLE1BQUEsRUFBUSxvQkFBVjtZQUF1RCxJQUFBLEVBQU0seURBQTdEO1lBQXdILFdBQUEsRUFBYSx3Q0FBckk7WUFBZ0wsU0FBQSxFQUFXLG1CQUEzTDtZQUF1TixPQUFBLEVBQVMsR0FBaE87WUFBc08sU0FBQSxFQUFXLEVBQWpQO1lBQXFQLElBQUEsRUFBTTtVQUEzUCxDQUF0RztTQUZvQjtRQUdwQjtVQUFFLENBQUEsbUZBQUEsQ0FBRjtVQUFzRztZQUFFLE1BQUEsRUFBUSxvQkFBVjtZQUF1RCxJQUFBLEVBQU0seURBQTdEO1lBQXdILFdBQUEsRUFBYSx3Q0FBckk7WUFBZ0wsU0FBQSxFQUFXLG1CQUEzTDtZQUF1TixPQUFBLEVBQVMsQ0FBaE87WUFBc08sU0FBQSxFQUFXLENBQWpQO1lBQXFQLElBQUEsRUFBTTtVQUEzUCxDQUF0RztTQUhvQjtRQUlwQjtVQUFFLENBQUEsdURBQUEsQ0FBRjtVQUFzRztZQUFFLE1BQUEsRUFBUSxjQUFWO1lBQXVELElBQUEsRUFBTSxtQ0FBN0Q7WUFBd0gsV0FBQSxFQUFhLGtCQUFySTtZQUFnTCxTQUFBLEVBQVcsbUJBQTNMO1lBQXVOLE9BQUEsRUFBUyxDQUFoTztZQUFzTyxTQUFBLEVBQVcsQ0FBalA7WUFBcVAsSUFBQSxFQUFNO1VBQTNQLENBQXRHO1NBSm9CO1FBS3BCO1VBQUUsQ0FBQSxzREFBQSxDQUFGO1VBQXNHO1lBQUUsTUFBQSxFQUFRLGNBQVY7WUFBdUQsSUFBQSxFQUFNLGtDQUE3RDtZQUF3SCxXQUFBLEVBQWEsaUJBQXJJO1lBQWdMLFNBQUEsRUFBVyxtQkFBM0w7WUFBdU4sT0FBQSxFQUFTLENBQWhPO1lBQXNPLFNBQUEsRUFBVyxDQUFqUDtZQUFxUCxJQUFBLEVBQU07VUFBM1AsQ0FBdEc7U0FMb0I7UUFNcEI7VUFBRSxDQUFBLDZEQUFBLENBQUY7VUFBc0c7WUFBRSxNQUFBLEVBQVEsaUJBQVY7WUFBdUQsSUFBQSxFQUFNLGtDQUE3RDtZQUF3SCxXQUFBLEVBQWEsNEJBQXJJO1lBQWdMLFNBQUEsRUFBVyxRQUEzTDtZQUF1TixPQUFBLEVBQVMsSUFBaE87WUFBc08sU0FBQSxFQUFXLEVBQWpQO1lBQXFQLElBQUEsRUFBTTtVQUEzUCxDQUF0RztTQU5vQjtRQU9wQjtVQUFFLENBQUEsd0RBQUEsQ0FBRjtVQUFzRztZQUFFLE1BQUEsRUFBUSxZQUFWO1lBQXVELElBQUEsRUFBTSxrQ0FBN0Q7WUFBd0gsV0FBQSxFQUFhLDRCQUFySTtZQUFnTCxTQUFBLEVBQVcsUUFBM0w7WUFBdU4sT0FBQSxFQUFTLElBQWhPO1lBQXNPLFNBQUEsRUFBVyxFQUFqUDtZQUFxUCxJQUFBLEVBQU07VUFBM1AsQ0FBdEc7U0FQb0I7UUFRcEI7VUFBRSxDQUFBLHlEQUFBLENBQUY7VUFBc0c7WUFBRSxNQUFBLEVBQVEsYUFBVjtZQUF1RCxJQUFBLEVBQU0sa0NBQTdEO1lBQXdILFdBQUEsRUFBYSw0QkFBckk7WUFBZ0wsU0FBQSxFQUFXLFFBQTNMO1lBQXVOLE9BQUEsRUFBUyxJQUFoTztZQUFzTyxTQUFBLEVBQVcsRUFBalA7WUFBcVAsSUFBQSxFQUFNO1VBQTNQLENBQXRHO1NBUm9CO1FBU3BCO1VBQUUsQ0FBQSwwREFBQSxDQUFGO1VBQXNHO1lBQUUsTUFBQSxFQUFRLGNBQVY7WUFBdUQsSUFBQSxFQUFNLGtDQUE3RDtZQUF3SCxXQUFBLEVBQWEsNEJBQXJJO1lBQWdMLFNBQUEsRUFBVyxRQUEzTDtZQUF1TixPQUFBLEVBQVMsSUFBaE87WUFBc08sU0FBQSxFQUFXLEVBQWpQO1lBQXFQLElBQUEsRUFBTTtVQUEzUCxDQUF0RztTQVRvQjtRQVVwQjtVQUFFLENBQUEsNkRBQUEsQ0FBRjtVQUFzRztZQUFFLE1BQUEsRUFBUSwwQkFBVjtZQUF1RCxJQUFBLEVBQU0sMEJBQTdEO1lBQXdILFdBQUEsRUFBYSxFQUFySTtZQUFnTCxTQUFBLEVBQVcsMEJBQTNMO1lBQXVOLE9BQUEsRUFBUyxHQUFoTztZQUFzTyxTQUFBLEVBQVcsRUFBalA7WUFBcVAsSUFBQSxFQUFNO1VBQTNQLENBQXRHO1NBVm9CO1FBV3BCO1VBQUUsQ0FBQSwyREFBQSxDQUFGO1VBQXNHO1lBQUUsTUFBQSxFQUFRLGdCQUFWO1lBQXVELElBQUEsRUFBTSxrQ0FBN0Q7WUFBd0gsV0FBQSxFQUFhLDRCQUFySTtZQUFnTCxTQUFBLEVBQVcsUUFBM0w7WUFBdU4sT0FBQSxFQUFTLEdBQWhPO1lBQXNPLFNBQUEsRUFBVyxFQUFqUDtZQUFxUCxJQUFBLEVBQU07VUFBM1AsQ0FBdEc7U0FYb0I7UUFZcEI7VUFBRSxDQUFBLG1GQUFBLENBQUY7VUFBc0c7WUFBRSxNQUFBLEVBQVEsMkNBQVY7WUFBdUQsSUFBQSxFQUFNLGdDQUE3RDtZQUF3SCxXQUFBLEVBQWEsd0JBQXJJO1lBQWdMLFNBQUEsRUFBVyxVQUEzTDtZQUF1TixPQUFBLEVBQVMsR0FBaE87WUFBc08sU0FBQSxFQUFXLENBQWpQO1lBQXFQLElBQUEsRUFBTTtVQUEzUCxDQUF0RztTQVpvQjtRQWFwQjtVQUFFLENBQUEsMkNBQUEsQ0FBRjtVQUFzRztZQUFFLE1BQUEsRUFBUSxhQUFWO1lBQXVELElBQUEsRUFBTSxvQ0FBN0Q7WUFBd0gsV0FBQSxFQUFhLHFCQUFySTtZQUFnTCxTQUFBLEVBQVcsaUJBQTNMO1lBQXVOLE9BQUEsRUFBUyxFQUFoTztZQUFzTyxTQUFBLEVBQVcsRUFBalA7WUFBcVAsSUFBQSxFQUFNO1VBQTNQLENBQXRHO1NBYm9CO1FBSjFCOztNQW9CSSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsT0FBQSxDQUFRLFlBQVksQ0FBQyxVQUFyQjtNQUFILENBQWQsQ0FBSixFQUF3RCxVQUF4RDtNQUNBLEtBQUEscURBQUE7UUFBSSxDQUFFLEtBQUYsRUFBUyxPQUFUO1FBQ0YsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxZQUFZLENBQUMsVUFBYixDQUF3QixLQUF4QjtRQUFILENBQWQsQ0FBSixFQUFzRCxPQUF0RDtNQURGLENBckJKOztNQXdCSSxJQUFDLENBQUEsTUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsWUFBWSxDQUFDLFVBQWIsQ0FBd0IsR0FBeEI7TUFBSCxDQUFkLENBQVIsRUFBcUUsOEJBQXJFO01BQ0EsSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLFlBQVksQ0FBQyxVQUFiLENBQXdCLEtBQXhCO01BQUgsQ0FBZCxDQUFSLEVBQXFFLGdDQUFyRTtNQUNBLElBQUMsQ0FBQSxNQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxZQUFZLENBQUMsVUFBYixDQUF3QixNQUFBLENBQU8sS0FBUCxDQUF4QjtNQUFILENBQWQsQ0FBUixFQUFxRSwrQkFBckU7TUFDQSxJQUFDLENBQUEsTUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsWUFBWSxDQUFDLFVBQWIsQ0FBd0IsZ0JBQXhCO01BQUgsQ0FBZCxDQUFSLEVBQXFFLHFEQUFyRSxFQTNCSjs7QUE2QkksYUFBTztJQTlCd0IsQ0F0dUJqQzs7SUF1d0JBLGdDQUFBLEVBQWtDLFFBQUEsQ0FBQSxDQUFBO0FBQ3BDLFVBQUEsWUFBQSxFQUFBLFlBQUEsRUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxLQUFBLEVBQUEsbUJBQUEsRUFBQSxVQUFBLEVBQUEsT0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUE7TUFBSSxDQUFBLENBQUUsWUFBRixFQUNFLFlBREYsQ0FBQSxHQUNrQyxTQUFTLENBQUMsUUFBUSxDQUFDLG9CQUFuQixDQUFBLENBRGxDO01BRUEsQ0FBQSxDQUFFLFVBQUYsQ0FBQSxHQUFrQyxTQUFTLENBQUMsa0JBQVYsQ0FBQSxDQUFsQztNQUNBLENBQUEsQ0FBRSxPQUFGLENBQUEsR0FBa0MsU0FBUyxDQUFDLFFBQVEsQ0FBQyxlQUFuQixDQUFBLENBQWxDLEVBSEo7O01BS0ksbUJBQUEsR0FBc0IsQ0FDcEIsQ0FBRSxDQUFBLCtFQUFBLENBQUYsRUFBc0csaUhBQXRHLENBRG9CLEVBRXBCLENBQUUsQ0FBQSxzRkFBQSxDQUFGLEVBQXNHLHdIQUF0RyxDQUZvQixFQUdwQixDQUFFLENBQUEsbUZBQUEsQ0FBRixFQUFzRyx3SEFBdEcsQ0FIb0IsRUFJcEIsQ0FBRSxDQUFBLHVEQUFBLENBQUYsRUFBc0csa0hBQXRHLENBSm9CLEVBS3BCLENBQUUsQ0FBQSxzREFBQSxDQUFGLEVBQXNHLGtIQUF0RyxDQUxvQixFQU1wQixDQUFFLENBQUEsNkRBQUEsQ0FBRixFQUFzRyxxSEFBdEcsQ0FOb0IsRUFPcEIsQ0FBRSxDQUFBLHdEQUFBLENBQUYsRUFBc0csZ0hBQXRHLENBUG9CLEVBUXBCLENBQUUsQ0FBQSx5REFBQSxDQUFGLEVBQXNHLGlIQUF0RyxDQVJvQixFQVNwQixDQUFFLENBQUEsMERBQUEsQ0FBRixFQUFzRyxrSEFBdEcsQ0FUb0IsRUFVcEIsQ0FBRSxDQUFBLDZEQUFBLENBQUYsRUFBc0csOEhBQXRHLENBVm9CLEVBV3BCLENBQUUsQ0FBQSwyREFBQSxDQUFGLEVBQXNHLG9IQUF0RyxDQVhvQixFQVlwQixDQUFFLENBQUEsbUZBQUEsQ0FBRixFQUFzRywrSUFBdEcsQ0Fab0IsRUFhcEIsQ0FBRSxDQUFBLDJDQUFBLENBQUYsRUFBc0csaUhBQXRHLENBYm9CLEVBTDFCOztNQXFCSSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsT0FBQSxDQUFRLFlBQVksQ0FBQyxHQUFyQjtNQUFILENBQWQsQ0FBSixFQUF5RCxLQUF6RDtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxPQUFBLENBQVEsWUFBWSxDQUFDLFdBQXJCO01BQUgsQ0FBZCxDQUFKLEVBQXlELFVBQXpEO01BQ0EsS0FBQSxxREFBQTtRQUFJLENBQUUsS0FBRixFQUFTLE9BQVQsMkJBQ1I7O1FBQ00sSUFBQSxDQUFLLFlBQVksQ0FBQyxXQUFiLENBQXlCLEtBQXpCLENBQUw7TUFGRixDQXZCSjs7O01BNEJJLElBQUMsQ0FBQSxNQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxZQUFZLENBQUMsV0FBYixDQUF5QixHQUF6QjtNQUFILENBQWQsQ0FBUixFQUFzRSw4QkFBdEU7TUFDQSxJQUFDLENBQUEsTUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsWUFBWSxDQUFDLFdBQWIsQ0FBeUIsS0FBekI7TUFBSCxDQUFkLENBQVIsRUFBc0UsZ0NBQXRFO01BQ0EsSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLFlBQVksQ0FBQyxXQUFiLENBQXlCLE1BQUEsQ0FBTyxLQUFQLENBQXpCO01BQUgsQ0FBZCxDQUFSLEVBQXNFLCtCQUF0RTtNQUNBLElBQUMsQ0FBQSxNQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxZQUFZLENBQUMsV0FBYixDQUF5QixnQkFBekI7TUFBSCxDQUFkLENBQVIsRUFBc0UscURBQXRFLEVBL0JKOztBQWlDSSxhQUFPO0lBbEN5QjtFQXZ3QmxDLEVBM0NGOzs7RUEwMUJBLElBQUcsTUFBQSxLQUFVLE9BQU8sQ0FBQyxJQUFyQjtJQUErQixNQUFTLENBQUEsQ0FBQSxDQUFBLEdBQUE7QUFDeEMsVUFBQSxVQUFBLEVBQUE7TUFBRSxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLEtBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLElBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0QsRUFEaEI7O01BR0UsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QjtRQUFFLCtCQUFBLEVBQWlDLEtBQUssQ0FBQztNQUF6QyxDQUE5QjtNQUNBLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEI7UUFBRSxnQ0FBQSxFQUFrQyxLQUFLLENBQUM7TUFBMUMsQ0FBOUIsRUFKRjs7TUFNRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7QUFDZixZQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLEtBQUEsRUFBQTtRQUFJLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEI7VUFBRSwyQkFBQSxFQUE2QixLQUFLLENBQUM7UUFBckMsQ0FBOUI7UUFDQSxDQUFBLEdBQUksQ0FBQTtRQUNKLENBQUEsR0FBSTtVQUFFLENBQUEsRUFBRztRQUFMO1FBQ0osQ0FBQSxHQUFJO1VBQUUsQ0FBQSxFQUFHO1FBQUw7UUFDSixLQUFBLEdBQVEsUUFBQSxDQUFFLENBQUYsQ0FBQTtBQUFRLGNBQUEsQ0FBQSxFQUFBO2lCQUFDLE1BQU0sQ0FBQyxXQUFQOztBQUFxQjtZQUFBLEtBQUEsTUFBQTs7a0JBQTZCOzhCQUE3QixDQUFFLENBQUYsRUFBSyxDQUFMOztZQUFBLENBQUE7O2NBQXJCO1FBQVQ7ZUFDUixLQUFBLENBQU0sV0FBTixFQUFtQixDQUFBLEdBQUksQ0FBRSxHQUFBLENBQUYsRUFBUSxHQUFBLENBQUUsS0FBQSxDQUFNLENBQU4sQ0FBRixDQUFSLEVBQXdCLEdBQUEsQ0FBRSxLQUFBLENBQU0sQ0FBTixDQUFGLENBQXhCLENBQXZCO01BTlcsRUFOZjs7QUFjRSxhQUFPO0lBZitCLENBQUEsSUFBeEM7O0FBMTFCQSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2JyaWNhYnJhYydcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICB3aGl0ZVxuICBibHVlXG4gIGdvbGRcbiAgZ3JleVxuICByZWRcbiAgYm9sZFxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xud3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcbkMgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdhbnNpcydcbnsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2luZ2xlLWZpbGUtbW9kdWxlcydcblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuc2V0dGluZ3MgPVxuICAgIG15X3NlZWRfMTogMjg3MzQ2MjEzNFxuICAgIG15X3NlZWRfMjogMjg3MzQ2MjEzNCArIDFcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AdGVzdHMgPSB0ZXN0cyA9XG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRfcmFuZG9tX2Zsb2F0OiAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfcmFuZG9tKClcbiAgICBtYXRjaGVycyAgICAgICAgPSBbXVxuICAgIHByb2JlcyAgICAgICAgICA9IFtdXG4gICAgbWF4X2NvdW50ICAgICAgID0gMWU0XG4gICAgc2VlbiAgICAgICAgICAgID0gbmV3IFNldCgpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZ2V0X3JhbmRvbSA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCB9XG4gICAgICBmb3IgaWR4IGluIFsgMCAuLi4gbWF4X2NvdW50IF1cbiAgICAgICAgbWF0Y2hlcnMucHVzaCB0ID0gZ2V0X3JhbmRvbS5mbG9hdCgpXG4gICAgICAgIHNlZW4uYWRkIHRcbiAgICAgIGZvciB2YWx1ZSwgaWR4IGluIG1hdGNoZXJzXG4gICAgICAgIGRlYnVnICfOqWJyYnJfX18xJywgeyBpZHgsIHZhbHVlLCB9IHVubGVzcyAwIDwgdmFsdWUgPD0gMVxuICAgICAgQGVxICggzqlicmJyX19fMiA9IC0+IG1hdGNoZXJzLmV2ZXJ5ICggdCApIC0+IDAgPCB0IDw9IDEgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlicmJyX19fMyA9IC0+IHNlZW4uc2l6ZSApLCBtYXhfY291bnRcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZ2V0X3JhbmRvbSA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCB9XG4gICAgICBmb3IgaWR4IGluIFsgMCAuLi4gbWF4X2NvdW50IF1cbiAgICAgICAgcHJvYmVzLnB1c2ggdCA9IGdldF9yYW5kb20uZmxvYXQoKVxuICAgICAgQGVxICggzqlicmJyX19fNCA9IC0+IHByb2JlcyApLCBtYXRjaGVyc1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBnZXRfcmFuZG9tID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzIsIH1cbiAgICAgIGNvdW50ID0gMFxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4uIG1heF9jb3VudCBdXG4gICAgICAgIGNvdW50KysgaWYgKCB0ID0gZ2V0X3JhbmRvbS5mbG9hdCgpICkgaW4gbWF0Y2hlcnNcbiAgICAgIEBlcSAoIM6pYnJicl9fXzUgPSAtPiBjb3VudCApLCAwXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGdldF9yYW5kb20gICAgPSBuZXcgR2V0X3JhbmRvbSgpXG4gICAgICBjb3VudCA9IDBcbiAgICAgIGZvciBpZHggaW4gWyAwIC4uLiBtYXhfY291bnQgXVxuICAgICAgICBjb3VudCsrIGlmICggdCA9IGdldF9yYW5kb20uZmxvYXQoKSApIGluIG1hdGNoZXJzXG4gICAgICBAZXEgKCDOqWJyYnJfX182ID0gLT4gY291bnQgPCAxMCApLCB0cnVlXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIH1cbiAgICAgIG1pbiAgICAgICAgID0gMTAwXG4gICAgICBtYXggICAgICAgICA9IDk5OVxuICAgICAgYnVja2V0cyAgICAgPSB7fVxuICAgICAgZm9yIGJ1Y2tldCBpbiBbIG1pbiAuLi4gbWF4IF1cbiAgICAgICAgYnVja2V0c1sgTWF0aC5mbG9vciBidWNrZXQgLyAxMCBdID0gMFxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4uIG1heF9jb3VudCBdXG4gICAgICAgIHQgPSBnZXRfcmFuZG9tLmZsb2F0IHsgbWluLCBtYXgsIH1cbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyX19fNycsIHRcbiAgICAgICAgYnVja2V0ID0gTWF0aC5mbG9vciB0IC8gMTBcbiAgICAgICAgYnVja2V0c1sgYnVja2V0IF0rK1xuICAgICAgICBAZXEgKCDOqWJyYnJfX184ID0gLT4gbWluIDw9IHQgPD0gbWF4ICksIHRydWVcbiAgICAgIGZvciBfLCBjb3VudCBvZiBidWNrZXRzXG4gICAgICAgIEBlcSAoIM6pYnJicl9fXzkgPSAtPiA1MCA8PSBjb3VudCA8PSAxNTAgKSwgdHJ1ZVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRfcmFuZG9tX2ludGVnZXI6IC0+XG4gICAgeyBHZXRfcmFuZG9tLFxuICAgICAgaW50ZXJuYWxzLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2dldF9yYW5kb20oKVxuICAgIG1heF9jb3VudCAgICAgICA9IDFlNFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIH1cbiAgICAgIG1pbiAgICAgICAgID0gMTAwXG4gICAgICBtYXggICAgICAgICA9IDk5OVxuICAgICAgYnVja2V0cyAgICAgPSB7fVxuICAgICAgZm9yIGJ1Y2tldCBpbiBbIG1pbiAuLi4gbWF4IF1cbiAgICAgICAgYnVja2V0c1sgTWF0aC5mbG9vciBidWNrZXQgLyAxMCBdID0gMFxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4uIG1heF9jb3VudCBdXG4gICAgICAgIHQgPSBnZXRfcmFuZG9tLmludGVnZXIgeyBtaW4sIG1heCwgfVxuICAgICAgICAjIGRlYnVnICfOqWJyYnJfXzEwJywgdFxuICAgICAgICBidWNrZXQgPSBNYXRoLmZsb29yIHQgLyAxMFxuICAgICAgICBidWNrZXRzWyBidWNrZXQgXSsrXG4gICAgICAgIEBlcSAoIM6pYnJicl9fMTEgPSAtPiBtaW4gPD0gdCA8PSBtYXggKSwgdHJ1ZVxuICAgICAgZm9yIF8sIGNvdW50IG9mIGJ1Y2tldHNcbiAgICAgICAgQGVxICggzqlicmJyX18xMiA9IC0+IDUwIDw9IGNvdW50IDw9IDE1MCApLCB0cnVlXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9yYW5kb21fY2hyOiAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfcmFuZG9tKClcbiAgICBtYXhfY291bnQgICAgICAgPSAxZTRcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBnZXRfcmFuZG9tICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCB9XG4gICAgICBmb3IgaWR4IGluIFsgMCAuLi4gbWF4X2NvdW50IF1cbiAgICAgICAgdCA9IGdldF9yYW5kb20uY2hyKClcbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyX18xMycsIHJwciB0XG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIH1cbiAgICAgIHJlc3VsdCA9ICggZ2V0X3JhbmRvbS5jaHIgeyBtaW46ICdBJywgbWF4OiAnWicsIH0gZm9yIF8gaW4gWyAxIC4uIDQwIF0gKS5qb2luICcnXG4gICAgICBAZXEgKCDOqWJyYnJfXzE0ID0gLT4gcmVzdWx0ICksICdQUUtFU1VVTllIQkVXR0hHV0VDUlNaWkxWT1NGUVNFVE5TRVhERkdGJ1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBvbl9zdGF0cyAgICA9ICggc3RhdHMgKSAtPlxuICAgICAgICAjIGRlYnVnICfOqWJyYnJfXzE1Jywgc3RhdHNcbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzIsIG9uX3N0YXRzLCB9XG4gICAgICByZXN1bHQgICAgICA9ICggZ2V0X3JhbmRvbS5jaHIgeyBtaW46ICdBJywgbWF4OiAnWicsIH0gZm9yIF8gaW4gWyAxIC4uIDQwIF0gKS5qb2luICcnXG4gICAgICBAZXEgKCDOqWJyYnJfXzE2ID0gLT4gcmVzdWx0IGlzICdQUUtFU1VVTllIQkVXR0hHV0VDUlNaWkxWT1NGUVNFVE5TRVhERkdGJyApLCBmYWxzZVxuICAgICAgQGVxICggzqlicmJyX18xNyA9IC0+IC9eW0EtWl17NDB9JC8udGVzdCByZXN1bHQgKSwgdHJ1ZVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBvbl9zdGF0cyAgICA9ICggc3RhdHMgKSAtPlxuICAgICAgICAjIGRlYnVnICfOqWJyYnJfXzE4Jywgc3RhdHNcbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzIsIG9uX3N0YXRzLCB9XG4gICAgICByZXN1bHQgICAgICA9ICggZ2V0X3JhbmRvbS5jaHIgeyBtYXg6IDB4ZmYsIGZpbHRlcjogL1thZWlvdXlBRUlPVVldLywgfSBmb3IgXyBpbiBbIDEgLi4gNDAgXSApLmpvaW4gJydcbiAgICAgICMgZGVidWcgJ86pYnJicl9fMTknLCBycHIgcmVzdWx0XG4gICAgICBAZXEgKCDOqWJyYnJfXzIwID0gLT4gL15bYWVpb3V5QUVJT1VZXXs0MH0kLy50ZXN0IHJlc3VsdCApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJyYnJfXzIxID0gLT4gcmVzdWx0ICksICd5eVV5SXV1VWFhSXVVYVVJSXlPSW9BWUVPaU9ZSXVpT3VhaUFVVWVFJ1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRfcmFuZG9tX2Nocl9wcm9kdWNlcjogLT5cbiAgICB7IEdldF9yYW5kb20sXG4gICAgICBpbnRlcm5hbHMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X3JhbmRvbSgpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgcm91bmRzICAgICAgPSAwXG4gICAgICBvbl9zdGF0cyAgICA9ICggc3RhdHMgKSAtPiByb3VuZHMgKz0gc3RhdHMucm91bmRzIGlmIHN0YXRzLm5hbWUgaXMgJ2NocidcbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzIsIG9uX3N0YXRzLCB9XG4gICAgICBjaHIgICAgICAgICA9IGdldF9yYW5kb20uY2hyX3Byb2R1Y2VyIHsgbWF4OiAweGZmLCBmaWx0ZXI6IC9bYWVpb3V5QUVJT1VZXS8sIH1cbiAgICAgIHJlc3VsdCAgICAgID0gKCBjaHIoKSBmb3IgXyBpbiBbIDEgLi4gNDAgXSApLmpvaW4gJydcbiAgICAgICMgZGVidWcgJ86pYnJicl9fMjInLCByb3VuZHMsICggcnByIHJlc3VsdCApXG4gICAgICBAZXEgKCDOqWJyYnJfXzIzID0gLT4gL15bYWVpb3V5QUVJT1VZXXs0MH0kLy50ZXN0IHJlc3VsdCApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJyYnJfXzI0ID0gLT4gcmVzdWx0ICksICd5eVV5SXV1VWFhSXVVYVVJSXlPSW9BWUVPaU9ZSXVpT3VhaUFVVWVFJ1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRfcmFuZG9tX3RleHQ6IC0+XG4gICAgeyBHZXRfcmFuZG9tLFxuICAgICAgaW50ZXJuYWxzLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2dldF9yYW5kb20oKVxuICAgIG1heF9jb3VudCAgICAgICA9IDFlNFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIG9uX3N0YXRzICAgID0gKCBzdGF0cyApIC0+XG4gICAgICAgICMgaW5mbyAnzqlicmJyX18yNScsIHN0YXRzXG4gICAgICBnZXRfcmFuZG9tICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCBvbl9zdGF0cywgfVxuICAgICAgcmVzdWx0ICAgICAgPSBnZXRfcmFuZG9tLnRleHQgeyBtaW46ICdBJywgbWF4OiAnWicsIGxlbmd0aDogNDAsIH1cbiAgICAgIEBlcSAoIM6pYnJicl9fMjYgPSAtPiByZXN1bHQgKSwgJ1BRS0VTVVVOWUhCRVdHSEdXRUNSU1paTFZPU0ZRU0VUTlNFWERGR0YnXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGNvdW50X2F0dGVtcHRzICA9ICggbiApIC0+IHJvdW5kc1sgbiBdID0gKCByb3VuZHNbIG4gXSA/PSAwICkgKyAxXG4gICAgICByb3VuZHMgICAgICAgID0ge31cbiAgICAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSAtPlxuICAgICAgICAjIGhlbHAgJ86pYnJicl9fMjcnLCBzdGF0c1xuICAgICAgICByZXR1cm4gbnVsbCB1bmxlc3Mgc3RhdHMubmFtZSBpcyAnY2hyJ1xuICAgICAgICBjb3VudF9hdHRlbXB0cyBzdGF0cy5yb3VuZHNcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIHZhbGlkX3JlICAgID0gLy8vIF4gWyBcXHUwMDIwLVxcdTAwN2UgXFx1MDBhMC1cXHUwMGFjIFxcdTAwYWUtXFx1MDBmZiBdeyAxNTAgfSAkIC8vL3ZcbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBudWxsLCBvbl9zdGF0cywgfVxuICAgICAgZm9yIF8gaW4gWyAxIC4uIDEgXVxuICAgICAgIyBmb3IgXyBpbiBbIDEgLi4gMTAgXVxuICAgICAgICByZXN1bHQgPSBnZXRfcmFuZG9tLnRleHQgeyBtaW46IDB4MDAsIG1heDogMHhmZiwgbGVuZ3RoOiAxNTAsIH1cbiAgICAgICAgQGVxICggzqlicmJyX18yOCA9IC0+IHZhbGlkX3JlLnRlc3QgcmVzdWx0ICksIHRydWVcbiAgICAgICMgZGVidWcgJ86pYnJicl9fMjknLCByb3VuZHNcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0X3JhbmRvbV9zZXRfb2ZfY2hyczogLT5cbiAgICB7IEdldF9yYW5kb20sXG4gICAgICBpbnRlcm5hbHMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X3JhbmRvbSgpXG4gICAgbWF4X2NvdW50ICAgICAgID0gMWU0XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgcm91bmRzICAgICAgICAgPSAwXG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgLT5cbiAgICAgICAgcm91bmRzICs9IHN0YXRzLnJvdW5kc1xuICAgICAgICAjIHVyZ2UgJ86pYnJicl9fMzAnLCBzdGF0cyBpZiBzdGF0cy5uYW1lIGlzICdzZXRfb2ZfY2hycydcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIHZhbGlkX3JlICAgID0gLy8vIF4gWyBcXHUwMDIwLVxcdTAwN2UgXFx1MDBhMC1cXHUwMGFjIFxcdTAwYWUtXFx1MDBmZiBdeyA1MCB9ICQgLy8vdlxuICAgICAgZ2V0X3JhbmRvbSAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IG51bGwsIG9uX3N0YXRzLCB9XG4gICAgICBmb3IgXyBpbiBbIDEgLi4gMjAgXVxuICAgICAgICByZXN1bHQgICAgICA9IGdldF9yYW5kb20uc2V0X29mX2NocnMgeyBtaW46IDB4MDAsIG1heDogMHhmZiwgc2l6ZTogNTAsIH1cbiAgICAgICAgcmVzdWx0X3JwciAgPSBbIHJlc3VsdC4uLiwgXS5qb2luICcnXG4gICAgICAgIEBlcSAoIM6pYnJicl9fMzEgPSAtPiB2YWxpZF9yZS50ZXN0IHJlc3VsdF9ycHIgKSwgdHJ1ZVxuICAgICAgICAjIGRlYnVnICfOqWJyYnJfXzMyJywgcm91bmRzXG4gICAgICAgIHJvdW5kcyA9IDBcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgcm91bmRzICAgICAgICAgPSAwXG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgLT5cbiAgICAgICAgcm91bmRzICs9IHN0YXRzLnJvdW5kc1xuICAgICAgICAjIHVyZ2UgJ86pYnJicl9fMzMnLCBzdGF0cyBpZiBzdGF0cy5uYW1lIGlzICdzZXRfb2ZfY2hycydcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIHZhbGlkX3JlICAgID0gLy8vIF4gWyAwLTkgXXsgMTAgfSAkIC8vL3ZcbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBudWxsLCBvbl9zdGF0cywgfVxuICAgICAgZm9yIF8gaW4gWyAxIC4uIDIwIF1cbiAgICAgICAgcmVzdWx0ICAgICAgPSBnZXRfcmFuZG9tLnNldF9vZl9jaHJzIHsgbWluOiAnMCcsIG1heDogJzknLCBzaXplOiAxMCwgfVxuICAgICAgICByZXN1bHRfcnByICA9IFsgcmVzdWx0Li4uLCBdLmpvaW4gJydcbiAgICAgICAgQGVxICggzqlicmJyX18zNCA9IC0+IHJlc3VsdC5zaXplICAgICAgICAgICAgICApLCAxMFxuICAgICAgICBAZXEgKCDOqWJyYnJfXzM1ID0gLT4gdmFsaWRfcmUudGVzdCByZXN1bHRfcnByICksIHRydWVcbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyX18zNicsIHJvdW5kcywgcnByIHJlc3VsdFxuICAgICAgICByb3VuZHMgPSAwXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9yYW5kb21fc2V0X29mX3RleHRzOiAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfcmFuZG9tKClcbiAgICBtYXhfY291bnQgICAgICAgPSAxZTRcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICByb3VuZHMgICAgICAgICA9IDBcbiAgICAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSAtPlxuICAgICAgICByb3VuZHMgKz0gc3RhdHMucm91bmRzXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB2YWxpZF9yZSAgICA9IC8vLyBeIFsgMC05IF17IDMgfSAkIC8vL3ZcbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBudWxsLCBvbl9zdGF0cywgfVxuICAgICAgZm9yIF8gaW4gWyAxIC4uIDEgXVxuICAgICAgICByZXN1bHQgICAgICA9IGdldF9yYW5kb20uc2V0X29mX3RleHRzIHsgbWluOiAnMCcsIG1heDogJzknLCBsZW5ndGg6IDMsIHNpemU6IDEwLCB9XG4gICAgICAgIEBlcSAoIM6pYnJicl9fMzcgPSAtPiByZXN1bHQuc2l6ZSAgICAgICAgICAgICAgKSwgMTBcbiAgICAgICAgZm9yIHJhbmRvbV90ZXh0IGZyb20gcmVzdWx0XG4gICAgICAgICAgQGVxICggzqlicmJyX18zOCA9IC0+IHZhbGlkX3JlLnRlc3QgcmFuZG9tX3RleHQgKSwgdHJ1ZVxuICAgICAgICAjIGRlYnVnICfOqWJyYnJfXzM5Jywgcm91bmRzLCBycHIgcmVzdWx0XG4gICAgICAgIHJvdW5kcyA9IDBcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0X3JhbmRvbV90ZXh0X29mX3ZhcmlhYmxlX2xlbmd0aDogLT5cbiAgICB7IEdldF9yYW5kb20sXG4gICAgICBpbnRlcm5hbHMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X3JhbmRvbSgpXG4gICAgbWF0Y2hlcnMgICAgICAgID0gWyAnzrXOp86aJywgJ86/zr3Ors+GJywgJ86SzpknLCAnzp/OoM6fz4LOmycsICfOtycsICfPiM+IzqnOvycsICfOus6dzrUnLCAnzprOvM6vzronLCAnz4XOmScsICfOn86bJywgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHJlc3VsdF9yb3VuZHMgICA9IG51bGxcbiAgICAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSA9PlxuICAgICAgICAjIGluZm8gJ86pYnJicl9fNDAnLCBzdGF0c1xuICAgICAgICByZXN1bHRfcm91bmRzID0gc3RhdHMucm91bmRzXG4gICAgICAgIEBlcSAoIM6pYnJicl9fNDEgPSAtPiByZXN1bHRfcm91bmRzID49IDAgKSwgdHJ1ZVxuICAgICAgZ2V0X3JhbmRvbSAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgb25fc3RhdHMsIH1cbiAgICAgIGZvciBpZHggaW4gWyAwIC4uIDkgXVxuICAgICAgICByZXN1bHQgICAgICA9IGdldF9yYW5kb20udGV4dCB7IG1pbjogJ86RJywgbWF4OiAnz4knLCBtaW5fbGVuZ3RoOiAxLCBtYXhfbGVuZ3RoOiA1LCB9XG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fNDInLCBycHIgcmVzdWx0XG4gICAgICAgIEBlcSAoIM6pYnJicl9fNDMgPSAtPiByZXN1bHQgKSwgbWF0Y2hlcnNbIGlkeCBdXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9yYW5kb21fdGV4dF9vZl92YXJpYWJsZV9sZW5ndGhfd2l0aF9maWx0ZXI6IC0+XG4gICAgeyBHZXRfcmFuZG9tLFxuICAgICAgaW50ZXJuYWxzLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2dldF9yYW5kb20oKVxuICAgIHJlc3VsdF9tYXRjaGVycyA9IFsgJ86RzrrOuCcsICfOkc6jJywgJ86RzpwnLCAnzpHOr86lzpQnLCAnzpHOrs60zpsnLCAnzpHOrs+CzrTOoCcsICfOkc6+zqHOpM6YJywgJ86RzqTOms6eJywgJ86RzrPOuc6UzrUnLCAnzpHOricsIF1cbiAgICByb3VuZF9tYXRjaGVycyAgPSBbIDM0LCAxNSwgMTg5LCAxMjEsIDc1LCA0NywgODcsIDQzLCAxMTksIDIwMCwgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHJlc3VsdF9yb3VuZHMgID0gbnVsbFxuICAgICAgb25fc3RhdHMgICAgICAgID0gKCBzdGF0cyApID0+XG4gICAgICAgIHJldHVybiBudWxsIHVubGVzcyBzdGF0cy5uYW1lIGlzICd0ZXh0J1xuICAgICAgICAjIGluZm8gJ86pYnJicl9fNDQnLCBpZHgsIHN0YXRzXG4gICAgICAgIHJlc3VsdF9yb3VuZHMgPSBzdGF0cy5yb3VuZHNcbiAgICAgICAgQGVxICggzqlicmJyX180NSA9IC0+ICByZXN1bHRfcm91bmRzICksIHJvdW5kX21hdGNoZXJzWyBpZHggXVxuICAgICAgZ2V0X3JhbmRvbSAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgb25fc3RhdHMsIH1cbiAgICAgIGZvciBpZHggaW4gWyAwIC4uIDkgXVxuICAgICAgICByZXN1bHQgICAgICA9IGdldF9yYW5kb20udGV4dCB7IG1pbjogJ86RJywgbWF4OiAnz4knLCBtaW5fbGVuZ3RoOiAxLCBtYXhfbGVuZ3RoOiA1LCBmaWx0ZXI6IC9ezpEvdiwgfVxuICAgICAgICAjIGRlYnVnICfOqWJyYnJfXzQ2JywgcnByIHJlc3VsdFxuICAgICAgICBAZXEgKCDOqWJyYnJfXzQ3ID0gLT4gL17OkVvOkS3PiV17MCw0fSQvdi50ZXN0IHJlc3VsdCApLCB0cnVlXG4gICAgICAgIEBlcSAoIM6pYnJicl9fNDggPSAtPiByZXN1bHQgKSwgcmVzdWx0X21hdGNoZXJzWyBpZHggXVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRfcmFuZG9tX3RleHRfcHJvZHVjZXI6IC0+XG4gICAgeyBHZXRfcmFuZG9tLFxuICAgICAgaW50ZXJuYWxzLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2dldF9yYW5kb20oKVxuICAgIHJlc3VsdF9tYXRjaGVycyA9IFsgJ86RzrrOuCcsICfOkc6jJywgJ86RzpwnLCAnzpHOr86lzpQnLCAnzpHOrs60zpsnLCAnzpHOrs+CzrTOoCcsICfOkc6+zqHOpM6YJywgJ86RzqTOms6eJywgJ86RzrPOuc6UzrUnLCAnzpHOricsIF1cbiAgICByb3VuZF9tYXRjaGVycyAgPSBbIDM0LCAxNSwgMTg5LCAxMjEsIDc1LCA0NywgODcsIDQzLCAxMTksIDIwMCwgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHJlc3VsdF9yb3VuZHMgID0gbnVsbFxuICAgICAgb25fc3RhdHMgICAgICAgID0gKCBzdGF0cyApID0+XG4gICAgICAgIHJldHVybiBudWxsIHVubGVzcyBzdGF0cy5uYW1lIGlzICd0ZXh0J1xuICAgICAgICAjIGluZm8gJ86pYnJicl9fNDknLCBpZHgsIHN0YXRzXG4gICAgICAgIHJlc3VsdF9yb3VuZHMgPSBzdGF0cy5yb3VuZHNcbiAgICAgICAgQGVxICggzqlicmJyX181MCA9IC0+ICByZXN1bHRfcm91bmRzICksIHJvdW5kX21hdGNoZXJzWyBpZHggXVxuICAgICAgZ2V0X3JhbmRvbSAgICAgID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIG9uX3N0YXRzLCB9XG4gICAgICBnZXRfcmFuZG9tX3RleHQgPSBnZXRfcmFuZG9tLnRleHRfcHJvZHVjZXIgeyBtaW46ICfOkScsIG1heDogJ8+JJywgbWluX2xlbmd0aDogMSwgbWF4X2xlbmd0aDogNSwgZmlsdGVyOiAvXs6RL3YsIH1cbiAgICAgIGZvciBpZHggaW4gWyAwIC4uIDkgXVxuICAgICAgICByZXN1bHQgICAgICA9IGdldF9yYW5kb21fdGV4dCgpXG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fNTEnLCBycHIgcmVzdWx0XG4gICAgICAgIEBlcSAoIM6pYnJicl9fNTIgPSAtPiAvXs6RW86RLc+JXXswLDR9JC92LnRlc3QgcmVzdWx0ICksIHRydWVcbiAgICAgICAgQGVxICggzqlicmJyX181MyA9IC0+IHJlc3VsdCApLCByZXN1bHRfbWF0Y2hlcnNbIGlkeCBdXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9yYW5kb21fZmxvYXRfcHJvZHVjZXI6IC0+XG4gICAgeyBHZXRfcmFuZG9tLFxuICAgICAgaW50ZXJuYWxzLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2dldF9yYW5kb20oKVxuICAgIHJlc3VsdF9tYXRjaGVycyA9IFsgMTYuMDg0NzEyODQ4NTMyOTQ1LCAxNi40MjU2MDc5NDAxODIwOSwgMTQuMDA5MTUyMDk5MDI0NTA0LCAxOC4xNzQ2NDIxMjE4ODQ5NzIsIDEyLjg2MTE1MDMyNjIwNzI4LCAxMC4yMDgzMDI4MzQwNzEyMTksIDE4Ljc1MzA5MTQ0ODQ1MjMyNCwgMTIuNDMwMTgzMjA5OTQ0NTE2LCAxMi42Mjc3MTUwNTYyOTY0MzgsIDEyLjQyNTI1OTA2NzY3Njk2MSwgXVxuICAgICMgcm91bmRfbWF0Y2hlcnMgID0gWyAzNCwgMTUsIDE4OSwgMTIxLCA3NSwgNDcsIDg3LCA0MywgMTE5LCAyMDAsIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICByZXN1bHRfcm91bmRzICA9IG51bGxcbiAgICAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSA9PlxuICAgICAgICByZXR1cm4gbnVsbCB1bmxlc3Mgc3RhdHMubmFtZSBpcyAndGV4dCdcbiAgICAgICAgIyBpbmZvICfOqWJyYnJfXzU0JywgaWR4LCBzdGF0c1xuICAgICAgICByZXN1bHRfcm91bmRzID0gc3RhdHMucm91bmRzXG4gICAgICAgIEBlcSAoIM6pYnJicl9fNTUgPSAtPiAgcmVzdWx0X3JvdW5kcyApLCByb3VuZF9tYXRjaGVyc1sgaWR4IF1cbiAgICAgIGdldF9yYW5kb20gICAgICAgID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIG9uX3N0YXRzLCB9XG4gICAgICBmaWx0ZXIgICAgICAgICAgICA9ICggbiApIC0+ICggTWF0aC5mbG9vciBuICkgJSUgMiBpcyAwXG4gICAgICBnZXRfcmFuZG9tX2Zsb2F0ICA9IGdldF9yYW5kb20uZmxvYXRfcHJvZHVjZXIgeyBtaW46IDEwLCBtYXg6IDIwLCBmaWx0ZXIsIH1cbiAgICAgIGZvciBpZHggaW4gWyAwIC4uIDkgXVxuICAgICAgICByZXN1bHQgICAgICA9IGdldF9yYW5kb21fZmxvYXQoKVxuICAgICAgICAjIGRlYnVnICfOqWJyYnJfXzU2JywgcnByIHJlc3VsdFxuICAgICAgICBAZXEgKCDOqWJyYnJfXzU3ID0gLT4gcmVzdWx0ICksIHJlc3VsdF9tYXRjaGVyc1sgaWR4IF1cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0X3JhbmRvbV9pbnRlZ2VyX3Byb2R1Y2VyOiAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfcmFuZG9tKClcbiAgICByZXN1bHRfbWF0Y2hlcnMgPSBbIDE2LCAxNiwgMTQsIDEyLCAxOCwgMTgsIDIwLCAxMCwgMTIsIDEyLCBdXG4gICAgcm91bmRzX21hdGNoZXIgID0gWyAwLCAwLCAwLCAwLCAxLCAwLCAxLCAxLCAyLCAxIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBteV9vbl9zdGF0cyAgICAgICAgID0gKCBzdGF0cyApID0+XG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fNTgnLCBzdGF0c1xuICAgICAgICByb3VuZHMucHVzaCBzdGF0cy5yb3VuZHMgaWYgc3RhdHMubmFtZSBpcyAnaW50ZWdlcidcbiAgICAgIHJvdW5kcyAgICAgICAgICAgICA9IFtdXG4gICAgICBnZXRfcmFuZG9tICAgICAgICAgID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIG9uX3N0YXRzOiBteV9vbl9zdGF0cywgfVxuICAgICAgZmlsdGVyICAgICAgICAgICAgICA9ICggbiApIC0+ICggTWF0aC5mbG9vciBuICkgJSUgMiBpcyAwXG4gICAgICBnZXRfcmFuZG9tX2ludGVnZXIgID0gZ2V0X3JhbmRvbS5pbnRlZ2VyX3Byb2R1Y2VyIHsgbWluOiAxMCwgbWF4OiAyMCwgZmlsdGVyLCB9XG4gICAgICAjIGRlYnVnICfOqWJyYnJfXzU5JywgZ2V0X3JhbmRvbS5jZmdcbiAgICAgIGZvciBpZHggaW4gWyAwIC4uIDkgXVxuICAgICAgICByZXN1bHQgPSBnZXRfcmFuZG9tX2ludGVnZXIoKVxuICAgICAgICAjIGRlYnVnICfOqWJyYnJfXzYwJywgcnByIHJlc3VsdFxuICAgICAgICBAZXEgKCDOqWJyYnJfXzYxID0gLT4gcmVzdWx0ICksIHJlc3VsdF9tYXRjaGVyc1sgaWR4IF1cbiAgICAgIEBlcSAoIM6pYnJicl9fNjIgPSAtPiByb3VuZHMgKSwgcm91bmRzX21hdGNoZXJcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0X3JhbmRvbV9zZXRfb2ZfdGV4dHNfb2ZfdmFyaWFibGVfbGVuZ3RoOiAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfcmFuZG9tKClcbiAgICAjIG1hdGNoZXJzICAgICAgICA9IFsgJ861zqfOmicsICfOv869zq7PhicsICfOks6ZJywgJ86fzqDOn8+CzpsnLCAnzrcnLCAnz4jPiM6pzr8nLCAnzrrOnc61JywgJ86azrzOr866JywgJ8+FzpknLCAnzp/OmycsIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICByZXN1bHRfcm91bmRzICA9IG51bGxcbiAgICAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSA9PlxuICAgICAgICBpbmZvICfOqWJyYnJfXzYzJywgc3RhdHMgaWYgc3RhdHMubmFtZSBpcyAnc2V0X29mX3RleHRzJ1xuICAgICAgICByZXN1bHRfcm91bmRzID0gc3RhdHMucm91bmRzIGlmIHN0YXRzLm5hbWUgaXMgJ3NldF9vZl90ZXh0cydcbiAgICAgICAgQGVxICggzqlicmJyX182NCA9IC0+IHJlc3VsdF9yb3VuZHMgPj0gMCApLCB0cnVlXG4gICAgICBnZXRfcmFuZG9tICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCBvbl9zdGF0cywgfVxuICAgICAgbWF0Y2hlcnMgICAgPSBbXG4gICAgICAgIG5ldyBTZXQgWyAn4r6J4r2V4ryi4r6X4r6u4r6pJywgJ+K/i+K8veK8hOK8oOK+uuK8tCcsICfivLTivrzivKYnLCAn4r6P4r6aJywgJ+K/k+K9m+K+seK9s+K+neK8reK+iOK+nOK8o+K+pScsIF1cbiAgICAgICAgbmV3IFNldCBbICfivp3ivKXiv4fivJ7ivK3ivLUnLCAn4r2Q4ry44r26JywgJ+K8lOK/k+K8jOK+o+K+heK+suK9geK8jScsICfivbLivKnivJHiv4wnLCAn4ryp4r624ryV4r2T4r2QJywgXVxuICAgICAgICBuZXcgU2V0IFsgJ+K8ouK/gOK+s+K/leK8lOK/gOK8l+K+ieK9lCcsICfivofivprivKDivJjivLzivpAnLCAn4ryP4r+J4r6c4rym4r6c4ryG4r2eJywgJ+K9jeK9oOK+v+K8lOK8l+K/jicsICfivofivaTiv4PivoXivYvivo4nLCBdXG4gICAgICAgIG5ldyBTZXQgWyAn4ryY4ryC4r6b4r6W4ryo4r6b4r6cJywgJ+K9ieK8m+K/ieK8mOK/kuK9guK8q+K9l+K+nCcsICfivJTiv4viv4QnLCAn4ryf4ryF4ryO4r6C4ryu4r214r6+4r684r2UJywgJ+K+qOK9qeK+kOK8iuK8guK9hicsIF1cbiAgICAgICAgbmV3IFNldCBbICfivb/ivanivYonLCAn4ry94r6W4r6c4r624r6p4r6uJywgJ+K+tuK8ruK+gycsICfivb/ivbjivr3ivKHivbvivorivLYnLCAn4r2G4ryg4r204ry/4ry84ry/4r2r4r6IJywgXVxuICAgICAgICBuZXcgU2V0IFsgJ+K9oycsICfivrHivbvivYDivZvivr3ivrLivKbivrbivLknLCAn4ryV4r2X4ryM4ryW4r294r2m4r2OJywgJ+K9muK+jOK8vuK+jOK8p+K8m+K8uScsICfivoLivKPiv4EnLCBdXG4gICAgICAgIG5ldyBTZXQgWyAn4r6Y4r2y4r6f4r2k4ryYJywgJ+K+geK+p+K9nOK8leK+sOK+kOK8qScsICfivLHivpHiv4Piv5LivL3ivJknLCAn4r+P4r6w4r6T4ryQ4ryIJywgJ+K9mOK9l+K9veK8mOK/gCcsIF1cbiAgICAgICAgbmV3IFNldCBbICfivbPivLHivKTivr7ivbfivqDivL/ivpUnLCAn4ryb4ryC4r+D4ry24ryt4ryrJywgJ+K8q+K+gOK+hOK/i+K8j+K8vicsICfivYHivL3ivLnivq/iv4Piva7ivrPivZHivanivZMnLCAn4ryv4r2O4r6x4r2r4r2p4r6zJywgXVxuICAgICAgICBuZXcgU2V0IFsgJ+K8t+K+leK8iOK8tuK9qeK9v+K+oeK8g+K+nCcsICfivrHiv4fivp7ivrTivZ0nLCAn4r61JywgJ+K9u+K/lOK9gOK/juK+keK9jOK8pOK9mCcsICfiv4rivK3ivLPiv5LivJDivaXivZnivrLivZ8nLCBdXG4gICAgICAgIG5ldyBTZXQgWyAn4r2j4r2qJywgJ+K9meK8n+K9sOK+lycsICfivbAnLCAn4ry04r+R4r6B4r26JywgJ+K+kOK9jOK+oOK+reK9mCcsIF1cbiAgICAgICAgXVxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4gOSBdXG4gICAgICAgIHJlc3VsdCA9IGdldF9yYW5kb20uc2V0X29mX3RleHRzIHsgbWluOiAn4ryAJywgbWF4OiAn4r+VJywgc2l6ZTogNSwgbWluX2xlbmd0aDogMSwgbWF4X2xlbmd0aDogMTAsIH1cbiAgICAgICAgQGVxICggzqlicmJyX182NSA9IC0+IHJlc3VsdCApLCBtYXRjaGVyc1sgaWR4IF1cbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyX182NicsIHJlc3VsdFxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJlc3VsdF9yb3VuZHMgID0gbnVsbFxuICAgICAgb25fc3RhdHMgICAgICAgID0gKCBzdGF0cyApID0+XG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fNjcnLCBzdGF0c1xuICAgICAgICByZXR1cm4gbnVsbCB1bmxlc3Mgc3RhdHMubmFtZSBpcyAnd2Fsa191bmlxdWUnXG4gICAgICAgIHJlc3VsdF9yb3VuZHMgPSBzdGF0cy5yb3VuZHNcbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyX182OCcsIHJlc3VsdF9yb3VuZHNcbiAgICAgICAgQGVxICggzqlicmJyX182OSA9IC0+IHJlc3VsdF9yb3VuZHMgKSwgbWF0Y2hlcnNbIGlkeCBdLnJlc3VsdF9yb3VuZHNcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZ2V0X3JhbmRvbSAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgb25fc3RhdHMsIH1cbiAgICAgIG1hdGNoZXJzICAgID0gW1xuICAgICAgICB7IHJlc3VsdF9yb3VuZHM6ICA0LCByZXN1bHRfcnByOiAnNTY0MTc5MzA4MicsIH1cbiAgICAgICAgeyByZXN1bHRfcm91bmRzOiA2MywgcmVzdWx0X3JwcjogJzI4MTY3OTQ1MzAnLCB9XG4gICAgICAgIHsgcmVzdWx0X3JvdW5kczogMTEsIHJlc3VsdF9ycHI6ICc0NTM4MTk2MDcyJywgfVxuICAgICAgICB7IHJlc3VsdF9yb3VuZHM6IDIwLCByZXN1bHRfcnByOiAnNzgzMTkyNDA1NicsIH1cbiAgICAgICAgeyByZXN1bHRfcm91bmRzOiA3NiwgcmVzdWx0X3JwcjogJzAzMjU0Njc4MTknLCB9XG4gICAgICAgIHsgcmVzdWx0X3JvdW5kczogIDcsIHJlc3VsdF9ycHI6ICczMTQ5NzYwNTgyJywgfVxuICAgICAgICB7IHJlc3VsdF9yb3VuZHM6IDIwLCByZXN1bHRfcnByOiAnMjg1NzM2MTA5NCcsIH1cbiAgICAgICAgeyByZXN1bHRfcm91bmRzOiAzMSwgcmVzdWx0X3JwcjogJzQ1MjM3ODYwOTEnLCB9XG4gICAgICAgIHsgcmVzdWx0X3JvdW5kczogMTMsIHJlc3VsdF9ycHI6ICc0ODEzNTYwMjk3JywgfVxuICAgICAgICB7IHJlc3VsdF9yb3VuZHM6IDE5LCByZXN1bHRfcnByOiAnNzQ5MTA2NTgyMycsIH1cbiAgICAgICAgXVxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4gOSBdXG4gICAgICAgIHJlc3VsdCAgICAgID0gZ2V0X3JhbmRvbS5zZXRfb2ZfdGV4dHMgeyBtaW46ICcwJywgbWF4OiAnOScsIHNpemU6IDEwLCBsZW5ndGg6IDEsIG9uX3N0YXRzLCB9XG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fNzAnLCBycHIgcmVzdWx0XG4gICAgICAgIHJlc3VsdF9ycHIgID0gWyByZXN1bHQuLi4sIF0uam9pbiAnJ1xuICAgICAgICBAZXEgKCDOqWJyYnJfXzcxID0gLT4gcmVzdWx0X3JwciAgICAgKSwgbWF0Y2hlcnNbIGlkeCBdLnJlc3VsdF9ycHJcbiAgICAgICAgIyBAZXEgKCDOqWJyYnJfXzcyID0gLT4gcmVzdWx0X3JvdW5kcyApLCBtYXRjaGVyc1sgaWR4IF0ucmVzdWx0X3JvdW5kc1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBleGhhdXN0aW9uOiAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfcmFuZG9tKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICByZXN1bHRfcm91bmRzICA9IG51bGxcbiAgICAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSA9PlxuICAgICAgICAjIGluZm8gJ86pYnJicl9fNzMnLCBzdGF0cyBpZiBzdGF0cy5uYW1lIGlzICd3YWxrJ1xuICAgICAgICAjIHJlc3VsdF9yb3VuZHMgPSBzdGF0cy5yb3VuZHMgaWYgc3RhdHMubmFtZSBpcyAnd2FsaydcbiAgICAgICAgIyBAZXEgKCDOqWJyYnJfXzc0ID0gLT4gcmVzdWx0X3JvdW5kcyA+PSAwICksIHRydWVcbiAgICAgIGdldF9yYW5kb20gICAgICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCBvbl9zdGF0cywgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBjZmcgPVxuICAgICAgICBtaW46ICAgICAgICAgICAgJ0EnXG4gICAgICAgIG1heDogICAgICAgICAgICAnWidcbiAgICAgICAgbGVuZ3RoOiAgICAgICAgIDNcbiAgICAgICAgZmlsdGVyOiAgICAgICAgIC9eW2Etel17M30kL1xuICAgICAgICBvbl9leGhhdXN0aW9uOiAnZXJyb3InXG4gICAgICBAdGhyb3dzICggzqlicmJyX183NSA9IC0+IGdldF9yYW5kb20udGV4dCBjZmcgKSwgL2V4aGF1c3RlZC9cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgcmVzdWx0X3JvdW5kcyAgPSBudWxsXG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgPT5cbiAgICAgICAgIyBpbmZvICfOqWJyYnJfXzc2Jywgc3RhdHMgaWYgc3RhdHMubmFtZSBpcyAnd2FsaydcbiAgICAgICAgIyByZXN1bHRfcm91bmRzID0gc3RhdHMucm91bmRzIGlmIHN0YXRzLm5hbWUgaXMgJ3dhbGsnXG4gICAgICAgICMgQGVxICggzqlicmJyX183NyA9IC0+IHJlc3VsdF9yb3VuZHMgPj0gMCApLCB0cnVlXG4gICAgICBnZXRfcmFuZG9tICAgICAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgb25fc3RhdHMsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgY2ZnID1cbiAgICAgICAgbWluOiAgICAgICAgICAgICdBJ1xuICAgICAgICBtYXg6ICAgICAgICAgICAgJ1onXG4gICAgICAgIGxlbmd0aDogICAgICAgICAzXG4gICAgICAgIGZpbHRlcjogICAgICAgICAvXlthLXpdezN9JC9cbiAgICAgICAgb25fZXhoYXVzdGlvbjogLT4gbnVsbFxuICAgICAgQGVxICggzqlicmJyX183OCA9IC0+IGdldF9yYW5kb20udGV4dCBjZmcgKSwgbnVsbFxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB3YWxrOiAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfcmFuZG9tKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBpZHggICAgICAgICAgICAgPSAtMVxuICAgICAgZ2V0X3JhbmRvbSAgICAgID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIG9uX3N0YXRzLCB9XG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgPT5cbiAgICAgICAgIyBpbmZvICfOqWJyYnJfXzc5JywgaWR4LCBzdGF0cyAjIGlmIHN0YXRzLm5hbWUgaXMgJ3dhbGsnXG4gICAgICAgIGlmIHN0YXRzLm5hbWUgaXMgJ3dhbGsnXG4gICAgICAgICAgQGVxICggzqlicmJyX184MCA9IC0+IHN0YXRzLnJvdW5kcyApLCBtYXRjaGVyLnJvdW5kc1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXN1bHQgICAgPVxuICAgICAgICB2YWx1ZXM6ICAgW11cbiAgICAgIG1hdGNoZXIgICA9XG4gICAgICAgIHZhbHVlczogICBbICfEgsSNw4AnLCAndMSixYUnLCAnxL7DpsWxJywgJ0hwxZcnLCAnxZp6XicsICfElsSnxbsnLCAnxbzDicWJJywgJ8OtxKzEjCcsICfEqXXEtycsICfDrMSreCcsICfFqm18JyBdXG4gICAgICAgIHJvdW5kczogICAwXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHByb2R1Y2VyICA9IC0+IGdldF9yYW5kb20udGV4dCB7IG1pbjogJ0EnLCBtYXg6IDB4MDE3ZiwgbGVuZ3RoOiAzLCBvbl9zdGF0cywgfVxuICAgICAgZm9yIHZhbHVlIGZyb20gZ2V0X3JhbmRvbS53YWxrIHsgcHJvZHVjZXIsIG46IDExLCBvbl9zdGF0cywgfVxuICAgICAgICBpZHgrK1xuICAgICAgICAjIGRlYnVnICfOqWJyYnJfXzgxJywgaWR4LCBycHIgdmFsdWVcbiAgICAgICAgcmVzdWx0LnZhbHVlcy5wdXNoIHZhbHVlXG4gICAgICAgIEBlcSAoIM6pYnJicl9fODIgPSAtPiB2YWx1ZSApLCBtYXRjaGVyLnZhbHVlc1sgaWR4IF1cbiAgICAgIEBlcSAoIM6pYnJicl9fODMgPSAtPiBpZHggICAgICAgICAgICAgICAgICAgICksIDEwXG4gICAgICBAZXEgKCDOqWJyYnJfXzg0ID0gLT4gcmVzdWx0LnZhbHVlcy5sZW5ndGggICApLCAxMVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBkbyA9PlxuICAgICMgICBnZXRfcmFuZG9tICAgICAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgb25fc3RhdHMsIH1cbiAgICAjICAgcmVzdWx0X3JvdW5kcyAgPSBudWxsXG4gICAgIyAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSA9PlxuICAgICMgICAgIGluZm8gJ86pYnJicl9fODUnLCBzdGF0cyBpZiBzdGF0cy5uYW1lIGlzICd3YWxrJ1xuICAgICMgICAgIHJlc3VsdF9yb3VuZHMgPSBzdGF0cy5yb3VuZHMgaWYgc3RhdHMubmFtZSBpcyAnd2FsaydcbiAgICAjICAgICBAZXEgKCDOqWJyYnJfXzg2ID0gLT4gcmVzdWx0X3JvdW5kcyA+PSAwICksIHRydWVcbiAgICAjICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyAgIHByb2R1Y2VyICA9IC0+IGdldF9yYW5kb20udGV4dCB7IG1pbjogJzAnLCBtYXg6ICc5JywgbGVuZ3RoOiAxLCB9XG4gICAgIyAgIGNvdW50ICAgICA9IDBcbiAgICAjICAgc2VlbiAgICAgID0gbmV3IFNldCgpXG4gICAgIyAgIGZvciB4IGZyb20gZ2V0X3JhbmRvbS53YWxrIHsgcHJvZHVjZXIsIHNlZW4sIG46IDUsIH1cbiAgICAjICAgICBjb3VudCsrXG4gICAgIyAgICAgZGVidWcgJ86pYnJicl9fODcnLCBjb3VudCwgcnByIHhcbiAgICAjICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB3YWxrX3VuaXF1ZTogLT5cbiAgICB7IEdldF9yYW5kb20sXG4gICAgICBpbnRlcm5hbHMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X3JhbmRvbSgpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZ2V0X3JhbmRvbSAgICAgID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIG9uX3N0YXRzLCB9XG4gICAgICBtYXRjaGVycyAgICAgICAgPSBbIDE1LCAxNiwgMTQsIDExLCAxNywgMTksIDEzLCAxMCwgMTgsIDEyLCBdXG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgPT5cbiAgICAgICAgIyBpbmZvICfOqWJyYnJfXzg4Jywgc3RhdHNcbiAgICAgICAgQGVxICggzqlicmJyX184OSA9IC0+IHN0YXRzLnJvdW5kcyApLCA0IGlmIHN0YXRzLm5hbWUgaXMgJ3dhbGtfdW5pcXVlJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBwcm9kdWNlciAgPSAtPiBnZXRfcmFuZG9tLmludGVnZXIgeyBtaW46IDEwLCBtYXg6IDE5LCBvbl9zdGF0cywgfVxuICAgICAgaWR4ICAgICAgID0gLTFcbiAgICAgIGZvciB2YWx1ZSBmcm9tIGdldF9yYW5kb20ud2Fsa191bmlxdWUgeyBwcm9kdWNlciwgbjogMTAsIG9uX3N0YXRzLCB9XG4gICAgICAgIGlkeCsrXG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fOTAnLCBpZHgsIHJwciB2YWx1ZVxuICAgICAgICBAZXEgKCDOqWJyYnJfXzkxID0gLT4gdmFsdWUgKSwgbWF0Y2hlcnNbIGlkeCBdXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGdldF9yYW5kb20gICAgICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCBvbl9zdGF0cywgfVxuICAgICAgb25fc3RhdHMgICAgICAgID0gKCBzdGF0cyApID0+XG4gICAgICAgIEBlcSAoIM6pYnJicl9fOTIgPSAtPiBzdGF0cy5yb3VuZHMgKSwgNCBpZiBzdGF0cy5uYW1lIGlzICd3YWxrX3VuaXF1ZSdcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcHJvZHVjZXIgID0gLT4gZ2V0X3JhbmRvbS5pbnRlZ2VyIHsgbWluOiAxMCwgbWF4OiAxOSwgb25fc3RhdHMsIH1cbiAgICAgIEB0aHJvd3MgKCDOqWJyYnJfXzkzID0gLT4gdmFsdWUgZm9yIHZhbHVlIGZyb20gZ2V0X3JhbmRvbS53YWxrX3VuaXF1ZSB7IHByb2R1Y2VyLCBuOiAxMSwgb25fc3RhdHMsIH0gKSwgL2V4aGF1c3RlZC9cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZ2V0X3JhbmRvbSAgICAgID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIG9uX3N0YXRzLCB9XG4gICAgICBtYXRjaGVycyAgICAgICAgPSBbIDE1LCAxNiwgMTQsIDExLCAxNywgMTksIDEzLCAxMCwgMTgsIDEyLCBdXG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgPT5cbiAgICAgICAgIyBpbmZvICfOqWJyYnJfXzk0Jywgc3RhdHNcbiAgICAgICAgQGVxICggzqlicmJyX185NSA9IC0+IHN0YXRzLnJvdW5kcyApLCBnZXRfcmFuZG9tLmNmZy5tYXhfcm91bmRzICsgMSBpZiBzdGF0cy5uYW1lIGlzICd3YWxrX3VuaXF1ZSdcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcHJvZHVjZXIgID0gLT4gZ2V0X3JhbmRvbS5pbnRlZ2VyIHsgbWluOiAxMCwgbWF4OiAxOSwgb25fc3RhdHMsIH1cbiAgICAgIGlkeCAgICAgICA9IC0xXG4gICAgICBmb3IgdmFsdWUgZnJvbSBnZXRfcmFuZG9tLndhbGtfdW5pcXVlIHsgcHJvZHVjZXIsIG46IDIwLCBvbl9zdGF0cywgb25fZXhoYXVzdGlvbjogJ3N0b3AnLCB9XG4gICAgICAgIGlkeCsrXG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fOTYnLCBpZHgsIHJwciB2YWx1ZVxuICAgICAgICBAZXEgKCDOqWJyYnJfXzk3ID0gLT4gdmFsdWUgKSwgbWF0Y2hlcnNbIGlkeCBdXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGdldF9yYW5kb20gICAgICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCBvbl9zdGF0cywgfVxuICAgICAgbWF0Y2hlcnMgICAgICAgID0gJ8Kowq95RMK+w5bDkcO1YCVBw6NWW8OlSDXCtsOCw7zDvcOZw4VPwq7Dg0XDjcOER8OxP1hJdFotw4vCrMOaZC5rSzLDtkrDnjZ3c8Ovw6nDnMO/OcKweMKnw4FCX8K3w4Aww7ImccOoOMO3w6zCq27CtcKyXCLCvcOdbTzDs2VNe1HDrUBQw6fDkCtqwqXDn17CqcOmQ8KhwrHDk2liLGNcXFxcwrM3wqNyfmHDqsK/w4c6w45TesO5w5jCuih8VMK8wqbCqi/DunXCosObWcKkw4kjw7DDvsO4wrhvRlUxfXAkV8Kgw5XDtDTDjMOkw4jDqz7Dj3bDl0xSXWZnXFwnw67CtMK5w7vDksOiw4opwrtow5QhO8OgKk7DocOGPTNsJ1xuICAgICAgcmVzdWx0cyAgICAgICAgID0gW11cbiAgICAgIG1heF9yb3VuZHMgICAgICA9IDFfMDAwXG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgPT5cbiAgICAgICAgIyBpbmZvICfOqWJyYnJfXzk4Jywgc3RhdHNcbiAgICAgICAgQGVxICggzqlicmJyX185OSA9IC0+IHN0YXRzLnJvdW5kcyApLCBtYXhfcm91bmRzICsgMSBpZiBzdGF0cy5uYW1lIGlzICd3YWxrX3VuaXF1ZSdcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcHJvZHVjZXIgID0gLT4gZ2V0X3JhbmRvbS5jaHIgeyBtaW46IDB4MjAsIG1heDogMHhmZiwgb25fc3RhdHMsIH1cbiAgICAgIGlkeCAgICAgICA9IC0xXG4gICAgICBmb3IgdmFsdWUgZnJvbSBnZXRfcmFuZG9tLndhbGtfdW5pcXVlIHsgcHJvZHVjZXIsIG46IDIwMCwgb25fc3RhdHMsIG9uX2V4aGF1c3Rpb246ICdzdG9wJywgbWF4X3JvdW5kcywgfVxuICAgICAgICBpZHgrK1xuICAgICAgICAjIGRlYnVnICfOqWJyYnJfMTAwJywgaWR4LCBycHIgdmFsdWVcbiAgICAgICAgQGVxICggzqlicmJyXzEwMSA9IC0+IHZhbHVlICksIG1hdGNoZXJzWyBpZHggXVxuICAgICAgICByZXN1bHRzLnB1c2ggdmFsdWVcbiAgICAgICMgZGVidWcgJ86pYnJicl8xMDInLCBycHIgcmVzdWx0cy5qb2luICcnXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGdldF9yYW5kb20gICAgICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCBvbl9zdGF0cywgfVxuICAgICAgbWF0Y2hlcnMgICAgICAgID0gJ8K7aMOUITvDoCpOw6HDhj0zbCdcbiAgICAgIHJlc3VsdHMgICAgICAgICA9IFtdXG4gICAgICBtYXhfcm91bmRzICAgICAgPSAxXzAwMFxuICAgICAgb25fc3RhdHMgICAgICAgID0gKCBzdGF0cyApID0+XG4gICAgICAgICMgaW5mbyAnzqlicmJyXzEwMycsIHN0YXRzXG4gICAgICAgIEBlcSAoIM6pYnJicl8xMDQgPSAtPiBzdGF0cy5yb3VuZHMgKSwgbWF4X3JvdW5kcyArIDEgaWYgc3RhdHMubmFtZSBpcyAnd2Fsa191bmlxdWUnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNlZW4gICAgICA9IG5ldyBTZXQgJ8Kowq95RMK+w5bDkcO1YCVBw6NWW8OlSDXCtsOCw7zDvcOZw4VPwq7Dg0XDjcOER8OxP1hJdFotw4vCrMOaZC5rSzLDtkrDnjZ3c8Ovw6nDnMO/OcKweMKnw4FCX8K3w4Aww7ImccOoOMO3w6zCq27CtcKyXCLCvcOdbTzDs2VNe1HDrUBQw6fDkCtqwqXDn17CqcOmQ8KhwrHDk2liLGNcXFxcwrM3wqNyfmHDqsK/w4c6w45TesO5w5jCuih8VMK8wqbCqi/DunXCosObWcKkw4kjw7DDvsO4wrhvRlUxfXAkV8Kgw5XDtDTDjMOkw4jDqz7Dj3bDl0xSXWZnXFwnw67CtMK5w7vDksOiw4opJ1xuICAgICAgcHJvZHVjZXIgID0gLT4gZ2V0X3JhbmRvbS5jaHIgeyBtaW46IDB4MjAsIG1heDogMHhmZiwgb25fc3RhdHMsIH1cbiAgICAgIGlkeCAgICAgICA9IC0xXG4gICAgICBmb3IgdmFsdWUgZnJvbSBnZXRfcmFuZG9tLndhbGtfdW5pcXVlIHsgcHJvZHVjZXIsIG46IDIwMCwgc2Vlbiwgb25fc3RhdHMsIG9uX2V4aGF1c3Rpb246ICdzdG9wJywgbWF4X3JvdW5kcywgfVxuICAgICAgICBpZHgrK1xuICAgICAgICAjIGRlYnVnICfOqWJyYnJfMTA1JywgaWR4LCBycHIgdmFsdWVcbiAgICAgICAgQGVxICggzqlicmJyXzEwNiA9IC0+IHZhbHVlICksIG1hdGNoZXJzWyBpZHggXVxuICAgICAgICByZXN1bHRzLnB1c2ggdmFsdWVcbiAgICAgICMgZGVidWcgJ86pYnJicl8xMDcnLCBycHIgcmVzdWx0cy5qb2luICcnXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGdldF9yYW5kb20gICAgICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCBvbl9zdGF0cywgfVxuICAgICAgbWF0Y2hlcnMgICAgICAgID0gJ3Bxa2VzdW55aGJld2djcnN6bHZvZnFzZXQnXG4gICAgICByZXN1bHRzICAgICAgICAgPSBbXVxuICAgICAgb25fc3RhdHMgICAgICAgID0gKCBzdGF0cyApID0+XG4gICAgICAgICMgaW5mbyAnzqlicmJyXzEwOCcsIHN0YXRzXG4gICAgICAgIEBlcSAoIM6pYnJicl8xMDkgPSAtPiBzdGF0cy5yb3VuZHMgKSwgNyBpZiBzdGF0cy5uYW1lIGlzICd3YWxrX3VuaXF1ZSdcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc2VlbiAgICAgID0gbmV3IFNldCgpXG4gICAgICBwdXJ2aWV3ICAgPSA1ICMjIyBOT1RFIG1heGltdW0gc2l6ZSBvZiAnd2luZG93JyB3aGVyZSB1bnFpdWVuZXNzIGlzIGd1YXJhbnRlZWQ7IGBzZWVuYCB3aWxsIG5vdCBncm93IGJleW9uZCB0aGlzICMjI1xuICAgICAgcHJvZHVjZXIgID0gLT4gZ2V0X3JhbmRvbS5jaHIgeyBtaW46ICdhJywgbWF4OiAneicsIG9uX3N0YXRzLCB9XG4gICAgICBpZHggICAgICAgPSAtMVxuICAgICAgZm9yIHZhbHVlIGZyb20gZ2V0X3JhbmRvbS53YWxrX3VuaXF1ZSB7IHByb2R1Y2VyLCBuOiAyNSwgc2VlbiwgcHVydmlldywgb25fc3RhdHMsIG9uX2V4aGF1c3Rpb246ICdzdG9wJywgfVxuICAgICAgICBpZHgrK1xuICAgICAgICAjIGRlYnVnICfOqWJyYnJfMTEwJywgaWR4LCBycHIgdmFsdWVcbiAgICAgICAgQGVxICggzqlicmJyXzExMSA9IC0+IHZhbHVlICksIG1hdGNoZXJzWyBpZHggXVxuICAgICAgICByZXN1bHRzLnB1c2ggdmFsdWVcbiAgICAgIEBlcSAoIM6pYnJicl8xMTIgPSAtPiBbIHNlZW4uLi4sIF0uam9pbiAnJyApLCAnb2Zxc2V0J1xuICAgICAgQGVxICggzqlicmJyXzExMyA9IC0+IHNlZW4uc2l6ZSApLCBwdXJ2aWV3ICsgMVxuICAgICAgIyBkZWJ1ZyAnzqlicmJyXzExNCcsIHJwciByZXN1bHRzLmpvaW4gJydcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZ2V0X3JhbmRvbSAgICAgID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIG9uX3N0YXRzLCB9XG4gICAgICBtYXRjaGVycyAgICAgICAgPSAnNDMyNTYxNDMyNTYxNDMyNTYxNDMyNTYxNCdcbiAgICAgIHJlc3VsdHMgICAgICAgICA9IFtdXG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgPT5cbiAgICAgICAgIyBpbmZvICfOqWJyYnJfMTE1Jywgc3RhdHNcbiAgICAgICAgQGVxICggzqlicmJyXzExNiA9IC0+IHN0YXRzLnJvdW5kcyApLCA2NCBpZiBzdGF0cy5uYW1lIGlzICd3YWxrX3VuaXF1ZSdcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc2VlbiAgICAgID0gbmV3IFNldCgpXG4gICAgICBwdXJ2aWV3ICAgPSA1ICMjIyBOT1RFIG1heGltdW0gc2l6ZSBvZiAnd2luZG93JyB3aGVyZSB1bnFpdWVuZXNzIGlzIGd1YXJhbnRlZWQ7IGBzZWVuYCB3aWxsIG5vdCBncm93IGJleW9uZCB0aGlzICMjI1xuICAgICAgcHJvZHVjZXIgID0gLT4gZ2V0X3JhbmRvbS5jaHIgeyBtaW46ICcxJywgbWF4OiAnNicsIG9uX3N0YXRzLCB9XG4gICAgICBpZHggICAgICAgPSAtMVxuICAgICAgZm9yIHZhbHVlIGZyb20gZ2V0X3JhbmRvbS53YWxrX3VuaXF1ZSB7IHByb2R1Y2VyLCBuOiAyNSwgc2VlbiwgcHVydmlldywgb25fc3RhdHMsIG9uX2V4aGF1c3Rpb246ICdzdG9wJywgfVxuICAgICAgICBpZHgrK1xuICAgICAgICAjIGRlYnVnICfOqWJyYnJfMTE3JywgaWR4LCBycHIgdmFsdWVcbiAgICAgICAgQGVxICggzqlicmJyXzExOCA9IC0+IHZhbHVlICksIG1hdGNoZXJzWyBpZHggXVxuICAgICAgICByZXN1bHRzLnB1c2ggdmFsdWVcbiAgICAgIEBlcSAoIM6pYnJicl8xMTkgPSAtPiBbIHNlZW4uLi4sIF0uam9pbiAnJyApLCAnMzI1NjE0J1xuICAgICAgQGVxICggzqlicmJyXzEyMCA9IC0+IHNlZW4uc2l6ZSApLCBwdXJ2aWV3ICsgMVxuICAgICAgIyBkZWJ1ZyAnzqlicmJyXzEyMScsIHJwciByZXN1bHRzLmpvaW4gJydcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZ2V0X3JhbmRvbSAgICAgID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIG9uX3N0YXRzLCB9XG4gICAgICBtYXRjaGVycyAgICAgICAgPSAnNTMyNjQ3MTMyNjU3NDMyMTY1NDcyMzY1MTcyNDM2NTEyNzM2NTQxMjM2NTQxJ1xuICAgICAgcmVzdWx0cyAgICAgICAgID0gW11cbiAgICAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSA9PlxuICAgICAgICAjIGluZm8gJ86pYnJicl8xMjInLCBzdGF0c1xuICAgICAgICBAZXEgKCDOqWJyYnJfMTIzID0gLT4gc3RhdHMucm91bmRzICksIDEyOSBpZiBzdGF0cy5uYW1lIGlzICd3YWxrX3VuaXF1ZSdcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc2VlbiAgICAgID0gbmV3IFNldCgpXG4gICAgICBwdXJ2aWV3ICAgPSA1ICMjIyBOT1RFIG1heGltdW0gc2l6ZSBvZiAnd2luZG93JyB3aGVyZSB1bnFpdWVuZXNzIGlzIGd1YXJhbnRlZWQ7IGBzZWVuYCB3aWxsIG5vdCBncm93IGJleW9uZCB0aGlzICMjI1xuICAgICAgcHJvZHVjZXIgID0gLT4gZ2V0X3JhbmRvbS5jaHIgeyBtaW46ICcxJywgbWF4OiAnNycsIG9uX3N0YXRzLCB9XG4gICAgICBpZHggICAgICAgPSAtMVxuICAgICAgZm9yIHZhbHVlIGZyb20gZ2V0X3JhbmRvbS53YWxrX3VuaXF1ZSB7IHByb2R1Y2VyLCBuOiA0NSwgc2VlbiwgcHVydmlldywgb25fc3RhdHMsIG9uX2V4aGF1c3Rpb246ICdzdG9wJywgfVxuICAgICAgICBpZHgrK1xuICAgICAgICAjIGRlYnVnICfOqWJyYnJfMTI0JywgaWR4LCBycHIgdmFsdWVcbiAgICAgICAgQGVxICggzqlicmJyXzEyNSA9IC0+IHZhbHVlICksIG1hdGNoZXJzWyBpZHggXVxuICAgICAgICByZXN1bHRzLnB1c2ggdmFsdWVcbiAgICAgIEBlcSAoIM6pYnJicl8xMjYgPSAtPiBbIHNlZW4uLi4sIF0uam9pbiAnJyApLCAnMjM2NTQxJ1xuICAgICAgQGVxICggzqlicmJyXzEyNyA9IC0+IHNlZW4uc2l6ZSApLCBwdXJ2aWV3ICsgMVxuICAgICAgIyBkZWJ1ZyAnzqlicmJyXzEyOCcsIHJwciByZXN1bHRzLmpvaW4gJydcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc3RhdHM6IC0+XG4gICAgeyBHZXRfcmFuZG9tLFxuICAgICAgaW50ZXJuYWxzLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2dldF9yYW5kb20oKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHNlbnRpbmVsICAgICAgPSBTeW1ib2wgJ3NlbnRpbmVsJ1xuICAgICAgb25fZXhoYXVzdGlvbiA9IC0+IHNlbnRpbmVsXG4gICAgICBzdGF0cyA9IG5ldyBpbnRlcm5hbHMuU3RhdHMgeyBuYW1lOiAnc29tZXRoaW5nJywgb25fZXhoYXVzdGlvbiwgfVxuICAgICAgQGVxICAgICAoIM6pYnJicl8xMjkgPSAtPiBzdGF0cy5uYW1lICAgICAgICAgICApLCAnc29tZXRoaW5nJ1xuICAgICAgQGVxICAgICAoIM6pYnJicl8xMzAgPSAtPiBzdGF0cy5tYXhfcm91bmRzICAgICApLCBpbnRlcm5hbHMubWF4X3JvdW5kc1xuICAgICAgQGVxICAgICAoIM6pYnJicl8xMzEgPSAtPiBzdGF0cy5yb3VuZHMgICAgICAgICApLCAwXG4gICAgICBAdGhyb3dzICggzqlicmJyXzEzMiA9IC0+IHN0YXRzLnJvdW5kcysrICAgICAgICksIC9DYW5ub3Qgc2V0IHByb3BlcnR5L1xuICAgICAgQGVxICAgICAoIM6pYnJicl8xMzMgPSAtPiBzdGF0cy5yZXRyeSgpICAgICAgICApLCBpbnRlcm5hbHMuZ29fb25cbiAgICAgIEBlcSAgICAgKCDOqWJyYnJfMTM0ID0gLT4gc3RhdHMucm91bmRzICAgICAgICAgKSwgMVxuICAgICAgc3RhdHMuX3JvdW5kcyA9IGludGVybmFscy5tYXhfcm91bmRzIC0gMVxuICAgICAgIyBkZWJ1ZyAnzqlicmJyXzEzNScsIHN0YXRzXG4gICAgICAjIGRlYnVnICfOqWJyYnJfMTM2Jywgc3RhdHMucm91bmRzXG4gICAgICAjIGRlYnVnICfOqWJyYnJfMTM3JywgaW50ZXJuYWxzLm1heF9yb3VuZHNcbiAgICAgICMgZGVidWcgJ86pYnJicl8xMzgnLCBzdGF0cy5tYXhfcm91bmRzXG4gICAgICBAZXEgKCDOqWJyYnJfMTM5ID0gLT4gc3RhdHMucmV0cnkoKSApLCBpbnRlcm5hbHMuZ29fb25cbiAgICAgIEBlcSAoIM6pYnJicl8xNDAgPSAtPiBzdGF0cy5yZXRyeSgpICksIHNlbnRpbmVsXG4gICAgICBAZXEgKCDOqWJyYnJfMTQxID0gLT4gc3RhdHMucmV0cnkoKSApLCBzZW50aW5lbFxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBvbl9leGhhdXN0aW9uID0gdW5kZWZpbmVkXG4gICAgICBzdGF0cyA9IG5ldyBpbnRlcm5hbHMuU3RhdHMgeyBuYW1lOiAnc29tZXRoaW5nJywgb25fZXhoYXVzdGlvbiwgfVxuICAgICAgc3RhdHMuX3JvdW5kcyA9IGludGVybmFscy5tYXhfcm91bmRzIC0gMVxuICAgICAgQGVxICAgICAoIM6pYnJicl8xNDIgPSAtPiBzdGF0cy5yZXRyeSgpICksIGludGVybmFscy5nb19vblxuICAgICAgQHRocm93cyAoIM6pYnJicl8xNDMgPSAtPiBzdGF0cy5yZXRyeSgpICksIC9leGhhdXN0ZWQvXG4gICAgICBAdGhyb3dzICggzqlicmJyXzE0NCA9IC0+IHN0YXRzLnJldHJ5KCkgKSwgL2V4aGF1c3RlZC9cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgb25fZXhoYXVzdGlvbiA9IG51bGxcbiAgICAgIHN0YXRzID0gbmV3IGludGVybmFscy5TdGF0cyB7IG5hbWU6ICdzb21ldGhpbmcnLCBvbl9leGhhdXN0aW9uLCB9XG4gICAgICBzdGF0cy5fcm91bmRzID0gaW50ZXJuYWxzLm1heF9yb3VuZHMgLSAxXG4gICAgICBAZXEgICAgICggzqlicmJyXzE0NSA9IC0+IHN0YXRzLnJldHJ5KCkgKSwgaW50ZXJuYWxzLmdvX29uXG4gICAgICBAdGhyb3dzICggzqlicmJyXzE0NiA9IC0+IHN0YXRzLnJldHJ5KCkgKSwgL2V4aGF1c3RlZC9cbiAgICAgIEB0aHJvd3MgKCDOqWJyYnJfMTQ3ID0gLT4gc3RhdHMucmV0cnkoKSApLCAvZXhoYXVzdGVkL1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBvbl9leGhhdXN0aW9uID0gJ2Vycm9yJ1xuICAgICAgc3RhdHMgPSBuZXcgaW50ZXJuYWxzLlN0YXRzIHsgbmFtZTogJ3NvbWV0aGluZycsIG9uX2V4aGF1c3Rpb24sIH1cbiAgICAgIHN0YXRzLl9yb3VuZHMgPSBpbnRlcm5hbHMubWF4X3JvdW5kcyAtIDFcbiAgICAgIEBlcSAgICAgKCDOqWJyYnJfMTQ4ID0gLT4gc3RhdHMucmV0cnkoKSApLCBpbnRlcm5hbHMuZ29fb25cbiAgICAgIEB0aHJvd3MgKCDOqWJyYnJfMTQ5ID0gLT4gc3RhdHMucmV0cnkoKSApLCAvZXhoYXVzdGVkL1xuICAgICAgQHRocm93cyAoIM6pYnJicl8xNTAgPSAtPiBzdGF0cy5yZXRyeSgpICksIC9leGhhdXN0ZWQvXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHNlbnRpbmVsICAgICAgPSBTeW1ib2wgJ3NlbnRpbmVsJ1xuICAgICAgc3RhdHNfcmVzdWx0ICA9IG51bGxcbiAgICAgIG9uX2V4aGF1c3Rpb24gPSAtPiBzZW50aW5lbFxuICAgICAgb25fc3RhdHMgICAgICA9IC0+IHNlbnRpbmVsXG4gICAgICBtYXhfcm91bmRzICAgPSAzXG4gICAgICBzdGF0cyA9IG5ldyBpbnRlcm5hbHMuU3RhdHMgeyBuYW1lOiAnc29tZXRoaW5nJywgb25fZXhoYXVzdGlvbiwgb25fc3RhdHMsIG1heF9yb3VuZHMsIH1cbiAgICAgIEBlcSAgICAgKCDOqWJyYnJfMTUxID0gLT4gc3RhdHMucm91bmRzICksIDBcbiAgICAgIEBlcSAgICAgKCDOqWJyYnJfMTUyID0gLT4gc3RhdHMucmV0cnkoKSApLCBpbnRlcm5hbHMuZ29fb25cbiAgICAgIEBlcSAgICAgKCDOqWJyYnJfMTUzID0gLT4gc3RhdHMucm91bmRzICksIDFcbiAgICAgIEBlcSAgICAgKCDOqWJyYnJfMTU0ID0gLT4gc3RhdHMucmV0cnkoKSApLCBpbnRlcm5hbHMuZ29fb25cbiAgICAgIEBlcSAgICAgKCDOqWJyYnJfMTU1ID0gLT4gc3RhdHMucm91bmRzICksIDJcbiAgICAgIEBlcSAgICAgKCDOqWJyYnJfMTU2ID0gLT4gc3RhdHMucmV0cnkoKSApLCBpbnRlcm5hbHMuZ29fb25cbiAgICAgIEBlcSAgICAgKCDOqWJyYnJfMTU3ID0gLT4gc3RhdHMucm91bmRzICksIDNcbiAgICAgIEBlcSAgICAgKCDOqWJyYnJfMTU4ID0gLT4gc3RhdHMucmV0cnkoKSApLCBzZW50aW5lbFxuICAgICAgQGVxICAgICAoIM6pYnJicl8xNTkgPSAtPiBzdGF0cy5maW5pc2ggJ3ZhbHVlJyApLCAndmFsdWUnXG4gICAgICBAdGhyb3dzICggzqlicmJyXzE2MCA9IC0+IHN0YXRzLmZpbmlzaCAndmFsdWUnICksIC9maW5pc2hlZC9cbiAgICAgIEB0aHJvd3MgKCDOqWJyYnJfMTYxID0gLT4gc3RhdHMucmV0cnkoKSApLCAvZmluaXNoZWQvXG4gICAgICBAdGhyb3dzICggzqlicmJyXzE2MiA9IC0+IHN0YXRzLnJldHJ5KCkgKSwgL2ZpbmlzaGVkL1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZXF1aXJlX2Zvcm1hdF9zdGFja19wYXJzZV9saW5lOiAtPlxuICAgIHsgRm9ybWF0X3N0YWNrLFxuICAgICAgZm9ybWF0X3N0YWNrLCAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9mb3JtYXRfc3RhY2soKVxuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHByb2Jlc19hbmRfbWF0Y2hlcnMgPSBbXG4gICAgICBbIFwiXCJcImF0IDxhbm9ueW1vdXM+ICgvcGF0aC90by9oZW5naXN0LU5HL2Rldi9icmljYWJyYWMvc3JjL3Rlc3QtZGJyaWMuY29mZmVlOjI5MDoxMSlcIlwiXCIsICAgICAgICAgICAgICB7IGNhbGxlZTogJzxhbm9ueW1vdXM+JywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogJy9wYXRoL3RvL2hlbmdpc3QtTkcvZGV2L2JyaWNhYnJhYy9zcmMvdGVzdC1kYnJpYy5jb2ZmZWUnLCBmb2xkZXJfcGF0aDogJy9wYXRoL3RvL2hlbmdpc3QtTkcvZGV2L2JyaWNhYnJhYy9zcmMvJywgIGZpbGVfbmFtZTogJ3Rlc3QtZGJyaWMuY29mZmVlJywgICAgICAgIGxpbmVfbnI6IDI5MCwgIGNvbHVtbl9ucjogMTEsIHR5cGU6ICdtYWluJywgICAgICAgfSwgXVxuICAgICAgWyBcIlwiXCJhdCBPYmplY3QuPGFub255bW91cz4gKC9wYXRoL3RvL2hlbmdpc3QtTkcvZGV2L2JyaWNhYnJhYy9zcmMvdGVzdC1kYnJpYy5jb2ZmZWU6MjQ1OjQxKVwiXCJcIiwgICAgICAgeyBjYWxsZWU6ICdPYmplY3QuPGFub255bW91cz4nLCAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6ICcvcGF0aC90by9oZW5naXN0LU5HL2Rldi9icmljYWJyYWMvc3JjL3Rlc3QtZGJyaWMuY29mZmVlJywgZm9sZGVyX3BhdGg6ICcvcGF0aC90by9oZW5naXN0LU5HL2Rldi9icmljYWJyYWMvc3JjLycsICBmaWxlX25hbWU6ICd0ZXN0LWRicmljLmNvZmZlZScsICAgICAgICBsaW5lX25yOiAyNDUsICBjb2x1bW5fbnI6IDQxLCB0eXBlOiAnbWFpbicsICAgICAgIH0sIF1cbiAgICAgIFsgXCJcIlwiYXQgT2JqZWN0Ljxhbm9ueW1vdXM+ICgvcGF0aC90by9oZW5naXN0LU5HL2Rldi9icmljYWJyYWMvc3JjL3Rlc3QtZGJyaWMuY29mZmVlOjM6MSlcIlwiXCIsICAgICAgICAgIHsgY2FsbGVlOiAnT2JqZWN0Ljxhbm9ueW1vdXM+JywgICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiAnL3BhdGgvdG8vaGVuZ2lzdC1ORy9kZXYvYnJpY2FicmFjL3NyYy90ZXN0LWRicmljLmNvZmZlZScsIGZvbGRlcl9wYXRoOiAnL3BhdGgvdG8vaGVuZ2lzdC1ORy9kZXYvYnJpY2FicmFjL3NyYy8nLCAgZmlsZV9uYW1lOiAndGVzdC1kYnJpYy5jb2ZmZWUnLCAgICAgICAgbGluZV9ucjogMywgICAgY29sdW1uX25yOiAxLCAgdHlwZTogJ21haW4nLCAgICAgICB9LCBdXG4gICAgICBbIFwiXCJcImF0IGRvX3NvbWV0aGluZyAoLi4vd2hhdGV2ZXIvc3JjL3Rlc3QtZGJyaWMuY29mZmVlOjM6MSlcIlwiXCIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNhbGxlZTogJ2RvX3NvbWV0aGluZycsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogJy4uL3doYXRldmVyL3NyYy90ZXN0LWRicmljLmNvZmZlZScsICAgICAgICAgICAgICAgICAgICAgICBmb2xkZXJfcGF0aDogJy4uL3doYXRldmVyL3NyYy8nLCAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVfbmFtZTogJ3Rlc3QtZGJyaWMuY29mZmVlJywgICAgICAgIGxpbmVfbnI6IDMsICAgIGNvbHVtbl9ucjogMSwgIHR5cGU6ICdleHRlcm5hbCcsICAgfSwgXVxuICAgICAgWyBcIlwiXCJhdCBkb19zb21ldGhpbmcgKC4vbm9kZV9tb2R1bGVzL3Rlc3QtZGJyaWMuY29mZmVlOjM6MSlcIlwiXCIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjYWxsZWU6ICdkb19zb21ldGhpbmcnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6ICcuL25vZGVfbW9kdWxlcy90ZXN0LWRicmljLmNvZmZlZScsICAgICAgICAgICAgICAgICAgICAgICAgZm9sZGVyX3BhdGg6ICcuL25vZGVfbW9kdWxlcy8nLCAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlX25hbWU6ICd0ZXN0LWRicmljLmNvZmZlZScsICAgICAgICBsaW5lX25yOiAzLCAgICBjb2x1bW5fbnI6IDEsICB0eXBlOiAnZGVwZW5kZW5jeScsIH0sIF1cbiAgICAgIFsgXCJcIlwiYXQgTW9kdWxlLl9jb21waWxlIChub2RlOmludGVybmFsL21vZHVsZXMvY2pzL2xvYWRlcjoxNzM4OjE0KVwiXCJcIiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2FsbGVlOiAnTW9kdWxlLl9jb21waWxlJywgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiAnbm9kZTppbnRlcm5hbC9tb2R1bGVzL2Nqcy9sb2FkZXInLCAgICAgICAgICAgICAgICAgICAgICAgIGZvbGRlcl9wYXRoOiAnbm9kZTppbnRlcm5hbC9tb2R1bGVzL2Nqcy8nLCAgICAgICAgICAgICAgZmlsZV9uYW1lOiAnbG9hZGVyJywgICAgICAgICAgICAgICAgICAgbGluZV9ucjogMTczOCwgY29sdW1uX25yOiAxNCwgdHlwZTogJ2ludGVybmFsJywgICB9LCBdXG4gICAgICBbIFwiXCJcImF0IE9iamVjdC4uanMgKG5vZGU6aW50ZXJuYWwvbW9kdWxlcy9janMvbG9hZGVyOjE4NzE6MTApXCJcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNhbGxlZTogJ09iamVjdC4uanMnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogJ25vZGU6aW50ZXJuYWwvbW9kdWxlcy9janMvbG9hZGVyJywgICAgICAgICAgICAgICAgICAgICAgICBmb2xkZXJfcGF0aDogJ25vZGU6aW50ZXJuYWwvbW9kdWxlcy9janMvJywgICAgICAgICAgICAgIGZpbGVfbmFtZTogJ2xvYWRlcicsICAgICAgICAgICAgICAgICAgIGxpbmVfbnI6IDE4NzEsIGNvbHVtbl9ucjogMTAsIHR5cGU6ICdpbnRlcm5hbCcsICAgfSwgXVxuICAgICAgWyBcIlwiXCJhdCBNb2R1bGUubG9hZCAobm9kZTppbnRlcm5hbC9tb2R1bGVzL2Nqcy9sb2FkZXI6MTQ3MDozMilcIlwiXCIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjYWxsZWU6ICdNb2R1bGUubG9hZCcsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6ICdub2RlOmludGVybmFsL21vZHVsZXMvY2pzL2xvYWRlcicsICAgICAgICAgICAgICAgICAgICAgICAgZm9sZGVyX3BhdGg6ICdub2RlOmludGVybmFsL21vZHVsZXMvY2pzLycsICAgICAgICAgICAgICBmaWxlX25hbWU6ICdsb2FkZXInLCAgICAgICAgICAgICAgICAgICBsaW5lX25yOiAxNDcwLCBjb2x1bW5fbnI6IDMyLCB0eXBlOiAnaW50ZXJuYWwnLCAgIH0sIF1cbiAgICAgIFsgXCJcIlwiYXQgTW9kdWxlLl9sb2FkIChub2RlOmludGVybmFsL21vZHVsZXMvY2pzL2xvYWRlcjoxMjkwOjEyKVwiXCJcIiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2FsbGVlOiAnTW9kdWxlLl9sb2FkJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiAnbm9kZTppbnRlcm5hbC9tb2R1bGVzL2Nqcy9sb2FkZXInLCAgICAgICAgICAgICAgICAgICAgICAgIGZvbGRlcl9wYXRoOiAnbm9kZTppbnRlcm5hbC9tb2R1bGVzL2Nqcy8nLCAgICAgICAgICAgICAgZmlsZV9uYW1lOiAnbG9hZGVyJywgICAgICAgICAgICAgICAgICAgbGluZV9ucjogMTI5MCwgY29sdW1uX25yOiAxMiwgdHlwZTogJ2ludGVybmFsJywgICB9LCBdXG4gICAgICBbIFwiXCJcImF0IFRyYWNpbmdDaGFubmVsLnRyYWNlU3luYyAobm9kZTpkaWFnbm9zdGljc19jaGFubmVsOjMyMjoxNClcIlwiXCIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNhbGxlZTogJ1RyYWNpbmdDaGFubmVsLnRyYWNlU3luYycsICAgICAgICAgICAgICAgICAgcGF0aDogJ25vZGU6ZGlhZ25vc3RpY3NfY2hhbm5lbCcsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2xkZXJfcGF0aDogJycsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVfbmFtZTogJ25vZGU6ZGlhZ25vc3RpY3NfY2hhbm5lbCcsIGxpbmVfbnI6IDMyMiwgIGNvbHVtbl9ucjogMTQsIHR5cGU6ICdpbnRlcm5hbCcsICAgfSwgXVxuICAgICAgWyBcIlwiXCJhdCB3cmFwTW9kdWxlTG9hZCAobm9kZTppbnRlcm5hbC9tb2R1bGVzL2Nqcy9sb2FkZXI6MjM4OjI0KVwiXCJcIiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjYWxsZWU6ICd3cmFwTW9kdWxlTG9hZCcsICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6ICdub2RlOmludGVybmFsL21vZHVsZXMvY2pzL2xvYWRlcicsICAgICAgICAgICAgICAgICAgICAgICAgZm9sZGVyX3BhdGg6ICdub2RlOmludGVybmFsL21vZHVsZXMvY2pzLycsICAgICAgICAgICAgICBmaWxlX25hbWU6ICdsb2FkZXInLCAgICAgICAgICAgICAgICAgICBsaW5lX25yOiAyMzgsICBjb2x1bW5fbnI6IDI0LCB0eXBlOiAnaW50ZXJuYWwnLCAgIH0sIF1cbiAgICAgIFsgXCJcIlwiYXQgTW9kdWxlLmV4ZWN1dGVVc2VyRW50cnlQb2ludCBbYXMgcnVuTWFpbl0gKG5vZGU6aW50ZXJuYWwvbW9kdWxlcy9ydW5fbWFpbjoxNTQ6NSlcIlwiXCIsICAgICAgICAgIHsgY2FsbGVlOiAnTW9kdWxlLmV4ZWN1dGVVc2VyRW50cnlQb2ludCBbYXMgcnVuTWFpbl0nLCBwYXRoOiAnbm9kZTppbnRlcm5hbC9tb2R1bGVzL3J1bl9tYWluJywgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbGRlcl9wYXRoOiAnbm9kZTppbnRlcm5hbC9tb2R1bGVzLycsICAgICAgICAgICAgICAgICAgZmlsZV9uYW1lOiAncnVuX21haW4nLCAgICAgICAgICAgICAgICAgbGluZV9ucjogMTU0LCAgY29sdW1uX25yOiA1LCAgdHlwZTogJ2ludGVybmFsJywgICB9LCBdXG4gICAgICBbIFwiXCJcImF0IG5vZGU6aW50ZXJuYWwvbWFpbi9ydW5fbWFpbl9tb2R1bGU6MzM6NDdcIlwiXCIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNhbGxlZTogJ1thbm9ueW1vdXNdJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogJ25vZGU6aW50ZXJuYWwvbWFpbi9ydW5fbWFpbl9tb2R1bGUnLCAgICAgICAgICAgICAgICAgICAgICBmb2xkZXJfcGF0aDogJ25vZGU6aW50ZXJuYWwvbWFpbi8nLCAgICAgICAgICAgICAgICAgICAgIGZpbGVfbmFtZTogJ3J1bl9tYWluX21vZHVsZScsICAgICAgICAgIGxpbmVfbnI6IDMzLCAgIGNvbHVtbl9ucjogNDcsIHR5cGU6ICdpbnRlcm5hbCcsICAgfSwgXVxuICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqlicmJyXzE2MyA9IC0+IHR5cGVfb2YgZm9ybWF0X3N0YWNrLnBhcnNlX2xpbmUgKSwgJ2Z1bmN0aW9uJ1xuICAgIGZvciBbIHByb2JlLCBtYXRjaGVyLCBdIGluIHByb2Jlc19hbmRfbWF0Y2hlcnNcbiAgICAgIEBlcSAoIM6pYnJicl8xNjQgPSAtPiBmb3JtYXRfc3RhY2sucGFyc2VfbGluZSBwcm9iZSApLCBtYXRjaGVyXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAdGhyb3dzICggzqlicmJyXzE2NSA9IC0+IGZvcm1hdF9zdGFjay5wYXJzZV9saW5lIDY3MyAgICAgICAgICAgICAgKSwgL2V4cGVjdGVkIGEgdGV4dCwgZ290IGEgZmxvYXQvXG4gICAgQHRocm93cyAoIM6pYnJicl8xNjYgPSAtPiBmb3JtYXRfc3RhY2sucGFyc2VfbGluZSBmYWxzZSAgICAgICAgICAgICksIC9leHBlY3RlZCBhIHRleHQsIGdvdCBhIGJvb2xlYW4vXG4gICAgQHRocm93cyAoIM6pYnJicl8xNjcgPSAtPiBmb3JtYXRfc3RhY2sucGFyc2VfbGluZSBTeW1ib2wgJ2FiYycgICAgICksIC9leHBlY3RlZCBhIHRleHQsIGdvdCBhIHN5bWJvbC9cbiAgICBAdGhyb3dzICggzqlicmJyXzE2OCA9IC0+IGZvcm1hdF9zdGFjay5wYXJzZV9saW5lIFwibGluZSAxXFxubGluZSAyXCIgKSwgL2V4cGVjdGVkIGEgc2luZ2xlIGxpbmUsIGdvdCBhIHRleHQgd2l0aCBsaW5lIGJyZWFrcy9cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZXF1aXJlX2Zvcm1hdF9zdGFja19mb3JtYXRfbGluZTogLT5cbiAgICB7IEZvcm1hdF9zdGFjayxcbiAgICAgIGZvcm1hdF9zdGFjaywgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZm9ybWF0X3N0YWNrKClcbiAgICB7IHN0cmlwX2Fuc2ksICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfc3RyaXBfYW5zaSgpXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcHJvYmVzX2FuZF9tYXRjaGVycyA9IFtcbiAgICAgIFsgXCJcIlwiYXQgPGFub255bW91cz4gKC9wYXRoL3RvL2hlbmdpc3QtTkcvZGV2L2JyaWNhYnJhYy9zcmMvdGVzdC1kYnJpYy5jb2ZmZWU6MjkwOjExKVwiXCJcIiwgICAgICAgICAgICAgICfigJTigJQgL3BhdGgvdG8vaGVuZ2lzdC1ORy9kZXYvYnJpY2FicmFjL3NyYy/igJTigJR0ZXN0LWRicmljLmNvZmZlZSDigJTigJQgKDI5MOKAlOKAlDoxMSkg4oCU4oCUICAgICAgICAgICAgIOKAlOKAlCAjIDxhbm9ueW1vdXM+KCkg4oCU4oCUJywgXVxuICAgICAgWyBcIlwiXCJhdCBPYmplY3QuPGFub255bW91cz4gKC9wYXRoL3RvL2hlbmdpc3QtTkcvZGV2L2JyaWNhYnJhYy9zcmMvdGVzdC1kYnJpYy5jb2ZmZWU6MjQ1OjQxKVwiXCJcIiwgICAgICAgJ+KAlOKAlCAvcGF0aC90by9oZW5naXN0LU5HL2Rldi9icmljYWJyYWMvc3JjL+KAlOKAlHRlc3QtZGJyaWMuY29mZmVlIOKAlOKAlCAoMjQ14oCU4oCUOjQxKSDigJTigJQgICAgICAgICAgICAg4oCU4oCUICMgT2JqZWN0Ljxhbm9ueW1vdXM+KCkg4oCU4oCUJywgXVxuICAgICAgWyBcIlwiXCJhdCBPYmplY3QuPGFub255bW91cz4gKC9wYXRoL3RvL2hlbmdpc3QtTkcvZGV2L2JyaWNhYnJhYy9zcmMvdGVzdC1kYnJpYy5jb2ZmZWU6MzoxKVwiXCJcIiwgICAgICAgICAgJ+KAlOKAlCAvcGF0aC90by9oZW5naXN0LU5HL2Rldi9icmljYWJyYWMvc3JjL+KAlOKAlHRlc3QtZGJyaWMuY29mZmVlIOKAlOKAlCAoM+KAlOKAlDoxKSDigJTigJQgICAgICAgICAgICAgICAg4oCU4oCUICMgT2JqZWN0Ljxhbm9ueW1vdXM+KCkg4oCU4oCUJywgXVxuICAgICAgWyBcIlwiXCJhdCBkb19zb21ldGhpbmcgKC4uL3doYXRldmVyL3NyYy90ZXN0LWRicmljLmNvZmZlZTozOjEpXCJcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ+KAlOKAlCAuLi93aGF0ZXZlci9zcmMv4oCU4oCUdGVzdC1kYnJpYy5jb2ZmZWUg4oCU4oCUICgz4oCU4oCUOjEpIOKAlOKAlCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oCU4oCUICMgZG9fc29tZXRoaW5nKCkg4oCU4oCUJywgXVxuICAgICAgWyBcIlwiXCJhdCBkb19zb21ldGhpbmcgKC4vbm9kZV9tb2R1bGVzL3Rlc3QtZGJyaWMuY29mZmVlOjM6MSlcIlwiXCIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ+KAlOKAlCAuL25vZGVfbW9kdWxlcy/igJTigJR0ZXN0LWRicmljLmNvZmZlZSDigJTigJQgKDPigJTigJQ6MSkg4oCU4oCUICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oCU4oCUICMgZG9fc29tZXRoaW5nKCkg4oCU4oCUJywgXVxuICAgICAgWyBcIlwiXCJhdCBNb2R1bGUuX2NvbXBpbGUgKG5vZGU6aW50ZXJuYWwvbW9kdWxlcy9janMvbG9hZGVyOjE3Mzg6MTQpXCJcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ+KAlOKAlCBub2RlOmludGVybmFsL21vZHVsZXMvY2pzL+KAlOKAlGxvYWRlciDigJTigJQgKDE3MzjigJTigJQ6MTQpIOKAlOKAlCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oCU4oCUICMgTW9kdWxlLl9jb21waWxlKCkg4oCU4oCUJywgXVxuICAgICAgWyBcIlwiXCJhdCBPYmplY3QuLmpzIChub2RlOmludGVybmFsL21vZHVsZXMvY2pzL2xvYWRlcjoxODcxOjEwKVwiXCJcIiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ+KAlOKAlCBub2RlOmludGVybmFsL21vZHVsZXMvY2pzL+KAlOKAlGxvYWRlciDigJTigJQgKDE4NzHigJTigJQ6MTApIOKAlOKAlCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oCU4oCUICMgT2JqZWN0Li5qcygpIOKAlOKAlCcsIF1cbiAgICAgIFsgXCJcIlwiYXQgTW9kdWxlLmxvYWQgKG5vZGU6aW50ZXJuYWwvbW9kdWxlcy9janMvbG9hZGVyOjE0NzA6MzIpXCJcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICfigJTigJQgbm9kZTppbnRlcm5hbC9tb2R1bGVzL2Nqcy/igJTigJRsb2FkZXIg4oCU4oCUICgxNDcw4oCU4oCUOjMyKSDigJTigJQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKAlOKAlCAjIE1vZHVsZS5sb2FkKCkg4oCU4oCUJywgXVxuICAgICAgWyBcIlwiXCJhdCBNb2R1bGUuX2xvYWQgKG5vZGU6aW50ZXJuYWwvbW9kdWxlcy9janMvbG9hZGVyOjEyOTA6MTIpXCJcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ+KAlOKAlCBub2RlOmludGVybmFsL21vZHVsZXMvY2pzL+KAlOKAlGxvYWRlciDigJTigJQgKDEyOTDigJTigJQ6MTIpIOKAlOKAlCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oCU4oCUICMgTW9kdWxlLl9sb2FkKCkg4oCU4oCUJywgXVxuICAgICAgWyBcIlwiXCJhdCBUcmFjaW5nQ2hhbm5lbC50cmFjZVN5bmMgKG5vZGU6ZGlhZ25vc3RpY3NfY2hhbm5lbDozMjI6MTQpXCJcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ+KAlOKAlCDigJTigJRub2RlOmRpYWdub3N0aWNzX2NoYW5uZWwg4oCU4oCUICgzMjLigJTigJQ6MTQpIOKAlOKAlCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oCU4oCUICMgVHJhY2luZ0NoYW5uZWwudHJhY2VTeW5jKCkg4oCU4oCUJywgXVxuICAgICAgWyBcIlwiXCJhdCB3cmFwTW9kdWxlTG9hZCAobm9kZTppbnRlcm5hbC9tb2R1bGVzL2Nqcy9sb2FkZXI6MjM4OjI0KVwiXCJcIiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ+KAlOKAlCBub2RlOmludGVybmFsL21vZHVsZXMvY2pzL+KAlOKAlGxvYWRlciDigJTigJQgKDIzOOKAlOKAlDoyNCkg4oCU4oCUICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oCU4oCUICMgd3JhcE1vZHVsZUxvYWQoKSDigJTigJQnLCBdXG4gICAgICBbIFwiXCJcImF0IE1vZHVsZS5leGVjdXRlVXNlckVudHJ5UG9pbnQgW2FzIHJ1bk1haW5dIChub2RlOmludGVybmFsL21vZHVsZXMvcnVuX21haW46MTU0OjUpXCJcIlwiLCAgICAgICAgICAn4oCU4oCUIG5vZGU6aW50ZXJuYWwvbW9kdWxlcy/igJTigJRydW5fbWFpbiDigJTigJQgKDE1NOKAlOKAlDo1KSDigJTigJQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDigJTigJQgIyBNb2R1bGUuZXhlY3V0ZVVzZXJFbnRyeVBvaW50IFthcyBydW5NYWluXSgpIOKAlOKAlCcsIF1cbiAgICAgIFsgXCJcIlwiYXQgbm9kZTppbnRlcm5hbC9tYWluL3J1bl9tYWluX21vZHVsZTozMzo0N1wiXCJcIiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICfigJTigJQgbm9kZTppbnRlcm5hbC9tYWluL+KAlOKAlHJ1bl9tYWluX21vZHVsZSDigJTigJQgKDMz4oCU4oCUOjQ3KSDigJTigJQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKAlOKAlCAjIFthbm9ueW1vdXNdKCkg4oCU4oCUJywgXVxuICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqlicmJyXzE2OSA9IC0+IHR5cGVfb2YgZm9ybWF0X3N0YWNrLmNmZyAgICAgICAgICksICdwb2QnXG4gICAgQGVxICggzqlicmJyXzE3MCA9IC0+IHR5cGVfb2YgZm9ybWF0X3N0YWNrLmZvcm1hdF9saW5lICksICdmdW5jdGlvbidcbiAgICBmb3IgWyBwcm9iZSwgbWF0Y2hlciwgXSBpbiBwcm9iZXNfYW5kX21hdGNoZXJzXG4gICAgICAjIEBlcSAoIM6pYnJicl8xNzEgPSAtPiBzdHJpcF9hbnNpICggZm9ybWF0X3N0YWNrLmZvcm1hdF9saW5lIHByb2JlICksICfigJTigJQnICksIG1hdGNoZXJcbiAgICAgIGVjaG8gZm9ybWF0X3N0YWNrLmZvcm1hdF9saW5lIHByb2JlXG4gICAgICAjIGRlYnVnICfOqWJyYnJfMTc0JywgZG8gzqlicmJyXzE3NSA9IC0+IHJwciBzdHJpcF9hbnNpICggZm9ybWF0X3N0YWNrLmZvcm1hdF9saW5lIHByb2JlICksICfigJTigJQnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAdGhyb3dzICggzqlicmJyXzE3NiA9IC0+IGZvcm1hdF9zdGFjay5mb3JtYXRfbGluZSA2NzMgICAgICAgICAgICAgICksIC9leHBlY3RlZCBhIHRleHQsIGdvdCBhIGZsb2F0L1xuICAgIEB0aHJvd3MgKCDOqWJyYnJfMTc3ID0gLT4gZm9ybWF0X3N0YWNrLmZvcm1hdF9saW5lIGZhbHNlICAgICAgICAgICAgKSwgL2V4cGVjdGVkIGEgdGV4dCwgZ290IGEgYm9vbGVhbi9cbiAgICBAdGhyb3dzICggzqlicmJyXzE3OCA9IC0+IGZvcm1hdF9zdGFjay5mb3JtYXRfbGluZSBTeW1ib2wgJ2FiYycgICAgICksIC9leHBlY3RlZCBhIHRleHQsIGdvdCBhIHN5bWJvbC9cbiAgICBAdGhyb3dzICggzqlicmJyXzE3OSA9IC0+IGZvcm1hdF9zdGFjay5mb3JtYXRfbGluZSBcImxpbmUgMVxcbmxpbmUgMlwiICksIC9leHBlY3RlZCBhIHNpbmdsZSBsaW5lLCBnb3QgYSB0ZXh0IHdpdGggbGluZSBicmVha3MvXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdGVzdHMsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyByZXF1aXJlX2Zvcm1hdF9zdGFja19wYXJzZV9saW5lOiB0ZXN0cy5yZXF1aXJlX2Zvcm1hdF9zdGFja19wYXJzZV9saW5lLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgcmVxdWlyZV9mb3JtYXRfc3RhY2tfZm9ybWF0X2xpbmU6IHRlc3RzLnJlcXVpcmVfZm9ybWF0X3N0YWNrX2Zvcm1hdF9saW5lLCB9XG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgZGVtb19jbGVhbiA9IC0+XG4gICAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBnZXRfcmFuZG9tX2ludGVnZXJfcHJvZHVjZXI6IHRlc3RzLmdldF9yYW5kb21faW50ZWdlcl9wcm9kdWNlciwgfVxuICAgIGEgPSB7fVxuICAgIGIgPSB7IG86IDYsIH1cbiAgICBjID0geyBvOiB1bmRlZmluZWQsIH1cbiAgICBjbGVhbiA9ICggeCApIC0+IE9iamVjdC5mcm9tRW50cmllcyAoIFsgaywgdiwgXSBmb3IgaywgdiBvZiB4IHdoZW4gdj8gKVxuICAgIGRlYnVnICfOqWJyYnJfMTgwJywgZCA9IHsgYS4uLiwgKCBjbGVhbiBiICkuLi4sICggY2xlYW4gYyApLi4uLCB9XG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgcmV0dXJuIG51bGxcbiJdfQ==
//# sourceURL=../src/test-basics.coffee