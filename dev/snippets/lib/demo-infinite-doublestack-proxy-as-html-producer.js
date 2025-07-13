(async function() {
  'use strict';
  var GTNG, GUY, Raw, Test, alert, blue, bold, create_html_escaped_text_from_tagfun_call, debug, demo_proxy_as_html_producer, echo, f, gold, grey, help, info, inspect, log, nfa, plain, praise, red, require_doublestack_infiniproxy, require_escape_html_text, require_list_tools, require_managed_property_tools, require_nameit, require_stack_classes, require_tagfun_tools, reverse, rpr, tests, urge, warn, whisper, white;

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
  require_list_tools = function() {
    var append;
    append = function(list, ...P) {
      return list.splice(list.length, 0, ...P);
    };
    return {append};
  };

  //===========================================================================================================
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

  //===========================================================================================================
  /* NOTE Future Single-File Module */
  require_tagfun_tools = function() {
    /* NOTE When `expression_to_string` is given, it will be used to turn each expression (the parts of
     tagged templates that are within curlies) into a string; could use this to apply some escaping etc. */
    /* TAINT should provide means to also format constant parts */
    var create_text_from_tagfun_call, is_tagfun_call, text_from_tagfun_call;
    create_text_from_tagfun_call = function(expression_to_string = null) {
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
    text_from_tagfun_call = create_text_from_tagfun_call();
    //---------------------------------------------------------------------------------------------------------
    is_tagfun_call = function(...P) {
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
    //---------------------------------------------------------------------------------------------------------
    return {create_text_from_tagfun_call, text_from_tagfun_call, is_tagfun_call};
  };

  //===========================================================================================================
  /* NOTE Future Single-File Module */
  require_managed_property_tools = function() {
    var hide, set_getter;
    set_getter = function(object, name, get) {
      return Object.defineProperties(object, {
        [name]: {get}
      });
    };
    hide = (object, name, value) => {
      return Object.defineProperty(object, name, {
        enumerable: false,
        writable: true,
        configurable: true,
        value: value
      });
    };
    //---------------------------------------------------------------------------------------------------------
    return {set_getter, hide};
  };

  //===========================================================================================================
  /* NOTE Future Single-File Module */
  require_nameit = function() {
    var nameit;
    nameit = function(name, fn) {
      Object.defineProperty(fn, 'name', {
        value: name
      });
      return fn;
    };
    //---------------------------------------------------------------------------------------------------------
    return {nameit};
  };

  //===========================================================================================================
  /* NOTE Future Single-File Module */
  require_stack_classes = function() {
    var Doublestack, Stack, XXX_Stack_error, hide, misfit, set_getter;
    ({set_getter, hide} = require_managed_property_tools());
    misfit = Symbol('misfit');
    XXX_Stack_error = class XXX_Stack_error extends Error {};
    Stack = (function() {
      //===========================================================================================================
      class Stack {
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
        pop(fallback = misfit) {
          if (this.length < 1) {
            if (fallback !== misfit) {
              return fallback;
            }
            throw new XXX_Stack_error("Ωidsp___1 unable to pop value from empty stack");
          }
          return this.data.pop();
        }

        //---------------------------------------------------------------------------------------------------------
        shift(fallback = misfit) {
          if (this.length < 1) {
            if (fallback !== misfit) {
              return fallback;
            }
            throw new XXX_Stack_error("Ωidsp___2 unable to shift value from empty stack");
          }
          return this.data.shift();
        }

        //---------------------------------------------------------------------------------------------------------
        peek(fallback = misfit) {
          if (this.length < 1) {
            if (fallback !== misfit) {
              return fallback;
            }
            throw new XXX_Stack_error("Ωidsp___3 unable to peek value of empty stack");
          }
          return this.data.at(-1);
        }

      };

      //---------------------------------------------------------------------------------------------------------
      set_getter(Stack.prototype, 'length', function() {
        return this.data.length;
      });

      return Stack;

    }).call(this);
    Doublestack = (function() {
      //===========================================================================================================
      class Doublestack {
        //---------------------------------------------------------------------------------------------------------
        constructor() {
          this.data = [];
          return void 0;
        }

        //---------------------------------------------------------------------------------------------------------
        push_new_stack() {
          this.data.push(new Stack());
          return this.peek_stack();
        }

        // unshift_new_stack:  -> @data.unshift []; null

          //---------------------------------------------------------------------------------------------------------
        pop_old_stack(fallback = misfit) {
          if (this.length < 1) {
            if (fallback !== misfit) {
              return fallback;
            }
            throw new XXX_Stack_error("Ωidsp___4 unable to peek value of empty stack");
          }
          return this.data.pop();
        }

        // #---------------------------------------------------------------------------------------------------------
        // shift_old_stack:  ( fallback = misfit ) ->
        //   if @length < 1
        //     return fallback unless fallback is misfit
        //     throw new XXX_Stack_error "Ωidsp___5 unable to peek value of empty stack"
        //   return @data.shift()

          //---------------------------------------------------------------------------------------------------------
        peek_stack(fallback = misfit) {
          if (this.length < 1) {
            if (fallback !== misfit) {
              return fallback;
            }
            throw new XXX_Stack_error("Ωidsp___6 unable to peek value of empty stack");
          }
          return this.data.at(-1);
        }

      };

      //---------------------------------------------------------------------------------------------------------
      set_getter(Doublestack.prototype, 'length', function() {
        return this.data.length;
      });

      return Doublestack;

    }).call(this);
    //-----------------------------------------------------------------------------------------------------------
    return {Stack, Doublestack};
  };

  //===========================================================================================================
  /* NOTE Future Single-File Module */
  require_doublestack_infiniproxy = function() {
    var Doublestack, Stack, create_doublestack_infiniproxy, dsip_cfg_template;
    ({Stack, Doublestack} = require_stack_classes());
    //...........................................................................................................
    dsip_cfg_template = {
      base: null,
      is_initial: true,
      empty_stack_on_new_chain: true
    };
    //-----------------------------------------------------------------------------------------------------------
    create_doublestack_infiniproxy = function(base) {
      var doublestack, extendended_base, get_proxy, new_doublestack_infiniproxy;
      doublestack = new Doublestack();
      get_proxy = Symbol('get_proxy');
      //.........................................................................................................
      extendended_base = function(...P) {
        var R;
        R = base(...P);
        doublestack.pop_old_stack();
        return R;
      };
      //---------------------------------------------------------------------------------------------------------
      new_doublestack_infiniproxy = function(cfg) {
        var R, proxy;
        cfg = {...dsip_cfg_template, ...cfg};
        if (!cfg.empty_stack_on_new_chain) {
          cfg.is_initial = false;
        }
        //.......................................................................................................
        proxy = new Proxy(extendended_base, {
          get: function(target, key) {
            if (key === get_proxy) {
              return new_doublestack_infiniproxy({
                base,
                is_initial: false
              });
            }
            if ((typeof key) === 'symbol') {
              return target[key];
            }
            if (Reflect.has(target, key)) {
              return target[key];
            }
            // XXX_before = ( peek_stack() ? [] )[ .. ]
            if (cfg.is_initial) {
              doublestack.push_new_stack();
            }
            doublestack.peek_stack().push(key);
            // XXX_mark = if is_initial then ( reverse red bold ' I ' ) else ( reverse white bold ' S ' )
            // XXX_stack = ( peek_stack() ? [] )[ .. ]
            // debug 'Ω___7', XXX_mark, 'key:', ( rpr key ), 'before:', ( gold rpr XXX_before.join '.' ), 'after:', ( blue rpr XXX_stack.join '.' )
            return R;
          }
        });
        if (cfg.is_initial) {
          R = new_doublestack_infiniproxy({
            base,
            is_initial: false
          });
        } else {
          R = proxy;
        }
        return proxy;
      };
      //.........................................................................................................
      return ((proxy) => {
        return {proxy, doublestack};
      })(new_doublestack_infiniproxy(base));
    };
    //-----------------------------------------------------------------------------------------------------------
    return {create_doublestack_infiniproxy};
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

  //===========================================================================================================
  create_html_escaped_text_from_tagfun_call = function(dont_escape = null) {
    /* NOTE will only escape *expressions* of tagged templates, not the constant parts */
    var create_text_from_tagfun_call, escape_html_text, html_safe_text_from_tagfun_call;
    ({create_text_from_tagfun_call} = require_tagfun_tools());
    ({escape_html_text} = require_escape_html_text());
    //.........................................................................................................
    html_safe_text_from_tagfun_call = create_text_from_tagfun_call(function(expression) {
      var R;
      R = `${expression}`;
      if ((dont_escape != null) && (!dont_escape(expression))) {
        R = escape_html_text(R);
      }
      return R;
    });
    //.........................................................................................................
    return {html_safe_text_from_tagfun_call};
  };

  //===========================================================================================================
  tests = function() {
    var test_doublestack, test_doublestack_infiniproxy, test_escape_html_text, test_html_safe_text_from_tagfun_call, test_is_tagfun_call;
    //.........................................................................................................
    (test_is_tagfun_call = () => {
      var fn, is_tagfun_call, Ωidsp__10, Ωidsp___8, Ωidsp___9;
      ({is_tagfun_call} = require_tagfun_tools());
      fn = function(...P) {
        return is_tagfun_call(...P);
      };
      this.eq((Ωidsp___8 = function() {
        return fn();
      }), false);
      this.eq((Ωidsp___9 = function() {
        return fn([1, 2, 3]);
      }), false);
      this.eq((Ωidsp__10 = function() {
        return fn`[ 1, 2, 3, ]`;
      }), true);
      return null;
    })();
    //.........................................................................................................
    (test_escape_html_text = () => {
      var escape_html_text, Ωidsp__11, Ωidsp__12, Ωidsp__13;
      ({escape_html_text} = require_escape_html_text());
      this.eq((Ωidsp__11 = function() {
        return escape_html_text('');
      }), '');
      this.eq((Ωidsp__12 = function() {
        return escape_html_text('abc');
      }), 'abc');
      this.eq((Ωidsp__13 = function() {
        return escape_html_text('abc<tag>d&e&f</tag>');
      }), 'abc&lt;tag&gt;d&amp;e&amp;f&lt;/tag&gt;');
      return null;
    })();
    //.........................................................................................................
    (test_html_safe_text_from_tagfun_call = () => {
      var fn, html_safe_text_from_tagfun_call, Ωidsp__14, Ωidsp__15, Ωidsp__16, Ωidsp__17;
      ({html_safe_text_from_tagfun_call} = (() => {
        var dont_escape_raw_instances;
        dont_escape_raw_instances = function(x) {
          return x instanceof Raw;
        };
        return create_html_escaped_text_from_tagfun_call(dont_escape_raw_instances);
      })());
      fn = html_safe_text_from_tagfun_call;
      this.eq((Ωidsp__14 = function() {
        return fn``;
      }), '');
      this.eq((Ωidsp__15 = function() {
        return fn`abc`;
      }), 'abc');
      this.eq((Ωidsp__16 = function() {
        return fn`abc<tag>d&e&f</tag>`;
      }), 'abc<tag>d&e&f</tag>');
      this.eq((Ωidsp__17 = function() {
        return fn`(${'abc<tag>d&e&f</tag>'})`;
      }), '(abc&lt;tag&gt;d&amp;e&amp;f&lt;/tag&gt;)');
      return null;
    })();
    //.........................................................................................................
    (test_doublestack = () => {
      var Doublestack, Stack, ds, my_stack_1, my_stack_2, Ωidsp__18, Ωidsp__19, Ωidsp__20, Ωidsp__21, Ωidsp__22, Ωidsp__23, Ωidsp__24;
      ({Stack, Doublestack} = require_stack_classes());
      ds = new Doublestack();
      my_stack_1 = null;
      my_stack_2 = null;
      this.eq((Ωidsp__18 = function() {
        return ds.data;
      }), []);
      this.eq((Ωidsp__19 = function() {
        return ds.length;
      }), 0);
      this.eq((Ωidsp__20 = function() {
        return ds.peek_stack(null);
      }), null);
      this.eq((Ωidsp__21 = function() {
        return (my_stack_1 = ds.push_new_stack()) instanceof Stack;
      }), true);
      this.eq((Ωidsp__22 = function() {
        return ds.length;
      }), 1);
      this.eq((Ωidsp__23 = function() {
        return (my_stack_2 = ds.peek_stack()) instanceof Stack;
      }), true);
      this.eq((Ωidsp__24 = function() {
        return my_stack_1 === my_stack_2;
      }), true);
      return null;
    })();
    //.........................................................................................................
    (test_doublestack_infiniproxy = () => {
      var base, create_doublestack_infiniproxy, doublestack, is_tagfun_call, proxy, text_from_tagfun_call, Ωidsp__30, Ωidsp__31, Ωidsp__32;
      ({is_tagfun_call} = require_tagfun_tools());
      ({create_doublestack_infiniproxy} = require_doublestack_infiniproxy());
      ({text_from_tagfun_call} = require_tagfun_tools());
      //.......................................................................................................
      base = function(...P) {
        if (!is_tagfun_call(...P)) {
          throw new Error("Ωidsp__25 only allowed to be used as tagged template function call (tagfun call)");
        }
        // debug 'Ωidsp__26', text_from_tagfun_call P...
        return '[' + (doublestack.peek_stack().data.join('.')) + ':' + (text_from_tagfun_call(...P)) + ']';
      };
      //.......................................................................................................
      ({proxy, doublestack} = create_doublestack_infiniproxy(base));
      info('Ωidsp__27', rpr(proxy.gold.bold.underlined`text 1`));
      info('Ωidsp__28', rpr(proxy.red.reverse.italic`text 2`));
      info('Ωidsp__29', rpr(proxy.red.reverse.italic`text 2 ${proxy.gold.bold.underlined`(embedded text)`}!!`));
      this.eq((Ωidsp__30 = function() {
        return proxy.gold.bold.underlined`text 1`;
      }), '[gold.bold.underlined:text 1]');
      this.eq((Ωidsp__31 = function() {
        return proxy.red.reverse.italic`text 2`;
      }), '[red.reverse.italic:text 2]');
      this.eq((Ωidsp__32 = function() {
        return proxy.red.reverse.italic`text 2 ${proxy.gold.bold.underlined`(embedded text)`}!!`;
      }), '[red.reverse.italic:text 2 [gold.bold.underlined:(embedded text)]!!]');
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

  // demo_managed_properties()

}).call(this);

//# sourceMappingURL=demo-infinite-doublestack-proxy-as-html-producer.js.map