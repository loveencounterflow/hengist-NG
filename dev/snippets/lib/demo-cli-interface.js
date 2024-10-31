(async function() {
  'use strict';
  var CLK, Dialog_error, Dialog_failure, GUY, Interactive_dialog, Interactive_dialog_error, Internal_error, Internal_failure, Misstep_failure, Overrun_error, Overrun_failure, PATH, Programmatic_dialog, Programmatic_dialog_error, Underrun_failure, alert, bold, debug, demo_run_interactive, demo_run_programmatic, echo, help, info, inspect, log, mark, plain, praise, reverse, rpr, sample_dialog, urge, warn, whisper,
    indexOf = [].indexOf;

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

  // #===========================================================================================================
  // class Clack

    //   #---------------------------------------------------------------------------------------------------------
  //   intro_outro: ->
  //     CLK.intro "create-my-app"
  //     value = await CLK.text { message: "press CTRL+C to continue", }
  //     if CLK.isCancel value
  //       CLK.cancel "Operation cancelled."
  //       # process.exit 0
  //     CLK.outro "You're all set!"
  //     return null

    //   #---------------------------------------------------------------------------------------------------------
  //   text: ->
  //     cfg =
  //       message:      "What is your name?"
  //       placeholder:  "Not sure"
  //       initialValue: "Jim"
  //       validate:     ( value ) ->
  //         # debug 'Ω___1', rpr value
  //         return "Value is required!" if value.length is 0
  //         return null
  //     name = await CLK.text cfg
  //     info "Ω___2 your name is #{rpr name}"
  //     return null
  /*

  Errors entail failures

  */
  //===========================================================================================================
  /* TAINT Later to be extended so we pass in parameters, not messages */
  Dialog_error = class Dialog_error extends Error {};

  Interactive_dialog_error = class Interactive_dialog_error extends Dialog_error {};

  Programmatic_dialog_error = class Programmatic_dialog_error extends Dialog_error {};

  Internal_error = class Internal_error extends Programmatic_dialog_error {};

  Overrun_error = class Overrun_error extends Programmatic_dialog_error {};

  //===========================================================================================================
  /* TAINT Later to be extended so we pass in parameters, not messages */
  Dialog_failure = class Dialog_failure {
    constructor(message1) {
      this.message = message1;
      void 0;
    }

  };

  Misstep_failure = class Misstep_failure extends Dialog_failure {};

  Underrun_failure = class Underrun_failure extends Dialog_failure {};

  Overrun_failure = class Overrun_failure extends Dialog_failure {};

  Internal_failure = class Internal_failure extends Dialog_failure {};

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

    async text(cfg) {
      return this.ctrlc((await CLK.text(cfg)));
    }

    async select(cfg) {
      return this.ctrlc((await CLK.select(cfg)));
    }

    async multiselect(cfg) {
      return this.ctrlc((await CLK.multiselect(cfg)));
    }

    get_spinner(cfg) {
      return CLK.spinner();
    }

    finish() {
      return null;
    }

    //---------------------------------------------------------------------------------------------------------
    process_exit(code = 0) {
      return process.exit(code);
    }

  };

  //===========================================================================================================
  Programmatic_dialog = class Programmatic_dialog {
    //---------------------------------------------------------------------------------------------------------
    constructor(steps) {
      this._exp_steps = steps;
      this._pc = -1;
      this._act_steps = [];
      this._skip_keys = ['get_spinner', 'intro', 'outro'];
      this.results = {};
      //.......................................................................................................
      GUY.props.def(this, '_failures', {
        enumerable: false,
        configurable: false,
        get: function() {
          var d, i, len, ref1, results;
          ref1 = this._act_steps;
          results = [];
          for (i = 0, len = ref1.length; i < len; i++) {
            d = ref1[i];
            if (d instanceof Dialog_failure) {
              results.push(d);
            }
          }
          return results;
        }
      });
      //.......................................................................................................
      return void 0;
    }

    //---------------------------------------------------------------------------------------------------------
    _next() {
      var R, message, ref1;
      this._pc++;
      if ((R = (ref1 = this._exp_steps[this._pc]) != null ? ref1 : null) == null) {
        message = `emergency halt, running too long: act ${this._act_steps.length + 1} exp ${this._exp_steps.length}`;
        this._fail(new Overrun_failure(message));
        throw new Overrun_error(message);
      }
      return R;
    }

    //---------------------------------------------------------------------------------------------------------
    _fail(failure) {
      this._act_steps.push(failure);
      this._failures.push(failure);
      return null;
    }

    //---------------------------------------------------------------------------------------------------------
    async _step(act_key, cfg) {
      var exp_key, ref, ref1, value;
      [exp_key, value] = this._next();
      //.......................................................................................................
      if (indexOf.call(this._skip_keys, act_key) < 0) {
        ref = (ref1 = cfg != null ? cfg.ref : void 0) != null ? ref1 : `$q${this._pc + 1}`;
        this.results[ref] = value;
      }
      //.......................................................................................................
      if (act_key === exp_key) {
        this._act_steps.push(act_key);
      } else {
        this._act_steps.push(new Misstep_failure(`step#${this._pc}: act ${rpr(act_key)}, exp ${rpr(exp_key)}`));
      }
      return (await GUY.async.defer(function() {
        return value;
      }));
    }

    //---------------------------------------------------------------------------------------------------------
    _is_finished() {
      return this._act_steps.length === this._exp_steps.length;
    }

    _is_underrun() {
      return this._act_steps.length < this._exp_steps.length;
    }

    _is_overrun() {
      return this._act_steps.length > this._exp_steps.length;
    }

    //---------------------------------------------------------------------------------------------------------
    finish(...P) {
      if (this._is_finished() || this._is_overrun()) {
        //### `dlg.finish()` should be called after the simulated dialog has ben run to issue an  ####
        return true;
      }
      // unless @_is_underrun()
      //   message = "should have recognized overrun"
      //   @_fail new Internal_failure message
      //   throw new Internal_error message
      this._fail(new Underrun_failure(`finished too early: act ${this._act_steps.length} exp ${this._exp_steps.length}`));
      return false;
    }

    //---------------------------------------------------------------------------------------------------------
    async intro(cfg) {
      return (await this._step('intro', cfg));
    }

    async outro(cfg) {
      return (await this._step('outro', cfg));
    }

    async confirm(cfg) {
      return (await this._step('confirm', cfg));
    }

    async text(cfg) {
      return (await this._step('text', cfg));
    }

    async select(cfg) {
      return (await this._step('select', cfg));
    }

    async multiselect(cfg) {
      return (await this._step('multiselect', cfg));
    }

    get_spinner() {
      return {
        start: (function() {}),
        stop: (function() {})
      };
    }

    //---------------------------------------------------------------------------------------------------------
    process_exit(code) {
      // not really exiting the process
      return code;
    }

  };

  //===========================================================================================================
  sample_dialog = async function(dlg = null) {
    var value;
    if (dlg == null) {
      dlg = new Interactive_dialog();
    }
    //.........................................................................................................
    dlg.intro("create-my-app");
    while (true) {
      //.........................................................................................................
      if (value = (await dlg.confirm({
        ref: 'q1',
        message: "do you want to loop?"
      }))) {
        debug('Ω___6', rpr(value));
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
      info(`Ω___3 project type: ${rpr(project_type)}`);
      return null;
    })();
    await (async() => {      //.........................................................................................................
      var cfg, spinner, tools;
      spinner = dlg.get_spinner();
      spinner.start("asking questions");
      cfg = {
        ref: 'q4',
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
      info(`Ω___4 tools: ${rpr(tools)}`);
      spinner.stop("thanks!");
      return null;
    })();
    //.........................................................................................................
    dlg.outro("You're all set!");
    //.........................................................................................................
    return dlg.results;
  };

  //===========================================================================================================
  demo_run_interactive = async function() {
    await sample_dialog(); // or `sample_dialog new Interactive_dialog()`
    return null;
  };

  //-----------------------------------------------------------------------------------------------------------
  demo_run_programmatic = async function() {
    var dlg, error, i, len, ref1, step, steps;
    steps = [
      ['intro'],
      // [ 'confirm',  true, ]
      ['confirm',
      false],
      ['text',
      "helo"],
      ['select',
      'coffee'],
      ['multiselect',
      ['prettier']],
      // [ 'outro', ]
      ['outro']
    ];
    dlg = new Programmatic_dialog(steps);
    try {
      await sample_dialog(dlg);
    } catch (error1) {
      error = error1;
      if (!(error instanceof Programmatic_dialog_error)) {
        throw error;
      }
      warn('Ω___7', reverse(bold(error.message)));
    }
    dlg.finish();
    warn('Ω___8', dlg._failures);
    ref1 = dlg._act_steps;
    for (i = 0, len = ref1.length; i < len; i++) {
      step = ref1[i];
      if (step instanceof Dialog_failure) {
        warn(step);
      } else {
        help(step);
      }
    }
    info(dlg.results);
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