
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
    info 'Ω___1', CT.std
    do =>
      @eq ( Ωcltt___2 = -> CT.type_of?    ), true
      @eq ( Ωcltt___3 = -> CT.Type?       ), true
      @eq ( Ωcltt___4 = -> CT.Typespace?  ), true
      @eq ( Ωcltt___5 = -> CT.internals?  ), true
      @eq ( Ωcltt___6 = -> CT.std?        ), true
    do =>
      echo()
      info 'Ω___7', std.integer
      info 'Ω___8', std.integer.isa 3.141
      info 'Ω___9', std.integer.isa 3
      info 'Ω__10', std.integer.create()
      info 'Ω__11', std.integer.create '3'
    do =>
      @eq ( Ωcltt__12 = -> std.text           instanceof Type ), true
      @eq ( Ωcltt__13 = -> std.float          instanceof Type ), true
      @eq ( Ωcltt__14 = -> std.integer        instanceof Type ), true
      @eq ( Ωcltt__15 = -> std.nonempty_text  instanceof Type ), true
      @eq ( Ωcltt__16 = -> std.quantity_q     instanceof Type ), true
      @eq ( Ωcltt__17 = -> std.quantity_u     instanceof Type ), true
      @eq ( Ωcltt__18 = -> std.quantity       instanceof Type ), true
    do =>
      @eq ( Ωcltt__19 = -> std.text.constructor.name          ), 'Text'
      @eq ( Ωcltt__20 = -> std.float.constructor.name         ), 'Float'
      @eq ( Ωcltt__21 = -> std.integer.constructor.name       ), 'Integer'
      @eq ( Ωcltt__22 = -> std.nonempty_text.constructor.name ), 'Nonempty_text'
      @eq ( Ωcltt__23 = -> std.quantity_q.constructor.name    ), 'Quantity_q'
      @eq ( Ωcltt__24 = -> std.quantity_u.constructor.name    ), 'Quantity_u'
      @eq ( Ωcltt__25 = -> std.quantity.constructor.name      ), 'Quantity'
    do =>
      @eq ( Ωcltt__26 = -> std.text.isa.name                  ), 'isa_text'
      @eq ( Ωcltt__27 = -> std.float.isa.name                 ), 'isa_float'
      @eq ( Ωcltt__28 = -> std.integer.isa.name               ), 'isa_integer'
      @eq ( Ωcltt__29 = -> std.nonempty_text.isa.name         ), 'isa_nonempty_text'
      @eq ( Ωcltt__30 = -> std.quantity_q.isa.name            ), 'isa_quantity_q'
      @eq ( Ωcltt__31 = -> std.quantity_u.isa.name            ), 'isa_quantity_u'
      @eq ( Ωcltt__32 = -> std.quantity.isa.name              ), 'isa_quantity'
    do =>
      @eq ( Ωcltt__33 = -> std.text.isa                  null ), false
      @eq ( Ωcltt__34 = -> std.float.isa                 null ), false
      @eq ( Ωcltt__35 = -> std.integer.isa               null ), false
      @eq ( Ωcltt__36 = -> std.nonempty_text.isa         null ), false
      @eq ( Ωcltt__37 = -> std.quantity_q.isa            null ), false
      @eq ( Ωcltt__38 = -> std.quantity_u.isa            null ), false
      @eq ( Ωcltt__39 = -> std.quantity.isa              null ), false
    do =>
      @eq ( Ωcltt__40 = -> std.text.isa                  Infinity ), false
      @eq ( Ωcltt__41 = -> std.float.isa                 Infinity ), false
      @eq ( Ωcltt__42 = -> std.integer.isa               Infinity ), false
      @eq ( Ωcltt__43 = -> std.nonempty_text.isa         Infinity ), false
      @eq ( Ωcltt__44 = -> std.quantity_q.isa            Infinity ), false
      @eq ( Ωcltt__45 = -> std.quantity_u.isa            Infinity ), false
      @eq ( Ωcltt__46 = -> std.quantity.isa              Infinity ), false
    do =>
      @eq ( Ωcltt__47 = -> std.text.isa           ''                        ), true
      @eq ( Ωcltt__48 = -> std.float.isa          7.56                      ), true
      @eq ( Ωcltt__49 = -> std.integer.isa        9                         ), true
      @eq ( Ωcltt__50 = -> std.nonempty_text.isa  'www'                     ), true
      @eq ( Ωcltt__51 = -> std.quantity_q.isa     1.5e32                    ), true
      @eq ( Ωcltt__52 = -> std.quantity_u.isa     'km'                      ), true
      @eq ( Ωcltt__53 = -> std.quantity.isa       { q: 1.5e32, u: 'km', }   ), true
    do =>
      echo()
      info 'Ω__54', std.nonempty_text
      @eq ( Ωcltt__55 = -> std.nonempty_text.isa 3.141                  ), false
      @eq ( Ωcltt__56 = -> std.nonempty_text.isa ''                     ), false
      @eq ( Ωcltt__57 = -> std.nonempty_text.isa 'd'                    ), true
      @eq ( Ωcltt__58 = -> std.text.create()                            ), ''
      @eq ( Ωcltt__59 = -> std.nonempty_text.create 'wat'               ), 'wat'
      @throws ( Ωcltt__60 = -> std.nonempty_text.create()               ), /validation/i
      @throws ( Ωcltt__61 = -> std.nonempty_text.create ''              ), /validation/i
      @throws ( Ωcltt__62 = -> std.nonempty_text.create null            ), /validation/i
      @throws ( Ωcltt__63 = -> std.nonempty_text.create undefined       ), /validation/i
      @throws ( Ωcltt__64 = -> std.nonempty_text.create false           ), /validation/i
      @eq ( Ωcltt__65 = -> std.nonempty_text.create 'd'                 ), 'd'
    do =>
      echo()
      info 'Ω__66', std.quantity
      @eq ( Ωcltt__67 = -> std.quantity.create()                        ), { q: 0, u: 'u', }
      @eq ( Ωcltt__68 = -> std.quantity.create    { q: 4.3, u: 's', }   ), { q: 4.3, u: 's', }
      @eq ( Ωcltt__69 = -> std.nonempty_text.create      'g'            ), 'g'
      @eq ( Ωcltt__70 = -> std.quantity_u.create         'g'            ), 'g'
      @eq ( Ωcltt__71 = -> std.quantity.fields.u.create  'g'            ), 'g'
      @throws ( Ωcltt__72 = -> std.quantity.fields.u.create  false          ), /validation/i
    do =>
      echo()
      help 'Ω__73', std.quantity
      help 'Ω__74', std.quantity.constructor
      help 'Ω__75', std.quantity.constructor.name
      help 'Ω__76', std.quantity.isa
      help 'Ω__77', std.quantity.isa {}
      @eq ( Ωcltt__78 = -> std.quantity.isa { u: 7, q: 3, }           ), false
      @eq ( Ωcltt__79 = -> std.quantity.isa { u: '7', q: 3, }         ), true
      @eq ( Ωcltt__80 = -> std.quantity.isa { u: '7', q: Infinity, }  ), false
      @eq ( Ωcltt__81 = -> std.quantity.isa { u: '7', q: NaN, }       ), false
      @eq ( Ωcltt__82 = -> std.quantity.name                          ), 'quantity'
      @eq ( Ωcltt__83 = -> std.integer.name                           ), 'integer'
      @eq ( Ωcltt__84 = -> std.quantity_q.name                        ), 'quantity_q'
      @eq ( Ωcltt__85 = -> std.quantity_u.name                        ), 'quantity_u'
      echo()
      help 'Ω__86', std.text.isa
      help 'Ω__87', std.text.isa 'abc'
      help 'Ω__88', std.text.isa Array.from 'abc'
      echo()
      help 'Ω__89', std.nonempty_text
      help 'Ω__90', std.nonempty_text.isa
      @eq ( Ωcltt__91 = -> std.nonempty_text.isa 'abc'            ), true
      @eq ( Ωcltt__92 = -> std.nonempty_text.isa Array.from 'abc' ), false
      return null
    do =>
      echo()
      for typename, type of std
        @eq ( Ωcltt__93 = -> type.name          ), typename
        @eq ( Ωcltt__94 = -> type.isa.name      ), "isa_#{typename}"
        @eq ( Ωcltt__95 = -> type.create.name   ), "create_#{typename}"
        debug 'Ω__96', [typename, type.create.name, ]
      return null
    #.......................................................................................................
    for typename, type of std
      urge 'Ω__97', f"#{typename}:<20c; #{type.constructor.name}:<20c; #{type.isa.name}:<20c;"
    #.......................................................................................................
    debug 'Ω__98', 'integer                 template  ', std.integer.template
    debug 'Ω__99', 'integer                 fields    ', std.integer.fields
    debug 'Ω_100', 'quantity                template  ', std.quantity.template
    debug 'Ω_101', 'quantity                fields    ', std.quantity.fields
    debug 'Ω_102', 'quantity_with_template  template  ', std.quantity_with_template.template
    debug 'Ω_103', 'quantity_with_template  fields    ', std.quantity_with_template.fields
    #.......................................................................................................
    return null

  #=========================================================================================================
  templates: ->
    { Type
      internals
      std             } = require '../../../apps/cleartype'
    do =>
      @eq ( Ωcltt_104 = -> std.text.template?                                     ), true
      @eq ( Ωcltt_105 = -> internals.gnd.function.isa std.text.template           ), false
      @eq ( Ωcltt_106 = -> internals.gnd.function.isa std.text.get_template       ), true
      @eq ( Ωcltt_107 = -> std.text.template                                      ), ''
      @eq ( Ωcltt_108 = -> std.text.get_template()                                ), ''
      return null
    do =>
      @eq ( Ωcltt_109 = -> std.list.template?                                     ), true
      @eq ( Ωcltt_110 = -> internals.gnd.function.isa std.list.template           ), true
      @eq ( Ωcltt_111 = -> internals.gnd.function.isa std.list.get_template       ), true
      @eq ( Ωcltt_112 = -> std.list.template()                                    ), []
      @eq ( Ωcltt_113 = -> std.list.get_template()                                ), []
      @eq ( Ωcltt_114 = -> std.list.get_template() is std.list.get_template()     ), false
      return null
    do =>
      @eq ( Ωcltt_115 = -> std.quantity.template?                                     ), true
      @eq ( Ωcltt_116 = -> internals.gnd.function.isa std.quantity.template           ), true
      @eq ( Ωcltt_117 = -> internals.gnd.function.isa std.quantity.get_template       ), true
      @eq ( Ωcltt_118 = -> std.quantity.template()                                    ), []
      @eq ( Ωcltt_119 = -> std.quantity.get_template()                                ), []
      @eq ( Ωcltt_120 = -> std.quantity.get_template() is std.list.get_template()     ), false
      return null
    #.......................................................................................................
    return null

  #=========================================================================================================
  standard_basic_methods:

    #-------------------------------------------------------------------------------------------------------
    type_of: ->
      { type_of } = require '../../../apps/cleartype'
      @eq ( Ωctt_121 = -> type_of null                  ), 'null'
      @eq ( Ωctt_122 = -> type_of undefined             ), 'undefined'
      @eq ( Ωctt_123 = -> type_of +Infinity             ), 'infinity'
      @eq ( Ωctt_124 = -> type_of -Infinity             ), 'infinity'
      @eq ( Ωctt_125 = -> type_of true                  ), 'boolean'
      @eq ( Ωctt_126 = -> type_of false                 ), 'boolean'
      @eq ( Ωctt_127 = -> type_of NaN                   ), 'nan'
      @eq ( Ωctt_128 = -> type_of 8                     ), 'float'
      @eq ( Ωctt_129 = -> type_of /xxx/                 ), 'regex'
      @eq ( Ωctt_130 = -> type_of 'xyz'                 ), 'text'
      @eq ( Ωctt_131 = -> type_of [ 'xyz', ]            ), 'list'
      @eq ( Ωctt_132 = -> type_of {}                    ), 'object'
      #.....................................................................................................
      return null


#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test @cleartype_tasks
