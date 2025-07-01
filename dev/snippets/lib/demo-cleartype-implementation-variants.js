(async function() {
  'use strict';
  var GTNG, GUY, Test, alert, bold, debug, demo_isa_with_reason, demo_parse_return_value, demo_types_as_functions, echo, f, gold, help, info, inspect, log, plain, praise, red, reverse, rpr, urge, warn, whisper, white;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('intertype/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  ({f} = require('../../../apps/effstring'));

  ({red, gold, bold, white, reverse} = GUY.trm);

  //===========================================================================================================
  demo_isa_with_reason = function() {
    var NFA, att, em, float, get_messages, gnd, internals, messages, nfa, nonempty_text, nonempty_text_2, nope, quantity, quantity_2, text;
    NFA = require('../../../apps/normalize-function-arguments');
    ({nfa, internals} = NFA);
    ({gnd} = internals);
    em = function(...P) {
      return GUY.trm.reverse(GUY.trm.gold(GUY.trm.bold('', ...P, '')));
    };
    att = function(...P) {
      return GUY.trm.reverse(GUY.trm.red(GUY.trm.bold('', ...P, '')));
    };
    //.........................................................................................................
    float = {
      isa: function(x, nope = function() {
          return false;
        }) {
        if (!Number.isFinite(x)) {
          return nope("Number.isFinite x");
        }
        return true;
      }
    };
    text = {
      isa: function(x, nope = function() {
          return false;
        }) {
        if ((typeof x) !== 'string') {
          return nope("( typeof x ) is 'string'");
        }
        return true;
      }
    };
    nonempty_text = {
      isa: function(x, nope = function() {
          return false;
        }) {
        if (!text.isa(x, nope)) {
          return nope("text.isa x");
        }
        if (!(x.length > 0)) {
          return nope("x.length > 0");
        }
        return true;
      }
    };
    //.........................................................................................................
    quantity = {
      isa: function(x, nope = function() {
          return false;
        }) {
        if (!gnd.pod.isa(x, nope)) {
          return nope("gnd.pod.isa       x  ");
        }
        if (!float.isa(x.q, nope)) {
          return nope("float.isa         x.q");
        }
        if (!nonempty_text.isa(x.u, nope)) {
          return nope("nonempty_text.isa x.u");
        }
        return true;
      }
    };
    //.........................................................................................................
    nonempty_text_2 = {
      isa: {
        text_isa_x: function(x) {
          return text.isa(x, nope);
        },
        x_length_gt_0: function(x) {
          return x.length > 0;
        }
      }
    };
    //.........................................................................................................
    quantity_2 = {
      isa: {
        gnd_pod_isa_x: function(x) {
          return gnd.pod.isa(x);
        },
        float_isa_x_q: function(x) {
          return float.isa(x.q);
        },
        nonempty_text_2_isa_x_u: function(x) {
          return nonempty_text_2.isa(x.u);
        }
      }
    };
    //.........................................................................................................
    info('Ωnfat__94', quantity_2.isa.gnd_pod_isa_x.toString());
    info('Ωnfat__95', quantity_2.isa.float_isa_x_q.toString());
    info('Ωnfat__96', quantity_2.isa.nonempty_text_2_isa_x_u.toString());
    quantity_2.isa = ((isas) => {
      return function(x) {
        var isa, key;
        for (key in isas) {
          isa = isas[key];
          if (!isa(x)) {
            return nope(key);
          }
        }
        return true;
      };
    })(quantity_2.isa);
    //.........................................................................................................
    nonempty_text_2.isa = ((isas) => {
      return function(x) {
        var isa, key;
        for (key in isas) {
          isa = isas[key];
          if (!isa(x)) {
            return nope(key);
          }
        }
        return true;
      };
    })(nonempty_text_2.isa);
    //.........................................................................................................
    messages = [];
    nope = function(message) {
      return false; // discarding messages
    };
    nope = function(message) {
      messages.push(message);
      return false; // collecting messages
    };
    get_messages = function() {
      var R, m;
      R = (((function() {
        var i, len, results;
        results = [];
        for (i = 0, len = messages.length; i < len; i++) {
          m = messages[i];
          results.push(`${att('not')}${em(m)}`);
        }
        return results;
      })()).join(reverse(' ▶ '))).replace(/\s+/g, ' ');
      messages = [];
      return R;
    };
    info('Ωnfat__97', quantity.isa({}, nope), att("failed"), em(get_messages()));
    info('Ωnfat__98', text.isa(null, nope), att("failed"), em(get_messages()));
    info('Ωnfat__99', quantity.isa({
      q: 8.1
    }, nope), att("failed"), em(get_messages()));
    info('Ωnfat_100', quantity.isa({
      q: 8.1,
      u: ''
    }, nope), att("failed"), em(get_messages()));
    info('Ωnfat_101', quantity.isa({
      q: 8.1,
      u: 0
    }, nope), att("failed"), em(get_messages()));
    info('Ωnfat_102', quantity_2.isa({
      q: 8.1,
      u: 0
    }), att("failed"), em(get_messages()));
    return null;
  };

  //===========================================================================================================
  demo_types_as_functions = function() {
    /*

    * a 'type' is a / is implemented as a function that accepts one argument `x` and returns `undefined`,
      `null` or `true` if `x` is considered to be an element of the type / a value conforming to the type;
      otherwise, it must return a string that identifies the test that `x` did not pass; so for example,
      a type `empty` described as the set of all values that have a property `x.length` whose value is `0`:

      empty = ( x ) -> return "x.length is 0" unless x? and ( x.length is 0 )

     */
    var isa, ts;
    isa = function(expectation = void 0) {
      return (expectation == null) || (expectation === true);
    };
    ts = {
      // text: ( x ) -> if ( typeof x ) is 'string' then true else "( typeof x ) is 'string'"
      text: function(x) {
        if ((typeof x) !== 'string') {
          return "( typeof x ) is 'string'";
        }
      }
    };
    debug('Ωnfat_103', rpr(ts.text('')), isa(ts.text('')));
    debug('Ωnfat_104', rpr(ts.text(34)), isa(ts.text(34)));
    return null;
  };

  //===========================================================================================================
  demo_parse_return_value = function() {
    var NFA, RVX, Unparsable_function_body, dcl, e, em, fn, get_return_value_source, gnd, i, internals, len, name_from_fn_revalex, name_from_revalex, nameit, nfa, normalize_revalex, probes, rvx, ts, typename;
    NFA = require('../../../apps/normalize-function-arguments');
    ({nfa, internals} = NFA);
    ({gnd, nameit} = internals);
    //.........................................................................................................
    em = function(...P) {
      return reverse(red(bold('', ...P, '')));
    };
    Unparsable_function_body = class Unparsable_function_body extends Error {};
    //.........................................................................................................
    get_return_value_source = function(fn) {
      /* TAINT use JS tokenizer */
      /* NOTE restrictions:
         * catches only last `return` statement, even if unreachable
         * may misinterpret string literals, comments as source code
          */
      var R, match, source;
      source = fn.toString().replace(/\s+/gsv, '\x20');
      if ((match = source.match(/^.*\breturn\s(?<revalex>[^;]+).*$/sv)) == null) {
        throw new Unparsable_function_body(`Ωnfat_105 unable to parse function ${rpr(source)}`);
      }
      R = match.groups.revalex;
      return R;
    };
    //.........................................................................................................
    normalize_revalex = function(fn) {
      /* NOTE `revalex` short for '**RE**turn **VA**Lue **EX**pression' */
      /* TAINT use JS tokenizer */
      var R;
      R = get_return_value_source(fn);
      R = R.replace(/!==/gsv, 'isnt');
      R = R.replace(/&&/gsv, 'and');
      R = R.replace(/\|\|/gsv, 'or');
      R = R.replace(/!/gsv, 'not');
      return R;
    };
    //.........................................................................................................
    name_from_fn_revalex = function(fn) {
      return name_from_revalex(normalize_revalex(fn));
    };
    name_from_revalex = function(revalex) {
      var R;
      R = revalex.replace(/[^a-zA-Z0-9_]+/gsv, '_');
      R = R.replace(/^_*(?<center>.*?)_*$/gsv, '$<center>');
      return R;
    };
    //.........................................................................................................
    probes = [
      function(x) {
        return (gnd.text.isa(x)) && (x.length !== 0);
      },
      (x) => {
        return (gnd.text.isa(x)) && (x.length !== 0);
      },
      function(x) {
        return true;
      },
      (x) => {
        return true;
      },
      (x) => {
        if (!gnd.isa.float(x)) {
          return false;
        }
        if (!((0 < x && x < 1))) {
          return false;
        }
        return true;
      },
      function(x) {
        return gnd.isa.float(x);
        // return false unless 0 < x < 1
        return gnd.isa.text(x);
      },
      function(x) {
        return gnd.isa.float(x);
      }
    ];
//.........................................................................................................
/* return false unless 0 < x < 1 */
    for (i = 0, len = probes.length; i < len; i++) {
      fn = probes[i];
      whisper('Ωnfat_106', reverse(bold(white(rpr(fn.toString().replace(/\s+/gsv, '\x20'))))));
      try {
        urge('Ωnfat_107', rpr(get_return_value_source(fn)));
      } catch (error) {
        e = error;
        warn('Ωnfat_108', em(e.message));
      }
      try {
        info('Ωnfat_109', rpr(normalize_revalex(fn)));
      } catch (error) {
        e = error;
        warn('Ωnfat_110', em(e.message));
      }
      try {
        help('Ωnfat_111', rpr(name_from_fn_revalex(fn)));
      } catch (error) {
        e = error;
        warn('Ωnfat_112', em(e.message));
      }
    }
    //.........................................................................................................
    RVX = Symbol('RVX');
    // rvx = ( fn ) -> fn[RVX] = normalize_revalex fn; ( nameit ( name_from_fn_revalex fn ), fn ); fn
    rvx = function(fn) {
      fn[RVX] = normalize_revalex(fn);
      return fn;
    };
    ts = {
      id: {
        isa: rvx(function(x) {
          return (text.isa(x)) && (/^[a-b]+$/.test(x));
        })
      }
    };
    for (typename in ts) {
      dcl = ts[typename];
      nameit(`isa_${typename}`, dcl.isa);
    }
    urge('Ωnfat_113', rpr(ts));
    urge('Ωnfat_114', rpr(ts.id));
    urge('Ωnfat_115', rpr(ts.id.isa[RVX]));
    urge('Ωnfat_116', rpr(ts.id.isa.name));
    //.........................................................................................................
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var guytest_cfg;
      guytest_cfg = {
        throw_on_error: true,
        show_passes: true,
        report_checks: false
      };
      // guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
      (new Test(guytest_cfg)).test(this.nfa_tasks);
      // ( new Test guytest_cfg ).test { push_pop_set_at: @nfa_tasks.internals.push_pop_set_at }
      demo_isa_with_reason();
      demo_types_as_functions();
      demo_parse_return_value();
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=demo-cleartype-implementation-variants.js.map