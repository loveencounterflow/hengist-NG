(async function() {
  'use strict';
  var GTNG, GUY, RVX, Revalex, Test, Type, Typespace, Unparsable_function_body, alert, bold, debug, demo_turning_lists_of_functions_into_objects_with_sensible_names, echo, f, gnd, gold, help, hide, hide_getter, info, inspect, lime, log, nameit, plain, pod_prototypes, praise, red, reverse, rpr, rvx_of, set_getter, truth, types_sym, urge, warn, whisper, white,
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
    },
    type: {
      isa: function(x) {
        return x instanceof Type;
      }
    }
  };

  //...........................................................................................................
  // { hide }  = GUY.props
  nameit = function(name, f) {
    return Object.defineProperty(f, 'name', {
      value: name
    });
  };

  //===========================================================================================================
  hide = (object, name, value) => {
    return Object.defineProperty(object, name, {
      enumerable: false,
      writable: true,
      configurable: true,
      value: value
    });
  };

  //===========================================================================================================
  hide_getter = (object, name, getter) => {
    return Object.defineProperty(object, name, {
      enumerable: false,
      configurable: true,
      get: getter
    });
  };

  //===========================================================================================================
  set_getter = (object, name, getter) => {
    return Object.defineProperty(object, name, {
      enumerable: true,
      configurable: true,
      get: getter
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

  rvx_of = RVX.revalex_from_function.bind(RVX);

  types_sym = Symbol.for('types');

  //===========================================================================================================
  Typespace = class Typespace {
    //---------------------------------------------------------------------------------------------------------
    constructor(tsname, dcls = null) {
      var dcl, typename;
      this.name = tsname;
      hide(this, types_sym, []);
      if (dcls != null) {
        for (typename in dcls) {
          dcl = dcls[typename];
          this.add_type(typename, dcl);
        }
      }
      return void 0;
    }

    //---------------------------------------------------------------------------------------------------------
    add_type(typename, dcl) {
      var R;
      if (Reflect.has(this, typename)) {
        throw new Error(`Ωtt___2 name clash ${rpr(typename)}`);
      }
      this[typename] = R = new Type(this, typename, dcl);
      this[types_sym].push(R);
      return R;
    }

    //---------------------------------------------------------------------------------------------------------
    * [Symbol.iterator]() {
      return (yield* this[types_sym]);
    }

  };

  //===========================================================================================================
  Type = class Type {
    //---------------------------------------------------------------------------------------------------------
    constructor(typespace, typename, dcl) {
      this.name = typename;
      hide(this, 'typespace', typespace);
      hide(this, 'dcl', dcl);
      hide_getter(this, 'fqname', () => {
        return `${this.typespace.name}.${this.name}`;
      });
      this._normalize_dcl();
      hide(this, 'isa_clauses', this.isa_clauses);
      // nameit "#{typename}.isa()", @isa
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
          var revalex;
          //.....................................................................................................
          /* De-reference referenced type: */
          if (gnd.text.isa(isa_clause)) {
            return this.isa_clauses[idx] = ((ref_typename) => {
              var ref_type;
              if (!Reflect.has(this.typespace, ref_typename)) {
                throw new Error(`Ωtt___3 unable to resolve ${rpr(ref_typename)} referenced by ${rpr(this.name)}`);
              }
              ref_type = this.typespace[ref_typename];
              return nameit(`Ωtt___4 ${ref_type.fqname}`, function(x) {
                return ref_type.isa(x);
              });
            })(isa_clause);
          //.....................................................................................................
          } else if (gnd.function.isa(isa_clause)) {
            null;
            // if isa_clause.name is ''
            // nameit ( "#{@fqname}[#{rpr revalex}]" ), isa_clause
            revalex = rpr(rvx_of(isa_clause));
            return nameit(`Ωtt___5 ${revalex}`, isa_clause);
          //.....................................................................................................
          } else if (gnd.type.isa(isa_clause)) {
            return this.isa_clauses[idx] = ((type) => {
              return nameit(`Ωtt___6 ${type.fqname}`, function(x) {
                return type.isa(x);
              });
            })(isa_clause);
          //.....................................................................................................
          } else if ((isa_clause != null) && (Reflect.has(isa_clause, 'isa')) && (gnd.function.isa(isa_clause.isa))) {
            return this.isa_clauses[idx] = ((type) => {
              var fqname, ref1, ref2;
              fqname = (ref1 = type.fqname) != null ? ref1 : `?.${(ref2 = type.name) != null ? ref2 : rpr(rvx_of(type.isa))}`;
              return nameit(`Ωtt___7 ${fqname}`, function(x) {
                return type.isa(x);
              });
            })(isa_clause);
          } else {
            //.....................................................................................................
            throw new Error(`Ωtt___8 unexpected type in ISA clause: ${rpr(isa_clause)}`);
          }
        })(isa_clause, idx);
      }
      return null;
    }

  };

  //===========================================================================================================
  demo_turning_lists_of_functions_into_objects_with_sensible_names = function() {
    var i, len, one, ref, show_type, ts, type, typespace;
    //.........................................................................................................
    one = new Typespace('one', {
      float: function(x) {
        return Number.isFinite(x);
      }
    });
    //.........................................................................................................
    ts = new Typespace('ts', {
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
          (function(x) {
            return /^[a-z][a-z0-9]*$/.test(x);
          })
        ]
      },
      //.......................................................................................................
      /* Declare using an existing type: */
      length: [
        one.float,
        (function(x) {
          return x >= 0;
        })
      ],
      //.......................................................................................................
      /* Chain of references: */
      foo: 'spork',
      bar: 'foo',
      baz: 'bar',
      //.......................................................................................................
      pod_1: gnd.pod,
      pod_2: function(x) {
        return gnd.pod.isa(x);
      },
      pod_3: [
        (function(x) {
          return gnd.pod.isa(x);
        })
      ],
      pod_4: [gnd.pod]
    });
    //.......................................................................................................
    show_type = function(type) {
      // echo f"#{gold type.fqname}:<15c; | #{white rpr type.dcl}:<60c; | #{lime rpr type.isa_clauses}:<60c;"
      echo(f`${gold(type.fqname)}:<20c; | ${white(rpr(type))}:<25c; | ${lime(rpr(type.isa_clauses))}:<60c;`);
      return null;
    };
    ref = [one, ts];
    for (i = 0, len = ref.length; i < len; i++) {
      typespace = ref[i];
      for (type of typespace) {
        show_type(type);
      }
    }
    //.......................................................................................................
    info('Ωtt___9', "ts.text                  ", ts.text);
    info('Ωtt__10', "ts.spork                 ", ts.spork);
    info();
    info('Ωtt__11', "ts.text.isa 'pop'        ", truth(ts.text.isa('pop')));
    info('Ωtt__12', "ts.text.isa 87           ", truth(ts.text.isa(87)));
    info();
    info('Ωtt__13', "ts.spork.isa 'pop'       ", truth(ts.spork.isa('pop')));
    info('Ωtt__14', "ts.spork.isa 87          ", truth(ts.spork.isa(87)));
    info();
    info('Ωtt__15', "ts.id.isa 'pop'          ", truth(ts.id.isa('pop')));
    info('Ωtt__16', "ts.id.isa '3pop'         ", truth(ts.id.isa('3pop')));
    info('Ωtt__17', "ts.id.isa 'pop3'         ", truth(ts.id.isa('pop3')));
    info();
    info('Ωtt__18', "ts.spork.isa ''          ", truth(ts.spork.isa('')));
    info('Ωtt__19', "ts.spork.isa 'A'         ", truth(ts.spork.isa('A')));
    info();
    info('Ωtt__20', "ts.foo.isa ''            ", truth(ts.foo.isa('')));
    info('Ωtt__21', "ts.bar.isa ''            ", truth(ts.bar.isa('')));
    info('Ωtt__22', "ts.baz.isa ''            ", truth(ts.baz.isa('')));
    info('Ωtt__23', "ts.foo.isa 'A'           ", truth(ts.foo.isa('A')));
    info('Ωtt__24', "ts.bar.isa 'A'           ", truth(ts.bar.isa('A')));
    info('Ωtt__25', "ts.baz.isa 'A'           ", truth(ts.baz.isa('A')));
    info();
    info('Ωtt__26', "ts.pod_1.isa {}          ", truth(ts.pod_1.isa({})));
    info('Ωtt__27', "ts.pod_2.isa {}          ", truth(ts.pod_2.isa({})));
    info();
    info('Ωtt__28', "ts.length.isa {}         ", truth(ts.length.isa({})));
    info('Ωtt__29', "ts.length.isa -3.5       ", truth(ts.length.isa(-3.5)));
    info('Ωtt__30', "ts.length.isa +3.5       ", truth(ts.length.isa(+3.5)));
    //.........................................................................................................
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

  /*

## To Do

* **`[—]`** create `Type_base` class that types are really derived from so they don't inherit methods like
  `_isaname_from_typename()` and so on
* **`[—]`** implement `dcl.base`

 */

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tY2xlYXJ0eXBlLXR5cGVzLWFzLWNhbGxhYmxlLWluc3RhbmNlcy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBQTtBQUFBLE1BQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsU0FBQSxFQUFBLHdCQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsZ0VBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxXQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLE1BQUEsRUFBQSxLQUFBLEVBQUEsY0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxNQUFBLEVBQUEsVUFBQSxFQUFBLEtBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQTtJQUFBLG9CQUFBOzs7RUFHQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLHVCQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsT0FIRixFQUlFLEdBSkYsQ0FBQSxHQUk0QixHQUFHLENBQUMsR0FKaEMsRUFiQTs7OztFQW9CQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixJQUE1QixF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QUE2QyxLQUFBLENBQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFWLENBQWMsQ0FBQSxDQUFkLENBQU4sQ0FBN0M7SUFDQSxJQUFBLENBQUssU0FBTCxFQUFnQiwyQkFBaEIsRUFBNkMsS0FBQSxDQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBVixDQUFjLENBQUMsR0FBZixDQUFOLENBQTdDO0lBQ0EsSUFBQSxDQUFLLFNBQUwsRUFBZ0IsMkJBQWhCLEVBQTZDLEtBQUEsQ0FBTSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQVYsQ0FBYyxDQUFDLEdBQWYsQ0FBTixDQUE3QyxFQTdFRjs7QUErRUUsV0FBTztFQWhGMEQsRUE1TW5FOzs7RUFnU0EsSUFBRyxNQUFBLEtBQVUsT0FBTyxDQUFDLElBQXJCO0lBQStCLE1BQVMsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBOzs7O2FBSXRDLGdFQUFBLENBQUE7SUFKc0MsQ0FBQSxJQUF4Qzs7O0VBaFNBOzs7Ozs7Ozs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzdHJpY3QnXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdpbnRlcnR5cGUvdGVzdC1iYXNpY3MnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbiMgV0dVWSAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvd2ViZ3V5J1xuIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG4jLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxueyByZWRcbiAgZ29sZFxuICBib2xkXG4gIHdoaXRlXG4gIGxpbWVcbiAgcmV2ZXJzZSAgICAgICAgICAgICAgIH0gPSBHVVkudHJtXG50cnV0aCAgICAgICAgICAgICAgICAgICAgID0gKCB4ICkgLT4gR1VZLnRybS50cnV0aCB4XG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxucG9kX3Byb3RvdHlwZXMgPSBPYmplY3QuZnJlZXplIFsgbnVsbCwgKCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yge30gKSwgXVxuZ25kID1cbiAgdGV4dDogICAgICAgaXNhOiAoIHggKSAtPiAoIHR5cGVvZiB4ICkgaXMgJ3N0cmluZydcbiAgZnVuY3Rpb246ICAgaXNhOiAoIHggKSAtPiAoIHR5cGVvZiB4ICkgaXMgJ2Z1bmN0aW9uJ1xuICBwb2Q6ICAgICAgICBpc2E6ICggeCApIC0+IHg/IGFuZCAoIE9iamVjdC5nZXRQcm90b3R5cGVPZiB4ICkgaW4gcG9kX3Byb3RvdHlwZXNcbiAgbGlzdDogICAgICAgaXNhOiAoIHggKSAtPiBBcnJheS5pc0FycmF5IHhcbiAgdHlwZTogICAgICAgaXNhOiAoIHggKSAtPiB4IGluc3RhbmNlb2YgVHlwZVxuIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4jIHsgaGlkZSB9ICA9IEdVWS5wcm9wc1xubmFtZWl0ICAgID0gKCBuYW1lLCBmICkgLT4gT2JqZWN0LmRlZmluZVByb3BlcnR5IGYsICduYW1lJywgeyB2YWx1ZTogbmFtZSwgfVxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmhpZGUgPSAoIG9iamVjdCwgbmFtZSwgdmFsdWUgKSA9PiBPYmplY3QuZGVmaW5lUHJvcGVydHkgb2JqZWN0LCBuYW1lLFxuICAgIGVudW1lcmFibGU6ICAgZmFsc2VcbiAgICB3cml0YWJsZTogICAgIHRydWVcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB2YWx1ZTogICAgICAgIHZhbHVlXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaGlkZV9nZXR0ZXIgPSAoIG9iamVjdCwgbmFtZSwgZ2V0dGVyICkgPT4gT2JqZWN0LmRlZmluZVByb3BlcnR5IG9iamVjdCwgbmFtZSxcbiAgICBlbnVtZXJhYmxlOiAgIGZhbHNlXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgZ2V0OiAgICAgICAgICBnZXR0ZXJcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5zZXRfZ2V0dGVyID0gKCBvYmplY3QsIG5hbWUsIGdldHRlciApID0+IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBvYmplY3QsIG5hbWUsXG4gICAgZW51bWVyYWJsZTogICB0cnVlXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgZ2V0OiAgICAgICAgICBnZXR0ZXJcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmNsYXNzIFVucGFyc2FibGVfZnVuY3Rpb25fYm9keSBleHRlbmRzIEVycm9yXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jbGFzcyBSZXZhbGV4XG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZXZhbGV4X2Zyb21fZnVuY3Rpb246ICggZm4gKSAtPlxuICAgICMjIyBUQUlOVCB1c2UgSlMgdG9rZW5pemVyICMjI1xuICAgICMjIyBOT1RFIHJlc3RyaWN0aW9uczpcbiAgICAqIGNhdGNoZXMgb25seSBsYXN0IGByZXR1cm5gIHN0YXRlbWVudCwgZXZlbiBpZiB1bnJlYWNoYWJsZVxuICAgICogbWF5IG1pc2ludGVycHJldCBzdHJpbmcgbGl0ZXJhbHMsIGNvbW1lbnRzIGFzIHNvdXJjZSBjb2RlXG4gICAgIyMjXG4gICAgc291cmNlID0gZm4udG9TdHJpbmcoKS5yZXBsYWNlIC8vLyBcXHMrIC8vL2dzdiwgJ1xceDIwJ1xuICAgIHVubGVzcyAoIG1hdGNoID0gc291cmNlLm1hdGNoIC8vL14gLiogXFxiIHJldHVybiBcXHMgKD88cmV2YWxleD4gW14gOyBdKyApIC4qICQvLy9zdiApP1xuICAgICAgdGhyb3cgbmV3IFVucGFyc2FibGVfZnVuY3Rpb25fYm9keSBcIs6pdHRfX18xIHVuYWJsZSB0byBwYXJzZSBmdW5jdGlvbiAje3JwciBzb3VyY2V9XCJcbiAgICBSID0gbWF0Y2guZ3JvdXBzLnJldmFsZXhcbiAgICByZXR1cm4gUlxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbm9ybWFsaXplX3JldmFsZXg6ICggZm4gKSAtPlxuICAgICMjIyBOT1RFIGByZXZhbGV4YCBzaG9ydCBmb3IgJyoqUkUqKnR1cm4gKipWQSoqTHVlICoqRVgqKnByZXNzaW9uJyAjIyNcbiAgICAjIyMgVEFJTlQgdXNlIEpTIHRva2VuaXplciAjIyNcbiAgICBSID0gQHJldmFsZXhfZnJvbV9mdW5jdGlvbiBmblxuICAgIFIgPSBSLnJlcGxhY2UgLy8vICA8PSAgICAgIC8vL2dzdiwgJ2x0ZXEnXG4gICAgUiA9IFIucmVwbGFjZSAvLy8gID49ICAgICAgLy8vZ3N2LCAnZ3RlcSdcbiAgICBSID0gUi5yZXBsYWNlIC8vLyAgPCAgICAgICAvLy9nc3YsICdsdCdcbiAgICBSID0gUi5yZXBsYWNlIC8vLyAgPiAgICAgICAvLy9nc3YsICdndCdcbiAgICBSID0gUi5yZXBsYWNlIC8vLyAgIT09ICAgICAvLy9nc3YsICdpc250J1xuICAgIFIgPSBSLnJlcGxhY2UgLy8vICAmJiAgICAgIC8vL2dzdiwgJ2FuZCdcbiAgICBSID0gUi5yZXBsYWNlIC8vLyAgXFx8XFx8ICAgIC8vL2dzdiwgJ29yJ1xuICAgIFIgPSBSLnJlcGxhY2UgLy8vICAhICAgICAgIC8vL2dzdiwgJ25vdCdcbiAgICByZXR1cm4gUlxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbmFtZV9mcm9tX2Z1bmN0aW9uOiAoIGZuICkgLT4gQG5hbWVfZnJvbV9yZXZhbGV4IEBub3JtYWxpemVfcmV2YWxleCBmblxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbmFtZV9mcm9tX3JldmFsZXg6ICggcmV2YWxleCApIC0+XG4gICAgUiA9IHJldmFsZXgucmVwbGFjZSAvLy8gW14gYS16IEEtWiAwLTkgXyBdKyAgICAgICAgIC8vL2dzdiwgJ18nXG4gICAgUiA9IFIucmVwbGFjZSAgICAgICAvLy9eIF8qICg/PGNlbnRlcj4gLio/ICkgXyogJCAgIC8vL2dzdiwgJyQ8Y2VudGVyPidcbiAgICByZXR1cm4gUlxuXG5SVlggICAgICAgPSBuZXcgUmV2YWxleCgpXG5ydnhfb2YgICAgPSBSVlgucmV2YWxleF9mcm9tX2Z1bmN0aW9uLmJpbmQgUlZYXG50eXBlc19zeW0gPSBTeW1ib2wuZm9yICd0eXBlcydcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmNsYXNzIFR5cGVzcGFjZVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29uc3RydWN0b3I6ICggdHNuYW1lLCBkY2xzID0gbnVsbCApIC0+XG4gICAgQG5hbWUgPSB0c25hbWVcbiAgICBoaWRlIEAsIHR5cGVzX3N5bSwgW11cbiAgICBpZiBkY2xzP1xuICAgICAgZm9yIHR5cGVuYW1lLCBkY2wgb2YgZGNsc1xuICAgICAgICBAYWRkX3R5cGUgdHlwZW5hbWUsIGRjbFxuICAgIHJldHVybiB1bmRlZmluZWRcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGFkZF90eXBlOiAoIHR5cGVuYW1lLCBkY2wgKSAtPlxuICAgIGlmIFJlZmxlY3QuaGFzIEAsIHR5cGVuYW1lXG4gICAgICB0aHJvdyBuZXcgRXJyb3IgXCLOqXR0X19fMiBuYW1lIGNsYXNoICN7cnByIHR5cGVuYW1lfVwiXG4gICAgQFsgdHlwZW5hbWUgXSA9IFIgPSBuZXcgVHlwZSBALCB0eXBlbmFtZSwgZGNsXG4gICAgQFsgdHlwZXNfc3ltIF0ucHVzaCBSXG4gICAgcmV0dXJuIFJcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFtTeW1ib2wuaXRlcmF0b3JdOiAtPiB5aWVsZCBmcm9tIEBbIHR5cGVzX3N5bSBdXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jbGFzcyBUeXBlXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25zdHJ1Y3RvcjogKCB0eXBlc3BhY2UsIHR5cGVuYW1lLCBkY2wgKSAtPlxuICAgIEBuYW1lICAgICAgICAgICAgICAgICAgICAgPSB0eXBlbmFtZVxuICAgIGhpZGUgQCwgJ3R5cGVzcGFjZScsICAgICAgICB0eXBlc3BhY2VcbiAgICBoaWRlIEAsICdkY2wnLCAgICAgICAgICAgICAgZGNsXG4gICAgaGlkZV9nZXR0ZXIgQCwgJ2ZxbmFtZScsID0+IFwiI3tAdHlwZXNwYWNlLm5hbWV9LiN7QG5hbWV9XCJcbiAgICBAX25vcm1hbGl6ZV9kY2woKVxuICAgIGhpZGUgQCwgJ2lzYV9jbGF1c2VzJywgICAgICBAaXNhX2NsYXVzZXNcbiAgICAjIG5hbWVpdCBcIiN7dHlwZW5hbWV9LmlzYSgpXCIsIEBpc2FcbiAgICByZXR1cm4gdW5kZWZpbmVkXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc2E6ICggeCApIC0+XG4gICAgIyMjIFRBSU5UIGFkZCByZXBvcnRpbmcgIyMjXG4gICAgZm9yIGlzYV9jbGF1c2UgaW4gQGlzYV9jbGF1c2VzXG4gICAgICByZXR1cm4gZmFsc2UgdW5sZXNzIGlzYV9jbGF1c2UgeFxuICAgIHJldHVybiB0cnVlXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBfbm9ybWFsaXplX2RjbDogLT5cbiAgICAjIyMgQ29udmVydCAnaXNhLW9ubHknIGRlY2xhcmF0aW9ucyBpbnRvIG9iamVjdHMgd2l0aCBleHBsaWNpdCBgaXNhYDogIyMjXG4gICAgaWYgZ25kLnBvZC5pc2EgQGRjbCAgICAgdGhlbiAgZGNsICAgICAgICAgICAgID0geyAgICAgICBAZGNsLi4uLCAgfVxuICAgIGVsc2UgICAgICAgICAgICAgICAgICAgICAgICAgIGRjbCAgICAgICAgICAgICA9IHsgaXNhOiAgQGRjbCwgICAgIH1cbiAgICAjIyMgQ29udmVydCBzaW5ndWxhciBgaXNhYCBkZWNsYXJhdGlvbnMgaW50byBsaXN0IG9mIGNsYXVzZXM6ICMjI1xuICAgIGlmIGduZC5saXN0LmlzYSBkY2wuaXNhIHRoZW4gIEBpc2FfY2xhdXNlcyAgICA9IFsgZGNsLmlzYS4uLiwgXVxuICAgIGVsc2UgICAgICAgICAgICAgICAgICAgICAgICAgIEBpc2FfY2xhdXNlcyAgICA9IFsgZGNsLmlzYSwgICAgXVxuICAgIEBfbm9ybWFsaXplX2lzYV9jbGF1c2VzKClcbiAgICByZXR1cm4gZGNsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBfbm9ybWFsaXplX2lzYV9jbGF1c2VzOiAtPlxuICAgIGZvciBpc2FfY2xhdXNlLCBpZHggaW4gQGlzYV9jbGF1c2VzIHRoZW4gZG8gKCBpc2FfY2xhdXNlLCBpZHggKSA9PlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIyMgRGUtcmVmZXJlbmNlIHJlZmVyZW5jZWQgdHlwZTogIyMjXG4gICAgICBpZiAoIGduZC50ZXh0LmlzYSBpc2FfY2xhdXNlIClcbiAgICAgICAgQGlzYV9jbGF1c2VzWyBpZHggXSA9IGRvICggcmVmX3R5cGVuYW1lID0gaXNhX2NsYXVzZSApID0+XG4gICAgICAgICAgdW5sZXNzIFJlZmxlY3QuaGFzIEB0eXBlc3BhY2UsIHJlZl90eXBlbmFtZVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yIFwizql0dF9fXzMgdW5hYmxlIHRvIHJlc29sdmUgI3tycHIgcmVmX3R5cGVuYW1lfSByZWZlcmVuY2VkIGJ5ICN7cnByIEBuYW1lfVwiXG4gICAgICAgICAgcmVmX3R5cGUgPSBAdHlwZXNwYWNlWyByZWZfdHlwZW5hbWUgXVxuICAgICAgICAgIHJldHVybiBuYW1laXQgXCLOqXR0X19fNCAje3JlZl90eXBlLmZxbmFtZX1cIiwgKCB4ICkgLT4gcmVmX3R5cGUuaXNhIHhcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZWxzZSBpZiAoIGduZC5mdW5jdGlvbi5pc2EgaXNhX2NsYXVzZSApXG4gICAgICAgIG51bGxcbiAgICAgICAgIyBpZiBpc2FfY2xhdXNlLm5hbWUgaXMgJydcbiAgICAgICAgIyBuYW1laXQgKCBcIiN7QGZxbmFtZX1bI3tycHIgcmV2YWxleH1dXCIgKSwgaXNhX2NsYXVzZVxuICAgICAgICByZXZhbGV4ID0gcnByIHJ2eF9vZiBpc2FfY2xhdXNlXG4gICAgICAgIG5hbWVpdCBcIs6pdHRfX181ICN7cmV2YWxleH1cIiwgaXNhX2NsYXVzZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBlbHNlIGlmICggZ25kLnR5cGUuaXNhIGlzYV9jbGF1c2UgKVxuICAgICAgICBAaXNhX2NsYXVzZXNbIGlkeCBdID0gZG8gKCB0eXBlID0gaXNhX2NsYXVzZSApID0+XG4gICAgICAgICAgbmFtZWl0IFwizql0dF9fXzYgI3t0eXBlLmZxbmFtZX1cIiwgKCB4ICkgLT4gdHlwZS5pc2EgeFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBlbHNlIGlmICggaXNhX2NsYXVzZT8gKSBhbmQgKCBSZWZsZWN0LmhhcyBpc2FfY2xhdXNlLCAnaXNhJyApIGFuZCAoIGduZC5mdW5jdGlvbi5pc2EgaXNhX2NsYXVzZS5pc2EgKVxuICAgICAgICBAaXNhX2NsYXVzZXNbIGlkeCBdID0gZG8gKCB0eXBlID0gaXNhX2NsYXVzZSApID0+XG4gICAgICAgICAgZnFuYW1lID0gdHlwZS5mcW5hbWUgPyBcIj8uI3t0eXBlLm5hbWUgPyBycHIgcnZ4X29mIHR5cGUuaXNhfVwiXG4gICAgICAgICAgbmFtZWl0IFwizql0dF9fXzcgI3tmcW5hbWV9XCIsICggeCApIC0+IHR5cGUuaXNhIHhcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZWxzZVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IgXCLOqXR0X19fOCB1bmV4cGVjdGVkIHR5cGUgaW4gSVNBIGNsYXVzZTogI3tycHIgaXNhX2NsYXVzZX1cIlxuICAgIHJldHVybiBudWxsXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5kZW1vX3R1cm5pbmdfbGlzdHNfb2ZfZnVuY3Rpb25zX2ludG9fb2JqZWN0c193aXRoX3NlbnNpYmxlX25hbWVzID0gLT5cbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBvbmUgPSBuZXcgVHlwZXNwYWNlICdvbmUnLFxuICAgIGZsb2F0OiAoIHggKSAtPiBOdW1iZXIuaXNGaW5pdGUgeFxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIHRzID0gbmV3IFR5cGVzcGFjZSAndHMnLFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyMjIERlY2xhcmUgYnkgRENMIG9iamVjdCB3aG9zZSBgaXNhYCBwcm9wZXJ0eSBpcyBhIGZ1bmN0aW9uOiAjIyNcbiAgICBmdW5jdGlvbjogeyBpc2E6ICggKCB4ICkgLT4gKCB0eXBlb2YgeCApIGlzICdmdW5jdGlvbicgKSwgfVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyMjIERlY2xhcmUgYnkgJ2ltbWVkaWF0ZScgZnVuY3Rpb246ICMjI1xuICAgIHN0cmluZzogKCB4ICkgLT4gKCB0eXBlb2YgeCApIGlzICdzdHJpbmcnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIyMgRGVjbGFyZSBieSAnaW1tZWRpYXRlJyByZWZlcmVuY2UgdG8gbmFtZSBvZiBleGlzdGluZyB0eXBlOiAjIyNcbiAgICB0ZXh0OiAnc3RyaW5nJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyMjIERlY2xhcmUgYnkgJ2ltbWVkaWF0ZScgbGlzdCBvZiBjbGF1c2VzOiAjIyNcbiAgICBub25lbXB0eV90ZXh0OiBbXG4gICAgICAgICd0ZXh0J1xuICAgICAgICAoIHggKSAtPiB4Lmxlbmd0aCA+IDAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyMjIERlY2xhcmUgYnkgRENMIG9iamVjdCB3aG9zZSBgaXNhYCBwcm9wZXJ0eSBpcyBhIHJlZmVyZW5jZSB0byBuYW1lIG9mIGV4aXN0aW5nIHR5cGU6ICMjI1xuICAgIHNwb3JrOiB7IGlzYTogJ25vbmVtcHR5X3RleHQnLCB9XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIyMgRGVjbGFyZSBieSBEQ0wgb2JqZWN0IHdob3NlIGBpc2FgIHByb3BlcnR5IGlzIGEgbGlzdCBvZiBjbGF1c2VzOiAjIyNcbiAgICBpZDoge1xuICAgICAgaXNhOiBbICd0ZXh0JywgKCAoIHggKSAtPiAvXlthLXpdW2EtejAtOV0qJC8udGVzdCB4ICkgXVxuICAgICAgfVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyMjIERlY2xhcmUgdXNpbmcgYW4gZXhpc3RpbmcgdHlwZTogIyMjXG4gICAgbGVuZ3RoOiBbIG9uZS5mbG9hdCwgKCAoIHggKSAtPiB4ID49IDAgKSwgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyMjIENoYWluIG9mIHJlZmVyZW5jZXM6ICMjI1xuICAgIGZvbzogJ3Nwb3JrJ1xuICAgIGJhcjogJ2ZvbydcbiAgICBiYXo6ICdiYXInXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwb2RfMTogZ25kLnBvZFxuICAgIHBvZF8yOiAoIHggKSAtPiBnbmQucG9kLmlzYSB4XG4gICAgcG9kXzM6IFsgKCAoIHggKSAtPiBnbmQucG9kLmlzYSB4ICksIF1cbiAgICBwb2RfNDogWyBnbmQucG9kLCBdXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIHNob3dfdHlwZSA9ICggdHlwZSApIC0+XG4gICAgIyBlY2hvIGZcIiN7Z29sZCB0eXBlLmZxbmFtZX06PDE1YzsgfCAje3doaXRlIHJwciB0eXBlLmRjbH06PDYwYzsgfCAje2xpbWUgcnByIHR5cGUuaXNhX2NsYXVzZXN9Ojw2MGM7XCJcbiAgICBlY2hvIGZcIiN7Z29sZCB0eXBlLmZxbmFtZX06PDIwYzsgfCAje3doaXRlIHJwciB0eXBlfTo8MjVjOyB8ICN7bGltZSBycHIgdHlwZS5pc2FfY2xhdXNlc306PDYwYztcIlxuICAgIHJldHVybiBudWxsXG4gIGZvciB0eXBlc3BhY2UgaW4gWyBvbmUsIHRzLCBdXG4gICAgZm9yIHR5cGUgZnJvbSB0eXBlc3BhY2VcbiAgICAgIHNob3dfdHlwZSB0eXBlXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGluZm8gJ86pdHRfX185JywgXCJ0cy50ZXh0ICAgICAgICAgICAgICAgICAgXCIsIHRzLnRleHRcbiAgaW5mbyAnzql0dF9fMTAnLCBcInRzLnNwb3JrICAgICAgICAgICAgICAgICBcIiwgdHMuc3BvcmtcbiAgaW5mbygpXG4gIGluZm8gJ86pdHRfXzExJywgXCJ0cy50ZXh0LmlzYSAncG9wJyAgICAgICAgXCIsIHRydXRoIHRzLnRleHQuaXNhICdwb3AnXG4gIGluZm8gJ86pdHRfXzEyJywgXCJ0cy50ZXh0LmlzYSA4NyAgICAgICAgICAgXCIsIHRydXRoIHRzLnRleHQuaXNhIDg3XG4gIGluZm8oKVxuICBpbmZvICfOqXR0X18xMycsIFwidHMuc3BvcmsuaXNhICdwb3AnICAgICAgIFwiLCB0cnV0aCB0cy5zcG9yay5pc2EgJ3BvcCdcbiAgaW5mbyAnzql0dF9fMTQnLCBcInRzLnNwb3JrLmlzYSA4NyAgICAgICAgICBcIiwgdHJ1dGggdHMuc3BvcmsuaXNhIDg3XG4gIGluZm8oKVxuICBpbmZvICfOqXR0X18xNScsIFwidHMuaWQuaXNhICdwb3AnICAgICAgICAgIFwiLCB0cnV0aCB0cy5pZC5pc2EgJ3BvcCdcbiAgaW5mbyAnzql0dF9fMTYnLCBcInRzLmlkLmlzYSAnM3BvcCcgICAgICAgICBcIiwgdHJ1dGggdHMuaWQuaXNhICczcG9wJ1xuICBpbmZvICfOqXR0X18xNycsIFwidHMuaWQuaXNhICdwb3AzJyAgICAgICAgIFwiLCB0cnV0aCB0cy5pZC5pc2EgJ3BvcDMnXG4gIGluZm8oKVxuICBpbmZvICfOqXR0X18xOCcsIFwidHMuc3BvcmsuaXNhICcnICAgICAgICAgIFwiLCB0cnV0aCB0cy5zcG9yay5pc2EgJydcbiAgaW5mbyAnzql0dF9fMTknLCBcInRzLnNwb3JrLmlzYSAnQScgICAgICAgICBcIiwgdHJ1dGggdHMuc3BvcmsuaXNhICdBJ1xuICBpbmZvKClcbiAgaW5mbyAnzql0dF9fMjAnLCBcInRzLmZvby5pc2EgJycgICAgICAgICAgICBcIiwgdHJ1dGggdHMuZm9vLmlzYSAnJ1xuICBpbmZvICfOqXR0X18yMScsIFwidHMuYmFyLmlzYSAnJyAgICAgICAgICAgIFwiLCB0cnV0aCB0cy5iYXIuaXNhICcnXG4gIGluZm8gJ86pdHRfXzIyJywgXCJ0cy5iYXouaXNhICcnICAgICAgICAgICAgXCIsIHRydXRoIHRzLmJhei5pc2EgJydcbiAgaW5mbyAnzql0dF9fMjMnLCBcInRzLmZvby5pc2EgJ0EnICAgICAgICAgICBcIiwgdHJ1dGggdHMuZm9vLmlzYSAnQSdcbiAgaW5mbyAnzql0dF9fMjQnLCBcInRzLmJhci5pc2EgJ0EnICAgICAgICAgICBcIiwgdHJ1dGggdHMuYmFyLmlzYSAnQSdcbiAgaW5mbyAnzql0dF9fMjUnLCBcInRzLmJhei5pc2EgJ0EnICAgICAgICAgICBcIiwgdHJ1dGggdHMuYmF6LmlzYSAnQSdcbiAgaW5mbygpXG4gIGluZm8gJ86pdHRfXzI2JywgXCJ0cy5wb2RfMS5pc2Ege30gICAgICAgICAgXCIsIHRydXRoIHRzLnBvZF8xLmlzYSB7fVxuICBpbmZvICfOqXR0X18yNycsIFwidHMucG9kXzIuaXNhIHt9ICAgICAgICAgIFwiLCB0cnV0aCB0cy5wb2RfMi5pc2Ege31cbiAgaW5mbygpXG4gIGluZm8gJ86pdHRfXzI4JywgXCJ0cy5sZW5ndGguaXNhIHt9ICAgICAgICAgXCIsIHRydXRoIHRzLmxlbmd0aC5pc2Ege31cbiAgaW5mbyAnzql0dF9fMjknLCBcInRzLmxlbmd0aC5pc2EgLTMuNSAgICAgICBcIiwgdHJ1dGggdHMubGVuZ3RoLmlzYSAtMy41XG4gIGluZm8gJ86pdHRfXzMwJywgXCJ0cy5sZW5ndGguaXNhICszLjUgICAgICAgXCIsIHRydXRoIHRzLmxlbmd0aC5pc2EgKzMuNVxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIHJldHVybiBudWxsXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgIyBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IHRydWUsICByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAjICMgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCBAbmZhX3Rhc2tzXG4gIGRlbW9fdHVybmluZ19saXN0c19vZl9mdW5jdGlvbnNfaW50b19vYmplY3RzX3dpdGhfc2Vuc2libGVfbmFtZXMoKVxuXG4jIyNcblxuIyMgVG8gRG9cblxuKiAqKmBb4oCUXWAqKiBjcmVhdGUgYFR5cGVfYmFzZWAgY2xhc3MgdGhhdCB0eXBlcyBhcmUgcmVhbGx5IGRlcml2ZWQgZnJvbSBzbyB0aGV5IGRvbid0IGluaGVyaXQgbWV0aG9kcyBsaWtlXG4gIGBfaXNhbmFtZV9mcm9tX3R5cGVuYW1lKClgIGFuZCBzbyBvblxuKiAqKmBb4oCUXWAqKiBpbXBsZW1lbnQgYGRjbC5iYXNlYFxuXG5cbiMjIyJdfQ==
//# sourceURL=../src/demo-cleartype-types-as-callable-instances.coffee