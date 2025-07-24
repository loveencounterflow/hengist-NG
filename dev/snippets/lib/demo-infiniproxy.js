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
    var ANSI, Ansi, Colorizer, TMP_error, bg_code_start, bg_code_stop, c, code, create_infinyproxy, fg_black, fg_code_start, fg_code_stop, name, ref, rgb, sys_symbol;
    TMP_error = class TMP_error extends Error {};
    ({create_infinyproxy, sys_symbol} = SFMODULES.require_infiniproxy());
    //=========================================================================================================
    ANSI = new (Ansi = (function() {
      class Ansi {
        //-------------------------------------------------------------------------------------------------------
        fg_color_code_from_rgb_dec([r, g, b]) {
          return `\x1b[38:2::${r}:${g}:${b}m`;
        }

        bg_color_code_from_rgb_dec([r, g, b]) {
          return `\x1b[48:2::${r}:${g}:${b}m`;
        }

        fg_color_code_from_color_name(name) {
          var ref, rgb;
          rgb = (ref = this.colors[name]) != null ? ref : this.colors.fallback;
          return this.fg_color_code_from_rgb_dec(rgb);
        }

        rgb_from_hex(hex) {
          var b16, g16, r16;
          if ((typeof hex) !== 'string') {
            /* TAINT use proper typing */
            throw new Error(`Ω__25 expected text, got ${rpr(hex)}`);
          }
          if (!hex.startsWith('#')) {
            throw new Error(`Ω__25 expected '#', got ${rpr(hex)}`);
          }
          if (hex.length !== 7) {
            throw new Error(`Ω__25 expected text of length 7, got ${rpr(hex)}`);
          }
          [r16, g16, b16] = [hex.slice(1, 3), hex.slice(3, 5), hex.slice(5, 7)];
          return [parseInt(r16, 16), parseInt(g16, 16), parseInt(b16, 16)];
        }

      };

      //-------------------------------------------------------------------------------------------------------
      Ansi.prototype.colors_ansi = null;

      Ansi.prototype.colors = {
        /* thx to: https://en.wikipedia.org/wiki/Help:Distinguishable_colors */
        /* thx to: https://graphicdesign.stackexchange.com/questions/3682/where-can-i-find-a-large-palette-set-of-contrasting-colors-for-coloring-many-d */
        black: '#000000',
        white: '#ffffff',
        amethyst: '#f0a3ff',
        blue: '#0075dc',
        caramel: '#993f00',
        damson: '#4c005c',
        ebony: '#191919',
        forest: '#005c31',
        green: '#2bce48',
        honeydew: '#ffcc99',
        iron: '#808080',
        jade: '#94ffb5',
        khaki: '#8f7c00',
        lime: '#9dcc00',
        mallow: '#c20088',
        navy: '#003380',
        orpiment: '#ffa405',
        pink: '#ffa8bb',
        quagmire: '#426600',
        red: '#ff0010',
        sky: '#5ef1f2',
        turquoise: '#00998f',
        uranium: '#e0ff66',
        violet: '#740aff',
        wine: '#990000',
        xanthin: '#ffff80',
        yellow: '#ffe100',
        zinnia: '#ff5005',
        //.....................................................................................................
        fallback: [255, 20, 147]
      };

      return Ansi;

    }).call(this))();
    ref = ANSI.colors;
    for (name in ref) {
      code = ref[name];
      switch (true) {
        case (typeof code) === 'string':
          rgb = ANSI.rgb_from_hex(code);
          break;
        case Array.isArray(code):
          rgb = code;
          break;
        default:
          throw new Error(`Ω__25 format error: ${rpr(code)}`);
      }
      fg_code_start = ANSI.fg_color_code_from_rgb_dec(rgb);
      bg_code_start = ANSI.bg_color_code_from_rgb_dec(rgb);
      fg_code_stop = '\x1b[0m';
      bg_code_stop = '\x1b[0m';
      if (name === 'black') {
        fg_black = fg_code_start;
      }
      echo('Ω__10', f`abc▄${fg_code_start} DEF▄ ${fg_code_stop}xyz▄ ${fg_black}${bg_code_start} DEF▄ ${bg_code_stop}xyz▄ —— ${name}:<20c; ——`);
    }
    return null;
    //=========================================================================================================
    Colorizer = class Colorizer {
      //-------------------------------------------------------------------------------------------------------
      static colorize(...P) {
        var ansi;
        // whisper 'Ω__21', "colorize() context keys:  #{rpr ( k for k of @ )}"
        // whisper 'Ω__22', "colorize() arguments:     #{rpr P}"
        whisper('Ω__23', `colorize() stack:         ${rpr([...this.stack])}`);
        for (name of this.stack) {
          ansi = ANSI.fg_color_code_from_color_name(name);
          // debug 'Ω__10', ( rpr name ), ( rpr ansi )
          echo('Ω__10', f`abc▄${ansi} DEF▄ \x1b[0mxyz▄ —— ${name}:<20c; ——`);
        }
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
    c = new Colorizer();
    info('Ω__24', c);
    info('Ω__25', c.green.bold.inverse(" holy moly "));
    info('Ω__25', c.slategray(" holy moly "));
    info('Ω__25', c.darkslategray(" holy moly "));
    info('Ω__25', c.darkkhaki(" holy moly "));
    info('Ω__25', c.gold(" holy moly "));
    //.........................................................................................................
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
      // demo_instance_function_as_proxy()
      return demo_colorful_proxy();
    })();
  }

}).call(this);

//# sourceMappingURL=demo-infiniproxy.js.map