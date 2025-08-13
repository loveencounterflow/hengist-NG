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
      (() => {        //.......................................................................................................
        var _, get_random, on_stats, result, Ωbrbr__19, Ωbrbr__20;
        on_stats = function(stats) {};
        // debug 'Ωbrbr__17', stats
        get_random = new Get_random({
          seed: settings.my_seed_2,
          on_stats
        });
        result = ((function() {
          var i, results;
          results = [];
          for (_ = i = 1; i <= 40; _ = ++i) {
            results.push(get_random.chr({
              max: 0xff,
              filter: /[aeiouyAEIOUY]/
            }));
          }
          return results;
        })()).join('');
        debug('Ωbrbr__18', rpr(result));
        this.eq((Ωbrbr__19 = function() {
          return /^[aeiouyAEIOUY]{40}$/.test(result);
        }), true);
        this.eq((Ωbrbr__20 = function() {
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
      ({Get_random, internals} = SFMODULES.unstable.require_random_tools());
      (() => {        //.......................................................................................................
        var _, chr, get_random, on_stats, result, retries, Ωbrbr__22, Ωbrbr__23;
        retries = 0;
        on_stats = function(stats) {
          if (stats.name === 'chr') {
            return retries += stats.retries;
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
          var i, results;
          results = [];
          for (_ = i = 1; i <= 40; _ = ++i) {
            results.push(chr());
          }
          return results;
        })()).join('');
        debug('Ωbrbr__21', retries, rpr(result));
        this.eq((Ωbrbr__22 = function() {
          return /^[aeiouyAEIOUY]{40}$/.test(result);
        }), true);
        this.eq((Ωbrbr__23 = function() {
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
      ({Get_random, internals} = SFMODULES.unstable.require_random_tools());
      max_count = 1e4;
      (() => {        //.......................................................................................................
        var get_random, on_stats, result, Ωbrbr__25;
        on_stats = function(stats) {};
        // info 'Ωbrbr__24', stats
        get_random = new Get_random({
          seed: settings.my_seed_1,
          on_stats
        });
        result = get_random.text({
          min: 'A',
          max: 'Z',
          length: 40
        });
        this.eq((Ωbrbr__25 = function() {
          return result;
        }), 'PQKESUUNYHBEWGHGWECRSZZLVOSFQSETNSEXDFGF');
        return null;
      })();
      (() => {        //.......................................................................................................
        var _, count_attempts, get_random, i, on_stats, result, retries, valid_re, Ωbrbr__27;
        count_attempts = function(n) {
          return retries[n] = (retries[n] != null ? retries[n] : retries[n] = 0) + 1;
        };
        retries = {};
        on_stats = function(stats) {
          if (stats.name !== 'chr') {
            // help 'Ωbrbr__26', stats
            return null;
          }
          count_attempts(stats.retries);
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
          this.eq((Ωbrbr__27 = function() {
            return valid_re.test(result);
          }), true);
        }
        // debug 'Ωbrbr__28', retries
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
        var _, get_random, i, on_stats, result, result_rpr, retries, valid_re, Ωbrbr__30;
        retries = 0;
        on_stats = function(stats) {
          retries += stats.retries;
          // urge 'Ωbrbr__29', stats if stats.name is 'set_of_chrs'
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
          this.eq((Ωbrbr__30 = function() {
            return valid_re.test(result_rpr);
          }), true);
          // debug 'Ωbrbr__31', retries
          retries = 0;
        }
        return null;
      })();
      (() => {        //.......................................................................................................
        var _, get_random, i, on_stats, result, result_rpr, retries, valid_re, Ωbrbr__33, Ωbrbr__34;
        retries = 0;
        on_stats = function(stats) {
          retries += stats.retries;
          // urge 'Ωbrbr__32', stats if stats.name is 'set_of_chrs'
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
          this.eq((Ωbrbr__33 = function() {
            return result.size;
          }), 10);
          this.eq((Ωbrbr__34 = function() {
            return valid_re.test(result_rpr);
          }), true);
          // debug 'Ωbrbr__35', retries, rpr result
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
        var _, get_random, i, on_stats, random_text, result, retries, valid_re, Ωbrbr__37, Ωbrbr__38;
        retries = 0;
        on_stats = function(stats) {
          retries += stats.retries;
          // urge 'Ωbrbr__36', stats if stats.name is 'set_of_chrs'
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
          // debug 'Ωbrbr__39', retries, rpr result
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
        var get_random, i, idx, on_stats, result, result_retries, Ωbrbr__43;
        result_retries = null;
        on_stats = (stats) => {
          var Ωbrbr_result_retries__41;
          // info 'Ωbrbr__40', stats
          result_retries = stats.retries;
          return this.eq((Ωbrbr_result_retries__41 = function() {
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
          debug('Ωbrbr__42', rpr(result));
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
      var Get_random, internals, result_matchers, retry_matchers;
      ({Get_random, internals} = SFMODULES.unstable.require_random_tools());
      result_matchers = ['Ακθ', 'ΑΣ', 'ΑΜ', 'ΑίΥΔ', 'ΑήδΛ', 'ΑήςδΠ', 'ΑξΡΤΘ', 'ΑΤΚΞ', 'ΑγιΔε', 'Αή'];
      retry_matchers = [34, 15, 189, 121, 75, 47, 87, 43, 119, 200];
      (() => {        //.......................................................................................................
        var get_random, i, idx, on_stats, result, result_retries, Ωbrbr__47, Ωbrbr__48;
        result_retries = null;
        on_stats = (stats) => {
          var Ωbrbr_result_retries__45;
          if (stats.name !== 'text') {
            return null;
          }
          // info 'Ωbrbr__44', idx, stats
          result_retries = stats.retries;
          return this.eq((Ωbrbr_result_retries__45 = function() {
            return result_retries;
          }), retry_matchers[idx]);
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
      var Get_random, internals, result_matchers, retry_matchers;
      ({Get_random, internals} = SFMODULES.unstable.require_random_tools());
      result_matchers = ['Ακθ', 'ΑΣ', 'ΑΜ', 'ΑίΥΔ', 'ΑήδΛ', 'ΑήςδΠ', 'ΑξΡΤΘ', 'ΑΤΚΞ', 'ΑγιΔε', 'Αή'];
      retry_matchers = [34, 15, 189, 121, 75, 47, 87, 43, 119, 200];
      (() => {        //.......................................................................................................
        var get_random, get_random_text, i, idx, on_stats, result, result_retries, Ωbrbr__52, Ωbrbr__53;
        result_retries = null;
        on_stats = (stats) => {
          var Ωbrbr_result_retries__50;
          if (stats.name !== 'text') {
            return null;
          }
          // info 'Ωbrbr__49', idx, stats
          result_retries = stats.retries;
          return this.eq((Ωbrbr_result_retries__50 = function() {
            return result_retries;
          }), retry_matchers[idx]);
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
      ({Get_random, internals} = SFMODULES.unstable.require_random_tools());
      result_matchers = [16.084712848532945, 16.42560794018209, 14.009152099024504, 18.174642121884972, 12.86115032620728, 10.208302834071219, 18.753091448452324, 12.430183209944516, 12.627715056296438, 12.425259067676961];
      (() => {        // retry_matchers  = [ 34, 15, 189, 121, 75, 47, 87, 43, 119, 200, ]
        //.......................................................................................................
        var filter, get_random, get_random_float, i, idx, on_stats, result, result_retries, Ωbrbr__57;
        result_retries = null;
        on_stats = (stats) => {
          var Ωbrbr_result_retries__55;
          if (stats.name !== 'text') {
            return null;
          }
          // info 'Ωbrbr__54', idx, stats
          result_retries = stats.retries;
          return this.eq((Ωbrbr_result_retries__55 = function() {
            return result_retries;
          }), retry_matchers[idx]);
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
          debug('Ωbrbr__56', rpr(result));
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
      var Get_random, internals, result_matchers, retries_matcher;
      ({Get_random, internals} = SFMODULES.unstable.require_random_tools());
      result_matchers = [16, 16, 14, 12, 18, 18, 20, 10, 12, 12];
      retries_matcher = [0, 0, 0, 0, 1, 0, 1, 1, 2, 1];
      (() => {        //.......................................................................................................
        var filter, get_random, get_random_integer, i, idx, my_on_stats, result, retries, Ωbrbr__60, Ωbrbr__61;
        my_on_stats = (stats) => {
          debug('Ωbrbr__58', stats);
          if (stats.name === 'integer') {
            return retries.push(stats.retries);
          }
        };
        retries = [];
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
        debug('Ωbrbr__18', get_random.cfg);
        for (idx = i = 0; i <= 9; idx = ++i) {
          result = get_random_integer();
          debug('Ωbrbr__59', rpr(result));
          this.eq((Ωbrbr__60 = function() {
            return result;
          }), result_matchers[idx]);
        }
        this.eq((Ωbrbr__61 = function() {
          return retries;
        }), retries_matcher);
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
        var get_random, i, idx, matchers, on_stats, result, result_retries, Ωbrbr__64;
        result_retries = null;
        on_stats = (stats) => {
          var Ωbrbr_result_retries__63;
          if (stats.name === 'set_of_texts') {
            info('Ωbrbr__62', stats);
          }
          if (stats.name === 'set_of_texts') {
            result_retries = stats.retries;
          }
          return this.eq((Ωbrbr_result_retries__63 = function() {
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
          this.eq((Ωbrbr__64 = function() {
            return result;
          }), matchers[idx]);
        }
        // debug 'Ωbrbr__65', result
        return null;
      })();
      (() => {        //.......................................................................................................
        var get_random, i, idx, matchers, on_stats, result, result_retries, result_rpr, Ωbrbr__67;
        //.....................................................................................................
        result_retries = null;
        on_stats = (stats) => {
          var Ωbrbr_result_retries__66;
          if (stats.name === 'set_of_texts') {
            result_retries = stats.retries;
          }
          return this.eq((Ωbrbr_result_retries__66 = function() {
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
          this.eq((Ωbrbr__67 = function() {
            return result_rpr;
          }), matchers[idx].result_rpr);
        }
        // @eq ( Ωbrbr__68 = -> result_retries ), matchers[ idx ].result_retries
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    exhaustion: function() {
      var Get_random, internals;
      ({Get_random, internals} = SFMODULES.unstable.require_random_tools());
      (() => {        //.......................................................................................................
        var cfg, get_random, on_stats, result_retries, Ωbrbr__71;
        result_retries = null;
        on_stats = (stats) => {};
        // info 'Ωbrbr__69', stats if stats.name is 'walk'
        // result_retries = stats.retries if stats.name is 'walk'
        // @eq ( Ωbrbr_result_retries__70 = -> result_retries >= 0 ), true
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
        this.throws((Ωbrbr__71 = function() {
          return get_random.text(cfg);
        }), /exhausted/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var cfg, get_random, on_stats, result_retries, Ωbrbr__74;
        result_retries = null;
        on_stats = (stats) => {};
        // info 'Ωbrbr__72', stats if stats.name is 'walk'
        // result_retries = stats.retries if stats.name is 'walk'
        // @eq ( Ωbrbr_result_retries__73 = -> result_retries >= 0 ), true
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
        this.eq((Ωbrbr__74 = function() {
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
      ({Get_random, internals} = SFMODULES.unstable.require_random_tools());
      (() => {        //.......................................................................................................
        var get_random, on_stats, producer, result_retries, x;
        get_random = new Get_random({
          seed: settings.my_seed_1,
          on_stats
        });
        result_retries = null;
        on_stats = (stats) => {
          var Ωbrbr_result_retries__76;
          if (stats.name === 'walk') {
            info('Ωbrbr__75', stats);
          }
          if (stats.name === 'walk') {
            result_retries = stats.retries;
          }
          return this.eq((Ωbrbr_result_retries__76 = function() {
            return result_retries >= 0;
          }), true);
        };
        //.....................................................................................................
        producer = function() {
          return get_random.text({
            min: 'A',
            max: 0x017f,
            length: 3
          });
        };
        for (x of get_random.walk({
          producer,
          n: 11
        })) {
          debug('Ωbrbr__77', rpr(x));
        }
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    stats: function() {
      var Get_random, internals;
      ({Get_random, internals} = SFMODULES.unstable.require_random_tools());
      (() => {        //.......................................................................................................
        var on_exhaustion, sentinel, stats, Ωbrbr__78, Ωbrbr__79, Ωbrbr__80, Ωbrbr__81, Ωbrbr__82, Ωbrbr__83, Ωbrbr__88, Ωbrbr__89, Ωbrbr__90;
        sentinel = Symbol('sentinel');
        on_exhaustion = function() {
          return sentinel;
        };
        stats = new internals.Stats({
          name: 'something',
          on_exhaustion
        });
        this.eq((Ωbrbr__78 = function() {
          return stats.name;
        }), 'something');
        this.eq((Ωbrbr__79 = function() {
          return stats.max_retries;
        }), internals.max_retries);
        this.eq((Ωbrbr__80 = function() {
          return stats.retries;
        }), 0);
        this.throws((Ωbrbr__81 = function() {
          return stats.retries++;
        }), /Cannot set property/);
        this.eq((Ωbrbr__82 = function() {
          return stats.retry();
        }), internals.go_on);
        this.eq((Ωbrbr__83 = function() {
          return stats.retries;
        }), 1);
        stats._retries = internals.max_retries - 1;
        // debug 'Ωbrbr__84', stats
        // debug 'Ωbrbr__85', stats.retries
        // debug 'Ωbrbr__86', internals.max_retries
        // debug 'Ωbrbr__87', stats.max_retries
        this.eq((Ωbrbr__88 = function() {
          return stats.retry();
        }), internals.go_on);
        this.eq((Ωbrbr__89 = function() {
          return stats.retry();
        }), sentinel);
        this.eq((Ωbrbr__90 = function() {
          return stats.retry();
        }), sentinel);
        return null;
      })();
      (() => {        //.......................................................................................................
        var on_exhaustion, stats, Ωbrbr__91, Ωbrbr__92, Ωbrbr__93;
        on_exhaustion = void 0;
        stats = new internals.Stats({
          name: 'something',
          on_exhaustion
        });
        stats._retries = internals.max_retries - 1;
        this.eq((Ωbrbr__91 = function() {
          return stats.retry();
        }), internals.go_on);
        this.throws((Ωbrbr__92 = function() {
          return stats.retry();
        }), /exhausted/);
        this.throws((Ωbrbr__93 = function() {
          return stats.retry();
        }), /exhausted/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var on_exhaustion, stats, Ωbrbr__94, Ωbrbr__95, Ωbrbr__96;
        on_exhaustion = null;
        stats = new internals.Stats({
          name: 'something',
          on_exhaustion
        });
        stats._retries = internals.max_retries - 1;
        this.eq((Ωbrbr__94 = function() {
          return stats.retry();
        }), internals.go_on);
        this.throws((Ωbrbr__95 = function() {
          return stats.retry();
        }), /exhausted/);
        this.throws((Ωbrbr__96 = function() {
          return stats.retry();
        }), /exhausted/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var on_exhaustion, stats, Ωbrbr__97, Ωbrbr__98, Ωbrbr__99;
        on_exhaustion = 'error';
        stats = new internals.Stats({
          name: 'something',
          on_exhaustion
        });
        stats._retries = internals.max_retries - 1;
        this.eq((Ωbrbr__97 = function() {
          return stats.retry();
        }), internals.go_on);
        this.throws((Ωbrbr__98 = function() {
          return stats.retry();
        }), /exhausted/);
        this.throws((Ωbrbr__99 = function() {
          return stats.retry();
        }), /exhausted/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var max_retries, on_exhaustion, on_stats, sentinel, stats, stats_result, Ωbrbr_100, Ωbrbr_101, Ωbrbr_102, Ωbrbr_103, Ωbrbr_104, Ωbrbr_105, Ωbrbr_106, Ωbrbr_107, Ωbrbr_108, Ωbrbr_109, Ωbrbr_110, Ωbrbr_111;
        sentinel = Symbol('sentinel');
        stats_result = null;
        on_exhaustion = function() {
          return sentinel;
        };
        on_stats = function() {
          return sentinel;
        };
        max_retries = 3;
        stats = new internals.Stats({
          name: 'something',
          on_exhaustion,
          on_stats,
          max_retries
        });
        this.eq((Ωbrbr_100 = function() {
          return stats.retries;
        }), 0);
        this.eq((Ωbrbr_101 = function() {
          return stats.retry();
        }), internals.go_on);
        this.eq((Ωbrbr_102 = function() {
          return stats.retries;
        }), 1);
        this.eq((Ωbrbr_103 = function() {
          return stats.retry();
        }), internals.go_on);
        this.eq((Ωbrbr_104 = function() {
          return stats.retries;
        }), 2);
        this.eq((Ωbrbr_105 = function() {
          return stats.retry();
        }), internals.go_on);
        this.eq((Ωbrbr_106 = function() {
          return stats.retries;
        }), 3);
        this.eq((Ωbrbr_107 = function() {
          return stats.retry();
        }), sentinel);
        this.eq((Ωbrbr_108 = function() {
          return stats.finish('value');
        }), 'value');
        this.throws((Ωbrbr_109 = function() {
          return stats.finish('value');
        }), /finished/);
        this.throws((Ωbrbr_110 = function() {
          return stats.retry();
        }), /finished/);
        this.throws((Ωbrbr_111 = function() {
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
      var a, b, c, clean, d, guytest_cfg;
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
      // # ( new Test guytest_cfg ).test { walk: tests.walk, }
      // # ( new Test guytest_cfg ).test { exhaustion: tests.exhaustion, }
      // ( new Test guytest_cfg ).test { stats: tests.stats, }
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
          var results;
          results = [];
          for (k in x) {
            v = x[k];
            if (v != null) {
              results.push([k, v]);
            }
          }
          return results;
        })());
      };
      debug('Ωbrbr__18', d = {...a, ...(clean(b)), ...(clean(c))});
      //.........................................................................................................
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLFFBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUE7SUFBQTsrREFBQTs7O0VBR0EsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixXQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsS0FIRixFQUlFLElBSkYsRUFLRSxJQUxGLEVBTUUsSUFORixFQU9FLEdBUEYsRUFRRSxJQVJGLEVBU0UsT0FURixFQVVFLEdBVkYsQ0FBQSxHQVU0QixHQUFHLENBQUMsR0FWaEM7O0VBV0EsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUI7O0VBQ0EsS0FBQSxHQUE0QixRQUFBLENBQUUsQ0FBRixDQUFBO1dBQVMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFmLENBQXFCLENBQXJCO0VB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QUFBLEVBQWU7TUFBN0QsRUFEaEI7Ozs7O01BTUUsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QjtRQUFFLDJCQUFBLEVBQTZCLEtBQUssQ0FBQztNQUFyQyxDQUE5QjtNQUNBLENBQUEsR0FBSSxDQUFBO01BQ0osQ0FBQSxHQUFJO1FBQUUsQ0FBQSxFQUFHO01BQUw7TUFDSixDQUFBLEdBQUk7UUFBRSxDQUFBLEVBQUc7TUFBTDtNQUNKLEtBQUEsR0FBUSxRQUFBLENBQUUsQ0FBRixDQUFBO0FBQVEsWUFBQSxDQUFBLEVBQUE7ZUFBQyxNQUFNLENBQUMsV0FBUDs7QUFBcUI7VUFBQSxLQUFBLE1BQUE7O2dCQUE2QjsyQkFBN0IsQ0FBRSxDQUFGLEVBQUssQ0FBTDs7VUFBQSxDQUFBOztZQUFyQjtNQUFUO01BQ1IsS0FBQSxDQUFNLFdBQU4sRUFBbUIsQ0FBQSxHQUFJLENBQUUsR0FBQSxDQUFGLEVBQVEsR0FBQSxDQUFFLEtBQUEsQ0FBTSxDQUFOLENBQUYsQ0FBUixFQUF3QixHQUFBLENBQUUsS0FBQSxDQUFNLENBQU4sQ0FBRixDQUF4QixDQUF2QixFQVhGOztBQWFFLGFBQU87SUFkK0IsQ0FBQSxJQUF4Qzs7QUF6bEJBIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbid1c2Ugc3RyaWN0J1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnYnJpY2FicmFjJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHdoaXRlXG4gIGJsdWVcbiAgZ29sZFxuICBncmV5XG4gIHJlZFxuICBib2xkXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG53cml0ZSAgICAgICAgICAgICAgICAgICAgID0gKCBwICkgLT4gcHJvY2Vzcy5zdGRvdXQud3JpdGUgcFxuQyAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2Fuc2lzJ1xueyBuZmEgfSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zaW5nbGUtZmlsZS1tb2R1bGVzJ1xuXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5zZXR0aW5ncyA9XG4gICAgbXlfc2VlZF8xOiAyODczNDYyMTM0XG4gICAgbXlfc2VlZF8yOiAyODczNDYyMTM0ICsgMVxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkB0ZXN0cyA9IHRlc3RzID1cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9yYW5kb21fZmxvYXQ6IC0+XG4gICAgeyBHZXRfcmFuZG9tLFxuICAgICAgaW50ZXJuYWxzLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3JhbmRvbV90b29scygpXG4gICAgbWF0Y2hlcnMgICAgICAgID0gW11cbiAgICBwcm9iZXMgICAgICAgICAgPSBbXVxuICAgIG1heF9jb3VudCAgICAgICA9IDFlNFxuICAgIHNlZW4gICAgICAgICAgICA9IG5ldyBTZXQoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGdldF9yYW5kb20gPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgfVxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4uIG1heF9jb3VudCBdXG4gICAgICAgIG1hdGNoZXJzLnB1c2ggdCA9IGdldF9yYW5kb20uZmxvYXQoKVxuICAgICAgICBzZWVuLmFkZCB0XG4gICAgICBAZXEgKCDOqWJyYnJfX18xID0gLT4gbWF0Y2hlcnMuZXZlcnkgKCB0ICkgLT4gMCA8PSB0IDw9IDEgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlicmJyX19fMiA9IC0+IHNlZW4uc2l6ZSApLCBtYXhfY291bnRcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZ2V0X3JhbmRvbSA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCB9XG4gICAgICBmb3IgaWR4IGluIFsgMCAuLi4gbWF4X2NvdW50IF1cbiAgICAgICAgcHJvYmVzLnB1c2ggdCA9IGdldF9yYW5kb20uZmxvYXQoKVxuICAgICAgQGVxICggzqlicmJyX19fMyA9IC0+IHByb2JlcyApLCBtYXRjaGVyc1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBnZXRfcmFuZG9tID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzIsIH1cbiAgICAgIGNvdW50ID0gMFxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4uIG1heF9jb3VudCBdXG4gICAgICAgIGNvdW50KysgaWYgKCB0ID0gZ2V0X3JhbmRvbS5mbG9hdCgpICkgaW4gbWF0Y2hlcnNcbiAgICAgIEBlcSAoIM6pYnJicl9fXzQgPSAtPiBjb3VudCApLCAwXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGdldF9yYW5kb20gICAgPSBuZXcgR2V0X3JhbmRvbSgpXG4gICAgICBjb3VudCA9IDBcbiAgICAgIGZvciBpZHggaW4gWyAwIC4uLiBtYXhfY291bnQgXVxuICAgICAgICBjb3VudCsrIGlmICggdCA9IGdldF9yYW5kb20uZmxvYXQoKSApIGluIG1hdGNoZXJzXG4gICAgICBAZXEgKCDOqWJyYnJfX181ID0gLT4gY291bnQgPCAxMCApLCB0cnVlXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIH1cbiAgICAgIG1pbiAgICAgICAgID0gMTAwXG4gICAgICBtYXggICAgICAgICA9IDk5OVxuICAgICAgYnVja2V0cyAgICAgPSB7fVxuICAgICAgZm9yIGJ1Y2tldCBpbiBbIG1pbiAuLi4gbWF4IF1cbiAgICAgICAgYnVja2V0c1sgTWF0aC5mbG9vciBidWNrZXQgLyAxMCBdID0gMFxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4uIG1heF9jb3VudCBdXG4gICAgICAgIHQgPSBnZXRfcmFuZG9tLmZsb2F0IHsgbWluLCBtYXgsIH1cbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyX19fNicsIHRcbiAgICAgICAgYnVja2V0ID0gTWF0aC5mbG9vciB0IC8gMTBcbiAgICAgICAgYnVja2V0c1sgYnVja2V0IF0rK1xuICAgICAgICBAZXEgKCDOqWJyYnJfX183ID0gLT4gbWluIDw9IHQgPD0gbWF4ICksIHRydWVcbiAgICAgIGZvciBfLCBjb3VudCBvZiBidWNrZXRzXG4gICAgICAgIEBlcSAoIM6pYnJicl9fXzggPSAtPiA1MCA8PSBjb3VudCA8PSAxNTAgKSwgdHJ1ZVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRfcmFuZG9tX2ludGVnZXI6IC0+XG4gICAgeyBHZXRfcmFuZG9tLFxuICAgICAgaW50ZXJuYWxzLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3JhbmRvbV90b29scygpXG4gICAgbWF4X2NvdW50ICAgICAgID0gMWU0XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZ2V0X3JhbmRvbSAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgfVxuICAgICAgbWluICAgICAgICAgPSAxMDBcbiAgICAgIG1heCAgICAgICAgID0gOTk5XG4gICAgICBidWNrZXRzICAgICA9IHt9XG4gICAgICBmb3IgYnVja2V0IGluIFsgbWluIC4uLiBtYXggXVxuICAgICAgICBidWNrZXRzWyBNYXRoLmZsb29yIGJ1Y2tldCAvIDEwIF0gPSAwXG4gICAgICBmb3IgaWR4IGluIFsgMCAuLi4gbWF4X2NvdW50IF1cbiAgICAgICAgdCA9IGdldF9yYW5kb20uaW50ZWdlciB7IG1pbiwgbWF4LCB9XG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fXzknLCB0XG4gICAgICAgIGJ1Y2tldCA9IE1hdGguZmxvb3IgdCAvIDEwXG4gICAgICAgIGJ1Y2tldHNbIGJ1Y2tldCBdKytcbiAgICAgICAgQGVxICggzqlicmJyX18xMCA9IC0+IG1pbiA8PSB0IDw9IG1heCApLCB0cnVlXG4gICAgICBmb3IgXywgY291bnQgb2YgYnVja2V0c1xuICAgICAgICBAZXEgKCDOqWJyYnJfXzExID0gLT4gNTAgPD0gY291bnQgPD0gMTUwICksIHRydWVcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0X3JhbmRvbV9jaHI6IC0+XG4gICAgeyBHZXRfcmFuZG9tLFxuICAgICAgaW50ZXJuYWxzLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3JhbmRvbV90b29scygpXG4gICAgbWF4X2NvdW50ICAgICAgID0gMWU0XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZ2V0X3JhbmRvbSAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgfVxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4uIG1heF9jb3VudCBdXG4gICAgICAgIHQgPSBnZXRfcmFuZG9tLmNocigpXG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fMTInLCBycHIgdFxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBnZXRfcmFuZG9tICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCB9XG4gICAgICByZXN1bHQgPSAoIGdldF9yYW5kb20uY2hyIHsgbWluOiAnQScsIG1heDogJ1onLCB9IGZvciBfIGluIFsgMSAuLiA0MCBdICkuam9pbiAnJ1xuICAgICAgQGVxICggzqlicmJyX18xMyA9IC0+IHJlc3VsdCApLCAnUFFLRVNVVU5ZSEJFV0dIR1dFQ1JTWlpMVk9TRlFTRVROU0VYREZHRidcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgb25fc3RhdHMgICAgPSAoIHN0YXRzICkgLT5cbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyX18xNCcsIHN0YXRzXG4gICAgICBnZXRfcmFuZG9tICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8yLCBvbl9zdGF0cywgfVxuICAgICAgcmVzdWx0ICAgICAgPSAoIGdldF9yYW5kb20uY2hyIHsgbWluOiAnQScsIG1heDogJ1onLCB9IGZvciBfIGluIFsgMSAuLiA0MCBdICkuam9pbiAnJ1xuICAgICAgQGVxICggzqlicmJyX18xNSA9IC0+IHJlc3VsdCBpcyAnUFFLRVNVVU5ZSEJFV0dIR1dFQ1JTWlpMVk9TRlFTRVROU0VYREZHRicgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6pYnJicl9fMTYgPSAtPiAvXltBLVpdezQwfSQvLnRlc3QgcmVzdWx0ICksIHRydWVcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgb25fc3RhdHMgICAgPSAoIHN0YXRzICkgLT5cbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyX18xNycsIHN0YXRzXG4gICAgICBnZXRfcmFuZG9tICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8yLCBvbl9zdGF0cywgfVxuICAgICAgcmVzdWx0ICAgICAgPSAoIGdldF9yYW5kb20uY2hyIHsgbWF4OiAweGZmLCBmaWx0ZXI6IC9bYWVpb3V5QUVJT1VZXS8sIH0gZm9yIF8gaW4gWyAxIC4uIDQwIF0gKS5qb2luICcnXG4gICAgICBkZWJ1ZyAnzqlicmJyX18xOCcsIHJwciByZXN1bHRcbiAgICAgIEBlcSAoIM6pYnJicl9fMTkgPSAtPiAvXlthZWlvdXlBRUlPVVldezQwfSQvLnRlc3QgcmVzdWx0ICksIHRydWVcbiAgICAgIEBlcSAoIM6pYnJicl9fMjAgPSAtPiByZXN1bHQgKSwgJ3l5VXlJdXVVYWFJdVVhVUlJeU9Jb0FZRU9pT1lJdWlPdWFpQVVVZUUnXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9yYW5kb21fY2hyX3Byb2R1Y2VyOiAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9yYW5kb21fdG9vbHMoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHJldHJpZXMgICAgID0gMFxuICAgICAgb25fc3RhdHMgICAgPSAoIHN0YXRzICkgLT4gcmV0cmllcyArPSBzdGF0cy5yZXRyaWVzIGlmIHN0YXRzLm5hbWUgaXMgJ2NocidcbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzIsIG9uX3N0YXRzLCB9XG4gICAgICBjaHIgICAgICAgICA9IGdldF9yYW5kb20uY2hyX3Byb2R1Y2VyIHsgbWF4OiAweGZmLCBmaWx0ZXI6IC9bYWVpb3V5QUVJT1VZXS8sIH1cbiAgICAgIHJlc3VsdCAgICAgID0gKCBjaHIoKSBmb3IgXyBpbiBbIDEgLi4gNDAgXSApLmpvaW4gJydcbiAgICAgIGRlYnVnICfOqWJyYnJfXzIxJywgcmV0cmllcywgKCBycHIgcmVzdWx0IClcbiAgICAgIEBlcSAoIM6pYnJicl9fMjIgPSAtPiAvXlthZWlvdXlBRUlPVVldezQwfSQvLnRlc3QgcmVzdWx0ICksIHRydWVcbiAgICAgIEBlcSAoIM6pYnJicl9fMjMgPSAtPiByZXN1bHQgKSwgJ3l5VXlJdXVVYWFJdVVhVUlJeU9Jb0FZRU9pT1lJdWlPdWFpQVVVZUUnXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9yYW5kb21fdGV4dDogLT5cbiAgICB7IEdldF9yYW5kb20sXG4gICAgICBpbnRlcm5hbHMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfcmFuZG9tX3Rvb2xzKClcbiAgICBtYXhfY291bnQgICAgICAgPSAxZTRcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBvbl9zdGF0cyAgICA9ICggc3RhdHMgKSAtPlxuICAgICAgICAjIGluZm8gJ86pYnJicl9fMjQnLCBzdGF0c1xuICAgICAgZ2V0X3JhbmRvbSAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgb25fc3RhdHMsIH1cbiAgICAgIHJlc3VsdCAgICAgID0gZ2V0X3JhbmRvbS50ZXh0IHsgbWluOiAnQScsIG1heDogJ1onLCBsZW5ndGg6IDQwLCB9XG4gICAgICBAZXEgKCDOqWJyYnJfXzI1ID0gLT4gcmVzdWx0ICksICdQUUtFU1VVTllIQkVXR0hHV0VDUlNaWkxWT1NGUVNFVE5TRVhERkdGJ1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBjb3VudF9hdHRlbXB0cyAgPSAoIG4gKSAtPiByZXRyaWVzWyBuIF0gPSAoIHJldHJpZXNbIG4gXSA/PSAwICkgKyAxXG4gICAgICByZXRyaWVzICAgICAgICA9IHt9XG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgLT5cbiAgICAgICAgIyBoZWxwICfOqWJyYnJfXzI2Jywgc3RhdHNcbiAgICAgICAgcmV0dXJuIG51bGwgdW5sZXNzIHN0YXRzLm5hbWUgaXMgJ2NocidcbiAgICAgICAgY291bnRfYXR0ZW1wdHMgc3RhdHMucmV0cmllc1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgdmFsaWRfcmUgICAgPSAvLy8gXiBbIFxcdTAwMjAtXFx1MDA3ZSBcXHUwMGEwLVxcdTAwYWMgXFx1MDBhZS1cXHUwMGZmIF17IDE1MCB9ICQgLy8vdlxuICAgICAgZ2V0X3JhbmRvbSAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IG51bGwsIG9uX3N0YXRzLCB9XG4gICAgICBmb3IgXyBpbiBbIDEgLi4gMSBdXG4gICAgICAjIGZvciBfIGluIFsgMSAuLiAxMCBdXG4gICAgICAgIHJlc3VsdCA9IGdldF9yYW5kb20udGV4dCB7IG1pbjogMHgwMCwgbWF4OiAweGZmLCBsZW5ndGg6IDE1MCwgfVxuICAgICAgICBAZXEgKCDOqWJyYnJfXzI3ID0gLT4gdmFsaWRfcmUudGVzdCByZXN1bHQgKSwgdHJ1ZVxuICAgICAgIyBkZWJ1ZyAnzqlicmJyX18yOCcsIHJldHJpZXNcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0X3JhbmRvbV9zZXRfb2ZfY2hyczogLT5cbiAgICB7IEdldF9yYW5kb20sXG4gICAgICBpbnRlcm5hbHMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfcmFuZG9tX3Rvb2xzKClcbiAgICBtYXhfY291bnQgICAgICAgPSAxZTRcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICByZXRyaWVzICAgICAgICAgPSAwXG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgLT5cbiAgICAgICAgcmV0cmllcyArPSBzdGF0cy5yZXRyaWVzXG4gICAgICAgICMgdXJnZSAnzqlicmJyX18yOScsIHN0YXRzIGlmIHN0YXRzLm5hbWUgaXMgJ3NldF9vZl9jaHJzJ1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgdmFsaWRfcmUgICAgPSAvLy8gXiBbIFxcdTAwMjAtXFx1MDA3ZSBcXHUwMGEwLVxcdTAwYWMgXFx1MDBhZS1cXHUwMGZmIF17IDUwIH0gJCAvLy92XG4gICAgICBnZXRfcmFuZG9tICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogbnVsbCwgb25fc3RhdHMsIH1cbiAgICAgIGZvciBfIGluIFsgMSAuLiAyMCBdXG4gICAgICAgIHJlc3VsdCAgICAgID0gZ2V0X3JhbmRvbS5zZXRfb2ZfY2hycyB7IG1pbjogMHgwMCwgbWF4OiAweGZmLCBzaXplOiA1MCwgfVxuICAgICAgICByZXN1bHRfcnByICA9IFsgcmVzdWx0Li4uLCBdLmpvaW4gJydcbiAgICAgICAgQGVxICggzqlicmJyX18zMCA9IC0+IHZhbGlkX3JlLnRlc3QgcmVzdWx0X3JwciApLCB0cnVlXG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fMzEnLCByZXRyaWVzXG4gICAgICAgIHJldHJpZXMgPSAwXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHJldHJpZXMgICAgICAgICA9IDBcbiAgICAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSAtPlxuICAgICAgICByZXRyaWVzICs9IHN0YXRzLnJldHJpZXNcbiAgICAgICAgIyB1cmdlICfOqWJyYnJfXzMyJywgc3RhdHMgaWYgc3RhdHMubmFtZSBpcyAnc2V0X29mX2NocnMnXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB2YWxpZF9yZSAgICA9IC8vLyBeIFsgMC05IF17IDEwIH0gJCAvLy92XG4gICAgICBnZXRfcmFuZG9tICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogbnVsbCwgb25fc3RhdHMsIH1cbiAgICAgIGZvciBfIGluIFsgMSAuLiAyMCBdXG4gICAgICAgIHJlc3VsdCAgICAgID0gZ2V0X3JhbmRvbS5zZXRfb2ZfY2hycyB7IG1pbjogJzAnLCBtYXg6ICc5Jywgc2l6ZTogMTAsIH1cbiAgICAgICAgcmVzdWx0X3JwciAgPSBbIHJlc3VsdC4uLiwgXS5qb2luICcnXG4gICAgICAgIEBlcSAoIM6pYnJicl9fMzMgPSAtPiByZXN1bHQuc2l6ZSAgICAgICAgICAgICAgKSwgMTBcbiAgICAgICAgQGVxICggzqlicmJyX18zNCA9IC0+IHZhbGlkX3JlLnRlc3QgcmVzdWx0X3JwciApLCB0cnVlXG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fMzUnLCByZXRyaWVzLCBycHIgcmVzdWx0XG4gICAgICAgIHJldHJpZXMgPSAwXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9yYW5kb21fc2V0X29mX3RleHRzOiAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9yYW5kb21fdG9vbHMoKVxuICAgIG1heF9jb3VudCAgICAgICA9IDFlNFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHJldHJpZXMgICAgICAgICA9IDBcbiAgICAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSAtPlxuICAgICAgICByZXRyaWVzICs9IHN0YXRzLnJldHJpZXNcbiAgICAgICAgIyB1cmdlICfOqWJyYnJfXzM2Jywgc3RhdHMgaWYgc3RhdHMubmFtZSBpcyAnc2V0X29mX2NocnMnXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB2YWxpZF9yZSAgICA9IC8vLyBeIFsgMC05IF17IDMgfSAkIC8vL3ZcbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBudWxsLCBvbl9zdGF0cywgfVxuICAgICAgZm9yIF8gaW4gWyAxIC4uIDEgXVxuICAgICAgICByZXN1bHQgICAgICA9IGdldF9yYW5kb20uc2V0X29mX3RleHRzIHsgbWluOiAnMCcsIG1heDogJzknLCBsZW5ndGg6IDMsIHNpemU6IDEwLCB9XG4gICAgICAgIEBlcSAoIM6pYnJicl9fMzcgPSAtPiByZXN1bHQuc2l6ZSAgICAgICAgICAgICAgKSwgMTBcbiAgICAgICAgZm9yIHJhbmRvbV90ZXh0IGZyb20gcmVzdWx0XG4gICAgICAgICAgQGVxICggzqlicmJyX18zOCA9IC0+IHZhbGlkX3JlLnRlc3QgcmFuZG9tX3RleHQgKSwgdHJ1ZVxuICAgICAgICAjIGRlYnVnICfOqWJyYnJfXzM5JywgcmV0cmllcywgcnByIHJlc3VsdFxuICAgICAgICByZXRyaWVzID0gMFxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRfcmFuZG9tX3RleHRfb2ZfdmFyaWFibGVfbGVuZ3RoOiAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9yYW5kb21fdG9vbHMoKVxuICAgIG1hdGNoZXJzICAgICAgICA9IFsgJ861zqfOmicsICfOv869zq7PhicsICfOks6ZJywgJ86fzqDOn8+CzpsnLCAnzrcnLCAnz4jPiM6pzr8nLCAnzrrOnc61JywgJ86azrzOr866JywgJ8+FzpknLCAnzp/OmycsIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICByZXN1bHRfcmV0cmllcyAgPSBudWxsXG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgPT5cbiAgICAgICAgIyBpbmZvICfOqWJyYnJfXzQwJywgc3RhdHNcbiAgICAgICAgcmVzdWx0X3JldHJpZXMgPSBzdGF0cy5yZXRyaWVzXG4gICAgICAgIEBlcSAoIM6pYnJicl9yZXN1bHRfcmV0cmllc19fNDEgPSAtPiByZXN1bHRfcmV0cmllcyA+PSAwICksIHRydWVcbiAgICAgIGdldF9yYW5kb20gID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIG9uX3N0YXRzLCB9XG4gICAgICBmb3IgaWR4IGluIFsgMCAuLiA5IF1cbiAgICAgICAgcmVzdWx0ICAgICAgPSBnZXRfcmFuZG9tLnRleHQgeyBtaW46ICfOkScsIG1heDogJ8+JJywgbWluX2xlbmd0aDogMSwgbWF4X2xlbmd0aDogNSwgfVxuICAgICAgICBkZWJ1ZyAnzqlicmJyX180MicsIHJwciByZXN1bHRcbiAgICAgICAgQGVxICggzqlicmJyX180MyA9IC0+IHJlc3VsdCApLCBtYXRjaGVyc1sgaWR4IF1cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0X3JhbmRvbV90ZXh0X29mX3ZhcmlhYmxlX2xlbmd0aF93aXRoX2ZpbHRlcjogLT5cbiAgICB7IEdldF9yYW5kb20sXG4gICAgICBpbnRlcm5hbHMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfcmFuZG9tX3Rvb2xzKClcbiAgICByZXN1bHRfbWF0Y2hlcnMgPSBbICfOkc66zrgnLCAnzpHOoycsICfOkc6cJywgJ86Rzq/Opc6UJywgJ86Rzq7OtM6bJywgJ86Rzq7Pgs60zqAnLCAnzpHOvs6hzqTOmCcsICfOkc6kzprOnicsICfOkc6zzrnOlM61JywgJ86Rzq4nLCBdXG4gICAgcmV0cnlfbWF0Y2hlcnMgID0gWyAzNCwgMTUsIDE4OSwgMTIxLCA3NSwgNDcsIDg3LCA0MywgMTE5LCAyMDAsIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICByZXN1bHRfcmV0cmllcyAgPSBudWxsXG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgPT5cbiAgICAgICAgcmV0dXJuIG51bGwgdW5sZXNzIHN0YXRzLm5hbWUgaXMgJ3RleHQnXG4gICAgICAgICMgaW5mbyAnzqlicmJyX180NCcsIGlkeCwgc3RhdHNcbiAgICAgICAgcmVzdWx0X3JldHJpZXMgPSBzdGF0cy5yZXRyaWVzXG4gICAgICAgIEBlcSAoIM6pYnJicl9yZXN1bHRfcmV0cmllc19fNDUgPSAtPiAgcmVzdWx0X3JldHJpZXMgKSwgcmV0cnlfbWF0Y2hlcnNbIGlkeCBdXG4gICAgICBnZXRfcmFuZG9tICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCBvbl9zdGF0cywgfVxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4gOSBdXG4gICAgICAgIHJlc3VsdCAgICAgID0gZ2V0X3JhbmRvbS50ZXh0IHsgbWluOiAnzpEnLCBtYXg6ICfPiScsIG1pbl9sZW5ndGg6IDEsIG1heF9sZW5ndGg6IDUsIGZpbHRlcjogL17OkS92LCB9XG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fNDYnLCBycHIgcmVzdWx0XG4gICAgICAgIEBlcSAoIM6pYnJicl9fNDcgPSAtPiAvXs6RW86RLc+JXXswLDR9JC92LnRlc3QgcmVzdWx0ICksIHRydWVcbiAgICAgICAgQGVxICggzqlicmJyX180OCA9IC0+IHJlc3VsdCApLCByZXN1bHRfbWF0Y2hlcnNbIGlkeCBdXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9yYW5kb21fdGV4dF9wcm9kdWNlcjogLT5cbiAgICB7IEdldF9yYW5kb20sXG4gICAgICBpbnRlcm5hbHMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfcmFuZG9tX3Rvb2xzKClcbiAgICByZXN1bHRfbWF0Y2hlcnMgPSBbICfOkc66zrgnLCAnzpHOoycsICfOkc6cJywgJ86Rzq/Opc6UJywgJ86Rzq7OtM6bJywgJ86Rzq7Pgs60zqAnLCAnzpHOvs6hzqTOmCcsICfOkc6kzprOnicsICfOkc6zzrnOlM61JywgJ86Rzq4nLCBdXG4gICAgcmV0cnlfbWF0Y2hlcnMgID0gWyAzNCwgMTUsIDE4OSwgMTIxLCA3NSwgNDcsIDg3LCA0MywgMTE5LCAyMDAsIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICByZXN1bHRfcmV0cmllcyAgPSBudWxsXG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgPT5cbiAgICAgICAgcmV0dXJuIG51bGwgdW5sZXNzIHN0YXRzLm5hbWUgaXMgJ3RleHQnXG4gICAgICAgICMgaW5mbyAnzqlicmJyX180OScsIGlkeCwgc3RhdHNcbiAgICAgICAgcmVzdWx0X3JldHJpZXMgPSBzdGF0cy5yZXRyaWVzXG4gICAgICAgIEBlcSAoIM6pYnJicl9yZXN1bHRfcmV0cmllc19fNTAgPSAtPiAgcmVzdWx0X3JldHJpZXMgKSwgcmV0cnlfbWF0Y2hlcnNbIGlkeCBdXG4gICAgICBnZXRfcmFuZG9tICAgICAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgb25fc3RhdHMsIH1cbiAgICAgIGdldF9yYW5kb21fdGV4dCA9IGdldF9yYW5kb20udGV4dF9wcm9kdWNlciB7IG1pbjogJ86RJywgbWF4OiAnz4knLCBtaW5fbGVuZ3RoOiAxLCBtYXhfbGVuZ3RoOiA1LCBmaWx0ZXI6IC9ezpEvdiwgfVxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4gOSBdXG4gICAgICAgIHJlc3VsdCAgICAgID0gZ2V0X3JhbmRvbV90ZXh0KClcbiAgICAgICAgIyBkZWJ1ZyAnzqlicmJyX181MScsIHJwciByZXN1bHRcbiAgICAgICAgQGVxICggzqlicmJyX181MiA9IC0+IC9ezpFbzpEtz4ldezAsNH0kL3YudGVzdCByZXN1bHQgKSwgdHJ1ZVxuICAgICAgICBAZXEgKCDOqWJyYnJfXzUzID0gLT4gcmVzdWx0ICksIHJlc3VsdF9tYXRjaGVyc1sgaWR4IF1cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0X3JhbmRvbV9mbG9hdF9wcm9kdWNlcjogLT5cbiAgICB7IEdldF9yYW5kb20sXG4gICAgICBpbnRlcm5hbHMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfcmFuZG9tX3Rvb2xzKClcbiAgICByZXN1bHRfbWF0Y2hlcnMgPSBbIDE2LjA4NDcxMjg0ODUzMjk0NSwgMTYuNDI1NjA3OTQwMTgyMDksIDE0LjAwOTE1MjA5OTAyNDUwNCwgMTguMTc0NjQyMTIxODg0OTcyLCAxMi44NjExNTAzMjYyMDcyOCwgMTAuMjA4MzAyODM0MDcxMjE5LCAxOC43NTMwOTE0NDg0NTIzMjQsIDEyLjQzMDE4MzIwOTk0NDUxNiwgMTIuNjI3NzE1MDU2Mjk2NDM4LCAxMi40MjUyNTkwNjc2NzY5NjEsIF1cbiAgICAjIHJldHJ5X21hdGNoZXJzICA9IFsgMzQsIDE1LCAxODksIDEyMSwgNzUsIDQ3LCA4NywgNDMsIDExOSwgMjAwLCBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgcmVzdWx0X3JldHJpZXMgID0gbnVsbFxuICAgICAgb25fc3RhdHMgICAgICAgID0gKCBzdGF0cyApID0+XG4gICAgICAgIHJldHVybiBudWxsIHVubGVzcyBzdGF0cy5uYW1lIGlzICd0ZXh0J1xuICAgICAgICAjIGluZm8gJ86pYnJicl9fNTQnLCBpZHgsIHN0YXRzXG4gICAgICAgIHJlc3VsdF9yZXRyaWVzID0gc3RhdHMucmV0cmllc1xuICAgICAgICBAZXEgKCDOqWJyYnJfcmVzdWx0X3JldHJpZXNfXzU1ID0gLT4gIHJlc3VsdF9yZXRyaWVzICksIHJldHJ5X21hdGNoZXJzWyBpZHggXVxuICAgICAgZ2V0X3JhbmRvbSAgICAgICAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgb25fc3RhdHMsIH1cbiAgICAgIGZpbHRlciAgICAgICAgICAgID0gKCBuICkgLT4gKCBNYXRoLmZsb29yIG4gKSAlJSAyIGlzIDBcbiAgICAgIGdldF9yYW5kb21fZmxvYXQgID0gZ2V0X3JhbmRvbS5mbG9hdF9wcm9kdWNlciB7IG1pbjogMTAsIG1heDogMjAsIGZpbHRlciwgfVxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4gOSBdXG4gICAgICAgIHJlc3VsdCAgICAgID0gZ2V0X3JhbmRvbV9mbG9hdCgpXG4gICAgICAgIGRlYnVnICfOqWJyYnJfXzU2JywgcnByIHJlc3VsdFxuICAgICAgICBAZXEgKCDOqWJyYnJfXzU3ID0gLT4gcmVzdWx0ICksIHJlc3VsdF9tYXRjaGVyc1sgaWR4IF1cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0X3JhbmRvbV9pbnRlZ2VyX3Byb2R1Y2VyOiAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9yYW5kb21fdG9vbHMoKVxuICAgIHJlc3VsdF9tYXRjaGVycyA9IFsgMTYsIDE2LCAxNCwgMTIsIDE4LCAxOCwgMjAsIDEwLCAxMiwgMTIsIF1cbiAgICByZXRyaWVzX21hdGNoZXIgPSBbIDAsIDAsIDAsIDAsIDEsIDAsIDEsIDEsIDIsIDEgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIG15X29uX3N0YXRzICAgICAgICAgPSAoIHN0YXRzICkgPT5cbiAgICAgICAgZGVidWcgJ86pYnJicl9fNTgnLCBzdGF0c1xuICAgICAgICByZXRyaWVzLnB1c2ggc3RhdHMucmV0cmllcyBpZiBzdGF0cy5uYW1lIGlzICdpbnRlZ2VyJ1xuICAgICAgcmV0cmllcyAgICAgICAgICAgICA9IFtdXG4gICAgICBnZXRfcmFuZG9tICAgICAgICAgID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIG9uX3N0YXRzOiBteV9vbl9zdGF0cywgfVxuICAgICAgZmlsdGVyICAgICAgICAgICAgICA9ICggbiApIC0+ICggTWF0aC5mbG9vciBuICkgJSUgMiBpcyAwXG4gICAgICBnZXRfcmFuZG9tX2ludGVnZXIgID0gZ2V0X3JhbmRvbS5pbnRlZ2VyX3Byb2R1Y2VyIHsgbWluOiAxMCwgbWF4OiAyMCwgZmlsdGVyLCB9XG4gICAgICBkZWJ1ZyAnzqlicmJyX18xOCcsIGdldF9yYW5kb20uY2ZnXG4gICAgICBmb3IgaWR4IGluIFsgMCAuLiA5IF1cbiAgICAgICAgcmVzdWx0ID0gZ2V0X3JhbmRvbV9pbnRlZ2VyKClcbiAgICAgICAgZGVidWcgJ86pYnJicl9fNTknLCBycHIgcmVzdWx0XG4gICAgICAgIEBlcSAoIM6pYnJicl9fNjAgPSAtPiByZXN1bHQgKSwgcmVzdWx0X21hdGNoZXJzWyBpZHggXVxuICAgICAgQGVxICggzqlicmJyX182MSA9IC0+IHJldHJpZXMgKSwgcmV0cmllc19tYXRjaGVyXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9yYW5kb21fc2V0X29mX3RleHRzX29mX3ZhcmlhYmxlX2xlbmd0aDogLT5cbiAgICB7IEdldF9yYW5kb20sXG4gICAgICBpbnRlcm5hbHMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfcmFuZG9tX3Rvb2xzKClcbiAgICAjIG1hdGNoZXJzICAgICAgICA9IFsgJ861zqfOmicsICfOv869zq7PhicsICfOks6ZJywgJ86fzqDOn8+CzpsnLCAnzrcnLCAnz4jPiM6pzr8nLCAnzrrOnc61JywgJ86azrzOr866JywgJ8+FzpknLCAnzp/OmycsIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICByZXN1bHRfcmV0cmllcyAgPSBudWxsXG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgPT5cbiAgICAgICAgaW5mbyAnzqlicmJyX182MicsIHN0YXRzIGlmIHN0YXRzLm5hbWUgaXMgJ3NldF9vZl90ZXh0cydcbiAgICAgICAgcmVzdWx0X3JldHJpZXMgPSBzdGF0cy5yZXRyaWVzIGlmIHN0YXRzLm5hbWUgaXMgJ3NldF9vZl90ZXh0cydcbiAgICAgICAgQGVxICggzqlicmJyX3Jlc3VsdF9yZXRyaWVzX182MyA9IC0+IHJlc3VsdF9yZXRyaWVzID49IDAgKSwgdHJ1ZVxuICAgICAgZ2V0X3JhbmRvbSAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgb25fc3RhdHMsIH1cbiAgICAgIG1hdGNoZXJzICAgID0gW1xuICAgICAgICBuZXcgU2V0IFsgJ+K+ieK9leK8ouK+l+K+ruK+qScsICfiv4vivL3ivITivKDivrrivLQnLCAn4ry04r684rymJywgJ+K+j+K+micsICfiv5PivZvivrHivbPivp3ivK3ivojivpzivKPivqUnLCBdXG4gICAgICAgIG5ldyBTZXQgWyAn4r6d4ryl4r+H4rye4ryt4ry1JywgJ+K9kOK8uOK9uicsICfivJTiv5PivIzivqPivoXivrLivYHivI0nLCAn4r2y4ryp4ryR4r+MJywgJ+K8qeK+tuK8leK9k+K9kCcsIF1cbiAgICAgICAgbmV3IFNldCBbICfivKLiv4DivrPiv5XivJTiv4DivJfivonivZQnLCAn4r6H4r6a4ryg4ryY4ry84r6QJywgJ+K8j+K/ieK+nOK8puK+nOK8huK9nicsICfivY3ivaDivr/ivJTivJfiv44nLCAn4r6H4r2k4r+D4r6F4r2L4r6OJywgXVxuICAgICAgICBuZXcgU2V0IFsgJ+K8mOK8guK+m+K+luK8qOK+m+K+nCcsICfivYnivJviv4nivJjiv5LivYLivKvivZfivpwnLCAn4ryU4r+L4r+EJywgJ+K8n+K8heK8juK+guK8ruK9teK+vuK+vOK9lCcsICfivqjivanivpDivIrivILivYYnLCBdXG4gICAgICAgIG5ldyBTZXQgWyAn4r2/4r2p4r2KJywgJ+K8veK+luK+nOK+tuK+qeK+ricsICfivrbivK7ivoMnLCAn4r2/4r244r694ryh4r274r6K4ry2JywgJ+K9huK8oOK9tOK8v+K8vOK8v+K9q+K+iCcsIF1cbiAgICAgICAgbmV3IFNldCBbICfivaMnLCAn4r6x4r274r2A4r2b4r694r6y4rym4r624ry5JywgJ+K8leK9l+K8jOK8luK9veK9puK9jicsICfivZrivozivL7ivozivKfivJvivLknLCAn4r6C4ryj4r+BJywgXVxuICAgICAgICBuZXcgU2V0IFsgJ+K+mOK9suK+n+K9pOK8mCcsICfivoHivqfivZzivJXivrDivpDivKknLCAn4ryx4r6R4r+D4r+S4ry94ryZJywgJ+K/j+K+sOK+k+K8kOK8iCcsICfivZjivZfivb3ivJjiv4AnLCBdXG4gICAgICAgIG5ldyBTZXQgWyAn4r2z4ryx4ryk4r6+4r234r6g4ry/4r6VJywgJ+K8m+K8guK/g+K8tuK8reK8qycsICfivKvivoDivoTiv4vivI/ivL4nLCAn4r2B4ry94ry54r6v4r+D4r2u4r6z4r2R4r2p4r2TJywgJ+K8r+K9juK+seK9q+K9qeK+sycsIF1cbiAgICAgICAgbmV3IFNldCBbICfivLfivpXivIjivLbivanivb/ivqHivIPivpwnLCAn4r6x4r+H4r6e4r604r2dJywgJ+K+tScsICfivbviv5TivYDiv47ivpHivYzivKTivZgnLCAn4r+K4ryt4ryz4r+S4ryQ4r2l4r2Z4r6y4r2fJywgXVxuICAgICAgICBuZXcgU2V0IFsgJ+K9o+K9qicsICfivZnivJ/ivbDivpcnLCAn4r2wJywgJ+K8tOK/keK+geK9uicsICfivpDivYzivqDivq3ivZgnLCBdXG4gICAgICAgIF1cbiAgICAgIGZvciBpZHggaW4gWyAwIC4uIDkgXVxuICAgICAgICByZXN1bHQgPSBnZXRfcmFuZG9tLnNldF9vZl90ZXh0cyB7IG1pbjogJ+K8gCcsIG1heDogJ+K/lScsIHNpemU6IDUsIG1pbl9sZW5ndGg6IDEsIG1heF9sZW5ndGg6IDEwLCB9XG4gICAgICAgIEBlcSAoIM6pYnJicl9fNjQgPSAtPiByZXN1bHQgKSwgbWF0Y2hlcnNbIGlkeCBdXG4gICAgICAgICMgZGVidWcgJ86pYnJicl9fNjUnLCByZXN1bHRcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXN1bHRfcmV0cmllcyAgPSBudWxsXG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgPT5cbiAgICAgICAgcmVzdWx0X3JldHJpZXMgPSBzdGF0cy5yZXRyaWVzIGlmIHN0YXRzLm5hbWUgaXMgJ3NldF9vZl90ZXh0cydcbiAgICAgICAgQGVxICggzqlicmJyX3Jlc3VsdF9yZXRyaWVzX182NiA9IC0+IHJlc3VsdF9yZXRyaWVzID49IDAgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBnZXRfcmFuZG9tICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCBvbl9zdGF0cywgfVxuICAgICAgbWF0Y2hlcnMgICAgPSBbXG4gICAgICAgIHsgcmVzdWx0X3JldHJpZXM6ICA0LCByZXN1bHRfcnByOiAnNTY0MTc5MzA4MicsIH1cbiAgICAgICAgeyByZXN1bHRfcmV0cmllczogNjMsIHJlc3VsdF9ycHI6ICcyODE2Nzk0NTMwJywgfVxuICAgICAgICB7IHJlc3VsdF9yZXRyaWVzOiAxMSwgcmVzdWx0X3JwcjogJzQ1MzgxOTYwNzInLCB9XG4gICAgICAgIHsgcmVzdWx0X3JldHJpZXM6IDIwLCByZXN1bHRfcnByOiAnNzgzMTkyNDA1NicsIH1cbiAgICAgICAgeyByZXN1bHRfcmV0cmllczogNzYsIHJlc3VsdF9ycHI6ICcwMzI1NDY3ODE5JywgfVxuICAgICAgICB7IHJlc3VsdF9yZXRyaWVzOiAgNywgcmVzdWx0X3JwcjogJzMxNDk3NjA1ODInLCB9XG4gICAgICAgIHsgcmVzdWx0X3JldHJpZXM6IDIwLCByZXN1bHRfcnByOiAnMjg1NzM2MTA5NCcsIH1cbiAgICAgICAgeyByZXN1bHRfcmV0cmllczogMzEsIHJlc3VsdF9ycHI6ICc0NTIzNzg2MDkxJywgfVxuICAgICAgICB7IHJlc3VsdF9yZXRyaWVzOiAxMywgcmVzdWx0X3JwcjogJzQ4MTM1NjAyOTcnLCB9XG4gICAgICAgIHsgcmVzdWx0X3JldHJpZXM6IDE5LCByZXN1bHRfcnByOiAnNzQ5MTA2NTgyMycsIH1cbiAgICAgICAgXVxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4gOSBdXG4gICAgICAgIHJlc3VsdCAgICAgID0gZ2V0X3JhbmRvbS5zZXRfb2ZfdGV4dHMgeyBtaW46ICcwJywgbWF4OiAnOScsIHNpemU6IDEwLCBsZW5ndGg6IDEsIH1cbiAgICAgICAgcmVzdWx0X3JwciAgPSBbIHJlc3VsdC4uLiwgXS5qb2luICcnXG4gICAgICAgIEBlcSAoIM6pYnJicl9fNjcgPSAtPiByZXN1bHRfcnByICAgICApLCBtYXRjaGVyc1sgaWR4IF0ucmVzdWx0X3JwclxuICAgICAgICAjIEBlcSAoIM6pYnJicl9fNjggPSAtPiByZXN1bHRfcmV0cmllcyApLCBtYXRjaGVyc1sgaWR4IF0ucmVzdWx0X3JldHJpZXNcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZXhoYXVzdGlvbjogLT5cbiAgICB7IEdldF9yYW5kb20sXG4gICAgICBpbnRlcm5hbHMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfcmFuZG9tX3Rvb2xzKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICByZXN1bHRfcmV0cmllcyAgPSBudWxsXG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgPT5cbiAgICAgICAgIyBpbmZvICfOqWJyYnJfXzY5Jywgc3RhdHMgaWYgc3RhdHMubmFtZSBpcyAnd2FsaydcbiAgICAgICAgIyByZXN1bHRfcmV0cmllcyA9IHN0YXRzLnJldHJpZXMgaWYgc3RhdHMubmFtZSBpcyAnd2FsaydcbiAgICAgICAgIyBAZXEgKCDOqWJyYnJfcmVzdWx0X3JldHJpZXNfXzcwID0gLT4gcmVzdWx0X3JldHJpZXMgPj0gMCApLCB0cnVlXG4gICAgICBnZXRfcmFuZG9tICAgICAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IHNldHRpbmdzLm15X3NlZWRfMSwgb25fc3RhdHMsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgY2ZnID1cbiAgICAgICAgbWluOiAgICAgICAgICAgICdBJ1xuICAgICAgICBtYXg6ICAgICAgICAgICAgJ1onXG4gICAgICAgIGxlbmd0aDogICAgICAgICAzXG4gICAgICAgIGZpbHRlcjogICAgICAgICAvXlthLXpdezN9JC9cbiAgICAgICAgb25fZXhoYXVzdGlvbjogJ2Vycm9yJ1xuICAgICAgQHRocm93cyAoIM6pYnJicl9fNzEgPSAtPiBnZXRfcmFuZG9tLnRleHQgY2ZnICksIC9leGhhdXN0ZWQvXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHJlc3VsdF9yZXRyaWVzICA9IG51bGxcbiAgICAgIG9uX3N0YXRzICAgICAgICA9ICggc3RhdHMgKSA9PlxuICAgICAgICAjIGluZm8gJ86pYnJicl9fNzInLCBzdGF0cyBpZiBzdGF0cy5uYW1lIGlzICd3YWxrJ1xuICAgICAgICAjIHJlc3VsdF9yZXRyaWVzID0gc3RhdHMucmV0cmllcyBpZiBzdGF0cy5uYW1lIGlzICd3YWxrJ1xuICAgICAgICAjIEBlcSAoIM6pYnJicl9yZXN1bHRfcmV0cmllc19fNzMgPSAtPiByZXN1bHRfcmV0cmllcyA+PSAwICksIHRydWVcbiAgICAgIGdldF9yYW5kb20gICAgICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogc2V0dGluZ3MubXlfc2VlZF8xLCBvbl9zdGF0cywgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBjZmcgPVxuICAgICAgICBtaW46ICAgICAgICAgICAgJ0EnXG4gICAgICAgIG1heDogICAgICAgICAgICAnWidcbiAgICAgICAgbGVuZ3RoOiAgICAgICAgIDNcbiAgICAgICAgZmlsdGVyOiAgICAgICAgIC9eW2Etel17M30kL1xuICAgICAgICBvbl9leGhhdXN0aW9uOiAtPiBudWxsXG4gICAgICBAZXEgKCDOqWJyYnJfXzc0ID0gLT4gZ2V0X3JhbmRvbS50ZXh0IGNmZyApLCBudWxsXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHdhbGs6IC0+XG4gICAgeyBHZXRfcmFuZG9tLFxuICAgICAgaW50ZXJuYWxzLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3JhbmRvbV90b29scygpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZ2V0X3JhbmRvbSAgICAgID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBzZXR0aW5ncy5teV9zZWVkXzEsIG9uX3N0YXRzLCB9XG4gICAgICByZXN1bHRfcmV0cmllcyAgPSBudWxsXG4gICAgICBvbl9zdGF0cyAgICAgICAgPSAoIHN0YXRzICkgPT5cbiAgICAgICAgaW5mbyAnzqlicmJyX183NScsIHN0YXRzIGlmIHN0YXRzLm5hbWUgaXMgJ3dhbGsnXG4gICAgICAgIHJlc3VsdF9yZXRyaWVzID0gc3RhdHMucmV0cmllcyBpZiBzdGF0cy5uYW1lIGlzICd3YWxrJ1xuICAgICAgICBAZXEgKCDOqWJyYnJfcmVzdWx0X3JldHJpZXNfXzc2ID0gLT4gcmVzdWx0X3JldHJpZXMgPj0gMCApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHByb2R1Y2VyID0gLT4gZ2V0X3JhbmRvbS50ZXh0IHsgbWluOiAnQScsIG1heDogMHgwMTdmLCBsZW5ndGg6IDMsIH1cbiAgICAgIGZvciB4IGZyb20gZ2V0X3JhbmRvbS53YWxrIHsgcHJvZHVjZXIsIG46IDExLCB9XG4gICAgICAgIGRlYnVnICfOqWJyYnJfXzc3JywgcnByIHhcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc3RhdHM6IC0+XG4gICAgeyBHZXRfcmFuZG9tLFxuICAgICAgaW50ZXJuYWxzLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3JhbmRvbV90b29scygpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgc2VudGluZWwgICAgICA9IFN5bWJvbCAnc2VudGluZWwnXG4gICAgICBvbl9leGhhdXN0aW9uID0gLT4gc2VudGluZWxcbiAgICAgIHN0YXRzID0gbmV3IGludGVybmFscy5TdGF0cyB7IG5hbWU6ICdzb21ldGhpbmcnLCBvbl9leGhhdXN0aW9uLCB9XG4gICAgICBAZXEgICAgICggzqlicmJyX183OCA9IC0+IHN0YXRzLm5hbWUgICAgICAgICAgICksICdzb21ldGhpbmcnXG4gICAgICBAZXEgICAgICggzqlicmJyX183OSA9IC0+IHN0YXRzLm1heF9yZXRyaWVzICAgICksIGludGVybmFscy5tYXhfcmV0cmllc1xuICAgICAgQGVxICAgICAoIM6pYnJicl9fODAgPSAtPiBzdGF0cy5yZXRyaWVzICAgICAgICApLCAwXG4gICAgICBAdGhyb3dzICggzqlicmJyX184MSA9IC0+IHN0YXRzLnJldHJpZXMrKyAgICAgICksIC9DYW5ub3Qgc2V0IHByb3BlcnR5L1xuICAgICAgQGVxICAgICAoIM6pYnJicl9fODIgPSAtPiBzdGF0cy5yZXRyeSgpICAgICAgICApLCBpbnRlcm5hbHMuZ29fb25cbiAgICAgIEBlcSAgICAgKCDOqWJyYnJfXzgzID0gLT4gc3RhdHMucmV0cmllcyAgICAgICAgKSwgMVxuICAgICAgc3RhdHMuX3JldHJpZXMgPSBpbnRlcm5hbHMubWF4X3JldHJpZXMgLSAxXG4gICAgICAjIGRlYnVnICfOqWJyYnJfXzg0Jywgc3RhdHNcbiAgICAgICMgZGVidWcgJ86pYnJicl9fODUnLCBzdGF0cy5yZXRyaWVzXG4gICAgICAjIGRlYnVnICfOqWJyYnJfXzg2JywgaW50ZXJuYWxzLm1heF9yZXRyaWVzXG4gICAgICAjIGRlYnVnICfOqWJyYnJfXzg3Jywgc3RhdHMubWF4X3JldHJpZXNcbiAgICAgIEBlcSAoIM6pYnJicl9fODggPSAtPiBzdGF0cy5yZXRyeSgpICksIGludGVybmFscy5nb19vblxuICAgICAgQGVxICggzqlicmJyX184OSA9IC0+IHN0YXRzLnJldHJ5KCkgKSwgc2VudGluZWxcbiAgICAgIEBlcSAoIM6pYnJicl9fOTAgPSAtPiBzdGF0cy5yZXRyeSgpICksIHNlbnRpbmVsXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIG9uX2V4aGF1c3Rpb24gPSB1bmRlZmluZWRcbiAgICAgIHN0YXRzID0gbmV3IGludGVybmFscy5TdGF0cyB7IG5hbWU6ICdzb21ldGhpbmcnLCBvbl9leGhhdXN0aW9uLCB9XG4gICAgICBzdGF0cy5fcmV0cmllcyA9IGludGVybmFscy5tYXhfcmV0cmllcyAtIDFcbiAgICAgIEBlcSAgICAgKCDOqWJyYnJfXzkxID0gLT4gc3RhdHMucmV0cnkoKSApLCBpbnRlcm5hbHMuZ29fb25cbiAgICAgIEB0aHJvd3MgKCDOqWJyYnJfXzkyID0gLT4gc3RhdHMucmV0cnkoKSApLCAvZXhoYXVzdGVkL1xuICAgICAgQHRocm93cyAoIM6pYnJicl9fOTMgPSAtPiBzdGF0cy5yZXRyeSgpICksIC9leGhhdXN0ZWQvXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIG9uX2V4aGF1c3Rpb24gPSBudWxsXG4gICAgICBzdGF0cyA9IG5ldyBpbnRlcm5hbHMuU3RhdHMgeyBuYW1lOiAnc29tZXRoaW5nJywgb25fZXhoYXVzdGlvbiwgfVxuICAgICAgc3RhdHMuX3JldHJpZXMgPSBpbnRlcm5hbHMubWF4X3JldHJpZXMgLSAxXG4gICAgICBAZXEgICAgICggzqlicmJyX185NCA9IC0+IHN0YXRzLnJldHJ5KCkgKSwgaW50ZXJuYWxzLmdvX29uXG4gICAgICBAdGhyb3dzICggzqlicmJyX185NSA9IC0+IHN0YXRzLnJldHJ5KCkgKSwgL2V4aGF1c3RlZC9cbiAgICAgIEB0aHJvd3MgKCDOqWJyYnJfXzk2ID0gLT4gc3RhdHMucmV0cnkoKSApLCAvZXhoYXVzdGVkL1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBvbl9leGhhdXN0aW9uID0gJ2Vycm9yJ1xuICAgICAgc3RhdHMgPSBuZXcgaW50ZXJuYWxzLlN0YXRzIHsgbmFtZTogJ3NvbWV0aGluZycsIG9uX2V4aGF1c3Rpb24sIH1cbiAgICAgIHN0YXRzLl9yZXRyaWVzID0gaW50ZXJuYWxzLm1heF9yZXRyaWVzIC0gMVxuICAgICAgQGVxICAgICAoIM6pYnJicl9fOTcgPSAtPiBzdGF0cy5yZXRyeSgpICksIGludGVybmFscy5nb19vblxuICAgICAgQHRocm93cyAoIM6pYnJicl9fOTggPSAtPiBzdGF0cy5yZXRyeSgpICksIC9leGhhdXN0ZWQvXG4gICAgICBAdGhyb3dzICggzqlicmJyX185OSA9IC0+IHN0YXRzLnJldHJ5KCkgKSwgL2V4aGF1c3RlZC9cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgc2VudGluZWwgICAgICA9IFN5bWJvbCAnc2VudGluZWwnXG4gICAgICBzdGF0c19yZXN1bHQgID0gbnVsbFxuICAgICAgb25fZXhoYXVzdGlvbiA9IC0+IHNlbnRpbmVsXG4gICAgICBvbl9zdGF0cyAgICAgID0gLT4gc2VudGluZWxcbiAgICAgIG1heF9yZXRyaWVzICAgPSAzXG4gICAgICBzdGF0cyA9IG5ldyBpbnRlcm5hbHMuU3RhdHMgeyBuYW1lOiAnc29tZXRoaW5nJywgb25fZXhoYXVzdGlvbiwgb25fc3RhdHMsIG1heF9yZXRyaWVzLCB9XG4gICAgICBAZXEgICAgICggzqlicmJyXzEwMCA9IC0+IHN0YXRzLnJldHJpZXMgKSwgMFxuICAgICAgQGVxICAgICAoIM6pYnJicl8xMDEgPSAtPiBzdGF0cy5yZXRyeSgpICksIGludGVybmFscy5nb19vblxuICAgICAgQGVxICAgICAoIM6pYnJicl8xMDIgPSAtPiBzdGF0cy5yZXRyaWVzICksIDFcbiAgICAgIEBlcSAgICAgKCDOqWJyYnJfMTAzID0gLT4gc3RhdHMucmV0cnkoKSApLCBpbnRlcm5hbHMuZ29fb25cbiAgICAgIEBlcSAgICAgKCDOqWJyYnJfMTA0ID0gLT4gc3RhdHMucmV0cmllcyApLCAyXG4gICAgICBAZXEgICAgICggzqlicmJyXzEwNSA9IC0+IHN0YXRzLnJldHJ5KCkgKSwgaW50ZXJuYWxzLmdvX29uXG4gICAgICBAZXEgICAgICggzqlicmJyXzEwNiA9IC0+IHN0YXRzLnJldHJpZXMgKSwgM1xuICAgICAgQGVxICAgICAoIM6pYnJicl8xMDcgPSAtPiBzdGF0cy5yZXRyeSgpICksIHNlbnRpbmVsXG4gICAgICBAZXEgICAgICggzqlicmJyXzEwOCA9IC0+IHN0YXRzLmZpbmlzaCAndmFsdWUnICksICd2YWx1ZSdcbiAgICAgIEB0aHJvd3MgKCDOqWJyYnJfMTA5ID0gLT4gc3RhdHMuZmluaXNoICd2YWx1ZScgKSwgL2ZpbmlzaGVkL1xuICAgICAgQHRocm93cyAoIM6pYnJicl8xMTAgPSAtPiBzdGF0cy5yZXRyeSgpICksIC9maW5pc2hlZC9cbiAgICAgIEB0aHJvd3MgKCDOqWJyYnJfMTExID0gLT4gc3RhdHMucmV0cnkoKSApLCAvZmluaXNoZWQvXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHRlc3RzLCB9XG4gICMgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHdhbGs6IHRlc3RzLndhbGssIH1cbiAgIyAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgZXhoYXVzdGlvbjogdGVzdHMuZXhoYXVzdGlvbiwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgc3RhdHM6IHRlc3RzLnN0YXRzLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgZ2V0X3JhbmRvbV9pbnRlZ2VyX3Byb2R1Y2VyOiB0ZXN0cy5nZXRfcmFuZG9tX2ludGVnZXJfcHJvZHVjZXIsIH1cbiAgYSA9IHt9XG4gIGIgPSB7IG86IDYsIH1cbiAgYyA9IHsgbzogdW5kZWZpbmVkLCB9XG4gIGNsZWFuID0gKCB4ICkgLT4gT2JqZWN0LmZyb21FbnRyaWVzICggWyBrLCB2LCBdIGZvciBrLCB2IG9mIHggd2hlbiB2PyApXG4gIGRlYnVnICfOqWJyYnJfXzE4JywgZCA9IHsgYS4uLiwgKCBjbGVhbiBiICkuLi4sICggY2xlYW4gYyApLi4uLCB9XG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgcmV0dXJuIG51bGxcbiJdfQ==
//# sourceURL=../src/test-basics.coffee