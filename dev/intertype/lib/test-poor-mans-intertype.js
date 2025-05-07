(async function() {
  'use strict';
  var GTNG, GUY, Intertype_error, Intertype_validation_error, TMP_types, Test, Type, Types, WGUY, alert, debug, echo, help, info, inspect, log, plain, praise, reverse, rpr, t, types, urge, warn, whisper;

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
      var ctx;
      ctx = {
        me: type,
        types: this
      };
/* TAINT avoid object re-creation */      return type.$isa.call(ctx, x);
    }

    //---------------------------------------------------------------------------------------------------------
    isa_optional(type, x) {
      return (x == null) || (this.isa(type, x));
    }

    //---------------------------------------------------------------------------------------------------------
    validate(type, x) {
      if (this.isa(type, x)) {
        return x;
      }
      throw new Intertype_validation_error(`Ωpmi___1 validation error\n${rpr(type)}\n${rpr(x)}`);
    }

    //---------------------------------------------------------------------------------------------------------
    validate_optional(type, x) {
      if (this.isa_optional(type, x)) {
        return x;
      }
      throw new Intertype_validation_error(`Ωpmi___2 validation error\n${rpr(type)}\n${rpr(x)}`);
    }

    //---------------------------------------------------------------------------------------------------------
    create(type, ...P) {
      var ctx;
      ctx = {
        me: type,
        types: this
      };
      return this./* TAINT avoid object re-creation */validate(type, type.$create.call(ctx, ...P));
    }

  };

  //===========================================================================================================
  types = new Types();

  //===========================================================================================================
  Type = class Type {
    //---------------------------------------------------------------------------------------------------------
    constructor(declaration) {
      this.$isa = declaration.$isa;
      this.$create = declaration.$create;
      return void 0;
    }

  };

  // #---------------------------------------------------------------------------------------------------------
  // $isa: ->
  // $create: ->

  //===========================================================================================================
  t = {
    anything: new Type({
      $isa: function(x) {
        return true;
      }
    }),
    // $create: ( cfg ) ->
    boolean: new Type({
      $isa: function(x) {
        return (x === true) || (x === false);
      }
    }),
    // $create: ( cfg ) ->
    function: new Type({
      $isa: function(x) {
        return (Object.prototype.toString.call(x)) === '[object Function]';
      },
      $create: function() {
        return function() {
          return null;
        };
      }
    }),
    asyncfunction: new Type({
      $isa: function(x) {
        return (Object.prototype.toString.call(x)) === '[object AsyncFunction]';
      },
      $create: function() {
        return async function() {
          return (await null);
        };
      }
    }),
    symbol: new Type({
      $isa: function(x) {
        return (typeof x) === 'symbol';
      }
    }),
    // $create: ( cfg ) ->
    object: new Type({
      $isa: function(x) {
        return (x != null) && (typeof x === 'object') && ((Object.prototype.toString.call(x)) === '[object Object]');
      },
      $create: function(cfg) {
        return {...cfg};
      }
    }),
    float: new Type({
      $isa: function(x) {
        return Number.isFinite(x);
      },
      $create: function() {
        return 0;
      }
    }),
    text: new Type({
      $isa: function(x) {
        return (typeof x) === 'string';
      },
      $create: function() {
        return '';
      }
    }),
    nullary: new Type({
      $isa: function(x) {
        return (x != null) && ((x.length === 0) || (x.size === 0));
      }
    }),
    // $create: ( cfg ) ->
    unary: new Type({
      $isa: function(x) {
        return (x != null) && ((x.length === 1) || (x.size === 1));
      }
    }),
    // $create: ( cfg ) ->
    binary: new Type({
      $isa: function(x) {
        return (x != null) && ((x.length === 2) || (x.size === 2));
      }
    }),
    // $create: ( cfg ) ->
    trinary: new Type({
      $isa: function(x) {
        return (x != null) && ((x.length === 3) || (x.size === 3));
      }
    }),
    // $create: ( cfg ) ->
    set: new Type({
      $isa: function(x) {
        return x instanceof Set;
      },
      $create: function(cfg) {
        return new Set(cfg != null ? cfg : []);
      }
    }),
    map: new Type({
      $isa: function(x) {
        return x instanceof Map;
      },
      $create: function(cfg) {
        return new Map(cfg != null ? cfg : []);
      }
    }),
    list: new Type({
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
    })
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
        var t2, Ωpmi__10, Ωpmi__11, Ωpmi__12, Ωpmi__13, Ωpmi___3, Ωpmi___4, Ωpmi___5, Ωpmi___6, Ωpmi___7, Ωpmi___8, Ωpmi___9;
        t2 = {
          lt_constructor_cfg: {
            $isa: function(x) {
              if (!this.types.isa(t.object, x)) {
                return false;
              }
              if (!this.types.isa(this.me.loners, x.loners)) {
                return false;
              }
              return true;
            },
            loners: {
              $isa: function(x) {
                return this.types.isa(t.boolean, x);
              }
            },
            $template: {
              loners: true
            },
            $create: function(x) {
              if (!this.types.isa_optional(t.object, x)) {
                return x;
              }
              return {...this.me.$template, ...x};
            }
          }
        };
        //.....................................................................................................
        this.eq((Ωpmi___3 = function() {
          return types.isa(t.float, true);
        }), false);
        this.eq((Ωpmi___4 = function() {
          return types.isa(t.float, '3');
        }), false);
        this.eq((Ωpmi___5 = function() {
          return types.isa(t.float, 337465);
        }), true);
        this.eq((Ωpmi___6 = function() {
          return types.isa(t2.lt_constructor_cfg, 337465);
        }), false);
        this.eq((Ωpmi___7 = function() {
          return types.isa(t2.lt_constructor_cfg, {});
        }), false);
        this.eq((Ωpmi___8 = function() {
          return types.isa(t2.lt_constructor_cfg, {
            loners: 8
          });
        }), false);
        this.eq((Ωpmi___9 = function() {
          return types.isa(t2.lt_constructor_cfg, {
            loners: true
          });
        }), true);
        this.eq((Ωpmi__10 = function() {
          return types.validate(t2.lt_constructor_cfg, {
            loners: true
          });
        }), {
          loners: true
        });
        this.eq((Ωpmi__11 = function() {
          return types.create(t2.lt_constructor_cfg);
        }), {
          loners: true
        });
        this.throws((Ωpmi__12 = function() {
          return types.create(t2.lt_constructor_cfg, {
            loners: 7
          });
        }), /validation error/);
        this.throws((Ωpmi__13 = function() {
          return types.validate(t2.lt_constructor_cfg, {
            loners: 8
          });
        }), /validation error/);
        //.....................................................................................................
        return null;
      }
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      (new Test({
        throw_on_error: true
      })).test(this.intertype_tasks);
      return function() {        // ( new Test { throw_on_error: true, } ).test { mvp_isa: @intertype_tasks.MVP.isa, }
        var d;
        d = {
          a: function() {
            return {
              foo: 1,
              bar: 2
            };
          }
        };
        debug('Ωpmi__14', d);
        debug('Ωpmi__15', d.a);
        debug('Ωpmi__16', d.a.name);
        return debug('Ωpmi__17', d.a());
      };
    })();
  }

}).call(this);

//# sourceMappingURL=test-poor-mans-intertype.js.map