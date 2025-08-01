
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


#===========================================================================================================
demo_isa_with_reason = ->
  whisper '—'.repeat 108
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
  info 'Ωnfat___1', quantity_2.isa.gnd_pod_isa_x.toString()
  info 'Ωnfat___2', quantity_2.isa.float_isa_x_q.toString()
  info 'Ωnfat___3', quantity_2.isa.nonempty_text_2_isa_x_u.toString()
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
  info 'Ωnfat___4', ( quantity.isa {},                nope  ), ( att "failed" ), em get_messages()
  info 'Ωnfat___5', ( text.isa     null,              nope  ), ( att "failed" ), em get_messages()
  info 'Ωnfat___6', ( quantity.isa { q: 8.1, },       nope  ), ( att "failed" ), em get_messages()
  info 'Ωnfat___7', ( quantity.isa { q: 8.1, u: '' }, nope  ), ( att "failed" ), em get_messages()
  info 'Ωnfat___8', ( quantity.isa { q: 8.1, u: 0  }, nope  ), ( att "failed" ), em get_messages()
  info 'Ωnfat___9', ( quantity_2.isa { q: 8.1, u: 0  }  ), ( att "failed" ), em get_messages()
  return null

#===========================================================================================================
demo_types_as_functions = ->
  whisper '—'.repeat 108
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
  debug 'Ωnfat__10', ( rpr ts.text '' ), ( isa ts.text '' )
  debug 'Ωnfat__11', ( rpr ts.text 34 ), ( isa ts.text 34 )
  return null

#===========================================================================================================
demo_parse_return_value = ->
  whisper '—'.repeat 108
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
      throw new Unparsable_function_body "Ωnfat__12 unable to parse function #{rpr source}"
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
  if false then do ->
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
      whisper 'Ωnfat__13', reverse bold white rpr fn.toString().replace /\s+/gsv, '\x20'
      try urge 'Ωnfat__14', rpr get_return_value_source   fn catch e then warn 'Ωnfat__15', em e.message
      try info 'Ωnfat__16', rpr normalize_revalex         fn catch e then warn 'Ωnfat__17', em e.message
      try help 'Ωnfat__18', rpr name_from_fn_revalex      fn catch e then warn 'Ωnfat__19', em e.message
  #.........................................................................................................
  if false then do ->
    RVX = Symbol 'RVX'
    # rvx = ( fn ) -> fn[RVX] = normalize_revalex fn; ( nameit ( name_from_fn_revalex fn ), fn ); fn
    rvx = ( fn ) -> fn[RVX] = normalize_revalex fn; fn
    ts =
      id:
        isa: rvx ( x ) -> ( text.isa x ) and ( /^[a-b]+$/.test x )
    for typename, dcl of ts
      nameit "isa_#{typename}", dcl.isa
    urge 'Ωnfat__20', rpr ts
    urge 'Ωnfat__21', rpr ts.id
    urge 'Ωnfat__22', rpr ts.id.isa[RVX]
    urge 'Ωnfat__23', rpr ts.id.isa.name
    return null
  #.........................................................................................................
  do ->
    debug 'Ωnfat__24', "turning lists of functions into objects with sensible names"
    RVX = Symbol.for 'RVX'
    rvx = ( fn ) -> normalize_revalex fn
    gnd.text      ?= isa: ( x ) -> ( typeof x ) is 'string'
    gnd.function  ?= isa: ( x ) -> ( typeof x ) is 'function'
    #.......................................................................................................
    ts =
      text: ( x ) -> ( typeof x ) is 'string'
      id:
        isa: [
          'text'
          ( x ) -> ( /^[a-z][a-z0-9]*$/.test x )
          ]
    #.......................................................................................................
    compile_typespace = ( ts ) ->
      for typename, dcl of ts
        ### Convert 'isa-only' declarations into objects with explicit `isa`: ###
        dcl         = ( do ( isa = dcl ) -> { isa, } ) unless gnd.pod.isa dcl
        dcl_isa     = dcl.isa
        ### Convert singular `isa` declarations into list of clauses: ###
        dcl_isa     = ( do ( isa = dcl_isa ) -> [ isa, ] ) unless Array.isArray dcl_isa
        isa_clauses = {}
        #...................................................................................................
        debug 'Ωnfat__25', 'dcl_isa', rpr dcl_isa
        for dcl_isa_clause in dcl_isa
          #.................................................................................................
          ### De-reference referenced type: ###
          if ( gnd.text.isa dcl_isa_clause )
            dcl_isa_clause = do ( ref_typename = dcl_isa_clause ) ->
              unless Reflect.has ts, ref_typename
                throw new Error "Ωnfat__26 unable to resolve #{rpr ref_typename} referenced by #{rpr typename}"
              return ts[ ref_typename ].isa
          #.................................................................................................
          unless gnd.function.isa dcl_isa_clause
            throw new Error "Ωnfat__27 expected a function, got #{rpr dcl_isa_clause}"
          #.................................................................................................
          revalex             = normalize_revalex dcl_isa_clause
          # dcl_isa_clause[RVX] = revalex
          test_name           = "#{typename}[#{rpr revalex}]"
          nameit test_name, dcl_isa_clause if dcl_isa_clause.name is ''
          isa_clauses[ test_name ] = dcl_isa_clause
        #...................................................................................................
        ts[ typename ].isa = do ( typename, isa_clauses ) -> ( x, record = null ) ->
          for name, isa_clause of isa_clauses
            unless isa_clause.call null, x, record
              record name if record?
              return false
          return true
    #.......................................................................................................
    compile_typespace ts
    for typename, dcl of ts
      info 'Ωnfat__29', typename, dcl.isa
      # for name, dcl_isa_clause of isa_clauses
      #   help 'Ωnfat__30', f"#{rpr name}:<30c; | #{dcl_isa_clause}"
    #.......................................................................................................
    info 'Ωnfat__31', ts.id.isa 'abc'
    info 'Ωnfat__32', ts.id.isa '123'
    info 'Ωnfat__33', ts.id.isa 'abc123'
    failed_tests = []
    record = ( name ) -> failed_tests.push name
    info 'Ωnfat__34', ts.id.isa 'abc',    record; urge 'Ωnfat__35', failed_tests; failed_tests.length = 0
    info 'Ωnfat__36', ts.id.isa '123',    record; urge 'Ωnfat__37', failed_tests; failed_tests.length = 0
    info 'Ωnfat__38', ts.id.isa 123,      record; urge 'Ωnfat__39', failed_tests; failed_tests.length = 0
    info 'Ωnfat__40', ts.id.isa 'abc123', record; urge 'Ωnfat__41', failed_tests; failed_tests.length = 0
    return null
  #.........................................................................................................
  return null


#===========================================================================================================
demo_set_prototype_to_obtain_callable_class_instances = ->
  whisper '—'.repeat 108
  do ->
    class E
      constructor: ->
        @eps = 'E::eps'
      blah: -> 'E::blah'

    class F extends E
      constructor: ->
        super()
        @foo = 'F::foo'
      blah: -> 'F::blah'

    f = new F()
    debug 'Ωnfat__42', f
    debug 'Ωnfat__43', f.constructor is F
    # debug 'Ωnfat__44', f::
    debug 'Ωnfat__45', f.__proto__ instanceof E
    debug 'Ωnfat__46', ( Object.getPrototypeOf f ) instanceof E
    debug 'Ωnfat__47'
    my_callable = -> 'D'
    # my_callable.__proto__ = new F()
    Object.setPrototypeOf my_callable, new F()
    debug 'Ωnfat__48', 'rpr my_callable                         ', rpr my_callable
    debug 'Ωnfat__49', 'rpr my_callable.prototype               ', rpr my_callable.prototype
    debug 'Ωnfat__50', 'rpr my_callable::                       ', rpr my_callable::
    debug 'Ωnfat__51', 'rpr Object.getPrototypeOf my_callable   ', rpr Object.getPrototypeOf my_callable
    debug 'Ωnfat__52', 'rpr my_callable instanceof F            ', rpr my_callable instanceof F
    debug 'Ωnfat__53', 'rpr my_callable instanceof E            ', rpr my_callable instanceof E
    debug 'Ωnfat__54', 'rpr my_callable.foo                     ', rpr my_callable.foo
    debug 'Ωnfat__55', 'rpr my_callable()                       ', rpr my_callable()
    debug 'Ωnfat__56', 'rpr my_callable.constructor             ', rpr my_callable.constructor
    debug 'Ωnfat__57', 'rpr my_callable.constructor.name        ', rpr my_callable.constructor.name
    return null
  #.........................................................................................................
  whisper '—'.repeat 108
  do ->
    #.......................................................................................................
    class E
      constructor: ( callable ) ->
        Object.setPrototypeOf callable, @
        @eps = 'E::eps'
        return callable
      blah: -> 'E::blah'
    #.......................................................................................................
    class F extends E
      constructor: ( callable ) ->
        super callable
        @foo = 'F::foo'
        return callable
      blah: -> 'F::blah'
    #.......................................................................................................
    my_callable = new F ( Desire = -> "an function named Desire" )
    debug 'Ωnfat__58', 'rpr my_callable                         ', rpr my_callable
    debug 'Ωnfat__59', 'rpr my_callable.prototype               ', rpr my_callable.prototype
    debug 'Ωnfat__60', 'rpr my_callable::                       ', rpr my_callable::
    debug 'Ωnfat__61', 'rpr Object.getPrototypeOf my_callable   ', rpr Object.getPrototypeOf my_callable
    debug 'Ωnfat__62', 'rpr my_callable instanceof F            ', rpr my_callable instanceof F
    debug 'Ωnfat__63', 'rpr my_callable instanceof E            ', rpr my_callable instanceof E
    debug 'Ωnfat__64', 'rpr my_callable.foo                     ', rpr my_callable.foo
    debug 'Ωnfat__65', 'rpr my_callable.eps                     ', rpr my_callable.eps
    debug 'Ωnfat__66', 'rpr my_callable()                       ', rpr my_callable()
    debug 'Ωnfat__67', 'rpr my_callable.blah()                  ', rpr my_callable.blah()
    debug 'Ωnfat__68', 'rpr my_callable.constructor             ', rpr my_callable.constructor
    debug 'Ωnfat__69', 'rpr my_callable.constructor.name        ', rpr my_callable.constructor.name
    return null
  return null

#===========================================================================================================
if module is require.main then await do =>
  # guytest_cfg = { throw_on_error: true,   show_passes: true,  report_checks: false, }
  # # guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  # ( new Test guytest_cfg ).test @nfa_tasks
  # # ( new Test guytest_cfg ).test { push_pop_set_at: @nfa_tasks.internals.push_pop_set_at }
  demo_isa_with_reason()
  demo_types_as_functions()
  demo_parse_return_value()
  # demo_set_prototype_to_obtain_callable_class_instances()
