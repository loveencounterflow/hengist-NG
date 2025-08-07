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

  SFMODULES = require('../../../apps/bricabrac-single-file-modules');

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tYW5zaS1jb2xvcnMtYW5kLWVmZmVjdHMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQUE7QUFBQSxNQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsTUFBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsdUJBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUEsRUFBQSxLQUFBOzs7RUFHQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLFlBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsSUFKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsR0FQRixFQVFFLElBUkYsRUFTRSxPQVRGLEVBVUUsR0FWRixDQUFBLEdBVTRCLEdBQUcsQ0FBQyxHQVZoQzs7RUFXQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1Qjs7RUFDQSxLQUFBLEdBQTRCLFFBQUEsQ0FBRSxDQUFGLENBQUE7V0FBUyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQWYsQ0FBcUIsQ0FBckI7RUFBVDs7RUFDNUIsQ0FBQSxHQUE0QixPQUFBLENBQVEsT0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEdBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEsNENBQVIsQ0FBNUI7O0VBQ0EsSUFBQSxHQUE0QixPQUFBLENBQVEsMkJBQVI7O0VBQzVCLENBQUEsQ0FBRSxJQUFGLENBQUEsR0FBNEIsSUFBNUI7O0VBQ0EsU0FBQSxHQUE0QixPQUFBLENBQVEsNkNBQVIsRUE5QjVCOzs7RUFrQ0EsdUJBQUEsR0FBMEIsUUFBQSxDQUFBLENBQUE7QUFDMUIsUUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBO0lBQUUsS0FBQSxHQUFRO0lBQ1IsSUFBQSxHQUFRO0lBQ1IsSUFBQSxHQUFRLFFBQUEsQ0FBQSxHQUFFLENBQUYsQ0FBQTthQUFZLElBQUEsQ0FBSyxJQUFMLEVBQVcsR0FBQSxDQUFYLEVBQWlCLEtBQWpCO0lBQVosRUFGVjs7SUFJRSxJQUFBLENBQUssYUFBTDtJQUNBLElBQUEsQ0FBSyw4RkFBTDtJQUNBLElBQUEsQ0FBSyxXQUFMO0lBQ0EsSUFBQSxDQUFLLG1EQUFMO0lBQ0EsSUFBQSxDQUFLLGlEQUFMO0lBQ0EsSUFBQSxDQUFLLGlEQUFMO0lBQ0EsSUFBQSxDQUFLLGtEQUFMO0lBQ0EsSUFBQSxDQUFLLGtEQUFMO0lBQ0EsSUFBQSxDQUFLLCtDQUFMO0lBQ0EsSUFBQSxDQUFLLDZDQUFMO0lBQ0EsSUFBQSxDQUFLLGlEQUFMO0lBQ0EsSUFBQSxDQUFLLGtEQUFMO0lBQ0EsSUFBQSxDQUFLLGtEQUFMO0lBQ0EsSUFBQSxDQUFLLCtDQUFMO0lBQ0EsSUFBQSxDQUFLLGlEQUFMO0lBQ0EsSUFBQSxDQUFLLGlEQUFMO0lBQ0EsSUFBQSxDQUFLLGlEQUFMO0lBQ0EsSUFBQSxDQUFLLGlEQUFMO0lBQ0EsSUFBQSxDQUFLLGlEQUFMO0lBQ0EsSUFBQSxDQUFLLGlEQUFMO0lBQ0EsSUFBQSxDQUFLLGlEQUFMO0lBQ0EsSUFBQSxDQUFLLGlEQUFMO0lBQ0EsSUFBQSxDQUFLLDBDQUFMO0lBQ0EsSUFBQSxDQUFLLDBDQUFMO0lBQ0EsSUFBQSxDQUFLLDBDQUFMO0lBQ0EsSUFBQSxDQUFLLDBDQUFMO0lBQ0EsSUFBQSxDQUFLLDBDQUFMO0lBQ0EsSUFBQSxDQUFLLGdEQUFMO0lBQ0EsSUFBQSxDQUFLLGdEQUFMO0lBQ0EsSUFBQSxDQUFLLGdEQUFMO0lBQ0EsSUFBQSxDQUFLLGdEQUFMO0lBQ0EsSUFBQSxDQUFLLGdEQUFMO0lBQ0EsSUFBQSxDQUFLLGdEQUFMO0lBQ0EsSUFBQSxDQUFLLGdEQUFMO0lBQ0EsSUFBQSxDQUFLLGdEQUFMO0lBQ0EsSUFBQSxDQUFLLGdEQUFMO0lBQ0EsSUFBQSxDQUFLLGdEQUFMO0lBQ0EsSUFBQSxDQUFLLDhGQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDZEQUFMO0lBQ0EsSUFBQSxDQUFLLDJEQUFMO0lBQ0EsSUFBQSxDQUFLLCtEQUFMO0lBQ0EsSUFBQSxDQUFLLGtEQUFMO0lBQ0EsSUFBQSxDQUFLLGdEQUFMO0lBQ0EsSUFBQSxDQUFLLGdEQUFMO0lBQ0EsSUFBQSxDQUFLLG1EQUFMO0lBQ0EsSUFBQSxDQUFLLDJEQUFMO0lBQ0EsSUFBQSxDQUFLLDREQUFMO0lBQ0EsSUFBQSxDQUFLLGdFQUFMO0lBQ0EsSUFBQSxDQUFLLGdGQUFMO0lBQ0EsSUFBQSxDQUFLLDhGQUFMO0lBQ0EsSUFBQSxDQUFLLGdHQUFMO0lBQ0EsSUFBQSxDQUFLLGdHQUFMO0lBQ0EsSUFBQSxDQUFLLGdHQUFMO0lBQ0EsSUFBQSxDQUFLLGdHQUFMO0lBQ0EsSUFBQSxDQUFLLDhGQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDJEQUFMO0lBQ0EsSUFBQSxDQUFLLDJEQUFMO0lBQ0EsSUFBQSxDQUFLLDJEQUFMO0lBQ0EsSUFBQSxDQUFLLDJEQUFMO0lBQ0EsSUFBQSxDQUFLLDJEQUFMO0lBQ0EsSUFBQSxDQUFLLDJEQUFMO0lBQ0EsSUFBQSxDQUFLLDJEQUFMO0lBQ0EsSUFBQSxDQUFLLDJEQUFMO0lBQ0EsSUFBQSxDQUFLLDhGQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDBEQUFMO0lBQ0EsSUFBQSxDQUFLLDhFQUFMO0lBQ0EsSUFBQSxDQUFLLDhFQUFMO0lBQ0EsSUFBQSxDQUFLLHNFQUFMO0lBQ0EsSUFBQSxDQUFLLG9EQUFMO0lBQ0EsSUFBQSxDQUFLLDhGQUFMO0lBQ0EsSUFBQSxDQUFLLGdFQUFMO0lBQ0EsSUFBQSxDQUFLLGdFQUFMO0lBQ0EsSUFBQSxDQUFLLGdFQUFMO0lBQ0EsSUFBQSxDQUFLLCtEQUFMO0lBQ0EsSUFBQSxDQUFLLDhGQUFMO0lBQ0EsSUFBQSxDQUFLLDhEQUFMO0lBQ0EsSUFBQSxDQUFLLGdFQUFMO0lBQ0EsSUFBQSxDQUFLLGdFQUFMO0FBQ0EsV0FBTztFQTdHaUI7O0VBK0cxQixNQUFBLEdBQ0U7SUFBQSxLQUFBLEVBQWlCLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQWpCO0lBQ0EsYUFBQSxFQUFpQixD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QUFBLEdBQUEsRUFBQTs7Ozs7TUFLdEMsdUJBQUEsQ0FBQTthQUNBLE1BQUEsQ0FBQTtJQU5zQyxDQUFBLElBQXhDOztBQS9SQSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2RlbW8tcHJveHknXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbndyaXRlICAgICAgICAgICAgICAgICAgICAgPSAoIHAgKSAtPiBwcm9jZXNzLnN0ZG91dC53cml0ZSBwXG5DICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnYW5zaXMnXG57IG5mYSB9ICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNpbmdsZS1maWxlLW1vZHVsZXMnXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5kZW1vX3Nob3dfY29sb3JfZWZmZWN0cyA9IC0+XG4gIHJlc2V0ID0gXCJcXHgxYlswbVwiXG4gIGxpbWUgID0gXCJcXHgxYlszODswNTsxMThtXCJcbiAgc2hvdyAgPSAoIFAuLi4gKSAtPiBlY2hvIGxpbWUsIFAuLi4sIHJlc2V0XG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgZWNobyBcIkFOU0kgc3R5bGVzXCJcbiAgc2hvdyBcIlxceDFiWzM4OzA1OzUxbeKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlFwiXG4gIGVjaG8gXCJubyBlZmZlY3RcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbMjZtIERFRuKWhCBcXHgxYlswbXh5euKWhCDigJTigJQgcHJvcG9ydGlvbmFsICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbMTBtIERFRuKWhCBcXHgxYlsxMG14eXriloQg4oCU4oCUIGZvbnQwICAgICAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzExbSBERUbiloQgXFx4MWJbMTBteHl64paEIOKAlOKAlCBmb250MSAgICAgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYlsxMm0gREVG4paEIFxceDFiWzEwbXh5euKWhCDigJTigJQgZm9udDIgICAgICAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzEzbSBERUbiloQgXFx4MWJbMTBteHl64paEIOKAlOKAlCBmb250MyAgICAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbMTRtIERFRuKWhCBcXHgxYlsxMG14eXriloQg4oCU4oCUIGZvbnQ0ICAgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYlsxNW0gREVG4paEIFxceDFiWzEwbXh5euKWhCDigJTigJQgZm9udDUgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYlsxNm0gREVG4paEIFxceDFiWzEwbXh5euKWhCDigJTigJQgZm9udDYgICAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbMTdtIERFRuKWhCBcXHgxYlsxMG14eXriloQg4oCU4oCUIGZvbnQ3ICAgICAgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYlsxOG0gREVG4paEIFxceDFiWzEwbXh5euKWhCDigJTigJQgZm9udDggICAgICAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzE5bSBERUbiloQgXFx4MWJbMTBteHl64paEIOKAlOKAlCBmb250OSAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbNTBtIERFRuKWhCBcXHgxYlswbXh5euKWhCDigJTigJQgZnJhbWVkIGV0YyAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzUxbSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIGZyYW1lZCBldGMgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls1Mm0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBmcmFtZWQgZXRjICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbNTRtIERFRuKWhCBcXHgxYlswbXh5euKWhCDigJTigJQgZnJhbWVkIGV0YyAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzU1bSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIGZyYW1lZCBldGMgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls1Nm0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBmcmFtZWQgZXRjICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbNTdtIERFRuKWhCBcXHgxYlswbXh5euKWhCDigJTigJQgZnJhbWVkIGV0YyAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzU4bSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIGZyYW1lZCBldGMgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls2MG0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBDSksgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls2MW0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBDSksgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls2Mm0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBDSksgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls2M20gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBDSksgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls2NG0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBDSksgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls3MG0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBzdXBlci9zdWIgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls3MW0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBzdXBlci9zdWIgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls3Mm0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBzdXBlci9zdWIgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls3M20gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBzdXBlci9zdWIgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls3NG0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBzdXBlci9zdWIgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls3NW0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBzdXBlci9zdWIgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls3Nm0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBzdXBlci9zdWIgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls3N20gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBzdXBlci9zdWIgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls3OG0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBzdXBlci9zdWIgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls3OW0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBzdXBlci9zdWIgIOKAlOKAlFwiXG4gIHNob3cgXCJcXHgxYlszODswNTs1MW3igJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbMW0gREVG4paEIFxceDFiWzIybXh5euKWhCDigJTigJQgYm9sZCAgIDwtPiBzbGltICAgICAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzIxbSBERUbiloQgXFx4MWJbMjRteHl64paEIOKAlOKAlCBkb3VibGUgdW5kZXJsaW5lICAgICAgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYlsybSBERUbiloQgXFx4MWJbMjJteHl64paEIOKAlOKAlCBkaW0gICAgPC0+IG5vZGltICAgICAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzNtIERFRuKWhCBcXHgxYlsyM214eXriloQg4oCU4oCUIGl0YWxpYyA8LT4gc3RyYWlnaHQgICAgICAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzRtIERFRuKWhCBcXHgxYlsyNG14eXriloQg4oCU4oCUIHVuZGVybGluZSAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbNW0gREVG4paEIFxceDFiWzI1bXh5euKWhCDigJTigJQgYmxpbmsgICAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbNm0gREVG4paEIFxceDFiWzI1bXh5euKWhCDigJTigJQgYmxpbmsgICAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbN20gREVG4paEIFxceDFiWzI3bXh5euKWhCDigJTigJQgcmV2ZXJzZSAgICAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbOG0gREVG4paEIFxceDFiWzI4bXh5euKWhCDigJTigJQgaGlkZSA8LT4gcmV2ZWFsICAgICAgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls5bSBERUbiloQgXFx4MWJbMjlteHl64paEIOKAlOKAlCBzdHJpa2UgPC0+IG5vc3RyaWtlICAgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls1M20gREVG4paEIFxceDFiWzU1bXh5euKWhCDigJTigJQgb3ZlcmxpbmUgPC0+IG5vIG92ZXJsaW5lICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbNDVtYmdfbWFnZW50YVxceDFiWzQ5bSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIEJHIGNvbG9yIG9mZiAgICAgICAgICAgICDigJTigJRcIlxuICBzaG93IFwiXFx4MWJbMzg7MDU7NTFt4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUXCJcbiAgc2hvdyBcImFiYyBcXHgxYlszNm1cXHgxYls1M21cXHgxYls3bSBERUbilIJnannilIIxMjM0IFxceDFiWzU1bVxceDFiWzM0bVxceDFiWzI3bXh5eiDigJTigJQgb3ZlcmxpbmUgKyByZXZlcnNlICDigJTigJRcIlxuICBzaG93IFwiYWJjIFxceDFiWzM2bVxceDFiWzUzbVxceDFiWzdtIERFRuKUgmdqeeKUgjEyMzQgXFx4MWJbNTVtXFx4MWJbMzRtXFx4MWJbMjdteHl6IOKAlOKAlCBvdmVybGluZSArIHJldmVyc2UgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmMgXFx4MWJbMzZtXFx4MWJbNTNtXFx4MWJbN20gREVG4pSCZ2p54pSCMTIzNCBcXHgxYls1NW1cXHgxYlszNG1cXHgxYlsyN214eXog4oCU4oCUIG92ZXJsaW5lICsgcmV2ZXJzZSAg4oCU4oCUXCJcbiAgc2hvdyBcImFiYyBcXHgxYlszNm1cXHgxYls1M21cXHgxYls3bSBERUbilIJnannilIIxMjM0IFxceDFiWzU1bVxceDFiWzM0bVxceDFiWzI3bXh5eiDigJTigJQgb3ZlcmxpbmUgKyByZXZlcnNlICDigJTigJRcIlxuICBzaG93IFwiXFx4MWJbMzg7MDU7NTFt4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzMwbSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIGZnX2JsYWNrICAgICAgICAgICAgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYlszMW0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBmZ19yZWQgICAgICAgICAgICAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbMzJtIERFRuKWhCBcXHgxYlswbXh5euKWhCDigJTigJQgZmdfZ3JlZW4gICAgICAgICAgICAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzMzbSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIGZnX3llbGxvdyAgICAgICAgICAgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYlszNG0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBmZ19ibHVlICAgICAgICAgICAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbMzVtIERFRuKWhCBcXHgxYlswbXh5euKWhCDigJTigJQgZmdfbWFnZW50YSAgICAgICAgICAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzM2bSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIGZnX2N5YW4gICAgICAgICAgICAgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYlszN20gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBmZ193aGl0ZSAgICAgICAgICAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbOTBtIERFRuKWhCBcXHgxYlswbXh5euKWhCDigJTigJQgZmdfYnJpZ2h0X2JsYWNrICAgICAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzkxbSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIGZnX2JyaWdodF9yZWQgICAgICAgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls5Mm0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBmZ19icmlnaHRfZ3JlZW4gICAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbOTNtIERFRuKWhCBcXHgxYlswbXh5euKWhCDigJTigJQgZmdfYnJpZ2h0X3llbGxvdyAgICAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzk0bSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIGZnX2JyaWdodF9ibHVlICAgICAgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls5NW0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBmZ19icmlnaHRfbWFnZW50YSAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbOTZtIERFRuKWhCBcXHgxYlswbXh5euKWhCDigJTigJQgZmdfYnJpZ2h0X2N5YW4gICAgICAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzk3bSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIGZnX2JyaWdodF93aGl0ZSAgICAgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls0MG0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBiZ19ibGFjayAgICAgICAgICAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbNDFtIERFRuKWhCBcXHgxYlswbXh5euKWhCDigJTigJQgYmdfcmVkICAgICAgICAgICAgICAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzQybSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIGJnX2dyZWVuICAgICAgICAgICAgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls0M20gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBiZ195ZWxsb3cgICAgICAgICAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbNDRtIERFRuKWhCBcXHgxYlswbXh5euKWhCDigJTigJQgYmdfYmx1ZSAgICAgICAgICAgICAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzQ1bSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIGJnX21hZ2VudGEgICAgICAgICAgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYls0Nm0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBiZ19jeWFuICAgICAgICAgICAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbNDdtIERFRuKWhCBcXHgxYlswbXh5euKWhCDigJTigJQgYmdfd2hpdGUgICAgICAgICAgICAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzEwMG0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBiZ19icmlnaHRfYmxhY2sgICAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbMTAxbSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIGJnX2JyaWdodF9yZWQgICAgICAgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYlsxMDJtIERFRuKWhCBcXHgxYlswbXh5euKWhCDigJTigJQgYmdfYnJpZ2h0X2dyZWVuICAgICAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzEwM20gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBiZ19icmlnaHRfeWVsbG93ICAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbMTA0bSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIGJnX2JyaWdodF9ibHVlICAgICAgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYlsxMDVtIERFRuKWhCBcXHgxYlswbXh5euKWhCDigJTigJQgYmdfYnJpZ2h0X21hZ2VudGEgICAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzEwNm0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBiZ19icmlnaHRfY3lhbiAgICAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbMTA3bSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIGJnX2JyaWdodF93aGl0ZSAgICAgIOKAlOKAlFwiXG4gIHNob3cgXCJcXHgxYlszODswNTs1MW3igJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJRcIlxuICBzaG93IFwiXFx4MWJbOW1FU0NbMzg7Mjvin6hy4p+pO+KfqGfin6k74p+oYuKfqW0gU2VsZWN0IFJHQiBmb3JlZ3JvdW5kIGNvbG9yXCJcbiAgc2hvdyBcIlxceDFiWzltRVNDWzQ4OzI74p+ocuKfqTvin6hn4p+pO+KfqGLin6ltIFNlbGVjdCBSR0IgYmFja2dyb3VuZCBjb2xvclwiXG4gIHNob3cgXCJFU0NbMzg6Mjrin6g/Pz/in6k64p+ocuKfqTrin6hn4p+pOuKfqGLin6k64p+odW51c2Vk4p+pOuKfqD8/P+KfqTrin6g/Pz/in6ltIFNlbGVjdCBSR0IgZm9yZWdyb3VuZCBjb2xvclwiXG4gIHNob3cgXCJFU0NbNDg6Mjrin6g/Pz/in6k64p+ocuKfqTrin6hn4p+pOuKfqGLin6k64p+odW51c2Vk4p+pOuKfqD8/P+KfqTrin6g/Pz/in6ltIFNlbGVjdCBSR0IgYmFja2dyb3VuZCBjb2xvclwiXG4gIHNob3cgXCJyLCBnLCBiIHZhbHVlcyBhcmUgMCB0byAyNTU7IHRlcm1pbmFsIGlnbm9yZXMgdmFsdWVzIG91dHNpZGUgb2YgdGhhdFwiXG4gIHNob3cgXCJhbHNvIHN1cHBvcnRzIENNWUs7IHRyYWlsaW5nIGNvbG9ucyBjYW4gYmUgb21pdHRlZFwiXG4gIHNob3cgXCJcXHgxYlszODswNTs1MW3igJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbMzg6Mjo6MjU1OjA6MG0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBSR0IgICAgICAgICAgICAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzM4OjI6OjIwMDowOjBtIERFRuKWhCBcXHgxYlswbXh5euKWhCDigJTigJQgUkdCICAgICAgICAgICAgIOKAlOKAlFwiXG4gIHNob3cgXCJhYmPiloRcXHgxYlszODoyOjoxMDA6MDowbSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIFJHQiAgICAgICAgICAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbMzg6Mjo6MTA6MDowbSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIFJHQiAgICAgICAgICAgICDigJTigJRcIlxuICBzaG93IFwiXFx4MWJbMzg7MDU7NTFt4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzM4OjI6OjA6MDowbSBERUbiloQgXFx4MWJbMG14eXriloQg4oCU4oCUIFJHQiAgICAgICAgICAgICDigJTigJRcIlxuICBzaG93IFwiYWJj4paEXFx4MWJbMzg6Mjo6MDowOjEwMG0gREVG4paEIFxceDFiWzBteHl64paEIOKAlOKAlCBSR0IgICAgICAgICAgICAg4oCU4oCUXCJcbiAgc2hvdyBcImFiY+KWhFxceDFiWzM4OjI6OjA6MDoyNTVtIERFRuKWhCBcXHgxYlswbXh5euKWhCDigJTigJQgUkdCICAgICAgICAgICAgIOKAlOKAlFwiXG4gIHJldHVybiBudWxsXG5cbmNvbG9ycyA9XG4gIGJsYWNrOiAgICAgICAgICAgWyAwLCAwLCAwXVxuICBkYXJrc2xhdGVncmF5OiAgIFsgNDcsIDc5LCA3OV1cbiAgZGltZ3JheTogICAgICAgICBbIDEwNSwgMTA1LCAxMDVdXG4gIHNsYXRlZ3JheTogICAgICAgWyAxMTIsIDEyOCwgMTQ0XVxuICBncmF5OiAgICAgICAgICAgIFsgMTI4LCAxMjgsIDEyOF1cbiAgbGlnaHRzbGF0ZWdyYXk6ICBbIDExOSwgMTM2LCAxNTNdXG4gIGRhcmtncmF5OiAgICAgICAgWyAxNjksIDE2OSwgMTY5XVxuICBzaWx2ZXI6ICAgICAgICAgIFsgMTkyLCAxOTIsIDE5Ml1cbiAgbGlnaHRncmF5OiAgICAgICBbIDIxMSwgMjExLCAyMTFdXG4gIGdhaW5zYm9ybzogICAgICAgWyAyMjAsIDIyMCwgMjIwXVxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmRlbW9fMiA9IC0+XG4gIGNsYXNzIFRNUF9lcnJvciBleHRlbmRzIEVycm9yXG4gIHsgY3JlYXRlX2luZmlueXByb3h5LFxuICAgIHN5c19zeW1ib2wsICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfaW5maW5pcHJveHkoKVxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIEFOU0kgPSBuZXcgY2xhc3MgQW5zaVxuICAgICMjI1xuXG4gICAgKiBhcyBmb3IgdGhlIGJhY2tncm91bmQgKCdiZycpLCBvbmx5IGNvbG9ycyBhbmQgbm8gZWZmZWN0cyBjYW4gYmUgc2V0OyBpbiBhZGRpdGlvbiwgdGhlIGJnIGNvbG9yIGNhbiBiZVxuICAgICAgc2V0IHRvIGl0cyBkZWZhdWx0IChvciAndHJhbnNwYXJlbnQnKSwgd2hpY2ggd2lsbCBzaG93IHRoZSB0ZXJtaW5hbCdzIG9yIHRoZSB0ZXJtaW5hbCBlbXVsYXRvcidzXG4gICAgICBjb25maWd1cmVkIGJnIGNvbG9yXG4gICAgKiBhcyBmb3IgdGhlIGZvcmVncm91bmQgKCdmZycpLCBjb2xvcnMgYW5kIGVmZmVjdHMgc3VjaCBhcyBibGlua2luZywgYm9sZCwgaXRhbGljLCB1bmRlcmxpbmUsIG92ZXJsaW5lLFxuICAgICAgc3RyaWtlIGNhbiBiZSBzZXQ7IGluIGFkZGl0aW9uLCB0aGUgY29uZmlndXJlZCB0ZXJtaW5hbCBkZWZhdWx0IGZvbnQgY29sb3IgY2FuIGJlIHNldCwgYW5kIGVhY2ggZWZmZWN0XG4gICAgICBoYXMgYSBkZWRpY2F0ZWQgb2ZmLXN3aXRjaFxuICAgICogbmVhdCB0YWJsZXMgY2FuIGJlIGRyYXduIGJ5IGNvbWJpbmluZyB0aGUgb3ZlcmxpbmUgZWZmZWN0IHdpdGggYOKUgmAgVSsyNTAyICdCb3ggRHJhd2luZyBMaWdodCBWZXJ0aWNhbFxuICAgICAgTGluZSc7IHRoZSByZW5tYXJrYWJsZSBmZWF0dXJlIG9mIHRoaXMgaXMgdGhhdCBpdCBtaW5pbWl6ZXMgc3BhY2luZyBhcm91bmQgY2hhcmFjdGVycyBtZWFuaW5nIGl0J3NcbiAgICAgIHBvc3NpYmxlIHRvIGhhdmUgYWRqYWNlbnQgcm93cyBvZiBjZWxscyBzZXBhcmF0ZWQgZnJvbSB0aGUgbmV4dCByb3cgYnkgYSBib3JkZXIgd2l0aG91dCBoYXZpbmcgdG9cbiAgICAgIHNhY3JpZmljZSBhIGxpbmUgb2YgdGV4dCBqdXN0IHRvIGRyYXcgdGhlIGJvcmRlci5cbiAgICAqIHdoaWxlIHRoZSB0d28gY29sb3IgcGFsYXR0ZXMgaW1wbGllZCBieSB0aGUgc3RhbmRhcmQgWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYXG4gICAgICAqIGJldHRlciB0byBvbmx5IHVzZSBmdWxsIFJHQiB0aGFuIHRvIGZ1enogYXJvdW5kIHdpdGggcGFsZXR0ZXNcbiAgICAgICogYXBwcyB0aGF0IHVzZSBjb2xvcnMgYXQgYWxsIHNob3VsZCBiZSBwcmVwYXJlZCBmb3IgZGFyayBhbmQgYnJpZ2h0IGJhY2tncm91bmRzXG4gICAgICAqIGluIGdlbmVyYWwgYmV0dGVyIHRvIHNldCBmZywgYmcgY29sb3JzIHRoYW4gdG8gdXNlIHJldmVyc2VcbiAgICAgICogYnV0IHJldmVyc2UgYWN0dWFsbHkgZG9lcyBkbyB3aGF0IGl0IHNheXPigJRpdCBzd2FwcyBmZyB3aXRoIGJnIGNvbG9yXG5cbiAgICBcXHgxYlszOW0gZGVmYXVsdCBmZyBjb2xvclxuICAgIFxceDFiWzQ5bSBkZWZhdWx0IGJnIGNvbG9yXG5cbiAgICAjIyNcbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGZnX2NvbG9yX2NvZGVfZnJvbV9yZ2JfZGVjOiAoWyByLCBnLCBiLCBdKSAtPiBcIlxceDFiWzM4OjI6OiN7cn06I3tnfToje2J9bVwiXG4gICAgYmdfY29sb3JfY29kZV9mcm9tX3JnYl9kZWM6IChbIHIsIGcsIGIsIF0pIC0+IFwiXFx4MWJbNDg6Mjo6I3tyfToje2d9OiN7Yn1tXCJcbiAgICBmZ19jb2xvcl9jb2RlX2Zyb21faGV4OiAgICAgKCBoZXggICAgICAgICkgLT4gQGZnX2NvbG9yX2NvZGVfZnJvbV9yZ2JfZGVjIEByZ2JfZnJvbV9oZXggaGV4XG4gICAgYmdfY29sb3JfY29kZV9mcm9tX2hleDogICAgICggaGV4ICAgICAgICApIC0+IEBiZ19jb2xvcl9jb2RlX2Zyb21fcmdiX2RlYyBAcmdiX2Zyb21faGV4IGhleFxuICAgIGZnX2NvbG9yX2NvZGVfZnJvbV9jb2xvcl9uYW1lOiAoIG5hbWUgKSAtPlxuICAgICAgcmdiID0gQGNvbG9yc1sgbmFtZSBdID8gQGNvbG9ycy5mYWxsYmFja1xuICAgICAgcmV0dXJuIEBmZ19jb2xvcl9jb2RlX2Zyb21fcmdiX2RlYyByZ2JcbiAgICByZ2JfZnJvbV9oZXg6ICggaGV4ICkgLT5cbiAgICAgICMjIyBUQUlOVCB1c2UgcHJvcGVyIHR5cGluZyAjIyNcbiAgICAgIHRocm93IG5ldyBFcnJvciBcIs6pX18yNSBleHBlY3RlZCB0ZXh0LCBnb3QgI3tycHIgaGV4fVwiIHVubGVzcyAoIHR5cGVvZiBoZXggKSBpcyAnc3RyaW5nJ1xuICAgICAgdGhyb3cgbmV3IEVycm9yIFwizqlfXzI1IGV4cGVjdGVkICcjJywgZ290ICN7cnByIGhleH1cIiB1bmxlc3MgaGV4LnN0YXJ0c1dpdGggJyMnXG4gICAgICB0aHJvdyBuZXcgRXJyb3IgXCLOqV9fMjUgZXhwZWN0ZWQgdGV4dCBvZiBsZW5ndGggNywgZ290ICN7cnByIGhleH1cIiB1bmxlc3MgaGV4Lmxlbmd0aCBpcyA3XG4gICAgICBbIHIxNiwgZzE2LCBiMTYsIF0gPSBbIGhleFsgMSAuLiAyIF0sIGhleFsgMyAuLiA0IF0sIGhleFsgNSAuLiA2IF0sIF1cbiAgICAgIHJldHVybiBbICggcGFyc2VJbnQgcjE2LCAxNiApLCAoIHBhcnNlSW50IGcxNiwgMTYgKSwgKCBwYXJzZUludCBiMTYsIDE2ICksIF1cblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgY29sb3JzX2Fuc2k6IG51bGxcbiAgICBjb2xvcnM6XG4gICAgICAjIyMgdGh4IHRvOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9IZWxwOkRpc3Rpbmd1aXNoYWJsZV9jb2xvcnMgIyMjXG4gICAgICAjIyMgdGh4IHRvOiBodHRwczovL2dyYXBoaWNkZXNpZ24uc3RhY2tleGNoYW5nZS5jb20vcXVlc3Rpb25zLzM2ODIvd2hlcmUtY2FuLWktZmluZC1hLWxhcmdlLXBhbGV0dGUtc2V0LW9mLWNvbnRyYXN0aW5nLWNvbG9ycy1mb3ItY29sb3JpbmctbWFueS1kICMjI1xuICAgICAgYmxhY2s6ICAgICAgICAgICAgJyMwMDAwMDAnXG4gICAgICB3aGl0ZTogICAgICAgICAgICAnI2ZmZmZmZidcbiAgICAgIGFtZXRoeXN0OiAgICAgICAgICcjZjBhM2ZmJ1xuICAgICAgYmx1ZTogICAgICAgICAgICAgJyMwMDc1ZGMnXG4gICAgICBjYXJhbWVsOiAgICAgICAgICAnIzk5M2YwMCdcbiAgICAgIGRhbXNvbjogICAgICAgICAgICcjNGMwMDVjJ1xuICAgICAgZWJvbnk6ICAgICAgICAgICAgJyMxOTE5MTknXG4gICAgICBmb3Jlc3Q6ICAgICAgICAgICAnIzAwNWMzMSdcbiAgICAgIGdyZWVuOiAgICAgICAgICAgICcjMmJjZTQ4J1xuICAgICAgbGltZTogICAgICAgICAgICAgJyM5ZGNjMDAnXG4gICAgICBxdWFnbWlyZTogICAgICAgICAnIzQyNjYwMCdcbiAgICAgIGhvbmV5ZGV3OiAgICAgICAgICcjZmZjYzk5J1xuICAgICAgaXJvbjogICAgICAgICAgICAgJyM4MDgwODAnXG4gICAgICBqYWRlOiAgICAgICAgICAgICAnIzk0ZmZiNSdcbiAgICAgIGtoYWtpOiAgICAgICAgICAgICcjOGY3YzAwJ1xuICAgICAgbWFsbG93OiAgICAgICAgICAgJyNjMjAwODgnXG4gICAgICBuYXZ5OiAgICAgICAgICAgICAnIzAwMzM4MCdcbiAgICAgIG9ycGltZW50OiAgICAgICAgICcjZmZhNDA1J1xuICAgICAgcGluazogICAgICAgICAgICAgJyNmZmE4YmInXG4gICAgICByZWQ6ICAgICAgICAgICAgICAnI2ZmMDAxMCdcbiAgICAgIHNreTogICAgICAgICAgICAgICcjNWVmMWYyJ1xuICAgICAgdHVycXVvaXNlOiAgICAgICAgJyMwMDk5OGYnXG4gICAgICB2aW9sZXQ6ICAgICAgICAgICAnIzc0MGFmZidcbiAgICAgIHdpbmU6ICAgICAgICAgICAgICcjOTkwMDAwJ1xuICAgICAgdXJhbml1bTogICAgICAgICAgJyNlMGZmNjYnXG4gICAgICB4YW50aGluOiAgICAgICAgICAnI2ZmZmY4MCdcbiAgICAgIHllbGxvdzogICAgICAgICAgICcjZmZlMTAwJ1xuICAgICAgemlubmlhOiAgICAgICAgICAgJyNmZjUwMDUnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGZhbGxiYWNrOiAgICAgICAgIFsgMjU1LCAgMjAsIDE0NywgXVxuXG4gIGZvciBuYW1lLCBjb2RlIG9mIEFOU0kuY29sb3JzXG4gICAgc3dpdGNoIHRydWVcbiAgICAgIHdoZW4gKCB0eXBlb2YgY29kZSApIGlzICdzdHJpbmcnXG4gICAgICAgIHJnYiA9IEFOU0kucmdiX2Zyb21faGV4IGNvZGVcbiAgICAgIHdoZW4gQXJyYXkuaXNBcnJheSBjb2RlXG4gICAgICAgIHJnYiA9IGNvZGVcbiAgICAgIGVsc2UgdGhyb3cgbmV3IEVycm9yIFwizqlfXzI1IGZvcm1hdCBlcnJvcjogI3tycHIgY29kZX1cIlxuICAgIGZnX2NvZGVfc3RhcnQgPSBBTlNJLmZnX2NvbG9yX2NvZGVfZnJvbV9yZ2JfZGVjIHJnYlxuICAgIGJnX2NvZGVfc3RhcnQgPSBBTlNJLmJnX2NvbG9yX2NvZGVfZnJvbV9yZ2JfZGVjIHJnYlxuICAgIGlmIG5hbWUgaXMgJ2JsYWNrJ1xuICAgICAgZmdfYmxhY2sgPSBmZ19jb2RlX3N0YXJ0XG4gICAgZWNobyAnzqlfXzEwJywgZlwiYWJj4paEI3tmZ19jb2RlX3N0YXJ0fSBERUbiloQgXFx4MWJbMG14eXriloQgI3tmZ19ibGFja30je2JnX2NvZGVfc3RhcnR9IERFRuKWhCBcXHgxYlswbXh5euKWhCDigJTigJQgI3tuYW1lfTo8MjBjOyDigJTigJRcIlxuXG4gIGNvbG9yX3pvbmVzID0gKCByZXF1aXJlICcuL2NvbG9yLXpvbmVzJyApLmNvbG9yX3pvbmVzXG4gIGZneiAgICAgICAgID0gJ1xceDFiWzM5bSdcbiAgYmd6ICAgICAgICAgPSAnXFx4MWJbNDltJ1xuICBmb3Igem9uZV9uYW1lXzEsIHpvbmVfY29sb3JzXzEgb2YgY29sb3Jfem9uZXNcbiAgICBlY2hvKClcbiAgICBmb3IgY29sb3JfbmFtZV8xLCBoZXhfMSBvZiB6b25lX2NvbG9yc18xXG4gICAgICBSICAgICA9IGZcIiN7em9uZV9uYW1lXzF9Ojw2YzsgI3tjb2xvcl9uYW1lXzF9OjwxMGM7ICN7aGV4XzF9IFwiXG4gICAgICBmZ2ExICA9IEFOU0kuZmdfY29sb3JfY29kZV9mcm9tX2hleCBoZXhfMVxuICAgICAgZm9yIHpvbmVfbmFtZV8yLCB6b25lX2NvbG9yc18yIG9mIGNvbG9yX3pvbmVzXG4gICAgICAgIFIgKz0gJyAnXG4gICAgICAgIGZvciBjb2xvcl9uYW1lXzIsIGhleF8yIG9mIHpvbmVfY29sb3JzXzJcbiAgICAgICAgICBiZ2EyICA9IEFOU0kuYmdfY29sb3JfY29kZV9mcm9tX2hleCBoZXhfMlxuICAgICAgICAgIFIgICAgKz0gXCIje2ZnYTF9I3tiZ2EyfSBXICN7Zmd6fSN7Ymd6fVwiXG4gICAgICBlY2hvIFJcbiAgICAgICMgZWNobyBycHIgUlxuXG4gIGZnYSAgICAgICA9ICdcXHgxQlszODoyOjozNzo1NDoxMThtJ1xuICBiZ2EgICAgICAgPSAnXFx4MUJbNDg6Mjo6MjU1OjI1NToyNTVtJ1xuICBvdmVybGluZWEgPSAnXFx4MWJbNTNtJ1xuICBvdmVybGluZXogPSAnXFx4MWJbNTVtJ1xuICBibGlua2EgICAgPSAnXFx4MWJbNW0nXG4gIGJsaW5reiAgICA9ICdcXHgxYlsyNW0nXG4gIHJlZCAgICAgICA9ICdcXHgxQlszODoyOjoyMDc6MzI6MzltJ1xuICBiZ3JlZCAgICAgPSAnXFx4MUJbNDg6Mjo6MjA3OjMyOjM5bSdcbiAgZWNobyBcImFiYyAje2ZnYX0je2JnYX0je292ZXJsaW5lYX0gREVG4pSCZ2p54pSCMTIzNCAje292ZXJsaW5len0je2Znen0je2Jnen0geHl6XCJcbiAgZWNobyBcImFiYyAje2ZnYX0je2JnYX0je292ZXJsaW5lYX0gREVGI3tiZ3JlZH3ilIJnannilIIje2JnYX0xMjM0ICN7b3ZlcmxpbmV6fSN7Zmd6fSN7Ymd6fSB4eXpcIlxuICBlY2hvIFwiYWJjICN7ZmdhfSN7YmdhfSN7b3ZlcmxpbmVhfSBERUbilIJnannilIIje3JlZH0xMjM0I3tmZ2F9ICN7b3ZlcmxpbmV6fSN7Zmd6fSN7Ymd6fSB4eXpcIlxuICBlY2hvIFwiYWJjICN7ZmdhfSN7YmdhfSN7b3ZlcmxpbmVhfSBERUbilIIje2JsaW5rYX1nankje2JsaW5ren3ilIIxMjM0ICN7b3ZlcmxpbmV6fSN7Zmd6fSN7Ymd6fSB4eXpcIlxuICBlY2hvIFwiYWJjICN7ZmdhfSN7YmdhfSN7b3ZlcmxpbmVhfSBERUbilIJnannilIIxMjM0ICN7b3ZlcmxpbmV6fSN7Zmd6fSN7Ymd6fSB4eXpcIlxuICBlY2hvKClcbiAgZWNobyBcIlxceDFCWzM5bVxceDFCWzQ5bVxceDFCWzM4OjI6OjM3OjU0OjExOG1cXHgxQls0ODoyOjoyMDc6MzI6MzltIGFiYyBcXHgxYls3bSBhYmMgXFx4MWJbMG1cIlxuICBlY2hvKClcblxuICByZXR1cm4gbnVsbFxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICAjIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICMgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGRlbW9fcHJveHlfYXNfaHRtbF9wcm9kdWNlciwgfVxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGRlbW9fc2hvd19jb2xvcl9lZmZlY3RzKClcbiAgZGVtb18yKClcblxuIl19
//# sourceURL=../src/demo-ansi-colors-and-effects.coffee