(async function() {
  'use strict';
  var C, GTNG, GUY, Test, alert, blue, bold, colors, debug, demo_show_color_effects, echo, f, gold, grey, help, info, inspect, log, nfa, plain, praise, red, reverse, rpr, urge, warn, whisper, white, write;

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

  // SFMODULES                 = require './single-file-modules'

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
  if (module === require.main) {
    await (() => {
      // guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
      // guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
      // ( new Test guytest_cfg ).test { demo_proxy_as_html_producer, }
      //.........................................................................................................
      return demo_show_color_effects();
    })();
  }

}).call(this);

//# sourceMappingURL=demo-ansi-colors-and-effects.js.map