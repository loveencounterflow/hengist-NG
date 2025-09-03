(async function() {
  'use strict';
  var GTNG, GUY, SFMODULES, Test, alert, debug, echo, f, help, helpers, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper,
    modulo = function(a, b) { return (+a % (b = +b) + b) % b; };

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
    h10mvp_1: function() {
      var Hollerith, equals, hollerith_10, hollerith_10mvp, hollerith_128, internals, type_of, Ωanybt__10, Ωanybt__11, Ωanybt__12, Ωanybt__13, Ωanybt__14, Ωanybt__15, Ωanybt__16, Ωanybt__17, Ωanybt__18, Ωanybt__19, Ωanybt__20, Ωanybt__21, Ωanybt__22, Ωanybt__23, Ωanybt__24, Ωanybt___3, Ωanybt___4, Ωanybt___5, Ωanybt___6, Ωanybt___7, Ωanybt___8, Ωanybt___9;
      ({Hollerith, hollerith_10, hollerith_10mvp, hollerith_128, internals} = require('../../../apps/hollerith'));
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({
        isDeepStrictEqual: equals
      } = require('node:util'));
      //.......................................................................................................
      this.eq((Ωanybt___3 = function() {
        return hollerith_10mvp.encode_integer(-999);
      }), 'K000');
      this.eq((Ωanybt___4 = function() {
        return hollerith_10mvp.encode_integer(-99);
      }), 'L00');
      this.eq((Ωanybt___5 = function() {
        return hollerith_10mvp.encode_integer(-90);
      }), 'L09');
      this.eq((Ωanybt___6 = function() {
        return hollerith_10mvp.encode_integer(-11);
      }), 'L88');
      this.eq((Ωanybt___7 = function() {
        return hollerith_10mvp.encode_integer(-10);
      }), 'L89');
      this.eq((Ωanybt___8 = function() {
        return hollerith_10mvp.encode_integer(-9);
      }), 'M0');
      this.eq((Ωanybt___9 = function() {
        return hollerith_10mvp.encode_integer(-8);
      }), 'M1');
      this.eq((Ωanybt__10 = function() {
        return hollerith_10mvp.encode_integer(-7);
      }), 'M2');
      this.eq((Ωanybt__11 = function() {
        return hollerith_10mvp.encode_integer(-6);
      }), 'M3');
      this.eq((Ωanybt__12 = function() {
        return hollerith_10mvp.encode_integer(-5);
      }), 'M4');
      this.eq((Ωanybt__13 = function() {
        return hollerith_10mvp.encode_integer(-4);
      }), 'M5');
      this.eq((Ωanybt__14 = function() {
        return hollerith_10mvp.encode_integer(-3);
      }), 'M6');
      this.eq((Ωanybt__15 = function() {
        return hollerith_10mvp.encode_integer(-2);
      }), 'M7');
      this.eq((Ωanybt__16 = function() {
        return hollerith_10mvp.encode_integer(-1);
      }), 'M8');
      this.eq((Ωanybt__17 = function() {
        return hollerith_10mvp.encode_integer(0);
      }), 'N');
      this.eq((Ωanybt__18 = function() {
        return hollerith_10mvp.encode_integer(1);
      }), 'O1');
      this.eq((Ωanybt__19 = function() {
        return hollerith_10mvp.encode_integer(+9);
      }), 'O9');
      this.eq((Ωanybt__20 = function() {
        return hollerith_10mvp.encode_integer(+10);
      }), 'P10');
      this.eq((Ωanybt__21 = function() {
        return hollerith_10mvp.encode_integer(+20);
      }), 'P20');
      this.eq((Ωanybt__22 = function() {
        return hollerith_10mvp.encode_integer(+90);
      }), 'P90');
      this.eq((Ωanybt__23 = function() {
        return hollerith_10mvp.encode_integer(123);
      }), 'Q123');
      this.eq((Ωanybt__24 = function() {
        return hollerith_10mvp.encode_integer(+900);
      }), 'Q900');
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    h10mvp_2: function() {
      var Hollerith, equals, hollerith_10, hollerith_10mvp, hollerith_128, internals, type_of, Ωanybt__25, Ωanybt__26, Ωanybt__27, Ωanybt__28, Ωanybt__29, Ωanybt__30, Ωanybt__31, Ωanybt__32, Ωanybt__33, Ωanybt__34, Ωanybt__35, Ωanybt__36, Ωanybt__37, Ωanybt__38, Ωanybt__39, Ωanybt__40, Ωanybt__41, Ωanybt__42, Ωanybt__43, Ωanybt__44, Ωanybt__45, Ωanybt__46;
      ({Hollerith, hollerith_10, hollerith_10mvp, hollerith_128, internals} = require('../../../apps/hollerith'));
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({
        isDeepStrictEqual: equals
      } = require('node:util'));
      //.......................................................................................................
      this.eq((Ωanybt__25 = function() {
        return hollerith_10mvp.encode_integer(-999);
      }), hollerith_10mvp.encode(-999));
      this.eq((Ωanybt__26 = function() {
        return hollerith_10mvp.encode_integer(-99);
      }), hollerith_10mvp.encode(-99));
      this.eq((Ωanybt__27 = function() {
        return hollerith_10mvp.encode_integer(-90);
      }), hollerith_10mvp.encode(-90));
      this.eq((Ωanybt__28 = function() {
        return hollerith_10mvp.encode_integer(-11);
      }), hollerith_10mvp.encode(-11));
      this.eq((Ωanybt__29 = function() {
        return hollerith_10mvp.encode_integer(-10);
      }), hollerith_10mvp.encode(-10));
      this.eq((Ωanybt__30 = function() {
        return hollerith_10mvp.encode_integer(-9);
      }), hollerith_10mvp.encode(-9));
      this.eq((Ωanybt__31 = function() {
        return hollerith_10mvp.encode_integer(-8);
      }), hollerith_10mvp.encode(-8));
      this.eq((Ωanybt__32 = function() {
        return hollerith_10mvp.encode_integer(-7);
      }), hollerith_10mvp.encode(-7));
      this.eq((Ωanybt__33 = function() {
        return hollerith_10mvp.encode_integer(-6);
      }), hollerith_10mvp.encode(-6));
      this.eq((Ωanybt__34 = function() {
        return hollerith_10mvp.encode_integer(-5);
      }), hollerith_10mvp.encode(-5));
      this.eq((Ωanybt__35 = function() {
        return hollerith_10mvp.encode_integer(-4);
      }), hollerith_10mvp.encode(-4));
      this.eq((Ωanybt__36 = function() {
        return hollerith_10mvp.encode_integer(-3);
      }), hollerith_10mvp.encode(-3));
      this.eq((Ωanybt__37 = function() {
        return hollerith_10mvp.encode_integer(-2);
      }), hollerith_10mvp.encode(-2));
      this.eq((Ωanybt__38 = function() {
        return hollerith_10mvp.encode_integer(-1);
      }), hollerith_10mvp.encode(-1));
      this.eq((Ωanybt__39 = function() {
        return hollerith_10mvp.encode_integer(0);
      }), hollerith_10mvp.encode(0));
      this.eq((Ωanybt__40 = function() {
        return hollerith_10mvp.encode_integer(1);
      }), hollerith_10mvp.encode(1));
      this.eq((Ωanybt__41 = function() {
        return hollerith_10mvp.encode_integer(+9);
      }), hollerith_10mvp.encode(+9));
      this.eq((Ωanybt__42 = function() {
        return hollerith_10mvp.encode_integer(+10);
      }), hollerith_10mvp.encode(+10));
      this.eq((Ωanybt__43 = function() {
        return hollerith_10mvp.encode_integer(+20);
      }), hollerith_10mvp.encode(+20));
      this.eq((Ωanybt__44 = function() {
        return hollerith_10mvp.encode_integer(+90);
      }), hollerith_10mvp.encode(+90));
      this.eq((Ωanybt__45 = function() {
        return hollerith_10mvp.encode_integer(123);
      }), hollerith_10mvp.encode(123));
      this.eq((Ωanybt__46 = function() {
        return hollerith_10mvp.encode_integer(+900);
      }), hollerith_10mvp.encode(+900));
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    h10mvp_3: function() {
      var Hollerith, equals, hollerith_10, hollerith_10mvp, hollerith_128, internals, type_of, Ωanybt__47, Ωanybt__48, Ωanybt__49, Ωanybt__50, Ωanybt__51, Ωanybt__52, Ωanybt__53, Ωanybt__54, Ωanybt__55, Ωanybt__56, Ωanybt__57, Ωanybt__58, Ωanybt__59, Ωanybt__60, Ωanybt__61, Ωanybt__62, Ωanybt__63, Ωanybt__64, Ωanybt__65, Ωanybt__66, Ωanybt__67, Ωanybt__68;
      ({Hollerith, hollerith_10, hollerith_10mvp, hollerith_128, internals} = require('../../../apps/hollerith'));
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({
        isDeepStrictEqual: equals
      } = require('node:util'));
      //.......................................................................................................
      this.eq((Ωanybt__47 = function() {
        return hollerith_10mvp.encode_integer(-999);
      }), hollerith_10mvp.encode([-999]));
      this.eq((Ωanybt__48 = function() {
        return hollerith_10mvp.encode_integer(-99);
      }), hollerith_10mvp.encode([-99]));
      this.eq((Ωanybt__49 = function() {
        return hollerith_10mvp.encode_integer(-90);
      }), hollerith_10mvp.encode([-90]));
      this.eq((Ωanybt__50 = function() {
        return hollerith_10mvp.encode_integer(-11);
      }), hollerith_10mvp.encode([-11]));
      this.eq((Ωanybt__51 = function() {
        return hollerith_10mvp.encode_integer(-10);
      }), hollerith_10mvp.encode([-10]));
      this.eq((Ωanybt__52 = function() {
        return hollerith_10mvp.encode_integer(-9);
      }), hollerith_10mvp.encode([-9]));
      this.eq((Ωanybt__53 = function() {
        return hollerith_10mvp.encode_integer(-8);
      }), hollerith_10mvp.encode([-8]));
      this.eq((Ωanybt__54 = function() {
        return hollerith_10mvp.encode_integer(-7);
      }), hollerith_10mvp.encode([-7]));
      this.eq((Ωanybt__55 = function() {
        return hollerith_10mvp.encode_integer(-6);
      }), hollerith_10mvp.encode([-6]));
      this.eq((Ωanybt__56 = function() {
        return hollerith_10mvp.encode_integer(-5);
      }), hollerith_10mvp.encode([-5]));
      this.eq((Ωanybt__57 = function() {
        return hollerith_10mvp.encode_integer(-4);
      }), hollerith_10mvp.encode([-4]));
      this.eq((Ωanybt__58 = function() {
        return hollerith_10mvp.encode_integer(-3);
      }), hollerith_10mvp.encode([-3]));
      this.eq((Ωanybt__59 = function() {
        return hollerith_10mvp.encode_integer(-2);
      }), hollerith_10mvp.encode([-2]));
      this.eq((Ωanybt__60 = function() {
        return hollerith_10mvp.encode_integer(-1);
      }), hollerith_10mvp.encode([-1]));
      this.eq((Ωanybt__61 = function() {
        return hollerith_10mvp.encode_integer(0);
      }), hollerith_10mvp.encode([0]));
      this.eq((Ωanybt__62 = function() {
        return hollerith_10mvp.encode_integer(1);
      }), hollerith_10mvp.encode([1]));
      this.eq((Ωanybt__63 = function() {
        return hollerith_10mvp.encode_integer(+9);
      }), hollerith_10mvp.encode([+9]));
      this.eq((Ωanybt__64 = function() {
        return hollerith_10mvp.encode_integer(+10);
      }), hollerith_10mvp.encode([+10]));
      this.eq((Ωanybt__65 = function() {
        return hollerith_10mvp.encode_integer(+20);
      }), hollerith_10mvp.encode([+20]));
      this.eq((Ωanybt__66 = function() {
        return hollerith_10mvp.encode_integer(+90);
      }), hollerith_10mvp.encode([+90]));
      this.eq((Ωanybt__67 = function() {
        return hollerith_10mvp.encode_integer(123);
      }), hollerith_10mvp.encode([123]));
      this.eq((Ωanybt__68 = function() {
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
        var entry, i, idx, j, len, len1, probe, probes, sk, Ωhllt__70;
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
          // debug 'Ωhllt__69', entry
          this.eq((Ωhllt__70 = function() {
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
      var Hollerith, _, equals, expected_indexes, hollerith_10, hollerith_10mvp, hollerith_128, i, idx, internals, j, k, l, len, len1, len2, m, pline, plines, probes, psk, real_indexes, shuffle, sk_matcher, type_of, uline, ulines, usk, vdx, Ωhllt__72, Ωhllt__74;
      ({Hollerith, hollerith_10, hollerith_10mvp, hollerith_128, internals} = require('../../../apps/hollerith'));
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
          // help 'Ωhllt__71', uline
          real_indexes.push(Number(uline.replace(/^.*?\s([0-9]+)$/, '$1')));
        }
        this.eq((Ωhllt__72 = function() {
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
          // help 'Ωhllt__73', pline
          real_indexes.push(Number(pline.replace(/^.*?\s([0-9]+)$/, '$1')));
        }
        this.eq((Ωhllt__74 = function() {
          return equals(expected_indexes, real_indexes);
        }), true);
      }
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    h10mvp2_sorting_2: function() {
      var Hollerith, _, equals, expected_indexes, hollerith_10, hollerith_10mvp2, hollerith_128, i, idx, internals, j, k, l, len, len1, len2, m, pline, plines, probes, psk, real_indexes, shuffle, sk_matcher, type_of, uline, ulines, usk, vdx, Ωhllt__75, Ωhllt__77, Ωhllt__79;
      ({Hollerith, hollerith_10, hollerith_10mvp2, hollerith_128, internals} = require('../../../apps/hollerith'));
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({
        isDeepStrictEqual: equals
      } = require('node:util'));
      //.......................................................................................................
      probes = [[[-999], 'B000'], [[-99], 'C00'], [[-90], 'C09'], [[-11], 'C88'], [[-10], 'C89'], [[-9], 'E'], [[-8], 'F'], [[-7], 'G'], [[-6], 'H'], [[-5], 'I'], [[-4], 'J'], [[-3], 'K'], [[-2], 'L'], [[-1], 'M'], [[+0, -20], 'NC79'], [[+0], 'N'], [[+0, +20], 'NX20'], [[+9], 'W'], [[+10, -3], 'X10K'], [[+10, -2], 'X10L'], [[+10, -1], 'X10M'], [[+10], 'X10'], [[+10, +0], 'X10N'], [[+10, +1], 'X10O'], [[+10, +10, -1], 'X10X10M'], [[+10, +10], 'X10X10'], [[+10, +20], 'X10X20'], [[+20], 'X20'], [[+20, +10], 'X20X10'], [[+90], 'X90'], [[+900], 'Y900']];
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
        usk = hollerith_10mvp2.encode(vdx);
        this.eq((Ωhllt__75 = function() {
          return usk;
        }), sk_matcher);
        psk = usk.padEnd(10, hollerith_10mvp2.cfg.zpuns[0]);
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
          // help 'Ωhllt__76', uline
          real_indexes.push(Number(uline.replace(/^.*?\s([0-9]+)$/, '$1')));
        }
        this.eq((Ωhllt__77 = function() {
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
          // help 'Ωhllt__78', pline
          real_indexes.push(Number(pline.replace(/^.*?\s([0-9]+)$/, '$1')));
        }
        this.eq((Ωhllt__79 = function() {
          return equals(expected_indexes, real_indexes);
        }), true);
      }
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    h10mvp2_sorting_2: function() {
      var Hollerith, _, equals, expected_indexes, hollerith_128, i, idx, internals, j, k, l, len, len1, len2, m, pline, plines, probes, psk, real_indexes, shuffle, sk_matcher, type_of, uline, ulines, usk, vdx, Ωhllt__80, Ωhllt__82, Ωhllt__84;
      ({Hollerith, hollerith_128, internals} = require('../../../apps/hollerith'));
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({
        isDeepStrictEqual: equals
      } = require('node:util'));
      //.......................................................................................................
      probes = [[[-999], 'Í¿;'], [[-99], 'Î?'], [[-90], 'ÎH'], [[-11], 'Ø'], [[-10], 'Ù'], [[-9], 'Ú'], [[-8], 'Û'], [[-7], 'Ü'], [[-6], 'Ý'], [[-5], 'Þ'], [[-4], 'ß'], [[-3], 'à'], [[-2], 'á'], [[-1], 'â'], [[+0, -20], 'ãÏ'], [[+0], 'ã'], [[+0, +20], 'ã÷'], [[+9], 'ì'], [[+10, -3], 'íà'], [[+10, -2], 'íá'], [[+10, -1], 'íâ'], [[+10], 'í'], [[+10, +0], 'íã'], [[+10, +1], 'íä'], [[+10, +10, -1], 'ííâ'], [[+10, +10], 'íí'], [[+10, +20], 'í÷'], [[+20], '÷'], [[+20, +10], '÷í'], [[+90], 'ø~'], [[+900], 'ù*&']];
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
        usk = hollerith_128.encode(vdx);
        this.eq((Ωhllt__80 = function() {
          return usk;
        }), sk_matcher);
        // echo rpr usk
        psk = usk.padEnd(10, hollerith_128.cfg.zpuns[0]);
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
          // help 'Ωhllt__81', uline
          real_indexes.push(Number(uline.replace(/^.*?\s([0-9]+)$/, '$1')));
        }
        this.eq((Ωhllt__82 = function() {
          return equals(expected_indexes, real_indexes);
        }), false);
      }
//.......................................................................................................
      for (_ = l = 1; l <= 10; _ = ++l) {
        plines = shuffle(plines);
        plines.sort();
        real_indexes = [];
        for (idx = m = 0, len2 = plines.length; m < len2; idx = ++m) {
          pline = plines[idx];
          if (_ === 1) {
            help('Ωhllt__83', rpr(pline));
          }
          real_indexes.push(Number(pline.replace(/^.*?\s([0-9]+)$/, '$1')));
        }
        this.eq((Ωhllt__84 = function() {
          return equals(expected_indexes, real_indexes);
        }), true);
      }
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    h128_decode: function() {
      var Hollerith, codec, equals, hollerith_128, i, index_matcher, index_result, internals, j, len, len1, probes_and_matchers, ref, sortkey, type_of, unit, unit_matcher, unit_result, Ωhllt__87, Ωhllt__88;
      ({Hollerith, hollerith_128, internals} = require('../../../apps/hollerith'));
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({
        isDeepStrictEqual: equals
      } = require('node:util'));
      //.......................................................................................................
      probes_and_matchers = [['Í¿;ããããããã', [-999], 'nnum:Í,¿;[-999]|padding:ããããããã'], ['Î?ãããããããã', [-99], 'nnum:Î,?[-99]|padding:ãããããããã'], ['ÎHãããããããã', [-90], 'nnum:Î,H[-90]|padding:ãããããããã'], ['Øããããããããã', [-11], 'nun:Ø[-11]|padding:ããããããããã'], ['Ùããããããããã', [-10], 'nun:Ù[-10]|padding:ããããããããã'], ['Úããããããããã', [-9], 'nun:Ú[-9]|padding:ããããããããã'], ['Ûããããããããã', [-8], 'nun:Û[-8]|padding:ããããããããã'], ['Üããããããããã', [-7], 'nun:Ü[-7]|padding:ããããããããã'], ['Ýããããããããã', [-6], 'nun:Ý[-6]|padding:ããããããããã'], ['Þããããããããã', [-5], 'nun:Þ[-5]|padding:ããããããããã'], ['ßããããããããã', [-4], 'nun:ß[-4]|padding:ããããããããã'], ['àããããããããã', [-3], 'nun:à[-3]|padding:ããããããããã'], ['áããããããããã', [-2], 'nun:á[-2]|padding:ããããããããã'], ['âããããããããã', [-1], 'nun:â[-1]|padding:ããããããããã'], ['ãÏãããããããã', [0, -20], 'zero:ã[0]|nun:Ï[-20]|padding:ãããããããã'], ['ãããããããããã', [0], 'padding:ãããããããããã[0]'], ['ã÷ãããããããã', [0, 20], 'zero:ã[0]|pun:÷[20]|padding:ãããããããã'], ['ìããããããããã', [9], 'pun:ì[9]|padding:ããããããããã'], ['íàãããããããã', [10, -3], 'pun:í[10]|nun:à[-3]|padding:ãããããããã'], ['íáãããããããã', [10, -2], 'pun:í[10]|nun:á[-2]|padding:ãããããããã'], ['íâãããããããã', [10, -1], 'pun:í[10]|nun:â[-1]|padding:ãããããããã'], ['íããããããããã', [10], 'pun:í[10]|padding:ããããããããã'], ['íäãããããããã', [10, 1], 'pun:í[10]|pun:ä[1]|padding:ãããããããã'], ['ííâããããããã', [10, 10, -1], 'pun:í[10]|pun:í[10]|nun:â[-1]|padding:ããããããã'], ['ííãããããããã', [10, 10], 'pun:í[10]|pun:í[10]|padding:ãããããããã'], ['í÷ãããããããã', [10, 20], 'pun:í[10]|pun:÷[20]|padding:ãããããããã'], ['÷ããããããããã', [20], 'pun:÷[20]|padding:ããããããããã'], ['÷íãããããããã', [20, 10], 'pun:÷[20]|pun:í[10]|padding:ãããããããã'], ['ø~ãããããããã', [90], 'pnum:ø,~[90]|padding:ãããããããã'], ['ù*&ããããããã', [900], 'pnum:ù,*&[900]|padding:ããããããã']];
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
        info('Ωhllt__85', f`${(rpr(unit_result)) + ','}:<60c; ${rpr(index_result)}`);
        //   @eq ( Ωhllt__86 = ->  unit_result                     ),  unit_matcher
        this.eq((Ωhllt__87 = function() {
          return index_result;
        }), index_matcher);
        this.eq((Ωhllt__88 = function() {
          return sortkey;
        }), (codec.encode(index_matcher)).padEnd(sortkey.length, codec.cfg.zpuns[0]));
        debug('Ωhllt__89', rpr((codec.encode(index_matcher)).padEnd(sortkey.length, codec.cfg.zpuns[0])));
      }
      //   @eq ( Ωhllt__90 = -> codec.decode sortkey  ), index_matcher
      //   # echo [ sortkey, index_result, unit_result, ]
      // #.......................................................................................................
      // @eq     ( Ωhllt__91 = -> codec.parse '5'         ), [ { name: 'other', letters: '5', mantissa: null, index: null } ]
      // @eq     ( Ωhllt__92 = -> codec.parse 'äöü'       ), [ { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
      // @eq     ( Ωhllt__93 = -> codec.parse 'Y900äöü'   ), [ { name: 'pnum', letters: 'Y', mantissa: '900', index: 900 }, { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
      // @throws ( Ωhllt__94 = -> codec.decode '5'        ), /not a valid sortkey: unable to parse '5'/
      // @throws ( Ωhllt__95 = -> codec.decode 'äöü'      ), /not a valid sortkey: unable to parse 'äöü'/
      // @throws ( Ωhllt__96 = -> codec.decode 'Y900äöü'  ), /not a valid sortkey: unable to parse 'äöü' in 'Y900äöü'/
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    h10mvp2_decode_units: function() {
      /* NOTE also see corresponding test in `hengist-NG/dev/interlex/src/test-hollerith.coffee` */
      var Hollerith, codec, hollerith_10mvp2, i, index_matcher, index_result, internals, j, len, len1, probes_and_matchers, ref, sortkey, type_of, unit, unit_matcher, unit_result, Ωhllt_100, Ωhllt_101, Ωhllt_102, Ωhllt_103, Ωhllt_104, Ωhllt_105, Ωhllt_106, Ωhllt_107, Ωhllt__98, Ωhllt__99;
      ({type_of} = SFMODULES.unstable.require_type_of());
      //.......................................................................................................
      ({Hollerith, hollerith_10mvp2, internals} = require('../../../apps/hollerith'));
      // { isDeepStrictEqual: equals, } = require 'node:util'
      //.......................................................................................................
      probes_and_matchers = [['B000NNNNNN', [-999], 'nnum:B,000[-999]|padding:NNNNNN'], ['C00NNNNNNN', [-99], 'nnum:C,00[-99]|padding:NNNNNNN'], ['C09NNNNNNN', [-90], 'nnum:C,09[-90]|padding:NNNNNNN'], ['C88NNNNNNN', [-11], 'nnum:C,88[-11]|padding:NNNNNNN'], ['C89NNNNNNN', [-10], 'nnum:C,89[-10]|padding:NNNNNNN'], ['ENNNNNNNNN', [-9], 'nun:E[-9]|padding:NNNNNNNNN'], ['FNNNNNNNNN', [-8], 'nun:F[-8]|padding:NNNNNNNNN'], ['GNNNNNNNNN', [-7], 'nun:G[-7]|padding:NNNNNNNNN'], ['HNNNNNNNNN', [-6], 'nun:H[-6]|padding:NNNNNNNNN'], ['INNNNNNNNN', [-5], 'nun:I[-5]|padding:NNNNNNNNN'], ['JNNNNNNNNN', [-4], 'nun:J[-4]|padding:NNNNNNNNN'], ['KNNNNNNNNN', [-3], 'nun:K[-3]|padding:NNNNNNNNN'], ['LNNNNNNNNN', [-2], 'nun:L[-2]|padding:NNNNNNNNN'], ['MNNNNNNNNN', [-1], 'nun:M[-1]|padding:NNNNNNNNN'], ['NC79NNNNNN', [0, -20], 'zero:N[0]|nnum:C,79[-20]|padding:NNNNNN'], ['NNNNNNNNNN', [0], 'padding:NNNNNNNNNN[0]'], ['NX20NNNNNN', [0, 20], 'zero:N[0]|pnum:X,20[20]|padding:NNNNNN'], ['WNNNNNNNNN', [9], 'pun:W[9]|padding:NNNNNNNNN'], ['X10KNNNNNN', [10, -3], 'pnum:X,10[10]|nun:K[-3]|padding:NNNNNN'], ['X10LNNNNNN', [10, -2], 'pnum:X,10[10]|nun:L[-2]|padding:NNNNNN'], ['X10MNNNNNN', [10, -1], 'pnum:X,10[10]|nun:M[-1]|padding:NNNNNN'], ['X10NNNNNNN', [10], 'pnum:X,10[10]|padding:NNNNNNN'], ['X10ONNNNNN', [10, 1], 'pnum:X,10[10]|pun:O[1]|padding:NNNNNN'], ['X10X10MNNN', [10, 10, -1], 'pnum:X,10[10]|pnum:X,10[10]|nun:M[-1]|padding:NNN'], ['X10X10NNNN', [10, 10], 'pnum:X,10[10]|pnum:X,10[10]|padding:NNNN'], ['X10X20NNNN', [10, 20], 'pnum:X,10[10]|pnum:X,20[20]|padding:NNNN'], ['X20NNNNNNN', [20], 'pnum:X,20[20]|padding:NNNNNNN'], ['X20X10NNNN', [20, 10], 'pnum:X,20[20]|pnum:X,10[10]|padding:NNNN'], ['X90NNNNNNN', [90], 'pnum:X,90[90]|padding:NNNNNNN'], ['Y900NNNNNN', [900], 'pnum:Y,900[900]|padding:NNNNNN'], ['NNNNNNNNN', [0], 'padding:NNNNNNNNN[0]'], ['NN', [0], 'padding:NN[0]'], ['N', [0], 'padding:N[0]'], ['X10', [10], 'pnum:X,10[10]'], ['K', [-3], 'nun:K[-3]']];
      //.......................................................................................................
      codec = hollerith_10mvp2;
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
        info('Ωhllt__97', f`${(rpr(unit_result)) + ','}:<60c; ${rpr(index_result)}`);
        this.eq((Ωhllt__98 = function() {
          return unit_result;
        }), unit_matcher);
        this.eq((Ωhllt__99 = function() {
          return index_result;
        }), index_matcher);
        this.eq((Ωhllt_100 = function() {
          return codec.decode(sortkey);
        }), index_matcher);
        this.eq((Ωhllt_101 = function() {
          return sortkey;
        }), (codec.encode(index_matcher)).padEnd(sortkey.length, codec.cfg.zpuns[0]));
      }
      // echo [ sortkey, index_result, unit_result, ]
      //.......................................................................................................
      this.eq((Ωhllt_102 = function() {
        return codec.parse('5');
      }), [
        {
          name: 'other',
          letters: '5',
          mantissa: null,
          index: null
        }
      ]);
      this.eq((Ωhllt_103 = function() {
        return codec.parse('äöü');
      }), [
        {
          name: 'other',
          letters: 'äöü',
          mantissa: null,
          index: null
        }
      ]);
      this.eq((Ωhllt_104 = function() {
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
      this.throws((Ωhllt_105 = function() {
        return codec.decode('5');
      }), /not a valid sortkey: unable to parse '5'/);
      this.throws((Ωhllt_106 = function() {
        return codec.decode('äöü');
      }), /not a valid sortkey: unable to parse 'äöü'/);
      this.throws((Ωhllt_107 = function() {
        return codec.decode('Y900äöü');
      }), /not a valid sortkey: unable to parse 'äöü' in 'Y900äöü'/);
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    h128b_decode: function() {
      var Hollerith, codec, equals, hollerith_10mvp, hollerith_128, hollerith_128b, internals, n, sk, type_of;
      ({Hollerith, hollerith_128, hollerith_128b, hollerith_10mvp, internals} = require('../../../apps/hollerith'));
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({
        isDeepStrictEqual: equals
      } = require('node:util'));
      //.......................................................................................................
      // codec = hollerith_128
      // codec = hollerith_128b
      codec = hollerith_10mvp;
      debug('Ωhllt_108', rpr(codec.encode(-1)));
      debug('Ωhllt_109', rpr(codec.encode(-2)));
      n = -100;
      urge('Ωhllt_110', f`${rpr([n])}:>10c; ${rpr(sk = codec.encode(n))}:<5c; ${rpr(codec.decode(sk))}:>10c;`);
      n = -21;
      urge('Ωhllt_111', f`${rpr([n])}:>10c; ${rpr(sk = codec.encode(n))}:<5c; ${rpr(codec.decode(sk))}:>10c;`);
      n = -20;
      urge('Ωhllt_112', f`${rpr([n])}:>10c; ${rpr(sk = codec.encode(n))}:<5c; ${rpr(codec.decode(sk))}:>10c;`);
      n = -19;
      urge('Ωhllt_113', f`${rpr([n])}:>10c; ${rpr(sk = codec.encode(n))}:<5c; ${rpr(codec.decode(sk))}:>10c;`);
      n = -1;
      urge('Ωhllt_114', f`${rpr([n])}:>10c; ${rpr(sk = codec.encode(n))}:<5c; ${rpr(codec.decode(sk))}:>10c;`);
      n = 0;
      urge('Ωhllt_115', f`${rpr([n])}:>10c; ${rpr(sk = codec.encode(n))}:<5c; ${rpr(codec.decode(sk))}:>10c;`);
      n = 1;
      urge('Ωhllt_116', f`${rpr([n])}:>10c; ${rpr(sk = codec.encode(n))}:<5c; ${rpr(codec.decode(sk))}:>10c;`);
      n = 2;
      urge('Ωhllt_117', f`${rpr([n])}:>10c; ${rpr(sk = codec.encode(n))}:<5c; ${rpr(codec.decode(sk))}:>10c;`);
      n = 3;
      urge('Ωhllt_118', f`${rpr([n])}:>10c; ${rpr(sk = codec.encode(n))}:<5c; ${rpr(codec.decode(sk))}:>10c;`);
      n = 10;
      urge('Ωhllt_119', f`${rpr([n])}:>10c; ${rpr(sk = codec.encode(n))}:<5c; ${rpr(codec.decode(sk))}:>10c;`);
      n = 126;
      urge('Ωhllt_120', f`${rpr([n])}:>10c; ${rpr(sk = codec.encode(n))}:<5c; ${rpr(codec.decode(sk))}:>10c;`);
      n = 127;
      urge('Ωhllt_121', f`${rpr([n])}:>10c; ${rpr(sk = codec.encode(n))}:<5c; ${rpr(codec.decode(sk))}:>10c;`);
      n = 128;
      urge('Ωhllt_122', f`${rpr([n])}:>10c; ${rpr(sk = codec.encode(n))}:<5c; ${rpr(codec.decode(sk))}:>10c;`);
      n = 129;
      urge('Ωhllt_123', f`${rpr([n])}:>10c; ${rpr(sk = codec.encode(n))}:<5c; ${rpr(codec.decode(sk))}:>10c;`);
      // for [ sortkey, index_matcher, unit_matcher, ] in probes_and_matchers
      //   unit_result     = []
      //   index_result    = []
      //   for unit in codec.parse sortkey
      //     unit_result.push  helpers.rpr_unit unit
      //     index_result.push unit.index if unit.index?
      //   unit_result   = unit_result.join '|'
      //   info 'Ωhllt_124', f"#{( rpr unit_result ) + ','}:<60c; #{rpr index_result}"
      // #   @eq ( Ωhllt_125 = ->  unit_result                     ),  unit_matcher
      //   @eq ( Ωhllt_126 = -> index_result                     ), index_matcher
      //   @eq ( Ωhllt_127 = -> sortkey ), ( codec.encode index_matcher ).padEnd sortkey.length, codec.cfg.zpuns[ 0 ]
      //   debug 'Ωhllt_128', rpr ( codec.encode index_matcher ).padEnd sortkey.length, codec.cfg.zpuns[ 0 ]
      //   @eq ( Ωhllt_129 = -> codec.decode sortkey  ), index_matcher
      //   # echo [ sortkey, index_result, unit_result, ]
      // #.......................................................................................................
      // @eq     ( Ωhllt_130 = -> codec.parse '5'         ), [ { name: 'other', letters: '5', mantissa: null, index: null } ]
      // @eq     ( Ωhllt_131 = -> codec.parse 'äöü'       ), [ { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
      // @eq     ( Ωhllt_132 = -> codec.parse 'Y900äöü'   ), [ { name: 'pnum', letters: 'Y', mantissa: '900', index: 900 }, { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
      // @throws ( Ωhllt_133 = -> codec.decode '5'        ), /not a valid sortkey: unable to parse '5'/
      // @throws ( Ωhllt_134 = -> codec.decode 'äöü'      ), /not a valid sortkey: unable to parse 'äöü'/
      // @throws ( Ωhllt_135 = -> codec.decode 'Y900äöü'  ), /not a valid sortkey: unable to parse 'äöü' in 'Y900äöü'/
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    types_bounded_list: function() {
      var Bounded_list, blist, data_1, data_2, data_3, data_4, equals, internals, Ωhllt_136, Ωhllt_137, Ωhllt_138, Ωhllt_139, Ωhllt_140, Ωhllt_141, Ωhllt_142, Ωhllt_143, Ωhllt_144, Ωhllt_145, Ωhllt_146, Ωhllt_147, Ωhllt_148, Ωhllt_149, Ωhllt_150, Ωhllt_151, Ωhllt_152, Ωhllt_153, Ωhllt_154, Ωhllt_155, Ωhllt_156, Ωhllt_157, Ωhllt_158, Ωhllt_159, Ωhllt_160, Ωhllt_161, Ωhllt_162, Ωhllt_163, Ωhllt_164, Ωhllt_165, Ωhllt_166, Ωhllt_167, Ωhllt_168, Ωhllt_169, Ωhllt_170, Ωhllt_171, Ωhllt_172, Ωhllt_173, Ωhllt_174, Ωhllt_175, Ωhllt_176, Ωhllt_177, Ωhllt_178, Ωhllt_179, Ωhllt_180;
      ({internals} = require('../../../apps/hollerith/lib/types'));
      ({Bounded_list} = internals);
      ({
        // { type_of,                } = SFMODULES.unstable.require_type_of()
        isDeepStrictEqual: equals
      } = require('node:util'));
      //.......................................................................................................
      blist = new Bounded_list(3);
      this.eq((Ωhllt_136 = function() {
        return blist.size;
      }), 0);
      this.eq((Ωhllt_137 = function() {
        return blist.is_empty;
      }), true);
      this.eq((Ωhllt_138 = function() {
        return blist.max_size;
      }), 3);
      this.eq((Ωhllt_139 = function() {
        return blist.at(-1);
      }), void 0);
      //.......................................................................................................
      data_1 = blist.current;
      this.eq((Ωhllt_140 = function() {
        return data_1;
      }), {});
      this.eq((Ωhllt_141 = function() {
        return blist.current;
      }), data_1);
      this.eq((Ωhllt_142 = function() {
        return blist.at(-1);
      }), data_1);
      this.eq((Ωhllt_143 = function() {
        return blist.size;
      }), 1);
      this.eq((Ωhllt_144 = function() {
        return blist.is_empty;
      }), false);
      //.......................................................................................................
      data_2 = blist.create();
      this.eq((Ωhllt_145 = function() {
        return equals(data_1, data_2);
      }), true);
      this.eq((Ωhllt_146 = function() {
        return data_1 === data_2;
      }), false);
      this.eq((Ωhllt_147 = function() {
        return blist.at(-1);
      }), data_2);
      this.eq((Ωhllt_148 = function() {
        return blist.size;
      }), 2);
      this.eq((Ωhllt_149 = function() {
        return blist.is_empty;
      }), false);
      this.eq((Ωhllt_150 = function() {
        return data_2 === blist.current;
      }), true);
      this.eq((Ωhllt_151 = function() {
        return blist.at(-1);
      }), data_2);
      this.eq((Ωhllt_152 = function() {
        return blist.size;
      }), 2);
      this.eq((Ωhllt_153 = function() {
        return blist.is_empty;
      }), false);
      //.......................................................................................................
      data_3 = blist.create();
      this.eq((Ωhllt_154 = function() {
        return equals(data_2, data_3);
      }), true);
      this.eq((Ωhllt_155 = function() {
        return data_2 === data_3;
      }), false);
      this.eq((Ωhllt_156 = function() {
        return blist.at(-1);
      }), data_3);
      this.eq((Ωhllt_157 = function() {
        return blist.size;
      }), 3);
      this.eq((Ωhllt_158 = function() {
        return blist.is_empty;
      }), false);
      this.eq((Ωhllt_159 = function() {
        return data_3 === blist.current;
      }), true);
      this.eq((Ωhllt_160 = function() {
        return blist.at(-1);
      }), data_3);
      this.eq((Ωhllt_161 = function() {
        return blist.at(-2);
      }), data_2);
      this.eq((Ωhllt_162 = function() {
        return blist.at(-3);
      }), data_1);
      this.eq((Ωhllt_163 = function() {
        return blist.size;
      }), 3);
      this.eq((Ωhllt_164 = function() {
        return blist.is_empty;
      }), false);
      //.......................................................................................................
      data_4 = blist.create({
        a: 1,
        b: 2
      });
      this.eq((Ωhllt_165 = function() {
        return equals(data_3, data_4);
      }), false);
      this.eq((Ωhllt_166 = function() {
        return data_3 === data_4;
      }), false);
      this.eq((Ωhllt_167 = function() {
        return blist.at(-1);
      }), {
        a: 1,
        b: 2
      });
      this.eq((Ωhllt_168 = function() {
        return blist.size;
      }), 3);
      this.eq((Ωhllt_169 = function() {
        return blist.is_empty;
      }), false);
      this.eq((Ωhllt_170 = function() {
        return blist.current;
      }), {
        a: 1,
        b: 2
      });
      this.eq((Ωhllt_171 = function() {
        return blist.at(-1);
      }), {
        a: 1,
        b: 2
      });
      this.eq((Ωhllt_172 = function() {
        return blist.at(-2);
      }), data_3);
      this.eq((Ωhllt_173 = function() {
        return blist.at(-3);
      }), data_2);
      this.eq((Ωhllt_174 = function() {
        return blist.size;
      }), 3);
      this.eq((Ωhllt_175 = function() {
        return blist.is_empty;
      }), false);
      //.......................................................................................................
      this.eq((Ωhllt_176 = function() {
        return [blist.create(), blist.size];
      }), [{}, 3]);
      this.eq((Ωhllt_177 = function() {
        return [blist.create(), blist.size];
      }), [{}, 3]);
      this.eq((Ωhllt_178 = function() {
        return [blist.create(), blist.size];
      }), [{}, 3]);
      //.......................................................................................................
      blist = new Bounded_list(3);
      this.eq((Ωhllt_179 = function() {
        return [
          blist.assign({
            message: 'oops'
          }),
          blist.size,
          blist.current
        ];
      }), [
        {
          message: 'oops'
        },
        1,
        {
          message: 'oops'
        }
      ]);
      this.eq((Ωhllt_180 = function() {
        return [
          blist.assign({
            message: 'over',
            x: 1
          }),
          blist.size,
          blist.current
        ];
      }), [
        {
          message: 'over',
          x: 1
        },
        1,
        {
          message: 'over',
          x: 1
        }
      ]);
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    type_data_handling: function() {
      var Bounded_list, Type, Typespace, internals;
      ({internals} = require('../../../apps/hollerith/lib/types'));
      ({Type, Typespace, Bounded_list} = internals);
      (() => {        //.......................................................................................................
        var My_typespace, T, Ωhllt_181, Ωhllt_182, Ωhllt_183, Ωhllt_184, Ωhllt_185, Ωhllt_186, Ωhllt_187, Ωhllt_188, Ωhllt_189, Ωhllt_190, Ωhllt_191, Ωhllt_192, Ωhllt_193;
        My_typespace = class My_typespace extends Typespace {
          //...................................................................................................
          static integer(x) {
            this.assign({x});
            if (Number.isSafeInteger(x)) {
              return true;
            }
            if (Number.isFinite(x)) {
              return this.fail(`${rpr(x)} is a non-integer number`, {
                fraction: x % 1
              });
            }
            return this.fail(`${rpr(x)} is not even a finite number`);
          }

          //...................................................................................................
          static even_integer(x) {
            if (!this.T.integer.isa(x)) {
              return this.fail("not an integer");
            }
            if ((modulo(x, 2)) !== 0) {
              return this.fail("detected remainder");
            }
            return true;
          }

        };
        //.....................................................................................................
        T = new My_typespace();
        this.eq((Ωhllt_181 = function() {
          return T.integer.isa(9987);
        }), true);
        this.eq((Ωhllt_182 = function() {
          return T.integer.data;
        }), {
          x: 9987
        });
        this.eq((Ωhllt_183 = function() {
          return T.integer.isa(9987.125);
        }), false);
        this.eq((Ωhllt_184 = function() {
          return T.integer.data;
        }), {
          x: 9987.125,
          message: '9987.125 is a non-integer number',
          fraction: 0.125
        });
        this.eq((Ωhllt_185 = function() {
          return T.even_integer.isa(33.125);
        }), false);
        this.eq((Ωhllt_186 = function() {
          return T.integer.data;
        }), {
          x: 33.125,
          message: '33.125 is a non-integer number',
          fraction: 0.125
        });
        this.eq((Ωhllt_187 = function() {
          return T.even_integer.data;
        }), {
          message: 'not an integer'
        });
        this.eq((Ωhllt_188 = function() {
          return T.even_integer.isa(777);
        }), false);
        this.eq((Ωhllt_189 = function() {
          return T.integer.data;
        }), {
          x: 777
        });
        this.eq((Ωhllt_190 = function() {
          return T.even_integer.data;
        }), {
          message: 'detected remainder'
        });
        this.eq((Ωhllt_191 = function() {
          return T.even_integer.isa(888);
        }), true);
        this.eq((Ωhllt_192 = function() {
          return T.integer.data;
        }), {
          x: 888
        });
        this.eq((Ωhllt_193 = function() {
          return T.even_integer.data;
        }), {});
        //.....................................................................................................
        return null;
      })();
      (() => {        //.......................................................................................................
        var My_typespace, T, Ωhllt_195, Ωhllt_196;
        My_typespace = class My_typespace extends Typespace {
          //...................................................................................................
          static integer(x) {
            this.assign({x});
            if (Number.isSafeInteger(x)) {
              return true;
            }
            if (Number.isFinite(x)) {
              return this.fail(`${rpr(x)} is a non-integer number`, {
                fraction: x % 1
              });
            }
            return this.fail(`${rpr(x)} is not even a finite number`);
          }

          //...................................................................................................
          static even_integer(x) {
            if (!this.T.integer.isame(this, x)) {
              // unless @T.integer.isame @, x
              //   debug 'Ωhllt_194', @data
              return this.fail("not an integer");
            }
            if ((modulo(x, 2)) !== 0) {
              return this.fail("detected remainder");
            }
            return true;
          }

        };
        //.....................................................................................................
        T = new My_typespace();
        T.even_integer.isa('what?');
        this.eq((Ωhllt_195 = function() {
          return T.integer.data;
        }), {});
        this.eq((Ωhllt_196 = function() {
          return T.even_integer.data;
        }), {
          x: 'what?',
          message: "not an integer"
        });
        //.....................................................................................................
        return null;
      })();
      (() => {        //.......................................................................................................
        var My_typespace, T, Ωhllt_197, Ωhllt_198;
        My_typespace = class My_typespace extends Typespace {
          //...................................................................................................
          static integer(x) {
            this.assign({
              me: 'integer'
            });
            this.assign({x});
            if (Number.isSafeInteger(x)) {
              return true;
            }
            if (Number.isFinite(x)) {
              return this.fail(`${rpr(x)} is a non-integer number`, {
                fraction: x % 1
              });
            }
            return this.fail(`${rpr(x)} is not even a finite number`);
          }

          //...................................................................................................
          static even_integer(x) {
            this.assign({
              me: 'even_integer'
            });
            if (!this.T.integer.isame(this, {
              me: 'integer_me',
              message: 'message_from_integer'
            }, x)) {
              return this.fail(`not an integer: ${rpr(this.data.message_from_integer)}`);
            }
            if ((modulo(x, 2)) !== 0) {
              return this.fail("detected remainder");
            }
            return true;
          }

        };
        //.....................................................................................................
        T = new My_typespace();
        T.even_integer.isa('what?');
        this.eq((Ωhllt_197 = function() {
          return T.integer.data;
        }), {});
        this.eq((Ωhllt_198 = function() {
          return T.even_integer.data;
        }), {
          me: 'even_integer',
          integer_me: 'integer',
          x: 'what?',
          message_from_integer: "'what?' is not even a finite number",
          message: `not an integer: "'what?' is not even a finite number\"`
        });
        //.....................................................................................................
        T.even_integer.isa(26);
        debug('Ωhllt_199', T.integer.data);
        debug('Ωhllt_200', T.even_integer.data);
        //.....................................................................................................
        return null;
      })();
      (() => {        //.......................................................................................................
        var My_typespace, T, Ωhllt_201, Ωhllt_202;
        My_typespace = class My_typespace extends Typespace {
          //...................................................................................................
          static integer(x) {
            this.assign({
              me: 'integer'
            });
            this.assign({x});
            if (Number.isSafeInteger(x)) {
              return true;
            }
            if (Number.isFinite(x)) {
              return this.fail(`${rpr(x)} is a non-integer number`, {
                fraction: x % 1
              });
            }
            return this.fail(`${rpr(x)} is not even a finite number`);
          }

          //...................................................................................................
          static even_integer(x) {
            this.assign({
              me: 'even_integer'
            });
            if (!this.T.integer.isa2(x, this.data, {
              me: 'integer_me',
              message: 'message_from_integer'
            })) {
              return this.fail(`not an integer: ${rpr(this.data.message_from_integer)}`);
            }
            if ((modulo(x, 2)) !== 0) {
              return this.fail("detected remainder");
            }
            return true;
          }

        };
        //.....................................................................................................
        T = new My_typespace();
        T.even_integer.isa('what?');
        this.eq((Ωhllt_201 = function() {
          return T.integer.data;
        }), {
          me: 'integer',
          x: 'what?',
          message: "'what?' is not even a finite number"
        });
        this.eq((Ωhllt_202 = function() {
          return T.even_integer.data;
        }), {
          me: 'even_integer',
          integer_me: 'integer',
          x: 'what?',
          message_from_integer: "'what?' is not even a finite number",
          message: `not an integer: "'what?' is not even a finite number\"`
        });
        //.....................................................................................................
        T.even_integer.isa(26);
        debug('Ωhllt_203', T.integer.data);
        debug('Ωhllt_204', T.even_integer.data);
        //.....................................................................................................
        return null;
      })();
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    types: function() {
      var T, equals, internals, type_of, Ωhllt_205, Ωhllt_206, Ωhllt_207, Ωhllt_208, Ωhllt_209, Ωhllt_210, Ωhllt_211, Ωhllt_212, Ωhllt_213, Ωhllt_214, Ωhllt_215, Ωhllt_216, Ωhllt_217, Ωhllt_218, Ωhllt_219, Ωhllt_221, Ωhllt_224, Ωhllt_225;
      ({internals} = require('../../../apps/hollerith/'));
      ({
        types: T
      } = internals);
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({
        isDeepStrictEqual: equals
      } = require('node:util'));
      //.......................................................................................................
      this.eq((Ωhllt_205 = function() {
        return T.nonempty_text.isa(4);
      }), false);
      this.eq((Ωhllt_206 = function() {
        return T.nonempty_text.isa(false);
      }), false);
      this.eq((Ωhllt_207 = function() {
        return T.nonempty_text.isa('');
      }), false);
      this.eq((Ωhllt_208 = function() {
        return T.nonempty_text.isa('yes');
      }), true);
      //.......................................................................................................
      this.eq((Ωhllt_209 = function() {
        return T.incremental_text.isa('yes');
      }), false);
      this.eq((Ωhllt_210 = function() {
        return T.decremental_text.isa('yes');
      }), false);
      this.eq((Ωhllt_211 = function() {
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
      this.eq((Ωhllt_212 = function() {
        return T.incremental_text.isa('abcdefz');
      }), true);
      this.eq((Ωhllt_213 = function() {
        return T.decremental_text.isa('abcdefz');
      }), false);
      this.eq((Ωhllt_214 = function() {
        return T.incremental_text.data;
      }), {
        chrs: ['a', 'b', 'c', 'd', 'e', 'f', 'z']
      });
      this.eq((Ωhllt_215 = function() {
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
      this.eq((Ωhllt_216 = function() {
        return T.incremental_text.isa('abc0');
      }), false);
      this.eq((Ωhllt_217 = function() {
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
      this.eq((Ωhllt_218 = function() {
        return T.decremental_text.isa('cba');
      }), true);
      this.eq((Ωhllt_219 = function() {
        return T.decremental_text.data;
      }), {
        chrs: ['c', 'b', 'a']
      });
      //.......................................................................................................
      debug('Ωhllt_220', T.magnifiers.data);
      this.eq((Ωhllt_221 = function() {
        return T.magnifiers.isa('');
      }), false);
      debug('Ωhllt_222', T.magnifiers.data);
      debug('Ωhllt_223', T.magnifiers.data.current);
      this.eq((Ωhllt_224 = function() {
        return T.magnifiers.data.current;
      }), {
        message: "expected a magnifier, got an empty text"
      });
      this.eq((Ωhllt_225 = function() {
        return T.magnifiers.isa('ABC XYZ');
      }), true);
      debug('Ωhllt_226', T.magnifiers.data);
      // # @eq ( Ωhllt_227 = -> T.magnifiers.isa 'ABC\nXYZ'          ), true
      // # @eq ( Ωhllt_228 = -> T.magnifiers.isa 'ABC\tXYZ'          ), true
      // # @eq ( Ωhllt_229 = -> T.magnifiers.isa 'ABC DXYZ'          ), true
      // # @eq ( Ωhllt_230 = -> T.magnifiers.isa 'ABD CXYZ'          ), false
      //.......................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var guytest_cfg;
      guytest_cfg = {
        throw_on_error: true,
        show_passes: false,
        report_checks: false
      };
      guytest_cfg = {
        throw_on_error: false,
        show_passes: false,
        report_checks: false
      };
      (new Test(guytest_cfg)).test(this.hollerith);
      // ( new Test guytest_cfg ).test { h128b_decode: @hollerith.h128b_decode, }
      // ( new Test guytest_cfg ).test { types_bounded_list: @hollerith.types_bounded_list, }
      return (new Test(guytest_cfg)).test({
        type_data_handling: this.hollerith.type_data_handling
      });
    })();
  }

  // ( new Test guytest_cfg ).test { types: @hollerith.types, }
//.........................................................................................................
// ( new Test guytest_cfg ).test { h10mvp2_sorting_2: @hollerith.h10mvp2_sorting_2, }
// ( new Test guytest_cfg ).test { h128_decode: @hollerith.h128_decode, }
// ( new Test guytest_cfg ).test { h10mvp2_decode_units: @hollerith.h10mvp2_decode_units, }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQTtJQUFBOztFQUVBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsV0FBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLE9BSEYsRUFJRSxHQUpGLENBQUEsR0FJNEIsR0FBRyxDQUFDLEdBSmhDLEVBWkE7OztFQWtCQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixJQUE1Qjs7RUFDQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1Qjs7RUFDQSxTQUFBLEdBQTRCLE9BQUEsQ0FBUSw2Q0FBUixFQXJCNUI7OztFQXlCQSxPQUFBLEdBQ0U7SUFBQSxRQUFBLEVBQVUsUUFBQSxDQUFFLElBQUYsQ0FBQTtBQUNaLFVBQUEsQ0FBQSxFQUFBLEtBQUEsRUFBQSxPQUFBLEVBQUEsUUFBQSxFQUFBO01BQUksQ0FBQSxDQUFFLElBQUYsRUFDRSxP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Q0FBQyxjQUFoQixDQUFnQyxDQUFDLEVBQWpDO01BQUgsQ0FBZixDQUFSLEVBQW1FLEtBQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLGVBQWUsQ0FBQyxjQUFoQixDQUFnQyxDQUFDLEVBQWpDO01BQUgsQ0FBZixDQUFSLEVBQW1FLEtBQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLGVBQWUsQ0FBQyxjQUFoQixDQUFnQyxDQUFDLEVBQWpDO01BQUgsQ0FBZixDQUFSLEVBQW1FLEtBQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLGVBQWUsQ0FBQyxjQUFoQixDQUFpQyxDQUFDLENBQWxDO01BQUgsQ0FBZixDQUFSLEVBQW1FLElBQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLGVBQWUsQ0FBQyxjQUFoQixDQUFpQyxDQUFDLENBQWxDO01BQUgsQ0FBZixDQUFSLEVBQW1FLElBQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLGVBQWUsQ0FBQyxjQUFoQixDQUFpQyxDQUFDLENBQWxDO01BQUgsQ0FBZixDQUFSLEVBQW1FLElBQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLGVBQWUsQ0FBQyxjQUFoQixDQUFpQyxDQUFDLENBQWxDO01BQUgsQ0FBZixDQUFSLEVBQW1FLElBQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLGVBQWUsQ0FBQyxjQUFoQixDQUFpQyxDQUFDLENBQWxDO01BQUgsQ0FBZixDQUFSLEVBQW1FLElBQW5FO01BQ0Es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TUFBSCxDQUFmLENBQVIsRUFBbUUsZUFBZSxDQUFDLE1BQWhCLENBQXdCLENBQUMsRUFBekIsQ0FBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWlDLENBQUMsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWlDLENBQUMsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWlDLENBQUMsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWlDLENBQUMsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWlDLENBQUMsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhC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Y2VzQ29udGVudCI6WyJcbid1c2Ugc3RyaWN0J1xuXG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2hvbGxlcml0aCdcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxuIyBXR1VZICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy93ZWJndXknXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2luZ2xlLWZpbGUtbW9kdWxlcydcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmhlbHBlcnMgPVxuICBycHJfdW5pdDogKCB1bml0ICkgLT5cbiAgICB7IG5hbWUsXG4gICAgICBsZXR0ZXJzLFxuICAgICAgbWFudGlzc2EsXG4gICAgICBpbmRleCwgICAgfSA9IHVuaXRcbiAgICBSICA9IFwiI3tuYW1lfToje2xldHRlcnN9XCJcbiAgICBSICs9IFwiLCN7bWFudGlzc2F9XCIgIGlmIG1hbnRpc3NhP1xuICAgIFIgKz0gXCJbI3tpbmRleH1dXCIgICAgaWYgaW5kZXg/XG4gICAgcmV0dXJuIFJcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBob2xsZXJpdGggPVxuXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgaW50ZXJmYWNlOiAtPlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEwLFxuICAgICAgaG9sbGVyaXRoXzEwbXZwLFxuICAgICAgaG9sbGVyaXRoXzEyOCxcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgQGVxICAgICAoIM6pYW55YnRfX18xID0gLT4gdHlwZV9vZiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgICAgICAgICAgKSwgJ2Z1bmN0aW9uJ1xuICAgICAgQGVxICAgICAoIM6pYW55YnRfX18yID0gLT4gdHlwZV9vZiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAgKSwgJ2Z1bmN0aW9uJ1xuICAgICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGgxMG12cF8xOiAtPlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEwLFxuICAgICAgaG9sbGVyaXRoXzEwbXZwLFxuICAgICAgaG9sbGVyaXRoXzEyOCxcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgICAgICggzqlhbnlidF9fXzMgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgLTk5OSAgICksICdLMDAwJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X19fNCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgLTk5ICAgKSwgJ0wwMCdcbiAgICBAZXEgICAgICggzqlhbnlidF9fXzUgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgIC05MCAgICksICdMMDknXG4gICAgQGVxICAgICAoIM6pYW55YnRfX182ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAtMTEgICApLCAnTDg4J1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X19fNyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgLTEwICAgKSwgJ0w4OSdcbiAgICBAZXEgICAgICggzqlhbnlidF9fXzggPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtOSAgICksICdNMCdcbiAgICBAZXEgICAgICggzqlhbnlidF9fXzkgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtOCAgICksICdNMSdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMTAgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtNyAgICksICdNMidcbiAgICBAZXEgICAgICggzqlhbnlidF9fMTEgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtNiAgICksICdNMydcbiAgICBAZXEgICAgICggzqlhbnlidF9fMTIgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtNSAgICksICdNNCdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMTMgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtNCAgICksICdNNSdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMTQgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtMyAgICksICdNNidcbiAgICBAZXEgICAgICggzqlhbnlidF9fMTUgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtMiAgICksICdNNydcbiAgICBAZXEgICAgICggzqlhbnlidF9fMTYgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtMSAgICksICdNOCdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMTcgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAgMCAgICksICdOJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18xOCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgICAxICAgKSwgJ08xJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18xOSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgICs5ICAgKSwgJ085J1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18yMCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgKzEwICAgKSwgJ1AxMCdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMjEgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICsyMCAgICksICdQMjAnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzIyID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICArOTAgICApLCAnUDkwJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18yMyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgMTIzICAgKSwgJ1ExMjMnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzI0ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICs5MDAgICApLCAnUTkwMCdcbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaDEwbXZwXzI6IC0+XG4gICAgeyBIb2xsZXJpdGgsXG4gICAgICBob2xsZXJpdGhfMTAsXG4gICAgICBob2xsZXJpdGhfMTBtdnAsXG4gICAgICBob2xsZXJpdGhfMTI4LFxuICAgICAgaW50ZXJuYWxzICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAgICAgKCDOqWFueWJ0X18yNSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAtOTk5ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAtOTk5XG4gICAgQGVxICAgICAoIM6pYW55YnRfXzI2ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAtOTkgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAtOTlcbiAgICBAZXEgICAgICggzqlhbnlidF9fMjcgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgIC05MCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgIC05MFxuICAgIEBlcSAgICAgKCDOqWFueWJ0X18yOCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgLTExICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgLTExXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzI5ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAtMTAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAtMTBcbiAgICBAZXEgICAgICggzqlhbnlidF9fMzAgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtOSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAtOVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X18zMSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC04ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgIC04XG4gICAgQGVxICAgICAoIM6pYW55YnRfXzMyID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTcgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgLTdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMzMgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtNiAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAtNlxuICAgIEBlcSAgICAgKCDOqWFueWJ0X18zNCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC01ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgIC01XG4gICAgQGVxICAgICAoIM6pYW55YnRfXzM1ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTQgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgLTRcbiAgICBAZXEgICAgICggzqlhbnlidF9fMzYgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtMyAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAtM1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18zNyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC0yICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgIC0yXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzM4ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTEgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgLTFcbiAgICBAZXEgICAgICggzqlhbnlidF9fMzkgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAgMCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAgMFxuICAgIEBlcSAgICAgKCDOqWFueWJ0X180MCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgICAxICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgICAxXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzQxID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgKzkgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgKzlcbiAgICBAZXEgICAgICggzqlhbnlidF9fNDIgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICsxMCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICsxMFxuICAgIEBlcSAgICAgKCDOqWFueWJ0X180MyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgKzIwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgKzIwXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzQ0ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICArOTAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICArOTBcbiAgICBAZXEgICAgICggzqlhbnlidF9fNDUgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgIDEyMyAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgIDEyM1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X180NiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciArOTAwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSArOTAwXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGgxMG12cF8zOiAtPlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEwLFxuICAgICAgaG9sbGVyaXRoXzEwbXZwLFxuICAgICAgaG9sbGVyaXRoXzEyOCxcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgICAgICggzqlhbnlidF9fNDcgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgLTk5OSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAtOTk5LCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzQ4ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAtOTkgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgIC05OSwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X180OSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgLTkwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAtOTAsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNTAgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgIC0xMSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgLTExLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzUxID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAtMTAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgIC0xMCwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X181MiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC05ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgLTksIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNTMgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtOCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgIC04LCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzU0ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTcgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICAtNywgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X181NSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC02ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgLTYsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNTYgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtNSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgIC01LCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzU3ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTQgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICAtNCwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X181OCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC0zICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgLTMsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNTkgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtMiAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgIC0yLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzYwID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTEgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICAtMSwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X182MSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgICAwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgIDAsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNjIgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAgMSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgICAxLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzYzID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgKzkgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICArOSwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X182NCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgKzEwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICArMTAsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNjUgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICsyMCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgKzIwLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzY2ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICArOTAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICs5MCwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X182NyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgMTIzICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAxMjMsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNjggPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgKzkwMCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyArOTAwLCBdXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGgxMG12cF9zb3J0aW5nXzE6IC0+XG4gICAgeyBIb2xsZXJpdGgsXG4gICAgICBob2xsZXJpdGhfMTAsXG4gICAgICBob2xsZXJpdGhfMTBtdnAsXG4gICAgICBob2xsZXJpdGhfMTI4LFxuICAgICAgaW50ZXJuYWxzICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHNvcnRlZF9zaW5nbGVzID0gKCBwYWRkaW5nID0gbnVsbCApID0+XG4gICAgICBwcm9iZXMgPSBbXG4gICAgICAgIFsgLTk5OSwgXVxuICAgICAgICBbICAtOTksIF1cbiAgICAgICAgWyAgLTkwLCBdXG4gICAgICAgIFsgIC0xMSwgXVxuICAgICAgICBbICAtMTAsIF1cbiAgICAgICAgWyAgIC05LCBdXG4gICAgICAgIFsgICAtOCwgXVxuICAgICAgICBbICAgLTcsIF1cbiAgICAgICAgWyAgIC02LCBdXG4gICAgICAgIFsgICAtNSwgXVxuICAgICAgICBbICAgLTQsIF1cbiAgICAgICAgWyAgIC0zLCBdXG4gICAgICAgIFsgICAtMiwgXVxuICAgICAgICBbICAgLTEsIF1cbiAgICAgICAgWyAgICAwLCBdXG4gICAgICAgIFsgICAgMSwgXVxuICAgICAgICBbICAgKzksIF1cbiAgICAgICAgWyAgKzEwLCBdXG4gICAgICAgIFsgICsyMCwgXVxuICAgICAgICBbICArOTAsIF1cbiAgICAgICAgWyAgMTIzLCBdXG4gICAgICAgIFsgKzkwMCwgXVxuICAgICAgICBdXG4gICAgICBmb3IgcHJvYmUsIGlkeCBpbiBwcm9iZXNcbiAgICAgICAgc2sgICAgICAgICAgICA9IGhvbGxlcml0aF8xMG12cC5lbmNvZGUgcHJvYmVcbiAgICAgICAgc2sgICAgICAgICAgICA9IHNrLnBhZEVuZCBwYWRkaW5nLCBob2xsZXJpdGhfMTBtdnAuY2ZnLnpwdW5zWyAwIF0gaWYgcGFkZGluZz9cbiAgICAgICAgcHJvYmVzWyBpZHggXSA9IHsgc2ssIHByb2JlLCBpZHgsIH1cbiAgICAgIHByb2Jlcy5zb3J0ICggYSwgYiApIC0+XG4gICAgICAgIHJldHVybiAtMSBpZiBhLnNrIDwgYi5za1xuICAgICAgICByZXR1cm4gKzEgaWYgYS5zayA+IGIuc2tcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIGZvciBlbnRyeSwgaWR4IGluIHByb2Jlc1xuICAgICAgICAjIGRlYnVnICfOqWhsbHRfXzY5JywgZW50cnlcbiAgICAgICAgQGVxICggzqlobGx0X183MCA9IC0+IGVudHJ5LmlkeCApLCBpZHhcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBzb3J0ZWRfc2luZ2xlcyBudWxsXG4gICAgc29ydGVkX3NpbmdsZXMgMTBcbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaDEwbXZwX3NvcnRpbmdfMjogLT5cbiAgICB7IEhvbGxlcml0aCxcbiAgICAgIGhvbGxlcml0aF8xMCxcbiAgICAgIGhvbGxlcml0aF8xMG12cCxcbiAgICAgIGhvbGxlcml0aF8xMjgsXG4gICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcHJvYmVzID0gW1xuICAgICAgWyBbIC05OTksICAgICAgICAgICBdLCAnSzAwMCcsICAgICAgXVxuICAgICAgWyBbICAtOTksICAgICAgICAgICBdLCAnTDAwJywgICAgICAgXVxuICAgICAgWyBbICAtOTAsICAgICAgICAgICBdLCAnTDA5JywgICAgICAgXVxuICAgICAgWyBbICAtMTEsICAgICAgICAgICBdLCAnTDg4JywgICAgICAgXVxuICAgICAgWyBbICAtMTAsICAgICAgICAgICBdLCAnTDg5JywgICAgICAgXVxuICAgICAgWyBbICAgLTksICAgICAgICAgICBdLCAnTTAnLCAgICAgICAgXVxuICAgICAgWyBbICAgLTgsICAgICAgICAgICBdLCAnTTEnLCAgICAgICAgXVxuICAgICAgWyBbICAgLTcsICAgICAgICAgICBdLCAnTTInLCAgICAgICAgXVxuICAgICAgWyBbICAgLTYsICAgICAgICAgICBdLCAnTTMnLCAgICAgICAgXVxuICAgICAgWyBbICAgLTUsICAgICAgICAgICBdLCAnTTQnLCAgICAgICAgXVxuICAgICAgWyBbICAgLTQsICAgICAgICAgICBdLCAnTTUnLCAgICAgICAgXVxuICAgICAgWyBbICAgLTMsICAgICAgICAgICBdLCAnTTYnLCAgICAgICAgXVxuICAgICAgWyBbICAgLTIsICAgICAgICAgICBdLCAnTTcnLCAgICAgICAgXVxuICAgICAgWyBbICAgLTEsICAgICAgICAgICBdLCAnTTgnLCAgICAgICAgXVxuICAgICAgWyBbICAgKzAsICAtMjAsICAgICBdLCAnTkwyMCcsICAgICAgXVxuICAgICAgWyBbICAgKzAsICAgICAgICAgICBdLCAnTicsICAgICAgICAgXVxuICAgICAgWyBbICAgKzAsICArMjAsICAgICBdLCAnTlAyMCcsICAgICAgXVxuICAgICAgWyBbICAgKzksICAgICAgICAgICBdLCAnTzknLCAgICAgICAgXVxuICAgICAgWyBbICArMTAsICAgLTMsICAgICBdLCAnUDEwTTYnLCAgICAgXVxuICAgICAgWyBbICArMTAsICAgLTIsICAgICBdLCAnUDEwTTcnLCAgICAgXVxuICAgICAgWyBbICArMTAsICAgLTEsICAgICBdLCAnUDEwTTgnLCAgICAgXVxuICAgICAgWyBbICArMTAsICAgICAgICAgICBdLCAnUDEwJywgICAgICAgXVxuICAgICAgWyBbICArMTAsICAgKzAsICAgICBdLCAnUDEwTicsICAgICAgXVxuICAgICAgWyBbICArMTAsICAgKzEsICAgICBdLCAnUDEwTzEnLCAgICAgXVxuICAgICAgWyBbICArMTAsICArMTAsIC0xLCBdLCAnUDEwUDEwTTgnLCAgXVxuICAgICAgWyBbICArMTAsICArMTAsICAgICBdLCAnUDEwUDEwJywgICAgXVxuICAgICAgWyBbICArMTAsICArMjAsICAgICBdLCAnUDEwUDIwJywgICAgXVxuICAgICAgWyBbICArMjAsICAgICAgICAgICBdLCAnUDIwJywgICAgICAgXVxuICAgICAgWyBbICArMjAsICArMTAsICAgICBdLCAnUDIwUDEwJywgICAgXVxuICAgICAgWyBbICArOTAsICAgICAgICAgICBdLCAnUDkwJywgICAgICAgXVxuICAgICAgWyBbICs5MDAsICAgICAgICAgICBdLCAnUTkwMCcsICAgICAgXVxuICAgICAgXVxuICAgIHVsaW5lcyAgICAgICAgICAgID0gW11cbiAgICBwbGluZXMgICAgICAgICAgICA9IFtdXG4gICAgZXhwZWN0ZWRfaW5kZXhlcyAgPSAoIGlkeCBmb3IgaWR4IGluIFsgMCAuLi4gcHJvYmVzLmxlbmd0aCBdIClcbiAgICBzaHVmZmxlICAgICAgICAgICA9IEdVWS5ybmQuZ2V0X3NodWZmbGUgNTcsIDg4XG4gICAgZm9yIFsgdmR4LCBza19tYXRjaGVyLCBdLCBpZHggaW4gcHJvYmVzXG4gICAgICB1c2sgICA9IGhvbGxlcml0aF8xMG12cC5lbmNvZGUgdmR4XG4gICAgICBwc2sgICA9IHVzay5wYWRFbmQgMTAsIGhvbGxlcml0aF8xMG12cC5jZmcuenB1bnNbIDAgXVxuICAgICAgdXNrICAgPSB1c2sucGFkRW5kIDEwLCAnICdcbiAgICAgIHVsaW5lcy5wdXNoIFwiI3t1c2t9ICN7cnByIHZkeH0gI3tpZHh9XCJcbiAgICAgIHBsaW5lcy5wdXNoIFwiI3twc2t9ICN7cnByIHZkeH0gI3tpZHh9XCJcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGZvciBfIGluIFsgMSAuLiAxMCBdXG4gICAgICB1bGluZXMgPSBzaHVmZmxlIHVsaW5lc1xuICAgICAgdWxpbmVzLnNvcnQoKVxuICAgICAgcmVhbF9pbmRleGVzID0gW11cbiAgICAgIGZvciB1bGluZSBpbiB1bGluZXNcbiAgICAgICAgIyBoZWxwICfOqWhsbHRfXzcxJywgdWxpbmVcbiAgICAgICAgcmVhbF9pbmRleGVzLnB1c2ggTnVtYmVyIHVsaW5lLnJlcGxhY2UgL14uKj9cXHMoWzAtOV0rKSQvLCAnJDEnXG4gICAgICBAZXEgKCDOqWhsbHRfXzcyID0gLT4gZXF1YWxzIGV4cGVjdGVkX2luZGV4ZXMsIHJlYWxfaW5kZXhlcyApLCBmYWxzZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZm9yIF8gaW4gWyAxIC4uIDEwIF1cbiAgICAgIHBsaW5lcyA9IHNodWZmbGUgcGxpbmVzXG4gICAgICBwbGluZXMuc29ydCgpXG4gICAgICByZWFsX2luZGV4ZXMgPSBbXVxuICAgICAgZm9yIHBsaW5lIGluIHBsaW5lc1xuICAgICAgICAjIGhlbHAgJ86paGxsdF9fNzMnLCBwbGluZVxuICAgICAgICByZWFsX2luZGV4ZXMucHVzaCBOdW1iZXIgcGxpbmUucmVwbGFjZSAvXi4qP1xccyhbMC05XSspJC8sICckMSdcbiAgICAgIEBlcSAoIM6paGxsdF9fNzQgPSAtPiBlcXVhbHMgZXhwZWN0ZWRfaW5kZXhlcywgcmVhbF9pbmRleGVzICksIHRydWVcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoMTBtdnAyX3NvcnRpbmdfMjogLT5cbiAgICB7IEhvbGxlcml0aCxcbiAgICAgIGhvbGxlcml0aF8xMCxcbiAgICAgIGhvbGxlcml0aF8xMG12cDIsXG4gICAgICBob2xsZXJpdGhfMTI4LFxuICAgICAgaW50ZXJuYWxzICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHByb2JlcyA9IFtcbiAgICAgIFsgWyAtOTk5LCAgICAgICAgICAgXSwgJ0IwMDAnLCAgICAgICAgXVxuICAgICAgWyBbICAtOTksICAgICAgICAgICBdLCAnQzAwJywgICAgICAgICBdXG4gICAgICBbIFsgIC05MCwgICAgICAgICAgIF0sICdDMDknLCAgICAgICAgIF1cbiAgICAgIFsgWyAgLTExLCAgICAgICAgICAgXSwgJ0M4OCcsICAgICAgICAgXVxuICAgICAgWyBbICAtMTAsICAgICAgICAgICBdLCAnQzg5JywgICAgICAgICBdXG4gICAgICBbIFsgICAtOSwgICAgICAgICAgIF0sICdFJywgICAgICAgICAgIF1cbiAgICAgIFsgWyAgIC04LCAgICAgICAgICAgXSwgJ0YnLCAgICAgICAgICAgXVxuICAgICAgWyBbICAgLTcsICAgICAgICAgICBdLCAnRycsICAgICAgICAgICBdXG4gICAgICBbIFsgICAtNiwgICAgICAgICAgIF0sICdIJywgICAgICAgICAgIF1cbiAgICAgIFsgWyAgIC01LCAgICAgICAgICAgXSwgJ0knLCAgICAgICAgICAgXVxuICAgICAgWyBbICAgLTQsICAgICAgICAgICBdLCAnSicsICAgICAgICAgICBdXG4gICAgICBbIFsgICAtMywgICAgICAgICAgIF0sICdLJywgICAgICAgICAgIF1cbiAgICAgIFsgWyAgIC0yLCAgICAgICAgICAgXSwgJ0wnLCAgICAgICAgICAgXVxuICAgICAgWyBbICAgLTEsICAgICAgICAgICBdLCAnTScsICAgICAgICAgICBdXG4gICAgICBbIFsgICArMCwgIC0yMCwgICAgIF0sICdOQzc5JywgICAgICAgIF1cbiAgICAgIFsgWyAgICswLCAgICAgICAgICAgXSwgJ04nLCAgICAgICAgICAgXVxuICAgICAgWyBbICAgKzAsICArMjAsICAgICBdLCAnTlgyMCcsICAgICAgICBdXG4gICAgICBbIFsgICArOSwgICAgICAgICAgIF0sICdXJywgICAgICAgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgIC0zLCAgICAgXSwgJ1gxMEsnLCAgICAgICAgXVxuICAgICAgWyBbICArMTAsICAgLTIsICAgICBdLCAnWDEwTCcsICAgICAgICBdXG4gICAgICBbIFsgICsxMCwgICAtMSwgICAgIF0sICdYMTBNJywgICAgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgICAgICAgICAgXSwgJ1gxMCcsICAgICAgICAgXVxuICAgICAgWyBbICArMTAsICAgKzAsICAgICBdLCAnWDEwTicsICAgICAgICBdXG4gICAgICBbIFsgICsxMCwgICArMSwgICAgIF0sICdYMTBPJywgICAgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgKzEwLCAtMSwgXSwgJ1gxMFgxME0nLCAgICAgXVxuICAgICAgWyBbICArMTAsICArMTAsICAgICBdLCAnWDEwWDEwJywgICAgICBdXG4gICAgICBbIFsgICsxMCwgICsyMCwgICAgIF0sICdYMTBYMjAnLCAgICAgIF1cbiAgICAgIFsgWyAgKzIwLCAgICAgICAgICAgXSwgJ1gyMCcsICAgICAgICAgXVxuICAgICAgWyBbICArMjAsICArMTAsICAgICBdLCAnWDIwWDEwJywgICAgICBdXG4gICAgICBbIFsgICs5MCwgICAgICAgICAgIF0sICdYOTAnLCAgICAgICAgIF1cbiAgICAgIFsgWyArOTAwLCAgICAgICAgICAgXSwgJ1k5MDAnLCAgICAgICAgXVxuICAgICAgXVxuICAgIHVsaW5lcyAgICAgICAgICAgID0gW11cbiAgICBwbGluZXMgICAgICAgICAgICA9IFtdXG4gICAgZXhwZWN0ZWRfaW5kZXhlcyAgPSAoIGlkeCBmb3IgaWR4IGluIFsgMCAuLi4gcHJvYmVzLmxlbmd0aCBdIClcbiAgICBzaHVmZmxlICAgICAgICAgICA9IEdVWS5ybmQuZ2V0X3NodWZmbGUgNTcsIDg4XG4gICAgZm9yIFsgdmR4LCBza19tYXRjaGVyLCBdLCBpZHggaW4gcHJvYmVzXG4gICAgICB1c2sgICA9IGhvbGxlcml0aF8xMG12cDIuZW5jb2RlIHZkeFxuICAgICAgQGVxICggzqlobGx0X183NSA9IC0+IHVzayApLCBza19tYXRjaGVyXG4gICAgICBwc2sgICA9IHVzay5wYWRFbmQgMTAsIGhvbGxlcml0aF8xMG12cDIuY2ZnLnpwdW5zWyAwIF1cbiAgICAgIHVzayAgID0gdXNrLnBhZEVuZCAxMCwgJyAnXG4gICAgICB1bGluZXMucHVzaCBcIiN7dXNrfSAje3JwciB2ZHh9ICN7aWR4fVwiXG4gICAgICBwbGluZXMucHVzaCBcIiN7cHNrfSAje3JwciB2ZHh9ICN7aWR4fVwiXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmb3IgXyBpbiBbIDEgLi4gMTAgXVxuICAgICAgdWxpbmVzID0gc2h1ZmZsZSB1bGluZXNcbiAgICAgIHVsaW5lcy5zb3J0KClcbiAgICAgIHJlYWxfaW5kZXhlcyA9IFtdXG4gICAgICBmb3IgdWxpbmUgaW4gdWxpbmVzXG4gICAgICAgICMgaGVscCAnzqlobGx0X183NicsIHVsaW5lXG4gICAgICAgIHJlYWxfaW5kZXhlcy5wdXNoIE51bWJlciB1bGluZS5yZXBsYWNlIC9eLio/XFxzKFswLTldKykkLywgJyQxJ1xuICAgICAgQGVxICggzqlobGx0X183NyA9IC0+IGVxdWFscyBleHBlY3RlZF9pbmRleGVzLCByZWFsX2luZGV4ZXMgKSwgZmFsc2VcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGZvciBfIGluIFsgMSAuLiAxMCBdXG4gICAgICBwbGluZXMgPSBzaHVmZmxlIHBsaW5lc1xuICAgICAgcGxpbmVzLnNvcnQoKVxuICAgICAgcmVhbF9pbmRleGVzID0gW11cbiAgICAgIGZvciBwbGluZSBpbiBwbGluZXNcbiAgICAgICAgIyBoZWxwICfOqWhsbHRfXzc4JywgcGxpbmVcbiAgICAgICAgcmVhbF9pbmRleGVzLnB1c2ggTnVtYmVyIHBsaW5lLnJlcGxhY2UgL14uKj9cXHMoWzAtOV0rKSQvLCAnJDEnXG4gICAgICBAZXEgKCDOqWhsbHRfXzc5ID0gLT4gZXF1YWxzIGV4cGVjdGVkX2luZGV4ZXMsIHJlYWxfaW5kZXhlcyApLCB0cnVlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaDEwbXZwMl9zb3J0aW5nXzI6IC0+XG4gICAgeyBIb2xsZXJpdGgsXG4gICAgICBob2xsZXJpdGhfMTI4LFxuICAgICAgaW50ZXJuYWxzICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHByb2JlcyA9IFtcbiAgICAgIFsgWyAtOTk5LCAgICAgICAgICAgXSwgJ8ONwr87JywgICAgIF1cbiAgICAgIFsgWyAgLTk5LCAgICAgICAgICAgXSwgJ8OOPycsICAgICAgXVxuICAgICAgWyBbICAtOTAsICAgICAgICAgICBdLCAnw45IJywgICAgICBdXG4gICAgICBbIFsgIC0xMSwgICAgICAgICAgIF0sICfDmCcsICAgICAgIF1cbiAgICAgIFsgWyAgLTEwLCAgICAgICAgICAgXSwgJ8OZJywgICAgICAgXVxuICAgICAgWyBbICAgLTksICAgICAgICAgICBdLCAnw5onLCAgICAgICBdXG4gICAgICBbIFsgICAtOCwgICAgICAgICAgIF0sICfDmycsICAgICAgIF1cbiAgICAgIFsgWyAgIC03LCAgICAgICAgICAgXSwgJ8OcJywgICAgICAgXVxuICAgICAgWyBbICAgLTYsICAgICAgICAgICBdLCAnw50nLCAgICAgICBdXG4gICAgICBbIFsgICAtNSwgICAgICAgICAgIF0sICfDnicsICAgICAgIF1cbiAgICAgIFsgWyAgIC00LCAgICAgICAgICAgXSwgJ8OfJywgICAgICAgXVxuICAgICAgWyBbICAgLTMsICAgICAgICAgICBdLCAnw6AnLCAgICAgICBdXG4gICAgICBbIFsgICAtMiwgICAgICAgICAgIF0sICfDoScsICAgICAgIF1cbiAgICAgIFsgWyAgIC0xLCAgICAgICAgICAgXSwgJ8OiJywgICAgICAgXVxuICAgICAgWyBbICAgKzAsICAtMjAsICAgICBdLCAnw6PDjycsICAgICAgXVxuICAgICAgWyBbICAgKzAsICAgICAgICAgICBdLCAnw6MnLCAgICAgICBdXG4gICAgICBbIFsgICArMCwgICsyMCwgICAgIF0sICfDo8O3JywgICAgICBdXG4gICAgICBbIFsgICArOSwgICAgICAgICAgIF0sICfDrCcsICAgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgIC0zLCAgICAgXSwgJ8Otw6AnLCAgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgIC0yLCAgICAgXSwgJ8Otw6EnLCAgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgIC0xLCAgICAgXSwgJ8Otw6InLCAgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgICAgICAgICAgXSwgJ8OtJywgICAgICAgXVxuICAgICAgWyBbICArMTAsICAgKzAsICAgICBdLCAnw63DoycsICAgICAgXVxuICAgICAgWyBbICArMTAsICAgKzEsICAgICBdLCAnw63DpCcsICAgICAgXVxuICAgICAgWyBbICArMTAsICArMTAsIC0xLCBdLCAnw63DrcOiJywgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgKzEwLCAgICAgXSwgJ8Otw60nLCAgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgKzIwLCAgICAgXSwgJ8Otw7cnLCAgICAgIF1cbiAgICAgIFsgWyAgKzIwLCAgICAgICAgICAgXSwgJ8O3JywgICAgICAgXVxuICAgICAgWyBbICArMjAsICArMTAsICAgICBdLCAnw7fDrScsICAgICAgXVxuICAgICAgWyBbICArOTAsICAgICAgICAgICBdLCAnw7h+JywgICAgICBdXG4gICAgICBbIFsgKzkwMCwgICAgICAgICAgIF0sICfDuSomJywgICAgIF1cbiAgICAgIF1cbiAgICB1bGluZXMgICAgICAgICAgICA9IFtdXG4gICAgcGxpbmVzICAgICAgICAgICAgPSBbXVxuICAgIGV4cGVjdGVkX2luZGV4ZXMgID0gKCBpZHggZm9yIGlkeCBpbiBbIDAgLi4uIHByb2Jlcy5sZW5ndGggXSApXG4gICAgc2h1ZmZsZSAgICAgICAgICAgPSBHVVkucm5kLmdldF9zaHVmZmxlIDU3LCA4OFxuICAgIGZvciBbIHZkeCwgc2tfbWF0Y2hlciwgXSwgaWR4IGluIHByb2Jlc1xuICAgICAgdXNrICAgPSBob2xsZXJpdGhfMTI4LmVuY29kZSB2ZHhcbiAgICAgIEBlcSAoIM6paGxsdF9fODAgPSAtPiB1c2sgKSwgc2tfbWF0Y2hlclxuICAgICAgIyBlY2hvIHJwciB1c2tcbiAgICAgIHBzayAgID0gdXNrLnBhZEVuZCAxMCwgaG9sbGVyaXRoXzEyOC5jZmcuenB1bnNbIDAgXVxuICAgICAgdXNrICAgPSB1c2sucGFkRW5kIDEwLCAnICdcbiAgICAgIHVsaW5lcy5wdXNoIFwiI3t1c2t9ICN7cnByIHZkeH0gI3tpZHh9XCJcbiAgICAgIHBsaW5lcy5wdXNoIFwiI3twc2t9ICN7cnByIHZkeH0gI3tpZHh9XCJcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGZvciBfIGluIFsgMSAuLiAxMCBdXG4gICAgICB1bGluZXMgPSBzaHVmZmxlIHVsaW5lc1xuICAgICAgdWxpbmVzLnNvcnQoKVxuICAgICAgcmVhbF9pbmRleGVzID0gW11cbiAgICAgIGZvciB1bGluZSBpbiB1bGluZXNcbiAgICAgICAgIyBoZWxwICfOqWhsbHRfXzgxJywgdWxpbmVcbiAgICAgICAgcmVhbF9pbmRleGVzLnB1c2ggTnVtYmVyIHVsaW5lLnJlcGxhY2UgL14uKj9cXHMoWzAtOV0rKSQvLCAnJDEnXG4gICAgICBAZXEgKCDOqWhsbHRfXzgyID0gLT4gZXF1YWxzIGV4cGVjdGVkX2luZGV4ZXMsIHJlYWxfaW5kZXhlcyApLCBmYWxzZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZm9yIF8gaW4gWyAxIC4uIDEwIF1cbiAgICAgIHBsaW5lcyA9IHNodWZmbGUgcGxpbmVzXG4gICAgICBwbGluZXMuc29ydCgpXG4gICAgICByZWFsX2luZGV4ZXMgPSBbXVxuICAgICAgZm9yIHBsaW5lLCBpZHggaW4gcGxpbmVzXG4gICAgICAgIGhlbHAgJ86paGxsdF9fODMnLCBycHIgcGxpbmUgaWYgXyBpcyAxXG4gICAgICAgIHJlYWxfaW5kZXhlcy5wdXNoIE51bWJlciBwbGluZS5yZXBsYWNlIC9eLio/XFxzKFswLTldKykkLywgJyQxJ1xuICAgICAgQGVxICggzqlobGx0X184NCA9IC0+IGVxdWFscyBleHBlY3RlZF9pbmRleGVzLCByZWFsX2luZGV4ZXMgKSwgdHJ1ZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGgxMjhfZGVjb2RlOiAtPlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEyOCxcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwcm9iZXNfYW5kX21hdGNoZXJzID0gW1xuICAgICAgWyAnw43CvzvDo8Ojw6PDo8Ojw6PDoycsIFsgLTk5OSwgICAgICAgICBdLCAnbm51bTrDjSzCvztbLTk5OV18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDjj/Do8Ojw6PDo8Ojw6PDo8OjJywgWyAtOTksICAgICAgICAgIF0sICdubnVtOsOOLD9bLTk5XXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8OOSMOjw6PDo8Ojw6PDo8Ojw6MnLCBbIC05MCwgICAgICAgICAgXSwgJ25udW06w44sSFstOTBdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw5jDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC0xMSwgICAgICAgICAgXSwgJ251bjrDmFstMTFdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8OZw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtMTAsICAgICAgICAgIF0sICdudW46w5lbLTEwXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDmsOjw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTksICAgICAgICAgICBdLCAnbnVuOsOaWy05XXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw5vDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC04LCAgICAgICAgICAgXSwgJ251bjrDm1stOF18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Ocw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtNywgICAgICAgICAgIF0sICdudW46w5xbLTddfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDncOjw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTYsICAgICAgICAgICBdLCAnbnVuOsOdWy02XXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw57Do8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC01LCAgICAgICAgICAgXSwgJ251bjrDnlstNV18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Ofw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtNCwgICAgICAgICAgIF0sICdudW46w59bLTRdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDoMOjw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTMsICAgICAgICAgICBdLCAnbnVuOsOgWy0zXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw6HDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC0yLCAgICAgICAgICAgXSwgJ251bjrDoVstMl18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Oiw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtMSwgICAgICAgICAgIF0sICdudW46w6JbLTFdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDo8OPw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMCwgLTIwLCAgICAgICBdLCAnemVybzrDo1swXXxudW46w49bLTIwXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgXVxuICAgICAgWyAnw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIDAsICAgICAgICAgICAgXSwgJ3BhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8Ojw6NbMF0nLCAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Ojw7fDo8Ojw6PDo8Ojw6PDo8OjJywgWyAwLCAyMCwgICAgICAgIF0sICd6ZXJvOsOjWzBdfHB1bjrDt1syMF18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICBdXG4gICAgICBbICfDrMOjw6PDo8Ojw6PDo8Ojw6PDoycsIFsgOSwgICAgICAgICAgICBdLCAncHVuOsOsWzldfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw63DoMOjw6PDo8Ojw6PDo8Ojw6MnLCBbIDEwLCAtMywgICAgICAgXSwgJ3B1bjrDrVsxMF18bnVuOsOgWy0zXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Otw6HDo8Ojw6PDo8Ojw6PDo8OjJywgWyAxMCwgLTIsICAgICAgIF0sICdwdW46w61bMTBdfG51bjrDoVstMl18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICBdXG4gICAgICBbICfDrcOiw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMTAsIC0xLCAgICAgICBdLCAncHVuOsOtWzEwXXxudW46w6JbLTFdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgXVxuICAgICAgWyAnw63Do8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIDEwLCAgICAgICAgICAgXSwgJ3B1bjrDrVsxMF18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Otw6TDo8Ojw6PDo8Ojw6PDo8OjJywgWyAxMCwgMSwgICAgICAgIF0sICdwdW46w61bMTBdfHB1bjrDpFsxXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICBdXG4gICAgICBbICfDrcOtw6LDo8Ojw6PDo8Ojw6PDoycsIFsgMTAsIDEwLCAtMSwgICBdLCAncHVuOsOtWzEwXXxwdW46w61bMTBdfG51bjrDolstMV18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDoycsICAgXVxuICAgICAgWyAnw63DrcOjw6PDo8Ojw6PDo8Ojw6MnLCBbIDEwLCAxMCwgICAgICAgXSwgJ3B1bjrDrVsxMF18cHVuOsOtWzEwXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Otw7fDo8Ojw6PDo8Ojw6PDo8OjJywgWyAxMCwgMjAsICAgICAgIF0sICdwdW46w61bMTBdfHB1bjrDt1syMF18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICBdXG4gICAgICBbICfDt8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMjAsICAgICAgICAgICBdLCAncHVuOsO3WzIwXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw7fDrcOjw6PDo8Ojw6PDo8Ojw6MnLCBbIDIwLCAxMCwgICAgICAgXSwgJ3B1bjrDt1syMF18cHVuOsOtWzEwXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgIF1cbiAgICAgIFsgJ8O4fsOjw6PDo8Ojw6PDo8Ojw6MnLCBbIDkwLCAgICAgICAgICAgXSwgJ3BudW06w7gsfls5MF18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw7kqJsOjw6PDo8Ojw6PDo8OjJywgWyA5MDAsICAgICAgICAgIF0sICdwbnVtOsO5LComWzkwMF18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgXVxuICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY29kZWMgPSBob2xsZXJpdGhfMTI4XG4gICAgZm9yIFsgc29ydGtleSwgaW5kZXhfbWF0Y2hlciwgdW5pdF9tYXRjaGVyLCBdIGluIHByb2Jlc19hbmRfbWF0Y2hlcnNcbiAgICAgIHVuaXRfcmVzdWx0ICAgICA9IFtdXG4gICAgICBpbmRleF9yZXN1bHQgICAgPSBbXVxuICAgICAgZm9yIHVuaXQgaW4gY29kZWMucGFyc2Ugc29ydGtleVxuICAgICAgICB1bml0X3Jlc3VsdC5wdXNoICBoZWxwZXJzLnJwcl91bml0IHVuaXRcbiAgICAgICAgaW5kZXhfcmVzdWx0LnB1c2ggdW5pdC5pbmRleCBpZiB1bml0LmluZGV4P1xuICAgICAgdW5pdF9yZXN1bHQgICA9IHVuaXRfcmVzdWx0LmpvaW4gJ3wnXG4gICAgICBpbmZvICfOqWhsbHRfXzg1JywgZlwiI3soIHJwciB1bml0X3Jlc3VsdCApICsgJywnfTo8NjBjOyAje3JwciBpbmRleF9yZXN1bHR9XCJcbiAgICAjICAgQGVxICggzqlobGx0X184NiA9IC0+ICB1bml0X3Jlc3VsdCAgICAgICAgICAgICAgICAgICAgICksICB1bml0X21hdGNoZXJcbiAgICAgIEBlcSAoIM6paGxsdF9fODcgPSAtPiBpbmRleF9yZXN1bHQgICAgICAgICAgICAgICAgICAgICApLCBpbmRleF9tYXRjaGVyXG4gICAgICBAZXEgKCDOqWhsbHRfXzg4ID0gLT4gc29ydGtleSApLCAoIGNvZGVjLmVuY29kZSBpbmRleF9tYXRjaGVyICkucGFkRW5kIHNvcnRrZXkubGVuZ3RoLCBjb2RlYy5jZmcuenB1bnNbIDAgXVxuICAgICAgZGVidWcgJ86paGxsdF9fODknLCBycHIgKCBjb2RlYy5lbmNvZGUgaW5kZXhfbWF0Y2hlciApLnBhZEVuZCBzb3J0a2V5Lmxlbmd0aCwgY29kZWMuY2ZnLnpwdW5zWyAwIF1cbiAgICAjICAgQGVxICggzqlobGx0X185MCA9IC0+IGNvZGVjLmRlY29kZSBzb3J0a2V5ICApLCBpbmRleF9tYXRjaGVyXG4gICAgIyAgICMgZWNobyBbIHNvcnRrZXksIGluZGV4X3Jlc3VsdCwgdW5pdF9yZXN1bHQsIF1cbiAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBAZXEgICAgICggzqlobGx0X185MSA9IC0+IGNvZGVjLnBhcnNlICc1JyAgICAgICAgICksIFsgeyBuYW1lOiAnb3RoZXInLCBsZXR0ZXJzOiAnNScsIG1hbnRpc3NhOiBudWxsLCBpbmRleDogbnVsbCB9IF1cbiAgICAjIEBlcSAgICAgKCDOqWhsbHRfXzkyID0gLT4gY29kZWMucGFyc2UgJ8Okw7bDvCcgICAgICAgKSwgWyB7IG5hbWU6ICdvdGhlcicsIGxldHRlcnM6ICfDpMO2w7wnLCBtYW50aXNzYTogbnVsbCwgaW5kZXg6IG51bGwgfSBdXG4gICAgIyBAZXEgICAgICggzqlobGx0X185MyA9IC0+IGNvZGVjLnBhcnNlICdZOTAww6TDtsO8JyAgICksIFsgeyBuYW1lOiAncG51bScsIGxldHRlcnM6ICdZJywgbWFudGlzc2E6ICc5MDAnLCBpbmRleDogOTAwIH0sIHsgbmFtZTogJ290aGVyJywgbGV0dGVyczogJ8Okw7bDvCcsIG1hbnRpc3NhOiBudWxsLCBpbmRleDogbnVsbCB9IF1cbiAgICAjIEB0aHJvd3MgKCDOqWhsbHRfXzk0ID0gLT4gY29kZWMuZGVjb2RlICc1JyAgICAgICAgKSwgL25vdCBhIHZhbGlkIHNvcnRrZXk6IHVuYWJsZSB0byBwYXJzZSAnNScvXG4gICAgIyBAdGhyb3dzICggzqlobGx0X185NSA9IC0+IGNvZGVjLmRlY29kZSAnw6TDtsO8JyAgICAgICksIC9ub3QgYSB2YWxpZCBzb3J0a2V5OiB1bmFibGUgdG8gcGFyc2UgJ8Okw7bDvCcvXG4gICAgIyBAdGhyb3dzICggzqlobGx0X185NiA9IC0+IGNvZGVjLmRlY29kZSAnWTkwMMOkw7bDvCcgICksIC9ub3QgYSB2YWxpZCBzb3J0a2V5OiB1bmFibGUgdG8gcGFyc2UgJ8Okw7bDvCcgaW4gJ1k5MDDDpMO2w7wnL1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGgxMG12cDJfZGVjb2RlX3VuaXRzOiAtPlxuICAgICMjIyBOT1RFIGFsc28gc2VlIGNvcnJlc3BvbmRpbmcgdGVzdCBpbiBgaGVuZ2lzdC1ORy9kZXYvaW50ZXJsZXgvc3JjL3Rlc3QtaG9sbGVyaXRoLmNvZmZlZWAgIyMjXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICB7IEhvbGxlcml0aCxcbiAgICAgIGhvbGxlcml0aF8xMG12cDIsXG4gICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgIyB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwcm9iZXNfYW5kX21hdGNoZXJzID0gW1xuICAgICAgWyAnQjAwME5OTk5OTicsIFsgLTk5OSAgICAgICAgXSwgJ25udW06QiwwMDBbLTk5OV18cGFkZGluZzpOTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0MwME5OTk5OTk4nLCBbIC05OSAgICAgICAgIF0sICdubnVtOkMsMDBbLTk5XXxwYWRkaW5nOk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdDMDlOTk5OTk5OJywgWyAtOTAgICAgICAgICBdLCAnbm51bTpDLDA5Wy05MF18cGFkZGluZzpOTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnQzg4Tk5OTk5OTicsIFsgLTExICAgICAgICAgXSwgJ25udW06Qyw4OFstMTFdfHBhZGRpbmc6Tk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0M4OU5OTk5OTk4nLCBbIC0xMCAgICAgICAgIF0sICdubnVtOkMsODlbLTEwXXxwYWRkaW5nOk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdFTk5OTk5OTk5OJywgWyAtOSAgICAgICAgICBdLCAnbnVuOkVbLTldfHBhZGRpbmc6Tk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnRk5OTk5OTk5OTicsIFsgLTggICAgICAgICAgXSwgJ251bjpGWy04XXxwYWRkaW5nOk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0dOTk5OTk5OTk4nLCBbIC03ICAgICAgICAgIF0sICdudW46R1stN118cGFkZGluZzpOTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdITk5OTk5OTk5OJywgWyAtNiAgICAgICAgICBdLCAnbnVuOkhbLTZdfHBhZGRpbmc6Tk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnSU5OTk5OTk5OTicsIFsgLTUgICAgICAgICAgXSwgJ251bjpJWy01XXxwYWRkaW5nOk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0pOTk5OTk5OTk4nLCBbIC00ICAgICAgICAgIF0sICdudW46SlstNF18cGFkZGluZzpOTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdLTk5OTk5OTk5OJywgWyAtMyAgICAgICAgICBdLCAnbnVuOktbLTNdfHBhZGRpbmc6Tk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnTE5OTk5OTk5OTicsIFsgLTIgICAgICAgICAgXSwgJ251bjpMWy0yXXxwYWRkaW5nOk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ01OTk5OTk5OTk4nLCBbIC0xICAgICAgICAgIF0sICdudW46TVstMV18cGFkZGluZzpOTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdOQzc5Tk5OTk5OJywgWyAwLCAtMjAgICAgICBdLCAnemVybzpOWzBdfG5udW06Qyw3OVstMjBdfHBhZGRpbmc6Tk5OTk5OJywgICAgICAgICAgICAgXVxuICAgICAgWyAnTk5OTk5OTk5OTicsIFsgMCAgICAgICAgICAgXSwgJ3BhZGRpbmc6Tk5OTk5OTk5OTlswXScsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ05YMjBOTk5OTk4nLCBbIDAsIDIwICAgICAgIF0sICd6ZXJvOk5bMF18cG51bTpYLDIwWzIwXXxwYWRkaW5nOk5OTk5OTicsICAgICAgICAgICAgICBdXG4gICAgICBbICdXTk5OTk5OTk5OJywgWyA5ICAgICAgICAgICBdLCAncHVuOldbOV18cGFkZGluZzpOTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnWDEwS05OTk5OTicsIFsgMTAsIC0zICAgICAgXSwgJ3BudW06WCwxMFsxMF18bnVuOktbLTNdfHBhZGRpbmc6Tk5OTk5OJywgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ1gxMExOTk5OTk4nLCBbIDEwLCAtMiAgICAgIF0sICdwbnVtOlgsMTBbMTBdfG51bjpMWy0yXXxwYWRkaW5nOk5OTk5OTicsICAgICAgICAgICAgICBdXG4gICAgICBbICdYMTBNTk5OTk5OJywgWyAxMCwgLTEgICAgICBdLCAncG51bTpYLDEwWzEwXXxudW46TVstMV18cGFkZGluZzpOTk5OTk4nLCAgICAgICAgICAgICAgXVxuICAgICAgWyAnWDEwTk5OTk5OTicsIFsgMTAgICAgICAgICAgXSwgJ3BudW06WCwxMFsxMF18cGFkZGluZzpOTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ1gxME9OTk5OTk4nLCBbIDEwLCAxICAgICAgIF0sICdwbnVtOlgsMTBbMTBdfHB1bjpPWzFdfHBhZGRpbmc6Tk5OTk5OJywgICAgICAgICAgICAgICBdXG4gICAgICBbICdYMTBYMTBNTk5OJywgWyAxMCwgMTAsIC0xICBdLCAncG51bTpYLDEwWzEwXXxwbnVtOlgsMTBbMTBdfG51bjpNWy0xXXxwYWRkaW5nOk5OTicsICAgXVxuICAgICAgWyAnWDEwWDEwTk5OTicsIFsgMTAsIDEwICAgICAgXSwgJ3BudW06WCwxMFsxMF18cG51bTpYLDEwWzEwXXxwYWRkaW5nOk5OTk4nLCAgICAgICAgICAgIF1cbiAgICAgIFsgJ1gxMFgyME5OTk4nLCBbIDEwLCAyMCAgICAgIF0sICdwbnVtOlgsMTBbMTBdfHBudW06WCwyMFsyMF18cGFkZGluZzpOTk5OJywgICAgICAgICAgICBdXG4gICAgICBbICdYMjBOTk5OTk5OJywgWyAyMCAgICAgICAgICBdLCAncG51bTpYLDIwWzIwXXxwYWRkaW5nOk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnWDIwWDEwTk5OTicsIFsgMjAsIDEwICAgICAgXSwgJ3BudW06WCwyMFsyMF18cG51bTpYLDEwWzEwXXxwYWRkaW5nOk5OTk4nLCAgICAgICAgICAgIF1cbiAgICAgIFsgJ1g5ME5OTk5OTk4nLCBbIDkwICAgICAgICAgIF0sICdwbnVtOlgsOTBbOTBdfHBhZGRpbmc6Tk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdZOTAwTk5OTk5OJywgWyA5MDAgICAgICAgICBdLCAncG51bTpZLDkwMFs5MDBdfHBhZGRpbmc6Tk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnTk5OTk5OTk5OJywgIFsgMCAgICAgICAgICAgXSwgJ3BhZGRpbmc6Tk5OTk5OTk5OWzBdJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ05OJywgICAgICAgICBbIDAgICAgICAgICAgIF0sICdwYWRkaW5nOk5OWzBdJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdOJywgICAgICAgICAgWyAwICAgICAgICAgICBdLCAncGFkZGluZzpOWzBdJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnWDEwJywgICAgICAgIFsgMTAgICAgICAgICAgXSwgJ3BudW06WCwxMFsxMF0nLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0snLCAgICAgICAgICBbIC0zICAgICAgICAgIF0sICdudW46S1stM10nLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjb2RlYyA9IGhvbGxlcml0aF8xMG12cDJcbiAgICBmb3IgWyBzb3J0a2V5LCBpbmRleF9tYXRjaGVyLCB1bml0X21hdGNoZXIsIF0gaW4gcHJvYmVzX2FuZF9tYXRjaGVyc1xuICAgICAgdW5pdF9yZXN1bHQgICAgID0gW11cbiAgICAgIGluZGV4X3Jlc3VsdCAgICA9IFtdXG4gICAgICBmb3IgdW5pdCBpbiBjb2RlYy5wYXJzZSBzb3J0a2V5XG4gICAgICAgIHVuaXRfcmVzdWx0LnB1c2ggIGhlbHBlcnMucnByX3VuaXQgdW5pdFxuICAgICAgICBpbmRleF9yZXN1bHQucHVzaCB1bml0LmluZGV4IGlmIHVuaXQuaW5kZXg/XG4gICAgICB1bml0X3Jlc3VsdCAgID0gdW5pdF9yZXN1bHQuam9pbiAnfCdcbiAgICAgIGluZm8gJ86paGxsdF9fOTcnLCBmXCIjeyggcnByIHVuaXRfcmVzdWx0ICkgKyAnLCd9Ojw2MGM7ICN7cnByIGluZGV4X3Jlc3VsdH1cIlxuICAgICAgQGVxICggzqlobGx0X185OCA9IC0+ICB1bml0X3Jlc3VsdCAgICAgICAgICAgICAgICAgICAgICksICB1bml0X21hdGNoZXJcbiAgICAgIEBlcSAoIM6paGxsdF9fOTkgPSAtPiBpbmRleF9yZXN1bHQgICAgICAgICAgICAgICAgICAgICApLCBpbmRleF9tYXRjaGVyXG4gICAgICBAZXEgKCDOqWhsbHRfMTAwID0gLT4gY29kZWMuZGVjb2RlIHNvcnRrZXkgICAgICAgICAgICAgKSwgaW5kZXhfbWF0Y2hlclxuICAgICAgQGVxICggzqlobGx0XzEwMSA9IC0+IHNvcnRrZXkgICAgICAgICAgICAgICAgICAgICAgICAgICksICggY29kZWMuZW5jb2RlIGluZGV4X21hdGNoZXIgKS5wYWRFbmQgc29ydGtleS5sZW5ndGgsIGNvZGVjLmNmZy56cHVuc1sgMCBdXG4gICAgICAjIGVjaG8gWyBzb3J0a2V5LCBpbmRleF9yZXN1bHQsIHVuaXRfcmVzdWx0LCBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgICAgICggzqlobGx0XzEwMiA9IC0+IGNvZGVjLnBhcnNlICc1JyAgICAgICAgICksIFsgeyBuYW1lOiAnb3RoZXInLCBsZXR0ZXJzOiAnNScsIG1hbnRpc3NhOiBudWxsLCBpbmRleDogbnVsbCB9IF1cbiAgICBAZXEgICAgICggzqlobGx0XzEwMyA9IC0+IGNvZGVjLnBhcnNlICfDpMO2w7wnICAgICAgICksIFsgeyBuYW1lOiAnb3RoZXInLCBsZXR0ZXJzOiAnw6TDtsO8JywgbWFudGlzc2E6IG51bGwsIGluZGV4OiBudWxsIH0gXVxuICAgIEBlcSAgICAgKCDOqWhsbHRfMTA0ID0gLT4gY29kZWMucGFyc2UgJ1k5MDDDpMO2w7wnICAgKSwgWyB7IG5hbWU6ICdwbnVtJywgbGV0dGVyczogJ1knLCBtYW50aXNzYTogJzkwMCcsIGluZGV4OiA5MDAgfSwgeyBuYW1lOiAnb3RoZXInLCBsZXR0ZXJzOiAnw6TDtsO8JywgbWFudGlzc2E6IG51bGwsIGluZGV4OiBudWxsIH0gXVxuICAgIEB0aHJvd3MgKCDOqWhsbHRfMTA1ID0gLT4gY29kZWMuZGVjb2RlICc1JyAgICAgICAgKSwgL25vdCBhIHZhbGlkIHNvcnRrZXk6IHVuYWJsZSB0byBwYXJzZSAnNScvXG4gICAgQHRocm93cyAoIM6paGxsdF8xMDYgPSAtPiBjb2RlYy5kZWNvZGUgJ8Okw7bDvCcgICAgICApLCAvbm90IGEgdmFsaWQgc29ydGtleTogdW5hYmxlIHRvIHBhcnNlICfDpMO2w7wnL1xuICAgIEB0aHJvd3MgKCDOqWhsbHRfMTA3ID0gLT4gY29kZWMuZGVjb2RlICdZOTAww6TDtsO8JyAgKSwgL25vdCBhIHZhbGlkIHNvcnRrZXk6IHVuYWJsZSB0byBwYXJzZSAnw6TDtsO8JyBpbiAnWTkwMMOkw7bDvCcvXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaDEyOGJfZGVjb2RlOiAtPlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEyOCxcbiAgICAgIGhvbGxlcml0aF8xMjhiLFxuICAgICAgaG9sbGVyaXRoXzEwbXZwLFxuICAgICAgaW50ZXJuYWxzICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgY29kZWMgPSBob2xsZXJpdGhfMTI4XG4gICAgIyBjb2RlYyA9IGhvbGxlcml0aF8xMjhiXG4gICAgY29kZWMgPSBob2xsZXJpdGhfMTBtdnBcbiAgICBkZWJ1ZyAnzqlobGx0XzEwOCcsIHJwciBjb2RlYy5lbmNvZGUgLTFcbiAgICBkZWJ1ZyAnzqlobGx0XzEwOScsIHJwciBjb2RlYy5lbmNvZGUgLTJcbiAgICBuID0gICAtMTAwOyB1cmdlICfOqWhsbHRfMTEwJywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAgIG4gPSAgICAtMjE7IHVyZ2UgJ86paGxsdF8xMTEnLCBmXCIjeyBycHIgWyBuLCBdIH06PjEwYzsgI3tycHIgc2sgPSBjb2RlYy5lbmNvZGUgbn06PDVjOyAjeyBycHIgY29kZWMuZGVjb2RlIHNrfTo+MTBjO1wiXG4gICAgbiA9ICAgIC0yMDsgdXJnZSAnzqlobGx0XzExMicsIGZcIiN7IHJwciBbIG4sIF0gfTo+MTBjOyAje3JwciBzayA9IGNvZGVjLmVuY29kZSBufTo8NWM7ICN7IHJwciBjb2RlYy5kZWNvZGUgc2t9Oj4xMGM7XCJcbiAgICBuID0gICAgLTE5OyB1cmdlICfOqWhsbHRfMTEzJywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAgIG4gPSAgICAgLTE7IHVyZ2UgJ86paGxsdF8xMTQnLCBmXCIjeyBycHIgWyBuLCBdIH06PjEwYzsgI3tycHIgc2sgPSBjb2RlYy5lbmNvZGUgbn06PDVjOyAjeyBycHIgY29kZWMuZGVjb2RlIHNrfTo+MTBjO1wiXG4gICAgbiA9ICAgICAgMDsgdXJnZSAnzqlobGx0XzExNScsIGZcIiN7IHJwciBbIG4sIF0gfTo+MTBjOyAje3JwciBzayA9IGNvZGVjLmVuY29kZSBufTo8NWM7ICN7IHJwciBjb2RlYy5kZWNvZGUgc2t9Oj4xMGM7XCJcbiAgICBuID0gICAgICAxOyB1cmdlICfOqWhsbHRfMTE2JywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAgIG4gPSAgICAgIDI7IHVyZ2UgJ86paGxsdF8xMTcnLCBmXCIjeyBycHIgWyBuLCBdIH06PjEwYzsgI3tycHIgc2sgPSBjb2RlYy5lbmNvZGUgbn06PDVjOyAjeyBycHIgY29kZWMuZGVjb2RlIHNrfTo+MTBjO1wiXG4gICAgbiA9ICAgICAgMzsgdXJnZSAnzqlobGx0XzExOCcsIGZcIiN7IHJwciBbIG4sIF0gfTo+MTBjOyAje3JwciBzayA9IGNvZGVjLmVuY29kZSBufTo8NWM7ICN7IHJwciBjb2RlYy5kZWNvZGUgc2t9Oj4xMGM7XCJcbiAgICBuID0gICAgIDEwOyB1cmdlICfOqWhsbHRfMTE5JywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAgIG4gPSAgICAxMjY7IHVyZ2UgJ86paGxsdF8xMjAnLCBmXCIjeyBycHIgWyBuLCBdIH06PjEwYzsgI3tycHIgc2sgPSBjb2RlYy5lbmNvZGUgbn06PDVjOyAjeyBycHIgY29kZWMuZGVjb2RlIHNrfTo+MTBjO1wiXG4gICAgbiA9ICAgIDEyNzsgdXJnZSAnzqlobGx0XzEyMScsIGZcIiN7IHJwciBbIG4sIF0gfTo+MTBjOyAje3JwciBzayA9IGNvZGVjLmVuY29kZSBufTo8NWM7ICN7IHJwciBjb2RlYy5kZWNvZGUgc2t9Oj4xMGM7XCJcbiAgICBuID0gICAgMTI4OyB1cmdlICfOqWhsbHRfMTIyJywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAgIG4gPSAgICAxMjk7IHVyZ2UgJ86paGxsdF8xMjMnLCBmXCIjeyBycHIgWyBuLCBdIH06PjEwYzsgI3tycHIgc2sgPSBjb2RlYy5lbmNvZGUgbn06PDVjOyAjeyBycHIgY29kZWMuZGVjb2RlIHNrfTo+MTBjO1wiXG4gICAgIyBmb3IgWyBzb3J0a2V5LCBpbmRleF9tYXRjaGVyLCB1bml0X21hdGNoZXIsIF0gaW4gcHJvYmVzX2FuZF9tYXRjaGVyc1xuICAgICMgICB1bml0X3Jlc3VsdCAgICAgPSBbXVxuICAgICMgICBpbmRleF9yZXN1bHQgICAgPSBbXVxuICAgICMgICBmb3IgdW5pdCBpbiBjb2RlYy5wYXJzZSBzb3J0a2V5XG4gICAgIyAgICAgdW5pdF9yZXN1bHQucHVzaCAgaGVscGVycy5ycHJfdW5pdCB1bml0XG4gICAgIyAgICAgaW5kZXhfcmVzdWx0LnB1c2ggdW5pdC5pbmRleCBpZiB1bml0LmluZGV4P1xuICAgICMgICB1bml0X3Jlc3VsdCAgID0gdW5pdF9yZXN1bHQuam9pbiAnfCdcbiAgICAjICAgaW5mbyAnzqlobGx0XzEyNCcsIGZcIiN7KCBycHIgdW5pdF9yZXN1bHQgKSArICcsJ306PDYwYzsgI3tycHIgaW5kZXhfcmVzdWx0fVwiXG4gICAgIyAjICAgQGVxICggzqlobGx0XzEyNSA9IC0+ICB1bml0X3Jlc3VsdCAgICAgICAgICAgICAgICAgICAgICksICB1bml0X21hdGNoZXJcbiAgICAjICAgQGVxICggzqlobGx0XzEyNiA9IC0+IGluZGV4X3Jlc3VsdCAgICAgICAgICAgICAgICAgICAgICksIGluZGV4X21hdGNoZXJcbiAgICAjICAgQGVxICggzqlobGx0XzEyNyA9IC0+IHNvcnRrZXkgKSwgKCBjb2RlYy5lbmNvZGUgaW5kZXhfbWF0Y2hlciApLnBhZEVuZCBzb3J0a2V5Lmxlbmd0aCwgY29kZWMuY2ZnLnpwdW5zWyAwIF1cbiAgICAjICAgZGVidWcgJ86paGxsdF8xMjgnLCBycHIgKCBjb2RlYy5lbmNvZGUgaW5kZXhfbWF0Y2hlciApLnBhZEVuZCBzb3J0a2V5Lmxlbmd0aCwgY29kZWMuY2ZnLnpwdW5zWyAwIF1cbiAgICAjICAgQGVxICggzqlobGx0XzEyOSA9IC0+IGNvZGVjLmRlY29kZSBzb3J0a2V5ICApLCBpbmRleF9tYXRjaGVyXG4gICAgIyAgICMgZWNobyBbIHNvcnRrZXksIGluZGV4X3Jlc3VsdCwgdW5pdF9yZXN1bHQsIF1cbiAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBAZXEgICAgICggzqlobGx0XzEzMCA9IC0+IGNvZGVjLnBhcnNlICc1JyAgICAgICAgICksIFsgeyBuYW1lOiAnb3RoZXInLCBsZXR0ZXJzOiAnNScsIG1hbnRpc3NhOiBudWxsLCBpbmRleDogbnVsbCB9IF1cbiAgICAjIEBlcSAgICAgKCDOqWhsbHRfMTMxID0gLT4gY29kZWMucGFyc2UgJ8Okw7bDvCcgICAgICAgKSwgWyB7IG5hbWU6ICdvdGhlcicsIGxldHRlcnM6ICfDpMO2w7wnLCBtYW50aXNzYTogbnVsbCwgaW5kZXg6IG51bGwgfSBdXG4gICAgIyBAZXEgICAgICggzqlobGx0XzEzMiA9IC0+IGNvZGVjLnBhcnNlICdZOTAww6TDtsO8JyAgICksIFsgeyBuYW1lOiAncG51bScsIGxldHRlcnM6ICdZJywgbWFudGlzc2E6ICc5MDAnLCBpbmRleDogOTAwIH0sIHsgbmFtZTogJ290aGVyJywgbGV0dGVyczogJ8Okw7bDvCcsIG1hbnRpc3NhOiBudWxsLCBpbmRleDogbnVsbCB9IF1cbiAgICAjIEB0aHJvd3MgKCDOqWhsbHRfMTMzID0gLT4gY29kZWMuZGVjb2RlICc1JyAgICAgICAgKSwgL25vdCBhIHZhbGlkIHNvcnRrZXk6IHVuYWJsZSB0byBwYXJzZSAnNScvXG4gICAgIyBAdGhyb3dzICggzqlobGx0XzEzNCA9IC0+IGNvZGVjLmRlY29kZSAnw6TDtsO8JyAgICAgICksIC9ub3QgYSB2YWxpZCBzb3J0a2V5OiB1bmFibGUgdG8gcGFyc2UgJ8Okw7bDvCcvXG4gICAgIyBAdGhyb3dzICggzqlobGx0XzEzNSA9IC0+IGNvZGVjLmRlY29kZSAnWTkwMMOkw7bDvCcgICksIC9ub3QgYSB2YWxpZCBzb3J0a2V5OiB1bmFibGUgdG8gcGFyc2UgJ8Okw7bDvCcgaW4gJ1k5MDDDpMO2w7wnL1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHR5cGVzX2JvdW5kZWRfbGlzdDogLT5cbiAgICB7IGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aC9saWIvdHlwZXMnXG4gICAgeyBCb3VuZGVkX2xpc3QsICAgICAgICAgICB9ID0gaW50ZXJuYWxzXG4gICAgIyB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBibGlzdCA9IG5ldyBCb3VuZGVkX2xpc3QgM1xuICAgIEBlcSAoIM6paGxsdF8xMzYgPSAtPiBibGlzdC5zaXplICAgICAgICAgICAgICAgKSwgMFxuICAgIEBlcSAoIM6paGxsdF8xMzcgPSAtPiBibGlzdC5pc19lbXB0eSAgICAgICAgICAgKSwgdHJ1ZVxuICAgIEBlcSAoIM6paGxsdF8xMzggPSAtPiBibGlzdC5tYXhfc2l6ZSAgICAgICAgICAgKSwgM1xuICAgIEBlcSAoIM6paGxsdF8xMzkgPSAtPiBibGlzdC5hdCAtMSAgICAgICAgICAgICAgKSwgdW5kZWZpbmVkXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkYXRhXzEgPSBibGlzdC5jdXJyZW50XG4gICAgQGVxICggzqlobGx0XzE0MCA9IC0+IGRhdGFfMSAgICAgICAgICAgICAgICAgICApLCB7fVxuICAgIEBlcSAoIM6paGxsdF8xNDEgPSAtPiBibGlzdC5jdXJyZW50ICAgICAgICAgICAgKSwgZGF0YV8xXG4gICAgQGVxICggzqlobGx0XzE0MiA9IC0+IGJsaXN0LmF0IC0xICAgICAgICAgICAgICApLCBkYXRhXzFcbiAgICBAZXEgKCDOqWhsbHRfMTQzID0gLT4gYmxpc3Quc2l6ZSAgICAgICAgICAgICAgICksIDFcbiAgICBAZXEgKCDOqWhsbHRfMTQ0ID0gLT4gYmxpc3QuaXNfZW1wdHkgICAgICAgICAgICksIGZhbHNlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkYXRhXzIgPSBibGlzdC5jcmVhdGUoKVxuICAgIEBlcSAoIM6paGxsdF8xNDUgPSAtPiBlcXVhbHMgZGF0YV8xLCBkYXRhXzIgICAgKSwgdHJ1ZVxuICAgIEBlcSAoIM6paGxsdF8xNDYgPSAtPiBkYXRhXzEgaXMgZGF0YV8yICAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMTQ3ID0gLT4gYmxpc3QuYXQgLTEgICAgICAgICAgICAgICksIGRhdGFfMlxuICAgIEBlcSAoIM6paGxsdF8xNDggPSAtPiBibGlzdC5zaXplICAgICAgICAgICAgICAgKSwgMlxuICAgIEBlcSAoIM6paGxsdF8xNDkgPSAtPiBibGlzdC5pc19lbXB0eSAgICAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMTUwID0gLT4gZGF0YV8yIGlzIGJsaXN0LmN1cnJlbnQgICksIHRydWVcbiAgICBAZXEgKCDOqWhsbHRfMTUxID0gLT4gYmxpc3QuYXQgLTEgICAgICAgICAgICAgICksIGRhdGFfMlxuICAgIEBlcSAoIM6paGxsdF8xNTIgPSAtPiBibGlzdC5zaXplICAgICAgICAgICAgICAgKSwgMlxuICAgIEBlcSAoIM6paGxsdF8xNTMgPSAtPiBibGlzdC5pc19lbXB0eSAgICAgICAgICAgKSwgZmFsc2VcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRhdGFfMyA9IGJsaXN0LmNyZWF0ZSgpXG4gICAgQGVxICggzqlobGx0XzE1NCA9IC0+IGVxdWFscyBkYXRhXzIsIGRhdGFfMyAgICApLCB0cnVlXG4gICAgQGVxICggzqlobGx0XzE1NSA9IC0+IGRhdGFfMiBpcyBkYXRhXzMgICAgICAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6paGxsdF8xNTYgPSAtPiBibGlzdC5hdCAtMSAgICAgICAgICAgICAgKSwgZGF0YV8zXG4gICAgQGVxICggzqlobGx0XzE1NyA9IC0+IGJsaXN0LnNpemUgICAgICAgICAgICAgICApLCAzXG4gICAgQGVxICggzqlobGx0XzE1OCA9IC0+IGJsaXN0LmlzX2VtcHR5ICAgICAgICAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6paGxsdF8xNTkgPSAtPiBkYXRhXzMgaXMgYmxpc3QuY3VycmVudCAgKSwgdHJ1ZVxuICAgIEBlcSAoIM6paGxsdF8xNjAgPSAtPiBibGlzdC5hdCAtMSAgICAgICAgICAgICAgKSwgZGF0YV8zXG4gICAgQGVxICggzqlobGx0XzE2MSA9IC0+IGJsaXN0LmF0IC0yICAgICAgICAgICAgICApLCBkYXRhXzJcbiAgICBAZXEgKCDOqWhsbHRfMTYyID0gLT4gYmxpc3QuYXQgLTMgICAgICAgICAgICAgICksIGRhdGFfMVxuICAgIEBlcSAoIM6paGxsdF8xNjMgPSAtPiBibGlzdC5zaXplICAgICAgICAgICAgICAgKSwgM1xuICAgIEBlcSAoIM6paGxsdF8xNjQgPSAtPiBibGlzdC5pc19lbXB0eSAgICAgICAgICAgKSwgZmFsc2VcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRhdGFfNCA9IGJsaXN0LmNyZWF0ZSB7IGE6IDEsIGI6IDIsIH1cbiAgICBAZXEgKCDOqWhsbHRfMTY1ID0gLT4gZXF1YWxzIGRhdGFfMywgZGF0YV80ICAgICksIGZhbHNlXG4gICAgQGVxICggzqlobGx0XzE2NiA9IC0+IGRhdGFfMyBpcyBkYXRhXzQgICAgICAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6paGxsdF8xNjcgPSAtPiBibGlzdC5hdCAtMSAgICAgICAgICAgICAgKSwgeyBhOiAxLCBiOiAyLCB9XG4gICAgQGVxICggzqlobGx0XzE2OCA9IC0+IGJsaXN0LnNpemUgICAgICAgICAgICAgICApLCAzXG4gICAgQGVxICggzqlobGx0XzE2OSA9IC0+IGJsaXN0LmlzX2VtcHR5ICAgICAgICAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6paGxsdF8xNzAgPSAtPiBibGlzdC5jdXJyZW50ICAgICAgICAgICAgKSwgeyBhOiAxLCBiOiAyLCB9XG4gICAgQGVxICggzqlobGx0XzE3MSA9IC0+IGJsaXN0LmF0IC0xICAgICAgICAgICAgICApLCB7IGE6IDEsIGI6IDIsIH1cbiAgICBAZXEgKCDOqWhsbHRfMTcyID0gLT4gYmxpc3QuYXQgLTIgICAgICAgICAgICAgICksIGRhdGFfM1xuICAgIEBlcSAoIM6paGxsdF8xNzMgPSAtPiBibGlzdC5hdCAtMyAgICAgICAgICAgICAgKSwgZGF0YV8yXG4gICAgQGVxICggzqlobGx0XzE3NCA9IC0+IGJsaXN0LnNpemUgICAgICAgICAgICAgICApLCAzXG4gICAgQGVxICggzqlobGx0XzE3NSA9IC0+IGJsaXN0LmlzX2VtcHR5ICAgICAgICAgICApLCBmYWxzZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqlobGx0XzE3NiA9IC0+IFsgYmxpc3QuY3JlYXRlKCksIGJsaXN0LnNpemUsIF0gICAgKSwgWyB7fSwgMywgXVxuICAgIEBlcSAoIM6paGxsdF8xNzcgPSAtPiBbIGJsaXN0LmNyZWF0ZSgpLCBibGlzdC5zaXplLCBdICAgICksIFsge30sIDMsIF1cbiAgICBAZXEgKCDOqWhsbHRfMTc4ID0gLT4gWyBibGlzdC5jcmVhdGUoKSwgYmxpc3Quc2l6ZSwgXSAgICApLCBbIHt9LCAzLCBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBibGlzdCA9IG5ldyBCb3VuZGVkX2xpc3QgM1xuICAgIEBlcSAoIM6paGxsdF8xNzkgPSAtPiBbICggYmxpc3QuYXNzaWduIHsgbWVzc2FnZTogJ29vcHMnLCAgICAgICAgfSApLCBibGlzdC5zaXplLCBibGlzdC5jdXJyZW50LCBdICksIFsgeyBtZXNzYWdlOiAnb29wcycgICAgICAgIH0sIDEsIHsgbWVzc2FnZTogJ29vcHMnICAgICAgICB9IF1cbiAgICBAZXEgKCDOqWhsbHRfMTgwID0gLT4gWyAoIGJsaXN0LmFzc2lnbiB7IG1lc3NhZ2U6ICdvdmVyJywgeDogMSwgIH0gKSwgYmxpc3Quc2l6ZSwgYmxpc3QuY3VycmVudCwgXSApLCBbIHsgbWVzc2FnZTogJ292ZXInLCB4OiAxLCB9LCAxLCB7IG1lc3NhZ2U6ICdvdmVyJywgeDogMSwgfSBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdHlwZV9kYXRhX2hhbmRsaW5nOiAtPlxuICAgIHsgaW50ZXJuYWxzICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoL2xpYi90eXBlcydcbiAgICB7IFR5cGUsXG4gICAgICBUeXBlc3BhY2UsXG4gICAgICBCb3VuZGVkX2xpc3QsICAgICAgICAgICB9ID0gaW50ZXJuYWxzXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgY2xhc3MgTXlfdHlwZXNwYWNlIGV4dGVuZHMgVHlwZXNwYWNlXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGludGVnZXI6ICggeCApIC0+XG4gICAgICAgICAgQGFzc2lnbiB7IHgsIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZSBpZiBOdW1iZXIuaXNTYWZlSW50ZWdlciB4XG4gICAgICAgICAgcmV0dXJuIEBmYWlsIFwiI3tycHIgeH0gaXMgYSBub24taW50ZWdlciBudW1iZXJcIiwgeyBmcmFjdGlvbjogeCAlIDEsIH0gaWYgTnVtYmVyLmlzRmluaXRlIHhcbiAgICAgICAgICByZXR1cm4gQGZhaWwgXCIje3JwciB4fSBpcyBub3QgZXZlbiBhIGZpbml0ZSBudW1iZXJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBldmVuX2ludGVnZXI6ICggeCApIC0+XG4gICAgICAgICAgcmV0dXJuICggQGZhaWwgXCJub3QgYW4gaW50ZWdlclwiICAgICApIHVubGVzcyBAVC5pbnRlZ2VyLmlzYSB4XG4gICAgICAgICAgcmV0dXJuICggQGZhaWwgXCJkZXRlY3RlZCByZW1haW5kZXJcIiApIHVubGVzcyAoIHggJSUgMiApIGlzIDBcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBUID0gbmV3IE15X3R5cGVzcGFjZSgpXG4gICAgICBAZXEgKCDOqWhsbHRfMTgxID0gLT4gVC5pbnRlZ2VyLmlzYSA5OTg3ICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWhsbHRfMTgyID0gLT4gVC5pbnRlZ2VyLmRhdGEgICAgICAgICAgICAgICApLCB7IHg6IDk5ODcsIH1cbiAgICAgIEBlcSAoIM6paGxsdF8xODMgPSAtPiBULmludGVnZXIuaXNhIDk5ODcuMTI1ICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWhsbHRfMTg0ID0gLT4gVC5pbnRlZ2VyLmRhdGEgICAgICAgICAgICAgICApLCB7IHg6IDk5ODcuMTI1LCBtZXNzYWdlOiAnOTk4Ny4xMjUgaXMgYSBub24taW50ZWdlciBudW1iZXInLCBmcmFjdGlvbjogMC4xMjUsIH1cbiAgICAgIEBlcSAoIM6paGxsdF8xODUgPSAtPiBULmV2ZW5faW50ZWdlci5pc2EgMzMuMTI1ICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWhsbHRfMTg2ID0gLT4gVC5pbnRlZ2VyLmRhdGEgICAgICAgICAgICAgICApLCB7IHg6IDMzLjEyNSwgbWVzc2FnZTogJzMzLjEyNSBpcyBhIG5vbi1pbnRlZ2VyIG51bWJlcicsIGZyYWN0aW9uOiAwLjEyNSwgfVxuICAgICAgQGVxICggzqlobGx0XzE4NyA9IC0+IFQuZXZlbl9pbnRlZ2VyLmRhdGEgICAgICAgICAgKSwgeyBtZXNzYWdlOiAnbm90IGFuIGludGVnZXInIH1cbiAgICAgIEBlcSAoIM6paGxsdF8xODggPSAtPiBULmV2ZW5faW50ZWdlci5pc2EgNzc3ICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWhsbHRfMTg5ID0gLT4gVC5pbnRlZ2VyLmRhdGEgICAgICAgICAgICAgICApLCB7IHg6IDc3NywgfVxuICAgICAgQGVxICggzqlobGx0XzE5MCA9IC0+IFQuZXZlbl9pbnRlZ2VyLmRhdGEgICAgICAgICAgKSwgeyBtZXNzYWdlOiAnZGV0ZWN0ZWQgcmVtYWluZGVyJyB9XG4gICAgICBAZXEgKCDOqWhsbHRfMTkxID0gLT4gVC5ldmVuX2ludGVnZXIuaXNhIDg4OCAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWhsbHRfMTkyID0gLT4gVC5pbnRlZ2VyLmRhdGEgICAgICAgICAgICAgICApLCB7IHg6IDg4OCwgfVxuICAgICAgQGVxICggzqlobGx0XzE5MyA9IC0+IFQuZXZlbl9pbnRlZ2VyLmRhdGEgICAgICAgICAgKSwge31cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBjbGFzcyBNeV90eXBlc3BhY2UgZXh0ZW5kcyBUeXBlc3BhY2VcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAaW50ZWdlcjogKCB4ICkgLT5cbiAgICAgICAgICBAYXNzaWduIHsgeCwgfVxuICAgICAgICAgIHJldHVybiB0cnVlIGlmIE51bWJlci5pc1NhZmVJbnRlZ2VyIHhcbiAgICAgICAgICByZXR1cm4gQGZhaWwgXCIje3JwciB4fSBpcyBhIG5vbi1pbnRlZ2VyIG51bWJlclwiLCB7IGZyYWN0aW9uOiB4ICUgMSwgfSBpZiBOdW1iZXIuaXNGaW5pdGUgeFxuICAgICAgICAgIHJldHVybiBAZmFpbCBcIiN7cnByIHh9IGlzIG5vdCBldmVuIGEgZmluaXRlIG51bWJlclwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGV2ZW5faW50ZWdlcjogKCB4ICkgLT5cbiAgICAgICAgICAjIHVubGVzcyBAVC5pbnRlZ2VyLmlzYW1lIEAsIHhcbiAgICAgICAgICAjICAgZGVidWcgJ86paGxsdF8xOTQnLCBAZGF0YVxuICAgICAgICAgIHJldHVybiAoIEBmYWlsIFwibm90IGFuIGludGVnZXJcIiAgICAgKSB1bmxlc3MgQFQuaW50ZWdlci5pc2FtZSBALCB4XG4gICAgICAgICAgcmV0dXJuICggQGZhaWwgXCJkZXRlY3RlZCByZW1haW5kZXJcIiApIHVubGVzcyAoIHggJSUgMiApIGlzIDBcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBUID0gbmV3IE15X3R5cGVzcGFjZSgpXG4gICAgICBULmV2ZW5faW50ZWdlci5pc2EgJ3doYXQ/J1xuICAgICAgQGVxICggzqlobGx0XzE5NSA9IC0+IFQuaW50ZWdlci5kYXRhICAgICAgICksIHt9XG4gICAgICBAZXEgKCDOqWhsbHRfMTk2ID0gLT4gVC5ldmVuX2ludGVnZXIuZGF0YSAgKSwgeyB4OiAnd2hhdD8nLCBtZXNzYWdlOiBcIm5vdCBhbiBpbnRlZ2VyXCIsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBjbGFzcyBNeV90eXBlc3BhY2UgZXh0ZW5kcyBUeXBlc3BhY2VcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAaW50ZWdlcjogKCB4ICkgLT5cbiAgICAgICAgICBAYXNzaWduIHsgbWU6ICdpbnRlZ2VyJywgfVxuICAgICAgICAgIEBhc3NpZ24geyB4LCB9XG4gICAgICAgICAgcmV0dXJuIHRydWUgaWYgTnVtYmVyLmlzU2FmZUludGVnZXIgeFxuICAgICAgICAgIHJldHVybiBAZmFpbCBcIiN7cnByIHh9IGlzIGEgbm9uLWludGVnZXIgbnVtYmVyXCIsIHsgZnJhY3Rpb246IHggJSAxLCB9IGlmIE51bWJlci5pc0Zpbml0ZSB4XG4gICAgICAgICAgcmV0dXJuIEBmYWlsIFwiI3tycHIgeH0gaXMgbm90IGV2ZW4gYSBmaW5pdGUgbnVtYmVyXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXZlbl9pbnRlZ2VyOiAoIHggKSAtPlxuICAgICAgICAgIEBhc3NpZ24geyBtZTogJ2V2ZW5faW50ZWdlcicsIH1cbiAgICAgICAgICB1bmxlc3MgQFQuaW50ZWdlci5pc2FtZSBALCB7IG1lOiAnaW50ZWdlcl9tZScsIG1lc3NhZ2U6ICdtZXNzYWdlX2Zyb21faW50ZWdlcicsIH0sIHhcbiAgICAgICAgICAgIHJldHVybiAoIEBmYWlsIFwibm90IGFuIGludGVnZXI6ICN7cnByIEBkYXRhLm1lc3NhZ2VfZnJvbV9pbnRlZ2VyfVwiIClcbiAgICAgICAgICByZXR1cm4gKCBAZmFpbCBcImRldGVjdGVkIHJlbWFpbmRlclwiICkgdW5sZXNzICggeCAlJSAyICkgaXMgMFxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIFQgPSBuZXcgTXlfdHlwZXNwYWNlKClcbiAgICAgIFQuZXZlbl9pbnRlZ2VyLmlzYSAnd2hhdD8nXG4gICAgICBAZXEgKCDOqWhsbHRfMTk3ID0gLT4gVC5pbnRlZ2VyLmRhdGEgICAgICAgKSwge31cbiAgICAgIEBlcSAoIM6paGxsdF8xOTggPSAtPiBULmV2ZW5faW50ZWdlci5kYXRhICApLCB7XG4gICAgICAgIG1lOiAgICAgICAgICAgICAgICAgICAgICdldmVuX2ludGVnZXInLFxuICAgICAgICBpbnRlZ2VyX21lOiAgICAgICAgICAgICAnaW50ZWdlcicsXG4gICAgICAgIHg6ICAgICAgICAgICAgICAgICAgICAgICd3aGF0PycsXG4gICAgICAgIG1lc3NhZ2VfZnJvbV9pbnRlZ2VyOiAgIFwiJ3doYXQ/JyBpcyBub3QgZXZlbiBhIGZpbml0ZSBudW1iZXJcIixcbiAgICAgICAgbWVzc2FnZTogICAgICAgICAgICAgICAgXCJcIlwibm90IGFuIGludGVnZXI6IFwiJ3doYXQ/JyBpcyBub3QgZXZlbiBhIGZpbml0ZSBudW1iZXJcXFwiXCJcIlwiLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIFQuZXZlbl9pbnRlZ2VyLmlzYSAyNlxuICAgICAgZGVidWcgJ86paGxsdF8xOTknLCBULmludGVnZXIuZGF0YVxuICAgICAgZGVidWcgJ86paGxsdF8yMDAnLCBULmV2ZW5faW50ZWdlci5kYXRhXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgY2xhc3MgTXlfdHlwZXNwYWNlIGV4dGVuZHMgVHlwZXNwYWNlXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGludGVnZXI6ICggeCApIC0+XG4gICAgICAgICAgQGFzc2lnbiB7IG1lOiAnaW50ZWdlcicsIH1cbiAgICAgICAgICBAYXNzaWduIHsgeCwgfVxuICAgICAgICAgIHJldHVybiB0cnVlIGlmIE51bWJlci5pc1NhZmVJbnRlZ2VyIHhcbiAgICAgICAgICByZXR1cm4gQGZhaWwgXCIje3JwciB4fSBpcyBhIG5vbi1pbnRlZ2VyIG51bWJlclwiLCB7IGZyYWN0aW9uOiB4ICUgMSwgfSBpZiBOdW1iZXIuaXNGaW5pdGUgeFxuICAgICAgICAgIHJldHVybiBAZmFpbCBcIiN7cnByIHh9IGlzIG5vdCBldmVuIGEgZmluaXRlIG51bWJlclwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGV2ZW5faW50ZWdlcjogKCB4ICkgLT5cbiAgICAgICAgICBAYXNzaWduIHsgbWU6ICdldmVuX2ludGVnZXInLCB9XG4gICAgICAgICAgdW5sZXNzIEBULmludGVnZXIuaXNhMiB4LCBAZGF0YSwgeyBtZTogJ2ludGVnZXJfbWUnLCBtZXNzYWdlOiAnbWVzc2FnZV9mcm9tX2ludGVnZXInLCB9XG4gICAgICAgICAgICByZXR1cm4gKCBAZmFpbCBcIm5vdCBhbiBpbnRlZ2VyOiAje3JwciBAZGF0YS5tZXNzYWdlX2Zyb21faW50ZWdlcn1cIiApXG4gICAgICAgICAgcmV0dXJuICggQGZhaWwgXCJkZXRlY3RlZCByZW1haW5kZXJcIiApIHVubGVzcyAoIHggJSUgMiApIGlzIDBcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBUID0gbmV3IE15X3R5cGVzcGFjZSgpXG4gICAgICBULmV2ZW5faW50ZWdlci5pc2EgJ3doYXQ/J1xuICAgICAgQGVxICggzqlobGx0XzIwMSA9IC0+IFQuaW50ZWdlci5kYXRhICAgICAgICksIHsgbWU6ICdpbnRlZ2VyJywgeDogJ3doYXQ/JywgbWVzc2FnZTogXCInd2hhdD8nIGlzIG5vdCBldmVuIGEgZmluaXRlIG51bWJlclwiIH1cbiAgICAgIEBlcSAoIM6paGxsdF8yMDIgPSAtPiBULmV2ZW5faW50ZWdlci5kYXRhICApLCB7XG4gICAgICAgIG1lOiAgICAgICAgICAgICAgICAgICAgICdldmVuX2ludGVnZXInLFxuICAgICAgICBpbnRlZ2VyX21lOiAgICAgICAgICAgICAnaW50ZWdlcicsXG4gICAgICAgIHg6ICAgICAgICAgICAgICAgICAgICAgICd3aGF0PycsXG4gICAgICAgIG1lc3NhZ2VfZnJvbV9pbnRlZ2VyOiAgIFwiJ3doYXQ/JyBpcyBub3QgZXZlbiBhIGZpbml0ZSBudW1iZXJcIixcbiAgICAgICAgbWVzc2FnZTogICAgICAgICAgICAgICAgXCJcIlwibm90IGFuIGludGVnZXI6IFwiJ3doYXQ/JyBpcyBub3QgZXZlbiBhIGZpbml0ZSBudW1iZXJcXFwiXCJcIlwiLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIFQuZXZlbl9pbnRlZ2VyLmlzYSAyNlxuICAgICAgZGVidWcgJ86paGxsdF8yMDMnLCBULmludGVnZXIuZGF0YVxuICAgICAgZGVidWcgJ86paGxsdF8yMDQnLCBULmV2ZW5faW50ZWdlci5kYXRhXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHR5cGVzOiAtPlxuICAgIHsgaW50ZXJuYWxzICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoLydcbiAgICB7IHR5cGVzOiBULCAgICAgICAgICAgICAgIH0gPSBpbnRlcm5hbHNcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgKCDOqWhsbHRfMjA1ID0gLT4gVC5ub25lbXB0eV90ZXh0LmlzYSA0ICAgICAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjA2ID0gLT4gVC5ub25lbXB0eV90ZXh0LmlzYSBmYWxzZSAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjA3ID0gLT4gVC5ub25lbXB0eV90ZXh0LmlzYSAnJyAgICAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjA4ID0gLT4gVC5ub25lbXB0eV90ZXh0LmlzYSAneWVzJyAgICAgICAgKSwgdHJ1ZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqlobGx0XzIwOSA9IC0+IFQuaW5jcmVtZW50YWxfdGV4dC5pc2EgJ3llcycgICAgICksIGZhbHNlXG4gICAgQGVxICggzqlobGx0XzIxMCA9IC0+IFQuZGVjcmVtZW50YWxfdGV4dC5pc2EgJ3llcycgICAgICksIGZhbHNlXG4gICAgQGVxICggzqlobGx0XzIxMSA9IC0+IFQuaW5jcmVtZW50YWxfdGV4dC5kYXRhICAgICAgICAgICksIHsgY2hyczogWyAneScsICdlJywgJ3MnIF0sIGZhaWw6IHsgeDogJ3llcycsIGlkeDogMSwgcHJ2X2NocjogJ3knLCBjaHI6ICdlJyB9IH1cbiAgICBAZXEgKCDOqWhsbHRfMjEyID0gLT4gVC5pbmNyZW1lbnRhbF90ZXh0LmlzYSAnYWJjZGVmeicgKSwgdHJ1ZVxuICAgIEBlcSAoIM6paGxsdF8yMTMgPSAtPiBULmRlY3JlbWVudGFsX3RleHQuaXNhICdhYmNkZWZ6JyApLCBmYWxzZVxuICAgIEBlcSAoIM6paGxsdF8yMTQgPSAtPiBULmluY3JlbWVudGFsX3RleHQuZGF0YSAgICAgICAgICApLCB7IGNocnM6IFsgJ2EnLCAnYicsICdjJywgJ2QnLCAnZScsICdmJywgJ3onLCBdLCB9XG4gICAgQGVxICggzqlobGx0XzIxNSA9IC0+IFQuZGVjcmVtZW50YWxfdGV4dC5kYXRhICAgICAgICAgICksIHsgY2hyczogWyAnYScsICdiJywgJ2MnLCAnZCcsICdlJywgJ2YnLCAneicgXSwgZmFpbDogeyB4OiAnYWJjZGVmeicsIGlkeDogMSwgcHJ2X2NocjogJ2EnLCBjaHI6ICdiJyB9IH1cbiAgICBAZXEgKCDOqWhsbHRfMjE2ID0gLT4gVC5pbmNyZW1lbnRhbF90ZXh0LmlzYSAnYWJjMCcgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjE3ID0gLT4gVC5pbmNyZW1lbnRhbF90ZXh0LmRhdGEgICAgICAgICAgKSwgeyBjaHJzOiBbICdhJywgJ2InLCAnYycsICcwJywgXSwgZmFpbDogeyB4OiAnYWJjMCcsIGlkeDogMywgcHJ2X2NocjogJ2MnLCBjaHI6ICcwJyB9IH1cbiAgICBAZXEgKCDOqWhsbHRfMjE4ID0gLT4gVC5kZWNyZW1lbnRhbF90ZXh0LmlzYSAnY2JhJyAgICAgKSwgdHJ1ZVxuICAgIEBlcSAoIM6paGxsdF8yMTkgPSAtPiBULmRlY3JlbWVudGFsX3RleHQuZGF0YSAgICAgICAgICApLCB7IGNocnM6IFsgJ2MnLCAnYicsICdhJywgXSwgfVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZGVidWcgJ86paGxsdF8yMjAnLCBULm1hZ25pZmllcnMuZGF0YVxuICAgIEBlcSAoIM6paGxsdF8yMjEgPSAtPiBULm1hZ25pZmllcnMuaXNhICcnICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICBkZWJ1ZyAnzqlobGx0XzIyMicsIFQubWFnbmlmaWVycy5kYXRhXG4gICAgZGVidWcgJ86paGxsdF8yMjMnLCBULm1hZ25pZmllcnMuZGF0YS5jdXJyZW50XG4gICAgQGVxICggzqlobGx0XzIyNCA9IC0+IFQubWFnbmlmaWVycy5kYXRhLmN1cnJlbnQgICAgICAgICAgICApLCB7IG1lc3NhZ2U6IFwiZXhwZWN0ZWQgYSBtYWduaWZpZXIsIGdvdCBhbiBlbXB0eSB0ZXh0XCIsIH1cbiAgICBAZXEgKCDOqWhsbHRfMjI1ID0gLT4gVC5tYWduaWZpZXJzLmlzYSAnQUJDIFhZWicgICAgICAgICAgICksIHRydWVcbiAgICBkZWJ1ZyAnzqlobGx0XzIyNicsIFQubWFnbmlmaWVycy5kYXRhXG4gICAgIyAjIEBlcSAoIM6paGxsdF8yMjcgPSAtPiBULm1hZ25pZmllcnMuaXNhICdBQkNcXG5YWVonICAgICAgICAgICksIHRydWVcbiAgICAjICMgQGVxICggzqlobGx0XzIyOCA9IC0+IFQubWFnbmlmaWVycy5pc2EgJ0FCQ1xcdFhZWicgICAgICAgICAgKSwgdHJ1ZVxuICAgICMgIyBAZXEgKCDOqWhsbHRfMjI5ID0gLT4gVC5tYWduaWZpZXJzLmlzYSAnQUJDIERYWVonICAgICAgICAgICksIHRydWVcbiAgICAjICMgQGVxICggzqlobGx0XzIzMCA9IC0+IFQubWFnbmlmaWVycy5pc2EgJ0FCRCBDWFlaJyAgICAgICAgICApLCBmYWxzZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgQGhvbGxlcml0aFxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgaDEyOGJfZGVjb2RlOiBAaG9sbGVyaXRoLmgxMjhiX2RlY29kZSwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdHlwZXNfYm91bmRlZF9saXN0OiBAaG9sbGVyaXRoLnR5cGVzX2JvdW5kZWRfbGlzdCwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHR5cGVfZGF0YV9oYW5kbGluZzogQGhvbGxlcml0aC50eXBlX2RhdGFfaGFuZGxpbmcsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHR5cGVzOiBAaG9sbGVyaXRoLnR5cGVzLCB9XG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGgxMG12cDJfc29ydGluZ18yOiBAaG9sbGVyaXRoLmgxMG12cDJfc29ydGluZ18yLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBoMTI4X2RlY29kZTogQGhvbGxlcml0aC5oMTI4X2RlY29kZSwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgaDEwbXZwMl9kZWNvZGVfdW5pdHM6IEBob2xsZXJpdGguaDEwbXZwMl9kZWNvZGVfdW5pdHMsIH1cbiJdfQ==
