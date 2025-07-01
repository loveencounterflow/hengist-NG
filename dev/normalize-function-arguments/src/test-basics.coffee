
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
      @eq     ( Ωnfat__51 = -> get_signature ( a, cfg             ) ->  ), { names: [ 'a', 'cfg' ], q_idx: 1, q_ridx: -1, }
      @throws ( Ωnfat__52 = -> get_signature ( a = optional, cfg  ) ->  ), /not compliant/
      @throws ( Ωnfat__53 = -> get_signature ( a                  ) ->  ), /not compliant/
      @eq     ( Ωnfat__54 = -> get_signature empty_fn                   ), { names: [ 'cfg' ], q_idx: 0, q_ridx: -1, }
      @eq     ( Ωnfat__55 = -> get_signature ( cfg )                ->  ), { names: [ 'cfg' ], q_idx: 0, q_ridx: -1, }
      @eq     ( Ωnfat__56 = -> get_signature ( a, b, c, cfg       ) ->  ), { names: [ 'a', 'b', 'c', 'cfg' ], q_idx: 3, q_ridx: -1, }
      # ### TAINT limitation of CoffeeScript: signature runs up to soak, trailing paramters handled inside function body ###
      # @eq     ( Ωnfat__57 = -> get_signature ( a, b..., c       ) ->  ), { a: 'bare', b: 'soak', }
      @throws ( Ωnfat__58 = -> get_signature ( a, b..., c, cfg    ) ->  ), /not compliant/
      @throws ( Ωnfat__59 = -> get_signature ( a, b = null, cfg   ) ->  ), /not compliant/
      return null
    #.......................................................................................................
    do =>
      @throws ( Ωnfat__60 = -> get_signature ( a, b, cfg, c,      g ) ->  ), /not compliant/
      @eq     ( Ωnfat__61 = -> get_signature ( a, b,      c, cfg, g ) ->  ), { names: [ 'a', 'b', 'c', 'cfg', 'g', ], q_idx: 3, q_ridx: -2, }
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  template_class: ->
    NFA = require '../../../apps/normalize-function-arguments'
    { Template } = NFA
    #.......................................................................................................
    do =>
      @eq     ( Ωnfat__62 = -> new Template { arc: 10, bo: 11, cy: 12, din: 13; eps: 14, foo: 15, } ), { arc: 10, bo: 11, cy: 12, din: 13; eps: 14, foo: 15, }
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
      @eq     ( Ωnfat__63 = -> t ), { mylist_1: [], mylist_2: [], mylist_3: [], }
      @eq     ( Ωnfat__64 = -> t.mylist_1   is    mylist_1  ), true
      @eq     ( Ωnfat__65 = -> t.mylist_2   is    mylist_2  ), true
      @eq     ( Ωnfat__66 = -> t.mylist_1   isnt  mylist_2  ), true
      @eq     ( Ωnfat__67 = -> t.mylist_31  isnt  mylist_32 ), true
      mylist_1.push 'A'
      mylist_2.push 'B'
      mylist_31.push 'C'
      @eq     ( Ωnfat__68 = -> t ), { mylist_1: [ 'A', ], mylist_2: [ 'B', ], mylist_3: [], }
      return null
    #.......................................................................................................
    do =>
      cfg =
        name:
          first:    'John'
          last:     'Doe'
      t_1 = new Template cfg
      t_2 = new Template cfg
      @eq     ( Ωnfat__69 = -> t_1                        ), { name: { first: 'John', last: 'Doe', }, }
      @eq     ( Ωnfat__70 = -> t_1.name isnt cfg.name     ), true
      @eq     ( Ωnfat__71 = -> t_1                        ), { name: { first: 'John', last: 'Doe', }, }
      @eq     ( Ωnfat__72 = -> t_2.name isnt cfg.name     ), true
      @eq     ( Ωnfat__73 = -> t_1.name isnt t_2.name     ), true
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
    #   debug 'Ωnfat__74', internals.gnd.nfa_cfg
    #   debug 'Ωnfat__75', internals.gnd.nfa_cfg.template
    #   debug 'Ωnfat__76', fn 1, 2, 3, {}
    #   @eq     ( Ωnfat__77 = -> fn 1, 2, 3, {} ), { arc: 1, bo: 2, cy: 3, cfg: { arc: 1, bo: 2, cy: 3, sum: 6, }, sum: 6, }
    #   @eq     ( Ωnfat__78 = -> fn 1, 2, 3     ), { arc: 1, bo: 2, cy: 3, cfg: { arc: 1, bo: 2, cy: 3, sum: 6, }, sum: 6, }
    #   return null
    #.......................................................................................................
    do =>
      template =
        arc:      10
        bo:       11
        cy:       12
      fn = nfa { template, }, ( arc, bo, cy, cfg ) -> { arc, bo, cy, cfg, }
      @eq     ( Ωnfat__79 = -> fn 20, 21, 22, {} ), { arc: 20, bo: 21, cy: 22, cfg: { arc: 20, bo: 21, cy: 22, }, }
      @eq     ( Ωnfat__80 = -> fn()              ), { arc: 10, bo: 11, cy: 12, cfg: { arc: 10, bo: 11, cy: 12, }, }
      @eq     ( Ωnfat__81 = -> fn 20             ), { arc: 20, bo: 11, cy: 12, cfg: { arc: 20, bo: 11, cy: 12, }, }
      @eq     ( Ωnfat__82 = -> fn 20, 21         ), { arc: 20, bo: 21, cy: 12, cfg: { arc: 20, bo: 21, cy: 12, }, }
      @eq     ( Ωnfat__83 = -> fn 20, 21, 22     ), { arc: 20, bo: 21, cy: 22, cfg: { arc: 20, bo: 21, cy: 22, }, }
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
      @eq     ( Ωnfat__84 = -> fn()                         ), { name: null,      cfg: { name: null    } }
      @eq     ( Ωnfat__85 = -> fn 'alice', { name: 'bob', } ), { name: 'alice',   cfg: { name: 'alice' } }
      return null
    #.......................................................................................................
    do =>
      template =
        name:     'carl'
      F   = Symbol.for 'F'
      fn  = nfa { template, }, ( name, cfg, f ) -> { name, f, cfg, }
      @eq     ( Ωnfat__86 = -> fn()                             ), { name: 'carl',  f: undefined, cfg: { name: 'carl',  f: undefined, }, }
      @eq     ( Ωnfat__87 = -> fn          { name: 'bob', }, F  ), { name: 'bob',   f: F,         cfg: { name: 'bob',   f: F,         }, }
      @eq     ( Ωnfat__88 = -> fn 'alice', { name: 'bob', }, F  ), { name: 'alice', f: F,         cfg: { name: 'alice', f: F,         }, }
      @eq     ( Ωnfat__89 = -> fn          {              }, F  ), { name: 'carl',  f: F,         cfg: { name: 'carl',  f: F,         }, }
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
      @eq     ( Ωnfat__90 = ->       my_fn.name   ), 'my_fn'
      @eq     ( Ωnfat__91 = -> ( nfa my_fn ).name ), 'my_fn'
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
      @eq     ( Ωnfat__92 = ->  fn 3, 's'         ), { q: 3, u: 's', }
      @throws ( Ωnfat__93 = ->  fn 3, ''          ), /validation error: expected a quantity_create_cfg/
      return null
    #.......................................................................................................
    return null


#===========================================================================================================
demo_isa_with_reason = ->
  NFA = require '../../../apps/normalize-function-arguments'
  { nfa
    internals } = NFA
  { gnd       } = internals
  em = ( P... ) -> GUY.trm.reverse GUY.trm.gold GUY.trm.bold '', P..., ''
  att = ( P... ) -> GUY.trm.reverse GUY.trm.red GUY.trm.bold '', P..., ''
  #.........................................................................................................
  float           = isa: ( x, nope = -> false ) ->
    return nope "Number.isFinite x"         unless Number.isFinite x
    return true
  text            = isa: ( x, nope = -> false ) ->
    return nope "( typeof x ) is 'string'"  unless ( typeof x ) is 'string'
    return true
  nonempty_text   = isa: ( x, nope = -> false ) ->
    return nope "text.isa x"                unless text.isa x, nope
    return nope "x.length > 0"              unless x.length > 0
    return true
  #.........................................................................................................
  quantity = isa: ( x, nope = -> false ) ->
    return nope "gnd.pod.isa       x  " unless gnd.pod.isa       x,    nope
    return nope "float.isa         x.q" unless float.isa         x.q,  nope
    return nope "nonempty_text.isa x.u" unless nonempty_text.isa x.u,  nope
    return true
  #.........................................................................................................
  nonempty_text_2 = isa:
    text_isa_x:           ( x ) -> text.isa x, nope
    x_length_gt_0:        ( x ) -> x.length > 0
  #.........................................................................................................
  quantity_2 = isa:
    gnd_pod_isa_x:            ( x ) -> gnd.pod.isa         x
    float_isa_x_q:            ( x ) -> float.isa           x.q
    nonempty_text_2_isa_x_u:  ( x ) -> nonempty_text_2.isa x.u
  #.........................................................................................................
  info 'Ωnfat__94', quantity_2.isa.gnd_pod_isa_x.toString()
  info 'Ωnfat__95', quantity_2.isa.float_isa_x_q.toString()
  info 'Ωnfat__96', quantity_2.isa.nonempty_text_2_isa_x_u.toString()
  quantity_2.isa = do ( isas = quantity_2.isa ) =>
    return ( x ) ->
      for key, isa of isas
        return nope key unless isa x
      return true
  #.........................................................................................................
  nonempty_text_2.isa = do ( isas = nonempty_text_2.isa ) =>
    return ( x ) ->
      for key, isa of isas
        return nope key unless isa x
      return true
  #.........................................................................................................
  messages = []
  nope = ( message ) -> false                         # discarding messages
  nope = ( message ) -> messages.push message; false  # collecting messages
  get_messages = -> R = ( ( "#{att 'not'}#{em m}" for m in messages ).join reverse ' ▶ ' ).replace /\s+/g, ' '; messages = []; R
  info 'Ωnfat__97', ( quantity.isa {},                nope  ), ( att "failed" ), em get_messages()
  info 'Ωnfat__98', ( text.isa     null,              nope  ), ( att "failed" ), em get_messages()
  info 'Ωnfat__99', ( quantity.isa { q: 8.1, },       nope  ), ( att "failed" ), em get_messages()
  info 'Ωnfat_100', ( quantity.isa { q: 8.1, u: '' }, nope  ), ( att "failed" ), em get_messages()
  info 'Ωnfat_101', ( quantity.isa { q: 8.1, u: 0  }, nope  ), ( att "failed" ), em get_messages()
  info 'Ωnfat_102', ( quantity_2.isa { q: 8.1, u: 0  }  ), ( att "failed" ), em get_messages()
  return null

#===========================================================================================================
demo_types_as_functions = ->
  ###

  * a 'type' is a / is implemented as a function that accepts one argument `x` and returns `undefined`,
    `null` or `true` if `x` is considered to be an element of the type / a value conforming to the type;
    otherwise, it must return a string that identifies the test that `x` did not pass; so for example,
    a type `empty` described as the set of all values that have a property `x.length` whose value is `0`:

    empty = ( x ) -> return "x.length is 0" unless x? and ( x.length is 0 )

  ###
  isa = ( expectation = undefined ) -> return ( not expectation? ) or ( expectation is true )
  ts =
    # text: ( x ) -> if ( typeof x ) is 'string' then true else "( typeof x ) is 'string'"
    text: ( x ) -> return "( typeof x ) is 'string'" unless ( typeof x ) is 'string'
  debug 'Ωnfat_103', ( rpr ts.text '' ), ( isa ts.text '' )
  debug 'Ωnfat_104', ( rpr ts.text 34 ), ( isa ts.text 34 )
  return null

#===========================================================================================================
demo_parse_return_value = ->
  NFA = require '../../../apps/normalize-function-arguments'
  { nfa
    internals } = NFA
  { gnd
    nameit    } = internals
  #.........................................................................................................
  em = ( P... ) -> reverse red bold '', P..., ''
  class Unparsable_function_body extends Error
  #.........................................................................................................
  get_return_value_source = ( fn ) ->
    ### TAINT use JS tokenizer ###
    ### NOTE restrictions:
    * catches only last `return` statement, even if unreachable
    * may misinterpret string literals, comments as source code
    ###
    source = fn.toString().replace /// \s+ ///gsv, '\x20'
    unless ( match = source.match ///^ .* \b return \s (?<revalex> [^ ; ]+ ) .* $///sv )?
      throw new Unparsable_function_body "Ωnfat_105 unable to parse function #{rpr source}"
    R = match.groups.revalex
    return R
  #.........................................................................................................
  normalize_revalex = ( fn ) ->
    ### NOTE `revalex` short for '**RE**turn **VA**Lue **EX**pression' ###
    ### TAINT use JS tokenizer ###
    R = get_return_value_source fn
    R = R.replace ///  !==     ///gsv, 'isnt'
    R = R.replace ///  &&      ///gsv, 'and'
    R = R.replace ///  \|\|    ///gsv, 'or'
    R = R.replace ///  !       ///gsv, 'not'
    return R
  #.........................................................................................................
  name_from_fn_revalex = ( fn ) -> name_from_revalex normalize_revalex fn
  name_from_revalex = ( revalex ) ->
    R = revalex.replace /// [^ a-z A-Z 0-9 _ ]+         ///gsv, '_'
    R = R.replace       ///^ _* (?<center> .*? ) _* $   ///gsv, '$<center>'
    return R
  #.........................................................................................................
  probes = [
    ( x ) -> ( gnd.text.isa x ) and ( x.length isnt 0 )
    ( x ) => ( gnd.text.isa x ) and ( x.length isnt 0 )
    ( x ) -> true
    ( x ) => true
    ( x ) =>
      return false unless gnd.isa.float x
      return false unless 0 < x < 1
      return true
    ( x ) ->
      return gnd.isa.float x
      # return false unless 0 < x < 1
      return gnd.isa.text x
    ( x ) ->
      return gnd.isa.float x
      ### return false unless 0 < x < 1 ###
    ]
  #.........................................................................................................
  for fn in probes
    whisper 'Ωnfat_106', reverse bold white rpr fn.toString().replace /\s+/gsv, '\x20'
    try urge 'Ωnfat_107', rpr get_return_value_source   fn catch e then warn 'Ωnfat_108', em e.message
    try info 'Ωnfat_109', rpr normalize_revalex         fn catch e then warn 'Ωnfat_110', em e.message
    try help 'Ωnfat_111', rpr name_from_fn_revalex      fn catch e then warn 'Ωnfat_112', em e.message
  #.........................................................................................................
  RVX = Symbol 'RVX'
  # rvx = ( fn ) -> fn[RVX] = normalize_revalex fn; ( nameit ( name_from_fn_revalex fn ), fn ); fn
  rvx = ( fn ) -> fn[RVX] = normalize_revalex fn; fn
  ts =
    id:
      isa: rvx ( x ) -> ( text.isa x ) and ( /^[a-b]+$/.test x )
  for typename, dcl of ts
    nameit "isa_#{typename}", dcl.isa
  urge 'Ωnfat_113', rpr ts
  urge 'Ωnfat_114', rpr ts.id
  urge 'Ωnfat_115', rpr ts.id.isa[RVX]
  urge 'Ωnfat_116', rpr ts.id.isa.name
  #.........................................................................................................
  return null

#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: true,   show_passes: true,  report_checks: false, }
  # guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test @nfa_tasks
  # ( new Test guytest_cfg ).test { push_pop_set_at: @nfa_tasks.internals.push_pop_set_at }
  demo_isa_with_reason()
  demo_types_as_functions()
  demo_parse_return_value()

  # f = ( a, b, cfg ) -> { a, b, cfg, }
  # debug()
  # debug 'Ωnfat_117', f()
  # debug 'Ωnfat_118', f undefined
  # debug 'Ωnfat_119', f 0
  # debug 'Ωnfat_120', f 0, 1
  # debug 'Ωnfat_121', f 0, 1, undefined
  # debug 'Ωnfat_122', f 0, 1, "wat"
  # debug 'Ωnfat_123', f 0, 1, {}

  # f = ( a, b, cfg, u ) -> { a, b, cfg, u, }
  # debug()
  # debug 'Ωnfat_124', f()
  # debug 'Ωnfat_125', f undefined
  # debug 'Ωnfat_126', f 0
  # debug 'Ωnfat_127', f 0, {}
  # debug 'Ωnfat_128', f 0, 1
  # debug 'Ωnfat_129', f 0, 1, undefined
  # debug 'Ωnfat_130', f 0, 1, "wat"
  # debug 'Ωnfat_131', f 0, 1, {}
  # debug 'Ωnfat_132', f 0, 1, undefined, 3
  # debug 'Ωnfat_133', f 0, 1, "wat", 3
  # debug 'Ωnfat_134', f 0, 1, {}, 3
  # # debug 'Ωnfat_135', f [ 0, 1, , 3, ]...



