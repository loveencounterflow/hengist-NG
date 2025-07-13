(async function() {
  'use strict';
  var GTNG, GUY, Raw, Test, alert, blue, bold, create_html_escaped_text_from_tagged_template_call, debug, demo_proxy_as_html_producer, echo, f, gold, grey, help, info, inspect, log, nfa, plain, praise, red, require_escape_html_text, require_list_utils, require_text_from_tagged_template_call, reverse, rpr, urge, warn, whisper, white;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-proxy'));

  ({rpr, inspect, echo, white, blue, gold, grey, red, bold, reverse, log} = GUY.trm);

  ({f} = require('../../../apps/effstring'));

  // write                     = ( p ) -> process.stdout.write p
  ({nfa} = require('../../../apps/normalize-function-arguments'));

  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

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
    var create_text_from_tagged_template_call;
    create_text_from_tagged_template_call = function(expression_to_string = null) {
      var text_from_tagged_template_call;
      return function(parts, ...expressions) {
        var R, expression, expression_rpr, i, idx, len;
        R = parts[0];
        for (idx = i = 0, len = expressions.length; i < len; idx = ++i) {
          expression = expressions[idx];
          if (expression_to_string != null) {
            expression_rpr = expression_to_string(expression);
          } else {
            expression_rpr = `${expression}`;
          }
          R += expression_rpr + parts[idx + 1];
        }
        return R;
      };
      return text_from_tagged_template_call = create_text_from_tagged_template_call();
    };
    return {create_text_from_tagged_template_call, text_from_tagged_template_call};
  };

  //===========================================================================================================
  Raw = class Raw {
    constructor(text) {
      this.data = text;
      return void 0;
    }

    toString() {
      return this.data;
    }

  };

  //-----------------------------------------------------------------------------------------------------------
  create_html_escaped_text_from_tagged_template_call = function(dont_escape = null) {
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
  demo_proxy_as_html_producer = function() {
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
      return (new Test(guytest_cfg)).test({demo_proxy_as_html_producer});
    })();
  }

}).call(this);

//# sourceMappingURL=demo-infinite-doublestack-proxy-as-html-producer.js.map