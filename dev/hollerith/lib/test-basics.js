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
        for (_ = i = 0, ref = get_rnd_length(); (0 <= ref ? i <= ref : i >= ref); _ = 0 <= ref ? ++i : --i) {
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
      var Hollerith, _, equals, get_random_vdx, hollerith_10mvp2, i, internals, len, probe_count, probes, probes_2, type_of, vdx;
      ({Hollerith, hollerith_10mvp2, internals} = require('../../../apps/hollerith'));
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({
        isDeepStrictEqual: equals
      } = require('node:util'));
      get_random_vdx = helpers.get_random_vdx_producer();
      probe_count = 5;
      //.......................................................................................................
      probes = [
        (function() {
          var i,
        ref,
        results;
          results = [];
          for (_ = i = 0, ref = probe_count; (0 <= ref ? i <= ref : i >= ref); _ = 0 <= ref ? ++i : --i) {
            results.push(get_random_vdx());
          }
          return results;
        })()
      ];
      probes_2 = probes.slice(0);
      debug('Ωhllt__90', probes);
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
        debug('Ωhllt__91', vdx);
      }
      // ulines            = []
      // plines            = []
      // expected_indexes  = ( idx for idx in [ 0 ... probes.length ] )
      // for [ vdx, sk_matcher, ], idx in probes
      //   usk   = hollerith_10mvp2.encode vdx
      //   @eq ( Ωhllt__92 = -> usk ), sk_matcher
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
      //     # help 'Ωhllt__93', uline
      //     real_indexes.push Number uline.replace /^.*?\s([0-9]+)$/, '$1'
      //   @eq ( Ωhllt__94 = -> equals expected_indexes, real_indexes ), false
      // #.......................................................................................................
      // for _ in [ 1 .. 10 ]
      //   plines = shuffle plines
      //   plines.sort()
      //   real_indexes = []
      //   for pline in plines
      //     # help 'Ωhllt__95', pline
      //     real_indexes.push Number pline.replace /^.*?\s([0-9]+)$/, '$1'
      //   @eq ( Ωhllt__96 = -> equals expected_indexes, real_indexes ), true
      // #.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    h128_16383_sorting_2: function() {
      var Hollerith, _, codec, equals, expected_indexes, hollerith_128_16383, i, idx, internals, j, k, l, len, len1, len2, m, padded_lines, pline, probes, psk, real_indexes, shuffle, sk_matcher, type_of, uline, unpadded_lines, usk, vdx, Ωhllt_100, Ωhllt_101, Ωhllt_102, Ωhllt_103, Ωhllt_104, Ωhllt_105, Ωhllt_106, Ωhllt_107, Ωhllt_108, Ωhllt_109, Ωhllt_110, Ωhllt_111, Ωhllt_112, Ωhllt_113, Ωhllt_114, Ωhllt_115, Ωhllt_116, Ωhllt_117, Ωhllt_118, Ωhllt_119, Ωhllt_120, Ωhllt_121, Ωhllt_122, Ωhllt_123, Ωhllt_124, Ωhllt_125, Ωhllt_126, Ωhllt_127, Ωhllt_128, Ωhllt_129, Ωhllt_130, Ωhllt_131, Ωhllt_132, Ωhllt_133, Ωhllt_134, Ωhllt_135, Ωhllt_136, Ωhllt_137, Ωhllt_138, Ωhllt_139, Ωhllt_140, Ωhllt_141, Ωhllt_142, Ωhllt_143, Ωhllt_144, Ωhllt_145, Ωhllt_146, Ωhllt_147, Ωhllt_148, Ωhllt_149, Ωhllt_150, Ωhllt_151, Ωhllt_152, Ωhllt_154, Ωhllt_156, Ωhllt__99;
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
      // debug 'Ωhllt__97', codec.cfg._max_digits_per_idx
      // debug 'Ωhllt__98', codec.cfg.zero_pad_length
      this.eq((Ωhllt__99 = function() {
        return codec.cfg.base;
      }), 128);
      this.eq((Ωhllt_100 = function() {
        return codec.cfg._max_integer;
      }), +16383);
      this.eq((Ωhllt_101 = function() {
        return codec.cfg._min_integer;
      }), -16383);
      this.eq((Ωhllt_102 = function() {
        return codec.cfg.pmag_chrs[2];
      }), 'ù');
      this.eq((Ωhllt_103 = function() {
        return codec.cfg.nmag_chrs[2];
      }), 'Í');
      this.eq((Ωhllt_104 = function() {
        return codec.encode(codec.cfg._max_integer);
      }), 'ùÆÆ');
      this.eq((Ωhllt_105 = function() {
        return codec.encode(codec.cfg._min_integer);
      }), 'Í!!');
      this.eq((Ωhllt_106 = function() {
        return codec.decode('Í!!');
      }), [-16383]);
      this.throws((Ωhllt_107 = function() {
        return codec.decode('Ç!!!!!!!!');
      }), /not a valid sortkey/);
//.......................................................................................................
      for (idx = i = 0, len = probes.length; i < len; idx = ++i) {
        [vdx, sk_matcher] = probes[idx];
        usk = codec.encode(vdx);
        this.eq((Ωhllt_108 = function() {
          return usk;
        }), sk_matcher);
        // echo rpr usk
        psk = usk.padEnd(10, codec.cfg._cipher);
        usk = usk.padEnd(10, ' ');
        unpadded_lines.push(`${usk} ${rpr(vdx)} ${idx}`);
        padded_lines.push(`${psk} ${rpr(vdx)} ${idx}`);
      }
      //.......................................................................................................
      this.eq((Ωhllt_109 = function() {
        return codec.cfg._max_digits_per_idx;
      }), 2);
      this.eq((Ωhllt_110 = function() {
        return codec.cfg.zpun_max;
      }), 20);
      this.eq((Ωhllt_111 = function() {
        return codec.cfg._naught;
      }), '!');
      this.eq((Ωhllt_112 = function() {
        return codec.cfg._nova;
      }), 'Æ');
      this.eq((Ωhllt_113 = function() {
        return codec.cfg._cipher;
      }), 'ã');
      this.eq((Ωhllt_114 = function() {
        return codec.cfg.nmag;
      }), ' ÎÍ');
      this.eq((Ωhllt_115 = function() {
        return codec.cfg.pmag;
      }), ' øù');
      this.eq((Ωhllt_116 = function() {
        return codec.cfg.pmag_chrs[codec.cfg._max_digits_per_idx];
      }), 'ù');
      this.eq((Ωhllt_117 = function() {
        return codec.encode(-16383);
      }), 'Í!!');
      this.eq((Ωhllt_118 = function() {
        return codec.encode(-16382);
      }), 'Í!#');
      this.eq((Ωhllt_119 = function() {
        return codec.encode(-129);
      }), 'ÍÅÅ');
      this.eq((Ωhllt_120 = function() {
        return codec.encode(-128);
      }), 'ÍÅÆ');
      this.eq((Ωhllt_121 = function() {
        return codec.encode(-127);
      }), 'Î!');
      this.eq((Ωhllt_122 = function() {
        return codec.encode(-80);
      }), 'ÎR');
      this.eq((Ωhllt_123 = function() {
        return codec.encode(-21);
      }), 'Î±');
      this.eq((Ωhllt_124 = function() {
        return codec.encode(-21);
      }), 'Î±');
      this.eq((Ωhllt_125 = function() {
        return codec.encode(-20);
      }), 'Ï');
      this.eq((Ωhllt_126 = function() {
        return codec.encode(-1);
      }), 'â');
      this.eq((Ωhllt_127 = function() {
        return codec.encode(+0);
      }), 'ã');
      this.eq((Ωhllt_128 = function() {
        return codec.encode(+1);
      }), 'ä');
      this.eq((Ωhllt_129 = function() {
        return codec.encode(+20);
      }), '÷');
      this.eq((Ωhllt_130 = function() {
        return codec.encode(+21);
      }), 'ø8');
      this.eq((Ωhllt_131 = function() {
        return codec.encode(+127);
      }), 'øÆ');
      this.eq((Ωhllt_132 = function() {
        return codec.encode(+128);
      }), 'ù#!');
      this.eq((Ωhllt_133 = function() {
        return codec.encode(+129);
      }), 'ù##');
      this.eq((Ωhllt_134 = function() {
        return codec.encode(+16382);
      }), 'ùÆÅ');
      this.eq((Ωhllt_135 = function() {
        return codec.encode(+16383);
      }), 'ùÆÆ');
      //.......................................................................................................
      this.eq((Ωhllt_136 = function() {
        return codec.decode('Í!!');
      }), [-16383]);
      this.eq((Ωhllt_137 = function() {
        return codec.decode('Í!#');
      }), [-16382]);
      this.eq((Ωhllt_138 = function() {
        return codec.decode('ÍÅÅ');
      }), [-129]);
      this.eq((Ωhllt_139 = function() {
        return codec.decode('ÍÅÆ');
      }), [-128]);
      this.eq((Ωhllt_140 = function() {
        return codec.decode('Î!');
      }), [-127]);
      this.eq((Ωhllt_141 = function() {
        return codec.decode('Î±');
      }), [-21]);
      this.eq((Ωhllt_142 = function() {
        return codec.decode('Ï');
      }), [-20]);
      this.eq((Ωhllt_143 = function() {
        return codec.decode('â');
      }), [-1]);
      this.eq((Ωhllt_144 = function() {
        return codec.decode('ã');
      }), [0]);
      this.eq((Ωhllt_145 = function() {
        return codec.decode('ä');
      }), [1]);
      this.eq((Ωhllt_146 = function() {
        return codec.decode('÷');
      }), [20]);
      this.eq((Ωhllt_147 = function() {
        return codec.decode('ø8');
      }), [21]);
      this.eq((Ωhllt_148 = function() {
        return codec.decode('øÆ');
      }), [127]);
      this.eq((Ωhllt_149 = function() {
        return codec.decode('ù#!');
      }), [128]);
      this.eq((Ωhllt_150 = function() {
        return codec.decode('ù##');
      }), [129]);
      this.eq((Ωhllt_151 = function() {
        return codec.decode('ùÆÅ');
      }), [16382]);
      this.eq((Ωhllt_152 = function() {
        return codec.decode('ùÆÆ');
      }), [16383]);
//.......................................................................................................
      for (_ = j = 1; j <= 10; _ = ++j) {
        unpadded_lines = shuffle(unpadded_lines);
        unpadded_lines.sort();
        real_indexes = [];
        for (k = 0, len1 = unpadded_lines.length; k < len1; k++) {
          uline = unpadded_lines[k];
          // help 'Ωhllt_153', uline
          real_indexes.push(Number(uline.replace(/^.*?\s([0-9]+)$/, '$1')));
        }
        this.eq((Ωhllt_154 = function() {
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
          // help 'Ωhllt_155', rpr pline if _ is 1
          real_indexes.push(Number(pline.replace(/^.*?\s([0-9]+)$/, '$1')));
        }
        this.eq((Ωhllt_156 = function() {
          return equals(expected_indexes, real_indexes);
        }), true);
      }
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    h128_decode: function() {
      var Hollerith, codec, equals, hollerith_128, i, index_matcher, index_result, internals, j, len, len1, probes_and_matchers, ref, sortkey, type_of, unit, unit_matcher, unit_result, Ωhllt_159, Ωhllt_160, Ωhllt_162;
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
        // info 'Ωhllt_157', f"#{( rpr unit_result ) + ','}:<60c; #{rpr index_result}"
        //   @eq ( Ωhllt_158 = ->  unit_result                     ),  unit_matcher
        this.eq((Ωhllt_159 = function() {
          return index_result;
        }), index_matcher);
        this.eq((Ωhllt_160 = function() {
          return sortkey;
        }), (codec.encode(index_matcher)).padEnd(sortkey.length, codec.cfg.zpuns[0]));
        // debug 'Ωhllt_161', rpr ( codec.encode index_matcher ).padEnd sortkey.length, codec.cfg.zpuns[ 0 ]
        this.eq((Ωhllt_162 = function() {
          return codec.decode(sortkey);
        }), index_matcher);
      }
      // echo [ sortkey, index_result, unit_result, ]
      //.......................................................................................................
      // @eq     ( Ωhllt_163 = -> codec.parse '5'          ), [ { name: 'other', letters: '5', mantissa: null, index: null } ]
      // @eq     ( Ωhllt_164 = -> codec.parse 'äöü'        ), [ { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
      // @eq     ( Ωhllt_165 = -> codec.parse 'Y900äöü'    ), [ { name: 'pnum', letters: 'Y', mantissa: '900', index: 900 }, { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
      // @throws ( Ωhllt_166 = -> codec.decode '5'         ), /not a valid sortkey: unable to parse '5'/
      // @throws ( Ωhllt_167 = -> codec.decode 'äöü'       ), /not a valid sortkey: unable to parse 'äöü'/
      // @throws ( Ωhllt_168 = -> codec.decode 'äöü'       ), /not a valid sortkey: unable to parse 'ü' in 'Y900äöü'/
      // @throws ( Ωhllt_169 = -> codec.decode 'Y900äöü'   ), /not a valid sortkey: unable to parse 'Y900' in 'Y900äöü'/
      //.......................................................................................................
      // debug 'Ωhllt_170', rpr codec.encode -90 #    [ 'Í¿;ããããããã', [ -999,         ], 'nnum:Í,¿;[-999]|padding:ããããããã',                 ]
      // debug 'Ωhllt_171', rpr codec.decode 'Ç!ÆÆÆÆÆÆH' #    [ 'Í¿;ããããããã', [ -999,         ], 'nnum:Í,¿;[-999]|padding:ããããããã',                 ]
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    h10mvp2_decode_units: function() {
      /* NOTE also see corresponding test in `hengist-NG/dev/interlex/src/test-hollerith.coffee` */
      var Hollerith, codec, hollerith_10mvp2, i, index_matcher, index_result, internals, j, len, len1, probes_and_matchers, ref, sortkey, sortkey_padder, type_of, unit, unit_matcher, unit_result, Ωhllt_173, Ωhllt_174, Ωhllt_175, Ωhllt_176, Ωhllt_177, Ωhllt_178, Ωhllt_179, Ωhllt_180, Ωhllt_181, Ωhllt_182;
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
        // info 'Ωhllt_172', f"#{( rpr unit_result ) + ','}:<60c; #{rpr index_result}"
        this.eq((Ωhllt_173 = function() {
          return unit_result;
        }), unit_matcher);
        this.eq((Ωhllt_174 = function() {
          return index_result;
        }), index_matcher);
        this.eq((Ωhllt_175 = function() {
          return codec.decode(sortkey);
        }), index_matcher);
        this.eq((Ωhllt_176 = function() {
          return sortkey;
        }), (codec.encode(index_matcher)).padEnd(sortkey.length, sortkey_padder));
      }
      // echo [ sortkey, index_result, unit_result, ]
      //.......................................................................................................
      this.eq((Ωhllt_177 = function() {
        return codec.parse('5');
      }), [
        {
          name: 'other',
          letters: '5',
          mantissa: null,
          index: null
        }
      ]);
      this.eq((Ωhllt_178 = function() {
        return codec.parse('äöü');
      }), [
        {
          name: 'other',
          letters: 'äöü',
          mantissa: null,
          index: null
        }
      ]);
      this.eq((Ωhllt_179 = function() {
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
      this.throws((Ωhllt_180 = function() {
        return codec.decode('5');
      }), /not a valid sortkey: unable to parse '5'/);
      this.throws((Ωhllt_181 = function() {
        return codec.decode('äöü');
      }), /not a valid sortkey: unable to parse 'äöü'/);
      this.throws((Ωhllt_182 = function() {
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
    //   debug 'Ωhllt_183', rpr codec.encode -1
    //   debug 'Ωhllt_184', rpr codec.encode -2
    //   n =   -100; urge 'Ωhllt_185', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =    -21; urge 'Ωhllt_186', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =    -20; urge 'Ωhllt_187', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =    -19; urge 'Ωhllt_188', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =     -1; urge 'Ωhllt_189', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =      0; urge 'Ωhllt_190', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =      1; urge 'Ωhllt_191', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =      2; urge 'Ωhllt_192', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =      3; urge 'Ωhllt_193', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =     10; urge 'Ωhllt_194', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =    126; urge 'Ωhllt_195', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =    127; urge 'Ωhllt_196', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =    128; urge 'Ωhllt_197', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =    129; urge 'Ωhllt_198', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   # for [ sortkey, index_matcher, unit_matcher, ] in probes_and_matchers
    //   #   unit_result     = []
    //   #   index_result    = []
    //   #   for unit in codec.parse sortkey
    //   #     unit_result.push  helpers.rpr_unit unit
    //   #     index_result.push unit.index if unit.index?
    //   #   unit_result   = unit_result.join '|'
    //   #   info 'Ωhllt_199', f"#{( rpr unit_result ) + ','}:<60c; #{rpr index_result}"
    //   # #   @eq ( Ωhllt_200 = ->  unit_result                     ),  unit_matcher
    //   #   @eq ( Ωhllt_201 = -> index_result                     ), index_matcher
    //   #   @eq ( Ωhllt_202 = -> sortkey ), ( codec.encode index_matcher ).padEnd sortkey.length, codec.cfg.zpuns[ 0 ]
    //   #   debug 'Ωhllt_203', rpr ( codec.encode index_matcher ).padEnd sortkey.length, codec.cfg.zpuns[ 0 ]
    //   #   @eq ( Ωhllt_204 = -> codec.decode sortkey  ), index_matcher
    //   #   # echo [ sortkey, index_result, unit_result, ]
    //   # #.......................................................................................................
    //   # @eq     ( Ωhllt_205 = -> codec.parse '5'         ), [ { name: 'other', letters: '5', mantissa: null, index: null } ]
    //   # @eq     ( Ωhllt_206 = -> codec.parse 'äöü'       ), [ { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
    //   # @eq     ( Ωhllt_207 = -> codec.parse 'Y900äöü'   ), [ { name: 'pnum', letters: 'Y', mantissa: '900', index: 900 }, { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
    //   # @throws ( Ωhllt_208 = -> codec.decode '5'        ), /not a valid sortkey: unable to parse '5'/
    //   # @throws ( Ωhllt_209 = -> codec.decode 'äöü'      ), /not a valid sortkey: unable to parse 'äöü'/
    //   # @throws ( Ωhllt_210 = -> codec.decode 'Y900äöü'  ), /not a valid sortkey: unable to parse 'äöü' in 'Y900äöü'/
    //   #.......................................................................................................
    //   return null

    //---------------------------------------------------------------------------------------------------------
    types: function() {
      var CFG, Hollerith_typespace, T, equals, internals, pick, type_of, Ωhllt_226, Ωhllt_227, Ωhllt_228, Ωhllt_229, Ωhllt_230, Ωhllt_231, Ωhllt_232, Ωhllt_233, Ωhllt_234, Ωhllt_235, Ωhllt_236, Ωhllt_237, Ωhllt_238, Ωhllt_239, Ωhllt_240, Ωhllt_241, Ωhllt_242, Ωhllt_243, Ωhllt_244, Ωhllt_245, Ωhllt_246, Ωhllt_247, Ωhllt_248, Ωhllt_249, Ωhllt_250, Ωhllt_251, Ωhllt_252, Ωhllt_253, Ωhllt_254, Ωhllt_255, Ωhllt_256, Ωhllt_257, Ωhllt_258, Ωhllt_259, Ωhllt_260, Ωhllt_261, Ωhllt_262, Ωhllt_263, Ωhllt_264, Ωhllt_265, Ωhllt_266, Ωhllt_267, Ωhllt_268, Ωhllt_269, Ωhllt_270, Ωhllt_271;
      ({internals, Hollerith_typespace, CFG} = require('../../../apps/hollerith/lib/types'));
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({
        isDeepStrictEqual: equals
      } = require('node:util'));
      ({pick} = SFMODULES.unstable.require_pick());
      (() => {        //.......................................................................................................
        var T, Ωhllt_211, Ωhllt_212, Ωhllt_213, Ωhllt_214, Ωhllt_215;
        T = new Hollerith_typespace();
        this.eq((Ωhllt_211 = function() {
          return T[CFG].blank;
        }), '\x20');
        this.eq((Ωhllt_212 = function() {
          return T[CFG].blank_splitter;
        }), /(?:\x20)+/gv);
        this.eq((Ωhllt_213 = function() {
          return T[CFG].blank_splitter.unicodeSets;
        }), true);
        this.eq((Ωhllt_214 = function() {
          return T[CFG].blank_splitter.global;
        }), true);
        this.eq((Ωhllt_215 = function() {
          return 'a   g  z  '.replace(T[CFG].blank_splitter, 'ü');
        }), 'aügüzü');
        return null;
      })();
      (() => {        //.......................................................................................................
        var T, Ωhllt_216, Ωhllt_217, Ωhllt_218, Ωhllt_219, Ωhllt_220, Ωhllt_221, Ωhllt_222, Ωhllt_223, Ωhllt_224, Ωhllt_225;
        T = new Hollerith_typespace({
          blank: '#'
        });
        this.eq((Ωhllt_216 = function() {
          return T[CFG].blank;
        }), '#');
        this.eq((Ωhllt_217 = function() {
          return T[CFG].blank_splitter;
        }), /(?:\x23)+/gv);
        this.eq((Ωhllt_218 = function() {
          return T[CFG].blank_splitter.unicodeSets;
        }), true);
        this.eq((Ωhllt_219 = function() {
          return T[CFG].blank_splitter.global;
        }), true);
        this.eq((Ωhllt_220 = function() {
          return 'a###g##z##'.replace(T[CFG].blank_splitter, 'ü');
        }), 'aügüzü');
        this.eq((Ωhllt_221 = function() {
          return T.magnifiers.isa('ABC XYZ');
        }), false);
        this.eq((Ωhllt_222 = function() {
          return T.magnifiers.isa('ABC#XYZ');
        }), true);
        this.eq((Ωhllt_223 = function() {
          return T.blank.isa(' ');
        }), false);
        this.eq((Ωhllt_224 = function() {
          return T.blank.isa('#');
        }), true);
        this.eq((Ωhllt_225 = function() {
          return T.blank.isa(T[CFG].blank);
        }), true);
        return null;
      })();
      //.......................................................................................................
      T = new Hollerith_typespace();
      this.eq((Ωhllt_226 = function() {
        return T.nonempty_text.isa(4);
      }), false);
      this.eq((Ωhllt_227 = function() {
        return T.nonempty_text.isa(false);
      }), false);
      this.eq((Ωhllt_228 = function() {
        return T.nonempty_text.isa('');
      }), false);
      this.eq((Ωhllt_229 = function() {
        return T.nonempty_text.isa('yes');
      }), true);
      //.......................................................................................................
      this.eq((Ωhllt_230 = function() {
        return T.incremental_text.isa('yes');
      }), false);
      this.eq((Ωhllt_231 = function() {
        return T.decremental_text.isa('yes');
      }), false);
      this.eq((Ωhllt_232 = function() {
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
      this.eq((Ωhllt_233 = function() {
        return T.incremental_text.isa('abcdefz');
      }), true);
      this.eq((Ωhllt_234 = function() {
        return T.decremental_text.isa('abcdefz');
      }), false);
      this.eq((Ωhllt_235 = function() {
        return T.incremental_text.data;
      }), {
        chrs: ['a', 'b', 'c', 'd', 'e', 'f', 'z']
      });
      this.eq((Ωhllt_236 = function() {
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
      this.eq((Ωhllt_237 = function() {
        return T.incremental_text.isa('abc0');
      }), false);
      this.eq((Ωhllt_238 = function() {
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
      this.eq((Ωhllt_239 = function() {
        return T.decremental_text.isa('cba');
      }), true);
      this.eq((Ωhllt_240 = function() {
        return T.decremental_text.data;
      }), {
        chrs: ['c', 'b', 'a']
      });
      //.......................................................................................................
      this.eq((Ωhllt_241 = function() {
        return T.magnifiers.isa('');
      }), false);
      this.eq((Ωhllt_242 = function() {
        return T.magnifiers.data;
      }), {
        message: "expected a magnifier, got an empty text"
      });
      this.eq((Ωhllt_243 = function() {
        return T.magnifiers.isa('ABC XYZ');
      }), true);
      this.eq((Ωhllt_244 = function() {
        return pick(T.magnifiers.data, ['nmag_chrs_reversed', 'pmag_chrs', 'nmag', 'pmag']);
      }), {
        nmag_chrs_reversed: ['A', 'B', 'C'],
        pmag_chrs: [' ', 'X', 'Y', 'Z'],
        nmag: ' CBA',
        pmag: ' XYZ'
      });
      this.eq((Ωhllt_245 = function() {
        return Object.isFrozen(T.magnifiers.data.nmag_chrs_reversed);
      }), true);
      this.eq((Ωhllt_246 = function() {
        return Object.isFrozen(T.magnifiers.data.pmag_chrs);
      }), true);
      this.eq((Ωhllt_247 = function() {
        return T.magnifiers.isa('ABC\nXYZ');
      }), false);
      this.eq((Ωhllt_248 = function() {
        return T.magnifiers.isa('ABC\tXYZ');
      }), false);
      this.eq((Ωhllt_249 = function() {
        return T.magnifiers.isa('ABC             XYZ');
      }), true);
      this.eq((Ωhllt_250 = function() {
        return T.magnifiers.isa('ABC DX YZ');
      }), false);
      this.eq((Ωhllt_251 = function() {
        return T.magnifiers.isa('ABD CXYZ');
      }), false);
      //.......................................................................................................
      this.eq((Ωhllt_252 = function() {
        return T.uniliterals.isa(null);
      }), false);
      this.eq((Ωhllt_253 = function() {
        return T.uniliterals.isa('');
      }), false);
      this.eq((Ωhllt_254 = function() {
        return T.uniliterals.isa('VBA');
      }), false);
      this.eq((Ωhllt_255 = function() {
        return T.uniliterals.isa('EFGHIJKLM NOPQRSTUVW');
      }), false);
      this.eq((Ωhllt_256 = function() {
        return T.uniliterals.isa('EFGHIJKLM N OPQRSTUVW');
      }), true);
      this.eq((Ωhllt_257 = function() {
        return T.uniliterals.data;
      }), {
        nuns: 'EFGHIJKLM',
        zpuns: 'NOPQRSTUVW',
        nun_chrs: ['E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'],
        zpun_chrs: ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W']
      });
      this.eq((Ωhllt_258 = function() {
        return T.uniliterals.isa('N');
      }), true);
      this.eq((Ωhllt_259 = function() {
        return T.uniliterals.data;
      }), {
        nuns: '',
        zpuns: 'N',
        nun_chrs: [],
        zpun_chrs: ['N']
      });
      //.......................................................................................................
      this.throws((Ωhllt_260 = function() {
        return T.alphabet.validate(null);
      }), /not a valid alphabet/);
      this.throws((Ωhllt_261 = function() {
        return T.alphabet.validate('');
      }), /not a valid alphabet/);
      this.throws((Ωhllt_262 = function() {
        return T.alphabet.validate('a');
      }), /not a valid alphabet/);
      this.eq((Ωhllt_263 = function() {
        return T.alphabet.validate('ab');
      }), 'ab');
      //.......................................................................................................
      this.throws((Ωhllt_264 = function() {
        return new Hollerith_typespace({
          blank: null
        });
      }), /not a valid blank/);
      this.throws((Ωhllt_265 = function() {
        return new Hollerith_typespace({
          blank: ''
        });
      }), /not a valid blank/);
      this.throws((Ωhllt_266 = function() {
        return new Hollerith_typespace({
          blank: '--'
        });
      }), /not a valid blank/);
      this.throws((Ωhllt_267 = function() {
        return (new Hollerith_typespace({
          blank: null
        })).blank.validate(null);
      }), /not a valid blank/);
      this.throws((Ωhllt_268 = function() {
        return (new Hollerith_typespace({
          blank: ''
        })).blank.validate('');
      }), /not a valid blank/);
      this.throws((Ωhllt_269 = function() {
        return (new Hollerith_typespace({
          blank: '--'
        })).blank.validate('--');
      }), /not a valid blank/);
      this.eq((Ωhllt_270 = function() {
        return (new Hollerith_typespace({
          blank: '-'
        })).blank.validate('-');
      }), '-');
      this.eq((Ωhllt_271 = function() {
        return (new Hollerith_typespace({
          blank: ' '
        })).blank.validate(' ');
      }), ' ');
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    validate_and_compile_cfg_general: function() {
      var CFG, Hollerith, Hollerith_typespace, internals, is_frozen, Ωhllt_272;
      ({internals, Hollerith} = require('../../../apps/hollerith'));
      ({Hollerith_typespace, CFG} = require('../../../apps/hollerith/lib/types'));
      ({
        // { type_of,                    } = SFMODULES.unstable.require_type_of()
        // { isDeepStrictEqual: equals,  } = require 'node:util'
        isFrozen: is_frozen
      } = Object);
      //.......................................................................................................
      /* testing a general assumption so we don't mess up: */
      this.eq((Ωhllt_272 = function() {
        return (Number.MAX_SAFE_INTEGER - 1) === -(Number.MIN_SAFE_INTEGER + 1);
      }), true);
      (() => {        //.......................................................................................................
        var Ωhllt_273, Ωhllt_274, Ωhllt_275;
        // T = new Hollerith_typespace()
        this.throws((Ωhllt_273 = function() {
          return Hollerith.validate_and_compile_cfg({});
        }), /not a valid alphabet/);
        this.throws((Ωhllt_274 = function() {
          return Hollerith.validate_and_compile_cfg({
            alphabet: ''
          });
        }), /not a valid alphabet/);
        this.throws((Ωhllt_275 = function() {
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
        var cfg, h, Ωhllt_276, Ωhllt_277, Ωhllt_278, Ωhllt_279, Ωhllt_280, Ωhllt_281, Ωhllt_282, Ωhllt_283, Ωhllt_284, Ωhllt_285, Ωhllt_286, Ωhllt_287, Ωhllt_288, Ωhllt_289, Ωhllt_290, Ωhllt_291, Ωhllt_292, Ωhllt_293, Ωhllt_294, Ωhllt_295, Ωhllt_296, Ωhllt_297, Ωhllt_298, Ωhllt_299, Ωhllt_300, Ωhllt_301, Ωhllt_302, Ωhllt_304, Ωhllt_305, Ωhllt_306, Ωhllt_307, Ωhllt_308, Ωhllt_309, Ωhllt_310, Ωhllt_311, Ωhllt_312, Ωhllt_313, Ωhllt_314, Ωhllt_315, Ωhllt_316, Ωhllt_317, Ωhllt_318, Ωhllt_319;
        cfg = Hollerith.validate_and_compile_cfg(cfg_10);
        this.eq((Ωhllt_276 = function() {
          return cfg.blank;
        }), ' ');
        this.eq((Ωhllt_277 = function() {
          return cfg.alphabet;
        }), '0123456789');
        this.eq((Ωhllt_278 = function() {
          return cfg.alphabet_chrs;
        }), Array.from('0123456789'));
        this.eq((Ωhllt_279 = function() {
          return cfg._nova;
        }), (Array.from(cfg.alphabet)).at(-1));
        this.eq((Ωhllt_280 = function() {
          return cfg.leading_niners_re;
        }), /^(?:9)*(?=.+$)/gv);
        this.eq((Ωhllt_281 = function() {
          return is_frozen(cfg.alphabet_chrs);
        }), true);
        this.eq((Ωhllt_282 = function() {
          return cfg.base;
        }), 10);
        this.eq((Ωhllt_283 = function() {
          return cfg.magnifiers;
        }), 'ABC XYZ');
        this.eq((Ωhllt_284 = function() {
          return cfg.nmag;
        }), ' CBA');
        this.eq((Ωhllt_285 = function() {
          return cfg.pmag;
        }), ' XYZ');
        this.eq((Ωhllt_286 = function() {
          return cfg.nmag_chrs;
        }), Array.from(' CBA'));
        this.eq((Ωhllt_287 = function() {
          return cfg.pmag_chrs;
        }), Array.from(' XYZ'));
        this.eq((Ωhllt_288 = function() {
          return cfg.uniliterals;
        }), 'FGHIJKLM N OPQRSTUV');
        this.eq((Ωhllt_289 = function() {
          return cfg.nuns;
        }), 'FGHIJKLM');
        this.eq((Ωhllt_290 = function() {
          return cfg.zpuns;
        }), 'NOPQRSTUV');
        this.eq((Ωhllt_291 = function() {
          return cfg.zpun_max;
        }), 8);
        this.eq((Ωhllt_292 = function() {
          return cfg.nun_min;
        }), -8);
        this.eq((Ωhllt_293 = function() {
          return cfg.nun_chrs;
        }), ['F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'], this.eq((Ωhllt_294 = function() {
          return cfg.zpun_chrs;
        }), ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V']));
        this.eq((Ωhllt_295 = function() {
          return cfg.dimension;
        }), 3);
        this.eq((Ωhllt_296 = function() {
          return +((cfg.base ** (cfg.pmag_chrs.length - 1)) - 1);
        }), +999);
        this.eq((Ωhllt_297 = function() {
          return -((cfg.base ** (cfg.nmag_chrs.length - 1)) - 1);
        }), -999);
        this.eq((Ωhllt_298 = function() {
          return cfg._max_integer;
        }), +999);
        this.eq((Ωhllt_299 = function() {
          return cfg._min_integer;
        }), -999);
        this.eq((Ωhllt_300 = function() {
          return cfg._max_digits_per_idx;
        }), 3);
        this.eq((Ωhllt_301 = function() {
          return cfg.TMP_alphabet;
        }), '0123456789ABCFGHIJKLMNOPQRSTUVXYZ');
        //.....................................................................................................
        h = new Hollerith(cfg_10);
        this.eq((Ωhllt_302 = function() {
          return h.cfg;
        }), cfg);
        // @eq ( Ωhllt_303 = -> h.encode  -998 ), null
        this.eq((Ωhllt_304 = function() {
          return h.encode(-12);
        }), 'B87');
        this.eq((Ωhllt_305 = function() {
          return h.encode(-11);
        }), 'B88');
        this.eq((Ωhllt_306 = function() {
          return h.encode(-10);
        }), 'B89');
        this.eq((Ωhllt_307 = function() {
          return h.encode(-9);
        }), 'C0');
        this.eq((Ωhllt_308 = function() {
          return h.encode(-8);
        }), 'F');
        this.eq((Ωhllt_309 = function() {
          return h.encode(-2);
        }), 'L');
        this.eq((Ωhllt_310 = function() {
          return h.encode(-1);
        }), 'M');
        this.eq((Ωhllt_311 = function() {
          return h.encode(0);
        }), 'N');
        this.eq((Ωhllt_312 = function() {
          return h.encode(+1);
        }), 'O');
        this.eq((Ωhllt_313 = function() {
          return h.encode(+2);
        }), 'P');
        this.eq((Ωhllt_314 = function() {
          return h.encode(+8);
        }), 'V');
        this.eq((Ωhllt_315 = function() {
          return h.encode(+9);
        }), 'X9');
        this.eq((Ωhllt_316 = function() {
          return h.encode(+10);
        }), 'Y10');
        this.eq((Ωhllt_317 = function() {
          return h.encode(+11);
        }), 'Y11');
        this.eq((Ωhllt_318 = function() {
          return h.encode(+12);
        }), 'Y12');
        this.eq((Ωhllt_319 = function() {
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
        var cfg, h, Ωhllt_320, Ωhllt_321, Ωhllt_322, Ωhllt_323, Ωhllt_324, Ωhllt_325, Ωhllt_326, Ωhllt_327, Ωhllt_328, Ωhllt_329, Ωhllt_330, Ωhllt_331, Ωhllt_332, Ωhllt_333, Ωhllt_334, Ωhllt_335, Ωhllt_336, Ωhllt_337, Ωhllt_338, Ωhllt_339, Ωhllt_340, Ωhllt_341, Ωhllt_342, Ωhllt_343, Ωhllt_344, Ωhllt_345;
        cfg = Hollerith.validate_and_compile_cfg(cfg_10_no_uniliterals);
        this.eq((Ωhllt_320 = function() {
          return cfg.blank;
        }), ' ');
        this.eq((Ωhllt_321 = function() {
          return cfg.alphabet;
        }), '0123456789');
        this.eq((Ωhllt_322 = function() {
          return cfg.alphabet_chrs;
        }), Array.from('0123456789'));
        this.eq((Ωhllt_323 = function() {
          return cfg._nova;
        }), (Array.from(cfg.alphabet)).at(-1));
        this.eq((Ωhllt_324 = function() {
          return cfg.leading_niners_re;
        }), /^(?:9)*(?=.+$)/gv);
        this.eq((Ωhllt_325 = function() {
          return is_frozen(cfg.alphabet_chrs);
        }), true);
        this.eq((Ωhllt_326 = function() {
          return cfg.base;
        }), 10);
        this.eq((Ωhllt_327 = function() {
          return cfg.magnifiers;
        }), 'ABC XYZ');
        this.eq((Ωhllt_328 = function() {
          return cfg.nmag;
        }), ' CBA');
        this.eq((Ωhllt_329 = function() {
          return cfg.pmag;
        }), ' XYZ');
        this.eq((Ωhllt_330 = function() {
          return cfg.nmag_chrs;
        }), Array.from(' CBA'));
        this.eq((Ωhllt_331 = function() {
          return cfg.pmag_chrs;
        }), Array.from(' XYZ'));
        this.eq((Ωhllt_332 = function() {
          return cfg.uniliterals;
        }), 'N');
        this.eq((Ωhllt_333 = function() {
          return cfg.nuns;
        }), '');
        this.eq((Ωhllt_334 = function() {
          return cfg.zpuns;
        }), 'N');
        this.eq((Ωhllt_335 = function() {
          return cfg.nun_chrs;
        }), []);
        this.eq((Ωhllt_336 = function() {
          return cfg.zpun_chrs;
        }), ['N']);
        this.eq((Ωhllt_337 = function() {
          return cfg.dimension;
        }), 3);
        this.eq((Ωhllt_338 = function() {
          return +((cfg.base ** (cfg.pmag_chrs.length - 1)) - 1);
        }), +999);
        this.eq((Ωhllt_339 = function() {
          return -((cfg.base ** (cfg.nmag_chrs.length - 1)) - 1);
        }), -999);
        this.eq((Ωhllt_340 = function() {
          return cfg._max_integer;
        }), +999);
        this.eq((Ωhllt_341 = function() {
          return cfg._min_integer;
        }), -999);
        this.eq((Ωhllt_342 = function() {
          return cfg._max_digits_per_idx;
        }), 3);
        this.eq((Ωhllt_343 = function() {
          return cfg.TMP_alphabet;
        }), '0123456789ABCNXYZ');
        //.....................................................................................................
        h = new Hollerith(cfg_10_no_uniliterals);
        this.eq((Ωhllt_344 = function() {
          return h.cfg;
        }), cfg);
        this.eq((Ωhllt_345 = function() {
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
        var cfg, h, Ωhllt_346, Ωhllt_347, Ωhllt_348, Ωhllt_349, Ωhllt_350, Ωhllt_351, Ωhllt_352, Ωhllt_353, Ωhllt_354, Ωhllt_355, Ωhllt_356, Ωhllt_357, Ωhllt_358, Ωhllt_359, Ωhllt_360, Ωhllt_361, Ωhllt_362, Ωhllt_365, Ωhllt_366, Ωhllt_367, Ωhllt_368;
        cfg = Hollerith.validate_and_compile_cfg(cfg_128);
        this.eq((Ωhllt_346 = function() {
          return cfg.blank;
        }), ' ');
        this.eq((Ωhllt_347 = function() {
          return cfg.alphabet;
        }), '!#$%&()*+,-./0123456789:;<=>?@AB' + 'CDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abc' + 'defghijklmnopqrstuvwxyz{|}~¡¢£¤¥' + '¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆ');
        this.eq((Ωhllt_348 = function() {
          return cfg.alphabet_chrs;
        }), Array.from(cfg.alphabet));
        this.eq((Ωhllt_349 = function() {
          return cfg._nova;
        }), (Array.from(cfg.alphabet)).at(-1));
        this.eq((Ωhllt_350 = function() {
          return cfg.leading_niners_re;
        }), /^(?:Æ)*(?=.+$)/gv);
        this.eq((Ωhllt_351 = function() {
          return cfg.magnifiers;
        }), 'ÇÈÉÊËÌÍÎ øùúûüýþÿ');
        this.eq((Ωhllt_352 = function() {
          return cfg.nmag;
        }), ' ÎÍÌËÊÉÈÇ');
        this.eq((Ωhllt_353 = function() {
          return cfg.pmag;
        }), ' øùúûüýþÿ');
        this.eq((Ωhllt_354 = function() {
          return cfg.nmag_chrs;
        }), Array.from(' ÎÍÌËÊÉÈÇ'));
        this.eq((Ωhllt_355 = function() {
          return cfg.pmag_chrs;
        }), Array.from(' øùúûüýþÿ'));
        this.eq((Ωhllt_356 = function() {
          return cfg.uniliterals;
        }), 'ÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâ ã äåæçèéêëìíîïðñòóôõö÷');
        this.eq((Ωhllt_357 = function() {
          return cfg.nuns;
        }), 'ÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâ');
        this.eq((Ωhllt_358 = function() {
          return cfg.zpuns;
        }), 'ãäåæçèéêëìíîïðñòóôõö÷');
        this.eq((Ωhllt_359 = function() {
          return cfg.nun_chrs;
        }), Array.from('ÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâ'));
        this.eq((Ωhllt_360 = function() {
          return cfg.zpun_chrs;
        }), Array.from('ãäåæçèéêëìíîïðñòóôõö÷'));
        this.eq((Ωhllt_361 = function() {
          return cfg._min_integer;
        }), -((128 ** 7) - 1));
        this.eq((Ωhllt_362 = function() {
          return cfg._max_integer;
        }), +((128 ** 7) - 1));
        // @eq ( Ωhllt_363 = -> cfg._max_digits_per_idx                                         ), 3
        // @eq ( Ωhllt_364 = -> cfg.TMP_alphabet                                       ), '0123456789ABCEFGHIJKLMNOPQRSTUVWXYZ'
        //.....................................................................................................
        this.eq((Ωhllt_365 = function() {
          return is_frozen(cfg.alphabet_chrs);
        }), true);
        this.eq((Ωhllt_366 = function() {
          return cfg.base;
        }), 128);
        this.eq((Ωhllt_367 = function() {
          return cfg.dimension;
        }), 5);
        //.....................................................................................................
        h = new Hollerith(cfg_128);
        this.eq((Ωhllt_368 = function() {
          return h.cfg;
        }), cfg);
        // @eq ( Ωhllt_369 = -> h.encode [ 0, ] ), null
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
        var T, Ωhllt_370, Ωhllt_371, Ωhllt_372, Ωhllt_373, Ωhllt_374, Ωhllt_375, Ωhllt_376, Ωhllt_377, Ωhllt_378, Ωhllt_379, Ωhllt_380, Ωhllt_381, Ωhllt_382;
        T = new Hollerith_typespace();
        this.eq((Ωhllt_370 = function() {
          return T.base.isa(-1);
        }), false);
        this.eq((Ωhllt_371 = function() {
          return T.base.isa(0);
        }), false);
        this.eq((Ωhllt_372 = function() {
          return T.base.isa(+1);
        }), false);
        this.eq((Ωhllt_373 = function() {
          return T.base.isa(+2);
        }), true);
        this.eq((Ωhllt_374 = function() {
          return T._max_integer_$.isa(null);
        }), false);
        this.eq((Ωhllt_375 = function() {
          return T._max_integer_$.isa(9, 10);
        }), true);
        this.eq((Ωhllt_376 = function() {
          return T._max_integer_$.isa(99, 10);
        }), true);
        this.eq((Ωhllt_377 = function() {
          return T._max_integer_$.isa(99999999, 10);
        }), true);
        this.eq((Ωhllt_378 = function() {
          return T._max_integer_$.isa(-10, 10);
        }), false);
        this.eq((Ωhllt_379 = function() {
          return /not a positive safe integer/.test(T._max_integer_$.data.message);
        }), true);
        this.eq((Ωhllt_380 = function() {
          return T._max_integer_$.isa(0xffff, 16);
        }), true);
        this.eq((Ωhllt_381 = function() {
          return T._max_integer_$.isa(0x7fffffff, 16);
        }), false);
        this.throws((Ωhllt_382 = function() {
          return T._max_integer_$.validate(5, 10);
        }), /\(_max_integer_\$\) not a valid _max_integer_\$: 5 – x not a positive all-niners/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var R, T, Ωhllt_383;
        T = new Hollerith_typespace();
        R = {
          base: 16,
          _max_digits_per_idx: 4
        };
        this.eq((Ωhllt_383 = function() {
          return T._max_integer_$.isa((R.base ** R._max_digits_per_idx) - 1, R.base);
        }), true);
        return null;
      })();
      (() => {        //.......................................................................................................
        var T, Ωhllt_384, Ωhllt_385, Ωhllt_386, Ωhllt_387, Ωhllt_388, Ωhllt_389, Ωhllt_390, Ωhllt_391, Ωhllt_392;
        T = new Hollerith_typespace();
        this.eq((Ωhllt_384 = function() {
          return T._max_integer_$.isa((128 ** 1) - 1, 128);
        }), true);
        this.eq((Ωhllt_385 = function() {
          return T._max_integer_$.isa((128 ** 2) - 1, 128);
        }), true);
        this.eq((Ωhllt_386 = function() {
          return T._max_integer_$.isa((128 ** 3) - 1, 128);
        }), true);
        this.eq((Ωhllt_387 = function() {
          return T._max_integer_$.isa((128 ** 4) - 1, 128);
        }), true);
        this.eq((Ωhllt_388 = function() {
          return T._max_integer_$.isa((128 ** 5) - 1, 128);
        }), true);
        this.eq((Ωhllt_389 = function() {
          return T._max_integer_$.isa((128 ** 6) - 1, 128);
        }), true);
        this.eq((Ωhllt_390 = function() {
          return T._max_integer_$.isa((128 ** 7) - 1, 128);
        }), true);
        this.eq((Ωhllt_391 = function() {
          return T._max_integer_$.isa((128 ** 8) - 1, 128);
        }), false);
        this.eq((Ωhllt_392 = function() {
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
    info('Ωhllt_393', Number.MAX_SAFE_INTEGER.toString(16));
    info('Ωhllt_394', Number.MAX_SAFE_INTEGER.toString(32));
    whisper('—————————————————————————————————');
    info('Ωhllt_395', (32 ** 4 - 1).toString(32));
    info('Ωhllt_396', (32 ** 4 - 1).toString(32));
    whisper('—————————————————————————————————');
    info('Ωhllt_397', get_required_digits(32, 32));
    info('Ωhllt_398', get_required_digits(32 ** 6, 32));
    info('Ωhllt_399', get_required_digits(1e6, 10));
    info('Ωhllt_400', get_required_digits(20, 10));
    whisper('—————————————————————————————————');
    info('Ωhllt_401', max_digits_base_10 = get_max_niner_digit_count(Number.MAX_SAFE_INTEGER, 10));
    info('Ωhllt_402', max_digits_base_16 = get_max_niner_digit_count(Number.MAX_SAFE_INTEGER, 16));
    info('Ωhllt_403', max_digits_base_32 = get_max_niner_digit_count(Number.MAX_SAFE_INTEGER, 32));
    info('Ωhllt_404', max_digits_base_36 = get_max_niner_digit_count(Number.MAX_SAFE_INTEGER, 36));
    info('Ωhllt_405', max_digits_1base_28 = get_max_niner_digit_count(Number.MAX_SAFE_INTEGER, 128));
    // for base in [ 2 .. 128 ]
    //   info 'Ωhllt_406', { base, }, ( Math.ceil log_to_base Number.MAX_SAFE_INTEGER, base ) - 1
    whisper('—————————————————————————————————');
    info('Ωhllt_407', '9'.repeat(max_digits_base_10));
    info('Ωhllt_408', 'f'.repeat(max_digits_base_16));
    info('Ωhllt_409', 'v'.repeat(max_digits_base_32));
    whisper('—————————————————————————————————');
    info('Ωhllt_410', ((base = 10) ** max_digits_base_10) - 1);
    info('Ωhllt_411', ((base = 16) ** max_digits_base_16) - 1);
    info('Ωhllt_412', ((base = 32) ** max_digits_base_32) - 1);
    info('Ωhllt_413', ((base = 36) ** max_digits_base_36) - 1);
    whisper('—————————————————————————————————');
    info('Ωhllt_414', get_max_integer(Number.MAX_SAFE_INTEGER, 10));
    info('Ωhllt_415', get_max_integer(Number.MAX_SAFE_INTEGER, 16));
    info('Ωhllt_416', get_max_integer(Number.MAX_SAFE_INTEGER, 32));
    info('Ωhllt_417', get_max_integer(Number.MAX_SAFE_INTEGER, 36));
    info('Ωhllt_418', get_max_integer(Number.MAX_SAFE_INTEGER, 128));
    whisper('—————————————————————————————————');
    info('Ωhllt_419', parseInt('9'.repeat(max_digits_base_10), 10));
    info('Ωhllt_420', parseInt('f'.repeat(max_digits_base_16), 16));
    info('Ωhllt_421', parseInt('v'.repeat(max_digits_base_32), 32));
    info('Ωhllt_422', parseInt('z'.repeat(max_digits_base_36), 36));
    info('Ωhllt_423', (parseInt('9'.repeat(max_digits_base_10), 10)) <= Number.MAX_SAFE_INTEGER);
    info('Ωhllt_424', (parseInt('f'.repeat(max_digits_base_16), 16)) <= Number.MAX_SAFE_INTEGER);
    info('Ωhllt_425', (parseInt('v'.repeat(max_digits_base_32), 32)) <= Number.MAX_SAFE_INTEGER);
    info('Ωhllt_426', (parseInt('z'.repeat(max_digits_base_36), 36)) <= Number.MAX_SAFE_INTEGER);
    whisper('—————————————————————————————————');
    info('Ωhllt_427', +999 + -999);
    info('Ωhllt_428', +999 + -1);
    info('Ωhllt_429', -(-999 - 1) + -999);
    info('Ωhllt_430', -(-999 - 1) + -998);
    info('Ωhllt_431', -(-999 - 1) + -997);
    info('Ωhllt_432', -(-999 - 1) + -3);
    info('Ωhllt_433', -(-999 - 1) + -2);
    info('Ωhllt_434', -(-999 - 1) + -1);
    info('Ωhllt_435', `${-(-999 - 1) + -3}`.replace(/^9*?(?=.$)/gv, ''));
    info('Ωhllt_436', `${-(-999 - 1) + -2}`.replace(/^9*?(?=.$)/gv, ''));
    info('Ωhllt_437', `${-(-999 - 1) + -1}`.replace(/^9*?(?=.$)/gv, ''));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxnQkFBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQTs7RUFFQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLFdBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxPQUhGLEVBSUUsR0FKRixDQUFBLEdBSTRCLEdBQUcsQ0FBQyxHQUpoQyxFQVpBOzs7RUFrQkEsSUFBQSxHQUE0QixPQUFBLENBQVEsMkJBQVI7O0VBQzVCLENBQUEsQ0FBRSxJQUFGLENBQUEsR0FBNEIsSUFBNUI7O0VBQ0EsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUI7O0VBQ0EsU0FBQSxHQUE0QixPQUFBLENBQVEsNkNBQVIsRUFyQjVCOzs7RUF5QkEsT0FBQSxHQUdFLENBQUE7O0lBQUEsUUFBQSxFQUFVLFFBQUEsQ0FBRSxJQUFGLENBQUE7QUFDWixVQUFBLENBQUEsRUFBQSxLQUFBLEVBQUEsT0FBQSxFQUFBLFFBQUEsRUFBQTtNQUFJLENBQUEsQ0FBRSxJQUFG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UixFQUFtRSxNQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBZ0MsQ0FBQyxFQUFqQztNQUFILENBQWYsQ0FBUixFQUFtRSxLQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBZ0MsQ0FBQyxFQUFqQztNQUFILENBQWYsQ0FBUixFQUFtRSxLQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBZ0MsQ0FBQyxFQUFqQztNQUFILENBQWYsQ0FBUixFQUFtRSxLQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBZ0MsQ0FBQyxFQUFqQztNQUFILENBQWYsQ0FBUixFQUFtRSxLQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxJQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxJQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxJQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxD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QUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBZ0MsQ0FBQyxFQUFqQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBd0IsQ0FBQyxFQUF6QixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBZ0MsQ0FBQyxFQUFqQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBd0IsQ0FBQyxFQUF6QixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBeUIsQ0FBQyxDQUExQixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBeUIsQ0FBQyxDQUExQixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBeUIsQ0FBQyxDQUExQixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBeUIsQ0FBQyxDQUExQixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBeUIsQ0FBQyxDQUExQixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBeUIsQ0FBQyxDQUExQixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBeUIsQ0FBQyxDQUExQixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBeUIsQ0FBQyxDQUExQixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBaUMsQ0FBQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxlQUFlLENBQUMsTUFBaEIsQ0FBeUIsQ0FBQyxDQUExQixDQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBa0MsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsZUFBZSxDQUFDLE1BQWhCLENBQTBCLENBQTFCLENBQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQs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R0FBRyxDQUFDO01BQWIsQ0FBZCxDQUFKLEVBQTZFLENBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7TUFBYixDQUFkLENBQUosRUFBNkUsRUFBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztNQUFiLENBQWQsQ0FBSixFQUE2RSxHQUE3RTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxLQUFLLENBQUMsR0FBRyxDQUFDO01BQWIsQ0FBZCxDQUFKLEVBQTZFLEdBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7TUFBYixDQUFkLENBQUosRUFBNkUsR0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztNQUFiLENBQWQsQ0FBSixFQUE2RSxLQUE3RTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxLQUFLLENBQUMsR0FBRyxDQUFDO01BQWIsQ0FBZCxDQUFKLEVBQTZFLEtBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsbUJBQVo7TUFBdEIsQ0FBZCxDQUFKLEVBQTZFLEdBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxLQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLEtBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxLQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLEtBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxHQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLEtBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxHQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLEtBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxHQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLElBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxFQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLElBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxFQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLElBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxFQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLElBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxFQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLEdBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxDQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLEdBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxDQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLEdBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxDQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLEdBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxFQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLEdBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxFQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLElBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxHQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLElBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxHQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLEtBQTdFO01BQ0Es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QUE3RTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUFqQixDQUFxQixDQUFFLEdBQUEsSUFBTyxDQUFULENBQUEsR0FBZSxDQUFwQyxFQUF1QyxHQUF2QztRQUFILENBQWQsQ0FBUixFQUE2RSxJQUE3RTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUFqQixDQUFxQixDQUFFLEdBQUEsSUFBTyxDQUFULENBQUEsR0FBZSxDQUFwQyxFQUF1QyxHQUF2QztRQUFILENBQWQsQ0FBUixFQUE2RSxJQUE3RTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUFqQixDQUFxQixDQUFFLEdBQUEsSUFBTyxDQUFULENBQUEsR0FBZSxDQUFwQyxFQUF1QyxHQUF2QztRQUFILENBQWQsQ0FBUixFQUE2RSxJQUE3RTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUFqQixDQUFxQixDQUFFLEdBQUEsSUFBTyxDQUFULENBQUEsR0FBZSxDQUFwQyxFQUF1QyxHQUF2QztRQUFILENBQWQsQ0FBUixFQUE2RSxJQUE3RTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUFqQixDQUFxQixDQUFFLEdBQUEsSUFBTyxDQUFULENBQUEsR0FBZSxDQUFwQyxFQUF1QyxHQUF2QztRQUFILENBQWQsQ0FBUixFQUE2RSxJQUE3RTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7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InNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzdHJpY3QnXG5cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnaG9sbGVyaXRoJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG4jIFdHVVkgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL3dlYmd1eSdcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zaW5nbGUtZmlsZS1tb2R1bGVzJ1xuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaGVscGVycyA9XG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBycHJfdW5pdDogKCB1bml0ICkgLT5cbiAgICB7IG5hbWUsXG4gICAgICBsZXR0ZXJzLFxuICAgICAgbWFudGlzc2EsXG4gICAgICBpbmRleCwgICAgfSA9IHVuaXRcbiAgICBSICA9IFwiI3tuYW1lfToje2xldHRlcnN9XCJcbiAgICBSICs9IFwiLCN7bWFudGlzc2F9XCIgIGlmIG1hbnRpc3NhP1xuICAgIFIgKz0gXCJbI3tpbmRleH1dXCIgICAgaWYgaW5kZXg/XG4gICAgcmV0dXJuIFJcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9yYW5kb21fdmR4X3Byb2R1Y2VyOiAoe1xuICAgIHNlZWQgICAgICAgID0gbnVsbCxcbiAgICBtaW5fbGVuZ3RoICA9IDEsXG4gICAgbWF4X2xlbmd0aCAgPSA1LFxuICAgIG1pbl9pZHggICAgID0gLTk5OSxcbiAgICBtYXhfaWR4ICAgICA9ICs5OTksIH09e30pIC0+XG4gICAgeyBHZXRfcmFuZG9tLFxuICAgICAgaW50ZXJuYWxzLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2dldF9yYW5kb20oKVxuICAgIGdldF9yYW5kb20gICAgICA9IG5ldyBHZXRfcmFuZG9tIHsgc2VlZDogbnVsbCwgb25fc3RhdHM6IG51bGwsIH1cbiAgICBnZXRfcm5kX2xlbmd0aCAgPSBnZXRfcmFuZG9tLmludGVnZXJfcHJvZHVjZXIgeyBtaW46IG1pbl9sZW5ndGgsIG1heDogbWF4X2xlbmd0aCwgfVxuICAgIGdldF9ybmRfaWR4ICAgICA9IGdldF9yYW5kb20uaW50ZWdlcl9wcm9kdWNlciB7IG1pbjogbWluX2lkeCwgICAgbWF4OiBtYXhfaWR4LCAgICB9XG4gICAgcmV0dXJuIGdldF9ybmRfdmR4ID0gLT4gKCBnZXRfcm5kX2lkeCgpIGZvciBfIGluIFsgMCAuLiBnZXRfcm5kX2xlbmd0aCgpIF0gKVxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQGhvbGxlcml0aCA9XG5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBpbnRlcmZhY2U6IC0+XG4gICAgeyBIb2xsZXJpdGgsXG4gICAgICBob2xsZXJpdGhfMTAsXG4gICAgICBob2xsZXJpdGhfMTBtdnAsXG4gICAgICBob2xsZXJpdGhfMTI4LFxuICAgICAgaW50ZXJuYWxzICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBAZXEgICAgICggzqlhbnlidF9fXzEgPSAtPiB0eXBlX29mIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAgICAgICAgICApLCAnZnVuY3Rpb24nXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fXzIgPSAtPiB0eXBlX29mIGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgICApLCAnZnVuY3Rpb24nXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0X25pbmVyc19yZTogLT5cbiAgICB7IGludGVybmFsczogeyB0eXBlcywgfSAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IGdldF9uaW5lcnNfcmUsICAgICAgICAgIH0gPSB0eXBlcy5pbnRlcm5hbHNcbiAgICAjIGRlYnVnICfOqWhsbHRfX18zJywgJzk4NycucmVwbGFjZSAvLy8gXiAoPzogOSApKj8gKD89IC4gJCApIC8vL2d2LCAnJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X19fNCA9IC0+IGdldF9uaW5lcnNfcmUgJzknICksIC8vLyBeICg/OiA5ICApKiAoPz0gLisgJCApIC8vL2d2XG4gICAgICBAZXEgICAgICggzqlhbnlidF9fXzUgPSAtPiBnZXRfbmluZXJzX3JlICcqJyApLCAvLy8gXiAoPzogXFwqICkqICg/PSAuKyAkICkgLy8vZ3ZcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgbGVhZGluZ19uaW5lcnNfcmUgPSBnZXRfbmluZXJzX3JlICc5J1xuICAgICAgQGVxICAgICAoIM6pYW55YnRfX182ID0gLT4gJzk5OTknLnJlcGxhY2UgbGVhZGluZ19uaW5lcnNfcmUsICcnICksICc5J1xuICAgICAgQGVxICAgICAoIM6pYW55YnRfX183ID0gLT4gICc5OTknLnJlcGxhY2UgbGVhZGluZ19uaW5lcnNfcmUsICcnICksICc5J1xuICAgICAgQGVxICAgICAoIM6pYW55YnRfX184ID0gLT4gICAnOTknLnJlcGxhY2UgbGVhZGluZ19uaW5lcnNfcmUsICcnICksICc5J1xuICAgICAgQGVxICAgICAoIM6pYW55YnRfX185ID0gLT4gICAgJzknLnJlcGxhY2UgbGVhZGluZ19uaW5lcnNfcmUsICcnICksICc5J1xuICAgICAgQGVxICAgICAoIM6pYW55YnRfXzEwID0gLT4gJzk5ODknLnJlcGxhY2UgbGVhZGluZ19uaW5lcnNfcmUsICcnICksICc4OSdcbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X18xMSA9IC0+ICAnOTg5Jy5yZXBsYWNlIGxlYWRpbmdfbmluZXJzX3JlLCAnJyApLCAnODknXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fMTIgPSAtPiAgICc4OScucmVwbGFjZSBsZWFkaW5nX25pbmVyc19yZSwgJycgKSwgJzg5J1xuICAgICAgQGVxICAgICAoIM6pYW55YnRfXzEzID0gLT4gJzk5OTInLnJlcGxhY2UgbGVhZGluZ19uaW5lcnNfcmUsICcnICksICcyJ1xuICAgICAgQGVxICAgICAoIM6pYW55YnRfXzE0ID0gLT4gICc5OTInLnJlcGxhY2UgbGVhZGluZ19uaW5lcnNfcmUsICcnICksICcyJ1xuICAgICAgQGVxICAgICAoIM6pYW55YnRfXzE1ID0gLT4gICAnOTInLnJlcGxhY2UgbGVhZGluZ19uaW5lcnNfcmUsICcnICksICcyJ1xuICAgICAgQGVxICAgICAoIM6pYW55YnRfXzE2ID0gLT4gICAgJzcnLnJlcGxhY2UgbGVhZGluZ19uaW5lcnNfcmUsICcnICksICc3J1xuICAgICAgQGVxICAgICAoIM6pYW55YnRfXzE3ID0gLT4gICAgICcnLnJlcGxhY2UgbGVhZGluZ19uaW5lcnNfcmUsICcnICksICcnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaDEwbXZwXzE6IC0+XG4gICAgeyBIb2xsZXJpdGgsXG4gICAgICBob2xsZXJpdGhfMTAsXG4gICAgICBob2xsZXJpdGhfMTBtdnAsXG4gICAgICBob2xsZXJpdGhfMTI4LFxuICAgICAgaW50ZXJuYWxzICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAgICAgKCDOqWFueWJ0X18xOCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAtOTk5ICAgKSwgJ0swMDAnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzE5ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAtOTkgICApLCAnTDAwJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18yMCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgLTkwICAgKSwgJ0wwOSdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMjEgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgIC0xMSAgICksICdMODgnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzIyID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAtMTAgICApLCAnTDg5J1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18yMyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC05ICAgKSwgJ00wJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18yNCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC04ICAgKSwgJ00xJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18yNSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC03ICAgKSwgJ00yJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18yNiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC02ICAgKSwgJ00zJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18yNyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC01ICAgKSwgJ000J1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18yOCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC00ICAgKSwgJ001J1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18yOSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC0zICAgKSwgJ002J1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18zMCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC0yICAgKSwgJ003J1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18zMSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC0xICAgKSwgJ004J1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18zMiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgICAwICAgKSwgJ04nXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzMzID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgIDEgICApLCAnTzEnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzM0ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgKzkgICApLCAnTzknXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzM1ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICArMTAgICApLCAnUDEwJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18zNiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgKzIwICAgKSwgJ1AyMCdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMzcgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICs5MCAgICksICdQOTAnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzM4ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAxMjMgICApLCAnUTEyMydcbiAgICBAZXEgICAgICggzqlhbnlidF9fMzkgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgKzkwMCAgICksICdROTAwJ1xuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoMTBtdnBfMjogLT5cbiAgICB7IEhvbGxlcml0aCxcbiAgICAgIGhvbGxlcml0aF8xMCxcbiAgICAgIGhvbGxlcml0aF8xMG12cCxcbiAgICAgIGhvbGxlcml0aF8xMjgsXG4gICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzQwID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyIC05OTkgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIC05OTlcbiAgICBAZXEgICAgICggzqlhbnlidF9fNDEgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgIC05OSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgIC05OVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X180MiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgLTkwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgLTkwXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzQzID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAtMTEgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAtMTFcbiAgICBAZXEgICAgICggzqlhbnlidF9fNDQgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgIC0xMCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgIC0xMFxuICAgIEBlcSAgICAgKCDOqWFueWJ0X180NSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC05ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgIC05XG4gICAgQGVxICAgICAoIM6pYW55YnRfXzQ2ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTggICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgLThcbiAgICBAZXEgICAgICggzqlhbnlidF9fNDcgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtNyAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAtN1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X180OCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC02ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgIC02XG4gICAgQGVxICAgICAoIM6pYW55YnRfXzQ5ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTUgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgLTVcbiAgICBAZXEgICAgICggzqlhbnlidF9fNTAgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtNCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAtNFxuICAgIEBlcSAgICAgKCDOqWFueWJ0X181MSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC0zICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgIC0zXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzUyID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTIgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgLTJcbiAgICBAZXEgICAgICggzqlhbnlidF9fNTMgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtMSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAtMVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X181NCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgICAwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgICAwXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzU1ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgIDEgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgIDFcbiAgICBAZXEgICAgICggzqlhbnlidF9fNTYgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICArOSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICArOVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X181NyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgKzEwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgKzEwXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzU4ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICArMjAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICArMjBcbiAgICBAZXEgICAgICggzqlhbnlidF9fNTkgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICs5MCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICs5MFxuICAgIEBlcSAgICAgKCDOqWFueWJ0X182MCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgMTIzICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgMTIzXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzYxID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICs5MDAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICs5MDBcbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaDEwbXZwXzM6IC0+XG4gICAgeyBIb2xsZXJpdGgsXG4gICAgICBob2xsZXJpdGhfMTAsXG4gICAgICBob2xsZXJpdGhfMTBtdnAsXG4gICAgICBob2xsZXJpdGhfMTI4LFxuICAgICAgaW50ZXJuYWxzICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAgICAgKCDOqWFueWJ0X182MiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAtOTk5ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbIC05OTksIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNjMgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgIC05OSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgLTk5LCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzY0ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAtOTAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgIC05MCwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X182NSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgLTExICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAtMTEsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNjYgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgIC0xMCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgLTEwLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzY3ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTkgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICAtOSwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X182OCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC04ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgLTgsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNjkgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtNyAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgIC03LCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzcwID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTYgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICAtNiwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X183MSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC01ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgLTUsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNzIgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtNCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgIC00LCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzczID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTMgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICAtMywgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X183NCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC0yICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgLTIsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNzUgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtMSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgIC0xLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzc2ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgIDAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICAgMCwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X183NyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgICAxICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgIDEsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNzggPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICArOSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgICs5LCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzc5ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICArMTAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICsxMCwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X184MCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgKzIwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICArMjAsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fODEgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICs5MCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgKzkwLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzgyID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAxMjMgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgIDEyMywgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X184MyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciArOTAwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICs5MDAsIF1cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaDEwbXZwX3NvcnRpbmdfMTogLT5cbiAgICB7IEhvbGxlcml0aCxcbiAgICAgIGhvbGxlcml0aF8xMCxcbiAgICAgIGhvbGxlcml0aF8xMG12cCxcbiAgICAgIGhvbGxlcml0aF8xMjgsXG4gICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgc29ydGVkX3NpbmdsZXMgPSAoIHBhZGRpbmcgPSBudWxsICkgPT5cbiAgICAgIHByb2JlcyA9IFtcbiAgICAgICAgWyAtOTk5LCBdXG4gICAgICAgIFsgIC05OSwgXVxuICAgICAgICBbICAtOTAsIF1cbiAgICAgICAgWyAgLTExLCBdXG4gICAgICAgIFsgIC0xMCwgXVxuICAgICAgICBbICAgLTksIF1cbiAgICAgICAgWyAgIC04LCBdXG4gICAgICAgIFsgICAtNywgXVxuICAgICAgICBbICAgLTYsIF1cbiAgICAgICAgWyAgIC01LCBdXG4gICAgICAgIFsgICAtNCwgXVxuICAgICAgICBbICAgLTMsIF1cbiAgICAgICAgWyAgIC0yLCBdXG4gICAgICAgIFsgICAtMSwgXVxuICAgICAgICBbICAgIDAsIF1cbiAgICAgICAgWyAgICAxLCBdXG4gICAgICAgIFsgICArOSwgXVxuICAgICAgICBbICArMTAsIF1cbiAgICAgICAgWyAgKzIwLCBdXG4gICAgICAgIFsgICs5MCwgXVxuICAgICAgICBbICAxMjMsIF1cbiAgICAgICAgWyArOTAwLCBdXG4gICAgICAgIF1cbiAgICAgIGZvciBwcm9iZSwgaWR4IGluIHByb2Jlc1xuICAgICAgICBzayAgICAgICAgICAgID0gaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBwcm9iZVxuICAgICAgICBzayAgICAgICAgICAgID0gc2sucGFkRW5kIHBhZGRpbmcsIGhvbGxlcml0aF8xMG12cC5jZmcuenB1bnNbIDAgXSBpZiBwYWRkaW5nP1xuICAgICAgICBwcm9iZXNbIGlkeCBdID0geyBzaywgcHJvYmUsIGlkeCwgfVxuICAgICAgcHJvYmVzLnNvcnQgKCBhLCBiICkgLT5cbiAgICAgICAgcmV0dXJuIC0xIGlmIGEuc2sgPCBiLnNrXG4gICAgICAgIHJldHVybiArMSBpZiBhLnNrID4gYi5za1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgZm9yIGVudHJ5LCBpZHggaW4gcHJvYmVzXG4gICAgICAgICMgZGVidWcgJ86paGxsdF9fODQnLCBlbnRyeVxuICAgICAgICBAZXEgKCDOqWhsbHRfXzg1ID0gLT4gZW50cnkuaWR4ICksIGlkeFxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHNvcnRlZF9zaW5nbGVzIG51bGxcbiAgICBzb3J0ZWRfc2luZ2xlcyAxMFxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoMTBtdnBfc29ydGluZ18yOiAtPlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEwbXZwLFxuICAgICAgaW50ZXJuYWxzICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHByb2JlcyA9IFtcbiAgICAgIFsgWyAtOTk5LCAgICAgICAgICAgXSwgJ0swMDAnLCAgICAgIF1cbiAgICAgIFsgWyAgLTk5LCAgICAgICAgICAgXSwgJ0wwMCcsICAgICAgIF1cbiAgICAgIFsgWyAgLTkwLCAgICAgICAgICAgXSwgJ0wwOScsICAgICAgIF1cbiAgICAgIFsgWyAgLTExLCAgICAgICAgICAgXSwgJ0w4OCcsICAgICAgIF1cbiAgICAgIFsgWyAgLTEwLCAgICAgICAgICAgXSwgJ0w4OScsICAgICAgIF1cbiAgICAgIFsgWyAgIC05LCAgICAgICAgICAgXSwgJ00wJywgICAgICAgIF1cbiAgICAgIFsgWyAgIC04LCAgICAgICAgICAgXSwgJ00xJywgICAgICAgIF1cbiAgICAgIFsgWyAgIC03LCAgICAgICAgICAgXSwgJ00yJywgICAgICAgIF1cbiAgICAgIFsgWyAgIC02LCAgICAgICAgICAgXSwgJ00zJywgICAgICAgIF1cbiAgICAgIFsgWyAgIC01LCAgICAgICAgICAgXSwgJ000JywgICAgICAgIF1cbiAgICAgIFsgWyAgIC00LCAgICAgICAgICAgXSwgJ001JywgICAgICAgIF1cbiAgICAgIFsgWyAgIC0zLCAgICAgICAgICAgXSwgJ002JywgICAgICAgIF1cbiAgICAgIFsgWyAgIC0yLCAgICAgICAgICAgXSwgJ003JywgICAgICAgIF1cbiAgICAgIFsgWyAgIC0xLCAgICAgICAgICAgXSwgJ004JywgICAgICAgIF1cbiAgICAgIFsgWyAgICswLCAgLTIwLCAgICAgXSwgJ05MMjAnLCAgICAgIF1cbiAgICAgIFsgWyAgICswLCAgICAgICAgICAgXSwgJ04nLCAgICAgICAgIF1cbiAgICAgIFsgWyAgICswLCAgKzIwLCAgICAgXSwgJ05QMjAnLCAgICAgIF1cbiAgICAgIFsgWyAgICs5LCAgICAgICAgICAgXSwgJ085JywgICAgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgIC0zLCAgICAgXSwgJ1AxME02JywgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgIC0yLCAgICAgXSwgJ1AxME03JywgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgIC0xLCAgICAgXSwgJ1AxME04JywgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgICAgICAgICAgXSwgJ1AxMCcsICAgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgICswLCAgICAgXSwgJ1AxME4nLCAgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgICsxLCAgICAgXSwgJ1AxME8xJywgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgKzEwLCAtMSwgXSwgJ1AxMFAxME04JywgIF1cbiAgICAgIFsgWyAgKzEwLCAgKzEwLCAgICAgXSwgJ1AxMFAxMCcsICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgKzIwLCAgICAgXSwgJ1AxMFAyMCcsICAgIF1cbiAgICAgIFsgWyAgKzIwLCAgICAgICAgICAgXSwgJ1AyMCcsICAgICAgIF1cbiAgICAgIFsgWyAgKzIwLCAgKzEwLCAgICAgXSwgJ1AyMFAxMCcsICAgIF1cbiAgICAgIFsgWyAgKzkwLCAgICAgICAgICAgXSwgJ1A5MCcsICAgICAgIF1cbiAgICAgIFsgWyArOTAwLCAgICAgICAgICAgXSwgJ1E5MDAnLCAgICAgIF1cbiAgICAgIF1cbiAgICB1bGluZXMgICAgICAgICAgICA9IFtdXG4gICAgcGxpbmVzICAgICAgICAgICAgPSBbXVxuICAgIGV4cGVjdGVkX2luZGV4ZXMgID0gKCBpZHggZm9yIGlkeCBpbiBbIDAgLi4uIHByb2Jlcy5sZW5ndGggXSApXG4gICAgc2h1ZmZsZSAgICAgICAgICAgPSBHVVkucm5kLmdldF9zaHVmZmxlIDU3LCA4OFxuICAgIGZvciBbIHZkeCwgc2tfbWF0Y2hlciwgXSwgaWR4IGluIHByb2Jlc1xuICAgICAgdXNrICAgPSBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIHZkeFxuICAgICAgcHNrICAgPSB1c2sucGFkRW5kIDEwLCBob2xsZXJpdGhfMTBtdnAuY2ZnLnpwdW5zWyAwIF1cbiAgICAgIHVzayAgID0gdXNrLnBhZEVuZCAxMCwgJyAnXG4gICAgICB1bGluZXMucHVzaCBcIiN7dXNrfSAje3JwciB2ZHh9ICN7aWR4fVwiXG4gICAgICBwbGluZXMucHVzaCBcIiN7cHNrfSAje3JwciB2ZHh9ICN7aWR4fVwiXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmb3IgXyBpbiBbIDEgLi4gMTAgXVxuICAgICAgdWxpbmVzID0gc2h1ZmZsZSB1bGluZXNcbiAgICAgIHVsaW5lcy5zb3J0KClcbiAgICAgIHJlYWxfaW5kZXhlcyA9IFtdXG4gICAgICBmb3IgdWxpbmUgaW4gdWxpbmVzXG4gICAgICAgICMgaGVscCAnzqlobGx0X184NicsIHVsaW5lXG4gICAgICAgIHJlYWxfaW5kZXhlcy5wdXNoIE51bWJlciB1bGluZS5yZXBsYWNlIC9eLio/XFxzKFswLTldKykkLywgJyQxJ1xuICAgICAgQGVxICggzqlobGx0X184NyA9IC0+IGVxdWFscyBleHBlY3RlZF9pbmRleGVzLCByZWFsX2luZGV4ZXMgKSwgZmFsc2VcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGZvciBfIGluIFsgMSAuLiAxMCBdXG4gICAgICBwbGluZXMgPSBzaHVmZmxlIHBsaW5lc1xuICAgICAgcGxpbmVzLnNvcnQoKVxuICAgICAgcmVhbF9pbmRleGVzID0gW11cbiAgICAgIGZvciBwbGluZSBpbiBwbGluZXNcbiAgICAgICAgIyBoZWxwICfOqWhsbHRfXzg4JywgcGxpbmVcbiAgICAgICAgcmVhbF9pbmRleGVzLnB1c2ggTnVtYmVyIHBsaW5lLnJlcGxhY2UgL14uKj9cXHMoWzAtOV0rKSQvLCAnJDEnXG4gICAgICBAZXEgKCDOqWhsbHRfXzg5ID0gLT4gZXF1YWxzIGV4cGVjdGVkX2luZGV4ZXMsIHJlYWxfaW5kZXhlcyApLCB0cnVlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaDEwbXZwMl9iaWdfc2h1ZmZsZTogLT5cbiAgICB7IEhvbGxlcml0aCxcbiAgICAgIGhvbGxlcml0aF8xMG12cDIsXG4gICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgIGdldF9yYW5kb21fdmR4ICAgICAgICAgICAgICA9IGhlbHBlcnMuZ2V0X3JhbmRvbV92ZHhfcHJvZHVjZXIoKVxuICAgIHByb2JlX2NvdW50ICAgICAgICAgICAgICAgICA9IDVcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHByb2JlcyAgICAgICAgICAgID0gWyBnZXRfcmFuZG9tX3ZkeCgpIGZvciBfIGluIFsgMCAuLiBwcm9iZV9jb3VudCBdIF1cbiAgICBwcm9iZXNfMiAgICAgICAgICA9IHByb2Jlc1sgLi4gXVxuICAgIGRlYnVnICfOqWhsbHRfXzkwJywgcHJvYmVzXG4gICAgcHJvYmVzXzIuc29ydCAoIGEsIGIgKSAtPlxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4uICggTWF0aC5tYXggYS5sZW5ndGgsIGIubGVuZ3RoICkgXVxuICAgICAgICBkYSA9IGFbIGlkeCBdID8gMFxuICAgICAgICBkYiA9IGJbIGlkeCBdID8gMFxuICAgICAgICBjb250aW51ZSBpZiBkYSBpcyBkYlxuICAgICAgICByZXR1cm4gLTEgaWYgZGEgPCBkYlxuICAgICAgICByZXR1cm4gKzFcbiAgICAgIHJldHVybiBudWxsXG4gICAgZm9yIHZkeCBpbiBwcm9iZXNfMlxuICAgICAgZGVidWcgJ86paGxsdF9fOTEnLCB2ZHhcbiAgICAjIHVsaW5lcyAgICAgICAgICAgID0gW11cbiAgICAjIHBsaW5lcyAgICAgICAgICAgID0gW11cbiAgICAjIGV4cGVjdGVkX2luZGV4ZXMgID0gKCBpZHggZm9yIGlkeCBpbiBbIDAgLi4uIHByb2Jlcy5sZW5ndGggXSApXG4gICAgIyBmb3IgWyB2ZHgsIHNrX21hdGNoZXIsIF0sIGlkeCBpbiBwcm9iZXNcbiAgICAjICAgdXNrICAgPSBob2xsZXJpdGhfMTBtdnAyLmVuY29kZSB2ZHhcbiAgICAjICAgQGVxICggzqlobGx0X185MiA9IC0+IHVzayApLCBza19tYXRjaGVyXG4gICAgIyAgIHBzayAgID0gdXNrLnBhZEVuZCAxMCwgaG9sbGVyaXRoXzEwbXZwMi5jZmcuenB1bnNbIDAgXVxuICAgICMgICB1c2sgICA9IHVzay5wYWRFbmQgMTAsICcgJ1xuICAgICMgICB1bGluZXMucHVzaCBcIiN7dXNrfSAje3JwciB2ZHh9ICN7aWR4fVwiXG4gICAgIyAgIHBsaW5lcy5wdXNoIFwiI3twc2t9ICN7cnByIHZkeH0gI3tpZHh9XCJcbiAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBmb3IgXyBpbiBbIDEgLi4gMTAgXVxuICAgICMgICB1bGluZXMgPSBzaHVmZmxlIHVsaW5lc1xuICAgICMgICB1bGluZXMuc29ydCgpXG4gICAgIyAgIHJlYWxfaW5kZXhlcyA9IFtdXG4gICAgIyAgIGZvciB1bGluZSBpbiB1bGluZXNcbiAgICAjICAgICAjIGhlbHAgJ86paGxsdF9fOTMnLCB1bGluZVxuICAgICMgICAgIHJlYWxfaW5kZXhlcy5wdXNoIE51bWJlciB1bGluZS5yZXBsYWNlIC9eLio/XFxzKFswLTldKykkLywgJyQxJ1xuICAgICMgICBAZXEgKCDOqWhsbHRfXzk0ID0gLT4gZXF1YWxzIGV4cGVjdGVkX2luZGV4ZXMsIHJlYWxfaW5kZXhlcyApLCBmYWxzZVxuICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIGZvciBfIGluIFsgMSAuLiAxMCBdXG4gICAgIyAgIHBsaW5lcyA9IHNodWZmbGUgcGxpbmVzXG4gICAgIyAgIHBsaW5lcy5zb3J0KClcbiAgICAjICAgcmVhbF9pbmRleGVzID0gW11cbiAgICAjICAgZm9yIHBsaW5lIGluIHBsaW5lc1xuICAgICMgICAgICMgaGVscCAnzqlobGx0X185NScsIHBsaW5lXG4gICAgIyAgICAgcmVhbF9pbmRleGVzLnB1c2ggTnVtYmVyIHBsaW5lLnJlcGxhY2UgL14uKj9cXHMoWzAtOV0rKSQvLCAnJDEnXG4gICAgIyAgIEBlcSAoIM6paGxsdF9fOTYgPSAtPiBlcXVhbHMgZXhwZWN0ZWRfaW5kZXhlcywgcmVhbF9pbmRleGVzICksIHRydWVcbiAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGgxMjhfMTYzODNfc29ydGluZ18yOiAtPlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEyOF8xNjM4MyxcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwcm9iZXMgPSBbXG4gICAgICBbIFsgLTk5OSwgICAgICAgICAgIF0sICfDjcK/OycsICAgICBdXG4gICAgICBbIFsgIC05OSwgICAgICAgICAgIF0sICfDjj8nLCAgICAgIF1cbiAgICAgIFsgWyAgLTkwLCAgICAgICAgICAgXSwgJ8OOSCcsICAgICAgXVxuICAgICAgWyBbICAtODAsICAgICAgICAgICBdLCAnw45SJywgICAgICBdXG4gICAgICBbIFsgIC0yMSwgICAgICAgICAgIF0sICfDjsKxJywgICAgICBdXG4gICAgICBbIFsgIC0yMCwgICAgICAgICAgIF0sICfDjycsICAgICAgIF1cbiAgICAgIFsgWyAgLTExLCAgICAgICAgICAgXSwgJ8OYJywgICAgICAgXVxuICAgICAgWyBbICAtMTAsICAgICAgICAgICBdLCAnw5knLCAgICAgICBdXG4gICAgICBbIFsgICAtOSwgICAgICAgICAgIF0sICfDmicsICAgICAgIF1cbiAgICAgIFsgWyAgIC04LCAgICAgICAgICAgXSwgJ8ObJywgICAgICAgXVxuICAgICAgWyBbICAgLTcsICAgICAgICAgICBdLCAnw5wnLCAgICAgICBdXG4gICAgICBbIFsgICAtNiwgICAgICAgICAgIF0sICfDnScsICAgICAgIF1cbiAgICAgIFsgWyAgIC01LCAgICAgICAgICAgXSwgJ8OeJywgICAgICAgXVxuICAgICAgWyBbICAgLTQsICAgICAgICAgICBdLCAnw58nLCAgICAgICBdXG4gICAgICBbIFsgICAtMywgICAgICAgICAgIF0sICfDoCcsICAgICAgIF1cbiAgICAgIFsgWyAgIC0yLCAgICAgICAgICAgXSwgJ8OhJywgICAgICAgXVxuICAgICAgWyBbICAgLTEsICAgICAgICAgICBdLCAnw6InLCAgICAgICBdXG4gICAgICBbIFsgICArMCwgIC0yMCwgICAgIF0sICfDo8OPJywgICAgICBdXG4gICAgICBbIFsgICArMCwgICAgICAgICAgIF0sICfDoycsICAgICAgIF1cbiAgICAgIFsgWyAgICswLCAgKzIwLCAgICAgXSwgJ8Ojw7cnLCAgICAgIF1cbiAgICAgIFsgWyAgICs5LCAgICAgICAgICAgXSwgJ8OsJywgICAgICAgXVxuICAgICAgWyBbICArMTAsICAgLTMsICAgICBdLCAnw63DoCcsICAgICAgXVxuICAgICAgWyBbICArMTAsICAgLTIsICAgICBdLCAnw63DoScsICAgICAgXVxuICAgICAgWyBbICArMTAsICAgLTEsICAgICBdLCAnw63DoicsICAgICAgXVxuICAgICAgWyBbICArMTAsICAgICAgICAgICBdLCAnw60nLCAgICAgICBdXG4gICAgICBbIFsgICsxMCwgICArMCwgICAgIF0sICfDrcOjJywgICAgICBdXG4gICAgICBbIFsgICsxMCwgICArMSwgICAgIF0sICfDrcOkJywgICAgICBdXG4gICAgICBbIFsgICsxMCwgICsxMCwgLTEsIF0sICfDrcOtw6InLCAgICAgXVxuICAgICAgWyBbICArMTAsICArMTAsICAgICBdLCAnw63DrScsICAgICAgXVxuICAgICAgWyBbICArMTAsICArMjAsICAgICBdLCAnw63DtycsICAgICAgXVxuICAgICAgWyBbICArMjAsICAgICAgICAgICBdLCAnw7cnLCAgICAgICBdXG4gICAgICBbIFsgICsyMCwgICsxMCwgICAgIF0sICfDt8OtJywgICAgICBdXG4gICAgICBbIFsgICs5MCwgICAgICAgICAgIF0sICfDuH4nLCAgICAgIF1cbiAgICAgIFsgWyArOTAwLCAgICAgICAgICAgXSwgJ8O5KiYnLCAgICAgXVxuICAgICAgXVxuICAgIHVucGFkZGVkX2xpbmVzICAgID0gW11cbiAgICBwYWRkZWRfbGluZXMgICAgICA9IFtdXG4gICAgZXhwZWN0ZWRfaW5kZXhlcyAgPSAoIGlkeCBmb3IgaWR4IGluIFsgMCAuLi4gcHJvYmVzLmxlbmd0aCBdIClcbiAgICBzaHVmZmxlICAgICAgICAgICA9IEdVWS5ybmQuZ2V0X3NodWZmbGUgNTcsIDg4XG4gICAgY29kZWMgICAgICAgICAgICAgPSBob2xsZXJpdGhfMTI4XzE2MzgzXG4gICAgIyBkZWJ1ZyAnzqlobGx0X185NycsIGNvZGVjLmNmZy5fbWF4X2RpZ2l0c19wZXJfaWR4XG4gICAgIyBkZWJ1ZyAnzqlobGx0X185OCcsIGNvZGVjLmNmZy56ZXJvX3BhZF9sZW5ndGhcbiAgICBAZXEgKCDOqWhsbHRfXzk5ID0gLT4gY29kZWMuY2ZnLmJhc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgMTI4XG4gICAgQGVxICggzqlobGx0XzEwMCA9IC0+IGNvZGVjLmNmZy5fbWF4X2ludGVnZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICsxNjM4M1xuICAgIEBlcSAoIM6paGxsdF8xMDEgPSAtPiBjb2RlYy5jZmcuX21pbl9pbnRlZ2VyICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAtMTYzODNcbiAgICBAZXEgKCDOqWhsbHRfMTAyID0gLT4gY29kZWMuY2ZnLnBtYWdfY2hyc1sgMiBdICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8O5J1xuICAgIEBlcSAoIM6paGxsdF8xMDMgPSAtPiBjb2RlYy5jZmcubm1hZ19jaHJzWyAyIF0gICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw40nXG4gICAgQGVxICggzqlobGx0XzEwNCA9IC0+IGNvZGVjLmVuY29kZSBjb2RlYy5jZmcuX21heF9pbnRlZ2VyICAgICAgICAgICAgICAgICksICfDucOGw4YnXG4gICAgQGVxICggzqlobGx0XzEwNSA9IC0+IGNvZGVjLmVuY29kZSBjb2RlYy5jZmcuX21pbl9pbnRlZ2VyICAgICAgICAgICAgICAgICksICfDjSEhJ1xuICAgIEBlcSAoIM6paGxsdF8xMDYgPSAtPiBjb2RlYy5kZWNvZGUgJ8ONISEnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAtMTYzODMgXVxuICAgIEB0aHJvd3MgKCDOqWhsbHRfMTA3ID0gLT4gY29kZWMuZGVjb2RlICfDhyEhISEhISEhJyAgICAgICAgICAgICAgICAgICAgICAgKSwgL25vdCBhIHZhbGlkIHNvcnRrZXkvXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmb3IgWyB2ZHgsIHNrX21hdGNoZXIsIF0sIGlkeCBpbiBwcm9iZXNcbiAgICAgIHVzayAgID0gY29kZWMuZW5jb2RlIHZkeFxuICAgICAgQGVxICggzqlobGx0XzEwOCA9IC0+IHVzayApLCBza19tYXRjaGVyXG4gICAgICAjIGVjaG8gcnByIHVza1xuICAgICAgcHNrICAgPSB1c2sucGFkRW5kIDEwLCBjb2RlYy5jZmcuX2NpcGhlclxuICAgICAgdXNrICAgPSB1c2sucGFkRW5kIDEwLCAnICdcbiAgICAgIHVucGFkZGVkX2xpbmVzLnB1c2ggXCIje3Vza30gI3tycHIgdmR4fSAje2lkeH1cIlxuICAgICAgcGFkZGVkX2xpbmVzLnB1c2ggXCIje3Bza30gI3tycHIgdmR4fSAje2lkeH1cIlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqlobGx0XzEwOSA9IC0+IGNvZGVjLmNmZy5fbWF4X2RpZ2l0c19wZXJfaWR4ICAgICAgICAgICAgICAgICAgICAgICAgKSwgMlxuICAgIEBlcSAoIM6paGxsdF8xMTAgPSAtPiBjb2RlYy5jZmcuenB1bl9tYXggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDIwXG4gICAgQGVxICggzqlobGx0XzExMSA9IC0+IGNvZGVjLmNmZy5fbmF1Z2h0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyEnXG4gICAgQGVxICggzqlobGx0XzExMiA9IC0+IGNvZGVjLmNmZy5fbm92YSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8OGJ1xuICAgIEBlcSAoIM6paGxsdF8xMTMgPSAtPiBjb2RlYy5jZmcuX2NpcGhlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDoydcbiAgICBAZXEgKCDOqWhsbHRfMTE0ID0gLT4gY29kZWMuY2ZnLm5tYWcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnIMOOw40nXG4gICAgQGVxICggzqlobGx0XzExNSA9IC0+IGNvZGVjLmNmZy5wbWFnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyDDuMO5J1xuICAgIEBlcSAoIM6paGxsdF8xMTYgPSAtPiBjb2RlYy5jZmcucG1hZ19jaHJzWyBjb2RlYy5jZmcuX21heF9kaWdpdHNfcGVyX2lkeCBdICksICfDuSdcbiAgICBAZXEgKCDOqWhsbHRfMTE3ID0gLT4gY29kZWMuZW5jb2RlIC0xNjM4MyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw40hISdcbiAgICBAZXEgKCDOqWhsbHRfMTE4ID0gLT4gY29kZWMuZW5jb2RlIC0xNjM4MiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw40hIydcbiAgICBAZXEgKCDOqWhsbHRfMTE5ID0gLT4gY29kZWMuZW5jb2RlIC0xMjkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw43DhcOFJ1xuICAgIEBlcSAoIM6paGxsdF8xMjAgPSAtPiBjb2RlYy5lbmNvZGUgLTEyOCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDjcOFw4YnXG4gICAgQGVxICggzqlobGx0XzEyMSA9IC0+IGNvZGVjLmVuY29kZSAtMTI3ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8OOISdcbiAgICBAZXEgKCDOqWhsbHRfMTIyID0gLT4gY29kZWMuZW5jb2RlIC04MCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw45SJ1xuICAgIEBlcSAoIM6paGxsdF8xMjMgPSAtPiBjb2RlYy5lbmNvZGUgLTIxICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDjsKxJ1xuICAgIEBlcSAoIM6paGxsdF8xMjQgPSAtPiBjb2RlYy5lbmNvZGUgLTIxICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDjsKxJ1xuICAgIEBlcSAoIM6paGxsdF8xMjUgPSAtPiBjb2RlYy5lbmNvZGUgLTIwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDjydcbiAgICBAZXEgKCDOqWhsbHRfMTI2ID0gLT4gY29kZWMuZW5jb2RlIC0xICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw6InXG4gICAgQGVxICggzqlobGx0XzEyNyA9IC0+IGNvZGVjLmVuY29kZSArMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8OjJ1xuICAgIEBlcSAoIM6paGxsdF8xMjggPSAtPiBjb2RlYy5lbmNvZGUgKzEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDpCdcbiAgICBAZXEgKCDOqWhsbHRfMTI5ID0gLT4gY29kZWMuZW5jb2RlICsyMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw7cnXG4gICAgQGVxICggzqlobGx0XzEzMCA9IC0+IGNvZGVjLmVuY29kZSArMjEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8O4OCdcbiAgICBAZXEgKCDOqWhsbHRfMTMxID0gLT4gY29kZWMuZW5jb2RlICsxMjcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw7jDhidcbiAgICBAZXEgKCDOqWhsbHRfMTMyID0gLT4gY29kZWMuZW5jb2RlICsxMjggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw7kjISdcbiAgICBAZXEgKCDOqWhsbHRfMTMzID0gLT4gY29kZWMuZW5jb2RlICsxMjkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw7kjIydcbiAgICBAZXEgKCDOqWhsbHRfMTM0ID0gLT4gY29kZWMuZW5jb2RlICsxNjM4MiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw7nDhsOFJ1xuICAgIEBlcSAoIM6paGxsdF8xMzUgPSAtPiBjb2RlYy5lbmNvZGUgKzE2MzgzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDucOGw4YnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgKCDOqWhsbHRfMTM2ID0gLT4gY29kZWMuZGVjb2RlICfDjSEhJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAtMTYzODMgXVxuICAgIEBlcSAoIM6paGxsdF8xMzcgPSAtPiBjb2RlYy5kZWNvZGUgJ8ONISMnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIC0xNjM4MiBdXG4gICAgQGVxICggzqlobGx0XzEzOCA9IC0+IGNvZGVjLmRlY29kZSAnw43DhcOFJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAtMTI5IF1cbiAgICBAZXEgKCDOqWhsbHRfMTM5ID0gLT4gY29kZWMuZGVjb2RlICfDjcOFw4YnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIC0xMjggXVxuICAgIEBlcSAoIM6paGxsdF8xNDAgPSAtPiBjb2RlYy5kZWNvZGUgJ8OOIScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIC0xMjcgXVxuICAgIEBlcSAoIM6paGxsdF8xNDEgPSAtPiBjb2RlYy5kZWNvZGUgJ8OOwrEnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAtMjEgXVxuICAgIEBlcSAoIM6paGxsdF8xNDIgPSAtPiBjb2RlYy5kZWNvZGUgJ8OPJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIC0yMCBdXG4gICAgQGVxICggzqlobGx0XzE0MyA9IC0+IGNvZGVjLmRlY29kZSAnw6InICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgLTEgXVxuICAgIEBlcSAoIM6paGxsdF8xNDQgPSAtPiBjb2RlYy5kZWNvZGUgJ8OjJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIDAgXVxuICAgIEBlcSAoIM6paGxsdF8xNDUgPSAtPiBjb2RlYy5kZWNvZGUgJ8OkJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIDEgXVxuICAgIEBlcSAoIM6paGxsdF8xNDYgPSAtPiBjb2RlYy5kZWNvZGUgJ8O3JyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIDIwIF1cbiAgICBAZXEgKCDOqWhsbHRfMTQ3ID0gLT4gY29kZWMuZGVjb2RlICfDuDgnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAyMSBdXG4gICAgQGVxICggzqlobGx0XzE0OCA9IC0+IGNvZGVjLmRlY29kZSAnw7jDhicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIDEyNyBdXG4gICAgQGVxICggzqlobGx0XzE0OSA9IC0+IGNvZGVjLmRlY29kZSAnw7kjIScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgMTI4IF1cbiAgICBAZXEgKCDOqWhsbHRfMTUwID0gLT4gY29kZWMuZGVjb2RlICfDuSMjJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAxMjkgXVxuICAgIEBlcSAoIM6paGxsdF8xNTEgPSAtPiBjb2RlYy5kZWNvZGUgJ8O5w4bDhScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgMTYzODIgXVxuICAgIEBlcSAoIM6paGxsdF8xNTIgPSAtPiBjb2RlYy5kZWNvZGUgJ8O5w4bDhicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgMTYzODMgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZm9yIF8gaW4gWyAxIC4uIDEwIF1cbiAgICAgIHVucGFkZGVkX2xpbmVzID0gc2h1ZmZsZSB1bnBhZGRlZF9saW5lc1xuICAgICAgdW5wYWRkZWRfbGluZXMuc29ydCgpXG4gICAgICByZWFsX2luZGV4ZXMgPSBbXVxuICAgICAgZm9yIHVsaW5lIGluIHVucGFkZGVkX2xpbmVzXG4gICAgICAgICMgaGVscCAnzqlobGx0XzE1MycsIHVsaW5lXG4gICAgICAgIHJlYWxfaW5kZXhlcy5wdXNoIE51bWJlciB1bGluZS5yZXBsYWNlIC9eLio/XFxzKFswLTldKykkLywgJyQxJ1xuICAgICAgQGVxICggzqlobGx0XzE1NCA9IC0+IGVxdWFscyBleHBlY3RlZF9pbmRleGVzLCByZWFsX2luZGV4ZXMgKSwgZmFsc2VcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGZvciBfIGluIFsgMSAuLiAxMCBdXG4gICAgICBwYWRkZWRfbGluZXMgPSBzaHVmZmxlIHBhZGRlZF9saW5lc1xuICAgICAgcGFkZGVkX2xpbmVzLnNvcnQoKVxuICAgICAgcmVhbF9pbmRleGVzID0gW11cbiAgICAgIGZvciBwbGluZSwgaWR4IGluIHBhZGRlZF9saW5lc1xuICAgICAgICAjIGhlbHAgJ86paGxsdF8xNTUnLCBycHIgcGxpbmUgaWYgXyBpcyAxXG4gICAgICAgIHJlYWxfaW5kZXhlcy5wdXNoIE51bWJlciBwbGluZS5yZXBsYWNlIC9eLio/XFxzKFswLTldKykkLywgJyQxJ1xuICAgICAgQGVxICggzqlobGx0XzE1NiA9IC0+IGVxdWFscyBleHBlY3RlZF9pbmRleGVzLCByZWFsX2luZGV4ZXMgKSwgdHJ1ZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGgxMjhfZGVjb2RlOiAtPlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEyOCxcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwcm9iZXNfYW5kX21hdGNoZXJzID0gW1xuICAgICAgWyAnw4chw4bDhsOGw4bDhsK/O8OjJywgWyAtOTk5LCAgICAgICAgIF0sICdubnVtOsONLMK/O1stOTk5XXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8OHIcOGw4bDhsOGw4bDhj/DoycsIFsgLTk5LCAgICAgICAgICBdLCAnbm51bTrDjiw/Wy05OV18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDhyHDhsOGw4bDhsOGw4ZIw6MnLCBbIC05MCwgICAgICAgICAgXSwgJ25udW06w44sSFstOTBdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw5jDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC0xMSwgICAgICAgICAgXSwgJ251bjrDmFstMTFdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8OZw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtMTAsICAgICAgICAgIF0sICdudW46w5lbLTEwXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDmsOjw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTksICAgICAgICAgICBdLCAnbnVuOsOaWy05XXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw5vDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC04LCAgICAgICAgICAgXSwgJ251bjrDm1stOF18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Ocw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtNywgICAgICAgICAgIF0sICdudW46w5xbLTddfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDncOjw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTYsICAgICAgICAgICBdLCAnbnVuOsOdWy02XXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw57Do8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC01LCAgICAgICAgICAgXSwgJ251bjrDnlstNV18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Ofw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtNCwgICAgICAgICAgIF0sICdudW46w59bLTRdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDoMOjw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTMsICAgICAgICAgICBdLCAnbnVuOsOgWy0zXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw6HDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC0yLCAgICAgICAgICAgXSwgJ251bjrDoVstMl18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Oiw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtMSwgICAgICAgICAgIF0sICdudW46w6JbLTFdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDo8OPw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMCwgLTIwLCAgICAgICBdLCAnemVybzrDo1swXXxudW46w49bLTIwXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgXVxuICAgICAgWyAnw6PDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIDAsICAgICAgICAgICAgXSwgJ3BhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8Ojw6NbMF0nLCAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Ojw7fDo8Ojw6PDo8Ojw6PDo8OjJywgWyAwLCAyMCwgICAgICAgIF0sICd6ZXJvOsOjWzBdfHB1bjrDt1syMF18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICBdXG4gICAgICBbICfDrMOjw6PDo8Ojw6PDo8Ojw6PDoycsIFsgOSwgICAgICAgICAgICBdLCAncHVuOsOsWzldfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw63DoMOjw6PDo8Ojw6PDo8Ojw6MnLCBbIDEwLCAtMywgICAgICAgXSwgJ3B1bjrDrVsxMF18bnVuOsOgWy0zXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Otw6HDo8Ojw6PDo8Ojw6PDo8OjJywgWyAxMCwgLTIsICAgICAgIF0sICdwdW46w61bMTBdfG51bjrDoVstMl18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICBdXG4gICAgICBbICfDrcOiw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMTAsIC0xLCAgICAgICBdLCAncHVuOsOtWzEwXXxudW46w6JbLTFdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgXVxuICAgICAgWyAnw63Do8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIDEwLCAgICAgICAgICAgXSwgJ3B1bjrDrVsxMF18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Otw6TDo8Ojw6PDo8Ojw6PDo8OjJywgWyAxMCwgMSwgICAgICAgIF0sICdwdW46w61bMTBdfHB1bjrDpFsxXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICBdXG4gICAgICBbICfDrcOtw6LDo8Ojw6PDo8Ojw6PDoycsIFsgMTAsIDEwLCAtMSwgICBdLCAncHVuOsOtWzEwXXxwdW46w61bMTBdfG51bjrDolstMV18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDoycsICAgXVxuICAgICAgWyAnw63DrcOjw6PDo8Ojw6PDo8Ojw6MnLCBbIDEwLCAxMCwgICAgICAgXSwgJ3B1bjrDrVsxMF18cHVuOsOtWzEwXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Otw7fDo8Ojw6PDo8Ojw6PDo8OjJywgWyAxMCwgMjAsICAgICAgIF0sICdwdW46w61bMTBdfHB1bjrDt1syMF18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICBdXG4gICAgICBbICfDt8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMjAsICAgICAgICAgICBdLCAncHVuOsO3WzIwXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw7fDrcOjw6PDo8Ojw6PDo8Ojw6MnLCBbIDIwLCAxMCwgICAgICAgXSwgJ3B1bjrDt1syMF18cHVuOsOtWzEwXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgIF1cbiAgICAgIFsgJ8O4fsOjw6PDo8Ojw6PDo8Ojw6MnLCBbIDkwLCAgICAgICAgICAgXSwgJ3BudW06w7gsfls5MF18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw7kqJsOjw6PDo8Ojw6PDo8OjJywgWyA5MDAsICAgICAgICAgIF0sICdwbnVtOsO5LComWzkwMF18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgXVxuICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY29kZWMgPSBob2xsZXJpdGhfMTI4XG4gICAgZm9yIFsgc29ydGtleSwgaW5kZXhfbWF0Y2hlciwgdW5pdF9tYXRjaGVyLCBdIGluIHByb2Jlc19hbmRfbWF0Y2hlcnNcbiAgICAgIHVuaXRfcmVzdWx0ICAgICA9IFtdXG4gICAgICBpbmRleF9yZXN1bHQgICAgPSBbXVxuICAgICAgZm9yIHVuaXQgaW4gY29kZWMucGFyc2Ugc29ydGtleVxuICAgICAgICB1bml0X3Jlc3VsdC5wdXNoICBoZWxwZXJzLnJwcl91bml0IHVuaXRcbiAgICAgICAgaW5kZXhfcmVzdWx0LnB1c2ggdW5pdC5pbmRleCBpZiB1bml0LmluZGV4P1xuICAgICAgdW5pdF9yZXN1bHQgICA9IHVuaXRfcmVzdWx0LmpvaW4gJ3wnXG4gICAgICAjIGluZm8gJ86paGxsdF8xNTcnLCBmXCIjeyggcnByIHVuaXRfcmVzdWx0ICkgKyAnLCd9Ojw2MGM7ICN7cnByIGluZGV4X3Jlc3VsdH1cIlxuICAgICMgICBAZXEgKCDOqWhsbHRfMTU4ID0gLT4gIHVuaXRfcmVzdWx0ICAgICAgICAgICAgICAgICAgICAgKSwgIHVuaXRfbWF0Y2hlclxuICAgICAgQGVxICggzqlobGx0XzE1OSA9IC0+IGluZGV4X3Jlc3VsdCAgICAgICAgICAgICAgICAgICAgICksIGluZGV4X21hdGNoZXJcbiAgICAgIEBlcSAoIM6paGxsdF8xNjAgPSAtPiBzb3J0a2V5ICksICggY29kZWMuZW5jb2RlIGluZGV4X21hdGNoZXIgKS5wYWRFbmQgc29ydGtleS5sZW5ndGgsIGNvZGVjLmNmZy56cHVuc1sgMCBdXG4gICAgICAjIGRlYnVnICfOqWhsbHRfMTYxJywgcnByICggY29kZWMuZW5jb2RlIGluZGV4X21hdGNoZXIgKS5wYWRFbmQgc29ydGtleS5sZW5ndGgsIGNvZGVjLmNmZy56cHVuc1sgMCBdXG4gICAgICBAZXEgKCDOqWhsbHRfMTYyID0gLT4gY29kZWMuZGVjb2RlIHNvcnRrZXkgICksIGluZGV4X21hdGNoZXJcbiAgICAgICMgZWNobyBbIHNvcnRrZXksIGluZGV4X3Jlc3VsdCwgdW5pdF9yZXN1bHQsIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgQGVxICAgICAoIM6paGxsdF8xNjMgPSAtPiBjb2RlYy5wYXJzZSAnNScgICAgICAgICAgKSwgWyB7IG5hbWU6ICdvdGhlcicsIGxldHRlcnM6ICc1JywgbWFudGlzc2E6IG51bGwsIGluZGV4OiBudWxsIH0gXVxuICAgICMgQGVxICAgICAoIM6paGxsdF8xNjQgPSAtPiBjb2RlYy5wYXJzZSAnw6TDtsO8JyAgICAgICAgKSwgWyB7IG5hbWU6ICdvdGhlcicsIGxldHRlcnM6ICfDpMO2w7wnLCBtYW50aXNzYTogbnVsbCwgaW5kZXg6IG51bGwgfSBdXG4gICAgIyBAZXEgICAgICggzqlobGx0XzE2NSA9IC0+IGNvZGVjLnBhcnNlICdZOTAww6TDtsO8JyAgICApLCBbIHsgbmFtZTogJ3BudW0nLCBsZXR0ZXJzOiAnWScsIG1hbnRpc3NhOiAnOTAwJywgaW5kZXg6IDkwMCB9LCB7IG5hbWU6ICdvdGhlcicsIGxldHRlcnM6ICfDpMO2w7wnLCBtYW50aXNzYTogbnVsbCwgaW5kZXg6IG51bGwgfSBdXG4gICAgIyBAdGhyb3dzICggzqlobGx0XzE2NiA9IC0+IGNvZGVjLmRlY29kZSAnNScgICAgICAgICApLCAvbm90IGEgdmFsaWQgc29ydGtleTogdW5hYmxlIHRvIHBhcnNlICc1Jy9cbiAgICAjIEB0aHJvd3MgKCDOqWhsbHRfMTY3ID0gLT4gY29kZWMuZGVjb2RlICfDpMO2w7wnICAgICAgICksIC9ub3QgYSB2YWxpZCBzb3J0a2V5OiB1bmFibGUgdG8gcGFyc2UgJ8Okw7bDvCcvXG4gICAgIyBAdGhyb3dzICggzqlobGx0XzE2OCA9IC0+IGNvZGVjLmRlY29kZSAnw6TDtsO8JyAgICAgICApLCAvbm90IGEgdmFsaWQgc29ydGtleTogdW5hYmxlIHRvIHBhcnNlICfDvCcgaW4gJ1k5MDDDpMO2w7wnL1xuICAgICMgQHRocm93cyAoIM6paGxsdF8xNjkgPSAtPiBjb2RlYy5kZWNvZGUgJ1k5MDDDpMO2w7wnICAgKSwgL25vdCBhIHZhbGlkIHNvcnRrZXk6IHVuYWJsZSB0byBwYXJzZSAnWTkwMCcgaW4gJ1k5MDDDpMO2w7wnL1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBkZWJ1ZyAnzqlobGx0XzE3MCcsIHJwciBjb2RlYy5lbmNvZGUgLTkwICMgICAgWyAnw43CvzvDo8Ojw6PDo8Ojw6PDoycsIFsgLTk5OSwgICAgICAgICBdLCAnbm51bTrDjSzCvztbLTk5OV18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICBdXG4gICAgIyBkZWJ1ZyAnzqlobGx0XzE3MScsIHJwciBjb2RlYy5kZWNvZGUgJ8OHIcOGw4bDhsOGw4bDhkgnICMgICAgWyAnw43CvzvDo8Ojw6PDo8Ojw6PDoycsIFsgLTk5OSwgICAgICAgICBdLCAnbm51bTrDjSzCvztbLTk5OV18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICBdXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGgxMG12cDJfZGVjb2RlX3VuaXRzOiAtPlxuICAgICMjIyBOT1RFIGFsc28gc2VlIGNvcnJlc3BvbmRpbmcgdGVzdCBpbiBgaGVuZ2lzdC1ORy9kZXYvaW50ZXJsZXgvc3JjL3Rlc3QtaG9sbGVyaXRoLmNvZmZlZWAgIyMjXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICB7IEhvbGxlcml0aCxcbiAgICAgIGhvbGxlcml0aF8xMG12cDIsXG4gICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgIyB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwcm9iZXNfYW5kX21hdGNoZXJzID0gW1xuICAgICAgWyAnQTAwME5OTk5OTicsIFsgLTk5OSAgICAgICAgXSwgJ25udW06QSwwMDBbLTk5OV18cGFkZGluZzpOTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0IwME5OTk5OTk4nLCBbIC05OSAgICAgICAgIF0sICdubnVtOkIsMDBbLTk5XXxwYWRkaW5nOk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdCMDlOTk5OTk5OJywgWyAtOTAgICAgICAgICBdLCAnbm51bTpCLDA5Wy05MF18cGFkZGluZzpOTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnQjg4Tk5OTk5OTicsIFsgLTExICAgICAgICAgXSwgJ25udW06Qiw4OFstMTFdfHBhZGRpbmc6Tk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0I4OU5OTk5OTk4nLCBbIC0xMCAgICAgICAgIF0sICdubnVtOkIsODlbLTEwXXxwYWRkaW5nOk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdFTk5OTk5OTk5OJywgWyAtOSAgICAgICAgICBdLCAnbnVuOkVbLTldfHBhZGRpbmc6Tk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnRk5OTk5OTk5OTicsIFsgLTggICAgICAgICAgXSwgJ251bjpGWy04XXxwYWRkaW5nOk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0dOTk5OTk5OTk4nLCBbIC03ICAgICAgICAgIF0sICdudW46R1stN118cGFkZGluZzpOTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdITk5OTk5OTk5OJywgWyAtNiAgICAgICAgICBdLCAnbnVuOkhbLTZdfHBhZGRpbmc6Tk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnSU5OTk5OTk5OTicsIFsgLTUgICAgICAgICAgXSwgJ251bjpJWy01XXxwYWRkaW5nOk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0pOTk5OTk5OTk4nLCBbIC00ICAgICAgICAgIF0sICdudW46SlstNF18cGFkZGluZzpOTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdLTk5OTk5OTk5OJywgWyAtMyAgICAgICAgICBdLCAnbnVuOktbLTNdfHBhZGRpbmc6Tk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnTE5OTk5OTk5OTicsIFsgLTIgICAgICAgICAgXSwgJ251bjpMWy0yXXxwYWRkaW5nOk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ01OTk5OTk5OTk4nLCBbIC0xICAgICAgICAgIF0sICdudW46TVstMV18cGFkZGluZzpOTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdOQjc5Tk5OTk5OJywgWyAwLCAtMjAgICAgICBdLCAnemVybzpOWzBdfG5udW06Qiw3OVstMjBdfHBhZGRpbmc6Tk5OTk5OJywgICAgICAgICAgICAgXVxuICAgICAgWyAnTk5OTk5OTk5OTicsIFsgMCAgICAgICAgICAgXSwgJ3BhZGRpbmc6Tk5OTk5OTk5OTlswXScsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ05ZMjBOTk5OTk4nLCBbIDAsIDIwICAgICAgIF0sICd6ZXJvOk5bMF18cG51bTpZLDIwWzIwXXxwYWRkaW5nOk5OTk5OTicsICAgICAgICAgICAgICBdXG4gICAgICBbICdXTk5OTk5OTk5OJywgWyA5ICAgICAgICAgICBdLCAncHVuOldbOV18cGFkZGluZzpOTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnWTEwS05OTk5OTicsIFsgMTAsIC0zICAgICAgXSwgJ3BudW06WSwxMFsxMF18bnVuOktbLTNdfHBhZGRpbmc6Tk5OTk5OJywgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ1kxMExOTk5OTk4nLCBbIDEwLCAtMiAgICAgIF0sICdwbnVtOlksMTBbMTBdfG51bjpMWy0yXXxwYWRkaW5nOk5OTk5OTicsICAgICAgICAgICAgICBdXG4gICAgICBbICdZMTBNTk5OTk5OJywgWyAxMCwgLTEgICAgICBdLCAncG51bTpZLDEwWzEwXXxudW46TVstMV18cGFkZGluZzpOTk5OTk4nLCAgICAgICAgICAgICAgXVxuICAgICAgWyAnWTEwTk5OTk5OTicsIFsgMTAgICAgICAgICAgXSwgJ3BudW06WSwxMFsxMF18cGFkZGluZzpOTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ1kxME9OTk5OTk4nLCBbIDEwLCAxICAgICAgIF0sICdwbnVtOlksMTBbMTBdfHB1bjpPWzFdfHBhZGRpbmc6Tk5OTk5OJywgICAgICAgICAgICAgICBdXG4gICAgICBbICdZMTBZMTBNTk5OJywgWyAxMCwgMTAsIC0xICBdLCAncG51bTpZLDEwWzEwXXxwbnVtOlksMTBbMTBdfG51bjpNWy0xXXxwYWRkaW5nOk5OTicsICAgXVxuICAgICAgWyAnWTEwWTEwTk5OTicsIFsgMTAsIDEwICAgICAgXSwgJ3BudW06WSwxMFsxMF18cG51bTpZLDEwWzEwXXxwYWRkaW5nOk5OTk4nLCAgICAgICAgICAgIF1cbiAgICAgIFsgJ1kxMFkyME5OTk4nLCBbIDEwLCAyMCAgICAgIF0sICdwbnVtOlksMTBbMTBdfHBudW06WSwyMFsyMF18cGFkZGluZzpOTk5OJywgICAgICAgICAgICBdXG4gICAgICBbICdZMjBOTk5OTk5OJywgWyAyMCAgICAgICAgICBdLCAncG51bTpZLDIwWzIwXXxwYWRkaW5nOk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnWTIwWTEwTk5OTicsIFsgMjAsIDEwICAgICAgXSwgJ3BudW06WSwyMFsyMF18cG51bTpZLDEwWzEwXXxwYWRkaW5nOk5OTk4nLCAgICAgICAgICAgIF1cbiAgICAgIFsgJ1k5ME5OTk5OTk4nLCBbIDkwICAgICAgICAgIF0sICdwbnVtOlksOTBbOTBdfHBhZGRpbmc6Tk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdaOTAwTk5OTk5OJywgWyA5MDAgICAgICAgICBdLCAncG51bTpaLDkwMFs5MDBdfHBhZGRpbmc6Tk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnTk5OTk5OTk5OJywgIFsgMCAgICAgICAgICAgXSwgJ3BhZGRpbmc6Tk5OTk5OTk5OWzBdJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ05OJywgICAgICAgICBbIDAgICAgICAgICAgIF0sICdwYWRkaW5nOk5OWzBdJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdOJywgICAgICAgICAgWyAwICAgICAgICAgICBdLCAncGFkZGluZzpOWzBdJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnWTEwJywgICAgICAgIFsgMTAgICAgICAgICAgXSwgJ3BudW06WSwxMFsxMF0nLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0snLCAgICAgICAgICBbIC0zICAgICAgICAgIF0sICdudW46S1stM10nLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjb2RlYyAgICAgICAgICAgPSBob2xsZXJpdGhfMTBtdnAyXG4gICAgc29ydGtleV9wYWRkZXIgID0gY29kZWMuY2ZnLnpwdW5fY2hyc1sgMCBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmb3IgWyBzb3J0a2V5LCBpbmRleF9tYXRjaGVyLCB1bml0X21hdGNoZXIsIF0gaW4gcHJvYmVzX2FuZF9tYXRjaGVyc1xuICAgICAgdW5pdF9yZXN1bHQgICAgID0gW11cbiAgICAgIGluZGV4X3Jlc3VsdCAgICA9IFtdXG4gICAgICBmb3IgdW5pdCBpbiBjb2RlYy5wYXJzZSBzb3J0a2V5XG4gICAgICAgIHVuaXRfcmVzdWx0LnB1c2ggIGhlbHBlcnMucnByX3VuaXQgdW5pdFxuICAgICAgICBpbmRleF9yZXN1bHQucHVzaCB1bml0LmluZGV4IGlmIHVuaXQuaW5kZXg/XG4gICAgICB1bml0X3Jlc3VsdCAgID0gdW5pdF9yZXN1bHQuam9pbiAnfCdcbiAgICAgICMgaW5mbyAnzqlobGx0XzE3MicsIGZcIiN7KCBycHIgdW5pdF9yZXN1bHQgKSArICcsJ306PDYwYzsgI3tycHIgaW5kZXhfcmVzdWx0fVwiXG4gICAgICBAZXEgKCDOqWhsbHRfMTczID0gLT4gdW5pdF9yZXN1bHQgICAgICAgICAgICAgICAgICAgICAgKSwgdW5pdF9tYXRjaGVyXG4gICAgICBAZXEgKCDOqWhsbHRfMTc0ID0gLT4gaW5kZXhfcmVzdWx0ICAgICAgICAgICAgICAgICAgICAgKSwgaW5kZXhfbWF0Y2hlclxuICAgICAgQGVxICggzqlobGx0XzE3NSA9IC0+IGNvZGVjLmRlY29kZSBzb3J0a2V5ICAgICAgICAgICAgICksIGluZGV4X21hdGNoZXJcbiAgICAgIEBlcSAoIM6paGxsdF8xNzYgPSAtPiBzb3J0a2V5ICAgICAgICAgICAgICAgICAgICAgICAgICApLCAoIGNvZGVjLmVuY29kZSBpbmRleF9tYXRjaGVyICkucGFkRW5kIHNvcnRrZXkubGVuZ3RoLCBzb3J0a2V5X3BhZGRlclxuICAgICAgIyBlY2hvIFsgc29ydGtleSwgaW5kZXhfcmVzdWx0LCB1bml0X3Jlc3VsdCwgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICAgICAoIM6paGxsdF8xNzcgPSAtPiBjb2RlYy5wYXJzZSAnNScgICAgICAgICApLCBbIHsgbmFtZTogJ290aGVyJywgbGV0dGVyczogJzUnLCBtYW50aXNzYTogbnVsbCwgaW5kZXg6IG51bGwgfSBdXG4gICAgQGVxICAgICAoIM6paGxsdF8xNzggPSAtPiBjb2RlYy5wYXJzZSAnw6TDtsO8JyAgICAgICApLCBbIHsgbmFtZTogJ290aGVyJywgbGV0dGVyczogJ8Okw7bDvCcsIG1hbnRpc3NhOiBudWxsLCBpbmRleDogbnVsbCB9IF1cbiAgICBAZXEgICAgICggzqlobGx0XzE3OSA9IC0+IGNvZGVjLnBhcnNlICdZOTAww6TDtsO8JyAgICksIFsgeyBuYW1lOiAncG51bScsIGxldHRlcnM6ICdZJywgbWFudGlzc2E6ICc5MDAnLCBpbmRleDogOTAwIH0sIHsgbmFtZTogJ290aGVyJywgbGV0dGVyczogJ8Okw7bDvCcsIG1hbnRpc3NhOiBudWxsLCBpbmRleDogbnVsbCB9IF1cbiAgICBAdGhyb3dzICggzqlobGx0XzE4MCA9IC0+IGNvZGVjLmRlY29kZSAnNScgICAgICAgICksIC9ub3QgYSB2YWxpZCBzb3J0a2V5OiB1bmFibGUgdG8gcGFyc2UgJzUnL1xuICAgIEB0aHJvd3MgKCDOqWhsbHRfMTgxID0gLT4gY29kZWMuZGVjb2RlICfDpMO2w7wnICAgICAgKSwgL25vdCBhIHZhbGlkIHNvcnRrZXk6IHVuYWJsZSB0byBwYXJzZSAnw6TDtsO8Jy9cbiAgICBAdGhyb3dzICggzqlobGx0XzE4MiA9IC0+IGNvZGVjLmRlY29kZSAnWTkwMMOkw7bDvCcgICksIC9ub3QgYSB2YWxpZCBzb3J0a2V5OiB1bmFibGUgdG8gcGFyc2UgJ8Okw7bDvCcgaW4gJ1k5MDDDpMO2w7wnL1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyBoMTI4Yl9kZWNvZGU6IC0+XG4gICMgICB7IEhvbGxlcml0aCxcbiAgIyAgICAgaG9sbGVyaXRoXzEyOCxcbiAgIyAgICAgaG9sbGVyaXRoXzEwbXZwLFxuICAjICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICMgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgIyAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICAjIGNvZGVjID0gaG9sbGVyaXRoXzEyOFxuICAjICAgY29kZWMgPSBob2xsZXJpdGhfMTBtdnBcbiAgIyAgIGRlYnVnICfOqWhsbHRfMTgzJywgcnByIGNvZGVjLmVuY29kZSAtMVxuICAjICAgZGVidWcgJ86paGxsdF8xODQnLCBycHIgY29kZWMuZW5jb2RlIC0yXG4gICMgICBuID0gICAtMTAwOyB1cmdlICfOqWhsbHRfMTg1JywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAjICAgbiA9ICAgIC0yMTsgdXJnZSAnzqlobGx0XzE4NicsIGZcIiN7IHJwciBbIG4sIF0gfTo+MTBjOyAje3JwciBzayA9IGNvZGVjLmVuY29kZSBufTo8NWM7ICN7IHJwciBjb2RlYy5kZWNvZGUgc2t9Oj4xMGM7XCJcbiAgIyAgIG4gPSAgICAtMjA7IHVyZ2UgJ86paGxsdF8xODcnLCBmXCIjeyBycHIgWyBuLCBdIH06PjEwYzsgI3tycHIgc2sgPSBjb2RlYy5lbmNvZGUgbn06PDVjOyAjeyBycHIgY29kZWMuZGVjb2RlIHNrfTo+MTBjO1wiXG4gICMgICBuID0gICAgLTE5OyB1cmdlICfOqWhsbHRfMTg4JywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAjICAgbiA9ICAgICAtMTsgdXJnZSAnzqlobGx0XzE4OScsIGZcIiN7IHJwciBbIG4sIF0gfTo+MTBjOyAje3JwciBzayA9IGNvZGVjLmVuY29kZSBufTo8NWM7ICN7IHJwciBjb2RlYy5kZWNvZGUgc2t9Oj4xMGM7XCJcbiAgIyAgIG4gPSAgICAgIDA7IHVyZ2UgJ86paGxsdF8xOTAnLCBmXCIjeyBycHIgWyBuLCBdIH06PjEwYzsgI3tycHIgc2sgPSBjb2RlYy5lbmNvZGUgbn06PDVjOyAjeyBycHIgY29kZWMuZGVjb2RlIHNrfTo+MTBjO1wiXG4gICMgICBuID0gICAgICAxOyB1cmdlICfOqWhsbHRfMTkxJywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAjICAgbiA9ICAgICAgMjsgdXJnZSAnzqlobGx0XzE5MicsIGZcIiN7IHJwciBbIG4sIF0gfTo+MTBjOyAje3JwciBzayA9IGNvZGVjLmVuY29kZSBufTo8NWM7ICN7IHJwciBjb2RlYy5kZWNvZGUgc2t9Oj4xMGM7XCJcbiAgIyAgIG4gPSAgICAgIDM7IHVyZ2UgJ86paGxsdF8xOTMnLCBmXCIjeyBycHIgWyBuLCBdIH06PjEwYzsgI3tycHIgc2sgPSBjb2RlYy5lbmNvZGUgbn06PDVjOyAjeyBycHIgY29kZWMuZGVjb2RlIHNrfTo+MTBjO1wiXG4gICMgICBuID0gICAgIDEwOyB1cmdlICfOqWhsbHRfMTk0JywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAjICAgbiA9ICAgIDEyNjsgdXJnZSAnzqlobGx0XzE5NScsIGZcIiN7IHJwciBbIG4sIF0gfTo+MTBjOyAje3JwciBzayA9IGNvZGVjLmVuY29kZSBufTo8NWM7ICN7IHJwciBjb2RlYy5kZWNvZGUgc2t9Oj4xMGM7XCJcbiAgIyAgIG4gPSAgICAxMjc7IHVyZ2UgJ86paGxsdF8xOTYnLCBmXCIjeyBycHIgWyBuLCBdIH06PjEwYzsgI3tycHIgc2sgPSBjb2RlYy5lbmNvZGUgbn06PDVjOyAjeyBycHIgY29kZWMuZGVjb2RlIHNrfTo+MTBjO1wiXG4gICMgICBuID0gICAgMTI4OyB1cmdlICfOqWhsbHRfMTk3JywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAjICAgbiA9ICAgIDEyOTsgdXJnZSAnzqlobGx0XzE5OCcsIGZcIiN7IHJwciBbIG4sIF0gfTo+MTBjOyAje3JwciBzayA9IGNvZGVjLmVuY29kZSBufTo8NWM7ICN7IHJwciBjb2RlYy5kZWNvZGUgc2t9Oj4xMGM7XCJcbiAgIyAgICMgZm9yIFsgc29ydGtleSwgaW5kZXhfbWF0Y2hlciwgdW5pdF9tYXRjaGVyLCBdIGluIHByb2Jlc19hbmRfbWF0Y2hlcnNcbiAgIyAgICMgICB1bml0X3Jlc3VsdCAgICAgPSBbXVxuICAjICAgIyAgIGluZGV4X3Jlc3VsdCAgICA9IFtdXG4gICMgICAjICAgZm9yIHVuaXQgaW4gY29kZWMucGFyc2Ugc29ydGtleVxuICAjICAgIyAgICAgdW5pdF9yZXN1bHQucHVzaCAgaGVscGVycy5ycHJfdW5pdCB1bml0XG4gICMgICAjICAgICBpbmRleF9yZXN1bHQucHVzaCB1bml0LmluZGV4IGlmIHVuaXQuaW5kZXg/XG4gICMgICAjICAgdW5pdF9yZXN1bHQgICA9IHVuaXRfcmVzdWx0LmpvaW4gJ3wnXG4gICMgICAjICAgaW5mbyAnzqlobGx0XzE5OScsIGZcIiN7KCBycHIgdW5pdF9yZXN1bHQgKSArICcsJ306PDYwYzsgI3tycHIgaW5kZXhfcmVzdWx0fVwiXG4gICMgICAjICMgICBAZXEgKCDOqWhsbHRfMjAwID0gLT4gIHVuaXRfcmVzdWx0ICAgICAgICAgICAgICAgICAgICAgKSwgIHVuaXRfbWF0Y2hlclxuICAjICAgIyAgIEBlcSAoIM6paGxsdF8yMDEgPSAtPiBpbmRleF9yZXN1bHQgICAgICAgICAgICAgICAgICAgICApLCBpbmRleF9tYXRjaGVyXG4gICMgICAjICAgQGVxICggzqlobGx0XzIwMiA9IC0+IHNvcnRrZXkgKSwgKCBjb2RlYy5lbmNvZGUgaW5kZXhfbWF0Y2hlciApLnBhZEVuZCBzb3J0a2V5Lmxlbmd0aCwgY29kZWMuY2ZnLnpwdW5zWyAwIF1cbiAgIyAgICMgICBkZWJ1ZyAnzqlobGx0XzIwMycsIHJwciAoIGNvZGVjLmVuY29kZSBpbmRleF9tYXRjaGVyICkucGFkRW5kIHNvcnRrZXkubGVuZ3RoLCBjb2RlYy5jZmcuenB1bnNbIDAgXVxuICAjICAgIyAgIEBlcSAoIM6paGxsdF8yMDQgPSAtPiBjb2RlYy5kZWNvZGUgc29ydGtleSAgKSwgaW5kZXhfbWF0Y2hlclxuICAjICAgIyAgICMgZWNobyBbIHNvcnRrZXksIGluZGV4X3Jlc3VsdCwgdW5pdF9yZXN1bHQsIF1cbiAgIyAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgIyAgICMgQGVxICAgICAoIM6paGxsdF8yMDUgPSAtPiBjb2RlYy5wYXJzZSAnNScgICAgICAgICApLCBbIHsgbmFtZTogJ290aGVyJywgbGV0dGVyczogJzUnLCBtYW50aXNzYTogbnVsbCwgaW5kZXg6IG51bGwgfSBdXG4gICMgICAjIEBlcSAgICAgKCDOqWhsbHRfMjA2ID0gLT4gY29kZWMucGFyc2UgJ8Okw7bDvCcgICAgICAgKSwgWyB7IG5hbWU6ICdvdGhlcicsIGxldHRlcnM6ICfDpMO2w7wnLCBtYW50aXNzYTogbnVsbCwgaW5kZXg6IG51bGwgfSBdXG4gICMgICAjIEBlcSAgICAgKCDOqWhsbHRfMjA3ID0gLT4gY29kZWMucGFyc2UgJ1k5MDDDpMO2w7wnICAgKSwgWyB7IG5hbWU6ICdwbnVtJywgbGV0dGVyczogJ1knLCBtYW50aXNzYTogJzkwMCcsIGluZGV4OiA5MDAgfSwgeyBuYW1lOiAnb3RoZXInLCBsZXR0ZXJzOiAnw6TDtsO8JywgbWFudGlzc2E6IG51bGwsIGluZGV4OiBudWxsIH0gXVxuICAjICAgIyBAdGhyb3dzICggzqlobGx0XzIwOCA9IC0+IGNvZGVjLmRlY29kZSAnNScgICAgICAgICksIC9ub3QgYSB2YWxpZCBzb3J0a2V5OiB1bmFibGUgdG8gcGFyc2UgJzUnL1xuICAjICAgIyBAdGhyb3dzICggzqlobGx0XzIwOSA9IC0+IGNvZGVjLmRlY29kZSAnw6TDtsO8JyAgICAgICksIC9ub3QgYSB2YWxpZCBzb3J0a2V5OiB1bmFibGUgdG8gcGFyc2UgJ8Okw7bDvCcvXG4gICMgICAjIEB0aHJvd3MgKCDOqWhsbHRfMjEwID0gLT4gY29kZWMuZGVjb2RlICdZOTAww6TDtsO8JyAgKSwgL25vdCBhIHZhbGlkIHNvcnRrZXk6IHVuYWJsZSB0byBwYXJzZSAnw6TDtsO8JyBpbiAnWTkwMMOkw7bDvCcvXG4gICMgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAjICAgcmV0dXJuIG51bGxcblxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdHlwZXM6IC0+XG4gICAgeyBpbnRlcm5hbHMsXG4gICAgICBIb2xsZXJpdGhfdHlwZXNwYWNlLFxuICAgICAgQ0ZHLCAgICAgICAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aC9saWIvdHlwZXMnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgeyBwaWNrLCAgICAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3BpY2soKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIFQgPSBuZXcgSG9sbGVyaXRoX3R5cGVzcGFjZSgpXG4gICAgICBAZXEgKCDOqWhsbHRfMjExID0gLT4gVFtDRkddLmJsYW5rICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdcXHgyMCdcbiAgICAgIEBlcSAoIM6paGxsdF8yMTIgPSAtPiBUW0NGR10uYmxhbmtfc3BsaXR0ZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgLyg/OlxceDIwKSsvZ3ZcbiAgICAgIEBlcSAoIM6paGxsdF8yMTMgPSAtPiBUW0NGR10uYmxhbmtfc3BsaXR0ZXIudW5pY29kZVNldHMgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlobGx0XzIxNCA9IC0+IFRbQ0ZHXS5ibGFua19zcGxpdHRlci5nbG9iYWwgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWhsbHRfMjE1ID0gLT4gJ2EgICBnICB6ICAnLnJlcGxhY2UgVFtDRkddLmJsYW5rX3NwbGl0dGVyLCAnw7wnICApLCAnYcO8Z8O8esO8J1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBUID0gbmV3IEhvbGxlcml0aF90eXBlc3BhY2UgeyBibGFuazogJyMnLCB9XG4gICAgICBAZXEgKCDOqWhsbHRfMjE2ID0gLT4gVFtDRkddLmJsYW5rICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcjJ1xuICAgICAgQGVxICggzqlobGx0XzIxNyA9IC0+IFRbQ0ZHXS5ibGFua19zcGxpdHRlciAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvKD86XFx4MjMpKy9ndlxuICAgICAgQGVxICggzqlobGx0XzIxOCA9IC0+IFRbQ0ZHXS5ibGFua19zcGxpdHRlci51bmljb2RlU2V0cyAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWhsbHRfMjE5ID0gLT4gVFtDRkddLmJsYW5rX3NwbGl0dGVyLmdsb2JhbCAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paGxsdF8yMjAgPSAtPiAnYSMjI2cjI3ojIycucmVwbGFjZSBUW0NGR10uYmxhbmtfc3BsaXR0ZXIsICfDvCcgICksICdhw7xnw7x6w7wnXG4gICAgICBAZXEgKCDOqWhsbHRfMjIxID0gLT4gVC5tYWduaWZpZXJzLmlzYSAnQUJDIFhZWicgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWhsbHRfMjIyID0gLT4gVC5tYWduaWZpZXJzLmlzYSAnQUJDI1hZWicgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paGxsdF8yMjMgPSAtPiBULmJsYW5rLmlzYSAnICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paGxsdF8yMjQgPSAtPiBULmJsYW5rLmlzYSAnIycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlobGx0XzIyNSA9IC0+IFQuYmxhbmsuaXNhIFRbQ0ZHXS5ibGFuayAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgVCA9IG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlKClcbiAgICBAZXEgKCDOqWhsbHRfMjI2ID0gLT4gVC5ub25lbXB0eV90ZXh0LmlzYSA0ICAgICAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjI3ID0gLT4gVC5ub25lbXB0eV90ZXh0LmlzYSBmYWxzZSAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjI4ID0gLT4gVC5ub25lbXB0eV90ZXh0LmlzYSAnJyAgICAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjI5ID0gLT4gVC5ub25lbXB0eV90ZXh0LmlzYSAneWVzJyAgICAgICAgKSwgdHJ1ZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqlobGx0XzIzMCA9IC0+IFQuaW5jcmVtZW50YWxfdGV4dC5pc2EgJ3llcycgICAgICksIGZhbHNlXG4gICAgQGVxICggzqlobGx0XzIzMSA9IC0+IFQuZGVjcmVtZW50YWxfdGV4dC5pc2EgJ3llcycgICAgICksIGZhbHNlXG4gICAgQGVxICggzqlobGx0XzIzMiA9IC0+IFQuaW5jcmVtZW50YWxfdGV4dC5kYXRhICAgICAgICAgICksIHsgY2hyczogWyAneScsICdlJywgJ3MnIF0sIGZhaWw6IHsgeDogJ3llcycsIGlkeDogMSwgcHJ2X2NocjogJ3knLCBjaHI6ICdlJyB9IH1cbiAgICBAZXEgKCDOqWhsbHRfMjMzID0gLT4gVC5pbmNyZW1lbnRhbF90ZXh0LmlzYSAnYWJjZGVmeicgKSwgdHJ1ZVxuICAgIEBlcSAoIM6paGxsdF8yMzQgPSAtPiBULmRlY3JlbWVudGFsX3RleHQuaXNhICdhYmNkZWZ6JyApLCBmYWxzZVxuICAgIEBlcSAoIM6paGxsdF8yMzUgPSAtPiBULmluY3JlbWVudGFsX3RleHQuZGF0YSAgICAgICAgICApLCB7IGNocnM6IFsgJ2EnLCAnYicsICdjJywgJ2QnLCAnZScsICdmJywgJ3onLCBdLCB9XG4gICAgQGVxICggzqlobGx0XzIzNiA9IC0+IFQuZGVjcmVtZW50YWxfdGV4dC5kYXRhICAgICAgICAgICksIHsgY2hyczogWyAnYScsICdiJywgJ2MnLCAnZCcsICdlJywgJ2YnLCAneicgXSwgZmFpbDogeyB4OiAnYWJjZGVmeicsIGlkeDogMSwgcHJ2X2NocjogJ2EnLCBjaHI6ICdiJyB9IH1cbiAgICBAZXEgKCDOqWhsbHRfMjM3ID0gLT4gVC5pbmNyZW1lbnRhbF90ZXh0LmlzYSAnYWJjMCcgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjM4ID0gLT4gVC5pbmNyZW1lbnRhbF90ZXh0LmRhdGEgICAgICAgICAgKSwgeyBjaHJzOiBbICdhJywgJ2InLCAnYycsICcwJywgXSwgZmFpbDogeyB4OiAnYWJjMCcsIGlkeDogMywgcHJ2X2NocjogJ2MnLCBjaHI6ICcwJyB9IH1cbiAgICBAZXEgKCDOqWhsbHRfMjM5ID0gLT4gVC5kZWNyZW1lbnRhbF90ZXh0LmlzYSAnY2JhJyAgICAgKSwgdHJ1ZVxuICAgIEBlcSAoIM6paGxsdF8yNDAgPSAtPiBULmRlY3JlbWVudGFsX3RleHQuZGF0YSAgICAgICAgICApLCB7IGNocnM6IFsgJ2MnLCAnYicsICdhJywgXSwgfVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqlobGx0XzI0MSA9IC0+IFQubWFnbmlmaWVycy5pc2EgJycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjQyID0gLT4gVC5tYWduaWZpZXJzLmRhdGEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB7IG1lc3NhZ2U6IFwiZXhwZWN0ZWQgYSBtYWduaWZpZXIsIGdvdCBhbiBlbXB0eSB0ZXh0XCIsIH1cbiAgICBAZXEgKCDOqWhsbHRfMjQzID0gLT4gVC5tYWduaWZpZXJzLmlzYSAnQUJDIFhZWicgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgQGVxICggzqlobGx0XzI0NCA9IC0+IHBpY2sgVC5tYWduaWZpZXJzLmRhdGEsIFxcXG4gICAgICAgICAgICAgICAgICAgICAgIFsgJ25tYWdfY2hyc19yZXZlcnNlZCcsICdwbWFnX2NocnMnLCAnbm1hZycsICdwbWFnJywgXSApLCB7IG5tYWdfY2hyc19yZXZlcnNlZDogWyAnQScsICdCJywgJ0MnIF0sIHBtYWdfY2hyczogWyAnICcsICdYJywgJ1knLCAnWicgXSwgbm1hZzogJyBDQkEnLCBwbWFnOiAnIFhZWicgfVxuICAgIEBlcSAoIM6paGxsdF8yNDUgPSAtPiBPYmplY3QuaXNGcm96ZW4gVC5tYWduaWZpZXJzLmRhdGEubm1hZ19jaHJzX3JldmVyc2VkICksIHRydWVcbiAgICBAZXEgKCDOqWhsbHRfMjQ2ID0gLT4gT2JqZWN0LmlzRnJvemVuIFQubWFnbmlmaWVycy5kYXRhLnBtYWdfY2hycyAgICAgICAgICApLCB0cnVlXG4gICAgQGVxICggzqlobGx0XzI0NyA9IC0+IFQubWFnbmlmaWVycy5pc2EgJ0FCQ1xcblhZWicgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgQGVxICggzqlobGx0XzI0OCA9IC0+IFQubWFnbmlmaWVycy5pc2EgJ0FCQ1xcdFhZWicgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgQGVxICggzqlobGx0XzI0OSA9IC0+IFQubWFnbmlmaWVycy5pc2EgJ0FCQyAgICAgICAgICAgICBYWVonICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgIEBlcSAoIM6paGxsdF8yNTAgPSAtPiBULm1hZ25pZmllcnMuaXNhICdBQkMgRFggWVonICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgQGVxICggzqlobGx0XzI1MSA9IC0+IFQubWFnbmlmaWVycy5pc2EgJ0FCRCBDWFlaJyAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAoIM6paGxsdF8yNTIgPSAtPiBULnVuaWxpdGVyYWxzLmlzYSBudWxsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgQGVxICggzqlobGx0XzI1MyA9IC0+IFQudW5pbGl0ZXJhbHMuaXNhICcnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjU0ID0gLT4gVC51bmlsaXRlcmFscy5pc2EgJ1ZCQScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6paGxsdF8yNTUgPSAtPiBULnVuaWxpdGVyYWxzLmlzYSAnRUZHSElKS0xNIE5PUFFSU1RVVlcnICAgICAgICAgICAgICksIGZhbHNlXG4gICAgQGVxICggzqlobGx0XzI1NiA9IC0+IFQudW5pbGl0ZXJhbHMuaXNhICdFRkdISUpLTE0gTiBPUFFSU1RVVlcnICAgICAgICAgICAgKSwgdHJ1ZVxuICAgIEBlcSAoIM6paGxsdF8yNTcgPSAtPiBULnVuaWxpdGVyYWxzLmRhdGEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHsgbnVuczogJ0VGR0hJSktMTScsIHpwdW5zOiAnTk9QUVJTVFVWVycsIG51bl9jaHJzOiBbICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSicsICdLJywgJ0wnLCAnTScgXSwgenB1bl9jaHJzOiBbICdOJywgJ08nLCAnUCcsICdRJywgJ1InLCAnUycsICdUJywgJ1UnLCAnVicsICdXJyBdIH1cbiAgICBAZXEgKCDOqWhsbHRfMjU4ID0gLT4gVC51bmlsaXRlcmFscy5pc2EgJ04nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgQGVxICggzqlobGx0XzI1OSA9IC0+IFQudW5pbGl0ZXJhbHMuZGF0YSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgeyBudW5zOiAnJywgenB1bnM6ICdOJywgbnVuX2NocnM6IFtdLCB6cHVuX2NocnM6IFsgJ04nIF0gfVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQHRocm93cyAoIM6paGxsdF8yNjAgPSAtPiBULmFscGhhYmV0LnZhbGlkYXRlIG51bGwgICAgICAgICAgICAgICAgICAgICAgICAgKSwgL25vdCBhIHZhbGlkIGFscGhhYmV0L1xuICAgIEB0aHJvd3MgKCDOqWhsbHRfMjYxID0gLT4gVC5hbHBoYWJldC52YWxpZGF0ZSAnJyAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC9ub3QgYSB2YWxpZCBhbHBoYWJldC9cbiAgICBAdGhyb3dzICggzqlobGx0XzI2MiA9IC0+IFQuYWxwaGFiZXQudmFsaWRhdGUgJ2EnICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvbm90IGEgdmFsaWQgYWxwaGFiZXQvXG4gICAgQGVxICAgICAoIM6paGxsdF8yNjMgPSAtPiBULmFscGhhYmV0LnZhbGlkYXRlICdhYicgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ2FiJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQHRocm93cyAoIM6paGxsdF8yNjQgPSAtPiAgIG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlIHsgYmxhbms6IG51bGwgfSAgICAgICAgICAgICAgICAgICAgICAgICksIC9ub3QgYSB2YWxpZCBibGFuay9cbiAgICBAdGhyb3dzICggzqlobGx0XzI2NSA9IC0+ICAgbmV3IEhvbGxlcml0aF90eXBlc3BhY2UgeyBibGFuazogJycgICB9ICAgICAgICAgICAgICAgICAgICAgICAgKSwgL25vdCBhIHZhbGlkIGJsYW5rL1xuICAgIEB0aHJvd3MgKCDOqWhsbHRfMjY2ID0gLT4gICBuZXcgSG9sbGVyaXRoX3R5cGVzcGFjZSB7IGJsYW5rOiAnLS0nIH0gICAgICAgICAgICAgICAgICAgICAgICApLCAvbm90IGEgdmFsaWQgYmxhbmsvXG4gICAgQHRocm93cyAoIM6paGxsdF8yNjcgPSAtPiAoIG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlIHsgYmxhbms6IG51bGwgfSApLmJsYW5rLnZhbGlkYXRlIG51bGwgICksIC9ub3QgYSB2YWxpZCBibGFuay9cbiAgICBAdGhyb3dzICggzqlobGx0XzI2OCA9IC0+ICggbmV3IEhvbGxlcml0aF90eXBlc3BhY2UgeyBibGFuazogJycgICB9ICkuYmxhbmsudmFsaWRhdGUgJycgICAgKSwgL25vdCBhIHZhbGlkIGJsYW5rL1xuICAgIEB0aHJvd3MgKCDOqWhsbHRfMjY5ID0gLT4gKCBuZXcgSG9sbGVyaXRoX3R5cGVzcGFjZSB7IGJsYW5rOiAnLS0nIH0gKS5ibGFuay52YWxpZGF0ZSAnLS0nICApLCAvbm90IGEgdmFsaWQgYmxhbmsvXG4gICAgQGVxICAgICAoIM6paGxsdF8yNzAgPSAtPiAoIG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlIHsgYmxhbms6ICctJyAgfSApLmJsYW5rLnZhbGlkYXRlICctJyAgICksICctJ1xuICAgIEBlcSAgICAgKCDOqWhsbHRfMjcxID0gLT4gKCBuZXcgSG9sbGVyaXRoX3R5cGVzcGFjZSB7IGJsYW5rOiAnICcgIH0gKS5ibGFuay52YWxpZGF0ZSAnICcgICApLCAnICdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB2YWxpZGF0ZV9hbmRfY29tcGlsZV9jZmdfZ2VuZXJhbDogLT5cbiAgICB7IGludGVybmFscyxcbiAgICAgIEhvbGxlcml0aCwgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyBIb2xsZXJpdGhfdHlwZXNwYWNlLFxuICAgICAgQ0ZHLCAgICAgICAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aC9saWIvdHlwZXMnXG4gICAgIyB7IHR5cGVfb2YsICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgIyB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsICB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgIHsgaXNGcm96ZW46IGlzX2Zyb3plbiwgICAgICAgIH0gPSBPYmplY3RcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMjIyB0ZXN0aW5nIGEgZ2VuZXJhbCBhc3N1bXB0aW9uIHNvIHdlIGRvbid0IG1lc3MgdXA6ICMjI1xuICAgIEBlcSAoIM6paGxsdF8yNzIgPSAtPiAoIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIC0gMSApID09IC0oIE51bWJlci5NSU5fU0FGRV9JTlRFR0VSICsgMSApICksIHRydWVcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICAjIFQgPSBuZXcgSG9sbGVyaXRoX3R5cGVzcGFjZSgpXG4gICAgICBAdGhyb3dzICggzqlobGx0XzI3MyA9IC0+IEhvbGxlcml0aC52YWxpZGF0ZV9hbmRfY29tcGlsZV9jZmcge30gICAgICAgICAgICAgICAgICApLCAvbm90IGEgdmFsaWQgYWxwaGFiZXQvXG4gICAgICBAdGhyb3dzICggzqlobGx0XzI3NCA9IC0+IEhvbGxlcml0aC52YWxpZGF0ZV9hbmRfY29tcGlsZV9jZmcgeyBhbHBoYWJldDogJycgICAgfSApLCAvbm90IGEgdmFsaWQgYWxwaGFiZXQvXG4gICAgICBAdGhyb3dzICggzqlobGx0XzI3NSA9IC0+IEhvbGxlcml0aC52YWxpZGF0ZV9hbmRfY29tcGlsZV9jZmcgeyBhbHBoYWJldDogJ2EnICAgfSApLCAvbm90IGEgdmFsaWQgYWxwaGFiZXQvXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHZhbGlkYXRlX2FuZF9jb21waWxlX2NmZ18xMDogLT5cbiAgICB7IGludGVybmFscyxcbiAgICAgIEhvbGxlcml0aCwgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyBIb2xsZXJpdGhfdHlwZXNwYWNlLFxuICAgICAgQ0ZHLCAgICAgICAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aC9saWIvdHlwZXMnXG4gICAgIyB7IHR5cGVfb2YsICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgIyB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsICB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgIHsgaXNGcm96ZW46IGlzX2Zyb3plbiwgICAgICAgIH0gPSBPYmplY3RcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNmZ18xMCA9XG4gICAgICBibGFuazogICAgICAgICcgJyAgICAgICAgICAgICAgICAgICAgICAgIyBzZXBhcmF0b3IgdXNlZCBpbiBgbWFnbmlmaWVyc2AgYW5kIGB1bmlsaXRlcmFsc2BcbiAgICAgIGFscGhhYmV0OiAgICAgJzAxMjM0NTY3ODknICAgICAgICAgICAgICAjIGRpZ2l0czsgbGVuZ3RoIG9mIGBhbHBoYWJldGAgaXMgdGhlIGBiYXNlYFxuICAgICAgbWFnbmlmaWVyczogICAnQUJDIFhZWicgICAgICAgICAgICAgICAgICNcbiAgICAgIHVuaWxpdGVyYWxzOiAgJ0ZHSElKS0xNIE4gT1BRUlNUVVYnICAgICAjIG5lZ2F0aXZlIHVuaWxpdGVyYWxzLCBibGFuaywgemVybyB1bmlsaXRlcmFsLCBibGFuaywgcG9zaXRpdmUgdW5pbGl0ZXJhbHNcbiAgICAgIGRpbWVuc2lvbjogICAgMyAgICAgICAgICAgICAgICAgICAgICAgICAjIG51bWJlciBvZiBpbmRpY2VzIHN1cHBvcnRlZFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGNmZyA9IEhvbGxlcml0aC52YWxpZGF0ZV9hbmRfY29tcGlsZV9jZmcgY2ZnXzEwXG4gICAgICBAZXEgKCDOqWhsbHRfMjc2ID0gLT4gY2ZnLmJsYW5rICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcgJ1xuICAgICAgQGVxICggzqlobGx0XzI3NyA9IC0+IGNmZy5hbHBoYWJldCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnMDEyMzQ1Njc4OSdcbiAgICAgIEBlcSAoIM6paGxsdF8yNzggPSAtPiBjZmcuYWxwaGFiZXRfY2hycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgQXJyYXkuZnJvbSAnMDEyMzQ1Njc4OSdcbiAgICAgIEBlcSAoIM6paGxsdF8yNzkgPSAtPiBjZmcuX25vdmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgKCBBcnJheS5mcm9tIGNmZy5hbHBoYWJldCApLmF0IC0xXG4gICAgICBAZXEgKCDOqWhsbHRfMjgwID0gLT4gY2ZnLmxlYWRpbmdfbmluZXJzX3JlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC8vLyBeICg/OiA5ICkqICg/PSAuKyAkICkgLy8vZ3ZcbiAgICAgIEBlcSAoIM6paGxsdF8yODEgPSAtPiBpc19mcm96ZW4gY2ZnLmFscGhhYmV0X2NocnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlobGx0XzI4MiA9IC0+IGNmZy5iYXNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAxMFxuICAgICAgQGVxICggzqlobGx0XzI4MyA9IC0+IGNmZy5tYWduaWZpZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnQUJDIFhZWidcbiAgICAgIEBlcSAoIM6paGxsdF8yODQgPSAtPiBjZmcubm1hZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyBDQkEnXG4gICAgICBAZXEgKCDOqWhsbHRfMjg1ID0gLT4gY2ZnLnBtYWcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcgWFlaJ1xuICAgICAgQGVxICggzqlobGx0XzI4NiA9IC0+IGNmZy5ubWFnX2NocnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBBcnJheS5mcm9tICcgQ0JBJ1xuICAgICAgQGVxICggzqlobGx0XzI4NyA9IC0+IGNmZy5wbWFnX2NocnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBBcnJheS5mcm9tICcgWFlaJ1xuICAgICAgQGVxICggzqlobGx0XzI4OCA9IC0+IGNmZy51bmlsaXRlcmFscyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnRkdISUpLTE0gTiBPUFFSU1RVVidcbiAgICAgIEBlcSAoIM6paGxsdF8yODkgPSAtPiBjZmcubnVucyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ0ZHSElKS0xNJ1xuICAgICAgQGVxICggzqlobGx0XzI5MCA9IC0+IGNmZy56cHVucyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnTk9QUVJTVFVWJ1xuICAgICAgQGVxICggzqlobGx0XzI5MSA9IC0+IGNmZy56cHVuX21heCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCA4XG4gICAgICBAZXEgKCDOqWhsbHRfMjkyID0gLT4gY2ZnLm51bl9taW4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC04XG4gICAgICBAZXEgKCDOqWhsbHRfMjkzID0gLT4gY2ZnLm51bl9jaHJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgJ0YnLCAnRycsICdIJywgJ0knLCAnSicsICdLJywgJ0wnLCAnTScgXSxcbiAgICAgIEBlcSAoIM6paGxsdF8yOTQgPSAtPiBjZmcuenB1bl9jaHJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAnTicsICdPJywgJ1AnLCAnUScsICdSJywgJ1MnLCAnVCcsICdVJywgJ1YnLCBdXG4gICAgICBAZXEgKCDOqWhsbHRfMjk1ID0gLT4gY2ZnLmRpbWVuc2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDNcbiAgICAgIEBlcSAoIM6paGxsdF8yOTYgPSAtPiArKCAoIGNmZy5iYXNlICoqICggY2ZnLnBtYWdfY2hycy5sZW5ndGggLSAxICkgICkgLSAxICkgKSwgKzk5OVxuICAgICAgQGVxICggzqlobGx0XzI5NyA9IC0+IC0oICggY2ZnLmJhc2UgKiogKCBjZmcubm1hZ19jaHJzLmxlbmd0aCAtIDEgKSAgKSAtIDEgKSApLCAtOTk5XG4gICAgICBAZXEgKCDOqWhsbHRfMjk4ID0gLT4gY2ZnLl9tYXhfaW50ZWdlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICs5OTlcbiAgICAgIEBlcSAoIM6paGxsdF8yOTkgPSAtPiBjZmcuX21pbl9pbnRlZ2VyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgLTk5OVxuICAgICAgQGVxICggzqlobGx0XzMwMCA9IC0+IGNmZy5fbWF4X2RpZ2l0c19wZXJfaWR4ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAzXG4gICAgICBAZXEgKCDOqWhsbHRfMzAxID0gLT4gY2ZnLlRNUF9hbHBoYWJldCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcwMTIzNDU2Nzg5QUJDRkdISUpLTE1OT1BRUlNUVVZYWVonXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGggPSBuZXcgSG9sbGVyaXRoIGNmZ18xMFxuICAgICAgQGVxICggzqlobGx0XzMwMiA9IC0+IGguY2ZnICksIGNmZ1xuICAgICAgIyBAZXEgKCDOqWhsbHRfMzAzID0gLT4gaC5lbmNvZGUgIC05OTggKSwgbnVsbFxuICAgICAgQGVxICggzqlobGx0XzMwNCA9IC0+IGguZW5jb2RlICAgLTEyICksICdCODcnXG4gICAgICBAZXEgKCDOqWhsbHRfMzA1ID0gLT4gaC5lbmNvZGUgICAtMTEgKSwgJ0I4OCdcbiAgICAgIEBlcSAoIM6paGxsdF8zMDYgPSAtPiBoLmVuY29kZSAgIC0xMCApLCAnQjg5J1xuICAgICAgQGVxICggzqlobGx0XzMwNyA9IC0+IGguZW5jb2RlICAgIC05ICksICdDMCdcbiAgICAgIEBlcSAoIM6paGxsdF8zMDggPSAtPiBoLmVuY29kZSAgICAtOCApLCAnRidcbiAgICAgIEBlcSAoIM6paGxsdF8zMDkgPSAtPiBoLmVuY29kZSAgICAtMiApLCAnTCdcbiAgICAgIEBlcSAoIM6paGxsdF8zMTAgPSAtPiBoLmVuY29kZSAgICAtMSApLCAnTSdcbiAgICAgIEBlcSAoIM6paGxsdF8zMTEgPSAtPiBoLmVuY29kZSAgICAgMCApLCAnTidcbiAgICAgIEBlcSAoIM6paGxsdF8zMTIgPSAtPiBoLmVuY29kZSAgICArMSApLCAnTydcbiAgICAgIEBlcSAoIM6paGxsdF8zMTMgPSAtPiBoLmVuY29kZSAgICArMiApLCAnUCdcbiAgICAgIEBlcSAoIM6paGxsdF8zMTQgPSAtPiBoLmVuY29kZSAgICArOCApLCAnVidcbiAgICAgIEBlcSAoIM6paGxsdF8zMTUgPSAtPiBoLmVuY29kZSAgICArOSApLCAnWDknXG4gICAgICBAZXEgKCDOqWhsbHRfMzE2ID0gLT4gaC5lbmNvZGUgICArMTAgKSwgJ1kxMCdcbiAgICAgIEBlcSAoIM6paGxsdF8zMTcgPSAtPiBoLmVuY29kZSAgICsxMSApLCAnWTExJ1xuICAgICAgQGVxICggzqlobGx0XzMxOCA9IC0+IGguZW5jb2RlICAgKzEyICksICdZMTInXG4gICAgICBAZXEgKCDOqWhsbHRfMzE5ID0gLT4gaC5lbmNvZGUgICs5OTggKSwgJ1o5OTgnXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHZhbGlkYXRlX2FuZF9jb21waWxlX2NmZ18xMF9ub191bmlsdGVyYWxzOiAtPlxuICAgIHsgaW50ZXJuYWxzLFxuICAgICAgSG9sbGVyaXRoLCAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IEhvbGxlcml0aF90eXBlc3BhY2UsXG4gICAgICBDRkcsICAgICAgICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoL2xpYi90eXBlcydcbiAgICAjIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAjIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgeyBpc0Zyb3plbjogaXNfZnJvemVuLCAgICAgICAgfSA9IE9iamVjdFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2ZnXzEwX25vX3VuaWxpdGVyYWxzID1cbiAgICAgIGJsYW5rOiAgICAgICAgJyAnICAgICAgICAgICAgICAgICAgICAgICAjIHNlcGFyYXRvciB1c2VkIGluIGBtYWduaWZpZXJzYCBhbmQgYHVuaWxpdGVyYWxzYFxuICAgICAgYWxwaGFiZXQ6ICAgICAnMDEyMzQ1Njc4OScgICAgICAgICAgICAgICMgZGlnaXRzOyBsZW5ndGggb2YgYGFscGhhYmV0YCBpcyB0aGUgYGJhc2VgXG4gICAgICBtYWduaWZpZXJzOiAgICdBQkMgWFlaJyAgICAgICAgICAgICAgICAgI1xuICAgICAgdW5pbGl0ZXJhbHM6ICAnTicgICAgICAgICAgICAgICAgICAgICAgICMgb25seSBoYXMgemVybyB1bmlsaXRlcmFsXG4gICAgICBkaW1lbnNpb246ICAgIDMgICAgICAgICAgICAgICAgICAgICAgICAgIyBudW1iZXIgb2YgaW5kaWNlcyBzdXBwb3J0ZWRcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBjZmcgPSBIb2xsZXJpdGgudmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnIGNmZ18xMF9ub191bmlsaXRlcmFsc1xuICAgICAgQGVxICggzqlobGx0XzMyMCA9IC0+IGNmZy5ibGFuayAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnICdcbiAgICAgIEBlcSAoIM6paGxsdF8zMjEgPSAtPiBjZmcuYWxwaGFiZXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJzAxMjM0NTY3ODknXG4gICAgICBAZXEgKCDOqWhsbHRfMzIyID0gLT4gY2ZnLmFscGhhYmV0X2NocnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIEFycmF5LmZyb20gJzAxMjM0NTY3ODknXG4gICAgICBAZXEgKCDOqWhsbHRfMzIzID0gLT4gY2ZnLl9ub3ZhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICggQXJyYXkuZnJvbSBjZmcuYWxwaGFiZXQgKS5hdCAtMVxuICAgICAgQGVxICggzqlobGx0XzMyNCA9IC0+IGNmZy5sZWFkaW5nX25pbmVyc19yZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvLy8gXiAoPzogOSApKiAoPz0gLisgJCApIC8vL2d2XG4gICAgICBAZXEgKCDOqWhsbHRfMzI1ID0gLT4gaXNfZnJvemVuIGNmZy5hbHBoYWJldF9jaHJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paGxsdF8zMjYgPSAtPiBjZmcuYmFzZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgMTBcbiAgICAgIEBlcSAoIM6paGxsdF8zMjcgPSAtPiBjZmcubWFnbmlmaWVycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ0FCQyBYWVonXG4gICAgICBAZXEgKCDOqWhsbHRfMzI4ID0gLT4gY2ZnLm5tYWcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcgQ0JBJ1xuICAgICAgQGVxICggzqlobGx0XzMyOSA9IC0+IGNmZy5wbWFnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnIFhZWidcbiAgICAgIEBlcSAoIM6paGxsdF8zMzAgPSAtPiBjZmcubm1hZ19jaHJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgQXJyYXkuZnJvbSAnIENCQSdcbiAgICAgIEBlcSAoIM6paGxsdF8zMzEgPSAtPiBjZmcucG1hZ19jaHJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgQXJyYXkuZnJvbSAnIFhZWidcbiAgICAgIEBlcSAoIM6paGxsdF8zMzIgPSAtPiBjZmcudW5pbGl0ZXJhbHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ04nXG4gICAgICBAZXEgKCDOqWhsbHRfMzMzID0gLT4gY2ZnLm51bnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcnXG4gICAgICBAZXEgKCDOqWhsbHRfMzM0ID0gLT4gY2ZnLnpwdW5zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdOJ1xuICAgICAgQGVxICggzqlobGx0XzMzNSA9IC0+IGNmZy5udW5fY2hycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbXVxuICAgICAgQGVxICggzqlobGx0XzMzNiA9IC0+IGNmZy56cHVuX2NocnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbICdOJywgXVxuICAgICAgQGVxICggzqlobGx0XzMzNyA9IC0+IGNmZy5kaW1lbnNpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAzXG4gICAgICBAZXEgKCDOqWhsbHRfMzM4ID0gLT4gKyggKCBjZmcuYmFzZSAqKiAoIGNmZy5wbWFnX2NocnMubGVuZ3RoIC0gMSApICApIC0gMSApICksICs5OTlcbiAgICAgIEBlcSAoIM6paGxsdF8zMzkgPSAtPiAtKCAoIGNmZy5iYXNlICoqICggY2ZnLm5tYWdfY2hycy5sZW5ndGggLSAxICkgICkgLSAxICkgKSwgLTk5OVxuICAgICAgQGVxICggzqlobGx0XzM0MCA9IC0+IGNmZy5fbWF4X2ludGVnZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCArOTk5XG4gICAgICBAZXEgKCDOqWhsbHRfMzQxID0gLT4gY2ZnLl9taW5faW50ZWdlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC05OTlcbiAgICAgIEBlcSAoIM6paGxsdF8zNDIgPSAtPiBjZmcuX21heF9kaWdpdHNfcGVyX2lkeCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgM1xuICAgICAgQGVxICggzqlobGx0XzM0MyA9IC0+IGNmZy5UTVBfYWxwaGFiZXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnMDEyMzQ1Njc4OUFCQ05YWVonXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGggPSBuZXcgSG9sbGVyaXRoIGNmZ18xMF9ub191bmlsaXRlcmFsc1xuICAgICAgQGVxICggzqlobGx0XzM0NCA9IC0+IGguY2ZnICksIGNmZ1xuICAgICAgQGVxICggzqlobGx0XzM0NSA9IC0+IGguZW5jb2RlIFsgMCwgXSApLCAnTidcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnXzEyODogLT5cbiAgICB7IGludGVybmFscyxcbiAgICAgIEhvbGxlcml0aCwgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyBIb2xsZXJpdGhfdHlwZXNwYWNlLFxuICAgICAgQ0ZHLCAgICAgICAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aC9saWIvdHlwZXMnXG4gICAgIyB7IHR5cGVfb2YsICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgIyB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsICB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgIHsgaXNGcm96ZW46IGlzX2Zyb3plbiwgICAgICAgIH0gPSBPYmplY3RcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNmZ18xMjggPVxuICAgICAgIyMjICAgICAgICAgICAgICAgICAgICAgMSAgICAgICAgIDIgICAgICAgICAzICAgICAgICMjI1xuICAgICAgIyMjICAgICAgICAgICAgMTIzNDU2Nzg5MDEyMzQ1Njc4OTAxMjM0NTY3ODkwMTIgICAgICMjI1xuICAgICAgYWxwaGFiZXQ6ICAgICAnISMkJSYoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUInICsgXFxcbiAgICAgICAgICAgICAgICAgICAgJ0NERUZHSElKS0xNTk9QUVJTVFVWV1hZWltdXl9gYWJjJyArIFxcXG4gICAgICAgICAgICAgICAgICAgICdkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ent8fX7CocKiwqPCpMKlJyArIFxcXG4gICAgICAgICAgICAgICAgICAgICfCpsKnwqjCqcKqwqvCrMKuwq/CsMKxwrLCs8K0wrXCtsK3wrjCucK6wrvCvMK9wr7Cv8OAw4HDgsODw4TDhcOGJ1xuICAgICAgbWFnbmlmaWVyczogICAnw4fDiMOJw4rDi8OMw43DjiDDuMO5w7rDu8O8w73DvsO/J1xuICAgICAgdW5pbGl0ZXJhbHM6ICAnw4/DkMORw5LDk8OUw5XDlsOXw5jDmcOaw5vDnMOdw57Dn8Ogw6HDoiDDoyDDpMOlw6bDp8Oow6nDqsOrw6zDrcOuw6/DsMOxw7LDs8O0w7XDtsO3J1xuICAgICAgZGltZW5zaW9uOiAgICA1XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgY2ZnID0gSG9sbGVyaXRoLnZhbGlkYXRlX2FuZF9jb21waWxlX2NmZyBjZmdfMTI4XG4gICAgICBAZXEgKCDOqWhsbHRfMzQ2ID0gLT4gY2ZnLmJsYW5rICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcgJ1xuICAgICAgQGVxICggzqlobGx0XzM0NyA9IC0+IGNmZy5hbHBoYWJldCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnISMkJSYoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUInICsgXFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaW11eX2BhYmMnICsgXFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+wqHCosKjwqTCpScgKyBcXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICfCpsKnwqjCqcKqwqvCrMKuwq/CsMKxwrLCs8K0wrXCtsK3wrjCucK6wrvCvMK9wr7Cv8OAw4HDgsODw4TDhcOGJ1xuICAgICAgQGVxICggzqlobGx0XzM0OCA9IC0+IGNmZy5hbHBoYWJldF9jaHJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBBcnJheS5mcm9tIGNmZy5hbHBoYWJldFxuICAgICAgQGVxICggzqlobGx0XzM0OSA9IC0+IGNmZy5fbm92YSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAoIEFycmF5LmZyb20gY2ZnLmFscGhhYmV0ICkuYXQgLTFcbiAgICAgIEBlcSAoIM6paGxsdF8zNTAgPSAtPiBjZmcubGVhZGluZ19uaW5lcnNfcmUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgLy8vIF4gKD86IMOGICkqICg/PSAuKyAkICkgLy8vZ3ZcbiAgICAgIEBlcSAoIM6paGxsdF8zNTEgPSAtPiBjZmcubWFnbmlmaWVycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8OHw4jDicOKw4vDjMONw44gw7jDucO6w7vDvMO9w77DvydcbiAgICAgIEBlcSAoIM6paGxsdF8zNTIgPSAtPiBjZmcubm1hZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyDDjsONw4zDi8OKw4nDiMOHJ1xuICAgICAgQGVxICggzqlobGx0XzM1MyA9IC0+IGNmZy5wbWFnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnIMO4w7nDusO7w7zDvcO+w78nXG4gICAgICBAZXEgKCDOqWhsbHRfMzU0ID0gLT4gY2ZnLm5tYWdfY2hycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIEFycmF5LmZyb20gJyDDjsONw4zDi8OKw4nDiMOHJ1xuICAgICAgQGVxICggzqlobGx0XzM1NSA9IC0+IGNmZy5wbWFnX2NocnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBBcnJheS5mcm9tICcgw7jDucO6w7vDvMO9w77DvydcbiAgICAgIEBlcSAoIM6paGxsdF8zNTYgPSAtPiBjZmcudW5pbGl0ZXJhbHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8OPw5DDkcOSw5PDlMOVw5bDl8OYw5nDmsObw5zDncOew5/DoMOhw6Igw6Mgw6TDpcOmw6fDqMOpw6rDq8Osw63DrsOvw7DDscOyw7PDtMO1w7bDtydcbiAgICAgIEBlcSAoIM6paGxsdF8zNTcgPSAtPiBjZmcubnVucyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8OPw5DDkcOSw5PDlMOVw5bDl8OYw5nDmsObw5zDncOew5/DoMOhw6InXG4gICAgICBAZXEgKCDOqWhsbHRfMzU4ID0gLT4gY2ZnLnpwdW5zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDo8Okw6XDpsOnw6jDqcOqw6vDrMOtw67Dr8Oww7HDssOzw7TDtcO2w7cnXG4gICAgICBAZXEgKCDOqWhsbHRfMzU5ID0gLT4gY2ZnLm51bl9jaHJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIEFycmF5LmZyb20gJ8OPw5DDkcOSw5PDlMOVw5bDl8OYw5nDmsObw5zDncOew5/DoMOhw6InXG4gICAgICBAZXEgKCDOqWhsbHRfMzYwID0gLT4gY2ZnLnpwdW5fY2hycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIEFycmF5LmZyb20gJ8Ojw6TDpcOmw6fDqMOpw6rDq8Osw63DrsOvw7DDscOyw7PDtMO1w7bDtydcbiAgICAgIEBlcSAoIM6paGxsdF8zNjEgPSAtPiBjZmcuX21pbl9pbnRlZ2VyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgLSggKCAxMjggKiogNyApIC0gMSApXG4gICAgICBAZXEgKCDOqWhsbHRfMzYyID0gLT4gY2ZnLl9tYXhfaW50ZWdlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICsoICggMTI4ICoqIDcgKSAtIDEgKVxuICAgICAgIyBAZXEgKCDOqWhsbHRfMzYzID0gLT4gY2ZnLl9tYXhfZGlnaXRzX3Blcl9pZHggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDNcbiAgICAgICMgQGVxICggzqlobGx0XzM2NCA9IC0+IGNmZy5UTVBfYWxwaGFiZXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnMDEyMzQ1Njc4OUFCQ0VGR0hJSktMTU5PUFFSU1RVVldYWVonXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6paGxsdF8zNjUgPSAtPiBpc19mcm96ZW4gY2ZnLmFscGhhYmV0X2NocnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlobGx0XzM2NiA9IC0+IGNmZy5iYXNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAxMjhcbiAgICAgIEBlcSAoIM6paGxsdF8zNjcgPSAtPiBjZmcuZGltZW5zaW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgNVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBoID0gbmV3IEhvbGxlcml0aCBjZmdfMTI4XG4gICAgICBAZXEgKCDOqWhsbHRfMzY4ID0gLT4gaC5jZmcgKSwgY2ZnXG4gICAgICAjIEBlcSAoIM6paGxsdF8zNjkgPSAtPiBoLmVuY29kZSBbIDAsIF0gKSwgbnVsbFxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB0eXBlczogLT5cbiAgICB7IEhvbGxlcml0aF90eXBlc3BhY2UsXG4gICAgICBjcmVhdGVfbWF4X2ludGVnZXJfJCxcbiAgICAgIENGRywgICAgICAgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgvbGliL3R5cGVzJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIFQgPSBuZXcgSG9sbGVyaXRoX3R5cGVzcGFjZSgpXG4gICAgICBAZXEgICAgICggzqlobGx0XzM3MCA9IC0+IFQuYmFzZS5pc2EgLTEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgICAgICggzqlobGx0XzM3MSA9IC0+IFQuYmFzZS5pc2EgIDAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgICAgICggzqlobGx0XzM3MiA9IC0+IFQuYmFzZS5pc2EgKzEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgICAgICggzqlobGx0XzM3MyA9IC0+IFQuYmFzZS5pc2EgKzIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzc0ID0gLT4gVC5fbWF4X2ludGVnZXJfJC5pc2EgbnVsbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzc1ID0gLT4gVC5fbWF4X2ludGVnZXJfJC5pc2EgOSwgICAgICAgICAgMTAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6paGxsdF8zNzYgPSAtPiBULl9tYXhfaW50ZWdlcl8kLmlzYSA5OSwgICAgICAgICAxMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgICAgICggzqlobGx0XzM3NyA9IC0+IFQuX21heF9pbnRlZ2VyXyQuaXNhIDk5OTk5OTk5LCAgIDEwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzc4ID0gLT4gVC5fbWF4X2ludGVnZXJfJC5pc2EgLTEwLCAgICAgICAgMTAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzc5ID0gLT4gL25vdCBhIHBvc2l0aXZlIHNhZmUgaW50ZWdlci8udGVzdCBULl9tYXhfaW50ZWdlcl8kLmRhdGEubWVzc2FnZSAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6paGxsdF8zODAgPSAtPiBULl9tYXhfaW50ZWdlcl8kLmlzYSAweGZmZmYsICAgICAxNiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgICAgICggzqlobGx0XzM4MSA9IC0+IFQuX21heF9pbnRlZ2VyXyQuaXNhIDB4N2ZmZmZmZmYsIDE2ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAdGhyb3dzICggzqlobGx0XzM4MiA9IC0+IFQuX21heF9pbnRlZ2VyXyQudmFsaWRhdGUgNSwgMTAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC9cXChfbWF4X2ludGVnZXJfXFwkXFwpIG5vdCBhIHZhbGlkIF9tYXhfaW50ZWdlcl9cXCQ6IDUg4oCTIHggbm90IGEgcG9zaXRpdmUgYWxsLW5pbmVycy9cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgVCA9IG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlKClcbiAgICAgIFIgPSB7IGJhc2U6IDE2LCBfbWF4X2RpZ2l0c19wZXJfaWR4OiA0LCB9XG4gICAgICBAZXEgICAgICggzqlobGx0XzM4MyA9IC0+IFQuX21heF9pbnRlZ2VyXyQuaXNhICggUi5iYXNlICoqIFIuX21heF9kaWdpdHNfcGVyX2lkeCApIC0gMSwgUi5iYXNlICksIHRydWVcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgVCA9IG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlKClcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzg0ID0gLT4gVC5fbWF4X2ludGVnZXJfJC5pc2EgKCAxMjggKiogMSApIC0gMSwgMTI4ICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzg1ID0gLT4gVC5fbWF4X2ludGVnZXJfJC5pc2EgKCAxMjggKiogMiApIC0gMSwgMTI4ICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzg2ID0gLT4gVC5fbWF4X2ludGVnZXJfJC5pc2EgKCAxMjggKiogMyApIC0gMSwgMTI4ICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzg3ID0gLT4gVC5fbWF4X2ludGVnZXJfJC5pc2EgKCAxMjggKiogNCApIC0gMSwgMTI4ICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzg4ID0gLT4gVC5fbWF4X2ludGVnZXJfJC5pc2EgKCAxMjggKiogNSApIC0gMSwgMTI4ICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzg5ID0gLT4gVC5fbWF4X2ludGVnZXJfJC5pc2EgKCAxMjggKiogNiApIC0gMSwgMTI4ICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzkwID0gLT4gVC5fbWF4X2ludGVnZXJfJC5pc2EgKCAxMjggKiogNyApIC0gMSwgMTI4ICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzkxID0gLT4gVC5fbWF4X2ludGVnZXJfJC5pc2EgKCAxMjggKiogOCApIC0gMSwgMTI4ICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgICAgICggzqlobGx0XzM5MiA9IC0+IFQuY3JlYXRlX21heF9pbnRlZ2VyXyQgeyBiYXNlOiAxMCwgZGlnaXRzOiAyLCB9ICApLCA5OVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZGVtb19tYXhfaW50ZWdlciA9IC0+XG4gIGxvZ190b19iYXNlICAgICAgICAgICAgICAgPSAoIG4sIGJhc2UgKSAtPiAoIE1hdGgubG9nIG4gKSAvICggTWF0aC5sb2cgYmFzZSApXG4gIGdldF9yZXF1aXJlZF9kaWdpdHMgICAgICAgPSAoIG4sIGJhc2UgKSAtPiBNYXRoLmNlaWwgbG9nX3RvX2Jhc2UgbiwgYmFzZVxuICBnZXRfbWF4X25pbmVyX2RpZ2l0X2NvdW50ID0gKCBuLCBiYXNlICkgLT4gKCBnZXRfcmVxdWlyZWRfZGlnaXRzIG4sIGJhc2UgKSAtIDFcbiAgZ2V0X21heF9pbnRlZ2VyICAgICAgICAgICA9ICggbiwgYmFzZSApIC0+ICggYmFzZSAqKiBnZXRfbWF4X25pbmVyX2RpZ2l0X2NvdW50IG4sIGJhc2UgKSAtIDFcbiAgaW5mbyAnzqlobGx0XzM5MycsIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLnRvU3RyaW5nIDE2XG4gIGluZm8gJ86paGxsdF8zOTQnLCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUi50b1N0cmluZyAzMlxuICB3aGlzcGVyICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gIGluZm8gJ86paGxsdF8zOTUnLCAoIDMyICoqIDQgLSAxICkudG9TdHJpbmcgMzJcbiAgaW5mbyAnzqlobGx0XzM5NicsICggMzIgKiogNCAtIDEgKS50b1N0cmluZyAzMlxuICB3aGlzcGVyICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gIGluZm8gJ86paGxsdF8zOTcnLCBnZXRfcmVxdWlyZWRfZGlnaXRzIDMyLCAgICAgICAzMlxuICBpbmZvICfOqWhsbHRfMzk4JywgZ2V0X3JlcXVpcmVkX2RpZ2l0cyAzMiAqKiA2LCAgMzJcbiAgaW5mbyAnzqlobGx0XzM5OScsIGdldF9yZXF1aXJlZF9kaWdpdHMgMWU2LCAgICAgIDEwXG4gIGluZm8gJ86paGxsdF80MDAnLCBnZXRfcmVxdWlyZWRfZGlnaXRzIDIwLCAgICAgICAxMFxuICB3aGlzcGVyICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gIGluZm8gJ86paGxsdF80MDEnLCBtYXhfZGlnaXRzX2Jhc2VfMTAgICAgPSBnZXRfbWF4X25pbmVyX2RpZ2l0X2NvdW50IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAxMFxuICBpbmZvICfOqWhsbHRfNDAyJywgbWF4X2RpZ2l0c19iYXNlXzE2ICAgID0gZ2V0X21heF9uaW5lcl9kaWdpdF9jb3VudCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiwgMTZcbiAgaW5mbyAnzqlobGx0XzQwMycsIG1heF9kaWdpdHNfYmFzZV8zMiAgICA9IGdldF9tYXhfbmluZXJfZGlnaXRfY291bnQgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsIDMyXG4gIGluZm8gJ86paGxsdF80MDQnLCBtYXhfZGlnaXRzX2Jhc2VfMzYgICAgPSBnZXRfbWF4X25pbmVyX2RpZ2l0X2NvdW50IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAzNlxuICBpbmZvICfOqWhsbHRfNDA1JywgbWF4X2RpZ2l0c18xYmFzZV8yOCAgID0gZ2V0X21heF9uaW5lcl9kaWdpdF9jb3VudCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiwgMTI4XG4gICMgZm9yIGJhc2UgaW4gWyAyIC4uIDEyOCBdXG4gICMgICBpbmZvICfOqWhsbHRfNDA2JywgeyBiYXNlLCB9LCAoIE1hdGguY2VpbCBsb2dfdG9fYmFzZSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiwgYmFzZSApIC0gMVxuICB3aGlzcGVyICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gIGluZm8gJ86paGxsdF80MDcnLCAnOScucmVwZWF0IG1heF9kaWdpdHNfYmFzZV8xMFxuICBpbmZvICfOqWhsbHRfNDA4JywgJ2YnLnJlcGVhdCBtYXhfZGlnaXRzX2Jhc2VfMTZcbiAgaW5mbyAnzqlobGx0XzQwOScsICd2Jy5yZXBlYXQgbWF4X2RpZ2l0c19iYXNlXzMyXG4gIHdoaXNwZXIgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgaW5mbyAnzqlobGx0XzQxMCcsICggKCBiYXNlID0gMTAgKSAqKiBtYXhfZGlnaXRzX2Jhc2VfMTAgKSAtIDFcbiAgaW5mbyAnzqlobGx0XzQxMScsICggKCBiYXNlID0gMTYgKSAqKiBtYXhfZGlnaXRzX2Jhc2VfMTYgKSAtIDFcbiAgaW5mbyAnzqlobGx0XzQxMicsICggKCBiYXNlID0gMzIgKSAqKiBtYXhfZGlnaXRzX2Jhc2VfMzIgKSAtIDFcbiAgaW5mbyAnzqlobGx0XzQxMycsICggKCBiYXNlID0gMzYgKSAqKiBtYXhfZGlnaXRzX2Jhc2VfMzYgKSAtIDFcbiAgd2hpc3BlciAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUJ1xuICBpbmZvICfOqWhsbHRfNDE0JywgZ2V0X21heF9pbnRlZ2VyIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAxMFxuICBpbmZvICfOqWhsbHRfNDE1JywgZ2V0X21heF9pbnRlZ2VyIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAxNlxuICBpbmZvICfOqWhsbHRfNDE2JywgZ2V0X21heF9pbnRlZ2VyIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAzMlxuICBpbmZvICfOqWhsbHRfNDE3JywgZ2V0X21heF9pbnRlZ2VyIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAzNlxuICBpbmZvICfOqWhsbHRfNDE4JywgZ2V0X21heF9pbnRlZ2VyIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAxMjhcbiAgd2hpc3BlciAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUJ1xuICBpbmZvICfOqWhsbHRfNDE5JywgKCBwYXJzZUludCAoICc5Jy5yZXBlYXQgbWF4X2RpZ2l0c19iYXNlXzEwICksIDEwIClcbiAgaW5mbyAnzqlobGx0XzQyMCcsICggcGFyc2VJbnQgKCAnZicucmVwZWF0IG1heF9kaWdpdHNfYmFzZV8xNiApLCAxNiApXG4gIGluZm8gJ86paGxsdF80MjEnLCAoIHBhcnNlSW50ICggJ3YnLnJlcGVhdCBtYXhfZGlnaXRzX2Jhc2VfMzIgKSwgMzIgKVxuICBpbmZvICfOqWhsbHRfNDIyJywgKCBwYXJzZUludCAoICd6Jy5yZXBlYXQgbWF4X2RpZ2l0c19iYXNlXzM2ICksIDM2IClcbiAgaW5mbyAnzqlobGx0XzQyMycsICggcGFyc2VJbnQgKCAnOScucmVwZWF0IG1heF9kaWdpdHNfYmFzZV8xMCApLCAxMCApIDw9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG4gIGluZm8gJ86paGxsdF80MjQnLCAoIHBhcnNlSW50ICggJ2YnLnJlcGVhdCBtYXhfZGlnaXRzX2Jhc2VfMTYgKSwgMTYgKSA8PSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUlxuICBpbmZvICfOqWhsbHRfNDI1JywgKCBwYXJzZUludCAoICd2Jy5yZXBlYXQgbWF4X2RpZ2l0c19iYXNlXzMyICksIDMyICkgPD0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcbiAgaW5mbyAnzqlobGx0XzQyNicsICggcGFyc2VJbnQgKCAneicucmVwZWF0IG1heF9kaWdpdHNfYmFzZV8zNiApLCAzNiApIDw9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG4gIHdoaXNwZXIgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgaW5mbyAnzqlobGx0XzQyNycsICs5OTkgKyAtOTk5XG4gIGluZm8gJ86paGxsdF80MjgnLCArOTk5ICsgLTFcbiAgaW5mbyAnzqlobGx0XzQyOScsIC0oIC05OTkgLSAxICkgKyAtOTk5XG4gIGluZm8gJ86paGxsdF80MzAnLCAtKCAtOTk5IC0gMSApICsgLTk5OFxuICBpbmZvICfOqWhsbHRfNDMxJywgLSggLTk5OSAtIDEgKSArIC05OTdcbiAgaW5mbyAnzqlobGx0XzQzMicsIC0oIC05OTkgLSAxICkgKyAtM1xuICBpbmZvICfOqWhsbHRfNDMzJywgLSggLTk5OSAtIDEgKSArIC0yXG4gIGluZm8gJ86paGxsdF80MzQnLCAtKCAtOTk5IC0gMSApICsgLTFcbiAgaW5mbyAnzqlobGx0XzQzNScsIFwiI3sgLSggLTk5OSAtIDEgKSArIC0zIH1cIi5yZXBsYWNlIC8vLyBeIDkqPyAoPz0gLiAkICkgLy8vZ3YsICcnXG4gIGluZm8gJ86paGxsdF80MzYnLCBcIiN7IC0oIC05OTkgLSAxICkgKyAtMiB9XCIucmVwbGFjZSAvLy8gXiA5Kj8gKD89IC4gJCApIC8vL2d2LCAnJ1xuICBpbmZvICfOqWhsbHRfNDM3JywgXCIjeyAtKCAtOTk5IC0gMSApICsgLTEgfVwiLnJlcGxhY2UgLy8vIF4gOSo/ICg/PSAuICQgKSAvLy9ndiwgJydcbiAgcmV0dXJuIG51bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICB7IHNob3dfcmVxdWlyZXMsIH0gPSByZXF1aXJlICcuLi8uLi9zbmlwcGV0cy9saWIvZGVtby1zaG93LXJlcXVpcmVzLmpzJ1xuICBzaG93X3JlcXVpcmVzICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCBAaG9sbGVyaXRoXG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgaDEwbXZwMl9iaWdfc2h1ZmZsZTogQGhvbGxlcml0aC5oMTBtdnAyX2JpZ19zaHVmZmxlLCB9XG5cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHR5cGVzOiBAaG9sbGVyaXRoLnR5cGVzLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBoMTBtdnAyX3NvcnRpbmdfMjogQGhvbGxlcml0aC5oMTBtdnAyX3NvcnRpbmdfMiwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnXzEwOiBAaG9sbGVyaXRoLnZhbGlkYXRlX2FuZF9jb21waWxlX2NmZ18xMCwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgaDEwbXZwMl9kZWNvZGVfdW5pdHM6IEBob2xsZXJpdGguaDEwbXZwMl9kZWNvZGVfdW5pdHMsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGdldF9uaW5lcnNfcmU6IEBob2xsZXJpdGguZ2V0X25pbmVyc19yZSwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnOiBAaG9sbGVyaXRoLnZhbGlkYXRlX2FuZF9jb21waWxlX2NmZywgfVxuICAjIGRlbW9fbWF4X2ludGVnZXIoKVxuXG5cbiJdfQ==
