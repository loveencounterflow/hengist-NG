

'use strict'

#===========================================================================================================
GUY                       = require 'guy'
{ alert
  debug
  help
  info
  plain
  praise
  urge
  warn
  whisper }               = GUY.trm.get_loggers 'fictional-reconstructive-egyptian'
{ rpr
  inspect
  echo
  white
  green
  blue
  gold
  grey
  red
  bold
  reverse
  log     }               = GUY.trm
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG
# { f }                     = require '../../../apps/effstring'
# # write                     = ( p ) -> process.stdout.write p
# { nfa }                   = require '../../../apps/normalize-function-arguments'
# SFMODULES                 = require '../../../apps/bricabrac-sfmodules'
# FS                        = require 'node:fs'
# PATH                      = require 'node:path'
# { type_of,              } = ( require '../../../apps/bricabrac-sfmodules/lib/unstable-rpr-type_of-brics' ).require_type_of()



#===========================================================================================================
@tests = tests =

  #---------------------------------------------------------------------------------------------------------
  interface: ->
    # debug 'Ωfre___1', require '../../../apps/fictional-reconstructive-egyptian'
    # debug 'Ωfre___2', require '../../../apps/fictional-reconstructive-egyptian/node_modules/icu/lib/index.mjs'
    ICU = await import( '../../../apps/fictional-reconstructive-egyptian/node_modules/icu/lib/index.mjs' )
    debug 'Ωcrmmd___3', ( k for k of ICU when /trans/iv.test k )
    debug 'Ωcrmmd___3', new ICU.TransformResult()
    # @eq ( Ωcrmmd___4 = -> type_of FREP.find_all_repetitions                     ), 'function'
    #.......................................................................................................
    ;null


#===========================================================================================================
if module is require.main then await do =>
  # demo_infinite_proxy()
  # demo_colorful_proxy()
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: true, report_checks: true, }
  await ( new Test guytest_cfg ).async_test { tests, }
  # ( new Test guytest_cfg ).test { find_reduplication_candidates: tests.find_reduplication_candidates, }
  ;null
