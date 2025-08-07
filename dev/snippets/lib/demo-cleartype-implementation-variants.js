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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tY2xlYXJ0eXBlLWltcGxlbWVudGF0aW9uLXZhcmlhbnRzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxvQkFBQSxFQUFBLHVCQUFBLEVBQUEscURBQUEsRUFBQSx1QkFBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBOztFQUVBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsdUJBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxPQUhGLEVBSUUsR0FKRixDQUFBLEdBSTRCLEdBQUcsQ0FBQyxHQUpoQyxFQVpBOzs7RUFrQkEsSUFBQSxHQUE0QixPQUFBLENBQVEsMkJBQVI7O0VBQzVCLENBQUEsQ0FBRSxJQUFGLENBQUEsR0FBNEIsSUFBNUI7O0VBQ0EsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUI7O0VBQ0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxJQURGLEVBRUUsSUFGRixFQUdFLEtBSEYsRUFJRSxPQUpGLENBQUEsR0FJNEIsR0FBRyxDQUFDLEdBSmhD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aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnaW50ZXJ0eXBlL3Rlc3QtYmFzaWNzJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG4jIFdHVVkgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL3dlYmd1eSdcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbnsgcmVkXG4gIGdvbGRcbiAgYm9sZFxuICB3aGl0ZVxuICByZXZlcnNlICAgICAgICAgICAgICAgfSA9IEdVWS50cm1cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmRlbW9faXNhX3dpdGhfcmVhc29uID0gLT5cbiAgd2hpc3BlciAn4oCUJy5yZXBlYXQgMTA4XG4gIE5GQSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbiAgeyBuZmFcbiAgICBpbnRlcm5hbHMgfSA9IE5GQVxuICB7IGduZCAgICAgICB9ID0gaW50ZXJuYWxzXG4gIGVtID0gKCBQLi4uICkgLT4gR1VZLnRybS5yZXZlcnNlIEdVWS50cm0uZ29sZCBHVVkudHJtLmJvbGQgJycsIFAuLi4sICcnXG4gIGF0dCA9ICggUC4uLiApIC0+IEdVWS50cm0ucmV2ZXJzZSBHVVkudHJtLnJlZCBHVVkudHJtLmJvbGQgJycsIFAuLi4sICcnXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgZmxvYXQgICAgICAgICAgID0gaXNhOiAoIHgsIG5vcGUgPSAtPiBmYWxzZSApIC0+XG4gICAgcmV0dXJuIG5vcGUgXCJOdW1iZXIuaXNGaW5pdGUgeFwiICAgICAgICAgdW5sZXNzIE51bWJlci5pc0Zpbml0ZSB4XG4gICAgcmV0dXJuIHRydWVcbiAgdGV4dCAgICAgICAgICAgID0gaXNhOiAoIHgsIG5vcGUgPSAtPiBmYWxzZSApIC0+XG4gICAgcmV0dXJuIG5vcGUgXCIoIHR5cGVvZiB4ICkgaXMgJ3N0cmluZydcIiAgdW5sZXNzICggdHlwZW9mIHggKSBpcyAnc3RyaW5nJ1xuICAgIHJldHVybiB0cnVlXG4gIG5vbmVtcHR5X3RleHQgICA9IGlzYTogKCB4LCBub3BlID0gLT4gZmFsc2UgKSAtPlxuICAgIHJldHVybiBub3BlIFwidGV4dC5pc2EgeFwiICAgICAgICAgICAgICAgIHVubGVzcyB0ZXh0LmlzYSB4LCBub3BlXG4gICAgcmV0dXJuIG5vcGUgXCJ4Lmxlbmd0aCA+IDBcIiAgICAgICAgICAgICAgdW5sZXNzIHgubGVuZ3RoID4gMFxuICAgIHJldHVybiB0cnVlXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgcXVhbnRpdHkgPSBpc2E6ICggeCwgbm9wZSA9IC0+IGZhbHNlICkgLT5cbiAgICByZXR1cm4gbm9wZSBcImduZC5wb2QuaXNhICAgICAgIHggIFwiIHVubGVzcyBnbmQucG9kLmlzYSAgICAgICB4LCAgICBub3BlXG4gICAgcmV0dXJuIG5vcGUgXCJmbG9hdC5pc2EgICAgICAgICB4LnFcIiB1bmxlc3MgZmxvYXQuaXNhICAgICAgICAgeC5xLCAgbm9wZVxuICAgIHJldHVybiBub3BlIFwibm9uZW1wdHlfdGV4dC5pc2EgeC51XCIgdW5sZXNzIG5vbmVtcHR5X3RleHQuaXNhIHgudSwgIG5vcGVcbiAgICByZXR1cm4gdHJ1ZVxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIG5vbmVtcHR5X3RleHRfMiA9IGlzYTpcbiAgICB0ZXh0X2lzYV94OiAgICAgICAgICAgKCB4ICkgLT4gdGV4dC5pc2EgeCwgbm9wZVxuICAgIHhfbGVuZ3RoX2d0XzA6ICAgICAgICAoIHggKSAtPiB4Lmxlbmd0aCA+IDBcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBxdWFudGl0eV8yID0gaXNhOlxuICAgIGduZF9wb2RfaXNhX3g6ICAgICAgICAgICAgKCB4ICkgLT4gZ25kLnBvZC5pc2EgICAgICAgICB4XG4gICAgZmxvYXRfaXNhX3hfcTogICAgICAgICAgICAoIHggKSAtPiBmbG9hdC5pc2EgICAgICAgICAgIHgucVxuICAgIG5vbmVtcHR5X3RleHRfMl9pc2FfeF91OiAgKCB4ICkgLT4gbm9uZW1wdHlfdGV4dF8yLmlzYSB4LnVcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBpbmZvICfOqW5mYXRfX18xJywgcXVhbnRpdHlfMi5pc2EuZ25kX3BvZF9pc2FfeC50b1N0cmluZygpXG4gIGluZm8gJ86pbmZhdF9fXzInLCBxdWFudGl0eV8yLmlzYS5mbG9hdF9pc2FfeF9xLnRvU3RyaW5nKClcbiAgaW5mbyAnzqluZmF0X19fMycsIHF1YW50aXR5XzIuaXNhLm5vbmVtcHR5X3RleHRfMl9pc2FfeF91LnRvU3RyaW5nKClcbiAgcXVhbnRpdHlfMi5pc2EgPSBkbyAoIGlzYXMgPSBxdWFudGl0eV8yLmlzYSApID0+XG4gICAgcmV0dXJuICggeCApIC0+XG4gICAgICBmb3Iga2V5LCBpc2Egb2YgaXNhc1xuICAgICAgICByZXR1cm4gbm9wZSBrZXkgdW5sZXNzIGlzYSB4XG4gICAgICByZXR1cm4gdHJ1ZVxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIG5vbmVtcHR5X3RleHRfMi5pc2EgPSBkbyAoIGlzYXMgPSBub25lbXB0eV90ZXh0XzIuaXNhICkgPT5cbiAgICByZXR1cm4gKCB4ICkgLT5cbiAgICAgIGZvciBrZXksIGlzYSBvZiBpc2FzXG4gICAgICAgIHJldHVybiBub3BlIGtleSB1bmxlc3MgaXNhIHhcbiAgICAgIHJldHVybiB0cnVlXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgbWVzc2FnZXMgPSBbXVxuICBub3BlID0gKCBtZXNzYWdlICkgLT4gZmFsc2UgICAgICAgICAgICAgICAgICAgICAgICAgIyBkaXNjYXJkaW5nIG1lc3NhZ2VzXG4gIG5vcGUgPSAoIG1lc3NhZ2UgKSAtPiBtZXNzYWdlcy5wdXNoIG1lc3NhZ2U7IGZhbHNlICAjIGNvbGxlY3RpbmcgbWVzc2FnZXNcbiAgZ2V0X21lc3NhZ2VzID0gLT4gUiA9ICggKCBcIiN7YXR0ICdub3QnfSN7ZW0gbX1cIiBmb3IgbSBpbiBtZXNzYWdlcyApLmpvaW4gcmV2ZXJzZSAnIOKWtiAnICkucmVwbGFjZSAvXFxzKy9nLCAnICc7IG1lc3NhZ2VzID0gW107IFJcbiAgaW5mbyAnzqluZmF0X19fNCcsICggcXVhbnRpdHkuaXNhIHt9LCAgICAgICAgICAgICAgICBub3BlICApLCAoIGF0dCBcImZhaWxlZFwiICksIGVtIGdldF9tZXNzYWdlcygpXG4gIGluZm8gJ86pbmZhdF9fXzUnLCAoIHRleHQuaXNhICAgICBudWxsLCAgICAgICAgICAgICAgbm9wZSAgKSwgKCBhdHQgXCJmYWlsZWRcIiApLCBlbSBnZXRfbWVzc2FnZXMoKVxuICBpbmZvICfOqW5mYXRfX182JywgKCBxdWFudGl0eS5pc2EgeyBxOiA4LjEsIH0sICAgICAgIG5vcGUgICksICggYXR0IFwiZmFpbGVkXCIgKSwgZW0gZ2V0X21lc3NhZ2VzKClcbiAgaW5mbyAnzqluZmF0X19fNycsICggcXVhbnRpdHkuaXNhIHsgcTogOC4xLCB1OiAnJyB9LCBub3BlICApLCAoIGF0dCBcImZhaWxlZFwiICksIGVtIGdldF9tZXNzYWdlcygpXG4gIGluZm8gJ86pbmZhdF9fXzgnLCAoIHF1YW50aXR5LmlzYSB7IHE6IDguMSwgdTogMCAgfSwgbm9wZSAgKSwgKCBhdHQgXCJmYWlsZWRcIiApLCBlbSBnZXRfbWVzc2FnZXMoKVxuICBpbmZvICfOqW5mYXRfX185JywgKCBxdWFudGl0eV8yLmlzYSB7IHE6IDguMSwgdTogMCAgfSAgKSwgKCBhdHQgXCJmYWlsZWRcIiApLCBlbSBnZXRfbWVzc2FnZXMoKVxuICByZXR1cm4gbnVsbFxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmRlbW9fdHlwZXNfYXNfZnVuY3Rpb25zID0gLT5cbiAgd2hpc3BlciAn4oCUJy5yZXBlYXQgMTA4XG4gICMjI1xuXG4gICogYSAndHlwZScgaXMgYSAvIGlzIGltcGxlbWVudGVkIGFzIGEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIG9uZSBhcmd1bWVudCBgeGAgYW5kIHJldHVybnMgYHVuZGVmaW5lZGAsXG4gICAgYG51bGxgIG9yIGB0cnVlYCBpZiBgeGAgaXMgY29uc2lkZXJlZCB0byBiZSBhbiBlbGVtZW50IG9mIHRoZSB0eXBlIC8gYSB2YWx1ZSBjb25mb3JtaW5nIHRvIHRoZSB0eXBlO1xuICAgIG90aGVyd2lzZSwgaXQgbXVzdCByZXR1cm4gYSBzdHJpbmcgdGhhdCBpZGVudGlmaWVzIHRoZSB0ZXN0IHRoYXQgYHhgIGRpZCBub3QgcGFzczsgc28gZm9yIGV4YW1wbGUsXG4gICAgYSB0eXBlIGBlbXB0eWAgZGVzY3JpYmVkIGFzIHRoZSBzZXQgb2YgYWxsIHZhbHVlcyB0aGF0IGhhdmUgYSBwcm9wZXJ0eSBgeC5sZW5ndGhgIHdob3NlIHZhbHVlIGlzIGAwYDpcblxuICAgIGVtcHR5ID0gKCB4ICkgLT4gcmV0dXJuIFwieC5sZW5ndGggaXMgMFwiIHVubGVzcyB4PyBhbmQgKCB4Lmxlbmd0aCBpcyAwIClcblxuICAjIyNcbiAgaXNhID0gKCBleHBlY3RhdGlvbiA9IHVuZGVmaW5lZCApIC0+IHJldHVybiAoIG5vdCBleHBlY3RhdGlvbj8gKSBvciAoIGV4cGVjdGF0aW9uIGlzIHRydWUgKVxuICB0cyA9XG4gICAgIyB0ZXh0OiAoIHggKSAtPiBpZiAoIHR5cGVvZiB4ICkgaXMgJ3N0cmluZycgdGhlbiB0cnVlIGVsc2UgXCIoIHR5cGVvZiB4ICkgaXMgJ3N0cmluZydcIlxuICAgIHRleHQ6ICggeCApIC0+IHJldHVybiBcIiggdHlwZW9mIHggKSBpcyAnc3RyaW5nJ1wiIHVubGVzcyAoIHR5cGVvZiB4ICkgaXMgJ3N0cmluZydcbiAgZGVidWcgJ86pbmZhdF9fMTAnLCAoIHJwciB0cy50ZXh0ICcnICksICggaXNhIHRzLnRleHQgJycgKVxuICBkZWJ1ZyAnzqluZmF0X18xMScsICggcnByIHRzLnRleHQgMzQgKSwgKCBpc2EgdHMudGV4dCAzNCApXG4gIHJldHVybiBudWxsXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZGVtb19wYXJzZV9yZXR1cm5fdmFsdWUgPSAtPlxuICB3aGlzcGVyICfigJQnLnJlcGVhdCAxMDhcbiAgTkZBID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuICB7IG5mYVxuICAgIGludGVybmFscyB9ID0gTkZBXG4gIHsgZ25kXG4gICAgbmFtZWl0ICAgIH0gPSBpbnRlcm5hbHNcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBlbSA9ICggUC4uLiApIC0+IHJldmVyc2UgcmVkIGJvbGQgJycsIFAuLi4sICcnXG4gIGNsYXNzIFVucGFyc2FibGVfZnVuY3Rpb25fYm9keSBleHRlbmRzIEVycm9yXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgZ2V0X3JldHVybl92YWx1ZV9zb3VyY2UgPSAoIGZuICkgLT5cbiAgICAjIyMgVEFJTlQgdXNlIEpTIHRva2VuaXplciAjIyNcbiAgICAjIyMgTk9URSByZXN0cmljdGlvbnM6XG4gICAgKiBjYXRjaGVzIG9ubHkgbGFzdCBgcmV0dXJuYCBzdGF0ZW1lbnQsIGV2ZW4gaWYgdW5yZWFjaGFibGVcbiAgICAqIG1heSBtaXNpbnRlcnByZXQgc3RyaW5nIGxpdGVyYWxzLCBjb21tZW50cyBhcyBzb3VyY2UgY29kZVxuICAgICMjI1xuICAgIHNvdXJjZSA9IGZuLnRvU3RyaW5nKCkucmVwbGFjZSAvLy8gXFxzKyAvLy9nc3YsICdcXHgyMCdcbiAgICB1bmxlc3MgKCBtYXRjaCA9IHNvdXJjZS5tYXRjaCAvLy9eIC4qIFxcYiByZXR1cm4gXFxzICg/PHJldmFsZXg+IFteIDsgXSsgKSAuKiAkLy8vc3YgKT9cbiAgICAgIHRocm93IG5ldyBVbnBhcnNhYmxlX2Z1bmN0aW9uX2JvZHkgXCLOqW5mYXRfXzEyIHVuYWJsZSB0byBwYXJzZSBmdW5jdGlvbiAje3JwciBzb3VyY2V9XCJcbiAgICBSID0gbWF0Y2guZ3JvdXBzLnJldmFsZXhcbiAgICByZXR1cm4gUlxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIG5vcm1hbGl6ZV9yZXZhbGV4ID0gKCBmbiApIC0+XG4gICAgIyMjIE5PVEUgYHJldmFsZXhgIHNob3J0IGZvciAnKipSRSoqdHVybiAqKlZBKipMdWUgKipFWCoqcHJlc3Npb24nICMjI1xuICAgICMjIyBUQUlOVCB1c2UgSlMgdG9rZW5pemVyICMjI1xuICAgIFIgPSBnZXRfcmV0dXJuX3ZhbHVlX3NvdXJjZSBmblxuICAgIFIgPSBSLnJlcGxhY2UgLy8vICAhPT0gICAgIC8vL2dzdiwgJ2lzbnQnXG4gICAgUiA9IFIucmVwbGFjZSAvLy8gICYmICAgICAgLy8vZ3N2LCAnYW5kJ1xuICAgIFIgPSBSLnJlcGxhY2UgLy8vICBcXHxcXHwgICAgLy8vZ3N2LCAnb3InXG4gICAgUiA9IFIucmVwbGFjZSAvLy8gICEgICAgICAgLy8vZ3N2LCAnbm90J1xuICAgIHJldHVybiBSXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgbmFtZV9mcm9tX2ZuX3JldmFsZXggPSAoIGZuICkgLT4gbmFtZV9mcm9tX3JldmFsZXggbm9ybWFsaXplX3JldmFsZXggZm5cbiAgbmFtZV9mcm9tX3JldmFsZXggPSAoIHJldmFsZXggKSAtPlxuICAgIFIgPSByZXZhbGV4LnJlcGxhY2UgLy8vIFteIGEteiBBLVogMC05IF8gXSsgICAgICAgICAvLy9nc3YsICdfJ1xuICAgIFIgPSBSLnJlcGxhY2UgICAgICAgLy8vXiBfKiAoPzxjZW50ZXI+IC4qPyApIF8qICQgICAvLy9nc3YsICckPGNlbnRlcj4nXG4gICAgcmV0dXJuIFJcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBpZiBmYWxzZSB0aGVuIGRvIC0+XG4gICAgcHJvYmVzID0gW1xuICAgICAgKCB4ICkgLT4gKCBnbmQudGV4dC5pc2EgeCApIGFuZCAoIHgubGVuZ3RoIGlzbnQgMCApXG4gICAgICAoIHggKSA9PiAoIGduZC50ZXh0LmlzYSB4ICkgYW5kICggeC5sZW5ndGggaXNudCAwIClcbiAgICAgICggeCApIC0+IHRydWVcbiAgICAgICggeCApID0+IHRydWVcbiAgICAgICggeCApID0+XG4gICAgICAgIHJldHVybiBmYWxzZSB1bmxlc3MgZ25kLmlzYS5mbG9hdCB4XG4gICAgICAgIHJldHVybiBmYWxzZSB1bmxlc3MgMCA8IHggPCAxXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICAoIHggKSAtPlxuICAgICAgICByZXR1cm4gZ25kLmlzYS5mbG9hdCB4XG4gICAgICAgICMgcmV0dXJuIGZhbHNlIHVubGVzcyAwIDwgeCA8IDFcbiAgICAgICAgcmV0dXJuIGduZC5pc2EudGV4dCB4XG4gICAgICAoIHggKSAtPlxuICAgICAgICByZXR1cm4gZ25kLmlzYS5mbG9hdCB4XG4gICAgICAgICMjIyByZXR1cm4gZmFsc2UgdW5sZXNzIDAgPCB4IDwgMSAjIyNcbiAgICAgIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZm9yIGZuIGluIHByb2Jlc1xuICAgICAgd2hpc3BlciAnzqluZmF0X18xMycsIHJldmVyc2UgYm9sZCB3aGl0ZSBycHIgZm4udG9TdHJpbmcoKS5yZXBsYWNlIC9cXHMrL2dzdiwgJ1xceDIwJ1xuICAgICAgdHJ5IHVyZ2UgJ86pbmZhdF9fMTQnLCBycHIgZ2V0X3JldHVybl92YWx1ZV9zb3VyY2UgICBmbiBjYXRjaCBlIHRoZW4gd2FybiAnzqluZmF0X18xNScsIGVtIGUubWVzc2FnZVxuICAgICAgdHJ5IGluZm8gJ86pbmZhdF9fMTYnLCBycHIgbm9ybWFsaXplX3JldmFsZXggICAgICAgICBmbiBjYXRjaCBlIHRoZW4gd2FybiAnzqluZmF0X18xNycsIGVtIGUubWVzc2FnZVxuICAgICAgdHJ5IGhlbHAgJ86pbmZhdF9fMTgnLCBycHIgbmFtZV9mcm9tX2ZuX3JldmFsZXggICAgICBmbiBjYXRjaCBlIHRoZW4gd2FybiAnzqluZmF0X18xOScsIGVtIGUubWVzc2FnZVxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGlmIGZhbHNlIHRoZW4gZG8gLT5cbiAgICBSVlggPSBTeW1ib2wgJ1JWWCdcbiAgICAjIHJ2eCA9ICggZm4gKSAtPiBmbltSVlhdID0gbm9ybWFsaXplX3JldmFsZXggZm47ICggbmFtZWl0ICggbmFtZV9mcm9tX2ZuX3JldmFsZXggZm4gKSwgZm4gKTsgZm5cbiAgICBydnggPSAoIGZuICkgLT4gZm5bUlZYXSA9IG5vcm1hbGl6ZV9yZXZhbGV4IGZuOyBmblxuICAgIHRzID1cbiAgICAgIGlkOlxuICAgICAgICBpc2E6IHJ2eCAoIHggKSAtPiAoIHRleHQuaXNhIHggKSBhbmQgKCAvXlthLWJdKyQvLnRlc3QgeCApXG4gICAgZm9yIHR5cGVuYW1lLCBkY2wgb2YgdHNcbiAgICAgIG5hbWVpdCBcImlzYV8je3R5cGVuYW1lfVwiLCBkY2wuaXNhXG4gICAgdXJnZSAnzqluZmF0X18yMCcsIHJwciB0c1xuICAgIHVyZ2UgJ86pbmZhdF9fMjEnLCBycHIgdHMuaWRcbiAgICB1cmdlICfOqW5mYXRfXzIyJywgcnByIHRzLmlkLmlzYVtSVlhdXG4gICAgdXJnZSAnzqluZmF0X18yMycsIHJwciB0cy5pZC5pc2EubmFtZVxuICAgIHJldHVybiBudWxsXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgZG8gLT5cbiAgICBkZWJ1ZyAnzqluZmF0X18yNCcsIFwidHVybmluZyBsaXN0cyBvZiBmdW5jdGlvbnMgaW50byBvYmplY3RzIHdpdGggc2Vuc2libGUgbmFtZXNcIlxuICAgIFJWWCA9IFN5bWJvbC5mb3IgJ1JWWCdcbiAgICBydnggPSAoIGZuICkgLT4gbm9ybWFsaXplX3JldmFsZXggZm5cbiAgICBnbmQudGV4dCAgICAgID89IGlzYTogKCB4ICkgLT4gKCB0eXBlb2YgeCApIGlzICdzdHJpbmcnXG4gICAgZ25kLmZ1bmN0aW9uICA/PSBpc2E6ICggeCApIC0+ICggdHlwZW9mIHggKSBpcyAnZnVuY3Rpb24nXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICB0cyA9XG4gICAgICB0ZXh0OiAoIHggKSAtPiAoIHR5cGVvZiB4ICkgaXMgJ3N0cmluZydcbiAgICAgIGlkOlxuICAgICAgICBpc2E6IFtcbiAgICAgICAgICAndGV4dCdcbiAgICAgICAgICAoIHggKSAtPiAoIC9eW2Etel1bYS16MC05XSokLy50ZXN0IHggKVxuICAgICAgICAgIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNvbXBpbGVfdHlwZXNwYWNlID0gKCB0cyApIC0+XG4gICAgICBmb3IgdHlwZW5hbWUsIGRjbCBvZiB0c1xuICAgICAgICAjIyMgQ29udmVydCAnaXNhLW9ubHknIGRlY2xhcmF0aW9ucyBpbnRvIG9iamVjdHMgd2l0aCBleHBsaWNpdCBgaXNhYDogIyMjXG4gICAgICAgIGRjbCAgICAgICAgID0gKCBkbyAoIGlzYSA9IGRjbCApIC0+IHsgaXNhLCB9ICkgdW5sZXNzIGduZC5wb2QuaXNhIGRjbFxuICAgICAgICBkY2xfaXNhICAgICA9IGRjbC5pc2FcbiAgICAgICAgIyMjIENvbnZlcnQgc2luZ3VsYXIgYGlzYWAgZGVjbGFyYXRpb25zIGludG8gbGlzdCBvZiBjbGF1c2VzOiAjIyNcbiAgICAgICAgZGNsX2lzYSAgICAgPSAoIGRvICggaXNhID0gZGNsX2lzYSApIC0+IFsgaXNhLCBdICkgdW5sZXNzIEFycmF5LmlzQXJyYXkgZGNsX2lzYVxuICAgICAgICBpc2FfY2xhdXNlcyA9IHt9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgZGVidWcgJ86pbmZhdF9fMjUnLCAnZGNsX2lzYScsIHJwciBkY2xfaXNhXG4gICAgICAgIGZvciBkY2xfaXNhX2NsYXVzZSBpbiBkY2xfaXNhXG4gICAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgICAjIyMgRGUtcmVmZXJlbmNlIHJlZmVyZW5jZWQgdHlwZTogIyMjXG4gICAgICAgICAgaWYgKCBnbmQudGV4dC5pc2EgZGNsX2lzYV9jbGF1c2UgKVxuICAgICAgICAgICAgZGNsX2lzYV9jbGF1c2UgPSBkbyAoIHJlZl90eXBlbmFtZSA9IGRjbF9pc2FfY2xhdXNlICkgLT5cbiAgICAgICAgICAgICAgdW5sZXNzIFJlZmxlY3QuaGFzIHRzLCByZWZfdHlwZW5hbWVcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IgXCLOqW5mYXRfXzI2IHVuYWJsZSB0byByZXNvbHZlICN7cnByIHJlZl90eXBlbmFtZX0gcmVmZXJlbmNlZCBieSAje3JwciB0eXBlbmFtZX1cIlxuICAgICAgICAgICAgICByZXR1cm4gdHNbIHJlZl90eXBlbmFtZSBdLmlzYVxuICAgICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgICAgdW5sZXNzIGduZC5mdW5jdGlvbi5pc2EgZGNsX2lzYV9jbGF1c2VcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciBcIs6pbmZhdF9fMjcgZXhwZWN0ZWQgYSBmdW5jdGlvbiwgZ290ICN7cnByIGRjbF9pc2FfY2xhdXNlfVwiXG4gICAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgICByZXZhbGV4ICAgICAgICAgICAgID0gbm9ybWFsaXplX3JldmFsZXggZGNsX2lzYV9jbGF1c2VcbiAgICAgICAgICAjIGRjbF9pc2FfY2xhdXNlW1JWWF0gPSByZXZhbGV4XG4gICAgICAgICAgdGVzdF9uYW1lICAgICAgICAgICA9IFwiI3t0eXBlbmFtZX1bI3tycHIgcmV2YWxleH1dXCJcbiAgICAgICAgICBuYW1laXQgdGVzdF9uYW1lLCBkY2xfaXNhX2NsYXVzZSBpZiBkY2xfaXNhX2NsYXVzZS5uYW1lIGlzICcnXG4gICAgICAgICAgaXNhX2NsYXVzZXNbIHRlc3RfbmFtZSBdID0gZGNsX2lzYV9jbGF1c2VcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB0c1sgdHlwZW5hbWUgXS5pc2EgPSBkbyAoIHR5cGVuYW1lLCBpc2FfY2xhdXNlcyApIC0+ICggeCwgcmVjb3JkID0gbnVsbCApIC0+XG4gICAgICAgICAgZm9yIG5hbWUsIGlzYV9jbGF1c2Ugb2YgaXNhX2NsYXVzZXNcbiAgICAgICAgICAgIHVubGVzcyBpc2FfY2xhdXNlLmNhbGwgbnVsbCwgeCwgcmVjb3JkXG4gICAgICAgICAgICAgIHJlY29yZCBuYW1lIGlmIHJlY29yZD9cbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNvbXBpbGVfdHlwZXNwYWNlIHRzXG4gICAgZm9yIHR5cGVuYW1lLCBkY2wgb2YgdHNcbiAgICAgIGluZm8gJ86pbmZhdF9fMjknLCB0eXBlbmFtZSwgZGNsLmlzYVxuICAgICAgIyBmb3IgbmFtZSwgZGNsX2lzYV9jbGF1c2Ugb2YgaXNhX2NsYXVzZXNcbiAgICAgICMgICBoZWxwICfOqW5mYXRfXzMwJywgZlwiI3tycHIgbmFtZX06PDMwYzsgfCAje2RjbF9pc2FfY2xhdXNlfVwiXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBpbmZvICfOqW5mYXRfXzMxJywgdHMuaWQuaXNhICdhYmMnXG4gICAgaW5mbyAnzqluZmF0X18zMicsIHRzLmlkLmlzYSAnMTIzJ1xuICAgIGluZm8gJ86pbmZhdF9fMzMnLCB0cy5pZC5pc2EgJ2FiYzEyMydcbiAgICBmYWlsZWRfdGVzdHMgPSBbXVxuICAgIHJlY29yZCA9ICggbmFtZSApIC0+IGZhaWxlZF90ZXN0cy5wdXNoIG5hbWVcbiAgICBpbmZvICfOqW5mYXRfXzM0JywgdHMuaWQuaXNhICdhYmMnLCAgICByZWNvcmQ7IHVyZ2UgJ86pbmZhdF9fMzUnLCBmYWlsZWRfdGVzdHM7IGZhaWxlZF90ZXN0cy5sZW5ndGggPSAwXG4gICAgaW5mbyAnzqluZmF0X18zNicsIHRzLmlkLmlzYSAnMTIzJywgICAgcmVjb3JkOyB1cmdlICfOqW5mYXRfXzM3JywgZmFpbGVkX3Rlc3RzOyBmYWlsZWRfdGVzdHMubGVuZ3RoID0gMFxuICAgIGluZm8gJ86pbmZhdF9fMzgnLCB0cy5pZC5pc2EgMTIzLCAgICAgIHJlY29yZDsgdXJnZSAnzqluZmF0X18zOScsIGZhaWxlZF90ZXN0czsgZmFpbGVkX3Rlc3RzLmxlbmd0aCA9IDBcbiAgICBpbmZvICfOqW5mYXRfXzQwJywgdHMuaWQuaXNhICdhYmMxMjMnLCByZWNvcmQ7IHVyZ2UgJ86pbmZhdF9fNDEnLCBmYWlsZWRfdGVzdHM7IGZhaWxlZF90ZXN0cy5sZW5ndGggPSAwXG4gICAgcmV0dXJuIG51bGxcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICByZXR1cm4gbnVsbFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZGVtb19zZXRfcHJvdG90eXBlX3RvX29idGFpbl9jYWxsYWJsZV9jbGFzc19pbnN0YW5jZXMgPSAtPlxuICB3aGlzcGVyICfigJQnLnJlcGVhdCAxMDhcbiAgZG8gLT5cbiAgICBjbGFzcyBFXG4gICAgICBjb25zdHJ1Y3RvcjogLT5cbiAgICAgICAgQGVwcyA9ICdFOjplcHMnXG4gICAgICBibGFoOiAtPiAnRTo6YmxhaCdcblxuICAgIGNsYXNzIEYgZXh0ZW5kcyBFXG4gICAgICBjb25zdHJ1Y3RvcjogLT5cbiAgICAgICAgc3VwZXIoKVxuICAgICAgICBAZm9vID0gJ0Y6OmZvbydcbiAgICAgIGJsYWg6IC0+ICdGOjpibGFoJ1xuXG4gICAgZiA9IG5ldyBGKClcbiAgICBkZWJ1ZyAnzqluZmF0X180MicsIGZcbiAgICBkZWJ1ZyAnzqluZmF0X180MycsIGYuY29uc3RydWN0b3IgaXMgRlxuICAgICMgZGVidWcgJ86pbmZhdF9fNDQnLCBmOjpcbiAgICBkZWJ1ZyAnzqluZmF0X180NScsIGYuX19wcm90b19fIGluc3RhbmNlb2YgRVxuICAgIGRlYnVnICfOqW5mYXRfXzQ2JywgKCBPYmplY3QuZ2V0UHJvdG90eXBlT2YgZiApIGluc3RhbmNlb2YgRVxuICAgIGRlYnVnICfOqW5mYXRfXzQ3J1xuICAgIG15X2NhbGxhYmxlID0gLT4gJ0QnXG4gICAgIyBteV9jYWxsYWJsZS5fX3Byb3RvX18gPSBuZXcgRigpXG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mIG15X2NhbGxhYmxlLCBuZXcgRigpXG4gICAgZGVidWcgJ86pbmZhdF9fNDgnLCAncnByIG15X2NhbGxhYmxlICAgICAgICAgICAgICAgICAgICAgICAgICcsIHJwciBteV9jYWxsYWJsZVxuICAgIGRlYnVnICfOqW5mYXRfXzQ5JywgJ3JwciBteV9jYWxsYWJsZS5wcm90b3R5cGUgICAgICAgICAgICAgICAnLCBycHIgbXlfY2FsbGFibGUucHJvdG90eXBlXG4gICAgZGVidWcgJ86pbmZhdF9fNTAnLCAncnByIG15X2NhbGxhYmxlOjogICAgICAgICAgICAgICAgICAgICAgICcsIHJwciBteV9jYWxsYWJsZTo6XG4gICAgZGVidWcgJ86pbmZhdF9fNTEnLCAncnByIE9iamVjdC5nZXRQcm90b3R5cGVPZiBteV9jYWxsYWJsZSAgICcsIHJwciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgbXlfY2FsbGFibGVcbiAgICBkZWJ1ZyAnzqluZmF0X181MicsICdycHIgbXlfY2FsbGFibGUgaW5zdGFuY2VvZiBGICAgICAgICAgICAgJywgcnByIG15X2NhbGxhYmxlIGluc3RhbmNlb2YgRlxuICAgIGRlYnVnICfOqW5mYXRfXzUzJywgJ3JwciBteV9jYWxsYWJsZSBpbnN0YW5jZW9mIEUgICAgICAgICAgICAnLCBycHIgbXlfY2FsbGFibGUgaW5zdGFuY2VvZiBFXG4gICAgZGVidWcgJ86pbmZhdF9fNTQnLCAncnByIG15X2NhbGxhYmxlLmZvbyAgICAgICAgICAgICAgICAgICAgICcsIHJwciBteV9jYWxsYWJsZS5mb29cbiAgICBkZWJ1ZyAnzqluZmF0X181NScsICdycHIgbXlfY2FsbGFibGUoKSAgICAgICAgICAgICAgICAgICAgICAgJywgcnByIG15X2NhbGxhYmxlKClcbiAgICBkZWJ1ZyAnzqluZmF0X181NicsICdycHIgbXlfY2FsbGFibGUuY29uc3RydWN0b3IgICAgICAgICAgICAgJywgcnByIG15X2NhbGxhYmxlLmNvbnN0cnVjdG9yXG4gICAgZGVidWcgJ86pbmZhdF9fNTcnLCAncnByIG15X2NhbGxhYmxlLmNvbnN0cnVjdG9yLm5hbWUgICAgICAgICcsIHJwciBteV9jYWxsYWJsZS5jb25zdHJ1Y3Rvci5uYW1lXG4gICAgcmV0dXJuIG51bGxcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICB3aGlzcGVyICfigJQnLnJlcGVhdCAxMDhcbiAgZG8gLT5cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNsYXNzIEVcbiAgICAgIGNvbnN0cnVjdG9yOiAoIGNhbGxhYmxlICkgLT5cbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mIGNhbGxhYmxlLCBAXG4gICAgICAgIEBlcHMgPSAnRTo6ZXBzJ1xuICAgICAgICByZXR1cm4gY2FsbGFibGVcbiAgICAgIGJsYWg6IC0+ICdFOjpibGFoJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2xhc3MgRiBleHRlbmRzIEVcbiAgICAgIGNvbnN0cnVjdG9yOiAoIGNhbGxhYmxlICkgLT5cbiAgICAgICAgc3VwZXIgY2FsbGFibGVcbiAgICAgICAgQGZvbyA9ICdGOjpmb28nXG4gICAgICAgIHJldHVybiBjYWxsYWJsZVxuICAgICAgYmxhaDogLT4gJ0Y6OmJsYWgnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBteV9jYWxsYWJsZSA9IG5ldyBGICggRGVzaXJlID0gLT4gXCJhbiBmdW5jdGlvbiBuYW1lZCBEZXNpcmVcIiApXG4gICAgZGVidWcgJ86pbmZhdF9fNTgnLCAncnByIG15X2NhbGxhYmxlICAgICAgICAgICAgICAgICAgICAgICAgICcsIHJwciBteV9jYWxsYWJsZVxuICAgIGRlYnVnICfOqW5mYXRfXzU5JywgJ3JwciBteV9jYWxsYWJsZS5wcm90b3R5cGUgICAgICAgICAgICAgICAnLCBycHIgbXlfY2FsbGFibGUucHJvdG90eXBlXG4gICAgZGVidWcgJ86pbmZhdF9fNjAnLCAncnByIG15X2NhbGxhYmxlOjogICAgICAgICAgICAgICAgICAgICAgICcsIHJwciBteV9jYWxsYWJsZTo6XG4gICAgZGVidWcgJ86pbmZhdF9fNjEnLCAncnByIE9iamVjdC5nZXRQcm90b3R5cGVPZiBteV9jYWxsYWJsZSAgICcsIHJwciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgbXlfY2FsbGFibGVcbiAgICBkZWJ1ZyAnzqluZmF0X182MicsICdycHIgbXlfY2FsbGFibGUgaW5zdGFuY2VvZiBGICAgICAgICAgICAgJywgcnByIG15X2NhbGxhYmxlIGluc3RhbmNlb2YgRlxuICAgIGRlYnVnICfOqW5mYXRfXzYzJywgJ3JwciBteV9jYWxsYWJsZSBpbnN0YW5jZW9mIEUgICAgICAgICAgICAnLCBycHIgbXlfY2FsbGFibGUgaW5zdGFuY2VvZiBFXG4gICAgZGVidWcgJ86pbmZhdF9fNjQnLCAncnByIG15X2NhbGxhYmxlLmZvbyAgICAgICAgICAgICAgICAgICAgICcsIHJwciBteV9jYWxsYWJsZS5mb29cbiAgICBkZWJ1ZyAnzqluZmF0X182NScsICdycHIgbXlfY2FsbGFibGUuZXBzICAgICAgICAgICAgICAgICAgICAgJywgcnByIG15X2NhbGxhYmxlLmVwc1xuICAgIGRlYnVnICfOqW5mYXRfXzY2JywgJ3JwciBteV9jYWxsYWJsZSgpICAgICAgICAgICAgICAgICAgICAgICAnLCBycHIgbXlfY2FsbGFibGUoKVxuICAgIGRlYnVnICfOqW5mYXRfXzY3JywgJ3JwciBteV9jYWxsYWJsZS5ibGFoKCkgICAgICAgICAgICAgICAgICAnLCBycHIgbXlfY2FsbGFibGUuYmxhaCgpXG4gICAgZGVidWcgJ86pbmZhdF9fNjgnLCAncnByIG15X2NhbGxhYmxlLmNvbnN0cnVjdG9yICAgICAgICAgICAgICcsIHJwciBteV9jYWxsYWJsZS5jb25zdHJ1Y3RvclxuICAgIGRlYnVnICfOqW5mYXRfXzY5JywgJ3JwciBteV9jYWxsYWJsZS5jb25zdHJ1Y3Rvci5uYW1lICAgICAgICAnLCBycHIgbXlfY2FsbGFibGUuY29uc3RydWN0b3IubmFtZVxuICAgIHJldHVybiBudWxsXG4gIHJldHVybiBudWxsXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gICMgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiB0cnVlLCAgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgIyAjIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgQG5mYV90YXNrc1xuICAjICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBwdXNoX3BvcF9zZXRfYXQ6IEBuZmFfdGFza3MuaW50ZXJuYWxzLnB1c2hfcG9wX3NldF9hdCB9XG4gIGRlbW9faXNhX3dpdGhfcmVhc29uKClcbiAgZGVtb190eXBlc19hc19mdW5jdGlvbnMoKVxuICBkZW1vX3BhcnNlX3JldHVybl92YWx1ZSgpXG4gICMgZGVtb19zZXRfcHJvdG90eXBlX3RvX29idGFpbl9jYWxsYWJsZV9jbGFzc19pbnN0YW5jZXMoKVxuIl19
//# sourceURL=../src/demo-cleartype-implementation-variants.coffee