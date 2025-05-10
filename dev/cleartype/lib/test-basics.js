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
    ({CT, std} = require('../../../apps/cleartype'));
    //.........................................................................................................
    lt_types = {
      //.........................................................................................................
      lt_nodelist: {
        $isa: function(x) {
          if (!this.ct.isa(std.list, x)) {
            // 'list.of.nonempty.text'
            return false;
          }
          return x.every((e) => {
            return this.ct.isa(std.nonempty_text, e);
          });
        },
        $create: function(x) {
          if (x != null) {
            return x;
          }
          return [];
        }
      },
      //.........................................................................................................
      lt_constructor_cfg: {
        $isa: function(x) {
          if (!this.ct.isa(std.object, x)) {
            return false;
          }
          if (!this.ct.isa(this.me.loners, x.loners)) {
            return false;
          }
          return true;
        },
        loners: {
          $isa: function(x) {
            return this.ct.isa(std.boolean, x);
          }
        },
        $template: {
          loners: true
        },
        $create: function(x) {
          if (!this.ct.isa_optional(std.object, x)) {
            return x;
          }
          return {...this.me.$template, ...x};
        }
      },
      //.........................................................................................................
      lt_add_cfg: {
        $isa: function(x) {
          if (!this.ct.isa(std.object, x)) {
            return false;
          }
          if (!this.ct.isa(this.me.name, x.name)) {
            return false;
          }
          if (!this.ct.isa(this.me.precedes, x.precedes)) {
            return false;
          }
          if (!this.ct.isa(this.me.needs, x.needs)) {
            return false;
          }
          return true;
        },
        $create: function(x) {
          if (!this.ct.isa_optional(std.object, x)) {
            return x;
          }
          return {...this.me.$template, ...x};
        },
        //.....................................................................................................
        name: {
          $isa: function(x) {
            return this.ct.isa(std.nonempty_text, x);
          }
        },
        precedes: {
          $isa: function(x) {
            return this.ct.isa_optional(lt_types.lt_nodelist, x);
          }
        },
        needs: {
          $isa: function(x) {
            return this.ct.isa_optional(lt_types.lt_nodelist, x);
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
          if (!this.ct.isa(std.object, x)) {
            return false;
          }
          if (!this.ct.isa(this.me.groups, x.groups)) {
            return false;
          }
          return true;
        },
        $create: function(x) {
          if (!this.ct.isa_optional(std.object, x)) {
            return x;
          }
          return {...this.me.$template, ...x};
        },
        //.....................................................................................................
        groups: {
          $isa: function(x) {
            return this.ct.isa(std.boolean, x);
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
        var Cleartype, ct, std, Ωctt__10, Ωctt__11, Ωctt__12, Ωctt__13, Ωctt__14, Ωctt__15, Ωctt__16, Ωctt__17, Ωctt__18, Ωctt___1, Ωctt___2, Ωctt___3, Ωctt___4, Ωctt___5, Ωctt___6, Ωctt___7, Ωctt___8, Ωctt___9;
        ({Cleartype, std} = require('../../../apps/cleartype'));
        ct = new Cleartype();
        //.....................................................................................................
        this.eq((Ωctt___1 = function() {
          return ct.isa(std.primitive, 1);
        }), true);
        this.eq((Ωctt___2 = function() {
          return ct.isa(std.primitive, true);
        }), true);
        this.eq((Ωctt___3 = function() {
          return ct.isa(std.primitive, false);
        }), true);
        this.eq((Ωctt___4 = function() {
          return ct.isa(std.primitive, null);
        }), true);
        this.eq((Ωctt___5 = function() {
          return ct.isa(std.primitive, void 0);
        }), true);
        this.eq((Ωctt___6 = function() {
          return ct.isa(std.primitive, 'text');
        }), true);
        this.eq((Ωctt___7 = function() {
          return ct.isa(std.primitive, []);
        }), false);
        this.eq((Ωctt___8 = function() {
          return ct.isa(std.primitive, {});
        }), false);
        this.eq((Ωctt___9 = function() {
          return ct.isa(std.primitive, (function() {}));
        }), false);
        this.eq((Ωctt__10 = function() {
          return ct.isa(std.primitive, (() => {}));
        }), false);
        //.....................................................................................................
        this.eq((Ωctt__11 = function() {
          return ct.isa(std.integer, 1);
        }), true);
        this.eq((Ωctt__12 = function() {
          return ct.isa(std.integer, 1.1);
        }), false);
        //.....................................................................................................
        this.eq((Ωctt__13 = function() {
          return ct.isa(std.text, 1.1);
        }), false);
        this.eq((Ωctt__14 = function() {
          return ct.isa(std.text, '1.1');
        }), true);
        this.eq((Ωctt__15 = function() {
          return ct.isa(std.text, '');
        }), true);
        this.eq((Ωctt__16 = function() {
          return ct.isa(std.nonempty_text, 1.1);
        }), false);
        this.eq((Ωctt__17 = function() {
          return ct.isa(std.nonempty_text, '1.1');
        }), true);
        this.eq((Ωctt__18 = function() {
          return ct.isa(std.nonempty_text, '');
        }), false);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      isa: function() {
        var Cleartype, lt_types, std, tt, Ωctt__19, Ωctt__20, Ωctt__21, Ωctt__22, Ωctt__23, Ωctt__24, Ωctt__25;
        ({Cleartype, std} = require('../../../apps/cleartype'));
        tt = new Cleartype();
        ({lt_types} = get_typespaces());
        //.....................................................................................................
        this.eq((Ωctt__19 = function() {
          return tt.isa(std.float, true);
        }), false);
        this.eq((Ωctt__20 = function() {
          return tt.isa(std.float, '3');
        }), false);
        this.eq((Ωctt__21 = function() {
          return tt.isa(std.float, 337465);
        }), true);
        this.eq((Ωctt__22 = function() {
          return tt.isa(lt_types.lt_constructor_cfg, 337465);
        }), false);
        this.eq((Ωctt__23 = function() {
          return tt.isa(lt_types.lt_constructor_cfg, {});
        }), false);
        this.eq((Ωctt__24 = function() {
          return tt.isa(lt_types.lt_constructor_cfg, {
            loners: 8
          });
        }), false);
        this.eq((Ωctt__25 = function() {
          return tt.isa(lt_types.lt_constructor_cfg, {
            loners: true
          });
        }), true);
        (() => {
          var contexts, Ωctt__26, Ωctt__27, Ωctt__28, Ωctt__29;
          contexts = new Set(tt._contexts.keys());
          this.eq((Ωctt__26 = function() {
            return contexts.has(std.float);
          }), true);
          this.eq((Ωctt__27 = function() {
            return contexts.has(lt_types.lt_constructor_cfg);
          }), true);
          this.eq((Ωctt__28 = function() {
            return contexts.has(lt_types.lt_constructor_cfg.loners);
          }), true);
          return this.eq((Ωctt__29 = function() {
            return contexts.has(std.text);
          }), false);
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      create: function() {
        var Cleartype, lt_types, std, tt, Ωctt__30, Ωctt__31, Ωctt__32, Ωctt__33;
        ({Cleartype, std} = require('../../../apps/cleartype'));
        tt = new Cleartype();
        ({lt_types} = get_typespaces());
        //.....................................................................................................
        this.eq((Ωctt__30 = function() {
          return tt.create(lt_types.lt_constructor_cfg);
        }), {
          loners: true
        });
        this.eq((Ωctt__31 = function() {
          return tt.create(lt_types.lt_constructor_cfg, null);
        }), {
          loners: true
        });
        this.eq((Ωctt__32 = function() {
          return tt.create(lt_types.lt_constructor_cfg, void 0);
        }), {
          loners: true
        });
        this.throws((Ωctt__33 = function() {
          return tt.create(lt_types.lt_constructor_cfg, {
            loners: 7
          });
        }), /validation error/);
        (() => {
          var contexts, Ωctt__34, Ωctt__35, Ωctt__36;
          contexts = new Set(tt._contexts.keys());
          this.eq((Ωctt__34 = function() {
            return contexts.has(lt_types.lt_constructor_cfg);
          }), true);
          this.eq((Ωctt__35 = function() {
            return contexts.has(lt_types.lt_constructor_cfg.loners);
          }), true);
          return this.eq((Ωctt__36 = function() {
            return contexts.has(std.text);
          }), false);
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      validate: function() {
        var Cleartype, lt_types, std, tt, Ωctt__37, Ωctt__38;
        ({Cleartype, std} = require('../../../apps/cleartype'));
        tt = new Cleartype();
        ({lt_types} = get_typespaces());
        //.....................................................................................................
        this.eq((Ωctt__37 = function() {
          return tt.validate(lt_types.lt_constructor_cfg, {
            loners: true
          });
        }), {
          loners: true
        });
        this.throws((Ωctt__38 = function() {
          return tt.validate(lt_types.lt_constructor_cfg, {
            loners: 8
          });
        }), /validation error/);
        (() => {
          var contexts, Ωctt__39, Ωctt__40, Ωctt__41;
          contexts = new Set(tt._contexts.keys());
          this.eq((Ωctt__39 = function() {
            return contexts.has(lt_types.lt_constructor_cfg);
          }), true);
          this.eq((Ωctt__40 = function() {
            return contexts.has(lt_types.lt_constructor_cfg.loners);
          }), true);
          return this.eq((Ωctt__41 = function() {
            return contexts.has(std.text);
          }), false);
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      instance_methods_are_bound: function() {
        var Cleartype, create, isa, isa_optional, lt_types, std, validate, validate_optional, Ωctt__42, Ωctt__43, Ωctt__44, Ωctt__45, Ωctt__46, Ωctt__47;
        ({Cleartype, std} = require('../../../apps/cleartype'));
        ({lt_types} = get_typespaces());
        ({isa, isa_optional, create, validate, validate_optional} = new Cleartype());
        //.....................................................................................................
        this.eq((Ωctt__42 = function() {
          return isa(std.float, 337465);
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
      exported_methods_are_bound: function() {
        var Cleartype, create, isa, isa_optional, lt_types, std, validate, validate_optional, Ωctt__48, Ωctt__49, Ωctt__50, Ωctt__51, Ωctt__52, Ωctt__53;
        ({Cleartype, std} = require('../../../apps/cleartype'));
        ({lt_types} = get_typespaces());
        ({isa, isa_optional, create, validate, validate_optional} = require('../../../apps/cleartype'));
        //.....................................................................................................
        this.eq((Ωctt__48 = function() {
          return isa(std.float, 337465);
        }), true);
        this.eq((Ωctt__49 = function() {
          return isa(lt_types.lt_constructor_cfg, 337465);
        }), false);
        this.eq((Ωctt__50 = function() {
          return create(lt_types.lt_constructor_cfg, void 0);
        }), {
          loners: true
        });
        this.throws((Ωctt__51 = function() {
          return create(lt_types.lt_constructor_cfg, {
            loners: 7
          });
        }), /validation error/);
        this.eq((Ωctt__52 = function() {
          return validate(lt_types.lt_constructor_cfg, {
            loners: true
          });
        }), {
          loners: true
        });
        this.throws((Ωctt__53 = function() {
          return validate(lt_types.lt_constructor_cfg, {
            loners: 8
          });
        }), /validation error/);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      exported_methods_can_accessed_via_CT: function() {
        var CT, create, isa, isa_optional, validate, validate_optional, Ωctt__54, Ωctt__55, Ωctt__56, Ωctt__57, Ωctt__58;
        ({CT, isa, isa_optional, create, validate, validate_optional} = require('../../../apps/cleartype'));
        //.....................................................................................................
        this.eq((Ωctt__54 = function() {
          return isa === CT.isa;
        }), true);
        this.eq((Ωctt__55 = function() {
          return isa_optional === CT.isa_optional;
        }), true);
        this.eq((Ωctt__56 = function() {
          return validate === CT.validate;
        }), true);
        this.eq((Ωctt__57 = function() {
          return validate_optional === CT.validate_optional;
        }), true);
        this.eq((Ωctt__58 = function() {
          return create === CT.create;
        }), true);
        //.....................................................................................................
        return null;
      }
    },
    //=========================================================================================================
    lt_types: {
      //-------------------------------------------------------------------------------------------------------
      lt_constructor_cfg: function() {
        var Cleartype, create, isa, isa_optional, lt_types, std, validate, validate_optional, Ωctt__59, Ωctt__60, Ωctt__61, Ωctt__62, Ωctt__63, Ωctt__64, Ωctt__65, Ωctt__66, Ωctt__67, Ωctt__68;
        ({Cleartype, std} = require('../../../apps/cleartype'));
        ({lt_types} = get_typespaces());
        ({isa, isa_optional, create, validate, validate_optional} = require('../../../apps/cleartype'));
        //.....................................................................................................
        this.eq((Ωctt__59 = function() {
          return isa(lt_types.lt_constructor_cfg, 337465);
        }), false);
        this.eq((Ωctt__60 = function() {
          return isa_optional(lt_types.lt_constructor_cfg, 337465);
        }), false);
        this.eq((Ωctt__61 = function() {
          return isa_optional(lt_types.lt_constructor_cfg, null);
        }), true);
        this.eq((Ωctt__62 = function() {
          return create(lt_types.lt_constructor_cfg, void 0);
        }), {
          loners: true
        });
        this.throws((Ωctt__63 = function() {
          return create(lt_types.lt_constructor_cfg, {
            loners: 7
          });
        }), /validation error/);
        this.eq((Ωctt__64 = function() {
          return validate_optional(lt_types.lt_constructor_cfg, {
            loners: true
          });
        }), {
          loners: true
        });
        this.eq((Ωctt__65 = function() {
          return validate_optional(lt_types.lt_constructor_cfg, null);
        }), null);
        this.eq((Ωctt__66 = function() {
          return validate(lt_types.lt_constructor_cfg, {
            loners: true
          });
        }), {
          loners: true
        });
        this.throws((Ωctt__67 = function() {
          return validate(lt_types.lt_constructor_cfg, {
            loners: 8
          });
        }), /validation error/);
        this.throws((Ωctt__68 = function() {
          return validate_optional(lt_types.lt_constructor_cfg, {
            loners: 8
          });
        }), /validation error/);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      lt_nodelist: function() {
        var Cleartype, create, isa, isa_optional, lt_types, std, validate, validate_optional, Ωctt__69, Ωctt__70, Ωctt__71, Ωctt__72, Ωctt__73, Ωctt__74, Ωctt__75, Ωctt__76, Ωctt__77, Ωctt__78;
        ({Cleartype, std} = require('../../../apps/cleartype'));
        ({lt_types} = get_typespaces());
        ({isa, isa_optional, create, validate, validate_optional} = require('../../../apps/cleartype'));
        //.....................................................................................................
        this.eq((Ωctt__69 = function() {
          return isa(lt_types.lt_nodelist, 337465);
        }), false);
        this.eq((Ωctt__70 = function() {
          return isa(lt_types.lt_nodelist, []);
        }), true);
        this.eq((Ωctt__71 = function() {
          return isa(lt_types.lt_nodelist, ['name']);
        }), true);
        this.eq((Ωctt__72 = function() {
          return isa(lt_types.lt_nodelist, ['name', 3]);
        }), false);
        this.eq((Ωctt__73 = function() {
          return isa_optional(lt_types.lt_nodelist, 337465);
        }), false);
        this.eq((Ωctt__74 = function() {
          return isa_optional(lt_types.lt_nodelist, null);
        }), true);
        this.eq((Ωctt__75 = function() {
          return create(lt_types.lt_nodelist, void 0);
        }), []);
        this.throws((Ωctt__76 = function() {
          return create(lt_types.lt_nodelist, {
            loners: 7
          });
        }), /validation error/);
        this.eq((Ωctt__77 = function() {
          return validate_optional(lt_types.lt_nodelist, []);
        }), []);
        this.eq((Ωctt__78 = function() {
          return validate_optional(lt_types.lt_nodelist, null);
        }), null);
        // @eq (     Ωctt__79 = -> validate          lt_types.lt_nodelist, { loners: true, }  ), { loners: true, }
        // @throws ( Ωctt__80 = -> validate          lt_types.lt_nodelist, { loners: 8, }     ), /validation error/
        // @throws ( Ωctt__81 = -> validate_optional lt_types.lt_nodelist, { loners: 8, }     ), /validation error/
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      lt_add_cfg: function() {
        var Cleartype, create, isa, isa_optional, lt_types, std, validate, validate_optional, Ωctt__82, Ωctt__83, Ωctt__84, Ωctt__85, Ωctt__86, Ωctt__87, Ωctt__88, Ωctt__89, Ωctt__90, Ωctt__91, Ωctt__92, Ωctt__93, Ωctt__94, Ωctt__95, Ωctt__96, Ωctt__97, Ωctt__98, Ωctt__99;
        ({Cleartype, std} = require('../../../apps/cleartype'));
        ({lt_types} = get_typespaces());
        ({isa, isa_optional, create, validate, validate_optional} = require('../../../apps/cleartype'));
        //.....................................................................................................
        this.eq((Ωctt__82 = function() {
          return isa(lt_types.lt_add_cfg.name, 337465);
        }), false);
        this.eq((Ωctt__83 = function() {
          return isa(lt_types.lt_add_cfg.name, '');
        }), false);
        this.eq((Ωctt__84 = function() {
          return isa(lt_types.lt_add_cfg.name, 'foo');
        }), true);
        this.eq((Ωctt__85 = function() {
          return isa(lt_types.lt_add_cfg.needs, 337465);
        }), false);
        this.eq((Ωctt__86 = function() {
          return isa(lt_types.lt_add_cfg.needs, [337465]);
        }), false);
        this.eq((Ωctt__87 = function() {
          return isa(lt_types.lt_add_cfg.needs, ['337465']);
        }), true);
        this.eq((Ωctt__88 = function() {
          return isa(lt_types.lt_add_cfg.needs, []);
        }), true);
        this.eq((Ωctt__89 = function() {
          return isa(lt_types.lt_add_cfg.precedes, 337465);
        }), false);
        this.eq((Ωctt__90 = function() {
          return isa(lt_types.lt_add_cfg.precedes, [337465]);
        }), false);
        this.eq((Ωctt__91 = function() {
          return isa(lt_types.lt_add_cfg.precedes, []);
        }), true);
        this.eq((Ωctt__92 = function() {
          return isa(lt_types.lt_add_cfg.precedes, ['337465']);
        }), true);
        this.eq((Ωctt__93 = function() {
          return isa(lt_types.lt_add_cfg, 337465);
        }), false);
        this.eq((Ωctt__94 = function() {
          return isa(lt_types.lt_add_cfg, {});
        }), false);
        this.eq((Ωctt__95 = function() {
          return isa(lt_types.lt_add_cfg, {
            name: 'g',
            precedes: null,
            needs: null
          });
        }), true);
        this.eq((Ωctt__96 = function() {
          return isa(lt_types.lt_add_cfg, {
            name: 'g',
            precedes: [],
            needs: ['name']
          });
        }), true);
        this.eq((Ωctt__97 = function() {
          return isa(lt_types.lt_add_cfg, {
            name: 'g',
            precedes: [],
            needs: ['name', 3]
          });
        }), false);
        this.eq((Ωctt__98 = function() {
          return create(lt_types.lt_add_cfg, {
            name: 'g',
            precedes: [],
            needs: ['name']
          });
        }), {
          name: 'g',
          precedes: [],
          needs: ['name']
        });
        this.eq((Ωctt__99 = function() {
          return create(lt_types.lt_add_cfg, {
            name: 'g'
          });
        }), {
          name: 'g',
          precedes: null,
          needs: null
        });
        // @eq (     Ωctt_100 = -> isa_optional      lt_types.lt_add_cfg, 337465              ), false
        // @eq (     Ωctt_101 = -> isa_optional      lt_types.lt_add_cfg, null                ), true
        // @eq (     Ωctt_102 = -> create            lt_types.lt_add_cfg, undefined           ), []
        // @throws ( Ωctt_103 = -> create            lt_types.lt_add_cfg, { loners: 7, }      ), /validation error/
        // @eq (     Ωctt_104 = -> validate_optional lt_types.lt_add_cfg, []                  ), []
        // @eq (     Ωctt_105 = -> validate_optional lt_types.lt_add_cfg, null                ), null
        // @eq (     Ωctt_106 = -> validate          lt_types.lt_add_cfg, { loners: true, }  ), { loners: true, }
        // @throws ( Ωctt_107 = -> validate          lt_types.lt_add_cfg, { loners: 8, }     ), /validation error/
        // @throws ( Ωctt_108 = -> validate_optional lt_types.lt_add_cfg, { loners: 8, }     ), /validation error/
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      lt_linearize_cfg: function() {
        var Cleartype, create, isa, isa_optional, lt_types, std, validate, validate_optional, Ωctt_109, Ωctt_110, Ωctt_111, Ωctt_112, Ωctt_113, Ωctt_114, Ωctt_115, Ωctt_116, Ωctt_117;
        ({Cleartype, std} = require('../../../apps/cleartype'));
        ({lt_types} = get_typespaces());
        ({isa, isa_optional, create, validate, validate_optional} = require('../../../apps/cleartype'));
        //.....................................................................................................
        this.eq((Ωctt_109 = function() {
          return isa(lt_types.lt_linearize_cfg, 337465);
        }), false);
        this.eq((Ωctt_110 = function() {
          return isa(lt_types.lt_linearize_cfg, {});
        }), false);
        this.eq((Ωctt_111 = function() {
          return isa(lt_types.lt_linearize_cfg, {
            groups: 5
          });
        }), false);
        this.eq((Ωctt_112 = function() {
          return isa(lt_types.lt_linearize_cfg, {
            groups: true
          });
        }), true);
        this.eq((Ωctt_113 = function() {
          return isa(lt_types.lt_linearize_cfg, {
            groups: false
          });
        }), true);
        this.eq((Ωctt_114 = function() {
          return create(lt_types.lt_linearize_cfg, {
            groups: true
          });
        }), {
          groups: true
        });
        this.eq((Ωctt_115 = function() {
          return create(lt_types.lt_linearize_cfg, {
            groups: false
          });
        }), {
          groups: false
        });
        this.eq((Ωctt_116 = function() {
          return create(lt_types.lt_linearize_cfg, {});
        }), {
          groups: false
        });
        this.eq((Ωctt_117 = function() {
          return create(lt_types.lt_linearize_cfg, null);
        }), {
          groups: false
        });
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
      return function() {        // ( new Test { throw_on_error: false, } ).test @cleartype_tasks
        // ( new Test { throw_on_error: true, } ).test { mvp_isa: @cleartype_tasks.MVP.isa, }
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
        debug('Ωctt_118', d);
        debug('Ωctt_119', d.a);
        debug('Ωctt_120', d.a.name);
        return debug('Ωctt_121', d.a());
      };
    })();
  }

}).call(this);

//# sourceMappingURL=test-basics.js.map