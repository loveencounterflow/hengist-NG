(async function() {
  'use strict';
  var C, GTNG, GUY, Test, alert, debug, echo, f, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('mirror-github-file-to-local'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  ({f} = require('../../../apps/effstring'));

  //===========================================================================================================
  C = (() => {
    var R, bg_from_dec, bg_from_hex, dec_from_hex, fg_from_dec, fg_from_hex, rgb_dec, rgb_hex;
    fg_from_dec = function([r, g, b]) {
      return `\x1b[38:2::${r}:${g}:${b}m`;
    };
    bg_from_dec = function([r, g, b]) {
      return `\x1b[48:2::${r}:${g}:${b}m`;
    };
    dec_from_hex = function(rhx) {
      return [parseInt(rhx.slice(1, 3), 16), parseInt(rhx.slice(3, 5), 16), parseInt(rhx.slice(5, 7), 16)];
    };
    fg_from_hex = function(rhx) {
      return fg_from_dec(dec_from_hex(rhx));
    };
    bg_from_hex = function(rhx) {
      return bg_from_dec(dec_from_hex(rhx));
    };
    //.........................................................................................................
    rgb_dec = {
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
    //.........................................................................................................
    rgb_hex = {
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
      zinnia: '#ff5005'
    };
    //.........................................................................................................
    R = {
      overline1: '\x1b[53m',
      overline0: '\x1b[55m',
      default: '\x1b[39m',
      bg_default: '\x1b[49m',
      reset: '\x1b[0m',
      //.......................................................................................................
      black: fg_from_dec(rgb_dec.black),
      darkslategray: fg_from_dec(rgb_dec.darkslategray),
      dimgray: fg_from_dec(rgb_dec.dimgray),
      slategray: fg_from_dec(rgb_dec.slategray),
      gray: fg_from_dec(rgb_dec.gray),
      lightslategray: fg_from_dec(rgb_dec.lightslategray),
      darkgray: fg_from_dec(rgb_dec.darkgray),
      silver: fg_from_dec(rgb_dec.silver),
      lightgray: fg_from_dec(rgb_dec.lightgray),
      gainsboro: fg_from_dec(rgb_dec.gainsboro),
      //.......................................................................................................
      white: fg_from_hex(rgb_hex.white),
      amethyst: fg_from_hex(rgb_hex.amethyst),
      blue: fg_from_hex(rgb_hex.blue),
      caramel: fg_from_hex(rgb_hex.caramel),
      damson: fg_from_hex(rgb_hex.damson),
      ebony: fg_from_hex(rgb_hex.ebony),
      forest: fg_from_hex(rgb_hex.forest),
      green: fg_from_hex(rgb_hex.green),
      lime: fg_from_hex(rgb_hex.lime),
      quagmire: fg_from_hex(rgb_hex.quagmire),
      honeydew: fg_from_hex(rgb_hex.honeydew),
      iron: fg_from_hex(rgb_hex.iron),
      jade: fg_from_hex(rgb_hex.jade),
      khaki: fg_from_hex(rgb_hex.khaki),
      mallow: fg_from_hex(rgb_hex.mallow),
      navy: fg_from_hex(rgb_hex.navy),
      orpiment: fg_from_hex(rgb_hex.orpiment),
      pink: fg_from_hex(rgb_hex.pink),
      red: fg_from_hex(rgb_hex.red),
      sky: fg_from_hex(rgb_hex.sky),
      turquoise: fg_from_hex(rgb_hex.turquoise),
      violet: fg_from_hex(rgb_hex.violet),
      wine: fg_from_hex(rgb_hex.wine),
      uranium: fg_from_hex(rgb_hex.uranium),
      xanthin: fg_from_hex(rgb_hex.xanthin),
      yellow: fg_from_hex(rgb_hex.yellow),
      zinnia: fg_from_hex(rgb_hex.zinnia),
      //.......................................................................................................
      bg_black: bg_from_dec(rgb_dec.black),
      bg_darkslategray: bg_from_dec(rgb_dec.darkslategray),
      bg_dimgray: bg_from_dec(rgb_dec.dimgray),
      bg_slategray: bg_from_dec(rgb_dec.slategray),
      bg_gray: bg_from_dec(rgb_dec.gray),
      bg_lightslategray: bg_from_dec(rgb_dec.lightslategray),
      bg_darkgray: bg_from_dec(rgb_dec.darkgray),
      bg_silver: bg_from_dec(rgb_dec.silver),
      bg_lightgray: bg_from_dec(rgb_dec.lightgray),
      bg_gainsboro: bg_from_dec(rgb_dec.gainsboro),
      //.......................................................................................................
      bg_white: bg_from_hex(rgb_hex.white),
      bg_amethyst: bg_from_hex(rgb_hex.amethyst),
      bg_blue: bg_from_hex(rgb_hex.blue),
      bg_caramel: bg_from_hex(rgb_hex.caramel),
      bg_damson: bg_from_hex(rgb_hex.damson),
      bg_ebony: bg_from_hex(rgb_hex.ebony),
      bg_forest: bg_from_hex(rgb_hex.forest),
      bg_green: bg_from_hex(rgb_hex.green),
      bg_lime: bg_from_hex(rgb_hex.lime),
      bg_quagmire: bg_from_hex(rgb_hex.quagmire),
      bg_honeydew: bg_from_hex(rgb_hex.honeydew),
      bg_iron: bg_from_hex(rgb_hex.iron),
      bg_jade: bg_from_hex(rgb_hex.jade),
      bg_khaki: bg_from_hex(rgb_hex.khaki),
      bg_mallow: bg_from_hex(rgb_hex.mallow),
      bg_navy: bg_from_hex(rgb_hex.navy),
      bg_orpiment: bg_from_hex(rgb_hex.orpiment),
      bg_pink: bg_from_hex(rgb_hex.pink),
      bg_red: bg_from_hex(rgb_hex.red),
      bg_sky: bg_from_hex(rgb_hex.sky),
      bg_turquoise: bg_from_hex(rgb_hex.turquoise),
      bg_violet: bg_from_hex(rgb_hex.violet),
      bg_wine: bg_from_hex(rgb_hex.wine),
      bg_uranium: bg_from_hex(rgb_hex.uranium),
      bg_xanthin: bg_from_hex(rgb_hex.xanthin),
      bg_yellow: bg_from_hex(rgb_hex.yellow),
      bg_zinnia: bg_from_hex(rgb_hex.zinnia)
    };
    //.........................................................................................................
    return R;
  })();

  //###########################################################################################################

  //===========================================================================================================
  this.mirror_file_tasks = {
    //=========================================================================================================
    basics: function() {
      var bg_color, color, command, error, fmt, i, insert_tag_re, len, match, path, position, prefix, probe, probes, slash, suffix, system_eoi, user_eoi;
      insert_tag_re = /^(?<prefix>.*?)<<<(?<slash>\/?)(?<command>insert|replace)\x20+((?<position>below|above)\x20+)?(?<path>(?:(?:'(?:\\'|[^'])+')|(?:"(?:\\"|[^"])+")|(?:\$[a-zA-Z0-9]+)))>(?<user_eoi>[^>]*)>(?<system_eoi>[^>]*)>(?<suffix>.*?)$/; // insert JS identifier pattern
      //.......................................................................................................
      probes = [`<<<insert below 'brackets.txt'>>>`, `<<<insert below 'brackets.txt'>USER>>`, `<!-- <<</insert below 'brackets.txt'>>SYSTEM> -->`, `<!-- <<</insert below 'my brackets.txt'>>SYSTEM> -->`, `<!-- <<</insert below "my brackets.txt">>SYSTEM> -->`, `<!-- <<</insert below "my " brackets.txt">>SYSTEM> -->`, `<!-- <<</insert below "my \\" brackets.txt">>SYSTEM> -->`, `<!-- <<</insert below 'my \\> brackets.txt'>>SYSTEM> -->`, `<!-- <<</insert below 'my > brackets.txt'>>SYSTEM> -->`, `<!-- <<</insert below $brackets>>SYSTEM> -->`, `# <<<insert $brackets>>>`, `# <<<replace above $header>>>`, `# <<<replace below $footer>>>`];
      //.......................................................................................................
      color = C.black;
      bg_color = C.bg_gainsboro;
      error = `${C.bg_pink} no match ${color + bg_color}`;
      fmt = function(x) {
        switch (x) {
          case '':
            return '';
          case void 0:
            return '';
          case error:
            return x;
          default:
            return rpr(x);
        }
      };
      for (i = 0, len = probes.length; i < len; i++) {
        probe = probes[i];
        // urge 'Ωmf___3', rpr probe
        if ((match = probe.match(insert_tag_re)) != null) {
          ({prefix, slash, command, position, path, user_eoi, system_eoi, suffix} = match.groups);
        } else {
          prefix = error;
          slash = '';
          command = '';
          position = '';
          path = '';
          user_eoi = '';
          system_eoi = '';
          suffix = '';
        }
        echo(f`${color + bg_color}│${C.overline1}${fmt(prefix)}:<10c;│${fmt(slash)}:<10c;│${fmt(command)}:<10c;│${fmt(position)}:<10c;│${fmt(path)}:<30c;│${fmt(user_eoi)}:<10c;│${fmt(system_eoi)}:<10c;│${fmt(suffix)}:<10c;${C.overline0}│${C.default + C.bg_default}`);
      }
      //.......................................................................................................
      return null;
    }
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
      return (new Test(guytest_cfg)).test(this.mirror_file_tasks);
    })();
  }

  // ( new Test guytest_cfg ).test @mirror_file_tasks.builtins

}).call(this);

//# sourceMappingURL=test-basics.js.map