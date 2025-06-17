
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
{ f }                     = require '../../../apps/effstring'


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
  basics: ->
    { Type
      std2
      std             } = require '../../../apps/cleartype'
    info 'Ω___8', std
    do =>
      echo()
      info 'Ω___9', std.integer
      info 'Ω__10', std.integer.isa 3.141
      info 'Ω__11', std.integer.isa 3
      info 'Ω__12', std.integer.create '3'
      info 'Ω__13', std.integer.create()
    do =>
      @eq ( Ωcltt__14 = -> std.text           instanceof Type ), true
      @eq ( Ωcltt__15 = -> std.float          instanceof Type ), true
      @eq ( Ωcltt__16 = -> std.integer        instanceof Type ), true
      @eq ( Ωcltt__17 = -> std.nonempty_text  instanceof Type ), true
      @eq ( Ωcltt__18 = -> std.quantity_q     instanceof Type ), true
      @eq ( Ωcltt__19 = -> std.quantity_u     instanceof Type ), true
      @eq ( Ωcltt__20 = -> std.quantity       instanceof Type ), true
    do =>
      @eq ( Ωcltt__21 = -> std.text.constructor.name          ), 'Text'
      @eq ( Ωcltt__22 = -> std.float.constructor.name         ), 'Float'
      @eq ( Ωcltt__23 = -> std.integer.constructor.name       ), 'Integer'
      @eq ( Ωcltt__24 = -> std.nonempty_text.constructor.name ), 'Nonempty_text'
      @eq ( Ωcltt__25 = -> std.quantity_q.constructor.name    ), 'Quantity_q'
      @eq ( Ωcltt__26 = -> std.quantity_u.constructor.name    ), 'Quantity_u'
      @eq ( Ωcltt__27 = -> std.quantity.constructor.name      ), 'Quantity'
    do =>
      @eq ( Ωcltt__28 = -> std.text.isa.name                  ), 'isa_text'
      @eq ( Ωcltt__29 = -> std.float.isa.name                 ), 'isa_float'
      @eq ( Ωcltt__30 = -> std.integer.isa.name               ), 'isa_integer'
      @eq ( Ωcltt__31 = -> std.nonempty_text.isa.name         ), 'isa_nonempty_text'
      @eq ( Ωcltt__32 = -> std.quantity_q.isa.name            ), 'isa_quantity_q'
      @eq ( Ωcltt__33 = -> std.quantity_u.isa.name            ), 'isa_quantity_u'
      @eq ( Ωcltt__34 = -> std.quantity.isa.name              ), 'isa_quantity'
    do =>
      @eq ( Ωcltt__35 = -> std.text.isa                  null ), false
      @eq ( Ωcltt__36 = -> std.float.isa                 null ), false
      @eq ( Ωcltt__37 = -> std.integer.isa               null ), false
      @eq ( Ωcltt__38 = -> std.nonempty_text.isa         null ), false
      @eq ( Ωcltt__39 = -> std.quantity_q.isa            null ), false
      @eq ( Ωcltt__40 = -> std.quantity_u.isa            null ), false
      @eq ( Ωcltt__41 = -> std.quantity.isa              null ), false
    do =>
      @eq ( Ωcltt__42 = -> std.text.isa                  Infinity ), false
      @eq ( Ωcltt__43 = -> std.float.isa                 Infinity ), false
      @eq ( Ωcltt__44 = -> std.integer.isa               Infinity ), false
      @eq ( Ωcltt__45 = -> std.nonempty_text.isa         Infinity ), false
      @eq ( Ωcltt__46 = -> std.quantity_q.isa            Infinity ), false
      @eq ( Ωcltt__47 = -> std.quantity_u.isa            Infinity ), false
      @eq ( Ωcltt__48 = -> std.quantity.isa              Infinity ), false
    do =>
      @eq ( Ωcltt__49 = -> std.text.isa           ''                        ), true
      @eq ( Ωcltt__50 = -> std.float.isa          7.56                      ), true
      @eq ( Ωcltt__51 = -> std.integer.isa        9                         ), true
      @eq ( Ωcltt__52 = -> std.nonempty_text.isa  'www'                     ), true
      @eq ( Ωcltt__56 = -> std.quantity_q.isa     1.5e32                    ), true
      @eq ( Ωcltt__57 = -> std.quantity_u.isa     'km'                      ), true
      @eq ( Ωcltt__58 = -> std.quantity.isa       { q: 1.5e32, u: 'km', }   ), true
    do =>
      echo()
      info 'Ω__59', std.nonempty_text
      @eq ( Ωcltt__60 = -> std.nonempty_text.isa 3.141                  ), false
      @eq ( Ωcltt__61 = -> std.nonempty_text.isa ''                     ), false
      @eq ( Ωcltt__62 = -> std.nonempty_text.isa 'd'                    ), true
      @eq ( Ωcltt__63 = -> std.nonempty_text.create()                   ), ''
      @eq ( Ωcltt__64 = -> std.nonempty_text.create false               ), 'false'
      @eq ( Ωcltt__65 = -> std.nonempty_text.create 'd'                 ), 'd'
    do =>
      echo()
      info 'Ω__66', std.quantity
      @eq ( Ωcltt__67 = -> std.quantity.create()                        ), { q: 0, u: 'u', }
      @eq ( Ωcltt__68 = -> std.quantity.create    { q: 4.3, u: 's', }   ), { q: 4.3, u: 's', }
      info 'Ω__69', std.nonempty_text.create      'g'
      info 'Ω__70', std.quantity_u.create         'g'
      info 'Ω__71', std.quantity.fields.u.create  'g'
    do =>
      echo()
      help 'Ω__72', std.quantity
      help 'Ω__73', std.quantity.constructor
      help 'Ω__74', std.quantity.constructor.name
      help 'Ω__75', std.quantity.isa
      help 'Ω__76', std.quantity.isa {}
      help 'Ω__77', std.quantity.isa { u: 7, q: 3, }
      help 'Ω__78', std.quantity.isa { u: '7', q: 3, }
      help 'Ω__79', std.quantity.isa { u: '7', q: Infinity, }
      @eq ( Ωcltt__80 = -> std.quantity.name                    ), 'quantity'
      @eq ( Ωcltt__81 = -> std.integer.name                     ), 'integer'
      @eq ( Ωcltt__82 = -> std.quantity_q.name                  ), 'quantity_q'
      @eq ( Ωcltt__83 = -> std.quantity_u.name                  ), 'quantity_u'
      echo()
      help 'Ω__84', std.text.isa
      help 'Ω__85', std.text.isa 'abc'
      help 'Ω__86', std.text.isa Array.from 'abc'
      echo()
      help 'Ω__87', std.nonempty_text
      help 'Ω__88', std.nonempty_text.isa
      @eq ( Ωcltt__89 = -> std.nonempty_text.isa 'abc'            ), true
      @eq ( Ωcltt__90 = -> std.nonempty_text.isa Array.from 'abc' ), false
      return null
    do =>
      echo()
      for typename, type of std
        @eq ( Ωcltt__91 = -> type.isa.name ), "isa_#{typename}"
      return null
    #.......................................................................................................
    for typename, type of std
      urge 'Ω__92', f"#{typename}:<20c; #{type.constructor.name}:<20c; #{type.isa.name}:<20c;"
    return null



  # #=========================================================================================================
  # lt_types:

  #   #-------------------------------------------------------------------------------------------------------
  #   lt_constructor_cfg: ->
  #     { Cleartype
  #       std } = require '../../../apps/cleartype'
  #     { lt_types }  = get_typespaces()
  #     { isa
  #       isa_optional
  #       create
  #       validate
  #       validate_optional } = require '../../../apps/cleartype'
  #     #.....................................................................................................
  #     @eq (     Ωctt__59 = -> isa               lt_types.lt_constructor_cfg, 337465             ), false
  #     @eq (     Ωctt__60 = -> isa_optional      lt_types.lt_constructor_cfg, 337465             ), false
  #     @eq (     Ωctt__61 = -> isa_optional      lt_types.lt_constructor_cfg, null               ), true
  #     @eq (     Ωctt__62 = -> create            lt_types.lt_constructor_cfg, undefined          ), { loners: true, }
  #     @throws ( Ωctt__63 = -> create            lt_types.lt_constructor_cfg, { loners: 7, }     ), /validation error/
  #     @eq (     Ωctt__64 = -> validate_optional lt_types.lt_constructor_cfg, { loners: true, }  ), { loners: true, }
  #     @eq (     Ωctt__65 = -> validate_optional lt_types.lt_constructor_cfg, null               ), null
  #     @eq (     Ωctt__66 = -> validate          lt_types.lt_constructor_cfg, { loners: true, }  ), { loners: true, }
  #     @throws ( Ωctt__67 = -> validate          lt_types.lt_constructor_cfg, { loners: 8, }     ), /validation error/
  #     @throws ( Ωctt__68 = -> validate_optional lt_types.lt_constructor_cfg, { loners: 8, }     ), /validation error/
  #     #.....................................................................................................
  #     return null

  #   #-------------------------------------------------------------------------------------------------------
  #   lt_nodelist: ->
  #     { Cleartype
  #       std } = require '../../../apps/cleartype'
  #     { lt_types }  = get_typespaces()
  #     { isa
  #       isa_optional
  #       create
  #       validate
  #       validate_optional } = require '../../../apps/cleartype'
  #     #.....................................................................................................
  #     @eq (     Ωctt__69 = -> isa               lt_types.lt_nodelist, 337465              ), false
  #     @eq (     Ωctt__70 = -> isa               lt_types.lt_nodelist, []                  ), true
  #     @eq (     Ωctt__71 = -> isa               lt_types.lt_nodelist, [ 'name', ]         ), true
  #     @eq (     Ωctt__72 = -> isa               lt_types.lt_nodelist, [ 'name', 3, ]      ), false
  #     @eq (     Ωctt__73 = -> isa_optional      lt_types.lt_nodelist, 337465              ), false
  #     @eq (     Ωctt__74 = -> isa_optional      lt_types.lt_nodelist, null                ), true
  #     @eq (     Ωctt__75 = -> create            lt_types.lt_nodelist, undefined           ), []
  #     @throws ( Ωctt__76 = -> create            lt_types.lt_nodelist, { loners: 7, }      ), /validation error/
  #     @eq (     Ωctt__77 = -> validate_optional lt_types.lt_nodelist, []                  ), []
  #     @eq (     Ωctt__78 = -> validate_optional lt_types.lt_nodelist, null                ), null
  #     # @eq (     Ωctt__79 = -> validate          lt_types.lt_nodelist, { loners: true, }  ), { loners: true, }
  #     # @throws ( Ωctt__80 = -> validate          lt_types.lt_nodelist, { loners: 8, }     ), /validation error/
  #     # @throws ( Ωctt__81 = -> validate_optional lt_types.lt_nodelist, { loners: 8, }     ), /validation error/
  #     #.....................................................................................................
  #     return null

  #   #-------------------------------------------------------------------------------------------------------
  #   lt_add_cfg: ->
  #     { Cleartype
  #       std } = require '../../../apps/cleartype'
  #     { lt_types }  = get_typespaces()
  #     { isa
  #       isa_optional
  #       create
  #       validate
  #       validate_optional } = require '../../../apps/cleartype'
  #     #.....................................................................................................
  #     @eq (     Ωctt__82 = -> isa               lt_types.lt_add_cfg.name, 337465              ), false
  #     @eq (     Ωctt__83 = -> isa               lt_types.lt_add_cfg.name, ''                  ), false
  #     @eq (     Ωctt__84 = -> isa               lt_types.lt_add_cfg.name, 'foo'               ), true
  #     @eq (     Ωctt__85 = -> isa               lt_types.lt_add_cfg.needs, 337465             ), false
  #     @eq (     Ωctt__86 = -> isa               lt_types.lt_add_cfg.needs, [ 337465, ]        ), false
  #     @eq (     Ωctt__87 = -> isa               lt_types.lt_add_cfg.needs, [ '337465', ]      ), true
  #     @eq (     Ωctt__88 = -> isa               lt_types.lt_add_cfg.needs, []                 ), true
  #     @eq (     Ωctt__89 = -> isa               lt_types.lt_add_cfg.precedes, 337465          ), false
  #     @eq (     Ωctt__90 = -> isa               lt_types.lt_add_cfg.precedes, [ 337465, ]     ), false
  #     @eq (     Ωctt__91 = -> isa               lt_types.lt_add_cfg.precedes, []              ), true
  #     @eq (     Ωctt__92 = -> isa               lt_types.lt_add_cfg.precedes, [ '337465', ]   ), true
  #     @eq (     Ωctt__93 = -> isa               lt_types.lt_add_cfg, 337465                   ), false
  #     @eq (     Ωctt__94 = -> isa               lt_types.lt_add_cfg, {}                       ), false
  #     @eq (     Ωctt__95 = -> isa               lt_types.lt_add_cfg, { name: 'g', precedes: null, needs: null     }    ), true
  #     @eq (     Ωctt__96 = -> isa               lt_types.lt_add_cfg, { name: 'g', precedes: [], needs: [ 'name', ]     }    ), true
  #     @eq (     Ωctt__97 = -> isa               lt_types.lt_add_cfg, { name: 'g', precedes: [], needs: [ 'name', 3, ]  }    ), false
  #     @eq (     Ωctt__98 = -> create            lt_types.lt_add_cfg, { name: 'g', precedes: [], needs: [ 'name', ]     }    ), { name: 'g', precedes: [], needs: [ 'name', ]  }
  #     @eq (     Ωctt__99 = -> create            lt_types.lt_add_cfg, { name: 'g',                                      }    ), { name: 'g', precedes: null, needs: null  }
  #     # @eq (     Ωctt_100 = -> isa_optional      lt_types.lt_add_cfg, 337465              ), false
  #     # @eq (     Ωctt_101 = -> isa_optional      lt_types.lt_add_cfg, null                ), true
  #     # @eq (     Ωctt_102 = -> create            lt_types.lt_add_cfg, undefined           ), []
  #     # @throws ( Ωctt_103 = -> create            lt_types.lt_add_cfg, { loners: 7, }      ), /validation error/
  #     # @eq (     Ωctt_104 = -> validate_optional lt_types.lt_add_cfg, []                  ), []
  #     # @eq (     Ωctt_105 = -> validate_optional lt_types.lt_add_cfg, null                ), null
  #     # @eq (     Ωctt_106 = -> validate          lt_types.lt_add_cfg, { loners: true, }  ), { loners: true, }
  #     # @throws ( Ωctt_107 = -> validate          lt_types.lt_add_cfg, { loners: 8, }     ), /validation error/
  #     # @throws ( Ωctt_108 = -> validate_optional lt_types.lt_add_cfg, { loners: 8, }     ), /validation error/
  #     #.....................................................................................................
  #     return null

  #   #-------------------------------------------------------------------------------------------------------
  #   lt_linearize_cfg: ->
  #     { Cleartype
  #       std } = require '../../../apps/cleartype'
  #     { lt_types }  = get_typespaces()
  #     { isa
  #       isa_optional
  #       create
  #       validate
  #       validate_optional } = require '../../../apps/cleartype'
  #     #.....................................................................................................
  #     @eq (     Ωctt_109 = -> isa               lt_types.lt_linearize_cfg, 337465                   ), false
  #     @eq (     Ωctt_110 = -> isa               lt_types.lt_linearize_cfg, {}                       ), false
  #     @eq (     Ωctt_111 = -> isa               lt_types.lt_linearize_cfg, { groups: 5, }           ), false
  #     @eq (     Ωctt_112 = -> isa               lt_types.lt_linearize_cfg, { groups: true, }        ), true
  #     @eq (     Ωctt_113 = -> isa               lt_types.lt_linearize_cfg, { groups: false, }       ), true
  #     @eq (     Ωctt_114 = -> create            lt_types.lt_linearize_cfg, { groups: true,  }       ), { groups: true, }
  #     @eq (     Ωctt_115 = -> create            lt_types.lt_linearize_cfg, { groups: false, }       ), { groups: false, }
  #     @eq (     Ωctt_116 = -> create            lt_types.lt_linearize_cfg, {}                       ), { groups: false, }
  #     @eq (     Ωctt_117 = -> create            lt_types.lt_linearize_cfg, null                     ), { groups: false, }
  #     #.....................................................................................................
  #     return null

  #=========================================================================================================
  standard_basic_methods:

    #-------------------------------------------------------------------------------------------------------
    type_of: ->
      { type_of } = require '../../../apps/cleartype'
      @eq ( Ωctt_118 = -> type_of null                  ), 'null'
      @eq ( Ωctt_119 = -> type_of undefined             ), 'undefined'
      @eq ( Ωctt_120 = -> type_of +Infinity             ), 'infinity'
      @eq ( Ωctt_121 = -> type_of -Infinity             ), 'infinity'
      @eq ( Ωctt_122 = -> type_of true                  ), 'boolean'
      @eq ( Ωctt_123 = -> type_of false                 ), 'boolean'
      @eq ( Ωctt_124 = -> type_of NaN                   ), 'nan'
      @eq ( Ωctt_125 = -> type_of 8                     ), 'float'
      @eq ( Ωctt_126 = -> type_of /xxx/                 ), 'regex'
      @eq ( Ωctt_127 = -> type_of 'xyz'                 ), 'text'
      @eq ( Ωctt_128 = -> type_of [ 'xyz', ]            ), 'list'
      @eq ( Ωctt_129 = -> type_of {}                    ), 'object'
      #.....................................................................................................
      return null


#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: true, show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test @cleartype_tasks
