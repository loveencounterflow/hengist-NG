(async function() {
  /*

  ## Applications

  * **RegEx Builder** (example from [Rejigs blog post](https://medium.com/@omarzawahry/rejigs-making-regular-expressions-human-readable-1fad37cb3eae))

  ```java
  var emailRegex =
      Rejigs.Create()
            .AtStart()
            .OneOrMore(r => r.AnyLetterOrDigit().Or().AnyOf("._%+-"))
            .Text("@")
            .OneOrMore(r => r.AnyLetterOrDigit().Or().AnyOf(".-"))
            .Text(".")
            .AnyLetterOrDigit().AtLeast(2)
            .AtEnd()
            .Build();
  ```

  * **HTML/XML Builer**
  * **SQL Builder**
  * **CLI Coloring**
  * syntax for a **Type Checker**

   */
  'use strict';
  var GTNG, GUY, Raw, Test, alert, blue, bold, create_html_escaped_text_from_tagfun_call, debug, demo_proxy_as_html_producer, echo, f, gold, green, grey, help, info, inspect, log, nfa, plain, praise, red, require_doublestack_infiniproxy, require_escape_html_text, require_list_tools, require_managed_property_tools, require_nameit, require_stack_classes, require_tagfun_tools, reverse, rpr, tests, urge, warn, whisper, white;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-proxy'));

  ({rpr, inspect, echo, white, green, blue, gold, grey, red, bold, reverse, log} = GUY.trm);

  ({f} = require('../../../apps/effstring'));

  // write                     = ( p ) -> process.stdout.write p
  ({nfa} = require('../../../apps/normalize-function-arguments'));

  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  //###########################################################################################################

  //===========================================================================================================
  /* NOTE Future Single-File Module */
  require_list_tools = function() {
    var append, is_empty;
    append = function(list, ...P) {
      return list.splice(list.length, 0, ...P);
    };
    is_empty = function(list) {
      return list.length === 0;
    };
    return {append, is_empty};
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
    var create_get_first_argument_fn, is_tagfun_call;
    create_get_first_argument_fn = function(as_text = null) {
      var get_first_argument;
      if (as_text == null) {
        as_text = function(expression) {
          return `${expression}`;
        };
      }
      /* TAINT use proper validation */
      if ((typeof as_text) !== 'function') {
        throw new Error(`Ωidsp___1 expected a function, got ${rpr(as_text)}`);
      }
      //.......................................................................................................
      get_first_argument = function(...P) {
        var R, expression, expressions, i, idx, len, parts;
        /* Given the arguments of either a tagged template function call ('tagfun call') or the single
             argument of a conventional function call, return either
             * the result of applying `as_text()` to the sole argument, or
             * the result of concatenating the constant parts and the interpolated expressions, which each
             expression replaced by the result of applying `as_text()` to it.  */
        if (!is_tagfun_call(...P)) {
          if (P.length !== 1) {
            throw new Error(`Ωidsp___2 expected 1 argument, got ${P.length}`);
          }
          return as_text(P[0]);
        }
        //.....................................................................................................
        [parts, ...expressions] = P;
        R = parts[0];
        for (idx = i = 0, len = expressions.length; i < len; idx = ++i) {
          expression = expressions[idx];
          R += (as_text(expression)) + parts[idx + 1];
        }
        return R;
      };
      //.......................................................................................................
      get_first_argument.create = create_get_first_argument_fn;
      return get_first_argument;
    };
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
    return {
      //---------------------------------------------------------------------------------------------------------
      get_first_argument: create_get_first_argument_fn(),
      is_tagfun_call
    };
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
        toString() {
          var e;
          return `[${((function() {
            var i, len, ref, results;
            ref = this.data;
            results = [];
            for (i = 0, len = ref.length; i < len; i++) {
              e = ref[i];
              results.push(`${e}`);
            }
            return results;
          }).call(this)).join`.`}]`;
        }

        clear() {
          this.data.length = 0;
          return null;
        }

        * [Symbol.iterator]() {
          return (yield* this.data);
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
          if (this.is_empty) {
            if (fallback !== misfit) {
              return fallback;
            }
            throw new XXX_Stack_error("Ωidsp___3 unable to pop value from empty stack");
          }
          return this.data.pop();
        }

        //---------------------------------------------------------------------------------------------------------
        shift(fallback = misfit) {
          if (this.is_empty) {
            if (fallback !== misfit) {
              return fallback;
            }
            throw new XXX_Stack_error("Ωidsp___4 unable to shift value from empty stack");
          }
          return this.data.shift();
        }

        //---------------------------------------------------------------------------------------------------------
        peek(fallback = misfit) {
          if (this.is_empty) {
            if (fallback !== misfit) {
              return fallback;
            }
            throw new XXX_Stack_error("Ωidsp___5 unable to peek value of empty stack");
          }
          return this.data.at(-1);
        }

      };

      //---------------------------------------------------------------------------------------------------------
      set_getter(Stack.prototype, 'length', function() {
        return this.data.length;
      });

      set_getter(Stack.prototype, 'is_empty', function() {
        return this.data.length === 0;
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
        toString() {
          if (this.length === 0) {
            return "{ DS[] }";
          } else {
            return `{ DS[ ${this.length - 1} ] = ${this.peek_stack('[]')} }`;
          }
        }

        clear() {
          this.data.length = 0;
          return null;
        }

        /* TAINT might want to iterate over topmost stack in @data */
        * [Symbol.iterator]() {
          return (yield* this.data);
        }

        //---------------------------------------------------------------------------------------------------------
        push_new_stack() {
          this.data.push(new Stack());
          return this.peek_stack();
        }

        // unshift_new_stack:  -> @data.unshift []; null

          //---------------------------------------------------------------------------------------------------------
        pop_old_stack(fallback = misfit) {
          if (this.is_empty) {
            if (fallback !== misfit) {
              return fallback;
            }
            throw new XXX_Stack_error("Ωidsp___6 unable to peek value of empty stack");
          }
          return this.data.pop();
        }

        // #---------------------------------------------------------------------------------------------------------
        // shift_old_stack:  ( fallback = misfit ) ->
        //   if @is_empty
        //     return fallback unless fallback is misfit
        //     throw new XXX_Stack_error "Ωidsp___7 unable to peek value of empty stack"
        //   return @data.shift()

          //---------------------------------------------------------------------------------------------------------
        peek_stack(fallback = misfit) {
          if (this.is_empty) {
            if (fallback !== misfit) {
              return fallback;
            }
            throw new XXX_Stack_error("Ωidsp___8 unable to peek value of empty stack");
          }
          return this.data.at(-1);
        }

      };

      //---------------------------------------------------------------------------------------------------------
      set_getter(Doublestack.prototype, 'length', function() {
        return this.data.length;
      });

      set_getter(Doublestack.prototype, 'is_empty', function() {
        return this.data.length === 0;
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
      is_initial: true
    };
    // empty_stack_on_new_chain: true
    //-----------------------------------------------------------------------------------------------------------
    create_doublestack_infiniproxy = function(base) {
      var doublestack, extendended_base, get_proxy, new_doublestack_infiniproxy;
      doublestack = new Doublestack();
      get_proxy = Symbol('get_proxy');
      //.........................................................................................................
      extendended_base = function(...P) {
        var R;
        R = base(...P);
        if (!doublestack.is_empty) {
          doublestack.pop_old_stack();
        }
        return R;
      };
      //---------------------------------------------------------------------------------------------------------
      new_doublestack_infiniproxy = function(cfg) {
        var R, proxy;
        cfg = {...dsip_cfg_template, ...cfg};
        // cfg.is_initial = false unless cfg.empty_stack_on_new_chain
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
            if (cfg.is_initial) {
              doublestack.push_new_stack();
            }
            doublestack.peek_stack().push(key);
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
    var escape_html_text, get_first_argument, html_safe_text_from_tagfun_call;
    ({get_first_argument} = require_tagfun_tools());
    ({escape_html_text} = require_escape_html_text());
    //.........................................................................................................
    html_safe_text_from_tagfun_call = get_first_argument.create(function(expression) {
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
      var fn, is_tagfun_call, Ωidsp__10, Ωidsp__11, Ωidsp___9;
      ({is_tagfun_call} = require_tagfun_tools());
      fn = function(...P) {
        return is_tagfun_call(...P);
      };
      this.eq((Ωidsp___9 = function() {
        return fn();
      }), false);
      this.eq((Ωidsp__10 = function() {
        return fn([1, 2, 3]);
      }), false);
      this.eq((Ωidsp__11 = function() {
        return fn`[ 1, 2, 3, ]`;
      }), true);
      return null;
    })();
    //.........................................................................................................
    (test_escape_html_text = () => {
      var escape_html_text, Ωidsp__12, Ωidsp__13, Ωidsp__14;
      ({escape_html_text} = require_escape_html_text());
      this.eq((Ωidsp__12 = function() {
        return escape_html_text('');
      }), '');
      this.eq((Ωidsp__13 = function() {
        return escape_html_text('abc');
      }), 'abc');
      this.eq((Ωidsp__14 = function() {
        return escape_html_text('abc<tag>d&e&f</tag>');
      }), 'abc&lt;tag&gt;d&amp;e&amp;f&lt;/tag&gt;');
      return null;
    })();
    //.........................................................................................................
    (test_html_safe_text_from_tagfun_call = () => {
      var fn, html_safe_text_from_tagfun_call, Ωidsp__15, Ωidsp__16, Ωidsp__17, Ωidsp__18;
      ({html_safe_text_from_tagfun_call} = (() => {
        var dont_escape_raw_instances;
        dont_escape_raw_instances = function(x) {
          return x instanceof Raw;
        };
        return create_html_escaped_text_from_tagfun_call(dont_escape_raw_instances);
      })());
      fn = html_safe_text_from_tagfun_call;
      this.eq((Ωidsp__15 = function() {
        return fn``;
      }), '');
      this.eq((Ωidsp__16 = function() {
        return fn`abc`;
      }), 'abc');
      this.eq((Ωidsp__17 = function() {
        return fn`abc<tag>d&e&f</tag>`;
      }), 'abc<tag>d&e&f</tag>');
      this.eq((Ωidsp__18 = function() {
        return fn`(${'abc<tag>d&e&f</tag>'})`;
      }), '(abc&lt;tag&gt;d&amp;e&amp;f&lt;/tag&gt;)');
      return null;
    })();
    //.........................................................................................................
    (test_doublestack = () => {
      var Doublestack, Stack, ds, my_stack_1, my_stack_2, Ωidsp__19, Ωidsp__20, Ωidsp__21, Ωidsp__22, Ωidsp__23, Ωidsp__24, Ωidsp__25;
      ({Stack, Doublestack} = require_stack_classes());
      ds = new Doublestack();
      my_stack_1 = null;
      my_stack_2 = null;
      this.eq((Ωidsp__19 = function() {
        return ds.data;
      }), []);
      this.eq((Ωidsp__20 = function() {
        return ds.length;
      }), 0);
      this.eq((Ωidsp__21 = function() {
        return ds.peek_stack(null);
      }), null);
      this.eq((Ωidsp__22 = function() {
        return (my_stack_1 = ds.push_new_stack()) instanceof Stack;
      }), true);
      this.eq((Ωidsp__23 = function() {
        return ds.length;
      }), 1);
      this.eq((Ωidsp__24 = function() {
        return (my_stack_2 = ds.peek_stack()) instanceof Stack;
      }), true);
      this.eq((Ωidsp__25 = function() {
        return my_stack_1 === my_stack_2;
      }), true);
      return null;
    })();
    //.........................................................................................................
    (test_doublestack_infiniproxy = () => {
      var create_doublestack_infiniproxy, create_echoing_proxy, get_first_argument, is_tagfun_call;
      ({is_tagfun_call} = require_tagfun_tools());
      ({create_doublestack_infiniproxy} = require_doublestack_infiniproxy());
      ({get_first_argument} = require_tagfun_tools());
      //.......................................................................................................
      create_echoing_proxy = function(doublestack) {
        var base, proxy;
        base = function(...P) {
          var chain, text;
          text = get_first_argument(...P);
          chain = doublestack.peek_stack().data.join('.');
          return `[${chain}:${rpr(text)}]`;
        };
        ({proxy, doublestack} = create_doublestack_infiniproxy(base));
        return {proxy, doublestack};
      };
      (() => {        //.......................................................................................................
        var doublestack, proxy, Ωidsp__29, Ωidsp__30, Ωidsp__31, Ωidsp__32, Ωidsp__33, Ωidsp__34;
        ({proxy, doublestack} = create_echoing_proxy());
        info('Ωidsp__26', rpr(proxy.gold.bold.underlined`text 1`));
        info('Ωidsp__27', rpr(proxy.red.reverse.italic`text 2`));
        info('Ωidsp__28', rpr(proxy.red.reverse.italic`text 2 ${proxy.gold.bold.underlined`(embedded text)`}!!`));
        //.......................................................................................................
        this.eq((Ωidsp__29 = function() {
          return proxy.gold.bold.underlined`text 1`;
        }), `[gold.bold.underlined:'text 1']`);
        this.eq((Ωidsp__30 = function() {
          return proxy.red.reverse.italic`text 2`;
        }), `[red.reverse.italic:'text 2']`);
        this.eq((Ωidsp__31 = function() {
          return proxy.red.reverse.italic`text 2 ${proxy.gold.bold.underlined`(embedded text)`}!!`;
        }), `[red.reverse.italic:"text 2 [gold.bold.underlined:'(embedded text)']!!"]`);
        /* NOTE 'unused' property chains shouldn't leave traces on stack, but they do: */
        this.eq((Ωidsp__32 = function() {
          return doublestack.length;
        }), 0);
        this.eq((Ωidsp__33 = function() {
          proxy.using_chain_2`some text`;
          return doublestack.length;
        }), 0);
        this.eq((Ωidsp__34 = function() {
          proxy.building.chain_1;
          proxy.using_chain_2`some text`;
          return doublestack.length;
        }), 1);
/* NOTE: should be 0 */        return null;
      })();
      (() => {        //.......................................................................................................
        var doublestack, proxy, Ωidsp__35, Ωidsp__36, Ωidsp__37, Ωidsp__38, Ωidsp__39;
        echo('——————————————————————————————————————————————————————————————————————————————');
        ({proxy, doublestack} = create_echoing_proxy());
        proxy.a.b.c;
        proxy.d.e.f;
        this.eq((Ωidsp__35 = function() {
          return doublestack.length;
        }), 2);
        this.eq((Ωidsp__36 = function() {
          return proxy.g.h.i(127);
        }), "[g.h.i:'127']");
        this.eq((Ωidsp__37 = function() {
          return doublestack.length;
        }), 2);
        this.eq((Ωidsp__38 = function() {
          return doublestack.clear();
        }), null);
        return this.eq((Ωidsp__39 = function() {
          return doublestack.length;
        }), 0);
      })();
      (() => {        //.......................................................................................................
        var doublestack, proxy, Ωidsp__40, Ωidsp__41, Ωidsp__42;
        echo('——————————————————————————————————————————————————————————————————————————————');
        ({proxy, doublestack} = create_echoing_proxy());
        this.eq((Ωidsp__40 = function() {
          return proxy.a.b.c(90);
        }), `[a.b.c:'90']`);
        this.eq((Ωidsp__41 = function() {
          return proxy.a.b.c(proxy.d.e.f(90));
        }), `[a.b.c:"[d.e.f:'90']"]`);
        this.eq((Ωidsp__42 = function() {
          return doublestack.length;
        }), 0);
        return null;
      })();
      //.......................................................................................................
      return null;
    })();
    //.........................................................................................................
    (test_doublestack_infiniproxy = () => {
      var H, append, create_doublestack_infiniproxy, create_html_proxy, escape_html_text, get_first_argument, get_first_argument_for_html, is_tagfun_call, Ωidsp__45, Ωidsp__46;
      ({is_tagfun_call} = require_tagfun_tools());
      ({create_doublestack_infiniproxy} = require_doublestack_infiniproxy());
      ({get_first_argument} = require_tagfun_tools());
      ({append} = require_list_tools());
      //.......................................................................................................
      ({escape_html_text} = require_escape_html_text());
      //.......................................................................................................
      get_first_argument_for_html = get_first_argument.create(function(x) {
        if (x instanceof Raw) {
          return `${x}`;
        }
        return escape_html_text(`${x}`);
      });
      //.......................................................................................................
      create_html_proxy = function(doublestack) {
        var base, proxy;
        base = function(...P) {
          var R, attr_names, chain, tag_name, text;
          text = get_first_argument_for_html(...P);
          debug('Ωidsp__43', rpr(text));
          if (doublestack.is_empty) {
            return text;
          }
          chain = doublestack.peek_stack();
          R = [];
          [tag_name, ...attr_names] = chain;
          append(R, '<', tag_name);
          debug('Ωidsp__44', [tag_name, attr_names]);
          append(R, '>', text, '</', tag_name, '>');
          return R.join('');
        };
        ({proxy, doublestack} = create_doublestack_infiniproxy(base));
        return {proxy, doublestack};
      };
      //.......................................................................................................
      echo('——————————————————————————————————————————————————————————————————————————————');
      ({
        proxy: H
      } = create_html_proxy());
      this.eq((Ωidsp__45 = function() {
        return H('<&>');
      }), "&lt;&amp;&gt;");
      this.eq((Ωidsp__46 = function() {
        return H(new Raw('<&>'));
      }), '<&>');
      // @.eq ( Ωidsp__47 = -> H.a.b.c H.d.e.f 90  ), """[a.b.c:'[d.e.f:90]']"""
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