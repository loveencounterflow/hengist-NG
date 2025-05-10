
'use strict'

GUY                       = require 'guy'
{ alert
  debug
  help
  info
  plain
  praise
  urge
  warn
  whisper }               = GUY.trm.get_loggers 'intertype/test-basics'
{ rpr
  inspect
  echo
  reverse
  log     }               = GUY.trm
# WGUY                      = require '../../../apps/webguy'
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG


###

# from `ltsort` which uses an outdated version of `intertype`:

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

###

#===========================================================================================================
get_typespaces = ->
  { CT, \
    std } = require '../../../apps/cleartype'
  #.........................................................................................................
  lt_types =
    #.........................................................................................................
    lt_nodelist:
      $isa: ( x ) ->
        # 'list.of.nonempty.text'
        return false unless @ct.isa std.list, x
        return x.every ( e ) => @ct.isa std.nonempty_text, e
      $create: ( x ) ->
        return x if x?
        return []
    #.........................................................................................................
    lt_constructor_cfg:
      $isa: ( x ) ->
        return false unless @ct.isa std.object, x
        return false unless @ct.isa @me.loners, x.loners
        return true
      loners:
        $isa:       ( x ) -> @ct.isa std.boolean, x
      $template:
        loners:     true
      $create: ( x ) ->
        return x unless @ct.isa_optional std.object, x
        return { @me.$template..., x..., }
    #.........................................................................................................
    lt_add_cfg:
      $isa: ( x ) ->
        return false unless @ct.isa std.object,   x
        return false unless @ct.isa @me.name,     x.name
        return false unless @ct.isa @me.precedes, x.precedes
        return false unless @ct.isa @me.needs,    x.needs
        return true
      $create: ( x ) ->
        return x unless @ct.isa_optional std.object, x
        return { @me.$template..., x..., }
      #.....................................................................................................
      name:         $isa: ( x ) -> @ct.isa std.nonempty_text,             x
      precedes:     $isa: ( x ) -> @ct.isa_optional lt_types.lt_nodelist, x
      needs:        $isa: ( x ) -> @ct.isa_optional lt_types.lt_nodelist, x
      $template:
        name:       null
        precedes:   null
        needs:      null
    #.........................................................................................................
    lt_linearize_cfg:
      $isa: ( x ) ->
        return false unless @ct.isa std.object, x
        return false unless @ct.isa @me.groups, x.groups
        return true
      $create: ( x ) ->
        return x unless @ct.isa_optional std.object, x
        return { @me.$template..., x..., }
      #.....................................................................................................
      groups:
        $isa:       ( x ) -> @ct.isa std.boolean, x
      $template:
        groups:     false
  #.........................................................................................................
  return { lt_types, }


############################################################################################################
#
#===========================================================================================================
@cleartype_tasks =

  #=========================================================================================================
  basics:

    #-------------------------------------------------------------------------------------------------------
    builtins: ->
      { Cleartype
        std } = require '../../../apps/cleartype'
      ct = new Cleartype()
      #.....................................................................................................
      @eq ( Ωctt___1 = -> ct.isa std.primitive, 1          ), true
      @eq ( Ωctt___2 = -> ct.isa std.primitive, true       ), true
      @eq ( Ωctt___3 = -> ct.isa std.primitive, false      ), true
      @eq ( Ωctt___4 = -> ct.isa std.primitive, null       ), true
      @eq ( Ωctt___5 = -> ct.isa std.primitive, undefined  ), true
      @eq ( Ωctt___6 = -> ct.isa std.primitive, 'text'     ), true
      @eq ( Ωctt___7 = -> ct.isa std.primitive, []         ), false
      @eq ( Ωctt___8 = -> ct.isa std.primitive, {}         ), false
      @eq ( Ωctt___9 = -> ct.isa std.primitive, ( -> )     ), false
      @eq ( Ωctt__10 = -> ct.isa std.primitive, ( => )     ), false
      #.....................................................................................................
      @eq ( Ωctt__11 = -> ct.isa std.integer, 1            ), true
      @eq ( Ωctt__12 = -> ct.isa std.integer, 1.1          ), false
      #.....................................................................................................
      @eq ( Ωctt__13 = -> ct.isa std.text, 1.1            ), false
      @eq ( Ωctt__14 = -> ct.isa std.text, '1.1'          ), true
      @eq ( Ωctt__15 = -> ct.isa std.text, ''             ), true
      @eq ( Ωctt__16 = -> ct.isa std.nonempty_text, 1.1   ), false
      @eq ( Ωctt__17 = -> ct.isa std.nonempty_text, '1.1' ), true
      @eq ( Ωctt__18 = -> ct.isa std.nonempty_text, ''    ), false
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    isa: ->
      { Cleartype
        std } = require '../../../apps/cleartype'
      tt      = new Cleartype()
      { lt_types }  = get_typespaces()
      #.....................................................................................................
      @eq ( Ωctt__19 = -> tt.isa std.float, true                                        ), false
      @eq ( Ωctt__20 = -> tt.isa std.float, '3'                                         ), false
      @eq ( Ωctt__21 = -> tt.isa std.float, 337465                                      ), true
      @eq ( Ωctt__22 = -> tt.isa lt_types.lt_constructor_cfg, 337465                    ), false
      @eq ( Ωctt__23 = -> tt.isa lt_types.lt_constructor_cfg, {}                        ), false
      @eq ( Ωctt__24 = -> tt.isa lt_types.lt_constructor_cfg, { loners: 8, }            ), false
      @eq ( Ωctt__25 = -> tt.isa lt_types.lt_constructor_cfg, { loners: true, }         ), true
      do =>
        contexts = new Set tt._contexts.keys()
        @eq ( Ωctt__26 = -> contexts.has std.float                                      ), true
        @eq ( Ωctt__27 = -> contexts.has lt_types.lt_constructor_cfg                    ), true
        @eq ( Ωctt__28 = -> contexts.has lt_types.lt_constructor_cfg.loners             ), true
        @eq ( Ωctt__29 = -> contexts.has std.text                                       ), false
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    create: ->
      { Cleartype
        std } = require '../../../apps/cleartype'
      tt      = new Cleartype()
      { lt_types }  = get_typespaces()
      #.....................................................................................................
      @eq ( Ωctt__30 = -> tt.create lt_types.lt_constructor_cfg                         ), { loners: true, }
      @eq ( Ωctt__31 = -> tt.create lt_types.lt_constructor_cfg, null                   ), { loners: true, }
      @eq ( Ωctt__32 = -> tt.create lt_types.lt_constructor_cfg, undefined              ), { loners: true, }
      @throws ( Ωctt__33 = -> tt.create    lt_types.lt_constructor_cfg, { loners: 7, }  ), /validation error/
      do =>
        contexts = new Set tt._contexts.keys()
        @eq ( Ωctt__34 = -> contexts.has lt_types.lt_constructor_cfg                    ), true
        @eq ( Ωctt__35 = -> contexts.has lt_types.lt_constructor_cfg.loners             ), true
        @eq ( Ωctt__36 = -> contexts.has std.text                                       ), false
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    validate: ->
      { Cleartype
        std } = require '../../../apps/cleartype'
      tt      = new Cleartype()
      { lt_types }  = get_typespaces()
      #.....................................................................................................
      @eq ( Ωctt__37 = -> tt.validate lt_types.lt_constructor_cfg, { loners: true, }    ), { loners: true, }
      @throws ( Ωctt__38 = -> tt.validate  lt_types.lt_constructor_cfg, { loners: 8, }  ), /validation error/
      do =>
        contexts = new Set tt._contexts.keys()
        @eq ( Ωctt__39 = -> contexts.has lt_types.lt_constructor_cfg                    ), true
        @eq ( Ωctt__40 = -> contexts.has lt_types.lt_constructor_cfg.loners             ), true
        @eq ( Ωctt__41 = -> contexts.has std.text                                       ), false
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    instance_methods_are_bound: ->
      { Cleartype
        std } = require '../../../apps/cleartype'
      { lt_types }  = get_typespaces()
      { isa
        isa_optional
        create
        validate
        validate_optional } = new Cleartype()
      #.....................................................................................................
      @eq (     Ωctt__42 = -> isa       std.float, 337465                               ), true
      @eq (     Ωctt__43 = -> isa       lt_types.lt_constructor_cfg, 337465             ), false
      @eq (     Ωctt__44 = -> create    lt_types.lt_constructor_cfg, undefined          ), { loners: true, }
      @throws ( Ωctt__45 = -> create    lt_types.lt_constructor_cfg, { loners: 7, }     ), /validation error/
      @eq (     Ωctt__46 = -> validate  lt_types.lt_constructor_cfg, { loners: true, }  ), { loners: true, }
      @throws ( Ωctt__47 = -> validate  lt_types.lt_constructor_cfg, { loners: 8, }     ), /validation error/
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    exported_methods_are_bound: ->
      { Cleartype
        std } = require '../../../apps/cleartype'
      { lt_types }  = get_typespaces()
      { isa
        isa_optional
        create
        validate
        validate_optional } = require '../../../apps/cleartype'
      #.....................................................................................................
      @eq (     Ωctt__48 = -> isa       std.float, 337465                               ), true
      @eq (     Ωctt__49 = -> isa       lt_types.lt_constructor_cfg, 337465             ), false
      @eq (     Ωctt__50 = -> create    lt_types.lt_constructor_cfg, undefined          ), { loners: true, }
      @throws ( Ωctt__51 = -> create    lt_types.lt_constructor_cfg, { loners: 7, }     ), /validation error/
      @eq (     Ωctt__52 = -> validate  lt_types.lt_constructor_cfg, { loners: true, }  ), { loners: true, }
      @throws ( Ωctt__53 = -> validate  lt_types.lt_constructor_cfg, { loners: 8, }     ), /validation error/
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    exported_methods_can_accessed_via_CT: ->
      { CT
        isa
        isa_optional
        create
        validate
        validate_optional } = require '../../../apps/cleartype'
      #.....................................................................................................
      @eq ( Ωctt__54 = -> isa               is CT.isa               ), true
      @eq ( Ωctt__55 = -> isa_optional      is CT.isa_optional      ), true
      @eq ( Ωctt__56 = -> validate          is CT.validate          ), true
      @eq ( Ωctt__57 = -> validate_optional is CT.validate_optional ), true
      @eq ( Ωctt__58 = -> create            is CT.create            ), true
      #.....................................................................................................
      return null


  #=========================================================================================================
  lt_types:

    #-------------------------------------------------------------------------------------------------------
    lt_constructor_cfg: ->
      { Cleartype
        std } = require '../../../apps/cleartype'
      { lt_types }  = get_typespaces()
      { isa
        isa_optional
        create
        validate
        validate_optional } = require '../../../apps/cleartype'
      #.....................................................................................................
      @eq (     Ωctt__59 = -> isa               lt_types.lt_constructor_cfg, 337465             ), false
      @eq (     Ωctt__60 = -> isa_optional      lt_types.lt_constructor_cfg, 337465             ), false
      @eq (     Ωctt__61 = -> isa_optional      lt_types.lt_constructor_cfg, null               ), true
      @eq (     Ωctt__62 = -> create            lt_types.lt_constructor_cfg, undefined          ), { loners: true, }
      @throws ( Ωctt__63 = -> create            lt_types.lt_constructor_cfg, { loners: 7, }     ), /validation error/
      @eq (     Ωctt__64 = -> validate_optional lt_types.lt_constructor_cfg, { loners: true, }  ), { loners: true, }
      @eq (     Ωctt__65 = -> validate_optional lt_types.lt_constructor_cfg, null               ), null
      @eq (     Ωctt__66 = -> validate          lt_types.lt_constructor_cfg, { loners: true, }  ), { loners: true, }
      @throws ( Ωctt__67 = -> validate          lt_types.lt_constructor_cfg, { loners: 8, }     ), /validation error/
      @throws ( Ωctt__68 = -> validate_optional lt_types.lt_constructor_cfg, { loners: 8, }     ), /validation error/
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    lt_nodelist: ->
      { Cleartype
        std } = require '../../../apps/cleartype'
      { lt_types }  = get_typespaces()
      { isa
        isa_optional
        create
        validate
        validate_optional } = require '../../../apps/cleartype'
      #.....................................................................................................
      @eq (     Ωctt__69 = -> isa               lt_types.lt_nodelist, 337465              ), false
      @eq (     Ωctt__70 = -> isa               lt_types.lt_nodelist, []                  ), true
      @eq (     Ωctt__71 = -> isa               lt_types.lt_nodelist, [ 'name', ]         ), true
      @eq (     Ωctt__72 = -> isa               lt_types.lt_nodelist, [ 'name', 3, ]      ), false
      @eq (     Ωctt__73 = -> isa_optional      lt_types.lt_nodelist, 337465              ), false
      @eq (     Ωctt__74 = -> isa_optional      lt_types.lt_nodelist, null                ), true
      @eq (     Ωctt__75 = -> create            lt_types.lt_nodelist, undefined           ), []
      @throws ( Ωctt__76 = -> create            lt_types.lt_nodelist, { loners: 7, }      ), /validation error/
      @eq (     Ωctt__77 = -> validate_optional lt_types.lt_nodelist, []                  ), []
      @eq (     Ωctt__78 = -> validate_optional lt_types.lt_nodelist, null                ), null
      # @eq (     Ωctt__79 = -> validate          lt_types.lt_nodelist, { loners: true, }  ), { loners: true, }
      # @throws ( Ωctt__80 = -> validate          lt_types.lt_nodelist, { loners: 8, }     ), /validation error/
      # @throws ( Ωctt__81 = -> validate_optional lt_types.lt_nodelist, { loners: 8, }     ), /validation error/
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    lt_add_cfg: ->
      { Cleartype
        std } = require '../../../apps/cleartype'
      { lt_types }  = get_typespaces()
      { isa
        isa_optional
        create
        validate
        validate_optional } = require '../../../apps/cleartype'
      #.....................................................................................................
      @eq (     Ωctt__82 = -> isa               lt_types.lt_add_cfg.name, 337465              ), false
      @eq (     Ωctt__83 = -> isa               lt_types.lt_add_cfg.name, ''                  ), false
      @eq (     Ωctt__84 = -> isa               lt_types.lt_add_cfg.name, 'foo'               ), true
      @eq (     Ωctt__85 = -> isa               lt_types.lt_add_cfg.needs, 337465             ), false
      @eq (     Ωctt__86 = -> isa               lt_types.lt_add_cfg.needs, [ 337465, ]        ), false
      @eq (     Ωctt__87 = -> isa               lt_types.lt_add_cfg.needs, [ '337465', ]      ), true
      @eq (     Ωctt__88 = -> isa               lt_types.lt_add_cfg.needs, []                 ), true
      @eq (     Ωctt__89 = -> isa               lt_types.lt_add_cfg.precedes, 337465          ), false
      @eq (     Ωctt__90 = -> isa               lt_types.lt_add_cfg.precedes, [ 337465, ]     ), false
      @eq (     Ωctt__91 = -> isa               lt_types.lt_add_cfg.precedes, []              ), true
      @eq (     Ωctt__92 = -> isa               lt_types.lt_add_cfg.precedes, [ '337465', ]   ), true
      @eq (     Ωctt__93 = -> isa               lt_types.lt_add_cfg, 337465                   ), false
      @eq (     Ωctt__94 = -> isa               lt_types.lt_add_cfg, {}                       ), false
      @eq (     Ωctt__95 = -> isa               lt_types.lt_add_cfg, { name: 'g', precedes: null, needs: null     }    ), true
      @eq (     Ωctt__96 = -> isa               lt_types.lt_add_cfg, { name: 'g', precedes: [], needs: [ 'name', ]     }    ), true
      @eq (     Ωctt__97 = -> isa               lt_types.lt_add_cfg, { name: 'g', precedes: [], needs: [ 'name', 3, ]  }    ), false
      @eq (     Ωctt__98 = -> create            lt_types.lt_add_cfg, { name: 'g', precedes: [], needs: [ 'name', ]     }    ), { name: 'g', precedes: [], needs: [ 'name', ]  }
      @eq (     Ωctt__99 = -> create            lt_types.lt_add_cfg, { name: 'g',                                      }    ), { name: 'g', precedes: null, needs: null  }
      # @eq (     Ωctt_100 = -> isa_optional      lt_types.lt_add_cfg, 337465              ), false
      # @eq (     Ωctt_101 = -> isa_optional      lt_types.lt_add_cfg, null                ), true
      # @eq (     Ωctt_102 = -> create            lt_types.lt_add_cfg, undefined           ), []
      # @throws ( Ωctt_103 = -> create            lt_types.lt_add_cfg, { loners: 7, }      ), /validation error/
      # @eq (     Ωctt_104 = -> validate_optional lt_types.lt_add_cfg, []                  ), []
      # @eq (     Ωctt_105 = -> validate_optional lt_types.lt_add_cfg, null                ), null
      # @eq (     Ωctt_106 = -> validate          lt_types.lt_add_cfg, { loners: true, }  ), { loners: true, }
      # @throws ( Ωctt_107 = -> validate          lt_types.lt_add_cfg, { loners: 8, }     ), /validation error/
      # @throws ( Ωctt_108 = -> validate_optional lt_types.lt_add_cfg, { loners: 8, }     ), /validation error/
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    lt_linearize_cfg: ->
      { Cleartype
        std } = require '../../../apps/cleartype'
      { lt_types }  = get_typespaces()
      { isa
        isa_optional
        create
        validate
        validate_optional } = require '../../../apps/cleartype'
      #.....................................................................................................
      @eq (     Ωctt_109 = -> isa               lt_types.lt_linearize_cfg, 337465                   ), false
      @eq (     Ωctt_110 = -> isa               lt_types.lt_linearize_cfg, {}                       ), false
      @eq (     Ωctt_111 = -> isa               lt_types.lt_linearize_cfg, { groups: 5, }           ), false
      @eq (     Ωctt_112 = -> isa               lt_types.lt_linearize_cfg, { groups: true, }        ), true
      @eq (     Ωctt_113 = -> isa               lt_types.lt_linearize_cfg, { groups: false, }       ), true
      @eq (     Ωctt_114 = -> create            lt_types.lt_linearize_cfg, { groups: true,  }       ), { groups: true, }
      @eq (     Ωctt_115 = -> create            lt_types.lt_linearize_cfg, { groups: false, }       ), { groups: false, }
      @eq (     Ωctt_116 = -> create            lt_types.lt_linearize_cfg, {}                       ), { groups: false, }
      @eq (     Ωctt_117 = -> create            lt_types.lt_linearize_cfg, null                     ), { groups: false, }
      #.....................................................................................................
      return null


#===========================================================================================================
if module is require.main then await do =>
  ( new Test { throw_on_error: true, } ).test @cleartype_tasks
  # ( new Test { throw_on_error: false, } ).test @cleartype_tasks
  # ( new Test { throw_on_error: true, } ).test { mvp_isa: @cleartype_tasks.MVP.isa, }
  # ( new Test { throw_on_error: true, } ).test { instance_methods_are_bound: @cleartype_tasks.basics.instance_methods_are_bound, }

  ->
    d =
      a: ->
        foo: 1
        bar: 2
    debug 'Ωctt_118', d
    debug 'Ωctt_119', d.a
    debug 'Ωctt_120', d.a.name
    debug 'Ωctt_121', d.a()
