(async function() {
  'use strict';
  var Doublestack, GTNG, GUY, Raw, Stack, Test, alert, blue, bold, create_html_escaped_text_from_tagged_template_call, debug, demo_proxy_as_html_producer, echo, f, gold, grey, help, info, inspect, log, nfa, plain, praise, red, require_escape_html_text, require_is_tagged_template_call, require_list_utils, require_text_from_tagged_template_call, reverse, rpr, tests, urge, warn, whisper, white;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-proxy'));

  ({rpr, inspect, echo, white, blue, gold, grey, red, bold, reverse, log} = GUY.trm);

  ({f} = require('../../../apps/effstring'));

  // write                     = ( p ) -> process.stdout.write p
  ({nfa} = require('../../../apps/normalize-function-arguments'));

  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  //###########################################################################################################

  //===========================================================================================================
  /* NOTE Future Single-File Module */
  require_list_utils = function() {
    var append;
    append = function(list, ...P) {
      return list.splice(list.length, 0, ...P);
    };
    return {append};
  };

  //-----------------------------------------------------------------------------------------------------------
  /* NOTE Future Single-File Module */
  require_escape_html_text = function() {
    var escape_html_text;
    escape_html_text = function(text) {
      var R;
      R = text;
      R = R.replace(/&/g, '&amp;');
      R = R.replace(/</g, '&lt;');
      R = R.replace(/>/g, '&gt;');
      return R;
    };
    return {escape_html_text};
  };

  //-----------------------------------------------------------------------------------------------------------
  /* NOTE Future Single-File Module */
  require_text_from_tagged_template_call = function() {
    /* NOTE When `expression_to_string` is given, it will be used to turn each expression (the parts of
     tagged templates that are within curlies) into a string; could use this to apply some escaping etc. */
    /* TAINT should provide means to also format constant parts */
    var create_text_from_tagged_template_call, text_from_tagged_template_call;
    create_text_from_tagged_template_call = function(expression_to_string = null) {
      if (expression_to_string == null) {
        expression_to_string = function(expression) {
          return `${expression}`;
        };
      }
      return function(parts, ...expressions) {
        var R, expression, i, idx, len;
        R = parts[0];
        for (idx = i = 0, len = expressions.length; i < len; idx = ++i) {
          expression = expressions[idx];
          R += (expression_to_string(expression)) + parts[idx + 1];
        }
        return R;
      };
    };
    text_from_tagged_template_call = create_text_from_tagged_template_call();
    return {create_text_from_tagged_template_call, text_from_tagged_template_call};
  };

  //-----------------------------------------------------------------------------------------------------------
  /* NOTE Future Single-File Module */
  require_is_tagged_template_call = function() {
    var is_tagged_template_call;
    is_tagged_template_call = function(...P) {
      if (!Array.isArray(P[0])) {
        return false;
      }
      if (!Object.isFrozen(P[0])) {
        return false;
      }
      if (P[0].raw == null) {
        return false;
      }
      return true;
    };
    return {is_tagged_template_call};
  };

  //###########################################################################################################

  //===========================================================================================================
  Raw = class Raw {
    //---------------------------------------------------------------------------------------------------------
    constructor(text) {
      this.data = text;
      return void 0;
    }

    toString() {
      return this.data;
    }

  };

  //-----------------------------------------------------------------------------------------------------------
  Stack = class Stack {
    //---------------------------------------------------------------------------------------------------------
    constructor() {
      this.data = [];
      return void 0;
    }

    //---------------------------------------------------------------------------------------------------------
    push(x) {
      this.data.push(x);
      return null;
    }

    unshift(x) {
      this.data.unshift(x);
      return null;
    }

    //---------------------------------------------------------------------------------------------------------
    pop(fallback = misfit) {}

    shift(fallback = misfit) {}

    peek(fallback = misfit) {}

  };

  Doublestack = (function() {
    var get_stack, get_stack_length, pop_old_stack, push_new_stack, stackofstacks;

    //-----------------------------------------------------------------------------------------------------------
    class Doublestack {
      //---------------------------------------------------------------------------------------------------------
      constructor() {
        this.stacks = [];
        return void 0;
      }

      //---------------------------------------------------------------------------------------------------------
      push_new_stack() {
        this.stacks.push([]);
        return null;
      }

      // unshift_new_stack:  -> @stacks.unshift []; null
      //---------------------------------------------------------------------------------------------------------
      pop_old_stack(fallback = misfit) {}

      shift_old_stack(fallback = misfit) {}

      peek_stack(fallback = misfit) {
        return this.stacks.at(-1);
      }

    };

    stackofstacks = [];

    get_stack = function() {
      return stackofstacks.at(-1);
    };

    push_new_stack = function() {
      stackofstacks.push([]);
      return get_stack();
    };

    pop_old_stack = function() {
      return stackofstacks.pop();
    };

    get_stack_length = function() {
      return stackofstacks.length;
    };

    return Doublestack;

  }).call(this);

  //-----------------------------------------------------------------------------------------------------------
  create_html_escaped_text_from_tagged_template_call = function(dont_escape = null) {
    /* NOTE will only escape *expressions* of tagged templates, not the constant parts */
    var create_text_from_tagged_template_call, escape_html_text, html_safe_text_from_tagged_template_call;
    ({create_text_from_tagged_template_call} = require_text_from_tagged_template_call());
    ({escape_html_text} = require_escape_html_text());
    //.........................................................................................................
    html_safe_text_from_tagged_template_call = create_text_from_tagged_template_call(function(expression) {
      var R;
      R = `${expression}`;
      if (dont_escape != null) {
        if (!dont_escape(expression)) {
          R = escape_html_text(R);
        }
      }
      return R;
    });
    //.........................................................................................................
    return {html_safe_text_from_tagged_template_call};
  };

  //===========================================================================================================
  tests = function() {
    var html_safe_text_from_tagged_template_call, is_tagged_template_call, test_escape_html_text, test_html_safe_text_from_tagged_template_call, test_is_tagged_template_call;
    ({is_tagged_template_call} = require_is_tagged_template_call());
    ({html_safe_text_from_tagged_template_call} = (() => {
      var dont_escape_raw_instances;
      dont_escape_raw_instances = function(x) {
        return x instanceof Raw;
      };
      return create_html_escaped_text_from_tagged_template_call(dont_escape_raw_instances);
    })());
    //.........................................................................................................
    (test_is_tagged_template_call = () => {
      var fn, Ωidsp___1, Ωidsp___2, Ωidsp___3;
      fn = function(...P) {
        return is_tagged_template_call(...P);
      };
      this.eq((Ωidsp___1 = function() {
        return fn();
      }), false);
      this.eq((Ωidsp___2 = function() {
        return fn([1, 2, 3]);
      }), false);
      this.eq((Ωidsp___3 = function() {
        return fn`[ 1, 2, 3, ]`;
      }), true);
      return null;
    })();
    //.........................................................................................................
    (test_escape_html_text = () => {
      var escape_html_text, Ωidsp___4, Ωidsp___5, Ωidsp___6;
      ({escape_html_text} = require_escape_html_text());
      this.eq((Ωidsp___4 = function() {
        return escape_html_text('');
      }), '');
      this.eq((Ωidsp___5 = function() {
        return escape_html_text('abc');
      }), 'abc');
      this.eq((Ωidsp___6 = function() {
        return escape_html_text('abc<tag>d&e&f</tag>');
      }), 'abc&lt;tag&gt;d&amp;e&amp;f&lt;/tag&gt;');
      return null;
    })();
    //.........................................................................................................
    (test_html_safe_text_from_tagged_template_call = () => {
      var fn, Ωidsp__10, Ωidsp___7, Ωidsp___8, Ωidsp___9;
      fn = html_safe_text_from_tagged_template_call;
      this.eq((Ωidsp___7 = function() {
        return fn``;
      }), '');
      this.eq((Ωidsp___8 = function() {
        return fn`abc`;
      }), 'abc');
      this.eq((Ωidsp___9 = function() {
        return fn`abc<tag>d&e&f</tag>`;
      }), 'abc<tag>d&e&f</tag>');
      this.eq((Ωidsp__10 = function() {
        return fn`(${'abc<tag>d&e&f</tag>'})`;
      }), '(abc&lt;tag&gt;d&amp;e&amp;f&lt;/tag&gt;)');
      return null;
    })();
    //.........................................................................................................
    return null;
  };

  //===========================================================================================================
  demo_proxy_as_html_producer = function() {
    //.........................................................................................................
    echo('——————————————————————————————————————————————————————————————————————————————');
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var guytest_cfg;
      // demo_infinite_proxy()
      // demo_colorful_proxy()
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
      (new Test(guytest_cfg)).test({tests});
      return demo_proxy_as_html_producer();
    })();
  }

}).call(this);

//# sourceMappingURL=demo-infinite-doublestack-proxy-as-html-producer.js.map