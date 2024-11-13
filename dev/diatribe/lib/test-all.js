(async function() {
  'use strict';
  var GTNG, GUY, Test, WGUY, alert, bold, debug, demo_run_dlg1_interactive, demo_run_dlg1_programmatic, echo, help, info, inspect, log, plain, praise, reverse, rpr, run_dlg1, types, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('diatrieb/test-all'));

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
    with_underrun_failure: async function() {
      var Programmatic_dialog, dlg, error, errors, exp_steps, Ωit___4, Ωit___5, Ωit___6;
      //.......................................................................................................
      ({Programmatic_dialog, errors} = require('../../../apps/diatribe'));
      exp_steps = [
        {
          exp_ref: 'q1',
          exp_modal: 'confirm',
          answer: false
        },
        {
          exp_ref: 'q2',
          exp_modal: 'text',
          answer: "helo"
        },
        {
          exp_ref: 'q3',
          exp_modal: 'select',
          answer: 'coffee'
        },
        {
          exp_ref: '$q4',
          exp_modal: 'multiselect',
          answer: ['prettier']
        },
        {
          exp_ref: 'whatever',
          exp_modal: 'select',
          answer: 'js'
        }
      ];
      dlg = new Programmatic_dialog(exp_steps);
      try {
        await run_dlg1(dlg);
      } catch (error1) {
        error = error1;
        if (!(error instanceof errors.Dialog_error)) {
          throw error;
        }
        warn('Ω___3', reverse(bold(error.message)));
      }
      //.......................................................................................................
      this.eq((Ωit___4 = function() {
        return dlg.act_steps;
      }), {
        q1: 'confirm',
        q2: 'text',
        q3: 'select',
        '$q4': 'multiselect',
        '$finish': {
          message: 'finished too early: act 4 exp 5'
        }
      });
      this.eq((Ωit___5 = function() {
        return dlg.act_steps.$finish instanceof errors.Underrun_failure;
      }), true);
      this.eq((Ωit___6 = function() {
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
      var Programmatic_dialog, dlg, error, errors, exp_steps, Ωit__10, Ωit___8, Ωit___9;
      //.......................................................................................................
      ({Programmatic_dialog, errors} = require('../../../apps/diatribe'));
      exp_steps = [
        {
          exp_ref: 'q1',
          exp_modal: 'confirm',
          answer: false
        },
        {
          exp_ref: 'q2',
          exp_modal: 'text',
          answer: "helo"
        },
        {
          exp_ref: 'q3',
          exp_modal: 'select',
          answer: 'coffee'
        }
      ];
      dlg = new Programmatic_dialog(exp_steps);
      try {
        await run_dlg1(dlg);
      } catch (error1) {
        error = error1;
        if (!(error instanceof errors.Dialog_error)) {
          throw error;
        }
        warn('Ω___7', reverse(bold(error.message)));
      }
      //.......................................................................................................
      this.eq((Ωit___8 = function() {
        return dlg.act_steps;
      }), {
        q1: 'confirm',
        q2: 'text',
        q3: 'select',
        '$q4': {
          message: 'emergency halt, running too long: act 4 exp 3'
        }
      });
      this.eq((Ωit___9 = function() {
        return dlg.act_steps.$q4 instanceof errors.Overrun_failure;
      }), true);
      this.eq((Ωit__10 = function() {
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
        var error, Ωit__14, Ωit__15;
        try {
          await run_dlg1(dlg);
        } catch (error1) {
          error = error1;
          if (!(error instanceof errors.Dialog_error)) {
            throw error;
          }
          warn('Ω__11', reverse(bold(error.message)));
        }
        info('Ω__12', "act_steps:  ", dlg.act_steps);
        urge('Ω__13', "results:     ", dlg.results);
        this.eq((Ωit__14 = function() {
          return dlg.act_steps;
        }), act_steps);
        this.eq((Ωit__15 = function() {
          return dlg.results;
        }), results);
        return dlg;
      };
      await (async() => {        //.......................................................................................................
        var dlg, exp_steps;
        exp_steps = [
          {
            exp_ref: 'q1',
            exp_modal: 'confirm',
            answer: false
          },
          {
            exp_ref: 'q2',
            exp_modal: 'text',
            answer: "helo"
          },
          {
            exp_ref: 'q3',
            exp_modal: 'select',
            answer: 'coffee'
          },
          {
            exp_ref: '$q4',
            exp_modal: 'multiselect',
            answer: ['prettier']
          }
        ];
        dlg = (await run_dlg(new Programmatic_dialog(exp_steps), {
          q1: 'confirm',
          q2: 'text',
          q3: 'select',
          '$q4': 'multiselect'
        }, {
          q1: false,
          q2: 'helo',
          q3: 'coffee',
          '$q4': ['prettier']
        }));
        return null;
      })();
      await (async() => {        //.......................................................................................................
        var dlg, exp_steps, Ωit__17;
        exp_steps = [
          {
            exp_ref: 'q1',
            exp_modal: 'confirm',
            answer: false
          },
          {
            exp_ref: 'q2',
            exp_modal: 'text',
            answer: "helo"
          },
          {
            exp_ref: 'q_wrong',
            exp_modal: 'select',
            answer: 'coffee'
          },
          {
            exp_ref: '$q4',
            exp_modal: 'multiselect',
            answer: ['prettier']
          }
        ];
        dlg = (await run_dlg(new Programmatic_dialog(exp_steps), {
          q1: 'confirm',
          q2: 'text',
          q3: {
            message: "step#2: act 'q3', exp 'q_wrong'"
          },
          '$q4': 'multiselect'
        }, {
          q1: false,
          q2: 'helo',
          q3: 'coffee',
          '$q4': ['prettier']
        }));
        this.eq((Ωit__17 = function() {
          return dlg.act_steps.q3 instanceof errors.Misstep_failure;
        }), true);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    recognize_wrong_step: async function() {
      var Programmatic_dialog, dlg, errors, exp_steps, Ωit__18, Ωit__19;
      //.......................................................................................................
      ({Programmatic_dialog, errors} = require('../../../apps/diatribe'));
      exp_steps = {
        q1: ['confirm', false],
        q2: ['text', "helo"],
        q3: ['select', 'coffee'],
        $q4: ['multiselect', ['prettier']]
      };
      // whatever:   [ 'select',       'js',         ]
      dlg = new Programmatic_dialog(exp_steps);
      await run_dlg1(dlg);
      //.......................................................................................................
      this.eq((Ωit__18 = function() {
        return dlg.act_steps;
      }), {
        q1: 'confirm',
        q2: 'text',
        q3: 'select',
        '$q4': 'multiselect'
      });
      this.eq((Ωit__19 = function() {
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
      return (await (new Test({
        throw_on_error: true
      })).async_test({
        // with_underrun_failure:  @diatribe_tasks.with_underrun_failure
        // with_overrun_failure:   @diatribe_tasks.with_overrun_failure
        without_failure: this.diatribe_tasks.without_failure
      }));
    })();
  }

  // await demo_run_dlg1_interactive()
// await demo_run_dlg1_programmatic()

}).call(this);

//# sourceMappingURL=test-all.js.map