(async function() {
  'use strict';
  var GTNG, GUY, Test, WGUY, alert, debug, demo_run_dlg1_interactive, demo_run_dlg1_programmatic, echo, help, info, inspect, log, plain, praise, reverse, rpr, run_dlg1, types, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('diatrieb/test-all'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  WGUY = require('../../../apps/webguy');

  types = new (require('intertype')).Intertype();

  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  //===========================================================================================================
  run_dlg1 = async function(dlg) {
    var value;
    dlg.intro("create-my-app");
    while (true) {
      //.........................................................................................................
      if (value = (await dlg.confirm({
        ref: 'q1',
        message: "do you want to loop?"
      }))) {
        debug('Ω___5', rpr(value));
        continue;
      }
      break;
    }
    await dlg.text({
      ref: 'q2',
      message: "please enter text"
    });
    await (async() => {      //.........................................................................................................
      var cfg, project_type;
      cfg = {
        ref: 'q3',
        message: "Pick a project type.",
        options: [
          {
            value: 'ts',
            label: 'TypeScript'
          },
          {
            value: 'js',
            label: 'JavaScript'
          },
          {
            value: 'coffee',
            label: 'CoffeeScript',
            hint: 'yes!'
          }
        ]
      };
      project_type = (await dlg.select(cfg));
      return null;
    })();
    await (async() => {      //.........................................................................................................
      var cfg, spinner, tools;
      spinner = dlg.get_spinner();
      spinner.start("asking questions");
      cfg = {
        ref: null, // intentionally left out
        message: "Select additional tools.",
        options: [
          {
            value: 'eslint',
            label: 'ESLint',
            hint: 'recommended'
          },
          {
            value: 'prettier',
            label: 'Prettier'
          },
          {
            value: 'gh-action',
            label: 'GitHub Action'
          }
        ],
        required: false
      };
      tools = (await dlg.multiselect(cfg));
      spinner.stop("thanks!");
      return null;
    })();
    //.........................................................................................................
    dlg.outro("You're all set!");
    //.........................................................................................................
    return dlg.results;
  };

  //===========================================================================================================
  demo_run_dlg1_interactive = async function() {
    var Interactive_dialog;
    ({Interactive_dialog} = require('../../../apps/diatribe'));
    await run_dlg1(new Interactive_dialog());
    return null;
  };

  //-----------------------------------------------------------------------------------------------------------
  demo_run_dlg1_programmatic = async function() {
    var Programmatic_dialog, dlg, error, errors, ref, ref1, step, steps;
    ({Programmatic_dialog, errors} = require('../../../apps/diatribe'));
    steps = {
      q1: ['confirm', false],
      q2: ['text', "helo"],
      q3: ['select', 'coffee'],
      $q4: ['multiselect', ['prettier']],
      whatever: ['select', 'js']
    };
    dlg = new Programmatic_dialog(steps);
    try {
      await run_dlg1(dlg);
    } catch (error1) {
      error = error1;
      if (!(error instanceof errors.Dialog_error)) {
        throw error;
      }
      warn('Ω___8', reverse(bold(error.message)));
    }
    dlg.finish();
    ref1 = dlg._act_steps;
    for (ref in ref1) {
      step = ref1[ref];
      if (step instanceof errors.Dialog_failure) {
        warn(ref, step);
      } else {
        help(ref, step);
      }
    }
    info(dlg.results);
    return null;
  };

  //###########################################################################################################

  //===========================================================================================================
  this.diatribe_tasks = {
    //---------------------------------------------------------------------------------------------------------
    interface: function() {
      var DIATRIBE, Ωit___2;
      DIATRIBE = require('../../../apps/diatribe');
      this.eq((Ωit___2 = function() {
        return true;
      }), true);
      //.......................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (async() => {
      (new Test({
        throw_on_error: false
      })).test(this.diatribe_tasks);
      // await demo_run_dlg1_interactive()
      return (await demo_run_dlg1_programmatic());
    })();
  }

}).call(this);

//# sourceMappingURL=test-all.js.map