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
      var Type, std, type, typename;
      ({Type, std} = require('../../../apps/cleartype'));
      info('Ω___1', std);
      (() => {
        echo();
        info('Ω___2', std.integer);
        info('Ω___3', std.integer.isa(3.141));
        info('Ω___4', std.integer.isa(3));
        info('Ω___5', std.integer.create());
        return info('Ω___6', std.integer.create('3'));
      })();
      (() => {
        var Ωcltt__10, Ωcltt__11, Ωcltt__12, Ωcltt__13, Ωcltt___7, Ωcltt___8, Ωcltt___9;
        this.eq((Ωcltt___7 = function() {
          return std.text instanceof Type;
        }), true);
        this.eq((Ωcltt___8 = function() {
          return std.float instanceof Type;
        }), true);
        this.eq((Ωcltt___9 = function() {
          return std.integer instanceof Type;
        }), true);
        this.eq((Ωcltt__10 = function() {
          return std.nonempty_text instanceof Type;
        }), true);
        this.eq((Ωcltt__11 = function() {
          return std.quantity_q instanceof Type;
        }), true);
        this.eq((Ωcltt__12 = function() {
          return std.quantity_u instanceof Type;
        }), true);
        return this.eq((Ωcltt__13 = function() {
          return std.quantity instanceof Type;
        }), true);
      })();
      (() => {
        var Ωcltt__14, Ωcltt__15, Ωcltt__16, Ωcltt__17, Ωcltt__18, Ωcltt__19, Ωcltt__20;
        this.eq((Ωcltt__14 = function() {
          return std.text.constructor.name;
        }), 'Text');
        this.eq((Ωcltt__15 = function() {
          return std.float.constructor.name;
        }), 'Float');
        this.eq((Ωcltt__16 = function() {
          return std.integer.constructor.name;
        }), 'Integer');
        this.eq((Ωcltt__17 = function() {
          return std.nonempty_text.constructor.name;
        }), 'Nonempty_text');
        this.eq((Ωcltt__18 = function() {
          return std.quantity_q.constructor.name;
        }), 'Quantity_q');
        this.eq((Ωcltt__19 = function() {
          return std.quantity_u.constructor.name;
        }), 'Quantity_u');
        return this.eq((Ωcltt__20 = function() {
          return std.quantity.constructor.name;
        }), 'Quantity');
      })();
      (() => {
        var Ωcltt__21, Ωcltt__22, Ωcltt__23, Ωcltt__24, Ωcltt__25, Ωcltt__26, Ωcltt__27;
        this.eq((Ωcltt__21 = function() {
          return std.text.isa.name;
        }), 'isa_text');
        this.eq((Ωcltt__22 = function() {
          return std.float.isa.name;
        }), 'isa_float');
        this.eq((Ωcltt__23 = function() {
          return std.integer.isa.name;
        }), 'isa_integer');
        this.eq((Ωcltt__24 = function() {
          return std.nonempty_text.isa.name;
        }), 'isa_nonempty_text');
        this.eq((Ωcltt__25 = function() {
          return std.quantity_q.isa.name;
        }), 'isa_quantity_q');
        this.eq((Ωcltt__26 = function() {
          return std.quantity_u.isa.name;
        }), 'isa_quantity_u');
        return this.eq((Ωcltt__27 = function() {
          return std.quantity.isa.name;
        }), 'isa_quantity');
      })();
      (() => {
        var Ωcltt__28, Ωcltt__29, Ωcltt__30, Ωcltt__31, Ωcltt__32, Ωcltt__33, Ωcltt__34;
        this.eq((Ωcltt__28 = function() {
          return std.text.isa(null);
        }), false);
        this.eq((Ωcltt__29 = function() {
          return std.float.isa(null);
        }), false);
        this.eq((Ωcltt__30 = function() {
          return std.integer.isa(null);
        }), false);
        this.eq((Ωcltt__31 = function() {
          return std.nonempty_text.isa(null);
        }), false);
        this.eq((Ωcltt__32 = function() {
          return std.quantity_q.isa(null);
        }), false);
        this.eq((Ωcltt__33 = function() {
          return std.quantity_u.isa(null);
        }), false);
        return this.eq((Ωcltt__34 = function() {
          return std.quantity.isa(null);
        }), false);
      })();
      (() => {
        var Ωcltt__35, Ωcltt__36, Ωcltt__37, Ωcltt__38, Ωcltt__39, Ωcltt__40, Ωcltt__41;
        this.eq((Ωcltt__35 = function() {
          return std.text.isa(2e308);
        }), false);
        this.eq((Ωcltt__36 = function() {
          return std.float.isa(2e308);
        }), false);
        this.eq((Ωcltt__37 = function() {
          return std.integer.isa(2e308);
        }), false);
        this.eq((Ωcltt__38 = function() {
          return std.nonempty_text.isa(2e308);
        }), false);
        this.eq((Ωcltt__39 = function() {
          return std.quantity_q.isa(2e308);
        }), false);
        this.eq((Ωcltt__40 = function() {
          return std.quantity_u.isa(2e308);
        }), false);
        return this.eq((Ωcltt__41 = function() {
          return std.quantity.isa(2e308);
        }), false);
      })();
      (() => {
        var Ωcltt__42, Ωcltt__43, Ωcltt__44, Ωcltt__45, Ωcltt__46, Ωcltt__47, Ωcltt__48;
        this.eq((Ωcltt__42 = function() {
          return std.text.isa('');
        }), true);
        this.eq((Ωcltt__43 = function() {
          return std.float.isa(7.56);
        }), true);
        this.eq((Ωcltt__44 = function() {
          return std.integer.isa(9);
        }), true);
        this.eq((Ωcltt__45 = function() {
          return std.nonempty_text.isa('www');
        }), true);
        this.eq((Ωcltt__46 = function() {
          return std.quantity_q.isa(1.5e32);
        }), true);
        this.eq((Ωcltt__47 = function() {
          return std.quantity_u.isa('km');
        }), true);
        return this.eq((Ωcltt__48 = function() {
          return std.quantity.isa({
            q: 1.5e32,
            u: 'km'
          });
        }), true);
      })();
      (() => {
        var Ωcltt__50, Ωcltt__51, Ωcltt__52, Ωcltt__53, Ωcltt__54, Ωcltt__55, Ωcltt__56, Ωcltt__57, Ωcltt__58, Ωcltt__59, Ωcltt__60;
        echo();
        info('Ω__49', std.nonempty_text);
        this.eq((Ωcltt__50 = function() {
          return std.nonempty_text.isa(3.141);
        }), false);
        this.eq((Ωcltt__51 = function() {
          return std.nonempty_text.isa('');
        }), false);
        this.eq((Ωcltt__52 = function() {
          return std.nonempty_text.isa('d');
        }), true);
        this.eq((Ωcltt__53 = function() {
          return std.text.create();
        }), '');
        this.eq((Ωcltt__54 = function() {
          return std.nonempty_text.create('wat');
        }), 'wat');
        this.throws((Ωcltt__55 = function() {
          return std.nonempty_text.create();
        }), /validation/i);
        this.throws((Ωcltt__56 = function() {
          return std.nonempty_text.create('');
        }), /validation/i);
        this.throws((Ωcltt__57 = function() {
          return std.nonempty_text.create(null);
        }), /validation/i);
        this.throws((Ωcltt__58 = function() {
          return std.nonempty_text.create(void 0);
        }), /validation/i);
        this.throws((Ωcltt__59 = function() {
          return std.nonempty_text.create(false);
        }), /validation/i);
        return this.eq((Ωcltt__60 = function() {
          return std.nonempty_text.create('d');
        }), 'd');
      })();
      (() => {
        var Ωcltt__62, Ωcltt__63, Ωcltt__64, Ωcltt__65, Ωcltt__66, Ωcltt__67;
        echo();
        info('Ω__61', std.quantity);
        this.eq((Ωcltt__62 = function() {
          return std.quantity.create();
        }), {
          q: 0,
          u: 'u'
        });
        this.eq((Ωcltt__63 = function() {
          return std.quantity.create({
            q: 4.3,
            u: 's'
          });
        }), {
          q: 4.3,
          u: 's'
        });
        this.eq((Ωcltt__64 = function() {
          return std.nonempty_text.create('g');
        }), 'g');
        this.eq((Ωcltt__65 = function() {
          return std.quantity_u.create('g');
        }), 'g');
        this.eq((Ωcltt__66 = function() {
          return std.quantity.fields.u.create('g');
        }), 'g');
        return this.throws((Ωcltt__67 = function() {
          return std.quantity.fields.u.create(false);
        }), /validation/i);
      })();
      (() => {
        var Ωcltt__73, Ωcltt__74, Ωcltt__75, Ωcltt__76, Ωcltt__77, Ωcltt__78, Ωcltt__79, Ωcltt__80, Ωcltt__86, Ωcltt__87;
        echo();
        help('Ω__68', std.quantity);
        help('Ω__69', std.quantity.constructor);
        help('Ω__70', std.quantity.constructor.name);
        help('Ω__71', std.quantity.isa);
        help('Ω__72', std.quantity.isa({}));
        this.eq((Ωcltt__73 = function() {
          return std.quantity.isa({
            u: 7,
            q: 3
          });
        }), false);
        this.eq((Ωcltt__74 = function() {
          return std.quantity.isa({
            u: '7',
            q: 3
          });
        }), true);
        this.eq((Ωcltt__75 = function() {
          return std.quantity.isa({
            u: '7',
            q: 2e308
          });
        }), false);
        this.eq((Ωcltt__76 = function() {
          return std.quantity.isa({
            u: '7',
            q: 0/0
          });
        }), false);
        this.eq((Ωcltt__77 = function() {
          return std.quantity.name;
        }), 'quantity');
        this.eq((Ωcltt__78 = function() {
          return std.integer.name;
        }), 'integer');
        this.eq((Ωcltt__79 = function() {
          return std.quantity_q.name;
        }), 'quantity_q');
        this.eq((Ωcltt__80 = function() {
          return std.quantity_u.name;
        }), 'quantity_u');
        echo();
        help('Ω__81', std.text.isa);
        help('Ω__82', std.text.isa('abc'));
        help('Ω__83', std.text.isa(Array.from('abc')));
        echo();
        help('Ω__84', std.nonempty_text);
        help('Ω__85', std.nonempty_text.isa);
        this.eq((Ωcltt__86 = function() {
          return std.nonempty_text.isa('abc');
        }), true);
        this.eq((Ωcltt__87 = function() {
          return std.nonempty_text.isa(Array.from('abc'));
        }), false);
        return null;
      })();
      (() => {
        var type, typename, Ωcltt__88, Ωcltt__89, Ωcltt__90;
        echo();
        for (typename in std) {
          type = std[typename];
          this.eq((Ωcltt__88 = function() {
            return type.name;
          }), typename);
          this.eq((Ωcltt__89 = function() {
            return type.isa.name;
          }), `isa_${typename}`);
          this.eq((Ωcltt__90 = function() {
            return type.create.name;
          }), `create_${typename}`);
          debug('Ω__91', [typename, type.create.name]);
        }
        return null;
      })();
//.......................................................................................................
      for (typename in std) {
        type = std[typename];
        urge('Ω__92', f`${typename}:<20c; ${type.constructor.name}:<20c; ${type.isa.name}:<20c;`);
      }
      //.......................................................................................................
      debug('Ω__93', 'integer                 template  ', std.integer.template);
      debug('Ω__94', 'integer                 fields    ', std.integer.fields);
      debug('Ω__95', 'quantity                template  ', std.quantity.template);
      debug('Ω__96', 'quantity                fields    ', std.quantity.fields);
      debug('Ω__97', 'quantity_with_template  template  ', std.quantity_with_template.template);
      debug('Ω__98', 'quantity_with_template  fields    ', std.quantity_with_template.fields);
      //.......................................................................................................
      return null;
    },
    //=========================================================================================================
    templates: function() {
      var Type, internals, std;
      ({Type, internals, std} = require('../../../apps/cleartype'));
      (() => {
        var Ωcltt_100, Ωcltt_101, Ωcltt_102;
        this.eq((Ωcltt_100 = function() {
          return std.text.template != null;
        }), true);
        this.eq((Ωcltt_101 = function() {
          return internals.gnd.function.isa(std.text.template);
        }), true);
        this.eq((Ωcltt_102 = function() {
          return std.text.template();
        }), '');
        return null;
      })();
      //.......................................................................................................
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
    //     @eq (     Ωctt_103 = -> isa               lt_types.lt_constructor_cfg, 337465             ), false
    //     @eq (     Ωctt_104 = -> isa_optional      lt_types.lt_constructor_cfg, 337465             ), false
    //     @eq (     Ωctt_105 = -> isa_optional      lt_types.lt_constructor_cfg, null               ), true
    //     @eq (     Ωctt_106 = -> create            lt_types.lt_constructor_cfg, undefined          ), { loners: true, }
    //     @throws ( Ωctt_107 = -> create            lt_types.lt_constructor_cfg, { loners: 7, }     ), /validation error/
    //     @eq (     Ωctt_108 = -> validate_optional lt_types.lt_constructor_cfg, { loners: true, }  ), { loners: true, }
    //     @eq (     Ωctt_109 = -> validate_optional lt_types.lt_constructor_cfg, null               ), null
    //     @eq (     Ωctt_110 = -> validate          lt_types.lt_constructor_cfg, { loners: true, }  ), { loners: true, }
    //     @throws ( Ωctt_111 = -> validate          lt_types.lt_constructor_cfg, { loners: 8, }     ), /validation error/
    //     @throws ( Ωctt_112 = -> validate_optional lt_types.lt_constructor_cfg, { loners: 8, }     ), /validation error/
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
    //     @eq (     Ωctt_113 = -> isa               lt_types.lt_nodelist, 337465              ), false
    //     @eq (     Ωctt_114 = -> isa               lt_types.lt_nodelist, []                  ), true
    //     @eq (     Ωctt_115 = -> isa               lt_types.lt_nodelist, [ 'name', ]         ), true
    //     @eq (     Ωctt_116 = -> isa               lt_types.lt_nodelist, [ 'name', 3, ]      ), false
    //     @eq (     Ωctt_117 = -> isa_optional      lt_types.lt_nodelist, 337465              ), false
    //     @eq (     Ωctt_118 = -> isa_optional      lt_types.lt_nodelist, null                ), true
    //     @eq (     Ωctt_119 = -> create            lt_types.lt_nodelist, undefined           ), []
    //     @throws ( Ωctt_120 = -> create            lt_types.lt_nodelist, { loners: 7, }      ), /validation error/
    //     @eq (     Ωctt_121 = -> validate_optional lt_types.lt_nodelist, []                  ), []
    //     @eq (     Ωctt_122 = -> validate_optional lt_types.lt_nodelist, null                ), null
    //     # @eq (     Ωctt_123 = -> validate          lt_types.lt_nodelist, { loners: true, }  ), { loners: true, }
    //     # @throws ( Ωctt_124 = -> validate          lt_types.lt_nodelist, { loners: 8, }     ), /validation error/
    //     # @throws ( Ωctt_125 = -> validate_optional lt_types.lt_nodelist, { loners: 8, }     ), /validation error/
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
    //     @eq (     Ωctt_126 = -> isa               lt_types.lt_add_cfg.name, 337465              ), false
    //     @eq (     Ωctt_127 = -> isa               lt_types.lt_add_cfg.name, ''                  ), false
    //     @eq (     Ωctt_128 = -> isa               lt_types.lt_add_cfg.name, 'foo'               ), true
    //     @eq (     Ωctt_129 = -> isa               lt_types.lt_add_cfg.needs, 337465             ), false
    //     @eq (     Ωctt_130 = -> isa               lt_types.lt_add_cfg.needs, [ 337465, ]        ), false
    //     @eq (     Ωctt_131 = -> isa               lt_types.lt_add_cfg.needs, [ '337465', ]      ), true
    //     @eq (     Ωctt_132 = -> isa               lt_types.lt_add_cfg.needs, []                 ), true
    //     @eq (     Ωctt_133 = -> isa               lt_types.lt_add_cfg.precedes, 337465          ), false
    //     @eq (     Ωctt_134 = -> isa               lt_types.lt_add_cfg.precedes, [ 337465, ]     ), false
    //     @eq (     Ωctt_135 = -> isa               lt_types.lt_add_cfg.precedes, []              ), true
    //     @eq (     Ωctt_136 = -> isa               lt_types.lt_add_cfg.precedes, [ '337465', ]   ), true
    //     @eq (     Ωctt_137 = -> isa               lt_types.lt_add_cfg, 337465                   ), false
    //     @eq (     Ωctt_138 = -> isa               lt_types.lt_add_cfg, {}                       ), false
    //     @eq (     Ωctt_139 = -> isa               lt_types.lt_add_cfg, { name: 'g', precedes: null, needs: null     }    ), true
    //     @eq (     Ωctt_140 = -> isa               lt_types.lt_add_cfg, { name: 'g', precedes: [], needs: [ 'name', ]     }    ), true
    //     @eq (     Ωctt_141 = -> isa               lt_types.lt_add_cfg, { name: 'g', precedes: [], needs: [ 'name', 3, ]  }    ), false
    //     @eq (     Ωctt_142 = -> create            lt_types.lt_add_cfg, { name: 'g', precedes: [], needs: [ 'name', ]     }    ), { name: 'g', precedes: [], needs: [ 'name', ]  }
    //     @eq (     Ωctt_143 = -> create            lt_types.lt_add_cfg, { name: 'g',                                      }    ), { name: 'g', precedes: null, needs: null  }
    //     # @eq (     Ωctt_144 = -> isa_optional      lt_types.lt_add_cfg, 337465              ), false
    //     # @eq (     Ωctt_145 = -> isa_optional      lt_types.lt_add_cfg, null                ), true
    //     # @eq (     Ωctt_146 = -> create            lt_types.lt_add_cfg, undefined           ), []
    //     # @throws ( Ωctt_147 = -> create            lt_types.lt_add_cfg, { loners: 7, }      ), /validation error/
    //     # @eq (     Ωctt_148 = -> validate_optional lt_types.lt_add_cfg, []                  ), []
    //     # @eq (     Ωctt_149 = -> validate_optional lt_types.lt_add_cfg, null                ), null
    //     # @eq (     Ωctt_150 = -> validate          lt_types.lt_add_cfg, { loners: true, }  ), { loners: true, }
    //     # @throws ( Ωctt_151 = -> validate          lt_types.lt_add_cfg, { loners: 8, }     ), /validation error/
    //     # @throws ( Ωctt_152 = -> validate_optional lt_types.lt_add_cfg, { loners: 8, }     ), /validation error/
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
    //     @eq (     Ωctt_153 = -> isa               lt_types.lt_linearize_cfg, 337465                   ), false
    //     @eq (     Ωctt_154 = -> isa               lt_types.lt_linearize_cfg, {}                       ), false
    //     @eq (     Ωctt_155 = -> isa               lt_types.lt_linearize_cfg, { groups: 5, }           ), false
    //     @eq (     Ωctt_156 = -> isa               lt_types.lt_linearize_cfg, { groups: true, }        ), true
    //     @eq (     Ωctt_157 = -> isa               lt_types.lt_linearize_cfg, { groups: false, }       ), true
    //     @eq (     Ωctt_158 = -> create            lt_types.lt_linearize_cfg, { groups: true,  }       ), { groups: true, }
    //     @eq (     Ωctt_159 = -> create            lt_types.lt_linearize_cfg, { groups: false, }       ), { groups: false, }
    //     @eq (     Ωctt_160 = -> create            lt_types.lt_linearize_cfg, {}                       ), { groups: false, }
    //     @eq (     Ωctt_161 = -> create            lt_types.lt_linearize_cfg, null                     ), { groups: false, }
    //     #.....................................................................................................
    //     return null

    //=========================================================================================================
    standard_basic_methods: {
      //-------------------------------------------------------------------------------------------------------
      type_of: function() {
        var type_of, Ωctt_162, Ωctt_163, Ωctt_164, Ωctt_165, Ωctt_166, Ωctt_167, Ωctt_168, Ωctt_169, Ωctt_170, Ωctt_171, Ωctt_172, Ωctt_173;
        ({type_of} = require('../../../apps/cleartype'));
        this.eq((Ωctt_162 = function() {
          return type_of(null);
        }), 'null');
        this.eq((Ωctt_163 = function() {
          return type_of(void 0);
        }), 'undefined');
        this.eq((Ωctt_164 = function() {
          return type_of(+2e308);
        }), 'infinity');
        this.eq((Ωctt_165 = function() {
          return type_of(-2e308);
        }), 'infinity');
        this.eq((Ωctt_166 = function() {
          return type_of(true);
        }), 'boolean');
        this.eq((Ωctt_167 = function() {
          return type_of(false);
        }), 'boolean');
        this.eq((Ωctt_168 = function() {
          return type_of(0/0);
        }), 'nan');
        this.eq((Ωctt_169 = function() {
          return type_of(8);
        }), 'float');
        this.eq((Ωctt_170 = function() {
          return type_of(/xxx/);
        }), 'regex');
        this.eq((Ωctt_171 = function() {
          return type_of('xyz');
        }), 'text');
        this.eq((Ωctt_172 = function() {
          return type_of(['xyz']);
        }), 'list');
        this.eq((Ωctt_173 = function() {
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
      guytest_cfg = {
        throw_on_error: false,
        show_passes: false,
        report_checks: false
      };
      return (new Test(guytest_cfg)).test(this.cleartype_tasks);
    })();
  }

}).call(this);

//# sourceMappingURL=test-basics.js.map