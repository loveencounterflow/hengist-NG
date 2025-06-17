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

//# sourceMappingURL=demo-cleartype-types-as-classes.js.map