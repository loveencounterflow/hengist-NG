
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
@nfa_tasks =

  #=========================================================================================================
  basics: ->
    NFA = require '../../../apps/normalize-function-arguments'
    { nfa } = NFA
    { red
      reverse } = GUY.trm
    #.......................................................................................................
    do =>
      fn = nfa ( a, b, c, cfg ) -> { a, b, c, cfg, }
      # fn = ( a, b, c, cfg ) -> { $A: [ arguments..., ], a, b, c, cfg, }
      # help 'Ω__69', get_fn_args fn
      # if signature?
      #.....................................................................................................
      echo()
      info 'Ω__70', fn 1
      info 'Ω__71', fn 1, 2
      info 'Ω__72', fn 1, 2, 3
      info 'Ω__73', try fn 1, 2, 3, 4 catch e then red reverse e.message
      #.....................................................................................................
      echo()
      info 'Ω__74', fn 1, {}
      info 'Ω__75', fn 1, 2, {}
      info 'Ω__76', fn 1, 2, 3, {}
      info 'Ω__77', try fn 1, 2, 3, 4, {} catch e then red reverse e.message
      #.....................................................................................................
      echo()
      info 'Ω__78', fn 1, { b: 88, }
      info 'Ω__79', fn 1, 2, { b: 88, }
      info 'Ω__80', fn 1, 2, 3, { b: 88, }
      info 'Ω__81', try fn 1, 2, 3, 4, { b: 88, } catch e then red reverse e.message
      #.....................................................................................................
      return null
      @eq ( Ωcltt__48 = -> std.text.isa           ''                        ), true
      return null
    #.......................................................................................................
    return null



#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test @nfa_tasks
  # ( new Test guytest_cfg ).test @nfa_tasks.builtins
