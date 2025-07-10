(async function() {
  'use strict';
  var A, GUY, alert, debug, demo_proxy, echo, f, gold, help, info, inspect, log, nfa, plain, praise, red, reverse, rpr, urge, warn, whisper, white, write;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-proxy'));

  ({rpr, inspect, echo, white, gold, red, reverse, log} = GUY.trm);

  ({f} = require('../../../apps/effstring'));

  write = function(p) {
    return process.stdout.write(p);
  };

  A = require('ansis');

  ({nfa} = require('../../../apps/normalize-function-arguments'));

  //===========================================================================================================
  demo_proxy = function() {
    /* Building the chain: */
    var base, chain, new_infiniproxy, p, stack, template;
    stack = [];
    //.........................................................................................................
    template = {
      base: null,
      is_initial: false
    };
    //.........................................................................................................
    new_infiniproxy = nfa({template}, function(base, is_initial, cfg) {
      var R, proxy;
      proxy = new Proxy(base, {
        get: function(target, key) {
          if ((typeof key) === 'symbol') {
            return target[key];
          }
          if (is_initial) {
            stack.length = 0;
          }
          stack.push(key);
          return R;
        }
      });
      if (is_initial) {
        R = new_infiniproxy({
          base,
          is_initial: false
        });
      } else {
        R = proxy;
      }
      return proxy;
    });
    //.........................................................................................................
    base = function(...P) {
      var R;
      // debug 'Ω___3', P
      R = `${stack.join('.')}::${rpr(P)}`;
      stack.length = 0;
      return R;
    };
    p = new_infiniproxy(base, {
      is_initial: true
    });
    debug('Ω___4', p);
    debug('Ω___5', p.arc);
    info('Ω___8', p.arc.bo.cy(8));
    //.........................................................................................................
    /* These calls will be `stack`ed but then get thrown away as soon as any property of `p` is used: */
    p.ooops;
    debug('Ω___9', stack);
    p.wat;
    debug('Ω__10', stack);
    p.nö;
    debug('Ω__11', stack);
    info('Ω__13', p`some text`);
    debug('Ω__14', stack);
    //.........................................................................................................
    info('Ω__15', p.arc.bo.cy`some text`);
    info('Ω__16', p.arc.bo.cy.dean.blah`some text`);
    chain = p.arc.bo.cy;
    chain.dean.blah;
    chain.and.then.some;
    info('Ω__16', p("finally, a call"));
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