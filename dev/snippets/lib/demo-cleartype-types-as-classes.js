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
  var GTNG, GUY, Test, alert, bold, debug, echo, f, help, hide, info, inspect, log, nameit, plain, praise, require_cleartype, reverse, rpr, urge, warn, whisper;

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
    var H, Type, std, type;
    H = require('../../../apps/cleartype/lib/helpers');
    //===========================================================================================================
    Type = class Type {
      //---------------------------------------------------------------------------------------------------------
      constructor() {
        // H.bind_instance_methods @
        return void 0;
      }

      //---------------------------------------------------------------------------------------------------------
      create(dcl) {
        /* TAINT review use of dcl.refines here */
        /* TAINT should check with instanceof */
        var clasz, create, extension, fields, has_fields, is_extension, isa, per_se_isa, ref;
        fields = {};
        //.......................................................................................................
        if (dcl.refines != null) {
          if (!(dcl.refines instanceof this.constructor)) {
            throw new Error(`Ω___1 dcl.refines must be instanceof ${rpr(this.constructor)}`);
          }
          is_extension = true;
          extension = dcl.refines.constructor;
        } else {
          is_extension = false;
          extension = this.constructor;
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
          // debug 'Ω___2', dcl instanceof @constructor
          // debug 'Ω___3', @isa dcl
          switch (true) {
            case (Object.prototype.toString.call(dcl.isa)) === '[object Function]':
              per_se_isa = dcl.isa;
              break;
            case (Object.prototype.toString.call(dcl.isa.isa)) === '[object Function]':
              per_se_isa = dcl.isa.isa;
              break;
            default:
              throw new Error('Ω___4');
          }
        } else {
          /* TAINT check whether there are fields */
          //.......................................................................................................
          per_se_isa = function(x) {
            var field_name, ref, ref1, subtype;
            if (x == null) {
              return false;
            }
            if ((ref = x.constructor) !== Object && ref !== (void 0)) {
              return false;
            }
            if (/* stad.pod.isa x */has_fields) {
              ref1 = dcl.fields;
              for (field_name in ref1) {
                subtype = ref1[field_name];
                if (subtype.isa(x[field_name])) {
                  continue;
                }
                // warn 'Ω___5', "x.#{field_name}: #{rpr x[ field_name ]} is not a #{subtype.name}"
                warn('Ω___6', `expected a ${subtype.name} for field ${field_name}, got ${rpr(x[field_name])}`);
                return false;
              }
            }
            return true;
          };
        }
        //.......................................................................................................
        if (is_extension) {
          isa = function(x) {
            return (dcl.refines.isa(x)) && (per_se_isa(x));
          };
        } else {
          isa = per_se_isa;
        }
        //.......................................................................................................
        create = (ref = dcl.create) != null ? ref : function() {};
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

          _Class.prototype.name = dcl.name;

          _Class.prototype.isa = nameit(_Class.isaname_from_typename(dcl.name), isa);

          _Class.prototype.create = create;

          _Class.prototype.fields = fields;

          _Class.prototype.has_fields = has_fields;

          return _Class;

        }).call(this);
        nameit(clasz.classname_from_typename(dcl.name), clasz);
        return new clasz();
      }

      //---------------------------------------------------------------------------------------------------------
      static classname_from_typename(typename = null) {
        var R;
        R = typename != null ? typename : 'anonymous';
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
    //-----------------------------------------------------------------------------------------------------------
    type = new Type();
    std = {};
    //-----------------------------------------------------------------------------------------------------------
    std.text = type.create({
      name: 'text',
      isa: function(x) {
        return (Object.prototype.toString.call(x)) === '[object String]';
      },
      create: function(x) {
        var ref;
        return (ref = x != null ? x.toString() : void 0) != null ? ref : '';
      }
    });
    //-----------------------------------------------------------------------------------------------------------
    std.nonempty_text = type.create({
      name: 'nonempty_text',
      refines: std.text, // .constructor
      // isa:      ( x ) -> ( std.text.isa x ) and ( x.length isnt 0 )
      isa: function(x) {
        return x.length !== 0;
      },
      create: function(x) {
        var ref;
        return (ref = x != null ? x.toString() : void 0) != null ? ref : '';
      }
    });
    //-----------------------------------------------------------------------------------------------------------
    std.float = type.create({
      name: 'float',
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
    });
    //-----------------------------------------------------------------------------------------------------------
    std.quantity_q = type.create({
      name: 'quantity_q',
      isa: std.float
    });
    //-----------------------------------------------------------------------------------------------------------
    std.quantity_u = type.create({
      name: 'quantity_u',
      isa: std.nonempty_text
    });
    //-----------------------------------------------------------------------------------------------------------
    std.quantity = type.create({
      name: 'quantity',
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
    });
    //-----------------------------------------------------------------------------------------------------------
    std.integer = type.create({
      name: 'integer',
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
    });
    //=========================================================================================================
    return {std, Type};
  };

  //===========================================================================================================
  this.cleartype_tasks = {
    basics: function() {
      var Type, std, type, typename;
      ({Type, std} = require_cleartype());
      info('Ω___8', std);
      (() => {
        echo();
        info('Ω___9', std.integer);
        info('Ω__10', std.integer.isa(3.141));
        info('Ω__11', std.integer.isa(3));
        info('Ω__12', std.integer.create('3'));
        return info('Ω__13', std.integer.create());
      })();
      (() => {
        var Ωcltt__15, Ωcltt__16, Ωcltt__17, Ωcltt__18, Ωcltt__19, Ωcltt__20;
        echo();
        info('Ω__14', std.nonempty_text);
        this.eq((Ωcltt__15 = function() {
          return std.nonempty_text.isa(3.141);
        }), false);
        this.eq((Ωcltt__16 = function() {
          return std.nonempty_text.isa('');
        }), false);
        this.eq((Ωcltt__17 = function() {
          return std.nonempty_text.isa('d');
        }), true);
        this.eq((Ωcltt__18 = function() {
          return std.nonempty_text.create();
        }), '');
        this.eq((Ωcltt__19 = function() {
          return std.nonempty_text.create(false);
        }), 'false');
        return this.eq((Ωcltt__20 = function() {
          return std.nonempty_text.create('d');
        }), 'd');
      })();
      (() => {
        var Ωcltt__22, Ωcltt__23, Ωcltt__24, Ωcltt__25, Ωcltt__26, Ωcltt__27;
        echo();
        info('Ω__21', std.quantity);
        this.eq((Ωcltt__22 = function() {
          return std.quantity.create();
        }), {
          q: 0,
          u: 'u'
        });
        this.eq((Ωcltt__23 = function() {
          return std.quantity.create({
            q: 4.3,
            u: 's'
          });
        }), {
          q: 4.3,
          u: 's'
        });
        this.eq((Ωcltt__24 = function() {
          return std.quantity.isa({
            q: 4.3,
            u: 's'
          });
        }), true);
        this.eq((Ωcltt__25 = function() {
          return std.quantity.validate({
            q: 4.3,
            u: 's'
          });
        }), {
          q: 4.3,
          u: 's'
        });
        this.eq((Ωcltt__26 = function() {
          return std.quantity.fields.q.isa(7);
        }), true);
        this.eq((Ωcltt__27 = function() {
          return std.quantity.fields.q.isa(2e308);
        }), false);
        info('Ω__28', std.nonempty_text.create('g'));
        info('Ω__29', std.quantity_u.create('g'));
        return info('Ω__30', std.quantity.fields.u.create('g'));
      })();
      (() => {
        var Ωcltt__39, Ωcltt__40, Ωcltt__41, Ωcltt__42, Ωcltt__48, Ωcltt__49;
        echo();
        help('Ω__31', std.quantity);
        help('Ω__32', std.quantity.constructor);
        help('Ω__33', std.quantity.constructor.name);
        help('Ω__34', std.quantity.isa);
        help('Ω__35', std.quantity.isa({}));
        help('Ω__36', std.quantity.isa({
          u: 7,
          q: 3
        }));
        help('Ω__37', std.quantity.isa({
          u: '7',
          q: 3
        }));
        help('Ω__38', std.quantity.isa({
          u: '7',
          q: 2e308
        }));
        this.eq((Ωcltt__39 = function() {
          return std.quantity.name;
        }), 'quantity');
        this.eq((Ωcltt__40 = function() {
          return std.integer.name;
        }), 'integer');
        this.eq((Ωcltt__41 = function() {
          return std.quantity_q.name;
        }), 'quantity_q');
        this.eq((Ωcltt__42 = function() {
          return std.quantity_u.name;
        }), 'quantity_u');
        echo();
        help('Ω__43', std.text.isa);
        help('Ω__44', std.text.isa('abc'));
        help('Ω__45', std.text.isa(Array.from('abc')));
        echo();
        help('Ω__46', std.nonempty_text);
        help('Ω__47', std.nonempty_text.isa);
        this.eq((Ωcltt__48 = function() {
          return std.nonempty_text.isa('abc');
        }), true);
        this.eq((Ωcltt__49 = function() {
          return std.nonempty_text.isa(Array.from('abc'));
        }), false);
        return null;
      })();
      (() => {
        var type, typename, Ωcltt__51;
        echo();
        for (typename in std) {
          type = std[typename];
          debug('Ω__50', rpr(typename), rpr(type.isa.name), rpr(`isa_${typename}`));
          this.eq((Ωcltt__51 = function() {
            return type.isa.name;
          }), `isa_${typename}`);
        }
        return null;
      })();
//.......................................................................................................
      for (typename in std) {
        type = std[typename];
        urge('Ω__52', f`${typename}:<20c; ${type.constructor.name}:<20c; ${type.isa.name}:<20c;`);
      }
      return null;
    }
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
      return (new Test(guytest_cfg)).test(this.cleartype_tasks);
    })();
  }

}).call(this);

//# sourceMappingURL=demo-cleartype-types-as-classes.js.map