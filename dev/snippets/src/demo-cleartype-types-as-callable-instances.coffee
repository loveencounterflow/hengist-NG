
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
  reverse               } = GUY.trm
#...........................................................................................................
pod_prototypes = [ undefined, ( Object.getPrototypeOf {} ), ]
gnd =
  text:       isa: ( x ) -> ( typeof x ) is 'string'
  function:   isa: ( x ) -> ( typeof x ) is 'function'
  pod:        isa: ( x ) -> x? and x.constructor in pod_prototypes


#===========================================================================================================
class Unparsable_function_body extends Error


#===========================================================================================================
class Revalex

  #---------------------------------------------------------------------------------------------------------
  get_return_value_source: ( fn ) ->
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
    R = @get_return_value_source fn
    R = R.replace ///  !==     ///gsv, 'isnt'
    R = R.replace ///  &&      ///gsv, 'and'
    R = R.replace ///  \|\|    ///gsv, 'or'
    R = R.replace ///  !       ///gsv, 'not'
    return R

  #---------------------------------------------------------------------------------------------------------
  name_from_fn_revalex: ( fn ) -> @name_from_revalex normalize_revalex fn

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
  constructor: ( cfg = null ) ->
    return undefined

# do =>
#     rvx = ( fn ) -> normalize_revalex fn
#     ts =
#       id:
#         isa: [
#           ( x ) -> ( typeof x ) is 'string'
#           ( x ) -> ( /^[a-z][a-z0-9]*$/.test x )
#           ]
#     for typename, dcl of ts
#       unless Array.isArray dcl.isa
#         throw new Error "Ωtt___2 expected a list"
#       isa_parts = {}
#       for fn in dcl.isa
#         unless gnd.function.isa fn
#           throw new Error "Ωtt___3 expected a function, got #{rpr fn}"
#         revalex               = normalize_revalex fn
#         fn[RVX]               = revalex
#         test_name             = "#{typename}[#{rpr revalex}]"
#         # debug 'Ωtt___4', ( rpr ( -> ).name ), fn
#         # debug 'Ωtt___5', ( rpr ( => ).name ), fn
#         # debug 'Ωtt___6', ( rpr fn.name ), fn
#         nameit test_name, fn if fn.name is ''
#         isa_parts[ test_name ] = fn
#       for name, fn of isa_parts
#         help 'Ωtt___7', f"#{rpr name}:<30c; | #{fn}"
#       isa = do ( typename, isa_parts ) -> ( x, record = null ) ->
#         for name, partial of isa_parts
#           unless partial.call null, x
#             if record?
#               # record typename
#               record name
#             return false
#         return true


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
        ( x ) -> ( /^[a-z][a-z0-9]*$/.test x )
        ]
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
  normalize_declaration = ( ts, typename, dcl ) ->
    return null
  #.......................................................................................................
  for typename, dcl of ts
    ndcl = normalize_declaration ts, typename, dcl
    echo f"#{gold typename}:<30c; | #{white rpr dcl}:<70c; | #{rpr ndcl}:<20c;"
  return null
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
      debug 'Ωtt___8', 'dcl_isa', rpr dcl_isa
      for dcl_isa_clause in dcl_isa
        debug 'Ωtt___9', 'dcl_isa_clause', rpr dcl_isa_clause
        #.................................................................................................
        ### De-reference referenced type: ###
        if ( gnd.text.isa dcl_isa_clause )
          dcl_isa_clause = do ( ref_typename = dcl_isa_clause ) ->
            unless Reflect.has ts, ref_typename
              throw new Error "Ωtt__10 unable to resolve #{rpr ref_typename} referenced by #{rpr typename}"
            return ts[ ref_typename ].isa
        #.................................................................................................
        unless gnd.function.isa dcl_isa_clause
          throw new Error "Ωtt__11 expected a function, got #{rpr dcl_isa_clause}"
        #.................................................................................................
        revalex             = RVX.normalize_revalex dcl_isa_clause
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
    info 'Ωtt__12', typename, dcl.isa
    # for name, dcl_isa_clause of isa_clauses
    #   help 'Ωtt__13', f"#{rpr name}:<30c; | #{dcl_isa_clause}"
  #.......................................................................................................
  info 'Ωtt__14', ts.id.isa 'abc'
  info 'Ωtt__15', ts.id.isa '123'
  info 'Ωtt__16', ts.id.isa 'abc123'
  failed_tests = []
  record = ( name ) -> failed_tests.push name
  info 'Ωtt__17', ts.id.isa 'abc',    record; urge 'Ωtt__18', failed_tests; failed_tests.length = 0
  info 'Ωtt__19', ts.id.isa '123',    record; urge 'Ωtt__20', failed_tests; failed_tests.length = 0
  info 'Ωtt__21', ts.id.isa 123,      record; urge 'Ωtt__22', failed_tests; failed_tests.length = 0
  info 'Ωtt__23', ts.id.isa 'abc123', record; urge 'Ωtt__24', failed_tests; failed_tests.length = 0
  return null


#===========================================================================================================
if module is require.main then await do =>
  # guytest_cfg = { throw_on_error: true,   show_passes: true,  report_checks: false, }
  # # guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  # ( new Test guytest_cfg ).test @nfa_tasks
  demo_turning_lists_of_functions_into_objects_with_sensible_names()
