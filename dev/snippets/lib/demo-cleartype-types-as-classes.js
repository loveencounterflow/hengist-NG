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
  var GUY, alert, bold, debug, echo, help, hide, info, inspect, log, nameit, plain, praise, require_cleartype, reverse, rpr, urge, warn, whisper;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-execa'));

  ({rpr, inspect, echo, reverse, bold, log} = GUY.trm);

  ({hide} = GUY.props);

  ({
    props: {nameit}
  } = require('../../../apps/webguy'));

  //===========================================================================================================
  require_cleartype = function() {
    var Type, std, type;
    //===========================================================================================================
    Type = class Type {
      //---------------------------------------------------------------------------------------------------------
      constructor() {
        return void 0;
      }

      //---------------------------------------------------------------------------------------------------------
      create(dcl) {
        /* TAINT should check with instanceof */
        var R, create, fields, has_fields, isa, ref;
        fields = {};
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
            case (Object.prototype.toString.call(dcl.isa)) === '[object Function]':
              isa = dcl.isa;
              break;
            case (Object.prototype.toString.call(dcl.isa.isa)) === '[object Function]':
              isa = dcl.isa.isa;
              break;
            default:
              throw new Error('Ω___1');
          }
        } else {
          /* TAINT check whether there are fields */
          //.......................................................................................................
          isa = function(x) {
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
                warn('Ω___2', `x.${field_name} is not a ${subtype.name}`);
                return false;
              }
            }
            return true;
          };
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
        R = {};
        R.isa = isa.bind(R);
        R.create = create.bind(R);
        R.fields = fields;
        R.has_fields = has_fields;
        return R;
      }

      //---------------------------------------------------------------------------------------------------------
      validate(x) {}

      isa(x) {}

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
      isa: function(x) {
        return (std.text.isa(x)) && (x.length !== 0);
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
      name: 'q',
      isa: std.float
    });
    //-----------------------------------------------------------------------------------------------------------
    std.quantity_u = type.create({
      name: 'u',
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
  if (module === require.main) {
    await (() => {
      var Type, std;
      ({Type, std} = require_cleartype());
      info('Ω___3', std);
      (() => {
        echo();
        info('Ω___4', std.integer);
        info('Ω___5', std.integer.isa(3.141));
        info('Ω___6', std.integer.isa(3));
        info('Ω___7', std.integer.create('3'));
        return info('Ω___8', std.integer.create());
      })();
      (() => {
        echo();
        info('Ω___9', std.nonempty_text);
        info('Ω__10', std.nonempty_text.isa(3.141));
        info('Ω__11', std.nonempty_text.isa(''));
        info('Ω__12', std.nonempty_text.isa('d'));
        info('Ω__13', std.nonempty_text.create());
        info('Ω__14', std.nonempty_text.create(false));
        return info('Ω__15', std.nonempty_text.create('d'));
      })();
      return (() => {
        echo();
        info('Ω__16', std.quantity);
        info('Ω__17', std.quantity.create());
        info('Ω__18', std.quantity.create({
          q: 4.3,
          u: 's'
        }));
        info('Ω__19', std.quantity.isa({
          q: 4.3,
          u: 's'
        }));
        info('Ω__20', std.quantity.fields.q.isa(7));
        info('Ω__21', std.quantity.fields.q.isa(2e308));
        info('Ω__22', std.nonempty_text.create('g'));
        info('Ω__23', std.quantity_u.create('g'));
        return info('Ω__24', std.quantity.fields.u.create('g'));
      })();
    })();
  }

}).call(this);

//# sourceMappingURL=demo-cleartype-types-as-classes.js.map