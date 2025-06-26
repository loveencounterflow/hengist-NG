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
        var e, fn, Ωcltt__48;
        fn = nfa(function(a, b, c, cfg) {
          return {a, b, c, cfg};
        });
        // fn = ( a, b, c, cfg ) -> { $A: [ arguments..., ], a, b, c, cfg, }
        // help 'Ω__69', get_fn_args fn
        // if signature?
        //.....................................................................................................
        echo();
        info('Ω__70', fn(1));
        info('Ω__71', fn(1, 2));
        info('Ω__72', fn(1, 2, 3));
        info('Ω__73', (function() {
          try {
            return fn(1, 2, 3, 4);
          } catch (error) {
            e = error;
            return red(reverse(e.message));
          }
        })());
        //.....................................................................................................
        echo();
        info('Ω__74', fn(1, {}));
        info('Ω__75', fn(1, 2, {}));
        info('Ω__76', fn(1, 2, 3, {}));
        info('Ω__77', (function() {
          try {
            return fn(1, 2, 3, 4, {});
          } catch (error) {
            e = error;
            return red(reverse(e.message));
          }
        })());
        //.....................................................................................................
        echo();
        info('Ω__78', fn(1, {
          b: 88
        }));
        info('Ω__79', fn(1, 2, {
          b: 88
        }));
        info('Ω__80', fn(1, 2, 3, {
          b: 88
        }));
        info('Ω__81', (function() {
          try {
            return fn(1, 2, 3, 4, {
              b: 88
            });
          } catch (error) {
            e = error;
            return red(reverse(e.message));
          }
        })());
        //.....................................................................................................
        return null;
        this.eq((Ωcltt__48 = function() {
          return std.text.isa('');
        }), true);
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