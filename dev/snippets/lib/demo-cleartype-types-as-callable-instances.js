(async function() {
  'use strict';
  var GTNG, GUY, RVX, Revalex, Test, Type, Typespace, Unparsable_function_body, alert, bold, debug, demo_turning_lists_of_functions_into_objects_with_sensible_names, echo, f, gnd, gold, help, hide, info, inspect, lime, log, nameit, plain, pod_prototypes, praise, red, reverse, rpr, truth, urge, warn, whisper, white,
    indexOf = [].indexOf;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('intertype/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  //...........................................................................................................
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  //...........................................................................................................
  ({f} = require('../../../apps/effstring'));

  //...........................................................................................................
  ({red, gold, bold, white, lime, reverse} = GUY.trm);

  truth = function(x) {
    return GUY.trm.truth(x);
  };

  //===========================================================================================================
  pod_prototypes = Object.freeze([null, Object.getPrototypeOf({})]);

  gnd = {
    text: {
      isa: function(x) {
        return (typeof x) === 'string';
      }
    },
    function: {
      isa: function(x) {
        return (typeof x) === 'function';
      }
    },
    pod: {
      isa: function(x) {
        var ref;
        return (x != null) && (ref = Object.getPrototypeOf(x), indexOf.call(pod_prototypes, ref) >= 0);
      }
    },
    list: {
      isa: function(x) {
        return Array.isArray(x);
      }
    }
  };

  //...........................................................................................................
  ({hide} = GUY.props);

  nameit = function(name, f) {
    return Object.defineProperty(f, 'name', {
      value: name
    });
  };

  //===========================================================================================================
  Unparsable_function_body = class Unparsable_function_body extends Error {};

  //===========================================================================================================
  Revalex = class Revalex {
    //---------------------------------------------------------------------------------------------------------
    revalex_from_function(fn) {
      /* TAINT use JS tokenizer */
      /* NOTE restrictions:
         * catches only last `return` statement, even if unreachable
         * may misinterpret string literals, comments as source code
          */
      var R, match, source;
      source = fn.toString().replace(/\s+/gsv, '\x20');
      if ((match = source.match(/^.*\breturn\s(?<revalex>[^;]+).*$/sv)) == null) {
        throw new Unparsable_function_body(`Ωtt___1 unable to parse function ${rpr(source)}`);
      }
      R = match.groups.revalex;
      return R;
    }

    //---------------------------------------------------------------------------------------------------------
    normalize_revalex(fn) {
      /* NOTE `revalex` short for '**RE**turn **VA**Lue **EX**pression' */
      /* TAINT use JS tokenizer */
      var R;
      R = this.revalex_from_function(fn);
      R = R.replace(/<=/gsv, 'lteq');
      R = R.replace(/>=/gsv, 'gteq');
      R = R.replace(/</gsv, 'lt');
      R = R.replace(/>/gsv, 'gt');
      R = R.replace(/!==/gsv, 'isnt');
      R = R.replace(/&&/gsv, 'and');
      R = R.replace(/\|\|/gsv, 'or');
      R = R.replace(/!/gsv, 'not');
      return R;
    }

    //---------------------------------------------------------------------------------------------------------
    name_from_function(fn) {
      return this.name_from_revalex(this.normalize_revalex(fn));
    }

    //---------------------------------------------------------------------------------------------------------
    name_from_revalex(revalex) {
      var R;
      R = revalex.replace(/[^a-zA-Z0-9_]+/gsv, '_');
      R = R.replace(/^_*(?<center>.*?)_*$/gsv, '$<center>');
      return R;
    }

  };

  RVX = new Revalex();

  //===========================================================================================================
  Typespace = class Typespace {};

  //===========================================================================================================
  Type = class Type {
    //---------------------------------------------------------------------------------------------------------
    constructor(typespace, typename, dcl) {
      hide(this, 'typespace', typespace);
      hide(this, 'dcl', dcl);
      this.name = typename;
      this._normalize_dcl();
      nameit(`isa_${typename}`, this.isa);
      return void 0;
    }

    //---------------------------------------------------------------------------------------------------------
    isa(x) {
      var i, isa_clause, len, ref;
      ref = this.isa_clauses;
      /* TAINT add reporting */
      for (i = 0, len = ref.length; i < len; i++) {
        isa_clause = ref[i];
        if (!isa_clause(x)) {
          return false;
        }
      }
      return true;
    }

    //---------------------------------------------------------------------------------------------------------
    _normalize_dcl() {
      var dcl;
      /* Convert 'isa-only' declarations into objects with explicit `isa`: */
      if (gnd.pod.isa(this.dcl)) {
        dcl = {...this.dcl};
      } else {
        dcl = {
          isa: this.dcl
        };
      }
      /* Convert singular `isa` declarations into list of clauses: */
      if (gnd.list.isa(dcl.isa)) {
        this.isa_clauses = [...dcl.isa];
      } else {
        this.isa_clauses = [dcl.isa];
      }
      this._normalize_isa_clauses();
      return dcl;
    }

    //---------------------------------------------------------------------------------------------------------
    _normalize_isa_clauses() {
      var i, idx, isa_clause, len, ref;
      ref = this.isa_clauses;
      for (idx = i = 0, len = ref.length; i < len; idx = ++i) {
        isa_clause = ref[idx];
        ((isa_clause, idx) => {
          // debug 'Ωtt___2', @name, idx, ( rpr isa_clause )
          //.................................................................................................
          /* De-reference referenced type: */
          if (gnd.text.isa(isa_clause)) {
            return this.isa_clauses[idx] = ((ref_typename) => {
              var ref_type;
              if (!Reflect.has(this.typespace, ref_typename)) {
                throw new Error(`Ωtt___3 unable to resolve ${rpr(ref_typename)} referenced by ${rpr(this.name)}`);
              }
              ref_type = this.typespace[ref_typename];
              // debug 'Ωtt___4', @name, '->', ref_typename, rpr ref_type
              // return nameit "ref_#{ref_type.isa.name}", ( x ) -> ref_type.isa x
              return nameit(`ref_isa_${ref_typename}`, function(x) {
                return ref_type.isa(x);
              });
            })(isa_clause);
          //.................................................................................................
          } else if (gnd.function.isa(isa_clause)) {
            if (isa_clause.name === '') {
              return nameit(RVX.revalex_from_function(isa_clause), isa_clause);
            }
          } else {
            // nameit ( RVX.name_from_function isa_clause ), isa_clause
            throw new Error("Ωtt___6 unexpected type in ISA clause");
          }
        })(isa_clause, idx);
      }
      return null;
    }

  };

  //===========================================================================================================
  demo_turning_lists_of_functions_into_objects_with_sensible_names = function() {
    var ts;
    //.........................................................................................................
    ts = {
      //.......................................................................................................
      /* Declare by DCL object whose `isa` property is a function: */
      function: {
        isa: (function(x) {
          return (typeof x) === 'function';
        })
      },
      //.......................................................................................................
      /* Declare by 'immediate' function: */
      string: function(x) {
        return (typeof x) === 'string';
      },
      //.......................................................................................................
      /* Declare by 'immediate' reference to name of existing type: */
      text: 'string',
      //.......................................................................................................
      /* Declare by 'immediate' list of clauses: */
      nonempty_text: [
        'text',
        function(x) {
          return x.length > 0;
        }
      ],
      //.......................................................................................................
      /* Declare by DCL object whose `isa` property is a reference to name of existing type: */
      spork: {
        isa: 'nonempty_text'
      },
      //.......................................................................................................
      /* Declare by DCL object whose `isa` property is a list of clauses: */
      id: {
        isa: [
          'text',
          function(x) {
            return /^[a-z][a-z0-9]*$/.test(x);
          }
        ]
      },
      //.......................................................................................................
      foo: 'spork',
      bar: 'foo',
      baz: 'bar'
    };
    (() => {      //.......................................................................................................
      var dcl, type, typename;
      for (typename in ts) {
        dcl = ts[typename];
        ts[typename] = type = new Type(ts, typename, dcl);
        echo(f`${gold(typename)}:<15c; | ${white(rpr(dcl))}:<60c; | ${lime(rpr(type.isa_clauses))}:<60c;`);
      }
      // echo f"#{gold typename}:<15c; | #{white rpr dcl}:<60c; | #{lime rpr type}:<60c; | #{gold rpr type.isa}:<60c;"
      return null;
    })();
    info('Ωtt___7', "ts.text                  ", ts.text);
    info('Ωtt___8', "ts.spork                 ", ts.spork);
    info();
    info('Ωtt___9', "ts.text.isa 'pop'        ", truth(ts.text.isa('pop')));
    info('Ωtt__10', "ts.text.isa 87           ", truth(ts.text.isa(87)));
    info();
    info('Ωtt__11', "ts.spork.isa 'pop'       ", truth(ts.spork.isa('pop')));
    info('Ωtt__12', "ts.spork.isa 87          ", truth(ts.spork.isa(87)));
    info();
    info('Ωtt__13', "ts.id.isa 'pop'          ", truth(ts.id.isa('pop')));
    info('Ωtt__14', "ts.id.isa '3pop'         ", truth(ts.id.isa('3pop')));
    info('Ωtt__15', "ts.id.isa 'pop3'         ", truth(ts.id.isa('pop3')));
    info();
    info('Ωtt__16', "ts.spork.isa ''          ", truth(ts.spork.isa('')));
    info('Ωtt__17', "ts.spork.isa 'A'         ", truth(ts.spork.isa('A')));
    info();
    info('Ωtt__18', "ts.foo.isa ''            ", truth(ts.foo.isa('')));
    info('Ωtt__19', "ts.bar.isa ''            ", truth(ts.bar.isa('')));
    info('Ωtt__20', "ts.baz.isa ''            ", truth(ts.baz.isa('')));
    info('Ωtt__21', "ts.foo.isa 'A'           ", truth(ts.foo.isa('A')));
    info('Ωtt__22', "ts.bar.isa 'A'           ", truth(ts.bar.isa('A')));
    info('Ωtt__23', "ts.baz.isa 'A'           ", truth(ts.baz.isa('A')));
    return null;
    // #.......................................................................................................
    // compile_typespace = ( ts ) ->
    //   for typename, dcl of ts
    //     isa_clauses = {}
    //     #...................................................................................................
    //     debug 'Ωtt__24', 'dcl_isa', rpr dcl_isa
    //     for dcl_isa_clause in dcl_isa
    //       debug 'Ωtt__25', 'dcl_isa_clause', rpr dcl_isa_clause
    //       #.................................................................................................
    //       unless gnd.function.isa dcl_isa_clause
    //         throw new Error "Ωtt__26 expected a function, got #{rpr dcl_isa_clause}"
    //       #.................................................................................................
    //       revalex             = RVX.normalize_revalex dcl_isa_clause
    //       # dcl_isa_clause[RVX] = revalex
    //       test_name           = "#{typename}[#{rpr revalex}]"
    //       nameit test_name, dcl_isa_clause if dcl_isa_clause.name is ''
    //       isa_clauses[ test_name ] = dcl_isa_clause
    //     #...................................................................................................
    //     ts[ typename ].isa = do ( typename, isa_clauses ) -> ( x, record = null ) ->
    //       for name, isa_clause of isa_clauses
    //         unless isa_clause.call null, x, record
    //           record name if record?
    //           return false
    //       return true
    // #.......................................................................................................
    // compile_typespace ts
    // for typename, dcl of ts
    //   info 'Ωtt__27', typename, dcl.isa
    //   # for name, dcl_isa_clause of isa_clauses
    //   #   help 'Ωtt__28', f"#{rpr name}:<30c; | #{dcl_isa_clause}"
    // #.......................................................................................................
    // info 'Ωtt__29', ts.id.isa 'abc'
    // info 'Ωtt__30', ts.id.isa '123'
    // info 'Ωtt__31', ts.id.isa 'abc123'
    // failed_tests = []
    // record = ( name ) -> failed_tests.push name
    // info 'Ωtt__32', ts.id.isa 'abc',    record; urge 'Ωtt__33', failed_tests; failed_tests.length = 0
    // info 'Ωtt__34', ts.id.isa '123',    record; urge 'Ωtt__35', failed_tests; failed_tests.length = 0
    // info 'Ωtt__36', ts.id.isa 123,      record; urge 'Ωtt__37', failed_tests; failed_tests.length = 0
    // info 'Ωtt__38', ts.id.isa 'abc123', record; urge 'Ωtt__39', failed_tests; failed_tests.length = 0
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      // guytest_cfg = { throw_on_error: true,   show_passes: true,  report_checks: false, }
      // # guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
      // ( new Test guytest_cfg ).test @nfa_tasks
      return demo_turning_lists_of_functions_into_objects_with_sensible_names();
    })();
  }

}).call(this);

//# sourceMappingURL=demo-cleartype-types-as-callable-instances.js.map