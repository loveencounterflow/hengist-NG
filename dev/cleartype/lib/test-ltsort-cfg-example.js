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

  //===========================================================================================================
  this.cleartype_tasks = module === require.main ? (await (() => {
    var guytest_cfg;
    guytest_cfg = {
      throw_on_error: false,
      show_passes: false,
      report_checks: false
    };
    guytest_cfg = {
      throw_on_error: true,
      show_passes: false,
      report_checks: false
    };
    return (new Test(guytest_cfg)).test(this.cleartype_tasks);
  })()) : void 0;

}).call(this);

//# sourceMappingURL=test-ltsort-cfg-example.js.map