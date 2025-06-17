(async function() {
  'use strict';
  var GTNG, GUY, Test, alert, debug, echo, f, get_typespaces, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('intertype/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  ({f} = require('../../../apps/effstring'));

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
    basics: function() {
      var Type, std, std2, type, typename;
      ({Type, std2, std} = require('../../../apps/cleartype'));
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
        var Ωcltt__14, Ωcltt__15, Ωcltt__16, Ωcltt__17, Ωcltt__18, Ωcltt__19, Ωcltt__20;
        this.eq((Ωcltt__14 = function() {
          return std.text instanceof Type;
        }), true);
        this.eq((Ωcltt__15 = function() {
          return std.float instanceof Type;
        }), true);
        this.eq((Ωcltt__16 = function() {
          return std.integer instanceof Type;
        }), true);
        this.eq((Ωcltt__17 = function() {
          return std.nonempty_text instanceof Type;
        }), true);
        this.eq((Ωcltt__18 = function() {
          return std.quantity_q instanceof Type;
        }), true);
        this.eq((Ωcltt__19 = function() {
          return std.quantity_u instanceof Type;
        }), true);
        return this.eq((Ωcltt__20 = function() {
          return std.quantity instanceof Type;
        }), true);
      })();
      (() => {
        var Ωcltt__21, Ωcltt__22, Ωcltt__23, Ωcltt__24, Ωcltt__25, Ωcltt__26, Ωcltt__27;
        this.eq((Ωcltt__21 = function() {
          return std.text.constructor.name;
        }), 'Text');
        this.eq((Ωcltt__22 = function() {
          return std.float.constructor.name;
        }), 'Float');
        this.eq((Ωcltt__23 = function() {
          return std.integer.constructor.name;
        }), 'Integer');
        this.eq((Ωcltt__24 = function() {
          return std.nonempty_text.constructor.name;
        }), 'Nonempty_text');
        this.eq((Ωcltt__25 = function() {
          return std.quantity_q.constructor.name;
        }), 'Quantity_q');
        this.eq((Ωcltt__26 = function() {
          return std.quantity_u.constructor.name;
        }), 'Quantity_u');
        return this.eq((Ωcltt__27 = function() {
          return std.quantity.constructor.name;
        }), 'Quantity');
      })();
      (() => {
        var Ωcltt__28, Ωcltt__29, Ωcltt__30, Ωcltt__31, Ωcltt__32, Ωcltt__33, Ωcltt__34;
        this.eq((Ωcltt__28 = function() {
          return std.text.isa.name;
        }), 'isa_text');
        this.eq((Ωcltt__29 = function() {
          return std.float.isa.name;
        }), 'isa_float');
        this.eq((Ωcltt__30 = function() {
          return std.integer.isa.name;
        }), 'isa_integer');
        this.eq((Ωcltt__31 = function() {
          return std.nonempty_text.isa.name;
        }), 'isa_nonempty_text');
        this.eq((Ωcltt__32 = function() {
          return std.quantity_q.isa.name;
        }), 'isa_quantity_q');
        this.eq((Ωcltt__33 = function() {
          return std.quantity_u.isa.name;
        }), 'isa_quantity_u');
        return this.eq((Ωcltt__34 = function() {
          return std.quantity.isa.name;
        }), 'isa_quantity');
      })();
      (() => {
        var Ωcltt__35, Ωcltt__36, Ωcltt__37, Ωcltt__38, Ωcltt__39, Ωcltt__40, Ωcltt__41;
        this.eq((Ωcltt__35 = function() {
          return std.text.isa(null);
        }), false);
        this.eq((Ωcltt__36 = function() {
          return std.float.isa(null);
        }), false);
        this.eq((Ωcltt__37 = function() {
          return std.integer.isa(null);
        }), false);
        this.eq((Ωcltt__38 = function() {
          return std.nonempty_text.isa(null);
        }), false);
        this.eq((Ωcltt__39 = function() {
          return std.quantity_q.isa(null);
        }), false);
        this.eq((Ωcltt__40 = function() {
          return std.quantity_u.isa(null);
        }), false);
        return this.eq((Ωcltt__41 = function() {
          return std.quantity.isa(null);
        }), false);
      })();
      (() => {
        var Ωcltt__42, Ωcltt__43, Ωcltt__44, Ωcltt__45, Ωcltt__46, Ωcltt__47, Ωcltt__48;
        this.eq((Ωcltt__42 = function() {
          return std.text.isa(2e308);
        }), false);
        this.eq((Ωcltt__43 = function() {
          return std.float.isa(2e308);
        }), false);
        this.eq((Ωcltt__44 = function() {
          return std.integer.isa(2e308);
        }), false);
        this.eq((Ωcltt__45 = function() {
          return std.nonempty_text.isa(2e308);
        }), false);
        this.eq((Ωcltt__46 = function() {
          return std.quantity_q.isa(2e308);
        }), false);
        this.eq((Ωcltt__47 = function() {
          return std.quantity_u.isa(2e308);
        }), false);
        return this.eq((Ωcltt__48 = function() {
          return std.quantity.isa(2e308);
        }), false);
      })();
      (() => {
        var Ωcltt__49, Ωcltt__50, Ωcltt__51, Ωcltt__52, Ωcltt__56, Ωcltt__57, Ωcltt__58;
        this.eq((Ωcltt__49 = function() {
          return std.text.isa('');
        }), true);
        this.eq((Ωcltt__50 = function() {
          return std.float.isa(7.56);
        }), true);
        this.eq((Ωcltt__51 = function() {
          return std.integer.isa(9);
        }), true);
        this.eq((Ωcltt__52 = function() {
          return std.nonempty_text.isa('www');
        }), true);
        this.eq((Ωcltt__56 = function() {
          return std.quantity_q.isa(1.5e32);
        }), true);
        this.eq((Ωcltt__57 = function() {
          return std.quantity_u.isa('km');
        }), true);
        return this.eq((Ωcltt__58 = function() {
          return std.quantity.isa({
            q: 1.5e32,
            u: 'km'
          });
        }), true);
      })();
      (() => {
        var Ωcltt__60, Ωcltt__61, Ωcltt__62, Ωcltt__63, Ωcltt__64, Ωcltt__65;
        echo();
        info('Ω__59', std.nonempty_text);
        this.eq((Ωcltt__60 = function() {
          return std.nonempty_text.isa(3.141);
        }), false);
        this.eq((Ωcltt__61 = function() {
          return std.nonempty_text.isa('');
        }), false);
        this.eq((Ωcltt__62 = function() {
          return std.nonempty_text.isa('d');
        }), true);
        this.eq((Ωcltt__63 = function() {
          return std.nonempty_text.create();
        }), '');
        this.eq((Ωcltt__64 = function() {
          return std.nonempty_text.create(false);
        }), 'false');
        return this.eq((Ωcltt__65 = function() {
          return std.nonempty_text.create('d');
        }), 'd');
      })();
      (() => {
        var Ωcltt__67, Ωcltt__68;
        echo();
        info('Ω__66', std.quantity);
        this.eq((Ωcltt__67 = function() {
          return std.quantity.create();
        }), {
          q: 0,
          u: 'u'
        });
        this.eq((Ωcltt__68 = function() {
          return std.quantity.create({
            q: 4.3,
            u: 's'
          });
        }), {
          q: 4.3,
          u: 's'
        });
        info('Ω__69', std.nonempty_text.create('g'));
        info('Ω__70', std.quantity_u.create('g'));
        return info('Ω__71', std.quantity.fields.u.create('g'));
      })();
      (() => {
        var Ωcltt__80, Ωcltt__81, Ωcltt__82, Ωcltt__83, Ωcltt__89, Ωcltt__90;
        echo();
        help('Ω__72', std.quantity);
        help('Ω__73', std.quantity.constructor);
        help('Ω__74', std.quantity.constructor.name);
        help('Ω__75', std.quantity.isa);
        help('Ω__76', std.quantity.isa({}));
        help('Ω__77', std.quantity.isa({
          u: 7,
          q: 3
        }));
        help('Ω__78', std.quantity.isa({
          u: '7',
          q: 3
        }));
        help('Ω__79', std.quantity.isa({
          u: '7',
          q: 2e308
        }));
        this.eq((Ωcltt__80 = function() {
          return std.quantity.name;
        }), 'quantity');
        this.eq((Ωcltt__81 = function() {
          return std.integer.name;
        }), 'integer');
        this.eq((Ωcltt__82 = function() {
          return std.quantity_q.name;
        }), 'quantity_q');
        this.eq((Ωcltt__83 = function() {
          return std.quantity_u.name;
        }), 'quantity_u');
        echo();
        help('Ω__84', std.text.isa);
        help('Ω__85', std.text.isa('abc'));
        help('Ω__86', std.text.isa(Array.from('abc')));
        echo();
        help('Ω__87', std.nonempty_text);
        help('Ω__88', std.nonempty_text.isa);
        this.eq((Ωcltt__89 = function() {
          return std.nonempty_text.isa('abc');
        }), true);
        this.eq((Ωcltt__90 = function() {
          return std.nonempty_text.isa(Array.from('abc'));
        }), false);
        return null;
      })();
      (() => {
        var type, typename, Ωcltt__91;
        echo();
        for (typename in std) {
          type = std[typename];
          this.eq((Ωcltt__91 = function() {
            return type.isa.name;
          }), `isa_${typename}`);
        }
        return null;
      })();
//.......................................................................................................
      for (typename in std) {
        type = std[typename];
        urge('Ω__92', f`${typename}:<20c; ${type.constructor.name}:<20c; ${type.isa.name}:<20c;`);
      }
      return null;
    },
    // #=========================================================================================================
    // lt_types:

    //   #-------------------------------------------------------------------------------------------------------
    //   lt_constructor_cfg: ->
    //     { Cleartype
    //       std } = require '../../../apps/cleartype'
    //     { lt_types }  = get_typespaces()
    //     { isa
    //       isa_optional
    //       create
    //       validate
    //       validate_optional } = require '../../../apps/cleartype'
    //     #.....................................................................................................
    //     @eq (     Ωctt__59 = -> isa               lt_types.lt_constructor_cfg, 337465             ), false
    //     @eq (     Ωctt__60 = -> isa_optional      lt_types.lt_constructor_cfg, 337465             ), false
    //     @eq (     Ωctt__61 = -> isa_optional      lt_types.lt_constructor_cfg, null               ), true
    //     @eq (     Ωctt__62 = -> create            lt_types.lt_constructor_cfg, undefined          ), { loners: true, }
    //     @throws ( Ωctt__63 = -> create            lt_types.lt_constructor_cfg, { loners: 7, }     ), /validation error/
    //     @eq (     Ωctt__64 = -> validate_optional lt_types.lt_constructor_cfg, { loners: true, }  ), { loners: true, }
    //     @eq (     Ωctt__65 = -> validate_optional lt_types.lt_constructor_cfg, null               ), null
    //     @eq (     Ωctt__66 = -> validate          lt_types.lt_constructor_cfg, { loners: true, }  ), { loners: true, }
    //     @throws ( Ωctt__67 = -> validate          lt_types.lt_constructor_cfg, { loners: 8, }     ), /validation error/
    //     @throws ( Ωctt__68 = -> validate_optional lt_types.lt_constructor_cfg, { loners: 8, }     ), /validation error/
    //     #.....................................................................................................
    //     return null

    //   #-------------------------------------------------------------------------------------------------------
    //   lt_nodelist: ->
    //     { Cleartype
    //       std } = require '../../../apps/cleartype'
    //     { lt_types }  = get_typespaces()
    //     { isa
    //       isa_optional
    //       create
    //       validate
    //       validate_optional } = require '../../../apps/cleartype'
    //     #.....................................................................................................
    //     @eq (     Ωctt__69 = -> isa               lt_types.lt_nodelist, 337465              ), false
    //     @eq (     Ωctt__70 = -> isa               lt_types.lt_nodelist, []                  ), true
    //     @eq (     Ωctt__71 = -> isa               lt_types.lt_nodelist, [ 'name', ]         ), true
    //     @eq (     Ωctt__72 = -> isa               lt_types.lt_nodelist, [ 'name', 3, ]      ), false
    //     @eq (     Ωctt__73 = -> isa_optional      lt_types.lt_nodelist, 337465              ), false
    //     @eq (     Ωctt__74 = -> isa_optional      lt_types.lt_nodelist, null                ), true
    //     @eq (     Ωctt__75 = -> create            lt_types.lt_nodelist, undefined           ), []
    //     @throws ( Ωctt__76 = -> create            lt_types.lt_nodelist, { loners: 7, }      ), /validation error/
    //     @eq (     Ωctt__77 = -> validate_optional lt_types.lt_nodelist, []                  ), []
    //     @eq (     Ωctt__78 = -> validate_optional lt_types.lt_nodelist, null                ), null
    //     # @eq (     Ωctt__79 = -> validate          lt_types.lt_nodelist, { loners: true, }  ), { loners: true, }
    //     # @throws ( Ωctt__80 = -> validate          lt_types.lt_nodelist, { loners: 8, }     ), /validation error/
    //     # @throws ( Ωctt__81 = -> validate_optional lt_types.lt_nodelist, { loners: 8, }     ), /validation error/
    //     #.....................................................................................................
    //     return null

    //   #-------------------------------------------------------------------------------------------------------
    //   lt_add_cfg: ->
    //     { Cleartype
    //       std } = require '../../../apps/cleartype'
    //     { lt_types }  = get_typespaces()
    //     { isa
    //       isa_optional
    //       create
    //       validate
    //       validate_optional } = require '../../../apps/cleartype'
    //     #.....................................................................................................
    //     @eq (     Ωctt__82 = -> isa               lt_types.lt_add_cfg.name, 337465              ), false
    //     @eq (     Ωctt__83 = -> isa               lt_types.lt_add_cfg.name, ''                  ), false
    //     @eq (     Ωctt__84 = -> isa               lt_types.lt_add_cfg.name, 'foo'               ), true
    //     @eq (     Ωctt__85 = -> isa               lt_types.lt_add_cfg.needs, 337465             ), false
    //     @eq (     Ωctt__86 = -> isa               lt_types.lt_add_cfg.needs, [ 337465, ]        ), false
    //     @eq (     Ωctt__87 = -> isa               lt_types.lt_add_cfg.needs, [ '337465', ]      ), true
    //     @eq (     Ωctt__88 = -> isa               lt_types.lt_add_cfg.needs, []                 ), true
    //     @eq (     Ωctt__89 = -> isa               lt_types.lt_add_cfg.precedes, 337465          ), false
    //     @eq (     Ωctt__90 = -> isa               lt_types.lt_add_cfg.precedes, [ 337465, ]     ), false
    //     @eq (     Ωctt__91 = -> isa               lt_types.lt_add_cfg.precedes, []              ), true
    //     @eq (     Ωctt__92 = -> isa               lt_types.lt_add_cfg.precedes, [ '337465', ]   ), true
    //     @eq (     Ωctt__93 = -> isa               lt_types.lt_add_cfg, 337465                   ), false
    //     @eq (     Ωctt__94 = -> isa               lt_types.lt_add_cfg, {}                       ), false
    //     @eq (     Ωctt__95 = -> isa               lt_types.lt_add_cfg, { name: 'g', precedes: null, needs: null     }    ), true
    //     @eq (     Ωctt__96 = -> isa               lt_types.lt_add_cfg, { name: 'g', precedes: [], needs: [ 'name', ]     }    ), true
    //     @eq (     Ωctt__97 = -> isa               lt_types.lt_add_cfg, { name: 'g', precedes: [], needs: [ 'name', 3, ]  }    ), false
    //     @eq (     Ωctt__98 = -> create            lt_types.lt_add_cfg, { name: 'g', precedes: [], needs: [ 'name', ]     }    ), { name: 'g', precedes: [], needs: [ 'name', ]  }
    //     @eq (     Ωctt__99 = -> create            lt_types.lt_add_cfg, { name: 'g',                                      }    ), { name: 'g', precedes: null, needs: null  }
    //     # @eq (     Ωctt_100 = -> isa_optional      lt_types.lt_add_cfg, 337465              ), false
    //     # @eq (     Ωctt_101 = -> isa_optional      lt_types.lt_add_cfg, null                ), true
    //     # @eq (     Ωctt_102 = -> create            lt_types.lt_add_cfg, undefined           ), []
    //     # @throws ( Ωctt_103 = -> create            lt_types.lt_add_cfg, { loners: 7, }      ), /validation error/
    //     # @eq (     Ωctt_104 = -> validate_optional lt_types.lt_add_cfg, []                  ), []
    //     # @eq (     Ωctt_105 = -> validate_optional lt_types.lt_add_cfg, null                ), null
    //     # @eq (     Ωctt_106 = -> validate          lt_types.lt_add_cfg, { loners: true, }  ), { loners: true, }
    //     # @throws ( Ωctt_107 = -> validate          lt_types.lt_add_cfg, { loners: 8, }     ), /validation error/
    //     # @throws ( Ωctt_108 = -> validate_optional lt_types.lt_add_cfg, { loners: 8, }     ), /validation error/
    //     #.....................................................................................................
    //     return null

    //   #-------------------------------------------------------------------------------------------------------
    //   lt_linearize_cfg: ->
    //     { Cleartype
    //       std } = require '../../../apps/cleartype'
    //     { lt_types }  = get_typespaces()
    //     { isa
    //       isa_optional
    //       create
    //       validate
    //       validate_optional } = require '../../../apps/cleartype'
    //     #.....................................................................................................
    //     @eq (     Ωctt_109 = -> isa               lt_types.lt_linearize_cfg, 337465                   ), false
    //     @eq (     Ωctt_110 = -> isa               lt_types.lt_linearize_cfg, {}                       ), false
    //     @eq (     Ωctt_111 = -> isa               lt_types.lt_linearize_cfg, { groups: 5, }           ), false
    //     @eq (     Ωctt_112 = -> isa               lt_types.lt_linearize_cfg, { groups: true, }        ), true
    //     @eq (     Ωctt_113 = -> isa               lt_types.lt_linearize_cfg, { groups: false, }       ), true
    //     @eq (     Ωctt_114 = -> create            lt_types.lt_linearize_cfg, { groups: true,  }       ), { groups: true, }
    //     @eq (     Ωctt_115 = -> create            lt_types.lt_linearize_cfg, { groups: false, }       ), { groups: false, }
    //     @eq (     Ωctt_116 = -> create            lt_types.lt_linearize_cfg, {}                       ), { groups: false, }
    //     @eq (     Ωctt_117 = -> create            lt_types.lt_linearize_cfg, null                     ), { groups: false, }
    //     #.....................................................................................................
    //     return null

    //=========================================================================================================
    standard_basic_methods: {
      //-------------------------------------------------------------------------------------------------------
      type_of: function() {
        var type_of, Ωctt_118, Ωctt_119, Ωctt_120, Ωctt_121, Ωctt_122, Ωctt_123, Ωctt_124, Ωctt_125, Ωctt_126, Ωctt_127, Ωctt_128, Ωctt_129;
        ({type_of} = require('../../../apps/cleartype'));
        this.eq((Ωctt_118 = function() {
          return type_of(null);
        }), 'null');
        this.eq((Ωctt_119 = function() {
          return type_of(void 0);
        }), 'undefined');
        this.eq((Ωctt_120 = function() {
          return type_of(+2e308);
        }), 'infinity');
        this.eq((Ωctt_121 = function() {
          return type_of(-2e308);
        }), 'infinity');
        this.eq((Ωctt_122 = function() {
          return type_of(true);
        }), 'boolean');
        this.eq((Ωctt_123 = function() {
          return type_of(false);
        }), 'boolean');
        this.eq((Ωctt_124 = function() {
          return type_of(0/0);
        }), 'nan');
        this.eq((Ωctt_125 = function() {
          return type_of(8);
        }), 'float');
        this.eq((Ωctt_126 = function() {
          return type_of(/xxx/);
        }), 'regex');
        this.eq((Ωctt_127 = function() {
          return type_of('xyz');
        }), 'text');
        this.eq((Ωctt_128 = function() {
          return type_of(['xyz']);
        }), 'list');
        this.eq((Ωctt_129 = function() {
          return type_of({});
        }), 'object');
        //.....................................................................................................
        return null;
      }
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

//# sourceMappingURL=test-basics.js.map