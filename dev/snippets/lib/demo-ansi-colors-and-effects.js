(async function() {
  'use strict';
  var C, GTNG, GUY, SFMODULES, Test, alert, blue, bold, colors, debug, demo_2, demo_show_color_effects, echo, f, gold, grey, help, info, inspect, log, nfa, plain, praise, red, reverse, rpr, urge, warn, whisper, white, write;

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
  demo_show_color_effects = function() {
    var lime, reset, show;
    reset = "\x1b[0m";
    lime = "\x1b[38;05;118m";
    show = function(...P) {
      return echo(lime, ...P, reset);
    };
    //.........................................................................................................
    echo("ANSI styles");
    show("\x1b[38;05;51m——————————————————————————————————————————————————————————————————————————————");
    echo("no effect");
    show("abc▄\x1b[26m DEF▄ \x1b[0mxyz▄ —— proportional  ——");
    show("abc▄\x1b[10m DEF▄ \x1b[10mxyz▄ —— font0      ——");
    show("abc▄\x1b[11m DEF▄ \x1b[10mxyz▄ —— font1      ——");
    show("abc▄\x1b[12m DEF▄ \x1b[10mxyz▄ —— font2       ——");
    show("abc▄\x1b[13m DEF▄ \x1b[10mxyz▄ —— font3       ——");
    show("abc▄\x1b[14m DEF▄ \x1b[10mxyz▄ —— font4    ——");
    show("abc▄\x1b[15m DEF▄ \x1b[10mxyz▄ —— font5  ——");
    show("abc▄\x1b[16m DEF▄ \x1b[10mxyz▄ —— font6      ——");
    show("abc▄\x1b[17m DEF▄ \x1b[10mxyz▄ —— font7       ——");
    show("abc▄\x1b[18m DEF▄ \x1b[10mxyz▄ —— font8       ——");
    show("abc▄\x1b[19m DEF▄ \x1b[10mxyz▄ —— font9    ——");
    show("abc▄\x1b[50m DEF▄ \x1b[0mxyz▄ —— framed etc  ——");
    show("abc▄\x1b[51m DEF▄ \x1b[0mxyz▄ —— framed etc  ——");
    show("abc▄\x1b[52m DEF▄ \x1b[0mxyz▄ —— framed etc  ——");
    show("abc▄\x1b[54m DEF▄ \x1b[0mxyz▄ —— framed etc  ——");
    show("abc▄\x1b[55m DEF▄ \x1b[0mxyz▄ —— framed etc  ——");
    show("abc▄\x1b[56m DEF▄ \x1b[0mxyz▄ —— framed etc  ——");
    show("abc▄\x1b[57m DEF▄ \x1b[0mxyz▄ —— framed etc  ——");
    show("abc▄\x1b[58m DEF▄ \x1b[0mxyz▄ —— framed etc  ——");
    show("abc▄\x1b[60m DEF▄ \x1b[0mxyz▄ —— CJK  ——");
    show("abc▄\x1b[61m DEF▄ \x1b[0mxyz▄ —— CJK  ——");
    show("abc▄\x1b[62m DEF▄ \x1b[0mxyz▄ —— CJK  ——");
    show("abc▄\x1b[63m DEF▄ \x1b[0mxyz▄ —— CJK  ——");
    show("abc▄\x1b[64m DEF▄ \x1b[0mxyz▄ —— CJK  ——");
    show("abc▄\x1b[70m DEF▄ \x1b[0mxyz▄ —— super/sub  ——");
    show("abc▄\x1b[71m DEF▄ \x1b[0mxyz▄ —— super/sub  ——");
    show("abc▄\x1b[72m DEF▄ \x1b[0mxyz▄ —— super/sub  ——");
    show("abc▄\x1b[73m DEF▄ \x1b[0mxyz▄ —— super/sub  ——");
    show("abc▄\x1b[74m DEF▄ \x1b[0mxyz▄ —— super/sub  ——");
    show("abc▄\x1b[75m DEF▄ \x1b[0mxyz▄ —— super/sub  ——");
    show("abc▄\x1b[76m DEF▄ \x1b[0mxyz▄ —— super/sub  ——");
    show("abc▄\x1b[77m DEF▄ \x1b[0mxyz▄ —— super/sub  ——");
    show("abc▄\x1b[78m DEF▄ \x1b[0mxyz▄ —— super/sub  ——");
    show("abc▄\x1b[79m DEF▄ \x1b[0mxyz▄ —— super/sub  ——");
    show("\x1b[38;05;51m——————————————————————————————————————————————————————————————————————————————");
    show("abc▄\x1b[1m DEF▄ \x1b[22mxyz▄ —— bold   <-> slim      ——");
    show("abc▄\x1b[21m DEF▄ \x1b[24mxyz▄ —— double underline       ——");
    show("abc▄\x1b[2m DEF▄ \x1b[22mxyz▄ —— dim    <-> nodim      ——");
    show("abc▄\x1b[3m DEF▄ \x1b[23mxyz▄ —— italic <-> straight       ——");
    show("abc▄\x1b[4m DEF▄ \x1b[24mxyz▄ —— underline    ——");
    show("abc▄\x1b[5m DEF▄ \x1b[25mxyz▄ —— blink      ——");
    show("abc▄\x1b[6m DEF▄ \x1b[25mxyz▄ —— blink      ——");
    show("abc▄\x1b[7m DEF▄ \x1b[27mxyz▄ —— reverse       ——");
    show("abc▄\x1b[8m DEF▄ \x1b[28mxyz▄ —— hide <-> reveal       ——");
    show("abc▄\x1b[9m DEF▄ \x1b[29mxyz▄ —— strike <-> nostrike    ——");
    show("abc▄\x1b[53m DEF▄ \x1b[55mxyz▄ —— overline <-> no overline  ——");
    show("abc▄\x1b[45mbg_magenta\x1b[49m DEF▄ \x1b[0mxyz▄ —— BG color off             ——");
    show("\x1b[38;05;51m——————————————————————————————————————————————————————————————————————————————");
    show("abc \x1b[36m\x1b[53m\x1b[7m DEF│gjy│1234 \x1b[55m\x1b[34m\x1b[27mxyz —— overline + reverse  ——");
    show("abc \x1b[36m\x1b[53m\x1b[7m DEF│gjy│1234 \x1b[55m\x1b[34m\x1b[27mxyz —— overline + reverse  ——");
    show("abc \x1b[36m\x1b[53m\x1b[7m DEF│gjy│1234 \x1b[55m\x1b[34m\x1b[27mxyz —— overline + reverse  ——");
    show("abc \x1b[36m\x1b[53m\x1b[7m DEF│gjy│1234 \x1b[55m\x1b[34m\x1b[27mxyz —— overline + reverse  ——");
    show("\x1b[38;05;51m——————————————————————————————————————————————————————————————————————————————");
    show("abc▄\x1b[30m DEF▄ \x1b[0mxyz▄ —— fg_black             ——");
    show("abc▄\x1b[31m DEF▄ \x1b[0mxyz▄ —— fg_red               ——");
    show("abc▄\x1b[32m DEF▄ \x1b[0mxyz▄ —— fg_green             ——");
    show("abc▄\x1b[33m DEF▄ \x1b[0mxyz▄ —— fg_yellow            ——");
    show("abc▄\x1b[34m DEF▄ \x1b[0mxyz▄ —— fg_blue              ——");
    show("abc▄\x1b[35m DEF▄ \x1b[0mxyz▄ —— fg_magenta           ——");
    show("abc▄\x1b[36m DEF▄ \x1b[0mxyz▄ —— fg_cyan              ——");
    show("abc▄\x1b[37m DEF▄ \x1b[0mxyz▄ —— fg_white             ——");
    show("abc▄\x1b[90m DEF▄ \x1b[0mxyz▄ —— fg_bright_black      ——");
    show("abc▄\x1b[91m DEF▄ \x1b[0mxyz▄ —— fg_bright_red        ——");
    show("abc▄\x1b[92m DEF▄ \x1b[0mxyz▄ —— fg_bright_green      ——");
    show("abc▄\x1b[93m DEF▄ \x1b[0mxyz▄ —— fg_bright_yellow     ——");
    show("abc▄\x1b[94m DEF▄ \x1b[0mxyz▄ —— fg_bright_blue       ——");
    show("abc▄\x1b[95m DEF▄ \x1b[0mxyz▄ —— fg_bright_magenta    ——");
    show("abc▄\x1b[96m DEF▄ \x1b[0mxyz▄ —— fg_bright_cyan       ——");
    show("abc▄\x1b[97m DEF▄ \x1b[0mxyz▄ —— fg_bright_white      ——");
    show("abc▄\x1b[40m DEF▄ \x1b[0mxyz▄ —— bg_black             ——");
    show("abc▄\x1b[41m DEF▄ \x1b[0mxyz▄ —— bg_red               ——");
    show("abc▄\x1b[42m DEF▄ \x1b[0mxyz▄ —— bg_green             ——");
    show("abc▄\x1b[43m DEF▄ \x1b[0mxyz▄ —— bg_yellow            ——");
    show("abc▄\x1b[44m DEF▄ \x1b[0mxyz▄ —— bg_blue              ——");
    show("abc▄\x1b[45m DEF▄ \x1b[0mxyz▄ —— bg_magenta           ——");
    show("abc▄\x1b[46m DEF▄ \x1b[0mxyz▄ —— bg_cyan              ——");
    show("abc▄\x1b[47m DEF▄ \x1b[0mxyz▄ —— bg_white             ——");
    show("abc▄\x1b[100m DEF▄ \x1b[0mxyz▄ —— bg_bright_black      ——");
    show("abc▄\x1b[101m DEF▄ \x1b[0mxyz▄ —— bg_bright_red        ——");
    show("abc▄\x1b[102m DEF▄ \x1b[0mxyz▄ —— bg_bright_green      ——");
    show("abc▄\x1b[103m DEF▄ \x1b[0mxyz▄ —— bg_bright_yellow     ——");
    show("abc▄\x1b[104m DEF▄ \x1b[0mxyz▄ —— bg_bright_blue       ——");
    show("abc▄\x1b[105m DEF▄ \x1b[0mxyz▄ —— bg_bright_magenta    ——");
    show("abc▄\x1b[106m DEF▄ \x1b[0mxyz▄ —— bg_bright_cyan       ——");
    show("abc▄\x1b[107m DEF▄ \x1b[0mxyz▄ —— bg_bright_white      ——");
    show("\x1b[38;05;51m——————————————————————————————————————————————————————————————————————————————");
    show("\x1b[9mESC[38;2;⟨r⟩;⟨g⟩;⟨b⟩m Select RGB foreground color");
    show("\x1b[9mESC[48;2;⟨r⟩;⟨g⟩;⟨b⟩m Select RGB background color");
    show("ESC[38:2:⟨???⟩:⟨r⟩:⟨g⟩:⟨b⟩:⟨unused⟩:⟨???⟩:⟨???⟩m Select RGB foreground color");
    show("ESC[48:2:⟨???⟩:⟨r⟩:⟨g⟩:⟨b⟩:⟨unused⟩:⟨???⟩:⟨???⟩m Select RGB background color");
    show("r, g, b values are 0 to 255; terminal ignores values outside of that");
    show("also supports CMYK; trailing colons can be omitted");
    show("\x1b[38;05;51m——————————————————————————————————————————————————————————————————————————————");
    show("abc▄\x1b[38:2::255:0:0m DEF▄ \x1b[0mxyz▄ —— RGB             ——");
    show("abc▄\x1b[38:2::200:0:0m DEF▄ \x1b[0mxyz▄ —— RGB             ——");
    show("abc▄\x1b[38:2::100:0:0m DEF▄ \x1b[0mxyz▄ —— RGB             ——");
    show("abc▄\x1b[38:2::10:0:0m DEF▄ \x1b[0mxyz▄ —— RGB             ——");
    show("\x1b[38;05;51m——————————————————————————————————————————————————————————————————————————————");
    show("abc▄\x1b[38:2::0:0:0m DEF▄ \x1b[0mxyz▄ —— RGB             ——");
    show("abc▄\x1b[38:2::0:0:100m DEF▄ \x1b[0mxyz▄ —— RGB             ——");
    show("abc▄\x1b[38:2::0:0:255m DEF▄ \x1b[0mxyz▄ —— RGB             ——");
    return null;
  };

  colors = {
    black: [0, 0, 0],
    darkslategray: [47, 79, 79],
    dimgray: [105, 105, 105],
    slategray: [112, 128, 144],
    gray: [128, 128, 128],
    lightslategray: [119, 136, 153],
    darkgray: [169, 169, 169],
    silver: [192, 192, 192],
    lightgray: [211, 211, 211],
    gainsboro: [220, 220, 220]
  };

  //===========================================================================================================
  demo_2 = function() {
    var ANSI, Ansi, R, TMP_error, bg_code_start, bga, bga2, bgred, bgz, blinka, blinkz, code, color_name_1, color_name_2, color_zones, create_infinyproxy, fg_black, fg_code_start, fga, fga1, fgz, hex_1, hex_2, name, overlinea, overlinez, ref, rgb, sys_symbol, zone_colors_1, zone_colors_2, zone_name_1, zone_name_2;
    TMP_error = class TMP_error extends Error {};
    ({create_infinyproxy, sys_symbol} = SFMODULES.require_infiniproxy());
    //=========================================================================================================
    ANSI = new (Ansi = (function() {
      class Ansi {
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
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      // guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
      // guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
      // ( new Test guytest_cfg ).test { demo_proxy_as_html_producer, }
      //.........................................................................................................
      demo_show_color_effects();
      return demo_2();
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tYW5zaS1jb2xvcnMtYW5kLWVmZmVjdHMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQUE7QUFBQSxNQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsTUFBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsdUJBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUEsRUFBQSxLQUFBOzs7RUFHQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLFlBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsSUFKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsR0FQRixFQVFFLElBUkYsRUFTRSxPQVRGLEVBVUUsR0FWRixDQUFBLEdBVTRCLEdBQUcsQ0FBQyxHQVZoQzs7RUFXQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1Qjs7RUFDQSxLQUFBLEdBQTRCLFFBQUEsQ0FBRSxDQUFGLENBQUE7V0FBUyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQWYsQ0FBcUIsQ0FBckI7RUFBVDs7RUFDNUIsQ0FBQSxHQUE0QixPQUFBLENBQVEsT0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEdBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEsNENBQVIsQ0FBNUI7O0VBQ0EsSUFBQSxHQUE0QixPQUFBLENBQVEsMkJBQVI7O0VBQzVCLENBQUEsQ0FBRSxJQUFGLENBQUEsR0FBNEIsSUFBNUI7O0VBQ0EsU0FBQSxHQUE0QixPQUFBLENBQVEsbUNBQVIsRUE5QjVCOzs7RUFrQ0EsdUJBQUEsR0FBMEIsUUFBQSxDQUFBLENBQUE7QUFDMUIsUUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBO0lBQUUsS0FBQSxHQUFRO0lBQ1IsSUFBQSxHQUFRO0lBQ1IsSUFBQSxHQUFRLFFBQUEsQ0FBQSxHQUFFLENBQUYsQ0FBQTthQUFZLElBQUEsQ0FBSyxJQUFMLEVBQVcsR0FBQSxDQUFYLEVBQWlCLEtBQWpCO0lBQVosRUFGVjs7SUFJRSxJQUFBLENBQUssYUFBTDtJQUNBLElBQUEsQ0FBSyw4RkFBTDtJQUNBLElBQUEsQ0FBSyxXQUFMO0lBQ0EsSUFBQSxDQUFLLG1EQUFMO0lBQ0EsSUFBQSxDQUFLLGlEQUFMO0lBQ0EsSUFBQSxDQUFLLGlEQUFMO0lBQ0EsSUFBQSxDQUFLLGtEQUFMO0lBQ0EsSUFBQSxDQUFLLGtEQUFMO0lBQ0EsSUFBQSxDQUFLLCtDQUFMO0lBQ0EsSUFBQSxDQUFLLDZDQUFMO0lBQ0EsSUFBQSxDQUFLLGlEQUFMO0lBQ0EsSUFBQSxDQUFLLGtEQUFMO0lBQ0EsSUFBQSxDQUFLLGtEQUFMO0lBQ0EsSUFBQSxDQUFLLCtDQUFMO0lBQ0EsSUFBQSxDQUFLLGlEQUFMO0lBQ0EsSUFBQSxDQUFLLGlEQUFMO0lBQ0EsSUFBQSxDQUFLLGlEQUFMO0lBQ0EsSUFBQSxDQUFLLGlEQUFMO0lBQ0EsSUFBQSxDQUFLLGlEQUFMO0lBQ0EsSUFBQSxDQUFLLGlEQUFMO0lBQ0EsSUFBQSxDQUFLLGlEQUFMO0lBQ0EsSUFBQSxDQUFLLGlEQUFMO0lBQ0EsSUFBQSxDQUFLLDBDQUFMO0lBQ0EsSUFBQSxDQUFLLDBDQUFMO0lBQ0EsSUFBQSxDQUFLLDBDQUFMO0lBQ0EsSUFBQSxDQUFLLDBDQUFMO0lBQ0EsSUFBQSxDQUFLLDBDQUFMO0lBQ0EsSUFBQSxDQUFLLGdEQUFMO0lBQ0EsSUFBQSxDQUFLLGdEQUFMO0lBQ0EsSUFBQSxDQUFLLGdEQUFMO0lBQ0EsSUFBQSxDQUFLLGdEQUFMO0lBQ0EsSUFBQSxDQUFLLGdEQUFMO0lBQ0EsSUFBQSxDQUFLLGdEQUFMO0lBQ0EsSUFBQSxDQUFLLGdEQUFMO0lBQ0EsSUFBQSxDQUFLLGdEQUFMO0lBQ0EsSUFBQSxDQUFLLGdEQUFMO0lBQ0EsSUFBQSxDQUFLLGdEQUFMO0lBQ0EsSUFBQSxDQUFLLDhGQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDZEQUFMO0lBQ0EsSUFBQSxDQUFLLDJEQUFMO0lBQ0EsSUFBQSxDQUFLLCtEQUFMO0lBQ0EsSUFBQSxDQUFLLGtEQUFMO0lBQ0EsSUFBQSxDQUFLLGdEQUFMO0lBQ0EsSUFBQSxDQUFLLGdEQUFMO0lBQ0EsSUFBQSxDQUFLLG1EQUFMO0lBQ0EsSUFBQSxDQUFLLDJEQUFMO0lBQ0EsSUFBQSxDQUFLLDREQUFMO0lBQ0EsSUFBQSxDQUFLLGdFQUFMO0lBQ0EsSUFBQSxDQUFLLGdGQUFMO0lBQ0EsSUFBQSxDQUFLLDhGQUFMO0lBQ0EsSUFBQSxDQUFLLGdHQUFMO0lBQ0EsSUFBQSxDQUFLLGdHQUFMO0lBQ0EsSUFBQSxDQUFLLGdHQUFMO0lBQ0EsSUFBQSxDQUFLLGdHQUFMO0lBQ0EsSUFBQSxDQUFLLDhGQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDJEQUFMO0lBQ0EsSUFBQSxDQUFLLDJEQUFMO0lBQ0EsSUFBQSxDQUFLLDJEQUFMO0lBQ0EsSUFBQSxDQUFLLDJEQUFMO0lBQ0EsSUFBQSxDQUFLLDJEQUFMO0lBQ0EsSUFBQSxDQUFLLDJEQUFMO0lBQ0EsSUFBQSxDQUFLLDJEQUFMO0lBQ0EsSUFBQSxDQUFLLDJEQUFMO0lBQ0EsSUFBQSxDQUFLLDhGQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDhFQUFMO0lBQ0EsSUFBQSxDQUFLLDhFQUFMO0lBQ0EsSUFBQSxDQUFLLHNFQUFMO0lBQ0EsSUFBQSxDQUFLLG9EQUFMO0lBQ0EsSUFBQSxDQUFLLDhGQUFMO0lBQ0EsSUFBQSxDQUFLLGdFQUFMO0lBQ0EsSUFBQSxDQUFLLGdFQUFMO0lBQ0EsSUFBQSxDQUFLLGdFQUFMO0lBQ0EsSUFBQSxDQUFLLCtEQUFMO0lBQ0EsSUFBQSxDQUFLLDhGQUFMO0lBQ0EsSUFBQSxDQUFLLDhEQUFMO0lBQ0EsSUFBQSxDQUFLLGdFQUFMO0lBQ0EsSUFBQSxDQUFLLGdFQUFMO0FBQ0EsV0FBTztFQTdHaUI7O0VBK0cxQixNQUFBLEdBQ0U7SUFBQSxLQUFBLEVBQWlCLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQWpCO0lBQ0EsYUFBQSxFQUFpQixD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QUFBLEdBQUEsRUFBQTs7Ozs7TUFLdEMsdUJBQUEsQ0FBQTthQUNBLE1BQUEsQ0FBQTtJQU5zQyxDQUFBLElBQXhDOztBQS9SQSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2RlbW8tcHJveHknXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbndyaXRlICAgICAgICAgICAgICAgICAgICAgPSAoIHAgKSAtPiBwcm9jZXNzLnN0ZG91dC53cml0ZSBwXG5DICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnYW5zaXMnXG57IG5mYSB9ICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmRlbW9fc2hvd19jb2xvcl9lZmZlY3RzID0gLT5cbiAgcmVzZXQgPSBcIlxceDFiWzBtXCJcbiAgbGltZSAgPSBcIlxceDFiWzM4OzA1OzExOG1cIlxuICBzaG93ICA9ICggUC4uLiApIC0+IGVjaG8gbGltZSwgUC4uLiwgcmVzZXRcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBlY2hvIFwiQU5TSSBzdHlsZXNcIlxuICBzaG93IFwiXFx4MWJbMzg7MDU7NTFt4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUXCJcbiAgZWNobyBcIm5vIGVmZmVjdFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYlsyNm0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBwcm9wb3J0aW9uYWwgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYlsxMG0gREVG4paEIFxceDFiWzEwbXh5euKWhCDigJTigJQgZm9udDAgICAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbMTFtIERFRuKWhCBcXHgxYlsxMG14eXriloQg4oCU4oCUIGZvbnQxICAgICAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzEybSBERUbiloQgXFx4MWJbMTBteHl64paEIOKAlOKAlCBmb250MiAgICAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbMTNtIERFRuKWhCBcXHgxYlsxMG14eXriloQg4oCU4oCUIGZvbnQzICAgICAgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYlsxNG0gREVG4paEIFxceDFiWzEwbXh5euKWhCDigJTigJQgZm9udDQgICAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzE1bSBERUbiloQgXFx4MWJbMTBteHl64paEIOKAlOKAlCBmb250NSAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzE2bSBERUbiloQgXFx4MWJbMTBteHl64paEIOKAlOKAlCBmb250NiAgICAgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYlsxN20gREVG4paEIFxceDFiWzEwbXh5euKWhCDigJTigJQgZm9udDcgICAgICAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzE4bSBERUbiloQgXFx4MWJbMTBteHl64paEIOKAlOKAlCBmb250OCAgICAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbMTltIERFRuKWhCBcXHgxYlsxMG14eXriloQg4oCU4oCUIGZvbnQ5ICAgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls1MG0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBmcmFtZWQgZXRjICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbNTFtIERFRuKWhCBcXHgxYlswbXh5euKWhCDigJTigJQgZnJhbWVkIGV0YyAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzUybSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIGZyYW1lZCBldGMgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls1NG0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBmcmFtZWQgZXRjICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbNTVtIERFRuKWhCBcXHgxYlswbXh5euKWhCDigJTigJQgZnJhbWVkIGV0YyAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzU2bSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIGZyYW1lZCBldGMgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls1N20gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBmcmFtZWQgZXRjICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbNThtIERFRuKWhCBcXHgxYlswbXh5euKWhCDigJTigJQgZnJhbWVkIGV0YyAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzYwbSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIENKSyAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzYxbSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIENKSyAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzYybSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIENKSyAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzYzbSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIENKSyAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzY0bSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIENKSyAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzcwbSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIHN1cGVyL3N1YiAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzcxbSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIHN1cGVyL3N1YiAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzcybSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIHN1cGVyL3N1YiAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzczbSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIHN1cGVyL3N1YiAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzc0bSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIHN1cGVyL3N1YiAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzc1bSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIHN1cGVyL3N1YiAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzc2bSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIHN1cGVyL3N1YiAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzc3bSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIHN1cGVyL3N1YiAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzc4bSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIHN1cGVyL3N1YiAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzc5bSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIHN1cGVyL3N1YiAg4oCU4oCUXCJcbiAgc2hvdyBcIlxceDFiWzM4OzA1OzUxbeKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYlsxbSBERUbiloQgXFx4MWJbMjJteHl64paEIOKAlOKAlCBib2xkICAgPC0+IHNsaW0gICAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbMjFtIERFRuKWhCBcXHgxYlsyNG14eXriloQg4oCU4oCUIGRvdWJsZSB1bmRlcmxpbmUgICAgICAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzJtIERFRuKWhCBcXHgxYlsyMm14eXriloQg4oCU4oCUIGRpbSAgICA8LT4gbm9kaW0gICAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbM20gREVG4paEIFxceDFiWzIzbXh5euKWhCDigJTigJQgaXRhbGljIDwtPiBzdHJhaWdodCAgICAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbNG0gREVG4paEIFxceDFiWzI0bXh5euKWhCDigJTigJQgdW5kZXJsaW5lICAgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls1bSBERUbiloQgXFx4MWJbMjVteHl64paEIOKAlOKAlCBibGluayAgICAgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls2bSBERUbiloQgXFx4MWJbMjVteHl64paEIOKAlOKAlCBibGluayAgICAgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls3bSBERUbiloQgXFx4MWJbMjdteHl64paEIOKAlOKAlCByZXZlcnNlICAgICAgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls4bSBERUbiloQgXFx4MWJbMjhteHl64paEIOKAlOKAlCBoaWRlIDwtPiByZXZlYWwgICAgICAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzltIERFRuKWhCBcXHgxYlsyOW14eXriloQg4oCU4oCUIHN0cmlrZSA8LT4gbm9zdHJpa2UgICAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzUzbSBERUbiloQgXFx4MWJbNTVteHl64paEIOKAlOKAlCBvdmVybGluZSA8LT4gbm8gb3ZlcmxpbmUgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls0NW1iZ19tYWdlbnRhXFx4MWJbNDltIERFRuKWhCBcXHgxYlswbXh5euKWhCDigJTigJQgQkcgY29sb3Igb2ZmICAgICAgICAgICAgIOKAlOKAlFwiXG4gIHNob3cgXCJcXHgxYlszODswNTs1MW3igJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJRcIlxuICBzaG93IFwiYWJjIFxceDFiWzM2bVxceDFiWzUzbVxceDFiWzdtIERFRuKUgmdqeeKUgjEyMzQgXFx4MWJbNTVtXFx4MWJbMzRtXFx4MWJbMjdteHl6IOKAlOKAlCBvdmVybGluZSArIHJldmVyc2UgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmMgXFx4MWJbMzZtXFx4MWJbNTNtXFx4MWJbN20gREVG4pSCZ2p54pSCMTIzNCBcXHgxYls1NW1cXHgxYlszNG1cXHgxYlsyN214eXog4oCU4oCUIG92ZXJsaW5lICsgcmV2ZXJzZSAg4oCU4oCUXCJcbiAgc2hvdyBcImFiYyBcXHgxYlszNm1cXHgxYls1M21cXHgxYls3bSBERUbilIJnannilIIxMjM0IFxceDFiWzU1bVxceDFiWzM0bVxceDFiWzI3bXh5eiDigJTigJQgb3ZlcmxpbmUgKyByZXZlcnNlICDigJTigJRcIlxuICBzaG93IFwiYWJjIFxceDFiWzM2bVxceDFiWzUzbVxceDFiWzdtIERFRuKUgmdqeeKUgjEyMzQgXFx4MWJbNTVtXFx4MWJbMzRtXFx4MWJbMjdteHl6IOKAlOKAlCBvdmVybGluZSArIHJldmVyc2UgIOKAlOKAlFwiXG4gIHNob3cgXCJcXHgxYlszODswNTs1MW3igJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbMzBtIERFRuKWhCBcXHgxYlswbXh5euKWhCDigJTigJQgZmdfYmxhY2sgICAgICAgICAgICAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzMxbSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIGZnX3JlZCAgICAgICAgICAgICAgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYlszMm0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBmZ19ncmVlbiAgICAgICAgICAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbMzNtIERFRuKWhCBcXHgxYlswbXh5euKWhCDigJTigJQgZmdfeWVsbG93ICAgICAgICAgICAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzM0bSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIGZnX2JsdWUgICAgICAgICAgICAgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYlszNW0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBmZ19tYWdlbnRhICAgICAgICAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbMzZtIERFRuKWhCBcXHgxYlswbXh5euKWhCDigJTigJQgZmdfY3lhbiAgICAgICAgICAgICAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzM3bSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIGZnX3doaXRlICAgICAgICAgICAgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls5MG0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBmZ19icmlnaHRfYmxhY2sgICAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbOTFtIERFRuKWhCBcXHgxYlswbXh5euKWhCDigJTigJQgZmdfYnJpZ2h0X3JlZCAgICAgICAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzkybSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIGZnX2JyaWdodF9ncmVlbiAgICAgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls5M20gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBmZ19icmlnaHRfeWVsbG93ICAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbOTRtIERFRuKWhCBcXHgxYlswbXh5euKWhCDigJTigJQgZmdfYnJpZ2h0X2JsdWUgICAgICAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzk1bSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIGZnX2JyaWdodF9tYWdlbnRhICAgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls5Nm0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBmZ19icmlnaHRfY3lhbiAgICAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbOTdtIERFRuKWhCBcXHgxYlswbXh5euKWhCDigJTigJQgZmdfYnJpZ2h0X3doaXRlICAgICAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzQwbSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIGJnX2JsYWNrICAgICAgICAgICAgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls0MW0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBiZ19yZWQgICAgICAgICAgICAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbNDJtIERFRuKWhCBcXHgxYlswbXh5euKWhCDigJTigJQgYmdfZ3JlZW4gICAgICAgICAgICAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzQzbSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIGJnX3llbGxvdyAgICAgICAgICAgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls0NG0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBiZ19ibHVlICAgICAgICAgICAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbNDVtIERFRuKWhCBcXHgxYlswbXh5euKWhCDigJTigJQgYmdfbWFnZW50YSAgICAgICAgICAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzQ2bSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIGJnX2N5YW4gICAgICAgICAgICAgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls0N20gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBiZ193aGl0ZSAgICAgICAgICAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbMTAwbSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIGJnX2JyaWdodF9ibGFjayAgICAgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYlsxMDFtIERFRuKWhCBcXHgxYlswbXh5euKWhCDigJTigJQgYmdfYnJpZ2h0X3JlZCAgICAgICAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzEwMm0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBiZ19icmlnaHRfZ3JlZW4gICAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbMTAzbSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIGJnX2JyaWdodF95ZWxsb3cgICAgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYlsxMDRtIERFRuKWhCBcXHgxYlswbXh5euKWhCDigJTigJQgYmdfYnJpZ2h0X2JsdWUgICAgICAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzEwNW0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBiZ19icmlnaHRfbWFnZW50YSAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbMTA2bSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIGJnX2JyaWdodF9jeWFuICAgICAgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYlsxMDdtIERFRuKWhCBcXHgxYlswbXh5euKWhCDigJTigJQgYmdfYnJpZ2h0X3doaXRlICAgICAg4oCU4oCUXCJcbiAgc2hvdyBcIlxceDFiWzM4OzA1OzUxbeKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlFwiXG4gIHNob3cgXCJcXHgxYls5bUVTQ1szODsyO+KfqHLin6k74p+oZ+KfqTvin6hi4p+pbSBTZWxlY3QgUkdCIGZvcmVncm91bmQgY29sb3JcIlxuICBzaG93IFwiXFx4MWJbOW1FU0NbNDg7Mjvin6hy4p+pO+KfqGfin6k74p+oYuKfqW0gU2VsZWN0IFJHQiBiYWNrZ3JvdW5kIGNvbG9yXCJcbiAgc2hvdyBcIkVTQ1szODoyOuKfqD8/P+KfqTrin6hy4p+pOuKfqGfin6k64p+oYuKfqTrin6h1bnVzZWTin6k64p+oPz8/4p+pOuKfqD8/P+KfqW0gU2VsZWN0IFJHQiBmb3JlZ3JvdW5kIGNvbG9yXCJcbiAgc2hvdyBcIkVTQ1s0ODoyOuKfqD8/P+KfqTrin6hy4p+pOuKfqGfin6k64p+oYuKfqTrin6h1bnVzZWTin6k64p+oPz8/4p+pOuKfqD8/P+KfqW0gU2VsZWN0IFJHQiBiYWNrZ3JvdW5kIGNvbG9yXCJcbiAgc2hvdyBcInIsIGcsIGIgdmFsdWVzIGFyZSAwIHRvIDI1NTsgdGVybWluYWwgaWdub3JlcyB2YWx1ZXMgb3V0c2lkZSBvZiB0aGF0XCJcbiAgc2hvdyBcImFsc28gc3VwcG9ydHMgQ01ZSzsgdHJhaWxpbmcgY29sb25zIGNhbiBiZSBvbWl0dGVkXCJcbiAgc2hvdyBcIlxceDFiWzM4OzA1OzUxbeKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYlszODoyOjoyNTU6MDowbSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIFJHQiAgICAgICAgICAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbMzg6Mjo6MjAwOjA6MG0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBSR0IgICAgICAgICAgICAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzM4OjI6OjEwMDowOjBtIERFRuKWhCBcXHgxYlswbXh5euKWhCDigJTigJQgUkdCICAgICAgICAgICAgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYlszODoyOjoxMDowOjBtIERFRuKWhCBcXHgxYlswbXh5euKWhCDigJTigJQgUkdCICAgICAgICAgICAgIOKAlOKAlFwiXG4gIHNob3cgXCJcXHgxYlszODswNTs1MW3igJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbMzg6Mjo6MDowOjBtIERFRuKWhCBcXHgxYlswbXh5euKWhCDigJTigJQgUkdCICAgICAgICAgICAgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYlszODoyOjowOjA6MTAwbSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIFJHQiAgICAgICAgICAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbMzg6Mjo6MDowOjI1NW0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBSR0IgICAgICAgICAgICAg4oCU4oCUXCJcbiAgcmV0dXJuIG51bGxcblxuY29sb3JzID1cbiAgYmxhY2s6ICAgICAgICAgICBbIDAsIDAsIDBdXG4gIGRhcmtzbGF0ZWdyYXk6ICAgWyA0NywgNzksIDc5XVxuICBkaW1ncmF5OiAgICAgICAgIFsgMTA1LCAxMDUsIDEwNV1cbiAgc2xhdGVncmF5OiAgICAgICBbIDExMiwgMTI4LCAxNDRdXG4gIGdyYXk6ICAgICAgICAgICAgWyAxMjgsIDEyOCwgMTI4XVxuICBsaWdodHNsYXRlZ3JheTogIFsgMTE5LCAxMzYsIDE1M11cbiAgZGFya2dyYXk6ICAgICAgICBbIDE2OSwgMTY5LCAxNjldXG4gIHNpbHZlcjogICAgICAgICAgWyAxOTIsIDE5MiwgMTkyXVxuICBsaWdodGdyYXk6ICAgICAgIFsgMjExLCAyMTEsIDIxMV1cbiAgZ2FpbnNib3JvOiAgICAgICBbIDIyMCwgMjIwLCAyMjBdXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZGVtb18yID0gLT5cbiAgY2xhc3MgVE1QX2Vycm9yIGV4dGVuZHMgRXJyb3JcbiAgeyBjcmVhdGVfaW5maW55cHJveHksXG4gICAgc3lzX3N5bWJvbCwgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9pbmZpbmlwcm94eSgpXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgQU5TSSA9IG5ldyBjbGFzcyBBbnNpXG4gICAgIyMjXG5cbiAgICAqIGFzIGZvciB0aGUgYmFja2dyb3VuZCAoJ2JnJyksIG9ubHkgY29sb3JzIGFuZCBubyBlZmZlY3RzIGNhbiBiZSBzZXQ7IGluIGFkZGl0aW9uLCB0aGUgYmcgY29sb3IgY2FuIGJlXG4gICAgICBzZXQgdG8gaXRzIGRlZmF1bHQgKG9yICd0cmFuc3BhcmVudCcpLCB3aGljaCB3aWxsIHNob3cgdGhlIHRlcm1pbmFsJ3Mgb3IgdGhlIHRlcm1pbmFsIGVtdWxhdG9yJ3NcbiAgICAgIGNvbmZpZ3VyZWQgYmcgY29sb3JcbiAgICAqIGFzIGZvciB0aGUgZm9yZWdyb3VuZCAoJ2ZnJyksIGNvbG9ycyBhbmQgZWZmZWN0cyBzdWNoIGFzIGJsaW5raW5nLCBib2xkLCBpdGFsaWMsIHVuZGVybGluZSwgb3ZlcmxpbmUsXG4gICAgICBzdHJpa2UgY2FuIGJlIHNldDsgaW4gYWRkaXRpb24sIHRoZSBjb25maWd1cmVkIHRlcm1pbmFsIGRlZmF1bHQgZm9udCBjb2xvciBjYW4gYmUgc2V0LCBhbmQgZWFjaCBlZmZlY3RcbiAgICAgIGhhcyBhIGRlZGljYXRlZCBvZmYtc3dpdGNoXG4gICAgKiBuZWF0IHRhYmxlcyBjYW4gYmUgZHJhd24gYnkgY29tYmluaW5nIHRoZSBvdmVybGluZSBlZmZlY3Qgd2l0aCBg4pSCYCBVKzI1MDIgJ0JveCBEcmF3aW5nIExpZ2h0IFZlcnRpY2FsXG4gICAgICBMaW5lJzsgdGhlIHJlbm1hcmthYmxlIGZlYXR1cmUgb2YgdGhpcyBpcyB0aGF0IGl0IG1pbmltaXplcyBzcGFjaW5nIGFyb3VuZCBjaGFyYWN0ZXJzIG1lYW5pbmcgaXQnc1xuICAgICAgcG9zc2libGUgdG8gaGF2ZSBhZGphY2VudCByb3dzIG9mIGNlbGxzIHNlcGFyYXRlZCBmcm9tIHRoZSBuZXh0IHJvdyBieSBhIGJvcmRlciB3aXRob3V0IGhhdmluZyB0b1xuICAgICAgc2FjcmlmaWNlIGEgbGluZSBvZiB0ZXh0IGp1c3QgdG8gZHJhdyB0aGUgYm9yZGVyLlxuICAgICogd2hpbGUgdGhlIHR3byBjb2xvciBwYWxhdHRlcyBpbXBsaWVkIGJ5IHRoZSBzdGFuZGFyZCBYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhcbiAgICAgICogYmV0dGVyIHRvIG9ubHkgdXNlIGZ1bGwgUkdCIHRoYW4gdG8gZnV6eiBhcm91bmQgd2l0aCBwYWxldHRlc1xuICAgICAgKiBhcHBzIHRoYXQgdXNlIGNvbG9ycyBhdCBhbGwgc2hvdWxkIGJlIHByZXBhcmVkIGZvciBkYXJrIGFuZCBicmlnaHQgYmFja2dyb3VuZHNcbiAgICAgICogaW4gZ2VuZXJhbCBiZXR0ZXIgdG8gc2V0IGZnLCBiZyBjb2xvcnMgdGhhbiB0byB1c2UgcmV2ZXJzZVxuICAgICAgKiBidXQgcmV2ZXJzZSBhY3R1YWxseSBkb2VzIGRvIHdoYXQgaXQgc2F5c+KAlGl0IHN3YXBzIGZnIHdpdGggYmcgY29sb3JcblxuICAgIFxceDFiWzM5bSBkZWZhdWx0IGZnIGNvbG9yXG4gICAgXFx4MWJbNDltIGRlZmF1bHQgYmcgY29sb3JcblxuICAgICMjI1xuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZmdfY29sb3JfY29kZV9mcm9tX3JnYl9kZWM6IChbIHIsIGcsIGIsIF0pIC0+IFwiXFx4MWJbMzg6Mjo6I3tyfToje2d9OiN7Yn1tXCJcbiAgICBiZ19jb2xvcl9jb2RlX2Zyb21fcmdiX2RlYzogKFsgciwgZywgYiwgXSkgLT4gXCJcXHgxYls0ODoyOjoje3J9OiN7Z306I3tifW1cIlxuICAgIGZnX2NvbG9yX2NvZGVfZnJvbV9oZXg6ICAgICAoIGhleCAgICAgICAgKSAtPiBAZmdfY29sb3JfY29kZV9mcm9tX3JnYl9kZWMgQHJnYl9mcm9tX2hleCBoZXhcbiAgICBiZ19jb2xvcl9jb2RlX2Zyb21faGV4OiAgICAgKCBoZXggICAgICAgICkgLT4gQGJnX2NvbG9yX2NvZGVfZnJvbV9yZ2JfZGVjIEByZ2JfZnJvbV9oZXggaGV4XG4gICAgZmdfY29sb3JfY29kZV9mcm9tX2NvbG9yX25hbWU6ICggbmFtZSApIC0+XG4gICAgICByZ2IgPSBAY29sb3JzWyBuYW1lIF0gPyBAY29sb3JzLmZhbGxiYWNrXG4gICAgICByZXR1cm4gQGZnX2NvbG9yX2NvZGVfZnJvbV9yZ2JfZGVjIHJnYlxuICAgIHJnYl9mcm9tX2hleDogKCBoZXggKSAtPlxuICAgICAgIyMjIFRBSU5UIHVzZSBwcm9wZXIgdHlwaW5nICMjI1xuICAgICAgdGhyb3cgbmV3IEVycm9yIFwizqlfXzI1IGV4cGVjdGVkIHRleHQsIGdvdCAje3JwciBoZXh9XCIgdW5sZXNzICggdHlwZW9mIGhleCApIGlzICdzdHJpbmcnXG4gICAgICB0aHJvdyBuZXcgRXJyb3IgXCLOqV9fMjUgZXhwZWN0ZWQgJyMnLCBnb3QgI3tycHIgaGV4fVwiIHVubGVzcyBoZXguc3RhcnRzV2l0aCAnIydcbiAgICAgIHRocm93IG5ldyBFcnJvciBcIs6pX18yNSBleHBlY3RlZCB0ZXh0IG9mIGxlbmd0aCA3LCBnb3QgI3tycHIgaGV4fVwiIHVubGVzcyBoZXgubGVuZ3RoIGlzIDdcbiAgICAgIFsgcjE2LCBnMTYsIGIxNiwgXSA9IFsgaGV4WyAxIC4uIDIgXSwgaGV4WyAzIC4uIDQgXSwgaGV4WyA1IC4uIDYgXSwgXVxuICAgICAgcmV0dXJuIFsgKCBwYXJzZUludCByMTYsIDE2ICksICggcGFyc2VJbnQgZzE2LCAxNiApLCAoIHBhcnNlSW50IGIxNiwgMTYgKSwgXVxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBjb2xvcnNfYW5zaTogbnVsbFxuICAgIGNvbG9yczpcbiAgICAgICMjIyB0aHggdG86IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0hlbHA6RGlzdGluZ3Vpc2hhYmxlX2NvbG9ycyAjIyNcbiAgICAgICMjIyB0aHggdG86IGh0dHBzOi8vZ3JhcGhpY2Rlc2lnbi5zdGFja2V4Y2hhbmdlLmNvbS9xdWVzdGlvbnMvMzY4Mi93aGVyZS1jYW4taS1maW5kLWEtbGFyZ2UtcGFsZXR0ZS1zZXQtb2YtY29udHJhc3RpbmctY29sb3JzLWZvci1jb2xvcmluZy1tYW55LWQgIyMjXG4gICAgICBibGFjazogICAgICAgICAgICAnIzAwMDAwMCdcbiAgICAgIHdoaXRlOiAgICAgICAgICAgICcjZmZmZmZmJ1xuICAgICAgYW1ldGh5c3Q6ICAgICAgICAgJyNmMGEzZmYnXG4gICAgICBibHVlOiAgICAgICAgICAgICAnIzAwNzVkYydcbiAgICAgIGNhcmFtZWw6ICAgICAgICAgICcjOTkzZjAwJ1xuICAgICAgZGFtc29uOiAgICAgICAgICAgJyM0YzAwNWMnXG4gICAgICBlYm9ueTogICAgICAgICAgICAnIzE5MTkxOSdcbiAgICAgIGZvcmVzdDogICAgICAgICAgICcjMDA1YzMxJ1xuICAgICAgZ3JlZW46ICAgICAgICAgICAgJyMyYmNlNDgnXG4gICAgICBsaW1lOiAgICAgICAgICAgICAnIzlkY2MwMCdcbiAgICAgIHF1YWdtaXJlOiAgICAgICAgICcjNDI2NjAwJ1xuICAgICAgaG9uZXlkZXc6ICAgICAgICAgJyNmZmNjOTknXG4gICAgICBpcm9uOiAgICAgICAgICAgICAnIzgwODA4MCdcbiAgICAgIGphZGU6ICAgICAgICAgICAgICcjOTRmZmI1J1xuICAgICAga2hha2k6ICAgICAgICAgICAgJyM4ZjdjMDAnXG4gICAgICBtYWxsb3c6ICAgICAgICAgICAnI2MyMDA4OCdcbiAgICAgIG5hdnk6ICAgICAgICAgICAgICcjMDAzMzgwJ1xuICAgICAgb3JwaW1lbnQ6ICAgICAgICAgJyNmZmE0MDUnXG4gICAgICBwaW5rOiAgICAgICAgICAgICAnI2ZmYThiYidcbiAgICAgIHJlZDogICAgICAgICAgICAgICcjZmYwMDEwJ1xuICAgICAgc2t5OiAgICAgICAgICAgICAgJyM1ZWYxZjInXG4gICAgICB0dXJxdW9pc2U6ICAgICAgICAnIzAwOTk4ZidcbiAgICAgIHZpb2xldDogICAgICAgICAgICcjNzQwYWZmJ1xuICAgICAgd2luZTogICAgICAgICAgICAgJyM5OTAwMDAnXG4gICAgICB1cmFuaXVtOiAgICAgICAgICAnI2UwZmY2NidcbiAgICAgIHhhbnRoaW46ICAgICAgICAgICcjZmZmZjgwJ1xuICAgICAgeWVsbG93OiAgICAgICAgICAgJyNmZmUxMDAnXG4gICAgICB6aW5uaWE6ICAgICAgICAgICAnI2ZmNTAwNSdcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZmFsbGJhY2s6ICAgICAgICAgWyAyNTUsICAyMCwgMTQ3LCBdXG5cbiAgZm9yIG5hbWUsIGNvZGUgb2YgQU5TSS5jb2xvcnNcbiAgICBzd2l0Y2ggdHJ1ZVxuICAgICAgd2hlbiAoIHR5cGVvZiBjb2RlICkgaXMgJ3N0cmluZydcbiAgICAgICAgcmdiID0gQU5TSS5yZ2JfZnJvbV9oZXggY29kZVxuICAgICAgd2hlbiBBcnJheS5pc0FycmF5IGNvZGVcbiAgICAgICAgcmdiID0gY29kZVxuICAgICAgZWxzZSB0aHJvdyBuZXcgRXJyb3IgXCLOqV9fMjUgZm9ybWF0IGVycm9yOiAje3JwciBjb2RlfVwiXG4gICAgZmdfY29kZV9zdGFydCA9IEFOU0kuZmdfY29sb3JfY29kZV9mcm9tX3JnYl9kZWMgcmdiXG4gICAgYmdfY29kZV9zdGFydCA9IEFOU0kuYmdfY29sb3JfY29kZV9mcm9tX3JnYl9kZWMgcmdiXG4gICAgaWYgbmFtZSBpcyAnYmxhY2snXG4gICAgICBmZ19ibGFjayA9IGZnX2NvZGVfc3RhcnRcbiAgICBlY2hvICfOqV9fMTAnLCBmXCJhYmPiloQje2ZnX2NvZGVfc3RhcnR9IERFRuKWhCBcXHgxYlswbXh5euKWhCAje2ZnX2JsYWNrfSN7YmdfY29kZV9zdGFydH0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCAje25hbWV9OjwyMGM7IOKAlOKAlFwiXG5cbiAgY29sb3Jfem9uZXMgPSAoIHJlcXVpcmUgJy4vY29sb3Item9uZXMnICkuY29sb3Jfem9uZXNcbiAgZmd6ICAgICAgICAgPSAnXFx4MWJbMzltJ1xuICBiZ3ogICAgICAgICA9ICdcXHgxYls0OW0nXG4gIGZvciB6b25lX25hbWVfMSwgem9uZV9jb2xvcnNfMSBvZiBjb2xvcl96b25lc1xuICAgIGVjaG8oKVxuICAgIGZvciBjb2xvcl9uYW1lXzEsIGhleF8xIG9mIHpvbmVfY29sb3JzXzFcbiAgICAgIFIgICAgID0gZlwiI3t6b25lX25hbWVfMX06PDZjOyAje2NvbG9yX25hbWVfMX06PDEwYzsgI3toZXhfMX0gXCJcbiAgICAgIGZnYTEgID0gQU5TSS5mZ19jb2xvcl9jb2RlX2Zyb21faGV4IGhleF8xXG4gICAgICBmb3Igem9uZV9uYW1lXzIsIHpvbmVfY29sb3JzXzIgb2YgY29sb3Jfem9uZXNcbiAgICAgICAgUiArPSAnICdcbiAgICAgICAgZm9yIGNvbG9yX25hbWVfMiwgaGV4XzIgb2Ygem9uZV9jb2xvcnNfMlxuICAgICAgICAgIGJnYTIgID0gQU5TSS5iZ19jb2xvcl9jb2RlX2Zyb21faGV4IGhleF8yXG4gICAgICAgICAgUiAgICArPSBcIiN7ZmdhMX0je2JnYTJ9IFcgI3tmZ3p9I3tiZ3p9XCJcbiAgICAgIGVjaG8gUlxuICAgICAgIyBlY2hvIHJwciBSXG5cbiAgZmdhICAgICAgID0gJ1xceDFCWzM4OjI6OjM3OjU0OjExOG0nXG4gIGJnYSAgICAgICA9ICdcXHgxQls0ODoyOjoyNTU6MjU1OjI1NW0nXG4gIG92ZXJsaW5lYSA9ICdcXHgxYls1M20nXG4gIG92ZXJsaW5leiA9ICdcXHgxYls1NW0nXG4gIGJsaW5rYSAgICA9ICdcXHgxYls1bSdcbiAgYmxpbmt6ICAgID0gJ1xceDFiWzI1bSdcbiAgcmVkICAgICAgID0gJ1xceDFCWzM4OjI6OjIwNzozMjozOW0nXG4gIGJncmVkICAgICA9ICdcXHgxQls0ODoyOjoyMDc6MzI6MzltJ1xuICBlY2hvIFwiYWJjICN7ZmdhfSN7YmdhfSN7b3ZlcmxpbmVhfSBERUbilIJnannilIIxMjM0ICN7b3ZlcmxpbmV6fSN7Zmd6fSN7Ymd6fSB4eXpcIlxuICBlY2hvIFwiYWJjICN7ZmdhfSN7YmdhfSN7b3ZlcmxpbmVhfSBERUYje2JncmVkfeKUgmdqeeKUgiN7YmdhfTEyMzQgI3tvdmVybGluZXp9I3tmZ3p9I3tiZ3p9IHh5elwiXG4gIGVjaG8gXCJhYmMgI3tmZ2F9I3tiZ2F9I3tvdmVybGluZWF9IERFRuKUgmdqeeKUgiN7cmVkfTEyMzQje2ZnYX0gI3tvdmVybGluZXp9I3tmZ3p9I3tiZ3p9IHh5elwiXG4gIGVjaG8gXCJhYmMgI3tmZ2F9I3tiZ2F9I3tvdmVybGluZWF9IERFRuKUgiN7YmxpbmthfWdqeSN7Ymxpbmt6feKUgjEyMzQgI3tvdmVybGluZXp9I3tmZ3p9I3tiZ3p9IHh5elwiXG4gIGVjaG8gXCJhYmMgI3tmZ2F9I3tiZ2F9I3tvdmVybGluZWF9IERFRuKUgmdqeeKUgjEyMzQgI3tvdmVybGluZXp9I3tmZ3p9I3tiZ3p9IHh5elwiXG4gIGVjaG8oKVxuICBlY2hvIFwiXFx4MUJbMzltXFx4MUJbNDltXFx4MUJbMzg6Mjo6Mzc6NTQ6MTE4bVxceDFCWzQ4OjI6OjIwNzozMjozOW0gYWJjIFxceDFiWzdtIGFiYyBcXHgxYlswbVwiXG4gIGVjaG8oKVxuXG4gIHJldHVybiBudWxsXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gICMgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgIyBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgZGVtb19wcm94eV9hc19odG1sX3Byb2R1Y2VyLCB9XG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgZGVtb19zaG93X2NvbG9yX2VmZmVjdHMoKVxuICBkZW1vXzIoKVxuXG4iXX0=
