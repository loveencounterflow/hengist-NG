(async function() {
  'use strict';
  var GTNG, GUY, Test, alert, debug, echo, f, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('intertype/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  ({f} = require('../../../apps/effstring'));

  //###########################################################################################################

  //===========================================================================================================
  this.nfa_tasks = {
    //=========================================================================================================
    basics: function() {
      var NFA, nfa, red;
      NFA = require('../../../apps/normalize-function-arguments');
      ({nfa} = NFA);
      ({red, reverse} = GUY.trm);
      (() => {        //.......................................................................................................
        var fn, Ωnfat__10, Ωnfat__11, Ωnfat__12, Ωnfat__13, Ωnfat___2, Ωnfat___3, Ωnfat___4, Ωnfat___5, Ωnfat___6, Ωnfat___7, Ωnfat___8, Ωnfat___9;
        fn = nfa(function(a, b, c, cfg) {
          return {a, b, c, cfg};
        });
        // fn = ( a, b, c, cfg ) -> { $A: [ arguments..., ], a, b, c, cfg, }
        // help 'Ω___1', get_fn_args fn
        // if signature?
        //.....................................................................................................
        this.eq((Ωnfat___2 = function() {
          return fn(1);
        }), {
          a: 1,
          b: void 0,
          c: void 0,
          cfg: {
            a: 1
          }
        });
        this.eq((Ωnfat___3 = function() {
          return fn(1, 2);
        }), {
          a: 1,
          b: 2,
          c: void 0,
          cfg: {
            a: 1,
            b: 2
          }
        });
        this.eq((Ωnfat___4 = function() {
          return fn(1, 2, 3);
        }), {
          a: 1,
          b: 2,
          c: 3,
          cfg: {
            a: 1,
            b: 2,
            c: 3
          }
        });
        this.throws((Ωnfat___5 = function() {
          return fn(1, 2, 3, 4);
        }), /expected up to 3 positional arguments plus one POD, got 4 positional arguments/);
        this.eq((Ωnfat___6 = function() {
          return fn(1, {});
        }), {
          a: 1,
          b: void 0,
          c: void 0,
          cfg: {
            a: 1
          }
        });
        this.eq((Ωnfat___7 = function() {
          return fn(1, 2, {});
        }), {
          a: 1,
          b: 2,
          c: void 0,
          cfg: {
            a: 1,
            b: 2
          }
        });
        this.eq((Ωnfat___8 = function() {
          return fn(1, 2, 3, {});
        }), {
          a: 1,
          b: 2,
          c: 3,
          cfg: {
            a: 1,
            b: 2,
            c: 3
          }
        });
        this.throws((Ωnfat___9 = function() {
          return fn(1, 2, 3, 4, {});
        }), /expected up to 4 arguments, got 5/);
        this.eq((Ωnfat__10 = function() {
          return fn(1, {
            b: 88
          });
        }), {
          a: 1,
          b: 88,
          c: void 0,
          cfg: {
            b: 88,
            a: 1
          }
        });
        this.eq((Ωnfat__11 = function() {
          return fn(1, 2, {
            b: 88
          });
        }), {
          a: 1,
          b: 2,
          c: void 0,
          cfg: {
            b: 2,
            a: 1
          }
        });
        this.eq((Ωnfat__12 = function() {
          return fn(1, 2, 3, {
            b: 88
          });
        }), {
          a: 1,
          b: 2,
          c: 3,
          cfg: {
            b: 2,
            a: 1,
            c: 3
          }
        });
        this.throws((Ωnfat__13 = function() {
          return fn(1, 2, 3, 4, {
            b: 88
          });
        }), /expected up to 4 arguments, got 5/);
        //.....................................................................................................
        return null;
      })();
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
      return (new Test(guytest_cfg)).test(this.nfa_tasks);
    })();
  }

  // ( new Test guytest_cfg ).test @nfa_tasks.builtins

}).call(this);

//# sourceMappingURL=test-basics.js.map