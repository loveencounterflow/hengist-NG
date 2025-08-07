(async function() {
  'use strict';
  var CLK, Dialog_error, Dialog_failure, Dulicate_ref_error, Duplicate_ref_failure, GUY, Interactive_dialog, Misstep_failure, Overrun_error, Overrun_failure, PATH, Programmatic_dialog, Underrun_failure, alert, bold, debug, demo_run_interactive, demo_run_programmatic, echo, help, info, inspect, log, mark, plain, praise, reverse, rpr, sample_dialog, urge, warn, whisper;

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

  Overrun_error = class Overrun_error extends Dialog_error {};

  Dulicate_ref_error = class Dulicate_ref_error extends Dialog_error {};

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

  Duplicate_ref_failure = class Duplicate_ref_failure extends Dialog_failure {};

  //===========================================================================================================
  Interactive_dialog = class Interactive_dialog {
    //---------------------------------------------------------------------------------------------------------
    ctrlc(value) {
      // debug 'Ω___3', rpr value
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
      this.cfg = GUY.lft.freeze({
        unique_refs: true
      });
      this./* TAINT make configurable */_exp_steps = steps;
      this._exp_keys = Object.keys(this._exp_steps);
      this._pc = -1;
      this._act_steps = {};
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
    _next(ref) {
      var R, key, message, ref1, ref2;
      this._pc++;
      if (((key = (ref1 = this._exp_keys[this._pc]) != null ? ref1 : null) == null) || ((R = (ref2 = this._exp_steps[key]) != null ? ref2 : null) == null)) {
        message = `emergency halt, running too long: act ${this._count_act_steps()} exp ${this._exp_keys.length}`;
        this._fail(ref, new Overrun_failure(message));
        throw new Overrun_error(message);
      }
      return R;
    }

    //---------------------------------------------------------------------------------------------------------
    _fail(ref, failure) {
      this._act_steps[ref] = failure;
      this._failures.push(failure);
      return null;
    }

    //---------------------------------------------------------------------------------------------------------
    async _step(act_key, cfg) {
      var exp_key, message, ref, ref1, value;
      ref = (ref1 = cfg != null ? cfg.ref : void 0) != null ? ref1 : `$q${this._pc + 2}`;
      //.......................................................................................................
      if (this.cfg.unique_refs && Reflect.has(this.results, ref)) {
        message = `duplicate ref: ${ref}`;
        this._fail(ref, new Duplicate_ref_failure(message));
        throw new Dulicate_ref_error(message);
      }
      //.......................................................................................................
      [exp_key, value] = this._next(ref);
      this.results[ref] = value;
      //.......................................................................................................
      if (act_key === exp_key) {
        this._act_steps[ref] = act_key;
      } else {
        this._act_steps[ref] = new Misstep_failure(`step#${this._pc}: act ${rpr(act_key)}, exp ${rpr(exp_key)}`);
      }
      return (await GUY.async.defer(function() {
        return value;
      }));
    }

    //---------------------------------------------------------------------------------------------------------
    _count_act_steps() {
      return this._pc + 1;
    }

    _is_finished() {
      return this._count_act_steps() === this._exp_keys.length;
    }

    // _is_underrun:     -> @_count_act_steps() <  @_exp_keys.length
    _is_overrun() {
      return this._count_act_steps() > this._exp_keys.length;
    }

    //---------------------------------------------------------------------------------------------------------
    finish(...P) {
      if (this._is_finished() || this._is_overrun()) {
        //### `dlg.finish()` should be called after the simulated dialog has ben run to issue an  ####
        return true;
      }
      this._fail('$finish', new Underrun_failure(`finished too early: act ${this._count_act_steps()} exp ${this._exp_keys.length}`));
      return false;
    }

    //---------------------------------------------------------------------------------------------------------
    intro(cfg) {
      return null;
    }

    outro(cfg) {
      return null;
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
  demo_run_interactive = async function() {
    await sample_dialog(); // or `sample_dialog new Interactive_dialog()`
    return null;
  };

  //-----------------------------------------------------------------------------------------------------------
  demo_run_programmatic = async function() {
    var dlg, error, ref, ref1, step, steps;
    // steps = [
    //   # [ 'confirm',  true, ]

    //   # [ 'outro', ]
    //   ]
    steps = {
      q1: ['confirm', false],
      q2: ['text', "helo"],
      q3: ['select', 'coffee'],
      $q4: ['multiselect', ['prettier']],
      whatever: ['select', 'js']
    };
    dlg = new Programmatic_dialog(steps);
    try {
      await sample_dialog(dlg);
    } catch (error1) {
      error = error1;
      if (!(error instanceof Dialog_error)) {
        throw error;
      }
      warn('Ω___8', reverse(bold(error.message)));
    }
    dlg.finish();
    ref1 = dlg._act_steps;
    for (ref in ref1) {
      step = ref1[ref];
      if (step instanceof Dialog_failure) {
        warn(ref, step);
      } else {
        help(ref, step);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tY2xpLWludGVyZmFjZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFBQTtBQUFBLE1BQUEsR0FBQSxFQUFBLFlBQUEsRUFBQSxjQUFBLEVBQUEsa0JBQUEsRUFBQSxxQkFBQSxFQUFBLEdBQUEsRUFBQSxrQkFBQSxFQUFBLGVBQUEsRUFBQSxhQUFBLEVBQUEsZUFBQSxFQUFBLElBQUEsRUFBQSxtQkFBQSxFQUFBLGdCQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsb0JBQUEsRUFBQSxxQkFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxhQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBOzs7RUFHQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLFlBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxPQUhGLEVBSUUsSUFKRixFQUtFLEdBTEYsQ0FBQSxHQUs0QixHQUFHLENBQUMsR0FMaEMsRUFiQTs7O0VBb0JBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLGdCQUFSOztFQUM1QixJQUFBLEdBQTRCLE9BQUEsQ0FBUSxXQUFSOztFQUM1QixJQUFBLEdBQTRCLFFBQUEsQ0FBRSxHQUFGLENBQUE7V0FBVyxJQUFBLENBQUssT0FBQSxDQUFRLElBQUEsQ0FBSyxFQUFBLENBQUEsQ0FBSSxH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RixFQUFrQixLQUFsQixDQUFaO01BQ0EsRUFBQSxFQUFZLENBQUUsTUFBRixFQUFrQixNQUFsQixDQURaO01BRUEsRUFBQSxFQUFZLENBQUUsUUFBRixFQUFrQixRQUFsQixDQUZaO01BR0EsR0FBQSxFQUFZLENBQUUsYUFBRixFQUFrQixDQUFFLFVBQUYsQ0FBbEIsQ0FIWjtNQUlBLFFBQUEsRUFBWSxDQUFFLFFBQUYsRUFBa0IsSUFBbEI7SUFKWjtJQUtGLEdBQUEsR0FBTSxJQUFJLG1CQUFKLENBQXdCLEtBQXhCO0FBQ047TUFDRSxNQUFNLGFBQUEsQ0FBYyxHQUFkLEVBRFI7S0FFQSxjQUFBO01BQU07TUFDSixNQUFtQixLQUFBLFlBQWlCLGFBQXBDO1FBQUEsTUFBTSxNQUFOOztNQUNBLElBQUEsQ0FBSyxPQUFMLEVBQWMsT0FBQSxDQUFRLElBQUEsQ0FBSyxLQUFLLENBQUMsT0FBWCxDQUFSLENBQWQsRUFGRjs7SUFHQSxHQUFHLENBQUMsTUFBSixDQUFBO0FBQ0E7SUFBQSxLQUFBLFdBQUE7O01BQ0UsSUFBRyxJQUFBLFlBQWdCLGNBQW5CO1FBQXdDLElBQUEsQ0FBSyxHQUFMLEVBQVUsSUFBVixFQUF4QztPQUFBLE1BQUE7UUFDd0MsSUFBQSxDQUFLLEdBQUwsRUFBVSxJQUFWLEVBRHhDOztJQURGO0lBR0EsSUFBQSxDQUFLLEdBQUcsQ0FBQyxPQUFUO0FBQ0EsV0FBTztFQTFCZSxFQXZPeEI7OztFQXFRQSxJQUFHLE1BQUEsS0FBVSxPQUFPLENBQUMsSUFBckI7SUFBK0IsTUFBUyxDQUFBLEtBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTs7TUFFdEMsTUFBTSxxQkFBQSxDQUFBO0FBQ04sYUFBTztJQUgrQixDQUFBLElBQXhDOztBQXJRQSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbid1c2Ugc3RyaWN0J1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnZGVtby1leGVjYSdcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICByZXZlcnNlXG4gIGJvbGRcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG4jLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbkNMSyAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdAY2xhY2svcHJvbXB0cydcblBBVEggICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG5tYXJrICAgICAgICAgICAgICAgICAgICAgID0gKCByZWYgKSAtPiB1cmdlIHJldmVyc2UgYm9sZCBcIiAje3JlZn0gXCJcblxuXG4jICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuIyBjbGFzcyBDbGFja1xuXG4jICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIyAgIGludHJvX291dHJvOiAtPlxuIyAgICAgQ0xLLmludHJvIFwiY3JlYXRlLW15LWFwcFwiXG4jICAgICB2YWx1ZSA9IGF3YWl0IENMSy50ZXh0IHsgbWVzc2FnZTogXCJwcmVzcyBDVFJMK0MgdG8gY29udGludWVcIiwgfVxuIyAgICAgaWYgQ0xLLmlzQ2FuY2VsIHZhbHVlXG4jICAgICAgIENMSy5jYW5jZWwgXCJPcGVyYXRpb24gY2FuY2VsbGVkLlwiXG4jICAgICAgICMgcHJvY2Vzcy5leGl0IDBcbiMgICAgIENMSy5vdXRybyBcIllvdSdyZSBhbGwgc2V0IVwiXG4jICAgICByZXR1cm4gbnVsbFxuXG4jICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIyAgIHRleHQ6IC0+XG4jICAgICBjZmcgPVxuIyAgICAgICBtZXNzYWdlOiAgICAgIFwiV2hhdCBpcyB5b3VyIG5hbWU/XCJcbiMgICAgICAgcGxhY2Vob2xkZXI6ICBcIk5vdCBzdXJlXCJcbiMgICAgICAgaW5pdGlhbFZhbHVlOiBcIkppbVwiXG4jICAgICAgIHZhbGlkYXRlOiAgICAgKCB2YWx1ZSApIC0+XG4jICAgICAgICAgIyBkZWJ1ZyAnzqlfX18xJywgcnByIHZhbHVlXG4jICAgICAgICAgcmV0dXJuIFwiVmFsdWUgaXMgcmVxdWlyZWQhXCIgaWYgdmFsdWUubGVuZ3RoIGlzIDBcbiMgICAgICAgICByZXR1cm4gbnVsbFxuIyAgICAgbmFtZSA9IGF3YWl0IENMSy50ZXh0IGNmZ1xuIyAgICAgaW5mbyBcIs6pX19fMiB5b3VyIG5hbWUgaXMgI3tycHIgbmFtZX1cIlxuIyAgICAgcmV0dXJuIG51bGxcblxuXG4jIyNcblxuRXJyb3JzIGVudGFpbCBmYWlsdXJlc1xuXG5cbiMjI1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiMjIyBUQUlOVCBMYXRlciB0byBiZSBleHRlbmRlZCBzbyB3ZSBwYXNzIGluIHBhcmFtZXRlcnMsIG5vdCBtZXNzYWdlcyAjIyNcbmNsYXNzIERpYWxvZ19lcnJvciAgICAgICAgICAgICAgZXh0ZW5kcyBFcnJvclxuY2xhc3MgT3ZlcnJ1bl9lcnJvciAgICAgICAgICAgICBleHRlbmRzIERpYWxvZ19lcnJvclxuY2xhc3MgRHVsaWNhdGVfcmVmX2Vycm9yICAgICAgICBleHRlbmRzIERpYWxvZ19lcnJvclxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiMjIyBUQUlOVCBMYXRlciB0byBiZSBleHRlbmRlZCBzbyB3ZSBwYXNzIGluIHBhcmFtZXRlcnMsIG5vdCBtZXNzYWdlcyAjIyNcbmNsYXNzIERpYWxvZ19mYWlsdXJlXG4gIGNvbnN0cnVjdG9yOiAoIEBtZXNzYWdlICkgLT4gdW5kZWZpbmVkXG5cbmNsYXNzIE1pc3N0ZXBfZmFpbHVyZSAgICAgICBleHRlbmRzIERpYWxvZ19mYWlsdXJlXG5jbGFzcyBVbmRlcnJ1bl9mYWlsdXJlICAgICAgZXh0ZW5kcyBEaWFsb2dfZmFpbHVyZVxuY2xhc3MgT3ZlcnJ1bl9mYWlsdXJlICAgICAgIGV4dGVuZHMgRGlhbG9nX2ZhaWx1cmVcbmNsYXNzIER1cGxpY2F0ZV9yZWZfZmFpbHVyZSBleHRlbmRzIERpYWxvZ19mYWlsdXJlXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jbGFzcyBJbnRlcmFjdGl2ZV9kaWFsb2dcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGN0cmxjOiAoIHZhbHVlICkgLT5cbiAgICAjIGRlYnVnICfOqV9fXzMnLCBycHIgdmFsdWVcbiAgICBpZiBDTEsuaXNDYW5jZWwgdmFsdWVcbiAgICAgIENMSy5jYW5jZWwgXCJPcGVyYXRpb24gY2FuY2VsbGVkLlwiXG4gICAgICBAcHJvY2Vzc19leGl0IDBcbiAgICByZXR1cm4gdmFsdWVcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGludHJvOiAgICAgICAgKCBjZmcgKSAtPiBAY3RybGMgYXdhaXQgQ0xLLmludHJvICAgICAgIGNmZ1xuICBvdXRybzogICAgICAgICggY2ZnICkgLT4gQGN0cmxjIGF3YWl0IENMSy5vdXRybyAgICAgICBjZmdcbiAgY29uZmlybTogICAgICAoIGNmZyApIC0+IEBjdHJsYyBhd2FpdCBDTEsuY29uZmlybSAgICAgY2ZnXG4gIHRleHQ6ICAgICAgICAgKCBjZmcgKSAtPiBAY3RybGMgYXdhaXQgQ0xLLnRleHQgICAgICAgIGNmZ1xuICBzZWxlY3Q6ICAgICAgICggY2ZnICkgLT4gQGN0cmxjIGF3YWl0IENMSy5zZWxlY3QgICAgICBjZmdcbiAgbXVsdGlzZWxlY3Q6ICAoIGNmZyApIC0+IEBjdHJsYyBhd2FpdCBDTEsubXVsdGlzZWxlY3QgY2ZnXG4gIGdldF9zcGlubmVyOiAgKCBjZmcgKSAtPiBDTEsuc3Bpbm5lcigpXG4gIGZpbmlzaDogICAgICAgICAgICAgICAtPiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBwcm9jZXNzX2V4aXQ6ICggY29kZSA9IDAgKSAtPiBwcm9jZXNzLmV4aXQgY29kZVxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuY2xhc3MgUHJvZ3JhbW1hdGljX2RpYWxvZ1xuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29uc3RydWN0b3I6ICggc3RlcHMgKSAtPlxuICAgIEBjZmcgICAgICAgID0gR1VZLmxmdC5mcmVlemUgeyB1bmlxdWVfcmVmczogdHJ1ZSwgfSAjIyMgVEFJTlQgbWFrZSBjb25maWd1cmFibGUgIyMjXG4gICAgQF9leHBfc3RlcHMgPSBzdGVwc1xuICAgIEBfZXhwX2tleXMgID0gT2JqZWN0LmtleXMgQF9leHBfc3RlcHNcbiAgICBAX3BjICAgICAgICA9IC0xXG4gICAgQF9hY3Rfc3RlcHMgPSB7fVxuICAgIEByZXN1bHRzICAgID0ge31cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEdVWS5wcm9wcy5kZWYgQCwgJ19mYWlsdXJlcycsXG4gICAgICBlbnVtZXJhYmxlOiAgIGZhbHNlXG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlXG4gICAgICBnZXQ6ICAgICAgICAgIC0+ICggZCBmb3IgZCBpbiBAX2FjdF9zdGVwcyB3aGVuIGQgaW5zdGFuY2VvZiBEaWFsb2dfZmFpbHVyZSApXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBfbmV4dDogKCByZWYgKSAtPlxuICAgIEBfcGMrK1xuICAgIGlmICggbm90ICgga2V5ID0gQF9leHBfa2V5c1sgQF9wYyBdID8gbnVsbCApPyApIG9yICggbm90ICggUiA9IEBfZXhwX3N0ZXBzWyBrZXkgXSA/IG51bGwgKT8gKVxuICAgICAgbWVzc2FnZSA9IFwiZW1lcmdlbmN5IGhhbHQsIHJ1bm5pbmcgdG9vIGxvbmc6IGFjdCAje0BfY291bnRfYWN0X3N0ZXBzKCl9IGV4cCAje0BfZXhwX2tleXMubGVuZ3RofVwiXG4gICAgICBAX2ZhaWwgcmVmLCBuZXcgT3ZlcnJ1bl9mYWlsdXJlIG1lc3NhZ2VcbiAgICAgIHRocm93IG5ldyBPdmVycnVuX2Vycm9yIG1lc3NhZ2VcbiAgICByZXR1cm4gUlxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgX2ZhaWw6ICggcmVmLCBmYWlsdXJlICkgLT5cbiAgICBAX2FjdF9zdGVwc1sgcmVmIF0gPSBmYWlsdXJlXG4gICAgQF9mYWlsdXJlcy5wdXNoIGZhaWx1cmVcbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgX3N0ZXA6ICggYWN0X2tleSwgY2ZnICkgLT5cbiAgICByZWYgPSBjZmc/LnJlZiA/IFwiJHEje0BfcGMgKyAyfVwiXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBpZiBAY2ZnLnVuaXF1ZV9yZWZzIGFuZCBSZWZsZWN0LmhhcyBAcmVzdWx0cywgcmVmXG4gICAgICBtZXNzYWdlID0gXCJkdXBsaWNhdGUgcmVmOiAje3JlZn1cIlxuICAgICAgQF9mYWlsIHJlZiwgbmV3IER1cGxpY2F0ZV9yZWZfZmFpbHVyZSBtZXNzYWdlXG4gICAgICB0aHJvdyBuZXcgRHVsaWNhdGVfcmVmX2Vycm9yIG1lc3NhZ2VcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIFsgZXhwX2tleSwgdmFsdWUsIF0gPSBAX25leHQgcmVmXG4gICAgQHJlc3VsdHNbIHJlZiBdICAgICA9IHZhbHVlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBpZiBhY3Rfa2V5IGlzIGV4cF9rZXlcbiAgICAgIEBfYWN0X3N0ZXBzWyByZWYgXSA9IGFjdF9rZXlcbiAgICBlbHNlXG4gICAgICBAX2FjdF9zdGVwc1sgcmVmIF0gPSBuZXcgTWlzc3RlcF9mYWlsdXJlIFwic3RlcCMje0BfcGN9OiBhY3QgI3tycHIgYWN0X2tleX0sIGV4cCAje3JwciBleHBfa2V5fVwiXG4gICAgcmV0dXJuIGF3YWl0IEdVWS5hc3luYy5kZWZlciAtPiB2YWx1ZVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgX2NvdW50X2FjdF9zdGVwczogLT4gQF9wYyArIDFcbiAgX2lzX2ZpbmlzaGVkOiAgICAgLT4gQF9jb3VudF9hY3Rfc3RlcHMoKSBpcyBAX2V4cF9rZXlzLmxlbmd0aFxuICAjIF9pc191bmRlcnJ1bjogICAgIC0+IEBfY291bnRfYWN0X3N0ZXBzKCkgPCAgQF9leHBfa2V5cy5sZW5ndGhcbiAgX2lzX292ZXJydW46ICAgICAgLT4gQF9jb3VudF9hY3Rfc3RlcHMoKSA+ICBAX2V4cF9rZXlzLmxlbmd0aFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZmluaXNoOiAoIFAuLi4gKSAtPlxuICAgICMjIyMgYGRsZy5maW5pc2goKWAgc2hvdWxkIGJlIGNhbGxlZCBhZnRlciB0aGUgc2ltdWxhdGVkIGRpYWxvZyBoYXMgYmVuIHJ1biB0byBpc3N1ZSBhbiAgIyMjI1xuICAgIHJldHVybiB0cnVlIGlmIEBfaXNfZmluaXNoZWQoKSBvciBAX2lzX292ZXJydW4oKVxuICAgIEBfZmFpbCAnJGZpbmlzaCcsIG5ldyBVbmRlcnJ1bl9mYWlsdXJlIFwiZmluaXNoZWQgdG9vIGVhcmx5OiBhY3QgI3tAX2NvdW50X2FjdF9zdGVwcygpfSBleHAgI3tAX2V4cF9rZXlzLmxlbmd0aH1cIlxuICAgIHJldHVybiBmYWxzZVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaW50cm86ICAgICAgICAoIGNmZyApIC0+IG51bGxcbiAgb3V0cm86ICAgICAgICAoIGNmZyApIC0+IG51bGxcbiAgY29uZmlybTogICAgICAoIGNmZyApIC0+IGF3YWl0IEBfc3RlcCAnY29uZmlybScsICAgICAgY2ZnXG4gIHRleHQ6ICAgICAgICAgKCBjZmcgKSAtPiBhd2FpdCBAX3N0ZXAgJ3RleHQnLCAgICAgICAgIGNmZ1xuICBzZWxlY3Q6ICAgICAgICggY2ZnICkgLT4gYXdhaXQgQF9zdGVwICdzZWxlY3QnLCAgICAgICBjZmdcbiAgbXVsdGlzZWxlY3Q6ICAoIGNmZyApIC0+IGF3YWl0IEBfc3RlcCAnbXVsdGlzZWxlY3QnLCAgY2ZnXG4gIGdldF9zcGlubmVyOiAgICAgICAgICAtPiB7IHN0YXJ0OiAoIC0+ICksIHN0b3A6ICggLT4gKSwgfVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcHJvY2Vzc19leGl0OiAoIGNvZGUgKSAtPlxuICAgICMgbm90IHJlYWxseSBleGl0aW5nIHRoZSBwcm9jZXNzXG4gICAgcmV0dXJuIGNvZGVcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnNhbXBsZV9kaWFsb2cgPSAoIGRsZyA9IG51bGwgKSAtPlxuICBkbGcgID89IG5ldyBJbnRlcmFjdGl2ZV9kaWFsb2coKVxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGRsZy5pbnRybyBcImNyZWF0ZS1teS1hcHBcIlxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGxvb3BcbiAgICBpZiB2YWx1ZSA9IGF3YWl0IGRsZy5jb25maXJtIHsgcmVmOiAncTEnLCBtZXNzYWdlOiBcImRvIHlvdSB3YW50IHRvIGxvb3A/XCIsIH1cbiAgICAgIGRlYnVnICfOqV9fXzUnLCBycHIgdmFsdWVcbiAgICAgIGNvbnRpbnVlXG4gICAgYnJlYWtcbiAgYXdhaXQgZGxnLnRleHQgeyByZWY6ICdxMicsIG1lc3NhZ2U6IFwicGxlYXNlIGVudGVyIHRleHRcIiwgfVxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGF3YWl0IGRvID0+XG4gICAgY2ZnID1cbiAgICAgIHJlZjogICAgICAgICdxMydcbiAgICAgIG1lc3NhZ2U6ICAgIFwiUGljayBhIHByb2plY3QgdHlwZS5cIlxuICAgICAgb3B0aW9uczogW1xuICAgICAgICB7IHZhbHVlOiAndHMnLCAgICAgIGxhYmVsOiAnVHlwZVNjcmlwdCcgfSxcbiAgICAgICAgeyB2YWx1ZTogJ2pzJywgICAgICBsYWJlbDogJ0phdmFTY3JpcHQnIH0sXG4gICAgICAgIHsgdmFsdWU6ICdjb2ZmZWUnLCAgbGFiZWw6ICdDb2ZmZWVTY3JpcHQnLCBoaW50OiAneWVzIScgfSwgXVxuICAgIHByb2plY3RfdHlwZSA9IGF3YWl0IGRsZy5zZWxlY3QgY2ZnXG4gICAgcmV0dXJuIG51bGxcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBhd2FpdCBkbyA9PlxuICAgIHNwaW5uZXIgPSBkbGcuZ2V0X3NwaW5uZXIoKVxuICAgIHNwaW5uZXIuc3RhcnQgXCJhc2tpbmcgcXVlc3Rpb25zXCJcbiAgICBjZmcgPVxuICAgICAgcmVmOiAgICAgICAgbnVsbCAjIGludGVudGlvbmFsbHkgbGVmdCBvdXRcbiAgICAgIG1lc3NhZ2U6ICAgIFwiU2VsZWN0IGFkZGl0aW9uYWwgdG9vbHMuXCJcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgeyB2YWx1ZTogJ2VzbGludCcsIGxhYmVsOiAnRVNMaW50JywgaGludDogJ3JlY29tbWVuZGVkJyB9LFxuICAgICAgICB7IHZhbHVlOiAncHJldHRpZXInLCBsYWJlbDogJ1ByZXR0aWVyJyB9LFxuICAgICAgICB7IHZhbHVlOiAnZ2gtYWN0aW9uJywgbGFiZWw6ICdHaXRIdWIgQWN0aW9uJyB9LCBdXG4gICAgICByZXF1aXJlZDogZmFsc2VcbiAgICB0b29scyA9IGF3YWl0IGRsZy5tdWx0aXNlbGVjdCBjZmdcbiAgICBzcGlubmVyLnN0b3AgXCJ0aGFua3MhXCJcbiAgICByZXR1cm4gbnVsbFxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGRsZy5vdXRybyBcIllvdSdyZSBhbGwgc2V0IVwiXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgcmV0dXJuIGRsZy5yZXN1bHRzXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZGVtb19ydW5faW50ZXJhY3RpdmUgPSAtPlxuICBhd2FpdCBzYW1wbGVfZGlhbG9nKCkgIyBvciBgc2FtcGxlX2RpYWxvZyBuZXcgSW50ZXJhY3RpdmVfZGlhbG9nKClgXG4gIHJldHVybiBudWxsXG5cbiMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZGVtb19ydW5fcHJvZ3JhbW1hdGljID0gLT5cbiAgIyBzdGVwcyA9IFtcbiAgIyAgICMgWyAnY29uZmlybScsICB0cnVlLCBdXG4gICNcbiAgI1xuICAjXG4gICNcbiAgIyAgICMgWyAnb3V0cm8nLCBdXG4gICMgICBdXG4gIHN0ZXBzID1cbiAgICBxMTogICAgICAgICBbICdjb25maXJtJywgICAgICBmYWxzZSwgICAgICAgICAgICBdXG4gICAgcTI6ICAgICAgICAgWyAndGV4dCcsICAgICAgICAgXCJoZWxvXCIsICAgICAgICAgICBdXG4gICAgcTM6ICAgICAgICAgWyAnc2VsZWN0JywgICAgICAgJ2NvZmZlZScsICAgICAgICAgXVxuICAgICRxNDogICAgICAgIFsgJ211bHRpc2VsZWN0JywgIFsgJ3ByZXR0aWVyJywgXSwgIF1cbiAgICB3aGF0ZXZlcjogICBbICdzZWxlY3QnLCAgICAgICAnanMnLCAgICAgICAgIF1cbiAgZGxnID0gbmV3IFByb2dyYW1tYXRpY19kaWFsb2cgc3RlcHNcbiAgdHJ5XG4gICAgYXdhaXQgc2FtcGxlX2RpYWxvZyBkbGdcbiAgY2F0Y2ggZXJyb3JcbiAgICB0aHJvdyBlcnJvciB1bmxlc3MgZXJyb3IgaW5zdGFuY2VvZiBEaWFsb2dfZXJyb3JcbiAgICB3YXJuICfOqV9fXzgnLCByZXZlcnNlIGJvbGQgZXJyb3IubWVzc2FnZVxuICBkbGcuZmluaXNoKClcbiAgZm9yIHJlZiwgc3RlcCBvZiBkbGcuX2FjdF9zdGVwc1xuICAgIGlmIHN0ZXAgaW5zdGFuY2VvZiBEaWFsb2dfZmFpbHVyZSB0aGVuICB3YXJuIHJlZiwgc3RlcFxuICAgIGVsc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwIHJlZiwgc3RlcFxuICBpbmZvIGRsZy5yZXN1bHRzXG4gIHJldHVybiBudWxsXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgIyBhd2FpdCBkZW1vX3J1bl9pbnRlcmFjdGl2ZSgpXG4gIGF3YWl0IGRlbW9fcnVuX3Byb2dyYW1tYXRpYygpXG4gIHJldHVybiBudWxsXG5cbiJdfQ==
//# sourceURL=../src/demo-cli-interface.coffee