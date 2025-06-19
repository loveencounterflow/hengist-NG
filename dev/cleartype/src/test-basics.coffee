
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
      std             } = require '../../../apps/cleartype'
    info 'Ω___1', std
    do =>
      echo()
      info 'Ω___2', std.integer
      info 'Ω___3', std.integer.isa 3.141
      info 'Ω___4', std.integer.isa 3
      info 'Ω___5', std.integer.create()
      info 'Ω___6', std.integer.create '3'
    do =>
      @eq ( Ωcltt___7 = -> std.text           instanceof Type ), true
      @eq ( Ωcltt___8 = -> std.float          instanceof Type ), true
      @eq ( Ωcltt___9 = -> std.integer        instanceof Type ), true
      @eq ( Ωcltt__10 = -> std.nonempty_text  instanceof Type ), true
      @eq ( Ωcltt__11 = -> std.quantity_q     instanceof Type ), true
      @eq ( Ωcltt__12 = -> std.quantity_u     instanceof Type ), true
      @eq ( Ωcltt__13 = -> std.quantity       instanceof Type ), true
    do =>
      @eq ( Ωcltt__14 = -> std.text.constructor.name          ), 'Text'
      @eq ( Ωcltt__15 = -> std.float.constructor.name         ), 'Float'
      @eq ( Ωcltt__16 = -> std.integer.constructor.name       ), 'Integer'
      @eq ( Ωcltt__17 = -> std.nonempty_text.constructor.name ), 'Nonempty_text'
      @eq ( Ωcltt__18 = -> std.quantity_q.constructor.name    ), 'Quantity_q'
      @eq ( Ωcltt__19 = -> std.quantity_u.constructor.name    ), 'Quantity_u'
      @eq ( Ωcltt__20 = -> std.quantity.constructor.name      ), 'Quantity'
    do =>
      @eq ( Ωcltt__21 = -> std.text.isa.name                  ), 'isa_text'
      @eq ( Ωcltt__22 = -> std.float.isa.name                 ), 'isa_float'
      @eq ( Ωcltt__23 = -> std.integer.isa.name               ), 'isa_integer'
      @eq ( Ωcltt__24 = -> std.nonempty_text.isa.name         ), 'isa_nonempty_text'
      @eq ( Ωcltt__25 = -> std.quantity_q.isa.name            ), 'isa_quantity_q'
      @eq ( Ωcltt__26 = -> std.quantity_u.isa.name            ), 'isa_quantity_u'
      @eq ( Ωcltt__27 = -> std.quantity.isa.name              ), 'isa_quantity'
    do =>
      @eq ( Ωcltt__28 = -> std.text.isa                  null ), false
      @eq ( Ωcltt__29 = -> std.float.isa                 null ), false
      @eq ( Ωcltt__30 = -> std.integer.isa               null ), false
      @eq ( Ωcltt__31 = -> std.nonempty_text.isa         null ), false
      @eq ( Ωcltt__32 = -> std.quantity_q.isa            null ), false
      @eq ( Ωcltt__33 = -> std.quantity_u.isa            null ), false
      @eq ( Ωcltt__34 = -> std.quantity.isa              null ), false
    do =>
      @eq ( Ωcltt__35 = -> std.text.isa                  Infinity ), false
      @eq ( Ωcltt__36 = -> std.float.isa                 Infinity ), false
      @eq ( Ωcltt__37 = -> std.integer.isa               Infinity ), false
      @eq ( Ωcltt__38 = -> std.nonempty_text.isa         Infinity ), false
      @eq ( Ωcltt__39 = -> std.quantity_q.isa            Infinity ), false
      @eq ( Ωcltt__40 = -> std.quantity_u.isa            Infinity ), false
      @eq ( Ωcltt__41 = -> std.quantity.isa              Infinity ), false
    do =>
      @eq ( Ωcltt__42 = -> std.text.isa           ''                        ), true
      @eq ( Ωcltt__43 = -> std.float.isa          7.56                      ), true
      @eq ( Ωcltt__44 = -> std.integer.isa        9                         ), true
      @eq ( Ωcltt__45 = -> std.nonempty_text.isa  'www'                     ), true
      @eq ( Ωcltt__46 = -> std.quantity_q.isa     1.5e32                    ), true
      @eq ( Ωcltt__47 = -> std.quantity_u.isa     'km'                      ), true
      @eq ( Ωcltt__48 = -> std.quantity.isa       { q: 1.5e32, u: 'km', }   ), true
    do =>
      echo()
      info 'Ω__49', std.nonempty_text
      @eq ( Ωcltt__50 = -> std.nonempty_text.isa 3.141                  ), false
      @eq ( Ωcltt__51 = -> std.nonempty_text.isa ''                     ), false
      @eq ( Ωcltt__52 = -> std.nonempty_text.isa 'd'                    ), true
      @eq ( Ωcltt__53 = -> std.text.create()                            ), ''
      @eq ( Ωcltt__54 = -> std.nonempty_text.create 'wat'               ), 'wat'
      @throws ( Ωcltt__55 = -> std.nonempty_text.create()               ), /validation/i
      @throws ( Ωcltt__56 = -> std.nonempty_text.create ''              ), /validation/i
      @throws ( Ωcltt__57 = -> std.nonempty_text.create null            ), /validation/i
      @throws ( Ωcltt__58 = -> std.nonempty_text.create undefined       ), /validation/i
      @throws ( Ωcltt__59 = -> std.nonempty_text.create false           ), /validation/i
      @eq ( Ωcltt__60 = -> std.nonempty_text.create 'd'                 ), 'd'
    do =>
      echo()
      info 'Ω__61', std.quantity
      @eq ( Ωcltt__62 = -> std.quantity.create()                        ), { q: 0, u: 'u', }
      @eq ( Ωcltt__63 = -> std.quantity.create    { q: 4.3, u: 's', }   ), { q: 4.3, u: 's', }
      @eq ( Ωcltt__64 = -> std.nonempty_text.create      'g'            ), 'g'
      @eq ( Ωcltt__65 = -> std.quantity_u.create         'g'            ), 'g'
      @eq ( Ωcltt__66 = -> std.quantity.fields.u.create  'g'            ), 'g'
      @throws ( Ωcltt__67 = -> std.quantity.fields.u.create  false          ), /validation/i
    do =>
      echo()
      help 'Ω__68', std.quantity
      help 'Ω__69', std.quantity.constructor
      help 'Ω__70', std.quantity.constructor.name
      help 'Ω__71', std.quantity.isa
      help 'Ω__72', std.quantity.isa {}
      @eq ( Ωcltt__73 = -> std.quantity.isa { u: 7, q: 3, }           ), false
      @eq ( Ωcltt__74 = -> std.quantity.isa { u: '7', q: 3, }         ), true
      @eq ( Ωcltt__75 = -> std.quantity.isa { u: '7', q: Infinity, }  ), false
      @eq ( Ωcltt__76 = -> std.quantity.isa { u: '7', q: NaN, }       ), false
      @eq ( Ωcltt__77 = -> std.quantity.name                          ), 'quantity'
      @eq ( Ωcltt__78 = -> std.integer.name                           ), 'integer'
      @eq ( Ωcltt__79 = -> std.quantity_q.name                        ), 'quantity_q'
      @eq ( Ωcltt__80 = -> std.quantity_u.name                        ), 'quantity_u'
      echo()
      help 'Ω__81', std.text.isa
      help 'Ω__82', std.text.isa 'abc'
      help 'Ω__83', std.text.isa Array.from 'abc'
      echo()
      help 'Ω__84', std.nonempty_text
      help 'Ω__85', std.nonempty_text.isa
      @eq ( Ωcltt__86 = -> std.nonempty_text.isa 'abc'            ), true
      @eq ( Ωcltt__87 = -> std.nonempty_text.isa Array.from 'abc' ), false
      return null
    do =>
      echo()
      for typename, type of std
        @eq ( Ωcltt__88 = -> type.name          ), typename
        @eq ( Ωcltt__89 = -> type.isa.name      ), "isa_#{typename}"
        @eq ( Ωcltt__90 = -> type.create.name   ), "create_#{typename}"
        debug 'Ω__91', [typename, type.create.name, ]
      return null
    #.......................................................................................................
    for typename, type of std
      urge 'Ω__92', f"#{typename}:<20c; #{type.constructor.name}:<20c; #{type.isa.name}:<20c;"
    #.......................................................................................................
    debug 'Ω__93', 'integer                 template  ', std.integer.template
    debug 'Ω__94', 'integer                 fields    ', std.integer.fields
    debug 'Ω__95', 'quantity                template  ', std.quantity.template
    debug 'Ω__96', 'quantity                fields    ', std.quantity.fields
    debug 'Ω__97', 'quantity_with_template  template  ', std.quantity_with_template.template
    debug 'Ω__98', 'quantity_with_template  fields    ', std.quantity_with_template.fields
    #.......................................................................................................
    return null

  #=========================================================================================================
  templates: ->
    { Type
      internals
      std             } = require '../../../apps/cleartype'
    do =>
      @eq ( Ωcltt_100 = -> std.text.template?                             ), true
      @eq ( Ωcltt_101 = -> internals.gnd.function.isa std.text.template   ), true
      @eq ( Ωcltt_102 = -> std.text.template()                            ), ''
      return null
    #.......................................................................................................
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
  #     @eq (     Ωctt_103 = -> isa               lt_types.lt_constructor_cfg, 337465             ), false
  #     @eq (     Ωctt_104 = -> isa_optional      lt_types.lt_constructor_cfg, 337465             ), false
  #     @eq (     Ωctt_105 = -> isa_optional      lt_types.lt_constructor_cfg, null               ), true
  #     @eq (     Ωctt_106 = -> create            lt_types.lt_constructor_cfg, undefined          ), { loners: true, }
  #     @throws ( Ωctt_107 = -> create            lt_types.lt_constructor_cfg, { loners: 7, }     ), /validation error/
  #     @eq (     Ωctt_108 = -> validate_optional lt_types.lt_constructor_cfg, { loners: true, }  ), { loners: true, }
  #     @eq (     Ωctt_109 = -> validate_optional lt_types.lt_constructor_cfg, null               ), null
  #     @eq (     Ωctt_110 = -> validate          lt_types.lt_constructor_cfg, { loners: true, }  ), { loners: true, }
  #     @throws ( Ωctt_111 = -> validate          lt_types.lt_constructor_cfg, { loners: 8, }     ), /validation error/
  #     @throws ( Ωctt_112 = -> validate_optional lt_types.lt_constructor_cfg, { loners: 8, }     ), /validation error/
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
  #     @eq (     Ωctt_113 = -> isa               lt_types.lt_nodelist, 337465              ), false
  #     @eq (     Ωctt_114 = -> isa               lt_types.lt_nodelist, []                  ), true
  #     @eq (     Ωctt_115 = -> isa               lt_types.lt_nodelist, [ 'name', ]         ), true
  #     @eq (     Ωctt_116 = -> isa               lt_types.lt_nodelist, [ 'name', 3, ]      ), false
  #     @eq (     Ωctt_117 = -> isa_optional      lt_types.lt_nodelist, 337465              ), false
  #     @eq (     Ωctt_118 = -> isa_optional      lt_types.lt_nodelist, null                ), true
  #     @eq (     Ωctt_119 = -> create            lt_types.lt_nodelist, undefined           ), []
  #     @throws ( Ωctt_120 = -> create            lt_types.lt_nodelist, { loners: 7, }      ), /validation error/
  #     @eq (     Ωctt_121 = -> validate_optional lt_types.lt_nodelist, []                  ), []
  #     @eq (     Ωctt_122 = -> validate_optional lt_types.lt_nodelist, null                ), null
  #     # @eq (     Ωctt_123 = -> validate          lt_types.lt_nodelist, { loners: true, }  ), { loners: true, }
  #     # @throws ( Ωctt_124 = -> validate          lt_types.lt_nodelist, { loners: 8, }     ), /validation error/
  #     # @throws ( Ωctt_125 = -> validate_optional lt_types.lt_nodelist, { loners: 8, }     ), /validation error/
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
  #     @eq (     Ωctt_126 = -> isa               lt_types.lt_add_cfg.name, 337465              ), false
  #     @eq (     Ωctt_127 = -> isa               lt_types.lt_add_cfg.name, ''                  ), false
  #     @eq (     Ωctt_128 = -> isa               lt_types.lt_add_cfg.name, 'foo'               ), true
  #     @eq (     Ωctt_129 = -> isa               lt_types.lt_add_cfg.needs, 337465             ), false
  #     @eq (     Ωctt_130 = -> isa               lt_types.lt_add_cfg.needs, [ 337465, ]        ), false
  #     @eq (     Ωctt_131 = -> isa               lt_types.lt_add_cfg.needs, [ '337465', ]      ), true
  #     @eq (     Ωctt_132 = -> isa               lt_types.lt_add_cfg.needs, []                 ), true
  #     @eq (     Ωctt_133 = -> isa               lt_types.lt_add_cfg.precedes, 337465          ), false
  #     @eq (     Ωctt_134 = -> isa               lt_types.lt_add_cfg.precedes, [ 337465, ]     ), false
  #     @eq (     Ωctt_135 = -> isa               lt_types.lt_add_cfg.precedes, []              ), true
  #     @eq (     Ωctt_136 = -> isa               lt_types.lt_add_cfg.precedes, [ '337465', ]   ), true
  #     @eq (     Ωctt_137 = -> isa               lt_types.lt_add_cfg, 337465                   ), false
  #     @eq (     Ωctt_138 = -> isa               lt_types.lt_add_cfg, {}                       ), false
  #     @eq (     Ωctt_139 = -> isa               lt_types.lt_add_cfg, { name: 'g', precedes: null, needs: null     }    ), true
  #     @eq (     Ωctt_140 = -> isa               lt_types.lt_add_cfg, { name: 'g', precedes: [], needs: [ 'name', ]     }    ), true
  #     @eq (     Ωctt_141 = -> isa               lt_types.lt_add_cfg, { name: 'g', precedes: [], needs: [ 'name', 3, ]  }    ), false
  #     @eq (     Ωctt_142 = -> create            lt_types.lt_add_cfg, { name: 'g', precedes: [], needs: [ 'name', ]     }    ), { name: 'g', precedes: [], needs: [ 'name', ]  }
  #     @eq (     Ωctt_143 = -> create            lt_types.lt_add_cfg, { name: 'g',                                      }    ), { name: 'g', precedes: null, needs: null  }
  #     # @eq (     Ωctt_144 = -> isa_optional      lt_types.lt_add_cfg, 337465              ), false
  #     # @eq (     Ωctt_145 = -> isa_optional      lt_types.lt_add_cfg, null                ), true
  #     # @eq (     Ωctt_146 = -> create            lt_types.lt_add_cfg, undefined           ), []
  #     # @throws ( Ωctt_147 = -> create            lt_types.lt_add_cfg, { loners: 7, }      ), /validation error/
  #     # @eq (     Ωctt_148 = -> validate_optional lt_types.lt_add_cfg, []                  ), []
  #     # @eq (     Ωctt_149 = -> validate_optional lt_types.lt_add_cfg, null                ), null
  #     # @eq (     Ωctt_150 = -> validate          lt_types.lt_add_cfg, { loners: true, }  ), { loners: true, }
  #     # @throws ( Ωctt_151 = -> validate          lt_types.lt_add_cfg, { loners: 8, }     ), /validation error/
  #     # @throws ( Ωctt_152 = -> validate_optional lt_types.lt_add_cfg, { loners: 8, }     ), /validation error/
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
  #     @eq (     Ωctt_153 = -> isa               lt_types.lt_linearize_cfg, 337465                   ), false
  #     @eq (     Ωctt_154 = -> isa               lt_types.lt_linearize_cfg, {}                       ), false
  #     @eq (     Ωctt_155 = -> isa               lt_types.lt_linearize_cfg, { groups: 5, }           ), false
  #     @eq (     Ωctt_156 = -> isa               lt_types.lt_linearize_cfg, { groups: true, }        ), true
  #     @eq (     Ωctt_157 = -> isa               lt_types.lt_linearize_cfg, { groups: false, }       ), true
  #     @eq (     Ωctt_158 = -> create            lt_types.lt_linearize_cfg, { groups: true,  }       ), { groups: true, }
  #     @eq (     Ωctt_159 = -> create            lt_types.lt_linearize_cfg, { groups: false, }       ), { groups: false, }
  #     @eq (     Ωctt_160 = -> create            lt_types.lt_linearize_cfg, {}                       ), { groups: false, }
  #     @eq (     Ωctt_161 = -> create            lt_types.lt_linearize_cfg, null                     ), { groups: false, }
  #     #.....................................................................................................
  #     return null

  #=========================================================================================================
  standard_basic_methods:

    #-------------------------------------------------------------------------------------------------------
    type_of: ->
      { type_of } = require '../../../apps/cleartype'
      @eq ( Ωctt_162 = -> type_of null                  ), 'null'
      @eq ( Ωctt_163 = -> type_of undefined             ), 'undefined'
      @eq ( Ωctt_164 = -> type_of +Infinity             ), 'infinity'
      @eq ( Ωctt_165 = -> type_of -Infinity             ), 'infinity'
      @eq ( Ωctt_166 = -> type_of true                  ), 'boolean'
      @eq ( Ωctt_167 = -> type_of false                 ), 'boolean'
      @eq ( Ωctt_168 = -> type_of NaN                   ), 'nan'
      @eq ( Ωctt_169 = -> type_of 8                     ), 'float'
      @eq ( Ωctt_170 = -> type_of /xxx/                 ), 'regex'
      @eq ( Ωctt_171 = -> type_of 'xyz'                 ), 'text'
      @eq ( Ωctt_172 = -> type_of [ 'xyz', ]            ), 'list'
      @eq ( Ωctt_173 = -> type_of {}                    ), 'object'
      #.....................................................................................................
      return null


#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test @cleartype_tasks
