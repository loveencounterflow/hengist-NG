(async function() {
  'use strict';
  var GTNG, GUY, SFMODULES, Test, alert, debug, echo, f, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('hollerith'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  ({f} = require('../../../apps/effstring'));

  SFMODULES = require('../../../apps/bricabrac-single-file-modules');

  //###########################################################################################################

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
      var Hollerith, equals, hollerith_128, i, internals, len, matcher, probe, probes_and_matchers, type_of;
      ({Hollerith, hollerith_128, internals} = require('../../../apps/hollerith'));
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({
        isDeepStrictEqual: equals
      } = require('node:util'));
      //.......................................................................................................
      probes_and_matchers = [['Í¿;ããããããã', [-999]], ['Î?ãããããããã', [-99]], ['ÎHãããããããã', [-90]], ['Øããããããããã', [-11]], ['Ùããããããããã', [-10]], ['Úããããããããã', [-9]], ['Ûããããããããã', [-8]], ['Üããããããããã', [-7]], ['Ýããããããããã', [-6]], ['Þããããããããã', [-5]], ['ßããããããããã', [-4]], ['àããããããããã', [-3]], ['áããããããããã', [-2]], ['âããããããããã', [-1]], ['ãÏãããããããã', [0, -20]], ['ãããããããããã', [0]], ['ã÷ãããããããã', [0, 20]], ['ìããããããããã', [9]], ['íàãããããããã', [10, -3]], ['íáãããããããã', [10, -2]], ['íâãããããããã', [10, -1]], ['íããããããããã', [10]], ['íããããããããã', [10, 0]], ['íäãããããããã', [10, 1]], ['ííâããããããã', [10, 10, -1]], ['ííãããããããã', [10, 10]], ['í÷ãããããããã', [10, 20]], ['÷ããããããããã', [20]], ['÷íãããããããã', [20, 10]], ['ø~ãããããããã', [90]], ['ù*&ããããããã', [900]]];
//.......................................................................................................
      for (i = 0, len = probes_and_matchers.length; i < len; i++) {
        [probe, matcher] = probes_and_matchers[i];
        debug('Ωhllt__85', rpr(hollerith_128.decode(probe)));
      }
      //.......................................................................................................
      return null;
    },
    // #---------------------------------------------------------------------------------------------------------
    // h10mvp2_decode: ->
    //   { Hollerith,
    //     hollerith_10mvp2,
    //     internals               } = require '../../../apps/hollerith'
    //   { type_of,                } = SFMODULES.unstable.require_type_of()
    //   { isDeepStrictEqual: equals, } = require 'node:util'
    //   #.......................................................................................................
    //   probes_and_matchers = [
    //     [ 'B000NNNNNN', [ -999,         ] ]
    //     [ 'C00NNNNNNN', [ -99,          ] ]
    //     [ 'C09NNNNNNN', [ -90,          ] ]
    //     [ 'C88NNNNNNN', [ -11,          ] ]
    //     [ 'C89NNNNNNN', [ -10,          ] ]
    //     [ 'ENNNNNNNNN', [ -9,           ] ]
    //     [ 'FNNNNNNNNN', [ -8,           ] ]
    //     [ 'GNNNNNNNNN', [ -7,           ] ]
    //     [ 'HNNNNNNNNN', [ -6,           ] ]
    //     [ 'INNNNNNNNN', [ -5,           ] ]
    //     [ 'JNNNNNNNNN', [ -4,           ] ]
    //     [ 'KNNNNNNNNN', [ -3,           ] ]
    //     [ 'LNNNNNNNNN', [ -2,           ] ]
    //     [ 'MNNNNNNNNN', [ -1,           ] ]
    //     [ 'NC79NNNNNN', [ 0, -20,       ] ]
    //     [ 'NNNNNNNNNN', [ 0,            ] ]
    //     [ 'NX20NNNNNN', [ 0, 20,        ] ]
    //     [ 'WNNNNNNNNN', [ 9,            ] ]
    //     [ 'X10KNNNNNN', [ 10, -3,       ] ]
    //     [ 'X10LNNNNNN', [ 10, -2,       ] ]
    //     [ 'X10MNNNNNN', [ 10, -1,       ] ]
    //     [ 'X10NNNNNNN', [ 10,           ] ]
    //     [ 'X10NNNNNNN', [ 10, 0,        ] ]
    //     [ 'X10ONNNNNN', [ 10, 1,        ] ]
    //     [ 'X10X10MNNN', [ 10, 10, -1,   ] ]
    //     [ 'X10X10NNNN', [ 10, 10,       ] ]
    //     [ 'X10X20NNNN', [ 10, 20,       ] ]
    //     [ 'X20NNNNNNN', [ 20,           ] ]
    //     [ 'X20X10NNNN', [ 20, 10,       ] ]
    //     [ 'X90NNNNNNN', [ 90,           ] ]
    //     [ 'Y900NNNNNN', [ 900,          ] ]
    //     ]
    //   #.......................................................................................................
    //   @throws ( Ωhllt__86 = -> hollerith_10mvp2.decode null    ), /expected a text/
    //   @throws ( Ωhllt__87 = -> hollerith_10mvp2.decode ''      ), /expected a non-empty text/
    //   @throws ( Ωhllt__88 = -> hollerith_10mvp2.decode 'Ä123'  ), /expected a sortkey/
    //   debug 'Ωhllt__89', hollerith_10mvp2.cfg.sortkey_re
    //   debug 'Ωhllt__90', hollerith_10mvp2.decode 'Y900NNNNNN'
    //   debug 'Ωhllt__91', hollerith_10mvp2.decode 'Y900Y900NNNNNN'
    //   debug 'Ωhllt__92', hollerith_10mvp2.decode 'NNNNNN'
    //   #.......................................................................................................
    //   # for [ probe, matcher, ] in probes_and_matchers
    //   #   debug 'Ωhllt__93', rpr hollerith_10mvp2.decode probe
    //   #.......................................................................................................
    //   return null

    //---------------------------------------------------------------------------------------------------------
    h10mvp2_decode_units: function() {
      /* NOTE also see corresponding test in `hengist-NG/dev/interlex/src/test-hollerith.coffee` */
      var Hollerith, hollerith_10mvp2, i, index, index_matcher, index_result, internals, j, len, len1, letters, lexemes, mantissa, name, probes_and_matchers, ref, sortkey, type_of, unit, unit_matcher, unit_result, unit_rpr, Ωhllt_100, Ωhllt__98, Ωhllt__99, Ωilxhol__96, Ωilxhol__97;
      ({type_of} = SFMODULES.unstable.require_type_of());
      //.......................................................................................................
      ({Hollerith, hollerith_10mvp2, internals} = require('../../../apps/hollerith'));
      // { isDeepStrictEqual: equals, } = require 'node:util'
      //.......................................................................................................
      probes_and_matchers = [['B000NNNNNN', [-999], 'nnum:B,000[-999]|padding:NNNNNN'], ['C00NNNNNNN', [-99], 'nnum:C,00[-99]|padding:NNNNNNN'], ['C09NNNNNNN', [-90], 'nnum:C,09[-90]|padding:NNNNNNN'], ['C88NNNNNNN', [-11], 'nnum:C,88[-11]|padding:NNNNNNN'], ['C89NNNNNNN', [-10], 'nnum:C,89[-10]|padding:NNNNNNN'], ['ENNNNNNNNN', [-9], 'nun:E[-9]|padding:NNNNNNNNN'], ['FNNNNNNNNN', [-8], 'nun:F[-8]|padding:NNNNNNNNN'], ['GNNNNNNNNN', [-7], 'nun:G[-7]|padding:NNNNNNNNN'], ['HNNNNNNNNN', [-6], 'nun:H[-6]|padding:NNNNNNNNN'], ['INNNNNNNNN', [-5], 'nun:I[-5]|padding:NNNNNNNNN'], ['JNNNNNNNNN', [-4], 'nun:J[-4]|padding:NNNNNNNNN'], ['KNNNNNNNNN', [-3], 'nun:K[-3]|padding:NNNNNNNNN'], ['LNNNNNNNNN', [-2], 'nun:L[-2]|padding:NNNNNNNNN'], ['MNNNNNNNNN', [-1], 'nun:M[-1]|padding:NNNNNNNNN'], ['NC79NNNNNN', [0, -20], 'zero:N[0]|nnum:C,79[-20]|padding:NNNNNN'], ['NNNNNNNNNN', [0], 'padding:NNNNNNNNNN[0]'], ['NX20NNNNNN', [0, 20], 'zero:N[0]|pnum:X,20[20]|padding:NNNNNN'], ['WNNNNNNNNN', [9], 'pun:W[9]|padding:NNNNNNNNN'], ['X10KNNNNNN', [10, -3], 'pnum:X,10[10]|nun:K[-3]|padding:NNNNNN'], ['X10LNNNNNN', [10, -2], 'pnum:X,10[10]|nun:L[-2]|padding:NNNNNN'], ['X10MNNNNNN', [10, -1], 'pnum:X,10[10]|nun:M[-1]|padding:NNNNNN'], ['X10NNNNNNN', [10], 'pnum:X,10[10]|padding:NNNNNNN'], ['X10ONNNNNN', [10, 1], 'pnum:X,10[10]|pun:O[1]|padding:NNNNNN'], ['X10X10MNNN', [10, 10, -1], 'pnum:X,10[10]|pnum:X,10[10]|nun:M[-1]|padding:NNN'], ['X10X10NNNN', [10, 10], 'pnum:X,10[10]|pnum:X,10[10]|padding:NNNN'], ['X10X20NNNN', [10, 20], 'pnum:X,10[10]|pnum:X,20[20]|padding:NNNN'], ['X20NNNNNNN', [20], 'pnum:X,20[20]|padding:NNNNNNN'], ['X20X10NNNN', [20, 10], 'pnum:X,20[20]|pnum:X,10[10]|padding:NNNN'], ['X90NNNNNNN', [90], 'pnum:X,90[90]|padding:NNNNNNN'], ['Y900NNNNNN', [900], 'pnum:Y,900[900]|padding:NNNNNN'], ['NNNNNNNNN', [0], 'padding:NNNNNNNNN[0]'], ['NN', [0], 'padding:NN[0]'], ['N', [0], 'padding:N[0]'], ['X10', [10], 'pnum:X,10[10]'], ['K', [-3], 'nun:K[-3]']];
//.......................................................................................................
      for (i = 0, len = probes_and_matchers.length; i < len; i++) {
        [sortkey, index_matcher, unit_matcher] = probes_and_matchers[i];
        // urge 'Ωilxhol__94', rpr sortkey
        lexemes = [];
        unit_result = [];
        index_result = [];
        ref = hollerith_10mvp2.parse(sortkey);
        for (j = 0, len1 = ref.length; j < len1; j++) {
          unit = ref[j];
          ({name, letters, mantissa, index} = unit);
          unit_rpr = `${name}:${letters}`;
          if (mantissa != null) {
            unit_rpr += `,${mantissa}`;
          }
          if (index != null) {
            unit_rpr += `[${index}]`;
          }
          unit_result.push(unit_rpr);
          if (index != null) {
            index_result.push(index);
          }
        }
        unit_result = unit_result.join('|');
        info('Ωilxhol__95', f`${(rpr(unit_result)) + ','}:<50c; ${rpr(index_result)}`);
        this.eq((Ωilxhol__96 = function() {
          return unit_result;
        }), unit_matcher);
        this.eq((Ωilxhol__97 = function() {
          return index_result;
        }), index_matcher);
      }
      // echo [ sortkey, index_result, unit_result, ]
      //.......................................................................................................
      this.throws((Ωhllt__98 = function() {
        return hollerith_10mvp2.parse('5');
      }), /not a valid sortkey: unable to parse '5' in '5'/);
      this.throws((Ωhllt__99 = function() {
        return hollerith_10mvp2.parse('äöü');
      }), /not a valid sortkey: unable to parse 'äöü' in 'äöü'/);
      this.throws((Ωhllt_100 = function() {
        return hollerith_10mvp2.parse('Y900äöü');
      }), /not a valid sortkey: unable to parse 'äöü' in 'Y900äöü'/);
      // @throws ( Ωhllt_101 = -> hollerith_10mvp2.decode null    ), /expected a text/
      // @throws ( Ωhllt_102 = -> hollerith_10mvp2.decode ''      ), /expected a non-empty text/
      // @throws ( Ωhllt_103 = -> hollerith_10mvp2.decode 'Ä123'  ), /expected a sortkey/
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
      // ( new Test guytest_cfg ).test @hollerith
      return (new Test(guytest_cfg)).test({
        h10mvp2_decode_units: this.hollerith.h10mvp2_decode_units
      });
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQTs7RUFFQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLFdBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxPQUhGLEVBSUUsR0FKRixDQUFBLEdBSTRCLEdBQUcsQ0FBQyxHQUpoQyxFQVpBOzs7RUFrQkEsSUFBQSxHQUE0QixPQUFBLENBQVEsMkJBQVI7O0VBQzVCLENBQUEsQ0FBRSxJQUFGLENBQUEsR0FBNEIsSUFBNUI7O0VBQ0EsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUI7O0VBQ0EsU0FBQSxHQUE0QixPQUFBLENBQVEsNkNBQVIsRUFyQjVCOzs7OztFQTRCQSxJQUFDLENBQUEsU0FBRCxHQUdFLENBQUE7O0lBQUEsU0FBQSxFQUFXLFFBQUEsQ0FBQSxDQUFBO0FBQ2IsVUFBQSxTQUFBLEVBQUEsTUFBQSxFQUFBLFlBQUEsRUFBQSxlQUFBLEVBQUEsYUFBQSxFQUFBLFNBQUEsRUFBQTtNQUFJLENBQUEsQ0FB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QUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWlDLENBQUMsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsSUFBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWlDLENBQUMsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsSUFBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWlDLENBQUMsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsSUFBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWlDLENBQUMsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsSUFBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWlDLENBQUMsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsSUFBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWlDLENBQUMsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsSUFBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWlDLENBQUMsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsSUFBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxD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aEIsQ0FBZ0MsQ0FBQyxFQUFqQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBd0IsQ0FBQyxFQUF6QixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBZ0MsQ0FBQyxFQUFqQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBd0IsQ0FBQyxFQUF6QixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBZ0MsQ0FBQyxFQUFqQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBd0IsQ0FBQyxFQUF6QixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBZ0MsQ0FBQyxFQUFqQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBd0IsQ0FBQyxFQUF6QixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBeUIsQ0FBQyxDQUExQixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBeUIsQ0FBQyxDQUExQixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBeUIsQ0FBQyxDQUExQixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBeUIsQ0FBQyxDQUExQixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBeUIsQ0FBQyxDQUExQixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBeUIsQ0FBQyxDQUExQixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBeUIsQ0FBQyxDQUExQixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBeUIsQ0FBQyxDQUExQixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdB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LENBQUMsSUFBckI7SUFBK0IsTUFBUyxDQUFBLENBQUEsQ0FBQSxHQUFBO0FBQ3hDLFVBQUE7TUFBRSxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLEtBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLElBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0QsRUFEaEI7O2FBR0UsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QjtRQUFFLG9CQUFBLEVBQXNCLElBQUMsQ0FBQSxTQUFTLENBQUM7TUFBbkMsQ0FBOUI7SUFKc0MsQ0FBQSxJQUF4Qzs7QUE3bEJBIiwic291cmNlc0NvbnRlbnQiOlsiXG4ndXNlIHN0cmljdCdcblxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdob2xsZXJpdGgnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbiMgV0dVWSAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvd2ViZ3V5J1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNpbmdsZS1maWxlLW1vZHVsZXMnXG5cblxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiNcbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQGhvbGxlcml0aCA9XG5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBpbnRlcmZhY2U6IC0+XG4gICAgeyBIb2xsZXJpdGgsXG4gICAgICBob2xsZXJpdGhfMTAsXG4gICAgICBob2xsZXJpdGhfMTBtdnAsXG4gICAgICBob2xsZXJpdGhfMTI4LFxuICAgICAgaW50ZXJuYWxzICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBAZXEgICAgICggzqlhbnlidF9fXzEgPSAtPiB0eXBlX29mIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAgICAgICAgICApLCAnZnVuY3Rpb24nXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fXzIgPSAtPiB0eXBlX29mIGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgICApLCAnZnVuY3Rpb24nXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaDEwbXZwXzE6IC0+XG4gICAgeyBIb2xsZXJpdGgsXG4gICAgICBob2xsZXJpdGhfMTAsXG4gICAgICBob2xsZXJpdGhfMTBtdnAsXG4gICAgICBob2xsZXJpdGhfMTI4LFxuICAgICAgaW50ZXJuYWxzICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAgICAgKCDOqWFueWJ0X19fMyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAtOTk5ICAgKSwgJ0swMDAnXG4gICAgQGVxICAgICAoIM6pYW55YnRfX180ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAtOTkgICApLCAnTDAwJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X19fNSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgLTkwICAgKSwgJ0wwOSdcbiAgICBAZXEgICAgICggzqlhbnlidF9fXzYgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgIC0xMSAgICksICdMODgnXG4gICAgQGVxICAgICAoIM6pYW55YnRfX183ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAtMTAgICApLCAnTDg5J1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X19fOCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC05ICAgKSwgJ00wJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X19fOSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC04ICAgKSwgJ00xJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18xMCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC03ICAgKSwgJ00yJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18xMSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC02ICAgKSwgJ00zJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18xMiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC01ICAgKSwgJ000J1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18xMyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC00ICAgKSwgJ001J1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18xNCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC0zICAgKSwgJ002J1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18xNSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC0yICAgKSwgJ003J1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18xNiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC0xICAgKSwgJ004J1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18xNyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgICAwICAgKSwgJ04nXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzE4ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgIDEgICApLCAnTzEnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzE5ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgKzkgICApLCAnTzknXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzIwID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICArMTAgICApLCAnUDEwJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18yMSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgKzIwICAgKSwgJ1AyMCdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMjIgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICs5MCAgICksICdQOTAnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzIzID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAxMjMgICApLCAnUTEyMydcbiAgICBAZXEgICAgICggzqlhbnlidF9fMjQgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgKzkwMCAgICksICdROTAwJ1xuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoMTBtdnBfMjogLT5cbiAgICB7IEhvbGxlcml0aCxcbiAgICAgIGhvbGxlcml0aF8xMCxcbiAgICAgIGhvbGxlcml0aF8xMG12cCxcbiAgICAgIGhvbGxlcml0aF8xMjgsXG4gICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzI1ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyIC05OTkgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIC05OTlcbiAgICBAZXEgICAgICggzqlhbnlidF9fMjYgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgIC05OSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgIC05OVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X18yNyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgLTkwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgLTkwXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzI4ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAtMTEgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAtMTFcbiAgICBAZXEgICAgICggzqlhbnlidF9fMjkgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgIC0xMCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgIC0xMFxuICAgIEBlcSAgICAgKCDOqWFueWJ0X18zMCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC05ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgIC05XG4gICAgQGVxICAgICAoIM6pYW55YnRfXzMxID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTggICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgLThcbiAgICBAZXEgICAgICggzqlhbnlidF9fMzIgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtNyAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAtN1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18zMyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC02ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgIC02XG4gICAgQGVxICAgICAoIM6pYW55YnRfXzM0ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTUgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgLTVcbiAgICBAZXEgICAgICggzqlhbnlidF9fMzUgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtNCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAtNFxuICAgIEBlcSAgICAgKCDOqWFueWJ0X18zNiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC0zICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgIC0zXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzM3ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTIgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgLTJcbiAgICBAZXEgICAgICggzqlhbnlidF9fMzggPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtMSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAtMVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X18zOSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgICAwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgICAwXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzQwID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgIDEgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgIDFcbiAgICBAZXEgICAgICggzqlhbnlidF9fNDEgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICArOSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICArOVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X180MiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgKzEwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgKzEwXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzQzID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICArMjAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICArMjBcbiAgICBAZXEgICAgICggzqlhbnlidF9fNDQgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICs5MCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICs5MFxuICAgIEBlcSAgICAgKCDOqWFueWJ0X180NSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgMTIzICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgMTIzXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzQ2ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICs5MDAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICs5MDBcbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaDEwbXZwXzM6IC0+XG4gICAgeyBIb2xsZXJpdGgsXG4gICAgICBob2xsZXJpdGhfMTAsXG4gICAgICBob2xsZXJpdGhfMTBtdnAsXG4gICAgICBob2xsZXJpdGhfMTI4LFxuICAgICAgaW50ZXJuYWxzICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAgICAgKCDOqWFueWJ0X180NyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAtOTk5ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbIC05OTksIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNDggPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgIC05OSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgLTk5LCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzQ5ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAtOTAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgIC05MCwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X181MCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgLTExICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAtMTEsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNTEgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgIC0xMCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgLTEwLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzUyID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTkgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICAtOSwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X181MyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC04ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgLTgsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNTQgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtNyAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgIC03LCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzU1ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTYgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICAtNiwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X181NiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC01ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgLTUsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNTcgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtNCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgIC00LCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzU4ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTMgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICAtMywgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X181OSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC0yICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgLTIsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNjAgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtMSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgIC0xLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzYxID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgIDAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICAgMCwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X182MiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgICAxICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgIDEsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNjMgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICArOSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgICs5LCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzY0ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICArMTAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICsxMCwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X182NSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgKzIwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICArMjAsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNjYgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICs5MCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgKzkwLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzY3ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAxMjMgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgIDEyMywgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X182OCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciArOTAwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICs5MDAsIF1cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaDEwbXZwX3NvcnRpbmdfMTogLT5cbiAgICB7IEhvbGxlcml0aCxcbiAgICAgIGhvbGxlcml0aF8xMCxcbiAgICAgIGhvbGxlcml0aF8xMG12cCxcbiAgICAgIGhvbGxlcml0aF8xMjgsXG4gICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgc29ydGVkX3NpbmdsZXMgPSAoIHBhZGRpbmcgPSBudWxsICkgPT5cbiAgICAgIHByb2JlcyA9IFtcbiAgICAgICAgWyAtOTk5LCBdXG4gICAgICAgIFsgIC05OSwgXVxuICAgICAgICBbICAtOTAsIF1cbiAgICAgICAgWyAgLTExLCBdXG4gICAgICAgIFsgIC0xMCwgXVxuICAgICAgICBbICAgLTksIF1cbiAgICAgICAgWyAgIC04LCBdXG4gICAgICAgIFsgICAtNywgXVxuICAgICAgICBbICAgLTYsIF1cbiAgICAgICAgWyAgIC01LCBdXG4gICAgICAgIFsgICAtNCwgXVxuICAgICAgICBbICAgLTMsIF1cbiAgICAgICAgWyAgIC0yLCBdXG4gICAgICAgIFsgICAtMSwgXVxuICAgICAgICBbICAgIDAsIF1cbiAgICAgICAgWyAgICAxLCBdXG4gICAgICAgIFsgICArOSwgXVxuICAgICAgICBbICArMTAsIF1cbiAgICAgICAgWyAgKzIwLCBdXG4gICAgICAgIFsgICs5MCwgXVxuICAgICAgICBbICAxMjMsIF1cbiAgICAgICAgWyArOTAwLCBdXG4gICAgICAgIF1cbiAgICAgIGZvciBwcm9iZSwgaWR4IGluIHByb2Jlc1xuICAgICAgICBzayAgICAgICAgICAgID0gaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBwcm9iZVxuICAgICAgICBzayAgICAgICAgICAgID0gc2sucGFkRW5kIHBhZGRpbmcsIGhvbGxlcml0aF8xMG12cC5jZmcuenB1bnNbIDAgXSBpZiBwYWRkaW5nP1xuICAgICAgICBwcm9iZXNbIGlkeCBdID0geyBzaywgcHJvYmUsIGlkeCwgfVxuICAgICAgcHJvYmVzLnNvcnQgKCBhLCBiICkgLT5cbiAgICAgICAgcmV0dXJuIC0xIGlmIGEuc2sgPCBiLnNrXG4gICAgICAgIHJldHVybiArMSBpZiBhLnNrID4gYi5za1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgZm9yIGVudHJ5LCBpZHggaW4gcHJvYmVzXG4gICAgICAgICMgZGVidWcgJ86paGxsdF9fNjknLCBlbnRyeVxuICAgICAgICBAZXEgKCDOqWhsbHRfXzcwID0gLT4gZW50cnkuaWR4ICksIGlkeFxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHNvcnRlZF9zaW5nbGVzIG51bGxcbiAgICBzb3J0ZWRfc2luZ2xlcyAxMFxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoMTBtdnBfc29ydGluZ18yOiAtPlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEwLFxuICAgICAgaG9sbGVyaXRoXzEwbXZwLFxuICAgICAgaG9sbGVyaXRoXzEyOCxcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwcm9iZXMgPSBbXG4gICAgICBbIFsgLTk5OSwgICAgICAgICAgIF0sICdLMDAwJywgICAgICBdXG4gICAgICBbIFsgIC05OSwgICAgICAgICAgIF0sICdMMDAnLCAgICAgICBdXG4gICAgICBbIFsgIC05MCwgICAgICAgICAgIF0sICdMMDknLCAgICAgICBdXG4gICAgICBbIFsgIC0xMSwgICAgICAgICAgIF0sICdMODgnLCAgICAgICBdXG4gICAgICBbIFsgIC0xMCwgICAgICAgICAgIF0sICdMODknLCAgICAgICBdXG4gICAgICBbIFsgICAtOSwgICAgICAgICAgIF0sICdNMCcsICAgICAgICBdXG4gICAgICBbIFsgICAtOCwgICAgICAgICAgIF0sICdNMScsICAgICAgICBdXG4gICAgICBbIFsgICAtNywgICAgICAgICAgIF0sICdNMicsICAgICAgICBdXG4gICAgICBbIFsgICAtNiwgICAgICAgICAgIF0sICdNMycsICAgICAgICBdXG4gICAgICBbIFsgICAtNSwgICAgICAgICAgIF0sICdNNCcsICAgICAgICBdXG4gICAgICBbIFsgICAtNCwgICAgICAgICAgIF0sICdNNScsICAgICAgICBdXG4gICAgICBbIFsgICAtMywgICAgICAgICAgIF0sICdNNicsICAgICAgICBdXG4gICAgICBbIFsgICAtMiwgICAgICAgICAgIF0sICdNNycsICAgICAgICBdXG4gICAgICBbIFsgICAtMSwgICAgICAgICAgIF0sICdNOCcsICAgICAgICBdXG4gICAgICBbIFsgICArMCwgIC0yMCwgICAgIF0sICdOTDIwJywgICAgICBdXG4gICAgICBbIFsgICArMCwgICAgICAgICAgIF0sICdOJywgICAgICAgICBdXG4gICAgICBbIFsgICArMCwgICsyMCwgICAgIF0sICdOUDIwJywgICAgICBdXG4gICAgICBbIFsgICArOSwgICAgICAgICAgIF0sICdPOScsICAgICAgICBdXG4gICAgICBbIFsgICsxMCwgICAtMywgICAgIF0sICdQMTBNNicsICAgICBdXG4gICAgICBbIFsgICsxMCwgICAtMiwgICAgIF0sICdQMTBNNycsICAgICBdXG4gICAgICBbIFsgICsxMCwgICAtMSwgICAgIF0sICdQMTBNOCcsICAgICBdXG4gICAgICBbIFsgICsxMCwgICAgICAgICAgIF0sICdQMTAnLCAgICAgICBdXG4gICAgICBbIFsgICsxMCwgICArMCwgICAgIF0sICdQMTBOJywgICAgICBdXG4gICAgICBbIFsgICsxMCwgICArMSwgICAgIF0sICdQMTBPMScsICAgICBdXG4gICAgICBbIFsgICsxMCwgICsxMCwgLTEsIF0sICdQMTBQMTBNOCcsICBdXG4gICAgICBbIFsgICsxMCwgICsxMCwgICAgIF0sICdQMTBQMTAnLCAgICBdXG4gICAgICBbIFsgICsxMCwgICsyMCwgICAgIF0sICdQMTBQMjAnLCAgICBdXG4gICAgICBbIFsgICsyMCwgICAgICAgICAgIF0sICdQMjAnLCAgICAgICBdXG4gICAgICBbIFsgICsyMCwgICsxMCwgICAgIF0sICdQMjBQMTAnLCAgICBdXG4gICAgICBbIFsgICs5MCwgICAgICAgICAgIF0sICdQOTAnLCAgICAgICBdXG4gICAgICBbIFsgKzkwMCwgICAgICAgICAgIF0sICdROTAwJywgICAgICBdXG4gICAgICBdXG4gICAgdWxpbmVzICAgICAgICAgICAgPSBbXVxuICAgIHBsaW5lcyAgICAgICAgICAgID0gW11cbiAgICBleHBlY3RlZF9pbmRleGVzICA9ICggaWR4IGZvciBpZHggaW4gWyAwIC4uLiBwcm9iZXMubGVuZ3RoIF0gKVxuICAgIHNodWZmbGUgICAgICAgICAgID0gR1VZLnJuZC5nZXRfc2h1ZmZsZSA1NywgODhcbiAgICBmb3IgWyB2ZHgsIHNrX21hdGNoZXIsIF0sIGlkeCBpbiBwcm9iZXNcbiAgICAgIHVzayAgID0gaG9sbGVyaXRoXzEwbXZwLmVuY29kZSB2ZHhcbiAgICAgIHBzayAgID0gdXNrLnBhZEVuZCAxMCwgaG9sbGVyaXRoXzEwbXZwLmNmZy56cHVuc1sgMCBdXG4gICAgICB1c2sgICA9IHVzay5wYWRFbmQgMTAsICcgJ1xuICAgICAgdWxpbmVzLnB1c2ggXCIje3Vza30gI3tycHIgdmR4fSAje2lkeH1cIlxuICAgICAgcGxpbmVzLnB1c2ggXCIje3Bza30gI3tycHIgdmR4fSAje2lkeH1cIlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZm9yIF8gaW4gWyAxIC4uIDEwIF1cbiAgICAgIHVsaW5lcyA9IHNodWZmbGUgdWxpbmVzXG4gICAgICB1bGluZXMuc29ydCgpXG4gICAgICByZWFsX2luZGV4ZXMgPSBbXVxuICAgICAgZm9yIHVsaW5lIGluIHVsaW5lc1xuICAgICAgICAjIGhlbHAgJ86paGxsdF9fNzEnLCB1bGluZVxuICAgICAgICByZWFsX2luZGV4ZXMucHVzaCBOdW1iZXIgdWxpbmUucmVwbGFjZSAvXi4qP1xccyhbMC05XSspJC8sICckMSdcbiAgICAgIEBlcSAoIM6paGxsdF9fNzIgPSAtPiBlcXVhbHMgZXhwZWN0ZWRfaW5kZXhlcywgcmVhbF9pbmRleGVzICksIGZhbHNlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmb3IgXyBpbiBbIDEgLi4gMTAgXVxuICAgICAgcGxpbmVzID0gc2h1ZmZsZSBwbGluZXNcbiAgICAgIHBsaW5lcy5zb3J0KClcbiAgICAgIHJlYWxfaW5kZXhlcyA9IFtdXG4gICAgICBmb3IgcGxpbmUgaW4gcGxpbmVzXG4gICAgICAgICMgaGVscCAnzqlobGx0X183MycsIHBsaW5lXG4gICAgICAgIHJlYWxfaW5kZXhlcy5wdXNoIE51bWJlciBwbGluZS5yZXBsYWNlIC9eLio/XFxzKFswLTldKykkLywgJyQxJ1xuICAgICAgQGVxICggzqlobGx0X183NCA9IC0+IGVxdWFscyBleHBlY3RlZF9pbmRleGVzLCByZWFsX2luZGV4ZXMgKSwgdHJ1ZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGgxMG12cDJfc29ydGluZ18yOiAtPlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEwLFxuICAgICAgaG9sbGVyaXRoXzEwbXZwMixcbiAgICAgIGhvbGxlcml0aF8xMjgsXG4gICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcHJvYmVzID0gW1xuICAgICAgWyBbIC05OTksICAgICAgICAgICBdLCAnQjAwMCcsICAgICAgICBdXG4gICAgICBbIFsgIC05OSwgICAgICAgICAgIF0sICdDMDAnLCAgICAgICAgIF1cbiAgICAgIFsgWyAgLTkwLCAgICAgICAgICAgXSwgJ0MwOScsICAgICAgICAgXVxuICAgICAgWyBbICAtMTEsICAgICAgICAgICBdLCAnQzg4JywgICAgICAgICBdXG4gICAgICBbIFsgIC0xMCwgICAgICAgICAgIF0sICdDODknLCAgICAgICAgIF1cbiAgICAgIFsgWyAgIC05LCAgICAgICAgICAgXSwgJ0UnLCAgICAgICAgICAgXVxuICAgICAgWyBbICAgLTgsICAgICAgICAgICBdLCAnRicsICAgICAgICAgICBdXG4gICAgICBbIFsgICAtNywgICAgICAgICAgIF0sICdHJywgICAgICAgICAgIF1cbiAgICAgIFsgWyAgIC02LCAgICAgICAgICAgXSwgJ0gnLCAgICAgICAgICAgXVxuICAgICAgWyBbICAgLTUsICAgICAgICAgICBdLCAnSScsICAgICAgICAgICBdXG4gICAgICBbIFsgICAtNCwgICAgICAgICAgIF0sICdKJywgICAgICAgICAgIF1cbiAgICAgIFsgWyAgIC0zLCAgICAgICAgICAgXSwgJ0snLCAgICAgICAgICAgXVxuICAgICAgWyBbICAgLTIsICAgICAgICAgICBdLCAnTCcsICAgICAgICAgICBdXG4gICAgICBbIFsgICAtMSwgICAgICAgICAgIF0sICdNJywgICAgICAgICAgIF1cbiAgICAgIFsgWyAgICswLCAgLTIwLCAgICAgXSwgJ05DNzknLCAgICAgICAgXVxuICAgICAgWyBbICAgKzAsICAgICAgICAgICBdLCAnTicsICAgICAgICAgICBdXG4gICAgICBbIFsgICArMCwgICsyMCwgICAgIF0sICdOWDIwJywgICAgICAgIF1cbiAgICAgIFsgWyAgICs5LCAgICAgICAgICAgXSwgJ1cnLCAgICAgICAgICAgXVxuICAgICAgWyBbICArMTAsICAgLTMsICAgICBdLCAnWDEwSycsICAgICAgICBdXG4gICAgICBbIFsgICsxMCwgICAtMiwgICAgIF0sICdYMTBMJywgICAgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgIC0xLCAgICAgXSwgJ1gxME0nLCAgICAgICAgXVxuICAgICAgWyBbICArMTAsICAgICAgICAgICBdLCAnWDEwJywgICAgICAgICBdXG4gICAgICBbIFsgICsxMCwgICArMCwgICAgIF0sICdYMTBOJywgICAgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgICsxLCAgICAgXSwgJ1gxME8nLCAgICAgICAgXVxuICAgICAgWyBbICArMTAsICArMTAsIC0xLCBdLCAnWDEwWDEwTScsICAgICBdXG4gICAgICBbIFsgICsxMCwgICsxMCwgICAgIF0sICdYMTBYMTAnLCAgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgKzIwLCAgICAgXSwgJ1gxMFgyMCcsICAgICAgXVxuICAgICAgWyBbICArMjAsICAgICAgICAgICBdLCAnWDIwJywgICAgICAgICBdXG4gICAgICBbIFsgICsyMCwgICsxMCwgICAgIF0sICdYMjBYMTAnLCAgICAgIF1cbiAgICAgIFsgWyAgKzkwLCAgICAgICAgICAgXSwgJ1g5MCcsICAgICAgICAgXVxuICAgICAgWyBbICs5MDAsICAgICAgICAgICBdLCAnWTkwMCcsICAgICAgICBdXG4gICAgICBdXG4gICAgdWxpbmVzICAgICAgICAgICAgPSBbXVxuICAgIHBsaW5lcyAgICAgICAgICAgID0gW11cbiAgICBleHBlY3RlZF9pbmRleGVzICA9ICggaWR4IGZvciBpZHggaW4gWyAwIC4uLiBwcm9iZXMubGVuZ3RoIF0gKVxuICAgIHNodWZmbGUgICAgICAgICAgID0gR1VZLnJuZC5nZXRfc2h1ZmZsZSA1NywgODhcbiAgICBmb3IgWyB2ZHgsIHNrX21hdGNoZXIsIF0sIGlkeCBpbiBwcm9iZXNcbiAgICAgIHVzayAgID0gaG9sbGVyaXRoXzEwbXZwMi5lbmNvZGUgdmR4XG4gICAgICBAZXEgKCDOqWhsbHRfXzc1ID0gLT4gdXNrICksIHNrX21hdGNoZXJcbiAgICAgIHBzayAgID0gdXNrLnBhZEVuZCAxMCwgaG9sbGVyaXRoXzEwbXZwMi5jZmcuenB1bnNbIDAgXVxuICAgICAgdXNrICAgPSB1c2sucGFkRW5kIDEwLCAnICdcbiAgICAgIHVsaW5lcy5wdXNoIFwiI3t1c2t9ICN7cnByIHZkeH0gI3tpZHh9XCJcbiAgICAgIHBsaW5lcy5wdXNoIFwiI3twc2t9ICN7cnByIHZkeH0gI3tpZHh9XCJcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGZvciBfIGluIFsgMSAuLiAxMCBdXG4gICAgICB1bGluZXMgPSBzaHVmZmxlIHVsaW5lc1xuICAgICAgdWxpbmVzLnNvcnQoKVxuICAgICAgcmVhbF9pbmRleGVzID0gW11cbiAgICAgIGZvciB1bGluZSBpbiB1bGluZXNcbiAgICAgICAgIyBoZWxwICfOqWhsbHRfXzc2JywgdWxpbmVcbiAgICAgICAgcmVhbF9pbmRleGVzLnB1c2ggTnVtYmVyIHVsaW5lLnJlcGxhY2UgL14uKj9cXHMoWzAtOV0rKSQvLCAnJDEnXG4gICAgICBAZXEgKCDOqWhsbHRfXzc3ID0gLT4gZXF1YWxzIGV4cGVjdGVkX2luZGV4ZXMsIHJlYWxfaW5kZXhlcyApLCBmYWxzZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZm9yIF8gaW4gWyAxIC4uIDEwIF1cbiAgICAgIHBsaW5lcyA9IHNodWZmbGUgcGxpbmVzXG4gICAgICBwbGluZXMuc29ydCgpXG4gICAgICByZWFsX2luZGV4ZXMgPSBbXVxuICAgICAgZm9yIHBsaW5lIGluIHBsaW5lc1xuICAgICAgICAjIGhlbHAgJ86paGxsdF9fNzgnLCBwbGluZVxuICAgICAgICByZWFsX2luZGV4ZXMucHVzaCBOdW1iZXIgcGxpbmUucmVwbGFjZSAvXi4qP1xccyhbMC05XSspJC8sICckMSdcbiAgICAgIEBlcSAoIM6paGxsdF9fNzkgPSAtPiBlcXVhbHMgZXhwZWN0ZWRfaW5kZXhlcywgcmVhbF9pbmRleGVzICksIHRydWVcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoMTBtdnAyX3NvcnRpbmdfMjogLT5cbiAgICB7IEhvbGxlcml0aCxcbiAgICAgIGhvbGxlcml0aF8xMjgsXG4gICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcHJvYmVzID0gW1xuICAgICAgWyBbIC05OTksICAgICAgICAgICBdLCAnw43CvzsnLCAgICAgXVxuICAgICAgWyBbICAtOTksICAgICAgICAgICBdLCAnw44/JywgICAgICBdXG4gICAgICBbIFsgIC05MCwgICAgICAgICAgIF0sICfDjkgnLCAgICAgIF1cbiAgICAgIFsgWyAgLTExLCAgICAgICAgICAgXSwgJ8OYJywgICAgICAgXVxuICAgICAgWyBbICAtMTAsICAgICAgICAgICBdLCAnw5knLCAgICAgICBdXG4gICAgICBbIFsgICAtOSwgICAgICAgICAgIF0sICfDmicsICAgICAgIF1cbiAgICAgIFsgWyAgIC04LCAgICAgICAgICAgXSwgJ8ObJywgICAgICAgXVxuICAgICAgWyBbICAgLTcsICAgICAgICAgICBdLCAnw5wnLCAgICAgICBdXG4gICAgICBbIFsgICAtNiwgICAgICAgICAgIF0sICfDnScsICAgICAgIF1cbiAgICAgIFsgWyAgIC01LCAgICAgICAgICAgXSwgJ8OeJywgICAgICAgXVxuICAgICAgWyBbICAgLTQsICAgICAgICAgICBdLCAnw58nLCAgICAgICBdXG4gICAgICBbIFsgICAtMywgICAgICAgICAgIF0sICfDoCcsICAgICAgIF1cbiAgICAgIFsgWyAgIC0yLCAgICAgICAgICAgXSwgJ8OhJywgICAgICAgXVxuICAgICAgWyBbICAgLTEsICAgICAgICAgICBdLCAnw6InLCAgICAgICBdXG4gICAgICBbIFsgICArMCwgIC0yMCwgICAgIF0sICfDo8OPJywgICAgICBdXG4gICAgICBbIFsgICArMCwgICAgICAgICAgIF0sICfDoycsICAgICAgIF1cbiAgICAgIFsgWyAgICswLCAgKzIwLCAgICAgXSwgJ8Ojw7cnLCAgICAgIF1cbiAgICAgIFsgWyAgICs5LCAgICAgICAgICAgXSwgJ8OsJywgICAgICAgXVxuICAgICAgWyBbICArMTAsICAgLTMsICAgICBdLCAnw63DoCcsICAgICAgXVxuICAgICAgWyBbICArMTAsICAgLTIsICAgICBdLCAnw63DoScsICAgICAgXVxuICAgICAgWyBbICArMTAsICAgLTEsICAgICBdLCAnw63DoicsICAgICAgXVxuICAgICAgWyBbICArMTAsICAgICAgICAgICBdLCAnw60nLCAgICAgICBdXG4gICAgICBbIFsgICsxMCwgICArMCwgICAgIF0sICfDrcOjJywgICAgICBdXG4gICAgICBbIFsgICsxMCwgICArMSwgICAgIF0sICfDrcOkJywgICAgICBdXG4gICAgICBbIFsgICsxMCwgICsxMCwgLTEsIF0sICfDrcOtw6InLCAgICAgXVxuICAgICAgWyBbICArMTAsICArMTAsICAgICBdLCAnw63DrScsICAgICAgXVxuICAgICAgWyBbICArMTAsICArMjAsICAgICBdLCAnw63DtycsICAgICAgXVxuICAgICAgWyBbICArMjAsICAgICAgICAgICBdLCAnw7cnLCAgICAgICBdXG4gICAgICBbIFsgICsyMCwgICsxMCwgICAgIF0sICfDt8OtJywgICAgICBdXG4gICAgICBbIFsgICs5MCwgICAgICAgICAgIF0sICfDuH4nLCAgICAgIF1cbiAgICAgIFsgWyArOTAwLCAgICAgICAgICAgXSwgJ8O5KiYnLCAgICAgXVxuICAgICAgXVxuICAgIHVsaW5lcyAgICAgICAgICAgID0gW11cbiAgICBwbGluZXMgICAgICAgICAgICA9IFtdXG4gICAgZXhwZWN0ZWRfaW5kZXhlcyAgPSAoIGlkeCBmb3IgaWR4IGluIFsgMCAuLi4gcHJvYmVzLmxlbmd0aCBdIClcbiAgICBzaHVmZmxlICAgICAgICAgICA9IEdVWS5ybmQuZ2V0X3NodWZmbGUgNTcsIDg4XG4gICAgZm9yIFsgdmR4LCBza19tYXRjaGVyLCBdLCBpZHggaW4gcHJvYmVzXG4gICAgICB1c2sgICA9IGhvbGxlcml0aF8xMjguZW5jb2RlIHZkeFxuICAgICAgQGVxICggzqlobGx0X184MCA9IC0+IHVzayApLCBza19tYXRjaGVyXG4gICAgICAjIGVjaG8gcnByIHVza1xuICAgICAgcHNrICAgPSB1c2sucGFkRW5kIDEwLCBob2xsZXJpdGhfMTI4LmNmZy56cHVuc1sgMCBdXG4gICAgICB1c2sgICA9IHVzay5wYWRFbmQgMTAsICcgJ1xuICAgICAgdWxpbmVzLnB1c2ggXCIje3Vza30gI3tycHIgdmR4fSAje2lkeH1cIlxuICAgICAgcGxpbmVzLnB1c2ggXCIje3Bza30gI3tycHIgdmR4fSAje2lkeH1cIlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZm9yIF8gaW4gWyAxIC4uIDEwIF1cbiAgICAgIHVsaW5lcyA9IHNodWZmbGUgdWxpbmVzXG4gICAgICB1bGluZXMuc29ydCgpXG4gICAgICByZWFsX2luZGV4ZXMgPSBbXVxuICAgICAgZm9yIHVsaW5lIGluIHVsaW5lc1xuICAgICAgICAjIGhlbHAgJ86paGxsdF9fODEnLCB1bGluZVxuICAgICAgICByZWFsX2luZGV4ZXMucHVzaCBOdW1iZXIgdWxpbmUucmVwbGFjZSAvXi4qP1xccyhbMC05XSspJC8sICckMSdcbiAgICAgIEBlcSAoIM6paGxsdF9fODIgPSAtPiBlcXVhbHMgZXhwZWN0ZWRfaW5kZXhlcywgcmVhbF9pbmRleGVzICksIGZhbHNlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmb3IgXyBpbiBbIDEgLi4gMTAgXVxuICAgICAgcGxpbmVzID0gc2h1ZmZsZSBwbGluZXNcbiAgICAgIHBsaW5lcy5zb3J0KClcbiAgICAgIHJlYWxfaW5kZXhlcyA9IFtdXG4gICAgICBmb3IgcGxpbmUsIGlkeCBpbiBwbGluZXNcbiAgICAgICAgaGVscCAnzqlobGx0X184MycsIHJwciBwbGluZSBpZiBfIGlzIDFcbiAgICAgICAgcmVhbF9pbmRleGVzLnB1c2ggTnVtYmVyIHBsaW5lLnJlcGxhY2UgL14uKj9cXHMoWzAtOV0rKSQvLCAnJDEnXG4gICAgICBAZXEgKCDOqWhsbHRfXzg0ID0gLT4gZXF1YWxzIGV4cGVjdGVkX2luZGV4ZXMsIHJlYWxfaW5kZXhlcyApLCB0cnVlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaDEyOF9kZWNvZGU6IC0+XG4gICAgeyBIb2xsZXJpdGgsXG4gICAgICBob2xsZXJpdGhfMTI4LFxuICAgICAgaW50ZXJuYWxzICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHByb2Jlc19hbmRfbWF0Y2hlcnMgPSBbXG4gICAgICBbICfDjcK/O8Ojw6PDo8Ojw6PDo8OjJywgWyAtOTk5LCAgICAgICAgIF0gXVxuICAgICAgWyAnw44/w6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTk5LCAgICAgICAgICBdIF1cbiAgICAgIFsgJ8OOSMOjw6PDo8Ojw6PDo8Ojw6MnLCBbIC05MCwgICAgICAgICAgXSBdXG4gICAgICBbICfDmMOjw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTExLCAgICAgICAgICBdIF1cbiAgICAgIFsgJ8OZw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtMTAsICAgICAgICAgIF0gXVxuICAgICAgWyAnw5rDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC05LCAgICAgICAgICAgXSBdXG4gICAgICBbICfDm8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTgsICAgICAgICAgICBdIF1cbiAgICAgIFsgJ8Ocw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtNywgICAgICAgICAgIF0gXVxuICAgICAgWyAnw53Do8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC02LCAgICAgICAgICAgXSBdXG4gICAgICBbICfDnsOjw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTUsICAgICAgICAgICBdIF1cbiAgICAgIFsgJ8Ofw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtNCwgICAgICAgICAgIF0gXVxuICAgICAgWyAnw6DDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC0zLCAgICAgICAgICAgXSBdXG4gICAgICBbICfDocOjw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTIsICAgICAgICAgICBdIF1cbiAgICAgIFsgJ8Oiw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtMSwgICAgICAgICAgIF0gXVxuICAgICAgWyAnw6PDj8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIDAsIC0yMCwgICAgICAgXSBdXG4gICAgICBbICfDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMCwgICAgICAgICAgICBdIF1cbiAgICAgIFsgJ8Ojw7fDo8Ojw6PDo8Ojw6PDo8OjJywgWyAwLCAyMCwgICAgICAgIF0gXVxuICAgICAgWyAnw6zDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIDksICAgICAgICAgICAgXSBdXG4gICAgICBbICfDrcOgw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMTAsIC0zLCAgICAgICBdIF1cbiAgICAgIFsgJ8Otw6HDo8Ojw6PDo8Ojw6PDo8OjJywgWyAxMCwgLTIsICAgICAgIF0gXVxuICAgICAgWyAnw63DosOjw6PDo8Ojw6PDo8Ojw6MnLCBbIDEwLCAtMSwgICAgICAgXSBdXG4gICAgICBbICfDrcOjw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMTAsICAgICAgICAgICBdIF1cbiAgICAgIFsgJ8Otw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAxMCwgMCwgICAgICAgIF0gXVxuICAgICAgWyAnw63DpMOjw6PDo8Ojw6PDo8Ojw6MnLCBbIDEwLCAxLCAgICAgICAgXSBdXG4gICAgICBbICfDrcOtw6LDo8Ojw6PDo8Ojw6PDoycsIFsgMTAsIDEwLCAtMSwgICBdIF1cbiAgICAgIFsgJ8Otw63Do8Ojw6PDo8Ojw6PDo8OjJywgWyAxMCwgMTAsICAgICAgIF0gXVxuICAgICAgWyAnw63Dt8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIDEwLCAyMCwgICAgICAgXSBdXG4gICAgICBbICfDt8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMjAsICAgICAgICAgICBdIF1cbiAgICAgIFsgJ8O3w63Do8Ojw6PDo8Ojw6PDo8OjJywgWyAyMCwgMTAsICAgICAgIF0gXVxuICAgICAgWyAnw7h+w6PDo8Ojw6PDo8Ojw6PDoycsIFsgOTAsICAgICAgICAgICBdIF1cbiAgICAgIFsgJ8O5KibDo8Ojw6PDo8Ojw6PDoycsIFsgOTAwLCAgICAgICAgICBdIF1cbiAgICAgIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGZvciBbIHByb2JlLCBtYXRjaGVyLCBdIGluIHByb2Jlc19hbmRfbWF0Y2hlcnNcbiAgICAgIGRlYnVnICfOqWhsbHRfXzg1JywgcnByIGhvbGxlcml0aF8xMjguZGVjb2RlIHByb2JlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIGgxMG12cDJfZGVjb2RlOiAtPlxuICAjICAgeyBIb2xsZXJpdGgsXG4gICMgICAgIGhvbGxlcml0aF8xMG12cDIsXG4gICMgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgIyAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAjICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAjICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgIyAgIHByb2Jlc19hbmRfbWF0Y2hlcnMgPSBbXG4gICMgICAgIFsgJ0IwMDBOTk5OTk4nLCBbIC05OTksICAgICAgICAgXSBdXG4gICMgICAgIFsgJ0MwME5OTk5OTk4nLCBbIC05OSwgICAgICAgICAgXSBdXG4gICMgICAgIFsgJ0MwOU5OTk5OTk4nLCBbIC05MCwgICAgICAgICAgXSBdXG4gICMgICAgIFsgJ0M4OE5OTk5OTk4nLCBbIC0xMSwgICAgICAgICAgXSBdXG4gICMgICAgIFsgJ0M4OU5OTk5OTk4nLCBbIC0xMCwgICAgICAgICAgXSBdXG4gICMgICAgIFsgJ0VOTk5OTk5OTk4nLCBbIC05LCAgICAgICAgICAgXSBdXG4gICMgICAgIFsgJ0ZOTk5OTk5OTk4nLCBbIC04LCAgICAgICAgICAgXSBdXG4gICMgICAgIFsgJ0dOTk5OTk5OTk4nLCBbIC03LCAgICAgICAgICAgXSBdXG4gICMgICAgIFsgJ0hOTk5OTk5OTk4nLCBbIC02LCAgICAgICAgICAgXSBdXG4gICMgICAgIFsgJ0lOTk5OTk5OTk4nLCBbIC01LCAgICAgICAgICAgXSBdXG4gICMgICAgIFsgJ0pOTk5OTk5OTk4nLCBbIC00LCAgICAgICAgICAgXSBdXG4gICMgICAgIFsgJ0tOTk5OTk5OTk4nLCBbIC0zLCAgICAgICAgICAgXSBdXG4gICMgICAgIFsgJ0xOTk5OTk5OTk4nLCBbIC0yLCAgICAgICAgICAgXSBdXG4gICMgICAgIFsgJ01OTk5OTk5OTk4nLCBbIC0xLCAgICAgICAgICAgXSBdXG4gICMgICAgIFsgJ05DNzlOTk5OTk4nLCBbIDAsIC0yMCwgICAgICAgXSBdXG4gICMgICAgIFsgJ05OTk5OTk5OTk4nLCBbIDAsICAgICAgICAgICAgXSBdXG4gICMgICAgIFsgJ05YMjBOTk5OTk4nLCBbIDAsIDIwLCAgICAgICAgXSBdXG4gICMgICAgIFsgJ1dOTk5OTk5OTk4nLCBbIDksICAgICAgICAgICAgXSBdXG4gICMgICAgIFsgJ1gxMEtOTk5OTk4nLCBbIDEwLCAtMywgICAgICAgXSBdXG4gICMgICAgIFsgJ1gxMExOTk5OTk4nLCBbIDEwLCAtMiwgICAgICAgXSBdXG4gICMgICAgIFsgJ1gxME1OTk5OTk4nLCBbIDEwLCAtMSwgICAgICAgXSBdXG4gICMgICAgIFsgJ1gxME5OTk5OTk4nLCBbIDEwLCAgICAgICAgICAgXSBdXG4gICMgICAgIFsgJ1gxME5OTk5OTk4nLCBbIDEwLCAwLCAgICAgICAgXSBdXG4gICMgICAgIFsgJ1gxME9OTk5OTk4nLCBbIDEwLCAxLCAgICAgICAgXSBdXG4gICMgICAgIFsgJ1gxMFgxME1OTk4nLCBbIDEwLCAxMCwgLTEsICAgXSBdXG4gICMgICAgIFsgJ1gxMFgxME5OTk4nLCBbIDEwLCAxMCwgICAgICAgXSBdXG4gICMgICAgIFsgJ1gxMFgyME5OTk4nLCBbIDEwLCAyMCwgICAgICAgXSBdXG4gICMgICAgIFsgJ1gyME5OTk5OTk4nLCBbIDIwLCAgICAgICAgICAgXSBdXG4gICMgICAgIFsgJ1gyMFgxME5OTk4nLCBbIDIwLCAxMCwgICAgICAgXSBdXG4gICMgICAgIFsgJ1g5ME5OTk5OTk4nLCBbIDkwLCAgICAgICAgICAgXSBdXG4gICMgICAgIFsgJ1k5MDBOTk5OTk4nLCBbIDkwMCwgICAgICAgICAgXSBdXG4gICMgICAgIF1cbiAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICBAdGhyb3dzICggzqlobGx0X184NiA9IC0+IGhvbGxlcml0aF8xMG12cDIuZGVjb2RlIG51bGwgICAgKSwgL2V4cGVjdGVkIGEgdGV4dC9cbiAgIyAgIEB0aHJvd3MgKCDOqWhsbHRfXzg3ID0gLT4gaG9sbGVyaXRoXzEwbXZwMi5kZWNvZGUgJycgICAgICApLCAvZXhwZWN0ZWQgYSBub24tZW1wdHkgdGV4dC9cbiAgIyAgIEB0aHJvd3MgKCDOqWhsbHRfXzg4ID0gLT4gaG9sbGVyaXRoXzEwbXZwMi5kZWNvZGUgJ8OEMTIzJyAgKSwgL2V4cGVjdGVkIGEgc29ydGtleS9cbiAgIyAgIGRlYnVnICfOqWhsbHRfXzg5JywgaG9sbGVyaXRoXzEwbXZwMi5jZmcuc29ydGtleV9yZVxuICAjICAgZGVidWcgJ86paGxsdF9fOTAnLCBob2xsZXJpdGhfMTBtdnAyLmRlY29kZSAnWTkwME5OTk5OTidcbiAgIyAgIGRlYnVnICfOqWhsbHRfXzkxJywgaG9sbGVyaXRoXzEwbXZwMi5kZWNvZGUgJ1k5MDBZOTAwTk5OTk5OJ1xuICAjICAgZGVidWcgJ86paGxsdF9fOTInLCBob2xsZXJpdGhfMTBtdnAyLmRlY29kZSAnTk5OTk5OJ1xuICAjICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgIyAgICMgZm9yIFsgcHJvYmUsIG1hdGNoZXIsIF0gaW4gcHJvYmVzX2FuZF9tYXRjaGVyc1xuICAjICAgIyAgIGRlYnVnICfOqWhsbHRfXzkzJywgcnByIGhvbGxlcml0aF8xMG12cDIuZGVjb2RlIHByb2JlXG4gICMgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAjICAgcmV0dXJuIG51bGxcblxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaDEwbXZwMl9kZWNvZGVfdW5pdHM6IC0+XG4gICAgIyMjIE5PVEUgYWxzbyBzZWUgY29ycmVzcG9uZGluZyB0ZXN0IGluIGBoZW5naXN0LU5HL2Rldi9pbnRlcmxleC9zcmMvdGVzdC1ob2xsZXJpdGguY29mZmVlYCAjIyNcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEwbXZwMixcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICAjIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHByb2Jlc19hbmRfbWF0Y2hlcnMgPSBbXG4gICAgICBbICdCMDAwTk5OTk5OJywgWyAtOTk5ICAgICAgICBdLCAnbm51bTpCLDAwMFstOTk5XXxwYWRkaW5nOk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnQzAwTk5OTk5OTicsIFsgLTk5ICAgICAgICAgXSwgJ25udW06QywwMFstOTldfHBhZGRpbmc6Tk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0MwOU5OTk5OTk4nLCBbIC05MCAgICAgICAgIF0sICdubnVtOkMsMDlbLTkwXXxwYWRkaW5nOk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdDODhOTk5OTk5OJywgWyAtMTEgICAgICAgICBdLCAnbm51bTpDLDg4Wy0xMV18cGFkZGluZzpOTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnQzg5Tk5OTk5OTicsIFsgLTEwICAgICAgICAgXSwgJ25udW06Qyw4OVstMTBdfHBhZGRpbmc6Tk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0VOTk5OTk5OTk4nLCBbIC05ICAgICAgICAgIF0sICdudW46RVstOV18cGFkZGluZzpOTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdGTk5OTk5OTk5OJywgWyAtOCAgICAgICAgICBdLCAnbnVuOkZbLThdfHBhZGRpbmc6Tk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnR05OTk5OTk5OTicsIFsgLTcgICAgICAgICAgXSwgJ251bjpHWy03XXxwYWRkaW5nOk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0hOTk5OTk5OTk4nLCBbIC02ICAgICAgICAgIF0sICdudW46SFstNl18cGFkZGluZzpOTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdJTk5OTk5OTk5OJywgWyAtNSAgICAgICAgICBdLCAnbnVuOklbLTVdfHBhZGRpbmc6Tk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnSk5OTk5OTk5OTicsIFsgLTQgICAgICAgICAgXSwgJ251bjpKWy00XXxwYWRkaW5nOk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0tOTk5OTk5OTk4nLCBbIC0zICAgICAgICAgIF0sICdudW46S1stM118cGFkZGluZzpOTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdMTk5OTk5OTk5OJywgWyAtMiAgICAgICAgICBdLCAnbnVuOkxbLTJdfHBhZGRpbmc6Tk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnTU5OTk5OTk5OTicsIFsgLTEgICAgICAgICAgXSwgJ251bjpNWy0xXXxwYWRkaW5nOk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ05DNzlOTk5OTk4nLCBbIDAsIC0yMCAgICAgIF0sICd6ZXJvOk5bMF18bm51bTpDLDc5Wy0yMF18cGFkZGluZzpOTk5OTk4nLCAgICAgICAgICAgICBdXG4gICAgICBbICdOTk5OTk5OTk5OJywgWyAwICAgICAgICAgICBdLCAncGFkZGluZzpOTk5OTk5OTk5OWzBdJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnTlgyME5OTk5OTicsIFsgMCwgMjAgICAgICAgXSwgJ3plcm86TlswXXxwbnVtOlgsMjBbMjBdfHBhZGRpbmc6Tk5OTk5OJywgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ1dOTk5OTk5OTk4nLCBbIDkgICAgICAgICAgIF0sICdwdW46V1s5XXxwYWRkaW5nOk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdYMTBLTk5OTk5OJywgWyAxMCwgLTMgICAgICBdLCAncG51bTpYLDEwWzEwXXxudW46S1stM118cGFkZGluZzpOTk5OTk4nLCAgICAgICAgICAgICAgXVxuICAgICAgWyAnWDEwTE5OTk5OTicsIFsgMTAsIC0yICAgICAgXSwgJ3BudW06WCwxMFsxMF18bnVuOkxbLTJdfHBhZGRpbmc6Tk5OTk5OJywgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ1gxME1OTk5OTk4nLCBbIDEwLCAtMSAgICAgIF0sICdwbnVtOlgsMTBbMTBdfG51bjpNWy0xXXxwYWRkaW5nOk5OTk5OTicsICAgICAgICAgICAgICBdXG4gICAgICBbICdYMTBOTk5OTk5OJywgWyAxMCAgICAgICAgICBdLCAncG51bTpYLDEwWzEwXXxwYWRkaW5nOk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnWDEwT05OTk5OTicsIFsgMTAsIDEgICAgICAgXSwgJ3BudW06WCwxMFsxMF18cHVuOk9bMV18cGFkZGluZzpOTk5OTk4nLCAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ1gxMFgxME1OTk4nLCBbIDEwLCAxMCwgLTEgIF0sICdwbnVtOlgsMTBbMTBdfHBudW06WCwxMFsxMF18bnVuOk1bLTFdfHBhZGRpbmc6Tk5OJywgICBdXG4gICAgICBbICdYMTBYMTBOTk5OJywgWyAxMCwgMTAgICAgICBdLCAncG51bTpYLDEwWzEwXXxwbnVtOlgsMTBbMTBdfHBhZGRpbmc6Tk5OTicsICAgICAgICAgICAgXVxuICAgICAgWyAnWDEwWDIwTk5OTicsIFsgMTAsIDIwICAgICAgXSwgJ3BudW06WCwxMFsxMF18cG51bTpYLDIwWzIwXXxwYWRkaW5nOk5OTk4nLCAgICAgICAgICAgIF1cbiAgICAgIFsgJ1gyME5OTk5OTk4nLCBbIDIwICAgICAgICAgIF0sICdwbnVtOlgsMjBbMjBdfHBhZGRpbmc6Tk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdYMjBYMTBOTk5OJywgWyAyMCwgMTAgICAgICBdLCAncG51bTpYLDIwWzIwXXxwbnVtOlgsMTBbMTBdfHBhZGRpbmc6Tk5OTicsICAgICAgICAgICAgXVxuICAgICAgWyAnWDkwTk5OTk5OTicsIFsgOTAgICAgICAgICAgXSwgJ3BudW06WCw5MFs5MF18cGFkZGluZzpOTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ1k5MDBOTk5OTk4nLCBbIDkwMCAgICAgICAgIF0sICdwbnVtOlksOTAwWzkwMF18cGFkZGluZzpOTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdOTk5OTk5OTk4nLCAgWyAwICAgICAgICAgICBdLCAncGFkZGluZzpOTk5OTk5OTk5bMF0nLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnTk4nLCAgICAgICAgIFsgMCAgICAgICAgICAgXSwgJ3BhZGRpbmc6Tk5bMF0nLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ04nLCAgICAgICAgICBbIDAgICAgICAgICAgIF0sICdwYWRkaW5nOk5bMF0nLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdYMTAnLCAgICAgICAgWyAxMCAgICAgICAgICBdLCAncG51bTpYLDEwWzEwXScsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnSycsICAgICAgICAgIFsgLTMgICAgICAgICAgXSwgJ251bjpLWy0zXScsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGZvciBbIHNvcnRrZXksIGluZGV4X21hdGNoZXIsIHVuaXRfbWF0Y2hlciwgXSBpbiBwcm9iZXNfYW5kX21hdGNoZXJzXG4gICAgICAjIHVyZ2UgJ86paWx4aG9sX185NCcsIHJwciBzb3J0a2V5XG4gICAgICBsZXhlbWVzICAgICAgICAgPSBbXVxuICAgICAgdW5pdF9yZXN1bHQgICAgID0gW11cbiAgICAgIGluZGV4X3Jlc3VsdCAgICA9IFtdXG4gICAgICBmb3IgdW5pdCBpbiBob2xsZXJpdGhfMTBtdnAyLnBhcnNlIHNvcnRrZXlcbiAgICAgICAgeyBuYW1lLFxuICAgICAgICAgIGxldHRlcnMsXG4gICAgICAgICAgbWFudGlzc2EsXG4gICAgICAgICAgaW5kZXgsICAgIH0gPSB1bml0XG4gICAgICAgIHVuaXRfcnByICA9IFwiI3tuYW1lfToje2xldHRlcnN9XCJcbiAgICAgICAgdW5pdF9ycHIgKz0gXCIsI3ttYW50aXNzYX1cIiAgaWYgbWFudGlzc2E/XG4gICAgICAgIHVuaXRfcnByICs9IFwiWyN7aW5kZXh9XVwiICAgIGlmIGluZGV4P1xuICAgICAgICB1bml0X3Jlc3VsdC5wdXNoIHVuaXRfcnByXG4gICAgICAgIGluZGV4X3Jlc3VsdC5wdXNoIGluZGV4IGlmIGluZGV4P1xuICAgICAgdW5pdF9yZXN1bHQgICA9IHVuaXRfcmVzdWx0LmpvaW4gJ3wnXG4gICAgICBpbmZvICfOqWlseGhvbF9fOTUnLCBmXCIjeyggcnByIHVuaXRfcmVzdWx0ICkgKyAnLCd9Ojw1MGM7ICN7cnByIGluZGV4X3Jlc3VsdH1cIlxuICAgICAgQGVxICggzqlpbHhob2xfXzk2ID0gLT4gIHVuaXRfcmVzdWx0ICAgKSwgIHVuaXRfbWF0Y2hlclxuICAgICAgQGVxICggzqlpbHhob2xfXzk3ID0gLT4gaW5kZXhfcmVzdWx0ICAgKSwgaW5kZXhfbWF0Y2hlclxuICAgICAgIyBlY2hvIFsgc29ydGtleSwgaW5kZXhfcmVzdWx0LCB1bml0X3Jlc3VsdCwgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQHRocm93cyAoIM6paGxsdF9fOTggPSAtPiBob2xsZXJpdGhfMTBtdnAyLnBhcnNlICc1JyAgICAgICAgICksIC9ub3QgYSB2YWxpZCBzb3J0a2V5OiB1bmFibGUgdG8gcGFyc2UgJzUnIGluICc1Jy9cbiAgICBAdGhyb3dzICggzqlobGx0X185OSA9IC0+IGhvbGxlcml0aF8xMG12cDIucGFyc2UgJ8Okw7bDvCcgICAgICAgKSwgL25vdCBhIHZhbGlkIHNvcnRrZXk6IHVuYWJsZSB0byBwYXJzZSAnw6TDtsO8JyBpbiAnw6TDtsO8Jy9cbiAgICBAdGhyb3dzICggzqlobGx0XzEwMCA9IC0+IGhvbGxlcml0aF8xMG12cDIucGFyc2UgJ1k5MDDDpMO2w7wnICAgKSwgL25vdCBhIHZhbGlkIHNvcnRrZXk6IHVuYWJsZSB0byBwYXJzZSAnw6TDtsO8JyBpbiAnWTkwMMOkw7bDvCcvXG4gICAgIyBAdGhyb3dzICggzqlobGx0XzEwMSA9IC0+IGhvbGxlcml0aF8xMG12cDIuZGVjb2RlIG51bGwgICAgKSwgL2V4cGVjdGVkIGEgdGV4dC9cbiAgICAjIEB0aHJvd3MgKCDOqWhsbHRfMTAyID0gLT4gaG9sbGVyaXRoXzEwbXZwMi5kZWNvZGUgJycgICAgICApLCAvZXhwZWN0ZWQgYSBub24tZW1wdHkgdGV4dC9cbiAgICAjIEB0aHJvd3MgKCDOqWhsbHRfMTAzID0gLT4gaG9sbGVyaXRoXzEwbXZwMi5kZWNvZGUgJ8OEMTIzJyAgKSwgL2V4cGVjdGVkIGEgc29ydGtleS9cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCBAaG9sbGVyaXRoXG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgaDEwbXZwMl9kZWNvZGVfdW5pdHM6IEBob2xsZXJpdGguaDEwbXZwMl9kZWNvZGVfdW5pdHMsIH1cbiJdfQ==
