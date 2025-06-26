
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
{ gold
  blue
  red
  reverse
  bold                  } = GUY.trm

###

# Restriction

In order to avoid having to integrate a JS expression parser, we restrict eligible functions to those whose
signatures consists of nothing but bare parameter names, parameter names with spread (soak) symbol '...',
and parameter names with the symbolic default 'optional' which must be spelled out in those same letters.

# CFG Resolution Strategies

* demand fixed number positional
* demand last one named
* signature has *p* ∈ ℕ₀ positional parameters (named in signature)
* signature has *q* ∈ [ 0, 1 ] PODs for named parameters (i.e. has one or none)
* signature has *p* + *q* = *b* ∈ ℕ₀ parameters
* signature has *s* ∈ [ 0, 1 ] splats (i.e. has one or none)
* function call has *a* ∈ ℕ₀ arguments
  * pre-check strategies:
    * **PCS1**: reject if *b* ≠ *p*
    * **PCS2**: reject if *b* > *p* (Note: can/will not apply if any parameter is declared as a rest (or
      soak) parameter (i.e. with `...`); in that case, assume *b* = *p*)
* recognition of CFG:
  * all strategies / invariants:
    * CFG may only be last parameter and therefore last argument
    * CFG must be a POD
  * CFG recognition strategies:
    * **CRS1** CFG must be at position of CFG in parameters, arguments[ b - 1 ]
    * **CRS2** CFG must be at last position of arguments, arguments[ a - 1 ]
Given a function `f = ( a, b, c, cfg ) ->` that is called as follows:

* **p0_n0**: f()
* **p1_n0**: f 1
* **p2_n0**: f 1, 2
* **p3_n0**: f 1, 2, 3
* **p0_n1**: f          { a: 4, d: 5, }
* **p1_n1**: f 1,       { a: 4, d: 5, }
* **p2_n1**: f 1, 2,    { a: 4, d: 5, }
* **p3_n1**: f 1, 2, 3, { a: 4, d: 5, }
* **p4_n0**: f 1, 2, 3, 4

* **NN**: demand 4 arguments, last one must be a POD
  * **p0_n0**: f()                          # ERROR
  * **p1_n0**: f 1                          # ERROR
  * **p2_n0**: f 1, 2                       # ERROR
  * **p3_n0**: f 1, 2, 3                    # ERROR
  * **p0_n1**: f          { a: 4, d: 5, }   # ERROR
  * **p1_n1**: f 1,       { a: 4, d: 5, }   # ERROR
  * **p2_n1**: f 1, 2,    { a: 4, d: 5, }   # ERROR
  * **p3_n1**: f 1, 2, 3, { a: 4, d: 5, }   # depends on Name Clash Resolution Strategy
  * **p4_n0**: f 1, 2, 3, 4                 # ERROR

* **NN**: assign positional arguments that appear in signature, last must be a POD
  * **p0_n0**: f()                          # ERROR
  * **p1_n0**: f 1                          # ERROR
  * **p2_n0**: f 1, 2                       # ERROR
  * **p3_n0**: f 1, 2, 3                    # ERROR
  * **p0_n1**: f          { a: 4, d: 5, }   # { a: 4, d: 5, }
  * **p1_n1**: f 1,       { a: 4, d: 5, }   # {       d: 5, }, `a` depends on Name Clash Resolution Strategy
  * **p2_n1**: f 1, 2,    { a: 4, d: 5, }   # {       d: 5, }, `a` depends on Name Clash Resolution Strategy
  * **p3_n1**: f 1, 2, 3, { a: 4, d: 5, }   # {       d: 5, }, `a` depends on Name Clash Resolution Strategy
  * **p4_n0**: f 1, 2, 3, 4                 # ERROR

* **NN**: assign positional arguments that appear in signature, last may be a POD (udf: `undefined`)
  * **p0_n0**: f()                          # { a: 4, b: udf, c: udf, }
  * **p1_n0**: f 1                          # { a: 4, b: udf, c: udf, }
  * **p2_n0**: f 1, 2                       # { a: 4, b: udf, c: udf, }
  * **p3_n0**: f 1, 2, 3                    # { a: 4, b: udf, c: udf, }
  * **p0_n1**: f          { a: 4, d: 5, }   # { a: 4, b: udf, c: udf, d: 5, }
  * **p1_n1**: f 1,       { a: 4, d: 5, }   # {       b: udf, c: udf, d: 5, }, `a` depends on Name Clash Resolution Strategy
  * **p2_n1**: f 1, 2,    { a: 4, d: 5, }   # {       b: udf, c: udf, d: 5, }, `a` depends on Name Clash Resolution Strategy
  * **p3_n1**: f 1, 2, 3, { a: 4, d: 5, }   # {       b: udf, c: udf, d: 5, }, `a` depends on Name Clash Resolution Strategy
  * **p4_n0**: f 1, 2, 3, 4                 # ERROR

###

#===========================================================================================================
demo_generalized_signature = ->
  get_fn_args = ( require 'fn-args' ).default
  # functionArguments
  do =>
    d      = []
    d[ 0 ] = 7
    d.k    = 6
    d[ 1 ] = 5
    urge 'Ω___1', Object.keys d                 # [ '0', '1', 'k' ]
    urge 'Ω___2', [ ( Object.entries d )..., ]  # [ [ '0', 7 ], [ '1', 5 ], [ 'k', 6 ] ]
    return null
  do =>
    #.......................................................................................................
    pod_prototypes  = Object.freeze [ null, ( Object.getPrototypeOf {} ), ]
    gnd =
      pod: isa: ( x ) -> x? and ( Object.getPrototypeOf x ) in pod_prototypes
    #.......................................................................................................
    get_arguments_poscfg = ( names, argvments, fallback = null ) ->
      help()
      # argvments = [ argvments..., ]
      positional_names      = names[      0 .. names.length     - 2 ]
      named_name            =     names.at -1
      info 'Ω___3', { positional_names, named_name, positional_argvments, named_argvment, fallback, }
      R = {}
      #.....................................................................................................
      if gnd.pod.isa argvments.at -1
        positional_argvments  = argvments[  0 .. argvments.length - 2 ]
        named_argvment        = argvments.at -1
      else
        positional_argvments  = argvments[  ..                        ]
        named_argvment        = null
      #.....................................................................................................
      last_arg_idx = positional_argvments.length - 1
      for name, idx in names
        if idx <= last_arg_idx
          help 'Ω___4', name, rpr positional_argvments[ idx ]
          R[ name ] = positional_argvments[ idx ]
        else
          urge 'Ω___5', "fallback for positional argument @#{idx} = #{rpr argvments[ idx ]}"
          R[ name ] = fallback
      #.....................................................................................................
      if named_argvment?
        help 'Ω___6', "named_argvment #{rpr named_argvment}"
        for name, value of named_argvment
          if Reflect.has R, name
            warn 'Ω___7', "repeated named argument { #{name}: #{rpr value}, }"
            # apply one of strategy = [ 'error', 'named_wins', 'positional_wins', ]
            R[ name ] = value
          else
            R[ name ] = value
      else
        urge 'Ω___8', "no named argvments"
      #.....................................................................................................
      return R
    #.......................................................................................................
    f = ( a, b, Q ) ->
      # cfg = Object.assign ( Object.create null ), { a, b, }, Q...
      cfg = Object.assign {}, { a, b, }, Q...
      # info 'Ω___9', f"#{GUY.trm.gold [ arguments..., ]}:>30c;", GUY.trm.blue { a, b, cfg, }
      info 'Ω__10', ( GUY.trm.gold [ arguments..., ] ), GUY.trm.blue { a, b, cfg, }
    #.......................................................................................................
    debug 'Ω__11', ( f.toString().split '\n' )[ 0 ].replace /^.*function\(\s*/, ''
    # debug 'Ω__12', ( ( ( a, b = ')', c ) -> ).toString().split '\n' )[ 0 ].replace /^.*function\(\s*/, ''
    # debug 'Ω__13', ( ( ( a, b ### = ) ###, c, Q... ) => ).toString().split '\n' )[ 0 ].replace /^.*function\(\s*/, ''
    unset = Symbol 'unset'
    info 'Ω__14', get_arguments_poscfg [ 'a', 'b', 'cfg', ], [ 1,                    ], unset
    info 'Ω__15', get_arguments_poscfg [ 'a', 'b', 'cfg', ], [ 1, k: 'K',            ], unset
    info 'Ω__16', get_arguments_poscfg [ 'a', 'b', 'cfg', ], [ 1, 2, k: 'K',         ], unset
    info 'Ω__17', get_arguments_poscfg [ 'a', 'b', 'cfg', ], [ 1, 2, 3, k: 'K',      ], unset
    info 'Ω__18', get_arguments_poscfg [ 'a', 'b', 'cfg', ], [ 1, 2, k: 'K', a: 'A', ], unset
    # f 1
    # f 1, 2, 3
    # f 1, 2, k: 'K'
    # f 1, 2, k: 'K', 9, m: 'M'
    return null
  return null

#-----------------------------------------------------------------------------------------------------------
demo_call_styles = ->
  f = ( first, second, also ) ->
    # info()
    info 'Ω__19', arguments.length, ( gold [ arguments..., ] ), ( blue { first, second, also, } )
  f 'one'
  f 'one', { second: 'two', also: 'three', }
  f 'one', 'two'
  f 'one', 'two', { also: 'three', }
  return null

#-----------------------------------------------------------------------------------------------------------
demo_get_parameter_names = ->
  get_fn_args = ( require 'fn-args' ).default
  get_signature = ( f ) ->
    ### thx to https://github.com/sindresorhus/identifier-regex ###
    jsid_re              = /// ^ [ $ _ \p{ID_Start} ] [ $ _ \u200C \u200D \p{ID_Continue} ]* $ ///sv
    debug()
    body    = f.toString()
    kernel  = body.replace /// ^ [^ \( ]* \( \s* ( [^ \) ]* ) \s* \) .* $ ///sv, '$1'
    parts   = kernel.split /// , \s* ///sv
    # urge 'Ω__20', rpr body
    # urge 'Ω__21', rpr kernel
    # urge 'Ω__22', rpr parts
    $names  = []
    # R       = { $names, }
    R       = {}
    for part in parts
      switch true
        when ( match = part.match /// ^ [.]{3} \s* (?<name> \S+ ) \s* $ ///sv )?
          name          = match.groups.name
          disposition   = 'soak'
        when ( match = part.match /// ^ (?<name> \S+ ) \s* = \s* optional $///sv )?
          name          = match.groups.name
          disposition   = 'optional'
        else
          unless ( part.match jsid_re )?
            throw new Error "Ω__23 not compliant: #{rpr part} in #{rpr kernel}"
          name          = part
          disposition   = 'bare'
      # info 'Ω__24', ( rpr part ), { name, disposition, }
      R[ name ] = disposition
      # R[ name ] = { name, disposition, }
      $names.push name
    return R
  optional = Symbol 'optional'
  #.........................................................................................................
  do =>
    ```
    const f = function (
      a,
      b = ', e = 7,',
      /* d = 9, */
      c = 8,
      ...P
      ) {}
    ```
    debug 'Ω__25', try get_signature f catch e then (red reverse e.message )
    # debug 'Ω__26', get_fn_args f
    return null
  #.........................................................................................................
  do =>
    f = ( a, b = 4 * ( sqrt 8 ), c = ( foo bar ) ) ->
    debug 'Ω__27', try get_signature f catch e then (red reverse e.message )
    # debug 'Ω__28', get_fn_args f
    return null
  #.........................................................................................................
  do =>
    f = ( a, b, c ) -> { $A: [ arguments..., ], a, b, c, }
    help 'Ω__29', try signature = get_signature f catch e then (red reverse e.message )
    # help 'Ω__30', get_fn_args f
    if signature?
      info 'Ω__31', f 1
      info 'Ω__32', f 1, 2
      info 'Ω__33', f 1, 2, 3
    return null
  #.........................................................................................................
  do =>
    f = ( a, b, c = optional ) -> { $A: [ arguments..., ], a, b, c, }
    help 'Ω__34', try signature = get_signature f catch e then (red reverse e.message )
    # help 'Ω__35', get_fn_args f
    if signature?
      info 'Ω__36', f 1
      info 'Ω__37', f 1, 2
      info 'Ω__38', f 1, 2, 3
    return null
  #.........................................................................................................
  do =>
    f = ( a, b = optional, c ) -> { $A: [ arguments..., ], a, b, c, }
    help 'Ω__39', try signature = get_signature f catch e then (red reverse e.message )
    # help 'Ω__40', get_fn_args f
    if signature?
      info 'Ω__41', f 1
      info 'Ω__42', f 1, 2
      info 'Ω__43', f 1, 2, 3
    return null
  #.........................................................................................................
  do =>
    f = ( a, b = optional, c = optional ) -> { $A: [ arguments..., ], a, b, c, }
    help 'Ω__44', try signature = get_signature f catch e then (red reverse e.message )
    # help 'Ω__45', get_fn_args f
    if signature?
      info 'Ω__46', f 1
      info 'Ω__47', f 1, 2
      info 'Ω__48', f 1, 2, 3
    return null
  #.........................................................................................................
  do =>
    f = ( a, b=optional, c... ) -> { $A: [ arguments..., ], a, b, c, }
    help 'Ω__49', try signature = get_signature f catch e then (red reverse e.message )
    # help 'Ω__50', get_fn_args f
    if signature?
      info 'Ω__51', f 1
      info 'Ω__52', f 1, 2
      info 'Ω__53', f 1, 2, 3
    return null
  #.........................................................................................................
  do =>
    optionall = 0
    f = ( a, b = optionall, c... ) -> { $A: [ arguments..., ], a, b, c, }
    help 'Ω__54', try signature = get_signature f catch e then (red reverse e.message )
    # help 'Ω__55', get_fn_args f
    if signature?
      info 'Ω__56', f 1
      info 'Ω__57', f 1, 2
      info 'Ω__58', f 1, 2, 3
    return null
  #.........................................................................................................
  return null

#-----------------------------------------------------------------------------------------------------------
demo_nfa = ->
  optional        = Symbol 'optional'
  pod_prototypes  = Object.freeze [ null, ( Object.getPrototypeOf {} ), ]
  gnd             =
    pod: isa: ( x ) -> x? and ( Object.getPrototypeOf x ) in pod_prototypes
  #=========================================================================================================
  class Arity_error extends Error
  class Not_implemented_error extends Error
  #=========================================================================================================
  get_signature = ( f ) ->
    ### thx to https://github.com/sindresorhus/identifier-regex ###
    jsid_re              = /// ^ [ $ _ \p{ID_Start} ] [ $ _ \u200C \u200D \p{ID_Continue} ]* $ ///sv
    debug()
    body    = f.toString()
    kernel  = body.replace /// ^ [^ \( ]* \( \s* ( [^ \) ]* ) \s* \) .* $ ///sv, '$1'
    parts   = kernel.split /// , \s* ///sv
    # urge 'Ω__59', rpr body
    # urge 'Ω__60', rpr kernel
    # urge 'Ω__61', rpr parts
    $names  = []
    # R       = { $names, }
    R       = {}
    for part in parts
      switch true
        when ( match = part.match /// ^ [.]{3} \s* (?<name> \S+ ) \s* $ ///sv )?
          name          = match.groups.name
          disposition   = 'soak'
        when ( match = part.match /// ^ (?<name> \S+ ) \s* = \s* optional $///sv )?
          name          = match.groups.name
          disposition   = 'optional'
        else
          unless ( part.match jsid_re )?
            throw new Error "Ω__62 not compliant: #{rpr part} in #{rpr kernel}"
          name          = part
          disposition   = 'bare'
      # info 'Ω__63', ( rpr part ), { name, disposition, }
      R[ name ] = disposition
      # R[ name ] = { name, disposition, }
      $names.push name
    return R
  #=========================================================================================================
  ### Normalize Function Arguments

  ## To Do

  * **`[—]`** implement class `Template`, argument `template`
  * **`[—]`** implement validation

  ###
  nfa = ( f ) ->
    signature         = get_signature f
    names             = Object.keys signature
    positional_names  = names[ .. names.length - 2 ]
    arity             = names.length
    dispositions      = ( signature[ name ] for name in names )
    debug 'Ω__64', signature
    #.......................................................................................................
    for disposition, idx in dispositions
      continue if disposition is 'bare'
      throw new Not_implemented_error "Ω__65 encountered unimplemented disposition #{rpr disposition} for parameter #names[ idx ]"
    #.......................................................................................................
    return ( P... ) ->
      #.....................................................................................................
      if P.length > arity
        throw new Arity_error "Ω__67 expected up to #{arity} arguments, got #{P.length}"
      #.....................................................................................................
      unless gnd.pod.isa P.at -1
        if P.length > arity - 1
          throw new Arity_error "Ω__68 expected up to #{arity - 1} positional arguments plus one POD"
        P.push {} # Object.create null
      #.....................................................................................................
      while P.length < arity
        P.splice P.length - 1, 0, undefined
      #.....................................................................................................
      cfg = P.at -1
      for name, idx in positional_names
        if      ( P[ idx ]    is undefined ) and ( ( value = cfg[ name ] ) isnt undefined )
          P[ idx ] = value
        else if ( cfg[ name ] is undefined ) and ( ( value =   P[ idx ]  ) isnt undefined )
          cfg[ name ] = value
      #.....................................................................................................
      return f.call @, P...
  #=========================================================================================================
  f = nfa ( a, b, c, cfg ) -> { a, b, c, cfg, }
  # f = ( a, b, c, cfg ) -> { $A: [ arguments..., ], a, b, c, cfg, }
  # help 'Ω__70', get_fn_args f
  # if signature?
  info 'Ω__71', f 1
  info 'Ω__72', f 1, 2
  info 'Ω__73', f 1, 2, 3
  #.........................................................................................................
  return null


#===========================================================================================================
if module is require.main then await do =>
  # guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  # guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  # ( new Test guytest_cfg ).test @cleartype_tasks
  # # ( new Test guytest_cfg ).test @cleartype_tasks.builtins
  # demo_generalized_signature()
  # demo_get_parameter_names()
  demo_nfa()
  # demo_call_styles()
  # ```f = ( a, b, ...P, cfg ) => {}```



