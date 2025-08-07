(async function() {
  /*

  1.  ```
      class Type
        ...
      type      = new Type type_cfg
      integer   = type.create { name: 'integer',  isa: ( -> ), ..., }
      quantity  = type.create { name: 'quantity', isa: ( -> ), ..., q: ..., u: ..., }

   * usage:
      integer.create 3.141
      ```

  2.  ```
      class Integer extends Type
        isa:     ( x ) -> Number.isInteger x
        create:  ( x ) -> parseInt x, 10
      integer = new Integer()

   * usage:
      integer.create 3.141
      ```

  3.  ```
      class integer extends Type
        @isa:    ( x ) -> Number.isInteger x
        @create: ( x ) -> parseInt x, 10

   * usage:
      integer.create 3.141
      ```

   */
  'use strict';
  var GTNG, GUY, Test, alert, bold, debug, demo_new_returns_instance_of_new_class, echo, f, help, hide, info, inspect, log, nameit, plain, praise, require_cleartype, reverse, rpr, urge, warn, whisper;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-execa'));

  ({rpr, inspect, echo, reverse, bold, log} = GUY.trm);

  ({hide} = GUY.props);

  ({
    props: {nameit}
  } = require('../../../apps/webguy'));

  ({f} = require('../../../apps/effstring'));

  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  //===========================================================================================================
  require_cleartype = function() {
    var H, Type, Typespace, std, type;
    H = require('../../../apps/cleartype/lib/helpers');
    //===========================================================================================================
    Type = class Type {
      //---------------------------------------------------------------------------------------------------------
      constructor(dcl = null) {
        if (dcl != null) {
          throw new Error("Ω___1 not allowed");
        }
        // H.bind_instance_methods @
        return void 0;
      }

      //---------------------------------------------------------------------------------------------------------
      create(typename, dcl) {
        return this.constructor.from_declaration(dcl);
      }

      //---------------------------------------------------------------------------------------------------------
      static from_declaration(typename, dcl) {
        var clasz, create, extension, fields, has_fields, is_extension, isa, per_se_isa, ref;
        if (dcl instanceof this) {
          /* TAINT should wrap b/c of names? */
          return dcl;
        }
        //.......................................................................................................
        fields = {};
        //.......................................................................................................
        /* TAINT condition should use API like 'has_property_but_value_isnt_null()' (?name?) */
        if ((Reflect.has(dcl, 'refines')) && (dcl.refines !== null)) {
          if (!(dcl.refines instanceof this)) {
            /* TAINT use `type_of()` */
            throw new Error(`Ω___2 dcl.refines must be instanceof ${rpr(this)}, got ${rpr(dcl.refines)}`);
          }
          is_extension = true;
          extension = dcl.refines.constructor;
        } else {
          is_extension = false;
          extension = this;
        }
        //.......................................................................................................
        has_fields = (() => {
          var count, ref, subtype, subtype_name;
          if (dcl.fields == null) {
            return false;
          }
          count = 0;
          ref = dcl.fields;
          for (subtype_name in ref) {
            subtype = ref[subtype_name];
            count++;
            fields[subtype_name] = subtype;
          }
          return count !== 0;
        })();
        //.......................................................................................................
        if (dcl.isa != null) {
          switch (true) {
            case dcl.isa instanceof this:
              per_se_isa = (function(isa) {
                return function(x) {
                  return isa(x);
                };
              })(dcl.isa.isa);
              break;
            case (Object.prototype.toString.call(dcl.isa)) === '[object Function]':
              per_se_isa = dcl.isa;
              break;
            default:
              throw new Error('Ω___3');
          }
        } else {
          //.......................................................................................................
          /* TAINT decomplect logic */
          if (has_fields) {
            per_se_isa = function(x) {
              /* TAINT use type_of */
              var field_name, ref, ref1, rejection, subtype;
              if (x == null) {
                return false;
              }
              if ((ref = x.constructor) !== Object && ref !== (void 0)) {
                return false;
              }
/* stad.pod.isa x */              ref1 = dcl.fields;
              for (field_name in ref1) {
                subtype = ref1[field_name];
                if (subtype.isa(x[field_name])) {
                  continue;
                }
                rejection = `expected a ${subtype.name} for field ${rpr(field_name)}, got ${rpr(x[field_name])}`;
                warn('Ω___4', rejection);
                return false;
              }
              return true;
            };
          } else {
            if (!is_extension) {
              throw new Error("Ω___5 type declaration must have one of 'fields', 'isa' or 'refines' properties, got none");
            }
            per_se_isa = function(x) {
              return true;
            };
          }
        }
        //.......................................................................................................
        if (is_extension) {
          /* TAINT review use of dcl.refines here */
          debug('Ωcltt___6', typename, dcl.refines, dcl.refines.isa);
          isa = function(x) {
            return (dcl.refines.isa(x)) && (per_se_isa(x));
          };
        } else {
          isa = per_se_isa;
        }
        //.......................................................................................................
        create = (ref = dcl.create) != null ? ref : function(x) {
          return x;
        };
        // if dcl.create?
        //   create = ( x ) -> dcl.create x
        // else
        //   ### TAINT check whether there are fields ###
        //   fields = {}
        //   for field_name, dsc of Object.getOwnPropertyDescriptors dcl
        //.......................................................................................................
        clasz = (function() {
          var _Class;

          _Class = class extends extension {};

          _Class.prototype.name = typename;

          _Class.prototype.isa = nameit(_Class.isaname_from_typename(typename), isa);

          _Class.prototype.create = create;

          _Class.prototype.fields = fields;

          _Class.prototype.has_fields = has_fields;

          return _Class;

        }).call(this);
        nameit(clasz.classname_from_typename(typename), clasz);
        return new clasz();
      }

      //---------------------------------------------------------------------------------------------------------
      static classname_from_typename(typename = null) {
        var R;
        R = typename != null ? typename : 'anonymous';
        /* TAINT not Unicode-compliant */
        return R[0].toUpperCase() + R.slice(1);
      }

      //---------------------------------------------------------------------------------------------------------
      static isaname_from_typename(typename = null) {
        var R;
        R = typename != null ? typename : 'anonymous';
        return `isa_${typename}`;
      }

      //---------------------------------------------------------------------------------------------------------
      validate(x) {
        if (this.isa(x)) {
          return x;
        }
        throw new Error("Ω___7 Cleartype_validation_error");
      }

      //---------------------------------------------------------------------------------------------------------
      isa(x) {
        return x instanceof this.constructor;
      }

    };
    //===========================================================================================================
    Typespace = class Typespace {
      //---------------------------------------------------------------------------------------------------------
      add_types(dcls) {
        var dcl, typename;
/* TAINT name collisions possible */
        for (typename in dcls) {
          dcl = dcls[typename];
          if (Reflect.has(this, typename)) {
            throw new Error(`Ω___8 name collision: type / property ${rpr(typename)} already declared`);
          }
          this[typename] = Type.from_declaration(typename, dcl);
        }
        return null;
      }

    };
    //===========================================================================================================
    type = new Type();
    std = new Typespace();
    //===========================================================================================================
    std.add_types({
      //.........................................................................................................
      text: {
        isa: function(x) {
          return (Object.prototype.toString.call(x)) === '[object String]';
        },
        create: function(x) {
          var ref;
          return (ref = x != null ? x.toString() : void 0) != null ? ref : '';
        }
      },
      //.........................................................................................................
      float: {
        isa: function(x) {
          return Number.isFinite(x);
        },
        create: function(n = 0) {
          if (typeof x !== "undefined" && x !== null) {
            return parseFloat(x);
          } else {
            return 0;
          }
        }
      },
      //.........................................................................................................
      integer: {
        isa: function(x) {
          return Number.isInteger(x);
        },
        create: function(n = 0) {
          if (typeof x !== "undefined" && x !== null) {
            return parseInt(n, 10);
          } else {
            return 0;
          }
        }
      }
    });
    //-----------------------------------------------------------------------------------------------------------
    std.add_types({
      /*
      nonempty_text:
        isa:      std.text
        refine:   ( x ) -> ( x.length isnt 0 )
        create:   ( x ) -> x?.toString() ? ''
      */
      //.........................................................................................................
      nonempty_text: {
        refines: std.text,
        // isa:      ( x ) -> ( std.text.isa x ) and ( x.length isnt 0 )
        isa: function(x) {
          return x.length !== 0;
        },
        create: function(x) {
          var ref;
          return (ref = x != null ? x.toString() : void 0) != null ? ref : '';
        }
      },
      //.........................................................................................................
      quantity_q: {
        refines: std.float
      }
    });
    // isa: std.float.isa
    //-----------------------------------------------------------------------------------------------------------
    std.add_types({
      //.........................................................................................................
      quantity_u: {
        refines: std.nonempty_text
      }
    });
    //-----------------------------------------------------------------------------------------------------------
    std.add_types({
      //.........................................................................................................
      quantity: {
        create: function(cfg) {
          return {
            q: 0,
            u: 'u',
            ...cfg
          };
        },
        fields: {
          q: std.quantity_q,
          u: std.quantity_u
        }
      }
    });
    //=========================================================================================================
    return {std, Type, Typespace};
  };

  //===========================================================================================================
  this.cleartype_tasks = {
    basics: function() {
      var Type, std, std2, type, typename;
      ({Type, std2, std} = require_cleartype());
      info('Ω___9', std);
      (() => {
        echo();
        info('Ω__10', std.integer);
        info('Ω__11', std.integer.isa(3.141));
        info('Ω__12', std.integer.isa(3));
        info('Ω__13', std.integer.create('3'));
        return info('Ω__14', std.integer.create());
      })();
      (() => {
        var Ωcltt__15, Ωcltt__16, Ωcltt__17, Ωcltt__18, Ωcltt__19, Ωcltt__20, Ωcltt__21;
        this.eq((Ωcltt__15 = function() {
          return std.text instanceof Type;
        }), true);
        this.eq((Ωcltt__16 = function() {
          return std.float instanceof Type;
        }), true);
        this.eq((Ωcltt__17 = function() {
          return std.integer instanceof Type;
        }), true);
        this.eq((Ωcltt__18 = function() {
          return std.nonempty_text instanceof Type;
        }), true);
        this.eq((Ωcltt__19 = function() {
          return std.quantity_q instanceof Type;
        }), true);
        this.eq((Ωcltt__20 = function() {
          return std.quantity_u instanceof Type;
        }), true);
        return this.eq((Ωcltt__21 = function() {
          return std.quantity instanceof Type;
        }), true);
      })();
      (() => {
        var Ωcltt__22, Ωcltt__23, Ωcltt__24, Ωcltt__25, Ωcltt__26, Ωcltt__27, Ωcltt__28;
        this.eq((Ωcltt__22 = function() {
          return std.text.constructor.name;
        }), 'Text');
        this.eq((Ωcltt__23 = function() {
          return std.float.constructor.name;
        }), 'Float');
        this.eq((Ωcltt__24 = function() {
          return std.integer.constructor.name;
        }), 'Integer');
        this.eq((Ωcltt__25 = function() {
          return std.nonempty_text.constructor.name;
        }), 'Nonempty_text');
        this.eq((Ωcltt__26 = function() {
          return std.quantity_q.constructor.name;
        }), 'Quantity_q');
        this.eq((Ωcltt__27 = function() {
          return std.quantity_u.constructor.name;
        }), 'Quantity_u');
        return this.eq((Ωcltt__28 = function() {
          return std.quantity.constructor.name;
        }), 'Quantity');
      })();
      (() => {
        var Ωcltt__29, Ωcltt__30, Ωcltt__31, Ωcltt__32, Ωcltt__33, Ωcltt__34, Ωcltt__35;
        this.eq((Ωcltt__29 = function() {
          return std.text.isa.name;
        }), 'isa_text');
        this.eq((Ωcltt__30 = function() {
          return std.float.isa.name;
        }), 'isa_float');
        this.eq((Ωcltt__31 = function() {
          return std.integer.isa.name;
        }), 'isa_integer');
        this.eq((Ωcltt__32 = function() {
          return std.nonempty_text.isa.name;
        }), 'isa_nonempty_text');
        this.eq((Ωcltt__33 = function() {
          return std.quantity_q.isa.name;
        }), 'isa_quantity_q');
        this.eq((Ωcltt__34 = function() {
          return std.quantity_u.isa.name;
        }), 'isa_quantity_u');
        return this.eq((Ωcltt__35 = function() {
          return std.quantity.isa.name;
        }), 'isa_quantity');
      })();
      (() => {
        var Ωcltt__36, Ωcltt__37, Ωcltt__38, Ωcltt__39, Ωcltt__40, Ωcltt__41, Ωcltt__42;
        this.eq((Ωcltt__36 = function() {
          return std.text.isa(null);
        }), false);
        this.eq((Ωcltt__37 = function() {
          return std.float.isa(null);
        }), false);
        this.eq((Ωcltt__38 = function() {
          return std.integer.isa(null);
        }), false);
        this.eq((Ωcltt__39 = function() {
          return std.nonempty_text.isa(null);
        }), false);
        this.eq((Ωcltt__40 = function() {
          return std.quantity_q.isa(null);
        }), false);
        this.eq((Ωcltt__41 = function() {
          return std.quantity_u.isa(null);
        }), false);
        return this.eq((Ωcltt__42 = function() {
          return std.quantity.isa(null);
        }), false);
      })();
      (() => {
        var Ωcltt__43, Ωcltt__44, Ωcltt__45, Ωcltt__46, Ωcltt__47, Ωcltt__48, Ωcltt__49;
        this.eq((Ωcltt__43 = function() {
          return std.text.isa(2e308);
        }), false);
        this.eq((Ωcltt__44 = function() {
          return std.float.isa(2e308);
        }), false);
        this.eq((Ωcltt__45 = function() {
          return std.integer.isa(2e308);
        }), false);
        this.eq((Ωcltt__46 = function() {
          return std.nonempty_text.isa(2e308);
        }), false);
        this.eq((Ωcltt__47 = function() {
          return std.quantity_q.isa(2e308);
        }), false);
        this.eq((Ωcltt__48 = function() {
          return std.quantity_u.isa(2e308);
        }), false);
        return this.eq((Ωcltt__49 = function() {
          return std.quantity.isa(2e308);
        }), false);
      })();
      (() => {
        var Ωcltt__50, Ωcltt__51, Ωcltt__52, Ωcltt__53, Ωcltt__54, Ωcltt__55, Ωcltt__56;
        this.eq((Ωcltt__50 = function() {
          return std.text.isa('');
        }), true);
        this.eq((Ωcltt__51 = function() {
          return std.float.isa(7.56);
        }), true);
        this.eq((Ωcltt__52 = function() {
          return std.integer.isa(9);
        }), true);
        this.eq((Ωcltt__53 = function() {
          return std.nonempty_text.isa('www');
        }), true);
        this.eq((Ωcltt__54 = function() {
          return std.quantity_q.isa(1.5e32);
        }), true);
        this.eq((Ωcltt__55 = function() {
          return std.quantity_u.isa('km');
        }), true);
        return this.eq((Ωcltt__56 = function() {
          return std.quantity.isa({
            q: 1.5e32,
            u: 'km'
          });
        }), true);
      })();
      (() => {
        var Ωcltt__58, Ωcltt__59, Ωcltt__60, Ωcltt__61, Ωcltt__62, Ωcltt__63;
        echo();
        info('Ω__57', std.nonempty_text);
        this.eq((Ωcltt__58 = function() {
          return std.nonempty_text.isa(3.141);
        }), false);
        this.eq((Ωcltt__59 = function() {
          return std.nonempty_text.isa('');
        }), false);
        this.eq((Ωcltt__60 = function() {
          return std.nonempty_text.isa('d');
        }), true);
        this.eq((Ωcltt__61 = function() {
          return std.nonempty_text.create();
        }), '');
        this.eq((Ωcltt__62 = function() {
          return std.nonempty_text.create(false);
        }), 'false');
        return this.eq((Ωcltt__63 = function() {
          return std.nonempty_text.create('d');
        }), 'd');
      })();
      (() => {
        var Ωcltt__65, Ωcltt__66;
        echo();
        info('Ω__64', std.quantity);
        this.eq((Ωcltt__65 = function() {
          return std.quantity.create();
        }), {
          q: 0,
          u: 'u'
        });
        this.eq((Ωcltt__66 = function() {
          return std.quantity.create({
            q: 4.3,
            u: 's'
          });
        }), {
          q: 4.3,
          u: 's'
        });
        info('Ω__67', std.nonempty_text.create('g'));
        info('Ω__68', std.quantity_u.create('g'));
        return info('Ω__69', std.quantity.fields.u.create('g'));
      })();
      (() => {
        var Ωcltt__78, Ωcltt__79, Ωcltt__80, Ωcltt__81, Ωcltt__87, Ωcltt__88;
        echo();
        help('Ω__70', std.quantity);
        help('Ω__71', std.quantity.constructor);
        help('Ω__72', std.quantity.constructor.name);
        help('Ω__73', std.quantity.isa);
        help('Ω__74', std.quantity.isa({}));
        help('Ω__75', std.quantity.isa({
          u: 7,
          q: 3
        }));
        help('Ω__76', std.quantity.isa({
          u: '7',
          q: 3
        }));
        help('Ω__77', std.quantity.isa({
          u: '7',
          q: 2e308
        }));
        this.eq((Ωcltt__78 = function() {
          return std.quantity.name;
        }), 'quantity');
        this.eq((Ωcltt__79 = function() {
          return std.integer.name;
        }), 'integer');
        this.eq((Ωcltt__80 = function() {
          return std.quantity_q.name;
        }), 'quantity_q');
        this.eq((Ωcltt__81 = function() {
          return std.quantity_u.name;
        }), 'quantity_u');
        echo();
        help('Ω__82', std.text.isa);
        help('Ω__83', std.text.isa('abc'));
        help('Ω__84', std.text.isa(Array.from('abc')));
        echo();
        help('Ω__85', std.nonempty_text);
        help('Ω__86', std.nonempty_text.isa);
        this.eq((Ωcltt__87 = function() {
          return std.nonempty_text.isa('abc');
        }), true);
        this.eq((Ωcltt__88 = function() {
          return std.nonempty_text.isa(Array.from('abc'));
        }), false);
        return null;
      })();
      (() => {
        var type, typename, Ωcltt__89;
        echo();
        for (typename in std) {
          type = std[typename];
          this.eq((Ωcltt__89 = function() {
            return type.isa.name;
          }), `isa_${typename}`);
        }
        return null;
      })();
//.......................................................................................................
      for (typename in std) {
        type = std[typename];
        urge('Ω__90', f`${typename}:<20c; ${type.constructor.name}:<20c; ${type.isa.name}:<20c;`);
      }
      return null;
    }
  };

  //===========================================================================================================
  demo_new_returns_instance_of_new_class = function() {
    var A, POD, a, b, d;
    //=========================================================================================================
    A = class A {
      // #-------------------------------------------------------------------------------------------------------
      // constructor: ( name ) ->
      //   @name = "A*#{name}*"
      //   return @create name
      get_names_A() {
        return [this.name, this.constructor.name];
      }

      //-------------------------------------------------------------------------------------------------------
      create(name) {
        var clasz;
        clasz = class extends this.constructor {
          constructor() {
            super();
            this.name = name;
            return void 0;
          }

          get_names_B() {
            return [this.name, clasz.name, this.constructor.name];
          }

        };
        nameit(name, clasz);
        return new clasz();
      }

    };
    //=========================================================================================================
    a = new A();
    debug('Ωcltt__91', A);
    debug('Ωcltt__92', a);
    debug('Ωcltt__93', b = a.create('b'));
    debug('Ωcltt__94', b.get_names_A());
    debug('Ωcltt__95', b.get_names_B());
    /*
    d = new D(); <=> ( d instanceof D ) ^ ( d.constructor is D )
    */
    //=========================================================================================================
    POD = class POD {
      constructor(cfg) {
        var R;
        R = Object.create(null);
        Object.assign(R, cfg);
        return R;
      }

      isa() {}

    };
    d = new POD({
      x: 76
    });
    debug('Ωcltt__96', d);
    debug('Ωcltt__97', d.constructor);
    debug('Ωcltt__98', d.isa);
    //=========================================================================================================
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var guytest_cfg;
      guytest_cfg = {
        throw_on_error: true,
        show_passes: false,
        report_checks: false
      };
      (new Test(guytest_cfg)).test(this.cleartype_tasks);
      return demo_new_returns_instance_of_new_class();
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tY2xlYXJ0eXBlLXR5cGVzLWFzLWNsYXNzZXMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDRztFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFHSDtBQUhHLE1BQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsc0NBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsTUFBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsaUJBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQTs7O0VBTUgsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixZQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsT0FIRixFQUlFLElBSkYsRUFLRSxHQUxGLENBQUEsR0FLNEIsR0FBRyxDQUFDLEdBTGhDOztFQU1BLENBQUEsQ0FBRSxJQUFGLENBQUEsR0FBNEIsR0FBRyxDQUFDLEtBQWhDOztFQUNBLENBQUE7SUFBRSxLQUFBLEVBQU8sQ0FDTCxNQURLO0VBQVQsQ0FBQSxHQUM0QixPQUFBLENBQVEsc0JBQVIsQ0FENUI7O0VBRUEsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUI7O0VBQ0EsSUFBQSxHQUE0QixPQUFBLENBQVEsMkJB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QWMsSUFBZDtRQUNKLE1BQU0sQ0FBQyxNQUFQLENBQWMsQ0FBZCxFQUFpQixHQUFqQjtBQUNBLGVBQU87TUFISTs7TUFJYixHQUFLLENBQUEsQ0FBQSxFQUFBOztJQUxQO0lBTUEsQ0FBQSxHQUFJLElBQUksR0FBSixDQUFRO01BQUUsQ0FBQSxFQUFHO0lBQUwsQ0FBUjtJQUNKLEtBQUEsQ0FBTSxXQUFOLEVBQW1CLENBQW5CO0lBQ0EsS0FBQSxDQUFNLFdBQU4sRUFBbUIsQ0FBQyxDQUFDLFdBQXJCO0lBQ0EsS0FBQSxDQUFNLFdBQU4sRUFBbUIsQ0FBQyxDQUFDLEdBQXJCLEVBbkNGOztBQXFDRSxXQUFPO0VBdENnQyxFQWpVdEM7OztFQTBXSCxJQUFHLE1BQUEsS0FBVSxPQUFPLENBQUMsSUFBckI7SUFBK0IsTUFBUyxDQUFBLENBQUEsQ0FBQSxHQUFBO0FBQ3hDLFVBQUE7TUFBRSxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLElBQWxCO1FBQXdCLFdBQUEsRUFBYSxLQUFyQztRQUE0QyxhQUFBLEVBQWU7TUFBM0Q7TUFDZCxDQUFFLElBQUksSUFBSixDQUFTLFdBQVQsQ0FBRixDQUF3QixDQUFDLElBQXpCLENBQThCLElBQUMsQ0FBQSxlQUEvQjthQUNBLHNDQUFBLENBQUE7SUFIc0MsQ0FBQSxJQUF4Qzs7QUExV0ciLCJzb3VyY2VzQ29udGVudCI6WyJcblxuIyMjXG5cbjEuICBgYGBcbiAgICBjbGFzcyBUeXBlXG4gICAgICAuLi5cbiAgICB0eXBlICAgICAgPSBuZXcgVHlwZSB0eXBlX2NmZ1xuICAgIGludGVnZXIgICA9IHR5cGUuY3JlYXRlIHsgbmFtZTogJ2ludGVnZXInLCAgaXNhOiAoIC0+ICksIC4uLiwgfVxuICAgIHF1YW50aXR5ICA9IHR5cGUuY3JlYXRlIHsgbmFtZTogJ3F1YW50aXR5JywgaXNhOiAoIC0+ICksIC4uLiwgcTogLi4uLCB1OiAuLi4sIH1cblxuICAgICMgdXNhZ2U6XG4gICAgaW50ZWdlci5jcmVhdGUgMy4xNDFcbiAgICBgYGBcblxuMi4gIGBgYFxuICAgIGNsYXNzIEludGVnZXIgZXh0ZW5kcyBUeXBlXG4gICAgICBpc2E6ICAgICAoIHggKSAtPiBOdW1iZXIuaXNJbnRlZ2VyIHhcbiAgICAgIGNyZWF0ZTogICggeCApIC0+IHBhcnNlSW50IHgsIDEwXG4gICAgaW50ZWdlciA9IG5ldyBJbnRlZ2VyKClcblxuICAgICMgdXNhZ2U6XG4gICAgaW50ZWdlci5jcmVhdGUgMy4xNDFcbiAgICBgYGBcblxuMy4gIGBgYFxuICAgIGNsYXNzIGludGVnZXIgZXh0ZW5kcyBUeXBlXG4gICAgICBAaXNhOiAgICAoIHggKSAtPiBOdW1iZXIuaXNJbnRlZ2VyIHhcbiAgICAgIEBjcmVhdGU6ICggeCApIC0+IHBhcnNlSW50IHgsIDEwXG5cbiAgICAjIHVzYWdlOlxuICAgIGludGVnZXIuY3JlYXRlIDMuMTQxXG4gICAgYGBgXG5cbiMjI1xuXG5cbid1c2Ugc3RyaWN0J1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnZGVtby1leGVjYSdcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICByZXZlcnNlXG4gIGJvbGRcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG57IGhpZGUgfSAgICAgICAgICAgICAgICAgID0gR1VZLnByb3BzXG57IHByb3BzOiB7XG4gICAgbmFtZWl0IH0gfSAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy93ZWJndXknXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5yZXF1aXJlX2NsZWFydHlwZSA9IC0+XG4gIEggPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2NsZWFydHlwZS9saWIvaGVscGVycydcblxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgY2xhc3MgVHlwZVxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGNvbnN0cnVjdG9yOiAoIGRjbCA9IG51bGwgKSAtPlxuICAgICAgdGhyb3cgbmV3IEVycm9yIFwizqlfX18xIG5vdCBhbGxvd2VkXCIgaWYgZGNsP1xuICAgICAgIyBILmJpbmRfaW5zdGFuY2VfbWV0aG9kcyBAXG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgY3JlYXRlOiAoIHR5cGVuYW1lLCBkY2wgKSAtPiBAY29uc3RydWN0b3IuZnJvbV9kZWNsYXJhdGlvbiBkY2xcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBAZnJvbV9kZWNsYXJhdGlvbjogKCB0eXBlbmFtZSwgZGNsICkgLT5cbiAgICAgICMjIyBUQUlOVCBzaG91bGQgd3JhcCBiL2Mgb2YgbmFtZXM/ICMjI1xuICAgICAgcmV0dXJuIGRjbCBpZiBkY2wgaW5zdGFuY2VvZiBAXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZmllbGRzID0ge31cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIyMgVEFJTlQgY29uZGl0aW9uIHNob3VsZCB1c2UgQVBJIGxpa2UgJ2hhc19wcm9wZXJ0eV9idXRfdmFsdWVfaXNudF9udWxsKCknICg/bmFtZT8pICMjI1xuICAgICAgaWYgKCBSZWZsZWN0LmhhcyBkY2wsICdyZWZpbmVzJyApIGFuZCAoIGRjbC5yZWZpbmVzIGlzbnQgbnVsbCApXG4gICAgICAgIHVubGVzcyAoIGRjbC5yZWZpbmVzIGluc3RhbmNlb2YgQCApXG4gICAgICAgICAgIyMjIFRBSU5UIHVzZSBgdHlwZV9vZigpYCAjIyNcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IgXCLOqV9fXzIgZGNsLnJlZmluZXMgbXVzdCBiZSBpbnN0YW5jZW9mICN7cnByIEB9LCBnb3QgI3tycHIgZGNsLnJlZmluZXN9XCJcbiAgICAgICAgaXNfZXh0ZW5zaW9uICA9IHRydWVcbiAgICAgICAgZXh0ZW5zaW9uICAgICA9IGRjbC5yZWZpbmVzLmNvbnN0cnVjdG9yXG4gICAgICBlbHNlXG4gICAgICAgIGlzX2V4dGVuc2lvbiAgPSBmYWxzZVxuICAgICAgICBleHRlbnNpb24gICAgID0gQFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGhhc19maWVsZHMgPSBkbyA9PlxuICAgICAgICByZXR1cm4gZmFsc2UgdW5sZXNzIGRjbC5maWVsZHM/XG4gICAgICAgIGNvdW50ID0gMFxuICAgICAgICBmb3Igc3VidHlwZV9uYW1lLCBzdWJ0eXBlIG9mIGRjbC5maWVsZHNcbiAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgZmllbGRzWyBzdWJ0eXBlX25hbWUgXSA9IHN1YnR5cGVcbiAgICAgICAgcmV0dXJuIGNvdW50IGlzbnQgMFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGlmIGRjbC5pc2E/XG4gICAgICAgIHN3aXRjaCB0cnVlXG4gICAgICAgICAgd2hlbiBkY2wuaXNhIGluc3RhbmNlb2YgQFxuICAgICAgICAgICAgcGVyX3NlX2lzYSA9IGRvICggaXNhID0gZGNsLmlzYS5pc2EgKSAtPiAoIHggKSAtPiBpc2EgeFxuICAgICAgICAgIHdoZW4gKCBPYmplY3Q6OnRvU3RyaW5nLmNhbGwgZGNsLmlzYSApIGlzICdbb2JqZWN0IEZ1bmN0aW9uXSdcbiAgICAgICAgICAgIHBlcl9zZV9pc2EgPSBkY2wuaXNhXG4gICAgICAgICAgZWxzZSB0aHJvdyBuZXcgRXJyb3IgJ86pX19fMydcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIyMgVEFJTlQgZGVjb21wbGVjdCBsb2dpYyAjIyNcbiAgICAgIGVsc2VcbiAgICAgICAgaWYgaGFzX2ZpZWxkc1xuICAgICAgICAgIHBlcl9zZV9pc2EgPSAoIHggKSAtPlxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlIHVubGVzcyB4P1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlIHVubGVzcyB4LmNvbnN0cnVjdG9yIGluIFsgT2JqZWN0LCB1bmRlZmluZWQsIF0gIyMjIHN0YWQucG9kLmlzYSB4ICMjI1xuICAgICAgICAgICAgZm9yIGZpZWxkX25hbWUsIHN1YnR5cGUgb2YgZGNsLmZpZWxkc1xuICAgICAgICAgICAgICBjb250aW51ZSBpZiBzdWJ0eXBlLmlzYSB4WyBmaWVsZF9uYW1lIF1cbiAgICAgICAgICAgICAgIyMjIFRBSU5UIHVzZSB0eXBlX29mICMjI1xuICAgICAgICAgICAgICByZWplY3Rpb24gPSBcImV4cGVjdGVkIGEgI3tzdWJ0eXBlLm5hbWV9IGZvciBmaWVsZCAje3JwciBmaWVsZF9uYW1lfSwgZ290ICN7cnByIHhbIGZpZWxkX25hbWUgXX1cIlxuICAgICAgICAgICAgICB3YXJuICfOqV9fXzQnLCByZWplY3Rpb25cbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICBlbHNlXG4gICAgICAgICAgdW5sZXNzIGlzX2V4dGVuc2lvblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yIFwizqlfX181IHR5cGUgZGVjbGFyYXRpb24gbXVzdCBoYXZlIG9uZSBvZiAnZmllbGRzJywgJ2lzYScgb3IgJ3JlZmluZXMnIHByb3BlcnRpZXMsIGdvdCBub25lXCJcbiAgICAgICAgICBwZXJfc2VfaXNhID0gKCB4ICkgLT4gdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGlmIGlzX2V4dGVuc2lvblxuICAgICAgICAjIyMgVEFJTlQgcmV2aWV3IHVzZSBvZiBkY2wucmVmaW5lcyBoZXJlICMjI1xuICAgICAgICBkZWJ1ZyAnzqljbHR0X19fNicsIHR5cGVuYW1lLCBkY2wucmVmaW5lcywgZGNsLnJlZmluZXMuaXNhXG4gICAgICAgIGlzYSA9ICggeCApIC0+ICggZGNsLnJlZmluZXMuaXNhIHggKSBhbmQgKCBwZXJfc2VfaXNhIHggKVxuICAgICAgZWxzZVxuICAgICAgICBpc2EgPSBwZXJfc2VfaXNhXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgY3JlYXRlID0gZGNsLmNyZWF0ZSA/ICggeCApIC0+IHhcbiAgICAgICMgaWYgZGNsLmNyZWF0ZT9cbiAgICAgICMgICBjcmVhdGUgPSAoIHggKSAtPiBkY2wuY3JlYXRlIHhcbiAgICAgICMgZWxzZVxuICAgICAgIyAgICMjIyBUQUlOVCBjaGVjayB3aGV0aGVyIHRoZXJlIGFyZSBmaWVsZHMgIyMjXG4gICAgICAjICAgZmllbGRzID0ge31cbiAgICAgICMgICBmb3IgZmllbGRfbmFtZSwgZHNjIG9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIGRjbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGNsYXN6ID0gY2xhc3MgZXh0ZW5kcyBleHRlbnNpb25cbiAgICAgICAgbmFtZTogICAgICAgICB0eXBlbmFtZVxuICAgICAgICBpc2E6ICAgICAgICAgIG5hbWVpdCAoIEBpc2FuYW1lX2Zyb21fdHlwZW5hbWUgdHlwZW5hbWUgKSwgaXNhXG4gICAgICAgIGNyZWF0ZTogICAgICAgY3JlYXRlXG4gICAgICAgIGZpZWxkczogICAgICAgZmllbGRzXG4gICAgICAgIGhhc19maWVsZHM6ICAgaGFzX2ZpZWxkc1xuICAgICAgbmFtZWl0ICggY2xhc3ouY2xhc3NuYW1lX2Zyb21fdHlwZW5hbWUgdHlwZW5hbWUgKSwgY2xhc3pcbiAgICAgIHJldHVybiBuZXcgY2xhc3ooKVxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIEBjbGFzc25hbWVfZnJvbV90eXBlbmFtZSA9ICggdHlwZW5hbWUgPSBudWxsICkgLT5cbiAgICAgIFIgPSAoIHR5cGVuYW1lID8gJ2Fub255bW91cycgKVxuICAgICAgIyMjIFRBSU5UIG5vdCBVbmljb2RlLWNvbXBsaWFudCAjIyNcbiAgICAgIHJldHVybiAoIFJbIDAgXSApLnRvVXBwZXJDYXNlKCkgKyBSWyAxIC4uIF1cblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBAaXNhbmFtZV9mcm9tX3R5cGVuYW1lID0gKCB0eXBlbmFtZSA9IG51bGwgKSAtPlxuICAgICAgUiA9ICggdHlwZW5hbWUgPyAnYW5vbnltb3VzJyApXG4gICAgICByZXR1cm4gXCJpc2FfI3t0eXBlbmFtZX1cIlxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHZhbGlkYXRlOiAoIHggKSAtPlxuICAgICAgcmV0dXJuIHggaWYgQGlzYSB4XG4gICAgICB0aHJvdyBuZXcgRXJyb3IgXCLOqV9fXzcgQ2xlYXJ0eXBlX3ZhbGlkYXRpb25fZXJyb3JcIlxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGlzYTogKCB4ICkgLT4geCBpbnN0YW5jZW9mIEBjb25zdHJ1Y3RvclxuXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBjbGFzcyBUeXBlc3BhY2VcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBhZGRfdHlwZXM6ICggZGNscyApIC0+XG4gICAgICAjIyMgVEFJTlQgbmFtZSBjb2xsaXNpb25zIHBvc3NpYmxlICMjI1xuICAgICAgZm9yIHR5cGVuYW1lLCBkY2wgb2YgZGNsc1xuICAgICAgICBpZiBSZWZsZWN0LmhhcyBALCB0eXBlbmFtZVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvciBcIs6pX19fOCBuYW1lIGNvbGxpc2lvbjogdHlwZSAvIHByb3BlcnR5ICN7cnByIHR5cGVuYW1lfSBhbHJlYWR5IGRlY2xhcmVkXCJcbiAgICAgICAgQFsgdHlwZW5hbWUgXSA9IFR5cGUuZnJvbV9kZWNsYXJhdGlvbiB0eXBlbmFtZSwgZGNsXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICB0eXBlICA9IG5ldyBUeXBlKClcbiAgc3RkICAgPSBuZXcgVHlwZXNwYWNlKClcblxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgc3RkLmFkZF90eXBlc1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICB0ZXh0OlxuICAgICAgaXNhOiAgICAgICggeCApIC0+ICggT2JqZWN0Ojp0b1N0cmluZy5jYWxsIHggKSBpcyAnW29iamVjdCBTdHJpbmddJ1xuICAgICAgY3JlYXRlOiAgICggeCApIC0+IHg/LnRvU3RyaW5nKCkgPyAnJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmbG9hdDpcbiAgICAgIGlzYTogICAgICAoIHggKSAtPiBOdW1iZXIuaXNGaW5pdGUgeFxuICAgICAgY3JlYXRlOiAgICggbiA9IDAgKSAtPiBpZiB4PyB0aGVuICggcGFyc2VGbG9hdCB4ICkgZWxzZSAwXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGludGVnZXI6XG4gICAgICBpc2E6ICAgICAgKCB4ICkgLT4gTnVtYmVyLmlzSW50ZWdlciB4XG4gICAgICBjcmVhdGU6ICAgKCBuID0gMCApIC0+IGlmIHg/IHRoZW4gKCBwYXJzZUludCBuLCAxMCApIGVsc2UgMFxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc3RkLmFkZF90eXBlc1xuICAgICMjI1xuICAgIG5vbmVtcHR5X3RleHQ6XG4gICAgICBpc2E6ICAgICAgc3RkLnRleHRcbiAgICAgIHJlZmluZTogICAoIHggKSAtPiAoIHgubGVuZ3RoIGlzbnQgMCApXG4gICAgICBjcmVhdGU6ICAgKCB4ICkgLT4geD8udG9TdHJpbmcoKSA/ICcnXG4gICAgIyMjXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIG5vbmVtcHR5X3RleHQ6XG4gICAgICByZWZpbmVzOiAgc3RkLnRleHRcbiAgICAgICMgaXNhOiAgICAgICggeCApIC0+ICggc3RkLnRleHQuaXNhIHggKSBhbmQgKCB4Lmxlbmd0aCBpc250IDAgKVxuICAgICAgaXNhOiAgICAgICggeCApIC0+ICggeC5sZW5ndGggaXNudCAwIClcbiAgICAgIGNyZWF0ZTogICAoIHggKSAtPiB4Py50b1N0cmluZygpID8gJydcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcXVhbnRpdHlfcTpcbiAgICAgIHJlZmluZXM6ICBzdGQuZmxvYXRcbiAgICAgICMgaXNhOiBzdGQuZmxvYXQuaXNhXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzdGQuYWRkX3R5cGVzXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHF1YW50aXR5X3U6XG4gICAgICByZWZpbmVzOiAgc3RkLm5vbmVtcHR5X3RleHRcbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHN0ZC5hZGRfdHlwZXNcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcXVhbnRpdHk6XG4gICAgICBjcmVhdGU6ICAgKCBjZmcgKSAtPiB7IHE6IDAsIHU6ICd1JywgY2ZnLi4uLCB9XG4gICAgICBmaWVsZHM6XG4gICAgICAgIHE6ICAgICAgc3RkLnF1YW50aXR5X3FcbiAgICAgICAgdTogICAgICBzdGQucXVhbnRpdHlfdVxuXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgcmV0dXJuIHsgc3RkLCBUeXBlLCBUeXBlc3BhY2UsIH1cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AY2xlYXJ0eXBlX3Rhc2tzID1cbiAgYmFzaWNzOiAtPlxuICAgIHsgVHlwZVxuICAgICAgc3RkMlxuICAgICAgc3RkICAgICAgICAgICAgIH0gPSByZXF1aXJlX2NsZWFydHlwZSgpXG4gICAgaW5mbyAnzqlfX185Jywgc3RkXG4gICAgZG8gPT5cbiAgICAgIGVjaG8oKVxuICAgICAgaW5mbyAnzqlfXzEwJywgc3RkLmludGVnZXJcbiAgICAgIGluZm8gJ86pX18xMScsIHN0ZC5pbnRlZ2VyLmlzYSAzLjE0MVxuICAgICAgaW5mbyAnzqlfXzEyJywgc3RkLmludGVnZXIuaXNhIDNcbiAgICAgIGluZm8gJ86pX18xMycsIHN0ZC5pbnRlZ2VyLmNyZWF0ZSAnMydcbiAgICAgIGluZm8gJ86pX18xNCcsIHN0ZC5pbnRlZ2VyLmNyZWF0ZSgpXG4gICAgZG8gPT5cbiAgICAgIEBlcSAoIM6pY2x0dF9fMTUgPSAtPiBzdGQudGV4dCAgICAgICAgICAgaW5zdGFuY2VvZiBUeXBlICksIHRydWVcbiAgICAgIEBlcSAoIM6pY2x0dF9fMTYgPSAtPiBzdGQuZmxvYXQgICAgICAgICAgaW5zdGFuY2VvZiBUeXBlICksIHRydWVcbiAgICAgIEBlcSAoIM6pY2x0dF9fMTcgPSAtPiBzdGQuaW50ZWdlciAgICAgICAgaW5zdGFuY2VvZiBUeXBlICksIHRydWVcbiAgICAgIEBlcSAoIM6pY2x0dF9fMTggPSAtPiBzdGQubm9uZW1wdHlfdGV4dCAgaW5zdGFuY2VvZiBUeXBlICksIHRydWVcbiAgICAgIEBlcSAoIM6pY2x0dF9fMTkgPSAtPiBzdGQucXVhbnRpdHlfcSAgICAgaW5zdGFuY2VvZiBUeXBlICksIHRydWVcbiAgICAgIEBlcSAoIM6pY2x0dF9fMjAgPSAtPiBzdGQucXVhbnRpdHlfdSAgICAgaW5zdGFuY2VvZiBUeXBlICksIHRydWVcbiAgICAgIEBlcSAoIM6pY2x0dF9fMjEgPSAtPiBzdGQucXVhbnRpdHkgICAgICAgaW5zdGFuY2VvZiBUeXBlICksIHRydWVcbiAgICBkbyA9PlxuICAgICAgQGVxICggzqljbHR0X18yMiA9IC0+IHN0ZC50ZXh0LmNvbnN0cnVjdG9yLm5hbWUgICAgICAgICAgKSwgJ1RleHQnXG4gICAgICBAZXEgKCDOqWNsdHRfXzIzID0gLT4gc3RkLmZsb2F0LmNvbnN0cnVjdG9yLm5hbWUgICAgICAgICApLCAnRmxvYXQnXG4gICAgICBAZXEgKCDOqWNsdHRfXzI0ID0gLT4gc3RkLmludGVnZXIuY29uc3RydWN0b3IubmFtZSAgICAgICApLCAnSW50ZWdlcidcbiAgICAgIEBlcSAoIM6pY2x0dF9fMjUgPSAtPiBzdGQubm9uZW1wdHlfdGV4dC5jb25zdHJ1Y3Rvci5uYW1lICksICdOb25lbXB0eV90ZXh0J1xuICAgICAgQGVxICggzqljbHR0X18yNiA9IC0+IHN0ZC5xdWFudGl0eV9xLmNvbnN0cnVjdG9yLm5hbWUgICAgKSwgJ1F1YW50aXR5X3EnXG4gICAgICBAZXEgKCDOqWNsdHRfXzI3ID0gLT4gc3RkLnF1YW50aXR5X3UuY29uc3RydWN0b3IubmFtZSAgICApLCAnUXVhbnRpdHlfdSdcbiAgICAgIEBlcSAoIM6pY2x0dF9fMjggPSAtPiBzdGQucXVhbnRpdHkuY29uc3RydWN0b3IubmFtZSAgICAgICksICdRdWFudGl0eSdcbiAgICBkbyA9PlxuICAgICAgQGVxICggzqljbHR0X18yOSA9IC0+IHN0ZC50ZXh0LmlzYS5uYW1lICAgICAgICAgICAgICAgICAgKSwgJ2lzYV90ZXh0J1xuICAgICAgQGVxICggzqljbHR0X18zMCA9IC0+IHN0ZC5mbG9hdC5pc2EubmFtZSAgICAgICAgICAgICAgICAgKSwgJ2lzYV9mbG9hdCdcbiAgICAgIEBlcSAoIM6pY2x0dF9fMzEgPSAtPiBzdGQuaW50ZWdlci5pc2EubmFtZSAgICAgICAgICAgICAgICksICdpc2FfaW50ZWdlcidcbiAgICAgIEBlcSAoIM6pY2x0dF9fMzIgPSAtPiBzdGQubm9uZW1wdHlfdGV4dC5pc2EubmFtZSAgICAgICAgICksICdpc2Ffbm9uZW1wdHlfdGV4dCdcbiAgICAgIEBlcSAoIM6pY2x0dF9fMzMgPSAtPiBzdGQucXVhbnRpdHlfcS5pc2EubmFtZSAgICAgICAgICAgICksICdpc2FfcXVhbnRpdHlfcSdcbiAgICAgIEBlcSAoIM6pY2x0dF9fMzQgPSAtPiBzdGQucXVhbnRpdHlfdS5pc2EubmFtZSAgICAgICAgICAgICksICdpc2FfcXVhbnRpdHlfdSdcbiAgICAgIEBlcSAoIM6pY2x0dF9fMzUgPSAtPiBzdGQucXVhbnRpdHkuaXNhLm5hbWUgICAgICAgICAgICAgICksICdpc2FfcXVhbnRpdHknXG4gICAgZG8gPT5cbiAgICAgIEBlcSAoIM6pY2x0dF9fMzYgPSAtPiBzdGQudGV4dC5pc2EgICAgICAgICAgICAgICAgICBudWxsICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWNsdHRfXzM3ID0gLT4gc3RkLmZsb2F0LmlzYSAgICAgICAgICAgICAgICAgbnVsbCApLCBmYWxzZVxuICAgICAgQGVxICggzqljbHR0X18zOCA9IC0+IHN0ZC5pbnRlZ2VyLmlzYSAgICAgICAgICAgICAgIG51bGwgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6pY2x0dF9fMzkgPSAtPiBzdGQubm9uZW1wdHlfdGV4dC5pc2EgICAgICAgICBudWxsICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWNsdHRfXzQwID0gLT4gc3RkLnF1YW50aXR5X3EuaXNhICAgICAgICAgICAgbnVsbCApLCBmYWxzZVxuICAgICAgQGVxICggzqljbHR0X180MSA9IC0+IHN0ZC5xdWFudGl0eV91LmlzYSAgICAgICAgICAgIG51bGwgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6pY2x0dF9fNDIgPSAtPiBzdGQucXVhbnRpdHkuaXNhICAgICAgICAgICAgICBudWxsICksIGZhbHNlXG4gICAgZG8gPT5cbiAgICAgIEBlcSAoIM6pY2x0dF9fNDMgPSAtPiBzdGQudGV4dC5pc2EgICAgICAgICAgICAgICAgICBJbmZpbml0eSApLCBmYWxzZVxuICAgICAgQGVxICggzqljbHR0X180NCA9IC0+IHN0ZC5mbG9hdC5pc2EgICAgICAgICAgICAgICAgIEluZmluaXR5ICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWNsdHRfXzQ1ID0gLT4gc3RkLmludGVnZXIuaXNhICAgICAgICAgICAgICAgSW5maW5pdHkgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6pY2x0dF9fNDYgPSAtPiBzdGQubm9uZW1wdHlfdGV4dC5pc2EgICAgICAgICBJbmZpbml0eSApLCBmYWxzZVxuICAgICAgQGVxICggzqljbHR0X180NyA9IC0+IHN0ZC5xdWFudGl0eV9xLmlzYSAgICAgICAgICAgIEluZmluaXR5ICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWNsdHRfXzQ4ID0gLT4gc3RkLnF1YW50aXR5X3UuaXNhICAgICAgICAgICAgSW5maW5pdHkgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6pY2x0dF9fNDkgPSAtPiBzdGQucXVhbnRpdHkuaXNhICAgICAgICAgICAgICBJbmZpbml0eSApLCBmYWxzZVxuICAgIGRvID0+XG4gICAgICBAZXEgKCDOqWNsdHRfXzUwID0gLT4gc3RkLnRleHQuaXNhICAgICAgICAgICAnJyAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pY2x0dF9fNTEgPSAtPiBzdGQuZmxvYXQuaXNhICAgICAgICAgIDcuNTYgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqljbHR0X181MiA9IC0+IHN0ZC5pbnRlZ2VyLmlzYSAgICAgICAgOSAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWNsdHRfXzUzID0gLT4gc3RkLm5vbmVtcHR5X3RleHQuaXNhICAnd3d3JyAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pY2x0dF9fNTQgPSAtPiBzdGQucXVhbnRpdHlfcS5pc2EgICAgIDEuNWUzMiAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqljbHR0X181NSA9IC0+IHN0ZC5xdWFudGl0eV91LmlzYSAgICAgJ2ttJyAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWNsdHRfXzU2ID0gLT4gc3RkLnF1YW50aXR5LmlzYSAgICAgICB7IHE6IDEuNWUzMiwgdTogJ2ttJywgfSAgICksIHRydWVcbiAgICBkbyA9PlxuICAgICAgZWNobygpXG4gICAgICBpbmZvICfOqV9fNTcnLCBzdGQubm9uZW1wdHlfdGV4dFxuICAgICAgQGVxICggzqljbHR0X181OCA9IC0+IHN0ZC5ub25lbXB0eV90ZXh0LmlzYSAzLjE0MSAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWNsdHRfXzU5ID0gLT4gc3RkLm5vbmVtcHR5X3RleHQuaXNhICcnICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6pY2x0dF9fNjAgPSAtPiBzdGQubm9uZW1wdHlfdGV4dC5pc2EgJ2QnICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWNsdHRfXzYxID0gLT4gc3RkLm5vbmVtcHR5X3RleHQuY3JlYXRlKCkgICAgICAgICAgICAgICAgICAgKSwgJydcbiAgICAgIEBlcSAoIM6pY2x0dF9fNjIgPSAtPiBzdGQubm9uZW1wdHlfdGV4dC5jcmVhdGUgZmFsc2UgICAgICAgICAgICAgICApLCAnZmFsc2UnXG4gICAgICBAZXEgKCDOqWNsdHRfXzYzID0gLT4gc3RkLm5vbmVtcHR5X3RleHQuY3JlYXRlICdkJyAgICAgICAgICAgICAgICAgKSwgJ2QnXG4gICAgZG8gPT5cbiAgICAgIGVjaG8oKVxuICAgICAgaW5mbyAnzqlfXzY0Jywgc3RkLnF1YW50aXR5XG4gICAgICBAZXEgKCDOqWNsdHRfXzY1ID0gLT4gc3RkLnF1YW50aXR5LmNyZWF0ZSgpICAgICAgICAgICAgICAgICAgICAgICAgKSwgeyBxOiAwLCB1OiAndScsIH1cbiAgICAgIEBlcSAoIM6pY2x0dF9fNjYgPSAtPiBzdGQucXVhbnRpdHkuY3JlYXRlICAgIHsgcTogNC4zLCB1OiAncycsIH0gICApLCB7IHE6IDQuMywgdTogJ3MnLCB9XG4gICAgICBpbmZvICfOqV9fNjcnLCBzdGQubm9uZW1wdHlfdGV4dC5jcmVhdGUgICAgICAnZydcbiAgICAgIGluZm8gJ86pX182OCcsIHN0ZC5xdWFudGl0eV91LmNyZWF0ZSAgICAgICAgICdnJ1xuICAgICAgaW5mbyAnzqlfXzY5Jywgc3RkLnF1YW50aXR5LmZpZWxkcy51LmNyZWF0ZSAgJ2cnXG4gICAgZG8gPT5cbiAgICAgIGVjaG8oKVxuICAgICAgaGVscCAnzqlfXzcwJywgc3RkLnF1YW50aXR5XG4gICAgICBoZWxwICfOqV9fNzEnLCBzdGQucXVhbnRpdHkuY29uc3RydWN0b3JcbiAgICAgIGhlbHAgJ86pX183MicsIHN0ZC5xdWFudGl0eS5jb25zdHJ1Y3Rvci5uYW1lXG4gICAgICBoZWxwICfOqV9fNzMnLCBzdGQucXVhbnRpdHkuaXNhXG4gICAgICBoZWxwICfOqV9fNzQnLCBzdGQucXVhbnRpdHkuaXNhIHt9XG4gICAgICBoZWxwICfOqV9fNzUnLCBzdGQucXVhbnRpdHkuaXNhIHsgdTogNywgcTogMywgfVxuICAgICAgaGVscCAnzqlfXzc2Jywgc3RkLnF1YW50aXR5LmlzYSB7IHU6ICc3JywgcTogMywgfVxuICAgICAgaGVscCAnzqlfXzc3Jywgc3RkLnF1YW50aXR5LmlzYSB7IHU6ICc3JywgcTogSW5maW5pdHksIH1cbiAgICAgIEBlcSAoIM6pY2x0dF9fNzggPSAtPiBzdGQucXVhbnRpdHkubmFtZSAgICAgICAgICAgICAgICAgICAgKSwgJ3F1YW50aXR5J1xuICAgICAgQGVxICggzqljbHR0X183OSA9IC0+IHN0ZC5pbnRlZ2VyLm5hbWUgICAgICAgICAgICAgICAgICAgICApLCAnaW50ZWdlcidcbiAgICAgIEBlcSAoIM6pY2x0dF9fODAgPSAtPiBzdGQucXVhbnRpdHlfcS5uYW1lICAgICAgICAgICAgICAgICAgKSwgJ3F1YW50aXR5X3EnXG4gICAgICBAZXEgKCDOqWNsdHRfXzgxID0gLT4gc3RkLnF1YW50aXR5X3UubmFtZSAgICAgICAgICAgICAgICAgICksICdxdWFudGl0eV91J1xuICAgICAgZWNobygpXG4gICAgICBoZWxwICfOqV9fODInLCBzdGQudGV4dC5pc2FcbiAgICAgIGhlbHAgJ86pX184MycsIHN0ZC50ZXh0LmlzYSAnYWJjJ1xuICAgICAgaGVscCAnzqlfXzg0Jywgc3RkLnRleHQuaXNhIEFycmF5LmZyb20gJ2FiYydcbiAgICAgIGVjaG8oKVxuICAgICAgaGVscCAnzqlfXzg1Jywgc3RkLm5vbmVtcHR5X3RleHRcbiAgICAgIGhlbHAgJ86pX184NicsIHN0ZC5ub25lbXB0eV90ZXh0LmlzYVxuICAgICAgQGVxICggzqljbHR0X184NyA9IC0+IHN0ZC5ub25lbXB0eV90ZXh0LmlzYSAnYWJjJyAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pY2x0dF9fODggPSAtPiBzdGQubm9uZW1wdHlfdGV4dC5pc2EgQXJyYXkuZnJvbSAnYWJjJyApLCBmYWxzZVxuICAgICAgcmV0dXJuIG51bGxcbiAgICBkbyA9PlxuICAgICAgZWNobygpXG4gICAgICBmb3IgdHlwZW5hbWUsIHR5cGUgb2Ygc3RkXG4gICAgICAgIEBlcSAoIM6pY2x0dF9fODkgPSAtPiB0eXBlLmlzYS5uYW1lICksIFwiaXNhXyN7dHlwZW5hbWV9XCJcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmb3IgdHlwZW5hbWUsIHR5cGUgb2Ygc3RkXG4gICAgICB1cmdlICfOqV9fOTAnLCBmXCIje3R5cGVuYW1lfTo8MjBjOyAje3R5cGUuY29uc3RydWN0b3IubmFtZX06PDIwYzsgI3t0eXBlLmlzYS5uYW1lfTo8MjBjO1wiXG4gICAgcmV0dXJuIG51bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmRlbW9fbmV3X3JldHVybnNfaW5zdGFuY2Vfb2ZfbmV3X2NsYXNzID0gLT5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBjbGFzcyBBXG4gICAgIyAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICMgY29uc3RydWN0b3I6ICggbmFtZSApIC0+XG4gICAgIyAgIEBuYW1lID0gXCJBKiN7bmFtZX0qXCJcbiAgICAjICAgcmV0dXJuIEBjcmVhdGUgbmFtZVxuICAgIGdldF9uYW1lc19BOiAtPiBbIEBuYW1lLCBAY29uc3RydWN0b3IubmFtZSwgXVxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBjcmVhdGU6ICggbmFtZSApIC0+XG4gICAgICBjbGFzeiA9IGNsYXNzIGV4dGVuZHMgQGNvbnN0cnVjdG9yXG4gICAgICAgIGNvbnN0cnVjdG9yOiAtPiBzdXBlcigpOyBAbmFtZSA9IG5hbWU7IHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgZ2V0X25hbWVzX0I6IC0+IFsgQG5hbWUsIGNsYXN6Lm5hbWUsIEBjb25zdHJ1Y3Rvci5uYW1lLCBdXG4gICAgICBuYW1laXQgbmFtZSwgY2xhc3pcbiAgICAgIHJldHVybiBuZXcgY2xhc3ooKVxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGEgPSBuZXcgQVxuICBkZWJ1ZyAnzqljbHR0X185MScsIEFcbiAgZGVidWcgJ86pY2x0dF9fOTInLCBhXG4gIGRlYnVnICfOqWNsdHRfXzkzJywgYiA9IGEuY3JlYXRlICdiJ1xuICBkZWJ1ZyAnzqljbHR0X185NCcsIGIuZ2V0X25hbWVzX0EoKVxuICBkZWJ1ZyAnzqljbHR0X185NScsIGIuZ2V0X25hbWVzX0IoKVxuICAjIyNcbiAgZCA9IG5ldyBEKCk7IDw9PiAoIGQgaW5zdGFuY2VvZiBEICkgXiAoIGQuY29uc3RydWN0b3IgaXMgRCApXG4gICMjI1xuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGNsYXNzIFBPRFxuICAgIGNvbnN0cnVjdG9yOiAoIGNmZyApIC0+XG4gICAgICBSID0gT2JqZWN0LmNyZWF0ZSBudWxsXG4gICAgICBPYmplY3QuYXNzaWduIFIsIGNmZ1xuICAgICAgcmV0dXJuIFJcbiAgICBpc2E6IC0+XG4gIGQgPSBuZXcgUE9EIHsgeDogNzYsIH1cbiAgZGVidWcgJ86pY2x0dF9fOTYnLCBkXG4gIGRlYnVnICfOqWNsdHRfXzk3JywgZC5jb25zdHJ1Y3RvclxuICBkZWJ1ZyAnzqljbHR0X185OCcsIGQuaXNhXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgcmV0dXJuIG51bGxcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IEBjbGVhcnR5cGVfdGFza3NcbiAgZGVtb19uZXdfcmV0dXJuc19pbnN0YW5jZV9vZl9uZXdfY2xhc3MoKVxuIl19
//# sourceURL=../src/demo-cleartype-types-as-classes.coffee