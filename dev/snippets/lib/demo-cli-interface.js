(async function() {
  'use strict';
  var CLK, Clack, GUY, Interactive_dialog, PATH, Programmatic_dialog, Programmatic_dialog_error, alert, bold, debug, demo_run_interactive, demo_run_programmatic, echo, help, info, inspect, log, mark, plain, praise, reverse, rpr, sample_dialog, urge, warn, whisper;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-execa'));

  ({rpr, inspect, echo, reverse, bold, log} = GUY.trm);

  //...........................................................................................................
  CLK = require('@clack/prompts');

  PATH = require('node:path');

  mark = function(ref) {
    return urge(reverse(bold(` ${ref} `)));
  };

  //===========================================================================================================
  Clack = class Clack {
    //---------------------------------------------------------------------------------------------------------
    async intro_outro() {
      var value;
      CLK.intro("create-my-app");
      value = (await CLK.text({
        message: "press CTRL+C to continue"
      }));
      if (CLK.isCancel(value)) {
        CLK.cancel("Operation cancelled.");
      }
      // process.exit 0
      CLK.outro("You're all set!");
      return null;
    }

    //---------------------------------------------------------------------------------------------------------
    async text() {
      var cfg, name;
      cfg = {
        message: "What is your name?",
        placeholder: "Not sure",
        initialValue: "Jim",
        validate: function(value) {
          if (value.length === 0) {
            // debug 'Ω___1', rpr value
            return "Value is required!";
          }
          return null;
        }
      };
      name = (await CLK.text(cfg));
      info(`Ω___2 your name is ${rpr(name)}`);
      return null;
    }

    //---------------------------------------------------------------------------------------------------------
    async select() {
      await (async() => {
        var cfg, project_type;
        cfg = {
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
        project_type = (await CLK.select(cfg));
        info(`Ω___3 project type: ${rpr(project_type)}`);
        return null;
      })();
      await (async() => {
        var cfg, spinner, tools;
        spinner = CLK.spinner();
        spinner.start("asking questions");
        cfg = {
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
        tools = (await CLK.multiselect(cfg));
        info(`Ω___4 tools: ${rpr(tools)}`);
        spinner.stop("thanks!");
        return null;
      })();
      return null;
    }

  };

  // clack = new Clack()

    //===========================================================================================================
  Interactive_dialog = class Interactive_dialog {
    //---------------------------------------------------------------------------------------------------------
    ctrlc(value) {
      // debug 'Ω___5', rpr value
      if (CLK.isCancel(value)) {
        CLK.cancel("Operation cancelled.");
        this.process_exit(0);
      }
      return value;
    }

    //---------------------------------------------------------------------------------------------------------
    async intro(cfg) {
      return this.ctrlc((await CLK.intro(cfg)));
    }

    async outro(cfg) {
      return this.ctrlc((await CLK.outro(cfg)));
    }

    async confirm(cfg) {
      return this.ctrlc((await CLK.confirm(cfg)));
    }

    //---------------------------------------------------------------------------------------------------------
    process_exit(code = 0) {
      return process.exit(code);
    }

  };

  //===========================================================================================================
  Programmatic_dialog_error = class Programmatic_dialog_error extends Error {};

  //===========================================================================================================
  Programmatic_dialog = class Programmatic_dialog {
    //---------------------------------------------------------------------------------------------------------
    constructor(steps) {
      this.exp_steps = steps;
      this.pc = -1;
      this.act_steps = [];
      this.errors = [];
      return void 0;
    }

    //---------------------------------------------------------------------------------------------------------
    _next() {
      var R, ref1;
      this.pc++;
      if ((R = (ref1 = this.exp_steps[this.pc]) != null ? ref1 : null) == null) {
        throw new Programmatic_dialog_error(`running out of steps: ${rpr(this)}`);
      }
      return R;
    }

    //---------------------------------------------------------------------------------------------------------
    _error(message) {
      var error;
      error = {
        isa: 'error',
        message
      };
      this.act_steps.push(error);
      this.errors.push(error);
      return null;
    }

    //---------------------------------------------------------------------------------------------------------
    _step(act_key) {
      var exp_key, value;
      [exp_key, value] = this._next();
      if (act_key === exp_key) {
        this.act_steps.push(act_key);
      } else {
        this._error(`error @ ${this.pc}: act ${rpr(act_key)}, exp ${rpr(exp_key)}`);
      }
      return value;
    }

    //---------------------------------------------------------------------------------------------------------
    intro(...P) {
      return this._step('intro');
    }

    outro(...P) {
      return this._step('outro');
    }

    confirm(...P) {
      return this._step('confirm');
    }

    //---------------------------------------------------------------------------------------------------------
    process_exit(code) {
      // not really exiting the process
      return code;
    }

  };

  //===========================================================================================================
  sample_dialog = async function(dlg = null) {
    var R;
    if (dlg == null) {
      dlg = new Interactive_dialog();
    }
    R = {};
    //.........................................................................................................
    dlg.intro("create-my-app");
    while (true) {
      if ((await dlg.confirm({
        message: "do you want to loop?"
      }))) {
        continue;
      }
      break;
    }
    dlg.outro("You're all set!");
    //.........................................................................................................
    return R;
  };

  //===========================================================================================================
  demo_run_interactive = async function() {
    await sample_dialog(); // or `sample_dialog new Interactive_dialog()`
    return null;
  };

  //-----------------------------------------------------------------------------------------------------------
  demo_run_programmatic = async function() {
    var dlg, error, steps;
    steps = [
      ['intro',
      true],
      ['confirm',
      true],
      // [ 'confirm',  false, ]
      ['outro',
      true]
    ];
    dlg = new Programmatic_dialog(steps);
    try {
      await sample_dialog(dlg);
    } catch (error1) {
      error = error1;
      if (!(error instanceof Programmatic_dialog_error)) {
        throw error;
      }
      warn('Ω__14', reverse(bold(error.message)));
    }
    if (dlg.errors.length > 0) {
      warn('Ω__15', dlg.errors);
    }
    help('Ω__16', dlg.act_steps);
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (async() => {
      // await demo_run_interactive()
      await demo_run_programmatic();
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=demo-cli-interface.js.map