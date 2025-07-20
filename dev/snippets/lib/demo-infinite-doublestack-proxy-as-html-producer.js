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
        var R, e, i, len;
        R = [];
        R.push(`<${name}`);
        R.push(" ATRs");
        R.push(">");
        for (i = 0, len = content.length; i < len; i++) {
          e = content[i];
          R.push(e);
        }
        R.push(`</${name}>`);
        return R.join('');
      }

    };
    return {Html};
  };

  //===========================================================================================================
  tests = {
    //---------------------------------------------------------------------------------------------------------
    test_doublestack_infiniproxy: function() {
      var append, create_doublestack_infiniproxy, escape_html_text, get_first_argument, is_tagfun_call;
      ({get_first_argument, is_tagfun_call} = SFMODULES.require_tagfun_tools());
      ({create_doublestack_infiniproxy} = SFMODULES.require_doublestack_infiniproxy());
      ({append} = SFMODULES.require_list_tools());
      //.......................................................................................................
      ({escape_html_text} = SFMODULES.require_escape_html_text());
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

//# sourceMappingURL=demo-infinite-doublestack-proxy-as-html-producer.js.map