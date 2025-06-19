
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
      # @eq ( Ωcltt__62 = -> std.quantity.create()                        ), { q: 0, u: 'u', }
      # @eq ( Ωcltt__63 = -> std.quantity.create    { q: 4.3, u: 's', }   ), { q: 4.3, u: 's', }
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
      @eq ( Ωcltt__99 = -> std.text.template?                             ), true
      @eq ( Ωcltt_100 = -> internals.gnd.function.isa std.text.template   ), false
      @eq ( Ωcltt_100 = -> internals.gnd.function.isa std.text.get_template   ), true
      @eq ( Ωcltt_101 = -> std.text.template                        ), ''
      @eq ( Ωcltt_101 = -> std.text.get_template()                        ), ''
      return null
    do =>
      @eq ( Ωcltt__99 = -> std.list.template?                                     ), true
      @eq ( Ωcltt_100 = -> internals.gnd.function.isa std.list.template           ), true
      @eq ( Ωcltt_100 = -> internals.gnd.function.isa std.list.get_template       ), true
      @eq ( Ωcltt_101 = -> std.list.template()                                    ), []
      @eq ( Ωcltt_101 = -> std.list.get_template()                                ), []
      @eq ( Ωcltt_101 = -> std.list.get_template() is std.list.get_template()     ), false
      return null
    #.......................................................................................................
    return null

  #=========================================================================================================
  standard_basic_methods:

    #-------------------------------------------------------------------------------------------------------
    type_of: ->
      { type_of } = require '../../../apps/cleartype'
      @eq ( Ωctt_102 = -> type_of null                  ), 'null'
      @eq ( Ωctt_103 = -> type_of undefined             ), 'undefined'
      @eq ( Ωctt_104 = -> type_of +Infinity             ), 'infinity'
      @eq ( Ωctt_105 = -> type_of -Infinity             ), 'infinity'
      @eq ( Ωctt_106 = -> type_of true                  ), 'boolean'
      @eq ( Ωctt_107 = -> type_of false                 ), 'boolean'
      @eq ( Ωctt_108 = -> type_of NaN                   ), 'nan'
      @eq ( Ωctt_109 = -> type_of 8                     ), 'float'
      @eq ( Ωctt_110 = -> type_of /xxx/                 ), 'regex'
      @eq ( Ωctt_111 = -> type_of 'xyz'                 ), 'text'
      @eq ( Ωctt_112 = -> type_of [ 'xyz', ]            ), 'list'
      @eq ( Ωctt_113 = -> type_of {}                    ), 'object'
      #.....................................................................................................
      return null


#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test @cleartype_tasks
