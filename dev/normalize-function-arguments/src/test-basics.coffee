
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
      # help 'Ω___1', get_fn_args fn
      # if signature?
      #.....................................................................................................
      @eq     ( Ωnfat___2 = -> fn 1                       ), { a: 1, b: undefined, c: undefined, cfg: { a: 1 } }
      @eq     ( Ωnfat___3 = -> fn 1, 2                    ), { a: 1, b: 2, c: undefined, cfg: { a: 1, b: 2 } }
      @eq     ( Ωnfat___4 = -> fn 1, 2, 3                 ), { a: 1, b: 2, c: 3, cfg: { a: 1, b: 2, c: 3 } }
      @throws ( Ωnfat___5 = -> fn 1, 2, 3, 4              ), /expected up to 3 positional arguments plus one POD, got 4 positional arguments/
      @eq     ( Ωnfat___6 = -> fn 1, {}                   ), { a: 1, b: undefined, c: undefined, cfg: { a: 1 } }
      @eq     ( Ωnfat___7 = -> fn 1, 2, {}                ), { a: 1, b: 2, c: undefined, cfg: { a: 1, b: 2 } }
      @eq     ( Ωnfat___8 = -> fn 1, 2, 3, {}             ), { a: 1, b: 2, c: 3, cfg: { a: 1, b: 2, c: 3 } }
      @throws ( Ωnfat___9 = -> fn 1, 2, 3, 4, {}          ), /expected up to 4 arguments, got 5/
      @eq     ( Ωnfat__10 = -> fn 1, { b: 88, }           ), { a: 1, b: 88, c: undefined, cfg: { b: 88, a: 1 } }
      @eq     ( Ωnfat__11 = -> fn 1, 2, { b: 88, }        ), { a: 1, b: 2, c: undefined, cfg: { b: 2, a: 1 } }
      @eq     ( Ωnfat__12 = -> fn 1, 2, 3, { b: 88, }     ), { a: 1, b: 2, c: 3, cfg: { b: 2, a: 1, c: 3 } }
      @throws ( Ωnfat__13 = -> fn 1, 2, 3, 4, { b: 88, }  ), /expected up to 4 arguments, got 5/
      #.....................................................................................................
      return null
    #.......................................................................................................
    return null



#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test @nfa_tasks
  # ( new Test guytest_cfg ).test @nfa_tasks.builtins
