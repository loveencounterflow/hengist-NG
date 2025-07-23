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
  var C, GTNG, GUY, SFMODULES, Test, alert, blue, bold, debug, demo_colorful_proxy, demo_instance_function_as_proxy, echo, f, gold, grey, help, info, inspect, log, nfa, plain, praise, red, reverse, rpr, urge, warn, whisper, white, write;

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
  demo_instance_function_as_proxy = function() {
    var D;
    //===========================================================================================================
    ({D} = (function() {
      var create_infinyproxy, exports, sys_symbol;
      ({create_infinyproxy, sys_symbol} = SFMODULES.require_infiniproxy());
      D = (function() {
        //=========================================================================================================
        class D {
          //-------------------------------------------------------------------------------------------------------
          constructor(callee) {
            var R;
            this.other_prop = 'OTHER_PROP';
            Object.setPrototypeOf(callee, this);
            R = create_infinyproxy({
              callee,
              provider: this
            });
            // ...
            return R;
          }

          //-------------------------------------------------------------------------------------------------------
          method_of_d(value) {
            var k;
            whisper('Ω___1', 'METHOD_OF_D');
            whisper('Ω___2', (function() {
              var results;
              results = [];
              for (k in this[sys_symbol]) {
                results.push(k);
              }
              return results;
            }).call(this));
            this[sys_symbol].stack.push('generated');
            this[sys_symbol].stack.push('stuff');
            this[sys_symbol].stack.push(`value:${rpr(value)}`);
            return this[sys_symbol].sub_level_proxy;
          }

        };

        //-------------------------------------------------------------------------------------------------------
        D.prototype.property_of_d = 'PROPERTY_OF_D';

        return D;

      }).call(this);
      //---------------------------------------------------------------------------------------------------------
      return exports = {D};
    })());
    (() => {      //.........................................................................................................
      var d, my_fn_3;
      my_fn_3 = function(...P) {
        var chain, content, p;
        whisper('Ω___3', this.stack, this.stack.is_empty, [...this.stack]);
        chain = [...this.stack].join('.');
        content = (function() {
          var i, len, results;
          results = [];
          for (i = 0, len = P.length; i < len; i++) {
            p = P[i];
            results.push(rpr(p));
          }
          return results;
        })();
        return `[${chain}:${content}]`;
      };
      echo('——————————————————————————————————————————————————————————————————————————————');
      help('Ω___4', rpr(d = new D(my_fn_3)));
      help('Ω___5', reverse(GUY.trm.truth(d instanceof D))); // true
      help('Ω___6', rpr(Object.getPrototypeOf(d)));
      help('Ω___7', rpr((typeof Object.getPrototypeOf(d)) === (typeof (function() {}))));
      help('Ω___8', rpr(typeof d));
      help('Ω___9', rpr(Object.prototype.toString.call(d)));
      help('Ω__10', rpr(d instanceof Function));
      echo('——————————————————————————————————————————————————————————————————————————————');
      info('Ω__11', rpr(d.other_prop)); // OTHER_PROP
      info('Ω__12', rpr(d.method_of_d())); // METHOD_OF_D
      info('Ω__13', rpr(d.property_of_d)); // PROPERTY_OF_D
      info('Ω__14', rpr(d.unknown_key)); // something else: 'unknown_key'
      echo('——————————————————————————————————————————————————————————————————————————————');
      info('Ω__15', rpr(d(1, 2, 'c')));
      info('Ω__16', rpr(d.red));
      info('Ω__17', rpr(d(1, 2, 'c')));
      info('Ω__18', rpr(d.red.bold(1, 2, 'c')));
      info('Ω__19', rpr(d.red.bold.method_of_d(123).hola('ftw')));
      return info('Ω__20', rpr(d.red.bold.method_of_d`123`.hola('ftw')));
    })();
    return null;
  };

  //===========================================================================================================
  demo_colorful_proxy = function() {
    var Colorizer, TMP_error, c, create_infinyproxy, sys_symbol;
    TMP_error = class TMP_error extends Error {};
    ({create_infinyproxy, sys_symbol} = SFMODULES.require_infiniproxy());
    //=========================================================================================================
    Colorizer = class Colorizer {
      //-------------------------------------------------------------------------------------------------------
      static colorize(...P) {
        whisper('Ω__21', `colorize() context:   ${rpr(this)}`);
        whisper('Ω__22', `colorize() arguments: ${rpr(P)}`);
        whisper('Ω__23', `colorize() stack:     ${rpr(this.stack)}`);
        return "*******************";
      }

      //-------------------------------------------------------------------------------------------------------
      constructor() {
        var R;
        this.other_prop = 'OTHER_PROP';
        Object.setPrototypeOf(this.constructor.colorize, this);
        R = create_infinyproxy({
          callee: this.constructor.colorize,
          provider: this
        });
        return R;
      }

    };
    //=========================================================================================================
    // base = ( P... ) ->
    //   R = P[ 0 ]
    //   while stack.length > 0
    //     key = stack.pop()
    //     R   = C[ key ] R
    //   return R
    //.........................................................................................................
    c = new Colorizer();
    info('Ω__24', c);
    info('Ω__25', c.green.bold.inverse(" holy moly "));
    // #.........................................................................................................
    // info 'Ω__26', p.yellow.italic"some text"
    // info 'Ω__27', p.green.bold.inverse.underline"some text"
    // ### Building the chain: ###
    // chain = p.cyan.bold
    // chain.underline
    // info 'Ω__28', p "finally, a call"
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
      demo_instance_function_as_proxy();
      return demo_colorful_proxy();
    })();
  }

  // # d = new Proxy ( ( P... ) -> urge 'Ω__29', P ),
// provider    = {}
// callee      = ( P... ) ->
// callee_ctx  = {}
// d = new Proxy callee,
//   set: ( target, key, value ) ->
//     warn 'Ω__30', 'set', ( rpr key ), ( rpr value )
//     Reflect.set provider, key, "*#{value}*"
//     return true
//   get: ( target, key ) ->
//     help 'Ω__31', 'get', rpr key
//     return Reflect.get provider, key if Reflect.has provider, key
//     return Symbol 'notavalue'
//   apply: ( target, _, P... ) ->
//     debug 'Ω__32', P
//     # target.apply null, P
// info 'Ω__33', d 'helo'
// info 'Ω__34', d.greetings = 'helo'
// info 'Ω__35', d.greetings

}).call(this);

//# sourceMappingURL=demo-infiniproxy.js.map