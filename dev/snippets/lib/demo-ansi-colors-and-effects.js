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

  SFMODULES = require('./single-file-modules');

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

//# sourceMappingURL=demo-ansi-colors-and-effects.js.map