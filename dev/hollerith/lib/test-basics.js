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
        }), null);
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
        // @throws ( Ωhllt_389 = -> h.encode [  -1, ]                                  ), /unable to encode negative idx -1 with cardinals-only codec/
        this.throws((Ωhllt_389 = function() {
          return h.encode([-1]);
        }), /not a valid idx/);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsZ0JBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUE7O0VBRUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixXQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLElBSkYsRUFLRSxHQUxGLEVBTUUsSUFORixFQU9FLE9BUEYsRUFRRSxHQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBUmhDLEVBWkE7OztFQXNCQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixJQUE1Qjs7RUFDQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1Qjs7RUFDQSxTQUFBLEdBQTRCLE9BQUEsQ0FBUSw2Q0FBUixFQXpCNUI7OztFQTZCQSxPQUFBLEdBR0UsQ0FBQTs7SUFBQSxRQUFBLEVBQVUsUUFBQSxDQUFF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QUFFLGlCQUFBLEVBQW1CO01BQXJCLENBQUEsR0FBaUMsT0FBQSxDQUFRLFdBQVIsQ0FBakMsRUFOSjs7TUFRSSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTJCLENBQUMsR0FBNUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsTUFBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTRCLENBQUMsRUFBN0I7TUFBSCxDQUFmLENBQVIsRUFBK0QsS0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTRCLENBQUMsRUFBN0I7TUFBSCxDQUFmLENBQVIsRUFBK0QsS0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTRCLENBQUMsRUFBN0I7TUFBSCxDQUFmLENBQVIsRUFBK0QsS0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTRCLENBQUMsRUFBN0I7TUFBSCxDQUFmLENBQVIsRUFBK0QsS0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsSUFBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsSUFBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsSUFBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsSUFBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsSUFBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsSUFBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsSUFBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsSUFBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsSUFBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcs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QSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTRCLENBQUMsRUFBN0I7TUFBSCxDQUFmLENBQVIsRUFBK0QsZUFBZSxDQUFDLE1BQWhCLENBQXdCLENBQUMsRUFBekIsQ0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTRCLENBQUMsRUFBN0I7TUFBSCxDQUFmLENBQVIsRUFBK0QsZUFBZSxDQUFDLE1BQWhCLENBQXdCLENBQUMsRUFBekIsQ0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTRCLENBQUMsRUFBN0I7TUFBSCxDQUFmLENBQVIsRUFBK0QsZUFBZSxDQUFDLE1BQWhCLENBQXdCLENBQUMsRUFBekIsQ0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FB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QUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEdBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsS0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEdBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsSUFBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEVBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsSUFBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEVBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsSUFBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEVBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsSUFBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEVBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsR0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLENBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsR0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLENBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsR0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLENBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsR0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEVBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsR0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEVBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsSUFBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEdBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsSUFBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEdBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsS0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEdBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsS0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEtBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsS0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEtBQWQ7TUFBSCxD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RSxDQUFDLEdBQUQsR0FBTyxDQUFULENBQUQsR0FBZ0IsQ0FBQyxDQUFyQixDQUFBLENBQXlCLENBQUMsT0FBMUIsQ0FBa0MsY0FBbEMsRUFBNkQsRUFBN0QsQ0FBbEI7SUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFBLENBQUEsQ0FBSSxDQUFDLENBQUUsQ0FBQyxHQUFELEdBQU8sQ0FBVCxDQUFELEdBQWdCLENBQUMsQ0FBckIsQ0FBQSxDQUF5QixDQUFDLE9BQTFCLENBQWtDLGNBQWxDLEVBQTZELEVBQTdELENBQWxCO0FBQ0EsV0FBTztFQTNEVSxFQWx3Q25COzs7RUFpMENBLElBQUcsTUFBQSxLQUFVLE9BQU8sQ0FBQyxJQUFyQjtJQUErQixNQUFTLENBQUEsQ0FBQSxDQUFBLEdBQUE7QUFDeEMsVUFBQSxXQUFBLEVBQUE7TUFBRSxDQUFBLENBQUUsYUFBRixDQUFBLEdBQXFCLE9BQUEsQ0FBUSwwQ0FBUixDQUFyQjtNQUNBLGFBQUEsQ0FBYyx5QkFBZCxFQURGOztNQUdFLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsS0FBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsSUFBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEIsSUFBQyxDQUFBLFNBQS9CO2FBQ0EsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QjtRQUFFLHFDQUFBLEVBQXVDLElBQUMsQ0FBQSxTQUFTLENBQUM7TUFBcEQsQ0FBOUI7SUFQc0MsQ0FBQSxJQUF4Qzs7O0VBajBDQTs7Ozs7Ozs7Ozs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzdHJpY3QnXG5cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnaG9sbGVyaXRoJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIGxpbWVcbiAgZ29sZFxuICByZWRcbiAgYmx1ZVxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxuIyBXR1VZICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy93ZWJndXknXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2luZ2xlLWZpbGUtbW9kdWxlcydcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmhlbHBlcnMgPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcnByX3VuaXQ6ICggdW5pdCApIC0+XG4gICAgeyBuYW1lLFxuICAgICAgbGV0dGVycyxcbiAgICAgIG1hbnRpc3NhLFxuICAgICAgaW5kZXgsICAgIH0gPSB1bml0XG4gICAgUiAgPSBcIiN7bmFtZX06I3tsZXR0ZXJzfVwiXG4gICAgUiArPSBcIiwje21hbnRpc3NhfVwiICBpZiBtYW50aXNzYT9cbiAgICBSICs9IFwiWyN7aW5kZXh9XVwiICAgIGlmIGluZGV4P1xuICAgIHJldHVybiBSXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRfcmFuZG9tX3ZkeF9wcm9kdWNlcjogKHtcbiAgICBzZWVkICAgICAgICA9IG51bGwsXG4gICAgbWluX2xlbmd0aCAgPSAxLFxuICAgIG1heF9sZW5ndGggID0gNSxcbiAgICBtaW5faWR4ICAgICA9IC05OTksXG4gICAgbWF4X2lkeCAgICAgPSArOTk5LCB9PXt9KSAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfcmFuZG9tKClcbiAgICBnZXRfcmFuZG9tICAgICAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IG51bGwsIG9uX3N0YXRzOiBudWxsLCB9XG4gICAgZ2V0X3JuZF9sZW5ndGggID0gZ2V0X3JhbmRvbS5pbnRlZ2VyX3Byb2R1Y2VyIHsgbWluOiBtaW5fbGVuZ3RoLCBtYXg6IG1heF9sZW5ndGgsIH1cbiAgICBnZXRfcm5kX2lkeCAgICAgPSBnZXRfcmFuZG9tLmludGVnZXJfcHJvZHVjZXIgeyBtaW46IG1pbl9pZHgsICAgIG1heDogbWF4X2lkeCwgICAgfVxuICAgIHJldHVybiBnZXRfcm5kX3ZkeCA9IC0+ICggZ2V0X3JuZF9pZHgoKSBmb3IgXyBpbiBbIDEgLi4gZ2V0X3JuZF9sZW5ndGgoKSBdIClcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBob2xsZXJpdGggPVxuXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgaW50ZXJmYWNlOiAtPlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEwLFxuICAgICAgaG9sbGVyaXRoXzEwbXZwLFxuICAgICAgaG9sbGVyaXRoXzEyOCxcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgQGVxICAgICAoIM6pYW55YnRfX18xID0gLT4gdHlwZV9vZiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgICAgICAgICAgKSwgJ2Z1bmN0aW9uJ1xuICAgICAgQGVxICAgICAoIM6pYW55YnRfX18yID0gLT4gdHlwZV9vZiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAgKSwgJ3VuZGVmaW5lZCdcbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X19fMyA9IC0+IHR5cGVfb2YgaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICAgICAgICksICdmdW5jdGlvbidcbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X19fNCA9IC0+IHR5cGVfb2YgaG9sbGVyaXRoXzEwbXZwLmVuY29kZV92ZHggICAgICAgICksICdmdW5jdGlvbidcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcGFkZGluZzogLT5cbiAgICB7IEhvbGxlcml0aCxcbiAgICAgIGhvbGxlcml0aF8xMCxcbiAgICAgIGhvbGxlcml0aF8xMG12cCxcbiAgICAgIGhvbGxlcml0aF8xMjgsXG4gICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgIyB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgQGVxICAgICAoIM6pYW55YnRfX181ID0gLT4gZXF1YWxzICggaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAxMjMgKSwgKCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAxMjMgICAgICAgKSApLCB0cnVlXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fXzYgPSAtPiBlcXVhbHMgKCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIDEyMyApLCAoIGhvbGxlcml0aF8xMG12cC5lbmNvZGVfdmR4IFsgMTIzLCBdICApICksIGZhbHNlXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9sZWFkaW5nX25vdmFzX3JlOiAtPlxuICAgIHsgaW50ZXJuYWxzOiB7IHR5cGVzLCB9ICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgZ2V0X2xlYWRpbmdfbm92YXNfcmUsICAgfSA9IHR5cGVzLmludGVybmFsc1xuICAgICMgZGVidWcgJ86paGxsdF9fXzcnLCAnOTg3Jy5yZXBsYWNlIC8vLyBeICg/OiA5ICkqPyAoPz0gLiAkICkgLy8vZ3YsICcnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgQGVxICAgICAoIM6pYW55YnRfX184ID0gLT4gZ2V0X2xlYWRpbmdfbm92YXNfcmUgJzknICksIC8vLyBeICg/OiA5ICApKiAoPz0gLisgJCApIC8vL2d2XG4gICAgICBAZXEgICAgICggzqlhbnlidF9fXzkgPSAtPiBnZXRfbGVhZGluZ19ub3Zhc19yZSAnKicgKSwgLy8vIF4gKD86IFxcKiApKiAoPz0gLisgJCApIC8vL2d2XG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIF9sZWFkaW5nX25vdmFzX3JlID0gZ2V0X2xlYWRpbmdfbm92YXNfcmUgJzknXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fMTAgPSAtPiAnOTk5OScucmVwbGFjZSBfbGVhZGluZ19ub3Zhc19yZSwgJycgKSwgJzknXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fMTEgPSAtPiAgJzk5OScucmVwbGFjZSBfbGVhZGluZ19ub3Zhc19yZSwgJycgKSwgJzknXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fMTIgPSAtPiAgICc5OScucmVwbGFjZSBfbGVhZGluZ19ub3Zhc19yZSwgJycgKSwgJzknXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fMTMgPSAtPiAgICAnOScucmVwbGFjZSBfbGVhZGluZ19ub3Zhc19yZSwgJycgKSwgJzknXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fMTQgPSAtPiAnOTk4OScucmVwbGFjZSBfbGVhZGluZ19ub3Zhc19yZSwgJycgKSwgJzg5J1xuICAgICAgQGVxICAgICAoIM6pYW55YnRfXzE1ID0gLT4gICc5ODknLnJlcGxhY2UgX2xlYWRpbmdfbm92YXNfcmUsICcnICksICc4OSdcbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X18xNiA9IC0+ICAgJzg5Jy5yZXBsYWNlIF9sZWFkaW5nX25vdmFzX3JlLCAnJyApLCAnODknXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fMTcgPSAtPiAnOTk5MicucmVwbGFjZSBfbGVhZGluZ19ub3Zhc19yZSwgJycgKSwgJzInXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fMTggPSAtPiAgJzk5MicucmVwbGFjZSBfbGVhZGluZ19ub3Zhc19yZSwgJycgKSwgJzInXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fMTkgPSAtPiAgICc5MicucmVwbGFjZSBfbGVhZGluZ19ub3Zhc19yZSwgJycgKSwgJzInXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fMjAgPSAtPiAgICAnNycucmVwbGFjZSBfbGVhZGluZ19ub3Zhc19yZSwgJycgKSwgJzcnXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fMjEgPSAtPiAgICAgJycucmVwbGFjZSBfbGVhZGluZ19ub3Zhc19yZSwgJycgKSwgJydcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoMTBtdnBfMTogLT5cbiAgICB7IEhvbGxlcml0aCxcbiAgICAgIGhvbGxlcml0aF8xMCxcbiAgICAgIGhvbGxlcml0aF8xMG12cCxcbiAgICAgIGhvbGxlcml0aF8xMjgsXG4gICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzIyID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggLTk5OSAgICksICdLMDAwJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18yMyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAtOTkgICApLCAnTDAwJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18yNCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAtOTAgICApLCAnTDA5J1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18yNSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAtMTEgICApLCAnTDg4J1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18yNiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAtMTAgICApLCAnTDg5J1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18yNyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAgLTkgICApLCAnTTAnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzI4ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICAtOCAgICksICdNMSdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMjkgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgIC03ICAgKSwgJ00yJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18zMCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAgLTYgICApLCAnTTMnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzMxID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICAtNSAgICksICdNNCdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMzIgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgIC00ICAgKSwgJ001J1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18zMyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAgLTMgICApLCAnTTYnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzM0ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICAtMiAgICksICdNNydcbiAgICBAZXEgICAgICggzqlhbnlidF9fMzUgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgIC0xICAgKSwgJ004J1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18zNiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAgIDAgICApLCAnTidcbiAgICBAZXEgICAgICggzqlhbnlidF9fMzcgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgICAxICAgKSwgJ08xJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18zOCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAgKzkgICApLCAnTzknXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzM5ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICsxMCAgICksICdQMTAnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzQwID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICsyMCAgICksICdQMjAnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzQxID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICs5MCAgICksICdQOTAnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzQyID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggIDEyMyAgICksICdRMTIzJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X180MyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICs5MDAgICApLCAnUTkwMCdcbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaDEwbXZwXzI6IC0+XG4gICAgeyBIb2xsZXJpdGgsXG4gICAgICBob2xsZXJpdGhfMTAsXG4gICAgICBob2xsZXJpdGhfMTBtdnAsXG4gICAgICBob2xsZXJpdGhfMTI4LFxuICAgICAgaW50ZXJuYWxzICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAgICAgKCDOqWFueWJ0X180NCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4IC05OTkgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIC05OTlcbiAgICBAZXEgICAgICggzqlhbnlidF9fNDUgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgLTk5ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgLTk5XG4gICAgQGVxICAgICAoIM6pYW55YnRfXzQ2ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggIC05MCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgIC05MFxuICAgIEBlcSAgICAgKCDOqWFueWJ0X180NyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAtMTEgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAtMTFcbiAgICBAZXEgICAgICggzqlhbnlidF9fNDggPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgLTEwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgLTEwXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzQ5ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICAtOSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAtOVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X181MCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAgLTggICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgLThcbiAgICBAZXEgICAgICggzqlhbnlidF9fNTEgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgIC03ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgIC03XG4gICAgQGVxICAgICAoIM6pYW55YnRfXzUyID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICAtNiAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAtNlxuICAgIEBlcSAgICAgKCDOqWFueWJ0X181MyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAgLTUgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgLTVcbiAgICBAZXEgICAgICggzqlhbnlidF9fNTQgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgIC00ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgIC00XG4gICAgQGVxICAgICAoIM6pYW55YnRfXzU1ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICAtMyAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAtM1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X181NiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAgLTIgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgLTJcbiAgICBAZXEgICAgICggzqlhbnlidF9fNTcgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgIC0xICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgIC0xXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzU4ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICAgMCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAgMFxuICAgIEBlcSAgICAgKCDOqWFueWJ0X181OSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAgIDEgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgIDFcbiAgICBAZXEgICAgICggzqlhbnlidF9fNjAgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgICs5ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgICs5XG4gICAgQGVxICAgICAoIM6pYW55YnRfXzYxID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICsxMCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICsxMFxuICAgIEBlcSAgICAgKCDOqWFueWJ0X182MiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICArMjAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICArMjBcbiAgICBAZXEgICAgICggzqlhbnlidF9fNjMgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgKzkwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgKzkwXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzY0ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggIDEyMyAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgIDEyM1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X182NSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICs5MDAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICs5MDBcbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaDEwbXZwXzM6IC0+XG4gICAgeyBIb2xsZXJpdGgsXG4gICAgICBob2xsZXJpdGhfMTAsXG4gICAgICBob2xsZXJpdGhfMTBtdnAsXG4gICAgICBob2xsZXJpdGhfMTI4LFxuICAgICAgaW50ZXJuYWxzICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAgICAgKCDOqWFueWJ0X182NiA9IC0+ICggaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggLTk5OSApLnBhZEVuZCAyNSwgJ04nICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAtOTk5LCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzY3ID0gLT4gKCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgLTk5ICkucGFkRW5kIDI1LCAnTicgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAtOTksIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNjggPSAtPiAoIGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAtOTAgKS5wYWRFbmQgMjUsICdOJyApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgIC05MCwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X182OSA9IC0+ICggaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggIC0xMSApLnBhZEVuZCAyNSwgJ04nICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgLTExLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzcwID0gLT4gKCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgLTEwICkucGFkRW5kIDI1LCAnTicgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAtMTAsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNzEgPSAtPiAoIGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAgLTkgKS5wYWRFbmQgMjUsICdOJyApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICAtOSwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X183MiA9IC0+ICggaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICAtOCApLnBhZEVuZCAyNSwgJ04nICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgIC04LCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzczID0gLT4gKCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgIC03ICkucGFkRW5kIDI1LCAnTicgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgLTcsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNzQgPSAtPiAoIGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAgLTYgKS5wYWRFbmQgMjUsICdOJyApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICAtNiwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X183NSA9IC0+ICggaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICAtNSApLnBhZEVuZCAyNSwgJ04nICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgIC01LCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzc2ID0gLT4gKCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgIC00ICkucGFkRW5kIDI1LCAnTicgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgLTQsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNzcgPSAtPiAoIGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAgLTMgKS5wYWRFbmQgMjUsICdOJyApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICAtMywgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X183OCA9IC0+ICggaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICAtMiApLnBhZEVuZCAyNSwgJ04nICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgIC0yLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzc5ID0gLT4gKCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgIC0xICkucGFkRW5kIDI1LCAnTicgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgLTEsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fODAgPSAtPiAoIGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAgIDAgKS5wYWRFbmQgMjUsICdOJyApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICAgMCwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X184MSA9IC0+ICggaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICAgMSApLnBhZEVuZCAyNSwgJ04nICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgICAxLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzgyID0gLT4gKCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgICs5ICkucGFkRW5kIDI1LCAnTicgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgKzksIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fODMgPSAtPiAoIGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICArMTAgKS5wYWRFbmQgMjUsICdOJyApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICsxMCwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X184NCA9IC0+ICggaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICsyMCApLnBhZEVuZCAyNSwgJ04nICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgKzIwLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzg1ID0gLT4gKCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgKzkwICkucGFkRW5kIDI1LCAnTicgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICArOTAsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fODYgPSAtPiAoIGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAxMjMgKS5wYWRFbmQgMjUsICdOJyApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgIDEyMywgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X184NyA9IC0+ICggaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggKzkwMCApLnBhZEVuZCAyNSwgJ04nICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyArOTAwLCBdXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGgxMG12cF9zb3J0aW5nXzE6IC0+XG4gICAgeyBIb2xsZXJpdGgsXG4gICAgICBob2xsZXJpdGhfMTAsXG4gICAgICBob2xsZXJpdGhfMTBtdnAsXG4gICAgICBob2xsZXJpdGhfMTI4LFxuICAgICAgaW50ZXJuYWxzICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHNvcnRlZF9zaW5nbGVzID0gKCBwYWRkaW5nID0gbnVsbCApID0+XG4gICAgICBwcm9iZXMgPSBbXG4gICAgICAgIFsgLTk5OSwgXVxuICAgICAgICBbICAtOTksIF1cbiAgICAgICAgWyAgLTkwLCBdXG4gICAgICAgIFsgIC0xMSwgXVxuICAgICAgICBbICAtMTAsIF1cbiAgICAgICAgWyAgIC05LCBdXG4gICAgICAgIFsgICAtOCwgXVxuICAgICAgICBbICAgLTcsIF1cbiAgICAgICAgWyAgIC02LCBdXG4gICAgICAgIFsgICAtNSwgXVxuICAgICAgICBbICAgLTQsIF1cbiAgICAgICAgWyAgIC0zLCBdXG4gICAgICAgIFsgICAtMiwgXVxuICAgICAgICBbICAgLTEsIF1cbiAgICAgICAgWyAgICAwLCBdXG4gICAgICAgIFsgICAgMSwgXVxuICAgICAgICBbICAgKzksIF1cbiAgICAgICAgWyAgKzEwLCBdXG4gICAgICAgIFsgICsyMCwgXVxuICAgICAgICBbICArOTAsIF1cbiAgICAgICAgWyAgMTIzLCBdXG4gICAgICAgIFsgKzkwMCwgXVxuICAgICAgICBdXG4gICAgICBmb3IgcHJvYmUsIGlkeCBpbiBwcm9iZXNcbiAgICAgICAgc2sgICAgICAgICAgICA9IGhvbGxlcml0aF8xMG12cC5lbmNvZGUgcHJvYmVcbiAgICAgICAgc2sgICAgICAgICAgICA9IHNrLnBhZEVuZCBwYWRkaW5nLCBob2xsZXJpdGhfMTBtdnAuY2ZnLl96cHVuc1sgMCBdIGlmIHBhZGRpbmc/XG4gICAgICAgIHByb2Jlc1sgaWR4IF0gPSB7IHNrLCBwcm9iZSwgaWR4LCB9XG4gICAgICBwcm9iZXMuc29ydCAoIGEsIGIgKSAtPlxuICAgICAgICByZXR1cm4gLTEgaWYgYS5zayA8IGIuc2tcbiAgICAgICAgcmV0dXJuICsxIGlmIGEuc2sgPiBiLnNrXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICBmb3IgZW50cnksIGlkeCBpbiBwcm9iZXNcbiAgICAgICAgIyBkZWJ1ZyAnzqlobGx0X184OCcsIGVudHJ5XG4gICAgICAgIEBlcSAoIM6paGxsdF9fODkgPSAtPiBlbnRyeS5pZHggKSwgaWR4XG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgc29ydGVkX3NpbmdsZXMgbnVsbFxuICAgIHNvcnRlZF9zaW5nbGVzIDEwXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGgxMG12cF9zb3J0aW5nXzI6IC0+XG4gICAgeyBIb2xsZXJpdGgsXG4gICAgICBob2xsZXJpdGhfMTBtdnAsXG4gICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcHJvYmVzID0gW1xuICAgICAgWyBbIC05OTksICAgICAgICAgICBdLCAnSzAwMCcsICAgICAgXVxuICAgICAgWyBbICAtOTksICAgICAgICAgICBdLCAnTDAwJywgICAgICAgXVxuICAgICAgWyBbICAtOTAsICAgICAgICAgICBdLCAnTDA5JywgICAgICAgXVxuICAgICAgWyBbICAtMTEsICAgICAgICAgICBdLCAnTDg4JywgICAgICAgXVxuICAgICAgWyBbICAtMTAsICAgICAgICAgICBdLCAnTDg5JywgICAgICAgXVxuICAgICAgWyBbICAgLTksICAgICAgICAgICBdLCAnTTAnLCAgICAgICAgXVxuICAgICAgWyBbICAgLTgsICAgICAgICAgICBdLCAnTTEnLCAgICAgICAgXVxuICAgICAgWyBbICAgLTcsICAgICAgICAgICBdLCAnTTInLCAgICAgICAgXVxuICAgICAgWyBbICAgLTYsICAgICAgICAgICBdLCAnTTMnLCAgICAgICAgXVxuICAgICAgWyBbICAgLTUsICAgICAgICAgICBdLCAnTTQnLCAgICAgICAgXVxuICAgICAgWyBbICAgLTQsICAgICAgICAgICBdLCAnTTUnLCAgICAgICAgXVxuICAgICAgWyBbICAgLTMsICAgICAgICAgICBdLCAnTTYnLCAgICAgICAgXVxuICAgICAgWyBbICAgLTIsICAgICAgICAgICBdLCAnTTcnLCAgICAgICAgXVxuICAgICAgWyBbICAgLTEsICAgICAgICAgICBdLCAnTTgnLCAgICAgICAgXVxuICAgICAgWyBbICAgKzAsICAtMjAsICAgICBdLCAnTkwyMCcsICAgICAgXVxuICAgICAgWyBbICAgKzAsICAgICAgICAgICBdLCAnTicsICAgICAgICAgXVxuICAgICAgWyBbICAgKzAsICArMjAsICAgICBdLCAnTlAyMCcsICAgICAgXVxuICAgICAgWyBbICAgKzksICAgICAgICAgICBdLCAnTzknLCAgICAgICAgXVxuICAgICAgWyBbICArMTAsICAgLTMsICAgICBdLCAnUDEwTTYnLCAgICAgXVxuICAgICAgWyBbICArMTAsICAgLTIsICAgICBdLCAnUDEwTTcnLCAgICAgXVxuICAgICAgWyBbICArMTAsICAgLTEsICAgICBdLCAnUDEwTTgnLCAgICAgXVxuICAgICAgWyBbICArMTAsICAgICAgICAgICBdLCAnUDEwJywgICAgICAgXVxuICAgICAgWyBbICArMTAsICAgKzAsICAgICBdLCAnUDEwTicsICAgICAgXVxuICAgICAgWyBbICArMTAsICAgKzEsICAgICBdLCAnUDEwTzEnLCAgICAgXVxuICAgICAgWyBbICArMTAsICArMTAsIC0xLCBdLCAnUDEwUDEwTTgnLCAgXVxuICAgICAgWyBbICArMTAsICArMTAsICAgICBdLCAnUDEwUDEwJywgICAgXVxuICAgICAgWyBbICArMTAsICArMjAsICAgICBdLCAnUDEwUDIwJywgICAgXVxuICAgICAgWyBbICArMjAsICAgICAgICAgICBdLCAnUDIwJywgICAgICAgXVxuICAgICAgWyBbICArMjAsICArMTAsICAgICBdLCAnUDIwUDEwJywgICAgXVxuICAgICAgWyBbICArOTAsICAgICAgICAgICBdLCAnUDkwJywgICAgICAgXVxuICAgICAgWyBbICs5MDAsICAgICAgICAgICBdLCAnUTkwMCcsICAgICAgXVxuICAgICAgXVxuICAgIHVsaW5lcyAgICAgICAgICAgID0gW11cbiAgICBwbGluZXMgICAgICAgICAgICA9IFtdXG4gICAgZXhwZWN0ZWRfaW5kZXhlcyAgPSAoIGlkeCBmb3IgaWR4IGluIFsgMCAuLi4gcHJvYmVzLmxlbmd0aCBdIClcbiAgICBzaHVmZmxlICAgICAgICAgICA9IEdVWS5ybmQuZ2V0X3NodWZmbGUgNTcsIDg4XG4gICAgZm9yIFsgdmR4LCBza19tYXRjaGVyLCBdLCBpZHggaW4gcHJvYmVzXG4gICAgICB1c2sgICA9IGhvbGxlcml0aF8xMG12cC5lbmNvZGUgdmR4XG4gICAgICBwc2sgICA9IHVzay5wYWRFbmQgMTAsIGhvbGxlcml0aF8xMG12cC5jZmcuX3pwdW5zWyAwIF1cbiAgICAgIHVzayAgID0gdXNrLnBhZEVuZCAxMCwgJyAnXG4gICAgICB1bGluZXMucHVzaCBcIiN7dXNrfSAje3JwciB2ZHh9ICN7aWR4fVwiXG4gICAgICBwbGluZXMucHVzaCBcIiN7cHNrfSAje3JwciB2ZHh9ICN7aWR4fVwiXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmb3IgXyBpbiBbIDEgLi4gMTAgXVxuICAgICAgdWxpbmVzID0gc2h1ZmZsZSB1bGluZXNcbiAgICAgIHVsaW5lcy5zb3J0KClcbiAgICAgIHJlYWxfaW5kZXhlcyA9IFtdXG4gICAgICBmb3IgdWxpbmUgaW4gdWxpbmVzXG4gICAgICAgICMgaGVscCAnzqlobGx0X185MCcsIHVsaW5lXG4gICAgICAgIHJlYWxfaW5kZXhlcy5wdXNoIE51bWJlciB1bGluZS5yZXBsYWNlIC9eLio/XFxzKFswLTldKykkLywgJyQxJ1xuICAgICAgQGVxICggzqlobGx0X185MSA9IC0+IGVxdWFscyBleHBlY3RlZF9pbmRleGVzLCByZWFsX2luZGV4ZXMgKSwgdHJ1ZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZm9yIF8gaW4gWyAxIC4uIDEwIF1cbiAgICAgIHBsaW5lcyA9IHNodWZmbGUgcGxpbmVzXG4gICAgICBwbGluZXMuc29ydCgpXG4gICAgICByZWFsX2luZGV4ZXMgPSBbXVxuICAgICAgZm9yIHBsaW5lIGluIHBsaW5lc1xuICAgICAgICAjIGhlbHAgJ86paGxsdF9fOTInLCBwbGluZVxuICAgICAgICByZWFsX2luZGV4ZXMucHVzaCBOdW1iZXIgcGxpbmUucmVwbGFjZSAvXi4qP1xccyhbMC05XSspJC8sICckMSdcbiAgICAgIEBlcSAoIM6paGxsdF9fOTMgPSAtPiBlcXVhbHMgZXhwZWN0ZWRfaW5kZXhlcywgcmVhbF9pbmRleGVzICksIHRydWVcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBob2xsZXJpdGhfMTBtdnAyX2JpZ19zaHVmZmxlOiAtPlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEwbXZwMixcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgY29kZWMgICAgICAgICAgICAgICAgICAgICAgID0gaG9sbGVyaXRoXzEwbXZwMlxuICAgIHJuZF92ZHhfY2ZnICAgICAgICAgICAgICAgICA9XG4gICAgICBzZWVkOiAgICAgICAgIG51bGxcbiAgICAgIG1pbl9sZW5ndGg6ICAgMVxuICAgICAgbWF4X2xlbmd0aDogICBjb2RlYy5jZmcuZGltZW5zaW9uIC0gMVxuICAgICAgbWluX2lkeDogICAgICBNYXRoLm1heCBjb2RlYy5jZmcuX21pbl9pbnRlZ2VyLCAtMjAwMFxuICAgICAgbWF4X2lkeDogICAgICBNYXRoLm1pbiBjb2RlYy5jZmcuX21heF9pbnRlZ2VyLCArMjAwMFxuICAgICMgZGVidWcgJ86paGxsdF9fOTQnLCBybmRfdmR4X2NmZ1xuICAgICMgZGVidWcgJ86paGxsdF9fOTUnLCBjb2RlYy5jZmcuX3NvcnRrZXlfd2lkdGhcbiAgICBnZXRfcmFuZG9tX3ZkeCAgICAgICAgICAgICAgPSBoZWxwZXJzLmdldF9yYW5kb21fdmR4X3Byb2R1Y2VyIHJuZF92ZHhfY2ZnXG4gICAgcHJvYmVfc3ViX2NvdW50ICAgICAgICAgICAgID0gM1xuICAgIHNodWZmbGUgICAgICAgICAgICAgICAgICAgICA9IEdVWS5ybmQuZ2V0X3NodWZmbGUgNTcsIDg4XG4gICAgZW5jb2RlICAgICAgICAgICAgICAgICAgICAgID0gKCB2ZHggKSAtPiAoIGNvZGVjLmVuY29kZSB2ZHggKS5wYWRFbmQgY29kZWMuY2ZnLl9zb3J0a2V5X3dpZHRoLCBjb2RlYy5jZmcuX2NpcGhlclxuICAgIHByb2Jlc19zb3J0a2V5ICAgICAgICAgICAgICA9IFtdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmb3IgZmlyc3RfaWR4IGluIFsgcm5kX3ZkeF9jZmcubWluX2lkeCAuLiBybmRfdmR4X2NmZy5tYXhfaWR4IF1cbiAgICAgIGZvciBfIGluIFsgMSAuLiBwcm9iZV9zdWJfY291bnQgXVxuICAgICAgICB2ZHggPSBbIGZpcnN0X2lkeCwgZ2V0X3JhbmRvbV92ZHgoKS4uLiwgXVxuICAgICAgICBzayAgPSBlbmNvZGUgdmR4XG4gICAgICAgIHByb2Jlc19zb3J0a2V5LnB1c2ggeyB2ZHgsIHNrLCB9XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwcm9iZXNfc29ydGtleSAgICA9IHNodWZmbGUgcHJvYmVzX3NvcnRrZXlcbiAgICBwcm9iZXNfdmR4ICAgICAgICA9IHByb2Jlc19zb3J0a2V5WyAuLiBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBzb3J0X2J5X3ZkeCAgICAgICA9ICggYSwgYiApIC0+XG4gICAgICBhID0gYS52ZHhcbiAgICAgIGIgPSBiLnZkeFxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4uICggTWF0aC5tYXggYS5sZW5ndGgsIGIubGVuZ3RoICkgXVxuICAgICAgICBkYSA9IGFbIGlkeCBdID8gMFxuICAgICAgICBkYiA9IGJbIGlkeCBdID8gMFxuICAgICAgICBjb250aW51ZSBpZiBkYSBpcyBkYlxuICAgICAgICByZXR1cm4gLTEgaWYgZGEgPCBkYlxuICAgICAgICByZXR1cm4gKzFcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBzb3J0X2J5X3NvcnRrZXkgICA9ICggYSwgYiApIC0+XG4gICAgICBhID0gYS5za1xuICAgICAgYiA9IGIuc2tcbiAgICAgIHJldHVybiAgMCBpZiBhIGlzIGJcbiAgICAgIHJldHVybiAtMSBpZiBhIDwgYlxuICAgICAgcmV0dXJuICsxXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwcm9iZXNfdmR4LnNvcnQgICAgIHNvcnRfYnlfdmR4XG4gICAgcHJvYmVzX3NvcnRrZXkuc29ydCBzb3J0X2J5X3NvcnRrZXlcbiAgICBmb3IgcHJvYmVfdmR4LCBpZHggaW4gcHJvYmVzX3ZkeFxuICAgICAgcHJvYmVfc29ydGtleSA9IHByb2Jlc19zb3J0a2V5WyBpZHggXVxuICAgICAgIyB3aGlzcGVyICfOqWhsbHRfXzk2JywgKCBnb2xkIHByb2JlX3NvcnRrZXkuc2sgKSwgKCByZWQgcHJvYmVfdmR4LnZkeCApLCAoIGxpbWUgcHJvYmVfc29ydGtleS52ZHggKVxuICAgICAgQGVxICggzqlobGx0X185NyA9IC0+IHByb2JlX3NvcnRrZXkudmR4ICksIHByb2JlX3ZkeC52ZHhcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBob2xsZXJpdGhfMTI4X2JpZ19zaHVmZmxlOiAtPlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEyOCxcbiAgICAgIGhvbGxlcml0aF8xMG12cDIsXG4gICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgIGNvZGVjICAgICAgICAgICAgICAgICAgICAgICA9IGhvbGxlcml0aF8xMjhcbiAgICAjIGNvZGVjICAgICAgICAgICAgICAgICAgICAgICA9IGhvbGxlcml0aF8xMG12cDJcbiAgICBybmRfdmR4X2NmZyAgICAgICAgICAgICAgICAgPVxuICAgICAgc2VlZDogICAgICAgICBudWxsXG4gICAgICBtaW5fbGVuZ3RoOiAgIDFcbiAgICAgIG1heF9sZW5ndGg6ICAgY29kZWMuY2ZnLmRpbWVuc2lvbiAtIDFcbiAgICAgIG1pbl9pZHg6ICAgICAgTWF0aC5tYXggY29kZWMuY2ZnLl9taW5faW50ZWdlciwgLTIwMDBcbiAgICAgIG1heF9pZHg6ICAgICAgTWF0aC5taW4gY29kZWMuY2ZnLl9tYXhfaW50ZWdlciwgKzIwMDBcbiAgICAjIGRlYnVnICfOqWhsbHRfXzk4Jywgcm5kX3ZkeF9jZmdcbiAgICAjIGRlYnVnICfOqWhsbHRfXzk5JywgY29kZWMuY2ZnLl9zb3J0a2V5X3dpZHRoXG4gICAgZ2V0X3JhbmRvbV92ZHggICAgICAgICAgICAgID0gaGVscGVycy5nZXRfcmFuZG9tX3ZkeF9wcm9kdWNlciBybmRfdmR4X2NmZ1xuICAgIHByb2JlX3N1Yl9jb3VudCAgICAgICAgICAgICA9IDNcbiAgICBzaHVmZmxlICAgICAgICAgICAgICAgICAgICAgPSBHVVkucm5kLmdldF9zaHVmZmxlIDU3LCA4OFxuICAgIGVuY29kZSAgICAgICAgICAgICAgICAgICAgICA9ICggdmR4ICkgLT4gKCBjb2RlYy5lbmNvZGUgdmR4ICkucGFkRW5kIGNvZGVjLmNmZy5fc29ydGtleV93aWR0aCwgY29kZWMuY2ZnLl9jaXBoZXJcbiAgICBwcm9iZXNfc29ydGtleSAgICAgICAgICAgICAgPSBbXVxuICAgICMgZGVidWcgJ86paGxsdF8xMDAnLCBybmRfdmR4X2NmZzsgcHJvY2Vzcy5leGl0IDExMVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgd2Fsa19maXJzdF9pZHhzICAgICAgICAgICAgID0gLT5cbiAgICAgIHlpZWxkIGlkeCBmb3IgaWR4IGluIFsgY29kZWMuY2ZnLl9taW5faW50ZWdlciAgICAgIC4uIGNvZGVjLmNmZy5fbWluX2ludGVnZXIgKyAxMCBdXG4gICAgICB5aWVsZCBpZHggZm9yIGlkeCBpbiBbIHJuZF92ZHhfY2ZnLm1pbl9pZHggICAgICAgICAuLiBybmRfdmR4X2NmZy5tYXhfaWR4ICAgICAgICAgXVxuICAgICAgeWllbGQgaWR4IGZvciBpZHggaW4gWyBjb2RlYy5jZmcuX21heF9pbnRlZ2VyIC0gMTAgLi4gY29kZWMuY2ZnLl9tYXhfaW50ZWdlciAgICAgIF1cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmb3IgZmlyc3RfaWR4IGZyb20gd2Fsa19maXJzdF9pZHhzKClcbiAgICAjIGZvciBmaXJzdF9pZHggaW4gWyAtMTAwIC4uICsxMDAgXVxuICAgICAgIyBkZWJ1ZyAnzqlobGx0XzEwMScsIHsgZmlyc3RfaWR4LCB9XG4gICAgICBmb3IgXyBpbiBbIDEgLi4gcHJvYmVfc3ViX2NvdW50IF1cbiAgICAgICAgdmR4ID0gWyBmaXJzdF9pZHgsIGdldF9yYW5kb21fdmR4KCkuLi4sIF1cbiAgICAgICAgc2sgID0gZW5jb2RlIHZkeFxuICAgICAgICBwcm9iZXNfc29ydGtleS5wdXNoIHsgdmR4LCBzaywgfVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcHJvYmVzX3NvcnRrZXkgICAgPSBzaHVmZmxlIHByb2Jlc19zb3J0a2V5XG4gICAgcHJvYmVzX3ZkeCAgICAgICAgPSBwcm9iZXNfc29ydGtleVsgLi4gXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgc29ydF9ieV92ZHggICAgICAgPSAoIGEsIGIgKSAtPlxuICAgICAgYSA9IGEudmR4XG4gICAgICBiID0gYi52ZHhcbiAgICAgIGZvciBpZHggaW4gWyAwIC4uLiAoIE1hdGgubWF4IGEubGVuZ3RoLCBiLmxlbmd0aCApIF1cbiAgICAgICAgZGEgPSBhWyBpZHggXSA/IDBcbiAgICAgICAgZGIgPSBiWyBpZHggXSA/IDBcbiAgICAgICAgY29udGludWUgaWYgZGEgaXMgZGJcbiAgICAgICAgcmV0dXJuIC0xIGlmIGRhIDwgZGJcbiAgICAgICAgcmV0dXJuICsxXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgc29ydF9ieV9zb3J0a2V5ICAgPSAoIGEsIGIgKSAtPlxuICAgICAgYSA9IGEuc2tcbiAgICAgIGIgPSBiLnNrXG4gICAgICByZXR1cm4gIDAgaWYgYSBpcyBiXG4gICAgICByZXR1cm4gLTEgaWYgYSA8IGJcbiAgICAgIHJldHVybiArMVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcHJvYmVzX3ZkeC5zb3J0ICAgICBzb3J0X2J5X3ZkeFxuICAgIHByb2Jlc19zb3J0a2V5LnNvcnQgc29ydF9ieV9zb3J0a2V5XG4gICAgZm9yIHByb2JlX3ZkeCwgaWR4IGluIHByb2Jlc192ZHhcbiAgICAgIHByb2JlX3NvcnRrZXkgPSBwcm9iZXNfc29ydGtleVsgaWR4IF1cbiAgICAgICMgd2hpc3BlciAnzqlobGx0XzEwMicsICggZ29sZCBwcm9iZV9zb3J0a2V5LnNrICksICggcmVkIHByb2JlX3ZkeC52ZHggKSwgKCBsaW1lIHByb2JlX3NvcnRrZXkudmR4IClcbiAgICAgIEBlcSAoIM6paGxsdF8xMDMgPSAtPiBwcm9iZV9zb3J0a2V5LnZkeCApLCBwcm9iZV92ZHgudmR4XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaDEyOF8xNjM4M19zb3J0aW5nXzI6IC0+XG4gICAgeyBIb2xsZXJpdGgsXG4gICAgICBob2xsZXJpdGhfMTI4XzE2MzgzLFxuICAgICAgaW50ZXJuYWxzICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHByb2JlcyA9IFtcbiAgICAgIFsgWyAtOTk5LCAgICAgICAgICAgXSwgJ8ONwr87w6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgIF1cbiAgICAgIFsgWyAgLTk5LCAgICAgICAgICAgXSwgJ8OOP8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgIF1cbiAgICAgIFsgWyAgLTkwLCAgICAgICAgICAgXSwgJ8OOSMOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgIF1cbiAgICAgIFsgWyAgLTgwLCAgICAgICAgICAgXSwgJ8OOUsOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgIF1cbiAgICAgIFsgWyAgLTIxLCAgICAgICAgICAgXSwgJ8OOwrHDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsICBdXG4gICAgICBbIFsgIC0yMCwgICAgICAgICAgIF0sICfDj8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgXVxuICAgICAgWyBbICAtMTEsICAgICAgICAgICBdLCAnw5jDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgIF1cbiAgICAgIFsgWyAgLTEwLCAgICAgICAgICAgXSwgJ8OZw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsICBdXG4gICAgICBbIFsgICAtOSwgICAgICAgICAgIF0sICfDmsOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgXVxuICAgICAgWyBbICAgLTgsICAgICAgICAgICBdLCAnw5vDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgIF1cbiAgICAgIFsgWyAgIC03LCAgICAgICAgICAgXSwgJ8Ocw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsICBdXG4gICAgICBbIFsgICAtNiwgICAgICAgICAgIF0sICfDncOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgXVxuICAgICAgWyBbICAgLTUsICAgICAgICAgICBdLCAnw57Do8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgIF1cbiAgICAgIFsgWyAgIC00LCAgICAgICAgICAgXSwgJ8Ofw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsICBdXG4gICAgICBbIFsgICAtMywgICAgICAgICAgIF0sICfDoMOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgXVxuICAgICAgWyBbICAgLTIsICAgICAgICAgICBdLCAnw6HDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgIF1cbiAgICAgIFsgWyAgIC0xLCAgICAgICAgICAgXSwgJ8Oiw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsICBdXG4gICAgICBbIFsgICArMCwgIC0yMCwgICAgIF0sICfDo8OPw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgXVxuICAgICAgWyBbICAgKzAsICAgICAgICAgICBdLCAnw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgIF1cbiAgICAgIFsgWyAgICswLCAgKzIwLCAgICAgXSwgJ8Ojw7fDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsICBdXG4gICAgICBbIFsgICArOSwgICAgICAgICAgIF0sICfDrMOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgXVxuICAgICAgWyBbICArMTAsICAgLTMsICAgICBdLCAnw63DoMOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgIF1cbiAgICAgIFsgWyAgKzEwLCAgIC0yLCAgICAgXSwgJ8Otw6HDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsICBdXG4gICAgICBbIFsgICsxMCwgICAtMSwgICAgIF0sICfDrcOiw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgXVxuICAgICAgWyBbICArMTAsICAgICAgICAgICBdLCAnw63Do8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgIF1cbiAgICAgIFsgWyAgKzEwLCAgICswLCAgICAgXSwgJ8Otw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsICBdXG4gICAgICBbIFsgICsxMCwgICArMSwgICAgIF0sICfDrcOkw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgXVxuICAgICAgWyBbICArMTAsICArMTAsIC0xLCBdLCAnw63DrcOiw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgIF1cbiAgICAgIFsgWyAgKzEwLCAgKzEwLCAgICAgXSwgJ8Otw63Do8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsICBdXG4gICAgICBbIFsgICsxMCwgICsyMCwgICAgIF0sICfDrcO3w6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgXVxuICAgICAgWyBbICArMjAsICAgICAgICAgICBdLCAnw7fDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgIF1cbiAgICAgIFsgWyAgKzIwLCAgKzEwLCAgICAgXSwgJ8O3w63Do8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsICBdXG4gICAgICBbIFsgICs5MCwgICAgICAgICAgIF0sICfDuH7Do8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsICBdXG4gICAgICBbIFsgKzkwMCwgICAgICAgICAgIF0sICfDuSomw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgIF1cbiAgICAgIF1cbiAgICB1bnBhZGRlZF9saW5lcyAgICA9IFtdXG4gICAgcGFkZGVkX2xpbmVzICAgICAgPSBbXVxuICAgIGV4cGVjdGVkX2luZGV4ZXMgID0gKCBpZHggZm9yIGlkeCBpbiBbIDAgLi4uIHByb2Jlcy5sZW5ndGggXSApXG4gICAgc2h1ZmZsZSAgICAgICAgICAgPSBHVVkucm5kLmdldF9zaHVmZmxlIDU3LCA4OFxuICAgIGNvZGVjICAgICAgICAgICAgID0gaG9sbGVyaXRoXzEyOF8xNjM4M1xuICAgICMgZGVidWcgJ86paGxsdF8xMDQnLCBjb2RlYy5jZmcuZGlnaXRzX3Blcl9pZHhcbiAgICAjIGRlYnVnICfOqWhsbHRfMTA1JywgY29kZWMuY2ZnLnplcm9fcGFkX2xlbmd0aFxuICAgIEBlcSAoIM6paGxsdF8xMDYgPSAtPiBjb2RlYy5jZmcuX2Jhc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAxMjhcbiAgICBAZXEgKCDOqWhsbHRfMTA3ID0gLT4gY29kZWMuY2ZnLl9tYXhfaW50ZWdlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgKzE2MzgzXG4gICAgQGVxICggzqlobGx0XzEwOCA9IC0+IGNvZGVjLmNmZy5fbWluX2ludGVnZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC0xNjM4M1xuICAgIEBlcSAoIM6paGxsdF8xMDkgPSAtPiBjb2RlYy5jZmcuX3BtYWdfbGlzdFsgMiBdICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8O5J1xuICAgIEBlcSAoIM6paGxsdF8xMTAgPSAtPiBjb2RlYy5jZmcuX25tYWdfbGlzdFsgMiBdICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8ONJ1xuICAgIEBlcSAoIM6paGxsdF8xMTEgPSAtPiBjb2RlYy5lbmNvZGUgY29kZWMuY2ZnLl9tYXhfaW50ZWdlciAgICAgICAgICAgICAgICApLCAnw7nDhsOGJ1xuICAgIEBlcSAoIM6paGxsdF8xMTIgPSAtPiBjb2RlYy5lbmNvZGUgY29kZWMuY2ZnLl9taW5faW50ZWdlciAgICAgICAgICAgICAgICApLCAnw40hISdcbiAgICBAZXEgKCDOqWhsbHRfMTEzID0gLT4gY29kZWMuZGVjb2RlICfDjSEhJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgLTE2MzgzIF1cbiAgICBAdGhyb3dzICggzqlobGx0XzExNCA9IC0+IGNvZGVjLmRlY29kZSAnw4chISEhISEhIScgICAgICAgICAgICAgICAgICAgICAgICksIC9ub3QgYSB2YWxpZCBzb3J0a2V5L1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZm9yIFsgdmR4LCBza19tYXRjaGVyLCBdLCBpZHggaW4gcHJvYmVzXG4gICAgICB1c2sgICA9IGNvZGVjLmVuY29kZSB2ZHhcbiAgICAgIEBlcSAoIM6paGxsdF8xMTUgPSAtPiB1c2sgKSwgc2tfbWF0Y2hlclxuICAgICAgIyBlY2hvIHJwciB1c2tcbiAgICAgIHBzayAgID0gdXNrLnBhZEVuZCAxMCwgY29kZWMuY2ZnLl9jaXBoZXJcbiAgICAgIHVzayAgID0gdXNrLnBhZEVuZCAxMCwgJyAnXG4gICAgICB1bnBhZGRlZF9saW5lcy5wdXNoIFwiI3t1c2t9ICN7cnByIHZkeH0gI3tpZHh9XCJcbiAgICAgIHBhZGRlZF9saW5lcy5wdXNoIFwiI3twc2t9ICN7cnByIHZkeH0gI3tpZHh9XCJcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAoIM6paGxsdF8xMTYgPSAtPiBjb2RlYy5jZmcuZGlnaXRzX3Blcl9pZHggICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgMlxuICAgIEBlcSAoIM6paGxsdF8xMTcgPSAtPiBjb2RlYy5jZmcuX21heF96cHVuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDIwXG4gICAgQGVxICggzqlobGx0XzExOCA9IC0+IGNvZGVjLmNmZy5fbmF1Z2h0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyEnXG4gICAgQGVxICggzqlobGx0XzExOSA9IC0+IGNvZGVjLmNmZy5fbm92YSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8OGJ1xuICAgIEBlcSAoIM6paGxsdF8xMjAgPSAtPiBjb2RlYy5jZmcuX2NpcGhlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDoydcbiAgICBAZXEgKCDOqWhsbHRfMTIxID0gLT4gY29kZWMuY2ZnLl9ubWFnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnIMOOw40nXG4gICAgQGVxICggzqlobGx0XzEyMiA9IC0+IGNvZGVjLmNmZy5fcG1hZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyDDuMO5J1xuICAgIEBlcSAoIM6paGxsdF8xMjMgPSAtPiBjb2RlYy5jZmcuX3BtYWdfbGlzdFsgY29kZWMuY2ZnLmRpZ2l0c19wZXJfaWR4IF0gICAgKSwgJ8O5J1xuICAgIEBlcSAoIM6paGxsdF8xMjQgPSAtPiBjb2RlYy5lbmNvZGUgLTE2MzgzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDjSEhJ1xuICAgIEBlcSAoIM6paGxsdF8xMjUgPSAtPiBjb2RlYy5lbmNvZGUgLTE2MzgyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDjSEjJ1xuICAgIEBlcSAoIM6paGxsdF8xMjYgPSAtPiBjb2RlYy5lbmNvZGUgLTEyOSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDjcOFw4UnXG4gICAgQGVxICggzqlobGx0XzEyNyA9IC0+IGNvZGVjLmVuY29kZSAtMTI4ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8ONw4XDhidcbiAgICBAZXEgKCDOqWhsbHRfMTI4ID0gLT4gY29kZWMuZW5jb2RlIC0xMjcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw44hJ1xuICAgIEBlcSAoIM6paGxsdF8xMjkgPSAtPiBjb2RlYy5lbmNvZGUgLTgwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDjlInXG4gICAgQGVxICggzqlobGx0XzEzMCA9IC0+IGNvZGVjLmVuY29kZSAtMjEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8OOwrEnXG4gICAgQGVxICggzqlobGx0XzEzMSA9IC0+IGNvZGVjLmVuY29kZSAtMjEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8OOwrEnXG4gICAgQGVxICggzqlobGx0XzEzMiA9IC0+IGNvZGVjLmVuY29kZSAtMjAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8OPJ1xuICAgIEBlcSAoIM6paGxsdF8xMzMgPSAtPiBjb2RlYy5lbmNvZGUgLTEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDoidcbiAgICBAZXEgKCDOqWhsbHRfMTM0ID0gLT4gY29kZWMuZW5jb2RlICswICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw6MnXG4gICAgQGVxICggzqlobGx0XzEzNSA9IC0+IGNvZGVjLmVuY29kZSArMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8OkJ1xuICAgIEBlcSAoIM6paGxsdF8xMzYgPSAtPiBjb2RlYy5lbmNvZGUgKzIwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDtydcbiAgICBAZXEgKCDOqWhsbHRfMTM3ID0gLT4gY29kZWMuZW5jb2RlICsyMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw7g4J1xuICAgIEBlcSAoIM6paGxsdF8xMzggPSAtPiBjb2RlYy5lbmNvZGUgKzEyNyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDuMOGJ1xuICAgIEBlcSAoIM6paGxsdF8xMzkgPSAtPiBjb2RlYy5lbmNvZGUgKzEyOCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDuSMhJ1xuICAgIEBlcSAoIM6paGxsdF8xNDAgPSAtPiBjb2RlYy5lbmNvZGUgKzEyOSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDuSMjJ1xuICAgIEBlcSAoIM6paGxsdF8xNDEgPSAtPiBjb2RlYy5lbmNvZGUgKzE2MzgyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDucOGw4UnXG4gICAgQGVxICggzqlobGx0XzE0MiA9IC0+IGNvZGVjLmVuY29kZSArMTYzODMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8O5w4bDhidcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAoIM6paGxsdF8xNDMgPSAtPiBjb2RlYy5kZWNvZGUgJ8ONISEnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIC0xNjM4MyBdXG4gICAgQGVxICggzqlobGx0XzE0NCA9IC0+IGNvZGVjLmRlY29kZSAnw40hIycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgLTE2MzgyIF1cbiAgICBAZXEgKCDOqWhsbHRfMTQ1ID0gLT4gY29kZWMuZGVjb2RlICfDjcOFw4UnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIC0xMjkgXVxuICAgIEBlcSAoIM6paGxsdF8xNDYgPSAtPiBjb2RlYy5kZWNvZGUgJ8ONw4XDhicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgLTEyOCBdXG4gICAgQGVxICggzqlobGx0XzE0NyA9IC0+IGNvZGVjLmRlY29kZSAnw44hJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgLTEyNyBdXG4gICAgQGVxICggzqlobGx0XzE0OCA9IC0+IGNvZGVjLmRlY29kZSAnw47CsScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIC0yMSBdXG4gICAgQGVxICggzqlobGx0XzE0OSA9IC0+IGNvZGVjLmRlY29kZSAnw48nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgLTIwIF1cbiAgICBAZXEgKCDOqWhsbHRfMTUwID0gLT4gY29kZWMuZGVjb2RlICfDoicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAtMSBdXG4gICAgQGVxICggzqlobGx0XzE1MSA9IC0+IGNvZGVjLmRlY29kZSAnw6MnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgMCBdXG4gICAgQGVxICggzqlobGx0XzE1MiA9IC0+IGNvZGVjLmRlY29kZSAnw6QnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgMSBdXG4gICAgQGVxICggzqlobGx0XzE1MyA9IC0+IGNvZGVjLmRlY29kZSAnw7cnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgMjAgXVxuICAgIEBlcSAoIM6paGxsdF8xNTQgPSAtPiBjb2RlYy5kZWNvZGUgJ8O4OCcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIDIxIF1cbiAgICBAZXEgKCDOqWhsbHRfMTU1ID0gLT4gY29kZWMuZGVjb2RlICfDuMOGJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgMTI3IF1cbiAgICBAZXEgKCDOqWhsbHRfMTU2ID0gLT4gY29kZWMuZGVjb2RlICfDuSMhJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAxMjggXVxuICAgIEBlcSAoIM6paGxsdF8xNTcgPSAtPiBjb2RlYy5kZWNvZGUgJ8O5IyMnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIDEyOSBdXG4gICAgQGVxICggzqlobGx0XzE1OCA9IC0+IGNvZGVjLmRlY29kZSAnw7nDhsOFJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAxNjM4MiBdXG4gICAgQGVxICggzqlobGx0XzE1OSA9IC0+IGNvZGVjLmRlY29kZSAnw7nDhsOGJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAxNjM4MyBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmb3IgXyBpbiBbIDEgLi4gMTAgXVxuICAgICAgdW5wYWRkZWRfbGluZXMgPSBzaHVmZmxlIHVucGFkZGVkX2xpbmVzXG4gICAgICB1bnBhZGRlZF9saW5lcy5zb3J0KClcbiAgICAgIHJlYWxfaW5kZXhlcyA9IFtdXG4gICAgICBmb3IgdWxpbmUgaW4gdW5wYWRkZWRfbGluZXNcbiAgICAgICAgIyBoZWxwICfOqWhsbHRfMTYwJywgdWxpbmVcbiAgICAgICAgcmVhbF9pbmRleGVzLnB1c2ggTnVtYmVyIHVsaW5lLnJlcGxhY2UgL14uKj9cXHMoWzAtOV0rKSQvLCAnJDEnXG4gICAgICBAZXEgKCDOqWhsbHRfMTYxID0gLT4gZXF1YWxzIGV4cGVjdGVkX2luZGV4ZXMsIHJlYWxfaW5kZXhlcyApLCB0cnVlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmb3IgXyBpbiBbIDEgLi4gMTAgXVxuICAgICAgcGFkZGVkX2xpbmVzID0gc2h1ZmZsZSBwYWRkZWRfbGluZXNcbiAgICAgIHBhZGRlZF9saW5lcy5zb3J0KClcbiAgICAgIHJlYWxfaW5kZXhlcyA9IFtdXG4gICAgICBmb3IgcGxpbmUsIGlkeCBpbiBwYWRkZWRfbGluZXNcbiAgICAgICAgIyBoZWxwICfOqWhsbHRfMTYyJywgcnByIHBsaW5lIGlmIF8gaXMgMVxuICAgICAgICByZWFsX2luZGV4ZXMucHVzaCBOdW1iZXIgcGxpbmUucmVwbGFjZSAvXi4qP1xccyhbMC05XSspJC8sICckMSdcbiAgICAgIEBlcSAoIM6paGxsdF8xNjMgPSAtPiBlcXVhbHMgZXhwZWN0ZWRfaW5kZXhlcywgcmVhbF9pbmRleGVzICksIHRydWVcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoMTI4X2RlY29kZTogLT5cbiAgICB7IEhvbGxlcml0aCxcbiAgICAgIGhvbGxlcml0aF8xMjgsXG4gICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcHJvYmVzX2FuZF9tYXRjaGVycyA9IFtcbiAjICAgICAgJ8OHIcOGw4bDhsOGw4bCvzvDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnXG4gICAgICBbICfDhyHDhsOGw4bDhsOGwr87w6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtOTk5LCAgICAgICAgIF0sICdubnVtOsONLMK/O1stOTk5XXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8OHIcOGw4bDhsOGw4bDhj/Do8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC05OSwgICAgICAgICAgXSwgJ25udW06w44sP1stOTldfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw4chw4bDhsOGw4bDhsOGSMOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTkwLCAgICAgICAgICBdLCAnbm51bTrDjixIWy05MF18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDmMOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC0xMSwgICAgICAgICAgXSwgJ251bjrDmFstMTFdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8OZw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTEwLCAgICAgICAgICBdLCAnbnVuOsOZWy0xMF18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw5rDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtOSwgICAgICAgICAgIF0sICdudW46w5pbLTldfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDm8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC04LCAgICAgICAgICAgXSwgJ251bjrDm1stOF18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Ocw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTcsICAgICAgICAgICBdLCAnbnVuOsOcWy03XXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw53Do8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtNiwgICAgICAgICAgIF0sICdudW46w51bLTZdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDnsOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC01LCAgICAgICAgICAgXSwgJ251bjrDnlstNV18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Ofw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTQsICAgICAgICAgICBdLCAnbnVuOsOfWy00XXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw6DDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtMywgICAgICAgICAgIF0sICdudW46w6BbLTNdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDocOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC0yLCAgICAgICAgICAgXSwgJ251bjrDoVstMl18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Oiw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTEsICAgICAgICAgICBdLCAnbnVuOsOiWy0xXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw6PDj8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAwLCAtMjAsICAgICAgIF0sICd6ZXJvOsOjWzBdfG51bjrDj1stMjBdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICBdXG4gICAgICBbICfDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIDAsICAgICAgICAgICAgXSwgJ3BhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8Ojw6NbMF0nLCAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Ojw7fDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMCwgMjAsICAgICAgICBdLCAnemVybzrDo1swXXxwdW46w7dbMjBdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgXVxuICAgICAgWyAnw6zDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyA5LCAgICAgICAgICAgIF0sICdwdW46w6xbOV18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDrcOgw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIDEwLCAtMywgICAgICAgXSwgJ3B1bjrDrVsxMF18bnVuOsOgWy0zXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Otw6HDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMTAsIC0yLCAgICAgICBdLCAncHVuOsOtWzEwXXxudW46w6FbLTJdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgXVxuICAgICAgWyAnw63DosOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAxMCwgLTEsICAgICAgIF0sICdwdW46w61bMTBdfG51bjrDolstMV18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICBdXG4gICAgICBbICfDrcOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIDEwLCAgICAgICAgICAgXSwgJ3B1bjrDrVsxMF18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Otw6TDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMTAsIDEsICAgICAgICBdLCAncHVuOsOtWzEwXXxwdW46w6RbMV18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgXVxuICAgICAgWyAnw63DrcOiw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAxMCwgMTAsIC0xLCAgIF0sICdwdW46w61bMTBdfHB1bjrDrVsxMF18bnVuOsOiWy0xXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8OjJywgICBdXG4gICAgICBbICfDrcOtw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIDEwLCAxMCwgICAgICAgXSwgJ3B1bjrDrVsxMF18cHVuOsOtWzEwXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Otw7fDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMTAsIDIwLCAgICAgICBdLCAncHVuOsOtWzEwXXxwdW46w7dbMjBdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgXVxuICAgICAgWyAnw7fDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAyMCwgICAgICAgICAgIF0sICdwdW46w7dbMjBdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDt8Otw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIDIwLCAxMCwgICAgICAgXSwgJ3B1bjrDt1syMF18cHVuOsOtWzEwXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgIF1cbiAgICAgIFsgJ8O4fsOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyA5MCwgICAgICAgICAgIF0sICdwbnVtOsO4LH5bOTBdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8O5KibDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIDkwMCwgICAgICAgICAgXSwgJ3BudW06w7ksKiZbOTAwXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICBdXG4gICAgICBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjb2RlYyA9IGhvbGxlcml0aF8xMjhcbiAgICBmb3IgWyBzb3J0a2V5LCBpbmRleF9tYXRjaGVyLCB1bml0X21hdGNoZXIsIF0gaW4gcHJvYmVzX2FuZF9tYXRjaGVyc1xuICAgICAgdW5pdF9yZXN1bHQgICAgID0gW11cbiAgICAgIGluZGV4X3Jlc3VsdCAgICA9IFtdXG4gICAgICBmb3IgdW5pdCBpbiBjb2RlYy5wYXJzZSBzb3J0a2V5XG4gICAgICAgIHVuaXRfcmVzdWx0LnB1c2ggIGhlbHBlcnMucnByX3VuaXQgdW5pdFxuICAgICAgICBpbmRleF9yZXN1bHQucHVzaCB1bml0LmluZGV4IGlmIHVuaXQuaW5kZXg/XG4gICAgICB1bml0X3Jlc3VsdCAgID0gdW5pdF9yZXN1bHQuam9pbiAnfCdcbiAgICAgICMgaW5mbyAnzqlobGx0XzE2NCcsIGZcIiN7KCBycHIgdW5pdF9yZXN1bHQgKSArICcsJ306PDYwYzsgI3tycHIgaW5kZXhfcmVzdWx0fVwiXG4gICAgIyAgIEBlcSAoIM6paGxsdF8xNjUgPSAtPiAgdW5pdF9yZXN1bHQgICAgICAgICAgICAgICAgICAgICApLCAgdW5pdF9tYXRjaGVyXG4gICAgICBAZXEgKCDOqWhsbHRfMTY2ID0gLT4gaW5kZXhfcmVzdWx0ICAgICAgICAgICAgICAgICAgICAgKSwgaW5kZXhfbWF0Y2hlclxuICAgICAgQGVxICggzqlobGx0XzE2NyA9IC0+IHNvcnRrZXkgKSwgY29kZWMuZW5jb2RlIGluZGV4X21hdGNoZXJcbiAgICAgICMgZGVidWcgJ86paGxsdF8xNjgnLCBycHIgKCBjb2RlYy5lbmNvZGUgaW5kZXhfbWF0Y2hlciApLnBhZEVuZCBzb3J0a2V5Lmxlbmd0aCwgY29kZWMuY2ZnLl96cHVuc1sgMCBdXG4gICAgICBAZXEgKCDOqWhsbHRfMTY5ID0gLT4gY29kZWMuZGVjb2RlIHNvcnRrZXkgICksIGluZGV4X21hdGNoZXJcbiAgICAgICMgZWNobyBbIHNvcnRrZXksIGluZGV4X3Jlc3VsdCwgdW5pdF9yZXN1bHQsIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgQGVxICAgICAoIM6paGxsdF8xNzAgPSAtPiBjb2RlYy5wYXJzZSAnNScgICAgICAgICAgKSwgWyB7IG5hbWU6ICdvdGhlcicsIGxldHRlcnM6ICc1JywgbWFudGlzc2E6IG51bGwsIGluZGV4OiBudWxsIH0gXVxuICAgICMgQGVxICAgICAoIM6paGxsdF8xNzEgPSAtPiBjb2RlYy5wYXJzZSAnw6TDtsO8JyAgICAgICAgKSwgWyB7IG5hbWU6ICdvdGhlcicsIGxldHRlcnM6ICfDpMO2w7wnLCBtYW50aXNzYTogbnVsbCwgaW5kZXg6IG51bGwgfSBdXG4gICAgIyBAZXEgICAgICggzqlobGx0XzE3MiA9IC0+IGNvZGVjLnBhcnNlICdZOTAww6TDtsO8JyAgICApLCBbIHsgbmFtZTogJ3BudW0nLCBsZXR0ZXJzOiAnWScsIG1hbnRpc3NhOiAnOTAwJywgaW5kZXg6IDkwMCB9LCB7IG5hbWU6ICdvdGhlcicsIGxldHRlcnM6ICfDpMO2w7wnLCBtYW50aXNzYTogbnVsbCwgaW5kZXg6IG51bGwgfSBdXG4gICAgIyBAdGhyb3dzICggzqlobGx0XzE3MyA9IC0+IGNvZGVjLmRlY29kZSAnNScgICAgICAgICApLCAvbm90IGEgdmFsaWQgc29ydGtleTogdW5hYmxlIHRvIHBhcnNlICc1Jy9cbiAgICAjIEB0aHJvd3MgKCDOqWhsbHRfMTc0ID0gLT4gY29kZWMuZGVjb2RlICfDpMO2w7wnICAgICAgICksIC9ub3QgYSB2YWxpZCBzb3J0a2V5OiB1bmFibGUgdG8gcGFyc2UgJ8Okw7bDvCcvXG4gICAgIyBAdGhyb3dzICggzqlobGx0XzE3NSA9IC0+IGNvZGVjLmRlY29kZSAnw6TDtsO8JyAgICAgICApLCAvbm90IGEgdmFsaWQgc29ydGtleTogdW5hYmxlIHRvIHBhcnNlICfDvCcgaW4gJ1k5MDDDpMO2w7wnL1xuICAgICMgQHRocm93cyAoIM6paGxsdF8xNzYgPSAtPiBjb2RlYy5kZWNvZGUgJ1k5MDDDpMO2w7wnICAgKSwgL25vdCBhIHZhbGlkIHNvcnRrZXk6IHVuYWJsZSB0byBwYXJzZSAnWTkwMCcgaW4gJ1k5MDDDpMO2w7wnL1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBkZWJ1ZyAnzqlobGx0XzE3NycsIHJwciBjb2RlYy5lbmNvZGUgLTkwICMgICAgWyAnw43CvzvDo8Ojw6PDo8Ojw6PDoycsIFsgLTk5OSwgICAgICAgICBdLCAnbm51bTrDjSzCvztbLTk5OV18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICBdXG4gICAgIyBkZWJ1ZyAnzqlobGx0XzE3OCcsIHJwciBjb2RlYy5kZWNvZGUgJ8OHIcOGw4bDhsOGw4bDhkgnICMgICAgWyAnw43CvzvDo8Ojw6PDo8Ojw6PDoycsIFsgLTk5OSwgICAgICAgICBdLCAnbm51bTrDjSzCvztbLTk5OV18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICBdXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGgxMG12cDJfZGVjb2RlX3VuaXRzOiAtPlxuICAgICMjIyBOT1RFIGFsc28gc2VlIGNvcnJlc3BvbmRpbmcgdGVzdCBpbiBgaGVuZ2lzdC1ORy9kZXYvaW50ZXJsZXgvc3JjL3Rlc3QtaG9sbGVyaXRoLmNvZmZlZWAgIyMjXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICB7IEhvbGxlcml0aCxcbiAgICAgIGhvbGxlcml0aF8xMG12cDIsXG4gICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgIyB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwcm9iZXNfYW5kX21hdGNoZXJzID0gW1xuICAgICAgWyAnQTAwME5OTk5OTk5OJywgWyAtOTk5ICAgICAgICBdLCAnbm51bTpBLDAwMFstOTk5XXxwYWRkaW5nOk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdCMDBOTk5OTk5OTk4nLCBbIC05OSAgICAgICAgIF0sICdubnVtOkIsMDBbLTk5XXxwYWRkaW5nOk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0IwOU5OTk5OTk5OTicsIFsgLTkwICAgICAgICAgXSwgJ25udW06QiwwOVstOTBdfHBhZGRpbmc6Tk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnQjg4Tk5OTk5OTk5OJywgWyAtMTEgICAgICAgICBdLCAnbm51bTpCLDg4Wy0xMV18cGFkZGluZzpOTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdCODlOTk5OTk5OTk4nLCBbIC0xMCAgICAgICAgIF0sICdubnVtOkIsODlbLTEwXXxwYWRkaW5nOk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0VOTk5OTk5OTk5OTicsIFsgLTkgICAgICAgICAgXSwgJ251bjpFWy05XXxwYWRkaW5nOk5OTk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnRk5OTk5OTk5OTk5OJywgWyAtOCAgICAgICAgICBdLCAnbnVuOkZbLThdfHBhZGRpbmc6Tk5OTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdHTk5OTk5OTk5OTk4nLCBbIC03ICAgICAgICAgIF0sICdudW46R1stN118cGFkZGluZzpOTk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0hOTk5OTk5OTk5OTicsIFsgLTYgICAgICAgICAgXSwgJ251bjpIWy02XXxwYWRkaW5nOk5OTk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnSU5OTk5OTk5OTk5OJywgWyAtNSAgICAgICAgICBdLCAnbnVuOklbLTVdfHBhZGRpbmc6Tk5OTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdKTk5OTk5OTk5OTk4nLCBbIC00ICAgICAgICAgIF0sICdudW46SlstNF18cGFkZGluZzpOTk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0tOTk5OTk5OTk5OTicsIFsgLTMgICAgICAgICAgXSwgJ251bjpLWy0zXXxwYWRkaW5nOk5OTk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnTE5OTk5OTk5OTk5OJywgWyAtMiAgICAgICAgICBdLCAnbnVuOkxbLTJdfHBhZGRpbmc6Tk5OTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdNTk5OTk5OTk5OTk4nLCBbIC0xICAgICAgICAgIF0sICdudW46TVstMV18cGFkZGluZzpOTk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ05CNzlOTk5OTk5OTicsIFsgMCwgLTIwICAgICAgXSwgJ3plcm86TlswXXxubnVtOkIsNzlbLTIwXXxwYWRkaW5nOk5OTk5OTk5OJywgICAgICAgICAgICAgXVxuICAgICAgWyAnTk5OTk5OTk5OTk5OJywgWyAwICAgICAgICAgICBdLCAncGFkZGluZzpOTk5OTk5OTk5OTk5bMF0nLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdOWTIwTk5OTk5OTk4nLCBbIDAsIDIwICAgICAgIF0sICd6ZXJvOk5bMF18cG51bTpZLDIwWzIwXXxwYWRkaW5nOk5OTk5OTk5OJywgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ1dOTk5OTk5OTk5OTicsIFsgOSAgICAgICAgICAgXSwgJ3B1bjpXWzldfHBhZGRpbmc6Tk5OTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnWTEwS05OTk5OTk5OJywgWyAxMCwgLTMgICAgICBdLCAncG51bTpZLDEwWzEwXXxudW46S1stM118cGFkZGluZzpOTk5OTk5OTicsICAgICAgICAgICAgICBdXG4gICAgICBbICdZMTBMTk5OTk5OTk4nLCBbIDEwLCAtMiAgICAgIF0sICdwbnVtOlksMTBbMTBdfG51bjpMWy0yXXxwYWRkaW5nOk5OTk5OTk5OJywgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ1kxME1OTk5OTk5OTicsIFsgMTAsIC0xICAgICAgXSwgJ3BudW06WSwxMFsxMF18bnVuOk1bLTFdfHBhZGRpbmc6Tk5OTk5OTk4nLCAgICAgICAgICAgICAgXVxuICAgICAgWyAnWTEwTk5OTk5OTk5OJywgWyAxMCAgICAgICAgICBdLCAncG51bTpZLDEwWzEwXXxwYWRkaW5nOk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdZMTBPTk5OTk5OTk4nLCBbIDEwLCAxICAgICAgIF0sICdwbnVtOlksMTBbMTBdfHB1bjpPWzFdfHBhZGRpbmc6Tk5OTk5OTk4nLCAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ1kxMFkxME1OTk5OTicsIFsgMTAsIDEwLCAtMSAgXSwgJ3BudW06WSwxMFsxMF18cG51bTpZLDEwWzEwXXxudW46TVstMV18cGFkZGluZzpOTk5OTicsICAgXVxuICAgICAgWyAnWTEwWTEwTk5OTk5OJywgWyAxMCwgMTAgICAgICBdLCAncG51bTpZLDEwWzEwXXxwbnVtOlksMTBbMTBdfHBhZGRpbmc6Tk5OTk5OJywgICAgICAgICAgICBdXG4gICAgICBbICdZMTBZMjBOTk5OTk4nLCBbIDEwLCAyMCAgICAgIF0sICdwbnVtOlksMTBbMTBdfHBudW06WSwyMFsyMF18cGFkZGluZzpOTk5OTk4nLCAgICAgICAgICAgIF1cbiAgICAgIFsgJ1kyME5OTk5OTk5OTicsIFsgMjAgICAgICAgICAgXSwgJ3BudW06WSwyMFsyMF18cGFkZGluZzpOTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnWTIwWTEwTk5OTk5OJywgWyAyMCwgMTAgICAgICBdLCAncG51bTpZLDIwWzIwXXxwbnVtOlksMTBbMTBdfHBhZGRpbmc6Tk5OTk5OJywgICAgICAgICAgICBdXG4gICAgICBbICdZOTBOTk5OTk5OTk4nLCBbIDkwICAgICAgICAgIF0sICdwbnVtOlksOTBbOTBdfHBhZGRpbmc6Tk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ1o5MDBOTk5OTk5OTicsIFsgOTAwICAgICAgICAgXSwgJ3BudW06Wiw5MDBbOTAwXXxwYWRkaW5nOk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnTk5OTk5OTk5OTk5OJywgWyAwICAgICAgICAgICBdLCAncGFkZGluZzpOTk5OTk5OTk5OTk5bMF0nLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdOTk5OTk5OTk5OTk4nLCBbIDAgICAgICAgICAgIF0sICdwYWRkaW5nOk5OTk5OTk5OTk5OTlswXScsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ05OTk5OTk5OTk5OTicsIFsgMCAgICAgICAgICAgXSwgJ3BhZGRpbmc6Tk5OTk5OTk5OTk5OWzBdJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnWTEwTk5OTk5OTk5OJywgWyAxMCAgICAgICAgICBdLCAncG51bTpZLDEwWzEwXXxwYWRkaW5nOk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdLTk5OTk5OTk5OTk4nLCBbIC0zICAgICAgICAgIF0sICdudW46S1stM118cGFkZGluZzpOTk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICMgJ0tOTk5OTk5OTk5OTidcbiAgICAgIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNvZGVjICAgICAgICAgICA9IGhvbGxlcml0aF8xMG12cDJcbiAgICBzb3J0a2V5X3BhZGRlciAgPSBjb2RlYy5jZmcuX3pwdW5zX2xpc3RbIDAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZm9yIFsgc29ydGtleSwgaW5kZXhfbWF0Y2hlciwgdW5pdF9tYXRjaGVyLCBdIGluIHByb2Jlc19hbmRfbWF0Y2hlcnNcbiAgICAgIHVuaXRfcmVzdWx0ICAgICA9IFtdXG4gICAgICBpbmRleF9yZXN1bHQgICAgPSBbXVxuICAgICAgZm9yIHVuaXQgaW4gY29kZWMucGFyc2Ugc29ydGtleVxuICAgICAgICB1bml0X3Jlc3VsdC5wdXNoICBoZWxwZXJzLnJwcl91bml0IHVuaXRcbiAgICAgICAgaW5kZXhfcmVzdWx0LnB1c2ggdW5pdC5pbmRleCBpZiB1bml0LmluZGV4P1xuICAgICAgdW5pdF9yZXN1bHQgICA9IHVuaXRfcmVzdWx0LmpvaW4gJ3wnXG4gICAgICAjIGluZm8gJ86paGxsdF8xNzknLCBmXCIjeyggcnByIHVuaXRfcmVzdWx0ICkgKyAnLCd9Ojw2MGM7ICN7cnByIGluZGV4X3Jlc3VsdH1cIlxuICAgICAgQGVxICggzqlobGx0XzE4MCA9IC0+IHVuaXRfcmVzdWx0ICAgICAgICAgICAgICAgICAgICAgICksIHVuaXRfbWF0Y2hlclxuICAgICAgQGVxICggzqlobGx0XzE4MSA9IC0+IGluZGV4X3Jlc3VsdCAgICAgICAgICAgICAgICAgICAgICksIGluZGV4X21hdGNoZXJcbiAgICAgIEBlcSAoIM6paGxsdF8xODIgPSAtPiBjb2RlYy5kZWNvZGUgc29ydGtleSAgICAgICAgICAgICApLCBpbmRleF9tYXRjaGVyXG4gICAgICBAZXEgKCDOqWhsbHRfMTgzID0gLT4gc29ydGtleSAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgY29kZWMuZW5jb2RlIGluZGV4X21hdGNoZXJcbiAgICAgICMgZWNobyBbIHNvcnRrZXksIGluZGV4X3Jlc3VsdCwgdW5pdF9yZXN1bHQsIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAgICAgKCDOqWhsbHRfMTg0ID0gLT4gY29kZWMucGFyc2UgJzUnICAgICAgICAgKSwgWyB7IG5hbWU6ICdvdGhlcicsIGxldHRlcnM6ICc1JywgbWFudGlzc2E6IG51bGwsIGluZGV4OiBudWxsIH0gXVxuICAgIEBlcSAgICAgKCDOqWhsbHRfMTg1ID0gLT4gY29kZWMucGFyc2UgJ8Okw7bDvCcgICAgICAgKSwgWyB7IG5hbWU6ICdvdGhlcicsIGxldHRlcnM6ICfDpMO2w7wnLCBtYW50aXNzYTogbnVsbCwgaW5kZXg6IG51bGwgfSBdXG4gICAgQGVxICAgICAoIM6paGxsdF8xODYgPSAtPiBjb2RlYy5wYXJzZSAnWTkwMMOkw7bDvCcgICApLCBbIHsgbmFtZTogJ3BudW0nLCBsZXR0ZXJzOiAnWScsIG1hbnRpc3NhOiAnOTAwJywgaW5kZXg6IDkwMCB9LCB7IG5hbWU6ICdvdGhlcicsIGxldHRlcnM6ICfDpMO2w7wnLCBtYW50aXNzYTogbnVsbCwgaW5kZXg6IG51bGwgfSBdXG4gICAgQHRocm93cyAoIM6paGxsdF8xODcgPSAtPiBjb2RlYy5kZWNvZGUgJzUnICAgICAgICApLCAvbm90IGEgdmFsaWQgc29ydGtleTogdW5hYmxlIHRvIHBhcnNlICc1Jy9cbiAgICBAdGhyb3dzICggzqlobGx0XzE4OCA9IC0+IGNvZGVjLmRlY29kZSAnw6TDtsO8JyAgICAgICksIC9ub3QgYSB2YWxpZCBzb3J0a2V5OiB1bmFibGUgdG8gcGFyc2UgJ8Okw7bDvCcvXG4gICAgQHRocm93cyAoIM6paGxsdF8xODkgPSAtPiBjb2RlYy5kZWNvZGUgJ1k5MDDDpMO2w7wnICApLCAvbm90IGEgdmFsaWQgc29ydGtleTogdW5hYmxlIHRvIHBhcnNlICfDpMO2w7wnIGluICdZOTAww6TDtsO8Jy9cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIyAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMgaDEyOGJfZGVjb2RlOiAtPlxuICAjICAgeyBIb2xsZXJpdGgsXG4gICMgICAgIGhvbGxlcml0aF8xMjgsXG4gICMgICAgIGhvbGxlcml0aF8xMG12cCxcbiAgIyAgICAgaW50ZXJuYWxzICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAjICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICMgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICMgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAjICAgIyBjb2RlYyA9IGhvbGxlcml0aF8xMjhcbiAgIyAgIGNvZGVjID0gaG9sbGVyaXRoXzEwbXZwXG4gICMgICBkZWJ1ZyAnzqlobGx0XzE5MCcsIHJwciBjb2RlYy5lbmNvZGUgLTFcbiAgIyAgIGRlYnVnICfOqWhsbHRfMTkxJywgcnByIGNvZGVjLmVuY29kZSAtMlxuICAjICAgbiA9ICAgLTEwMDsgdXJnZSAnzqlobGx0XzE5MicsIGZcIiN7IHJwciBbIG4sIF0gfTo+MTBjOyAje3JwciBzayA9IGNvZGVjLmVuY29kZSBufTo8NWM7ICN7IHJwciBjb2RlYy5kZWNvZGUgc2t9Oj4xMGM7XCJcbiAgIyAgIG4gPSAgICAtMjE7IHVyZ2UgJ86paGxsdF8xOTMnLCBmXCIjeyBycHIgWyBuLCBdIH06PjEwYzsgI3tycHIgc2sgPSBjb2RlYy5lbmNvZGUgbn06PDVjOyAjeyBycHIgY29kZWMuZGVjb2RlIHNrfTo+MTBjO1wiXG4gICMgICBuID0gICAgLTIwOyB1cmdlICfOqWhsbHRfMTk0JywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAjICAgbiA9ICAgIC0xOTsgdXJnZSAnzqlobGx0XzE5NScsIGZcIiN7IHJwciBbIG4sIF0gfTo+MTBjOyAje3JwciBzayA9IGNvZGVjLmVuY29kZSBufTo8NWM7ICN7IHJwciBjb2RlYy5kZWNvZGUgc2t9Oj4xMGM7XCJcbiAgIyAgIG4gPSAgICAgLTE7IHVyZ2UgJ86paGxsdF8xOTYnLCBmXCIjeyBycHIgWyBuLCBdIH06PjEwYzsgI3tycHIgc2sgPSBjb2RlYy5lbmNvZGUgbn06PDVjOyAjeyBycHIgY29kZWMuZGVjb2RlIHNrfTo+MTBjO1wiXG4gICMgICBuID0gICAgICAwOyB1cmdlICfOqWhsbHRfMTk3JywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAjICAgbiA9ICAgICAgMTsgdXJnZSAnzqlobGx0XzE5OCcsIGZcIiN7IHJwciBbIG4sIF0gfTo+MTBjOyAje3JwciBzayA9IGNvZGVjLmVuY29kZSBufTo8NWM7ICN7IHJwciBjb2RlYy5kZWNvZGUgc2t9Oj4xMGM7XCJcbiAgIyAgIG4gPSAgICAgIDI7IHVyZ2UgJ86paGxsdF8xOTknLCBmXCIjeyBycHIgWyBuLCBdIH06PjEwYzsgI3tycHIgc2sgPSBjb2RlYy5lbmNvZGUgbn06PDVjOyAjeyBycHIgY29kZWMuZGVjb2RlIHNrfTo+MTBjO1wiXG4gICMgICBuID0gICAgICAzOyB1cmdlICfOqWhsbHRfMjAwJywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAjICAgbiA9ICAgICAxMDsgdXJnZSAnzqlobGx0XzIwMScsIGZcIiN7IHJwciBbIG4sIF0gfTo+MTBjOyAje3JwciBzayA9IGNvZGVjLmVuY29kZSBufTo8NWM7ICN7IHJwciBjb2RlYy5kZWNvZGUgc2t9Oj4xMGM7XCJcbiAgIyAgIG4gPSAgICAxMjY7IHVyZ2UgJ86paGxsdF8yMDInLCBmXCIjeyBycHIgWyBuLCBdIH06PjEwYzsgI3tycHIgc2sgPSBjb2RlYy5lbmNvZGUgbn06PDVjOyAjeyBycHIgY29kZWMuZGVjb2RlIHNrfTo+MTBjO1wiXG4gICMgICBuID0gICAgMTI3OyB1cmdlICfOqWhsbHRfMjAzJywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAjICAgbiA9ICAgIDEyODsgdXJnZSAnzqlobGx0XzIwNCcsIGZcIiN7IHJwciBbIG4sIF0gfTo+MTBjOyAje3JwciBzayA9IGNvZGVjLmVuY29kZSBufTo8NWM7ICN7IHJwciBjb2RlYy5kZWNvZGUgc2t9Oj4xMGM7XCJcbiAgIyAgIG4gPSAgICAxMjk7IHVyZ2UgJ86paGxsdF8yMDUnLCBmXCIjeyBycHIgWyBuLCBdIH06PjEwYzsgI3tycHIgc2sgPSBjb2RlYy5lbmNvZGUgbn06PDVjOyAjeyBycHIgY29kZWMuZGVjb2RlIHNrfTo+MTBjO1wiXG4gICMgICAjIGZvciBbIHNvcnRrZXksIGluZGV4X21hdGNoZXIsIHVuaXRfbWF0Y2hlciwgXSBpbiBwcm9iZXNfYW5kX21hdGNoZXJzXG4gICMgICAjICAgdW5pdF9yZXN1bHQgICAgID0gW11cbiAgIyAgICMgICBpbmRleF9yZXN1bHQgICAgPSBbXVxuICAjICAgIyAgIGZvciB1bml0IGluIGNvZGVjLnBhcnNlIHNvcnRrZXlcbiAgIyAgICMgICAgIHVuaXRfcmVzdWx0LnB1c2ggIGhlbHBlcnMucnByX3VuaXQgdW5pdFxuICAjICAgIyAgICAgaW5kZXhfcmVzdWx0LnB1c2ggdW5pdC5pbmRleCBpZiB1bml0LmluZGV4P1xuICAjICAgIyAgIHVuaXRfcmVzdWx0ICAgPSB1bml0X3Jlc3VsdC5qb2luICd8J1xuICAjICAgIyAgIGluZm8gJ86paGxsdF8yMDYnLCBmXCIjeyggcnByIHVuaXRfcmVzdWx0ICkgKyAnLCd9Ojw2MGM7ICN7cnByIGluZGV4X3Jlc3VsdH1cIlxuICAjICAgIyAjICAgQGVxICggzqlobGx0XzIwNyA9IC0+ICB1bml0X3Jlc3VsdCAgICAgICAgICAgICAgICAgICAgICksICB1bml0X21hdGNoZXJcbiAgIyAgICMgICBAZXEgKCDOqWhsbHRfMjA4ID0gLT4gaW5kZXhfcmVzdWx0ICAgICAgICAgICAgICAgICAgICAgKSwgaW5kZXhfbWF0Y2hlclxuICAjICAgIyAgIEBlcSAoIM6paGxsdF8yMDkgPSAtPiBzb3J0a2V5ICksICggY29kZWMuZW5jb2RlIGluZGV4X21hdGNoZXIgKS5wYWRFbmQgc29ydGtleS5sZW5ndGgsIGNvZGVjLmNmZy5fenB1bnNbIDAgXVxuICAjICAgIyAgIGRlYnVnICfOqWhsbHRfMjEwJywgcnByICggY29kZWMuZW5jb2RlIGluZGV4X21hdGNoZXIgKS5wYWRFbmQgc29ydGtleS5sZW5ndGgsIGNvZGVjLmNmZy5fenB1bnNbIDAgXVxuICAjICAgIyAgIEBlcSAoIM6paGxsdF8yMTEgPSAtPiBjb2RlYy5kZWNvZGUgc29ydGtleSAgKSwgaW5kZXhfbWF0Y2hlclxuICAjICAgIyAgICMgZWNobyBbIHNvcnRrZXksIGluZGV4X3Jlc3VsdCwgdW5pdF9yZXN1bHQsIF1cbiAgIyAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgIyAgICMgQGVxICAgICAoIM6paGxsdF8yMTIgPSAtPiBjb2RlYy5wYXJzZSAnNScgICAgICAgICApLCBbIHsgbmFtZTogJ290aGVyJywgbGV0dGVyczogJzUnLCBtYW50aXNzYTogbnVsbCwgaW5kZXg6IG51bGwgfSBdXG4gICMgICAjIEBlcSAgICAgKCDOqWhsbHRfMjEzID0gLT4gY29kZWMucGFyc2UgJ8Okw7bDvCcgICAgICAgKSwgWyB7IG5hbWU6ICdvdGhlcicsIGxldHRlcnM6ICfDpMO2w7wnLCBtYW50aXNzYTogbnVsbCwgaW5kZXg6IG51bGwgfSBdXG4gICMgICAjIEBlcSAgICAgKCDOqWhsbHRfMjE0ID0gLT4gY29kZWMucGFyc2UgJ1k5MDDDpMO2w7wnICAgKSwgWyB7IG5hbWU6ICdwbnVtJywgbGV0dGVyczogJ1knLCBtYW50aXNzYTogJzkwMCcsIGluZGV4OiA5MDAgfSwgeyBuYW1lOiAnb3RoZXInLCBsZXR0ZXJzOiAnw6TDtsO8JywgbWFudGlzc2E6IG51bGwsIGluZGV4OiBudWxsIH0gXVxuICAjICAgIyBAdGhyb3dzICggzqlobGx0XzIxNSA9IC0+IGNvZGVjLmRlY29kZSAnNScgICAgICAgICksIC9ub3QgYSB2YWxpZCBzb3J0a2V5OiB1bmFibGUgdG8gcGFyc2UgJzUnL1xuICAjICAgIyBAdGhyb3dzICggzqlobGx0XzIxNiA9IC0+IGNvZGVjLmRlY29kZSAnw6TDtsO8JyAgICAgICksIC9ub3QgYSB2YWxpZCBzb3J0a2V5OiB1bmFibGUgdG8gcGFyc2UgJ8Okw7bDvCcvXG4gICMgICAjIEB0aHJvd3MgKCDOqWhsbHRfMjE3ID0gLT4gY29kZWMuZGVjb2RlICdZOTAww6TDtsO8JyAgKSwgL25vdCBhIHZhbGlkIHNvcnRrZXk6IHVuYWJsZSB0byBwYXJzZSAnw6TDtsO8JyBpbiAnWTkwMMOkw7bDvCcvXG4gICMgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAjICAgcmV0dXJuIG51bGxcblxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdHlwZXM6IC0+XG4gICAgeyBpbnRlcm5hbHMsXG4gICAgICBIb2xsZXJpdGhfdHlwZXNwYWNlLFxuICAgICAgQ0ZHLCAgICAgICAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aC9saWIvdHlwZXMnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgeyBwaWNrLCAgICAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3BpY2soKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIFQgPSBuZXcgSG9sbGVyaXRoX3R5cGVzcGFjZSgpXG4gICAgICBAZXEgKCDOqWhsbHRfMjE4ID0gLT4gVFtDRkddLmJsYW5rICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdcXHgyMCdcbiAgICAgIEBlcSAoIM6paGxsdF8yMTkgPSAtPiBUW0NGR10uYmxhbmtfc3BsaXR0ZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgLyg/OlxceDIwKSsvZ3ZcbiAgICAgIEBlcSAoIM6paGxsdF8yMjAgPSAtPiBUW0NGR10uYmxhbmtfc3BsaXR0ZXIudW5pY29kZVNldHMgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlobGx0XzIyMSA9IC0+IFRbQ0ZHXS5ibGFua19zcGxpdHRlci5nbG9iYWwgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWhsbHRfMjIyID0gLT4gJ2EgICBnICB6ICAnLnJlcGxhY2UgVFtDRkddLmJsYW5rX3NwbGl0dGVyLCAnw7wnICApLCAnYcO8Z8O8esO8J1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBUID0gbmV3IEhvbGxlcml0aF90eXBlc3BhY2UgeyBibGFuazogJyMnLCB9XG4gICAgICBAZXEgKCDOqWhsbHRfMjIzID0gLT4gVFtDRkddLmJsYW5rICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcjJ1xuICAgICAgQGVxICggzqlobGx0XzIyNCA9IC0+IFRbQ0ZHXS5ibGFua19zcGxpdHRlciAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvKD86XFx4MjMpKy9ndlxuICAgICAgQGVxICggzqlobGx0XzIyNSA9IC0+IFRbQ0ZHXS5ibGFua19zcGxpdHRlci51bmljb2RlU2V0cyAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWhsbHRfMjI2ID0gLT4gVFtDRkddLmJsYW5rX3NwbGl0dGVyLmdsb2JhbCAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paGxsdF8yMjcgPSAtPiAnYSMjI2cjI3ojIycucmVwbGFjZSBUW0NGR10uYmxhbmtfc3BsaXR0ZXIsICfDvCcgICksICdhw7xnw7x6w7wnXG4gICAgICBAZXEgKCDOqWhsbHRfMjI4ID0gLT4gVC5tYWduaWZpZXJzLmlzYSAnQUJDIFhZWicgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWhsbHRfMjI5ID0gLT4gVC5tYWduaWZpZXJzLmlzYSAnQUJDI1hZWicgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paGxsdF8yMzAgPSAtPiBULmJsYW5rLmlzYSAnICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paGxsdF8yMzEgPSAtPiBULmJsYW5rLmlzYSAnIycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlobGx0XzIzMiA9IC0+IFQuYmxhbmsuaXNhIFRbQ0ZHXS5ibGFuayAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgVCA9IG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlKClcbiAgICBAZXEgKCDOqWhsbHRfMjMzID0gLT4gVC5ub25lbXB0eV90ZXh0LmlzYSA0ICAgICAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjM0ID0gLT4gVC5ub25lbXB0eV90ZXh0LmlzYSBmYWxzZSAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjM1ID0gLT4gVC5ub25lbXB0eV90ZXh0LmlzYSAnJyAgICAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjM2ID0gLT4gVC5ub25lbXB0eV90ZXh0LmlzYSAneWVzJyAgICAgICAgKSwgdHJ1ZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqlobGx0XzIzNyA9IC0+IFQuaW5jcmVtZW50YWxfdGV4dC5pc2EgJ3llcycgICAgICksIGZhbHNlXG4gICAgQGVxICggzqlobGx0XzIzOCA9IC0+IFQuZGVjcmVtZW50YWxfdGV4dC5pc2EgJ3llcycgICAgICksIGZhbHNlXG4gICAgQGVxICggzqlobGx0XzIzOSA9IC0+IFQuaW5jcmVtZW50YWxfdGV4dC5kYXRhICAgICAgICAgICksIHsgY2hyczogWyAneScsICdlJywgJ3MnIF0sIGZhaWw6IHsgeDogJ3llcycsIGlkeDogMSwgcHJ2X2NocjogJ3knLCBjaHI6ICdlJyB9IH1cbiAgICBAZXEgKCDOqWhsbHRfMjQwID0gLT4gVC5pbmNyZW1lbnRhbF90ZXh0LmlzYSAnYWJjZGVmeicgKSwgdHJ1ZVxuICAgIEBlcSAoIM6paGxsdF8yNDEgPSAtPiBULmRlY3JlbWVudGFsX3RleHQuaXNhICdhYmNkZWZ6JyApLCBmYWxzZVxuICAgIEBlcSAoIM6paGxsdF8yNDIgPSAtPiBULmluY3JlbWVudGFsX3RleHQuZGF0YSAgICAgICAgICApLCB7IGNocnM6IFsgJ2EnLCAnYicsICdjJywgJ2QnLCAnZScsICdmJywgJ3onLCBdLCB9XG4gICAgQGVxICggzqlobGx0XzI0MyA9IC0+IFQuZGVjcmVtZW50YWxfdGV4dC5kYXRhICAgICAgICAgICksIHsgY2hyczogWyAnYScsICdiJywgJ2MnLCAnZCcsICdlJywgJ2YnLCAneicgXSwgZmFpbDogeyB4OiAnYWJjZGVmeicsIGlkeDogMSwgcHJ2X2NocjogJ2EnLCBjaHI6ICdiJyB9IH1cbiAgICBAZXEgKCDOqWhsbHRfMjQ0ID0gLT4gVC5pbmNyZW1lbnRhbF90ZXh0LmlzYSAnYWJjMCcgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjQ1ID0gLT4gVC5pbmNyZW1lbnRhbF90ZXh0LmRhdGEgICAgICAgICAgKSwgeyBjaHJzOiBbICdhJywgJ2InLCAnYycsICcwJywgXSwgZmFpbDogeyB4OiAnYWJjMCcsIGlkeDogMywgcHJ2X2NocjogJ2MnLCBjaHI6ICcwJyB9IH1cbiAgICBAZXEgKCDOqWhsbHRfMjQ2ID0gLT4gVC5kZWNyZW1lbnRhbF90ZXh0LmlzYSAnY2JhJyAgICAgKSwgdHJ1ZVxuICAgIEBlcSAoIM6paGxsdF8yNDcgPSAtPiBULmRlY3JlbWVudGFsX3RleHQuZGF0YSAgICAgICAgICApLCB7IGNocnM6IFsgJ2MnLCAnYicsICdhJywgXSwgfVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqlobGx0XzI0OCA9IC0+IFQubWFnbmlmaWVycy5pc2EgJycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjQ5ID0gLT4gVC5tYWduaWZpZXJzLmRhdGEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB7IG1lc3NhZ2U6IFwiZXhwZWN0ZWQgYSBtYWduaWZpZXIsIGdvdCBhbiBlbXB0eSB0ZXh0XCIsIH1cbiAgICBAZXEgKCDOqWhsbHRfMjUwID0gLT4gVC5tYWduaWZpZXJzLmlzYSAnQUJDIFhZWicgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgQGVxICggzqlobGx0XzI1MSA9IC0+IHBpY2sgVC5tYWduaWZpZXJzLmRhdGEsIFxcXG4gICAgICAgICAgICAgICAgICAgICAgIFsgJ25tYWdfY2hyc19yZXZlcnNlZCcsICdfcG1hZ19saXN0JywgJ19ubWFnJywgJ19wbWFnJywgXSApLCB7IG5tYWdfY2hyc19yZXZlcnNlZDogWyAnQScsICdCJywgJ0MnIF0sIF9wbWFnX2xpc3Q6IFsgJyAnLCAnWCcsICdZJywgJ1onIF0sIF9ubWFnOiAnIENCQScsIF9wbWFnOiAnIFhZWicgfVxuICAgIEBlcSAoIM6paGxsdF8yNTIgPSAtPiBPYmplY3QuaXNGcm96ZW4gVC5tYWduaWZpZXJzLmRhdGEubm1hZ19jaHJzX3JldmVyc2VkICksIHRydWVcbiAgICBAZXEgKCDOqWhsbHRfMjUzID0gLT4gT2JqZWN0LmlzRnJvemVuIFQubWFnbmlmaWVycy5kYXRhLl9wbWFnX2xpc3QgICAgICAgICAgKSwgdHJ1ZVxuICAgIEBlcSAoIM6paGxsdF8yNTQgPSAtPiBULm1hZ25pZmllcnMuaXNhICdBQkNcXG5YWVonICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6paGxsdF8yNTUgPSAtPiBULm1hZ25pZmllcnMuaXNhICdBQkNcXHRYWVonICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6paGxsdF8yNTYgPSAtPiBULm1hZ25pZmllcnMuaXNhICdBQkMgICAgICAgICAgICAgWFlaJyAgICAgICAgICAgICAgICksIHRydWVcbiAgICBAZXEgKCDOqWhsbHRfMjU3ID0gLT4gVC5tYWduaWZpZXJzLmlzYSAnQUJDIERYIFlaJyAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6paGxsdF8yNTggPSAtPiBULm1hZ25pZmllcnMuaXNhICdBQkQgQ1hZWicgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgKCDOqWhsbHRfMjU5ID0gLT4gVC51bmlsaXRlcmFscy5pc2EgbnVsbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6paGxsdF8yNjAgPSAtPiBULnVuaWxpdGVyYWxzLmlzYSAnJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgQGVxICggzqlobGx0XzI2MSA9IC0+IFQudW5pbGl0ZXJhbHMuaXNhICdWQkEnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjYyID0gLT4gVC51bmlsaXRlcmFscy5pc2EgJ0VGR0hJSktMTSBOT1BRUlNUVVZXJyAgICAgICAgICAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6paGxsdF8yNjMgPSAtPiBULnVuaWxpdGVyYWxzLmlzYSAnRUZHSElKS0xNIE4gT1BRUlNUVVZXJyAgICAgICAgICAgICksIHRydWVcbiAgICBAZXEgKCDOqWhsbHRfMjY0ID0gLT4gVC51bmlsaXRlcmFscy5kYXRhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB7IF9udW5zOiAnRUZHSElKS0xNJywgX3pwdW5zOiAnTk9QUVJTVFVWVycsIF9udW5zX2xpc3Q6IFsgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJywgJ0snLCAnTCcsICdNJyBdLCBfenB1bnNfbGlzdDogWyAnTicsICdPJywgJ1AnLCAnUScsICdSJywgJ1MnLCAnVCcsICdVJywgJ1YnLCAnVycgXSB9XG4gICAgQGVxICggzqlobGx0XzI2NSA9IC0+IFQudW5pbGl0ZXJhbHMuaXNhICdOJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgIEBlcSAoIM6paGxsdF8yNjYgPSAtPiBULnVuaWxpdGVyYWxzLmRhdGEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHsgX251bnM6ICcnLCBfenB1bnM6ICdOJywgX251bnNfbGlzdDogW10sIF96cHVuc19saXN0OiBbICdOJyBdIH1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEB0aHJvd3MgKCDOqWhsbHRfMjY3ID0gLT4gVC5kaWdpdHNldC52YWxpZGF0ZSBudWxsICAgICAgICAgICAgICAgICAgICAgICAgICksIC9ub3QgYSB2YWxpZCBkaWdpdHNldC9cbiAgICBAdGhyb3dzICggzqlobGx0XzI2OCA9IC0+IFQuZGlnaXRzZXQudmFsaWRhdGUgJycgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvbm90IGEgdmFsaWQgZGlnaXRzZXQvXG4gICAgQHRocm93cyAoIM6paGxsdF8yNjkgPSAtPiBULmRpZ2l0c2V0LnZhbGlkYXRlICdhJyAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgL25vdCBhIHZhbGlkIGRpZ2l0c2V0L1xuICAgIEBlcSAgICAgKCDOqWhsbHRfMjcwID0gLT4gVC5kaWdpdHNldC52YWxpZGF0ZSAnYWInICAgICAgICAgICAgICAgICAgICAgICAgICksICdhYidcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEB0aHJvd3MgKCDOqWhsbHRfMjcxID0gLT4gICBuZXcgSG9sbGVyaXRoX3R5cGVzcGFjZSB7IGJsYW5rOiBudWxsIH0gICAgICAgICAgICAgICAgICAgICAgICApLCAvbm90IGEgdmFsaWQgYmxhbmsvXG4gICAgQHRocm93cyAoIM6paGxsdF8yNzIgPSAtPiAgIG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlIHsgYmxhbms6ICcnICAgfSAgICAgICAgICAgICAgICAgICAgICAgICksIC9ub3QgYSB2YWxpZCBibGFuay9cbiAgICBAdGhyb3dzICggzqlobGx0XzI3MyA9IC0+ICAgbmV3IEhvbGxlcml0aF90eXBlc3BhY2UgeyBibGFuazogJy0tJyB9ICAgICAgICAgICAgICAgICAgICAgICAgKSwgL25vdCBhIHZhbGlkIGJsYW5rL1xuICAgIEB0aHJvd3MgKCDOqWhsbHRfMjc0ID0gLT4gKCBuZXcgSG9sbGVyaXRoX3R5cGVzcGFjZSB7IGJsYW5rOiBudWxsIH0gKS5ibGFuay52YWxpZGF0ZSBudWxsICApLCAvbm90IGEgdmFsaWQgYmxhbmsvXG4gICAgQHRocm93cyAoIM6paGxsdF8yNzUgPSAtPiAoIG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlIHsgYmxhbms6ICcnICAgfSApLmJsYW5rLnZhbGlkYXRlICcnICAgICksIC9ub3QgYSB2YWxpZCBibGFuay9cbiAgICBAdGhyb3dzICggzqlobGx0XzI3NiA9IC0+ICggbmV3IEhvbGxlcml0aF90eXBlc3BhY2UgeyBibGFuazogJy0tJyB9ICkuYmxhbmsudmFsaWRhdGUgJy0tJyAgKSwgL25vdCBhIHZhbGlkIGJsYW5rL1xuICAgIEBlcSAgICAgKCDOqWhsbHRfMjc3ID0gLT4gKCBuZXcgSG9sbGVyaXRoX3R5cGVzcGFjZSB7IGJsYW5rOiAnLScgIH0gKS5ibGFuay52YWxpZGF0ZSAnLScgICApLCAnLSdcbiAgICBAZXEgICAgICggzqlobGx0XzI3OCA9IC0+ICggbmV3IEhvbGxlcml0aF90eXBlc3BhY2UgeyBibGFuazogJyAnICB9ICkuYmxhbmsudmFsaWRhdGUgJyAnICAgKSwgJyAnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnX2dlbmVyYWw6IC0+XG4gICAgeyBpbnRlcm5hbHMsXG4gICAgICBIb2xsZXJpdGgsICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgSG9sbGVyaXRoX3R5cGVzcGFjZSxcbiAgICAgIENGRywgICAgICAgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgvbGliL3R5cGVzJ1xuICAgICMgeyB0eXBlX29mLCAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICMgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCAgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICB7IGlzRnJvemVuOiBpc19mcm96ZW4sICAgICAgICB9ID0gT2JqZWN0XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIyMgdGVzdGluZyBhIGdlbmVyYWwgYXNzdW1wdGlvbiBzbyB3ZSBkb24ndCBtZXNzIHVwOiAjIyNcbiAgICBAZXEgKCDOqWhsbHRfMjc5ID0gLT4gKCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiAtIDEgKSA9PSAtKCBOdW1iZXIuTUlOX1NBRkVfSU5URUdFUiArIDEgKSApLCB0cnVlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgIyBUID0gbmV3IEhvbGxlcml0aF90eXBlc3BhY2UoKVxuICAgICAgQHRocm93cyAoIM6paGxsdF8yODAgPSAtPiBIb2xsZXJpdGgudmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnIHt9ICAgICAgICAgICAgICAgICAgKSwgL25vdCBhIHZhbGlkIGRpZ2l0c2V0L1xuICAgICAgQHRocm93cyAoIM6paGxsdF8yODEgPSAtPiBIb2xsZXJpdGgudmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnIHsgZGlnaXRzZXQ6ICcnICAgIH0gKSwgL25vdCBhIHZhbGlkIGRpZ2l0c2V0L1xuICAgICAgQHRocm93cyAoIM6paGxsdF8yODIgPSAtPiBIb2xsZXJpdGgudmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnIHsgZGlnaXRzZXQ6ICdhJyAgIH0gKSwgL25vdCBhIHZhbGlkIGRpZ2l0c2V0L1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB2YWxpZGF0ZV9hbmRfY29tcGlsZV9jZmdfMTA6IC0+XG4gICAgeyBpbnRlcm5hbHMsXG4gICAgICBIb2xsZXJpdGgsICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgSG9sbGVyaXRoX3R5cGVzcGFjZSxcbiAgICAgIENGRywgICAgICAgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgvbGliL3R5cGVzJ1xuICAgICMgeyB0eXBlX29mLCAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICMgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCAgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICB7IGlzRnJvemVuOiBpc19mcm96ZW4sICAgICAgICB9ID0gT2JqZWN0XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjZmdfMTAgPVxuICAgICAgYmxhbms6ICAgICAgICAnICcgICAgICAgICAgICAgICAgICAgICAgICMgc2VwYXJhdG9yIHVzZWQgaW4gYG1hZ25pZmllcnNgIGFuZCBgdW5pbGl0ZXJhbHNgXG4gICAgICBkaWdpdHNldDogICAgICcwMTIzNDU2Nzg5JyAgICAgICAgICAgICAgIyBkaWdpdHM7IGxlbmd0aCBvZiBgZGlnaXRzZXRgIGlzIHRoZSBgX2Jhc2VgXG4gICAgICBtYWduaWZpZXJzOiAgICdBQkMgWFlaJyAgICAgICAgICAgICAgICAgI1xuICAgICAgdW5pbGl0ZXJhbHM6ICAnRkdISUpLTE0gTiBPUFFSU1RVVicgICAgICMgbmVnYXRpdmUgdW5pbGl0ZXJhbHMsIGJsYW5rLCB6ZXJvIHVuaWxpdGVyYWwsIGJsYW5rLCBwb3NpdGl2ZSB1bmlsaXRlcmFsc1xuICAgICAgZGltZW5zaW9uOiAgICAzICAgICAgICAgICAgICAgICAgICAgICAgICMgbnVtYmVyIG9mIGluZGljZXMgc3VwcG9ydGVkXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgeyBjZmcsIH0gPSBIb2xsZXJpdGgudmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnIGNmZ18xMFxuICAgICAgQGVxICggzqlobGx0XzI4MyA9IC0+IGNmZy5ibGFuayAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnICdcbiAgICAgIEBlcSAoIM6paGxsdF8yODQgPSAtPiBjZmcuZGlnaXRzZXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJzAxMjM0NTY3ODknXG4gICAgICBAZXEgKCDOqWhsbHRfMjg1ID0gLT4gY2ZnLl9kaWdpdHNfbGlzdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIEFycmF5LmZyb20gJzAxMjM0NTY3ODknXG4gICAgICBAZXEgKCDOqWhsbHRfMjg2ID0gLT4gY2ZnLl9ub3ZhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICggQXJyYXkuZnJvbSBjZmcuZGlnaXRzZXQgKS5hdCAtMVxuICAgICAgQGVxICggzqlobGx0XzI4NyA9IC0+IGNmZy5fbGVhZGluZ19ub3Zhc19yZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvLy8gXiAoPzogOSApKiAoPz0gLisgJCApIC8vL2d2XG4gICAgICBAZXEgKCDOqWhsbHRfMjg4ID0gLT4gaXNfZnJvemVuIGNmZy5fZGlnaXRzX2xpc3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paGxsdF8yODkgPSAtPiBjZmcuX2Jhc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgMTBcbiAgICAgIEBlcSAoIM6paGxsdF8yOTAgPSAtPiBjZmcubWFnbmlmaWVycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ0FCQyBYWVonXG4gICAgICBAZXEgKCDOqWhsbHRfMjkxID0gLT4gY2ZnLl9ubWFnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnIENCQSdcbiAgICAgIEBlcSAoIM6paGxsdF8yOTIgPSAtPiBjZmcuX3BtYWcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcgWFlaJ1xuICAgICAgQGVxICggzqlobGx0XzI5MyA9IC0+IGNmZy5fbm1hZ19saXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBBcnJheS5mcm9tICcgQ0JBJ1xuICAgICAgQGVxICggzqlobGx0XzI5NCA9IC0+IGNmZy5fcG1hZ19saXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBBcnJheS5mcm9tICcgWFlaJ1xuICAgICAgQGVxICggzqlobGx0XzI5NSA9IC0+IGNmZy51bmlsaXRlcmFscyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnRkdISUpLTE0gTiBPUFFSU1RVVidcbiAgICAgIEBlcSAoIM6paGxsdF8yOTYgPSAtPiBjZmcuX251bnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ0ZHSElKS0xNJ1xuICAgICAgQGVxICggzqlobGx0XzI5NyA9IC0+IGNmZy5fenB1bnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnTk9QUVJTVFVWJ1xuICAgICAgQGVxICggzqlobGx0XzI5OCA9IC0+IGNmZy5fbWF4X3pwdW4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgOFxuICAgICAgQGVxICggzqlobGx0XzI5OSA9IC0+IGNmZy5fbWluX251biAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAtOFxuICAgICAgQGVxICggzqlobGx0XzMwMCA9IC0+IGNmZy5fbnVuc19saXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbICdGJywgJ0cnLCAnSCcsICdJJywgJ0onLCAnSycsICdMJywgJ00nIF0sXG4gICAgICBAZXEgKCDOqWhsbHRfMzAxID0gLT4gY2ZnLl96cHVuc19saXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgJ04nLCAnTycsICdQJywgJ1EnLCAnUicsICdTJywgJ1QnLCAnVScsICdWJywgXVxuICAgICAgQGVxICggzqlobGx0XzMwMiA9IC0+IGNmZy5kaW1lbnNpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAzXG4gICAgICBAZXEgKCDOqWhsbHRfMzAzID0gLT4gKyggKCBjZmcuX2Jhc2UgKiogKCBjZmcuX3BtYWdfbGlzdC5sZW5ndGggLSAxICkgICkgLSAxICkgKSwgKzk5OVxuICAgICAgQGVxICggzqlobGx0XzMwNCA9IC0+IC0oICggY2ZnLl9iYXNlICoqICggY2ZnLl9ubWFnX2xpc3QubGVuZ3RoIC0gMSApICApIC0gMSApICksIC05OTlcbiAgICAgIEBlcSAoIM6paGxsdF8zMDUgPSAtPiBjZmcuX21heF9pbnRlZ2VyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgKzk5OVxuICAgICAgQGVxICggzqlobGx0XzMwNiA9IC0+IGNmZy5fbWluX2ludGVnZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAtOTk5XG4gICAgICBAZXEgKCDOqWhsbHRfMzA3ID0gLT4gY2ZnLmRpZ2l0c19wZXJfaWR4ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAzXG4gICAgICBAZXEgKCDOqWhsbHRfMzA4ID0gLT4gY2ZnLl9hbHBoYWJldCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcwMTIzNDU2Nzg5QUJDRkdISUpLTE1OT1BRUlNUVVZYWVonXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGggPSBuZXcgSG9sbGVyaXRoIGNmZ18xMFxuICAgICAgQGVxICggzqlobGx0XzMwOSA9IC0+IGguY2ZnICksIGNmZ1xuICAgICAgIyBAZXEgKCDOqWhsbHRfMzEwID0gLT4gaC5lbmNvZGUgIC05OTggKSwgbnVsbFxuICAgICAgQGVxICggzqlobGx0XzMxMSA9IC0+IGguZW5jb2RlICAgLTEyICksICdCODcnXG4gICAgICBAZXEgKCDOqWhsbHRfMzEyID0gLT4gaC5lbmNvZGUgICAtMTEgKSwgJ0I4OCdcbiAgICAgIEBlcSAoIM6paGxsdF8zMTMgPSAtPiBoLmVuY29kZSAgIC0xMCApLCAnQjg5J1xuICAgICAgQGVxICggzqlobGx0XzMxNCA9IC0+IGguZW5jb2RlICAgIC05ICksICdDMCdcbiAgICAgIEBlcSAoIM6paGxsdF8zMTUgPSAtPiBoLmVuY29kZSAgICAtOCApLCAnRidcbiAgICAgIEBlcSAoIM6paGxsdF8zMTYgPSAtPiBoLmVuY29kZSAgICAtMiApLCAnTCdcbiAgICAgIEBlcSAoIM6paGxsdF8zMTcgPSAtPiBoLmVuY29kZSAgICAtMSApLCAnTSdcbiAgICAgIEBlcSAoIM6paGxsdF8zMTggPSAtPiBoLmVuY29kZSAgICAgMCApLCAnTidcbiAgICAgIEBlcSAoIM6paGxsdF8zMTkgPSAtPiBoLmVuY29kZSAgICArMSApLCAnTydcbiAgICAgIEBlcSAoIM6paGxsdF8zMjAgPSAtPiBoLmVuY29kZSAgICArMiApLCAnUCdcbiAgICAgIEBlcSAoIM6paGxsdF8zMjEgPSAtPiBoLmVuY29kZSAgICArOCApLCAnVidcbiAgICAgIEBlcSAoIM6paGxsdF8zMjIgPSAtPiBoLmVuY29kZSAgICArOSApLCAnWDknXG4gICAgICBAZXEgKCDOqWhsbHRfMzIzID0gLT4gaC5lbmNvZGUgICArMTAgKSwgJ1kxMCdcbiAgICAgIEBlcSAoIM6paGxsdF8zMjQgPSAtPiBoLmVuY29kZSAgICsxMSApLCAnWTExJ1xuICAgICAgQGVxICggzqlobGx0XzMyNSA9IC0+IGguZW5jb2RlICAgKzEyICksICdZMTInXG4gICAgICBAZXEgKCDOqWhsbHRfMzI2ID0gLT4gaC5lbmNvZGUgICs5OTggKSwgJ1o5OTgnXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHZhbGlkYXRlX2FuZF9jb21waWxlX2NmZ18xMF9ub191bmlsdGVyYWxzOiAtPlxuICAgIHsgaW50ZXJuYWxzLFxuICAgICAgSG9sbGVyaXRoLCAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IEhvbGxlcml0aF90eXBlc3BhY2UsXG4gICAgICBDRkcsICAgICAgICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoL2xpYi90eXBlcydcbiAgICAjIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAjIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgeyBpc0Zyb3plbjogaXNfZnJvemVuLCAgICAgICAgfSA9IE9iamVjdFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2ZnXzEwX25vX3VuaWxpdGVyYWxzID1cbiAgICAgIGJsYW5rOiAgICAgICAgJyAnICAgICAgICAgICAgICAgICAgICAgICAjIHNlcGFyYXRvciB1c2VkIGluIGBtYWduaWZpZXJzYCBhbmQgYHVuaWxpdGVyYWxzYFxuICAgICAgZGlnaXRzZXQ6ICAgICAnMDEyMzQ1Njc4OScgICAgICAgICAgICAgICMgZGlnaXRzOyBsZW5ndGggb2YgYGRpZ2l0c2V0YCBpcyB0aGUgYF9iYXNlYFxuICAgICAgbWFnbmlmaWVyczogICAnQUJDIFhZWicgICAgICAgICAgICAgICAgICNcbiAgICAgIHVuaWxpdGVyYWxzOiAgJ04nICAgICAgICAgICAgICAgICAgICAgICAjIG9ubHkgaGFzIHplcm8gdW5pbGl0ZXJhbFxuICAgICAgZGltZW5zaW9uOiAgICAzICAgICAgICAgICAgICAgICAgICAgICAgICMgbnVtYmVyIG9mIGluZGljZXMgc3VwcG9ydGVkXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgeyBjZmcsIH0gPSBIb2xsZXJpdGgudmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnIGNmZ18xMF9ub191bmlsaXRlcmFsc1xuICAgICAgQGVxICggzqlobGx0XzMyNyA9IC0+IGNmZy5ibGFuayAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyAnXG4gICAgICBAZXEgKCDOqWhsbHRfMzI4ID0gLT4gY2ZnLmRpZ2l0c2V0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnMDEyMzQ1Njc4OSdcbiAgICAgIEBlcSAoIM6paGxsdF8zMjkgPSAtPiBjZmcuX2RpZ2l0c19saXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIEFycmF5LmZyb20gJzAxMjM0NTY3ODknXG4gICAgICBAZXEgKCDOqWhsbHRfMzMwID0gLT4gY2ZnLl9ub3ZhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAoIEFycmF5LmZyb20gY2ZnLmRpZ2l0c2V0ICkuYXQgLTFcbiAgICAgIEBlcSAoIM6paGxsdF8zMzEgPSAtPiBjZmcuX2xlYWRpbmdfbm92YXNfcmUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC8vLyBeICg/OiA5ICkqICg/PSAuKyAkICkgLy8vZ3ZcbiAgICAgIEBlcSAoIM6paGxsdF8zMzIgPSAtPiBpc19mcm96ZW4gY2ZnLl9kaWdpdHNfbGlzdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paGxsdF8zMzMgPSAtPiBjZmcuX2Jhc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDEwXG4gICAgICBAZXEgKCDOqWhsbHRfMzM0ID0gLT4gY2ZnLm1hZ25pZmllcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnQUJDIFhZWidcbiAgICAgIEBlcSAoIM6paGxsdF8zMzUgPSAtPiBjZmcuX25tYWcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcgQ0JBJ1xuICAgICAgQGVxICggzqlobGx0XzMzNiA9IC0+IGNmZy5fcG1hZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyBYWVonXG4gICAgICBAZXEgKCDOqWhsbHRfMzM3ID0gLT4gY2ZnLl9ubWFnX2xpc3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBBcnJheS5mcm9tICcgQ0JBJ1xuICAgICAgQGVxICggzqlobGx0XzMzOCA9IC0+IGNmZy5fcG1hZ19saXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgQXJyYXkuZnJvbSAnIFhZWidcbiAgICAgIEBlcSAoIM6paGxsdF8zMzkgPSAtPiBjZmcudW5pbGl0ZXJhbHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdOJ1xuICAgICAgQGVxICggzqlobGx0XzM0MCA9IC0+IGNmZy5fbnVucyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgbnVsbFxuICAgICAgQGVxICggzqlobGx0XzM0MSA9IC0+IGNmZy5fenB1bnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ04nXG4gICAgICBAZXEgKCDOqWhsbHRfMzQyID0gLT4gY2ZnLl9udW5zX2xpc3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbXVxuICAgICAgQGVxICggzqlobGx0XzM0MyA9IC0+IGNmZy5fenB1bnNfbGlzdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAnTicsIF1cbiAgICAgIEBlcSAoIM6paGxsdF8zNDQgPSAtPiBjZmcuZGltZW5zaW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDNcbiAgICAgIEBlcSAoIM6paGxsdF8zNDUgPSAtPiArKCAoIGNmZy5fYmFzZSAqKiAoIGNmZy5fcG1hZ19saXN0Lmxlbmd0aCAtIDEgKSAgKSAtIDEgKSAgICksICs5OTlcbiAgICAgIEBlcSAoIM6paGxsdF8zNDYgPSAtPiAtKCAoIGNmZy5fYmFzZSAqKiAoIGNmZy5fbm1hZ19saXN0Lmxlbmd0aCAtIDEgKSAgKSAtIDEgKSAgICksIC05OTlcbiAgICAgIEBlcSAoIM6paGxsdF8zNDcgPSAtPiBjZmcuX21heF9pbnRlZ2VyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICs5OTlcbiAgICAgIEBlcSAoIM6paGxsdF8zNDggPSAtPiBjZmcuX21pbl9pbnRlZ2VyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC05OTlcbiAgICAgIEBlcSAoIM6paGxsdF8zNDkgPSAtPiBjZmcuZGlnaXRzX3Blcl9pZHggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDNcbiAgICAgIEBlcSAoIM6paGxsdF8zNTAgPSAtPiBjZmcuX2FscGhhYmV0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcwMTIzNDU2Nzg5QUJDTlhZWidcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgaCA9IG5ldyBIb2xsZXJpdGggY2ZnXzEwX25vX3VuaWxpdGVyYWxzXG4gICAgICBAZXEgKCDOqWhsbHRfMzUxID0gLT4gaC5jZmcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBjZmdcbiAgICAgIEBlcSAoIM6paGxsdF8zNTIgPSAtPiBoLmVuY29kZSBbIDAsIF0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdOTk5OTk5OTk5OTk4nXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHZhbGlkYXRlX2FuZF9jb21waWxlX2NmZ18xMjg6IC0+XG4gICAgeyBpbnRlcm5hbHMsXG4gICAgICBIb2xsZXJpdGgsICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgSG9sbGVyaXRoX3R5cGVzcGFjZSxcbiAgICAgIENGRywgICAgICAgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgvbGliL3R5cGVzJ1xuICAgICMgeyB0eXBlX29mLCAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICMgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCAgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICB7IGlzRnJvemVuOiBpc19mcm96ZW4sICAgICAgICB9ID0gT2JqZWN0XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjZmdfMTI4ID1cbiAgICAgICMjIyAgICAgICAgICAgICAgICAgICAgIDEgICAgICAgICAyICAgICAgICAgMyAgICAgICAjIyNcbiAgICAgICMjIyAgICAgICAgICAgIDEyMzQ1Njc4OTAxMjM0NTY3ODkwMTIzNDU2Nzg5MDEyICAgICAjIyNcbiAgICAgIGRpZ2l0c2V0OiAgICAgJyEjJCUmKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCJyArIFxcXG4gICAgICAgICAgICAgICAgICAgICdDREVGR0hJSktMTU5PUFFSU1RVVldYWVpbXV5fYGFiYycgKyBcXFxuICAgICAgICAgICAgICAgICAgICAnZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+wqHCosKjwqTCpScgKyBcXFxuICAgICAgICAgICAgICAgICAgICAnwqbCp8KowqnCqsKrwqzCrsKvwrDCscKywrPCtMK1wrbCt8K4wrnCusK7wrzCvcK+wr/DgMOBw4LDg8OEw4XDhidcbiAgICAgIG1hZ25pZmllcnM6ICAgJ8OHw4jDicOKw4vDjMONw44gw7jDucO6w7vDvMO9w77DvydcbiAgICAgIHVuaWxpdGVyYWxzOiAgJ8OPw5DDkcOSw5PDlMOVw5bDl8OYw5nDmsObw5zDncOew5/DoMOhw6Igw6Mgw6TDpcOmw6fDqMOpw6rDq8Osw63DrsOvw7DDscOyw7PDtMO1w7bDtydcbiAgICAgIGRpbWVuc2lvbjogICAgNVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHsgY2ZnLCB9ID0gSG9sbGVyaXRoLnZhbGlkYXRlX2FuZF9jb21waWxlX2NmZyBjZmdfMTI4XG4gICAgICBAZXEgKCDOqWhsbHRfMzUzID0gLT4gY2ZnLmJsYW5rICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcgJ1xuICAgICAgQGVxICggzqlobGx0XzM1NCA9IC0+IGNmZy5kaWdpdHNldCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnISMkJSYoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUInICsgXFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaW11eX2BhYmMnICsgXFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+wqHCosKjwqTCpScgKyBcXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICfCpsKnwqjCqcKqwqvCrMKuwq/CsMKxwrLCs8K0wrXCtsK3wrjCucK6wrvCvMK9wr7Cv8OAw4HDgsODw4TDhcOGJ1xuICAgICAgQGVxICggzqlobGx0XzM1NSA9IC0+IGNmZy5fZGlnaXRzX2xpc3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBBcnJheS5mcm9tIGNmZy5kaWdpdHNldFxuICAgICAgQGVxICggzqlobGx0XzM1NiA9IC0+IGNmZy5fbm92YSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAoIEFycmF5LmZyb20gY2ZnLmRpZ2l0c2V0ICkuYXQgLTFcbiAgICAgIEBlcSAoIM6paGxsdF8zNTcgPSAtPiBjZmcuX2xlYWRpbmdfbm92YXNfcmUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgLy8vIF4gKD86IMOGICkqICg/PSAuKyAkICkgLy8vZ3ZcbiAgICAgIEBlcSAoIM6paGxsdF8zNTggPSAtPiBjZmcubWFnbmlmaWVycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8OHw4jDicOKw4vDjMONw44gw7jDucO6w7vDvMO9w77DvydcbiAgICAgIEBlcSAoIM6paGxsdF8zNTkgPSAtPiBjZmcuX25tYWcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcgw47DjcOMw4vDisOJw4jDhydcbiAgICAgIEBlcSAoIM6paGxsdF8zNjAgPSAtPiBjZmcuX3BtYWcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcgw7jDucO6w7vDvMO9w77DvydcbiAgICAgIEBlcSAoIM6paGxsdF8zNjEgPSAtPiBjZmcuX25tYWdfbGlzdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIEFycmF5LmZyb20gJyDDjsONw4zDi8OKw4nDiMOHJ1xuICAgICAgQGVxICggzqlobGx0XzM2MiA9IC0+IGNmZy5fcG1hZ19saXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgQXJyYXkuZnJvbSAnIMO4w7nDusO7w7zDvcO+w78nXG4gICAgICBAZXEgKCDOqWhsbHRfMzYzID0gLT4gY2ZnLnVuaWxpdGVyYWxzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDj8OQw5HDksOTw5TDlcOWw5fDmMOZw5rDm8Ocw53DnsOfw6DDocOiIMOjIMOkw6XDpsOnw6jDqcOqw6vDrMOtw67Dr8Oww7HDssOzw7TDtcO2w7cnXG4gICAgICBAZXEgKCDOqWhsbHRfMzY0ID0gLT4gY2ZnLl9udW5zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw4/DkMORw5LDk8OUw5XDlsOXw5jDmcOaw5vDnMOdw57Dn8Ogw6HDoidcbiAgICAgIEBlcSAoIM6paGxsdF8zNjUgPSAtPiBjZmcuX3pwdW5zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDo8Okw6XDpsOnw6jDqcOqw6vDrMOtw67Dr8Oww7HDssOzw7TDtcO2w7cnXG4gICAgICBAZXEgKCDOqWhsbHRfMzY2ID0gLT4gY2ZnLl9udW5zX2xpc3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgQXJyYXkuZnJvbSAnw4/DkMORw5LDk8OUw5XDlsOXw5jDmcOaw5vDnMOdw57Dn8Ogw6HDoidcbiAgICAgIEBlcSAoIM6paGxsdF8zNjcgPSAtPiBjZmcuX3pwdW5zX2xpc3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBBcnJheS5mcm9tICfDo8Okw6XDpsOnw6jDqcOqw6vDrMOtw67Dr8Oww7HDssOzw7TDtcO2w7cnXG4gICAgICBAZXEgKCDOqWhsbHRfMzY4ID0gLT4gY2ZnLl9taW5faW50ZWdlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC0oICggMTI4ICoqIDcgKSAtIDEgKVxuICAgICAgQGVxICggzqlobGx0XzM2OSA9IC0+IGNmZy5fbWF4X2ludGVnZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCArKCAoIDEyOCAqKiA3ICkgLSAxIClcbiAgICAgICMgQGVxICggzqlobGx0XzM3MCA9IC0+IGNmZy5kaWdpdHNfcGVyX2lkeCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgM1xuICAgICAgIyBAZXEgKCDOqWhsbHRfMzcxID0gLT4gY2ZnLl9hbHBoYWJldCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcwMTIzNDU2Nzg5QUJDRUZHSElKS0xNTk9QUVJTVFVWV1hZWidcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlobGx0XzM3MiA9IC0+IGlzX2Zyb3plbiBjZmcuX2RpZ2l0c19saXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWhsbHRfMzczID0gLT4gY2ZnLl9iYXNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAxMjhcbiAgICAgIEBlcSAoIM6paGxsdF8zNzQgPSAtPiBjZmcuZGltZW5zaW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgNVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBoID0gbmV3IEhvbGxlcml0aCBjZmdfMTI4XG4gICAgICBAZXEgKCDOqWhsbHRfMzc1ID0gLT4gaC5jZmcgKSwgY2ZnXG4gICAgICAjIEBlcSAoIM6paGxsdF8zNzYgPSAtPiBoLmVuY29kZSBbIDAsIF0gKSwgbnVsbFxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB2YWxpZGF0ZV9hbmRfY29tcGlsZV9jZmdfMTBfY2FyZGluYWxzOiAtPlxuICAgIHsgaW50ZXJuYWxzLFxuICAgICAgaG9sbGVyaXRoXzEwX2NhcmRpbmFsLFxuICAgICAgSG9sbGVyaXRoLCAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IGNvbnN0YW50c18xMF9jYXJkaW5hbCwgICAgICB9ID0gaW50ZXJuYWxzXG4gICAgeyBIb2xsZXJpdGhfdHlwZXNwYWNlLFxuICAgICAgQ0ZHLCAgICAgICAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aC9saWIvdHlwZXMnXG4gICAgIyB7IHR5cGVfb2YsICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgIyB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsICB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgIHsgaXNGcm96ZW46IGlzX2Zyb3plbiwgICAgICAgIH0gPSBPYmplY3RcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICB7IGNmZywgfSA9IEhvbGxlcml0aC52YWxpZGF0ZV9hbmRfY29tcGlsZV9jZmcgY29uc3RhbnRzXzEwX2NhcmRpbmFsXG4gICAgICBAZXEgICAgICggzqlobGx0XzM3NyA9IC0+IGNmZy5ibGFuayAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcgJ1xuICAgICAgQGVxICAgICAoIM6paGxsdF8zNzggPSAtPiBjZmcuY2FyZGluYWxzX29ubHkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgICAgICggzqlobGx0XzM3OSA9IC0+IGNmZy5fbm1hZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIG51bGxcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzgwID0gLT4gY2ZnLl9udW5zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgbnVsbFxuICAgICAgQGVxICAgICAoIM6paGxsdF8zODEgPSAtPiBjZmcuX21pbl9pbnRlZ2VyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAwXG4gICAgICBAZXEgICAgICggzqlobGx0XzM4MiA9IC0+IGNmZy5fbWF4X2ludGVnZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICs5OTlcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzgzID0gLT4gY2ZnLmRpZ2l0c19wZXJfaWR4ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgM1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBoID0gbmV3IEhvbGxlcml0aCBjb25zdGFudHNfMTBfY2FyZGluYWxcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzg0ID0gLT4gaC5jZmcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgY2ZnXG4gICAgICBAZXEgICAgICggzqlobGx0XzM4NSA9IC0+IGguZW5jb2RlIFsgICAwLCBdICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdOTk5OTk5OTk5OTk4nXG4gICAgICBAZXEgICAgICggzqlobGx0XzM4NiA9IC0+IGguZW5jb2RlIFsgOTk5LCBdICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdaOTk5Tk5OTk5OTk4nXG4gICAgICBAZXEgICAgICggzqlobGx0XzM4NyA9IC0+IGguZW5jb2RlICAgICAwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdOJ1xuICAgICAgQGVxICAgICAoIM6paGxsdF8zODggPSAtPiBoLmVuY29kZSAgIDk5OSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnWjk5OSdcbiAgICAgICMgQHRocm93cyAoIM6paGxsdF8zODkgPSAtPiBoLmVuY29kZSBbICAtMSwgXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvdW5hYmxlIHRvIGVuY29kZSBuZWdhdGl2ZSBpZHggLTEgd2l0aCBjYXJkaW5hbHMtb25seSBjb2RlYy9cbiAgICAgIEB0aHJvd3MgKCDOqWhsbHRfMzg5ID0gLT4gaC5lbmNvZGUgWyAgLTEsIF0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgL25vdCBhIHZhbGlkIGlkeC9cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY2FuX3NldF9tYXhfaWR4X2RpZ2l0czogLT5cbiAgICB7IGludGVybmFscyxcbiAgICAgIEhvbGxlcml0aCwgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyBIb2xsZXJpdGhfdHlwZXNwYWNlLFxuICAgICAgQ0ZHLCAgICAgICAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aC9saWIvdHlwZXMnXG4gICAgIyB7IHR5cGVfb2YsICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgIyB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsICB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgIHsgaXNGcm96ZW46IGlzX2Zyb3plbiwgICAgICAgIH0gPSBPYmplY3RcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGRvID0+XG4gICAgICB1c2VyX2NmZyA9XG4gICAgICAgIHVuaWxpdGVyYWxzOiAgICAgICAgJ0VGR0hJSktMTSBOIE9QUVJTVFVWVydcbiAgICAgICAgZGlnaXRzZXQ6ICAgICAgICAgICAnMDEyMzQ1Njc4OSdcbiAgICAgICAgbWFnbmlmaWVyczogICAgICAgICAnQUJDIFhZWidcbiAgICAgIHsgY2ZnLCB9ID0gSG9sbGVyaXRoLnZhbGlkYXRlX2FuZF9jb21waWxlX2NmZyB1c2VyX2NmZ1xuICAgICAgQGVxICggzqlobGx0XzM5MCA9IC0+IGNmZy5fbWluX2ludGVnZXIgICAgICAgICAgICAgICApLCAtOTk5XG4gICAgICBAZXEgKCDOqWhsbHRfMzkxID0gLT4gY2ZnLl9tYXhfaW50ZWdlciAgICAgICAgICAgICAgICksICs5OTlcbiAgICAgIEBlcSAoIM6paGxsdF8zOTIgPSAtPiBjZmcuZGlnaXRzX3Blcl9pZHggICAgICAgICAgICAgKSwgM1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBoID0gbmV3IEhvbGxlcml0aCB1c2VyX2NmZ1xuICAgICAgQGVxICggzqlobGx0XzM5MyA9IC0+IGguY2ZnICAgICAgICAgICAgICAgICAgICAgICAgICApLCBjZmdcbiAgICAgIEBlcSAoIM6paGxsdF8zOTQgPSAtPiBoLmVuY29kZSBbIDAsIF0gICAgICAgICAgICAgICAgKSwgJ05OTk5OTk5OTk5OTk5OTk5OTk5OJ1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICB1c2VyX2NmZyA9XG4gICAgICAgIHVuaWxpdGVyYWxzOiAgICAgICAgJ0VGR0hJSktMTSBOIE9QUVJTVFVWVydcbiAgICAgICAgZGlnaXRzZXQ6ICAgICAgICAgICAnMDEyMzQ1Njc4OSdcbiAgICAgICAgbWFnbmlmaWVyczogICAgICAgICAnQUJDIFhZWidcbiAgICAgICAgX21heF9pbnRlZ2VyOiAgICAgICA5OTlcbiAgICAgIHsgY2ZnLCB9ID0gSG9sbGVyaXRoLnZhbGlkYXRlX2FuZF9jb21waWxlX2NmZyB1c2VyX2NmZ1xuICAgICAgQGVxICggzqlobGx0XzM5NSA9IC0+IGNmZy5fbWluX2ludGVnZXIgICAgICAgICAgICAgICApLCAtOTk5XG4gICAgICBAZXEgKCDOqWhsbHRfMzk2ID0gLT4gY2ZnLl9tYXhfaW50ZWdlciAgICAgICAgICAgICAgICksICs5OTlcbiAgICAgIEBlcSAoIM6paGxsdF8zOTcgPSAtPiBjZmcuZGlnaXRzX3Blcl9pZHggICAgICAgICAgICAgKSwgM1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBoID0gbmV3IEhvbGxlcml0aCB1c2VyX2NmZ1xuICAgICAgQGVxICggzqlobGx0XzM5OCA9IC0+IGguY2ZnICAgICAgICAgICAgICAgICAgICAgICAgICApLCBjZmdcbiAgICAgIEBlcSAoIM6paGxsdF8zOTkgPSAtPiBoLmVuY29kZSBbIDAsIF0gICAgICAgICAgICAgICAgKSwgJ05OTk5OTk5OTk5OTk5OTk5OTk5OJ1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICB1c2VyX2NmZyA9XG4gICAgICAgIHVuaWxpdGVyYWxzOiAgICAgICAgJ0VGR0hJSktMTSBOIE9QUVJTVFVWVydcbiAgICAgICAgZGlnaXRzZXQ6ICAgICAgICAgICAnMDEyMzQ1Njc4OSdcbiAgICAgICAgbWFnbmlmaWVyczogICAgICAgICAnQUJDIFhZWidcbiAgICAgICAgZGlnaXRzX3Blcl9pZHg6ICAgIDNcbiAgICAgIHsgY2ZnLCB9ID0gSG9sbGVyaXRoLnZhbGlkYXRlX2FuZF9jb21waWxlX2NmZyB1c2VyX2NmZ1xuICAgICAgQGVxICggzqlobGx0XzQwMCA9IC0+IGNmZy5fbWluX2ludGVnZXIgICAgICAgICAgICAgICApLCAtOTk5XG4gICAgICBAZXEgKCDOqWhsbHRfNDAxID0gLT4gY2ZnLl9tYXhfaW50ZWdlciAgICAgICAgICAgICAgICksICs5OTlcbiAgICAgIEBlcSAoIM6paGxsdF80MDIgPSAtPiBjZmcuZGlnaXRzX3Blcl9pZHggICAgICAgICAgICAgKSwgM1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBoID0gbmV3IEhvbGxlcml0aCB1c2VyX2NmZ1xuICAgICAgQGVxICggzqlobGx0XzQwMyA9IC0+IGguY2ZnICAgICAgICAgICAgICAgICAgICAgICAgICApLCBjZmdcbiAgICAgIEBlcSAoIM6paGxsdF80MDQgPSAtPiBoLmVuY29kZSBbIDAsIF0gICAgICAgICAgICAgICAgKSwgJ05OTk5OTk5OTk5OTk5OTk5OTk5OJ1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGRvID0+XG4gICAgICB1c2VyX2NmZyA9XG4gICAgICAgIHVuaWxpdGVyYWxzOiAgICAgICAgJ0VGR0hJSktMTSBOIE9QUVJTVFVWVydcbiAgICAgICAgZGlnaXRzZXQ6ICAgICAgICAgICAnMDEyMzQ1Njc4OSdcbiAgICAgICAgbWFnbmlmaWVyczogICAgICAgICAnP0BBQkMgWFlaXl8nXG4gICAgICB7IGNmZywgfSA9IEhvbGxlcml0aC52YWxpZGF0ZV9hbmRfY29tcGlsZV9jZmcgdXNlcl9jZmdcbiAgICAgIEBlcSAoIM6paGxsdF80MDUgPSAtPiBjZmcuX21pbl9pbnRlZ2VyICAgICAgICAgICAgICAgKSwgLTk5Xzk5OVxuICAgICAgQGVxICggzqlobGx0XzQwNiA9IC0+IGNmZy5fbWF4X2ludGVnZXIgICAgICAgICAgICAgICApLCArOTlfOTk5XG4gICAgICBAZXEgKCDOqWhsbHRfNDA3ID0gLT4gY2ZnLmRpZ2l0c19wZXJfaWR4ICAgICAgICAgICAgICksIDVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgaCA9IG5ldyBIb2xsZXJpdGggdXNlcl9jZmdcbiAgICAgIEBlcSAoIM6paGxsdF80MDggPSAtPiBoLmNmZyAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgY2ZnXG4gICAgICBAZXEgKCDOqWhsbHRfNDA5ID0gLT4gaC5lbmNvZGUgWyAwLCBdICAgICAgICAgICAgICAgICksICdOTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk4nXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHVzZXJfY2ZnID1cbiAgICAgICAgdW5pbGl0ZXJhbHM6ICAgICAgICAnRUZHSElKS0xNIE4gT1BRUlNUVVZXJ1xuICAgICAgICBkaWdpdHNldDogICAgICAgICAgICcwMTIzNDU2Nzg5J1xuICAgICAgICBtYWduaWZpZXJzOiAgICAgICAgICc/QEFCQyBYWVpeXydcbiAgICAgICAgX21heF9pbnRlZ2VyOiAgICAgICA5OTlcbiAgICAgIHsgY2ZnLCB9ID0gSG9sbGVyaXRoLnZhbGlkYXRlX2FuZF9jb21waWxlX2NmZyB1c2VyX2NmZ1xuICAgICAgQGVxICggzqlobGx0XzQxMCA9IC0+IGNmZy5fbWluX2ludGVnZXIgICAgICAgICAgICAgICApLCAtOTlfOTk5XG4gICAgICBAZXEgKCDOqWhsbHRfNDExID0gLT4gY2ZnLl9tYXhfaW50ZWdlciAgICAgICAgICAgICAgICksICs5OV85OTlcbiAgICAgIEBlcSAoIM6paGxsdF80MTIgPSAtPiBjZmcuZGlnaXRzX3Blcl9pZHggICAgICAgICAgICAgKSwgNVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBoID0gbmV3IEhvbGxlcml0aCB1c2VyX2NmZ1xuICAgICAgQGVxICggzqlobGx0XzQxMyA9IC0+IGguY2ZnICAgICAgICAgICAgICAgICAgICAgICAgICApLCBjZmdcbiAgICAgIEBlcSAoIM6paGxsdF80MTQgPSAtPiBoLmVuY29kZSBbIDAsIF0gICAgICAgICAgICAgICAgKSwgJ05OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTidcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgdXNlcl9jZmcgPVxuICAgICAgICB1bmlsaXRlcmFsczogICAgICAgICdFRkdISUpLTE0gTiBPUFFSU1RVVlcnXG4gICAgICAgIGRpZ2l0c2V0OiAgICAgICAgICAgJzAxMjM0NTY3ODknXG4gICAgICAgIG1hZ25pZmllcnM6ICAgICAgICAgJz9AQUJDIFhZWl5fJ1xuICAgICAgICBkaWdpdHNfcGVyX2lkeDogICAgIDNcbiAgICAgIHsgY2ZnLCB9ID0gSG9sbGVyaXRoLnZhbGlkYXRlX2FuZF9jb21waWxlX2NmZyB1c2VyX2NmZ1xuICAgICAgQGVxICggzqlobGx0XzQxNSA9IC0+IGNmZy5fbWluX2ludGVnZXIgICAgICAgICAgICAgICApLCAtOTk5XG4gICAgICBAZXEgKCDOqWhsbHRfNDE2ID0gLT4gY2ZnLl9tYXhfaW50ZWdlciAgICAgICAgICAgICAgICksICs5OTlcbiAgICAgIEBlcSAoIM6paGxsdF80MTcgPSAtPiBjZmcuZGlnaXRzX3Blcl9pZHggICAgICAgICAgICAgKSwgM1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBoID0gbmV3IEhvbGxlcml0aCB1c2VyX2NmZ1xuICAgICAgQGVxICggzqlobGx0XzQxOCA9IC0+IGguY2ZnICAgICAgICAgICAgICAgICAgICAgICAgICApLCBjZmdcbiAgICAgIEBlcSAoIM6paGxsdF80MTkgPSAtPiBoLmVuY29kZSBbIDAsIF0gICAgICAgICAgICAgICAgKSwgJ05OTk5OTk5OTk5OTk5OTk5OTk5OJ1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB0eXBlczogLT5cbiAgICB7IEhvbGxlcml0aF90eXBlc3BhY2UsXG4gICAgICBjcmVhdGVfbWF4X2ludGVnZXIsXG4gICAgICBDRkcsICAgICAgICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoL2xpYi90eXBlcydcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBUID0gbmV3IEhvbGxlcml0aF90eXBlc3BhY2UoKVxuICAgICAgQGVxICAgICAoIM6paGxsdF80MjAgPSAtPiBULl9iYXNlLmlzYSAtMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfNDIxID0gLT4gVC5fYmFzZS5pc2EgIDAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgICAgICggzqlobGx0XzQyMiA9IC0+IFQuX2Jhc2UuaXNhICsxICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICAgICAoIM6paGxsdF80MjMgPSAtPiBULl9iYXNlLmlzYSArMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6paGxsdF80MjQgPSAtPiBULl9tYXhfaW50ZWdlci5pc2EgbnVsbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfNDI1ID0gLT4gVC5fbWF4X2ludGVnZXIuaXNhIDksICAgICAgICAgIDEwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfNDI2ID0gLT4gVC5fbWF4X2ludGVnZXIuaXNhIDk5LCAgICAgICAgIDEwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfNDI3ID0gLT4gVC5fbWF4X2ludGVnZXIuaXNhIDk5OTk5OTk5LCAgIDEwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfNDI4ID0gLT4gVC5fbWF4X2ludGVnZXIuaXNhIC0xMCwgICAgICAgIDEwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgICAgICggzqlobGx0XzQyOSA9IC0+IC9ub3QgYSBwb3NpdGl2ZSBzYWZlIGludGVnZXIvLnRlc3QgVC5fbWF4X2ludGVnZXIuZGF0YS5tZXNzYWdlICAgICApLCB0cnVlXG4gICAgICBAZXEgICAgICggzqlobGx0XzQzMCA9IC0+IFQuX21heF9pbnRlZ2VyLmlzYSAweGZmZmYsICAgICAxNiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgICAgICggzqlobGx0XzQzMSA9IC0+IFQuX21heF9pbnRlZ2VyLmlzYSAweDdmZmZmZmZmLCAxNiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQHRocm93cyAoIM6paGxsdF80MzIgPSAtPiBULl9tYXhfaW50ZWdlci52YWxpZGF0ZSA1LCAxMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgL1xcKF9tYXhfaW50ZWdlclxcKSBub3QgYSB2YWxpZCBfbWF4X2ludGVnZXI6IDUg4oCTIHggbm90IGEgcG9zaXRpdmUgYWxsLW5pbmVycy9cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgVCA9IG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlKClcbiAgICAgIFIgPSB7IF9iYXNlOiAxNiwgZGlnaXRzX3Blcl9pZHg6IDQsIH1cbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfNDMzID0gLT4gVC5fbWF4X2ludGVnZXIuaXNhICggUi5fYmFzZSAqKiBSLmRpZ2l0c19wZXJfaWR4ICkgLSAxLCBSLl9iYXNlICksIHRydWVcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgVCA9IG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlKClcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfNDM0ID0gLT4gVC5fbWF4X2ludGVnZXIuaXNhICggMTI4ICoqIDEgKSAtIDEsIDEyOCAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgICAgICggzqlobGx0XzQzNSA9IC0+IFQuX21heF9pbnRlZ2VyLmlzYSAoIDEyOCAqKiAyICkgLSAxLCAxMjggICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6paGxsdF80MzYgPSAtPiBULl9tYXhfaW50ZWdlci5pc2EgKCAxMjggKiogMyApIC0gMSwgMTI4ICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfNDM3ID0gLT4gVC5fbWF4X2ludGVnZXIuaXNhICggMTI4ICoqIDQgKSAtIDEsIDEyOCAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgICAgICggzqlobGx0XzQzOCA9IC0+IFQuX21heF9pbnRlZ2VyLmlzYSAoIDEyOCAqKiA1ICkgLSAxLCAxMjggICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6paGxsdF80MzkgPSAtPiBULl9tYXhfaW50ZWdlci5pc2EgKCAxMjggKiogNiApIC0gMSwgMTI4ICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfNDQwID0gLT4gVC5fbWF4X2ludGVnZXIuaXNhICggMTI4ICoqIDcgKSAtIDEsIDEyOCAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgICAgICggzqlobGx0XzQ0MSA9IC0+IFQuX21heF9pbnRlZ2VyLmlzYSAoIDEyOCAqKiA4ICkgLSAxLCAxMjggICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfNDQyID0gLT4gVC5jcmVhdGVfbWF4X2ludGVnZXIgeyBfYmFzZTogMTAsIGRpZ2l0c19wZXJfaWR4OiAyLCB9ICksIDk5XG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5kZW1vX21heF9pbnRlZ2VyID0gLT5cbiAgbG9nX3RvX2Jhc2UgICAgICAgICAgICAgICA9ICggbiwgYmFzZSApIC0+ICggTWF0aC5sb2cgbiApIC8gKCBNYXRoLmxvZyBiYXNlIClcbiAgZ2V0X3JlcXVpcmVkX2RpZ2l0cyAgICAgICA9ICggbiwgYmFzZSApIC0+IE1hdGguY2VpbCBsb2dfdG9fYmFzZSBuLCBiYXNlXG4gIGdldF9tYXhfbmluZXJfZGlnaXRfY291bnQgPSAoIG4sIGJhc2UgKSAtPiAoIGdldF9yZXF1aXJlZF9kaWdpdHMgbiwgYmFzZSApIC0gMVxuICBnZXRfbWF4X2ludGVnZXIgICAgICAgICAgID0gKCBuLCBiYXNlICkgLT4gKCBiYXNlICoqIGdldF9tYXhfbmluZXJfZGlnaXRfY291bnQgbiwgYmFzZSApIC0gMVxuICBpbmZvICfOqWhsbHRfNDQzJywgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIudG9TdHJpbmcgMTZcbiAgaW5mbyAnzqlobGx0XzQ0NCcsIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLnRvU3RyaW5nIDMyXG4gIHdoaXNwZXIgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgaW5mbyAnzqlobGx0XzQ0NScsICggMzIgKiogNCAtIDEgKS50b1N0cmluZyAzMlxuICBpbmZvICfOqWhsbHRfNDQ2JywgKCAzMiAqKiA0IC0gMSApLnRvU3RyaW5nIDMyXG4gIHdoaXNwZXIgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgaW5mbyAnzqlobGx0XzQ0NycsIGdldF9yZXF1aXJlZF9kaWdpdHMgMzIsICAgICAgIDMyXG4gIGluZm8gJ86paGxsdF80NDgnLCBnZXRfcmVxdWlyZWRfZGlnaXRzIDMyICoqIDYsICAzMlxuICBpbmZvICfOqWhsbHRfNDQ5JywgZ2V0X3JlcXVpcmVkX2RpZ2l0cyAxZTYsICAgICAgMTBcbiAgaW5mbyAnzqlobGx0XzQ1MCcsIGdldF9yZXF1aXJlZF9kaWdpdHMgMjAsICAgICAgIDEwXG4gIHdoaXNwZXIgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgaW5mbyAnzqlobGx0XzQ1MScsIG1heF9kaWdpdHNfYmFzZV8xMCAgICA9IGdldF9tYXhfbmluZXJfZGlnaXRfY291bnQgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsIDEwXG4gIGluZm8gJ86paGxsdF80NTInLCBtYXhfZGlnaXRzX2Jhc2VfMTYgICAgPSBnZXRfbWF4X25pbmVyX2RpZ2l0X2NvdW50IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAxNlxuICBpbmZvICfOqWhsbHRfNDUzJywgbWF4X2RpZ2l0c19iYXNlXzMyICAgID0gZ2V0X21heF9uaW5lcl9kaWdpdF9jb3VudCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiwgMzJcbiAgaW5mbyAnzqlobGx0XzQ1NCcsIG1heF9kaWdpdHNfYmFzZV8zNiAgICA9IGdldF9tYXhfbmluZXJfZGlnaXRfY291bnQgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsIDM2XG4gIGluZm8gJ86paGxsdF80NTUnLCBtYXhfZGlnaXRzXzFiYXNlXzI4ICAgPSBnZXRfbWF4X25pbmVyX2RpZ2l0X2NvdW50IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAxMjhcbiAgIyBmb3IgYmFzZSBpbiBbIDIgLi4gMTI4IF1cbiAgIyAgIGluZm8gJ86paGxsdF80NTYnLCB7IGJhc2UsIH0sICggTWF0aC5jZWlsIGxvZ190b19iYXNlIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCBiYXNlICkgLSAxXG4gIHdoaXNwZXIgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgaW5mbyAnzqlobGx0XzQ1NycsICc5Jy5yZXBlYXQgbWF4X2RpZ2l0c19iYXNlXzEwXG4gIGluZm8gJ86paGxsdF80NTgnLCAnZicucmVwZWF0IG1heF9kaWdpdHNfYmFzZV8xNlxuICBpbmZvICfOqWhsbHRfNDU5JywgJ3YnLnJlcGVhdCBtYXhfZGlnaXRzX2Jhc2VfMzJcbiAgd2hpc3BlciAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUJ1xuICBpbmZvICfOqWhsbHRfNDYwJywgKCAoIGJhc2UgPSAxMCApICoqIG1heF9kaWdpdHNfYmFzZV8xMCApIC0gMVxuICBpbmZvICfOqWhsbHRfNDYxJywgKCAoIGJhc2UgPSAxNiApICoqIG1heF9kaWdpdHNfYmFzZV8xNiApIC0gMVxuICBpbmZvICfOqWhsbHRfNDYyJywgKCAoIGJhc2UgPSAzMiApICoqIG1heF9kaWdpdHNfYmFzZV8zMiApIC0gMVxuICBpbmZvICfOqWhsbHRfNDYzJywgKCAoIGJhc2UgPSAzNiApICoqIG1heF9kaWdpdHNfYmFzZV8zNiApIC0gMVxuICB3aGlzcGVyICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gIGluZm8gJ86paGxsdF80NjQnLCBnZXRfbWF4X2ludGVnZXIgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsIDEwXG4gIGluZm8gJ86paGxsdF80NjUnLCBnZXRfbWF4X2ludGVnZXIgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsIDE2XG4gIGluZm8gJ86paGxsdF80NjYnLCBnZXRfbWF4X2ludGVnZXIgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsIDMyXG4gIGluZm8gJ86paGxsdF80NjcnLCBnZXRfbWF4X2ludGVnZXIgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsIDM2XG4gIGluZm8gJ86paGxsdF80NjgnLCBnZXRfbWF4X2ludGVnZXIgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsIDEyOFxuICB3aGlzcGVyICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gIGluZm8gJ86paGxsdF80NjknLCAoIHBhcnNlSW50ICggJzknLnJlcGVhdCBtYXhfZGlnaXRzX2Jhc2VfMTAgKSwgMTAgKVxuICBpbmZvICfOqWhsbHRfNDcwJywgKCBwYXJzZUludCAoICdmJy5yZXBlYXQgbWF4X2RpZ2l0c19iYXNlXzE2ICksIDE2IClcbiAgaW5mbyAnzqlobGx0XzQ3MScsICggcGFyc2VJbnQgKCAndicucmVwZWF0IG1heF9kaWdpdHNfYmFzZV8zMiApLCAzMiApXG4gIGluZm8gJ86paGxsdF80NzInLCAoIHBhcnNlSW50ICggJ3onLnJlcGVhdCBtYXhfZGlnaXRzX2Jhc2VfMzYgKSwgMzYgKVxuICBpbmZvICfOqWhsbHRfNDczJywgKCBwYXJzZUludCAoICc5Jy5yZXBlYXQgbWF4X2RpZ2l0c19iYXNlXzEwICksIDEwICkgPD0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcbiAgaW5mbyAnzqlobGx0XzQ3NCcsICggcGFyc2VJbnQgKCAnZicucmVwZWF0IG1heF9kaWdpdHNfYmFzZV8xNiApLCAxNiApIDw9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG4gIGluZm8gJ86paGxsdF80NzUnLCAoIHBhcnNlSW50ICggJ3YnLnJlcGVhdCBtYXhfZGlnaXRzX2Jhc2VfMzIgKSwgMzIgKSA8PSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUlxuICBpbmZvICfOqWhsbHRfNDc2JywgKCBwYXJzZUludCAoICd6Jy5yZXBlYXQgbWF4X2RpZ2l0c19iYXNlXzM2ICksIDM2ICkgPD0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcbiAgd2hpc3BlciAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUJ1xuICBpbmZvICfOqWhsbHRfNDc3JywgKzk5OSArIC05OTlcbiAgaW5mbyAnzqlobGx0XzQ3OCcsICs5OTkgKyAtMVxuICBpbmZvICfOqWhsbHRfNDc5JywgLSggLTk5OSAtIDEgKSArIC05OTlcbiAgaW5mbyAnzqlobGx0XzQ4MCcsIC0oIC05OTkgLSAxICkgKyAtOTk4XG4gIGluZm8gJ86paGxsdF80ODEnLCAtKCAtOTk5IC0gMSApICsgLTk5N1xuICBpbmZvICfOqWhsbHRfNDgyJywgLSggLTk5OSAtIDEgKSArIC0zXG4gIGluZm8gJ86paGxsdF80ODMnLCAtKCAtOTk5IC0gMSApICsgLTJcbiAgaW5mbyAnzqlobGx0XzQ4NCcsIC0oIC05OTkgLSAxICkgKyAtMVxuICBpbmZvICfOqWhsbHRfNDg1JywgXCIjeyAtKCAtOTk5IC0gMSApICsgLTMgfVwiLnJlcGxhY2UgLy8vIF4gOSo/ICg/PSAuICQgKSAvLy9ndiwgJydcbiAgaW5mbyAnzqlobGx0XzQ4NicsIFwiI3sgLSggLTk5OSAtIDEgKSArIC0yIH1cIi5yZXBsYWNlIC8vLyBeIDkqPyAoPz0gLiAkICkgLy8vZ3YsICcnXG4gIGluZm8gJ86paGxsdF80ODcnLCBcIiN7IC0oIC05OTkgLSAxICkgKyAtMSB9XCIucmVwbGFjZSAvLy8gXiA5Kj8gKD89IC4gJCApIC8vL2d2LCAnJ1xuICByZXR1cm4gbnVsbFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIHsgc2hvd19yZXF1aXJlcywgfSA9IHJlcXVpcmUgJy4uLy4uL3NuaXBwZXRzL2xpYi9kZW1vLXNob3ctcmVxdWlyZXMuanMnXG4gIHNob3dfcmVxdWlyZXMgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IEBob2xsZXJpdGhcbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB2YWxpZGF0ZV9hbmRfY29tcGlsZV9jZmdfMTBfY2FyZGluYWxzOiBAaG9sbGVyaXRoLnZhbGlkYXRlX2FuZF9jb21waWxlX2NmZ18xMF9jYXJkaW5hbHMsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGhvbGxlcml0aF8xMG12cDJfYmlnX3NodWZmbGU6IEBob2xsZXJpdGguaG9sbGVyaXRoXzEwbXZwMl9iaWdfc2h1ZmZsZSwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgaG9sbGVyaXRoXzEyOF9iaWdfc2h1ZmZsZTogQGhvbGxlcml0aC5ob2xsZXJpdGhfMTI4X2JpZ19zaHVmZmxlLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBjYW5fc2V0X21heF9pZHhfZGlnaXRzOiBAaG9sbGVyaXRoLmNhbl9zZXRfbWF4X2lkeF9kaWdpdHMsIH1cblxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdHlwZXM6IEBob2xsZXJpdGgudHlwZXMsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGgxMG12cDJfc29ydGluZ18yOiBAaG9sbGVyaXRoLmgxMG12cDJfc29ydGluZ18yLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB2YWxpZGF0ZV9hbmRfY29tcGlsZV9jZmdfMTA6IEBob2xsZXJpdGgudmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnXzEwLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBoMTBtdnAyX2RlY29kZV91bml0czogQGhvbGxlcml0aC5oMTBtdnAyX2RlY29kZV91bml0cywgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgZ2V0X2xlYWRpbmdfbm92YXNfcmU6IEBob2xsZXJpdGguZ2V0X2xlYWRpbmdfbm92YXNfcmUsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHZhbGlkYXRlX2FuZF9jb21waWxlX2NmZzogQGhvbGxlcml0aC52YWxpZGF0ZV9hbmRfY29tcGlsZV9jZmcsIH1cbiAgIyBkZW1vX21heF9pbnRlZ2VyKClcblxuXG4iXX0=
