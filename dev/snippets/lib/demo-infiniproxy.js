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

  SFMODULES = require('../../../apps/bricabrac-single-file-modules');

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8taW5maW5pcHJveHkuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCRztFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBR0g7QUFIRyxNQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLG1CQUFBLEVBQUEsK0JBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUEsRUFBQSxLQUFBOzs7RUFNSCxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLFlBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsSUFKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsR0FQRixFQVFFLElBUkYsRUFTRSxPQVRGLEVBVUUsR0FWRixDQUFBLEdBVTRCLEdBQUcsQ0FBQyxHQVZoQzs7RUFXQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1Qjs7RUFDQSxLQUFBLEdBQTRCLFFBQUEsQ0FBRSxDQUFGLENBQUE7V0FBUyxPQUFPLENBQUMsTUFB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Q0EsSUFBQSxDQUFLLE9BQUwsRUFBYyxDQUFDLENBQUMsU0FBRixDQUFZLGFBQVosQ0FBZDtJQUNBLElBQUEsQ0FBSyxPQUFMLEVBQWMsQ0FBQyxDQUFDLElBQUYsQ0FBTyxhQUFQLENBQWQsRUFySEY7O0FBdUhFLFdBQU87RUF4SGEsRUFsSm5COzs7RUE4UUgsSUFBRyxNQUFBLEtBQVUsT0FBTyxDQUFDLElBQXJCO0lBQStCLE1BQVMsQ0FBQSxDQUFBLENBQUEsR0FBQTtBQUN4QyxVQUFBO01BQUUsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixLQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixJQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdELEVBRGhCOzs7OzthQU1FLG1CQUFBLENBQUE7SUFQc0MsQ0FBQSxJQUF4Qzs7QUE5UUciLCJzb3VyY2VzQ29udGVudCI6WyJcbiMjI1xuXG5cbiMjIEFwcGxpY2F0aW9uc1xuXG4qICoqUmVnRXggQnVpbGRlcioqIChleGFtcGxlIGZyb20gW1JlamlncyBibG9nIHBvc3RdKGh0dHBzOi8vbWVkaXVtLmNvbS9Ab21hcnphd2FocnkvcmVqaWdzLW1ha2luZy1yZWd1bGFyLWV4cHJlc3Npb25zLWh1bWFuLXJlYWRhYmxlLTFmYWQzN2NiM2VhZSkpXG5cbmBgYGphdmFcbnZhciBlbWFpbFJlZ2V4ID1cbiAgICBSZWppZ3MuQ3JlYXRlKClcbiAgICAgICAgICAuQXRTdGFydCgpXG4gICAgICAgICAgLk9uZU9yTW9yZShyID0+IHIuQW55TGV0dGVyT3JEaWdpdCgpLk9yKCkuQW55T2YoXCIuXyUrLVwiKSlcbiAgICAgICAgICAuVGV4dChcIkBcIilcbiAgICAgICAgICAuT25lT3JNb3JlKHIgPT4gci5BbnlMZXR0ZXJPckRpZ2l0KCkuT3IoKS5BbnlPZihcIi4tXCIpKVxuICAgICAgICAgIC5UZXh0KFwiLlwiKVxuICAgICAgICAgIC5BbnlMZXR0ZXJPckRpZ2l0KCkuQXRMZWFzdCgyKVxuICAgICAgICAgIC5BdEVuZCgpXG4gICAgICAgICAgLkJ1aWxkKCk7XG5gYGBcblxuKiAqKkhUTUwvWE1MIEJ1aWxlcioqXG4qICoqU1FMIEJ1aWxkZXIqKjogYFNRTC5pbnNlcnQuaW50by5lbXBsb3llZXMoJ2lkJywnbmFtZScpLnZhbHVlcyhpZCxuYW1lKWBcbiogKipDTEkgQ29sb3JpbmcqKlxuKiBzeW50YXggZm9yIGEgKipUeXBlIENoZWNrZXIqKlxuXG4jIyNcblxuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2RlbW8tcHJveHknXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbndyaXRlICAgICAgICAgICAgICAgICAgICAgPSAoIHAgKSAtPiBwcm9jZXNzLnN0ZG91dC53cml0ZSBwXG5DICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnYW5zaXMnXG57IG5mYSB9ICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNpbmdsZS1maWxlLW1vZHVsZXMnXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmRlbW9faW5zdGFuY2VfZnVuY3Rpb25fYXNfcHJveHkgPSAtPlxuXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICB7IEQsIH0gPSBkbyAtPlxuICAgIHsgY3JlYXRlX2luZmlueXByb3h5LFxuICAgICAgc3lzX3N5bWJvbCwgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9pbmZpbmlwcm94eSgpXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNsYXNzIERcblxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIGNvbnN0cnVjdG9yOiAoIGNhbGxlZSApIC0+XG4gICAgICAgIEBvdGhlcl9wcm9wID0gJ09USEVSX1BST1AnXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZiBjYWxsZWUsIEBcbiAgICAgICAgUiA9IGNyZWF0ZV9pbmZpbnlwcm94eSB7IGNhbGxlZSwgcHJvdmlkZXI6IEAsIH1cbiAgICAgICAgIyAuLi5cbiAgICAgICAgcmV0dXJuIFJcblxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIG1ldGhvZF9vZl9kOiAoIHZhbHVlICkgLT5cbiAgICAgICAgd2hpc3BlciAnzqlfX18xJywgJ01FVEhPRF9PRl9EJ1xuICAgICAgICB3aGlzcGVyICfOqV9fXzInLCAoIGsgZm9yIGsgb2YgQFsgc3lzX3N5bWJvbCBdICkgIyAuc3ViX2xldmVsX3Byb3h5XG4gICAgICAgIEBbIHN5c19zeW1ib2wgXS5zdGFjay5wdXNoICdnZW5lcmF0ZWQnXG4gICAgICAgIEBbIHN5c19zeW1ib2wgXS5zdGFjay5wdXNoICdzdHVmZidcbiAgICAgICAgQFsgc3lzX3N5bWJvbCBdLnN0YWNrLnB1c2ggXCJ2YWx1ZToje3JwciB2YWx1ZX1cIlxuICAgICAgICByZXR1cm4gQFsgc3lzX3N5bWJvbCBdLnN1Yl9sZXZlbF9wcm94eVxuXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgcHJvcGVydHlfb2ZfZDogJ1BST1BFUlRZX09GX0QnXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgcmV0dXJuIGV4cG9ydHMgPSB7IEQsIH1cbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBkbyA9PlxuICAgIG15X2ZuXzMgPSAoIFAuLi4gKSAtPlxuICAgICAgd2hpc3BlciAnzqlfX18zJywgQHN0YWNrLCBAc3RhY2suaXNfZW1wdHksIFsgQHN0YWNrLi4uLCBdXG4gICAgICBjaGFpbiAgID0gWyBAc3RhY2suLi4sIF0uam9pbiAnLidcbiAgICAgIGNvbnRlbnQgPSAoICggcnByIHAgKSBmb3IgcCBpbiBQIClcbiAgICAgIHJldHVybiBcIlsje2NoYWlufToje2NvbnRlbnR9XVwiXG4gICAgZWNobyAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUJ1xuICAgIGhlbHAgJ86pX19fNCcsIHJwciBkID0gbmV3IEQgbXlfZm5fM1xuICAgIGhlbHAgJ86pX19fNScsIHJldmVyc2UgR1VZLnRybS50cnV0aCAoIGQgaW5zdGFuY2VvZiBEICkgICAjIHRydWVcbiAgICBoZWxwICfOqV9fXzYnLCBycHIgT2JqZWN0LmdldFByb3RvdHlwZU9mIGRcbiAgICBoZWxwICfOqV9fXzcnLCBycHIgKCB0eXBlb2YgT2JqZWN0LmdldFByb3RvdHlwZU9mIGQgKSBpcyAoIHR5cGVvZiAoIC0+ICkgKVxuICAgIGhlbHAgJ86pX19fOCcsIHJwciB0eXBlb2YgZFxuICAgIGhlbHAgJ86pX19fOScsIHJwciBPYmplY3Q6OnRvU3RyaW5nLmNhbGwgZFxuICAgIGhlbHAgJ86pX18xMCcsIHJwciBkIGluc3RhbmNlb2YgRnVuY3Rpb25cbiAgICBlY2hvICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gICAgaW5mbyAnzqlfXzExJywgcnByIGQub3RoZXJfcHJvcCAgICAgIyBPVEhFUl9QUk9QXG4gICAgaW5mbyAnzqlfXzEyJywgcnByIGQubWV0aG9kX29mX2QoKSAgIyBNRVRIT0RfT0ZfRFxuICAgIGluZm8gJ86pX18xMycsIHJwciBkLnByb3BlcnR5X29mX2QgICMgUFJPUEVSVFlfT0ZfRFxuICAgIGluZm8gJ86pX18xNCcsIHJwciBkLnVua25vd25fa2V5ICAgICMgc29tZXRoaW5nIGVsc2U6ICd1bmtub3duX2tleSdcbiAgICBlY2hvICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gICAgaW5mbyAnzqlfXzE1JywgcnByIGQgMSwgMiwgJ2MnXG4gICAgaW5mbyAnzqlfXzE2JywgcnByIGQucmVkXG4gICAgaW5mbyAnzqlfXzE3JywgcnByIGQgMSwgMiwgJ2MnXG4gICAgaW5mbyAnzqlfXzE4JywgcnByIGQucmVkLmJvbGQgMSwgMiwgJ2MnXG4gICAgaW5mbyAnzqlfXzE5JywgcnByIGQucmVkLmJvbGQubWV0aG9kX29mX2QoMTIzKS5ob2xhICdmdHcnXG4gICAgaW5mbyAnzqlfXzIwJywgcnByIGQucmVkLmJvbGQubWV0aG9kX29mX2QnMTIzJy5ob2xhICdmdHcnXG4gIHJldHVybiBudWxsXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5TRk1PRFVMRVMucmVxdWlyZV9hbnNpID0gLT5cblxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIEFOU0kgPSBuZXcgY2xhc3MgQW5zaVxuICAgICMjI1xuXG4gICAgKiBhcyBmb3IgdGhlIGJhY2tncm91bmQgKCdiZycpLCBvbmx5IGNvbG9ycyBhbmQgbm8gZWZmZWN0cyBjYW4gYmUgc2V0OyBpbiBhZGRpdGlvbiwgdGhlIGJnIGNvbG9yIGNhbiBiZVxuICAgICAgc2V0IHRvIGl0cyBkZWZhdWx0IChvciAndHJhbnNwYXJlbnQnKSwgd2hpY2ggd2lsbCBzaG93IHRoZSB0ZXJtaW5hbCdzIG9yIHRoZSB0ZXJtaW5hbCBlbXVsYXRvcidzXG4gICAgICBjb25maWd1cmVkIGJnIGNvbG9yXG4gICAgKiBhcyBmb3IgdGhlIGZvcmVncm91bmQgKCdmZycpLCBjb2xvcnMgYW5kIGVmZmVjdHMgc3VjaCBhcyBibGlua2luZywgYm9sZCwgaXRhbGljLCB1bmRlcmxpbmUsIG92ZXJsaW5lLFxuICAgICAgc3RyaWtlIGNhbiBiZSBzZXQ7IGluIGFkZGl0aW9uLCB0aGUgY29uZmlndXJlZCB0ZXJtaW5hbCBkZWZhdWx0IGZvbnQgY29sb3IgY2FuIGJlIHNldCwgYW5kIGVhY2ggZWZmZWN0XG4gICAgICBoYXMgYSBkZWRpY2F0ZWQgb2ZmLXN3aXRjaFxuICAgICogbmVhdCB0YWJsZXMgY2FuIGJlIGRyYXduIGJ5IGNvbWJpbmluZyB0aGUgb3ZlcmxpbmUgZWZmZWN0IHdpdGggYOKUgmAgVSsyNTAyICdCb3ggRHJhd2luZyBMaWdodCBWZXJ0aWNhbFxuICAgICAgTGluZSc7IHRoZSByZW5tYXJrYWJsZSBmZWF0dXJlIG9mIHRoaXMgaXMgdGhhdCBpdCBtaW5pbWl6ZXMgc3BhY2luZyBhcm91bmQgY2hhcmFjdGVycyBtZWFuaW5nIGl0J3NcbiAgICAgIHBvc3NpYmxlIHRvIGhhdmUgYWRqYWNlbnQgcm93cyBvZiBjZWxscyBzZXBhcmF0ZWQgZnJvbSB0aGUgbmV4dCByb3cgYnkgYSBib3JkZXIgd2l0aG91dCBoYXZpbmcgdG9cbiAgICAgIHNhY3JpZmljZSBhIGxpbmUgb2YgdGV4dCBqdXN0IHRvIGRyYXcgdGhlIGJvcmRlci5cbiAgICAqIHdoaWxlIHRoZSB0d28gY29sb3IgcGFsYXR0ZXMgaW1wbGllZCBieSB0aGUgc3RhbmRhcmQgWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYXG4gICAgICAqIGJldHRlciB0byBvbmx5IHVzZSBmdWxsIFJHQiB0aGFuIHRvIGZ1enogYXJvdW5kIHdpdGggcGFsZXR0ZXNcbiAgICAgICogYXBwcyB0aGF0IHVzZSBjb2xvcnMgYXQgYWxsIHNob3VsZCBiZSBwcmVwYXJlZCBmb3IgZGFyayBhbmQgYnJpZ2h0IGJhY2tncm91bmRzXG4gICAgICAqIGluIGdlbmVyYWwgYmV0dGVyIHRvIHNldCBmZywgYmcgY29sb3JzIHRoYW4gdG8gdXNlIHJldmVyc2VcbiAgICAgICogYnV0IHJldmVyc2UgYWN0dWFsbHkgZG9lcyBkbyB3aGF0IGl0IHNheXPigJRpdCBzd2FwcyBmZyB3aXRoIGJnIGNvbG9yXG5cbiAgICBcXHgxYlszOW0gZGVmYXVsdCBmZyBjb2xvclxuICAgIFxceDFiWzQ5bSBkZWZhdWx0IGJnIGNvbG9yXG5cbiAgICAjIyNcbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGZnX2NvbG9yX2NvZGVfZnJvbV9yZ2JfZGVjOiAoWyByLCBnLCBiLCBdKSAtPiBcIlxceDFiWzM4OjI6OiN7cn06I3tnfToje2J9bVwiXG4gICAgYmdfY29sb3JfY29kZV9mcm9tX3JnYl9kZWM6IChbIHIsIGcsIGIsIF0pIC0+IFwiXFx4MWJbNDg6Mjo6I3tyfToje2d9OiN7Yn1tXCJcbiAgICBmZ19jb2xvcl9jb2RlX2Zyb21faGV4OiAgICAgKCBoZXggICAgICAgICkgLT4gQGZnX2NvbG9yX2NvZGVfZnJvbV9yZ2JfZGVjIEByZ2JfZnJvbV9oZXggaGV4XG4gICAgYmdfY29sb3JfY29kZV9mcm9tX2hleDogICAgICggaGV4ICAgICAgICApIC0+IEBiZ19jb2xvcl9jb2RlX2Zyb21fcmdiX2RlYyBAcmdiX2Zyb21faGV4IGhleFxuICAgIGZnX2NvbG9yX2NvZGVfZnJvbV9jb2xvcl9uYW1lOiAoIG5hbWUgKSAtPlxuICAgICAgcmdiID0gQGNvbG9yc1sgbmFtZSBdID8gQGNvbG9ycy5mYWxsYmFja1xuICAgICAgcmV0dXJuIEBmZ19jb2xvcl9jb2RlX2Zyb21fcmdiX2RlYyByZ2JcbiAgICByZ2JfZnJvbV9oZXg6ICggaGV4ICkgLT5cbiAgICAgICMjIyBUQUlOVCB1c2UgcHJvcGVyIHR5cGluZyAjIyNcbiAgICAgIHRocm93IG5ldyBFcnJvciBcIs6pX18yNSBleHBlY3RlZCB0ZXh0LCBnb3QgI3tycHIgaGV4fVwiIHVubGVzcyAoIHR5cGVvZiBoZXggKSBpcyAnc3RyaW5nJ1xuICAgICAgdGhyb3cgbmV3IEVycm9yIFwizqlfXzI1IGV4cGVjdGVkICcjJywgZ290ICN7cnByIGhleH1cIiB1bmxlc3MgaGV4LnN0YXJ0c1dpdGggJyMnXG4gICAgICB0aHJvdyBuZXcgRXJyb3IgXCLOqV9fMjUgZXhwZWN0ZWQgdGV4dCBvZiBsZW5ndGggNywgZ290ICN7cnByIGhleH1cIiB1bmxlc3MgaGV4Lmxlbmd0aCBpcyA3XG4gICAgICBbIHIxNiwgZzE2LCBiMTYsIF0gPSBbIGhleFsgMSAuLiAyIF0sIGhleFsgMyAuLiA0IF0sIGhleFsgNSAuLiA2IF0sIF1cbiAgICAgIHJldHVybiBbICggcGFyc2VJbnQgcjE2LCAxNiApLCAoIHBhcnNlSW50IGcxNiwgMTYgKSwgKCBwYXJzZUludCBiMTYsIDE2ICksIF1cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJldHVybiBleHBvcnRzID0geyBBTlNJLCB9XG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZGVtb19jb2xvcmZ1bF9wcm94eSA9IC0+XG4gIGNsYXNzIFRNUF9lcnJvciBleHRlbmRzIEVycm9yXG4gIHsgY3JlYXRlX2luZmlueXByb3h5LFxuICAgIHN5c19zeW1ib2wsICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfaW5maW5pcHJveHkoKVxuICB7IEFOU0ksICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfYW5zaSgpXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbG9yc19hbnNpID0gbnVsbFxuICBjb2xvcnMgPVxuICAgICMjIyB0aHggdG86IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0hlbHA6RGlzdGluZ3Vpc2hhYmxlX2NvbG9ycyAjIyNcbiAgICAjIyMgdGh4IHRvOiBodHRwczovL2dyYXBoaWNkZXNpZ24uc3RhY2tleGNoYW5nZS5jb20vcXVlc3Rpb25zLzM2ODIvd2hlcmUtY2FuLWktZmluZC1hLWxhcmdlLXBhbGV0dGUtc2V0LW9mLWNvbnRyYXN0aW5nLWNvbG9ycy1mb3ItY29sb3JpbmctbWFueS1kICMjI1xuICAgIGJsYWNrOiAgICAgICAgICAgICcjMDAwMDAwJ1xuICAgIHdoaXRlOiAgICAgICAgICAgICcjZmZmZmZmJ1xuICAgIGFtZXRoeXN0OiAgICAgICAgICcjZjBhM2ZmJ1xuICAgIGJsdWU6ICAgICAgICAgICAgICcjMDA3NWRjJ1xuICAgIGNhcmFtZWw6ICAgICAgICAgICcjOTkzZjAwJ1xuICAgIGRhbXNvbjogICAgICAgICAgICcjNGMwMDVjJ1xuICAgIGVib255OiAgICAgICAgICAgICcjMTkxOTE5J1xuICAgIGZvcmVzdDogICAgICAgICAgICcjMDA1YzMxJ1xuICAgIGdyZWVuOiAgICAgICAgICAgICcjMmJjZTQ4J1xuICAgIGxpbWU6ICAgICAgICAgICAgICcjOWRjYzAwJ1xuICAgIHF1YWdtaXJlOiAgICAgICAgICcjNDI2NjAwJ1xuICAgIGhvbmV5ZGV3OiAgICAgICAgICcjZmZjYzk5J1xuICAgIGlyb246ICAgICAgICAgICAgICcjODA4MDgwJ1xuICAgIGphZGU6ICAgICAgICAgICAgICcjOTRmZmI1J1xuICAgIGtoYWtpOiAgICAgICAgICAgICcjOGY3YzAwJ1xuICAgIG1hbGxvdzogICAgICAgICAgICcjYzIwMDg4J1xuICAgIG5hdnk6ICAgICAgICAgICAgICcjMDAzMzgwJ1xuICAgIG9ycGltZW50OiAgICAgICAgICcjZmZhNDA1J1xuICAgIHBpbms6ICAgICAgICAgICAgICcjZmZhOGJiJ1xuICAgIHJlZDogICAgICAgICAgICAgICcjZmYwMDEwJ1xuICAgIHNreTogICAgICAgICAgICAgICcjNWVmMWYyJ1xuICAgIHR1cnF1b2lzZTogICAgICAgICcjMDA5OThmJ1xuICAgIHZpb2xldDogICAgICAgICAgICcjNzQwYWZmJ1xuICAgIHdpbmU6ICAgICAgICAgICAgICcjOTkwMDAwJ1xuICAgIHVyYW5pdW06ICAgICAgICAgICcjZTBmZjY2J1xuICAgIHhhbnRoaW46ICAgICAgICAgICcjZmZmZjgwJ1xuICAgIHllbGxvdzogICAgICAgICAgICcjZmZlMTAwJ1xuICAgIHppbm5pYTogICAgICAgICAgICcjZmY1MDA1J1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGZhbGxiYWNrOiAgICAgICAgIFsgMjU1LCAgMjAsIDE0NywgXVxuXG4gIGZvciBuYW1lLCBjb2RlIG9mIGNvbG9yc1xuICAgIHN3aXRjaCB0cnVlXG4gICAgICB3aGVuICggdHlwZW9mIGNvZGUgKSBpcyAnc3RyaW5nJ1xuICAgICAgICByZ2IgPSBBTlNJLnJnYl9mcm9tX2hleCBjb2RlXG4gICAgICB3aGVuIEFycmF5LmlzQXJyYXkgY29kZVxuICAgICAgICByZ2IgPSBjb2RlXG4gICAgICBlbHNlIHRocm93IG5ldyBFcnJvciBcIs6pX18yNSBmb3JtYXQgZXJyb3I6ICN7cnByIGNvZGV9XCJcbiAgICBmZ19jb2RlX3N0YXJ0ID0gQU5TSS5mZ19jb2xvcl9jb2RlX2Zyb21fcmdiX2RlYyByZ2JcbiAgICBiZ19jb2RlX3N0YXJ0ID0gQU5TSS5iZ19jb2xvcl9jb2RlX2Zyb21fcmdiX2RlYyByZ2JcbiAgICBpZiBuYW1lIGlzICdibGFjaydcbiAgICAgIGZnX2JsYWNrID0gZmdfY29kZV9zdGFydFxuICAgIGVjaG8gJ86pX18xMCcsIGZcImFiY+KWhCN7ZmdfY29kZV9zdGFydH0gREVG4paEIFxceDFiWzBteHl64paEICN7ZmdfYmxhY2t9I3tiZ19jb2RlX3N0YXJ0fSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUICN7bmFtZX06PDIwYzsg4oCU4oCUXCJcblxuICBjb2xvcl96b25lcyA9ICggcmVxdWlyZSAnLi9jb2xvci16b25lcycgKS5jb2xvcl96b25lc1xuICBmZ3ogICAgICAgICA9ICdcXHgxYlszOW0nXG4gIGJneiAgICAgICAgID0gJ1xceDFiWzQ5bSdcbiAgZm9yIHpvbmVfbmFtZV8xLCB6b25lX2NvbG9yc18xIG9mIGNvbG9yX3pvbmVzXG4gICAgZWNobygpXG4gICAgZm9yIGNvbG9yX25hbWVfMSwgaGV4XzEgb2Ygem9uZV9jb2xvcnNfMVxuICAgICAgUiAgICAgPSBmXCIje3pvbmVfbmFtZV8xfTo8NmM7ICN7Y29sb3JfbmFtZV8xfTo8MTBjOyAje2hleF8xfSBcIlxuICAgICAgZmdhMSAgPSBBTlNJLmZnX2NvbG9yX2NvZGVfZnJvbV9oZXggaGV4XzFcbiAgICAgIGZvciB6b25lX25hbWVfMiwgem9uZV9jb2xvcnNfMiBvZiBjb2xvcl96b25lc1xuICAgICAgICBSICs9ICcgJ1xuICAgICAgICBmb3IgY29sb3JfbmFtZV8yLCBoZXhfMiBvZiB6b25lX2NvbG9yc18yXG4gICAgICAgICAgYmdhMiAgPSBBTlNJLmJnX2NvbG9yX2NvZGVfZnJvbV9oZXggaGV4XzJcbiAgICAgICAgICBSICAgICs9IFwiI3tmZ2ExfSN7YmdhMn0gVyAje2Znen0je2Jnen1cIlxuICAgICAgZWNobyBSXG4gICAgICAjIGVjaG8gcnByIFJcblxuICBmZ2EgICAgICAgPSAnXFx4MUJbMzg6Mjo6Mzc6NTQ6MTE4bSdcbiAgYmdhICAgICAgID0gJ1xceDFCWzQ4OjI6OjI1NToyNTU6MjU1bSdcbiAgb3ZlcmxpbmVhID0gJ1xceDFiWzUzbSdcbiAgb3ZlcmxpbmV6ID0gJ1xceDFiWzU1bSdcbiAgYmxpbmthICAgID0gJ1xceDFiWzVtJ1xuICBibGlua3ogICAgPSAnXFx4MWJbMjVtJ1xuICByZWQgICAgICAgPSAnXFx4MUJbMzg6Mjo6MjA3OjMyOjM5bSdcbiAgYmdyZWQgICAgID0gJ1xceDFCWzQ4OjI6OjIwNzozMjozOW0nXG4gIGVjaG8gXCJhYmMgI3tmZ2F9I3tiZ2F9I3tvdmVybGluZWF9IERFRuKUgmdqeeKUgjEyMzQgI3tvdmVybGluZXp9I3tmZ3p9I3tiZ3p9IHh5elwiXG4gIGVjaG8gXCJhYmMgI3tmZ2F9I3tiZ2F9I3tvdmVybGluZWF9IERFRiN7YmdyZWR94pSCZ2p54pSCI3tiZ2F9MTIzNCAje292ZXJsaW5len0je2Znen0je2Jnen0geHl6XCJcbiAgZWNobyBcImFiYyAje2ZnYX0je2JnYX0je292ZXJsaW5lYX0gREVG4pSCZ2p54pSCI3tyZWR9MTIzNCN7ZmdhfSAje292ZXJsaW5len0je2Znen0je2Jnen0geHl6XCJcbiAgZWNobyBcImFiYyAje2ZnYX0je2JnYX0je292ZXJsaW5lYX0gREVG4pSCI3tibGlua2F9Z2p5I3tibGlua3p94pSCMTIzNCAje292ZXJsaW5len0je2Znen0je2Jnen0geHl6XCJcbiAgZWNobyBcImFiYyAje2ZnYX0je2JnYX0je292ZXJsaW5lYX0gREVG4pSCZ2p54pSCMTIzNCAje292ZXJsaW5len0je2Znen0je2Jnen0geHl6XCJcbiAgZWNobygpXG4gIGVjaG8gXCJcXHgxQlszOW1cXHgxQls0OW1cXHgxQlszODoyOjozNzo1NDoxMThtXFx4MUJbNDg6Mjo6MjA3OjMyOjM5bSBhYmMgXFx4MWJbN20gYWJjIFxceDFiWzBtXCJcbiAgZWNobygpXG5cbiAgcmV0dXJuIG51bGxcblxuXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgY2xhc3MgQ29sb3JpemVyXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIEBjb2xvcml6ZTogKCBQLi4uICkgLT5cbiAgICAgICMgd2hpc3BlciAnzqlfXzIxJywgXCJjb2xvcml6ZSgpIGNvbnRleHQga2V5czogICN7cnByICggayBmb3IgayBvZiBAICl9XCJcbiAgICAgICMgd2hpc3BlciAnzqlfXzIyJywgXCJjb2xvcml6ZSgpIGFyZ3VtZW50czogICAgICN7cnByIFB9XCJcbiAgICAgIHdoaXNwZXIgJ86pX18yMycsIFwiY29sb3JpemUoKSBzdGFjazogICAgICAgICAje3JwciBbIEBzdGFjay4uLiwgXX1cIlxuICAgICAgZm9yIG5hbWUgZnJvbSBAc3RhY2tcbiAgICAgICAgYW5zaSA9IEFOU0kuZmdfY29sb3JfY29kZV9mcm9tX2NvbG9yX25hbWUgbmFtZVxuICAgICAgICAjIGRlYnVnICfOqV9fMTAnLCAoIHJwciBuYW1lICksICggcnByIGFuc2kgKVxuICAgICAgICBlY2hvICfOqV9fMTAnLCBmXCJhYmPiloQje2Fuc2l9IERFRuKWhCBcXHgxYlswbXh5euKWhCDigJTigJQgI3tuYW1lfTo8MjBjOyDigJTigJRcIlxuICAgICAgcmV0dXJuIFwiKioqKioqKioqKioqKioqKioqKlwiXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGNvbnN0cnVjdG9yOiAtPlxuICAgICAgQG90aGVyX3Byb3AgPSAnT1RIRVJfUFJPUCdcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZiBAY29uc3RydWN0b3IuY29sb3JpemUsIEBcbiAgICAgIFIgPSBjcmVhdGVfaW5maW55cHJveHkgeyBjYWxsZWU6IEBjb25zdHJ1Y3Rvci5jb2xvcml6ZSwgcHJvdmlkZXI6IEAsIH1cbiAgICAgIHJldHVybiBSXG5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBjID0gbmV3IENvbG9yaXplcigpXG4gIGluZm8gJ86pX18yNCcsIGNcbiAgaW5mbyAnzqlfXzI1JywgYy5ncmVlbi5ib2xkLmludmVyc2UgXCIgaG9seSBtb2x5IFwiXG4gIGluZm8gJ86pX18yNScsIGMuc2xhdGVncmF5IFwiIGhvbHkgbW9seSBcIlxuICBpbmZvICfOqV9fMjUnLCBjLmRhcmtzbGF0ZWdyYXkgXCIgaG9seSBtb2x5IFwiXG4gIGluZm8gJ86pX18yNScsIGMuZGFya2toYWtpIFwiIGhvbHkgbW9seSBcIlxuICBpbmZvICfOqV9fMjUnLCBjLmdvbGQgXCIgaG9seSBtb2x5IFwiXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgcmV0dXJuIG51bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgZGVtb19wcm94eV9hc19odG1sX3Byb2R1Y2VyLCB9XG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgIyBkZW1vX2luZmluaXRlX3Byb3h5KClcbiAgIyBkZW1vX2luc3RhbmNlX2Z1bmN0aW9uX2FzX3Byb3h5KClcbiAgZGVtb19jb2xvcmZ1bF9wcm94eSgpXG5cblxuIl19
//# sourceURL=../src/demo-infiniproxy.coffee