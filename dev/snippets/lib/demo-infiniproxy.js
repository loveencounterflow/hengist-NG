(async function() {
  /*

  ## Applications

  * **RegEx Builder** (example from [Rejigs blog post](https://medium.com/@omarzawahry/rejigs-making-regular-expressions-human-readable-1fad37cb3eae))

  ```java
  var emailRegex =
      Rejigs.Create()
            .AtStart()
            .OneOrMore(r => r.AnyLetterOrDigit().Or().AnyOf("._%+-"))
            .Text("@")
            .OneOrMore(r => r.AnyLetterOrDigit().Or().AnyOf(".-"))
            .Text(".")
            .AnyLetterOrDigit().AtLeast(2)
            .AtEnd()
            .Build();
  ```

  * **HTML/XML Builer**
  * **SQL Builder**: `SQL.insert.into.employees('id','name').values(id,name)`
  * **CLI Coloring**
  * syntax for a **Type Checker**

   */
  'use strict';
  var C, GTNG, GUY, SFMODULES, Test, alert, blue, bold, debug, demo_colorful_proxy, demo_infinite_proxy, demo_instance_function_as_proxy, echo, f, gold, grey, help, info, inspect, log, nfa, plain, praise, red, reverse, rpr, urge, warn, whisper, white, write;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-proxy'));

  ({rpr, inspect, echo, white, blue, gold, grey, red, bold, reverse, log} = GUY.trm);

  ({f} = require('../../../apps/effstring'));

  write = function(p) {
    return process.stdout.write(p);
  };

  C = require('ansis');

  ({nfa} = require('../../../apps/normalize-function-arguments'));

  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  SFMODULES = require('./single-file-modules');

  //===========================================================================================================
  SFMODULES.require_infiniproxy = function() {
    var Stack, new_infiniproxy, template;
    ({Stack} = SFMODULES.require_stack_classes());
    // stack                 = new Stack()
    // get_proxy = Symbol 'get_proxy'
    //.........................................................................................................
    template = {
      handler: null,
      is_initial: true
    };
    //.........................................................................................................
    return new_infiniproxy = nfa({template}, function(handler, is_initial, cfg) {
      var R, proxy;
      if (!cfg.empty_stack_on_new_chain) {
        is_initial = false;
      }
      proxy = new Proxy(handler, {
        get: function(target, key) {
          if (key === get_proxy) {
            return new_infiniproxy({
              handler,
              is_initial: false
            });
          }
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
          handler,
          is_initial: false
        });
      } else {
        R = proxy;
      }
      return proxy;
    });
  };

  //===========================================================================================================
  demo_infinite_proxy = function() {
    var base;
    //.........................................................................................................
    base = function(...P) {
      var R;
      R = `${stack.join('.')}::${rpr(P)}`;
      stack.length = 0;
      return R;
    };
    (() => {      //.........................................................................................................
      /* These calls will be `stack`ed but then get thrown away as soon as any property of `p` is used: */
      var p;
      echo('——————————————————————————————————————————————————————————————————————————————');
      p = new_infiniproxy(base, {
        empty_stack_on_new_chain: true
      });
      /* default */      p.ooops;
      debug('Ω___1', stack);
      p.wat;
      debug('Ω___2', stack);
      p.nö;
      debug('Ω___3', stack);
      info('Ω___4', p.more_of_this`some text`);
      debug('Ω___5', stack);
      return null;
    })();
    (() => {      //.........................................................................................................
      /* These calls will be `stack`ed and remain on the stack until `p` is called: */
      var p;
      echo('——————————————————————————————————————————————————————————————————————————————');
      p = new_infiniproxy(base, {
        empty_stack_on_new_chain: false
      });
      /* opt-in */      p.ooops;
      debug('Ω___6', stack);
      p.wat;
      debug('Ω___7', stack);
      p.nö;
      debug('Ω___8', stack);
      info('Ω___9', p.more_of_this`some text`);
      debug('Ω__10', stack);
      return null;
    })();
    (() => {      //.........................................................................................................
      /* But if needed, can always reference a proxy from an intermediate result and build a property chain
         on that; here we used a special unique value `get_proxy` that produces an intermediate result *without*
         adding it to the property chain: */
      var p, proxy;
      echo('——————————————————————————————————————————————————————————————————————————————');
      p = new_infiniproxy(base);
      info('Ω__11', p.red.bold.underline`some text`);
      /* Some random property retrievals without call... */
      p.bold.underline;
      p.strikethrough.inverse;
      /* ...won't influence the meaning of the next property chain: */
      info('Ω__12', p.yellow`finally, a call`);
      proxy = p[get_proxy];
      /* Imagine we go through some branching if/then clauses to decide whether to add some styles: */
      proxy.bold.underline;
      proxy.strikethrough;
      proxy.inverse;
      proxy.yellow;
      /* Finally, we're ready to print: */
      info('Ω__13', proxy`this will be printed in bold + underline + strikethrough + inverse + yellow`);
      return null;
    })();
    return null;
  };

  // #===========================================================================================================
  // demo_picocolors_chalk = ->
  //   do =>
  //     # info 'Ω__14',     C.yellow"█▒█"
  //     # info 'Ω__15',     C.yellow"█#{ C.green"▒" }█"
  //     info 'Ω__16',     C.red"█#{    C.green"▒" }█#{ C.green 'GREEN' }###"
  //     # info 'Ω__17', rpr C.yellow"█▒█"
  //     # info 'Ω__18', rpr C.yellow"█#{ C.green"▒" }█"
  //     info 'Ω__19', rpr C.red"█#{    C.green"▒" }█#{ C.green 'GREEN' }###"
  //     info 'Ω__20',     C.red"████#{C.green"████#{C.yellow"████"}████"}████"
  //     info 'Ω__21', rpr C.red"████#{C.green"████#{C.yellow"████"}████"}████"
  //     return null
  //   do =>
  //     #-----------------------------------------------------------------------------------------------------------
  //     color_codes =
  //       red:    '\x1B[31m'
  //       green:  '\x1B[32m'
  //       yellow: '\x1B[33m'
  //     color_off = '\x1B[39m'
  //     #.......................................................................................................
  //     colorizer_from_color_code = ( color_code ) ->
  //       R = ( parts, expressions... ) ->
  //         R = color_code + parts[ 0 ]
  //         for expression, idx in expressions
  //           inner = expression.toString().replace /\x1B\[39m$/, ''
  //           R += ( inner ) + ( color_code + parts[ idx + 1 ] )
  //         return R + color_off
  //       return R
  //     #.......................................................................................................
  //     red     = colorizer_from_color_code color_codes.red
  //     green   = colorizer_from_color_code color_codes.green
  //     yellow  = colorizer_from_color_code color_codes.yellow
  //     # info 'Ω__22',     red"█#{'▒'}█#{ 'GREEN' }###"
  //     # info 'Ω__23', rpr red"█#{'▒'}█#{ 'GREEN' }###"
  //     info 'Ω__24',     red"████#{green"████#{yellow"████"}████"}████"
  //     info 'Ω__25', rpr red"████#{green"████#{yellow"████"}████"}████"
  //     return null
  //   return null

  //===========================================================================================================
  demo_colorful_proxy = function() {
    /* Building the chain: */
    var TMP_error, base, chain, new_infiniproxy, p, stack, template;
    TMP_error = class TMP_error extends Error {};
    stack = [];
    //.........................................................................................................
    template = {
      bearer: null,
      base: null,
      is_initial: false
    };
    //.........................................................................................................
    new_infiniproxy = nfa({template}, function(bearer, base, is_initial, cfg) {
      var R, proxy;
      proxy = new Proxy(base, {
        get: function(target, key) {
          if ((typeof key) === 'symbol') {
            return target[key];
          }
          if (!Reflect.has(bearer, key)) {
            throw new TMP_error(`Ω__26 unknown key ${rpr(key)}`);
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
          bearer,
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
      var R, key;
      R = P[0];
      while (stack.length > 0) {
        key = stack.pop();
        R = C[key](R);
      }
      return R;
    };
    //.........................................................................................................
    p = new_infiniproxy(C, base, {
      is_initial: true
    });
    info('Ω__27', p.green.bold.inverse(" holy moly "));
    //.........................................................................................................
    info('Ω__28', p.yellow.italic`some text`);
    info('Ω__29', p.green.bold.inverse.underline`some text`);
    chain = p.cyan.bold;
    chain.underline;
    info('Ω__30', p("finally, a call"));
    return null;
  };

  //===========================================================================================================
  demo_instance_function_as_proxy = function() {
    var D, Stack, create_proxy, hide, state_symbol;
    ({hide} = SFMODULES.require_managed_property_tools());
    ({Stack} = SFMODULES.require_stack_classes());
    //===========================================================================================================
    state_symbol = Symbol.for('state');
    //-----------------------------------------------------------------------------------------------------------
    create_proxy = function(callable) {
      var new_proxy, state, sub_level_proxy, top_level_proxy;
      state = {
        stack: new Stack()
      };
      //.........................................................................................................
      new_proxy = function({is_top_level}) {
        return new Proxy(callable, {
          // #-------------------------------------------------------------------------------------------------------
          // construct: ( target, P, new_target ) ->
          //   urge 'Ω__31', rpr target, new_target, target is new_target
          //   urge 'Ω__32', rpr P
          //   # return new target P
          //   return new_target P
          //   # return { value: 56, }

          //-------------------------------------------------------------------------------------------------------
          apply: function(target, key, P) {
            var R, ctx;
            urge('Ω__33', `apply ${rpr({target, key, P, is_top_level})}`);
            ctx = {
              iam: 'synthetic-context',
              is_top_level,
              ...state
            };
            R = Reflect.apply(target, ctx, P);
            /* NOTE: cannot use `target.apply()`, must use `Reflect` */            state.stack.clear();
            return R;
          },
          //-------------------------------------------------------------------------------------------------------
          get: function(target, key) {
            urge('Ω__34', `get ${rpr({target, key})}`);
            if (key === state_symbol) {
              return state;
            }
            if ((typeof key) === 'symbol') {
              return target[key];
            }
            if (Reflect.has(target, key)) {
              return Reflect.get(target, key);
            }
            if (is_top_level) {
              state.stack.clear();
            }
            state.stack.push(key);
            // return "[result for getting non-preset key #{rpr key}] from #{rpr target}"
            return sub_level_proxy;
          }
        });
      };
      //.........................................................................................................
      top_level_proxy = new_proxy({
        is_top_level: true
      });
      sub_level_proxy = new_proxy({
        is_top_level: false
      });
      return top_level_proxy;
    };
    D = (function() {
      //===========================================================================================================
      class D {
        //-------------------------------------------------------------------------------------------------------
        constructor(callable) {
          var R;
          this.other_prop = 'OTHER_PROP';
          Object.setPrototypeOf(callable, this);
          R = create_proxy(callable);
          // ...
          return R;
        }

        //-------------------------------------------------------------------------------------------------------
        method_of_d() {
          return 'METHOD_OF_D';
        }

      };

      D.prototype.property_of_d = 'PROPERTY_OF_D';

      return D;

    }).call(this);
    (() => {      //.........................................................................................................
      var d;
      echo('——————————————————————————————————————————————————————————————————————————————');
      d = new D(function(...P) {
        return `{ arguments: ${rpr(P)} }`;
      });
      debug('Ω__35', d); // D { other_prop: 'OTHER_PROP' }
      debug('Ω__36', d.other_prop); // OTHER_PROP
      debug('Ω__37', d.method_of_d()); // METHOD_OF_D
      debug('Ω__38', d.property_of_d); // PROPERTY_OF_D
      debug('Ω__39', d.unknown_key); // something else: 'unknown_key'
      debug('Ω__40', d instanceof D); // true
      return debug('Ω__41', d(1, 2, 'c'));
    })();
    (() => {      //.........................................................................................................
      var my_fn, proxy;
      echo('——————————————————————————————————————————————————————————————————————————————');
      my_fn = function(...P) {
        return `result of calling ${rpr(my_fn)} in ctx ${rpr(this)} with ${rpr(P)}`;
      };
      hide(my_fn, 'preset_key', "value of my_fn.preset_key");
      info('Ω__42', rpr(proxy = create_proxy(my_fn)));
      info('Ω__43', rpr(proxy(4, 5, 6)));
      info('Ω__44', rpr(proxy.mykey));
      info('Ω__45', rpr(proxy.preset_key));
      return info('Ω__46', rpr((typeof Object.getPrototypeOf(proxy)) === (typeof (function() {}))));
    })();
    (() => {      //.........................................................................................................
      var d, my_fn_3;
      echo('——————————————————————————————————————————————————————————————————————————————');
      my_fn_3 = function(...P) {
        help('Ω__47', this.stack, this.stack.is_empty, [...this.stack]);
        return `result of calling ${rpr(my_fn_3)} in ctx ${rpr(this)} with ${rpr(P)}`;
      };
      info('Ω__48', rpr(d = new D(my_fn_3)));
      info('Ω__49', rpr(d.other_prop)); // OTHER_PROP
      info('Ω__50', rpr(d.method_of_d())); // METHOD_OF_D
      info('Ω__51', rpr(d.property_of_d)); // PROPERTY_OF_D
      info('Ω__52', rpr(d.unknown_key)); // something else: 'unknown_key'
      info('Ω__53', rpr(d instanceof D)); // true
      info('Ω__54', rpr(d(1, 2, 'c')));
      info('Ω__55', rpr(d.red));
      return info('Ω__56', rpr(d.red.bold(1, 2, 'c')));
    })();
    return null;
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
      // ( new Test guytest_cfg ).test { demo_proxy_as_html_producer, }
      //.........................................................................................................
      // demo_infinite_proxy()
      demo_colorful_proxy();
      return demo_instance_function_as_proxy();
    })();
  }

}).call(this);

//# sourceMappingURL=demo-infiniproxy.js.map