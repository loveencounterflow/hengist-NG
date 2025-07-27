(async function() {
  'use strict';
  var GTNG, GUY, Test, alert, debug, echo, f, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('mirror-github-file-to-local'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  ({f} = require('../../../apps/effstring'));

  //###########################################################################################################

  //===========================================================================================================
  this.mirror_file_tasks = {
    //=========================================================================================================
    basics: function() {
      var i, insert_tag_re, len, match, probe, probes;
      insert_tag_re = /^(?<prefix>.*?)<<<(?<slash>\/?)(?<command>insert)\x20+((?<place>below|above)\x20+)?(?<path>(?:(?:'(?:\\'|[^'])+')|(?:"(?:\\"|[^"])+")|(?:\$[a-zA-Z0-9]+)))>(?<user_eoi>[^>]*)>(?<system_eoi>[^>]*)>(?<suffix>.*?)$/; // insert JS identifier pattern
      //.......................................................................................................
      probes = [`<<<insert below 'brackets.txt'>>>`, `<<<insert below 'brackets.txt'>USER>>`, `<!-- <<</insert below 'brackets.txt'>>SYSTEM> -->`, `<!-- <<</insert below 'my brackets.txt'>>SYSTEM> -->`, `<!-- <<</insert below "my brackets.txt">>SYSTEM> -->`, `<!-- <<</insert below "my \\" brackets.txt">>SYSTEM> -->`, `<!-- <<</insert below 'my \\> brackets.txt'>>SYSTEM> -->`, `<!-- <<</insert below 'my > brackets.txt'>>SYSTEM> -->`, `<!-- <<</insert below $brackets>>SYSTEM> -->`];
      for (i = 0, len = probes.length; i < len; i++) {
        probe = probes[i];
        urge('Ωmf___1', rpr(probe));
        if ((match = probe.match(insert_tag_re)) == null) {
          warn('Ωmf___2', "no match");
          continue;
        }
        help('Ωmf___3', {...match.groups});
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
        throw_on_error: true,
        show_passes: false,
        report_checks: false
      };
      guytest_cfg = {
        throw_on_error: false,
        show_passes: false,
        report_checks: false
      };
      return (new Test(guytest_cfg)).test(this.mirror_file_tasks);
    })();
  }

  // ( new Test guytest_cfg ).test @mirror_file_tasks.builtins

}).call(this);

//# sourceMappingURL=test-basics.js.map