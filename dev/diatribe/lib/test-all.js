(async function() {
  'use strict';
  var GTNG, GUY, Test, WGUY, alert, bold, debug, demo_from_docs, demo_run_dlg1_interactive, demo_run_dlg1_programmatic, echo, help, info, inspect, log, plain, praise, reverse, rpr, run_dlg1, types, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('diatribe/test-all'));

  ({rpr, inspect, echo, bold, reverse, log} = GUY.trm);

  WGUY = require('../../../apps/webguy');

  types = new (require('intertype')).Intertype();

  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  //===========================================================================================================
  run_dlg1 = async function(dlg = null) {
    var value;
    if (dlg == null) {
      dlg = new (require('../../../apps/diatribe')).Interactive_dialog();
    }
    dlg.intro("create-my-app");
    while (true) {
      //.........................................................................................................
      if (value = (await dlg.confirm({
        ref: 'q1',
        message: "do you want to loop?"
      }))) {
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
      var cfg, tools;
      // spinner = dlg.get_spinner()
      // spinner.start "asking questions"
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
      // spinner.stop "thanks!"
      return null;
    })();
    //.........................................................................................................
    dlg.outro("You're all set!");
    dlg.finish();
    //.........................................................................................................
    return dlg;
  };

  //===========================================================================================================
  demo_run_dlg1_interactive = async function() {
    var settings;
    settings = (await run_dlg1());
    info('Ω___1', settings);
    return null;
  };

  //-----------------------------------------------------------------------------------------------------------
  demo_run_dlg1_programmatic = async function() {
    var Programmatic_dialog, dlg, error, errors, exp_steps, ref, ref1, step;
    ({Programmatic_dialog, errors} = require('../../../apps/diatribe'));
    exp_steps = {
      q1: {
        modal: 'confirm',
        answer: false
      },
      q2: {
        modal: 'text',
        answer: "helo"
      },
      q3: {
        modal: 'select',
        answer: 'coffee'
      },
      $q4: {
        modal: 'multiselect',
        answer: ['prettier']
      },
      whatever: {
        modal: 'select',
        answer: 'js'
      }
    };
    dlg = new Programmatic_dialog(exp_steps);
    try {
      await run_dlg1(dlg);
    } catch (error1) {
      error = error1;
      if (!(error instanceof errors.Dialog_error)) {
        throw error;
      }
      warn('Ω___2', reverse(bold(error.message)));
    }
    ref1 = dlg.act_steps;
    for (ref in ref1) {
      step = ref1[ref];
      if (step instanceof errors.Dialog_failure) {
        warn('Ω___3', ref, step);
      } else {
        help('Ω___4', ref, step);
      }
    }
    info(dlg.results);
    return null;
  };

  //-----------------------------------------------------------------------------------------------------------
  demo_from_docs = async function() {
    var Interactive_dialog, Programmatic_dialog, run_my_dialog;
    ({Interactive_dialog, Programmatic_dialog} = require('../../../apps/diatribe'));
    run_my_dialog = async function(dlg = null) {
      var want_pineapple, want_pizza;
      // Provide default implementation if none given:
      if (dlg == null) {
        dlg = new Interactive_dialog();
      }
      //.........................................................................................................
      // Start running user interaction:
      want_pizza = (await dlg.confirm({
        ref: 'want_pizza',
        message: "Do you want pizza?"
      }));
      //.........................................................................................................
      // Depending on answer, decide what to do:
      if (want_pizza) {
        console.log("You want pizza. Good!");
        //.......................................................................................................
        // If so inclined, we could perform some actions here that only take place when the answer was `Yes`; in
        // this example, we only ask a conditional follow-up question for the toppings.
        //.......................................................................................................
        want_pineapple = (await dlg.confirm({
          ref: 'want_pineapple',
          message: "Do you want pinapple?"
        }));
      } else {
        console.log("Maybe next time.");
      }
      //.........................................................................................................
      // It is mandatory to call `dlg.finish()` to signal completion:
      dlg.finish();
      //.........................................................................................................
      // Return what is most useful to you:
      return dlg;
    };
    await (async() => {      //---------------------------------------------------------------------------------------------------------
      // urge 'Ω___5', await run_my_dialog()
      var dlg, exp_steps, i, j, len, len1, ref1, step;
      whisper('Ω___6', '————————————————————————————————————————');
      exp_steps = [
        {
          ref: 'want_pizza',
          modal: 'confirm',
          answer: false
        }
      ];
      for (i = 0, len = exp_steps.length; i < len; i++) {
        step = exp_steps[i];
        info('Ω___7', "exp_step", step);
      }
      dlg = (await run_my_dialog(new Programmatic_dialog(exp_steps)));
      help('Ω___8', "act_steps", dlg.act_steps);
      ref1 = dlg.act_steps;
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        step = ref1[j];
        help('Ω___9', "act_step", step);
      }
      return null;
    })();
    await (async() => {      //.........................................................................................................
      var dlg, error, exp_steps, i, len, step;
      whisper('Ω__10', '————————————————————————————————————————');
      try {
        exp_steps = [
          {
            ref: 'want_pizza',
            modal: 'confirm',
            answer: true
          }
        ];
        for (i = 0, len = exp_steps.length; i < len; i++) {
          step = exp_steps[i];
          info('Ω__11', "exp_step", step);
        }
        dlg = (await run_my_dialog(new Programmatic_dialog(exp_steps)));
      } catch (error1) {
        error = error1;
        warn('Ω__12', error.message);
      }
      return null;
    })();
    await (async() => {      //.........................................................................................................
      var dlg, exp_steps, i, j, len, len1, ref1, step;
      whisper('Ω__13', '————————————————————————————————————————');
      exp_steps = [
        {
          ref: 'want_pizza',
          modal: 'confirm',
          answer: true
        },
        {
          ref: 'want_pineapple',
          modal: 'confirm',
          answer: false
        }
      ];
      for (i = 0, len = exp_steps.length; i < len; i++) {
        step = exp_steps[i];
        info('Ω__14', "exp_step", step);
      }
      dlg = (await run_my_dialog(new Programmatic_dialog(exp_steps)));
      help('Ω__15', "act_steps", dlg.act_steps);
      ref1 = dlg.act_steps;
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        step = ref1[j];
        help('Ω__16', "act_step", step);
      }
      return null;
    })();
    await (async() => {      //.........................................................................................................
      var dlg, exp_steps, i, j, len, len1, ref1, step;
      whisper('Ω__17', '————————————————————————————————————————');
      exp_steps = [
        {
          ref: 'want_pizza',
          modal: 'confirm',
          answer: false
        },
        {
          ref: 'want_pineapple',
          modal: 'confirm',
          answer: false
        }
      ];
      for (i = 0, len = exp_steps.length; i < len; i++) {
        step = exp_steps[i];
        info('Ω__18', "exp_step", step);
      }
      dlg = (await run_my_dialog(new Programmatic_dialog(exp_steps)));
      ref1 = dlg.act_steps;
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        step = ref1[j];
        help('Ω__19', "act_step", step);
      }
      return null;
    })();
    //.........................................................................................................
    return null;
  };

  //###########################################################################################################

  //===========================================================================================================
  this.diatribe_tasks = {
    //---------------------------------------------------------------------------------------------------------
    with_underrun_failure: async function() {
      var Programmatic_dialog, act_steps, dlg, error, errors, exp_steps, Ω__21, Ω__22, Ω__23;
      //.......................................................................................................
      ({Programmatic_dialog, errors} = require('../../../apps/diatribe'));
      exp_steps = [
        {
          ref: 'q1',
          modal: 'confirm',
          answer: false
        },
        {
          ref: 'q2',
          modal: 'text',
          answer: "helo"
        },
        {
          ref: 'q3',
          modal: 'select',
          answer: 'coffee'
        },
        {
          ref: '$q4',
          modal: 'multiselect',
          answer: ['prettier']
        },
        {
          ref: 'whatever',
          modal: 'select',
          answer: 'js'
        }
      ];
      act_steps = [
        {
          ref: 'q1',
          modal: 'confirm',
          answer: false
        },
        {
          ref: 'q2',
          modal: 'text',
          answer: 'helo'
        },
        {
          ref: 'q3',
          modal: 'select',
          answer: 'coffee'
        },
        {
          ref: '$q4',
          modal: 'multiselect',
          answer: ['prettier']
        },
        {
          message: 'finished too early: act 4 exp 5'
        }
      ];
      //.......................................................................................................
      /* Underrun_failure */      dlg = new Programmatic_dialog(exp_steps);
      try {
        await run_dlg1(dlg);
      } catch (error1) {
        error = error1;
        if (!(error instanceof errors.Dialog_error)) {
          throw error;
        }
        warn('Ω__20', reverse(bold(error.message)));
      }
      //.......................................................................................................
      this.eq((Ω__21 = function() {
        return dlg.act_steps;
      }), act_steps);
      this.eq((Ω__22 = function() {
        return dlg.act_steps[4] instanceof errors.Underrun_failure;
      }), true);
      this.eq((Ω__23 = function() {
        return dlg.results;
      }), {
        q1: false,
        q2: 'helo',
        q3: 'coffee',
        '$q4': ['prettier']
      });
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    with_overrun_failure: async function() {
      var Programmatic_dialog, act_steps, dlg, error, errors, exp_steps, Ω__25, Ω__26, Ω__27;
      //.......................................................................................................
      ({Programmatic_dialog, errors} = require('../../../apps/diatribe'));
      exp_steps = [
        {
          ref: 'q1',
          modal: 'confirm',
          answer: false
        },
        {
          ref: 'q2',
          modal: 'text',
          answer: "helo"
        },
        {
          ref: 'q3',
          modal: 'select',
          answer: 'coffee'
        }
      ];
      act_steps = [
        {
          ref: 'q1',
          modal: 'confirm',
          answer: false
        },
        {
          ref: 'q2',
          modal: 'text',
          answer: 'helo'
        },
        {
          ref: 'q3',
          modal: 'select',
          answer: 'coffee'
        },
        {
          message: 'emergency halt, running too long: act 4 exp 3'
        }
      ];
      //.......................................................................................................
      /* Overrun_failure */      dlg = new Programmatic_dialog(exp_steps);
      try {
        await run_dlg1(dlg);
      } catch (error1) {
        error = error1;
        if (!(error instanceof errors.Dialog_error)) {
          throw error;
        }
        warn('Ω__24', reverse(bold(error.message)));
      }
      //.......................................................................................................
      this.eq((Ω__25 = function() {
        return dlg.act_steps;
      }), act_steps);
      this.eq((Ω__26 = function() {
        return dlg.act_steps[3] instanceof errors.Overrun_failure;
      }), true);
      this.eq((Ω__27 = function() {
        return dlg.results;
      }), {
        q1: false,
        q2: 'helo',
        q3: 'coffee'
      });
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    without_failure: async function() {
      var Programmatic_dialog, errors, run_dlg;
      ({Programmatic_dialog, errors} = require('../../../apps/diatribe'));
      //.......................................................................................................
      run_dlg = async(dlg, act_steps, results) => {
        var error, Ω__31, Ω__32;
        try {
          await run_dlg1(dlg);
        } catch (error1) {
          error = error1;
          if (!(error instanceof errors.Dialog_error)) {
            throw error;
          }
          warn('Ω__28', reverse(bold(error.message)));
        }
        info('Ω__29', "act_steps:  ", dlg.act_steps);
        urge('Ω__30', "results:     ", dlg.results);
        this.eq((Ω__31 = function() {
          return dlg.act_steps;
        }), act_steps);
        this.eq((Ω__32 = function() {
          return dlg.results;
        }), results);
        return dlg;
      };
      await (async() => {        //.......................................................................................................
        var act_steps, dlg, exp_steps;
        exp_steps = [
          {
            ref: 'q1',
            modal: 'confirm',
            answer: false
          },
          {
            ref: 'q2',
            modal: 'text',
            answer: "helo"
          },
          {
            ref: 'q3',
            modal: 'select',
            answer: 'coffee'
          },
          {
            ref: '$q4',
            modal: 'multiselect',
            answer: ['prettier']
          }
        ];
        act_steps = exp_steps;
        dlg = (await run_dlg(new Programmatic_dialog(exp_steps), act_steps, {
          q1: false,
          q2: 'helo',
          q3: 'coffee',
          '$q4': ['prettier']
        }));
        return null;
      })();
      await (async() => {        //.......................................................................................................
        var act_steps, dlg, exp_steps, Ω__33;
        exp_steps = [
          {
            ref: 'q1',
            modal: 'confirm',
            answer: false
          },
          {
            ref: 'q2',
            modal: 'text',
            answer: "helo"
          },
          {
            ref: 'q_wrong',
            modal: 'select',
            answer: 'coffee'
          },
          {
            ref: '$q4',
            modal: 'multiselect',
            answer: ['prettier']
          }
        ];
        act_steps = [
          {
            ref: 'q1',
            modal: 'confirm',
            answer: false
          },
          {
            ref: 'q2',
            modal: 'text',
            answer: 'helo'
          },
          {
            message: "step#2: act 'q3', exp 'q_wrong'"
          },
          {
            /* Misstep_failure */
          ref: '$q4',
            modal: 'multiselect',
            answer: ['prettier']
          }
        ];
        dlg = (await run_dlg(new Programmatic_dialog(exp_steps), act_steps, {
          q1: false,
          q2: 'helo',
          q3: 'coffee',
          '$q4': ['prettier']
        }));
        this.eq((Ω__33 = function() {
          return dlg.act_steps[2] instanceof errors.Misstep_failure;
        }), true);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    recognize_wrong_step: async function() {
      var Programmatic_dialog, act_steps, dlg, errors, exp_steps, Ω__34, Ω__35, Ω__36;
      //.......................................................................................................
      ({Programmatic_dialog, errors} = require('../../../apps/diatribe'));
      exp_steps = [
        {
          ref: 'q1',
          modal: 'confirm',
          answer: false
        },
        {
          ref: 'q2',
          modal: 'text',
          answer: "helo"
        },
        {
          ref: 'wrong',
          modal: 'select',
          answer: 'coffee'
        },
        {
          ref: '$q4',
          modal: 'multiselect',
          answer: ['prettier']
        }
      ];
      act_steps = [
        {
          ref: 'q1',
          modal: 'confirm',
          answer: false
        },
        {
          ref: 'q2',
          modal: 'text',
          answer: 'helo'
        },
        {
          message: "step#2: act 'q3', exp 'wrong'"
        },
        {
          /* Misstep_failure */
        ref: '$q4',
          modal: 'multiselect',
          answer: ['prettier']
        }
      ];
      //.......................................................................................................
      dlg = new Programmatic_dialog(exp_steps);
      await run_dlg1(dlg);
      //.......................................................................................................
      this.eq((Ω__34 = function() {
        return dlg.act_steps;
      }), act_steps);
      this.eq((Ω__35 = function() {
        return dlg.act_steps[2] instanceof errors.Misstep_failure;
      }), true);
      this.eq((Ω__36 = function() {
        return dlg.results;
      }), {
        q1: false,
        q2: 'helo',
        q3: 'coffee',
        '$q4': ['prettier']
      });
      //.......................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (async() => {
      await (new Test({
        throw_on_error: true
      })).async_test({
        // with_underrun_failure:  @diatribe_tasks.with_underrun_failure
        // with_overrun_failure:   @diatribe_tasks.with_overrun_failure
        without_failure: this.diatribe_tasks.without_failure
      });
      // await demo_run_dlg1_interactive()
      whisper('Ω__37', '————————————————————————————————————————');
      await (new Test({
        throw_on_error: true
      })).async_test(this.diatribe_tasks);
      whisper('Ω__38', '————————————————————————————————————————');
      // await demo_run_dlg1_programmatic()
      await demo_from_docs();
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=test-all.js.map