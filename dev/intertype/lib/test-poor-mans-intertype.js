(async function() {
  'use strict';
  var GTNG, GUY, Intertype_error, Intertype_validation_error, TMP_types, Test, Type, Types, WGUY, alert, debug, declarations, echo, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('intertype/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  WGUY = require('../../../apps/webguy');

  TMP_types = new (require('intertype-203.0.0')).Intertype();

  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  // test_mode                 = 'throw_failures'
  // test_mode                 = 'throw_errors'
  // test_mode                 = 'failsafe'
  /*

   * from `ltsort` which uses an outdated version of `intertype`:

  get_base_types = ->
    return base_types if base_types?
    #.........................................................................................................
    base_types                = new Intertype()
    { declare }               = base_types
    #.........................................................................................................
    declare.lt_nodelist 'list.of.nonempty.text'
    #.........................................................................................................
    declare.lt_constructor_cfg
      fields:
        loners:     'boolean'
      default:
        loners:     true
    #.........................................................................................................
    declare.lt_add_cfg
      fields:
        name:       'nonempty.text'
        precedes:   'lt_nodelist'
        needs:      'lt_nodelist'
      default:
        name:       null
        precedes:     null
        needs:      null
      create: ( x ) ->
        R           = x ? {}
        return R unless @isa.object R
        R.needs      ?= []
        R.precedes   ?= []
        R.needs       = [ R.needs,    ] unless @isa.list R.needs
        R.precedes    = [ R.precedes, ] unless @isa.list R.precedes
        return R
    #.........................................................................................................
    declare.lt_linearize_cfg
      fields:
        groups:     'boolean'
      default:
        groups:     false
    #.........................................................................................................
    return base_types

   */
  //===========================================================================================================
  Intertype_error = class Intertype_error extends Error {};

  Intertype_validation_error = class Intertype_validation_error extends Intertype_error {};

  //===========================================================================================================
  Types = class Types {
    //---------------------------------------------------------------------------------------------------------
    constructor() {
      return void 0;
    }

    //---------------------------------------------------------------------------------------------------------
    isa(type, x) {
      return type.$isa(x);
    }

    isa_optional(type, x) {
      return (x == null) || (this.isa(type, x));
    }

    //---------------------------------------------------------------------------------------------------------
    validate(type, x) {
      if (this.isa(type, x)) {
        return x;
      }
      throw new Intertype_validation_error(`Ωpmi___1 ${rpr(type)} ${rpr(x)}`);
    }

    //---------------------------------------------------------------------------------------------------------
    validate_optional(type, x) {
      if (this.isa_optional(type, x)) {
        return x;
      }
      throw new Intertype_validation_error(`Ωpmi___2 ${rpr(type)} ${rpr(x)}`);
    }

    //---------------------------------------------------------------------------------------------------------
    create(type, ...P) {
      return this.validate(type, type.$create(...P));
    }

  };

  //===========================================================================================================
  Type = class Type {
    //---------------------------------------------------------------------------------------------------------
    constructor(declaration) {
      this.$isa = declaration.$isa;
      this.$create = declaration.$create;
      return void 0;
    }

    //---------------------------------------------------------------------------------------------------------
    $isa() {}

    $create() {}

  };

  //===========================================================================================================
  declarations = {
    anything: {
      $isa: function(x) {
        return true;
      }
    },
    // $create: ( cfg ) ->
    boolean: {
      $isa: function(x) {
        return (x === true) || (x === false);
      }
    },
    // $create: ( cfg ) ->
    function: {
      $isa: function(x) {
        return (Object.prototype.toString.call(x)) === '[object Function]';
      },
      $create: function() {
        return function() {
          return null;
        };
      }
    },
    asyncfunction: {
      $isa: function(x) {
        return (Object.prototype.toString.call(x)) === '[object AsyncFunction]';
      },
      $create: function() {
        return async function() {
          return (await null);
        };
      }
    },
    symbol: {
      $isa: function(x) {
        return (typeof x) === 'symbol';
      }
    },
    // $create: ( cfg ) ->
    object: {
      $isa: function(x) {
        return (x != null) && (typeof x === 'object') && ((Object.prototype.toString.call(x)) === '[object Object]');
      },
      $create: function(cfg) {
        return {...cfg};
      }
    },
    float: {
      $isa: function(x) {
        return Number.isFinite(x);
      },
      $create: function() {
        return 0;
      }
    },
    text: {
      $isa: function(x) {
        return (typeof x) === 'string';
      },
      $create: function() {
        return '';
      }
    },
    nullary: {
      $isa: function(x) {
        return (x != null) && ((x.length === 0) || (x.size === 0));
      }
    },
    // $create: ( cfg ) ->
    unary: {
      $isa: function(x) {
        return (x != null) && ((x.length === 1) || (x.size === 1));
      }
    },
    // $create: ( cfg ) ->
    binary: {
      $isa: function(x) {
        return (x != null) && ((x.length === 2) || (x.size === 2));
      }
    },
    // $create: ( cfg ) ->
    trinary: {
      $isa: function(x) {
        return (x != null) && ((x.length === 3) || (x.size === 3));
      }
    },
    // $create: ( cfg ) ->
    set: {
      $isa: function(x) {
        return x instanceof Set;
      },
      $create: function(cfg) {
        return new Set(cfg != null ? cfg : []);
      }
    },
    map: {
      $isa: function(x) {
        return x instanceof Map;
      },
      $create: function(cfg) {
        return new Map(cfg != null ? cfg : []);
      }
    },
    list: {
      $isa: function(x) {
        return Array.isArray(x);
      },
      $create: function(cfg) {
        var ref, results, x;
        ref = cfg != null ? cfg : [];
        results = [];
        for (x of ref) {
          results.push(x);
        }
        return results;
      }
    }
  };

  //###########################################################################################################

  //===========================================================================================================
  this.intertype_tasks = {
    //=========================================================================================================
    demo: {
      //-------------------------------------------------------------------------------------------------------
      isa: function() {
        /*
        declare.lt_constructor_cfg
          fields:
            loners:     'boolean'
          default:
            loners:     true
        */
        var types;
        types = {
          lt_constructor_cfg: {
            $isa: function(x) {
              if (!types.isa.object(x)) {
                return false;
              }
              if (!this.loners.$isa(x.loners)) {
                return false;
              }
              return true;
            },
            loners: {
              $isa: function(x) {
                return types.isa.boolean(x);
              }
            },
            $template: {
              loners: true
            },
            $create: function(x) {
              if (!types.isa_optional.object(x)) {
                return x;
              }
              return {...this.$template, ...x};
            }
          }
        };
        //.....................................................................................................
        // @eq ( Ωit___3 = -> create_typespace()             instanceof Typespace  ), true
        // @throws ( Ωit___4 = -> create_typespace() ), /declaration for type 'wholenumber' contains forward reference to type 'integer'/
        //.....................................................................................................
        return null;
      }
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      return (new Test({
        throw_on_error: true
      })).test(this.intertype_tasks);
    })();
  }

  // ( new Test { throw_on_error: true, } ).test { mvp_isa: @intertype_tasks.MVP.isa, }

}).call(this);

//# sourceMappingURL=test-poor-mans-intertype.js.map