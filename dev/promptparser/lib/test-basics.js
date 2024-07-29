(function() {
  'use strict';
  var GTNG, GUY, Test, WGUY, alert, debug, demo, echo, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('promptparser/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  WGUY = require('../../../apps/webguy');

  // TMP_types                 = new ( require 'intertype-203.0.0' ).Intertype()
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  // test_mode                 = 'throw_failures'
  // test_mode                 = 'throw_errors'
  // test_mode                 = 'failsafe'

  //===========================================================================================================
  demo = function() {
    var Prompt_file_reader, d, error, i, j, len, len1, parser, prompt, prompts, ref;
    ({Prompt_file_reader} = require('../../../apps/promptparser'));
    prompts = ["[s324w1 some remark] my prompt", "[A++v 212] other prompt", "[A++v 212 but no cigar] other prompt", "[B 2x3 p#3014] Altbau, Versuchsraum, Institut", "[WORDING p#4420]", "[UNSAFE p#38]", "[+++ + p#41]", "[meh p#53]", "[UU]", "[A+v U1UU]", "[A++v 22 but not following directions] \t foo bar   ", "[A++v 22 but not following directions p#7765] \t foo bar.   ", "", "[]", "just a prompt", "     just a prompt", "     [324] a prompt."];
    parser = new Prompt_file_reader();
    whisper('Ω___9', '————————————————————————');
    for (i = 0, len = prompts.length; i < len; i++) {
      prompt = prompts[i];
      whisper('Ω__10', '————————————————————————');
      ref = parser.parse(prompt);
      for (j = 0, len1 = ref.length; j < len1; j++) {
        d = ref[j];
        try {
          switch (true) {
            case d.$key === 'source':
              urge('Ω__11', GUY.trm.reverse(rpr(d.$value)));
              break;
            case d.$stamped:
              whisper('Ω__12', `${d.$key.padEnd(20)} ${rpr(d.value)}`);
              break;
            default:
              info('Ω__13', `${d.$key.padEnd(20)} ${rpr(d.value)}`);
          }
        } catch (error1) {
          error = error1;
          warn('Ω__14', error.message);
          whisper('Ω__15', d);
        }
      }
    }
    return null;
  };

  //.........................................................................................................
  // p = B.as_pipeline()
  // debug 'Ω__16', p.run_and_stop()
  // # T?.eq result, [ [ '*', 'a1', 'a2', 'a3', 'b1', '!b2!', 'b3' ] ]
  // process.exit 111
  demo();

}).call(this);

//# sourceMappingURL=test-basics.js.map