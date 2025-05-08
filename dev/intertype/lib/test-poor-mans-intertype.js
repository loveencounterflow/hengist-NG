(async function() {
  'use strict';
  var GTNG, GUY, Intertype, Intertype_error, Intertype_validation_error, TMP_types, Test, Type, WGUY, alert, debug, echo, help, info, inspect, log, plain, praise, reverse, rpr, t, types, urge, warn, whisper;

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
  Intertype = class Intertype {
    //---------------------------------------------------------------------------------------------------------
    constructor() {
      this._contexts = false ? new WeakMap() : new Map/* TAINT this is going to be configurable for testing */();
      return void 0;
    }

    //---------------------------------------------------------------------------------------------------------
    _get_ctx(type) {
      var R;
      if (typeof R !== "undefined" && R !== null) {
        return (R = this._contexts.get(type));
      }
      this._contexts.set(type, R = Object.freeze({
        me: type,
        types: this
      }));
      return R;
    }

    //---------------------------------------------------------------------------------------------------------
    isa(type, x) {
      return type.$isa.call(this._get_ctx(type), x);
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
      return this.validate(type, type.$create.call(this._get_ctx(type), ...P));
    }

  };

  //===========================================================================================================
  types = new Intertype();

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
        var t2, tt, Ωpmi__10, Ωpmi__11, Ωpmi__12, Ωpmi__13, Ωpmi__14, Ωpmi__15, Ωpmi___3, Ωpmi___4, Ωpmi___5, Ωpmi___6, Ωpmi___7, Ωpmi___8, Ωpmi___9;
        tt = new Intertype();
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
          return tt.isa(t.float, true);
        }), false);
        this.eq((Ωpmi___4 = function() {
          return tt.isa(t.float, '3');
        }), false);
        this.eq((Ωpmi___5 = function() {
          return tt.isa(t.float, 337465);
        }), true);
        this.eq((Ωpmi___6 = function() {
          return tt.isa(t2.lt_constructor_cfg, 337465);
        }), false);
        this.eq((Ωpmi___7 = function() {
          return tt.isa(t2.lt_constructor_cfg, {});
        }), false);
        this.eq((Ωpmi___8 = function() {
          return tt.isa(t2.lt_constructor_cfg, {
            loners: 8
          });
        }), false);
        this.eq((Ωpmi___9 = function() {
          return tt.isa(t2.lt_constructor_cfg, {
            loners: true
          });
        }), true);
        this.eq((Ωpmi__10 = function() {
          return tt.validate(t2.lt_constructor_cfg, {
            loners: true
          });
        }), {
          loners: true
        });
        this.eq((Ωpmi__11 = function() {
          return tt.create(t2.lt_constructor_cfg);
        }), {
          loners: true
        });
        this.eq((Ωpmi__12 = function() {
          return tt.create(t2.lt_constructor_cfg, null);
        }), {
          loners: true
        });
        this.eq((Ωpmi__13 = function() {
          return tt.create(t2.lt_constructor_cfg, void 0);
        }), {
          loners: true
        });
        this.throws((Ωpmi__14 = function() {
          return tt.create(t2.lt_constructor_cfg, {
            loners: 7
          });
        }), /validation error/);
        this.throws((Ωpmi__15 = function() {
          return tt.validate(t2.lt_constructor_cfg, {
            loners: 8
          });
        }), /validation error/);
        (() => {
          var contexts, Ωpmi__16, Ωpmi__17, Ωpmi__18, Ωpmi__19;
          contexts = new Set(tt._contexts.keys());
          this.eq((Ωpmi__16 = function() {
            return contexts.has(t.float);
          }), true);
          this.eq((Ωpmi__17 = function() {
            return contexts.has(t2.lt_constructor_cfg);
          }), true);
          this.eq((Ωpmi__18 = function() {
            return contexts.has(t2.lt_constructor_cfg.loners);
          }), true);
          return this.eq((Ωpmi__19 = function() {
            return contexts.has(t.text);
          }), false);
        })();
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
        debug('Ωpmi__20', d);
        debug('Ωpmi__21', d.a);
        debug('Ωpmi__22', d.a.name);
        return debug('Ωpmi__23', d.a());
      };
    })();
  }

}).call(this);

//# sourceMappingURL=test-poor-mans-intertype.js.map