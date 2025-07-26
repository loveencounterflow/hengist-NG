
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
@huebit_tasks =

  #=========================================================================================================
  basics: ->
    HB                  = require '../../../apps/huebit'
    info 'Ω___1', Object.keys HB
    #.......................................................................................................
    do =>
      # @eq ( Ωcltt___7 = -> CT.std?        ), true
      return null
    #.......................................................................................................
    return null




#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test @huebit_tasks
  # ( new Test guytest_cfg ).test @huebit_tasks.builtins
