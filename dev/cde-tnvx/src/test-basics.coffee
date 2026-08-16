
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
{ type_of,              } = ( require '../../../apps/bricabrac-sfmodules/lib/unstable-rpr-type_of-brics' ).require_type_of()
PATH                      = require 'node:path'
{ run_shell_command     } = require '../../../apps/bricabrac-sfmodules/lib/cli-run-shell-command'
path_to_cdetnvx           = PATH.resolve PATH.join __dirname, '../../../apps/cde-tnvx'
sh                        = ( command_line ) -> ( run_shell_command path_to_cdetnvx, command_line ).trim()


#===========================================================================================================
isa_npod = ( x ) -> x? and ( ( Object.getPrototypeOf x ) is null )

#===========================================================================================================
abbreviate_cde = ( cde, includes = '' ) ->
  includes = new Set ( if includes.length is 0 then 'acdeiot' else includes )
  R = {}
  R.a = cde.a                                                             if includes.has 'a'
  R.c = ( ( if ( isa_npod e ) then { e..., } else e ) for e in cde.c )    if includes.has 'c'
  R.d = ( ( if ( isa_npod e ) then { e..., } else e ) for e in cde.d )    if includes.has 'd'
  R.e = cde.e                                                             if includes.has 'e'
  R.i = cde.i                                                             if includes.has 'i'
  R.o = cde.o                                                             if includes.has 'o'
  R.t = cde.t                                                             if includes.has 't'
  R.s = cde.s                                                             if includes.has 's'
  return JSON.parse JSON.stringify R


#===========================================================================================================
@cdetnvx =


  #---------------------------------------------------------------------------------------------------------
  phase_1:

    cde_tnvx: ->
      { parse_argv,  } = require '../../../apps/cde-tnvx/lib/parse-argv-1'
      probes_and_matchers = [
        [ [ [ 'x'                     ], 'cde'  ], { c: [                                            ], d: [ { t: 'bar', v: 'x', x: 0, }                                    ], e: [                                 ] } ]
        [ [ [ '{}'                    ], 'cde'  ], { c: [                                            ], d: [ { t: 'obj', v: '{}', x: 0, }                                   ], e: [                                 ] } ]
        [ [ [ '+name'                 ], 'cde'  ], { c: [ { t: 'bol', n: 'name', v: true, x: 0, }    ], d: [                                                                ], e: [                                 ] } ]
        [ [ [ '-name'                 ], 'cde'  ], { c: [ { t: 'bol', n: 'name', v: false, x: 0, }   ], d: [                                                                ], e: [                                 ] } ]
        [ [ [ '+d.name'               ], 'cde'  ], { c: [                                            ], d: [ { t: 'bol', n: 'name', v: true, x: 0, }                        ], e: [                                 ] } ]
        [ [ [ '-d.name'               ], 'cde'  ], { c: [                                            ], d: [ { t: 'bol', n: 'name', v: false, x: 0, }                       ], e: [                                 ] } ]
        [ [ [ '%+name'                ], 'cde'  ], { c: [                                            ], d: [ { t: 'esc', v: '+name', x: 0, }                                ], e: [                                 ] } ]
        [ [ [ '%-name'                ], 'cde'  ], { c: [                                            ], d: [ { t: 'esc', v: '-name', x: 0, }                                ], e: [                                 ] } ]
        [ [ [ ':name'                 ], 'cde'  ], { c: [                                            ], d: [                                                                ], e: [ { t: 'fac', v: ':name', x: 0, } ] } ]
        [ [ [ '%:name'                ], 'cde'  ], { c: [                                            ], d: [ { t: 'esc', v: ':name', x: 0, }                                ], e: [                                 ] } ]
        [ [ [ ':name='                ], 'cde'  ], { c: [ { t: 'fac', n: 'name', v: '', x: 0, }      ], d: [                                                                ], e: [                                 ] } ]
        [ [ [ ':name=wat'             ], 'cde'  ], { c: [ { t: 'fac', n: 'name', v: 'wat', x: 0, }   ], d: [                                                                ], e: [                                 ] } ]
        [ [ [ ':d.name=wat'           ], 'cde'  ], { c: [                                            ], d: [ { t: 'fac', n: 'name', v: 'wat', x: 0, }                       ], e: [                                 ] } ]
        [ [ [ '--', ':name=wat'       ], 'cde'  ], { c: [                                            ], d: [ { t: 'pfn', v: ':name=wat', x: 1, }                            ], e: [                                 ] } ]
        [ [ [ '123', ':name=wat'      ], 'cde'  ], { c: [ { t: 'fac', n: 'name', v: 'wat', x: 1, }   ], d: [ { t: 'num', v: '123', x: 0, }                                  ], e: [                                 ] } ]
        [ [ [ '{"name":"value"}'      ], 'cde'  ], { c: [                                            ], d: [ { t: 'obj', v: '{"name":"value"}', x: 0, }                     ], e: [                                 ] } ]
        [ [ [ '{"name":value}'        ], 'cde'  ], { c: [                                            ], d: [ { t: 'obj', v: '{"name":value}', x: 0, }                       ], e: [                                 ] } ]
        [ [ [ '{"name":"value"'       ], 'cde'  ], { c: [                                            ], d: [ { t: 'obj', v: '{"name":"value"', x: 0, }                      ], e: [                                 ] } ]
        [ [ [ '%{"name":value}'       ], 'cde'  ], { c: [                                            ], d: [ { t: 'esc', v: '{"name":value}', x: 0, }                       ], e: [                                 ] } ]
        [ [ [ '%%'                    ], 'cde'  ], { c: [                                            ], d: [ { t: 'esc', v: '%', x: 0, }                                    ], e: [                                 ] } ]
        [ [ [ '[]'                    ], 'cde'  ], { c: [                                            ], d: [ { t: 'lst', v: '[]', x: 0, }                                   ], e: [                                 ] } ]
        [ [ [ '%[]'                   ], 'cde'  ], { c: [                                            ], d: [ { t: 'esc', v: '[]', x: 0, }                                   ], e: [                                 ] } ]
        [ [ [ '[3,"word"]'            ], 'cde'  ], { c: [                                            ], d: [ { t: 'lst', v: '[3,"word"]', x: 0, }                           ], e: [                                 ] } ]
        [ [ [ '3', '"word"'           ], 'cde'  ], { c: [                                            ], d: [ { t: 'num', v: '3', x: 0, }, { t: 'bar', v: '"word"', x: 1, }  ], e: [                                 ] } ]
        [ [ [ '+3'                    ], 'cde'  ], { c: [                                            ], d: [ { t: 'num', v: '+3', x: 0, }                                   ], e: [                                 ] } ]
        [ [ [ '-3'                    ], 'cde'  ], { c: [                                            ], d: [ { t: 'num', v: '-3', x: 0, }                                   ], e: [                                 ] } ]
        [ [ [ '-0.4'                  ], 'cde'  ], { c: [                                            ], d: [ { t: 'num', v: '-0.4', x: 0, }                                 ], e: [                                 ] } ]
        [ [ [ '-.4'                   ], 'cde'  ], { c: [                                            ], d: [ { t: 'num', v: '-.4', x: 0, }                                  ], e: [                                 ] } ]
        [ [ [ '+0.4'                  ], 'cde'  ], { c: [                                            ], d: [ { t: 'num', v: '+0.4', x: 0, }                                 ], e: [                                 ] } ]
        [ [ [ '+.4'                   ], 'cde'  ], { c: [                                            ], d: [ { t: 'num', v: '+.4', x: 0, }                                  ], e: [                                 ] } ]
        [ [ [ '.9'                    ], 'cde'  ], { c: [                                            ], d: [ { t: 'num', v: '.9', x: 0, }                                   ], e: [                                 ] } ]
        [ [ [ '{}', '--', '{}'        ], 'cde'  ], { c: [                                            ], d: [ { t: 'obj', v: '{}', x: 0, }, { t: 'pfn', v: '{}', x: 2, }     ], e: [                                 ] } ]
        [ [ [ '345', '--', '678'      ], 'cde'  ], { c: [                                            ], d: [ { t: 'num', v: '345', x: 0, }, { t: 'pfn', v: '678', x: 2, }   ], e: [                                 ] } ]
        [ [ [ '-345', '--', '-678'    ], 'cde'  ], { c: [                                            ], d: [ { t: 'num', v: '-345', x: 0, }, { t: 'pfn', v: '-678', x: 2, } ], e: [                                 ] } ]
        [ [ [ '+345', '--', '+678'    ], 'cde'  ], { c: [                                            ], d: [ { t: 'num', v: '+345', x: 0, }, { t: 'pfn', v: '+678', x: 2, } ], e: [                                 ] } ]
        [ [ [ '1', '',                ], 'cde'  ], { c: [                                            ], d: [ { t: 'num', v: '1', x: 0, }, { t: 'bar', v: '', x: 1, }        ], e: [                                 ] } ]
        #...................................................................................................
        [ [ [ '-345', '--x--', '-678'       ], 'cds'  ], { c: [ ], d: [ { t: 'num', v: '-345', x: 0, }, { t: 'num', v: '-678', x: 2, }                                  ], s: 1, } ]
        [ [ [ '-345', '--', '--x--', '-678' ], 'cds'  ], { c: [ ], d: [ { t: 'num', v: '-345', x: 0, }, { t: 'pfn', v: '--x--', x: 2, }, { t: 'pfn', v: '-678', x: 3, } ], s: null, } ]
        [ [ [ '-345', '--x--', '--', '-678' ], 'cds'  ], { c: [ ], d: [ { t: 'num', v: '-345', x: 0, }, { t: 'pfn', v: '-678', x: 3, }                                  ], s: 1, } ]
        [ [ [ '-345', '--x--', '-t', '--x--' ], 'cdes'  ], { c: [ { t: 'bol', n: 't', v: false, x: 2 } ], d: [ { t: 'num', v: '-345', x: 0 } ], e: [ { t: 'scs', v: '--x--', x: 3 } ], s: 1 } ]
        #...................................................................................................
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
      #.....................................................................................................
      for [ [ argv, includes, ], matcher, ] in probes_and_matchers
        unless matcher?
          echo()
          continue
        # debug 'Ωcdetnvx___1', parse_argv argv
        echo [ [ argv, includes, ], ( abbreviate_cde ( parse_argv argv ), includes ), ]
        @eq ( Ωcde___2 = -> abbreviate_cde ( parse_argv argv ), includes ), matcher
      #.....................................................................................................
      ;null

    #-------------------------------------------------------------------------------------------------------
    legal_and_illegal_names: ->
      { internals,  } = require '../../../apps/cde-tnvx/lib/parse-argv-1'
      probes_and_matchers = [
        []
        ]
      #.....................................................................................................
      name_re = /// ^ #{internals.patterns.nme_re.source} $ ///v
      #.....................................................................................................
      @eq ( Ωcde___3 = -> type_of internals.patterns.nme_re             ), 'regex'
      @eq ( Ωcde___4 = -> name_re.test 'abc'                            ), true
      @eq ( Ωcde___5 = -> name_re.test 'abc34'                          ), true
      @eq ( Ωcde___6 = -> name_re.test 'aB_c34'                         ), true
      @eq ( Ωcde___7 = -> name_re.test 'äöü_c34'                        ), true
      #.....................................................................................................
      @eq ( Ωcde___8 = -> name_re.test '-äöü_c34'                       ), false
      @eq ( Ωcde___9 = -> name_re.test '+äöü_c34'                       ), false
      @eq ( Ωcde__10 = -> name_re.test 'äöü+c34'                        ), false
      @eq ( Ωcde__11 = -> name_re.test 'äöü_c34-'                       ), false
      #.....................................................................................................
      ;null

  #---------------------------------------------------------------------------------------------------------
  phase_2: ->
    { parse_argv,  } = require '../../../apps/cde-tnvx/lib/parse-argv-2'
    probes_and_matchers = [
      [ [ [ 'x'                    ], 'cde' ], { c: [                                            ], d: [ { t: 'bar', v: 'x', x: 0, }                                    ], e: [                     ] } ]
      []
      ]
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  command_lines:

    #-------------------------------------------------------------------------------------------------------
    beautify: ->
      @eq ( Ωcde__12 = -> sh """echo '{}' | ./beautify"""                                                   ), '{}'
      @eq ( Ωcde__13 = -> sh """echo '[]' | ./beautify"""                                                   ), '[]'
      @eq ( Ωcde__14 = -> sh """echo 'abc' | ./beautify"""                                                  ), 'abc'
      @eq ( Ωcde__15 = -> sh """echo '{"attr1":"value1"}' | ./beautify"""                                   ), "{ attr1: 'value1' }"
      @eq ( Ωcde__16 = -> sh """echo '{"attr1":"value1","attr2":"value2","attr3":"value3"}' | ./beautify""" ), "{ attr1: 'value1', attr2: 'value2', attr3: 'value3' }"
      @eq ( Ωcde__17 = -> sh """echo '["quite","a","few","words","in","this"]' | ./beautify"""              ), "[ 'quite', 'a', 'few', 'words', 'in', 'this' ]"
      @eq ( Ωcde__18 = -> sh """./beautify '{}'"""                                                          ), '{}'
      @eq ( Ωcde__19 = -> sh """./beautify '[]'"""                                                          ), '[]'
      @eq ( Ωcde__20 = -> sh """echo 'abc' | ./beautify '{}'"""                                             ), '{}'
      @eq ( Ωcde__21 = -> sh """echo 'abc' | ./beautify '[]'"""                                             ), '[]'
      #.....................................................................................................
      ;null

    #-------------------------------------------------------------------------------------------------------
    cli_arguments_as_list: ->
      @eq ( Ωcde__22 = -> sh """./cli-arguments-as-list"""                          ), '[]'
      @eq ( Ωcde__23 = -> sh """./cli-arguments-as-list a b c"""                    ), '["a","b","c"]'
      @eq ( Ωcde__24 = -> sh """./cli-arguments-as-list a b c | ./beautify"""       ), "[ 'a', 'b', 'c' ]"
      @eq ( Ωcde__25 = -> sh """./cli-arguments-as-list a b 'c'"""                  ), '["a","b","c"]'
      #.....................................................................................................
      ;null

    #-------------------------------------------------------------------------------------------------------
    analyze_cli_arguments_phase_1: ->
      echo()
      echo sh """./parse-argv-1 first try!"""
      @eq ( Ωcde__26 = -> sh """./parse-argv-1 first try!"""                             ), '{"a":["first","try!"],"c":[],"d":[{"t":"bar","v":"first","x":0},{"t":"bar","v":"try!","x":1}],"e":[],"i":"socket","o":"socket","s":null}'
      @eq ( Ωcde__27 = -> sh """./parse-argv-1 +blah -blub +d.wat"""                     ), '{"a":["+blah","-blub","+d.wat"],"c":[{"t":"bol","n":"blah","v":true,"x":0},{"t":"bol","n":"blub","v":false,"x":1}],"d":[{"t":"bol","n":"wat","v":true,"x":2}],"e":[],"i":"socket","o":"socket","s":null}'
      @eq ( Ωcde__28 = -> sh """./parse-argv-1 +verbose -verbose -- wat | ./beautify"""  ), "{\n  a: [ '+verbose', '-verbose', '--', 'wat' ],\n  c: [\n    { t: 'bol', n: 'verbose', v: true, x: 0 },\n    { t: 'bol', n: 'verbose', v: false, x: 1 }\n  ],\n  d: [ { t: 'pfn', v: 'wat', x: 3 } ],\n  e: [],\n  i: 'socket',\n  o: 'pipe',\n  s: null\n}"
      echo sh """./parse-argv-1 --x-- +verbose -verbose -- wat | ./beautify"""
      #.....................................................................................................
      ;null


#===========================================================================================================
if module is require.main then await do =>
  { show_requires, } = require '../../snippets/lib/demo-show-requires.js'
  show_requires '../../../apps/cde-tnvx'
  #---------------------------------------------------------------------------------------------------------
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: true,  report_checks: true,  }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test @cdetnvx
  # { parse_argv,  } = require '../../../apps/cdetnvx/lib/parse-argv-1'
  # debug 'Ωcdetnvx__29', parse_argv [ 'def', ]
  ;null

