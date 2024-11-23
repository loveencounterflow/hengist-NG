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
    var Programmatic_dialog, dlg, errors, exp_steps, ref, ref1, step;
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
    await run_dlg1(dlg);
    ref1 = dlg.act_steps;
    for (ref in ref1) {
      step = ref1[ref];
      if (step instanceof errors.Dialog_failure) {
        warn('Ω___2', ref, step);
      } else {
        help('Ω___3', ref, step);
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
      // urge 'Ω___4', await run_my_dialog()
      var dlg, exp_steps, i, j, len, len1, ref1, step;
      whisper('Ω___5', '————————————————————————————————————————');
      exp_steps = [
        {
          ref: 'want_pizza',
          modal: 'confirm',
          answer: false
        }
      ];
      for (i = 0, len = exp_steps.length; i < len; i++) {
        step = exp_steps[i];
        info('Ω___6', "exp_step", step);
      }
      dlg = (await run_my_dialog(new Programmatic_dialog(exp_steps)));
      help('Ω___7', "act_steps", dlg.act_steps);
      ref1 = dlg.act_steps;
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        step = ref1[j];
        help('Ω___8', "act_step", step);
      }
      return null;
    })();
    await (async() => {      //.........................................................................................................
      var dlg, exp_steps, i, len, step;
      whisper('Ω___9', '————————————————————————————————————————');
      exp_steps = [
        {
          ref: 'want_pizza',
          modal: 'confirm',
          answer: true
        }
      ];
      for (i = 0, len = exp_steps.length; i < len; i++) {
        step = exp_steps[i];
        info('Ω__10', "exp_step", step);
      }
      dlg = (await run_my_dialog(new Programmatic_dialog(exp_steps)));
      return null;
    })();
    await (async() => {      //.........................................................................................................
      var dlg, exp_steps, i, j, len, len1, ref1, step;
      whisper('Ω__11', '————————————————————————————————————————');
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
        info('Ω__12', "exp_step", step);
      }
      dlg = (await run_my_dialog(new Programmatic_dialog(exp_steps)));
      help('Ω__13', "act_steps", dlg.act_steps);
      ref1 = dlg.act_steps;
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        step = ref1[j];
        help('Ω__14', "act_step", step);
      }
      return null;
    })();
    await (async() => {      //.........................................................................................................
      var dlg, exp_steps, i, j, len, len1, ref1, step;
      whisper('Ω__15', '————————————————————————————————————————');
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
        info('Ω__16', "exp_step", step);
      }
      dlg = (await run_my_dialog(new Programmatic_dialog(exp_steps)));
      ref1 = dlg.act_steps;
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        step = ref1[j];
        help('Ω__17', "act_step", step);
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
      var Programmatic_dialog, act_steps, dlg, errors, exp_steps, Ω__18, Ω__19, Ω__20;
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
      await run_dlg1(dlg);
      //.......................................................................................................
      this.eq((Ω__18 = function() {
        return dlg.act_steps;
      }), act_steps);
      this.eq((Ω__19 = function() {
        return dlg.act_steps[4] instanceof errors.Underrun_failure;
      }), true);
      this.eq((Ω__20 = function() {
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
      var Programmatic_dialog, act_steps, dlg, errors, exp_steps, Ω__21, Ω__22, Ω__23;
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
      await run_dlg1(dlg);
      //.......................................................................................................
      this.eq((Ω__21 = function() {
        return dlg.act_steps;
      }), act_steps);
      this.eq((Ω__22 = function() {
        return dlg.act_steps[3] instanceof errors.Overrun_failure;
      }), true);
      this.eq((Ω__23 = function() {
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
        var Ω__26, Ω__27;
        await run_dlg1(dlg);
        info('Ω__24', "act_steps:  ", dlg.act_steps);
        urge('Ω__25', "results:     ", dlg.results);
        this.eq((Ω__26 = function() {
          return dlg.act_steps;
        }), act_steps);
        this.eq((Ω__27 = function() {
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
        var act_steps, dlg, exp_steps, Ω__28;
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
        this.eq((Ω__28 = function() {
          return dlg.act_steps[2] instanceof errors.Misstep_failure;
        }), true);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    recognize_wrong_step: async function() {
      var Programmatic_dialog, act_steps, dlg, errors, exp_steps, Ω__29, Ω__30, Ω__31;
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
      this.eq((Ω__29 = function() {
        return dlg.act_steps;
      }), act_steps);
      this.eq((Ω__30 = function() {
        return dlg.act_steps[2] instanceof errors.Misstep_failure;
      }), true);
      this.eq((Ω__31 = function() {
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
    overrun_failure_return_value: async function() {
      var Programmatic_dialog, act_steps, errors;
      ({Programmatic_dialog, errors} = require('../../../apps/diatribe'));
      act_steps = [
        {
          ref: 'continue',
          modal: 'confirm',
          answer: true
        },
        {
          ref: 'name',
          modal: 'text',
          answer: "Alice"
        }
      ];
      await (async() => {        //.......................................................................................................
        var conversation, dlg, exp_steps, Ω__33, Ω__34, Ω__35;
        conversation = (dlg) => {
          var Ω__32;
          this.eq((Ω__32 = function() {
            return dlg.finish();
          }), false);
          return dlg;
        };
        dlg = (await conversation(new Programmatic_dialog(exp_steps = act_steps)));
        this.eq((Ω__33 = function() {
          return dlg.results;
        }), {});
        this.eq((Ω__34 = function() {
          return dlg.act_steps;
        }), [
          {
            message: 'finished too early: act 0 exp 2'
          }
        ]);
        this.eq((Ω__35 = function() {
          return dlg.act_steps[0] instanceof errors.Underrun_failure;
        }), true);
        return null;
      })();
      await (async() => {        //.......................................................................................................
        var conversation, dlg, exp_steps, Ω__39, Ω__40;
        conversation = async(dlg) => {
          var cont, name, Ω__36, Ω__37, Ω__38;
          cont = (await dlg.confirm({
            ref: 'continue',
            message: "do you want to continue?"
          }));
          name = (await dlg.text({
            ref: 'name',
            message: "what is your name?"
          }));
          this.eq((Ω__36 = function() {
            return cont;
          }), true);
          this.eq((Ω__37 = function() {
            return name;
          }), "Alice");
          this.eq((Ω__38 = function() {
            return dlg.finish();
          }), true);
          return dlg;
        };
        dlg = (await conversation(new Programmatic_dialog(exp_steps = act_steps)));
        this.eq((Ω__39 = function() {
          return dlg.results;
        }), {
          continue: true,
          name: 'Alice'
        });
        this.eq((Ω__40 = function() {
          return dlg.act_steps;
        }), act_steps);
        return null;
      })();
      await (async() => {        //.......................................................................................................
        var conversation, dlg, exp_steps, Ω__44, Ω__45, Ω__46;
        conversation = async(dlg) => {
          var cont, name, Ω__41, Ω__42, Ω__43;
          cont = (await dlg.confirm({
            ref: 'continue',
            message: "do you want to continue?"
          }));
          name = (await dlg.text({
            ref: 'name',
            message: "what is your name?"
          }));
          this.eq((Ω__41 = function() {
            return cont;
          }), true);
          this.eq((Ω__42 = function() {
            return name;
          }), dlg.invalid);
          this.eq((Ω__43 = function() {
            return dlg.finish();
          }), true);
          return dlg;
        };
        exp_steps = [
          {
            ref: 'continue',
            modal: 'confirm',
            answer: true
          }
        ];
        dlg = (await conversation(new Programmatic_dialog(exp_steps)));
        this.eq((Ω__44 = function() {
          return dlg.results;
        }), {
          continue: true
        });
        this.eq((Ω__45 = function() {
          return dlg.act_steps;
        }), [
          {
            ref: 'continue',
            modal: 'confirm',
            answer: true
          },
          {
            message: 'emergency halt, running too long: act 2 exp 1'
          }
        ]);
        this.eq((Ω__46 = function() {
          return dlg.act_steps[1] instanceof errors.Overrun_failure;
        }), true);
        return null;
      })();
      //.......................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (async() => {
      // await ( new Test { throw_on_error: true, } ).async_test {
      //   # with_underrun_failure:  @diatribe_tasks.with_underrun_failure
      //   # with_overrun_failure:   @diatribe_tasks.with_overrun_failure
      //   without_failure:        @diatribe_tasks.without_failure
      //   }
      // await demo_run_dlg1_interactive()
      // whisper 'Ω__47', '————————————————————————————————————————'
      // await ( new Test { throw_on_error: false, } ).async_test @diatribe_tasks
      whisper('Ω__48', '————————————————————————————————————————');
      await (new Test({
        throw_on_error: true
      })).async_test({
        overrun: this.diatribe_tasks.overrun_failure_return_value
      });
      whisper('Ω__49', '————————————————————————————————————————');
      // await demo_run_dlg1_programmatic()
      // await demo_from_docs()
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=test-all.js.map