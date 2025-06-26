
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
    { nfa
      get_signature } = NFA
    { red
      reverse } = GUY.trm
    #.......................................................................................................
    do =>
      fn = nfa ( a, b, c, cfg ) -> { a, b, c, cfg, }
      frz = Object.freeze
      #.....................................................................................................
      @eq     ( Ωnfat___1 = -> fn()                           ), { a: undefined, b: undefined, c: undefined, cfg: {} }
      @eq     ( Ωnfat___2 = -> fn 1                           ), { a: 1,         b: undefined, c: undefined, cfg: { a: 1 } }
      @eq     ( Ωnfat___3 = -> fn 1, 2                        ), { a: 1,         b: 2,         c: undefined, cfg: { a: 1, b: 2 } }
      @eq     ( Ωnfat___4 = -> fn 1, 2, 3                     ), { a: 1,         b: 2,         c: 3,         cfg: { a: 1, b: 2, c: 3 } }
      @throws ( Ωnfat___5 = -> fn 1, 2, 3, 4                  ), /expected up to 3 positional arguments, got 4/
      @eq     ( Ωnfat___6 = -> fn                 {}          ), { a: undefined, b: undefined, c: undefined, cfg: {} }
      @eq     ( Ωnfat___7 = -> fn 1,              {}          ), { a: 1,         b: undefined, c: undefined, cfg: { a: 1 } }
      @eq     ( Ωnfat___8 = -> fn 1, 2,           {}          ), { a: 1,         b: 2,         c: undefined, cfg: { a: 1, b: 2 } }
      @eq     ( Ωnfat___9 = -> fn 1, 2, 3,        {}          ), { a: 1,         b: 2,         c: 3,         cfg: { a: 1, b: 2, c: 3 } }
      @throws ( Ωnfat__10 = -> fn 1, 2, 3, 4,     {}          ), /expected up to 3 positional arguments, got 4/
      @eq     ( Ωnfat__11 = -> fn                 { b: 88, }  ), { a: undefined, b: 88,        c: undefined, cfg: { b: 88, } }
      @eq     ( Ωnfat__12 = -> fn 1,              { b: 88, }  ), { a: 1,         b: 88,        c: undefined, cfg: { b: 88, a: 1 } }
      @eq     ( Ωnfat__13 = -> fn 1, 2,           { b: 88, }  ), { a: 1,         b: 2,         c: undefined, cfg: { b: 2, a: 1 } }
      @eq     ( Ωnfat__14 = -> fn 1, 2, 3,        { b: 88, }  ), { a: 1,         b: 2,         c: 3,         cfg: { b: 2, a: 1, c: 3 } }
      @throws ( Ωnfat__15 = -> fn 1, 2, 3, 4,     { b: 88, }  ), /expected up to 3 positional arguments, got 4/
      @eq     ( Ωnfat__16 = -> fn             frz { b: 88, }  ), { a: undefined, b: 88,        c: undefined, cfg: { b: 88, } }
      @eq     ( Ωnfat__17 = -> fn 1,          frz { b: 88, }  ), { a: 1,         b: 88,        c: undefined, cfg: { b: 88, a: 1 } }
      @eq     ( Ωnfat__18 = -> fn 1, 2,       frz { b: 88, }  ), { a: 1,         b: 2,         c: undefined, cfg: { b: 2, a: 1 } }
      @eq     ( Ωnfat__19 = -> fn 1, 2, 3,    frz { b: 88, }  ), { a: 1,         b: 2,         c: 3,         cfg: { b: 2, a: 1, c: 3 } }
      @throws ( Ωnfat__20 = -> fn 1, 2, 3, 4, frz { b: 88, }  ), /expected up to 3 positional arguments, got 4/
      #.....................................................................................................
      return null
    #.......................................................................................................
    do =>
      fn = nfa ( cfg ) -> { cfg, }
      frz = Object.freeze
      #.....................................................................................................
      @eq     ( Ωnfat__21 = -> fn()                           ), { cfg: {} }
      @throws ( Ωnfat__22 = -> fn 1, 2, 3, 4                  ), /expected up to 0 positional arguments, got 4/
      @eq     ( Ωnfat__23 = -> fn                 {}          ), { cfg: {} }
      @throws ( Ωnfat__24 = -> fn 1, 2, 3, 4,     {}          ), /expected up to 0 positional arguments, got 4/
      @eq     ( Ωnfat__25 = -> fn                 { b: 88, }  ), { cfg: { b: 88, } }
      @throws ( Ωnfat__26 = -> fn 1, 2, 3, 4,     { b: 88, }  ), /expected up to 0 positional arguments, got 4/
      @eq     ( Ωnfat__27 = -> fn             frz { b: 88, }  ), { cfg: { b: 88, } }
      @throws ( Ωnfat__28 = -> fn 1, 2, 3, 4, frz { b: 88, }  ), /expected up to 0 positional arguments, got 4/
      #.....................................................................................................
      return null
    #.......................................................................................................
    do =>
      fn = nfa () -> {}
      frz = Object.freeze
      #.....................................................................................................
      @eq     ( Ωnfat__29 = -> fn()                           ), {}
      @throws ( Ωnfat__30 = -> fn 1, 2, 3, 4                  ), /expected up to 0 positional arguments, got 4/
      @throws ( Ωnfat__31 = -> fn                 {}          ), /expected up to 0 named arguments objects, got 1/
      @throws ( Ωnfat__32 = -> fn 1, 2, 3, 4,     {}          ), /expected up to 0 named arguments objects, got 1/
      @throws ( Ωnfat__33 = -> fn                 { b: 88, }  ), /expected up to 0 named arguments objects, got 1/
      @throws ( Ωnfat__34 = -> fn 1, 2, 3, 4,     { b: 88, }  ), /expected up to 0 named arguments objects, got 1/
      @throws ( Ωnfat__35 = -> fn             frz { b: 88, }  ), /expected up to 0 named arguments objects, got 1/
      @throws ( Ωnfat__36 = -> fn 1, 2, 3, 4, frz { b: 88, }  ), /expected up to 0 named arguments objects, got 1/
      #.....................................................................................................
      return null
    #.......................................................................................................
    do =>
      optional = null
      ```
      const empty_fn = function (

        ) {};
      ```
      @eq     ( Ωnfat__37 = -> get_signature ( a                        ) ->  ), { a: 'bare', }
      @throws ( Ωnfat__38 = -> get_signature ( a = optional             ) ->  ), /not compliant/
      @eq     ( Ωnfat__39 = -> get_signature empty_fn                         ), {}
      @eq     ( Ωnfat__40 = -> get_signature                              ->  ), {}
      @eq     ( Ωnfat__41 = -> get_signature ( a, b, c                        ) ->  ), { a: 'bare', b: 'bare', c: 'bare', }
      # ### TAINT limitation of CoffeeScript: signature runs up to soak, trailing paramters handled inside function body ###
      # @eq     ( Ωnfat__42 = -> get_signature ( a, b..., c               ) ->  ), { a: 'bare', b: 'soak', }
      @throws ( Ωnfat__43 = -> get_signature ( a, b..., c               ) ->  ), /not compliant/
      @throws ( Ωnfat__44 = -> get_signature ( a, b = null              ) ->  ), /not compliant/
    #.......................................................................................................
    return null



#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test @nfa_tasks
  # ( new Test guytest_cfg ).test @nfa_tasks.builtins
