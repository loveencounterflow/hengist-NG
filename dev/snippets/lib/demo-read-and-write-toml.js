(async function() {
  'use strict';
  var GUY, alert, debug, demo_1, echo, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('intertype/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  //===========================================================================================================
  demo_1 = function() {
    var TOML, obj;
    TOML = require('@iarna/toml');
    obj = TOML.parse(`[abc]
foo = 123
bar = [1,2,3]`);
    // obj = {abc: {foo: 123, bar: [1,2,3]}}
    debug('Ω__3', TOML.stringify(obj));
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      return demo_1();
    })();
  }

}).call(this);

//# sourceMappingURL=demo-read-and-write-toml.js.map