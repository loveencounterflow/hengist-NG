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
  var GTNG, GUY, SFMODULES, Test, alert, blue, bold, debug, echo, f, gold, green, grey, help, info, inspect, log, nfa, plain, praise, red, reverse, rpr, tests, urge, warn, whisper, white;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('test-single-file-modules'));

  ({rpr, inspect, echo, white, green, blue, gold, grey, red, bold, reverse, log} = GUY.trm);

  ({f} = require('../../../apps/effstring'));

  // write                     = ( p ) -> process.stdout.write p
  ({nfa} = require('../../../apps/normalize-function-arguments'));

  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  SFMODULES = require('./single-file-modules');

  //===========================================================================================================
  tests = {
    //---------------------------------------------------------------------------------------------------------
    test_is_tagfun_call: function() {
      var fn, is_tagfun_call, Ωidsp___1, Ωidsp___2, Ωidsp___3;
      ({is_tagfun_call} = SFMODULES.require_tagfun_tools());
      fn = function(...P) {
        return is_tagfun_call(...P);
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
    },
    //---------------------------------------------------------------------------------------------------------
    test_escape_html_text: function() {
      var escape_html_text, Ωidsp___4, Ωidsp___5, Ωidsp___6;
      ({escape_html_text} = SFMODULES.require_escape_html_text());
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
    },
    //---------------------------------------------------------------------------------------------------------
    test_doublestack: function() {
      var Doublestack, Stack, ds, my_stack_1, my_stack_2, Ωidsp__10, Ωidsp__11, Ωidsp__12, Ωidsp__13, Ωidsp___7, Ωidsp___8, Ωidsp___9;
      ({Stack, Doublestack} = SFMODULES.require_stack_classes());
      ds = new Doublestack();
      my_stack_1 = null;
      my_stack_2 = null;
      this.eq((Ωidsp___7 = function() {
        return ds.data;
      }), []);
      this.eq((Ωidsp___8 = function() {
        return ds.length;
      }), 0);
      this.eq((Ωidsp___9 = function() {
        return ds.peek_stack(null);
      }), null);
      this.eq((Ωidsp__10 = function() {
        return (my_stack_1 = ds.push_new_stack()) instanceof Stack;
      }), true);
      this.eq((Ωidsp__11 = function() {
        return ds.length;
      }), 1);
      this.eq((Ωidsp__12 = function() {
        return (my_stack_2 = ds.peek_stack()) instanceof Stack;
      }), true);
      this.eq((Ωidsp__13 = function() {
        return my_stack_1 === my_stack_2;
      }), true);
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    test_doublestack_infiniproxy: function() {
      var create_doublestack_infiniproxy, create_echoing_proxy, is_tagfun_call, walk_parts;
      ({is_tagfun_call, walk_parts} = SFMODULES.require_tagfun_tools());
      ({create_doublestack_infiniproxy} = SFMODULES.require_doublestack_infiniproxy());
      //.......................................................................................................
      create_echoing_proxy = function() {
        var R, base;
        base = function(...P) {
          var chain, part, text;
          debug('Ωidsp__14', P);
          text = '';
          for (part of walk_parts(...P)) {
            if (part.isa === 'chunk') {
              text += part.chunk;
            } else {
              debug('Ωidsp__15', part);
              text += `${part.value}`;
            }
          }
          chain = this.stack.data.join('.');
          return `[${chain}:${text}]`;
        };
        R = create_doublestack_infiniproxy(base);
        return R;
      };
      (() => {        //.......................................................................................................
        var PRX, Ωidsp__19, Ωidsp__20, Ωidsp__21, Ωidsp__22, Ωidsp__23, Ωidsp__24;
        PRX = create_echoing_proxy();
        info('Ωidsp__16', rpr(PRX.gold.bold.underlined`text 1`));
        info('Ωidsp__17', rpr(PRX.red.reverse.italic`text 2`));
        info('Ωidsp__18', rpr(PRX.red.reverse.italic`text 2 ${PRX.gold.bold.underlined`(embedded text)`}!!`));
        //.......................................................................................................
        this.eq((Ωidsp__19 = function() {
          return PRX.gold.bold.underlined`text 1`;
        }), `[gold.bold.underlined:text 1]`);
        this.eq((Ωidsp__20 = function() {
          return PRX.red.reverse.italic`text 2`;
        }), `[red.reverse.italic:text 2]`);
        this.eq((Ωidsp__21 = function() {
          return PRX.red.reverse.italic`text 2 ${PRX.gold.bold.underlined`(embedded text)`}!!`;
        }), `[red.reverse.italic:text 2 [gold.bold.underlined:(embedded text)]!!]`);
        /* NOTE 'unused' property chains shouldn't leave traces on stack, but they do: */
        this.eq((Ωidsp__22 = function() {
          return PRX.doublestack.length;
        }), 0);
        this.eq((Ωidsp__23 = function() {
          PRX.using_chain_2`some text`;
          return PRX.doublestack.length;
        }), 0);
        this.eq((Ωidsp__24 = function() {
          PRX.building.chain_1;
          PRX.using_chain_2`some text`;
          return PRX.doublestack.length;
        }), 1);
/* NOTE: should be 0 */        return null;
      })();
      (() => {        //.......................................................................................................
        var PRX, Ωidsp__25, Ωidsp__26, Ωidsp__27, Ωidsp__28, Ωidsp__29;
        echo('——————————————————————————————————————————————————————————————————————————————');
        PRX = create_echoing_proxy();
        PRX.a.b.c;
        PRX.d.e.f;
        this.eq((Ωidsp__25 = function() {
          return PRX.doublestack.length;
        }), 2);
        this.eq((Ωidsp__26 = function() {
          return PRX.g.h.i(127);
        }), "[g.h.i:127]");
        this.eq((Ωidsp__27 = function() {
          return PRX.doublestack.length;
        }), 2);
        this.eq((Ωidsp__28 = function() {
          return PRX.doublestack.clear();
        }), null);
        return this.eq((Ωidsp__29 = function() {
          return PRX.doublestack.length;
        }), 0);
      })();
      (() => {        //.......................................................................................................
        var PRX, Ωidsp__30, Ωidsp__31, Ωidsp__32;
        echo('——————————————————————————————————————————————————————————————————————————————');
        PRX = create_echoing_proxy();
        this.eq((Ωidsp__30 = function() {
          return PRX.a.b.c(90);
        }), `[a.b.c:90]`);
        this.eq((Ωidsp__31 = function() {
          return PRX.a.b.c(PRX.d.e.f(90));
        }), `[a.b.c:[d.e.f:90]]`);
        this.eq((Ωidsp__32 = function() {
          return PRX.doublestack.length;
        }), 0);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    test_walk_tagfun_call_parts: function() {
      var walk_nonempty_parts, walk_parts, walk_raw_nonempty_parts, walk_raw_parts, Ωt__33, Ωt__34, Ωt__35, Ωt__36, Ωt__37, Ωt__38, Ωt__39, Ωt__40, Ωt__41, Ωt__42, Ωt__43, Ωt__44, Ωt__45, Ωt__46, Ωt__47, Ωt__48, Ωt__49;
      // { Html,                     } = require_html_class()
      // { escape_html_text,         } = require_escape_html_text()
      // { stackable_tagfun,         } = require_stackable_tagfun()
      ({walk_parts, walk_nonempty_parts, walk_raw_parts, walk_raw_nonempty_parts} = SFMODULES.require_tagfun_tools());
      //-------------------------------------------------------------------------------------------------------
      this.eq((Ωt__33 = function() {
        return [...(walk_parts``)];
      }), [
        {
          chunk: '',
          isa: 'chunk'
        }
      ]);
      this.eq((Ωt__34 = function() {
        return [...(walk_parts(""))];
      }), [
        {
          chunk: '',
          isa: 'chunk'
        }
      ]);
      this.eq((Ωt__35 = function() {
        return [...(walk_nonempty_parts``)];
      }), []);
      this.eq((Ωt__36 = function() {
        return [...(walk_nonempty_parts(''))];
      }), []);
      this.eq((Ωt__37 = function() {
        return [...(walk_parts`a`)];
      }), [
        {
          chunk: 'a',
          isa: 'chunk'
        }
      ]);
      this.eq((Ωt__38 = function() {
        return [...(walk_parts`\na`)];
      }), [
        {
          chunk: '\na',
          isa: 'chunk'
        }
      ]);
      this.eq((Ωt__39 = function() {
        return [...(walk_raw_parts`\na`)];
      }), [
        {
          chunk: '\\na',
          isa: 'chunk'
        }
      ]);
      this.eq((Ωt__40 = function() {
        return [...(walk_parts`${1}`)];
      }), [
        {
          chunk: '',
          isa: 'chunk'
        },
        {
          value: 1,
          isa: 'value'
        },
        {
          chunk: '',
          isa: 'chunk'
        }
      ]);
      this.eq((Ωt__41 = function() {
        return [...(walk_nonempty_parts`${1}`)];
      }), [
        {
          value: 1,
          isa: 'value'
        }
      ]);
      this.eq((Ωt__42 = function() {
        return [...(walk_parts`a${1}`)];
      }), [
        {
          chunk: 'a',
          isa: 'chunk'
        },
        {
          value: 1,
          isa: 'value'
        },
        {
          chunk: '',
          isa: 'chunk'
        }
      ]);
      this.eq((Ωt__43 = function() {
        return [...(walk_parts`${1}${2}`)];
      }), [
        {
          chunk: '',
          isa: 'chunk'
        },
        {
          value: 1,
          isa: 'value'
        },
        {
          chunk: '',
          isa: 'chunk'
        },
        {
          value: 2,
          isa: 'value'
        },
        {
          chunk: '',
          isa: 'chunk'
        }
      ]);
      this.eq((Ωt__44 = function() {
        return [...(walk_nonempty_parts`${1}${2}`)];
      }), [
        {
          value: 1,
          isa: 'value'
        },
        {
          value: 2,
          isa: 'value'
        }
      ]);
      this.eq((Ωt__45 = function() {
        return [...(walk_parts`a${1}z`)];
      }), [
        {
          chunk: 'a',
          isa: 'chunk'
        },
        {
          value: 1,
          isa: 'value'
        },
        {
          chunk: 'z',
          isa: 'chunk'
        }
      ]);
      this.eq((Ωt__46 = function() {
        return [...(walk_parts`a${1}z${2}`)];
      }), [
        {
          chunk: 'a',
          isa: 'chunk'
        },
        {
          value: 1,
          isa: 'value'
        },
        {
          chunk: 'z',
          isa: 'chunk'
        },
        {
          value: 2,
          isa: 'value'
        },
        {
          chunk: '',
          isa: 'chunk'
        }
      ]);
      this.eq((Ωt__47 = function() {
        return [...(walk_parts(`a${1}z${2}`))];
      }), [
        {
          chunk: 'a1z2',
          isa: 'chunk'
        }
      ]);
      this.eq((Ωt__48 = function() {
        return [...(walk_parts(12))];
      }), [
        {
          chunk: '',
          isa: 'chunk'
        },
        {
          value: 12,
          isa: 'value'
        },
        {
          chunk: '',
          isa: 'chunk'
        }
      ]);
      this.eq((Ωt__49 = function() {
        return [...(walk_nonempty_parts(12))];
      }), [
        {
          value: 12,
          isa: 'value'
        }
      ]);
      //.........................................................................................................
      return null;
    }
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
      return (new Test(guytest_cfg)).test({tests});
    })();
  }

  // f = ( ctx ) -> debug 'Ωidsp__50', ctx.arguments
// g = ( P... ) -> debug 'Ωidsp__51', f { arguments, }
// g 5, 'd'

}).call(this);

//# sourceMappingURL=test-single-file-modules.js.map