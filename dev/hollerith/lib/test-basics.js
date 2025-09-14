(async function() {
  'use strict';
  var GTNG, GUY, SFMODULES, Test, alert, blue, debug, demo_max_integer, echo, f, gold, help, helpers, info, inspect, lime, log, plain, praise, red, reverse, rpr, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('hollerith'));

  ({rpr, inspect, echo, lime, gold, red, blue, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  ({f} = require('../../../apps/effstring'));

  SFMODULES = require('../../../apps/bricabrac-single-file-modules');

  //===========================================================================================================
  helpers = {
    //---------------------------------------------------------------------------------------------------------
    rpr_unit: function(unit) {
      var R, index, letters, mantissa, name;
      ({name, letters, mantissa, index} = unit);
      R = `${name}:${letters}`;
      if (mantissa != null) {
        R += `,${mantissa}`;
      }
      if (index != null) {
        R += `[${index}]`;
      }
      return R;
    },
    //---------------------------------------------------------------------------------------------------------
    get_random_vdx_producer: function({seed = null, min_length = 1, max_length = 5, min_idx = -999, max_idx = +999} = {}) {
      var Get_random, get_random, get_rnd_idx, get_rnd_length, get_rnd_vdx, internals;
      ({Get_random, internals} = SFMODULES.unstable.require_get_random());
      get_random = new Get_random({
        seed: null,
        on_stats: null
      });
      get_rnd_length = get_random.integer_producer({
        min: min_length,
        max: max_length
      });
      get_rnd_idx = get_random.integer_producer({
        min: min_idx,
        max: max_idx
      });
      return get_rnd_vdx = function() {
        var _, i, ref, results;
        results = [];
        for (_ = i = 1, ref = get_rnd_length(); (1 <= ref ? i <= ref : i >= ref); _ = 1 <= ref ? ++i : --i) {
          results.push(get_rnd_idx());
        }
        return results;
      };
    }
  };

  //===========================================================================================================
  this.hollerith = {
    //=========================================================================================================
    interface: function() {
      var Hollerith, equals, hollerith_10, hollerith_10mvp, hollerith_128, internals, type_of;
      ({Hollerith, hollerith_10, hollerith_10mvp, hollerith_128, internals} = require('../../../apps/hollerith'));
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({
        isDeepStrictEqual: equals
      } = require('node:util'));
      (() => {        //.......................................................................................................
        var Ωanybt___1, Ωanybt___2, Ωanybt___3, Ωanybt___4;
        this.eq((Ωanybt___1 = function() {
          return type_of(hollerith_10mvp.encode);
        }), 'function');
        this.eq((Ωanybt___2 = function() {
          return type_of(hollerith_10mvp.encode_integer);
        }), 'undefined');
        this.eq((Ωanybt___3 = function() {
          return type_of(hollerith_10mvp.encode_idx);
        }), 'function');
        this.eq((Ωanybt___4 = function() {
          return type_of(hollerith_10mvp.encode_vdx);
        }), 'function');
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    padding: function() {
      var Hollerith, equals, hollerith_10, hollerith_10mvp, hollerith_128, internals;
      ({Hollerith, hollerith_10, hollerith_10mvp, hollerith_128, internals} = require('../../../apps/hollerith'));
      ({
        // { type_of,                } = SFMODULES.unstable.require_type_of()
        isDeepStrictEqual: equals
      } = require('node:util'));
      (() => {        //.......................................................................................................
        var Ωanybt___5, Ωanybt___6;
        this.eq((Ωanybt___5 = function() {
          return equals(hollerith_10mvp.encode(123), hollerith_10mvp.encode_idx(123));
        }), true);
        this.eq((Ωanybt___6 = function() {
          return equals(hollerith_10mvp.encode(123), hollerith_10mvp.encode_vdx([123]));
        }), false);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    get_leading_novas_re: function() {
      var get_leading_novas_re, types;
      ({
        internals: {types}
      } = require('../../../apps/hollerith'));
      ({get_leading_novas_re} = types.internals);
      (() => {        // debug 'Ωhllt___7', '987'.replace /// ^ (?: 9 )*? (?= . $ ) ///gv, ''
        //.......................................................................................................
        var Ωanybt___8, Ωanybt___9;
        this.eq((Ωanybt___8 = function() {
          return get_leading_novas_re('9');
        }), /^(?:9)*(?=.+$)/gv);
        this.eq((Ωanybt___9 = function() {
          return get_leading_novas_re('*');
        }), /^(?:\*)*(?=.+$)/gv);
        return null;
      })();
      (() => {        //.......................................................................................................
        var _leading_novas_re, Ωanybt__10, Ωanybt__11, Ωanybt__12, Ωanybt__13, Ωanybt__14, Ωanybt__15, Ωanybt__16, Ωanybt__17, Ωanybt__18, Ωanybt__19, Ωanybt__20, Ωanybt__21;
        _leading_novas_re = get_leading_novas_re('9');
        this.eq((Ωanybt__10 = function() {
          return '9999'.replace(_leading_novas_re, '');
        }), '9');
        this.eq((Ωanybt__11 = function() {
          return '999'.replace(_leading_novas_re, '');
        }), '9');
        this.eq((Ωanybt__12 = function() {
          return '99'.replace(_leading_novas_re, '');
        }), '9');
        this.eq((Ωanybt__13 = function() {
          return '9'.replace(_leading_novas_re, '');
        }), '9');
        this.eq((Ωanybt__14 = function() {
          return '9989'.replace(_leading_novas_re, '');
        }), '89');
        this.eq((Ωanybt__15 = function() {
          return '989'.replace(_leading_novas_re, '');
        }), '89');
        this.eq((Ωanybt__16 = function() {
          return '89'.replace(_leading_novas_re, '');
        }), '89');
        this.eq((Ωanybt__17 = function() {
          return '9992'.replace(_leading_novas_re, '');
        }), '2');
        this.eq((Ωanybt__18 = function() {
          return '992'.replace(_leading_novas_re, '');
        }), '2');
        this.eq((Ωanybt__19 = function() {
          return '92'.replace(_leading_novas_re, '');
        }), '2');
        this.eq((Ωanybt__20 = function() {
          return '7'.replace(_leading_novas_re, '');
        }), '7');
        return this.eq((Ωanybt__21 = function() {
          return ''.replace(_leading_novas_re, '');
        }), '');
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    h10mvp_1: function() {
      var Hollerith, equals, hollerith_10, hollerith_10mvp, hollerith_128, internals, type_of, Ωanybt__22, Ωanybt__23, Ωanybt__24, Ωanybt__25, Ωanybt__26, Ωanybt__27, Ωanybt__28, Ωanybt__29, Ωanybt__30, Ωanybt__31, Ωanybt__32, Ωanybt__33, Ωanybt__34, Ωanybt__35, Ωanybt__36, Ωanybt__37, Ωanybt__38, Ωanybt__39, Ωanybt__40, Ωanybt__41, Ωanybt__42, Ωanybt__43;
      ({Hollerith, hollerith_10, hollerith_10mvp, hollerith_128, internals} = require('../../../apps/hollerith'));
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({
        isDeepStrictEqual: equals
      } = require('node:util'));
      //.......................................................................................................
      this.eq((Ωanybt__22 = function() {
        return hollerith_10mvp.encode_idx(-999);
      }), 'K000');
      this.eq((Ωanybt__23 = function() {
        return hollerith_10mvp.encode_idx(-99);
      }), 'L00');
      this.eq((Ωanybt__24 = function() {
        return hollerith_10mvp.encode_idx(-90);
      }), 'L09');
      this.eq((Ωanybt__25 = function() {
        return hollerith_10mvp.encode_idx(-11);
      }), 'L88');
      this.eq((Ωanybt__26 = function() {
        return hollerith_10mvp.encode_idx(-10);
      }), 'L89');
      this.eq((Ωanybt__27 = function() {
        return hollerith_10mvp.encode_idx(-9);
      }), 'M0');
      this.eq((Ωanybt__28 = function() {
        return hollerith_10mvp.encode_idx(-8);
      }), 'M1');
      this.eq((Ωanybt__29 = function() {
        return hollerith_10mvp.encode_idx(-7);
      }), 'M2');
      this.eq((Ωanybt__30 = function() {
        return hollerith_10mvp.encode_idx(-6);
      }), 'M3');
      this.eq((Ωanybt__31 = function() {
        return hollerith_10mvp.encode_idx(-5);
      }), 'M4');
      this.eq((Ωanybt__32 = function() {
        return hollerith_10mvp.encode_idx(-4);
      }), 'M5');
      this.eq((Ωanybt__33 = function() {
        return hollerith_10mvp.encode_idx(-3);
      }), 'M6');
      this.eq((Ωanybt__34 = function() {
        return hollerith_10mvp.encode_idx(-2);
      }), 'M7');
      this.eq((Ωanybt__35 = function() {
        return hollerith_10mvp.encode_idx(-1);
      }), 'M8');
      this.eq((Ωanybt__36 = function() {
        return hollerith_10mvp.encode_idx(0);
      }), 'N');
      this.eq((Ωanybt__37 = function() {
        return hollerith_10mvp.encode_idx(1);
      }), 'O1');
      this.eq((Ωanybt__38 = function() {
        return hollerith_10mvp.encode_idx(+9);
      }), 'O9');
      this.eq((Ωanybt__39 = function() {
        return hollerith_10mvp.encode_idx(+10);
      }), 'P10');
      this.eq((Ωanybt__40 = function() {
        return hollerith_10mvp.encode_idx(+20);
      }), 'P20');
      this.eq((Ωanybt__41 = function() {
        return hollerith_10mvp.encode_idx(+90);
      }), 'P90');
      this.eq((Ωanybt__42 = function() {
        return hollerith_10mvp.encode_idx(123);
      }), 'Q123');
      this.eq((Ωanybt__43 = function() {
        return hollerith_10mvp.encode_idx(+900);
      }), 'Q900');
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    h10mvp_2: function() {
      var Hollerith, equals, hollerith_10, hollerith_10mvp, hollerith_128, internals, type_of, Ωanybt__44, Ωanybt__45, Ωanybt__46, Ωanybt__47, Ωanybt__48, Ωanybt__49, Ωanybt__50, Ωanybt__51, Ωanybt__52, Ωanybt__53, Ωanybt__54, Ωanybt__55, Ωanybt__56, Ωanybt__57, Ωanybt__58, Ωanybt__59, Ωanybt__60, Ωanybt__61, Ωanybt__62, Ωanybt__63, Ωanybt__64, Ωanybt__65;
      ({Hollerith, hollerith_10, hollerith_10mvp, hollerith_128, internals} = require('../../../apps/hollerith'));
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({
        isDeepStrictEqual: equals
      } = require('node:util'));
      //.......................................................................................................
      this.eq((Ωanybt__44 = function() {
        return hollerith_10mvp.encode_idx(-999);
      }), hollerith_10mvp.encode(-999));
      this.eq((Ωanybt__45 = function() {
        return hollerith_10mvp.encode_idx(-99);
      }), hollerith_10mvp.encode(-99));
      this.eq((Ωanybt__46 = function() {
        return hollerith_10mvp.encode_idx(-90);
      }), hollerith_10mvp.encode(-90));
      this.eq((Ωanybt__47 = function() {
        return hollerith_10mvp.encode_idx(-11);
      }), hollerith_10mvp.encode(-11));
      this.eq((Ωanybt__48 = function() {
        return hollerith_10mvp.encode_idx(-10);
      }), hollerith_10mvp.encode(-10));
      this.eq((Ωanybt__49 = function() {
        return hollerith_10mvp.encode_idx(-9);
      }), hollerith_10mvp.encode(-9));
      this.eq((Ωanybt__50 = function() {
        return hollerith_10mvp.encode_idx(-8);
      }), hollerith_10mvp.encode(-8));
      this.eq((Ωanybt__51 = function() {
        return hollerith_10mvp.encode_idx(-7);
      }), hollerith_10mvp.encode(-7));
      this.eq((Ωanybt__52 = function() {
        return hollerith_10mvp.encode_idx(-6);
      }), hollerith_10mvp.encode(-6));
      this.eq((Ωanybt__53 = function() {
        return hollerith_10mvp.encode_idx(-5);
      }), hollerith_10mvp.encode(-5));
      this.eq((Ωanybt__54 = function() {
        return hollerith_10mvp.encode_idx(-4);
      }), hollerith_10mvp.encode(-4));
      this.eq((Ωanybt__55 = function() {
        return hollerith_10mvp.encode_idx(-3);
      }), hollerith_10mvp.encode(-3));
      this.eq((Ωanybt__56 = function() {
        return hollerith_10mvp.encode_idx(-2);
      }), hollerith_10mvp.encode(-2));
      this.eq((Ωanybt__57 = function() {
        return hollerith_10mvp.encode_idx(-1);
      }), hollerith_10mvp.encode(-1));
      this.eq((Ωanybt__58 = function() {
        return hollerith_10mvp.encode_idx(0);
      }), hollerith_10mvp.encode(0));
      this.eq((Ωanybt__59 = function() {
        return hollerith_10mvp.encode_idx(1);
      }), hollerith_10mvp.encode(1));
      this.eq((Ωanybt__60 = function() {
        return hollerith_10mvp.encode_idx(+9);
      }), hollerith_10mvp.encode(+9));
      this.eq((Ωanybt__61 = function() {
        return hollerith_10mvp.encode_idx(+10);
      }), hollerith_10mvp.encode(+10));
      this.eq((Ωanybt__62 = function() {
        return hollerith_10mvp.encode_idx(+20);
      }), hollerith_10mvp.encode(+20));
      this.eq((Ωanybt__63 = function() {
        return hollerith_10mvp.encode_idx(+90);
      }), hollerith_10mvp.encode(+90));
      this.eq((Ωanybt__64 = function() {
        return hollerith_10mvp.encode_idx(123);
      }), hollerith_10mvp.encode(123));
      this.eq((Ωanybt__65 = function() {
        return hollerith_10mvp.encode_idx(+900);
      }), hollerith_10mvp.encode(+900));
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    h10mvp_3: function() {
      var Hollerith, equals, hollerith_10, hollerith_10mvp, hollerith_128, internals, type_of, Ωanybt__66, Ωanybt__67, Ωanybt__68, Ωanybt__69, Ωanybt__70, Ωanybt__71, Ωanybt__72, Ωanybt__73, Ωanybt__74, Ωanybt__75, Ωanybt__76, Ωanybt__77, Ωanybt__78, Ωanybt__79, Ωanybt__80, Ωanybt__81, Ωanybt__82, Ωanybt__83, Ωanybt__84, Ωanybt__85, Ωanybt__86, Ωanybt__87;
      ({Hollerith, hollerith_10, hollerith_10mvp, hollerith_128, internals} = require('../../../apps/hollerith'));
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({
        isDeepStrictEqual: equals
      } = require('node:util'));
      //.......................................................................................................
      this.eq((Ωanybt__66 = function() {
        return (hollerith_10mvp.encode_idx(-999)).padEnd(25, 'N');
      }), hollerith_10mvp.encode([-999]));
      this.eq((Ωanybt__67 = function() {
        return (hollerith_10mvp.encode_idx(-99)).padEnd(25, 'N');
      }), hollerith_10mvp.encode([-99]));
      this.eq((Ωanybt__68 = function() {
        return (hollerith_10mvp.encode_idx(-90)).padEnd(25, 'N');
      }), hollerith_10mvp.encode([-90]));
      this.eq((Ωanybt__69 = function() {
        return (hollerith_10mvp.encode_idx(-11)).padEnd(25, 'N');
      }), hollerith_10mvp.encode([-11]));
      this.eq((Ωanybt__70 = function() {
        return (hollerith_10mvp.encode_idx(-10)).padEnd(25, 'N');
      }), hollerith_10mvp.encode([-10]));
      this.eq((Ωanybt__71 = function() {
        return (hollerith_10mvp.encode_idx(-9)).padEnd(25, 'N');
      }), hollerith_10mvp.encode([-9]));
      this.eq((Ωanybt__72 = function() {
        return (hollerith_10mvp.encode_idx(-8)).padEnd(25, 'N');
      }), hollerith_10mvp.encode([-8]));
      this.eq((Ωanybt__73 = function() {
        return (hollerith_10mvp.encode_idx(-7)).padEnd(25, 'N');
      }), hollerith_10mvp.encode([-7]));
      this.eq((Ωanybt__74 = function() {
        return (hollerith_10mvp.encode_idx(-6)).padEnd(25, 'N');
      }), hollerith_10mvp.encode([-6]));
      this.eq((Ωanybt__75 = function() {
        return (hollerith_10mvp.encode_idx(-5)).padEnd(25, 'N');
      }), hollerith_10mvp.encode([-5]));
      this.eq((Ωanybt__76 = function() {
        return (hollerith_10mvp.encode_idx(-4)).padEnd(25, 'N');
      }), hollerith_10mvp.encode([-4]));
      this.eq((Ωanybt__77 = function() {
        return (hollerith_10mvp.encode_idx(-3)).padEnd(25, 'N');
      }), hollerith_10mvp.encode([-3]));
      this.eq((Ωanybt__78 = function() {
        return (hollerith_10mvp.encode_idx(-2)).padEnd(25, 'N');
      }), hollerith_10mvp.encode([-2]));
      this.eq((Ωanybt__79 = function() {
        return (hollerith_10mvp.encode_idx(-1)).padEnd(25, 'N');
      }), hollerith_10mvp.encode([-1]));
      this.eq((Ωanybt__80 = function() {
        return (hollerith_10mvp.encode_idx(0)).padEnd(25, 'N');
      }), hollerith_10mvp.encode([0]));
      this.eq((Ωanybt__81 = function() {
        return (hollerith_10mvp.encode_idx(1)).padEnd(25, 'N');
      }), hollerith_10mvp.encode([1]));
      this.eq((Ωanybt__82 = function() {
        return (hollerith_10mvp.encode_idx(+9)).padEnd(25, 'N');
      }), hollerith_10mvp.encode([+9]));
      this.eq((Ωanybt__83 = function() {
        return (hollerith_10mvp.encode_idx(+10)).padEnd(25, 'N');
      }), hollerith_10mvp.encode([+10]));
      this.eq((Ωanybt__84 = function() {
        return (hollerith_10mvp.encode_idx(+20)).padEnd(25, 'N');
      }), hollerith_10mvp.encode([+20]));
      this.eq((Ωanybt__85 = function() {
        return (hollerith_10mvp.encode_idx(+90)).padEnd(25, 'N');
      }), hollerith_10mvp.encode([+90]));
      this.eq((Ωanybt__86 = function() {
        return (hollerith_10mvp.encode_idx(123)).padEnd(25, 'N');
      }), hollerith_10mvp.encode([123]));
      this.eq((Ωanybt__87 = function() {
        return (hollerith_10mvp.encode_idx(+900)).padEnd(25, 'N');
      }), hollerith_10mvp.encode([+900]));
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    h10mvp_sorting_1: function() {
      var Hollerith, equals, hollerith_10, hollerith_10mvp, hollerith_128, internals, sorted_singles, type_of;
      ({Hollerith, hollerith_10, hollerith_10mvp, hollerith_128, internals} = require('../../../apps/hollerith'));
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({
        isDeepStrictEqual: equals
      } = require('node:util'));
      //.......................................................................................................
      sorted_singles = (padding = null) => {
        var entry, i, idx, j, len, len1, probe, probes, sk, Ωhllt__89;
        probes = [[-999], [-99], [-90], [-11], [-10], [-9], [-8], [-7], [-6], [-5], [-4], [-3], [-2], [-1], [0], [1], [+9], [+10], [+20], [+90], [123], [+900]];
        for (idx = i = 0, len = probes.length; i < len; idx = ++i) {
          probe = probes[idx];
          sk = hollerith_10mvp.encode(probe);
          if (padding != null) {
            sk = sk.padEnd(padding, hollerith_10mvp.cfg._zpuns[0]);
          }
          probes[idx] = {sk, probe, idx};
        }
        probes.sort(function(a, b) {
          if (a.sk < b.sk) {
            return -1;
          }
          if (a.sk > b.sk) {
            return +1;
          }
          return null;
        });
        for (idx = j = 0, len1 = probes.length; j < len1; idx = ++j) {
          entry = probes[idx];
          // debug 'Ωhllt__88', entry
          this.eq((Ωhllt__89 = function() {
            return entry.idx;
          }), idx);
        }
        return null;
      };
      //.......................................................................................................
      sorted_singles(null);
      sorted_singles(10);
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    h10mvp_sorting_2: function() {
      var Hollerith, _, equals, expected_indexes, hollerith_10mvp, i, idx, internals, j, k, l, len, len1, len2, m, pline, plines, probes, psk, real_indexes, shuffle, sk_matcher, type_of, uline, ulines, usk, vdx, Ωhllt__91, Ωhllt__93;
      ({Hollerith, hollerith_10mvp, internals} = require('../../../apps/hollerith'));
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({
        isDeepStrictEqual: equals
      } = require('node:util'));
      //.......................................................................................................
      probes = [[[-999], 'K000'], [[-99], 'L00'], [[-90], 'L09'], [[-11], 'L88'], [[-10], 'L89'], [[-9], 'M0'], [[-8], 'M1'], [[-7], 'M2'], [[-6], 'M3'], [[-5], 'M4'], [[-4], 'M5'], [[-3], 'M6'], [[-2], 'M7'], [[-1], 'M8'], [[+0, -20], 'NL20'], [[+0], 'N'], [[+0, +20], 'NP20'], [[+9], 'O9'], [[+10, -3], 'P10M6'], [[+10, -2], 'P10M7'], [[+10, -1], 'P10M8'], [[+10], 'P10'], [[+10, +0], 'P10N'], [[+10, +1], 'P10O1'], [[+10, +10, -1], 'P10P10M8'], [[+10, +10], 'P10P10'], [[+10, +20], 'P10P20'], [[+20], 'P20'], [[+20, +10], 'P20P10'], [[+90], 'P90'], [[+900], 'Q900']];
      ulines = [];
      plines = [];
      expected_indexes = (function() {
        var i, ref, results;
        results = [];
        for (idx = i = 0, ref = probes.length; (0 <= ref ? i < ref : i > ref); idx = 0 <= ref ? ++i : --i) {
          results.push(idx);
        }
        return results;
      })();
      shuffle = GUY.rnd.get_shuffle(57, 88);
      for (idx = i = 0, len = probes.length; i < len; idx = ++i) {
        [vdx, sk_matcher] = probes[idx];
        usk = hollerith_10mvp.encode(vdx);
        psk = usk.padEnd(10, hollerith_10mvp.cfg._zpuns[0]);
        usk = usk.padEnd(10, ' ');
        ulines.push(`${usk} ${rpr(vdx)} ${idx}`);
        plines.push(`${psk} ${rpr(vdx)} ${idx}`);
      }
//.......................................................................................................
      for (_ = j = 1; j <= 10; _ = ++j) {
        ulines = shuffle(ulines);
        ulines.sort();
        real_indexes = [];
        for (k = 0, len1 = ulines.length; k < len1; k++) {
          uline = ulines[k];
          // help 'Ωhllt__90', uline
          real_indexes.push(Number(uline.replace(/^.*?\s([0-9]+)$/, '$1')));
        }
        this.eq((Ωhllt__91 = function() {
          return equals(expected_indexes, real_indexes);
        }), true);
      }
//.......................................................................................................
      for (_ = l = 1; l <= 10; _ = ++l) {
        plines = shuffle(plines);
        plines.sort();
        real_indexes = [];
        for (m = 0, len2 = plines.length; m < len2; m++) {
          pline = plines[m];
          // help 'Ωhllt__92', pline
          real_indexes.push(Number(pline.replace(/^.*?\s([0-9]+)$/, '$1')));
        }
        this.eq((Ωhllt__93 = function() {
          return equals(expected_indexes, real_indexes);
        }), true);
      }
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    hollerith_10mvp2_big_shuffle: function() {
      var Hollerith, _, codec, encode, equals, first_idx, get_random_vdx, hollerith_10mvp2, i, idx, internals, j, k, len, probe_sortkey, probe_sub_count, probe_vdx, probes_sortkey, probes_vdx, ref, ref1, ref2, rnd_vdx_cfg, shuffle, sk, sort_by_sortkey, sort_by_vdx, type_of, vdx, Ωhllt__97;
      ({Hollerith, hollerith_10mvp2, internals} = require('../../../apps/hollerith'));
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({
        isDeepStrictEqual: equals
      } = require('node:util'));
      codec = hollerith_10mvp2;
      rnd_vdx_cfg = {
        seed: null,
        min_length: 1,
        max_length: codec.cfg.dimension - 1,
        min_idx: Math.max(codec.cfg._min_integer, -2000),
        max_idx: Math.min(codec.cfg._max_integer, +2000)
      };
      // debug 'Ωhllt__94', rnd_vdx_cfg
      // debug 'Ωhllt__95', codec.cfg._sortkey_width
      get_random_vdx = helpers.get_random_vdx_producer(rnd_vdx_cfg);
      probe_sub_count = 3;
      shuffle = GUY.rnd.get_shuffle(57, 88);
      encode = function(vdx) {
        return (codec.encode(vdx)).padEnd(codec.cfg._sortkey_width, codec.cfg._cipher);
      };
      probes_sortkey = [];
//.......................................................................................................
      for (first_idx = i = ref = rnd_vdx_cfg.min_idx, ref1 = rnd_vdx_cfg.max_idx; (ref <= ref1 ? i <= ref1 : i >= ref1); first_idx = ref <= ref1 ? ++i : --i) {
        for (_ = j = 1, ref2 = probe_sub_count; (1 <= ref2 ? j <= ref2 : j >= ref2); _ = 1 <= ref2 ? ++j : --j) {
          vdx = [first_idx, ...get_random_vdx()];
          sk = encode(vdx);
          probes_sortkey.push({vdx, sk});
        }
      }
      //.......................................................................................................
      probes_sortkey = shuffle(probes_sortkey);
      probes_vdx = probes_sortkey.slice(0);
      //.......................................................................................................
      sort_by_vdx = function(a, b) {
        var da, db, idx, k, ref3, ref4, ref5;
        a = a.vdx;
        b = b.vdx;
        for (idx = k = 0, ref3 = Math.max(a.length, b.length); (0 <= ref3 ? k < ref3 : k > ref3); idx = 0 <= ref3 ? ++k : --k) {
          da = (ref4 = a[idx]) != null ? ref4 : 0;
          db = (ref5 = b[idx]) != null ? ref5 : 0;
          if (da === db) {
            continue;
          }
          if (da < db) {
            return -1;
          }
          return +1;
        }
        return null;
      };
      //.......................................................................................................
      sort_by_sortkey = function(a, b) {
        a = a.sk;
        b = b.sk;
        if (a === b) {
          return 0;
        }
        if (a < b) {
          return -1;
        }
        return +1;
      };
      //.......................................................................................................
      probes_vdx.sort(sort_by_vdx);
      probes_sortkey.sort(sort_by_sortkey);
      for (idx = k = 0, len = probes_vdx.length; k < len; idx = ++k) {
        probe_vdx = probes_vdx[idx];
        probe_sortkey = probes_sortkey[idx];
        // whisper 'Ωhllt__96', ( gold probe_sortkey.sk ), ( red probe_vdx.vdx ), ( lime probe_sortkey.vdx )
        this.eq((Ωhllt__97 = function() {
          return probe_sortkey.vdx;
        }), probe_vdx.vdx);
      }
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    hollerith_128_big_shuffle: function() {
      var Hollerith, _, codec, encode, equals, first_idx, get_random_vdx, hollerith_10mvp2, hollerith_128, i, idx, internals, j, len, probe_sortkey, probe_sub_count, probe_vdx, probes_sortkey, probes_vdx, ref, rnd_vdx_cfg, shuffle, sk, sort_by_sortkey, sort_by_vdx, type_of, vdx, walk_first_idxs, Ωhllt_103;
      ({Hollerith, hollerith_128, hollerith_10mvp2, internals} = require('../../../apps/hollerith'));
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({
        isDeepStrictEqual: equals
      } = require('node:util'));
      codec = hollerith_128;
      // codec                       = hollerith_10mvp2
      rnd_vdx_cfg = {
        seed: null,
        min_length: 1,
        max_length: codec.cfg.dimension - 1,
        min_idx: Math.max(codec.cfg._min_integer, -2000),
        max_idx: Math.min(codec.cfg._max_integer, +2000)
      };
      // debug 'Ωhllt__98', rnd_vdx_cfg
      // debug 'Ωhllt__99', codec.cfg._sortkey_width
      get_random_vdx = helpers.get_random_vdx_producer(rnd_vdx_cfg);
      probe_sub_count = 3;
      shuffle = GUY.rnd.get_shuffle(57, 88);
      encode = function(vdx) {
        return (codec.encode(vdx)).padEnd(codec.cfg._sortkey_width, codec.cfg._cipher);
      };
      probes_sortkey = [];
      // debug 'Ωhllt_100', rnd_vdx_cfg; process.exit 111
      //.......................................................................................................
      walk_first_idxs = function*() {
        var i, idx, j, k, ref, ref1, ref2, ref3, ref4, ref5;
        for (idx = i = ref = codec.cfg._min_integer, ref1 = codec.cfg._min_integer + 10; (ref <= ref1 ? i <= ref1 : i >= ref1); idx = ref <= ref1 ? ++i : --i) {
          yield idx;
        }
        for (idx = j = ref2 = rnd_vdx_cfg.min_idx, ref3 = rnd_vdx_cfg.max_idx; (ref2 <= ref3 ? j <= ref3 : j >= ref3); idx = ref2 <= ref3 ? ++j : --j) {
          yield idx;
        }
        for (idx = k = ref4 = codec.cfg._max_integer - 10, ref5 = codec.cfg._max_integer; (ref4 <= ref5 ? k <= ref5 : k >= ref5); idx = ref4 <= ref5 ? ++k : --k) {
          yield idx;
        }
        return null;
      };
//.......................................................................................................
      for (first_idx of walk_first_idxs()) {
// for first_idx in [ -100 .. +100 ]
// debug 'Ωhllt_101', { first_idx, }
        for (_ = i = 1, ref = probe_sub_count; (1 <= ref ? i <= ref : i >= ref); _ = 1 <= ref ? ++i : --i) {
          vdx = [first_idx, ...get_random_vdx()];
          sk = encode(vdx);
          probes_sortkey.push({vdx, sk});
        }
      }
      //.......................................................................................................
      probes_sortkey = shuffle(probes_sortkey);
      probes_vdx = probes_sortkey.slice(0);
      //.......................................................................................................
      sort_by_vdx = function(a, b) {
        var da, db, idx, j, ref1, ref2, ref3;
        a = a.vdx;
        b = b.vdx;
        for (idx = j = 0, ref1 = Math.max(a.length, b.length); (0 <= ref1 ? j < ref1 : j > ref1); idx = 0 <= ref1 ? ++j : --j) {
          da = (ref2 = a[idx]) != null ? ref2 : 0;
          db = (ref3 = b[idx]) != null ? ref3 : 0;
          if (da === db) {
            continue;
          }
          if (da < db) {
            return -1;
          }
          return +1;
        }
        return null;
      };
      //.......................................................................................................
      sort_by_sortkey = function(a, b) {
        a = a.sk;
        b = b.sk;
        if (a === b) {
          return 0;
        }
        if (a < b) {
          return -1;
        }
        return +1;
      };
      //.......................................................................................................
      probes_vdx.sort(sort_by_vdx);
      probes_sortkey.sort(sort_by_sortkey);
      for (idx = j = 0, len = probes_vdx.length; j < len; idx = ++j) {
        probe_vdx = probes_vdx[idx];
        probe_sortkey = probes_sortkey[idx];
        // whisper 'Ωhllt_102', ( gold probe_sortkey.sk ), ( red probe_vdx.vdx ), ( lime probe_sortkey.vdx )
        this.eq((Ωhllt_103 = function() {
          return probe_sortkey.vdx;
        }), probe_vdx.vdx);
      }
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    h128_16383_sorting_2: function() {
      var Hollerith, _, codec, equals, expected_indexes, hollerith_128_16383, i, idx, internals, j, k, l, len, len1, len2, m, padded_lines, pline, probes, psk, real_indexes, shuffle, sk_matcher, type_of, uline, unpadded_lines, usk, vdx, Ωhllt_106, Ωhllt_107, Ωhllt_108, Ωhllt_109, Ωhllt_110, Ωhllt_111, Ωhllt_112, Ωhllt_113, Ωhllt_114, Ωhllt_115, Ωhllt_116, Ωhllt_117, Ωhllt_118, Ωhllt_119, Ωhllt_120, Ωhllt_121, Ωhllt_122, Ωhllt_123, Ωhllt_124, Ωhllt_125, Ωhllt_126, Ωhllt_127, Ωhllt_128, Ωhllt_129, Ωhllt_130, Ωhllt_131, Ωhllt_132, Ωhllt_133, Ωhllt_134, Ωhllt_135, Ωhllt_136, Ωhllt_137, Ωhllt_138, Ωhllt_139, Ωhllt_140, Ωhllt_141, Ωhllt_142, Ωhllt_143, Ωhllt_144, Ωhllt_145, Ωhllt_146, Ωhllt_147, Ωhllt_148, Ωhllt_149, Ωhllt_150, Ωhllt_151, Ωhllt_152, Ωhllt_153, Ωhllt_154, Ωhllt_155, Ωhllt_156, Ωhllt_157, Ωhllt_158, Ωhllt_159, Ωhllt_161, Ωhllt_163;
      ({Hollerith, hollerith_128_16383, internals} = require('../../../apps/hollerith'));
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({
        isDeepStrictEqual: equals
      } = require('node:util'));
      //.......................................................................................................
      probes = [[[-999], 'Í¿;ãããããããããããã'], [[-99], 'Î?ããããããããããããã'], [[-90], 'ÎHããããããããããããã'], [[-80], 'ÎRããããããããããããã'], [[-21], 'Î±ããããããããããããã'], [[-20], 'Ïãããããããããããããã'], [[-11], 'Øãããããããããããããã'], [[-10], 'Ùãããããããããããããã'], [[-9], 'Úãããããããããããããã'], [[-8], 'Ûãããããããããããããã'], [[-7], 'Üãããããããããããããã'], [[-6], 'Ýãããããããããããããã'], [[-5], 'Þãããããããããããããã'], [[-4], 'ßãããããããããããããã'], [[-3], 'àãããããããããããããã'], [[-2], 'áãããããããããããããã'], [[-1], 'âãããããããããããããã'], [[+0, -20], 'ãÏããããããããããããã'], [[+0], 'ããããããããããããããã'], [[+0, +20], 'ã÷ããããããããããããã'], [[+9], 'ìãããããããããããããã'], [[+10, -3], 'íàããããããããããããã'], [[+10, -2], 'íáããããããããããããã'], [[+10, -1], 'íâããããããããããããã'], [[+10], 'íãããããããããããããã'], [[+10, +0], 'íãããããããããããããã'], [[+10, +1], 'íäããããããããããããã'], [[+10, +10, -1], 'ííâãããããããããããã'], [[+10, +10], 'ííããããããããããããã'], [[+10, +20], 'í÷ããããããããããããã'], [[+20], '÷ãããããããããããããã'], [[+20, +10], '÷íããããããããããããã'], [[+90], 'ø~ããããããããããããã'], [[+900], 'ù*&ãããããããããããã']];
      unpadded_lines = [];
      padded_lines = [];
      expected_indexes = (function() {
        var i, ref, results;
        results = [];
        for (idx = i = 0, ref = probes.length; (0 <= ref ? i < ref : i > ref); idx = 0 <= ref ? ++i : --i) {
          results.push(idx);
        }
        return results;
      })();
      shuffle = GUY.rnd.get_shuffle(57, 88);
      codec = hollerith_128_16383;
      // debug 'Ωhllt_104', codec.cfg.digits_per_idx
      // debug 'Ωhllt_105', codec.cfg.zero_pad_length
      this.eq((Ωhllt_106 = function() {
        return codec.cfg._base;
      }), 128);
      this.eq((Ωhllt_107 = function() {
        return codec.cfg._max_integer;
      }), +16383);
      this.eq((Ωhllt_108 = function() {
        return codec.cfg._min_integer;
      }), -16383);
      this.eq((Ωhllt_109 = function() {
        return codec.cfg._pmag_list[2];
      }), 'ù');
      this.eq((Ωhllt_110 = function() {
        return codec.cfg._nmag_list[2];
      }), 'Í');
      this.eq((Ωhllt_111 = function() {
        return codec.encode(codec.cfg._max_integer);
      }), 'ùÆÆ');
      this.eq((Ωhllt_112 = function() {
        return codec.encode(codec.cfg._min_integer);
      }), 'Í!!');
      this.eq((Ωhllt_113 = function() {
        return codec.decode('Í!!');
      }), [-16383]);
      this.throws((Ωhllt_114 = function() {
        return codec.decode('Ç!!!!!!!!');
      }), /not a valid sortkey/);
//.......................................................................................................
      for (idx = i = 0, len = probes.length; i < len; idx = ++i) {
        [vdx, sk_matcher] = probes[idx];
        usk = codec.encode(vdx);
        this.eq((Ωhllt_115 = function() {
          return usk;
        }), sk_matcher);
        // echo rpr usk
        psk = usk.padEnd(10, codec.cfg._cipher);
        usk = usk.padEnd(10, ' ');
        unpadded_lines.push(`${usk} ${rpr(vdx)} ${idx}`);
        padded_lines.push(`${psk} ${rpr(vdx)} ${idx}`);
      }
      //.......................................................................................................
      this.eq((Ωhllt_116 = function() {
        return codec.cfg.digits_per_idx;
      }), 2);
      this.eq((Ωhllt_117 = function() {
        return codec.cfg._max_zpun;
      }), 20);
      this.eq((Ωhllt_118 = function() {
        return codec.cfg._naught;
      }), '!');
      this.eq((Ωhllt_119 = function() {
        return codec.cfg._nova;
      }), 'Æ');
      this.eq((Ωhllt_120 = function() {
        return codec.cfg._cipher;
      }), 'ã');
      this.eq((Ωhllt_121 = function() {
        return codec.cfg._nmag;
      }), ' ÎÍ');
      this.eq((Ωhllt_122 = function() {
        return codec.cfg._pmag;
      }), ' øù');
      this.eq((Ωhllt_123 = function() {
        return codec.cfg._pmag_list[codec.cfg.digits_per_idx];
      }), 'ù');
      this.eq((Ωhllt_124 = function() {
        return codec.encode(-16383);
      }), 'Í!!');
      this.eq((Ωhllt_125 = function() {
        return codec.encode(-16382);
      }), 'Í!#');
      this.eq((Ωhllt_126 = function() {
        return codec.encode(-129);
      }), 'ÍÅÅ');
      this.eq((Ωhllt_127 = function() {
        return codec.encode(-128);
      }), 'ÍÅÆ');
      this.eq((Ωhllt_128 = function() {
        return codec.encode(-127);
      }), 'Î!');
      this.eq((Ωhllt_129 = function() {
        return codec.encode(-80);
      }), 'ÎR');
      this.eq((Ωhllt_130 = function() {
        return codec.encode(-21);
      }), 'Î±');
      this.eq((Ωhllt_131 = function() {
        return codec.encode(-21);
      }), 'Î±');
      this.eq((Ωhllt_132 = function() {
        return codec.encode(-20);
      }), 'Ï');
      this.eq((Ωhllt_133 = function() {
        return codec.encode(-1);
      }), 'â');
      this.eq((Ωhllt_134 = function() {
        return codec.encode(+0);
      }), 'ã');
      this.eq((Ωhllt_135 = function() {
        return codec.encode(+1);
      }), 'ä');
      this.eq((Ωhllt_136 = function() {
        return codec.encode(+20);
      }), '÷');
      this.eq((Ωhllt_137 = function() {
        return codec.encode(+21);
      }), 'ø8');
      this.eq((Ωhllt_138 = function() {
        return codec.encode(+127);
      }), 'øÆ');
      this.eq((Ωhllt_139 = function() {
        return codec.encode(+128);
      }), 'ù#!');
      this.eq((Ωhllt_140 = function() {
        return codec.encode(+129);
      }), 'ù##');
      this.eq((Ωhllt_141 = function() {
        return codec.encode(+16382);
      }), 'ùÆÅ');
      this.eq((Ωhllt_142 = function() {
        return codec.encode(+16383);
      }), 'ùÆÆ');
      //.......................................................................................................
      this.eq((Ωhllt_143 = function() {
        return codec.decode('Í!!');
      }), [-16383]);
      this.eq((Ωhllt_144 = function() {
        return codec.decode('Í!#');
      }), [-16382]);
      this.eq((Ωhllt_145 = function() {
        return codec.decode('ÍÅÅ');
      }), [-129]);
      this.eq((Ωhllt_146 = function() {
        return codec.decode('ÍÅÆ');
      }), [-128]);
      this.eq((Ωhllt_147 = function() {
        return codec.decode('Î!');
      }), [-127]);
      this.eq((Ωhllt_148 = function() {
        return codec.decode('Î±');
      }), [-21]);
      this.eq((Ωhllt_149 = function() {
        return codec.decode('Ï');
      }), [-20]);
      this.eq((Ωhllt_150 = function() {
        return codec.decode('â');
      }), [-1]);
      this.eq((Ωhllt_151 = function() {
        return codec.decode('ã');
      }), [0]);
      this.eq((Ωhllt_152 = function() {
        return codec.decode('ä');
      }), [1]);
      this.eq((Ωhllt_153 = function() {
        return codec.decode('÷');
      }), [20]);
      this.eq((Ωhllt_154 = function() {
        return codec.decode('ø8');
      }), [21]);
      this.eq((Ωhllt_155 = function() {
        return codec.decode('øÆ');
      }), [127]);
      this.eq((Ωhllt_156 = function() {
        return codec.decode('ù#!');
      }), [128]);
      this.eq((Ωhllt_157 = function() {
        return codec.decode('ù##');
      }), [129]);
      this.eq((Ωhllt_158 = function() {
        return codec.decode('ùÆÅ');
      }), [16382]);
      this.eq((Ωhllt_159 = function() {
        return codec.decode('ùÆÆ');
      }), [16383]);
//.......................................................................................................
      for (_ = j = 1; j <= 10; _ = ++j) {
        unpadded_lines = shuffle(unpadded_lines);
        unpadded_lines.sort();
        real_indexes = [];
        for (k = 0, len1 = unpadded_lines.length; k < len1; k++) {
          uline = unpadded_lines[k];
          // help 'Ωhllt_160', uline
          real_indexes.push(Number(uline.replace(/^.*?\s([0-9]+)$/, '$1')));
        }
        this.eq((Ωhllt_161 = function() {
          return equals(expected_indexes, real_indexes);
        }), true);
      }
//.......................................................................................................
      for (_ = l = 1; l <= 10; _ = ++l) {
        padded_lines = shuffle(padded_lines);
        padded_lines.sort();
        real_indexes = [];
        for (idx = m = 0, len2 = padded_lines.length; m < len2; idx = ++m) {
          pline = padded_lines[idx];
          // help 'Ωhllt_162', rpr pline if _ is 1
          real_indexes.push(Number(pline.replace(/^.*?\s([0-9]+)$/, '$1')));
        }
        this.eq((Ωhllt_163 = function() {
          return equals(expected_indexes, real_indexes);
        }), true);
      }
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    h128_decode: function() {
      var Hollerith, codec, equals, hollerith_128, i, index_matcher, index_result, internals, j, len, len1, probes_and_matchers, ref, sortkey, type_of, unit, unit_matcher, unit_result, Ωhllt_166, Ωhllt_167, Ωhllt_169;
      ({Hollerith, hollerith_128, internals} = require('../../../apps/hollerith'));
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({
        isDeepStrictEqual: equals
      } = require('node:util'));
      //.......................................................................................................
      //      'Ç!ÆÆÆÆÆ¿;ãããããããããããããããããããããããããããããããããããã'
      probes_and_matchers = [['Ç!ÆÆÆÆÆ¿;ãããããããããããããããããããããããããããããããããããã', [-999], 'nnum:Í,¿;[-999]|padding:ããããããã'], ['Ç!ÆÆÆÆÆÆ?ãããããããããããããããããããããããããããããããããããã', [-99], 'nnum:Î,?[-99]|padding:ãããããããã'], ['Ç!ÆÆÆÆÆÆHãããããããããããããããããããããããããããããããããããã', [-90], 'nnum:Î,H[-90]|padding:ãããããããã'], ['Øãããããããããããããããããããããããããããããããããããããããããããã', [-11], 'nun:Ø[-11]|padding:ããããããããã'], ['Ùãããããããããããããããããããããããããããããããããããããããããããã', [-10], 'nun:Ù[-10]|padding:ããããããããã'], ['Úãããããããããããããããããããããããããããããããããããããããããããã', [-9], 'nun:Ú[-9]|padding:ããããããããã'], ['Ûãããããããããããããããããããããããããããããããããããããããããããã', [-8], 'nun:Û[-8]|padding:ããããããããã'], ['Üãããããããããããããããããããããããããããããããããããããããããããã', [-7], 'nun:Ü[-7]|padding:ããããããããã'], ['Ýãããããããããããããããããããããããããããããããããããããããããããã', [-6], 'nun:Ý[-6]|padding:ããããããããã'], ['Þãããããããããããããããããããããããããããããããããããããããããããã', [-5], 'nun:Þ[-5]|padding:ããããããããã'], ['ßãããããããããããããããããããããããããããããããããããããããããããã', [-4], 'nun:ß[-4]|padding:ããããããããã'], ['àãããããããããããããããããããããããããããããããããããããããããããã', [-3], 'nun:à[-3]|padding:ããããããããã'], ['áãããããããããããããããããããããããããããããããããããããããããããã', [-2], 'nun:á[-2]|padding:ããããããããã'], ['âãããããããããããããããããããããããããããããããããããããããããããã', [-1], 'nun:â[-1]|padding:ããããããããã'], ['ãÏããããããããããããããããããããããããããããããããããããããããããã', [0, -20], 'zero:ã[0]|nun:Ï[-20]|padding:ãããããããã'], ['ããããããããããããããããããããããããããããããããããããããããããããã', [0], 'padding:ãããããããããã[0]'], ['ã÷ããããããããããããããããããããããããããããããããããããããããããã', [0, 20], 'zero:ã[0]|pun:÷[20]|padding:ãããããããã'], ['ìãããããããããããããããããããããããããããããããããããããããããããã', [9], 'pun:ì[9]|padding:ããããããããã'], ['íàããããããããããããããããããããããããããããããããããããããããããã', [10, -3], 'pun:í[10]|nun:à[-3]|padding:ãããããããã'], ['íáããããããããããããããããããããããããããããããããããããããããããã', [10, -2], 'pun:í[10]|nun:á[-2]|padding:ãããããããã'], ['íâããããããããããããããããããããããããããããããããããããããããããã', [10, -1], 'pun:í[10]|nun:â[-1]|padding:ãããããããã'], ['íãããããããããããããããããããããããããããããããããããããããããããã', [10], 'pun:í[10]|padding:ããããããããã'], ['íäããããããããããããããããããããããããããããããããããããããããããã', [10, 1], 'pun:í[10]|pun:ä[1]|padding:ãããããããã'], ['ííâãããããããããããããããããããããããããããããããããããããããããã', [10, 10, -1], 'pun:í[10]|pun:í[10]|nun:â[-1]|padding:ããããããã'], ['ííããããããããããããããããããããããããããããããããããããããããããã', [10, 10], 'pun:í[10]|pun:í[10]|padding:ãããããããã'], ['í÷ããããããããããããããããããããããããããããããããããããããããããã', [10, 20], 'pun:í[10]|pun:÷[20]|padding:ãããããããã'], ['÷ãããããããããããããããããããããããããããããããããããããããããããã', [20], 'pun:÷[20]|padding:ããããããããã'], ['÷íããããããããããããããããããããããããããããããããããããããããããã', [20, 10], 'pun:÷[20]|pun:í[10]|padding:ãããããããã'], ['ø~ããããããããããããããããããããããããããããããããããããããããããã', [90], 'pnum:ø,~[90]|padding:ãããããããã'], ['ù*&ãããããããããããããããããããããããããããããããããããããããããã', [900], 'pnum:ù,*&[900]|padding:ããããããã']];
      //.......................................................................................................
      codec = hollerith_128;
      for (i = 0, len = probes_and_matchers.length; i < len; i++) {
        [sortkey, index_matcher, unit_matcher] = probes_and_matchers[i];
        unit_result = [];
        index_result = [];
        ref = codec.parse(sortkey);
        for (j = 0, len1 = ref.length; j < len1; j++) {
          unit = ref[j];
          unit_result.push(helpers.rpr_unit(unit));
          if (unit.index != null) {
            index_result.push(unit.index);
          }
        }
        unit_result = unit_result.join('|');
        // info 'Ωhllt_164', f"#{( rpr unit_result ) + ','}:<60c; #{rpr index_result}"
        //   @eq ( Ωhllt_165 = ->  unit_result                     ),  unit_matcher
        this.eq((Ωhllt_166 = function() {
          return index_result;
        }), index_matcher);
        this.eq((Ωhllt_167 = function() {
          return sortkey;
        }), codec.encode(index_matcher));
        // debug 'Ωhllt_168', rpr ( codec.encode index_matcher ).padEnd sortkey.length, codec.cfg._zpuns[ 0 ]
        this.eq((Ωhllt_169 = function() {
          return codec.decode(sortkey);
        }), index_matcher);
      }
      // echo [ sortkey, index_result, unit_result, ]
      //.......................................................................................................
      // @eq     ( Ωhllt_170 = -> codec.parse '5'          ), [ { name: 'other', letters: '5', mantissa: null, index: null } ]
      // @eq     ( Ωhllt_171 = -> codec.parse 'äöü'        ), [ { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
      // @eq     ( Ωhllt_172 = -> codec.parse 'Y900äöü'    ), [ { name: 'pnum', letters: 'Y', mantissa: '900', index: 900 }, { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
      // @throws ( Ωhllt_173 = -> codec.decode '5'         ), /not a valid sortkey: unable to parse '5'/
      // @throws ( Ωhllt_174 = -> codec.decode 'äöü'       ), /not a valid sortkey: unable to parse 'äöü'/
      // @throws ( Ωhllt_175 = -> codec.decode 'äöü'       ), /not a valid sortkey: unable to parse 'ü' in 'Y900äöü'/
      // @throws ( Ωhllt_176 = -> codec.decode 'Y900äöü'   ), /not a valid sortkey: unable to parse 'Y900' in 'Y900äöü'/
      //.......................................................................................................
      // debug 'Ωhllt_177', rpr codec.encode -90 #    [ 'Í¿;ããããããã', [ -999,         ], 'nnum:Í,¿;[-999]|padding:ããããããã',                 ]
      // debug 'Ωhllt_178', rpr codec.decode 'Ç!ÆÆÆÆÆÆH' #    [ 'Í¿;ããããããã', [ -999,         ], 'nnum:Í,¿;[-999]|padding:ããããããã',                 ]
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    h10mvp2_decode_units: function() {
      /* NOTE also see corresponding test in `hengist-NG/dev/interlex/src/test-hollerith.coffee` */
      var Hollerith, codec, hollerith_10mvp2, i, index_matcher, index_result, internals, j, len, len1, probes_and_matchers, ref, sortkey, sortkey_padder, type_of, unit, unit_matcher, unit_result, Ωhllt_180, Ωhllt_181, Ωhllt_182, Ωhllt_183, Ωhllt_184, Ωhllt_185, Ωhllt_186, Ωhllt_187, Ωhllt_188, Ωhllt_189;
      ({type_of} = SFMODULES.unstable.require_type_of());
      //.......................................................................................................
      ({Hollerith, hollerith_10mvp2, internals} = require('../../../apps/hollerith'));
      // { isDeepStrictEqual: equals, } = require 'node:util'
      //.......................................................................................................
      probes_and_matchers = [['A000NNNNNNNN', [-999], 'nnum:A,000[-999]|padding:NNNNNNNN'], ['B00NNNNNNNNN', [-99], 'nnum:B,00[-99]|padding:NNNNNNNNN'], ['B09NNNNNNNNN', [-90], 'nnum:B,09[-90]|padding:NNNNNNNNN'], ['B88NNNNNNNNN', [-11], 'nnum:B,88[-11]|padding:NNNNNNNNN'], ['B89NNNNNNNNN', [-10], 'nnum:B,89[-10]|padding:NNNNNNNNN'], ['ENNNNNNNNNNN', [-9], 'nun:E[-9]|padding:NNNNNNNNNNN'], ['FNNNNNNNNNNN', [-8], 'nun:F[-8]|padding:NNNNNNNNNNN'], ['GNNNNNNNNNNN', [-7], 'nun:G[-7]|padding:NNNNNNNNNNN'], ['HNNNNNNNNNNN', [-6], 'nun:H[-6]|padding:NNNNNNNNNNN'], ['INNNNNNNNNNN', [-5], 'nun:I[-5]|padding:NNNNNNNNNNN'], ['JNNNNNNNNNNN', [-4], 'nun:J[-4]|padding:NNNNNNNNNNN'], ['KNNNNNNNNNNN', [-3], 'nun:K[-3]|padding:NNNNNNNNNNN'], ['LNNNNNNNNNNN', [-2], 'nun:L[-2]|padding:NNNNNNNNNNN'], ['MNNNNNNNNNNN', [-1], 'nun:M[-1]|padding:NNNNNNNNNNN'], ['NB79NNNNNNNN', [0, -20], 'zero:N[0]|nnum:B,79[-20]|padding:NNNNNNNN'], ['NNNNNNNNNNNN', [0], 'padding:NNNNNNNNNNNN[0]'], ['NY20NNNNNNNN', [0, 20], 'zero:N[0]|pnum:Y,20[20]|padding:NNNNNNNN'], ['WNNNNNNNNNNN', [9], 'pun:W[9]|padding:NNNNNNNNNNN'], ['Y10KNNNNNNNN', [10, -3], 'pnum:Y,10[10]|nun:K[-3]|padding:NNNNNNNN'], ['Y10LNNNNNNNN', [10, -2], 'pnum:Y,10[10]|nun:L[-2]|padding:NNNNNNNN'], ['Y10MNNNNNNNN', [10, -1], 'pnum:Y,10[10]|nun:M[-1]|padding:NNNNNNNN'], ['Y10NNNNNNNNN', [10], 'pnum:Y,10[10]|padding:NNNNNNNNN'], ['Y10ONNNNNNNN', [10, 1], 'pnum:Y,10[10]|pun:O[1]|padding:NNNNNNNN'], ['Y10Y10MNNNNN', [10, 10, -1], 'pnum:Y,10[10]|pnum:Y,10[10]|nun:M[-1]|padding:NNNNN'], ['Y10Y10NNNNNN', [10, 10], 'pnum:Y,10[10]|pnum:Y,10[10]|padding:NNNNNN'], ['Y10Y20NNNNNN', [10, 20], 'pnum:Y,10[10]|pnum:Y,20[20]|padding:NNNNNN'], ['Y20NNNNNNNNN', [20], 'pnum:Y,20[20]|padding:NNNNNNNNN'], ['Y20Y10NNNNNN', [20, 10], 'pnum:Y,20[20]|pnum:Y,10[10]|padding:NNNNNN'], ['Y90NNNNNNNNN', [90], 'pnum:Y,90[90]|padding:NNNNNNNNN'], ['Z900NNNNNNNN', [900], 'pnum:Z,900[900]|padding:NNNNNNNN'], ['NNNNNNNNNNNN', [0], 'padding:NNNNNNNNNNNN[0]'], ['NNNNNNNNNNNN', [0], 'padding:NNNNNNNNNNNN[0]'], ['NNNNNNNNNNNN', [0], 'padding:NNNNNNNNNNNN[0]'], ['Y10NNNNNNNNN', [10], 'pnum:Y,10[10]|padding:NNNNNNNNN'], ['KNNNNNNNNNNN', [-3], 'nun:K[-3]|padding:NNNNNNNNNNN']];
      //.......................................................................................................
      // 'KNNNNNNNNNNN'
      codec = hollerith_10mvp2;
      sortkey_padder = codec.cfg._zpuns_list[0];
//.......................................................................................................
      for (i = 0, len = probes_and_matchers.length; i < len; i++) {
        [sortkey, index_matcher, unit_matcher] = probes_and_matchers[i];
        unit_result = [];
        index_result = [];
        ref = codec.parse(sortkey);
        for (j = 0, len1 = ref.length; j < len1; j++) {
          unit = ref[j];
          unit_result.push(helpers.rpr_unit(unit));
          if (unit.index != null) {
            index_result.push(unit.index);
          }
        }
        unit_result = unit_result.join('|');
        // info 'Ωhllt_179', f"#{( rpr unit_result ) + ','}:<60c; #{rpr index_result}"
        this.eq((Ωhllt_180 = function() {
          return unit_result;
        }), unit_matcher);
        this.eq((Ωhllt_181 = function() {
          return index_result;
        }), index_matcher);
        this.eq((Ωhllt_182 = function() {
          return codec.decode(sortkey);
        }), index_matcher);
        this.eq((Ωhllt_183 = function() {
          return sortkey;
        }), codec.encode(index_matcher));
      }
      // echo [ sortkey, index_result, unit_result, ]
      //.......................................................................................................
      this.eq((Ωhllt_184 = function() {
        return codec.parse('5');
      }), [
        {
          name: 'other',
          letters: '5',
          mantissa: null,
          index: null
        }
      ]);
      this.eq((Ωhllt_185 = function() {
        return codec.parse('äöü');
      }), [
        {
          name: 'other',
          letters: 'äöü',
          mantissa: null,
          index: null
        }
      ]);
      this.eq((Ωhllt_186 = function() {
        return codec.parse('Y900äöü');
      }), [
        {
          name: 'pnum',
          letters: 'Y',
          mantissa: '900',
          index: 900
        },
        {
          name: 'other',
          letters: 'äöü',
          mantissa: null,
          index: null
        }
      ]);
      this.throws((Ωhllt_187 = function() {
        return codec.decode('5');
      }), /not a valid sortkey: unable to parse '5'/);
      this.throws((Ωhllt_188 = function() {
        return codec.decode('äöü');
      }), /not a valid sortkey: unable to parse 'äöü'/);
      this.throws((Ωhllt_189 = function() {
        return codec.decode('Y900äöü');
      }), /not a valid sortkey: unable to parse 'äöü' in 'Y900äöü'/);
      //.......................................................................................................
      return null;
    },
    // #---------------------------------------------------------------------------------------------------------
    // h128b_decode: ->
    //   { Hollerith,
    //     hollerith_128,
    //     hollerith_10mvp,
    //     internals               } = require '../../../apps/hollerith'
    //   { type_of,                } = SFMODULES.unstable.require_type_of()
    //   { isDeepStrictEqual: equals, } = require 'node:util'
    //   #.......................................................................................................
    //   # codec = hollerith_128
    //   codec = hollerith_10mvp
    //   debug 'Ωhllt_190', rpr codec.encode -1
    //   debug 'Ωhllt_191', rpr codec.encode -2
    //   n =   -100; urge 'Ωhllt_192', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =    -21; urge 'Ωhllt_193', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =    -20; urge 'Ωhllt_194', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =    -19; urge 'Ωhllt_195', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =     -1; urge 'Ωhllt_196', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =      0; urge 'Ωhllt_197', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =      1; urge 'Ωhllt_198', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =      2; urge 'Ωhllt_199', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =      3; urge 'Ωhllt_200', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =     10; urge 'Ωhllt_201', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =    126; urge 'Ωhllt_202', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =    127; urge 'Ωhllt_203', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =    128; urge 'Ωhllt_204', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =    129; urge 'Ωhllt_205', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   # for [ sortkey, index_matcher, unit_matcher, ] in probes_and_matchers
    //   #   unit_result     = []
    //   #   index_result    = []
    //   #   for unit in codec.parse sortkey
    //   #     unit_result.push  helpers.rpr_unit unit
    //   #     index_result.push unit.index if unit.index?
    //   #   unit_result   = unit_result.join '|'
    //   #   info 'Ωhllt_206', f"#{( rpr unit_result ) + ','}:<60c; #{rpr index_result}"
    //   # #   @eq ( Ωhllt_207 = ->  unit_result                     ),  unit_matcher
    //   #   @eq ( Ωhllt_208 = -> index_result                     ), index_matcher
    //   #   @eq ( Ωhllt_209 = -> sortkey ), ( codec.encode index_matcher ).padEnd sortkey.length, codec.cfg._zpuns[ 0 ]
    //   #   debug 'Ωhllt_210', rpr ( codec.encode index_matcher ).padEnd sortkey.length, codec.cfg._zpuns[ 0 ]
    //   #   @eq ( Ωhllt_211 = -> codec.decode sortkey  ), index_matcher
    //   #   # echo [ sortkey, index_result, unit_result, ]
    //   # #.......................................................................................................
    //   # @eq     ( Ωhllt_212 = -> codec.parse '5'         ), [ { name: 'other', letters: '5', mantissa: null, index: null } ]
    //   # @eq     ( Ωhllt_213 = -> codec.parse 'äöü'       ), [ { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
    //   # @eq     ( Ωhllt_214 = -> codec.parse 'Y900äöü'   ), [ { name: 'pnum', letters: 'Y', mantissa: '900', index: 900 }, { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
    //   # @throws ( Ωhllt_215 = -> codec.decode '5'        ), /not a valid sortkey: unable to parse '5'/
    //   # @throws ( Ωhllt_216 = -> codec.decode 'äöü'      ), /not a valid sortkey: unable to parse 'äöü'/
    //   # @throws ( Ωhllt_217 = -> codec.decode 'Y900äöü'  ), /not a valid sortkey: unable to parse 'äöü' in 'Y900äöü'/
    //   #.......................................................................................................
    //   return null

    //---------------------------------------------------------------------------------------------------------
    types: function() {
      var CFG, Hollerith_typespace, T, equals, internals, pick, type_of, Ωhllt_233, Ωhllt_234, Ωhllt_235, Ωhllt_236, Ωhllt_237, Ωhllt_238, Ωhllt_239, Ωhllt_240, Ωhllt_241, Ωhllt_242, Ωhllt_243, Ωhllt_244, Ωhllt_245, Ωhllt_246, Ωhllt_247, Ωhllt_248, Ωhllt_249, Ωhllt_250, Ωhllt_251, Ωhllt_252, Ωhllt_253, Ωhllt_254, Ωhllt_255, Ωhllt_256, Ωhllt_257, Ωhllt_258, Ωhllt_259, Ωhllt_260, Ωhllt_261, Ωhllt_262, Ωhllt_263, Ωhllt_264, Ωhllt_265, Ωhllt_266, Ωhllt_267, Ωhllt_268, Ωhllt_269, Ωhllt_270, Ωhllt_271, Ωhllt_272, Ωhllt_273, Ωhllt_274, Ωhllt_275, Ωhllt_276, Ωhllt_277, Ωhllt_278;
      ({internals, Hollerith_typespace, CFG} = require('../../../apps/hollerith/lib/types'));
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({
        isDeepStrictEqual: equals
      } = require('node:util'));
      ({pick} = SFMODULES.unstable.require_pick());
      (() => {        //.......................................................................................................
        var T, Ωhllt_218, Ωhllt_219, Ωhllt_220, Ωhllt_221, Ωhllt_222;
        T = new Hollerith_typespace();
        this.eq((Ωhllt_218 = function() {
          return T[CFG].blank;
        }), '\x20');
        this.eq((Ωhllt_219 = function() {
          return T[CFG].blank_splitter;
        }), /(?:\x20)+/gv);
        this.eq((Ωhllt_220 = function() {
          return T[CFG].blank_splitter.unicodeSets;
        }), true);
        this.eq((Ωhllt_221 = function() {
          return T[CFG].blank_splitter.global;
        }), true);
        this.eq((Ωhllt_222 = function() {
          return 'a   g  z  '.replace(T[CFG].blank_splitter, 'ü');
        }), 'aügüzü');
        return null;
      })();
      (() => {        //.......................................................................................................
        var T, Ωhllt_223, Ωhllt_224, Ωhllt_225, Ωhllt_226, Ωhllt_227, Ωhllt_228, Ωhllt_229, Ωhllt_230, Ωhllt_231, Ωhllt_232;
        T = new Hollerith_typespace({
          blank: '#'
        });
        this.eq((Ωhllt_223 = function() {
          return T[CFG].blank;
        }), '#');
        this.eq((Ωhllt_224 = function() {
          return T[CFG].blank_splitter;
        }), /(?:\x23)+/gv);
        this.eq((Ωhllt_225 = function() {
          return T[CFG].blank_splitter.unicodeSets;
        }), true);
        this.eq((Ωhllt_226 = function() {
          return T[CFG].blank_splitter.global;
        }), true);
        this.eq((Ωhllt_227 = function() {
          return 'a###g##z##'.replace(T[CFG].blank_splitter, 'ü');
        }), 'aügüzü');
        this.eq((Ωhllt_228 = function() {
          return T.magnifiers.isa('ABC XYZ');
        }), false);
        this.eq((Ωhllt_229 = function() {
          return T.magnifiers.isa('ABC#XYZ');
        }), true);
        this.eq((Ωhllt_230 = function() {
          return T.blank.isa(' ');
        }), false);
        this.eq((Ωhllt_231 = function() {
          return T.blank.isa('#');
        }), true);
        this.eq((Ωhllt_232 = function() {
          return T.blank.isa(T[CFG].blank);
        }), true);
        return null;
      })();
      //.......................................................................................................
      T = new Hollerith_typespace();
      this.eq((Ωhllt_233 = function() {
        return T.nonempty_text.isa(4);
      }), false);
      this.eq((Ωhllt_234 = function() {
        return T.nonempty_text.isa(false);
      }), false);
      this.eq((Ωhllt_235 = function() {
        return T.nonempty_text.isa('');
      }), false);
      this.eq((Ωhllt_236 = function() {
        return T.nonempty_text.isa('yes');
      }), true);
      //.......................................................................................................
      this.eq((Ωhllt_237 = function() {
        return T.incremental_text.isa('yes');
      }), false);
      this.eq((Ωhllt_238 = function() {
        return T.decremental_text.isa('yes');
      }), false);
      this.eq((Ωhllt_239 = function() {
        return T.incremental_text.data;
      }), {
        chrs: ['y', 'e', 's'],
        fail: {
          x: 'yes',
          idx: 1,
          prv_chr: 'y',
          chr: 'e'
        }
      });
      this.eq((Ωhllt_240 = function() {
        return T.incremental_text.isa('abcdefz');
      }), true);
      this.eq((Ωhllt_241 = function() {
        return T.decremental_text.isa('abcdefz');
      }), false);
      this.eq((Ωhllt_242 = function() {
        return T.incremental_text.data;
      }), {
        chrs: ['a', 'b', 'c', 'd', 'e', 'f', 'z']
      });
      this.eq((Ωhllt_243 = function() {
        return T.decremental_text.data;
      }), {
        chrs: ['a', 'b', 'c', 'd', 'e', 'f', 'z'],
        fail: {
          x: 'abcdefz',
          idx: 1,
          prv_chr: 'a',
          chr: 'b'
        }
      });
      this.eq((Ωhllt_244 = function() {
        return T.incremental_text.isa('abc0');
      }), false);
      this.eq((Ωhllt_245 = function() {
        return T.incremental_text.data;
      }), {
        chrs: ['a', 'b', 'c', '0'],
        fail: {
          x: 'abc0',
          idx: 3,
          prv_chr: 'c',
          chr: '0'
        }
      });
      this.eq((Ωhllt_246 = function() {
        return T.decremental_text.isa('cba');
      }), true);
      this.eq((Ωhllt_247 = function() {
        return T.decremental_text.data;
      }), {
        chrs: ['c', 'b', 'a']
      });
      //.......................................................................................................
      this.eq((Ωhllt_248 = function() {
        return T.magnifiers.isa('');
      }), false);
      this.eq((Ωhllt_249 = function() {
        return T.magnifiers.data;
      }), {
        message: "expected a magnifier, got an empty text"
      });
      this.eq((Ωhllt_250 = function() {
        return T.magnifiers.isa('ABC XYZ');
      }), true);
      this.eq((Ωhllt_251 = function() {
        return pick(T.magnifiers.data, ['nmag_chrs_reversed', '_pmag_list', '_nmag', '_pmag']);
      }), {
        nmag_chrs_reversed: ['A', 'B', 'C'],
        _pmag_list: [' ', 'X', 'Y', 'Z'],
        _nmag: ' CBA',
        _pmag: ' XYZ'
      });
      this.eq((Ωhllt_252 = function() {
        return Object.isFrozen(T.magnifiers.data.nmag_chrs_reversed);
      }), true);
      this.eq((Ωhllt_253 = function() {
        return Object.isFrozen(T.magnifiers.data._pmag_list);
      }), true);
      this.eq((Ωhllt_254 = function() {
        return T.magnifiers.isa('ABC\nXYZ');
      }), false);
      this.eq((Ωhllt_255 = function() {
        return T.magnifiers.isa('ABC\tXYZ');
      }), false);
      this.eq((Ωhllt_256 = function() {
        return T.magnifiers.isa('ABC             XYZ');
      }), true);
      this.eq((Ωhllt_257 = function() {
        return T.magnifiers.isa('ABC DX YZ');
      }), false);
      this.eq((Ωhllt_258 = function() {
        return T.magnifiers.isa('ABD CXYZ');
      }), false);
      //.......................................................................................................
      this.eq((Ωhllt_259 = function() {
        return T.uniliterals.isa(null);
      }), false);
      this.eq((Ωhllt_260 = function() {
        return T.uniliterals.isa('');
      }), false);
      this.eq((Ωhllt_261 = function() {
        return T.uniliterals.isa('VBA');
      }), false);
      this.eq((Ωhllt_262 = function() {
        return T.uniliterals.isa('EFGHIJKLM NOPQRSTUVW');
      }), false);
      this.eq((Ωhllt_263 = function() {
        return T.uniliterals.isa('EFGHIJKLM N OPQRSTUVW');
      }), true);
      this.eq((Ωhllt_264 = function() {
        return T.uniliterals.data;
      }), {
        _nuns: 'EFGHIJKLM',
        _zpuns: 'NOPQRSTUVW',
        _nuns_list: ['E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'],
        _zpuns_list: ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W']
      });
      this.eq((Ωhllt_265 = function() {
        return T.uniliterals.isa('N');
      }), true);
      this.eq((Ωhllt_266 = function() {
        return T.uniliterals.data;
      }), {
        _nuns: '',
        _zpuns: 'N',
        _nuns_list: [],
        _zpuns_list: ['N']
      });
      //.......................................................................................................
      this.throws((Ωhllt_267 = function() {
        return T.digitset.validate(null);
      }), /not a valid digitset/);
      this.throws((Ωhllt_268 = function() {
        return T.digitset.validate('');
      }), /not a valid digitset/);
      this.throws((Ωhllt_269 = function() {
        return T.digitset.validate('a');
      }), /not a valid digitset/);
      this.eq((Ωhllt_270 = function() {
        return T.digitset.validate('ab');
      }), 'ab');
      //.......................................................................................................
      this.throws((Ωhllt_271 = function() {
        return new Hollerith_typespace({
          blank: null
        });
      }), /not a valid blank/);
      this.throws((Ωhllt_272 = function() {
        return new Hollerith_typespace({
          blank: ''
        });
      }), /not a valid blank/);
      this.throws((Ωhllt_273 = function() {
        return new Hollerith_typespace({
          blank: '--'
        });
      }), /not a valid blank/);
      this.throws((Ωhllt_274 = function() {
        return (new Hollerith_typespace({
          blank: null
        })).blank.validate(null);
      }), /not a valid blank/);
      this.throws((Ωhllt_275 = function() {
        return (new Hollerith_typespace({
          blank: ''
        })).blank.validate('');
      }), /not a valid blank/);
      this.throws((Ωhllt_276 = function() {
        return (new Hollerith_typespace({
          blank: '--'
        })).blank.validate('--');
      }), /not a valid blank/);
      this.eq((Ωhllt_277 = function() {
        return (new Hollerith_typespace({
          blank: '-'
        })).blank.validate('-');
      }), '-');
      this.eq((Ωhllt_278 = function() {
        return (new Hollerith_typespace({
          blank: ' '
        })).blank.validate(' ');
      }), ' ');
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    validate_and_compile_cfg_general: function() {
      var CFG, Hollerith, Hollerith_typespace, internals, is_frozen, Ωhllt_279;
      ({internals, Hollerith} = require('../../../apps/hollerith'));
      ({Hollerith_typespace, CFG} = require('../../../apps/hollerith/lib/types'));
      ({
        // { type_of,                    } = SFMODULES.unstable.require_type_of()
        // { isDeepStrictEqual: equals,  } = require 'node:util'
        isFrozen: is_frozen
      } = Object);
      //.......................................................................................................
      /* testing a general assumption so we don't mess up: */
      this.eq((Ωhllt_279 = function() {
        return (Number.MAX_SAFE_INTEGER - 1) === -(Number.MIN_SAFE_INTEGER + 1);
      }), true);
      (() => {        //.......................................................................................................
        var Ωhllt_280, Ωhllt_281, Ωhllt_282;
        // T = new Hollerith_typespace()
        this.throws((Ωhllt_280 = function() {
          return Hollerith.validate_and_compile_cfg({});
        }), /not a valid digitset/);
        this.throws((Ωhllt_281 = function() {
          return Hollerith.validate_and_compile_cfg({
            digitset: ''
          });
        }), /not a valid digitset/);
        this.throws((Ωhllt_282 = function() {
          return Hollerith.validate_and_compile_cfg({
            digitset: 'a'
          });
        }), /not a valid digitset/);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    validate_and_compile_cfg_10: function() {
      var CFG, Hollerith, Hollerith_typespace, cfg_10, internals, is_frozen;
      ({internals, Hollerith} = require('../../../apps/hollerith'));
      ({Hollerith_typespace, CFG} = require('../../../apps/hollerith/lib/types'));
      ({
        // { type_of,                    } = SFMODULES.unstable.require_type_of()
        // { isDeepStrictEqual: equals,  } = require 'node:util'
        isFrozen: is_frozen
      } = Object);
      //.......................................................................................................
      cfg_10 = {
        blank: ' ', // separator used in `magnifiers` and `uniliterals`
        digitset: '0123456789', // digits; length of `digitset` is the `_base`
        magnifiers: 'ABC XYZ', 
        uniliterals: 'FGHIJKLM N OPQRSTUV', // negative uniliterals, blank, zero uniliteral, blank, positive uniliterals
        dimension: 3 // number of indices supported
      };
      (() => {        //.......................................................................................................
        var cfg, h, Ωhllt_283, Ωhllt_284, Ωhllt_285, Ωhllt_286, Ωhllt_287, Ωhllt_288, Ωhllt_289, Ωhllt_290, Ωhllt_291, Ωhllt_292, Ωhllt_293, Ωhllt_294, Ωhllt_295, Ωhllt_296, Ωhllt_297, Ωhllt_298, Ωhllt_299, Ωhllt_300, Ωhllt_301, Ωhllt_302, Ωhllt_303, Ωhllt_304, Ωhllt_305, Ωhllt_306, Ωhllt_307, Ωhllt_308, Ωhllt_309, Ωhllt_311, Ωhllt_312, Ωhllt_313, Ωhllt_314, Ωhllt_315, Ωhllt_316, Ωhllt_317, Ωhllt_318, Ωhllt_319, Ωhllt_320, Ωhllt_321, Ωhllt_322, Ωhllt_323, Ωhllt_324, Ωhllt_325, Ωhllt_326;
        ({cfg} = Hollerith.validate_and_compile_cfg(cfg_10));
        this.eq((Ωhllt_283 = function() {
          return cfg.blank;
        }), ' ');
        this.eq((Ωhllt_284 = function() {
          return cfg.digitset;
        }), '0123456789');
        this.eq((Ωhllt_285 = function() {
          return cfg._digits_list;
        }), Array.from('0123456789'));
        this.eq((Ωhllt_286 = function() {
          return cfg._nova;
        }), (Array.from(cfg.digitset)).at(-1));
        this.eq((Ωhllt_287 = function() {
          return cfg._leading_novas_re;
        }), /^(?:9)*(?=.+$)/gv);
        this.eq((Ωhllt_288 = function() {
          return is_frozen(cfg._digits_list);
        }), true);
        this.eq((Ωhllt_289 = function() {
          return cfg._base;
        }), 10);
        this.eq((Ωhllt_290 = function() {
          return cfg.magnifiers;
        }), 'ABC XYZ');
        this.eq((Ωhllt_291 = function() {
          return cfg._nmag;
        }), ' CBA');
        this.eq((Ωhllt_292 = function() {
          return cfg._pmag;
        }), ' XYZ');
        this.eq((Ωhllt_293 = function() {
          return cfg._nmag_list;
        }), Array.from(' CBA'));
        this.eq((Ωhllt_294 = function() {
          return cfg._pmag_list;
        }), Array.from(' XYZ'));
        this.eq((Ωhllt_295 = function() {
          return cfg.uniliterals;
        }), 'FGHIJKLM N OPQRSTUV');
        this.eq((Ωhllt_296 = function() {
          return cfg._nuns;
        }), 'FGHIJKLM');
        this.eq((Ωhllt_297 = function() {
          return cfg._zpuns;
        }), 'NOPQRSTUV');
        this.eq((Ωhllt_298 = function() {
          return cfg._max_zpun;
        }), 8);
        this.eq((Ωhllt_299 = function() {
          return cfg._min_nun;
        }), -8);
        this.eq((Ωhllt_300 = function() {
          return cfg._nuns_list;
        }), ['F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'], this.eq((Ωhllt_301 = function() {
          return cfg._zpuns_list;
        }), ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V']));
        this.eq((Ωhllt_302 = function() {
          return cfg.dimension;
        }), 3);
        this.eq((Ωhllt_303 = function() {
          return +((cfg._base ** (cfg._pmag_list.length - 1)) - 1);
        }), +999);
        this.eq((Ωhllt_304 = function() {
          return -((cfg._base ** (cfg._nmag_list.length - 1)) - 1);
        }), -999);
        this.eq((Ωhllt_305 = function() {
          return cfg._max_integer;
        }), +999);
        this.eq((Ωhllt_306 = function() {
          return cfg._min_integer;
        }), -999);
        this.eq((Ωhllt_307 = function() {
          return cfg.digits_per_idx;
        }), 3);
        this.eq((Ωhllt_308 = function() {
          return cfg._alphabet;
        }), '0123456789ABCFGHIJKLMNOPQRSTUVXYZ');
        //.....................................................................................................
        h = new Hollerith(cfg_10);
        this.eq((Ωhllt_309 = function() {
          return h.cfg;
        }), cfg);
        // @eq ( Ωhllt_310 = -> h.encode  -998 ), null
        this.eq((Ωhllt_311 = function() {
          return h.encode(-12);
        }), 'B87');
        this.eq((Ωhllt_312 = function() {
          return h.encode(-11);
        }), 'B88');
        this.eq((Ωhllt_313 = function() {
          return h.encode(-10);
        }), 'B89');
        this.eq((Ωhllt_314 = function() {
          return h.encode(-9);
        }), 'C0');
        this.eq((Ωhllt_315 = function() {
          return h.encode(-8);
        }), 'F');
        this.eq((Ωhllt_316 = function() {
          return h.encode(-2);
        }), 'L');
        this.eq((Ωhllt_317 = function() {
          return h.encode(-1);
        }), 'M');
        this.eq((Ωhllt_318 = function() {
          return h.encode(0);
        }), 'N');
        this.eq((Ωhllt_319 = function() {
          return h.encode(+1);
        }), 'O');
        this.eq((Ωhllt_320 = function() {
          return h.encode(+2);
        }), 'P');
        this.eq((Ωhllt_321 = function() {
          return h.encode(+8);
        }), 'V');
        this.eq((Ωhllt_322 = function() {
          return h.encode(+9);
        }), 'X9');
        this.eq((Ωhllt_323 = function() {
          return h.encode(+10);
        }), 'Y10');
        this.eq((Ωhllt_324 = function() {
          return h.encode(+11);
        }), 'Y11');
        this.eq((Ωhllt_325 = function() {
          return h.encode(+12);
        }), 'Y12');
        this.eq((Ωhllt_326 = function() {
          return h.encode(+998);
        }), 'Z998');
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    validate_and_compile_cfg_10_no_unilterals: function() {
      var CFG, Hollerith, Hollerith_typespace, cfg_10_no_uniliterals, internals, is_frozen;
      ({internals, Hollerith} = require('../../../apps/hollerith'));
      ({Hollerith_typespace, CFG} = require('../../../apps/hollerith/lib/types'));
      ({
        // { type_of,                    } = SFMODULES.unstable.require_type_of()
        // { isDeepStrictEqual: equals,  } = require 'node:util'
        isFrozen: is_frozen
      } = Object);
      //.......................................................................................................
      cfg_10_no_uniliterals = {
        blank: ' ', // separator used in `magnifiers` and `uniliterals`
        digitset: '0123456789', // digits; length of `digitset` is the `_base`
        magnifiers: 'ABC XYZ', 
        uniliterals: 'N', // only has zero uniliteral
        dimension: 3 // number of indices supported
      };
      (() => {        //.......................................................................................................
        var cfg, h, Ωhllt_327, Ωhllt_328, Ωhllt_329, Ωhllt_330, Ωhllt_331, Ωhllt_332, Ωhllt_333, Ωhllt_334, Ωhllt_335, Ωhllt_336, Ωhllt_337, Ωhllt_338, Ωhllt_339, Ωhllt_340, Ωhllt_341, Ωhllt_342, Ωhllt_343, Ωhllt_344, Ωhllt_345, Ωhllt_346, Ωhllt_347, Ωhllt_348, Ωhllt_349, Ωhllt_350, Ωhllt_351, Ωhllt_352;
        ({cfg} = Hollerith.validate_and_compile_cfg(cfg_10_no_uniliterals));
        this.eq((Ωhllt_327 = function() {
          return cfg.blank;
        }), ' ');
        this.eq((Ωhllt_328 = function() {
          return cfg.digitset;
        }), '0123456789');
        this.eq((Ωhllt_329 = function() {
          return cfg._digits_list;
        }), Array.from('0123456789'));
        this.eq((Ωhllt_330 = function() {
          return cfg._nova;
        }), (Array.from(cfg.digitset)).at(-1));
        this.eq((Ωhllt_331 = function() {
          return cfg._leading_novas_re;
        }), /^(?:9)*(?=.+$)/gv);
        this.eq((Ωhllt_332 = function() {
          return is_frozen(cfg._digits_list);
        }), true);
        this.eq((Ωhllt_333 = function() {
          return cfg._base;
        }), 10);
        this.eq((Ωhllt_334 = function() {
          return cfg.magnifiers;
        }), 'ABC XYZ');
        this.eq((Ωhllt_335 = function() {
          return cfg._nmag;
        }), ' CBA');
        this.eq((Ωhllt_336 = function() {
          return cfg._pmag;
        }), ' XYZ');
        this.eq((Ωhllt_337 = function() {
          return cfg._nmag_list;
        }), Array.from(' CBA'));
        this.eq((Ωhllt_338 = function() {
          return cfg._pmag_list;
        }), Array.from(' XYZ'));
        this.eq((Ωhllt_339 = function() {
          return cfg.uniliterals;
        }), 'N');
        this.eq((Ωhllt_340 = function() {
          return cfg._nuns;
        }), '');
        this.eq((Ωhllt_341 = function() {
          return cfg._zpuns;
        }), 'N');
        this.eq((Ωhllt_342 = function() {
          return cfg._nuns_list;
        }), []);
        this.eq((Ωhllt_343 = function() {
          return cfg._zpuns_list;
        }), ['N']);
        this.eq((Ωhllt_344 = function() {
          return cfg.dimension;
        }), 3);
        this.eq((Ωhllt_345 = function() {
          return +((cfg._base ** (cfg._pmag_list.length - 1)) - 1);
        }), +999);
        this.eq((Ωhllt_346 = function() {
          return -((cfg._base ** (cfg._nmag_list.length - 1)) - 1);
        }), -999);
        this.eq((Ωhllt_347 = function() {
          return cfg._max_integer;
        }), +999);
        this.eq((Ωhllt_348 = function() {
          return cfg._min_integer;
        }), -999);
        this.eq((Ωhllt_349 = function() {
          return cfg.digits_per_idx;
        }), 3);
        this.eq((Ωhllt_350 = function() {
          return cfg._alphabet;
        }), '0123456789ABCNXYZ');
        //.....................................................................................................
        h = new Hollerith(cfg_10_no_uniliterals);
        this.eq((Ωhllt_351 = function() {
          return h.cfg;
        }), cfg);
        this.eq((Ωhllt_352 = function() {
          return h.encode([0]);
        }), 'NNNNNNNNNNNN');
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    validate_and_compile_cfg_128: function() {
      var CFG, Hollerith, Hollerith_typespace, cfg_128, internals, is_frozen;
      ({internals, Hollerith} = require('../../../apps/hollerith'));
      ({Hollerith_typespace, CFG} = require('../../../apps/hollerith/lib/types'));
      ({
        // { type_of,                    } = SFMODULES.unstable.require_type_of()
        // { isDeepStrictEqual: equals,  } = require 'node:util'
        isFrozen: is_frozen
      } = Object);
      //.......................................................................................................
      cfg_128 = {
        /*                     1         2         3       */
        /*            12345678901234567890123456789012     */
        digitset: '!#$%&()*+,-./0123456789:;<=>?@AB' + 'CDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abc' + 'defghijklmnopqrstuvwxyz{|}~¡¢£¤¥' + '¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆ',
        magnifiers: 'ÇÈÉÊËÌÍÎ øùúûüýþÿ',
        uniliterals: 'ÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâ ã äåæçèéêëìíîïðñòóôõö÷',
        dimension: 5
      };
      (() => {        //.......................................................................................................
        var cfg, h, Ωhllt_353, Ωhllt_354, Ωhllt_355, Ωhllt_356, Ωhllt_357, Ωhllt_358, Ωhllt_359, Ωhllt_360, Ωhllt_361, Ωhllt_362, Ωhllt_363, Ωhllt_364, Ωhllt_365, Ωhllt_366, Ωhllt_367, Ωhllt_368, Ωhllt_369, Ωhllt_372, Ωhllt_373, Ωhllt_374, Ωhllt_375;
        ({cfg} = Hollerith.validate_and_compile_cfg(cfg_128));
        this.eq((Ωhllt_353 = function() {
          return cfg.blank;
        }), ' ');
        this.eq((Ωhllt_354 = function() {
          return cfg.digitset;
        }), '!#$%&()*+,-./0123456789:;<=>?@AB' + 'CDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abc' + 'defghijklmnopqrstuvwxyz{|}~¡¢£¤¥' + '¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆ');
        this.eq((Ωhllt_355 = function() {
          return cfg._digits_list;
        }), Array.from(cfg.digitset));
        this.eq((Ωhllt_356 = function() {
          return cfg._nova;
        }), (Array.from(cfg.digitset)).at(-1));
        this.eq((Ωhllt_357 = function() {
          return cfg._leading_novas_re;
        }), /^(?:Æ)*(?=.+$)/gv);
        this.eq((Ωhllt_358 = function() {
          return cfg.magnifiers;
        }), 'ÇÈÉÊËÌÍÎ øùúûüýþÿ');
        this.eq((Ωhllt_359 = function() {
          return cfg._nmag;
        }), ' ÎÍÌËÊÉÈÇ');
        this.eq((Ωhllt_360 = function() {
          return cfg._pmag;
        }), ' øùúûüýþÿ');
        this.eq((Ωhllt_361 = function() {
          return cfg._nmag_list;
        }), Array.from(' ÎÍÌËÊÉÈÇ'));
        this.eq((Ωhllt_362 = function() {
          return cfg._pmag_list;
        }), Array.from(' øùúûüýþÿ'));
        this.eq((Ωhllt_363 = function() {
          return cfg.uniliterals;
        }), 'ÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâ ã äåæçèéêëìíîïðñòóôõö÷');
        this.eq((Ωhllt_364 = function() {
          return cfg._nuns;
        }), 'ÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâ');
        this.eq((Ωhllt_365 = function() {
          return cfg._zpuns;
        }), 'ãäåæçèéêëìíîïðñòóôõö÷');
        this.eq((Ωhllt_366 = function() {
          return cfg._nuns_list;
        }), Array.from('ÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâ'));
        this.eq((Ωhllt_367 = function() {
          return cfg._zpuns_list;
        }), Array.from('ãäåæçèéêëìíîïðñòóôõö÷'));
        this.eq((Ωhllt_368 = function() {
          return cfg._min_integer;
        }), -((128 ** 7) - 1));
        this.eq((Ωhllt_369 = function() {
          return cfg._max_integer;
        }), +((128 ** 7) - 1));
        // @eq ( Ωhllt_370 = -> cfg.digits_per_idx                                         ), 3
        // @eq ( Ωhllt_371 = -> cfg._alphabet                                          ), '0123456789ABCEFGHIJKLMNOPQRSTUVWXYZ'
        //.....................................................................................................
        this.eq((Ωhllt_372 = function() {
          return is_frozen(cfg._digits_list);
        }), true);
        this.eq((Ωhllt_373 = function() {
          return cfg._base;
        }), 128);
        this.eq((Ωhllt_374 = function() {
          return cfg.dimension;
        }), 5);
        //.....................................................................................................
        h = new Hollerith(cfg_128);
        this.eq((Ωhllt_375 = function() {
          return h.cfg;
        }), cfg);
        // @eq ( Ωhllt_376 = -> h.encode [ 0, ] ), null
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    validate_and_compile_cfg_10_cardinals: function() {
      var CFG, Hollerith, Hollerith_typespace, constants_10_cardinal, hollerith_10_cardinal, internals, is_frozen;
      ({internals, hollerith_10_cardinal, Hollerith} = require('../../../apps/hollerith'));
      ({constants_10_cardinal} = internals);
      ({Hollerith_typespace, CFG} = require('../../../apps/hollerith/lib/types'));
      ({
        // { type_of,                    } = SFMODULES.unstable.require_type_of()
        // { isDeepStrictEqual: equals,  } = require 'node:util'
        isFrozen: is_frozen
      } = Object);
      (() => {        //.......................................................................................................
        var cfg, h, Ωhllt_377, Ωhllt_378, Ωhllt_379, Ωhllt_380, Ωhllt_381, Ωhllt_382, Ωhllt_383, Ωhllt_384, Ωhllt_385, Ωhllt_386, Ωhllt_387, Ωhllt_388, Ωhllt_389;
        ({cfg} = Hollerith.validate_and_compile_cfg(constants_10_cardinal));
        this.eq((Ωhllt_377 = function() {
          return cfg.blank;
        }), ' ');
        this.eq((Ωhllt_378 = function() {
          return cfg.cardinals_only;
        }), true);
        this.eq((Ωhllt_379 = function() {
          return cfg._nmag;
        }), null);
        this.eq((Ωhllt_380 = function() {
          return cfg._nuns;
        }), null);
        this.eq((Ωhllt_381 = function() {
          return cfg._min_integer;
        }), 0);
        this.eq((Ωhllt_382 = function() {
          return cfg._max_integer;
        }), +999);
        this.eq((Ωhllt_383 = function() {
          return cfg.digits_per_idx;
        }), 3);
        //.....................................................................................................
        h = new Hollerith(constants_10_cardinal);
        this.eq((Ωhllt_384 = function() {
          return h.cfg;
        }), cfg);
        this.eq((Ωhllt_385 = function() {
          return h.encode([0]);
        }), 'NNNNNNNNNNNN');
        this.eq((Ωhllt_386 = function() {
          return h.encode([999]);
        }), 'Z999NNNNNNNN');
        this.eq((Ωhllt_387 = function() {
          return h.encode(0);
        }), 'N');
        this.eq((Ωhllt_388 = function() {
          return h.encode(999);
        }), 'Z999');
        this.throws((Ωhllt_389 = function() {
          return h.encode([-1]);
        }), /yyy/);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    can_set_max_idx_digits: function() {
      var CFG, Hollerith, Hollerith_typespace, internals, is_frozen;
      ({internals, Hollerith} = require('../../../apps/hollerith'));
      ({Hollerith_typespace, CFG} = require('../../../apps/hollerith/lib/types'));
      ({
        // { type_of,                    } = SFMODULES.unstable.require_type_of()
        // { isDeepStrictEqual: equals,  } = require 'node:util'
        isFrozen: is_frozen
      } = Object);
      (() => {        //=======================================================================================================
        var cfg, h, user_cfg, Ωhllt_390, Ωhllt_391, Ωhllt_392, Ωhllt_393, Ωhllt_394;
        user_cfg = {
          uniliterals: 'EFGHIJKLM N OPQRSTUVW',
          digitset: '0123456789',
          magnifiers: 'ABC XYZ'
        };
        ({cfg} = Hollerith.validate_and_compile_cfg(user_cfg));
        this.eq((Ωhllt_390 = function() {
          return cfg._min_integer;
        }), -999);
        this.eq((Ωhllt_391 = function() {
          return cfg._max_integer;
        }), +999);
        this.eq((Ωhllt_392 = function() {
          return cfg.digits_per_idx;
        }), 3);
        //.....................................................................................................
        h = new Hollerith(user_cfg);
        this.eq((Ωhllt_393 = function() {
          return h.cfg;
        }), cfg);
        this.eq((Ωhllt_394 = function() {
          return h.encode([0]);
        }), 'NNNNNNNNNNNNNNNNNNNN');
        return null;
      })();
      (() => {        //.......................................................................................................
        var cfg, h, user_cfg, Ωhllt_395, Ωhllt_396, Ωhllt_397, Ωhllt_398, Ωhllt_399;
        user_cfg = {
          uniliterals: 'EFGHIJKLM N OPQRSTUVW',
          digitset: '0123456789',
          magnifiers: 'ABC XYZ',
          _max_integer: 999
        };
        ({cfg} = Hollerith.validate_and_compile_cfg(user_cfg));
        this.eq((Ωhllt_395 = function() {
          return cfg._min_integer;
        }), -999);
        this.eq((Ωhllt_396 = function() {
          return cfg._max_integer;
        }), +999);
        this.eq((Ωhllt_397 = function() {
          return cfg.digits_per_idx;
        }), 3);
        //.....................................................................................................
        h = new Hollerith(user_cfg);
        this.eq((Ωhllt_398 = function() {
          return h.cfg;
        }), cfg);
        this.eq((Ωhllt_399 = function() {
          return h.encode([0]);
        }), 'NNNNNNNNNNNNNNNNNNNN');
        return null;
      })();
      (() => {        //.......................................................................................................
        var cfg, h, user_cfg, Ωhllt_400, Ωhllt_401, Ωhllt_402, Ωhllt_403, Ωhllt_404;
        user_cfg = {
          uniliterals: 'EFGHIJKLM N OPQRSTUVW',
          digitset: '0123456789',
          magnifiers: 'ABC XYZ',
          digits_per_idx: 3
        };
        ({cfg} = Hollerith.validate_and_compile_cfg(user_cfg));
        this.eq((Ωhllt_400 = function() {
          return cfg._min_integer;
        }), -999);
        this.eq((Ωhllt_401 = function() {
          return cfg._max_integer;
        }), +999);
        this.eq((Ωhllt_402 = function() {
          return cfg.digits_per_idx;
        }), 3);
        //.....................................................................................................
        h = new Hollerith(user_cfg);
        this.eq((Ωhllt_403 = function() {
          return h.cfg;
        }), cfg);
        this.eq((Ωhllt_404 = function() {
          return h.encode([0]);
        }), 'NNNNNNNNNNNNNNNNNNNN');
        return null;
      })();
      (() => {        //=======================================================================================================
        var cfg, h, user_cfg, Ωhllt_405, Ωhllt_406, Ωhllt_407, Ωhllt_408, Ωhllt_409;
        user_cfg = {
          uniliterals: 'EFGHIJKLM N OPQRSTUVW',
          digitset: '0123456789',
          magnifiers: '?@ABC XYZ^_'
        };
        ({cfg} = Hollerith.validate_and_compile_cfg(user_cfg));
        this.eq((Ωhllt_405 = function() {
          return cfg._min_integer;
        }), -99_999);
        this.eq((Ωhllt_406 = function() {
          return cfg._max_integer;
        }), +99_999);
        this.eq((Ωhllt_407 = function() {
          return cfg.digits_per_idx;
        }), 5);
        //.....................................................................................................
        h = new Hollerith(user_cfg);
        this.eq((Ωhllt_408 = function() {
          return h.cfg;
        }), cfg);
        this.eq((Ωhllt_409 = function() {
          return h.encode([0]);
        }), 'NNNNNNNNNNNNNNNNNNNNNNNNNNNNNN');
        return null;
      })();
      (() => {        //.......................................................................................................
        var cfg, h, user_cfg, Ωhllt_410, Ωhllt_411, Ωhllt_412, Ωhllt_413, Ωhllt_414;
        user_cfg = {
          uniliterals: 'EFGHIJKLM N OPQRSTUVW',
          digitset: '0123456789',
          magnifiers: '?@ABC XYZ^_',
          _max_integer: 999
        };
        ({cfg} = Hollerith.validate_and_compile_cfg(user_cfg));
        this.eq((Ωhllt_410 = function() {
          return cfg._min_integer;
        }), -99_999);
        this.eq((Ωhllt_411 = function() {
          return cfg._max_integer;
        }), +99_999);
        this.eq((Ωhllt_412 = function() {
          return cfg.digits_per_idx;
        }), 5);
        //.....................................................................................................
        h = new Hollerith(user_cfg);
        this.eq((Ωhllt_413 = function() {
          return h.cfg;
        }), cfg);
        this.eq((Ωhllt_414 = function() {
          return h.encode([0]);
        }), 'NNNNNNNNNNNNNNNNNNNNNNNNNNNNNN');
        return null;
      })();
      (() => {        //.......................................................................................................
        var cfg, h, user_cfg, Ωhllt_415, Ωhllt_416, Ωhllt_417, Ωhllt_418, Ωhllt_419;
        user_cfg = {
          uniliterals: 'EFGHIJKLM N OPQRSTUVW',
          digitset: '0123456789',
          magnifiers: '?@ABC XYZ^_',
          digits_per_idx: 3
        };
        ({cfg} = Hollerith.validate_and_compile_cfg(user_cfg));
        this.eq((Ωhllt_415 = function() {
          return cfg._min_integer;
        }), -999);
        this.eq((Ωhllt_416 = function() {
          return cfg._max_integer;
        }), +999);
        this.eq((Ωhllt_417 = function() {
          return cfg.digits_per_idx;
        }), 3);
        //.....................................................................................................
        h = new Hollerith(user_cfg);
        this.eq((Ωhllt_418 = function() {
          return h.cfg;
        }), cfg);
        this.eq((Ωhllt_419 = function() {
          return h.encode([0]);
        }), 'NNNNNNNNNNNNNNNNNNNN');
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    types: function() {
      var CFG, Hollerith_typespace, create_max_integer;
      ({Hollerith_typespace, create_max_integer, CFG} = require('../../../apps/hollerith/lib/types'));
      (() => {        //.......................................................................................................
        var T, Ωhllt_420, Ωhllt_421, Ωhllt_422, Ωhllt_423, Ωhllt_424, Ωhllt_425, Ωhllt_426, Ωhllt_427, Ωhllt_428, Ωhllt_429, Ωhllt_430, Ωhllt_431, Ωhllt_432;
        T = new Hollerith_typespace();
        this.eq((Ωhllt_420 = function() {
          return T._base.isa(-1);
        }), false);
        this.eq((Ωhllt_421 = function() {
          return T._base.isa(0);
        }), false);
        this.eq((Ωhllt_422 = function() {
          return T._base.isa(+1);
        }), false);
        this.eq((Ωhllt_423 = function() {
          return T._base.isa(+2);
        }), true);
        this.eq((Ωhllt_424 = function() {
          return T._max_integer.isa(null);
        }), false);
        this.eq((Ωhllt_425 = function() {
          return T._max_integer.isa(9, 10);
        }), true);
        this.eq((Ωhllt_426 = function() {
          return T._max_integer.isa(99, 10);
        }), true);
        this.eq((Ωhllt_427 = function() {
          return T._max_integer.isa(99999999, 10);
        }), true);
        this.eq((Ωhllt_428 = function() {
          return T._max_integer.isa(-10, 10);
        }), false);
        this.eq((Ωhllt_429 = function() {
          return /not a positive safe integer/.test(T._max_integer.data.message);
        }), true);
        this.eq((Ωhllt_430 = function() {
          return T._max_integer.isa(0xffff, 16);
        }), true);
        this.eq((Ωhllt_431 = function() {
          return T._max_integer.isa(0x7fffffff, 16);
        }), false);
        this.throws((Ωhllt_432 = function() {
          return T._max_integer.validate(5, 10);
        }), /\(_max_integer\) not a valid _max_integer: 5 – x not a positive all-niners/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var R, T, Ωhllt_433;
        T = new Hollerith_typespace();
        R = {
          _base: 16,
          digits_per_idx: 4
        };
        this.eq((Ωhllt_433 = function() {
          return T._max_integer.isa((R._base ** R.digits_per_idx) - 1, R._base);
        }), true);
        return null;
      })();
      (() => {        //.......................................................................................................
        var T, Ωhllt_434, Ωhllt_435, Ωhllt_436, Ωhllt_437, Ωhllt_438, Ωhllt_439, Ωhllt_440, Ωhllt_441, Ωhllt_442;
        T = new Hollerith_typespace();
        this.eq((Ωhllt_434 = function() {
          return T._max_integer.isa((128 ** 1) - 1, 128);
        }), true);
        this.eq((Ωhllt_435 = function() {
          return T._max_integer.isa((128 ** 2) - 1, 128);
        }), true);
        this.eq((Ωhllt_436 = function() {
          return T._max_integer.isa((128 ** 3) - 1, 128);
        }), true);
        this.eq((Ωhllt_437 = function() {
          return T._max_integer.isa((128 ** 4) - 1, 128);
        }), true);
        this.eq((Ωhllt_438 = function() {
          return T._max_integer.isa((128 ** 5) - 1, 128);
        }), true);
        this.eq((Ωhllt_439 = function() {
          return T._max_integer.isa((128 ** 6) - 1, 128);
        }), true);
        this.eq((Ωhllt_440 = function() {
          return T._max_integer.isa((128 ** 7) - 1, 128);
        }), true);
        this.eq((Ωhllt_441 = function() {
          return T._max_integer.isa((128 ** 8) - 1, 128);
        }), false);
        this.eq((Ωhllt_442 = function() {
          return T.create_max_integer({
            _base: 10,
            digits_per_idx: 2
          });
        }), 99);
        return null;
      })();
      //.......................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  demo_max_integer = function() {
    var base, get_max_integer, get_max_niner_digit_count, get_required_digits, log_to_base, max_digits_1base_28, max_digits_base_10, max_digits_base_16, max_digits_base_32, max_digits_base_36;
    log_to_base = function(n, base) {
      return (Math.log(n)) / (Math.log(base));
    };
    get_required_digits = function(n, base) {
      return Math.ceil(log_to_base(n, base));
    };
    get_max_niner_digit_count = function(n, base) {
      return (get_required_digits(n, base)) - 1;
    };
    get_max_integer = function(n, base) {
      return (base ** get_max_niner_digit_count(n, base)) - 1;
    };
    info('Ωhllt_443', Number.MAX_SAFE_INTEGER.toString(16));
    info('Ωhllt_444', Number.MAX_SAFE_INTEGER.toString(32));
    whisper('—————————————————————————————————');
    info('Ωhllt_445', (32 ** 4 - 1).toString(32));
    info('Ωhllt_446', (32 ** 4 - 1).toString(32));
    whisper('—————————————————————————————————');
    info('Ωhllt_447', get_required_digits(32, 32));
    info('Ωhllt_448', get_required_digits(32 ** 6, 32));
    info('Ωhllt_449', get_required_digits(1e6, 10));
    info('Ωhllt_450', get_required_digits(20, 10));
    whisper('—————————————————————————————————');
    info('Ωhllt_451', max_digits_base_10 = get_max_niner_digit_count(Number.MAX_SAFE_INTEGER, 10));
    info('Ωhllt_452', max_digits_base_16 = get_max_niner_digit_count(Number.MAX_SAFE_INTEGER, 16));
    info('Ωhllt_453', max_digits_base_32 = get_max_niner_digit_count(Number.MAX_SAFE_INTEGER, 32));
    info('Ωhllt_454', max_digits_base_36 = get_max_niner_digit_count(Number.MAX_SAFE_INTEGER, 36));
    info('Ωhllt_455', max_digits_1base_28 = get_max_niner_digit_count(Number.MAX_SAFE_INTEGER, 128));
    // for base in [ 2 .. 128 ]
    //   info 'Ωhllt_456', { base, }, ( Math.ceil log_to_base Number.MAX_SAFE_INTEGER, base ) - 1
    whisper('—————————————————————————————————');
    info('Ωhllt_457', '9'.repeat(max_digits_base_10));
    info('Ωhllt_458', 'f'.repeat(max_digits_base_16));
    info('Ωhllt_459', 'v'.repeat(max_digits_base_32));
    whisper('—————————————————————————————————');
    info('Ωhllt_460', ((base = 10) ** max_digits_base_10) - 1);
    info('Ωhllt_461', ((base = 16) ** max_digits_base_16) - 1);
    info('Ωhllt_462', ((base = 32) ** max_digits_base_32) - 1);
    info('Ωhllt_463', ((base = 36) ** max_digits_base_36) - 1);
    whisper('—————————————————————————————————');
    info('Ωhllt_464', get_max_integer(Number.MAX_SAFE_INTEGER, 10));
    info('Ωhllt_465', get_max_integer(Number.MAX_SAFE_INTEGER, 16));
    info('Ωhllt_466', get_max_integer(Number.MAX_SAFE_INTEGER, 32));
    info('Ωhllt_467', get_max_integer(Number.MAX_SAFE_INTEGER, 36));
    info('Ωhllt_468', get_max_integer(Number.MAX_SAFE_INTEGER, 128));
    whisper('—————————————————————————————————');
    info('Ωhllt_469', parseInt('9'.repeat(max_digits_base_10), 10));
    info('Ωhllt_470', parseInt('f'.repeat(max_digits_base_16), 16));
    info('Ωhllt_471', parseInt('v'.repeat(max_digits_base_32), 32));
    info('Ωhllt_472', parseInt('z'.repeat(max_digits_base_36), 36));
    info('Ωhllt_473', (parseInt('9'.repeat(max_digits_base_10), 10)) <= Number.MAX_SAFE_INTEGER);
    info('Ωhllt_474', (parseInt('f'.repeat(max_digits_base_16), 16)) <= Number.MAX_SAFE_INTEGER);
    info('Ωhllt_475', (parseInt('v'.repeat(max_digits_base_32), 32)) <= Number.MAX_SAFE_INTEGER);
    info('Ωhllt_476', (parseInt('z'.repeat(max_digits_base_36), 36)) <= Number.MAX_SAFE_INTEGER);
    whisper('—————————————————————————————————');
    info('Ωhllt_477', +999 + -999);
    info('Ωhllt_478', +999 + -1);
    info('Ωhllt_479', -(-999 - 1) + -999);
    info('Ωhllt_480', -(-999 - 1) + -998);
    info('Ωhllt_481', -(-999 - 1) + -997);
    info('Ωhllt_482', -(-999 - 1) + -3);
    info('Ωhllt_483', -(-999 - 1) + -2);
    info('Ωhllt_484', -(-999 - 1) + -1);
    info('Ωhllt_485', `${-(-999 - 1) + -3}`.replace(/^9*?(?=.$)/gv, ''));
    info('Ωhllt_486', `${-(-999 - 1) + -2}`.replace(/^9*?(?=.$)/gv, ''));
    info('Ωhllt_487', `${-(-999 - 1) + -1}`.replace(/^9*?(?=.$)/gv, ''));
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var guytest_cfg, show_requires;
      ({show_requires} = require('../../snippets/lib/demo-show-requires.js'));
      show_requires('../../../apps/hollerith');
      //---------------------------------------------------------------------------------------------------------
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
      (new Test(guytest_cfg)).test(this.hollerith);
      return (new Test(guytest_cfg)).test({
        validate_and_compile_cfg_10_cardinals: this.hollerith.validate_and_compile_cfg_10_cardinals
      });
    })();
  }

  // ( new Test guytest_cfg ).test { hollerith_10mvp2_big_shuffle: @hollerith.hollerith_10mvp2_big_shuffle, }
// ( new Test guytest_cfg ).test { hollerith_128_big_shuffle: @hollerith.hollerith_128_big_shuffle, }
// ( new Test guytest_cfg ).test { can_set_max_idx_digits: @hollerith.can_set_max_idx_digits, }

  // ( new Test guytest_cfg ).test { types: @hollerith.types, }
// ( new Test guytest_cfg ).test { h10mvp2_sorting_2: @hollerith.h10mvp2_sorting_2, }
// ( new Test guytest_cfg ).test { validate_and_compile_cfg_10: @hollerith.validate_and_compile_cfg_10, }
// ( new Test guytest_cfg ).test { h10mvp2_decode_units: @hollerith.h10mvp2_decode_units, }
// ( new Test guytest_cfg ).test { get_leading_novas_re: @hollerith.get_leading_novas_re, }
// ( new Test guytest_cfg ).test { validate_and_compile_cfg: @hollerith.validate_and_compile_cfg, }
// demo_max_integer()

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsZ0JBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUE7O0VBRUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixXQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLElBSkYsRUFLRSxHQUxGLEVBTUUsSUFORixFQU9FLE9BUEYsRUFRRSxHQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBUmhDLEVBWkE7OztFQXNCQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixJQUE1Qjs7RUFDQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1Qjs7RUFDQSxTQUFBLEdBQTRCLE9BQUEsQ0FBUSw2Q0FBUixFQXpCNUI7OztFQTZCQSxPQUFBLEdBR0UsQ0FBQTs7SUFBQSxRQUFBLEVBQVUsUUFBQSxDQUFFLElBQUYsQ0FBQTtBQUNaLFVBQUEsQ0FBQSxFQUFBLEtBQUEsRUFBQSxPQUFBLEVBQUEsUUFBQSxFQUFBO01BQUksQ0FBQSxDQUFFLElBQUYsRUFDRSxPQURGLEVBRUUsUUFGRixFQUdFLEtBSEYsQ0FBQSxHQUdnQixJQUhoQjtNQUlBLENBQUEsR0FBSyxDQUFBLENBQUEsQ0FBRyxJQUFILENBQUEsQ0FBQSxDQUFBLENBQVcsT0FBWCxDQUFBO01BQ0wsSUFBd0IsZ0JBQXhCO1FBQUEsQ0FBQSxJQUFLLENBQUEsQ0FBQSxDQUFBLENBQUksUUFBSixDQUFBLEVBQUw7O01BQ0EsSUFBd0IsYUFBeEI7UUFBQSxDQUFBLElBQUssQ0FBQSxDQUFBLENBQUEsQ0FBSSxLQUFKLENBQUEsQ0FBQSxFQUFMOztBQUNBLGFBQU87SUFSQyxDQUFWOztJQVdBLHVCQUFBLEVBQXlCLFFBQUEsQ0FBQyxDQUN4QixJQUFBLEdBQWMsSUFEVSxFQUV4QixVQUFBLEdBQWMsQ0FGVSxFQUd4QixVQUFBLEdBQWMsQ0FIVSxFQUl4QixPQUFBLEdBQWMsQ0FBQyxHQUpTLEVBS3hCLE9BQUEsR0FBYyxDQUFDLEdBTFMsSUFLRixDQUFBLENBTEMsQ0FBQTtBQU0zQixVQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsV0FBQSxFQUFBLGNBQUEsRUFBQSxXQUFBLEVBQUE7TUFBSSxDQUFBLENBQUUsVUFBRixFQUNFLFNBREYsQ0FBQSxHQUNrQixTQUFTLENBQUMsUUFBUSxDQUFDLGtCQUFuQixDQUFBLENBRGxCO01BRUEsVUFBQSxHQUFrQixJQUFJLFVBQUosQ0FBZTtRQUFFLElBQUEsRUFBTSxJQUFSO1FBQWMsUUFBQSxFQUFVO01BQXhCLENBQWY7TUFDbEIsY0FBQSxHQUFrQixVQUFVLENBQUMsZ0JBQVgsQ0FBNEI7UUFBRSxHQUFBLEVBQUssVUFBUDtRQUFtQixHQUFBLEVBQUs7TUFBeEIsQ0FBNUI7TUFDbEIsV0FBQSxHQUFrQixVQUFVLENBQUMsZ0JBQVgsQ0FBNEI7UUFBRSxHQUFBLEVBQUssT0FBUDtRQUFtQixHQUFBLEVBQUs7TUFBeEIsQ0FBNUI7QUFDbEIsYUFBTyxXQUFBLEdBQWMsUUFBQSxDQUFBLENBQUE7QUFBRSxZQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBO0FBQUc7UUFBQSxLQUF1Qiw2RkFBdkI7dUJBQUEsV0FBQSxDQUFBO1FBQUEsQ0FBQTs7TUFBTDtJQVhFO0VBWHpCLEVBaENGOzs7RUEwREEsSUFBQyxDQUFBLFNBQUQsR0FHRSxDQUFBOztJQUFBLFNBQUEsRUFBVyxRQUFBLENBQUEsQ0FBQTtBQUNiLFVBQUEsU0FBQSxFQUFBLE1BQUEsRUFBQSxZQUFBLEVBQUEsZUFBQSxFQUFBLGFBQUEsRUFBQSxTQUFBLEVBQUE7TUFBSSxDQUFBLENBQUUsU0FBRixFQUNFLFlBREYsRUFFRSxlQUZGLEVBR0UsYUFIRixFQUlFLFNBSkYsQ0FBQSxHQUk4QixPQUFBLENBQVEseUJBQVIsQ0FKOUI7TUFLQSxDQUFBLENBQUUsT0FBRixDQUFBLEdBQThCLFNBQVMsQ0FBQyxRQUFRLENBQUMsZUFBbkIsQ0FBQSxDQUE5QjtNQUNBLENBQUE7UUFBRSxpQkFBQSxFQUFtQjtNQUFyQixDQUFBLEdBQWlDLE9BQUEsQ0FBUSxXQUFSLENBQWpDO01BRUcsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQTtRQUFNLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsT0FBQSxDQUFRLGVBQWUsQ0FBQyxNQUF4QjtRQUFILENBQWYsQ0FBUixFQUF1RSxVQUF2RTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsT0FBQSxDQUFRLGVBQWUsQ0FBQyxjQUF4QjtRQUFILENBQWYsQ0FBUixFQUF1RSxXQUF2RTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsT0FBQSxDQUFRLGVBQWUsQ0FBQyxVQUF4QjtRQUFILENBQWYsQ0FBUixFQUF1RSxVQUF2RTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsT0FBQSxDQUFRLGVBQWUsQ0FBQyxVQUF4QjtRQUFILENBQWYsQ0FBUixFQUF1RSxVQUF2RTtBQUNBLGVBQU87TUFMTixDQUFBLElBUlA7O0FBZUksYUFBTztJQWhCRSxDQUFYOztJQW1CQSxPQUFBLEVBQVMsUUFBQSxDQUFBLENBQUE7QUFDWCxVQUFBLFNBQUEsRUFBQSxNQUFBLEVBQUEsWUFBQSxFQUFBLGVBQUEsRUFBQSxhQUFBLEVBQUE7TUFBSSxDQUFBLENBQUUsU0FBRixFQUNFLFlBREYsRUFFRSxlQUZGLEVBR0UsYUFIRixFQUlFLFNBSkYsQ0FBQSxHQUk4QixPQUFBLENBQVEseUJBQVIsQ0FKOUI7TUFNQSxDQUFBLENBQUE7O1FBQUUsaUJBQUEsRUFBbUI7TUFBckIsQ0FBQSxHQUFpQyxPQUFBLENBQVEsV0FBUixDQUFqQztNQUVHLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsVUFBQSxFQUFBO1FBQU0sSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxNQUFBLENBQVMsZUFBZSxDQUFDLE1BQWhCLENBQXVCLEdBQXZCLENBQVQsRUFBeUMsZUFBZSxDQUFDLFVBQWhCLENBQTJCLEdBQTNCLENBQXpDO1FBQUgsQ0FBZixDQUFSLEVBQTZHLElBQTdHO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxNQUFBLENBQVMsZUFBZSxDQUFDLE1BQWhCLENBQXVCLEdBQXZCLENBQVQsRUFBeUMsZUFBZSxDQUFDLFVBQWhCLENBQTJCLENBQUUsR0FBRixDQUEzQixDQUF6QztRQUFILENBQWYsQ0FBUixFQUE2RyxLQUE3RztBQUNBLGVBQU87TUFITixDQUFBLElBUlA7O0FBYUksYUFBTztJQWRBLENBbkJUOztJQW9DQSxvQkFBQSxFQUFzQixRQUFBLENBQUEsQ0FBQTtBQUN4QixVQUFBLG9CQUFBLEVBQUE7TUFBSSxDQUFBO1FBQUUsU0FBQSxFQUFXLENBQUUsS0FBRjtNQUFiLENBQUEsR0FBOEIsT0FBQSxDQUFRLHlCQUFSLENBQTlCO01BQ0EsQ0FBQSxDQUFFLG9CQUFGLENBQUEsR0FBOEIsS0FBSyxDQUFDLFNBQXBDO01BR0csQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBOztBQUNQLFlBQUEsVUFBQSxFQUFBO1FBQU0sSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxvQkFBQSxDQUFxQixHQUFyQjtRQUFILENBQWYsQ0FBUixFQUFzRCxrQkFBdEQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLG9CQUFBLENBQXFCLEdBQXJCO1FBQUgsQ0FBZixDQUFSLEVBQXNELG1CQUF0RDtBQUNBLGVBQU87TUFITixDQUFBO01BS0EsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxpQkFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUE7UUFBTSxpQkFBQSxHQUFvQixvQkFBQSxDQUFxQixHQUFyQjtRQUNwQixJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLE1BQU0sQ0FBQyxPQUFQLENBQWUsaUJBQWYsRUFBa0MsRUFBbEM7UUFBSCxDQUFmLENBQVIsRUFBa0UsR0FBbEU7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFJLEtBQUssQ0FBQyxPQUFOLENBQWMsaUJBQWQsRUFBaUMsRUFBakM7UUFBSixDQUFmLENBQVIsRUFBa0UsR0FBbEU7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFLLElBQUksQ0FBQyxPQUFMLENBQWEsaUJBQWIsRUFBZ0MsRUFBaEM7UUFBTCxDQUFmLENBQVIsRUFBa0UsR0FBbEU7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFNLEdBQUcsQ0FBQyxPQUFKLENBQVksaUJBQVosRUFBK0IsRUFBL0I7UUFBTixDQUFmLENBQVIsRUFBa0UsR0FBbEU7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLE1BQU0sQ0FBQyxPQUFQLENBQWUsaUJBQWYsRUFBa0MsRUFBbEM7UUFBSCxDQUFmLENBQVIsRUFBa0UsSUFBbEU7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFJLEtBQUssQ0FBQyxPQUFOLENBQWMsaUJBQWQsRUFBaUMsRUFBakM7UUFBSixDQUFmLENBQVIsRUFBa0UsSUFBbEU7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFLLElBQUksQ0FBQyxPQUFMLENBQWEsaUJBQWIsRUFBZ0MsRUFBaEM7UUFBTCxDQUFmLENBQVIsRUFBa0UsSUFBbEU7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLE1BQU0sQ0FBQyxPQUFQLENBQWUsaUJBQWYsRUFBa0MsRUFBbEM7UUFBSCxDQUFmLENBQVIsRUFBa0UsR0FBbEU7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFJLEtBQUssQ0FBQyxPQUFOLENBQWMsaUJBQWQsRUFBaUMsRUFBakM7UUFBSixDQUFmLENBQVIsRUFBa0UsR0FBbEU7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFLLElBQUksQ0FBQyxPQUFMLENBQWEsaUJBQWIsRUFBZ0MsRUFBaEM7UUFBTCxDQUFmLENBQVIsRUFBa0UsR0FBbEU7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFNLEdBQUcsQ0FBQyxPQUFKLENBQVksaUJBQVosRUFBK0IsRUFBL0I7UUFBTixDQUFmLENBQVIsRUFBa0UsR0FBbEU7ZUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFPLEVBQUUsQ0FBQyxPQUFILENBQVcsaUJBQVgsRUFBOEIsRUFBOUI7UUFBUCxDQUFmLENBQVIsRUFBa0UsRUFBbEU7TUFiQyxDQUFBLElBVFA7O0FBd0JJLGFBQU87SUF6QmEsQ0FwQ3RCOztJQWdFQSxRQUFBLEVBQVUsUUFBQSxDQUFBLENBQUE7QUFDWixVQUFBLFNBQUEsRUFBQSxNQUFBLEVBQUEsWUFBQSxFQUFBLGVBQUEsRUFBQSxhQUFBLEVBQUEsU0FBQSxFQUFBLE9BQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQTtNQUFJLENBQUEsQ0FBRSxTQUFGLEVBQ0UsWUFERixFQUVFLGVBRkYsRUFHRSxhQUhGLEVBSUUsU0FKRixDQUFBLEdBSThCLE9BQUEsQ0FBUSx5QkFBUixDQUo5QjtNQUtBLENBQUEsQ0FBRSxPQUFGLENBQUEsR0FBOEIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxlQUFuQixDQUFBLENBQTlCO01BQ0EsQ0FBQTtRQUFFLGlCQUFBLEVBQW1CO01BQXJCLENBQUEsR0FBaUMsT0FBQSxDQUFRLFdBQVIsQ0FBakMsRUFOSjs7TUFRSSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTJCLENBQUMsR0FBNUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsTUFBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTRCLENBQUMsRUFBN0I7TUFBSCxDQUFmLENBQVIsRUFBK0QsS0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTRCLENBQUMsRUFBN0I7TUFBSCxDQUFmLENBQVIsRUFBK0QsS0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTRCLENBQUMsRUFBN0I7TUFBSCxDQUFmLENBQVIsRUFBK0QsS0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTRCLENBQUMsRUFBN0I7TUFBSCxDQUFmLENBQVIsRUFBK0QsS0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsSUFBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsSUFBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsSUFBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsSUFBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsSUFBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsSUFBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsSUFBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsSUFBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsSUFBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcs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QSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTRCLENBQUMsRUFBN0I7TUFBSCxDQUFmLENBQVIsRUFBK0QsZUFBZSxDQUFDLE1BQWhCLENBQXdCLENBQUMsRUFBekIsQ0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTRCLENBQUMsRUFBN0I7TUFBSCxDQUFmLENBQVIsRUFBK0QsZUFBZSxDQUFDLE1BQWhCLENBQXdCLENBQUMsRUFBekIsQ0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTRCLENBQUMsRUFBN0I7TUFBSCxDQUFmLENBQVIsRUFBK0QsZUFBZSxDQUFDLE1BQWhCLENBQXdCLENBQUMsRUFBekIsQ0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FB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QUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEdBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsS0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEdBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsSUFBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEVBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsSUFBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEVBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsSUFBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEVBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsSUFBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEVBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsR0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLENBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsR0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLENBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsR0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLENBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsR0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEVBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsR0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEVBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsSUFBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEdBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsSUFBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEdBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsS0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEdBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsS0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEtBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsS0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEtBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsS0FBN0UsRUE5Rko7O01BZ0dJLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxLQUFLLENBQUMsTUFBTixDQUFhLEtBQWI7TUFBSCxDQUFkLENBQUosRUFBNkUsQ0FBRSxDQUFDLEtBQUgsQ0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxLQUFiO01BQUgsQ0FBZCxDQUFKLEVBQTZFLENBQUUsQ0FBQyxLQUFILENBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsS0FBYjtNQUFILENBQWQsQ0FBSixFQUE2RSxDQUFFLENBQUMsR0FBSCxDQUE3RTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxLQUFLLENBQUMsTUFBTixDQUFhLEtBQWI7TUFBSCxDQUFkLENBQUosRUFBNkUsQ0FBRSxDQUFDLEdBQUgsQ0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxJQUFiO01BQUgsQ0FBZCxDQUFKLEVBQTZFLENBQUUsQ0FBQyxHQUFILENBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsSUFBYjtNQUFILENBQWQsQ0FBSixFQUE2RSxDQUFFLENBQUMsRUFBSCxDQUE3RTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxLQUFLLENBQUMsTUFBTixDQUFhLEdBQWI7TUFBSCxDQUFkLENBQUosRUFBNkUsQ0FBRSxDQUFDLEVBQUgsQ0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxHQUFiO01BQUgsQ0FBZCxDQUFKLEVBQTZFLENBQUUsQ0FBQyxDQUFILENBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsR0FBYjtNQUFILENBQWQsQ0FBSixFQUE2RSxDQUFFLENBQUYsQ0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxHQUFiO01BQUgsQ0FBZCxDQUFKLEVBQTZFLENBQUUsQ0FBRixDQUE3RTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxLQUFLLENBQUMsTUFBTixDQUFhLEdBQWI7TUFBSCxDQUFkLENBQUosRUFBNkUsQ0FBRSxFQUFGLENBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsSUFBYjtNQUFILENBQWQsQ0FBSixFQUE2RSxDQUFFLEVBQUYsQ0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxJQUFiO01BQUgsQ0FBZCxDQUFKLEVBQTZFLENBQUUsR0FBRixDQUE3RTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxLQUFLLENBQUMsTUFBTixDQUFhLEtBQWI7TUFBSCxDQUFkLENBQUosRUFBNkUsQ0FBRSxHQUFGLENBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsS0FBYjtNQUFILENBQWQsQ0FBSixFQUE2RSxDQUFFLEdBQUYsQ0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxLQUFiO01BQUgsQ0FBZCxDQUFKLEVBQTZFLENBQUUsS0FBRixDQUE3RTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxLQUFLLENBQUMsTUFBTixDQUFhLEtBQWI7TUFBSCxDQUFkLENBQUosRUFBNkUsQ0FBRSxLQUFGLENBQTdFLEVBaEhKOztNQWtISSxLQUFTLDJCQUFUO1FBQ0UsY0FBQSxHQUFpQixPQUFBLENBQVEsY0FBUjtRQUNqQixjQUFjLENBQUMsSUFBZixDQUFBO1FBQ0EsWUFBQSxHQUFlO1FBQ2YsS0FBQSxrREFBQTtvQ0FBQTs7VUFFRSxZQUFZLENBQUMsSUFBYixDQUFrQixNQUFBLENBQU8sS0FBSyxDQUFDLE9BQU4sQ0FBYyxpQkFBZCxFQUFpQyxJQUFqQyxDQUFQLENBQWxCO1FBRkY7UUFHQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLE1BQUEsQ0FBTyxnQkFBUCxFQUF5QixZQUF6QjtRQUFILENBQWQsQ0FBSixFQUE4RCxJQUE5RDtNQVBGLENBbEhKOztNQTJISSxLQUFTLDJCQUFUO1FBQ0UsWUFBQSxHQUFlLE9BQUEsQ0FBUSxZQUFSO1FBQ2YsWUFBWSxDQUFDLElBQWIsQ0FBQTtRQUNBLFlBQUEsR0FBZTtRQUNmLEtBQUEsNERBQUE7b0NBQUE7O1VBRUUsWUFBWSxDQUFDLElBQWIsQ0FBa0IsTUFBQSxDQUFPLEtBQUssQ0FBQyxPQUFOLENBQWMsaUJBQWQsRUFBaUMsSUFBakMsQ0FBUCxDQUFsQjtRQUZGO1FBR0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxNQUFBLENBQU8sZ0JBQVAsRUFBeUIsWUFBekI7UUFBSCxDQUFkLENBQUosRUFBOEQsSUFBOUQ7TUFQRixDQTNISjs7QUFvSUksYUFBTztJQXJJYSxDQWphdEI7O0lBeWlCQSxXQUFBLEVBQWEsUUFBQSxDQUFBLENBQUE7QUFDZixVQUFBLFNBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLGFBQUEsRUFBQSxDQUFBLEVBQUEsYUFBQSxFQUFBLFlBQUEsRUFBQSxTQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsbUJBQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsWUFBQSxFQUFBLFdBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBO01BQUksQ0FBQSxDQUFFLFNBQUYsRUFDRSxhQURGLEVBRUUsU0FGRixDQUFBLEdBRThCLE9BQUEsQ0FBUSx5QkFBUixDQUY5QjtNQUdBLENBQUEsQ0FBRSxPQUFGLENBQUEsR0FBOEIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxlQUFuQixDQUFBLENBQTlCO01BQ0EsQ0FBQTtRQUFFLGlCQUFBLEVBQW1CO01BQXJCLENBQUEsR0FBaUMsT0FBQSxDQUFRLFdBQVIsQ0FBakMsRUFKSjs7O01BTUksbUJBQUEsR0FBc0IsQ0FFcEIsQ0FBRSwrQ0FBRixFQUFtRCxDQUFFLENBQUMsR0FBSCxDQUFuRCxFQUFzRSxpQ0FBdEUsQ0FGb0IsRUFHcEIsQ0FBRSwrQ0FBRixFQUFtRCxDQUFFLENBQUMsRUFBSCxDQUFuRCxFQUFzRSxnQ0FBdEUsQ0FIb0IsRUFJcEIsQ0FBRSwrQ0FBRixFQUFtRCxDQUFFLENBQUMsRUFBSCxDQUFuRCxFQUFzRSxnQ0FBdEUsQ0FKb0IsRUFLcEIsQ0FBRSwrQ0FBRixFQUFtRCxDQUFFLENBQUMsRUFBSCxDQUFuRCxFQUFzRSw4QkFBdEUsQ0FMb0IsRUFNcEIsQ0FBRSwrQ0FBRixFQUFtRCxDQUFFLENBQUMsRUFBSCxDQUFuRCxFQUFzRSw4QkFBdEUsQ0FOb0IsRUFPcEIsQ0FBRSwrQ0FBRixFQUFtRCxDQUFFLENBQUMsQ0FBSCxDQUFuRCxFQUFzRSw2QkFBdEUsQ0FQb0IsRUFRcEIsQ0FBRSwrQ0FBRixFQUFtRCxDQUFFLENBQUMsQ0FBSCxDQUFuRCxFQUFzRSw2QkFBdEUsQ0FSb0IsRUFTcEIsQ0FBRSwrQ0FBRixFQUFtRCxDQUFFLENBQUMsQ0FBSCxDQUFuRCxFQUFzRSw2QkFBdEUsQ0FUb0IsRUFVcEIsQ0FBRSwrQ0FBRixFQUFtRCxDQUFFLENBQUMsQ0FBSCxDQUFuRCxFQUFzRSw2QkFBdEUsQ0FWb0IsRUFXcEIsQ0FBRSwrQ0FBRixFQUFtRCxDQUFFLENBQUMsQ0FBSCxDQUFuRCxFQUFzRSw2QkFBdEUsQ0FYb0IsRUFZcEIsQ0FBRSwrQ0FBRixFQUFtRCxDQUFFLENBQUMsQ0FBSCxDQUFuRCxFQUFzRSw2QkFBdEUsQ0Fab0IsRUFhcEIsQ0FBRSwrQ0FBRixFQUFtRCxDQUFFLENBQUMsQ0FBSCxDQUFuRCxFQUFzRSw2QkFBdEUsQ0Fib0IsRUFjcEIsQ0FBRSwrQ0FBRixFQUFtRCxDQUFFLENBQUMsQ0FBSCxDQUFuRCxFQUFzRSw2QkFBdEUsQ0Fkb0IsRUFlcEIsQ0FBRSwrQ0FBRixFQUFtRCxDQUFFLENBQUMsQ0FBSCxDQUFuRCxFQUFzRSw2QkFBdEUsQ0Fmb0IsRUFnQnBCLENBQUUsK0NBQUYsRUFBbUQsQ0FBRSxDQUFGLEVBQUssQ0FBQyxFQUFOLENBQW5ELEVBQXNFLHVDQUF0RSxDQWhCb0IsRUFpQnBCLENBQUUsK0NBQUYsRUFBbUQsQ0FBRSxDQUFGLENBQW5ELEVBQXNFLHVCQUF0RSxDQWpCb0IsRUFrQnBCLENBQUUsK0NBQUYsRUFBbUQsQ0FBRSxDQUFGLEVBQUssRUFBTCxDQUFuRCxFQUFzRSxzQ0FBdEUsQ0FsQm9CLEVBbUJwQixDQUFFLCtDQUFGLEVBQW1ELENBQUUsQ0FBRixDQUFuRCxFQUFzRSw0QkFBdEUsQ0FuQm9CLEVBb0JwQixDQUFFLCtDQUFGLEVBQW1ELENBQUUsRUFBRixFQUFNLENBQUMsQ0FBUCxDQUFuRCxFQUFzRSxzQ0FBdEUsQ0FwQm9CLEVBcUJwQixDQUFFLCtDQUFGLEVBQW1ELENBQUUsRUFBRixFQUFNLENBQUMsQ0FBUCxDQUFuRCxFQUFzRSxzQ0FBdEUsQ0FyQm9CLEVBc0JwQixDQUFFLCtDQUFGLEVBQW1ELENBQUUsRUFBRixFQUFNLENBQUMsQ0FBUCxDQUFuRCxFQUFzRSxzQ0FBdEUsQ0F0Qm9CLEVBdUJwQixDQUFFLCtDQUFGLEVBQW1ELENBQUUsRUFBRixDQUFuRCxFQUFzRSw2QkFBdEUsQ0F2Qm9CLEVBd0JwQixDQUFFLCtDQUFGLEVBQW1ELENBQUUsRUFBRixFQUFNLENBQU4sQ0FBbkQsRUFBc0UscUNBQXRFLENBeEJvQixFQXlCcEIsQ0FBRSwrQ0FBRixFQUFtRCxDQUFFLEVBQUYsRUFBTSxFQUFOLEVBQVUsQ0FBQyxDQUFYLENBQW5ELEVBQXNFLCtDQUF0RSxDQXpCb0IsRUEwQnBCLENBQUUsK0NBQUYsRUFBbUQsQ0FBRSxFQUFGLEVBQU0sRUFBTixDQUFuRCxFQUFzRSxzQ0FBdEUsQ0ExQm9CLEVBMkJwQixDQUFFLCtDQUFGLEVBQW1ELENBQUUsRUFBRixFQUFNLEVBQU4sQ0FBbkQsRUFBc0Usc0NBQXRFLENBM0JvQixFQTRCcEIsQ0FBRSwrQ0FBRixFQUFtRCxDQUFFLEVBQUYsQ0FBbkQsRUFBc0UsNkJBQXRFLENBNUJvQixFQTZCcEIsQ0FBRSwrQ0FBRixFQUFtRCxDQUFFLEVBQUYsRUFBTSxFQUFOLENBQW5ELEVBQXNFLHNDQUF0RSxDQTdCb0IsRUE4QnBCLENBQUUsK0NBQUYsRUFBbUQsQ0FBRSxFQUFGLENBQW5ELEVBQXNFLCtCQUF0RSxDQTlCb0IsRUErQnBCLENBQUUsK0NBQUYsRUFBbUQsQ0FBRSxHQUFGLENBQW5ELEVBQXNFLGdDQUF0RSxDQS9Cb0IsRUFOMUI7O01Bd0NJLEtBQUEsR0FBUTtNQUNSLEtBQUEscURBQUE7UUFBSSxDQUFFLE9BQUYsRUFBVyxhQUFYLEVBQTBCLFlBQTFCO1FBQ0YsV0FBQSxHQUFrQjtRQUNsQixZQUFBLEdBQWtCO0FBQ2xCO1FBQUEsS0FBQSx1Q0FBQTs7VUFDRSxXQUFXLENBQUMsSUFBWixDQUFrQixPQUFPLENBQUMsUUFBUixDQUFpQixJQUFqQixDQUFsQjtVQUNBLElBQWdDLGtCQUFoQztZQUFBLFlBQVksQ0FBQyxJQUFiLENBQWtCLElBQUksQ0FBQyxLQUF2QixFQUFBOztRQUZGO1FBR0EsV0FBQSxHQUFnQixXQUFXLENBQUMsSUFBWixDQUFpQixHQUFqQixFQUx0Qjs7O1FBUU0sSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRztRQUFILENBQWQsQ0FBSixFQUF5RCxhQUF6RDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUc7UUFBSCxDQUFkLENBQUosRUFBZ0MsS0FBSyxDQUFDLE1BQU4sQ0FBYSxhQUFiLENBQWhDLEVBVE47O1FBV00sSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxLQUFLLENBQUMsTUFBTixDQUFhLE9BQWI7UUFBSCxDQUFkLENBQUosRUFBOEMsYUFBOUM7TUFaRixDQXpDSjs7Ozs7Ozs7Ozs7OztBQWtFSSxhQUFPO0lBbkVJLENBemlCYjs7SUErbUJBLG9CQUFBLEVBQXNCLFFBQUEsQ0FBQSxDQUFBLEVBQUE7O0FBQ3hCLFVBQUEsU0FBQSxFQUFBLEtBQUEsRUFBQSxnQkFBQSxFQUFBLENBQUEsRUFBQSxhQUFBLEVBQUEsWUFBQSxFQUFBLFNBQUEsRUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxtQkFBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsY0FBQSxFQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsWUFBQSxFQUFBLFdBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQTtNQUNJLENBQUEsQ0FBRSxPQUFGLENBQUEsR0FBOEIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxlQUFuQixDQUFBLENBQTlCLEVBREo7O01BR0ksQ0FBQSxDQUFFLFNBQUYsRUFDRSxnQkFERixFQUVFLFNBRkYsQ0FBQSxHQUU4QixPQUFBLENBQVEseUJBQVIsQ0FGOUIsRUFISjs7O01BUUksbUJBQUEsR0FBc0IsQ0FDcEIsQ0FBRSxjQUFGLEVBQWtCLENBQUUsQ0FBQyxHQUFILENBQWxCLEVBQW1DLG1DQUFuQyxDQURvQixFQUVwQixDQUFFLGNBQUYsRUFBa0IsQ0FBRSxDQUFDLEVBQUgsQ0FBbEIsRUFBbUMsa0NBQW5DLENBRm9CLEVBR3BCLENBQUUsY0FBRixFQUFrQixDQUFFLENBQUMsRUFBSCxDQUFsQixFQUFtQyxrQ0FBbkMsQ0FIb0IsRUFJcEIsQ0FBRSxjQUFGLEVBQWtCLENBQUUsQ0FBQyxFQUFILENBQWxCLEVBQW1DLGtDQUFuQyxDQUpvQixFQUtwQixDQUFFLGNBQUYsRUFBa0IsQ0FBRSxDQUFDLEVBQUgsQ0FBbEIsRUFBbUMsa0NBQW5DLENBTG9CLEVBTXBCLENBQUUsY0FBRixFQUFrQixDQUFFLENBQUMsQ0FBSCxDQUFsQixFQUFtQywrQkFBbkMsQ0FOb0IsRUFPcEIsQ0FBRSxjQUFGLEVBQWtCLENBQUUsQ0FBQyxDQUFILENBQWxCLEVBQW1DLCtCQUFuQyxDQVBvQixFQVFwQixDQUFFLGNBQUYsRUFBa0IsQ0FBRSxDQUFDLENBQUgsQ0FBbEIsRUFBbUMsK0JBQW5DLENBUm9CLEVBU3BCLENBQUUsY0FBRixFQUFrQixDQUFFLENBQUMsQ0FBSCxDQUFsQixFQUFtQywrQkFBbkMsQ0FUb0IsRUFVcEIsQ0FBRSxjQUFGLEVBQWtCLENBQUUsQ0FBQyxDQUFILENBQWxCLEVBQW1DLCtCQUFuQyxDQVZvQixFQVdwQixDQUFFLGNBQUYsRUFBa0IsQ0FBRSxDQUFDLENBQUgsQ0FBbEIsRUFBbUMsK0JBQW5DLENBWG9CLEVBWXBCLENBQUUsY0FBRixFQUFrQixDQUFFLENBQUMsQ0FBSCxDQUFsQixFQUFtQywrQkFBbkMsQ0Fab0IsRUFhcEIsQ0FBRSxjQUFGLEVBQWtCLENBQUUsQ0FBQyxDQUFILENBQWxCLEVBQW1DLCtCQUFuQyxDQWJvQixFQWNwQixDQUFFLGNBQUYsRUFBa0IsQ0FBRSxDQUFDLENBQUgsQ0FBbEIsRUFBbUMsK0JBQW5DLENBZG9CLEVBZXBCLENBQUUsY0FBRixFQUFrQixDQUFFLENBQUYsRUFBSyxDQUFDLEVBQU4sQ0FBbEIsRUFBbUMsMkNBQW5DLENBZm9CLEVBZ0JwQixDQUFFLGNBQUYsRUFBa0IsQ0FBRSxDQUFGLENBQWxCLEVBQW1DLHlCQUFuQyxDQWhCb0IsRUFpQnBCLENBQUUsY0FBRixFQUFrQixDQUFFLENBQUYsRUFBSyxFQUFMLENBQWxCLEVBQW1DLDBDQUFuQyxDQWpCb0IsRUFrQnBCLENBQUUsY0FBRixFQUFrQixDQUFFLENBQUYsQ0FBbEIsRUFBbUMsOEJBQW5DLENBbEJvQixFQW1CcEIsQ0FBRSxjQUFGLEVBQWtCLENBQUUsRUFBRixFQUFNLENBQUMsQ0FBUCxDQUFsQixFQUFtQywwQ0FBbkMsQ0FuQm9CLEVBb0JwQixDQUFFLGNBQUYsRUFBa0IsQ0FBRSxFQUFGLEVBQU0sQ0FBQyxDQUFQLENBQWxCLEVBQW1DLDBDQUFuQyxDQXBCb0IsRUFxQnBCLENBQUUsY0FBRixFQUFrQixDQUFFLEVBQUYsRUFBTSxDQUFDLENBQVAsQ0FBbEIsRUFBbUMsMENBQW5DLENBckJvQixFQXNCcEIsQ0FBRSxjQUFGLEVBQWtCLENBQUUsRUFBRixDQUFsQixFQUFtQyxpQ0FBbkMsQ0F0Qm9CLEVBdUJwQixDQUFFLGNBQUYsRUFBa0IsQ0FBRSxFQUFGLEVBQU0sQ0FBTixDQUFsQixFQUFtQyx5Q0FBbkMsQ0F2Qm9CLEVBd0JwQixDQUFFLGNBQUYsRUFBa0IsQ0FBRSxFQUFGLEVBQU0sRUFBTixFQUFVLENBQUMsQ0FBWCxDQUFsQixFQUFtQyxxREFBbkMsQ0F4Qm9CLEVBeUJwQixDQUFFLGNBQUYsRUFBa0IsQ0FBRSxFQUFGLEVBQU0sRUFBTixDQUFsQixFQUFtQyw0Q0FBbkMsQ0F6Qm9CLEVBMEJwQixDQUFFLGNBQUYsRUFBa0IsQ0FBRSxFQUFGLEVBQU0sRUFBTixDQUFsQixFQUFtQyw0Q0FBbkMsQ0ExQm9CLEVBMkJwQixDQUFFLGNBQUYsRUFBa0IsQ0FBRSxFQUFGLENBQWxCLEVBQW1DLGlDQUFuQyxDQTNCb0IsRUE0QnBCLENBQUUsY0FBRixFQUFrQixDQUFFLEVBQUYsRUFBTSxFQUFOLENBQWxCLEVBQW1DLDRDQUFuQyxDQTVCb0IsRUE2QnBCLENBQUUsY0FBRixFQUFrQixDQUFFLEVBQUYsQ0FBbEIsRUFBbUMsaUNBQW5DLENBN0JvQixFQThCcEIsQ0FBRSxjQUFGLEVBQWtCLENBQUUsR0FBRixDQUFsQixFQUFtQyxrQ0FBbkMsQ0E5Qm9CLEVBK0JwQixDQUFFLGNBQUYsRUFBa0IsQ0FBRSxDQUFGLENBQWxCLEVBQW1DLHlCQUFuQyxDQS9Cb0IsRUFnQ3BCLENBQUUsY0FBRixFQUFrQixDQUFFLENBQUYsQ0FBbEIsRUFBbUMseUJBQW5DLENBaENvQixFQWlDcEIsQ0FBRSxjQUFGLEVBQWtCLENBQUUsQ0FBRixDQUFsQixFQUFtQyx5QkFBbkMsQ0FqQ29CLEVBa0NwQixDQUFFLGNBQUYsRUFBa0IsQ0FBRSxFQUFGLENBQWxCLEVBQW1DLGlDQUFuQyxDQWxDb0IsRUFtQ3BCLENBQUUsY0FBRixFQUFrQixDQUFFLENBQUMsQ0FBSCxDQUFsQixFQUFtQywrQkFBbkMsQ0FuQ29CLEVBUjFCOzs7TUErQ0ksS0FBQSxHQUFrQjtNQUNsQixjQUFBLEdBQWtCLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFFLENBQUYsRUFoRDNDOztNQWtESSxLQUFBLHFEQUFBO1FBQUksQ0FBRSxPQUFGLEVBQVcsYUFBWCxFQUEwQixZQUExQjtRQUNGLFdBQUEsR0FBa0I7UUFDbEIsWUFBQSxHQUFrQjtBQUNsQjtRQUFBLEtBQUEsdUNBQUE7O1VBQ0UsV0FBVyxDQUFDLElBQVosQ0FBa0IsT0FBTyxDQUFDLFFBQVIsQ0FBaUIsSUFBakIsQ0FBbEI7VUFDQSxJQUFnQyxrQkFBaEM7WUFBQSxZQUFZLENBQUMsSUFBYixDQUFrQixJQUFJLENBQUMsS0FBdkIsRUFBQTs7UUFGRjtRQUdBLFdBQUEsR0FBZ0IsV0FBVyxDQUFDLElBQVosQ0FBaUIsR0FBakIsRUFMdEI7O1FBT00sSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRztRQUFILENBQWQsQ0FBSixFQUF5RCxZQUF6RDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUc7UUFBSCxDQUFkLENBQUosRUFBeUQsYUFBekQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsT0FBYjtRQUFILENBQWQsQ0FBSixFQUF5RCxhQUF6RDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUc7UUFBSCxDQUFkLENBQUosRUFBeUQsS0FBSyxDQUFDLE1BQU4sQ0FBYSxhQUFiLENBQXpEO01BWEYsQ0FsREo7OztNQWdFSSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLEtBQU4sQ0FBWSxHQUFaO01BQUgsQ0FBZCxDQUFSLEVBQW9EO1FBQUU7VUFBRSxJQUFBLEVBQU0sT0FBUjtVQUFpQixPQUFBLEVBQVMsR0FBMUI7VUFBK0IsUUFBQSxFQUFVLElBQXpDO1VBQStDLEtBQUEsRUFBTztRQUF0RCxDQUFGO09BQXBEO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxLQUFOLENBQVksS0FBWjtNQUFILENBQWQsQ0FBUixFQUFvRDtRQUFFO1VBQUUsSUFBQSxFQUFNLE9BQVI7VUFBaUIsT0FBQSxFQUFTLEtBQTFCO1VBQWlDLFFBQUEsRUFBVSxJQUEzQztVQUFpRCxLQUFBLEVBQU87UUFBeEQsQ0FBRjtPQUFwRDtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxLQUFLLENBQUMsS0FBTixDQUFZLFNBQVo7TUFBSCxDQUFkLENBQVIsRUFBb0Q7UUFBRTtVQUFFLElBQUEsRUFBTSxNQUFSO1VBQWdCLE9BQUEsRUFBUyxHQUF6QjtVQUE4QixRQUFBLEVBQVUsS0FBeEM7VUFBK0MsS0FBQSxFQUFPO1FBQXRELENBQUY7UUFBK0Q7VUFBRSxJQUFBLEVBQU0sT0FBUjtVQUFpQixPQUFBLEVBQVMsS0FBMUI7VUFBaUMsUUFBQSxFQUFVLElBQTNDO1VBQWlELEtBQUEsRUFBTztRQUF4RCxDQUEvRDtPQUFwRDtNQUNBLElBQUMsQ0FBQSxNQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxLQUFLLENBQUMsTUFBTixDQUFhLEdBQWI7TUFBSCxDQUFkLENBQVIsRUFBb0QsMENBQXBEO01BQ0EsSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsS0FBYjtNQUFILENBQWQsQ0FBUixFQUFvRCw0Q0FBcEQ7TUFDQSxJQUFDLENBQUEsTUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxTQUFiO01BQUgsQ0FBZCxDQUFSLEVBQW9ELHlEQUFwRCxFQXJFSjs7QUF1RUksYUFBTztJQXhFYSxDQS9tQnRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTh1QkEsS0FBQSxFQUFPLFFBQUEsQ0FBQSxDQUFBO0FBQ1QsVUFBQSxHQUFBLEVBQUEsbUJBQUEsRUFBQSxDQUFBLEVBQUEsTUFBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBO01BQUksQ0FBQSxDQUFFLFNBQUYsRUFDRSxtQkFERixFQUVFLEdBRkYsQ0FBQSxHQUVrQyxPQUFBLENBQVEsbUNBQVIsQ0FGbEM7TUFHQSxDQUFBLENBQUUsT0FBRixDQUFBLEdBQWtDLFNBQVMsQ0FBQyxRQUFRLENBQUMsZUFBbkIsQ0FBQSxDQUFsQztNQUNBLENBQUE7UUFBRSxpQkFBQSxFQUFtQjtNQUFyQixDQUFBLEdBQWtDLE9BQUEsQ0FBUSxXQUFSLENBQWxDO01BQ0EsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUFrQyxTQUFTLENBQUMsUUFBUSxDQUFDLFlBQW5CLENBQUEsQ0FBbEM7TUFFRyxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDUCxZQUFBLENBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUE7UUFBTSxDQUFBLEdBQUksSUFBSSxtQkFBSixDQUFBO1FBQ0osSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsR0FBRCxDQUFLLENBQUM7UUFBVixDQUFkLENBQUosRUFBeUUsTUFBekU7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxHQUFELENBQUssQ0FBQztRQUFWLENBQWQsQ0FBSixFQUF5RSxhQUF6RTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDLEdBQUQsQ0FBSyxDQUFDLGNBQWMsQ0FBQztRQUF6QixDQUFkLENBQUosRUFBeUUsSUFBekU7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxHQUFELENBQUssQ0FBQyxjQUFjLENBQUM7UUFBekIsQ0FBZCxDQUFKLEVBQXlFLElBQXpFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxZQUFZLENBQUMsT0FBYixDQUFxQixDQUFDLENBQUMsR0FBRCxDQUFLLENBQUMsY0FBNUIsRUFBNEMsR0FBNUM7UUFBSCxDQUFkLENBQUosRUFBeUUsUUFBekU7QUFDQSxlQUFPO01BUE4sQ0FBQTtNQVNBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsQ0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBO1FBQU0sQ0FBQSxHQUFJLElBQUksbUJBQUosQ0FBd0I7VUFBRSxLQUFBLEVBQU87UUFBVCxDQUF4QjtRQUNKLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDLEdBQUQsQ0FBSyxDQUFDO1FBQVYsQ0FBZCxDQUFKLEVBQXlFLEdBQXpFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsR0FBRCxDQUFLLENBQUM7UUFBVixDQUFkLENBQUosRUFBeUUsYUFBekU7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxHQUFELENBQUssQ0FBQyxjQUFjLENBQUM7UUFBekIsQ0FBZCxDQUFKLEVBQXlFLElBQXpFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsR0FBRCxDQUFLLENBQUMsY0FBYyxDQUFDO1FBQXpCLENBQWQsQ0FBSixFQUF5RSxJQUF6RTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsWUFBWSxDQUFDLE9BQWIsQ0FBcUIsQ0FBQyxDQUFDLEdBQUQsQ0FBSyxDQUFDLGNBQTVCLEVBQTRDLEdBQTVDO1FBQUgsQ0FBZCxDQUFKLEVBQXlFLFFBQXpFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQWIsQ0FBaUIsU0FBakI7UUFBSCxDQUFkLENBQUosRUFBeUUsS0FBekU7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBYixDQUFpQixTQUFqQjtRQUFILENBQWQsQ0FBSixFQUF5RSxJQUF6RTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFSLENBQVksR0FBWjtRQUFILENBQWQsQ0FBSixFQUF5RSxLQUF6RTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFSLENBQVksR0FBWjtRQUFILENBQWQsQ0FBSixFQUF5RSxJQUF6RTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFSLENBQVksQ0FBQyxDQUFDLEdBQUQsQ0FBSyxDQUFDLEtBQW5CO1FBQUgsQ0FBZCxDQUFKLEVBQXlFLElBQXpFO0FBQ0EsZUFBTztNQVpOLENBQUEsSUFoQlA7O01BOEJJLENBQUEsR0FBSSxJQUFJLG1CQUFKLENBQUE7TUFDSixJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFoQixDQUFvQixDQUFwQjtNQUFILENBQWQsQ0FBSixFQUF5RCxLQUF6RDtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUMsYUFBYSxDQUFDLEdBQWhCLENBQW9CLEtBQXBCO01BQUgsQ0FBZCxDQUFKLEVBQXlELEtBQXpEO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsR0FBaEIsQ0FBb0IsRUFBcEI7TUFBSCxDQUFkLENBQUosRUFBeUQsS0FBekQ7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFoQixDQUFvQixLQUFwQjtNQUFILENBQWQsQ0FBSixFQUF5RCxJQUF6RCxFQWxDSjs7TUFvQ0ksSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFuQixDQUF1QixLQUF2QjtNQUFILENBQWQsQ0FBSixFQUF5RCxLQUF6RDtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsR0FBbkIsQ0FBdUIsS0FBdkI7TUFBSCxDQUFkLENBQUosRUFBeUQsS0FBekQ7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO01BQXRCLENBQWQsQ0FBSixFQUF5RDtRQUFFLElBQUEsRUFBTSxDQUFFLEdBQUYsRUFBTyxHQUFQLEVBQVksR0FBWixDQUFSO1FBQTJCLElBQUEsRUFBTTtVQUFFLENBQUEsRUFBRyxLQUFMO1VBQVksR0FBQSxFQUFLLENBQWpCO1VBQW9CLE9BQUEsRUFBUyxHQUE3QjtVQUFrQyxHQUFBLEVBQUs7UUFBdkM7TUFBakMsQ0FBekQ7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEdBQW5CLENBQXVCLFNBQXZCO01BQUgsQ0FBZCxDQUFKLEVBQXlELElBQXpEO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFuQixDQUF1QixTQUF2QjtNQUFILENBQWQsQ0FBSixFQUF5RCxLQUF6RDtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7TUFBdEIsQ0FBZCxDQUFKLEVBQXlEO1FBQUUsSUFBQSxFQUFNLENBQUUsR0FBRixFQUFPLEdBQVAsRUFBWSxHQUFaLEVBQWlCLEdBQWpCLEVBQXNCLEdBQXRCLEVBQTJCLEdBQTNCLEVBQWdDLEdBQWhDO01BQVIsQ0FBekQ7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO01BQXRCLENBQWQsQ0FBSixFQUF5RDtRQUFFLElBQUEsRUFBTSxDQUFFLEdBQUYsRUFBTyxHQUFQLEVBQVksR0FBWixFQUFpQixHQUFqQixFQUFzQixHQUF0QixFQUEyQixHQUEzQixFQUFnQyxHQUFoQyxDQUFSO1FBQStDLElBQUEsRUFBTTtVQUFFLENBQUEsRUFBRyxTQUFMO1VBQWdCLEdBQUEsRUFBSyxDQUFyQjtVQUF3QixPQUFBLEVBQVMsR0FBakM7VUFBc0MsR0FBQSxFQUFLO1FBQTNDO01BQXJELENBQXpEO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFuQixDQUF1QixNQUF2QjtNQUFILENBQWQsQ0FBSixFQUF5RCxLQUF6RDtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7TUFBdEIsQ0FBZCxDQUFKLEVBQXlEO1FBQUUsSUFBQSxFQUFNLENBQUUsR0FBRixFQUFPLEdBQVAsRUFBWSxHQUFaLEVBQWlCLEdBQWpCLENBQVI7UUFBaUMsSUFBQSxFQUFNO1VBQUUsQ0FBQSxFQUFHLE1BQUw7VUFBYSxHQUFBLEVBQUssQ0FBbEI7VUFBcUIsT0FBQSxFQUFTLEdBQTlCO1VBQW1DLEdBQUEsRUFBSztRQUF4QztNQUF2QyxDQUF6RDtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsR0FBbkIsQ0FBdUIsS0FBdkI7TUFBSCxDQUFkLENBQUosRUFBeUQsSUFBekQ7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO01BQXRCLENBQWQsQ0FBSixFQUF5RDtRQUFFLElBQUEsRUFBTSxDQUFFLEdBQUYsRUFBTyxHQUFQLEVBQVksR0FBWjtNQUFSLENBQXpELEVBOUNKOztNQWdESSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFiLENBQWlCLEVBQWpCO01BQUgsQ0FBZCxDQUFKLEVBQTZFLEtBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7TUFBaEIsQ0FBZCxDQUFKLEVBQTZFO1FBQUUsT0FBQSxFQUFTO01BQVgsQ0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFiLENBQWlCLFNBQWpCO01BQUgsQ0FBZCxDQUFKLEVBQTZFLElBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLElBQUEsQ0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQWxCLEVBQ0YsQ0FBRSxvQkFBRixFQUF3QixZQUF4QixFQUFzQyxPQUF0QyxFQUErQyxPQUEvQyxDQURFO01BQUgsQ0FBZCxDQUFKLEVBQ2dGO1FBQUUsa0JBQUEsRUFBb0IsQ0FBRSxHQUFGLEVBQU8sR0FBUCxFQUFZLEdBQVosQ0FBdEI7UUFBeUMsVUFBQSxFQUFZLENBQUUsR0FBRixFQUFPLEdBQVAsRUFBWSxHQUFaLEVBQWlCLEdBQWpCLENBQXJEO1FBQTZFLEtBQUEsRUFBTyxNQUFwRjtRQUE0RixLQUFBLEVBQU87TUFBbkcsQ0FEaEY7TUFFQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsTUFBTSxDQUFDLFFBQVAsQ0FBZ0IsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsa0JBQWxDO01BQUgsQ0FBZCxDQUFKLEVBQTZFLElBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLE1BQU0sQ0FBQyxRQUFQLENBQWdCLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQWxDO01BQUgsQ0FBZCxDQUFKLEVBQThFLElBQTlFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBYixDQUFpQixVQUFqQjtNQUFILENBQWQsQ0FBSixFQUE2RSxLQUE3RTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQWIsQ0FBaUIsVUFBakI7TUFBSCxDQUFkLENBQUosRUFBNkUsS0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFiLENBQWlCLHFCQUFqQjtNQUFILENBQWQsQ0FBSixFQUE2RSxJQUE3RTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQWIsQ0FBaUIsV0FBakI7TUFBSCxDQUFkLENBQUosRUFBNkUsS0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFiLENBQWlCLFVBQWpCO01BQUgsQ0FBZCxDQUFKLEVBQTZFLEtBQTdFLEVBM0RKOztNQTZESSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFkLENBQWtCLElBQWxCO01BQUgsQ0FBZCxDQUFKLEVBQTZFLEtBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBZCxDQUFrQixFQUFsQjtNQUFILENBQWQsQ0FBSixFQUE2RSxLQUE3RTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQWQsQ0FBa0IsS0FBbEI7TUFBSCxDQUFkLENBQUosRUFBNkUsS0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFkLENBQWtCLHNCQUFsQjtNQUFILENBQWQsQ0FBSixFQUE2RSxLQUE3RTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQWQsQ0FBa0IsdUJBQWxCO01BQUgsQ0FBZCxDQUFKLEVBQTZFLElBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQyxXQUFXLENBQUM7TUFBakIsQ0FBZCxDQUFKLEVBQTZFO1FBQUUsS0FBQSxFQUFPLFdBQVQ7UUFBc0IsTUFBQSxFQUFRLFlBQTlCO1FBQTRDLFVBQUEsRUFBWSxDQUFFLEdBQUYsRUFBTyxHQUFQLEVBQVksR0FBWixFQUFpQixHQUFqQixFQUFzQixHQUF0QixFQUEyQixHQUEzQixFQUFnQyxHQUFoQyxFQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUF4RDtRQUF5RyxXQUFBLEVBQWEsQ0FBRSxHQUFGLEVBQU8sR0FBUCxFQUFZLEdBQVosRUFBaUIsR0FBakIsRUFBc0IsR0FBdEIsRUFBMkIsR0FBM0IsRUFBZ0MsR0FBaEMsRUFBcUMsR0FBckMsRUFBMEMsR0FBMUMsRUFBK0MsR0FBL0M7TUFBdEgsQ0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFkLENBQWtCLEdBQWxCO01BQUgsQ0FBZCxDQUFKLEVBQTZFLElBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQyxXQUFXLENBQUM7TUFBakIsQ0FBZCxDQUFKLEVBQTZFO1FBQUUsS0FBQSxFQUFPLEVBQVQ7UUFBYSxNQUFBLEVBQVEsR0FBckI7UUFBMEIsVUFBQSxFQUFZLEVBQXRDO1FBQTBDLFdBQUEsRUFBYSxDQUFFLEdBQUY7TUFBdkQsQ0FBN0UsRUFwRUo7O01Bc0VJLElBQUMsQ0FBQSxNQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVgsQ0FBb0IsSUFBcEI7TUFBSCxDQUFkLENBQVIsRUFBNkUsc0JBQTdFO01BQ0EsSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBWCxDQUFvQixFQUFwQjtNQUFILENBQWQsQ0FBUixFQUE2RSxzQkFBN0U7TUFDQSxJQUFDLENBQUEsTUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFYLENBQW9CLEdBQXBCO01BQUgsQ0FBZCxDQUFSLEVBQTZFLHNCQUE3RTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVgsQ0FBb0IsSUFBcEI7TUFBSCxDQUFkLENBQVIsRUFBNkUsSUFBN0UsRUF6RUo7O01BMkVJLElBQUMsQ0FBQSxNQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBSyxJQUFJLG1CQUFKLENBQXdCO1VBQUUsS0FBQSxFQUFPO1FBQVQsQ0FBeEI7TUFBTCxDQUFkLENBQVIsRUFBNkYsbUJBQTdGO01BQ0EsSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFLLElBQUksbUJBQUosQ0FBd0I7VUFBRSxLQUFBLEVBQU87UUFBVCxDQUF4QjtNQUFMLENBQWQsQ0FBUixFQUE2RixtQkFBN0Y7TUFDQSxJQUFDLENBQUEsTUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUssSUFBSSxtQkFBSixDQUF3QjtVQUFFLEtBQUEsRUFBTztRQUFULENBQXhCO01BQUwsQ0FBZCxDQUFSLEVBQTZGLG1CQUE3RjtNQUNBLElBQUMsQ0FBQSxNQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFFLElBQUksbUJBQUosQ0FBd0I7VUFBRSxLQUFBLEVBQU87UUFBVCxDQUF4QixDQUFGLENBQTJDLENBQUMsS0FBSyxDQUFDLFFBQWxELENBQTJELElBQTNEO01BQUgsQ0FBZCxDQUFSLEVBQTZGLG1CQUE3RjtNQUNBLElBQUMsQ0FBQSxNQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFFLElBQUksbUJBQUosQ0FBd0I7VUFBRSxLQUFBLEVBQU87UUFBVCxDQUF4QixDQUFGLENBQTJDLENBQUMsS0FBSyxDQUFDLFFBQWxELENBQTJELEVBQTNEO01BQUgsQ0FBZCxDQUFSLEVBQTZGLG1CQUE3RjtNQUNBLElBQUMsQ0FBQSxNQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFFLElBQUksbUJBQUosQ0FBd0I7VUFBRSxLQUFBLEVBQU87UUFBVCxDQUF4QixDQUFGLENBQTJDLENBQUMsS0FBSyxDQUFDLFFBQWxELENBQTJELElBQTNEO01BQUgsQ0FBZCxDQUFSLEVBQTZGLG1CQUE3RjtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFFLElBQUksbUJBQUosQ0FBd0I7VUFBRSxLQUFBLEVBQU87UUFBVCxDQUF4QixDQUFGLENBQTJDLENBQUMsS0FBSyxDQUFDLFFBQWxELENBQTJELEdBQTNEO01BQUgsQ0FBZCxDQUFSLEVBQTZGLEdBQTdGO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUUsSUFBSSxtQkFBSixDQUF3QjtVQUFFLEtBQUEsRUFBTztRQUFULENBQXhCLENBQUYsQ0FBMkMsQ0FBQyxLQUFLLENBQUMsUUFBbEQsQ0FBMkQsR0FBM0Q7TUFBSCxDQUFkLENBQVIsRUFBNkYsR0FBN0YsRUFsRko7O0FBb0ZJLGFBQU87SUFyRkYsQ0E5dUJQOztJQXMwQkEsZ0NBQUEsRUFBa0MsUUFBQSxDQUFBLENBQUE7QUFDcEMsVUFBQSxHQUFBLEVBQUEsU0FBQSxFQUFBLG1CQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQTtNQUFJLENBQUEsQ0FBRSxTQUFGLEVBQ0UsU0FERixDQUFBLEdBQ2tDLE9BQUEsQ0FBUSx5QkFBUixDQURsQztNQUVBLENBQUEsQ0FBRSxtQkFBRixFQUNFLEdBREYsQ0FBQSxHQUNrQyxPQUFBLENBQVEsbUNBQVIsQ0FEbEM7TUFJQSxDQUFBLENBQUE7OztRQUFFLFFBQUEsRUFBVTtNQUFaLENBQUEsR0FBa0MsTUFBbEMsRUFOSjs7O01BU0ksSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUUsTUFBTSxDQUFDLGdCQUFQLEdBQTBCLENBQTVCLENBQUEsS0FBbUMsQ0FBQyxDQUFFLE1BQU0sQ0FBQyxnQkFBUCxHQUEwQixDQUE1QjtNQUF2QyxDQUFkLENBQUosRUFBNEYsSUFBNUY7TUFFRyxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDUCxZQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQTs7UUFDTSxJQUFDLENBQUEsTUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFNBQVMsQ0FBQyx3QkFBVixDQUFtQyxDQUFBLENBQW5DO1FBQUgsQ0FBZCxDQUFSLEVBQW1GLHNCQUFuRjtRQUNBLElBQUMsQ0FBQSxNQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsU0FBUyxDQUFDLHdCQUFWLENBQW1DO1lBQUUsUUFBQSxFQUFVO1VBQVosQ0FBbkM7UUFBSCxDQUFkLENBQVIsRUFBbUYsc0JBQW5GO1FBQ0EsSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxTQUFTLENBQUMsd0JBQVYsQ0FBbUM7WUFBRSxRQUFBLEVBQVU7VUFBWixDQUFuQztRQUFILENBQWQsQ0FBUixFQUFtRixzQkFBbkY7QUFDQSxlQUFPO01BTE4sQ0FBQSxJQVhQOztBQWtCSSxhQUFPO0lBbkJ5QixDQXQwQmxDOztJQTQxQkEsMkJBQUEsRUFBNkIsUUFBQSxDQUFBLENBQUE7QUFDL0IsVUFBQSxHQUFBLEVBQUEsU0FBQSxFQUFBLG1CQUFBLEVBQUEsTUFBQSxFQUFBLFNBQUEsRUFBQTtNQUFJLENBQUEsQ0FBRSxTQUFGLEVBQ0UsU0FERixDQUFBLEdBQ2tDLE9BQUEsQ0FBUSx5QkFBUixDQURsQztNQUVBLENBQUEsQ0FBRSxtQkFBRixFQUNFLEdBREYsQ0FBQSxHQUNrQyxPQUFBLENBQVEsbUNBQVIsQ0FEbEM7TUFJQSxDQUFBLENBQUE7OztRQUFFLFFBQUEsRUFBVTtNQUFaLENBQUEsR0FBa0MsTUFBbEMsRUFOSjs7TUFRSSxNQUFBLEdBQ0U7UUFBQSxLQUFBLEVBQWMsR0FBZDtRQUNBLFFBQUEsRUFBYyxZQURkO1FBRUEsVUFBQSxFQUFjLFNBRmQ7UUFHQSxXQUFBLEVBQWMscUJBSGQ7UUFJQSxTQUFBLEVBQWMsQ0FKZDtNQUFBO01BTUMsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxHQUFBLEVBQUEsQ0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBO1FBQU0sQ0FBQSxDQUFFLEdBQUYsQ0FBQSxHQUFXLFNBQVMsQ0FBQyx3QkFBVixDQUFtQyxNQUFuQyxDQUFYO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBK0UsR0FBL0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUErRSxZQUEvRTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQStFLEtBQUssQ0FBQyxJQUFOLENBQVcsWUFBWCxDQUEvRTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQStFLENBQUUsS0FBSyxDQUFDLElBQU4sQ0FBVyxHQUFHLENBQUMsUUFBZixDQUFGLENBQTJCLENBQUMsRUFBNUIsQ0FBK0IsQ0FBQyxDQUFoQyxDQUEvRTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQStFLGtCQUEvRTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsU0FBQSxDQUFVLEdBQUcsQ0FBQyxZQUFkO1FBQUgsQ0FBZCxDQUFKLEVBQStFLElBQS9FO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBK0UsRUFBL0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUErRSxTQUEvRTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQWdGLE1BQWhGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBZ0YsTUFBaEY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUErRSxLQUFLLENBQUMsSUFBTixDQUFXLE1BQVgsQ0FBL0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUErRSxLQUFLLENBQUMsSUFBTixDQUFXLE1BQVgsQ0FBL0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUErRSxxQkFBL0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUErRSxVQUEvRTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQStFLFdBQS9FO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBZ0YsQ0FBaEY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUErRSxDQUFDLENBQWhGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBK0UsQ0FBRSxHQUFGLEVBQU8sR0FBUCxFQUFZLEdBQVosRUFBaUIsR0FBakIsRUFBc0IsR0FBdEIsRUFBMkIsR0FBM0IsRUFBZ0MsR0FBaEMsRUFBcUMsR0FBckMsQ0FBL0UsRUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUErRSxDQUFFLEdBQUYsRUFBTyxHQUFQLEVBQVksR0FBWixFQUFpQixHQUFqQixFQUFzQixHQUF0QixFQUEyQixHQUEzQixFQUFnQyxHQUFoQyxFQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUEvRSxDQURBO1FBRUEsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBK0UsQ0FBL0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBRSxDQUFFLEdBQUcsQ0FBQyxLQUFKLElBQWEsQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQWYsR0FBd0IsQ0FBMUIsQ0FBZixDQUFBLEdBQWtELENBQXBEO1FBQUosQ0FBZCxDQUFKLEVBQWlGLENBQUMsR0FBbEY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBRSxDQUFFLEdBQUcsQ0FBQyxLQUFKLElBQWEsQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQWYsR0FBd0IsQ0FBMUIsQ0FBZixDQUFBLEdBQWtELENBQXBEO1FBQUosQ0FBZCxDQUFKLEVBQWlGLENBQUMsR0FBbEY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUErRSxDQUFDLEdBQWhGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBK0UsQ0FBQyxHQUFoRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQW1GLENBQW5GO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBK0UsbUNBQS9FLEVBMUJOOztRQTRCTSxDQUFBLEdBQUksSUFBSSxTQUFKLENBQWMsTUFBZDtRQUNKLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDO1FBQUwsQ0FBZCxDQUFKLEVBQThCLEdBQTlCLEVBN0JOOztRQStCTSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxNQUFGLENBQVcsQ0FBQyxFQUFaO1FBQUgsQ0FBZCxDQUFKLEVBQXVDLEtBQXZDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsTUFBRixDQUFXLENBQUMsRUFBWjtRQUFILENBQWQsQ0FBSixFQUF1QyxLQUF2QztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDLE1BQUYsQ0FBVyxDQUFDLEVBQVo7UUFBSCxDQUFkLENBQUosRUFBdUMsS0FBdkM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxNQUFGLENBQVksQ0FBQyxDQUFiO1FBQUgsQ0FBZCxDQUFKLEVBQXVDLElBQXZDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsTUFBRixDQUFZLENBQUMsQ0FBYjtRQUFILENBQWQsQ0FBSixFQUF1QyxHQUF2QztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDLE1BQUYsQ0FBWSxDQUFDLENBQWI7UUFBSCxDQUFkLENBQUosRUFBdUMsR0FBdkM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxNQUFGLENBQVksQ0FBQyxDQUFiO1FBQUgsQ0FBZCxDQUFKLEVBQXVDLEdBQXZDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsTUFBRixDQUFhLENBQWI7UUFBSCxDQUFkLENBQUosRUFBdUMsR0FBdkM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxNQUFGLENBQVksQ0FBQyxDQUFiO1FBQUgsQ0FBZCxDQUFKLEVBQXVDLEdBQXZDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsTUFBRixDQUFZLENBQUMsQ0FBYjtRQUFILENBQWQsQ0FBSixFQUF1QyxHQUF2QztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDLE1BQUYsQ0FBWSxDQUFDLENBQWI7UUFBSCxDQUFkLENBQUosRUFBdUMsR0FBdkM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxNQUFGLENBQVksQ0FBQyxDQUFiO1FBQUgsQ0FBZCxDQUFKLEVBQXVDLElBQXZDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsTUFBRixDQUFXLENBQUMsRUFBWjtRQUFILENBQWQsQ0FBSixFQUF1QyxLQUF2QztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDLE1BQUYsQ0FBVyxDQUFDLEVBQVo7UUFBSCxDQUFkLENBQUosRUFBdUMsS0FBdkM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxNQUFGLENBQVcsQ0FBQyxFQUFaO1FBQUgsQ0FBZCxDQUFKLEVBQXVDLEtBQXZDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsTUFBRixDQUFVLENBQUMsR0FBWDtRQUFILENBQWQsQ0FBSixFQUF1QyxNQUF2QztBQUNBLGVBQU87TUFoRE4sQ0FBQSxJQWZQOztBQWlFSSxhQUFPO0lBbEVvQixDQTUxQjdCOztJQWk2QkEseUNBQUEsRUFBMkMsUUFBQSxDQUFBLENBQUE7QUFDN0MsVUFBQSxHQUFBLEVBQUEsU0FBQSxFQUFBLG1CQUFBLEVBQUEscUJBQUEsRUFBQSxTQUFBLEVBQUE7TUFBSSxDQUFBLENBQUUsU0FBRixFQUNFLFNBREYsQ0FBQSxHQUNrQyxPQUFBLENBQVEseUJBQVIsQ0FEbEM7TUFFQSxDQUFBLENBQUUsbUJBQUYsRUFDRSxHQURGLENBQUEsR0FDa0MsT0FBQSxDQUFRLG1DQUFSLENBRGxDO01BSUEsQ0FBQSxDQUFBOzs7UUFBRSxRQUFBLEVBQVU7TUFBWixDQUFBLEdBQWtDLE1BQWxDLEVBTko7O01BUUkscUJBQUEsR0FDRTtRQUFBLEtBQUEsRUFBYyxHQUFkO1FBQ0EsUUFBQSxFQUFjLFlBRGQ7UUFFQSxVQUFBLEVBQWMsU0FGZDtRQUdBLFdBQUEsRUFBYyxHQUhkO1FBSUEsU0FBQSxFQUFjLENBSmQ7TUFBQTtNQU1DLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsR0FBQSxFQUFBLENBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUE7UUFBTSxDQUFBLENBQUUsR0FBRixDQUFBLEdBQVcsU0FBUyxDQUFDLHdCQUFWLENBQW1DLHFCQUFuQyxDQUFYO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBbUYsR0FBbkY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUFtRixZQUFuRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQW1GLEtBQUssQ0FBQyxJQUFOLENBQVcsWUFBWCxDQUFuRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQW1GLENBQUUsS0FBSyxDQUFDLElBQU4sQ0FBVyxHQUFHLENBQUMsUUFBZixDQUFGLENBQTJCLENBQUMsRUFBNUIsQ0FBK0IsQ0FBQyxDQUFoQyxDQUFuRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQW1GLGtCQUFuRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsU0FBQSxDQUFVLEdBQUcsQ0FBQyxZQUFkO1FBQUgsQ0FBZCxDQUFKLEVBQW1GLElBQW5GO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBbUYsRUFBbkY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUFtRixTQUFuRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQW1GLE1BQW5GO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBbUYsTUFBbkY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUFtRixLQUFLLENBQUMsSUFBTixDQUFXLE1BQVgsQ0FBbkY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUFtRixLQUFLLENBQUMsSUFBTixDQUFXLE1BQVgsQ0FBbkY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUFtRixHQUFuRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQW1GLEVBQW5GO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBbUYsR0FBbkY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUFtRixFQUFuRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQW1GLENBQUUsR0FBRixDQUFuRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQW1GLENBQW5GO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUUsQ0FBRSxHQUFHLENBQUMsS0FBSixJQUFhLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFmLEdBQXdCLENBQTFCLENBQWYsQ0FBQSxHQUFrRCxDQUFwRDtRQUFKLENBQWQsQ0FBSixFQUFtRixDQUFDLEdBQXBGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUUsQ0FBRSxHQUFHLENBQUMsS0FBSixJQUFhLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFmLEdBQXdCLENBQTFCLENBQWYsQ0FBQSxHQUFrRCxDQUFwRDtRQUFKLENBQWQsQ0FBSixFQUFtRixDQUFDLEdBQXBGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBbUYsQ0FBQyxHQUFwRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQW1GLENBQUMsR0FBcEY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUFtRixDQUFuRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQW1GLG1CQUFuRixFQXhCTjs7UUEwQk0sQ0FBQSxHQUFJLElBQUksU0FBSixDQUFjLHFCQUFkO1FBQ0osSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUM7UUFBTCxDQUFkLENBQUosRUFBbUYsR0FBbkY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxNQUFGLENBQVMsQ0FBRSxDQUFGLENBQVQ7UUFBSCxDQUFkLENBQUosRUFBbUYsY0FBbkY7QUFDQSxlQUFPO01BOUJOLENBQUEsSUFmUDs7QUErQ0ksYUFBTztJQWhEa0MsQ0FqNkIzQzs7SUFvOUJBLDRCQUFBLEVBQThCLFFBQUEsQ0FBQSxDQUFBO0FBQ2hDLFVBQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSxtQkFBQSxFQUFBLE9BQUEsRUFBQSxTQUFBLEVBQUE7TUFBSSxDQUFBLENBQUUsU0FBRixFQUNFLFNBREYsQ0FBQSxHQUNrQyxPQUFBLENBQVEseUJBQVIsQ0FEbEM7TUFFQSxDQUFBLENBQUUsbUJBQUYsRUFDRSxHQURGLENBQUEsR0FDa0MsT0FBQSxDQUFRLG1DQUFSLENBRGxDO01BSUEsQ0FBQSxDQUFBOzs7UUFBRSxRQUFBLEVBQVU7TUFBWixDQUFBLEdBQWtDLE1BQWxDLEVBTko7O01BUUksT0FBQSxHQUdFLENBQUE7OztRQUFBLFFBQUEsRUFBYyxrQ0FBQSxHQUNBLGtDQURBLEdBRUEsa0NBRkEsR0FHQSxrQ0FIZDtRQUlBLFVBQUEsRUFBYyxtQkFKZDtRQUtBLFdBQUEsRUFBYyw2Q0FMZDtRQU1BLFNBQUEsRUFBYztNQU5kO01BUUMsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxHQUFBLEVBQUEsQ0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUE7UUFBTSxDQUFBLENBQUUsR0FBRixDQUFBLEdBQVcsU0FBUyxDQUFDLHdCQUFWLENBQW1DLE9BQW5DLENBQVg7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUErRSxHQUEvRTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQStFLGtDQUFBLEdBQ0Esa0NBREEsR0FFQSxrQ0FGQSxHQUdBLGtDQUgvRTtRQUlBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQStFLEtBQUssQ0FBQyxJQUFOLENBQVcsR0FBRyxDQUFDLFFBQWYsQ0FBL0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUErRSxDQUFFLEtBQUssQ0FBQyxJQUFOLENBQVcsR0FBRyxDQUFDLFFBQWYsQ0FBRixDQUEyQixDQUFDLEVBQTVCLENBQStCLENBQUMsQ0FBaEMsQ0FBL0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUErRSxrQkFBL0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUErRSxtQkFBL0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUFnRixXQUFoRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQWdGLFdBQWhGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBZ0YsS0FBSyxDQUFDLElBQU4sQ0FBVyxXQUFYLENBQWhGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBZ0YsS0FBSyxDQUFDLElBQU4sQ0FBVyxXQUFYLENBQWhGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBK0UsNkNBQS9FO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBZ0Ysc0JBQWhGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBZ0YsdUJBQWhGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBaUYsS0FBSyxDQUFDLElBQU4sQ0FBVyxzQkFBWCxDQUFqRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQWlGLEtBQUssQ0FBQyxJQUFOLENBQVcsdUJBQVgsQ0FBakY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUErRSxDQUFDLENBQUUsQ0FBRSxHQUFBLElBQU8sQ0FBVCxDQUFBLEdBQWUsQ0FBakIsQ0FBaEY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUErRSxDQUFDLENBQUUsQ0FBRSxHQUFBLElBQU8sQ0FBVCxDQUFBLEdBQWUsQ0FBakIsQ0FBaEYsRUFwQk47Ozs7UUF3Qk0sSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxTQUFBLENBQVUsR0FBRyxDQUFDLFlBQWQ7UUFBSCxDQUFkLENBQUosRUFBK0UsSUFBL0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUFnRixHQUFoRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQStFLENBQS9FLEVBMUJOOztRQTRCTSxDQUFBLEdBQUksSUFBSSxTQUFKLENBQWMsT0FBZDtRQUNKLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDO1FBQUwsQ0FBZCxDQUFKLEVBQThCLEdBQTlCLEVBN0JOOztBQStCTSxlQUFPO01BaENOLENBQUEsSUFuQlA7O0FBcURJLGFBQU87SUF0RHFCLENBcDlCOUI7O0lBNmdDQSxxQ0FBQSxFQUF1QyxRQUFBLENBQUEsQ0FBQTtBQUN6QyxVQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsbUJBQUEsRUFBQSxxQkFBQSxFQUFBLHFCQUFBLEVBQUEsU0FBQSxFQUFBO01BQUksQ0FBQSxDQUFFLFNBQUYsRUFDRSxxQkFERixFQUVFLFNBRkYsQ0FBQSxHQUVrQyxPQUFBLENBQVEseUJBQVIsQ0FGbEM7TUFHQSxDQUFBLENBQUUscUJBQUYsQ0FBQSxHQUFrQyxTQUFsQztNQUNBLENBQUEsQ0FBRSxtQkFBRixFQUNFLEdBREYsQ0FBQSxHQUNrQyxPQUFBLENBQVEsbUNBQVIsQ0FEbEM7TUFJQSxDQUFBLENBQUE7OztRQUFFLFFBQUEsRUFBVTtNQUFaLENBQUEsR0FBa0MsTUFBbEM7TUFFRyxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDUCxZQUFBLEdBQUEsRUFBQSxDQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUE7UUFBTSxDQUFBLENBQUUsR0FBRixDQUFBLEdBQVcsU0FBUyxDQUFDLHdCQUFWLENBQW1DLHFCQUFuQyxDQUFYO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQVIsRUFBK0UsR0FBL0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBUixFQUErRSxJQUEvRTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFSLEVBQStFLElBQS9FO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQVIsRUFBK0UsSUFBL0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBUixFQUErRSxDQUEvRTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFSLEVBQStFLENBQUMsR0FBaEY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBUixFQUErRSxDQUEvRSxFQVBOOztRQVNNLENBQUEsR0FBSSxJQUFJLFNBQUosQ0FBYyxxQkFBZDtRQUNKLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDO1FBQUwsQ0FBZCxDQUFSLEVBQStFLEdBQS9FO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsTUFBRixDQUFTLENBQUksQ0FBSixDQUFUO1FBQUgsQ0FBZCxDQUFSLEVBQStFLGNBQS9FO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsTUFBRixDQUFTLENBQUUsR0FBRixDQUFUO1FBQUgsQ0FBZCxDQUFSLEVBQStFLGNBQS9FO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsTUFBRixDQUFhLENBQWI7UUFBSCxDQUFkLENBQVIsRUFBK0UsR0FBL0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxNQUFGLENBQVcsR0FBWDtRQUFILENBQWQsQ0FBUixFQUErRSxNQUEvRTtRQUNBLElBQUMsQ0FBQSxNQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDLE1BQUYsQ0FBUyxDQUFHLENBQUMsQ0FBSixDQUFUO1FBQUgsQ0FBZCxDQUFSLEVBQStFLEtBQS9FO0FBQ0EsZUFBTztNQWpCTixDQUFBLElBVlA7O0FBNkJJLGFBQU87SUE5QjhCLENBN2dDdkM7O0lBOGlDQSxzQkFBQSxFQUF3QixRQUFBLENBQUEsQ0FBQTtBQUMxQixVQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsbUJBQUEsRUFBQSxTQUFBLEVBQUE7TUFBSSxDQUFBLENBQUUsU0FBRixFQUNFLFNBREYsQ0FBQSxHQUNrQyxPQUFBLENBQVEseUJBQVIsQ0FEbEM7TUFFQSxDQUFBLENBQUUsbUJBQUYsRUFDRSxHQURGLENBQUEsR0FDa0MsT0FBQSxDQUFRLG1DQUFSLENBRGxDO01BSUEsQ0FBQSxDQUFBOzs7UUFBRSxRQUFBLEVBQVU7TUFBWixDQUFBLEdBQWtDLE1BQWxDO01BRUcsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxHQUFBLEVBQUEsQ0FBQSxFQUFBLFFBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUE7UUFBTSxRQUFBLEdBQ0U7VUFBQSxXQUFBLEVBQW9CLHVCQUFwQjtVQUNBLFFBQUEsRUFBb0IsWUFEcEI7VUFFQSxVQUFBLEVBQW9CO1FBRnBCO1FBR0YsQ0FBQSxDQUFFLEdBQUYsQ0FBQSxHQUFXLFNBQVMsQ0FBQyx3QkFBVixDQUFtQyxRQUFuQyxDQUFYO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBdUQsQ0FBQyxHQUF4RDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQXVELENBQUMsR0FBeEQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUF1RCxDQUF2RCxFQVBOOztRQVNNLENBQUEsR0FBSSxJQUFJLFNBQUosQ0FBYyxRQUFkO1FBQ0osSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUM7UUFBTCxDQUFkLENBQUosRUFBdUQsR0FBdkQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxNQUFGLENBQVMsQ0FBRSxDQUFGLENBQVQ7UUFBSCxDQUFkLENBQUosRUFBdUQsc0JBQXZEO0FBQ0EsZUFBTztNQWJOLENBQUE7TUFlQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDUCxZQUFBLEdBQUEsRUFBQSxDQUFBLEVBQUEsUUFBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQTtRQUFNLFFBQUEsR0FDRTtVQUFBLFdBQUEsRUFBb0IsdUJBQXBCO1VBQ0EsUUFBQSxFQUFvQixZQURwQjtVQUVBLFVBQUEsRUFBb0IsU0FGcEI7VUFHQSxZQUFBLEVBQW9CO1FBSHBCO1FBSUYsQ0FBQSxDQUFFLEdBQUYsQ0FBQSxHQUFXLFNBQVMsQ0FBQyx3QkFBVixDQUFtQyxRQUFuQyxDQUFYO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBdUQsQ0FBQyxHQUF4RDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQXVELENBQUMsR0FBeEQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUF1RCxDQUF2RCxFQVJOOztRQVVNLENBQUEsR0FBSSxJQUFJLFNBQUosQ0FBYyxRQUFkO1FBQ0osSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUM7UUFBTCxDQUFkLENBQUosRUFBdUQsR0FBdkQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxNQUFGLENBQVMsQ0FBRSxDQUFGLENBQVQ7UUFBSCxDQUFkLENBQUosRUFBdUQsc0JBQXZEO0FBQ0EsZUFBTztNQWROLENBQUE7TUFnQkEsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxHQUFBLEVBQUEsQ0FBQSxFQUFBLFFBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUE7UUFBTSxRQUFBLEdBQ0U7VUFBQSxXQUFBLEVBQW9CLHVCQUFwQjtVQUNBLFFBQUEsRUFBb0IsWUFEcEI7VUFFQSxVQUFBLEVBQW9CLFNBRnBCO1VBR0EsY0FBQSxFQUFtQjtRQUhuQjtRQUlGLENBQUEsQ0FBRSxHQUFGLENBQUEsR0FBVyxTQUFTLENBQUMsd0JBQVYsQ0FBbUMsUUFBbkMsQ0FBWDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQXVELENBQUMsR0FBeEQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUF1RCxDQUFDLEdBQXhEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBdUQsQ0FBdkQsRUFSTjs7UUFVTSxDQUFBLEdBQUksSUFBSSxTQUFKLENBQWMsUUFBZDtRQUNKLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDO1FBQUwsQ0FBZCxDQUFKLEVBQXVELEdBQXZEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsTUFBRixDQUFTLENBQUUsQ0FBRixDQUFUO1FBQUgsQ0FBZCxDQUFKLEVBQXVELHNCQUF2RDtBQUNBLGVBQU87TUFkTixDQUFBO01BZ0JBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsR0FBQSxFQUFBLENBQUEsRUFBQSxRQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBO1FBQU0sUUFBQSxHQUNFO1VBQUEsV0FBQSxFQUFvQix1QkFBcEI7VUFDQSxRQUFBLEVBQW9CLFlBRHBCO1VBRUEsVUFBQSxFQUFvQjtRQUZwQjtRQUdGLENBQUEsQ0FBRSxHQUFGLENBQUEsR0FBVyxTQUFTLENBQUMsd0JBQVYsQ0FBbUMsUUFBbkMsQ0FBWDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQXVELENBQUMsTUFBeEQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUF1RCxDQUFDLE1BQXhEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBdUQsQ0FBdkQsRUFQTjs7UUFTTSxDQUFBLEdBQUksSUFBSSxTQUFKLENBQWMsUUFBZDtRQUNKLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDO1FBQUwsQ0FBZCxDQUFKLEVBQXVELEdBQXZEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsTUFBRixDQUFTLENBQUUsQ0FBRixDQUFUO1FBQUgsQ0FBZCxDQUFKLEVBQXVELGdDQUF2RDtBQUNBLGVBQU87TUFiTixDQUFBO01BZUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxHQUFBLEVBQUEsQ0FBQSxFQUFBLFFBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUE7UUFBTSxRQUFBLEdBQ0U7VUFBQSxXQUFBLEVBQW9CLHVCQUFwQjtVQUNBLFFBQUEsRUFBb0IsWUFEcEI7VUFFQSxVQUFBLEVBQW9CLGFBRnBCO1VBR0EsWUFBQSxFQUFvQjtRQUhwQjtRQUlGLENBQUEsQ0FBRSxHQUFGLENBQUEsR0FBVyxTQUFTLENBQUMsd0JBQVYsQ0FBbUMsUUFBbkMsQ0FBWDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQXVELENBQUMsTUFBeEQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUF1RCxDQUFDLE1BQXhEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBdUQsQ0FBdkQsRUFSTjs7UUFVTSxDQUFBLEdBQUksSUFBSSxTQUFKLENBQWMsUUFBZDtRQUNKLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDO1FBQUwsQ0FBZCxDQUFKLEVBQXVELEdBQXZEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsTUFBRixDQUFTLENBQUUsQ0FBRixDQUFUO1FBQUgsQ0FBZCxDQUFKLEVBQXVELGdDQUF2RDtBQUNBLGVBQU87TUFkTixDQUFBO01BZ0JBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsR0FBQSxFQUFBLENBQUEsRUFBQSxRQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBO1FBQU0sUUFBQSxHQUNFO1VBQUEsV0FBQSxFQUFvQix1QkFBcEI7VUFDQSxRQUFBLEVBQW9CLFlBRHBCO1VBRUEsVUFBQSxFQUFvQixhQUZwQjtVQUdBLGNBQUEsRUFBb0I7UUFIcEI7UUFJRixDQUFBLENBQUUsR0FBRixDQUFBLEdBQVcsU0FBUyxDQUFDLHdCQUFWLENBQW1DLFFBQW5DLENBQVg7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUF1RCxDQUFDLEdBQXhEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBdUQsQ0FBQyxHQUF4RDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQXVELENBQXZELEVBUk47O1FBVU0sQ0FBQSxHQUFJLElBQUksU0FBSixDQUFjLFFBQWQ7UUFDSixJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQztRQUFMLENBQWQsQ0FBSixFQUF1RCxHQUF2RDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDLE1BQUYsQ0FBUyxDQUFFLENBQUYsQ0FBVDtRQUFILENBQWQsQ0FBSixFQUF1RCxzQkFBdkQ7QUFDQSxlQUFPO01BZE4sQ0FBQSxJQXRGUDs7QUFzR0ksYUFBTztJQXZHZSxDQTlpQ3hCOztJQXdwQ0EsS0FBQSxFQUFPLFFBQUEsQ0FBQSxDQUFBO0FBQ1QsVUFBQSxHQUFBLEVBQUEsbUJBQUEsRUFBQTtNQUFJLENBQUEsQ0FBRSxtQkFBRixFQUNFLGtCQURGLEVBRUUsR0FGRixDQUFBLEdBRWtDLE9BQUEsQ0FBUSxtQ0FBUixDQUZsQztNQUlHLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsQ0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBO1FBQU0sQ0FBQSxHQUFJLElBQUksbUJBQUosQ0FBQTtRQUNKLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFSLENBQVksQ0FBQyxDQUFiO1FBQUgsQ0FBZCxDQUFSLEVBQWtHLEtBQWxHO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQVIsQ0FBYSxDQUFiO1FBQUgsQ0FBZCxDQUFSLEVBQWtHLEtBQWxHO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQVIsQ0FBWSxDQUFDLENBQWI7UUFBSCxDQUFkLENBQVIsRUFBa0csS0FBbEc7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBUixDQUFZLENBQUMsQ0FBYjtRQUFILENBQWQsQ0FBUixFQUFrRyxJQUFsRztRQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFmLENBQW1CLElBQW5CO1FBQUgsQ0FBZCxDQUFSLEVBQStGLEtBQS9GO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQWYsQ0FBbUIsQ0FBbkIsRUFBK0IsRUFBL0I7UUFBSCxDQUFkLENBQVIsRUFBK0YsSUFBL0Y7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBZixDQUFtQixFQUFuQixFQUErQixFQUEvQjtRQUFILENBQWQsQ0FBUixFQUErRixJQUEvRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFmLENBQW1CLFFBQW5CLEVBQStCLEVBQS9CO1FBQUgsQ0FBZCxDQUFSLEVBQStGLElBQS9GO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQWYsQ0FBbUIsQ0FBQyxFQUFwQixFQUErQixFQUEvQjtRQUFILENBQWQsQ0FBUixFQUErRixLQUEvRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsNkJBQTZCLENBQUMsSUFBOUIsQ0FBbUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBdkQ7UUFBSCxDQUFkLENBQVIsRUFBK0YsSUFBL0Y7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBZixDQUFtQixNQUFuQixFQUErQixFQUEvQjtRQUFILENBQWQsQ0FBUixFQUErRixJQUEvRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFmLENBQW1CLFVBQW5CLEVBQStCLEVBQS9CO1FBQUgsQ0FBZCxDQUFSLEVBQStGLEtBQS9GO1FBQ0EsSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsWUFBWSxDQUFDLFFBQWYsQ0FBd0IsQ0FBeEIsRUFBMkIsRUFBM0I7UUFBSCxDQUFkLENBQVIsRUFBK0YsNEVBQS9GO0FBQ0EsZUFBTztNQWZOLENBQUE7TUFpQkEsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBO1FBQU0sQ0FBQSxHQUFJLElBQUksbUJBQUosQ0FBQTtRQUNKLENBQUEsR0FBSTtVQUFFLEtBQUEsRUFBTyxFQUFUO1VBQWEsY0FBQSxFQUFnQjtRQUE3QjtRQUNKLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFmLENBQW1CLENBQUUsQ0FBQyxDQUFDLEtBQUYsSUFBVyxDQUFDLENBQUMsY0FBZixDQUFBLEdBQWtDLENBQXJELEVBQXdELENBQUMsQ0FBQyxLQUExRDtRQUFILENBQWQsQ0FBUixFQUE0RixJQUE1RjtBQUNBLGVBQU87TUFKTixDQUFBO01BTUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxDQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQTtRQUFNLENBQUEsR0FBSSxJQUFJLG1CQUFKLENBQUE7UUFDSixJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBZixDQUFtQixDQUFFLEdBQUEsSUFBTyxDQUFULENBQUEsR0FBZSxDQUFsQyxFQUFxQyxHQUFyQztRQUFILENBQWQsQ0FBUixFQUFpRixJQUFqRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFmLENBQW1CLENBQUUsR0FBQSxJQUFPLENBQVQsQ0FBQSxHQUFlLENBQWxDLEVBQXFDLEdBQXJDO1FBQUgsQ0FBZCxDQUFSLEVBQWlGLElBQWpGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQWYsQ0FBbUIsQ0FBRSxHQUFBLElBQU8sQ0FBVCxDQUFBLEdBQWUsQ0FBbEMsRUFBcUMsR0FBckM7UUFBSCxDQUFkLENBQVIsRUFBaUYsSUFBakY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBZixDQUFtQixDQUFFLEdBQUEsSUFBTyxDQUFULENBQUEsR0FBZSxDQUFsQyxFQUFxQyxHQUFyQztRQUFILENBQWQsQ0FBUixFQUFpRixJQUFqRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFmLENBQW1CLENBQUUsR0FBQSxJQUFPLENBQVQsQ0FBQSxHQUFlLENBQWxDLEVBQXFDLEdBQXJDO1FBQUgsQ0FBZCxDQUFSLEVBQWlGLElBQWpGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQWYsQ0FBbUIsQ0FBRSxHQUFBLElBQU8sQ0FBVCxDQUFBLEdBQWUsQ0FBbEMsRUFBcUMsR0FBckM7UUFBSCxDQUFkLENBQVIsRUFBaUYsSUFBakY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBZixDQUFtQixDQUFFLEdBQUEsSUFBTyxDQUFULENBQUEsR0FBZSxDQUFsQyxFQUFxQyxHQUFyQztRQUFILENBQWQsQ0FBUixFQUFpRixJQUFqRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFmLENBQW1CLENBQUUsR0FBQSxJQUFPLENBQVQsQ0FBQSxHQUFlLENBQWxDLEVBQXFDLEdBQXJDO1FBQUgsQ0FBZCxDQUFSLEVBQWlGLEtBQWpGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsa0JBQUYsQ0FBcUI7WUFBRSxLQUFBLEVBQU8sRUFBVDtZQUFhLGNBQUEsRUFBZ0I7VUFBN0IsQ0FBckI7UUFBSCxDQUFkLENBQVIsRUFBbUYsRUFBbkY7QUFDQSxlQUFPO01BWE4sQ0FBQSxJQTNCUDs7QUF3Q0ksYUFBTztJQXpDRjtFQXhwQ1AsRUE3REY7OztFQWl3Q0EsZ0JBQUEsR0FBbUIsUUFBQSxDQUFBLENBQUE7QUFDbkIsUUFBQSxJQUFBLEVBQUEsZUFBQSxFQUFBLHlCQUFBLEVBQUEsbUJBQUEsRUFBQSxXQUFBLEVBQUEsbUJBQUEsRUFBQSxrQkFBQSxFQUFBLGtCQUFBLEVBQUEsa0JBQUEsRUFBQTtJQUFFLFdBQUEsR0FBNEIsUUFBQSxDQUFFLENBQUYsRUFBSyxJQUFMLENBQUE7YUFBZSxDQUFFLElBQUksQ0FBQyxHQUFMLENBQVMsQ0FBVCxDQUFGLENBQUEsR0FBaUIsQ0FBRSxJQUFJLENBQUMsR0FBTCxDQUFTLElBQVQsQ0FBRjtJQUFoQztJQUM1QixtQkFBQSxHQUE0QixRQUFBLENBQUUsQ0FBRixFQUFLLElBQUwsQ0FBQTthQUFlLElBQUksQ0FBQyxJQUFMLENBQVUsV0FBQSxDQUFZLENBQVosRUFBZSxJQUFmLENBQVY7SUFBZjtJQUM1Qix5QkFBQSxHQUE0QixRQUFBLENBQUUsQ0FBRixFQUFLLElBQUwsQ0FBQTthQUFlLENBQUUsbUJBQUEsQ0FBb0IsQ0FBcEIsRUFBdUIsSUFBdkIsQ0FBRixDQUFBLEdBQWtDO0lBQWpEO0lBQzVCLGVBQUEsR0FBNEIsUUFBQSxDQUFFLENBQUYsRUFBSyxJQUFMLENBQUE7YUFBZSxDQUFFLElBQUEsSUFBUSx5QkFBQSxDQUEwQixDQUExQixFQUE2QixJQUE3QixDQUFWLENBQUEsR0FBZ0Q7SUFBL0Q7SUFDNUIsSUFBQSxDQUFLLFdBQUwsRUFBa0IsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQXhCLENBQWlDLEVBQWpDLENBQWxCO0lBQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0IsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQXhCLENBQWlDLEVBQWpDLENBQWxCO0lBQ0EsT0FBQSxDQUFRLG1DQUFSO0lBQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0IsQ0FBRSxFQUFBLElBQU0sQ0FBTixHQUFVLENBQVosQ0FBZSxDQUFDLFFBQWhCLENBQXlCLEVBQXpCLENBQWxCO0lBQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0IsQ0FBRSxFQUFBLElBQU0sQ0FBTixHQUFVLENBQVosQ0FBZSxDQUFDLFFBQWhCLENBQXlCLEVBQXpCLENBQWxCO0lBQ0EsT0FBQSxDQUFRLG1DQUFSO0lBQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0IsbUJBQUEsQ0FBb0IsRUFBcEIsRUFBOEIsRUFBOUIsQ0FBbEI7SUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixtQkFBQSxDQUFvQixFQUFBLElBQU0sQ0FBMUIsRUFBOEIsRUFBOUIsQ0FBbEI7SUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixtQkFBQSxDQUFvQixHQUFwQixFQUE4QixFQUE5QixDQUFsQjtJQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLG1CQUFBLENBQW9CLEVBQXBCLEVBQThCLEVBQTlCLENBQWxCO0lBQ0EsT0FBQSxDQUFRLG1DQUFSO0lBQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0Isa0JBQUEsR0FBd0IseUJBQUEsQ0FBMEIsTUFBTSxDQUFDLGdCQUFqQyxFQUFtRCxFQUFuRCxDQUExQztJQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLGtCQUFBLEdBQXdCLHlCQUFBLENBQTBCLE1BQU0sQ0FBQyxnQkFBakMsRUFBbUQsRUFBbkQsQ0FBMUM7SUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixrQkFBQSxHQUF3Qix5QkFBQSxDQUEwQixNQUFNLENBQUMsZ0JBQWpDLEVBQW1ELEVBQW5ELENBQTFDO0lBQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0Isa0JBQUEsR0FBd0IseUJBQUEsQ0FBMEIsTUFBTSxDQUFDLGdCQUFqQyxFQUFtRCxFQUFuRCxDQUExQztJQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLG1CQUFBLEdBQXdCLHlCQUFBLENBQTBCLE1BQU0sQ0FBQyxnQkFBakMsRUFBbUQsR0FBbkQsQ0FBMUMsRUFuQkY7OztJQXNCRSxPQUFBLENBQVEsbUNBQVI7SUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixHQUFHLENBQUMsTUFBSixDQUFXLGtCQUFYLENBQWxCO0lBQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0IsR0FBRyxDQUFDLE1BQUosQ0FBVyxrQkFBWCxDQUFsQjtJQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLEdBQUcsQ0FBQyxNQUFKLENBQVcsa0JBQVgsQ0FBbEI7SUFDQSxPQUFBLENBQVEsbUNBQVI7SUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFFLENBQUUsSUFBQSxHQUFPLEVBQVQsQ0FBQSxJQUFpQixrQkFBbkIsQ0FBQSxHQUEwQyxDQUE1RDtJQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQUUsQ0FBRSxJQUFBLEdBQU8sRUFBVCxDQUFBLElBQWlCLGtCQUFuQixDQUFBLEdBQTBDLENBQTVEO0lBQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0IsQ0FBRSxDQUFFLElBQUEsR0FBTyxFQUFULENBQUEsSUFBaUIsa0JBQW5CLENBQUEsR0FBMEMsQ0FBNUQ7SUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFFLENBQUUsSUFBQSxHQUFPLEVBQVQsQ0FBQSxJQUFpQixrQkFBbkIsQ0FBQSxHQUEwQyxDQUE1RDtJQUNBLE9BQUEsQ0FBUSxtQ0FBUjtJQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLGVBQUEsQ0FBZ0IsTUFBTSxDQUFDLGdCQUF2QixFQUF5QyxFQUF6QyxDQUFsQjtJQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLGVBQUEsQ0FBZ0IsTUFBTSxDQUFDLGdCQUF2QixFQUF5QyxFQUF6QyxDQUFsQjtJQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLGVBQUEsQ0FBZ0IsTUFBTSxDQUFDLGdCQUF2QixFQUF5QyxFQUF6QyxDQUFsQjtJQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLGVBQUEsQ0FBZ0IsTUFBTSxDQUFDLGdCQUF2QixFQUF5QyxFQUF6QyxDQUFsQjtJQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLGVBQUEsQ0FBZ0IsTUFBTSxDQUFDLGdCQUF2QixFQUF5QyxHQUF6QyxDQUFsQjtJQUNBLE9BQUEsQ0FBUSxtQ0FBUjtJQUNBLElBQUEsQ0FBSyxXQUFMLEVBQW9CLFFBQUEsQ0FBVyxHQUFHLENBQUMsTUFBSixDQUFXLGtCQUFYLENBQVgsRUFBNEMsRUFBNUMsQ0FBcEI7SUFDQSxJQUFBLENBQUssV0FBTCxFQUFvQixRQUFBLENBQVcsR0FBRyxDQUFDLE1BQUosQ0FBVyxrQkFBWCxDQUFYLEVBQTRDLEVBQTVDLENBQXBCO0lBQ0EsSUFBQSxDQUFLLFdBQUwsRUFBb0IsUUFBQSxDQUFXLEdBQUcsQ0FBQyxNQUFKLENBQVcsa0JBQVgsQ0FBWCxFQUE0QyxFQUE1QyxDQUFwQjtJQUNBLElBQUEsQ0FBSyxXQUFMLEVBQW9CLFFBQUEsQ0FBVyxHQUFHLENBQUMsTUFBSixDQUFXLGtCQUFYLENBQVgsRUFBNEMsRUFBNUMsQ0FBcEI7SUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFFLFFBQUEsQ0FBVyxHQUFHLENBQUMsTUFBSixDQUFXLGtCQUFYLENBQVgsRUFBNEMsRUFBNUMsQ0FBRixDQUFBLElBQXNELE1BQU0sQ0FBQyxnQkFBL0U7SUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFFLFFBQUEsQ0FBVyxHQUFHLENBQUMsTUFBSixDQUFXLGtCQUFYLENBQVgsRUFBNEMsRUFBNUMsQ0FBRixDQUFBLElBQXNELE1BQU0sQ0FBQyxnQkFBL0U7SUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFFLFFBQUEsQ0FBVyxHQUFHLENBQUMsTUFBSixDQUFXLGtCQUFYLENBQVgsRUFBNEMsRUFBNUMsQ0FBRixDQUFBLElBQXNELE1BQU0sQ0FBQyxnQkFBL0U7SUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFFLFFBQUEsQ0FBVyxHQUFHLENBQUMsTUFBSixDQUFXLGtCQUFYLENBQVgsRUFBNEMsRUFBNUMsQ0FBRixDQUFBLElBQXNELE1BQU0sQ0FBQyxnQkFBL0U7SUFDQSxPQUFBLENBQVEsbUNBQVI7SUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFDLEdBQUQsR0FBTyxDQUFDLEdBQTFCO0lBQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0IsQ0FBQyxHQUFELEdBQU8sQ0FBQyxDQUExQjtJQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQUMsQ0FBRSxDQUFDLEdBQUQsR0FBTyxDQUFULENBQUQsR0FBZ0IsQ0FBQyxHQUFuQztJQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQUMsQ0FBRSxDQUFDLEdBQUQsR0FBTyxDQUFULENBQUQsR0FBZ0IsQ0FBQyxHQUFuQztJQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQUMsQ0FBRSxDQUFDLEdBQUQsR0FBTyxDQUFULENBQUQsR0FBZ0IsQ0FBQyxHQUFuQztJQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQUMsQ0FBRSxDQUFDLEdBQUQsR0FBTyxDQUFULENBQUQsR0FBZ0IsQ0FBQyxDQUFuQztJQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQUMsQ0FBRSxDQUFDLEdBQUQsR0FBTyxDQUFULENBQUQsR0FBZ0IsQ0FBQyxDQUFuQztJQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQUMsQ0FBRSxDQUFDLEdBQUQsR0FBTyxDQUFULENBQUQsR0FBZ0IsQ0FBQyxDQUFuQztJQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQUEsQ0FBQSxDQUFJLENBQUMsQ0FBRSxDQUFDLEdBQUQsR0FBTyxDQUFULENBQUQsR0FBZ0IsQ0FBQyxDQUFyQixDQUFBLENBQXlCLENBQUMsT0FBMUIsQ0FBa0MsY0FBbEMsRUFBNkQsRUFBN0QsQ0FBbEI7SUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFBLENBQUEsQ0FBSSxDQUFDLENBQUUsQ0FBQyxHQUFELEdBQU8sQ0FBVCxDQUFELEdBQWdCLENBQUMsQ0FBckIsQ0FBQSxDQUF5QixDQUFDLE9BQTFCLENBQWtDLGNBQWxDLEVBQTZELEVBQTdELENBQWxCO0lBQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0IsQ0FBQSxDQUFBLENBQUksQ0FBQyxDQUFFLENBQUMsR0FBRCxHQUFPLENBQVQsQ0FBRCxHQUFnQixDQUFDLENBQXJCLENBQUEsQ0FBeUIsQ0FBQyxPQUExQixDQUFrQyxjQUFsQyxFQUE2RCxFQUE3RCxDQUFsQjtBQUNBLFdBQU87RUEzRFUsRUFqd0NuQjs7O0VBZzBDQSxJQUFHLE1BQUEsS0FBVSxPQUFPLENBQUMsSUFBckI7SUFBK0IsTUFBUyxDQUFBLENBQUEsQ0FBQSxHQUFBO0FBQ3hDLFVBQUEsV0FBQSxFQUFBO01BQUUsQ0FBQSxDQUFFLGFBQUYsQ0FBQSxHQUFxQixPQUFBLENBQVEsMENBQVIsQ0FBckI7TUFDQSxhQUFBLENBQWMseUJBQWQsRUFERjs7TUFHRSxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLEtBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLElBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxDQUFFLElBQUksSUFBSixDQUFTLFdBQVQsQ0FBRixDQUF3QixDQUFDLElBQXpCLENBQThCLElBQUMsQ0FBQSxTQUEvQjthQUNBLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEI7UUFBRSxxQ0FBQSxFQUF1QyxJQUFDLENBQUEsU0FBUyxDQUFDO01BQXBELENBQTlCO0lBUHNDLENBQUEsSUFBeEM7OztFQWgwQ0E7Ozs7Ozs7Ozs7O0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc3RyaWN0J1xuXG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2hvbGxlcml0aCdcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICBsaW1lXG4gIGdvbGRcbiAgcmVkXG4gIGJsdWVcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbiMgV0dVWSAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvd2ViZ3V5J1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNpbmdsZS1maWxlLW1vZHVsZXMnXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5oZWxwZXJzID1cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJwcl91bml0OiAoIHVuaXQgKSAtPlxuICAgIHsgbmFtZSxcbiAgICAgIGxldHRlcnMsXG4gICAgICBtYW50aXNzYSxcbiAgICAgIGluZGV4LCAgICB9ID0gdW5pdFxuICAgIFIgID0gXCIje25hbWV9OiN7bGV0dGVyc31cIlxuICAgIFIgKz0gXCIsI3ttYW50aXNzYX1cIiAgaWYgbWFudGlzc2E/XG4gICAgUiArPSBcIlsje2luZGV4fV1cIiAgICBpZiBpbmRleD9cbiAgICByZXR1cm4gUlxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0X3JhbmRvbV92ZHhfcHJvZHVjZXI6ICh7XG4gICAgc2VlZCAgICAgICAgPSBudWxsLFxuICAgIG1pbl9sZW5ndGggID0gMSxcbiAgICBtYXhfbGVuZ3RoICA9IDUsXG4gICAgbWluX2lkeCAgICAgPSAtOTk5LFxuICAgIG1heF9pZHggICAgID0gKzk5OSwgfT17fSkgLT5cbiAgICB7IEdldF9yYW5kb20sXG4gICAgICBpbnRlcm5hbHMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X3JhbmRvbSgpXG4gICAgZ2V0X3JhbmRvbSAgICAgID0gbmV3IEdldF9yYW5kb20geyBzZWVkOiBudWxsLCBvbl9zdGF0czogbnVsbCwgfVxuICAgIGdldF9ybmRfbGVuZ3RoICA9IGdldF9yYW5kb20uaW50ZWdlcl9wcm9kdWNlciB7IG1pbjogbWluX2xlbmd0aCwgbWF4OiBtYXhfbGVuZ3RoLCB9XG4gICAgZ2V0X3JuZF9pZHggICAgID0gZ2V0X3JhbmRvbS5pbnRlZ2VyX3Byb2R1Y2VyIHsgbWluOiBtaW5faWR4LCAgICBtYXg6IG1heF9pZHgsICAgIH1cbiAgICByZXR1cm4gZ2V0X3JuZF92ZHggPSAtPiAoIGdldF9ybmRfaWR4KCkgZm9yIF8gaW4gWyAxIC4uIGdldF9ybmRfbGVuZ3RoKCkgXSApXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AaG9sbGVyaXRoID1cblxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGludGVyZmFjZTogLT5cbiAgICB7IEhvbGxlcml0aCxcbiAgICAgIGhvbGxlcml0aF8xMCxcbiAgICAgIGhvbGxlcml0aF8xMG12cCxcbiAgICAgIGhvbGxlcml0aF8xMjgsXG4gICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X19fMSA9IC0+IHR5cGVfb2YgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgICAgICAgICAgICksICdmdW5jdGlvbidcbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X19fMiA9IC0+IHR5cGVfb2YgaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgICksICd1bmRlZmluZWQnXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fXzMgPSAtPiB0eXBlX29mIGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAgICAgICApLCAnZnVuY3Rpb24nXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fXzQgPSAtPiB0eXBlX29mIGhvbGxlcml0aF8xMG12cC5lbmNvZGVfdmR4ICAgICAgICApLCAnZnVuY3Rpb24nXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHBhZGRpbmc6IC0+XG4gICAgeyBIb2xsZXJpdGgsXG4gICAgICBob2xsZXJpdGhfMTAsXG4gICAgICBob2xsZXJpdGhfMTBtdnAsXG4gICAgICBob2xsZXJpdGhfMTI4LFxuICAgICAgaW50ZXJuYWxzICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgICMgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X19fNSA9IC0+IGVxdWFscyAoIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgMTIzICksICggaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggMTIzICAgICAgICkgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6pYW55YnRfX182ID0gLT4gZXF1YWxzICggaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAxMjMgKSwgKCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX3ZkeCBbIDEyMywgXSAgKSApLCBmYWxzZVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRfbGVhZGluZ19ub3Zhc19yZTogLT5cbiAgICB7IGludGVybmFsczogeyB0eXBlcywgfSAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IGdldF9sZWFkaW5nX25vdmFzX3JlLCAgIH0gPSB0eXBlcy5pbnRlcm5hbHNcbiAgICAjIGRlYnVnICfOqWhsbHRfX183JywgJzk4NycucmVwbGFjZSAvLy8gXiAoPzogOSApKj8gKD89IC4gJCApIC8vL2d2LCAnJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X19fOCA9IC0+IGdldF9sZWFkaW5nX25vdmFzX3JlICc5JyApLCAvLy8gXiAoPzogOSAgKSogKD89IC4rICQgKSAvLy9ndlxuICAgICAgQGVxICAgICAoIM6pYW55YnRfX185ID0gLT4gZ2V0X2xlYWRpbmdfbm92YXNfcmUgJyonICksIC8vLyBeICg/OiBcXCogKSogKD89IC4rICQgKSAvLy9ndlxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBfbGVhZGluZ19ub3Zhc19yZSA9IGdldF9sZWFkaW5nX25vdmFzX3JlICc5J1xuICAgICAgQGVxICAgICAoIM6pYW55YnRfXzEwID0gLT4gJzk5OTknLnJlcGxhY2UgX2xlYWRpbmdfbm92YXNfcmUsICcnICksICc5J1xuICAgICAgQGVxICAgICAoIM6pYW55YnRfXzExID0gLT4gICc5OTknLnJlcGxhY2UgX2xlYWRpbmdfbm92YXNfcmUsICcnICksICc5J1xuICAgICAgQGVxICAgICAoIM6pYW55YnRfXzEyID0gLT4gICAnOTknLnJlcGxhY2UgX2xlYWRpbmdfbm92YXNfcmUsICcnICksICc5J1xuICAgICAgQGVxICAgICAoIM6pYW55YnRfXzEzID0gLT4gICAgJzknLnJlcGxhY2UgX2xlYWRpbmdfbm92YXNfcmUsICcnICksICc5J1xuICAgICAgQGVxICAgICAoIM6pYW55YnRfXzE0ID0gLT4gJzk5ODknLnJlcGxhY2UgX2xlYWRpbmdfbm92YXNfcmUsICcnICksICc4OSdcbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X18xNSA9IC0+ICAnOTg5Jy5yZXBsYWNlIF9sZWFkaW5nX25vdmFzX3JlLCAnJyApLCAnODknXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fMTYgPSAtPiAgICc4OScucmVwbGFjZSBfbGVhZGluZ19ub3Zhc19yZSwgJycgKSwgJzg5J1xuICAgICAgQGVxICAgICAoIM6pYW55YnRfXzE3ID0gLT4gJzk5OTInLnJlcGxhY2UgX2xlYWRpbmdfbm92YXNfcmUsICcnICksICcyJ1xuICAgICAgQGVxICAgICAoIM6pYW55YnRfXzE4ID0gLT4gICc5OTInLnJlcGxhY2UgX2xlYWRpbmdfbm92YXNfcmUsICcnICksICcyJ1xuICAgICAgQGVxICAgICAoIM6pYW55YnRfXzE5ID0gLT4gICAnOTInLnJlcGxhY2UgX2xlYWRpbmdfbm92YXNfcmUsICcnICksICcyJ1xuICAgICAgQGVxICAgICAoIM6pYW55YnRfXzIwID0gLT4gICAgJzcnLnJlcGxhY2UgX2xlYWRpbmdfbm92YXNfcmUsICcnICksICc3J1xuICAgICAgQGVxICAgICAoIM6pYW55YnRfXzIxID0gLT4gICAgICcnLnJlcGxhY2UgX2xlYWRpbmdfbm92YXNfcmUsICcnICksICcnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaDEwbXZwXzE6IC0+XG4gICAgeyBIb2xsZXJpdGgsXG4gICAgICBob2xsZXJpdGhfMTAsXG4gICAgICBob2xsZXJpdGhfMTBtdnAsXG4gICAgICBob2xsZXJpdGhfMTI4LFxuICAgICAgaW50ZXJuYWxzICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAgICAgKCDOqWFueWJ0X18yMiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4IC05OTkgICApLCAnSzAwMCdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMjMgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgLTk5ICAgKSwgJ0wwMCdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMjQgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgLTkwICAgKSwgJ0wwOSdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMjUgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgLTExICAgKSwgJ0w4OCdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMjYgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgLTEwICAgKSwgJ0w4OSdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMjcgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgIC05ICAgKSwgJ00wJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18yOCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAgLTggICApLCAnTTEnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzI5ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICAtNyAgICksICdNMidcbiAgICBAZXEgICAgICggzqlhbnlidF9fMzAgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgIC02ICAgKSwgJ00zJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18zMSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAgLTUgICApLCAnTTQnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzMyID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICAtNCAgICksICdNNSdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMzMgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgIC0zICAgKSwgJ002J1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18zNCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAgLTIgICApLCAnTTcnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzM1ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICAtMSAgICksICdNOCdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMzYgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgICAwICAgKSwgJ04nXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzM3ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICAgMSAgICksICdPMSdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMzggPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgICs5ICAgKSwgJ085J1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18zOSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICArMTAgICApLCAnUDEwJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X180MCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICArMjAgICApLCAnUDIwJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X180MSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICArOTAgICApLCAnUDkwJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X180MiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAxMjMgICApLCAnUTEyMydcbiAgICBAZXEgICAgICggzqlhbnlidF9fNDMgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCArOTAwICAgKSwgJ1E5MDAnXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGgxMG12cF8yOiAtPlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEwLFxuICAgICAgaG9sbGVyaXRoXzEwbXZwLFxuICAgICAgaG9sbGVyaXRoXzEyOCxcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgICAgICggzqlhbnlidF9fNDQgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAtOTk5ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAtOTk5XG4gICAgQGVxICAgICAoIM6pYW55YnRfXzQ1ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggIC05OSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgIC05OVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X180NiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAtOTAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAtOTBcbiAgICBAZXEgICAgICggzqlhbnlidF9fNDcgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgLTExICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgLTExXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzQ4ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggIC0xMCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgIC0xMFxuICAgIEBlcSAgICAgKCDOqWFueWJ0X180OSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAgLTkgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgLTlcbiAgICBAZXEgICAgICggzqlhbnlidF9fNTAgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgIC04ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgIC04XG4gICAgQGVxICAgICAoIM6pYW55YnRfXzUxID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICAtNyAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAtN1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X181MiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAgLTYgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgLTZcbiAgICBAZXEgICAgICggzqlhbnlidF9fNTMgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgIC01ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgIC01XG4gICAgQGVxICAgICAoIM6pYW55YnRfXzU0ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICAtNCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAtNFxuICAgIEBlcSAgICAgKCDOqWFueWJ0X181NSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAgLTMgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgLTNcbiAgICBAZXEgICAgICggzqlhbnlidF9fNTYgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgIC0yICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgIC0yXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzU3ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICAtMSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAtMVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X181OCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAgIDAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgIDBcbiAgICBAZXEgICAgICggzqlhbnlidF9fNTkgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgICAxICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgICAxXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzYwID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICArOSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICArOVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X182MSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICArMTAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICArMTBcbiAgICBAZXEgICAgICggzqlhbnlidF9fNjIgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgKzIwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgKzIwXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzYzID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICs5MCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICs5MFxuICAgIEBlcSAgICAgKCDOqWFueWJ0X182NCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAxMjMgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAxMjNcbiAgICBAZXEgICAgICggzqlhbnlidF9fNjUgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCArOTAwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSArOTAwXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGgxMG12cF8zOiAtPlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEwLFxuICAgICAgaG9sbGVyaXRoXzEwbXZwLFxuICAgICAgaG9sbGVyaXRoXzEyOCxcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgICAgICggzqlhbnlidF9fNjYgPSAtPiAoIGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4IC05OTkgKS5wYWRFbmQgMjUsICdOJyApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgLTk5OSwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X182NyA9IC0+ICggaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggIC05OSApLnBhZEVuZCAyNSwgJ04nICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgLTk5LCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzY4ID0gLT4gKCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgLTkwICkucGFkRW5kIDI1LCAnTicgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAtOTAsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNjkgPSAtPiAoIGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAtMTEgKS5wYWRFbmQgMjUsICdOJyApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgIC0xMSwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X183MCA9IC0+ICggaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggIC0xMCApLnBhZEVuZCAyNSwgJ04nICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgLTEwLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzcxID0gLT4gKCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgIC05ICkucGFkRW5kIDI1LCAnTicgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgLTksIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNzIgPSAtPiAoIGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAgLTggKS5wYWRFbmQgMjUsICdOJyApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICAtOCwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X183MyA9IC0+ICggaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICAtNyApLnBhZEVuZCAyNSwgJ04nICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgIC03LCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzc0ID0gLT4gKCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgIC02ICkucGFkRW5kIDI1LCAnTicgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgLTYsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNzUgPSAtPiAoIGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAgLTUgKS5wYWRFbmQgMjUsICdOJyApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICAtNSwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X183NiA9IC0+ICggaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICAtNCApLnBhZEVuZCAyNSwgJ04nICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgIC00LCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzc3ID0gLT4gKCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgIC0zICkucGFkRW5kIDI1LCAnTicgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgLTMsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNzggPSAtPiAoIGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAgLTIgKS5wYWRFbmQgMjUsICdOJyApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICAtMiwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X183OSA9IC0+ICggaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICAtMSApLnBhZEVuZCAyNSwgJ04nICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgIC0xLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzgwID0gLT4gKCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgICAwICkucGFkRW5kIDI1LCAnTicgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgIDAsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fODEgPSAtPiAoIGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAgIDEgKS5wYWRFbmQgMjUsICdOJyApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICAgMSwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X184MiA9IC0+ICggaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICArOSApLnBhZEVuZCAyNSwgJ04nICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgICs5LCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzgzID0gLT4gKCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgKzEwICkucGFkRW5kIDI1LCAnTicgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICArMTAsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fODQgPSAtPiAoIGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICArMjAgKS5wYWRFbmQgMjUsICdOJyApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICsyMCwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X184NSA9IC0+ICggaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICs5MCApLnBhZEVuZCAyNSwgJ04nICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgKzkwLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzg2ID0gLT4gKCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgMTIzICkucGFkRW5kIDI1LCAnTicgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAxMjMsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fODcgPSAtPiAoIGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICs5MDAgKS5wYWRFbmQgMjUsICdOJyApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgKzkwMCwgXVxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoMTBtdnBfc29ydGluZ18xOiAtPlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEwLFxuICAgICAgaG9sbGVyaXRoXzEwbXZwLFxuICAgICAgaG9sbGVyaXRoXzEyOCxcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBzb3J0ZWRfc2luZ2xlcyA9ICggcGFkZGluZyA9IG51bGwgKSA9PlxuICAgICAgcHJvYmVzID0gW1xuICAgICAgICBbIC05OTksIF1cbiAgICAgICAgWyAgLTk5LCBdXG4gICAgICAgIFsgIC05MCwgXVxuICAgICAgICBbICAtMTEsIF1cbiAgICAgICAgWyAgLTEwLCBdXG4gICAgICAgIFsgICAtOSwgXVxuICAgICAgICBbICAgLTgsIF1cbiAgICAgICAgWyAgIC03LCBdXG4gICAgICAgIFsgICAtNiwgXVxuICAgICAgICBbICAgLTUsIF1cbiAgICAgICAgWyAgIC00LCBdXG4gICAgICAgIFsgICAtMywgXVxuICAgICAgICBbICAgLTIsIF1cbiAgICAgICAgWyAgIC0xLCBdXG4gICAgICAgIFsgICAgMCwgXVxuICAgICAgICBbICAgIDEsIF1cbiAgICAgICAgWyAgICs5LCBdXG4gICAgICAgIFsgICsxMCwgXVxuICAgICAgICBbICArMjAsIF1cbiAgICAgICAgWyAgKzkwLCBdXG4gICAgICAgIFsgIDEyMywgXVxuICAgICAgICBbICs5MDAsIF1cbiAgICAgICAgXVxuICAgICAgZm9yIHByb2JlLCBpZHggaW4gcHJvYmVzXG4gICAgICAgIHNrICAgICAgICAgICAgPSBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIHByb2JlXG4gICAgICAgIHNrICAgICAgICAgICAgPSBzay5wYWRFbmQgcGFkZGluZywgaG9sbGVyaXRoXzEwbXZwLmNmZy5fenB1bnNbIDAgXSBpZiBwYWRkaW5nP1xuICAgICAgICBwcm9iZXNbIGlkeCBdID0geyBzaywgcHJvYmUsIGlkeCwgfVxuICAgICAgcHJvYmVzLnNvcnQgKCBhLCBiICkgLT5cbiAgICAgICAgcmV0dXJuIC0xIGlmIGEuc2sgPCBiLnNrXG4gICAgICAgIHJldHVybiArMSBpZiBhLnNrID4gYi5za1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgZm9yIGVudHJ5LCBpZHggaW4gcHJvYmVzXG4gICAgICAgICMgZGVidWcgJ86paGxsdF9fODgnLCBlbnRyeVxuICAgICAgICBAZXEgKCDOqWhsbHRfXzg5ID0gLT4gZW50cnkuaWR4ICksIGlkeFxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHNvcnRlZF9zaW5nbGVzIG51bGxcbiAgICBzb3J0ZWRfc2luZ2xlcyAxMFxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoMTBtdnBfc29ydGluZ18yOiAtPlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEwbXZwLFxuICAgICAgaW50ZXJuYWxzICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHByb2JlcyA9IFtcbiAgICAgIFsgWyAtOTk5LCAgICAgICAgICAgXSwgJ0swMDAnLCAgICAgIF1cbiAgICAgIFsgWyAgLTk5LCAgICAgICAgICAgXSwgJ0wwMCcsICAgICAgIF1cbiAgICAgIFsgWyAgLTkwLCAgICAgICAgICAgXSwgJ0wwOScsICAgICAgIF1cbiAgICAgIFsgWyAgLTExLCAgICAgICAgICAgXSwgJ0w4OCcsICAgICAgIF1cbiAgICAgIFsgWyAgLTEwLCAgICAgICAgICAgXSwgJ0w4OScsICAgICAgIF1cbiAgICAgIFsgWyAgIC05LCAgICAgICAgICAgXSwgJ00wJywgICAgICAgIF1cbiAgICAgIFsgWyAgIC04LCAgICAgICAgICAgXSwgJ00xJywgICAgICAgIF1cbiAgICAgIFsgWyAgIC03LCAgICAgICAgICAgXSwgJ00yJywgICAgICAgIF1cbiAgICAgIFsgWyAgIC02LCAgICAgICAgICAgXSwgJ00zJywgICAgICAgIF1cbiAgICAgIFsgWyAgIC01LCAgICAgICAgICAgXSwgJ000JywgICAgICAgIF1cbiAgICAgIFsgWyAgIC00LCAgICAgICAgICAgXSwgJ001JywgICAgICAgIF1cbiAgICAgIFsgWyAgIC0zLCAgICAgICAgICAgXSwgJ002JywgICAgICAgIF1cbiAgICAgIFsgWyAgIC0yLCAgICAgICAgICAgXSwgJ003JywgICAgICAgIF1cbiAgICAgIFsgWyAgIC0xLCAgICAgICAgICAgXSwgJ004JywgICAgICAgIF1cbiAgICAgIFsgWyAgICswLCAgLTIwLCAgICAgXSwgJ05MMjAnLCAgICAgIF1cbiAgICAgIFsgWyAgICswLCAgICAgICAgICAgXSwgJ04nLCAgICAgICAgIF1cbiAgICAgIFsgWyAgICswLCAgKzIwLCAgICAgXSwgJ05QMjAnLCAgICAgIF1cbiAgICAgIFsgWyAgICs5LCAgICAgICAgICAgXSwgJ085JywgICAgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgIC0zLCAgICAgXSwgJ1AxME02JywgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgIC0yLCAgICAgXSwgJ1AxME03JywgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgIC0xLCAgICAgXSwgJ1AxME04JywgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgICAgICAgICAgXSwgJ1AxMCcsICAgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgICswLCAgICAgXSwgJ1AxME4nLCAgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgICsxLCAgICAgXSwgJ1AxME8xJywgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgKzEwLCAtMSwgXSwgJ1AxMFAxME04JywgIF1cbiAgICAgIFsgWyAgKzEwLCAgKzEwLCAgICAgXSwgJ1AxMFAxMCcsICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgKzIwLCAgICAgXSwgJ1AxMFAyMCcsICAgIF1cbiAgICAgIFsgWyAgKzIwLCAgICAgICAgICAgXSwgJ1AyMCcsICAgICAgIF1cbiAgICAgIFsgWyAgKzIwLCAgKzEwLCAgICAgXSwgJ1AyMFAxMCcsICAgIF1cbiAgICAgIFsgWyAgKzkwLCAgICAgICAgICAgXSwgJ1A5MCcsICAgICAgIF1cbiAgICAgIFsgWyArOTAwLCAgICAgICAgICAgXSwgJ1E5MDAnLCAgICAgIF1cbiAgICAgIF1cbiAgICB1bGluZXMgICAgICAgICAgICA9IFtdXG4gICAgcGxpbmVzICAgICAgICAgICAgPSBbXVxuICAgIGV4cGVjdGVkX2luZGV4ZXMgID0gKCBpZHggZm9yIGlkeCBpbiBbIDAgLi4uIHByb2Jlcy5sZW5ndGggXSApXG4gICAgc2h1ZmZsZSAgICAgICAgICAgPSBHVVkucm5kLmdldF9zaHVmZmxlIDU3LCA4OFxuICAgIGZvciBbIHZkeCwgc2tfbWF0Y2hlciwgXSwgaWR4IGluIHByb2Jlc1xuICAgICAgdXNrICAgPSBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIHZkeFxuICAgICAgcHNrICAgPSB1c2sucGFkRW5kIDEwLCBob2xsZXJpdGhfMTBtdnAuY2ZnLl96cHVuc1sgMCBdXG4gICAgICB1c2sgICA9IHVzay5wYWRFbmQgMTAsICcgJ1xuICAgICAgdWxpbmVzLnB1c2ggXCIje3Vza30gI3tycHIgdmR4fSAje2lkeH1cIlxuICAgICAgcGxpbmVzLnB1c2ggXCIje3Bza30gI3tycHIgdmR4fSAje2lkeH1cIlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZm9yIF8gaW4gWyAxIC4uIDEwIF1cbiAgICAgIHVsaW5lcyA9IHNodWZmbGUgdWxpbmVzXG4gICAgICB1bGluZXMuc29ydCgpXG4gICAgICByZWFsX2luZGV4ZXMgPSBbXVxuICAgICAgZm9yIHVsaW5lIGluIHVsaW5lc1xuICAgICAgICAjIGhlbHAgJ86paGxsdF9fOTAnLCB1bGluZVxuICAgICAgICByZWFsX2luZGV4ZXMucHVzaCBOdW1iZXIgdWxpbmUucmVwbGFjZSAvXi4qP1xccyhbMC05XSspJC8sICckMSdcbiAgICAgIEBlcSAoIM6paGxsdF9fOTEgPSAtPiBlcXVhbHMgZXhwZWN0ZWRfaW5kZXhlcywgcmVhbF9pbmRleGVzICksIHRydWVcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGZvciBfIGluIFsgMSAuLiAxMCBdXG4gICAgICBwbGluZXMgPSBzaHVmZmxlIHBsaW5lc1xuICAgICAgcGxpbmVzLnNvcnQoKVxuICAgICAgcmVhbF9pbmRleGVzID0gW11cbiAgICAgIGZvciBwbGluZSBpbiBwbGluZXNcbiAgICAgICAgIyBoZWxwICfOqWhsbHRfXzkyJywgcGxpbmVcbiAgICAgICAgcmVhbF9pbmRleGVzLnB1c2ggTnVtYmVyIHBsaW5lLnJlcGxhY2UgL14uKj9cXHMoWzAtOV0rKSQvLCAnJDEnXG4gICAgICBAZXEgKCDOqWhsbHRfXzkzID0gLT4gZXF1YWxzIGV4cGVjdGVkX2luZGV4ZXMsIHJlYWxfaW5kZXhlcyApLCB0cnVlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaG9sbGVyaXRoXzEwbXZwMl9iaWdfc2h1ZmZsZTogLT5cbiAgICB7IEhvbGxlcml0aCxcbiAgICAgIGhvbGxlcml0aF8xMG12cDIsXG4gICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgIGNvZGVjICAgICAgICAgICAgICAgICAgICAgICA9IGhvbGxlcml0aF8xMG12cDJcbiAgICBybmRfdmR4X2NmZyAgICAgICAgICAgICAgICAgPVxuICAgICAgc2VlZDogICAgICAgICBudWxsXG4gICAgICBtaW5fbGVuZ3RoOiAgIDFcbiAgICAgIG1heF9sZW5ndGg6ICAgY29kZWMuY2ZnLmRpbWVuc2lvbiAtIDFcbiAgICAgIG1pbl9pZHg6ICAgICAgTWF0aC5tYXggY29kZWMuY2ZnLl9taW5faW50ZWdlciwgLTIwMDBcbiAgICAgIG1heF9pZHg6ICAgICAgTWF0aC5taW4gY29kZWMuY2ZnLl9tYXhfaW50ZWdlciwgKzIwMDBcbiAgICAjIGRlYnVnICfOqWhsbHRfXzk0Jywgcm5kX3ZkeF9jZmdcbiAgICAjIGRlYnVnICfOqWhsbHRfXzk1JywgY29kZWMuY2ZnLl9zb3J0a2V5X3dpZHRoXG4gICAgZ2V0X3JhbmRvbV92ZHggICAgICAgICAgICAgID0gaGVscGVycy5nZXRfcmFuZG9tX3ZkeF9wcm9kdWNlciBybmRfdmR4X2NmZ1xuICAgIHByb2JlX3N1Yl9jb3VudCAgICAgICAgICAgICA9IDNcbiAgICBzaHVmZmxlICAgICAgICAgICAgICAgICAgICAgPSBHVVkucm5kLmdldF9zaHVmZmxlIDU3LCA4OFxuICAgIGVuY29kZSAgICAgICAgICAgICAgICAgICAgICA9ICggdmR4ICkgLT4gKCBjb2RlYy5lbmNvZGUgdmR4ICkucGFkRW5kIGNvZGVjLmNmZy5fc29ydGtleV93aWR0aCwgY29kZWMuY2ZnLl9jaXBoZXJcbiAgICBwcm9iZXNfc29ydGtleSAgICAgICAgICAgICAgPSBbXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZm9yIGZpcnN0X2lkeCBpbiBbIHJuZF92ZHhfY2ZnLm1pbl9pZHggLi4gcm5kX3ZkeF9jZmcubWF4X2lkeCBdXG4gICAgICBmb3IgXyBpbiBbIDEgLi4gcHJvYmVfc3ViX2NvdW50IF1cbiAgICAgICAgdmR4ID0gWyBmaXJzdF9pZHgsIGdldF9yYW5kb21fdmR4KCkuLi4sIF1cbiAgICAgICAgc2sgID0gZW5jb2RlIHZkeFxuICAgICAgICBwcm9iZXNfc29ydGtleS5wdXNoIHsgdmR4LCBzaywgfVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcHJvYmVzX3NvcnRrZXkgICAgPSBzaHVmZmxlIHByb2Jlc19zb3J0a2V5XG4gICAgcHJvYmVzX3ZkeCAgICAgICAgPSBwcm9iZXNfc29ydGtleVsgLi4gXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgc29ydF9ieV92ZHggICAgICAgPSAoIGEsIGIgKSAtPlxuICAgICAgYSA9IGEudmR4XG4gICAgICBiID0gYi52ZHhcbiAgICAgIGZvciBpZHggaW4gWyAwIC4uLiAoIE1hdGgubWF4IGEubGVuZ3RoLCBiLmxlbmd0aCApIF1cbiAgICAgICAgZGEgPSBhWyBpZHggXSA/IDBcbiAgICAgICAgZGIgPSBiWyBpZHggXSA/IDBcbiAgICAgICAgY29udGludWUgaWYgZGEgaXMgZGJcbiAgICAgICAgcmV0dXJuIC0xIGlmIGRhIDwgZGJcbiAgICAgICAgcmV0dXJuICsxXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgc29ydF9ieV9zb3J0a2V5ICAgPSAoIGEsIGIgKSAtPlxuICAgICAgYSA9IGEuc2tcbiAgICAgIGIgPSBiLnNrXG4gICAgICByZXR1cm4gIDAgaWYgYSBpcyBiXG4gICAgICByZXR1cm4gLTEgaWYgYSA8IGJcbiAgICAgIHJldHVybiArMVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcHJvYmVzX3ZkeC5zb3J0ICAgICBzb3J0X2J5X3ZkeFxuICAgIHByb2Jlc19zb3J0a2V5LnNvcnQgc29ydF9ieV9zb3J0a2V5XG4gICAgZm9yIHByb2JlX3ZkeCwgaWR4IGluIHByb2Jlc192ZHhcbiAgICAgIHByb2JlX3NvcnRrZXkgPSBwcm9iZXNfc29ydGtleVsgaWR4IF1cbiAgICAgICMgd2hpc3BlciAnzqlobGx0X185NicsICggZ29sZCBwcm9iZV9zb3J0a2V5LnNrICksICggcmVkIHByb2JlX3ZkeC52ZHggKSwgKCBsaW1lIHByb2JlX3NvcnRrZXkudmR4IClcbiAgICAgIEBlcSAoIM6paGxsdF9fOTcgPSAtPiBwcm9iZV9zb3J0a2V5LnZkeCApLCBwcm9iZV92ZHgudmR4XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaG9sbGVyaXRoXzEyOF9iaWdfc2h1ZmZsZTogLT5cbiAgICB7IEhvbGxlcml0aCxcbiAgICAgIGhvbGxlcml0aF8xMjgsXG4gICAgICBob2xsZXJpdGhfMTBtdnAyLFxuICAgICAgaW50ZXJuYWxzICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICBjb2RlYyAgICAgICAgICAgICAgICAgICAgICAgPSBob2xsZXJpdGhfMTI4XG4gICAgIyBjb2RlYyAgICAgICAgICAgICAgICAgICAgICAgPSBob2xsZXJpdGhfMTBtdnAyXG4gICAgcm5kX3ZkeF9jZmcgICAgICAgICAgICAgICAgID1cbiAgICAgIHNlZWQ6ICAgICAgICAgbnVsbFxuICAgICAgbWluX2xlbmd0aDogICAxXG4gICAgICBtYXhfbGVuZ3RoOiAgIGNvZGVjLmNmZy5kaW1lbnNpb24gLSAxXG4gICAgICBtaW5faWR4OiAgICAgIE1hdGgubWF4IGNvZGVjLmNmZy5fbWluX2ludGVnZXIsIC0yMDAwXG4gICAgICBtYXhfaWR4OiAgICAgIE1hdGgubWluIGNvZGVjLmNmZy5fbWF4X2ludGVnZXIsICsyMDAwXG4gICAgIyBkZWJ1ZyAnzqlobGx0X185OCcsIHJuZF92ZHhfY2ZnXG4gICAgIyBkZWJ1ZyAnzqlobGx0X185OScsIGNvZGVjLmNmZy5fc29ydGtleV93aWR0aFxuICAgIGdldF9yYW5kb21fdmR4ICAgICAgICAgICAgICA9IGhlbHBlcnMuZ2V0X3JhbmRvbV92ZHhfcHJvZHVjZXIgcm5kX3ZkeF9jZmdcbiAgICBwcm9iZV9zdWJfY291bnQgICAgICAgICAgICAgPSAzXG4gICAgc2h1ZmZsZSAgICAgICAgICAgICAgICAgICAgID0gR1VZLnJuZC5nZXRfc2h1ZmZsZSA1NywgODhcbiAgICBlbmNvZGUgICAgICAgICAgICAgICAgICAgICAgPSAoIHZkeCApIC0+ICggY29kZWMuZW5jb2RlIHZkeCApLnBhZEVuZCBjb2RlYy5jZmcuX3NvcnRrZXlfd2lkdGgsIGNvZGVjLmNmZy5fY2lwaGVyXG4gICAgcHJvYmVzX3NvcnRrZXkgICAgICAgICAgICAgID0gW11cbiAgICAjIGRlYnVnICfOqWhsbHRfMTAwJywgcm5kX3ZkeF9jZmc7IHByb2Nlc3MuZXhpdCAxMTFcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHdhbGtfZmlyc3RfaWR4cyAgICAgICAgICAgICA9IC0+XG4gICAgICB5aWVsZCBpZHggZm9yIGlkeCBpbiBbIGNvZGVjLmNmZy5fbWluX2ludGVnZXIgICAgICAuLiBjb2RlYy5jZmcuX21pbl9pbnRlZ2VyICsgMTAgXVxuICAgICAgeWllbGQgaWR4IGZvciBpZHggaW4gWyBybmRfdmR4X2NmZy5taW5faWR4ICAgICAgICAgLi4gcm5kX3ZkeF9jZmcubWF4X2lkeCAgICAgICAgIF1cbiAgICAgIHlpZWxkIGlkeCBmb3IgaWR4IGluIFsgY29kZWMuY2ZnLl9tYXhfaW50ZWdlciAtIDEwIC4uIGNvZGVjLmNmZy5fbWF4X2ludGVnZXIgICAgICBdXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZm9yIGZpcnN0X2lkeCBmcm9tIHdhbGtfZmlyc3RfaWR4cygpXG4gICAgIyBmb3IgZmlyc3RfaWR4IGluIFsgLTEwMCAuLiArMTAwIF1cbiAgICAgICMgZGVidWcgJ86paGxsdF8xMDEnLCB7IGZpcnN0X2lkeCwgfVxuICAgICAgZm9yIF8gaW4gWyAxIC4uIHByb2JlX3N1Yl9jb3VudCBdXG4gICAgICAgIHZkeCA9IFsgZmlyc3RfaWR4LCBnZXRfcmFuZG9tX3ZkeCgpLi4uLCBdXG4gICAgICAgIHNrICA9IGVuY29kZSB2ZHhcbiAgICAgICAgcHJvYmVzX3NvcnRrZXkucHVzaCB7IHZkeCwgc2ssIH1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHByb2Jlc19zb3J0a2V5ICAgID0gc2h1ZmZsZSBwcm9iZXNfc29ydGtleVxuICAgIHByb2Jlc192ZHggICAgICAgID0gcHJvYmVzX3NvcnRrZXlbIC4uIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHNvcnRfYnlfdmR4ICAgICAgID0gKCBhLCBiICkgLT5cbiAgICAgIGEgPSBhLnZkeFxuICAgICAgYiA9IGIudmR4XG4gICAgICBmb3IgaWR4IGluIFsgMCAuLi4gKCBNYXRoLm1heCBhLmxlbmd0aCwgYi5sZW5ndGggKSBdXG4gICAgICAgIGRhID0gYVsgaWR4IF0gPyAwXG4gICAgICAgIGRiID0gYlsgaWR4IF0gPyAwXG4gICAgICAgIGNvbnRpbnVlIGlmIGRhIGlzIGRiXG4gICAgICAgIHJldHVybiAtMSBpZiBkYSA8IGRiXG4gICAgICAgIHJldHVybiArMVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHNvcnRfYnlfc29ydGtleSAgID0gKCBhLCBiICkgLT5cbiAgICAgIGEgPSBhLnNrXG4gICAgICBiID0gYi5za1xuICAgICAgcmV0dXJuICAwIGlmIGEgaXMgYlxuICAgICAgcmV0dXJuIC0xIGlmIGEgPCBiXG4gICAgICByZXR1cm4gKzFcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHByb2Jlc192ZHguc29ydCAgICAgc29ydF9ieV92ZHhcbiAgICBwcm9iZXNfc29ydGtleS5zb3J0IHNvcnRfYnlfc29ydGtleVxuICAgIGZvciBwcm9iZV92ZHgsIGlkeCBpbiBwcm9iZXNfdmR4XG4gICAgICBwcm9iZV9zb3J0a2V5ID0gcHJvYmVzX3NvcnRrZXlbIGlkeCBdXG4gICAgICAjIHdoaXNwZXIgJ86paGxsdF8xMDInLCAoIGdvbGQgcHJvYmVfc29ydGtleS5zayApLCAoIHJlZCBwcm9iZV92ZHgudmR4ICksICggbGltZSBwcm9iZV9zb3J0a2V5LnZkeCApXG4gICAgICBAZXEgKCDOqWhsbHRfMTAzID0gLT4gcHJvYmVfc29ydGtleS52ZHggKSwgcHJvYmVfdmR4LnZkeFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGgxMjhfMTYzODNfc29ydGluZ18yOiAtPlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEyOF8xNjM4MyxcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwcm9iZXMgPSBbXG4gICAgICBbIFsgLTk5OSwgICAgICAgICAgIF0sICfDjcK/O8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsICBdXG4gICAgICBbIFsgIC05OSwgICAgICAgICAgIF0sICfDjj/Do8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsICBdXG4gICAgICBbIFsgIC05MCwgICAgICAgICAgIF0sICfDjkjDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsICBdXG4gICAgICBbIFsgIC04MCwgICAgICAgICAgIF0sICfDjlLDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsICBdXG4gICAgICBbIFsgIC0yMSwgICAgICAgICAgIF0sICfDjsKxw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgXVxuICAgICAgWyBbICAtMjAsICAgICAgICAgICBdLCAnw4/Do8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgIF1cbiAgICAgIFsgWyAgLTExLCAgICAgICAgICAgXSwgJ8OYw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsICBdXG4gICAgICBbIFsgIC0xMCwgICAgICAgICAgIF0sICfDmcOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgXVxuICAgICAgWyBbICAgLTksICAgICAgICAgICBdLCAnw5rDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgIF1cbiAgICAgIFsgWyAgIC04LCAgICAgICAgICAgXSwgJ8Obw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsICBdXG4gICAgICBbIFsgICAtNywgICAgICAgICAgIF0sICfDnMOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgXVxuICAgICAgWyBbICAgLTYsICAgICAgICAgICBdLCAnw53Do8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgIF1cbiAgICAgIFsgWyAgIC01LCAgICAgICAgICAgXSwgJ8Oew6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsICBdXG4gICAgICBbIFsgICAtNCwgICAgICAgICAgIF0sICfDn8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgXVxuICAgICAgWyBbICAgLTMsICAgICAgICAgICBdLCAnw6DDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgIF1cbiAgICAgIFsgWyAgIC0yLCAgICAgICAgICAgXSwgJ8Ohw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsICBdXG4gICAgICBbIFsgICAtMSwgICAgICAgICAgIF0sICfDosOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgXVxuICAgICAgWyBbICAgKzAsICAtMjAsICAgICBdLCAnw6PDj8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgIF1cbiAgICAgIFsgWyAgICswLCAgICAgICAgICAgXSwgJ8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsICBdXG4gICAgICBbIFsgICArMCwgICsyMCwgICAgIF0sICfDo8O3w6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgXVxuICAgICAgWyBbICAgKzksICAgICAgICAgICBdLCAnw6zDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgIF1cbiAgICAgIFsgWyAgKzEwLCAgIC0zLCAgICAgXSwgJ8Otw6DDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsICBdXG4gICAgICBbIFsgICsxMCwgICAtMiwgICAgIF0sICfDrcOhw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgXVxuICAgICAgWyBbICArMTAsICAgLTEsICAgICBdLCAnw63DosOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgIF1cbiAgICAgIFsgWyAgKzEwLCAgICAgICAgICAgXSwgJ8Otw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsICBdXG4gICAgICBbIFsgICsxMCwgICArMCwgICAgIF0sICfDrcOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgXVxuICAgICAgWyBbICArMTAsICAgKzEsICAgICBdLCAnw63DpMOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgIF1cbiAgICAgIFsgWyAgKzEwLCAgKzEwLCAtMSwgXSwgJ8Otw63DosOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsICBdXG4gICAgICBbIFsgICsxMCwgICsxMCwgICAgIF0sICfDrcOtw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgXVxuICAgICAgWyBbICArMTAsICArMjAsICAgICBdLCAnw63Dt8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgIF1cbiAgICAgIFsgWyAgKzIwLCAgICAgICAgICAgXSwgJ8O3w6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsICBdXG4gICAgICBbIFsgICsyMCwgICsxMCwgICAgIF0sICfDt8Otw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgXVxuICAgICAgWyBbICArOTAsICAgICAgICAgICBdLCAnw7h+w6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgXVxuICAgICAgWyBbICs5MDAsICAgICAgICAgICBdLCAnw7kqJsOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsICBdXG4gICAgICBdXG4gICAgdW5wYWRkZWRfbGluZXMgICAgPSBbXVxuICAgIHBhZGRlZF9saW5lcyAgICAgID0gW11cbiAgICBleHBlY3RlZF9pbmRleGVzICA9ICggaWR4IGZvciBpZHggaW4gWyAwIC4uLiBwcm9iZXMubGVuZ3RoIF0gKVxuICAgIHNodWZmbGUgICAgICAgICAgID0gR1VZLnJuZC5nZXRfc2h1ZmZsZSA1NywgODhcbiAgICBjb2RlYyAgICAgICAgICAgICA9IGhvbGxlcml0aF8xMjhfMTYzODNcbiAgICAjIGRlYnVnICfOqWhsbHRfMTA0JywgY29kZWMuY2ZnLmRpZ2l0c19wZXJfaWR4XG4gICAgIyBkZWJ1ZyAnzqlobGx0XzEwNScsIGNvZGVjLmNmZy56ZXJvX3BhZF9sZW5ndGhcbiAgICBAZXEgKCDOqWhsbHRfMTA2ID0gLT4gY29kZWMuY2ZnLl9iYXNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgMTI4XG4gICAgQGVxICggzqlobGx0XzEwNyA9IC0+IGNvZGVjLmNmZy5fbWF4X2ludGVnZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICsxNjM4M1xuICAgIEBlcSAoIM6paGxsdF8xMDggPSAtPiBjb2RlYy5jZmcuX21pbl9pbnRlZ2VyICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAtMTYzODNcbiAgICBAZXEgKCDOqWhsbHRfMTA5ID0gLT4gY29kZWMuY2ZnLl9wbWFnX2xpc3RbIDIgXSAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDuSdcbiAgICBAZXEgKCDOqWhsbHRfMTEwID0gLT4gY29kZWMuY2ZnLl9ubWFnX2xpc3RbIDIgXSAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDjSdcbiAgICBAZXEgKCDOqWhsbHRfMTExID0gLT4gY29kZWMuZW5jb2RlIGNvZGVjLmNmZy5fbWF4X2ludGVnZXIgICAgICAgICAgICAgICAgKSwgJ8O5w4bDhidcbiAgICBAZXEgKCDOqWhsbHRfMTEyID0gLT4gY29kZWMuZW5jb2RlIGNvZGVjLmNmZy5fbWluX2ludGVnZXIgICAgICAgICAgICAgICAgKSwgJ8ONISEnXG4gICAgQGVxICggzqlobGx0XzExMyA9IC0+IGNvZGVjLmRlY29kZSAnw40hIScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIC0xNjM4MyBdXG4gICAgQHRocm93cyAoIM6paGxsdF8xMTQgPSAtPiBjb2RlYy5kZWNvZGUgJ8OHISEhISEhISEnICAgICAgICAgICAgICAgICAgICAgICApLCAvbm90IGEgdmFsaWQgc29ydGtleS9cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGZvciBbIHZkeCwgc2tfbWF0Y2hlciwgXSwgaWR4IGluIHByb2Jlc1xuICAgICAgdXNrICAgPSBjb2RlYy5lbmNvZGUgdmR4XG4gICAgICBAZXEgKCDOqWhsbHRfMTE1ID0gLT4gdXNrICksIHNrX21hdGNoZXJcbiAgICAgICMgZWNobyBycHIgdXNrXG4gICAgICBwc2sgICA9IHVzay5wYWRFbmQgMTAsIGNvZGVjLmNmZy5fY2lwaGVyXG4gICAgICB1c2sgICA9IHVzay5wYWRFbmQgMTAsICcgJ1xuICAgICAgdW5wYWRkZWRfbGluZXMucHVzaCBcIiN7dXNrfSAje3JwciB2ZHh9ICN7aWR4fVwiXG4gICAgICBwYWRkZWRfbGluZXMucHVzaCBcIiN7cHNrfSAje3JwciB2ZHh9ICN7aWR4fVwiXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgKCDOqWhsbHRfMTE2ID0gLT4gY29kZWMuY2ZnLmRpZ2l0c19wZXJfaWR4ICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDJcbiAgICBAZXEgKCDOqWhsbHRfMTE3ID0gLT4gY29kZWMuY2ZnLl9tYXhfenB1biAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAyMFxuICAgIEBlcSAoIM6paGxsdF8xMTggPSAtPiBjb2RlYy5jZmcuX25hdWdodCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICchJ1xuICAgIEBlcSAoIM6paGxsdF8xMTkgPSAtPiBjb2RlYy5jZmcuX25vdmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDhidcbiAgICBAZXEgKCDOqWhsbHRfMTIwID0gLT4gY29kZWMuY2ZnLl9jaXBoZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw6MnXG4gICAgQGVxICggzqlobGx0XzEyMSA9IC0+IGNvZGVjLmNmZy5fbm1hZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyDDjsONJ1xuICAgIEBlcSAoIM6paGxsdF8xMjIgPSAtPiBjb2RlYy5jZmcuX3BtYWcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcgw7jDuSdcbiAgICBAZXEgKCDOqWhsbHRfMTIzID0gLT4gY29kZWMuY2ZnLl9wbWFnX2xpc3RbIGNvZGVjLmNmZy5kaWdpdHNfcGVyX2lkeCBdICAgICksICfDuSdcbiAgICBAZXEgKCDOqWhsbHRfMTI0ID0gLT4gY29kZWMuZW5jb2RlIC0xNjM4MyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw40hISdcbiAgICBAZXEgKCDOqWhsbHRfMTI1ID0gLT4gY29kZWMuZW5jb2RlIC0xNjM4MiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw40hIydcbiAgICBAZXEgKCDOqWhsbHRfMTI2ID0gLT4gY29kZWMuZW5jb2RlIC0xMjkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw43DhcOFJ1xuICAgIEBlcSAoIM6paGxsdF8xMjcgPSAtPiBjb2RlYy5lbmNvZGUgLTEyOCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDjcOFw4YnXG4gICAgQGVxICggzqlobGx0XzEyOCA9IC0+IGNvZGVjLmVuY29kZSAtMTI3ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8OOISdcbiAgICBAZXEgKCDOqWhsbHRfMTI5ID0gLT4gY29kZWMuZW5jb2RlIC04MCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw45SJ1xuICAgIEBlcSAoIM6paGxsdF8xMzAgPSAtPiBjb2RlYy5lbmNvZGUgLTIxICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDjsKxJ1xuICAgIEBlcSAoIM6paGxsdF8xMzEgPSAtPiBjb2RlYy5lbmNvZGUgLTIxICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDjsKxJ1xuICAgIEBlcSAoIM6paGxsdF8xMzIgPSAtPiBjb2RlYy5lbmNvZGUgLTIwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDjydcbiAgICBAZXEgKCDOqWhsbHRfMTMzID0gLT4gY29kZWMuZW5jb2RlIC0xICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw6InXG4gICAgQGVxICggzqlobGx0XzEzNCA9IC0+IGNvZGVjLmVuY29kZSArMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8OjJ1xuICAgIEBlcSAoIM6paGxsdF8xMzUgPSAtPiBjb2RlYy5lbmNvZGUgKzEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDpCdcbiAgICBAZXEgKCDOqWhsbHRfMTM2ID0gLT4gY29kZWMuZW5jb2RlICsyMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw7cnXG4gICAgQGVxICggzqlobGx0XzEzNyA9IC0+IGNvZGVjLmVuY29kZSArMjEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8O4OCdcbiAgICBAZXEgKCDOqWhsbHRfMTM4ID0gLT4gY29kZWMuZW5jb2RlICsxMjcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw7jDhidcbiAgICBAZXEgKCDOqWhsbHRfMTM5ID0gLT4gY29kZWMuZW5jb2RlICsxMjggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw7kjISdcbiAgICBAZXEgKCDOqWhsbHRfMTQwID0gLT4gY29kZWMuZW5jb2RlICsxMjkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw7kjIydcbiAgICBAZXEgKCDOqWhsbHRfMTQxID0gLT4gY29kZWMuZW5jb2RlICsxNjM4MiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw7nDhsOFJ1xuICAgIEBlcSAoIM6paGxsdF8xNDIgPSAtPiBjb2RlYy5lbmNvZGUgKzE2MzgzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDucOGw4YnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgKCDOqWhsbHRfMTQzID0gLT4gY29kZWMuZGVjb2RlICfDjSEhJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAtMTYzODMgXVxuICAgIEBlcSAoIM6paGxsdF8xNDQgPSAtPiBjb2RlYy5kZWNvZGUgJ8ONISMnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIC0xNjM4MiBdXG4gICAgQGVxICggzqlobGx0XzE0NSA9IC0+IGNvZGVjLmRlY29kZSAnw43DhcOFJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAtMTI5IF1cbiAgICBAZXEgKCDOqWhsbHRfMTQ2ID0gLT4gY29kZWMuZGVjb2RlICfDjcOFw4YnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIC0xMjggXVxuICAgIEBlcSAoIM6paGxsdF8xNDcgPSAtPiBjb2RlYy5kZWNvZGUgJ8OOIScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIC0xMjcgXVxuICAgIEBlcSAoIM6paGxsdF8xNDggPSAtPiBjb2RlYy5kZWNvZGUgJ8OOwrEnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAtMjEgXVxuICAgIEBlcSAoIM6paGxsdF8xNDkgPSAtPiBjb2RlYy5kZWNvZGUgJ8OPJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIC0yMCBdXG4gICAgQGVxICggzqlobGx0XzE1MCA9IC0+IGNvZGVjLmRlY29kZSAnw6InICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgLTEgXVxuICAgIEBlcSAoIM6paGxsdF8xNTEgPSAtPiBjb2RlYy5kZWNvZGUgJ8OjJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIDAgXVxuICAgIEBlcSAoIM6paGxsdF8xNTIgPSAtPiBjb2RlYy5kZWNvZGUgJ8OkJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIDEgXVxuICAgIEBlcSAoIM6paGxsdF8xNTMgPSAtPiBjb2RlYy5kZWNvZGUgJ8O3JyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIDIwIF1cbiAgICBAZXEgKCDOqWhsbHRfMTU0ID0gLT4gY29kZWMuZGVjb2RlICfDuDgnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAyMSBdXG4gICAgQGVxICggzqlobGx0XzE1NSA9IC0+IGNvZGVjLmRlY29kZSAnw7jDhicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIDEyNyBdXG4gICAgQGVxICggzqlobGx0XzE1NiA9IC0+IGNvZGVjLmRlY29kZSAnw7kjIScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgMTI4IF1cbiAgICBAZXEgKCDOqWhsbHRfMTU3ID0gLT4gY29kZWMuZGVjb2RlICfDuSMjJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAxMjkgXVxuICAgIEBlcSAoIM6paGxsdF8xNTggPSAtPiBjb2RlYy5kZWNvZGUgJ8O5w4bDhScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgMTYzODIgXVxuICAgIEBlcSAoIM6paGxsdF8xNTkgPSAtPiBjb2RlYy5kZWNvZGUgJ8O5w4bDhicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgMTYzODMgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZm9yIF8gaW4gWyAxIC4uIDEwIF1cbiAgICAgIHVucGFkZGVkX2xpbmVzID0gc2h1ZmZsZSB1bnBhZGRlZF9saW5lc1xuICAgICAgdW5wYWRkZWRfbGluZXMuc29ydCgpXG4gICAgICByZWFsX2luZGV4ZXMgPSBbXVxuICAgICAgZm9yIHVsaW5lIGluIHVucGFkZGVkX2xpbmVzXG4gICAgICAgICMgaGVscCAnzqlobGx0XzE2MCcsIHVsaW5lXG4gICAgICAgIHJlYWxfaW5kZXhlcy5wdXNoIE51bWJlciB1bGluZS5yZXBsYWNlIC9eLio/XFxzKFswLTldKykkLywgJyQxJ1xuICAgICAgQGVxICggzqlobGx0XzE2MSA9IC0+IGVxdWFscyBleHBlY3RlZF9pbmRleGVzLCByZWFsX2luZGV4ZXMgKSwgdHJ1ZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZm9yIF8gaW4gWyAxIC4uIDEwIF1cbiAgICAgIHBhZGRlZF9saW5lcyA9IHNodWZmbGUgcGFkZGVkX2xpbmVzXG4gICAgICBwYWRkZWRfbGluZXMuc29ydCgpXG4gICAgICByZWFsX2luZGV4ZXMgPSBbXVxuICAgICAgZm9yIHBsaW5lLCBpZHggaW4gcGFkZGVkX2xpbmVzXG4gICAgICAgICMgaGVscCAnzqlobGx0XzE2MicsIHJwciBwbGluZSBpZiBfIGlzIDFcbiAgICAgICAgcmVhbF9pbmRleGVzLnB1c2ggTnVtYmVyIHBsaW5lLnJlcGxhY2UgL14uKj9cXHMoWzAtOV0rKSQvLCAnJDEnXG4gICAgICBAZXEgKCDOqWhsbHRfMTYzID0gLT4gZXF1YWxzIGV4cGVjdGVkX2luZGV4ZXMsIHJlYWxfaW5kZXhlcyApLCB0cnVlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaDEyOF9kZWNvZGU6IC0+XG4gICAgeyBIb2xsZXJpdGgsXG4gICAgICBob2xsZXJpdGhfMTI4LFxuICAgICAgaW50ZXJuYWxzICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHByb2Jlc19hbmRfbWF0Y2hlcnMgPSBbXG4gIyAgICAgICfDhyHDhsOGw4bDhsOGwr87w6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJ1xuICAgICAgWyAnw4chw4bDhsOGw4bDhsK/O8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTk5OSwgICAgICAgICBdLCAnbm51bTrDjSzCvztbLTk5OV18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDhyHDhsOGw4bDhsOGw4Y/w6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtOTksICAgICAgICAgIF0sICdubnVtOsOOLD9bLTk5XXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8OHIcOGw4bDhsOGw4bDhkjDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC05MCwgICAgICAgICAgXSwgJ25udW06w44sSFstOTBdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw5jDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtMTEsICAgICAgICAgIF0sICdudW46w5hbLTExXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDmcOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC0xMCwgICAgICAgICAgXSwgJ251bjrDmVstMTBdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Oaw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTksICAgICAgICAgICBdLCAnbnVuOsOaWy05XXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw5vDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtOCwgICAgICAgICAgIF0sICdudW46w5tbLThdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDnMOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC03LCAgICAgICAgICAgXSwgJ251bjrDnFstN118cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Odw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTYsICAgICAgICAgICBdLCAnbnVuOsOdWy02XXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw57Do8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtNSwgICAgICAgICAgIF0sICdudW46w55bLTVdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDn8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC00LCAgICAgICAgICAgXSwgJ251bjrDn1stNF18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Ogw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTMsICAgICAgICAgICBdLCAnbnVuOsOgWy0zXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw6HDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtMiwgICAgICAgICAgIF0sICdudW46w6FbLTJdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDosOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC0xLCAgICAgICAgICAgXSwgJ251bjrDolstMV18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Ojw4/Do8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMCwgLTIwLCAgICAgICBdLCAnemVybzrDo1swXXxudW46w49bLTIwXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgXVxuICAgICAgWyAnw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAwLCAgICAgICAgICAgIF0sICdwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDo8OjWzBdJywgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDo8O3w6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIDAsIDIwLCAgICAgICAgXSwgJ3plcm86w6NbMF18cHVuOsO3WzIwXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Osw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgOSwgICAgICAgICAgICBdLCAncHVuOsOsWzldfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw63DoMOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAxMCwgLTMsICAgICAgIF0sICdwdW46w61bMTBdfG51bjrDoFstM118cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICBdXG4gICAgICBbICfDrcOhw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIDEwLCAtMiwgICAgICAgXSwgJ3B1bjrDrVsxMF18bnVuOsOhWy0yXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Otw6LDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMTAsIC0xLCAgICAgICBdLCAncHVuOsOtWzEwXXxudW46w6JbLTFdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgXVxuICAgICAgWyAnw63Do8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAxMCwgICAgICAgICAgIF0sICdwdW46w61bMTBdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDrcOkw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIDEwLCAxLCAgICAgICAgXSwgJ3B1bjrDrVsxMF18cHVuOsOkWzFdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Otw63DosOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMTAsIDEwLCAtMSwgICBdLCAncHVuOsOtWzEwXXxwdW46w61bMTBdfG51bjrDolstMV18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDoycsICAgXVxuICAgICAgWyAnw63DrcOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAxMCwgMTAsICAgICAgIF0sICdwdW46w61bMTBdfHB1bjrDrVsxMF18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICBdXG4gICAgICBbICfDrcO3w6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIDEwLCAyMCwgICAgICAgXSwgJ3B1bjrDrVsxMF18cHVuOsO3WzIwXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgIF1cbiAgICAgIFsgJ8O3w6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMjAsICAgICAgICAgICBdLCAncHVuOsO3WzIwXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw7fDrcOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAyMCwgMTAsICAgICAgIF0sICdwdW46w7dbMjBdfHB1bjrDrVsxMF18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICBdXG4gICAgICBbICfDuH7Do8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgOTAsICAgICAgICAgICBdLCAncG51bTrDuCx+WzkwXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDuSomw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyA5MDAsICAgICAgICAgIF0sICdwbnVtOsO5LComWzkwMF18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgXVxuICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY29kZWMgPSBob2xsZXJpdGhfMTI4XG4gICAgZm9yIFsgc29ydGtleSwgaW5kZXhfbWF0Y2hlciwgdW5pdF9tYXRjaGVyLCBdIGluIHByb2Jlc19hbmRfbWF0Y2hlcnNcbiAgICAgIHVuaXRfcmVzdWx0ICAgICA9IFtdXG4gICAgICBpbmRleF9yZXN1bHQgICAgPSBbXVxuICAgICAgZm9yIHVuaXQgaW4gY29kZWMucGFyc2Ugc29ydGtleVxuICAgICAgICB1bml0X3Jlc3VsdC5wdXNoICBoZWxwZXJzLnJwcl91bml0IHVuaXRcbiAgICAgICAgaW5kZXhfcmVzdWx0LnB1c2ggdW5pdC5pbmRleCBpZiB1bml0LmluZGV4P1xuICAgICAgdW5pdF9yZXN1bHQgICA9IHVuaXRfcmVzdWx0LmpvaW4gJ3wnXG4gICAgICAjIGluZm8gJ86paGxsdF8xNjQnLCBmXCIjeyggcnByIHVuaXRfcmVzdWx0ICkgKyAnLCd9Ojw2MGM7ICN7cnByIGluZGV4X3Jlc3VsdH1cIlxuICAgICMgICBAZXEgKCDOqWhsbHRfMTY1ID0gLT4gIHVuaXRfcmVzdWx0ICAgICAgICAgICAgICAgICAgICAgKSwgIHVuaXRfbWF0Y2hlclxuICAgICAgQGVxICggzqlobGx0XzE2NiA9IC0+IGluZGV4X3Jlc3VsdCAgICAgICAgICAgICAgICAgICAgICksIGluZGV4X21hdGNoZXJcbiAgICAgIEBlcSAoIM6paGxsdF8xNjcgPSAtPiBzb3J0a2V5ICksIGNvZGVjLmVuY29kZSBpbmRleF9tYXRjaGVyXG4gICAgICAjIGRlYnVnICfOqWhsbHRfMTY4JywgcnByICggY29kZWMuZW5jb2RlIGluZGV4X21hdGNoZXIgKS5wYWRFbmQgc29ydGtleS5sZW5ndGgsIGNvZGVjLmNmZy5fenB1bnNbIDAgXVxuICAgICAgQGVxICggzqlobGx0XzE2OSA9IC0+IGNvZGVjLmRlY29kZSBzb3J0a2V5ICApLCBpbmRleF9tYXRjaGVyXG4gICAgICAjIGVjaG8gWyBzb3J0a2V5LCBpbmRleF9yZXN1bHQsIHVuaXRfcmVzdWx0LCBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIEBlcSAgICAgKCDOqWhsbHRfMTcwID0gLT4gY29kZWMucGFyc2UgJzUnICAgICAgICAgICksIFsgeyBuYW1lOiAnb3RoZXInLCBsZXR0ZXJzOiAnNScsIG1hbnRpc3NhOiBudWxsLCBpbmRleDogbnVsbCB9IF1cbiAgICAjIEBlcSAgICAgKCDOqWhsbHRfMTcxID0gLT4gY29kZWMucGFyc2UgJ8Okw7bDvCcgICAgICAgICksIFsgeyBuYW1lOiAnb3RoZXInLCBsZXR0ZXJzOiAnw6TDtsO8JywgbWFudGlzc2E6IG51bGwsIGluZGV4OiBudWxsIH0gXVxuICAgICMgQGVxICAgICAoIM6paGxsdF8xNzIgPSAtPiBjb2RlYy5wYXJzZSAnWTkwMMOkw7bDvCcgICAgKSwgWyB7IG5hbWU6ICdwbnVtJywgbGV0dGVyczogJ1knLCBtYW50aXNzYTogJzkwMCcsIGluZGV4OiA5MDAgfSwgeyBuYW1lOiAnb3RoZXInLCBsZXR0ZXJzOiAnw6TDtsO8JywgbWFudGlzc2E6IG51bGwsIGluZGV4OiBudWxsIH0gXVxuICAgICMgQHRocm93cyAoIM6paGxsdF8xNzMgPSAtPiBjb2RlYy5kZWNvZGUgJzUnICAgICAgICAgKSwgL25vdCBhIHZhbGlkIHNvcnRrZXk6IHVuYWJsZSB0byBwYXJzZSAnNScvXG4gICAgIyBAdGhyb3dzICggzqlobGx0XzE3NCA9IC0+IGNvZGVjLmRlY29kZSAnw6TDtsO8JyAgICAgICApLCAvbm90IGEgdmFsaWQgc29ydGtleTogdW5hYmxlIHRvIHBhcnNlICfDpMO2w7wnL1xuICAgICMgQHRocm93cyAoIM6paGxsdF8xNzUgPSAtPiBjb2RlYy5kZWNvZGUgJ8Okw7bDvCcgICAgICAgKSwgL25vdCBhIHZhbGlkIHNvcnRrZXk6IHVuYWJsZSB0byBwYXJzZSAnw7wnIGluICdZOTAww6TDtsO8Jy9cbiAgICAjIEB0aHJvd3MgKCDOqWhsbHRfMTc2ID0gLT4gY29kZWMuZGVjb2RlICdZOTAww6TDtsO8JyAgICksIC9ub3QgYSB2YWxpZCBzb3J0a2V5OiB1bmFibGUgdG8gcGFyc2UgJ1k5MDAnIGluICdZOTAww6TDtsO8Jy9cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgZGVidWcgJ86paGxsdF8xNzcnLCBycHIgY29kZWMuZW5jb2RlIC05MCAjICAgIFsgJ8ONwr87w6PDo8Ojw6PDo8Ojw6MnLCBbIC05OTksICAgICAgICAgXSwgJ25udW06w40swr87Wy05OTldfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgXVxuICAgICMgZGVidWcgJ86paGxsdF8xNzgnLCBycHIgY29kZWMuZGVjb2RlICfDhyHDhsOGw4bDhsOGw4ZIJyAjICAgIFsgJ8ONwr87w6PDo8Ojw6PDo8Ojw6MnLCBbIC05OTksICAgICAgICAgXSwgJ25udW06w40swr87Wy05OTldfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgXVxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoMTBtdnAyX2RlY29kZV91bml0czogLT5cbiAgICAjIyMgTk9URSBhbHNvIHNlZSBjb3JyZXNwb25kaW5nIHRlc3QgaW4gYGhlbmdpc3QtTkcvZGV2L2ludGVybGV4L3NyYy90ZXN0LWhvbGxlcml0aC5jb2ZmZWVgICMjI1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgeyBIb2xsZXJpdGgsXG4gICAgICBob2xsZXJpdGhfMTBtdnAyLFxuICAgICAgaW50ZXJuYWxzICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgICMgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcHJvYmVzX2FuZF9tYXRjaGVycyA9IFtcbiAgICAgIFsgJ0EwMDBOTk5OTk5OTicsIFsgLTk5OSAgICAgICAgXSwgJ25udW06QSwwMDBbLTk5OV18cGFkZGluZzpOTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnQjAwTk5OTk5OTk5OJywgWyAtOTkgICAgICAgICBdLCAnbm51bTpCLDAwWy05OV18cGFkZGluZzpOTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdCMDlOTk5OTk5OTk4nLCBbIC05MCAgICAgICAgIF0sICdubnVtOkIsMDlbLTkwXXxwYWRkaW5nOk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0I4OE5OTk5OTk5OTicsIFsgLTExICAgICAgICAgXSwgJ25udW06Qiw4OFstMTFdfHBhZGRpbmc6Tk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnQjg5Tk5OTk5OTk5OJywgWyAtMTAgICAgICAgICBdLCAnbm51bTpCLDg5Wy0xMF18cGFkZGluZzpOTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdFTk5OTk5OTk5OTk4nLCBbIC05ICAgICAgICAgIF0sICdudW46RVstOV18cGFkZGluZzpOTk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0ZOTk5OTk5OTk5OTicsIFsgLTggICAgICAgICAgXSwgJ251bjpGWy04XXxwYWRkaW5nOk5OTk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnR05OTk5OTk5OTk5OJywgWyAtNyAgICAgICAgICBdLCAnbnVuOkdbLTddfHBhZGRpbmc6Tk5OTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdITk5OTk5OTk5OTk4nLCBbIC02ICAgICAgICAgIF0sICdudW46SFstNl18cGFkZGluZzpOTk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0lOTk5OTk5OTk5OTicsIFsgLTUgICAgICAgICAgXSwgJ251bjpJWy01XXxwYWRkaW5nOk5OTk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnSk5OTk5OTk5OTk5OJywgWyAtNCAgICAgICAgICBdLCAnbnVuOkpbLTRdfHBhZGRpbmc6Tk5OTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdLTk5OTk5OTk5OTk4nLCBbIC0zICAgICAgICAgIF0sICdudW46S1stM118cGFkZGluZzpOTk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0xOTk5OTk5OTk5OTicsIFsgLTIgICAgICAgICAgXSwgJ251bjpMWy0yXXxwYWRkaW5nOk5OTk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnTU5OTk5OTk5OTk5OJywgWyAtMSAgICAgICAgICBdLCAnbnVuOk1bLTFdfHBhZGRpbmc6Tk5OTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdOQjc5Tk5OTk5OTk4nLCBbIDAsIC0yMCAgICAgIF0sICd6ZXJvOk5bMF18bm51bTpCLDc5Wy0yMF18cGFkZGluZzpOTk5OTk5OTicsICAgICAgICAgICAgIF1cbiAgICAgIFsgJ05OTk5OTk5OTk5OTicsIFsgMCAgICAgICAgICAgXSwgJ3BhZGRpbmc6Tk5OTk5OTk5OTk5OWzBdJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnTlkyME5OTk5OTk5OJywgWyAwLCAyMCAgICAgICBdLCAnemVybzpOWzBdfHBudW06WSwyMFsyMF18cGFkZGluZzpOTk5OTk5OTicsICAgICAgICAgICAgICBdXG4gICAgICBbICdXTk5OTk5OTk5OTk4nLCBbIDkgICAgICAgICAgIF0sICdwdW46V1s5XXxwYWRkaW5nOk5OTk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ1kxMEtOTk5OTk5OTicsIFsgMTAsIC0zICAgICAgXSwgJ3BudW06WSwxMFsxMF18bnVuOktbLTNdfHBhZGRpbmc6Tk5OTk5OTk4nLCAgICAgICAgICAgICAgXVxuICAgICAgWyAnWTEwTE5OTk5OTk5OJywgWyAxMCwgLTIgICAgICBdLCAncG51bTpZLDEwWzEwXXxudW46TFstMl18cGFkZGluZzpOTk5OTk5OTicsICAgICAgICAgICAgICBdXG4gICAgICBbICdZMTBNTk5OTk5OTk4nLCBbIDEwLCAtMSAgICAgIF0sICdwbnVtOlksMTBbMTBdfG51bjpNWy0xXXxwYWRkaW5nOk5OTk5OTk5OJywgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ1kxME5OTk5OTk5OTicsIFsgMTAgICAgICAgICAgXSwgJ3BudW06WSwxMFsxMF18cGFkZGluZzpOTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnWTEwT05OTk5OTk5OJywgWyAxMCwgMSAgICAgICBdLCAncG51bTpZLDEwWzEwXXxwdW46T1sxXXxwYWRkaW5nOk5OTk5OTk5OJywgICAgICAgICAgICAgICBdXG4gICAgICBbICdZMTBZMTBNTk5OTk4nLCBbIDEwLCAxMCwgLTEgIF0sICdwbnVtOlksMTBbMTBdfHBudW06WSwxMFsxMF18bnVuOk1bLTFdfHBhZGRpbmc6Tk5OTk4nLCAgIF1cbiAgICAgIFsgJ1kxMFkxME5OTk5OTicsIFsgMTAsIDEwICAgICAgXSwgJ3BudW06WSwxMFsxMF18cG51bTpZLDEwWzEwXXxwYWRkaW5nOk5OTk5OTicsICAgICAgICAgICAgXVxuICAgICAgWyAnWTEwWTIwTk5OTk5OJywgWyAxMCwgMjAgICAgICBdLCAncG51bTpZLDEwWzEwXXxwbnVtOlksMjBbMjBdfHBhZGRpbmc6Tk5OTk5OJywgICAgICAgICAgICBdXG4gICAgICBbICdZMjBOTk5OTk5OTk4nLCBbIDIwICAgICAgICAgIF0sICdwbnVtOlksMjBbMjBdfHBhZGRpbmc6Tk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ1kyMFkxME5OTk5OTicsIFsgMjAsIDEwICAgICAgXSwgJ3BudW06WSwyMFsyMF18cG51bTpZLDEwWzEwXXxwYWRkaW5nOk5OTk5OTicsICAgICAgICAgICAgXVxuICAgICAgWyAnWTkwTk5OTk5OTk5OJywgWyA5MCAgICAgICAgICBdLCAncG51bTpZLDkwWzkwXXxwYWRkaW5nOk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdaOTAwTk5OTk5OTk4nLCBbIDkwMCAgICAgICAgIF0sICdwbnVtOlosOTAwWzkwMF18cGFkZGluZzpOTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ05OTk5OTk5OTk5OTicsIFsgMCAgICAgICAgICAgXSwgJ3BhZGRpbmc6Tk5OTk5OTk5OTk5OWzBdJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnTk5OTk5OTk5OTk5OJywgWyAwICAgICAgICAgICBdLCAncGFkZGluZzpOTk5OTk5OTk5OTk5bMF0nLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdOTk5OTk5OTk5OTk4nLCBbIDAgICAgICAgICAgIF0sICdwYWRkaW5nOk5OTk5OTk5OTk5OTlswXScsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ1kxME5OTk5OTk5OTicsIFsgMTAgICAgICAgICAgXSwgJ3BudW06WSwxMFsxMF18cGFkZGluZzpOTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnS05OTk5OTk5OTk5OJywgWyAtMyAgICAgICAgICBdLCAnbnVuOktbLTNdfHBhZGRpbmc6Tk5OTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAjICdLTk5OTk5OTk5OTk4nXG4gICAgICBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjb2RlYyAgICAgICAgICAgPSBob2xsZXJpdGhfMTBtdnAyXG4gICAgc29ydGtleV9wYWRkZXIgID0gY29kZWMuY2ZnLl96cHVuc19saXN0WyAwIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGZvciBbIHNvcnRrZXksIGluZGV4X21hdGNoZXIsIHVuaXRfbWF0Y2hlciwgXSBpbiBwcm9iZXNfYW5kX21hdGNoZXJzXG4gICAgICB1bml0X3Jlc3VsdCAgICAgPSBbXVxuICAgICAgaW5kZXhfcmVzdWx0ICAgID0gW11cbiAgICAgIGZvciB1bml0IGluIGNvZGVjLnBhcnNlIHNvcnRrZXlcbiAgICAgICAgdW5pdF9yZXN1bHQucHVzaCAgaGVscGVycy5ycHJfdW5pdCB1bml0XG4gICAgICAgIGluZGV4X3Jlc3VsdC5wdXNoIHVuaXQuaW5kZXggaWYgdW5pdC5pbmRleD9cbiAgICAgIHVuaXRfcmVzdWx0ICAgPSB1bml0X3Jlc3VsdC5qb2luICd8J1xuICAgICAgIyBpbmZvICfOqWhsbHRfMTc5JywgZlwiI3soIHJwciB1bml0X3Jlc3VsdCApICsgJywnfTo8NjBjOyAje3JwciBpbmRleF9yZXN1bHR9XCJcbiAgICAgIEBlcSAoIM6paGxsdF8xODAgPSAtPiB1bml0X3Jlc3VsdCAgICAgICAgICAgICAgICAgICAgICApLCB1bml0X21hdGNoZXJcbiAgICAgIEBlcSAoIM6paGxsdF8xODEgPSAtPiBpbmRleF9yZXN1bHQgICAgICAgICAgICAgICAgICAgICApLCBpbmRleF9tYXRjaGVyXG4gICAgICBAZXEgKCDOqWhsbHRfMTgyID0gLT4gY29kZWMuZGVjb2RlIHNvcnRrZXkgICAgICAgICAgICAgKSwgaW5kZXhfbWF0Y2hlclxuICAgICAgQGVxICggzqlobGx0XzE4MyA9IC0+IHNvcnRrZXkgICAgICAgICAgICAgICAgICAgICAgICAgICksIGNvZGVjLmVuY29kZSBpbmRleF9tYXRjaGVyXG4gICAgICAjIGVjaG8gWyBzb3J0a2V5LCBpbmRleF9yZXN1bHQsIHVuaXRfcmVzdWx0LCBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgICAgICggzqlobGx0XzE4NCA9IC0+IGNvZGVjLnBhcnNlICc1JyAgICAgICAgICksIFsgeyBuYW1lOiAnb3RoZXInLCBsZXR0ZXJzOiAnNScsIG1hbnRpc3NhOiBudWxsLCBpbmRleDogbnVsbCB9IF1cbiAgICBAZXEgICAgICggzqlobGx0XzE4NSA9IC0+IGNvZGVjLnBhcnNlICfDpMO2w7wnICAgICAgICksIFsgeyBuYW1lOiAnb3RoZXInLCBsZXR0ZXJzOiAnw6TDtsO8JywgbWFudGlzc2E6IG51bGwsIGluZGV4OiBudWxsIH0gXVxuICAgIEBlcSAgICAgKCDOqWhsbHRfMTg2ID0gLT4gY29kZWMucGFyc2UgJ1k5MDDDpMO2w7wnICAgKSwgWyB7IG5hbWU6ICdwbnVtJywgbGV0dGVyczogJ1knLCBtYW50aXNzYTogJzkwMCcsIGluZGV4OiA5MDAgfSwgeyBuYW1lOiAnb3RoZXInLCBsZXR0ZXJzOiAnw6TDtsO8JywgbWFudGlzc2E6IG51bGwsIGluZGV4OiBudWxsIH0gXVxuICAgIEB0aHJvd3MgKCDOqWhsbHRfMTg3ID0gLT4gY29kZWMuZGVjb2RlICc1JyAgICAgICAgKSwgL25vdCBhIHZhbGlkIHNvcnRrZXk6IHVuYWJsZSB0byBwYXJzZSAnNScvXG4gICAgQHRocm93cyAoIM6paGxsdF8xODggPSAtPiBjb2RlYy5kZWNvZGUgJ8Okw7bDvCcgICAgICApLCAvbm90IGEgdmFsaWQgc29ydGtleTogdW5hYmxlIHRvIHBhcnNlICfDpMO2w7wnL1xuICAgIEB0aHJvd3MgKCDOqWhsbHRfMTg5ID0gLT4gY29kZWMuZGVjb2RlICdZOTAww6TDtsO8JyAgKSwgL25vdCBhIHZhbGlkIHNvcnRrZXk6IHVuYWJsZSB0byBwYXJzZSAnw6TDtsO8JyBpbiAnWTkwMMOkw7bDvCcvXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIGgxMjhiX2RlY29kZTogLT5cbiAgIyAgIHsgSG9sbGVyaXRoLFxuICAjICAgICBob2xsZXJpdGhfMTI4LFxuICAjICAgICBob2xsZXJpdGhfMTBtdnAsXG4gICMgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgIyAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAjICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAjICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgIyAgICMgY29kZWMgPSBob2xsZXJpdGhfMTI4XG4gICMgICBjb2RlYyA9IGhvbGxlcml0aF8xMG12cFxuICAjICAgZGVidWcgJ86paGxsdF8xOTAnLCBycHIgY29kZWMuZW5jb2RlIC0xXG4gICMgICBkZWJ1ZyAnzqlobGx0XzE5MScsIHJwciBjb2RlYy5lbmNvZGUgLTJcbiAgIyAgIG4gPSAgIC0xMDA7IHVyZ2UgJ86paGxsdF8xOTInLCBmXCIjeyBycHIgWyBuLCBdIH06PjEwYzsgI3tycHIgc2sgPSBjb2RlYy5lbmNvZGUgbn06PDVjOyAjeyBycHIgY29kZWMuZGVjb2RlIHNrfTo+MTBjO1wiXG4gICMgICBuID0gICAgLTIxOyB1cmdlICfOqWhsbHRfMTkzJywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAjICAgbiA9ICAgIC0yMDsgdXJnZSAnzqlobGx0XzE5NCcsIGZcIiN7IHJwciBbIG4sIF0gfTo+MTBjOyAje3JwciBzayA9IGNvZGVjLmVuY29kZSBufTo8NWM7ICN7IHJwciBjb2RlYy5kZWNvZGUgc2t9Oj4xMGM7XCJcbiAgIyAgIG4gPSAgICAtMTk7IHVyZ2UgJ86paGxsdF8xOTUnLCBmXCIjeyBycHIgWyBuLCBdIH06PjEwYzsgI3tycHIgc2sgPSBjb2RlYy5lbmNvZGUgbn06PDVjOyAjeyBycHIgY29kZWMuZGVjb2RlIHNrfTo+MTBjO1wiXG4gICMgICBuID0gICAgIC0xOyB1cmdlICfOqWhsbHRfMTk2JywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAjICAgbiA9ICAgICAgMDsgdXJnZSAnzqlobGx0XzE5NycsIGZcIiN7IHJwciBbIG4sIF0gfTo+MTBjOyAje3JwciBzayA9IGNvZGVjLmVuY29kZSBufTo8NWM7ICN7IHJwciBjb2RlYy5kZWNvZGUgc2t9Oj4xMGM7XCJcbiAgIyAgIG4gPSAgICAgIDE7IHVyZ2UgJ86paGxsdF8xOTgnLCBmXCIjeyBycHIgWyBuLCBdIH06PjEwYzsgI3tycHIgc2sgPSBjb2RlYy5lbmNvZGUgbn06PDVjOyAjeyBycHIgY29kZWMuZGVjb2RlIHNrfTo+MTBjO1wiXG4gICMgICBuID0gICAgICAyOyB1cmdlICfOqWhsbHRfMTk5JywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAjICAgbiA9ICAgICAgMzsgdXJnZSAnzqlobGx0XzIwMCcsIGZcIiN7IHJwciBbIG4sIF0gfTo+MTBjOyAje3JwciBzayA9IGNvZGVjLmVuY29kZSBufTo8NWM7ICN7IHJwciBjb2RlYy5kZWNvZGUgc2t9Oj4xMGM7XCJcbiAgIyAgIG4gPSAgICAgMTA7IHVyZ2UgJ86paGxsdF8yMDEnLCBmXCIjeyBycHIgWyBuLCBdIH06PjEwYzsgI3tycHIgc2sgPSBjb2RlYy5lbmNvZGUgbn06PDVjOyAjeyBycHIgY29kZWMuZGVjb2RlIHNrfTo+MTBjO1wiXG4gICMgICBuID0gICAgMTI2OyB1cmdlICfOqWhsbHRfMjAyJywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAjICAgbiA9ICAgIDEyNzsgdXJnZSAnzqlobGx0XzIwMycsIGZcIiN7IHJwciBbIG4sIF0gfTo+MTBjOyAje3JwciBzayA9IGNvZGVjLmVuY29kZSBufTo8NWM7ICN7IHJwciBjb2RlYy5kZWNvZGUgc2t9Oj4xMGM7XCJcbiAgIyAgIG4gPSAgICAxMjg7IHVyZ2UgJ86paGxsdF8yMDQnLCBmXCIjeyBycHIgWyBuLCBdIH06PjEwYzsgI3tycHIgc2sgPSBjb2RlYy5lbmNvZGUgbn06PDVjOyAjeyBycHIgY29kZWMuZGVjb2RlIHNrfTo+MTBjO1wiXG4gICMgICBuID0gICAgMTI5OyB1cmdlICfOqWhsbHRfMjA1JywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAjICAgIyBmb3IgWyBzb3J0a2V5LCBpbmRleF9tYXRjaGVyLCB1bml0X21hdGNoZXIsIF0gaW4gcHJvYmVzX2FuZF9tYXRjaGVyc1xuICAjICAgIyAgIHVuaXRfcmVzdWx0ICAgICA9IFtdXG4gICMgICAjICAgaW5kZXhfcmVzdWx0ICAgID0gW11cbiAgIyAgICMgICBmb3IgdW5pdCBpbiBjb2RlYy5wYXJzZSBzb3J0a2V5XG4gICMgICAjICAgICB1bml0X3Jlc3VsdC5wdXNoICBoZWxwZXJzLnJwcl91bml0IHVuaXRcbiAgIyAgICMgICAgIGluZGV4X3Jlc3VsdC5wdXNoIHVuaXQuaW5kZXggaWYgdW5pdC5pbmRleD9cbiAgIyAgICMgICB1bml0X3Jlc3VsdCAgID0gdW5pdF9yZXN1bHQuam9pbiAnfCdcbiAgIyAgICMgICBpbmZvICfOqWhsbHRfMjA2JywgZlwiI3soIHJwciB1bml0X3Jlc3VsdCApICsgJywnfTo8NjBjOyAje3JwciBpbmRleF9yZXN1bHR9XCJcbiAgIyAgICMgIyAgIEBlcSAoIM6paGxsdF8yMDcgPSAtPiAgdW5pdF9yZXN1bHQgICAgICAgICAgICAgICAgICAgICApLCAgdW5pdF9tYXRjaGVyXG4gICMgICAjICAgQGVxICggzqlobGx0XzIwOCA9IC0+IGluZGV4X3Jlc3VsdCAgICAgICAgICAgICAgICAgICAgICksIGluZGV4X21hdGNoZXJcbiAgIyAgICMgICBAZXEgKCDOqWhsbHRfMjA5ID0gLT4gc29ydGtleSApLCAoIGNvZGVjLmVuY29kZSBpbmRleF9tYXRjaGVyICkucGFkRW5kIHNvcnRrZXkubGVuZ3RoLCBjb2RlYy5jZmcuX3pwdW5zWyAwIF1cbiAgIyAgICMgICBkZWJ1ZyAnzqlobGx0XzIxMCcsIHJwciAoIGNvZGVjLmVuY29kZSBpbmRleF9tYXRjaGVyICkucGFkRW5kIHNvcnRrZXkubGVuZ3RoLCBjb2RlYy5jZmcuX3pwdW5zWyAwIF1cbiAgIyAgICMgICBAZXEgKCDOqWhsbHRfMjExID0gLT4gY29kZWMuZGVjb2RlIHNvcnRrZXkgICksIGluZGV4X21hdGNoZXJcbiAgIyAgICMgICAjIGVjaG8gWyBzb3J0a2V5LCBpbmRleF9yZXN1bHQsIHVuaXRfcmVzdWx0LCBdXG4gICMgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICAjIEBlcSAgICAgKCDOqWhsbHRfMjEyID0gLT4gY29kZWMucGFyc2UgJzUnICAgICAgICAgKSwgWyB7IG5hbWU6ICdvdGhlcicsIGxldHRlcnM6ICc1JywgbWFudGlzc2E6IG51bGwsIGluZGV4OiBudWxsIH0gXVxuICAjICAgIyBAZXEgICAgICggzqlobGx0XzIxMyA9IC0+IGNvZGVjLnBhcnNlICfDpMO2w7wnICAgICAgICksIFsgeyBuYW1lOiAnb3RoZXInLCBsZXR0ZXJzOiAnw6TDtsO8JywgbWFudGlzc2E6IG51bGwsIGluZGV4OiBudWxsIH0gXVxuICAjICAgIyBAZXEgICAgICggzqlobGx0XzIxNCA9IC0+IGNvZGVjLnBhcnNlICdZOTAww6TDtsO8JyAgICksIFsgeyBuYW1lOiAncG51bScsIGxldHRlcnM6ICdZJywgbWFudGlzc2E6ICc5MDAnLCBpbmRleDogOTAwIH0sIHsgbmFtZTogJ290aGVyJywgbGV0dGVyczogJ8Okw7bDvCcsIG1hbnRpc3NhOiBudWxsLCBpbmRleDogbnVsbCB9IF1cbiAgIyAgICMgQHRocm93cyAoIM6paGxsdF8yMTUgPSAtPiBjb2RlYy5kZWNvZGUgJzUnICAgICAgICApLCAvbm90IGEgdmFsaWQgc29ydGtleTogdW5hYmxlIHRvIHBhcnNlICc1Jy9cbiAgIyAgICMgQHRocm93cyAoIM6paGxsdF8yMTYgPSAtPiBjb2RlYy5kZWNvZGUgJ8Okw7bDvCcgICAgICApLCAvbm90IGEgdmFsaWQgc29ydGtleTogdW5hYmxlIHRvIHBhcnNlICfDpMO2w7wnL1xuICAjICAgIyBAdGhyb3dzICggzqlobGx0XzIxNyA9IC0+IGNvZGVjLmRlY29kZSAnWTkwMMOkw7bDvCcgICksIC9ub3QgYSB2YWxpZCBzb3J0a2V5OiB1bmFibGUgdG8gcGFyc2UgJ8Okw7bDvCcgaW4gJ1k5MDDDpMO2w7wnL1xuICAjICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgIyAgIHJldHVybiBudWxsXG5cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHR5cGVzOiAtPlxuICAgIHsgaW50ZXJuYWxzLFxuICAgICAgSG9sbGVyaXRoX3R5cGVzcGFjZSxcbiAgICAgIENGRywgICAgICAgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgvbGliL3R5cGVzJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsICB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgIHsgcGljaywgICAgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9waWNrKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBUID0gbmV3IEhvbGxlcml0aF90eXBlc3BhY2UoKVxuICAgICAgQGVxICggzqlobGx0XzIxOCA9IC0+IFRbQ0ZHXS5ibGFuayAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnXFx4MjAnXG4gICAgICBAZXEgKCDOqWhsbHRfMjE5ID0gLT4gVFtDRkddLmJsYW5rX3NwbGl0dGVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC8oPzpcXHgyMCkrL2d2XG4gICAgICBAZXEgKCDOqWhsbHRfMjIwID0gLT4gVFtDRkddLmJsYW5rX3NwbGl0dGVyLnVuaWNvZGVTZXRzICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paGxsdF8yMjEgPSAtPiBUW0NGR10uYmxhbmtfc3BsaXR0ZXIuZ2xvYmFsICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlobGx0XzIyMiA9IC0+ICdhICAgZyAgeiAgJy5yZXBsYWNlIFRbQ0ZHXS5ibGFua19zcGxpdHRlciwgJ8O8JyAgKSwgJ2HDvGfDvHrDvCdcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgVCA9IG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlIHsgYmxhbms6ICcjJywgfVxuICAgICAgQGVxICggzqlobGx0XzIyMyA9IC0+IFRbQ0ZHXS5ibGFuayAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnIydcbiAgICAgIEBlcSAoIM6paGxsdF8yMjQgPSAtPiBUW0NGR10uYmxhbmtfc3BsaXR0ZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgLyg/OlxceDIzKSsvZ3ZcbiAgICAgIEBlcSAoIM6paGxsdF8yMjUgPSAtPiBUW0NGR10uYmxhbmtfc3BsaXR0ZXIudW5pY29kZVNldHMgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlobGx0XzIyNiA9IC0+IFRbQ0ZHXS5ibGFua19zcGxpdHRlci5nbG9iYWwgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWhsbHRfMjI3ID0gLT4gJ2EjIyNnIyN6IyMnLnJlcGxhY2UgVFtDRkddLmJsYW5rX3NwbGl0dGVyLCAnw7wnICApLCAnYcO8Z8O8esO8J1xuICAgICAgQGVxICggzqlobGx0XzIyOCA9IC0+IFQubWFnbmlmaWVycy5pc2EgJ0FCQyBYWVonICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlobGx0XzIyOSA9IC0+IFQubWFnbmlmaWVycy5pc2EgJ0FCQyNYWVonICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWhsbHRfMjMwID0gLT4gVC5ibGFuay5pc2EgJyAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWhsbHRfMjMxID0gLT4gVC5ibGFuay5pc2EgJyMnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paGxsdF8yMzIgPSAtPiBULmJsYW5rLmlzYSBUW0NGR10uYmxhbmsgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIFQgPSBuZXcgSG9sbGVyaXRoX3R5cGVzcGFjZSgpXG4gICAgQGVxICggzqlobGx0XzIzMyA9IC0+IFQubm9uZW1wdHlfdGV4dC5pc2EgNCAgICAgICAgICAgICksIGZhbHNlXG4gICAgQGVxICggzqlobGx0XzIzNCA9IC0+IFQubm9uZW1wdHlfdGV4dC5pc2EgZmFsc2UgICAgICAgICksIGZhbHNlXG4gICAgQGVxICggzqlobGx0XzIzNSA9IC0+IFQubm9uZW1wdHlfdGV4dC5pc2EgJycgICAgICAgICAgICksIGZhbHNlXG4gICAgQGVxICggzqlobGx0XzIzNiA9IC0+IFQubm9uZW1wdHlfdGV4dC5pc2EgJ3llcycgICAgICAgICksIHRydWVcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAoIM6paGxsdF8yMzcgPSAtPiBULmluY3JlbWVudGFsX3RleHQuaXNhICd5ZXMnICAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6paGxsdF8yMzggPSAtPiBULmRlY3JlbWVudGFsX3RleHQuaXNhICd5ZXMnICAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6paGxsdF8yMzkgPSAtPiBULmluY3JlbWVudGFsX3RleHQuZGF0YSAgICAgICAgICApLCB7IGNocnM6IFsgJ3knLCAnZScsICdzJyBdLCBmYWlsOiB7IHg6ICd5ZXMnLCBpZHg6IDEsIHBydl9jaHI6ICd5JywgY2hyOiAnZScgfSB9XG4gICAgQGVxICggzqlobGx0XzI0MCA9IC0+IFQuaW5jcmVtZW50YWxfdGV4dC5pc2EgJ2FiY2RlZnonICksIHRydWVcbiAgICBAZXEgKCDOqWhsbHRfMjQxID0gLT4gVC5kZWNyZW1lbnRhbF90ZXh0LmlzYSAnYWJjZGVmeicgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjQyID0gLT4gVC5pbmNyZW1lbnRhbF90ZXh0LmRhdGEgICAgICAgICAgKSwgeyBjaHJzOiBbICdhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZicsICd6JywgXSwgfVxuICAgIEBlcSAoIM6paGxsdF8yNDMgPSAtPiBULmRlY3JlbWVudGFsX3RleHQuZGF0YSAgICAgICAgICApLCB7IGNocnM6IFsgJ2EnLCAnYicsICdjJywgJ2QnLCAnZScsICdmJywgJ3onIF0sIGZhaWw6IHsgeDogJ2FiY2RlZnonLCBpZHg6IDEsIHBydl9jaHI6ICdhJywgY2hyOiAnYicgfSB9XG4gICAgQGVxICggzqlobGx0XzI0NCA9IC0+IFQuaW5jcmVtZW50YWxfdGV4dC5pc2EgJ2FiYzAnICAgICksIGZhbHNlXG4gICAgQGVxICggzqlobGx0XzI0NSA9IC0+IFQuaW5jcmVtZW50YWxfdGV4dC5kYXRhICAgICAgICAgICksIHsgY2hyczogWyAnYScsICdiJywgJ2MnLCAnMCcsIF0sIGZhaWw6IHsgeDogJ2FiYzAnLCBpZHg6IDMsIHBydl9jaHI6ICdjJywgY2hyOiAnMCcgfSB9XG4gICAgQGVxICggzqlobGx0XzI0NiA9IC0+IFQuZGVjcmVtZW50YWxfdGV4dC5pc2EgJ2NiYScgICAgICksIHRydWVcbiAgICBAZXEgKCDOqWhsbHRfMjQ3ID0gLT4gVC5kZWNyZW1lbnRhbF90ZXh0LmRhdGEgICAgICAgICAgKSwgeyBjaHJzOiBbICdjJywgJ2InLCAnYScsIF0sIH1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAoIM6paGxsdF8yNDggPSAtPiBULm1hZ25pZmllcnMuaXNhICcnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgQGVxICggzqlobGx0XzI0OSA9IC0+IFQubWFnbmlmaWVycy5kYXRhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgeyBtZXNzYWdlOiBcImV4cGVjdGVkIGEgbWFnbmlmaWVyLCBnb3QgYW4gZW1wdHkgdGV4dFwiLCB9XG4gICAgQGVxICggzqlobGx0XzI1MCA9IC0+IFQubWFnbmlmaWVycy5pc2EgJ0FCQyBYWVonICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgIEBlcSAoIM6paGxsdF8yNTEgPSAtPiBwaWNrIFQubWFnbmlmaWVycy5kYXRhLCBcXFxuICAgICAgICAgICAgICAgICAgICAgICBbICdubWFnX2NocnNfcmV2ZXJzZWQnLCAnX3BtYWdfbGlzdCcsICdfbm1hZycsICdfcG1hZycsIF0gKSwgeyBubWFnX2NocnNfcmV2ZXJzZWQ6IFsgJ0EnLCAnQicsICdDJyBdLCBfcG1hZ19saXN0OiBbICcgJywgJ1gnLCAnWScsICdaJyBdLCBfbm1hZzogJyBDQkEnLCBfcG1hZzogJyBYWVonIH1cbiAgICBAZXEgKCDOqWhsbHRfMjUyID0gLT4gT2JqZWN0LmlzRnJvemVuIFQubWFnbmlmaWVycy5kYXRhLm5tYWdfY2hyc19yZXZlcnNlZCApLCB0cnVlXG4gICAgQGVxICggzqlobGx0XzI1MyA9IC0+IE9iamVjdC5pc0Zyb3plbiBULm1hZ25pZmllcnMuZGF0YS5fcG1hZ19saXN0ICAgICAgICAgICksIHRydWVcbiAgICBAZXEgKCDOqWhsbHRfMjU0ID0gLT4gVC5tYWduaWZpZXJzLmlzYSAnQUJDXFxuWFlaJyAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjU1ID0gLT4gVC5tYWduaWZpZXJzLmlzYSAnQUJDXFx0WFlaJyAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjU2ID0gLT4gVC5tYWduaWZpZXJzLmlzYSAnQUJDICAgICAgICAgICAgIFhZWicgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgQGVxICggzqlobGx0XzI1NyA9IC0+IFQubWFnbmlmaWVycy5pc2EgJ0FCQyBEWCBZWicgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjU4ID0gLT4gVC5tYWduaWZpZXJzLmlzYSAnQUJEIENYWVonICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqlobGx0XzI1OSA9IC0+IFQudW5pbGl0ZXJhbHMuaXNhIG51bGwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjYwID0gLT4gVC51bmlsaXRlcmFscy5pc2EgJycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6paGxsdF8yNjEgPSAtPiBULnVuaWxpdGVyYWxzLmlzYSAnVkJBJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgQGVxICggzqlobGx0XzI2MiA9IC0+IFQudW5pbGl0ZXJhbHMuaXNhICdFRkdISUpLTE0gTk9QUVJTVFVWVycgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjYzID0gLT4gVC51bmlsaXRlcmFscy5pc2EgJ0VGR0hJSktMTSBOIE9QUVJTVFVWVycgICAgICAgICAgICApLCB0cnVlXG4gICAgQGVxICggzqlobGx0XzI2NCA9IC0+IFQudW5pbGl0ZXJhbHMuZGF0YSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgeyBfbnVuczogJ0VGR0hJSktMTScsIF96cHVuczogJ05PUFFSU1RVVlcnLCBfbnVuc19saXN0OiBbICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSicsICdLJywgJ0wnLCAnTScgXSwgX3pwdW5zX2xpc3Q6IFsgJ04nLCAnTycsICdQJywgJ1EnLCAnUicsICdTJywgJ1QnLCAnVScsICdWJywgJ1cnIF0gfVxuICAgIEBlcSAoIM6paGxsdF8yNjUgPSAtPiBULnVuaWxpdGVyYWxzLmlzYSAnTicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICBAZXEgKCDOqWhsbHRfMjY2ID0gLT4gVC51bmlsaXRlcmFscy5kYXRhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB7IF9udW5zOiAnJywgX3pwdW5zOiAnTicsIF9udW5zX2xpc3Q6IFtdLCBfenB1bnNfbGlzdDogWyAnTicgXSB9XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAdGhyb3dzICggzqlobGx0XzI2NyA9IC0+IFQuZGlnaXRzZXQudmFsaWRhdGUgbnVsbCAgICAgICAgICAgICAgICAgICAgICAgICApLCAvbm90IGEgdmFsaWQgZGlnaXRzZXQvXG4gICAgQHRocm93cyAoIM6paGxsdF8yNjggPSAtPiBULmRpZ2l0c2V0LnZhbGlkYXRlICcnICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgL25vdCBhIHZhbGlkIGRpZ2l0c2V0L1xuICAgIEB0aHJvd3MgKCDOqWhsbHRfMjY5ID0gLT4gVC5kaWdpdHNldC52YWxpZGF0ZSAnYScgICAgICAgICAgICAgICAgICAgICAgICAgICksIC9ub3QgYSB2YWxpZCBkaWdpdHNldC9cbiAgICBAZXEgICAgICggzqlobGx0XzI3MCA9IC0+IFQuZGlnaXRzZXQudmFsaWRhdGUgJ2FiJyAgICAgICAgICAgICAgICAgICAgICAgICApLCAnYWInXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAdGhyb3dzICggzqlobGx0XzI3MSA9IC0+ICAgbmV3IEhvbGxlcml0aF90eXBlc3BhY2UgeyBibGFuazogbnVsbCB9ICAgICAgICAgICAgICAgICAgICAgICAgKSwgL25vdCBhIHZhbGlkIGJsYW5rL1xuICAgIEB0aHJvd3MgKCDOqWhsbHRfMjcyID0gLT4gICBuZXcgSG9sbGVyaXRoX3R5cGVzcGFjZSB7IGJsYW5rOiAnJyAgIH0gICAgICAgICAgICAgICAgICAgICAgICApLCAvbm90IGEgdmFsaWQgYmxhbmsvXG4gICAgQHRocm93cyAoIM6paGxsdF8yNzMgPSAtPiAgIG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlIHsgYmxhbms6ICctLScgfSAgICAgICAgICAgICAgICAgICAgICAgICksIC9ub3QgYSB2YWxpZCBibGFuay9cbiAgICBAdGhyb3dzICggzqlobGx0XzI3NCA9IC0+ICggbmV3IEhvbGxlcml0aF90eXBlc3BhY2UgeyBibGFuazogbnVsbCB9ICkuYmxhbmsudmFsaWRhdGUgbnVsbCAgKSwgL25vdCBhIHZhbGlkIGJsYW5rL1xuICAgIEB0aHJvd3MgKCDOqWhsbHRfMjc1ID0gLT4gKCBuZXcgSG9sbGVyaXRoX3R5cGVzcGFjZSB7IGJsYW5rOiAnJyAgIH0gKS5ibGFuay52YWxpZGF0ZSAnJyAgICApLCAvbm90IGEgdmFsaWQgYmxhbmsvXG4gICAgQHRocm93cyAoIM6paGxsdF8yNzYgPSAtPiAoIG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlIHsgYmxhbms6ICctLScgfSApLmJsYW5rLnZhbGlkYXRlICctLScgICksIC9ub3QgYSB2YWxpZCBibGFuay9cbiAgICBAZXEgICAgICggzqlobGx0XzI3NyA9IC0+ICggbmV3IEhvbGxlcml0aF90eXBlc3BhY2UgeyBibGFuazogJy0nICB9ICkuYmxhbmsudmFsaWRhdGUgJy0nICAgKSwgJy0nXG4gICAgQGVxICAgICAoIM6paGxsdF8yNzggPSAtPiAoIG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlIHsgYmxhbms6ICcgJyAgfSApLmJsYW5rLnZhbGlkYXRlICcgJyAgICksICcgJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHZhbGlkYXRlX2FuZF9jb21waWxlX2NmZ19nZW5lcmFsOiAtPlxuICAgIHsgaW50ZXJuYWxzLFxuICAgICAgSG9sbGVyaXRoLCAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IEhvbGxlcml0aF90eXBlc3BhY2UsXG4gICAgICBDRkcsICAgICAgICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoL2xpYi90eXBlcydcbiAgICAjIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAjIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgeyBpc0Zyb3plbjogaXNfZnJvemVuLCAgICAgICAgfSA9IE9iamVjdFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyMjIHRlc3RpbmcgYSBnZW5lcmFsIGFzc3VtcHRpb24gc28gd2UgZG9uJ3QgbWVzcyB1cDogIyMjXG4gICAgQGVxICggzqlobGx0XzI3OSA9IC0+ICggTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgLSAxICkgPT0gLSggTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVIgKyAxICkgKSwgdHJ1ZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgICMgVCA9IG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlKClcbiAgICAgIEB0aHJvd3MgKCDOqWhsbHRfMjgwID0gLT4gSG9sbGVyaXRoLnZhbGlkYXRlX2FuZF9jb21waWxlX2NmZyB7fSAgICAgICAgICAgICAgICAgICksIC9ub3QgYSB2YWxpZCBkaWdpdHNldC9cbiAgICAgIEB0aHJvd3MgKCDOqWhsbHRfMjgxID0gLT4gSG9sbGVyaXRoLnZhbGlkYXRlX2FuZF9jb21waWxlX2NmZyB7IGRpZ2l0c2V0OiAnJyAgICB9ICksIC9ub3QgYSB2YWxpZCBkaWdpdHNldC9cbiAgICAgIEB0aHJvd3MgKCDOqWhsbHRfMjgyID0gLT4gSG9sbGVyaXRoLnZhbGlkYXRlX2FuZF9jb21waWxlX2NmZyB7IGRpZ2l0c2V0OiAnYScgICB9ICksIC9ub3QgYSB2YWxpZCBkaWdpdHNldC9cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnXzEwOiAtPlxuICAgIHsgaW50ZXJuYWxzLFxuICAgICAgSG9sbGVyaXRoLCAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IEhvbGxlcml0aF90eXBlc3BhY2UsXG4gICAgICBDRkcsICAgICAgICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoL2xpYi90eXBlcydcbiAgICAjIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAjIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgeyBpc0Zyb3plbjogaXNfZnJvemVuLCAgICAgICAgfSA9IE9iamVjdFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2ZnXzEwID1cbiAgICAgIGJsYW5rOiAgICAgICAgJyAnICAgICAgICAgICAgICAgICAgICAgICAjIHNlcGFyYXRvciB1c2VkIGluIGBtYWduaWZpZXJzYCBhbmQgYHVuaWxpdGVyYWxzYFxuICAgICAgZGlnaXRzZXQ6ICAgICAnMDEyMzQ1Njc4OScgICAgICAgICAgICAgICMgZGlnaXRzOyBsZW5ndGggb2YgYGRpZ2l0c2V0YCBpcyB0aGUgYF9iYXNlYFxuICAgICAgbWFnbmlmaWVyczogICAnQUJDIFhZWicgICAgICAgICAgICAgICAgICNcbiAgICAgIHVuaWxpdGVyYWxzOiAgJ0ZHSElKS0xNIE4gT1BRUlNUVVYnICAgICAjIG5lZ2F0aXZlIHVuaWxpdGVyYWxzLCBibGFuaywgemVybyB1bmlsaXRlcmFsLCBibGFuaywgcG9zaXRpdmUgdW5pbGl0ZXJhbHNcbiAgICAgIGRpbWVuc2lvbjogICAgMyAgICAgICAgICAgICAgICAgICAgICAgICAjIG51bWJlciBvZiBpbmRpY2VzIHN1cHBvcnRlZFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHsgY2ZnLCB9ID0gSG9sbGVyaXRoLnZhbGlkYXRlX2FuZF9jb21waWxlX2NmZyBjZmdfMTBcbiAgICAgIEBlcSAoIM6paGxsdF8yODMgPSAtPiBjZmcuYmxhbmsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyAnXG4gICAgICBAZXEgKCDOqWhsbHRfMjg0ID0gLT4gY2ZnLmRpZ2l0c2V0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcwMTIzNDU2Nzg5J1xuICAgICAgQGVxICggzqlobGx0XzI4NSA9IC0+IGNmZy5fZGlnaXRzX2xpc3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBBcnJheS5mcm9tICcwMTIzNDU2Nzg5J1xuICAgICAgQGVxICggzqlobGx0XzI4NiA9IC0+IGNmZy5fbm92YSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAoIEFycmF5LmZyb20gY2ZnLmRpZ2l0c2V0ICkuYXQgLTFcbiAgICAgIEBlcSAoIM6paGxsdF8yODcgPSAtPiBjZmcuX2xlYWRpbmdfbm92YXNfcmUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgLy8vIF4gKD86IDkgKSogKD89IC4rICQgKSAvLy9ndlxuICAgICAgQGVxICggzqlobGx0XzI4OCA9IC0+IGlzX2Zyb3plbiBjZmcuX2RpZ2l0c19saXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWhsbHRfMjg5ID0gLT4gY2ZnLl9iYXNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDEwXG4gICAgICBAZXEgKCDOqWhsbHRfMjkwID0gLT4gY2ZnLm1hZ25pZmllcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdBQkMgWFlaJ1xuICAgICAgQGVxICggzqlobGx0XzI5MSA9IC0+IGNmZy5fbm1hZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyBDQkEnXG4gICAgICBAZXEgKCDOqWhsbHRfMjkyID0gLT4gY2ZnLl9wbWFnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnIFhZWidcbiAgICAgIEBlcSAoIM6paGxsdF8yOTMgPSAtPiBjZmcuX25tYWdfbGlzdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgQXJyYXkuZnJvbSAnIENCQSdcbiAgICAgIEBlcSAoIM6paGxsdF8yOTQgPSAtPiBjZmcuX3BtYWdfbGlzdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgQXJyYXkuZnJvbSAnIFhZWidcbiAgICAgIEBlcSAoIM6paGxsdF8yOTUgPSAtPiBjZmcudW5pbGl0ZXJhbHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ0ZHSElKS0xNIE4gT1BRUlNUVVYnXG4gICAgICBAZXEgKCDOqWhsbHRfMjk2ID0gLT4gY2ZnLl9udW5zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdGR0hJSktMTSdcbiAgICAgIEBlcSAoIM6paGxsdF8yOTcgPSAtPiBjZmcuX3pwdW5zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ05PUFFSU1RVVidcbiAgICAgIEBlcSAoIM6paGxsdF8yOTggPSAtPiBjZmcuX21heF96cHVuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDhcbiAgICAgIEBlcSAoIM6paGxsdF8yOTkgPSAtPiBjZmcuX21pbl9udW4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgLThcbiAgICAgIEBlcSAoIM6paGxsdF8zMDAgPSAtPiBjZmcuX251bnNfbGlzdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAnRicsICdHJywgJ0gnLCAnSScsICdKJywgJ0snLCAnTCcsICdNJyBdLFxuICAgICAgQGVxICggzqlobGx0XzMwMSA9IC0+IGNmZy5fenB1bnNfbGlzdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbICdOJywgJ08nLCAnUCcsICdRJywgJ1InLCAnUycsICdUJywgJ1UnLCAnVicsIF1cbiAgICAgIEBlcSAoIM6paGxsdF8zMDIgPSAtPiBjZmcuZGltZW5zaW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgM1xuICAgICAgQGVxICggzqlobGx0XzMwMyA9IC0+ICsoICggY2ZnLl9iYXNlICoqICggY2ZnLl9wbWFnX2xpc3QubGVuZ3RoIC0gMSApICApIC0gMSApICksICs5OTlcbiAgICAgIEBlcSAoIM6paGxsdF8zMDQgPSAtPiAtKCAoIGNmZy5fYmFzZSAqKiAoIGNmZy5fbm1hZ19saXN0Lmxlbmd0aCAtIDEgKSAgKSAtIDEgKSApLCAtOTk5XG4gICAgICBAZXEgKCDOqWhsbHRfMzA1ID0gLT4gY2ZnLl9tYXhfaW50ZWdlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICs5OTlcbiAgICAgIEBlcSAoIM6paGxsdF8zMDYgPSAtPiBjZmcuX21pbl9pbnRlZ2VyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgLTk5OVxuICAgICAgQGVxICggzqlobGx0XzMwNyA9IC0+IGNmZy5kaWdpdHNfcGVyX2lkeCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgM1xuICAgICAgQGVxICggzqlobGx0XzMwOCA9IC0+IGNmZy5fYWxwaGFiZXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnMDEyMzQ1Njc4OUFCQ0ZHSElKS0xNTk9QUVJTVFVWWFlaJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBoID0gbmV3IEhvbGxlcml0aCBjZmdfMTBcbiAgICAgIEBlcSAoIM6paGxsdF8zMDkgPSAtPiBoLmNmZyApLCBjZmdcbiAgICAgICMgQGVxICggzqlobGx0XzMxMCA9IC0+IGguZW5jb2RlICAtOTk4ICksIG51bGxcbiAgICAgIEBlcSAoIM6paGxsdF8zMTEgPSAtPiBoLmVuY29kZSAgIC0xMiApLCAnQjg3J1xuICAgICAgQGVxICggzqlobGx0XzMxMiA9IC0+IGguZW5jb2RlICAgLTExICksICdCODgnXG4gICAgICBAZXEgKCDOqWhsbHRfMzEzID0gLT4gaC5lbmNvZGUgICAtMTAgKSwgJ0I4OSdcbiAgICAgIEBlcSAoIM6paGxsdF8zMTQgPSAtPiBoLmVuY29kZSAgICAtOSApLCAnQzAnXG4gICAgICBAZXEgKCDOqWhsbHRfMzE1ID0gLT4gaC5lbmNvZGUgICAgLTggKSwgJ0YnXG4gICAgICBAZXEgKCDOqWhsbHRfMzE2ID0gLT4gaC5lbmNvZGUgICAgLTIgKSwgJ0wnXG4gICAgICBAZXEgKCDOqWhsbHRfMzE3ID0gLT4gaC5lbmNvZGUgICAgLTEgKSwgJ00nXG4gICAgICBAZXEgKCDOqWhsbHRfMzE4ID0gLT4gaC5lbmNvZGUgICAgIDAgKSwgJ04nXG4gICAgICBAZXEgKCDOqWhsbHRfMzE5ID0gLT4gaC5lbmNvZGUgICAgKzEgKSwgJ08nXG4gICAgICBAZXEgKCDOqWhsbHRfMzIwID0gLT4gaC5lbmNvZGUgICAgKzIgKSwgJ1AnXG4gICAgICBAZXEgKCDOqWhsbHRfMzIxID0gLT4gaC5lbmNvZGUgICAgKzggKSwgJ1YnXG4gICAgICBAZXEgKCDOqWhsbHRfMzIyID0gLT4gaC5lbmNvZGUgICAgKzkgKSwgJ1g5J1xuICAgICAgQGVxICggzqlobGx0XzMyMyA9IC0+IGguZW5jb2RlICAgKzEwICksICdZMTAnXG4gICAgICBAZXEgKCDOqWhsbHRfMzI0ID0gLT4gaC5lbmNvZGUgICArMTEgKSwgJ1kxMSdcbiAgICAgIEBlcSAoIM6paGxsdF8zMjUgPSAtPiBoLmVuY29kZSAgICsxMiApLCAnWTEyJ1xuICAgICAgQGVxICggzqlobGx0XzMyNiA9IC0+IGguZW5jb2RlICArOTk4ICksICdaOTk4J1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB2YWxpZGF0ZV9hbmRfY29tcGlsZV9jZmdfMTBfbm9fdW5pbHRlcmFsczogLT5cbiAgICB7IGludGVybmFscyxcbiAgICAgIEhvbGxlcml0aCwgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyBIb2xsZXJpdGhfdHlwZXNwYWNlLFxuICAgICAgQ0ZHLCAgICAgICAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aC9saWIvdHlwZXMnXG4gICAgIyB7IHR5cGVfb2YsICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgIyB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsICB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgIHsgaXNGcm96ZW46IGlzX2Zyb3plbiwgICAgICAgIH0gPSBPYmplY3RcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNmZ18xMF9ub191bmlsaXRlcmFscyA9XG4gICAgICBibGFuazogICAgICAgICcgJyAgICAgICAgICAgICAgICAgICAgICAgIyBzZXBhcmF0b3IgdXNlZCBpbiBgbWFnbmlmaWVyc2AgYW5kIGB1bmlsaXRlcmFsc2BcbiAgICAgIGRpZ2l0c2V0OiAgICAgJzAxMjM0NTY3ODknICAgICAgICAgICAgICAjIGRpZ2l0czsgbGVuZ3RoIG9mIGBkaWdpdHNldGAgaXMgdGhlIGBfYmFzZWBcbiAgICAgIG1hZ25pZmllcnM6ICAgJ0FCQyBYWVonICAgICAgICAgICAgICAgICAjXG4gICAgICB1bmlsaXRlcmFsczogICdOJyAgICAgICAgICAgICAgICAgICAgICAgIyBvbmx5IGhhcyB6ZXJvIHVuaWxpdGVyYWxcbiAgICAgIGRpbWVuc2lvbjogICAgMyAgICAgICAgICAgICAgICAgICAgICAgICAjIG51bWJlciBvZiBpbmRpY2VzIHN1cHBvcnRlZFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHsgY2ZnLCB9ID0gSG9sbGVyaXRoLnZhbGlkYXRlX2FuZF9jb21waWxlX2NmZyBjZmdfMTBfbm9fdW5pbGl0ZXJhbHNcbiAgICAgIEBlcSAoIM6paGxsdF8zMjcgPSAtPiBjZmcuYmxhbmsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcgJ1xuICAgICAgQGVxICggzqlobGx0XzMyOCA9IC0+IGNmZy5kaWdpdHNldCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJzAxMjM0NTY3ODknXG4gICAgICBAZXEgKCDOqWhsbHRfMzI5ID0gLT4gY2ZnLl9kaWdpdHNfbGlzdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBBcnJheS5mcm9tICcwMTIzNDU2Nzg5J1xuICAgICAgQGVxICggzqlobGx0XzMzMCA9IC0+IGNmZy5fbm92YSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgKCBBcnJheS5mcm9tIGNmZy5kaWdpdHNldCApLmF0IC0xXG4gICAgICBAZXEgKCDOqWhsbHRfMzMxID0gLT4gY2ZnLl9sZWFkaW5nX25vdmFzX3JlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvLy8gXiAoPzogOSApKiAoPz0gLisgJCApIC8vL2d2XG4gICAgICBAZXEgKCDOqWhsbHRfMzMyID0gLT4gaXNfZnJvemVuIGNmZy5fZGlnaXRzX2xpc3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWhsbHRfMzMzID0gLT4gY2ZnLl9iYXNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAxMFxuICAgICAgQGVxICggzqlobGx0XzMzNCA9IC0+IGNmZy5tYWduaWZpZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ0FCQyBYWVonXG4gICAgICBAZXEgKCDOqWhsbHRfMzM1ID0gLT4gY2ZnLl9ubWFnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnIENCQSdcbiAgICAgIEBlcSAoIM6paGxsdF8zMzYgPSAtPiBjZmcuX3BtYWcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcgWFlaJ1xuICAgICAgQGVxICggzqlobGx0XzMzNyA9IC0+IGNmZy5fbm1hZ19saXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgQXJyYXkuZnJvbSAnIENCQSdcbiAgICAgIEBlcSAoIM6paGxsdF8zMzggPSAtPiBjZmcuX3BtYWdfbGlzdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIEFycmF5LmZyb20gJyBYWVonXG4gICAgICBAZXEgKCDOqWhsbHRfMzM5ID0gLT4gY2ZnLnVuaWxpdGVyYWxzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnTidcbiAgICAgIEBlcSAoIM6paGxsdF8zNDAgPSAtPiBjZmcuX251bnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcnXG4gICAgICBAZXEgKCDOqWhsbHRfMzQxID0gLT4gY2ZnLl96cHVucyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnTidcbiAgICAgIEBlcSAoIM6paGxsdF8zNDIgPSAtPiBjZmcuX251bnNfbGlzdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFtdXG4gICAgICBAZXEgKCDOqWhsbHRfMzQzID0gLT4gY2ZnLl96cHVuc19saXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbICdOJywgXVxuICAgICAgQGVxICggzqlobGx0XzM0NCA9IC0+IGNmZy5kaW1lbnNpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgM1xuICAgICAgQGVxICggzqlobGx0XzM0NSA9IC0+ICsoICggY2ZnLl9iYXNlICoqICggY2ZnLl9wbWFnX2xpc3QubGVuZ3RoIC0gMSApICApIC0gMSApICAgKSwgKzk5OVxuICAgICAgQGVxICggzqlobGx0XzM0NiA9IC0+IC0oICggY2ZnLl9iYXNlICoqICggY2ZnLl9ubWFnX2xpc3QubGVuZ3RoIC0gMSApICApIC0gMSApICAgKSwgLTk5OVxuICAgICAgQGVxICggzqlobGx0XzM0NyA9IC0+IGNmZy5fbWF4X2ludGVnZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgKzk5OVxuICAgICAgQGVxICggzqlobGx0XzM0OCA9IC0+IGNmZy5fbWluX2ludGVnZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgLTk5OVxuICAgICAgQGVxICggzqlobGx0XzM0OSA9IC0+IGNmZy5kaWdpdHNfcGVyX2lkeCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgM1xuICAgICAgQGVxICggzqlobGx0XzM1MCA9IC0+IGNmZy5fYWxwaGFiZXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJzAxMjM0NTY3ODlBQkNOWFlaJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBoID0gbmV3IEhvbGxlcml0aCBjZmdfMTBfbm9fdW5pbGl0ZXJhbHNcbiAgICAgIEBlcSAoIM6paGxsdF8zNTEgPSAtPiBoLmNmZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGNmZ1xuICAgICAgQGVxICggzqlobGx0XzM1MiA9IC0+IGguZW5jb2RlIFsgMCwgXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ05OTk5OTk5OTk5OTidcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnXzEyODogLT5cbiAgICB7IGludGVybmFscyxcbiAgICAgIEhvbGxlcml0aCwgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyBIb2xsZXJpdGhfdHlwZXNwYWNlLFxuICAgICAgQ0ZHLCAgICAgICAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aC9saWIvdHlwZXMnXG4gICAgIyB7IHR5cGVfb2YsICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgIyB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsICB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgIHsgaXNGcm96ZW46IGlzX2Zyb3plbiwgICAgICAgIH0gPSBPYmplY3RcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNmZ18xMjggPVxuICAgICAgIyMjICAgICAgICAgICAgICAgICAgICAgMSAgICAgICAgIDIgICAgICAgICAzICAgICAgICMjI1xuICAgICAgIyMjICAgICAgICAgICAgMTIzNDU2Nzg5MDEyMzQ1Njc4OTAxMjM0NTY3ODkwMTIgICAgICMjI1xuICAgICAgZGlnaXRzZXQ6ICAgICAnISMkJSYoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUInICsgXFxcbiAgICAgICAgICAgICAgICAgICAgJ0NERUZHSElKS0xNTk9QUVJTVFVWV1hZWltdXl9gYWJjJyArIFxcXG4gICAgICAgICAgICAgICAgICAgICdkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ent8fX7CocKiwqPCpMKlJyArIFxcXG4gICAgICAgICAgICAgICAgICAgICfCpsKnwqjCqcKqwqvCrMKuwq/CsMKxwrLCs8K0wrXCtsK3wrjCucK6wrvCvMK9wr7Cv8OAw4HDgsODw4TDhcOGJ1xuICAgICAgbWFnbmlmaWVyczogICAnw4fDiMOJw4rDi8OMw43DjiDDuMO5w7rDu8O8w73DvsO/J1xuICAgICAgdW5pbGl0ZXJhbHM6ICAnw4/DkMORw5LDk8OUw5XDlsOXw5jDmcOaw5vDnMOdw57Dn8Ogw6HDoiDDoyDDpMOlw6bDp8Oow6nDqsOrw6zDrcOuw6/DsMOxw7LDs8O0w7XDtsO3J1xuICAgICAgZGltZW5zaW9uOiAgICA1XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgeyBjZmcsIH0gPSBIb2xsZXJpdGgudmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnIGNmZ18xMjhcbiAgICAgIEBlcSAoIM6paGxsdF8zNTMgPSAtPiBjZmcuYmxhbmsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyAnXG4gICAgICBAZXEgKCDOqWhsbHRfMzU0ID0gLT4gY2ZnLmRpZ2l0c2V0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICchIyQlJigpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQicgKyBcXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDREVGR0hJSktMTU5PUFFSU1RVVldYWVpbXV5fYGFiYycgKyBcXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ent8fX7CocKiwqPCpMKlJyArIFxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ8KmwqfCqMKpwqrCq8Kswq7Cr8KwwrHCssKzwrTCtcK2wrfCuMK5wrrCu8K8wr3CvsK/w4DDgcOCw4PDhMOFw4YnXG4gICAgICBAZXEgKCDOqWhsbHRfMzU1ID0gLT4gY2ZnLl9kaWdpdHNfbGlzdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIEFycmF5LmZyb20gY2ZnLmRpZ2l0c2V0XG4gICAgICBAZXEgKCDOqWhsbHRfMzU2ID0gLT4gY2ZnLl9ub3ZhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICggQXJyYXkuZnJvbSBjZmcuZGlnaXRzZXQgKS5hdCAtMVxuICAgICAgQGVxICggzqlobGx0XzM1NyA9IC0+IGNmZy5fbGVhZGluZ19ub3Zhc19yZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvLy8gXiAoPzogw4YgKSogKD89IC4rICQgKSAvLy9ndlxuICAgICAgQGVxICggzqlobGx0XzM1OCA9IC0+IGNmZy5tYWduaWZpZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw4fDiMOJw4rDi8OMw43DjiDDuMO5w7rDu8O8w73DvsO/J1xuICAgICAgQGVxICggzqlobGx0XzM1OSA9IC0+IGNmZy5fbm1hZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyDDjsONw4zDi8OKw4nDiMOHJ1xuICAgICAgQGVxICggzqlobGx0XzM2MCA9IC0+IGNmZy5fcG1hZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyDDuMO5w7rDu8O8w73DvsO/J1xuICAgICAgQGVxICggzqlobGx0XzM2MSA9IC0+IGNmZy5fbm1hZ19saXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgQXJyYXkuZnJvbSAnIMOOw43DjMOLw4rDicOIw4cnXG4gICAgICBAZXEgKCDOqWhsbHRfMzYyID0gLT4gY2ZnLl9wbWFnX2xpc3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBBcnJheS5mcm9tICcgw7jDucO6w7vDvMO9w77DvydcbiAgICAgIEBlcSAoIM6paGxsdF8zNjMgPSAtPiBjZmcudW5pbGl0ZXJhbHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8OPw5DDkcOSw5PDlMOVw5bDl8OYw5nDmsObw5zDncOew5/DoMOhw6Igw6Mgw6TDpcOmw6fDqMOpw6rDq8Osw63DrsOvw7DDscOyw7PDtMO1w7bDtydcbiAgICAgIEBlcSAoIM6paGxsdF8zNjQgPSAtPiBjZmcuX251bnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDj8OQw5HDksOTw5TDlcOWw5fDmMOZw5rDm8Ocw53DnsOfw6DDocOiJ1xuICAgICAgQGVxICggzqlobGx0XzM2NSA9IC0+IGNmZy5fenB1bnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8Ojw6TDpcOmw6fDqMOpw6rDq8Osw63DrsOvw7DDscOyw7PDtMO1w7bDtydcbiAgICAgIEBlcSAoIM6paGxsdF8zNjYgPSAtPiBjZmcuX251bnNfbGlzdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBBcnJheS5mcm9tICfDj8OQw5HDksOTw5TDlcOWw5fDmMOZw5rDm8Ocw53DnsOfw6DDocOiJ1xuICAgICAgQGVxICggzqlobGx0XzM2NyA9IC0+IGNmZy5fenB1bnNfbGlzdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIEFycmF5LmZyb20gJ8Ojw6TDpcOmw6fDqMOpw6rDq8Osw63DrsOvw7DDscOyw7PDtMO1w7bDtydcbiAgICAgIEBlcSAoIM6paGxsdF8zNjggPSAtPiBjZmcuX21pbl9pbnRlZ2VyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgLSggKCAxMjggKiogNyApIC0gMSApXG4gICAgICBAZXEgKCDOqWhsbHRfMzY5ID0gLT4gY2ZnLl9tYXhfaW50ZWdlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICsoICggMTI4ICoqIDcgKSAtIDEgKVxuICAgICAgIyBAZXEgKCDOqWhsbHRfMzcwID0gLT4gY2ZnLmRpZ2l0c19wZXJfaWR4ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAzXG4gICAgICAjIEBlcSAoIM6paGxsdF8zNzEgPSAtPiBjZmcuX2FscGhhYmV0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJzAxMjM0NTY3ODlBQkNFRkdISUpLTE1OT1BRUlNUVVZXWFlaJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWhsbHRfMzcyID0gLT4gaXNfZnJvemVuIGNmZy5fZGlnaXRzX2xpc3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paGxsdF8zNzMgPSAtPiBjZmcuX2Jhc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDEyOFxuICAgICAgQGVxICggzqlobGx0XzM3NCA9IC0+IGNmZy5kaW1lbnNpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCA1XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGggPSBuZXcgSG9sbGVyaXRoIGNmZ18xMjhcbiAgICAgIEBlcSAoIM6paGxsdF8zNzUgPSAtPiBoLmNmZyApLCBjZmdcbiAgICAgICMgQGVxICggzqlobGx0XzM3NiA9IC0+IGguZW5jb2RlIFsgMCwgXSApLCBudWxsXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHZhbGlkYXRlX2FuZF9jb21waWxlX2NmZ18xMF9jYXJkaW5hbHM6IC0+XG4gICAgeyBpbnRlcm5hbHMsXG4gICAgICBob2xsZXJpdGhfMTBfY2FyZGluYWwsXG4gICAgICBIb2xsZXJpdGgsICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgY29uc3RhbnRzXzEwX2NhcmRpbmFsLCAgICAgIH0gPSBpbnRlcm5hbHNcbiAgICB7IEhvbGxlcml0aF90eXBlc3BhY2UsXG4gICAgICBDRkcsICAgICAgICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoL2xpYi90eXBlcydcbiAgICAjIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAjIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgeyBpc0Zyb3plbjogaXNfZnJvemVuLCAgICAgICAgfSA9IE9iamVjdFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHsgY2ZnLCB9ID0gSG9sbGVyaXRoLnZhbGlkYXRlX2FuZF9jb21waWxlX2NmZyBjb25zdGFudHNfMTBfY2FyZGluYWxcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzc3ID0gLT4gY2ZnLmJsYW5rICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyAnXG4gICAgICBAZXEgICAgICggzqlobGx0XzM3OCA9IC0+IGNmZy5jYXJkaW5hbHNfb25seSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzc5ID0gLT4gY2ZnLl9ubWFnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgbnVsbFxuICAgICAgQGVxICAgICAoIM6paGxsdF8zODAgPSAtPiBjZmcuX251bnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBudWxsXG4gICAgICBAZXEgICAgICggzqlobGx0XzM4MSA9IC0+IGNmZy5fbWluX2ludGVnZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDBcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzgyID0gLT4gY2ZnLl9tYXhfaW50ZWdlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgKzk5OVxuICAgICAgQGVxICAgICAoIM6paGxsdF8zODMgPSAtPiBjZmcuZGlnaXRzX3Blcl9pZHggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAzXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGggPSBuZXcgSG9sbGVyaXRoIGNvbnN0YW50c18xMF9jYXJkaW5hbFxuICAgICAgQGVxICAgICAoIM6paGxsdF8zODQgPSAtPiBoLmNmZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBjZmdcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzg1ID0gLT4gaC5lbmNvZGUgWyAgIDAsIF0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ05OTk5OTk5OTk5OTidcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzg2ID0gLT4gaC5lbmNvZGUgWyA5OTksIF0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ1o5OTlOTk5OTk5OTidcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzg3ID0gLT4gaC5lbmNvZGUgICAgIDAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ04nXG4gICAgICBAZXEgICAgICggzqlobGx0XzM4OCA9IC0+IGguZW5jb2RlICAgOTk5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdaOTk5J1xuICAgICAgQHRocm93cyAoIM6paGxsdF8zODkgPSAtPiBoLmVuY29kZSBbICAtMSwgXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAveXl5L1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjYW5fc2V0X21heF9pZHhfZGlnaXRzOiAtPlxuICAgIHsgaW50ZXJuYWxzLFxuICAgICAgSG9sbGVyaXRoLCAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IEhvbGxlcml0aF90eXBlc3BhY2UsXG4gICAgICBDRkcsICAgICAgICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoL2xpYi90eXBlcydcbiAgICAjIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAjIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgeyBpc0Zyb3plbjogaXNfZnJvemVuLCAgICAgICAgfSA9IE9iamVjdFxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZG8gPT5cbiAgICAgIHVzZXJfY2ZnID1cbiAgICAgICAgdW5pbGl0ZXJhbHM6ICAgICAgICAnRUZHSElKS0xNIE4gT1BRUlNUVVZXJ1xuICAgICAgICBkaWdpdHNldDogICAgICAgICAgICcwMTIzNDU2Nzg5J1xuICAgICAgICBtYWduaWZpZXJzOiAgICAgICAgICdBQkMgWFlaJ1xuICAgICAgeyBjZmcsIH0gPSBIb2xsZXJpdGgudmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnIHVzZXJfY2ZnXG4gICAgICBAZXEgKCDOqWhsbHRfMzkwID0gLT4gY2ZnLl9taW5faW50ZWdlciAgICAgICAgICAgICAgICksIC05OTlcbiAgICAgIEBlcSAoIM6paGxsdF8zOTEgPSAtPiBjZmcuX21heF9pbnRlZ2VyICAgICAgICAgICAgICAgKSwgKzk5OVxuICAgICAgQGVxICggzqlobGx0XzM5MiA9IC0+IGNmZy5kaWdpdHNfcGVyX2lkeCAgICAgICAgICAgICApLCAzXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGggPSBuZXcgSG9sbGVyaXRoIHVzZXJfY2ZnXG4gICAgICBAZXEgKCDOqWhsbHRfMzkzID0gLT4gaC5jZmcgICAgICAgICAgICAgICAgICAgICAgICAgICksIGNmZ1xuICAgICAgQGVxICggzqlobGx0XzM5NCA9IC0+IGguZW5jb2RlIFsgMCwgXSAgICAgICAgICAgICAgICApLCAnTk5OTk5OTk5OTk5OTk5OTk5OTk4nXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHVzZXJfY2ZnID1cbiAgICAgICAgdW5pbGl0ZXJhbHM6ICAgICAgICAnRUZHSElKS0xNIE4gT1BRUlNUVVZXJ1xuICAgICAgICBkaWdpdHNldDogICAgICAgICAgICcwMTIzNDU2Nzg5J1xuICAgICAgICBtYWduaWZpZXJzOiAgICAgICAgICdBQkMgWFlaJ1xuICAgICAgICBfbWF4X2ludGVnZXI6ICAgICAgIDk5OVxuICAgICAgeyBjZmcsIH0gPSBIb2xsZXJpdGgudmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnIHVzZXJfY2ZnXG4gICAgICBAZXEgKCDOqWhsbHRfMzk1ID0gLT4gY2ZnLl9taW5faW50ZWdlciAgICAgICAgICAgICAgICksIC05OTlcbiAgICAgIEBlcSAoIM6paGxsdF8zOTYgPSAtPiBjZmcuX21heF9pbnRlZ2VyICAgICAgICAgICAgICAgKSwgKzk5OVxuICAgICAgQGVxICggzqlobGx0XzM5NyA9IC0+IGNmZy5kaWdpdHNfcGVyX2lkeCAgICAgICAgICAgICApLCAzXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGggPSBuZXcgSG9sbGVyaXRoIHVzZXJfY2ZnXG4gICAgICBAZXEgKCDOqWhsbHRfMzk4ID0gLT4gaC5jZmcgICAgICAgICAgICAgICAgICAgICAgICAgICksIGNmZ1xuICAgICAgQGVxICggzqlobGx0XzM5OSA9IC0+IGguZW5jb2RlIFsgMCwgXSAgICAgICAgICAgICAgICApLCAnTk5OTk5OTk5OTk5OTk5OTk5OTk4nXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHVzZXJfY2ZnID1cbiAgICAgICAgdW5pbGl0ZXJhbHM6ICAgICAgICAnRUZHSElKS0xNIE4gT1BRUlNUVVZXJ1xuICAgICAgICBkaWdpdHNldDogICAgICAgICAgICcwMTIzNDU2Nzg5J1xuICAgICAgICBtYWduaWZpZXJzOiAgICAgICAgICdBQkMgWFlaJ1xuICAgICAgICBkaWdpdHNfcGVyX2lkeDogICAgM1xuICAgICAgeyBjZmcsIH0gPSBIb2xsZXJpdGgudmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnIHVzZXJfY2ZnXG4gICAgICBAZXEgKCDOqWhsbHRfNDAwID0gLT4gY2ZnLl9taW5faW50ZWdlciAgICAgICAgICAgICAgICksIC05OTlcbiAgICAgIEBlcSAoIM6paGxsdF80MDEgPSAtPiBjZmcuX21heF9pbnRlZ2VyICAgICAgICAgICAgICAgKSwgKzk5OVxuICAgICAgQGVxICggzqlobGx0XzQwMiA9IC0+IGNmZy5kaWdpdHNfcGVyX2lkeCAgICAgICAgICAgICApLCAzXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGggPSBuZXcgSG9sbGVyaXRoIHVzZXJfY2ZnXG4gICAgICBAZXEgKCDOqWhsbHRfNDAzID0gLT4gaC5jZmcgICAgICAgICAgICAgICAgICAgICAgICAgICksIGNmZ1xuICAgICAgQGVxICggzqlobGx0XzQwNCA9IC0+IGguZW5jb2RlIFsgMCwgXSAgICAgICAgICAgICAgICApLCAnTk5OTk5OTk5OTk5OTk5OTk5OTk4nXG4gICAgICByZXR1cm4gbnVsbFxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZG8gPT5cbiAgICAgIHVzZXJfY2ZnID1cbiAgICAgICAgdW5pbGl0ZXJhbHM6ICAgICAgICAnRUZHSElKS0xNIE4gT1BRUlNUVVZXJ1xuICAgICAgICBkaWdpdHNldDogICAgICAgICAgICcwMTIzNDU2Nzg5J1xuICAgICAgICBtYWduaWZpZXJzOiAgICAgICAgICc/QEFCQyBYWVpeXydcbiAgICAgIHsgY2ZnLCB9ID0gSG9sbGVyaXRoLnZhbGlkYXRlX2FuZF9jb21waWxlX2NmZyB1c2VyX2NmZ1xuICAgICAgQGVxICggzqlobGx0XzQwNSA9IC0+IGNmZy5fbWluX2ludGVnZXIgICAgICAgICAgICAgICApLCAtOTlfOTk5XG4gICAgICBAZXEgKCDOqWhsbHRfNDA2ID0gLT4gY2ZnLl9tYXhfaW50ZWdlciAgICAgICAgICAgICAgICksICs5OV85OTlcbiAgICAgIEBlcSAoIM6paGxsdF80MDcgPSAtPiBjZmcuZGlnaXRzX3Blcl9pZHggICAgICAgICAgICAgKSwgNVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBoID0gbmV3IEhvbGxlcml0aCB1c2VyX2NmZ1xuICAgICAgQGVxICggzqlobGx0XzQwOCA9IC0+IGguY2ZnICAgICAgICAgICAgICAgICAgICAgICAgICApLCBjZmdcbiAgICAgIEBlcSAoIM6paGxsdF80MDkgPSAtPiBoLmVuY29kZSBbIDAsIF0gICAgICAgICAgICAgICAgKSwgJ05OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTidcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgdXNlcl9jZmcgPVxuICAgICAgICB1bmlsaXRlcmFsczogICAgICAgICdFRkdISUpLTE0gTiBPUFFSU1RVVlcnXG4gICAgICAgIGRpZ2l0c2V0OiAgICAgICAgICAgJzAxMjM0NTY3ODknXG4gICAgICAgIG1hZ25pZmllcnM6ICAgICAgICAgJz9AQUJDIFhZWl5fJ1xuICAgICAgICBfbWF4X2ludGVnZXI6ICAgICAgIDk5OVxuICAgICAgeyBjZmcsIH0gPSBIb2xsZXJpdGgudmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnIHVzZXJfY2ZnXG4gICAgICBAZXEgKCDOqWhsbHRfNDEwID0gLT4gY2ZnLl9taW5faW50ZWdlciAgICAgICAgICAgICAgICksIC05OV85OTlcbiAgICAgIEBlcSAoIM6paGxsdF80MTEgPSAtPiBjZmcuX21heF9pbnRlZ2VyICAgICAgICAgICAgICAgKSwgKzk5Xzk5OVxuICAgICAgQGVxICggzqlobGx0XzQxMiA9IC0+IGNmZy5kaWdpdHNfcGVyX2lkeCAgICAgICAgICAgICApLCA1XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGggPSBuZXcgSG9sbGVyaXRoIHVzZXJfY2ZnXG4gICAgICBAZXEgKCDOqWhsbHRfNDEzID0gLT4gaC5jZmcgICAgICAgICAgICAgICAgICAgICAgICAgICksIGNmZ1xuICAgICAgQGVxICggzqlobGx0XzQxNCA9IC0+IGguZW5jb2RlIFsgMCwgXSAgICAgICAgICAgICAgICApLCAnTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OJ1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICB1c2VyX2NmZyA9XG4gICAgICAgIHVuaWxpdGVyYWxzOiAgICAgICAgJ0VGR0hJSktMTSBOIE9QUVJTVFVWVydcbiAgICAgICAgZGlnaXRzZXQ6ICAgICAgICAgICAnMDEyMzQ1Njc4OSdcbiAgICAgICAgbWFnbmlmaWVyczogICAgICAgICAnP0BBQkMgWFlaXl8nXG4gICAgICAgIGRpZ2l0c19wZXJfaWR4OiAgICAgM1xuICAgICAgeyBjZmcsIH0gPSBIb2xsZXJpdGgudmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnIHVzZXJfY2ZnXG4gICAgICBAZXEgKCDOqWhsbHRfNDE1ID0gLT4gY2ZnLl9taW5faW50ZWdlciAgICAgICAgICAgICAgICksIC05OTlcbiAgICAgIEBlcSAoIM6paGxsdF80MTYgPSAtPiBjZmcuX21heF9pbnRlZ2VyICAgICAgICAgICAgICAgKSwgKzk5OVxuICAgICAgQGVxICggzqlobGx0XzQxNyA9IC0+IGNmZy5kaWdpdHNfcGVyX2lkeCAgICAgICAgICAgICApLCAzXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGggPSBuZXcgSG9sbGVyaXRoIHVzZXJfY2ZnXG4gICAgICBAZXEgKCDOqWhsbHRfNDE4ID0gLT4gaC5jZmcgICAgICAgICAgICAgICAgICAgICAgICAgICksIGNmZ1xuICAgICAgQGVxICggzqlobGx0XzQxOSA9IC0+IGguZW5jb2RlIFsgMCwgXSAgICAgICAgICAgICAgICApLCAnTk5OTk5OTk5OTk5OTk5OTk5OTk4nXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHR5cGVzOiAtPlxuICAgIHsgSG9sbGVyaXRoX3R5cGVzcGFjZSxcbiAgICAgIGNyZWF0ZV9tYXhfaW50ZWdlcixcbiAgICAgIENGRywgICAgICAgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgvbGliL3R5cGVzJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIFQgPSBuZXcgSG9sbGVyaXRoX3R5cGVzcGFjZSgpXG4gICAgICBAZXEgICAgICggzqlobGx0XzQyMCA9IC0+IFQuX2Jhc2UuaXNhIC0xICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICAgICAoIM6paGxsdF80MjEgPSAtPiBULl9iYXNlLmlzYSAgMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfNDIyID0gLT4gVC5fYmFzZS5pc2EgKzEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgICAgICggzqlobGx0XzQyMyA9IC0+IFQuX2Jhc2UuaXNhICsyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgICAgICggzqlobGx0XzQyNCA9IC0+IFQuX21heF9pbnRlZ2VyLmlzYSBudWxsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICAgICAoIM6paGxsdF80MjUgPSAtPiBULl9tYXhfaW50ZWdlci5pc2EgOSwgICAgICAgICAgMTAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6paGxsdF80MjYgPSAtPiBULl9tYXhfaW50ZWdlci5pc2EgOTksICAgICAgICAgMTAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6paGxsdF80MjcgPSAtPiBULl9tYXhfaW50ZWdlci5pc2EgOTk5OTk5OTksICAgMTAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6paGxsdF80MjggPSAtPiBULl9tYXhfaW50ZWdlci5pc2EgLTEwLCAgICAgICAgMTAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfNDI5ID0gLT4gL25vdCBhIHBvc2l0aXZlIHNhZmUgaW50ZWdlci8udGVzdCBULl9tYXhfaW50ZWdlci5kYXRhLm1lc3NhZ2UgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfNDMwID0gLT4gVC5fbWF4X2ludGVnZXIuaXNhIDB4ZmZmZiwgICAgIDE2ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfNDMxID0gLT4gVC5fbWF4X2ludGVnZXIuaXNhIDB4N2ZmZmZmZmYsIDE2ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAdGhyb3dzICggzqlobGx0XzQzMiA9IC0+IFQuX21heF9pbnRlZ2VyLnZhbGlkYXRlIDUsIDEwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvXFwoX21heF9pbnRlZ2VyXFwpIG5vdCBhIHZhbGlkIF9tYXhfaW50ZWdlcjogNSDigJMgeCBub3QgYSBwb3NpdGl2ZSBhbGwtbmluZXJzL1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBUID0gbmV3IEhvbGxlcml0aF90eXBlc3BhY2UoKVxuICAgICAgUiA9IHsgX2Jhc2U6IDE2LCBkaWdpdHNfcGVyX2lkeDogNCwgfVxuICAgICAgQGVxICAgICAoIM6paGxsdF80MzMgPSAtPiBULl9tYXhfaW50ZWdlci5pc2EgKCBSLl9iYXNlICoqIFIuZGlnaXRzX3Blcl9pZHggKSAtIDEsIFIuX2Jhc2UgKSwgdHJ1ZVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBUID0gbmV3IEhvbGxlcml0aF90eXBlc3BhY2UoKVxuICAgICAgQGVxICAgICAoIM6paGxsdF80MzQgPSAtPiBULl9tYXhfaW50ZWdlci5pc2EgKCAxMjggKiogMSApIC0gMSwgMTI4ICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfNDM1ID0gLT4gVC5fbWF4X2ludGVnZXIuaXNhICggMTI4ICoqIDIgKSAtIDEsIDEyOCAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgICAgICggzqlobGx0XzQzNiA9IC0+IFQuX21heF9pbnRlZ2VyLmlzYSAoIDEyOCAqKiAzICkgLSAxLCAxMjggICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6paGxsdF80MzcgPSAtPiBULl9tYXhfaW50ZWdlci5pc2EgKCAxMjggKiogNCApIC0gMSwgMTI4ICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfNDM4ID0gLT4gVC5fbWF4X2ludGVnZXIuaXNhICggMTI4ICoqIDUgKSAtIDEsIDEyOCAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgICAgICggzqlobGx0XzQzOSA9IC0+IFQuX21heF9pbnRlZ2VyLmlzYSAoIDEyOCAqKiA2ICkgLSAxLCAxMjggICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6paGxsdF80NDAgPSAtPiBULl9tYXhfaW50ZWdlci5pc2EgKCAxMjggKiogNyApIC0gMSwgMTI4ICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfNDQxID0gLT4gVC5fbWF4X2ludGVnZXIuaXNhICggMTI4ICoqIDggKSAtIDEsIDEyOCAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICAgICAoIM6paGxsdF80NDIgPSAtPiBULmNyZWF0ZV9tYXhfaW50ZWdlciB7IF9iYXNlOiAxMCwgZGlnaXRzX3Blcl9pZHg6IDIsIH0gKSwgOTlcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmRlbW9fbWF4X2ludGVnZXIgPSAtPlxuICBsb2dfdG9fYmFzZSAgICAgICAgICAgICAgID0gKCBuLCBiYXNlICkgLT4gKCBNYXRoLmxvZyBuICkgLyAoIE1hdGgubG9nIGJhc2UgKVxuICBnZXRfcmVxdWlyZWRfZGlnaXRzICAgICAgID0gKCBuLCBiYXNlICkgLT4gTWF0aC5jZWlsIGxvZ190b19iYXNlIG4sIGJhc2VcbiAgZ2V0X21heF9uaW5lcl9kaWdpdF9jb3VudCA9ICggbiwgYmFzZSApIC0+ICggZ2V0X3JlcXVpcmVkX2RpZ2l0cyBuLCBiYXNlICkgLSAxXG4gIGdldF9tYXhfaW50ZWdlciAgICAgICAgICAgPSAoIG4sIGJhc2UgKSAtPiAoIGJhc2UgKiogZ2V0X21heF9uaW5lcl9kaWdpdF9jb3VudCBuLCBiYXNlICkgLSAxXG4gIGluZm8gJ86paGxsdF80NDMnLCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUi50b1N0cmluZyAxNlxuICBpbmZvICfOqWhsbHRfNDQ0JywgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIudG9TdHJpbmcgMzJcbiAgd2hpc3BlciAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUJ1xuICBpbmZvICfOqWhsbHRfNDQ1JywgKCAzMiAqKiA0IC0gMSApLnRvU3RyaW5nIDMyXG4gIGluZm8gJ86paGxsdF80NDYnLCAoIDMyICoqIDQgLSAxICkudG9TdHJpbmcgMzJcbiAgd2hpc3BlciAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUJ1xuICBpbmZvICfOqWhsbHRfNDQ3JywgZ2V0X3JlcXVpcmVkX2RpZ2l0cyAzMiwgICAgICAgMzJcbiAgaW5mbyAnzqlobGx0XzQ0OCcsIGdldF9yZXF1aXJlZF9kaWdpdHMgMzIgKiogNiwgIDMyXG4gIGluZm8gJ86paGxsdF80NDknLCBnZXRfcmVxdWlyZWRfZGlnaXRzIDFlNiwgICAgICAxMFxuICBpbmZvICfOqWhsbHRfNDUwJywgZ2V0X3JlcXVpcmVkX2RpZ2l0cyAyMCwgICAgICAgMTBcbiAgd2hpc3BlciAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUJ1xuICBpbmZvICfOqWhsbHRfNDUxJywgbWF4X2RpZ2l0c19iYXNlXzEwICAgID0gZ2V0X21heF9uaW5lcl9kaWdpdF9jb3VudCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiwgMTBcbiAgaW5mbyAnzqlobGx0XzQ1MicsIG1heF9kaWdpdHNfYmFzZV8xNiAgICA9IGdldF9tYXhfbmluZXJfZGlnaXRfY291bnQgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsIDE2XG4gIGluZm8gJ86paGxsdF80NTMnLCBtYXhfZGlnaXRzX2Jhc2VfMzIgICAgPSBnZXRfbWF4X25pbmVyX2RpZ2l0X2NvdW50IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAzMlxuICBpbmZvICfOqWhsbHRfNDU0JywgbWF4X2RpZ2l0c19iYXNlXzM2ICAgID0gZ2V0X21heF9uaW5lcl9kaWdpdF9jb3VudCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiwgMzZcbiAgaW5mbyAnzqlobGx0XzQ1NScsIG1heF9kaWdpdHNfMWJhc2VfMjggICA9IGdldF9tYXhfbmluZXJfZGlnaXRfY291bnQgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsIDEyOFxuICAjIGZvciBiYXNlIGluIFsgMiAuLiAxMjggXVxuICAjICAgaW5mbyAnzqlobGx0XzQ1NicsIHsgYmFzZSwgfSwgKCBNYXRoLmNlaWwgbG9nX3RvX2Jhc2UgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsIGJhc2UgKSAtIDFcbiAgd2hpc3BlciAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUJ1xuICBpbmZvICfOqWhsbHRfNDU3JywgJzknLnJlcGVhdCBtYXhfZGlnaXRzX2Jhc2VfMTBcbiAgaW5mbyAnzqlobGx0XzQ1OCcsICdmJy5yZXBlYXQgbWF4X2RpZ2l0c19iYXNlXzE2XG4gIGluZm8gJ86paGxsdF80NTknLCAndicucmVwZWF0IG1heF9kaWdpdHNfYmFzZV8zMlxuICB3aGlzcGVyICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gIGluZm8gJ86paGxsdF80NjAnLCAoICggYmFzZSA9IDEwICkgKiogbWF4X2RpZ2l0c19iYXNlXzEwICkgLSAxXG4gIGluZm8gJ86paGxsdF80NjEnLCAoICggYmFzZSA9IDE2ICkgKiogbWF4X2RpZ2l0c19iYXNlXzE2ICkgLSAxXG4gIGluZm8gJ86paGxsdF80NjInLCAoICggYmFzZSA9IDMyICkgKiogbWF4X2RpZ2l0c19iYXNlXzMyICkgLSAxXG4gIGluZm8gJ86paGxsdF80NjMnLCAoICggYmFzZSA9IDM2ICkgKiogbWF4X2RpZ2l0c19iYXNlXzM2ICkgLSAxXG4gIHdoaXNwZXIgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgaW5mbyAnzqlobGx0XzQ2NCcsIGdldF9tYXhfaW50ZWdlciBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiwgMTBcbiAgaW5mbyAnzqlobGx0XzQ2NScsIGdldF9tYXhfaW50ZWdlciBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiwgMTZcbiAgaW5mbyAnzqlobGx0XzQ2NicsIGdldF9tYXhfaW50ZWdlciBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiwgMzJcbiAgaW5mbyAnzqlobGx0XzQ2NycsIGdldF9tYXhfaW50ZWdlciBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiwgMzZcbiAgaW5mbyAnzqlobGx0XzQ2OCcsIGdldF9tYXhfaW50ZWdlciBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiwgMTI4XG4gIHdoaXNwZXIgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgaW5mbyAnzqlobGx0XzQ2OScsICggcGFyc2VJbnQgKCAnOScucmVwZWF0IG1heF9kaWdpdHNfYmFzZV8xMCApLCAxMCApXG4gIGluZm8gJ86paGxsdF80NzAnLCAoIHBhcnNlSW50ICggJ2YnLnJlcGVhdCBtYXhfZGlnaXRzX2Jhc2VfMTYgKSwgMTYgKVxuICBpbmZvICfOqWhsbHRfNDcxJywgKCBwYXJzZUludCAoICd2Jy5yZXBlYXQgbWF4X2RpZ2l0c19iYXNlXzMyICksIDMyIClcbiAgaW5mbyAnzqlobGx0XzQ3MicsICggcGFyc2VJbnQgKCAneicucmVwZWF0IG1heF9kaWdpdHNfYmFzZV8zNiApLCAzNiApXG4gIGluZm8gJ86paGxsdF80NzMnLCAoIHBhcnNlSW50ICggJzknLnJlcGVhdCBtYXhfZGlnaXRzX2Jhc2VfMTAgKSwgMTAgKSA8PSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUlxuICBpbmZvICfOqWhsbHRfNDc0JywgKCBwYXJzZUludCAoICdmJy5yZXBlYXQgbWF4X2RpZ2l0c19iYXNlXzE2ICksIDE2ICkgPD0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcbiAgaW5mbyAnzqlobGx0XzQ3NScsICggcGFyc2VJbnQgKCAndicucmVwZWF0IG1heF9kaWdpdHNfYmFzZV8zMiApLCAzMiApIDw9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG4gIGluZm8gJ86paGxsdF80NzYnLCAoIHBhcnNlSW50ICggJ3onLnJlcGVhdCBtYXhfZGlnaXRzX2Jhc2VfMzYgKSwgMzYgKSA8PSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUlxuICB3aGlzcGVyICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gIGluZm8gJ86paGxsdF80NzcnLCArOTk5ICsgLTk5OVxuICBpbmZvICfOqWhsbHRfNDc4JywgKzk5OSArIC0xXG4gIGluZm8gJ86paGxsdF80NzknLCAtKCAtOTk5IC0gMSApICsgLTk5OVxuICBpbmZvICfOqWhsbHRfNDgwJywgLSggLTk5OSAtIDEgKSArIC05OThcbiAgaW5mbyAnzqlobGx0XzQ4MScsIC0oIC05OTkgLSAxICkgKyAtOTk3XG4gIGluZm8gJ86paGxsdF80ODInLCAtKCAtOTk5IC0gMSApICsgLTNcbiAgaW5mbyAnzqlobGx0XzQ4MycsIC0oIC05OTkgLSAxICkgKyAtMlxuICBpbmZvICfOqWhsbHRfNDg0JywgLSggLTk5OSAtIDEgKSArIC0xXG4gIGluZm8gJ86paGxsdF80ODUnLCBcIiN7IC0oIC05OTkgLSAxICkgKyAtMyB9XCIucmVwbGFjZSAvLy8gXiA5Kj8gKD89IC4gJCApIC8vL2d2LCAnJ1xuICBpbmZvICfOqWhsbHRfNDg2JywgXCIjeyAtKCAtOTk5IC0gMSApICsgLTIgfVwiLnJlcGxhY2UgLy8vIF4gOSo/ICg/PSAuICQgKSAvLy9ndiwgJydcbiAgaW5mbyAnzqlobGx0XzQ4NycsIFwiI3sgLSggLTk5OSAtIDEgKSArIC0xIH1cIi5yZXBsYWNlIC8vLyBeIDkqPyAoPz0gLiAkICkgLy8vZ3YsICcnXG4gIHJldHVybiBudWxsXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgeyBzaG93X3JlcXVpcmVzLCB9ID0gcmVxdWlyZSAnLi4vLi4vc25pcHBldHMvbGliL2RlbW8tc2hvdy1yZXF1aXJlcy5qcydcbiAgc2hvd19yZXF1aXJlcyAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgQGhvbGxlcml0aFxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHZhbGlkYXRlX2FuZF9jb21waWxlX2NmZ18xMF9jYXJkaW5hbHM6IEBob2xsZXJpdGgudmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnXzEwX2NhcmRpbmFscywgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgaG9sbGVyaXRoXzEwbXZwMl9iaWdfc2h1ZmZsZTogQGhvbGxlcml0aC5ob2xsZXJpdGhfMTBtdnAyX2JpZ19zaHVmZmxlLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBob2xsZXJpdGhfMTI4X2JpZ19zaHVmZmxlOiBAaG9sbGVyaXRoLmhvbGxlcml0aF8xMjhfYmlnX3NodWZmbGUsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGNhbl9zZXRfbWF4X2lkeF9kaWdpdHM6IEBob2xsZXJpdGguY2FuX3NldF9tYXhfaWR4X2RpZ2l0cywgfVxuXG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB0eXBlczogQGhvbGxlcml0aC50eXBlcywgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgaDEwbXZwMl9zb3J0aW5nXzI6IEBob2xsZXJpdGguaDEwbXZwMl9zb3J0aW5nXzIsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHZhbGlkYXRlX2FuZF9jb21waWxlX2NmZ18xMDogQGhvbGxlcml0aC52YWxpZGF0ZV9hbmRfY29tcGlsZV9jZmdfMTAsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGgxMG12cDJfZGVjb2RlX3VuaXRzOiBAaG9sbGVyaXRoLmgxMG12cDJfZGVjb2RlX3VuaXRzLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBnZXRfbGVhZGluZ19ub3Zhc19yZTogQGhvbGxlcml0aC5nZXRfbGVhZGluZ19ub3Zhc19yZSwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnOiBAaG9sbGVyaXRoLnZhbGlkYXRlX2FuZF9jb21waWxlX2NmZywgfVxuICAjIGRlbW9fbWF4X2ludGVnZXIoKVxuXG5cbiJdfQ==
