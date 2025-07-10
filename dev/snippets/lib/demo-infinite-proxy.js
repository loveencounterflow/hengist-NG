(async function() {
  'use strict';
  var GUY, alert, debug, demo_proxy, echo, f, gold, help, info, inspect, log, plain, praise, red, reverse, rpr, urge, warn, whisper, white, write;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-proxy'));

  ({rpr, inspect, echo, white, gold, red, reverse, log} = GUY.trm);

  ({f} = require('../../../apps/effstring'));

  write = function(p) {
    return process.stdout.write(p);
  };

  //===========================================================================================================
  demo_proxy = function() {
    var base, new_infiniprox, p, stack;
    stack = [];
    new_infiniprox = function(base) {
      var R;
      R = new Proxy(base, {
        get: function(target, key) {
          if ((typeof key) === 'symbol') {
            return target[key];
          }
          debug('Ω___1', {target, key}, stack);
          stack.push(key);
          return R;
        }
      });
      return R;
    };
    //.........................................................................................................
    base = function(...P) {
      var R;
      debug('Ω___8', P);
      R = stack.join('.');
      stack.length = 0;
      return R;
    };
    p = new_infiniprox(base);
    info('Ω___9', p);
    info('Ω__10', p.arc);
    // info 'Ω__11', p.arc.bo
    // info 'Ω__12', p.arc.bo.cy
    info('Ω__13', p.arc.bo.cy(8));
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      return demo_proxy();
    })();
  }

}).call(this);

//# sourceMappingURL=demo-infinite-proxy.js.map