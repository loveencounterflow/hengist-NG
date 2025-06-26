(async function() {
  'use strict';
  var GTNG, GUY, Test, alert, debug, echo, f, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper,
    splice = [].splice;

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
      var NFA, get_signature, nfa, red;
      NFA = require('../../../apps/normalize-function-arguments');
      ({nfa, get_signature} = NFA);
      ({red, reverse} = GUY.trm);
      (() => {        //.......................................................................................................
        var fn, frz, Ωnfat__10, Ωnfat__11, Ωnfat__12, Ωnfat__13, Ωnfat__14, Ωnfat__15, Ωnfat__16, Ωnfat__17, Ωnfat___2, Ωnfat___3, Ωnfat___4, Ωnfat___5, Ωnfat___6, Ωnfat___7, Ωnfat___8, Ωnfat___9;
        fn = nfa(function(a, b, c, cfg) {
          return {a, b, c, cfg};
        });
        // fn = ( a, b, c, cfg ) -> { $A: [ arguments..., ], a, b, c, cfg, }
        // help 'Ω___1', get_fn_args fn
        // if signature?
        frz = Object.freeze;
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
        }), /expected up to 3 positional arguments, got 4/);
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
        }), /expected up to 3 positional arguments, got 4/);
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
        }), /expected up to 3 positional arguments, got 4/);
        this.eq((Ωnfat__14 = function() {
          return fn(1, frz({
            b: 88
          }));
        }), {
          a: 1,
          b: 88,
          c: void 0,
          cfg: {
            b: 88,
            a: 1
          }
        });
        this.eq((Ωnfat__15 = function() {
          return fn(1, 2, frz({
            b: 88
          }));
        }), {
          a: 1,
          b: 2,
          c: void 0,
          cfg: {
            b: 2,
            a: 1
          }
        });
        this.eq((Ωnfat__16 = function() {
          return fn(1, 2, 3, frz({
            b: 88
          }));
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
        this.throws((Ωnfat__17 = function() {
          return fn(1, 2, 3, 4, frz({
            b: 88
          }));
        }), /expected up to 3 positional arguments, got 4/);
        //.....................................................................................................
        return null;
      })();
      (() => {        //.......................................................................................................
        var optional, Ωnfat__18, Ωnfat__19, Ωnfat__20, Ωnfat__21, Ωnfat__22, Ωnfat__23, Ωnfat__24;
        optional = null;
        
      const empty_fn = function (

        ) {};
      ;
        this.eq((Ωnfat__18 = function() {
          return get_signature(function(a) {});
        }), {
          a: 'bare'
        });
        this.throws((Ωnfat__19 = function() {
          return get_signature(function(a = optional) {});
        }), /not compliant/);
        this.eq((Ωnfat__20 = function() {
          return get_signature(empty_fn);
        }), {});
        this.eq((Ωnfat__21 = function() {
          return get_signature(function() {});
        }), {});
        this.eq((Ωnfat__22 = function() {
          return get_signature(function(a, b, c) {});
        }), {
          a: 'bare',
          b: 'bare',
          c: 'bare'
        });
        // ### TAINT limitation of CoffeeScript: signature runs up to soak, trailing paramters handled inside function body ###
        // @eq     ( Ωnfat__23 = -> get_signature ( a, b..., c               ) ->  ), { a: 'bare', b: 'soak', }
        this.throws((Ωnfat__23 = function() {
          return get_signature(function(a, ...b) {
            var c, ref;
            ref = b, [...b] = ref, [c] = splice.call(b, -1);
          });
        }), /not compliant/);
        return this.throws((Ωnfat__24 = function() {
          return get_signature(function(a, b = null) {});
        }), /not compliant/);
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