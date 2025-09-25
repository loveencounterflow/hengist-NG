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

  SFMODULES = require('../../../apps/bricabrac-sfmodules');

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
  SFMODULES.require_ansi = function() {
    var ANSI, Ansi, exports;
    //=========================================================================================================
    ANSI = new (Ansi = class Ansi {
      /*

      * as for the background ('bg'), only colors and no effects can be set; in addition, the bg color can be
        set to its default (or 'transparent'), which will show the terminal's or the terminal emulator's
        configured bg color
      * as for the foreground ('fg'), colors and effects such as blinking, bold, italic, underline, overline,
        strike can be set; in addition, the configured terminal default font color can be set, and each effect
        has a dedicated off-switch
      * neat tables can be drawn by combining the overline effect with `│` U+2502 'Box Drawing Light Vertical
        Line'; the renmarkable feature of this is that it minimizes spacing around characters meaning it's
        possible to have adjacent rows of cells separated from the next row by a border without having to
        sacrifice a line of text just to draw the border.
      * while the two color palattes implied by the standard XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        * better to only use full RGB than to fuzz around with palettes
        * apps that use colors at all should be prepared for dark and bright backgrounds
        * in general better to set fg, bg colors than to use reverse
        * but reverse actually does do what it says—it swaps fg with bg color

      \x1b[39m default fg color
      \x1b[49m default bg color

       */
      //-------------------------------------------------------------------------------------------------------
      fg_color_code_from_rgb_dec([r, g, b]) {
        return `\x1b[38:2::${r}:${g}:${b}m`;
      }

      bg_color_code_from_rgb_dec([r, g, b]) {
        return `\x1b[48:2::${r}:${g}:${b}m`;
      }

      fg_color_code_from_hex(hex) {
        return this.fg_color_code_from_rgb_dec(this.rgb_from_hex(hex));
      }

      bg_color_code_from_hex(hex) {
        return this.bg_color_code_from_rgb_dec(this.rgb_from_hex(hex));
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

    })();
    //---------------------------------------------------------------------------------------------------------
    return exports = {ANSI};
  };

  //===========================================================================================================
  demo_colorful_proxy = function() {
    var ANSI, Colorizer, R, TMP_error, bg_code_start, bga, bga2, bgred, bgz, blinka, blinkz, c, code, color_name_1, color_name_2, color_zones, colors, colors_ansi, create_infinyproxy, fg_black, fg_code_start, fga, fga1, fgz, hex_1, hex_2, name, overlinea, overlinez, rgb, sys_symbol, zone_colors_1, zone_colors_2, zone_name_1, zone_name_2;
    TMP_error = class TMP_error extends Error {};
    ({create_infinyproxy, sys_symbol} = SFMODULES.require_infiniproxy());
    ({ANSI} = SFMODULES.require_ansi());
    //-------------------------------------------------------------------------------------------------------
    colors_ansi = null;
    colors = {
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
      lime: '#9dcc00',
      quagmire: '#426600',
      honeydew: '#ffcc99',
      iron: '#808080',
      jade: '#94ffb5',
      khaki: '#8f7c00',
      mallow: '#c20088',
      navy: '#003380',
      orpiment: '#ffa405',
      pink: '#ffa8bb',
      red: '#ff0010',
      sky: '#5ef1f2',
      turquoise: '#00998f',
      violet: '#740aff',
      wine: '#990000',
      uranium: '#e0ff66',
      xanthin: '#ffff80',
      yellow: '#ffe100',
      zinnia: '#ff5005',
      //.....................................................................................................
      fallback: [255, 20, 147]
    };
    for (name in colors) {
      code = colors[name];
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
      if (name === 'black') {
        fg_black = fg_code_start;
      }
      echo('Ω__10', f`abc▄${fg_code_start} DEF▄ \x1b[0mxyz▄ ${fg_black}${bg_code_start} DEF▄ \x1b[0mxyz▄ —— ${name}:<20c; ——`);
    }
    color_zones = (require('./color-zones')).color_zones;
    fgz = '\x1b[39m';
    bgz = '\x1b[49m';
    for (zone_name_1 in color_zones) {
      zone_colors_1 = color_zones[zone_name_1];
      echo();
      for (color_name_1 in zone_colors_1) {
        hex_1 = zone_colors_1[color_name_1];
        R = f`${zone_name_1}:<6c; ${color_name_1}:<10c; ${hex_1} `;
        fga1 = ANSI.fg_color_code_from_hex(hex_1);
        for (zone_name_2 in color_zones) {
          zone_colors_2 = color_zones[zone_name_2];
          R += ' ';
          for (color_name_2 in zone_colors_2) {
            hex_2 = zone_colors_2[color_name_2];
            bga2 = ANSI.bg_color_code_from_hex(hex_2);
            R += `${fga1}${bga2} W ${fgz}${bgz}`;
          }
        }
        echo(R);
      }
    }
    // echo rpr R
    fga = '\x1B[38:2::37:54:118m';
    bga = '\x1B[48:2::255:255:255m';
    overlinea = '\x1b[53m';
    overlinez = '\x1b[55m';
    blinka = '\x1b[5m';
    blinkz = '\x1b[25m';
    red = '\x1B[38:2::207:32:39m';
    bgred = '\x1B[48:2::207:32:39m';
    echo(`abc ${fga}${bga}${overlinea} DEF│gjy│1234 ${overlinez}${fgz}${bgz} xyz`);
    echo(`abc ${fga}${bga}${overlinea} DEF${bgred}│gjy│${bga}1234 ${overlinez}${fgz}${bgz} xyz`);
    echo(`abc ${fga}${bga}${overlinea} DEF│gjy│${red}1234${fga} ${overlinez}${fgz}${bgz} xyz`);
    echo(`abc ${fga}${bga}${overlinea} DEF│${blinka}gjy${blinkz}│1234 ${overlinez}${fgz}${bgz} xyz`);
    echo(`abc ${fga}${bga}${overlinea} DEF│gjy│1234 ${overlinez}${fgz}${bgz} xyz`);
    echo();
    echo("\x1B[39m\x1B[49m\x1B[38:2::37:54:118m\x1B[48:2::207:32:39m abc \x1b[7m abc \x1b[0m");
    echo();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8taW5maW5pcHJveHkuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCRztFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBR0g7QUFIRyxNQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLG1CQUFBLEVBQUEsK0JBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUEsRUFBQSxLQUFBOzs7RUFNSCxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLFlBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsSUFKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsR0FQRixFQVFFLElBUkYsRUFTRSxPQVRGLEVBVUUsR0FWRixDQUFBLEdBVTRCLEdBQUcsQ0FBQyxHQVZoQzs7RUFXQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1Qjs7RUFDQSxLQUFBLEdBQTRCLFFBQUEsQ0FBRSxDQUFGLENBQUE7V0FBUyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQWYsQ0FBcUIsQ0FBckI7RUFBVDs7RUFDNUIsQ0FBQSxHQUE0QixPQUFBLENBQVEsT0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEdBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEsNENBQVIsQ0FBNUI7O0VBQ0EsSUFBQSxHQUE0QixPQUFBLENBQVEsMkJBQVI7O0VBQzVCLENBQUEsQ0FBRSxJQUFGLENBQUEsR0FBNEIsSUFBNUI7O0VBQ0EsU0FBQSxHQUE0QixPQUFBLENBQVEsbUNBQVIsRUFqQ3pCOzs7RUFzQ0gsK0JBQUEsR0FBa0MsUUFBQSxDQUFBLENBQUE7QUFFbEMsUUFBQSxDQUFBOztJQUNFLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBWSxDQUFBLFFBQUEsQ0FBQSxDQUFBO0FBQ2QsVUFBQSxrQkFBQSxFQUFBLE9BQUEsRUFBQTtNQUFJLENBQUEsQ0FBRSxrQkFBRixFQUNFLFVBREYsQ0FBQSxHQUM0QixTQUFTLENBQUMsbUJBQVYsQ0FBQSxDQUQ1QjtNQUdNOztRQUFOLE1BQUEsRUFBQSxDQUFBOztVQUdFLFdBQWEsQ0FBRSxNQUFGLENBQUE7QUFDbkIsZ0JBQUE7WUFBUSxJQUFDLENBQUEsVUFBRCxHQUFjO1lBQ2QsTUFBTSxDQUFDLGNBQVAsQ0FBc0IsTUFBdEIsRUFBOEIsSUFBOUI7WUFDQSxDQUFBLEdBQUksa0JBQUEsQ0FBbUI7Y0FBRSxNQUFGO2NBQVUsUUFBQSxFQUFVO1lBQXBCLENBQW5CLEVBRlo7O0FBSVEsbUJBQU87VUFMSSxDQURuQjs7O1VBU00sV0FBYSxDQUFFLEtBQUYsQ0FBQTtBQUNuQixnQkFBQTtZQUFRLE9BQUEsQ0FBUSxPQUFSLEVBQWlCLGFBQWpCO1lBQ0EsT0FBQSxDQUFRLE9BQVI7O0FBQW1CO2NBQUEsS0FBQSxxQkFBQTs2QkFBQTtjQUFBLENBQUE7O3lCQUFuQjtZQUNBLElBQUMsQ0FBRSxVQUFGLENBQWMsQ0FBQyxLQUFLLENBQUMsSUFBdEIsQ0FBMkIsV0FBM0I7WUFDQSxJQUFDLENBQUUsVUFBRixDQUFjLENBQUMsS0FBSyxDQUFDLElBQXRCLENBQTJCLE9BQTNCO1lBQ0EsSUFBQyxDQUFFLFVBQUYsQ0FBYyxDQUFDLEtBQUssQ0FBQyxJQUF0QixDQUEyQixDQUFBLE1BQUEsQ0FBQSxDQUFTLEdBQUEsQ0FBSSxLQUFKLENBQVQsQ0FBQSxDQUEzQjtBQUNBLG1CQUFPLElBQUMsQ0FBRSxVQUFGLENBQWMsQ0FBQztVQU5aOztRQVhmOzs7b0JBb0JFLGFBQUEsR0FBZTs7OztvQkF2QnJCOztBQTBCSSxhQUFPLE9BQUEsR0FBVSxDQUFFLENBQUY7SUEzQlAsQ0FBQSxHQUFaO0lBNkJHLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNMLFVBQUEsQ0FBQSxFQUFBO01BQUksT0FBQSxHQUFVLFFBQUEsQ0FBQSxHQUFFLENBQUYsQ0FBQTtBQUNkLFlBQUEsS0FBQSxFQUFBLE9BQUEsRUFBQTtRQUFNLE9BQUEsQ0FBUSxPQUFSLEVBQWlCLElBQUMsQ0FBQSxLQUFsQixFQUF5QixJQUFDLENBQUEsS0FBSyxDQUFDLFFBQWhDLEVBQTBDLENBQUUsR0FBQSxJQUFDLENBQUEsS0FBSCxDQUExQztRQUNBLEtBQUEsR0FBVSxDQUFFLEdBQUEsSUFBQyxDQUFBLEtBQUgsQ0FBYyxDQUFDLElBQWYsQ0FBb0IsR0FBcEI7UUFDVixPQUFBOztBQUFZO1VBQUEsS0FBQSxtQ0FBQTs7eUJBQUUsR0FBQSxDQUFJLENBQUo7VUFBRixDQUFBOzs7QUFDWixlQUFPLENBQUEsQ0FBQSxDQUFBLENBQUksS0FBSixDQUFBLENBQUEsQ0FBQSxDQUFhLE9BQWIsQ0FBQSxDQUFBO01BSkM7TUFLVixJQUFBLENBQUssZ0ZBQUw7TUFDQSxJQUFBLENBQUssT0FBTCxFQUFjLEdBQUEsQ0FBSSxDQUFBLEdBQUksSUFBSSxDQUFKLENBQU0sT0FBTixDQUFSLENBQWQ7TUFDQSxJQUFBLENBQUssT0FBTCxFQUFjLE9BQUEsQ0FBUSxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQVIsQ0FBZ0IsQ0FBQSxZQUFhLENBQTdCLENBQVIsQ0FBZCxFQVBKO01BUUksSUFBQSxDQUFLLE9BQUwsRUFBYyxHQUFBLENBQUksTUFBTSxDQUFDLGNBQVAsQ0FBc0IsQ0FBdEIsQ0FBSixDQUFkO01BQ0EsSUFBQSxDQUFLLE9BQUwsRUFBYyxHQUFBLENBQUksQ0FBRSxPQUFPLE1BQU0sQ0FBQyxjQUFQLENBQXNCLENBQXRCLENBQVQsQ0FBQSxLQUFzQyxDQUFFLE9BQU8sQ0FBRSxRQUFBLENBQUEsQ0FBQSxFQUFBLENBQUYsQ0FBVCxDQUExQyxDQUFkO01BQ0EsSUFBQSxDQUFLLE9BQUwsRUFBYyxHQUFBLENBQUksT0FBTyxDQUFYLENBQWQ7TUFDQSxJQUFBLENBQUssT0FBTCxFQUFjLEdBQUEsQ0FBSSxNQUFNLENBQUEsU0FBRSxDQUFBLFFBQVEsQ0FBQyxJQUFqQixDQUFzQixDQUF0QixDQUFKLENBQWQ7TUFDQSxJQUFBLENBQUssT0FBTCxFQUFjLEdBQUEsQ0FBSSxDQUFBLFlBQWEsUUFBakIsQ0FBZDtNQUNBLElBQUEsQ0FBSyxnRkFBTDtNQUNBLElBQUEsQ0FBSyxPQUFMLEVBQWMsR0FBQSxDQUFJLENBQUMsQ0FBQyxVQUFOLENBQWQsRUFkSjtNQWVJLElBQUEsQ0FBSyxPQUFMLEVBQWMsR0FBQSxDQUFJLENBQUMsQ0FBQyxXQUFGLENBQUEsQ0FBSixDQUFkLEVBZko7TUFnQkksSUFBQSxDQUFLLE9BQUwsRUFBYyxHQUFBLENBQUksQ0FBQyxDQUFDLGFBQU4sQ0FBZCxFQWhCSjtNQWlCSSxJQUFBLENBQUssT0FBTCxFQUFjLEdBQUEsQ0FBSSxDQUFDLENBQUMsV0FBTixDQUFkLEVBakJKO01Ba0JJLElBQUEsQ0FBSyxnRkFBTDtNQUNBLElBQUEsQ0FBSyxPQUFMLEVBQWMsR0FBQSxDQUFJLENBQUEsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLEdBQVIsQ0FBSixDQUFkO01BQ0EsSUFBQSxDQUFLLE9BQUwsRUFBYyxHQUFBLENBQUksQ0FBQyxDQUFDLEdBQU4sQ0FBZDtNQUNBLElBQUEsQ0FBSyxPQUFMLEVBQWMsR0FBQSxDQUFJLENBQUEsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLEdBQVIsQ0FBSixDQUFkO01BQ0EsSUFBQSxDQUFLLE9BQUwsRUFBYyxHQUFBLENBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFOLENBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsR0FBakIsQ0FBSixDQUFkO01BQ0EsSUFBQSxDQUFLLE9BQUwsRUFBYyxHQUFBLENBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBWCxDQUF1QixHQUF2QixDQUEyQixDQUFDLElBQTVCLENBQWlDLEtBQWpDLENBQUosQ0FBZDthQUNBLElBQUEsQ0FBSyxPQUFMLEVBQWMsR0FBQSxDQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQSxHQUFBLENBQUssQ0FBQyxJQUE1QixDQUFpQyxLQUFqQyxDQUFKLENBQWQ7SUF6QkMsQ0FBQTtBQTBCSCxXQUFPO0VBMUR5QixFQXRDL0I7OztFQW9HSCxTQUFTLENBQUMsWUFBVixHQUF5QixRQUFBLENBQUEsQ0FBQTtBQUV6QixRQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQTs7SUFDRSxJQUFBLEdBQU8sSUFBQSxDQUFVLE9BQU4sTUFBQSxLQUFBLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQXdCVCwwQkFBNEIsQ0FBQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUFELENBQUE7ZUFBa0IsQ0FBQSxXQUFBLENBQUEsQ0FBYyxDQUFkLENBQUEsQ0FBQSxDQUFBLENBQW1CLENBQW5CLENBQUEsQ0FBQSxDQUFBLENBQXdCLENBQXhCLENBQUEsQ0FBQTtNQUFsQjs7TUFDNUIsMEJBQTRCLENBQUMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBRCxDQUFBO2VBQWtCLENBQUEsV0FBQSxDQUFBLENBQWMsQ0FBZCxDQUFBLENBQUEsQ0FBQSxDQUFtQixDQUFuQixDQUFBLENBQUEsQ0FBQSxDQUF3QixDQUF4QixDQUFBLENBQUE7TUFBbEI7O01BQzVCLHNCQUE0QixDQUFFLEdBQUYsQ0FBQTtlQUFrQixJQUFDLENBQUEsMEJBQUQsQ0FBNEIsSUFBQyxDQUFBLFlBQUQsQ0FBYyxHQUFkLENBQTVCO01BQWxCOztNQUM1QixzQkFBNEIsQ0FBRSxHQUFGLENBQUE7ZUFBa0IsSUFBQyxDQUFBLDBCQUFELENBQTRCLElBQUMsQ0FBQSxZQUFELENBQWMsR0FBZCxDQUE1QjtNQUFsQjs7TUFDNUIsNkJBQStCLENBQUUsSUFBRixDQUFBO0FBQ25DLFlBQUEsR0FBQSxFQUFBO1FBQU0sR0FBQSw2Q0FBd0IsSUFBQyxDQUFBLE1BQU0sQ0FBQztBQUNoQyxlQUFPLElBQUMsQ0FBQSwwQkFBRCxDQUE0QixHQUE1QjtNQUZzQjs7TUFHL0IsWUFBYyxDQUFFLEdBQUYsQ0FBQTtBQUNsQixZQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUE7UUFDTSxJQUE2RCxDQUFFLE9BQU8sR0FBVCxDQUFBLEtBQWtCLFFBQS9FOztVQUFBLE1BQU0sSUFBSSxLQUFKLENBQVUsQ0FBQSx5QkFBQSxDQUFBLENBQTRCLEdBQUEsQ0FBSSxHQUFKLENBQTVCLENBQUEsQ0FBVixFQUFOOztRQUNBLEtBQTRELEdBQUcsQ0FBQyxVQUFKLENBQWUsR0FBZixDQUE1RDtVQUFBLE1BQU0sSUFBSSxLQUFKLENBQVUsQ0FBQSx3QkFBQSxDQUFBLENBQTJCLEdBQUEsQ0FBSSxHQUFKLENBQTNCLENBQUEsQ0FBVixFQUFOOztRQUNBLElBQXlFLEdBQUcsQ0FBQyxNQUFKLEtBQWMsQ0FBdkY7VUFBQSxNQUFNLElBQUksS0FBSixDQUFVLENBQUEscUNBQUEsQ0FBQSxDQUF3QyxHQUFBLENBQUksR0FBSixDQUF4QyxDQUFBLENBQVYsRUFBTjs7UUFDQSxDQUFFLEdBQUYsRUFBTyxHQUFQLEVBQVksR0FBWixDQUFBLEdBQXFCLENBQUUsR0FBRyxZQUFMLEVBQWlCLEdBQUcsWUFBcEIsRUFBZ0MsR0FBRyxZQUFuQztBQUNyQixlQUFPLENBQUksUUFBQSxDQUFTLEdBQVQsRUFBYyxFQUFkLENBQUosRUFBMEIsUUFBQSxDQUFTLEdBQVQsRUFBYyxFQUFkLENBQTFCLEVBQWdELFFBQUEsQ0FBUyxHQUFULEVBQWMsRUFBZCxDQUFoRDtNQU5LOztJQS9CTCxDQUFKLENBQUEsQ0FBQSxFQURUOztBQXlDRSxXQUFPLE9BQUEsR0FBVSxDQUFFLElBQUY7RUEzQ00sRUFwR3RCOzs7RUFrSkgsbUJBQUEsR0FBc0IsUUFBQSxDQUFBLENBQUE7QUFDdEIsUUFBQSxJQUFBLEVBQUEsU0FBQSxFQUFBLENBQUEsRUFBQSxTQUFBLEVBQUEsYUFBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLEdBQUEsRUFBQSxNQUFBLEVBQUEsTUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsWUFBQSxFQUFBLFlBQUEsRUFBQSxXQUFBLEVBQUEsTUFBQSxFQUFBLFdBQUEsRUFBQSxrQkFBQSxFQUFBLFFBQUEsRUFBQSxhQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxHQUFBLEVBQUEsVUFBQSxFQUFBLGFBQUEsRUFBQSxhQUFBLEVBQUEsV0FBQSxFQUFBO0lBQVEsWUFBTixNQUFBLFVBQUEsUUFBd0IsTUFBeEIsQ0FBQTtJQUNBLENBQUEsQ0FBRSxrQkFBRixFQUNFLFVBREYsQ0FBQSxHQUM0QixTQUFTLENBQUMsbUJBQVYsQ0FBQSxDQUQ1QjtJQUVBLENBQUEsQ0FBRSxJQUFGLENBQUEsR0FBNEIsU0FBUyxDQUFDLFlBQVYsQ0FBQSxDQUE1QixFQUhGOztJQUtFLFdBQUEsR0FBYztJQUNkLE1BQUEsR0FHRSxDQUFBOzs7TUFBQSxLQUFBLEVBQWtCLFNBQWxCO01BQ0EsS0FBQSxFQUFrQixTQURsQjtNQUVBLFFBQUEsRUFBa0IsU0FGbEI7TUFHQSxJQUFBLEVBQWtCLFNBSGxCO01BSUEsT0FBQSxFQUFrQixTQUpsQjtNQUtBLE1BQUEsRUFBa0IsU0FMbEI7TUFNQSxLQUFBLEVBQWtCLFNBTmxCO01BT0EsTUFBQSxFQUFrQixTQVBsQjtNQVFBLEtBQUEsRUFBa0IsU0FSbEI7TUFTQSxJQUFBLEVBQWtCLFNBVGxCO01BVUEsUUFBQSxFQUFrQixTQVZsQjtNQVdBLFFBQUEsRUFBa0IsU0FYbEI7TUFZQSxJQUFBLEVBQWtCLFNBWmxCO01BYUEsSUFBQSxFQUFrQixTQWJsQjtNQWNBLEtBQUEsRUFBa0IsU0FkbEI7TUFlQSxNQUFBLEVBQWtCLFNBZmxCO01BZ0JBLElBQUEsRUFBa0IsU0FoQmxCO01BaUJBLFFBQUEsRUFBa0IsU0FqQmxCO01Ba0JBLElBQUEsRUFBa0IsU0FsQmxCO01BbUJBLEdBQUEsRUFBa0IsU0FuQmxCO01Bb0JBLEdBQUEsRUFBa0IsU0FwQmxCO01BcUJBLFNBQUEsRUFBa0IsU0FyQmxCO01Bc0JBLE1BQUEsRUFBa0IsU0F0QmxCO01BdUJBLElBQUEsRUFBa0IsU0F2QmxCO01Bd0JBLE9BQUEsRUFBa0IsU0F4QmxCO01BeUJBLE9BQUEsRUFBa0IsU0F6QmxCO01BMEJBLE1BQUEsRUFBa0IsU0ExQmxCO01BMkJBLE1BQUEsRUFBa0IsU0EzQmxCOztNQTZCQSxRQUFBLEVBQWtCLENBQUUsR0FBRixFQUFRLEVBQVIsRUFBWSxHQUFaO0lBN0JsQjtJQStCRixLQUFBLGNBQUE7O0FBQ0UsY0FBTyxJQUFQO0FBQUEsYUFDTyxDQUFFLE9BQU8sSUFBVCxDQUFBLEtBQW1CLFFBRDFCO1VBRUksR0FBQSxHQUFNLElBQUksQ0FBQyxZQUFMLENBQWtCLElBQWxCO0FBREg7QUFEUCxhQUdPLEtBQUssQ0FBQyxPQUFOLENBQWMsSUFBZCxDQUhQO1VBSUksR0FBQSxHQUFNO0FBREg7QUFIUDtVQUtPLE1BQU0sSUFBSSxLQUFKLENBQVUsQ0FBQSxvQkFBQSxDQUFBLENBQXVCLEdBQUEsQ0FBSSxJQUFKLENBQXZCLENBQUEsQ0FBVjtBQUxiO01BTUEsYUFBQSxHQUFnQixJQUFJLENBQUMsMEJBQUwsQ0FBZ0MsR0FBaEM7TUFDaEIsYUFBQSxHQUFnQixJQUFJLENBQUMsMEJBQUwsQ0FBZ0MsR0FBaEM7TUFDaEIsSUFBRyxJQUFBLEtBQVEsT0FBWDtRQUNFLFFBQUEsR0FBVyxjQURiOztNQUVBLElBQUEsQ0FBSyxPQUFMLEVBQWMsQ0FBQyxDQUFBLElBQUEsQ0FBQSxDQUFPLGFBQVAsQ0FBQSxrQkFBQSxDQUFBLENBQXlDLFFBQXpDLENBQUEsQ0FBQSxDQUFvRCxhQUFwRCxDQUFBLHFCQUFBLENBQUEsQ0FBeUYsSUFBekYsQ0FBQSxTQUFBLENBQWY7SUFYRjtJQWFBLFdBQUEsR0FBYyxDQUFFLE9BQUEsQ0FBUSxlQUFSLENBQUYsQ0FBMkIsQ0FBQztJQUMxQyxHQUFBLEdBQWM7SUFDZCxHQUFBLEdBQWM7SUFDZCxLQUFBLDBCQUFBOztNQUNFLElBQUEsQ0FBQTtNQUNBLEtBQUEsNkJBQUE7O1FBQ0UsQ0FBQSxHQUFRLENBQUMsQ0FBQSxDQUFBLENBQUcsV0FBSCxDQUFBLE1BQUEsQ0FBQSxDQUF1QixZQUF2QixDQUFBLE9BQUEsQ0FBQSxDQUE2QyxLQUE3QyxFQUFBO1FBQ1QsSUFBQSxHQUFRLElBQUksQ0FBQyxzQkFBTCxDQUE0QixLQUE1QjtRQUNSLEtBQUEsMEJBQUE7O1VBQ0UsQ0FBQSxJQUFLO1VBQ0wsS0FBQSw2QkFBQTs7WUFDRSxJQUFBLEdBQVEsSUFBSSxDQUFDLHNCQUFMLENBQTRCLEtBQTVCO1lBQ1IsQ0FBQSxJQUFRLENBQUEsQ0FBQSxDQUFHLElBQUgsQ0FBQSxDQUFBLENBQVUsSUFBVixDQUFBLEdBQUEsQ0FBQSxDQUFvQixHQUFwQixDQUFBLENBQUEsQ0FBMEIsR0FBMUIsQ0FBQTtVQUZWO1FBRkY7UUFLQSxJQUFBLENBQUssQ0FBTDtNQVJGO0lBRkYsQ0F4REY7O0lBcUVFLEdBQUEsR0FBWTtJQUNaLEdBQUEsR0FBWTtJQUNaLFNBQUEsR0FBWTtJQUNaLFNBQUEsR0FBWTtJQUNaLE1BQUEsR0FBWTtJQUNaLE1BQUEsR0FBWTtJQUNaLEdBQUEsR0FBWTtJQUNaLEtBQUEsR0FBWTtJQUNaLElBQUEsQ0FBSyxDQUFBLElBQUEsQ0FBQSxDQUFPLEdBQVAsQ0FBQSxDQUFBLENBQWEsR0FBYixDQUFBLENBQUEsQ0FBbUIsU0FBbkIsQ0FBQSxjQUFBLENBQUEsQ0FBNkMsU0FBN0MsQ0FBQSxDQUFBLENBQXlELEdBQXpELENBQUEsQ0FBQSxDQUErRCxHQUEvRCxDQUFBLElBQUEsQ0FBTDtJQUNBLElBQUEsQ0FBSyxDQUFBLElBQUEsQ0FBQSxDQUFPLEdBQVAsQ0FBQSxDQUFBLENBQWEsR0FBYixDQUFBLENBQUEsQ0FBbUIsU0FBbkIsQ0FBQSxJQUFBLENBQUEsQ0FBbUMsS0FBbkMsQ0FBQSxLQUFBLENBQUEsQ0FBZ0QsR0FBaEQsQ0FBQSxLQUFBLENBQUEsQ0FBMkQsU0FBM0QsQ0FBQSxDQUFBLENBQXVFLEdBQXZFLENBQUEsQ0FBQSxDQUE2RSxHQUE3RSxDQUFBLElBQUEsQ0FBTDtJQUNBLElBQUEsQ0FBSyxDQUFBLElBQUEsQ0FBQSxDQUFPLEdBQVAsQ0FBQSxDQUFBLENBQWEsR0FBYixDQUFBLENBQUEsQ0FBbUIsU0FBbkIsQ0FBQSxTQUFBLENBQUEsQ0FBd0MsR0FBeEMsQ0FBQSxJQUFBLENBQUEsQ0FBa0QsR0FBbEQsRUFBQSxDQUFBLENBQXlELFNBQXpELENBQUEsQ0FBQSxDQUFxRSxHQUFyRSxDQUFBLENBQUEsQ0FBMkUsR0FBM0UsQ0FBQSxJQUFBLENBQUw7SUFDQSxJQUFBLENBQUssQ0FBQSxJQUFBLENBQUEsQ0FBTyxHQUFQLENBQUEsQ0FBQSxDQUFhLEdBQWIsQ0FBQSxDQUFBLENBQW1CLFNBQW5CLENBQUEsS0FBQSxDQUFBLENBQW9DLE1BQXBDLENBQUEsR0FBQSxDQUFBLENBQWdELE1BQWhELENBQUEsTUFBQSxDQUFBLENBQStELFNBQS9ELENBQUEsQ0FBQSxDQUEyRSxHQUEzRSxDQUFBLENBQUEsQ0FBaUYsR0FBakYsQ0FBQSxJQUFBLENBQUw7SUFDQSxJQUFBLENBQUssQ0FBQSxJQUFBLENBQUEsQ0FBTyxHQUFQLENBQUEsQ0FBQSxDQUFhLEdBQWIsQ0FBQSxDQUFBLENBQW1CLFNBQW5CLENBQUEsY0FBQSxDQUFBLENBQTZDLFNBQTdDLENBQUEsQ0FBQSxDQUF5RCxHQUF6RCxDQUFBLENBQUEsQ0FBK0QsR0FBL0QsQ0FBQSxJQUFBLENBQUw7SUFDQSxJQUFBLENBQUE7SUFDQSxJQUFBLENBQUssb0ZBQUw7SUFDQSxJQUFBLENBQUE7QUFFQSxXQUFPLEtBdEZUOztJQTBGUSxZQUFOLE1BQUEsVUFBQSxDQUFBOztNQUdhLE9BQVYsUUFBVSxDQUFBLEdBQUUsQ0FBRixDQUFBO0FBQ2YsWUFBQSxJQUFBOzs7UUFFTSxPQUFBLENBQVEsT0FBUixFQUFpQixDQUFBLDBCQUFBLENBQUEsQ0FBNkIsR0FBQSxDQUFJLENBQUUsR0FBQSxJQUFDLENBQUEsS0FBSCxDQUFKLENBQTdCLENBQUEsQ0FBakI7UUFDQSxLQUFBLGtCQUFBO1VBQ0UsSUFBQSxHQUFPLElBQUksQ0FBQyw2QkFBTCxDQUFtQyxJQUFuQyxFQUFmOztVQUVRLElBQUEsQ0FBSyxPQUFMLEVBQWMsQ0FBQyxDQUFBLElBQUEsQ0FBQSxDQUFPLElBQVAsQ0FBQSxxQkFBQSxDQUFBLENBQW1DLElBQW5DLENBQUEsU0FBQSxDQUFmO1FBSEY7QUFJQSxlQUFPO01BUkUsQ0FEZjs7O01BWUksV0FBYSxDQUFBLENBQUE7UUFDWCxJQUFDLENBQUEsVUFBRCxHQUFjO1FBQ2QsTUFBTSxDQUFDLGNBQVAsQ0FBc0IsSUFBQyxDQUFBLFdBQVcsQ0FBQyxRQUFuQyxFQUE2QyxJQUE3QztRQUNBLENBQUEsR0FBSSxrQkFBQSxDQUFtQjtVQUFFLE1BQUEsRUFBUSxJQUFDLENBQUEsV0FBVyxDQUFDLFFBQXZCO1VBQWlDLFFBQUEsRUFBVTtRQUEzQyxDQUFuQjtBQUNKLGVBQU87TUFKSTs7SUFkZixFQTFGRjs7SUErR0UsQ0FBQSxHQUFJLElBQUksU0FBSixDQUFBO0lBQ0osSUFBQSxDQUFLLE9BQUwsRUFBYyxDQUFkO0lBQ0EsSUFBQSxDQUFLLE9BQUwsRUFBYyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFiLENBQXFCLGFBQXJCLENBQWQ7SUFDQSxJQUFBLENBQUssT0FBTCxFQUFjLENBQUMsQ0FBQyxTQUFGLENBQVksYUFBWixDQUFkO0lBQ0EsSUFBQSxDQUFLLE9BQUwsRUFBYyxDQUFDLENBQUMsYUFBRixDQUFnQixhQUFoQixDQUFkO0lBQ0EsSUFBQSxDQUFLLE9BQUwsRUFBYyxDQUFDLENBQUMsU0FBRixDQUFZLGFBQVosQ0FBZDtJQUNBLElBQUEsQ0FBSyxPQUFMLEVBQWMsQ0FBQyxDQUFDLElBQUYsQ0FBTyxhQUFQLENBQWQsRUFySEY7O0FBdUhFLFdBQU87RUF4SGEsRUFsSm5COzs7RUE4UUgsSUFBRyxNQUFBLEtBQVUsT0FBTyxDQUFDLElBQXJCO0lBQStCLE1BQVMsQ0FBQSxDQUFBLENBQUEsR0FBQTtBQUN4QyxVQUFBO01BQUUsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixLQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixJQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdELEVBRGhCOzs7OzthQU1FLG1CQUFBLENBQUE7SUFQc0MsQ0FBQSxJQUF4Qzs7QUE5UUciLCJzb3VyY2VzQ29udGVudCI6WyJcbiMjI1xuXG5cbiMjIEFwcGxpY2F0aW9uc1xuXG4qICoqUmVnRXggQnVpbGRlcioqIChleGFtcGxlIGZyb20gW1JlamlncyBibG9nIHBvc3RdKGh0dHBzOi8vbWVkaXVtLmNvbS9Ab21hcnphd2FocnkvcmVqaWdzLW1ha2luZy1yZWd1bGFyLWV4cHJlc3Npb25zLWh1bWFuLXJlYWRhYmxlLTFmYWQzN2NiM2VhZSkpXG5cbmBgYGphdmFcbnZhciBlbWFpbFJlZ2V4ID1cbiAgICBSZWppZ3MuQ3JlYXRlKClcbiAgICAgICAgICAuQXRTdGFydCgpXG4gICAgICAgICAgLk9uZU9yTW9yZShyID0+IHIuQW55TGV0dGVyT3JEaWdpdCgpLk9yKCkuQW55T2YoXCIuXyUrLVwiKSlcbiAgICAgICAgICAuVGV4dChcIkBcIilcbiAgICAgICAgICAuT25lT3JNb3JlKHIgPT4gci5BbnlMZXR0ZXJPckRpZ2l0KCkuT3IoKS5BbnlPZihcIi4tXCIpKVxuICAgICAgICAgIC5UZXh0KFwiLlwiKVxuICAgICAgICAgIC5BbnlMZXR0ZXJPckRpZ2l0KCkuQXRMZWFzdCgyKVxuICAgICAgICAgIC5BdEVuZCgpXG4gICAgICAgICAgLkJ1aWxkKCk7XG5gYGBcblxuKiAqKkhUTUwvWE1MIEJ1aWxlcioqXG4qICoqU1FMIEJ1aWxkZXIqKjogYFNRTC5pbnNlcnQuaW50by5lbXBsb3llZXMoJ2lkJywnbmFtZScpLnZhbHVlcyhpZCxuYW1lKWBcbiogKipDTEkgQ29sb3JpbmcqKlxuKiBzeW50YXggZm9yIGEgKipUeXBlIENoZWNrZXIqKlxuXG4jIyNcblxuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2RlbW8tcHJveHknXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbndyaXRlICAgICAgICAgICAgICAgICAgICAgPSAoIHAgKSAtPiBwcm9jZXNzLnN0ZG91dC53cml0ZSBwXG5DICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnYW5zaXMnXG57IG5mYSB9ICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZGVtb19pbnN0YW5jZV9mdW5jdGlvbl9hc19wcm94eSA9IC0+XG5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHsgRCwgfSA9IGRvIC0+XG4gICAgeyBjcmVhdGVfaW5maW55cHJveHksXG4gICAgICBzeXNfc3ltYm9sLCAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2luZmluaXByb3h5KClcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY2xhc3MgRFxuXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgY29uc3RydWN0b3I6ICggY2FsbGVlICkgLT5cbiAgICAgICAgQG90aGVyX3Byb3AgPSAnT1RIRVJfUFJPUCdcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mIGNhbGxlZSwgQFxuICAgICAgICBSID0gY3JlYXRlX2luZmlueXByb3h5IHsgY2FsbGVlLCBwcm92aWRlcjogQCwgfVxuICAgICAgICAjIC4uLlxuICAgICAgICByZXR1cm4gUlxuXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgbWV0aG9kX29mX2Q6ICggdmFsdWUgKSAtPlxuICAgICAgICB3aGlzcGVyICfOqV9fXzEnLCAnTUVUSE9EX09GX0QnXG4gICAgICAgIHdoaXNwZXIgJ86pX19fMicsICggayBmb3IgayBvZiBAWyBzeXNfc3ltYm9sIF0gKSAjIC5zdWJfbGV2ZWxfcHJveHlcbiAgICAgICAgQFsgc3lzX3N5bWJvbCBdLnN0YWNrLnB1c2ggJ2dlbmVyYXRlZCdcbiAgICAgICAgQFsgc3lzX3N5bWJvbCBdLnN0YWNrLnB1c2ggJ3N0dWZmJ1xuICAgICAgICBAWyBzeXNfc3ltYm9sIF0uc3RhY2sucHVzaCBcInZhbHVlOiN7cnByIHZhbHVlfVwiXG4gICAgICAgIHJldHVybiBAWyBzeXNfc3ltYm9sIF0uc3ViX2xldmVsX3Byb3h5XG5cbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBwcm9wZXJ0eV9vZl9kOiAnUFJPUEVSVFlfT0ZfRCdcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICByZXR1cm4gZXhwb3J0cyA9IHsgRCwgfVxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGRvID0+XG4gICAgbXlfZm5fMyA9ICggUC4uLiApIC0+XG4gICAgICB3aGlzcGVyICfOqV9fXzMnLCBAc3RhY2ssIEBzdGFjay5pc19lbXB0eSwgWyBAc3RhY2suLi4sIF1cbiAgICAgIGNoYWluICAgPSBbIEBzdGFjay4uLiwgXS5qb2luICcuJ1xuICAgICAgY29udGVudCA9ICggKCBycHIgcCApIGZvciBwIGluIFAgKVxuICAgICAgcmV0dXJuIFwiWyN7Y2hhaW59OiN7Y29udGVudH1dXCJcbiAgICBlY2hvICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gICAgaGVscCAnzqlfX180JywgcnByIGQgPSBuZXcgRCBteV9mbl8zXG4gICAgaGVscCAnzqlfX181JywgcmV2ZXJzZSBHVVkudHJtLnRydXRoICggZCBpbnN0YW5jZW9mIEQgKSAgICMgdHJ1ZVxuICAgIGhlbHAgJ86pX19fNicsIHJwciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgZFxuICAgIGhlbHAgJ86pX19fNycsIHJwciAoIHR5cGVvZiBPYmplY3QuZ2V0UHJvdG90eXBlT2YgZCApIGlzICggdHlwZW9mICggLT4gKSApXG4gICAgaGVscCAnzqlfX184JywgcnByIHR5cGVvZiBkXG4gICAgaGVscCAnzqlfX185JywgcnByIE9iamVjdDo6dG9TdHJpbmcuY2FsbCBkXG4gICAgaGVscCAnzqlfXzEwJywgcnByIGQgaW5zdGFuY2VvZiBGdW5jdGlvblxuICAgIGVjaG8gJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgICBpbmZvICfOqV9fMTEnLCBycHIgZC5vdGhlcl9wcm9wICAgICAjIE9USEVSX1BST1BcbiAgICBpbmZvICfOqV9fMTInLCBycHIgZC5tZXRob2Rfb2ZfZCgpICAjIE1FVEhPRF9PRl9EXG4gICAgaW5mbyAnzqlfXzEzJywgcnByIGQucHJvcGVydHlfb2ZfZCAgIyBQUk9QRVJUWV9PRl9EXG4gICAgaW5mbyAnzqlfXzE0JywgcnByIGQudW5rbm93bl9rZXkgICAgIyBzb21ldGhpbmcgZWxzZTogJ3Vua25vd25fa2V5J1xuICAgIGVjaG8gJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgICBpbmZvICfOqV9fMTUnLCBycHIgZCAxLCAyLCAnYydcbiAgICBpbmZvICfOqV9fMTYnLCBycHIgZC5yZWRcbiAgICBpbmZvICfOqV9fMTcnLCBycHIgZCAxLCAyLCAnYydcbiAgICBpbmZvICfOqV9fMTgnLCBycHIgZC5yZWQuYm9sZCAxLCAyLCAnYydcbiAgICBpbmZvICfOqV9fMTknLCBycHIgZC5yZWQuYm9sZC5tZXRob2Rfb2ZfZCgxMjMpLmhvbGEgJ2Z0dydcbiAgICBpbmZvICfOqV9fMjAnLCBycHIgZC5yZWQuYm9sZC5tZXRob2Rfb2ZfZCcxMjMnLmhvbGEgJ2Z0dydcbiAgcmV0dXJuIG51bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblNGTU9EVUxFUy5yZXF1aXJlX2Fuc2kgPSAtPlxuXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgQU5TSSA9IG5ldyBjbGFzcyBBbnNpXG4gICAgIyMjXG5cbiAgICAqIGFzIGZvciB0aGUgYmFja2dyb3VuZCAoJ2JnJyksIG9ubHkgY29sb3JzIGFuZCBubyBlZmZlY3RzIGNhbiBiZSBzZXQ7IGluIGFkZGl0aW9uLCB0aGUgYmcgY29sb3IgY2FuIGJlXG4gICAgICBzZXQgdG8gaXRzIGRlZmF1bHQgKG9yICd0cmFuc3BhcmVudCcpLCB3aGljaCB3aWxsIHNob3cgdGhlIHRlcm1pbmFsJ3Mgb3IgdGhlIHRlcm1pbmFsIGVtdWxhdG9yJ3NcbiAgICAgIGNvbmZpZ3VyZWQgYmcgY29sb3JcbiAgICAqIGFzIGZvciB0aGUgZm9yZWdyb3VuZCAoJ2ZnJyksIGNvbG9ycyBhbmQgZWZmZWN0cyBzdWNoIGFzIGJsaW5raW5nLCBib2xkLCBpdGFsaWMsIHVuZGVybGluZSwgb3ZlcmxpbmUsXG4gICAgICBzdHJpa2UgY2FuIGJlIHNldDsgaW4gYWRkaXRpb24sIHRoZSBjb25maWd1cmVkIHRlcm1pbmFsIGRlZmF1bHQgZm9udCBjb2xvciBjYW4gYmUgc2V0LCBhbmQgZWFjaCBlZmZlY3RcbiAgICAgIGhhcyBhIGRlZGljYXRlZCBvZmYtc3dpdGNoXG4gICAgKiBuZWF0IHRhYmxlcyBjYW4gYmUgZHJhd24gYnkgY29tYmluaW5nIHRoZSBvdmVybGluZSBlZmZlY3Qgd2l0aCBg4pSCYCBVKzI1MDIgJ0JveCBEcmF3aW5nIExpZ2h0IFZlcnRpY2FsXG4gICAgICBMaW5lJzsgdGhlIHJlbm1hcmthYmxlIGZlYXR1cmUgb2YgdGhpcyBpcyB0aGF0IGl0IG1pbmltaXplcyBzcGFjaW5nIGFyb3VuZCBjaGFyYWN0ZXJzIG1lYW5pbmcgaXQnc1xuICAgICAgcG9zc2libGUgdG8gaGF2ZSBhZGphY2VudCByb3dzIG9mIGNlbGxzIHNlcGFyYXRlZCBmcm9tIHRoZSBuZXh0IHJvdyBieSBhIGJvcmRlciB3aXRob3V0IGhhdmluZyB0b1xuICAgICAgc2FjcmlmaWNlIGEgbGluZSBvZiB0ZXh0IGp1c3QgdG8gZHJhdyB0aGUgYm9yZGVyLlxuICAgICogd2hpbGUgdGhlIHR3byBjb2xvciBwYWxhdHRlcyBpbXBsaWVkIGJ5IHRoZSBzdGFuZGFyZCBYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhcbiAgICAgICogYmV0dGVyIHRvIG9ubHkgdXNlIGZ1bGwgUkdCIHRoYW4gdG8gZnV6eiBhcm91bmQgd2l0aCBwYWxldHRlc1xuICAgICAgKiBhcHBzIHRoYXQgdXNlIGNvbG9ycyBhdCBhbGwgc2hvdWxkIGJlIHByZXBhcmVkIGZvciBkYXJrIGFuZCBicmlnaHQgYmFja2dyb3VuZHNcbiAgICAgICogaW4gZ2VuZXJhbCBiZXR0ZXIgdG8gc2V0IGZnLCBiZyBjb2xvcnMgdGhhbiB0byB1c2UgcmV2ZXJzZVxuICAgICAgKiBidXQgcmV2ZXJzZSBhY3R1YWxseSBkb2VzIGRvIHdoYXQgaXQgc2F5c+KAlGl0IHN3YXBzIGZnIHdpdGggYmcgY29sb3JcblxuICAgIFxceDFiWzM5bSBkZWZhdWx0IGZnIGNvbG9yXG4gICAgXFx4MWJbNDltIGRlZmF1bHQgYmcgY29sb3JcblxuICAgICMjI1xuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZmdfY29sb3JfY29kZV9mcm9tX3JnYl9kZWM6IChbIHIsIGcsIGIsIF0pIC0+IFwiXFx4MWJbMzg6Mjo6I3tyfToje2d9OiN7Yn1tXCJcbiAgICBiZ19jb2xvcl9jb2RlX2Zyb21fcmdiX2RlYzogKFsgciwgZywgYiwgXSkgLT4gXCJcXHgxYls0ODoyOjoje3J9OiN7Z306I3tifW1cIlxuICAgIGZnX2NvbG9yX2NvZGVfZnJvbV9oZXg6ICAgICAoIGhleCAgICAgICAgKSAtPiBAZmdfY29sb3JfY29kZV9mcm9tX3JnYl9kZWMgQHJnYl9mcm9tX2hleCBoZXhcbiAgICBiZ19jb2xvcl9jb2RlX2Zyb21faGV4OiAgICAgKCBoZXggICAgICAgICkgLT4gQGJnX2NvbG9yX2NvZGVfZnJvbV9yZ2JfZGVjIEByZ2JfZnJvbV9oZXggaGV4XG4gICAgZmdfY29sb3JfY29kZV9mcm9tX2NvbG9yX25hbWU6ICggbmFtZSApIC0+XG4gICAgICByZ2IgPSBAY29sb3JzWyBuYW1lIF0gPyBAY29sb3JzLmZhbGxiYWNrXG4gICAgICByZXR1cm4gQGZnX2NvbG9yX2NvZGVfZnJvbV9yZ2JfZGVjIHJnYlxuICAgIHJnYl9mcm9tX2hleDogKCBoZXggKSAtPlxuICAgICAgIyMjIFRBSU5UIHVzZSBwcm9wZXIgdHlwaW5nICMjI1xuICAgICAgdGhyb3cgbmV3IEVycm9yIFwizqlfXzI1IGV4cGVjdGVkIHRleHQsIGdvdCAje3JwciBoZXh9XCIgdW5sZXNzICggdHlwZW9mIGhleCApIGlzICdzdHJpbmcnXG4gICAgICB0aHJvdyBuZXcgRXJyb3IgXCLOqV9fMjUgZXhwZWN0ZWQgJyMnLCBnb3QgI3tycHIgaGV4fVwiIHVubGVzcyBoZXguc3RhcnRzV2l0aCAnIydcbiAgICAgIHRocm93IG5ldyBFcnJvciBcIs6pX18yNSBleHBlY3RlZCB0ZXh0IG9mIGxlbmd0aCA3LCBnb3QgI3tycHIgaGV4fVwiIHVubGVzcyBoZXgubGVuZ3RoIGlzIDdcbiAgICAgIFsgcjE2LCBnMTYsIGIxNiwgXSA9IFsgaGV4WyAxIC4uIDIgXSwgaGV4WyAzIC4uIDQgXSwgaGV4WyA1IC4uIDYgXSwgXVxuICAgICAgcmV0dXJuIFsgKCBwYXJzZUludCByMTYsIDE2ICksICggcGFyc2VJbnQgZzE2LCAxNiApLCAoIHBhcnNlSW50IGIxNiwgMTYgKSwgXVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmV0dXJuIGV4cG9ydHMgPSB7IEFOU0ksIH1cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5kZW1vX2NvbG9yZnVsX3Byb3h5ID0gLT5cbiAgY2xhc3MgVE1QX2Vycm9yIGV4dGVuZHMgRXJyb3JcbiAgeyBjcmVhdGVfaW5maW55cHJveHksXG4gICAgc3lzX3N5bWJvbCwgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9pbmZpbmlwcm94eSgpXG4gIHsgQU5TSSwgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9hbnNpKClcbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29sb3JzX2Fuc2kgPSBudWxsXG4gIGNvbG9ycyA9XG4gICAgIyMjIHRoeCB0bzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSGVscDpEaXN0aW5ndWlzaGFibGVfY29sb3JzICMjI1xuICAgICMjIyB0aHggdG86IGh0dHBzOi8vZ3JhcGhpY2Rlc2lnbi5zdGFja2V4Y2hhbmdlLmNvbS9xdWVzdGlvbnMvMzY4Mi93aGVyZS1jYW4taS1maW5kLWEtbGFyZ2UtcGFsZXR0ZS1zZXQtb2YtY29udHJhc3RpbmctY29sb3JzLWZvci1jb2xvcmluZy1tYW55LWQgIyMjXG4gICAgYmxhY2s6ICAgICAgICAgICAgJyMwMDAwMDAnXG4gICAgd2hpdGU6ICAgICAgICAgICAgJyNmZmZmZmYnXG4gICAgYW1ldGh5c3Q6ICAgICAgICAgJyNmMGEzZmYnXG4gICAgYmx1ZTogICAgICAgICAgICAgJyMwMDc1ZGMnXG4gICAgY2FyYW1lbDogICAgICAgICAgJyM5OTNmMDAnXG4gICAgZGFtc29uOiAgICAgICAgICAgJyM0YzAwNWMnXG4gICAgZWJvbnk6ICAgICAgICAgICAgJyMxOTE5MTknXG4gICAgZm9yZXN0OiAgICAgICAgICAgJyMwMDVjMzEnXG4gICAgZ3JlZW46ICAgICAgICAgICAgJyMyYmNlNDgnXG4gICAgbGltZTogICAgICAgICAgICAgJyM5ZGNjMDAnXG4gICAgcXVhZ21pcmU6ICAgICAgICAgJyM0MjY2MDAnXG4gICAgaG9uZXlkZXc6ICAgICAgICAgJyNmZmNjOTknXG4gICAgaXJvbjogICAgICAgICAgICAgJyM4MDgwODAnXG4gICAgamFkZTogICAgICAgICAgICAgJyM5NGZmYjUnXG4gICAga2hha2k6ICAgICAgICAgICAgJyM4ZjdjMDAnXG4gICAgbWFsbG93OiAgICAgICAgICAgJyNjMjAwODgnXG4gICAgbmF2eTogICAgICAgICAgICAgJyMwMDMzODAnXG4gICAgb3JwaW1lbnQ6ICAgICAgICAgJyNmZmE0MDUnXG4gICAgcGluazogICAgICAgICAgICAgJyNmZmE4YmInXG4gICAgcmVkOiAgICAgICAgICAgICAgJyNmZjAwMTAnXG4gICAgc2t5OiAgICAgICAgICAgICAgJyM1ZWYxZjInXG4gICAgdHVycXVvaXNlOiAgICAgICAgJyMwMDk5OGYnXG4gICAgdmlvbGV0OiAgICAgICAgICAgJyM3NDBhZmYnXG4gICAgd2luZTogICAgICAgICAgICAgJyM5OTAwMDAnXG4gICAgdXJhbml1bTogICAgICAgICAgJyNlMGZmNjYnXG4gICAgeGFudGhpbjogICAgICAgICAgJyNmZmZmODAnXG4gICAgeWVsbG93OiAgICAgICAgICAgJyNmZmUxMDAnXG4gICAgemlubmlhOiAgICAgICAgICAgJyNmZjUwMDUnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZmFsbGJhY2s6ICAgICAgICAgWyAyNTUsICAyMCwgMTQ3LCBdXG5cbiAgZm9yIG5hbWUsIGNvZGUgb2YgY29sb3JzXG4gICAgc3dpdGNoIHRydWVcbiAgICAgIHdoZW4gKCB0eXBlb2YgY29kZSApIGlzICdzdHJpbmcnXG4gICAgICAgIHJnYiA9IEFOU0kucmdiX2Zyb21faGV4IGNvZGVcbiAgICAgIHdoZW4gQXJyYXkuaXNBcnJheSBjb2RlXG4gICAgICAgIHJnYiA9IGNvZGVcbiAgICAgIGVsc2UgdGhyb3cgbmV3IEVycm9yIFwizqlfXzI1IGZvcm1hdCBlcnJvcjogI3tycHIgY29kZX1cIlxuICAgIGZnX2NvZGVfc3RhcnQgPSBBTlNJLmZnX2NvbG9yX2NvZGVfZnJvbV9yZ2JfZGVjIHJnYlxuICAgIGJnX2NvZGVfc3RhcnQgPSBBTlNJLmJnX2NvbG9yX2NvZGVfZnJvbV9yZ2JfZGVjIHJnYlxuICAgIGlmIG5hbWUgaXMgJ2JsYWNrJ1xuICAgICAgZmdfYmxhY2sgPSBmZ19jb2RlX3N0YXJ0XG4gICAgZWNobyAnzqlfXzEwJywgZlwiYWJj4paEI3tmZ19jb2RlX3N0YXJ0fSBERUbiloQgXFx4MWJbMG14eXriloQgI3tmZ19ibGFja30je2JnX2NvZGVfc3RhcnR9IERFRuKWhCBcXHgxYlswbXh5euKWhCDigJTigJQgI3tuYW1lfTo8MjBjOyDigJTigJRcIlxuXG4gIGNvbG9yX3pvbmVzID0gKCByZXF1aXJlICcuL2NvbG9yLXpvbmVzJyApLmNvbG9yX3pvbmVzXG4gIGZneiAgICAgICAgID0gJ1xceDFiWzM5bSdcbiAgYmd6ICAgICAgICAgPSAnXFx4MWJbNDltJ1xuICBmb3Igem9uZV9uYW1lXzEsIHpvbmVfY29sb3JzXzEgb2YgY29sb3Jfem9uZXNcbiAgICBlY2hvKClcbiAgICBmb3IgY29sb3JfbmFtZV8xLCBoZXhfMSBvZiB6b25lX2NvbG9yc18xXG4gICAgICBSICAgICA9IGZcIiN7em9uZV9uYW1lXzF9Ojw2YzsgI3tjb2xvcl9uYW1lXzF9OjwxMGM7ICN7aGV4XzF9IFwiXG4gICAgICBmZ2ExICA9IEFOU0kuZmdfY29sb3JfY29kZV9mcm9tX2hleCBoZXhfMVxuICAgICAgZm9yIHpvbmVfbmFtZV8yLCB6b25lX2NvbG9yc18yIG9mIGNvbG9yX3pvbmVzXG4gICAgICAgIFIgKz0gJyAnXG4gICAgICAgIGZvciBjb2xvcl9uYW1lXzIsIGhleF8yIG9mIHpvbmVfY29sb3JzXzJcbiAgICAgICAgICBiZ2EyICA9IEFOU0kuYmdfY29sb3JfY29kZV9mcm9tX2hleCBoZXhfMlxuICAgICAgICAgIFIgICAgKz0gXCIje2ZnYTF9I3tiZ2EyfSBXICN7Zmd6fSN7Ymd6fVwiXG4gICAgICBlY2hvIFJcbiAgICAgICMgZWNobyBycHIgUlxuXG4gIGZnYSAgICAgICA9ICdcXHgxQlszODoyOjozNzo1NDoxMThtJ1xuICBiZ2EgICAgICAgPSAnXFx4MUJbNDg6Mjo6MjU1OjI1NToyNTVtJ1xuICBvdmVybGluZWEgPSAnXFx4MWJbNTNtJ1xuICBvdmVybGluZXogPSAnXFx4MWJbNTVtJ1xuICBibGlua2EgICAgPSAnXFx4MWJbNW0nXG4gIGJsaW5reiAgICA9ICdcXHgxYlsyNW0nXG4gIHJlZCAgICAgICA9ICdcXHgxQlszODoyOjoyMDc6MzI6MzltJ1xuICBiZ3JlZCAgICAgPSAnXFx4MUJbNDg6Mjo6MjA3OjMyOjM5bSdcbiAgZWNobyBcImFiYyAje2ZnYX0je2JnYX0je292ZXJsaW5lYX0gREVG4pSCZ2p54pSCMTIzNCAje292ZXJsaW5len0je2Znen0je2Jnen0geHl6XCJcbiAgZWNobyBcImFiYyAje2ZnYX0je2JnYX0je292ZXJsaW5lYX0gREVGI3tiZ3JlZH3ilIJnannilIIje2JnYX0xMjM0ICN7b3ZlcmxpbmV6fSN7Zmd6fSN7Ymd6fSB4eXpcIlxuICBlY2hvIFwiYWJjICN7ZmdhfSN7YmdhfSN7b3ZlcmxpbmVhfSBERUbilIJnannilIIje3JlZH0xMjM0I3tmZ2F9ICN7b3ZlcmxpbmV6fSN7Zmd6fSN7Ymd6fSB4eXpcIlxuICBlY2hvIFwiYWJjICN7ZmdhfSN7YmdhfSN7b3ZlcmxpbmVhfSBERUbilIIje2JsaW5rYX1nankje2JsaW5ren3ilIIxMjM0ICN7b3ZlcmxpbmV6fSN7Zmd6fSN7Ymd6fSB4eXpcIlxuICBlY2hvIFwiYWJjICN7ZmdhfSN7YmdhfSN7b3ZlcmxpbmVhfSBERUbilIJnannilIIxMjM0ICN7b3ZlcmxpbmV6fSN7Zmd6fSN7Ymd6fSB4eXpcIlxuICBlY2hvKClcbiAgZWNobyBcIlxceDFCWzM5bVxceDFCWzQ5bVxceDFCWzM4OjI6OjM3OjU0OjExOG1cXHgxQls0ODoyOjoyMDc6MzI6MzltIGFiYyBcXHgxYls3bSBhYmMgXFx4MWJbMG1cIlxuICBlY2hvKClcblxuICByZXR1cm4gbnVsbFxuXG5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBjbGFzcyBDb2xvcml6ZXJcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgQGNvbG9yaXplOiAoIFAuLi4gKSAtPlxuICAgICAgIyB3aGlzcGVyICfOqV9fMjEnLCBcImNvbG9yaXplKCkgY29udGV4dCBrZXlzOiAgI3tycHIgKCBrIGZvciBrIG9mIEAgKX1cIlxuICAgICAgIyB3aGlzcGVyICfOqV9fMjInLCBcImNvbG9yaXplKCkgYXJndW1lbnRzOiAgICAgI3tycHIgUH1cIlxuICAgICAgd2hpc3BlciAnzqlfXzIzJywgXCJjb2xvcml6ZSgpIHN0YWNrOiAgICAgICAgICN7cnByIFsgQHN0YWNrLi4uLCBdfVwiXG4gICAgICBmb3IgbmFtZSBmcm9tIEBzdGFja1xuICAgICAgICBhbnNpID0gQU5TSS5mZ19jb2xvcl9jb2RlX2Zyb21fY29sb3JfbmFtZSBuYW1lXG4gICAgICAgICMgZGVidWcgJ86pX18xMCcsICggcnByIG5hbWUgKSwgKCBycHIgYW5zaSApXG4gICAgICAgIGVjaG8gJ86pX18xMCcsIGZcImFiY+KWhCN7YW5zaX0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCAje25hbWV9OjwyMGM7IOKAlOKAlFwiXG4gICAgICByZXR1cm4gXCIqKioqKioqKioqKioqKioqKioqXCJcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgY29uc3RydWN0b3I6IC0+XG4gICAgICBAb3RoZXJfcHJvcCA9ICdPVEhFUl9QUk9QJ1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mIEBjb25zdHJ1Y3Rvci5jb2xvcml6ZSwgQFxuICAgICAgUiA9IGNyZWF0ZV9pbmZpbnlwcm94eSB7IGNhbGxlZTogQGNvbnN0cnVjdG9yLmNvbG9yaXplLCBwcm92aWRlcjogQCwgfVxuICAgICAgcmV0dXJuIFJcblxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGMgPSBuZXcgQ29sb3JpemVyKClcbiAgaW5mbyAnzqlfXzI0JywgY1xuICBpbmZvICfOqV9fMjUnLCBjLmdyZWVuLmJvbGQuaW52ZXJzZSBcIiBob2x5IG1vbHkgXCJcbiAgaW5mbyAnzqlfXzI1JywgYy5zbGF0ZWdyYXkgXCIgaG9seSBtb2x5IFwiXG4gIGluZm8gJ86pX18yNScsIGMuZGFya3NsYXRlZ3JheSBcIiBob2x5IG1vbHkgXCJcbiAgaW5mbyAnzqlfXzI1JywgYy5kYXJra2hha2kgXCIgaG9seSBtb2x5IFwiXG4gIGluZm8gJ86pX18yNScsIGMuZ29sZCBcIiBob2x5IG1vbHkgXCJcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICByZXR1cm4gbnVsbFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBkZW1vX3Byb3h5X2FzX2h0bWxfcHJvZHVjZXIsIH1cbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAjIGRlbW9faW5maW5pdGVfcHJveHkoKVxuICAjIGRlbW9faW5zdGFuY2VfZnVuY3Rpb25fYXNfcHJveHkoKVxuICBkZW1vX2NvbG9yZnVsX3Byb3h5KClcblxuXG4iXX0=
