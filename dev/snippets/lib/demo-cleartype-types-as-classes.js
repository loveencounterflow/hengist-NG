(async function() {
  /*

  1.  ```
      class Type
        ...
      type      = new Type type_cfg
      integer   = type.$create { $name: 'integer',  $isa: ( -> ), ..., }
      quantity  = type.$create { $name: 'quantity', $isa: ( -> ), ..., q: ..., u: ..., }

   * usage:
      integer.$create 3.141
      ```

  2.  ```
      class Integer extends Type
        $isa:     ( x ) -> Number.isInteger x
        $create:  ( x ) -> parseInt x, 10
      integer = new Integer()

   * usage:
      integer.$create 3.141
      ```

  3.  ```
      class integer extends Type
        @$isa:    ( x ) -> Number.isInteger x
        @$create: ( x ) -> parseInt x, 10

   * usage:
      integer.$create 3.141
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
    var Type, float, integer, nonempty_text, quantity, std, text, type;
    //===========================================================================================================
    Type = class Type {
      //---------------------------------------------------------------------------------------------------------
      constructor() {
        return void 0;
      }

      //---------------------------------------------------------------------------------------------------------
      $create(dcl) {
        /* TAINT check whether there are fields */
        var $create, $isa, R, dsc, field_name, fields, ref, ref1;
        if (dcl.$isa != null) {
          $isa = function(x) {
            return dcl.$isa(x);
          };
        } else {
          fields = {};
          ref = Object.getOwnPropertyDescriptors(dcl);
          for (field_name in ref) {
            dsc = ref[field_name];
            if (field_name.startsWith('$')) {
              continue;
            }
            fields[field_name] = dsc.value;
          }
          // field_names = Object.keys fields
          $isa = function(x) {
            var ref1, subtype;
            if (x == null) {
              return false;
            }
            if ((ref1 = x.constructor) !== Object && ref1 !== (void 0)) {
              return false;
            }
/* stad.pod.$isa x */            for (field_name in fields) {
              subtype = fields[field_name];
              if (subtype.$isa(x[field_name])) {
                continue;
              }
              warn('Ω___1', `x.${field_name} is not a ${subtype.$name}`);
              return false;
            }
            return true;
          };
        }
        //.......................................................................................................
        $create = (ref1 = dcl.$create) != null ? ref1 : function() {};
        // if dcl.$create?
        //   $create = ( x ) -> dcl.$create x
        // else
        //   ### TAINT check whether there are fields ###
        //   fields = {}
        //   for field_name, dsc of Object.getOwnPropertyDescriptors dcl

        //.......................................................................................................
        R = {};
        R.$isa = $isa.bind(R);
        R.$create = $create.bind(R);
        return R;
      }

      //---------------------------------------------------------------------------------------------------------
      $validate(x) {}

      $isa(x) {}

    };
    //-----------------------------------------------------------------------------------------------------------
    type = new Type();
    //-----------------------------------------------------------------------------------------------------------
    text = type.$create({
      $name: 'text',
      $isa: function(x) {
        return (Object.prototype.toString.call(x)) === '[object String]';
      },
      $create: function(x) {
        var ref;
        return (ref = x != null ? x.toString() : void 0) != null ? ref : '';
      }
    });
    //-----------------------------------------------------------------------------------------------------------
    nonempty_text = type.$create({
      $name: 'nonempty_text',
      $isa: function(x) {
        return (text.$isa(x)) && (x.length !== 0);
      },
      $create: function(x) {
        var ref;
        return (ref = x != null ? x.toString() : void 0) != null ? ref : '';
      }
    });
    //-----------------------------------------------------------------------------------------------------------
    float = type.$create({
      $name: 'float',
      $isa: function(x) {
        return Number.isFinite(x);
      },
      $create: function(n = 0) {
        if (typeof x !== "undefined" && x !== null) {
          return parseFloat(x);
        } else {
          return 0;
        }
      }
    });
    //-----------------------------------------------------------------------------------------------------------
    quantity = (() => {
      var $create, q, u;
      $create = function(cfg) {
        return {
          q: 0,
          u: 'u',
          ...cfg
        };
      };
      q = type.$create({
        $name: 'q',
        $isa: function(x) {
          return float.$isa(x);
        }
      });
      u = type.$create({
        $name: 'u',
        $isa: function(x) {
          return nonempty_text.$isa(x);
        }
      });
      return type.$create({
        $name: 'quantity',
        $create,
        q,
        u
      });
    })();
    //-----------------------------------------------------------------------------------------------------------
    integer = (() => {
      var $create, $isa;
      $isa = function(x) {
        return Number.isInteger(x);
      };
      $create = function(n = 0) {
        if (typeof x !== "undefined" && x !== null) {
          return parseInt(n, 10);
        } else {
          return 0;
        }
      };
      return type.$create({
        $name: 'integer',
        $isa,
        $create
      });
    })();
    //===========================================================================================================
    std = {text, nonempty_text, float, integer, quantity};
    //=========================================================================================================
    return {std, Type};
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var Type, std;
      ({Type, std} = require_cleartype());
      info('Ω___2', std);
      (() => {
        echo();
        info('Ω___3', std.integer);
        info('Ω___4', std.integer.$isa(3.141));
        info('Ω___5', std.integer.$isa(3));
        info('Ω___6', std.integer.$create('3'));
        return info('Ω___7', std.integer.$create());
      })();
      (() => {
        echo();
        info('Ω___8', std.nonempty_text);
        info('Ω___9', std.nonempty_text.$isa(3.141));
        info('Ω__10', std.nonempty_text.$isa(''));
        info('Ω__11', std.nonempty_text.$isa('d'));
        info('Ω__12', std.nonempty_text.$create());
        info('Ω__13', std.nonempty_text.$create(false));
        return info('Ω__14', std.nonempty_text.$create('d'));
      })();
      return (() => {
        echo();
        info('Ω__15', std.quantity);
        info('Ω__16', std.quantity.$create());
        info('Ω__17', std.quantity.$create({
          q: 4.3,
          u: 's'
        }));
        info('Ω__18', std.quantity.$isa({
          q: 4.3,
          u: 's'
        }));
        info('Ω__19', std.quantity.q.$isa(7));
        info('Ω__20', std.quantity.q.$isa(2e308));
        return info('Ω__21', std.quantity.u.$create('g'));
      })();
    })();
  }

}).call(this);

//# sourceMappingURL=demo-cleartype-types-as-classes.js.map