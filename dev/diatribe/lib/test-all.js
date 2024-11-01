(async function() {
  'use strict';
  var GTNG, GUY, Test, WGUY, alert, debug, echo, help, info, inspect, log, plain, praise, reverse, rpr, types, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('diatrieb/test-all'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  WGUY = require('../../../apps/webguy');

  types = new (require('intertype')).Intertype();

  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  //###########################################################################################################

  //===========================================================================================================
  this.diatribe_tasks = {
    //---------------------------------------------------------------------------------------------------------
    interface: function() {
      var DIATRIBE, Ωit___2;
      DIATRIBE = require('../../../apps/diatribe');
      this.eq((Ωit___2 = function() {
        return true;
      }), true);
      //.......................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      return (new Test({
        throw_on_error: false
      })).test(this.diatribe_tasks);
    })();
  }

}).call(this);

//# sourceMappingURL=test-all.js.map