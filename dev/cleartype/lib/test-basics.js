(async function() {
  'use strict';
  var GTNG, GUY, Test, alert, debug, echo, get_typespaces, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('intertype/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  /*

   * from `ltsort` which uses an outdated version of `intertype`:

  get_base_types = ->
    return base_types if base_types?
    #.........................................................................................................
    base_types                = new Cleartype()
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
  get_typespaces = function() {
    var CT, lt_types, std;
    ({
      CT,
      TMP_typespace1: std
    } = require('../../../apps/cleartype'));
    //.........................................................................................................
    lt_types = {
      //.........................................................................................................
      lt_nodelist: {
        $isa: function(x) {
          if (!this.types.isa(std.list, x)) {
            // 'list.of.nonempty.text'
            return false;
          }
          return x.every(function(e) {
            return this.types.isa(std.nonempty_text, e);
          });
        }
      },
      //.........................................................................................................
      lt_constructor_cfg: {
        $isa: function(x) {
          if (!this.types.isa(std.object, x)) {
            return false;
          }
          if (!this.types.isa(this.me.loners, x.loners)) {
            return false;
          }
          return true;
        },
        loners: {
          $isa: function(x) {
            return this.types.isa(std.boolean, x);
          }
        },
        $template: {
          loners: true
        },
        $create: function(x) {
          if (!this.types.isa_optional(std.object, x)) {
            return x;
          }
          return {...this.me.$template, ...x};
        }
      },
      //.........................................................................................................
      lt_add_cfg: {
        $isa: function(x) {
          if (!this.types.isa(std.object, x)) {
            return false;
          }
          if (!this.types.isa(this.me.name, x.name)) {
            return false;
          }
          if (!this.types.isa(this.me.precedes, x.precedes)) {
            return false;
          }
          if (!this.types.isa(this.me.needs, x.needs)) {
            return false;
          }
          return true;
        },
        $create: function(x) {
          if (!this.types.isa_optional(std.object, x)) {
            return x;
          }
          return {...this.me.$template, ...x};
        },
        //.....................................................................................................
        name: {
          $isa: function(x) {
            return this.types.isa(std.nonempty_text);
          }
        },
        precedes: {
          $isa: function(x) {
            return this.types.isa_optional(lt_types.lt_nodelist);
          }
        },
        needs: {
          $isa: function(x) {
            return this.types.isa_optional(lt_types.lt_nodelist);
          }
        },
        $template: {
          name: null,
          precedes: null,
          needs: null
        }
      },
      //.........................................................................................................
      lt_linearize_cfg: {
        $isa: function(x) {
          if (!this.types.isa(std.object, x)) {
            return false;
          }
          if (!this.types.isa(this.me.groups, x.groups)) {
            return false;
          }
          return true;
        },
        $create: function(x) {
          if (!this.types.isa_optional(std.object, x)) {
            return x;
          }
          return {...this.me.$template, ...x};
        },
        //.....................................................................................................
        groups: {
          $isa: function(x) {
            return this.types.isa(std.boolean, x);
          }
        },
        $template: {
          groups: false
        }
      }
    };
    //.........................................................................................................
    return {lt_types};
  };

  //###########################################################################################################

  //===========================================================================================================
  this.cleartype_tasks = {
    //=========================================================================================================
    basics: {
      //-------------------------------------------------------------------------------------------------------
      builtins: function() {
        var Cleartype, TMP_typespace1, ct, Ωctt__10, Ωctt__11, Ωctt__12, Ωctt___1, Ωctt___2, Ωctt___3, Ωctt___4, Ωctt___5, Ωctt___6, Ωctt___7, Ωctt___8, Ωctt___9;
        ({Cleartype, TMP_typespace1} = require('../../../apps/cleartype'));
        ct = new Cleartype();
        //.....................................................................................................
        this.eq((Ωctt___1 = function() {
          return ct.isa(TMP_typespace1.primitive, 1);
        }), true);
        this.eq((Ωctt___2 = function() {
          return ct.isa(TMP_typespace1.primitive, true);
        }), true);
        this.eq((Ωctt___3 = function() {
          return ct.isa(TMP_typespace1.primitive, false);
        }), true);
        this.eq((Ωctt___4 = function() {
          return ct.isa(TMP_typespace1.primitive, null);
        }), true);
        this.eq((Ωctt___5 = function() {
          return ct.isa(TMP_typespace1.primitive, void 0);
        }), true);
        this.eq((Ωctt___6 = function() {
          return ct.isa(TMP_typespace1.primitive, 'text');
        }), true);
        this.eq((Ωctt___7 = function() {
          return ct.isa(TMP_typespace1.primitive, []);
        }), false);
        this.eq((Ωctt___8 = function() {
          return ct.isa(TMP_typespace1.primitive, {});
        }), false);
        this.eq((Ωctt___9 = function() {
          return ct.isa(TMP_typespace1.primitive, (function() {}));
        }), false);
        this.eq((Ωctt__10 = function() {
          return ct.isa(TMP_typespace1.primitive, (() => {}));
        }), false);
        //.....................................................................................................
        this.eq((Ωctt__11 = function() {
          return ct.isa(TMP_typespace1.integer, 1);
        }), true);
        this.eq((Ωctt__12 = function() {
          return ct.isa(TMP_typespace1.integer, 1.1);
        }), false);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      isa: function() {
        var Cleartype, TMP_typespace1, lt_types, tt, Ωctt__13, Ωctt__14, Ωctt__15, Ωctt__16, Ωctt__17, Ωctt__18, Ωctt__19;
        ({Cleartype, TMP_typespace1} = require('../../../apps/cleartype'));
        tt = new Cleartype();
        ({lt_types} = get_typespaces());
        //.....................................................................................................
        this.eq((Ωctt__13 = function() {
          return tt.isa(TMP_typespace1.float, true);
        }), false);
        this.eq((Ωctt__14 = function() {
          return tt.isa(TMP_typespace1.float, '3');
        }), false);
        this.eq((Ωctt__15 = function() {
          return tt.isa(TMP_typespace1.float, 337465);
        }), true);
        this.eq((Ωctt__16 = function() {
          return tt.isa(lt_types.lt_constructor_cfg, 337465);
        }), false);
        this.eq((Ωctt__17 = function() {
          return tt.isa(lt_types.lt_constructor_cfg, {});
        }), false);
        this.eq((Ωctt__18 = function() {
          return tt.isa(lt_types.lt_constructor_cfg, {
            loners: 8
          });
        }), false);
        this.eq((Ωctt__19 = function() {
          return tt.isa(lt_types.lt_constructor_cfg, {
            loners: true
          });
        }), true);
        (() => {
          var contexts, Ωctt__20, Ωctt__21, Ωctt__22, Ωctt__23;
          contexts = new Set(tt._contexts.keys());
          this.eq((Ωctt__20 = function() {
            return contexts.has(TMP_typespace1.float);
          }), true);
          this.eq((Ωctt__21 = function() {
            return contexts.has(lt_types.lt_constructor_cfg);
          }), true);
          this.eq((Ωctt__22 = function() {
            return contexts.has(lt_types.lt_constructor_cfg.loners);
          }), true);
          return this.eq((Ωctt__23 = function() {
            return contexts.has(TMP_typespace1.text);
          }), false);
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      create: function() {
        var Cleartype, TMP_typespace1, lt_types, tt, Ωctt__24, Ωctt__25, Ωctt__26, Ωctt__27;
        ({Cleartype, TMP_typespace1} = require('../../../apps/cleartype'));
        tt = new Cleartype();
        ({lt_types} = get_typespaces());
        //.....................................................................................................
        this.eq((Ωctt__24 = function() {
          return tt.create(lt_types.lt_constructor_cfg);
        }), {
          loners: true
        });
        this.eq((Ωctt__25 = function() {
          return tt.create(lt_types.lt_constructor_cfg, null);
        }), {
          loners: true
        });
        this.eq((Ωctt__26 = function() {
          return tt.create(lt_types.lt_constructor_cfg, void 0);
        }), {
          loners: true
        });
        this.throws((Ωctt__27 = function() {
          return tt.create(lt_types.lt_constructor_cfg, {
            loners: 7
          });
        }), /validation error/);
        (() => {
          var contexts, Ωctt__28, Ωctt__29, Ωctt__30;
          contexts = new Set(tt._contexts.keys());
          this.eq((Ωctt__28 = function() {
            return contexts.has(lt_types.lt_constructor_cfg);
          }), true);
          this.eq((Ωctt__29 = function() {
            return contexts.has(lt_types.lt_constructor_cfg.loners);
          }), true);
          return this.eq((Ωctt__30 = function() {
            return contexts.has(TMP_typespace1.text);
          }), false);
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      validate: function() {
        var Cleartype, TMP_typespace1, lt_types, tt, Ωctt__31, Ωctt__32;
        ({Cleartype, TMP_typespace1} = require('../../../apps/cleartype'));
        tt = new Cleartype();
        ({lt_types} = get_typespaces());
        //.....................................................................................................
        this.eq((Ωctt__31 = function() {
          return tt.validate(lt_types.lt_constructor_cfg, {
            loners: true
          });
        }), {
          loners: true
        });
        this.throws((Ωctt__32 = function() {
          return tt.validate(lt_types.lt_constructor_cfg, {
            loners: 8
          });
        }), /validation error/);
        (() => {
          var contexts, Ωctt__33, Ωctt__34, Ωctt__35;
          contexts = new Set(tt._contexts.keys());
          this.eq((Ωctt__33 = function() {
            return contexts.has(lt_types.lt_constructor_cfg);
          }), true);
          this.eq((Ωctt__34 = function() {
            return contexts.has(lt_types.lt_constructor_cfg.loners);
          }), true);
          return this.eq((Ωctt__35 = function() {
            return contexts.has(TMP_typespace1.text);
          }), false);
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      instance_methods_are_bound: function() {
        var Cleartype, TMP_typespace1, create, isa, isa_optional, lt_types, validate, validate_optional, Ωctt__36, Ωctt__37, Ωctt__38, Ωctt__39, Ωctt__40, Ωctt__41;
        ({Cleartype, TMP_typespace1} = require('../../../apps/cleartype'));
        ({lt_types} = get_typespaces());
        ({isa, isa_optional, create, validate, validate_optional} = new Cleartype());
        //.....................................................................................................
        this.eq((Ωctt__36 = function() {
          return isa(TMP_typespace1.float, 337465);
        }), true);
        this.eq((Ωctt__37 = function() {
          return isa(lt_types.lt_constructor_cfg, 337465);
        }), false);
        this.eq((Ωctt__38 = function() {
          return create(lt_types.lt_constructor_cfg, void 0);
        }), {
          loners: true
        });
        this.throws((Ωctt__39 = function() {
          return create(lt_types.lt_constructor_cfg, {
            loners: 7
          });
        }), /validation error/);
        this.eq((Ωctt__40 = function() {
          return validate(lt_types.lt_constructor_cfg, {
            loners: true
          });
        }), {
          loners: true
        });
        this.throws((Ωctt__41 = function() {
          return validate(lt_types.lt_constructor_cfg, {
            loners: 8
          });
        }), /validation error/);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      exported_methods_are_bound: function() {
        var Cleartype, TMP_typespace1, create, isa, isa_optional, lt_types, validate, validate_optional, Ωctt__42, Ωctt__43, Ωctt__44, Ωctt__45, Ωctt__46, Ωctt__47;
        ({Cleartype, TMP_typespace1} = require('../../../apps/cleartype'));
        ({lt_types} = get_typespaces());
        ({isa, isa_optional, create, validate, validate_optional} = require('../../../apps/cleartype'));
        //.....................................................................................................
        this.eq((Ωctt__42 = function() {
          return isa(TMP_typespace1.float, 337465);
        }), true);
        this.eq((Ωctt__43 = function() {
          return isa(lt_types.lt_constructor_cfg, 337465);
        }), false);
        this.eq((Ωctt__44 = function() {
          return create(lt_types.lt_constructor_cfg, void 0);
        }), {
          loners: true
        });
        this.throws((Ωctt__45 = function() {
          return create(lt_types.lt_constructor_cfg, {
            loners: 7
          });
        }), /validation error/);
        this.eq((Ωctt__46 = function() {
          return validate(lt_types.lt_constructor_cfg, {
            loners: true
          });
        }), {
          loners: true
        });
        this.throws((Ωctt__47 = function() {
          return validate(lt_types.lt_constructor_cfg, {
            loners: 8
          });
        }), /validation error/);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      exported_methods_can_accessed_via_CT: function() {
        var CT, create, isa, isa_optional, validate, validate_optional, Ωctt__48, Ωctt__49, Ωctt__50, Ωctt__51, Ωctt__52;
        ({CT, isa, isa_optional, create, validate, validate_optional} = require('../../../apps/cleartype'));
        //.....................................................................................................
        this.eq((Ωctt__48 = function() {
          return isa === CT.isa;
        }), true);
        this.eq((Ωctt__49 = function() {
          return isa_optional === CT.isa_optional;
        }), true);
        this.eq((Ωctt__50 = function() {
          return validate === CT.validate;
        }), true);
        this.eq((Ωctt__51 = function() {
          return validate_optional === CT.validate_optional;
        }), true);
        this.eq((Ωctt__52 = function() {
          return create === CT.create;
        }), true);
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
      })).test(this.cleartype_tasks);
      return function() {        // ( new Test { throw_on_error: true, } ).test { mvp_isa: @cleartype_tasks.MVP.isa, }
        // ( new Test { throw_on_error: true, } ).test { instance_methods_are_bound: @cleartype_tasks.basics.instance_methods_are_bound, }
        var d;
        d = {
          a: function() {
            return {
              foo: 1,
              bar: 2
            };
          }
        };
        debug('Ωctt__53', d);
        debug('Ωctt__54', d.a);
        debug('Ωctt__55', d.a.name);
        return debug('Ωctt__56', d.a());
      };
    })();
  }

}).call(this);

//# sourceMappingURL=test-basics.js.map