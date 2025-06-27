
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
{ red
  reverse               } = GUY.trm



############################################################################################################
#
#===========================================================================================================
@nfa_tasks =

  #=========================================================================================================
  basics: ->
    NFA = require '../../../apps/normalize-function-arguments'
    { nfa
      get_signature } = NFA
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
      @throws ( Ωnfat__29 = -> nfa () -> {} ), /not compliant/
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  get_signature: ->
    NFA = require '../../../apps/normalize-function-arguments'
    { nfa
      get_signature } = NFA
    #.......................................................................................................
    do =>
      optional = null
      ```
      const empty_fn = function (

        cfg

        ) {};
      ```
      @eq     ( Ωnfat__30 = -> get_signature ( a, cfg             ) ->  ), { a: 'bare', cfg: 'bare', }
      @throws ( Ωnfat__31 = -> get_signature ( a = optional, cfg  ) ->  ), /not compliant/
      @throws ( Ωnfat__32 = -> get_signature ( a                  ) ->  ), /not compliant/
      @eq     ( Ωnfat__33 = -> get_signature empty_fn                   ), { cfg: 'bare', }
      @eq     ( Ωnfat__34 = -> get_signature ( cfg )                ->  ), { cfg: 'bare', }
      @eq     ( Ωnfat__35 = -> get_signature ( a, b, c, cfg       ) ->  ), { a: 'bare', b: 'bare', c: 'bare', cfg: 'bare', }
      # ### TAINT limitation of CoffeeScript: signature runs up to soak, trailing paramters handled inside function body ###
      # @eq     ( Ωnfat__36 = -> get_signature ( a, b..., c       ) ->  ), { a: 'bare', b: 'soak', }
      @throws ( Ωnfat__37 = -> get_signature ( a, b..., c, cfg    ) ->  ), /not compliant/
      @throws ( Ωnfat__38 = -> get_signature ( a, b = null, cfg   ) ->  ), /not compliant/
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  get_signature: ->
    NFA = require '../../../apps/normalize-function-arguments'
    { nfa
      get_signature } = NFA
    #.......................................................................................................
    do =>
      optional = null
      ```
      const empty_fn = function (

        cfg

        ) {};
      ```
      @eq     ( Ωnfat__39 = -> get_signature ( a, cfg             ) ->  ), { names: [ 'a', 'cfg' ], q_idx: 1 }
      @throws ( Ωnfat__40 = -> get_signature ( a = optional, cfg  ) ->  ), /not compliant/
      @throws ( Ωnfat__41 = -> get_signature ( a                  ) ->  ), /not compliant/
      @eq     ( Ωnfat__42 = -> get_signature empty_fn                   ), { names: [ 'cfg' ], q_idx: 0 }
      @eq     ( Ωnfat__43 = -> get_signature ( cfg )                ->  ), { names: [ 'cfg' ], q_idx: 0 }
      @eq     ( Ωnfat__44 = -> get_signature ( a, b, c, cfg       ) ->  ), { names: [ 'a', 'b', 'c', 'cfg' ], q_idx: 3 }
      # ### TAINT limitation of CoffeeScript: signature runs up to soak, trailing paramters handled inside function body ###
      # @eq     ( Ωnfat__45 = -> get_signature ( a, b..., c       ) ->  ), { a: 'bare', b: 'soak', }
      @throws ( Ωnfat__46 = -> get_signature ( a, b..., c, cfg    ) ->  ), /not compliant/
      @throws ( Ωnfat__47 = -> get_signature ( a, b = null, cfg   ) ->  ), /not compliant/
    return null

  #---------------------------------------------------------------------------------------------------------
  template_class: ->
    NFA = require '../../../apps/normalize-function-arguments'
    { Template } = NFA
    #.......................................................................................................
    do =>
      @eq     ( Ωnfat__48 = -> new Template { arc: 10, bo: 11, cy: 12, din: 13; eps: 14, foo: 15, } ), { arc: 10, bo: 11, cy: 12, din: 13; eps: 14, foo: 15, }
    #.......................................................................................................
    do =>
      mylist_1      = []
      mylist_2      = []
      t = new Template
        mylist_1:     mylist_1
        mylist_2:     -> mylist_2
        mylist_3:     -> []
      mylist_31 = t.mylist_3
      mylist_32 = t.mylist_3
      @eq     ( Ωnfat__49 = -> t ), { mylist_1: [], mylist_2: [], mylist_3: [], }
      @eq     ( Ωnfat__50 = -> t.mylist_1   is    mylist_1  ), true
      @eq     ( Ωnfat__51 = -> t.mylist_2   is    mylist_2  ), true
      @eq     ( Ωnfat__52 = -> t.mylist_1   isnt  mylist_2  ), true
      @eq     ( Ωnfat__53 = -> t.mylist_31  isnt  mylist_32 ), true
      mylist_1.push 'A'
      mylist_2.push 'B'
      mylist_31.push 'C'
      @eq     ( Ωnfat__54 = -> t ), { mylist_1: [ 'A', ], mylist_2: [ 'B', ], mylist_3: [], }
      return null
    #.......................................................................................................
    do =>
      cfg =
        name:
          first:    'John'
          last:     'Doe'
      t_1 = new Template cfg
      t_2 = new Template cfg
      @eq     ( Ωnfat__55 = -> t_1                        ), { name: { first: 'John', last: 'Doe', }, }
      @eq     ( Ωnfat__56 = -> t_1.name isnt cfg.name     ), true
      @eq     ( Ωnfat__57 = -> t_1                        ), { name: { first: 'John', last: 'Doe', }, }
      @eq     ( Ωnfat__58 = -> t_2.name isnt cfg.name     ), true
      @eq     ( Ωnfat__59 = -> t_1.name isnt t_2.name     ), true
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  template_setting: ->
    NFA = require '../../../apps/normalize-function-arguments'
    { nfa
      internals } = NFA
    # #.......................................................................................................
    # ### NOTE for later: preserve managed properties? ###
    # do =>
    #   template =
    #     arc:      10
    #     bo:       11
    #     cy:       12
    #     sum:      -> @arc + @bo + @cy
    #   fn = nfa { template, }, ( arc, bo, cy, cfg ) -> { arc, bo, cy, cfg, sum: cfg.sum, }
    #   # fn = nfa ( arc, bo, cy, cfg ) -> { arc, bo, cy, cfg, sum: cfg.sum, }
    #   debug 'Ωnfat__60', internals.gnd.nfa_cfg
    #   debug 'Ωnfat__61', internals.gnd.nfa_cfg.template
    #   debug 'Ωnfat__62', fn 1, 2, 3, {}
    #   @eq     ( Ωnfat__63 = -> fn 1, 2, 3, {} ), { arc: 1, bo: 2, cy: 3, cfg: { arc: 1, bo: 2, cy: 3, sum: 6, }, sum: 6, }
    #   @eq     ( Ωnfat__64 = -> fn 1, 2, 3     ), { arc: 1, bo: 2, cy: 3, cfg: { arc: 1, bo: 2, cy: 3, sum: 6, }, sum: 6, }
    #   return null
    #.......................................................................................................
    do =>
      template =
        arc:      10
        bo:       11
        cy:       12
      fn = nfa { template, }, ( arc, bo, cy, cfg ) -> { arc, bo, cy, cfg, }
      @eq     ( Ωnfat__65 = -> fn 20, 21, 22, {} ), { arc: 20, bo: 21, cy: 22, cfg: { arc: 20, bo: 21, cy: 22, }, }
      @eq     ( Ωnfat__66 = -> fn()              ), { arc: 10, bo: 11, cy: 12, cfg: { arc: 10, bo: 11, cy: 12, }, }
      @eq     ( Ωnfat__67 = -> fn 20             ), { arc: 20, bo: 11, cy: 12, cfg: { arc: 20, bo: 11, cy: 12, }, }
      @eq     ( Ωnfat__68 = -> fn 20, 21         ), { arc: 20, bo: 21, cy: 12, cfg: { arc: 20, bo: 21, cy: 12, }, }
      @eq     ( Ωnfat__69 = -> fn 20, 21, 22     ), { arc: 20, bo: 21, cy: 22, cfg: { arc: 20, bo: 21, cy: 22, }, }
      return null
    #.......................................................................................................
    return null



#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: true,   show_passes: true,  report_checks: false, }
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test @nfa_tasks
  ( new Test guytest_cfg ).test { get_signature: @nfa_tasks.get_signature }
