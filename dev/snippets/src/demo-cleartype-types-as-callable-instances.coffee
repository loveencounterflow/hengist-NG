
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
#...........................................................................................................
{ hide }  = GUY.props
nameit    = ( name, f ) -> Object.defineProperty f, 'name', { value: name, }


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

RVX = new Revalex()


#===========================================================================================================
class Typespace

#===========================================================================================================
class Type

  #---------------------------------------------------------------------------------------------------------
  constructor: ( typespace, typename, dcl ) ->
    hide @, 'typespace',  typespace
    hide @, 'dcl',        dcl
    @name       = typename
    @_normalize_dcl()
    nameit "isa_#{typename}", @isa
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
      # debug 'Ωtt___2', @name, idx, ( rpr isa_clause )
      #.................................................................................................
      ### De-reference referenced type: ###
      if ( gnd.text.isa isa_clause )
        @isa_clauses[ idx ] = do ( ref_typename = isa_clause ) =>
          unless Reflect.has @typespace, ref_typename
            throw new Error "Ωtt___3 unable to resolve #{rpr ref_typename} referenced by #{rpr @name}"
          ref_type = @typespace[ ref_typename ]
          # debug 'Ωtt___4', @name, '->', ref_typename, rpr ref_type
          # return nameit "ref_#{ref_type.isa.name}", ( x ) -> ref_type.isa x
          return nameit "ref_isa_#{ref_typename}", ( x ) -> ref_type.isa x
      #.................................................................................................
      else if ( gnd.function.isa isa_clause )
        if isa_clause.name is ''
          nameit ( RVX.revalex_from_function isa_clause ), isa_clause
          # nameit ( RVX.name_from_function isa_clause ), isa_clause
      else
        throw new Error "Ωtt___6 unexpected type in ISA clause"
    return null



#===========================================================================================================
demo_turning_lists_of_functions_into_objects_with_sensible_names = ->
  #.........................................................................................................
  ts =
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
      isa: [
        'text'
        ( x ) -> ( /^[a-z][a-z0-9]*$/.test x )
        ]
      }
    #.......................................................................................................
    foo: 'spork'
    bar: 'foo'
    baz: 'bar'
  #.......................................................................................................
  do =>
    for typename, dcl of ts
      ts[ typename ] = type = new Type ts, typename, dcl
      echo f"#{gold typename}:<15c; | #{white rpr dcl}:<60c; | #{lime rpr type.isa_clauses}:<60c;"
      # echo f"#{gold typename}:<15c; | #{white rpr dcl}:<60c; | #{lime rpr type}:<60c; | #{gold rpr type.isa}:<60c;"
    return null
  info 'Ωtt___7', "ts.text                  ", ts.text
  info 'Ωtt___8', "ts.spork                 ", ts.spork
  info()
  info 'Ωtt___9', "ts.text.isa 'pop'        ", truth ts.text.isa 'pop'
  info 'Ωtt__10', "ts.text.isa 87           ", truth ts.text.isa 87
  info()
  info 'Ωtt__11', "ts.spork.isa 'pop'       ", truth ts.spork.isa 'pop'
  info 'Ωtt__12', "ts.spork.isa 87          ", truth ts.spork.isa 87
  info()
  info 'Ωtt__13', "ts.id.isa 'pop'          ", truth ts.id.isa 'pop'
  info 'Ωtt__14', "ts.id.isa '3pop'         ", truth ts.id.isa '3pop'
  info 'Ωtt__15', "ts.id.isa 'pop3'         ", truth ts.id.isa 'pop3'
  info()
  info 'Ωtt__16', "ts.spork.isa ''          ", truth ts.spork.isa ''
  info 'Ωtt__17', "ts.spork.isa 'A'         ", truth ts.spork.isa 'A'
  info()
  info 'Ωtt__18', "ts.foo.isa ''            ", truth ts.foo.isa ''
  info 'Ωtt__19', "ts.bar.isa ''            ", truth ts.bar.isa ''
  info 'Ωtt__20', "ts.baz.isa ''            ", truth ts.baz.isa ''
  info 'Ωtt__21', "ts.foo.isa 'A'           ", truth ts.foo.isa 'A'
  info 'Ωtt__22', "ts.bar.isa 'A'           ", truth ts.bar.isa 'A'
  info 'Ωtt__23', "ts.baz.isa 'A'           ", truth ts.baz.isa 'A'
  return null
  # #.......................................................................................................
  # compile_typespace = ( ts ) ->
  #   for typename, dcl of ts
  #     isa_clauses = {}
  #     #...................................................................................................
  #     debug 'Ωtt__24', 'dcl_isa', rpr dcl_isa
  #     for dcl_isa_clause in dcl_isa
  #       debug 'Ωtt__25', 'dcl_isa_clause', rpr dcl_isa_clause
  #       #.................................................................................................
  #       unless gnd.function.isa dcl_isa_clause
  #         throw new Error "Ωtt__26 expected a function, got #{rpr dcl_isa_clause}"
  #       #.................................................................................................
  #       revalex             = RVX.normalize_revalex dcl_isa_clause
  #       # dcl_isa_clause[RVX] = revalex
  #       test_name           = "#{typename}[#{rpr revalex}]"
  #       nameit test_name, dcl_isa_clause if dcl_isa_clause.name is ''
  #       isa_clauses[ test_name ] = dcl_isa_clause
  #     #...................................................................................................
  #     ts[ typename ].isa = do ( typename, isa_clauses ) -> ( x, record = null ) ->
  #       for name, isa_clause of isa_clauses
  #         unless isa_clause.call null, x, record
  #           record name if record?
  #           return false
  #       return true
  # #.......................................................................................................
  # compile_typespace ts
  # for typename, dcl of ts
  #   info 'Ωtt__27', typename, dcl.isa
  #   # for name, dcl_isa_clause of isa_clauses
  #   #   help 'Ωtt__28', f"#{rpr name}:<30c; | #{dcl_isa_clause}"
  # #.......................................................................................................
  # info 'Ωtt__29', ts.id.isa 'abc'
  # info 'Ωtt__30', ts.id.isa '123'
  # info 'Ωtt__31', ts.id.isa 'abc123'
  # failed_tests = []
  # record = ( name ) -> failed_tests.push name
  # info 'Ωtt__32', ts.id.isa 'abc',    record; urge 'Ωtt__33', failed_tests; failed_tests.length = 0
  # info 'Ωtt__34', ts.id.isa '123',    record; urge 'Ωtt__35', failed_tests; failed_tests.length = 0
  # info 'Ωtt__36', ts.id.isa 123,      record; urge 'Ωtt__37', failed_tests; failed_tests.length = 0
  # info 'Ωtt__38', ts.id.isa 'abc123', record; urge 'Ωtt__39', failed_tests; failed_tests.length = 0
  return null


#===========================================================================================================
if module is require.main then await do =>
  # guytest_cfg = { throw_on_error: true,   show_passes: true,  report_checks: false, }
  # # guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  # ( new Test guytest_cfg ).test @nfa_tasks
  demo_turning_lists_of_functions_into_objects_with_sensible_names()
