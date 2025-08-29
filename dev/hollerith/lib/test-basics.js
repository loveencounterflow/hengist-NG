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
        var entry, i, idx, j, len, len1, probe, probes, sk, Ωbsk__70;
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
          // debug 'Ωbsk__69', entry
          this.eq((Ωbsk__70 = function() {
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
      var Hollerith, _, equals, expected_indexes, hollerith_10, hollerith_10mvp, hollerith_128, i, idx, internals, j, k, l, len, len1, len2, m, pline, plines, probes, psk, real_indexes, shuffle, sk_matcher, type_of, uline, ulines, usk, vdx, Ωbsk__72, Ωbsk__74;
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
          // help 'Ωbsk__71', uline
          real_indexes.push(Number(uline.replace(/^.*?\s([0-9]+)$/, '$1')));
        }
        this.eq((Ωbsk__72 = function() {
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
          // help 'Ωbsk__73', pline
          real_indexes.push(Number(pline.replace(/^.*?\s([0-9]+)$/, '$1')));
        }
        this.eq((Ωbsk__74 = function() {
          return equals(expected_indexes, real_indexes);
        }), true);
      }
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    h10mvp2_sorting_2: function() {
      var Hollerith, _, equals, expected_indexes, hollerith_10, hollerith_10mvp2, hollerith_128, i, idx, internals, j, k, l, len, len1, len2, m, pline, plines, probes, psk, real_indexes, shuffle, sk_matcher, type_of, uline, ulines, usk, vdx, Ωbsk__75, Ωbsk__77, Ωbsk__79;
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
        this.eq((Ωbsk__75 = function() {
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
          // help 'Ωbsk__76', uline
          real_indexes.push(Number(uline.replace(/^.*?\s([0-9]+)$/, '$1')));
        }
        this.eq((Ωbsk__77 = function() {
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
          // help 'Ωbsk__78', pline
          real_indexes.push(Number(pline.replace(/^.*?\s([0-9]+)$/, '$1')));
        }
        this.eq((Ωbsk__79 = function() {
          return equals(expected_indexes, real_indexes);
        }), true);
      }
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    h10mvp2_sorting_2: function() {
      var Hollerith, _, equals, expected_indexes, hollerith_128, i, idx, internals, j, k, l, len, len1, len2, m, pline, plines, probes, psk, real_indexes, shuffle, sk_matcher, type_of, uline, ulines, usk, vdx, Ωbsk__80, Ωbsk__82, Ωbsk__84;
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
        this.eq((Ωbsk__80 = function() {
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
          // help 'Ωbsk__81', uline
          real_indexes.push(Number(uline.replace(/^.*?\s([0-9]+)$/, '$1')));
        }
        this.eq((Ωbsk__82 = function() {
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
            help('Ωbsk__83', rpr(pline));
          }
          real_indexes.push(Number(pline.replace(/^.*?\s([0-9]+)$/, '$1')));
        }
        this.eq((Ωbsk__84 = function() {
          return equals(expected_indexes, real_indexes);
        }), true);
      }
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    h10mvp2_decode: function() {
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
        debug('Ωbsk__83', rpr(hollerith_128.decode(probe)));
      }
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
      return (new Test(guytest_cfg)).test(this.hollerith);
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQTs7RUFFQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLFdBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxPQUhGLEVBSUUsR0FKRixDQUFBLEdBSTRCLEdBQUcsQ0FBQyxHQUpoQyxFQVpBOzs7RUFrQkEsSUFBQSxHQUE0QixPQUFBLENBQVEsMkJBQVI7O0VBQzVCLENBQUEsQ0FBRSxJQUFGLENBQUEsR0FBNEIsSUFBNUI7O0VBQ0EsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUI7O0VBQ0EsU0FBQSxHQUE0QixPQUFBLENBQVEsNkNBQVIsRUFyQjVCOzs7OztFQTRCQSxJQUFDLENBQUEsU0FBRCxHQUdFLENBQUE7O0lBQUEsU0FBQSxFQUFXLFFBQUEsQ0FBQSxDQUFBO0FBQ2IsVUFBQSxTQUFBLEVBQUEsTUFBQSxFQUFBLFlBQUEsRUFBQSxlQUFBLEVBQUEsYUFBQSxFQUFBLFNBQUEsRUFBQTtNQUFJLENBQUEsQ0FB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QUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWlDLENBQUMsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsSUFBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWlDLENBQUMsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsSUFBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWlDLENBQUMsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsSUFBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWlDLENBQUMsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsSUFBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWlDLENBQUMsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsSUFBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWlDLENBQUMsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsSUFBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWlDLENBQUMsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsSUFBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxD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aEIsQ0FBZ0MsQ0FBQyxFQUFqQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBd0IsQ0FBQyxFQUF6QixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBZ0MsQ0FBQyxFQUFqQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBd0IsQ0FBQyxFQUF6QixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBZ0MsQ0FBQyxFQUFqQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBd0IsQ0FBQyxFQUF6QixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBZ0MsQ0FBQyxFQUFqQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBd0IsQ0FBQyxFQUF6QixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBeUIsQ0FBQyxDQUExQixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBeUIsQ0FBQyxDQUExQixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBeUIsQ0FBQyxDQUExQixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBeUIsQ0FBQyxDQUExQixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBeUIsQ0FBQyxDQUExQixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBeUIsQ0FBQyxDQUExQixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBeUIsQ0FBQyxDQUExQixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBeUIsQ0FBQyxDQUExQixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdB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QTFCb0IsRUEyQnBCLENBQUUsWUFBRixFQUFnQixDQUFFLEVBQUYsRUFBTSxFQUFOLENBQWhCLENBM0JvQixFQTRCcEIsQ0FBRSxZQUFGLEVBQWdCLENBQUUsRUFBRixDQUFoQixDQTVCb0IsRUE2QnBCLENBQUUsWUFBRixFQUFnQixDQUFFLEVBQUYsRUFBTSxFQUFOLENBQWhCLENBN0JvQixFQThCcEIsQ0FBRSxZQUFGLEVBQWdCLENBQUUsRUFBRixDQUFoQixDQTlCb0IsRUErQnBCLENBQUUsWUFBRixFQUFnQixDQUFFLEdBQUYsQ0FBaEIsQ0EvQm9CLEVBTjFCOztNQXdDSSxLQUFBLHFEQUFBO1FBQUksQ0FBRSxLQUFGLEVBQVMsT0FBVDtRQUNGLEtBQUEsQ0FBTSxVQUFOLEVBQWtCLEdBQUEsQ0FBSSxhQUFhLENBQUMsTUFBZCxDQUFxQixLQUFyQixDQUFKLENBQWxCO01BREYsQ0F4Q0o7O0FBMkNJLGFBQU87SUE1Q087RUF4WWhCLEVBL0JGOzs7RUF3ZEEsSUFBRyxNQUFBLEtBQVUsT0FBTyxDQUFDLElBQXJCO0lBQStCLE1BQVMsQ0FBQSxDQUFBLENBQUEsR0FBQTtBQUN4QyxVQUFBO01BQUUsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixJQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixLQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO2FBQ2QsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QixJQUFDLENBQUEsU0FBL0I7SUFIc0MsQ0FBQSxJQUF4Qzs7QUF4ZEEiLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc3RyaWN0J1xuXG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2hvbGxlcml0aCdcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxuIyBXR1VZICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy93ZWJndXknXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2luZ2xlLWZpbGUtbW9kdWxlcydcblxuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuI1xuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AaG9sbGVyaXRoID1cblxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGludGVyZmFjZTogLT5cbiAgICB7IEhvbGxlcml0aCxcbiAgICAgIGhvbGxlcml0aF8xMCxcbiAgICAgIGhvbGxlcml0aF8xMG12cCxcbiAgICAgIGhvbGxlcml0aF8xMjgsXG4gICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X19fMSA9IC0+IHR5cGVfb2YgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgICAgICAgICAgICksICdmdW5jdGlvbidcbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X19fMiA9IC0+IHR5cGVfb2YgaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgICksICdmdW5jdGlvbidcbiAgICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoMTBtdnBfMTogLT5cbiAgICB7IEhvbGxlcml0aCxcbiAgICAgIGhvbGxlcml0aF8xMCxcbiAgICAgIGhvbGxlcml0aF8xMG12cCxcbiAgICAgIGhvbGxlcml0aF8xMjgsXG4gICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICAgICAoIM6pYW55YnRfX18zID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyIC05OTkgICApLCAnSzAwMCdcbiAgICBAZXEgICAgICggzqlhbnlidF9fXzQgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgIC05OSAgICksICdMMDAnXG4gICAgQGVxICAgICAoIM6pYW55YnRfX181ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAtOTAgICApLCAnTDA5J1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X19fNiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgLTExICAgKSwgJ0w4OCdcbiAgICBAZXEgICAgICggzqlhbnlidF9fXzcgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgIC0xMCAgICksICdMODknXG4gICAgQGVxICAgICAoIM6pYW55YnRfX184ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTkgICApLCAnTTAnXG4gICAgQGVxICAgICAoIM6pYW55YnRfX185ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTggICApLCAnTTEnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzEwID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTcgICApLCAnTTInXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzExID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTYgICApLCAnTTMnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzEyID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTUgICApLCAnTTQnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzEzID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTQgICApLCAnTTUnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzE0ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTMgICApLCAnTTYnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzE1ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTIgICApLCAnTTcnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzE2ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTEgICApLCAnTTgnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzE3ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgIDAgICApLCAnTidcbiAgICBAZXEgICAgICggzqlhbnlidF9fMTggPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAgMSAgICksICdPMSdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMTkgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICArOSAgICksICdPOSdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMjAgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICsxMCAgICksICdQMTAnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzIxID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICArMjAgICApLCAnUDIwJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18yMiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgKzkwICAgKSwgJ1A5MCdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMjMgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgIDEyMyAgICksICdRMTIzJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18yNCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciArOTAwICAgKSwgJ1E5MDAnXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGgxMG12cF8yOiAtPlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEwLFxuICAgICAgaG9sbGVyaXRoXzEwbXZwLFxuICAgICAgaG9sbGVyaXRoXzEyOCxcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgICAgICggzqlhbnlidF9fMjUgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgLTk5OSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgLTk5OVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X18yNiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgLTk5ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgLTk5XG4gICAgQGVxICAgICAoIM6pYW55YnRfXzI3ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAtOTAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAtOTBcbiAgICBAZXEgICAgICggzqlhbnlidF9fMjggPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgIC0xMSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgIC0xMVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X18yOSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgLTEwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgLTEwXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzMwID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTkgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgLTlcbiAgICBAZXEgICAgICggzqlhbnlidF9fMzEgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtOCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAtOFxuICAgIEBlcSAgICAgKCDOqWFueWJ0X18zMiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC03ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgIC03XG4gICAgQGVxICAgICAoIM6pYW55YnRfXzMzID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTYgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgLTZcbiAgICBAZXEgICAgICggzqlhbnlidF9fMzQgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtNSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAtNVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X18zNSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC00ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgIC00XG4gICAgQGVxICAgICAoIM6pYW55YnRfXzM2ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTMgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgLTNcbiAgICBAZXEgICAgICggzqlhbnlidF9fMzcgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtMiAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAtMlxuICAgIEBlcSAgICAgKCDOqWFueWJ0X18zOCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC0xICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgIC0xXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzM5ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgIDAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgIDBcbiAgICBAZXEgICAgICggzqlhbnlidF9fNDAgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAgMSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAgMVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X180MSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgICs5ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgICs5XG4gICAgQGVxICAgICAoIM6pYW55YnRfXzQyID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICArMTAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICArMTBcbiAgICBAZXEgICAgICggzqlhbnlidF9fNDMgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICsyMCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICsyMFxuICAgIEBlcSAgICAgKCDOqWFueWJ0X180NCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgKzkwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgKzkwXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzQ1ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAxMjMgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAxMjNcbiAgICBAZXEgICAgICggzqlhbnlidF9fNDYgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgKzkwMCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgKzkwMFxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoMTBtdnBfMzogLT5cbiAgICB7IEhvbGxlcml0aCxcbiAgICAgIGhvbGxlcml0aF8xMCxcbiAgICAgIGhvbGxlcml0aF8xMG12cCxcbiAgICAgIGhvbGxlcml0aF8xMjgsXG4gICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzQ3ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyIC05OTkgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgLTk5OSwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X180OCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgLTk5ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAtOTksIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNDkgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgIC05MCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgLTkwLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzUwID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAtMTEgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgIC0xMSwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X181MSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgLTEwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAtMTAsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNTIgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtOSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgIC05LCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzUzID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTggICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICAtOCwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X181NCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC03ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgLTcsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNTUgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtNiAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgIC02LCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzU2ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTUgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICAtNSwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X181NyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC00ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgLTQsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNTggPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtMyAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgIC0zLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzU5ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTIgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICAtMiwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X182MCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC0xICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgLTEsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNjEgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAgMCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgICAwLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzYyID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgIDEgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICAgMSwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X182MyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgICs5ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgKzksIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNjQgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICsxMCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgKzEwLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzY1ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICArMjAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICsyMCwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X182NiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgKzkwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICArOTAsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNjcgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgIDEyMyAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgMTIzLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzY4ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICs5MDAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgKzkwMCwgXVxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoMTBtdnBfc29ydGluZ18xOiAtPlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEwLFxuICAgICAgaG9sbGVyaXRoXzEwbXZwLFxuICAgICAgaG9sbGVyaXRoXzEyOCxcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBzb3J0ZWRfc2luZ2xlcyA9ICggcGFkZGluZyA9IG51bGwgKSA9PlxuICAgICAgcHJvYmVzID0gW1xuICAgICAgICBbIC05OTksIF1cbiAgICAgICAgWyAgLTk5LCBdXG4gICAgICAgIFsgIC05MCwgXVxuICAgICAgICBbICAtMTEsIF1cbiAgICAgICAgWyAgLTEwLCBdXG4gICAgICAgIFsgICAtOSwgXVxuICAgICAgICBbICAgLTgsIF1cbiAgICAgICAgWyAgIC03LCBdXG4gICAgICAgIFsgICAtNiwgXVxuICAgICAgICBbICAgLTUsIF1cbiAgICAgICAgWyAgIC00LCBdXG4gICAgICAgIFsgICAtMywgXVxuICAgICAgICBbICAgLTIsIF1cbiAgICAgICAgWyAgIC0xLCBdXG4gICAgICAgIFsgICAgMCwgXVxuICAgICAgICBbICAgIDEsIF1cbiAgICAgICAgWyAgICs5LCBdXG4gICAgICAgIFsgICsxMCwgXVxuICAgICAgICBbICArMjAsIF1cbiAgICAgICAgWyAgKzkwLCBdXG4gICAgICAgIFsgIDEyMywgXVxuICAgICAgICBbICs5MDAsIF1cbiAgICAgICAgXVxuICAgICAgZm9yIHByb2JlLCBpZHggaW4gcHJvYmVzXG4gICAgICAgIHNrICAgICAgICAgICAgPSBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIHByb2JlXG4gICAgICAgIHNrICAgICAgICAgICAgPSBzay5wYWRFbmQgcGFkZGluZywgaG9sbGVyaXRoXzEwbXZwLmNmZy56cHVuc1sgMCBdIGlmIHBhZGRpbmc/XG4gICAgICAgIHByb2Jlc1sgaWR4IF0gPSB7IHNrLCBwcm9iZSwgaWR4LCB9XG4gICAgICBwcm9iZXMuc29ydCAoIGEsIGIgKSAtPlxuICAgICAgICByZXR1cm4gLTEgaWYgYS5zayA8IGIuc2tcbiAgICAgICAgcmV0dXJuICsxIGlmIGEuc2sgPiBiLnNrXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICBmb3IgZW50cnksIGlkeCBpbiBwcm9iZXNcbiAgICAgICAgIyBkZWJ1ZyAnzqlic2tfXzY5JywgZW50cnlcbiAgICAgICAgQGVxICggzqlic2tfXzcwID0gLT4gZW50cnkuaWR4ICksIGlkeFxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHNvcnRlZF9zaW5nbGVzIG51bGxcbiAgICBzb3J0ZWRfc2luZ2xlcyAxMFxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoMTBtdnBfc29ydGluZ18yOiAtPlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEwLFxuICAgICAgaG9sbGVyaXRoXzEwbXZwLFxuICAgICAgaG9sbGVyaXRoXzEyOCxcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwcm9iZXMgPSBbXG4gICAgICBbIFsgLTk5OSwgICAgICAgICAgIF0sICdLMDAwJywgICAgICBdXG4gICAgICBbIFsgIC05OSwgICAgICAgICAgIF0sICdMMDAnLCAgICAgICBdXG4gICAgICBbIFsgIC05MCwgICAgICAgICAgIF0sICdMMDknLCAgICAgICBdXG4gICAgICBbIFsgIC0xMSwgICAgICAgICAgIF0sICdMODgnLCAgICAgICBdXG4gICAgICBbIFsgIC0xMCwgICAgICAgICAgIF0sICdMODknLCAgICAgICBdXG4gICAgICBbIFsgICAtOSwgICAgICAgICAgIF0sICdNMCcsICAgICAgICBdXG4gICAgICBbIFsgICAtOCwgICAgICAgICAgIF0sICdNMScsICAgICAgICBdXG4gICAgICBbIFsgICAtNywgICAgICAgICAgIF0sICdNMicsICAgICAgICBdXG4gICAgICBbIFsgICAtNiwgICAgICAgICAgIF0sICdNMycsICAgICAgICBdXG4gICAgICBbIFsgICAtNSwgICAgICAgICAgIF0sICdNNCcsICAgICAgICBdXG4gICAgICBbIFsgICAtNCwgICAgICAgICAgIF0sICdNNScsICAgICAgICBdXG4gICAgICBbIFsgICAtMywgICAgICAgICAgIF0sICdNNicsICAgICAgICBdXG4gICAgICBbIFsgICAtMiwgICAgICAgICAgIF0sICdNNycsICAgICAgICBdXG4gICAgICBbIFsgICAtMSwgICAgICAgICAgIF0sICdNOCcsICAgICAgICBdXG4gICAgICBbIFsgICArMCwgIC0yMCwgICAgIF0sICdOTDIwJywgICAgICBdXG4gICAgICBbIFsgICArMCwgICAgICAgICAgIF0sICdOJywgICAgICAgICBdXG4gICAgICBbIFsgICArMCwgICsyMCwgICAgIF0sICdOUDIwJywgICAgICBdXG4gICAgICBbIFsgICArOSwgICAgICAgICAgIF0sICdPOScsICAgICAgICBdXG4gICAgICBbIFsgICsxMCwgICAtMywgICAgIF0sICdQMTBNNicsICAgICBdXG4gICAgICBbIFsgICsxMCwgICAtMiwgICAgIF0sICdQMTBNNycsICAgICBdXG4gICAgICBbIFsgICsxMCwgICAtMSwgICAgIF0sICdQMTBNOCcsICAgICBdXG4gICAgICBbIFsgICsxMCwgICAgICAgICAgIF0sICdQMTAnLCAgICAgICBdXG4gICAgICBbIFsgICsxMCwgICArMCwgICAgIF0sICdQMTBOJywgICAgICBdXG4gICAgICBbIFsgICsxMCwgICArMSwgICAgIF0sICdQMTBPMScsICAgICBdXG4gICAgICBbIFsgICsxMCwgICsxMCwgLTEsIF0sICdQMTBQMTBNOCcsICBdXG4gICAgICBbIFsgICsxMCwgICsxMCwgICAgIF0sICdQMTBQMTAnLCAgICBdXG4gICAgICBbIFsgICsxMCwgICsyMCwgICAgIF0sICdQMTBQMjAnLCAgICBdXG4gICAgICBbIFsgICsyMCwgICAgICAgICAgIF0sICdQMjAnLCAgICAgICBdXG4gICAgICBbIFsgICsyMCwgICsxMCwgICAgIF0sICdQMjBQMTAnLCAgICBdXG4gICAgICBbIFsgICs5MCwgICAgICAgICAgIF0sICdQOTAnLCAgICAgICBdXG4gICAgICBbIFsgKzkwMCwgICAgICAgICAgIF0sICdROTAwJywgICAgICBdXG4gICAgICBdXG4gICAgdWxpbmVzICAgICAgICAgICAgPSBbXVxuICAgIHBsaW5lcyAgICAgICAgICAgID0gW11cbiAgICBleHBlY3RlZF9pbmRleGVzICA9ICggaWR4IGZvciBpZHggaW4gWyAwIC4uLiBwcm9iZXMubGVuZ3RoIF0gKVxuICAgIHNodWZmbGUgICAgICAgICAgID0gR1VZLnJuZC5nZXRfc2h1ZmZsZSA1NywgODhcbiAgICBmb3IgWyB2ZHgsIHNrX21hdGNoZXIsIF0sIGlkeCBpbiBwcm9iZXNcbiAgICAgIHVzayAgID0gaG9sbGVyaXRoXzEwbXZwLmVuY29kZSB2ZHhcbiAgICAgIHBzayAgID0gdXNrLnBhZEVuZCAxMCwgaG9sbGVyaXRoXzEwbXZwLmNmZy56cHVuc1sgMCBdXG4gICAgICB1c2sgICA9IHVzay5wYWRFbmQgMTAsICcgJ1xuICAgICAgdWxpbmVzLnB1c2ggXCIje3Vza30gI3tycHIgdmR4fSAje2lkeH1cIlxuICAgICAgcGxpbmVzLnB1c2ggXCIje3Bza30gI3tycHIgdmR4fSAje2lkeH1cIlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZm9yIF8gaW4gWyAxIC4uIDEwIF1cbiAgICAgIHVsaW5lcyA9IHNodWZmbGUgdWxpbmVzXG4gICAgICB1bGluZXMuc29ydCgpXG4gICAgICByZWFsX2luZGV4ZXMgPSBbXVxuICAgICAgZm9yIHVsaW5lIGluIHVsaW5lc1xuICAgICAgICAjIGhlbHAgJ86pYnNrX183MScsIHVsaW5lXG4gICAgICAgIHJlYWxfaW5kZXhlcy5wdXNoIE51bWJlciB1bGluZS5yZXBsYWNlIC9eLio/XFxzKFswLTldKykkLywgJyQxJ1xuICAgICAgQGVxICggzqlic2tfXzcyID0gLT4gZXF1YWxzIGV4cGVjdGVkX2luZGV4ZXMsIHJlYWxfaW5kZXhlcyApLCBmYWxzZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZm9yIF8gaW4gWyAxIC4uIDEwIF1cbiAgICAgIHBsaW5lcyA9IHNodWZmbGUgcGxpbmVzXG4gICAgICBwbGluZXMuc29ydCgpXG4gICAgICByZWFsX2luZGV4ZXMgPSBbXVxuICAgICAgZm9yIHBsaW5lIGluIHBsaW5lc1xuICAgICAgICAjIGhlbHAgJ86pYnNrX183MycsIHBsaW5lXG4gICAgICAgIHJlYWxfaW5kZXhlcy5wdXNoIE51bWJlciBwbGluZS5yZXBsYWNlIC9eLio/XFxzKFswLTldKykkLywgJyQxJ1xuICAgICAgQGVxICggzqlic2tfXzc0ID0gLT4gZXF1YWxzIGV4cGVjdGVkX2luZGV4ZXMsIHJlYWxfaW5kZXhlcyApLCB0cnVlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaDEwbXZwMl9zb3J0aW5nXzI6IC0+XG4gICAgeyBIb2xsZXJpdGgsXG4gICAgICBob2xsZXJpdGhfMTAsXG4gICAgICBob2xsZXJpdGhfMTBtdnAyLFxuICAgICAgaG9sbGVyaXRoXzEyOCxcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwcm9iZXMgPSBbXG4gICAgICBbIFsgLTk5OSwgICAgICAgICAgIF0sICdCMDAwJywgICAgICAgIF1cbiAgICAgIFsgWyAgLTk5LCAgICAgICAgICAgXSwgJ0MwMCcsICAgICAgICAgXVxuICAgICAgWyBbICAtOTAsICAgICAgICAgICBdLCAnQzA5JywgICAgICAgICBdXG4gICAgICBbIFsgIC0xMSwgICAgICAgICAgIF0sICdDODgnLCAgICAgICAgIF1cbiAgICAgIFsgWyAgLTEwLCAgICAgICAgICAgXSwgJ0M4OScsICAgICAgICAgXVxuICAgICAgWyBbICAgLTksICAgICAgICAgICBdLCAnRScsICAgICAgICAgICBdXG4gICAgICBbIFsgICAtOCwgICAgICAgICAgIF0sICdGJywgICAgICAgICAgIF1cbiAgICAgIFsgWyAgIC03LCAgICAgICAgICAgXSwgJ0cnLCAgICAgICAgICAgXVxuICAgICAgWyBbICAgLTYsICAgICAgICAgICBdLCAnSCcsICAgICAgICAgICBdXG4gICAgICBbIFsgICAtNSwgICAgICAgICAgIF0sICdJJywgICAgICAgICAgIF1cbiAgICAgIFsgWyAgIC00LCAgICAgICAgICAgXSwgJ0onLCAgICAgICAgICAgXVxuICAgICAgWyBbICAgLTMsICAgICAgICAgICBdLCAnSycsICAgICAgICAgICBdXG4gICAgICBbIFsgICAtMiwgICAgICAgICAgIF0sICdMJywgICAgICAgICAgIF1cbiAgICAgIFsgWyAgIC0xLCAgICAgICAgICAgXSwgJ00nLCAgICAgICAgICAgXVxuICAgICAgWyBbICAgKzAsICAtMjAsICAgICBdLCAnTkM3OScsICAgICAgICBdXG4gICAgICBbIFsgICArMCwgICAgICAgICAgIF0sICdOJywgICAgICAgICAgIF1cbiAgICAgIFsgWyAgICswLCAgKzIwLCAgICAgXSwgJ05YMjAnLCAgICAgICAgXVxuICAgICAgWyBbICAgKzksICAgICAgICAgICBdLCAnVycsICAgICAgICAgICBdXG4gICAgICBbIFsgICsxMCwgICAtMywgICAgIF0sICdYMTBLJywgICAgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgIC0yLCAgICAgXSwgJ1gxMEwnLCAgICAgICAgXVxuICAgICAgWyBbICArMTAsICAgLTEsICAgICBdLCAnWDEwTScsICAgICAgICBdXG4gICAgICBbIFsgICsxMCwgICAgICAgICAgIF0sICdYMTAnLCAgICAgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgICswLCAgICAgXSwgJ1gxME4nLCAgICAgICAgXVxuICAgICAgWyBbICArMTAsICAgKzEsICAgICBdLCAnWDEwTycsICAgICAgICBdXG4gICAgICBbIFsgICsxMCwgICsxMCwgLTEsIF0sICdYMTBYMTBNJywgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgKzEwLCAgICAgXSwgJ1gxMFgxMCcsICAgICAgXVxuICAgICAgWyBbICArMTAsICArMjAsICAgICBdLCAnWDEwWDIwJywgICAgICBdXG4gICAgICBbIFsgICsyMCwgICAgICAgICAgIF0sICdYMjAnLCAgICAgICAgIF1cbiAgICAgIFsgWyAgKzIwLCAgKzEwLCAgICAgXSwgJ1gyMFgxMCcsICAgICAgXVxuICAgICAgWyBbICArOTAsICAgICAgICAgICBdLCAnWDkwJywgICAgICAgICBdXG4gICAgICBbIFsgKzkwMCwgICAgICAgICAgIF0sICdZOTAwJywgICAgICAgIF1cbiAgICAgIF1cbiAgICB1bGluZXMgICAgICAgICAgICA9IFtdXG4gICAgcGxpbmVzICAgICAgICAgICAgPSBbXVxuICAgIGV4cGVjdGVkX2luZGV4ZXMgID0gKCBpZHggZm9yIGlkeCBpbiBbIDAgLi4uIHByb2Jlcy5sZW5ndGggXSApXG4gICAgc2h1ZmZsZSAgICAgICAgICAgPSBHVVkucm5kLmdldF9zaHVmZmxlIDU3LCA4OFxuICAgIGZvciBbIHZkeCwgc2tfbWF0Y2hlciwgXSwgaWR4IGluIHByb2Jlc1xuICAgICAgdXNrICAgPSBob2xsZXJpdGhfMTBtdnAyLmVuY29kZSB2ZHhcbiAgICAgIEBlcSAoIM6pYnNrX183NSA9IC0+IHVzayApLCBza19tYXRjaGVyXG4gICAgICBwc2sgICA9IHVzay5wYWRFbmQgMTAsIGhvbGxlcml0aF8xMG12cDIuY2ZnLnpwdW5zWyAwIF1cbiAgICAgIHVzayAgID0gdXNrLnBhZEVuZCAxMCwgJyAnXG4gICAgICB1bGluZXMucHVzaCBcIiN7dXNrfSAje3JwciB2ZHh9ICN7aWR4fVwiXG4gICAgICBwbGluZXMucHVzaCBcIiN7cHNrfSAje3JwciB2ZHh9ICN7aWR4fVwiXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmb3IgXyBpbiBbIDEgLi4gMTAgXVxuICAgICAgdWxpbmVzID0gc2h1ZmZsZSB1bGluZXNcbiAgICAgIHVsaW5lcy5zb3J0KClcbiAgICAgIHJlYWxfaW5kZXhlcyA9IFtdXG4gICAgICBmb3IgdWxpbmUgaW4gdWxpbmVzXG4gICAgICAgICMgaGVscCAnzqlic2tfXzc2JywgdWxpbmVcbiAgICAgICAgcmVhbF9pbmRleGVzLnB1c2ggTnVtYmVyIHVsaW5lLnJlcGxhY2UgL14uKj9cXHMoWzAtOV0rKSQvLCAnJDEnXG4gICAgICBAZXEgKCDOqWJza19fNzcgPSAtPiBlcXVhbHMgZXhwZWN0ZWRfaW5kZXhlcywgcmVhbF9pbmRleGVzICksIGZhbHNlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmb3IgXyBpbiBbIDEgLi4gMTAgXVxuICAgICAgcGxpbmVzID0gc2h1ZmZsZSBwbGluZXNcbiAgICAgIHBsaW5lcy5zb3J0KClcbiAgICAgIHJlYWxfaW5kZXhlcyA9IFtdXG4gICAgICBmb3IgcGxpbmUgaW4gcGxpbmVzXG4gICAgICAgICMgaGVscCAnzqlic2tfXzc4JywgcGxpbmVcbiAgICAgICAgcmVhbF9pbmRleGVzLnB1c2ggTnVtYmVyIHBsaW5lLnJlcGxhY2UgL14uKj9cXHMoWzAtOV0rKSQvLCAnJDEnXG4gICAgICBAZXEgKCDOqWJza19fNzkgPSAtPiBlcXVhbHMgZXhwZWN0ZWRfaW5kZXhlcywgcmVhbF9pbmRleGVzICksIHRydWVcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoMTBtdnAyX3NvcnRpbmdfMjogLT5cbiAgICB7IEhvbGxlcml0aCxcbiAgICAgIGhvbGxlcml0aF8xMjgsXG4gICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcHJvYmVzID0gW1xuICAgICAgWyBbIC05OTksICAgICAgICAgICBdLCAnw43CvzsnLCAgICAgXVxuICAgICAgWyBbICAtOTksICAgICAgICAgICBdLCAnw44/JywgICAgICBdXG4gICAgICBbIFsgIC05MCwgICAgICAgICAgIF0sICfDjkgnLCAgICAgIF1cbiAgICAgIFsgWyAgLTExLCAgICAgICAgICAgXSwgJ8OYJywgICAgICAgXVxuICAgICAgWyBbICAtMTAsICAgICAgICAgICBdLCAnw5knLCAgICAgICBdXG4gICAgICBbIFsgICAtOSwgICAgICAgICAgIF0sICfDmicsICAgICAgIF1cbiAgICAgIFsgWyAgIC04LCAgICAgICAgICAgXSwgJ8ObJywgICAgICAgXVxuICAgICAgWyBbICAgLTcsICAgICAgICAgICBdLCAnw5wnLCAgICAgICBdXG4gICAgICBbIFsgICAtNiwgICAgICAgICAgIF0sICfDnScsICAgICAgIF1cbiAgICAgIFsgWyAgIC01LCAgICAgICAgICAgXSwgJ8OeJywgICAgICAgXVxuICAgICAgWyBbICAgLTQsICAgICAgICAgICBdLCAnw58nLCAgICAgICBdXG4gICAgICBbIFsgICAtMywgICAgICAgICAgIF0sICfDoCcsICAgICAgIF1cbiAgICAgIFsgWyAgIC0yLCAgICAgICAgICAgXSwgJ8OhJywgICAgICAgXVxuICAgICAgWyBbICAgLTEsICAgICAgICAgICBdLCAnw6InLCAgICAgICBdXG4gICAgICBbIFsgICArMCwgIC0yMCwgICAgIF0sICfDo8OPJywgICAgICBdXG4gICAgICBbIFsgICArMCwgICAgICAgICAgIF0sICfDoycsICAgICAgIF1cbiAgICAgIFsgWyAgICswLCAgKzIwLCAgICAgXSwgJ8Ojw7cnLCAgICAgIF1cbiAgICAgIFsgWyAgICs5LCAgICAgICAgICAgXSwgJ8OsJywgICAgICAgXVxuICAgICAgWyBbICArMTAsICAgLTMsICAgICBdLCAnw63DoCcsICAgICAgXVxuICAgICAgWyBbICArMTAsICAgLTIsICAgICBdLCAnw63DoScsICAgICAgXVxuICAgICAgWyBbICArMTAsICAgLTEsICAgICBdLCAnw63DoicsICAgICAgXVxuICAgICAgWyBbICArMTAsICAgICAgICAgICBdLCAnw60nLCAgICAgICBdXG4gICAgICBbIFsgICsxMCwgICArMCwgICAgIF0sICfDrcOjJywgICAgICBdXG4gICAgICBbIFsgICsxMCwgICArMSwgICAgIF0sICfDrcOkJywgICAgICBdXG4gICAgICBbIFsgICsxMCwgICsxMCwgLTEsIF0sICfDrcOtw6InLCAgICAgXVxuICAgICAgWyBbICArMTAsICArMTAsICAgICBdLCAnw63DrScsICAgICAgXVxuICAgICAgWyBbICArMTAsICArMjAsICAgICBdLCAnw63DtycsICAgICAgXVxuICAgICAgWyBbICArMjAsICAgICAgICAgICBdLCAnw7cnLCAgICAgICBdXG4gICAgICBbIFsgICsyMCwgICsxMCwgICAgIF0sICfDt8OtJywgICAgICBdXG4gICAgICBbIFsgICs5MCwgICAgICAgICAgIF0sICfDuH4nLCAgICAgIF1cbiAgICAgIFsgWyArOTAwLCAgICAgICAgICAgXSwgJ8O5KiYnLCAgICAgXVxuICAgICAgXVxuICAgIHVsaW5lcyAgICAgICAgICAgID0gW11cbiAgICBwbGluZXMgICAgICAgICAgICA9IFtdXG4gICAgZXhwZWN0ZWRfaW5kZXhlcyAgPSAoIGlkeCBmb3IgaWR4IGluIFsgMCAuLi4gcHJvYmVzLmxlbmd0aCBdIClcbiAgICBzaHVmZmxlICAgICAgICAgICA9IEdVWS5ybmQuZ2V0X3NodWZmbGUgNTcsIDg4XG4gICAgZm9yIFsgdmR4LCBza19tYXRjaGVyLCBdLCBpZHggaW4gcHJvYmVzXG4gICAgICB1c2sgICA9IGhvbGxlcml0aF8xMjguZW5jb2RlIHZkeFxuICAgICAgQGVxICggzqlic2tfXzgwID0gLT4gdXNrICksIHNrX21hdGNoZXJcbiAgICAgICMgZWNobyBycHIgdXNrXG4gICAgICBwc2sgICA9IHVzay5wYWRFbmQgMTAsIGhvbGxlcml0aF8xMjguY2ZnLnpwdW5zWyAwIF1cbiAgICAgIHVzayAgID0gdXNrLnBhZEVuZCAxMCwgJyAnXG4gICAgICB1bGluZXMucHVzaCBcIiN7dXNrfSAje3JwciB2ZHh9ICN7aWR4fVwiXG4gICAgICBwbGluZXMucHVzaCBcIiN7cHNrfSAje3JwciB2ZHh9ICN7aWR4fVwiXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmb3IgXyBpbiBbIDEgLi4gMTAgXVxuICAgICAgdWxpbmVzID0gc2h1ZmZsZSB1bGluZXNcbiAgICAgIHVsaW5lcy5zb3J0KClcbiAgICAgIHJlYWxfaW5kZXhlcyA9IFtdXG4gICAgICBmb3IgdWxpbmUgaW4gdWxpbmVzXG4gICAgICAgICMgaGVscCAnzqlic2tfXzgxJywgdWxpbmVcbiAgICAgICAgcmVhbF9pbmRleGVzLnB1c2ggTnVtYmVyIHVsaW5lLnJlcGxhY2UgL14uKj9cXHMoWzAtOV0rKSQvLCAnJDEnXG4gICAgICBAZXEgKCDOqWJza19fODIgPSAtPiBlcXVhbHMgZXhwZWN0ZWRfaW5kZXhlcywgcmVhbF9pbmRleGVzICksIGZhbHNlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmb3IgXyBpbiBbIDEgLi4gMTAgXVxuICAgICAgcGxpbmVzID0gc2h1ZmZsZSBwbGluZXNcbiAgICAgIHBsaW5lcy5zb3J0KClcbiAgICAgIHJlYWxfaW5kZXhlcyA9IFtdXG4gICAgICBmb3IgcGxpbmUsIGlkeCBpbiBwbGluZXNcbiAgICAgICAgaGVscCAnzqlic2tfXzgzJywgcnByIHBsaW5lIGlmIF8gaXMgMVxuICAgICAgICByZWFsX2luZGV4ZXMucHVzaCBOdW1iZXIgcGxpbmUucmVwbGFjZSAvXi4qP1xccyhbMC05XSspJC8sICckMSdcbiAgICAgIEBlcSAoIM6pYnNrX184NCA9IC0+IGVxdWFscyBleHBlY3RlZF9pbmRleGVzLCByZWFsX2luZGV4ZXMgKSwgdHJ1ZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGgxMG12cDJfZGVjb2RlOiAtPlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEyOCxcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwcm9iZXNfYW5kX21hdGNoZXJzID0gW1xuICAgICAgWyAnw43CvzvDo8Ojw6PDo8Ojw6PDoycsIFsgLTk5OSwgICAgICAgICBdIF1cbiAgICAgIFsgJ8OOP8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC05OSwgICAgICAgICAgXSBdXG4gICAgICBbICfDjkjDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtOTAsICAgICAgICAgIF0gXVxuICAgICAgWyAnw5jDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC0xMSwgICAgICAgICAgXSBdXG4gICAgICBbICfDmcOjw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTEwLCAgICAgICAgICBdIF1cbiAgICAgIFsgJ8Oaw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtOSwgICAgICAgICAgIF0gXVxuICAgICAgWyAnw5vDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC04LCAgICAgICAgICAgXSBdXG4gICAgICBbICfDnMOjw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTcsICAgICAgICAgICBdIF1cbiAgICAgIFsgJ8Odw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtNiwgICAgICAgICAgIF0gXVxuICAgICAgWyAnw57Do8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC01LCAgICAgICAgICAgXSBdXG4gICAgICBbICfDn8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTQsICAgICAgICAgICBdIF1cbiAgICAgIFsgJ8Ogw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtMywgICAgICAgICAgIF0gXVxuICAgICAgWyAnw6HDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC0yLCAgICAgICAgICAgXSBdXG4gICAgICBbICfDosOjw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTEsICAgICAgICAgICBdIF1cbiAgICAgIFsgJ8Ojw4/Do8Ojw6PDo8Ojw6PDo8OjJywgWyAwLCAtMjAsICAgICAgIF0gXVxuICAgICAgWyAnw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIDAsICAgICAgICAgICAgXSBdXG4gICAgICBbICfDo8O3w6PDo8Ojw6PDo8Ojw6PDoycsIFsgMCwgMjAsICAgICAgICBdIF1cbiAgICAgIFsgJ8Osw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyA5LCAgICAgICAgICAgIF0gXVxuICAgICAgWyAnw63DoMOjw6PDo8Ojw6PDo8Ojw6MnLCBbIDEwLCAtMywgICAgICAgXSBdXG4gICAgICBbICfDrcOhw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMTAsIC0yLCAgICAgICBdIF1cbiAgICAgIFsgJ8Otw6LDo8Ojw6PDo8Ojw6PDo8OjJywgWyAxMCwgLTEsICAgICAgIF0gXVxuICAgICAgWyAnw63Do8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIDEwLCAgICAgICAgICAgXSBdXG4gICAgICBbICfDrcOjw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMTAsIDAsICAgICAgICBdIF1cbiAgICAgIFsgJ8Otw6TDo8Ojw6PDo8Ojw6PDo8OjJywgWyAxMCwgMSwgICAgICAgIF0gXVxuICAgICAgWyAnw63DrcOiw6PDo8Ojw6PDo8Ojw6MnLCBbIDEwLCAxMCwgLTEsICAgXSBdXG4gICAgICBbICfDrcOtw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMTAsIDEwLCAgICAgICBdIF1cbiAgICAgIFsgJ8Otw7fDo8Ojw6PDo8Ojw6PDo8OjJywgWyAxMCwgMjAsICAgICAgIF0gXVxuICAgICAgWyAnw7fDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIDIwLCAgICAgICAgICAgXSBdXG4gICAgICBbICfDt8Otw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMjAsIDEwLCAgICAgICBdIF1cbiAgICAgIFsgJ8O4fsOjw6PDo8Ojw6PDo8Ojw6MnLCBbIDkwLCAgICAgICAgICAgXSBdXG4gICAgICBbICfDuSomw6PDo8Ojw6PDo8Ojw6MnLCBbIDkwMCwgICAgICAgICAgXSBdXG4gICAgICBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmb3IgWyBwcm9iZSwgbWF0Y2hlciwgXSBpbiBwcm9iZXNfYW5kX21hdGNoZXJzXG4gICAgICBkZWJ1ZyAnzqlic2tfXzgzJywgcnByIGhvbGxlcml0aF8xMjguZGVjb2RlIHByb2JlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgQGhvbGxlcml0aFxuIl19
