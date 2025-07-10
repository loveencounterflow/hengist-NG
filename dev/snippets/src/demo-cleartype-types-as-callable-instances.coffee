
'use strict'

#===========================================================================================================
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
#...........................................................................................................
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG
#...........................................................................................................
{ f }                     = require '../../../apps/effstring'
#...........................................................................................................
{ red
  gold
  bold
  white
  lime
  reverse               } = GUY.trm
truth                     = ( x ) -> GUY.trm.truth x

#===========================================================================================================
pod_prototypes = Object.freeze [ null, ( Object.getPrototypeOf {} ), ]
gnd =
  text:       isa: ( x ) -> ( typeof x ) is 'string'
  function:   isa: ( x ) -> ( typeof x ) is 'function'
  pod:        isa: ( x ) -> x? and ( Object.getPrototypeOf x ) in pod_prototypes
  list:       isa: ( x ) -> Array.isArray x
  type:       isa: ( x ) -> x instanceof Type
#...........................................................................................................
# { hide }  = GUY.props
nameit    = ( name, f ) -> Object.defineProperty f, 'name', { value: name, }

#===========================================================================================================
hide = ( object, name, value ) => Object.defineProperty object, name,
    enumerable:   false
    writable:     true
    configurable: true
    value:        value

#===========================================================================================================
hide_getter = ( object, name, getter ) => Object.defineProperty object, name,
    enumerable:   false
    configurable: true
    get:          getter

#===========================================================================================================
set_getter = ( object, name, getter ) => Object.defineProperty object, name,
    enumerable:   true
    configurable: true
    get:          getter


#===========================================================================================================
class Unparsable_function_body extends Error


#===========================================================================================================
class Revalex

  #---------------------------------------------------------------------------------------------------------
  revalex_from_function: ( fn ) ->
    ### TAINT use JS tokenizer ###
    ### NOTE restrictions:
    * catches only last `return` statement, even if unreachable
    * may misinterpret string literals, comments as source code
    ###
    source = fn.toString().replace /// \s+ ///gsv, '\x20'
    unless ( match = source.match ///^ .* \b return \s (?<revalex> [^ ; ]+ ) .* $///sv )?
      throw new Unparsable_function_body "Ωtt___1 unable to parse function #{rpr source}"
    R = match.groups.revalex
    return R

  #---------------------------------------------------------------------------------------------------------
  normalize_revalex: ( fn ) ->
    ### NOTE `revalex` short for '**RE**turn **VA**Lue **EX**pression' ###
    ### TAINT use JS tokenizer ###
    R = @revalex_from_function fn
    R = R.replace ///  <=      ///gsv, 'lteq'
    R = R.replace ///  >=      ///gsv, 'gteq'
    R = R.replace ///  <       ///gsv, 'lt'
    R = R.replace ///  >       ///gsv, 'gt'
    R = R.replace ///  !==     ///gsv, 'isnt'
    R = R.replace ///  &&      ///gsv, 'and'
    R = R.replace ///  \|\|    ///gsv, 'or'
    R = R.replace ///  !       ///gsv, 'not'
    return R

  #---------------------------------------------------------------------------------------------------------
  name_from_function: ( fn ) -> @name_from_revalex @normalize_revalex fn

  #---------------------------------------------------------------------------------------------------------
  name_from_revalex: ( revalex ) ->
    R = revalex.replace /// [^ a-z A-Z 0-9 _ ]+         ///gsv, '_'
    R = R.replace       ///^ _* (?<center> .*? ) _* $   ///gsv, '$<center>'
    return R

RVX       = new Revalex()
rvx_of    = RVX.revalex_from_function.bind RVX
types_sym = Symbol.for 'types'


#===========================================================================================================
class Typespace

  #---------------------------------------------------------------------------------------------------------
  constructor: ( tsname, dcls = null ) ->
    @name = tsname
    hide @, types_sym, []
    if dcls?
      for typename, dcl of dcls
        @add_type typename, dcl
    return undefined

  #---------------------------------------------------------------------------------------------------------
  add_type: ( typename, dcl ) ->
    if Reflect.has @, typename
      throw new Error "Ωtt___2 name clash #{rpr typename}"
    @[ typename ] = R = new Type @, typename, dcl
    @[ types_sym ].push R
    return R

  #---------------------------------------------------------------------------------------------------------
  [Symbol.iterator]: -> yield from @[ types_sym ]


#===========================================================================================================
class Type

  #---------------------------------------------------------------------------------------------------------
  constructor: ( typespace, typename, dcl ) ->
    @name                     = typename
    hide @, 'typespace',        typespace
    hide @, 'dcl',              dcl
    hide_getter @, 'fqname', => "#{@typespace.name}.#{@name}"
    @_normalize_dcl()
    hide @, 'isa_clauses',      @isa_clauses
    # nameit "#{typename}.isa()", @isa
    return undefined

  #---------------------------------------------------------------------------------------------------------
  isa: ( x ) ->
    ### TAINT add reporting ###
    for isa_clause in @isa_clauses
      return false unless isa_clause x
    return true

  #---------------------------------------------------------------------------------------------------------
  _normalize_dcl: ->
    ### Convert 'isa-only' declarations into objects with explicit `isa`: ###
    if gnd.pod.isa @dcl     then  dcl             = {       @dcl...,  }
    else                          dcl             = { isa:  @dcl,     }
    ### Convert singular `isa` declarations into list of clauses: ###
    if gnd.list.isa dcl.isa then  @isa_clauses    = [ dcl.isa..., ]
    else                          @isa_clauses    = [ dcl.isa,    ]
    @_normalize_isa_clauses()
    return dcl

  #---------------------------------------------------------------------------------------------------------
  _normalize_isa_clauses: ->
    for isa_clause, idx in @isa_clauses then do ( isa_clause, idx ) =>
      #.....................................................................................................
      ### De-reference referenced type: ###
      if ( gnd.text.isa isa_clause )
        @isa_clauses[ idx ] = do ( ref_typename = isa_clause ) =>
          unless Reflect.has @typespace, ref_typename
            throw new Error "Ωtt___3 unable to resolve #{rpr ref_typename} referenced by #{rpr @name}"
          ref_type = @typespace[ ref_typename ]
          return nameit "Ωtt___4 #{ref_type.fqname}", ( x ) -> ref_type.isa x
      #.....................................................................................................
      else if ( gnd.function.isa isa_clause )
        null
        # if isa_clause.name is ''
        # nameit ( "#{@fqname}[#{rpr revalex}]" ), isa_clause
        revalex = rpr rvx_of isa_clause
        nameit "Ωtt___5 #{revalex}", isa_clause
      #.....................................................................................................
      else if ( gnd.type.isa isa_clause )
        @isa_clauses[ idx ] = do ( type = isa_clause ) =>
          nameit "Ωtt___6 #{type.fqname}", ( x ) -> type.isa x
      #.....................................................................................................
      else if ( isa_clause? ) and ( Reflect.has isa_clause, 'isa' ) and ( gnd.function.isa isa_clause.isa )
        @isa_clauses[ idx ] = do ( type = isa_clause ) =>
          fqname = type.fqname ? "?.#{type.name ? rpr rvx_of type.isa}"
          nameit "Ωtt___7 #{fqname}", ( x ) -> type.isa x
      #.....................................................................................................
      else
        throw new Error "Ωtt___8 unexpected type in ISA clause: #{rpr isa_clause}"
    return null


#===========================================================================================================
demo_turning_lists_of_functions_into_objects_with_sensible_names = ->
  #.........................................................................................................
  one = new Typespace 'one',
    float: ( x ) -> Number.isFinite x
  #.........................................................................................................
  ts = new Typespace 'ts',
    #.......................................................................................................
    ### Declare by DCL object whose `isa` property is a function: ###
    function: { isa: ( ( x ) -> ( typeof x ) is 'function' ), }
    #.......................................................................................................
    ### Declare by 'immediate' function: ###
    string: ( x ) -> ( typeof x ) is 'string'
    #.......................................................................................................
    ### Declare by 'immediate' reference to name of existing type: ###
    text: 'string'
    #.......................................................................................................
    ### Declare by 'immediate' list of clauses: ###
    nonempty_text: [
        'text'
        ( x ) -> x.length > 0 ]
    #.......................................................................................................
    ### Declare by DCL object whose `isa` property is a reference to name of existing type: ###
    spork: { isa: 'nonempty_text', }
    #.......................................................................................................
    ### Declare by DCL object whose `isa` property is a list of clauses: ###
    id: {
      isa: [ 'text', ( ( x ) -> /^[a-z][a-z0-9]*$/.test x ) ]
      }
    #.......................................................................................................
    ### Declare using an existing type: ###
    length: [ one.float, ( ( x ) -> x >= 0 ), ]
    #.......................................................................................................
    ### Chain of references: ###
    foo: 'spork'
    bar: 'foo'
    baz: 'bar'
    #.......................................................................................................
    pod_1: gnd.pod
    pod_2: ( x ) -> gnd.pod.isa x
    pod_3: [ ( ( x ) -> gnd.pod.isa x ), ]
    pod_4: [ gnd.pod, ]
  #.......................................................................................................
  show_type = ( type ) ->
    # echo f"#{gold type.fqname}:<15c; | #{white rpr type.dcl}:<60c; | #{lime rpr type.isa_clauses}:<60c;"
    echo f"#{gold type.fqname}:<20c; | #{white rpr type}:<25c; | #{lime rpr type.isa_clauses}:<60c;"
    return null
  for typespace in [ one, ts, ]
    for type from typespace
      show_type type
  #.......................................................................................................
  info 'Ωtt___9', "ts.text                  ", ts.text
  info 'Ωtt__10', "ts.spork                 ", ts.spork
  info()
  info 'Ωtt__11', "ts.text.isa 'pop'        ", truth ts.text.isa 'pop'
  info 'Ωtt__12', "ts.text.isa 87           ", truth ts.text.isa 87
  info()
  info 'Ωtt__13', "ts.spork.isa 'pop'       ", truth ts.spork.isa 'pop'
  info 'Ωtt__14', "ts.spork.isa 87          ", truth ts.spork.isa 87
  info()
  info 'Ωtt__15', "ts.id.isa 'pop'          ", truth ts.id.isa 'pop'
  info 'Ωtt__16', "ts.id.isa '3pop'         ", truth ts.id.isa '3pop'
  info 'Ωtt__17', "ts.id.isa 'pop3'         ", truth ts.id.isa 'pop3'
  info()
  info 'Ωtt__18', "ts.spork.isa ''          ", truth ts.spork.isa ''
  info 'Ωtt__19', "ts.spork.isa 'A'         ", truth ts.spork.isa 'A'
  info()
  info 'Ωtt__20', "ts.foo.isa ''            ", truth ts.foo.isa ''
  info 'Ωtt__21', "ts.bar.isa ''            ", truth ts.bar.isa ''
  info 'Ωtt__22', "ts.baz.isa ''            ", truth ts.baz.isa ''
  info 'Ωtt__23', "ts.foo.isa 'A'           ", truth ts.foo.isa 'A'
  info 'Ωtt__24', "ts.bar.isa 'A'           ", truth ts.bar.isa 'A'
  info 'Ωtt__25', "ts.baz.isa 'A'           ", truth ts.baz.isa 'A'
  info()
  info 'Ωtt__26', "ts.pod_1.isa {}          ", truth ts.pod_1.isa {}
  info 'Ωtt__27', "ts.pod_2.isa {}          ", truth ts.pod_2.isa {}
  info()
  info 'Ωtt__28', "ts.length.isa {}         ", truth ts.length.isa {}
  info 'Ωtt__29', "ts.length.isa -3.5       ", truth ts.length.isa -3.5
  info 'Ωtt__30', "ts.length.isa +3.5       ", truth ts.length.isa +3.5
  #.........................................................................................................
  return null


#===========================================================================================================
if module is require.main then await do =>
  # guytest_cfg = { throw_on_error: true,   show_passes: true,  report_checks: false, }
  # # guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  # ( new Test guytest_cfg ).test @nfa_tasks
  demo_turning_lists_of_functions_into_objects_with_sensible_names()

###

## To Do

* **`[—]`** create `Type_base` class that types are really derived from so they don't inherit methods like
  `_isaname_from_typename()` and so on
* **`[—]`** implement `dcl.base`


###