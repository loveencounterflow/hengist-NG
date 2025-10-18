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

  GTNG = require('guy-test');

  ({Test} = GTNG);

  SFMODULES = require('../../../apps/bricabrac-sfmodules');

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
      ({Format_stack} = SFMODULES.unstable.require_format_stack());
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
          `at do_something (node_modules/test-dbric.coffee:3:1)`,
          {
            callee: 'do_something',
            path: 'node_modules/test-dbric.coffee',
            folder_path: 'node_modules/',
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
      format_stack = new Format_stack({
        relative: false
      });
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
    require_format_stack_parse_line_relative: function() {
      var cwd, format_stack, i, len, matcher, probe, probes_and_matchers, type_of, Ωbrbr_169, Ωbrbr_170, Ωbrbr_171, Ωbrbr_172, Ωbrbr_173, Ωbrbr_174;
      ({format_stack} = SFMODULES.unstable.require_format_stack());
      ({type_of} = SFMODULES.unstable.require_type_of());
      //.......................................................................................................
      probes_and_matchers = [
        [
          `at <anonymous> (${process.cwd()}/dev/bricabrac/src/test-dbric.coffee:290:11)`,
          {
            callee: '<anonymous>',
            path: 'dev/bricabrac/src/test-dbric.coffee',
            folder_path: 'dev/bricabrac/src/',
            file_name: 'test-dbric.coffee',
            line_nr: 290,
            column_nr: 11,
            type: 'main'
          }
        ],
        [
          `at Object.<anonymous> (${process.cwd()}/dev/bricabrac/src/test-dbric.coffee:245:41)`,
          {
            callee: 'Object.<anonymous>',
            path: 'dev/bricabrac/src/test-dbric.coffee',
            folder_path: 'dev/bricabrac/src/',
            file_name: 'test-dbric.coffee',
            line_nr: 245,
            column_nr: 41,
            type: 'main'
          }
        ],
        [
          `at Object.<anonymous> (${process.cwd()}/dev/bricabrac/src/test-dbric.coffee:3:1)`,
          {
            callee: 'Object.<anonymous>',
            path: 'dev/bricabrac/src/test-dbric.coffee',
            folder_path: 'dev/bricabrac/src/',
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
          `at do_something (node_modules/test-dbric.coffee:3:1)`,
          {
            callee: 'do_something',
            path: 'node_modules/test-dbric.coffee',
            folder_path: 'node_modules/',
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
      try {
        //.......................................................................................................
        cwd = process.cwd();
        this.eq((Ωbrbr_169 = function() {
          return type_of(format_stack.parse_line);
        }), 'function');
        for (i = 0, len = probes_and_matchers.length; i < len; i++) {
          [probe, matcher] = probes_and_matchers[i];
          this.eq((Ωbrbr_170 = function() {
            return format_stack.parse_line(probe);
          }), matcher);
        }
      } finally {
        process.chdir(cwd);
      }
      //.......................................................................................................
      this.throws((Ωbrbr_171 = function() {
        return format_stack.parse_line(673);
      }), /expected a text, got a float/);
      this.throws((Ωbrbr_172 = function() {
        return format_stack.parse_line(false);
      }), /expected a text, got a boolean/);
      this.throws((Ωbrbr_173 = function() {
        return format_stack.parse_line(Symbol('abc'));
      }), /expected a text, got a symbol/);
      this.throws((Ωbrbr_174 = function() {
        return format_stack.parse_line("line 1\nline 2");
      }), /expected a single line, got a text with line breaks/);
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    require_format_stack_format_line: function() {
      var Format_stack, probes_and_matchers, strip_ansi, type_of;
      ({Format_stack} = SFMODULES.unstable.require_format_stack());
      ({strip_ansi} = SFMODULES.require_strip_ansi());
      ({type_of} = SFMODULES.unstable.require_type_of());
      //.......................................................................................................
      probes_and_matchers = [[`at <anonymous> (/path/to/hengist-NG/dev/bricabrac/src/test-dbric.coffee:290:11)`, '—— /path/to/hengist-NG/dev/bricabrac/src/——test-dbric.coffee —— (290——:11) ——             —— # <anonymous>() ——                                 ——'], [`at Object.<anonymous> (/path/to/hengist-NG/dev/bricabrac/src/test-dbric.coffee:245:41)`, '—— /path/to/hengist-NG/dev/bricabrac/src/——test-dbric.coffee —— (245——:41) ——             —— # Object.<anonymous>() ——                          ——'], [`at Object.<anonymous> (/path/to/hengist-NG/dev/bricabrac/src/test-dbric.coffee:3:1)`, '—— /path/to/hengist-NG/dev/bricabrac/src/——test-dbric.coffee —— (3——:1) ——                —— # Object.<anonymous>() ——                          ——'], [`at do_something (../whatever/src/test-dbric.coffee:3:1)`, '—— ../whatever/src/——test-dbric.coffee —— (3——:1) ——                                      —— # do_something() ——                                ——'], [`at do_something (../node_modules/whatever/src/test-dbric.coffee:3:1)`, '—— ../node_modules/whatever/src/——test-dbric.coffee —— (3——:1) ——                         —— # do_something() ——                                ——'], [`at do_something (node_modules/test-dbric.coffee:3:1)`, '—— node_modules/——test-dbric.coffee —— (3——:1) ——                                         —— # do_something() ——                                ——'], [`at Module._compile (node:internal/modules/cjs/loader:1738:14)`, '—— node:internal/modules/cjs/——loader —— (1738——:14) ——                                   —— # Module._compile() ——                             ——'], [`at Object..js (node:internal/modules/cjs/loader:1871:10)`, '—— node:internal/modules/cjs/——loader —— (1871——:10) ——                                   —— # Object..js() ——                                  ——'], [`at Module.load (node:internal/modules/cjs/loader:1470:32)`, '—— node:internal/modules/cjs/——loader —— (1470——:32) ——                                   —— # Module.load() ——                                 ——'], [`at Module._load (node:internal/modules/cjs/loader:1290:12)`, '—— node:internal/modules/cjs/——loader —— (1290——:12) ——                                   —— # Module._load() ——                                ——'], [`at TracingChannel.traceSync (node:diagnostics_channel:322:14)`, '—— ——node:diagnostics_channel —— (322——:14) ——                                            —— # TracingChannel.traceSync() ——                    ——'], [`at wrapModuleLoad (node:internal/modules/cjs/loader:238:24)`, '—— node:internal/modules/cjs/——loader —— (238——:24) ——                                    —— # wrapModuleLoad() ——                              ——'], [`at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)`, '—— node:internal/modules/——run_main —— (154——:5) ——                                       —— # Module.executeUserEntryPoint [as runMain]() ——   ——'], [`at node:internal/main/run_main_module:33:47`, '—— node:internal/main/——run_main_module —— (33——:47) ——                                   —— # [anonymous]() ——                                 ——'], [`some other format`, '—— some other format—— —— (——:) ——                                                        —— # () ——                                            ——']];
      (() => {        //.......................................................................................................
        var format_stack, i, len, matcher, probe, Ωbrbr_175, Ωbrbr_176, Ωbrbr_177;
        format_stack = new Format_stack({
          relative: false,
          padding: {
            path: 80,
            callee: 50
          },
          context: false
        });
        this.eq((Ωbrbr_175 = function() {
          return type_of(format_stack.cfg);
        }), 'pod');
        this.eq((Ωbrbr_176 = function() {
          return type_of(format_stack.format_line);
        }), 'function');
        for (i = 0, len = probes_and_matchers.length; i < len; i++) {
          [probe, matcher] = probes_and_matchers[i];
          this.eq((Ωbrbr_177 = function() {
            return strip_ansi(format_stack.format_line(probe), '——');
          }), matcher);
        }
        // echo format_stack.format_line probe
        // debug 'Ωbrbr_178', do Ωbrbr_179 = -> rpr strip_ansi ( format_stack.format_line probe ), '——'
        return null;
      })();
      (() => {        //.......................................................................................................
        var error, format_stack, i, len, line, ref;
        format_stack = new Format_stack({
          relative: true
        });
        try {
          not_a_variable;
        } catch (error1) {
          error = error1;
          echo();
          ref = error.stack.split('\n');
          for (i = 0, len = ref.length; i < len; i++) {
            line = ref[i];
            echo(format_stack.format_line(line));
          }
        }
        return null;
      })();
      (() => {        //.......................................................................................................
        var format_stack, Ωbrbr_180, Ωbrbr_181, Ωbrbr_182, Ωbrbr_183;
        format_stack = new Format_stack({
          relative: true
        });
        this.throws((Ωbrbr_180 = function() {
          return format_stack.format_line(673);
        }), /expected a text, got a float/);
        this.throws((Ωbrbr_181 = function() {
          return format_stack.format_line(false);
        }), /expected a text, got a boolean/);
        this.throws((Ωbrbr_182 = function() {
          return format_stack.format_line(Symbol('abc'));
        }), /expected a text, got a symbol/);
        this.throws((Ωbrbr_183 = function() {
          return format_stack.format_line("line 1\nline 2");
        }), /expected a single line, got a text with line breaks/);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    require_format_stack_format_stack: function() {
      var PATH, format_stack, separate, strip_ansi, type_of;
      ({format_stack} = SFMODULES.unstable.require_format_stack());
      ({strip_ansi} = SFMODULES.require_strip_ansi());
      ({type_of} = SFMODULES.unstable.require_type_of());
      PATH = require('node:path');
      separate = function() {
        return echo('\n\n\n———————————————————————————————————————————————————————————————————————————\n\n\n');
      };
      (() => {        //.......................................................................................................
        var Custom_error, cwd, error, fn_1, fn_2, fn_3, fn_4, fn_5, reference;
        try {
          cwd = process.cwd();
          reference = PATH.resolve(__dirname, '../../../');
          process.chdir(reference);
          Custom_error = class Custom_error extends Error {};
          fn_1 = function() {
            throw new Custom_error("oops");
          };
          fn_2 = function() {
            return fn_1();
          };
          fn_3 = function() {
            return fn_2();
          };
          fn_4 = function() {
            return fn_3();
          };
          fn_5 = function() {
            return fn_4();
          };
          fn_5();
        } catch (error1) {
          error = error1;
          separate();
          echo(format_stack(error));
        } finally {
          process.chdir(cwd);
        }
        return null;
      })();
      (() => {        //.......................................................................................................
        var E_1, E_2, E_3, cwd, error, fn_1, fn_2, fn_3, reference;
        try {
          cwd = process.cwd();
          reference = PATH.resolve(__dirname, '../../../');
          process.chdir(reference);
          // type    = error?.code ? error?.constructor?.name ? error?.name ? 'EXCEPTION'
          E_1 = class E_1 extends Error {};
          E_2 = class E_2 extends Error {};
          E_3 = class E_3 extends Error {};
          fn_1 = function() {
            throw new E_1("Ωbrbr_184");
          };
          fn_2 = function() {
            var cause;
            try {
              return fn_1();
            } catch (error1) {
              cause = error1;
              throw new E_2("Ωbrbr_185", {cause});
            }
          };
          fn_3 = function() {
            var cause;
            try {
              return fn_2();
            } catch (error1) {
              cause = error1;
              throw new E_3("Ωbrbr_186", {cause});
            }
          };
          debug('Ωbrbr_187');
          fn_3();
        } catch (error1) {
          error = error1;
          separate();
          debug('Ωbrbr_188');
          echo(format_stack(error));
        } finally {
          process.chdir(cwd);
        }
        // throw error
        return null;
      })();
      // #.......................................................................................................
      // do =>
      //   format_stack = new Format_stack { relative: true, }
      //   try not_a_variable catch error
      //     echo()
      //     for line in error.stack.split '\n'
      //       echo format_stack.format_line line
      //   return null
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    require_anybase: function() {
      var Get_random, decode, decode_bigint, encode, encode_bigint, is_positive_integer_power_of, repeat_count, type_of;
      ({is_positive_integer_power_of, encode, decode, encode_bigint, decode_bigint} = SFMODULES.unstable.require_anybase());
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Get_random} = SFMODULES.unstable.require_get_random());
      repeat_count = 1000;
      (() => {        //.......................................................................................................
        var Ωbrbr_189, Ωbrbr_190, Ωbrbr_191, Ωbrbr_192;
        this.eq((Ωbrbr_189 = function() {
          return type_of(encode);
        }), 'function');
        this.eq((Ωbrbr_190 = function() {
          return type_of(decode);
        }), 'function');
        this.eq((Ωbrbr_191 = function() {
          return type_of(encode_bigint);
        }), 'function');
        this.eq((Ωbrbr_192 = function() {
          return type_of(decode_bigint);
        }), 'function');
        return null;
      })();
      (() => {        //.......................................................................................................
        var get_random, matcher, on_stats, probe, producer, Ωbrbr_193, Ωbrbr_194;
        on_stats = null;
        get_random = new Get_random({
          seed: 798723,
          on_stats
        });
        //.....................................................................................................
        producer = function() {
          return get_random.integer({
            min: 0,
            max: Number.MAX_SAFE_INTEGER,
            on_stats
          });
        };
//.....................................................................................................
        for (probe of get_random.walk({
          producer,
          n: repeat_count,
          on_stats
        })) {
          matcher = `${probe}`;
          this.eq((Ωbrbr_193 = function() {
            return encode(probe, '0123456789');
          }), matcher);
          this.eq((Ωbrbr_194 = function() {
            return encode_bigint(probe, '0123456789');
          }), matcher);
        }
        return null;
      })();
      (() => {        //.......................................................................................................
        var alphabet, base, big_alphabet, get_random, matcher, n, on_stats, producer, x, Ωbrbr_195, Ωbrbr_196, Ωbrbr_197, Ωbrbr_198;
        on_stats = null;
        get_random = new Get_random({
          seed: 798723,
          on_stats
        });
        big_alphabet = '0123456789abcdefghijklmnopqrstuvwxyz';
        //.....................................................................................................
        producer = function() {
          var alphabet, base, matcher, n;
          n = get_random.integer({
            min: 0,
            max: Number.MAX_SAFE_INTEGER
          });
          base = get_random.integer({
            min: 2,
            max: 36
          });
          alphabet = big_alphabet.slice(0, base);
          matcher = n.toString(base);
          return {n, base, alphabet, matcher};
        };
//.....................................................................................................
        for (x of get_random.walk({
          producer,
          n: repeat_count,
          on_stats
        })) {
          ({n, base, alphabet, matcher} = x);
          this.eq((Ωbrbr_195 = function() {
            return encode(n, alphabet);
          }), matcher);
          this.eq((Ωbrbr_196 = function() {
            return decode(matcher, alphabet);
          }), n);
          this.eq((Ωbrbr_197 = function() {
            return encode_bigint(n, alphabet);
          }), matcher);
          this.eq((Ωbrbr_198 = function() {
            return decode_bigint(matcher, alphabet);
          }), BigInt(n));
        }
        return null;
      })();
      (() => {        //.......................................................................................................
        var Ωbrbr_199, Ωbrbr_200, Ωbrbr_201, Ωbrbr_202, Ωbrbr_203;
        this.eq((Ωbrbr_199 = function() {
          return encode_bigint(100, '0123456789');
        }), '100');
        this.eq((Ωbrbr_200 = function() {
          return encode(100, '0123456789');
        }), '100');
        this.eq((Ωbrbr_201 = function() {
          return encode(7, '.█');
        }), '███');
        this.eq((Ωbrbr_202 = function() {
          return encode(8, '.█');
        }), '█...');
        this.eq((Ωbrbr_203 = function() {
          return encode(100, '.█');
        }), '██..█..');
        return null;
      })();
      (() => {        //.......................................................................................................
        var a10, a16, n;
        a10 = '0123456789';
        a16 = '0123456789abcdef';
        n = 1234567890;
        info('Ωbrbr_204', f`${rpr(encode(n, a10))}:>30c; ${rpr(n.toString(10))}:>30c; ${rpr(encode(n, a16))}:>30c; ${rpr(n.toString(16))}:>30c;`);
        n = 123456789012345;
        info('Ωbrbr_205', f`${rpr(encode(n, a10))}:>30c; ${rpr(n.toString(10))}:>30c; ${rpr(encode(n, a16))}:>30c; ${rpr(n.toString(16))}:>30c;`);
        n = 12345678901234567890;
        info('Ωbrbr_206', f`${rpr(encode(n, a10))}:>30c; ${rpr(n.toString(10))}:>30c; ${rpr(encode(n, a16))}:>30c; ${rpr(n.toString(16))}:>30c;`);
        n = 1234567890123456789012345;
        info('Ωbrbr_207', f`${rpr(encode(n, a10))}:>30c; ${rpr(n.toString(10))}:>30c; ${rpr(encode(n, a16))}:>30c; ${rpr(n.toString(16))}:>30c;`);
        return null;
      })();
      (() => {        //.......................................................................................................
        var Ωbrbr_208, Ωbrbr_209, Ωbrbr_210, Ωbrbr_211, Ωbrbr_212, Ωbrbr_213, Ωbrbr_214, Ωbrbr_215, Ωbrbr_216, Ωbrbr_217, Ωbrbr_218, Ωbrbr_219;
        this.eq((Ωbrbr_208 = function() {
          return is_positive_integer_power_of(10, 10);
        }), true);
        this.eq((Ωbrbr_209 = function() {
          return is_positive_integer_power_of(100, 10);
        }), true);
        this.eq((Ωbrbr_210 = function() {
          return is_positive_integer_power_of(1000000000000000, 10);
        }), true);
        this.eq((Ωbrbr_211 = function() {
          return is_positive_integer_power_of(1000000000000001, 10);
        }), false);
        this.eq((Ωbrbr_212 = function() {
          return is_positive_integer_power_of(16 ** 3, 16);
        }), true);
        this.eq((Ωbrbr_213 = function() {
          return is_positive_integer_power_of(4503599627370496, 2);
        }), true);
        this.eq((Ωbrbr_214 = function() {
          return is_positive_integer_power_of(Number.MAX_SAFE_INTEGER, 2);
        }), false);
        this.throws((Ωbrbr_215 = function() {
          return is_positive_integer_power_of(10000000000000000000000000000001, 10);
        }), /expected a \(safe\) integer, got 1e\+31/);
        this.throws((Ωbrbr_216 = function() {
          return is_positive_integer_power_of(10, -10);
        }), /expected an integer greater than 1, got -10/);
        this.throws((Ωbrbr_217 = function() {
          return is_positive_integer_power_of(-10, 10);
        }), /expected a positive integer, got -10/);
        this.throws((Ωbrbr_218 = function() {
          return is_positive_integer_power_of(10, 1);
        }), /expected an integer greater than 1, got 1/);
        this.throws((Ωbrbr_219 = function() {
          return is_positive_integer_power_of(-1, 10);
        }), /expected a positive integer, got -1/);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    require_clean_assign: function() {
      var clean, clean_all, clean_assign, freeze, type_of;
      ({clean, clean_all, clean_assign} = SFMODULES.unstable.require_clean_assign());
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({freeze} = Object);
      (() => {        //.......................................................................................................
        var d1, Ωbrbr_220;
        d1 = freeze({
          a: 1,
          b: 9,
          z: 'Z'
        });
        this.throws((Ωbrbr_220 = function() {
          return clean(d1);
        }), /unable to clean frozen object/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var d1, Ωbrbr_221, Ωbrbr_222;
        d1 = {
          a: 1,
          b: 9,
          z: 'Z'
        };
        this.eq((Ωbrbr_221 = function() {
          return (clean(d1)) === d1;
        }), true);
        this.eq((Ωbrbr_222 = function() {
          return clean(d1);
        }), {
          a: 1,
          b: 9,
          z: 'Z'
        });
        return null;
      })();
      (() => {        //.......................................................................................................
        var d2, Ωbrbr_223;
        d2 = {
          foo: true,
          gnu: void 0,
          lol: null,
          bar: false
        };
        this.eq((Ωbrbr_223 = function() {
          return clean(d2);
        }), {
          foo: true,
          lol: null,
          bar: false
        });
        return null;
      })();
      (() => {        //.......................................................................................................
        var d2, Ωbrbr_224;
        d2 = {
          foo: true,
          gnu: void 0,
          lol: null,
          bar: false
        };
        this.eq((Ωbrbr_224 = function() {
          return Object.keys(clean(d2));
        }), ['foo', 'lol', 'bar']);
        return null;
      })();
      (() => {        //.......................................................................................................
        var d1, d2, Ωbrbr_225;
        d1 = {
          a: 1,
          b: 9,
          z: 'Z'
        };
        d2 = {
          foo: true,
          gnu: void 0,
          lol: null,
          bar: false
        };
        this.eq((Ωbrbr_225 = function() {
          return clean_all(d1, d2);
        }), [
          {
            a: 1,
            b: 9,
            z: 'Z'
          },
          {
            foo: true,
            lol: null,
            bar: false
          }
        ]);
        return null;
      })();
      (() => {        //.......................................................................................................
        var d1, d2, target, Ωbrbr_226, Ωbrbr_227;
        d1 = freeze({
          a: 1,
          b: 9,
          z: 'Z'
        });
        d2 = freeze({
          foo: true,
          gnu: void 0,
          lol: null,
          bar: false
        });
        target = {};
        this.eq((Ωbrbr_226 = function() {
          return clean_assign(target, d1, d2);
        }), {
          a: 1,
          b: 9,
          z: 'Z',
          foo: true,
          lol: null,
          bar: false
        });
        this.eq((Ωbrbr_227 = function() {
          return (clean_assign(target, d1, d2)) === target;
        }), true);
        return null;
      })();
      (() => {        //.......................................................................................................
        var d1, d2, e1, target, Ωbrbr_228, Ωbrbr_229;
        d1 = {
          a: 1,
          b: 9,
          z: 'Z'
        };
        d2 = {
          foo: true,
          gnu: void 0,
          lol: null,
          bar: false
        };
        e1 = freeze([d1, d2]);
        target = {};
        this.eq((Ωbrbr_228 = function() {
          return clean_assign(...e1);
        }), {
          a: 1,
          b: 9,
          z: 'Z',
          foo: true,
          lol: null,
          bar: false
        });
        return this.eq((Ωbrbr_229 = function() {
          return (clean_assign(target, ...e1)) === target;
        }), true);
      })();
      (() => {        //.......................................................................................................
        var d1, d2, Ωbrbr_230;
        d1 = freeze({
          a: 1,
          b: 9,
          z: 'Z'
        });
        d2 = freeze({
          foo: true,
          gnu: void 0,
          lol: null,
          bar: false
        });
        this.eq((Ωbrbr_230 = function() {
          return Object.keys(clean_assign({}, d1, d2));
        }), ['a', 'b', 'z', 'foo', 'lol', 'bar']);
        return null;
      })();
      (() => {        //.......................................................................................................
        var d2, d3, d4, Ωbrbr_231;
        d2 = {
          foo: true,
          gnu: void 0,
          lol: null,
          bar: false
        };
        d3 = freeze({
          foo: 333,
          gnu: void 0,
          lol: null,
          bar: void 0
        });
        d4 = freeze({
          foo: void 0,
          gnu: void 0,
          lol: null,
          bar: 444
        });
        this.eq((Ωbrbr_231 = function() {
          return clean_assign(d2, d3, d4);
        }), {
          foo: 333,
          lol: null,
          bar: 444
        });
        return null;
      })();
      (() => {        //.......................................................................................................
        var d2, d3, d4, target, Ωbrbr_232;
        d2 = freeze({
          foo: true,
          gnu: void 0,
          lol: null,
          bar: false
        });
        d3 = freeze({
          foo: 333,
          gnu: void 0,
          lol: null,
          bar: void 0
        });
        d4 = freeze({
          foo: void 0,
          gnu: void 0,
          lol: null,
          bar: 444
        });
        target = {};
        this.eq((Ωbrbr_232 = function() {
          return Object.keys(clean_assign(target, d2, d3, d4));
        }), ['foo', 'lol', 'bar']);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    require_remap: function() {
      var equals, freeze, omit, remap;
      ({remap, omit} = SFMODULES.unstable.require_remap());
      ({freeze} = Object);
      ({
        isDeepStrictEqual: equals
      } = require('node:util'));
      (() => {        //.......................................................................................................
        var d1, mapping, result, Ωbrbr_233, Ωbrbr_234, Ωbrbr_235;
        d1 = {
          a1: 'A1',
          b1: 'b1',
          c1: 'C1'
        };
        mapping = freeze({
          a1: 'A2',
          c1: 'C2'
        });
        result = remap(d1, mapping);
        this.eq((Ωbrbr_233 = function() {
          return result;
        }), {
          A2: 'A1',
          b1: 'b1',
          C2: 'C1'
        });
        this.eq((Ωbrbr_234 = function() {
          return result;
        }), d1);
        this.eq((Ωbrbr_235 = function() {
          return Object.keys(result);
        }), ['A2', 'b1', 'C2']);
        return null;
      })();
      (() => {        //.......................................................................................................
        var d1, mapping, result, Ωbrbr_237, Ωbrbr_238, Ωbrbr_239;
        d1 = {
          address: 'Perth',
          name: 'Bob',
          job: 'employee',
          dob: 41
        };
        mapping = freeze({
          address: 'city',
          job: omit,
          dob: 'age'
        });
        result = remap(d1, mapping);
        debug('Ωbrbr_236', result);
        this.eq((Ωbrbr_237 = function() {
          return equals(result, {
            city: 'Perth',
            name: 'Bob',
            age: 41
          });
        }), true);
        this.eq((Ωbrbr_238 = function() {
          return result;
        }), d1);
        this.eq((Ωbrbr_239 = function() {
          return Object.keys(result);
        }), ['city', 'name', 'age']);
        return null;
      })();
      (() => {        //.......................................................................................................
        var d1, mapping, result, Ωbrbr_241, Ωbrbr_242, Ωbrbr_243;
        d1 = {
          address: 'Perth',
          name: 'Bob',
          job: 'employee',
          age: 25
        };
        mapping = freeze({
          address: 'city',
          job: omit,
          age: function(v) {
            return {
              dob: 2025 - v
            };
          }
        });
        result = remap(d1, mapping);
        debug('Ωbrbr_240', result);
        this.eq((Ωbrbr_241 = function() {
          return result;
        }), {
          city: 'Perth',
          name: 'Bob',
          dob: 2000
        });
        this.eq((Ωbrbr_242 = function() {
          return result;
        }), d1);
        this.eq((Ωbrbr_243 = function() {
          return Object.keys(result);
        }), ['city', 'name', 'dob']);
        return null;
      })();
      (() => {        //.......................................................................................................
        var d1, mapping, result, weight, Ωbrbr_245, Ωbrbr_246, Ωbrbr_247;
        d1 = {
          address: 'Perth',
          name: 'Bob',
          job: 'employee',
          weight: '98kg'
        };
        weight = function(v) {
          return {
            weight_u: v.replace(/^[0-9.]+/g, ''),
            weight_q: Number(v.replace(/[^0-9.]+$/g, ''))
          };
        };
        mapping = freeze({
          address: 'city',
          job: omit,
          weight
        });
        result = remap(d1, mapping);
        debug('Ωbrbr_244', result);
        this.eq((Ωbrbr_245 = function() {
          return result;
        }), {
          city: 'Perth',
          name: 'Bob',
          weight_u: 'kg',
          weight_q: 98
        });
        this.eq((Ωbrbr_246 = function() {
          return result;
        }), d1);
        this.eq((Ωbrbr_247 = function() {
          return Object.keys(result);
        }), ['city', 'name', 'weight_u', 'weight_q']);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    get_random_vdx: function() {
      var Get_random, internals;
      ({Get_random, internals} = SFMODULES.unstable.require_get_random());
      (() => {        //.......................................................................................................
        var get_random, get_rnd_idx, get_rnd_length, get_rnd_vdx, i, n, on_stats, results1;
        on_stats = (stats) => {
          var Ωbrbr_249;
          // info 'Ωbrbr_248', idx, stats # if stats.name is 'walk'
          if (stats.name === 'walk') {
            this.eq((Ωbrbr_249 = function() {
              return stats.rounds;
            }), matcher.rounds);
          }
          return null;
        };
        // get_random      = new Get_random { seed: 838472384, on_stats, }
        get_random = new Get_random({
          seed: null,
          on_stats
        });
        get_rnd_length = get_random.integer_producer({
          min: 1,
          max: 5
        });
        get_rnd_idx = get_random.integer_producer({
          min: -999,
          max: +999
        });
        get_rnd_vdx = function() {
          var _, i, ref, results1;
          results1 = [];
          for (_ = i = 0, ref = get_rnd_length(); (0 <= ref ? i <= ref : i >= ref); _ = 0 <= ref ? ++i : --i) {
            results1.push(get_rnd_idx());
          }
          return results1;
        };
        results1 = [];
        for (n = i = 0; i <= 50; n = ++i) {
          results1.push(debug('Ωbrbr_250', get_rnd_vdx()));
        }
        return results1;
      })();
      // #.....................................................................................................
      // result    =
      //   values:   []
      // matcher   =
      //   values:   [ 'ĂčÀ', 'tĢŅ', 'ľæű', 'Hpŗ', 'Śz^', 'ĖħŻ', 'żÉŉ', 'íĬČ', 'ĩuķ', 'ìīx', 'Ūm|' ]
      //   rounds:   0
      // #.....................................................................................................
      // producer  = -> get_random.text { min: 'A', max: 0x017f, length: 3, on_stats, }
      // for value from get_random.walk { producer, n: 11, on_stats, }
      //   idx++
      //   # debug 'Ωbrbr_251', idx, rpr value
      //   result.values.push value
      //   @eq ( Ωbrbr_252 = -> value ), matcher.values[ idx ]
      // @eq ( Ωbrbr_253 = -> idx                    ), 10
      // @eq ( Ωbrbr_254 = -> result.values.length   ), 11
      // return null
      // #.......................................................................................................
      // do =>
      //   get_random      = new Get_random { seed: settings.my_seed_1, on_stats, }
      //   result_rounds  = null
      //   on_stats        = ( stats ) =>
      //     info 'Ωbrbr_255', stats if stats.name is 'walk'
      //     result_rounds = stats.rounds if stats.name is 'walk'
      //     @eq ( Ωbrbr_256 = -> result_rounds >= 0 ), true
      //   #.....................................................................................................
      //   producer  = -> get_random.text { min: '0', max: '9', length: 1, }
      //   count     = 0
      //   seen      = new Set()
      //   for x from get_random.walk { producer, seen, n: 5, }
      //     count++
      //     debug 'Ωbrbr_257', count, rpr x
      //   return null
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    get_random_shuffle: function() {
      var Get_random, factor, get_list, get_random, internals, seed, Ωbrbr_258, Ωbrbr_259, Ωbrbr_260, Ωbrbr_261;
      ({Get_random, internals} = SFMODULES.unstable.require_get_random());
      //.......................................................................................................
      seed = 876;
      factor = 1;
      // factor      = 0.01
      get_random = new Get_random({seed});
      get_list = function() {
        return Array.from('abcdefghijk');
      };
      this.eq((Ωbrbr_258 = function() {
        return (get_random.shuffle(get_list(), factor)).join('');
      }), 'ajckdbigfeh');
      this.eq((Ωbrbr_259 = function() {
        return (get_random.shuffle(get_list(), factor)).join('');
      }), 'adgiecfhbjk');
      this.eq((Ωbrbr_260 = function() {
        return (get_random.shuffle(get_list(), factor)).join('');
      }), 'hcijgedbfak');
      this.eq((Ωbrbr_261 = function() {
        return (get_random.shuffle(get_list(), factor)).join('');
      }), 'icfakgbhjde');
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
      // ( new Test guytest_cfg ).test { tests, }
      // ( new Test guytest_cfg ).test { require_anybase: tests.require_anybase, }
      // ( new Test guytest_cfg ).test { get_random_vdx: tests.get_random_vdx, }
      (new Test(guytest_cfg)).test({
        get_random_shuffle: tests.get_random_shuffle
      });
      //.........................................................................................................
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtZ2V0LXJhbmRvbS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFBQTtBQUFBLE1BQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsU0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxRQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUEsRUFBQSxLQUFBO0lBQUE7K0RBQUE7OztFQUdBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsV0FBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLEtBSEYsRUFJRSxJQUpGLEVBS0UsSUFMRixFQU1FLElBTkYsRUFPRSxHQVBGLEVBUUUsSUFSRixFQVNFLE9BVEYsRUFVRSxHQVZGLENBQUEsR0FVNEIsR0FBRyxDQUFDLEdBVmhDOztFQVdBLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLHlCQUFSLENBQTVCOztFQUNBLEtBQUEsR0FBNEIsUUFBQSxDQUFFLENBQUYsQ0FBQTtXQUFTLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBZixDQUFxQixDQUFy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LEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUUsVUFBVSxDQUFDLE9BQVgsQ0FBbUIsUUFBQSxDQUFBLENBQW5CLEVBQStCLE1BQS9CLENBQUYsQ0FBeUMsQ0FBQyxJQUExQyxDQUErQyxFQUEvQztNQUFILENBQWQsQ0FBSixFQUEwRSxhQUExRSxFQVhKOztBQWFJLGFBQU87SUFkVztFQS9wQ3BCLEVBM0NGOzs7RUE0dENBLElBQUcsTUFBQSxLQUFVLE9BQU8sQ0FBQyxJQUFyQjtJQUErQixNQUFTLENBQUEsQ0FBQSxDQUFBLEdBQUE7QUFDeEMsVUFBQTtNQUFFLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsS0FBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsSUFBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RCxFQURoQjs7OztNQUtFLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEI7UUFBRSxrQkFBQSxFQUFvQixLQUFLLENBQUM7TUFBNUIsQ0FBOUIsRUFMRjs7QUFPRSxhQUFPO0lBUitCLENBQUEsSUFBeEM7O0FBNXRDQSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2JyaWNhYnJhYydcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICB3aGl0ZVxuICBibHVlXG4gIGdvbGRcbiAgZ3JleVxuICByZWRcbiAgYm9sZFxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xud3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcbkMgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdhbnNpcydcbnsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5LXRlc3QnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuc2V0dGluZ3MgPVxuICAgIG15X3NlZWRfMTogMjg3MzQ2MjEzNFxuICAgIG15X3NlZWRfMjogMjg3MzQ2MjEzNCArIDFcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AdGVzdHMgPSB0ZXN0cyA9XG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRfcmFuZG9tX2Zsb2F0OiAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfcmFuZG9tKClcbiAgICBtYXRjaGVycyAgICAgICAgPSBbXVxuICAgIHByb2JlcyAgICAgICAgICA9IFtdXG4gICAgbWF4X2NvdW50ICAgICAgID0gMWU0XG4gICAgc2VlbiAgICAgICAgICAgID0gbmV3IFNldCgpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZ2V0X3JhbmRvbSA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCB9XG4gICAgICBmb3IgaWR4IGluIFsgMCAuLi4gbWF4X2NvdW50IF1cbiAgICAgICAgbWF0Y2hlcnMucHVzaCB0ID0gZ2V0X3JhbmRvbS5mbG9hdCgpXG4gICAgICAgIHNlZW4uYWRkIHRcbiAgICAgIGZvciB2YWx1ZSwgaWR4IGluIG1hdGNoZXJzXG4gICAgICAgIGRlYnVnICfOqWJyYnJfX18xJywgeyBpZHgsIHZhbHVlLCB9IHVubGVzcyAwIDwgdmFsdWUgPD0gMVxuICAgICAgQGVxICggzqlicmJyX19fMiA9IC0+IG1hdGNoZXJzLmV2ZXJ5ICggdCApIC0+IDAgPCB0IDw9IDEgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlicmJyX19fMyA9IC0+IHNlZW4uc2l6ZSApLCBtYXhfY291bnRcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZ2V0X3JhbmRvbSA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCB9XG4gICAgICBmb3IgaWR4IGluIFsgMCAuLi4gbWF4X2NvdW50IF1cbiAgICAgICAgcHJvYmVzLnB1c2ggdCA9IGdldF9yYW5kb20uZmxvYXQoKVxuICAgICAgQGVxICggzqlicmJyX19fNCA9IC0+IHByb2JlcyApLCBtYXRjaGVyc1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBnZXRfcmFuZG9tID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzIsIH1cbiAgICAgIGNvdW50ID0gMFxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4uIG1heF9jb3VudCBdXG4gICAgICAgIGNvdW50KysgaWYgKCB0ID0gZ2V0X3JhbmRvbS5mbG9hdCgpICkgaW4gbWF0Y2hlcnNcbiAgICAgIEBlcSAoIM6pYnJicl9fXzUgPSAtPiBjb3VudCApLCAwXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGdldF9yYW5kb20gICAgPSBuZXcgR2V0X3JhbmRvbSgpXG4gICAgICBjb3VudCA9IDBcbiAgICAgIGZvciBpZHggaW4gWyAwIC4uLiBtYXhfY291bnQgXVxuICAgICAgICBjb3VudCsrIGlmICggdCA9IGdldF9yYW5kb20uZmxvYXQoKSApIGluIG1hdGNoZXJzXG4gICAgICBAZXEgKCDOqWJyYnJfX182ID0gLT4gY291bnQgPCAxMCApLCB0cnVlXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIH1cbiAgICAgIG1pbiAgICAgICAgID0gMTAwXG4gICAgICBtYXggICAgICAgICA9IDk5OVxuICAgICAgYnVja2V0cyAgICAgPSB7fVxuICAgICAgZm9yIGJ1Y2tldCBpbiBbIG1pbiAuLi4gbWF4IF1cbiAgICAgICAgYnVja2V0c1sgTWF0aC5mbG9vciBidWNrZXQgLyAxMCBdID0gMFxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4uIG1heF9jb3VudCBdXG4gICAgICAgIHQgPSBnZXRfcmFuZG9tLmZsb2F0IHsgbWluLCBtYXgsIH1cbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyX19fNycsIHRcbiAgICAgICAgYnVja2V0ID0gTWF0aC5mbG9vciB0IC8gMTBcbiAgICAgICAgYnVja2V0c1sgYnVja2V0IF0rK1xuICAgICAgICBAZXEgKCDOqWJyYnJfX184ID0gLT4gbWluIDw9IHQgPD0gbWF4ICksIHRydWVcbiAgICAgIGZvciBfLCBjb3VudCBvZiBidWNrZXRzXG4gICAgICAgIEBlcSAoIM6pYnJicl9fXzkgPSAtPiA1MCA8PSBjb3VudCA8PSAxNTAgKSwgdHJ1ZVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRfcmFuZG9tX2ludGVnZXI6IC0+XG4gICAgeyBHZXRfcmFuZG9tLFxuICAgICAgaW50ZXJuYWxzLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2dldF9yYW5kb20oKVxuICAgIG1heF9jb3VudCAgICAgICA9IDFlNFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIH1cbiAgICAgIG1pbiAgICAgICAgID0gMTAwXG4gICAgICBtYXggICAgICAgICA9IDk5OVxuICAgICAgYnVja2V0cyAgICAgPSB7fVxuICAgICAgZm9yIGJ1Y2tldCBpbiBbIG1pbiAuLi4gbWF4IF1cbiAgICAgICAgYnVja2V0c1sgTWF0aC5mbG9vciBidWNrZXQgLyAxMCBdID0gMFxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4uIG1heF9jb3VudCBdXG4gICAgICAgIHQgPSBnZXRfcmFuZG9tLmludGVnZXIgeyBtaW4sIG1heCwgfVxuICAgICAgICAjIGRlYnVnICfOqWJyYnJfXzEwJywgdFxuICAgICAgICBidWNrZXQgPSBNYXRoLmZsb29yIHQgLyAxMFxuICAgICAgICBidWNrZXRzWyBidWNrZXQgXSsrXG4gICAgICAgIEBlcSAoIM6pYnJicl9fMTEgPSAtPiBtaW4gPD0gdCA8PSBtYXggKSwgdHJ1ZVxuICAgICAgZm9yIF8sIGNvdW50IG9mIGJ1Y2tldHNcbiAgICAgICAgQGVxICggzqlicmJyX18xMiA9IC0+IDUwIDw9IGNvdW50IDw9IDE1MCApLCB0cnVlXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9yYW5kb21fY2hyOiAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfcmFuZG9tKClcbiAgICBtYXhfY291bnQgICAgICAgPSAxZTRcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBnZXRfcmFuZG9tICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCB9XG4gICAgICBmb3IgaWR4IGluIFsgMCAuLi4gbWF4X2NvdW50IF1cbiAgICAgICAgdCA9IGdldF9yYW5kb20uY2hyKClcbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyX18xMycsIHJwciB0XG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIH1cbiAgICAgIHJlc3VsdCA9ICggZ2V0X3JhbmRvbS5jaHIgeyBtaW46ICdBJywgbWF4OiAnWicsIH0gZm9yIF8gaW4gWyAxIC4uIDQwIF0gKS5qb2luICcnXG4gICAgICBAZXEgKCDOqWJyYnJfXzE0ID0gLT4gcmVzdWx0ICksICdQUUtFU1VVTllIQkVXR0hHV0VDUlNaWkxWT1NGUVNFVE5TRVhERkdGJ1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBvbl9zdGF0cyAgICA9ICggc3RhdHMgKSAtPlxuICAgICAgICAjIGRlYnVnICfOqWJyYnJfXzE1Jywgc3RhdHNcbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzIsIG9uX3N0YXRzLCB9XG4gICAgICByZXN1bHQgICAgICA9ICggZ2V0X3JhbmRvbS5jaHIgeyBtaW46ICdBJywgbWF4OiAnWicsIH0gZm9yIF8gaW4gWyAxIC4uIDQwIF0gKS5qb2luICcnXG4gICAgICBAZXEgKCDOqWJyYnJfXzE2ID0gLT4gcmVzdWx0IGlzICdQUUtFU1VVTllIQkVXR0hHV0VDUlNaWkxWT1NGUVNFVE5TRVhERkdGJyApLCBmYWxzZVxuICAgICAgQGVxICggzqlicmJyX18xNyA9IC0+IC9eW0EtWl17NDB9JC8udGVzdCByZXN1bHQgKSwgdHJ1ZVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBvbl9zdGF0cyAgICA9ICggc3RhdHMgKSAtPlxuICAgICAgICAjIGRlYnVnICfOqWJyYnJfXzE4Jywgc3RhdHNcbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzIsIG9uX3N0YXRzLCB9XG4gICAgICByZXN1bHQgICAgICA9ICggZ2V0X3JhbmRvbS5jaHIgeyBtYXg6IDB4ZmYsIGZpbHRlcjogL1thZWlvdXlBRUlPVVldLywgfSBmb3IgXyBpbiBbIDEgLi4gNDAgXSApLmpvaW4gJydcbiAgICAgICMgZGVidWcgJ86pYnJicl9fMTknLCBycHIgcmVzdWx0XG4gICAgICBAZXEgKCDOqWJyYnJfXzIwID0gLT4gL15bYWVpb3V5QUVJT1VZXXs0MH0kLy50ZXN0IHJlc3VsdCApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJyYnJfXzIxID0gLT4gcmVzdWx0ICksICd5eVV5SXV1VWFhSXVVYVVJSXlPSW9BWUVPaU9ZSXVpT3VhaUFVVWVFJ1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRfcmFuZG9tX2Nocl9wcm9kdWNlcjogLT5cbiAgICB7IEdldF9yYW5kb20sXG4gICAgICBpbnRlcm5hbHMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X3JhbmRvbSgpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgcm91bmRzICAgICAgPSAwXG4gICAgICBvbl9zdGF0cyAgICA9ICggc3RhdHMgKSAtPiByb3VuZHMgKz0gc3RhdHMucm91bmRzIGlmIHN0YXRzLm5hbWUgaXMgJ2NocidcbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzIsIG9uX3N0YXRzLCB9XG4gICAgICBjaHIgICAgICAgICA9IGdldF9yYW5kb20uY2hyX3Byb2R1Y2VyIHsgbWF4OiAweGZmLCBmaWx0ZXI6IC9bYWVpb3V5QUVJT1VZXS8sIH1cbiAgICAgIHJlc3VsdCAgICAgID0gKCBjaHIoKSBmb3IgXyBpbiBbIDEgLi4gNDAgXSApLmpvaW4gJydcbiAgICAgICMgZGVidWcgJ86pYnJicl9fMjInLCByb3VuZHMsICggcnByIHJlc3VsdCApXG4gICAgICBAZXEgKCDOqWJyYnJfXzIzID0gLT4gL15bYWVpb3V5QUVJT1VZXXs0MH0kLy50ZXN0IHJlc3VsdCApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJyYnJfXzI0ID0gLT4gcmVzdWx0ICksICd5eVV5SXV1VWFhSXVVYVVJSXlPSW9BWUVPaU9ZSXVpT3VhaUFVVWVFJ1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRfcmFuZG9tX3RleHQ6IC0+XG4gICAgeyBHZXRfcmFuZG9tLFxuICAgICAgaW50ZXJuYWxzLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2dldF9yYW5kb20oKVxuICAgIG1heF9jb3VudCAgICAgICA9IDFlNFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIG9uX3N0YXRzICAgID0gKCBzdGF0cyApIC0+XG4gICAgICAgICMgaW5mbyAnzqlicmJyX18yNScsIHN0YXRzXG4gICAgICBnZXRfcmFuZG9tICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCBvbl9zdGF0cywgfVxuICAgICAgcmVzdWx0ICAgICAgPSBnZXRfcmFuZG9tLnRleHQgeyBtaW46ICdBJywgbWF4OiAnWicsIGxlbmd0aDogNDAsIH1cbiAgICAgIEBlcSAoIM6pYnJicl9fMjYgPSAtPiByZXN1bHQgKSwgJ1BRS0VTVVVOWUhCRVdHSEdXRUNSU1paTFZPU0ZRU0VUTlNFWERGR0YnXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGNvdW50X2F0dGVtcHRzICA9ICggbiApIC0+IHJvdW5kc1sgbiBdID0gKCByb3VuZHNbIG4gXSA/PSAwICkgKyAxXG4gICAgICByb3VuZHMgICAgICAgID0ge31cbiAgICAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSAtPlxuICAgICAgICAjIGhlbHAgJ86pYnJicl9fMjcnLCBzdGF0c1xuICAgICAgICByZXR1cm4gbnVsbCB1bmxlc3Mgc3RhdHMubmFtZSBpcyAnY2hyJ1xuICAgICAgICBjb3VudF9hdHRlbXB0cyBzdGF0cy5yb3VuZHNcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIHZhbGlkX3JlICAgID0gLy8vIF4gWyBcXHUwMDIwLVxcdTAwN2UgXFx1MDBhMC1cXHUwMGFjIFxcdTAwYWUtXFx1MDBmZiBdeyAxNTAgfSAkIC8vL3ZcbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBudWxsLCBvbl9zdGF0cywgfVxuICAgICAgZm9yIF8gaW4gWyAxIC4uIDEgXVxuICAgICAgIyBmb3IgXyBpbiBbIDEgLi4gMTAgXVxuICAgICAgICByZXN1bHQgPSBnZXRfcmFuZG9tLnRleHQgeyBtaW46IDB4MDAsIG1heDogMHhmZiwgbGVuZ3RoOiAxNTAsIH1cbiAgICAgICAgQGVxICggzqlicmJyX18yOCA9IC0+IHZhbGlkX3JlLnRlc3QgcmVzdWx0ICksIHRydWVcbiAgICAgICMgZGVidWcgJ86pYnJicl9fMjknLCByb3VuZHNcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0X3JhbmRvbV9zZXRfb2ZfY2hyczogLT5cbiAgICB7IEdldF9yYW5kb20sXG4gICAgICBpbnRlcm5hbHMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X3JhbmRvbSgpXG4gICAgbWF4X2NvdW50ICAgICAgID0gMWU0XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgcm91bmRzICAgICAgICAgPSAwXG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgLT5cbiAgICAgICAgcm91bmRzICs9IHN0YXRzLnJvdW5kc1xuICAgICAgICAjIHVyZ2UgJ86pYnJicl9fMzAnLCBzdGF0cyBpZiBzdGF0cy5uYW1lIGlzICdzZXRfb2ZfY2hycydcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIHZhbGlkX3JlICAgID0gLy8vIF4gWyBcXHUwMDIwLVxcdTAwN2UgXFx1MDBhMC1cXHUwMGFjIFxcdTAwYWUtXFx1MDBmZiBdeyA1MCB9ICQgLy8vdlxuICAgICAgZ2V0X3JhbmRvbSAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IG51bGwsIG9uX3N0YXRzLCB9XG4gICAgICBmb3IgXyBpbiBbIDEgLi4gMjAgXVxuICAgICAgICByZXN1bHQgICAgICA9IGdldF9yYW5kb20uc2V0X29mX2NocnMgeyBtaW46IDB4MDAsIG1heDogMHhmZiwgc2l6ZTogNTAsIH1cbiAgICAgICAgcmVzdWx0X3JwciAgPSBbIHJlc3VsdC4uLiwgXS5qb2luICcnXG4gICAgICAgIEBlcSAoIM6pYnJicl9fMzEgPSAtPiB2YWxpZF9yZS50ZXN0IHJlc3VsdF9ycHIgKSwgdHJ1ZVxuICAgICAgICAjIGRlYnVnICfOqWJyYnJfXzMyJywgcm91bmRzXG4gICAgICAgIHJvdW5kcyA9IDBcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgcm91bmRzICAgICAgICAgPSAwXG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgLT5cbiAgICAgICAgcm91bmRzICs9IHN0YXRzLnJvdW5kc1xuICAgICAgICAjIHVyZ2UgJ86pYnJicl9fMzMnLCBzdGF0cyBpZiBzdGF0cy5uYW1lIGlzICdzZXRfb2ZfY2hycydcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIHZhbGlkX3JlICAgID0gLy8vIF4gWyAwLTkgXXsgMTAgfSAkIC8vL3ZcbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBudWxsLCBvbl9zdGF0cywgfVxuICAgICAgZm9yIF8gaW4gWyAxIC4uIDIwIF1cbiAgICAgICAgcmVzdWx0ICAgICAgPSBnZXRfcmFuZG9tLnNldF9vZl9jaHJzIHsgbWluOiAnMCcsIG1heDogJzknLCBzaXplOiAxMCwgfVxuICAgICAgICByZXN1bHRfcnByICA9IFsgcmVzdWx0Li4uLCBdLmpvaW4gJydcbiAgICAgICAgQGVxICggzqlicmJyX18zNCA9IC0+IHJlc3VsdC5zaXplICAgICAgICAgICAgICApLCAxMFxuICAgICAgICBAZXEgKCDOqWJyYnJfXzM1ID0gLT4gdmFsaWRfcmUudGVzdCByZXN1bHRfcnByICksIHRydWVcbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyX18zNicsIHJvdW5kcywgcnByIHJlc3VsdFxuICAgICAgICByb3VuZHMgPSAwXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9yYW5kb21fc2V0X29mX3RleHRzOiAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfcmFuZG9tKClcbiAgICBtYXhfY291bnQgICAgICAgPSAxZTRcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICByb3VuZHMgICAgICAgICA9IDBcbiAgICAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSAtPlxuICAgICAgICByb3VuZHMgKz0gc3RhdHMucm91bmRzXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB2YWxpZF9yZSAgICA9IC8vLyBeIFsgMC05IF17IDMgfSAkIC8vL3ZcbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBudWxsLCBvbl9zdGF0cywgfVxuICAgICAgZm9yIF8gaW4gWyAxIC4uIDEgXVxuICAgICAgICByZXN1bHQgICAgICA9IGdldF9yYW5kb20uc2V0X29mX3RleHRzIHsgbWluOiAnMCcsIG1heDogJzknLCBsZW5ndGg6IDMsIHNpemU6IDEwLCB9XG4gICAgICAgIEBlcSAoIM6pYnJicl9fMzcgPSAtPiByZXN1bHQuc2l6ZSAgICAgICAgICAgICAgKSwgMTBcbiAgICAgICAgZm9yIHJhbmRvbV90ZXh0IGZyb20gcmVzdWx0XG4gICAgICAgICAgQGVxICggzqlicmJyX18zOCA9IC0+IHZhbGlkX3JlLnRlc3QgcmFuZG9tX3RleHQgKSwgdHJ1ZVxuICAgICAgICAjIGRlYnVnICfOqWJyYnJfXzM5Jywgcm91bmRzLCBycHIgcmVzdWx0XG4gICAgICAgIHJvdW5kcyA9IDBcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0X3JhbmRvbV90ZXh0X29mX3ZhcmlhYmxlX2xlbmd0aDogLT5cbiAgICB7IEdldF9yYW5kb20sXG4gICAgICBpbnRlcm5hbHMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X3JhbmRvbSgpXG4gICAgbWF0Y2hlcnMgICAgICAgID0gWyAnzrXOp86aJywgJ86/zr3Ors+GJywgJ86SzpknLCAnzp/OoM6fz4LOmycsICfOtycsICfPiM+IzqnOvycsICfOus6dzrUnLCAnzprOvM6vzronLCAnz4XOmScsICfOn86bJywgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHJlc3VsdF9yb3VuZHMgICA9IG51bGxcbiAgICAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSA9PlxuICAgICAgICAjIGluZm8gJ86pYnJicl9fNDAnLCBzdGF0c1xuICAgICAgICByZXN1bHRfcm91bmRzID0gc3RhdHMucm91bmRzXG4gICAgICAgIEBlcSAoIM6pYnJicl9fNDEgPSAtPiByZXN1bHRfcm91bmRzID49IDAgKSwgdHJ1ZVxuICAgICAgZ2V0X3JhbmRvbSAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgb25fc3RhdHMsIH1cbiAgICAgIGZvciBpZHggaW4gWyAwIC4uIDkgXVxuICAgICAgICByZXN1bHQgICAgICA9IGdldF9yYW5kb20udGV4dCB7IG1pbjogJ86RJywgbWF4OiAnz4knLCBtaW5fbGVuZ3RoOiAxLCBtYXhfbGVuZ3RoOiA1LCB9XG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fNDInLCBycHIgcmVzdWx0XG4gICAgICAgIEBlcSAoIM6pYnJicl9fNDMgPSAtPiByZXN1bHQgKSwgbWF0Y2hlcnNbIGlkeCBdXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9yYW5kb21fdGV4dF9vZl92YXJpYWJsZV9sZW5ndGhfd2l0aF9maWx0ZXI6IC0+XG4gICAgeyBHZXRfcmFuZG9tLFxuICAgICAgaW50ZXJuYWxzLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2dldF9yYW5kb20oKVxuICAgIHJlc3VsdF9tYXRjaGVycyA9IFsgJ86RzrrOuCcsICfOkc6jJywgJ86RzpwnLCAnzpHOr86lzpQnLCAnzpHOrs60zpsnLCAnzpHOrs+CzrTOoCcsICfOkc6+zqHOpM6YJywgJ86RzqTOms6eJywgJ86RzrPOuc6UzrUnLCAnzpHOricsIF1cbiAgICByb3VuZF9tYXRjaGVycyAgPSBbIDM0LCAxNSwgMTg5LCAxMjEsIDc1LCA0NywgODcsIDQzLCAxMTksIDIwMCwgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHJlc3VsdF9yb3VuZHMgID0gbnVsbFxuICAgICAgb25fc3RhdHMgICAgICAgID0gKCBzdGF0cyApID0+XG4gICAgICAgIHJldHVybiBudWxsIHVubGVzcyBzdGF0cy5uYW1lIGlzICd0ZXh0J1xuICAgICAgICAjIGluZm8gJ86pYnJicl9fNDQnLCBpZHgsIHN0YXRzXG4gICAgICAgIHJlc3VsdF9yb3VuZHMgPSBzdGF0cy5yb3VuZHNcbiAgICAgICAgQGVxICggzqlicmJyX180NSA9IC0+ICByZXN1bHRfcm91bmRzICksIHJvdW5kX21hdGNoZXJzWyBpZHggXVxuICAgICAgZ2V0X3JhbmRvbSAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgb25fc3RhdHMsIH1cbiAgICAgIGZvciBpZHggaW4gWyAwIC4uIDkgXVxuICAgICAgICByZXN1bHQgICAgICA9IGdldF9yYW5kb20udGV4dCB7IG1pbjogJ86RJywgbWF4OiAnz4knLCBtaW5fbGVuZ3RoOiAxLCBtYXhfbGVuZ3RoOiA1LCBmaWx0ZXI6IC9ezpEvdiwgfVxuICAgICAgICAjIGRlYnVnICfOqWJyYnJfXzQ2JywgcnByIHJlc3VsdFxuICAgICAgICBAZXEgKCDOqWJyYnJfXzQ3ID0gLT4gL17OkVvOkS3PiV17MCw0fSQvdi50ZXN0IHJlc3VsdCApLCB0cnVlXG4gICAgICAgIEBlcSAoIM6pYnJicl9fNDggPSAtPiByZXN1bHQgKSwgcmVzdWx0X21hdGNoZXJzWyBpZHggXVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRfcmFuZG9tX3RleHRfcHJvZHVjZXI6IC0+XG4gICAgeyBHZXRfcmFuZG9tLFxuICAgICAgaW50ZXJuYWxzLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2dldF9yYW5kb20oKVxuICAgIHJlc3VsdF9tYXRjaGVycyA9IFsgJ86RzrrOuCcsICfOkc6jJywgJ86RzpwnLCAnzpHOr86lzpQnLCAnzpHOrs60zpsnLCAnzpHOrs+CzrTOoCcsICfOkc6+zqHOpM6YJywgJ86RzqTOms6eJywgJ86RzrPOuc6UzrUnLCAnzpHOricsIF1cbiAgICByb3VuZF9tYXRjaGVycyAgPSBbIDM0LCAxNSwgMTg5LCAxMjEsIDc1LCA0NywgODcsIDQzLCAxMTksIDIwMCwgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHJlc3VsdF9yb3VuZHMgID0gbnVsbFxuICAgICAgb25fc3RhdHMgICAgICAgID0gKCBzdGF0cyApID0+XG4gICAgICAgIHJldHVybiBudWxsIHVubGVzcyBzdGF0cy5uYW1lIGlzICd0ZXh0J1xuICAgICAgICAjIGluZm8gJ86pYnJicl9fNDknLCBpZHgsIHN0YXRzXG4gICAgICAgIHJlc3VsdF9yb3VuZHMgPSBzdGF0cy5yb3VuZHNcbiAgICAgICAgQGVxICggzqlicmJyX181MCA9IC0+ICByZXN1bHRfcm91bmRzICksIHJvdW5kX21hdGNoZXJzWyBpZHggXVxuICAgICAgZ2V0X3JhbmRvbSAgICAgID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIG9uX3N0YXRzLCB9XG4gICAgICBnZXRfcmFuZG9tX3RleHQgPSBnZXRfcmFuZG9tLnRleHRfcHJvZHVjZXIgeyBtaW46ICfOkScsIG1heDogJ8+JJywgbWluX2xlbmd0aDogMSwgbWF4X2xlbmd0aDogNSwgZmlsdGVyOiAvXs6RL3YsIH1cbiAgICAgIGZvciBpZHggaW4gWyAwIC4uIDkgXVxuICAgICAgICByZXN1bHQgICAgICA9IGdldF9yYW5kb21fdGV4dCgpXG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fNTEnLCBycHIgcmVzdWx0XG4gICAgICAgIEBlcSAoIM6pYnJicl9fNTIgPSAtPiAvXs6RW86RLc+JXXswLDR9JC92LnRlc3QgcmVzdWx0ICksIHRydWVcbiAgICAgICAgQGVxICggzqlicmJyX181MyA9IC0+IHJlc3VsdCApLCByZXN1bHRfbWF0Y2hlcnNbIGlkeCBdXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9yYW5kb21fZmxvYXRfcHJvZHVjZXI6IC0+XG4gICAgeyBHZXRfcmFuZG9tLFxuICAgICAgaW50ZXJuYWxzLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2dldF9yYW5kb20oKVxuICAgIHJlc3VsdF9tYXRjaGVycyA9IFsgMTYuMDg0NzEyODQ4NTMyOTQ1LCAxNi40MjU2MDc5NDAxODIwOSwgMTQuMDA5MTUyMDk5MDI0NTA0LCAxOC4xNzQ2NDIxMjE4ODQ5NzIsIDEyLjg2MTE1MDMyNjIwNzI4LCAxMC4yMDgzMDI4MzQwNzEyMTksIDE4Ljc1MzA5MTQ0ODQ1MjMyNCwgMTIuNDMwMTgzMjA5OTQ0NTE2LCAxMi42Mjc3MTUwNTYyOTY0MzgsIDEyLjQyNTI1OTA2NzY3Njk2MSwgXVxuICAgICMgcm91bmRfbWF0Y2hlcnMgID0gWyAzNCwgMTUsIDE4OSwgMTIxLCA3NSwgNDcsIDg3LCA0MywgMTE5LCAyMDAsIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICByZXN1bHRfcm91bmRzICA9IG51bGxcbiAgICAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSA9PlxuICAgICAgICByZXR1cm4gbnVsbCB1bmxlc3Mgc3RhdHMubmFtZSBpcyAndGV4dCdcbiAgICAgICAgIyBpbmZvICfOqWJyYnJfXzU0JywgaWR4LCBzdGF0c1xuICAgICAgICByZXN1bHRfcm91bmRzID0gc3RhdHMucm91bmRzXG4gICAgICAgIEBlcSAoIM6pYnJicl9fNTUgPSAtPiAgcmVzdWx0X3JvdW5kcyApLCByb3VuZF9tYXRjaGVyc1sgaWR4IF1cbiAgICAgIGdldF9yYW5kb20gICAgICAgID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIG9uX3N0YXRzLCB9XG4gICAgICBmaWx0ZXIgICAgICAgICAgICA9ICggbiApIC0+ICggTWF0aC5mbG9vciBuICkgJSUgMiBpcyAwXG4gICAgICBnZXRfcmFuZG9tX2Zsb2F0ICA9IGdldF9yYW5kb20uZmxvYXRfcHJvZHVjZXIgeyBtaW46IDEwLCBtYXg6IDIwLCBmaWx0ZXIsIH1cbiAgICAgIGZvciBpZHggaW4gWyAwIC4uIDkgXVxuICAgICAgICByZXN1bHQgICAgICA9IGdldF9yYW5kb21fZmxvYXQoKVxuICAgICAgICAjIGRlYnVnICfOqWJyYnJfXzU2JywgcnByIHJlc3VsdFxuICAgICAgICBAZXEgKCDOqWJyYnJfXzU3ID0gLT4gcmVzdWx0ICksIHJlc3VsdF9tYXRjaGVyc1sgaWR4IF1cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0X3JhbmRvbV9pbnRlZ2VyX3Byb2R1Y2VyOiAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfcmFuZG9tKClcbiAgICByZXN1bHRfbWF0Y2hlcnMgPSBbIDE2LCAxNiwgMTQsIDEyLCAxOCwgMTgsIDIwLCAxMCwgMTIsIDEyLCBdXG4gICAgcm91bmRzX21hdGNoZXIgID0gWyAwLCAwLCAwLCAwLCAxLCAwLCAxLCAxLCAyLCAxIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBteV9vbl9zdGF0cyAgICAgICAgID0gKCBzdGF0cyApID0+XG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fNTgnLCBzdGF0c1xuICAgICAgICByb3VuZHMucHVzaCBzdGF0cy5yb3VuZHMgaWYgc3RhdHMubmFtZSBpcyAnaW50ZWdlcidcbiAgICAgIHJvdW5kcyAgICAgICAgICAgICA9IFtdXG4gICAgICBnZXRfcmFuZG9tICAgICAgICAgID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIG9uX3N0YXRzOiBteV9vbl9zdGF0cywgfVxuICAgICAgZmlsdGVyICAgICAgICAgICAgICA9ICggbiApIC0+ICggTWF0aC5mbG9vciBuICkgJSUgMiBpcyAwXG4gICAgICBnZXRfcmFuZG9tX2ludGVnZXIgID0gZ2V0X3JhbmRvbS5pbnRlZ2VyX3Byb2R1Y2VyIHsgbWluOiAxMCwgbWF4OiAyMCwgZmlsdGVyLCB9XG4gICAgICAjIGRlYnVnICfOqWJyYnJfXzU5JywgZ2V0X3JhbmRvbS5jZmdcbiAgICAgIGZvciBpZHggaW4gWyAwIC4uIDkgXVxuICAgICAgICByZXN1bHQgPSBnZXRfcmFuZG9tX2ludGVnZXIoKVxuICAgICAgICAjIGRlYnVnICfOqWJyYnJfXzYwJywgcnByIHJlc3VsdFxuICAgICAgICBAZXEgKCDOqWJyYnJfXzYxID0gLT4gcmVzdWx0ICksIHJlc3VsdF9tYXRjaGVyc1sgaWR4IF1cbiAgICAgIEBlcSAoIM6pYnJicl9fNjIgPSAtPiByb3VuZHMgKSwgcm91bmRzX21hdGNoZXJcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0X3JhbmRvbV9zZXRfb2ZfdGV4dHNfb2ZfdmFyaWFibGVfbGVuZ3RoOiAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfcmFuZG9tKClcbiAgICAjIG1hdGNoZXJzICAgICAgICA9IFsgJ861zqfOmicsICfOv869zq7PhicsICfOks6ZJywgJ86fzqDOn8+CzpsnLCAnzrcnLCAnz4jPiM6pzr8nLCAnzrrOnc61JywgJ86azrzOr866JywgJ8+FzpknLCAnzp/OmycsIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICByZXN1bHRfcm91bmRzICA9IG51bGxcbiAgICAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSA9PlxuICAgICAgICBpbmZvICfOqWJyYnJfXzYzJywgc3RhdHMgaWYgc3RhdHMubmFtZSBpcyAnc2V0X29mX3RleHRzJ1xuICAgICAgICByZXN1bHRfcm91bmRzID0gc3RhdHMucm91bmRzIGlmIHN0YXRzLm5hbWUgaXMgJ3NldF9vZl90ZXh0cydcbiAgICAgICAgQGVxICggzqlicmJyX182NCA9IC0+IHJlc3VsdF9yb3VuZHMgPj0gMCApLCB0cnVlXG4gICAgICBnZXRfcmFuZG9tICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCBvbl9zdGF0cywgfVxuICAgICAgbWF0Y2hlcnMgICAgPSBbXG4gICAgICAgIG5ldyBTZXQgWyAn4r6J4r2V4ryi4r6X4r6u4r6pJywgJ+K/i+K8veK8hOK8oOK+uuK8tCcsICfivLTivrzivKYnLCAn4r6P4r6aJywgJ+K/k+K9m+K+seK9s+K+neK8reK+iOK+nOK8o+K+pScsIF1cbiAgICAgICAgbmV3IFNldCBbICfivp3ivKXiv4fivJ7ivK3ivLUnLCAn4r2Q4ry44r26JywgJ+K8lOK/k+K8jOK+o+K+heK+suK9geK8jScsICfivbLivKnivJHiv4wnLCAn4ryp4r624ryV4r2T4r2QJywgXVxuICAgICAgICBuZXcgU2V0IFsgJ+K8ouK/gOK+s+K/leK8lOK/gOK8l+K+ieK9lCcsICfivofivprivKDivJjivLzivpAnLCAn4ryP4r+J4r6c4rym4r6c4ryG4r2eJywgJ+K9jeK9oOK+v+K8lOK8l+K/jicsICfivofivaTiv4PivoXivYvivo4nLCBdXG4gICAgICAgIG5ldyBTZXQgWyAn4ryY4ryC4r6b4r6W4ryo4r6b4r6cJywgJ+K9ieK8m+K/ieK8mOK/kuK9guK8q+K9l+K+nCcsICfivJTiv4viv4QnLCAn4ryf4ryF4ryO4r6C4ryu4r214r6+4r684r2UJywgJ+K+qOK9qeK+kOK8iuK8guK9hicsIF1cbiAgICAgICAgbmV3IFNldCBbICfivb/ivanivYonLCAn4ry94r6W4r6c4r624r6p4r6uJywgJ+K+tuK8ruK+gycsICfivb/ivbjivr3ivKHivbvivorivLYnLCAn4r2G4ryg4r204ry/4ry84ry/4r2r4r6IJywgXVxuICAgICAgICBuZXcgU2V0IFsgJ+K9oycsICfivrHivbvivYDivZvivr3ivrLivKbivrbivLknLCAn4ryV4r2X4ryM4ryW4r294r2m4r2OJywgJ+K9muK+jOK8vuK+jOK8p+K8m+K8uScsICfivoLivKPiv4EnLCBdXG4gICAgICAgIG5ldyBTZXQgWyAn4r6Y4r2y4r6f4r2k4ryYJywgJ+K+geK+p+K9nOK8leK+sOK+kOK8qScsICfivLHivpHiv4Piv5LivL3ivJknLCAn4r+P4r6w4r6T4ryQ4ryIJywgJ+K9mOK9l+K9veK8mOK/gCcsIF1cbiAgICAgICAgbmV3IFNldCBbICfivbPivLHivKTivr7ivbfivqDivL/ivpUnLCAn4ryb4ryC4r+D4ry24ryt4ryrJywgJ+K8q+K+gOK+hOK/i+K8j+K8vicsICfivYHivL3ivLnivq/iv4Piva7ivrPivZHivanivZMnLCAn4ryv4r2O4r6x4r2r4r2p4r6zJywgXVxuICAgICAgICBuZXcgU2V0IFsgJ+K8t+K+leK8iOK8tuK9qeK9v+K+oeK8g+K+nCcsICfivrHiv4fivp7ivrTivZ0nLCAn4r61JywgJ+K9u+K/lOK9gOK/juK+keK9jOK8pOK9mCcsICfiv4rivK3ivLPiv5LivJDivaXivZnivrLivZ8nLCBdXG4gICAgICAgIG5ldyBTZXQgWyAn4r2j4r2qJywgJ+K9meK8n+K9sOK+lycsICfivbAnLCAn4ry04r+R4r6B4r26JywgJ+K+kOK9jOK+oOK+reK9mCcsIF1cbiAgICAgICAgXVxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4gOSBdXG4gICAgICAgIHJlc3VsdCA9IGdldF9yYW5kb20uc2V0X29mX3RleHRzIHsgbWluOiAn4ryAJywgbWF4OiAn4r+VJywgc2l6ZTogNSwgbWluX2xlbmd0aDogMSwgbWF4X2xlbmd0aDogMTAsIH1cbiAgICAgICAgQGVxICggzqlicmJyX182NSA9IC0+IHJlc3VsdCApLCBtYXRjaGVyc1sgaWR4IF1cbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyX182NicsIHJlc3VsdFxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJlc3VsdF9yb3VuZHMgID0gbnVsbFxuICAgICAgb25fc3RhdHMgICAgICAgID0gKCBzdGF0cyApID0+XG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fNjcnLCBzdGF0c1xuICAgICAgICByZXR1cm4gbnVsbCB1bmxlc3Mgc3RhdHMubmFtZSBpcyAnd2Fsa191bmlxdWUnXG4gICAgICAgIHJlc3VsdF9yb3VuZHMgPSBzdGF0cy5yb3VuZHNcbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyX182OCcsIHJlc3VsdF9yb3VuZHNcbiAgICAgICAgQGVxICggzqlicmJyX182OSA9IC0+IHJlc3VsdF9yb3VuZHMgKSwgbWF0Y2hlcnNbIGlkeCBdLnJlc3VsdF9yb3VuZHNcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZ2V0X3JhbmRvbSAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgb25fc3RhdHMsIH1cbiAgICAgIG1hdGNoZXJzICAgID0gW1xuICAgICAgICB7IHJlc3VsdF9yb3VuZHM6ICA0LCByZXN1bHRfcnByOiAnNTY0MTc5MzA4MicsIH1cbiAgICAgICAgeyByZXN1bHRfcm91bmRzOiA2MywgcmVzdWx0X3JwcjogJzI4MTY3OTQ1MzAnLCB9XG4gICAgICAgIHsgcmVzdWx0X3JvdW5kczogMTEsIHJlc3VsdF9ycHI6ICc0NTM4MTk2MDcyJywgfVxuICAgICAgICB7IHJlc3VsdF9yb3VuZHM6IDIwLCByZXN1bHRfcnByOiAnNzgzMTkyNDA1NicsIH1cbiAgICAgICAgeyByZXN1bHRfcm91bmRzOiA3NiwgcmVzdWx0X3JwcjogJzAzMjU0Njc4MTknLCB9XG4gICAgICAgIHsgcmVzdWx0X3JvdW5kczogIDcsIHJlc3VsdF9ycHI6ICczMTQ5NzYwNTgyJywgfVxuICAgICAgICB7IHJlc3VsdF9yb3VuZHM6IDIwLCByZXN1bHRfcnByOiAnMjg1NzM2MTA5NCcsIH1cbiAgICAgICAgeyByZXN1bHRfcm91bmRzOiAzMSwgcmVzdWx0X3JwcjogJzQ1MjM3ODYwOTEnLCB9XG4gICAgICAgIHsgcmVzdWx0X3JvdW5kczogMTMsIHJlc3VsdF9ycHI6ICc0ODEzNTYwMjk3JywgfVxuICAgICAgICB7IHJlc3VsdF9yb3VuZHM6IDE5LCByZXN1bHRfcnByOiAnNzQ5MTA2NTgyMycsIH1cbiAgICAgICAgXVxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4gOSBdXG4gICAgICAgIHJlc3VsdCAgICAgID0gZ2V0X3JhbmRvbS5zZXRfb2ZfdGV4dHMgeyBtaW46ICcwJywgbWF4OiAnOScsIHNpemU6IDEwLCBsZW5ndGg6IDEsIG9uX3N0YXRzLCB9XG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fNzAnLCBycHIgcmVzdWx0XG4gICAgICAgIHJlc3VsdF9ycHIgID0gWyByZXN1bHQuLi4sIF0uam9pbiAnJ1xuICAgICAgICBAZXEgKCDOqWJyYnJfXzcxID0gLT4gcmVzdWx0X3JwciAgICAgKSwgbWF0Y2hlcnNbIGlkeCBdLnJlc3VsdF9ycHJcbiAgICAgICAgIyBAZXEgKCDOqWJyYnJfXzcyID0gLT4gcmVzdWx0X3JvdW5kcyApLCBtYXRjaGVyc1sgaWR4IF0ucmVzdWx0X3JvdW5kc1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBleGhhdXN0aW9uOiAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfcmFuZG9tKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICByZXN1bHRfcm91bmRzICA9IG51bGxcbiAgICAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSA9PlxuICAgICAgICAjIGluZm8gJ86pYnJicl9fNzMnLCBzdGF0cyBpZiBzdGF0cy5uYW1lIGlzICd3YWxrJ1xuICAgICAgICAjIHJlc3VsdF9yb3VuZHMgPSBzdGF0cy5yb3VuZHMgaWYgc3RhdHMubmFtZSBpcyAnd2FsaydcbiAgICAgICAgIyBAZXEgKCDOqWJyYnJfXzc0ID0gLT4gcmVzdWx0X3JvdW5kcyA+PSAwICksIHRydWVcbiAgICAgIGdldF9yYW5kb20gICAgICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCBvbl9zdGF0cywgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBjZmcgPVxuICAgICAgICBtaW46ICAgICAgICAgICAgJ0EnXG4gICAgICAgIG1heDogICAgICAgICAgICAnWidcbiAgICAgICAgbGVuZ3RoOiAgICAgICAgIDNcbiAgICAgICAgZmlsdGVyOiAgICAgICAgIC9eW2Etel17M30kL1xuICAgICAgICBvbl9leGhhdXN0aW9uOiAnZXJyb3InXG4gICAgICBAdGhyb3dzICggzqlicmJyX183NSA9IC0+IGdldF9yYW5kb20udGV4dCBjZmcgKSwgL2V4aGF1c3RlZC9cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgcmVzdWx0X3JvdW5kcyAgPSBudWxsXG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgPT5cbiAgICAgICAgIyBpbmZvICfOqWJyYnJfXzc2Jywgc3RhdHMgaWYgc3RhdHMubmFtZSBpcyAnd2FsaydcbiAgICAgICAgIyByZXN1bHRfcm91bmRzID0gc3RhdHMucm91bmRzIGlmIHN0YXRzLm5hbWUgaXMgJ3dhbGsnXG4gICAgICAgICMgQGVxICggzqlicmJyX183NyA9IC0+IHJlc3VsdF9yb3VuZHMgPj0gMCApLCB0cnVlXG4gICAgICBnZXRfcmFuZG9tICAgICAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgb25fc3RhdHMsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgY2ZnID1cbiAgICAgICAgbWluOiAgICAgICAgICAgICdBJ1xuICAgICAgICBtYXg6ICAgICAgICAgICAgJ1onXG4gICAgICAgIGxlbmd0aDogICAgICAgICAzXG4gICAgICAgIGZpbHRlcjogICAgICAgICAvXlthLXpdezN9JC9cbiAgICAgICAgb25fZXhoYXVzdGlvbjogLT4gbnVsbFxuICAgICAgQGVxICggzqlicmJyX183OCA9IC0+IGdldF9yYW5kb20udGV4dCBjZmcgKSwgbnVsbFxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB3YWxrOiAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfcmFuZG9tKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBpZHggICAgICAgICAgICAgPSAtMVxuICAgICAgZ2V0X3JhbmRvbSAgICAgID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIG9uX3N0YXRzLCB9XG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgPT5cbiAgICAgICAgIyBpbmZvICfOqWJyYnJfXzc5JywgaWR4LCBzdGF0cyAjIGlmIHN0YXRzLm5hbWUgaXMgJ3dhbGsnXG4gICAgICAgIGlmIHN0YXRzLm5hbWUgaXMgJ3dhbGsnXG4gICAgICAgICAgQGVxICggzqlicmJyX184MCA9IC0+IHN0YXRzLnJvdW5kcyApLCBtYXRjaGVyLnJvdW5kc1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXN1bHQgICAgPVxuICAgICAgICB2YWx1ZXM6ICAgW11cbiAgICAgIG1hdGNoZXIgICA9XG4gICAgICAgIHZhbHVlczogICBbICfEgsSNw4AnLCAndMSixYUnLCAnxL7DpsWxJywgJ0hwxZcnLCAnxZp6XicsICfElsSnxbsnLCAnxbzDicWJJywgJ8OtxKzEjCcsICfEqXXEtycsICfDrMSreCcsICfFqm18JyBdXG4gICAgICAgIHJvdW5kczogICAwXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHByb2R1Y2VyICA9IC0+IGdldF9yYW5kb20udGV4dCB7IG1pbjogJ0EnLCBtYXg6IDB4MDE3ZiwgbGVuZ3RoOiAzLCBvbl9zdGF0cywgfVxuICAgICAgZm9yIHZhbHVlIGZyb20gZ2V0X3JhbmRvbS53YWxrIHsgcHJvZHVjZXIsIG46IDExLCBvbl9zdGF0cywgfVxuICAgICAgICBpZHgrK1xuICAgICAgICAjIGRlYnVnICfOqWJyYnJfXzgxJywgaWR4LCBycHIgdmFsdWVcbiAgICAgICAgcmVzdWx0LnZhbHVlcy5wdXNoIHZhbHVlXG4gICAgICAgIEBlcSAoIM6pYnJicl9fODIgPSAtPiB2YWx1ZSApLCBtYXRjaGVyLnZhbHVlc1sgaWR4IF1cbiAgICAgIEBlcSAoIM6pYnJicl9fODMgPSAtPiBpZHggICAgICAgICAgICAgICAgICAgICksIDEwXG4gICAgICBAZXEgKCDOqWJyYnJfXzg0ID0gLT4gcmVzdWx0LnZhbHVlcy5sZW5ndGggICApLCAxMVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBkbyA9PlxuICAgICMgICBnZXRfcmFuZG9tICAgICAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgb25fc3RhdHMsIH1cbiAgICAjICAgcmVzdWx0X3JvdW5kcyAgPSBudWxsXG4gICAgIyAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSA9PlxuICAgICMgICAgIGluZm8gJ86pYnJicl9fODUnLCBzdGF0cyBpZiBzdGF0cy5uYW1lIGlzICd3YWxrJ1xuICAgICMgICAgIHJlc3VsdF9yb3VuZHMgPSBzdGF0cy5yb3VuZHMgaWYgc3RhdHMubmFtZSBpcyAnd2FsaydcbiAgICAjICAgICBAZXEgKCDOqWJyYnJfXzg2ID0gLT4gcmVzdWx0X3JvdW5kcyA+PSAwICksIHRydWVcbiAgICAjICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyAgIHByb2R1Y2VyICA9IC0+IGdldF9yYW5kb20udGV4dCB7IG1pbjogJzAnLCBtYXg6ICc5JywgbGVuZ3RoOiAxLCB9XG4gICAgIyAgIGNvdW50ICAgICA9IDBcbiAgICAjICAgc2VlbiAgICAgID0gbmV3IFNldCgpXG4gICAgIyAgIGZvciB4IGZyb20gZ2V0X3JhbmRvbS53YWxrIHsgcHJvZHVjZXIsIHNlZW4sIG46IDUsIH1cbiAgICAjICAgICBjb3VudCsrXG4gICAgIyAgICAgZGVidWcgJ86pYnJicl9fODcnLCBjb3VudCwgcnByIHhcbiAgICAjICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB3YWxrX3VuaXF1ZTogLT5cbiAgICB7IEdldF9yYW5kb20sXG4gICAgICBpbnRlcm5hbHMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X3JhbmRvbSgpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZ2V0X3JhbmRvbSAgICAgID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIG9uX3N0YXRzLCB9XG4gICAgICBtYXRjaGVycyAgICAgICAgPSBbIDE1LCAxNiwgMTQsIDExLCAxNywgMTksIDEzLCAxMCwgMTgsIDEyLCBdXG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgPT5cbiAgICAgICAgIyBpbmZvICfOqWJyYnJfXzg4Jywgc3RhdHNcbiAgICAgICAgQGVxICggzqlicmJyX184OSA9IC0+IHN0YXRzLnJvdW5kcyApLCA0IGlmIHN0YXRzLm5hbWUgaXMgJ3dhbGtfdW5pcXVlJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBwcm9kdWNlciAgPSAtPiBnZXRfcmFuZG9tLmludGVnZXIgeyBtaW46IDEwLCBtYXg6IDE5LCBvbl9zdGF0cywgfVxuICAgICAgaWR4ICAgICAgID0gLTFcbiAgICAgIGZvciB2YWx1ZSBmcm9tIGdldF9yYW5kb20ud2Fsa191bmlxdWUgeyBwcm9kdWNlciwgbjogMTAsIG9uX3N0YXRzLCB9XG4gICAgICAgIGlkeCsrXG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fOTAnLCBpZHgsIHJwciB2YWx1ZVxuICAgICAgICBAZXEgKCDOqWJyYnJfXzkxID0gLT4gdmFsdWUgKSwgbWF0Y2hlcnNbIGlkeCBdXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGdldF9yYW5kb20gICAgICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCBvbl9zdGF0cywgfVxuICAgICAgb25fc3RhdHMgICAgICAgID0gKCBzdGF0cyApID0+XG4gICAgICAgIEBlcSAoIM6pYnJicl9fOTIgPSAtPiBzdGF0cy5yb3VuZHMgKSwgNCBpZiBzdGF0cy5uYW1lIGlzICd3YWxrX3VuaXF1ZSdcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcHJvZHVjZXIgID0gLT4gZ2V0X3JhbmRvbS5pbnRlZ2VyIHsgbWluOiAxMCwgbWF4OiAxOSwgb25fc3RhdHMsIH1cbiAgICAgIEB0aHJvd3MgKCDOqWJyYnJfXzkzID0gLT4gdmFsdWUgZm9yIHZhbHVlIGZyb20gZ2V0X3JhbmRvbS53YWxrX3VuaXF1ZSB7IHByb2R1Y2VyLCBuOiAxMSwgb25fc3RhdHMsIH0gKSwgL2V4aGF1c3RlZC9cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZ2V0X3JhbmRvbSAgICAgID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIG9uX3N0YXRzLCB9XG4gICAgICBtYXRjaGVycyAgICAgICAgPSBbIDE1LCAxNiwgMTQsIDExLCAxNywgMTksIDEzLCAxMCwgMTgsIDEyLCBdXG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgPT5cbiAgICAgICAgIyBpbmZvICfOqWJyYnJfXzk0Jywgc3RhdHNcbiAgICAgICAgQGVxICggzqlicmJyX185NSA9IC0+IHN0YXRzLnJvdW5kcyApLCBnZXRfcmFuZG9tLmNmZy5tYXhfcm91bmRzICsgMSBpZiBzdGF0cy5uYW1lIGlzICd3YWxrX3VuaXF1ZSdcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcHJvZHVjZXIgID0gLT4gZ2V0X3JhbmRvbS5pbnRlZ2VyIHsgbWluOiAxMCwgbWF4OiAxOSwgb25fc3RhdHMsIH1cbiAgICAgIGlkeCAgICAgICA9IC0xXG4gICAgICBmb3IgdmFsdWUgZnJvbSBnZXRfcmFuZG9tLndhbGtfdW5pcXVlIHsgcHJvZHVjZXIsIG46IDIwLCBvbl9zdGF0cywgb25fZXhoYXVzdGlvbjogJ3N0b3AnLCB9XG4gICAgICAgIGlkeCsrXG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fOTYnLCBpZHgsIHJwciB2YWx1ZVxuICAgICAgICBAZXEgKCDOqWJyYnJfXzk3ID0gLT4gdmFsdWUgKSwgbWF0Y2hlcnNbIGlkeCBdXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGdldF9yYW5kb20gICAgICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCBvbl9zdGF0cywgfVxuICAgICAgbWF0Y2hlcnMgICAgICAgID0gJ8Kowq95RMK+w5bDkcO1YCVBw6NWW8OlSDXCtsOCw7zDvcOZw4VPwq7Dg0XDjcOER8OxP1hJdFotw4vCrMOaZC5rSzLDtkrDnjZ3c8Ovw6nDnMO/OcKweMKnw4FCX8K3w4Aww7ImccOoOMO3w6zCq27CtcKyXCLCvcOdbTzDs2VNe1HDrUBQw6fDkCtqwqXDn17CqcOmQ8KhwrHDk2liLGNcXFxcwrM3wqNyfmHDqsK/w4c6w45TesO5w5jCuih8VMK8wqbCqi/DunXCosObWcKkw4kjw7DDvsO4wrhvRlUxfXAkV8Kgw5XDtDTDjMOkw4jDqz7Dj3bDl0xSXWZnXFwnw67CtMK5w7vDksOiw4opwrtow5QhO8OgKk7DocOGPTNsJ1xuICAgICAgcmVzdWx0cyAgICAgICAgID0gW11cbiAgICAgIG1heF9yb3VuZHMgICAgICA9IDFfMDAwXG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgPT5cbiAgICAgICAgIyBpbmZvICfOqWJyYnJfXzk4Jywgc3RhdHNcbiAgICAgICAgQGVxICggzqlicmJyX185OSA9IC0+IHN0YXRzLnJvdW5kcyApLCBtYXhfcm91bmRzICsgMSBpZiBzdGF0cy5uYW1lIGlzICd3YWxrX3VuaXF1ZSdcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcHJvZHVjZXIgID0gLT4gZ2V0X3JhbmRvbS5jaHIgeyBtaW46IDB4MjAsIG1heDogMHhmZiwgb25fc3RhdHMsIH1cbiAgICAgIGlkeCAgICAgICA9IC0xXG4gICAgICBmb3IgdmFsdWUgZnJvbSBnZXRfcmFuZG9tLndhbGtfdW5pcXVlIHsgcHJvZHVjZXIsIG46IDIwMCwgb25fc3RhdHMsIG9uX2V4aGF1c3Rpb246ICdzdG9wJywgbWF4X3JvdW5kcywgfVxuICAgICAgICBpZHgrK1xuICAgICAgICAjIGRlYnVnICfOqWJyYnJfMTAwJywgaWR4LCBycHIgdmFsdWVcbiAgICAgICAgQGVxICggzqlicmJyXzEwMSA9IC0+IHZhbHVlICksIG1hdGNoZXJzWyBpZHggXVxuICAgICAgICByZXN1bHRzLnB1c2ggdmFsdWVcbiAgICAgICMgZGVidWcgJ86pYnJicl8xMDInLCBycHIgcmVzdWx0cy5qb2luICcnXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGdldF9yYW5kb20gICAgICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCBvbl9zdGF0cywgfVxuICAgICAgbWF0Y2hlcnMgICAgICAgID0gJ8K7aMOUITvDoCpOw6HDhj0zbCdcbiAgICAgIHJlc3VsdHMgICAgICAgICA9IFtdXG4gICAgICBtYXhfcm91bmRzICAgICAgPSAxXzAwMFxuICAgICAgb25fc3RhdHMgICAgICAgID0gKCBzdGF0cyApID0+XG4gICAgICAgICMgaW5mbyAnzqlicmJyXzEwMycsIHN0YXRzXG4gICAgICAgIEBlcSAoIM6pYnJicl8xMDQgPSAtPiBzdGF0cy5yb3VuZHMgKSwgbWF4X3JvdW5kcyArIDEgaWYgc3RhdHMubmFtZSBpcyAnd2Fsa191bmlxdWUnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNlZW4gICAgICA9IG5ldyBTZXQgJ8Kowq95RMK+w5bDkcO1YCVBw6NWW8OlSDXCtsOCw7zDvcOZw4VPwq7Dg0XDjcOER8OxP1hJdFotw4vCrMOaZC5rSzLDtkrDnjZ3c8Ovw6nDnMO/OcKweMKnw4FCX8K3w4Aww7ImccOoOMO3w6zCq27CtcKyXCLCvcOdbTzDs2VNe1HDrUBQw6fDkCtqwqXDn17CqcOmQ8KhwrHDk2liLGNcXFxcwrM3wqNyfmHDqsK/w4c6w45TesO5w5jCuih8VMK8wqbCqi/DunXCosObWcKkw4kjw7DDvsO4wrhvRlUxfXAkV8Kgw5XDtDTDjMOkw4jDqz7Dj3bDl0xSXWZnXFwnw67CtMK5w7vDksOiw4opJ1xuICAgICAgcHJvZHVjZXIgID0gLT4gZ2V0X3JhbmRvbS5jaHIgeyBtaW46IDB4MjAsIG1heDogMHhmZiwgb25fc3RhdHMsIH1cbiAgICAgIGlkeCAgICAgICA9IC0xXG4gICAgICBmb3IgdmFsdWUgZnJvbSBnZXRfcmFuZG9tLndhbGtfdW5pcXVlIHsgcHJvZHVjZXIsIG46IDIwMCwgc2Vlbiwgb25fc3RhdHMsIG9uX2V4aGF1c3Rpb246ICdzdG9wJywgbWF4X3JvdW5kcywgfVxuICAgICAgICBpZHgrK1xuICAgICAgICAjIGRlYnVnICfOqWJyYnJfMTA1JywgaWR4LCBycHIgdmFsdWVcbiAgICAgICAgQGVxICggzqlicmJyXzEwNiA9IC0+IHZhbHVlICksIG1hdGNoZXJzWyBpZHggXVxuICAgICAgICByZXN1bHRzLnB1c2ggdmFsdWVcbiAgICAgICMgZGVidWcgJ86pYnJicl8xMDcnLCBycHIgcmVzdWx0cy5qb2luICcnXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGdldF9yYW5kb20gICAgICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCBvbl9zdGF0cywgfVxuICAgICAgbWF0Y2hlcnMgICAgICAgID0gJ3Bxa2VzdW55aGJld2djcnN6bHZvZnFzZXQnXG4gICAgICByZXN1bHRzICAgICAgICAgPSBbXVxuICAgICAgb25fc3RhdHMgICAgICAgID0gKCBzdGF0cyApID0+XG4gICAgICAgICMgaW5mbyAnzqlicmJyXzEwOCcsIHN0YXRzXG4gICAgICAgIEBlcSAoIM6pYnJicl8xMDkgPSAtPiBzdGF0cy5yb3VuZHMgKSwgNyBpZiBzdGF0cy5uYW1lIGlzICd3YWxrX3VuaXF1ZSdcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc2VlbiAgICAgID0gbmV3IFNldCgpXG4gICAgICBwdXJ2aWV3ICAgPSA1ICMjIyBOT1RFIG1heGltdW0gc2l6ZSBvZiAnd2luZG93JyB3aGVyZSB1bnFpdWVuZXNzIGlzIGd1YXJhbnRlZWQ7IGBzZWVuYCB3aWxsIG5vdCBncm93IGJleW9uZCB0aGlzICMjI1xuICAgICAgcHJvZHVjZXIgID0gLT4gZ2V0X3JhbmRvbS5jaHIgeyBtaW46ICdhJywgbWF4OiAneicsIG9uX3N0YXRzLCB9XG4gICAgICBpZHggICAgICAgPSAtMVxuICAgICAgZm9yIHZhbHVlIGZyb20gZ2V0X3JhbmRvbS53YWxrX3VuaXF1ZSB7IHByb2R1Y2VyLCBuOiAyNSwgc2VlbiwgcHVydmlldywgb25fc3RhdHMsIG9uX2V4aGF1c3Rpb246ICdzdG9wJywgfVxuICAgICAgICBpZHgrK1xuICAgICAgICAjIGRlYnVnICfOqWJyYnJfMTEwJywgaWR4LCBycHIgdmFsdWVcbiAgICAgICAgQGVxICggzqlicmJyXzExMSA9IC0+IHZhbHVlICksIG1hdGNoZXJzWyBpZHggXVxuICAgICAgICByZXN1bHRzLnB1c2ggdmFsdWVcbiAgICAgIEBlcSAoIM6pYnJicl8xMTIgPSAtPiBbIHNlZW4uLi4sIF0uam9pbiAnJyApLCAnb2Zxc2V0J1xuICAgICAgQGVxICggzqlicmJyXzExMyA9IC0+IHNlZW4uc2l6ZSApLCBwdXJ2aWV3ICsgMVxuICAgICAgIyBkZWJ1ZyAnzqlicmJyXzExNCcsIHJwciByZXN1bHRzLmpvaW4gJydcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZ2V0X3JhbmRvbSAgICAgID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIG9uX3N0YXRzLCB9XG4gICAgICBtYXRjaGVycyAgICAgICAgPSAnNDMyNTYxNDMyNTYxNDMyNTYxNDMyNTYxNCdcbiAgICAgIHJlc3VsdHMgICAgICAgICA9IFtdXG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgPT5cbiAgICAgICAgIyBpbmZvICfOqWJyYnJfMTE1Jywgc3RhdHNcbiAgICAgICAgQGVxICggzqlicmJyXzExNiA9IC0+IHN0YXRzLnJvdW5kcyApLCA2NCBpZiBzdGF0cy5uYW1lIGlzICd3YWxrX3VuaXF1ZSdcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc2VlbiAgICAgID0gbmV3IFNldCgpXG4gICAgICBwdXJ2aWV3ICAgPSA1ICMjIyBOT1RFIG1heGltdW0gc2l6ZSBvZiAnd2luZG93JyB3aGVyZSB1bnFpdWVuZXNzIGlzIGd1YXJhbnRlZWQ7IGBzZWVuYCB3aWxsIG5vdCBncm93IGJleW9uZCB0aGlzICMjI1xuICAgICAgcHJvZHVjZXIgID0gLT4gZ2V0X3JhbmRvbS5jaHIgeyBtaW46ICcxJywgbWF4OiAnNicsIG9uX3N0YXRzLCB9XG4gICAgICBpZHggICAgICAgPSAtMVxuICAgICAgZm9yIHZhbHVlIGZyb20gZ2V0X3JhbmRvbS53YWxrX3VuaXF1ZSB7IHByb2R1Y2VyLCBuOiAyNSwgc2VlbiwgcHVydmlldywgb25fc3RhdHMsIG9uX2V4aGF1c3Rpb246ICdzdG9wJywgfVxuICAgICAgICBpZHgrK1xuICAgICAgICAjIGRlYnVnICfOqWJyYnJfMTE3JywgaWR4LCBycHIgdmFsdWVcbiAgICAgICAgQGVxICggzqlicmJyXzExOCA9IC0+IHZhbHVlICksIG1hdGNoZXJzWyBpZHggXVxuICAgICAgICByZXN1bHRzLnB1c2ggdmFsdWVcbiAgICAgIEBlcSAoIM6pYnJicl8xMTkgPSAtPiBbIHNlZW4uLi4sIF0uam9pbiAnJyApLCAnMzI1NjE0J1xuICAgICAgQGVxICggzqlicmJyXzEyMCA9IC0+IHNlZW4uc2l6ZSApLCBwdXJ2aWV3ICsgMVxuICAgICAgIyBkZWJ1ZyAnzqlicmJyXzEyMScsIHJwciByZXN1bHRzLmpvaW4gJydcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZ2V0X3JhbmRvbSAgICAgID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIG9uX3N0YXRzLCB9XG4gICAgICBtYXRjaGVycyAgICAgICAgPSAnNTMyNjQ3MTMyNjU3NDMyMTY1NDcyMzY1MTcyNDM2NTEyNzM2NTQxMjM2NTQxJ1xuICAgICAgcmVzdWx0cyAgICAgICAgID0gW11cbiAgICAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSA9PlxuICAgICAgICAjIGluZm8gJ86pYnJicl8xMjInLCBzdGF0c1xuICAgICAgICBAZXEgKCDOqWJyYnJfMTIzID0gLT4gc3RhdHMucm91bmRzICksIDEyOSBpZiBzdGF0cy5uYW1lIGlzICd3YWxrX3VuaXF1ZSdcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc2VlbiAgICAgID0gbmV3IFNldCgpXG4gICAgICBwdXJ2aWV3ICAgPSA1ICMjIyBOT1RFIG1heGltdW0gc2l6ZSBvZiAnd2luZG93JyB3aGVyZSB1bnFpdWVuZXNzIGlzIGd1YXJhbnRlZWQ7IGBzZWVuYCB3aWxsIG5vdCBncm93IGJleW9uZCB0aGlzICMjI1xuICAgICAgcHJvZHVjZXIgID0gLT4gZ2V0X3JhbmRvbS5jaHIgeyBtaW46ICcxJywgbWF4OiAnNycsIG9uX3N0YXRzLCB9XG4gICAgICBpZHggICAgICAgPSAtMVxuICAgICAgZm9yIHZhbHVlIGZyb20gZ2V0X3JhbmRvbS53YWxrX3VuaXF1ZSB7IHByb2R1Y2VyLCBuOiA0NSwgc2VlbiwgcHVydmlldywgb25fc3RhdHMsIG9uX2V4aGF1c3Rpb246ICdzdG9wJywgfVxuICAgICAgICBpZHgrK1xuICAgICAgICAjIGRlYnVnICfOqWJyYnJfMTI0JywgaWR4LCBycHIgdmFsdWVcbiAgICAgICAgQGVxICggzqlicmJyXzEyNSA9IC0+IHZhbHVlICksIG1hdGNoZXJzWyBpZHggXVxuICAgICAgICByZXN1bHRzLnB1c2ggdmFsdWVcbiAgICAgIEBlcSAoIM6pYnJicl8xMjYgPSAtPiBbIHNlZW4uLi4sIF0uam9pbiAnJyApLCAnMjM2NTQxJ1xuICAgICAgQGVxICggzqlicmJyXzEyNyA9IC0+IHNlZW4uc2l6ZSApLCBwdXJ2aWV3ICsgMVxuICAgICAgIyBkZWJ1ZyAnzqlicmJyXzEyOCcsIHJwciByZXN1bHRzLmpvaW4gJydcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc3RhdHM6IC0+XG4gICAgeyBHZXRfcmFuZG9tLFxuICAgICAgaW50ZXJuYWxzLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2dldF9yYW5kb20oKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHNlbnRpbmVsICAgICAgPSBTeW1ib2wgJ3NlbnRpbmVsJ1xuICAgICAgb25fZXhoYXVzdGlvbiA9IC0+IHNlbnRpbmVsXG4gICAgICBzdGF0cyA9IG5ldyBpbnRlcm5hbHMuU3RhdHMgeyBuYW1lOiAnc29tZXRoaW5nJywgb25fZXhoYXVzdGlvbiwgfVxuICAgICAgQGVxICAgICAoIM6pYnJicl8xMjkgPSAtPiBzdGF0cy5uYW1lICAgICAgICAgICApLCAnc29tZXRoaW5nJ1xuICAgICAgQGVxICAgICAoIM6pYnJicl8xMzAgPSAtPiBzdGF0cy5tYXhfcm91bmRzICAgICApLCBpbnRlcm5hbHMubWF4X3JvdW5kc1xuICAgICAgQGVxICAgICAoIM6pYnJicl8xMzEgPSAtPiBzdGF0cy5yb3VuZHMgICAgICAgICApLCAwXG4gICAgICBAdGhyb3dzICggzqlicmJyXzEzMiA9IC0+IHN0YXRzLnJvdW5kcysrICAgICAgICksIC9DYW5ub3Qgc2V0IHByb3BlcnR5L1xuICAgICAgQGVxICAgICAoIM6pYnJicl8xMzMgPSAtPiBzdGF0cy5yZXRyeSgpICAgICAgICApLCBpbnRlcm5hbHMuZ29fb25cbiAgICAgIEBlcSAgICAgKCDOqWJyYnJfMTM0ID0gLT4gc3RhdHMucm91bmRzICAgICAgICAgKSwgMVxuICAgICAgc3RhdHMuX3JvdW5kcyA9IGludGVybmFscy5tYXhfcm91bmRzIC0gMVxuICAgICAgIyBkZWJ1ZyAnzqlicmJyXzEzNScsIHN0YXRzXG4gICAgICAjIGRlYnVnICfOqWJyYnJfMTM2Jywgc3RhdHMucm91bmRzXG4gICAgICAjIGRlYnVnICfOqWJyYnJfMTM3JywgaW50ZXJuYWxzLm1heF9yb3VuZHNcbiAgICAgICMgZGVidWcgJ86pYnJicl8xMzgnLCBzdGF0cy5tYXhfcm91bmRzXG4gICAgICBAZXEgKCDOqWJyYnJfMTM5ID0gLT4gc3RhdHMucmV0cnkoKSApLCBpbnRlcm5hbHMuZ29fb25cbiAgICAgIEBlcSAoIM6pYnJicl8xNDAgPSAtPiBzdGF0cy5yZXRyeSgpICksIHNlbnRpbmVsXG4gICAgICBAZXEgKCDOqWJyYnJfMTQxID0gLT4gc3RhdHMucmV0cnkoKSApLCBzZW50aW5lbFxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBvbl9leGhhdXN0aW9uID0gdW5kZWZpbmVkXG4gICAgICBzdGF0cyA9IG5ldyBpbnRlcm5hbHMuU3RhdHMgeyBuYW1lOiAnc29tZXRoaW5nJywgb25fZXhoYXVzdGlvbiwgfVxuICAgICAgc3RhdHMuX3JvdW5kcyA9IGludGVybmFscy5tYXhfcm91bmRzIC0gMVxuICAgICAgQGVxICAgICAoIM6pYnJicl8xNDIgPSAtPiBzdGF0cy5yZXRyeSgpICksIGludGVybmFscy5nb19vblxuICAgICAgQHRocm93cyAoIM6pYnJicl8xNDMgPSAtPiBzdGF0cy5yZXRyeSgpICksIC9leGhhdXN0ZWQvXG4gICAgICBAdGhyb3dzICggzqlicmJyXzE0NCA9IC0+IHN0YXRzLnJldHJ5KCkgKSwgL2V4aGF1c3RlZC9cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgb25fZXhoYXVzdGlvbiA9IG51bGxcbiAgICAgIHN0YXRzID0gbmV3IGludGVybmFscy5TdGF0cyB7IG5hbWU6ICdzb21ldGhpbmcnLCBvbl9leGhhdXN0aW9uLCB9XG4gICAgICBzdGF0cy5fcm91bmRzID0gaW50ZXJuYWxzLm1heF9yb3VuZHMgLSAxXG4gICAgICBAZXEgICAgICggzqlicmJyXzE0NSA9IC0+IHN0YXRzLnJldHJ5KCkgKSwgaW50ZXJuYWxzLmdvX29uXG4gICAgICBAdGhyb3dzICggzqlicmJyXzE0NiA9IC0+IHN0YXRzLnJldHJ5KCkgKSwgL2V4aGF1c3RlZC9cbiAgICAgIEB0aHJvd3MgKCDOqWJyYnJfMTQ3ID0gLT4gc3RhdHMucmV0cnkoKSApLCAvZXhoYXVzdGVkL1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBvbl9leGhhdXN0aW9uID0gJ2Vycm9yJ1xuICAgICAgc3RhdHMgPSBuZXcgaW50ZXJuYWxzLlN0YXRzIHsgbmFtZTogJ3NvbWV0aGluZycsIG9uX2V4aGF1c3Rpb24sIH1cbiAgICAgIHN0YXRzLl9yb3VuZHMgPSBpbnRlcm5hbHMubWF4X3JvdW5kcyAtIDFcbiAgICAgIEBlcSAgICAgKCDOqWJyYnJfMTQ4ID0gLT4gc3RhdHMucmV0cnkoKSApLCBpbnRlcm5hbHMuZ29fb25cbiAgICAgIEB0aHJvd3MgKCDOqWJyYnJfMTQ5ID0gLT4gc3RhdHMucmV0cnkoKSApLCAvZXhoYXVzdGVkL1xuICAgICAgQHRocm93cyAoIM6pYnJicl8xNTAgPSAtPiBzdGF0cy5yZXRyeSgpICksIC9leGhhdXN0ZWQvXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHNlbnRpbmVsICAgICAgPSBTeW1ib2wgJ3NlbnRpbmVsJ1xuICAgICAgc3RhdHNfcmVzdWx0ICA9IG51bGxcbiAgICAgIG9uX2V4aGF1c3Rpb24gPSAtPiBzZW50aW5lbFxuICAgICAgb25fc3RhdHMgICAgICA9IC0+IHNlbnRpbmVsXG4gICAgICBtYXhfcm91bmRzICAgPSAzXG4gICAgICBzdGF0cyA9IG5ldyBpbnRlcm5hbHMuU3RhdHMgeyBuYW1lOiAnc29tZXRoaW5nJywgb25fZXhoYXVzdGlvbiwgb25fc3RhdHMsIG1heF9yb3VuZHMsIH1cbiAgICAgIEBlcSAgICAgKCDOqWJyYnJfMTUxID0gLT4gc3RhdHMucm91bmRzICksIDBcbiAgICAgIEBlcSAgICAgKCDOqWJyYnJfMTUyID0gLT4gc3RhdHMucmV0cnkoKSApLCBpbnRlcm5hbHMuZ29fb25cbiAgICAgIEBlcSAgICAgKCDOqWJyYnJfMTUzID0gLT4gc3RhdHMucm91bmRzICksIDFcbiAgICAgIEBlcSAgICAgKCDOqWJyYnJfMTU0ID0gLT4gc3RhdHMucmV0cnkoKSApLCBpbnRlcm5hbHMuZ29fb25cbiAgICAgIEBlcSAgICAgKCDOqWJyYnJfMTU1ID0gLT4gc3RhdHMucm91bmRzICksIDJcbiAgICAgIEBlcSAgICAgKCDOqWJyYnJfMTU2ID0gLT4gc3RhdHMucmV0cnkoKSApLCBpbnRlcm5hbHMuZ29fb25cbiAgICAgIEBlcSAgICAgKCDOqWJyYnJfMTU3ID0gLT4gc3RhdHMucm91bmRzICksIDNcbiAgICAgIEBlcSAgICAgKCDOqWJyYnJfMTU4ID0gLT4gc3RhdHMucmV0cnkoKSApLCBzZW50aW5lbFxuICAgICAgQGVxICAgICAoIM6pYnJicl8xNTkgPSAtPiBzdGF0cy5maW5pc2ggJ3ZhbHVlJyApLCAndmFsdWUnXG4gICAgICBAdGhyb3dzICggzqlicmJyXzE2MCA9IC0+IHN0YXRzLmZpbmlzaCAndmFsdWUnICksIC9maW5pc2hlZC9cbiAgICAgIEB0aHJvd3MgKCDOqWJyYnJfMTYxID0gLT4gc3RhdHMucmV0cnkoKSApLCAvZmluaXNoZWQvXG4gICAgICBAdGhyb3dzICggzqlicmJyXzE2MiA9IC0+IHN0YXRzLnJldHJ5KCkgKSwgL2ZpbmlzaGVkL1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZXF1aXJlX2Zvcm1hdF9zdGFja19wYXJzZV9saW5lOiAtPlxuICAgIHsgRm9ybWF0X3N0YWNrLCAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9mb3JtYXRfc3RhY2soKVxuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHByb2Jlc19hbmRfbWF0Y2hlcnMgPSBbXG4gICAgICBbIFwiXCJcImF0IDxhbm9ueW1vdXM+ICgvcGF0aC90by9oZW5naXN0LU5HL2Rldi9icmljYWJyYWMvc3JjL3Rlc3QtZGJyaWMuY29mZmVlOjI5MDoxMSlcIlwiXCIsICAgICAgICAgICAgICB7IGNhbGxlZTogJzxhbm9ueW1vdXM+JywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogJy9wYXRoL3RvL2hlbmdpc3QtTkcvZGV2L2JyaWNhYnJhYy9zcmMvdGVzdC1kYnJpYy5jb2ZmZWUnLCBmb2xkZXJfcGF0aDogJy9wYXRoL3RvL2hlbmdpc3QtTkcvZGV2L2JyaWNhYnJhYy9zcmMvJywgIGZpbGVfbmFtZTogJ3Rlc3QtZGJyaWMuY29mZmVlJywgICAgICAgIGxpbmVfbnI6IDI5MCwgIGNvbHVtbl9ucjogMTEsIHR5cGU6ICdtYWluJywgICAgICAgfSwgXVxuICAgICAgWyBcIlwiXCJhdCBPYmplY3QuPGFub255bW91cz4gKC9wYXRoL3RvL2hlbmdpc3QtTkcvZGV2L2JyaWNhYnJhYy9zcmMvdGVzdC1kYnJpYy5jb2ZmZWU6MjQ1OjQxKVwiXCJcIiwgICAgICAgeyBjYWxsZWU6ICdPYmplY3QuPGFub255bW91cz4nLCAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6ICcvcGF0aC90by9oZW5naXN0LU5HL2Rldi9icmljYWJyYWMvc3JjL3Rlc3QtZGJyaWMuY29mZmVlJywgZm9sZGVyX3BhdGg6ICcvcGF0aC90by9oZW5naXN0LU5HL2Rldi9icmljYWJyYWMvc3JjLycsICBmaWxlX25hbWU6ICd0ZXN0LWRicmljLmNvZmZlZScsICAgICAgICBsaW5lX25yOiAyNDUsICBjb2x1bW5fbnI6IDQxLCB0eXBlOiAnbWFpbicsICAgICAgIH0sIF1cbiAgICAgIFsgXCJcIlwiYXQgT2JqZWN0Ljxhbm9ueW1vdXM+ICgvcGF0aC90by9oZW5naXN0LU5HL2Rldi9icmljYWJyYWMvc3JjL3Rlc3QtZGJyaWMuY29mZmVlOjM6MSlcIlwiXCIsICAgICAgICAgIHsgY2FsbGVlOiAnT2JqZWN0Ljxhbm9ueW1vdXM+JywgICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiAnL3BhdGgvdG8vaGVuZ2lzdC1ORy9kZXYvYnJpY2FicmFjL3NyYy90ZXN0LWRicmljLmNvZmZlZScsIGZvbGRlcl9wYXRoOiAnL3BhdGgvdG8vaGVuZ2lzdC1ORy9kZXYvYnJpY2FicmFjL3NyYy8nLCAgZmlsZV9uYW1lOiAndGVzdC1kYnJpYy5jb2ZmZWUnLCAgICAgICAgbGluZV9ucjogMywgICAgY29sdW1uX25yOiAxLCAgdHlwZTogJ21haW4nLCAgICAgICB9LCBdXG4gICAgICBbIFwiXCJcImF0IGRvX3NvbWV0aGluZyAoLi4vd2hhdGV2ZXIvc3JjL3Rlc3QtZGJyaWMuY29mZmVlOjM6MSlcIlwiXCIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNhbGxlZTogJ2RvX3NvbWV0aGluZycsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogJy4uL3doYXRldmVyL3NyYy90ZXN0LWRicmljLmNvZmZlZScsICAgICAgICAgICAgICAgICAgICAgICBmb2xkZXJfcGF0aDogJy4uL3doYXRldmVyL3NyYy8nLCAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVfbmFtZTogJ3Rlc3QtZGJyaWMuY29mZmVlJywgICAgICAgIGxpbmVfbnI6IDMsICAgIGNvbHVtbl9ucjogMSwgIHR5cGU6ICdleHRlcm5hbCcsICAgfSwgXVxuICAgICAgWyBcIlwiXCJhdCBkb19zb21ldGhpbmcgKG5vZGVfbW9kdWxlcy90ZXN0LWRicmljLmNvZmZlZTozOjEpXCJcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjYWxsZWU6ICdkb19zb21ldGhpbmcnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6ICdub2RlX21vZHVsZXMvdGVzdC1kYnJpYy5jb2ZmZWUnLCAgICAgICAgICAgICAgICAgICAgICAgICAgZm9sZGVyX3BhdGg6ICdub2RlX21vZHVsZXMvJywgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlX25hbWU6ICd0ZXN0LWRicmljLmNvZmZlZScsICAgICAgICBsaW5lX25yOiAzLCAgICBjb2x1bW5fbnI6IDEsICB0eXBlOiAnZGVwZW5kZW5jeScsIH0sIF1cbiAgICAgIFsgXCJcIlwiYXQgTW9kdWxlLl9jb21waWxlIChub2RlOmludGVybmFsL21vZHVsZXMvY2pzL2xvYWRlcjoxNzM4OjE0KVwiXCJcIiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2FsbGVlOiAnTW9kdWxlLl9jb21waWxlJywgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiAnbm9kZTppbnRlcm5hbC9tb2R1bGVzL2Nqcy9sb2FkZXInLCAgICAgICAgICAgICAgICAgICAgICAgIGZvbGRlcl9wYXRoOiAnbm9kZTppbnRlcm5hbC9tb2R1bGVzL2Nqcy8nLCAgICAgICAgICAgICAgZmlsZV9uYW1lOiAnbG9hZGVyJywgICAgICAgICAgICAgICAgICAgbGluZV9ucjogMTczOCwgY29sdW1uX25yOiAxNCwgdHlwZTogJ2ludGVybmFsJywgICB9LCBdXG4gICAgICBbIFwiXCJcImF0IE9iamVjdC4uanMgKG5vZGU6aW50ZXJuYWwvbW9kdWxlcy9janMvbG9hZGVyOjE4NzE6MTApXCJcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNhbGxlZTogJ09iamVjdC4uanMnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogJ25vZGU6aW50ZXJuYWwvbW9kdWxlcy9janMvbG9hZGVyJywgICAgICAgICAgICAgICAgICAgICAgICBmb2xkZXJfcGF0aDogJ25vZGU6aW50ZXJuYWwvbW9kdWxlcy9janMvJywgICAgICAgICAgICAgIGZpbGVfbmFtZTogJ2xvYWRlcicsICAgICAgICAgICAgICAgICAgIGxpbmVfbnI6IDE4NzEsIGNvbHVtbl9ucjogMTAsIHR5cGU6ICdpbnRlcm5hbCcsICAgfSwgXVxuICAgICAgWyBcIlwiXCJhdCBNb2R1bGUubG9hZCAobm9kZTppbnRlcm5hbC9tb2R1bGVzL2Nqcy9sb2FkZXI6MTQ3MDozMilcIlwiXCIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjYWxsZWU6ICdNb2R1bGUubG9hZCcsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6ICdub2RlOmludGVybmFsL21vZHVsZXMvY2pzL2xvYWRlcicsICAgICAgICAgICAgICAgICAgICAgICAgZm9sZGVyX3BhdGg6ICdub2RlOmludGVybmFsL21vZHVsZXMvY2pzLycsICAgICAgICAgICAgICBmaWxlX25hbWU6ICdsb2FkZXInLCAgICAgICAgICAgICAgICAgICBsaW5lX25yOiAxNDcwLCBjb2x1bW5fbnI6IDMyLCB0eXBlOiAnaW50ZXJuYWwnLCAgIH0sIF1cbiAgICAgIFsgXCJcIlwiYXQgTW9kdWxlLl9sb2FkIChub2RlOmludGVybmFsL21vZHVsZXMvY2pzL2xvYWRlcjoxMjkwOjEyKVwiXCJcIiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2FsbGVlOiAnTW9kdWxlLl9sb2FkJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiAnbm9kZTppbnRlcm5hbC9tb2R1bGVzL2Nqcy9sb2FkZXInLCAgICAgICAgICAgICAgICAgICAgICAgIGZvbGRlcl9wYXRoOiAnbm9kZTppbnRlcm5hbC9tb2R1bGVzL2Nqcy8nLCAgICAgICAgICAgICAgZmlsZV9uYW1lOiAnbG9hZGVyJywgICAgICAgICAgICAgICAgICAgbGluZV9ucjogMTI5MCwgY29sdW1uX25yOiAxMiwgdHlwZTogJ2ludGVybmFsJywgICB9LCBdXG4gICAgICBbIFwiXCJcImF0IFRyYWNpbmdDaGFubmVsLnRyYWNlU3luYyAobm9kZTpkaWFnbm9zdGljc19jaGFubmVsOjMyMjoxNClcIlwiXCIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNhbGxlZTogJ1RyYWNpbmdDaGFubmVsLnRyYWNlU3luYycsICAgICAgICAgICAgICAgICAgcGF0aDogJ25vZGU6ZGlhZ25vc3RpY3NfY2hhbm5lbCcsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2xkZXJfcGF0aDogJycsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVfbmFtZTogJ25vZGU6ZGlhZ25vc3RpY3NfY2hhbm5lbCcsIGxpbmVfbnI6IDMyMiwgIGNvbHVtbl9ucjogMTQsIHR5cGU6ICdpbnRlcm5hbCcsICAgfSwgXVxuICAgICAgWyBcIlwiXCJhdCB3cmFwTW9kdWxlTG9hZCAobm9kZTppbnRlcm5hbC9tb2R1bGVzL2Nqcy9sb2FkZXI6MjM4OjI0KVwiXCJcIiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjYWxsZWU6ICd3cmFwTW9kdWxlTG9hZCcsICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6ICdub2RlOmludGVybmFsL21vZHVsZXMvY2pzL2xvYWRlcicsICAgICAgICAgICAgICAgICAgICAgICAgZm9sZGVyX3BhdGg6ICdub2RlOmludGVybmFsL21vZHVsZXMvY2pzLycsICAgICAgICAgICAgICBmaWxlX25hbWU6ICdsb2FkZXInLCAgICAgICAgICAgICAgICAgICBsaW5lX25yOiAyMzgsICBjb2x1bW5fbnI6IDI0LCB0eXBlOiAnaW50ZXJuYWwnLCAgIH0sIF1cbiAgICAgIFsgXCJcIlwiYXQgTW9kdWxlLmV4ZWN1dGVVc2VyRW50cnlQb2ludCBbYXMgcnVuTWFpbl0gKG5vZGU6aW50ZXJuYWwvbW9kdWxlcy9ydW5fbWFpbjoxNTQ6NSlcIlwiXCIsICAgICAgICAgIHsgY2FsbGVlOiAnTW9kdWxlLmV4ZWN1dGVVc2VyRW50cnlQb2ludCBbYXMgcnVuTWFpbl0nLCBwYXRoOiAnbm9kZTppbnRlcm5hbC9tb2R1bGVzL3J1bl9tYWluJywgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbGRlcl9wYXRoOiAnbm9kZTppbnRlcm5hbC9tb2R1bGVzLycsICAgICAgICAgICAgICAgICAgZmlsZV9uYW1lOiAncnVuX21haW4nLCAgICAgICAgICAgICAgICAgbGluZV9ucjogMTU0LCAgY29sdW1uX25yOiA1LCAgdHlwZTogJ2ludGVybmFsJywgICB9LCBdXG4gICAgICBbIFwiXCJcImF0IG5vZGU6aW50ZXJuYWwvbWFpbi9ydW5fbWFpbl9tb2R1bGU6MzM6NDdcIlwiXCIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNhbGxlZTogJ1thbm9ueW1vdXNdJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogJ25vZGU6aW50ZXJuYWwvbWFpbi9ydW5fbWFpbl9tb2R1bGUnLCAgICAgICAgICAgICAgICAgICAgICBmb2xkZXJfcGF0aDogJ25vZGU6aW50ZXJuYWwvbWFpbi8nLCAgICAgICAgICAgICAgICAgICAgIGZpbGVfbmFtZTogJ3J1bl9tYWluX21vZHVsZScsICAgICAgICAgIGxpbmVfbnI6IDMzLCAgIGNvbHVtbl9ucjogNDcsIHR5cGU6ICdpbnRlcm5hbCcsICAgfSwgXVxuICAgICAgWyBcIlwiXCJzb21lIG90aGVyIGZvcm1hdFwiXCJcIiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjYWxsZWU6ICcnLCBwYXRoOiAnJywgZm9sZGVyX3BhdGg6ICdzb21lIG90aGVyIGZvcm1hdCcsIGZpbGVfbmFtZTogJycsIGxpbmVfbnI6ICcnLCBjb2x1bW5fbnI6ICcnLCB0eXBlOiAndW5wYXJzYWJsZScgfSwgXVxuICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZm9ybWF0X3N0YWNrID0gbmV3IEZvcm1hdF9zdGFjayB7IHJlbGF0aXZlOiBmYWxzZSwgfVxuICAgIEBlcSAoIM6pYnJicl8xNjMgPSAtPiB0eXBlX29mIGZvcm1hdF9zdGFjay5wYXJzZV9saW5lICksICdmdW5jdGlvbidcbiAgICBmb3IgWyBwcm9iZSwgbWF0Y2hlciwgXSBpbiBwcm9iZXNfYW5kX21hdGNoZXJzXG4gICAgICBAZXEgKCDOqWJyYnJfMTY0ID0gLT4gZm9ybWF0X3N0YWNrLnBhcnNlX2xpbmUgcHJvYmUgKSwgbWF0Y2hlclxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQHRocm93cyAoIM6pYnJicl8xNjUgPSAtPiBmb3JtYXRfc3RhY2sucGFyc2VfbGluZSA2NzMgICAgICAgICAgICAgICksIC9leHBlY3RlZCBhIHRleHQsIGdvdCBhIGZsb2F0L1xuICAgIEB0aHJvd3MgKCDOqWJyYnJfMTY2ID0gLT4gZm9ybWF0X3N0YWNrLnBhcnNlX2xpbmUgZmFsc2UgICAgICAgICAgICApLCAvZXhwZWN0ZWQgYSB0ZXh0LCBnb3QgYSBib29sZWFuL1xuICAgIEB0aHJvd3MgKCDOqWJyYnJfMTY3ID0gLT4gZm9ybWF0X3N0YWNrLnBhcnNlX2xpbmUgU3ltYm9sICdhYmMnICAgICApLCAvZXhwZWN0ZWQgYSB0ZXh0LCBnb3QgYSBzeW1ib2wvXG4gICAgQHRocm93cyAoIM6pYnJicl8xNjggPSAtPiBmb3JtYXRfc3RhY2sucGFyc2VfbGluZSBcImxpbmUgMVxcbmxpbmUgMlwiICksIC9leHBlY3RlZCBhIHNpbmdsZSBsaW5lLCBnb3QgYSB0ZXh0IHdpdGggbGluZSBicmVha3MvXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVxdWlyZV9mb3JtYXRfc3RhY2tfcGFyc2VfbGluZV9yZWxhdGl2ZTogLT5cbiAgICB7IGZvcm1hdF9zdGFjaywgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZm9ybWF0X3N0YWNrKClcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwcm9iZXNfYW5kX21hdGNoZXJzID0gW1xuICAgICAgWyBcIlwiXCJhdCA8YW5vbnltb3VzPiAoI3twcm9jZXNzLmN3ZCgpfS9kZXYvYnJpY2FicmFjL3NyYy90ZXN0LWRicmljLmNvZmZlZToyOTA6MTEpXCJcIlwiLCAgICAgICAgICAgICAgICAgeyBjYWxsZWU6ICc8YW5vbnltb3VzPicsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6ICdkZXYvYnJpY2FicmFjL3NyYy90ZXN0LWRicmljLmNvZmZlZScsICAgICAgICAgICAgICAgICAgICAgZm9sZGVyX3BhdGg6ICdkZXYvYnJpY2FicmFjL3NyYy8nLCAgZmlsZV9uYW1lOiAndGVzdC1kYnJpYy5jb2ZmZWUnLCAgICAgICAgbGluZV9ucjogMjkwLCAgY29sdW1uX25yOiAxMSwgdHlwZTogJ21haW4nLCAgICAgICB9LCBdXG4gICAgICBbIFwiXCJcImF0IE9iamVjdC48YW5vbnltb3VzPiAoI3twcm9jZXNzLmN3ZCgpfS9kZXYvYnJpY2FicmFjL3NyYy90ZXN0LWRicmljLmNvZmZlZToyNDU6NDEpXCJcIlwiLCAgICAgICAgICB7IGNhbGxlZTogJ09iamVjdC48YW5vbnltb3VzPicsICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogJ2Rldi9icmljYWJyYWMvc3JjL3Rlc3QtZGJyaWMuY29mZmVlJywgICAgICAgICAgICAgICAgICAgICBmb2xkZXJfcGF0aDogJ2Rldi9icmljYWJyYWMvc3JjLycsICBmaWxlX25hbWU6ICd0ZXN0LWRicmljLmNvZmZlZScsICAgICAgICBsaW5lX25yOiAyNDUsICBjb2x1bW5fbnI6IDQxLCB0eXBlOiAnbWFpbicsICAgICAgIH0sIF1cbiAgICAgIFsgXCJcIlwiYXQgT2JqZWN0Ljxhbm9ueW1vdXM+ICgje3Byb2Nlc3MuY3dkKCl9L2Rldi9icmljYWJyYWMvc3JjL3Rlc3QtZGJyaWMuY29mZmVlOjM6MSlcIlwiXCIsICAgICAgICAgICAgIHsgY2FsbGVlOiAnT2JqZWN0Ljxhbm9ueW1vdXM+JywgICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiAnZGV2L2JyaWNhYnJhYy9zcmMvdGVzdC1kYnJpYy5jb2ZmZWUnLCAgICAgICAgICAgICAgICAgICAgIGZvbGRlcl9wYXRoOiAnZGV2L2JyaWNhYnJhYy9zcmMvJywgIGZpbGVfbmFtZTogJ3Rlc3QtZGJyaWMuY29mZmVlJywgICAgICAgIGxpbmVfbnI6IDMsICAgIGNvbHVtbl9ucjogMSwgIHR5cGU6ICdtYWluJywgICAgICAgfSwgXVxuICAgICAgWyBcIlwiXCJhdCBkb19zb21ldGhpbmcgKC4uL3doYXRldmVyL3NyYy90ZXN0LWRicmljLmNvZmZlZTozOjEpXCJcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjYWxsZWU6ICdkb19zb21ldGhpbmcnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6ICcuLi93aGF0ZXZlci9zcmMvdGVzdC1kYnJpYy5jb2ZmZWUnLCAgICAgICAgICAgICAgICAgICAgICAgZm9sZGVyX3BhdGg6ICcuLi93aGF0ZXZlci9zcmMvJywgICAgICAgICAgICAgICAgICAgICAgICBmaWxlX25hbWU6ICd0ZXN0LWRicmljLmNvZmZlZScsICAgICAgICBsaW5lX25yOiAzLCAgICBjb2x1bW5fbnI6IDEsICB0eXBlOiAnZXh0ZXJuYWwnLCAgIH0sIF1cbiAgICAgIFsgXCJcIlwiYXQgZG9fc29tZXRoaW5nIChub2RlX21vZHVsZXMvdGVzdC1kYnJpYy5jb2ZmZWU6MzoxKVwiXCJcIiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNhbGxlZTogJ2RvX3NvbWV0aGluZycsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogJ25vZGVfbW9kdWxlcy90ZXN0LWRicmljLmNvZmZlZScsICAgICAgICAgICAgICAgICAgICAgICAgZm9sZGVyX3BhdGg6ICdub2RlX21vZHVsZXMvJywgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZV9uYW1lOiAndGVzdC1kYnJpYy5jb2ZmZWUnLCAgICAgICAgbGluZV9ucjogMywgICAgY29sdW1uX25yOiAxLCAgdHlwZTogJ2RlcGVuZGVuY3knLCB9LCBdXG4gICAgICBbIFwiXCJcImF0IE1vZHVsZS5fY29tcGlsZSAobm9kZTppbnRlcm5hbC9tb2R1bGVzL2Nqcy9sb2FkZXI6MTczODoxNClcIlwiXCIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNhbGxlZTogJ01vZHVsZS5fY29tcGlsZScsICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogJ25vZGU6aW50ZXJuYWwvbW9kdWxlcy9janMvbG9hZGVyJywgICAgICAgICAgICAgICAgICAgICAgICBmb2xkZXJfcGF0aDogJ25vZGU6aW50ZXJuYWwvbW9kdWxlcy9janMvJywgICAgICAgICAgICAgIGZpbGVfbmFtZTogJ2xvYWRlcicsICAgICAgICAgICAgICAgICAgIGxpbmVfbnI6IDE3MzgsIGNvbHVtbl9ucjogMTQsIHR5cGU6ICdpbnRlcm5hbCcsICAgfSwgXVxuICAgICAgWyBcIlwiXCJhdCBPYmplY3QuLmpzIChub2RlOmludGVybmFsL21vZHVsZXMvY2pzL2xvYWRlcjoxODcxOjEwKVwiXCJcIiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjYWxsZWU6ICdPYmplY3QuLmpzJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6ICdub2RlOmludGVybmFsL21vZHVsZXMvY2pzL2xvYWRlcicsICAgICAgICAgICAgICAgICAgICAgICAgZm9sZGVyX3BhdGg6ICdub2RlOmludGVybmFsL21vZHVsZXMvY2pzLycsICAgICAgICAgICAgICBmaWxlX25hbWU6ICdsb2FkZXInLCAgICAgICAgICAgICAgICAgICBsaW5lX25yOiAxODcxLCBjb2x1bW5fbnI6IDEwLCB0eXBlOiAnaW50ZXJuYWwnLCAgIH0sIF1cbiAgICAgIFsgXCJcIlwiYXQgTW9kdWxlLmxvYWQgKG5vZGU6aW50ZXJuYWwvbW9kdWxlcy9janMvbG9hZGVyOjE0NzA6MzIpXCJcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2FsbGVlOiAnTW9kdWxlLmxvYWQnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiAnbm9kZTppbnRlcm5hbC9tb2R1bGVzL2Nqcy9sb2FkZXInLCAgICAgICAgICAgICAgICAgICAgICAgIGZvbGRlcl9wYXRoOiAnbm9kZTppbnRlcm5hbC9tb2R1bGVzL2Nqcy8nLCAgICAgICAgICAgICAgZmlsZV9uYW1lOiAnbG9hZGVyJywgICAgICAgICAgICAgICAgICAgbGluZV9ucjogMTQ3MCwgY29sdW1uX25yOiAzMiwgdHlwZTogJ2ludGVybmFsJywgICB9LCBdXG4gICAgICBbIFwiXCJcImF0IE1vZHVsZS5fbG9hZCAobm9kZTppbnRlcm5hbC9tb2R1bGVzL2Nqcy9sb2FkZXI6MTI5MDoxMilcIlwiXCIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNhbGxlZTogJ01vZHVsZS5fbG9hZCcsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogJ25vZGU6aW50ZXJuYWwvbW9kdWxlcy9janMvbG9hZGVyJywgICAgICAgICAgICAgICAgICAgICAgICBmb2xkZXJfcGF0aDogJ25vZGU6aW50ZXJuYWwvbW9kdWxlcy9janMvJywgICAgICAgICAgICAgIGZpbGVfbmFtZTogJ2xvYWRlcicsICAgICAgICAgICAgICAgICAgIGxpbmVfbnI6IDEyOTAsIGNvbHVtbl9ucjogMTIsIHR5cGU6ICdpbnRlcm5hbCcsICAgfSwgXVxuICAgICAgWyBcIlwiXCJhdCBUcmFjaW5nQ2hhbm5lbC50cmFjZVN5bmMgKG5vZGU6ZGlhZ25vc3RpY3NfY2hhbm5lbDozMjI6MTQpXCJcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjYWxsZWU6ICdUcmFjaW5nQ2hhbm5lbC50cmFjZVN5bmMnLCAgICAgICAgICAgICAgICAgIHBhdGg6ICdub2RlOmRpYWdub3N0aWNzX2NoYW5uZWwnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9sZGVyX3BhdGg6ICcnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlX25hbWU6ICdub2RlOmRpYWdub3N0aWNzX2NoYW5uZWwnLCBsaW5lX25yOiAzMjIsICBjb2x1bW5fbnI6IDE0LCB0eXBlOiAnaW50ZXJuYWwnLCAgIH0sIF1cbiAgICAgIFsgXCJcIlwiYXQgd3JhcE1vZHVsZUxvYWQgKG5vZGU6aW50ZXJuYWwvbW9kdWxlcy9janMvbG9hZGVyOjIzODoyNClcIlwiXCIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2FsbGVlOiAnd3JhcE1vZHVsZUxvYWQnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiAnbm9kZTppbnRlcm5hbC9tb2R1bGVzL2Nqcy9sb2FkZXInLCAgICAgICAgICAgICAgICAgICAgICAgIGZvbGRlcl9wYXRoOiAnbm9kZTppbnRlcm5hbC9tb2R1bGVzL2Nqcy8nLCAgICAgICAgICAgICAgZmlsZV9uYW1lOiAnbG9hZGVyJywgICAgICAgICAgICAgICAgICAgbGluZV9ucjogMjM4LCAgY29sdW1uX25yOiAyNCwgdHlwZTogJ2ludGVybmFsJywgICB9LCBdXG4gICAgICBbIFwiXCJcImF0IE1vZHVsZS5leGVjdXRlVXNlckVudHJ5UG9pbnQgW2FzIHJ1bk1haW5dIChub2RlOmludGVybmFsL21vZHVsZXMvcnVuX21haW46MTU0OjUpXCJcIlwiLCAgICAgICAgICB7IGNhbGxlZTogJ01vZHVsZS5leGVjdXRlVXNlckVudHJ5UG9pbnQgW2FzIHJ1bk1haW5dJywgcGF0aDogJ25vZGU6aW50ZXJuYWwvbW9kdWxlcy9ydW5fbWFpbicsICAgICAgICAgICAgICAgICAgICAgICAgICBmb2xkZXJfcGF0aDogJ25vZGU6aW50ZXJuYWwvbW9kdWxlcy8nLCAgICAgICAgICAgICAgICAgIGZpbGVfbmFtZTogJ3J1bl9tYWluJywgICAgICAgICAgICAgICAgIGxpbmVfbnI6IDE1NCwgIGNvbHVtbl9ucjogNSwgIHR5cGU6ICdpbnRlcm5hbCcsICAgfSwgXVxuICAgICAgWyBcIlwiXCJhdCBub2RlOmludGVybmFsL21haW4vcnVuX21haW5fbW9kdWxlOjMzOjQ3XCJcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjYWxsZWU6ICdbYW5vbnltb3VzXScsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6ICdub2RlOmludGVybmFsL21haW4vcnVuX21haW5fbW9kdWxlJywgICAgICAgICAgICAgICAgICAgICAgZm9sZGVyX3BhdGg6ICdub2RlOmludGVybmFsL21haW4vJywgICAgICAgICAgICAgICAgICAgICBmaWxlX25hbWU6ICdydW5fbWFpbl9tb2R1bGUnLCAgICAgICAgICBsaW5lX25yOiAzMywgICBjb2x1bW5fbnI6IDQ3LCB0eXBlOiAnaW50ZXJuYWwnLCAgIH0sIF1cbiAgICAgIFsgXCJcIlwic29tZSBvdGhlciBmb3JtYXRcIlwiXCIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2FsbGVlOiAnJywgcGF0aDogJycsIGZvbGRlcl9wYXRoOiAnc29tZSBvdGhlciBmb3JtYXQnLCBmaWxlX25hbWU6ICcnLCBsaW5lX25yOiAnJywgY29sdW1uX25yOiAnJywgdHlwZTogJ3VucGFyc2FibGUnIH0sIF1cbiAgICAgIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHRyeVxuICAgICAgY3dkID0gcHJvY2Vzcy5jd2QoKVxuICAgICAgQGVxICggzqlicmJyXzE2OSA9IC0+IHR5cGVfb2YgZm9ybWF0X3N0YWNrLnBhcnNlX2xpbmUgKSwgJ2Z1bmN0aW9uJ1xuICAgICAgZm9yIFsgcHJvYmUsIG1hdGNoZXIsIF0gaW4gcHJvYmVzX2FuZF9tYXRjaGVyc1xuICAgICAgICBAZXEgKCDOqWJyYnJfMTcwID0gLT4gZm9ybWF0X3N0YWNrLnBhcnNlX2xpbmUgcHJvYmUgKSwgbWF0Y2hlclxuICAgIGZpbmFsbHlcbiAgICAgIHByb2Nlc3MuY2hkaXIgY3dkXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAdGhyb3dzICggzqlicmJyXzE3MSA9IC0+IGZvcm1hdF9zdGFjay5wYXJzZV9saW5lIDY3MyAgICAgICAgICAgICAgKSwgL2V4cGVjdGVkIGEgdGV4dCwgZ290IGEgZmxvYXQvXG4gICAgQHRocm93cyAoIM6pYnJicl8xNzIgPSAtPiBmb3JtYXRfc3RhY2sucGFyc2VfbGluZSBmYWxzZSAgICAgICAgICAgICksIC9leHBlY3RlZCBhIHRleHQsIGdvdCBhIGJvb2xlYW4vXG4gICAgQHRocm93cyAoIM6pYnJicl8xNzMgPSAtPiBmb3JtYXRfc3RhY2sucGFyc2VfbGluZSBTeW1ib2wgJ2FiYycgICAgICksIC9leHBlY3RlZCBhIHRleHQsIGdvdCBhIHN5bWJvbC9cbiAgICBAdGhyb3dzICggzqlicmJyXzE3NCA9IC0+IGZvcm1hdF9zdGFjay5wYXJzZV9saW5lIFwibGluZSAxXFxubGluZSAyXCIgKSwgL2V4cGVjdGVkIGEgc2luZ2xlIGxpbmUsIGdvdCBhIHRleHQgd2l0aCBsaW5lIGJyZWFrcy9cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZXF1aXJlX2Zvcm1hdF9zdGFja19mb3JtYXRfbGluZTogLT5cbiAgICB7IEZvcm1hdF9zdGFjaywgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZm9ybWF0X3N0YWNrKClcbiAgICB7IHN0cmlwX2Fuc2ksICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfc3RyaXBfYW5zaSgpXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcHJvYmVzX2FuZF9tYXRjaGVycyA9IFtcbiAgICAgIFsgXCJcIlwiYXQgPGFub255bW91cz4gKC9wYXRoL3RvL2hlbmdpc3QtTkcvZGV2L2JyaWNhYnJhYy9zcmMvdGVzdC1kYnJpYy5jb2ZmZWU6MjkwOjExKVwiXCJcIiwgICAgICAgICfigJTigJQgL3BhdGgvdG8vaGVuZ2lzdC1ORy9kZXYvYnJpY2FicmFjL3NyYy/igJTigJR0ZXN0LWRicmljLmNvZmZlZSDigJTigJQgKDI5MOKAlOKAlDoxMSkg4oCU4oCUICAgICAgICAgICAgIOKAlOKAlCAjIDxhbm9ueW1vdXM+KCkg4oCU4oCUICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oCU4oCUJywgXVxuICAgICAgWyBcIlwiXCJhdCBPYmplY3QuPGFub255bW91cz4gKC9wYXRoL3RvL2hlbmdpc3QtTkcvZGV2L2JyaWNhYnJhYy9zcmMvdGVzdC1kYnJpYy5jb2ZmZWU6MjQ1OjQxKVwiXCJcIiwgJ+KAlOKAlCAvcGF0aC90by9oZW5naXN0LU5HL2Rldi9icmljYWJyYWMvc3JjL+KAlOKAlHRlc3QtZGJyaWMuY29mZmVlIOKAlOKAlCAoMjQ14oCU4oCUOjQxKSDigJTigJQgICAgICAgICAgICAg4oCU4oCUICMgT2JqZWN0Ljxhbm9ueW1vdXM+KCkg4oCU4oCUICAgICAgICAgICAgICAgICAgICAgICAgICDigJTigJQnLCBdXG4gICAgICBbIFwiXCJcImF0IE9iamVjdC48YW5vbnltb3VzPiAoL3BhdGgvdG8vaGVuZ2lzdC1ORy9kZXYvYnJpY2FicmFjL3NyYy90ZXN0LWRicmljLmNvZmZlZTozOjEpXCJcIlwiLCAgICAn4oCU4oCUIC9wYXRoL3RvL2hlbmdpc3QtTkcvZGV2L2JyaWNhYnJhYy9zcmMv4oCU4oCUdGVzdC1kYnJpYy5jb2ZmZWUg4oCU4oCUICgz4oCU4oCUOjEpIOKAlOKAlCAgICAgICAgICAgICAgICDigJTigJQgIyBPYmplY3QuPGFub255bW91cz4oKSDigJTigJQgICAgICAgICAgICAgICAgICAgICAgICAgIOKAlOKAlCcsIF1cbiAgICAgIFsgXCJcIlwiYXQgZG9fc29tZXRoaW5nICguLi93aGF0ZXZlci9zcmMvdGVzdC1kYnJpYy5jb2ZmZWU6MzoxKVwiXCJcIiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICfigJTigJQgLi4vd2hhdGV2ZXIvc3JjL+KAlOKAlHRlc3QtZGJyaWMuY29mZmVlIOKAlOKAlCAoM+KAlOKAlDoxKSDigJTigJQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKAlOKAlCAjIGRvX3NvbWV0aGluZygpIOKAlOKAlCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oCU4oCUJywgXVxuICAgICAgWyBcIlwiXCJhdCBkb19zb21ldGhpbmcgKC4uL25vZGVfbW9kdWxlcy93aGF0ZXZlci9zcmMvdGVzdC1kYnJpYy5jb2ZmZWU6MzoxKVwiXCJcIiwgICAgICAgICAgICAgICAgICAgJ+KAlOKAlCAuLi9ub2RlX21vZHVsZXMvd2hhdGV2ZXIvc3JjL+KAlOKAlHRlc3QtZGJyaWMuY29mZmVlIOKAlOKAlCAoM+KAlOKAlDoxKSDigJTigJQgICAgICAgICAgICAgICAgICAgICAgICAg4oCU4oCUICMgZG9fc29tZXRoaW5nKCkg4oCU4oCUICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDigJTigJQnLCBdXG4gICAgICBbIFwiXCJcImF0IGRvX3NvbWV0aGluZyAobm9kZV9tb2R1bGVzL3Rlc3QtZGJyaWMuY29mZmVlOjM6MSlcIlwiXCIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAn4oCU4oCUIG5vZGVfbW9kdWxlcy/igJTigJR0ZXN0LWRicmljLmNvZmZlZSDigJTigJQgKDPigJTigJQ6MSkg4oCU4oCUICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDigJTigJQgIyBkb19zb21ldGhpbmcoKSDigJTigJQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKAlOKAlCcsIF1cbiAgICAgIFsgXCJcIlwiYXQgTW9kdWxlLl9jb21waWxlIChub2RlOmludGVybmFsL21vZHVsZXMvY2pzL2xvYWRlcjoxNzM4OjE0KVwiXCJcIiwgICAgICAgICAgICAgICAgICAgICAgICAgICfigJTigJQgbm9kZTppbnRlcm5hbC9tb2R1bGVzL2Nqcy/igJTigJRsb2FkZXIg4oCU4oCUICgxNzM44oCU4oCUOjE0KSDigJTigJQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKAlOKAlCAjIE1vZHVsZS5fY29tcGlsZSgpIOKAlOKAlCAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oCU4oCUJywgXVxuICAgICAgWyBcIlwiXCJhdCBPYmplY3QuLmpzIChub2RlOmludGVybmFsL21vZHVsZXMvY2pzL2xvYWRlcjoxODcxOjEwKVwiXCJcIiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ+KAlOKAlCBub2RlOmludGVybmFsL21vZHVsZXMvY2pzL+KAlOKAlGxvYWRlciDigJTigJQgKDE4NzHigJTigJQ6MTApIOKAlOKAlCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oCU4oCUICMgT2JqZWN0Li5qcygpIOKAlOKAlCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDigJTigJQnLCBdXG4gICAgICBbIFwiXCJcImF0IE1vZHVsZS5sb2FkIChub2RlOmludGVybmFsL21vZHVsZXMvY2pzL2xvYWRlcjoxNDcwOjMyKVwiXCJcIiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAn4oCU4oCUIG5vZGU6aW50ZXJuYWwvbW9kdWxlcy9janMv4oCU4oCUbG9hZGVyIOKAlOKAlCAoMTQ3MOKAlOKAlDozMikg4oCU4oCUICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDigJTigJQgIyBNb2R1bGUubG9hZCgpIOKAlOKAlCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKAlOKAlCcsIF1cbiAgICAgIFsgXCJcIlwiYXQgTW9kdWxlLl9sb2FkIChub2RlOmludGVybmFsL21vZHVsZXMvY2pzL2xvYWRlcjoxMjkwOjEyKVwiXCJcIiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICfigJTigJQgbm9kZTppbnRlcm5hbC9tb2R1bGVzL2Nqcy/igJTigJRsb2FkZXIg4oCU4oCUICgxMjkw4oCU4oCUOjEyKSDigJTigJQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKAlOKAlCAjIE1vZHVsZS5fbG9hZCgpIOKAlOKAlCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oCU4oCUJywgXVxuICAgICAgWyBcIlwiXCJhdCBUcmFjaW5nQ2hhbm5lbC50cmFjZVN5bmMgKG5vZGU6ZGlhZ25vc3RpY3NfY2hhbm5lbDozMjI6MTQpXCJcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgICAgJ+KAlOKAlCDigJTigJRub2RlOmRpYWdub3N0aWNzX2NoYW5uZWwg4oCU4oCUICgzMjLigJTigJQ6MTQpIOKAlOKAlCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oCU4oCUICMgVHJhY2luZ0NoYW5uZWwudHJhY2VTeW5jKCkg4oCU4oCUICAgICAgICAgICAgICAgICAgICDigJTigJQnLCBdXG4gICAgICBbIFwiXCJcImF0IHdyYXBNb2R1bGVMb2FkIChub2RlOmludGVybmFsL21vZHVsZXMvY2pzL2xvYWRlcjoyMzg6MjQpXCJcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAn4oCU4oCUIG5vZGU6aW50ZXJuYWwvbW9kdWxlcy9janMv4oCU4oCUbG9hZGVyIOKAlOKAlCAoMjM44oCU4oCUOjI0KSDigJTigJQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDigJTigJQgIyB3cmFwTW9kdWxlTG9hZCgpIOKAlOKAlCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKAlOKAlCcsIF1cbiAgICAgIFsgXCJcIlwiYXQgTW9kdWxlLmV4ZWN1dGVVc2VyRW50cnlQb2ludCBbYXMgcnVuTWFpbl0gKG5vZGU6aW50ZXJuYWwvbW9kdWxlcy9ydW5fbWFpbjoxNTQ6NSlcIlwiXCIsICAgICfigJTigJQgbm9kZTppbnRlcm5hbC9tb2R1bGVzL+KAlOKAlHJ1bl9tYWluIOKAlOKAlCAoMTU04oCU4oCUOjUpIOKAlOKAlCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKAlOKAlCAjIE1vZHVsZS5leGVjdXRlVXNlckVudHJ5UG9pbnQgW2FzIHJ1bk1haW5dKCkg4oCU4oCUICAg4oCU4oCUJywgXVxuICAgICAgWyBcIlwiXCJhdCBub2RlOmludGVybmFsL21haW4vcnVuX21haW5fbW9kdWxlOjMzOjQ3XCJcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ+KAlOKAlCBub2RlOmludGVybmFsL21haW4v4oCU4oCUcnVuX21haW5fbW9kdWxlIOKAlOKAlCAoMzPigJTigJQ6NDcpIOKAlOKAlCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oCU4oCUICMgW2Fub255bW91c10oKSDigJTigJQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDigJTigJQnLCBdXG4gICAgICBbIFwiXCJcInNvbWUgb3RoZXIgZm9ybWF0XCJcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAn4oCU4oCUIHNvbWUgb3RoZXIgZm9ybWF04oCU4oCUIOKAlOKAlCAo4oCU4oCUOikg4oCU4oCUICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDigJTigJQgIyAoKSDigJTigJQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKAlOKAlCcsIF1cbiAgICAgIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBmb3JtYXRfc3RhY2sgPSBuZXcgRm9ybWF0X3N0YWNrIHsgcmVsYXRpdmU6IGZhbHNlLCBwYWRkaW5nOiB7IHBhdGg6IDgwLCBjYWxsZWU6IDUwLCB9LCBjb250ZXh0OiBmYWxzZSwgfVxuICAgICAgQGVxICggzqlicmJyXzE3NSA9IC0+IHR5cGVfb2YgZm9ybWF0X3N0YWNrLmNmZyAgICAgICAgICksICdwb2QnXG4gICAgICBAZXEgKCDOqWJyYnJfMTc2ID0gLT4gdHlwZV9vZiBmb3JtYXRfc3RhY2suZm9ybWF0X2xpbmUgKSwgJ2Z1bmN0aW9uJ1xuICAgICAgZm9yIFsgcHJvYmUsIG1hdGNoZXIsIF0gaW4gcHJvYmVzX2FuZF9tYXRjaGVyc1xuICAgICAgICBAZXEgKCDOqWJyYnJfMTc3ID0gLT4gc3RyaXBfYW5zaSAoIGZvcm1hdF9zdGFjay5mb3JtYXRfbGluZSBwcm9iZSApLCAn4oCU4oCUJyApLCBtYXRjaGVyXG4gICAgICAgICMgZWNobyBmb3JtYXRfc3RhY2suZm9ybWF0X2xpbmUgcHJvYmVcbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyXzE3OCcsIGRvIM6pYnJicl8xNzkgPSAtPiBycHIgc3RyaXBfYW5zaSAoIGZvcm1hdF9zdGFjay5mb3JtYXRfbGluZSBwcm9iZSApLCAn4oCU4oCUJ1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBmb3JtYXRfc3RhY2sgPSBuZXcgRm9ybWF0X3N0YWNrIHsgcmVsYXRpdmU6IHRydWUsIH1cbiAgICAgIHRyeSBub3RfYV92YXJpYWJsZSBjYXRjaCBlcnJvclxuICAgICAgICBlY2hvKClcbiAgICAgICAgZm9yIGxpbmUgaW4gZXJyb3Iuc3RhY2suc3BsaXQgJ1xcbidcbiAgICAgICAgICBlY2hvIGZvcm1hdF9zdGFjay5mb3JtYXRfbGluZSBsaW5lXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGZvcm1hdF9zdGFjayA9IG5ldyBGb3JtYXRfc3RhY2sgeyByZWxhdGl2ZTogdHJ1ZSwgfVxuICAgICAgQHRocm93cyAoIM6pYnJicl8xODAgPSAtPiBmb3JtYXRfc3RhY2suZm9ybWF0X2xpbmUgNjczICAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgYSB0ZXh0LCBnb3QgYSBmbG9hdC9cbiAgICAgIEB0aHJvd3MgKCDOqWJyYnJfMTgxID0gLT4gZm9ybWF0X3N0YWNrLmZvcm1hdF9saW5lIGZhbHNlICAgICAgICAgICAgKSwgL2V4cGVjdGVkIGEgdGV4dCwgZ290IGEgYm9vbGVhbi9cbiAgICAgIEB0aHJvd3MgKCDOqWJyYnJfMTgyID0gLT4gZm9ybWF0X3N0YWNrLmZvcm1hdF9saW5lIFN5bWJvbCAnYWJjJyAgICAgKSwgL2V4cGVjdGVkIGEgdGV4dCwgZ290IGEgc3ltYm9sL1xuICAgICAgQHRocm93cyAoIM6pYnJicl8xODMgPSAtPiBmb3JtYXRfc3RhY2suZm9ybWF0X2xpbmUgXCJsaW5lIDFcXG5saW5lIDJcIiApLCAvZXhwZWN0ZWQgYSBzaW5nbGUgbGluZSwgZ290IGEgdGV4dCB3aXRoIGxpbmUgYnJlYWtzL1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZXF1aXJlX2Zvcm1hdF9zdGFja19mb3JtYXRfc3RhY2s6IC0+XG4gICAgeyBmb3JtYXRfc3RhY2ssICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2Zvcm1hdF9zdGFjaygpXG4gICAgeyBzdHJpcF9hbnNpLCAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX3N0cmlwX2Fuc2koKVxuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICBQQVRIICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuICAgIHNlcGFyYXRlICAgICAgICAgICAgICAgICAgICAgICAgPSAtPiBlY2hvICdcXG5cXG5cXG7igJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJRcXG5cXG5cXG4nXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgdHJ5XG4gICAgICAgIGN3ZCAgICAgICAgID0gcHJvY2Vzcy5jd2QoKVxuICAgICAgICByZWZlcmVuY2UgICA9IFBBVEgucmVzb2x2ZSBfX2Rpcm5hbWUsICcuLi8uLi8uLi8nXG4gICAgICAgIHByb2Nlc3MuY2hkaXIgcmVmZXJlbmNlXG4gICAgICAgIGNsYXNzIEN1c3RvbV9lcnJvciBleHRlbmRzIEVycm9yXG4gICAgICAgIGZuXzEgICAgICAgID0gLT4gdGhyb3cgbmV3IEN1c3RvbV9lcnJvciBcIm9vcHNcIlxuICAgICAgICBmbl8yICAgICAgICA9IC0+IGZuXzEoKVxuICAgICAgICBmbl8zICAgICAgICA9IC0+IGZuXzIoKVxuICAgICAgICBmbl80ICAgICAgICA9IC0+IGZuXzMoKVxuICAgICAgICBmbl81ICAgICAgICA9IC0+IGZuXzQoKVxuICAgICAgICBmbl81KClcbiAgICAgIGNhdGNoIGVycm9yXG4gICAgICAgIHNlcGFyYXRlKClcbiAgICAgICAgZWNobyBmb3JtYXRfc3RhY2sgZXJyb3JcbiAgICAgIGZpbmFsbHlcbiAgICAgICAgcHJvY2Vzcy5jaGRpciBjd2RcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgdHJ5XG4gICAgICAgIGN3ZCAgICAgICAgID0gcHJvY2Vzcy5jd2QoKVxuICAgICAgICByZWZlcmVuY2UgICA9IFBBVEgucmVzb2x2ZSBfX2Rpcm5hbWUsICcuLi8uLi8uLi8nXG4gICAgICAgIHByb2Nlc3MuY2hkaXIgcmVmZXJlbmNlXG4gICAgICAgICMgdHlwZSAgICA9IGVycm9yPy5jb2RlID8gZXJyb3I/LmNvbnN0cnVjdG9yPy5uYW1lID8gZXJyb3I/Lm5hbWUgPyAnRVhDRVBUSU9OJ1xuICAgICAgICBjbGFzcyBFXzEgZXh0ZW5kcyBFcnJvclxuICAgICAgICBjbGFzcyBFXzIgZXh0ZW5kcyBFcnJvclxuICAgICAgICBjbGFzcyBFXzMgZXh0ZW5kcyBFcnJvclxuICAgICAgICBmbl8xID0gLT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFXzEgXCLOqWJyYnJfMTg0XCJcbiAgICAgICAgZm5fMiA9IC0+IHRyeSBmbl8xKCkgY2F0Y2ggY2F1c2UgdGhlbiB0aHJvdyBuZXcgRV8yIFwizqlicmJyXzE4NVwiLCB7IGNhdXNlLCB9XG4gICAgICAgIGZuXzMgPSAtPiB0cnkgZm5fMigpIGNhdGNoIGNhdXNlIHRoZW4gdGhyb3cgbmV3IEVfMyBcIs6pYnJicl8xODZcIiwgeyBjYXVzZSwgfVxuICAgICAgICBkZWJ1ZyAnzqlicmJyXzE4NydcbiAgICAgICAgZm5fMygpXG4gICAgICBjYXRjaCBlcnJvclxuICAgICAgICBzZXBhcmF0ZSgpXG4gICAgICAgIGRlYnVnICfOqWJyYnJfMTg4J1xuICAgICAgICBlY2hvIGZvcm1hdF9zdGFjayBlcnJvclxuICAgICAgZmluYWxseVxuICAgICAgICBwcm9jZXNzLmNoZGlyIGN3ZFxuICAgICAgIyB0aHJvdyBlcnJvclxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBkbyA9PlxuICAgICMgICBmb3JtYXRfc3RhY2sgPSBuZXcgRm9ybWF0X3N0YWNrIHsgcmVsYXRpdmU6IHRydWUsIH1cbiAgICAjICAgdHJ5IG5vdF9hX3ZhcmlhYmxlIGNhdGNoIGVycm9yXG4gICAgIyAgICAgZWNobygpXG4gICAgIyAgICAgZm9yIGxpbmUgaW4gZXJyb3Iuc3RhY2suc3BsaXQgJ1xcbidcbiAgICAjICAgICAgIGVjaG8gZm9ybWF0X3N0YWNrLmZvcm1hdF9saW5lIGxpbmVcbiAgICAjICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZXF1aXJlX2FueWJhc2U6IC0+XG4gICAgeyBpc19wb3NpdGl2ZV9pbnRlZ2VyX3Bvd2VyX29mLFxuICAgICAgZW5jb2RlLFxuICAgICAgZGVjb2RlLFxuICAgICAgZW5jb2RlX2JpZ2ludCxcbiAgICAgIGRlY29kZV9iaWdpbnQsICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfYW55YmFzZSgpXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgR2V0X3JhbmRvbSwgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfcmFuZG9tKClcbiAgICByZXBlYXRfY291bnQgICAgICAgICAgICAgICAgICAgID0gMTAwMFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIEBlcSAoIM6pYnJicl8xODkgPSAtPiB0eXBlX29mIGVuY29kZSAgICAgICAgICAgICAgICAgICApLCAnZnVuY3Rpb24nXG4gICAgICBAZXEgKCDOqWJyYnJfMTkwID0gLT4gdHlwZV9vZiBkZWNvZGUgICAgICAgICAgICAgICAgICAgKSwgJ2Z1bmN0aW9uJ1xuICAgICAgQGVxICggzqlicmJyXzE5MSA9IC0+IHR5cGVfb2YgZW5jb2RlX2JpZ2ludCAgICAgICAgICAgICksICdmdW5jdGlvbidcbiAgICAgIEBlcSAoIM6pYnJicl8xOTIgPSAtPiB0eXBlX29mIGRlY29kZV9iaWdpbnQgICAgICAgICAgICApLCAnZnVuY3Rpb24nXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIG9uX3N0YXRzICAgID0gbnVsbFxuICAgICAgZ2V0X3JhbmRvbSAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IDc5ODcyMywgb25fc3RhdHMsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcHJvZHVjZXIgICAgPSAtPiBnZXRfcmFuZG9tLmludGVnZXIgeyBtaW46IDAsIG1heDogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsIG9uX3N0YXRzLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGZvciBwcm9iZSBmcm9tIGdldF9yYW5kb20ud2FsayB7IHByb2R1Y2VyLCBuOiByZXBlYXRfY291bnQsIG9uX3N0YXRzLCB9XG4gICAgICAgIG1hdGNoZXIgPSBcIiN7cHJvYmV9XCJcbiAgICAgICAgQGVxICggzqlicmJyXzE5MyA9IC0+IGVuY29kZSAgICAgICAgIHByb2JlLCAnMDEyMzQ1Njc4OScgKSwgbWF0Y2hlclxuICAgICAgICBAZXEgKCDOqWJyYnJfMTk0ID0gLT4gZW5jb2RlX2JpZ2ludCAgcHJvYmUsICcwMTIzNDU2Nzg5JyApLCBtYXRjaGVyXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIG9uX3N0YXRzICAgICAgPSBudWxsXG4gICAgICBnZXRfcmFuZG9tICAgID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiA3OTg3MjMsIG9uX3N0YXRzLCB9XG4gICAgICBiaWdfYWxwaGFiZXQgID0gJzAxMjM0NTY3ODlhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eidcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcHJvZHVjZXIgICAgICA9IC0+XG4gICAgICAgIG4gICAgICAgICA9IGdldF9yYW5kb20uaW50ZWdlciB7IG1pbjogMCwgbWF4OiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiwgfVxuICAgICAgICBiYXNlICAgICAgPSBnZXRfcmFuZG9tLmludGVnZXIgeyBtaW46IDIsIG1heDogMzYsIH1cbiAgICAgICAgYWxwaGFiZXQgID0gYmlnX2FscGhhYmV0WyAuLi4gYmFzZSBdXG4gICAgICAgIG1hdGNoZXIgICA9IG4udG9TdHJpbmcgYmFzZVxuICAgICAgICByZXR1cm4geyBuLCBiYXNlLCBhbHBoYWJldCwgbWF0Y2hlciwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBmb3IgeyBuLCBiYXNlLCBhbHBoYWJldCwgbWF0Y2hlciwgfSBmcm9tIGdldF9yYW5kb20ud2FsayB7IHByb2R1Y2VyLCBuOiByZXBlYXRfY291bnQsIG9uX3N0YXRzLCB9XG4gICAgICAgIEBlcSAoIM6pYnJicl8xOTUgPSAtPiBlbmNvZGUgICAgICAgICAgICAgICBuLCBhbHBoYWJldCApLCBtYXRjaGVyXG4gICAgICAgIEBlcSAoIM6pYnJicl8xOTYgPSAtPiBkZWNvZGUgICAgICAgICBtYXRjaGVyLCBhbHBoYWJldCApLCBuXG4gICAgICAgIEBlcSAoIM6pYnJicl8xOTcgPSAtPiBlbmNvZGVfYmlnaW50ICAgICAgICBuLCBhbHBoYWJldCApLCBtYXRjaGVyXG4gICAgICAgIEBlcSAoIM6pYnJicl8xOTggPSAtPiBkZWNvZGVfYmlnaW50ICBtYXRjaGVyLCBhbHBoYWJldCApLCBCaWdJbnQgblxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBAZXEgKCDOqWJyYnJfMTk5ID0gLT4gZW5jb2RlX2JpZ2ludCAgMTAwLCAnMDEyMzQ1Njc4OScgICAgICAgICApLCAnMTAwJ1xuICAgICAgQGVxICggzqlicmJyXzIwMCA9IC0+IGVuY29kZSAgICAgICAgIDEwMCwgJzAxMjM0NTY3ODknICAgICAgICAgKSwgJzEwMCdcbiAgICAgIEBlcSAoIM6pYnJicl8yMDEgPSAtPiBlbmNvZGUgICAgICAgICAgIDcsICcu4paIJyAgICAgICAgICAgICAgICAgKSwgJ+KWiOKWiOKWiCdcbiAgICAgIEBlcSAoIM6pYnJicl8yMDIgPSAtPiBlbmNvZGUgICAgICAgICAgIDgsICcu4paIJyAgICAgICAgICAgICAgICAgKSwgJ+KWiC4uLidcbiAgICAgIEBlcSAoIM6pYnJicl8yMDMgPSAtPiBlbmNvZGUgICAgICAgICAxMDAsICcu4paIJyAgICAgICAgICAgICAgICAgKSwgICfilojiloguLuKWiC4uJ1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBhMTAgPSAnMDEyMzQ1Njc4OSdcbiAgICAgIGExNiA9ICcwMTIzNDU2Nzg5YWJjZGVmJ1xuICAgICAgbiAgID0gMTIzNDU2Nzg5MDsgICAgICAgICAgICAgICAgaW5mbyAnzqlicmJyXzIwNCcsIGZcIiN7IHJwciBlbmNvZGUgbiwgYTEwIH06PjMwYzsgI3sgcnByIG4udG9TdHJpbmcgMTAgfTo+MzBjOyAjeyBycHIgZW5jb2RlIG4sIGExNiB9Oj4zMGM7ICN7IHJwciBuLnRvU3RyaW5nIDE2IH06PjMwYztcIlxuICAgICAgbiAgID0gMTIzNDU2Nzg5MDEyMzQ1OyAgICAgICAgICAgaW5mbyAnzqlicmJyXzIwNScsIGZcIiN7IHJwciBlbmNvZGUgbiwgYTEwIH06PjMwYzsgI3sgcnByIG4udG9TdHJpbmcgMTAgfTo+MzBjOyAjeyBycHIgZW5jb2RlIG4sIGExNiB9Oj4zMGM7ICN7IHJwciBuLnRvU3RyaW5nIDE2IH06PjMwYztcIlxuICAgICAgbiAgID0gMTIzNDU2Nzg5MDEyMzQ1Njc4OTA7ICAgICAgaW5mbyAnzqlicmJyXzIwNicsIGZcIiN7IHJwciBlbmNvZGUgbiwgYTEwIH06PjMwYzsgI3sgcnByIG4udG9TdHJpbmcgMTAgfTo+MzBjOyAjeyBycHIgZW5jb2RlIG4sIGExNiB9Oj4zMGM7ICN7IHJwciBuLnRvU3RyaW5nIDE2IH06PjMwYztcIlxuICAgICAgbiAgID0gMTIzNDU2Nzg5MDEyMzQ1Njc4OTAxMjM0NTsgaW5mbyAnzqlicmJyXzIwNycsIGZcIiN7IHJwciBlbmNvZGUgbiwgYTEwIH06PjMwYzsgI3sgcnByIG4udG9TdHJpbmcgMTAgfTo+MzBjOyAjeyBycHIgZW5jb2RlIG4sIGExNiB9Oj4zMGM7ICN7IHJwciBuLnRvU3RyaW5nIDE2IH06PjMwYztcIlxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBAZXEgICAgICggzqlicmJyXzIwOCA9IC0+IGlzX3Bvc2l0aXZlX2ludGVnZXJfcG93ZXJfb2YgMTAsIDEwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgICAgICggzqlicmJyXzIwOSA9IC0+IGlzX3Bvc2l0aXZlX2ludGVnZXJfcG93ZXJfb2YgMTAwLCAxMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgICAgICggzqlicmJyXzIxMCA9IC0+IGlzX3Bvc2l0aXZlX2ludGVnZXJfcG93ZXJfb2YgMTAwMDAwMDAwMDAwMDAwMCwgMTAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgICAgICggzqlicmJyXzIxMSA9IC0+IGlzX3Bvc2l0aXZlX2ludGVnZXJfcG93ZXJfb2YgMTAwMDAwMDAwMDAwMDAwMSwgMTAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICAgICAoIM6pYnJicl8yMTIgPSAtPiBpc19wb3NpdGl2ZV9pbnRlZ2VyX3Bvd2VyX29mIDE2ICoqIDMsIDE2ICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6pYnJicl8yMTMgPSAtPiBpc19wb3NpdGl2ZV9pbnRlZ2VyX3Bvd2VyX29mIDQ1MDM1OTk2MjczNzA0OTYsIDIgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6pYnJicl8yMTQgPSAtPiBpc19wb3NpdGl2ZV9pbnRlZ2VyX3Bvd2VyX29mIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAyICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEB0aHJvd3MgKCDOqWJyYnJfMjE1ID0gLT4gaXNfcG9zaXRpdmVfaW50ZWdlcl9wb3dlcl9vZiAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMSwgMTAgICksIC9leHBlY3RlZCBhIFxcKHNhZmVcXCkgaW50ZWdlciwgZ290IDFlXFwrMzEvXG4gICAgICBAdGhyb3dzICggzqlicmJyXzIxNiA9IC0+IGlzX3Bvc2l0aXZlX2ludGVnZXJfcG93ZXJfb2YgMTAsIC0xMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gMSwgZ290IC0xMC9cbiAgICAgIEB0aHJvd3MgKCDOqWJyYnJfMjE3ID0gLT4gaXNfcG9zaXRpdmVfaW50ZWdlcl9wb3dlcl9vZiAtMTAsIDEwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC9leHBlY3RlZCBhIHBvc2l0aXZlIGludGVnZXIsIGdvdCAtMTAvXG4gICAgICBAdGhyb3dzICggzqlicmJyXzIxOCA9IC0+IGlzX3Bvc2l0aXZlX2ludGVnZXJfcG93ZXJfb2YgMTAsIDEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gMSwgZ290IDEvXG4gICAgICBAdGhyb3dzICggzqlicmJyXzIxOSA9IC0+IGlzX3Bvc2l0aXZlX2ludGVnZXJfcG93ZXJfb2YgLTEsIDEwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgYSBwb3NpdGl2ZSBpbnRlZ2VyLCBnb3QgLTEvXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlcXVpcmVfY2xlYW5fYXNzaWduOiAtPlxuICAgIHsgY2xlYW4sXG4gICAgICBjbGVhbl9hbGwsXG4gICAgICBjbGVhbl9hc3NpZ24sIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9jbGVhbl9hc3NpZ24oKVxuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGZyZWV6ZSwgICAgICAgICAgICAgICAgICAgICB9ID0gT2JqZWN0XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZDEgICAgICA9IGZyZWV6ZSB7IGE6IDEsIGI6IDksIHo6ICdaJywgfVxuICAgICAgQHRocm93cyAoIM6pYnJicl8yMjAgPSAtPiBjbGVhbiBkMSApLCAvdW5hYmxlIHRvIGNsZWFuIGZyb3plbiBvYmplY3QvXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGQxICAgICAgPSB7IGE6IDEsIGI6IDksIHo6ICdaJywgfVxuICAgICAgQGVxICggzqlicmJyXzIyMSA9IC0+ICggY2xlYW4gZDEgKSBpcyBkMSAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJyYnJfMjIyID0gLT4gY2xlYW4gZDEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHsgYTogMSwgYjogOSwgejogJ1onLCB9XG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGQyICAgICAgPSB7IGZvbzogdHJ1ZSwgICAgICBnbnU6IHVuZGVmaW5lZCwgbG9sOiBudWxsLCBiYXI6IGZhbHNlLCB9XG4gICAgICBAZXEgKCDOqWJyYnJfMjIzID0gLT4gY2xlYW4gZDIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHsgZm9vOiB0cnVlLCBsb2w6IG51bGwsIGJhcjogZmFsc2UsIH1cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZDIgICAgICA9IHsgZm9vOiB0cnVlLCAgICAgIGdudTogdW5kZWZpbmVkLCBsb2w6IG51bGwsIGJhcjogZmFsc2UsIH1cbiAgICAgIEBlcSAoIM6pYnJicl8yMjQgPSAtPiBPYmplY3Qua2V5cyBjbGVhbiBkMiAgICAgICAgICAgICAgICAgKSwgWyAnZm9vJywgJ2xvbCcsICdiYXInLCBdXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGQxICAgICAgPSB7IGE6IDEsIGI6IDksIHo6ICdaJywgfVxuICAgICAgZDIgICAgICA9IHsgZm9vOiB0cnVlLCAgICAgIGdudTogdW5kZWZpbmVkLCBsb2w6IG51bGwsIGJhcjogZmFsc2UsIH1cbiAgICAgIEBlcSAoIM6pYnJicl8yMjUgPSAtPiBjbGVhbl9hbGwgZDEsIGQyICAgICAgICAgICAgICAgICAgICAgKSwgWyB7IGE6IDEsIGI6IDksIHo6ICdaJywgfSwgeyBmb286IHRydWUsIGxvbDogbnVsbCwgYmFyOiBmYWxzZSwgfSwgXVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBkMSAgICAgID0gZnJlZXplIHsgYTogMSwgYjogOSwgejogJ1onLCB9XG4gICAgICBkMiAgICAgID0gZnJlZXplIHsgZm9vOiB0cnVlLCAgICAgIGdudTogdW5kZWZpbmVkLCBsb2w6IG51bGwsIGJhcjogZmFsc2UsIH1cbiAgICAgIHRhcmdldCAgPSB7fVxuICAgICAgQGVxICggzqlicmJyXzIyNiA9IC0+IGNsZWFuX2Fzc2lnbiB0YXJnZXQsIGQxLCBkMiAgICAgICAgICAgICAgICAgICksIHsgYTogMSwgYjogOSwgejogJ1onLCBmb286IHRydWUsIGxvbDogbnVsbCwgYmFyOiBmYWxzZSwgfVxuICAgICAgQGVxICggzqlicmJyXzIyNyA9IC0+ICggY2xlYW5fYXNzaWduIHRhcmdldCwgZDEsIGQyICkgaXMgdGFyZ2V0ICAgICksIHRydWVcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZDEgICAgICA9IHsgYTogMSwgYjogOSwgejogJ1onLCB9XG4gICAgICBkMiAgICAgID0geyBmb286IHRydWUsICAgICAgZ251OiB1bmRlZmluZWQsIGxvbDogbnVsbCwgYmFyOiBmYWxzZSwgfVxuICAgICAgZTEgICAgICA9IGZyZWV6ZSBbIGQxLCBkMiwgXVxuICAgICAgdGFyZ2V0ICA9IHt9XG4gICAgICBAZXEgKCDOqWJyYnJfMjI4ID0gLT4gY2xlYW5fYXNzaWduIGUxLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgeyBhOiAxLCBiOiA5LCB6OiAnWicsIGZvbzogdHJ1ZSwgbG9sOiBudWxsLCBiYXI6IGZhbHNlLCB9XG4gICAgICBAZXEgKCDOqWJyYnJfMjI5ID0gLT4gKCBjbGVhbl9hc3NpZ24gdGFyZ2V0LCBlMS4uLiApIGlzIHRhcmdldCAgICAgKSwgdHJ1ZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGQxICAgICAgPSBmcmVlemUgeyBhOiAxLCBiOiA5LCB6OiAnWicsIH1cbiAgICAgIGQyICAgICAgPSBmcmVlemUgeyBmb286IHRydWUsICAgICAgZ251OiB1bmRlZmluZWQsIGxvbDogbnVsbCwgYmFyOiBmYWxzZSwgfVxuICAgICAgQGVxICggzqlicmJyXzIzMCA9IC0+IE9iamVjdC5rZXlzIGNsZWFuX2Fzc2lnbiB7fSwgZDEsIGQyICAgICAgKSwgWyAnYScsICdiJywgJ3onLCAnZm9vJywgJ2xvbCcsICdiYXInLCBdXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGQyICAgICAgPSAgICAgICAgeyBmb286IHRydWUsICAgICAgZ251OiB1bmRlZmluZWQsIGxvbDogbnVsbCwgYmFyOiBmYWxzZSwgfVxuICAgICAgZDMgICAgICA9IGZyZWV6ZSB7IGZvbzogMzMzLCAgICAgICBnbnU6IHVuZGVmaW5lZCwgbG9sOiBudWxsLCBiYXI6IHVuZGVmaW5lZCwgfVxuICAgICAgZDQgICAgICA9IGZyZWV6ZSB7IGZvbzogdW5kZWZpbmVkLCBnbnU6IHVuZGVmaW5lZCwgbG9sOiBudWxsLCBiYXI6IDQ0NCwgfVxuICAgICAgQGVxICggzqlicmJyXzIzMSA9IC0+IGNsZWFuX2Fzc2lnbiBkMiwgZDMsIGQ0ICAgICAgICAgICAgICApLCB7IGZvbzogMzMzLCBsb2w6IG51bGwsIGJhcjogNDQ0LCB9XG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGQyICAgICAgPSBmcmVlemUgeyBmb286IHRydWUsICAgICAgZ251OiB1bmRlZmluZWQsIGxvbDogbnVsbCwgYmFyOiBmYWxzZSwgfVxuICAgICAgZDMgICAgICA9IGZyZWV6ZSB7IGZvbzogMzMzLCAgICAgICBnbnU6IHVuZGVmaW5lZCwgbG9sOiBudWxsLCBiYXI6IHVuZGVmaW5lZCwgfVxuICAgICAgZDQgICAgICA9IGZyZWV6ZSB7IGZvbzogdW5kZWZpbmVkLCBnbnU6IHVuZGVmaW5lZCwgbG9sOiBudWxsLCBiYXI6IDQ0NCwgfVxuICAgICAgdGFyZ2V0ICA9IHt9XG4gICAgICBAZXEgKCDOqWJyYnJfMjMyID0gLT4gT2JqZWN0LmtleXMgY2xlYW5fYXNzaWduIHRhcmdldCwgZDIsIGQzLCBkNCAgKSwgWyAnZm9vJywgJ2xvbCcsICdiYXInLCBdXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlcXVpcmVfcmVtYXA6IC0+XG4gICAgeyByZW1hcCwgb21pdCwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3JlbWFwKClcbiAgICB7IGZyZWV6ZSwgICAgICAgICAgICAgICAgICAgICB9ID0gT2JqZWN0XG4gICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCAgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBkMSAgICAgID0geyBhMTogJ0ExJywgYjE6ICdiMScsIGMxOiAnQzEnLCB9XG4gICAgICBtYXBwaW5nID0gZnJlZXplIHsgYTE6ICdBMicsICAgICAgICAgICBjMTogJ0MyJywgfVxuICAgICAgcmVzdWx0ICA9IHJlbWFwIGQxLCBtYXBwaW5nXG4gICAgICBAZXEgKCDOqWJyYnJfMjMzID0gLT4gcmVzdWx0ICAgICAgICAgICAgICksIHsgQTI6ICdBMScsIGIxOiAnYjEnLCBDMjogJ0MxJywgfVxuICAgICAgQGVxICggzqlicmJyXzIzNCA9IC0+IHJlc3VsdCAgICAgICAgICAgICApLCBkMVxuICAgICAgQGVxICggzqlicmJyXzIzNSA9IC0+IE9iamVjdC5rZXlzIHJlc3VsdCApLCBbICdBMicsICdiMScsICdDMicsIF1cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZDEgICAgICA9IHsgYWRkcmVzczogJ1BlcnRoJywgbmFtZTogJ0JvYicsIGpvYjogJ2VtcGxveWVlJywgZG9iOiA0MSwgfVxuICAgICAgbWFwcGluZyA9IGZyZWV6ZSB7IGFkZHJlc3M6ICdjaXR5Jywgam9iOiBvbWl0LCBkb2I6ICdhZ2UnLCB9XG4gICAgICByZXN1bHQgID0gcmVtYXAgZDEsIG1hcHBpbmdcbiAgICAgIGRlYnVnICfOqWJyYnJfMjM2JywgcmVzdWx0XG4gICAgICBAZXEgKCDOqWJyYnJfMjM3ID0gLT4gZXF1YWxzIHJlc3VsdCwgeyBjaXR5OiAnUGVydGgnLCBuYW1lOiAnQm9iJywgYWdlOiA0MSwgfSAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlicmJyXzIzOCA9IC0+IHJlc3VsdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGQxXG4gICAgICBAZXEgKCDOqWJyYnJfMjM5ID0gLT4gT2JqZWN0LmtleXMgcmVzdWx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAnY2l0eScsICduYW1lJywgJ2FnZScsIF1cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZDEgICAgICA9IHsgYWRkcmVzczogJ1BlcnRoJywgbmFtZTogJ0JvYicsIGpvYjogJ2VtcGxveWVlJywgYWdlOiAyNSwgfVxuICAgICAgbWFwcGluZyA9IGZyZWV6ZSB7IGFkZHJlc3M6ICdjaXR5Jywgam9iOiBvbWl0LCBhZ2U6ICggdiApIC0+IHsgZG9iOiAyMDI1IC0gdiwgfSwgfVxuICAgICAgcmVzdWx0ICA9IHJlbWFwIGQxLCBtYXBwaW5nXG4gICAgICBkZWJ1ZyAnzqlicmJyXzI0MCcsIHJlc3VsdFxuICAgICAgQGVxICggzqlicmJyXzI0MSA9IC0+IHJlc3VsdCAgICAgICAgICAgICApLCB7IGNpdHk6ICdQZXJ0aCcsIG5hbWU6ICdCb2InLCBkb2I6IDIwMDAsIH1cbiAgICAgIEBlcSAoIM6pYnJicl8yNDIgPSAtPiByZXN1bHQgICAgICAgICAgICAgKSwgZDFcbiAgICAgIEBlcSAoIM6pYnJicl8yNDMgPSAtPiBPYmplY3Qua2V5cyByZXN1bHQgKSwgWyAnY2l0eScsICduYW1lJywgJ2RvYicsIF1cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZDEgICAgICA9IHsgYWRkcmVzczogJ1BlcnRoJywgbmFtZTogJ0JvYicsIGpvYjogJ2VtcGxveWVlJywgd2VpZ2h0OiAnOThrZycsIH1cbiAgICAgIHdlaWdodCAgPSAoIHYgKSAtPiB7IHdlaWdodF91OiAoIHYucmVwbGFjZSAvXlswLTkuXSsvZywgJycgKSwgd2VpZ2h0X3E6ICggTnVtYmVyIHYucmVwbGFjZSAvW14wLTkuXSskL2csICcnICkgfVxuICAgICAgbWFwcGluZyA9IGZyZWV6ZSB7IGFkZHJlc3M6ICdjaXR5Jywgam9iOiBvbWl0LCB3ZWlnaHQsIH1cbiAgICAgIHJlc3VsdCAgPSByZW1hcCBkMSwgbWFwcGluZ1xuICAgICAgZGVidWcgJ86pYnJicl8yNDQnLCByZXN1bHRcbiAgICAgIEBlcSAoIM6pYnJicl8yNDUgPSAtPiByZXN1bHQgICAgICAgICAgICAgKSwgeyBjaXR5OiAnUGVydGgnLCBuYW1lOiAnQm9iJywgd2VpZ2h0X3U6ICdrZycsIHdlaWdodF9xOiA5OCwgfVxuICAgICAgQGVxICggzqlicmJyXzI0NiA9IC0+IHJlc3VsdCAgICAgICAgICAgICApLCBkMVxuICAgICAgQGVxICggzqlicmJyXzI0NyA9IC0+IE9iamVjdC5rZXlzIHJlc3VsdCApLCBbICdjaXR5JywgJ25hbWUnLCAnd2VpZ2h0X3UnLCAnd2VpZ2h0X3EnLCBdXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9yYW5kb21fdmR4OiAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfcmFuZG9tKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgPT5cbiAgICAgICAgIyBpbmZvICfOqWJyYnJfMjQ4JywgaWR4LCBzdGF0cyAjIGlmIHN0YXRzLm5hbWUgaXMgJ3dhbGsnXG4gICAgICAgIGlmIHN0YXRzLm5hbWUgaXMgJ3dhbGsnXG4gICAgICAgICAgQGVxICggzqlicmJyXzI0OSA9IC0+IHN0YXRzLnJvdW5kcyApLCBtYXRjaGVyLnJvdW5kc1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIyBnZXRfcmFuZG9tICAgICAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IDgzODQ3MjM4NCwgb25fc3RhdHMsIH1cbiAgICAgIGdldF9yYW5kb20gICAgICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogbnVsbCwgb25fc3RhdHMsIH1cbiAgICAgIGdldF9ybmRfbGVuZ3RoICA9IGdldF9yYW5kb20uaW50ZWdlcl9wcm9kdWNlciB7IG1pbjogICAgMSwgbWF4OiAgICAgNSwgfVxuICAgICAgZ2V0X3JuZF9pZHggICAgID0gZ2V0X3JhbmRvbS5pbnRlZ2VyX3Byb2R1Y2VyIHsgbWluOiAtOTk5LCBtYXg6ICArOTk5LCB9XG4gICAgICBnZXRfcm5kX3ZkeCAgICAgPSAtPiAoIGdldF9ybmRfaWR4KCkgZm9yIF8gaW4gWyAwIC4uIGdldF9ybmRfbGVuZ3RoKCkgXSApXG4gICAgICBmb3IgbiBpbiBbIDAgLi4gNTAgXVxuICAgICAgICBkZWJ1ZyAnzqlicmJyXzI1MCcsIGdldF9ybmRfdmR4KClcbiAgICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIHJlc3VsdCAgICA9XG4gICAgICAjICAgdmFsdWVzOiAgIFtdXG4gICAgICAjIG1hdGNoZXIgICA9XG4gICAgICAjICAgdmFsdWVzOiAgIFsgJ8SCxI3DgCcsICd0xKLFhScsICfEvsOmxbEnLCAnSHDFlycsICfFmnpeJywgJ8SWxKfFuycsICfFvMOJxYknLCAnw63ErMSMJywgJ8SpdcS3JywgJ8OsxKt4JywgJ8WqbXwnIF1cbiAgICAgICMgICByb3VuZHM6ICAgMFxuICAgICAgIyAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgcHJvZHVjZXIgID0gLT4gZ2V0X3JhbmRvbS50ZXh0IHsgbWluOiAnQScsIG1heDogMHgwMTdmLCBsZW5ndGg6IDMsIG9uX3N0YXRzLCB9XG4gICAgICAjIGZvciB2YWx1ZSBmcm9tIGdldF9yYW5kb20ud2FsayB7IHByb2R1Y2VyLCBuOiAxMSwgb25fc3RhdHMsIH1cbiAgICAgICMgICBpZHgrK1xuICAgICAgIyAgICMgZGVidWcgJ86pYnJicl8yNTEnLCBpZHgsIHJwciB2YWx1ZVxuICAgICAgIyAgIHJlc3VsdC52YWx1ZXMucHVzaCB2YWx1ZVxuICAgICAgIyAgIEBlcSAoIM6pYnJicl8yNTIgPSAtPiB2YWx1ZSApLCBtYXRjaGVyLnZhbHVlc1sgaWR4IF1cbiAgICAgICMgQGVxICggzqlicmJyXzI1MyA9IC0+IGlkeCAgICAgICAgICAgICAgICAgICAgKSwgMTBcbiAgICAgICMgQGVxICggzqlicmJyXzI1NCA9IC0+IHJlc3VsdC52YWx1ZXMubGVuZ3RoICAgKSwgMTFcbiAgICAgICMgcmV0dXJuIG51bGxcbiAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBkbyA9PlxuICAgICMgICBnZXRfcmFuZG9tICAgICAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgb25fc3RhdHMsIH1cbiAgICAjICAgcmVzdWx0X3JvdW5kcyAgPSBudWxsXG4gICAgIyAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSA9PlxuICAgICMgICAgIGluZm8gJ86pYnJicl8yNTUnLCBzdGF0cyBpZiBzdGF0cy5uYW1lIGlzICd3YWxrJ1xuICAgICMgICAgIHJlc3VsdF9yb3VuZHMgPSBzdGF0cy5yb3VuZHMgaWYgc3RhdHMubmFtZSBpcyAnd2FsaydcbiAgICAjICAgICBAZXEgKCDOqWJyYnJfMjU2ID0gLT4gcmVzdWx0X3JvdW5kcyA+PSAwICksIHRydWVcbiAgICAjICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyAgIHByb2R1Y2VyICA9IC0+IGdldF9yYW5kb20udGV4dCB7IG1pbjogJzAnLCBtYXg6ICc5JywgbGVuZ3RoOiAxLCB9XG4gICAgIyAgIGNvdW50ICAgICA9IDBcbiAgICAjICAgc2VlbiAgICAgID0gbmV3IFNldCgpXG4gICAgIyAgIGZvciB4IGZyb20gZ2V0X3JhbmRvbS53YWxrIHsgcHJvZHVjZXIsIHNlZW4sIG46IDUsIH1cbiAgICAjICAgICBjb3VudCsrXG4gICAgIyAgICAgZGVidWcgJ86pYnJicl8yNTcnLCBjb3VudCwgcnByIHhcbiAgICAjICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRfcmFuZG9tX3NodWZmbGU6IC0+XG4gICAgeyBHZXRfcmFuZG9tLFxuICAgICAgaW50ZXJuYWxzLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2dldF9yYW5kb20oKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgc2VlZCAgICAgICAgPSA4NzZcbiAgICBmYWN0b3IgICAgICA9IDFcbiAgICAjIGZhY3RvciAgICAgID0gMC4wMVxuICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkLCB9XG4gICAgZ2V0X2xpc3QgICAgPSAtPiBBcnJheS5mcm9tICdhYmNkZWZnaGlqaydcbiAgICBAZXEgKCDOqWJyYnJfMjU4ID0gLT4gKCBnZXRfcmFuZG9tLnNodWZmbGUgZ2V0X2xpc3QoKSwgZmFjdG9yICkuam9pbiAnJyApLCAnYWpja2RiaWdmZWgnXG4gICAgQGVxICggzqlicmJyXzI1OSA9IC0+ICggZ2V0X3JhbmRvbS5zaHVmZmxlIGdldF9saXN0KCksIGZhY3RvciApLmpvaW4gJycgKSwgJ2FkZ2llY2ZoYmprJ1xuICAgIEBlcSAoIM6pYnJicl8yNjAgPSAtPiAoIGdldF9yYW5kb20uc2h1ZmZsZSBnZXRfbGlzdCgpLCBmYWN0b3IgKS5qb2luICcnICksICdoY2lqZ2VkYmZhaydcbiAgICBAZXEgKCDOqWJyYnJfMjYxID0gLT4gKCBnZXRfcmFuZG9tLnNodWZmbGUgZ2V0X2xpc3QoKSwgZmFjdG9yICkuam9pbiAnJyApLCAnaWNmYWtnYmhqZGUnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB0ZXN0cywgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgcmVxdWlyZV9hbnliYXNlOiB0ZXN0cy5yZXF1aXJlX2FueWJhc2UsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGdldF9yYW5kb21fdmR4OiB0ZXN0cy5nZXRfcmFuZG9tX3ZkeCwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGdldF9yYW5kb21fc2h1ZmZsZTogdGVzdHMuZ2V0X3JhbmRvbV9zaHVmZmxlLCB9XG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgcmV0dXJuIG51bGxcbiJdfQ==
