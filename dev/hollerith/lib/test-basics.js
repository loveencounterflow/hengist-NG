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
      var Hollerith, _, codec, encode, equals, first_idx, get_random_vdx, hollerith_10mvp2, i, idx, internals, j, k, len, probe_sortkey, probe_sub_count, probe_vdx, probes_sortkey, probes_vdx, ref, ref1, ref2, rnd_vdx_cfg, shuffle, sk, sort_by_sortkey, sort_by_vdx, type_of, vdx, Ωhllt__93;
      ({Hollerith, hollerith_10mvp2, internals} = require('../../../apps/hollerith'));
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({
        isDeepStrictEqual: equals
      } = require('node:util'));
      codec = hollerith_10mvp2;
      rnd_vdx_cfg = {
        seed: null,
        min_length: 1,
        max_length: codec.cfg.vdx_length - 1,
        min_idx: Math.min(codec.cfg._min_integer, 2000),
        max_idx: Math.min(codec.cfg._max_integer, 2000)
      };
      debug('Ωhllt__90', rnd_vdx_cfg);
      debug('Ωhllt__91', codec.cfg._sortkey_width);
      get_random_vdx = helpers.get_random_vdx_producer(rnd_vdx_cfg);
      probe_sub_count = 3;
      shuffle = GUY.rnd.get_shuffle(57, 88);
      encode = function(vdx) {
        return (codec.encode(vdx)).padEnd(codec.cfg._sortkey_width, codec.cfg._cipher);
      };
      probes_sortkey = [];
//.......................................................................................................
      for (first_idx = i = ref = codec.cfg._min_integer, ref1 = codec.cfg._max_integer; (ref <= ref1 ? i <= ref1 : i >= ref1); first_idx = ref <= ref1 ? ++i : --i) {
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
        whisper('Ωhllt__92', gold(probe_sortkey.sk), red(probe_vdx.vdx), lime(probe_sortkey.vdx));
        this.eq((Ωhllt__93 = function() {
          return probe_sortkey.vdx;
        }), probe_vdx.vdx);
      }
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    h128_16383_sorting_2: function() {
      var Hollerith, _, codec, equals, expected_indexes, hollerith_128_16383, i, idx, internals, j, k, l, len, len1, len2, m, padded_lines, pline, probes, psk, real_indexes, shuffle, sk_matcher, type_of, uline, unpadded_lines, usk, vdx, Ωhllt_101, Ωhllt_102, Ωhllt_103, Ωhllt_104, Ωhllt_105, Ωhllt_106, Ωhllt_107, Ωhllt_108, Ωhllt_109, Ωhllt_110, Ωhllt_111, Ωhllt_112, Ωhllt_113, Ωhllt_114, Ωhllt_115, Ωhllt_116, Ωhllt_117, Ωhllt_118, Ωhllt_119, Ωhllt_120, Ωhllt_121, Ωhllt_122, Ωhllt_123, Ωhllt_124, Ωhllt_125, Ωhllt_126, Ωhllt_127, Ωhllt_128, Ωhllt_129, Ωhllt_130, Ωhllt_131, Ωhllt_132, Ωhllt_133, Ωhllt_134, Ωhllt_135, Ωhllt_136, Ωhllt_137, Ωhllt_138, Ωhllt_139, Ωhllt_140, Ωhllt_141, Ωhllt_142, Ωhllt_143, Ωhllt_144, Ωhllt_145, Ωhllt_146, Ωhllt_147, Ωhllt_148, Ωhllt_149, Ωhllt_150, Ωhllt_151, Ωhllt_152, Ωhllt_153, Ωhllt_154, Ωhllt_156, Ωhllt_158;
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
      // debug 'Ωhllt__99', codec.cfg._max_digits_per_idx
      // debug 'Ωhllt_100', codec.cfg.zero_pad_length
      this.eq((Ωhllt_101 = function() {
        return codec.cfg.base;
      }), 128);
      this.eq((Ωhllt_102 = function() {
        return codec.cfg._max_integer;
      }), +16383);
      this.eq((Ωhllt_103 = function() {
        return codec.cfg._min_integer;
      }), -16383);
      this.eq((Ωhllt_104 = function() {
        return codec.cfg.pmag_chrs[2];
      }), 'ù');
      this.eq((Ωhllt_105 = function() {
        return codec.cfg.nmag_chrs[2];
      }), 'Í');
      this.eq((Ωhllt_106 = function() {
        return codec.encode(codec.cfg._max_integer);
      }), 'ùÆÆ');
      this.eq((Ωhllt_107 = function() {
        return codec.encode(codec.cfg._min_integer);
      }), 'Í!!');
      this.eq((Ωhllt_108 = function() {
        return codec.decode('Í!!');
      }), [-16383]);
      this.throws((Ωhllt_109 = function() {
        return codec.decode('Ç!!!!!!!!');
      }), /not a valid sortkey/);
//.......................................................................................................
      for (idx = i = 0, len = probes.length; i < len; idx = ++i) {
        [vdx, sk_matcher] = probes[idx];
        usk = codec.encode(vdx);
        this.eq((Ωhllt_110 = function() {
          return usk;
        }), sk_matcher);
        // echo rpr usk
        psk = usk.padEnd(10, codec.cfg._cipher);
        usk = usk.padEnd(10, ' ');
        unpadded_lines.push(`${usk} ${rpr(vdx)} ${idx}`);
        padded_lines.push(`${psk} ${rpr(vdx)} ${idx}`);
      }
      //.......................................................................................................
      this.eq((Ωhllt_111 = function() {
        return codec.cfg._max_digits_per_idx;
      }), 2);
      this.eq((Ωhllt_112 = function() {
        return codec.cfg.zpun_max;
      }), 20);
      this.eq((Ωhllt_113 = function() {
        return codec.cfg._naught;
      }), '!');
      this.eq((Ωhllt_114 = function() {
        return codec.cfg._nova;
      }), 'Æ');
      this.eq((Ωhllt_115 = function() {
        return codec.cfg._cipher;
      }), 'ã');
      this.eq((Ωhllt_116 = function() {
        return codec.cfg.nmag;
      }), ' ÎÍ');
      this.eq((Ωhllt_117 = function() {
        return codec.cfg.pmag;
      }), ' øù');
      this.eq((Ωhllt_118 = function() {
        return codec.cfg.pmag_chrs[codec.cfg._max_digits_per_idx];
      }), 'ù');
      this.eq((Ωhllt_119 = function() {
        return codec.encode(-16383);
      }), 'Í!!');
      this.eq((Ωhllt_120 = function() {
        return codec.encode(-16382);
      }), 'Í!#');
      this.eq((Ωhllt_121 = function() {
        return codec.encode(-129);
      }), 'ÍÅÅ');
      this.eq((Ωhllt_122 = function() {
        return codec.encode(-128);
      }), 'ÍÅÆ');
      this.eq((Ωhllt_123 = function() {
        return codec.encode(-127);
      }), 'Î!');
      this.eq((Ωhllt_124 = function() {
        return codec.encode(-80);
      }), 'ÎR');
      this.eq((Ωhllt_125 = function() {
        return codec.encode(-21);
      }), 'Î±');
      this.eq((Ωhllt_126 = function() {
        return codec.encode(-21);
      }), 'Î±');
      this.eq((Ωhllt_127 = function() {
        return codec.encode(-20);
      }), 'Ï');
      this.eq((Ωhllt_128 = function() {
        return codec.encode(-1);
      }), 'â');
      this.eq((Ωhllt_129 = function() {
        return codec.encode(+0);
      }), 'ã');
      this.eq((Ωhllt_130 = function() {
        return codec.encode(+1);
      }), 'ä');
      this.eq((Ωhllt_131 = function() {
        return codec.encode(+20);
      }), '÷');
      this.eq((Ωhllt_132 = function() {
        return codec.encode(+21);
      }), 'ø8');
      this.eq((Ωhllt_133 = function() {
        return codec.encode(+127);
      }), 'øÆ');
      this.eq((Ωhllt_134 = function() {
        return codec.encode(+128);
      }), 'ù#!');
      this.eq((Ωhllt_135 = function() {
        return codec.encode(+129);
      }), 'ù##');
      this.eq((Ωhllt_136 = function() {
        return codec.encode(+16382);
      }), 'ùÆÅ');
      this.eq((Ωhllt_137 = function() {
        return codec.encode(+16383);
      }), 'ùÆÆ');
      //.......................................................................................................
      this.eq((Ωhllt_138 = function() {
        return codec.decode('Í!!');
      }), [-16383]);
      this.eq((Ωhllt_139 = function() {
        return codec.decode('Í!#');
      }), [-16382]);
      this.eq((Ωhllt_140 = function() {
        return codec.decode('ÍÅÅ');
      }), [-129]);
      this.eq((Ωhllt_141 = function() {
        return codec.decode('ÍÅÆ');
      }), [-128]);
      this.eq((Ωhllt_142 = function() {
        return codec.decode('Î!');
      }), [-127]);
      this.eq((Ωhllt_143 = function() {
        return codec.decode('Î±');
      }), [-21]);
      this.eq((Ωhllt_144 = function() {
        return codec.decode('Ï');
      }), [-20]);
      this.eq((Ωhllt_145 = function() {
        return codec.decode('â');
      }), [-1]);
      this.eq((Ωhllt_146 = function() {
        return codec.decode('ã');
      }), [0]);
      this.eq((Ωhllt_147 = function() {
        return codec.decode('ä');
      }), [1]);
      this.eq((Ωhllt_148 = function() {
        return codec.decode('÷');
      }), [20]);
      this.eq((Ωhllt_149 = function() {
        return codec.decode('ø8');
      }), [21]);
      this.eq((Ωhllt_150 = function() {
        return codec.decode('øÆ');
      }), [127]);
      this.eq((Ωhllt_151 = function() {
        return codec.decode('ù#!');
      }), [128]);
      this.eq((Ωhllt_152 = function() {
        return codec.decode('ù##');
      }), [129]);
      this.eq((Ωhllt_153 = function() {
        return codec.decode('ùÆÅ');
      }), [16382]);
      this.eq((Ωhllt_154 = function() {
        return codec.decode('ùÆÆ');
      }), [16383]);
//.......................................................................................................
      for (_ = j = 1; j <= 10; _ = ++j) {
        unpadded_lines = shuffle(unpadded_lines);
        unpadded_lines.sort();
        real_indexes = [];
        for (k = 0, len1 = unpadded_lines.length; k < len1; k++) {
          uline = unpadded_lines[k];
          // help 'Ωhllt_155', uline
          real_indexes.push(Number(uline.replace(/^.*?\s([0-9]+)$/, '$1')));
        }
        this.eq((Ωhllt_156 = function() {
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
          // help 'Ωhllt_157', rpr pline if _ is 1
          real_indexes.push(Number(pline.replace(/^.*?\s([0-9]+)$/, '$1')));
        }
        this.eq((Ωhllt_158 = function() {
          return equals(expected_indexes, real_indexes);
        }), true);
      }
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    h128_decode: function() {
      var Hollerith, codec, equals, hollerith_128, i, index_matcher, index_result, internals, j, len, len1, probes_and_matchers, ref, sortkey, type_of, unit, unit_matcher, unit_result, Ωhllt_161, Ωhllt_162, Ωhllt_164;
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
        // info 'Ωhllt_159', f"#{( rpr unit_result ) + ','}:<60c; #{rpr index_result}"
        //   @eq ( Ωhllt_160 = ->  unit_result                     ),  unit_matcher
        this.eq((Ωhllt_161 = function() {
          return index_result;
        }), index_matcher);
        this.eq((Ωhllt_162 = function() {
          return sortkey;
        }), (codec.encode(index_matcher)).padEnd(sortkey.length, codec.cfg.zpuns[0]));
        // debug 'Ωhllt_163', rpr ( codec.encode index_matcher ).padEnd sortkey.length, codec.cfg.zpuns[ 0 ]
        this.eq((Ωhllt_164 = function() {
          return codec.decode(sortkey);
        }), index_matcher);
      }
      // echo [ sortkey, index_result, unit_result, ]
      //.......................................................................................................
      // @eq     ( Ωhllt_165 = -> codec.parse '5'          ), [ { name: 'other', letters: '5', mantissa: null, index: null } ]
      // @eq     ( Ωhllt_166 = -> codec.parse 'äöü'        ), [ { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
      // @eq     ( Ωhllt_167 = -> codec.parse 'Y900äöü'    ), [ { name: 'pnum', letters: 'Y', mantissa: '900', index: 900 }, { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
      // @throws ( Ωhllt_168 = -> codec.decode '5'         ), /not a valid sortkey: unable to parse '5'/
      // @throws ( Ωhllt_169 = -> codec.decode 'äöü'       ), /not a valid sortkey: unable to parse 'äöü'/
      // @throws ( Ωhllt_170 = -> codec.decode 'äöü'       ), /not a valid sortkey: unable to parse 'ü' in 'Y900äöü'/
      // @throws ( Ωhllt_171 = -> codec.decode 'Y900äöü'   ), /not a valid sortkey: unable to parse 'Y900' in 'Y900äöü'/
      //.......................................................................................................
      // debug 'Ωhllt_172', rpr codec.encode -90 #    [ 'Í¿;ããããããã', [ -999,         ], 'nnum:Í,¿;[-999]|padding:ããããããã',                 ]
      // debug 'Ωhllt_173', rpr codec.decode 'Ç!ÆÆÆÆÆÆH' #    [ 'Í¿;ããããããã', [ -999,         ], 'nnum:Í,¿;[-999]|padding:ããããããã',                 ]
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    h10mvp2_decode_units: function() {
      /* NOTE also see corresponding test in `hengist-NG/dev/interlex/src/test-hollerith.coffee` */
      var Hollerith, codec, hollerith_10mvp2, i, index_matcher, index_result, internals, j, len, len1, probes_and_matchers, ref, sortkey, sortkey_padder, type_of, unit, unit_matcher, unit_result, Ωhllt_175, Ωhllt_176, Ωhllt_177, Ωhllt_178, Ωhllt_179, Ωhllt_180, Ωhllt_181, Ωhllt_182, Ωhllt_183, Ωhllt_184;
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
        // info 'Ωhllt_174', f"#{( rpr unit_result ) + ','}:<60c; #{rpr index_result}"
        this.eq((Ωhllt_175 = function() {
          return unit_result;
        }), unit_matcher);
        this.eq((Ωhllt_176 = function() {
          return index_result;
        }), index_matcher);
        this.eq((Ωhllt_177 = function() {
          return codec.decode(sortkey);
        }), index_matcher);
        this.eq((Ωhllt_178 = function() {
          return sortkey;
        }), (codec.encode(index_matcher)).padEnd(sortkey.length, sortkey_padder));
      }
      // echo [ sortkey, index_result, unit_result, ]
      //.......................................................................................................
      this.eq((Ωhllt_179 = function() {
        return codec.parse('5');
      }), [
        {
          name: 'other',
          letters: '5',
          mantissa: null,
          index: null
        }
      ]);
      this.eq((Ωhllt_180 = function() {
        return codec.parse('äöü');
      }), [
        {
          name: 'other',
          letters: 'äöü',
          mantissa: null,
          index: null
        }
      ]);
      this.eq((Ωhllt_181 = function() {
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
      this.throws((Ωhllt_182 = function() {
        return codec.decode('5');
      }), /not a valid sortkey: unable to parse '5'/);
      this.throws((Ωhllt_183 = function() {
        return codec.decode('äöü');
      }), /not a valid sortkey: unable to parse 'äöü'/);
      this.throws((Ωhllt_184 = function() {
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
    //   debug 'Ωhllt_185', rpr codec.encode -1
    //   debug 'Ωhllt_186', rpr codec.encode -2
    //   n =   -100; urge 'Ωhllt_187', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =    -21; urge 'Ωhllt_188', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =    -20; urge 'Ωhllt_189', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =    -19; urge 'Ωhllt_190', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =     -1; urge 'Ωhllt_191', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =      0; urge 'Ωhllt_192', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =      1; urge 'Ωhllt_193', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =      2; urge 'Ωhllt_194', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =      3; urge 'Ωhllt_195', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =     10; urge 'Ωhllt_196', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =    126; urge 'Ωhllt_197', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =    127; urge 'Ωhllt_198', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =    128; urge 'Ωhllt_199', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =    129; urge 'Ωhllt_200', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   # for [ sortkey, index_matcher, unit_matcher, ] in probes_and_matchers
    //   #   unit_result     = []
    //   #   index_result    = []
    //   #   for unit in codec.parse sortkey
    //   #     unit_result.push  helpers.rpr_unit unit
    //   #     index_result.push unit.index if unit.index?
    //   #   unit_result   = unit_result.join '|'
    //   #   info 'Ωhllt_201', f"#{( rpr unit_result ) + ','}:<60c; #{rpr index_result}"
    //   # #   @eq ( Ωhllt_202 = ->  unit_result                     ),  unit_matcher
    //   #   @eq ( Ωhllt_203 = -> index_result                     ), index_matcher
    //   #   @eq ( Ωhllt_204 = -> sortkey ), ( codec.encode index_matcher ).padEnd sortkey.length, codec.cfg.zpuns[ 0 ]
    //   #   debug 'Ωhllt_205', rpr ( codec.encode index_matcher ).padEnd sortkey.length, codec.cfg.zpuns[ 0 ]
    //   #   @eq ( Ωhllt_206 = -> codec.decode sortkey  ), index_matcher
    //   #   # echo [ sortkey, index_result, unit_result, ]
    //   # #.......................................................................................................
    //   # @eq     ( Ωhllt_207 = -> codec.parse '5'         ), [ { name: 'other', letters: '5', mantissa: null, index: null } ]
    //   # @eq     ( Ωhllt_208 = -> codec.parse 'äöü'       ), [ { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
    //   # @eq     ( Ωhllt_209 = -> codec.parse 'Y900äöü'   ), [ { name: 'pnum', letters: 'Y', mantissa: '900', index: 900 }, { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
    //   # @throws ( Ωhllt_210 = -> codec.decode '5'        ), /not a valid sortkey: unable to parse '5'/
    //   # @throws ( Ωhllt_211 = -> codec.decode 'äöü'      ), /not a valid sortkey: unable to parse 'äöü'/
    //   # @throws ( Ωhllt_212 = -> codec.decode 'Y900äöü'  ), /not a valid sortkey: unable to parse 'äöü' in 'Y900äöü'/
    //   #.......................................................................................................
    //   return null

    //---------------------------------------------------------------------------------------------------------
    types: function() {
      var CFG, Hollerith_typespace, T, equals, internals, pick, type_of, Ωhllt_228, Ωhllt_229, Ωhllt_230, Ωhllt_231, Ωhllt_232, Ωhllt_233, Ωhllt_234, Ωhllt_235, Ωhllt_236, Ωhllt_237, Ωhllt_238, Ωhllt_239, Ωhllt_240, Ωhllt_241, Ωhllt_242, Ωhllt_243, Ωhllt_244, Ωhllt_245, Ωhllt_246, Ωhllt_247, Ωhllt_248, Ωhllt_249, Ωhllt_250, Ωhllt_251, Ωhllt_252, Ωhllt_253, Ωhllt_254, Ωhllt_255, Ωhllt_256, Ωhllt_257, Ωhllt_258, Ωhllt_259, Ωhllt_260, Ωhllt_261, Ωhllt_262, Ωhllt_263, Ωhllt_264, Ωhllt_265, Ωhllt_266, Ωhllt_267, Ωhllt_268, Ωhllt_269, Ωhllt_270, Ωhllt_271, Ωhllt_272, Ωhllt_273;
      ({internals, Hollerith_typespace, CFG} = require('../../../apps/hollerith/lib/types'));
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({
        isDeepStrictEqual: equals
      } = require('node:util'));
      ({pick} = SFMODULES.unstable.require_pick());
      (() => {        //.......................................................................................................
        var T, Ωhllt_213, Ωhllt_214, Ωhllt_215, Ωhllt_216, Ωhllt_217;
        T = new Hollerith_typespace();
        this.eq((Ωhllt_213 = function() {
          return T[CFG].blank;
        }), '\x20');
        this.eq((Ωhllt_214 = function() {
          return T[CFG].blank_splitter;
        }), /(?:\x20)+/gv);
        this.eq((Ωhllt_215 = function() {
          return T[CFG].blank_splitter.unicodeSets;
        }), true);
        this.eq((Ωhllt_216 = function() {
          return T[CFG].blank_splitter.global;
        }), true);
        this.eq((Ωhllt_217 = function() {
          return 'a   g  z  '.replace(T[CFG].blank_splitter, 'ü');
        }), 'aügüzü');
        return null;
      })();
      (() => {        //.......................................................................................................
        var T, Ωhllt_218, Ωhllt_219, Ωhllt_220, Ωhllt_221, Ωhllt_222, Ωhllt_223, Ωhllt_224, Ωhllt_225, Ωhllt_226, Ωhllt_227;
        T = new Hollerith_typespace({
          blank: '#'
        });
        this.eq((Ωhllt_218 = function() {
          return T[CFG].blank;
        }), '#');
        this.eq((Ωhllt_219 = function() {
          return T[CFG].blank_splitter;
        }), /(?:\x23)+/gv);
        this.eq((Ωhllt_220 = function() {
          return T[CFG].blank_splitter.unicodeSets;
        }), true);
        this.eq((Ωhllt_221 = function() {
          return T[CFG].blank_splitter.global;
        }), true);
        this.eq((Ωhllt_222 = function() {
          return 'a###g##z##'.replace(T[CFG].blank_splitter, 'ü');
        }), 'aügüzü');
        this.eq((Ωhllt_223 = function() {
          return T.magnifiers.isa('ABC XYZ');
        }), false);
        this.eq((Ωhllt_224 = function() {
          return T.magnifiers.isa('ABC#XYZ');
        }), true);
        this.eq((Ωhllt_225 = function() {
          return T.blank.isa(' ');
        }), false);
        this.eq((Ωhllt_226 = function() {
          return T.blank.isa('#');
        }), true);
        this.eq((Ωhllt_227 = function() {
          return T.blank.isa(T[CFG].blank);
        }), true);
        return null;
      })();
      //.......................................................................................................
      T = new Hollerith_typespace();
      this.eq((Ωhllt_228 = function() {
        return T.nonempty_text.isa(4);
      }), false);
      this.eq((Ωhllt_229 = function() {
        return T.nonempty_text.isa(false);
      }), false);
      this.eq((Ωhllt_230 = function() {
        return T.nonempty_text.isa('');
      }), false);
      this.eq((Ωhllt_231 = function() {
        return T.nonempty_text.isa('yes');
      }), true);
      //.......................................................................................................
      this.eq((Ωhllt_232 = function() {
        return T.incremental_text.isa('yes');
      }), false);
      this.eq((Ωhllt_233 = function() {
        return T.decremental_text.isa('yes');
      }), false);
      this.eq((Ωhllt_234 = function() {
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
      this.eq((Ωhllt_235 = function() {
        return T.incremental_text.isa('abcdefz');
      }), true);
      this.eq((Ωhllt_236 = function() {
        return T.decremental_text.isa('abcdefz');
      }), false);
      this.eq((Ωhllt_237 = function() {
        return T.incremental_text.data;
      }), {
        chrs: ['a', 'b', 'c', 'd', 'e', 'f', 'z']
      });
      this.eq((Ωhllt_238 = function() {
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
      this.eq((Ωhllt_239 = function() {
        return T.incremental_text.isa('abc0');
      }), false);
      this.eq((Ωhllt_240 = function() {
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
      this.eq((Ωhllt_241 = function() {
        return T.decremental_text.isa('cba');
      }), true);
      this.eq((Ωhllt_242 = function() {
        return T.decremental_text.data;
      }), {
        chrs: ['c', 'b', 'a']
      });
      //.......................................................................................................
      this.eq((Ωhllt_243 = function() {
        return T.magnifiers.isa('');
      }), false);
      this.eq((Ωhllt_244 = function() {
        return T.magnifiers.data;
      }), {
        message: "expected a magnifier, got an empty text"
      });
      this.eq((Ωhllt_245 = function() {
        return T.magnifiers.isa('ABC XYZ');
      }), true);
      this.eq((Ωhllt_246 = function() {
        return pick(T.magnifiers.data, ['nmag_chrs_reversed', 'pmag_chrs', 'nmag', 'pmag']);
      }), {
        nmag_chrs_reversed: ['A', 'B', 'C'],
        pmag_chrs: [' ', 'X', 'Y', 'Z'],
        nmag: ' CBA',
        pmag: ' XYZ'
      });
      this.eq((Ωhllt_247 = function() {
        return Object.isFrozen(T.magnifiers.data.nmag_chrs_reversed);
      }), true);
      this.eq((Ωhllt_248 = function() {
        return Object.isFrozen(T.magnifiers.data.pmag_chrs);
      }), true);
      this.eq((Ωhllt_249 = function() {
        return T.magnifiers.isa('ABC\nXYZ');
      }), false);
      this.eq((Ωhllt_250 = function() {
        return T.magnifiers.isa('ABC\tXYZ');
      }), false);
      this.eq((Ωhllt_251 = function() {
        return T.magnifiers.isa('ABC             XYZ');
      }), true);
      this.eq((Ωhllt_252 = function() {
        return T.magnifiers.isa('ABC DX YZ');
      }), false);
      this.eq((Ωhllt_253 = function() {
        return T.magnifiers.isa('ABD CXYZ');
      }), false);
      //.......................................................................................................
      this.eq((Ωhllt_254 = function() {
        return T.uniliterals.isa(null);
      }), false);
      this.eq((Ωhllt_255 = function() {
        return T.uniliterals.isa('');
      }), false);
      this.eq((Ωhllt_256 = function() {
        return T.uniliterals.isa('VBA');
      }), false);
      this.eq((Ωhllt_257 = function() {
        return T.uniliterals.isa('EFGHIJKLM NOPQRSTUVW');
      }), false);
      this.eq((Ωhllt_258 = function() {
        return T.uniliterals.isa('EFGHIJKLM N OPQRSTUVW');
      }), true);
      this.eq((Ωhllt_259 = function() {
        return T.uniliterals.data;
      }), {
        nuns: 'EFGHIJKLM',
        zpuns: 'NOPQRSTUVW',
        nun_chrs: ['E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'],
        zpun_chrs: ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W']
      });
      this.eq((Ωhllt_260 = function() {
        return T.uniliterals.isa('N');
      }), true);
      this.eq((Ωhllt_261 = function() {
        return T.uniliterals.data;
      }), {
        nuns: '',
        zpuns: 'N',
        nun_chrs: [],
        zpun_chrs: ['N']
      });
      //.......................................................................................................
      this.throws((Ωhllt_262 = function() {
        return T.alphabet.validate(null);
      }), /not a valid alphabet/);
      this.throws((Ωhllt_263 = function() {
        return T.alphabet.validate('');
      }), /not a valid alphabet/);
      this.throws((Ωhllt_264 = function() {
        return T.alphabet.validate('a');
      }), /not a valid alphabet/);
      this.eq((Ωhllt_265 = function() {
        return T.alphabet.validate('ab');
      }), 'ab');
      //.......................................................................................................
      this.throws((Ωhllt_266 = function() {
        return new Hollerith_typespace({
          blank: null
        });
      }), /not a valid blank/);
      this.throws((Ωhllt_267 = function() {
        return new Hollerith_typespace({
          blank: ''
        });
      }), /not a valid blank/);
      this.throws((Ωhllt_268 = function() {
        return new Hollerith_typespace({
          blank: '--'
        });
      }), /not a valid blank/);
      this.throws((Ωhllt_269 = function() {
        return (new Hollerith_typespace({
          blank: null
        })).blank.validate(null);
      }), /not a valid blank/);
      this.throws((Ωhllt_270 = function() {
        return (new Hollerith_typespace({
          blank: ''
        })).blank.validate('');
      }), /not a valid blank/);
      this.throws((Ωhllt_271 = function() {
        return (new Hollerith_typespace({
          blank: '--'
        })).blank.validate('--');
      }), /not a valid blank/);
      this.eq((Ωhllt_272 = function() {
        return (new Hollerith_typespace({
          blank: '-'
        })).blank.validate('-');
      }), '-');
      this.eq((Ωhllt_273 = function() {
        return (new Hollerith_typespace({
          blank: ' '
        })).blank.validate(' ');
      }), ' ');
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    validate_and_compile_cfg_general: function() {
      var CFG, Hollerith, Hollerith_typespace, internals, is_frozen, Ωhllt_274;
      ({internals, Hollerith} = require('../../../apps/hollerith'));
      ({Hollerith_typespace, CFG} = require('../../../apps/hollerith/lib/types'));
      ({
        // { type_of,                    } = SFMODULES.unstable.require_type_of()
        // { isDeepStrictEqual: equals,  } = require 'node:util'
        isFrozen: is_frozen
      } = Object);
      //.......................................................................................................
      /* testing a general assumption so we don't mess up: */
      this.eq((Ωhllt_274 = function() {
        return (Number.MAX_SAFE_INTEGER - 1) === -(Number.MIN_SAFE_INTEGER + 1);
      }), true);
      (() => {        //.......................................................................................................
        var Ωhllt_275, Ωhllt_276, Ωhllt_277;
        // T = new Hollerith_typespace()
        this.throws((Ωhllt_275 = function() {
          return Hollerith.validate_and_compile_cfg({});
        }), /not a valid alphabet/);
        this.throws((Ωhllt_276 = function() {
          return Hollerith.validate_and_compile_cfg({
            alphabet: ''
          });
        }), /not a valid alphabet/);
        this.throws((Ωhllt_277 = function() {
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
        var cfg, h, Ωhllt_278, Ωhllt_279, Ωhllt_280, Ωhllt_281, Ωhllt_282, Ωhllt_283, Ωhllt_284, Ωhllt_285, Ωhllt_286, Ωhllt_287, Ωhllt_288, Ωhllt_289, Ωhllt_290, Ωhllt_291, Ωhllt_292, Ωhllt_293, Ωhllt_294, Ωhllt_295, Ωhllt_296, Ωhllt_297, Ωhllt_298, Ωhllt_299, Ωhllt_300, Ωhllt_301, Ωhllt_302, Ωhllt_303, Ωhllt_304, Ωhllt_306, Ωhllt_307, Ωhllt_308, Ωhllt_309, Ωhllt_310, Ωhllt_311, Ωhllt_312, Ωhllt_313, Ωhllt_314, Ωhllt_315, Ωhllt_316, Ωhllt_317, Ωhllt_318, Ωhllt_319, Ωhllt_320, Ωhllt_321;
        cfg = Hollerith.validate_and_compile_cfg(cfg_10);
        this.eq((Ωhllt_278 = function() {
          return cfg.blank;
        }), ' ');
        this.eq((Ωhllt_279 = function() {
          return cfg.alphabet;
        }), '0123456789');
        this.eq((Ωhllt_280 = function() {
          return cfg.alphabet_chrs;
        }), Array.from('0123456789'));
        this.eq((Ωhllt_281 = function() {
          return cfg._nova;
        }), (Array.from(cfg.alphabet)).at(-1));
        this.eq((Ωhllt_282 = function() {
          return cfg.leading_niners_re;
        }), /^(?:9)*(?=.+$)/gv);
        this.eq((Ωhllt_283 = function() {
          return is_frozen(cfg.alphabet_chrs);
        }), true);
        this.eq((Ωhllt_284 = function() {
          return cfg.base;
        }), 10);
        this.eq((Ωhllt_285 = function() {
          return cfg.magnifiers;
        }), 'ABC XYZ');
        this.eq((Ωhllt_286 = function() {
          return cfg.nmag;
        }), ' CBA');
        this.eq((Ωhllt_287 = function() {
          return cfg.pmag;
        }), ' XYZ');
        this.eq((Ωhllt_288 = function() {
          return cfg.nmag_chrs;
        }), Array.from(' CBA'));
        this.eq((Ωhllt_289 = function() {
          return cfg.pmag_chrs;
        }), Array.from(' XYZ'));
        this.eq((Ωhllt_290 = function() {
          return cfg.uniliterals;
        }), 'FGHIJKLM N OPQRSTUV');
        this.eq((Ωhllt_291 = function() {
          return cfg.nuns;
        }), 'FGHIJKLM');
        this.eq((Ωhllt_292 = function() {
          return cfg.zpuns;
        }), 'NOPQRSTUV');
        this.eq((Ωhllt_293 = function() {
          return cfg.zpun_max;
        }), 8);
        this.eq((Ωhllt_294 = function() {
          return cfg.nun_min;
        }), -8);
        this.eq((Ωhllt_295 = function() {
          return cfg.nun_chrs;
        }), ['F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'], this.eq((Ωhllt_296 = function() {
          return cfg.zpun_chrs;
        }), ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V']));
        this.eq((Ωhllt_297 = function() {
          return cfg.dimension;
        }), 3);
        this.eq((Ωhllt_298 = function() {
          return +((cfg.base ** (cfg.pmag_chrs.length - 1)) - 1);
        }), +999);
        this.eq((Ωhllt_299 = function() {
          return -((cfg.base ** (cfg.nmag_chrs.length - 1)) - 1);
        }), -999);
        this.eq((Ωhllt_300 = function() {
          return cfg._max_integer;
        }), +999);
        this.eq((Ωhllt_301 = function() {
          return cfg._min_integer;
        }), -999);
        this.eq((Ωhllt_302 = function() {
          return cfg._max_digits_per_idx;
        }), 3);
        this.eq((Ωhllt_303 = function() {
          return cfg.TMP_alphabet;
        }), '0123456789ABCFGHIJKLMNOPQRSTUVXYZ');
        //.....................................................................................................
        h = new Hollerith(cfg_10);
        this.eq((Ωhllt_304 = function() {
          return h.cfg;
        }), cfg);
        // @eq ( Ωhllt_305 = -> h.encode  -998 ), null
        this.eq((Ωhllt_306 = function() {
          return h.encode(-12);
        }), 'B87');
        this.eq((Ωhllt_307 = function() {
          return h.encode(-11);
        }), 'B88');
        this.eq((Ωhllt_308 = function() {
          return h.encode(-10);
        }), 'B89');
        this.eq((Ωhllt_309 = function() {
          return h.encode(-9);
        }), 'C0');
        this.eq((Ωhllt_310 = function() {
          return h.encode(-8);
        }), 'F');
        this.eq((Ωhllt_311 = function() {
          return h.encode(-2);
        }), 'L');
        this.eq((Ωhllt_312 = function() {
          return h.encode(-1);
        }), 'M');
        this.eq((Ωhllt_313 = function() {
          return h.encode(0);
        }), 'N');
        this.eq((Ωhllt_314 = function() {
          return h.encode(+1);
        }), 'O');
        this.eq((Ωhllt_315 = function() {
          return h.encode(+2);
        }), 'P');
        this.eq((Ωhllt_316 = function() {
          return h.encode(+8);
        }), 'V');
        this.eq((Ωhllt_317 = function() {
          return h.encode(+9);
        }), 'X9');
        this.eq((Ωhllt_318 = function() {
          return h.encode(+10);
        }), 'Y10');
        this.eq((Ωhllt_319 = function() {
          return h.encode(+11);
        }), 'Y11');
        this.eq((Ωhllt_320 = function() {
          return h.encode(+12);
        }), 'Y12');
        this.eq((Ωhllt_321 = function() {
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
        var cfg, h, Ωhllt_322, Ωhllt_323, Ωhllt_324, Ωhllt_325, Ωhllt_326, Ωhllt_327, Ωhllt_328, Ωhllt_329, Ωhllt_330, Ωhllt_331, Ωhllt_332, Ωhllt_333, Ωhllt_334, Ωhllt_335, Ωhllt_336, Ωhllt_337, Ωhllt_338, Ωhllt_339, Ωhllt_340, Ωhllt_341, Ωhllt_342, Ωhllt_343, Ωhllt_344, Ωhllt_345, Ωhllt_346, Ωhllt_347;
        cfg = Hollerith.validate_and_compile_cfg(cfg_10_no_uniliterals);
        this.eq((Ωhllt_322 = function() {
          return cfg.blank;
        }), ' ');
        this.eq((Ωhllt_323 = function() {
          return cfg.alphabet;
        }), '0123456789');
        this.eq((Ωhllt_324 = function() {
          return cfg.alphabet_chrs;
        }), Array.from('0123456789'));
        this.eq((Ωhllt_325 = function() {
          return cfg._nova;
        }), (Array.from(cfg.alphabet)).at(-1));
        this.eq((Ωhllt_326 = function() {
          return cfg.leading_niners_re;
        }), /^(?:9)*(?=.+$)/gv);
        this.eq((Ωhllt_327 = function() {
          return is_frozen(cfg.alphabet_chrs);
        }), true);
        this.eq((Ωhllt_328 = function() {
          return cfg.base;
        }), 10);
        this.eq((Ωhllt_329 = function() {
          return cfg.magnifiers;
        }), 'ABC XYZ');
        this.eq((Ωhllt_330 = function() {
          return cfg.nmag;
        }), ' CBA');
        this.eq((Ωhllt_331 = function() {
          return cfg.pmag;
        }), ' XYZ');
        this.eq((Ωhllt_332 = function() {
          return cfg.nmag_chrs;
        }), Array.from(' CBA'));
        this.eq((Ωhllt_333 = function() {
          return cfg.pmag_chrs;
        }), Array.from(' XYZ'));
        this.eq((Ωhllt_334 = function() {
          return cfg.uniliterals;
        }), 'N');
        this.eq((Ωhllt_335 = function() {
          return cfg.nuns;
        }), '');
        this.eq((Ωhllt_336 = function() {
          return cfg.zpuns;
        }), 'N');
        this.eq((Ωhllt_337 = function() {
          return cfg.nun_chrs;
        }), []);
        this.eq((Ωhllt_338 = function() {
          return cfg.zpun_chrs;
        }), ['N']);
        this.eq((Ωhllt_339 = function() {
          return cfg.dimension;
        }), 3);
        this.eq((Ωhllt_340 = function() {
          return +((cfg.base ** (cfg.pmag_chrs.length - 1)) - 1);
        }), +999);
        this.eq((Ωhllt_341 = function() {
          return -((cfg.base ** (cfg.nmag_chrs.length - 1)) - 1);
        }), -999);
        this.eq((Ωhllt_342 = function() {
          return cfg._max_integer;
        }), +999);
        this.eq((Ωhllt_343 = function() {
          return cfg._min_integer;
        }), -999);
        this.eq((Ωhllt_344 = function() {
          return cfg._max_digits_per_idx;
        }), 3);
        this.eq((Ωhllt_345 = function() {
          return cfg.TMP_alphabet;
        }), '0123456789ABCNXYZ');
        //.....................................................................................................
        h = new Hollerith(cfg_10_no_uniliterals);
        this.eq((Ωhllt_346 = function() {
          return h.cfg;
        }), cfg);
        this.eq((Ωhllt_347 = function() {
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
        var cfg, h, Ωhllt_348, Ωhllt_349, Ωhllt_350, Ωhllt_351, Ωhllt_352, Ωhllt_353, Ωhllt_354, Ωhllt_355, Ωhllt_356, Ωhllt_357, Ωhllt_358, Ωhllt_359, Ωhllt_360, Ωhllt_361, Ωhllt_362, Ωhllt_363, Ωhllt_364, Ωhllt_367, Ωhllt_368, Ωhllt_369, Ωhllt_370;
        cfg = Hollerith.validate_and_compile_cfg(cfg_128);
        this.eq((Ωhllt_348 = function() {
          return cfg.blank;
        }), ' ');
        this.eq((Ωhllt_349 = function() {
          return cfg.alphabet;
        }), '!#$%&()*+,-./0123456789:;<=>?@AB' + 'CDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abc' + 'defghijklmnopqrstuvwxyz{|}~¡¢£¤¥' + '¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆ');
        this.eq((Ωhllt_350 = function() {
          return cfg.alphabet_chrs;
        }), Array.from(cfg.alphabet));
        this.eq((Ωhllt_351 = function() {
          return cfg._nova;
        }), (Array.from(cfg.alphabet)).at(-1));
        this.eq((Ωhllt_352 = function() {
          return cfg.leading_niners_re;
        }), /^(?:Æ)*(?=.+$)/gv);
        this.eq((Ωhllt_353 = function() {
          return cfg.magnifiers;
        }), 'ÇÈÉÊËÌÍÎ øùúûüýþÿ');
        this.eq((Ωhllt_354 = function() {
          return cfg.nmag;
        }), ' ÎÍÌËÊÉÈÇ');
        this.eq((Ωhllt_355 = function() {
          return cfg.pmag;
        }), ' øùúûüýþÿ');
        this.eq((Ωhllt_356 = function() {
          return cfg.nmag_chrs;
        }), Array.from(' ÎÍÌËÊÉÈÇ'));
        this.eq((Ωhllt_357 = function() {
          return cfg.pmag_chrs;
        }), Array.from(' øùúûüýþÿ'));
        this.eq((Ωhllt_358 = function() {
          return cfg.uniliterals;
        }), 'ÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâ ã äåæçèéêëìíîïðñòóôõö÷');
        this.eq((Ωhllt_359 = function() {
          return cfg.nuns;
        }), 'ÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâ');
        this.eq((Ωhllt_360 = function() {
          return cfg.zpuns;
        }), 'ãäåæçèéêëìíîïðñòóôõö÷');
        this.eq((Ωhllt_361 = function() {
          return cfg.nun_chrs;
        }), Array.from('ÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâ'));
        this.eq((Ωhllt_362 = function() {
          return cfg.zpun_chrs;
        }), Array.from('ãäåæçèéêëìíîïðñòóôõö÷'));
        this.eq((Ωhllt_363 = function() {
          return cfg._min_integer;
        }), -((128 ** 7) - 1));
        this.eq((Ωhllt_364 = function() {
          return cfg._max_integer;
        }), +((128 ** 7) - 1));
        // @eq ( Ωhllt_365 = -> cfg._max_digits_per_idx                                         ), 3
        // @eq ( Ωhllt_366 = -> cfg.TMP_alphabet                                       ), '0123456789ABCEFGHIJKLMNOPQRSTUVWXYZ'
        //.....................................................................................................
        this.eq((Ωhllt_367 = function() {
          return is_frozen(cfg.alphabet_chrs);
        }), true);
        this.eq((Ωhllt_368 = function() {
          return cfg.base;
        }), 128);
        this.eq((Ωhllt_369 = function() {
          return cfg.dimension;
        }), 5);
        //.....................................................................................................
        h = new Hollerith(cfg_128);
        this.eq((Ωhllt_370 = function() {
          return h.cfg;
        }), cfg);
        // @eq ( Ωhllt_371 = -> h.encode [ 0, ] ), null
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
        var T, Ωhllt_372, Ωhllt_373, Ωhllt_374, Ωhllt_375, Ωhllt_376, Ωhllt_377, Ωhllt_378, Ωhllt_379, Ωhllt_380, Ωhllt_381, Ωhllt_382, Ωhllt_383, Ωhllt_384;
        T = new Hollerith_typespace();
        this.eq((Ωhllt_372 = function() {
          return T.base.isa(-1);
        }), false);
        this.eq((Ωhllt_373 = function() {
          return T.base.isa(0);
        }), false);
        this.eq((Ωhllt_374 = function() {
          return T.base.isa(+1);
        }), false);
        this.eq((Ωhllt_375 = function() {
          return T.base.isa(+2);
        }), true);
        this.eq((Ωhllt_376 = function() {
          return T._max_integer_$.isa(null);
        }), false);
        this.eq((Ωhllt_377 = function() {
          return T._max_integer_$.isa(9, 10);
        }), true);
        this.eq((Ωhllt_378 = function() {
          return T._max_integer_$.isa(99, 10);
        }), true);
        this.eq((Ωhllt_379 = function() {
          return T._max_integer_$.isa(99999999, 10);
        }), true);
        this.eq((Ωhllt_380 = function() {
          return T._max_integer_$.isa(-10, 10);
        }), false);
        this.eq((Ωhllt_381 = function() {
          return /not a positive safe integer/.test(T._max_integer_$.data.message);
        }), true);
        this.eq((Ωhllt_382 = function() {
          return T._max_integer_$.isa(0xffff, 16);
        }), true);
        this.eq((Ωhllt_383 = function() {
          return T._max_integer_$.isa(0x7fffffff, 16);
        }), false);
        this.throws((Ωhllt_384 = function() {
          return T._max_integer_$.validate(5, 10);
        }), /\(_max_integer_\$\) not a valid _max_integer_\$: 5 – x not a positive all-niners/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var R, T, Ωhllt_385;
        T = new Hollerith_typespace();
        R = {
          base: 16,
          _max_digits_per_idx: 4
        };
        this.eq((Ωhllt_385 = function() {
          return T._max_integer_$.isa((R.base ** R._max_digits_per_idx) - 1, R.base);
        }), true);
        return null;
      })();
      (() => {        //.......................................................................................................
        var T, Ωhllt_386, Ωhllt_387, Ωhllt_388, Ωhllt_389, Ωhllt_390, Ωhllt_391, Ωhllt_392, Ωhllt_393, Ωhllt_394;
        T = new Hollerith_typespace();
        this.eq((Ωhllt_386 = function() {
          return T._max_integer_$.isa((128 ** 1) - 1, 128);
        }), true);
        this.eq((Ωhllt_387 = function() {
          return T._max_integer_$.isa((128 ** 2) - 1, 128);
        }), true);
        this.eq((Ωhllt_388 = function() {
          return T._max_integer_$.isa((128 ** 3) - 1, 128);
        }), true);
        this.eq((Ωhllt_389 = function() {
          return T._max_integer_$.isa((128 ** 4) - 1, 128);
        }), true);
        this.eq((Ωhllt_390 = function() {
          return T._max_integer_$.isa((128 ** 5) - 1, 128);
        }), true);
        this.eq((Ωhllt_391 = function() {
          return T._max_integer_$.isa((128 ** 6) - 1, 128);
        }), true);
        this.eq((Ωhllt_392 = function() {
          return T._max_integer_$.isa((128 ** 7) - 1, 128);
        }), true);
        this.eq((Ωhllt_393 = function() {
          return T._max_integer_$.isa((128 ** 8) - 1, 128);
        }), false);
        this.eq((Ωhllt_394 = function() {
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
    info('Ωhllt_395', Number.MAX_SAFE_INTEGER.toString(16));
    info('Ωhllt_396', Number.MAX_SAFE_INTEGER.toString(32));
    whisper('—————————————————————————————————');
    info('Ωhllt_397', (32 ** 4 - 1).toString(32));
    info('Ωhllt_398', (32 ** 4 - 1).toString(32));
    whisper('—————————————————————————————————');
    info('Ωhllt_399', get_required_digits(32, 32));
    info('Ωhllt_400', get_required_digits(32 ** 6, 32));
    info('Ωhllt_401', get_required_digits(1e6, 10));
    info('Ωhllt_402', get_required_digits(20, 10));
    whisper('—————————————————————————————————');
    info('Ωhllt_403', max_digits_base_10 = get_max_niner_digit_count(Number.MAX_SAFE_INTEGER, 10));
    info('Ωhllt_404', max_digits_base_16 = get_max_niner_digit_count(Number.MAX_SAFE_INTEGER, 16));
    info('Ωhllt_405', max_digits_base_32 = get_max_niner_digit_count(Number.MAX_SAFE_INTEGER, 32));
    info('Ωhllt_406', max_digits_base_36 = get_max_niner_digit_count(Number.MAX_SAFE_INTEGER, 36));
    info('Ωhllt_407', max_digits_1base_28 = get_max_niner_digit_count(Number.MAX_SAFE_INTEGER, 128));
    // for base in [ 2 .. 128 ]
    //   info 'Ωhllt_408', { base, }, ( Math.ceil log_to_base Number.MAX_SAFE_INTEGER, base ) - 1
    whisper('—————————————————————————————————');
    info('Ωhllt_409', '9'.repeat(max_digits_base_10));
    info('Ωhllt_410', 'f'.repeat(max_digits_base_16));
    info('Ωhllt_411', 'v'.repeat(max_digits_base_32));
    whisper('—————————————————————————————————');
    info('Ωhllt_412', ((base = 10) ** max_digits_base_10) - 1);
    info('Ωhllt_413', ((base = 16) ** max_digits_base_16) - 1);
    info('Ωhllt_414', ((base = 32) ** max_digits_base_32) - 1);
    info('Ωhllt_415', ((base = 36) ** max_digits_base_36) - 1);
    whisper('—————————————————————————————————');
    info('Ωhllt_416', get_max_integer(Number.MAX_SAFE_INTEGER, 10));
    info('Ωhllt_417', get_max_integer(Number.MAX_SAFE_INTEGER, 16));
    info('Ωhllt_418', get_max_integer(Number.MAX_SAFE_INTEGER, 32));
    info('Ωhllt_419', get_max_integer(Number.MAX_SAFE_INTEGER, 36));
    info('Ωhllt_420', get_max_integer(Number.MAX_SAFE_INTEGER, 128));
    whisper('—————————————————————————————————');
    info('Ωhllt_421', parseInt('9'.repeat(max_digits_base_10), 10));
    info('Ωhllt_422', parseInt('f'.repeat(max_digits_base_16), 16));
    info('Ωhllt_423', parseInt('v'.repeat(max_digits_base_32), 32));
    info('Ωhllt_424', parseInt('z'.repeat(max_digits_base_36), 36));
    info('Ωhllt_425', (parseInt('9'.repeat(max_digits_base_10), 10)) <= Number.MAX_SAFE_INTEGER);
    info('Ωhllt_426', (parseInt('f'.repeat(max_digits_base_16), 16)) <= Number.MAX_SAFE_INTEGER);
    info('Ωhllt_427', (parseInt('v'.repeat(max_digits_base_32), 32)) <= Number.MAX_SAFE_INTEGER);
    info('Ωhllt_428', (parseInt('z'.repeat(max_digits_base_36), 36)) <= Number.MAX_SAFE_INTEGER);
    whisper('—————————————————————————————————');
    info('Ωhllt_429', +999 + -999);
    info('Ωhllt_430', +999 + -1);
    info('Ωhllt_431', -(-999 - 1) + -999);
    info('Ωhllt_432', -(-999 - 1) + -998);
    info('Ωhllt_433', -(-999 - 1) + -997);
    info('Ωhllt_434', -(-999 - 1) + -3);
    info('Ωhllt_435', -(-999 - 1) + -2);
    info('Ωhllt_436', -(-999 - 1) + -1);
    info('Ωhllt_437', `${-(-999 - 1) + -3}`.replace(/^9*?(?=.$)/gv, ''));
    info('Ωhllt_438', `${-(-999 - 1) + -2}`.replace(/^9*?(?=.$)/gv, ''));
    info('Ωhllt_439', `${-(-999 - 1) + -1}`.replace(/^9*?(?=.$)/gv, ''));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsZ0JBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUE7O0VBRUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixXQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLElBSkYsRUFLRSxHQUxGLEVBTUUsSUFORixFQU9FLE9BUEYsRUFRRSxHQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBUmhDLEVBWkE7OztFQXNCQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixJQUE1Qjs7RUFDQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1Qjs7RUFDQSxTQUFBLEdBQTRCLE9BQUEsQ0FBUSw2Q0FBUixFQXpCNUI7OztFQTZCQSxPQUFBLEdBR0UsQ0FBQTs7SUFBQSxRQUFBLEVBQVUsUUFBQSxDQUFF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QUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLGVBQWUsQ0FBQyxjQUFoQixDQUErQixDQUFDLEdBQWhDO01BQUgsQ0FBZixDQUFSLEVBQW1FLE1BQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLGVBQWUsQ0FBQyxjQUFoQixDQUFnQyxDQUFDLEVBQWpDO01BQUgsQ0FBZixDQUFSLEVBQW1FLEtBQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLGVBQWUsQ0FBQyxjQUFoQixDQUFnQyxDQUFDLEVBQWpDO01BQUgsQ0FBZixDQUFSLEVBQW1FLEtBQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLGVBQWUsQ0FBQyxjQUFoQixDQUFnQyxDQUFDLEVBQWpDO01BQUgsQ0FBZixDQUFSLEVBQW1FLEtBQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLGVBQWUsQ0FBQyxjQUFoQixDQUFnQyxDQUFDLEVBQWpDO01BQUgsQ0FBZixDQUFSLEVBQW1FLEtBQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLGVBQWUsQ0FBQyxjQUFoQixDQUFpQyxDQUFDLENBQWxDO01BQUgsQ0FBZixDQUFSLEVBQW1FLElBQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLGVBQWUsQ0FBQyxjQUFoQixDQUFpQyxDQUFDLENBQWxDO01BQUgsQ0FBZixDQUFSLEVBQW1FLElBQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLGVBQWUsQ0FBQyxjQUFoQixDQUFpQyxDQUFDLENBQWxDO01BQUgsQ0FBZixDQUFSLEVBQW1FLElBQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLGVBQWUsQ0FBQyxjQUFoQixDQUFpQyxDQUFDLENBQWxDO01BQUgsQ0FBZixDQUFSLEVBQW1FLElBQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLGVBQWUsQ0FBQyxjQUFoQixDQUFpQyxDQUFDLENBQWxDO01BQUgsQ0FBZixDQUFSLEVBQW1FLElBQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLGVBQWUsQ0FBQyxjQUFoQixDQUFpQyxDQUFDLENBQWxDO01BQUgsQ0FBZixDQUFSLEVBQW1FLElBQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLGVBQWUsQ0FBQyxjQUFoQixDQUFpQyxDQUFDLENBQWxDO01BQUgsQ0FBZixDQUFSLEVBQW1FLElBQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLGVBQWUsQ0FBQyxjQUFoQixDQUFpQyxDQUFDLENBQWxDO01BQUgsQ0FBZixDQUFSLEVBQW1FLElBQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLGVBQWUsQ0FBQyxjQUFoQixDQUFpQyxDQUFDLENBQWxDO01BQUgsQ0FBZixDQUFSLEVBQW1FLElBQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLGVBQWUsQ0FBQyxjQUFoQixDQUFrQyxDQUFsQztNQUFILENBQWYsQ0FBUixFQUFtRSxHQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxV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Q0FBQyxNQUFoQixDQUF3QixDQUFDLEVBQXpCLENBQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLGVBQWUsQ0FBQyxjQUFoQixDQUFnQyxDQUFDLEVBQWpDO01BQUgsQ0FBZixDQUFSLEVBQW1FLGVBQWUsQ0FBQyxNQUFoQixDQUF3QixDQUFDLEVBQXpCLENBQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLGVBQWUsQ0FBQyxjQUFoQixDQUFnQyxDQUFDLEVBQWpDO01BQUgsQ0FBZixDQUFSLEVBQW1FLGVBQWUsQ0FBQyxNQUFoQixDQUF3QixDQUFDLEVBQXpCLENBQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLGVBQWUsQ0FBQyxjQUFoQixDQUFpQyxDQUFDLENBQWxDO01BQUgsQ0FBZixDQUFSLEVBQW1FLGVBQWUsQ0FBQyxNQUFoQixDQUF5QixDQUFDLENBQTFCLENBQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLGVBQWUsQ0FBQyxjQUFoQixDQUFpQyxDQUFDLENBQWxDO01BQUgsQ0FBZixDQUFSLEVBQW1FLGVBQWUsQ0FBQyxNQUFoQixDQUF5QixDQUFDLENBQTFCLENBQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLGVBQWUsQ0FBQyxjQUFoQixDQUFpQyxDQUFDLENBQWxDO01BQUgsQ0FBZixDQUFSLEVBQW1FLGVBQWUsQ0FBQyxNQUFoQixDQUF5QixDQUFDLENBQTFCLENBQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLGVBQWUsQ0FBQyxjQUFoQixDQUFpQyxDQUFDLENBQWxDO01BQUgsQ0FBZixDQUFSLEVBQW1FLGVBQWUsQ0FBQyxNQUFoQixDQUF5QixDQUFDLENBQTFCLENBQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLGVBQWUsQ0FBQyxjQUFoQixDQUFpQyxDQUFDLENBQWxDO01BQUgsQ0FBZixDQUFSLEVBQW1FLGVBQWUsQ0FBQyxNQUFoQixDQUF5QixDQUFDLENBQTFCLENBQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLGVBQWUsQ0FBQyxjQUFoQixDQUFpQyxDQUFDLENBQWxDO01BQUgsQ0FBZixDQUFSLEVBQW1FLGVBQWUsQ0FBQyxNQUFoQixDQUF5QixDQUFDLENBQTFCLENBQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLGVBQWUsQ0FBQyxjQUFoQixDQUFpQyxDQUFDLENBQWxDO01BQUgsQ0FBZixDQUFSLEVBQW1FLGVBQWUsQ0FBQyxNQUFoQixDQUF5QixDQUFDLENBQTFCLENBQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLGVBQWUsQ0FBQyxjQUFoQixDQUFpQyxDQUFDLENBQWxDO01BQUgsQ0FBZixDQUFSLEVBQW1FLGVBQWUsQ0FBQyxNQUFoQixDQUF5QixDQUFDLENBQTFCLENBQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLGVBQWUsQ0FBQyxjQUFoQixDQUFpQyxDQUFDLENBQWxDO01BQUgsQ0FBZixDQUFSLEVBQW1FLGVBQWUsQ0FBQyxNQUFoQixDQUF5QixDQUFDLENBQTFCLENBQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLGVBQWUsQ0FBQyxjQUFoQixDQUFrQyxD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Q0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxHQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLEtBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxHQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLElBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxFQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLElBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxFQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLElBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxFQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLElBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxFQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLEdBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxDQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLEdBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxDQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLEdBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxDQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLEdBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxFQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLEdBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxFQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLElBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxHQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLElBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxHQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLEtBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxHQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLEtBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsQ0FBQyxLQUFkO01BQUgsQ0FBZCxDQUFKLEVBQTZFLEtBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENB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Q0FBeUIsQ0FBQyxPQUExQixDQUFrQyxjQUFsQyxFQUE2RCxFQUE3RCxDQUFsQjtBQUNBLFdBQU87RUEzRFUsRUExaENuQjs7O0VBeWxDQSxJQUFHLE1BQUEsS0FBVSxPQUFPLENBQUMsSUFBckI7SUFBK0IsTUFBUyxDQUFBLENBQUEsQ0FBQSxHQUFBO0FBQ3hDLFVBQUEsV0FBQSxFQUFBO01BQUUsQ0FBQSxDQUFFLGFBQUYsQ0FBQSxHQUFxQixPQUFBLENBQVEsMENBQVIsQ0FBckI7TUFDQSxhQUFBLENBQWMseUJBQWQsRUFERjs7TUFHRSxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLEtBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLElBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxDQUFFLElBQUksSUFBSixDQUFTLFdBQVQsQ0FBRixDQUF3QixDQUFDLElBQXpCLENBQThCLElBQUMsQ0FBQSxTQUEvQjthQUNBLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEI7UUFBRSxtQkFBQSxFQUFxQixJQUFDLENBQUEsU0FBUyxDQUFDO01BQWxDLENBQTlCO0lBUHNDLENBQUEsSUFBeEM7OztFQXpsQ0E7Ozs7Ozs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzdHJpY3QnXG5cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnaG9sbGVyaXRoJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIGxpbWVcbiAgZ29sZFxuICByZWRcbiAgYmx1ZVxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxuIyBXR1VZICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy93ZWJndXknXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2luZ2xlLWZpbGUtbW9kdWxlcydcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmhlbHBlcnMgPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcnByX3VuaXQ6ICggdW5pdCApIC0+XG4gICAgeyBuYW1lLFxuICAgICAgbGV0dGVycyxcbiAgICAgIG1hbnRpc3NhLFxuICAgICAgaW5kZXgsICAgIH0gPSB1bml0XG4gICAgUiAgPSBcIiN7bmFtZX06I3tsZXR0ZXJzfVwiXG4gICAgUiArPSBcIiwje21hbnRpc3NhfVwiICBpZiBtYW50aXNzYT9cbiAgICBSICs9IFwiWyN7aW5kZXh9XVwiICAgIGlmIGluZGV4P1xuICAgIHJldHVybiBSXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRfcmFuZG9tX3ZkeF9wcm9kdWNlcjogKHtcbiAgICBzZWVkICAgICAgICA9IG51bGwsXG4gICAgbWluX2xlbmd0aCAgPSAxLFxuICAgIG1heF9sZW5ndGggID0gNSxcbiAgICBtaW5faWR4ICAgICA9IC05OTksXG4gICAgbWF4X2lkeCAgICAgPSArOTk5LCB9PXt9KSAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfcmFuZG9tKClcbiAgICBnZXRfcmFuZG9tICAgICAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IG51bGwsIG9uX3N0YXRzOiBudWxsLCB9XG4gICAgZ2V0X3JuZF9sZW5ndGggID0gZ2V0X3JhbmRvbS5pbnRlZ2VyX3Byb2R1Y2VyIHsgbWluOiBtaW5fbGVuZ3RoLCBtYXg6IG1heF9sZW5ndGgsIH1cbiAgICBnZXRfcm5kX2lkeCAgICAgPSBnZXRfcmFuZG9tLmludGVnZXJfcHJvZHVjZXIgeyBtaW46IG1pbl9pZHgsICAgIG1heDogbWF4X2lkeCwgICAgfVxuICAgIHJldHVybiBnZXRfcm5kX3ZkeCA9IC0+ICggZ2V0X3JuZF9pZHgoKSBmb3IgXyBpbiBbIDEgLi4gZ2V0X3JuZF9sZW5ndGgoKSBdIClcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBob2xsZXJpdGggPVxuXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgaW50ZXJmYWNlOiAtPlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEwLFxuICAgICAgaG9sbGVyaXRoXzEwbXZwLFxuICAgICAgaG9sbGVyaXRoXzEyOCxcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgQGVxICAgICAoIM6pYW55YnRfX18xID0gLT4gdHlwZV9vZiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgICAgICAgICAgKSwgJ2Z1bmN0aW9uJ1xuICAgICAgQGVxICAgICAoIM6pYW55YnRfX18yID0gLT4gdHlwZV9vZiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAgKSwgJ2Z1bmN0aW9uJ1xuICAgICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9uaW5lcnNfcmU6IC0+XG4gICAgeyBpbnRlcm5hbHM6IHsgdHlwZXMsIH0gICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyBnZXRfbmluZXJzX3JlLCAgICAgICAgICB9ID0gdHlwZXMuaW50ZXJuYWxzXG4gICAgIyBkZWJ1ZyAnzqlobGx0X19fMycsICc5ODcnLnJlcGxhY2UgLy8vIF4gKD86IDkgKSo/ICg/PSAuICQgKSAvLy9ndiwgJydcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBAZXEgICAgICggzqlhbnlidF9fXzQgPSAtPiBnZXRfbmluZXJzX3JlICc5JyApLCAvLy8gXiAoPzogOSAgKSogKD89IC4rICQgKSAvLy9ndlxuICAgICAgQGVxICAgICAoIM6pYW55YnRfX181ID0gLT4gZ2V0X25pbmVyc19yZSAnKicgKSwgLy8vIF4gKD86IFxcKiApKiAoPz0gLisgJCApIC8vL2d2XG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGxlYWRpbmdfbmluZXJzX3JlID0gZ2V0X25pbmVyc19yZSAnOSdcbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X19fNiA9IC0+ICc5OTk5Jy5yZXBsYWNlIGxlYWRpbmdfbmluZXJzX3JlLCAnJyApLCAnOSdcbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X19fNyA9IC0+ICAnOTk5Jy5yZXBsYWNlIGxlYWRpbmdfbmluZXJzX3JlLCAnJyApLCAnOSdcbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X19fOCA9IC0+ICAgJzk5Jy5yZXBsYWNlIGxlYWRpbmdfbmluZXJzX3JlLCAnJyApLCAnOSdcbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X19fOSA9IC0+ICAgICc5Jy5yZXBsYWNlIGxlYWRpbmdfbmluZXJzX3JlLCAnJyApLCAnOSdcbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X18xMCA9IC0+ICc5OTg5Jy5yZXBsYWNlIGxlYWRpbmdfbmluZXJzX3JlLCAnJyApLCAnODknXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fMTEgPSAtPiAgJzk4OScucmVwbGFjZSBsZWFkaW5nX25pbmVyc19yZSwgJycgKSwgJzg5J1xuICAgICAgQGVxICAgICAoIM6pYW55YnRfXzEyID0gLT4gICAnODknLnJlcGxhY2UgbGVhZGluZ19uaW5lcnNfcmUsICcnICksICc4OSdcbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X18xMyA9IC0+ICc5OTkyJy5yZXBsYWNlIGxlYWRpbmdfbmluZXJzX3JlLCAnJyApLCAnMidcbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X18xNCA9IC0+ICAnOTkyJy5yZXBsYWNlIGxlYWRpbmdfbmluZXJzX3JlLCAnJyApLCAnMidcbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X18xNSA9IC0+ICAgJzkyJy5yZXBsYWNlIGxlYWRpbmdfbmluZXJzX3JlLCAnJyApLCAnMidcbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X18xNiA9IC0+ICAgICc3Jy5yZXBsYWNlIGxlYWRpbmdfbmluZXJzX3JlLCAnJyApLCAnNydcbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X18xNyA9IC0+ICAgICAnJy5yZXBsYWNlIGxlYWRpbmdfbmluZXJzX3JlLCAnJyApLCAnJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGgxMG12cF8xOiAtPlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEwLFxuICAgICAgaG9sbGVyaXRoXzEwbXZwLFxuICAgICAgaG9sbGVyaXRoXzEyOCxcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgICAgICggzqlhbnlidF9fMTggPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgLTk5OSAgICksICdLMDAwJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18xOSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgLTk5ICAgKSwgJ0wwMCdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMjAgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgIC05MCAgICksICdMMDknXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzIxID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAtMTEgICApLCAnTDg4J1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18yMiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgLTEwICAgKSwgJ0w4OSdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMjMgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtOSAgICksICdNMCdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMjQgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtOCAgICksICdNMSdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMjUgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtNyAgICksICdNMidcbiAgICBAZXEgICAgICggzqlhbnlidF9fMjYgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtNiAgICksICdNMydcbiAgICBAZXEgICAgICggzqlhbnlidF9fMjcgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtNSAgICksICdNNCdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMjggPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtNCAgICksICdNNSdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMjkgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtMyAgICksICdNNidcbiAgICBAZXEgICAgICggzqlhbnlidF9fMzAgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtMiAgICksICdNNydcbiAgICBAZXEgICAgICggzqlhbnlidF9fMzEgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtMSAgICksICdNOCdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMzIgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAgMCAgICksICdOJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18zMyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgICAxICAgKSwgJ08xJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18zNCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgICs5ICAgKSwgJ085J1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18zNSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgKzEwICAgKSwgJ1AxMCdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMzYgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICsyMCAgICksICdQMjAnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzM3ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICArOTAgICApLCAnUDkwJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18zOCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgMTIzICAgKSwgJ1ExMjMnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzM5ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICs5MDAgICApLCAnUTkwMCdcbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaDEwbXZwXzI6IC0+XG4gICAgeyBIb2xsZXJpdGgsXG4gICAgICBob2xsZXJpdGhfMTAsXG4gICAgICBob2xsZXJpdGhfMTBtdnAsXG4gICAgICBob2xsZXJpdGhfMTI4LFxuICAgICAgaW50ZXJuYWxzICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAgICAgKCDOqWFueWJ0X180MCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAtOTk5ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAtOTk5XG4gICAgQGVxICAgICAoIM6pYW55YnRfXzQxID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAtOTkgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAtOTlcbiAgICBAZXEgICAgICggzqlhbnlidF9fNDIgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgIC05MCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgIC05MFxuICAgIEBlcSAgICAgKCDOqWFueWJ0X180MyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgLTExICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgLTExXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzQ0ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAtMTAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAtMTBcbiAgICBAZXEgICAgICggzqlhbnlidF9fNDUgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtOSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAtOVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X180NiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC04ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgIC04XG4gICAgQGVxICAgICAoIM6pYW55YnRfXzQ3ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTcgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgLTdcbiAgICBAZXEgICAgICggzqlhbnlidF9fNDggPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtNiAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAtNlxuICAgIEBlcSAgICAgKCDOqWFueWJ0X180OSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC01ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgIC01XG4gICAgQGVxICAgICAoIM6pYW55YnRfXzUwID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTQgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgLTRcbiAgICBAZXEgICAgICggzqlhbnlidF9fNTEgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtMyAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAtM1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X181MiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC0yICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgIC0yXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzUzID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTEgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgLTFcbiAgICBAZXEgICAgICggzqlhbnlidF9fNTQgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAgMCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAgMFxuICAgIEBlcSAgICAgKCDOqWFueWJ0X181NSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgICAxICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgICAxXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzU2ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgKzkgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgKzlcbiAgICBAZXEgICAgICggzqlhbnlidF9fNTcgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICsxMCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICsxMFxuICAgIEBlcSAgICAgKCDOqWFueWJ0X181OCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgKzIwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgKzIwXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzU5ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICArOTAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICArOTBcbiAgICBAZXEgICAgICggzqlhbnlidF9fNjAgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgIDEyMyAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgIDEyM1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X182MSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciArOTAwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSArOTAwXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGgxMG12cF8zOiAtPlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEwLFxuICAgICAgaG9sbGVyaXRoXzEwbXZwLFxuICAgICAgaG9sbGVyaXRoXzEyOCxcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgICAgICggzqlhbnlidF9fNjIgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgLTk5OSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAtOTk5LCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzYzID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAtOTkgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgIC05OSwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X182NCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgLTkwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAtOTAsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNjUgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgIC0xMSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgLTExLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzY2ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAtMTAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgIC0xMCwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X182NyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC05ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgLTksIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNjggPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtOCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgIC04LCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzY5ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTcgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICAtNywgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X183MCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC02ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgLTYsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNzEgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtNSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgIC01LCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzcyID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTQgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICAtNCwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X183MyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC0zICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgLTMsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNzQgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtMiAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgIC0yLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzc1ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTEgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICAtMSwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X183NiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgICAwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgIDAsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNzcgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAgMSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgICAxLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzc4ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgKzkgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICArOSwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X183OSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgKzEwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICArMTAsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fODAgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICsyMCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgKzIwLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzgxID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICArOTAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICs5MCwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X184MiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgMTIzICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAxMjMsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fODMgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgKzkwMCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyArOTAwLCBdXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGgxMG12cF9zb3J0aW5nXzE6IC0+XG4gICAgeyBIb2xsZXJpdGgsXG4gICAgICBob2xsZXJpdGhfMTAsXG4gICAgICBob2xsZXJpdGhfMTBtdnAsXG4gICAgICBob2xsZXJpdGhfMTI4LFxuICAgICAgaW50ZXJuYWxzICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHNvcnRlZF9zaW5nbGVzID0gKCBwYWRkaW5nID0gbnVsbCApID0+XG4gICAgICBwcm9iZXMgPSBbXG4gICAgICAgIFsgLTk5OSwgXVxuICAgICAgICBbICAtOTksIF1cbiAgICAgICAgWyAgLTkwLCBdXG4gICAgICAgIFsgIC0xMSwgXVxuICAgICAgICBbICAtMTAsIF1cbiAgICAgICAgWyAgIC05LCBdXG4gICAgICAgIFsgICAtOCwgXVxuICAgICAgICBbICAgLTcsIF1cbiAgICAgICAgWyAgIC02LCBdXG4gICAgICAgIFsgICAtNSwgXVxuICAgICAgICBbICAgLTQsIF1cbiAgICAgICAgWyAgIC0zLCBdXG4gICAgICAgIFsgICAtMiwgXVxuICAgICAgICBbICAgLTEsIF1cbiAgICAgICAgWyAgICAwLCBdXG4gICAgICAgIFsgICAgMSwgXVxuICAgICAgICBbICAgKzksIF1cbiAgICAgICAgWyAgKzEwLCBdXG4gICAgICAgIFsgICsyMCwgXVxuICAgICAgICBbICArOTAsIF1cbiAgICAgICAgWyAgMTIzLCBdXG4gICAgICAgIFsgKzkwMCwgXVxuICAgICAgICBdXG4gICAgICBmb3IgcHJvYmUsIGlkeCBpbiBwcm9iZXNcbiAgICAgICAgc2sgICAgICAgICAgICA9IGhvbGxlcml0aF8xMG12cC5lbmNvZGUgcHJvYmVcbiAgICAgICAgc2sgICAgICAgICAgICA9IHNrLnBhZEVuZCBwYWRkaW5nLCBob2xsZXJpdGhfMTBtdnAuY2ZnLnpwdW5zWyAwIF0gaWYgcGFkZGluZz9cbiAgICAgICAgcHJvYmVzWyBpZHggXSA9IHsgc2ssIHByb2JlLCBpZHgsIH1cbiAgICAgIHByb2Jlcy5zb3J0ICggYSwgYiApIC0+XG4gICAgICAgIHJldHVybiAtMSBpZiBhLnNrIDwgYi5za1xuICAgICAgICByZXR1cm4gKzEgaWYgYS5zayA+IGIuc2tcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIGZvciBlbnRyeSwgaWR4IGluIHByb2Jlc1xuICAgICAgICAjIGRlYnVnICfOqWhsbHRfXzg0JywgZW50cnlcbiAgICAgICAgQGVxICggzqlobGx0X184NSA9IC0+IGVudHJ5LmlkeCApLCBpZHhcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBzb3J0ZWRfc2luZ2xlcyBudWxsXG4gICAgc29ydGVkX3NpbmdsZXMgMTBcbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaDEwbXZwX3NvcnRpbmdfMjogLT5cbiAgICB7IEhvbGxlcml0aCxcbiAgICAgIGhvbGxlcml0aF8xMG12cCxcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwcm9iZXMgPSBbXG4gICAgICBbIFsgLTk5OSwgICAgICAgICAgIF0sICdLMDAwJywgICAgICBdXG4gICAgICBbIFsgIC05OSwgICAgICAgICAgIF0sICdMMDAnLCAgICAgICBdXG4gICAgICBbIFsgIC05MCwgICAgICAgICAgIF0sICdMMDknLCAgICAgICBdXG4gICAgICBbIFsgIC0xMSwgICAgICAgICAgIF0sICdMODgnLCAgICAgICBdXG4gICAgICBbIFsgIC0xMCwgICAgICAgICAgIF0sICdMODknLCAgICAgICBdXG4gICAgICBbIFsgICAtOSwgICAgICAgICAgIF0sICdNMCcsICAgICAgICBdXG4gICAgICBbIFsgICAtOCwgICAgICAgICAgIF0sICdNMScsICAgICAgICBdXG4gICAgICBbIFsgICAtNywgICAgICAgICAgIF0sICdNMicsICAgICAgICBdXG4gICAgICBbIFsgICAtNiwgICAgICAgICAgIF0sICdNMycsICAgICAgICBdXG4gICAgICBbIFsgICAtNSwgICAgICAgICAgIF0sICdNNCcsICAgICAgICBdXG4gICAgICBbIFsgICAtNCwgICAgICAgICAgIF0sICdNNScsICAgICAgICBdXG4gICAgICBbIFsgICAtMywgICAgICAgICAgIF0sICdNNicsICAgICAgICBdXG4gICAgICBbIFsgICAtMiwgICAgICAgICAgIF0sICdNNycsICAgICAgICBdXG4gICAgICBbIFsgICAtMSwgICAgICAgICAgIF0sICdNOCcsICAgICAgICBdXG4gICAgICBbIFsgICArMCwgIC0yMCwgICAgIF0sICdOTDIwJywgICAgICBdXG4gICAgICBbIFsgICArMCwgICAgICAgICAgIF0sICdOJywgICAgICAgICBdXG4gICAgICBbIFsgICArMCwgICsyMCwgICAgIF0sICdOUDIwJywgICAgICBdXG4gICAgICBbIFsgICArOSwgICAgICAgICAgIF0sICdPOScsICAgICAgICBdXG4gICAgICBbIFsgICsxMCwgICAtMywgICAgIF0sICdQMTBNNicsICAgICBdXG4gICAgICBbIFsgICsxMCwgICAtMiwgICAgIF0sICdQMTBNNycsICAgICBdXG4gICAgICBbIFsgICsxMCwgICAtMSwgICAgIF0sICdQMTBNOCcsICAgICBdXG4gICAgICBbIFsgICsxMCwgICAgICAgICAgIF0sICdQMTAnLCAgICAgICBdXG4gICAgICBbIFsgICsxMCwgICArMCwgICAgIF0sICdQMTBOJywgICAgICBdXG4gICAgICBbIFsgICsxMCwgICArMSwgICAgIF0sICdQMTBPMScsICAgICBdXG4gICAgICBbIFsgICsxMCwgICsxMCwgLTEsIF0sICdQMTBQMTBNOCcsICBdXG4gICAgICBbIFsgICsxMCwgICsxMCwgICAgIF0sICdQMTBQMTAnLCAgICBdXG4gICAgICBbIFsgICsxMCwgICsyMCwgICAgIF0sICdQMTBQMjAnLCAgICBdXG4gICAgICBbIFsgICsyMCwgICAgICAgICAgIF0sICdQMjAnLCAgICAgICBdXG4gICAgICBbIFsgICsyMCwgICsxMCwgICAgIF0sICdQMjBQMTAnLCAgICBdXG4gICAgICBbIFsgICs5MCwgICAgICAgICAgIF0sICdQOTAnLCAgICAgICBdXG4gICAgICBbIFsgKzkwMCwgICAgICAgICAgIF0sICdROTAwJywgICAgICBdXG4gICAgICBdXG4gICAgdWxpbmVzICAgICAgICAgICAgPSBbXVxuICAgIHBsaW5lcyAgICAgICAgICAgID0gW11cbiAgICBleHBlY3RlZF9pbmRleGVzICA9ICggaWR4IGZvciBpZHggaW4gWyAwIC4uLiBwcm9iZXMubGVuZ3RoIF0gKVxuICAgIHNodWZmbGUgICAgICAgICAgID0gR1VZLnJuZC5nZXRfc2h1ZmZsZSA1NywgODhcbiAgICBmb3IgWyB2ZHgsIHNrX21hdGNoZXIsIF0sIGlkeCBpbiBwcm9iZXNcbiAgICAgIHVzayAgID0gaG9sbGVyaXRoXzEwbXZwLmVuY29kZSB2ZHhcbiAgICAgIHBzayAgID0gdXNrLnBhZEVuZCAxMCwgaG9sbGVyaXRoXzEwbXZwLmNmZy56cHVuc1sgMCBdXG4gICAgICB1c2sgICA9IHVzay5wYWRFbmQgMTAsICcgJ1xuICAgICAgdWxpbmVzLnB1c2ggXCIje3Vza30gI3tycHIgdmR4fSAje2lkeH1cIlxuICAgICAgcGxpbmVzLnB1c2ggXCIje3Bza30gI3tycHIgdmR4fSAje2lkeH1cIlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZm9yIF8gaW4gWyAxIC4uIDEwIF1cbiAgICAgIHVsaW5lcyA9IHNodWZmbGUgdWxpbmVzXG4gICAgICB1bGluZXMuc29ydCgpXG4gICAgICByZWFsX2luZGV4ZXMgPSBbXVxuICAgICAgZm9yIHVsaW5lIGluIHVsaW5lc1xuICAgICAgICAjIGhlbHAgJ86paGxsdF9fODYnLCB1bGluZVxuICAgICAgICByZWFsX2luZGV4ZXMucHVzaCBOdW1iZXIgdWxpbmUucmVwbGFjZSAvXi4qP1xccyhbMC05XSspJC8sICckMSdcbiAgICAgIEBlcSAoIM6paGxsdF9fODcgPSAtPiBlcXVhbHMgZXhwZWN0ZWRfaW5kZXhlcywgcmVhbF9pbmRleGVzICksIGZhbHNlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmb3IgXyBpbiBbIDEgLi4gMTAgXVxuICAgICAgcGxpbmVzID0gc2h1ZmZsZSBwbGluZXNcbiAgICAgIHBsaW5lcy5zb3J0KClcbiAgICAgIHJlYWxfaW5kZXhlcyA9IFtdXG4gICAgICBmb3IgcGxpbmUgaW4gcGxpbmVzXG4gICAgICAgICMgaGVscCAnzqlobGx0X184OCcsIHBsaW5lXG4gICAgICAgIHJlYWxfaW5kZXhlcy5wdXNoIE51bWJlciBwbGluZS5yZXBsYWNlIC9eLio/XFxzKFswLTldKykkLywgJyQxJ1xuICAgICAgQGVxICggzqlobGx0X184OSA9IC0+IGVxdWFscyBleHBlY3RlZF9pbmRleGVzLCByZWFsX2luZGV4ZXMgKSwgdHJ1ZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGgxMG12cDJfYmlnX3NodWZmbGU6IC0+XG4gICAgeyBIb2xsZXJpdGgsXG4gICAgICBob2xsZXJpdGhfMTBtdnAyLFxuICAgICAgaW50ZXJuYWxzICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICBjb2RlYyAgICAgICAgICAgICAgICAgICAgICAgPSBob2xsZXJpdGhfMTBtdnAyXG4gICAgcm5kX3ZkeF9jZmcgICAgICAgICAgICAgICAgID1cbiAgICAgIHNlZWQ6ICAgICAgICAgbnVsbFxuICAgICAgbWluX2xlbmd0aDogICAxXG4gICAgICBtYXhfbGVuZ3RoOiAgIGNvZGVjLmNmZy52ZHhfbGVuZ3RoIC0gMVxuICAgICAgbWluX2lkeDogICAgICBNYXRoLm1pbiBjb2RlYy5jZmcuX21pbl9pbnRlZ2VyLCAyMDAwXG4gICAgICBtYXhfaWR4OiAgICAgIE1hdGgubWluIGNvZGVjLmNmZy5fbWF4X2ludGVnZXIsIDIwMDBcbiAgICBkZWJ1ZyAnzqlobGx0X185MCcsIHJuZF92ZHhfY2ZnXG4gICAgZGVidWcgJ86paGxsdF9fOTEnLCBjb2RlYy5jZmcuX3NvcnRrZXlfd2lkdGhcbiAgICBnZXRfcmFuZG9tX3ZkeCAgICAgICAgICAgICAgPSBoZWxwZXJzLmdldF9yYW5kb21fdmR4X3Byb2R1Y2VyIHJuZF92ZHhfY2ZnXG4gICAgcHJvYmVfc3ViX2NvdW50ICAgICAgICAgICAgID0gM1xuICAgIHNodWZmbGUgICAgICAgICAgICAgICAgICAgICA9IEdVWS5ybmQuZ2V0X3NodWZmbGUgNTcsIDg4XG4gICAgZW5jb2RlICAgICAgICAgICAgICAgICAgICAgID0gKCB2ZHggKSAtPiAoIGNvZGVjLmVuY29kZSB2ZHggKS5wYWRFbmQgY29kZWMuY2ZnLl9zb3J0a2V5X3dpZHRoLCBjb2RlYy5jZmcuX2NpcGhlclxuICAgIHByb2Jlc19zb3J0a2V5ICAgICAgICAgICAgICA9IFtdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmb3IgZmlyc3RfaWR4IGluIFsgY29kZWMuY2ZnLl9taW5faW50ZWdlciAuLiBjb2RlYy5jZmcuX21heF9pbnRlZ2VyIF1cbiAgICAgIGZvciBfIGluIFsgMSAuLiBwcm9iZV9zdWJfY291bnQgXVxuICAgICAgICB2ZHggPSBbIGZpcnN0X2lkeCwgZ2V0X3JhbmRvbV92ZHgoKS4uLiwgXVxuICAgICAgICBzayAgPSBlbmNvZGUgdmR4XG4gICAgICAgIHByb2Jlc19zb3J0a2V5LnB1c2ggeyB2ZHgsIHNrLCB9XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwcm9iZXNfc29ydGtleSAgICA9IHNodWZmbGUgcHJvYmVzX3NvcnRrZXlcbiAgICBwcm9iZXNfdmR4ICAgICAgICA9IHByb2Jlc19zb3J0a2V5WyAuLiBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBzb3J0X2J5X3ZkeCAgICAgICA9ICggYSwgYiApIC0+XG4gICAgICBhID0gYS52ZHhcbiAgICAgIGIgPSBiLnZkeFxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4uICggTWF0aC5tYXggYS5sZW5ndGgsIGIubGVuZ3RoICkgXVxuICAgICAgICBkYSA9IGFbIGlkeCBdID8gMFxuICAgICAgICBkYiA9IGJbIGlkeCBdID8gMFxuICAgICAgICBjb250aW51ZSBpZiBkYSBpcyBkYlxuICAgICAgICByZXR1cm4gLTEgaWYgZGEgPCBkYlxuICAgICAgICByZXR1cm4gKzFcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBzb3J0X2J5X3NvcnRrZXkgICA9ICggYSwgYiApIC0+XG4gICAgICBhID0gYS5za1xuICAgICAgYiA9IGIuc2tcbiAgICAgIHJldHVybiAgMCBpZiBhIGlzIGJcbiAgICAgIHJldHVybiAtMSBpZiBhIDwgYlxuICAgICAgcmV0dXJuICsxXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwcm9iZXNfdmR4LnNvcnQgICAgIHNvcnRfYnlfdmR4XG4gICAgcHJvYmVzX3NvcnRrZXkuc29ydCBzb3J0X2J5X3NvcnRrZXlcbiAgICBmb3IgcHJvYmVfdmR4LCBpZHggaW4gcHJvYmVzX3ZkeFxuICAgICAgcHJvYmVfc29ydGtleSA9IHByb2Jlc19zb3J0a2V5WyBpZHggXVxuICAgICAgd2hpc3BlciAnzqlobGx0X185MicsICggZ29sZCBwcm9iZV9zb3J0a2V5LnNrICksICggcmVkIHByb2JlX3ZkeC52ZHggKSwgKCBsaW1lIHByb2JlX3NvcnRrZXkudmR4IClcbiAgICAgIEBlcSAoIM6paGxsdF9fOTMgPSAtPiBwcm9iZV9zb3J0a2V5LnZkeCApLCBwcm9iZV92ZHgudmR4XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaDEyOF8xNjM4M19zb3J0aW5nXzI6IC0+XG4gICAgeyBIb2xsZXJpdGgsXG4gICAgICBob2xsZXJpdGhfMTI4XzE2MzgzLFxuICAgICAgaW50ZXJuYWxzICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHByb2JlcyA9IFtcbiAgICAgIFsgWyAtOTk5LCAgICAgICAgICAgXSwgJ8ONwr87JywgICAgIF1cbiAgICAgIFsgWyAgLTk5LCAgICAgICAgICAgXSwgJ8OOPycsICAgICAgXVxuICAgICAgWyBbICAtOTAsICAgICAgICAgICBdLCAnw45IJywgICAgICBdXG4gICAgICBbIFsgIC04MCwgICAgICAgICAgIF0sICfDjlInLCAgICAgIF1cbiAgICAgIFsgWyAgLTIxLCAgICAgICAgICAgXSwgJ8OOwrEnLCAgICAgIF1cbiAgICAgIFsgWyAgLTIwLCAgICAgICAgICAgXSwgJ8OPJywgICAgICAgXVxuICAgICAgWyBbICAtMTEsICAgICAgICAgICBdLCAnw5gnLCAgICAgICBdXG4gICAgICBbIFsgIC0xMCwgICAgICAgICAgIF0sICfDmScsICAgICAgIF1cbiAgICAgIFsgWyAgIC05LCAgICAgICAgICAgXSwgJ8OaJywgICAgICAgXVxuICAgICAgWyBbICAgLTgsICAgICAgICAgICBdLCAnw5snLCAgICAgICBdXG4gICAgICBbIFsgICAtNywgICAgICAgICAgIF0sICfDnCcsICAgICAgIF1cbiAgICAgIFsgWyAgIC02LCAgICAgICAgICAgXSwgJ8OdJywgICAgICAgXVxuICAgICAgWyBbICAgLTUsICAgICAgICAgICBdLCAnw54nLCAgICAgICBdXG4gICAgICBbIFsgICAtNCwgICAgICAgICAgIF0sICfDnycsICAgICAgIF1cbiAgICAgIFsgWyAgIC0zLCAgICAgICAgICAgXSwgJ8OgJywgICAgICAgXVxuICAgICAgWyBbICAgLTIsICAgICAgICAgICBdLCAnw6EnLCAgICAgICBdXG4gICAgICBbIFsgICAtMSwgICAgICAgICAgIF0sICfDoicsICAgICAgIF1cbiAgICAgIFsgWyAgICswLCAgLTIwLCAgICAgXSwgJ8Ojw48nLCAgICAgIF1cbiAgICAgIFsgWyAgICswLCAgICAgICAgICAgXSwgJ8OjJywgICAgICAgXVxuICAgICAgWyBbICAgKzAsICArMjAsICAgICBdLCAnw6PDtycsICAgICAgXVxuICAgICAgWyBbICAgKzksICAgICAgICAgICBdLCAnw6wnLCAgICAgICBdXG4gICAgICBbIFsgICsxMCwgICAtMywgICAgIF0sICfDrcOgJywgICAgICBdXG4gICAgICBbIFsgICsxMCwgICAtMiwgICAgIF0sICfDrcOhJywgICAgICBdXG4gICAgICBbIFsgICsxMCwgICAtMSwgICAgIF0sICfDrcOiJywgICAgICBdXG4gICAgICBbIFsgICsxMCwgICAgICAgICAgIF0sICfDrScsICAgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgICswLCAgICAgXSwgJ8Otw6MnLCAgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgICsxLCAgICAgXSwgJ8Otw6QnLCAgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgKzEwLCAtMSwgXSwgJ8Otw63DoicsICAgICBdXG4gICAgICBbIFsgICsxMCwgICsxMCwgICAgIF0sICfDrcOtJywgICAgICBdXG4gICAgICBbIFsgICsxMCwgICsyMCwgICAgIF0sICfDrcO3JywgICAgICBdXG4gICAgICBbIFsgICsyMCwgICAgICAgICAgIF0sICfDtycsICAgICAgIF1cbiAgICAgIFsgWyAgKzIwLCAgKzEwLCAgICAgXSwgJ8O3w60nLCAgICAgIF1cbiAgICAgIFsgWyAgKzkwLCAgICAgICAgICAgXSwgJ8O4ficsICAgICAgXVxuICAgICAgWyBbICs5MDAsICAgICAgICAgICBdLCAnw7kqJicsICAgICBdXG4gICAgICBdXG4gICAgdW5wYWRkZWRfbGluZXMgICAgPSBbXVxuICAgIHBhZGRlZF9saW5lcyAgICAgID0gW11cbiAgICBleHBlY3RlZF9pbmRleGVzICA9ICggaWR4IGZvciBpZHggaW4gWyAwIC4uLiBwcm9iZXMubGVuZ3RoIF0gKVxuICAgIHNodWZmbGUgICAgICAgICAgID0gR1VZLnJuZC5nZXRfc2h1ZmZsZSA1NywgODhcbiAgICBjb2RlYyAgICAgICAgICAgICA9IGhvbGxlcml0aF8xMjhfMTYzODNcbiAgICAjIGRlYnVnICfOqWhsbHRfXzk5JywgY29kZWMuY2ZnLl9tYXhfZGlnaXRzX3Blcl9pZHhcbiAgICAjIGRlYnVnICfOqWhsbHRfMTAwJywgY29kZWMuY2ZnLnplcm9fcGFkX2xlbmd0aFxuICAgIEBlcSAoIM6paGxsdF8xMDEgPSAtPiBjb2RlYy5jZmcuYmFzZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAxMjhcbiAgICBAZXEgKCDOqWhsbHRfMTAyID0gLT4gY29kZWMuY2ZnLl9tYXhfaW50ZWdlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgKzE2MzgzXG4gICAgQGVxICggzqlobGx0XzEwMyA9IC0+IGNvZGVjLmNmZy5fbWluX2ludGVnZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC0xNjM4M1xuICAgIEBlcSAoIM6paGxsdF8xMDQgPSAtPiBjb2RlYy5jZmcucG1hZ19jaHJzWyAyIF0gICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw7knXG4gICAgQGVxICggzqlobGx0XzEwNSA9IC0+IGNvZGVjLmNmZy5ubWFnX2NocnNbIDIgXSAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDjSdcbiAgICBAZXEgKCDOqWhsbHRfMTA2ID0gLT4gY29kZWMuZW5jb2RlIGNvZGVjLmNmZy5fbWF4X2ludGVnZXIgICAgICAgICAgICAgICAgKSwgJ8O5w4bDhidcbiAgICBAZXEgKCDOqWhsbHRfMTA3ID0gLT4gY29kZWMuZW5jb2RlIGNvZGVjLmNmZy5fbWluX2ludGVnZXIgICAgICAgICAgICAgICAgKSwgJ8ONISEnXG4gICAgQGVxICggzqlobGx0XzEwOCA9IC0+IGNvZGVjLmRlY29kZSAnw40hIScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIC0xNjM4MyBdXG4gICAgQHRocm93cyAoIM6paGxsdF8xMDkgPSAtPiBjb2RlYy5kZWNvZGUgJ8OHISEhISEhISEnICAgICAgICAgICAgICAgICAgICAgICApLCAvbm90IGEgdmFsaWQgc29ydGtleS9cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGZvciBbIHZkeCwgc2tfbWF0Y2hlciwgXSwgaWR4IGluIHByb2Jlc1xuICAgICAgdXNrICAgPSBjb2RlYy5lbmNvZGUgdmR4XG4gICAgICBAZXEgKCDOqWhsbHRfMTEwID0gLT4gdXNrICksIHNrX21hdGNoZXJcbiAgICAgICMgZWNobyBycHIgdXNrXG4gICAgICBwc2sgICA9IHVzay5wYWRFbmQgMTAsIGNvZGVjLmNmZy5fY2lwaGVyXG4gICAgICB1c2sgICA9IHVzay5wYWRFbmQgMTAsICcgJ1xuICAgICAgdW5wYWRkZWRfbGluZXMucHVzaCBcIiN7dXNrfSAje3JwciB2ZHh9ICN7aWR4fVwiXG4gICAgICBwYWRkZWRfbGluZXMucHVzaCBcIiN7cHNrfSAje3JwciB2ZHh9ICN7aWR4fVwiXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgKCDOqWhsbHRfMTExID0gLT4gY29kZWMuY2ZnLl9tYXhfZGlnaXRzX3Blcl9pZHggICAgICAgICAgICAgICAgICAgICAgICApLCAyXG4gICAgQGVxICggzqlobGx0XzExMiA9IC0+IGNvZGVjLmNmZy56cHVuX21heCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgMjBcbiAgICBAZXEgKCDOqWhsbHRfMTEzID0gLT4gY29kZWMuY2ZnLl9uYXVnaHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnISdcbiAgICBAZXEgKCDOqWhsbHRfMTE0ID0gLT4gY29kZWMuY2ZnLl9ub3ZhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw4YnXG4gICAgQGVxICggzqlobGx0XzExNSA9IC0+IGNvZGVjLmNmZy5fY2lwaGVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8OjJ1xuICAgIEBlcSAoIM6paGxsdF8xMTYgPSAtPiBjb2RlYy5jZmcubm1hZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcgw47DjSdcbiAgICBAZXEgKCDOqWhsbHRfMTE3ID0gLT4gY29kZWMuY2ZnLnBtYWcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnIMO4w7knXG4gICAgQGVxICggzqlobGx0XzExOCA9IC0+IGNvZGVjLmNmZy5wbWFnX2NocnNbIGNvZGVjLmNmZy5fbWF4X2RpZ2l0c19wZXJfaWR4IF0gKSwgJ8O5J1xuICAgIEBlcSAoIM6paGxsdF8xMTkgPSAtPiBjb2RlYy5lbmNvZGUgLTE2MzgzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDjSEhJ1xuICAgIEBlcSAoIM6paGxsdF8xMjAgPSAtPiBjb2RlYy5lbmNvZGUgLTE2MzgyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDjSEjJ1xuICAgIEBlcSAoIM6paGxsdF8xMjEgPSAtPiBjb2RlYy5lbmNvZGUgLTEyOSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDjcOFw4UnXG4gICAgQGVxICggzqlobGx0XzEyMiA9IC0+IGNvZGVjLmVuY29kZSAtMTI4ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8ONw4XDhidcbiAgICBAZXEgKCDOqWhsbHRfMTIzID0gLT4gY29kZWMuZW5jb2RlIC0xMjcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw44hJ1xuICAgIEBlcSAoIM6paGxsdF8xMjQgPSAtPiBjb2RlYy5lbmNvZGUgLTgwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDjlInXG4gICAgQGVxICggzqlobGx0XzEyNSA9IC0+IGNvZGVjLmVuY29kZSAtMjEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8OOwrEnXG4gICAgQGVxICggzqlobGx0XzEyNiA9IC0+IGNvZGVjLmVuY29kZSAtMjEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8OOwrEnXG4gICAgQGVxICggzqlobGx0XzEyNyA9IC0+IGNvZGVjLmVuY29kZSAtMjAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8OPJ1xuICAgIEBlcSAoIM6paGxsdF8xMjggPSAtPiBjb2RlYy5lbmNvZGUgLTEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDoidcbiAgICBAZXEgKCDOqWhsbHRfMTI5ID0gLT4gY29kZWMuZW5jb2RlICswICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw6MnXG4gICAgQGVxICggzqlobGx0XzEzMCA9IC0+IGNvZGVjLmVuY29kZSArMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8OkJ1xuICAgIEBlcSAoIM6paGxsdF8xMzEgPSAtPiBjb2RlYy5lbmNvZGUgKzIwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDtydcbiAgICBAZXEgKCDOqWhsbHRfMTMyID0gLT4gY29kZWMuZW5jb2RlICsyMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw7g4J1xuICAgIEBlcSAoIM6paGxsdF8xMzMgPSAtPiBjb2RlYy5lbmNvZGUgKzEyNyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDuMOGJ1xuICAgIEBlcSAoIM6paGxsdF8xMzQgPSAtPiBjb2RlYy5lbmNvZGUgKzEyOCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDuSMhJ1xuICAgIEBlcSAoIM6paGxsdF8xMzUgPSAtPiBjb2RlYy5lbmNvZGUgKzEyOSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDuSMjJ1xuICAgIEBlcSAoIM6paGxsdF8xMzYgPSAtPiBjb2RlYy5lbmNvZGUgKzE2MzgyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDucOGw4UnXG4gICAgQGVxICggzqlobGx0XzEzNyA9IC0+IGNvZGVjLmVuY29kZSArMTYzODMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8O5w4bDhidcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAoIM6paGxsdF8xMzggPSAtPiBjb2RlYy5kZWNvZGUgJ8ONISEnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIC0xNjM4MyBdXG4gICAgQGVxICggzqlobGx0XzEzOSA9IC0+IGNvZGVjLmRlY29kZSAnw40hIycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgLTE2MzgyIF1cbiAgICBAZXEgKCDOqWhsbHRfMTQwID0gLT4gY29kZWMuZGVjb2RlICfDjcOFw4UnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIC0xMjkgXVxuICAgIEBlcSAoIM6paGxsdF8xNDEgPSAtPiBjb2RlYy5kZWNvZGUgJ8ONw4XDhicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgLTEyOCBdXG4gICAgQGVxICggzqlobGx0XzE0MiA9IC0+IGNvZGVjLmRlY29kZSAnw44hJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgLTEyNyBdXG4gICAgQGVxICggzqlobGx0XzE0MyA9IC0+IGNvZGVjLmRlY29kZSAnw47CsScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIC0yMSBdXG4gICAgQGVxICggzqlobGx0XzE0NCA9IC0+IGNvZGVjLmRlY29kZSAnw48nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgLTIwIF1cbiAgICBAZXEgKCDOqWhsbHRfMTQ1ID0gLT4gY29kZWMuZGVjb2RlICfDoicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAtMSBdXG4gICAgQGVxICggzqlobGx0XzE0NiA9IC0+IGNvZGVjLmRlY29kZSAnw6MnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgMCBdXG4gICAgQGVxICggzqlobGx0XzE0NyA9IC0+IGNvZGVjLmRlY29kZSAnw6QnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgMSBdXG4gICAgQGVxICggzqlobGx0XzE0OCA9IC0+IGNvZGVjLmRlY29kZSAnw7cnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgMjAgXVxuICAgIEBlcSAoIM6paGxsdF8xNDkgPSAtPiBjb2RlYy5kZWNvZGUgJ8O4OCcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIDIxIF1cbiAgICBAZXEgKCDOqWhsbHRfMTUwID0gLT4gY29kZWMuZGVjb2RlICfDuMOGJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgMTI3IF1cbiAgICBAZXEgKCDOqWhsbHRfMTUxID0gLT4gY29kZWMuZGVjb2RlICfDuSMhJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAxMjggXVxuICAgIEBlcSAoIM6paGxsdF8xNTIgPSAtPiBjb2RlYy5kZWNvZGUgJ8O5IyMnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIDEyOSBdXG4gICAgQGVxICggzqlobGx0XzE1MyA9IC0+IGNvZGVjLmRlY29kZSAnw7nDhsOFJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAxNjM4MiBdXG4gICAgQGVxICggzqlobGx0XzE1NCA9IC0+IGNvZGVjLmRlY29kZSAnw7nDhsOGJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAxNjM4MyBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmb3IgXyBpbiBbIDEgLi4gMTAgXVxuICAgICAgdW5wYWRkZWRfbGluZXMgPSBzaHVmZmxlIHVucGFkZGVkX2xpbmVzXG4gICAgICB1bnBhZGRlZF9saW5lcy5zb3J0KClcbiAgICAgIHJlYWxfaW5kZXhlcyA9IFtdXG4gICAgICBmb3IgdWxpbmUgaW4gdW5wYWRkZWRfbGluZXNcbiAgICAgICAgIyBoZWxwICfOqWhsbHRfMTU1JywgdWxpbmVcbiAgICAgICAgcmVhbF9pbmRleGVzLnB1c2ggTnVtYmVyIHVsaW5lLnJlcGxhY2UgL14uKj9cXHMoWzAtOV0rKSQvLCAnJDEnXG4gICAgICBAZXEgKCDOqWhsbHRfMTU2ID0gLT4gZXF1YWxzIGV4cGVjdGVkX2luZGV4ZXMsIHJlYWxfaW5kZXhlcyApLCBmYWxzZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZm9yIF8gaW4gWyAxIC4uIDEwIF1cbiAgICAgIHBhZGRlZF9saW5lcyA9IHNodWZmbGUgcGFkZGVkX2xpbmVzXG4gICAgICBwYWRkZWRfbGluZXMuc29ydCgpXG4gICAgICByZWFsX2luZGV4ZXMgPSBbXVxuICAgICAgZm9yIHBsaW5lLCBpZHggaW4gcGFkZGVkX2xpbmVzXG4gICAgICAgICMgaGVscCAnzqlobGx0XzE1NycsIHJwciBwbGluZSBpZiBfIGlzIDFcbiAgICAgICAgcmVhbF9pbmRleGVzLnB1c2ggTnVtYmVyIHBsaW5lLnJlcGxhY2UgL14uKj9cXHMoWzAtOV0rKSQvLCAnJDEnXG4gICAgICBAZXEgKCDOqWhsbHRfMTU4ID0gLT4gZXF1YWxzIGV4cGVjdGVkX2luZGV4ZXMsIHJlYWxfaW5kZXhlcyApLCB0cnVlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaDEyOF9kZWNvZGU6IC0+XG4gICAgeyBIb2xsZXJpdGgsXG4gICAgICBob2xsZXJpdGhfMTI4LFxuICAgICAgaW50ZXJuYWxzICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHByb2Jlc19hbmRfbWF0Y2hlcnMgPSBbXG4gICAgICBbICfDhyHDhsOGw4bDhsOGwr87w6MnLCBbIC05OTksICAgICAgICAgXSwgJ25udW06w40swr87Wy05OTldfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw4chw4bDhsOGw4bDhsOGP8OjJywgWyAtOTksICAgICAgICAgIF0sICdubnVtOsOOLD9bLTk5XXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8OHIcOGw4bDhsOGw4bDhkjDoycsIFsgLTkwLCAgICAgICAgICBdLCAnbm51bTrDjixIWy05MF18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDmMOjw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTExLCAgICAgICAgICBdLCAnbnVuOsOYWy0xMV18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw5nDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC0xMCwgICAgICAgICAgXSwgJ251bjrDmVstMTBdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Oaw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtOSwgICAgICAgICAgIF0sICdudW46w5pbLTldfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDm8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTgsICAgICAgICAgICBdLCAnbnVuOsObWy04XXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw5zDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC03LCAgICAgICAgICAgXSwgJ251bjrDnFstN118cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Odw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtNiwgICAgICAgICAgIF0sICdudW46w51bLTZdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDnsOjw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTUsICAgICAgICAgICBdLCAnbnVuOsOeWy01XXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw5/Do8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC00LCAgICAgICAgICAgXSwgJ251bjrDn1stNF18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Ogw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtMywgICAgICAgICAgIF0sICdudW46w6BbLTNdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDocOjw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTIsICAgICAgICAgICBdLCAnbnVuOsOhWy0yXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw6LDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC0xLCAgICAgICAgICAgXSwgJ251bjrDolstMV18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Ojw4/Do8Ojw6PDo8Ojw6PDo8OjJywgWyAwLCAtMjAsICAgICAgIF0sICd6ZXJvOsOjWzBdfG51bjrDj1stMjBdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICBdXG4gICAgICBbICfDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMCwgICAgICAgICAgICBdLCAncGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6PDo1swXScsICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw6PDt8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIDAsIDIwLCAgICAgICAgXSwgJ3plcm86w6NbMF18cHVuOsO3WzIwXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Osw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyA5LCAgICAgICAgICAgIF0sICdwdW46w6xbOV18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDrcOgw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMTAsIC0zLCAgICAgICBdLCAncHVuOsOtWzEwXXxudW46w6BbLTNdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgXVxuICAgICAgWyAnw63DocOjw6PDo8Ojw6PDo8Ojw6MnLCBbIDEwLCAtMiwgICAgICAgXSwgJ3B1bjrDrVsxMF18bnVuOsOhWy0yXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Otw6LDo8Ojw6PDo8Ojw6PDo8OjJywgWyAxMCwgLTEsICAgICAgIF0sICdwdW46w61bMTBdfG51bjrDolstMV18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICBdXG4gICAgICBbICfDrcOjw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMTAsICAgICAgICAgICBdLCAncHVuOsOtWzEwXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw63DpMOjw6PDo8Ojw6PDo8Ojw6MnLCBbIDEwLCAxLCAgICAgICAgXSwgJ3B1bjrDrVsxMF18cHVuOsOkWzFdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Otw63DosOjw6PDo8Ojw6PDo8OjJywgWyAxMCwgMTAsIC0xLCAgIF0sICdwdW46w61bMTBdfHB1bjrDrVsxMF18bnVuOsOiWy0xXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8OjJywgICBdXG4gICAgICBbICfDrcOtw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMTAsIDEwLCAgICAgICBdLCAncHVuOsOtWzEwXXxwdW46w61bMTBdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgXVxuICAgICAgWyAnw63Dt8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIDEwLCAyMCwgICAgICAgXSwgJ3B1bjrDrVsxMF18cHVuOsO3WzIwXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgIF1cbiAgICAgIFsgJ8O3w6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAyMCwgICAgICAgICAgIF0sICdwdW46w7dbMjBdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDt8Otw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMjAsIDEwLCAgICAgICBdLCAncHVuOsO3WzIwXXxwdW46w61bMTBdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgXVxuICAgICAgWyAnw7h+w6PDo8Ojw6PDo8Ojw6PDoycsIFsgOTAsICAgICAgICAgICBdLCAncG51bTrDuCx+WzkwXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDuSomw6PDo8Ojw6PDo8Ojw6MnLCBbIDkwMCwgICAgICAgICAgXSwgJ3BudW06w7ksKiZbOTAwXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICBdXG4gICAgICBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjb2RlYyA9IGhvbGxlcml0aF8xMjhcbiAgICBmb3IgWyBzb3J0a2V5LCBpbmRleF9tYXRjaGVyLCB1bml0X21hdGNoZXIsIF0gaW4gcHJvYmVzX2FuZF9tYXRjaGVyc1xuICAgICAgdW5pdF9yZXN1bHQgICAgID0gW11cbiAgICAgIGluZGV4X3Jlc3VsdCAgICA9IFtdXG4gICAgICBmb3IgdW5pdCBpbiBjb2RlYy5wYXJzZSBzb3J0a2V5XG4gICAgICAgIHVuaXRfcmVzdWx0LnB1c2ggIGhlbHBlcnMucnByX3VuaXQgdW5pdFxuICAgICAgICBpbmRleF9yZXN1bHQucHVzaCB1bml0LmluZGV4IGlmIHVuaXQuaW5kZXg/XG4gICAgICB1bml0X3Jlc3VsdCAgID0gdW5pdF9yZXN1bHQuam9pbiAnfCdcbiAgICAgICMgaW5mbyAnzqlobGx0XzE1OScsIGZcIiN7KCBycHIgdW5pdF9yZXN1bHQgKSArICcsJ306PDYwYzsgI3tycHIgaW5kZXhfcmVzdWx0fVwiXG4gICAgIyAgIEBlcSAoIM6paGxsdF8xNjAgPSAtPiAgdW5pdF9yZXN1bHQgICAgICAgICAgICAgICAgICAgICApLCAgdW5pdF9tYXRjaGVyXG4gICAgICBAZXEgKCDOqWhsbHRfMTYxID0gLT4gaW5kZXhfcmVzdWx0ICAgICAgICAgICAgICAgICAgICAgKSwgaW5kZXhfbWF0Y2hlclxuICAgICAgQGVxICggzqlobGx0XzE2MiA9IC0+IHNvcnRrZXkgKSwgKCBjb2RlYy5lbmNvZGUgaW5kZXhfbWF0Y2hlciApLnBhZEVuZCBzb3J0a2V5Lmxlbmd0aCwgY29kZWMuY2ZnLnpwdW5zWyAwIF1cbiAgICAgICMgZGVidWcgJ86paGxsdF8xNjMnLCBycHIgKCBjb2RlYy5lbmNvZGUgaW5kZXhfbWF0Y2hlciApLnBhZEVuZCBzb3J0a2V5Lmxlbmd0aCwgY29kZWMuY2ZnLnpwdW5zWyAwIF1cbiAgICAgIEBlcSAoIM6paGxsdF8xNjQgPSAtPiBjb2RlYy5kZWNvZGUgc29ydGtleSAgKSwgaW5kZXhfbWF0Y2hlclxuICAgICAgIyBlY2hvIFsgc29ydGtleSwgaW5kZXhfcmVzdWx0LCB1bml0X3Jlc3VsdCwgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBAZXEgICAgICggzqlobGx0XzE2NSA9IC0+IGNvZGVjLnBhcnNlICc1JyAgICAgICAgICApLCBbIHsgbmFtZTogJ290aGVyJywgbGV0dGVyczogJzUnLCBtYW50aXNzYTogbnVsbCwgaW5kZXg6IG51bGwgfSBdXG4gICAgIyBAZXEgICAgICggzqlobGx0XzE2NiA9IC0+IGNvZGVjLnBhcnNlICfDpMO2w7wnICAgICAgICApLCBbIHsgbmFtZTogJ290aGVyJywgbGV0dGVyczogJ8Okw7bDvCcsIG1hbnRpc3NhOiBudWxsLCBpbmRleDogbnVsbCB9IF1cbiAgICAjIEBlcSAgICAgKCDOqWhsbHRfMTY3ID0gLT4gY29kZWMucGFyc2UgJ1k5MDDDpMO2w7wnICAgICksIFsgeyBuYW1lOiAncG51bScsIGxldHRlcnM6ICdZJywgbWFudGlzc2E6ICc5MDAnLCBpbmRleDogOTAwIH0sIHsgbmFtZTogJ290aGVyJywgbGV0dGVyczogJ8Okw7bDvCcsIG1hbnRpc3NhOiBudWxsLCBpbmRleDogbnVsbCB9IF1cbiAgICAjIEB0aHJvd3MgKCDOqWhsbHRfMTY4ID0gLT4gY29kZWMuZGVjb2RlICc1JyAgICAgICAgICksIC9ub3QgYSB2YWxpZCBzb3J0a2V5OiB1bmFibGUgdG8gcGFyc2UgJzUnL1xuICAgICMgQHRocm93cyAoIM6paGxsdF8xNjkgPSAtPiBjb2RlYy5kZWNvZGUgJ8Okw7bDvCcgICAgICAgKSwgL25vdCBhIHZhbGlkIHNvcnRrZXk6IHVuYWJsZSB0byBwYXJzZSAnw6TDtsO8Jy9cbiAgICAjIEB0aHJvd3MgKCDOqWhsbHRfMTcwID0gLT4gY29kZWMuZGVjb2RlICfDpMO2w7wnICAgICAgICksIC9ub3QgYSB2YWxpZCBzb3J0a2V5OiB1bmFibGUgdG8gcGFyc2UgJ8O8JyBpbiAnWTkwMMOkw7bDvCcvXG4gICAgIyBAdGhyb3dzICggzqlobGx0XzE3MSA9IC0+IGNvZGVjLmRlY29kZSAnWTkwMMOkw7bDvCcgICApLCAvbm90IGEgdmFsaWQgc29ydGtleTogdW5hYmxlIHRvIHBhcnNlICdZOTAwJyBpbiAnWTkwMMOkw7bDvCcvXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIGRlYnVnICfOqWhsbHRfMTcyJywgcnByIGNvZGVjLmVuY29kZSAtOTAgIyAgICBbICfDjcK/O8Ojw6PDo8Ojw6PDo8OjJywgWyAtOTk5LCAgICAgICAgIF0sICdubnVtOsONLMK/O1stOTk5XXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgIF1cbiAgICAjIGRlYnVnICfOqWhsbHRfMTczJywgcnByIGNvZGVjLmRlY29kZSAnw4chw4bDhsOGw4bDhsOGSCcgIyAgICBbICfDjcK/O8Ojw6PDo8Ojw6PDo8OjJywgWyAtOTk5LCAgICAgICAgIF0sICdubnVtOsONLMK/O1stOTk5XXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgIF1cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaDEwbXZwMl9kZWNvZGVfdW5pdHM6IC0+XG4gICAgIyMjIE5PVEUgYWxzbyBzZWUgY29ycmVzcG9uZGluZyB0ZXN0IGluIGBoZW5naXN0LU5HL2Rldi9pbnRlcmxleC9zcmMvdGVzdC1ob2xsZXJpdGguY29mZmVlYCAjIyNcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEwbXZwMixcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICAjIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHByb2Jlc19hbmRfbWF0Y2hlcnMgPSBbXG4gICAgICBbICdBMDAwTk5OTk5OJywgWyAtOTk5ICAgICAgICBdLCAnbm51bTpBLDAwMFstOTk5XXxwYWRkaW5nOk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnQjAwTk5OTk5OTicsIFsgLTk5ICAgICAgICAgXSwgJ25udW06QiwwMFstOTldfHBhZGRpbmc6Tk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0IwOU5OTk5OTk4nLCBbIC05MCAgICAgICAgIF0sICdubnVtOkIsMDlbLTkwXXxwYWRkaW5nOk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdCODhOTk5OTk5OJywgWyAtMTEgICAgICAgICBdLCAnbm51bTpCLDg4Wy0xMV18cGFkZGluZzpOTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnQjg5Tk5OTk5OTicsIFsgLTEwICAgICAgICAgXSwgJ25udW06Qiw4OVstMTBdfHBhZGRpbmc6Tk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0VOTk5OTk5OTk4nLCBbIC05ICAgICAgICAgIF0sICdudW46RVstOV18cGFkZGluZzpOTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdGTk5OTk5OTk5OJywgWyAtOCAgICAgICAgICBdLCAnbnVuOkZbLThdfHBhZGRpbmc6Tk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnR05OTk5OTk5OTicsIFsgLTcgICAgICAgICAgXSwgJ251bjpHWy03XXxwYWRkaW5nOk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0hOTk5OTk5OTk4nLCBbIC02ICAgICAgICAgIF0sICdudW46SFstNl18cGFkZGluZzpOTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdJTk5OTk5OTk5OJywgWyAtNSAgICAgICAgICBdLCAnbnVuOklbLTVdfHBhZGRpbmc6Tk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnSk5OTk5OTk5OTicsIFsgLTQgICAgICAgICAgXSwgJ251bjpKWy00XXxwYWRkaW5nOk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0tOTk5OTk5OTk4nLCBbIC0zICAgICAgICAgIF0sICdudW46S1stM118cGFkZGluZzpOTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdMTk5OTk5OTk5OJywgWyAtMiAgICAgICAgICBdLCAnbnVuOkxbLTJdfHBhZGRpbmc6Tk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnTU5OTk5OTk5OTicsIFsgLTEgICAgICAgICAgXSwgJ251bjpNWy0xXXxwYWRkaW5nOk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ05CNzlOTk5OTk4nLCBbIDAsIC0yMCAgICAgIF0sICd6ZXJvOk5bMF18bm51bTpCLDc5Wy0yMF18cGFkZGluZzpOTk5OTk4nLCAgICAgICAgICAgICBdXG4gICAgICBbICdOTk5OTk5OTk5OJywgWyAwICAgICAgICAgICBdLCAncGFkZGluZzpOTk5OTk5OTk5OWzBdJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnTlkyME5OTk5OTicsIFsgMCwgMjAgICAgICAgXSwgJ3plcm86TlswXXxwbnVtOlksMjBbMjBdfHBhZGRpbmc6Tk5OTk5OJywgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ1dOTk5OTk5OTk4nLCBbIDkgICAgICAgICAgIF0sICdwdW46V1s5XXxwYWRkaW5nOk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdZMTBLTk5OTk5OJywgWyAxMCwgLTMgICAgICBdLCAncG51bTpZLDEwWzEwXXxudW46S1stM118cGFkZGluZzpOTk5OTk4nLCAgICAgICAgICAgICAgXVxuICAgICAgWyAnWTEwTE5OTk5OTicsIFsgMTAsIC0yICAgICAgXSwgJ3BudW06WSwxMFsxMF18bnVuOkxbLTJdfHBhZGRpbmc6Tk5OTk5OJywgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ1kxME1OTk5OTk4nLCBbIDEwLCAtMSAgICAgIF0sICdwbnVtOlksMTBbMTBdfG51bjpNWy0xXXxwYWRkaW5nOk5OTk5OTicsICAgICAgICAgICAgICBdXG4gICAgICBbICdZMTBOTk5OTk5OJywgWyAxMCAgICAgICAgICBdLCAncG51bTpZLDEwWzEwXXxwYWRkaW5nOk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnWTEwT05OTk5OTicsIFsgMTAsIDEgICAgICAgXSwgJ3BudW06WSwxMFsxMF18cHVuOk9bMV18cGFkZGluZzpOTk5OTk4nLCAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ1kxMFkxME1OTk4nLCBbIDEwLCAxMCwgLTEgIF0sICdwbnVtOlksMTBbMTBdfHBudW06WSwxMFsxMF18bnVuOk1bLTFdfHBhZGRpbmc6Tk5OJywgICBdXG4gICAgICBbICdZMTBZMTBOTk5OJywgWyAxMCwgMTAgICAgICBdLCAncG51bTpZLDEwWzEwXXxwbnVtOlksMTBbMTBdfHBhZGRpbmc6Tk5OTicsICAgICAgICAgICAgXVxuICAgICAgWyAnWTEwWTIwTk5OTicsIFsgMTAsIDIwICAgICAgXSwgJ3BudW06WSwxMFsxMF18cG51bTpZLDIwWzIwXXxwYWRkaW5nOk5OTk4nLCAgICAgICAgICAgIF1cbiAgICAgIFsgJ1kyME5OTk5OTk4nLCBbIDIwICAgICAgICAgIF0sICdwbnVtOlksMjBbMjBdfHBhZGRpbmc6Tk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdZMjBZMTBOTk5OJywgWyAyMCwgMTAgICAgICBdLCAncG51bTpZLDIwWzIwXXxwbnVtOlksMTBbMTBdfHBhZGRpbmc6Tk5OTicsICAgICAgICAgICAgXVxuICAgICAgWyAnWTkwTk5OTk5OTicsIFsgOTAgICAgICAgICAgXSwgJ3BudW06WSw5MFs5MF18cGFkZGluZzpOTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ1o5MDBOTk5OTk4nLCBbIDkwMCAgICAgICAgIF0sICdwbnVtOlosOTAwWzkwMF18cGFkZGluZzpOTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdOTk5OTk5OTk4nLCAgWyAwICAgICAgICAgICBdLCAncGFkZGluZzpOTk5OTk5OTk5bMF0nLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnTk4nLCAgICAgICAgIFsgMCAgICAgICAgICAgXSwgJ3BhZGRpbmc6Tk5bMF0nLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ04nLCAgICAgICAgICBbIDAgICAgICAgICAgIF0sICdwYWRkaW5nOk5bMF0nLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdZMTAnLCAgICAgICAgWyAxMCAgICAgICAgICBdLCAncG51bTpZLDEwWzEwXScsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnSycsICAgICAgICAgIFsgLTMgICAgICAgICAgXSwgJ251bjpLWy0zXScsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNvZGVjICAgICAgICAgICA9IGhvbGxlcml0aF8xMG12cDJcbiAgICBzb3J0a2V5X3BhZGRlciAgPSBjb2RlYy5jZmcuenB1bl9jaHJzWyAwIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGZvciBbIHNvcnRrZXksIGluZGV4X21hdGNoZXIsIHVuaXRfbWF0Y2hlciwgXSBpbiBwcm9iZXNfYW5kX21hdGNoZXJzXG4gICAgICB1bml0X3Jlc3VsdCAgICAgPSBbXVxuICAgICAgaW5kZXhfcmVzdWx0ICAgID0gW11cbiAgICAgIGZvciB1bml0IGluIGNvZGVjLnBhcnNlIHNvcnRrZXlcbiAgICAgICAgdW5pdF9yZXN1bHQucHVzaCAgaGVscGVycy5ycHJfdW5pdCB1bml0XG4gICAgICAgIGluZGV4X3Jlc3VsdC5wdXNoIHVuaXQuaW5kZXggaWYgdW5pdC5pbmRleD9cbiAgICAgIHVuaXRfcmVzdWx0ICAgPSB1bml0X3Jlc3VsdC5qb2luICd8J1xuICAgICAgIyBpbmZvICfOqWhsbHRfMTc0JywgZlwiI3soIHJwciB1bml0X3Jlc3VsdCApICsgJywnfTo8NjBjOyAje3JwciBpbmRleF9yZXN1bHR9XCJcbiAgICAgIEBlcSAoIM6paGxsdF8xNzUgPSAtPiB1bml0X3Jlc3VsdCAgICAgICAgICAgICAgICAgICAgICApLCB1bml0X21hdGNoZXJcbiAgICAgIEBlcSAoIM6paGxsdF8xNzYgPSAtPiBpbmRleF9yZXN1bHQgICAgICAgICAgICAgICAgICAgICApLCBpbmRleF9tYXRjaGVyXG4gICAgICBAZXEgKCDOqWhsbHRfMTc3ID0gLT4gY29kZWMuZGVjb2RlIHNvcnRrZXkgICAgICAgICAgICAgKSwgaW5kZXhfbWF0Y2hlclxuICAgICAgQGVxICggzqlobGx0XzE3OCA9IC0+IHNvcnRrZXkgICAgICAgICAgICAgICAgICAgICAgICAgICksICggY29kZWMuZW5jb2RlIGluZGV4X21hdGNoZXIgKS5wYWRFbmQgc29ydGtleS5sZW5ndGgsIHNvcnRrZXlfcGFkZGVyXG4gICAgICAjIGVjaG8gWyBzb3J0a2V5LCBpbmRleF9yZXN1bHQsIHVuaXRfcmVzdWx0LCBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgICAgICggzqlobGx0XzE3OSA9IC0+IGNvZGVjLnBhcnNlICc1JyAgICAgICAgICksIFsgeyBuYW1lOiAnb3RoZXInLCBsZXR0ZXJzOiAnNScsIG1hbnRpc3NhOiBudWxsLCBpbmRleDogbnVsbCB9IF1cbiAgICBAZXEgICAgICggzqlobGx0XzE4MCA9IC0+IGNvZGVjLnBhcnNlICfDpMO2w7wnICAgICAgICksIFsgeyBuYW1lOiAnb3RoZXInLCBsZXR0ZXJzOiAnw6TDtsO8JywgbWFudGlzc2E6IG51bGwsIGluZGV4OiBudWxsIH0gXVxuICAgIEBlcSAgICAgKCDOqWhsbHRfMTgxID0gLT4gY29kZWMucGFyc2UgJ1k5MDDDpMO2w7wnICAgKSwgWyB7IG5hbWU6ICdwbnVtJywgbGV0dGVyczogJ1knLCBtYW50aXNzYTogJzkwMCcsIGluZGV4OiA5MDAgfSwgeyBuYW1lOiAnb3RoZXInLCBsZXR0ZXJzOiAnw6TDtsO8JywgbWFudGlzc2E6IG51bGwsIGluZGV4OiBudWxsIH0gXVxuICAgIEB0aHJvd3MgKCDOqWhsbHRfMTgyID0gLT4gY29kZWMuZGVjb2RlICc1JyAgICAgICAgKSwgL25vdCBhIHZhbGlkIHNvcnRrZXk6IHVuYWJsZSB0byBwYXJzZSAnNScvXG4gICAgQHRocm93cyAoIM6paGxsdF8xODMgPSAtPiBjb2RlYy5kZWNvZGUgJ8Okw7bDvCcgICAgICApLCAvbm90IGEgdmFsaWQgc29ydGtleTogdW5hYmxlIHRvIHBhcnNlICfDpMO2w7wnL1xuICAgIEB0aHJvd3MgKCDOqWhsbHRfMTg0ID0gLT4gY29kZWMuZGVjb2RlICdZOTAww6TDtsO8JyAgKSwgL25vdCBhIHZhbGlkIHNvcnRrZXk6IHVuYWJsZSB0byBwYXJzZSAnw6TDtsO8JyBpbiAnWTkwMMOkw7bDvCcvXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIGgxMjhiX2RlY29kZTogLT5cbiAgIyAgIHsgSG9sbGVyaXRoLFxuICAjICAgICBob2xsZXJpdGhfMTI4LFxuICAjICAgICBob2xsZXJpdGhfMTBtdnAsXG4gICMgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgIyAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAjICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAjICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgIyAgICMgY29kZWMgPSBob2xsZXJpdGhfMTI4XG4gICMgICBjb2RlYyA9IGhvbGxlcml0aF8xMG12cFxuICAjICAgZGVidWcgJ86paGxsdF8xODUnLCBycHIgY29kZWMuZW5jb2RlIC0xXG4gICMgICBkZWJ1ZyAnzqlobGx0XzE4NicsIHJwciBjb2RlYy5lbmNvZGUgLTJcbiAgIyAgIG4gPSAgIC0xMDA7IHVyZ2UgJ86paGxsdF8xODcnLCBmXCIjeyBycHIgWyBuLCBdIH06PjEwYzsgI3tycHIgc2sgPSBjb2RlYy5lbmNvZGUgbn06PDVjOyAjeyBycHIgY29kZWMuZGVjb2RlIHNrfTo+MTBjO1wiXG4gICMgICBuID0gICAgLTIxOyB1cmdlICfOqWhsbHRfMTg4JywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAjICAgbiA9ICAgIC0yMDsgdXJnZSAnzqlobGx0XzE4OScsIGZcIiN7IHJwciBbIG4sIF0gfTo+MTBjOyAje3JwciBzayA9IGNvZGVjLmVuY29kZSBufTo8NWM7ICN7IHJwciBjb2RlYy5kZWNvZGUgc2t9Oj4xMGM7XCJcbiAgIyAgIG4gPSAgICAtMTk7IHVyZ2UgJ86paGxsdF8xOTAnLCBmXCIjeyBycHIgWyBuLCBdIH06PjEwYzsgI3tycHIgc2sgPSBjb2RlYy5lbmNvZGUgbn06PDVjOyAjeyBycHIgY29kZWMuZGVjb2RlIHNrfTo+MTBjO1wiXG4gICMgICBuID0gICAgIC0xOyB1cmdlICfOqWhsbHRfMTkxJywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAjICAgbiA9ICAgICAgMDsgdXJnZSAnzqlobGx0XzE5MicsIGZcIiN7IHJwciBbIG4sIF0gfTo+MTBjOyAje3JwciBzayA9IGNvZGVjLmVuY29kZSBufTo8NWM7ICN7IHJwciBjb2RlYy5kZWNvZGUgc2t9Oj4xMGM7XCJcbiAgIyAgIG4gPSAgICAgIDE7IHVyZ2UgJ86paGxsdF8xOTMnLCBmXCIjeyBycHIgWyBuLCBdIH06PjEwYzsgI3tycHIgc2sgPSBjb2RlYy5lbmNvZGUgbn06PDVjOyAjeyBycHIgY29kZWMuZGVjb2RlIHNrfTo+MTBjO1wiXG4gICMgICBuID0gICAgICAyOyB1cmdlICfOqWhsbHRfMTk0JywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAjICAgbiA9ICAgICAgMzsgdXJnZSAnzqlobGx0XzE5NScsIGZcIiN7IHJwciBbIG4sIF0gfTo+MTBjOyAje3JwciBzayA9IGNvZGVjLmVuY29kZSBufTo8NWM7ICN7IHJwciBjb2RlYy5kZWNvZGUgc2t9Oj4xMGM7XCJcbiAgIyAgIG4gPSAgICAgMTA7IHVyZ2UgJ86paGxsdF8xOTYnLCBmXCIjeyBycHIgWyBuLCBdIH06PjEwYzsgI3tycHIgc2sgPSBjb2RlYy5lbmNvZGUgbn06PDVjOyAjeyBycHIgY29kZWMuZGVjb2RlIHNrfTo+MTBjO1wiXG4gICMgICBuID0gICAgMTI2OyB1cmdlICfOqWhsbHRfMTk3JywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAjICAgbiA9ICAgIDEyNzsgdXJnZSAnzqlobGx0XzE5OCcsIGZcIiN7IHJwciBbIG4sIF0gfTo+MTBjOyAje3JwciBzayA9IGNvZGVjLmVuY29kZSBufTo8NWM7ICN7IHJwciBjb2RlYy5kZWNvZGUgc2t9Oj4xMGM7XCJcbiAgIyAgIG4gPSAgICAxMjg7IHVyZ2UgJ86paGxsdF8xOTknLCBmXCIjeyBycHIgWyBuLCBdIH06PjEwYzsgI3tycHIgc2sgPSBjb2RlYy5lbmNvZGUgbn06PDVjOyAjeyBycHIgY29kZWMuZGVjb2RlIHNrfTo+MTBjO1wiXG4gICMgICBuID0gICAgMTI5OyB1cmdlICfOqWhsbHRfMjAwJywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAjICAgIyBmb3IgWyBzb3J0a2V5LCBpbmRleF9tYXRjaGVyLCB1bml0X21hdGNoZXIsIF0gaW4gcHJvYmVzX2FuZF9tYXRjaGVyc1xuICAjICAgIyAgIHVuaXRfcmVzdWx0ICAgICA9IFtdXG4gICMgICAjICAgaW5kZXhfcmVzdWx0ICAgID0gW11cbiAgIyAgICMgICBmb3IgdW5pdCBpbiBjb2RlYy5wYXJzZSBzb3J0a2V5XG4gICMgICAjICAgICB1bml0X3Jlc3VsdC5wdXNoICBoZWxwZXJzLnJwcl91bml0IHVuaXRcbiAgIyAgICMgICAgIGluZGV4X3Jlc3VsdC5wdXNoIHVuaXQuaW5kZXggaWYgdW5pdC5pbmRleD9cbiAgIyAgICMgICB1bml0X3Jlc3VsdCAgID0gdW5pdF9yZXN1bHQuam9pbiAnfCdcbiAgIyAgICMgICBpbmZvICfOqWhsbHRfMjAxJywgZlwiI3soIHJwciB1bml0X3Jlc3VsdCApICsgJywnfTo8NjBjOyAje3JwciBpbmRleF9yZXN1bHR9XCJcbiAgIyAgICMgIyAgIEBlcSAoIM6paGxsdF8yMDIgPSAtPiAgdW5pdF9yZXN1bHQgICAgICAgICAgICAgICAgICAgICApLCAgdW5pdF9tYXRjaGVyXG4gICMgICAjICAgQGVxICggzqlobGx0XzIwMyA9IC0+IGluZGV4X3Jlc3VsdCAgICAgICAgICAgICAgICAgICAgICksIGluZGV4X21hdGNoZXJcbiAgIyAgICMgICBAZXEgKCDOqWhsbHRfMjA0ID0gLT4gc29ydGtleSApLCAoIGNvZGVjLmVuY29kZSBpbmRleF9tYXRjaGVyICkucGFkRW5kIHNvcnRrZXkubGVuZ3RoLCBjb2RlYy5jZmcuenB1bnNbIDAgXVxuICAjICAgIyAgIGRlYnVnICfOqWhsbHRfMjA1JywgcnByICggY29kZWMuZW5jb2RlIGluZGV4X21hdGNoZXIgKS5wYWRFbmQgc29ydGtleS5sZW5ndGgsIGNvZGVjLmNmZy56cHVuc1sgMCBdXG4gICMgICAjICAgQGVxICggzqlobGx0XzIwNiA9IC0+IGNvZGVjLmRlY29kZSBzb3J0a2V5ICApLCBpbmRleF9tYXRjaGVyXG4gICMgICAjICAgIyBlY2hvIFsgc29ydGtleSwgaW5kZXhfcmVzdWx0LCB1bml0X3Jlc3VsdCwgXVxuICAjICAgIyAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAjICAgIyBAZXEgICAgICggzqlobGx0XzIwNyA9IC0+IGNvZGVjLnBhcnNlICc1JyAgICAgICAgICksIFsgeyBuYW1lOiAnb3RoZXInLCBsZXR0ZXJzOiAnNScsIG1hbnRpc3NhOiBudWxsLCBpbmRleDogbnVsbCB9IF1cbiAgIyAgICMgQGVxICAgICAoIM6paGxsdF8yMDggPSAtPiBjb2RlYy5wYXJzZSAnw6TDtsO8JyAgICAgICApLCBbIHsgbmFtZTogJ290aGVyJywgbGV0dGVyczogJ8Okw7bDvCcsIG1hbnRpc3NhOiBudWxsLCBpbmRleDogbnVsbCB9IF1cbiAgIyAgICMgQGVxICAgICAoIM6paGxsdF8yMDkgPSAtPiBjb2RlYy5wYXJzZSAnWTkwMMOkw7bDvCcgICApLCBbIHsgbmFtZTogJ3BudW0nLCBsZXR0ZXJzOiAnWScsIG1hbnRpc3NhOiAnOTAwJywgaW5kZXg6IDkwMCB9LCB7IG5hbWU6ICdvdGhlcicsIGxldHRlcnM6ICfDpMO2w7wnLCBtYW50aXNzYTogbnVsbCwgaW5kZXg6IG51bGwgfSBdXG4gICMgICAjIEB0aHJvd3MgKCDOqWhsbHRfMjEwID0gLT4gY29kZWMuZGVjb2RlICc1JyAgICAgICAgKSwgL25vdCBhIHZhbGlkIHNvcnRrZXk6IHVuYWJsZSB0byBwYXJzZSAnNScvXG4gICMgICAjIEB0aHJvd3MgKCDOqWhsbHRfMjExID0gLT4gY29kZWMuZGVjb2RlICfDpMO2w7wnICAgICAgKSwgL25vdCBhIHZhbGlkIHNvcnRrZXk6IHVuYWJsZSB0byBwYXJzZSAnw6TDtsO8Jy9cbiAgIyAgICMgQHRocm93cyAoIM6paGxsdF8yMTIgPSAtPiBjb2RlYy5kZWNvZGUgJ1k5MDDDpMO2w7wnICApLCAvbm90IGEgdmFsaWQgc29ydGtleTogdW5hYmxlIHRvIHBhcnNlICfDpMO2w7wnIGluICdZOTAww6TDtsO8Jy9cbiAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICByZXR1cm4gbnVsbFxuXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB0eXBlczogLT5cbiAgICB7IGludGVybmFscyxcbiAgICAgIEhvbGxlcml0aF90eXBlc3BhY2UsXG4gICAgICBDRkcsICAgICAgICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoL2xpYi90eXBlcydcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCAgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICB7IHBpY2ssICAgICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfcGljaygpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgVCA9IG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlKClcbiAgICAgIEBlcSAoIM6paGxsdF8yMTMgPSAtPiBUW0NGR10uYmxhbmsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ1xceDIwJ1xuICAgICAgQGVxICggzqlobGx0XzIxNCA9IC0+IFRbQ0ZHXS5ibGFua19zcGxpdHRlciAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvKD86XFx4MjApKy9ndlxuICAgICAgQGVxICggzqlobGx0XzIxNSA9IC0+IFRbQ0ZHXS5ibGFua19zcGxpdHRlci51bmljb2RlU2V0cyAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWhsbHRfMjE2ID0gLT4gVFtDRkddLmJsYW5rX3NwbGl0dGVyLmdsb2JhbCAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paGxsdF8yMTcgPSAtPiAnYSAgIGcgIHogICcucmVwbGFjZSBUW0NGR10uYmxhbmtfc3BsaXR0ZXIsICfDvCcgICksICdhw7xnw7x6w7wnXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIFQgPSBuZXcgSG9sbGVyaXRoX3R5cGVzcGFjZSB7IGJsYW5rOiAnIycsIH1cbiAgICAgIEBlcSAoIM6paGxsdF8yMTggPSAtPiBUW0NGR10uYmxhbmsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyMnXG4gICAgICBAZXEgKCDOqWhsbHRfMjE5ID0gLT4gVFtDRkddLmJsYW5rX3NwbGl0dGVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC8oPzpcXHgyMykrL2d2XG4gICAgICBAZXEgKCDOqWhsbHRfMjIwID0gLT4gVFtDRkddLmJsYW5rX3NwbGl0dGVyLnVuaWNvZGVTZXRzICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paGxsdF8yMjEgPSAtPiBUW0NGR10uYmxhbmtfc3BsaXR0ZXIuZ2xvYmFsICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlobGx0XzIyMiA9IC0+ICdhIyMjZyMjeiMjJy5yZXBsYWNlIFRbQ0ZHXS5ibGFua19zcGxpdHRlciwgJ8O8JyAgKSwgJ2HDvGfDvHrDvCdcbiAgICAgIEBlcSAoIM6paGxsdF8yMjMgPSAtPiBULm1hZ25pZmllcnMuaXNhICdBQkMgWFlaJyAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paGxsdF8yMjQgPSAtPiBULm1hZ25pZmllcnMuaXNhICdBQkMjWFlaJyAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlobGx0XzIyNSA9IC0+IFQuYmxhbmsuaXNhICcgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlobGx0XzIyNiA9IC0+IFQuYmxhbmsuaXNhICcjJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWhsbHRfMjI3ID0gLT4gVC5ibGFuay5pc2EgVFtDRkddLmJsYW5rICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBUID0gbmV3IEhvbGxlcml0aF90eXBlc3BhY2UoKVxuICAgIEBlcSAoIM6paGxsdF8yMjggPSAtPiBULm5vbmVtcHR5X3RleHQuaXNhIDQgICAgICAgICAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6paGxsdF8yMjkgPSAtPiBULm5vbmVtcHR5X3RleHQuaXNhIGZhbHNlICAgICAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6paGxsdF8yMzAgPSAtPiBULm5vbmVtcHR5X3RleHQuaXNhICcnICAgICAgICAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6paGxsdF8yMzEgPSAtPiBULm5vbmVtcHR5X3RleHQuaXNhICd5ZXMnICAgICAgICApLCB0cnVlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgKCDOqWhsbHRfMjMyID0gLT4gVC5pbmNyZW1lbnRhbF90ZXh0LmlzYSAneWVzJyAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjMzID0gLT4gVC5kZWNyZW1lbnRhbF90ZXh0LmlzYSAneWVzJyAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjM0ID0gLT4gVC5pbmNyZW1lbnRhbF90ZXh0LmRhdGEgICAgICAgICAgKSwgeyBjaHJzOiBbICd5JywgJ2UnLCAncycgXSwgZmFpbDogeyB4OiAneWVzJywgaWR4OiAxLCBwcnZfY2hyOiAneScsIGNocjogJ2UnIH0gfVxuICAgIEBlcSAoIM6paGxsdF8yMzUgPSAtPiBULmluY3JlbWVudGFsX3RleHQuaXNhICdhYmNkZWZ6JyApLCB0cnVlXG4gICAgQGVxICggzqlobGx0XzIzNiA9IC0+IFQuZGVjcmVtZW50YWxfdGV4dC5pc2EgJ2FiY2RlZnonICksIGZhbHNlXG4gICAgQGVxICggzqlobGx0XzIzNyA9IC0+IFQuaW5jcmVtZW50YWxfdGV4dC5kYXRhICAgICAgICAgICksIHsgY2hyczogWyAnYScsICdiJywgJ2MnLCAnZCcsICdlJywgJ2YnLCAneicsIF0sIH1cbiAgICBAZXEgKCDOqWhsbHRfMjM4ID0gLT4gVC5kZWNyZW1lbnRhbF90ZXh0LmRhdGEgICAgICAgICAgKSwgeyBjaHJzOiBbICdhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZicsICd6JyBdLCBmYWlsOiB7IHg6ICdhYmNkZWZ6JywgaWR4OiAxLCBwcnZfY2hyOiAnYScsIGNocjogJ2InIH0gfVxuICAgIEBlcSAoIM6paGxsdF8yMzkgPSAtPiBULmluY3JlbWVudGFsX3RleHQuaXNhICdhYmMwJyAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6paGxsdF8yNDAgPSAtPiBULmluY3JlbWVudGFsX3RleHQuZGF0YSAgICAgICAgICApLCB7IGNocnM6IFsgJ2EnLCAnYicsICdjJywgJzAnLCBdLCBmYWlsOiB7IHg6ICdhYmMwJywgaWR4OiAzLCBwcnZfY2hyOiAnYycsIGNocjogJzAnIH0gfVxuICAgIEBlcSAoIM6paGxsdF8yNDEgPSAtPiBULmRlY3JlbWVudGFsX3RleHQuaXNhICdjYmEnICAgICApLCB0cnVlXG4gICAgQGVxICggzqlobGx0XzI0MiA9IC0+IFQuZGVjcmVtZW50YWxfdGV4dC5kYXRhICAgICAgICAgICksIHsgY2hyczogWyAnYycsICdiJywgJ2EnLCBdLCB9XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgKCDOqWhsbHRfMjQzID0gLT4gVC5tYWduaWZpZXJzLmlzYSAnJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6paGxsdF8yNDQgPSAtPiBULm1hZ25pZmllcnMuZGF0YSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHsgbWVzc2FnZTogXCJleHBlY3RlZCBhIG1hZ25pZmllciwgZ290IGFuIGVtcHR5IHRleHRcIiwgfVxuICAgIEBlcSAoIM6paGxsdF8yNDUgPSAtPiBULm1hZ25pZmllcnMuaXNhICdBQkMgWFlaJyAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICBAZXEgKCDOqWhsbHRfMjQ2ID0gLT4gcGljayBULm1hZ25pZmllcnMuZGF0YSwgXFxcbiAgICAgICAgICAgICAgICAgICAgICAgWyAnbm1hZ19jaHJzX3JldmVyc2VkJywgJ3BtYWdfY2hycycsICdubWFnJywgJ3BtYWcnLCBdICksIHsgbm1hZ19jaHJzX3JldmVyc2VkOiBbICdBJywgJ0InLCAnQycgXSwgcG1hZ19jaHJzOiBbICcgJywgJ1gnLCAnWScsICdaJyBdLCBubWFnOiAnIENCQScsIHBtYWc6ICcgWFlaJyB9XG4gICAgQGVxICggzqlobGx0XzI0NyA9IC0+IE9iamVjdC5pc0Zyb3plbiBULm1hZ25pZmllcnMuZGF0YS5ubWFnX2NocnNfcmV2ZXJzZWQgKSwgdHJ1ZVxuICAgIEBlcSAoIM6paGxsdF8yNDggPSAtPiBPYmplY3QuaXNGcm96ZW4gVC5tYWduaWZpZXJzLmRhdGEucG1hZ19jaHJzICAgICAgICAgICksIHRydWVcbiAgICBAZXEgKCDOqWhsbHRfMjQ5ID0gLT4gVC5tYWduaWZpZXJzLmlzYSAnQUJDXFxuWFlaJyAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjUwID0gLT4gVC5tYWduaWZpZXJzLmlzYSAnQUJDXFx0WFlaJyAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjUxID0gLT4gVC5tYWduaWZpZXJzLmlzYSAnQUJDICAgICAgICAgICAgIFhZWicgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgQGVxICggzqlobGx0XzI1MiA9IC0+IFQubWFnbmlmaWVycy5pc2EgJ0FCQyBEWCBZWicgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjUzID0gLT4gVC5tYWduaWZpZXJzLmlzYSAnQUJEIENYWVonICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqlobGx0XzI1NCA9IC0+IFQudW5pbGl0ZXJhbHMuaXNhIG51bGwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjU1ID0gLT4gVC51bmlsaXRlcmFscy5pc2EgJycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6paGxsdF8yNTYgPSAtPiBULnVuaWxpdGVyYWxzLmlzYSAnVkJBJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgQGVxICggzqlobGx0XzI1NyA9IC0+IFQudW5pbGl0ZXJhbHMuaXNhICdFRkdISUpLTE0gTk9QUVJTVFVWVycgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjU4ID0gLT4gVC51bmlsaXRlcmFscy5pc2EgJ0VGR0hJSktMTSBOIE9QUVJTVFVWVycgICAgICAgICAgICApLCB0cnVlXG4gICAgQGVxICggzqlobGx0XzI1OSA9IC0+IFQudW5pbGl0ZXJhbHMuZGF0YSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgeyBudW5zOiAnRUZHSElKS0xNJywgenB1bnM6ICdOT1BRUlNUVVZXJywgbnVuX2NocnM6IFsgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJywgJ0snLCAnTCcsICdNJyBdLCB6cHVuX2NocnM6IFsgJ04nLCAnTycsICdQJywgJ1EnLCAnUicsICdTJywgJ1QnLCAnVScsICdWJywgJ1cnIF0gfVxuICAgIEBlcSAoIM6paGxsdF8yNjAgPSAtPiBULnVuaWxpdGVyYWxzLmlzYSAnTicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICBAZXEgKCDOqWhsbHRfMjYxID0gLT4gVC51bmlsaXRlcmFscy5kYXRhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB7IG51bnM6ICcnLCB6cHVuczogJ04nLCBudW5fY2hyczogW10sIHpwdW5fY2hyczogWyAnTicgXSB9XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAdGhyb3dzICggzqlobGx0XzI2MiA9IC0+IFQuYWxwaGFiZXQudmFsaWRhdGUgbnVsbCAgICAgICAgICAgICAgICAgICAgICAgICApLCAvbm90IGEgdmFsaWQgYWxwaGFiZXQvXG4gICAgQHRocm93cyAoIM6paGxsdF8yNjMgPSAtPiBULmFscGhhYmV0LnZhbGlkYXRlICcnICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgL25vdCBhIHZhbGlkIGFscGhhYmV0L1xuICAgIEB0aHJvd3MgKCDOqWhsbHRfMjY0ID0gLT4gVC5hbHBoYWJldC52YWxpZGF0ZSAnYScgICAgICAgICAgICAgICAgICAgICAgICAgICksIC9ub3QgYSB2YWxpZCBhbHBoYWJldC9cbiAgICBAZXEgICAgICggzqlobGx0XzI2NSA9IC0+IFQuYWxwaGFiZXQudmFsaWRhdGUgJ2FiJyAgICAgICAgICAgICAgICAgICAgICAgICApLCAnYWInXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAdGhyb3dzICggzqlobGx0XzI2NiA9IC0+ICAgbmV3IEhvbGxlcml0aF90eXBlc3BhY2UgeyBibGFuazogbnVsbCB9ICAgICAgICAgICAgICAgICAgICAgICAgKSwgL25vdCBhIHZhbGlkIGJsYW5rL1xuICAgIEB0aHJvd3MgKCDOqWhsbHRfMjY3ID0gLT4gICBuZXcgSG9sbGVyaXRoX3R5cGVzcGFjZSB7IGJsYW5rOiAnJyAgIH0gICAgICAgICAgICAgICAgICAgICAgICApLCAvbm90IGEgdmFsaWQgYmxhbmsvXG4gICAgQHRocm93cyAoIM6paGxsdF8yNjggPSAtPiAgIG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlIHsgYmxhbms6ICctLScgfSAgICAgICAgICAgICAgICAgICAgICAgICksIC9ub3QgYSB2YWxpZCBibGFuay9cbiAgICBAdGhyb3dzICggzqlobGx0XzI2OSA9IC0+ICggbmV3IEhvbGxlcml0aF90eXBlc3BhY2UgeyBibGFuazogbnVsbCB9ICkuYmxhbmsudmFsaWRhdGUgbnVsbCAgKSwgL25vdCBhIHZhbGlkIGJsYW5rL1xuICAgIEB0aHJvd3MgKCDOqWhsbHRfMjcwID0gLT4gKCBuZXcgSG9sbGVyaXRoX3R5cGVzcGFjZSB7IGJsYW5rOiAnJyAgIH0gKS5ibGFuay52YWxpZGF0ZSAnJyAgICApLCAvbm90IGEgdmFsaWQgYmxhbmsvXG4gICAgQHRocm93cyAoIM6paGxsdF8yNzEgPSAtPiAoIG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlIHsgYmxhbms6ICctLScgfSApLmJsYW5rLnZhbGlkYXRlICctLScgICksIC9ub3QgYSB2YWxpZCBibGFuay9cbiAgICBAZXEgICAgICggzqlobGx0XzI3MiA9IC0+ICggbmV3IEhvbGxlcml0aF90eXBlc3BhY2UgeyBibGFuazogJy0nICB9ICkuYmxhbmsudmFsaWRhdGUgJy0nICAgKSwgJy0nXG4gICAgQGVxICAgICAoIM6paGxsdF8yNzMgPSAtPiAoIG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlIHsgYmxhbms6ICcgJyAgfSApLmJsYW5rLnZhbGlkYXRlICcgJyAgICksICcgJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHZhbGlkYXRlX2FuZF9jb21waWxlX2NmZ19nZW5lcmFsOiAtPlxuICAgIHsgaW50ZXJuYWxzLFxuICAgICAgSG9sbGVyaXRoLCAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IEhvbGxlcml0aF90eXBlc3BhY2UsXG4gICAgICBDRkcsICAgICAgICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoL2xpYi90eXBlcydcbiAgICAjIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAjIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgeyBpc0Zyb3plbjogaXNfZnJvemVuLCAgICAgICAgfSA9IE9iamVjdFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyMjIHRlc3RpbmcgYSBnZW5lcmFsIGFzc3VtcHRpb24gc28gd2UgZG9uJ3QgbWVzcyB1cDogIyMjXG4gICAgQGVxICggzqlobGx0XzI3NCA9IC0+ICggTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgLSAxICkgPT0gLSggTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVIgKyAxICkgKSwgdHJ1ZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgICMgVCA9IG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlKClcbiAgICAgIEB0aHJvd3MgKCDOqWhsbHRfMjc1ID0gLT4gSG9sbGVyaXRoLnZhbGlkYXRlX2FuZF9jb21waWxlX2NmZyB7fSAgICAgICAgICAgICAgICAgICksIC9ub3QgYSB2YWxpZCBhbHBoYWJldC9cbiAgICAgIEB0aHJvd3MgKCDOqWhsbHRfMjc2ID0gLT4gSG9sbGVyaXRoLnZhbGlkYXRlX2FuZF9jb21waWxlX2NmZyB7IGFscGhhYmV0OiAnJyAgICB9ICksIC9ub3QgYSB2YWxpZCBhbHBoYWJldC9cbiAgICAgIEB0aHJvd3MgKCDOqWhsbHRfMjc3ID0gLT4gSG9sbGVyaXRoLnZhbGlkYXRlX2FuZF9jb21waWxlX2NmZyB7IGFscGhhYmV0OiAnYScgICB9ICksIC9ub3QgYSB2YWxpZCBhbHBoYWJldC9cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnXzEwOiAtPlxuICAgIHsgaW50ZXJuYWxzLFxuICAgICAgSG9sbGVyaXRoLCAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IEhvbGxlcml0aF90eXBlc3BhY2UsXG4gICAgICBDRkcsICAgICAgICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoL2xpYi90eXBlcydcbiAgICAjIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAjIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgeyBpc0Zyb3plbjogaXNfZnJvemVuLCAgICAgICAgfSA9IE9iamVjdFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2ZnXzEwID1cbiAgICAgIGJsYW5rOiAgICAgICAgJyAnICAgICAgICAgICAgICAgICAgICAgICAjIHNlcGFyYXRvciB1c2VkIGluIGBtYWduaWZpZXJzYCBhbmQgYHVuaWxpdGVyYWxzYFxuICAgICAgYWxwaGFiZXQ6ICAgICAnMDEyMzQ1Njc4OScgICAgICAgICAgICAgICMgZGlnaXRzOyBsZW5ndGggb2YgYGFscGhhYmV0YCBpcyB0aGUgYGJhc2VgXG4gICAgICBtYWduaWZpZXJzOiAgICdBQkMgWFlaJyAgICAgICAgICAgICAgICAgI1xuICAgICAgdW5pbGl0ZXJhbHM6ICAnRkdISUpLTE0gTiBPUFFSU1RVVicgICAgICMgbmVnYXRpdmUgdW5pbGl0ZXJhbHMsIGJsYW5rLCB6ZXJvIHVuaWxpdGVyYWwsIGJsYW5rLCBwb3NpdGl2ZSB1bmlsaXRlcmFsc1xuICAgICAgZGltZW5zaW9uOiAgICAzICAgICAgICAgICAgICAgICAgICAgICAgICMgbnVtYmVyIG9mIGluZGljZXMgc3VwcG9ydGVkXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgY2ZnID0gSG9sbGVyaXRoLnZhbGlkYXRlX2FuZF9jb21waWxlX2NmZyBjZmdfMTBcbiAgICAgIEBlcSAoIM6paGxsdF8yNzggPSAtPiBjZmcuYmxhbmsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyAnXG4gICAgICBAZXEgKCDOqWhsbHRfMjc5ID0gLT4gY2ZnLmFscGhhYmV0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcwMTIzNDU2Nzg5J1xuICAgICAgQGVxICggzqlobGx0XzI4MCA9IC0+IGNmZy5hbHBoYWJldF9jaHJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBBcnJheS5mcm9tICcwMTIzNDU2Nzg5J1xuICAgICAgQGVxICggzqlobGx0XzI4MSA9IC0+IGNmZy5fbm92YSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAoIEFycmF5LmZyb20gY2ZnLmFscGhhYmV0ICkuYXQgLTFcbiAgICAgIEBlcSAoIM6paGxsdF8yODIgPSAtPiBjZmcubGVhZGluZ19uaW5lcnNfcmUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgLy8vIF4gKD86IDkgKSogKD89IC4rICQgKSAvLy9ndlxuICAgICAgQGVxICggzqlobGx0XzI4MyA9IC0+IGlzX2Zyb3plbiBjZmcuYWxwaGFiZXRfY2hycyAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWhsbHRfMjg0ID0gLT4gY2ZnLmJhc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDEwXG4gICAgICBAZXEgKCDOqWhsbHRfMjg1ID0gLT4gY2ZnLm1hZ25pZmllcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdBQkMgWFlaJ1xuICAgICAgQGVxICggzqlobGx0XzI4NiA9IC0+IGNmZy5ubWFnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnIENCQSdcbiAgICAgIEBlcSAoIM6paGxsdF8yODcgPSAtPiBjZmcucG1hZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyBYWVonXG4gICAgICBAZXEgKCDOqWhsbHRfMjg4ID0gLT4gY2ZnLm5tYWdfY2hycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIEFycmF5LmZyb20gJyBDQkEnXG4gICAgICBAZXEgKCDOqWhsbHRfMjg5ID0gLT4gY2ZnLnBtYWdfY2hycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIEFycmF5LmZyb20gJyBYWVonXG4gICAgICBAZXEgKCDOqWhsbHRfMjkwID0gLT4gY2ZnLnVuaWxpdGVyYWxzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdGR0hJSktMTSBOIE9QUVJTVFVWJ1xuICAgICAgQGVxICggzqlobGx0XzI5MSA9IC0+IGNmZy5udW5zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnRkdISUpLTE0nXG4gICAgICBAZXEgKCDOqWhsbHRfMjkyID0gLT4gY2ZnLnpwdW5zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdOT1BRUlNUVVYnXG4gICAgICBAZXEgKCDOqWhsbHRfMjkzID0gLT4gY2ZnLnpwdW5fbWF4ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDhcbiAgICAgIEBlcSAoIM6paGxsdF8yOTQgPSAtPiBjZmcubnVuX21pbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgLThcbiAgICAgIEBlcSAoIM6paGxsdF8yOTUgPSAtPiBjZmcubnVuX2NocnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAnRicsICdHJywgJ0gnLCAnSScsICdKJywgJ0snLCAnTCcsICdNJyBdLFxuICAgICAgQGVxICggzqlobGx0XzI5NiA9IC0+IGNmZy56cHVuX2NocnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbICdOJywgJ08nLCAnUCcsICdRJywgJ1InLCAnUycsICdUJywgJ1UnLCAnVicsIF1cbiAgICAgIEBlcSAoIM6paGxsdF8yOTcgPSAtPiBjZmcuZGltZW5zaW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgM1xuICAgICAgQGVxICggzqlobGx0XzI5OCA9IC0+ICsoICggY2ZnLmJhc2UgKiogKCBjZmcucG1hZ19jaHJzLmxlbmd0aCAtIDEgKSAgKSAtIDEgKSApLCArOTk5XG4gICAgICBAZXEgKCDOqWhsbHRfMjk5ID0gLT4gLSggKCBjZmcuYmFzZSAqKiAoIGNmZy5ubWFnX2NocnMubGVuZ3RoIC0gMSApICApIC0gMSApICksIC05OTlcbiAgICAgIEBlcSAoIM6paGxsdF8zMDAgPSAtPiBjZmcuX21heF9pbnRlZ2VyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgKzk5OVxuICAgICAgQGVxICggzqlobGx0XzMwMSA9IC0+IGNmZy5fbWluX2ludGVnZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAtOTk5XG4gICAgICBAZXEgKCDOqWhsbHRfMzAyID0gLT4gY2ZnLl9tYXhfZGlnaXRzX3Blcl9pZHggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDNcbiAgICAgIEBlcSAoIM6paGxsdF8zMDMgPSAtPiBjZmcuVE1QX2FscGhhYmV0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJzAxMjM0NTY3ODlBQkNGR0hJSktMTU5PUFFSU1RVVlhZWidcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgaCA9IG5ldyBIb2xsZXJpdGggY2ZnXzEwXG4gICAgICBAZXEgKCDOqWhsbHRfMzA0ID0gLT4gaC5jZmcgKSwgY2ZnXG4gICAgICAjIEBlcSAoIM6paGxsdF8zMDUgPSAtPiBoLmVuY29kZSAgLTk5OCApLCBudWxsXG4gICAgICBAZXEgKCDOqWhsbHRfMzA2ID0gLT4gaC5lbmNvZGUgICAtMTIgKSwgJ0I4NydcbiAgICAgIEBlcSAoIM6paGxsdF8zMDcgPSAtPiBoLmVuY29kZSAgIC0xMSApLCAnQjg4J1xuICAgICAgQGVxICggzqlobGx0XzMwOCA9IC0+IGguZW5jb2RlICAgLTEwICksICdCODknXG4gICAgICBAZXEgKCDOqWhsbHRfMzA5ID0gLT4gaC5lbmNvZGUgICAgLTkgKSwgJ0MwJ1xuICAgICAgQGVxICggzqlobGx0XzMxMCA9IC0+IGguZW5jb2RlICAgIC04ICksICdGJ1xuICAgICAgQGVxICggzqlobGx0XzMxMSA9IC0+IGguZW5jb2RlICAgIC0yICksICdMJ1xuICAgICAgQGVxICggzqlobGx0XzMxMiA9IC0+IGguZW5jb2RlICAgIC0xICksICdNJ1xuICAgICAgQGVxICggzqlobGx0XzMxMyA9IC0+IGguZW5jb2RlICAgICAwICksICdOJ1xuICAgICAgQGVxICggzqlobGx0XzMxNCA9IC0+IGguZW5jb2RlICAgICsxICksICdPJ1xuICAgICAgQGVxICggzqlobGx0XzMxNSA9IC0+IGguZW5jb2RlICAgICsyICksICdQJ1xuICAgICAgQGVxICggzqlobGx0XzMxNiA9IC0+IGguZW5jb2RlICAgICs4ICksICdWJ1xuICAgICAgQGVxICggzqlobGx0XzMxNyA9IC0+IGguZW5jb2RlICAgICs5ICksICdYOSdcbiAgICAgIEBlcSAoIM6paGxsdF8zMTggPSAtPiBoLmVuY29kZSAgICsxMCApLCAnWTEwJ1xuICAgICAgQGVxICggzqlobGx0XzMxOSA9IC0+IGguZW5jb2RlICAgKzExICksICdZMTEnXG4gICAgICBAZXEgKCDOqWhsbHRfMzIwID0gLT4gaC5lbmNvZGUgICArMTIgKSwgJ1kxMidcbiAgICAgIEBlcSAoIM6paGxsdF8zMjEgPSAtPiBoLmVuY29kZSAgKzk5OCApLCAnWjk5OCdcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnXzEwX25vX3VuaWx0ZXJhbHM6IC0+XG4gICAgeyBpbnRlcm5hbHMsXG4gICAgICBIb2xsZXJpdGgsICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgSG9sbGVyaXRoX3R5cGVzcGFjZSxcbiAgICAgIENGRywgICAgICAgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgvbGliL3R5cGVzJ1xuICAgICMgeyB0eXBlX29mLCAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICMgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCAgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICB7IGlzRnJvemVuOiBpc19mcm96ZW4sICAgICAgICB9ID0gT2JqZWN0XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjZmdfMTBfbm9fdW5pbGl0ZXJhbHMgPVxuICAgICAgYmxhbms6ICAgICAgICAnICcgICAgICAgICAgICAgICAgICAgICAgICMgc2VwYXJhdG9yIHVzZWQgaW4gYG1hZ25pZmllcnNgIGFuZCBgdW5pbGl0ZXJhbHNgXG4gICAgICBhbHBoYWJldDogICAgICcwMTIzNDU2Nzg5JyAgICAgICAgICAgICAgIyBkaWdpdHM7IGxlbmd0aCBvZiBgYWxwaGFiZXRgIGlzIHRoZSBgYmFzZWBcbiAgICAgIG1hZ25pZmllcnM6ICAgJ0FCQyBYWVonICAgICAgICAgICAgICAgICAjXG4gICAgICB1bmlsaXRlcmFsczogICdOJyAgICAgICAgICAgICAgICAgICAgICAgIyBvbmx5IGhhcyB6ZXJvIHVuaWxpdGVyYWxcbiAgICAgIGRpbWVuc2lvbjogICAgMyAgICAgICAgICAgICAgICAgICAgICAgICAjIG51bWJlciBvZiBpbmRpY2VzIHN1cHBvcnRlZFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGNmZyA9IEhvbGxlcml0aC52YWxpZGF0ZV9hbmRfY29tcGlsZV9jZmcgY2ZnXzEwX25vX3VuaWxpdGVyYWxzXG4gICAgICBAZXEgKCDOqWhsbHRfMzIyID0gLT4gY2ZnLmJsYW5rICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcgJ1xuICAgICAgQGVxICggzqlobGx0XzMyMyA9IC0+IGNmZy5hbHBoYWJldCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnMDEyMzQ1Njc4OSdcbiAgICAgIEBlcSAoIM6paGxsdF8zMjQgPSAtPiBjZmcuYWxwaGFiZXRfY2hycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgQXJyYXkuZnJvbSAnMDEyMzQ1Njc4OSdcbiAgICAgIEBlcSAoIM6paGxsdF8zMjUgPSAtPiBjZmcuX25vdmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgKCBBcnJheS5mcm9tIGNmZy5hbHBoYWJldCApLmF0IC0xXG4gICAgICBAZXEgKCDOqWhsbHRfMzI2ID0gLT4gY2ZnLmxlYWRpbmdfbmluZXJzX3JlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC8vLyBeICg/OiA5ICkqICg/PSAuKyAkICkgLy8vZ3ZcbiAgICAgIEBlcSAoIM6paGxsdF8zMjcgPSAtPiBpc19mcm96ZW4gY2ZnLmFscGhhYmV0X2NocnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlobGx0XzMyOCA9IC0+IGNmZy5iYXNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAxMFxuICAgICAgQGVxICggzqlobGx0XzMyOSA9IC0+IGNmZy5tYWduaWZpZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnQUJDIFhZWidcbiAgICAgIEBlcSAoIM6paGxsdF8zMzAgPSAtPiBjZmcubm1hZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyBDQkEnXG4gICAgICBAZXEgKCDOqWhsbHRfMzMxID0gLT4gY2ZnLnBtYWcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcgWFlaJ1xuICAgICAgQGVxICggzqlobGx0XzMzMiA9IC0+IGNmZy5ubWFnX2NocnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBBcnJheS5mcm9tICcgQ0JBJ1xuICAgICAgQGVxICggzqlobGx0XzMzMyA9IC0+IGNmZy5wbWFnX2NocnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBBcnJheS5mcm9tICcgWFlaJ1xuICAgICAgQGVxICggzqlobGx0XzMzNCA9IC0+IGNmZy51bmlsaXRlcmFscyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnTidcbiAgICAgIEBlcSAoIM6paGxsdF8zMzUgPSAtPiBjZmcubnVucyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJydcbiAgICAgIEBlcSAoIM6paGxsdF8zMzYgPSAtPiBjZmcuenB1bnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ04nXG4gICAgICBAZXEgKCDOqWhsbHRfMzM3ID0gLT4gY2ZnLm51bl9jaHJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFtdXG4gICAgICBAZXEgKCDOqWhsbHRfMzM4ID0gLT4gY2ZnLnpwdW5fY2hycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgJ04nLCBdXG4gICAgICBAZXEgKCDOqWhsbHRfMzM5ID0gLT4gY2ZnLmRpbWVuc2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDNcbiAgICAgIEBlcSAoIM6paGxsdF8zNDAgPSAtPiArKCAoIGNmZy5iYXNlICoqICggY2ZnLnBtYWdfY2hycy5sZW5ndGggLSAxICkgICkgLSAxICkgKSwgKzk5OVxuICAgICAgQGVxICggzqlobGx0XzM0MSA9IC0+IC0oICggY2ZnLmJhc2UgKiogKCBjZmcubm1hZ19jaHJzLmxlbmd0aCAtIDEgKSAgKSAtIDEgKSApLCAtOTk5XG4gICAgICBAZXEgKCDOqWhsbHRfMzQyID0gLT4gY2ZnLl9tYXhfaW50ZWdlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICs5OTlcbiAgICAgIEBlcSAoIM6paGxsdF8zNDMgPSAtPiBjZmcuX21pbl9pbnRlZ2VyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgLTk5OVxuICAgICAgQGVxICggzqlobGx0XzM0NCA9IC0+IGNmZy5fbWF4X2RpZ2l0c19wZXJfaWR4ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAzXG4gICAgICBAZXEgKCDOqWhsbHRfMzQ1ID0gLT4gY2ZnLlRNUF9hbHBoYWJldCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcwMTIzNDU2Nzg5QUJDTlhZWidcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgaCA9IG5ldyBIb2xsZXJpdGggY2ZnXzEwX25vX3VuaWxpdGVyYWxzXG4gICAgICBAZXEgKCDOqWhsbHRfMzQ2ID0gLT4gaC5jZmcgKSwgY2ZnXG4gICAgICBAZXEgKCDOqWhsbHRfMzQ3ID0gLT4gaC5lbmNvZGUgWyAwLCBdICksICdOJ1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB2YWxpZGF0ZV9hbmRfY29tcGlsZV9jZmdfMTI4OiAtPlxuICAgIHsgaW50ZXJuYWxzLFxuICAgICAgSG9sbGVyaXRoLCAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IEhvbGxlcml0aF90eXBlc3BhY2UsXG4gICAgICBDRkcsICAgICAgICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoL2xpYi90eXBlcydcbiAgICAjIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAjIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgeyBpc0Zyb3plbjogaXNfZnJvemVuLCAgICAgICAgfSA9IE9iamVjdFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2ZnXzEyOCA9XG4gICAgICAjIyMgICAgICAgICAgICAgICAgICAgICAxICAgICAgICAgMiAgICAgICAgIDMgICAgICAgIyMjXG4gICAgICAjIyMgICAgICAgICAgICAxMjM0NTY3ODkwMTIzNDU2Nzg5MDEyMzQ1Njc4OTAxMiAgICAgIyMjXG4gICAgICBhbHBoYWJldDogICAgICchIyQlJigpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQicgKyBcXFxuICAgICAgICAgICAgICAgICAgICAnQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaW11eX2BhYmMnICsgXFxcbiAgICAgICAgICAgICAgICAgICAgJ2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fsKhwqLCo8KkwqUnICsgXFxcbiAgICAgICAgICAgICAgICAgICAgJ8KmwqfCqMKpwqrCq8Kswq7Cr8KwwrHCssKzwrTCtcK2wrfCuMK5wrrCu8K8wr3CvsK/w4DDgcOCw4PDhMOFw4YnXG4gICAgICBtYWduaWZpZXJzOiAgICfDh8OIw4nDisOLw4zDjcOOIMO4w7nDusO7w7zDvcO+w78nXG4gICAgICB1bmlsaXRlcmFsczogICfDj8OQw5HDksOTw5TDlcOWw5fDmMOZw5rDm8Ocw53DnsOfw6DDocOiIMOjIMOkw6XDpsOnw6jDqcOqw6vDrMOtw67Dr8Oww7HDssOzw7TDtcO2w7cnXG4gICAgICBkaW1lbnNpb246ICAgIDVcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBjZmcgPSBIb2xsZXJpdGgudmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnIGNmZ18xMjhcbiAgICAgIEBlcSAoIM6paGxsdF8zNDggPSAtPiBjZmcuYmxhbmsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyAnXG4gICAgICBAZXEgKCDOqWhsbHRfMzQ5ID0gLT4gY2ZnLmFscGhhYmV0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICchIyQlJigpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQicgKyBcXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDREVGR0hJSktMTU5PUFFSU1RVVldYWVpbXV5fYGFiYycgKyBcXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ent8fX7CocKiwqPCpMKlJyArIFxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ8KmwqfCqMKpwqrCq8Kswq7Cr8KwwrHCssKzwrTCtcK2wrfCuMK5wrrCu8K8wr3CvsK/w4DDgcOCw4PDhMOFw4YnXG4gICAgICBAZXEgKCDOqWhsbHRfMzUwID0gLT4gY2ZnLmFscGhhYmV0X2NocnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIEFycmF5LmZyb20gY2ZnLmFscGhhYmV0XG4gICAgICBAZXEgKCDOqWhsbHRfMzUxID0gLT4gY2ZnLl9ub3ZhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICggQXJyYXkuZnJvbSBjZmcuYWxwaGFiZXQgKS5hdCAtMVxuICAgICAgQGVxICggzqlobGx0XzM1MiA9IC0+IGNmZy5sZWFkaW5nX25pbmVyc19yZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvLy8gXiAoPzogw4YgKSogKD89IC4rICQgKSAvLy9ndlxuICAgICAgQGVxICggzqlobGx0XzM1MyA9IC0+IGNmZy5tYWduaWZpZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw4fDiMOJw4rDi8OMw43DjiDDuMO5w7rDu8O8w73DvsO/J1xuICAgICAgQGVxICggzqlobGx0XzM1NCA9IC0+IGNmZy5ubWFnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnIMOOw43DjMOLw4rDicOIw4cnXG4gICAgICBAZXEgKCDOqWhsbHRfMzU1ID0gLT4gY2ZnLnBtYWcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcgw7jDucO6w7vDvMO9w77DvydcbiAgICAgIEBlcSAoIM6paGxsdF8zNTYgPSAtPiBjZmcubm1hZ19jaHJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgQXJyYXkuZnJvbSAnIMOOw43DjMOLw4rDicOIw4cnXG4gICAgICBAZXEgKCDOqWhsbHRfMzU3ID0gLT4gY2ZnLnBtYWdfY2hycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIEFycmF5LmZyb20gJyDDuMO5w7rDu8O8w73DvsO/J1xuICAgICAgQGVxICggzqlobGx0XzM1OCA9IC0+IGNmZy51bmlsaXRlcmFscyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw4/DkMORw5LDk8OUw5XDlsOXw5jDmcOaw5vDnMOdw57Dn8Ogw6HDoiDDoyDDpMOlw6bDp8Oow6nDqsOrw6zDrcOuw6/DsMOxw7LDs8O0w7XDtsO3J1xuICAgICAgQGVxICggzqlobGx0XzM1OSA9IC0+IGNmZy5udW5zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw4/DkMORw5LDk8OUw5XDlsOXw5jDmcOaw5vDnMOdw57Dn8Ogw6HDoidcbiAgICAgIEBlcSAoIM6paGxsdF8zNjAgPSAtPiBjZmcuenB1bnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8Ojw6TDpcOmw6fDqMOpw6rDq8Osw63DrsOvw7DDscOyw7PDtMO1w7bDtydcbiAgICAgIEBlcSAoIM6paGxsdF8zNjEgPSAtPiBjZmcubnVuX2NocnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgQXJyYXkuZnJvbSAnw4/DkMORw5LDk8OUw5XDlsOXw5jDmcOaw5vDnMOdw57Dn8Ogw6HDoidcbiAgICAgIEBlcSAoIM6paGxsdF8zNjIgPSAtPiBjZmcuenB1bl9jaHJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgQXJyYXkuZnJvbSAnw6PDpMOlw6bDp8Oow6nDqsOrw6zDrcOuw6/DsMOxw7LDs8O0w7XDtsO3J1xuICAgICAgQGVxICggzqlobGx0XzM2MyA9IC0+IGNmZy5fbWluX2ludGVnZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAtKCAoIDEyOCAqKiA3ICkgLSAxIClcbiAgICAgIEBlcSAoIM6paGxsdF8zNjQgPSAtPiBjZmcuX21heF9pbnRlZ2VyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgKyggKCAxMjggKiogNyApIC0gMSApXG4gICAgICAjIEBlcSAoIM6paGxsdF8zNjUgPSAtPiBjZmcuX21heF9kaWdpdHNfcGVyX2lkeCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgM1xuICAgICAgIyBAZXEgKCDOqWhsbHRfMzY2ID0gLT4gY2ZnLlRNUF9hbHBoYWJldCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcwMTIzNDU2Nzg5QUJDRUZHSElKS0xNTk9QUVJTVFVWV1hZWidcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlobGx0XzM2NyA9IC0+IGlzX2Zyb3plbiBjZmcuYWxwaGFiZXRfY2hycyAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWhsbHRfMzY4ID0gLT4gY2ZnLmJhc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDEyOFxuICAgICAgQGVxICggzqlobGx0XzM2OSA9IC0+IGNmZy5kaW1lbnNpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCA1XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGggPSBuZXcgSG9sbGVyaXRoIGNmZ18xMjhcbiAgICAgIEBlcSAoIM6paGxsdF8zNzAgPSAtPiBoLmNmZyApLCBjZmdcbiAgICAgICMgQGVxICggzqlobGx0XzM3MSA9IC0+IGguZW5jb2RlIFsgMCwgXSApLCBudWxsXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHR5cGVzOiAtPlxuICAgIHsgSG9sbGVyaXRoX3R5cGVzcGFjZSxcbiAgICAgIGNyZWF0ZV9tYXhfaW50ZWdlcl8kLFxuICAgICAgQ0ZHLCAgICAgICAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aC9saWIvdHlwZXMnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgVCA9IG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlKClcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzcyID0gLT4gVC5iYXNlLmlzYSAtMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzczID0gLT4gVC5iYXNlLmlzYSAgMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzc0ID0gLT4gVC5iYXNlLmlzYSArMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzc1ID0gLT4gVC5iYXNlLmlzYSArMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6paGxsdF8zNzYgPSAtPiBULl9tYXhfaW50ZWdlcl8kLmlzYSBudWxsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICAgICAoIM6paGxsdF8zNzcgPSAtPiBULl9tYXhfaW50ZWdlcl8kLmlzYSA5LCAgICAgICAgICAxMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgICAgICggzqlobGx0XzM3OCA9IC0+IFQuX21heF9pbnRlZ2VyXyQuaXNhIDk5LCAgICAgICAgIDEwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzc5ID0gLT4gVC5fbWF4X2ludGVnZXJfJC5pc2EgOTk5OTk5OTksICAgMTAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6paGxsdF8zODAgPSAtPiBULl9tYXhfaW50ZWdlcl8kLmlzYSAtMTAsICAgICAgICAxMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICAgICAoIM6paGxsdF8zODEgPSAtPiAvbm90IGEgcG9zaXRpdmUgc2FmZSBpbnRlZ2VyLy50ZXN0IFQuX21heF9pbnRlZ2VyXyQuZGF0YS5tZXNzYWdlICAgICApLCB0cnVlXG4gICAgICBAZXEgICAgICggzqlobGx0XzM4MiA9IC0+IFQuX21heF9pbnRlZ2VyXyQuaXNhIDB4ZmZmZiwgICAgIDE2ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzgzID0gLT4gVC5fbWF4X2ludGVnZXJfJC5pc2EgMHg3ZmZmZmZmZiwgMTYgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEB0aHJvd3MgKCDOqWhsbHRfMzg0ID0gLT4gVC5fbWF4X2ludGVnZXJfJC52YWxpZGF0ZSA1LCAxMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgL1xcKF9tYXhfaW50ZWdlcl9cXCRcXCkgbm90IGEgdmFsaWQgX21heF9pbnRlZ2VyX1xcJDogNSDigJMgeCBub3QgYSBwb3NpdGl2ZSBhbGwtbmluZXJzL1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBUID0gbmV3IEhvbGxlcml0aF90eXBlc3BhY2UoKVxuICAgICAgUiA9IHsgYmFzZTogMTYsIF9tYXhfZGlnaXRzX3Blcl9pZHg6IDQsIH1cbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzg1ID0gLT4gVC5fbWF4X2ludGVnZXJfJC5pc2EgKCBSLmJhc2UgKiogUi5fbWF4X2RpZ2l0c19wZXJfaWR4ICkgLSAxLCBSLmJhc2UgKSwgdHJ1ZVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBUID0gbmV3IEhvbGxlcml0aF90eXBlc3BhY2UoKVxuICAgICAgQGVxICAgICAoIM6paGxsdF8zODYgPSAtPiBULl9tYXhfaW50ZWdlcl8kLmlzYSAoIDEyOCAqKiAxICkgLSAxLCAxMjggICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6paGxsdF8zODcgPSAtPiBULl9tYXhfaW50ZWdlcl8kLmlzYSAoIDEyOCAqKiAyICkgLSAxLCAxMjggICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6paGxsdF8zODggPSAtPiBULl9tYXhfaW50ZWdlcl8kLmlzYSAoIDEyOCAqKiAzICkgLSAxLCAxMjggICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6paGxsdF8zODkgPSAtPiBULl9tYXhfaW50ZWdlcl8kLmlzYSAoIDEyOCAqKiA0ICkgLSAxLCAxMjggICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6paGxsdF8zOTAgPSAtPiBULl9tYXhfaW50ZWdlcl8kLmlzYSAoIDEyOCAqKiA1ICkgLSAxLCAxMjggICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6paGxsdF8zOTEgPSAtPiBULl9tYXhfaW50ZWdlcl8kLmlzYSAoIDEyOCAqKiA2ICkgLSAxLCAxMjggICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6paGxsdF8zOTIgPSAtPiBULl9tYXhfaW50ZWdlcl8kLmlzYSAoIDEyOCAqKiA3ICkgLSAxLCAxMjggICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6paGxsdF8zOTMgPSAtPiBULl9tYXhfaW50ZWdlcl8kLmlzYSAoIDEyOCAqKiA4ICkgLSAxLCAxMjggICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzk0ID0gLT4gVC5jcmVhdGVfbWF4X2ludGVnZXJfJCB7IGJhc2U6IDEwLCBkaWdpdHM6IDIsIH0gICksIDk5XG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5kZW1vX21heF9pbnRlZ2VyID0gLT5cbiAgbG9nX3RvX2Jhc2UgICAgICAgICAgICAgICA9ICggbiwgYmFzZSApIC0+ICggTWF0aC5sb2cgbiApIC8gKCBNYXRoLmxvZyBiYXNlIClcbiAgZ2V0X3JlcXVpcmVkX2RpZ2l0cyAgICAgICA9ICggbiwgYmFzZSApIC0+IE1hdGguY2VpbCBsb2dfdG9fYmFzZSBuLCBiYXNlXG4gIGdldF9tYXhfbmluZXJfZGlnaXRfY291bnQgPSAoIG4sIGJhc2UgKSAtPiAoIGdldF9yZXF1aXJlZF9kaWdpdHMgbiwgYmFzZSApIC0gMVxuICBnZXRfbWF4X2ludGVnZXIgICAgICAgICAgID0gKCBuLCBiYXNlICkgLT4gKCBiYXNlICoqIGdldF9tYXhfbmluZXJfZGlnaXRfY291bnQgbiwgYmFzZSApIC0gMVxuICBpbmZvICfOqWhsbHRfMzk1JywgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIudG9TdHJpbmcgMTZcbiAgaW5mbyAnzqlobGx0XzM5NicsIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLnRvU3RyaW5nIDMyXG4gIHdoaXNwZXIgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgaW5mbyAnzqlobGx0XzM5NycsICggMzIgKiogNCAtIDEgKS50b1N0cmluZyAzMlxuICBpbmZvICfOqWhsbHRfMzk4JywgKCAzMiAqKiA0IC0gMSApLnRvU3RyaW5nIDMyXG4gIHdoaXNwZXIgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgaW5mbyAnzqlobGx0XzM5OScsIGdldF9yZXF1aXJlZF9kaWdpdHMgMzIsICAgICAgIDMyXG4gIGluZm8gJ86paGxsdF80MDAnLCBnZXRfcmVxdWlyZWRfZGlnaXRzIDMyICoqIDYsICAzMlxuICBpbmZvICfOqWhsbHRfNDAxJywgZ2V0X3JlcXVpcmVkX2RpZ2l0cyAxZTYsICAgICAgMTBcbiAgaW5mbyAnzqlobGx0XzQwMicsIGdldF9yZXF1aXJlZF9kaWdpdHMgMjAsICAgICAgIDEwXG4gIHdoaXNwZXIgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgaW5mbyAnzqlobGx0XzQwMycsIG1heF9kaWdpdHNfYmFzZV8xMCAgICA9IGdldF9tYXhfbmluZXJfZGlnaXRfY291bnQgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsIDEwXG4gIGluZm8gJ86paGxsdF80MDQnLCBtYXhfZGlnaXRzX2Jhc2VfMTYgICAgPSBnZXRfbWF4X25pbmVyX2RpZ2l0X2NvdW50IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAxNlxuICBpbmZvICfOqWhsbHRfNDA1JywgbWF4X2RpZ2l0c19iYXNlXzMyICAgID0gZ2V0X21heF9uaW5lcl9kaWdpdF9jb3VudCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiwgMzJcbiAgaW5mbyAnzqlobGx0XzQwNicsIG1heF9kaWdpdHNfYmFzZV8zNiAgICA9IGdldF9tYXhfbmluZXJfZGlnaXRfY291bnQgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsIDM2XG4gIGluZm8gJ86paGxsdF80MDcnLCBtYXhfZGlnaXRzXzFiYXNlXzI4ICAgPSBnZXRfbWF4X25pbmVyX2RpZ2l0X2NvdW50IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAxMjhcbiAgIyBmb3IgYmFzZSBpbiBbIDIgLi4gMTI4IF1cbiAgIyAgIGluZm8gJ86paGxsdF80MDgnLCB7IGJhc2UsIH0sICggTWF0aC5jZWlsIGxvZ190b19iYXNlIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCBiYXNlICkgLSAxXG4gIHdoaXNwZXIgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgaW5mbyAnzqlobGx0XzQwOScsICc5Jy5yZXBlYXQgbWF4X2RpZ2l0c19iYXNlXzEwXG4gIGluZm8gJ86paGxsdF80MTAnLCAnZicucmVwZWF0IG1heF9kaWdpdHNfYmFzZV8xNlxuICBpbmZvICfOqWhsbHRfNDExJywgJ3YnLnJlcGVhdCBtYXhfZGlnaXRzX2Jhc2VfMzJcbiAgd2hpc3BlciAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUJ1xuICBpbmZvICfOqWhsbHRfNDEyJywgKCAoIGJhc2UgPSAxMCApICoqIG1heF9kaWdpdHNfYmFzZV8xMCApIC0gMVxuICBpbmZvICfOqWhsbHRfNDEzJywgKCAoIGJhc2UgPSAxNiApICoqIG1heF9kaWdpdHNfYmFzZV8xNiApIC0gMVxuICBpbmZvICfOqWhsbHRfNDE0JywgKCAoIGJhc2UgPSAzMiApICoqIG1heF9kaWdpdHNfYmFzZV8zMiApIC0gMVxuICBpbmZvICfOqWhsbHRfNDE1JywgKCAoIGJhc2UgPSAzNiApICoqIG1heF9kaWdpdHNfYmFzZV8zNiApIC0gMVxuICB3aGlzcGVyICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gIGluZm8gJ86paGxsdF80MTYnLCBnZXRfbWF4X2ludGVnZXIgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsIDEwXG4gIGluZm8gJ86paGxsdF80MTcnLCBnZXRfbWF4X2ludGVnZXIgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsIDE2XG4gIGluZm8gJ86paGxsdF80MTgnLCBnZXRfbWF4X2ludGVnZXIgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsIDMyXG4gIGluZm8gJ86paGxsdF80MTknLCBnZXRfbWF4X2ludGVnZXIgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsIDM2XG4gIGluZm8gJ86paGxsdF80MjAnLCBnZXRfbWF4X2ludGVnZXIgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsIDEyOFxuICB3aGlzcGVyICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gIGluZm8gJ86paGxsdF80MjEnLCAoIHBhcnNlSW50ICggJzknLnJlcGVhdCBtYXhfZGlnaXRzX2Jhc2VfMTAgKSwgMTAgKVxuICBpbmZvICfOqWhsbHRfNDIyJywgKCBwYXJzZUludCAoICdmJy5yZXBlYXQgbWF4X2RpZ2l0c19iYXNlXzE2ICksIDE2IClcbiAgaW5mbyAnzqlobGx0XzQyMycsICggcGFyc2VJbnQgKCAndicucmVwZWF0IG1heF9kaWdpdHNfYmFzZV8zMiApLCAzMiApXG4gIGluZm8gJ86paGxsdF80MjQnLCAoIHBhcnNlSW50ICggJ3onLnJlcGVhdCBtYXhfZGlnaXRzX2Jhc2VfMzYgKSwgMzYgKVxuICBpbmZvICfOqWhsbHRfNDI1JywgKCBwYXJzZUludCAoICc5Jy5yZXBlYXQgbWF4X2RpZ2l0c19iYXNlXzEwICksIDEwICkgPD0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcbiAgaW5mbyAnzqlobGx0XzQyNicsICggcGFyc2VJbnQgKCAnZicucmVwZWF0IG1heF9kaWdpdHNfYmFzZV8xNiApLCAxNiApIDw9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG4gIGluZm8gJ86paGxsdF80MjcnLCAoIHBhcnNlSW50ICggJ3YnLnJlcGVhdCBtYXhfZGlnaXRzX2Jhc2VfMzIgKSwgMzIgKSA8PSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUlxuICBpbmZvICfOqWhsbHRfNDI4JywgKCBwYXJzZUludCAoICd6Jy5yZXBlYXQgbWF4X2RpZ2l0c19iYXNlXzM2ICksIDM2ICkgPD0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcbiAgd2hpc3BlciAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUJ1xuICBpbmZvICfOqWhsbHRfNDI5JywgKzk5OSArIC05OTlcbiAgaW5mbyAnzqlobGx0XzQzMCcsICs5OTkgKyAtMVxuICBpbmZvICfOqWhsbHRfNDMxJywgLSggLTk5OSAtIDEgKSArIC05OTlcbiAgaW5mbyAnzqlobGx0XzQzMicsIC0oIC05OTkgLSAxICkgKyAtOTk4XG4gIGluZm8gJ86paGxsdF80MzMnLCAtKCAtOTk5IC0gMSApICsgLTk5N1xuICBpbmZvICfOqWhsbHRfNDM0JywgLSggLTk5OSAtIDEgKSArIC0zXG4gIGluZm8gJ86paGxsdF80MzUnLCAtKCAtOTk5IC0gMSApICsgLTJcbiAgaW5mbyAnzqlobGx0XzQzNicsIC0oIC05OTkgLSAxICkgKyAtMVxuICBpbmZvICfOqWhsbHRfNDM3JywgXCIjeyAtKCAtOTk5IC0gMSApICsgLTMgfVwiLnJlcGxhY2UgLy8vIF4gOSo/ICg/PSAuICQgKSAvLy9ndiwgJydcbiAgaW5mbyAnzqlobGx0XzQzOCcsIFwiI3sgLSggLTk5OSAtIDEgKSArIC0yIH1cIi5yZXBsYWNlIC8vLyBeIDkqPyAoPz0gLiAkICkgLy8vZ3YsICcnXG4gIGluZm8gJ86paGxsdF80MzknLCBcIiN7IC0oIC05OTkgLSAxICkgKyAtMSB9XCIucmVwbGFjZSAvLy8gXiA5Kj8gKD89IC4gJCApIC8vL2d2LCAnJ1xuICByZXR1cm4gbnVsbFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIHsgc2hvd19yZXF1aXJlcywgfSA9IHJlcXVpcmUgJy4uLy4uL3NuaXBwZXRzL2xpYi9kZW1vLXNob3ctcmVxdWlyZXMuanMnXG4gIHNob3dfcmVxdWlyZXMgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IEBob2xsZXJpdGhcbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBoMTBtdnAyX2JpZ19zaHVmZmxlOiBAaG9sbGVyaXRoLmgxMG12cDJfYmlnX3NodWZmbGUsIH1cblxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdHlwZXM6IEBob2xsZXJpdGgudHlwZXMsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGgxMG12cDJfc29ydGluZ18yOiBAaG9sbGVyaXRoLmgxMG12cDJfc29ydGluZ18yLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB2YWxpZGF0ZV9hbmRfY29tcGlsZV9jZmdfMTA6IEBob2xsZXJpdGgudmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnXzEwLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBoMTBtdnAyX2RlY29kZV91bml0czogQGhvbGxlcml0aC5oMTBtdnAyX2RlY29kZV91bml0cywgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgZ2V0X25pbmVyc19yZTogQGhvbGxlcml0aC5nZXRfbmluZXJzX3JlLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB2YWxpZGF0ZV9hbmRfY29tcGlsZV9jZmc6IEBob2xsZXJpdGgudmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnLCB9XG4gICMgZGVtb19tYXhfaW50ZWdlcigpXG5cblxuIl19
