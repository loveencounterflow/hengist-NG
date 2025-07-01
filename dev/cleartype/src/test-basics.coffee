
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



############################################################################################################
#
#===========================================================================================================
@cleartype_tasks =

  #=========================================================================================================
  basics: ->
    CT                  = require '../../../apps/cleartype'
    { Type
      std             } = CT
    info 'Ω___1', Object.keys CT
    info 'Ω___2', CT.std
    do =>
      @eq ( Ωcltt___3 = -> CT.type_of?    ), true
      @eq ( Ωcltt___4 = -> CT.Type?       ), true
      @eq ( Ωcltt___5 = -> CT.Typespace?  ), true
      @eq ( Ωcltt___6 = -> CT.internals?  ), true
      @eq ( Ωcltt___7 = -> CT.std?        ), true
    do =>
      echo()
      info 'Ω___8', std.integer
      info 'Ω___9', std.integer.isa 3.141
      info 'Ω__10', std.integer.isa 3
      info 'Ω__11', std.integer.create()
      info 'Ω__12', std.integer.create '3'
    do =>
      @eq ( Ωcltt__13 = -> std.text           instanceof Type ), true
      @eq ( Ωcltt__14 = -> std.float          instanceof Type ), true
      @eq ( Ωcltt__15 = -> std.integer        instanceof Type ), true
      @eq ( Ωcltt__16 = -> std.nonempty_text  instanceof Type ), true
      @eq ( Ωcltt__17 = -> std.quantity_q     instanceof Type ), true
      @eq ( Ωcltt__18 = -> std.quantity_u     instanceof Type ), true
      @eq ( Ωcltt__19 = -> std.quantity       instanceof Type ), true
    do =>
      @eq ( Ωcltt__20 = -> std.text.constructor.name          ), 'Text'
      @eq ( Ωcltt__21 = -> std.float.constructor.name         ), 'Float'
      @eq ( Ωcltt__22 = -> std.integer.constructor.name       ), 'Integer'
      @eq ( Ωcltt__23 = -> std.nonempty_text.constructor.name ), 'Nonempty_text'
      @eq ( Ωcltt__24 = -> std.quantity_q.constructor.name    ), 'Quantity_q'
      @eq ( Ωcltt__25 = -> std.quantity_u.constructor.name    ), 'Quantity_u'
      @eq ( Ωcltt__26 = -> std.quantity.constructor.name      ), 'Quantity'
    do =>
      @eq ( Ωcltt__27 = -> std.text.isa.name                  ), 'isa_text'
      @eq ( Ωcltt__28 = -> std.float.isa.name                 ), 'isa_float'
      @eq ( Ωcltt__29 = -> std.integer.isa.name               ), 'isa_integer'
      @eq ( Ωcltt__30 = -> std.nonempty_text.isa.name         ), 'isa_nonempty_text'
      @eq ( Ωcltt__31 = -> std.quantity_q.isa.name            ), 'isa_quantity_q'
      @eq ( Ωcltt__32 = -> std.quantity_u.isa.name            ), 'isa_quantity_u'
      @eq ( Ωcltt__33 = -> std.quantity.isa.name              ), 'isa_quantity'
    do =>
      @eq ( Ωcltt__34 = -> std.text.isa                  null ), false
      @eq ( Ωcltt__35 = -> std.float.isa                 null ), false
      @eq ( Ωcltt__36 = -> std.integer.isa               null ), false
      @eq ( Ωcltt__37 = -> std.nonempty_text.isa         null ), false
      @eq ( Ωcltt__38 = -> std.quantity_q.isa            null ), false
      @eq ( Ωcltt__39 = -> std.quantity_u.isa            null ), false
      @eq ( Ωcltt__40 = -> std.quantity.isa              null ), false
    do =>
      @eq ( Ωcltt__41 = -> std.text.isa                  Infinity ), false
      @eq ( Ωcltt__42 = -> std.float.isa                 Infinity ), false
      @eq ( Ωcltt__43 = -> std.integer.isa               Infinity ), false
      @eq ( Ωcltt__44 = -> std.nonempty_text.isa         Infinity ), false
      @eq ( Ωcltt__45 = -> std.quantity_q.isa            Infinity ), false
      @eq ( Ωcltt__46 = -> std.quantity_u.isa            Infinity ), false
      @eq ( Ωcltt__47 = -> std.quantity.isa              Infinity ), false
    do =>
      @eq ( Ωcltt__48 = -> std.text.isa           ''                        ), true
      @eq ( Ωcltt__49 = -> std.float.isa          7.56                      ), true
      @eq ( Ωcltt__50 = -> std.integer.isa        9                         ), true
      @eq ( Ωcltt__51 = -> std.nonempty_text.isa  'www'                     ), true
      @eq ( Ωcltt__52 = -> std.quantity_q.isa     1.5e32                    ), true
      @eq ( Ωcltt__53 = -> std.quantity_u.isa     'km'                      ), true
      @eq ( Ωcltt__54 = -> std.quantity.isa       { q: 1.5e32, u: 'km', }   ), true
    do =>
      echo()
      info 'Ω__55', std.nonempty_text
      @eq ( Ωcltt__56 = -> std.nonempty_text.isa 3.141                  ), false
      @eq ( Ωcltt__57 = -> std.nonempty_text.isa ''                     ), false
      @eq ( Ωcltt__58 = -> std.nonempty_text.isa 'd'                    ), true
      @eq ( Ωcltt__59 = -> std.text.create()                            ), ''
      @eq ( Ωcltt__60 = -> std.nonempty_text.create 'wat'               ), 'wat'
      @throws ( Ωcltt__61 = -> std.nonempty_text.create()               ), /validation/i
      @throws ( Ωcltt__62 = -> std.nonempty_text.create ''              ), /validation/i
      @throws ( Ωcltt__63 = -> std.nonempty_text.create null            ), /validation/i
      @throws ( Ωcltt__64 = -> std.nonempty_text.create undefined       ), /validation/i
      @throws ( Ωcltt__65 = -> std.nonempty_text.create false           ), /validation/i
      @eq ( Ωcltt__66 = -> std.nonempty_text.create 'd'                 ), 'd'
    do =>
      echo()
      info 'Ω__67', std.quantity
      @eq ( Ωcltt__68 = -> std.quantity.create()                        ), { q: 0, u: 'u', }
      @eq ( Ωcltt__69 = -> std.quantity.create    { q: 4.3, u: 's', }   ), { q: 4.3, u: 's', }
      @eq ( Ωcltt__70 = -> std.nonempty_text.create      'g'            ), 'g'
      @eq ( Ωcltt__71 = -> std.quantity_u.create         'g'            ), 'g'
      @eq ( Ωcltt__72 = -> std.quantity.fields.u.create  'g'            ), 'g'
      @throws ( Ωcltt__73 = -> std.quantity.fields.u.create  false          ), /validation/i
    do =>
      echo()
      help 'Ω__74', std.quantity
      help 'Ω__75', std.quantity.constructor
      help 'Ω__76', std.quantity.constructor.name
      help 'Ω__77', std.quantity.isa
      help 'Ω__78', std.quantity.isa {}
      @eq ( Ωcltt__79 = -> std.quantity.isa { u: 7, q: 3, }           ), false
      @eq ( Ωcltt__80 = -> std.quantity.isa { u: '7', q: 3, }         ), true
      @eq ( Ωcltt__81 = -> std.quantity.isa { u: '7', q: Infinity, }  ), false
      @eq ( Ωcltt__82 = -> std.quantity.isa { u: '7', q: NaN, }       ), false
      @eq ( Ωcltt__83 = -> std.quantity.name                          ), 'quantity'
      @eq ( Ωcltt__84 = -> std.integer.name                           ), 'integer'
      @eq ( Ωcltt__85 = -> std.quantity_q.name                        ), 'quantity_q'
      @eq ( Ωcltt__86 = -> std.quantity_u.name                        ), 'quantity_u'
      echo()
      help 'Ω__87', std.text.isa
      help 'Ω__88', std.text.isa 'abc'
      help 'Ω__89', std.text.isa Array.from 'abc'
      echo()
      help 'Ω__90', std.nonempty_text
      help 'Ω__91', std.nonempty_text.isa
      @eq ( Ωcltt__92 = -> std.nonempty_text.isa 'abc'            ), true
      @eq ( Ωcltt__93 = -> std.nonempty_text.isa Array.from 'abc' ), false
      return null
    do =>
      echo()
      for typename, type of std
        @eq ( Ωcltt__94 = -> type.name          ), typename
        @eq ( Ωcltt__95 = -> type.isa.name      ), "isa_#{typename}"
        @eq ( Ωcltt__96 = -> type.create.name   ), "create_#{typename}"
        debug 'Ω__97', [typename, type.create.name, ]
      return null
    #.......................................................................................................
    for typename, type of std
      urge 'Ω__98', f"#{typename}:<20c; #{type.constructor.name}:<20c; #{type.isa.name}:<20c;"
    #.......................................................................................................
    debug 'Ω__99', 'integer                 template  ', std.integer.template
    debug 'Ω_100', 'integer                 fields    ', std.integer.fields
    debug 'Ω_101', 'quantity                template  ', std.quantity.template
    debug 'Ω_102', 'quantity                fields    ', std.quantity.fields
    debug 'Ω_103', 'quantity_with_template  template  ', std.quantity_with_template.template
    debug 'Ω_104', 'quantity_with_template  fields    ', std.quantity_with_template.fields
    #.......................................................................................................
    return null

  #=========================================================================================================
  templates: ->
    { Type
      internals
      std             } = require '../../../apps/cleartype'
    do =>
      @eq ( Ωcltt_105 = -> std.text.template?                                     ), true
      @eq ( Ωcltt_106 = -> internals.gnd.function.isa std.text.template           ), false
      @eq ( Ωcltt_107 = -> internals.gnd.function.isa std.text.get_template       ), true
      @eq ( Ωcltt_108 = -> std.text.template                                      ), ''
      @eq ( Ωcltt_109 = -> std.text.get_template()                                ), ''
      return null
    do =>
      @eq ( Ωcltt_110 = -> std.list.template?                                     ), true
      @eq ( Ωcltt_111 = -> internals.gnd.function.isa std.list.template           ), true
      @eq ( Ωcltt_112 = -> internals.gnd.function.isa std.list.get_template       ), true
      @eq ( Ωcltt_113 = -> std.list.template()                                    ), []
      @eq ( Ωcltt_114 = -> std.list.get_template()                                ), []
      @eq ( Ωcltt_115 = -> std.list.get_template() is std.list.get_template()     ), false
      return null
    do =>
      @eq ( Ωcltt_116 = -> std.quantity.template?                                     ), true
      @eq ( Ωcltt_117 = -> internals.gnd.function.isa std.quantity.template           ), true
      @eq ( Ωcltt_118 = -> internals.gnd.function.isa std.quantity.get_template       ), true
      @eq ( Ωcltt_119 = -> std.quantity.template()                                    ), []
      @eq ( Ωcltt_120 = -> std.quantity.get_template()                                ), []
      @eq ( Ωcltt_121 = -> std.quantity.get_template() is std.list.get_template()     ), false
      return null
    #.......................................................................................................
    return null

  #=========================================================================================================
  builtins:

    #-------------------------------------------------------------------------------------------------------
    property_is_set: ->
      BI = require '../../../apps/cleartype/lib/builtins'
      #.....................................................................................................
      @eq ( Ωctt_122 = -> BI.type_of BI.unset                                 ), 'unset'
      @eq ( Ωctt_123 = -> BI.gnd.unset.isa  BI.unset                          ), true
      @eq ( Ωctt_124 = -> BI.gnd.symbol.isa BI.unset                          ), true
      @eq ( Ωctt_125 = -> BI.type_of BI.property_is_set                       ), 'function'
      @eq ( Ωctt_126 = -> BI.type_of BI.property_is_unset                     ), 'function'
      #.....................................................................................................
      @eq ( Ωctt_127 = -> BI.property_is_set    {                     }, 'd'  ), false
      @eq ( Ωctt_128 = -> BI.property_is_set    { d: BI.unset,        }, 'd'  ), false
      #.....................................................................................................
      @eq ( Ωctt_129 = -> BI.property_is_set    { d: null,            }, 'd'  ), true
      @eq ( Ωctt_130 = -> BI.property_is_set    { d: undefined,       }, 'd'  ), true
      @eq ( Ωctt_131 = -> BI.property_is_set    { d: Symbol 'unset',  }, 'd'  ), true
      #.....................................................................................................
      @eq ( Ωctt_132 = -> BI.property_is_unset  {                     }, 'd'  ), true
      @eq ( Ωctt_133 = -> BI.property_is_unset  { d: BI.unset,        }, 'd'  ), true
      #.....................................................................................................
      @eq ( Ωctt_134 = -> BI.property_is_unset  { d: null,            }, 'd'  ), false
      @eq ( Ωctt_135 = -> BI.property_is_unset  { d: undefined,       }, 'd'  ), false
      @eq ( Ωctt_136 = -> BI.property_is_unset  { d: Symbol 'unset',  }, 'd'  ), false
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    type_of: ->
      BI = require '../../../apps/cleartype/lib/builtins'
      @eq ( Ωctt_137 = -> BI.type_of null                   ), 'null'
      @eq ( Ωctt_138 = -> BI.type_of undefined              ), 'undefined'
      @eq ( Ωctt_139 = -> BI.type_of +Infinity              ), 'infinity'
      @eq ( Ωctt_140 = -> BI.type_of -Infinity              ), 'infinity'
      @eq ( Ωctt_141 = -> BI.type_of true                   ), 'boolean'
      @eq ( Ωctt_142 = -> BI.type_of false                  ), 'boolean'
      @eq ( Ωctt_143 = -> BI.type_of NaN                    ), 'nan'
      @eq ( Ωctt_144 = -> BI.type_of 8                      ), 'float'
      @eq ( Ωctt_145 = -> BI.type_of /xxx/                  ), 'regex'
      @eq ( Ωctt_146 = -> BI.type_of 'xyz'                  ), 'text'
      @eq ( Ωctt_147 = -> BI.type_of [ 'xyz', ]             ), 'list'
      @eq ( Ωctt_148 = -> BI.type_of {}                     ), 'object'
      @eq ( Ωctt_149 = -> BI.type_of Symbol 's'             ), 'symbol'
      @eq ( Ωctt_150 = -> BI.type_of Symbol.for 's'         ), 'symbol'
      @eq ( Ωctt_151 = -> BI.type_of BI.unset               ), 'unset'
      #.....................................................................................................
      return null




#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test @cleartype_tasks
  # ( new Test guytest_cfg ).test @cleartype_tasks.builtins
