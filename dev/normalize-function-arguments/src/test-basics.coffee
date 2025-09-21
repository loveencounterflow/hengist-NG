
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
  gold
  bold
  white
  reverse               } = GUY.trm



############################################################################################################
#
#===========================================================================================================
@nfa_tasks =

  #=========================================================================================================
  internals:

    #-------------------------------------------------------------------------------------------------------
    push_pop_set_at: ->
      NFA = require '../../../apps/normalize-function-arguments'
      { push_at
        pop_at
        set_at } = NFA.internals
      A = ( parts ) -> Array.from parts.join ''
      #.......................................................................................................
      do =>
        @eq     ( Ωnfat___1 = -> push_at  A'abcd', -1, '^'                    ), A'abc^d'
        @eq     ( Ωnfat___2 = -> push_at  A'abcd', -2, '^'                    ), A'ab^cd'
        @eq     ( Ωnfat___3 = -> push_at  A'abcd', -3, '^'                    ), A'a^bcd'
        @eq     ( Ωnfat___4 = -> push_at  A'',     -1, '^'                    ), A'^'
        @eq     ( Ωnfat___5 = -> push_at  A'',     -2, '^'                    ), A'^'
        @eq     ( Ωnfat___6 = -> push_at  A'',     -3, '^'                    ), A'^'
        @throws ( Ωnfat___7 = -> push_at  A'',      1, '?'                    ), /expected negative number/
        @throws ( Ωnfat___8 = -> push_at  A'',      0, '?'                    ), /expected negative number/
        @eq     ( Ωnfat___9 = -> [ ( set_at ( d = A'abcd' ), -1, '^' ), d, ]  ), [ '^', A'abc^', ]
        @eq     ( Ωnfat__10 = -> [ ( set_at ( d = A'abcd' ), -2, '^' ), d, ]  ), [ '^', A'ab^d', ]
        @eq     ( Ωnfat__11 = -> [ ( set_at ( d = A'abcd' ), -3, '^' ), d, ]  ), [ '^', A'a^cd', ]
        # @eq     ( Ωnfat__12 = -> [ ( pop_at ( d = A'abc^' ), -1 ), d, ]       ), [ '^', A'abc', ]
        # @eq     ( Ωnfat__13 = -> [ ( pop_at ( d = A'ab^c' ), -2 ), d, ]       ), [ '^', A'abc', ]
        # @eq     ( Ωnfat__14 = -> [ ( pop_at ( d = A'a^bc' ), -3 ), d, ]       ), [ '^', A'abc', ]
        # @throws ( Ωnfat__15 = -> pop_at   A'',      1                         ), /expected negative number/
        # @throws ( Ωnfat__16 = -> pop_at   A'',      0                         ), /expected negative number/
        # @throws ( Ωnfat__17 = -> pop_at   [], -1          ), /list too short/
        # @throws ( Ωnfat__18 = -> pop_at   [ 1, ], -2      ), /list too short/
        return null
      # #.......................................................................................................
      # do =>
      #   d = A'abcdef'
      #   @eq     ( Ωnfat__19 = -> push_at  [           ], -1, 'g' ), [ 'g', ]
      #   @eq     ( Ωnfat__20 = -> push_at  [ 'b',      ], -1, 'a' ), [ 'a', 'b', ]
      #   @eq     ( Ωnfat__21 = -> push_at  [ 'a', 'c', ], -1, 'b' ), [ 'a', 'b', 'c', ]
      #   return null
      #.......................................................................................................
      return null

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
      @eq     ( Ωnfat__22 = -> fn()                           ), { a: undefined, b: undefined, c: undefined, cfg: {a: undefined, b: undefined, c: undefined, } }
      @eq     ( Ωnfat__23 = -> fn 1                           ), { a: 1,         b: undefined, c: undefined, cfg: { a: 1,        b: undefined, c: undefined, } }
      @eq     ( Ωnfat__24 = -> fn 1, 2                        ), { a: 1,         b: 2,         c: undefined, cfg: { a: 1,        b: 2,         c: undefined,  } }
      @eq     ( Ωnfat__25 = -> fn 1, 2, 3                     ), { a: 1,         b: 2,         c: 3,         cfg: { a: 1,        b: 2,         c: 3 } }
      @throws ( Ωnfat__26 = -> fn 1, 2, 3, 4                  ), /expected an optional POD at position -1/
      @eq     ( Ωnfat__27 = -> fn                 {}          ), { a: undefined, b: undefined, c: undefined, cfg: { a: undefined, b: undefined, c: undefined, } }
      @eq     ( Ωnfat__28 = -> fn 1,              {}          ), { a: 1,         b: undefined, c: undefined, cfg: { a: 1,         b: undefined, c: undefined, } }
      @eq     ( Ωnfat__29 = -> fn 1, 2,           {}          ), { a: 1,         b: 2,         c: undefined, cfg: { a: 1,         b: 2,         c: undefined, } }
      @eq     ( Ωnfat__30 = -> fn 1, 2, 3,        {}          ), { a: 1,         b: 2,         c: 3,         cfg: { a: 1,         b: 2,         c: 3,         } }
      @throws ( Ωnfat__31 = -> fn 1, 2, 3, 4,     {}          ), /expected up to 4 arguments, got 5/
      @eq     ( Ωnfat__32 = -> fn                 { b: 88, }  ), { a: undefined, b: 88,        c: undefined, cfg: { a: undefined, b: 88,        c: undefined, } }
      @eq     ( Ωnfat__33 = -> fn 1,              { b: 88, }  ), { a: 1,         b: 88,        c: undefined, cfg: { a: 1,         b: 88,        c: undefined, } }
      @eq     ( Ωnfat__34 = -> fn 1, 2,           { b: 88, }  ), { a: 1,         b: 2,         c: undefined, cfg: { a: 1,         b: 2,         c: undefined, } }
      @eq     ( Ωnfat__35 = -> fn 1, 2, 3,        { b: 88, }  ), { a: 1,         b: 2,         c: 3,         cfg: { a: 1,         b: 2,         c: 3,         } }
      @throws ( Ωnfat__36 = -> fn 1, 2, 3, 4,     { b: 88, }  ), /expected up to 4 arguments, got 5/
      @eq     ( Ωnfat__37 = -> fn             frz { b: 88, }  ), { a: undefined, b: 88,        c: undefined, cfg: { a: undefined, b: 88,        c: undefined, } }
      @eq     ( Ωnfat__38 = -> fn 1,          frz { b: 88, }  ), { a: 1,         b: 88,        c: undefined, cfg: { a: 1,         b: 88,        c: undefined, } }
      @eq     ( Ωnfat__39 = -> fn 1, 2,       frz { b: 88, }  ), { a: 1,         b: 2,         c: undefined, cfg: { a: 1,         b: 2,         c: undefined, } }
      @eq     ( Ωnfat__40 = -> fn 1, 2, 3,    frz { b: 88, }  ), { a: 1,         b: 2,         c: 3,         cfg: { a: 1,         b: 2,         c: 3,         } }
      @throws ( Ωnfat__41 = -> fn 1, 2, 3, 4, frz { b: 88, }  ), /expected up to 4 arguments, got 5/
      #.....................................................................................................
      return null
    #.......................................................................................................
    do =>
      fn = nfa ( cfg ) -> { cfg, }
      frz = Object.freeze
      #.....................................................................................................
      @eq     ( Ωnfat__42 = -> fn()                           ), { cfg: {} }
      @eq     ( Ωnfat__43 = -> fn                 {}          ), { cfg: {} }
      @eq     ( Ωnfat__44 = -> fn                 { b: 88, }  ), { cfg: { b: 88, } }
      @eq     ( Ωnfat__45 = -> fn             frz { b: 88, }  ), { cfg: { b: 88, } }
      @throws ( Ωnfat__46 = -> fn 1, 2, 3, 4                  ), /expected up to 1 arguments, got 4/
      @throws ( Ωnfat__47 = -> fn 1, 2, 3, 4,     {}          ), /expected up to 1 arguments, got 5/
      @throws ( Ωnfat__48 = -> fn 1, 2, 3, 4,     { b: 88, }  ), /expected up to 1 arguments, got 5/
      @throws ( Ωnfat__49 = -> fn 1, 2, 3, 4, frz { b: 88, }  ), /expected up to 1 arguments, got 5/
      #.....................................................................................................
      return null
    #.......................................................................................................
    do =>
      @throws ( Ωnfat__50 = -> nfa () -> {} ), /not compliant/
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  names_in_cfg_are_created: ->
    NFA = require '../../../apps/normalize-function-arguments'
    { nfa } = NFA
    #.......................................................................................................
    do =>
      fn = nfa ( first_name, last_name, cfg ) -> cfg
      frz = Object.freeze
      #.....................................................................................................
      @eq     ( Ωnfat__51 = -> fn()                                       ), { first_name: undefined, last_name: undefined,   }
      @eq     ( Ωnfat__52 = -> fn 'Alice'                                 ), { first_name: 'Alice',   last_name: undefined,   }
      @eq     ( Ωnfat__53 = -> fn 'Alice', 'McMillan'                     ), { first_name: 'Alice',   last_name: 'McMillan',  }
      @eq     ( Ωnfat__54 = -> fn                      {}                 ), { first_name: undefined, last_name: undefined,   }
      @eq     ( Ωnfat__55 = -> fn 'Alice',             {}                 ), { first_name: 'Alice',   last_name: undefined,   }
      @eq     ( Ωnfat__56 = -> fn 'Alice', 'McMillan', {}                 ), { first_name: 'Alice',   last_name: 'McMillan',  }
      @eq     ( Ωnfat__57 = -> fn                      { city: 'Seoul', } ), { first_name: undefined, last_name: undefined,  city: 'Seoul', }
      @eq     ( Ωnfat__58 = -> fn 'Alice',             { city: 'Seoul', } ), { first_name: 'Alice',   last_name: undefined,  city: 'Seoul', }
      @eq     ( Ωnfat__59 = -> fn 'Alice', 'McMillan', { city: 'Seoul', } ), { first_name: 'Alice',   last_name: 'McMillan', city: 'Seoul', }
      #.....................................................................................................
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
      @eq     ( Ωnfat__60 = -> get_signature ( a, cfg             ) ->  ), { names: [ 'a', 'cfg' ], q_idx: 1, q_ridx: -1, }
      @throws ( Ωnfat__61 = -> get_signature ( a = optional, cfg  ) ->  ), /not compliant/
      @throws ( Ωnfat__62 = -> get_signature ( a                  ) ->  ), /not compliant/
      @eq     ( Ωnfat__63 = -> get_signature empty_fn                   ), { names: [ 'cfg' ], q_idx: 0, q_ridx: -1, }
      @eq     ( Ωnfat__64 = -> get_signature ( cfg )                ->  ), { names: [ 'cfg' ], q_idx: 0, q_ridx: -1, }
      @eq     ( Ωnfat__65 = -> get_signature ( a, b, c, cfg       ) ->  ), { names: [ 'a', 'b', 'c', 'cfg' ], q_idx: 3, q_ridx: -1, }
      # ### TAINT limitation of CoffeeScript: signature runs up to soak, trailing paramters handled inside function body ###
      # @eq     ( Ωnfat__66 = -> get_signature ( a, b..., c       ) ->  ), { a: 'bare', b: 'soak', }
      @throws ( Ωnfat__67 = -> get_signature ( a, b..., c, cfg    ) ->  ), /not compliant/
      @throws ( Ωnfat__68 = -> get_signature ( a, b = null, cfg   ) ->  ), /not compliant/
      return null
    #.......................................................................................................
    do =>
      @throws ( Ωnfat__69 = -> get_signature ( a, b, cfg, c,      g ) ->  ), /not compliant/
      @eq     ( Ωnfat__70 = -> get_signature ( a, b,      c, cfg, g ) ->  ), { names: [ 'a', 'b', 'c', 'cfg', 'g', ], q_idx: 3, q_ridx: -2, }
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  template_class: ->
    NFA = require '../../../apps/normalize-function-arguments'
    { Template } = NFA
    #.......................................................................................................
    do =>
      @eq     ( Ωnfat__71 = -> new Template { arc: 10, bo: 11, cy: 12, din: 13; eps: 14, foo: 15, } ), { arc: 10, bo: 11, cy: 12, din: 13; eps: 14, foo: 15, }
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
      @eq     ( Ωnfat__72 = -> t ), { mylist_1: [], mylist_2: [], mylist_3: [], }
      @eq     ( Ωnfat__73 = -> t.mylist_1   is    mylist_1  ), true
      @eq     ( Ωnfat__74 = -> t.mylist_2   is    mylist_2  ), true
      @eq     ( Ωnfat__75 = -> t.mylist_1   isnt  mylist_2  ), true
      @eq     ( Ωnfat__76 = -> t.mylist_31  isnt  mylist_32 ), true
      mylist_1.push 'A'
      mylist_2.push 'B'
      mylist_31.push 'C'
      @eq     ( Ωnfat__77 = -> t ), { mylist_1: [ 'A', ], mylist_2: [ 'B', ], mylist_3: [], }
      return null
    #.......................................................................................................
    do =>
      cfg =
        name:
          first:    'John'
          last:     'Doe'
      t_1 = new Template cfg
      t_2 = new Template cfg
      @eq     ( Ωnfat__78 = -> t_1                        ), { name: { first: 'John', last: 'Doe', }, }
      @eq     ( Ωnfat__79 = -> t_1.name isnt cfg.name     ), true
      @eq     ( Ωnfat__80 = -> t_1                        ), { name: { first: 'John', last: 'Doe', }, }
      @eq     ( Ωnfat__81 = -> t_2.name isnt cfg.name     ), true
      @eq     ( Ωnfat__82 = -> t_1.name isnt t_2.name     ), true
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
    #   debug 'Ωnfat__83', internals.gnd.nfa_cfg
    #   debug 'Ωnfat__84', internals.gnd.nfa_cfg.template
    #   debug 'Ωnfat__85', fn 1, 2, 3, {}
    #   @eq     ( Ωnfat__86 = -> fn 1, 2, 3, {} ), { arc: 1, bo: 2, cy: 3, cfg: { arc: 1, bo: 2, cy: 3, sum: 6, }, sum: 6, }
    #   @eq     ( Ωnfat__87 = -> fn 1, 2, 3     ), { arc: 1, bo: 2, cy: 3, cfg: { arc: 1, bo: 2, cy: 3, sum: 6, }, sum: 6, }
    #   return null
    #.......................................................................................................
    do =>
      template =
        arc:      10
        bo:       11
        cy:       12
      fn = nfa { template, }, ( arc, bo, cy, cfg ) -> { arc, bo, cy, cfg, }
      @eq     ( Ωnfat__88 = -> fn 20, 21, 22, {} ), { arc: 20, bo: 21, cy: 22, cfg: { arc: 20, bo: 21, cy: 22, }, }
      @eq     ( Ωnfat__89 = -> fn()              ), { arc: 10, bo: 11, cy: 12, cfg: { arc: 10, bo: 11, cy: 12, }, }
      @eq     ( Ωnfat__90 = -> fn 20             ), { arc: 20, bo: 11, cy: 12, cfg: { arc: 20, bo: 11, cy: 12, }, }
      @eq     ( Ωnfat__91 = -> fn 20, 21         ), { arc: 20, bo: 21, cy: 12, cfg: { arc: 20, bo: 21, cy: 12, }, }
      @eq     ( Ωnfat__92 = -> fn 20, 21, 22     ), { arc: 20, bo: 21, cy: 22, cfg: { arc: 20, bo: 21, cy: 22, }, }
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  cfg_in_penultimate_position: ->
    NFA = require '../../../apps/normalize-function-arguments'
    { nfa
      internals } = NFA
    #.......................................................................................................
    do =>
      template =
        name:     null
      fn = nfa { template, }, ( name, cfg ) -> { name, cfg, }
      @eq     ( Ωnfat__93 = -> fn()                         ), { name: null,      cfg: { name: null    } }
      @eq     ( Ωnfat__94 = -> fn 'alice', { name: 'bob', } ), { name: 'alice',   cfg: { name: 'alice' } }
      return null
    #.......................................................................................................
    do =>
      template =
        name:     'carl'
      # F   = Symbol.for 'F'
      F   = ( -> )
      fn  = nfa { template, }, ( name, cfg, f ) -> { name, f, cfg, }
      @eq     ( Ωnfat__95 = -> fn()                             ), { name: 'carl',  f: undefined, cfg: { name: 'carl',  f: undefined, }, }
      @eq     ( Ωnfat__96 = -> fn          { name: 'bob', },  F ), { name: 'bob',   f: F,         cfg: { name: 'bob',   f: F,         }, }
      @eq     ( Ωnfat__97 = -> fn 'alice', { name: 'bob', },  F ), { name: 'alice', f: F,         cfg: { name: 'alice', f: F,         }, }
      @eq     ( Ωnfat__98 = -> fn 'alice', {              },  F ), { name: 'alice', f: F,         cfg: { name: 'alice', f: F,         }, }
      @eq     ( Ωnfat__99 = -> fn 'alice',                    F ), { name: 'alice', f: F,         cfg: { name: 'alice', f: F,         }, }
      @eq     ( Ωnfat_100 = -> fn                             F ), { name: 'carl',  f: F,         cfg: { name: 'carl',  f: F,         }, }
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  function_naming: ->
    NFA = require '../../../apps/normalize-function-arguments'
    { nfa
      internals } = NFA
    #.......................................................................................................
    do =>
      my_fn = ( cfg ) ->
      @eq     ( Ωnfat_101 = ->       my_fn.name   ), 'my_fn'
      @eq     ( Ωnfat_102 = -> ( nfa my_fn ).name ), 'my_fn'
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  use_isa_setting: ->
    NFA = require '../../../apps/normalize-function-arguments'
    { nfa
      internals } = NFA
    { gnd       } = internals
    #.......................................................................................................
    float           = isa: ( x ) -> Number.isFinite x
    text            = isa: ( x ) -> ( typeof x ) is 'string'
    nonempty_text   = isa: ( x ) -> ( text.isa x ) and x.length > 0
    #.......................................................................................................
    do =>
      template  = { q: 0, u: 'u', }
      isa       = ( x ) ->
        return false unless gnd.pod.isa       x
        return false unless float.isa         x.q
        return false unless nonempty_text.isa x.u
        return true
      fn = nfa { isa, template, }, quantity_create = ( q, u, cfg ) -> cfg
      @eq     ( Ωnfat_103 = ->  fn 3, 's'         ), { q: 3, u: 's', }
      @throws ( Ωnfat_104 = ->  fn 3, ''          ), /validation error: expected a quantity_create_cfg/
      return null
    #.......................................................................................................
    do =>
      ts =
        quantity:
          template: { q: 0, u: 'u', }
          isa: ( x ) ->
            return false unless gnd.pod.isa       x
            return false unless float.isa         x.q
            return false unless nonempty_text.isa x.u
            return true
      fn = nfa ts.quantity, quantity_create = ( q, u, cfg ) -> cfg
      @eq     ( Ωnfat_105 = ->  fn 3, 's'                     ), { q: 3, u: 's', }
      @eq     ( Ωnfat_106 = ->  fn 3, 's', { q: 0, u: 'u', }  ), { q: 3, u: 's', }
      @throws ( Ωnfat_107 = ->  fn 3, ''                      ), /validation error: expected a quantity_create_cfg/
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  use_isa_setting_sfmodule: ->
    # NFA = require '../../../apps/normalize-function-arguments'
    NFA = require '../../../apps/normalize-function-arguments/dist/main.js'
    { nfa
      internals } = NFA
    { gnd       } = internals
    #.......................................................................................................
    float           = isa: ( x ) -> Number.isFinite x
    text            = isa: ( x ) -> ( typeof x ) is 'string'
    nonempty_text   = isa: ( x ) -> ( text.isa x ) and x.length > 0
    #.......................................................................................................
    do =>
      template  = { q: 0, u: 'u', }
      isa       = ( x ) ->
        return false unless gnd.pod.isa       x
        return false unless float.isa         x.q
        return false unless nonempty_text.isa x.u
        return true
      fn = nfa { isa, template, }, quantity_create = ( q, u, cfg ) -> cfg
      @eq     ( Ωnfat_108 = ->  fn 3, 's'         ), { q: 3, u: 's', }
      @throws ( Ωnfat_109 = ->  fn 3, ''          ), /validation error: expected a quantity_create_cfg/
      return null
    #.......................................................................................................
    do =>
      ts =
        quantity:
          template: { q: 0, u: 'u', }
          isa: ( x ) ->
            return false unless gnd.pod.isa       x
            return false unless float.isa         x.q
            return false unless nonempty_text.isa x.u
            return true
      fn = nfa ts.quantity, quantity_create = ( q, u, cfg ) -> cfg
      @eq     ( Ωnfat_110 = ->  fn 3, 's'                     ), { q: 3, u: 's', }
      @eq     ( Ωnfat_111 = ->  fn 3, 's', { q: 0, u: 'u', }  ), { q: 3, u: 's', }
      @throws ( Ωnfat_112 = ->  fn 3, ''                      ), /validation error: expected a quantity_create_cfg/
      return null
    #.......................................................................................................
    return null


#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: true,   show_passes: true,  report_checks: false, }
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test @nfa_tasks
  # ( new Test guytest_cfg ).test { push_pop_set_at: @nfa_tasks.internals.push_pop_set_at }



