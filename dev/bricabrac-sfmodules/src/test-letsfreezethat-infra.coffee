
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
  whisper }               = GUY.trm.get_loggers 'bricabrac-sfmodules/test-letsfreezethat-infra'
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
@tasks =

  #---------------------------------------------------------------------------------------------------------
  require_walk_js_tokens: ->
    SFMODULES                   = require '../../../apps/bricabrac-sfmodules'
    { type_of,                } = SFMODULES.unstable.require_type_of()
    { simple: {
        lets,
        freeze, }
      internals,              } = SFMODULES.require_letsfreezethat_infra()
    #.......................................................................................................
    @eq ( Ωlftit___1 = -> type_of lets                                         ), 'function'
    #.......................................................................................................
    @eq ( Ωlftit___2 = -> lets {}                                              ), {}
    @eq ( Ωlftit___3 = -> lets Object.create null                              ), {}
    @eq ( Ωlftit___4 = -> Object.getPrototypeOf lets Object.create null        ), null
    @throws ( Ωlftit___5 = -> lets null                                        ), /unable to process values of type null/
    @throws ( Ωlftit___6 = -> lets()                                           ), /unable to process values of type undefined/
    @throws ( Ωlftit___7 = -> lets 'ABC'                                       ), /unable to process values of type String/
    @throws ( Ωlftit___8 = -> lets new Set 'ABC'                               ), /unable to process values of type Set/
    #.......................................................................................................
    do =>
      class MyClass
        some_property: 8
      @throws ( Ωlftit___9 = -> lets new MyClass() ), /unable to process values of type MyClass/
      ;null
    #.......................................................................................................
    do =>
      probe   = { a: 'A', b: 'B', c: 'C', }
      copy    = { probe..., }
      result  = lets probe
      @eq ( Ωlftit__10 = -> probe                                                                 ), copy
      @eq ( Ωlftit__11 = -> result                                                                ), probe
      @eq ( Ωlftit__12 = -> result is probe                                                       ), false
      @eq ( Ωlftit__13 = -> ( Object.getPrototypeOf probe ) is ( Object.getPrototypeOf result )   ), true
      @eq ( Ωlftit__14 = -> Object.isFrozen probe                                                 ), false
      @eq ( Ωlftit__15 = -> Object.isFrozen result                                                ), true
      ;null
    #.......................................................................................................
    do =>
      probe   = Array.from 'ABC'
      copy    = [ probe..., ]
      result  = lets probe
      @eq ( Ωlftit__16 = -> probe                                                                 ), copy
      @eq ( Ωlftit__17 = -> result                                                                ), probe
      @eq ( Ωlftit__18 = -> result is probe                                                       ), false
      @eq ( Ωlftit__19 = -> ( Object.getPrototypeOf probe ) is ( Object.getPrototypeOf result )   ), true
      @eq ( Ωlftit__20 = -> Object.isFrozen probe                                                 ), false
      @eq ( Ωlftit__21 = -> Object.isFrozen result                                                ), true
      ;null
    #.......................................................................................................
    do =>
      probe   = { a: 'A', b: 'B', c: 'C', }
      copy    = { probe..., }
      matcher = { a: 'A', b: 'B', d: 'D', }
      result  = lets probe, ( d ) -> delete d.c; d.d = 'D'
      @eq ( Ωlftit__22 = -> probe                                                                 ), copy
      @eq ( Ωlftit__23 = -> result                                                                ), matcher
      @eq ( Ωlftit__24 = -> result is probe                                                       ), false
      @eq ( Ωlftit__25 = -> ( Object.getPrototypeOf probe ) is ( Object.getPrototypeOf result )   ), true
      @eq ( Ωlftit__26 = -> Object.isFrozen probe                                                 ), false
      @eq ( Ωlftit__27 = -> Object.isFrozen result                                                ), true
      ;null
    #.......................................................................................................
    do =>
      probe   = Array.from 'ABC'
      copy    = [ probe..., ]
      matcher = Array.from 'ABD'
      result  = lets probe, ( d ) -> d[ 2 ] = 'D'
      @eq ( Ωlftit__28 = -> probe                                                                 ), copy
      @eq ( Ωlftit__29 = -> result                                                                ), matcher
      @eq ( Ωlftit__30 = -> result is probe                                                       ), false
      @eq ( Ωlftit__31 = -> ( Object.getPrototypeOf probe ) is ( Object.getPrototypeOf result )   ), true
      @eq ( Ωlftit__32 = -> Object.isFrozen probe                                                 ), false
      @eq ( Ωlftit__33 = -> Object.isFrozen result                                                ), true
      ;null
    #.......................................................................................................
    return null


#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test @tasks
  # ( new Test guytest_cfg ).test { require_get_local_destinations: @tasks.require_get_local_destinations, }
