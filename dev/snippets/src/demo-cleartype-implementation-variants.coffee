
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
  #.........................................................................................................
  return null


#===========================================================================================================
demo_set_prototype_to_obtain_callable_class_instances = ->
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
  debug 'Ωnfat__24', f
  debug 'Ωnfat__25', f.constructor is F
  # debug 'Ωnfat__26', f::
  debug 'Ωnfat__27', f.__proto__ instanceof E
  debug 'Ωnfat__28', ( Object.getPrototypeOf f ) instanceof E
  debug 'Ωnfat__29'
  d = -> 'D'
  # d.__proto__ = new F()
  Object.setPrototypeOf d, new F()
  debug 'Ωnfat__30', 'd                         ', d
  debug 'Ωnfat__31', 'd.prototype               ', d.prototype
  debug 'Ωnfat__32', 'd::                       ', d::
  debug 'Ωnfat__33', 'Object.getPrototypeOf d   ', Object.getPrototypeOf d
  debug 'Ωnfat__34', 'd instanceof F            ', d instanceof F
  debug 'Ωnfat__35', 'd instanceof E            ', d instanceof E
  debug 'Ωnfat__36', 'd.foo                     ', d.foo
  debug 'Ωnfat__38', 'd()                       ', d()
  return null

#===========================================================================================================
if module is require.main then await do =>
  # guytest_cfg = { throw_on_error: true,   show_passes: true,  report_checks: false, }
  # # guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  # ( new Test guytest_cfg ).test @nfa_tasks
  # # ( new Test guytest_cfg ).test { push_pop_set_at: @nfa_tasks.internals.push_pop_set_at }
  # demo_isa_with_reason()
  # demo_types_as_functions()
  # demo_parse_return_value()
