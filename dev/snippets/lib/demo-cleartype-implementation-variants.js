(async function() {
  'use strict';
  var GTNG, GUY, Test, alert, bold, debug, demo_isa_with_reason, demo_parse_return_value, demo_set_prototype_to_obtain_callable_class_instances, demo_types_as_functions, echo, f, gold, help, info, inspect, log, plain, praise, red, reverse, rpr, urge, warn, whisper, white;

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
    whisper('—'.repeat(108));
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
    info('Ωnfat___1', quantity_2.isa.gnd_pod_isa_x.toString());
    info('Ωnfat___2', quantity_2.isa.float_isa_x_q.toString());
    info('Ωnfat___3', quantity_2.isa.nonempty_text_2_isa_x_u.toString());
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
    info('Ωnfat___4', quantity.isa({}, nope), att("failed"), em(get_messages()));
    info('Ωnfat___5', text.isa(null, nope), att("failed"), em(get_messages()));
    info('Ωnfat___6', quantity.isa({
      q: 8.1
    }, nope), att("failed"), em(get_messages()));
    info('Ωnfat___7', quantity.isa({
      q: 8.1,
      u: ''
    }, nope), att("failed"), em(get_messages()));
    info('Ωnfat___8', quantity.isa({
      q: 8.1,
      u: 0
    }, nope), att("failed"), em(get_messages()));
    info('Ωnfat___9', quantity_2.isa({
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
    whisper('—'.repeat(108));
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
    debug('Ωnfat__10', rpr(ts.text('')), isa(ts.text('')));
    debug('Ωnfat__11', rpr(ts.text(34)), isa(ts.text(34)));
    return null;
  };

  //===========================================================================================================
  demo_parse_return_value = function() {
    var NFA, Unparsable_function_body, em, get_return_value_source, gnd, internals, name_from_fn_revalex, name_from_revalex, nameit, nfa, normalize_revalex;
    whisper('—'.repeat(108));
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
        throw new Unparsable_function_body(`Ωnfat__12 unable to parse function ${rpr(source)}`);
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
    if (false) {
      (function() {
        var e, fn, i, len, probes, results;
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
        results = [];
        for (i = 0, len = probes.length; i < len; i++) {
          fn = probes[i];
          whisper('Ωnfat__13', reverse(bold(white(rpr(fn.toString().replace(/\s+/gsv, '\x20'))))));
          try {
            urge('Ωnfat__14', rpr(get_return_value_source(fn)));
          } catch (error) {
            e = error;
            warn('Ωnfat__15', em(e.message));
          }
          try {
            info('Ωnfat__16', rpr(normalize_revalex(fn)));
          } catch (error) {
            e = error;
            warn('Ωnfat__17', em(e.message));
          }
          try {
            results.push(help('Ωnfat__18', rpr(name_from_fn_revalex(fn))));
          } catch (error) {
            e = error;
            results.push(warn('Ωnfat__19', em(e.message)));
          }
        }
        return results;
      })();
    }
    //.........................................................................................................
    if (false) {
      (function() {
        var RVX, dcl, rvx, ts, typename;
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
        urge('Ωnfat__20', rpr(ts));
        urge('Ωnfat__21', rpr(ts.id));
        urge('Ωnfat__22', rpr(ts.id.isa[RVX]));
        urge('Ωnfat__23', rpr(ts.id.isa.name));
        return null;
      })();
    }
    (function() {      //.........................................................................................................
      var RVX, compile_typespace, dcl, failed_tests, record, rvx, ts, typename;
      debug('Ωnfat__24', "turning lists of functions into objects with sensible names");
      RVX = Symbol.for('RVX');
      rvx = function(fn) {
        return normalize_revalex(fn);
      };
      if (gnd.text == null) {
        gnd.text = {
          isa: function(x) {
            return (typeof x) === 'string';
          }
        };
      }
      if (gnd.function == null) {
        gnd.function = {
          isa: function(x) {
            return (typeof x) === 'function';
          }
        };
      }
      //.......................................................................................................
      ts = {
        text: function(x) {
          return (typeof x) === 'string';
        },
        id: {
          isa: [
            'text',
            function(x) {
              return /^[a-z][a-z0-9]*$/.test(x);
            }
          ]
        }
      };
      //.......................................................................................................
      compile_typespace = function(ts) {
        /* Convert 'isa-only' declarations into objects with explicit `isa`: */
        /* Convert singular `isa` declarations into list of clauses: */
        var dcl, dcl_isa, dcl_isa_clause, i, isa_clauses, len, results, revalex, test_name, typename;
        results = [];
        for (typename in ts) {
          dcl = ts[typename];
          if (!gnd.pod.isa(dcl)) {
            dcl = ((function(isa) {
              return {isa};
            })(dcl));
          }
          dcl_isa = dcl.isa;
          if (!Array.isArray(dcl_isa)) {
            dcl_isa = ((function(isa) {
              return [isa];
            })(dcl_isa));
          }
          isa_clauses = {};
          //...................................................................................................
          debug('Ωnfat__25', 'dcl_isa', rpr(dcl_isa));
          for (i = 0, len = dcl_isa.length; i < len; i++) {
            dcl_isa_clause = dcl_isa[i];
            //.................................................................................................
            /* De-reference referenced type: */
            if (gnd.text.isa(dcl_isa_clause)) {
              dcl_isa_clause = (function(ref_typename) {
                if (!Reflect.has(ts, ref_typename)) {
                  throw new Error(`Ωnfat__26 unable to resolve ${rpr(ref_typename)} referenced by ${rpr(typename)}`);
                }
                return ts[ref_typename].isa;
              })(dcl_isa_clause);
            }
            //.................................................................................................
            if (!gnd.function.isa(dcl_isa_clause)) {
              throw new Error(`Ωnfat__27 expected a function, got ${rpr(dcl_isa_clause)}`);
            }
            //.................................................................................................
            revalex = normalize_revalex(dcl_isa_clause);
            // dcl_isa_clause[RVX] = revalex
            test_name = `${typename}[${rpr(revalex)}]`;
            if (dcl_isa_clause.name === '') {
              nameit(test_name, dcl_isa_clause);
            }
            isa_clauses[test_name] = dcl_isa_clause;
          }
          //...................................................................................................
          results.push(ts[typename].isa = (function(typename, isa_clauses) {
            return function(x, record = null) {
              var isa_clause, name;
              for (name in isa_clauses) {
                isa_clause = isa_clauses[name];
                if (!isa_clause.call(null, x, record)) {
                  if (record != null) {
                    record(name);
                  }
                  return false;
                }
              }
              return true;
            };
          })(typename, isa_clauses));
        }
        return results;
      };
      //.......................................................................................................
      compile_typespace(ts);
      for (typename in ts) {
        dcl = ts[typename];
        info('Ωnfat__29', typename, dcl.isa);
      }
      // for name, dcl_isa_clause of isa_clauses
      //   help 'Ωnfat__30', f"#{rpr name}:<30c; | #{dcl_isa_clause}"
      //.......................................................................................................
      info('Ωnfat__31', ts.id.isa('abc'));
      info('Ωnfat__32', ts.id.isa('123'));
      info('Ωnfat__33', ts.id.isa('abc123'));
      failed_tests = [];
      record = function(name) {
        return failed_tests.push(name);
      };
      info('Ωnfat__34', ts.id.isa('abc', record));
      urge('Ωnfat__35', failed_tests);
      failed_tests.length = 0;
      info('Ωnfat__36', ts.id.isa('123', record));
      urge('Ωnfat__37', failed_tests);
      failed_tests.length = 0;
      info('Ωnfat__38', ts.id.isa(123, record));
      urge('Ωnfat__39', failed_tests);
      failed_tests.length = 0;
      info('Ωnfat__40', ts.id.isa('abc123', record));
      urge('Ωnfat__41', failed_tests);
      failed_tests.length = 0;
      return null;
    })();
    //.........................................................................................................
    return null;
  };

  //===========================================================================================================
  demo_set_prototype_to_obtain_callable_class_instances = function() {
    whisper('—'.repeat(108));
    (function() {
      var E, F, my_callable;
      E = class E {
        constructor() {
          this.eps = 'E::eps';
        }

        blah() {
          return 'E::blah';
        }

      };
      F = class F extends E {
        constructor() {
          super();
          this.foo = 'F::foo';
        }

        blah() {
          return 'F::blah';
        }

      };
      f = new F();
      debug('Ωnfat__42', f);
      debug('Ωnfat__43', f.constructor === F);
      // debug 'Ωnfat__44', f::
      debug('Ωnfat__45', f.__proto__ instanceof E);
      debug('Ωnfat__46', (Object.getPrototypeOf(f)) instanceof E);
      debug('Ωnfat__47');
      my_callable = function() {
        return 'D';
      };
      // my_callable.__proto__ = new F()
      Object.setPrototypeOf(my_callable, new F());
      debug('Ωnfat__48', 'rpr my_callable                         ', rpr(my_callable));
      debug('Ωnfat__49', 'rpr my_callable.prototype               ', rpr(my_callable.prototype));
      debug('Ωnfat__50', 'rpr my_callable::                       ', rpr(my_callable.prototype));
      debug('Ωnfat__51', 'rpr Object.getPrototypeOf my_callable   ', rpr(Object.getPrototypeOf(my_callable)));
      debug('Ωnfat__52', 'rpr my_callable instanceof F            ', rpr(my_callable instanceof F));
      debug('Ωnfat__53', 'rpr my_callable instanceof E            ', rpr(my_callable instanceof E));
      debug('Ωnfat__54', 'rpr my_callable.foo                     ', rpr(my_callable.foo));
      debug('Ωnfat__55', 'rpr my_callable()                       ', rpr(my_callable()));
      debug('Ωnfat__56', 'rpr my_callable.constructor             ', rpr(my_callable.constructor));
      debug('Ωnfat__57', 'rpr my_callable.constructor.name        ', rpr(my_callable.constructor.name));
      return null;
    })();
    //.........................................................................................................
    whisper('—'.repeat(108));
    (function() {
      var Desire, E, F, my_callable;
      //.......................................................................................................
      E = class E {
        constructor(callable) {
          Object.setPrototypeOf(callable, this);
          this.eps = 'E::eps';
          return callable;
        }

        blah() {
          return 'E::blah';
        }

      };
      //.......................................................................................................
      F = class F extends E {
        constructor(callable) {
          super(callable);
          this.foo = 'F::foo';
          return callable;
        }

        blah() {
          return 'F::blah';
        }

      };
      //.......................................................................................................
      my_callable = new F((Desire = function() {
        return "an function named Desire";
      }));
      debug('Ωnfat__58', 'rpr my_callable                         ', rpr(my_callable));
      debug('Ωnfat__59', 'rpr my_callable.prototype               ', rpr(my_callable.prototype));
      debug('Ωnfat__60', 'rpr my_callable::                       ', rpr(my_callable.prototype));
      debug('Ωnfat__61', 'rpr Object.getPrototypeOf my_callable   ', rpr(Object.getPrototypeOf(my_callable)));
      debug('Ωnfat__62', 'rpr my_callable instanceof F            ', rpr(my_callable instanceof F));
      debug('Ωnfat__63', 'rpr my_callable instanceof E            ', rpr(my_callable instanceof E));
      debug('Ωnfat__64', 'rpr my_callable.foo                     ', rpr(my_callable.foo));
      debug('Ωnfat__65', 'rpr my_callable.eps                     ', rpr(my_callable.eps));
      debug('Ωnfat__66', 'rpr my_callable()                       ', rpr(my_callable()));
      debug('Ωnfat__67', 'rpr my_callable.blah()                  ', rpr(my_callable.blah()));
      debug('Ωnfat__68', 'rpr my_callable.constructor             ', rpr(my_callable.constructor));
      debug('Ωnfat__69', 'rpr my_callable.constructor.name        ', rpr(my_callable.constructor.name));
      return null;
    })();
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      // guytest_cfg = { throw_on_error: true,   show_passes: true,  report_checks: false, }
      // # guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
      // ( new Test guytest_cfg ).test @nfa_tasks
      // # ( new Test guytest_cfg ).test { push_pop_set_at: @nfa_tasks.internals.push_pop_set_at }
      demo_isa_with_reason();
      demo_types_as_functions();
      return demo_parse_return_value();
    })();
  }

  // demo_set_prototype_to_obtain_callable_class_instances()

}).call(this);

//# sourceMappingURL=demo-cleartype-implementation-variants.js.map