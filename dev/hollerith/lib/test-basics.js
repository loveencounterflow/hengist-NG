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
      var Hollerith, _, codec, encode, equals, first_idx, get_random_vdx, hollerith_10mvp2, i, idx, internals, j, k, len, probe_sortkey, probe_sub_count, probe_vdx, probes_sortkey, probes_vdx, ref, ref1, ref2, rnd_vdx_cfg, shuffle, sk, sort_by_sortkey, sort_by_vdx, test_hollerith, type_of, vdx, Ωhllt__97;
      ({Hollerith, hollerith_10mvp2, test_hollerith, internals} = require('../../../apps/hollerith'));
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
      get_random_vdx = test_hollerith.get_random_vdx_producer(rnd_vdx_cfg);
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
      var Hollerith, _, codec, encode, equals, first_idx, get_random_vdx, hollerith_10mvp2, hollerith_128, i, idx, internals, j, len, probe_sortkey, probe_sub_count, probe_vdx, probes_sortkey, probes_vdx, ref, rnd_vdx_cfg, shuffle, sk, sort_by_sortkey, sort_by_vdx, test_hollerith, type_of, vdx, walk_first_idxs, Ωhllt_103;
      ({Hollerith, hollerith_128, hollerith_10mvp2, test_hollerith, internals} = require('../../../apps/hollerith'));
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
      get_random_vdx = test_hollerith.get_random_vdx_producer(rnd_vdx_cfg);
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
        var cfg, h, Ωhllt_377, Ωhllt_378, Ωhllt_379, Ωhllt_380, Ωhllt_381, Ωhllt_382, Ωhllt_383, Ωhllt_384, Ωhllt_385, Ωhllt_386, Ωhllt_387, Ωhllt_388, Ωhllt_390;
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
        this.throws((Ωhllt_390 = function() {
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
        var cfg, h, user_cfg, Ωhllt_391, Ωhllt_392, Ωhllt_393, Ωhllt_394, Ωhllt_395;
        user_cfg = {
          uniliterals: 'EFGHIJKLM N OPQRSTUVW',
          digitset: '0123456789',
          magnifiers: 'ABC XYZ'
        };
        ({cfg} = Hollerith.validate_and_compile_cfg(user_cfg));
        this.eq((Ωhllt_391 = function() {
          return cfg._min_integer;
        }), -999);
        this.eq((Ωhllt_392 = function() {
          return cfg._max_integer;
        }), +999);
        this.eq((Ωhllt_393 = function() {
          return cfg.digits_per_idx;
        }), 3);
        //.....................................................................................................
        h = new Hollerith(user_cfg);
        this.eq((Ωhllt_394 = function() {
          return h.cfg;
        }), cfg);
        this.eq((Ωhllt_395 = function() {
          return h.encode([0]);
        }), 'NNNNNNNNNNNNNNNNNNNN');
        return null;
      })();
      (() => {        //.......................................................................................................
        var cfg, h, user_cfg, Ωhllt_396, Ωhllt_397, Ωhllt_398, Ωhllt_399, Ωhllt_400;
        user_cfg = {
          uniliterals: 'EFGHIJKLM N OPQRSTUVW',
          digitset: '0123456789',
          magnifiers: 'ABC XYZ',
          _max_integer: 999
        };
        ({cfg} = Hollerith.validate_and_compile_cfg(user_cfg));
        this.eq((Ωhllt_396 = function() {
          return cfg._min_integer;
        }), -999);
        this.eq((Ωhllt_397 = function() {
          return cfg._max_integer;
        }), +999);
        this.eq((Ωhllt_398 = function() {
          return cfg.digits_per_idx;
        }), 3);
        //.....................................................................................................
        h = new Hollerith(user_cfg);
        this.eq((Ωhllt_399 = function() {
          return h.cfg;
        }), cfg);
        this.eq((Ωhllt_400 = function() {
          return h.encode([0]);
        }), 'NNNNNNNNNNNNNNNNNNNN');
        return null;
      })();
      (() => {        //.......................................................................................................
        var cfg, h, user_cfg, Ωhllt_401, Ωhllt_402, Ωhllt_403, Ωhllt_404, Ωhllt_405;
        user_cfg = {
          uniliterals: 'EFGHIJKLM N OPQRSTUVW',
          digitset: '0123456789',
          magnifiers: 'ABC XYZ',
          digits_per_idx: 3
        };
        ({cfg} = Hollerith.validate_and_compile_cfg(user_cfg));
        this.eq((Ωhllt_401 = function() {
          return cfg._min_integer;
        }), -999);
        this.eq((Ωhllt_402 = function() {
          return cfg._max_integer;
        }), +999);
        this.eq((Ωhllt_403 = function() {
          return cfg.digits_per_idx;
        }), 3);
        //.....................................................................................................
        h = new Hollerith(user_cfg);
        this.eq((Ωhllt_404 = function() {
          return h.cfg;
        }), cfg);
        this.eq((Ωhllt_405 = function() {
          return h.encode([0]);
        }), 'NNNNNNNNNNNNNNNNNNNN');
        return null;
      })();
      (() => {        //=======================================================================================================
        var cfg, h, user_cfg, Ωhllt_406, Ωhllt_407, Ωhllt_408, Ωhllt_409, Ωhllt_410;
        user_cfg = {
          uniliterals: 'EFGHIJKLM N OPQRSTUVW',
          digitset: '0123456789',
          magnifiers: '?@ABC XYZ^_'
        };
        ({cfg} = Hollerith.validate_and_compile_cfg(user_cfg));
        this.eq((Ωhllt_406 = function() {
          return cfg._min_integer;
        }), -99_999);
        this.eq((Ωhllt_407 = function() {
          return cfg._max_integer;
        }), +99_999);
        this.eq((Ωhllt_408 = function() {
          return cfg.digits_per_idx;
        }), 5);
        //.....................................................................................................
        h = new Hollerith(user_cfg);
        this.eq((Ωhllt_409 = function() {
          return h.cfg;
        }), cfg);
        this.eq((Ωhllt_410 = function() {
          return h.encode([0]);
        }), 'NNNNNNNNNNNNNNNNNNNNNNNNNNNNNN');
        return null;
      })();
      (() => {        //.......................................................................................................
        var cfg, h, user_cfg, Ωhllt_411, Ωhllt_412, Ωhllt_413, Ωhllt_414, Ωhllt_415;
        user_cfg = {
          uniliterals: 'EFGHIJKLM N OPQRSTUVW',
          digitset: '0123456789',
          magnifiers: '?@ABC XYZ^_',
          _max_integer: 999
        };
        ({cfg} = Hollerith.validate_and_compile_cfg(user_cfg));
        this.eq((Ωhllt_411 = function() {
          return cfg._min_integer;
        }), -99_999);
        this.eq((Ωhllt_412 = function() {
          return cfg._max_integer;
        }), +99_999);
        this.eq((Ωhllt_413 = function() {
          return cfg.digits_per_idx;
        }), 5);
        //.....................................................................................................
        h = new Hollerith(user_cfg);
        this.eq((Ωhllt_414 = function() {
          return h.cfg;
        }), cfg);
        this.eq((Ωhllt_415 = function() {
          return h.encode([0]);
        }), 'NNNNNNNNNNNNNNNNNNNNNNNNNNNNNN');
        return null;
      })();
      (() => {        //.......................................................................................................
        var cfg, h, user_cfg, Ωhllt_416, Ωhllt_417, Ωhllt_418, Ωhllt_419, Ωhllt_420;
        user_cfg = {
          uniliterals: 'EFGHIJKLM N OPQRSTUVW',
          digitset: '0123456789',
          magnifiers: '?@ABC XYZ^_',
          digits_per_idx: 3
        };
        ({cfg} = Hollerith.validate_and_compile_cfg(user_cfg));
        this.eq((Ωhllt_416 = function() {
          return cfg._min_integer;
        }), -999);
        this.eq((Ωhllt_417 = function() {
          return cfg._max_integer;
        }), +999);
        this.eq((Ωhllt_418 = function() {
          return cfg.digits_per_idx;
        }), 3);
        //.....................................................................................................
        h = new Hollerith(user_cfg);
        this.eq((Ωhllt_419 = function() {
          return h.cfg;
        }), cfg);
        this.eq((Ωhllt_420 = function() {
          return h.encode([0]);
        }), 'NNNNNNNNNNNNNNNNNNNN');
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    test_test_hollerith: function() {
      var Hollerith, hollerith_10mvp2, internals, test_hollerith, test_result, type_of, Ωhllt_421, Ωhllt_422, Ωhllt_423, Ωhllt_424, Ωhllt_425, Ωhllt_426, Ωhllt_427;
      ({internals, Hollerith, hollerith_10mvp2, test_hollerith} = require('../../../apps/hollerith'));
      ({type_of} = SFMODULES.unstable.require_type_of());
      //=======================================================================================================
      this.eq((Ωhllt_421 = function() {
        return type_of(test_hollerith.test_sorting);
      }), 'function');
      this.throws((Ωhllt_422 = function() {
        return type_of(test_hollerith.test_sorting('???'));
      }), /not a valid hollerith/);
      //.......................................................................................................
      test_result = test_hollerith.test_sorting(hollerith_10mvp2);
      this.eq((Ωhllt_423 = function() {
        return type_of(test_result);
      }), 'pod');
      this.eq((Ωhllt_424 = function() {
        return test_result.success;
      }), true);
      this.eq((Ωhllt_425 = function() {
        return type_of(test_result.probe_count);
      }), 'float');
      this.eq((Ωhllt_426 = function() {
        return type_of(test_result.hit_count);
      }), 'float');
      this.eq((Ωhllt_427 = function() {
        return type_of(test_result.miss_count);
      }), 'float');
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    types: function() {
      var CFG, Hollerith_typespace, create_max_integer;
      ({Hollerith_typespace, create_max_integer, CFG} = require('../../../apps/hollerith/lib/types'));
      (() => {        //.......................................................................................................
        var T, Ωhllt_428, Ωhllt_429, Ωhllt_430, Ωhllt_431, Ωhllt_432, Ωhllt_433, Ωhllt_434, Ωhllt_435, Ωhllt_436, Ωhllt_437, Ωhllt_438, Ωhllt_439, Ωhllt_440;
        T = new Hollerith_typespace();
        this.eq((Ωhllt_428 = function() {
          return T._base.isa(-1);
        }), false);
        this.eq((Ωhllt_429 = function() {
          return T._base.isa(0);
        }), false);
        this.eq((Ωhllt_430 = function() {
          return T._base.isa(+1);
        }), false);
        this.eq((Ωhllt_431 = function() {
          return T._base.isa(+2);
        }), true);
        this.eq((Ωhllt_432 = function() {
          return T._max_integer.isa(null);
        }), false);
        this.eq((Ωhllt_433 = function() {
          return T._max_integer.isa(9, 10);
        }), true);
        this.eq((Ωhllt_434 = function() {
          return T._max_integer.isa(99, 10);
        }), true);
        this.eq((Ωhllt_435 = function() {
          return T._max_integer.isa(99999999, 10);
        }), true);
        this.eq((Ωhllt_436 = function() {
          return T._max_integer.isa(-10, 10);
        }), false);
        this.eq((Ωhllt_437 = function() {
          return /not a positive safe integer/.test(T._max_integer.data.message);
        }), true);
        this.eq((Ωhllt_438 = function() {
          return T._max_integer.isa(0xffff, 16);
        }), true);
        this.eq((Ωhllt_439 = function() {
          return T._max_integer.isa(0x7fffffff, 16);
        }), false);
        this.throws((Ωhllt_440 = function() {
          return T._max_integer.validate(5, 10);
        }), /\(_max_integer\) not a valid _max_integer: 5 – x not a positive all-niners/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var R, T, Ωhllt_441;
        T = new Hollerith_typespace();
        R = {
          _base: 16,
          digits_per_idx: 4
        };
        this.eq((Ωhllt_441 = function() {
          return T._max_integer.isa((R._base ** R.digits_per_idx) - 1, R._base);
        }), true);
        return null;
      })();
      (() => {        //.......................................................................................................
        var T, Ωhllt_442, Ωhllt_443, Ωhllt_444, Ωhllt_445, Ωhllt_446, Ωhllt_447, Ωhllt_448, Ωhllt_449, Ωhllt_450;
        T = new Hollerith_typespace();
        this.eq((Ωhllt_442 = function() {
          return T._max_integer.isa((128 ** 1) - 1, 128);
        }), true);
        this.eq((Ωhllt_443 = function() {
          return T._max_integer.isa((128 ** 2) - 1, 128);
        }), true);
        this.eq((Ωhllt_444 = function() {
          return T._max_integer.isa((128 ** 3) - 1, 128);
        }), true);
        this.eq((Ωhllt_445 = function() {
          return T._max_integer.isa((128 ** 4) - 1, 128);
        }), true);
        this.eq((Ωhllt_446 = function() {
          return T._max_integer.isa((128 ** 5) - 1, 128);
        }), true);
        this.eq((Ωhllt_447 = function() {
          return T._max_integer.isa((128 ** 6) - 1, 128);
        }), true);
        this.eq((Ωhllt_448 = function() {
          return T._max_integer.isa((128 ** 7) - 1, 128);
        }), true);
        this.eq((Ωhllt_449 = function() {
          return T._max_integer.isa((128 ** 8) - 1, 128);
        }), false);
        this.eq((Ωhllt_450 = function() {
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
    info('Ωhllt_451', Number.MAX_SAFE_INTEGER.toString(16));
    info('Ωhllt_452', Number.MAX_SAFE_INTEGER.toString(32));
    whisper('—————————————————————————————————');
    info('Ωhllt_453', (32 ** 4 - 1).toString(32));
    info('Ωhllt_454', (32 ** 4 - 1).toString(32));
    whisper('—————————————————————————————————');
    info('Ωhllt_455', get_required_digits(32, 32));
    info('Ωhllt_456', get_required_digits(32 ** 6, 32));
    info('Ωhllt_457', get_required_digits(1e6, 10));
    info('Ωhllt_458', get_required_digits(20, 10));
    whisper('—————————————————————————————————');
    info('Ωhllt_459', max_digits_base_10 = get_max_niner_digit_count(Number.MAX_SAFE_INTEGER, 10));
    info('Ωhllt_460', max_digits_base_16 = get_max_niner_digit_count(Number.MAX_SAFE_INTEGER, 16));
    info('Ωhllt_461', max_digits_base_32 = get_max_niner_digit_count(Number.MAX_SAFE_INTEGER, 32));
    info('Ωhllt_462', max_digits_base_36 = get_max_niner_digit_count(Number.MAX_SAFE_INTEGER, 36));
    info('Ωhllt_463', max_digits_1base_28 = get_max_niner_digit_count(Number.MAX_SAFE_INTEGER, 128));
    // for base in [ 2 .. 128 ]
    //   info 'Ωhllt_464', { base, }, ( Math.ceil log_to_base Number.MAX_SAFE_INTEGER, base ) - 1
    whisper('—————————————————————————————————');
    info('Ωhllt_465', '9'.repeat(max_digits_base_10));
    info('Ωhllt_466', 'f'.repeat(max_digits_base_16));
    info('Ωhllt_467', 'v'.repeat(max_digits_base_32));
    whisper('—————————————————————————————————');
    info('Ωhllt_468', ((base = 10) ** max_digits_base_10) - 1);
    info('Ωhllt_469', ((base = 16) ** max_digits_base_16) - 1);
    info('Ωhllt_470', ((base = 32) ** max_digits_base_32) - 1);
    info('Ωhllt_471', ((base = 36) ** max_digits_base_36) - 1);
    whisper('—————————————————————————————————');
    info('Ωhllt_472', get_max_integer(Number.MAX_SAFE_INTEGER, 10));
    info('Ωhllt_473', get_max_integer(Number.MAX_SAFE_INTEGER, 16));
    info('Ωhllt_474', get_max_integer(Number.MAX_SAFE_INTEGER, 32));
    info('Ωhllt_475', get_max_integer(Number.MAX_SAFE_INTEGER, 36));
    info('Ωhllt_476', get_max_integer(Number.MAX_SAFE_INTEGER, 128));
    whisper('—————————————————————————————————');
    info('Ωhllt_477', parseInt('9'.repeat(max_digits_base_10), 10));
    info('Ωhllt_478', parseInt('f'.repeat(max_digits_base_16), 16));
    info('Ωhllt_479', parseInt('v'.repeat(max_digits_base_32), 32));
    info('Ωhllt_480', parseInt('z'.repeat(max_digits_base_36), 36));
    info('Ωhllt_481', (parseInt('9'.repeat(max_digits_base_10), 10)) <= Number.MAX_SAFE_INTEGER);
    info('Ωhllt_482', (parseInt('f'.repeat(max_digits_base_16), 16)) <= Number.MAX_SAFE_INTEGER);
    info('Ωhllt_483', (parseInt('v'.repeat(max_digits_base_32), 32)) <= Number.MAX_SAFE_INTEGER);
    info('Ωhllt_484', (parseInt('z'.repeat(max_digits_base_36), 36)) <= Number.MAX_SAFE_INTEGER);
    whisper('—————————————————————————————————');
    info('Ωhllt_485', +999 + -999);
    info('Ωhllt_486', +999 + -1);
    info('Ωhllt_487', -(-999 - 1) + -999);
    info('Ωhllt_488', -(-999 - 1) + -998);
    info('Ωhllt_489', -(-999 - 1) + -997);
    info('Ωhllt_490', -(-999 - 1) + -3);
    info('Ωhllt_491', -(-999 - 1) + -2);
    info('Ωhllt_492', -(-999 - 1) + -1);
    info('Ωhllt_493', `${-(-999 - 1) + -3}`.replace(/^9*?(?=.$)/gv, ''));
    info('Ωhllt_494', `${-(-999 - 1) + -2}`.replace(/^9*?(?=.$)/gv, ''));
    info('Ωhllt_495', `${-(-999 - 1) + -1}`.replace(/^9*?(?=.$)/gv, ''));
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
      // ( new Test guytest_cfg ).test @hollerith
      return (new Test(guytest_cfg)).test({
        test_test_hollerith: this.hollerith.test_test_hollerith
      });
    })();
  }

  // ( new Test guytest_cfg ).test { validate_and_compile_cfg_10_cardinals: @hollerith.validate_and_compile_cfg_10_cardinals, }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsZ0JBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUE7O0VBRUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixXQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLElBSkYsRUFLRSxHQUxGLEVBTUUsSUFORixFQU9FLE9BUEYsRUFRRSxHQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBUmhDLEVBWkE7OztFQXNCQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixJQUE1Qjs7RUFDQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1Qjs7RUFDQSxTQUFBLEdBQTRCLE9BQUEsQ0FBUSw2Q0FBUixFQXpCNUI7OztFQTZCQSxPQUFBLEdBR0UsQ0FBQTs7SUFBQSxRQUFBLEVBQVUsUUFBQSxDQUFF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QUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsSUFBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsSUFBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsSUFBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsSUFBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsSUFBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsSUFBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsSUFBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFB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LENBQUMsR0FBeEIsQ0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTRCLENBQUMsRUFBN0I7TUFBSCxDQUFmLENBQVIsRUFBK0QsZUFBZSxDQUFDLE1BQWhCLENBQXdCLENBQUMsRUFBekIsQ0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTRCLENBQUMsRUFBN0I7TUFBSCxDQUFmLENBQVIsRUFBK0QsZUFBZSxDQUFDLE1BQWhCLENBQXdCLENBQUMsRUFBekIsQ0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTRCLENBQUMsRUFBN0I7TUFBSCxDQUFmLENBQVIsRUFBK0QsZUFBZSxDQUFDLE1BQWhCLENBQXdCLENBQUMsRUFBekIsQ0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTRCLENBQUMsRUFBN0I7TUFBSCxDQUFmLENBQVIsRUFBK0QsZUFBZSxDQUFDLE1BQWhCLENBQXdCLENBQUMsRUFBekIsQ0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBK0QsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FBL0Q7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTZCLENBQUMsQ0FBOUI7TUFBSCxD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QUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxLQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLEtBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxHQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLEtBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxHQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLEtBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxHQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLElBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxFQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLElBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxFQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLElBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxFQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLElBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxFQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLEdBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxDQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLEdBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxDQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLEdBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxDQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLEdBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxFQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLEdBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxFQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLElBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxHQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLElBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxHQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLEtBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxH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RSxhQUFGLENBQUEsR0FBcUIsT0FBQSxDQUFRLDBDQUFSLENBQXJCO01BQ0EsYUFBQSxDQUFjLHlCQUFkLEVBREY7O01BR0UsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixLQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixJQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdELEVBSmhCOzthQU1FLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEI7UUFBRSxtQkFBQSxFQUFxQixJQUFDLENBQUEsU0FBUyxDQUFDO01BQWxDLENBQTlCO0lBUHNDLENBQUEsSUFBeEM7OztFQTEwQ0E7Ozs7Ozs7Ozs7OztBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG4ndXNlIHN0cmljdCdcblxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdob2xsZXJpdGgnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgbGltZVxuICBnb2xkXG4gIHJlZFxuICBibHVlXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG4jIFdHVVkgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL3dlYmd1eSdcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zaW5nbGUtZmlsZS1tb2R1bGVzJ1xuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaGVscGVycyA9XG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBycHJfdW5pdDogKCB1bml0ICkgLT5cbiAgICB7IG5hbWUsXG4gICAgICBsZXR0ZXJzLFxuICAgICAgbWFudGlzc2EsXG4gICAgICBpbmRleCwgICAgfSA9IHVuaXRcbiAgICBSICA9IFwiI3tuYW1lfToje2xldHRlcnN9XCJcbiAgICBSICs9IFwiLCN7bWFudGlzc2F9XCIgIGlmIG1hbnRpc3NhP1xuICAgIFIgKz0gXCJbI3tpbmRleH1dXCIgICAgaWYgaW5kZXg/XG4gICAgcmV0dXJuIFJcblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQGhvbGxlcml0aCA9XG5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBpbnRlcmZhY2U6IC0+XG4gICAgeyBIb2xsZXJpdGgsXG4gICAgICBob2xsZXJpdGhfMTAsXG4gICAgICBob2xsZXJpdGhfMTBtdnAsXG4gICAgICBob2xsZXJpdGhfMTI4LFxuICAgICAgaW50ZXJuYWxzICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBAZXEgICAgICggzqlhbnlidF9fXzEgPSAtPiB0eXBlX29mIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAgICAgICAgICApLCAnZnVuY3Rpb24nXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fXzIgPSAtPiB0eXBlX29mIGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgICApLCAndW5kZWZpbmVkJ1xuICAgICAgQGVxICAgICAoIM6pYW55YnRfX18zID0gLT4gdHlwZV9vZiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgICAgICAgKSwgJ2Z1bmN0aW9uJ1xuICAgICAgQGVxICAgICAoIM6pYW55YnRfX180ID0gLT4gdHlwZV9vZiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX3ZkeCAgICAgICAgKSwgJ2Z1bmN0aW9uJ1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBwYWRkaW5nOiAtPlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEwLFxuICAgICAgaG9sbGVyaXRoXzEwbXZwLFxuICAgICAgaG9sbGVyaXRoXzEyOCxcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICAjIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBAZXEgICAgICggzqlhbnlidF9fXzUgPSAtPiBlcXVhbHMgKCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIDEyMyApLCAoIGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4IDEyMyAgICAgICApICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X19fNiA9IC0+IGVxdWFscyAoIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgMTIzICksICggaG9sbGVyaXRoXzEwbXZwLmVuY29kZV92ZHggWyAxMjMsIF0gICkgKSwgZmFsc2VcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0X2xlYWRpbmdfbm92YXNfcmU6IC0+XG4gICAgeyBpbnRlcm5hbHM6IHsgdHlwZXMsIH0gICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyBnZXRfbGVhZGluZ19ub3Zhc19yZSwgICB9ID0gdHlwZXMuaW50ZXJuYWxzXG4gICAgIyBkZWJ1ZyAnzqlobGx0X19fNycsICc5ODcnLnJlcGxhY2UgLy8vIF4gKD86IDkgKSo/ICg/PSAuICQgKSAvLy9ndiwgJydcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBAZXEgICAgICggzqlhbnlidF9fXzggPSAtPiBnZXRfbGVhZGluZ19ub3Zhc19yZSAnOScgKSwgLy8vIF4gKD86IDkgICkqICg/PSAuKyAkICkgLy8vZ3ZcbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X19fOSA9IC0+IGdldF9sZWFkaW5nX25vdmFzX3JlICcqJyApLCAvLy8gXiAoPzogXFwqICkqICg/PSAuKyAkICkgLy8vZ3ZcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgX2xlYWRpbmdfbm92YXNfcmUgPSBnZXRfbGVhZGluZ19ub3Zhc19yZSAnOSdcbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X18xMCA9IC0+ICc5OTk5Jy5yZXBsYWNlIF9sZWFkaW5nX25vdmFzX3JlLCAnJyApLCAnOSdcbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X18xMSA9IC0+ICAnOTk5Jy5yZXBsYWNlIF9sZWFkaW5nX25vdmFzX3JlLCAnJyApLCAnOSdcbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X18xMiA9IC0+ICAgJzk5Jy5yZXBsYWNlIF9sZWFkaW5nX25vdmFzX3JlLCAnJyApLCAnOSdcbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X18xMyA9IC0+ICAgICc5Jy5yZXBsYWNlIF9sZWFkaW5nX25vdmFzX3JlLCAnJyApLCAnOSdcbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X18xNCA9IC0+ICc5OTg5Jy5yZXBsYWNlIF9sZWFkaW5nX25vdmFzX3JlLCAnJyApLCAnODknXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fMTUgPSAtPiAgJzk4OScucmVwbGFjZSBfbGVhZGluZ19ub3Zhc19yZSwgJycgKSwgJzg5J1xuICAgICAgQGVxICAgICAoIM6pYW55YnRfXzE2ID0gLT4gICAnODknLnJlcGxhY2UgX2xlYWRpbmdfbm92YXNfcmUsICcnICksICc4OSdcbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X18xNyA9IC0+ICc5OTkyJy5yZXBsYWNlIF9sZWFkaW5nX25vdmFzX3JlLCAnJyApLCAnMidcbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X18xOCA9IC0+ICAnOTkyJy5yZXBsYWNlIF9sZWFkaW5nX25vdmFzX3JlLCAnJyApLCAnMidcbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X18xOSA9IC0+ICAgJzkyJy5yZXBsYWNlIF9sZWFkaW5nX25vdmFzX3JlLCAnJyApLCAnMidcbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X18yMCA9IC0+ICAgICc3Jy5yZXBsYWNlIF9sZWFkaW5nX25vdmFzX3JlLCAnJyApLCAnNydcbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X18yMSA9IC0+ICAgICAnJy5yZXBsYWNlIF9sZWFkaW5nX25vdmFzX3JlLCAnJyApLCAnJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGgxMG12cF8xOiAtPlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEwLFxuICAgICAgaG9sbGVyaXRoXzEwbXZwLFxuICAgICAgaG9sbGVyaXRoXzEyOCxcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgICAgICggzqlhbnlidF9fMjIgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAtOTk5ICAgKSwgJ0swMDAnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzIzID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggIC05OSAgICksICdMMDAnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzI0ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggIC05MCAgICksICdMMDknXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzI1ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggIC0xMSAgICksICdMODgnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzI2ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggIC0xMCAgICksICdMODknXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzI3ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICAtOSAgICksICdNMCdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMjggPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgIC04ICAgKSwgJ00xJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18yOSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAgLTcgICApLCAnTTInXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzMwID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICAtNiAgICksICdNMydcbiAgICBAZXEgICAgICggzqlhbnlidF9fMzEgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgIC01ICAgKSwgJ000J1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18zMiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAgLTQgICApLCAnTTUnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzMzID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICAtMyAgICksICdNNidcbiAgICBAZXEgICAgICggzqlhbnlidF9fMzQgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgIC0yICAgKSwgJ003J1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18zNSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAgLTEgICApLCAnTTgnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzM2ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICAgMCAgICksICdOJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18zNyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAgIDEgICApLCAnTzEnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzM4ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICArOSAgICksICdPOSdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMzkgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgKzEwICAgKSwgJ1AxMCdcbiAgICBAZXEgICAgICggzqlhbnlidF9fNDAgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgKzIwICAgKSwgJ1AyMCdcbiAgICBAZXEgICAgICggzqlhbnlidF9fNDEgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgKzkwICAgKSwgJ1A5MCdcbiAgICBAZXEgICAgICggzqlhbnlidF9fNDIgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgMTIzICAgKSwgJ1ExMjMnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzQzID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggKzkwMCAgICksICdROTAwJ1xuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoMTBtdnBfMjogLT5cbiAgICB7IEhvbGxlcml0aCxcbiAgICAgIGhvbGxlcml0aF8xMCxcbiAgICAgIGhvbGxlcml0aF8xMG12cCxcbiAgICAgIGhvbGxlcml0aF8xMjgsXG4gICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzQ0ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggLTk5OSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgLTk5OVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X180NSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAtOTkgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAtOTlcbiAgICBAZXEgICAgICggzqlhbnlidF9fNDYgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgLTkwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgLTkwXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzQ3ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggIC0xMSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgIC0xMVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X180OCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAtMTAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAtMTBcbiAgICBAZXEgICAgICggzqlhbnlidF9fNDkgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgIC05ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgIC05XG4gICAgQGVxICAgICAoIM6pYW55YnRfXzUwID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICAtOCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAtOFxuICAgIEBlcSAgICAgKCDOqWFueWJ0X181MSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAgLTcgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgLTdcbiAgICBAZXEgICAgICggzqlhbnlidF9fNTIgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgIC02ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgIC02XG4gICAgQGVxICAgICAoIM6pYW55YnRfXzUzID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICAtNSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAtNVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X181NCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAgLTQgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgLTRcbiAgICBAZXEgICAgICggzqlhbnlidF9fNTUgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgIC0zICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgIC0zXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzU2ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICAtMiAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAtMlxuICAgIEBlcSAgICAgKCDOqWFueWJ0X181NyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAgLTEgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgLTFcbiAgICBAZXEgICAgICggzqlhbnlidF9fNTggPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgICAwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgICAwXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzU5ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICAgMSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAgMVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X182MCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAgKzkgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgKzlcbiAgICBAZXEgICAgICggzqlhbnlidF9fNjEgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgKzEwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgKzEwXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzYyID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICsyMCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICsyMFxuICAgIEBlcSAgICAgKCDOqWFueWJ0X182MyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICArOTAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICArOTBcbiAgICBAZXEgICAgICggzqlhbnlidF9fNjQgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgMTIzICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgMTIzXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzY1ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggKzkwMCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgKzkwMFxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoMTBtdnBfMzogLT5cbiAgICB7IEhvbGxlcml0aCxcbiAgICAgIGhvbGxlcml0aF8xMCxcbiAgICAgIGhvbGxlcml0aF8xMG12cCxcbiAgICAgIGhvbGxlcml0aF8xMjgsXG4gICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzY2ID0gLT4gKCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAtOTk5ICkucGFkRW5kIDI1LCAnTicgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbIC05OTksIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNjcgPSAtPiAoIGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAtOTkgKS5wYWRFbmQgMjUsICdOJyApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgIC05OSwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X182OCA9IC0+ICggaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggIC05MCApLnBhZEVuZCAyNSwgJ04nICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgLTkwLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzY5ID0gLT4gKCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgLTExICkucGFkRW5kIDI1LCAnTicgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAtMTEsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNzAgPSAtPiAoIGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAtMTAgKS5wYWRFbmQgMjUsICdOJyApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgIC0xMCwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X183MSA9IC0+ICggaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICAtOSApLnBhZEVuZCAyNSwgJ04nICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgIC05LCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzcyID0gLT4gKCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgIC04ICkucGFkRW5kIDI1LCAnTicgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgLTgsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNzMgPSAtPiAoIGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAgLTcgKS5wYWRFbmQgMjUsICdOJyApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICAtNywgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X183NCA9IC0+ICggaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICAtNiApLnBhZEVuZCAyNSwgJ04nICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgIC02LCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzc1ID0gLT4gKCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgIC01ICkucGFkRW5kIDI1LCAnTicgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgLTUsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNzYgPSAtPiAoIGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAgLTQgKS5wYWRFbmQgMjUsICdOJyApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICAtNCwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X183NyA9IC0+ICggaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICAtMyApLnBhZEVuZCAyNSwgJ04nICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgIC0zLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzc4ID0gLT4gKCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgIC0yICkucGFkRW5kIDI1LCAnTicgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgLTIsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNzkgPSAtPiAoIGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAgLTEgKS5wYWRFbmQgMjUsICdOJyApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICAtMSwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X184MCA9IC0+ICggaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICAgMCApLnBhZEVuZCAyNSwgJ04nICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgICAwLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzgxID0gLT4gKCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgICAxICkucGFkRW5kIDI1LCAnTicgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgIDEsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fODIgPSAtPiAoIGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICAgKzkgKS5wYWRFbmQgMjUsICdOJyApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICArOSwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X184MyA9IC0+ICggaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggICsxMCApLnBhZEVuZCAyNSwgJ04nICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgKzEwLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzg0ID0gLT4gKCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCAgKzIwICkucGFkRW5kIDI1LCAnTicgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICArMjAsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fODUgPSAtPiAoIGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaWR4ICArOTAgKS5wYWRFbmQgMjUsICdOJyApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICs5MCwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X184NiA9IC0+ICggaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pZHggIDEyMyApLnBhZEVuZCAyNSwgJ04nICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgMTIzLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzg3ID0gLT4gKCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2lkeCArOTAwICkucGFkRW5kIDI1LCAnTicgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICs5MDAsIF1cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaDEwbXZwX3NvcnRpbmdfMTogLT5cbiAgICB7IEhvbGxlcml0aCxcbiAgICAgIGhvbGxlcml0aF8xMCxcbiAgICAgIGhvbGxlcml0aF8xMG12cCxcbiAgICAgIGhvbGxlcml0aF8xMjgsXG4gICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgc29ydGVkX3NpbmdsZXMgPSAoIHBhZGRpbmcgPSBudWxsICkgPT5cbiAgICAgIHByb2JlcyA9IFtcbiAgICAgICAgWyAtOTk5LCBdXG4gICAgICAgIFsgIC05OSwgXVxuICAgICAgICBbICAtOTAsIF1cbiAgICAgICAgWyAgLTExLCBdXG4gICAgICAgIFsgIC0xMCwgXVxuICAgICAgICBbICAgLTksIF1cbiAgICAgICAgWyAgIC04LCBdXG4gICAgICAgIFsgICAtNywgXVxuICAgICAgICBbICAgLTYsIF1cbiAgICAgICAgWyAgIC01LCBdXG4gICAgICAgIFsgICAtNCwgXVxuICAgICAgICBbICAgLTMsIF1cbiAgICAgICAgWyAgIC0yLCBdXG4gICAgICAgIFsgICAtMSwgXVxuICAgICAgICBbICAgIDAsIF1cbiAgICAgICAgWyAgICAxLCBdXG4gICAgICAgIFsgICArOSwgXVxuICAgICAgICBbICArMTAsIF1cbiAgICAgICAgWyAgKzIwLCBdXG4gICAgICAgIFsgICs5MCwgXVxuICAgICAgICBbICAxMjMsIF1cbiAgICAgICAgWyArOTAwLCBdXG4gICAgICAgIF1cbiAgICAgIGZvciBwcm9iZSwgaWR4IGluIHByb2Jlc1xuICAgICAgICBzayAgICAgICAgICAgID0gaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBwcm9iZVxuICAgICAgICBzayAgICAgICAgICAgID0gc2sucGFkRW5kIHBhZGRpbmcsIGhvbGxlcml0aF8xMG12cC5jZmcuX3pwdW5zWyAwIF0gaWYgcGFkZGluZz9cbiAgICAgICAgcHJvYmVzWyBpZHggXSA9IHsgc2ssIHByb2JlLCBpZHgsIH1cbiAgICAgIHByb2Jlcy5zb3J0ICggYSwgYiApIC0+XG4gICAgICAgIHJldHVybiAtMSBpZiBhLnNrIDwgYi5za1xuICAgICAgICByZXR1cm4gKzEgaWYgYS5zayA+IGIuc2tcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIGZvciBlbnRyeSwgaWR4IGluIHByb2Jlc1xuICAgICAgICAjIGRlYnVnICfOqWhsbHRfXzg4JywgZW50cnlcbiAgICAgICAgQGVxICggzqlobGx0X184OSA9IC0+IGVudHJ5LmlkeCApLCBpZHhcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBzb3J0ZWRfc2luZ2xlcyBudWxsXG4gICAgc29ydGVkX3NpbmdsZXMgMTBcbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaDEwbXZwX3NvcnRpbmdfMjogLT5cbiAgICB7IEhvbGxlcml0aCxcbiAgICAgIGhvbGxlcml0aF8xMG12cCxcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwcm9iZXMgPSBbXG4gICAgICBbIFsgLTk5OSwgICAgICAgICAgIF0sICdLMDAwJywgICAgICBdXG4gICAgICBbIFsgIC05OSwgICAgICAgICAgIF0sICdMMDAnLCAgICAgICBdXG4gICAgICBbIFsgIC05MCwgICAgICAgICAgIF0sICdMMDknLCAgICAgICBdXG4gICAgICBbIFsgIC0xMSwgICAgICAgICAgIF0sICdMODgnLCAgICAgICBdXG4gICAgICBbIFsgIC0xMCwgICAgICAgICAgIF0sICdMODknLCAgICAgICBdXG4gICAgICBbIFsgICAtOSwgICAgICAgICAgIF0sICdNMCcsICAgICAgICBdXG4gICAgICBbIFsgICAtOCwgICAgICAgICAgIF0sICdNMScsICAgICAgICBdXG4gICAgICBbIFsgICAtNywgICAgICAgICAgIF0sICdNMicsICAgICAgICBdXG4gICAgICBbIFsgICAtNiwgICAgICAgICAgIF0sICdNMycsICAgICAgICBdXG4gICAgICBbIFsgICAtNSwgICAgICAgICAgIF0sICdNNCcsICAgICAgICBdXG4gICAgICBbIFsgICAtNCwgICAgICAgICAgIF0sICdNNScsICAgICAgICBdXG4gICAgICBbIFsgICAtMywgICAgICAgICAgIF0sICdNNicsICAgICAgICBdXG4gICAgICBbIFsgICAtMiwgICAgICAgICAgIF0sICdNNycsICAgICAgICBdXG4gICAgICBbIFsgICAtMSwgICAgICAgICAgIF0sICdNOCcsICAgICAgICBdXG4gICAgICBbIFsgICArMCwgIC0yMCwgICAgIF0sICdOTDIwJywgICAgICBdXG4gICAgICBbIFsgICArMCwgICAgICAgICAgIF0sICdOJywgICAgICAgICBdXG4gICAgICBbIFsgICArMCwgICsyMCwgICAgIF0sICdOUDIwJywgICAgICBdXG4gICAgICBbIFsgICArOSwgICAgICAgICAgIF0sICdPOScsICAgICAgICBdXG4gICAgICBbIFsgICsxMCwgICAtMywgICAgIF0sICdQMTBNNicsICAgICBdXG4gICAgICBbIFsgICsxMCwgICAtMiwgICAgIF0sICdQMTBNNycsICAgICBdXG4gICAgICBbIFsgICsxMCwgICAtMSwgICAgIF0sICdQMTBNOCcsICAgICBdXG4gICAgICBbIFsgICsxMCwgICAgICAgICAgIF0sICdQMTAnLCAgICAgICBdXG4gICAgICBbIFsgICsxMCwgICArMCwgICAgIF0sICdQMTBOJywgICAgICBdXG4gICAgICBbIFsgICsxMCwgICArMSwgICAgIF0sICdQMTBPMScsICAgICBdXG4gICAgICBbIFsgICsxMCwgICsxMCwgLTEsIF0sICdQMTBQMTBNOCcsICBdXG4gICAgICBbIFsgICsxMCwgICsxMCwgICAgIF0sICdQMTBQMTAnLCAgICBdXG4gICAgICBbIFsgICsxMCwgICsyMCwgICAgIF0sICdQMTBQMjAnLCAgICBdXG4gICAgICBbIFsgICsyMCwgICAgICAgICAgIF0sICdQMjAnLCAgICAgICBdXG4gICAgICBbIFsgICsyMCwgICsxMCwgICAgIF0sICdQMjBQMTAnLCAgICBdXG4gICAgICBbIFsgICs5MCwgICAgICAgICAgIF0sICdQOTAnLCAgICAgICBdXG4gICAgICBbIFsgKzkwMCwgICAgICAgICAgIF0sICdROTAwJywgICAgICBdXG4gICAgICBdXG4gICAgdWxpbmVzICAgICAgICAgICAgPSBbXVxuICAgIHBsaW5lcyAgICAgICAgICAgID0gW11cbiAgICBleHBlY3RlZF9pbmRleGVzICA9ICggaWR4IGZvciBpZHggaW4gWyAwIC4uLiBwcm9iZXMubGVuZ3RoIF0gKVxuICAgIHNodWZmbGUgICAgICAgICAgID0gR1VZLnJuZC5nZXRfc2h1ZmZsZSA1NywgODhcbiAgICBmb3IgWyB2ZHgsIHNrX21hdGNoZXIsIF0sIGlkeCBpbiBwcm9iZXNcbiAgICAgIHVzayAgID0gaG9sbGVyaXRoXzEwbXZwLmVuY29kZSB2ZHhcbiAgICAgIHBzayAgID0gdXNrLnBhZEVuZCAxMCwgaG9sbGVyaXRoXzEwbXZwLmNmZy5fenB1bnNbIDAgXVxuICAgICAgdXNrICAgPSB1c2sucGFkRW5kIDEwLCAnICdcbiAgICAgIHVsaW5lcy5wdXNoIFwiI3t1c2t9ICN7cnByIHZkeH0gI3tpZHh9XCJcbiAgICAgIHBsaW5lcy5wdXNoIFwiI3twc2t9ICN7cnByIHZkeH0gI3tpZHh9XCJcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGZvciBfIGluIFsgMSAuLiAxMCBdXG4gICAgICB1bGluZXMgPSBzaHVmZmxlIHVsaW5lc1xuICAgICAgdWxpbmVzLnNvcnQoKVxuICAgICAgcmVhbF9pbmRleGVzID0gW11cbiAgICAgIGZvciB1bGluZSBpbiB1bGluZXNcbiAgICAgICAgIyBoZWxwICfOqWhsbHRfXzkwJywgdWxpbmVcbiAgICAgICAgcmVhbF9pbmRleGVzLnB1c2ggTnVtYmVyIHVsaW5lLnJlcGxhY2UgL14uKj9cXHMoWzAtOV0rKSQvLCAnJDEnXG4gICAgICBAZXEgKCDOqWhsbHRfXzkxID0gLT4gZXF1YWxzIGV4cGVjdGVkX2luZGV4ZXMsIHJlYWxfaW5kZXhlcyApLCB0cnVlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmb3IgXyBpbiBbIDEgLi4gMTAgXVxuICAgICAgcGxpbmVzID0gc2h1ZmZsZSBwbGluZXNcbiAgICAgIHBsaW5lcy5zb3J0KClcbiAgICAgIHJlYWxfaW5kZXhlcyA9IFtdXG4gICAgICBmb3IgcGxpbmUgaW4gcGxpbmVzXG4gICAgICAgICMgaGVscCAnzqlobGx0X185MicsIHBsaW5lXG4gICAgICAgIHJlYWxfaW5kZXhlcy5wdXNoIE51bWJlciBwbGluZS5yZXBsYWNlIC9eLio/XFxzKFswLTldKykkLywgJyQxJ1xuICAgICAgQGVxICggzqlobGx0X185MyA9IC0+IGVxdWFscyBleHBlY3RlZF9pbmRleGVzLCByZWFsX2luZGV4ZXMgKSwgdHJ1ZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGhvbGxlcml0aF8xMG12cDJfYmlnX3NodWZmbGU6IC0+XG4gICAgeyBIb2xsZXJpdGgsXG4gICAgICBob2xsZXJpdGhfMTBtdnAyLFxuICAgICAgdGVzdF9ob2xsZXJpdGgsXG4gICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgIGNvZGVjICAgICAgICAgICAgICAgICAgICAgICA9IGhvbGxlcml0aF8xMG12cDJcbiAgICBybmRfdmR4X2NmZyAgICAgICAgICAgICAgICAgPVxuICAgICAgc2VlZDogICAgICAgICBudWxsXG4gICAgICBtaW5fbGVuZ3RoOiAgIDFcbiAgICAgIG1heF9sZW5ndGg6ICAgY29kZWMuY2ZnLmRpbWVuc2lvbiAtIDFcbiAgICAgIG1pbl9pZHg6ICAgICAgTWF0aC5tYXggY29kZWMuY2ZnLl9taW5faW50ZWdlciwgLTIwMDBcbiAgICAgIG1heF9pZHg6ICAgICAgTWF0aC5taW4gY29kZWMuY2ZnLl9tYXhfaW50ZWdlciwgKzIwMDBcbiAgICAjIGRlYnVnICfOqWhsbHRfXzk0Jywgcm5kX3ZkeF9jZmdcbiAgICAjIGRlYnVnICfOqWhsbHRfXzk1JywgY29kZWMuY2ZnLl9zb3J0a2V5X3dpZHRoXG4gICAgZ2V0X3JhbmRvbV92ZHggICAgICAgICAgICAgID0gdGVzdF9ob2xsZXJpdGguZ2V0X3JhbmRvbV92ZHhfcHJvZHVjZXIgcm5kX3ZkeF9jZmdcbiAgICBwcm9iZV9zdWJfY291bnQgICAgICAgICAgICAgPSAzXG4gICAgc2h1ZmZsZSAgICAgICAgICAgICAgICAgICAgID0gR1VZLnJuZC5nZXRfc2h1ZmZsZSA1NywgODhcbiAgICBlbmNvZGUgICAgICAgICAgICAgICAgICAgICAgPSAoIHZkeCApIC0+ICggY29kZWMuZW5jb2RlIHZkeCApLnBhZEVuZCBjb2RlYy5jZmcuX3NvcnRrZXlfd2lkdGgsIGNvZGVjLmNmZy5fY2lwaGVyXG4gICAgcHJvYmVzX3NvcnRrZXkgICAgICAgICAgICAgID0gW11cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGZvciBmaXJzdF9pZHggaW4gWyBybmRfdmR4X2NmZy5taW5faWR4IC4uIHJuZF92ZHhfY2ZnLm1heF9pZHggXVxuICAgICAgZm9yIF8gaW4gWyAxIC4uIHByb2JlX3N1Yl9jb3VudCBdXG4gICAgICAgIHZkeCA9IFsgZmlyc3RfaWR4LCBnZXRfcmFuZG9tX3ZkeCgpLi4uLCBdXG4gICAgICAgIHNrICA9IGVuY29kZSB2ZHhcbiAgICAgICAgcHJvYmVzX3NvcnRrZXkucHVzaCB7IHZkeCwgc2ssIH1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHByb2Jlc19zb3J0a2V5ICAgID0gc2h1ZmZsZSBwcm9iZXNfc29ydGtleVxuICAgIHByb2Jlc192ZHggICAgICAgID0gcHJvYmVzX3NvcnRrZXlbIC4uIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHNvcnRfYnlfdmR4ICAgICAgID0gKCBhLCBiICkgLT5cbiAgICAgIGEgPSBhLnZkeFxuICAgICAgYiA9IGIudmR4XG4gICAgICBmb3IgaWR4IGluIFsgMCAuLi4gKCBNYXRoLm1heCBhLmxlbmd0aCwgYi5sZW5ndGggKSBdXG4gICAgICAgIGRhID0gYVsgaWR4IF0gPyAwXG4gICAgICAgIGRiID0gYlsgaWR4IF0gPyAwXG4gICAgICAgIGNvbnRpbnVlIGlmIGRhIGlzIGRiXG4gICAgICAgIHJldHVybiAtMSBpZiBkYSA8IGRiXG4gICAgICAgIHJldHVybiArMVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHNvcnRfYnlfc29ydGtleSAgID0gKCBhLCBiICkgLT5cbiAgICAgIGEgPSBhLnNrXG4gICAgICBiID0gYi5za1xuICAgICAgcmV0dXJuICAwIGlmIGEgaXMgYlxuICAgICAgcmV0dXJuIC0xIGlmIGEgPCBiXG4gICAgICByZXR1cm4gKzFcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHByb2Jlc192ZHguc29ydCAgICAgc29ydF9ieV92ZHhcbiAgICBwcm9iZXNfc29ydGtleS5zb3J0IHNvcnRfYnlfc29ydGtleVxuICAgIGZvciBwcm9iZV92ZHgsIGlkeCBpbiBwcm9iZXNfdmR4XG4gICAgICBwcm9iZV9zb3J0a2V5ID0gcHJvYmVzX3NvcnRrZXlbIGlkeCBdXG4gICAgICAjIHdoaXNwZXIgJ86paGxsdF9fOTYnLCAoIGdvbGQgcHJvYmVfc29ydGtleS5zayApLCAoIHJlZCBwcm9iZV92ZHgudmR4ICksICggbGltZSBwcm9iZV9zb3J0a2V5LnZkeCApXG4gICAgICBAZXEgKCDOqWhsbHRfXzk3ID0gLT4gcHJvYmVfc29ydGtleS52ZHggKSwgcHJvYmVfdmR4LnZkeFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGhvbGxlcml0aF8xMjhfYmlnX3NodWZmbGU6IC0+XG4gICAgeyBIb2xsZXJpdGgsXG4gICAgICBob2xsZXJpdGhfMTI4LFxuICAgICAgaG9sbGVyaXRoXzEwbXZwMixcbiAgICAgIHRlc3RfaG9sbGVyaXRoLFxuICAgICAgaW50ZXJuYWxzICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICBjb2RlYyAgICAgICAgICAgICAgICAgICAgICAgPSBob2xsZXJpdGhfMTI4XG4gICAgIyBjb2RlYyAgICAgICAgICAgICAgICAgICAgICAgPSBob2xsZXJpdGhfMTBtdnAyXG4gICAgcm5kX3ZkeF9jZmcgICAgICAgICAgICAgICAgID1cbiAgICAgIHNlZWQ6ICAgICAgICAgbnVsbFxuICAgICAgbWluX2xlbmd0aDogICAxXG4gICAgICBtYXhfbGVuZ3RoOiAgIGNvZGVjLmNmZy5kaW1lbnNpb24gLSAxXG4gICAgICBtaW5faWR4OiAgICAgIE1hdGgubWF4IGNvZGVjLmNmZy5fbWluX2ludGVnZXIsIC0yMDAwXG4gICAgICBtYXhfaWR4OiAgICAgIE1hdGgubWluIGNvZGVjLmNmZy5fbWF4X2ludGVnZXIsICsyMDAwXG4gICAgIyBkZWJ1ZyAnzqlobGx0X185OCcsIHJuZF92ZHhfY2ZnXG4gICAgIyBkZWJ1ZyAnzqlobGx0X185OScsIGNvZGVjLmNmZy5fc29ydGtleV93aWR0aFxuICAgIGdldF9yYW5kb21fdmR4ICAgICAgICAgICAgICA9IHRlc3RfaG9sbGVyaXRoLmdldF9yYW5kb21fdmR4X3Byb2R1Y2VyIHJuZF92ZHhfY2ZnXG4gICAgcHJvYmVfc3ViX2NvdW50ICAgICAgICAgICAgID0gM1xuICAgIHNodWZmbGUgICAgICAgICAgICAgICAgICAgICA9IEdVWS5ybmQuZ2V0X3NodWZmbGUgNTcsIDg4XG4gICAgZW5jb2RlICAgICAgICAgICAgICAgICAgICAgID0gKCB2ZHggKSAtPiAoIGNvZGVjLmVuY29kZSB2ZHggKS5wYWRFbmQgY29kZWMuY2ZnLl9zb3J0a2V5X3dpZHRoLCBjb2RlYy5jZmcuX2NpcGhlclxuICAgIHByb2Jlc19zb3J0a2V5ICAgICAgICAgICAgICA9IFtdXG4gICAgIyBkZWJ1ZyAnzqlobGx0XzEwMCcsIHJuZF92ZHhfY2ZnOyBwcm9jZXNzLmV4aXQgMTExXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICB3YWxrX2ZpcnN0X2lkeHMgICAgICAgICAgICAgPSAtPlxuICAgICAgeWllbGQgaWR4IGZvciBpZHggaW4gWyBjb2RlYy5jZmcuX21pbl9pbnRlZ2VyICAgICAgLi4gY29kZWMuY2ZnLl9taW5faW50ZWdlciArIDEwIF1cbiAgICAgIHlpZWxkIGlkeCBmb3IgaWR4IGluIFsgcm5kX3ZkeF9jZmcubWluX2lkeCAgICAgICAgIC4uIHJuZF92ZHhfY2ZnLm1heF9pZHggICAgICAgICBdXG4gICAgICB5aWVsZCBpZHggZm9yIGlkeCBpbiBbIGNvZGVjLmNmZy5fbWF4X2ludGVnZXIgLSAxMCAuLiBjb2RlYy5jZmcuX21heF9pbnRlZ2VyICAgICAgXVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGZvciBmaXJzdF9pZHggZnJvbSB3YWxrX2ZpcnN0X2lkeHMoKVxuICAgICMgZm9yIGZpcnN0X2lkeCBpbiBbIC0xMDAgLi4gKzEwMCBdXG4gICAgICAjIGRlYnVnICfOqWhsbHRfMTAxJywgeyBmaXJzdF9pZHgsIH1cbiAgICAgIGZvciBfIGluIFsgMSAuLiBwcm9iZV9zdWJfY291bnQgXVxuICAgICAgICB2ZHggPSBbIGZpcnN0X2lkeCwgZ2V0X3JhbmRvbV92ZHgoKS4uLiwgXVxuICAgICAgICBzayAgPSBlbmNvZGUgdmR4XG4gICAgICAgIHByb2Jlc19zb3J0a2V5LnB1c2ggeyB2ZHgsIHNrLCB9XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwcm9iZXNfc29ydGtleSAgICA9IHNodWZmbGUgcHJvYmVzX3NvcnRrZXlcbiAgICBwcm9iZXNfdmR4ICAgICAgICA9IHByb2Jlc19zb3J0a2V5WyAuLiBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBzb3J0X2J5X3ZkeCAgICAgICA9ICggYSwgYiApIC0+XG4gICAgICBhID0gYS52ZHhcbiAgICAgIGIgPSBiLnZkeFxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4uICggTWF0aC5tYXggYS5sZW5ndGgsIGIubGVuZ3RoICkgXVxuICAgICAgICBkYSA9IGFbIGlkeCBdID8gMFxuICAgICAgICBkYiA9IGJbIGlkeCBdID8gMFxuICAgICAgICBjb250aW51ZSBpZiBkYSBpcyBkYlxuICAgICAgICByZXR1cm4gLTEgaWYgZGEgPCBkYlxuICAgICAgICByZXR1cm4gKzFcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBzb3J0X2J5X3NvcnRrZXkgICA9ICggYSwgYiApIC0+XG4gICAgICBhID0gYS5za1xuICAgICAgYiA9IGIuc2tcbiAgICAgIHJldHVybiAgMCBpZiBhIGlzIGJcbiAgICAgIHJldHVybiAtMSBpZiBhIDwgYlxuICAgICAgcmV0dXJuICsxXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwcm9iZXNfdmR4LnNvcnQgICAgIHNvcnRfYnlfdmR4XG4gICAgcHJvYmVzX3NvcnRrZXkuc29ydCBzb3J0X2J5X3NvcnRrZXlcbiAgICBmb3IgcHJvYmVfdmR4LCBpZHggaW4gcHJvYmVzX3ZkeFxuICAgICAgcHJvYmVfc29ydGtleSA9IHByb2Jlc19zb3J0a2V5WyBpZHggXVxuICAgICAgIyB3aGlzcGVyICfOqWhsbHRfMTAyJywgKCBnb2xkIHByb2JlX3NvcnRrZXkuc2sgKSwgKCByZWQgcHJvYmVfdmR4LnZkeCApLCAoIGxpbWUgcHJvYmVfc29ydGtleS52ZHggKVxuICAgICAgQGVxICggzqlobGx0XzEwMyA9IC0+IHByb2JlX3NvcnRrZXkudmR4ICksIHByb2JlX3ZkeC52ZHhcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoMTI4XzE2MzgzX3NvcnRpbmdfMjogLT5cbiAgICB7IEhvbGxlcml0aCxcbiAgICAgIGhvbGxlcml0aF8xMjhfMTYzODMsXG4gICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcHJvYmVzID0gW1xuICAgICAgWyBbIC05OTksICAgICAgICAgICBdLCAnw43CvzvDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgXVxuICAgICAgWyBbICAtOTksICAgICAgICAgICBdLCAnw44/w6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgXVxuICAgICAgWyBbICAtOTAsICAgICAgICAgICBdLCAnw45Iw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgXVxuICAgICAgWyBbICAtODAsICAgICAgICAgICBdLCAnw45Sw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgXVxuICAgICAgWyBbICAtMjEsICAgICAgICAgICBdLCAnw47CscOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgIF1cbiAgICAgIFsgWyAgLTIwLCAgICAgICAgICAgXSwgJ8OPw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsICBdXG4gICAgICBbIFsgIC0xMSwgICAgICAgICAgIF0sICfDmMOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgXVxuICAgICAgWyBbICAtMTAsICAgICAgICAgICBdLCAnw5nDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgIF1cbiAgICAgIFsgWyAgIC05LCAgICAgICAgICAgXSwgJ8Oaw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsICBdXG4gICAgICBbIFsgICAtOCwgICAgICAgICAgIF0sICfDm8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgXVxuICAgICAgWyBbICAgLTcsICAgICAgICAgICBdLCAnw5zDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgIF1cbiAgICAgIFsgWyAgIC02LCAgICAgICAgICAgXSwgJ8Odw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsICBdXG4gICAgICBbIFsgICAtNSwgICAgICAgICAgIF0sICfDnsOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgXVxuICAgICAgWyBbICAgLTQsICAgICAgICAgICBdLCAnw5/Do8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgIF1cbiAgICAgIFsgWyAgIC0zLCAgICAgICAgICAgXSwgJ8Ogw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsICBdXG4gICAgICBbIFsgICAtMiwgICAgICAgICAgIF0sICfDocOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgXVxuICAgICAgWyBbICAgLTEsICAgICAgICAgICBdLCAnw6LDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgIF1cbiAgICAgIFsgWyAgICswLCAgLTIwLCAgICAgXSwgJ8Ojw4/Do8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsICBdXG4gICAgICBbIFsgICArMCwgICAgICAgICAgIF0sICfDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgXVxuICAgICAgWyBbICAgKzAsICArMjAsICAgICBdLCAnw6PDt8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgIF1cbiAgICAgIFsgWyAgICs5LCAgICAgICAgICAgXSwgJ8Osw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsICBdXG4gICAgICBbIFsgICsxMCwgICAtMywgICAgIF0sICfDrcOgw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgXVxuICAgICAgWyBbICArMTAsICAgLTIsICAgICBdLCAnw63DocOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgIF1cbiAgICAgIFsgWyAgKzEwLCAgIC0xLCAgICAgXSwgJ8Otw6LDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsICBdXG4gICAgICBbIFsgICsxMCwgICAgICAgICAgIF0sICfDrcOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgXVxuICAgICAgWyBbICArMTAsICAgKzAsICAgICBdLCAnw63Do8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgIF1cbiAgICAgIFsgWyAgKzEwLCAgICsxLCAgICAgXSwgJ8Otw6TDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsICBdXG4gICAgICBbIFsgICsxMCwgICsxMCwgLTEsIF0sICfDrcOtw6LDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgXVxuICAgICAgWyBbICArMTAsICArMTAsICAgICBdLCAnw63DrcOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgIF1cbiAgICAgIFsgWyAgKzEwLCAgKzIwLCAgICAgXSwgJ8Otw7fDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsICBdXG4gICAgICBbIFsgICsyMCwgICAgICAgICAgIF0sICfDt8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgXVxuICAgICAgWyBbICArMjAsICArMTAsICAgICBdLCAnw7fDrcOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgIF1cbiAgICAgIFsgWyAgKzkwLCAgICAgICAgICAgXSwgJ8O4fsOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgIF1cbiAgICAgIFsgWyArOTAwLCAgICAgICAgICAgXSwgJ8O5KibDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgXVxuICAgICAgXVxuICAgIHVucGFkZGVkX2xpbmVzICAgID0gW11cbiAgICBwYWRkZWRfbGluZXMgICAgICA9IFtdXG4gICAgZXhwZWN0ZWRfaW5kZXhlcyAgPSAoIGlkeCBmb3IgaWR4IGluIFsgMCAuLi4gcHJvYmVzLmxlbmd0aCBdIClcbiAgICBzaHVmZmxlICAgICAgICAgICA9IEdVWS5ybmQuZ2V0X3NodWZmbGUgNTcsIDg4XG4gICAgY29kZWMgICAgICAgICAgICAgPSBob2xsZXJpdGhfMTI4XzE2MzgzXG4gICAgIyBkZWJ1ZyAnzqlobGx0XzEwNCcsIGNvZGVjLmNmZy5kaWdpdHNfcGVyX2lkeFxuICAgICMgZGVidWcgJ86paGxsdF8xMDUnLCBjb2RlYy5jZmcuemVyb19wYWRfbGVuZ3RoXG4gICAgQGVxICggzqlobGx0XzEwNiA9IC0+IGNvZGVjLmNmZy5fYmFzZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDEyOFxuICAgIEBlcSAoIM6paGxsdF8xMDcgPSAtPiBjb2RlYy5jZmcuX21heF9pbnRlZ2VyICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCArMTYzODNcbiAgICBAZXEgKCDOqWhsbHRfMTA4ID0gLT4gY29kZWMuY2ZnLl9taW5faW50ZWdlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgLTE2MzgzXG4gICAgQGVxICggzqlobGx0XzEwOSA9IC0+IGNvZGVjLmNmZy5fcG1hZ19saXN0WyAyIF0gICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw7knXG4gICAgQGVxICggzqlobGx0XzExMCA9IC0+IGNvZGVjLmNmZy5fbm1hZ19saXN0WyAyIF0gICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw40nXG4gICAgQGVxICggzqlobGx0XzExMSA9IC0+IGNvZGVjLmVuY29kZSBjb2RlYy5jZmcuX21heF9pbnRlZ2VyICAgICAgICAgICAgICAgICksICfDucOGw4YnXG4gICAgQGVxICggzqlobGx0XzExMiA9IC0+IGNvZGVjLmVuY29kZSBjb2RlYy5jZmcuX21pbl9pbnRlZ2VyICAgICAgICAgICAgICAgICksICfDjSEhJ1xuICAgIEBlcSAoIM6paGxsdF8xMTMgPSAtPiBjb2RlYy5kZWNvZGUgJ8ONISEnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAtMTYzODMgXVxuICAgIEB0aHJvd3MgKCDOqWhsbHRfMTE0ID0gLT4gY29kZWMuZGVjb2RlICfDhyEhISEhISEhJyAgICAgICAgICAgICAgICAgICAgICAgKSwgL25vdCBhIHZhbGlkIHNvcnRrZXkvXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmb3IgWyB2ZHgsIHNrX21hdGNoZXIsIF0sIGlkeCBpbiBwcm9iZXNcbiAgICAgIHVzayAgID0gY29kZWMuZW5jb2RlIHZkeFxuICAgICAgQGVxICggzqlobGx0XzExNSA9IC0+IHVzayApLCBza19tYXRjaGVyXG4gICAgICAjIGVjaG8gcnByIHVza1xuICAgICAgcHNrICAgPSB1c2sucGFkRW5kIDEwLCBjb2RlYy5jZmcuX2NpcGhlclxuICAgICAgdXNrICAgPSB1c2sucGFkRW5kIDEwLCAnICdcbiAgICAgIHVucGFkZGVkX2xpbmVzLnB1c2ggXCIje3Vza30gI3tycHIgdmR4fSAje2lkeH1cIlxuICAgICAgcGFkZGVkX2xpbmVzLnB1c2ggXCIje3Bza30gI3tycHIgdmR4fSAje2lkeH1cIlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqlobGx0XzExNiA9IC0+IGNvZGVjLmNmZy5kaWdpdHNfcGVyX2lkeCAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAyXG4gICAgQGVxICggzqlobGx0XzExNyA9IC0+IGNvZGVjLmNmZy5fbWF4X3pwdW4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgMjBcbiAgICBAZXEgKCDOqWhsbHRfMTE4ID0gLT4gY29kZWMuY2ZnLl9uYXVnaHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnISdcbiAgICBAZXEgKCDOqWhsbHRfMTE5ID0gLT4gY29kZWMuY2ZnLl9ub3ZhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw4YnXG4gICAgQGVxICggzqlobGx0XzEyMCA9IC0+IGNvZGVjLmNmZy5fY2lwaGVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8OjJ1xuICAgIEBlcSAoIM6paGxsdF8xMjEgPSAtPiBjb2RlYy5jZmcuX25tYWcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcgw47DjSdcbiAgICBAZXEgKCDOqWhsbHRfMTIyID0gLT4gY29kZWMuY2ZnLl9wbWFnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnIMO4w7knXG4gICAgQGVxICggzqlobGx0XzEyMyA9IC0+IGNvZGVjLmNmZy5fcG1hZ19saXN0WyBjb2RlYy5jZmcuZGlnaXRzX3Blcl9pZHggXSAgICApLCAnw7knXG4gICAgQGVxICggzqlobGx0XzEyNCA9IC0+IGNvZGVjLmVuY29kZSAtMTYzODMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8ONISEnXG4gICAgQGVxICggzqlobGx0XzEyNSA9IC0+IGNvZGVjLmVuY29kZSAtMTYzODIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8ONISMnXG4gICAgQGVxICggzqlobGx0XzEyNiA9IC0+IGNvZGVjLmVuY29kZSAtMTI5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8ONw4XDhSdcbiAgICBAZXEgKCDOqWhsbHRfMTI3ID0gLT4gY29kZWMuZW5jb2RlIC0xMjggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw43DhcOGJ1xuICAgIEBlcSAoIM6paGxsdF8xMjggPSAtPiBjb2RlYy5lbmNvZGUgLTEyNyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDjiEnXG4gICAgQGVxICggzqlobGx0XzEyOSA9IC0+IGNvZGVjLmVuY29kZSAtODAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8OOUidcbiAgICBAZXEgKCDOqWhsbHRfMTMwID0gLT4gY29kZWMuZW5jb2RlIC0yMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw47CsSdcbiAgICBAZXEgKCDOqWhsbHRfMTMxID0gLT4gY29kZWMuZW5jb2RlIC0yMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw47CsSdcbiAgICBAZXEgKCDOqWhsbHRfMTMyID0gLT4gY29kZWMuZW5jb2RlIC0yMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw48nXG4gICAgQGVxICggzqlobGx0XzEzMyA9IC0+IGNvZGVjLmVuY29kZSAtMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8OiJ1xuICAgIEBlcSAoIM6paGxsdF8xMzQgPSAtPiBjb2RlYy5lbmNvZGUgKzAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDoydcbiAgICBAZXEgKCDOqWhsbHRfMTM1ID0gLT4gY29kZWMuZW5jb2RlICsxICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw6QnXG4gICAgQGVxICggzqlobGx0XzEzNiA9IC0+IGNvZGVjLmVuY29kZSArMjAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8O3J1xuICAgIEBlcSAoIM6paGxsdF8xMzcgPSAtPiBjb2RlYy5lbmNvZGUgKzIxICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDuDgnXG4gICAgQGVxICggzqlobGx0XzEzOCA9IC0+IGNvZGVjLmVuY29kZSArMTI3ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8O4w4YnXG4gICAgQGVxICggzqlobGx0XzEzOSA9IC0+IGNvZGVjLmVuY29kZSArMTI4ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8O5IyEnXG4gICAgQGVxICggzqlobGx0XzE0MCA9IC0+IGNvZGVjLmVuY29kZSArMTI5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8O5IyMnXG4gICAgQGVxICggzqlobGx0XzE0MSA9IC0+IGNvZGVjLmVuY29kZSArMTYzODIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8O5w4bDhSdcbiAgICBAZXEgKCDOqWhsbHRfMTQyID0gLT4gY29kZWMuZW5jb2RlICsxNjM4MyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw7nDhsOGJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqlobGx0XzE0MyA9IC0+IGNvZGVjLmRlY29kZSAnw40hIScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgLTE2MzgzIF1cbiAgICBAZXEgKCDOqWhsbHRfMTQ0ID0gLT4gY29kZWMuZGVjb2RlICfDjSEjJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAtMTYzODIgXVxuICAgIEBlcSAoIM6paGxsdF8xNDUgPSAtPiBjb2RlYy5kZWNvZGUgJ8ONw4XDhScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgLTEyOSBdXG4gICAgQGVxICggzqlobGx0XzE0NiA9IC0+IGNvZGVjLmRlY29kZSAnw43DhcOGJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAtMTI4IF1cbiAgICBAZXEgKCDOqWhsbHRfMTQ3ID0gLT4gY29kZWMuZGVjb2RlICfDjiEnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAtMTI3IF1cbiAgICBAZXEgKCDOqWhsbHRfMTQ4ID0gLT4gY29kZWMuZGVjb2RlICfDjsKxJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgLTIxIF1cbiAgICBAZXEgKCDOqWhsbHRfMTQ5ID0gLT4gY29kZWMuZGVjb2RlICfDjycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAtMjAgXVxuICAgIEBlcSAoIM6paGxsdF8xNTAgPSAtPiBjb2RlYy5kZWNvZGUgJ8OiJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIC0xIF1cbiAgICBAZXEgKCDOqWhsbHRfMTUxID0gLT4gY29kZWMuZGVjb2RlICfDoycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAwIF1cbiAgICBAZXEgKCDOqWhsbHRfMTUyID0gLT4gY29kZWMuZGVjb2RlICfDpCcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAxIF1cbiAgICBAZXEgKCDOqWhsbHRfMTUzID0gLT4gY29kZWMuZGVjb2RlICfDtycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAyMCBdXG4gICAgQGVxICggzqlobGx0XzE1NCA9IC0+IGNvZGVjLmRlY29kZSAnw7g4JyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgMjEgXVxuICAgIEBlcSAoIM6paGxsdF8xNTUgPSAtPiBjb2RlYy5kZWNvZGUgJ8O4w4YnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAxMjcgXVxuICAgIEBlcSAoIM6paGxsdF8xNTYgPSAtPiBjb2RlYy5kZWNvZGUgJ8O5IyEnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIDEyOCBdXG4gICAgQGVxICggzqlobGx0XzE1NyA9IC0+IGNvZGVjLmRlY29kZSAnw7kjIycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgMTI5IF1cbiAgICBAZXEgKCDOqWhsbHRfMTU4ID0gLT4gY29kZWMuZGVjb2RlICfDucOGw4UnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIDE2MzgyIF1cbiAgICBAZXEgKCDOqWhsbHRfMTU5ID0gLT4gY29kZWMuZGVjb2RlICfDucOGw4YnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIDE2MzgzIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGZvciBfIGluIFsgMSAuLiAxMCBdXG4gICAgICB1bnBhZGRlZF9saW5lcyA9IHNodWZmbGUgdW5wYWRkZWRfbGluZXNcbiAgICAgIHVucGFkZGVkX2xpbmVzLnNvcnQoKVxuICAgICAgcmVhbF9pbmRleGVzID0gW11cbiAgICAgIGZvciB1bGluZSBpbiB1bnBhZGRlZF9saW5lc1xuICAgICAgICAjIGhlbHAgJ86paGxsdF8xNjAnLCB1bGluZVxuICAgICAgICByZWFsX2luZGV4ZXMucHVzaCBOdW1iZXIgdWxpbmUucmVwbGFjZSAvXi4qP1xccyhbMC05XSspJC8sICckMSdcbiAgICAgIEBlcSAoIM6paGxsdF8xNjEgPSAtPiBlcXVhbHMgZXhwZWN0ZWRfaW5kZXhlcywgcmVhbF9pbmRleGVzICksIHRydWVcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGZvciBfIGluIFsgMSAuLiAxMCBdXG4gICAgICBwYWRkZWRfbGluZXMgPSBzaHVmZmxlIHBhZGRlZF9saW5lc1xuICAgICAgcGFkZGVkX2xpbmVzLnNvcnQoKVxuICAgICAgcmVhbF9pbmRleGVzID0gW11cbiAgICAgIGZvciBwbGluZSwgaWR4IGluIHBhZGRlZF9saW5lc1xuICAgICAgICAjIGhlbHAgJ86paGxsdF8xNjInLCBycHIgcGxpbmUgaWYgXyBpcyAxXG4gICAgICAgIHJlYWxfaW5kZXhlcy5wdXNoIE51bWJlciBwbGluZS5yZXBsYWNlIC9eLio/XFxzKFswLTldKykkLywgJyQxJ1xuICAgICAgQGVxICggzqlobGx0XzE2MyA9IC0+IGVxdWFscyBleHBlY3RlZF9pbmRleGVzLCByZWFsX2luZGV4ZXMgKSwgdHJ1ZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGgxMjhfZGVjb2RlOiAtPlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEyOCxcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwcm9iZXNfYW5kX21hdGNoZXJzID0gW1xuICMgICAgICAnw4chw4bDhsOGw4bDhsK/O8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoydcbiAgICAgIFsgJ8OHIcOGw4bDhsOGw4bCvzvDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC05OTksICAgICAgICAgXSwgJ25udW06w40swr87Wy05OTldfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw4chw4bDhsOGw4bDhsOGP8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTk5LCAgICAgICAgICBdLCAnbm51bTrDjiw/Wy05OV18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDhyHDhsOGw4bDhsOGw4ZIw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtOTAsICAgICAgICAgIF0sICdubnVtOsOOLEhbLTkwXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8OYw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTExLCAgICAgICAgICBdLCAnbnVuOsOYWy0xMV18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw5nDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtMTAsICAgICAgICAgIF0sICdudW46w5lbLTEwXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDmsOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC05LCAgICAgICAgICAgXSwgJ251bjrDmlstOV18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Obw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTgsICAgICAgICAgICBdLCAnbnVuOsObWy04XXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw5zDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtNywgICAgICAgICAgIF0sICdudW46w5xbLTddfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDncOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC02LCAgICAgICAgICAgXSwgJ251bjrDnVstNl18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Oew6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTUsICAgICAgICAgICBdLCAnbnVuOsOeWy01XXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw5/Do8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtNCwgICAgICAgICAgIF0sICdudW46w59bLTRdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDoMOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC0zLCAgICAgICAgICAgXSwgJ251bjrDoFstM118cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Ohw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTIsICAgICAgICAgICBdLCAnbnVuOsOhWy0yXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw6LDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtMSwgICAgICAgICAgIF0sICdudW46w6JbLTFdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDo8OPw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIDAsIC0yMCwgICAgICAgXSwgJ3plcm86w6NbMF18bnVuOsOPWy0yMF18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgIF1cbiAgICAgIFsgJ8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMCwgICAgICAgICAgICBdLCAncGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6PDo1swXScsICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw6PDt8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAwLCAyMCwgICAgICAgIF0sICd6ZXJvOsOjWzBdfHB1bjrDt1syMF18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICBdXG4gICAgICBbICfDrMOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIDksICAgICAgICAgICAgXSwgJ3B1bjrDrFs5XXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Otw6DDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMTAsIC0zLCAgICAgICBdLCAncHVuOsOtWzEwXXxudW46w6BbLTNdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgXVxuICAgICAgWyAnw63DocOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAxMCwgLTIsICAgICAgIF0sICdwdW46w61bMTBdfG51bjrDoVstMl18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICBdXG4gICAgICBbICfDrcOiw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIDEwLCAtMSwgICAgICAgXSwgJ3B1bjrDrVsxMF18bnVuOsOiWy0xXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Otw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMTAsICAgICAgICAgICBdLCAncHVuOsOtWzEwXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw63DpMOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAxMCwgMSwgICAgICAgIF0sICdwdW46w61bMTBdfHB1bjrDpFsxXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICBdXG4gICAgICBbICfDrcOtw6LDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIDEwLCAxMCwgLTEsICAgXSwgJ3B1bjrDrVsxMF18cHVuOsOtWzEwXXxudW46w6JbLTFdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6MnLCAgIF1cbiAgICAgIFsgJ8Otw63Do8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMTAsIDEwLCAgICAgICBdLCAncHVuOsOtWzEwXXxwdW46w61bMTBdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgXVxuICAgICAgWyAnw63Dt8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAxMCwgMjAsICAgICAgIF0sICdwdW46w61bMTBdfHB1bjrDt1syMF18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICBdXG4gICAgICBbICfDt8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIDIwLCAgICAgICAgICAgXSwgJ3B1bjrDt1syMF18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8O3w63Do8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMjAsIDEwLCAgICAgICBdLCAncHVuOsO3WzIwXXxwdW46w61bMTBdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgXVxuICAgICAgWyAnw7h+w6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIDkwLCAgICAgICAgICAgXSwgJ3BudW06w7gsfls5MF18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw7kqJsOjw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgOTAwLCAgICAgICAgICBdLCAncG51bTrDuSwqJls5MDBdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgIF1cbiAgICAgIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNvZGVjID0gaG9sbGVyaXRoXzEyOFxuICAgIGZvciBbIHNvcnRrZXksIGluZGV4X21hdGNoZXIsIHVuaXRfbWF0Y2hlciwgXSBpbiBwcm9iZXNfYW5kX21hdGNoZXJzXG4gICAgICB1bml0X3Jlc3VsdCAgICAgPSBbXVxuICAgICAgaW5kZXhfcmVzdWx0ICAgID0gW11cbiAgICAgIGZvciB1bml0IGluIGNvZGVjLnBhcnNlIHNvcnRrZXlcbiAgICAgICAgdW5pdF9yZXN1bHQucHVzaCAgaGVscGVycy5ycHJfdW5pdCB1bml0XG4gICAgICAgIGluZGV4X3Jlc3VsdC5wdXNoIHVuaXQuaW5kZXggaWYgdW5pdC5pbmRleD9cbiAgICAgIHVuaXRfcmVzdWx0ICAgPSB1bml0X3Jlc3VsdC5qb2luICd8J1xuICAgICAgIyBpbmZvICfOqWhsbHRfMTY0JywgZlwiI3soIHJwciB1bml0X3Jlc3VsdCApICsgJywnfTo8NjBjOyAje3JwciBpbmRleF9yZXN1bHR9XCJcbiAgICAjICAgQGVxICggzqlobGx0XzE2NSA9IC0+ICB1bml0X3Jlc3VsdCAgICAgICAgICAgICAgICAgICAgICksICB1bml0X21hdGNoZXJcbiAgICAgIEBlcSAoIM6paGxsdF8xNjYgPSAtPiBpbmRleF9yZXN1bHQgICAgICAgICAgICAgICAgICAgICApLCBpbmRleF9tYXRjaGVyXG4gICAgICBAZXEgKCDOqWhsbHRfMTY3ID0gLT4gc29ydGtleSApLCBjb2RlYy5lbmNvZGUgaW5kZXhfbWF0Y2hlclxuICAgICAgIyBkZWJ1ZyAnzqlobGx0XzE2OCcsIHJwciAoIGNvZGVjLmVuY29kZSBpbmRleF9tYXRjaGVyICkucGFkRW5kIHNvcnRrZXkubGVuZ3RoLCBjb2RlYy5jZmcuX3pwdW5zWyAwIF1cbiAgICAgIEBlcSAoIM6paGxsdF8xNjkgPSAtPiBjb2RlYy5kZWNvZGUgc29ydGtleSAgKSwgaW5kZXhfbWF0Y2hlclxuICAgICAgIyBlY2hvIFsgc29ydGtleSwgaW5kZXhfcmVzdWx0LCB1bml0X3Jlc3VsdCwgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBAZXEgICAgICggzqlobGx0XzE3MCA9IC0+IGNvZGVjLnBhcnNlICc1JyAgICAgICAgICApLCBbIHsgbmFtZTogJ290aGVyJywgbGV0dGVyczogJzUnLCBtYW50aXNzYTogbnVsbCwgaW5kZXg6IG51bGwgfSBdXG4gICAgIyBAZXEgICAgICggzqlobGx0XzE3MSA9IC0+IGNvZGVjLnBhcnNlICfDpMO2w7wnICAgICAgICApLCBbIHsgbmFtZTogJ290aGVyJywgbGV0dGVyczogJ8Okw7bDvCcsIG1hbnRpc3NhOiBudWxsLCBpbmRleDogbnVsbCB9IF1cbiAgICAjIEBlcSAgICAgKCDOqWhsbHRfMTcyID0gLT4gY29kZWMucGFyc2UgJ1k5MDDDpMO2w7wnICAgICksIFsgeyBuYW1lOiAncG51bScsIGxldHRlcnM6ICdZJywgbWFudGlzc2E6ICc5MDAnLCBpbmRleDogOTAwIH0sIHsgbmFtZTogJ290aGVyJywgbGV0dGVyczogJ8Okw7bDvCcsIG1hbnRpc3NhOiBudWxsLCBpbmRleDogbnVsbCB9IF1cbiAgICAjIEB0aHJvd3MgKCDOqWhsbHRfMTczID0gLT4gY29kZWMuZGVjb2RlICc1JyAgICAgICAgICksIC9ub3QgYSB2YWxpZCBzb3J0a2V5OiB1bmFibGUgdG8gcGFyc2UgJzUnL1xuICAgICMgQHRocm93cyAoIM6paGxsdF8xNzQgPSAtPiBjb2RlYy5kZWNvZGUgJ8Okw7bDvCcgICAgICAgKSwgL25vdCBhIHZhbGlkIHNvcnRrZXk6IHVuYWJsZSB0byBwYXJzZSAnw6TDtsO8Jy9cbiAgICAjIEB0aHJvd3MgKCDOqWhsbHRfMTc1ID0gLT4gY29kZWMuZGVjb2RlICfDpMO2w7wnICAgICAgICksIC9ub3QgYSB2YWxpZCBzb3J0a2V5OiB1bmFibGUgdG8gcGFyc2UgJ8O8JyBpbiAnWTkwMMOkw7bDvCcvXG4gICAgIyBAdGhyb3dzICggzqlobGx0XzE3NiA9IC0+IGNvZGVjLmRlY29kZSAnWTkwMMOkw7bDvCcgICApLCAvbm90IGEgdmFsaWQgc29ydGtleTogdW5hYmxlIHRvIHBhcnNlICdZOTAwJyBpbiAnWTkwMMOkw7bDvCcvXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIGRlYnVnICfOqWhsbHRfMTc3JywgcnByIGNvZGVjLmVuY29kZSAtOTAgIyAgICBbICfDjcK/O8Ojw6PDo8Ojw6PDo8OjJywgWyAtOTk5LCAgICAgICAgIF0sICdubnVtOsONLMK/O1stOTk5XXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgIF1cbiAgICAjIGRlYnVnICfOqWhsbHRfMTc4JywgcnByIGNvZGVjLmRlY29kZSAnw4chw4bDhsOGw4bDhsOGSCcgIyAgICBbICfDjcK/O8Ojw6PDo8Ojw6PDo8OjJywgWyAtOTk5LCAgICAgICAgIF0sICdubnVtOsONLMK/O1stOTk5XXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgIF1cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaDEwbXZwMl9kZWNvZGVfdW5pdHM6IC0+XG4gICAgIyMjIE5PVEUgYWxzbyBzZWUgY29ycmVzcG9uZGluZyB0ZXN0IGluIGBoZW5naXN0LU5HL2Rldi9pbnRlcmxleC9zcmMvdGVzdC1ob2xsZXJpdGguY29mZmVlYCAjIyNcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEwbXZwMixcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICAjIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHByb2Jlc19hbmRfbWF0Y2hlcnMgPSBbXG4gICAgICBbICdBMDAwTk5OTk5OTk4nLCBbIC05OTkgICAgICAgIF0sICdubnVtOkEsMDAwWy05OTldfHBhZGRpbmc6Tk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0IwME5OTk5OTk5OTicsIFsgLTk5ICAgICAgICAgXSwgJ25udW06QiwwMFstOTldfHBhZGRpbmc6Tk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnQjA5Tk5OTk5OTk5OJywgWyAtOTAgICAgICAgICBdLCAnbm51bTpCLDA5Wy05MF18cGFkZGluZzpOTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdCODhOTk5OTk5OTk4nLCBbIC0xMSAgICAgICAgIF0sICdubnVtOkIsODhbLTExXXxwYWRkaW5nOk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0I4OU5OTk5OTk5OTicsIFsgLTEwICAgICAgICAgXSwgJ25udW06Qiw4OVstMTBdfHBhZGRpbmc6Tk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnRU5OTk5OTk5OTk5OJywgWyAtOSAgICAgICAgICBdLCAnbnVuOkVbLTldfHBhZGRpbmc6Tk5OTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdGTk5OTk5OTk5OTk4nLCBbIC04ICAgICAgICAgIF0sICdudW46RlstOF18cGFkZGluZzpOTk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0dOTk5OTk5OTk5OTicsIFsgLTcgICAgICAgICAgXSwgJ251bjpHWy03XXxwYWRkaW5nOk5OTk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnSE5OTk5OTk5OTk5OJywgWyAtNiAgICAgICAgICBdLCAnbnVuOkhbLTZdfHBhZGRpbmc6Tk5OTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdJTk5OTk5OTk5OTk4nLCBbIC01ICAgICAgICAgIF0sICdudW46SVstNV18cGFkZGluZzpOTk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0pOTk5OTk5OTk5OTicsIFsgLTQgICAgICAgICAgXSwgJ251bjpKWy00XXxwYWRkaW5nOk5OTk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnS05OTk5OTk5OTk5OJywgWyAtMyAgICAgICAgICBdLCAnbnVuOktbLTNdfHBhZGRpbmc6Tk5OTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdMTk5OTk5OTk5OTk4nLCBbIC0yICAgICAgICAgIF0sICdudW46TFstMl18cGFkZGluZzpOTk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ01OTk5OTk5OTk5OTicsIFsgLTEgICAgICAgICAgXSwgJ251bjpNWy0xXXxwYWRkaW5nOk5OTk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnTkI3OU5OTk5OTk5OJywgWyAwLCAtMjAgICAgICBdLCAnemVybzpOWzBdfG5udW06Qiw3OVstMjBdfHBhZGRpbmc6Tk5OTk5OTk4nLCAgICAgICAgICAgICBdXG4gICAgICBbICdOTk5OTk5OTk5OTk4nLCBbIDAgICAgICAgICAgIF0sICdwYWRkaW5nOk5OTk5OTk5OTk5OTlswXScsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ05ZMjBOTk5OTk5OTicsIFsgMCwgMjAgICAgICAgXSwgJ3plcm86TlswXXxwbnVtOlksMjBbMjBdfHBhZGRpbmc6Tk5OTk5OTk4nLCAgICAgICAgICAgICAgXVxuICAgICAgWyAnV05OTk5OTk5OTk5OJywgWyA5ICAgICAgICAgICBdLCAncHVuOldbOV18cGFkZGluZzpOTk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdZMTBLTk5OTk5OTk4nLCBbIDEwLCAtMyAgICAgIF0sICdwbnVtOlksMTBbMTBdfG51bjpLWy0zXXxwYWRkaW5nOk5OTk5OTk5OJywgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ1kxMExOTk5OTk5OTicsIFsgMTAsIC0yICAgICAgXSwgJ3BudW06WSwxMFsxMF18bnVuOkxbLTJdfHBhZGRpbmc6Tk5OTk5OTk4nLCAgICAgICAgICAgICAgXVxuICAgICAgWyAnWTEwTU5OTk5OTk5OJywgWyAxMCwgLTEgICAgICBdLCAncG51bTpZLDEwWzEwXXxudW46TVstMV18cGFkZGluZzpOTk5OTk5OTicsICAgICAgICAgICAgICBdXG4gICAgICBbICdZMTBOTk5OTk5OTk4nLCBbIDEwICAgICAgICAgIF0sICdwbnVtOlksMTBbMTBdfHBhZGRpbmc6Tk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ1kxME9OTk5OTk5OTicsIFsgMTAsIDEgICAgICAgXSwgJ3BudW06WSwxMFsxMF18cHVuOk9bMV18cGFkZGluZzpOTk5OTk5OTicsICAgICAgICAgICAgICAgXVxuICAgICAgWyAnWTEwWTEwTU5OTk5OJywgWyAxMCwgMTAsIC0xICBdLCAncG51bTpZLDEwWzEwXXxwbnVtOlksMTBbMTBdfG51bjpNWy0xXXxwYWRkaW5nOk5OTk5OJywgICBdXG4gICAgICBbICdZMTBZMTBOTk5OTk4nLCBbIDEwLCAxMCAgICAgIF0sICdwbnVtOlksMTBbMTBdfHBudW06WSwxMFsxMF18cGFkZGluZzpOTk5OTk4nLCAgICAgICAgICAgIF1cbiAgICAgIFsgJ1kxMFkyME5OTk5OTicsIFsgMTAsIDIwICAgICAgXSwgJ3BudW06WSwxMFsxMF18cG51bTpZLDIwWzIwXXxwYWRkaW5nOk5OTk5OTicsICAgICAgICAgICAgXVxuICAgICAgWyAnWTIwTk5OTk5OTk5OJywgWyAyMCAgICAgICAgICBdLCAncG51bTpZLDIwWzIwXXxwYWRkaW5nOk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdZMjBZMTBOTk5OTk4nLCBbIDIwLCAxMCAgICAgIF0sICdwbnVtOlksMjBbMjBdfHBudW06WSwxMFsxMF18cGFkZGluZzpOTk5OTk4nLCAgICAgICAgICAgIF1cbiAgICAgIFsgJ1k5ME5OTk5OTk5OTicsIFsgOTAgICAgICAgICAgXSwgJ3BudW06WSw5MFs5MF18cGFkZGluZzpOTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnWjkwME5OTk5OTk5OJywgWyA5MDAgICAgICAgICBdLCAncG51bTpaLDkwMFs5MDBdfHBhZGRpbmc6Tk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdOTk5OTk5OTk5OTk4nLCBbIDAgICAgICAgICAgIF0sICdwYWRkaW5nOk5OTk5OTk5OTk5OTlswXScsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ05OTk5OTk5OTk5OTicsIFsgMCAgICAgICAgICAgXSwgJ3BhZGRpbmc6Tk5OTk5OTk5OTk5OWzBdJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnTk5OTk5OTk5OTk5OJywgWyAwICAgICAgICAgICBdLCAncGFkZGluZzpOTk5OTk5OTk5OTk5bMF0nLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdZMTBOTk5OTk5OTk4nLCBbIDEwICAgICAgICAgIF0sICdwbnVtOlksMTBbMTBdfHBhZGRpbmc6Tk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0tOTk5OTk5OTk5OTicsIFsgLTMgICAgICAgICAgXSwgJ251bjpLWy0zXXxwYWRkaW5nOk5OTk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgIyAnS05OTk5OTk5OTk5OJ1xuICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY29kZWMgICAgICAgICAgID0gaG9sbGVyaXRoXzEwbXZwMlxuICAgIHNvcnRrZXlfcGFkZGVyICA9IGNvZGVjLmNmZy5fenB1bnNfbGlzdFsgMCBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmb3IgWyBzb3J0a2V5LCBpbmRleF9tYXRjaGVyLCB1bml0X21hdGNoZXIsIF0gaW4gcHJvYmVzX2FuZF9tYXRjaGVyc1xuICAgICAgdW5pdF9yZXN1bHQgICAgID0gW11cbiAgICAgIGluZGV4X3Jlc3VsdCAgICA9IFtdXG4gICAgICBmb3IgdW5pdCBpbiBjb2RlYy5wYXJzZSBzb3J0a2V5XG4gICAgICAgIHVuaXRfcmVzdWx0LnB1c2ggIGhlbHBlcnMucnByX3VuaXQgdW5pdFxuICAgICAgICBpbmRleF9yZXN1bHQucHVzaCB1bml0LmluZGV4IGlmIHVuaXQuaW5kZXg/XG4gICAgICB1bml0X3Jlc3VsdCAgID0gdW5pdF9yZXN1bHQuam9pbiAnfCdcbiAgICAgICMgaW5mbyAnzqlobGx0XzE3OScsIGZcIiN7KCBycHIgdW5pdF9yZXN1bHQgKSArICcsJ306PDYwYzsgI3tycHIgaW5kZXhfcmVzdWx0fVwiXG4gICAgICBAZXEgKCDOqWhsbHRfMTgwID0gLT4gdW5pdF9yZXN1bHQgICAgICAgICAgICAgICAgICAgICAgKSwgdW5pdF9tYXRjaGVyXG4gICAgICBAZXEgKCDOqWhsbHRfMTgxID0gLT4gaW5kZXhfcmVzdWx0ICAgICAgICAgICAgICAgICAgICAgKSwgaW5kZXhfbWF0Y2hlclxuICAgICAgQGVxICggzqlobGx0XzE4MiA9IC0+IGNvZGVjLmRlY29kZSBzb3J0a2V5ICAgICAgICAgICAgICksIGluZGV4X21hdGNoZXJcbiAgICAgIEBlcSAoIM6paGxsdF8xODMgPSAtPiBzb3J0a2V5ICAgICAgICAgICAgICAgICAgICAgICAgICApLCBjb2RlYy5lbmNvZGUgaW5kZXhfbWF0Y2hlclxuICAgICAgIyBlY2hvIFsgc29ydGtleSwgaW5kZXhfcmVzdWx0LCB1bml0X3Jlc3VsdCwgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICAgICAoIM6paGxsdF8xODQgPSAtPiBjb2RlYy5wYXJzZSAnNScgICAgICAgICApLCBbIHsgbmFtZTogJ290aGVyJywgbGV0dGVyczogJzUnLCBtYW50aXNzYTogbnVsbCwgaW5kZXg6IG51bGwgfSBdXG4gICAgQGVxICAgICAoIM6paGxsdF8xODUgPSAtPiBjb2RlYy5wYXJzZSAnw6TDtsO8JyAgICAgICApLCBbIHsgbmFtZTogJ290aGVyJywgbGV0dGVyczogJ8Okw7bDvCcsIG1hbnRpc3NhOiBudWxsLCBpbmRleDogbnVsbCB9IF1cbiAgICBAZXEgICAgICggzqlobGx0XzE4NiA9IC0+IGNvZGVjLnBhcnNlICdZOTAww6TDtsO8JyAgICksIFsgeyBuYW1lOiAncG51bScsIGxldHRlcnM6ICdZJywgbWFudGlzc2E6ICc5MDAnLCBpbmRleDogOTAwIH0sIHsgbmFtZTogJ290aGVyJywgbGV0dGVyczogJ8Okw7bDvCcsIG1hbnRpc3NhOiBudWxsLCBpbmRleDogbnVsbCB9IF1cbiAgICBAdGhyb3dzICggzqlobGx0XzE4NyA9IC0+IGNvZGVjLmRlY29kZSAnNScgICAgICAgICksIC9ub3QgYSB2YWxpZCBzb3J0a2V5OiB1bmFibGUgdG8gcGFyc2UgJzUnL1xuICAgIEB0aHJvd3MgKCDOqWhsbHRfMTg4ID0gLT4gY29kZWMuZGVjb2RlICfDpMO2w7wnICAgICAgKSwgL25vdCBhIHZhbGlkIHNvcnRrZXk6IHVuYWJsZSB0byBwYXJzZSAnw6TDtsO8Jy9cbiAgICBAdGhyb3dzICggzqlobGx0XzE4OSA9IC0+IGNvZGVjLmRlY29kZSAnWTkwMMOkw7bDvCcgICksIC9ub3QgYSB2YWxpZCBzb3J0a2V5OiB1bmFibGUgdG8gcGFyc2UgJ8Okw7bDvCcgaW4gJ1k5MDDDpMO2w7wnL1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyBoMTI4Yl9kZWNvZGU6IC0+XG4gICMgICB7IEhvbGxlcml0aCxcbiAgIyAgICAgaG9sbGVyaXRoXzEyOCxcbiAgIyAgICAgaG9sbGVyaXRoXzEwbXZwLFxuICAjICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICMgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgIyAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICAjIGNvZGVjID0gaG9sbGVyaXRoXzEyOFxuICAjICAgY29kZWMgPSBob2xsZXJpdGhfMTBtdnBcbiAgIyAgIGRlYnVnICfOqWhsbHRfMTkwJywgcnByIGNvZGVjLmVuY29kZSAtMVxuICAjICAgZGVidWcgJ86paGxsdF8xOTEnLCBycHIgY29kZWMuZW5jb2RlIC0yXG4gICMgICBuID0gICAtMTAwOyB1cmdlICfOqWhsbHRfMTkyJywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAjICAgbiA9ICAgIC0yMTsgdXJnZSAnzqlobGx0XzE5MycsIGZcIiN7IHJwciBbIG4sIF0gfTo+MTBjOyAje3JwciBzayA9IGNvZGVjLmVuY29kZSBufTo8NWM7ICN7IHJwciBjb2RlYy5kZWNvZGUgc2t9Oj4xMGM7XCJcbiAgIyAgIG4gPSAgICAtMjA7IHVyZ2UgJ86paGxsdF8xOTQnLCBmXCIjeyBycHIgWyBuLCBdIH06PjEwYzsgI3tycHIgc2sgPSBjb2RlYy5lbmNvZGUgbn06PDVjOyAjeyBycHIgY29kZWMuZGVjb2RlIHNrfTo+MTBjO1wiXG4gICMgICBuID0gICAgLTE5OyB1cmdlICfOqWhsbHRfMTk1JywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAjICAgbiA9ICAgICAtMTsgdXJnZSAnzqlobGx0XzE5NicsIGZcIiN7IHJwciBbIG4sIF0gfTo+MTBjOyAje3JwciBzayA9IGNvZGVjLmVuY29kZSBufTo8NWM7ICN7IHJwciBjb2RlYy5kZWNvZGUgc2t9Oj4xMGM7XCJcbiAgIyAgIG4gPSAgICAgIDA7IHVyZ2UgJ86paGxsdF8xOTcnLCBmXCIjeyBycHIgWyBuLCBdIH06PjEwYzsgI3tycHIgc2sgPSBjb2RlYy5lbmNvZGUgbn06PDVjOyAjeyBycHIgY29kZWMuZGVjb2RlIHNrfTo+MTBjO1wiXG4gICMgICBuID0gICAgICAxOyB1cmdlICfOqWhsbHRfMTk4JywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAjICAgbiA9ICAgICAgMjsgdXJnZSAnzqlobGx0XzE5OScsIGZcIiN7IHJwciBbIG4sIF0gfTo+MTBjOyAje3JwciBzayA9IGNvZGVjLmVuY29kZSBufTo8NWM7ICN7IHJwciBjb2RlYy5kZWNvZGUgc2t9Oj4xMGM7XCJcbiAgIyAgIG4gPSAgICAgIDM7IHVyZ2UgJ86paGxsdF8yMDAnLCBmXCIjeyBycHIgWyBuLCBdIH06PjEwYzsgI3tycHIgc2sgPSBjb2RlYy5lbmNvZGUgbn06PDVjOyAjeyBycHIgY29kZWMuZGVjb2RlIHNrfTo+MTBjO1wiXG4gICMgICBuID0gICAgIDEwOyB1cmdlICfOqWhsbHRfMjAxJywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAjICAgbiA9ICAgIDEyNjsgdXJnZSAnzqlobGx0XzIwMicsIGZcIiN7IHJwciBbIG4sIF0gfTo+MTBjOyAje3JwciBzayA9IGNvZGVjLmVuY29kZSBufTo8NWM7ICN7IHJwciBjb2RlYy5kZWNvZGUgc2t9Oj4xMGM7XCJcbiAgIyAgIG4gPSAgICAxMjc7IHVyZ2UgJ86paGxsdF8yMDMnLCBmXCIjeyBycHIgWyBuLCBdIH06PjEwYzsgI3tycHIgc2sgPSBjb2RlYy5lbmNvZGUgbn06PDVjOyAjeyBycHIgY29kZWMuZGVjb2RlIHNrfTo+MTBjO1wiXG4gICMgICBuID0gICAgMTI4OyB1cmdlICfOqWhsbHRfMjA0JywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAjICAgbiA9ICAgIDEyOTsgdXJnZSAnzqlobGx0XzIwNScsIGZcIiN7IHJwciBbIG4sIF0gfTo+MTBjOyAje3JwciBzayA9IGNvZGVjLmVuY29kZSBufTo8NWM7ICN7IHJwciBjb2RlYy5kZWNvZGUgc2t9Oj4xMGM7XCJcbiAgIyAgICMgZm9yIFsgc29ydGtleSwgaW5kZXhfbWF0Y2hlciwgdW5pdF9tYXRjaGVyLCBdIGluIHByb2Jlc19hbmRfbWF0Y2hlcnNcbiAgIyAgICMgICB1bml0X3Jlc3VsdCAgICAgPSBbXVxuICAjICAgIyAgIGluZGV4X3Jlc3VsdCAgICA9IFtdXG4gICMgICAjICAgZm9yIHVuaXQgaW4gY29kZWMucGFyc2Ugc29ydGtleVxuICAjICAgIyAgICAgdW5pdF9yZXN1bHQucHVzaCAgaGVscGVycy5ycHJfdW5pdCB1bml0XG4gICMgICAjICAgICBpbmRleF9yZXN1bHQucHVzaCB1bml0LmluZGV4IGlmIHVuaXQuaW5kZXg/XG4gICMgICAjICAgdW5pdF9yZXN1bHQgICA9IHVuaXRfcmVzdWx0LmpvaW4gJ3wnXG4gICMgICAjICAgaW5mbyAnzqlobGx0XzIwNicsIGZcIiN7KCBycHIgdW5pdF9yZXN1bHQgKSArICcsJ306PDYwYzsgI3tycHIgaW5kZXhfcmVzdWx0fVwiXG4gICMgICAjICMgICBAZXEgKCDOqWhsbHRfMjA3ID0gLT4gIHVuaXRfcmVzdWx0ICAgICAgICAgICAgICAgICAgICAgKSwgIHVuaXRfbWF0Y2hlclxuICAjICAgIyAgIEBlcSAoIM6paGxsdF8yMDggPSAtPiBpbmRleF9yZXN1bHQgICAgICAgICAgICAgICAgICAgICApLCBpbmRleF9tYXRjaGVyXG4gICMgICAjICAgQGVxICggzqlobGx0XzIwOSA9IC0+IHNvcnRrZXkgKSwgKCBjb2RlYy5lbmNvZGUgaW5kZXhfbWF0Y2hlciApLnBhZEVuZCBzb3J0a2V5Lmxlbmd0aCwgY29kZWMuY2ZnLl96cHVuc1sgMCBdXG4gICMgICAjICAgZGVidWcgJ86paGxsdF8yMTAnLCBycHIgKCBjb2RlYy5lbmNvZGUgaW5kZXhfbWF0Y2hlciApLnBhZEVuZCBzb3J0a2V5Lmxlbmd0aCwgY29kZWMuY2ZnLl96cHVuc1sgMCBdXG4gICMgICAjICAgQGVxICggzqlobGx0XzIxMSA9IC0+IGNvZGVjLmRlY29kZSBzb3J0a2V5ICApLCBpbmRleF9tYXRjaGVyXG4gICMgICAjICAgIyBlY2hvIFsgc29ydGtleSwgaW5kZXhfcmVzdWx0LCB1bml0X3Jlc3VsdCwgXVxuICAjICAgIyAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAjICAgIyBAZXEgICAgICggzqlobGx0XzIxMiA9IC0+IGNvZGVjLnBhcnNlICc1JyAgICAgICAgICksIFsgeyBuYW1lOiAnb3RoZXInLCBsZXR0ZXJzOiAnNScsIG1hbnRpc3NhOiBudWxsLCBpbmRleDogbnVsbCB9IF1cbiAgIyAgICMgQGVxICAgICAoIM6paGxsdF8yMTMgPSAtPiBjb2RlYy5wYXJzZSAnw6TDtsO8JyAgICAgICApLCBbIHsgbmFtZTogJ290aGVyJywgbGV0dGVyczogJ8Okw7bDvCcsIG1hbnRpc3NhOiBudWxsLCBpbmRleDogbnVsbCB9IF1cbiAgIyAgICMgQGVxICAgICAoIM6paGxsdF8yMTQgPSAtPiBjb2RlYy5wYXJzZSAnWTkwMMOkw7bDvCcgICApLCBbIHsgbmFtZTogJ3BudW0nLCBsZXR0ZXJzOiAnWScsIG1hbnRpc3NhOiAnOTAwJywgaW5kZXg6IDkwMCB9LCB7IG5hbWU6ICdvdGhlcicsIGxldHRlcnM6ICfDpMO2w7wnLCBtYW50aXNzYTogbnVsbCwgaW5kZXg6IG51bGwgfSBdXG4gICMgICAjIEB0aHJvd3MgKCDOqWhsbHRfMjE1ID0gLT4gY29kZWMuZGVjb2RlICc1JyAgICAgICAgKSwgL25vdCBhIHZhbGlkIHNvcnRrZXk6IHVuYWJsZSB0byBwYXJzZSAnNScvXG4gICMgICAjIEB0aHJvd3MgKCDOqWhsbHRfMjE2ID0gLT4gY29kZWMuZGVjb2RlICfDpMO2w7wnICAgICAgKSwgL25vdCBhIHZhbGlkIHNvcnRrZXk6IHVuYWJsZSB0byBwYXJzZSAnw6TDtsO8Jy9cbiAgIyAgICMgQHRocm93cyAoIM6paGxsdF8yMTcgPSAtPiBjb2RlYy5kZWNvZGUgJ1k5MDDDpMO2w7wnICApLCAvbm90IGEgdmFsaWQgc29ydGtleTogdW5hYmxlIHRvIHBhcnNlICfDpMO2w7wnIGluICdZOTAww6TDtsO8Jy9cbiAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICByZXR1cm4gbnVsbFxuXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB0eXBlczogLT5cbiAgICB7IGludGVybmFscyxcbiAgICAgIEhvbGxlcml0aF90eXBlc3BhY2UsXG4gICAgICBDRkcsICAgICAgICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoL2xpYi90eXBlcydcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCAgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICB7IHBpY2ssICAgICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfcGljaygpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgVCA9IG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlKClcbiAgICAgIEBlcSAoIM6paGxsdF8yMTggPSAtPiBUW0NGR10uYmxhbmsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ1xceDIwJ1xuICAgICAgQGVxICggzqlobGx0XzIxOSA9IC0+IFRbQ0ZHXS5ibGFua19zcGxpdHRlciAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvKD86XFx4MjApKy9ndlxuICAgICAgQGVxICggzqlobGx0XzIyMCA9IC0+IFRbQ0ZHXS5ibGFua19zcGxpdHRlci51bmljb2RlU2V0cyAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWhsbHRfMjIxID0gLT4gVFtDRkddLmJsYW5rX3NwbGl0dGVyLmdsb2JhbCAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paGxsdF8yMjIgPSAtPiAnYSAgIGcgIHogICcucmVwbGFjZSBUW0NGR10uYmxhbmtfc3BsaXR0ZXIsICfDvCcgICksICdhw7xnw7x6w7wnXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIFQgPSBuZXcgSG9sbGVyaXRoX3R5cGVzcGFjZSB7IGJsYW5rOiAnIycsIH1cbiAgICAgIEBlcSAoIM6paGxsdF8yMjMgPSAtPiBUW0NGR10uYmxhbmsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyMnXG4gICAgICBAZXEgKCDOqWhsbHRfMjI0ID0gLT4gVFtDRkddLmJsYW5rX3NwbGl0dGVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC8oPzpcXHgyMykrL2d2XG4gICAgICBAZXEgKCDOqWhsbHRfMjI1ID0gLT4gVFtDRkddLmJsYW5rX3NwbGl0dGVyLnVuaWNvZGVTZXRzICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paGxsdF8yMjYgPSAtPiBUW0NGR10uYmxhbmtfc3BsaXR0ZXIuZ2xvYmFsICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlobGx0XzIyNyA9IC0+ICdhIyMjZyMjeiMjJy5yZXBsYWNlIFRbQ0ZHXS5ibGFua19zcGxpdHRlciwgJ8O8JyAgKSwgJ2HDvGfDvHrDvCdcbiAgICAgIEBlcSAoIM6paGxsdF8yMjggPSAtPiBULm1hZ25pZmllcnMuaXNhICdBQkMgWFlaJyAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paGxsdF8yMjkgPSAtPiBULm1hZ25pZmllcnMuaXNhICdBQkMjWFlaJyAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlobGx0XzIzMCA9IC0+IFQuYmxhbmsuaXNhICcgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlobGx0XzIzMSA9IC0+IFQuYmxhbmsuaXNhICcjJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWhsbHRfMjMyID0gLT4gVC5ibGFuay5pc2EgVFtDRkddLmJsYW5rICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBUID0gbmV3IEhvbGxlcml0aF90eXBlc3BhY2UoKVxuICAgIEBlcSAoIM6paGxsdF8yMzMgPSAtPiBULm5vbmVtcHR5X3RleHQuaXNhIDQgICAgICAgICAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6paGxsdF8yMzQgPSAtPiBULm5vbmVtcHR5X3RleHQuaXNhIGZhbHNlICAgICAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6paGxsdF8yMzUgPSAtPiBULm5vbmVtcHR5X3RleHQuaXNhICcnICAgICAgICAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6paGxsdF8yMzYgPSAtPiBULm5vbmVtcHR5X3RleHQuaXNhICd5ZXMnICAgICAgICApLCB0cnVlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgKCDOqWhsbHRfMjM3ID0gLT4gVC5pbmNyZW1lbnRhbF90ZXh0LmlzYSAneWVzJyAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjM4ID0gLT4gVC5kZWNyZW1lbnRhbF90ZXh0LmlzYSAneWVzJyAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjM5ID0gLT4gVC5pbmNyZW1lbnRhbF90ZXh0LmRhdGEgICAgICAgICAgKSwgeyBjaHJzOiBbICd5JywgJ2UnLCAncycgXSwgZmFpbDogeyB4OiAneWVzJywgaWR4OiAxLCBwcnZfY2hyOiAneScsIGNocjogJ2UnIH0gfVxuICAgIEBlcSAoIM6paGxsdF8yNDAgPSAtPiBULmluY3JlbWVudGFsX3RleHQuaXNhICdhYmNkZWZ6JyApLCB0cnVlXG4gICAgQGVxICggzqlobGx0XzI0MSA9IC0+IFQuZGVjcmVtZW50YWxfdGV4dC5pc2EgJ2FiY2RlZnonICksIGZhbHNlXG4gICAgQGVxICggzqlobGx0XzI0MiA9IC0+IFQuaW5jcmVtZW50YWxfdGV4dC5kYXRhICAgICAgICAgICksIHsgY2hyczogWyAnYScsICdiJywgJ2MnLCAnZCcsICdlJywgJ2YnLCAneicsIF0sIH1cbiAgICBAZXEgKCDOqWhsbHRfMjQzID0gLT4gVC5kZWNyZW1lbnRhbF90ZXh0LmRhdGEgICAgICAgICAgKSwgeyBjaHJzOiBbICdhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZicsICd6JyBdLCBmYWlsOiB7IHg6ICdhYmNkZWZ6JywgaWR4OiAxLCBwcnZfY2hyOiAnYScsIGNocjogJ2InIH0gfVxuICAgIEBlcSAoIM6paGxsdF8yNDQgPSAtPiBULmluY3JlbWVudGFsX3RleHQuaXNhICdhYmMwJyAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6paGxsdF8yNDUgPSAtPiBULmluY3JlbWVudGFsX3RleHQuZGF0YSAgICAgICAgICApLCB7IGNocnM6IFsgJ2EnLCAnYicsICdjJywgJzAnLCBdLCBmYWlsOiB7IHg6ICdhYmMwJywgaWR4OiAzLCBwcnZfY2hyOiAnYycsIGNocjogJzAnIH0gfVxuICAgIEBlcSAoIM6paGxsdF8yNDYgPSAtPiBULmRlY3JlbWVudGFsX3RleHQuaXNhICdjYmEnICAgICApLCB0cnVlXG4gICAgQGVxICggzqlobGx0XzI0NyA9IC0+IFQuZGVjcmVtZW50YWxfdGV4dC5kYXRhICAgICAgICAgICksIHsgY2hyczogWyAnYycsICdiJywgJ2EnLCBdLCB9XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgKCDOqWhsbHRfMjQ4ID0gLT4gVC5tYWduaWZpZXJzLmlzYSAnJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6paGxsdF8yNDkgPSAtPiBULm1hZ25pZmllcnMuZGF0YSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHsgbWVzc2FnZTogXCJleHBlY3RlZCBhIG1hZ25pZmllciwgZ290IGFuIGVtcHR5IHRleHRcIiwgfVxuICAgIEBlcSAoIM6paGxsdF8yNTAgPSAtPiBULm1hZ25pZmllcnMuaXNhICdBQkMgWFlaJyAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICBAZXEgKCDOqWhsbHRfMjUxID0gLT4gcGljayBULm1hZ25pZmllcnMuZGF0YSwgXFxcbiAgICAgICAgICAgICAgICAgICAgICAgWyAnbm1hZ19jaHJzX3JldmVyc2VkJywgJ19wbWFnX2xpc3QnLCAnX25tYWcnLCAnX3BtYWcnLCBdICksIHsgbm1hZ19jaHJzX3JldmVyc2VkOiBbICdBJywgJ0InLCAnQycgXSwgX3BtYWdfbGlzdDogWyAnICcsICdYJywgJ1knLCAnWicgXSwgX25tYWc6ICcgQ0JBJywgX3BtYWc6ICcgWFlaJyB9XG4gICAgQGVxICggzqlobGx0XzI1MiA9IC0+IE9iamVjdC5pc0Zyb3plbiBULm1hZ25pZmllcnMuZGF0YS5ubWFnX2NocnNfcmV2ZXJzZWQgKSwgdHJ1ZVxuICAgIEBlcSAoIM6paGxsdF8yNTMgPSAtPiBPYmplY3QuaXNGcm96ZW4gVC5tYWduaWZpZXJzLmRhdGEuX3BtYWdfbGlzdCAgICAgICAgICApLCB0cnVlXG4gICAgQGVxICggzqlobGx0XzI1NCA9IC0+IFQubWFnbmlmaWVycy5pc2EgJ0FCQ1xcblhZWicgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgQGVxICggzqlobGx0XzI1NSA9IC0+IFQubWFnbmlmaWVycy5pc2EgJ0FCQ1xcdFhZWicgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgQGVxICggzqlobGx0XzI1NiA9IC0+IFQubWFnbmlmaWVycy5pc2EgJ0FCQyAgICAgICAgICAgICBYWVonICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgIEBlcSAoIM6paGxsdF8yNTcgPSAtPiBULm1hZ25pZmllcnMuaXNhICdBQkMgRFggWVonICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgQGVxICggzqlobGx0XzI1OCA9IC0+IFQubWFnbmlmaWVycy5pc2EgJ0FCRCBDWFlaJyAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAoIM6paGxsdF8yNTkgPSAtPiBULnVuaWxpdGVyYWxzLmlzYSBudWxsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgQGVxICggzqlobGx0XzI2MCA9IC0+IFQudW5pbGl0ZXJhbHMuaXNhICcnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjYxID0gLT4gVC51bmlsaXRlcmFscy5pc2EgJ1ZCQScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6paGxsdF8yNjIgPSAtPiBULnVuaWxpdGVyYWxzLmlzYSAnRUZHSElKS0xNIE5PUFFSU1RVVlcnICAgICAgICAgICAgICksIGZhbHNlXG4gICAgQGVxICggzqlobGx0XzI2MyA9IC0+IFQudW5pbGl0ZXJhbHMuaXNhICdFRkdISUpLTE0gTiBPUFFSU1RVVlcnICAgICAgICAgICAgKSwgdHJ1ZVxuICAgIEBlcSAoIM6paGxsdF8yNjQgPSAtPiBULnVuaWxpdGVyYWxzLmRhdGEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHsgX251bnM6ICdFRkdISUpLTE0nLCBfenB1bnM6ICdOT1BRUlNUVVZXJywgX251bnNfbGlzdDogWyAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onLCAnSycsICdMJywgJ00nIF0sIF96cHVuc19saXN0OiBbICdOJywgJ08nLCAnUCcsICdRJywgJ1InLCAnUycsICdUJywgJ1UnLCAnVicsICdXJyBdIH1cbiAgICBAZXEgKCDOqWhsbHRfMjY1ID0gLT4gVC51bmlsaXRlcmFscy5pc2EgJ04nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgQGVxICggzqlobGx0XzI2NiA9IC0+IFQudW5pbGl0ZXJhbHMuZGF0YSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgeyBfbnVuczogJycsIF96cHVuczogJ04nLCBfbnVuc19saXN0OiBbXSwgX3pwdW5zX2xpc3Q6IFsgJ04nIF0gfVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQHRocm93cyAoIM6paGxsdF8yNjcgPSAtPiBULmRpZ2l0c2V0LnZhbGlkYXRlIG51bGwgICAgICAgICAgICAgICAgICAgICAgICAgKSwgL25vdCBhIHZhbGlkIGRpZ2l0c2V0L1xuICAgIEB0aHJvd3MgKCDOqWhsbHRfMjY4ID0gLT4gVC5kaWdpdHNldC52YWxpZGF0ZSAnJyAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC9ub3QgYSB2YWxpZCBkaWdpdHNldC9cbiAgICBAdGhyb3dzICggzqlobGx0XzI2OSA9IC0+IFQuZGlnaXRzZXQudmFsaWRhdGUgJ2EnICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvbm90IGEgdmFsaWQgZGlnaXRzZXQvXG4gICAgQGVxICAgICAoIM6paGxsdF8yNzAgPSAtPiBULmRpZ2l0c2V0LnZhbGlkYXRlICdhYicgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ2FiJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQHRocm93cyAoIM6paGxsdF8yNzEgPSAtPiAgIG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlIHsgYmxhbms6IG51bGwgfSAgICAgICAgICAgICAgICAgICAgICAgICksIC9ub3QgYSB2YWxpZCBibGFuay9cbiAgICBAdGhyb3dzICggzqlobGx0XzI3MiA9IC0+ICAgbmV3IEhvbGxlcml0aF90eXBlc3BhY2UgeyBibGFuazogJycgICB9ICAgICAgICAgICAgICAgICAgICAgICAgKSwgL25vdCBhIHZhbGlkIGJsYW5rL1xuICAgIEB0aHJvd3MgKCDOqWhsbHRfMjczID0gLT4gICBuZXcgSG9sbGVyaXRoX3R5cGVzcGFjZSB7IGJsYW5rOiAnLS0nIH0gICAgICAgICAgICAgICAgICAgICAgICApLCAvbm90IGEgdmFsaWQgYmxhbmsvXG4gICAgQHRocm93cyAoIM6paGxsdF8yNzQgPSAtPiAoIG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlIHsgYmxhbms6IG51bGwgfSApLmJsYW5rLnZhbGlkYXRlIG51bGwgICksIC9ub3QgYSB2YWxpZCBibGFuay9cbiAgICBAdGhyb3dzICggzqlobGx0XzI3NSA9IC0+ICggbmV3IEhvbGxlcml0aF90eXBlc3BhY2UgeyBibGFuazogJycgICB9ICkuYmxhbmsudmFsaWRhdGUgJycgICAgKSwgL25vdCBhIHZhbGlkIGJsYW5rL1xuICAgIEB0aHJvd3MgKCDOqWhsbHRfMjc2ID0gLT4gKCBuZXcgSG9sbGVyaXRoX3R5cGVzcGFjZSB7IGJsYW5rOiAnLS0nIH0gKS5ibGFuay52YWxpZGF0ZSAnLS0nICApLCAvbm90IGEgdmFsaWQgYmxhbmsvXG4gICAgQGVxICAgICAoIM6paGxsdF8yNzcgPSAtPiAoIG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlIHsgYmxhbms6ICctJyAgfSApLmJsYW5rLnZhbGlkYXRlICctJyAgICksICctJ1xuICAgIEBlcSAgICAgKCDOqWhsbHRfMjc4ID0gLT4gKCBuZXcgSG9sbGVyaXRoX3R5cGVzcGFjZSB7IGJsYW5rOiAnICcgIH0gKS5ibGFuay52YWxpZGF0ZSAnICcgICApLCAnICdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB2YWxpZGF0ZV9hbmRfY29tcGlsZV9jZmdfZ2VuZXJhbDogLT5cbiAgICB7IGludGVybmFscyxcbiAgICAgIEhvbGxlcml0aCwgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyBIb2xsZXJpdGhfdHlwZXNwYWNlLFxuICAgICAgQ0ZHLCAgICAgICAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aC9saWIvdHlwZXMnXG4gICAgIyB7IHR5cGVfb2YsICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgIyB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsICB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgIHsgaXNGcm96ZW46IGlzX2Zyb3plbiwgICAgICAgIH0gPSBPYmplY3RcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMjIyB0ZXN0aW5nIGEgZ2VuZXJhbCBhc3N1bXB0aW9uIHNvIHdlIGRvbid0IG1lc3MgdXA6ICMjI1xuICAgIEBlcSAoIM6paGxsdF8yNzkgPSAtPiAoIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIC0gMSApID09IC0oIE51bWJlci5NSU5fU0FGRV9JTlRFR0VSICsgMSApICksIHRydWVcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICAjIFQgPSBuZXcgSG9sbGVyaXRoX3R5cGVzcGFjZSgpXG4gICAgICBAdGhyb3dzICggzqlobGx0XzI4MCA9IC0+IEhvbGxlcml0aC52YWxpZGF0ZV9hbmRfY29tcGlsZV9jZmcge30gICAgICAgICAgICAgICAgICApLCAvbm90IGEgdmFsaWQgZGlnaXRzZXQvXG4gICAgICBAdGhyb3dzICggzqlobGx0XzI4MSA9IC0+IEhvbGxlcml0aC52YWxpZGF0ZV9hbmRfY29tcGlsZV9jZmcgeyBkaWdpdHNldDogJycgICAgfSApLCAvbm90IGEgdmFsaWQgZGlnaXRzZXQvXG4gICAgICBAdGhyb3dzICggzqlobGx0XzI4MiA9IC0+IEhvbGxlcml0aC52YWxpZGF0ZV9hbmRfY29tcGlsZV9jZmcgeyBkaWdpdHNldDogJ2EnICAgfSApLCAvbm90IGEgdmFsaWQgZGlnaXRzZXQvXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHZhbGlkYXRlX2FuZF9jb21waWxlX2NmZ18xMDogLT5cbiAgICB7IGludGVybmFscyxcbiAgICAgIEhvbGxlcml0aCwgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyBIb2xsZXJpdGhfdHlwZXNwYWNlLFxuICAgICAgQ0ZHLCAgICAgICAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aC9saWIvdHlwZXMnXG4gICAgIyB7IHR5cGVfb2YsICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgIyB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsICB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgIHsgaXNGcm96ZW46IGlzX2Zyb3plbiwgICAgICAgIH0gPSBPYmplY3RcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNmZ18xMCA9XG4gICAgICBibGFuazogICAgICAgICcgJyAgICAgICAgICAgICAgICAgICAgICAgIyBzZXBhcmF0b3IgdXNlZCBpbiBgbWFnbmlmaWVyc2AgYW5kIGB1bmlsaXRlcmFsc2BcbiAgICAgIGRpZ2l0c2V0OiAgICAgJzAxMjM0NTY3ODknICAgICAgICAgICAgICAjIGRpZ2l0czsgbGVuZ3RoIG9mIGBkaWdpdHNldGAgaXMgdGhlIGBfYmFzZWBcbiAgICAgIG1hZ25pZmllcnM6ICAgJ0FCQyBYWVonICAgICAgICAgICAgICAgICAjXG4gICAgICB1bmlsaXRlcmFsczogICdGR0hJSktMTSBOIE9QUVJTVFVWJyAgICAgIyBuZWdhdGl2ZSB1bmlsaXRlcmFscywgYmxhbmssIHplcm8gdW5pbGl0ZXJhbCwgYmxhbmssIHBvc2l0aXZlIHVuaWxpdGVyYWxzXG4gICAgICBkaW1lbnNpb246ICAgIDMgICAgICAgICAgICAgICAgICAgICAgICAgIyBudW1iZXIgb2YgaW5kaWNlcyBzdXBwb3J0ZWRcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICB7IGNmZywgfSA9IEhvbGxlcml0aC52YWxpZGF0ZV9hbmRfY29tcGlsZV9jZmcgY2ZnXzEwXG4gICAgICBAZXEgKCDOqWhsbHRfMjgzID0gLT4gY2ZnLmJsYW5rICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcgJ1xuICAgICAgQGVxICggzqlobGx0XzI4NCA9IC0+IGNmZy5kaWdpdHNldCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnMDEyMzQ1Njc4OSdcbiAgICAgIEBlcSAoIM6paGxsdF8yODUgPSAtPiBjZmcuX2RpZ2l0c19saXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgQXJyYXkuZnJvbSAnMDEyMzQ1Njc4OSdcbiAgICAgIEBlcSAoIM6paGxsdF8yODYgPSAtPiBjZmcuX25vdmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgKCBBcnJheS5mcm9tIGNmZy5kaWdpdHNldCApLmF0IC0xXG4gICAgICBAZXEgKCDOqWhsbHRfMjg3ID0gLT4gY2ZnLl9sZWFkaW5nX25vdmFzX3JlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC8vLyBeICg/OiA5ICkqICg/PSAuKyAkICkgLy8vZ3ZcbiAgICAgIEBlcSAoIM6paGxsdF8yODggPSAtPiBpc19mcm96ZW4gY2ZnLl9kaWdpdHNfbGlzdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlobGx0XzI4OSA9IC0+IGNmZy5fYmFzZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAxMFxuICAgICAgQGVxICggzqlobGx0XzI5MCA9IC0+IGNmZy5tYWduaWZpZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnQUJDIFhZWidcbiAgICAgIEBlcSAoIM6paGxsdF8yOTEgPSAtPiBjZmcuX25tYWcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcgQ0JBJ1xuICAgICAgQGVxICggzqlobGx0XzI5MiA9IC0+IGNmZy5fcG1hZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyBYWVonXG4gICAgICBAZXEgKCDOqWhsbHRfMjkzID0gLT4gY2ZnLl9ubWFnX2xpc3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIEFycmF5LmZyb20gJyBDQkEnXG4gICAgICBAZXEgKCDOqWhsbHRfMjk0ID0gLT4gY2ZnLl9wbWFnX2xpc3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIEFycmF5LmZyb20gJyBYWVonXG4gICAgICBAZXEgKCDOqWhsbHRfMjk1ID0gLT4gY2ZnLnVuaWxpdGVyYWxzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdGR0hJSktMTSBOIE9QUVJTVFVWJ1xuICAgICAgQGVxICggzqlobGx0XzI5NiA9IC0+IGNmZy5fbnVucyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnRkdISUpLTE0nXG4gICAgICBAZXEgKCDOqWhsbHRfMjk3ID0gLT4gY2ZnLl96cHVucyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdOT1BRUlNUVVYnXG4gICAgICBAZXEgKCDOqWhsbHRfMjk4ID0gLT4gY2ZnLl9tYXhfenB1biAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCA4XG4gICAgICBAZXEgKCDOqWhsbHRfMjk5ID0gLT4gY2ZnLl9taW5fbnVuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC04XG4gICAgICBAZXEgKCDOqWhsbHRfMzAwID0gLT4gY2ZnLl9udW5zX2xpc3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgJ0YnLCAnRycsICdIJywgJ0knLCAnSicsICdLJywgJ0wnLCAnTScgXSxcbiAgICAgIEBlcSAoIM6paGxsdF8zMDEgPSAtPiBjZmcuX3pwdW5zX2xpc3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAnTicsICdPJywgJ1AnLCAnUScsICdSJywgJ1MnLCAnVCcsICdVJywgJ1YnLCBdXG4gICAgICBAZXEgKCDOqWhsbHRfMzAyID0gLT4gY2ZnLmRpbWVuc2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDNcbiAgICAgIEBlcSAoIM6paGxsdF8zMDMgPSAtPiArKCAoIGNmZy5fYmFzZSAqKiAoIGNmZy5fcG1hZ19saXN0Lmxlbmd0aCAtIDEgKSAgKSAtIDEgKSApLCArOTk5XG4gICAgICBAZXEgKCDOqWhsbHRfMzA0ID0gLT4gLSggKCBjZmcuX2Jhc2UgKiogKCBjZmcuX25tYWdfbGlzdC5sZW5ndGggLSAxICkgICkgLSAxICkgKSwgLTk5OVxuICAgICAgQGVxICggzqlobGx0XzMwNSA9IC0+IGNmZy5fbWF4X2ludGVnZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCArOTk5XG4gICAgICBAZXEgKCDOqWhsbHRfMzA2ID0gLT4gY2ZnLl9taW5faW50ZWdlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC05OTlcbiAgICAgIEBlcSAoIM6paGxsdF8zMDcgPSAtPiBjZmcuZGlnaXRzX3Blcl9pZHggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDNcbiAgICAgIEBlcSAoIM6paGxsdF8zMDggPSAtPiBjZmcuX2FscGhhYmV0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJzAxMjM0NTY3ODlBQkNGR0hJSktMTU5PUFFSU1RVVlhZWidcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgaCA9IG5ldyBIb2xsZXJpdGggY2ZnXzEwXG4gICAgICBAZXEgKCDOqWhsbHRfMzA5ID0gLT4gaC5jZmcgKSwgY2ZnXG4gICAgICAjIEBlcSAoIM6paGxsdF8zMTAgPSAtPiBoLmVuY29kZSAgLTk5OCApLCBudWxsXG4gICAgICBAZXEgKCDOqWhsbHRfMzExID0gLT4gaC5lbmNvZGUgICAtMTIgKSwgJ0I4NydcbiAgICAgIEBlcSAoIM6paGxsdF8zMTIgPSAtPiBoLmVuY29kZSAgIC0xMSApLCAnQjg4J1xuICAgICAgQGVxICggzqlobGx0XzMxMyA9IC0+IGguZW5jb2RlICAgLTEwICksICdCODknXG4gICAgICBAZXEgKCDOqWhsbHRfMzE0ID0gLT4gaC5lbmNvZGUgICAgLTkgKSwgJ0MwJ1xuICAgICAgQGVxICggzqlobGx0XzMxNSA9IC0+IGguZW5jb2RlICAgIC04ICksICdGJ1xuICAgICAgQGVxICggzqlobGx0XzMxNiA9IC0+IGguZW5jb2RlICAgIC0yICksICdMJ1xuICAgICAgQGVxICggzqlobGx0XzMxNyA9IC0+IGguZW5jb2RlICAgIC0xICksICdNJ1xuICAgICAgQGVxICggzqlobGx0XzMxOCA9IC0+IGguZW5jb2RlICAgICAwICksICdOJ1xuICAgICAgQGVxICggzqlobGx0XzMxOSA9IC0+IGguZW5jb2RlICAgICsxICksICdPJ1xuICAgICAgQGVxICggzqlobGx0XzMyMCA9IC0+IGguZW5jb2RlICAgICsyICksICdQJ1xuICAgICAgQGVxICggzqlobGx0XzMyMSA9IC0+IGguZW5jb2RlICAgICs4ICksICdWJ1xuICAgICAgQGVxICggzqlobGx0XzMyMiA9IC0+IGguZW5jb2RlICAgICs5ICksICdYOSdcbiAgICAgIEBlcSAoIM6paGxsdF8zMjMgPSAtPiBoLmVuY29kZSAgICsxMCApLCAnWTEwJ1xuICAgICAgQGVxICggzqlobGx0XzMyNCA9IC0+IGguZW5jb2RlICAgKzExICksICdZMTEnXG4gICAgICBAZXEgKCDOqWhsbHRfMzI1ID0gLT4gaC5lbmNvZGUgICArMTIgKSwgJ1kxMidcbiAgICAgIEBlcSAoIM6paGxsdF8zMjYgPSAtPiBoLmVuY29kZSAgKzk5OCApLCAnWjk5OCdcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnXzEwX25vX3VuaWx0ZXJhbHM6IC0+XG4gICAgeyBpbnRlcm5hbHMsXG4gICAgICBIb2xsZXJpdGgsICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgSG9sbGVyaXRoX3R5cGVzcGFjZSxcbiAgICAgIENGRywgICAgICAgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgvbGliL3R5cGVzJ1xuICAgICMgeyB0eXBlX29mLCAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICMgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCAgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICB7IGlzRnJvemVuOiBpc19mcm96ZW4sICAgICAgICB9ID0gT2JqZWN0XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjZmdfMTBfbm9fdW5pbGl0ZXJhbHMgPVxuICAgICAgYmxhbms6ICAgICAgICAnICcgICAgICAgICAgICAgICAgICAgICAgICMgc2VwYXJhdG9yIHVzZWQgaW4gYG1hZ25pZmllcnNgIGFuZCBgdW5pbGl0ZXJhbHNgXG4gICAgICBkaWdpdHNldDogICAgICcwMTIzNDU2Nzg5JyAgICAgICAgICAgICAgIyBkaWdpdHM7IGxlbmd0aCBvZiBgZGlnaXRzZXRgIGlzIHRoZSBgX2Jhc2VgXG4gICAgICBtYWduaWZpZXJzOiAgICdBQkMgWFlaJyAgICAgICAgICAgICAgICAgI1xuICAgICAgdW5pbGl0ZXJhbHM6ICAnTicgICAgICAgICAgICAgICAgICAgICAgICMgb25seSBoYXMgemVybyB1bmlsaXRlcmFsXG4gICAgICBkaW1lbnNpb246ICAgIDMgICAgICAgICAgICAgICAgICAgICAgICAgIyBudW1iZXIgb2YgaW5kaWNlcyBzdXBwb3J0ZWRcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICB7IGNmZywgfSA9IEhvbGxlcml0aC52YWxpZGF0ZV9hbmRfY29tcGlsZV9jZmcgY2ZnXzEwX25vX3VuaWxpdGVyYWxzXG4gICAgICBAZXEgKCDOqWhsbHRfMzI3ID0gLT4gY2ZnLmJsYW5rICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnICdcbiAgICAgIEBlcSAoIM6paGxsdF8zMjggPSAtPiBjZmcuZGlnaXRzZXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcwMTIzNDU2Nzg5J1xuICAgICAgQGVxICggzqlobGx0XzMyOSA9IC0+IGNmZy5fZGlnaXRzX2xpc3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgQXJyYXkuZnJvbSAnMDEyMzQ1Njc4OSdcbiAgICAgIEBlcSAoIM6paGxsdF8zMzAgPSAtPiBjZmcuX25vdmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICggQXJyYXkuZnJvbSBjZmcuZGlnaXRzZXQgKS5hdCAtMVxuICAgICAgQGVxICggzqlobGx0XzMzMSA9IC0+IGNmZy5fbGVhZGluZ19ub3Zhc19yZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgLy8vIF4gKD86IDkgKSogKD89IC4rICQgKSAvLy9ndlxuICAgICAgQGVxICggzqlobGx0XzMzMiA9IC0+IGlzX2Zyb3plbiBjZmcuX2RpZ2l0c19saXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlobGx0XzMzMyA9IC0+IGNmZy5fYmFzZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgMTBcbiAgICAgIEBlcSAoIM6paGxsdF8zMzQgPSAtPiBjZmcubWFnbmlmaWVycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdBQkMgWFlaJ1xuICAgICAgQGVxICggzqlobGx0XzMzNSA9IC0+IGNmZy5fbm1hZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyBDQkEnXG4gICAgICBAZXEgKCDOqWhsbHRfMzM2ID0gLT4gY2ZnLl9wbWFnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnIFhZWidcbiAgICAgIEBlcSAoIM6paGxsdF8zMzcgPSAtPiBjZmcuX25tYWdfbGlzdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIEFycmF5LmZyb20gJyBDQkEnXG4gICAgICBAZXEgKCDOqWhsbHRfMzM4ID0gLT4gY2ZnLl9wbWFnX2xpc3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBBcnJheS5mcm9tICcgWFlaJ1xuICAgICAgQGVxICggzqlobGx0XzMzOSA9IC0+IGNmZy51bmlsaXRlcmFscyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ04nXG4gICAgICBAZXEgKCDOqWhsbHRfMzQwID0gLT4gY2ZnLl9udW5zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBudWxsXG4gICAgICBAZXEgKCDOqWhsbHRfMzQxID0gLT4gY2ZnLl96cHVucyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnTidcbiAgICAgIEBlcSAoIM6paGxsdF8zNDIgPSAtPiBjZmcuX251bnNfbGlzdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFtdXG4gICAgICBAZXEgKCDOqWhsbHRfMzQzID0gLT4gY2ZnLl96cHVuc19saXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbICdOJywgXVxuICAgICAgQGVxICggzqlobGx0XzM0NCA9IC0+IGNmZy5kaW1lbnNpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgM1xuICAgICAgQGVxICggzqlobGx0XzM0NSA9IC0+ICsoICggY2ZnLl9iYXNlICoqICggY2ZnLl9wbWFnX2xpc3QubGVuZ3RoIC0gMSApICApIC0gMSApICAgKSwgKzk5OVxuICAgICAgQGVxICggzqlobGx0XzM0NiA9IC0+IC0oICggY2ZnLl9iYXNlICoqICggY2ZnLl9ubWFnX2xpc3QubGVuZ3RoIC0gMSApICApIC0gMSApICAgKSwgLTk5OVxuICAgICAgQGVxICggzqlobGx0XzM0NyA9IC0+IGNmZy5fbWF4X2ludGVnZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgKzk5OVxuICAgICAgQGVxICggzqlobGx0XzM0OCA9IC0+IGNmZy5fbWluX2ludGVnZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgLTk5OVxuICAgICAgQGVxICggzqlobGx0XzM0OSA9IC0+IGNmZy5kaWdpdHNfcGVyX2lkeCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgM1xuICAgICAgQGVxICggzqlobGx0XzM1MCA9IC0+IGNmZy5fYWxwaGFiZXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJzAxMjM0NTY3ODlBQkNOWFlaJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBoID0gbmV3IEhvbGxlcml0aCBjZmdfMTBfbm9fdW5pbGl0ZXJhbHNcbiAgICAgIEBlcSAoIM6paGxsdF8zNTEgPSAtPiBoLmNmZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGNmZ1xuICAgICAgQGVxICggzqlobGx0XzM1MiA9IC0+IGguZW5jb2RlIFsgMCwgXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ05OTk5OTk5OTk5OTidcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnXzEyODogLT5cbiAgICB7IGludGVybmFscyxcbiAgICAgIEhvbGxlcml0aCwgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyBIb2xsZXJpdGhfdHlwZXNwYWNlLFxuICAgICAgQ0ZHLCAgICAgICAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aC9saWIvdHlwZXMnXG4gICAgIyB7IHR5cGVfb2YsICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgIyB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsICB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgIHsgaXNGcm96ZW46IGlzX2Zyb3plbiwgICAgICAgIH0gPSBPYmplY3RcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNmZ18xMjggPVxuICAgICAgIyMjICAgICAgICAgICAgICAgICAgICAgMSAgICAgICAgIDIgICAgICAgICAzICAgICAgICMjI1xuICAgICAgIyMjICAgICAgICAgICAgMTIzNDU2Nzg5MDEyMzQ1Njc4OTAxMjM0NTY3ODkwMTIgICAgICMjI1xuICAgICAgZGlnaXRzZXQ6ICAgICAnISMkJSYoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUInICsgXFxcbiAgICAgICAgICAgICAgICAgICAgJ0NERUZHSElKS0xNTk9QUVJTVFVWV1hZWltdXl9gYWJjJyArIFxcXG4gICAgICAgICAgICAgICAgICAgICdkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ent8fX7CocKiwqPCpMKlJyArIFxcXG4gICAgICAgICAgICAgICAgICAgICfCpsKnwqjCqcKqwqvCrMKuwq/CsMKxwrLCs8K0wrXCtsK3wrjCucK6wrvCvMK9wr7Cv8OAw4HDgsODw4TDhcOGJ1xuICAgICAgbWFnbmlmaWVyczogICAnw4fDiMOJw4rDi8OMw43DjiDDuMO5w7rDu8O8w73DvsO/J1xuICAgICAgdW5pbGl0ZXJhbHM6ICAnw4/DkMORw5LDk8OUw5XDlsOXw5jDmcOaw5vDnMOdw57Dn8Ogw6HDoiDDoyDDpMOlw6bDp8Oow6nDqsOrw6zDrcOuw6/DsMOxw7LDs8O0w7XDtsO3J1xuICAgICAgZGltZW5zaW9uOiAgICA1XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgeyBjZmcsIH0gPSBIb2xsZXJpdGgudmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnIGNmZ18xMjhcbiAgICAgIEBlcSAoIM6paGxsdF8zNTMgPSAtPiBjZmcuYmxhbmsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyAnXG4gICAgICBAZXEgKCDOqWhsbHRfMzU0ID0gLT4gY2ZnLmRpZ2l0c2V0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICchIyQlJigpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQicgKyBcXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDREVGR0hJSktMTU5PUFFSU1RVVldYWVpbXV5fYGFiYycgKyBcXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ent8fX7CocKiwqPCpMKlJyArIFxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ8KmwqfCqMKpwqrCq8Kswq7Cr8KwwrHCssKzwrTCtcK2wrfCuMK5wrrCu8K8wr3CvsK/w4DDgcOCw4PDhMOFw4YnXG4gICAgICBAZXEgKCDOqWhsbHRfMzU1ID0gLT4gY2ZnLl9kaWdpdHNfbGlzdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIEFycmF5LmZyb20gY2ZnLmRpZ2l0c2V0XG4gICAgICBAZXEgKCDOqWhsbHRfMzU2ID0gLT4gY2ZnLl9ub3ZhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICggQXJyYXkuZnJvbSBjZmcuZGlnaXRzZXQgKS5hdCAtMVxuICAgICAgQGVxICggzqlobGx0XzM1NyA9IC0+IGNmZy5fbGVhZGluZ19ub3Zhc19yZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvLy8gXiAoPzogw4YgKSogKD89IC4rICQgKSAvLy9ndlxuICAgICAgQGVxICggzqlobGx0XzM1OCA9IC0+IGNmZy5tYWduaWZpZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw4fDiMOJw4rDi8OMw43DjiDDuMO5w7rDu8O8w73DvsO/J1xuICAgICAgQGVxICggzqlobGx0XzM1OSA9IC0+IGNmZy5fbm1hZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyDDjsONw4zDi8OKw4nDiMOHJ1xuICAgICAgQGVxICggzqlobGx0XzM2MCA9IC0+IGNmZy5fcG1hZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyDDuMO5w7rDu8O8w73DvsO/J1xuICAgICAgQGVxICggzqlobGx0XzM2MSA9IC0+IGNmZy5fbm1hZ19saXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgQXJyYXkuZnJvbSAnIMOOw43DjMOLw4rDicOIw4cnXG4gICAgICBAZXEgKCDOqWhsbHRfMzYyID0gLT4gY2ZnLl9wbWFnX2xpc3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBBcnJheS5mcm9tICcgw7jDucO6w7vDvMO9w77DvydcbiAgICAgIEBlcSAoIM6paGxsdF8zNjMgPSAtPiBjZmcudW5pbGl0ZXJhbHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8OPw5DDkcOSw5PDlMOVw5bDl8OYw5nDmsObw5zDncOew5/DoMOhw6Igw6Mgw6TDpcOmw6fDqMOpw6rDq8Osw63DrsOvw7DDscOyw7PDtMO1w7bDtydcbiAgICAgIEBlcSAoIM6paGxsdF8zNjQgPSAtPiBjZmcuX251bnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDj8OQw5HDksOTw5TDlcOWw5fDmMOZw5rDm8Ocw53DnsOfw6DDocOiJ1xuICAgICAgQGVxICggzqlobGx0XzM2NSA9IC0+IGNmZy5fenB1bnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8Ojw6TDpcOmw6fDqMOpw6rDq8Osw63DrsOvw7DDscOyw7PDtMO1w7bDtydcbiAgICAgIEBlcSAoIM6paGxsdF8zNjYgPSAtPiBjZmcuX251bnNfbGlzdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBBcnJheS5mcm9tICfDj8OQw5HDksOTw5TDlcOWw5fDmMOZw5rDm8Ocw53DnsOfw6DDocOiJ1xuICAgICAgQGVxICggzqlobGx0XzM2NyA9IC0+IGNmZy5fenB1bnNfbGlzdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIEFycmF5LmZyb20gJ8Ojw6TDpcOmw6fDqMOpw6rDq8Osw63DrsOvw7DDscOyw7PDtMO1w7bDtydcbiAgICAgIEBlcSAoIM6paGxsdF8zNjggPSAtPiBjZmcuX21pbl9pbnRlZ2VyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgLSggKCAxMjggKiogNyApIC0gMSApXG4gICAgICBAZXEgKCDOqWhsbHRfMzY5ID0gLT4gY2ZnLl9tYXhfaW50ZWdlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICsoICggMTI4ICoqIDcgKSAtIDEgKVxuICAgICAgIyBAZXEgKCDOqWhsbHRfMzcwID0gLT4gY2ZnLmRpZ2l0c19wZXJfaWR4ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAzXG4gICAgICAjIEBlcSAoIM6paGxsdF8zNzEgPSAtPiBjZmcuX2FscGhhYmV0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJzAxMjM0NTY3ODlBQkNFRkdISUpLTE1OT1BRUlNUVVZXWFlaJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWhsbHRfMzcyID0gLT4gaXNfZnJvemVuIGNmZy5fZGlnaXRzX2xpc3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paGxsdF8zNzMgPSAtPiBjZmcuX2Jhc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDEyOFxuICAgICAgQGVxICggzqlobGx0XzM3NCA9IC0+IGNmZy5kaW1lbnNpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCA1XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGggPSBuZXcgSG9sbGVyaXRoIGNmZ18xMjhcbiAgICAgIEBlcSAoIM6paGxsdF8zNzUgPSAtPiBoLmNmZyApLCBjZmdcbiAgICAgICMgQGVxICggzqlobGx0XzM3NiA9IC0+IGguZW5jb2RlIFsgMCwgXSApLCBudWxsXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHZhbGlkYXRlX2FuZF9jb21waWxlX2NmZ18xMF9jYXJkaW5hbHM6IC0+XG4gICAgeyBpbnRlcm5hbHMsXG4gICAgICBob2xsZXJpdGhfMTBfY2FyZGluYWwsXG4gICAgICBIb2xsZXJpdGgsICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgY29uc3RhbnRzXzEwX2NhcmRpbmFsLCAgICAgIH0gPSBpbnRlcm5hbHNcbiAgICB7IEhvbGxlcml0aF90eXBlc3BhY2UsXG4gICAgICBDRkcsICAgICAgICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoL2xpYi90eXBlcydcbiAgICAjIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAjIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgeyBpc0Zyb3plbjogaXNfZnJvemVuLCAgICAgICAgfSA9IE9iamVjdFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHsgY2ZnLCB9ID0gSG9sbGVyaXRoLnZhbGlkYXRlX2FuZF9jb21waWxlX2NmZyBjb25zdGFudHNfMTBfY2FyZGluYWxcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzc3ID0gLT4gY2ZnLmJsYW5rICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyAnXG4gICAgICBAZXEgICAgICggzqlobGx0XzM3OCA9IC0+IGNmZy5jYXJkaW5hbHNfb25seSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzc5ID0gLT4gY2ZnLl9ubWFnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgbnVsbFxuICAgICAgQGVxICAgICAoIM6paGxsdF8zODAgPSAtPiBjZmcuX251bnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBudWxsXG4gICAgICBAZXEgICAgICggzqlobGx0XzM4MSA9IC0+IGNmZy5fbWluX2ludGVnZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDBcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzgyID0gLT4gY2ZnLl9tYXhfaW50ZWdlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgKzk5OVxuICAgICAgQGVxICAgICAoIM6paGxsdF8zODMgPSAtPiBjZmcuZGlnaXRzX3Blcl9pZHggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAzXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGggPSBuZXcgSG9sbGVyaXRoIGNvbnN0YW50c18xMF9jYXJkaW5hbFxuICAgICAgQGVxICAgICAoIM6paGxsdF8zODQgPSAtPiBoLmNmZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBjZmdcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzg1ID0gLT4gaC5lbmNvZGUgWyAgIDAsIF0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ05OTk5OTk5OTk5OTidcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzg2ID0gLT4gaC5lbmNvZGUgWyA5OTksIF0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ1o5OTlOTk5OTk5OTidcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzg3ID0gLT4gaC5lbmNvZGUgICAgIDAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ04nXG4gICAgICBAZXEgICAgICggzqlobGx0XzM4OCA9IC0+IGguZW5jb2RlICAgOTk5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdaOTk5J1xuICAgICAgIyBAdGhyb3dzICggzqlobGx0XzM4OSA9IC0+IGguZW5jb2RlIFsgIC0xLCBdICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC91bmFibGUgdG8gZW5jb2RlIG5lZ2F0aXZlIGlkeCAtMSB3aXRoIGNhcmRpbmFscy1vbmx5IGNvZGVjL1xuICAgICAgQHRocm93cyAoIM6paGxsdF8zOTAgPSAtPiBoLmVuY29kZSBbICAtMSwgXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvbm90IGEgdmFsaWQgaWR4L1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjYW5fc2V0X21heF9pZHhfZGlnaXRzOiAtPlxuICAgIHsgaW50ZXJuYWxzLFxuICAgICAgSG9sbGVyaXRoLCAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IEhvbGxlcml0aF90eXBlc3BhY2UsXG4gICAgICBDRkcsICAgICAgICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoL2xpYi90eXBlcydcbiAgICAjIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAjIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgeyBpc0Zyb3plbjogaXNfZnJvemVuLCAgICAgICAgfSA9IE9iamVjdFxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZG8gPT5cbiAgICAgIHVzZXJfY2ZnID1cbiAgICAgICAgdW5pbGl0ZXJhbHM6ICAgICAgICAnRUZHSElKS0xNIE4gT1BRUlNUVVZXJ1xuICAgICAgICBkaWdpdHNldDogICAgICAgICAgICcwMTIzNDU2Nzg5J1xuICAgICAgICBtYWduaWZpZXJzOiAgICAgICAgICdBQkMgWFlaJ1xuICAgICAgeyBjZmcsIH0gPSBIb2xsZXJpdGgudmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnIHVzZXJfY2ZnXG4gICAgICBAZXEgKCDOqWhsbHRfMzkxID0gLT4gY2ZnLl9taW5faW50ZWdlciAgICAgICAgICAgICAgICksIC05OTlcbiAgICAgIEBlcSAoIM6paGxsdF8zOTIgPSAtPiBjZmcuX21heF9pbnRlZ2VyICAgICAgICAgICAgICAgKSwgKzk5OVxuICAgICAgQGVxICggzqlobGx0XzM5MyA9IC0+IGNmZy5kaWdpdHNfcGVyX2lkeCAgICAgICAgICAgICApLCAzXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGggPSBuZXcgSG9sbGVyaXRoIHVzZXJfY2ZnXG4gICAgICBAZXEgKCDOqWhsbHRfMzk0ID0gLT4gaC5jZmcgICAgICAgICAgICAgICAgICAgICAgICAgICksIGNmZ1xuICAgICAgQGVxICggzqlobGx0XzM5NSA9IC0+IGguZW5jb2RlIFsgMCwgXSAgICAgICAgICAgICAgICApLCAnTk5OTk5OTk5OTk5OTk5OTk5OTk4nXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHVzZXJfY2ZnID1cbiAgICAgICAgdW5pbGl0ZXJhbHM6ICAgICAgICAnRUZHSElKS0xNIE4gT1BRUlNUVVZXJ1xuICAgICAgICBkaWdpdHNldDogICAgICAgICAgICcwMTIzNDU2Nzg5J1xuICAgICAgICBtYWduaWZpZXJzOiAgICAgICAgICdBQkMgWFlaJ1xuICAgICAgICBfbWF4X2ludGVnZXI6ICAgICAgIDk5OVxuICAgICAgeyBjZmcsIH0gPSBIb2xsZXJpdGgudmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnIHVzZXJfY2ZnXG4gICAgICBAZXEgKCDOqWhsbHRfMzk2ID0gLT4gY2ZnLl9taW5faW50ZWdlciAgICAgICAgICAgICAgICksIC05OTlcbiAgICAgIEBlcSAoIM6paGxsdF8zOTcgPSAtPiBjZmcuX21heF9pbnRlZ2VyICAgICAgICAgICAgICAgKSwgKzk5OVxuICAgICAgQGVxICggzqlobGx0XzM5OCA9IC0+IGNmZy5kaWdpdHNfcGVyX2lkeCAgICAgICAgICAgICApLCAzXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGggPSBuZXcgSG9sbGVyaXRoIHVzZXJfY2ZnXG4gICAgICBAZXEgKCDOqWhsbHRfMzk5ID0gLT4gaC5jZmcgICAgICAgICAgICAgICAgICAgICAgICAgICksIGNmZ1xuICAgICAgQGVxICggzqlobGx0XzQwMCA9IC0+IGguZW5jb2RlIFsgMCwgXSAgICAgICAgICAgICAgICApLCAnTk5OTk5OTk5OTk5OTk5OTk5OTk4nXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHVzZXJfY2ZnID1cbiAgICAgICAgdW5pbGl0ZXJhbHM6ICAgICAgICAnRUZHSElKS0xNIE4gT1BRUlNUVVZXJ1xuICAgICAgICBkaWdpdHNldDogICAgICAgICAgICcwMTIzNDU2Nzg5J1xuICAgICAgICBtYWduaWZpZXJzOiAgICAgICAgICdBQkMgWFlaJ1xuICAgICAgICBkaWdpdHNfcGVyX2lkeDogICAgM1xuICAgICAgeyBjZmcsIH0gPSBIb2xsZXJpdGgudmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnIHVzZXJfY2ZnXG4gICAgICBAZXEgKCDOqWhsbHRfNDAxID0gLT4gY2ZnLl9taW5faW50ZWdlciAgICAgICAgICAgICAgICksIC05OTlcbiAgICAgIEBlcSAoIM6paGxsdF80MDIgPSAtPiBjZmcuX21heF9pbnRlZ2VyICAgICAgICAgICAgICAgKSwgKzk5OVxuICAgICAgQGVxICggzqlobGx0XzQwMyA9IC0+IGNmZy5kaWdpdHNfcGVyX2lkeCAgICAgICAgICAgICApLCAzXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGggPSBuZXcgSG9sbGVyaXRoIHVzZXJfY2ZnXG4gICAgICBAZXEgKCDOqWhsbHRfNDA0ID0gLT4gaC5jZmcgICAgICAgICAgICAgICAgICAgICAgICAgICksIGNmZ1xuICAgICAgQGVxICggzqlobGx0XzQwNSA9IC0+IGguZW5jb2RlIFsgMCwgXSAgICAgICAgICAgICAgICApLCAnTk5OTk5OTk5OTk5OTk5OTk5OTk4nXG4gICAgICByZXR1cm4gbnVsbFxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZG8gPT5cbiAgICAgIHVzZXJfY2ZnID1cbiAgICAgICAgdW5pbGl0ZXJhbHM6ICAgICAgICAnRUZHSElKS0xNIE4gT1BRUlNUVVZXJ1xuICAgICAgICBkaWdpdHNldDogICAgICAgICAgICcwMTIzNDU2Nzg5J1xuICAgICAgICBtYWduaWZpZXJzOiAgICAgICAgICc/QEFCQyBYWVpeXydcbiAgICAgIHsgY2ZnLCB9ID0gSG9sbGVyaXRoLnZhbGlkYXRlX2FuZF9jb21waWxlX2NmZyB1c2VyX2NmZ1xuICAgICAgQGVxICggzqlobGx0XzQwNiA9IC0+IGNmZy5fbWluX2ludGVnZXIgICAgICAgICAgICAgICApLCAtOTlfOTk5XG4gICAgICBAZXEgKCDOqWhsbHRfNDA3ID0gLT4gY2ZnLl9tYXhfaW50ZWdlciAgICAgICAgICAgICAgICksICs5OV85OTlcbiAgICAgIEBlcSAoIM6paGxsdF80MDggPSAtPiBjZmcuZGlnaXRzX3Blcl9pZHggICAgICAgICAgICAgKSwgNVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBoID0gbmV3IEhvbGxlcml0aCB1c2VyX2NmZ1xuICAgICAgQGVxICggzqlobGx0XzQwOSA9IC0+IGguY2ZnICAgICAgICAgICAgICAgICAgICAgICAgICApLCBjZmdcbiAgICAgIEBlcSAoIM6paGxsdF80MTAgPSAtPiBoLmVuY29kZSBbIDAsIF0gICAgICAgICAgICAgICAgKSwgJ05OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTidcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgdXNlcl9jZmcgPVxuICAgICAgICB1bmlsaXRlcmFsczogICAgICAgICdFRkdISUpLTE0gTiBPUFFSU1RVVlcnXG4gICAgICAgIGRpZ2l0c2V0OiAgICAgICAgICAgJzAxMjM0NTY3ODknXG4gICAgICAgIG1hZ25pZmllcnM6ICAgICAgICAgJz9AQUJDIFhZWl5fJ1xuICAgICAgICBfbWF4X2ludGVnZXI6ICAgICAgIDk5OVxuICAgICAgeyBjZmcsIH0gPSBIb2xsZXJpdGgudmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnIHVzZXJfY2ZnXG4gICAgICBAZXEgKCDOqWhsbHRfNDExID0gLT4gY2ZnLl9taW5faW50ZWdlciAgICAgICAgICAgICAgICksIC05OV85OTlcbiAgICAgIEBlcSAoIM6paGxsdF80MTIgPSAtPiBjZmcuX21heF9pbnRlZ2VyICAgICAgICAgICAgICAgKSwgKzk5Xzk5OVxuICAgICAgQGVxICggzqlobGx0XzQxMyA9IC0+IGNmZy5kaWdpdHNfcGVyX2lkeCAgICAgICAgICAgICApLCA1XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGggPSBuZXcgSG9sbGVyaXRoIHVzZXJfY2ZnXG4gICAgICBAZXEgKCDOqWhsbHRfNDE0ID0gLT4gaC5jZmcgICAgICAgICAgICAgICAgICAgICAgICAgICksIGNmZ1xuICAgICAgQGVxICggzqlobGx0XzQxNSA9IC0+IGguZW5jb2RlIFsgMCwgXSAgICAgICAgICAgICAgICApLCAnTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OJ1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICB1c2VyX2NmZyA9XG4gICAgICAgIHVuaWxpdGVyYWxzOiAgICAgICAgJ0VGR0hJSktMTSBOIE9QUVJTVFVWVydcbiAgICAgICAgZGlnaXRzZXQ6ICAgICAgICAgICAnMDEyMzQ1Njc4OSdcbiAgICAgICAgbWFnbmlmaWVyczogICAgICAgICAnP0BBQkMgWFlaXl8nXG4gICAgICAgIGRpZ2l0c19wZXJfaWR4OiAgICAgM1xuICAgICAgeyBjZmcsIH0gPSBIb2xsZXJpdGgudmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnIHVzZXJfY2ZnXG4gICAgICBAZXEgKCDOqWhsbHRfNDE2ID0gLT4gY2ZnLl9taW5faW50ZWdlciAgICAgICAgICAgICAgICksIC05OTlcbiAgICAgIEBlcSAoIM6paGxsdF80MTcgPSAtPiBjZmcuX21heF9pbnRlZ2VyICAgICAgICAgICAgICAgKSwgKzk5OVxuICAgICAgQGVxICggzqlobGx0XzQxOCA9IC0+IGNmZy5kaWdpdHNfcGVyX2lkeCAgICAgICAgICAgICApLCAzXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGggPSBuZXcgSG9sbGVyaXRoIHVzZXJfY2ZnXG4gICAgICBAZXEgKCDOqWhsbHRfNDE5ID0gLT4gaC5jZmcgICAgICAgICAgICAgICAgICAgICAgICAgICksIGNmZ1xuICAgICAgQGVxICggzqlobGx0XzQyMCA9IC0+IGguZW5jb2RlIFsgMCwgXSAgICAgICAgICAgICAgICApLCAnTk5OTk5OTk5OTk5OTk5OTk5OTk4nXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHRlc3RfdGVzdF9ob2xsZXJpdGg6IC0+XG4gICAgeyBpbnRlcm5hbHMsXG4gICAgICBIb2xsZXJpdGgsXG4gICAgICBob2xsZXJpdGhfMTBtdnAyLFxuICAgICAgdGVzdF9ob2xsZXJpdGgsICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBAZXEgICAgICggzqlobGx0XzQyMSA9IC0+IHR5cGVfb2YgdGVzdF9ob2xsZXJpdGgudGVzdF9zb3J0aW5nICAgICAgICAgICAgICAgICAgICApLCAnZnVuY3Rpb24nXG4gICAgQHRocm93cyAoIM6paGxsdF80MjIgPSAtPiB0eXBlX29mIHRlc3RfaG9sbGVyaXRoLnRlc3Rfc29ydGluZyAnPz8/JyAgICAgICAgICAgICAgKSwgL25vdCBhIHZhbGlkIGhvbGxlcml0aC9cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHRlc3RfcmVzdWx0ID0gdGVzdF9ob2xsZXJpdGgudGVzdF9zb3J0aW5nIGhvbGxlcml0aF8xMG12cDJcbiAgICBAZXEgICAgICggzqlobGx0XzQyMyA9IC0+IHR5cGVfb2YgdGVzdF9yZXN1bHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAncG9kJ1xuICAgIEBlcSAgICAgKCDOqWhsbHRfNDI0ID0gLT4gdGVzdF9yZXN1bHQuc3VjY2VzcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICBAZXEgICAgICggzqlobGx0XzQyNSA9IC0+IHR5cGVfb2YgdGVzdF9yZXN1bHQucHJvYmVfY291bnQgICAgICAgICAgICAgICAgICAgICAgICApLCAnZmxvYXQnXG4gICAgQGVxICAgICAoIM6paGxsdF80MjYgPSAtPiB0eXBlX29mIHRlc3RfcmVzdWx0LmhpdF9jb3VudCAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ2Zsb2F0J1xuICAgIEBlcSAgICAgKCDOqWhsbHRfNDI3ID0gLT4gdHlwZV9vZiB0ZXN0X3Jlc3VsdC5taXNzX2NvdW50ICAgICAgICAgICAgICAgICAgICAgICAgICksICdmbG9hdCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB0eXBlczogLT5cbiAgICB7IEhvbGxlcml0aF90eXBlc3BhY2UsXG4gICAgICBjcmVhdGVfbWF4X2ludGVnZXIsXG4gICAgICBDRkcsICAgICAgICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoL2xpYi90eXBlcydcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBUID0gbmV3IEhvbGxlcml0aF90eXBlc3BhY2UoKVxuICAgICAgQGVxICAgICAoIM6paGxsdF80MjggPSAtPiBULl9iYXNlLmlzYSAtMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfNDI5ID0gLT4gVC5fYmFzZS5pc2EgIDAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgICAgICggzqlobGx0XzQzMCA9IC0+IFQuX2Jhc2UuaXNhICsxICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICAgICAoIM6paGxsdF80MzEgPSAtPiBULl9iYXNlLmlzYSArMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6paGxsdF80MzIgPSAtPiBULl9tYXhfaW50ZWdlci5pc2EgbnVsbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfNDMzID0gLT4gVC5fbWF4X2ludGVnZXIuaXNhIDksICAgICAgICAgIDEwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfNDM0ID0gLT4gVC5fbWF4X2ludGVnZXIuaXNhIDk5LCAgICAgICAgIDEwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfNDM1ID0gLT4gVC5fbWF4X2ludGVnZXIuaXNhIDk5OTk5OTk5LCAgIDEwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfNDM2ID0gLT4gVC5fbWF4X2ludGVnZXIuaXNhIC0xMCwgICAgICAgIDEwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgICAgICggzqlobGx0XzQzNyA9IC0+IC9ub3QgYSBwb3NpdGl2ZSBzYWZlIGludGVnZXIvLnRlc3QgVC5fbWF4X2ludGVnZXIuZGF0YS5tZXNzYWdlICAgICApLCB0cnVlXG4gICAgICBAZXEgICAgICggzqlobGx0XzQzOCA9IC0+IFQuX21heF9pbnRlZ2VyLmlzYSAweGZmZmYsICAgICAxNiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgICAgICggzqlobGx0XzQzOSA9IC0+IFQuX21heF9pbnRlZ2VyLmlzYSAweDdmZmZmZmZmLCAxNiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQHRocm93cyAoIM6paGxsdF80NDAgPSAtPiBULl9tYXhfaW50ZWdlci52YWxpZGF0ZSA1LCAxMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgL1xcKF9tYXhfaW50ZWdlclxcKSBub3QgYSB2YWxpZCBfbWF4X2ludGVnZXI6IDUg4oCTIHggbm90IGEgcG9zaXRpdmUgYWxsLW5pbmVycy9cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgVCA9IG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlKClcbiAgICAgIFIgPSB7IF9iYXNlOiAxNiwgZGlnaXRzX3Blcl9pZHg6IDQsIH1cbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfNDQxID0gLT4gVC5fbWF4X2ludGVnZXIuaXNhICggUi5fYmFzZSAqKiBSLmRpZ2l0c19wZXJfaWR4ICkgLSAxLCBSLl9iYXNlICksIHRydWVcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgVCA9IG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlKClcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfNDQyID0gLT4gVC5fbWF4X2ludGVnZXIuaXNhICggMTI4ICoqIDEgKSAtIDEsIDEyOCAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgICAgICggzqlobGx0XzQ0MyA9IC0+IFQuX21heF9pbnRlZ2VyLmlzYSAoIDEyOCAqKiAyICkgLSAxLCAxMjggICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6paGxsdF80NDQgPSAtPiBULl9tYXhfaW50ZWdlci5pc2EgKCAxMjggKiogMyApIC0gMSwgMTI4ICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfNDQ1ID0gLT4gVC5fbWF4X2ludGVnZXIuaXNhICggMTI4ICoqIDQgKSAtIDEsIDEyOCAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgICAgICggzqlobGx0XzQ0NiA9IC0+IFQuX21heF9pbnRlZ2VyLmlzYSAoIDEyOCAqKiA1ICkgLSAxLCAxMjggICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6paGxsdF80NDcgPSAtPiBULl9tYXhfaW50ZWdlci5pc2EgKCAxMjggKiogNiApIC0gMSwgMTI4ICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfNDQ4ID0gLT4gVC5fbWF4X2ludGVnZXIuaXNhICggMTI4ICoqIDcgKSAtIDEsIDEyOCAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgICAgICggzqlobGx0XzQ0OSA9IC0+IFQuX21heF9pbnRlZ2VyLmlzYSAoIDEyOCAqKiA4ICkgLSAxLCAxMjggICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfNDUwID0gLT4gVC5jcmVhdGVfbWF4X2ludGVnZXIgeyBfYmFzZTogMTAsIGRpZ2l0c19wZXJfaWR4OiAyLCB9ICksIDk5XG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5kZW1vX21heF9pbnRlZ2VyID0gLT5cbiAgbG9nX3RvX2Jhc2UgICAgICAgICAgICAgICA9ICggbiwgYmFzZSApIC0+ICggTWF0aC5sb2cgbiApIC8gKCBNYXRoLmxvZyBiYXNlIClcbiAgZ2V0X3JlcXVpcmVkX2RpZ2l0cyAgICAgICA9ICggbiwgYmFzZSApIC0+IE1hdGguY2VpbCBsb2dfdG9fYmFzZSBuLCBiYXNlXG4gIGdldF9tYXhfbmluZXJfZGlnaXRfY291bnQgPSAoIG4sIGJhc2UgKSAtPiAoIGdldF9yZXF1aXJlZF9kaWdpdHMgbiwgYmFzZSApIC0gMVxuICBnZXRfbWF4X2ludGVnZXIgICAgICAgICAgID0gKCBuLCBiYXNlICkgLT4gKCBiYXNlICoqIGdldF9tYXhfbmluZXJfZGlnaXRfY291bnQgbiwgYmFzZSApIC0gMVxuICBpbmZvICfOqWhsbHRfNDUxJywgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIudG9TdHJpbmcgMTZcbiAgaW5mbyAnzqlobGx0XzQ1MicsIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLnRvU3RyaW5nIDMyXG4gIHdoaXNwZXIgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgaW5mbyAnzqlobGx0XzQ1MycsICggMzIgKiogNCAtIDEgKS50b1N0cmluZyAzMlxuICBpbmZvICfOqWhsbHRfNDU0JywgKCAzMiAqKiA0IC0gMSApLnRvU3RyaW5nIDMyXG4gIHdoaXNwZXIgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgaW5mbyAnzqlobGx0XzQ1NScsIGdldF9yZXF1aXJlZF9kaWdpdHMgMzIsICAgICAgIDMyXG4gIGluZm8gJ86paGxsdF80NTYnLCBnZXRfcmVxdWlyZWRfZGlnaXRzIDMyICoqIDYsICAzMlxuICBpbmZvICfOqWhsbHRfNDU3JywgZ2V0X3JlcXVpcmVkX2RpZ2l0cyAxZTYsICAgICAgMTBcbiAgaW5mbyAnzqlobGx0XzQ1OCcsIGdldF9yZXF1aXJlZF9kaWdpdHMgMjAsICAgICAgIDEwXG4gIHdoaXNwZXIgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgaW5mbyAnzqlobGx0XzQ1OScsIG1heF9kaWdpdHNfYmFzZV8xMCAgICA9IGdldF9tYXhfbmluZXJfZGlnaXRfY291bnQgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsIDEwXG4gIGluZm8gJ86paGxsdF80NjAnLCBtYXhfZGlnaXRzX2Jhc2VfMTYgICAgPSBnZXRfbWF4X25pbmVyX2RpZ2l0X2NvdW50IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAxNlxuICBpbmZvICfOqWhsbHRfNDYxJywgbWF4X2RpZ2l0c19iYXNlXzMyICAgID0gZ2V0X21heF9uaW5lcl9kaWdpdF9jb3VudCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiwgMzJcbiAgaW5mbyAnzqlobGx0XzQ2MicsIG1heF9kaWdpdHNfYmFzZV8zNiAgICA9IGdldF9tYXhfbmluZXJfZGlnaXRfY291bnQgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsIDM2XG4gIGluZm8gJ86paGxsdF80NjMnLCBtYXhfZGlnaXRzXzFiYXNlXzI4ICAgPSBnZXRfbWF4X25pbmVyX2RpZ2l0X2NvdW50IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAxMjhcbiAgIyBmb3IgYmFzZSBpbiBbIDIgLi4gMTI4IF1cbiAgIyAgIGluZm8gJ86paGxsdF80NjQnLCB7IGJhc2UsIH0sICggTWF0aC5jZWlsIGxvZ190b19iYXNlIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCBiYXNlICkgLSAxXG4gIHdoaXNwZXIgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgaW5mbyAnzqlobGx0XzQ2NScsICc5Jy5yZXBlYXQgbWF4X2RpZ2l0c19iYXNlXzEwXG4gIGluZm8gJ86paGxsdF80NjYnLCAnZicucmVwZWF0IG1heF9kaWdpdHNfYmFzZV8xNlxuICBpbmZvICfOqWhsbHRfNDY3JywgJ3YnLnJlcGVhdCBtYXhfZGlnaXRzX2Jhc2VfMzJcbiAgd2hpc3BlciAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUJ1xuICBpbmZvICfOqWhsbHRfNDY4JywgKCAoIGJhc2UgPSAxMCApICoqIG1heF9kaWdpdHNfYmFzZV8xMCApIC0gMVxuICBpbmZvICfOqWhsbHRfNDY5JywgKCAoIGJhc2UgPSAxNiApICoqIG1heF9kaWdpdHNfYmFzZV8xNiApIC0gMVxuICBpbmZvICfOqWhsbHRfNDcwJywgKCAoIGJhc2UgPSAzMiApICoqIG1heF9kaWdpdHNfYmFzZV8zMiApIC0gMVxuICBpbmZvICfOqWhsbHRfNDcxJywgKCAoIGJhc2UgPSAzNiApICoqIG1heF9kaWdpdHNfYmFzZV8zNiApIC0gMVxuICB3aGlzcGVyICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gIGluZm8gJ86paGxsdF80NzInLCBnZXRfbWF4X2ludGVnZXIgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsIDEwXG4gIGluZm8gJ86paGxsdF80NzMnLCBnZXRfbWF4X2ludGVnZXIgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsIDE2XG4gIGluZm8gJ86paGxsdF80NzQnLCBnZXRfbWF4X2ludGVnZXIgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsIDMyXG4gIGluZm8gJ86paGxsdF80NzUnLCBnZXRfbWF4X2ludGVnZXIgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsIDM2XG4gIGluZm8gJ86paGxsdF80NzYnLCBnZXRfbWF4X2ludGVnZXIgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsIDEyOFxuICB3aGlzcGVyICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gIGluZm8gJ86paGxsdF80NzcnLCAoIHBhcnNlSW50ICggJzknLnJlcGVhdCBtYXhfZGlnaXRzX2Jhc2VfMTAgKSwgMTAgKVxuICBpbmZvICfOqWhsbHRfNDc4JywgKCBwYXJzZUludCAoICdmJy5yZXBlYXQgbWF4X2RpZ2l0c19iYXNlXzE2ICksIDE2IClcbiAgaW5mbyAnzqlobGx0XzQ3OScsICggcGFyc2VJbnQgKCAndicucmVwZWF0IG1heF9kaWdpdHNfYmFzZV8zMiApLCAzMiApXG4gIGluZm8gJ86paGxsdF80ODAnLCAoIHBhcnNlSW50ICggJ3onLnJlcGVhdCBtYXhfZGlnaXRzX2Jhc2VfMzYgKSwgMzYgKVxuICBpbmZvICfOqWhsbHRfNDgxJywgKCBwYXJzZUludCAoICc5Jy5yZXBlYXQgbWF4X2RpZ2l0c19iYXNlXzEwICksIDEwICkgPD0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcbiAgaW5mbyAnzqlobGx0XzQ4MicsICggcGFyc2VJbnQgKCAnZicucmVwZWF0IG1heF9kaWdpdHNfYmFzZV8xNiApLCAxNiApIDw9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG4gIGluZm8gJ86paGxsdF80ODMnLCAoIHBhcnNlSW50ICggJ3YnLnJlcGVhdCBtYXhfZGlnaXRzX2Jhc2VfMzIgKSwgMzIgKSA8PSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUlxuICBpbmZvICfOqWhsbHRfNDg0JywgKCBwYXJzZUludCAoICd6Jy5yZXBlYXQgbWF4X2RpZ2l0c19iYXNlXzM2ICksIDM2ICkgPD0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcbiAgd2hpc3BlciAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUJ1xuICBpbmZvICfOqWhsbHRfNDg1JywgKzk5OSArIC05OTlcbiAgaW5mbyAnzqlobGx0XzQ4NicsICs5OTkgKyAtMVxuICBpbmZvICfOqWhsbHRfNDg3JywgLSggLTk5OSAtIDEgKSArIC05OTlcbiAgaW5mbyAnzqlobGx0XzQ4OCcsIC0oIC05OTkgLSAxICkgKyAtOTk4XG4gIGluZm8gJ86paGxsdF80ODknLCAtKCAtOTk5IC0gMSApICsgLTk5N1xuICBpbmZvICfOqWhsbHRfNDkwJywgLSggLTk5OSAtIDEgKSArIC0zXG4gIGluZm8gJ86paGxsdF80OTEnLCAtKCAtOTk5IC0gMSApICsgLTJcbiAgaW5mbyAnzqlobGx0XzQ5MicsIC0oIC05OTkgLSAxICkgKyAtMVxuICBpbmZvICfOqWhsbHRfNDkzJywgXCIjeyAtKCAtOTk5IC0gMSApICsgLTMgfVwiLnJlcGxhY2UgLy8vIF4gOSo/ICg/PSAuICQgKSAvLy9ndiwgJydcbiAgaW5mbyAnzqlobGx0XzQ5NCcsIFwiI3sgLSggLTk5OSAtIDEgKSArIC0yIH1cIi5yZXBsYWNlIC8vLyBeIDkqPyAoPz0gLiAkICkgLy8vZ3YsICcnXG4gIGluZm8gJ86paGxsdF80OTUnLCBcIiN7IC0oIC05OTkgLSAxICkgKyAtMSB9XCIucmVwbGFjZSAvLy8gXiA5Kj8gKD89IC4gJCApIC8vL2d2LCAnJ1xuICByZXR1cm4gbnVsbFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIHsgc2hvd19yZXF1aXJlcywgfSA9IHJlcXVpcmUgJy4uLy4uL3NuaXBwZXRzL2xpYi9kZW1vLXNob3ctcmVxdWlyZXMuanMnXG4gIHNob3dfcmVxdWlyZXMgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgQGhvbGxlcml0aFxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHRlc3RfdGVzdF9ob2xsZXJpdGg6IEBob2xsZXJpdGgudGVzdF90ZXN0X2hvbGxlcml0aCwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnXzEwX2NhcmRpbmFsczogQGhvbGxlcml0aC52YWxpZGF0ZV9hbmRfY29tcGlsZV9jZmdfMTBfY2FyZGluYWxzLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBob2xsZXJpdGhfMTBtdnAyX2JpZ19zaHVmZmxlOiBAaG9sbGVyaXRoLmhvbGxlcml0aF8xMG12cDJfYmlnX3NodWZmbGUsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGhvbGxlcml0aF8xMjhfYmlnX3NodWZmbGU6IEBob2xsZXJpdGguaG9sbGVyaXRoXzEyOF9iaWdfc2h1ZmZsZSwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgY2FuX3NldF9tYXhfaWR4X2RpZ2l0czogQGhvbGxlcml0aC5jYW5fc2V0X21heF9pZHhfZGlnaXRzLCB9XG5cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHR5cGVzOiBAaG9sbGVyaXRoLnR5cGVzLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBoMTBtdnAyX3NvcnRpbmdfMjogQGhvbGxlcml0aC5oMTBtdnAyX3NvcnRpbmdfMiwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnXzEwOiBAaG9sbGVyaXRoLnZhbGlkYXRlX2FuZF9jb21waWxlX2NmZ18xMCwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgaDEwbXZwMl9kZWNvZGVfdW5pdHM6IEBob2xsZXJpdGguaDEwbXZwMl9kZWNvZGVfdW5pdHMsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGdldF9sZWFkaW5nX25vdmFzX3JlOiBAaG9sbGVyaXRoLmdldF9sZWFkaW5nX25vdmFzX3JlLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB2YWxpZGF0ZV9hbmRfY29tcGlsZV9jZmc6IEBob2xsZXJpdGgudmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnLCB9XG4gICMgZGVtb19tYXhfaW50ZWdlcigpXG5cblxuIl19
