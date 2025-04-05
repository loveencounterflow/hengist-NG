

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
WGUY                      = require '../../../apps/webguy'
TMP_types                 = new ( require 'intertype-203.0.0' ).Intertype()
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG
# test_mode                 = 'throw_failures'
# test_mode                 = 'throw_errors'
# test_mode                 = 'failsafe'




############################################################################################################
#
#===========================================================================================================
@intertype_tasks =

  #---------------------------------------------------------------------------------------------------------
  lft_lets: ->
    lft = require '../../../apps/intertype/node_modules/letsfreezethat'
    # debug ( k for k of lft.nofreeze ), Object.isFrozen ( lft.nofreeze.freeze {}); xxx
    # debug 'Ωacf___1', samesame.equals
    # debug 'Ωacf___2', samesame.deep_copy
    debug 'Ωacf___3', k = { x: true, y: 5, }
    debug 'Ωacf___4', d = lft.lets { a: false, k, }
    debug 'Ωacf___5', e = lft.lets d
    debug 'Ωacf___6', f = lft.lets d, ( d ) -> d.a = true
    #.......................................................................................................
    @eq     ( Ωacf___7 = -> Object.isFrozen k     ), false
    @eq     ( Ωacf___8 = -> Object.isFrozen d     ), true
    @eq     ( Ωacf___9 = -> Object.isFrozen d.k   ), true
    @eq     ( Ωacf__10 = -> k is d.k              ), false
    @eq     ( Ωacf__11 = -> d is e                ), false
    # @throws ( Ωacf__12 = -> types.validate mvp.integer,  5.3                     ), /expected a integer/
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  lft_assign: ->
    lft = require '../../../apps/intertype/node_modules/letsfreezethat'
    probes = [
      [ {}, ]
      [ { d: 6, k: true, },                                             ]
      [ { d: 6, k: true, }, { k: false, m: 'M', }                       ]
      [ { d: 6, k: true, }, null,                                       ]
      [ { d: 6, k: true, }, undefined,                                  ]
      [ [],                                                             ]
      [ [], { z: 'zoo', y: 'wye', }                                     ]
      ]
    failing_probes = [
      [ 987,                                                            ]
      [ true,                                                           ]
      [ false,                                                          ]
      [ 'jkl',                                                          ]
      ]
    #.......................................................................................................
    # debug 'Ωacf__13', Object.assign undefined
    # debug 'Ωacf__14', Object.assign null
    warn  'Ωacf__15', rpr lft.assign    987
    info  'Ωacf__16', rpr Object.assign 987
    warn  'Ωacf__17', rpr lft.assign    true
    info  'Ωacf__18', rpr Object.assign true
    warn  'Ωacf__19', rpr lft.assign    'jkl'
    info  'Ωacf__20', rpr Object.assign 'jkl'
    #.......................................................................................................
    for probe in probes
      @eq ( Ωacf__21 = -> lft.assign probe... ), Object.assign probe...
    #.......................................................................................................
    for probe in failing_probes
      @eq ( ΩACCEPT_FAILURE_FOR_NOW_acf__22 = -> lft.assign probe... ), Object.assign probe...
    #.......................................................................................................
    @throws ( Ωacf__23 = -> Object.assign undefined   ), /Cannot convert undefined or null to object/
    @throws ( Ωacf__24 = -> Object.assign null        ), /Cannot convert undefined or null to object/
    @throws ( ΩACCEPT_FAILURE_FOR_NOW_acf__25 = -> lft.assign undefined      ), /Cannot convert undefined or null to object/
    @throws ( ΩACCEPT_FAILURE_FOR_NOW_acf__26 = -> lft.assign null           ), /Cannot convert undefined or null to object/
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  lft_assign_freezing: ->
    lft = require '../../../apps/intertype/node_modules/letsfreezethat'
    #.......................................................................................................
    f = { f: 'F', }
    e = { e: 'E', f, }
    d = { d: 'D', e, }
    d
    d_obj = Object.assign d
    d_lft = lft.assign d
    d_nfr = lft.nofreeze.assign d
    @eq ( Ωacf__27 = -> Object.isFrozen d_obj   ), false
    @eq ( Ωacf__28 = -> Object.isFrozen d_lft   ), true
    @eq ( Ωacf__29 = -> Object.isFrozen d_nfr   ), false
    @eq ( Ωacf__30 = -> d.e       is e          ), true
    @eq ( Ωacf__31 = -> d.e.f     is f          ), true
    @eq ( Ωacf__32 = -> d_obj     is d          ), true
    @eq ( Ωacf__33 = -> d_obj.e   is e          ), true
    @eq ( Ωacf__34 = -> d_obj.e.f is f          ), true
    @eq ( Ωacf__35 = -> d_lft     is d          ), false
    @eq ( Ωacf__36 = -> d_lft.e   is e          ), false
    @eq ( Ωacf__37 = -> d_lft.e.f is f          ), false
    @eq ( Ωacf__38 = -> d_nfr     is d          ), false
    @eq ( Ωacf__39 = -> d_nfr.e   is e          ), false
    @eq ( Ωacf__40 = -> d_nfr.e.f is f          ), false
    #.......................................................................................................
    return null

#===========================================================================================================
if module is require.main then await do =>
  ( new Test { throw_on_error: true, } ).test @intertype_tasks

