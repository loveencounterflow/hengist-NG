(async function() {
  'use strict';
  var GTNG, GUY, TMP_types, Test, WGUY, alert, debug, echo, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('intertype/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  WGUY = require('../../../apps/webguy');

  TMP_types = new (require('intertype-203.0.0')).Intertype();

  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  // test_mode                 = 'throw_failures'
  // test_mode                 = 'throw_errors'
  // test_mode                 = 'failsafe'

  //###########################################################################################################

  //===========================================================================================================
  this.intertype_tasks = {
    //---------------------------------------------------------------------------------------------------------
    lft_lets: function() {
      var d, e, f, k, lft, Ωacf__10, Ωacf__11, Ωacf___7, Ωacf___8, Ωacf___9;
      lft = require('../../../apps/intertype/node_modules/letsfreezethat');
      // debug ( k for k of lft.nofreeze ), Object.isFrozen ( lft.nofreeze.freeze {}); xxx
      // debug 'Ωacf___1', samesame.equals
      // debug 'Ωacf___2', samesame.deep_copy
      debug('Ωacf___3', k = {
        x: true,
        y: 5
      });
      debug('Ωacf___4', d = lft.lets({
        a: false,
        k
      }));
      debug('Ωacf___5', e = lft.lets(d));
      debug('Ωacf___6', f = lft.lets(d, function(d) {
        return d.a = true;
      }));
      //.......................................................................................................
      this.eq((Ωacf___7 = function() {
        return Object.isFrozen(k);
      }), false);
      this.eq((Ωacf___8 = function() {
        return Object.isFrozen(d);
      }), true);
      this.eq((Ωacf___9 = function() {
        return Object.isFrozen(d.k);
      }), true);
      this.eq((Ωacf__10 = function() {
        return k === d.k;
      }), false);
      this.eq((Ωacf__11 = function() {
        return d === e;
      }), false);
      // @throws ( Ωacf__12 = -> types.validate mvp.integer,  5.3                     ), /expected a integer/
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    lft_assign: function() {
      var failing_probes, i, j, len, len1, lft, probe, probes, ΩACCEPT_FAILURE_FOR_NOW_acf__22, ΩACCEPT_FAILURE_FOR_NOW_acf__25, ΩACCEPT_FAILURE_FOR_NOW_acf__26, Ωacf__21, Ωacf__23, Ωacf__24;
      lft = require('../../../apps/intertype/node_modules/letsfreezethat');
      probes = [
        [{}],
        [
          {
            d: 6,
            k: true
          }
        ],
        [
          {
            d: 6,
            k: true
          },
          {
            k: false,
            m: 'M'
          }
        ],
        [
          {
            d: 6,
            k: true
          },
          null
        ],
        [
          {
            d: 6,
            k: true
          },
          void 0
        ],
        [[]],
        [
          [],
          {
            z: 'zoo',
            y: 'wye'
          }
        ]
      ];
      failing_probes = [[987], [true], [false], ['jkl']];
      //.......................................................................................................
      // debug 'Ωacf__13', Object.assign undefined
      // debug 'Ωacf__14', Object.assign null
      warn('Ωacf__15', rpr(lft.assign(987)));
      info('Ωacf__16', rpr(Object.assign(987)));
      warn('Ωacf__17', rpr(lft.assign(true)));
      info('Ωacf__18', rpr(Object.assign(true)));
      warn('Ωacf__19', rpr(lft.assign('jkl')));
      info('Ωacf__20', rpr(Object.assign('jkl')));
//.......................................................................................................
      for (i = 0, len = probes.length; i < len; i++) {
        probe = probes[i];
        this.eq((Ωacf__21 = function() {
          return lft.assign(...probe);
        }), Object.assign(...probe));
      }
//.......................................................................................................
      for (j = 0, len1 = failing_probes.length; j < len1; j++) {
        probe = failing_probes[j];
        this.eq((ΩACCEPT_FAILURE_FOR_NOW_acf__22 = function() {
          return lft.assign(...probe);
        }), Object.assign(...probe));
      }
      //.......................................................................................................
      this.throws((Ωacf__23 = function() {
        return Object.assign(void 0);
      }), /Cannot convert undefined or null to object/);
      this.throws((Ωacf__24 = function() {
        return Object.assign(null);
      }), /Cannot convert undefined or null to object/);
      this.throws((ΩACCEPT_FAILURE_FOR_NOW_acf__25 = function() {
        return lft.assign(void 0);
      }), /Cannot convert undefined or null to object/);
      this.throws((ΩACCEPT_FAILURE_FOR_NOW_acf__26 = function() {
        return lft.assign(null);
      }), /Cannot convert undefined or null to object/);
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    lft_assign_freezing: function() {
      var d, d_lft, d_nfr, d_obj, e, f, lft, Ωacf__27, Ωacf__28, Ωacf__29, Ωacf__30, Ωacf__31, Ωacf__32, Ωacf__33, Ωacf__34, Ωacf__35, Ωacf__36, Ωacf__37, Ωacf__38, Ωacf__39, Ωacf__40;
      lft = require('../../../apps/intertype/node_modules/letsfreezethat');
      //.......................................................................................................
      f = {
        f: 'F'
      };
      e = {
        e: 'E',
        f
      };
      d = {
        d: 'D',
        e
      };
      d;
      d_obj = Object.assign(d);
      d_lft = lft.assign(d);
      d_nfr = lft.nofreeze.assign(d);
      this.eq((Ωacf__27 = function() {
        return Object.isFrozen(d_obj);
      }), false);
      this.eq((Ωacf__28 = function() {
        return Object.isFrozen(d_lft);
      }), true);
      this.eq((Ωacf__29 = function() {
        return Object.isFrozen(d_nfr);
      }), false);
      this.eq((Ωacf__30 = function() {
        return d.e === e;
      }), true);
      this.eq((Ωacf__31 = function() {
        return d.e.f === f;
      }), true);
      this.eq((Ωacf__32 = function() {
        return d_obj === d;
      }), true);
      this.eq((Ωacf__33 = function() {
        return d_obj.e === e;
      }), true);
      this.eq((Ωacf__34 = function() {
        return d_obj.e.f === f;
      }), true);
      this.eq((Ωacf__35 = function() {
        return d_lft === d;
      }), false);
      this.eq((Ωacf__36 = function() {
        return d_lft.e === e;
      }), false);
      this.eq((Ωacf__37 = function() {
        return d_lft.e.f === f;
      }), false);
      this.eq((Ωacf__38 = function() {
        return d_nfr === d;
      }), false);
      this.eq((Ωacf__39 = function() {
        return d_nfr.e === e;
      }), false);
      this.eq((Ωacf__40 = function() {
        return d_nfr.e.f === f;
      }), false);
      //.......................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      return (new Test({
        throw_on_error: true
      })).test(this.intertype_tasks);
    })();
  }

}).call(this);

//# sourceMappingURL=test-assign-clone-freeze.js.map