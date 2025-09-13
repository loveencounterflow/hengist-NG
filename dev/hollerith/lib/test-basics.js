(async function() {
  'use strict';
  var GTNG, GUY, SFMODULES, Test, alert, debug, demo_max_integer, echo, f, help, helpers, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('hollerith'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  ({f} = require('../../../apps/effstring'));

  SFMODULES = require('../../../apps/bricabrac-single-file-modules');

  //===========================================================================================================
  helpers = {
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
      return (() => {        //.......................................................................................................
        var Ωanybt___1, Ωanybt___2;
        this.eq((Ωanybt___1 = function() {
          return type_of(hollerith_10mvp.encode);
        }), 'function');
        this.eq((Ωanybt___2 = function() {
          return type_of(hollerith_10mvp.encode_integer);
        }), 'function');
        return null;
      })();
    },
    //---------------------------------------------------------------------------------------------------------
    get_niners_re: function() {
      var get_niners_re, types;
      ({
        internals: {types}
      } = require('../../../apps/hollerith'));
      ({get_niners_re} = types.internals);
      (() => {        // debug 'Ωhllt___3', '987'.replace /// ^ (?: 9 )*? (?= . $ ) ///gv, ''
        //.......................................................................................................
        var Ωanybt___4, Ωanybt___5;
        this.eq((Ωanybt___4 = function() {
          return get_niners_re('9');
        }), /^(?:9)*(?=.+$)/gv);
        this.eq((Ωanybt___5 = function() {
          return get_niners_re('*');
        }), /^(?:\*)*(?=.+$)/gv);
        return null;
      })();
      (() => {        //.......................................................................................................
        var leading_niners_re, Ωanybt__10, Ωanybt__11, Ωanybt__12, Ωanybt__13, Ωanybt__14, Ωanybt__15, Ωanybt__16, Ωanybt__17, Ωanybt___6, Ωanybt___7, Ωanybt___8, Ωanybt___9;
        leading_niners_re = get_niners_re('9');
        this.eq((Ωanybt___6 = function() {
          return '9999'.replace(leading_niners_re, '');
        }), '9');
        this.eq((Ωanybt___7 = function() {
          return '999'.replace(leading_niners_re, '');
        }), '9');
        this.eq((Ωanybt___8 = function() {
          return '99'.replace(leading_niners_re, '');
        }), '9');
        this.eq((Ωanybt___9 = function() {
          return '9'.replace(leading_niners_re, '');
        }), '9');
        this.eq((Ωanybt__10 = function() {
          return '9989'.replace(leading_niners_re, '');
        }), '89');
        this.eq((Ωanybt__11 = function() {
          return '989'.replace(leading_niners_re, '');
        }), '89');
        this.eq((Ωanybt__12 = function() {
          return '89'.replace(leading_niners_re, '');
        }), '89');
        this.eq((Ωanybt__13 = function() {
          return '9992'.replace(leading_niners_re, '');
        }), '2');
        this.eq((Ωanybt__14 = function() {
          return '992'.replace(leading_niners_re, '');
        }), '2');
        this.eq((Ωanybt__15 = function() {
          return '92'.replace(leading_niners_re, '');
        }), '2');
        this.eq((Ωanybt__16 = function() {
          return '7'.replace(leading_niners_re, '');
        }), '7');
        return this.eq((Ωanybt__17 = function() {
          return ''.replace(leading_niners_re, '');
        }), '');
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    h10mvp_1: function() {
      var Hollerith, equals, hollerith_10, hollerith_10mvp, hollerith_128, internals, type_of, Ωanybt__18, Ωanybt__19, Ωanybt__20, Ωanybt__21, Ωanybt__22, Ωanybt__23, Ωanybt__24, Ωanybt__25, Ωanybt__26, Ωanybt__27, Ωanybt__28, Ωanybt__29, Ωanybt__30, Ωanybt__31, Ωanybt__32, Ωanybt__33, Ωanybt__34, Ωanybt__35, Ωanybt__36, Ωanybt__37, Ωanybt__38, Ωanybt__39;
      ({Hollerith, hollerith_10, hollerith_10mvp, hollerith_128, internals} = require('../../../apps/hollerith'));
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({
        isDeepStrictEqual: equals
      } = require('node:util'));
      //.......................................................................................................
      this.eq((Ωanybt__18 = function() {
        return hollerith_10mvp.encode_integer(-999);
      }), 'K000');
      this.eq((Ωanybt__19 = function() {
        return hollerith_10mvp.encode_integer(-99);
      }), 'L00');
      this.eq((Ωanybt__20 = function() {
        return hollerith_10mvp.encode_integer(-90);
      }), 'L09');
      this.eq((Ωanybt__21 = function() {
        return hollerith_10mvp.encode_integer(-11);
      }), 'L88');
      this.eq((Ωanybt__22 = function() {
        return hollerith_10mvp.encode_integer(-10);
      }), 'L89');
      this.eq((Ωanybt__23 = function() {
        return hollerith_10mvp.encode_integer(-9);
      }), 'M0');
      this.eq((Ωanybt__24 = function() {
        return hollerith_10mvp.encode_integer(-8);
      }), 'M1');
      this.eq((Ωanybt__25 = function() {
        return hollerith_10mvp.encode_integer(-7);
      }), 'M2');
      this.eq((Ωanybt__26 = function() {
        return hollerith_10mvp.encode_integer(-6);
      }), 'M3');
      this.eq((Ωanybt__27 = function() {
        return hollerith_10mvp.encode_integer(-5);
      }), 'M4');
      this.eq((Ωanybt__28 = function() {
        return hollerith_10mvp.encode_integer(-4);
      }), 'M5');
      this.eq((Ωanybt__29 = function() {
        return hollerith_10mvp.encode_integer(-3);
      }), 'M6');
      this.eq((Ωanybt__30 = function() {
        return hollerith_10mvp.encode_integer(-2);
      }), 'M7');
      this.eq((Ωanybt__31 = function() {
        return hollerith_10mvp.encode_integer(-1);
      }), 'M8');
      this.eq((Ωanybt__32 = function() {
        return hollerith_10mvp.encode_integer(0);
      }), 'N');
      this.eq((Ωanybt__33 = function() {
        return hollerith_10mvp.encode_integer(1);
      }), 'O1');
      this.eq((Ωanybt__34 = function() {
        return hollerith_10mvp.encode_integer(+9);
      }), 'O9');
      this.eq((Ωanybt__35 = function() {
        return hollerith_10mvp.encode_integer(+10);
      }), 'P10');
      this.eq((Ωanybt__36 = function() {
        return hollerith_10mvp.encode_integer(+20);
      }), 'P20');
      this.eq((Ωanybt__37 = function() {
        return hollerith_10mvp.encode_integer(+90);
      }), 'P90');
      this.eq((Ωanybt__38 = function() {
        return hollerith_10mvp.encode_integer(123);
      }), 'Q123');
      this.eq((Ωanybt__39 = function() {
        return hollerith_10mvp.encode_integer(+900);
      }), 'Q900');
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    h10mvp_2: function() {
      var Hollerith, equals, hollerith_10, hollerith_10mvp, hollerith_128, internals, type_of, Ωanybt__40, Ωanybt__41, Ωanybt__42, Ωanybt__43, Ωanybt__44, Ωanybt__45, Ωanybt__46, Ωanybt__47, Ωanybt__48, Ωanybt__49, Ωanybt__50, Ωanybt__51, Ωanybt__52, Ωanybt__53, Ωanybt__54, Ωanybt__55, Ωanybt__56, Ωanybt__57, Ωanybt__58, Ωanybt__59, Ωanybt__60, Ωanybt__61;
      ({Hollerith, hollerith_10, hollerith_10mvp, hollerith_128, internals} = require('../../../apps/hollerith'));
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({
        isDeepStrictEqual: equals
      } = require('node:util'));
      //.......................................................................................................
      this.eq((Ωanybt__40 = function() {
        return hollerith_10mvp.encode_integer(-999);
      }), hollerith_10mvp.encode(-999));
      this.eq((Ωanybt__41 = function() {
        return hollerith_10mvp.encode_integer(-99);
      }), hollerith_10mvp.encode(-99));
      this.eq((Ωanybt__42 = function() {
        return hollerith_10mvp.encode_integer(-90);
      }), hollerith_10mvp.encode(-90));
      this.eq((Ωanybt__43 = function() {
        return hollerith_10mvp.encode_integer(-11);
      }), hollerith_10mvp.encode(-11));
      this.eq((Ωanybt__44 = function() {
        return hollerith_10mvp.encode_integer(-10);
      }), hollerith_10mvp.encode(-10));
      this.eq((Ωanybt__45 = function() {
        return hollerith_10mvp.encode_integer(-9);
      }), hollerith_10mvp.encode(-9));
      this.eq((Ωanybt__46 = function() {
        return hollerith_10mvp.encode_integer(-8);
      }), hollerith_10mvp.encode(-8));
      this.eq((Ωanybt__47 = function() {
        return hollerith_10mvp.encode_integer(-7);
      }), hollerith_10mvp.encode(-7));
      this.eq((Ωanybt__48 = function() {
        return hollerith_10mvp.encode_integer(-6);
      }), hollerith_10mvp.encode(-6));
      this.eq((Ωanybt__49 = function() {
        return hollerith_10mvp.encode_integer(-5);
      }), hollerith_10mvp.encode(-5));
      this.eq((Ωanybt__50 = function() {
        return hollerith_10mvp.encode_integer(-4);
      }), hollerith_10mvp.encode(-4));
      this.eq((Ωanybt__51 = function() {
        return hollerith_10mvp.encode_integer(-3);
      }), hollerith_10mvp.encode(-3));
      this.eq((Ωanybt__52 = function() {
        return hollerith_10mvp.encode_integer(-2);
      }), hollerith_10mvp.encode(-2));
      this.eq((Ωanybt__53 = function() {
        return hollerith_10mvp.encode_integer(-1);
      }), hollerith_10mvp.encode(-1));
      this.eq((Ωanybt__54 = function() {
        return hollerith_10mvp.encode_integer(0);
      }), hollerith_10mvp.encode(0));
      this.eq((Ωanybt__55 = function() {
        return hollerith_10mvp.encode_integer(1);
      }), hollerith_10mvp.encode(1));
      this.eq((Ωanybt__56 = function() {
        return hollerith_10mvp.encode_integer(+9);
      }), hollerith_10mvp.encode(+9));
      this.eq((Ωanybt__57 = function() {
        return hollerith_10mvp.encode_integer(+10);
      }), hollerith_10mvp.encode(+10));
      this.eq((Ωanybt__58 = function() {
        return hollerith_10mvp.encode_integer(+20);
      }), hollerith_10mvp.encode(+20));
      this.eq((Ωanybt__59 = function() {
        return hollerith_10mvp.encode_integer(+90);
      }), hollerith_10mvp.encode(+90));
      this.eq((Ωanybt__60 = function() {
        return hollerith_10mvp.encode_integer(123);
      }), hollerith_10mvp.encode(123));
      this.eq((Ωanybt__61 = function() {
        return hollerith_10mvp.encode_integer(+900);
      }), hollerith_10mvp.encode(+900));
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    h10mvp_3: function() {
      var Hollerith, equals, hollerith_10, hollerith_10mvp, hollerith_128, internals, type_of, Ωanybt__62, Ωanybt__63, Ωanybt__64, Ωanybt__65, Ωanybt__66, Ωanybt__67, Ωanybt__68, Ωanybt__69, Ωanybt__70, Ωanybt__71, Ωanybt__72, Ωanybt__73, Ωanybt__74, Ωanybt__75, Ωanybt__76, Ωanybt__77, Ωanybt__78, Ωanybt__79, Ωanybt__80, Ωanybt__81, Ωanybt__82, Ωanybt__83;
      ({Hollerith, hollerith_10, hollerith_10mvp, hollerith_128, internals} = require('../../../apps/hollerith'));
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({
        isDeepStrictEqual: equals
      } = require('node:util'));
      //.......................................................................................................
      this.eq((Ωanybt__62 = function() {
        return hollerith_10mvp.encode_integer(-999);
      }), hollerith_10mvp.encode([-999]));
      this.eq((Ωanybt__63 = function() {
        return hollerith_10mvp.encode_integer(-99);
      }), hollerith_10mvp.encode([-99]));
      this.eq((Ωanybt__64 = function() {
        return hollerith_10mvp.encode_integer(-90);
      }), hollerith_10mvp.encode([-90]));
      this.eq((Ωanybt__65 = function() {
        return hollerith_10mvp.encode_integer(-11);
      }), hollerith_10mvp.encode([-11]));
      this.eq((Ωanybt__66 = function() {
        return hollerith_10mvp.encode_integer(-10);
      }), hollerith_10mvp.encode([-10]));
      this.eq((Ωanybt__67 = function() {
        return hollerith_10mvp.encode_integer(-9);
      }), hollerith_10mvp.encode([-9]));
      this.eq((Ωanybt__68 = function() {
        return hollerith_10mvp.encode_integer(-8);
      }), hollerith_10mvp.encode([-8]));
      this.eq((Ωanybt__69 = function() {
        return hollerith_10mvp.encode_integer(-7);
      }), hollerith_10mvp.encode([-7]));
      this.eq((Ωanybt__70 = function() {
        return hollerith_10mvp.encode_integer(-6);
      }), hollerith_10mvp.encode([-6]));
      this.eq((Ωanybt__71 = function() {
        return hollerith_10mvp.encode_integer(-5);
      }), hollerith_10mvp.encode([-5]));
      this.eq((Ωanybt__72 = function() {
        return hollerith_10mvp.encode_integer(-4);
      }), hollerith_10mvp.encode([-4]));
      this.eq((Ωanybt__73 = function() {
        return hollerith_10mvp.encode_integer(-3);
      }), hollerith_10mvp.encode([-3]));
      this.eq((Ωanybt__74 = function() {
        return hollerith_10mvp.encode_integer(-2);
      }), hollerith_10mvp.encode([-2]));
      this.eq((Ωanybt__75 = function() {
        return hollerith_10mvp.encode_integer(-1);
      }), hollerith_10mvp.encode([-1]));
      this.eq((Ωanybt__76 = function() {
        return hollerith_10mvp.encode_integer(0);
      }), hollerith_10mvp.encode([0]));
      this.eq((Ωanybt__77 = function() {
        return hollerith_10mvp.encode_integer(1);
      }), hollerith_10mvp.encode([1]));
      this.eq((Ωanybt__78 = function() {
        return hollerith_10mvp.encode_integer(+9);
      }), hollerith_10mvp.encode([+9]));
      this.eq((Ωanybt__79 = function() {
        return hollerith_10mvp.encode_integer(+10);
      }), hollerith_10mvp.encode([+10]));
      this.eq((Ωanybt__80 = function() {
        return hollerith_10mvp.encode_integer(+20);
      }), hollerith_10mvp.encode([+20]));
      this.eq((Ωanybt__81 = function() {
        return hollerith_10mvp.encode_integer(+90);
      }), hollerith_10mvp.encode([+90]));
      this.eq((Ωanybt__82 = function() {
        return hollerith_10mvp.encode_integer(123);
      }), hollerith_10mvp.encode([123]));
      this.eq((Ωanybt__83 = function() {
        return hollerith_10mvp.encode_integer(+900);
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
        var entry, i, idx, j, len, len1, probe, probes, sk, Ωhllt__85;
        probes = [[-999], [-99], [-90], [-11], [-10], [-9], [-8], [-7], [-6], [-5], [-4], [-3], [-2], [-1], [0], [1], [+9], [+10], [+20], [+90], [123], [+900]];
        for (idx = i = 0, len = probes.length; i < len; idx = ++i) {
          probe = probes[idx];
          sk = hollerith_10mvp.encode(probe);
          if (padding != null) {
            sk = sk.padEnd(padding, hollerith_10mvp.cfg.zpuns[0]);
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
          // debug 'Ωhllt__84', entry
          this.eq((Ωhllt__85 = function() {
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
      var Hollerith, _, equals, expected_indexes, hollerith_10mvp, i, idx, internals, j, k, l, len, len1, len2, m, pline, plines, probes, psk, real_indexes, shuffle, sk_matcher, type_of, uline, ulines, usk, vdx, Ωhllt__87, Ωhllt__89;
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
        psk = usk.padEnd(10, hollerith_10mvp.cfg.zpuns[0]);
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
          // help 'Ωhllt__86', uline
          real_indexes.push(Number(uline.replace(/^.*?\s([0-9]+)$/, '$1')));
        }
        this.eq((Ωhllt__87 = function() {
          return equals(expected_indexes, real_indexes);
        }), false);
      }
//.......................................................................................................
      for (_ = l = 1; l <= 10; _ = ++l) {
        plines = shuffle(plines);
        plines.sort();
        real_indexes = [];
        for (m = 0, len2 = plines.length; m < len2; m++) {
          pline = plines[m];
          // help 'Ωhllt__88', pline
          real_indexes.push(Number(pline.replace(/^.*?\s([0-9]+)$/, '$1')));
        }
        this.eq((Ωhllt__89 = function() {
          return equals(expected_indexes, real_indexes);
        }), true);
      }
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    h10mvp2_big_shuffle: function() {
      var Hollerith, equals, hollerith_10mvp2, i, internals, len, probes, probes_2, shuffle, type_of, vdx;
      ({Hollerith, hollerith_10mvp2, internals} = require('../../../apps/hollerith'));
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({
        isDeepStrictEqual: equals
      } = require('node:util'));
      //.......................................................................................................
      probes = [[-999], [-99], [-90], [-11], [-10], [-9], [-8], [-7], [-6], [-5], [-4], [-3], [-2], [-1], [+0, -20], [+0], [+0, +20], [+9], [+10, -3], [+10, -2], [+10, -1], [+10], [+10, +0], [+10, +1], [+10, +10, -1], [+10, +10], [+10, +20], [+20], [+20, +10], [+90], [+900], [+999]];
      shuffle = GUY.rnd.get_shuffle(57, 88);
      probes_2 = probes.slice(0);
      probes_2 = shuffle(probes_2);
      probes_2.sort(function(a, b) {
        var da, db, i, idx, ref, ref1, ref2;
        for (idx = i = 0, ref = Math.max(a.length, b.length); (0 <= ref ? i < ref : i > ref); idx = 0 <= ref ? ++i : --i) {
          da = (ref1 = a[idx]) != null ? ref1 : 0;
          db = (ref2 = b[idx]) != null ? ref2 : 0;
          if (da === db) {
            continue;
          }
          if (da < db) {
            return -1;
          }
          return +1;
        }
        return null;
      });
      for (i = 0, len = probes_2.length; i < len; i++) {
        vdx = probes_2[i];
        debug('Ωhllt_391', vdx);
      }
      // ulines            = []
      // plines            = []
      // expected_indexes  = ( idx for idx in [ 0 ... probes.length ] )
      // for [ vdx, sk_matcher, ], idx in probes
      //   usk   = hollerith_10mvp2.encode vdx
      //   @eq ( Ωhllt__90 = -> usk ), sk_matcher
      //   psk   = usk.padEnd 10, hollerith_10mvp2.cfg.zpuns[ 0 ]
      //   usk   = usk.padEnd 10, ' '
      //   ulines.push "#{usk} #{rpr vdx} #{idx}"
      //   plines.push "#{psk} #{rpr vdx} #{idx}"
      // #.......................................................................................................
      // for _ in [ 1 .. 10 ]
      //   ulines = shuffle ulines
      //   ulines.sort()
      //   real_indexes = []
      //   for uline in ulines
      //     # help 'Ωhllt__91', uline
      //     real_indexes.push Number uline.replace /^.*?\s([0-9]+)$/, '$1'
      //   @eq ( Ωhllt__92 = -> equals expected_indexes, real_indexes ), false
      // #.......................................................................................................
      // for _ in [ 1 .. 10 ]
      //   plines = shuffle plines
      //   plines.sort()
      //   real_indexes = []
      //   for pline in plines
      //     # help 'Ωhllt__93', pline
      //     real_indexes.push Number pline.replace /^.*?\s([0-9]+)$/, '$1'
      //   @eq ( Ωhllt__94 = -> equals expected_indexes, real_indexes ), true
      // #.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    h128_16383_sorting_2: function() {
      var Hollerith, _, codec, equals, expected_indexes, hollerith_128_16383, i, idx, internals, j, k, l, len, len1, len2, m, padded_lines, pline, probes, psk, real_indexes, shuffle, sk_matcher, type_of, uline, unpadded_lines, usk, vdx, Ωhllt_100, Ωhllt_101, Ωhllt_102, Ωhllt_103, Ωhllt_104, Ωhllt_105, Ωhllt_106, Ωhllt_107, Ωhllt_108, Ωhllt_109, Ωhllt_110, Ωhllt_111, Ωhllt_112, Ωhllt_113, Ωhllt_114, Ωhllt_115, Ωhllt_116, Ωhllt_117, Ωhllt_118, Ωhllt_119, Ωhllt_120, Ωhllt_121, Ωhllt_122, Ωhllt_123, Ωhllt_124, Ωhllt_125, Ωhllt_126, Ωhllt_127, Ωhllt_128, Ωhllt_129, Ωhllt_130, Ωhllt_131, Ωhllt_132, Ωhllt_133, Ωhllt_134, Ωhllt_135, Ωhllt_136, Ωhllt_137, Ωhllt_138, Ωhllt_139, Ωhllt_140, Ωhllt_141, Ωhllt_142, Ωhllt_143, Ωhllt_144, Ωhllt_145, Ωhllt_146, Ωhllt_147, Ωhllt_148, Ωhllt_149, Ωhllt_150, Ωhllt_152, Ωhllt_154, Ωhllt__97, Ωhllt__98, Ωhllt__99;
      ({Hollerith, hollerith_128_16383, internals} = require('../../../apps/hollerith'));
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({
        isDeepStrictEqual: equals
      } = require('node:util'));
      //.......................................................................................................
      probes = [[[-999], 'Í¿;'], [[-99], 'Î?'], [[-90], 'ÎH'], [[-80], 'ÎR'], [[-21], 'Î±'], [[-20], 'Ï'], [[-11], 'Ø'], [[-10], 'Ù'], [[-9], 'Ú'], [[-8], 'Û'], [[-7], 'Ü'], [[-6], 'Ý'], [[-5], 'Þ'], [[-4], 'ß'], [[-3], 'à'], [[-2], 'á'], [[-1], 'â'], [[+0, -20], 'ãÏ'], [[+0], 'ã'], [[+0, +20], 'ã÷'], [[+9], 'ì'], [[+10, -3], 'íà'], [[+10, -2], 'íá'], [[+10, -1], 'íâ'], [[+10], 'í'], [[+10, +0], 'íã'], [[+10, +1], 'íä'], [[+10, +10, -1], 'ííâ'], [[+10, +10], 'íí'], [[+10, +20], 'í÷'], [[+20], '÷'], [[+20, +10], '÷í'], [[+90], 'ø~'], [[+900], 'ù*&']];
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
      // debug 'Ωhllt__95', codec.cfg._max_digits_per_idx
      // debug 'Ωhllt__96', codec.cfg.zero_pad_length
      this.eq((Ωhllt__97 = function() {
        return codec.cfg.base;
      }), 128);
      this.eq((Ωhllt__98 = function() {
        return codec.cfg._max_integer;
      }), +16383);
      this.eq((Ωhllt__99 = function() {
        return codec.cfg._min_integer;
      }), -16383);
      this.eq((Ωhllt_100 = function() {
        return codec.cfg.pmag_chrs[2];
      }), 'ù');
      this.eq((Ωhllt_101 = function() {
        return codec.cfg.nmag_chrs[2];
      }), 'Í');
      this.eq((Ωhllt_102 = function() {
        return codec.encode(codec.cfg._max_integer);
      }), 'ùÆÆ');
      this.eq((Ωhllt_103 = function() {
        return codec.encode(codec.cfg._min_integer);
      }), 'Í!!');
      this.eq((Ωhllt_104 = function() {
        return codec.decode('Í!!');
      }), [-16383]);
      this.throws((Ωhllt_105 = function() {
        return codec.decode('Ç!!!!!!!!');
      }), /not a valid sortkey/);
//.......................................................................................................
      for (idx = i = 0, len = probes.length; i < len; idx = ++i) {
        [vdx, sk_matcher] = probes[idx];
        usk = codec.encode(vdx);
        this.eq((Ωhllt_106 = function() {
          return usk;
        }), sk_matcher);
        // echo rpr usk
        psk = usk.padEnd(10, codec.cfg._cipher);
        usk = usk.padEnd(10, ' ');
        unpadded_lines.push(`${usk} ${rpr(vdx)} ${idx}`);
        padded_lines.push(`${psk} ${rpr(vdx)} ${idx}`);
      }
      //.......................................................................................................
      this.eq((Ωhllt_107 = function() {
        return codec.cfg._max_digits_per_idx;
      }), 2);
      this.eq((Ωhllt_108 = function() {
        return codec.cfg.zpun_max;
      }), 20);
      this.eq((Ωhllt_109 = function() {
        return codec.cfg._naught;
      }), '!');
      this.eq((Ωhllt_110 = function() {
        return codec.cfg._nova;
      }), 'Æ');
      this.eq((Ωhllt_111 = function() {
        return codec.cfg._cipher;
      }), 'ã');
      this.eq((Ωhllt_112 = function() {
        return codec.cfg.nmag;
      }), ' ÎÍ');
      this.eq((Ωhllt_113 = function() {
        return codec.cfg.pmag;
      }), ' øù');
      this.eq((Ωhllt_114 = function() {
        return codec.cfg.pmag_chrs[codec.cfg._max_digits_per_idx];
      }), 'ù');
      this.eq((Ωhllt_115 = function() {
        return codec.encode(-16383);
      }), 'Í!!');
      this.eq((Ωhllt_116 = function() {
        return codec.encode(-16382);
      }), 'Í!#');
      this.eq((Ωhllt_117 = function() {
        return codec.encode(-129);
      }), 'ÍÅÅ');
      this.eq((Ωhllt_118 = function() {
        return codec.encode(-128);
      }), 'ÍÅÆ');
      this.eq((Ωhllt_119 = function() {
        return codec.encode(-127);
      }), 'Î!');
      this.eq((Ωhllt_120 = function() {
        return codec.encode(-80);
      }), 'ÎR');
      this.eq((Ωhllt_121 = function() {
        return codec.encode(-21);
      }), 'Î±');
      this.eq((Ωhllt_122 = function() {
        return codec.encode(-21);
      }), 'Î±');
      this.eq((Ωhllt_123 = function() {
        return codec.encode(-20);
      }), 'Ï');
      this.eq((Ωhllt_124 = function() {
        return codec.encode(-1);
      }), 'â');
      this.eq((Ωhllt_125 = function() {
        return codec.encode(+0);
      }), 'ã');
      this.eq((Ωhllt_126 = function() {
        return codec.encode(+1);
      }), 'ä');
      this.eq((Ωhllt_127 = function() {
        return codec.encode(+20);
      }), '÷');
      this.eq((Ωhllt_128 = function() {
        return codec.encode(+21);
      }), 'ø8');
      this.eq((Ωhllt_129 = function() {
        return codec.encode(+127);
      }), 'øÆ');
      this.eq((Ωhllt_130 = function() {
        return codec.encode(+128);
      }), 'ù#!');
      this.eq((Ωhllt_131 = function() {
        return codec.encode(+129);
      }), 'ù##');
      this.eq((Ωhllt_132 = function() {
        return codec.encode(+16382);
      }), 'ùÆÅ');
      this.eq((Ωhllt_133 = function() {
        return codec.encode(+16383);
      }), 'ùÆÆ');
      //.......................................................................................................
      this.eq((Ωhllt_134 = function() {
        return codec.decode('Í!!');
      }), [-16383]);
      this.eq((Ωhllt_135 = function() {
        return codec.decode('Í!#');
      }), [-16382]);
      this.eq((Ωhllt_136 = function() {
        return codec.decode('ÍÅÅ');
      }), [-129]);
      this.eq((Ωhllt_137 = function() {
        return codec.decode('ÍÅÆ');
      }), [-128]);
      this.eq((Ωhllt_138 = function() {
        return codec.decode('Î!');
      }), [-127]);
      this.eq((Ωhllt_139 = function() {
        return codec.decode('Î±');
      }), [-21]);
      this.eq((Ωhllt_140 = function() {
        return codec.decode('Ï');
      }), [-20]);
      this.eq((Ωhllt_141 = function() {
        return codec.decode('â');
      }), [-1]);
      this.eq((Ωhllt_142 = function() {
        return codec.decode('ã');
      }), [0]);
      this.eq((Ωhllt_143 = function() {
        return codec.decode('ä');
      }), [1]);
      this.eq((Ωhllt_144 = function() {
        return codec.decode('÷');
      }), [20]);
      this.eq((Ωhllt_145 = function() {
        return codec.decode('ø8');
      }), [21]);
      this.eq((Ωhllt_146 = function() {
        return codec.decode('øÆ');
      }), [127]);
      this.eq((Ωhllt_147 = function() {
        return codec.decode('ù#!');
      }), [128]);
      this.eq((Ωhllt_148 = function() {
        return codec.decode('ù##');
      }), [129]);
      this.eq((Ωhllt_149 = function() {
        return codec.decode('ùÆÅ');
      }), [16382]);
      this.eq((Ωhllt_150 = function() {
        return codec.decode('ùÆÆ');
      }), [16383]);
//.......................................................................................................
      for (_ = j = 1; j <= 10; _ = ++j) {
        unpadded_lines = shuffle(unpadded_lines);
        unpadded_lines.sort();
        real_indexes = [];
        for (k = 0, len1 = unpadded_lines.length; k < len1; k++) {
          uline = unpadded_lines[k];
          // help 'Ωhllt_151', uline
          real_indexes.push(Number(uline.replace(/^.*?\s([0-9]+)$/, '$1')));
        }
        this.eq((Ωhllt_152 = function() {
          return equals(expected_indexes, real_indexes);
        }), false);
      }
//.......................................................................................................
      for (_ = l = 1; l <= 10; _ = ++l) {
        padded_lines = shuffle(padded_lines);
        padded_lines.sort();
        real_indexes = [];
        for (idx = m = 0, len2 = padded_lines.length; m < len2; idx = ++m) {
          pline = padded_lines[idx];
          // help 'Ωhllt_153', rpr pline if _ is 1
          real_indexes.push(Number(pline.replace(/^.*?\s([0-9]+)$/, '$1')));
        }
        this.eq((Ωhllt_154 = function() {
          return equals(expected_indexes, real_indexes);
        }), true);
      }
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    h128_decode: function() {
      var Hollerith, codec, equals, hollerith_128, i, index_matcher, index_result, internals, j, len, len1, probes_and_matchers, ref, sortkey, type_of, unit, unit_matcher, unit_result, Ωhllt_157, Ωhllt_158, Ωhllt_160;
      ({Hollerith, hollerith_128, internals} = require('../../../apps/hollerith'));
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({
        isDeepStrictEqual: equals
      } = require('node:util'));
      //.......................................................................................................
      probes_and_matchers = [['Ç!ÆÆÆÆÆ¿;ã', [-999], 'nnum:Í,¿;[-999]|padding:ããããããã'], ['Ç!ÆÆÆÆÆÆ?ã', [-99], 'nnum:Î,?[-99]|padding:ãããããããã'], ['Ç!ÆÆÆÆÆÆHã', [-90], 'nnum:Î,H[-90]|padding:ãããããããã'], ['Øããããããããã', [-11], 'nun:Ø[-11]|padding:ããããããããã'], ['Ùããããããããã', [-10], 'nun:Ù[-10]|padding:ããããããããã'], ['Úããããããããã', [-9], 'nun:Ú[-9]|padding:ããããããããã'], ['Ûããããããããã', [-8], 'nun:Û[-8]|padding:ããããããããã'], ['Üããããããããã', [-7], 'nun:Ü[-7]|padding:ããããããããã'], ['Ýããããããããã', [-6], 'nun:Ý[-6]|padding:ããããããããã'], ['Þããããããããã', [-5], 'nun:Þ[-5]|padding:ããããããããã'], ['ßããããããããã', [-4], 'nun:ß[-4]|padding:ããããããããã'], ['àããããããããã', [-3], 'nun:à[-3]|padding:ããããããããã'], ['áããããããããã', [-2], 'nun:á[-2]|padding:ããããããããã'], ['âããããããããã', [-1], 'nun:â[-1]|padding:ããããããããã'], ['ãÏãããããããã', [0, -20], 'zero:ã[0]|nun:Ï[-20]|padding:ãããããããã'], ['ãããããããããã', [0], 'padding:ãããããããããã[0]'], ['ã÷ãããããããã', [0, 20], 'zero:ã[0]|pun:÷[20]|padding:ãããããããã'], ['ìããããããããã', [9], 'pun:ì[9]|padding:ããããããããã'], ['íàãããããããã', [10, -3], 'pun:í[10]|nun:à[-3]|padding:ãããããããã'], ['íáãããããããã', [10, -2], 'pun:í[10]|nun:á[-2]|padding:ãããããããã'], ['íâãããããããã', [10, -1], 'pun:í[10]|nun:â[-1]|padding:ãããããããã'], ['íããããããããã', [10], 'pun:í[10]|padding:ããããããããã'], ['íäãããããããã', [10, 1], 'pun:í[10]|pun:ä[1]|padding:ãããããããã'], ['ííâããããããã', [10, 10, -1], 'pun:í[10]|pun:í[10]|nun:â[-1]|padding:ããããããã'], ['ííãããããããã', [10, 10], 'pun:í[10]|pun:í[10]|padding:ãããããããã'], ['í÷ãããããããã', [10, 20], 'pun:í[10]|pun:÷[20]|padding:ãããããããã'], ['÷ããããããããã', [20], 'pun:÷[20]|padding:ããããããããã'], ['÷íãããããããã', [20, 10], 'pun:÷[20]|pun:í[10]|padding:ãããããããã'], ['ø~ãããããããã', [90], 'pnum:ø,~[90]|padding:ãããããããã'], ['ù*&ããããããã', [900], 'pnum:ù,*&[900]|padding:ããããããã']];
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
        // info 'Ωhllt_155', f"#{( rpr unit_result ) + ','}:<60c; #{rpr index_result}"
        //   @eq ( Ωhllt_156 = ->  unit_result                     ),  unit_matcher
        this.eq((Ωhllt_157 = function() {
          return index_result;
        }), index_matcher);
        this.eq((Ωhllt_158 = function() {
          return sortkey;
        }), (codec.encode(index_matcher)).padEnd(sortkey.length, codec.cfg.zpuns[0]));
        // debug 'Ωhllt_159', rpr ( codec.encode index_matcher ).padEnd sortkey.length, codec.cfg.zpuns[ 0 ]
        this.eq((Ωhllt_160 = function() {
          return codec.decode(sortkey);
        }), index_matcher);
      }
      // echo [ sortkey, index_result, unit_result, ]
      //.......................................................................................................
      // @eq     ( Ωhllt_161 = -> codec.parse '5'          ), [ { name: 'other', letters: '5', mantissa: null, index: null } ]
      // @eq     ( Ωhllt_162 = -> codec.parse 'äöü'        ), [ { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
      // @eq     ( Ωhllt_163 = -> codec.parse 'Y900äöü'    ), [ { name: 'pnum', letters: 'Y', mantissa: '900', index: 900 }, { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
      // @throws ( Ωhllt_164 = -> codec.decode '5'         ), /not a valid sortkey: unable to parse '5'/
      // @throws ( Ωhllt_165 = -> codec.decode 'äöü'       ), /not a valid sortkey: unable to parse 'äöü'/
      // @throws ( Ωhllt_166 = -> codec.decode 'äöü'       ), /not a valid sortkey: unable to parse 'ü' in 'Y900äöü'/
      // @throws ( Ωhllt_167 = -> codec.decode 'Y900äöü'   ), /not a valid sortkey: unable to parse 'Y900' in 'Y900äöü'/
      //.......................................................................................................
      // debug 'Ωhllt_168', rpr codec.encode -90 #    [ 'Í¿;ããããããã', [ -999,         ], 'nnum:Í,¿;[-999]|padding:ããããããã',                 ]
      // debug 'Ωhllt_169', rpr codec.decode 'Ç!ÆÆÆÆÆÆH' #    [ 'Í¿;ããããããã', [ -999,         ], 'nnum:Í,¿;[-999]|padding:ããããããã',                 ]
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    h10mvp2_decode_units: function() {
      /* NOTE also see corresponding test in `hengist-NG/dev/interlex/src/test-hollerith.coffee` */
      var Hollerith, codec, hollerith_10mvp2, i, index_matcher, index_result, internals, j, len, len1, probes_and_matchers, ref, sortkey, sortkey_padder, type_of, unit, unit_matcher, unit_result, Ωhllt_171, Ωhllt_172, Ωhllt_173, Ωhllt_174, Ωhllt_175, Ωhllt_176, Ωhllt_177, Ωhllt_178, Ωhllt_179, Ωhllt_180;
      ({type_of} = SFMODULES.unstable.require_type_of());
      //.......................................................................................................
      ({Hollerith, hollerith_10mvp2, internals} = require('../../../apps/hollerith'));
      // { isDeepStrictEqual: equals, } = require 'node:util'
      //.......................................................................................................
      probes_and_matchers = [['A000NNNNNN', [-999], 'nnum:A,000[-999]|padding:NNNNNN'], ['B00NNNNNNN', [-99], 'nnum:B,00[-99]|padding:NNNNNNN'], ['B09NNNNNNN', [-90], 'nnum:B,09[-90]|padding:NNNNNNN'], ['B88NNNNNNN', [-11], 'nnum:B,88[-11]|padding:NNNNNNN'], ['B89NNNNNNN', [-10], 'nnum:B,89[-10]|padding:NNNNNNN'], ['ENNNNNNNNN', [-9], 'nun:E[-9]|padding:NNNNNNNNN'], ['FNNNNNNNNN', [-8], 'nun:F[-8]|padding:NNNNNNNNN'], ['GNNNNNNNNN', [-7], 'nun:G[-7]|padding:NNNNNNNNN'], ['HNNNNNNNNN', [-6], 'nun:H[-6]|padding:NNNNNNNNN'], ['INNNNNNNNN', [-5], 'nun:I[-5]|padding:NNNNNNNNN'], ['JNNNNNNNNN', [-4], 'nun:J[-4]|padding:NNNNNNNNN'], ['KNNNNNNNNN', [-3], 'nun:K[-3]|padding:NNNNNNNNN'], ['LNNNNNNNNN', [-2], 'nun:L[-2]|padding:NNNNNNNNN'], ['MNNNNNNNNN', [-1], 'nun:M[-1]|padding:NNNNNNNNN'], ['NB79NNNNNN', [0, -20], 'zero:N[0]|nnum:B,79[-20]|padding:NNNNNN'], ['NNNNNNNNNN', [0], 'padding:NNNNNNNNNN[0]'], ['NY20NNNNNN', [0, 20], 'zero:N[0]|pnum:Y,20[20]|padding:NNNNNN'], ['WNNNNNNNNN', [9], 'pun:W[9]|padding:NNNNNNNNN'], ['Y10KNNNNNN', [10, -3], 'pnum:Y,10[10]|nun:K[-3]|padding:NNNNNN'], ['Y10LNNNNNN', [10, -2], 'pnum:Y,10[10]|nun:L[-2]|padding:NNNNNN'], ['Y10MNNNNNN', [10, -1], 'pnum:Y,10[10]|nun:M[-1]|padding:NNNNNN'], ['Y10NNNNNNN', [10], 'pnum:Y,10[10]|padding:NNNNNNN'], ['Y10ONNNNNN', [10, 1], 'pnum:Y,10[10]|pun:O[1]|padding:NNNNNN'], ['Y10Y10MNNN', [10, 10, -1], 'pnum:Y,10[10]|pnum:Y,10[10]|nun:M[-1]|padding:NNN'], ['Y10Y10NNNN', [10, 10], 'pnum:Y,10[10]|pnum:Y,10[10]|padding:NNNN'], ['Y10Y20NNNN', [10, 20], 'pnum:Y,10[10]|pnum:Y,20[20]|padding:NNNN'], ['Y20NNNNNNN', [20], 'pnum:Y,20[20]|padding:NNNNNNN'], ['Y20Y10NNNN', [20, 10], 'pnum:Y,20[20]|pnum:Y,10[10]|padding:NNNN'], ['Y90NNNNNNN', [90], 'pnum:Y,90[90]|padding:NNNNNNN'], ['Z900NNNNNN', [900], 'pnum:Z,900[900]|padding:NNNNNN'], ['NNNNNNNNN', [0], 'padding:NNNNNNNNN[0]'], ['NN', [0], 'padding:NN[0]'], ['N', [0], 'padding:N[0]'], ['Y10', [10], 'pnum:Y,10[10]'], ['K', [-3], 'nun:K[-3]']];
      //.......................................................................................................
      codec = hollerith_10mvp2;
      sortkey_padder = codec.cfg.zpun_chrs[0];
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
        // info 'Ωhllt_170', f"#{( rpr unit_result ) + ','}:<60c; #{rpr index_result}"
        this.eq((Ωhllt_171 = function() {
          return unit_result;
        }), unit_matcher);
        this.eq((Ωhllt_172 = function() {
          return index_result;
        }), index_matcher);
        this.eq((Ωhllt_173 = function() {
          return codec.decode(sortkey);
        }), index_matcher);
        this.eq((Ωhllt_174 = function() {
          return sortkey;
        }), (codec.encode(index_matcher)).padEnd(sortkey.length, sortkey_padder));
      }
      // echo [ sortkey, index_result, unit_result, ]
      //.......................................................................................................
      this.eq((Ωhllt_175 = function() {
        return codec.parse('5');
      }), [
        {
          name: 'other',
          letters: '5',
          mantissa: null,
          index: null
        }
      ]);
      this.eq((Ωhllt_176 = function() {
        return codec.parse('äöü');
      }), [
        {
          name: 'other',
          letters: 'äöü',
          mantissa: null,
          index: null
        }
      ]);
      this.eq((Ωhllt_177 = function() {
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
      this.throws((Ωhllt_178 = function() {
        return codec.decode('5');
      }), /not a valid sortkey: unable to parse '5'/);
      this.throws((Ωhllt_179 = function() {
        return codec.decode('äöü');
      }), /not a valid sortkey: unable to parse 'äöü'/);
      this.throws((Ωhllt_180 = function() {
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
    //   debug 'Ωhllt_181', rpr codec.encode -1
    //   debug 'Ωhllt_182', rpr codec.encode -2
    //   n =   -100; urge 'Ωhllt_183', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =    -21; urge 'Ωhllt_184', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =    -20; urge 'Ωhllt_185', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =    -19; urge 'Ωhllt_186', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =     -1; urge 'Ωhllt_187', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =      0; urge 'Ωhllt_188', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =      1; urge 'Ωhllt_189', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =      2; urge 'Ωhllt_190', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =      3; urge 'Ωhllt_191', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =     10; urge 'Ωhllt_192', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =    126; urge 'Ωhllt_193', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =    127; urge 'Ωhllt_194', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =    128; urge 'Ωhllt_195', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =    129; urge 'Ωhllt_196', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   # for [ sortkey, index_matcher, unit_matcher, ] in probes_and_matchers
    //   #   unit_result     = []
    //   #   index_result    = []
    //   #   for unit in codec.parse sortkey
    //   #     unit_result.push  helpers.rpr_unit unit
    //   #     index_result.push unit.index if unit.index?
    //   #   unit_result   = unit_result.join '|'
    //   #   info 'Ωhllt_197', f"#{( rpr unit_result ) + ','}:<60c; #{rpr index_result}"
    //   # #   @eq ( Ωhllt_198 = ->  unit_result                     ),  unit_matcher
    //   #   @eq ( Ωhllt_199 = -> index_result                     ), index_matcher
    //   #   @eq ( Ωhllt_200 = -> sortkey ), ( codec.encode index_matcher ).padEnd sortkey.length, codec.cfg.zpuns[ 0 ]
    //   #   debug 'Ωhllt_201', rpr ( codec.encode index_matcher ).padEnd sortkey.length, codec.cfg.zpuns[ 0 ]
    //   #   @eq ( Ωhllt_202 = -> codec.decode sortkey  ), index_matcher
    //   #   # echo [ sortkey, index_result, unit_result, ]
    //   # #.......................................................................................................
    //   # @eq     ( Ωhllt_203 = -> codec.parse '5'         ), [ { name: 'other', letters: '5', mantissa: null, index: null } ]
    //   # @eq     ( Ωhllt_204 = -> codec.parse 'äöü'       ), [ { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
    //   # @eq     ( Ωhllt_205 = -> codec.parse 'Y900äöü'   ), [ { name: 'pnum', letters: 'Y', mantissa: '900', index: 900 }, { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
    //   # @throws ( Ωhllt_206 = -> codec.decode '5'        ), /not a valid sortkey: unable to parse '5'/
    //   # @throws ( Ωhllt_207 = -> codec.decode 'äöü'      ), /not a valid sortkey: unable to parse 'äöü'/
    //   # @throws ( Ωhllt_208 = -> codec.decode 'Y900äöü'  ), /not a valid sortkey: unable to parse 'äöü' in 'Y900äöü'/
    //   #.......................................................................................................
    //   return null

    //---------------------------------------------------------------------------------------------------------
    types: function() {
      var CFG, Hollerith_typespace, T, equals, internals, pick, type_of, Ωhllt_224, Ωhllt_225, Ωhllt_226, Ωhllt_227, Ωhllt_228, Ωhllt_229, Ωhllt_230, Ωhllt_231, Ωhllt_232, Ωhllt_233, Ωhllt_234, Ωhllt_235, Ωhllt_236, Ωhllt_237, Ωhllt_238, Ωhllt_239, Ωhllt_240, Ωhllt_241, Ωhllt_242, Ωhllt_243, Ωhllt_244, Ωhllt_245, Ωhllt_246, Ωhllt_247, Ωhllt_248, Ωhllt_249, Ωhllt_250, Ωhllt_251, Ωhllt_252, Ωhllt_253, Ωhllt_254, Ωhllt_255, Ωhllt_256, Ωhllt_257, Ωhllt_258, Ωhllt_259, Ωhllt_260, Ωhllt_261, Ωhllt_262, Ωhllt_263, Ωhllt_264, Ωhllt_265, Ωhllt_266, Ωhllt_267, Ωhllt_268, Ωhllt_269;
      ({internals, Hollerith_typespace, CFG} = require('../../../apps/hollerith/lib/types'));
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({
        isDeepStrictEqual: equals
      } = require('node:util'));
      ({pick} = SFMODULES.unstable.require_pick());
      (() => {        //.......................................................................................................
        var T, Ωhllt_209, Ωhllt_210, Ωhllt_211, Ωhllt_212, Ωhllt_213;
        T = new Hollerith_typespace();
        this.eq((Ωhllt_209 = function() {
          return T[CFG].blank;
        }), '\x20');
        this.eq((Ωhllt_210 = function() {
          return T[CFG].blank_splitter;
        }), /(?:\x20)+/gv);
        this.eq((Ωhllt_211 = function() {
          return T[CFG].blank_splitter.unicodeSets;
        }), true);
        this.eq((Ωhllt_212 = function() {
          return T[CFG].blank_splitter.global;
        }), true);
        this.eq((Ωhllt_213 = function() {
          return 'a   g  z  '.replace(T[CFG].blank_splitter, 'ü');
        }), 'aügüzü');
        return null;
      })();
      (() => {        //.......................................................................................................
        var T, Ωhllt_214, Ωhllt_215, Ωhllt_216, Ωhllt_217, Ωhllt_218, Ωhllt_219, Ωhllt_220, Ωhllt_221, Ωhllt_222, Ωhllt_223;
        T = new Hollerith_typespace({
          blank: '#'
        });
        this.eq((Ωhllt_214 = function() {
          return T[CFG].blank;
        }), '#');
        this.eq((Ωhllt_215 = function() {
          return T[CFG].blank_splitter;
        }), /(?:\x23)+/gv);
        this.eq((Ωhllt_216 = function() {
          return T[CFG].blank_splitter.unicodeSets;
        }), true);
        this.eq((Ωhllt_217 = function() {
          return T[CFG].blank_splitter.global;
        }), true);
        this.eq((Ωhllt_218 = function() {
          return 'a###g##z##'.replace(T[CFG].blank_splitter, 'ü');
        }), 'aügüzü');
        this.eq((Ωhllt_219 = function() {
          return T.magnifiers.isa('ABC XYZ');
        }), false);
        this.eq((Ωhllt_220 = function() {
          return T.magnifiers.isa('ABC#XYZ');
        }), true);
        this.eq((Ωhllt_221 = function() {
          return T.blank.isa(' ');
        }), false);
        this.eq((Ωhllt_222 = function() {
          return T.blank.isa('#');
        }), true);
        this.eq((Ωhllt_223 = function() {
          return T.blank.isa(T[CFG].blank);
        }), true);
        return null;
      })();
      //.......................................................................................................
      T = new Hollerith_typespace();
      this.eq((Ωhllt_224 = function() {
        return T.nonempty_text.isa(4);
      }), false);
      this.eq((Ωhllt_225 = function() {
        return T.nonempty_text.isa(false);
      }), false);
      this.eq((Ωhllt_226 = function() {
        return T.nonempty_text.isa('');
      }), false);
      this.eq((Ωhllt_227 = function() {
        return T.nonempty_text.isa('yes');
      }), true);
      //.......................................................................................................
      this.eq((Ωhllt_228 = function() {
        return T.incremental_text.isa('yes');
      }), false);
      this.eq((Ωhllt_229 = function() {
        return T.decremental_text.isa('yes');
      }), false);
      this.eq((Ωhllt_230 = function() {
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
      this.eq((Ωhllt_231 = function() {
        return T.incremental_text.isa('abcdefz');
      }), true);
      this.eq((Ωhllt_232 = function() {
        return T.decremental_text.isa('abcdefz');
      }), false);
      this.eq((Ωhllt_233 = function() {
        return T.incremental_text.data;
      }), {
        chrs: ['a', 'b', 'c', 'd', 'e', 'f', 'z']
      });
      this.eq((Ωhllt_234 = function() {
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
      this.eq((Ωhllt_235 = function() {
        return T.incremental_text.isa('abc0');
      }), false);
      this.eq((Ωhllt_236 = function() {
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
      this.eq((Ωhllt_237 = function() {
        return T.decremental_text.isa('cba');
      }), true);
      this.eq((Ωhllt_238 = function() {
        return T.decremental_text.data;
      }), {
        chrs: ['c', 'b', 'a']
      });
      //.......................................................................................................
      this.eq((Ωhllt_239 = function() {
        return T.magnifiers.isa('');
      }), false);
      this.eq((Ωhllt_240 = function() {
        return T.magnifiers.data;
      }), {
        message: "expected a magnifier, got an empty text"
      });
      this.eq((Ωhllt_241 = function() {
        return T.magnifiers.isa('ABC XYZ');
      }), true);
      this.eq((Ωhllt_242 = function() {
        return pick(T.magnifiers.data, ['nmag_chrs_reversed', 'pmag_chrs', 'nmag', 'pmag']);
      }), {
        nmag_chrs_reversed: ['A', 'B', 'C'],
        pmag_chrs: [' ', 'X', 'Y', 'Z'],
        nmag: ' CBA',
        pmag: ' XYZ'
      });
      this.eq((Ωhllt_243 = function() {
        return Object.isFrozen(T.magnifiers.data.nmag_chrs_reversed);
      }), true);
      this.eq((Ωhllt_244 = function() {
        return Object.isFrozen(T.magnifiers.data.pmag_chrs);
      }), true);
      this.eq((Ωhllt_245 = function() {
        return T.magnifiers.isa('ABC\nXYZ');
      }), false);
      this.eq((Ωhllt_246 = function() {
        return T.magnifiers.isa('ABC\tXYZ');
      }), false);
      this.eq((Ωhllt_247 = function() {
        return T.magnifiers.isa('ABC             XYZ');
      }), true);
      this.eq((Ωhllt_248 = function() {
        return T.magnifiers.isa('ABC DX YZ');
      }), false);
      this.eq((Ωhllt_249 = function() {
        return T.magnifiers.isa('ABD CXYZ');
      }), false);
      //.......................................................................................................
      this.eq((Ωhllt_250 = function() {
        return T.uniliterals.isa(null);
      }), false);
      this.eq((Ωhllt_251 = function() {
        return T.uniliterals.isa('');
      }), false);
      this.eq((Ωhllt_252 = function() {
        return T.uniliterals.isa('VBA');
      }), false);
      this.eq((Ωhllt_253 = function() {
        return T.uniliterals.isa('EFGHIJKLM NOPQRSTUVW');
      }), false);
      this.eq((Ωhllt_254 = function() {
        return T.uniliterals.isa('EFGHIJKLM N OPQRSTUVW');
      }), true);
      this.eq((Ωhllt_255 = function() {
        return T.uniliterals.data;
      }), {
        nuns: 'EFGHIJKLM',
        zpuns: 'NOPQRSTUVW',
        nun_chrs: ['E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'],
        zpun_chrs: ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W']
      });
      this.eq((Ωhllt_256 = function() {
        return T.uniliterals.isa('N');
      }), true);
      this.eq((Ωhllt_257 = function() {
        return T.uniliterals.data;
      }), {
        nuns: '',
        zpuns: 'N',
        nun_chrs: [],
        zpun_chrs: ['N']
      });
      //.......................................................................................................
      this.throws((Ωhllt_258 = function() {
        return T.alphabet.validate(null);
      }), /not a valid alphabet/);
      this.throws((Ωhllt_259 = function() {
        return T.alphabet.validate('');
      }), /not a valid alphabet/);
      this.throws((Ωhllt_260 = function() {
        return T.alphabet.validate('a');
      }), /not a valid alphabet/);
      this.eq((Ωhllt_261 = function() {
        return T.alphabet.validate('ab');
      }), 'ab');
      //.......................................................................................................
      this.throws((Ωhllt_262 = function() {
        return new Hollerith_typespace({
          blank: null
        });
      }), /not a valid blank/);
      this.throws((Ωhllt_263 = function() {
        return new Hollerith_typespace({
          blank: ''
        });
      }), /not a valid blank/);
      this.throws((Ωhllt_264 = function() {
        return new Hollerith_typespace({
          blank: '--'
        });
      }), /not a valid blank/);
      this.throws((Ωhllt_265 = function() {
        return (new Hollerith_typespace({
          blank: null
        })).blank.validate(null);
      }), /not a valid blank/);
      this.throws((Ωhllt_266 = function() {
        return (new Hollerith_typespace({
          blank: ''
        })).blank.validate('');
      }), /not a valid blank/);
      this.throws((Ωhllt_267 = function() {
        return (new Hollerith_typespace({
          blank: '--'
        })).blank.validate('--');
      }), /not a valid blank/);
      this.eq((Ωhllt_268 = function() {
        return (new Hollerith_typespace({
          blank: '-'
        })).blank.validate('-');
      }), '-');
      this.eq((Ωhllt_269 = function() {
        return (new Hollerith_typespace({
          blank: ' '
        })).blank.validate(' ');
      }), ' ');
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    validate_and_compile_cfg_general: function() {
      var CFG, Hollerith, Hollerith_typespace, internals, is_frozen, Ωhllt_270;
      ({internals, Hollerith} = require('../../../apps/hollerith'));
      ({Hollerith_typespace, CFG} = require('../../../apps/hollerith/lib/types'));
      ({
        // { type_of,                    } = SFMODULES.unstable.require_type_of()
        // { isDeepStrictEqual: equals,  } = require 'node:util'
        isFrozen: is_frozen
      } = Object);
      //.......................................................................................................
      /* testing a general assumption so we don't mess up: */
      this.eq((Ωhllt_270 = function() {
        return (Number.MAX_SAFE_INTEGER - 1) === -(Number.MIN_SAFE_INTEGER + 1);
      }), true);
      (() => {        //.......................................................................................................
        var Ωhllt_271, Ωhllt_272, Ωhllt_273;
        // T = new Hollerith_typespace()
        this.throws((Ωhllt_271 = function() {
          return Hollerith.validate_and_compile_cfg({});
        }), /not a valid alphabet/);
        this.throws((Ωhllt_272 = function() {
          return Hollerith.validate_and_compile_cfg({
            alphabet: ''
          });
        }), /not a valid alphabet/);
        this.throws((Ωhllt_273 = function() {
          return Hollerith.validate_and_compile_cfg({
            alphabet: 'a'
          });
        }), /not a valid alphabet/);
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
        alphabet: '0123456789', // digits; length of `alphabet` is the `base`
        magnifiers: 'ABC XYZ', 
        uniliterals: 'FGHIJKLM N OPQRSTUV', // negative uniliterals, blank, zero uniliteral, blank, positive uniliterals
        dimension: 3 // number of indices supported
      };
      (() => {        //.......................................................................................................
        var cfg, h, Ωhllt_274, Ωhllt_275, Ωhllt_276, Ωhllt_277, Ωhllt_278, Ωhllt_279, Ωhllt_280, Ωhllt_281, Ωhllt_282, Ωhllt_283, Ωhllt_284, Ωhllt_285, Ωhllt_286, Ωhllt_287, Ωhllt_288, Ωhllt_289, Ωhllt_290, Ωhllt_291, Ωhllt_292, Ωhllt_293, Ωhllt_294, Ωhllt_295, Ωhllt_296, Ωhllt_297, Ωhllt_298, Ωhllt_299, Ωhllt_300, Ωhllt_302, Ωhllt_303, Ωhllt_304, Ωhllt_305, Ωhllt_306, Ωhllt_307, Ωhllt_308, Ωhllt_309, Ωhllt_310, Ωhllt_311, Ωhllt_312, Ωhllt_313, Ωhllt_314, Ωhllt_315, Ωhllt_316, Ωhllt_317;
        cfg = Hollerith.validate_and_compile_cfg(cfg_10);
        this.eq((Ωhllt_274 = function() {
          return cfg.blank;
        }), ' ');
        this.eq((Ωhllt_275 = function() {
          return cfg.alphabet;
        }), '0123456789');
        this.eq((Ωhllt_276 = function() {
          return cfg.alphabet_chrs;
        }), Array.from('0123456789'));
        this.eq((Ωhllt_277 = function() {
          return cfg._nova;
        }), (Array.from(cfg.alphabet)).at(-1));
        this.eq((Ωhllt_278 = function() {
          return cfg.leading_niners_re;
        }), /^(?:9)*(?=.+$)/gv);
        this.eq((Ωhllt_279 = function() {
          return is_frozen(cfg.alphabet_chrs);
        }), true);
        this.eq((Ωhllt_280 = function() {
          return cfg.base;
        }), 10);
        this.eq((Ωhllt_281 = function() {
          return cfg.magnifiers;
        }), 'ABC XYZ');
        this.eq((Ωhllt_282 = function() {
          return cfg.nmag;
        }), ' CBA');
        this.eq((Ωhllt_283 = function() {
          return cfg.pmag;
        }), ' XYZ');
        this.eq((Ωhllt_284 = function() {
          return cfg.nmag_chrs;
        }), Array.from(' CBA'));
        this.eq((Ωhllt_285 = function() {
          return cfg.pmag_chrs;
        }), Array.from(' XYZ'));
        this.eq((Ωhllt_286 = function() {
          return cfg.uniliterals;
        }), 'FGHIJKLM N OPQRSTUV');
        this.eq((Ωhllt_287 = function() {
          return cfg.nuns;
        }), 'FGHIJKLM');
        this.eq((Ωhllt_288 = function() {
          return cfg.zpuns;
        }), 'NOPQRSTUV');
        this.eq((Ωhllt_289 = function() {
          return cfg.zpun_max;
        }), 8);
        this.eq((Ωhllt_290 = function() {
          return cfg.nun_min;
        }), -8);
        this.eq((Ωhllt_291 = function() {
          return cfg.nun_chrs;
        }), ['F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'], this.eq((Ωhllt_292 = function() {
          return cfg.zpun_chrs;
        }), ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V']));
        this.eq((Ωhllt_293 = function() {
          return cfg.dimension;
        }), 3);
        this.eq((Ωhllt_294 = function() {
          return +((cfg.base ** (cfg.pmag_chrs.length - 1)) - 1);
        }), +999);
        this.eq((Ωhllt_295 = function() {
          return -((cfg.base ** (cfg.nmag_chrs.length - 1)) - 1);
        }), -999);
        this.eq((Ωhllt_296 = function() {
          return cfg._max_integer;
        }), +999);
        this.eq((Ωhllt_297 = function() {
          return cfg._min_integer;
        }), -999);
        this.eq((Ωhllt_298 = function() {
          return cfg._max_digits_per_idx;
        }), 3);
        this.eq((Ωhllt_299 = function() {
          return cfg.TMP_alphabet;
        }), '0123456789ABCFGHIJKLMNOPQRSTUVXYZ');
        //.....................................................................................................
        h = new Hollerith(cfg_10);
        this.eq((Ωhllt_300 = function() {
          return h.cfg;
        }), cfg);
        // @eq ( Ωhllt_301 = -> h.encode  -998 ), null
        this.eq((Ωhllt_302 = function() {
          return h.encode(-12);
        }), 'B87');
        this.eq((Ωhllt_303 = function() {
          return h.encode(-11);
        }), 'B88');
        this.eq((Ωhllt_304 = function() {
          return h.encode(-10);
        }), 'B89');
        this.eq((Ωhllt_305 = function() {
          return h.encode(-9);
        }), 'C0');
        this.eq((Ωhllt_306 = function() {
          return h.encode(-8);
        }), 'F');
        this.eq((Ωhllt_307 = function() {
          return h.encode(-2);
        }), 'L');
        this.eq((Ωhllt_308 = function() {
          return h.encode(-1);
        }), 'M');
        this.eq((Ωhllt_309 = function() {
          return h.encode(0);
        }), 'N');
        this.eq((Ωhllt_310 = function() {
          return h.encode(+1);
        }), 'O');
        this.eq((Ωhllt_311 = function() {
          return h.encode(+2);
        }), 'P');
        this.eq((Ωhllt_312 = function() {
          return h.encode(+8);
        }), 'V');
        this.eq((Ωhllt_313 = function() {
          return h.encode(+9);
        }), 'X9');
        this.eq((Ωhllt_314 = function() {
          return h.encode(+10);
        }), 'Y10');
        this.eq((Ωhllt_315 = function() {
          return h.encode(+11);
        }), 'Y11');
        this.eq((Ωhllt_316 = function() {
          return h.encode(+12);
        }), 'Y12');
        this.eq((Ωhllt_317 = function() {
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
        alphabet: '0123456789', // digits; length of `alphabet` is the `base`
        magnifiers: 'ABC XYZ', 
        uniliterals: 'N', // only has zero uniliteral
        dimension: 3 // number of indices supported
      };
      (() => {        //.......................................................................................................
        var cfg, h, Ωhllt_318, Ωhllt_319, Ωhllt_320, Ωhllt_321, Ωhllt_322, Ωhllt_323, Ωhllt_324, Ωhllt_325, Ωhllt_326, Ωhllt_327, Ωhllt_328, Ωhllt_329, Ωhllt_330, Ωhllt_331, Ωhllt_332, Ωhllt_333, Ωhllt_334, Ωhllt_335, Ωhllt_336, Ωhllt_337, Ωhllt_338, Ωhllt_339, Ωhllt_340, Ωhllt_341, Ωhllt_342, Ωhllt_343;
        cfg = Hollerith.validate_and_compile_cfg(cfg_10_no_uniliterals);
        this.eq((Ωhllt_318 = function() {
          return cfg.blank;
        }), ' ');
        this.eq((Ωhllt_319 = function() {
          return cfg.alphabet;
        }), '0123456789');
        this.eq((Ωhllt_320 = function() {
          return cfg.alphabet_chrs;
        }), Array.from('0123456789'));
        this.eq((Ωhllt_321 = function() {
          return cfg._nova;
        }), (Array.from(cfg.alphabet)).at(-1));
        this.eq((Ωhllt_322 = function() {
          return cfg.leading_niners_re;
        }), /^(?:9)*(?=.+$)/gv);
        this.eq((Ωhllt_323 = function() {
          return is_frozen(cfg.alphabet_chrs);
        }), true);
        this.eq((Ωhllt_324 = function() {
          return cfg.base;
        }), 10);
        this.eq((Ωhllt_325 = function() {
          return cfg.magnifiers;
        }), 'ABC XYZ');
        this.eq((Ωhllt_326 = function() {
          return cfg.nmag;
        }), ' CBA');
        this.eq((Ωhllt_327 = function() {
          return cfg.pmag;
        }), ' XYZ');
        this.eq((Ωhllt_328 = function() {
          return cfg.nmag_chrs;
        }), Array.from(' CBA'));
        this.eq((Ωhllt_329 = function() {
          return cfg.pmag_chrs;
        }), Array.from(' XYZ'));
        this.eq((Ωhllt_330 = function() {
          return cfg.uniliterals;
        }), 'N');
        this.eq((Ωhllt_331 = function() {
          return cfg.nuns;
        }), '');
        this.eq((Ωhllt_332 = function() {
          return cfg.zpuns;
        }), 'N');
        this.eq((Ωhllt_333 = function() {
          return cfg.nun_chrs;
        }), []);
        this.eq((Ωhllt_334 = function() {
          return cfg.zpun_chrs;
        }), ['N']);
        this.eq((Ωhllt_335 = function() {
          return cfg.dimension;
        }), 3);
        this.eq((Ωhllt_336 = function() {
          return +((cfg.base ** (cfg.pmag_chrs.length - 1)) - 1);
        }), +999);
        this.eq((Ωhllt_337 = function() {
          return -((cfg.base ** (cfg.nmag_chrs.length - 1)) - 1);
        }), -999);
        this.eq((Ωhllt_338 = function() {
          return cfg._max_integer;
        }), +999);
        this.eq((Ωhllt_339 = function() {
          return cfg._min_integer;
        }), -999);
        this.eq((Ωhllt_340 = function() {
          return cfg._max_digits_per_idx;
        }), 3);
        this.eq((Ωhllt_341 = function() {
          return cfg.TMP_alphabet;
        }), '0123456789ABCNXYZ');
        //.....................................................................................................
        h = new Hollerith(cfg_10_no_uniliterals);
        this.eq((Ωhllt_342 = function() {
          return h.cfg;
        }), cfg);
        this.eq((Ωhllt_343 = function() {
          return h.encode([0]);
        }), 'N');
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
        alphabet: '!#$%&()*+,-./0123456789:;<=>?@AB' + 'CDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abc' + 'defghijklmnopqrstuvwxyz{|}~¡¢£¤¥' + '¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆ',
        magnifiers: 'ÇÈÉÊËÌÍÎ øùúûüýþÿ',
        uniliterals: 'ÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâ ã äåæçèéêëìíîïðñòóôõö÷',
        dimension: 5
      };
      (() => {        //.......................................................................................................
        var cfg, h, Ωhllt_344, Ωhllt_345, Ωhllt_346, Ωhllt_347, Ωhllt_348, Ωhllt_349, Ωhllt_350, Ωhllt_351, Ωhllt_352, Ωhllt_353, Ωhllt_354, Ωhllt_355, Ωhllt_356, Ωhllt_357, Ωhllt_358, Ωhllt_359, Ωhllt_360, Ωhllt_363, Ωhllt_364, Ωhllt_365, Ωhllt_366;
        cfg = Hollerith.validate_and_compile_cfg(cfg_128);
        this.eq((Ωhllt_344 = function() {
          return cfg.blank;
        }), ' ');
        this.eq((Ωhllt_345 = function() {
          return cfg.alphabet;
        }), '!#$%&()*+,-./0123456789:;<=>?@AB' + 'CDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abc' + 'defghijklmnopqrstuvwxyz{|}~¡¢£¤¥' + '¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆ');
        this.eq((Ωhllt_346 = function() {
          return cfg.alphabet_chrs;
        }), Array.from(cfg.alphabet));
        this.eq((Ωhllt_347 = function() {
          return cfg._nova;
        }), (Array.from(cfg.alphabet)).at(-1));
        this.eq((Ωhllt_348 = function() {
          return cfg.leading_niners_re;
        }), /^(?:Æ)*(?=.+$)/gv);
        this.eq((Ωhllt_349 = function() {
          return cfg.magnifiers;
        }), 'ÇÈÉÊËÌÍÎ øùúûüýþÿ');
        this.eq((Ωhllt_350 = function() {
          return cfg.nmag;
        }), ' ÎÍÌËÊÉÈÇ');
        this.eq((Ωhllt_351 = function() {
          return cfg.pmag;
        }), ' øùúûüýþÿ');
        this.eq((Ωhllt_352 = function() {
          return cfg.nmag_chrs;
        }), Array.from(' ÎÍÌËÊÉÈÇ'));
        this.eq((Ωhllt_353 = function() {
          return cfg.pmag_chrs;
        }), Array.from(' øùúûüýþÿ'));
        this.eq((Ωhllt_354 = function() {
          return cfg.uniliterals;
        }), 'ÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâ ã äåæçèéêëìíîïðñòóôõö÷');
        this.eq((Ωhllt_355 = function() {
          return cfg.nuns;
        }), 'ÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâ');
        this.eq((Ωhllt_356 = function() {
          return cfg.zpuns;
        }), 'ãäåæçèéêëìíîïðñòóôõö÷');
        this.eq((Ωhllt_357 = function() {
          return cfg.nun_chrs;
        }), Array.from('ÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâ'));
        this.eq((Ωhllt_358 = function() {
          return cfg.zpun_chrs;
        }), Array.from('ãäåæçèéêëìíîïðñòóôõö÷'));
        this.eq((Ωhllt_359 = function() {
          return cfg._min_integer;
        }), -((128 ** 7) - 1));
        this.eq((Ωhllt_360 = function() {
          return cfg._max_integer;
        }), +((128 ** 7) - 1));
        // @eq ( Ωhllt_361 = -> cfg._max_digits_per_idx                                         ), 3
        // @eq ( Ωhllt_362 = -> cfg.TMP_alphabet                                       ), '0123456789ABCEFGHIJKLMNOPQRSTUVWXYZ'
        //.....................................................................................................
        this.eq((Ωhllt_363 = function() {
          return is_frozen(cfg.alphabet_chrs);
        }), true);
        this.eq((Ωhllt_364 = function() {
          return cfg.base;
        }), 128);
        this.eq((Ωhllt_365 = function() {
          return cfg.dimension;
        }), 5);
        //.....................................................................................................
        h = new Hollerith(cfg_128);
        this.eq((Ωhllt_366 = function() {
          return h.cfg;
        }), cfg);
        // @eq ( Ωhllt_367 = -> h.encode [ 0, ] ), null
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    types: function() {
      var CFG, Hollerith_typespace, create_max_integer_$;
      ({Hollerith_typespace, create_max_integer_$, CFG} = require('../../../apps/hollerith/lib/types'));
      (() => {        //.......................................................................................................
        var T, Ωhllt_368, Ωhllt_369, Ωhllt_370, Ωhllt_371, Ωhllt_372, Ωhllt_373, Ωhllt_374, Ωhllt_375, Ωhllt_376, Ωhllt_377, Ωhllt_378, Ωhllt_379, Ωhllt_380;
        T = new Hollerith_typespace();
        this.eq((Ωhllt_368 = function() {
          return T.base.isa(-1);
        }), false);
        this.eq((Ωhllt_369 = function() {
          return T.base.isa(0);
        }), false);
        this.eq((Ωhllt_370 = function() {
          return T.base.isa(+1);
        }), false);
        this.eq((Ωhllt_371 = function() {
          return T.base.isa(+2);
        }), true);
        this.eq((Ωhllt_372 = function() {
          return T._max_integer_$.isa(null);
        }), false);
        this.eq((Ωhllt_373 = function() {
          return T._max_integer_$.isa(9, 10);
        }), true);
        this.eq((Ωhllt_374 = function() {
          return T._max_integer_$.isa(99, 10);
        }), true);
        this.eq((Ωhllt_375 = function() {
          return T._max_integer_$.isa(99999999, 10);
        }), true);
        this.eq((Ωhllt_376 = function() {
          return T._max_integer_$.isa(-10, 10);
        }), false);
        this.eq((Ωhllt_377 = function() {
          return /not a positive safe integer/.test(T._max_integer_$.data.message);
        }), true);
        this.eq((Ωhllt_378 = function() {
          return T._max_integer_$.isa(0xffff, 16);
        }), true);
        this.eq((Ωhllt_379 = function() {
          return T._max_integer_$.isa(0x7fffffff, 16);
        }), false);
        this.throws((Ωhllt_380 = function() {
          return T._max_integer_$.validate(5, 10);
        }), /\(_max_integer_\$\) not a valid _max_integer_\$: 5 – x not a positive all-niners/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var R, T, Ωhllt_381;
        T = new Hollerith_typespace();
        R = {
          base: 16,
          _max_digits_per_idx: 4
        };
        this.eq((Ωhllt_381 = function() {
          return T._max_integer_$.isa((R.base ** R._max_digits_per_idx) - 1, R.base);
        }), true);
        return null;
      })();
      (() => {        //.......................................................................................................
        var T, Ωhllt_382, Ωhllt_383, Ωhllt_384, Ωhllt_385, Ωhllt_386, Ωhllt_387, Ωhllt_388, Ωhllt_389, Ωhllt_390;
        T = new Hollerith_typespace();
        this.eq((Ωhllt_382 = function() {
          return T._max_integer_$.isa((128 ** 1) - 1, 128);
        }), true);
        this.eq((Ωhllt_383 = function() {
          return T._max_integer_$.isa((128 ** 2) - 1, 128);
        }), true);
        this.eq((Ωhllt_384 = function() {
          return T._max_integer_$.isa((128 ** 3) - 1, 128);
        }), true);
        this.eq((Ωhllt_385 = function() {
          return T._max_integer_$.isa((128 ** 4) - 1, 128);
        }), true);
        this.eq((Ωhllt_386 = function() {
          return T._max_integer_$.isa((128 ** 5) - 1, 128);
        }), true);
        this.eq((Ωhllt_387 = function() {
          return T._max_integer_$.isa((128 ** 6) - 1, 128);
        }), true);
        this.eq((Ωhllt_388 = function() {
          return T._max_integer_$.isa((128 ** 7) - 1, 128);
        }), true);
        this.eq((Ωhllt_389 = function() {
          return T._max_integer_$.isa((128 ** 8) - 1, 128);
        }), false);
        this.eq((Ωhllt_390 = function() {
          return T.create_max_integer_$({
            base: 10,
            digits: 2
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
    info('Ωhllt_391', Number.MAX_SAFE_INTEGER.toString(16));
    info('Ωhllt_392', Number.MAX_SAFE_INTEGER.toString(32));
    whisper('—————————————————————————————————');
    info('Ωhllt_393', (32 ** 4 - 1).toString(32));
    info('Ωhllt_394', (32 ** 4 - 1).toString(32));
    whisper('—————————————————————————————————');
    info('Ωhllt_395', get_required_digits(32, 32));
    info('Ωhllt_396', get_required_digits(32 ** 6, 32));
    info('Ωhllt_397', get_required_digits(1e6, 10));
    info('Ωhllt_398', get_required_digits(20, 10));
    whisper('—————————————————————————————————');
    info('Ωhllt_399', max_digits_base_10 = get_max_niner_digit_count(Number.MAX_SAFE_INTEGER, 10));
    info('Ωhllt_400', max_digits_base_16 = get_max_niner_digit_count(Number.MAX_SAFE_INTEGER, 16));
    info('Ωhllt_401', max_digits_base_32 = get_max_niner_digit_count(Number.MAX_SAFE_INTEGER, 32));
    info('Ωhllt_402', max_digits_base_36 = get_max_niner_digit_count(Number.MAX_SAFE_INTEGER, 36));
    info('Ωhllt_403', max_digits_1base_28 = get_max_niner_digit_count(Number.MAX_SAFE_INTEGER, 128));
    // for base in [ 2 .. 128 ]
    //   info 'Ωhllt_404', { base, }, ( Math.ceil log_to_base Number.MAX_SAFE_INTEGER, base ) - 1
    whisper('—————————————————————————————————');
    info('Ωhllt_405', '9'.repeat(max_digits_base_10));
    info('Ωhllt_406', 'f'.repeat(max_digits_base_16));
    info('Ωhllt_407', 'v'.repeat(max_digits_base_32));
    whisper('—————————————————————————————————');
    info('Ωhllt_408', ((base = 10) ** max_digits_base_10) - 1);
    info('Ωhllt_409', ((base = 16) ** max_digits_base_16) - 1);
    info('Ωhllt_410', ((base = 32) ** max_digits_base_32) - 1);
    info('Ωhllt_411', ((base = 36) ** max_digits_base_36) - 1);
    whisper('—————————————————————————————————');
    info('Ωhllt_412', get_max_integer(Number.MAX_SAFE_INTEGER, 10));
    info('Ωhllt_413', get_max_integer(Number.MAX_SAFE_INTEGER, 16));
    info('Ωhllt_414', get_max_integer(Number.MAX_SAFE_INTEGER, 32));
    info('Ωhllt_415', get_max_integer(Number.MAX_SAFE_INTEGER, 36));
    info('Ωhllt_416', get_max_integer(Number.MAX_SAFE_INTEGER, 128));
    whisper('—————————————————————————————————');
    info('Ωhllt_417', parseInt('9'.repeat(max_digits_base_10), 10));
    info('Ωhllt_418', parseInt('f'.repeat(max_digits_base_16), 16));
    info('Ωhllt_419', parseInt('v'.repeat(max_digits_base_32), 32));
    info('Ωhllt_420', parseInt('z'.repeat(max_digits_base_36), 36));
    info('Ωhllt_421', (parseInt('9'.repeat(max_digits_base_10), 10)) <= Number.MAX_SAFE_INTEGER);
    info('Ωhllt_422', (parseInt('f'.repeat(max_digits_base_16), 16)) <= Number.MAX_SAFE_INTEGER);
    info('Ωhllt_423', (parseInt('v'.repeat(max_digits_base_32), 32)) <= Number.MAX_SAFE_INTEGER);
    info('Ωhllt_424', (parseInt('z'.repeat(max_digits_base_36), 36)) <= Number.MAX_SAFE_INTEGER);
    whisper('—————————————————————————————————');
    info('Ωhllt_425', +999 + -999);
    info('Ωhllt_426', +999 + -1);
    info('Ωhllt_427', -(-999 - 1) + -999);
    info('Ωhllt_428', -(-999 - 1) + -998);
    info('Ωhllt_429', -(-999 - 1) + -997);
    info('Ωhllt_430', -(-999 - 1) + -3);
    info('Ωhllt_431', -(-999 - 1) + -2);
    info('Ωhllt_432', -(-999 - 1) + -1);
    info('Ωhllt_433', `${-(-999 - 1) + -3}`.replace(/^9*?(?=.$)/gv, ''));
    info('Ωhllt_434', `${-(-999 - 1) + -2}`.replace(/^9*?(?=.$)/gv, ''));
    info('Ωhllt_435', `${-(-999 - 1) + -1}`.replace(/^9*?(?=.$)/gv, ''));
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
        h10mvp2_big_shuffle: this.hollerith.h10mvp2_big_shuffle
      });
    })();
  }

  // ( new Test guytest_cfg ).test { types: @hollerith.types, }
// ( new Test guytest_cfg ).test { h10mvp2_sorting_2: @hollerith.h10mvp2_sorting_2, }
// ( new Test guytest_cfg ).test { validate_and_compile_cfg_10: @hollerith.validate_and_compile_cfg_10, }
// ( new Test guytest_cfg ).test { h10mvp2_decode_units: @hollerith.h10mvp2_decode_units, }
// ( new Test guytest_cfg ).test { get_niners_re: @hollerith.get_niners_re, }
// ( new Test guytest_cfg ).test { validate_and_compile_cfg: @hollerith.validate_and_compile_cfg, }
// demo_max_integer()

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxnQkFBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQTs7RUFFQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLFdBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxPQUhGLEVBSUUsR0FKRixDQUFBLEdBSTRCLEdBQUcsQ0FBQyxHQUpoQyxFQVpBOzs7RUFrQkEsSUFBQSxHQUE0QixPQUFBLENBQVEsMkJBQVI7O0VBQzVCLENBQUEsQ0FBRSxJQUFGLENBQUEsR0FBNEIsSUFBNUI7O0VBQ0EsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUI7O0VBQ0EsU0FBQSxHQUE0QixPQUFBLENBQVEsNkNBQVIsRUFyQjVCOzs7RUF5QkEsT0FBQSxHQUNFO0lBQUEsUUFBQSxFQUFVLFFBQUEsQ0FBRSxJQUFGLENBQUE7QUFDWixVQUFBLENBQUEsRUFBQSxLQUFBLEVBQUEsT0FBQSxFQUFBLFFBQUEsRUFBQTtNQUFJLENBQUEsQ0FBRSxJQUFGLEVBQ0Us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QUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxJQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxJQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxJQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxJQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxJQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxJQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxJQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxJQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FB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QUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBZ0MsQ0FBQyxFQUFqQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBd0IsQ0FBQyxFQUF6QixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBZ0MsQ0FBQyxFQUFqQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBd0IsQ0FBQyxFQUF6QixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBZ0MsQ0FBQyxFQUFqQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBd0IsQ0FBQyxFQUF6QixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBeUIsQ0FBQyxDQUExQixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBeUIsQ0FBQyxDQUExQixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBeUIsQ0FBQyxDQUExQixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBeUIsQ0FBQyxDQUExQixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBeUIsQ0FBQyxDQUExQixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBeUIsQ0FBQyxDQUExQixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBeUIsQ0FBQyxDQUExQixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBeUIsQ0FBQyxDQUExQixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFl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QSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsZ0JBQUEsRUFBQSxtQkFBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsU0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxZQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsWUFBQSxFQUFBLE9BQUEsRUFBQSxVQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUEsRUFBQSxjQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUE7TUFBSSxDQUFBLENBQUUsU0FBRixFQUNFLG1CQURGLEVBRUUsU0FGRixDQUFBLEdBRThCLE9BQUEsQ0FBUSx5QkFBUixDQUY5QjtNQUdBLENB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QUFkLENBQUosRUFBNkUsS0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxtQkFBWjtNQUF0QixDQUFkLENBQUosRUFBNkUsR0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEtBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsS0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEtBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsS0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEdBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsS0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEdBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsS0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEdBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsSUFBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEVBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsSUFBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEVBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsSUFBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEVBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsSUFBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEVBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsR0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLENBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsR0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLENBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsR0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLENBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsR0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEVBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsR0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEVBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsSUFB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QXFCLENBQUUsR0FBQSxJQUFPLENBQVQsQ0FBQSxHQUFlLENBQXBDLEVBQXVDLEdBQXZDO1FBQUgsQ0FBZCxDQUFSLEVBQTZFLElBQTdFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsY0FBYyxDQUFDLEdBQWpCLENBQXFCLENBQUUsR0FBQSxJQUFPLENBQVQsQ0FBQSxHQUFlLENBQXBDLEVBQXVDLEdBQXZDO1FBQUgsQ0FBZCxDQUFSLEVBQTZFLElBQTdFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsY0FBYyxDQUFDLEdBQWpCLENBQXFCLENBQUUsR0FBQSxJQUFPLENBQVQsQ0FBQSxHQUFlLENBQXBDLEVBQXVDLEdBQXZDO1FBQUgsQ0FBZCxDQUFSLEVBQTZFLElBQTdFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsY0FBYyxDQUFDLEdBQWpCLENBQXFCLENBQUUsR0FBQSxJQUFPLENBQVQsQ0FBQSxHQUFlLENBQXBDLEVBQXVDLEdBQXZDO1FBQUgsQ0FBZCxDQUFSLEVBQTZFLElBQTdFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsY0FBYyxDQUFDLEdBQWpCLENBQXFCLENBQUUsR0FBQSxJQUFPLENBQVQsQ0FBQSxHQUFlLENBQXBDLEVBQXVDLEdBQXZDO1FBQUgsQ0FBZCxDQUFSLEVBQTZFLElBQTdFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsY0FBYyxDQUFDLEdBQWpCLENBQXFCLENBQUUsR0FBQSxJQUFPLENBQVQsQ0FBQSxHQUFlLENBQXBDLEVBQXVDLEdBQXZDO1FBQUgsQ0FB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O1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEIsSUFBQyxDQUFBLFNBQS9CO2FBQ0EsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QjtRQUFFLG1CQUFBLEVBQXFCLElBQUMsQ0FBQSxTQUFTLENBQUM7TUFBbEMsQ0FBOUI7SUFQc0MsQ0FBQSxJQUF4Qzs7O0VBam1DQTs7Ozs7OztBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG4ndXNlIHN0cmljdCdcblxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdob2xsZXJpdGgnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbiMgV0dVWSAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvd2ViZ3V5J1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNpbmdsZS1maWxlLW1vZHVsZXMnXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5oZWxwZXJzID1cbiAgcnByX3VuaXQ6ICggdW5pdCApIC0+XG4gICAgeyBuYW1lLFxuICAgICAgbGV0dGVycyxcbiAgICAgIG1hbnRpc3NhLFxuICAgICAgaW5kZXgsICAgIH0gPSB1bml0XG4gICAgUiAgPSBcIiN7bmFtZX06I3tsZXR0ZXJzfVwiXG4gICAgUiArPSBcIiwje21hbnRpc3NhfVwiICBpZiBtYW50aXNzYT9cbiAgICBSICs9IFwiWyN7aW5kZXh9XVwiICAgIGlmIGluZGV4P1xuICAgIHJldHVybiBSXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AaG9sbGVyaXRoID1cblxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGludGVyZmFjZTogLT5cbiAgICB7IEhvbGxlcml0aCxcbiAgICAgIGhvbGxlcml0aF8xMCxcbiAgICAgIGhvbGxlcml0aF8xMG12cCxcbiAgICAgIGhvbGxlcml0aF8xMjgsXG4gICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X19fMSA9IC0+IHR5cGVfb2YgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgICAgICAgICAgICksICdmdW5jdGlvbidcbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X19fMiA9IC0+IHR5cGVfb2YgaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgICksICdmdW5jdGlvbidcbiAgICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRfbmluZXJzX3JlOiAtPlxuICAgIHsgaW50ZXJuYWxzOiB7IHR5cGVzLCB9ICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgZ2V0X25pbmVyc19yZSwgICAgICAgICAgfSA9IHR5cGVzLmludGVybmFsc1xuICAgICMgZGVidWcgJ86paGxsdF9fXzMnLCAnOTg3Jy5yZXBsYWNlIC8vLyBeICg/OiA5ICkqPyAoPz0gLiAkICkgLy8vZ3YsICcnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgQGVxICAgICAoIM6pYW55YnRfX180ID0gLT4gZ2V0X25pbmVyc19yZSAnOScgKSwgLy8vIF4gKD86IDkgICkqICg/PSAuKyAkICkgLy8vZ3ZcbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X19fNSA9IC0+IGdldF9uaW5lcnNfcmUgJyonICksIC8vLyBeICg/OiBcXCogKSogKD89IC4rICQgKSAvLy9ndlxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBsZWFkaW5nX25pbmVyc19yZSA9IGdldF9uaW5lcnNfcmUgJzknXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fXzYgPSAtPiAnOTk5OScucmVwbGFjZSBsZWFkaW5nX25pbmVyc19yZSwgJycgKSwgJzknXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fXzcgPSAtPiAgJzk5OScucmVwbGFjZSBsZWFkaW5nX25pbmVyc19yZSwgJycgKSwgJzknXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fXzggPSAtPiAgICc5OScucmVwbGFjZSBsZWFkaW5nX25pbmVyc19yZSwgJycgKSwgJzknXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fXzkgPSAtPiAgICAnOScucmVwbGFjZSBsZWFkaW5nX25pbmVyc19yZSwgJycgKSwgJzknXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fMTAgPSAtPiAnOTk4OScucmVwbGFjZSBsZWFkaW5nX25pbmVyc19yZSwgJycgKSwgJzg5J1xuICAgICAgQGVxICAgICAoIM6pYW55YnRfXzExID0gLT4gICc5ODknLnJlcGxhY2UgbGVhZGluZ19uaW5lcnNfcmUsICcnICksICc4OSdcbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X18xMiA9IC0+ICAgJzg5Jy5yZXBsYWNlIGxlYWRpbmdfbmluZXJzX3JlLCAnJyApLCAnODknXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fMTMgPSAtPiAnOTk5MicucmVwbGFjZSBsZWFkaW5nX25pbmVyc19yZSwgJycgKSwgJzInXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fMTQgPSAtPiAgJzk5MicucmVwbGFjZSBsZWFkaW5nX25pbmVyc19yZSwgJycgKSwgJzInXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fMTUgPSAtPiAgICc5MicucmVwbGFjZSBsZWFkaW5nX25pbmVyc19yZSwgJycgKSwgJzInXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fMTYgPSAtPiAgICAnNycucmVwbGFjZSBsZWFkaW5nX25pbmVyc19yZSwgJycgKSwgJzcnXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fMTcgPSAtPiAgICAgJycucmVwbGFjZSBsZWFkaW5nX25pbmVyc19yZSwgJycgKSwgJydcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoMTBtdnBfMTogLT5cbiAgICB7IEhvbGxlcml0aCxcbiAgICAgIGhvbGxlcml0aF8xMCxcbiAgICAgIGhvbGxlcml0aF8xMG12cCxcbiAgICAgIGhvbGxlcml0aF8xMjgsXG4gICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzE4ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyIC05OTkgICApLCAnSzAwMCdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMTkgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgIC05OSAgICksICdMMDAnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzIwID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAtOTAgICApLCAnTDA5J1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18yMSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgLTExICAgKSwgJ0w4OCdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMjIgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgIC0xMCAgICksICdMODknXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzIzID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTkgICApLCAnTTAnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzI0ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTggICApLCAnTTEnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzI1ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTcgICApLCAnTTInXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzI2ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTYgICApLCAnTTMnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzI3ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTUgICApLCAnTTQnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzI4ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTQgICApLCAnTTUnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzI5ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTMgICApLCAnTTYnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzMwID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTIgICApLCAnTTcnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzMxID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTEgICApLCAnTTgnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzMyID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgIDAgICApLCAnTidcbiAgICBAZXEgICAgICggzqlhbnlidF9fMzMgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAgMSAgICksICdPMSdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMzQgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICArOSAgICksICdPOSdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMzUgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICsxMCAgICksICdQMTAnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzM2ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICArMjAgICApLCAnUDIwJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18zNyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgKzkwICAgKSwgJ1A5MCdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMzggPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgIDEyMyAgICksICdRMTIzJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18zOSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciArOTAwICAgKSwgJ1E5MDAnXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGgxMG12cF8yOiAtPlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEwLFxuICAgICAgaG9sbGVyaXRoXzEwbXZwLFxuICAgICAgaG9sbGVyaXRoXzEyOCxcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgICAgICggzqlhbnlidF9fNDAgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgLTk5OSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgLTk5OVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X180MSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgLTk5ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgLTk5XG4gICAgQGVxICAgICAoIM6pYW55YnRfXzQyID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAtOTAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAtOTBcbiAgICBAZXEgICAgICggzqlhbnlidF9fNDMgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgIC0xMSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgIC0xMVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X180NCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgLTEwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgLTEwXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzQ1ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTkgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgLTlcbiAgICBAZXEgICAgICggzqlhbnlidF9fNDYgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtOCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAtOFxuICAgIEBlcSAgICAgKCDOqWFueWJ0X180NyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC03ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgIC03XG4gICAgQGVxICAgICAoIM6pYW55YnRfXzQ4ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTYgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgLTZcbiAgICBAZXEgICAgICggzqlhbnlidF9fNDkgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtNSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAtNVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X181MCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC00ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgIC00XG4gICAgQGVxICAgICAoIM6pYW55YnRfXzUxID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTMgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgLTNcbiAgICBAZXEgICAgICggzqlhbnlidF9fNTIgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtMiAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAtMlxuICAgIEBlcSAgICAgKCDOqWFueWJ0X181MyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC0xICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgIC0xXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzU0ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgIDAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgIDBcbiAgICBAZXEgICAgICggzqlhbnlidF9fNTUgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAgMSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAgMVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X181NiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgICs5ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgICs5XG4gICAgQGVxICAgICAoIM6pYW55YnRfXzU3ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICArMTAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICArMTBcbiAgICBAZXEgICAgICggzqlhbnlidF9fNTggPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICsyMCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICsyMFxuICAgIEBlcSAgICAgKCDOqWFueWJ0X181OSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgKzkwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgKzkwXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzYwID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAxMjMgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAxMjNcbiAgICBAZXEgICAgICggzqlhbnlidF9fNjEgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgKzkwMCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgKzkwMFxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoMTBtdnBfMzogLT5cbiAgICB7IEhvbGxlcml0aCxcbiAgICAgIGhvbGxlcml0aF8xMCxcbiAgICAgIGhvbGxlcml0aF8xMG12cCxcbiAgICAgIGhvbGxlcml0aF8xMjgsXG4gICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzYyID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyIC05OTkgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgLTk5OSwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X182MyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgLTk5ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAtOTksIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNjQgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgIC05MCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgLTkwLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzY1ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAtMTEgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgIC0xMSwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X182NiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgLTEwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAtMTAsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNjcgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtOSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgIC05LCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzY4ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTggICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICAtOCwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X182OSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC03ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgLTcsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNzAgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtNiAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgIC02LCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzcxID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTUgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICAtNSwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X183MiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC00ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgLTQsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNzMgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtMyAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgIC0zLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzc0ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTIgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICAtMiwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X183NSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC0xICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgLTEsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNzYgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAgMCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgICAwLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzc3ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgIDEgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICAgMSwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X183OCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgICs5ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgKzksIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNzkgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICsxMCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgKzEwLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzgwID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICArMjAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICsyMCwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X184MSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgKzkwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICArOTAsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fODIgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgIDEyMyAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgMTIzLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzgzID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICs5MDAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgKzkwMCwgXVxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoMTBtdnBfc29ydGluZ18xOiAtPlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEwLFxuICAgICAgaG9sbGVyaXRoXzEwbXZwLFxuICAgICAgaG9sbGVyaXRoXzEyOCxcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBzb3J0ZWRfc2luZ2xlcyA9ICggcGFkZGluZyA9IG51bGwgKSA9PlxuICAgICAgcHJvYmVzID0gW1xuICAgICAgICBbIC05OTksIF1cbiAgICAgICAgWyAgLTk5LCBdXG4gICAgICAgIFsgIC05MCwgXVxuICAgICAgICBbICAtMTEsIF1cbiAgICAgICAgWyAgLTEwLCBdXG4gICAgICAgIFsgICAtOSwgXVxuICAgICAgICBbICAgLTgsIF1cbiAgICAgICAgWyAgIC03LCBdXG4gICAgICAgIFsgICAtNiwgXVxuICAgICAgICBbICAgLTUsIF1cbiAgICAgICAgWyAgIC00LCBdXG4gICAgICAgIFsgICAtMywgXVxuICAgICAgICBbICAgLTIsIF1cbiAgICAgICAgWyAgIC0xLCBdXG4gICAgICAgIFsgICAgMCwgXVxuICAgICAgICBbICAgIDEsIF1cbiAgICAgICAgWyAgICs5LCBdXG4gICAgICAgIFsgICsxMCwgXVxuICAgICAgICBbICArMjAsIF1cbiAgICAgICAgWyAgKzkwLCBdXG4gICAgICAgIFsgIDEyMywgXVxuICAgICAgICBbICs5MDAsIF1cbiAgICAgICAgXVxuICAgICAgZm9yIHByb2JlLCBpZHggaW4gcHJvYmVzXG4gICAgICAgIHNrICAgICAgICAgICAgPSBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIHByb2JlXG4gICAgICAgIHNrICAgICAgICAgICAgPSBzay5wYWRFbmQgcGFkZGluZywgaG9sbGVyaXRoXzEwbXZwLmNmZy56cHVuc1sgMCBdIGlmIHBhZGRpbmc/XG4gICAgICAgIHByb2Jlc1sgaWR4IF0gPSB7IHNrLCBwcm9iZSwgaWR4LCB9XG4gICAgICBwcm9iZXMuc29ydCAoIGEsIGIgKSAtPlxuICAgICAgICByZXR1cm4gLTEgaWYgYS5zayA8IGIuc2tcbiAgICAgICAgcmV0dXJuICsxIGlmIGEuc2sgPiBiLnNrXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICBmb3IgZW50cnksIGlkeCBpbiBwcm9iZXNcbiAgICAgICAgIyBkZWJ1ZyAnzqlobGx0X184NCcsIGVudHJ5XG4gICAgICAgIEBlcSAoIM6paGxsdF9fODUgPSAtPiBlbnRyeS5pZHggKSwgaWR4XG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgc29ydGVkX3NpbmdsZXMgbnVsbFxuICAgIHNvcnRlZF9zaW5nbGVzIDEwXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGgxMG12cF9zb3J0aW5nXzI6IC0+XG4gICAgeyBIb2xsZXJpdGgsXG4gICAgICBob2xsZXJpdGhfMTBtdnAsXG4gICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcHJvYmVzID0gW1xuICAgICAgWyBbIC05OTksICAgICAgICAgICBdLCAnSzAwMCcsICAgICAgXVxuICAgICAgWyBbICAtOTksICAgICAgICAgICBdLCAnTDAwJywgICAgICAgXVxuICAgICAgWyBbICAtOTAsICAgICAgICAgICBdLCAnTDA5JywgICAgICAgXVxuICAgICAgWyBbICAtMTEsICAgICAgICAgICBdLCAnTDg4JywgICAgICAgXVxuICAgICAgWyBbICAtMTAsICAgICAgICAgICBdLCAnTDg5JywgICAgICAgXVxuICAgICAgWyBbICAgLTksICAgICAgICAgICBdLCAnTTAnLCAgICAgICAgXVxuICAgICAgWyBbICAgLTgsICAgICAgICAgICBdLCAnTTEnLCAgICAgICAgXVxuICAgICAgWyBbICAgLTcsICAgICAgICAgICBdLCAnTTInLCAgICAgICAgXVxuICAgICAgWyBbICAgLTYsICAgICAgICAgICBdLCAnTTMnLCAgICAgICAgXVxuICAgICAgWyBbICAgLTUsICAgICAgICAgICBdLCAnTTQnLCAgICAgICAgXVxuICAgICAgWyBbICAgLTQsICAgICAgICAgICBdLCAnTTUnLCAgICAgICAgXVxuICAgICAgWyBbICAgLTMsICAgICAgICAgICBdLCAnTTYnLCAgICAgICAgXVxuICAgICAgWyBbICAgLTIsICAgICAgICAgICBdLCAnTTcnLCAgICAgICAgXVxuICAgICAgWyBbICAgLTEsICAgICAgICAgICBdLCAnTTgnLCAgICAgICAgXVxuICAgICAgWyBbICAgKzAsICAtMjAsICAgICBdLCAnTkwyMCcsICAgICAgXVxuICAgICAgWyBbICAgKzAsICAgICAgICAgICBdLCAnTicsICAgICAgICAgXVxuICAgICAgWyBbICAgKzAsICArMjAsICAgICBdLCAnTlAyMCcsICAgICAgXVxuICAgICAgWyBbICAgKzksICAgICAgICAgICBdLCAnTzknLCAgICAgICAgXVxuICAgICAgWyBbICArMTAsICAgLTMsICAgICBdLCAnUDEwTTYnLCAgICAgXVxuICAgICAgWyBbICArMTAsICAgLTIsICAgICBdLCAnUDEwTTcnLCAgICAgXVxuICAgICAgWyBbICArMTAsICAgLTEsICAgICBdLCAnUDEwTTgnLCAgICAgXVxuICAgICAgWyBbICArMTAsICAgICAgICAgICBdLCAnUDEwJywgICAgICAgXVxuICAgICAgWyBbICArMTAsICAgKzAsICAgICBdLCAnUDEwTicsICAgICAgXVxuICAgICAgWyBbICArMTAsICAgKzEsICAgICBdLCAnUDEwTzEnLCAgICAgXVxuICAgICAgWyBbICArMTAsICArMTAsIC0xLCBdLCAnUDEwUDEwTTgnLCAgXVxuICAgICAgWyBbICArMTAsICArMTAsICAgICBdLCAnUDEwUDEwJywgICAgXVxuICAgICAgWyBbICArMTAsICArMjAsICAgICBdLCAnUDEwUDIwJywgICAgXVxuICAgICAgWyBbICArMjAsICAgICAgICAgICBdLCAnUDIwJywgICAgICAgXVxuICAgICAgWyBbICArMjAsICArMTAsICAgICBdLCAnUDIwUDEwJywgICAgXVxuICAgICAgWyBbICArOTAsICAgICAgICAgICBdLCAnUDkwJywgICAgICAgXVxuICAgICAgWyBbICs5MDAsICAgICAgICAgICBdLCAnUTkwMCcsICAgICAgXVxuICAgICAgXVxuICAgIHVsaW5lcyAgICAgICAgICAgID0gW11cbiAgICBwbGluZXMgICAgICAgICAgICA9IFtdXG4gICAgZXhwZWN0ZWRfaW5kZXhlcyAgPSAoIGlkeCBmb3IgaWR4IGluIFsgMCAuLi4gcHJvYmVzLmxlbmd0aCBdIClcbiAgICBzaHVmZmxlICAgICAgICAgICA9IEdVWS5ybmQuZ2V0X3NodWZmbGUgNTcsIDg4XG4gICAgZm9yIFsgdmR4LCBza19tYXRjaGVyLCBdLCBpZHggaW4gcHJvYmVzXG4gICAgICB1c2sgICA9IGhvbGxlcml0aF8xMG12cC5lbmNvZGUgdmR4XG4gICAgICBwc2sgICA9IHVzay5wYWRFbmQgMTAsIGhvbGxlcml0aF8xMG12cC5jZmcuenB1bnNbIDAgXVxuICAgICAgdXNrICAgPSB1c2sucGFkRW5kIDEwLCAnICdcbiAgICAgIHVsaW5lcy5wdXNoIFwiI3t1c2t9ICN7cnByIHZkeH0gI3tpZHh9XCJcbiAgICAgIHBsaW5lcy5wdXNoIFwiI3twc2t9ICN7cnByIHZkeH0gI3tpZHh9XCJcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGZvciBfIGluIFsgMSAuLiAxMCBdXG4gICAgICB1bGluZXMgPSBzaHVmZmxlIHVsaW5lc1xuICAgICAgdWxpbmVzLnNvcnQoKVxuICAgICAgcmVhbF9pbmRleGVzID0gW11cbiAgICAgIGZvciB1bGluZSBpbiB1bGluZXNcbiAgICAgICAgIyBoZWxwICfOqWhsbHRfXzg2JywgdWxpbmVcbiAgICAgICAgcmVhbF9pbmRleGVzLnB1c2ggTnVtYmVyIHVsaW5lLnJlcGxhY2UgL14uKj9cXHMoWzAtOV0rKSQvLCAnJDEnXG4gICAgICBAZXEgKCDOqWhsbHRfXzg3ID0gLT4gZXF1YWxzIGV4cGVjdGVkX2luZGV4ZXMsIHJlYWxfaW5kZXhlcyApLCBmYWxzZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZm9yIF8gaW4gWyAxIC4uIDEwIF1cbiAgICAgIHBsaW5lcyA9IHNodWZmbGUgcGxpbmVzXG4gICAgICBwbGluZXMuc29ydCgpXG4gICAgICByZWFsX2luZGV4ZXMgPSBbXVxuICAgICAgZm9yIHBsaW5lIGluIHBsaW5lc1xuICAgICAgICAjIGhlbHAgJ86paGxsdF9fODgnLCBwbGluZVxuICAgICAgICByZWFsX2luZGV4ZXMucHVzaCBOdW1iZXIgcGxpbmUucmVwbGFjZSAvXi4qP1xccyhbMC05XSspJC8sICckMSdcbiAgICAgIEBlcSAoIM6paGxsdF9fODkgPSAtPiBlcXVhbHMgZXhwZWN0ZWRfaW5kZXhlcywgcmVhbF9pbmRleGVzICksIHRydWVcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoMTBtdnAyX2JpZ19zaHVmZmxlOiAtPlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEwbXZwMixcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwcm9iZXMgPSBbXG4gICAgICBbIC05OTksICAgICAgICAgICBdXG4gICAgICBbICAtOTksICAgICAgICAgICBdXG4gICAgICBbICAtOTAsICAgICAgICAgICBdXG4gICAgICBbICAtMTEsICAgICAgICAgICBdXG4gICAgICBbICAtMTAsICAgICAgICAgICBdXG4gICAgICBbICAgLTksICAgICAgICAgICBdXG4gICAgICBbICAgLTgsICAgICAgICAgICBdXG4gICAgICBbICAgLTcsICAgICAgICAgICBdXG4gICAgICBbICAgLTYsICAgICAgICAgICBdXG4gICAgICBbICAgLTUsICAgICAgICAgICBdXG4gICAgICBbICAgLTQsICAgICAgICAgICBdXG4gICAgICBbICAgLTMsICAgICAgICAgICBdXG4gICAgICBbICAgLTIsICAgICAgICAgICBdXG4gICAgICBbICAgLTEsICAgICAgICAgICBdXG4gICAgICBbICAgKzAsICAtMjAsICAgICBdXG4gICAgICBbICAgKzAsICAgICAgICAgICBdXG4gICAgICBbICAgKzAsICArMjAsICAgICBdXG4gICAgICBbICAgKzksICAgICAgICAgICBdXG4gICAgICBbICArMTAsICAgLTMsICAgICBdXG4gICAgICBbICArMTAsICAgLTIsICAgICBdXG4gICAgICBbICArMTAsICAgLTEsICAgICBdXG4gICAgICBbICArMTAsICAgICAgICAgICBdXG4gICAgICBbICArMTAsICAgKzAsICAgICBdXG4gICAgICBbICArMTAsICAgKzEsICAgICBdXG4gICAgICBbICArMTAsICArMTAsIC0xLCBdXG4gICAgICBbICArMTAsICArMTAsICAgICBdXG4gICAgICBbICArMTAsICArMjAsICAgICBdXG4gICAgICBbICArMjAsICAgICAgICAgICBdXG4gICAgICBbICArMjAsICArMTAsICAgICBdXG4gICAgICBbICArOTAsICAgICAgICAgICBdXG4gICAgICBbICs5MDAsICAgICAgICAgICBdXG4gICAgICBbICs5OTksICAgICAgICAgICBdXG4gICAgICBdXG4gICAgc2h1ZmZsZSAgICAgICAgICAgPSBHVVkucm5kLmdldF9zaHVmZmxlIDU3LCA4OFxuICAgIHByb2Jlc18yICAgICAgICAgID0gcHJvYmVzWyAuLiBdXG4gICAgcHJvYmVzXzIgICAgICAgICAgPSBzaHVmZmxlIHByb2Jlc18yXG4gICAgcHJvYmVzXzIuc29ydCAoIGEsIGIgKSAtPlxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4uICggTWF0aC5tYXggYS5sZW5ndGgsIGIubGVuZ3RoICkgXVxuICAgICAgICBkYSA9IGFbIGlkeCBdID8gMFxuICAgICAgICBkYiA9IGJbIGlkeCBdID8gMFxuICAgICAgICBjb250aW51ZSBpZiBkYSBpcyBkYlxuICAgICAgICByZXR1cm4gLTEgaWYgZGEgPCBkYlxuICAgICAgICByZXR1cm4gKzFcbiAgICAgIHJldHVybiBudWxsXG4gICAgZm9yIHZkeCBpbiBwcm9iZXNfMlxuICAgICAgZGVidWcgJ86paGxsdF8zOTEnLCB2ZHhcbiAgICAjIHVsaW5lcyAgICAgICAgICAgID0gW11cbiAgICAjIHBsaW5lcyAgICAgICAgICAgID0gW11cbiAgICAjIGV4cGVjdGVkX2luZGV4ZXMgID0gKCBpZHggZm9yIGlkeCBpbiBbIDAgLi4uIHByb2Jlcy5sZW5ndGggXSApXG4gICAgIyBmb3IgWyB2ZHgsIHNrX21hdGNoZXIsIF0sIGlkeCBpbiBwcm9iZXNcbiAgICAjICAgdXNrICAgPSBob2xsZXJpdGhfMTBtdnAyLmVuY29kZSB2ZHhcbiAgICAjICAgQGVxICggzqlobGx0X185MCA9IC0+IHVzayApLCBza19tYXRjaGVyXG4gICAgIyAgIHBzayAgID0gdXNrLnBhZEVuZCAxMCwgaG9sbGVyaXRoXzEwbXZwMi5jZmcuenB1bnNbIDAgXVxuICAgICMgICB1c2sgICA9IHVzay5wYWRFbmQgMTAsICcgJ1xuICAgICMgICB1bGluZXMucHVzaCBcIiN7dXNrfSAje3JwciB2ZHh9ICN7aWR4fVwiXG4gICAgIyAgIHBsaW5lcy5wdXNoIFwiI3twc2t9ICN7cnByIHZkeH0gI3tpZHh9XCJcbiAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBmb3IgXyBpbiBbIDEgLi4gMTAgXVxuICAgICMgICB1bGluZXMgPSBzaHVmZmxlIHVsaW5lc1xuICAgICMgICB1bGluZXMuc29ydCgpXG4gICAgIyAgIHJlYWxfaW5kZXhlcyA9IFtdXG4gICAgIyAgIGZvciB1bGluZSBpbiB1bGluZXNcbiAgICAjICAgICAjIGhlbHAgJ86paGxsdF9fOTEnLCB1bGluZVxuICAgICMgICAgIHJlYWxfaW5kZXhlcy5wdXNoIE51bWJlciB1bGluZS5yZXBsYWNlIC9eLio/XFxzKFswLTldKykkLywgJyQxJ1xuICAgICMgICBAZXEgKCDOqWhsbHRfXzkyID0gLT4gZXF1YWxzIGV4cGVjdGVkX2luZGV4ZXMsIHJlYWxfaW5kZXhlcyApLCBmYWxzZVxuICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIGZvciBfIGluIFsgMSAuLiAxMCBdXG4gICAgIyAgIHBsaW5lcyA9IHNodWZmbGUgcGxpbmVzXG4gICAgIyAgIHBsaW5lcy5zb3J0KClcbiAgICAjICAgcmVhbF9pbmRleGVzID0gW11cbiAgICAjICAgZm9yIHBsaW5lIGluIHBsaW5lc1xuICAgICMgICAgICMgaGVscCAnzqlobGx0X185MycsIHBsaW5lXG4gICAgIyAgICAgcmVhbF9pbmRleGVzLnB1c2ggTnVtYmVyIHBsaW5lLnJlcGxhY2UgL14uKj9cXHMoWzAtOV0rKSQvLCAnJDEnXG4gICAgIyAgIEBlcSAoIM6paGxsdF9fOTQgPSAtPiBlcXVhbHMgZXhwZWN0ZWRfaW5kZXhlcywgcmVhbF9pbmRleGVzICksIHRydWVcbiAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGgxMjhfMTYzODNfc29ydGluZ18yOiAtPlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEyOF8xNjM4MyxcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwcm9iZXMgPSBbXG4gICAgICBbIFsgLTk5OSwgICAgICAgICAgIF0sICfDjcK/OycsICAgICBdXG4gICAgICBbIFsgIC05OSwgICAgICAgICAgIF0sICfDjj8nLCAgICAgIF1cbiAgICAgIFsgWyAgLTkwLCAgICAgICAgICAgXSwgJ8OOSCcsICAgICAgXVxuICAgICAgWyBbICAtODAsICAgICAgICAgICBdLCAnw45SJywgICAgICBdXG4gICAgICBbIFsgIC0yMSwgICAgICAgICAgIF0sICfDjsKxJywgICAgICBdXG4gICAgICBbIFsgIC0yMCwgICAgICAgICAgIF0sICfDjycsICAgICAgIF1cbiAgICAgIFsgWyAgLTExLCAgICAgICAgICAgXSwgJ8OYJywgICAgICAgXVxuICAgICAgWyBbICAtMTAsICAgICAgICAgICBdLCAnw5knLCAgICAgICBdXG4gICAgICBbIFsgICAtOSwgICAgICAgICAgIF0sICfDmicsICAgICAgIF1cbiAgICAgIFsgWyAgIC04LCAgICAgICAgICAgXSwgJ8ObJywgICAgICAgXVxuICAgICAgWyBbICAgLTcsICAgICAgICAgICBdLCAnw5wnLCAgICAgICBdXG4gICAgICBbIFsgICAtNiwgICAgICAgICAgIF0sICfDnScsICAgICAgIF1cbiAgICAgIFsgWyAgIC01LCAgICAgICAgICAgXSwgJ8OeJywgICAgICAgXVxuICAgICAgWyBbICAgLTQsICAgICAgICAgICBdLCAnw58nLCAgICAgICBdXG4gICAgICBbIFsgICAtMywgICAgICAgICAgIF0sICfDoCcsICAgICAgIF1cbiAgICAgIFsgWyAgIC0yLCAgICAgICAgICAgXSwgJ8OhJywgICAgICAgXVxuICAgICAgWyBbICAgLTEsICAgICAgICAgICBdLCAnw6InLCAgICAgICBdXG4gICAgICBbIFsgICArMCwgIC0yMCwgICAgIF0sICfDo8OPJywgICAgICBdXG4gICAgICBbIFsgICArMCwgICAgICAgICAgIF0sICfDoycsICAgICAgIF1cbiAgICAgIFsgWyAgICswLCAgKzIwLCAgICAgXSwgJ8Ojw7cnLCAgICAgIF1cbiAgICAgIFsgWyAgICs5LCAgICAgICAgICAgXSwgJ8OsJywgICAgICAgXVxuICAgICAgWyBbICArMTAsICAgLTMsICAgICBdLCAnw63DoCcsICAgICAgXVxuICAgICAgWyBbICArMTAsICAgLTIsICAgICBdLCAnw63DoScsICAgICAgXVxuICAgICAgWyBbICArMTAsICAgLTEsICAgICBdLCAnw63DoicsICAgICAgXVxuICAgICAgWyBbICArMTAsICAgICAgICAgICBdLCAnw60nLCAgICAgICBdXG4gICAgICBbIFsgICsxMCwgICArMCwgICAgIF0sICfDrcOjJywgICAgICBdXG4gICAgICBbIFsgICsxMCwgICArMSwgICAgIF0sICfDrcOkJywgICAgICBdXG4gICAgICBbIFsgICsxMCwgICsxMCwgLTEsIF0sICfDrcOtw6InLCAgICAgXVxuICAgICAgWyBbICArMTAsICArMTAsICAgICBdLCAnw63DrScsICAgICAgXVxuICAgICAgWyBbICArMTAsICArMjAsICAgICBdLCAnw63DtycsICAgICAgXVxuICAgICAgWyBbICArMjAsICAgICAgICAgICBdLCAnw7cnLCAgICAgICBdXG4gICAgICBbIFsgICsyMCwgICsxMCwgICAgIF0sICfDt8OtJywgICAgICBdXG4gICAgICBbIFsgICs5MCwgICAgICAgICAgIF0sICfDuH4nLCAgICAgIF1cbiAgICAgIFsgWyArOTAwLCAgICAgICAgICAgXSwgJ8O5KiYnLCAgICAgXVxuICAgICAgXVxuICAgIHVucGFkZGVkX2xpbmVzICAgID0gW11cbiAgICBwYWRkZWRfbGluZXMgICAgICA9IFtdXG4gICAgZXhwZWN0ZWRfaW5kZXhlcyAgPSAoIGlkeCBmb3IgaWR4IGluIFsgMCAuLi4gcHJvYmVzLmxlbmd0aCBdIClcbiAgICBzaHVmZmxlICAgICAgICAgICA9IEdVWS5ybmQuZ2V0X3NodWZmbGUgNTcsIDg4XG4gICAgY29kZWMgICAgICAgICAgICAgPSBob2xsZXJpdGhfMTI4XzE2MzgzXG4gICAgIyBkZWJ1ZyAnzqlobGx0X185NScsIGNvZGVjLmNmZy5fbWF4X2RpZ2l0c19wZXJfaWR4XG4gICAgIyBkZWJ1ZyAnzqlobGx0X185NicsIGNvZGVjLmNmZy56ZXJvX3BhZF9sZW5ndGhcbiAgICBAZXEgKCDOqWhsbHRfXzk3ID0gLT4gY29kZWMuY2ZnLmJhc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgMTI4XG4gICAgQGVxICggzqlobGx0X185OCA9IC0+IGNvZGVjLmNmZy5fbWF4X2ludGVnZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICsxNjM4M1xuICAgIEBlcSAoIM6paGxsdF9fOTkgPSAtPiBjb2RlYy5jZmcuX21pbl9pbnRlZ2VyICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAtMTYzODNcbiAgICBAZXEgKCDOqWhsbHRfMTAwID0gLT4gY29kZWMuY2ZnLnBtYWdfY2hyc1sgMiBdICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8O5J1xuICAgIEBlcSAoIM6paGxsdF8xMDEgPSAtPiBjb2RlYy5jZmcubm1hZ19jaHJzWyAyIF0gICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw40nXG4gICAgQGVxICggzqlobGx0XzEwMiA9IC0+IGNvZGVjLmVuY29kZSBjb2RlYy5jZmcuX21heF9pbnRlZ2VyICAgICAgICAgICAgICAgICksICfDucOGw4YnXG4gICAgQGVxICggzqlobGx0XzEwMyA9IC0+IGNvZGVjLmVuY29kZSBjb2RlYy5jZmcuX21pbl9pbnRlZ2VyICAgICAgICAgICAgICAgICksICfDjSEhJ1xuICAgIEBlcSAoIM6paGxsdF8xMDQgPSAtPiBjb2RlYy5kZWNvZGUgJ8ONISEnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAtMTYzODMgXVxuICAgIEB0aHJvd3MgKCDOqWhsbHRfMTA1ID0gLT4gY29kZWMuZGVjb2RlICfDhyEhISEhISEhJyAgICAgICAgICAgICAgICAgICAgICAgKSwgL25vdCBhIHZhbGlkIHNvcnRrZXkvXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmb3IgWyB2ZHgsIHNrX21hdGNoZXIsIF0sIGlkeCBpbiBwcm9iZXNcbiAgICAgIHVzayAgID0gY29kZWMuZW5jb2RlIHZkeFxuICAgICAgQGVxICggzqlobGx0XzEwNiA9IC0+IHVzayApLCBza19tYXRjaGVyXG4gICAgICAjIGVjaG8gcnByIHVza1xuICAgICAgcHNrICAgPSB1c2sucGFkRW5kIDEwLCBjb2RlYy5jZmcuX2NpcGhlclxuICAgICAgdXNrICAgPSB1c2sucGFkRW5kIDEwLCAnICdcbiAgICAgIHVucGFkZGVkX2xpbmVzLnB1c2ggXCIje3Vza30gI3tycHIgdmR4fSAje2lkeH1cIlxuICAgICAgcGFkZGVkX2xpbmVzLnB1c2ggXCIje3Bza30gI3tycHIgdmR4fSAje2lkeH1cIlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqlobGx0XzEwNyA9IC0+IGNvZGVjLmNmZy5fbWF4X2RpZ2l0c19wZXJfaWR4ICAgICAgICAgICAgICAgICAgICAgICAgKSwgMlxuICAgIEBlcSAoIM6paGxsdF8xMDggPSAtPiBjb2RlYy5jZmcuenB1bl9tYXggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDIwXG4gICAgQGVxICggzqlobGx0XzEwOSA9IC0+IGNvZGVjLmNmZy5fbmF1Z2h0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyEnXG4gICAgQGVxICggzqlobGx0XzExMCA9IC0+IGNvZGVjLmNmZy5fbm92YSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8OGJ1xuICAgIEBlcSAoIM6paGxsdF8xMTEgPSAtPiBjb2RlYy5jZmcuX2NpcGhlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDoydcbiAgICBAZXEgKCDOqWhsbHRfMTEyID0gLT4gY29kZWMuY2ZnLm5tYWcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnIMOOw40nXG4gICAgQGVxICggzqlobGx0XzExMyA9IC0+IGNvZGVjLmNmZy5wbWFnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyDDuMO5J1xuICAgIEBlcSAoIM6paGxsdF8xMTQgPSAtPiBjb2RlYy5jZmcucG1hZ19jaHJzWyBjb2RlYy5jZmcuX21heF9kaWdpdHNfcGVyX2lkeCBdICksICfDuSdcbiAgICBAZXEgKCDOqWhsbHRfMTE1ID0gLT4gY29kZWMuZW5jb2RlIC0xNjM4MyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw40hISdcbiAgICBAZXEgKCDOqWhsbHRfMTE2ID0gLT4gY29kZWMuZW5jb2RlIC0xNjM4MiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw40hIydcbiAgICBAZXEgKCDOqWhsbHRfMTE3ID0gLT4gY29kZWMuZW5jb2RlIC0xMjkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw43DhcOFJ1xuICAgIEBlcSAoIM6paGxsdF8xMTggPSAtPiBjb2RlYy5lbmNvZGUgLTEyOCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDjcOFw4YnXG4gICAgQGVxICggzqlobGx0XzExOSA9IC0+IGNvZGVjLmVuY29kZSAtMTI3ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8OOISdcbiAgICBAZXEgKCDOqWhsbHRfMTIwID0gLT4gY29kZWMuZW5jb2RlIC04MCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw45SJ1xuICAgIEBlcSAoIM6paGxsdF8xMjEgPSAtPiBjb2RlYy5lbmNvZGUgLTIxICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDjsKxJ1xuICAgIEBlcSAoIM6paGxsdF8xMjIgPSAtPiBjb2RlYy5lbmNvZGUgLTIxICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDjsKxJ1xuICAgIEBlcSAoIM6paGxsdF8xMjMgPSAtPiBjb2RlYy5lbmNvZGUgLTIwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDjydcbiAgICBAZXEgKCDOqWhsbHRfMTI0ID0gLT4gY29kZWMuZW5jb2RlIC0xICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw6InXG4gICAgQGVxICggzqlobGx0XzEyNSA9IC0+IGNvZGVjLmVuY29kZSArMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8OjJ1xuICAgIEBlcSAoIM6paGxsdF8xMjYgPSAtPiBjb2RlYy5lbmNvZGUgKzEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDpCdcbiAgICBAZXEgKCDOqWhsbHRfMTI3ID0gLT4gY29kZWMuZW5jb2RlICsyMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw7cnXG4gICAgQGVxICggzqlobGx0XzEyOCA9IC0+IGNvZGVjLmVuY29kZSArMjEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8O4OCdcbiAgICBAZXEgKCDOqWhsbHRfMTI5ID0gLT4gY29kZWMuZW5jb2RlICsxMjcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw7jDhidcbiAgICBAZXEgKCDOqWhsbHRfMTMwID0gLT4gY29kZWMuZW5jb2RlICsxMjggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw7kjISdcbiAgICBAZXEgKCDOqWhsbHRfMTMxID0gLT4gY29kZWMuZW5jb2RlICsxMjkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw7kjIydcbiAgICBAZXEgKCDOqWhsbHRfMTMyID0gLT4gY29kZWMuZW5jb2RlICsxNjM4MiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw7nDhsOFJ1xuICAgIEBlcSAoIM6paGxsdF8xMzMgPSAtPiBjb2RlYy5lbmNvZGUgKzE2MzgzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDucOGw4YnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgKCDOqWhsbHRfMTM0ID0gLT4gY29kZWMuZGVjb2RlICfDjSEhJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAtMTYzODMgXVxuICAgIEBlcSAoIM6paGxsdF8xMzUgPSAtPiBjb2RlYy5kZWNvZGUgJ8ONISMnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIC0xNjM4MiBdXG4gICAgQGVxICggzqlobGx0XzEzNiA9IC0+IGNvZGVjLmRlY29kZSAnw43DhcOFJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAtMTI5IF1cbiAgICBAZXEgKCDOqWhsbHRfMTM3ID0gLT4gY29kZWMuZGVjb2RlICfDjcOFw4YnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIC0xMjggXVxuICAgIEBlcSAoIM6paGxsdF8xMzggPSAtPiBjb2RlYy5kZWNvZGUgJ8OOIScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIC0xMjcgXVxuICAgIEBlcSAoIM6paGxsdF8xMzkgPSAtPiBjb2RlYy5kZWNvZGUgJ8OOwrEnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAtMjEgXVxuICAgIEBlcSAoIM6paGxsdF8xNDAgPSAtPiBjb2RlYy5kZWNvZGUgJ8OPJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIC0yMCBdXG4gICAgQGVxICggzqlobGx0XzE0MSA9IC0+IGNvZGVjLmRlY29kZSAnw6InICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgLTEgXVxuICAgIEBlcSAoIM6paGxsdF8xNDIgPSAtPiBjb2RlYy5kZWNvZGUgJ8OjJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIDAgXVxuICAgIEBlcSAoIM6paGxsdF8xNDMgPSAtPiBjb2RlYy5kZWNvZGUgJ8OkJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIDEgXVxuICAgIEBlcSAoIM6paGxsdF8xNDQgPSAtPiBjb2RlYy5kZWNvZGUgJ8O3JyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIDIwIF1cbiAgICBAZXEgKCDOqWhsbHRfMTQ1ID0gLT4gY29kZWMuZGVjb2RlICfDuDgnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAyMSBdXG4gICAgQGVxICggzqlobGx0XzE0NiA9IC0+IGNvZGVjLmRlY29kZSAnw7jDhicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIDEyNyBdXG4gICAgQGVxICggzqlobGx0XzE0NyA9IC0+IGNvZGVjLmRlY29kZSAnw7kjIScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgMTI4IF1cbiAgICBAZXEgKCDOqWhsbHRfMTQ4ID0gLT4gY29kZWMuZGVjb2RlICfDuSMjJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAxMjkgXVxuICAgIEBlcSAoIM6paGxsdF8xNDkgPSAtPiBjb2RlYy5kZWNvZGUgJ8O5w4bDhScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgMTYzODIgXVxuICAgIEBlcSAoIM6paGxsdF8xNTAgPSAtPiBjb2RlYy5kZWNvZGUgJ8O5w4bDhicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgMTYzODMgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZm9yIF8gaW4gWyAxIC4uIDEwIF1cbiAgICAgIHVucGFkZGVkX2xpbmVzID0gc2h1ZmZsZSB1bnBhZGRlZF9saW5lc1xuICAgICAgdW5wYWRkZWRfbGluZXMuc29ydCgpXG4gICAgICByZWFsX2luZGV4ZXMgPSBbXVxuICAgICAgZm9yIHVsaW5lIGluIHVucGFkZGVkX2xpbmVzXG4gICAgICAgICMgaGVscCAnzqlobGx0XzE1MScsIHVsaW5lXG4gICAgICAgIHJlYWxfaW5kZXhlcy5wdXNoIE51bWJlciB1bGluZS5yZXBsYWNlIC9eLio/XFxzKFswLTldKykkLywgJyQxJ1xuICAgICAgQGVxICggzqlobGx0XzE1MiA9IC0+IGVxdWFscyBleHBlY3RlZF9pbmRleGVzLCByZWFsX2luZGV4ZXMgKSwgZmFsc2VcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGZvciBfIGluIFsgMSAuLiAxMCBdXG4gICAgICBwYWRkZWRfbGluZXMgPSBzaHVmZmxlIHBhZGRlZF9saW5lc1xuICAgICAgcGFkZGVkX2xpbmVzLnNvcnQoKVxuICAgICAgcmVhbF9pbmRleGVzID0gW11cbiAgICAgIGZvciBwbGluZSwgaWR4IGluIHBhZGRlZF9saW5lc1xuICAgICAgICAjIGhlbHAgJ86paGxsdF8xNTMnLCBycHIgcGxpbmUgaWYgXyBpcyAxXG4gICAgICAgIHJlYWxfaW5kZXhlcy5wdXNoIE51bWJlciBwbGluZS5yZXBsYWNlIC9eLio/XFxzKFswLTldKykkLywgJyQxJ1xuICAgICAgQGVxICggzqlobGx0XzE1NCA9IC0+IGVxdWFscyBleHBlY3RlZF9pbmRleGVzLCByZWFsX2luZGV4ZXMgKSwgdHJ1ZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGgxMjhfZGVjb2RlOiAtPlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEyOCxcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwcm9iZXNfYW5kX21hdGNoZXJzID0gW1xuICAgICAgWyAnw4chw4bDhsOGw4bDhsK/O8OjJywgWyAtOTk5LCAgICAgICAgIF0sICdubnVtOsONLMK/O1stOTk5XXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8OHIcOGw4bDhsOGw4bDhj/DoycsIFsgLTk5LCAgICAgICAgICBdLCAnbm51bTrDjiw/Wy05OV18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDhyHDhsOGw4bDhsOGw4ZIw6MnLCBbIC05MCwgICAgICAgICAgXSwgJ25udW06w44sSFstOTBdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw5jDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC0xMSwgICAgICAgICAgXSwgJ251bjrDmFstMTFdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8OZw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtMTAsICAgICAgICAgIF0sICdudW46w5lbLTEwXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDmsOjw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTksICAgICAgICAgICBdLCAnbnVuOsOaWy05XXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw5vDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC04LCAgICAgICAgICAgXSwgJ251bjrDm1stOF18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Ocw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtNywgICAgICAgICAgIF0sICdudW46w5xbLTddfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDncOjw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTYsICAgICAgICAgICBdLCAnbnVuOsOdWy02XXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw57Do8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC01LCAgICAgICAgICAgXSwgJ251bjrDnlstNV18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Ofw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtNCwgICAgICAgICAgIF0sICdudW46w59bLTRdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDoMOjw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTMsICAgICAgICAgICBdLCAnbnVuOsOgWy0zXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw6HDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC0yLCAgICAgICAgICAgXSwgJ251bjrDoVstMl18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Oiw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtMSwgICAgICAgICAgIF0sICdudW46w6JbLTFdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDo8OPw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMCwgLTIwLCAgICAgICBdLCAnemVybzrDo1swXXxudW46w49bLTIwXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgXVxuICAgICAgWyAnw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIDAsICAgICAgICAgICAgXSwgJ3BhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8Ojw6NbMF0nLCAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Ojw7fDo8Ojw6PDo8Ojw6PDo8OjJywgWyAwLCAyMCwgICAgICAgIF0sICd6ZXJvOsOjWzBdfHB1bjrDt1syMF18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICBdXG4gICAgICBbICfDrMOjw6PDo8Ojw6PDo8Ojw6PDoycsIFsgOSwgICAgICAgICAgICBdLCAncHVuOsOsWzldfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw63DoMOjw6PDo8Ojw6PDo8Ojw6MnLCBbIDEwLCAtMywgICAgICAgXSwgJ3B1bjrDrVsxMF18bnVuOsOgWy0zXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Otw6HDo8Ojw6PDo8Ojw6PDo8OjJywgWyAxMCwgLTIsICAgICAgIF0sICdwdW46w61bMTBdfG51bjrDoVstMl18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICBdXG4gICAgICBbICfDrcOiw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMTAsIC0xLCAgICAgICBdLCAncHVuOsOtWzEwXXxudW46w6JbLTFdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgXVxuICAgICAgWyAnw63Do8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIDEwLCAgICAgICAgICAgXSwgJ3B1bjrDrVsxMF18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Otw6TDo8Ojw6PDo8Ojw6PDo8OjJywgWyAxMCwgMSwgICAgICAgIF0sICdwdW46w61bMTBdfHB1bjrDpFsxXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICBdXG4gICAgICBbICfDrcOtw6LDo8Ojw6PDo8Ojw6PDoycsIFsgMTAsIDEwLCAtMSwgICBdLCAncHVuOsOtWzEwXXxwdW46w61bMTBdfG51bjrDolstMV18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDoycsICAgXVxuICAgICAgWyAnw63DrcOjw6PDo8Ojw6PDo8Ojw6MnLCBbIDEwLCAxMCwgICAgICAgXSwgJ3B1bjrDrVsxMF18cHVuOsOtWzEwXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Otw7fDo8Ojw6PDo8Ojw6PDo8OjJywgWyAxMCwgMjAsICAgICAgIF0sICdwdW46w61bMTBdfHB1bjrDt1syMF18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICBdXG4gICAgICBbICfDt8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMjAsICAgICAgICAgICBdLCAncHVuOsO3WzIwXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw7fDrcOjw6PDo8Ojw6PDo8Ojw6MnLCBbIDIwLCAxMCwgICAgICAgXSwgJ3B1bjrDt1syMF18cHVuOsOtWzEwXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgIF1cbiAgICAgIFsgJ8O4fsOjw6PDo8Ojw6PDo8Ojw6MnLCBbIDkwLCAgICAgICAgICAgXSwgJ3BudW06w7gsfls5MF18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw7kqJsOjw6PDo8Ojw6PDo8OjJywgWyA5MDAsICAgICAgICAgIF0sICdwbnVtOsO5LComWzkwMF18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgXVxuICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY29kZWMgPSBob2xsZXJpdGhfMTI4XG4gICAgZm9yIFsgc29ydGtleSwgaW5kZXhfbWF0Y2hlciwgdW5pdF9tYXRjaGVyLCBdIGluIHByb2Jlc19hbmRfbWF0Y2hlcnNcbiAgICAgIHVuaXRfcmVzdWx0ICAgICA9IFtdXG4gICAgICBpbmRleF9yZXN1bHQgICAgPSBbXVxuICAgICAgZm9yIHVuaXQgaW4gY29kZWMucGFyc2Ugc29ydGtleVxuICAgICAgICB1bml0X3Jlc3VsdC5wdXNoICBoZWxwZXJzLnJwcl91bml0IHVuaXRcbiAgICAgICAgaW5kZXhfcmVzdWx0LnB1c2ggdW5pdC5pbmRleCBpZiB1bml0LmluZGV4P1xuICAgICAgdW5pdF9yZXN1bHQgICA9IHVuaXRfcmVzdWx0LmpvaW4gJ3wnXG4gICAgICAjIGluZm8gJ86paGxsdF8xNTUnLCBmXCIjeyggcnByIHVuaXRfcmVzdWx0ICkgKyAnLCd9Ojw2MGM7ICN7cnByIGluZGV4X3Jlc3VsdH1cIlxuICAgICMgICBAZXEgKCDOqWhsbHRfMTU2ID0gLT4gIHVuaXRfcmVzdWx0ICAgICAgICAgICAgICAgICAgICAgKSwgIHVuaXRfbWF0Y2hlclxuICAgICAgQGVxICggzqlobGx0XzE1NyA9IC0+IGluZGV4X3Jlc3VsdCAgICAgICAgICAgICAgICAgICAgICksIGluZGV4X21hdGNoZXJcbiAgICAgIEBlcSAoIM6paGxsdF8xNTggPSAtPiBzb3J0a2V5ICksICggY29kZWMuZW5jb2RlIGluZGV4X21hdGNoZXIgKS5wYWRFbmQgc29ydGtleS5sZW5ndGgsIGNvZGVjLmNmZy56cHVuc1sgMCBdXG4gICAgICAjIGRlYnVnICfOqWhsbHRfMTU5JywgcnByICggY29kZWMuZW5jb2RlIGluZGV4X21hdGNoZXIgKS5wYWRFbmQgc29ydGtleS5sZW5ndGgsIGNvZGVjLmNmZy56cHVuc1sgMCBdXG4gICAgICBAZXEgKCDOqWhsbHRfMTYwID0gLT4gY29kZWMuZGVjb2RlIHNvcnRrZXkgICksIGluZGV4X21hdGNoZXJcbiAgICAgICMgZWNobyBbIHNvcnRrZXksIGluZGV4X3Jlc3VsdCwgdW5pdF9yZXN1bHQsIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgQGVxICAgICAoIM6paGxsdF8xNjEgPSAtPiBjb2RlYy5wYXJzZSAnNScgICAgICAgICAgKSwgWyB7IG5hbWU6ICdvdGhlcicsIGxldHRlcnM6ICc1JywgbWFudGlzc2E6IG51bGwsIGluZGV4OiBudWxsIH0gXVxuICAgICMgQGVxICAgICAoIM6paGxsdF8xNjIgPSAtPiBjb2RlYy5wYXJzZSAnw6TDtsO8JyAgICAgICAgKSwgWyB7IG5hbWU6ICdvdGhlcicsIGxldHRlcnM6ICfDpMO2w7wnLCBtYW50aXNzYTogbnVsbCwgaW5kZXg6IG51bGwgfSBdXG4gICAgIyBAZXEgICAgICggzqlobGx0XzE2MyA9IC0+IGNvZGVjLnBhcnNlICdZOTAww6TDtsO8JyAgICApLCBbIHsgbmFtZTogJ3BudW0nLCBsZXR0ZXJzOiAnWScsIG1hbnRpc3NhOiAnOTAwJywgaW5kZXg6IDkwMCB9LCB7IG5hbWU6ICdvdGhlcicsIGxldHRlcnM6ICfDpMO2w7wnLCBtYW50aXNzYTogbnVsbCwgaW5kZXg6IG51bGwgfSBdXG4gICAgIyBAdGhyb3dzICggzqlobGx0XzE2NCA9IC0+IGNvZGVjLmRlY29kZSAnNScgICAgICAgICApLCAvbm90IGEgdmFsaWQgc29ydGtleTogdW5hYmxlIHRvIHBhcnNlICc1Jy9cbiAgICAjIEB0aHJvd3MgKCDOqWhsbHRfMTY1ID0gLT4gY29kZWMuZGVjb2RlICfDpMO2w7wnICAgICAgICksIC9ub3QgYSB2YWxpZCBzb3J0a2V5OiB1bmFibGUgdG8gcGFyc2UgJ8Okw7bDvCcvXG4gICAgIyBAdGhyb3dzICggzqlobGx0XzE2NiA9IC0+IGNvZGVjLmRlY29kZSAnw6TDtsO8JyAgICAgICApLCAvbm90IGEgdmFsaWQgc29ydGtleTogdW5hYmxlIHRvIHBhcnNlICfDvCcgaW4gJ1k5MDDDpMO2w7wnL1xuICAgICMgQHRocm93cyAoIM6paGxsdF8xNjcgPSAtPiBjb2RlYy5kZWNvZGUgJ1k5MDDDpMO2w7wnICAgKSwgL25vdCBhIHZhbGlkIHNvcnRrZXk6IHVuYWJsZSB0byBwYXJzZSAnWTkwMCcgaW4gJ1k5MDDDpMO2w7wnL1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBkZWJ1ZyAnzqlobGx0XzE2OCcsIHJwciBjb2RlYy5lbmNvZGUgLTkwICMgICAgWyAnw43CvzvDo8Ojw6PDo8Ojw6PDoycsIFsgLTk5OSwgICAgICAgICBdLCAnbm51bTrDjSzCvztbLTk5OV18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICBdXG4gICAgIyBkZWJ1ZyAnzqlobGx0XzE2OScsIHJwciBjb2RlYy5kZWNvZGUgJ8OHIcOGw4bDhsOGw4bDhkgnICMgICAgWyAnw43CvzvDo8Ojw6PDo8Ojw6PDoycsIFsgLTk5OSwgICAgICAgICBdLCAnbm51bTrDjSzCvztbLTk5OV18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICBdXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGgxMG12cDJfZGVjb2RlX3VuaXRzOiAtPlxuICAgICMjIyBOT1RFIGFsc28gc2VlIGNvcnJlc3BvbmRpbmcgdGVzdCBpbiBgaGVuZ2lzdC1ORy9kZXYvaW50ZXJsZXgvc3JjL3Rlc3QtaG9sbGVyaXRoLmNvZmZlZWAgIyMjXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICB7IEhvbGxlcml0aCxcbiAgICAgIGhvbGxlcml0aF8xMG12cDIsXG4gICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgIyB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwcm9iZXNfYW5kX21hdGNoZXJzID0gW1xuICAgICAgWyAnQTAwME5OTk5OTicsIFsgLTk5OSAgICAgICAgXSwgJ25udW06QSwwMDBbLTk5OV18cGFkZGluZzpOTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0IwME5OTk5OTk4nLCBbIC05OSAgICAgICAgIF0sICdubnVtOkIsMDBbLTk5XXxwYWRkaW5nOk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdCMDlOTk5OTk5OJywgWyAtOTAgICAgICAgICBdLCAnbm51bTpCLDA5Wy05MF18cGFkZGluZzpOTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnQjg4Tk5OTk5OTicsIFsgLTExICAgICAgICAgXSwgJ25udW06Qiw4OFstMTFdfHBhZGRpbmc6Tk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0I4OU5OTk5OTk4nLCBbIC0xMCAgICAgICAgIF0sICdubnVtOkIsODlbLTEwXXxwYWRkaW5nOk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdFTk5OTk5OTk5OJywgWyAtOSAgICAgICAgICBdLCAnbnVuOkVbLTldfHBhZGRpbmc6Tk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnRk5OTk5OTk5OTicsIFsgLTggICAgICAgICAgXSwgJ251bjpGWy04XXxwYWRkaW5nOk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0dOTk5OTk5OTk4nLCBbIC03ICAgICAgICAgIF0sICdudW46R1stN118cGFkZGluZzpOTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdITk5OTk5OTk5OJywgWyAtNiAgICAgICAgICBdLCAnbnVuOkhbLTZdfHBhZGRpbmc6Tk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnSU5OTk5OTk5OTicsIFsgLTUgICAgICAgICAgXSwgJ251bjpJWy01XXxwYWRkaW5nOk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0pOTk5OTk5OTk4nLCBbIC00ICAgICAgICAgIF0sICdudW46SlstNF18cGFkZGluZzpOTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdLTk5OTk5OTk5OJywgWyAtMyAgICAgICAgICBdLCAnbnVuOktbLTNdfHBhZGRpbmc6Tk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnTE5OTk5OTk5OTicsIFsgLTIgICAgICAgICAgXSwgJ251bjpMWy0yXXxwYWRkaW5nOk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ01OTk5OTk5OTk4nLCBbIC0xICAgICAgICAgIF0sICdudW46TVstMV18cGFkZGluZzpOTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdOQjc5Tk5OTk5OJywgWyAwLCAtMjAgICAgICBdLCAnemVybzpOWzBdfG5udW06Qiw3OVstMjBdfHBhZGRpbmc6Tk5OTk5OJywgICAgICAgICAgICAgXVxuICAgICAgWyAnTk5OTk5OTk5OTicsIFsgMCAgICAgICAgICAgXSwgJ3BhZGRpbmc6Tk5OTk5OTk5OTlswXScsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ05ZMjBOTk5OTk4nLCBbIDAsIDIwICAgICAgIF0sICd6ZXJvOk5bMF18cG51bTpZLDIwWzIwXXxwYWRkaW5nOk5OTk5OTicsICAgICAgICAgICAgICBdXG4gICAgICBbICdXTk5OTk5OTk5OJywgWyA5ICAgICAgICAgICBdLCAncHVuOldbOV18cGFkZGluZzpOTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnWTEwS05OTk5OTicsIFsgMTAsIC0zICAgICAgXSwgJ3BudW06WSwxMFsxMF18bnVuOktbLTNdfHBhZGRpbmc6Tk5OTk5OJywgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ1kxMExOTk5OTk4nLCBbIDEwLCAtMiAgICAgIF0sICdwbnVtOlksMTBbMTBdfG51bjpMWy0yXXxwYWRkaW5nOk5OTk5OTicsICAgICAgICAgICAgICBdXG4gICAgICBbICdZMTBNTk5OTk5OJywgWyAxMCwgLTEgICAgICBdLCAncG51bTpZLDEwWzEwXXxudW46TVstMV18cGFkZGluZzpOTk5OTk4nLCAgICAgICAgICAgICAgXVxuICAgICAgWyAnWTEwTk5OTk5OTicsIFsgMTAgICAgICAgICAgXSwgJ3BudW06WSwxMFsxMF18cGFkZGluZzpOTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ1kxME9OTk5OTk4nLCBbIDEwLCAxICAgICAgIF0sICdwbnVtOlksMTBbMTBdfHB1bjpPWzFdfHBhZGRpbmc6Tk5OTk5OJywgICAgICAgICAgICAgICBdXG4gICAgICBbICdZMTBZMTBNTk5OJywgWyAxMCwgMTAsIC0xICBdLCAncG51bTpZLDEwWzEwXXxwbnVtOlksMTBbMTBdfG51bjpNWy0xXXxwYWRkaW5nOk5OTicsICAgXVxuICAgICAgWyAnWTEwWTEwTk5OTicsIFsgMTAsIDEwICAgICAgXSwgJ3BudW06WSwxMFsxMF18cG51bTpZLDEwWzEwXXxwYWRkaW5nOk5OTk4nLCAgICAgICAgICAgIF1cbiAgICAgIFsgJ1kxMFkyME5OTk4nLCBbIDEwLCAyMCAgICAgIF0sICdwbnVtOlksMTBbMTBdfHBudW06WSwyMFsyMF18cGFkZGluZzpOTk5OJywgICAgICAgICAgICBdXG4gICAgICBbICdZMjBOTk5OTk5OJywgWyAyMCAgICAgICAgICBdLCAncG51bTpZLDIwWzIwXXxwYWRkaW5nOk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnWTIwWTEwTk5OTicsIFsgMjAsIDEwICAgICAgXSwgJ3BudW06WSwyMFsyMF18cG51bTpZLDEwWzEwXXxwYWRkaW5nOk5OTk4nLCAgICAgICAgICAgIF1cbiAgICAgIFsgJ1k5ME5OTk5OTk4nLCBbIDkwICAgICAgICAgIF0sICdwbnVtOlksOTBbOTBdfHBhZGRpbmc6Tk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdaOTAwTk5OTk5OJywgWyA5MDAgICAgICAgICBdLCAncG51bTpaLDkwMFs5MDBdfHBhZGRpbmc6Tk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnTk5OTk5OTk5OJywgIFsgMCAgICAgICAgICAgXSwgJ3BhZGRpbmc6Tk5OTk5OTk5OWzBdJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ05OJywgICAgICAgICBbIDAgICAgICAgICAgIF0sICdwYWRkaW5nOk5OWzBdJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdOJywgICAgICAgICAgWyAwICAgICAgICAgICBdLCAncGFkZGluZzpOWzBdJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnWTEwJywgICAgICAgIFsgMTAgICAgICAgICAgXSwgJ3BudW06WSwxMFsxMF0nLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0snLCAgICAgICAgICBbIC0zICAgICAgICAgIF0sICdudW46S1stM10nLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjb2RlYyAgICAgICAgICAgPSBob2xsZXJpdGhfMTBtdnAyXG4gICAgc29ydGtleV9wYWRkZXIgID0gY29kZWMuY2ZnLnpwdW5fY2hyc1sgMCBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmb3IgWyBzb3J0a2V5LCBpbmRleF9tYXRjaGVyLCB1bml0X21hdGNoZXIsIF0gaW4gcHJvYmVzX2FuZF9tYXRjaGVyc1xuICAgICAgdW5pdF9yZXN1bHQgICAgID0gW11cbiAgICAgIGluZGV4X3Jlc3VsdCAgICA9IFtdXG4gICAgICBmb3IgdW5pdCBpbiBjb2RlYy5wYXJzZSBzb3J0a2V5XG4gICAgICAgIHVuaXRfcmVzdWx0LnB1c2ggIGhlbHBlcnMucnByX3VuaXQgdW5pdFxuICAgICAgICBpbmRleF9yZXN1bHQucHVzaCB1bml0LmluZGV4IGlmIHVuaXQuaW5kZXg/XG4gICAgICB1bml0X3Jlc3VsdCAgID0gdW5pdF9yZXN1bHQuam9pbiAnfCdcbiAgICAgICMgaW5mbyAnzqlobGx0XzE3MCcsIGZcIiN7KCBycHIgdW5pdF9yZXN1bHQgKSArICcsJ306PDYwYzsgI3tycHIgaW5kZXhfcmVzdWx0fVwiXG4gICAgICBAZXEgKCDOqWhsbHRfMTcxID0gLT4gdW5pdF9yZXN1bHQgICAgICAgICAgICAgICAgICAgICAgKSwgdW5pdF9tYXRjaGVyXG4gICAgICBAZXEgKCDOqWhsbHRfMTcyID0gLT4gaW5kZXhfcmVzdWx0ICAgICAgICAgICAgICAgICAgICAgKSwgaW5kZXhfbWF0Y2hlclxuICAgICAgQGVxICggzqlobGx0XzE3MyA9IC0+IGNvZGVjLmRlY29kZSBzb3J0a2V5ICAgICAgICAgICAgICksIGluZGV4X21hdGNoZXJcbiAgICAgIEBlcSAoIM6paGxsdF8xNzQgPSAtPiBzb3J0a2V5ICAgICAgICAgICAgICAgICAgICAgICAgICApLCAoIGNvZGVjLmVuY29kZSBpbmRleF9tYXRjaGVyICkucGFkRW5kIHNvcnRrZXkubGVuZ3RoLCBzb3J0a2V5X3BhZGRlclxuICAgICAgIyBlY2hvIFsgc29ydGtleSwgaW5kZXhfcmVzdWx0LCB1bml0X3Jlc3VsdCwgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICAgICAoIM6paGxsdF8xNzUgPSAtPiBjb2RlYy5wYXJzZSAnNScgICAgICAgICApLCBbIHsgbmFtZTogJ290aGVyJywgbGV0dGVyczogJzUnLCBtYW50aXNzYTogbnVsbCwgaW5kZXg6IG51bGwgfSBdXG4gICAgQGVxICAgICAoIM6paGxsdF8xNzYgPSAtPiBjb2RlYy5wYXJzZSAnw6TDtsO8JyAgICAgICApLCBbIHsgbmFtZTogJ290aGVyJywgbGV0dGVyczogJ8Okw7bDvCcsIG1hbnRpc3NhOiBudWxsLCBpbmRleDogbnVsbCB9IF1cbiAgICBAZXEgICAgICggzqlobGx0XzE3NyA9IC0+IGNvZGVjLnBhcnNlICdZOTAww6TDtsO8JyAgICksIFsgeyBuYW1lOiAncG51bScsIGxldHRlcnM6ICdZJywgbWFudGlzc2E6ICc5MDAnLCBpbmRleDogOTAwIH0sIHsgbmFtZTogJ290aGVyJywgbGV0dGVyczogJ8Okw7bDvCcsIG1hbnRpc3NhOiBudWxsLCBpbmRleDogbnVsbCB9IF1cbiAgICBAdGhyb3dzICggzqlobGx0XzE3OCA9IC0+IGNvZGVjLmRlY29kZSAnNScgICAgICAgICksIC9ub3QgYSB2YWxpZCBzb3J0a2V5OiB1bmFibGUgdG8gcGFyc2UgJzUnL1xuICAgIEB0aHJvd3MgKCDOqWhsbHRfMTc5ID0gLT4gY29kZWMuZGVjb2RlICfDpMO2w7wnICAgICAgKSwgL25vdCBhIHZhbGlkIHNvcnRrZXk6IHVuYWJsZSB0byBwYXJzZSAnw6TDtsO8Jy9cbiAgICBAdGhyb3dzICggzqlobGx0XzE4MCA9IC0+IGNvZGVjLmRlY29kZSAnWTkwMMOkw7bDvCcgICksIC9ub3QgYSB2YWxpZCBzb3J0a2V5OiB1bmFibGUgdG8gcGFyc2UgJ8Okw7bDvCcgaW4gJ1k5MDDDpMO2w7wnL1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyBoMTI4Yl9kZWNvZGU6IC0+XG4gICMgICB7IEhvbGxlcml0aCxcbiAgIyAgICAgaG9sbGVyaXRoXzEyOCxcbiAgIyAgICAgaG9sbGVyaXRoXzEwbXZwLFxuICAjICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICMgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgIyAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICAjIGNvZGVjID0gaG9sbGVyaXRoXzEyOFxuICAjICAgY29kZWMgPSBob2xsZXJpdGhfMTBtdnBcbiAgIyAgIGRlYnVnICfOqWhsbHRfMTgxJywgcnByIGNvZGVjLmVuY29kZSAtMVxuICAjICAgZGVidWcgJ86paGxsdF8xODInLCBycHIgY29kZWMuZW5jb2RlIC0yXG4gICMgICBuID0gICAtMTAwOyB1cmdlICfOqWhsbHRfMTgzJywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAjICAgbiA9ICAgIC0yMTsgdXJnZSAnzqlobGx0XzE4NCcsIGZcIiN7IHJwciBbIG4sIF0gfTo+MTBjOyAje3JwciBzayA9IGNvZGVjLmVuY29kZSBufTo8NWM7ICN7IHJwciBjb2RlYy5kZWNvZGUgc2t9Oj4xMGM7XCJcbiAgIyAgIG4gPSAgICAtMjA7IHVyZ2UgJ86paGxsdF8xODUnLCBmXCIjeyBycHIgWyBuLCBdIH06PjEwYzsgI3tycHIgc2sgPSBjb2RlYy5lbmNvZGUgbn06PDVjOyAjeyBycHIgY29kZWMuZGVjb2RlIHNrfTo+MTBjO1wiXG4gICMgICBuID0gICAgLTE5OyB1cmdlICfOqWhsbHRfMTg2JywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAjICAgbiA9ICAgICAtMTsgdXJnZSAnzqlobGx0XzE4NycsIGZcIiN7IHJwciBbIG4sIF0gfTo+MTBjOyAje3JwciBzayA9IGNvZGVjLmVuY29kZSBufTo8NWM7ICN7IHJwciBjb2RlYy5kZWNvZGUgc2t9Oj4xMGM7XCJcbiAgIyAgIG4gPSAgICAgIDA7IHVyZ2UgJ86paGxsdF8xODgnLCBmXCIjeyBycHIgWyBuLCBdIH06PjEwYzsgI3tycHIgc2sgPSBjb2RlYy5lbmNvZGUgbn06PDVjOyAjeyBycHIgY29kZWMuZGVjb2RlIHNrfTo+MTBjO1wiXG4gICMgICBuID0gICAgICAxOyB1cmdlICfOqWhsbHRfMTg5JywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAjICAgbiA9ICAgICAgMjsgdXJnZSAnzqlobGx0XzE5MCcsIGZcIiN7IHJwciBbIG4sIF0gfTo+MTBjOyAje3JwciBzayA9IGNvZGVjLmVuY29kZSBufTo8NWM7ICN7IHJwciBjb2RlYy5kZWNvZGUgc2t9Oj4xMGM7XCJcbiAgIyAgIG4gPSAgICAgIDM7IHVyZ2UgJ86paGxsdF8xOTEnLCBmXCIjeyBycHIgWyBuLCBdIH06PjEwYzsgI3tycHIgc2sgPSBjb2RlYy5lbmNvZGUgbn06PDVjOyAjeyBycHIgY29kZWMuZGVjb2RlIHNrfTo+MTBjO1wiXG4gICMgICBuID0gICAgIDEwOyB1cmdlICfOqWhsbHRfMTkyJywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAjICAgbiA9ICAgIDEyNjsgdXJnZSAnzqlobGx0XzE5MycsIGZcIiN7IHJwciBbIG4sIF0gfTo+MTBjOyAje3JwciBzayA9IGNvZGVjLmVuY29kZSBufTo8NWM7ICN7IHJwciBjb2RlYy5kZWNvZGUgc2t9Oj4xMGM7XCJcbiAgIyAgIG4gPSAgICAxMjc7IHVyZ2UgJ86paGxsdF8xOTQnLCBmXCIjeyBycHIgWyBuLCBdIH06PjEwYzsgI3tycHIgc2sgPSBjb2RlYy5lbmNvZGUgbn06PDVjOyAjeyBycHIgY29kZWMuZGVjb2RlIHNrfTo+MTBjO1wiXG4gICMgICBuID0gICAgMTI4OyB1cmdlICfOqWhsbHRfMTk1JywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAjICAgbiA9ICAgIDEyOTsgdXJnZSAnzqlobGx0XzE5NicsIGZcIiN7IHJwciBbIG4sIF0gfTo+MTBjOyAje3JwciBzayA9IGNvZGVjLmVuY29kZSBufTo8NWM7ICN7IHJwciBjb2RlYy5kZWNvZGUgc2t9Oj4xMGM7XCJcbiAgIyAgICMgZm9yIFsgc29ydGtleSwgaW5kZXhfbWF0Y2hlciwgdW5pdF9tYXRjaGVyLCBdIGluIHByb2Jlc19hbmRfbWF0Y2hlcnNcbiAgIyAgICMgICB1bml0X3Jlc3VsdCAgICAgPSBbXVxuICAjICAgIyAgIGluZGV4X3Jlc3VsdCAgICA9IFtdXG4gICMgICAjICAgZm9yIHVuaXQgaW4gY29kZWMucGFyc2Ugc29ydGtleVxuICAjICAgIyAgICAgdW5pdF9yZXN1bHQucHVzaCAgaGVscGVycy5ycHJfdW5pdCB1bml0XG4gICMgICAjICAgICBpbmRleF9yZXN1bHQucHVzaCB1bml0LmluZGV4IGlmIHVuaXQuaW5kZXg/XG4gICMgICAjICAgdW5pdF9yZXN1bHQgICA9IHVuaXRfcmVzdWx0LmpvaW4gJ3wnXG4gICMgICAjICAgaW5mbyAnzqlobGx0XzE5NycsIGZcIiN7KCBycHIgdW5pdF9yZXN1bHQgKSArICcsJ306PDYwYzsgI3tycHIgaW5kZXhfcmVzdWx0fVwiXG4gICMgICAjICMgICBAZXEgKCDOqWhsbHRfMTk4ID0gLT4gIHVuaXRfcmVzdWx0ICAgICAgICAgICAgICAgICAgICAgKSwgIHVuaXRfbWF0Y2hlclxuICAjICAgIyAgIEBlcSAoIM6paGxsdF8xOTkgPSAtPiBpbmRleF9yZXN1bHQgICAgICAgICAgICAgICAgICAgICApLCBpbmRleF9tYXRjaGVyXG4gICMgICAjICAgQGVxICggzqlobGx0XzIwMCA9IC0+IHNvcnRrZXkgKSwgKCBjb2RlYy5lbmNvZGUgaW5kZXhfbWF0Y2hlciApLnBhZEVuZCBzb3J0a2V5Lmxlbmd0aCwgY29kZWMuY2ZnLnpwdW5zWyAwIF1cbiAgIyAgICMgICBkZWJ1ZyAnzqlobGx0XzIwMScsIHJwciAoIGNvZGVjLmVuY29kZSBpbmRleF9tYXRjaGVyICkucGFkRW5kIHNvcnRrZXkubGVuZ3RoLCBjb2RlYy5jZmcuenB1bnNbIDAgXVxuICAjICAgIyAgIEBlcSAoIM6paGxsdF8yMDIgPSAtPiBjb2RlYy5kZWNvZGUgc29ydGtleSAgKSwgaW5kZXhfbWF0Y2hlclxuICAjICAgIyAgICMgZWNobyBbIHNvcnRrZXksIGluZGV4X3Jlc3VsdCwgdW5pdF9yZXN1bHQsIF1cbiAgIyAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgIyAgICMgQGVxICAgICAoIM6paGxsdF8yMDMgPSAtPiBjb2RlYy5wYXJzZSAnNScgICAgICAgICApLCBbIHsgbmFtZTogJ290aGVyJywgbGV0dGVyczogJzUnLCBtYW50aXNzYTogbnVsbCwgaW5kZXg6IG51bGwgfSBdXG4gICMgICAjIEBlcSAgICAgKCDOqWhsbHRfMjA0ID0gLT4gY29kZWMucGFyc2UgJ8Okw7bDvCcgICAgICAgKSwgWyB7IG5hbWU6ICdvdGhlcicsIGxldHRlcnM6ICfDpMO2w7wnLCBtYW50aXNzYTogbnVsbCwgaW5kZXg6IG51bGwgfSBdXG4gICMgICAjIEBlcSAgICAgKCDOqWhsbHRfMjA1ID0gLT4gY29kZWMucGFyc2UgJ1k5MDDDpMO2w7wnICAgKSwgWyB7IG5hbWU6ICdwbnVtJywgbGV0dGVyczogJ1knLCBtYW50aXNzYTogJzkwMCcsIGluZGV4OiA5MDAgfSwgeyBuYW1lOiAnb3RoZXInLCBsZXR0ZXJzOiAnw6TDtsO8JywgbWFudGlzc2E6IG51bGwsIGluZGV4OiBudWxsIH0gXVxuICAjICAgIyBAdGhyb3dzICggzqlobGx0XzIwNiA9IC0+IGNvZGVjLmRlY29kZSAnNScgICAgICAgICksIC9ub3QgYSB2YWxpZCBzb3J0a2V5OiB1bmFibGUgdG8gcGFyc2UgJzUnL1xuICAjICAgIyBAdGhyb3dzICggzqlobGx0XzIwNyA9IC0+IGNvZGVjLmRlY29kZSAnw6TDtsO8JyAgICAgICksIC9ub3QgYSB2YWxpZCBzb3J0a2V5OiB1bmFibGUgdG8gcGFyc2UgJ8Okw7bDvCcvXG4gICMgICAjIEB0aHJvd3MgKCDOqWhsbHRfMjA4ID0gLT4gY29kZWMuZGVjb2RlICdZOTAww6TDtsO8JyAgKSwgL25vdCBhIHZhbGlkIHNvcnRrZXk6IHVuYWJsZSB0byBwYXJzZSAnw6TDtsO8JyBpbiAnWTkwMMOkw7bDvCcvXG4gICMgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAjICAgcmV0dXJuIG51bGxcblxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdHlwZXM6IC0+XG4gICAgeyBpbnRlcm5hbHMsXG4gICAgICBIb2xsZXJpdGhfdHlwZXNwYWNlLFxuICAgICAgQ0ZHLCAgICAgICAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aC9saWIvdHlwZXMnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgeyBwaWNrLCAgICAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3BpY2soKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIFQgPSBuZXcgSG9sbGVyaXRoX3R5cGVzcGFjZSgpXG4gICAgICBAZXEgKCDOqWhsbHRfMjA5ID0gLT4gVFtDRkddLmJsYW5rICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdcXHgyMCdcbiAgICAgIEBlcSAoIM6paGxsdF8yMTAgPSAtPiBUW0NGR10uYmxhbmtfc3BsaXR0ZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgLyg/OlxceDIwKSsvZ3ZcbiAgICAgIEBlcSAoIM6paGxsdF8yMTEgPSAtPiBUW0NGR10uYmxhbmtfc3BsaXR0ZXIudW5pY29kZVNldHMgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlobGx0XzIxMiA9IC0+IFRbQ0ZHXS5ibGFua19zcGxpdHRlci5nbG9iYWwgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWhsbHRfMjEzID0gLT4gJ2EgICBnICB6ICAnLnJlcGxhY2UgVFtDRkddLmJsYW5rX3NwbGl0dGVyLCAnw7wnICApLCAnYcO8Z8O8esO8J1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBUID0gbmV3IEhvbGxlcml0aF90eXBlc3BhY2UgeyBibGFuazogJyMnLCB9XG4gICAgICBAZXEgKCDOqWhsbHRfMjE0ID0gLT4gVFtDRkddLmJsYW5rICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcjJ1xuICAgICAgQGVxICggzqlobGx0XzIxNSA9IC0+IFRbQ0ZHXS5ibGFua19zcGxpdHRlciAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvKD86XFx4MjMpKy9ndlxuICAgICAgQGVxICggzqlobGx0XzIxNiA9IC0+IFRbQ0ZHXS5ibGFua19zcGxpdHRlci51bmljb2RlU2V0cyAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWhsbHRfMjE3ID0gLT4gVFtDRkddLmJsYW5rX3NwbGl0dGVyLmdsb2JhbCAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paGxsdF8yMTggPSAtPiAnYSMjI2cjI3ojIycucmVwbGFjZSBUW0NGR10uYmxhbmtfc3BsaXR0ZXIsICfDvCcgICksICdhw7xnw7x6w7wnXG4gICAgICBAZXEgKCDOqWhsbHRfMjE5ID0gLT4gVC5tYWduaWZpZXJzLmlzYSAnQUJDIFhZWicgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWhsbHRfMjIwID0gLT4gVC5tYWduaWZpZXJzLmlzYSAnQUJDI1hZWicgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paGxsdF8yMjEgPSAtPiBULmJsYW5rLmlzYSAnICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paGxsdF8yMjIgPSAtPiBULmJsYW5rLmlzYSAnIycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlobGx0XzIyMyA9IC0+IFQuYmxhbmsuaXNhIFRbQ0ZHXS5ibGFuayAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgVCA9IG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlKClcbiAgICBAZXEgKCDOqWhsbHRfMjI0ID0gLT4gVC5ub25lbXB0eV90ZXh0LmlzYSA0ICAgICAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjI1ID0gLT4gVC5ub25lbXB0eV90ZXh0LmlzYSBmYWxzZSAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjI2ID0gLT4gVC5ub25lbXB0eV90ZXh0LmlzYSAnJyAgICAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjI3ID0gLT4gVC5ub25lbXB0eV90ZXh0LmlzYSAneWVzJyAgICAgICAgKSwgdHJ1ZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqlobGx0XzIyOCA9IC0+IFQuaW5jcmVtZW50YWxfdGV4dC5pc2EgJ3llcycgICAgICksIGZhbHNlXG4gICAgQGVxICggzqlobGx0XzIyOSA9IC0+IFQuZGVjcmVtZW50YWxfdGV4dC5pc2EgJ3llcycgICAgICksIGZhbHNlXG4gICAgQGVxICggzqlobGx0XzIzMCA9IC0+IFQuaW5jcmVtZW50YWxfdGV4dC5kYXRhICAgICAgICAgICksIHsgY2hyczogWyAneScsICdlJywgJ3MnIF0sIGZhaWw6IHsgeDogJ3llcycsIGlkeDogMSwgcHJ2X2NocjogJ3knLCBjaHI6ICdlJyB9IH1cbiAgICBAZXEgKCDOqWhsbHRfMjMxID0gLT4gVC5pbmNyZW1lbnRhbF90ZXh0LmlzYSAnYWJjZGVmeicgKSwgdHJ1ZVxuICAgIEBlcSAoIM6paGxsdF8yMzIgPSAtPiBULmRlY3JlbWVudGFsX3RleHQuaXNhICdhYmNkZWZ6JyApLCBmYWxzZVxuICAgIEBlcSAoIM6paGxsdF8yMzMgPSAtPiBULmluY3JlbWVudGFsX3RleHQuZGF0YSAgICAgICAgICApLCB7IGNocnM6IFsgJ2EnLCAnYicsICdjJywgJ2QnLCAnZScsICdmJywgJ3onLCBdLCB9XG4gICAgQGVxICggzqlobGx0XzIzNCA9IC0+IFQuZGVjcmVtZW50YWxfdGV4dC5kYXRhICAgICAgICAgICksIHsgY2hyczogWyAnYScsICdiJywgJ2MnLCAnZCcsICdlJywgJ2YnLCAneicgXSwgZmFpbDogeyB4OiAnYWJjZGVmeicsIGlkeDogMSwgcHJ2X2NocjogJ2EnLCBjaHI6ICdiJyB9IH1cbiAgICBAZXEgKCDOqWhsbHRfMjM1ID0gLT4gVC5pbmNyZW1lbnRhbF90ZXh0LmlzYSAnYWJjMCcgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjM2ID0gLT4gVC5pbmNyZW1lbnRhbF90ZXh0LmRhdGEgICAgICAgICAgKSwgeyBjaHJzOiBbICdhJywgJ2InLCAnYycsICcwJywgXSwgZmFpbDogeyB4OiAnYWJjMCcsIGlkeDogMywgcHJ2X2NocjogJ2MnLCBjaHI6ICcwJyB9IH1cbiAgICBAZXEgKCDOqWhsbHRfMjM3ID0gLT4gVC5kZWNyZW1lbnRhbF90ZXh0LmlzYSAnY2JhJyAgICAgKSwgdHJ1ZVxuICAgIEBlcSAoIM6paGxsdF8yMzggPSAtPiBULmRlY3JlbWVudGFsX3RleHQuZGF0YSAgICAgICAgICApLCB7IGNocnM6IFsgJ2MnLCAnYicsICdhJywgXSwgfVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqlobGx0XzIzOSA9IC0+IFQubWFnbmlmaWVycy5pc2EgJycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjQwID0gLT4gVC5tYWduaWZpZXJzLmRhdGEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB7IG1lc3NhZ2U6IFwiZXhwZWN0ZWQgYSBtYWduaWZpZXIsIGdvdCBhbiBlbXB0eSB0ZXh0XCIsIH1cbiAgICBAZXEgKCDOqWhsbHRfMjQxID0gLT4gVC5tYWduaWZpZXJzLmlzYSAnQUJDIFhZWicgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgQGVxICggzqlobGx0XzI0MiA9IC0+IHBpY2sgVC5tYWduaWZpZXJzLmRhdGEsIFxcXG4gICAgICAgICAgICAgICAgICAgICAgIFsgJ25tYWdfY2hyc19yZXZlcnNlZCcsICdwbWFnX2NocnMnLCAnbm1hZycsICdwbWFnJywgXSApLCB7IG5tYWdfY2hyc19yZXZlcnNlZDogWyAnQScsICdCJywgJ0MnIF0sIHBtYWdfY2hyczogWyAnICcsICdYJywgJ1knLCAnWicgXSwgbm1hZzogJyBDQkEnLCBwbWFnOiAnIFhZWicgfVxuICAgIEBlcSAoIM6paGxsdF8yNDMgPSAtPiBPYmplY3QuaXNGcm96ZW4gVC5tYWduaWZpZXJzLmRhdGEubm1hZ19jaHJzX3JldmVyc2VkICksIHRydWVcbiAgICBAZXEgKCDOqWhsbHRfMjQ0ID0gLT4gT2JqZWN0LmlzRnJvemVuIFQubWFnbmlmaWVycy5kYXRhLnBtYWdfY2hycyAgICAgICAgICApLCB0cnVlXG4gICAgQGVxICggzqlobGx0XzI0NSA9IC0+IFQubWFnbmlmaWVycy5pc2EgJ0FCQ1xcblhZWicgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgQGVxICggzqlobGx0XzI0NiA9IC0+IFQubWFnbmlmaWVycy5pc2EgJ0FCQ1xcdFhZWicgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgQGVxICggzqlobGx0XzI0NyA9IC0+IFQubWFnbmlmaWVycy5pc2EgJ0FCQyAgICAgICAgICAgICBYWVonICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgIEBlcSAoIM6paGxsdF8yNDggPSAtPiBULm1hZ25pZmllcnMuaXNhICdBQkMgRFggWVonICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgQGVxICggzqlobGx0XzI0OSA9IC0+IFQubWFnbmlmaWVycy5pc2EgJ0FCRCBDWFlaJyAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAoIM6paGxsdF8yNTAgPSAtPiBULnVuaWxpdGVyYWxzLmlzYSBudWxsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgQGVxICggzqlobGx0XzI1MSA9IC0+IFQudW5pbGl0ZXJhbHMuaXNhICcnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjUyID0gLT4gVC51bmlsaXRlcmFscy5pc2EgJ1ZCQScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6paGxsdF8yNTMgPSAtPiBULnVuaWxpdGVyYWxzLmlzYSAnRUZHSElKS0xNIE5PUFFSU1RVVlcnICAgICAgICAgICAgICksIGZhbHNlXG4gICAgQGVxICggzqlobGx0XzI1NCA9IC0+IFQudW5pbGl0ZXJhbHMuaXNhICdFRkdISUpLTE0gTiBPUFFSU1RVVlcnICAgICAgICAgICAgKSwgdHJ1ZVxuICAgIEBlcSAoIM6paGxsdF8yNTUgPSAtPiBULnVuaWxpdGVyYWxzLmRhdGEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHsgbnVuczogJ0VGR0hJSktMTScsIHpwdW5zOiAnTk9QUVJTVFVWVycsIG51bl9jaHJzOiBbICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSicsICdLJywgJ0wnLCAnTScgXSwgenB1bl9jaHJzOiBbICdOJywgJ08nLCAnUCcsICdRJywgJ1InLCAnUycsICdUJywgJ1UnLCAnVicsICdXJyBdIH1cbiAgICBAZXEgKCDOqWhsbHRfMjU2ID0gLT4gVC51bmlsaXRlcmFscy5pc2EgJ04nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgQGVxICggzqlobGx0XzI1NyA9IC0+IFQudW5pbGl0ZXJhbHMuZGF0YSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgeyBudW5zOiAnJywgenB1bnM6ICdOJywgbnVuX2NocnM6IFtdLCB6cHVuX2NocnM6IFsgJ04nIF0gfVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQHRocm93cyAoIM6paGxsdF8yNTggPSAtPiBULmFscGhhYmV0LnZhbGlkYXRlIG51bGwgICAgICAgICAgICAgICAgICAgICAgICAgKSwgL25vdCBhIHZhbGlkIGFscGhhYmV0L1xuICAgIEB0aHJvd3MgKCDOqWhsbHRfMjU5ID0gLT4gVC5hbHBoYWJldC52YWxpZGF0ZSAnJyAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC9ub3QgYSB2YWxpZCBhbHBoYWJldC9cbiAgICBAdGhyb3dzICggzqlobGx0XzI2MCA9IC0+IFQuYWxwaGFiZXQudmFsaWRhdGUgJ2EnICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvbm90IGEgdmFsaWQgYWxwaGFiZXQvXG4gICAgQGVxICAgICAoIM6paGxsdF8yNjEgPSAtPiBULmFscGhhYmV0LnZhbGlkYXRlICdhYicgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ2FiJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQHRocm93cyAoIM6paGxsdF8yNjIgPSAtPiAgIG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlIHsgYmxhbms6IG51bGwgfSAgICAgICAgICAgICAgICAgICAgICAgICksIC9ub3QgYSB2YWxpZCBibGFuay9cbiAgICBAdGhyb3dzICggzqlobGx0XzI2MyA9IC0+ICAgbmV3IEhvbGxlcml0aF90eXBlc3BhY2UgeyBibGFuazogJycgICB9ICAgICAgICAgICAgICAgICAgICAgICAgKSwgL25vdCBhIHZhbGlkIGJsYW5rL1xuICAgIEB0aHJvd3MgKCDOqWhsbHRfMjY0ID0gLT4gICBuZXcgSG9sbGVyaXRoX3R5cGVzcGFjZSB7IGJsYW5rOiAnLS0nIH0gICAgICAgICAgICAgICAgICAgICAgICApLCAvbm90IGEgdmFsaWQgYmxhbmsvXG4gICAgQHRocm93cyAoIM6paGxsdF8yNjUgPSAtPiAoIG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlIHsgYmxhbms6IG51bGwgfSApLmJsYW5rLnZhbGlkYXRlIG51bGwgICksIC9ub3QgYSB2YWxpZCBibGFuay9cbiAgICBAdGhyb3dzICggzqlobGx0XzI2NiA9IC0+ICggbmV3IEhvbGxlcml0aF90eXBlc3BhY2UgeyBibGFuazogJycgICB9ICkuYmxhbmsudmFsaWRhdGUgJycgICAgKSwgL25vdCBhIHZhbGlkIGJsYW5rL1xuICAgIEB0aHJvd3MgKCDOqWhsbHRfMjY3ID0gLT4gKCBuZXcgSG9sbGVyaXRoX3R5cGVzcGFjZSB7IGJsYW5rOiAnLS0nIH0gKS5ibGFuay52YWxpZGF0ZSAnLS0nICApLCAvbm90IGEgdmFsaWQgYmxhbmsvXG4gICAgQGVxICAgICAoIM6paGxsdF8yNjggPSAtPiAoIG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlIHsgYmxhbms6ICctJyAgfSApLmJsYW5rLnZhbGlkYXRlICctJyAgICksICctJ1xuICAgIEBlcSAgICAgKCDOqWhsbHRfMjY5ID0gLT4gKCBuZXcgSG9sbGVyaXRoX3R5cGVzcGFjZSB7IGJsYW5rOiAnICcgIH0gKS5ibGFuay52YWxpZGF0ZSAnICcgICApLCAnICdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB2YWxpZGF0ZV9hbmRfY29tcGlsZV9jZmdfZ2VuZXJhbDogLT5cbiAgICB7IGludGVybmFscyxcbiAgICAgIEhvbGxlcml0aCwgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyBIb2xsZXJpdGhfdHlwZXNwYWNlLFxuICAgICAgQ0ZHLCAgICAgICAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aC9saWIvdHlwZXMnXG4gICAgIyB7IHR5cGVfb2YsICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgIyB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsICB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgIHsgaXNGcm96ZW46IGlzX2Zyb3plbiwgICAgICAgIH0gPSBPYmplY3RcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMjIyB0ZXN0aW5nIGEgZ2VuZXJhbCBhc3N1bXB0aW9uIHNvIHdlIGRvbid0IG1lc3MgdXA6ICMjI1xuICAgIEBlcSAoIM6paGxsdF8yNzAgPSAtPiAoIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIC0gMSApID09IC0oIE51bWJlci5NSU5fU0FGRV9JTlRFR0VSICsgMSApICksIHRydWVcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICAjIFQgPSBuZXcgSG9sbGVyaXRoX3R5cGVzcGFjZSgpXG4gICAgICBAdGhyb3dzICggzqlobGx0XzI3MSA9IC0+IEhvbGxlcml0aC52YWxpZGF0ZV9hbmRfY29tcGlsZV9jZmcge30gICAgICAgICAgICAgICAgICApLCAvbm90IGEgdmFsaWQgYWxwaGFiZXQvXG4gICAgICBAdGhyb3dzICggzqlobGx0XzI3MiA9IC0+IEhvbGxlcml0aC52YWxpZGF0ZV9hbmRfY29tcGlsZV9jZmcgeyBhbHBoYWJldDogJycgICAgfSApLCAvbm90IGEgdmFsaWQgYWxwaGFiZXQvXG4gICAgICBAdGhyb3dzICggzqlobGx0XzI3MyA9IC0+IEhvbGxlcml0aC52YWxpZGF0ZV9hbmRfY29tcGlsZV9jZmcgeyBhbHBoYWJldDogJ2EnICAgfSApLCAvbm90IGEgdmFsaWQgYWxwaGFiZXQvXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHZhbGlkYXRlX2FuZF9jb21waWxlX2NmZ18xMDogLT5cbiAgICB7IGludGVybmFscyxcbiAgICAgIEhvbGxlcml0aCwgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyBIb2xsZXJpdGhfdHlwZXNwYWNlLFxuICAgICAgQ0ZHLCAgICAgICAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aC9saWIvdHlwZXMnXG4gICAgIyB7IHR5cGVfb2YsICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgIyB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsICB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgIHsgaXNGcm96ZW46IGlzX2Zyb3plbiwgICAgICAgIH0gPSBPYmplY3RcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNmZ18xMCA9XG4gICAgICBibGFuazogICAgICAgICcgJyAgICAgICAgICAgICAgICAgICAgICAgIyBzZXBhcmF0b3IgdXNlZCBpbiBgbWFnbmlmaWVyc2AgYW5kIGB1bmlsaXRlcmFsc2BcbiAgICAgIGFscGhhYmV0OiAgICAgJzAxMjM0NTY3ODknICAgICAgICAgICAgICAjIGRpZ2l0czsgbGVuZ3RoIG9mIGBhbHBoYWJldGAgaXMgdGhlIGBiYXNlYFxuICAgICAgbWFnbmlmaWVyczogICAnQUJDIFhZWicgICAgICAgICAgICAgICAgICNcbiAgICAgIHVuaWxpdGVyYWxzOiAgJ0ZHSElKS0xNIE4gT1BRUlNUVVYnICAgICAjIG5lZ2F0aXZlIHVuaWxpdGVyYWxzLCBibGFuaywgemVybyB1bmlsaXRlcmFsLCBibGFuaywgcG9zaXRpdmUgdW5pbGl0ZXJhbHNcbiAgICAgIGRpbWVuc2lvbjogICAgMyAgICAgICAgICAgICAgICAgICAgICAgICAjIG51bWJlciBvZiBpbmRpY2VzIHN1cHBvcnRlZFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGNmZyA9IEhvbGxlcml0aC52YWxpZGF0ZV9hbmRfY29tcGlsZV9jZmcgY2ZnXzEwXG4gICAgICBAZXEgKCDOqWhsbHRfMjc0ID0gLT4gY2ZnLmJsYW5rICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcgJ1xuICAgICAgQGVxICggzqlobGx0XzI3NSA9IC0+IGNmZy5hbHBoYWJldCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnMDEyMzQ1Njc4OSdcbiAgICAgIEBlcSAoIM6paGxsdF8yNzYgPSAtPiBjZmcuYWxwaGFiZXRfY2hycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgQXJyYXkuZnJvbSAnMDEyMzQ1Njc4OSdcbiAgICAgIEBlcSAoIM6paGxsdF8yNzcgPSAtPiBjZmcuX25vdmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgKCBBcnJheS5mcm9tIGNmZy5hbHBoYWJldCApLmF0IC0xXG4gICAgICBAZXEgKCDOqWhsbHRfMjc4ID0gLT4gY2ZnLmxlYWRpbmdfbmluZXJzX3JlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC8vLyBeICg/OiA5ICkqICg/PSAuKyAkICkgLy8vZ3ZcbiAgICAgIEBlcSAoIM6paGxsdF8yNzkgPSAtPiBpc19mcm96ZW4gY2ZnLmFscGhhYmV0X2NocnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlobGx0XzI4MCA9IC0+IGNmZy5iYXNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAxMFxuICAgICAgQGVxICggzqlobGx0XzI4MSA9IC0+IGNmZy5tYWduaWZpZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnQUJDIFhZWidcbiAgICAgIEBlcSAoIM6paGxsdF8yODIgPSAtPiBjZmcubm1hZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyBDQkEnXG4gICAgICBAZXEgKCDOqWhsbHRfMjgzID0gLT4gY2ZnLnBtYWcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcgWFlaJ1xuICAgICAgQGVxICggzqlobGx0XzI4NCA9IC0+IGNmZy5ubWFnX2NocnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBBcnJheS5mcm9tICcgQ0JBJ1xuICAgICAgQGVxICggzqlobGx0XzI4NSA9IC0+IGNmZy5wbWFnX2NocnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBBcnJheS5mcm9tICcgWFlaJ1xuICAgICAgQGVxICggzqlobGx0XzI4NiA9IC0+IGNmZy51bmlsaXRlcmFscyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnRkdISUpLTE0gTiBPUFFSU1RVVidcbiAgICAgIEBlcSAoIM6paGxsdF8yODcgPSAtPiBjZmcubnVucyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ0ZHSElKS0xNJ1xuICAgICAgQGVxICggzqlobGx0XzI4OCA9IC0+IGNmZy56cHVucyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnTk9QUVJTVFVWJ1xuICAgICAgQGVxICggzqlobGx0XzI4OSA9IC0+IGNmZy56cHVuX21heCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCA4XG4gICAgICBAZXEgKCDOqWhsbHRfMjkwID0gLT4gY2ZnLm51bl9taW4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC04XG4gICAgICBAZXEgKCDOqWhsbHRfMjkxID0gLT4gY2ZnLm51bl9jaHJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgJ0YnLCAnRycsICdIJywgJ0knLCAnSicsICdLJywgJ0wnLCAnTScgXSxcbiAgICAgIEBlcSAoIM6paGxsdF8yOTIgPSAtPiBjZmcuenB1bl9jaHJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAnTicsICdPJywgJ1AnLCAnUScsICdSJywgJ1MnLCAnVCcsICdVJywgJ1YnLCBdXG4gICAgICBAZXEgKCDOqWhsbHRfMjkzID0gLT4gY2ZnLmRpbWVuc2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDNcbiAgICAgIEBlcSAoIM6paGxsdF8yOTQgPSAtPiArKCAoIGNmZy5iYXNlICoqICggY2ZnLnBtYWdfY2hycy5sZW5ndGggLSAxICkgICkgLSAxICkgKSwgKzk5OVxuICAgICAgQGVxICggzqlobGx0XzI5NSA9IC0+IC0oICggY2ZnLmJhc2UgKiogKCBjZmcubm1hZ19jaHJzLmxlbmd0aCAtIDEgKSAgKSAtIDEgKSApLCAtOTk5XG4gICAgICBAZXEgKCDOqWhsbHRfMjk2ID0gLT4gY2ZnLl9tYXhfaW50ZWdlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICs5OTlcbiAgICAgIEBlcSAoIM6paGxsdF8yOTcgPSAtPiBjZmcuX21pbl9pbnRlZ2VyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgLTk5OVxuICAgICAgQGVxICggzqlobGx0XzI5OCA9IC0+IGNmZy5fbWF4X2RpZ2l0c19wZXJfaWR4ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAzXG4gICAgICBAZXEgKCDOqWhsbHRfMjk5ID0gLT4gY2ZnLlRNUF9hbHBoYWJldCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcwMTIzNDU2Nzg5QUJDRkdISUpLTE1OT1BRUlNUVVZYWVonXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGggPSBuZXcgSG9sbGVyaXRoIGNmZ18xMFxuICAgICAgQGVxICggzqlobGx0XzMwMCA9IC0+IGguY2ZnICksIGNmZ1xuICAgICAgIyBAZXEgKCDOqWhsbHRfMzAxID0gLT4gaC5lbmNvZGUgIC05OTggKSwgbnVsbFxuICAgICAgQGVxICggzqlobGx0XzMwMiA9IC0+IGguZW5jb2RlICAgLTEyICksICdCODcnXG4gICAgICBAZXEgKCDOqWhsbHRfMzAzID0gLT4gaC5lbmNvZGUgICAtMTEgKSwgJ0I4OCdcbiAgICAgIEBlcSAoIM6paGxsdF8zMDQgPSAtPiBoLmVuY29kZSAgIC0xMCApLCAnQjg5J1xuICAgICAgQGVxICggzqlobGx0XzMwNSA9IC0+IGguZW5jb2RlICAgIC05ICksICdDMCdcbiAgICAgIEBlcSAoIM6paGxsdF8zMDYgPSAtPiBoLmVuY29kZSAgICAtOCApLCAnRidcbiAgICAgIEBlcSAoIM6paGxsdF8zMDcgPSAtPiBoLmVuY29kZSAgICAtMiApLCAnTCdcbiAgICAgIEBlcSAoIM6paGxsdF8zMDggPSAtPiBoLmVuY29kZSAgICAtMSApLCAnTSdcbiAgICAgIEBlcSAoIM6paGxsdF8zMDkgPSAtPiBoLmVuY29kZSAgICAgMCApLCAnTidcbiAgICAgIEBlcSAoIM6paGxsdF8zMTAgPSAtPiBoLmVuY29kZSAgICArMSApLCAnTydcbiAgICAgIEBlcSAoIM6paGxsdF8zMTEgPSAtPiBoLmVuY29kZSAgICArMiApLCAnUCdcbiAgICAgIEBlcSAoIM6paGxsdF8zMTIgPSAtPiBoLmVuY29kZSAgICArOCApLCAnVidcbiAgICAgIEBlcSAoIM6paGxsdF8zMTMgPSAtPiBoLmVuY29kZSAgICArOSApLCAnWDknXG4gICAgICBAZXEgKCDOqWhsbHRfMzE0ID0gLT4gaC5lbmNvZGUgICArMTAgKSwgJ1kxMCdcbiAgICAgIEBlcSAoIM6paGxsdF8zMTUgPSAtPiBoLmVuY29kZSAgICsxMSApLCAnWTExJ1xuICAgICAgQGVxICggzqlobGx0XzMxNiA9IC0+IGguZW5jb2RlICAgKzEyICksICdZMTInXG4gICAgICBAZXEgKCDOqWhsbHRfMzE3ID0gLT4gaC5lbmNvZGUgICs5OTggKSwgJ1o5OTgnXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHZhbGlkYXRlX2FuZF9jb21waWxlX2NmZ18xMF9ub191bmlsdGVyYWxzOiAtPlxuICAgIHsgaW50ZXJuYWxzLFxuICAgICAgSG9sbGVyaXRoLCAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IEhvbGxlcml0aF90eXBlc3BhY2UsXG4gICAgICBDRkcsICAgICAgICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoL2xpYi90eXBlcydcbiAgICAjIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAjIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgeyBpc0Zyb3plbjogaXNfZnJvemVuLCAgICAgICAgfSA9IE9iamVjdFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2ZnXzEwX25vX3VuaWxpdGVyYWxzID1cbiAgICAgIGJsYW5rOiAgICAgICAgJyAnICAgICAgICAgICAgICAgICAgICAgICAjIHNlcGFyYXRvciB1c2VkIGluIGBtYWduaWZpZXJzYCBhbmQgYHVuaWxpdGVyYWxzYFxuICAgICAgYWxwaGFiZXQ6ICAgICAnMDEyMzQ1Njc4OScgICAgICAgICAgICAgICMgZGlnaXRzOyBsZW5ndGggb2YgYGFscGhhYmV0YCBpcyB0aGUgYGJhc2VgXG4gICAgICBtYWduaWZpZXJzOiAgICdBQkMgWFlaJyAgICAgICAgICAgICAgICAgI1xuICAgICAgdW5pbGl0ZXJhbHM6ICAnTicgICAgICAgICAgICAgICAgICAgICAgICMgb25seSBoYXMgemVybyB1bmlsaXRlcmFsXG4gICAgICBkaW1lbnNpb246ICAgIDMgICAgICAgICAgICAgICAgICAgICAgICAgIyBudW1iZXIgb2YgaW5kaWNlcyBzdXBwb3J0ZWRcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBjZmcgPSBIb2xsZXJpdGgudmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnIGNmZ18xMF9ub191bmlsaXRlcmFsc1xuICAgICAgQGVxICggzqlobGx0XzMxOCA9IC0+IGNmZy5ibGFuayAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnICdcbiAgICAgIEBlcSAoIM6paGxsdF8zMTkgPSAtPiBjZmcuYWxwaGFiZXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJzAxMjM0NTY3ODknXG4gICAgICBAZXEgKCDOqWhsbHRfMzIwID0gLT4gY2ZnLmFscGhhYmV0X2NocnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIEFycmF5LmZyb20gJzAxMjM0NTY3ODknXG4gICAgICBAZXEgKCDOqWhsbHRfMzIxID0gLT4gY2ZnLl9ub3ZhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICggQXJyYXkuZnJvbSBjZmcuYWxwaGFiZXQgKS5hdCAtMVxuICAgICAgQGVxICggzqlobGx0XzMyMiA9IC0+IGNmZy5sZWFkaW5nX25pbmVyc19yZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvLy8gXiAoPzogOSApKiAoPz0gLisgJCApIC8vL2d2XG4gICAgICBAZXEgKCDOqWhsbHRfMzIzID0gLT4gaXNfZnJvemVuIGNmZy5hbHBoYWJldF9jaHJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paGxsdF8zMjQgPSAtPiBjZmcuYmFzZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgMTBcbiAgICAgIEBlcSAoIM6paGxsdF8zMjUgPSAtPiBjZmcubWFnbmlmaWVycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ0FCQyBYWVonXG4gICAgICBAZXEgKCDOqWhsbHRfMzI2ID0gLT4gY2ZnLm5tYWcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcgQ0JBJ1xuICAgICAgQGVxICggzqlobGx0XzMyNyA9IC0+IGNmZy5wbWFnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnIFhZWidcbiAgICAgIEBlcSAoIM6paGxsdF8zMjggPSAtPiBjZmcubm1hZ19jaHJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgQXJyYXkuZnJvbSAnIENCQSdcbiAgICAgIEBlcSAoIM6paGxsdF8zMjkgPSAtPiBjZmcucG1hZ19jaHJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgQXJyYXkuZnJvbSAnIFhZWidcbiAgICAgIEBlcSAoIM6paGxsdF8zMzAgPSAtPiBjZmcudW5pbGl0ZXJhbHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ04nXG4gICAgICBAZXEgKCDOqWhsbHRfMzMxID0gLT4gY2ZnLm51bnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcnXG4gICAgICBAZXEgKCDOqWhsbHRfMzMyID0gLT4gY2ZnLnpwdW5zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdOJ1xuICAgICAgQGVxICggzqlobGx0XzMzMyA9IC0+IGNmZy5udW5fY2hycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbXVxuICAgICAgQGVxICggzqlobGx0XzMzNCA9IC0+IGNmZy56cHVuX2NocnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbICdOJywgXVxuICAgICAgQGVxICggzqlobGx0XzMzNSA9IC0+IGNmZy5kaW1lbnNpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAzXG4gICAgICBAZXEgKCDOqWhsbHRfMzM2ID0gLT4gKyggKCBjZmcuYmFzZSAqKiAoIGNmZy5wbWFnX2NocnMubGVuZ3RoIC0gMSApICApIC0gMSApICksICs5OTlcbiAgICAgIEBlcSAoIM6paGxsdF8zMzcgPSAtPiAtKCAoIGNmZy5iYXNlICoqICggY2ZnLm5tYWdfY2hycy5sZW5ndGggLSAxICkgICkgLSAxICkgKSwgLTk5OVxuICAgICAgQGVxICggzqlobGx0XzMzOCA9IC0+IGNmZy5fbWF4X2ludGVnZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCArOTk5XG4gICAgICBAZXEgKCDOqWhsbHRfMzM5ID0gLT4gY2ZnLl9taW5faW50ZWdlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC05OTlcbiAgICAgIEBlcSAoIM6paGxsdF8zNDAgPSAtPiBjZmcuX21heF9kaWdpdHNfcGVyX2lkeCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgM1xuICAgICAgQGVxICggzqlobGx0XzM0MSA9IC0+IGNmZy5UTVBfYWxwaGFiZXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnMDEyMzQ1Njc4OUFCQ05YWVonXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGggPSBuZXcgSG9sbGVyaXRoIGNmZ18xMF9ub191bmlsaXRlcmFsc1xuICAgICAgQGVxICggzqlobGx0XzM0MiA9IC0+IGguY2ZnICksIGNmZ1xuICAgICAgQGVxICggzqlobGx0XzM0MyA9IC0+IGguZW5jb2RlIFsgMCwgXSApLCAnTidcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnXzEyODogLT5cbiAgICB7IGludGVybmFscyxcbiAgICAgIEhvbGxlcml0aCwgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyBIb2xsZXJpdGhfdHlwZXNwYWNlLFxuICAgICAgQ0ZHLCAgICAgICAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aC9saWIvdHlwZXMnXG4gICAgIyB7IHR5cGVfb2YsICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgIyB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsICB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgIHsgaXNGcm96ZW46IGlzX2Zyb3plbiwgICAgICAgIH0gPSBPYmplY3RcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNmZ18xMjggPVxuICAgICAgIyMjICAgICAgICAgICAgICAgICAgICAgMSAgICAgICAgIDIgICAgICAgICAzICAgICAgICMjI1xuICAgICAgIyMjICAgICAgICAgICAgMTIzNDU2Nzg5MDEyMzQ1Njc4OTAxMjM0NTY3ODkwMTIgICAgICMjI1xuICAgICAgYWxwaGFiZXQ6ICAgICAnISMkJSYoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUInICsgXFxcbiAgICAgICAgICAgICAgICAgICAgJ0NERUZHSElKS0xNTk9QUVJTVFVWV1hZWltdXl9gYWJjJyArIFxcXG4gICAgICAgICAgICAgICAgICAgICdkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ent8fX7CocKiwqPCpMKlJyArIFxcXG4gICAgICAgICAgICAgICAgICAgICfCpsKnwqjCqcKqwqvCrMKuwq/CsMKxwrLCs8K0wrXCtsK3wrjCucK6wrvCvMK9wr7Cv8OAw4HDgsODw4TDhcOGJ1xuICAgICAgbWFnbmlmaWVyczogICAnw4fDiMOJw4rDi8OMw43DjiDDuMO5w7rDu8O8w73DvsO/J1xuICAgICAgdW5pbGl0ZXJhbHM6ICAnw4/DkMORw5LDk8OUw5XDlsOXw5jDmcOaw5vDnMOdw57Dn8Ogw6HDoiDDoyDDpMOlw6bDp8Oow6nDqsOrw6zDrcOuw6/DsMOxw7LDs8O0w7XDtsO3J1xuICAgICAgZGltZW5zaW9uOiAgICA1XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgY2ZnID0gSG9sbGVyaXRoLnZhbGlkYXRlX2FuZF9jb21waWxlX2NmZyBjZmdfMTI4XG4gICAgICBAZXEgKCDOqWhsbHRfMzQ0ID0gLT4gY2ZnLmJsYW5rICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcgJ1xuICAgICAgQGVxICggzqlobGx0XzM0NSA9IC0+IGNmZy5hbHBoYWJldCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnISMkJSYoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUInICsgXFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaW11eX2BhYmMnICsgXFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+wqHCosKjwqTCpScgKyBcXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICfCpsKnwqjCqcKqwqvCrMKuwq/CsMKxwrLCs8K0wrXCtsK3wrjCucK6wrvCvMK9wr7Cv8OAw4HDgsODw4TDhcOGJ1xuICAgICAgQGVxICggzqlobGx0XzM0NiA9IC0+IGNmZy5hbHBoYWJldF9jaHJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBBcnJheS5mcm9tIGNmZy5hbHBoYWJldFxuICAgICAgQGVxICggzqlobGx0XzM0NyA9IC0+IGNmZy5fbm92YSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAoIEFycmF5LmZyb20gY2ZnLmFscGhhYmV0ICkuYXQgLTFcbiAgICAgIEBlcSAoIM6paGxsdF8zNDggPSAtPiBjZmcubGVhZGluZ19uaW5lcnNfcmUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgLy8vIF4gKD86IMOGICkqICg/PSAuKyAkICkgLy8vZ3ZcbiAgICAgIEBlcSAoIM6paGxsdF8zNDkgPSAtPiBjZmcubWFnbmlmaWVycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8OHw4jDicOKw4vDjMONw44gw7jDucO6w7vDvMO9w77DvydcbiAgICAgIEBlcSAoIM6paGxsdF8zNTAgPSAtPiBjZmcubm1hZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyDDjsONw4zDi8OKw4nDiMOHJ1xuICAgICAgQGVxICggzqlobGx0XzM1MSA9IC0+IGNmZy5wbWFnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnIMO4w7nDusO7w7zDvcO+w78nXG4gICAgICBAZXEgKCDOqWhsbHRfMzUyID0gLT4gY2ZnLm5tYWdfY2hycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIEFycmF5LmZyb20gJyDDjsONw4zDi8OKw4nDiMOHJ1xuICAgICAgQGVxICggzqlobGx0XzM1MyA9IC0+IGNmZy5wbWFnX2NocnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBBcnJheS5mcm9tICcgw7jDucO6w7vDvMO9w77DvydcbiAgICAgIEBlcSAoIM6paGxsdF8zNTQgPSAtPiBjZmcudW5pbGl0ZXJhbHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8OPw5DDkcOSw5PDlMOVw5bDl8OYw5nDmsObw5zDncOew5/DoMOhw6Igw6Mgw6TDpcOmw6fDqMOpw6rDq8Osw63DrsOvw7DDscOyw7PDtMO1w7bDtydcbiAgICAgIEBlcSAoIM6paGxsdF8zNTUgPSAtPiBjZmcubnVucyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8OPw5DDkcOSw5PDlMOVw5bDl8OYw5nDmsObw5zDncOew5/DoMOhw6InXG4gICAgICBAZXEgKCDOqWhsbHRfMzU2ID0gLT4gY2ZnLnpwdW5zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDo8Okw6XDpsOnw6jDqcOqw6vDrMOtw67Dr8Oww7HDssOzw7TDtcO2w7cnXG4gICAgICBAZXEgKCDOqWhsbHRfMzU3ID0gLT4gY2ZnLm51bl9jaHJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIEFycmF5LmZyb20gJ8OPw5DDkcOSw5PDlMOVw5bDl8OYw5nDmsObw5zDncOew5/DoMOhw6InXG4gICAgICBAZXEgKCDOqWhsbHRfMzU4ID0gLT4gY2ZnLnpwdW5fY2hycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIEFycmF5LmZyb20gJ8Ojw6TDpcOmw6fDqMOpw6rDq8Osw63DrsOvw7DDscOyw7PDtMO1w7bDtydcbiAgICAgIEBlcSAoIM6paGxsdF8zNTkgPSAtPiBjZmcuX21pbl9pbnRlZ2VyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgLSggKCAxMjggKiogNyApIC0gMSApXG4gICAgICBAZXEgKCDOqWhsbHRfMzYwID0gLT4gY2ZnLl9tYXhfaW50ZWdlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICsoICggMTI4ICoqIDcgKSAtIDEgKVxuICAgICAgIyBAZXEgKCDOqWhsbHRfMzYxID0gLT4gY2ZnLl9tYXhfZGlnaXRzX3Blcl9pZHggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDNcbiAgICAgICMgQGVxICggzqlobGx0XzM2MiA9IC0+IGNmZy5UTVBfYWxwaGFiZXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnMDEyMzQ1Njc4OUFCQ0VGR0hJSktMTU5PUFFSU1RVVldYWVonXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6paGxsdF8zNjMgPSAtPiBpc19mcm96ZW4gY2ZnLmFscGhhYmV0X2NocnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlobGx0XzM2NCA9IC0+IGNmZy5iYXNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAxMjhcbiAgICAgIEBlcSAoIM6paGxsdF8zNjUgPSAtPiBjZmcuZGltZW5zaW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgNVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBoID0gbmV3IEhvbGxlcml0aCBjZmdfMTI4XG4gICAgICBAZXEgKCDOqWhsbHRfMzY2ID0gLT4gaC5jZmcgKSwgY2ZnXG4gICAgICAjIEBlcSAoIM6paGxsdF8zNjcgPSAtPiBoLmVuY29kZSBbIDAsIF0gKSwgbnVsbFxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB0eXBlczogLT5cbiAgICB7IEhvbGxlcml0aF90eXBlc3BhY2UsXG4gICAgICBjcmVhdGVfbWF4X2ludGVnZXJfJCxcbiAgICAgIENGRywgICAgICAgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgvbGliL3R5cGVzJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIFQgPSBuZXcgSG9sbGVyaXRoX3R5cGVzcGFjZSgpXG4gICAgICBAZXEgICAgICggzqlobGx0XzM2OCA9IC0+IFQuYmFzZS5pc2EgLTEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgICAgICggzqlobGx0XzM2OSA9IC0+IFQuYmFzZS5pc2EgIDAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgICAgICggzqlobGx0XzM3MCA9IC0+IFQuYmFzZS5pc2EgKzEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgICAgICggzqlobGx0XzM3MSA9IC0+IFQuYmFzZS5pc2EgKzIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzcyID0gLT4gVC5fbWF4X2ludGVnZXJfJC5pc2EgbnVsbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzczID0gLT4gVC5fbWF4X2ludGVnZXJfJC5pc2EgOSwgICAgICAgICAgMTAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6paGxsdF8zNzQgPSAtPiBULl9tYXhfaW50ZWdlcl8kLmlzYSA5OSwgICAgICAgICAxMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgICAgICggzqlobGx0XzM3NSA9IC0+IFQuX21heF9pbnRlZ2VyXyQuaXNhIDk5OTk5OTk5LCAgIDEwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzc2ID0gLT4gVC5fbWF4X2ludGVnZXJfJC5pc2EgLTEwLCAgICAgICAgMTAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzc3ID0gLT4gL25vdCBhIHBvc2l0aXZlIHNhZmUgaW50ZWdlci8udGVzdCBULl9tYXhfaW50ZWdlcl8kLmRhdGEubWVzc2FnZSAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6paGxsdF8zNzggPSAtPiBULl9tYXhfaW50ZWdlcl8kLmlzYSAweGZmZmYsICAgICAxNiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgICAgICggzqlobGx0XzM3OSA9IC0+IFQuX21heF9pbnRlZ2VyXyQuaXNhIDB4N2ZmZmZmZmYsIDE2ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAdGhyb3dzICggzqlobGx0XzM4MCA9IC0+IFQuX21heF9pbnRlZ2VyXyQudmFsaWRhdGUgNSwgMTAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC9cXChfbWF4X2ludGVnZXJfXFwkXFwpIG5vdCBhIHZhbGlkIF9tYXhfaW50ZWdlcl9cXCQ6IDUg4oCTIHggbm90IGEgcG9zaXRpdmUgYWxsLW5pbmVycy9cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgVCA9IG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlKClcbiAgICAgIFIgPSB7IGJhc2U6IDE2LCBfbWF4X2RpZ2l0c19wZXJfaWR4OiA0LCB9XG4gICAgICBAZXEgICAgICggzqlobGx0XzM4MSA9IC0+IFQuX21heF9pbnRlZ2VyXyQuaXNhICggUi5iYXNlICoqIFIuX21heF9kaWdpdHNfcGVyX2lkeCApIC0gMSwgUi5iYXNlICksIHRydWVcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgVCA9IG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlKClcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzgyID0gLT4gVC5fbWF4X2ludGVnZXJfJC5pc2EgKCAxMjggKiogMSApIC0gMSwgMTI4ICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzgzID0gLT4gVC5fbWF4X2ludGVnZXJfJC5pc2EgKCAxMjggKiogMiApIC0gMSwgMTI4ICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzg0ID0gLT4gVC5fbWF4X2ludGVnZXJfJC5pc2EgKCAxMjggKiogMyApIC0gMSwgMTI4ICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzg1ID0gLT4gVC5fbWF4X2ludGVnZXJfJC5pc2EgKCAxMjggKiogNCApIC0gMSwgMTI4ICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzg2ID0gLT4gVC5fbWF4X2ludGVnZXJfJC5pc2EgKCAxMjggKiogNSApIC0gMSwgMTI4ICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzg3ID0gLT4gVC5fbWF4X2ludGVnZXJfJC5pc2EgKCAxMjggKiogNiApIC0gMSwgMTI4ICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzg4ID0gLT4gVC5fbWF4X2ludGVnZXJfJC5pc2EgKCAxMjggKiogNyApIC0gMSwgMTI4ICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzg5ID0gLT4gVC5fbWF4X2ludGVnZXJfJC5pc2EgKCAxMjggKiogOCApIC0gMSwgMTI4ICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgICAgICggzqlobGx0XzM5MCA9IC0+IFQuY3JlYXRlX21heF9pbnRlZ2VyXyQgeyBiYXNlOiAxMCwgZGlnaXRzOiAyLCB9ICApLCA5OVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZGVtb19tYXhfaW50ZWdlciA9IC0+XG4gIGxvZ190b19iYXNlICAgICAgICAgICAgICAgPSAoIG4sIGJhc2UgKSAtPiAoIE1hdGgubG9nIG4gKSAvICggTWF0aC5sb2cgYmFzZSApXG4gIGdldF9yZXF1aXJlZF9kaWdpdHMgICAgICAgPSAoIG4sIGJhc2UgKSAtPiBNYXRoLmNlaWwgbG9nX3RvX2Jhc2UgbiwgYmFzZVxuICBnZXRfbWF4X25pbmVyX2RpZ2l0X2NvdW50ID0gKCBuLCBiYXNlICkgLT4gKCBnZXRfcmVxdWlyZWRfZGlnaXRzIG4sIGJhc2UgKSAtIDFcbiAgZ2V0X21heF9pbnRlZ2VyICAgICAgICAgICA9ICggbiwgYmFzZSApIC0+ICggYmFzZSAqKiBnZXRfbWF4X25pbmVyX2RpZ2l0X2NvdW50IG4sIGJhc2UgKSAtIDFcbiAgaW5mbyAnzqlobGx0XzM5MScsIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLnRvU3RyaW5nIDE2XG4gIGluZm8gJ86paGxsdF8zOTInLCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUi50b1N0cmluZyAzMlxuICB3aGlzcGVyICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gIGluZm8gJ86paGxsdF8zOTMnLCAoIDMyICoqIDQgLSAxICkudG9TdHJpbmcgMzJcbiAgaW5mbyAnzqlobGx0XzM5NCcsICggMzIgKiogNCAtIDEgKS50b1N0cmluZyAzMlxuICB3aGlzcGVyICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gIGluZm8gJ86paGxsdF8zOTUnLCBnZXRfcmVxdWlyZWRfZGlnaXRzIDMyLCAgICAgICAzMlxuICBpbmZvICfOqWhsbHRfMzk2JywgZ2V0X3JlcXVpcmVkX2RpZ2l0cyAzMiAqKiA2LCAgMzJcbiAgaW5mbyAnzqlobGx0XzM5NycsIGdldF9yZXF1aXJlZF9kaWdpdHMgMWU2LCAgICAgIDEwXG4gIGluZm8gJ86paGxsdF8zOTgnLCBnZXRfcmVxdWlyZWRfZGlnaXRzIDIwLCAgICAgICAxMFxuICB3aGlzcGVyICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gIGluZm8gJ86paGxsdF8zOTknLCBtYXhfZGlnaXRzX2Jhc2VfMTAgICAgPSBnZXRfbWF4X25pbmVyX2RpZ2l0X2NvdW50IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAxMFxuICBpbmZvICfOqWhsbHRfNDAwJywgbWF4X2RpZ2l0c19iYXNlXzE2ICAgID0gZ2V0X21heF9uaW5lcl9kaWdpdF9jb3VudCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiwgMTZcbiAgaW5mbyAnzqlobGx0XzQwMScsIG1heF9kaWdpdHNfYmFzZV8zMiAgICA9IGdldF9tYXhfbmluZXJfZGlnaXRfY291bnQgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsIDMyXG4gIGluZm8gJ86paGxsdF80MDInLCBtYXhfZGlnaXRzX2Jhc2VfMzYgICAgPSBnZXRfbWF4X25pbmVyX2RpZ2l0X2NvdW50IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAzNlxuICBpbmZvICfOqWhsbHRfNDAzJywgbWF4X2RpZ2l0c18xYmFzZV8yOCAgID0gZ2V0X21heF9uaW5lcl9kaWdpdF9jb3VudCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiwgMTI4XG4gICMgZm9yIGJhc2UgaW4gWyAyIC4uIDEyOCBdXG4gICMgICBpbmZvICfOqWhsbHRfNDA0JywgeyBiYXNlLCB9LCAoIE1hdGguY2VpbCBsb2dfdG9fYmFzZSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiwgYmFzZSApIC0gMVxuICB3aGlzcGVyICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gIGluZm8gJ86paGxsdF80MDUnLCAnOScucmVwZWF0IG1heF9kaWdpdHNfYmFzZV8xMFxuICBpbmZvICfOqWhsbHRfNDA2JywgJ2YnLnJlcGVhdCBtYXhfZGlnaXRzX2Jhc2VfMTZcbiAgaW5mbyAnzqlobGx0XzQwNycsICd2Jy5yZXBlYXQgbWF4X2RpZ2l0c19iYXNlXzMyXG4gIHdoaXNwZXIgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgaW5mbyAnzqlobGx0XzQwOCcsICggKCBiYXNlID0gMTAgKSAqKiBtYXhfZGlnaXRzX2Jhc2VfMTAgKSAtIDFcbiAgaW5mbyAnzqlobGx0XzQwOScsICggKCBiYXNlID0gMTYgKSAqKiBtYXhfZGlnaXRzX2Jhc2VfMTYgKSAtIDFcbiAgaW5mbyAnzqlobGx0XzQxMCcsICggKCBiYXNlID0gMzIgKSAqKiBtYXhfZGlnaXRzX2Jhc2VfMzIgKSAtIDFcbiAgaW5mbyAnzqlobGx0XzQxMScsICggKCBiYXNlID0gMzYgKSAqKiBtYXhfZGlnaXRzX2Jhc2VfMzYgKSAtIDFcbiAgd2hpc3BlciAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUJ1xuICBpbmZvICfOqWhsbHRfNDEyJywgZ2V0X21heF9pbnRlZ2VyIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAxMFxuICBpbmZvICfOqWhsbHRfNDEzJywgZ2V0X21heF9pbnRlZ2VyIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAxNlxuICBpbmZvICfOqWhsbHRfNDE0JywgZ2V0X21heF9pbnRlZ2VyIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAzMlxuICBpbmZvICfOqWhsbHRfNDE1JywgZ2V0X21heF9pbnRlZ2VyIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAzNlxuICBpbmZvICfOqWhsbHRfNDE2JywgZ2V0X21heF9pbnRlZ2VyIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAxMjhcbiAgd2hpc3BlciAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUJ1xuICBpbmZvICfOqWhsbHRfNDE3JywgKCBwYXJzZUludCAoICc5Jy5yZXBlYXQgbWF4X2RpZ2l0c19iYXNlXzEwICksIDEwIClcbiAgaW5mbyAnzqlobGx0XzQxOCcsICggcGFyc2VJbnQgKCAnZicucmVwZWF0IG1heF9kaWdpdHNfYmFzZV8xNiApLCAxNiApXG4gIGluZm8gJ86paGxsdF80MTknLCAoIHBhcnNlSW50ICggJ3YnLnJlcGVhdCBtYXhfZGlnaXRzX2Jhc2VfMzIgKSwgMzIgKVxuICBpbmZvICfOqWhsbHRfNDIwJywgKCBwYXJzZUludCAoICd6Jy5yZXBlYXQgbWF4X2RpZ2l0c19iYXNlXzM2ICksIDM2IClcbiAgaW5mbyAnzqlobGx0XzQyMScsICggcGFyc2VJbnQgKCAnOScucmVwZWF0IG1heF9kaWdpdHNfYmFzZV8xMCApLCAxMCApIDw9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG4gIGluZm8gJ86paGxsdF80MjInLCAoIHBhcnNlSW50ICggJ2YnLnJlcGVhdCBtYXhfZGlnaXRzX2Jhc2VfMTYgKSwgMTYgKSA8PSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUlxuICBpbmZvICfOqWhsbHRfNDIzJywgKCBwYXJzZUludCAoICd2Jy5yZXBlYXQgbWF4X2RpZ2l0c19iYXNlXzMyICksIDMyICkgPD0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcbiAgaW5mbyAnzqlobGx0XzQyNCcsICggcGFyc2VJbnQgKCAneicucmVwZWF0IG1heF9kaWdpdHNfYmFzZV8zNiApLCAzNiApIDw9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG4gIHdoaXNwZXIgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgaW5mbyAnzqlobGx0XzQyNScsICs5OTkgKyAtOTk5XG4gIGluZm8gJ86paGxsdF80MjYnLCArOTk5ICsgLTFcbiAgaW5mbyAnzqlobGx0XzQyNycsIC0oIC05OTkgLSAxICkgKyAtOTk5XG4gIGluZm8gJ86paGxsdF80MjgnLCAtKCAtOTk5IC0gMSApICsgLTk5OFxuICBpbmZvICfOqWhsbHRfNDI5JywgLSggLTk5OSAtIDEgKSArIC05OTdcbiAgaW5mbyAnzqlobGx0XzQzMCcsIC0oIC05OTkgLSAxICkgKyAtM1xuICBpbmZvICfOqWhsbHRfNDMxJywgLSggLTk5OSAtIDEgKSArIC0yXG4gIGluZm8gJ86paGxsdF80MzInLCAtKCAtOTk5IC0gMSApICsgLTFcbiAgaW5mbyAnzqlobGx0XzQzMycsIFwiI3sgLSggLTk5OSAtIDEgKSArIC0zIH1cIi5yZXBsYWNlIC8vLyBeIDkqPyAoPz0gLiAkICkgLy8vZ3YsICcnXG4gIGluZm8gJ86paGxsdF80MzQnLCBcIiN7IC0oIC05OTkgLSAxICkgKyAtMiB9XCIucmVwbGFjZSAvLy8gXiA5Kj8gKD89IC4gJCApIC8vL2d2LCAnJ1xuICBpbmZvICfOqWhsbHRfNDM1JywgXCIjeyAtKCAtOTk5IC0gMSApICsgLTEgfVwiLnJlcGxhY2UgLy8vIF4gOSo/ICg/PSAuICQgKSAvLy9ndiwgJydcbiAgcmV0dXJuIG51bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICB7IHNob3dfcmVxdWlyZXMsIH0gPSByZXF1aXJlICcuLi8uLi9zbmlwcGV0cy9saWIvZGVtby1zaG93LXJlcXVpcmVzLmpzJ1xuICBzaG93X3JlcXVpcmVzICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCBAaG9sbGVyaXRoXG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgaDEwbXZwMl9iaWdfc2h1ZmZsZTogQGhvbGxlcml0aC5oMTBtdnAyX2JpZ19zaHVmZmxlLCB9XG5cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHR5cGVzOiBAaG9sbGVyaXRoLnR5cGVzLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBoMTBtdnAyX3NvcnRpbmdfMjogQGhvbGxlcml0aC5oMTBtdnAyX3NvcnRpbmdfMiwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnXzEwOiBAaG9sbGVyaXRoLnZhbGlkYXRlX2FuZF9jb21waWxlX2NmZ18xMCwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgaDEwbXZwMl9kZWNvZGVfdW5pdHM6IEBob2xsZXJpdGguaDEwbXZwMl9kZWNvZGVfdW5pdHMsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGdldF9uaW5lcnNfcmU6IEBob2xsZXJpdGguZ2V0X25pbmVyc19yZSwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnOiBAaG9sbGVyaXRoLnZhbGlkYXRlX2FuZF9jb21waWxlX2NmZywgfVxuICAjIGRlbW9fbWF4X2ludGVnZXIoKVxuXG5cbiJdfQ==
