(async function() {
  'use strict';
  var C, GTNG, GUY, SFMODULES, Test, alert, debug, echo, f, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('mirror-github-file-to-local'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  ({f} = require('../../../apps/effstring'));

  SFMODULES = require('../../../apps/bricabrac-single-file-modules');

  ({
    ansi_colors_and_effects: C
  } = SFMODULES.require_ansi_colors_and_effects());

  //###########################################################################################################

  //===========================================================================================================
  this.mirror_file_tasks = {
    //=========================================================================================================
    basics: function() {
      var bg_color, color, command, disposition, error, fmt, i, len, match, match_line, p1, p1_name, pattern_name, patterns, position, prefix, probe, probes, slash, suffix, system_eoi, user_eoi;
      patterns = {
        insert_replace: /^(?<prefix>.*?)<<<(?<slash>\/?)(?<command>insert|replace)\x20+((?<position>below|above)\x20+)?(src\s*=\s*)?(?<p1>(?:(?:'(?:\\'|[^'])+')|(?:"(?:\\"|[^"])+")|(?:\$[a-zA-Z0-9]+)))>(?<user_eoi>[^>]*)>(?<system_eoi>[^>]*)>(?<suffix>.*?)$/, // insert JS identifier pattern
        publish: /^(?<prefix>.*?)<<<(?<slash>\/?)(?<command>publish)\x20+((?<disposition>one|enclosed)\x20+)?((?<position>below|above)\x20+)?(as\s*=\s*)?(?<p1>(?:(?:'\#(?:\\'|[^'])+')|(?:"\#(?:\\"|[^"])+")))>(?<user_eoi>[^>]*)>(?<system_eoi>[^>]*)>(?<suffix>.*?)$/,
        generic: /^(?<prefix>.*?)<<<(?<slash>\/?)(?<p1>.*?)>(?<user_eoi>[^>]*)>(?<system_eoi>[^>]*)>(?<suffix>.*?)$/
      };
      //.......................................................................................................
      probes = [
        /* insert: */
        `<<<insert below 'brackets.txt'>>>`,
        `<<<insert below 'brackets.txt'>USER>>`,
        `<!-- <<</insert 'brackets.txt'>>SYSTEM> -->`,
        `<!-- <<</insert below 'brackets.txt'>>SYSTEM> -->`,
        `<!-- <<</insert below 'my brackets.txt'>>SYSTEM> -->`,
        `<!-- <<</insert below "my brackets.txt">>SYSTEM> -->`,
        `<!-- <<</insert below "my \\" brackets.txt">>SYSTEM> -->`,
        `<!-- <<</insert below 'my \\> brackets.txt'>>SYSTEM> -->`,
        `<!-- <<</insert below 'my > brackets.txt'>>SYSTEM> -->`,
        `<!-- <<</insert below $brackets>>SYSTEM> -->`,
        `<!-- <<</insert below src=$brackets>>> -->`,
        `# <<<insert $brackets>>>`,
        //.....................................................................................................
        /* replace: */
        `# <<<replace above $header>>>`,
        `# <<<replace below $footer>>>`,
        //.....................................................................................................
        /* publish: */
        `# <<<publish '#myname'>>>`,
        `# <<<publish as='#myname'>>>`,
        `# <<<publish above as='#myname'>>>`,
        `# <<<publish enclosed above as='#myname'>>>`,
        `# <<<publish below as='#myname'>>>`,
        `# <<<publish one below as='#myname'>>>`,
        `# <<<publish enclosed below as='#myname'>>>`,
        `# <<<publish enclosed as='#myname'>>>`,
        `# <<</publish enclosed as='#myname'>>>`,
        `# <<<publish enclosed '#myname'>>>`,
        `# <<<publish one '#myname'>>>`,
        `<!--<<<publish enclosed as='#id'>>>-->`,
        //.....................................................................................................
        /* generic: */
        `<!-- <<</insert below "my " brackets.txt">>SYSTEM> -->`,
        `# <<<publish enclosed #myname>>>`,
        `# <<<publish enclosed as=#myname>>>`,
        `# <<<>>>`,
        `# <<< >>>`,
        `# <<<<>>>`,
        `# <<<<<<>>>>>`,
        `<<<publish enclosed as=<name>>>>`,
        `<!--<<<publish enclosed as=<name>>>-->`,
        //.....................................................................................................
        /* no match: */
        ''
      ];
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
      match_line = function(text) {
        var match, pattern, pattern_name;
        for (pattern_name in patterns) {
          pattern = patterns[pattern_name];
          if ((match = probe.match(pattern)) != null) {
            return {pattern_name, match};
          }
        }
        return {
          pattern_name: null,
          match: null
        };
      };
      for (i = 0, len = probes.length; i < len; i++) {
        probe = probes[i];
        // urge 'Ωmf___3', rpr probe
        ({pattern_name, match} = match_line(probe));
        if (match != null) {
          ({prefix, slash, command, disposition, position, p1, user_eoi, system_eoi, suffix} = match.groups);
        } else {
          prefix = error;
          slash = '';
          command = '';
          disposition = '';
          position = '';
          p1 = '';
          user_eoi = '';
          system_eoi = '';
          suffix = '';
        }
        p1_name = {
          insert_replace: 'src',
          publish: 'id',
          generic: 'inner',
          no_match: ''
        }[pattern_name != null ? pattern_name : 'no_match'];
        if (p1_name !== '') {
          p1_name = p1_name + ':';
        }
        echo(f`${color + bg_color}│${C.overline1}${fmt(pattern_name)}:<20c;│${fmt(prefix)}:<10c;│${fmt(slash)}:<10c;│${fmt(command)}:<10c;│${fmt(disposition)}:<10c;│${fmt(position)}:<10c;│${p1_name}:<10c;${fmt(p1)}:<40c;│${fmt(user_eoi)}:<10c;│${fmt(system_eoi)}:<10c;│${fmt(suffix)}:<10c;${C.overline0}│${C.default + C.bg_default}`);
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