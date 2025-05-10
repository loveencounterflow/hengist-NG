
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
  { ct
    Cleartype
    TMP_typespace1 } = require '../../../apps/cleartype'
  ###
  declare.lt_constructor_cfg
    fields:
      loners:     'boolean'
    default:
      loners:     true
  ###
  t2 =
    lt_constructor_cfg:
      $isa: ( x ) ->
        return false unless @types.isa TMP_typespace1.object, x
        return false unless @types.isa @me.loners, x.loners
        return true
      loners:
        $isa:       ( x ) -> @types.isa TMP_typespace1.boolean, x
      $template:
        loners:     true
      $create: ( x ) ->
        return x unless @types.isa_optional TMP_typespace1.object, x
        return { @me.$template..., x..., }
  #.........................................................................................................
  return { t2, }


############################################################################################################
#
#===========================================================================================================
@cleartype_tasks =

  #=========================================================================================================
  basics:

    #-------------------------------------------------------------------------------------------------------
    builtins: ->
      { Cleartype
        TMP_typespace1 } = require '../../../apps/cleartype'
      ct = new Cleartype()
      #.....................................................................................................
      @eq ( Ωctt___1 = -> ct.isa TMP_typespace1.primitive, 1          ), true
      @eq ( Ωctt___2 = -> ct.isa TMP_typespace1.primitive, true       ), true
      @eq ( Ωctt___3 = -> ct.isa TMP_typespace1.primitive, false      ), true
      @eq ( Ωctt___4 = -> ct.isa TMP_typespace1.primitive, null       ), true
      @eq ( Ωctt___5 = -> ct.isa TMP_typespace1.primitive, undefined  ), true
      @eq ( Ωctt___6 = -> ct.isa TMP_typespace1.primitive, 'text'     ), true
      @eq ( Ωctt___7 = -> ct.isa TMP_typespace1.primitive, []         ), false
      @eq ( Ωctt___8 = -> ct.isa TMP_typespace1.primitive, {}         ), false
      @eq ( Ωctt___9 = -> ct.isa TMP_typespace1.primitive, ( -> )     ), false
      @eq ( Ωctt__10 = -> ct.isa TMP_typespace1.primitive, ( => )     ), false
      #.....................................................................................................
      @eq ( Ωctt__11 = -> ct.isa TMP_typespace1.integer, 1            ), true
      @eq ( Ωctt__12 = -> ct.isa TMP_typespace1.integer, 1.1          ), false
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    isa: ->
      { Cleartype
        TMP_typespace1 } = require '../../../apps/cleartype'
      tt      = new Cleartype()
      { t2 }  = get_typespaces()
      #.....................................................................................................
      @eq ( Ωctt__13 = -> tt.isa TMP_typespace1.float, true                       ), false
      @eq ( Ωctt__14 = -> tt.isa TMP_typespace1.float, '3'                        ), false
      @eq ( Ωctt__15 = -> tt.isa TMP_typespace1.float, 337465                     ), true
      @eq ( Ωctt__16 = -> tt.isa t2.lt_constructor_cfg, 337465                    ), false
      @eq ( Ωctt__17 = -> tt.isa t2.lt_constructor_cfg, {}                        ), false
      @eq ( Ωctt__18 = -> tt.isa t2.lt_constructor_cfg, { loners: 8, }            ), false
      @eq ( Ωctt__19 = -> tt.isa t2.lt_constructor_cfg, { loners: true, }         ), true
      do =>
        contexts = new Set tt._contexts.keys()
        @eq ( Ωctt__20 = -> contexts.has TMP_typespace1.float                     ), true
        @eq ( Ωctt__21 = -> contexts.has t2.lt_constructor_cfg                    ), true
        @eq ( Ωctt__22 = -> contexts.has t2.lt_constructor_cfg.loners             ), true
        @eq ( Ωctt__23 = -> contexts.has TMP_typespace1.text                      ), false
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    create: ->
      { Cleartype
        TMP_typespace1 } = require '../../../apps/cleartype'
      tt      = new Cleartype()
      { t2 }  = get_typespaces()
      #.....................................................................................................
      @eq ( Ωctt__24 = -> tt.create t2.lt_constructor_cfg                         ), { loners: true, }
      @eq ( Ωctt__25 = -> tt.create t2.lt_constructor_cfg, null                   ), { loners: true, }
      @eq ( Ωctt__26 = -> tt.create t2.lt_constructor_cfg, undefined              ), { loners: true, }
      @throws ( Ωctt__27 = -> tt.create    t2.lt_constructor_cfg, { loners: 7, } ), /validation error/
      do =>
        contexts = new Set tt._contexts.keys()
        @eq ( Ωctt__28 = -> contexts.has t2.lt_constructor_cfg                    ), true
        @eq ( Ωctt__29 = -> contexts.has t2.lt_constructor_cfg.loners             ), true
        @eq ( Ωctt__30 = -> contexts.has TMP_typespace1.text                      ), false
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    validate: ->
      { Cleartype
        TMP_typespace1 } = require '../../../apps/cleartype'
      tt      = new Cleartype()
      { t2 }  = get_typespaces()
      #.....................................................................................................
      @eq ( Ωctt__31 = -> tt.validate t2.lt_constructor_cfg, { loners: true, }    ), { loners: true, }
      @throws ( Ωctt__32 = -> tt.validate  t2.lt_constructor_cfg, { loners: 8, }  ), /validation error/
      do =>
        contexts = new Set tt._contexts.keys()
        @eq ( Ωctt__33 = -> contexts.has t2.lt_constructor_cfg                    ), true
        @eq ( Ωctt__34 = -> contexts.has t2.lt_constructor_cfg.loners             ), true
        @eq ( Ωctt__35 = -> contexts.has TMP_typespace1.text                      ), false
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    instance_methods_are_bound: ->
      { Cleartype
        TMP_typespace1 } = require '../../../apps/cleartype'
      { t2 }  = get_typespaces()
      { isa
        isa_optional
        create
        validate
        validate_optional } = new Cleartype()
      #.....................................................................................................
      @eq (     Ωctt__36 = -> isa       TMP_typespace1.float, 337465              ), true
      @eq (     Ωctt__37 = -> isa       t2.lt_constructor_cfg, 337465             ), false
      @eq (     Ωctt__38 = -> create    t2.lt_constructor_cfg, undefined          ), { loners: true, }
      @throws ( Ωctt__39 = -> create    t2.lt_constructor_cfg, { loners: 7, }     ), /validation error/
      @eq (     Ωctt__40 = -> validate  t2.lt_constructor_cfg, { loners: true, }  ), { loners: true, }
      @throws ( Ωctt__41 = -> validate  t2.lt_constructor_cfg, { loners: 8, }     ), /validation error/
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    exported_methods_are_bound: ->
      { Cleartype
        TMP_typespace1 } = require '../../../apps/cleartype'
      { t2 }  = get_typespaces()
      { isa
        isa_optional
        create
        validate
        validate_optional } = require '../../../apps/cleartype'
      #.....................................................................................................
      @eq (     Ωctt__42 = -> isa       TMP_typespace1.float, 337465              ), true
      @eq (     Ωctt__43 = -> isa       t2.lt_constructor_cfg, 337465             ), false
      @eq (     Ωctt__44 = -> create    t2.lt_constructor_cfg, undefined          ), { loners: true, }
      @throws ( Ωctt__45 = -> create    t2.lt_constructor_cfg, { loners: 7, }     ), /validation error/
      @eq (     Ωctt__46 = -> validate  t2.lt_constructor_cfg, { loners: true, }  ), { loners: true, }
      @throws ( Ωctt__47 = -> validate  t2.lt_constructor_cfg, { loners: 8, }     ), /validation error/
      #.....................................................................................................
      return null



#===========================================================================================================
if module is require.main then await do =>
  ( new Test { throw_on_error: true, } ).test @cleartype_tasks
  # ( new Test { throw_on_error: true, } ).test { mvp_isa: @cleartype_tasks.MVP.isa, }
  # ( new Test { throw_on_error: true, } ).test { instance_methods_are_bound: @cleartype_tasks.basics.instance_methods_are_bound, }

  ->
    d =
      a: ->
        foo: 1
        bar: 2
    debug 'Ωctt__48', d
    debug 'Ωctt__49', d.a
    debug 'Ωctt__50', d.a.name
    debug 'Ωctt__51', d.a()
