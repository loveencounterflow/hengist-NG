
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
      [ [ [ 'x'                    ], 'cde' ], { c: [                                            ], d: [ { t: 'bar', v: 'x', x: 0, }                                    ], e: [                     ] } ]
      [ [ [ '{}'                   ], 'cde' ], { c: [                                            ], d: [ { t: 'obj', v: '{}', x: 0, }                                   ], e: [                     ] } ]
      [ [ [ '+name'                ], 'cde' ], { c: [ { t: 'bol', n: 'name', v: true, x: 0, }    ], d: [                                                                ], e: [                     ] } ]
      [ [ [ '-name'                ], 'cde' ], { c: [ { t: 'bol', n: 'name', v: false, x: 0, }   ], d: [                                                                ], e: [                     ] } ]
      [ [ [ '+d.name'              ], 'cde' ], { c: [                                            ], d: [ { t: 'bol', n: 'name', v: true, x: 0, }                        ], e: [                     ] } ]
      [ [ [ '-d.name'              ], 'cde' ], { c: [                                            ], d: [ { t: 'bol', n: 'name', v: false, x: 0, }                       ], e: [                     ] } ]
      [ [ [ '%+name'               ], 'cde' ], { c: [                                            ], d: [ { t: 'esc', v: '+name', x: 0, }                                ], e: [                     ] } ]
      [ [ [ '%-name'               ], 'cde' ], { c: [                                            ], d: [ { t: 'esc', v: '-name', x: 0, }                                ], e: [                     ] } ]
      [ [ [ ':name'                ], 'cde' ], { c: [                                            ], d: [                                                                ], e: [ { t: 'fac', x: 0, } ] } ]
      [ [ [ '%:name'               ], 'cde' ], { c: [                                            ], d: [ { t: 'esc', v: ':name', x: 0, }                                ], e: [                     ] } ]
      [ [ [ ':name='               ], 'cde' ], { c: [ { t: 'fac', n: 'name', v: '', x: 0, }      ], d: [                                                                ], e: [                     ] } ]
      [ [ [ ':name=wat'            ], 'cde' ], { c: [ { t: 'fac', n: 'name', v: 'wat', x: 0, }   ], d: [                                                                ], e: [                     ] } ]
      [ [ [ ':d.name=wat'          ], 'cde' ], { c: [                                            ], d: [ { t: 'fac', n: 'name', v: 'wat', x: 0, }                       ], e: [                     ] } ]
      [ [ [ '--', ':name=wat'      ], 'cde' ], { c: [                                            ], d: [ { t: 'pfn', v: ':name=wat', x: 1, }                            ], e: [                     ] } ]
      [ [ [ '123', ':name=wat'     ], 'cde' ], { c: [ { t: 'fac', n: 'name', v: 'wat', x: 1, }   ], d: [ { t: 'num', v: '123', x: 0, }                                  ], e: [                     ] } ]
      [ [ [ '{"name":"value"}'     ], 'cde' ], { c: [                                            ], d: [ { t: 'obj', v: '{"name":"value"}', x: 0, }                     ], e: [                     ] } ]
      [ [ [ '{"name":value}'       ], 'cde' ], { c: [                                            ], d: [ { t: 'obj', v: '{"name":value}', x: 0, }                       ], e: [                     ] } ]
      [ [ [ '{"name":"value"'      ], 'cde' ], { c: [                                            ], d: [ { t: 'obj', v: '{"name":"value"', x: 0, }                      ], e: [                     ] } ]
      [ [ [ '%{"name":value}'      ], 'cde' ], { c: [                                            ], d: [ { t: 'esc', v: '{"name":value}', x: 0, }                       ], e: [                     ] } ]
      [ [ [ '%%'                   ], 'cde' ], { c: [                                            ], d: [ { t: 'esc', v: '%', x: 0, }                                    ], e: [                     ] } ]
      [ [ [ '[]'                   ], 'cde' ], { c: [                                            ], d: [ { t: 'lst', v: '[]', x: 0, }                                   ], e: [                     ] } ]
      [ [ [ '%[]'                  ], 'cde' ], { c: [                                            ], d: [ { t: 'esc', v: '[]', x: 0, }                                   ], e: [                     ] } ]
      [ [ [ '[3,"word"]'           ], 'cde' ], { c: [                                            ], d: [ { t: 'lst', v: '[3,"word"]', x: 0, }                           ], e: [                     ] } ]
      [ [ [ '3', '"word"'          ], 'cde' ], { c: [                                            ], d: [ { t: 'num', v: '3', x: 0, }, { t: 'bar', v: '"word"', x: 1, }  ], e: [                     ] } ]
      [ [ [ '+3'                   ], 'cde' ], { c: [                                            ], d: [ { t: 'num', v: '+3', x: 0, }                                   ], e: [                     ] } ]
      [ [ [ '-3'                   ], 'cde' ], { c: [                                            ], d: [ { t: 'num', v: '-3', x: 0, }                                   ], e: [                     ] } ]
      [ [ [ '-0.4'                 ], 'cde' ], { c: [                                            ], d: [ { t: 'num', v: '-0.4', x: 0, }                                 ], e: [                     ] } ]
      [ [ [ '-.4'                  ], 'cde' ], { c: [                                            ], d: [ { t: 'num', v: '-.4', x: 0, }                                  ], e: [                     ] } ]
      [ [ [ '+0.4'                 ], 'cde' ], { c: [                                            ], d: [ { t: 'num', v: '+0.4', x: 0, }                                 ], e: [                     ] } ]
      [ [ [ '+.4'                  ], 'cde' ], { c: [                                            ], d: [ { t: 'num', v: '+.4', x: 0, }                                  ], e: [                     ] } ]
      [ [ [ '.9'                   ], 'cde' ], { c: [                                            ], d: [ { t: 'num', v: '.9', x: 0, }                                   ], e: [                     ] } ]
      [ [ [ '{}', '--', '{}'       ], 'cde' ], { c: [                                            ], d: [ { t: 'obj', v: '{}', x: 0, }, { t: 'pfn', v: '{}', x: 2, }     ], e: [                     ] } ]
      [ [ [ '345', '--', '678'     ], 'cde' ], { c: [                                            ], d: [ { t: 'num', v: '345', x: 0, }, { t: 'pfn', v: '678', x: 2, }   ], e: [                     ] } ]
      [ [ [ '-345', '--', '-678'   ], 'cde' ], { c: [                                            ], d: [ { t: 'num', v: '-345', x: 0, }, { t: 'pfn', v: '-678', x: 2, } ], e: [                     ] } ]
      [ [ [ '+345', '--', '+678'   ], 'cde' ], { c: [                                            ], d: [ { t: 'num', v: '+345', x: 0, }, { t: 'pfn', v: '+678', x: 2, } ], e: [                     ] } ]
      # [ [ [ ':dork', '--', ':dork'   ], 'cde' ], { c: [                                            ], d: [ { t: 'fac', v: '+678', x: 2, } ], e: [ { t: 'fac',  x: 0, }                     ] } ]
      #.....................................................................................................
      [[]]
      [ [ [ 'x'                ], 'a' ], { a: [ 'x'                ], }, ]
      [ [ [ '{}'               ], 'a' ], { a: [ '{}'               ], }, ]
      [ [ [ '+name'            ], 'a' ], { a: [ '+name'            ], }, ]
      [ [ [ '-name'            ], 'a' ], { a: [ '-name'            ], }, ]
      [ [ [ '+d.name'          ], 'a' ], { a: [ '+d.name'          ], }, ]
      [ [ [ '-d.name'          ], 'a' ], { a: [ '-d.name'          ], }, ]
      [ [ [ '%+name'           ], 'a' ], { a: [ '%+name'           ], }, ]
      [ [ [ '%-name'           ], 'a' ], { a: [ '%-name'           ], }, ]
      [ [ [ ':name'            ], 'a' ], { a: [ ':name'            ], }, ]
      [ [ [ '%:name'           ], 'a' ], { a: [ '%:name'           ], }, ]
      [ [ [ ':name='           ], 'a' ], { a: [ ':name='           ], }, ]
      [ [ [ ':name=wat'        ], 'a' ], { a: [ ':name=wat'        ], }, ]
      [ [ [ ':d.name=wat'      ], 'a' ], { a: [ ':d.name=wat'      ], }, ]
      [ [ [ '--', ':name=wat'  ], 'a' ], { a: [ '--', ':name=wat'  ], }, ]
      [ [ [ '123', ':name=wat' ], 'a' ], { a: [ '123', ':name=wat' ], }, ]
      [ [ [ '{"name":"value"}' ], 'a' ], { a: [ '{"name":"value"}' ], }, ]
      [ [ [ '{"name":value}'   ], 'a' ], { a: [ '{"name":value}'   ], }, ]
      [ [ [ '{"name":"value"'  ], 'a' ], { a: [ '{"name":"value"'  ], }, ]
      [ [ [ '%{"name":value}'  ], 'a' ], { a: [ '%{"name":value}'  ], }, ]
      [ [ [ '%%'               ], 'a' ], { a: [ '%%'               ], }, ]
      [ [ [ '[ ]'              ], 'a' ], { a: [ '[ ]'              ], }, ]
      [ [ [ '%[ ]'             ], 'a' ], { a: [ '%[ ]'             ], }, ]
      [ [ [ '[3,"word"]'       ], 'a' ], { a: [ '[3,"word"]'       ], }, ]
      [ [ [ '3', '"word"'      ], 'a' ], { a: [ '3', '"word"'      ], }, ]
      [ [ [ '+3'               ], 'a' ], { a: [ '+3'               ], }, ]
      [ [ [ '-3'               ], 'a' ], { a: [ '-3'               ], }, ]
      [ [ [ '-0.4'             ], 'a' ], { a: [ '-0.4'             ], }, ]
      [ [ [ '-.4'              ], 'a' ], { a: [ '-.4'              ], }, ]
      [ [ [ '+0.4'             ], 'a' ], { a: [ '+0.4'             ], }, ]
      [ [ [ '+.4'              ], 'a' ], { a: [ '+.4'              ], }, ]
      [ [ [ '.9'               ], 'a' ], { a: [ '.9'               ], }, ]
      [ [ [ '{}', '--', '{}'   ], 'a' ], { a: [ '{}', '--', '{}',  ], }, ]
      [ [ [ ':dork', '--', ':dork'   ], 'a' ], { a: [ ':dork', '--', ':dork',  ], }, ]
      ]
    #.......................................................................................................
    for [ [ argv, includes, ], matcher, ] in probes_and_matchers
      unless matcher?
        echo()
        continue
      # debug 'Ωjsonick___1', parse_argv argv
      echo [ [ argv, includes, ], ( abbreviate_argvnfo ( parse_argv argv ), includes ), ]
      @eq ( Ωjst___2 = -> abbreviate_argvnfo ( parse_argv argv ), includes ), matcher
    #.......................................................................................................
    ;null


  #---------------------------------------------------------------------------------------------------------
  command_lines:

    #-------------------------------------------------------------------------------------------------------
    beautify: ->
      @eq ( Ωjst___3 = -> sh """echo '{}' | ./beautify"""                                                   ), '{}'
      @eq ( Ωjst___4 = -> sh """echo '[]' | ./beautify"""                                                   ), '[]'
      @eq ( Ωjst___5 = -> sh """echo 'abc' | ./beautify"""                                                  ), 'abc'
      @eq ( Ωjst___6 = -> sh """echo '{"attr1":"value1"}' | ./beautify"""                                   ), "{ attr1: 'value1' }"
      @eq ( Ωjst___7 = -> sh """echo '{"attr1":"value1","attr2":"value2","attr3":"value3"}' | ./beautify""" ), "{ attr1: 'value1', attr2: 'value2', attr3: 'value3' }"
      @eq ( Ωjst___8 = -> sh """echo '["quite","a","few","words","in","this"]' | ./beautify"""              ), "[ 'quite', 'a', 'few', 'words', 'in', 'this' ]"
      @eq ( Ωjst___9 = -> sh """./beautify '{}'"""                                                          ), '{}'
      @eq ( Ωjst__10 = -> sh """./beautify '[]'"""                                                          ), '[]'
      @eq ( Ωjst__11 = -> sh """echo 'abc' | ./beautify '{}'"""                                             ), '{}'
      @eq ( Ωjst__12 = -> sh """echo 'abc' | ./beautify '[]'"""                                             ), '[]'
      #.....................................................................................................
      ;null

    #-------------------------------------------------------------------------------------------------------
    cli_arguments_as_list: ->
      @eq ( Ωjst__13 = -> sh """./cli-arguments-as-list"""                          ), '[]'
      @eq ( Ωjst__14 = -> sh """./cli-arguments-as-list a b c"""                    ), '["a","b","c"]'
      @eq ( Ωjst__15 = -> sh """./cli-arguments-as-list a b c | ./beautify"""       ), "[ 'a', 'b', 'c' ]"
      @eq ( Ωjst__16 = -> sh """./cli-arguments-as-list a b 'c'"""                  ), '["a","b","c"]'
      #.....................................................................................................
      ;null

    #-------------------------------------------------------------------------------------------------------
    analyze_cli_arguments_phase_1: ->
      @eq ( Ωjst__17 = -> sh """./analyze-cli-arguments-phase-1 first try!"""                             ), '{"a":["first","try!"],"c":[],"d":[{"t":"bar","v":"first","x":0},{"t":"bar","v":"try!","x":1}],"e":[],"i":"socket","o":"socket"}'
      @eq ( Ωjst__18 = -> sh """./analyze-cli-arguments-phase-1 +blah -blub +d.wat"""                     ), '{"a":["+blah","-blub","+d.wat"],"c":[{"t":"bol","n":"blah","v":true,"x":0},{"t":"bol","n":"blub","v":false,"x":1}],"d":[{"t":"bol","n":"wat","v":true,"x":2}],"e":[],"i":"socket","o":"socket"}'
      @eq ( Ωjst__18 = -> sh """./analyze-cli-arguments-phase-1 +verbose -verbose -- wat | ./beautify"""  ), "{\n  a: [ '+verbose', '-verbose', '--', 'wat' ],\n  c: [\n    { t: 'bol', n: 'verbose', v: true, x: 0 },\n    { t: 'bol', n: 'verbose', v: false, x: 1 }\n  ],\n  d: [ { t: 'pfn', v: 'wat', x: 3 } ],\n  e: [],\n  i: 'socket',\n  o: 'pipe'\n}"
      echo sh """./analyze-cli-arguments-phase-1 +verbose -verbose -- wat | ./beautify"""
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
  # { parse_argv,  } = require '../../../apps/jsonick/lib/analyze-cli-arguments-phase-1'
  # debug 'Ωjsonick___2', parse_argv [ 'def', ]
  ;null

