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
    get_leading_novas_re: function() {
      var get_leading_novas_re, types;
      ({
        internals: {types}
      } = require('../../../apps/hollerith'));
      ({get_leading_novas_re} = types.internals);
      (() => {        // debug 'Ωhllt___3', '987'.replace /// ^ (?: 9 )*? (?= . $ ) ///gv, ''
        //.......................................................................................................
        var Ωanybt___4, Ωanybt___5;
        this.eq((Ωanybt___4 = function() {
          return get_leading_novas_re('9');
        }), /^(?:9)*(?=.+$)/gv);
        this.eq((Ωanybt___5 = function() {
          return get_leading_novas_re('*');
        }), /^(?:\*)*(?=.+$)/gv);
        return null;
      })();
      (() => {        //.......................................................................................................
        var _leading_novas_re, Ωanybt__10, Ωanybt__11, Ωanybt__12, Ωanybt__13, Ωanybt__14, Ωanybt__15, Ωanybt__16, Ωanybt__17, Ωanybt___6, Ωanybt___7, Ωanybt___8, Ωanybt___9;
        _leading_novas_re = get_leading_novas_re('9');
        this.eq((Ωanybt___6 = function() {
          return '9999'.replace(_leading_novas_re, '');
        }), '9');
        this.eq((Ωanybt___7 = function() {
          return '999'.replace(_leading_novas_re, '');
        }), '9');
        this.eq((Ωanybt___8 = function() {
          return '99'.replace(_leading_novas_re, '');
        }), '9');
        this.eq((Ωanybt___9 = function() {
          return '9'.replace(_leading_novas_re, '');
        }), '9');
        this.eq((Ωanybt__10 = function() {
          return '9989'.replace(_leading_novas_re, '');
        }), '89');
        this.eq((Ωanybt__11 = function() {
          return '989'.replace(_leading_novas_re, '');
        }), '89');
        this.eq((Ωanybt__12 = function() {
          return '89'.replace(_leading_novas_re, '');
        }), '89');
        this.eq((Ωanybt__13 = function() {
          return '9992'.replace(_leading_novas_re, '');
        }), '2');
        this.eq((Ωanybt__14 = function() {
          return '992'.replace(_leading_novas_re, '');
        }), '2');
        this.eq((Ωanybt__15 = function() {
          return '92'.replace(_leading_novas_re, '');
        }), '2');
        this.eq((Ωanybt__16 = function() {
          return '7'.replace(_leading_novas_re, '');
        }), '7');
        return this.eq((Ωanybt__17 = function() {
          return ''.replace(_leading_novas_re, '');
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
    hollerith_10mvp2_big_shuffle: function() {
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
        max_length: codec.cfg.dimension - 1,
        min_idx: Math.max(codec.cfg._min_integer, -2000),
        max_idx: Math.min(codec.cfg._max_integer, +2000)
      };
      // debug 'Ωhllt__90', rnd_vdx_cfg
      // debug 'Ωhllt__91', codec.cfg._sortkey_width
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
        // whisper 'Ωhllt__92', ( gold probe_sortkey.sk ), ( red probe_vdx.vdx ), ( lime probe_sortkey.vdx )
        this.eq((Ωhllt__93 = function() {
          return probe_sortkey.vdx;
        }), probe_vdx.vdx);
      }
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    hollerith_128_big_shuffle: function() {
      var Hollerith, _, codec, encode, equals, first_idx, get_random_vdx, hollerith_10mvp2, hollerith_128, i, idx, internals, j, len, probe_sortkey, probe_sub_count, probe_vdx, probes_sortkey, probes_vdx, ref, rnd_vdx_cfg, shuffle, sk, sort_by_sortkey, sort_by_vdx, type_of, vdx, walk_first_idxs, Ωhllt__99;
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
      // debug 'Ωhllt__94', rnd_vdx_cfg
      // debug 'Ωhllt__95', codec.cfg._sortkey_width
      get_random_vdx = helpers.get_random_vdx_producer(rnd_vdx_cfg);
      probe_sub_count = 3;
      shuffle = GUY.rnd.get_shuffle(57, 88);
      encode = function(vdx) {
        return (codec.encode(vdx)).padEnd(codec.cfg._sortkey_width, codec.cfg._cipher);
      };
      probes_sortkey = [];
      // debug 'Ωhllt__96', rnd_vdx_cfg; process.exit 111
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
// debug 'Ωhllt__97', { first_idx, }
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
        // whisper 'Ωhllt__98', ( gold probe_sortkey.sk ), ( red probe_vdx.vdx ), ( lime probe_sortkey.vdx )
        this.eq((Ωhllt__99 = function() {
          return probe_sortkey.vdx;
        }), probe_vdx.vdx);
      }
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    h128_16383_sorting_2: function() {
      var Hollerith, _, codec, equals, expected_indexes, hollerith_128_16383, i, idx, internals, j, k, l, len, len1, len2, m, padded_lines, pline, probes, psk, real_indexes, shuffle, sk_matcher, type_of, uline, unpadded_lines, usk, vdx, Ωhllt_102, Ωhllt_103, Ωhllt_104, Ωhllt_105, Ωhllt_106, Ωhllt_107, Ωhllt_108, Ωhllt_109, Ωhllt_110, Ωhllt_111, Ωhllt_112, Ωhllt_113, Ωhllt_114, Ωhllt_115, Ωhllt_116, Ωhllt_117, Ωhllt_118, Ωhllt_119, Ωhllt_120, Ωhllt_121, Ωhllt_122, Ωhllt_123, Ωhllt_124, Ωhllt_125, Ωhllt_126, Ωhllt_127, Ωhllt_128, Ωhllt_129, Ωhllt_130, Ωhllt_131, Ωhllt_132, Ωhllt_133, Ωhllt_134, Ωhllt_135, Ωhllt_136, Ωhllt_137, Ωhllt_138, Ωhllt_139, Ωhllt_140, Ωhllt_141, Ωhllt_142, Ωhllt_143, Ωhllt_144, Ωhllt_145, Ωhllt_146, Ωhllt_147, Ωhllt_148, Ωhllt_149, Ωhllt_150, Ωhllt_151, Ωhllt_152, Ωhllt_153, Ωhllt_154, Ωhllt_155, Ωhllt_157, Ωhllt_159;
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
      // debug 'Ωhllt_100', codec.cfg._max_digits_per_idx
      // debug 'Ωhllt_101', codec.cfg.zero_pad_length
      this.eq((Ωhllt_102 = function() {
        return codec.cfg._base;
      }), 128);
      this.eq((Ωhllt_103 = function() {
        return codec.cfg._max_integer;
      }), +16383);
      this.eq((Ωhllt_104 = function() {
        return codec.cfg._min_integer;
      }), -16383);
      this.eq((Ωhllt_105 = function() {
        return codec.cfg._pmag_list[2];
      }), 'ù');
      this.eq((Ωhllt_106 = function() {
        return codec.cfg._nmag_list[2];
      }), 'Í');
      this.eq((Ωhllt_107 = function() {
        return codec.encode(codec.cfg._max_integer);
      }), 'ùÆÆ');
      this.eq((Ωhllt_108 = function() {
        return codec.encode(codec.cfg._min_integer);
      }), 'Í!!');
      this.eq((Ωhllt_109 = function() {
        return codec.decode('Í!!');
      }), [-16383]);
      this.throws((Ωhllt_110 = function() {
        return codec.decode('Ç!!!!!!!!');
      }), /not a valid sortkey/);
//.......................................................................................................
      for (idx = i = 0, len = probes.length; i < len; idx = ++i) {
        [vdx, sk_matcher] = probes[idx];
        usk = codec.encode(vdx);
        this.eq((Ωhllt_111 = function() {
          return usk;
        }), sk_matcher);
        // echo rpr usk
        psk = usk.padEnd(10, codec.cfg._cipher);
        usk = usk.padEnd(10, ' ');
        unpadded_lines.push(`${usk} ${rpr(vdx)} ${idx}`);
        padded_lines.push(`${psk} ${rpr(vdx)} ${idx}`);
      }
      //.......................................................................................................
      this.eq((Ωhllt_112 = function() {
        return codec.cfg._max_digits_per_idx;
      }), 2);
      this.eq((Ωhllt_113 = function() {
        return codec.cfg._max_zpun;
      }), 20);
      this.eq((Ωhllt_114 = function() {
        return codec.cfg._naught;
      }), '!');
      this.eq((Ωhllt_115 = function() {
        return codec.cfg._nova;
      }), 'Æ');
      this.eq((Ωhllt_116 = function() {
        return codec.cfg._cipher;
      }), 'ã');
      this.eq((Ωhllt_117 = function() {
        return codec.cfg.nmag;
      }), ' ÎÍ');
      this.eq((Ωhllt_118 = function() {
        return codec.cfg.pmag;
      }), ' øù');
      this.eq((Ωhllt_119 = function() {
        return codec.cfg._pmag_list[codec.cfg._max_digits_per_idx];
      }), 'ù');
      this.eq((Ωhllt_120 = function() {
        return codec.encode(-16383);
      }), 'Í!!');
      this.eq((Ωhllt_121 = function() {
        return codec.encode(-16382);
      }), 'Í!#');
      this.eq((Ωhllt_122 = function() {
        return codec.encode(-129);
      }), 'ÍÅÅ');
      this.eq((Ωhllt_123 = function() {
        return codec.encode(-128);
      }), 'ÍÅÆ');
      this.eq((Ωhllt_124 = function() {
        return codec.encode(-127);
      }), 'Î!');
      this.eq((Ωhllt_125 = function() {
        return codec.encode(-80);
      }), 'ÎR');
      this.eq((Ωhllt_126 = function() {
        return codec.encode(-21);
      }), 'Î±');
      this.eq((Ωhllt_127 = function() {
        return codec.encode(-21);
      }), 'Î±');
      this.eq((Ωhllt_128 = function() {
        return codec.encode(-20);
      }), 'Ï');
      this.eq((Ωhllt_129 = function() {
        return codec.encode(-1);
      }), 'â');
      this.eq((Ωhllt_130 = function() {
        return codec.encode(+0);
      }), 'ã');
      this.eq((Ωhllt_131 = function() {
        return codec.encode(+1);
      }), 'ä');
      this.eq((Ωhllt_132 = function() {
        return codec.encode(+20);
      }), '÷');
      this.eq((Ωhllt_133 = function() {
        return codec.encode(+21);
      }), 'ø8');
      this.eq((Ωhllt_134 = function() {
        return codec.encode(+127);
      }), 'øÆ');
      this.eq((Ωhllt_135 = function() {
        return codec.encode(+128);
      }), 'ù#!');
      this.eq((Ωhllt_136 = function() {
        return codec.encode(+129);
      }), 'ù##');
      this.eq((Ωhllt_137 = function() {
        return codec.encode(+16382);
      }), 'ùÆÅ');
      this.eq((Ωhllt_138 = function() {
        return codec.encode(+16383);
      }), 'ùÆÆ');
      //.......................................................................................................
      this.eq((Ωhllt_139 = function() {
        return codec.decode('Í!!');
      }), [-16383]);
      this.eq((Ωhllt_140 = function() {
        return codec.decode('Í!#');
      }), [-16382]);
      this.eq((Ωhllt_141 = function() {
        return codec.decode('ÍÅÅ');
      }), [-129]);
      this.eq((Ωhllt_142 = function() {
        return codec.decode('ÍÅÆ');
      }), [-128]);
      this.eq((Ωhllt_143 = function() {
        return codec.decode('Î!');
      }), [-127]);
      this.eq((Ωhllt_144 = function() {
        return codec.decode('Î±');
      }), [-21]);
      this.eq((Ωhllt_145 = function() {
        return codec.decode('Ï');
      }), [-20]);
      this.eq((Ωhllt_146 = function() {
        return codec.decode('â');
      }), [-1]);
      this.eq((Ωhllt_147 = function() {
        return codec.decode('ã');
      }), [0]);
      this.eq((Ωhllt_148 = function() {
        return codec.decode('ä');
      }), [1]);
      this.eq((Ωhllt_149 = function() {
        return codec.decode('÷');
      }), [20]);
      this.eq((Ωhllt_150 = function() {
        return codec.decode('ø8');
      }), [21]);
      this.eq((Ωhllt_151 = function() {
        return codec.decode('øÆ');
      }), [127]);
      this.eq((Ωhllt_152 = function() {
        return codec.decode('ù#!');
      }), [128]);
      this.eq((Ωhllt_153 = function() {
        return codec.decode('ù##');
      }), [129]);
      this.eq((Ωhllt_154 = function() {
        return codec.decode('ùÆÅ');
      }), [16382]);
      this.eq((Ωhllt_155 = function() {
        return codec.decode('ùÆÆ');
      }), [16383]);
//.......................................................................................................
      for (_ = j = 1; j <= 10; _ = ++j) {
        unpadded_lines = shuffle(unpadded_lines);
        unpadded_lines.sort();
        real_indexes = [];
        for (k = 0, len1 = unpadded_lines.length; k < len1; k++) {
          uline = unpadded_lines[k];
          // help 'Ωhllt_156', uline
          real_indexes.push(Number(uline.replace(/^.*?\s([0-9]+)$/, '$1')));
        }
        this.eq((Ωhllt_157 = function() {
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
          // help 'Ωhllt_158', rpr pline if _ is 1
          real_indexes.push(Number(pline.replace(/^.*?\s([0-9]+)$/, '$1')));
        }
        this.eq((Ωhllt_159 = function() {
          return equals(expected_indexes, real_indexes);
        }), true);
      }
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    h128_decode: function() {
      var Hollerith, codec, equals, hollerith_128, i, index_matcher, index_result, internals, j, len, len1, probes_and_matchers, ref, sortkey, type_of, unit, unit_matcher, unit_result, Ωhllt_162, Ωhllt_163, Ωhllt_165;
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
        // info 'Ωhllt_160', f"#{( rpr unit_result ) + ','}:<60c; #{rpr index_result}"
        //   @eq ( Ωhllt_161 = ->  unit_result                     ),  unit_matcher
        this.eq((Ωhllt_162 = function() {
          return index_result;
        }), index_matcher);
        this.eq((Ωhllt_163 = function() {
          return sortkey;
        }), (codec.encode(index_matcher)).padEnd(sortkey.length, codec.cfg._zpuns[0]));
        // debug 'Ωhllt_164', rpr ( codec.encode index_matcher ).padEnd sortkey.length, codec.cfg._zpuns[ 0 ]
        this.eq((Ωhllt_165 = function() {
          return codec.decode(sortkey);
        }), index_matcher);
      }
      // echo [ sortkey, index_result, unit_result, ]
      //.......................................................................................................
      // @eq     ( Ωhllt_166 = -> codec.parse '5'          ), [ { name: 'other', letters: '5', mantissa: null, index: null } ]
      // @eq     ( Ωhllt_167 = -> codec.parse 'äöü'        ), [ { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
      // @eq     ( Ωhllt_168 = -> codec.parse 'Y900äöü'    ), [ { name: 'pnum', letters: 'Y', mantissa: '900', index: 900 }, { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
      // @throws ( Ωhllt_169 = -> codec.decode '5'         ), /not a valid sortkey: unable to parse '5'/
      // @throws ( Ωhllt_170 = -> codec.decode 'äöü'       ), /not a valid sortkey: unable to parse 'äöü'/
      // @throws ( Ωhllt_171 = -> codec.decode 'äöü'       ), /not a valid sortkey: unable to parse 'ü' in 'Y900äöü'/
      // @throws ( Ωhllt_172 = -> codec.decode 'Y900äöü'   ), /not a valid sortkey: unable to parse 'Y900' in 'Y900äöü'/
      //.......................................................................................................
      // debug 'Ωhllt_173', rpr codec.encode -90 #    [ 'Í¿;ããããããã', [ -999,         ], 'nnum:Í,¿;[-999]|padding:ããããããã',                 ]
      // debug 'Ωhllt_174', rpr codec.decode 'Ç!ÆÆÆÆÆÆH' #    [ 'Í¿;ããããããã', [ -999,         ], 'nnum:Í,¿;[-999]|padding:ããããããã',                 ]
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    h10mvp2_decode_units: function() {
      /* NOTE also see corresponding test in `hengist-NG/dev/interlex/src/test-hollerith.coffee` */
      var Hollerith, codec, hollerith_10mvp2, i, index_matcher, index_result, internals, j, len, len1, probes_and_matchers, ref, sortkey, sortkey_padder, type_of, unit, unit_matcher, unit_result, Ωhllt_176, Ωhllt_177, Ωhllt_178, Ωhllt_179, Ωhllt_180, Ωhllt_181, Ωhllt_182, Ωhllt_183, Ωhllt_184, Ωhllt_185;
      ({type_of} = SFMODULES.unstable.require_type_of());
      //.......................................................................................................
      ({Hollerith, hollerith_10mvp2, internals} = require('../../../apps/hollerith'));
      // { isDeepStrictEqual: equals, } = require 'node:util'
      //.......................................................................................................
      probes_and_matchers = [['A000NNNNNN', [-999], 'nnum:A,000[-999]|padding:NNNNNN'], ['B00NNNNNNN', [-99], 'nnum:B,00[-99]|padding:NNNNNNN'], ['B09NNNNNNN', [-90], 'nnum:B,09[-90]|padding:NNNNNNN'], ['B88NNNNNNN', [-11], 'nnum:B,88[-11]|padding:NNNNNNN'], ['B89NNNNNNN', [-10], 'nnum:B,89[-10]|padding:NNNNNNN'], ['ENNNNNNNNN', [-9], 'nun:E[-9]|padding:NNNNNNNNN'], ['FNNNNNNNNN', [-8], 'nun:F[-8]|padding:NNNNNNNNN'], ['GNNNNNNNNN', [-7], 'nun:G[-7]|padding:NNNNNNNNN'], ['HNNNNNNNNN', [-6], 'nun:H[-6]|padding:NNNNNNNNN'], ['INNNNNNNNN', [-5], 'nun:I[-5]|padding:NNNNNNNNN'], ['JNNNNNNNNN', [-4], 'nun:J[-4]|padding:NNNNNNNNN'], ['KNNNNNNNNN', [-3], 'nun:K[-3]|padding:NNNNNNNNN'], ['LNNNNNNNNN', [-2], 'nun:L[-2]|padding:NNNNNNNNN'], ['MNNNNNNNNN', [-1], 'nun:M[-1]|padding:NNNNNNNNN'], ['NB79NNNNNN', [0, -20], 'zero:N[0]|nnum:B,79[-20]|padding:NNNNNN'], ['NNNNNNNNNN', [0], 'padding:NNNNNNNNNN[0]'], ['NY20NNNNNN', [0, 20], 'zero:N[0]|pnum:Y,20[20]|padding:NNNNNN'], ['WNNNNNNNNN', [9], 'pun:W[9]|padding:NNNNNNNNN'], ['Y10KNNNNNN', [10, -3], 'pnum:Y,10[10]|nun:K[-3]|padding:NNNNNN'], ['Y10LNNNNNN', [10, -2], 'pnum:Y,10[10]|nun:L[-2]|padding:NNNNNN'], ['Y10MNNNNNN', [10, -1], 'pnum:Y,10[10]|nun:M[-1]|padding:NNNNNN'], ['Y10NNNNNNN', [10], 'pnum:Y,10[10]|padding:NNNNNNN'], ['Y10ONNNNNN', [10, 1], 'pnum:Y,10[10]|pun:O[1]|padding:NNNNNN'], ['Y10Y10MNNN', [10, 10, -1], 'pnum:Y,10[10]|pnum:Y,10[10]|nun:M[-1]|padding:NNN'], ['Y10Y10NNNN', [10, 10], 'pnum:Y,10[10]|pnum:Y,10[10]|padding:NNNN'], ['Y10Y20NNNN', [10, 20], 'pnum:Y,10[10]|pnum:Y,20[20]|padding:NNNN'], ['Y20NNNNNNN', [20], 'pnum:Y,20[20]|padding:NNNNNNN'], ['Y20Y10NNNN', [20, 10], 'pnum:Y,20[20]|pnum:Y,10[10]|padding:NNNN'], ['Y90NNNNNNN', [90], 'pnum:Y,90[90]|padding:NNNNNNN'], ['Z900NNNNNN', [900], 'pnum:Z,900[900]|padding:NNNNNN'], ['NNNNNNNNN', [0], 'padding:NNNNNNNNN[0]'], ['NN', [0], 'padding:NN[0]'], ['N', [0], 'padding:N[0]'], ['Y10', [10], 'pnum:Y,10[10]'], ['K', [-3], 'nun:K[-3]']];
      //.......................................................................................................
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
        // info 'Ωhllt_175', f"#{( rpr unit_result ) + ','}:<60c; #{rpr index_result}"
        this.eq((Ωhllt_176 = function() {
          return unit_result;
        }), unit_matcher);
        this.eq((Ωhllt_177 = function() {
          return index_result;
        }), index_matcher);
        this.eq((Ωhllt_178 = function() {
          return codec.decode(sortkey);
        }), index_matcher);
        this.eq((Ωhllt_179 = function() {
          return sortkey;
        }), (codec.encode(index_matcher)).padEnd(sortkey.length, sortkey_padder));
      }
      // echo [ sortkey, index_result, unit_result, ]
      //.......................................................................................................
      this.eq((Ωhllt_180 = function() {
        return codec.parse('5');
      }), [
        {
          name: 'other',
          letters: '5',
          mantissa: null,
          index: null
        }
      ]);
      this.eq((Ωhllt_181 = function() {
        return codec.parse('äöü');
      }), [
        {
          name: 'other',
          letters: 'äöü',
          mantissa: null,
          index: null
        }
      ]);
      this.eq((Ωhllt_182 = function() {
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
      this.throws((Ωhllt_183 = function() {
        return codec.decode('5');
      }), /not a valid sortkey: unable to parse '5'/);
      this.throws((Ωhllt_184 = function() {
        return codec.decode('äöü');
      }), /not a valid sortkey: unable to parse 'äöü'/);
      this.throws((Ωhllt_185 = function() {
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
    //   debug 'Ωhllt_186', rpr codec.encode -1
    //   debug 'Ωhllt_187', rpr codec.encode -2
    //   n =   -100; urge 'Ωhllt_188', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =    -21; urge 'Ωhllt_189', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =    -20; urge 'Ωhllt_190', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =    -19; urge 'Ωhllt_191', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =     -1; urge 'Ωhllt_192', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =      0; urge 'Ωhllt_193', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =      1; urge 'Ωhllt_194', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =      2; urge 'Ωhllt_195', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =      3; urge 'Ωhllt_196', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =     10; urge 'Ωhllt_197', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =    126; urge 'Ωhllt_198', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =    127; urge 'Ωhllt_199', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =    128; urge 'Ωhllt_200', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   n =    129; urge 'Ωhllt_201', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    //   # for [ sortkey, index_matcher, unit_matcher, ] in probes_and_matchers
    //   #   unit_result     = []
    //   #   index_result    = []
    //   #   for unit in codec.parse sortkey
    //   #     unit_result.push  helpers.rpr_unit unit
    //   #     index_result.push unit.index if unit.index?
    //   #   unit_result   = unit_result.join '|'
    //   #   info 'Ωhllt_202', f"#{( rpr unit_result ) + ','}:<60c; #{rpr index_result}"
    //   # #   @eq ( Ωhllt_203 = ->  unit_result                     ),  unit_matcher
    //   #   @eq ( Ωhllt_204 = -> index_result                     ), index_matcher
    //   #   @eq ( Ωhllt_205 = -> sortkey ), ( codec.encode index_matcher ).padEnd sortkey.length, codec.cfg._zpuns[ 0 ]
    //   #   debug 'Ωhllt_206', rpr ( codec.encode index_matcher ).padEnd sortkey.length, codec.cfg._zpuns[ 0 ]
    //   #   @eq ( Ωhllt_207 = -> codec.decode sortkey  ), index_matcher
    //   #   # echo [ sortkey, index_result, unit_result, ]
    //   # #.......................................................................................................
    //   # @eq     ( Ωhllt_208 = -> codec.parse '5'         ), [ { name: 'other', letters: '5', mantissa: null, index: null } ]
    //   # @eq     ( Ωhllt_209 = -> codec.parse 'äöü'       ), [ { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
    //   # @eq     ( Ωhllt_210 = -> codec.parse 'Y900äöü'   ), [ { name: 'pnum', letters: 'Y', mantissa: '900', index: 900 }, { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
    //   # @throws ( Ωhllt_211 = -> codec.decode '5'        ), /not a valid sortkey: unable to parse '5'/
    //   # @throws ( Ωhllt_212 = -> codec.decode 'äöü'      ), /not a valid sortkey: unable to parse 'äöü'/
    //   # @throws ( Ωhllt_213 = -> codec.decode 'Y900äöü'  ), /not a valid sortkey: unable to parse 'äöü' in 'Y900äöü'/
    //   #.......................................................................................................
    //   return null

    //---------------------------------------------------------------------------------------------------------
    types: function() {
      var CFG, Hollerith_typespace, T, equals, internals, pick, type_of, Ωhllt_229, Ωhllt_230, Ωhllt_231, Ωhllt_232, Ωhllt_233, Ωhllt_234, Ωhllt_235, Ωhllt_236, Ωhllt_237, Ωhllt_238, Ωhllt_239, Ωhllt_240, Ωhllt_241, Ωhllt_242, Ωhllt_243, Ωhllt_244, Ωhllt_245, Ωhllt_246, Ωhllt_247, Ωhllt_248, Ωhllt_249, Ωhllt_250, Ωhllt_251, Ωhllt_252, Ωhllt_253, Ωhllt_254, Ωhllt_255, Ωhllt_256, Ωhllt_257, Ωhllt_258, Ωhllt_259, Ωhllt_260, Ωhllt_261, Ωhllt_262, Ωhllt_263, Ωhllt_264, Ωhllt_265, Ωhllt_266, Ωhllt_267, Ωhllt_268, Ωhllt_269, Ωhllt_270, Ωhllt_271, Ωhllt_272, Ωhllt_273, Ωhllt_274;
      ({internals, Hollerith_typespace, CFG} = require('../../../apps/hollerith/lib/types'));
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({
        isDeepStrictEqual: equals
      } = require('node:util'));
      ({pick} = SFMODULES.unstable.require_pick());
      (() => {        //.......................................................................................................
        var T, Ωhllt_214, Ωhllt_215, Ωhllt_216, Ωhllt_217, Ωhllt_218;
        T = new Hollerith_typespace();
        this.eq((Ωhllt_214 = function() {
          return T[CFG].blank;
        }), '\x20');
        this.eq((Ωhllt_215 = function() {
          return T[CFG].blank_splitter;
        }), /(?:\x20)+/gv);
        this.eq((Ωhllt_216 = function() {
          return T[CFG].blank_splitter.unicodeSets;
        }), true);
        this.eq((Ωhllt_217 = function() {
          return T[CFG].blank_splitter.global;
        }), true);
        this.eq((Ωhllt_218 = function() {
          return 'a   g  z  '.replace(T[CFG].blank_splitter, 'ü');
        }), 'aügüzü');
        return null;
      })();
      (() => {        //.......................................................................................................
        var T, Ωhllt_219, Ωhllt_220, Ωhllt_221, Ωhllt_222, Ωhllt_223, Ωhllt_224, Ωhllt_225, Ωhllt_226, Ωhllt_227, Ωhllt_228;
        T = new Hollerith_typespace({
          blank: '#'
        });
        this.eq((Ωhllt_219 = function() {
          return T[CFG].blank;
        }), '#');
        this.eq((Ωhllt_220 = function() {
          return T[CFG].blank_splitter;
        }), /(?:\x23)+/gv);
        this.eq((Ωhllt_221 = function() {
          return T[CFG].blank_splitter.unicodeSets;
        }), true);
        this.eq((Ωhllt_222 = function() {
          return T[CFG].blank_splitter.global;
        }), true);
        this.eq((Ωhllt_223 = function() {
          return 'a###g##z##'.replace(T[CFG].blank_splitter, 'ü');
        }), 'aügüzü');
        this.eq((Ωhllt_224 = function() {
          return T.magnifiers.isa('ABC XYZ');
        }), false);
        this.eq((Ωhllt_225 = function() {
          return T.magnifiers.isa('ABC#XYZ');
        }), true);
        this.eq((Ωhllt_226 = function() {
          return T.blank.isa(' ');
        }), false);
        this.eq((Ωhllt_227 = function() {
          return T.blank.isa('#');
        }), true);
        this.eq((Ωhllt_228 = function() {
          return T.blank.isa(T[CFG].blank);
        }), true);
        return null;
      })();
      //.......................................................................................................
      T = new Hollerith_typespace();
      this.eq((Ωhllt_229 = function() {
        return T.nonempty_text.isa(4);
      }), false);
      this.eq((Ωhllt_230 = function() {
        return T.nonempty_text.isa(false);
      }), false);
      this.eq((Ωhllt_231 = function() {
        return T.nonempty_text.isa('');
      }), false);
      this.eq((Ωhllt_232 = function() {
        return T.nonempty_text.isa('yes');
      }), true);
      //.......................................................................................................
      this.eq((Ωhllt_233 = function() {
        return T.incremental_text.isa('yes');
      }), false);
      this.eq((Ωhllt_234 = function() {
        return T.decremental_text.isa('yes');
      }), false);
      this.eq((Ωhllt_235 = function() {
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
      this.eq((Ωhllt_236 = function() {
        return T.incremental_text.isa('abcdefz');
      }), true);
      this.eq((Ωhllt_237 = function() {
        return T.decremental_text.isa('abcdefz');
      }), false);
      this.eq((Ωhllt_238 = function() {
        return T.incremental_text.data;
      }), {
        chrs: ['a', 'b', 'c', 'd', 'e', 'f', 'z']
      });
      this.eq((Ωhllt_239 = function() {
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
      this.eq((Ωhllt_240 = function() {
        return T.incremental_text.isa('abc0');
      }), false);
      this.eq((Ωhllt_241 = function() {
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
      this.eq((Ωhllt_242 = function() {
        return T.decremental_text.isa('cba');
      }), true);
      this.eq((Ωhllt_243 = function() {
        return T.decremental_text.data;
      }), {
        chrs: ['c', 'b', 'a']
      });
      //.......................................................................................................
      this.eq((Ωhllt_244 = function() {
        return T.magnifiers.isa('');
      }), false);
      this.eq((Ωhllt_245 = function() {
        return T.magnifiers.data;
      }), {
        message: "expected a magnifier, got an empty text"
      });
      this.eq((Ωhllt_246 = function() {
        return T.magnifiers.isa('ABC XYZ');
      }), true);
      this.eq((Ωhllt_247 = function() {
        return pick(T.magnifiers.data, ['nmag_chrs_reversed', '_pmag_list', 'nmag', 'pmag']);
      }), {
        nmag_chrs_reversed: ['A', 'B', 'C'],
        _pmag_list: [' ', 'X', 'Y', 'Z'],
        nmag: ' CBA',
        pmag: ' XYZ'
      });
      this.eq((Ωhllt_248 = function() {
        return Object.isFrozen(T.magnifiers.data.nmag_chrs_reversed);
      }), true);
      this.eq((Ωhllt_249 = function() {
        return Object.isFrozen(T.magnifiers.data._pmag_list);
      }), true);
      this.eq((Ωhllt_250 = function() {
        return T.magnifiers.isa('ABC\nXYZ');
      }), false);
      this.eq((Ωhllt_251 = function() {
        return T.magnifiers.isa('ABC\tXYZ');
      }), false);
      this.eq((Ωhllt_252 = function() {
        return T.magnifiers.isa('ABC             XYZ');
      }), true);
      this.eq((Ωhllt_253 = function() {
        return T.magnifiers.isa('ABC DX YZ');
      }), false);
      this.eq((Ωhllt_254 = function() {
        return T.magnifiers.isa('ABD CXYZ');
      }), false);
      //.......................................................................................................
      this.eq((Ωhllt_255 = function() {
        return T.uniliterals.isa(null);
      }), false);
      this.eq((Ωhllt_256 = function() {
        return T.uniliterals.isa('');
      }), false);
      this.eq((Ωhllt_257 = function() {
        return T.uniliterals.isa('VBA');
      }), false);
      this.eq((Ωhllt_258 = function() {
        return T.uniliterals.isa('EFGHIJKLM NOPQRSTUVW');
      }), false);
      this.eq((Ωhllt_259 = function() {
        return T.uniliterals.isa('EFGHIJKLM N OPQRSTUVW');
      }), true);
      this.eq((Ωhllt_260 = function() {
        return T.uniliterals.data;
      }), {
        _nuns: 'EFGHIJKLM',
        _zpuns: 'NOPQRSTUVW',
        _nuns_list: ['E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'],
        _zpuns_list: ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W']
      });
      this.eq((Ωhllt_261 = function() {
        return T.uniliterals.isa('N');
      }), true);
      this.eq((Ωhllt_262 = function() {
        return T.uniliterals.data;
      }), {
        _nuns: '',
        _zpuns: 'N',
        _nuns_list: [],
        _zpuns_list: ['N']
      });
      //.......................................................................................................
      this.throws((Ωhllt_263 = function() {
        return T.digitset.validate(null);
      }), /not a valid digitset/);
      this.throws((Ωhllt_264 = function() {
        return T.digitset.validate('');
      }), /not a valid digitset/);
      this.throws((Ωhllt_265 = function() {
        return T.digitset.validate('a');
      }), /not a valid digitset/);
      this.eq((Ωhllt_266 = function() {
        return T.digitset.validate('ab');
      }), 'ab');
      //.......................................................................................................
      this.throws((Ωhllt_267 = function() {
        return new Hollerith_typespace({
          blank: null
        });
      }), /not a valid blank/);
      this.throws((Ωhllt_268 = function() {
        return new Hollerith_typespace({
          blank: ''
        });
      }), /not a valid blank/);
      this.throws((Ωhllt_269 = function() {
        return new Hollerith_typespace({
          blank: '--'
        });
      }), /not a valid blank/);
      this.throws((Ωhllt_270 = function() {
        return (new Hollerith_typespace({
          blank: null
        })).blank.validate(null);
      }), /not a valid blank/);
      this.throws((Ωhllt_271 = function() {
        return (new Hollerith_typespace({
          blank: ''
        })).blank.validate('');
      }), /not a valid blank/);
      this.throws((Ωhllt_272 = function() {
        return (new Hollerith_typespace({
          blank: '--'
        })).blank.validate('--');
      }), /not a valid blank/);
      this.eq((Ωhllt_273 = function() {
        return (new Hollerith_typespace({
          blank: '-'
        })).blank.validate('-');
      }), '-');
      this.eq((Ωhllt_274 = function() {
        return (new Hollerith_typespace({
          blank: ' '
        })).blank.validate(' ');
      }), ' ');
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    validate_and_compile_cfg_general: function() {
      var CFG, Hollerith, Hollerith_typespace, internals, is_frozen, Ωhllt_275;
      ({internals, Hollerith} = require('../../../apps/hollerith'));
      ({Hollerith_typespace, CFG} = require('../../../apps/hollerith/lib/types'));
      ({
        // { type_of,                    } = SFMODULES.unstable.require_type_of()
        // { isDeepStrictEqual: equals,  } = require 'node:util'
        isFrozen: is_frozen
      } = Object);
      //.......................................................................................................
      /* testing a general assumption so we don't mess up: */
      this.eq((Ωhllt_275 = function() {
        return (Number.MAX_SAFE_INTEGER - 1) === -(Number.MIN_SAFE_INTEGER + 1);
      }), true);
      (() => {        //.......................................................................................................
        var Ωhllt_276, Ωhllt_277, Ωhllt_278;
        // T = new Hollerith_typespace()
        this.throws((Ωhllt_276 = function() {
          return Hollerith.validate_and_compile_cfg({});
        }), /not a valid digitset/);
        this.throws((Ωhllt_277 = function() {
          return Hollerith.validate_and_compile_cfg({
            digitset: ''
          });
        }), /not a valid digitset/);
        this.throws((Ωhllt_278 = function() {
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
        var cfg, h, Ωhllt_279, Ωhllt_280, Ωhllt_281, Ωhllt_282, Ωhllt_283, Ωhllt_284, Ωhllt_285, Ωhllt_286, Ωhllt_287, Ωhllt_288, Ωhllt_289, Ωhllt_290, Ωhllt_291, Ωhllt_292, Ωhllt_293, Ωhllt_294, Ωhllt_295, Ωhllt_296, Ωhllt_297, Ωhllt_298, Ωhllt_299, Ωhllt_300, Ωhllt_301, Ωhllt_302, Ωhllt_303, Ωhllt_304, Ωhllt_305, Ωhllt_307, Ωhllt_308, Ωhllt_309, Ωhllt_310, Ωhllt_311, Ωhllt_312, Ωhllt_313, Ωhllt_314, Ωhllt_315, Ωhllt_316, Ωhllt_317, Ωhllt_318, Ωhllt_319, Ωhllt_320, Ωhllt_321, Ωhllt_322;
        cfg = Hollerith.validate_and_compile_cfg(cfg_10);
        this.eq((Ωhllt_279 = function() {
          return cfg.blank;
        }), ' ');
        this.eq((Ωhllt_280 = function() {
          return cfg.digitset;
        }), '0123456789');
        this.eq((Ωhllt_281 = function() {
          return cfg._digits_list;
        }), Array.from('0123456789'));
        this.eq((Ωhllt_282 = function() {
          return cfg._nova;
        }), (Array.from(cfg.digitset)).at(-1));
        this.eq((Ωhllt_283 = function() {
          return cfg._leading_novas_re;
        }), /^(?:9)*(?=.+$)/gv);
        this.eq((Ωhllt_284 = function() {
          return is_frozen(cfg._digits_list);
        }), true);
        this.eq((Ωhllt_285 = function() {
          return cfg._base;
        }), 10);
        this.eq((Ωhllt_286 = function() {
          return cfg.magnifiers;
        }), 'ABC XYZ');
        this.eq((Ωhllt_287 = function() {
          return cfg.nmag;
        }), ' CBA');
        this.eq((Ωhllt_288 = function() {
          return cfg.pmag;
        }), ' XYZ');
        this.eq((Ωhllt_289 = function() {
          return cfg._nmag_list;
        }), Array.from(' CBA'));
        this.eq((Ωhllt_290 = function() {
          return cfg._pmag_list;
        }), Array.from(' XYZ'));
        this.eq((Ωhllt_291 = function() {
          return cfg.uniliterals;
        }), 'FGHIJKLM N OPQRSTUV');
        this.eq((Ωhllt_292 = function() {
          return cfg._nuns;
        }), 'FGHIJKLM');
        this.eq((Ωhllt_293 = function() {
          return cfg._zpuns;
        }), 'NOPQRSTUV');
        this.eq((Ωhllt_294 = function() {
          return cfg._max_zpun;
        }), 8);
        this.eq((Ωhllt_295 = function() {
          return cfg._min_nun;
        }), -8);
        this.eq((Ωhllt_296 = function() {
          return cfg._nuns_list;
        }), ['F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'], this.eq((Ωhllt_297 = function() {
          return cfg._zpuns_list;
        }), ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V']));
        this.eq((Ωhllt_298 = function() {
          return cfg.dimension;
        }), 3);
        this.eq((Ωhllt_299 = function() {
          return +((cfg._base ** (cfg._pmag_list.length - 1)) - 1);
        }), +999);
        this.eq((Ωhllt_300 = function() {
          return -((cfg._base ** (cfg._nmag_list.length - 1)) - 1);
        }), -999);
        this.eq((Ωhllt_301 = function() {
          return cfg._max_integer;
        }), +999);
        this.eq((Ωhllt_302 = function() {
          return cfg._min_integer;
        }), -999);
        this.eq((Ωhllt_303 = function() {
          return cfg._max_digits_per_idx;
        }), 3);
        this.eq((Ωhllt_304 = function() {
          return cfg._alphabet;
        }), '0123456789ABCFGHIJKLMNOPQRSTUVXYZ');
        //.....................................................................................................
        h = new Hollerith(cfg_10);
        this.eq((Ωhllt_305 = function() {
          return h.cfg;
        }), cfg);
        // @eq ( Ωhllt_306 = -> h.encode  -998 ), null
        this.eq((Ωhllt_307 = function() {
          return h.encode(-12);
        }), 'B87');
        this.eq((Ωhllt_308 = function() {
          return h.encode(-11);
        }), 'B88');
        this.eq((Ωhllt_309 = function() {
          return h.encode(-10);
        }), 'B89');
        this.eq((Ωhllt_310 = function() {
          return h.encode(-9);
        }), 'C0');
        this.eq((Ωhllt_311 = function() {
          return h.encode(-8);
        }), 'F');
        this.eq((Ωhllt_312 = function() {
          return h.encode(-2);
        }), 'L');
        this.eq((Ωhllt_313 = function() {
          return h.encode(-1);
        }), 'M');
        this.eq((Ωhllt_314 = function() {
          return h.encode(0);
        }), 'N');
        this.eq((Ωhllt_315 = function() {
          return h.encode(+1);
        }), 'O');
        this.eq((Ωhllt_316 = function() {
          return h.encode(+2);
        }), 'P');
        this.eq((Ωhllt_317 = function() {
          return h.encode(+8);
        }), 'V');
        this.eq((Ωhllt_318 = function() {
          return h.encode(+9);
        }), 'X9');
        this.eq((Ωhllt_319 = function() {
          return h.encode(+10);
        }), 'Y10');
        this.eq((Ωhllt_320 = function() {
          return h.encode(+11);
        }), 'Y11');
        this.eq((Ωhllt_321 = function() {
          return h.encode(+12);
        }), 'Y12');
        this.eq((Ωhllt_322 = function() {
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
        var cfg, h, Ωhllt_323, Ωhllt_324, Ωhllt_325, Ωhllt_326, Ωhllt_327, Ωhllt_328, Ωhllt_329, Ωhllt_330, Ωhllt_331, Ωhllt_332, Ωhllt_333, Ωhllt_334, Ωhllt_335, Ωhllt_336, Ωhllt_337, Ωhllt_338, Ωhllt_339, Ωhllt_340, Ωhllt_341, Ωhllt_342, Ωhllt_343, Ωhllt_344, Ωhllt_345, Ωhllt_346, Ωhllt_347, Ωhllt_348;
        cfg = Hollerith.validate_and_compile_cfg(cfg_10_no_uniliterals);
        this.eq((Ωhllt_323 = function() {
          return cfg.blank;
        }), ' ');
        this.eq((Ωhllt_324 = function() {
          return cfg.digitset;
        }), '0123456789');
        this.eq((Ωhllt_325 = function() {
          return cfg._digits_list;
        }), Array.from('0123456789'));
        this.eq((Ωhllt_326 = function() {
          return cfg._nova;
        }), (Array.from(cfg.digitset)).at(-1));
        this.eq((Ωhllt_327 = function() {
          return cfg._leading_novas_re;
        }), /^(?:9)*(?=.+$)/gv);
        this.eq((Ωhllt_328 = function() {
          return is_frozen(cfg._digits_list);
        }), true);
        this.eq((Ωhllt_329 = function() {
          return cfg._base;
        }), 10);
        this.eq((Ωhllt_330 = function() {
          return cfg.magnifiers;
        }), 'ABC XYZ');
        this.eq((Ωhllt_331 = function() {
          return cfg.nmag;
        }), ' CBA');
        this.eq((Ωhllt_332 = function() {
          return cfg.pmag;
        }), ' XYZ');
        this.eq((Ωhllt_333 = function() {
          return cfg._nmag_list;
        }), Array.from(' CBA'));
        this.eq((Ωhllt_334 = function() {
          return cfg._pmag_list;
        }), Array.from(' XYZ'));
        this.eq((Ωhllt_335 = function() {
          return cfg.uniliterals;
        }), 'N');
        this.eq((Ωhllt_336 = function() {
          return cfg._nuns;
        }), '');
        this.eq((Ωhllt_337 = function() {
          return cfg._zpuns;
        }), 'N');
        this.eq((Ωhllt_338 = function() {
          return cfg._nuns_list;
        }), []);
        this.eq((Ωhllt_339 = function() {
          return cfg._zpuns_list;
        }), ['N']);
        this.eq((Ωhllt_340 = function() {
          return cfg.dimension;
        }), 3);
        this.eq((Ωhllt_341 = function() {
          return +((cfg._base ** (cfg._pmag_list.length - 1)) - 1);
        }), +999);
        this.eq((Ωhllt_342 = function() {
          return -((cfg._base ** (cfg._nmag_list.length - 1)) - 1);
        }), -999);
        this.eq((Ωhllt_343 = function() {
          return cfg._max_integer;
        }), +999);
        this.eq((Ωhllt_344 = function() {
          return cfg._min_integer;
        }), -999);
        this.eq((Ωhllt_345 = function() {
          return cfg._max_digits_per_idx;
        }), 3);
        this.eq((Ωhllt_346 = function() {
          return cfg._alphabet;
        }), '0123456789ABCNXYZ');
        //.....................................................................................................
        h = new Hollerith(cfg_10_no_uniliterals);
        this.eq((Ωhllt_347 = function() {
          return h.cfg;
        }), cfg);
        this.eq((Ωhllt_348 = function() {
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
        digitset: '!#$%&()*+,-./0123456789:;<=>?@AB' + 'CDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abc' + 'defghijklmnopqrstuvwxyz{|}~¡¢£¤¥' + '¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆ',
        magnifiers: 'ÇÈÉÊËÌÍÎ øùúûüýþÿ',
        uniliterals: 'ÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâ ã äåæçèéêëìíîïðñòóôõö÷',
        dimension: 5
      };
      (() => {        //.......................................................................................................
        var cfg, h, Ωhllt_349, Ωhllt_350, Ωhllt_351, Ωhllt_352, Ωhllt_353, Ωhllt_354, Ωhllt_355, Ωhllt_356, Ωhllt_357, Ωhllt_358, Ωhllt_359, Ωhllt_360, Ωhllt_361, Ωhllt_362, Ωhllt_363, Ωhllt_364, Ωhllt_365, Ωhllt_368, Ωhllt_369, Ωhllt_370, Ωhllt_371;
        cfg = Hollerith.validate_and_compile_cfg(cfg_128);
        this.eq((Ωhllt_349 = function() {
          return cfg.blank;
        }), ' ');
        this.eq((Ωhllt_350 = function() {
          return cfg.digitset;
        }), '!#$%&()*+,-./0123456789:;<=>?@AB' + 'CDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abc' + 'defghijklmnopqrstuvwxyz{|}~¡¢£¤¥' + '¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆ');
        this.eq((Ωhllt_351 = function() {
          return cfg._digits_list;
        }), Array.from(cfg.digitset));
        this.eq((Ωhllt_352 = function() {
          return cfg._nova;
        }), (Array.from(cfg.digitset)).at(-1));
        this.eq((Ωhllt_353 = function() {
          return cfg._leading_novas_re;
        }), /^(?:Æ)*(?=.+$)/gv);
        this.eq((Ωhllt_354 = function() {
          return cfg.magnifiers;
        }), 'ÇÈÉÊËÌÍÎ øùúûüýþÿ');
        this.eq((Ωhllt_355 = function() {
          return cfg.nmag;
        }), ' ÎÍÌËÊÉÈÇ');
        this.eq((Ωhllt_356 = function() {
          return cfg.pmag;
        }), ' øùúûüýþÿ');
        this.eq((Ωhllt_357 = function() {
          return cfg._nmag_list;
        }), Array.from(' ÎÍÌËÊÉÈÇ'));
        this.eq((Ωhllt_358 = function() {
          return cfg._pmag_list;
        }), Array.from(' øùúûüýþÿ'));
        this.eq((Ωhllt_359 = function() {
          return cfg.uniliterals;
        }), 'ÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâ ã äåæçèéêëìíîïðñòóôõö÷');
        this.eq((Ωhllt_360 = function() {
          return cfg._nuns;
        }), 'ÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâ');
        this.eq((Ωhllt_361 = function() {
          return cfg._zpuns;
        }), 'ãäåæçèéêëìíîïðñòóôõö÷');
        this.eq((Ωhllt_362 = function() {
          return cfg._nuns_list;
        }), Array.from('ÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâ'));
        this.eq((Ωhllt_363 = function() {
          return cfg._zpuns_list;
        }), Array.from('ãäåæçèéêëìíîïðñòóôõö÷'));
        this.eq((Ωhllt_364 = function() {
          return cfg._min_integer;
        }), -((128 ** 7) - 1));
        this.eq((Ωhllt_365 = function() {
          return cfg._max_integer;
        }), +((128 ** 7) - 1));
        // @eq ( Ωhllt_366 = -> cfg._max_digits_per_idx                                         ), 3
        // @eq ( Ωhllt_367 = -> cfg._alphabet                                          ), '0123456789ABCEFGHIJKLMNOPQRSTUVWXYZ'
        //.....................................................................................................
        this.eq((Ωhllt_368 = function() {
          return is_frozen(cfg._digits_list);
        }), true);
        this.eq((Ωhllt_369 = function() {
          return cfg._base;
        }), 128);
        this.eq((Ωhllt_370 = function() {
          return cfg.dimension;
        }), 5);
        //.....................................................................................................
        h = new Hollerith(cfg_128);
        this.eq((Ωhllt_371 = function() {
          return h.cfg;
        }), cfg);
        // @eq ( Ωhllt_372 = -> h.encode [ 0, ] ), null
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
        var T, Ωhllt_373, Ωhllt_374, Ωhllt_375, Ωhllt_376, Ωhllt_377, Ωhllt_378, Ωhllt_379, Ωhllt_380, Ωhllt_381, Ωhllt_382, Ωhllt_383, Ωhllt_384, Ωhllt_385;
        T = new Hollerith_typespace();
        this.eq((Ωhllt_373 = function() {
          return T._base.isa(-1);
        }), false);
        this.eq((Ωhllt_374 = function() {
          return T._base.isa(0);
        }), false);
        this.eq((Ωhllt_375 = function() {
          return T._base.isa(+1);
        }), false);
        this.eq((Ωhllt_376 = function() {
          return T._base.isa(+2);
        }), true);
        this.eq((Ωhllt_377 = function() {
          return T._max_integer_$.isa(null);
        }), false);
        this.eq((Ωhllt_378 = function() {
          return T._max_integer_$.isa(9, 10);
        }), true);
        this.eq((Ωhllt_379 = function() {
          return T._max_integer_$.isa(99, 10);
        }), true);
        this.eq((Ωhllt_380 = function() {
          return T._max_integer_$.isa(99999999, 10);
        }), true);
        this.eq((Ωhllt_381 = function() {
          return T._max_integer_$.isa(-10, 10);
        }), false);
        this.eq((Ωhllt_382 = function() {
          return /not a positive safe integer/.test(T._max_integer_$.data.message);
        }), true);
        this.eq((Ωhllt_383 = function() {
          return T._max_integer_$.isa(0xffff, 16);
        }), true);
        this.eq((Ωhllt_384 = function() {
          return T._max_integer_$.isa(0x7fffffff, 16);
        }), false);
        this.throws((Ωhllt_385 = function() {
          return T._max_integer_$.validate(5, 10);
        }), /\(_max_integer_\$\) not a valid _max_integer_\$: 5 – x not a positive all-niners/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var R, T, Ωhllt_386;
        T = new Hollerith_typespace();
        R = {
          _base: 16,
          _max_digits_per_idx: 4
        };
        this.eq((Ωhllt_386 = function() {
          return T._max_integer_$.isa((R._base ** R._max_digits_per_idx) - 1, R._base);
        }), true);
        return null;
      })();
      (() => {        //.......................................................................................................
        var T, Ωhllt_387, Ωhllt_388, Ωhllt_389, Ωhllt_390, Ωhllt_391, Ωhllt_392, Ωhllt_393, Ωhllt_394, Ωhllt_395;
        T = new Hollerith_typespace();
        this.eq((Ωhllt_387 = function() {
          return T._max_integer_$.isa((128 ** 1) - 1, 128);
        }), true);
        this.eq((Ωhllt_388 = function() {
          return T._max_integer_$.isa((128 ** 2) - 1, 128);
        }), true);
        this.eq((Ωhllt_389 = function() {
          return T._max_integer_$.isa((128 ** 3) - 1, 128);
        }), true);
        this.eq((Ωhllt_390 = function() {
          return T._max_integer_$.isa((128 ** 4) - 1, 128);
        }), true);
        this.eq((Ωhllt_391 = function() {
          return T._max_integer_$.isa((128 ** 5) - 1, 128);
        }), true);
        this.eq((Ωhllt_392 = function() {
          return T._max_integer_$.isa((128 ** 6) - 1, 128);
        }), true);
        this.eq((Ωhllt_393 = function() {
          return T._max_integer_$.isa((128 ** 7) - 1, 128);
        }), true);
        this.eq((Ωhllt_394 = function() {
          return T._max_integer_$.isa((128 ** 8) - 1, 128);
        }), false);
        this.eq((Ωhllt_395 = function() {
          return T.create_max_integer_$({
            _base: 10,
            digits_numof: 2
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
    info('Ωhllt_396', Number.MAX_SAFE_INTEGER.toString(16));
    info('Ωhllt_397', Number.MAX_SAFE_INTEGER.toString(32));
    whisper('—————————————————————————————————');
    info('Ωhllt_398', (32 ** 4 - 1).toString(32));
    info('Ωhllt_399', (32 ** 4 - 1).toString(32));
    whisper('—————————————————————————————————');
    info('Ωhllt_400', get_required_digits(32, 32));
    info('Ωhllt_401', get_required_digits(32 ** 6, 32));
    info('Ωhllt_402', get_required_digits(1e6, 10));
    info('Ωhllt_403', get_required_digits(20, 10));
    whisper('—————————————————————————————————');
    info('Ωhllt_404', max_digits_base_10 = get_max_niner_digit_count(Number.MAX_SAFE_INTEGER, 10));
    info('Ωhllt_405', max_digits_base_16 = get_max_niner_digit_count(Number.MAX_SAFE_INTEGER, 16));
    info('Ωhllt_406', max_digits_base_32 = get_max_niner_digit_count(Number.MAX_SAFE_INTEGER, 32));
    info('Ωhllt_407', max_digits_base_36 = get_max_niner_digit_count(Number.MAX_SAFE_INTEGER, 36));
    info('Ωhllt_408', max_digits_1base_28 = get_max_niner_digit_count(Number.MAX_SAFE_INTEGER, 128));
    // for base in [ 2 .. 128 ]
    //   info 'Ωhllt_409', { base, }, ( Math.ceil log_to_base Number.MAX_SAFE_INTEGER, base ) - 1
    whisper('—————————————————————————————————');
    info('Ωhllt_410', '9'.repeat(max_digits_base_10));
    info('Ωhllt_411', 'f'.repeat(max_digits_base_16));
    info('Ωhllt_412', 'v'.repeat(max_digits_base_32));
    whisper('—————————————————————————————————');
    info('Ωhllt_413', ((base = 10) ** max_digits_base_10) - 1);
    info('Ωhllt_414', ((base = 16) ** max_digits_base_16) - 1);
    info('Ωhllt_415', ((base = 32) ** max_digits_base_32) - 1);
    info('Ωhllt_416', ((base = 36) ** max_digits_base_36) - 1);
    whisper('—————————————————————————————————');
    info('Ωhllt_417', get_max_integer(Number.MAX_SAFE_INTEGER, 10));
    info('Ωhllt_418', get_max_integer(Number.MAX_SAFE_INTEGER, 16));
    info('Ωhllt_419', get_max_integer(Number.MAX_SAFE_INTEGER, 32));
    info('Ωhllt_420', get_max_integer(Number.MAX_SAFE_INTEGER, 36));
    info('Ωhllt_421', get_max_integer(Number.MAX_SAFE_INTEGER, 128));
    whisper('—————————————————————————————————');
    info('Ωhllt_422', parseInt('9'.repeat(max_digits_base_10), 10));
    info('Ωhllt_423', parseInt('f'.repeat(max_digits_base_16), 16));
    info('Ωhllt_424', parseInt('v'.repeat(max_digits_base_32), 32));
    info('Ωhllt_425', parseInt('z'.repeat(max_digits_base_36), 36));
    info('Ωhllt_426', (parseInt('9'.repeat(max_digits_base_10), 10)) <= Number.MAX_SAFE_INTEGER);
    info('Ωhllt_427', (parseInt('f'.repeat(max_digits_base_16), 16)) <= Number.MAX_SAFE_INTEGER);
    info('Ωhllt_428', (parseInt('v'.repeat(max_digits_base_32), 32)) <= Number.MAX_SAFE_INTEGER);
    info('Ωhllt_429', (parseInt('z'.repeat(max_digits_base_36), 36)) <= Number.MAX_SAFE_INTEGER);
    whisper('—————————————————————————————————');
    info('Ωhllt_430', +999 + -999);
    info('Ωhllt_431', +999 + -1);
    info('Ωhllt_432', -(-999 - 1) + -999);
    info('Ωhllt_433', -(-999 - 1) + -998);
    info('Ωhllt_434', -(-999 - 1) + -997);
    info('Ωhllt_435', -(-999 - 1) + -3);
    info('Ωhllt_436', -(-999 - 1) + -2);
    info('Ωhllt_437', -(-999 - 1) + -1);
    info('Ωhllt_438', `${-(-999 - 1) + -3}`.replace(/^9*?(?=.$)/gv, ''));
    info('Ωhllt_439', `${-(-999 - 1) + -2}`.replace(/^9*?(?=.$)/gv, ''));
    info('Ωhllt_440', `${-(-999 - 1) + -1}`.replace(/^9*?(?=.$)/gv, ''));
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
      (new Test(guytest_cfg)).test({
        hollerith_10mvp2_big_shuffle: this.hollerith.hollerith_10mvp2_big_shuffle
      });
      return (new Test(guytest_cfg)).test({
        hollerith_128_big_shuffle: this.hollerith.hollerith_128_big_shuffle
      });
    })();
  }

  // ( new Test guytest_cfg ).test { types: @hollerith.types, }
// ( new Test guytest_cfg ).test { h10mvp2_sorting_2: @hollerith.h10mvp2_sorting_2, }
// ( new Test guytest_cfg ).test { validate_and_compile_cfg_10: @hollerith.validate_and_compile_cfg_10, }
// ( new Test guytest_cfg ).test { h10mvp2_decode_units: @hollerith.h10mvp2_decode_units, }
// ( new Test guytest_cfg ).test { get_leading_novas_re: @hollerith.get_leading_novas_re, }
// ( new Test guytest_cfg ).test { validate_and_compile_cfg: @hollerith.validate_and_compile_cfg, }
// demo_max_integer()

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsZ0JBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUE7O0VBRUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixXQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLElBSkYsRUFLRSxHQUxGLEVBTUUsSUFORixFQU9FLE9BUEYsRUFRRSxHQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBUmhDLEVBWkE7OztFQXNCQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixJQUE1Qjs7RUFDQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1Qjs7RUFDQSxTQUFBLEdBQTRCLE9BQUEsQ0FBUSw2Q0FBUixFQXpCNUI7OztFQTZCQSxPQUFBLEdBR0UsQ0FBQTs7SUFBQSxRQUFBLEVBQVUsUUFBQSxDQUFF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QUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQStCLENBQUMsR0FBaEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsTUFBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWdDLENBQUMsRUFBakM7TUFBSCxDQUFmLENBQVIsRUFBbUUsS0FBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWdDLENBQUMsRUFBakM7TUFBSCxDQUFmLENBQVIsRUFBbUUsS0FBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWdDLENBQUMsRUFBakM7TUFBSCxDQUFmLENBQVIsRUFBbUUsS0FBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWdDLENBQUMsRUFBakM7TUFBSCxDQUFmLENBQVIsRUFBbUUsS0FBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWlDLENBQUMsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsSUFBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWlDLENBQUMsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsSUFBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWlDLENBQUMsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsSUFBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWlDLENBQUMsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsSUFBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWlDLENBQUMsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsSUFBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWlDLENBQUMsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsSUFBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWlDLENBQUMsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsSUFBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWlDLENBQUMsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsSUFBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWlDLENBQUMsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsSUFBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWtDLENBQWxDO01BQUgsQ0FBZixDQUFSLEVBQW1FLEdBQW5FO01BQ0EsSUFBQyxDQUFBLEVB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QVIsRUFBbUUsZUFBZSxDQUFDLE1BQWhCLENBQXdCLENBQUMsRUFBekIsQ0FBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWdDLENBQUMsRUFBakM7TUFBSCxDQUFmLENBQVIsRUFBbUUsZUFBZSxDQUFDLE1BQWhCLENBQXdCLENBQUMsRUFBekIsQ0FBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWdDLENBQUMsRUFBakM7TUFBSCxDQUFmLENBQVIsRUFBbUUsZUFBZSxDQUFDLE1BQWhCLENBQXdCLENBQUMsRUFBekIsQ0FBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWlDLENBQUMsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWlDLENBQUMsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWlDLENBQUMsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWlDLENBQUMsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWlDLENBQUMsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWlDLENBQUMsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWlDLENBQUMsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWlDLENBQUMsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFDLGNBQWhCLENBQWlDLENBQUMsQ0FBbEM7TUFBSCxDQUFmLENBQVIsRUFBbUUsZUFBZSxDQUFDLE1BQWhCLENBQXlCLENBQUMsQ0FBMUIsQ0FBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsZUFBZSxDQUFD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QUEsQ0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsZ0JBQUEsRUFBQSxtQkFBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsU0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxZQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsWUFBQSxFQUFBLE9BQUEsRUFBQSxVQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUEsRUFBQSxjQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUE7TUFBSSxDQUFBLENBQUUsU0FBRixFQUNFLG1CQURGLEVBRUUsU0FGRixDQUFBLEdBRThCLE9BQUEsQ0FBUSx5QkFBUixDQUY5QjtN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TUFBYixDQUFkLENBQUosRUFBNkUsS0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxtQkFBWjtNQUF2QixDQUFkLENBQUosRUFBOEUsR0FBOUU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEtBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsS0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEtBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsS0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEdBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsS0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEdBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsS0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEdBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsSUFBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEVBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsSUFBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEVBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsSUFBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEVBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsSUFBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEVBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsR0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLENBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsR0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLENBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsR0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLENBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsR0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEVBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsR0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEVBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsSUFBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEdBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsSUFBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEdBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsS0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEdBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsS0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEtBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsS0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFDLEtBQWQ7TUFBSCxDQUFkLENBQUosRUFBNkUsS0FBN0UsRUE5Rko7O01BZ0dJLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxLQUFLLENBQUMsTUFBTixDQUFhLEtBQWI7TUFBSCxDQUFkLENBQUosRUFBNkUsQ0FBRSxDQUFDLEtBQUgsQ0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxLQUFiO01BQUgsQ0FBZCxDQUFKLEVBQTZFLENBQUUsQ0FBQyxLQUFILENBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsS0FBYjtNQUFILENBQWQsQ0FBSixFQUE2RSxDQUFFLENBQUMsR0FBSCxDQUE3RTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxLQUFLLENBQUMsTUFBTixDQUFhLEtBQWI7TUFBSCxDQUFkLENBQUosRUFBNkUsQ0FBRSxDQUFDLEdBQUgsQ0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxJQUFiO01BQUgsQ0FBZCxDQUFKLEVBQTZFLENBQUUsQ0FBQyxHQUFILENBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsSUFBYjtNQUFILENBQWQsQ0FBSixFQUE2RSxDQUFFLENBQUMsRUFBSCxDQUE3RTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxLQUFLLENBQUMsTUFBTixDQUFhLEdBQWI7TUFBSCxDQUFkLENBQUosRUFBNkUsQ0FBRSxDQUFDLEVBQUgsQ0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxHQUFiO01BQUgsQ0FBZCxDQUFKLEVBQTZFLENBQUUsQ0FBQyxDQUFILENBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsR0FBYjtNQUFILENBQWQsQ0FBSixFQUE2RSxDQUFFLENBQUYsQ0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxHQUFiO01BQUgsQ0FBZCxDQUFKLEVBQTZFLENBQUUsQ0FBRixDQUE3RTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxLQUFLLENBQUMsTUFBTixDQUFhLEdBQWI7TUFBSCxDQUFkLENBQUosRUFBNkUsQ0FBRSxFQUFGLENBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsSUFBYjtNQUFILENBQWQsQ0FBSixFQUE2RSxDQUFFLEVBQUYsQ0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxJQUFiO01BQUgsQ0FBZCxDQUFKLEVBQTZFLENBQUUsR0FBRixDQUE3RTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxLQUFLLENBQUMsTUFBTixDQUFhLEtBQWI7TUFBSCxDQUFkLENBQUosRUFBNkUsQ0FBRSxHQUFGLENBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsS0FBYjtNQUFILENBQWQsQ0FBSixFQUE2RSxDQUFFLEdBQUYsQ0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxLQUFiO01BQUgsQ0FBZCxDQUFKLEVBQTZFLENBQUUsS0FBRixDQUE3RTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxLQUFLLENBQUMsTUFBTixDQUFhLEtBQWI7TUFBSCxDQUFkLENBQUosRUFBNkUsQ0FBRSxLQUFGLENBQTdFLEVBaEhKOztNQWtISSxLQUFTLDJCQUFUO1FBQ0UsY0FBQSxHQUFpQixPQUFBLENBQVEsY0FBUjtRQUNqQixjQUFjLENBQUMsSUFBZixDQUFBO1FBQ0EsWUFBQSxHQUFlO1FBQ2YsS0FBQSxrREFBQTtvQ0FBQTs7VUFFRSxZQUFZLENBQUMsSUFBYixDQUFrQixNQUFBLENBQU8sS0FBSyxDQUFDLE9BQU4sQ0FBYyxpQkFBZCxFQUFpQyxJQUFqQyxDQUFQLENBQWxCO1FBRkY7UUFHQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLE1BQUEsQ0FBTyxnQkFBUCxFQUF5QixZQUF6QjtRQUFILENBQWQsQ0FBSixFQUE4RCxLQUE5RDtNQVBGLENBbEhKOztNQTJISSxLQUFTLDJCQUFUO1FBQ0UsWUFBQSxHQUFlLE9BQUEsQ0FBUSxZQUFSO1FBQ2YsWUFBWSxDQUFDLElBQWIsQ0FBQTtRQUNBLFlBQUEsR0FBZTtRQUNmLEtBQUEsNERBQUE7b0NBQUE7O1VBRUUsWUFBWSxDQUFDLElBQWIsQ0FBa0IsTUFBQSxDQUFPLEtBQUssQ0FBQyxPQUFOLENBQWMsaUJBQWQsRUFBaUMsSUFBakMsQ0FBUCxDQUFsQjtRQUZGO1FBR0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxNQUFBLENBQU8sZ0JBQVAsRUFBeUIsWUFBekI7UUFBSCxDQUFkLENBQUosRUFBOEQsSUFBOUQ7TUFQRixDQTNISjs7QUFvSUksYUFBTztJQXJJYSxDQTVZdEI7O0lBb2hCQSxXQUFBLEVBQWEsUUFBQSxDQUFBLENBQUE7QUFDZixVQUFBLFNBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLGFBQUEsRUFBQSxDQUFBLEVBQUEsYUFBQSxFQUFBLFlBQUEsRUFBQSxTQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsbUJBQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsWUFBQSxFQUFBLFdBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBO01BQUksQ0FBQSxDQUFFLFNBQUYsRUFDRSxhQURGLEVBRUUsU0FGRixDQUFBLEdBRThCLE9BQUEsQ0FBUSx5QkFBUixDQUY5QjtNQUdBLENBQUEsQ0FBRSxPQUFGLENBQUEsR0FBOEIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxlQUFuQixDQUFBLENBQTlCO01BQ0EsQ0FBQTtRQUFFLGlCQUFBLEVBQW1CO01BQXJCLENBQUEsR0FBaUMsT0FBQSxDQUFRLFdBQVIsQ0FBakMsRUFKSjs7TUFNSSxtQkFBQSxHQUFzQixDQUNwQixDQUFFLFlBQUYsRUFBZ0IsQ0FBRSxDQUFDLEdBQUgsQ0FBaEIsRUFBbUMsaUNBQW5DLENBRG9CLEVBRXBCLENBQUUsWUFBRixFQUFnQixDQUFFLENBQUMsRUFBSCxDQUFoQixFQUFtQyxnQ0FBbkMsQ0FGb0IsRUFHcEIsQ0FBRSxZQUFGLEVBQWdCLENBQUUsQ0FBQyxFQUFILENBQWhCLEVBQW1DLGdDQUFuQyxDQUhvQixFQUlwQixDQUFFLFlBQUYsRUFBZ0IsQ0FBRSxDQUFDLEVBQUgsQ0FBaEIsRUFBbUMsOEJBQW5DLENBSm9CLEVBS3BCLENBQUUsWUFBRixFQUFnQixDQUFFLENBQUMsRUFBSCxDQUFoQixFQUFtQyw4QkFBbkMsQ0FMb0IsRUFNcEIsQ0FBRSxZQUFGLEVBQWdCLENBQUUsQ0FBQyxDQUFILENBQWhCLEVBQW1DLDZCQUFuQyxDQU5vQixFQU9wQixDQUFFLFlBQUYsRUFBZ0IsQ0FBRSxDQUFDLENBQUgsQ0FBaEIsRUFBbUMsNkJBQW5DLENBUG9CLEVBUXBCLENBQUUsWUFBRixFQUFnQixDQUFFLENBQUMsQ0FBSCxDQUFoQixFQUFtQyw2QkFBbkMsQ0FSb0IsRUFTcEIsQ0FBRSxZQUFGLEVBQWdCLENBQUUsQ0FBQyxDQUFILENBQWhCLEVBQW1DLDZCQUFuQyxDQVRvQixFQVVwQixDQUFFLFlBQUYsRUFBZ0IsQ0FBRSxDQUFDLENBQUgsQ0FBaEIsRUFBbUMsNkJBQW5DLENBVm9CLEVBV3BCLENBQUUsWUFBRixFQUFnQixDQUFFLENBQUMsQ0FBSCxDQUFoQixFQUFtQyw2QkFBbkMsQ0FYb0IsRUFZcEIsQ0FBRSxZQUFGLEVBQWdCLENBQUUsQ0FBQyxDQUFILENBQWhCLEVBQW1DLDZCQUFuQyxDQVpvQixFQWFwQixDQUFFLFlBQUYsRUFBZ0IsQ0FBRSxDQUFDLENBQUgsQ0FBaEIsRUFBbUMsNkJBQW5DLENBYm9CLEVBY3BCLENBQUUsWUFBRixFQUFnQixDQUFFLENBQUMsQ0FBSCxDQUFoQixFQUFtQyw2QkFBbkMsQ0Fkb0IsRUFlcEIsQ0FBRSxZQUFGLEVBQWdCLENBQUUsQ0FBRixFQUFLLENBQUMsRUFBTixDQUFoQixFQUFtQyx1Q0FBbkMsQ0Fmb0IsRUFnQnBCLENBQUUsWUFBRixFQUFnQixDQUFFLENBQUYsQ0FBaEIsRUFBbUMsdUJBQW5DLENBaEJvQixFQWlCcEIsQ0FBRSxZQUFGLEVBQWdCLENBQUUsQ0FBRixFQUFLLEVBQUwsQ0FBaEIsRUFBbUMsc0NBQW5DLENBakJvQixFQWtCcEIsQ0FBRSxZQUFGLEVBQWdCLENBQUUsQ0FBRixDQUFoQixFQUFtQyw0QkFBbkMsQ0FsQm9CLEVBbUJwQixDQUFFLFlBQUYsRUFBZ0IsQ0FBRSxFQUFGLEVBQU0sQ0FBQyxDQUFQLENBQWhCLEVBQW1DLHNDQUFuQyxDQW5Cb0IsRUFvQnBCLENBQUUsWUFBRixFQUFnQixDQUFFLEVBQUYsRUFBTSxDQUFDLENBQVAsQ0FBaEIsRUFBbUMsc0NBQW5DLENBcEJvQixFQXFCcEIsQ0FBRSxZQUFGLEVBQWdCLENBQUUsRUFBRixFQUFNLENBQUMsQ0FBUCxDQUFoQixFQUFtQyxzQ0FBbkMsQ0FyQm9CLEVBc0JwQixDQUFFLFlBQUYsRUFBZ0IsQ0FBRSxFQUFGLENBQWhCLEVBQW1DLDZCQUFuQyxDQXRCb0IsRUF1QnBCLENBQUUsWUFBRixFQUFnQixDQUFFLEVBQUYsRUFBTSxDQUFOLENBQWhCLEVBQW1DLHFDQUFuQyxDQXZCb0IsRUF3QnBCLENBQUUsWUFBRixFQUFnQixDQUFFLEVBQUYsRUFBTSxFQUFOLEVBQVUsQ0FBQyxDQUFYLENBQWhCLEVBQW1DLCtDQUFuQyxDQXhCb0IsRUF5QnBCLENBQUUsWUFBRixFQUFnQixDQUFFLEVBQUYsRUFBTSxFQUFOLENBQWhCLEVBQW1DLHNDQUFuQyxDQXpCb0IsRUEwQnBCLENBQUUsWUFBRixFQUFnQixDQUFFLEVBQUYsRUFBTSxFQUFOLENBQWhCLEVBQW1DLHNDQUFuQyxDQTFCb0IsRUEyQnBCLENBQUUsWUFBRixFQUFnQixDQUFFLEVBQUYsQ0FBaEIsRUFBbUMsNkJBQW5DLENBM0JvQixFQTRCcEIsQ0FBRSxZQUFGLEVBQWdCLENBQUUsRUFBRixFQUFNLEVBQU4sQ0FBaEIsRUFBbUMsc0NBQW5DLENBNUJvQixFQTZCcEIsQ0FBRSxZQUFGLEVBQWdCLENBQUUsRUFBRixDQUFoQixFQUFtQywrQkFBbkMsQ0E3Qm9CLEVBOEJwQixDQUFFLFlBQUYsRUFBZ0IsQ0FBRSxHQUFGLENBQWhCLEVBQW1DLGdDQUFuQyxDQTlCb0IsRUFOMUI7O01BdUNJLEtBQUEsR0FBUTtNQUNSLEtBQUEscURBQUE7UUFBSSxDQUFFLE9BQUYsRUFBVyxhQUFYLEVBQTBCLFlBQTFCO1FBQ0YsV0FBQSxHQUFrQjtRQUNsQixZQUFBLEdBQWtCO0FBQ2xCO1FBQUEsS0FBQSx1Q0FBQTs7VUFDRSxXQUFXLENBQUMsSUFBWixDQUFrQixPQUFPLENBQUMsUUFBUixDQUFpQixJQUFqQixDQUFsQjtVQUNBLElBQWdDLGtCQUFoQztZQUFBLFlBQVksQ0FBQyxJQUFiLENBQWtCLElBQUksQ0FBQyxLQUF2QixFQUFBOztRQUZGO1FBR0EsV0FBQSxHQUFnQixXQUFXLENBQUMsSUFBWixDQUFpQixHQUFqQixFQUx0Qjs7O1FBUU0sSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRztRQUFILENBQWQsQ0FBSixFQUF5RCxhQUF6RDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUc7UUFBSCxDQUFkLENBQUosRUFBZ0MsQ0FBRSxLQUFLLENBQUMsTUFBTixDQUFhLGFBQWIsQ0FBRixDQUE4QixDQUFDLE1BQS9CLENBQXNDLE9BQU8sQ0FBQyxNQUE5QyxFQUFzRCxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFGLENBQXRFLENBQWhDLEVBVE47O1FBV00sSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxLQUFLLENBQUMsTUFBTixDQUFhLE9BQWI7UUFBSCxDQUFkLENBQUosRUFBOEMsYUFBOUM7TUFaRixDQXhDSjs7Ozs7Ozs7Ozs7OztBQWlFSSxhQUFPO0lBbEVJLENBcGhCYjs7SUF5bEJBLG9CQUFBLEVBQXNCLFFBQUEsQ0FBQSxDQUFBLEVBQUE7O0FBQ3hCLFVBQUEsU0FBQSxFQUFBLEtBQUEsRUFBQSxnQkFBQSxFQUFBLENBQUEsRUFBQSxhQUFBLEVBQUEsWUFBQSxFQUFBLFNBQUEsRUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxtQkFBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsY0FBQSxFQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsWUFBQSxFQUFBLFdBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQTtNQUNJLENBQUEsQ0FBRSxPQUFGLENBQUEsR0FBOEIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxlQUFuQixDQUFBLENBQTlCLEVBREo7O01BR0ksQ0FBQSxDQUFFLFNBQUYsRUFDRSxnQkFERixFQUVFLFNBRkYsQ0FBQSxHQUU4QixPQUFBLENBQVEseUJBQVIsQ0FGOUIsRUFISjs7O01BUUksbUJBQUEsR0FBc0IsQ0FDcEIsQ0FBRSxZQUFGLEVBQWdCLENBQUUsQ0FBQyxHQUFILENBQWhCLEVBQWlDLGlDQUFqQyxDQURvQixFQUVwQixDQUFFLFlBQUYsRUFBZ0IsQ0FBRSxDQUFDLEVBQUgsQ0FBaEIsRUFBaUMsZ0NBQWpDLENBRm9CLEVBR3BCLENBQUUsWUFBRixFQUFnQixDQUFFLENBQUMsRUFBSCxDQUFoQixFQUFpQyxnQ0FBakMsQ0FIb0IsRUFJcEIsQ0FBRSxZQUFGLEVBQWdCLENBQUUsQ0FBQyxFQUFILENBQWhCLEVBQWlDLGdDQUFqQyxDQUpvQixFQUtwQixDQUFFLFlBQUYsRUFBZ0IsQ0FBRSxDQUFDLEVBQUgsQ0FBaEIsRUFBaUMsZ0NBQWpDLENBTG9CLEVBTXBCLENBQUUsWUFBRixFQUFnQixDQUFFLENBQUMsQ0FBSCxDQUFoQixFQUFpQyw2QkFBakMsQ0FOb0IsRUFPcEIsQ0FBRSxZQUFGLEVBQWdCLENBQUUsQ0FBQyxDQUFILENBQWhCLEVBQWlDLDZCQUFqQyxDQVBvQixFQVFwQixDQUFFLFlBQUYsRUFBZ0IsQ0FBRSxDQUFDLENBQUgsQ0FBaEIsRUFBaUMsNkJBQWpDLENBUm9CLEVBU3BCLENBQUUsWUFBRixFQUFnQixDQUFFLENBQUMsQ0FBSCxDQUFoQixFQUFpQyw2QkFBakMsQ0FUb0IsRUFVcEIsQ0FBRSxZQUFGLEVBQWdCLENBQUUsQ0FBQyxDQUFILENBQWhCLEVBQWlDLDZCQUFqQyxDQVZvQixFQVdwQixDQUFFLFlBQUYsRUFBZ0IsQ0FBRSxDQUFDLENBQUgsQ0FBaEIsRUFBaUMsNkJBQWpDLENBWG9CLEVBWXBCLENBQUUsWUFBRixFQUFnQixDQUFFLENBQUMsQ0FBSCxDQUFoQixFQUFpQyw2QkFBakMsQ0Fab0IsRUFhcEIsQ0FBRSxZQUFGLEVBQWdCLENBQUUsQ0FBQyxDQUFILENBQWhCLEVBQWlDLDZCQUFqQyxDQWJvQixFQWNwQixDQUFFLFlBQUYsRUFBZ0IsQ0FBRSxDQUFDLENBQUgsQ0FBaEIsRUFBaUMsNkJBQWpDLENBZG9CLEVBZXBCLENBQUUsWUFBRixFQUFnQixDQUFFLENBQUYsRUFBSyxDQUFDLEVBQU4sQ0FBaEIsRUFBaUMseUNBQWpDLENBZm9CLEVBZ0JwQixDQUFFLFlBQUYsRUFBZ0IsQ0FBRSxDQUFGLENBQWhCLEVBQWlDLHVCQUFqQyxDQWhCb0IsRUFpQnBCLENBQUUsWUFBRixFQUFnQixDQUFFLENBQUYsRUFBSyxFQUFMLENBQWhCLEVBQWlDLHdDQUFqQyxDQWpCb0IsRUFrQnBCLENBQUUsWUFBRixFQUFnQixDQUFFLENBQUYsQ0FBaEIsRUFBaUMsNEJBQWpDLENBbEJvQixFQW1CcEIsQ0FBRSxZQUFGLEVBQWdCLENBQUUsRUFBRixFQUFNLENBQUMsQ0FBUCxDQUFoQixFQUFpQyx3Q0FBakMsQ0FuQm9CLEVBb0JwQixDQUFFLFlBQUYsRUFBZ0IsQ0FBRSxFQUFGLEVBQU0sQ0FBQyxDQUFQLENBQWhCLEVBQWlDLHdDQUFqQyxDQXBCb0IsRUFxQnBCLENBQUUsWUFBRixFQUFnQixDQUFFLEVBQUYsRUFBTSxDQUFDLENBQVAsQ0FBaEIsRUFBaUMsd0NBQWpDLENBckJvQixFQXNCcEIsQ0FBRSxZQUFGLEVBQWdCLENBQUUsRUFBRixDQUFoQixFQUFpQywrQkFBakMsQ0F0Qm9CLEVBdUJwQixDQUFFLFlBQUYsRUFBZ0IsQ0FBRSxFQUFGLEVBQU0sQ0FBTixDQUFoQixFQUFpQyx1Q0FBakMsQ0F2Qm9CLEVBd0JwQixDQUFFLFlBQUYsRUFBZ0IsQ0FBRSxFQUFGLEVBQU0sRUFBTixFQUFVLENBQUMsQ0FBWCxDQUFoQixFQUFpQyxtREFBakMsQ0F4Qm9CLEVBeUJwQixDQUFFLFlBQUYsRUFBZ0IsQ0FBRSxFQUFGLEVBQU0sRUFBTixDQUFoQixFQUFpQywwQ0FBakMsQ0F6Qm9CLEVBMEJwQixDQUFFLFlBQUYsRUFBZ0IsQ0FBRSxFQUFGLEVBQU0sRUFBTixDQUFoQixFQUFpQywwQ0FBakMsQ0ExQm9CLEVBMkJwQixDQUFFLFlBQUYsRUFBZ0IsQ0FBRSxFQUFGLENBQWhCLEVBQWlDLCtCQUFqQyxDQTNCb0IsRUE0QnBCLENBQUUsWUFBRixFQUFnQixDQUFFLEVBQUYsRUFBTSxFQUFOLENBQWhCLEVBQWlDLDBDQUFqQyxDQTVCb0IsRUE2QnBCLENBQUUsWUFBRixFQUFnQixDQUFFLEVBQUYsQ0FBaEIsRUFBaUMsK0JBQWpDLENBN0JvQixFQThCcEIsQ0FBRSxZQUFGLEVBQWdCLENBQUUsR0FBRixDQUFoQixFQUFpQyxnQ0FBakMsQ0E5Qm9CLEVBK0JwQixDQUFFLFdBQUYsRUFBZ0IsQ0FBRSxDQUFGLENBQWhCLEVBQWlDLHNCQUFqQyxDQS9Cb0IsRUFnQ3BCLENBQUUsSUFBRixFQUFnQixDQUFFLENBQUYsQ0FBaEIsRUFBaUMsZUFBakMsQ0FoQ29CLEVBaUNwQixDQUFFLEdBQUYsRUFBZ0IsQ0FBRSxDQUFGLENBQWhCLEVBQWlDLGNBQWpDLENBakNvQixFQWtDcEIsQ0FBRSxLQUFGLEVBQWdCLENBQUUsRUFBRixDQUFoQixFQUFpQyxlQUFqQyxDQWxDb0IsRUFtQ3BCLENBQUUsR0FBRixFQUFnQixDQUFFLENBQUMsQ0FBSCxDQUFoQixFQUFpQyxXQUFqQyxDQW5Db0IsRUFSMUI7O01BOENJLEtBQUEsR0FBa0I7TUFDbEIsY0FBQSxHQUFrQixLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBRSxDQUFGLEVBL0MzQzs7TUFpREksS0FBQSxxREFBQTtRQUFJLENBQUUsT0FBRixFQUFXLGFBQVgsRUFBMEIsWUFBMUI7UUFDRixXQUFBLEdBQWtCO1FBQ2xCLFlBQUEsR0FBa0I7QUFDbEI7UUFBQSxLQUFBLHVDQUFBOztVQUNFLFdBQVcsQ0FBQyxJQUFaLENBQWtCLE9BQU8sQ0FBQyxRQUFSLENBQWlCLElBQWpCLENBQWxCO1VBQ0EsSUFBZ0Msa0JBQWhDO1lBQUEsWUFBWSxDQUFDLElBQWIsQ0FBa0IsSUFBSSxDQUFDLEtBQXZCLEVBQUE7O1FBRkY7UUFHQSxXQUFBLEdBQWdCLFdBQVcsQ0FBQyxJQUFaLENBQWlCLEdBQWpCLEVBTHRCOztRQU9NLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUc7UUFBSCxDQUFkLENBQUosRUFBeUQsWUFBekQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHO1FBQUgsQ0FBZCxDQUFKLEVBQXlELGFBQXpEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxLQUFLLENBQUMsTUFBTixDQUFhLE9BQWI7UUFBSCxDQUFkLENBQUosRUFBeUQsYUFBekQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHO1FBQUgsQ0FBZCxDQUFKLEVBQXlELENBQUUsS0FBSyxDQUFDLE1BQU4sQ0FBYSxhQUFiLENBQUYsQ0FBOEIsQ0FBQyxNQUEvQixDQUFzQyxPQUFPLENBQUMsTUFBOUMsRUFBc0QsY0FBdEQsQ0FBekQ7TUFYRixDQWpESjs7O01BK0RJLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxLQUFLLENBQUMsS0FBTixDQUFZLEdBQVo7TUFBSCxDQUFkLENBQVIsRUFBb0Q7UUFBRTtVQUFFLElBQUEsRUFBTSxPQUFSO1VBQWlCLE9BQUEsRUFBUyxHQUExQjtVQUErQixRQUFBLEVBQVUsSUFBekM7VUFBK0MsS0FBQSxFQUFPO1FBQXRELENBQUY7T0FBcEQ7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLEtBQU4sQ0FBWSxLQUFaO01BQUgsQ0FBZCxDQUFSLEVBQW9EO1FBQUU7VUFBRSxJQUFBLEVBQU0sT0FBUjtVQUFpQixPQUFBLEVBQVMsS0FBMUI7VUFBaUMsUUFBQSxFQUFVLElBQTNDO1VBQWlELEtBQUEsRUFBTztRQUF4RCxDQUFGO09BQXBEO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxLQUFOLENBQVksU0FBWjtNQUFILENBQWQsQ0FBUixFQUFvRDtRQUFFO1VBQUUsSUFBQSxFQUFNLE1BQVI7VUFBZ0IsT0FBQSxFQUFTLEdBQXpCO1VBQThCLFFBQUEsRUFBVSxLQUF4QztVQUErQyxLQUFBLEVBQU87UUFBdEQsQ0FBRjtRQUErRDtVQUFFLElBQUEsRUFBTSxPQUFSO1VBQWlCLE9BQUEsRUFBUyxLQUExQjtVQUFpQyxRQUFBLEVBQVUsSUFBM0M7VUFBaUQsS0FBQSxFQUFPO1FBQXhELENBQS9EO09BQXBEO01BQ0EsSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsR0FBYjtNQUFILENBQWQsQ0FBUixFQUFvRCwwQ0FBcEQ7TUFDQSxJQUFDLENBQUEsTUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxLQUFiO01BQUgsQ0FBZCxDQUFSLEVBQW9ELDRDQUFwRDtNQUNBLElBQUMsQ0FBQSxNQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxLQUFLLENBQUMsTUFBTixDQUFhLFNBQWI7TUFBSCxDQUFkLENBQVIsRUFBb0QseURBQXBELEVBcEVKOztBQXNFSSxhQUFPO0lBdkVhLENBemxCdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBdXRCQSxLQUFBLEVBQU8sUUFBQSxDQUFBLENBQUE7QUFDVCxVQUFBLEdBQUEsRUFBQSxtQkFBQSxFQUFBLENBQUEsRUFBQSxNQUFBLEVBQUEsU0FBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUE7TUFBSSxDQUFBLENBQUUsU0FBRixFQUNFLG1CQURGLEVBRUUsR0FGRixDQUFBLEdBRWtDLE9BQUEsQ0FBUSxtQ0FBUixDQUZsQztNQUdBLENBQUEsQ0FBRSxPQUFGLENBQUEsR0FBa0MsU0FBUyxDQUFDLFFBQVEsQ0FBQyxlQUFuQixDQUFBLENBQWxDO01BQ0EsQ0FBQTtRQUFFLGlCQUFBLEVBQW1CO01BQXJCLENBQUEsR0FBa0MsT0FBQSxDQUFRLFdBQVIsQ0FBbEM7TUFDQSxDQUFBLENBQUUsSUFBRixDQUFBLEdBQWtDLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBbkIsQ0FBQSxDQUFsQztNQUVHLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsQ0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQTtRQUFNLENBQUEsR0FBSSxJQUFJLG1CQUFKLENBQUE7UUFDSixJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxHQUFELENBQUssQ0FBQztRQUFWLENBQWQsQ0FBSixFQUF5RSxNQUF6RTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDLEdBQUQsQ0FBSyxDQUFDO1FBQVYsQ0FBZCxDQUFKLEVBQXlFLGFBQXpFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsR0FBRCxDQUFLLENBQUMsY0FBYyxDQUFDO1FBQXpCLENBQWQsQ0FBSixFQUF5RSxJQUF6RTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDLEdBQUQsQ0FBSyxDQUFDLGNBQWMsQ0FBQztRQUF6QixDQUFkLENBQUosRUFBeUUsSUFBekU7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFlBQVksQ0FBQyxPQUFiLENBQXFCLENBQUMsQ0FBQyxHQUFELENBQUssQ0FBQyxjQUE1QixFQUE0QyxHQUE1QztRQUFILENBQWQsQ0FBSixFQUF5RSxRQUF6RTtBQUNBLGVBQU87TUFQTixDQUFBO01BU0EsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxDQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUE7UUFBTSxDQUFBLEdBQUksSUFBSSxtQkFBSixDQUF3QjtVQUFFLEtBQUEsRUFBTztRQUFULENBQXhCO1FBQ0osSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsR0FBRCxDQUFLLENBQUM7UUFBVixDQUFkLENBQUosRUFBeUUsR0FBekU7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxHQUFELENBQUssQ0FBQztRQUFWLENBQWQsQ0FBSixFQUF5RSxhQUF6RTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDLEdBQUQsQ0FBSyxDQUFDLGNBQWMsQ0FBQztRQUF6QixDQUFkLENBQUosRUFBeUUsSUFBekU7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxHQUFELENBQUssQ0FBQyxjQUFjLENBQUM7UUFBekIsQ0FBZCxDQUFKLEVBQXlFLElBQXpFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxZQUFZLENBQUMsT0FBYixDQUFxQixDQUFDLENBQUMsR0FBRCxDQUFLLENBQUMsY0FBNUIsRUFBNEMsR0FBNUM7UUFBSCxDQUFkLENBQUosRUFBeUUsUUFBekU7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBYixDQUFpQixTQUFqQjtRQUFILENBQWQsQ0FBSixFQUF5RSxLQUF6RTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFiLENBQWlCLFNBQWpCO1FBQUgsQ0FBZCxDQUFKLEVBQXlFLElBQXpFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQVIsQ0FBWSxHQUFaO1FBQUgsQ0FBZCxDQUFKLEVBQXlFLEtBQXpFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQVIsQ0FBWSxHQUFaO1FBQUgsQ0FBZCxDQUFKLEVBQXlFLElBQXpFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQVIsQ0FBWSxDQUFDLENBQUMsR0FBRCxDQUFLLENBQUMsS0FBbkI7UUFBSCxDQUFkLENBQUosRUFBeUUsSUFBekU7QUFDQSxlQUFPO01BWk4sQ0FBQSxJQWhCUDs7TUE4QkksQ0FBQSxHQUFJLElBQUksbUJBQUosQ0FBQTtNQUNKLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUMsYUFBYSxDQUFDLEdBQWhCLENBQW9CLENBQXBCO01BQUgsQ0FBZCxDQUFKLEVBQXlELEtBQXpEO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsR0FBaEIsQ0FBb0IsS0FBcEI7TUFBSCxDQUFkLENBQUosRUFBeUQsS0FBekQ7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFoQixDQUFvQixFQUFwQjtNQUFILENBQWQsQ0FBSixFQUF5RCxLQUF6RDtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUMsYUFBYSxDQUFDLEdBQWhCLENBQW9CLEtBQXBCO01BQUgsQ0FBZCxDQUFKLEVBQXlELElBQXpELEVBbENKOztNQW9DSSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEdBQW5CLENBQXVCLEtBQXZCO01BQUgsQ0FBZCxDQUFKLEVBQXlELEtBQXpEO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFuQixDQUF1QixLQUF2QjtNQUFILENBQWQsQ0FBSixFQUF5RCxLQUF6RDtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7TUFBdEIsQ0FBZCxDQUFKLEVBQXlEO1FBQUUsSUFBQSxFQUFNLENBQUUsR0FBRixFQUFPLEdBQVAsRUFBWSxHQUFaLENBQVI7UUFBMkIsSUFBQSxFQUFNO1VBQUUsQ0FBQSxFQUFHLEtBQUw7VUFBWSxHQUFBLEVBQUssQ0FBakI7VUFBb0IsT0FBQSxFQUFTLEdBQTdCO1VBQWtDLEdBQUEsRUFBSztRQUF2QztNQUFqQyxDQUF6RDtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsR0FBbkIsQ0FBdUIsU0FBdkI7TUFBSCxDQUFkLENBQUosRUFBeUQsSUFBekQ7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEdBQW5CLENBQXVCLFNBQXZCO01BQUgsQ0FBZCxDQUFKLEVBQXlELEtBQXpEO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztNQUF0QixDQUFkLENBQUosRUFBeUQ7UUFBRSxJQUFBLEVBQU0sQ0FBRSxHQUFGLEVBQU8sR0FBUCxFQUFZLEdBQVosRUFBaUIsR0FBakIsRUFBc0IsR0FBdEIsRUFBMkIsR0FBM0IsRUFBZ0MsR0FBaEM7TUFBUixDQUF6RDtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7TUFBdEIsQ0FBZCxDQUFKLEVBQXlEO1FBQUUsSUFBQSxFQUFNLENBQUUsR0FBRixFQUFPLEdBQVAsRUFBWSxHQUFaLEVBQWlCLEdBQWpCLEVBQXNCLEdBQXRCLEVBQTJCLEdBQTNCLEVBQWdDLEdBQWhDLENBQVI7UUFBK0MsSUFBQSxFQUFNO1VBQUUsQ0FBQSxFQUFHLFNBQUw7VUFBZ0IsR0FBQSxFQUFLLENBQXJCO1VBQXdCLE9BQUEsRUFBUyxHQUFqQztVQUFzQyxHQUFBLEVBQUs7UUFBM0M7TUFBckQsQ0FBekQ7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEdBQW5CLENBQXVCLE1BQXZCO01BQUgsQ0FBZCxDQUFKLEVBQXlELEtBQXpEO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztNQUF0QixDQUFkLENBQUosRUFBeUQ7UUFBRSxJQUFBLEVBQU0sQ0FBRSxHQUFGLEVBQU8sR0FBUCxFQUFZLEdBQVosRUFBaUIsR0FBakIsQ0FBUjtRQUFpQyxJQUFBLEVBQU07VUFBRSxDQUFBLEVBQUcsTUFBTDtVQUFhLEdBQUEsRUFBSyxDQUFsQjtVQUFxQixPQUFBLEVBQVMsR0FBOUI7VUFBbUMsR0FBQSxFQUFLO1FBQXhDO01BQXZDLENBQXpEO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFuQixDQUF1QixLQUF2QjtNQUFILENBQWQsQ0FBSixFQUF5RCxJQUF6RDtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7TUFBdEIsQ0FBZCxDQUFKLEVBQXlEO1FBQUUsSUFBQSxFQUFNLENBQUUsR0FBRixFQUFPLEdBQVAsRUFBWSxHQUFaO01BQVIsQ0FBekQsRUE5Q0o7O01BZ0RJLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQWIsQ0FBaUIsRUFBakI7TUFBSCxDQUFkLENBQUosRUFBNkUsS0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztNQUFoQixDQUFkLENBQUosRUFBNkU7UUFBRSxPQUFBLEVBQVM7TUFBWCxDQUE3RTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQWIsQ0FBaUIsU0FBakI7TUFBSCxDQUFkLENBQUosRUFBNkUsSUFBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsSUFBQSxDQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBbEIsRUFDRixDQUFFLG9CQUFGLEVBQXdCLFlBQXhCLEVBQXNDLE1BQXRDLEVBQThDLE1BQTlDLENBREU7TUFBSCxDQUFkLENBQUosRUFDOEU7UUFBRSxrQkFBQSxFQUFvQixDQUFFLEdBQUYsRUFBTyxHQUFQLEVBQVksR0FBWixDQUF0QjtRQUF5QyxVQUFBLEVBQVksQ0FBRSxHQUFGLEVBQU8sR0FBUCxFQUFZLEdBQVosRUFBaUIsR0FBakIsQ0FBckQ7UUFBNkUsSUFBQSxFQUFNLE1BQW5GO1FBQTJGLElBQUEsRUFBTTtNQUFqRyxDQUQ5RTtNQUVBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxNQUFNLENBQUMsUUFBUCxDQUFnQixDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxrQkFBbEM7TUFBSCxDQUFkLENBQUosRUFBNkUsSUFBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsTUFBTSxDQUFDLFFBQVAsQ0FBZ0IsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBbEM7TUFBSCxDQUFkLENBQUosRUFBOEUsSUFBOUU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFiLENBQWlCLFVBQWpCO01BQUgsQ0FBZCxDQUFKLEVBQTZFLEtBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBYixDQUFpQixVQUFqQjtNQUFILENBQWQsQ0FBSixFQUE2RSxLQUE3RTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQWIsQ0FBaUIscUJBQWpCO01BQUgsQ0FBZCxDQUFKLEVBQTZFLElBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBYixDQUFpQixXQUFqQjtNQUFILENBQWQsQ0FBSixFQUE2RSxLQUE3RTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQWIsQ0FBaUIsVUFBakI7TUFBSCxDQUFkLENBQUosRUFBNkUsS0FBN0UsRUEzREo7O01BNkRJLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQWQsQ0FBa0IsSUFBbEI7TUFBSCxDQUFkLENBQUosRUFBNkUsS0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFkLENBQWtCLEVBQWxCO01BQUgsQ0FBZCxDQUFKLEVBQTZFLEtBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBZCxDQUFrQixLQUFsQjtNQUFILENBQWQsQ0FBSixFQUE2RSxLQUE3RTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQWQsQ0FBa0Isc0JBQWxCO01BQUgsQ0FBZCxDQUFKLEVBQTZFLEtBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBZCxDQUFrQix1QkFBbEI7TUFBSCxDQUFkLENBQUosRUFBNkUsSUFBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQztNQUFqQixDQUFkLENBQUosRUFBNkU7UUFBRSxLQUFBLEVBQU8sV0FBVDtRQUFzQixNQUFBLEVBQVEsWUFBOUI7UUFBNEMsVUFBQSxFQUFZLENBQUUsR0FBRixFQUFPLEdBQVAsRUFBWSxHQUFaLEVBQWlCLEdBQWpCLEVBQXNCLEdBQXRCLEVBQTJCLEdBQTNCLEVBQWdDLEdBQWhDLEVBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLENBQXhEO1FBQXlHLFdBQUEsRUFBYSxDQUFFLEdBQUYsRUFBTyxHQUFQLEVBQVksR0FBWixFQUFpQixHQUFqQixFQUFzQixHQUF0QixFQUEyQixHQUEzQixFQUFnQyxHQUFoQyxFQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxFQUErQyxHQUEvQztNQUF0SCxDQUE3RTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQWQsQ0FBa0IsR0FBbEI7TUFBSCxDQUFkLENBQUosRUFBNkUsSUFBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQztNQUFqQixDQUFkLENBQUosRUFBNkU7UUFBRSxLQUFBLEVBQU8sRUFBVDtRQUFhLE1BQUEsRUFBUSxHQUFyQjtRQUEwQixVQUFBLEVBQVksRUFBdEM7UUFBMEMsV0FBQSxFQUFhLENBQUUsR0FBRjtNQUF2RCxDQUE3RSxFQXBFSjs7TUFzRUksSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBWCxDQUFvQixJQUFwQjtNQUFILENBQWQsQ0FBUixFQUE2RSxzQkFBN0U7TUFDQSxJQUFDLENBQUEsTUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFYLENBQW9CLEVBQXBCO01BQUgsQ0FBZCxDQUFSLEVBQTZFLHNCQUE3RTtNQUNBLElBQUMsQ0FBQSxNQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVgsQ0FBb0IsR0FBcEI7TUFBSCxDQUFkLENBQVIsRUFBNkUsc0JBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBWCxDQUFvQixJQUFwQjtNQUFILENBQWQsQ0FBUixFQUE2RSxJQUE3RSxFQXpFSjs7TUEyRUksSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFLLElBQUksbUJBQUosQ0FBd0I7VUFBRSxLQUFBLEVBQU87UUFBVCxDQUF4QjtNQUFMLENBQWQsQ0FBUixFQUE2RixtQkFBN0Y7TUFDQSxJQUFDLENBQUEsTUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUssSUFBSSxtQkFBSixDQUF3QjtVQUFFLEtBQUEsRUFBTztRQUFULENBQXhCO01BQUwsQ0FBZCxDQUFSLEVBQTZGLG1CQUE3RjtNQUNBLElBQUMsQ0FBQSxNQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBSyxJQUFJLG1CQUFKLENBQXdCO1VBQUUsS0FBQSxFQUFPO1FBQVQsQ0FBeEI7TUFBTCxDQUFkLENBQVIsRUFBNkYsbUJBQTdGO01BQ0EsSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUUsSUFBSSxtQkFBSixDQUF3QjtVQUFFLEtBQUEsRUFBTztRQUFULENBQXhCLENBQUYsQ0FBMkMsQ0FBQyxLQUFLLENBQUMsUUFBbEQsQ0FBMkQsSUFBM0Q7TUFBSCxDQUFkLENBQVIsRUFBNkYsbUJBQTdGO01BQ0EsSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUUsSUFBSSxtQkFBSixDQUF3QjtVQUFFLEtBQUEsRUFBTztRQUFULENBQXhCLENBQUYsQ0FBMkMsQ0FBQyxLQUFLLENBQUMsUUFBbEQsQ0FBMkQsRUFBM0Q7TUFBSCxDQUFkLENBQVIsRUFBNkYsbUJBQTdGO01BQ0EsSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUUsSUFBSSxtQkFBSixDQUF3QjtVQUFFLEtBQUEsRUFBTztRQUFULENBQXhCLENBQUYsQ0FBMkMsQ0FBQyxLQUFLLENBQUMsUUFBbEQsQ0FBMkQsSUFBM0Q7TUFBSCxDQUFkLENBQVIsRUFBNkYsbUJBQTdGO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUUsSUFBSSxtQkFBSixDQUF3QjtVQUFFLEtBQUEsRUFBTztRQUFULENBQXhCLENBQUYsQ0FBMkMsQ0FBQyxLQUFLLENBQUMsUUFBbEQsQ0FBMkQsR0FBM0Q7TUFBSCxDQUFkLENBQVIsRUFBNkYsR0FBN0Y7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBRSxJQUFJLG1CQUFKLENBQXdCO1VBQUUsS0FBQSxFQUFPO1FBQVQsQ0FBeEIsQ0FBRixDQUEyQyxDQUFDLEtBQUssQ0FBQyxRQUFsRCxDQUEyRCxHQUEzRDtNQUFILENBQWQsQ0FBUixFQUE2RixHQUE3RixFQWxGSjs7QUFvRkksYUFBTztJQXJGRixDQXZ0QlA7O0lBK3lCQSxnQ0FBQSxFQUFrQyxRQUFBLENBQUEsQ0FBQTtBQUNwQyxVQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsbUJBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBO01BQUksQ0FBQSxDQUFFLFNBQUYsRUFDRSxTQURGLENBQUEsR0FDa0MsT0FBQSxDQUFRLHlCQUFSLENBRGxDO01BRUEsQ0FBQSxDQUFFLG1CQUFGLEVBQ0UsR0FERixDQUFBLEdBQ2tDLE9BQUEsQ0FBUSxtQ0FBUixDQURsQztNQUlBLENBQUEsQ0FBQTs7O1FBQUUsUUFBQSxFQUFVO01BQVosQ0FBQSxHQUFrQyxNQUFsQyxFQU5KOzs7TUFTSSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBRSxNQUFNLENBQUMsZ0JBQVAsR0FBMEIsQ0FBNUIsQ0FBQSxLQUFtQyxDQUFDLENBQUUsTUFBTSxDQUFDLGdCQUFQLEdBQTBCLENBQTVCO01BQXZDLENBQWQsQ0FBSixFQUE0RixJQUE1RjtNQUVHLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBOztRQUNNLElBQUMsQ0FBQSxNQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsU0FBUyxDQUFDLHdCQUFWLENBQW1DLENBQUEsQ0FBbkM7UUFBSCxDQUFkLENBQVIsRUFBbUYsc0JBQW5GO1FBQ0EsSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxTQUFTLENBQUMsd0JBQVYsQ0FBbUM7WUFBRSxRQUFBLEVBQVU7VUFBWixDQUFuQztRQUFILENBQWQsQ0FBUixFQUFtRixzQkFBbkY7UUFDQSxJQUFDLENBQUEsTUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFNBQVMsQ0FBQyx3QkFBVixDQUFtQztZQUFFLFFBQUEsRUFBVTtVQUFaLENBQW5DO1FBQUgsQ0FBZCxDQUFSLEVBQW1GLHNCQUFuRjtBQUNBLGVBQU87TUFMTixDQUFBLElBWFA7O0FBa0JJLGFBQU87SUFuQnlCLENBL3lCbEM7O0lBcTBCQSwyQkFBQSxFQUE2QixRQUFBLENBQUEsQ0FBQTtBQUMvQixVQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsbUJBQUEsRUFBQSxNQUFBLEVBQUEsU0FBQSxFQUFBO01BQUksQ0FBQSxDQUFFLFNBQUYsRUFDRSxTQURGLENBQUEsR0FDa0MsT0FBQSxDQUFRLHlCQUFSLENBRGxDO01BRUEsQ0FBQSxDQUFFLG1CQUFGLEVBQ0UsR0FERixDQUFBLEdBQ2tDLE9BQUEsQ0FBUSxtQ0FBUixDQURsQztNQUlBLENBQUEsQ0FBQTs7O1FBQUUsUUFBQSxFQUFVO01BQVosQ0FBQSxHQUFrQyxNQUFsQyxFQU5KOztNQVFJLE1BQUEsR0FDRTtRQUFBLEtBQUEsRUFBYyxHQUFkO1FBQ0EsUUFBQSxFQUFjLFlBRGQ7UUFFQSxVQUFBLEVBQWMsU0FGZDtRQUdBLFdBQUEsRUFBYyxxQkFIZDtRQUlBLFNBQUEsRUFBYyxDQUpkO01BQUE7TUFNQyxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDUCxZQUFBLEdBQUEsRUFBQSxDQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUE7UUFBTSxHQUFBLEdBQU0sU0FBUyxDQUFDLHdCQUFWLENBQW1DLE1BQW5DO1FBQ04sSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBK0UsR0FBL0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUErRSxZQUEvRTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQStFLEtBQUssQ0FBQyxJQUFOLENBQVcsWUFBWCxDQUEvRTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQStFLENBQUUsS0FBSyxDQUFDLElBQU4sQ0FBVyxHQUFHLENBQUMsUUFBZixDQUFGLENBQTJCLENBQUMsRUFBNUIsQ0FBK0IsQ0FBQyxDQUFoQyxDQUEvRTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQStFLGtCQUEvRTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsU0FBQSxDQUFVLEdBQUcsQ0FBQyxZQUFkO1FBQUgsQ0FBZCxDQUFKLEVBQStFLElBQS9FO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBK0UsRUFBL0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUErRSxTQUEvRTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQStFLE1BQS9FO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBK0UsTUFBL0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUErRSxLQUFLLENBQUMsSUFBTixDQUFXLE1BQVgsQ0FBL0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUErRSxLQUFLLENBQUMsSUFBTixDQUFXLE1BQVgsQ0FBL0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUErRSxxQkFBL0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUErRSxVQUEvRTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQStFLFdBQS9FO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBZ0YsQ0FBaEY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUErRSxDQUFDLENBQWhGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBK0UsQ0FBRSxHQUFGLEVBQU8sR0FBUCxFQUFZLEdBQVosRUFBaUIsR0FBakIsRUFBc0IsR0FBdEIsRUFBMkIsR0FBM0IsRUFBZ0MsR0FBaEMsRUFBcUMsR0FBckMsQ0FBL0UsRUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUErRSxDQUFFLEdBQUYsRUFBTyxHQUFQLEVBQVksR0FBWixFQUFpQixHQUFqQixFQUFzQixHQUF0QixFQUEyQixHQUEzQixFQUFnQyxHQUFoQyxFQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUEvRSxDQURBO1FBRUEsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBK0UsQ0FBL0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBRSxDQUFFLEdBQUcsQ0FBQyxLQUFKLElBQWEsQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQWYsR0FBd0IsQ0FBMUIsQ0FBZixDQUFBLEdBQWtELENBQXBEO1FBQUosQ0FBZCxDQUFKLEVBQWlGLENBQUMsR0FBbEY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBRSxDQUFFLEdBQUcsQ0FBQyxLQUFKLElBQWEsQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQWYsR0FBd0IsQ0FBMUIsQ0FBZixDQUFBLEdBQWtELENBQXBEO1FBQUosQ0FBZCxDQUFKLEVBQWlGLENBQUMsR0FBbEY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUErRSxDQUFDLEdBQWhGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBK0UsQ0FBQyxHQUFoRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQXdGLENBQXhGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBK0UsbUNBQS9FLEVBMUJOOztRQTRCTSxDQUFBLEdBQUksSUFBSSxTQUFKLENBQWMsTUFBZDtRQUNKLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDO1FBQUwsQ0FBZCxDQUFKLEVBQThCLEdBQTlCLEVBN0JOOztRQStCTSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxNQUFGLENBQVcsQ0FBQyxFQUFaO1FBQUgsQ0FBZCxDQUFKLEVBQXVDLEtBQXZDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsTUFBRixDQUFXLENBQUMsRUFBWjtRQUFILENBQWQsQ0FBSixFQUF1QyxLQUF2QztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDLE1BQUYsQ0FBVyxDQUFDLEVBQVo7UUFBSCxDQUFkLENBQUosRUFBdUMsS0FBdkM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxNQUFGLENBQVksQ0FBQyxDQUFiO1FBQUgsQ0FBZCxDQUFKLEVBQXVDLElBQXZDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsTUFBRixDQUFZLENBQUMsQ0FBYjtRQUFILENBQWQsQ0FBSixFQUF1QyxHQUF2QztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDLE1BQUYsQ0FBWSxDQUFDLENBQWI7UUFBSCxDQUFkLENBQUosRUFBdUMsR0FBdkM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxNQUFGLENBQVksQ0FBQyxDQUFiO1FBQUgsQ0FBZCxDQUFKLEVBQXVDLEdBQXZDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsTUFBRixDQUFhLENBQWI7UUFBSCxDQUFkLENBQUosRUFBdUMsR0FBdkM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxNQUFGLENBQVksQ0FBQyxDQUFiO1FBQUgsQ0FBZCxDQUFKLEVBQXVDLEdBQXZDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsTUFBRixDQUFZLENBQUMsQ0FBYjtRQUFILENBQWQsQ0FBSixFQUF1QyxHQUF2QztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDLE1BQUYsQ0FBWSxDQUFDLENBQWI7UUFBSCxDQUFkLENBQUosRUFBdUMsR0FBdkM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxNQUFGLENBQVksQ0FBQyxDQUFiO1FBQUgsQ0FBZCxDQUFKLEVBQXVDLElBQXZDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsTUFBRixDQUFXLENBQUMsRUFBWjtRQUFILENBQWQsQ0FBSixFQUF1QyxLQUF2QztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDLE1BQUYsQ0FBVyxDQUFDLEVBQVo7UUFBSCxDQUFkLENBQUosRUFBdUMsS0FBdkM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxNQUFGLENBQVcsQ0FBQyxFQUFaO1FBQUgsQ0FBZCxDQUFKLEVBQXVDLEtBQXZDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsTUFBRixDQUFVLENBQUMsR0FBWDtRQUFILENBQWQsQ0FBSixFQUF1QyxNQUF2QztBQUNBLGVBQU87TUFoRE4sQ0FBQSxJQWZQOztBQWlFSSxhQUFPO0lBbEVvQixDQXIwQjdCOztJQTA0QkEseUNBQUEsRUFBMkMsUUFBQSxDQUFBLENBQUE7QUFDN0MsVUFBQSxHQUFBLEVBQUEsU0FBQSxFQUFBLG1CQUFBLEVBQUEscUJBQUEsRUFBQSxTQUFBLEVBQUE7TUFBSSxDQUFBLENBQUUsU0FBRixFQUNFLFNBREYsQ0FBQSxHQUNrQyxPQUFBLENBQVEseUJBQVIsQ0FEbEM7TUFFQSxDQUFBLENBQUUsbUJBQUYsRUFDRSxHQURGLENBQUEsR0FDa0MsT0FBQSxDQUFRLG1DQUFSLENBRGxDO01BSUEsQ0FBQSxDQUFBOzs7UUFBRSxRQUFBLEVBQVU7TUFBWixDQUFBLEdBQWtDLE1BQWxDLEVBTko7O01BUUkscUJBQUEsR0FDRTtRQUFBLEtBQUEsRUFBYyxHQUFkO1FBQ0EsUUFBQSxFQUFjLFlBRGQ7UUFFQSxVQUFBLEVBQWMsU0FGZDtRQUdBLFdBQUEsRUFBYyxHQUhkO1FBSUEsU0FBQSxFQUFjLENBSmQ7TUFBQTtNQU1DLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsR0FBQSxFQUFBLENBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUE7UUFBTSxHQUFBLEdBQU0sU0FBUyxDQUFDLHdCQUFWLENBQW1DLHFCQUFuQztRQUNOLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQStFLEdBQS9FO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBK0UsWUFBL0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUErRSxLQUFLLENBQUMsSUFBTixDQUFXLFlBQVgsQ0FBL0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUErRSxDQUFFLEtBQUssQ0FBQyxJQUFOLENBQVcsR0FBRyxDQUFDLFFBQWYsQ0FBRixDQUEyQixDQUFDLEVBQTVCLENBQStCLENBQUMsQ0FBaEMsQ0FBL0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUErRSxrQkFBL0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFNBQUEsQ0FBVSxHQUFHLENBQUMsWUFBZDtRQUFILENBQWQsQ0FBSixFQUErRSxJQUEvRTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQWdGLEVBQWhGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBK0UsU0FBL0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUErRSxNQUEvRTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQStFLE1BQS9FO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBZ0YsS0FBSyxDQUFDLElBQU4sQ0FBVyxNQUFYLENBQWhGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBZ0YsS0FBSyxDQUFDLElBQU4sQ0FBVyxNQUFYLENBQWhGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBK0UsR0FBL0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUFnRixFQUFoRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQWdGLEdBQWhGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBaUYsRUFBakY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUFpRixDQUFFLEdBQUYsQ0FBakY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUErRSxDQUEvRTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFFLENBQUUsR0FBRyxDQUFDLEtBQUosSUFBYSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBZixHQUF3QixDQUExQixDQUFmLENBQUEsR0FBa0QsQ0FBcEQ7UUFBSixDQUFkLENBQUosRUFBaUYsQ0FBQyxHQUFsRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFFLENBQUUsR0FBRyxDQUFDLEtBQUosSUFBYSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBZixHQUF3QixDQUExQixDQUFmLENBQUEsR0FBa0QsQ0FBcEQ7UUFBSixDQUFkLENBQUosRUFBaUYsQ0FBQyxHQUFsRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQStFLENBQUMsR0FBaEY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUErRSxDQUFDLEdBQWhGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBd0YsQ0FBeEY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUErRSxtQkFBL0UsRUF4Qk47O1FBMEJNLENBQUEsR0FBSSxJQUFJLFNBQUosQ0FBYyxxQkFBZDtRQUNKLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDO1FBQUwsQ0FBZCxDQUFKLEVBQThCLEdBQTlCO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsTUFBRixDQUFTLENBQUUsQ0FBRixDQUFUO1FBQUgsQ0FBZCxDQUFKLEVBQXdDLEdBQXhDO0FBQ0EsZUFBTztNQTlCTixDQUFBLElBZlA7O0FBK0NJLGFBQU87SUFoRGtDLENBMTRCM0M7O0lBNjdCQSw0QkFBQSxFQUE4QixRQUFBLENBQUEsQ0FBQTtBQUNoQyxVQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsbUJBQUEsRUFBQSxPQUFBLEVBQUEsU0FBQSxFQUFBO01BQUksQ0FBQSxDQUFFLFNBQUYsRUFDRSxTQURGLENBQUEsR0FDa0MsT0FBQSxDQUFRLHlCQUFSLENBRGxDO01BRUEsQ0FBQSxDQUFFLG1CQUFGLEVBQ0UsR0FERixDQUFBLEdBQ2tDLE9BQUEsQ0FBUSxtQ0FBUixDQURsQztNQUlBLENBQUEsQ0FBQTs7O1FBQUUsUUFBQSxFQUFVO01BQVosQ0FBQSxHQUFrQyxNQUFsQyxFQU5KOztNQVFJLE9BQUEsR0FHRSxDQUFBOzs7UUFBQSxRQUFBLEVBQWMsa0NBQUEsR0FDQSxrQ0FEQSxHQUVBLGtDQUZBLEdBR0Esa0NBSGQ7UUFJQSxVQUFBLEVBQWMsbUJBSmQ7UUFLQSxXQUFBLEVBQWMsNkNBTGQ7UUFNQSxTQUFBLEVBQWM7TUFOZDtNQVFDLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsR0FBQSxFQUFBLENBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBO1FBQU0sR0FBQSxHQUFNLFNBQVMsQ0FBQyx3QkFBVixDQUFtQyxPQUFuQztRQUNOLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQStFLEdBQS9FO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBK0Usa0NBQUEsR0FDQSxrQ0FEQSxHQUVBLGtDQUZBLEdBR0Esa0NBSC9FO1FBSUEsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBK0UsS0FBSyxDQUFDLElBQU4sQ0FBVyxHQUFHLENBQUMsUUFBZixDQUEvRTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQStFLENBQUUsS0FBSyxDQUFDLElBQU4sQ0FBVyxHQUFHLENBQUMsUUFBZixDQUFGLENBQTJCLENBQUMsRUFBNUIsQ0FBK0IsQ0FBQyxDQUFoQyxDQUEvRTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQStFLGtCQUEvRTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQStFLG1CQUEvRTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQStFLFdBQS9FO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBK0UsV0FBL0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUFnRixLQUFLLENBQUMsSUFBTixDQUFXLFdBQVgsQ0FBaEY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUFnRixLQUFLLENBQUMsSUFBTixDQUFXLFdBQVgsQ0FBaEY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUErRSw2Q0FBL0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUFnRixzQkFBaEY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUFnRix1QkFBaEY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWQsQ0FBSixFQUFpRixLQUFLLENBQUMsSUFBTixDQUFXLHNCQUFYLENBQWpGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBaUYsS0FBSyxDQUFDLElBQU4sQ0FBVyx1QkFBWCxDQUFqRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQStFLENBQUMsQ0FBRSxDQUFFLEdBQUEsSUFBTyxDQUFULENBQUEsR0FBZSxDQUFqQixDQUFoRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQStFLENBQUMsQ0FBRSxDQUFFLEdBQUEsSUFBTyxDQUFULENBQUEsR0FBZSxDQUFqQixDQUFoRixFQXBCTjs7OztRQXdCTSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFNBQUEsQ0FBVSxHQUFHLENBQUMsWUFBZDtRQUFILENBQWQsQ0FBSixFQUErRSxJQUEvRTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZCxDQUFKLEVBQWdGLEdBQWhGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFkLENBQUosRUFBK0UsQ0FBL0UsRUExQk47O1FBNEJNLENBQUEsR0FBSSxJQUFJLFNBQUosQ0FBYyxPQUFkO1FBQ0osSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUM7UUFBTCxDQUFkLENBQUosRUFBOEIsR0FBOUIsRUE3Qk47O0FBK0JNLGVBQU87TUFoQ04sQ0FBQSxJQW5CUDs7QUFxREksYUFBTztJQXREcUIsQ0E3N0I5Qjs7SUFzL0JBLEtBQUEsRUFBTyxRQUFBLENBQUEsQ0FBQTtBQUNULFVBQUEsR0FBQSxFQUFBLG1CQUFBLEVBQUE7TUFBSSxDQUFBLENBQUUsbUJBQUYsRUFDRSxvQkFERixFQUVFLEdBRkYsQ0FBQSxHQUVrQyxPQUFBLENBQVEsbUNBQVIsQ0FGbEM7TUFJRyxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDUCxZQUFBLENBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQTtRQUFNLENBQUEsR0FBSSxJQUFJLG1CQUFKLENBQUE7UUFDSixJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBUixDQUFZLENBQUMsQ0FBYjtRQUFILENBQWQsQ0FBUixFQUFrRyxLQUFsRztRQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFSLENBQWEsQ0FBYjtRQUFILENBQWQsQ0FBUixFQUFrRyxLQUFsRztRQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFSLENBQVksQ0FBQyxDQUFiO1FBQUgsQ0FBZCxDQUFSLEVBQWtHLEtBQWxHO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQVIsQ0FBWSxDQUFDLENBQWI7UUFBSCxDQUFkLENBQVIsRUFBa0csSUFBbEc7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBakIsQ0FBcUIsSUFBckI7UUFBSCxDQUFkLENBQVIsRUFBaUcsS0FBakc7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBakIsQ0FBcUIsQ0FBckIsRUFBaUMsRUFBakM7UUFBSCxDQUFkLENBQVIsRUFBaUcsSUFBakc7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBakIsQ0FBcUIsRUFBckIsRUFBaUMsRUFBakM7UUFBSCxDQUFkLENBQVIsRUFBaUcsSUFBakc7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBakIsQ0FBcUIsUUFBckIsRUFBaUMsRUFBakM7UUFBSCxDQUFkLENBQVIsRUFBaUcsSUFBakc7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBakIsQ0FBcUIsQ0FBQyxFQUF0QixFQUFpQyxFQUFqQztRQUFILENBQWQsQ0FBUixFQUFpRyxLQUFqRztRQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsNkJBQTZCLENBQUMsSUFBOUIsQ0FBbUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBekQ7UUFBSCxDQUFkLENBQVIsRUFBaUcsSUFBakc7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBakIsQ0FBcUIsTUFBckIsRUFBaUMsRUFBakM7UUFBSCxDQUFkLENBQVIsRUFBaUcsSUFBakc7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBakIsQ0FBcUIsVUFBckIsRUFBaUMsRUFBakM7UUFBSCxDQUFkLENBQVIsRUFBaUcsS0FBakc7UUFDQSxJQUFDLENBQUEsTUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBakIsQ0FBMEIsQ0FBMUIsRUFBNkIsRUFBN0I7UUFBSCxDQUFkLENBQVIsRUFBaUcsa0ZBQWpHO0FBQ0EsZUFBTztNQWZOLENBQUE7TUFpQkEsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBO1FBQU0sQ0FBQSxHQUFJLElBQUksbUJBQUosQ0FBQTtRQUNKLENBQUEsR0FBSTtVQUFFLEtBQUEsRUFBTyxFQUFUO1VBQWEsbUJBQUEsRUFBcUI7UUFBbEM7UUFDSixJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBakIsQ0FBcUIsQ0FBRSxDQUFDLENBQUMsS0FBRixJQUFXLENBQUMsQ0FBQyxtQkFBZixDQUFBLEdBQXVDLENBQTVELEVBQStELENBQUMsQ0FBQyxLQUFqRTtRQUFILENBQWQsQ0FBUixFQUFtRyxJQUFuRztBQUNBLGVBQU87TUFKTixDQUFBO01BTUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxDQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQTtRQUFNLENBQUEsR0FBSSxJQUFJLG1CQUFKLENBQUE7UUFDSixJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBakIsQ0FBcUIsQ0FBRSxHQUFBLElBQU8sQ0FBVCxDQUFBLEdBQWUsQ0FBcEMsRUFBdUMsR0FBdkM7UUFBSCxDQUFkLENBQVIsRUFBbUYsSUFBbkY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBakIsQ0FBcUIsQ0FBRSxHQUFBLElBQU8sQ0FBVCxDQUFBLEdBQWUsQ0FBcEMsRUFBdUMsR0FBdkM7UUFBSCxDQUFkLENBQVIsRUFBbUYsSUFBbkY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBakIsQ0FBcUIsQ0FBRSxHQUFBLElBQU8sQ0FBVCxDQUFBLEdBQWUsQ0FBcEMsRUFBdUMsR0FBdkM7UUFBSCxDQUFkLENBQVIsRUFBbUYsSUFBbkY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBakIsQ0FBcUIsQ0FBRSxHQUFBLElBQU8sQ0FBVCxDQUFBLEdBQWUsQ0FBcEMsRUFBdUMsR0FBdkM7UUFBSCxDQUFkLENBQVIsRUFBbUYsSUFBbkY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBakIsQ0FBcUIsQ0FBRSxHQUFBLElBQU8sQ0FBVCxDQUFBLEdBQWUsQ0FBcEMsRUFBdUMsR0FBdkM7UUFBSCxDQUFkLENBQVIsRUFBbUYsSUFBbkY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBakIsQ0FBcUIsQ0FBRSxHQUFBLElBQU8sQ0FBVCxDQUFBLEdBQWUsQ0FBcEMsRUFBdUMsR0FBdkM7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QWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QixJQUFDLENBQUEsU0FBL0I7TUFDQSxDQUFFLElBQUksSUFBSixDQUFTLFdBQVQsQ0FBRixDQUF3QixDQUFDLElBQXpCLENBQThCO1FBQUUsNEJBQUEsRUFBOEIsSUFBQyxDQUFBLFNBQVMsQ0FBQztNQUEzQyxDQUE5QjthQUNBLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEI7UUFBRSx5QkFBQSxFQUEyQixJQUFDLENBQUEsU0FBUyxDQUFDO01BQXhDLENBQTlCO0lBUnNDLENBQUEsSUFBeEM7OztFQTlwQ0E7Ozs7Ozs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzdHJpY3QnXG5cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnaG9sbGVyaXRoJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIGxpbWVcbiAgZ29sZFxuICByZWRcbiAgYmx1ZVxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxuIyBXR1VZICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy93ZWJndXknXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2luZ2xlLWZpbGUtbW9kdWxlcydcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmhlbHBlcnMgPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcnByX3VuaXQ6ICggdW5pdCApIC0+XG4gICAgeyBuYW1lLFxuICAgICAgbGV0dGVycyxcbiAgICAgIG1hbnRpc3NhLFxuICAgICAgaW5kZXgsICAgIH0gPSB1bml0XG4gICAgUiAgPSBcIiN7bmFtZX06I3tsZXR0ZXJzfVwiXG4gICAgUiArPSBcIiwje21hbnRpc3NhfVwiICBpZiBtYW50aXNzYT9cbiAgICBSICs9IFwiWyN7aW5kZXh9XVwiICAgIGlmIGluZGV4P1xuICAgIHJldHVybiBSXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRfcmFuZG9tX3ZkeF9wcm9kdWNlcjogKHtcbiAgICBzZWVkICAgICAgICA9IG51bGwsXG4gICAgbWluX2xlbmd0aCAgPSAxLFxuICAgIG1heF9sZW5ndGggID0gNSxcbiAgICBtaW5faWR4ICAgICA9IC05OTksXG4gICAgbWF4X2lkeCAgICAgPSArOTk5LCB9PXt9KSAtPlxuICAgIHsgR2V0X3JhbmRvbSxcbiAgICAgIGludGVybmFscywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfcmFuZG9tKClcbiAgICBnZXRfcmFuZG9tICAgICAgPSBuZXcgR2V0X3JhbmRvbSB7IHNlZWQ6IG51bGwsIG9uX3N0YXRzOiBudWxsLCB9XG4gICAgZ2V0X3JuZF9sZW5ndGggID0gZ2V0X3JhbmRvbS5pbnRlZ2VyX3Byb2R1Y2VyIHsgbWluOiBtaW5fbGVuZ3RoLCBtYXg6IG1heF9sZW5ndGgsIH1cbiAgICBnZXRfcm5kX2lkeCAgICAgPSBnZXRfcmFuZG9tLmludGVnZXJfcHJvZHVjZXIgeyBtaW46IG1pbl9pZHgsICAgIG1heDogbWF4X2lkeCwgICAgfVxuICAgIHJldHVybiBnZXRfcm5kX3ZkeCA9IC0+ICggZ2V0X3JuZF9pZHgoKSBmb3IgXyBpbiBbIDEgLi4gZ2V0X3JuZF9sZW5ndGgoKSBdIClcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBob2xsZXJpdGggPVxuXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgaW50ZXJmYWNlOiAtPlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEwLFxuICAgICAgaG9sbGVyaXRoXzEwbXZwLFxuICAgICAgaG9sbGVyaXRoXzEyOCxcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgQGVxICAgICAoIM6pYW55YnRfX18xID0gLT4gdHlwZV9vZiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgICAgICAgICAgKSwgJ2Z1bmN0aW9uJ1xuICAgICAgQGVxICAgICAoIM6pYW55YnRfX18yID0gLT4gdHlwZV9vZiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAgKSwgJ2Z1bmN0aW9uJ1xuICAgICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9sZWFkaW5nX25vdmFzX3JlOiAtPlxuICAgIHsgaW50ZXJuYWxzOiB7IHR5cGVzLCB9ICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgZ2V0X2xlYWRpbmdfbm92YXNfcmUsICAgfSA9IHR5cGVzLmludGVybmFsc1xuICAgICMgZGVidWcgJ86paGxsdF9fXzMnLCAnOTg3Jy5yZXBsYWNlIC8vLyBeICg/OiA5ICkqPyAoPz0gLiAkICkgLy8vZ3YsICcnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgQGVxICAgICAoIM6pYW55YnRfX180ID0gLT4gZ2V0X2xlYWRpbmdfbm92YXNfcmUgJzknICksIC8vLyBeICg/OiA5ICApKiAoPz0gLisgJCApIC8vL2d2XG4gICAgICBAZXEgICAgICggzqlhbnlidF9fXzUgPSAtPiBnZXRfbGVhZGluZ19ub3Zhc19yZSAnKicgKSwgLy8vIF4gKD86IFxcKiApKiAoPz0gLisgJCApIC8vL2d2XG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIF9sZWFkaW5nX25vdmFzX3JlID0gZ2V0X2xlYWRpbmdfbm92YXNfcmUgJzknXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fXzYgPSAtPiAnOTk5OScucmVwbGFjZSBfbGVhZGluZ19ub3Zhc19yZSwgJycgKSwgJzknXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fXzcgPSAtPiAgJzk5OScucmVwbGFjZSBfbGVhZGluZ19ub3Zhc19yZSwgJycgKSwgJzknXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fXzggPSAtPiAgICc5OScucmVwbGFjZSBfbGVhZGluZ19ub3Zhc19yZSwgJycgKSwgJzknXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fXzkgPSAtPiAgICAnOScucmVwbGFjZSBfbGVhZGluZ19ub3Zhc19yZSwgJycgKSwgJzknXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fMTAgPSAtPiAnOTk4OScucmVwbGFjZSBfbGVhZGluZ19ub3Zhc19yZSwgJycgKSwgJzg5J1xuICAgICAgQGVxICAgICAoIM6pYW55YnRfXzExID0gLT4gICc5ODknLnJlcGxhY2UgX2xlYWRpbmdfbm92YXNfcmUsICcnICksICc4OSdcbiAgICAgIEBlcSAgICAgKCDOqWFueWJ0X18xMiA9IC0+ICAgJzg5Jy5yZXBsYWNlIF9sZWFkaW5nX25vdmFzX3JlLCAnJyApLCAnODknXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fMTMgPSAtPiAnOTk5MicucmVwbGFjZSBfbGVhZGluZ19ub3Zhc19yZSwgJycgKSwgJzInXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fMTQgPSAtPiAgJzk5MicucmVwbGFjZSBfbGVhZGluZ19ub3Zhc19yZSwgJycgKSwgJzInXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fMTUgPSAtPiAgICc5MicucmVwbGFjZSBfbGVhZGluZ19ub3Zhc19yZSwgJycgKSwgJzInXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fMTYgPSAtPiAgICAnNycucmVwbGFjZSBfbGVhZGluZ19ub3Zhc19yZSwgJycgKSwgJzcnXG4gICAgICBAZXEgICAgICggzqlhbnlidF9fMTcgPSAtPiAgICAgJycucmVwbGFjZSBfbGVhZGluZ19ub3Zhc19yZSwgJycgKSwgJydcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoMTBtdnBfMTogLT5cbiAgICB7IEhvbGxlcml0aCxcbiAgICAgIGhvbGxlcml0aF8xMCxcbiAgICAgIGhvbGxlcml0aF8xMG12cCxcbiAgICAgIGhvbGxlcml0aF8xMjgsXG4gICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzE4ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyIC05OTkgICApLCAnSzAwMCdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMTkgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgIC05OSAgICksICdMMDAnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzIwID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAtOTAgICApLCAnTDA5J1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18yMSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgLTExICAgKSwgJ0w4OCdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMjIgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgIC0xMCAgICksICdMODknXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzIzID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTkgICApLCAnTTAnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzI0ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTggICApLCAnTTEnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzI1ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTcgICApLCAnTTInXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzI2ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTYgICApLCAnTTMnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzI3ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTUgICApLCAnTTQnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzI4ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTQgICApLCAnTTUnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzI5ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTMgICApLCAnTTYnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzMwID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTIgICApLCAnTTcnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzMxID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTEgICApLCAnTTgnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzMyID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgIDAgICApLCAnTidcbiAgICBAZXEgICAgICggzqlhbnlidF9fMzMgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAgMSAgICksICdPMSdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMzQgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICArOSAgICksICdPOSdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMzUgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICsxMCAgICksICdQMTAnXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzM2ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICArMjAgICApLCAnUDIwJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18zNyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgKzkwICAgKSwgJ1A5MCdcbiAgICBAZXEgICAgICggzqlhbnlidF9fMzggPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgIDEyMyAgICksICdRMTIzJ1xuICAgIEBlcSAgICAgKCDOqWFueWJ0X18zOSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciArOTAwICAgKSwgJ1E5MDAnXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGgxMG12cF8yOiAtPlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEwLFxuICAgICAgaG9sbGVyaXRoXzEwbXZwLFxuICAgICAgaG9sbGVyaXRoXzEyOCxcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgICAgICggzqlhbnlidF9fNDAgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgLTk5OSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgLTk5OVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X180MSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgLTk5ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgLTk5XG4gICAgQGVxICAgICAoIM6pYW55YnRfXzQyID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAtOTAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAtOTBcbiAgICBAZXEgICAgICggzqlhbnlidF9fNDMgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgIC0xMSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgIC0xMVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X180NCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgLTEwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgLTEwXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzQ1ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTkgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgLTlcbiAgICBAZXEgICAgICggzqlhbnlidF9fNDYgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtOCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAtOFxuICAgIEBlcSAgICAgKCDOqWFueWJ0X180NyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC03ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgIC03XG4gICAgQGVxICAgICAoIM6pYW55YnRfXzQ4ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTYgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgLTZcbiAgICBAZXEgICAgICggzqlhbnlidF9fNDkgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtNSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAtNVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X181MCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC00ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgIC00XG4gICAgQGVxICAgICAoIM6pYW55YnRfXzUxID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTMgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgLTNcbiAgICBAZXEgICAgICggzqlhbnlidF9fNTIgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtMiAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAtMlxuICAgIEBlcSAgICAgKCDOqWFueWJ0X181MyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC0xICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgIC0xXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzU0ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgIDAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAgIDBcbiAgICBAZXEgICAgICggzqlhbnlidF9fNTUgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAgMSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICAgMVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X181NiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgICs5ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgICs5XG4gICAgQGVxICAgICAoIM6pYW55YnRfXzU3ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICArMTAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICArMTBcbiAgICBAZXEgICAgICggzqlhbnlidF9fNTggPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICsyMCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgICsyMFxuICAgIEBlcSAgICAgKCDOqWFueWJ0X181OSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgKzkwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSAgKzkwXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzYwID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAxMjMgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlICAxMjNcbiAgICBAZXEgICAgICggzqlhbnlidF9fNjEgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgKzkwMCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgKzkwMFxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoMTBtdnBfMzogLT5cbiAgICB7IEhvbGxlcml0aCxcbiAgICAgIGhvbGxlcml0aF8xMCxcbiAgICAgIGhvbGxlcml0aF8xMG12cCxcbiAgICAgIGhvbGxlcml0aF8xMjgsXG4gICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzYyID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyIC05OTkgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgLTk5OSwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X182MyA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgLTk5ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAtOTksIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNjQgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgIC05MCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgLTkwLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzY1ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAtMTEgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgIC0xMSwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X182NiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgLTEwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAtMTAsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNjcgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtOSAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgIC05LCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzY4ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTggICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICAtOCwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X182OSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC03ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgLTcsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNzAgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtNiAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgIC02LCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzcxID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTUgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICAtNSwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X183MiA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC00ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgLTQsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNzMgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAtMyAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgIC0zLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzc0ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgLTIgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICAtMiwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X183NSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgIC0xICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgLTEsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNzYgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICAgMCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgICAwLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzc3ID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICAgIDEgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICAgMSwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X183OCA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgICs5ICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICAgKzksIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fNzkgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgICsxMCAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgKzEwLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzgwID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICArMjAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgICsyMCwgXVxuICAgIEBlcSAgICAgKCDOqWFueWJ0X184MSA9IC0+IGhvbGxlcml0aF8xMG12cC5lbmNvZGVfaW50ZWdlciAgKzkwICAgKSwgaG9sbGVyaXRoXzEwbXZwLmVuY29kZSBbICArOTAsIF1cbiAgICBAZXEgICAgICggzqlhbnlidF9fODIgPSAtPiBob2xsZXJpdGhfMTBtdnAuZW5jb2RlX2ludGVnZXIgIDEyMyAgICksIGhvbGxlcml0aF8xMG12cC5lbmNvZGUgWyAgMTIzLCBdXG4gICAgQGVxICAgICAoIM6pYW55YnRfXzgzID0gLT4gaG9sbGVyaXRoXzEwbXZwLmVuY29kZV9pbnRlZ2VyICs5MDAgICApLCBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIFsgKzkwMCwgXVxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoMTBtdnBfc29ydGluZ18xOiAtPlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEwLFxuICAgICAgaG9sbGVyaXRoXzEwbXZwLFxuICAgICAgaG9sbGVyaXRoXzEyOCxcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBzb3J0ZWRfc2luZ2xlcyA9ICggcGFkZGluZyA9IG51bGwgKSA9PlxuICAgICAgcHJvYmVzID0gW1xuICAgICAgICBbIC05OTksIF1cbiAgICAgICAgWyAgLTk5LCBdXG4gICAgICAgIFsgIC05MCwgXVxuICAgICAgICBbICAtMTEsIF1cbiAgICAgICAgWyAgLTEwLCBdXG4gICAgICAgIFsgICAtOSwgXVxuICAgICAgICBbICAgLTgsIF1cbiAgICAgICAgWyAgIC03LCBdXG4gICAgICAgIFsgICAtNiwgXVxuICAgICAgICBbICAgLTUsIF1cbiAgICAgICAgWyAgIC00LCBdXG4gICAgICAgIFsgICAtMywgXVxuICAgICAgICBbICAgLTIsIF1cbiAgICAgICAgWyAgIC0xLCBdXG4gICAgICAgIFsgICAgMCwgXVxuICAgICAgICBbICAgIDEsIF1cbiAgICAgICAgWyAgICs5LCBdXG4gICAgICAgIFsgICsxMCwgXVxuICAgICAgICBbICArMjAsIF1cbiAgICAgICAgWyAgKzkwLCBdXG4gICAgICAgIFsgIDEyMywgXVxuICAgICAgICBbICs5MDAsIF1cbiAgICAgICAgXVxuICAgICAgZm9yIHByb2JlLCBpZHggaW4gcHJvYmVzXG4gICAgICAgIHNrICAgICAgICAgICAgPSBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIHByb2JlXG4gICAgICAgIHNrICAgICAgICAgICAgPSBzay5wYWRFbmQgcGFkZGluZywgaG9sbGVyaXRoXzEwbXZwLmNmZy5fenB1bnNbIDAgXSBpZiBwYWRkaW5nP1xuICAgICAgICBwcm9iZXNbIGlkeCBdID0geyBzaywgcHJvYmUsIGlkeCwgfVxuICAgICAgcHJvYmVzLnNvcnQgKCBhLCBiICkgLT5cbiAgICAgICAgcmV0dXJuIC0xIGlmIGEuc2sgPCBiLnNrXG4gICAgICAgIHJldHVybiArMSBpZiBhLnNrID4gYi5za1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgZm9yIGVudHJ5LCBpZHggaW4gcHJvYmVzXG4gICAgICAgICMgZGVidWcgJ86paGxsdF9fODQnLCBlbnRyeVxuICAgICAgICBAZXEgKCDOqWhsbHRfXzg1ID0gLT4gZW50cnkuaWR4ICksIGlkeFxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHNvcnRlZF9zaW5nbGVzIG51bGxcbiAgICBzb3J0ZWRfc2luZ2xlcyAxMFxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoMTBtdnBfc29ydGluZ18yOiAtPlxuICAgIHsgSG9sbGVyaXRoLFxuICAgICAgaG9sbGVyaXRoXzEwbXZwLFxuICAgICAgaW50ZXJuYWxzICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHByb2JlcyA9IFtcbiAgICAgIFsgWyAtOTk5LCAgICAgICAgICAgXSwgJ0swMDAnLCAgICAgIF1cbiAgICAgIFsgWyAgLTk5LCAgICAgICAgICAgXSwgJ0wwMCcsICAgICAgIF1cbiAgICAgIFsgWyAgLTkwLCAgICAgICAgICAgXSwgJ0wwOScsICAgICAgIF1cbiAgICAgIFsgWyAgLTExLCAgICAgICAgICAgXSwgJ0w4OCcsICAgICAgIF1cbiAgICAgIFsgWyAgLTEwLCAgICAgICAgICAgXSwgJ0w4OScsICAgICAgIF1cbiAgICAgIFsgWyAgIC05LCAgICAgICAgICAgXSwgJ00wJywgICAgICAgIF1cbiAgICAgIFsgWyAgIC04LCAgICAgICAgICAgXSwgJ00xJywgICAgICAgIF1cbiAgICAgIFsgWyAgIC03LCAgICAgICAgICAgXSwgJ00yJywgICAgICAgIF1cbiAgICAgIFsgWyAgIC02LCAgICAgICAgICAgXSwgJ00zJywgICAgICAgIF1cbiAgICAgIFsgWyAgIC01LCAgICAgICAgICAgXSwgJ000JywgICAgICAgIF1cbiAgICAgIFsgWyAgIC00LCAgICAgICAgICAgXSwgJ001JywgICAgICAgIF1cbiAgICAgIFsgWyAgIC0zLCAgICAgICAgICAgXSwgJ002JywgICAgICAgIF1cbiAgICAgIFsgWyAgIC0yLCAgICAgICAgICAgXSwgJ003JywgICAgICAgIF1cbiAgICAgIFsgWyAgIC0xLCAgICAgICAgICAgXSwgJ004JywgICAgICAgIF1cbiAgICAgIFsgWyAgICswLCAgLTIwLCAgICAgXSwgJ05MMjAnLCAgICAgIF1cbiAgICAgIFsgWyAgICswLCAgICAgICAgICAgXSwgJ04nLCAgICAgICAgIF1cbiAgICAgIFsgWyAgICswLCAgKzIwLCAgICAgXSwgJ05QMjAnLCAgICAgIF1cbiAgICAgIFsgWyAgICs5LCAgICAgICAgICAgXSwgJ085JywgICAgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgIC0zLCAgICAgXSwgJ1AxME02JywgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgIC0yLCAgICAgXSwgJ1AxME03JywgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgIC0xLCAgICAgXSwgJ1AxME04JywgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgICAgICAgICAgXSwgJ1AxMCcsICAgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgICswLCAgICAgXSwgJ1AxME4nLCAgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgICsxLCAgICAgXSwgJ1AxME8xJywgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgKzEwLCAtMSwgXSwgJ1AxMFAxME04JywgIF1cbiAgICAgIFsgWyAgKzEwLCAgKzEwLCAgICAgXSwgJ1AxMFAxMCcsICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgKzIwLCAgICAgXSwgJ1AxMFAyMCcsICAgIF1cbiAgICAgIFsgWyAgKzIwLCAgICAgICAgICAgXSwgJ1AyMCcsICAgICAgIF1cbiAgICAgIFsgWyAgKzIwLCAgKzEwLCAgICAgXSwgJ1AyMFAxMCcsICAgIF1cbiAgICAgIFsgWyAgKzkwLCAgICAgICAgICAgXSwgJ1A5MCcsICAgICAgIF1cbiAgICAgIFsgWyArOTAwLCAgICAgICAgICAgXSwgJ1E5MDAnLCAgICAgIF1cbiAgICAgIF1cbiAgICB1bGluZXMgICAgICAgICAgICA9IFtdXG4gICAgcGxpbmVzICAgICAgICAgICAgPSBbXVxuICAgIGV4cGVjdGVkX2luZGV4ZXMgID0gKCBpZHggZm9yIGlkeCBpbiBbIDAgLi4uIHByb2Jlcy5sZW5ndGggXSApXG4gICAgc2h1ZmZsZSAgICAgICAgICAgPSBHVVkucm5kLmdldF9zaHVmZmxlIDU3LCA4OFxuICAgIGZvciBbIHZkeCwgc2tfbWF0Y2hlciwgXSwgaWR4IGluIHByb2Jlc1xuICAgICAgdXNrICAgPSBob2xsZXJpdGhfMTBtdnAuZW5jb2RlIHZkeFxuICAgICAgcHNrICAgPSB1c2sucGFkRW5kIDEwLCBob2xsZXJpdGhfMTBtdnAuY2ZnLl96cHVuc1sgMCBdXG4gICAgICB1c2sgICA9IHVzay5wYWRFbmQgMTAsICcgJ1xuICAgICAgdWxpbmVzLnB1c2ggXCIje3Vza30gI3tycHIgdmR4fSAje2lkeH1cIlxuICAgICAgcGxpbmVzLnB1c2ggXCIje3Bza30gI3tycHIgdmR4fSAje2lkeH1cIlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZm9yIF8gaW4gWyAxIC4uIDEwIF1cbiAgICAgIHVsaW5lcyA9IHNodWZmbGUgdWxpbmVzXG4gICAgICB1bGluZXMuc29ydCgpXG4gICAgICByZWFsX2luZGV4ZXMgPSBbXVxuICAgICAgZm9yIHVsaW5lIGluIHVsaW5lc1xuICAgICAgICAjIGhlbHAgJ86paGxsdF9fODYnLCB1bGluZVxuICAgICAgICByZWFsX2luZGV4ZXMucHVzaCBOdW1iZXIgdWxpbmUucmVwbGFjZSAvXi4qP1xccyhbMC05XSspJC8sICckMSdcbiAgICAgIEBlcSAoIM6paGxsdF9fODcgPSAtPiBlcXVhbHMgZXhwZWN0ZWRfaW5kZXhlcywgcmVhbF9pbmRleGVzICksIGZhbHNlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmb3IgXyBpbiBbIDEgLi4gMTAgXVxuICAgICAgcGxpbmVzID0gc2h1ZmZsZSBwbGluZXNcbiAgICAgIHBsaW5lcy5zb3J0KClcbiAgICAgIHJlYWxfaW5kZXhlcyA9IFtdXG4gICAgICBmb3IgcGxpbmUgaW4gcGxpbmVzXG4gICAgICAgICMgaGVscCAnzqlobGx0X184OCcsIHBsaW5lXG4gICAgICAgIHJlYWxfaW5kZXhlcy5wdXNoIE51bWJlciBwbGluZS5yZXBsYWNlIC9eLio/XFxzKFswLTldKykkLywgJyQxJ1xuICAgICAgQGVxICggzqlobGx0X184OSA9IC0+IGVxdWFscyBleHBlY3RlZF9pbmRleGVzLCByZWFsX2luZGV4ZXMgKSwgdHJ1ZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGhvbGxlcml0aF8xMG12cDJfYmlnX3NodWZmbGU6IC0+XG4gICAgeyBIb2xsZXJpdGgsXG4gICAgICBob2xsZXJpdGhfMTBtdnAyLFxuICAgICAgaW50ZXJuYWxzICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICBjb2RlYyAgICAgICAgICAgICAgICAgICAgICAgPSBob2xsZXJpdGhfMTBtdnAyXG4gICAgcm5kX3ZkeF9jZmcgICAgICAgICAgICAgICAgID1cbiAgICAgIHNlZWQ6ICAgICAgICAgbnVsbFxuICAgICAgbWluX2xlbmd0aDogICAxXG4gICAgICBtYXhfbGVuZ3RoOiAgIGNvZGVjLmNmZy5kaW1lbnNpb24gLSAxXG4gICAgICBtaW5faWR4OiAgICAgIE1hdGgubWF4IGNvZGVjLmNmZy5fbWluX2ludGVnZXIsIC0yMDAwXG4gICAgICBtYXhfaWR4OiAgICAgIE1hdGgubWluIGNvZGVjLmNmZy5fbWF4X2ludGVnZXIsICsyMDAwXG4gICAgIyBkZWJ1ZyAnzqlobGx0X185MCcsIHJuZF92ZHhfY2ZnXG4gICAgIyBkZWJ1ZyAnzqlobGx0X185MScsIGNvZGVjLmNmZy5fc29ydGtleV93aWR0aFxuICAgIGdldF9yYW5kb21fdmR4ICAgICAgICAgICAgICA9IGhlbHBlcnMuZ2V0X3JhbmRvbV92ZHhfcHJvZHVjZXIgcm5kX3ZkeF9jZmdcbiAgICBwcm9iZV9zdWJfY291bnQgICAgICAgICAgICAgPSAzXG4gICAgc2h1ZmZsZSAgICAgICAgICAgICAgICAgICAgID0gR1VZLnJuZC5nZXRfc2h1ZmZsZSA1NywgODhcbiAgICBlbmNvZGUgICAgICAgICAgICAgICAgICAgICAgPSAoIHZkeCApIC0+ICggY29kZWMuZW5jb2RlIHZkeCApLnBhZEVuZCBjb2RlYy5jZmcuX3NvcnRrZXlfd2lkdGgsIGNvZGVjLmNmZy5fY2lwaGVyXG4gICAgcHJvYmVzX3NvcnRrZXkgICAgICAgICAgICAgID0gW11cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGZvciBmaXJzdF9pZHggaW4gWyBybmRfdmR4X2NmZy5taW5faWR4IC4uIHJuZF92ZHhfY2ZnLm1heF9pZHggXVxuICAgICAgZm9yIF8gaW4gWyAxIC4uIHByb2JlX3N1Yl9jb3VudCBdXG4gICAgICAgIHZkeCA9IFsgZmlyc3RfaWR4LCBnZXRfcmFuZG9tX3ZkeCgpLi4uLCBdXG4gICAgICAgIHNrICA9IGVuY29kZSB2ZHhcbiAgICAgICAgcHJvYmVzX3NvcnRrZXkucHVzaCB7IHZkeCwgc2ssIH1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHByb2Jlc19zb3J0a2V5ICAgID0gc2h1ZmZsZSBwcm9iZXNfc29ydGtleVxuICAgIHByb2Jlc192ZHggICAgICAgID0gcHJvYmVzX3NvcnRrZXlbIC4uIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHNvcnRfYnlfdmR4ICAgICAgID0gKCBhLCBiICkgLT5cbiAgICAgIGEgPSBhLnZkeFxuICAgICAgYiA9IGIudmR4XG4gICAgICBmb3IgaWR4IGluIFsgMCAuLi4gKCBNYXRoLm1heCBhLmxlbmd0aCwgYi5sZW5ndGggKSBdXG4gICAgICAgIGRhID0gYVsgaWR4IF0gPyAwXG4gICAgICAgIGRiID0gYlsgaWR4IF0gPyAwXG4gICAgICAgIGNvbnRpbnVlIGlmIGRhIGlzIGRiXG4gICAgICAgIHJldHVybiAtMSBpZiBkYSA8IGRiXG4gICAgICAgIHJldHVybiArMVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHNvcnRfYnlfc29ydGtleSAgID0gKCBhLCBiICkgLT5cbiAgICAgIGEgPSBhLnNrXG4gICAgICBiID0gYi5za1xuICAgICAgcmV0dXJuICAwIGlmIGEgaXMgYlxuICAgICAgcmV0dXJuIC0xIGlmIGEgPCBiXG4gICAgICByZXR1cm4gKzFcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHByb2Jlc192ZHguc29ydCAgICAgc29ydF9ieV92ZHhcbiAgICBwcm9iZXNfc29ydGtleS5zb3J0IHNvcnRfYnlfc29ydGtleVxuICAgIGZvciBwcm9iZV92ZHgsIGlkeCBpbiBwcm9iZXNfdmR4XG4gICAgICBwcm9iZV9zb3J0a2V5ID0gcHJvYmVzX3NvcnRrZXlbIGlkeCBdXG4gICAgICAjIHdoaXNwZXIgJ86paGxsdF9fOTInLCAoIGdvbGQgcHJvYmVfc29ydGtleS5zayApLCAoIHJlZCBwcm9iZV92ZHgudmR4ICksICggbGltZSBwcm9iZV9zb3J0a2V5LnZkeCApXG4gICAgICBAZXEgKCDOqWhsbHRfXzkzID0gLT4gcHJvYmVfc29ydGtleS52ZHggKSwgcHJvYmVfdmR4LnZkeFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGhvbGxlcml0aF8xMjhfYmlnX3NodWZmbGU6IC0+XG4gICAgeyBIb2xsZXJpdGgsXG4gICAgICBob2xsZXJpdGhfMTI4LFxuICAgICAgaG9sbGVyaXRoXzEwbXZwMixcbiAgICAgIGludGVybmFscyAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzRGVlcFN0cmljdEVxdWFsOiBlcXVhbHMsIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgY29kZWMgICAgICAgICAgICAgICAgICAgICAgID0gaG9sbGVyaXRoXzEyOFxuICAgICMgY29kZWMgICAgICAgICAgICAgICAgICAgICAgID0gaG9sbGVyaXRoXzEwbXZwMlxuICAgIHJuZF92ZHhfY2ZnICAgICAgICAgICAgICAgICA9XG4gICAgICBzZWVkOiAgICAgICAgIG51bGxcbiAgICAgIG1pbl9sZW5ndGg6ICAgMVxuICAgICAgbWF4X2xlbmd0aDogICBjb2RlYy5jZmcuZGltZW5zaW9uIC0gMVxuICAgICAgbWluX2lkeDogICAgICBNYXRoLm1heCBjb2RlYy5jZmcuX21pbl9pbnRlZ2VyLCAtMjAwMFxuICAgICAgbWF4X2lkeDogICAgICBNYXRoLm1pbiBjb2RlYy5jZmcuX21heF9pbnRlZ2VyLCArMjAwMFxuICAgICMgZGVidWcgJ86paGxsdF9fOTQnLCBybmRfdmR4X2NmZ1xuICAgICMgZGVidWcgJ86paGxsdF9fOTUnLCBjb2RlYy5jZmcuX3NvcnRrZXlfd2lkdGhcbiAgICBnZXRfcmFuZG9tX3ZkeCAgICAgICAgICAgICAgPSBoZWxwZXJzLmdldF9yYW5kb21fdmR4X3Byb2R1Y2VyIHJuZF92ZHhfY2ZnXG4gICAgcHJvYmVfc3ViX2NvdW50ICAgICAgICAgICAgID0gM1xuICAgIHNodWZmbGUgICAgICAgICAgICAgICAgICAgICA9IEdVWS5ybmQuZ2V0X3NodWZmbGUgNTcsIDg4XG4gICAgZW5jb2RlICAgICAgICAgICAgICAgICAgICAgID0gKCB2ZHggKSAtPiAoIGNvZGVjLmVuY29kZSB2ZHggKS5wYWRFbmQgY29kZWMuY2ZnLl9zb3J0a2V5X3dpZHRoLCBjb2RlYy5jZmcuX2NpcGhlclxuICAgIHByb2Jlc19zb3J0a2V5ICAgICAgICAgICAgICA9IFtdXG4gICAgIyBkZWJ1ZyAnzqlobGx0X185NicsIHJuZF92ZHhfY2ZnOyBwcm9jZXNzLmV4aXQgMTExXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICB3YWxrX2ZpcnN0X2lkeHMgICAgICAgICAgICAgPSAtPlxuICAgICAgeWllbGQgaWR4IGZvciBpZHggaW4gWyBjb2RlYy5jZmcuX21pbl9pbnRlZ2VyICAgICAgLi4gY29kZWMuY2ZnLl9taW5faW50ZWdlciArIDEwIF1cbiAgICAgIHlpZWxkIGlkeCBmb3IgaWR4IGluIFsgcm5kX3ZkeF9jZmcubWluX2lkeCAgICAgICAgIC4uIHJuZF92ZHhfY2ZnLm1heF9pZHggICAgICAgICBdXG4gICAgICB5aWVsZCBpZHggZm9yIGlkeCBpbiBbIGNvZGVjLmNmZy5fbWF4X2ludGVnZXIgLSAxMCAuLiBjb2RlYy5jZmcuX21heF9pbnRlZ2VyICAgICAgXVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGZvciBmaXJzdF9pZHggZnJvbSB3YWxrX2ZpcnN0X2lkeHMoKVxuICAgICMgZm9yIGZpcnN0X2lkeCBpbiBbIC0xMDAgLi4gKzEwMCBdXG4gICAgICAjIGRlYnVnICfOqWhsbHRfXzk3JywgeyBmaXJzdF9pZHgsIH1cbiAgICAgIGZvciBfIGluIFsgMSAuLiBwcm9iZV9zdWJfY291bnQgXVxuICAgICAgICB2ZHggPSBbIGZpcnN0X2lkeCwgZ2V0X3JhbmRvbV92ZHgoKS4uLiwgXVxuICAgICAgICBzayAgPSBlbmNvZGUgdmR4XG4gICAgICAgIHByb2Jlc19zb3J0a2V5LnB1c2ggeyB2ZHgsIHNrLCB9XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwcm9iZXNfc29ydGtleSAgICA9IHNodWZmbGUgcHJvYmVzX3NvcnRrZXlcbiAgICBwcm9iZXNfdmR4ICAgICAgICA9IHByb2Jlc19zb3J0a2V5WyAuLiBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBzb3J0X2J5X3ZkeCAgICAgICA9ICggYSwgYiApIC0+XG4gICAgICBhID0gYS52ZHhcbiAgICAgIGIgPSBiLnZkeFxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4uICggTWF0aC5tYXggYS5sZW5ndGgsIGIubGVuZ3RoICkgXVxuICAgICAgICBkYSA9IGFbIGlkeCBdID8gMFxuICAgICAgICBkYiA9IGJbIGlkeCBdID8gMFxuICAgICAgICBjb250aW51ZSBpZiBkYSBpcyBkYlxuICAgICAgICByZXR1cm4gLTEgaWYgZGEgPCBkYlxuICAgICAgICByZXR1cm4gKzFcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBzb3J0X2J5X3NvcnRrZXkgICA9ICggYSwgYiApIC0+XG4gICAgICBhID0gYS5za1xuICAgICAgYiA9IGIuc2tcbiAgICAgIHJldHVybiAgMCBpZiBhIGlzIGJcbiAgICAgIHJldHVybiAtMSBpZiBhIDwgYlxuICAgICAgcmV0dXJuICsxXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwcm9iZXNfdmR4LnNvcnQgICAgIHNvcnRfYnlfdmR4XG4gICAgcHJvYmVzX3NvcnRrZXkuc29ydCBzb3J0X2J5X3NvcnRrZXlcbiAgICBmb3IgcHJvYmVfdmR4LCBpZHggaW4gcHJvYmVzX3ZkeFxuICAgICAgcHJvYmVfc29ydGtleSA9IHByb2Jlc19zb3J0a2V5WyBpZHggXVxuICAgICAgIyB3aGlzcGVyICfOqWhsbHRfXzk4JywgKCBnb2xkIHByb2JlX3NvcnRrZXkuc2sgKSwgKCByZWQgcHJvYmVfdmR4LnZkeCApLCAoIGxpbWUgcHJvYmVfc29ydGtleS52ZHggKVxuICAgICAgQGVxICggzqlobGx0X185OSA9IC0+IHByb2JlX3NvcnRrZXkudmR4ICksIHByb2JlX3ZkeC52ZHhcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoMTI4XzE2MzgzX3NvcnRpbmdfMjogLT5cbiAgICB7IEhvbGxlcml0aCxcbiAgICAgIGhvbGxlcml0aF8xMjhfMTYzODMsXG4gICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcHJvYmVzID0gW1xuICAgICAgWyBbIC05OTksICAgICAgICAgICBdLCAnw43CvzsnLCAgICAgXVxuICAgICAgWyBbICAtOTksICAgICAgICAgICBdLCAnw44/JywgICAgICBdXG4gICAgICBbIFsgIC05MCwgICAgICAgICAgIF0sICfDjkgnLCAgICAgIF1cbiAgICAgIFsgWyAgLTgwLCAgICAgICAgICAgXSwgJ8OOUicsICAgICAgXVxuICAgICAgWyBbICAtMjEsICAgICAgICAgICBdLCAnw47CsScsICAgICAgXVxuICAgICAgWyBbICAtMjAsICAgICAgICAgICBdLCAnw48nLCAgICAgICBdXG4gICAgICBbIFsgIC0xMSwgICAgICAgICAgIF0sICfDmCcsICAgICAgIF1cbiAgICAgIFsgWyAgLTEwLCAgICAgICAgICAgXSwgJ8OZJywgICAgICAgXVxuICAgICAgWyBbICAgLTksICAgICAgICAgICBdLCAnw5onLCAgICAgICBdXG4gICAgICBbIFsgICAtOCwgICAgICAgICAgIF0sICfDmycsICAgICAgIF1cbiAgICAgIFsgWyAgIC03LCAgICAgICAgICAgXSwgJ8OcJywgICAgICAgXVxuICAgICAgWyBbICAgLTYsICAgICAgICAgICBdLCAnw50nLCAgICAgICBdXG4gICAgICBbIFsgICAtNSwgICAgICAgICAgIF0sICfDnicsICAgICAgIF1cbiAgICAgIFsgWyAgIC00LCAgICAgICAgICAgXSwgJ8OfJywgICAgICAgXVxuICAgICAgWyBbICAgLTMsICAgICAgICAgICBdLCAnw6AnLCAgICAgICBdXG4gICAgICBbIFsgICAtMiwgICAgICAgICAgIF0sICfDoScsICAgICAgIF1cbiAgICAgIFsgWyAgIC0xLCAgICAgICAgICAgXSwgJ8OiJywgICAgICAgXVxuICAgICAgWyBbICAgKzAsICAtMjAsICAgICBdLCAnw6PDjycsICAgICAgXVxuICAgICAgWyBbICAgKzAsICAgICAgICAgICBdLCAnw6MnLCAgICAgICBdXG4gICAgICBbIFsgICArMCwgICsyMCwgICAgIF0sICfDo8O3JywgICAgICBdXG4gICAgICBbIFsgICArOSwgICAgICAgICAgIF0sICfDrCcsICAgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgIC0zLCAgICAgXSwgJ8Otw6AnLCAgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgIC0yLCAgICAgXSwgJ8Otw6EnLCAgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgIC0xLCAgICAgXSwgJ8Otw6InLCAgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgICAgICAgICAgXSwgJ8OtJywgICAgICAgXVxuICAgICAgWyBbICArMTAsICAgKzAsICAgICBdLCAnw63DoycsICAgICAgXVxuICAgICAgWyBbICArMTAsICAgKzEsICAgICBdLCAnw63DpCcsICAgICAgXVxuICAgICAgWyBbICArMTAsICArMTAsIC0xLCBdLCAnw63DrcOiJywgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgKzEwLCAgICAgXSwgJ8Otw60nLCAgICAgIF1cbiAgICAgIFsgWyAgKzEwLCAgKzIwLCAgICAgXSwgJ8Otw7cnLCAgICAgIF1cbiAgICAgIFsgWyAgKzIwLCAgICAgICAgICAgXSwgJ8O3JywgICAgICAgXVxuICAgICAgWyBbICArMjAsICArMTAsICAgICBdLCAnw7fDrScsICAgICAgXVxuICAgICAgWyBbICArOTAsICAgICAgICAgICBdLCAnw7h+JywgICAgICBdXG4gICAgICBbIFsgKzkwMCwgICAgICAgICAgIF0sICfDuSomJywgICAgIF1cbiAgICAgIF1cbiAgICB1bnBhZGRlZF9saW5lcyAgICA9IFtdXG4gICAgcGFkZGVkX2xpbmVzICAgICAgPSBbXVxuICAgIGV4cGVjdGVkX2luZGV4ZXMgID0gKCBpZHggZm9yIGlkeCBpbiBbIDAgLi4uIHByb2Jlcy5sZW5ndGggXSApXG4gICAgc2h1ZmZsZSAgICAgICAgICAgPSBHVVkucm5kLmdldF9zaHVmZmxlIDU3LCA4OFxuICAgIGNvZGVjICAgICAgICAgICAgID0gaG9sbGVyaXRoXzEyOF8xNjM4M1xuICAgICMgZGVidWcgJ86paGxsdF8xMDAnLCBjb2RlYy5jZmcuX21heF9kaWdpdHNfcGVyX2lkeFxuICAgICMgZGVidWcgJ86paGxsdF8xMDEnLCBjb2RlYy5jZmcuemVyb19wYWRfbGVuZ3RoXG4gICAgQGVxICggzqlobGx0XzEwMiA9IC0+IGNvZGVjLmNmZy5fYmFzZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDEyOFxuICAgIEBlcSAoIM6paGxsdF8xMDMgPSAtPiBjb2RlYy5jZmcuX21heF9pbnRlZ2VyICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCArMTYzODNcbiAgICBAZXEgKCDOqWhsbHRfMTA0ID0gLT4gY29kZWMuY2ZnLl9taW5faW50ZWdlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgLTE2MzgzXG4gICAgQGVxICggzqlobGx0XzEwNSA9IC0+IGNvZGVjLmNmZy5fcG1hZ19saXN0WyAyIF0gICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw7knXG4gICAgQGVxICggzqlobGx0XzEwNiA9IC0+IGNvZGVjLmNmZy5fbm1hZ19saXN0WyAyIF0gICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw40nXG4gICAgQGVxICggzqlobGx0XzEwNyA9IC0+IGNvZGVjLmVuY29kZSBjb2RlYy5jZmcuX21heF9pbnRlZ2VyICAgICAgICAgICAgICAgICksICfDucOGw4YnXG4gICAgQGVxICggzqlobGx0XzEwOCA9IC0+IGNvZGVjLmVuY29kZSBjb2RlYy5jZmcuX21pbl9pbnRlZ2VyICAgICAgICAgICAgICAgICksICfDjSEhJ1xuICAgIEBlcSAoIM6paGxsdF8xMDkgPSAtPiBjb2RlYy5kZWNvZGUgJ8ONISEnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAtMTYzODMgXVxuICAgIEB0aHJvd3MgKCDOqWhsbHRfMTEwID0gLT4gY29kZWMuZGVjb2RlICfDhyEhISEhISEhJyAgICAgICAgICAgICAgICAgICAgICAgKSwgL25vdCBhIHZhbGlkIHNvcnRrZXkvXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmb3IgWyB2ZHgsIHNrX21hdGNoZXIsIF0sIGlkeCBpbiBwcm9iZXNcbiAgICAgIHVzayAgID0gY29kZWMuZW5jb2RlIHZkeFxuICAgICAgQGVxICggzqlobGx0XzExMSA9IC0+IHVzayApLCBza19tYXRjaGVyXG4gICAgICAjIGVjaG8gcnByIHVza1xuICAgICAgcHNrICAgPSB1c2sucGFkRW5kIDEwLCBjb2RlYy5jZmcuX2NpcGhlclxuICAgICAgdXNrICAgPSB1c2sucGFkRW5kIDEwLCAnICdcbiAgICAgIHVucGFkZGVkX2xpbmVzLnB1c2ggXCIje3Vza30gI3tycHIgdmR4fSAje2lkeH1cIlxuICAgICAgcGFkZGVkX2xpbmVzLnB1c2ggXCIje3Bza30gI3tycHIgdmR4fSAje2lkeH1cIlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqlobGx0XzExMiA9IC0+IGNvZGVjLmNmZy5fbWF4X2RpZ2l0c19wZXJfaWR4ICAgICAgICAgICAgICAgICAgICAgICAgKSwgMlxuICAgIEBlcSAoIM6paGxsdF8xMTMgPSAtPiBjb2RlYy5jZmcuX21heF96cHVuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAyMFxuICAgIEBlcSAoIM6paGxsdF8xMTQgPSAtPiBjb2RlYy5jZmcuX25hdWdodCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICchJ1xuICAgIEBlcSAoIM6paGxsdF8xMTUgPSAtPiBjb2RlYy5jZmcuX25vdmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDhidcbiAgICBAZXEgKCDOqWhsbHRfMTE2ID0gLT4gY29kZWMuY2ZnLl9jaXBoZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw6MnXG4gICAgQGVxICggzqlobGx0XzExNyA9IC0+IGNvZGVjLmNmZy5ubWFnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyDDjsONJ1xuICAgIEBlcSAoIM6paGxsdF8xMTggPSAtPiBjb2RlYy5jZmcucG1hZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcgw7jDuSdcbiAgICBAZXEgKCDOqWhsbHRfMTE5ID0gLT4gY29kZWMuY2ZnLl9wbWFnX2xpc3RbIGNvZGVjLmNmZy5fbWF4X2RpZ2l0c19wZXJfaWR4IF0gKSwgJ8O5J1xuICAgIEBlcSAoIM6paGxsdF8xMjAgPSAtPiBjb2RlYy5lbmNvZGUgLTE2MzgzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDjSEhJ1xuICAgIEBlcSAoIM6paGxsdF8xMjEgPSAtPiBjb2RlYy5lbmNvZGUgLTE2MzgyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDjSEjJ1xuICAgIEBlcSAoIM6paGxsdF8xMjIgPSAtPiBjb2RlYy5lbmNvZGUgLTEyOSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDjcOFw4UnXG4gICAgQGVxICggzqlobGx0XzEyMyA9IC0+IGNvZGVjLmVuY29kZSAtMTI4ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8ONw4XDhidcbiAgICBAZXEgKCDOqWhsbHRfMTI0ID0gLT4gY29kZWMuZW5jb2RlIC0xMjcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw44hJ1xuICAgIEBlcSAoIM6paGxsdF8xMjUgPSAtPiBjb2RlYy5lbmNvZGUgLTgwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDjlInXG4gICAgQGVxICggzqlobGx0XzEyNiA9IC0+IGNvZGVjLmVuY29kZSAtMjEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8OOwrEnXG4gICAgQGVxICggzqlobGx0XzEyNyA9IC0+IGNvZGVjLmVuY29kZSAtMjEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8OOwrEnXG4gICAgQGVxICggzqlobGx0XzEyOCA9IC0+IGNvZGVjLmVuY29kZSAtMjAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8OPJ1xuICAgIEBlcSAoIM6paGxsdF8xMjkgPSAtPiBjb2RlYy5lbmNvZGUgLTEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDoidcbiAgICBAZXEgKCDOqWhsbHRfMTMwID0gLT4gY29kZWMuZW5jb2RlICswICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw6MnXG4gICAgQGVxICggzqlobGx0XzEzMSA9IC0+IGNvZGVjLmVuY29kZSArMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8OkJ1xuICAgIEBlcSAoIM6paGxsdF8xMzIgPSAtPiBjb2RlYy5lbmNvZGUgKzIwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDtydcbiAgICBAZXEgKCDOqWhsbHRfMTMzID0gLT4gY29kZWMuZW5jb2RlICsyMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnw7g4J1xuICAgIEBlcSAoIM6paGxsdF8xMzQgPSAtPiBjb2RlYy5lbmNvZGUgKzEyNyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDuMOGJ1xuICAgIEBlcSAoIM6paGxsdF8xMzUgPSAtPiBjb2RlYy5lbmNvZGUgKzEyOCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDuSMhJ1xuICAgIEBlcSAoIM6paGxsdF8xMzYgPSAtPiBjb2RlYy5lbmNvZGUgKzEyOSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDuSMjJ1xuICAgIEBlcSAoIM6paGxsdF8xMzcgPSAtPiBjb2RlYy5lbmNvZGUgKzE2MzgyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDucOGw4UnXG4gICAgQGVxICggzqlobGx0XzEzOCA9IC0+IGNvZGVjLmVuY29kZSArMTYzODMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8O5w4bDhidcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAoIM6paGxsdF8xMzkgPSAtPiBjb2RlYy5kZWNvZGUgJ8ONISEnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIC0xNjM4MyBdXG4gICAgQGVxICggzqlobGx0XzE0MCA9IC0+IGNvZGVjLmRlY29kZSAnw40hIycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgLTE2MzgyIF1cbiAgICBAZXEgKCDOqWhsbHRfMTQxID0gLT4gY29kZWMuZGVjb2RlICfDjcOFw4UnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIC0xMjkgXVxuICAgIEBlcSAoIM6paGxsdF8xNDIgPSAtPiBjb2RlYy5kZWNvZGUgJ8ONw4XDhicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgLTEyOCBdXG4gICAgQGVxICggzqlobGx0XzE0MyA9IC0+IGNvZGVjLmRlY29kZSAnw44hJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgLTEyNyBdXG4gICAgQGVxICggzqlobGx0XzE0NCA9IC0+IGNvZGVjLmRlY29kZSAnw47CsScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIC0yMSBdXG4gICAgQGVxICggzqlobGx0XzE0NSA9IC0+IGNvZGVjLmRlY29kZSAnw48nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgLTIwIF1cbiAgICBAZXEgKCDOqWhsbHRfMTQ2ID0gLT4gY29kZWMuZGVjb2RlICfDoicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAtMSBdXG4gICAgQGVxICggzqlobGx0XzE0NyA9IC0+IGNvZGVjLmRlY29kZSAnw6MnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgMCBdXG4gICAgQGVxICggzqlobGx0XzE0OCA9IC0+IGNvZGVjLmRlY29kZSAnw6QnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgMSBdXG4gICAgQGVxICggzqlobGx0XzE0OSA9IC0+IGNvZGVjLmRlY29kZSAnw7cnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgMjAgXVxuICAgIEBlcSAoIM6paGxsdF8xNTAgPSAtPiBjb2RlYy5kZWNvZGUgJ8O4OCcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIDIxIF1cbiAgICBAZXEgKCDOqWhsbHRfMTUxID0gLT4gY29kZWMuZGVjb2RlICfDuMOGJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgMTI3IF1cbiAgICBAZXEgKCDOqWhsbHRfMTUyID0gLT4gY29kZWMuZGVjb2RlICfDuSMhJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAxMjggXVxuICAgIEBlcSAoIM6paGxsdF8xNTMgPSAtPiBjb2RlYy5kZWNvZGUgJ8O5IyMnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIDEyOSBdXG4gICAgQGVxICggzqlobGx0XzE1NCA9IC0+IGNvZGVjLmRlY29kZSAnw7nDhsOFJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAxNjM4MiBdXG4gICAgQGVxICggzqlobGx0XzE1NSA9IC0+IGNvZGVjLmRlY29kZSAnw7nDhsOGJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAxNjM4MyBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmb3IgXyBpbiBbIDEgLi4gMTAgXVxuICAgICAgdW5wYWRkZWRfbGluZXMgPSBzaHVmZmxlIHVucGFkZGVkX2xpbmVzXG4gICAgICB1bnBhZGRlZF9saW5lcy5zb3J0KClcbiAgICAgIHJlYWxfaW5kZXhlcyA9IFtdXG4gICAgICBmb3IgdWxpbmUgaW4gdW5wYWRkZWRfbGluZXNcbiAgICAgICAgIyBoZWxwICfOqWhsbHRfMTU2JywgdWxpbmVcbiAgICAgICAgcmVhbF9pbmRleGVzLnB1c2ggTnVtYmVyIHVsaW5lLnJlcGxhY2UgL14uKj9cXHMoWzAtOV0rKSQvLCAnJDEnXG4gICAgICBAZXEgKCDOqWhsbHRfMTU3ID0gLT4gZXF1YWxzIGV4cGVjdGVkX2luZGV4ZXMsIHJlYWxfaW5kZXhlcyApLCBmYWxzZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZm9yIF8gaW4gWyAxIC4uIDEwIF1cbiAgICAgIHBhZGRlZF9saW5lcyA9IHNodWZmbGUgcGFkZGVkX2xpbmVzXG4gICAgICBwYWRkZWRfbGluZXMuc29ydCgpXG4gICAgICByZWFsX2luZGV4ZXMgPSBbXVxuICAgICAgZm9yIHBsaW5lLCBpZHggaW4gcGFkZGVkX2xpbmVzXG4gICAgICAgICMgaGVscCAnzqlobGx0XzE1OCcsIHJwciBwbGluZSBpZiBfIGlzIDFcbiAgICAgICAgcmVhbF9pbmRleGVzLnB1c2ggTnVtYmVyIHBsaW5lLnJlcGxhY2UgL14uKj9cXHMoWzAtOV0rKSQvLCAnJDEnXG4gICAgICBAZXEgKCDOqWhsbHRfMTU5ID0gLT4gZXF1YWxzIGV4cGVjdGVkX2luZGV4ZXMsIHJlYWxfaW5kZXhlcyApLCB0cnVlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaDEyOF9kZWNvZGU6IC0+XG4gICAgeyBIb2xsZXJpdGgsXG4gICAgICBob2xsZXJpdGhfMTI4LFxuICAgICAgaW50ZXJuYWxzICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHByb2Jlc19hbmRfbWF0Y2hlcnMgPSBbXG4gICAgICBbICfDhyHDhsOGw4bDhsOGwr87w6MnLCBbIC05OTksICAgICAgICAgXSwgJ25udW06w40swr87Wy05OTldfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw4chw4bDhsOGw4bDhsOGP8OjJywgWyAtOTksICAgICAgICAgIF0sICdubnVtOsOOLD9bLTk5XXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8OHIcOGw4bDhsOGw4bDhkjDoycsIFsgLTkwLCAgICAgICAgICBdLCAnbm51bTrDjixIWy05MF18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDmMOjw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTExLCAgICAgICAgICBdLCAnbnVuOsOYWy0xMV18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw5nDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC0xMCwgICAgICAgICAgXSwgJ251bjrDmVstMTBdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Oaw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtOSwgICAgICAgICAgIF0sICdudW46w5pbLTldfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDm8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTgsICAgICAgICAgICBdLCAnbnVuOsObWy04XXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw5zDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC03LCAgICAgICAgICAgXSwgJ251bjrDnFstN118cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Odw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtNiwgICAgICAgICAgIF0sICdudW46w51bLTZdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDnsOjw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTUsICAgICAgICAgICBdLCAnbnVuOsOeWy01XXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw5/Do8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC00LCAgICAgICAgICAgXSwgJ251bjrDn1stNF18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Ogw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAtMywgICAgICAgICAgIF0sICdudW46w6BbLTNdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDocOjw6PDo8Ojw6PDo8Ojw6PDoycsIFsgLTIsICAgICAgICAgICBdLCAnbnVuOsOhWy0yXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw6LDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIC0xLCAgICAgICAgICAgXSwgJ251bjrDolstMV18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Ojw4/Do8Ojw6PDo8Ojw6PDo8OjJywgWyAwLCAtMjAsICAgICAgIF0sICd6ZXJvOsOjWzBdfG51bjrDj1stMjBdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICBdXG4gICAgICBbICfDo8Ojw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMCwgICAgICAgICAgICBdLCAncGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6PDo1swXScsICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw6PDt8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIDAsIDIwLCAgICAgICAgXSwgJ3plcm86w6NbMF18cHVuOsO3WzIwXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Osw6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyA5LCAgICAgICAgICAgIF0sICdwdW46w6xbOV18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDrcOgw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMTAsIC0zLCAgICAgICBdLCAncHVuOsOtWzEwXXxudW46w6BbLTNdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgXVxuICAgICAgWyAnw63DocOjw6PDo8Ojw6PDo8Ojw6MnLCBbIDEwLCAtMiwgICAgICAgXSwgJ3B1bjrDrVsxMF18bnVuOsOhWy0yXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Otw6LDo8Ojw6PDo8Ojw6PDo8OjJywgWyAxMCwgLTEsICAgICAgIF0sICdwdW46w61bMTBdfG51bjrDolstMV18cGFkZGluZzrDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICBdXG4gICAgICBbICfDrcOjw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMTAsICAgICAgICAgICBdLCAncHVuOsOtWzEwXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnw63DpMOjw6PDo8Ojw6PDo8Ojw6MnLCBbIDEwLCAxLCAgICAgICAgXSwgJ3B1bjrDrVsxMF18cHVuOsOkWzFdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgIF1cbiAgICAgIFsgJ8Otw63DosOjw6PDo8Ojw6PDo8OjJywgWyAxMCwgMTAsIC0xLCAgIF0sICdwdW46w61bMTBdfHB1bjrDrVsxMF18bnVuOsOiWy0xXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8OjJywgICBdXG4gICAgICBbICfDrcOtw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMTAsIDEwLCAgICAgICBdLCAncHVuOsOtWzEwXXxwdW46w61bMTBdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgXVxuICAgICAgWyAnw63Dt8Ojw6PDo8Ojw6PDo8Ojw6MnLCBbIDEwLCAyMCwgICAgICAgXSwgJ3B1bjrDrVsxMF18cHVuOsO3WzIwXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgIF1cbiAgICAgIFsgJ8O3w6PDo8Ojw6PDo8Ojw6PDo8OjJywgWyAyMCwgICAgICAgICAgIF0sICdwdW46w7dbMjBdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDt8Otw6PDo8Ojw6PDo8Ojw6PDoycsIFsgMjAsIDEwLCAgICAgICBdLCAncHVuOsO3WzIwXXxwdW46w61bMTBdfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6PDoycsICAgICAgICAgICAgXVxuICAgICAgWyAnw7h+w6PDo8Ojw6PDo8Ojw6PDoycsIFsgOTAsICAgICAgICAgICBdLCAncG51bTrDuCx+WzkwXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICfDuSomw6PDo8Ojw6PDo8Ojw6MnLCBbIDkwMCwgICAgICAgICAgXSwgJ3BudW06w7ksKiZbOTAwXXxwYWRkaW5nOsOjw6PDo8Ojw6PDo8OjJywgICAgICAgICAgICAgICAgICBdXG4gICAgICBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjb2RlYyA9IGhvbGxlcml0aF8xMjhcbiAgICBmb3IgWyBzb3J0a2V5LCBpbmRleF9tYXRjaGVyLCB1bml0X21hdGNoZXIsIF0gaW4gcHJvYmVzX2FuZF9tYXRjaGVyc1xuICAgICAgdW5pdF9yZXN1bHQgICAgID0gW11cbiAgICAgIGluZGV4X3Jlc3VsdCAgICA9IFtdXG4gICAgICBmb3IgdW5pdCBpbiBjb2RlYy5wYXJzZSBzb3J0a2V5XG4gICAgICAgIHVuaXRfcmVzdWx0LnB1c2ggIGhlbHBlcnMucnByX3VuaXQgdW5pdFxuICAgICAgICBpbmRleF9yZXN1bHQucHVzaCB1bml0LmluZGV4IGlmIHVuaXQuaW5kZXg/XG4gICAgICB1bml0X3Jlc3VsdCAgID0gdW5pdF9yZXN1bHQuam9pbiAnfCdcbiAgICAgICMgaW5mbyAnzqlobGx0XzE2MCcsIGZcIiN7KCBycHIgdW5pdF9yZXN1bHQgKSArICcsJ306PDYwYzsgI3tycHIgaW5kZXhfcmVzdWx0fVwiXG4gICAgIyAgIEBlcSAoIM6paGxsdF8xNjEgPSAtPiAgdW5pdF9yZXN1bHQgICAgICAgICAgICAgICAgICAgICApLCAgdW5pdF9tYXRjaGVyXG4gICAgICBAZXEgKCDOqWhsbHRfMTYyID0gLT4gaW5kZXhfcmVzdWx0ICAgICAgICAgICAgICAgICAgICAgKSwgaW5kZXhfbWF0Y2hlclxuICAgICAgQGVxICggzqlobGx0XzE2MyA9IC0+IHNvcnRrZXkgKSwgKCBjb2RlYy5lbmNvZGUgaW5kZXhfbWF0Y2hlciApLnBhZEVuZCBzb3J0a2V5Lmxlbmd0aCwgY29kZWMuY2ZnLl96cHVuc1sgMCBdXG4gICAgICAjIGRlYnVnICfOqWhsbHRfMTY0JywgcnByICggY29kZWMuZW5jb2RlIGluZGV4X21hdGNoZXIgKS5wYWRFbmQgc29ydGtleS5sZW5ndGgsIGNvZGVjLmNmZy5fenB1bnNbIDAgXVxuICAgICAgQGVxICggzqlobGx0XzE2NSA9IC0+IGNvZGVjLmRlY29kZSBzb3J0a2V5ICApLCBpbmRleF9tYXRjaGVyXG4gICAgICAjIGVjaG8gWyBzb3J0a2V5LCBpbmRleF9yZXN1bHQsIHVuaXRfcmVzdWx0LCBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIEBlcSAgICAgKCDOqWhsbHRfMTY2ID0gLT4gY29kZWMucGFyc2UgJzUnICAgICAgICAgICksIFsgeyBuYW1lOiAnb3RoZXInLCBsZXR0ZXJzOiAnNScsIG1hbnRpc3NhOiBudWxsLCBpbmRleDogbnVsbCB9IF1cbiAgICAjIEBlcSAgICAgKCDOqWhsbHRfMTY3ID0gLT4gY29kZWMucGFyc2UgJ8Okw7bDvCcgICAgICAgICksIFsgeyBuYW1lOiAnb3RoZXInLCBsZXR0ZXJzOiAnw6TDtsO8JywgbWFudGlzc2E6IG51bGwsIGluZGV4OiBudWxsIH0gXVxuICAgICMgQGVxICAgICAoIM6paGxsdF8xNjggPSAtPiBjb2RlYy5wYXJzZSAnWTkwMMOkw7bDvCcgICAgKSwgWyB7IG5hbWU6ICdwbnVtJywgbGV0dGVyczogJ1knLCBtYW50aXNzYTogJzkwMCcsIGluZGV4OiA5MDAgfSwgeyBuYW1lOiAnb3RoZXInLCBsZXR0ZXJzOiAnw6TDtsO8JywgbWFudGlzc2E6IG51bGwsIGluZGV4OiBudWxsIH0gXVxuICAgICMgQHRocm93cyAoIM6paGxsdF8xNjkgPSAtPiBjb2RlYy5kZWNvZGUgJzUnICAgICAgICAgKSwgL25vdCBhIHZhbGlkIHNvcnRrZXk6IHVuYWJsZSB0byBwYXJzZSAnNScvXG4gICAgIyBAdGhyb3dzICggzqlobGx0XzE3MCA9IC0+IGNvZGVjLmRlY29kZSAnw6TDtsO8JyAgICAgICApLCAvbm90IGEgdmFsaWQgc29ydGtleTogdW5hYmxlIHRvIHBhcnNlICfDpMO2w7wnL1xuICAgICMgQHRocm93cyAoIM6paGxsdF8xNzEgPSAtPiBjb2RlYy5kZWNvZGUgJ8Okw7bDvCcgICAgICAgKSwgL25vdCBhIHZhbGlkIHNvcnRrZXk6IHVuYWJsZSB0byBwYXJzZSAnw7wnIGluICdZOTAww6TDtsO8Jy9cbiAgICAjIEB0aHJvd3MgKCDOqWhsbHRfMTcyID0gLT4gY29kZWMuZGVjb2RlICdZOTAww6TDtsO8JyAgICksIC9ub3QgYSB2YWxpZCBzb3J0a2V5OiB1bmFibGUgdG8gcGFyc2UgJ1k5MDAnIGluICdZOTAww6TDtsO8Jy9cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgZGVidWcgJ86paGxsdF8xNzMnLCBycHIgY29kZWMuZW5jb2RlIC05MCAjICAgIFsgJ8ONwr87w6PDo8Ojw6PDo8Ojw6MnLCBbIC05OTksICAgICAgICAgXSwgJ25udW06w40swr87Wy05OTldfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgXVxuICAgICMgZGVidWcgJ86paGxsdF8xNzQnLCBycHIgY29kZWMuZGVjb2RlICfDhyHDhsOGw4bDhsOGw4ZIJyAjICAgIFsgJ8ONwr87w6PDo8Ojw6PDo8Ojw6MnLCBbIC05OTksICAgICAgICAgXSwgJ25udW06w40swr87Wy05OTldfHBhZGRpbmc6w6PDo8Ojw6PDo8Ojw6MnLCAgICAgICAgICAgICAgICAgXVxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoMTBtdnAyX2RlY29kZV91bml0czogLT5cbiAgICAjIyMgTk9URSBhbHNvIHNlZSBjb3JyZXNwb25kaW5nIHRlc3QgaW4gYGhlbmdpc3QtTkcvZGV2L2ludGVybGV4L3NyYy90ZXN0LWhvbGxlcml0aC5jb2ZmZWVgICMjI1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgeyBIb2xsZXJpdGgsXG4gICAgICBob2xsZXJpdGhfMTBtdnAyLFxuICAgICAgaW50ZXJuYWxzICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgICMgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCB9ID0gcmVxdWlyZSAnbm9kZTp1dGlsJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcHJvYmVzX2FuZF9tYXRjaGVycyA9IFtcbiAgICAgIFsgJ0EwMDBOTk5OTk4nLCBbIC05OTkgICAgICAgIF0sICdubnVtOkEsMDAwWy05OTldfHBhZGRpbmc6Tk5OTk5OJywgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdCMDBOTk5OTk5OJywgWyAtOTkgICAgICAgICBdLCAnbm51bTpCLDAwWy05OV18cGFkZGluZzpOTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnQjA5Tk5OTk5OTicsIFsgLTkwICAgICAgICAgXSwgJ25udW06QiwwOVstOTBdfHBhZGRpbmc6Tk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0I4OE5OTk5OTk4nLCBbIC0xMSAgICAgICAgIF0sICdubnVtOkIsODhbLTExXXxwYWRkaW5nOk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdCODlOTk5OTk5OJywgWyAtMTAgICAgICAgICBdLCAnbm51bTpCLDg5Wy0xMF18cGFkZGluZzpOTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnRU5OTk5OTk5OTicsIFsgLTkgICAgICAgICAgXSwgJ251bjpFWy05XXxwYWRkaW5nOk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0ZOTk5OTk5OTk4nLCBbIC04ICAgICAgICAgIF0sICdudW46RlstOF18cGFkZGluZzpOTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdHTk5OTk5OTk5OJywgWyAtNyAgICAgICAgICBdLCAnbnVuOkdbLTddfHBhZGRpbmc6Tk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnSE5OTk5OTk5OTicsIFsgLTYgICAgICAgICAgXSwgJ251bjpIWy02XXxwYWRkaW5nOk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0lOTk5OTk5OTk4nLCBbIC01ICAgICAgICAgIF0sICdudW46SVstNV18cGFkZGluZzpOTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdKTk5OTk5OTk5OJywgWyAtNCAgICAgICAgICBdLCAnbnVuOkpbLTRdfHBhZGRpbmc6Tk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnS05OTk5OTk5OTicsIFsgLTMgICAgICAgICAgXSwgJ251bjpLWy0zXXxwYWRkaW5nOk5OTk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ0xOTk5OTk5OTk4nLCBbIC0yICAgICAgICAgIF0sICdudW46TFstMl18cGFkZGluZzpOTk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdNTk5OTk5OTk5OJywgWyAtMSAgICAgICAgICBdLCAnbnVuOk1bLTFdfHBhZGRpbmc6Tk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnTkI3OU5OTk5OTicsIFsgMCwgLTIwICAgICAgXSwgJ3plcm86TlswXXxubnVtOkIsNzlbLTIwXXxwYWRkaW5nOk5OTk5OTicsICAgICAgICAgICAgIF1cbiAgICAgIFsgJ05OTk5OTk5OTk4nLCBbIDAgICAgICAgICAgIF0sICdwYWRkaW5nOk5OTk5OTk5OTk5bMF0nLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdOWTIwTk5OTk5OJywgWyAwLCAyMCAgICAgICBdLCAnemVybzpOWzBdfHBudW06WSwyMFsyMF18cGFkZGluZzpOTk5OTk4nLCAgICAgICAgICAgICAgXVxuICAgICAgWyAnV05OTk5OTk5OTicsIFsgOSAgICAgICAgICAgXSwgJ3B1bjpXWzldfHBhZGRpbmc6Tk5OTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ1kxMEtOTk5OTk4nLCBbIDEwLCAtMyAgICAgIF0sICdwbnVtOlksMTBbMTBdfG51bjpLWy0zXXxwYWRkaW5nOk5OTk5OTicsICAgICAgICAgICAgICBdXG4gICAgICBbICdZMTBMTk5OTk5OJywgWyAxMCwgLTIgICAgICBdLCAncG51bTpZLDEwWzEwXXxudW46TFstMl18cGFkZGluZzpOTk5OTk4nLCAgICAgICAgICAgICAgXVxuICAgICAgWyAnWTEwTU5OTk5OTicsIFsgMTAsIC0xICAgICAgXSwgJ3BudW06WSwxMFsxMF18bnVuOk1bLTFdfHBhZGRpbmc6Tk5OTk5OJywgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ1kxME5OTk5OTk4nLCBbIDEwICAgICAgICAgIF0sICdwbnVtOlksMTBbMTBdfHBhZGRpbmc6Tk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdZMTBPTk5OTk5OJywgWyAxMCwgMSAgICAgICBdLCAncG51bTpZLDEwWzEwXXxwdW46T1sxXXxwYWRkaW5nOk5OTk5OTicsICAgICAgICAgICAgICAgXVxuICAgICAgWyAnWTEwWTEwTU5OTicsIFsgMTAsIDEwLCAtMSAgXSwgJ3BudW06WSwxMFsxMF18cG51bTpZLDEwWzEwXXxudW46TVstMV18cGFkZGluZzpOTk4nLCAgIF1cbiAgICAgIFsgJ1kxMFkxME5OTk4nLCBbIDEwLCAxMCAgICAgIF0sICdwbnVtOlksMTBbMTBdfHBudW06WSwxMFsxMF18cGFkZGluZzpOTk5OJywgICAgICAgICAgICBdXG4gICAgICBbICdZMTBZMjBOTk5OJywgWyAxMCwgMjAgICAgICBdLCAncG51bTpZLDEwWzEwXXxwbnVtOlksMjBbMjBdfHBhZGRpbmc6Tk5OTicsICAgICAgICAgICAgXVxuICAgICAgWyAnWTIwTk5OTk5OTicsIFsgMjAgICAgICAgICAgXSwgJ3BudW06WSwyMFsyMF18cGFkZGluZzpOTk5OTk5OJywgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ1kyMFkxME5OTk4nLCBbIDIwLCAxMCAgICAgIF0sICdwbnVtOlksMjBbMjBdfHBudW06WSwxMFsxMF18cGFkZGluZzpOTk5OJywgICAgICAgICAgICBdXG4gICAgICBbICdZOTBOTk5OTk5OJywgWyA5MCAgICAgICAgICBdLCAncG51bTpZLDkwWzkwXXxwYWRkaW5nOk5OTk5OTk4nLCAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnWjkwME5OTk5OTicsIFsgOTAwICAgICAgICAgXSwgJ3BudW06Wiw5MDBbOTAwXXxwYWRkaW5nOk5OTk5OTicsICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ05OTk5OTk5OTicsICBbIDAgICAgICAgICAgIF0sICdwYWRkaW5nOk5OTk5OTk5OTlswXScsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdOTicsICAgICAgICAgWyAwICAgICAgICAgICBdLCAncGFkZGluZzpOTlswXScsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgWyAnTicsICAgICAgICAgIFsgMCAgICAgICAgICAgXSwgJ3BhZGRpbmc6TlswXScsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIFsgJ1kxMCcsICAgICAgICBbIDEwICAgICAgICAgIF0sICdwbnVtOlksMTBbMTBdJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBbICdLJywgICAgICAgICAgWyAtMyAgICAgICAgICBdLCAnbnVuOktbLTNdJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY29kZWMgICAgICAgICAgID0gaG9sbGVyaXRoXzEwbXZwMlxuICAgIHNvcnRrZXlfcGFkZGVyICA9IGNvZGVjLmNmZy5fenB1bnNfbGlzdFsgMCBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmb3IgWyBzb3J0a2V5LCBpbmRleF9tYXRjaGVyLCB1bml0X21hdGNoZXIsIF0gaW4gcHJvYmVzX2FuZF9tYXRjaGVyc1xuICAgICAgdW5pdF9yZXN1bHQgICAgID0gW11cbiAgICAgIGluZGV4X3Jlc3VsdCAgICA9IFtdXG4gICAgICBmb3IgdW5pdCBpbiBjb2RlYy5wYXJzZSBzb3J0a2V5XG4gICAgICAgIHVuaXRfcmVzdWx0LnB1c2ggIGhlbHBlcnMucnByX3VuaXQgdW5pdFxuICAgICAgICBpbmRleF9yZXN1bHQucHVzaCB1bml0LmluZGV4IGlmIHVuaXQuaW5kZXg/XG4gICAgICB1bml0X3Jlc3VsdCAgID0gdW5pdF9yZXN1bHQuam9pbiAnfCdcbiAgICAgICMgaW5mbyAnzqlobGx0XzE3NScsIGZcIiN7KCBycHIgdW5pdF9yZXN1bHQgKSArICcsJ306PDYwYzsgI3tycHIgaW5kZXhfcmVzdWx0fVwiXG4gICAgICBAZXEgKCDOqWhsbHRfMTc2ID0gLT4gdW5pdF9yZXN1bHQgICAgICAgICAgICAgICAgICAgICAgKSwgdW5pdF9tYXRjaGVyXG4gICAgICBAZXEgKCDOqWhsbHRfMTc3ID0gLT4gaW5kZXhfcmVzdWx0ICAgICAgICAgICAgICAgICAgICAgKSwgaW5kZXhfbWF0Y2hlclxuICAgICAgQGVxICggzqlobGx0XzE3OCA9IC0+IGNvZGVjLmRlY29kZSBzb3J0a2V5ICAgICAgICAgICAgICksIGluZGV4X21hdGNoZXJcbiAgICAgIEBlcSAoIM6paGxsdF8xNzkgPSAtPiBzb3J0a2V5ICAgICAgICAgICAgICAgICAgICAgICAgICApLCAoIGNvZGVjLmVuY29kZSBpbmRleF9tYXRjaGVyICkucGFkRW5kIHNvcnRrZXkubGVuZ3RoLCBzb3J0a2V5X3BhZGRlclxuICAgICAgIyBlY2hvIFsgc29ydGtleSwgaW5kZXhfcmVzdWx0LCB1bml0X3Jlc3VsdCwgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICAgICAoIM6paGxsdF8xODAgPSAtPiBjb2RlYy5wYXJzZSAnNScgICAgICAgICApLCBbIHsgbmFtZTogJ290aGVyJywgbGV0dGVyczogJzUnLCBtYW50aXNzYTogbnVsbCwgaW5kZXg6IG51bGwgfSBdXG4gICAgQGVxICAgICAoIM6paGxsdF8xODEgPSAtPiBjb2RlYy5wYXJzZSAnw6TDtsO8JyAgICAgICApLCBbIHsgbmFtZTogJ290aGVyJywgbGV0dGVyczogJ8Okw7bDvCcsIG1hbnRpc3NhOiBudWxsLCBpbmRleDogbnVsbCB9IF1cbiAgICBAZXEgICAgICggzqlobGx0XzE4MiA9IC0+IGNvZGVjLnBhcnNlICdZOTAww6TDtsO8JyAgICksIFsgeyBuYW1lOiAncG51bScsIGxldHRlcnM6ICdZJywgbWFudGlzc2E6ICc5MDAnLCBpbmRleDogOTAwIH0sIHsgbmFtZTogJ290aGVyJywgbGV0dGVyczogJ8Okw7bDvCcsIG1hbnRpc3NhOiBudWxsLCBpbmRleDogbnVsbCB9IF1cbiAgICBAdGhyb3dzICggzqlobGx0XzE4MyA9IC0+IGNvZGVjLmRlY29kZSAnNScgICAgICAgICksIC9ub3QgYSB2YWxpZCBzb3J0a2V5OiB1bmFibGUgdG8gcGFyc2UgJzUnL1xuICAgIEB0aHJvd3MgKCDOqWhsbHRfMTg0ID0gLT4gY29kZWMuZGVjb2RlICfDpMO2w7wnICAgICAgKSwgL25vdCBhIHZhbGlkIHNvcnRrZXk6IHVuYWJsZSB0byBwYXJzZSAnw6TDtsO8Jy9cbiAgICBAdGhyb3dzICggzqlobGx0XzE4NSA9IC0+IGNvZGVjLmRlY29kZSAnWTkwMMOkw7bDvCcgICksIC9ub3QgYSB2YWxpZCBzb3J0a2V5OiB1bmFibGUgdG8gcGFyc2UgJ8Okw7bDvCcgaW4gJ1k5MDDDpMO2w7wnL1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyBoMTI4Yl9kZWNvZGU6IC0+XG4gICMgICB7IEhvbGxlcml0aCxcbiAgIyAgICAgaG9sbGVyaXRoXzEyOCxcbiAgIyAgICAgaG9sbGVyaXRoXzEwbXZwLFxuICAjICAgICBpbnRlcm5hbHMgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICMgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgIyAgIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICAjIGNvZGVjID0gaG9sbGVyaXRoXzEyOFxuICAjICAgY29kZWMgPSBob2xsZXJpdGhfMTBtdnBcbiAgIyAgIGRlYnVnICfOqWhsbHRfMTg2JywgcnByIGNvZGVjLmVuY29kZSAtMVxuICAjICAgZGVidWcgJ86paGxsdF8xODcnLCBycHIgY29kZWMuZW5jb2RlIC0yXG4gICMgICBuID0gICAtMTAwOyB1cmdlICfOqWhsbHRfMTg4JywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAjICAgbiA9ICAgIC0yMTsgdXJnZSAnzqlobGx0XzE4OScsIGZcIiN7IHJwciBbIG4sIF0gfTo+MTBjOyAje3JwciBzayA9IGNvZGVjLmVuY29kZSBufTo8NWM7ICN7IHJwciBjb2RlYy5kZWNvZGUgc2t9Oj4xMGM7XCJcbiAgIyAgIG4gPSAgICAtMjA7IHVyZ2UgJ86paGxsdF8xOTAnLCBmXCIjeyBycHIgWyBuLCBdIH06PjEwYzsgI3tycHIgc2sgPSBjb2RlYy5lbmNvZGUgbn06PDVjOyAjeyBycHIgY29kZWMuZGVjb2RlIHNrfTo+MTBjO1wiXG4gICMgICBuID0gICAgLTE5OyB1cmdlICfOqWhsbHRfMTkxJywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAjICAgbiA9ICAgICAtMTsgdXJnZSAnzqlobGx0XzE5MicsIGZcIiN7IHJwciBbIG4sIF0gfTo+MTBjOyAje3JwciBzayA9IGNvZGVjLmVuY29kZSBufTo8NWM7ICN7IHJwciBjb2RlYy5kZWNvZGUgc2t9Oj4xMGM7XCJcbiAgIyAgIG4gPSAgICAgIDA7IHVyZ2UgJ86paGxsdF8xOTMnLCBmXCIjeyBycHIgWyBuLCBdIH06PjEwYzsgI3tycHIgc2sgPSBjb2RlYy5lbmNvZGUgbn06PDVjOyAjeyBycHIgY29kZWMuZGVjb2RlIHNrfTo+MTBjO1wiXG4gICMgICBuID0gICAgICAxOyB1cmdlICfOqWhsbHRfMTk0JywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAjICAgbiA9ICAgICAgMjsgdXJnZSAnzqlobGx0XzE5NScsIGZcIiN7IHJwciBbIG4sIF0gfTo+MTBjOyAje3JwciBzayA9IGNvZGVjLmVuY29kZSBufTo8NWM7ICN7IHJwciBjb2RlYy5kZWNvZGUgc2t9Oj4xMGM7XCJcbiAgIyAgIG4gPSAgICAgIDM7IHVyZ2UgJ86paGxsdF8xOTYnLCBmXCIjeyBycHIgWyBuLCBdIH06PjEwYzsgI3tycHIgc2sgPSBjb2RlYy5lbmNvZGUgbn06PDVjOyAjeyBycHIgY29kZWMuZGVjb2RlIHNrfTo+MTBjO1wiXG4gICMgICBuID0gICAgIDEwOyB1cmdlICfOqWhsbHRfMTk3JywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAjICAgbiA9ICAgIDEyNjsgdXJnZSAnzqlobGx0XzE5OCcsIGZcIiN7IHJwciBbIG4sIF0gfTo+MTBjOyAje3JwciBzayA9IGNvZGVjLmVuY29kZSBufTo8NWM7ICN7IHJwciBjb2RlYy5kZWNvZGUgc2t9Oj4xMGM7XCJcbiAgIyAgIG4gPSAgICAxMjc7IHVyZ2UgJ86paGxsdF8xOTknLCBmXCIjeyBycHIgWyBuLCBdIH06PjEwYzsgI3tycHIgc2sgPSBjb2RlYy5lbmNvZGUgbn06PDVjOyAjeyBycHIgY29kZWMuZGVjb2RlIHNrfTo+MTBjO1wiXG4gICMgICBuID0gICAgMTI4OyB1cmdlICfOqWhsbHRfMjAwJywgZlwiI3sgcnByIFsgbiwgXSB9Oj4xMGM7ICN7cnByIHNrID0gY29kZWMuZW5jb2RlIG59Ojw1YzsgI3sgcnByIGNvZGVjLmRlY29kZSBza306PjEwYztcIlxuICAjICAgbiA9ICAgIDEyOTsgdXJnZSAnzqlobGx0XzIwMScsIGZcIiN7IHJwciBbIG4sIF0gfTo+MTBjOyAje3JwciBzayA9IGNvZGVjLmVuY29kZSBufTo8NWM7ICN7IHJwciBjb2RlYy5kZWNvZGUgc2t9Oj4xMGM7XCJcbiAgIyAgICMgZm9yIFsgc29ydGtleSwgaW5kZXhfbWF0Y2hlciwgdW5pdF9tYXRjaGVyLCBdIGluIHByb2Jlc19hbmRfbWF0Y2hlcnNcbiAgIyAgICMgICB1bml0X3Jlc3VsdCAgICAgPSBbXVxuICAjICAgIyAgIGluZGV4X3Jlc3VsdCAgICA9IFtdXG4gICMgICAjICAgZm9yIHVuaXQgaW4gY29kZWMucGFyc2Ugc29ydGtleVxuICAjICAgIyAgICAgdW5pdF9yZXN1bHQucHVzaCAgaGVscGVycy5ycHJfdW5pdCB1bml0XG4gICMgICAjICAgICBpbmRleF9yZXN1bHQucHVzaCB1bml0LmluZGV4IGlmIHVuaXQuaW5kZXg/XG4gICMgICAjICAgdW5pdF9yZXN1bHQgICA9IHVuaXRfcmVzdWx0LmpvaW4gJ3wnXG4gICMgICAjICAgaW5mbyAnzqlobGx0XzIwMicsIGZcIiN7KCBycHIgdW5pdF9yZXN1bHQgKSArICcsJ306PDYwYzsgI3tycHIgaW5kZXhfcmVzdWx0fVwiXG4gICMgICAjICMgICBAZXEgKCDOqWhsbHRfMjAzID0gLT4gIHVuaXRfcmVzdWx0ICAgICAgICAgICAgICAgICAgICAgKSwgIHVuaXRfbWF0Y2hlclxuICAjICAgIyAgIEBlcSAoIM6paGxsdF8yMDQgPSAtPiBpbmRleF9yZXN1bHQgICAgICAgICAgICAgICAgICAgICApLCBpbmRleF9tYXRjaGVyXG4gICMgICAjICAgQGVxICggzqlobGx0XzIwNSA9IC0+IHNvcnRrZXkgKSwgKCBjb2RlYy5lbmNvZGUgaW5kZXhfbWF0Y2hlciApLnBhZEVuZCBzb3J0a2V5Lmxlbmd0aCwgY29kZWMuY2ZnLl96cHVuc1sgMCBdXG4gICMgICAjICAgZGVidWcgJ86paGxsdF8yMDYnLCBycHIgKCBjb2RlYy5lbmNvZGUgaW5kZXhfbWF0Y2hlciApLnBhZEVuZCBzb3J0a2V5Lmxlbmd0aCwgY29kZWMuY2ZnLl96cHVuc1sgMCBdXG4gICMgICAjICAgQGVxICggzqlobGx0XzIwNyA9IC0+IGNvZGVjLmRlY29kZSBzb3J0a2V5ICApLCBpbmRleF9tYXRjaGVyXG4gICMgICAjICAgIyBlY2hvIFsgc29ydGtleSwgaW5kZXhfcmVzdWx0LCB1bml0X3Jlc3VsdCwgXVxuICAjICAgIyAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAjICAgIyBAZXEgICAgICggzqlobGx0XzIwOCA9IC0+IGNvZGVjLnBhcnNlICc1JyAgICAgICAgICksIFsgeyBuYW1lOiAnb3RoZXInLCBsZXR0ZXJzOiAnNScsIG1hbnRpc3NhOiBudWxsLCBpbmRleDogbnVsbCB9IF1cbiAgIyAgICMgQGVxICAgICAoIM6paGxsdF8yMDkgPSAtPiBjb2RlYy5wYXJzZSAnw6TDtsO8JyAgICAgICApLCBbIHsgbmFtZTogJ290aGVyJywgbGV0dGVyczogJ8Okw7bDvCcsIG1hbnRpc3NhOiBudWxsLCBpbmRleDogbnVsbCB9IF1cbiAgIyAgICMgQGVxICAgICAoIM6paGxsdF8yMTAgPSAtPiBjb2RlYy5wYXJzZSAnWTkwMMOkw7bDvCcgICApLCBbIHsgbmFtZTogJ3BudW0nLCBsZXR0ZXJzOiAnWScsIG1hbnRpc3NhOiAnOTAwJywgaW5kZXg6IDkwMCB9LCB7IG5hbWU6ICdvdGhlcicsIGxldHRlcnM6ICfDpMO2w7wnLCBtYW50aXNzYTogbnVsbCwgaW5kZXg6IG51bGwgfSBdXG4gICMgICAjIEB0aHJvd3MgKCDOqWhsbHRfMjExID0gLT4gY29kZWMuZGVjb2RlICc1JyAgICAgICAgKSwgL25vdCBhIHZhbGlkIHNvcnRrZXk6IHVuYWJsZSB0byBwYXJzZSAnNScvXG4gICMgICAjIEB0aHJvd3MgKCDOqWhsbHRfMjEyID0gLT4gY29kZWMuZGVjb2RlICfDpMO2w7wnICAgICAgKSwgL25vdCBhIHZhbGlkIHNvcnRrZXk6IHVuYWJsZSB0byBwYXJzZSAnw6TDtsO8Jy9cbiAgIyAgICMgQHRocm93cyAoIM6paGxsdF8yMTMgPSAtPiBjb2RlYy5kZWNvZGUgJ1k5MDDDpMO2w7wnICApLCAvbm90IGEgdmFsaWQgc29ydGtleTogdW5hYmxlIHRvIHBhcnNlICfDpMO2w7wnIGluICdZOTAww6TDtsO8Jy9cbiAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICByZXR1cm4gbnVsbFxuXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB0eXBlczogLT5cbiAgICB7IGludGVybmFscyxcbiAgICAgIEhvbGxlcml0aF90eXBlc3BhY2UsXG4gICAgICBDRkcsICAgICAgICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoL2xpYi90eXBlcydcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCAgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICB7IHBpY2ssICAgICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfcGljaygpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgVCA9IG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlKClcbiAgICAgIEBlcSAoIM6paGxsdF8yMTQgPSAtPiBUW0NGR10uYmxhbmsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ1xceDIwJ1xuICAgICAgQGVxICggzqlobGx0XzIxNSA9IC0+IFRbQ0ZHXS5ibGFua19zcGxpdHRlciAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvKD86XFx4MjApKy9ndlxuICAgICAgQGVxICggzqlobGx0XzIxNiA9IC0+IFRbQ0ZHXS5ibGFua19zcGxpdHRlci51bmljb2RlU2V0cyAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWhsbHRfMjE3ID0gLT4gVFtDRkddLmJsYW5rX3NwbGl0dGVyLmdsb2JhbCAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paGxsdF8yMTggPSAtPiAnYSAgIGcgIHogICcucmVwbGFjZSBUW0NGR10uYmxhbmtfc3BsaXR0ZXIsICfDvCcgICksICdhw7xnw7x6w7wnXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIFQgPSBuZXcgSG9sbGVyaXRoX3R5cGVzcGFjZSB7IGJsYW5rOiAnIycsIH1cbiAgICAgIEBlcSAoIM6paGxsdF8yMTkgPSAtPiBUW0NGR10uYmxhbmsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyMnXG4gICAgICBAZXEgKCDOqWhsbHRfMjIwID0gLT4gVFtDRkddLmJsYW5rX3NwbGl0dGVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC8oPzpcXHgyMykrL2d2XG4gICAgICBAZXEgKCDOqWhsbHRfMjIxID0gLT4gVFtDRkddLmJsYW5rX3NwbGl0dGVyLnVuaWNvZGVTZXRzICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paGxsdF8yMjIgPSAtPiBUW0NGR10uYmxhbmtfc3BsaXR0ZXIuZ2xvYmFsICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlobGx0XzIyMyA9IC0+ICdhIyMjZyMjeiMjJy5yZXBsYWNlIFRbQ0ZHXS5ibGFua19zcGxpdHRlciwgJ8O8JyAgKSwgJ2HDvGfDvHrDvCdcbiAgICAgIEBlcSAoIM6paGxsdF8yMjQgPSAtPiBULm1hZ25pZmllcnMuaXNhICdBQkMgWFlaJyAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paGxsdF8yMjUgPSAtPiBULm1hZ25pZmllcnMuaXNhICdBQkMjWFlaJyAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlobGx0XzIyNiA9IC0+IFQuYmxhbmsuaXNhICcgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlobGx0XzIyNyA9IC0+IFQuYmxhbmsuaXNhICcjJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWhsbHRfMjI4ID0gLT4gVC5ibGFuay5pc2EgVFtDRkddLmJsYW5rICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBUID0gbmV3IEhvbGxlcml0aF90eXBlc3BhY2UoKVxuICAgIEBlcSAoIM6paGxsdF8yMjkgPSAtPiBULm5vbmVtcHR5X3RleHQuaXNhIDQgICAgICAgICAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6paGxsdF8yMzAgPSAtPiBULm5vbmVtcHR5X3RleHQuaXNhIGZhbHNlICAgICAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6paGxsdF8yMzEgPSAtPiBULm5vbmVtcHR5X3RleHQuaXNhICcnICAgICAgICAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6paGxsdF8yMzIgPSAtPiBULm5vbmVtcHR5X3RleHQuaXNhICd5ZXMnICAgICAgICApLCB0cnVlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgKCDOqWhsbHRfMjMzID0gLT4gVC5pbmNyZW1lbnRhbF90ZXh0LmlzYSAneWVzJyAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjM0ID0gLT4gVC5kZWNyZW1lbnRhbF90ZXh0LmlzYSAneWVzJyAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjM1ID0gLT4gVC5pbmNyZW1lbnRhbF90ZXh0LmRhdGEgICAgICAgICAgKSwgeyBjaHJzOiBbICd5JywgJ2UnLCAncycgXSwgZmFpbDogeyB4OiAneWVzJywgaWR4OiAxLCBwcnZfY2hyOiAneScsIGNocjogJ2UnIH0gfVxuICAgIEBlcSAoIM6paGxsdF8yMzYgPSAtPiBULmluY3JlbWVudGFsX3RleHQuaXNhICdhYmNkZWZ6JyApLCB0cnVlXG4gICAgQGVxICggzqlobGx0XzIzNyA9IC0+IFQuZGVjcmVtZW50YWxfdGV4dC5pc2EgJ2FiY2RlZnonICksIGZhbHNlXG4gICAgQGVxICggzqlobGx0XzIzOCA9IC0+IFQuaW5jcmVtZW50YWxfdGV4dC5kYXRhICAgICAgICAgICksIHsgY2hyczogWyAnYScsICdiJywgJ2MnLCAnZCcsICdlJywgJ2YnLCAneicsIF0sIH1cbiAgICBAZXEgKCDOqWhsbHRfMjM5ID0gLT4gVC5kZWNyZW1lbnRhbF90ZXh0LmRhdGEgICAgICAgICAgKSwgeyBjaHJzOiBbICdhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZicsICd6JyBdLCBmYWlsOiB7IHg6ICdhYmNkZWZ6JywgaWR4OiAxLCBwcnZfY2hyOiAnYScsIGNocjogJ2InIH0gfVxuICAgIEBlcSAoIM6paGxsdF8yNDAgPSAtPiBULmluY3JlbWVudGFsX3RleHQuaXNhICdhYmMwJyAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6paGxsdF8yNDEgPSAtPiBULmluY3JlbWVudGFsX3RleHQuZGF0YSAgICAgICAgICApLCB7IGNocnM6IFsgJ2EnLCAnYicsICdjJywgJzAnLCBdLCBmYWlsOiB7IHg6ICdhYmMwJywgaWR4OiAzLCBwcnZfY2hyOiAnYycsIGNocjogJzAnIH0gfVxuICAgIEBlcSAoIM6paGxsdF8yNDIgPSAtPiBULmRlY3JlbWVudGFsX3RleHQuaXNhICdjYmEnICAgICApLCB0cnVlXG4gICAgQGVxICggzqlobGx0XzI0MyA9IC0+IFQuZGVjcmVtZW50YWxfdGV4dC5kYXRhICAgICAgICAgICksIHsgY2hyczogWyAnYycsICdiJywgJ2EnLCBdLCB9XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgKCDOqWhsbHRfMjQ0ID0gLT4gVC5tYWduaWZpZXJzLmlzYSAnJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6paGxsdF8yNDUgPSAtPiBULm1hZ25pZmllcnMuZGF0YSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHsgbWVzc2FnZTogXCJleHBlY3RlZCBhIG1hZ25pZmllciwgZ290IGFuIGVtcHR5IHRleHRcIiwgfVxuICAgIEBlcSAoIM6paGxsdF8yNDYgPSAtPiBULm1hZ25pZmllcnMuaXNhICdBQkMgWFlaJyAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICBAZXEgKCDOqWhsbHRfMjQ3ID0gLT4gcGljayBULm1hZ25pZmllcnMuZGF0YSwgXFxcbiAgICAgICAgICAgICAgICAgICAgICAgWyAnbm1hZ19jaHJzX3JldmVyc2VkJywgJ19wbWFnX2xpc3QnLCAnbm1hZycsICdwbWFnJywgXSApLCB7IG5tYWdfY2hyc19yZXZlcnNlZDogWyAnQScsICdCJywgJ0MnIF0sIF9wbWFnX2xpc3Q6IFsgJyAnLCAnWCcsICdZJywgJ1onIF0sIG5tYWc6ICcgQ0JBJywgcG1hZzogJyBYWVonIH1cbiAgICBAZXEgKCDOqWhsbHRfMjQ4ID0gLT4gT2JqZWN0LmlzRnJvemVuIFQubWFnbmlmaWVycy5kYXRhLm5tYWdfY2hyc19yZXZlcnNlZCApLCB0cnVlXG4gICAgQGVxICggzqlobGx0XzI0OSA9IC0+IE9iamVjdC5pc0Zyb3plbiBULm1hZ25pZmllcnMuZGF0YS5fcG1hZ19saXN0ICAgICAgICAgICksIHRydWVcbiAgICBAZXEgKCDOqWhsbHRfMjUwID0gLT4gVC5tYWduaWZpZXJzLmlzYSAnQUJDXFxuWFlaJyAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjUxID0gLT4gVC5tYWduaWZpZXJzLmlzYSAnQUJDXFx0WFlaJyAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjUyID0gLT4gVC5tYWduaWZpZXJzLmlzYSAnQUJDICAgICAgICAgICAgIFhZWicgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgQGVxICggzqlobGx0XzI1MyA9IC0+IFQubWFnbmlmaWVycy5pc2EgJ0FCQyBEWCBZWicgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjU0ID0gLT4gVC5tYWduaWZpZXJzLmlzYSAnQUJEIENYWVonICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqlobGx0XzI1NSA9IC0+IFQudW5pbGl0ZXJhbHMuaXNhIG51bGwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjU2ID0gLT4gVC51bmlsaXRlcmFscy5pc2EgJycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6paGxsdF8yNTcgPSAtPiBULnVuaWxpdGVyYWxzLmlzYSAnVkJBJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgQGVxICggzqlobGx0XzI1OCA9IC0+IFQudW5pbGl0ZXJhbHMuaXNhICdFRkdISUpLTE0gTk9QUVJTVFVWVycgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWhsbHRfMjU5ID0gLT4gVC51bmlsaXRlcmFscy5pc2EgJ0VGR0hJSktMTSBOIE9QUVJTVFVWVycgICAgICAgICAgICApLCB0cnVlXG4gICAgQGVxICggzqlobGx0XzI2MCA9IC0+IFQudW5pbGl0ZXJhbHMuZGF0YSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgeyBfbnVuczogJ0VGR0hJSktMTScsIF96cHVuczogJ05PUFFSU1RVVlcnLCBfbnVuc19saXN0OiBbICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSicsICdLJywgJ0wnLCAnTScgXSwgX3pwdW5zX2xpc3Q6IFsgJ04nLCAnTycsICdQJywgJ1EnLCAnUicsICdTJywgJ1QnLCAnVScsICdWJywgJ1cnIF0gfVxuICAgIEBlcSAoIM6paGxsdF8yNjEgPSAtPiBULnVuaWxpdGVyYWxzLmlzYSAnTicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICBAZXEgKCDOqWhsbHRfMjYyID0gLT4gVC51bmlsaXRlcmFscy5kYXRhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB7IF9udW5zOiAnJywgX3pwdW5zOiAnTicsIF9udW5zX2xpc3Q6IFtdLCBfenB1bnNfbGlzdDogWyAnTicgXSB9XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAdGhyb3dzICggzqlobGx0XzI2MyA9IC0+IFQuZGlnaXRzZXQudmFsaWRhdGUgbnVsbCAgICAgICAgICAgICAgICAgICAgICAgICApLCAvbm90IGEgdmFsaWQgZGlnaXRzZXQvXG4gICAgQHRocm93cyAoIM6paGxsdF8yNjQgPSAtPiBULmRpZ2l0c2V0LnZhbGlkYXRlICcnICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgL25vdCBhIHZhbGlkIGRpZ2l0c2V0L1xuICAgIEB0aHJvd3MgKCDOqWhsbHRfMjY1ID0gLT4gVC5kaWdpdHNldC52YWxpZGF0ZSAnYScgICAgICAgICAgICAgICAgICAgICAgICAgICksIC9ub3QgYSB2YWxpZCBkaWdpdHNldC9cbiAgICBAZXEgICAgICggzqlobGx0XzI2NiA9IC0+IFQuZGlnaXRzZXQudmFsaWRhdGUgJ2FiJyAgICAgICAgICAgICAgICAgICAgICAgICApLCAnYWInXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAdGhyb3dzICggzqlobGx0XzI2NyA9IC0+ICAgbmV3IEhvbGxlcml0aF90eXBlc3BhY2UgeyBibGFuazogbnVsbCB9ICAgICAgICAgICAgICAgICAgICAgICAgKSwgL25vdCBhIHZhbGlkIGJsYW5rL1xuICAgIEB0aHJvd3MgKCDOqWhsbHRfMjY4ID0gLT4gICBuZXcgSG9sbGVyaXRoX3R5cGVzcGFjZSB7IGJsYW5rOiAnJyAgIH0gICAgICAgICAgICAgICAgICAgICAgICApLCAvbm90IGEgdmFsaWQgYmxhbmsvXG4gICAgQHRocm93cyAoIM6paGxsdF8yNjkgPSAtPiAgIG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlIHsgYmxhbms6ICctLScgfSAgICAgICAgICAgICAgICAgICAgICAgICksIC9ub3QgYSB2YWxpZCBibGFuay9cbiAgICBAdGhyb3dzICggzqlobGx0XzI3MCA9IC0+ICggbmV3IEhvbGxlcml0aF90eXBlc3BhY2UgeyBibGFuazogbnVsbCB9ICkuYmxhbmsudmFsaWRhdGUgbnVsbCAgKSwgL25vdCBhIHZhbGlkIGJsYW5rL1xuICAgIEB0aHJvd3MgKCDOqWhsbHRfMjcxID0gLT4gKCBuZXcgSG9sbGVyaXRoX3R5cGVzcGFjZSB7IGJsYW5rOiAnJyAgIH0gKS5ibGFuay52YWxpZGF0ZSAnJyAgICApLCAvbm90IGEgdmFsaWQgYmxhbmsvXG4gICAgQHRocm93cyAoIM6paGxsdF8yNzIgPSAtPiAoIG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlIHsgYmxhbms6ICctLScgfSApLmJsYW5rLnZhbGlkYXRlICctLScgICksIC9ub3QgYSB2YWxpZCBibGFuay9cbiAgICBAZXEgICAgICggzqlobGx0XzI3MyA9IC0+ICggbmV3IEhvbGxlcml0aF90eXBlc3BhY2UgeyBibGFuazogJy0nICB9ICkuYmxhbmsudmFsaWRhdGUgJy0nICAgKSwgJy0nXG4gICAgQGVxICAgICAoIM6paGxsdF8yNzQgPSAtPiAoIG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlIHsgYmxhbms6ICcgJyAgfSApLmJsYW5rLnZhbGlkYXRlICcgJyAgICksICcgJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHZhbGlkYXRlX2FuZF9jb21waWxlX2NmZ19nZW5lcmFsOiAtPlxuICAgIHsgaW50ZXJuYWxzLFxuICAgICAgSG9sbGVyaXRoLCAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IEhvbGxlcml0aF90eXBlc3BhY2UsXG4gICAgICBDRkcsICAgICAgICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoL2xpYi90eXBlcydcbiAgICAjIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAjIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgeyBpc0Zyb3plbjogaXNfZnJvemVuLCAgICAgICAgfSA9IE9iamVjdFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyMjIHRlc3RpbmcgYSBnZW5lcmFsIGFzc3VtcHRpb24gc28gd2UgZG9uJ3QgbWVzcyB1cDogIyMjXG4gICAgQGVxICggzqlobGx0XzI3NSA9IC0+ICggTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgLSAxICkgPT0gLSggTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVIgKyAxICkgKSwgdHJ1ZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgICMgVCA9IG5ldyBIb2xsZXJpdGhfdHlwZXNwYWNlKClcbiAgICAgIEB0aHJvd3MgKCDOqWhsbHRfMjc2ID0gLT4gSG9sbGVyaXRoLnZhbGlkYXRlX2FuZF9jb21waWxlX2NmZyB7fSAgICAgICAgICAgICAgICAgICksIC9ub3QgYSB2YWxpZCBkaWdpdHNldC9cbiAgICAgIEB0aHJvd3MgKCDOqWhsbHRfMjc3ID0gLT4gSG9sbGVyaXRoLnZhbGlkYXRlX2FuZF9jb21waWxlX2NmZyB7IGRpZ2l0c2V0OiAnJyAgICB9ICksIC9ub3QgYSB2YWxpZCBkaWdpdHNldC9cbiAgICAgIEB0aHJvd3MgKCDOqWhsbHRfMjc4ID0gLT4gSG9sbGVyaXRoLnZhbGlkYXRlX2FuZF9jb21waWxlX2NmZyB7IGRpZ2l0c2V0OiAnYScgICB9ICksIC9ub3QgYSB2YWxpZCBkaWdpdHNldC9cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnXzEwOiAtPlxuICAgIHsgaW50ZXJuYWxzLFxuICAgICAgSG9sbGVyaXRoLCAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgICB7IEhvbGxlcml0aF90eXBlc3BhY2UsXG4gICAgICBDRkcsICAgICAgICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoL2xpYi90eXBlcydcbiAgICAjIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAjIHsgaXNEZWVwU3RyaWN0RXF1YWw6IGVxdWFscywgIH0gPSByZXF1aXJlICdub2RlOnV0aWwnXG4gICAgeyBpc0Zyb3plbjogaXNfZnJvemVuLCAgICAgICAgfSA9IE9iamVjdFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2ZnXzEwID1cbiAgICAgIGJsYW5rOiAgICAgICAgJyAnICAgICAgICAgICAgICAgICAgICAgICAjIHNlcGFyYXRvciB1c2VkIGluIGBtYWduaWZpZXJzYCBhbmQgYHVuaWxpdGVyYWxzYFxuICAgICAgZGlnaXRzZXQ6ICAgICAnMDEyMzQ1Njc4OScgICAgICAgICAgICAgICMgZGlnaXRzOyBsZW5ndGggb2YgYGRpZ2l0c2V0YCBpcyB0aGUgYF9iYXNlYFxuICAgICAgbWFnbmlmaWVyczogICAnQUJDIFhZWicgICAgICAgICAgICAgICAgICNcbiAgICAgIHVuaWxpdGVyYWxzOiAgJ0ZHSElKS0xNIE4gT1BRUlNUVVYnICAgICAjIG5lZ2F0aXZlIHVuaWxpdGVyYWxzLCBibGFuaywgemVybyB1bmlsaXRlcmFsLCBibGFuaywgcG9zaXRpdmUgdW5pbGl0ZXJhbHNcbiAgICAgIGRpbWVuc2lvbjogICAgMyAgICAgICAgICAgICAgICAgICAgICAgICAjIG51bWJlciBvZiBpbmRpY2VzIHN1cHBvcnRlZFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGNmZyA9IEhvbGxlcml0aC52YWxpZGF0ZV9hbmRfY29tcGlsZV9jZmcgY2ZnXzEwXG4gICAgICBAZXEgKCDOqWhsbHRfMjc5ID0gLT4gY2ZnLmJsYW5rICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcgJ1xuICAgICAgQGVxICggzqlobGx0XzI4MCA9IC0+IGNmZy5kaWdpdHNldCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnMDEyMzQ1Njc4OSdcbiAgICAgIEBlcSAoIM6paGxsdF8yODEgPSAtPiBjZmcuX2RpZ2l0c19saXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgQXJyYXkuZnJvbSAnMDEyMzQ1Njc4OSdcbiAgICAgIEBlcSAoIM6paGxsdF8yODIgPSAtPiBjZmcuX25vdmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgKCBBcnJheS5mcm9tIGNmZy5kaWdpdHNldCApLmF0IC0xXG4gICAgICBAZXEgKCDOqWhsbHRfMjgzID0gLT4gY2ZnLl9sZWFkaW5nX25vdmFzX3JlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC8vLyBeICg/OiA5ICkqICg/PSAuKyAkICkgLy8vZ3ZcbiAgICAgIEBlcSAoIM6paGxsdF8yODQgPSAtPiBpc19mcm96ZW4gY2ZnLl9kaWdpdHNfbGlzdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlobGx0XzI4NSA9IC0+IGNmZy5fYmFzZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAxMFxuICAgICAgQGVxICggzqlobGx0XzI4NiA9IC0+IGNmZy5tYWduaWZpZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnQUJDIFhZWidcbiAgICAgIEBlcSAoIM6paGxsdF8yODcgPSAtPiBjZmcubm1hZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyBDQkEnXG4gICAgICBAZXEgKCDOqWhsbHRfMjg4ID0gLT4gY2ZnLnBtYWcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcgWFlaJ1xuICAgICAgQGVxICggzqlobGx0XzI4OSA9IC0+IGNmZy5fbm1hZ19saXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBBcnJheS5mcm9tICcgQ0JBJ1xuICAgICAgQGVxICggzqlobGx0XzI5MCA9IC0+IGNmZy5fcG1hZ19saXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBBcnJheS5mcm9tICcgWFlaJ1xuICAgICAgQGVxICggzqlobGx0XzI5MSA9IC0+IGNmZy51bmlsaXRlcmFscyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnRkdISUpLTE0gTiBPUFFSU1RVVidcbiAgICAgIEBlcSAoIM6paGxsdF8yOTIgPSAtPiBjZmcuX251bnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ0ZHSElKS0xNJ1xuICAgICAgQGVxICggzqlobGx0XzI5MyA9IC0+IGNmZy5fenB1bnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnTk9QUVJTVFVWJ1xuICAgICAgQGVxICggzqlobGx0XzI5NCA9IC0+IGNmZy5fbWF4X3pwdW4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgOFxuICAgICAgQGVxICggzqlobGx0XzI5NSA9IC0+IGNmZy5fbWluX251biAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAtOFxuICAgICAgQGVxICggzqlobGx0XzI5NiA9IC0+IGNmZy5fbnVuc19saXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbICdGJywgJ0cnLCAnSCcsICdJJywgJ0onLCAnSycsICdMJywgJ00nIF0sXG4gICAgICBAZXEgKCDOqWhsbHRfMjk3ID0gLT4gY2ZnLl96cHVuc19saXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgJ04nLCAnTycsICdQJywgJ1EnLCAnUicsICdTJywgJ1QnLCAnVScsICdWJywgXVxuICAgICAgQGVxICggzqlobGx0XzI5OCA9IC0+IGNmZy5kaW1lbnNpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAzXG4gICAgICBAZXEgKCDOqWhsbHRfMjk5ID0gLT4gKyggKCBjZmcuX2Jhc2UgKiogKCBjZmcuX3BtYWdfbGlzdC5sZW5ndGggLSAxICkgICkgLSAxICkgKSwgKzk5OVxuICAgICAgQGVxICggzqlobGx0XzMwMCA9IC0+IC0oICggY2ZnLl9iYXNlICoqICggY2ZnLl9ubWFnX2xpc3QubGVuZ3RoIC0gMSApICApIC0gMSApICksIC05OTlcbiAgICAgIEBlcSAoIM6paGxsdF8zMDEgPSAtPiBjZmcuX21heF9pbnRlZ2VyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgKzk5OVxuICAgICAgQGVxICggzqlobGx0XzMwMiA9IC0+IGNmZy5fbWluX2ludGVnZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAtOTk5XG4gICAgICBAZXEgKCDOqWhsbHRfMzAzID0gLT4gY2ZnLl9tYXhfZGlnaXRzX3Blcl9pZHggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDNcbiAgICAgIEBlcSAoIM6paGxsdF8zMDQgPSAtPiBjZmcuX2FscGhhYmV0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJzAxMjM0NTY3ODlBQkNGR0hJSktMTU5PUFFSU1RVVlhZWidcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgaCA9IG5ldyBIb2xsZXJpdGggY2ZnXzEwXG4gICAgICBAZXEgKCDOqWhsbHRfMzA1ID0gLT4gaC5jZmcgKSwgY2ZnXG4gICAgICAjIEBlcSAoIM6paGxsdF8zMDYgPSAtPiBoLmVuY29kZSAgLTk5OCApLCBudWxsXG4gICAgICBAZXEgKCDOqWhsbHRfMzA3ID0gLT4gaC5lbmNvZGUgICAtMTIgKSwgJ0I4NydcbiAgICAgIEBlcSAoIM6paGxsdF8zMDggPSAtPiBoLmVuY29kZSAgIC0xMSApLCAnQjg4J1xuICAgICAgQGVxICggzqlobGx0XzMwOSA9IC0+IGguZW5jb2RlICAgLTEwICksICdCODknXG4gICAgICBAZXEgKCDOqWhsbHRfMzEwID0gLT4gaC5lbmNvZGUgICAgLTkgKSwgJ0MwJ1xuICAgICAgQGVxICggzqlobGx0XzMxMSA9IC0+IGguZW5jb2RlICAgIC04ICksICdGJ1xuICAgICAgQGVxICggzqlobGx0XzMxMiA9IC0+IGguZW5jb2RlICAgIC0yICksICdMJ1xuICAgICAgQGVxICggzqlobGx0XzMxMyA9IC0+IGguZW5jb2RlICAgIC0xICksICdNJ1xuICAgICAgQGVxICggzqlobGx0XzMxNCA9IC0+IGguZW5jb2RlICAgICAwICksICdOJ1xuICAgICAgQGVxICggzqlobGx0XzMxNSA9IC0+IGguZW5jb2RlICAgICsxICksICdPJ1xuICAgICAgQGVxICggzqlobGx0XzMxNiA9IC0+IGguZW5jb2RlICAgICsyICksICdQJ1xuICAgICAgQGVxICggzqlobGx0XzMxNyA9IC0+IGguZW5jb2RlICAgICs4ICksICdWJ1xuICAgICAgQGVxICggzqlobGx0XzMxOCA9IC0+IGguZW5jb2RlICAgICs5ICksICdYOSdcbiAgICAgIEBlcSAoIM6paGxsdF8zMTkgPSAtPiBoLmVuY29kZSAgICsxMCApLCAnWTEwJ1xuICAgICAgQGVxICggzqlobGx0XzMyMCA9IC0+IGguZW5jb2RlICAgKzExICksICdZMTEnXG4gICAgICBAZXEgKCDOqWhsbHRfMzIxID0gLT4gaC5lbmNvZGUgICArMTIgKSwgJ1kxMidcbiAgICAgIEBlcSAoIM6paGxsdF8zMjIgPSAtPiBoLmVuY29kZSAgKzk5OCApLCAnWjk5OCdcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnXzEwX25vX3VuaWx0ZXJhbHM6IC0+XG4gICAgeyBpbnRlcm5hbHMsXG4gICAgICBIb2xsZXJpdGgsICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgSG9sbGVyaXRoX3R5cGVzcGFjZSxcbiAgICAgIENGRywgICAgICAgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgvbGliL3R5cGVzJ1xuICAgICMgeyB0eXBlX29mLCAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICMgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCAgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICB7IGlzRnJvemVuOiBpc19mcm96ZW4sICAgICAgICB9ID0gT2JqZWN0XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjZmdfMTBfbm9fdW5pbGl0ZXJhbHMgPVxuICAgICAgYmxhbms6ICAgICAgICAnICcgICAgICAgICAgICAgICAgICAgICAgICMgc2VwYXJhdG9yIHVzZWQgaW4gYG1hZ25pZmllcnNgIGFuZCBgdW5pbGl0ZXJhbHNgXG4gICAgICBkaWdpdHNldDogICAgICcwMTIzNDU2Nzg5JyAgICAgICAgICAgICAgIyBkaWdpdHM7IGxlbmd0aCBvZiBgZGlnaXRzZXRgIGlzIHRoZSBgX2Jhc2VgXG4gICAgICBtYWduaWZpZXJzOiAgICdBQkMgWFlaJyAgICAgICAgICAgICAgICAgI1xuICAgICAgdW5pbGl0ZXJhbHM6ICAnTicgICAgICAgICAgICAgICAgICAgICAgICMgb25seSBoYXMgemVybyB1bmlsaXRlcmFsXG4gICAgICBkaW1lbnNpb246ICAgIDMgICAgICAgICAgICAgICAgICAgICAgICAgIyBudW1iZXIgb2YgaW5kaWNlcyBzdXBwb3J0ZWRcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBjZmcgPSBIb2xsZXJpdGgudmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnIGNmZ18xMF9ub191bmlsaXRlcmFsc1xuICAgICAgQGVxICggzqlobGx0XzMyMyA9IC0+IGNmZy5ibGFuayAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnICdcbiAgICAgIEBlcSAoIM6paGxsdF8zMjQgPSAtPiBjZmcuZGlnaXRzZXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJzAxMjM0NTY3ODknXG4gICAgICBAZXEgKCDOqWhsbHRfMzI1ID0gLT4gY2ZnLl9kaWdpdHNfbGlzdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIEFycmF5LmZyb20gJzAxMjM0NTY3ODknXG4gICAgICBAZXEgKCDOqWhsbHRfMzI2ID0gLT4gY2ZnLl9ub3ZhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICggQXJyYXkuZnJvbSBjZmcuZGlnaXRzZXQgKS5hdCAtMVxuICAgICAgQGVxICggzqlobGx0XzMyNyA9IC0+IGNmZy5fbGVhZGluZ19ub3Zhc19yZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvLy8gXiAoPzogOSApKiAoPz0gLisgJCApIC8vL2d2XG4gICAgICBAZXEgKCDOqWhsbHRfMzI4ID0gLT4gaXNfZnJvemVuIGNmZy5fZGlnaXRzX2xpc3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paGxsdF8zMjkgPSAtPiBjZmcuX2Jhc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDEwXG4gICAgICBAZXEgKCDOqWhsbHRfMzMwID0gLT4gY2ZnLm1hZ25pZmllcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdBQkMgWFlaJ1xuICAgICAgQGVxICggzqlobGx0XzMzMSA9IC0+IGNmZy5ubWFnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnIENCQSdcbiAgICAgIEBlcSAoIM6paGxsdF8zMzIgPSAtPiBjZmcucG1hZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyBYWVonXG4gICAgICBAZXEgKCDOqWhsbHRfMzMzID0gLT4gY2ZnLl9ubWFnX2xpc3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBBcnJheS5mcm9tICcgQ0JBJ1xuICAgICAgQGVxICggzqlobGx0XzMzNCA9IC0+IGNmZy5fcG1hZ19saXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgQXJyYXkuZnJvbSAnIFhZWidcbiAgICAgIEBlcSAoIM6paGxsdF8zMzUgPSAtPiBjZmcudW5pbGl0ZXJhbHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ04nXG4gICAgICBAZXEgKCDOqWhsbHRfMzM2ID0gLT4gY2ZnLl9udW5zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnJ1xuICAgICAgQGVxICggzqlobGx0XzMzNyA9IC0+IGNmZy5fenB1bnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ04nXG4gICAgICBAZXEgKCDOqWhsbHRfMzM4ID0gLT4gY2ZnLl9udW5zX2xpc3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgW11cbiAgICAgIEBlcSAoIM6paGxsdF8zMzkgPSAtPiBjZmcuX3pwdW5zX2xpc3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbICdOJywgXVxuICAgICAgQGVxICggzqlobGx0XzM0MCA9IC0+IGNmZy5kaW1lbnNpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAzXG4gICAgICBAZXEgKCDOqWhsbHRfMzQxID0gLT4gKyggKCBjZmcuX2Jhc2UgKiogKCBjZmcuX3BtYWdfbGlzdC5sZW5ndGggLSAxICkgICkgLSAxICkgKSwgKzk5OVxuICAgICAgQGVxICggzqlobGx0XzM0MiA9IC0+IC0oICggY2ZnLl9iYXNlICoqICggY2ZnLl9ubWFnX2xpc3QubGVuZ3RoIC0gMSApICApIC0gMSApICksIC05OTlcbiAgICAgIEBlcSAoIM6paGxsdF8zNDMgPSAtPiBjZmcuX21heF9pbnRlZ2VyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgKzk5OVxuICAgICAgQGVxICggzqlobGx0XzM0NCA9IC0+IGNmZy5fbWluX2ludGVnZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAtOTk5XG4gICAgICBAZXEgKCDOqWhsbHRfMzQ1ID0gLT4gY2ZnLl9tYXhfZGlnaXRzX3Blcl9pZHggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDNcbiAgICAgIEBlcSAoIM6paGxsdF8zNDYgPSAtPiBjZmcuX2FscGhhYmV0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJzAxMjM0NTY3ODlBQkNOWFlaJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBoID0gbmV3IEhvbGxlcml0aCBjZmdfMTBfbm9fdW5pbGl0ZXJhbHNcbiAgICAgIEBlcSAoIM6paGxsdF8zNDcgPSAtPiBoLmNmZyApLCBjZmdcbiAgICAgIEBlcSAoIM6paGxsdF8zNDggPSAtPiBoLmVuY29kZSBbIDAsIF0gKSwgJ04nXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHZhbGlkYXRlX2FuZF9jb21waWxlX2NmZ18xMjg6IC0+XG4gICAgeyBpbnRlcm5hbHMsXG4gICAgICBIb2xsZXJpdGgsICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHsgSG9sbGVyaXRoX3R5cGVzcGFjZSxcbiAgICAgIENGRywgICAgICAgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgvbGliL3R5cGVzJ1xuICAgICMgeyB0eXBlX29mLCAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICMgeyBpc0RlZXBTdHJpY3RFcXVhbDogZXF1YWxzLCAgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgICB7IGlzRnJvemVuOiBpc19mcm96ZW4sICAgICAgICB9ID0gT2JqZWN0XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjZmdfMTI4ID1cbiAgICAgICMjIyAgICAgICAgICAgICAgICAgICAgIDEgICAgICAgICAyICAgICAgICAgMyAgICAgICAjIyNcbiAgICAgICMjIyAgICAgICAgICAgIDEyMzQ1Njc4OTAxMjM0NTY3ODkwMTIzNDU2Nzg5MDEyICAgICAjIyNcbiAgICAgIGRpZ2l0c2V0OiAgICAgJyEjJCUmKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCJyArIFxcXG4gICAgICAgICAgICAgICAgICAgICdDREVGR0hJSktMTU5PUFFSU1RVVldYWVpbXV5fYGFiYycgKyBcXFxuICAgICAgICAgICAgICAgICAgICAnZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+wqHCosKjwqTCpScgKyBcXFxuICAgICAgICAgICAgICAgICAgICAnwqbCp8KowqnCqsKrwqzCrsKvwrDCscKywrPCtMK1wrbCt8K4wrnCusK7wrzCvcK+wr/DgMOBw4LDg8OEw4XDhidcbiAgICAgIG1hZ25pZmllcnM6ICAgJ8OHw4jDicOKw4vDjMONw44gw7jDucO6w7vDvMO9w77DvydcbiAgICAgIHVuaWxpdGVyYWxzOiAgJ8OPw5DDkcOSw5PDlMOVw5bDl8OYw5nDmsObw5zDncOew5/DoMOhw6Igw6Mgw6TDpcOmw6fDqMOpw6rDq8Osw63DrsOvw7DDscOyw7PDtMO1w7bDtydcbiAgICAgIGRpbWVuc2lvbjogICAgNVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGNmZyA9IEhvbGxlcml0aC52YWxpZGF0ZV9hbmRfY29tcGlsZV9jZmcgY2ZnXzEyOFxuICAgICAgQGVxICggzqlobGx0XzM0OSA9IC0+IGNmZy5ibGFuayAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnICdcbiAgICAgIEBlcSAoIM6paGxsdF8zNTAgPSAtPiBjZmcuZGlnaXRzZXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyEjJCUmKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCJyArIFxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NERUZHSElKS0xNTk9QUVJTVFVWV1hZWltdXl9gYWJjJyArIFxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fsKhwqLCo8KkwqUnICsgXFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnwqbCp8KowqnCqsKrwqzCrsKvwrDCscKywrPCtMK1wrbCt8K4wrnCusK7wrzCvcK+wr/DgMOBw4LDg8OEw4XDhidcbiAgICAgIEBlcSAoIM6paGxsdF8zNTEgPSAtPiBjZmcuX2RpZ2l0c19saXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgQXJyYXkuZnJvbSBjZmcuZGlnaXRzZXRcbiAgICAgIEBlcSAoIM6paGxsdF8zNTIgPSAtPiBjZmcuX25vdmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgKCBBcnJheS5mcm9tIGNmZy5kaWdpdHNldCApLmF0IC0xXG4gICAgICBAZXEgKCDOqWhsbHRfMzUzID0gLT4gY2ZnLl9sZWFkaW5nX25vdmFzX3JlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC8vLyBeICg/OiDDhiApKiAoPz0gLisgJCApIC8vL2d2XG4gICAgICBAZXEgKCDOqWhsbHRfMzU0ID0gLT4gY2ZnLm1hZ25pZmllcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDh8OIw4nDisOLw4zDjcOOIMO4w7nDusO7w7zDvcO+w78nXG4gICAgICBAZXEgKCDOqWhsbHRfMzU1ID0gLT4gY2ZnLm5tYWcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcgw47DjcOMw4vDisOJw4jDhydcbiAgICAgIEBlcSAoIM6paGxsdF8zNTYgPSAtPiBjZmcucG1hZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyDDuMO5w7rDu8O8w73DvsO/J1xuICAgICAgQGVxICggzqlobGx0XzM1NyA9IC0+IGNmZy5fbm1hZ19saXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgQXJyYXkuZnJvbSAnIMOOw43DjMOLw4rDicOIw4cnXG4gICAgICBAZXEgKCDOqWhsbHRfMzU4ID0gLT4gY2ZnLl9wbWFnX2xpc3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBBcnJheS5mcm9tICcgw7jDucO6w7vDvMO9w77DvydcbiAgICAgIEBlcSAoIM6paGxsdF8zNTkgPSAtPiBjZmcudW5pbGl0ZXJhbHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8OPw5DDkcOSw5PDlMOVw5bDl8OYw5nDmsObw5zDncOew5/DoMOhw6Igw6Mgw6TDpcOmw6fDqMOpw6rDq8Osw63DrsOvw7DDscOyw7PDtMO1w7bDtydcbiAgICAgIEBlcSAoIM6paGxsdF8zNjAgPSAtPiBjZmcuX251bnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICfDj8OQw5HDksOTw5TDlcOWw5fDmMOZw5rDm8Ocw53DnsOfw6DDocOiJ1xuICAgICAgQGVxICggzqlobGx0XzM2MSA9IC0+IGNmZy5fenB1bnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ8Ojw6TDpcOmw6fDqMOpw6rDq8Osw63DrsOvw7DDscOyw7PDtMO1w7bDtydcbiAgICAgIEBlcSAoIM6paGxsdF8zNjIgPSAtPiBjZmcuX251bnNfbGlzdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBBcnJheS5mcm9tICfDj8OQw5HDksOTw5TDlcOWw5fDmMOZw5rDm8Ocw53DnsOfw6DDocOiJ1xuICAgICAgQGVxICggzqlobGx0XzM2MyA9IC0+IGNmZy5fenB1bnNfbGlzdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIEFycmF5LmZyb20gJ8Ojw6TDpcOmw6fDqMOpw6rDq8Osw63DrsOvw7DDscOyw7PDtMO1w7bDtydcbiAgICAgIEBlcSAoIM6paGxsdF8zNjQgPSAtPiBjZmcuX21pbl9pbnRlZ2VyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgLSggKCAxMjggKiogNyApIC0gMSApXG4gICAgICBAZXEgKCDOqWhsbHRfMzY1ID0gLT4gY2ZnLl9tYXhfaW50ZWdlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICsoICggMTI4ICoqIDcgKSAtIDEgKVxuICAgICAgIyBAZXEgKCDOqWhsbHRfMzY2ID0gLT4gY2ZnLl9tYXhfZGlnaXRzX3Blcl9pZHggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDNcbiAgICAgICMgQGVxICggzqlobGx0XzM2NyA9IC0+IGNmZy5fYWxwaGFiZXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnMDEyMzQ1Njc4OUFCQ0VGR0hJSktMTU5PUFFSU1RVVldYWVonXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6paGxsdF8zNjggPSAtPiBpc19mcm96ZW4gY2ZnLl9kaWdpdHNfbGlzdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlobGx0XzM2OSA9IC0+IGNmZy5fYmFzZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgMTI4XG4gICAgICBAZXEgKCDOqWhsbHRfMzcwID0gLT4gY2ZnLmRpbWVuc2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgaCA9IG5ldyBIb2xsZXJpdGggY2ZnXzEyOFxuICAgICAgQGVxICggzqlobGx0XzM3MSA9IC0+IGguY2ZnICksIGNmZ1xuICAgICAgIyBAZXEgKCDOqWhsbHRfMzcyID0gLT4gaC5lbmNvZGUgWyAwLCBdICksIG51bGxcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdHlwZXM6IC0+XG4gICAgeyBIb2xsZXJpdGhfdHlwZXNwYWNlLFxuICAgICAgY3JlYXRlX21heF9pbnRlZ2VyXyQsXG4gICAgICBDRkcsICAgICAgICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoL2xpYi90eXBlcydcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBUID0gbmV3IEhvbGxlcml0aF90eXBlc3BhY2UoKVxuICAgICAgQGVxICAgICAoIM6paGxsdF8zNzMgPSAtPiBULl9iYXNlLmlzYSAtMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzc0ID0gLT4gVC5fYmFzZS5pc2EgIDAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgICAgICggzqlobGx0XzM3NSA9IC0+IFQuX2Jhc2UuaXNhICsxICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICAgICAoIM6paGxsdF8zNzYgPSAtPiBULl9iYXNlLmlzYSArMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6paGxsdF8zNzcgPSAtPiBULl9tYXhfaW50ZWdlcl8kLmlzYSBudWxsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICAgICAoIM6paGxsdF8zNzggPSAtPiBULl9tYXhfaW50ZWdlcl8kLmlzYSA5LCAgICAgICAgICAxMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgICAgICggzqlobGx0XzM3OSA9IC0+IFQuX21heF9pbnRlZ2VyXyQuaXNhIDk5LCAgICAgICAgIDEwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzgwID0gLT4gVC5fbWF4X2ludGVnZXJfJC5pc2EgOTk5OTk5OTksICAgMTAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6paGxsdF8zODEgPSAtPiBULl9tYXhfaW50ZWdlcl8kLmlzYSAtMTAsICAgICAgICAxMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICAgICAoIM6paGxsdF8zODIgPSAtPiAvbm90IGEgcG9zaXRpdmUgc2FmZSBpbnRlZ2VyLy50ZXN0IFQuX21heF9pbnRlZ2VyXyQuZGF0YS5tZXNzYWdlICAgICApLCB0cnVlXG4gICAgICBAZXEgICAgICggzqlobGx0XzM4MyA9IC0+IFQuX21heF9pbnRlZ2VyXyQuaXNhIDB4ZmZmZiwgICAgIDE2ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzg0ID0gLT4gVC5fbWF4X2ludGVnZXJfJC5pc2EgMHg3ZmZmZmZmZiwgMTYgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEB0aHJvd3MgKCDOqWhsbHRfMzg1ID0gLT4gVC5fbWF4X2ludGVnZXJfJC52YWxpZGF0ZSA1LCAxMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgL1xcKF9tYXhfaW50ZWdlcl9cXCRcXCkgbm90IGEgdmFsaWQgX21heF9pbnRlZ2VyX1xcJDogNSDigJMgeCBub3QgYSBwb3NpdGl2ZSBhbGwtbmluZXJzL1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBUID0gbmV3IEhvbGxlcml0aF90eXBlc3BhY2UoKVxuICAgICAgUiA9IHsgX2Jhc2U6IDE2LCBfbWF4X2RpZ2l0c19wZXJfaWR4OiA0LCB9XG4gICAgICBAZXEgICAgICggzqlobGx0XzM4NiA9IC0+IFQuX21heF9pbnRlZ2VyXyQuaXNhICggUi5fYmFzZSAqKiBSLl9tYXhfZGlnaXRzX3Blcl9pZHggKSAtIDEsIFIuX2Jhc2UgKSwgdHJ1ZVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBUID0gbmV3IEhvbGxlcml0aF90eXBlc3BhY2UoKVxuICAgICAgQGVxICAgICAoIM6paGxsdF8zODcgPSAtPiBULl9tYXhfaW50ZWdlcl8kLmlzYSAoIDEyOCAqKiAxICkgLSAxLCAxMjggICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6paGxsdF8zODggPSAtPiBULl9tYXhfaW50ZWdlcl8kLmlzYSAoIDEyOCAqKiAyICkgLSAxLCAxMjggICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6paGxsdF8zODkgPSAtPiBULl9tYXhfaW50ZWdlcl8kLmlzYSAoIDEyOCAqKiAzICkgLSAxLCAxMjggICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6paGxsdF8zOTAgPSAtPiBULl9tYXhfaW50ZWdlcl8kLmlzYSAoIDEyOCAqKiA0ICkgLSAxLCAxMjggICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6paGxsdF8zOTEgPSAtPiBULl9tYXhfaW50ZWdlcl8kLmlzYSAoIDEyOCAqKiA1ICkgLSAxLCAxMjggICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6paGxsdF8zOTIgPSAtPiBULl9tYXhfaW50ZWdlcl8kLmlzYSAoIDEyOCAqKiA2ICkgLSAxLCAxMjggICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6paGxsdF8zOTMgPSAtPiBULl9tYXhfaW50ZWdlcl8kLmlzYSAoIDEyOCAqKiA3ICkgLSAxLCAxMjggICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6paGxsdF8zOTQgPSAtPiBULl9tYXhfaW50ZWdlcl8kLmlzYSAoIDEyOCAqKiA4ICkgLSAxLCAxMjggICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAgICAgKCDOqWhsbHRfMzk1ID0gLT4gVC5jcmVhdGVfbWF4X2ludGVnZXJfJCB7IF9iYXNlOiAxMCwgZGlnaXRzX251bW9mOiAyLCB9ICApLCA5OVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZGVtb19tYXhfaW50ZWdlciA9IC0+XG4gIGxvZ190b19iYXNlICAgICAgICAgICAgICAgPSAoIG4sIGJhc2UgKSAtPiAoIE1hdGgubG9nIG4gKSAvICggTWF0aC5sb2cgYmFzZSApXG4gIGdldF9yZXF1aXJlZF9kaWdpdHMgICAgICAgPSAoIG4sIGJhc2UgKSAtPiBNYXRoLmNlaWwgbG9nX3RvX2Jhc2UgbiwgYmFzZVxuICBnZXRfbWF4X25pbmVyX2RpZ2l0X2NvdW50ID0gKCBuLCBiYXNlICkgLT4gKCBnZXRfcmVxdWlyZWRfZGlnaXRzIG4sIGJhc2UgKSAtIDFcbiAgZ2V0X21heF9pbnRlZ2VyICAgICAgICAgICA9ICggbiwgYmFzZSApIC0+ICggYmFzZSAqKiBnZXRfbWF4X25pbmVyX2RpZ2l0X2NvdW50IG4sIGJhc2UgKSAtIDFcbiAgaW5mbyAnzqlobGx0XzM5NicsIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLnRvU3RyaW5nIDE2XG4gIGluZm8gJ86paGxsdF8zOTcnLCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUi50b1N0cmluZyAzMlxuICB3aGlzcGVyICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gIGluZm8gJ86paGxsdF8zOTgnLCAoIDMyICoqIDQgLSAxICkudG9TdHJpbmcgMzJcbiAgaW5mbyAnzqlobGx0XzM5OScsICggMzIgKiogNCAtIDEgKS50b1N0cmluZyAzMlxuICB3aGlzcGVyICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gIGluZm8gJ86paGxsdF80MDAnLCBnZXRfcmVxdWlyZWRfZGlnaXRzIDMyLCAgICAgICAzMlxuICBpbmZvICfOqWhsbHRfNDAxJywgZ2V0X3JlcXVpcmVkX2RpZ2l0cyAzMiAqKiA2LCAgMzJcbiAgaW5mbyAnzqlobGx0XzQwMicsIGdldF9yZXF1aXJlZF9kaWdpdHMgMWU2LCAgICAgIDEwXG4gIGluZm8gJ86paGxsdF80MDMnLCBnZXRfcmVxdWlyZWRfZGlnaXRzIDIwLCAgICAgICAxMFxuICB3aGlzcGVyICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gIGluZm8gJ86paGxsdF80MDQnLCBtYXhfZGlnaXRzX2Jhc2VfMTAgICAgPSBnZXRfbWF4X25pbmVyX2RpZ2l0X2NvdW50IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAxMFxuICBpbmZvICfOqWhsbHRfNDA1JywgbWF4X2RpZ2l0c19iYXNlXzE2ICAgID0gZ2V0X21heF9uaW5lcl9kaWdpdF9jb3VudCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiwgMTZcbiAgaW5mbyAnzqlobGx0XzQwNicsIG1heF9kaWdpdHNfYmFzZV8zMiAgICA9IGdldF9tYXhfbmluZXJfZGlnaXRfY291bnQgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsIDMyXG4gIGluZm8gJ86paGxsdF80MDcnLCBtYXhfZGlnaXRzX2Jhc2VfMzYgICAgPSBnZXRfbWF4X25pbmVyX2RpZ2l0X2NvdW50IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAzNlxuICBpbmZvICfOqWhsbHRfNDA4JywgbWF4X2RpZ2l0c18xYmFzZV8yOCAgID0gZ2V0X21heF9uaW5lcl9kaWdpdF9jb3VudCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiwgMTI4XG4gICMgZm9yIGJhc2UgaW4gWyAyIC4uIDEyOCBdXG4gICMgICBpbmZvICfOqWhsbHRfNDA5JywgeyBiYXNlLCB9LCAoIE1hdGguY2VpbCBsb2dfdG9fYmFzZSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiwgYmFzZSApIC0gMVxuICB3aGlzcGVyICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gIGluZm8gJ86paGxsdF80MTAnLCAnOScucmVwZWF0IG1heF9kaWdpdHNfYmFzZV8xMFxuICBpbmZvICfOqWhsbHRfNDExJywgJ2YnLnJlcGVhdCBtYXhfZGlnaXRzX2Jhc2VfMTZcbiAgaW5mbyAnzqlobGx0XzQxMicsICd2Jy5yZXBlYXQgbWF4X2RpZ2l0c19iYXNlXzMyXG4gIHdoaXNwZXIgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgaW5mbyAnzqlobGx0XzQxMycsICggKCBiYXNlID0gMTAgKSAqKiBtYXhfZGlnaXRzX2Jhc2VfMTAgKSAtIDFcbiAgaW5mbyAnzqlobGx0XzQxNCcsICggKCBiYXNlID0gMTYgKSAqKiBtYXhfZGlnaXRzX2Jhc2VfMTYgKSAtIDFcbiAgaW5mbyAnzqlobGx0XzQxNScsICggKCBiYXNlID0gMzIgKSAqKiBtYXhfZGlnaXRzX2Jhc2VfMzIgKSAtIDFcbiAgaW5mbyAnzqlobGx0XzQxNicsICggKCBiYXNlID0gMzYgKSAqKiBtYXhfZGlnaXRzX2Jhc2VfMzYgKSAtIDFcbiAgd2hpc3BlciAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUJ1xuICBpbmZvICfOqWhsbHRfNDE3JywgZ2V0X21heF9pbnRlZ2VyIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAxMFxuICBpbmZvICfOqWhsbHRfNDE4JywgZ2V0X21heF9pbnRlZ2VyIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAxNlxuICBpbmZvICfOqWhsbHRfNDE5JywgZ2V0X21heF9pbnRlZ2VyIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAzMlxuICBpbmZvICfOqWhsbHRfNDIwJywgZ2V0X21heF9pbnRlZ2VyIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAzNlxuICBpbmZvICfOqWhsbHRfNDIxJywgZ2V0X21heF9pbnRlZ2VyIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAxMjhcbiAgd2hpc3BlciAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUJ1xuICBpbmZvICfOqWhsbHRfNDIyJywgKCBwYXJzZUludCAoICc5Jy5yZXBlYXQgbWF4X2RpZ2l0c19iYXNlXzEwICksIDEwIClcbiAgaW5mbyAnzqlobGx0XzQyMycsICggcGFyc2VJbnQgKCAnZicucmVwZWF0IG1heF9kaWdpdHNfYmFzZV8xNiApLCAxNiApXG4gIGluZm8gJ86paGxsdF80MjQnLCAoIHBhcnNlSW50ICggJ3YnLnJlcGVhdCBtYXhfZGlnaXRzX2Jhc2VfMzIgKSwgMzIgKVxuICBpbmZvICfOqWhsbHRfNDI1JywgKCBwYXJzZUludCAoICd6Jy5yZXBlYXQgbWF4X2RpZ2l0c19iYXNlXzM2ICksIDM2IClcbiAgaW5mbyAnzqlobGx0XzQyNicsICggcGFyc2VJbnQgKCAnOScucmVwZWF0IG1heF9kaWdpdHNfYmFzZV8xMCApLCAxMCApIDw9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG4gIGluZm8gJ86paGxsdF80MjcnLCAoIHBhcnNlSW50ICggJ2YnLnJlcGVhdCBtYXhfZGlnaXRzX2Jhc2VfMTYgKSwgMTYgKSA8PSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUlxuICBpbmZvICfOqWhsbHRfNDI4JywgKCBwYXJzZUludCAoICd2Jy5yZXBlYXQgbWF4X2RpZ2l0c19iYXNlXzMyICksIDMyICkgPD0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcbiAgaW5mbyAnzqlobGx0XzQyOScsICggcGFyc2VJbnQgKCAneicucmVwZWF0IG1heF9kaWdpdHNfYmFzZV8zNiApLCAzNiApIDw9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG4gIHdoaXNwZXIgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgaW5mbyAnzqlobGx0XzQzMCcsICs5OTkgKyAtOTk5XG4gIGluZm8gJ86paGxsdF80MzEnLCArOTk5ICsgLTFcbiAgaW5mbyAnzqlobGx0XzQzMicsIC0oIC05OTkgLSAxICkgKyAtOTk5XG4gIGluZm8gJ86paGxsdF80MzMnLCAtKCAtOTk5IC0gMSApICsgLTk5OFxuICBpbmZvICfOqWhsbHRfNDM0JywgLSggLTk5OSAtIDEgKSArIC05OTdcbiAgaW5mbyAnzqlobGx0XzQzNScsIC0oIC05OTkgLSAxICkgKyAtM1xuICBpbmZvICfOqWhsbHRfNDM2JywgLSggLTk5OSAtIDEgKSArIC0yXG4gIGluZm8gJ86paGxsdF80MzcnLCAtKCAtOTk5IC0gMSApICsgLTFcbiAgaW5mbyAnzqlobGx0XzQzOCcsIFwiI3sgLSggLTk5OSAtIDEgKSArIC0zIH1cIi5yZXBsYWNlIC8vLyBeIDkqPyAoPz0gLiAkICkgLy8vZ3YsICcnXG4gIGluZm8gJ86paGxsdF80MzknLCBcIiN7IC0oIC05OTkgLSAxICkgKyAtMiB9XCIucmVwbGFjZSAvLy8gXiA5Kj8gKD89IC4gJCApIC8vL2d2LCAnJ1xuICBpbmZvICfOqWhsbHRfNDQwJywgXCIjeyAtKCAtOTk5IC0gMSApICsgLTEgfVwiLnJlcGxhY2UgLy8vIF4gOSo/ICg/PSAuICQgKSAvLy9ndiwgJydcbiAgcmV0dXJuIG51bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICB7IHNob3dfcmVxdWlyZXMsIH0gPSByZXF1aXJlICcuLi8uLi9zbmlwcGV0cy9saWIvZGVtby1zaG93LXJlcXVpcmVzLmpzJ1xuICBzaG93X3JlcXVpcmVzICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCBAaG9sbGVyaXRoXG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgaG9sbGVyaXRoXzEwbXZwMl9iaWdfc2h1ZmZsZTogQGhvbGxlcml0aC5ob2xsZXJpdGhfMTBtdnAyX2JpZ19zaHVmZmxlLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgaG9sbGVyaXRoXzEyOF9iaWdfc2h1ZmZsZTogQGhvbGxlcml0aC5ob2xsZXJpdGhfMTI4X2JpZ19zaHVmZmxlLCB9XG5cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHR5cGVzOiBAaG9sbGVyaXRoLnR5cGVzLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBoMTBtdnAyX3NvcnRpbmdfMjogQGhvbGxlcml0aC5oMTBtdnAyX3NvcnRpbmdfMiwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnXzEwOiBAaG9sbGVyaXRoLnZhbGlkYXRlX2FuZF9jb21waWxlX2NmZ18xMCwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgaDEwbXZwMl9kZWNvZGVfdW5pdHM6IEBob2xsZXJpdGguaDEwbXZwMl9kZWNvZGVfdW5pdHMsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGdldF9sZWFkaW5nX25vdmFzX3JlOiBAaG9sbGVyaXRoLmdldF9sZWFkaW5nX25vdmFzX3JlLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB2YWxpZGF0ZV9hbmRfY29tcGlsZV9jZmc6IEBob2xsZXJpdGgudmFsaWRhdGVfYW5kX2NvbXBpbGVfY2ZnLCB9XG4gICMgZGVtb19tYXhfaW50ZWdlcigpXG5cblxuIl19
