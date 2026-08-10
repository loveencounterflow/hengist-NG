
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
  whisper }               = GUY.trm.get_loggers 'hollerith'
{ rpr
  inspect
  echo
  lime
  gold
  red
  blue
  reverse
  log     }               = GUY.trm
# WGUY                      = require '../../../apps/webguy'
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG
{ f }                     = require '../../../apps/effstring'
SFMODULES                 = require '../../../apps/bricabrac-sfmodules'
PATH                      = require 'node:path'
{ run_shell_command     } = require '../../../apps/bricabrac-sfmodules/lib/cli-run-shell-command'
path_to_jsonick           = PATH.resolve PATH.join __dirname, '../../../apps/jsonick'
sh                        = ( command_line ) -> ( run_shell_command path_to_jsonick, command_line ).trim()


#===========================================================================================================
isa_npod = ( x ) -> x? and ( ( Object.getPrototypeOf x ) is null )

#===========================================================================================================
abbreviate_argvnfo = ( argvnfo, includes = '' ) ->
  includes = new Set ( if includes.length is 0 then 'acdeiot' else includes )
  R = {}
  R.a = argvnfo.a                                                             if includes.has 'a'
  R.c = ( ( if ( isa_npod e ) then { e..., } else e ) for e in argvnfo.c )    if includes.has 'c'
  R.d = ( ( if ( isa_npod e ) then { e..., } else e ) for e in argvnfo.d )    if includes.has 'd'
  R.e = argvnfo.e                                                             if includes.has 'e'
  R.i = argvnfo.i                                                             if includes.has 'i'
  R.o = argvnfo.o                                                             if includes.has 'o'
  R.t = argvnfo.t                                                             if includes.has 't'
  return R


#===========================================================================================================
@jsonick =


  #---------------------------------------------------------------------------------------------------------
  basics: ->
    { parse_argv,  } = require '../../../apps/jsonick/lib/analyze-cli-arguments-phase-1'
    probes_and_matchers = [
      [ [ [ 'x'                ], 'cde' ], { c: [                 ], d: [ 'x'               ], e: [                  ] } ]
      [ [ [ '{}'               ], 'cde' ], { c: [                 ], d: [ {}                ], e: [                  ] } ]
      [ [ [ '+name'            ], 'cde' ], { c: [ { name: true }  ], d: [                   ], e: [                  ] } ]
      [ [ [ '-name'            ], 'cde' ], { c: [ { name: false } ], d: [                   ], e: [                  ] } ]
      [ [ [ '+d.name'          ], 'cde' ], { c: [                 ], d: [ { name: true }    ], e: [                  ] } ]
      [ [ [ '-d.name'          ], 'cde' ], { c: [                 ], d: [ { name: false }   ], e: [                  ] } ]
      [ [ [ '%+name'           ], 'cde' ], { c: [                 ], d: [ '+name'           ], e: [                  ] } ]
      [ [ [ '%-name'           ], 'cde' ], { c: [                 ], d: [ '-name'           ], e: [                  ] } ]
      [ [ [ ':name'            ], 'cde' ], { c: [                 ], d: [                   ], e: [ ':name'          ] } ]
      [ [ [ '%:name'           ], 'cde' ], { c: [                 ], d: [ ':name'           ], e: [                  ] } ]
      [ [ [ ':name='           ], 'cde' ], { c: [ { name: '' }    ], d: [                   ], e: [                  ] } ]
      [ [ [ ':name=wat'        ], 'cde' ], { c: [ { name: 'wat' } ], d: [                   ], e: [                  ] } ]
      [ [ [ ':d.name=wat'      ], 'cde' ], { c: [                 ], d: [ { name: 'wat' }   ], e: [                  ] } ]
      [ [ [ '--', ':name=wat'  ], 'cde' ], { c: [                 ], d: [ ':name=wat'       ], e: [                  ] } ]
      [ [ [ '123', ':name=wat' ], 'cde' ], { c: [ { name: 'wat' } ], d: [ '123'             ], e: [                  ] } ]
      [ [ [ '{"name":"value"}' ], 'cde' ], { c: [                 ], d: [ { name: 'value' } ], e: [                  ] } ]
      [ [ [ '{"name":value}'   ], 'cde' ], { c: [                 ], d: [                   ], e: [ '{"name":value}' ] } ]
      [ [ [ '{"name":"value"'  ], 'cde' ], { c: [                 ], d: [                   ], e: [ '{"name":"value"' ] } ]
      [ [ [ '%{"name":value}'  ], 'cde' ], { c: [                 ], d: [ '{"name":value}'  ], e: [                  ] } ]
      [ [ [ '%%'               ], 'cde' ], { c: [                 ], d: [ '%'               ], e: [                  ] } ]
      [ [ [ '[]'               ], 'cde' ], { c: [                 ], d: [ []                ], e: [                  ] } ]
      [ [ [ '%[]'              ], 'cde' ], { c: [                 ], d: [ '[]'              ], e: [                  ] } ]
      [ [ [ '[3,"word"]'       ], 'cde' ], { c: [                 ], d: [ [3,'word']        ], e: [                  ] } ]
      #.....................................................................................................
      [[]]
      [ [ [ 'x'                ], 'at' ], { a: [ 'x'                ], t: { c: [           ], d: [ 'word'      ], e: [         ] } } ]
      [ [ [ '{}'               ], 'at' ], { a: [ '{}'               ], t: { c: [           ], d: [ 'objectlit' ], e: [         ] } } ]
      [ [ [ '+name'            ], 'at' ], { a: [ '+name'            ], t: { c: [ 'boolean' ], d: [             ], e: [         ] } } ]
      [ [ [ '-name'            ], 'at' ], { a: [ '-name'            ], t: { c: [ 'boolean' ], d: [             ], e: [         ] } } ]
      [ [ [ '+d.name'          ], 'at' ], { a: [ '+d.name'          ], t: { c: [           ], d: [ 'boolean'   ], e: [         ] } } ]
      [ [ [ '-d.name'          ], 'at' ], { a: [ '-d.name'          ], t: { c: [           ], d: [ 'boolean'   ], e: [         ] } } ]
      [ [ [ '%+name'           ], 'at' ], { a: [ '%+name'           ], t: { c: [           ], d: [ 'escaped'   ], e: [         ] } } ]
      [ [ [ '%-name'           ], 'at' ], { a: [ '%-name'           ], t: { c: [           ], d: [ 'escaped'   ], e: [         ] } } ]
      [ [ [ ':name'            ], 'at' ], { a: [ ':name'            ], t: { c: [           ], d: [             ], e: [ 'other' ] } } ]
      [ [ [ '%:name'           ], 'at' ], { a: [ '%:name'           ], t: { c: [           ], d: [ 'escaped'   ], e: [         ] } } ]
      [ [ [ ':name='           ], 'at' ], { a: [ ':name='           ], t: { c: [ 'facet'   ], d: [             ], e: [         ] } } ]
      [ [ [ ':name=wat'        ], 'at' ], { a: [ ':name=wat'        ], t: { c: [ 'facet'   ], d: [             ], e: [         ] } } ]
      [ [ [ ':d.name=wat'      ], 'at' ], { a: [ ':d.name=wat'      ], t: { c: [           ], d: [ 'facet'     ], e: [         ] } } ]
      [ [ [ '--', ':name=wat'  ], 'at' ], { a: [ '--', ':name=wat'  ], t: { c: [           ], d: [             ], e: [         ] } } ]
      [ [ [ '123', ':name=wat' ], 'at' ], { a: [ '123', ':name=wat' ], t: { c: [ 'facet'   ], d: [ 'word'      ], e: [         ] } } ]
      [ [ [ '{"name":"value"}' ], 'at' ], { a: [ '{"name":"value"}' ], t: { c: [           ], d: [ 'objectlit' ], e: [         ] } } ]
      [ [ [ '{"name":value}'   ], 'at' ], { a: [ '{"name":value}'   ], t: { c: [           ], d: [             ], e: [ 'eobjectlit'        ] } } ]
      [ [ [ '{"name":"value"'  ], 'at' ], { a: [ '{"name":"value"'  ], t: { c: [           ], d: [             ], e: [ 'eobjectlit'        ] } } ]
      [ [ [ '%{"name":value}'  ], 'at' ], { a: [ '%{"name":value}'  ], t: { c: [           ], d: [ 'escaped'   ], e: [         ] } } ]
      [ [ [ '%%'               ], 'at' ], { a: [ '%%'               ], t: { c: [           ], d: [ 'escaped'   ], e: [         ] } } ]
      [ [ [ '[ ]'              ], 'at' ], { a: [ '[ ]'              ], t: { c: [           ], d: [ 'listlit'   ], e: [         ] } } ]
      [ [ [ '%[ ]'             ], 'at' ], { a: [ '%[ ]'             ], t: { c: [           ], d: [ 'escaped'   ], e: [         ] } } ]
      [ [ [ '[3,"word"]'       ], 'at' ], { a: [ '[3,"word"]'       ], t: { c: [           ], d: [ 'listlit'   ], e: [         ] } } ]
      ]
    #.......................................................................................................
    for [ [ argv, includes, ], matcher, ] in probes_and_matchers
      unless matcher?
        echo()
        continue
      # debug 'Ωjsonick___1', parse_argv argv
      # echo [ [ argv, includes, ], ( abbreviate_argvnfo ( parse_argv argv ), includes ), ]
      @eq ( Ωjst___2 = -> abbreviate_argvnfo ( parse_argv argv ), includes ), matcher
    #.......................................................................................................
    ;null


  #---------------------------------------------------------------------------------------------------------
  command_lines:

    #-------------------------------------------------------------------------------------------------------
    other: ->
      debug 'Ωjst___3', rpr path_to_jsonick
      debug 'Ωjst___4', run_shell_command     path_to_jsonick, "ls -AlF"
      # debug 'Ωjst___5', rpr run_shell_command path_to_jsonick, "./cli-arguments-as-list first try!"
      # debug 'Ωjst___6', rpr run_shell_command path_to_jsonick, """echo 'x' | nodexh ~/jzr/jsonick/analyze-cli-arguments-phase-1 %:d.color=yellow :d.color=yellow"""
      # debug 'Ωjst___7', rpr run_shell_command path_to_jsonick, """echo 'x' | nodexh ~/jzr/jsonick/analyze-cli-arguments-phase-1 %:d.color=yellow :d.color=yellow | ./beautify"""
      #.....................................................................................................
      ;null

    #-------------------------------------------------------------------------------------------------------
    beautify: ->
      @eq ( Ωjst___8 = -> sh """echo '{}' | ./beautify"""                                                   ), '{}'
      @eq ( Ωjst___9 = -> sh """echo '[]' | ./beautify"""                                                   ), '[]'
      @eq ( Ωjst__10 = -> sh """echo 'abc' | ./beautify"""                                                  ), 'abc'
      @eq ( Ωjst__11 = -> sh """echo '{"attr1":"value1"}' | ./beautify"""                                   ), "{ attr1: 'value1' }"
      @eq ( Ωjst__12 = -> sh """echo '{"attr1":"value1","attr2":"value2","attr3":"value3"}' | ./beautify""" ), "{ attr1: 'value1', attr2: 'value2', attr3: 'value3' }"
      @eq ( Ωjst__13 = -> sh """echo '["quite","a","few","words","in","this"]' | ./beautify"""              ), "[ 'quite', 'a', 'few', 'words', 'in', 'this' ]"
      @eq ( Ωjst__14 = -> sh """./beautify '{}'"""                                                          ), '{}'
      @eq ( Ωjst__15 = -> sh """./beautify '[]'"""                                                          ), '[]'
      @eq ( Ωjst__16 = -> sh """echo 'abc' | ./beautify '{}'"""                                             ), '{}'
      @eq ( Ωjst__17 = -> sh """echo 'abc' | ./beautify '[]'"""                                             ), '[]'
      #.....................................................................................................
      ;null


#===========================================================================================================
if module is require.main then await do =>
  { show_requires, } = require '../../snippets/lib/demo-show-requires.js'
  show_requires '../../../apps/jsonick'
  #---------------------------------------------------------------------------------------------------------
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test @jsonick


