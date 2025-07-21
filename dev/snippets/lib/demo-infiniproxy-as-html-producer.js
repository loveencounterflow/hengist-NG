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
  * **SQL Builder**: `SQL.insert.into.employees('id','name').values(id,name)`
  * **CLI Coloring**
  * syntax for a **Type Checker**

   */
  'use strict';
  var GTNG, GUY, SFMODULES, Test, alert, blue, bold, debug, echo, f, gold, green, grey, help, info, inspect, log, nfa, plain, praise, red, require_html_class, reverse, rpr, tests, urge, warn, whisper, white;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-proxy'));

  ({rpr, inspect, echo, white, green, blue, gold, grey, red, bold, reverse, log} = GUY.trm);

  ({f} = require('../../../apps/effstring'));

  // write                     = ( p ) -> process.stdout.write p
  ({nfa} = require('../../../apps/normalize-function-arguments'));

  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  SFMODULES = require('./single-file-modules');

  //===========================================================================================================
  require_html_class = function() {
    var Html;
    //---------------------------------------------------------------------------------------------------------
    Html = class Html {
      //-------------------------------------------------------------------------------------------------------
      constructor(name, atrs, content) {
        this.name = name;
        this.atrs = atrs != null ? atrs : new Map();
        this.content = content != null ? content : [];
        return void 0;
      }

      //-------------------------------------------------------------------------------------------------------
      toString() {
        var R, e, i, len, ref;
        R = [];
        R.push(`<${this.name}`);
        R.push(" ATRs");
        R.push(">");
        ref = this.content;
        for (i = 0, len = ref.length; i < len; i++) {
          e = ref[i];
          R.push(e);
        }
        R.push(`</${this.name}>`);
        return R.join('');
      }

    };
    //.........................................................................................................
    return {Html};
  };

  //===========================================================================================================
  tests = {
    //---------------------------------------------------------------------------------------------------------
    test_infiniproxy: function() {
      var H, Html, as_text, create_infiniproxy, escape_html_text, get_proxy, handler, is_tagfun_call, sub_proxy, walk_parts;
      ({Html} = require_html_class());
      ({walk_parts, is_tagfun_call} = SFMODULES.require_tagfun_tools());
      ({create_infiniproxy, get_proxy} = SFMODULES.require_infiniproxy());
      ({escape_html_text} = SFMODULES.require_escape_html_text());
      // { append,                         } = SFMODULES.require_list_tools()
      as_text = function(x) {
        return `${x}`;
      };
      //.......................................................................................................
      handler = function(...P) {
        var atrs, content, name;
        [name, ...atrs] = this.stack;
        // debug 'Ωdsh___1', [ @stack..., ]
        debug('Ωdsh___2', {name, atrs});
        content = [...(walk_parts(...P))];
        // for part from walk_parts P...
        //   debug 'Ωdsh___3', part
        return new Html(name, null, content);
      };
      //.......................................................................................................
      handler.on_click = function(...P) {
        // info 'Ωdsh___4', @
        // info 'Ωdsh___5', H
        return sub_proxy;
      };
      H = create_infiniproxy(handler);
      sub_proxy = H[get_proxy];
      //.......................................................................................................
      urge('Ωdsh___9', new Html('div'));
      urge('Ωdsh__10', new Html('div', null, "content"));
      urge('Ωdsh__11', as_text(new Html('div')));
      urge('Ωdsh__12', as_text(new Html('div', null, "content")));
      // urge 'Ωdsh__13',          H.div._cssclass"<content>"
      // urge 'Ωdsh__14', as_text  H.div._cssclass"<content>"
      // urge 'Ωdsh__15',          H.div.red.outline.on_click'doit()'
      urge('Ωdsh__16', H.div.red`<content>`);
      urge('Ωdsh__17', H.div.red.outline.on_click`doit()`.extra`<content>`);
      echo('——————————————————————————————————————————————————————————————————————————————');
      // urge 'Ωdsh__18',          GUY.trm.truth H.div is H.div.on_click
      urge('Ωdsh__19', H.div.on_click`doit()`);
      // urge 'Ωdsh__20',          GUY.trm.truth H.div is H.div.on_click'doit()'
      // urge 'Ωdsh__21',          H.div.on_click'doit()'._cssclass # "<content>"
      urge('Ωdsh__22', H.div.on_click`doit()`._cssclass`<content>`);
      //.......................................................................................................
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

}).call(this);

//# sourceMappingURL=demo-infiniproxy-as-html-producer.js.map