
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
  whisper }               = GUY.trm.get_loggers 'bricabrac-sfmodules/test-basics'
{ rpr
  inspect
  echo
  reverse
  log     }               = GUY.trm
# WGUY                      = require '../../../apps/webguy'
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG
{ f }                     = require '../../../apps/effstring'



############################################################################################################
#
#===========================================================================================================
@tasks =

  #---------------------------------------------------------------------------------------------------------
  require_walk_js_tokens: ->
    SFMODULES                   = require '../../../apps/bricabrac-sfmodules'
    { type_of,                } = SFMODULES.unstable.require_type_of()
    { walk_js_tokens,
      walk_essential_js_tokens,
      summarize,              } = SFMODULES.require_walk_js_tokens()
    #.......................................................................................................
    @eq ( Ωkvrt__69 = -> type_of walk_js_tokens            ), 'generatorfunction'
    @eq ( Ωkvrt__70 = -> type_of walk_essential_js_tokens  ), 'generatorfunction'
    #.......................................................................................................
    do =>
      @eq ( Ωkvrt__71 = -> type_of walk_js_tokens ''                                         ), 'generator'
      @eq ( Ωkvrt__72 = -> [ ( walk_js_tokens '' )..., ]                                     ), [ { type: 'eof', }, ]
      @eq ( Ωkvrt__73 = -> summarize walk_js_tokens            'var a = 9;'                  ), "&&&IdentifierName'var'&&&WhiteSpace' '&&&IdentifierName'a'&&&WhiteSpace' '&&&Punctuator'='&&&WhiteSpace' '&&&NumericLiteral'9'&&&Punctuator';'&&&eof&&&"
      @eq ( Ωkvrt__74 = -> summarize walk_essential_js_tokens  'var a = 9;'                  ), "&&&IdentifierName'var'&&&IdentifierName'a'&&&Punctuator'='&&&NumericLiteral'9'&&&Punctuator';'&&&eof&&&"
      @eq ( Ωkvrt__75 = -> summarize walk_essential_js_tokens  '"y"'                         ), """&&&StringLiteral'"y"'&&&eof&&&"""
      @eq ( Ωkvrt__76 = -> summarize walk_essential_js_tokens  "'y'"                         ), "&&&StringLiteral'\\'y\\''&&&eof&&&"
      @eq ( Ωkvrt__77 = -> summarize walk_essential_js_tokens  "`A${'y'}Z`"                  ), "&&&TemplateHead'`A${'&&&StringLiteral'\\'y\\''&&&TemplateTail'}Z`'&&&eof&&&"
      @eq ( Ωkvrt__78 = -> summarize walk_essential_js_tokens  "f`A${'y'}Z`"                 ), "&&&IdentifierName'f'&&&TemplateHead'`A${'&&&StringLiteral'\\'y\\''&&&TemplateTail'}Z`'&&&eof&&&"
      @eq ( Ωkvrt__79 = -> summarize walk_essential_js_tokens  "`A${`y`}Z`"                  ), "&&&TemplateHead'`A${'&&&NoSubstitutionTemplate'`y`'&&&TemplateTail'}Z`'&&&eof&&&"
      @eq ( Ωkvrt__80 = -> summarize walk_essential_js_tokens  "`A${require(`y`)}Z`"         ), "&&&TemplateHead'`A${'&&&IdentifierName'require'&&&Punctuator'('&&&NoSubstitutionTemplate'`y`'&&&Punctuator')'&&&TemplateTail'}Z`'&&&eof&&&"
      @eq ( Ωkvrt__81 = -> summarize walk_essential_js_tokens  "require = 777"               ), "&&&IdentifierName'require'&&&Punctuator'='&&&NumericLiteral'777'&&&eof&&&"
      @eq ( Ωkvrt__82 = -> summarize walk_essential_js_tokens  "require = 777 // foo: bar"   ), "&&&IdentifierName'require'&&&Punctuator'='&&&NumericLiteral'777'&&&eof&&&"
      @eq ( Ωkvrt__83 = -> summarize walk_essential_js_tokens  "require = 777; // foo: bar"  ), "&&&IdentifierName'require'&&&Punctuator'='&&&NumericLiteral'777'&&&Punctuator';'&&&eof&&&"
      # @eq ( Ωkvrt__84 = -> summarize walk_essential_js_tokens  "true"                ), null
      # @eq ( Ωkvrt__85 = -> summarize walk_essential_js_tokens  "false"               ), null
      # @eq ( Ωkvrt__86 = -> summarize walk_essential_js_tokens  "undefined"           ), null
      # @eq ( Ωkvrt__87 = -> summarize walk_essential_js_tokens  "null"                ), null
      #.....................................................................................................
      source = "const { d, } = require( 'some-module' ); /* require( 'other-module' ) */"
      for token from walk_essential_js_tokens source
        info 'Ωkvrt__88', f"#{token.type}:>20c; #{rpr token.value}"
      @eq ( Ωkvrt__89 = -> summarize walk_essential_js_tokens source ), "&&&IdentifierName'const'&&&Punctuator'{'&&&IdentifierName'd'&&&Punctuator','&&&Punctuator'}'&&&Punctuator'='&&&IdentifierName'require'&&&Punctuator'('&&&StringLiteral'\\'some-module\\''&&&Punctuator')'&&&Punctuator';'&&&eof&&&"
      #.....................................................................................................
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  require_parse_require_statements: ->
    SFMODULES                     = require '../../../apps/bricabrac-sfmodules'
    { type_of,                  } = SFMODULES.unstable.require_type_of()
    { walk_require_statements,  } = SFMODULES.require_parse_require_statements()
    { walk_js_tokens,
      walk_essential_js_tokens,
      summarize,                } = SFMODULES.require_walk_js_tokens()
    PATH                          = require 'node:path'
    FS                            = require 'node:fs'
    #.......................................................................................................
    @eq ( Ωkvrt__90 = -> type_of walk_require_statements ), 'function'
    #.......................................................................................................
    do =>
      path          = PATH.resolve __dirname, '../../../assets/bricabrac/parse-require-statements/test-basics.js'
      wouldbe_path  = __filename
      source        = ( FS.readFileSync path, { encoding: 'utf-8', } )
      # for d from walk_require_statements path
      #   debug 'Ωkvrt__91', d
      tokens        = walk_require_statements { path: wouldbe_path, source, }
      @eq ( Ωkvrt__92 = -> tokens.next().value ), { type: 'require', line_nr: 5, disposition: 'npm', selector: 'guy', annotation: 'semver:0.3.4', }
      @eq ( Ωkvrt__93 = -> tokens.next().value ), { type: 'require', line_nr: 12, disposition: 'inside', selector: '../../../apps/guy-test-NG', annotation: null, }
      @eq ( Ωkvrt__94 = -> tokens.next().value ), { type: 'require', line_nr: 16, disposition: 'inside', selector: '../../../apps/effstring', annotation: null, }
      @eq ( Ωkvrt__95 = -> tokens.next().value ), { type: 'require', line_nr: 25, disposition: 'inside', selector: '../../../apps/bricabrac-sfmodules', annotation: null, }
      @eq ( Ωkvrt__96 = -> tokens.next().value ), { type: 'require', line_nr: 162, disposition: 'inside', selector: '../../../apps/bricabrac-sfmodules', annotation: null, }
      @eq ( Ωkvrt__97 = -> tokens.next().value ), { type: 'require', line_nr: 165, disposition: 'node', selector: 'node:path', annotation: null, }
      @eq ( Ωkvrt__98 = -> tokens.next().value ), { type: 'require', line_nr: 166, disposition: 'node', selector: 'node:os', annotation: null, }
      @eq ( Ωkvrt__99 = -> tokens.next().value ), { type: 'require', line_nr: 167, disposition: 'node', selector: 'node:fs', annotation: null, }
      @eq ( Ωkvrt_100 = -> tokens.next().value ), { type: 'require', line_nr: 399, disposition: 'inside', selector: '../../../apps/bricabrac-sfmodules', annotation: null, }
      @eq ( Ωkvrt_101 = -> tokens.next().value ), { type: 'require', line_nr: 465, disposition: 'node', selector: 'node:fs', annotation: null, }
      @eq ( Ωkvrt_102 = -> tokens.next().value ), { type: 'require', line_nr: 466, disposition: 'inside', selector: '../../../apps/bricabrac-sfmodules', annotation: null, }
      @eq ( Ωkvrt_103 = -> tokens.next().value ), { type: 'warning', message: "ignoring possible `require` on line 554: '        require;'", line: '        require;', line_nr: 554 }
      @eq ( Ωkvrt_104 = -> tokens.next().value ), { type: 'warning', message: "ignoring possible `require` on line 555: '        require(true);'", line: '        require(true);', line_nr: 555 }
      @eq ( Ωkvrt_105 = -> tokens.next().value ), { type: 'require', line_nr: 556, disposition: 'npm', selector: 'pkg#1', annotation: null, }
      @eq ( Ωkvrt_106 = -> tokens.next().value ), { type: 'require', line_nr: 557, disposition: 'npm', selector: 'pkg#2', annotation: null, }
      @eq ( Ωkvrt_107 = -> tokens.next().value ), { type: 'warning', message: "ignoring possible `require` on line 558: '        return require( `pkg#3` + \\'suffix\\' );'", line: "        return require( `pkg#3` + 'suffix' );", line_nr: 558 }
      @eq ( Ωkvrt_108 = -> tokens.next().value ), { type: 'require', line_nr: 566, disposition: 'inside', selector: '../../../apps/bricabrac-sfmodules', annotation: null, }
      @eq ( Ωkvrt_109 = -> tokens.next().value ), { type: 'warning', message: "ignoring possible `require` on line 602: '  if (module === require.main) {'", line: '  if (module === require.main) {', line_nr: 602 }
      @eq ( Ωkvrt_110 = -> tokens.next().value ), { type: 'require', line_nr: 626, disposition: 'outside', selector: '../../../../whatever', annotation: null }
      #.....................................................................................................
      return null
    #.......................................................................................................
    do =>
      #.....................................................................................................
      whisper '————————————————————————————————————–'
      for d from walk_require_statements { source: 'require("xxx");', }
        info 'Ωkvrt_111', d
      #.....................................................................................................
      whisper '————————————————————————————————————–'
      for d from walk_require_statements { source: 'require("xxx") // semver: 5.6.7', }
        urge 'Ωkvrt_112', d
      #.....................................................................................................
      whisper '————————————————————————————————————–'
      for token from walk_js_tokens 'require("xxx"); // semver: 5.6.7'
        help 'Ωkvrt_113', token
      #.....................................................................................................
      whisper '————————————————————————————————————–'
      for d from walk_require_statements { source: 'require("xxx"); // semver: 5.6.7', }
        info 'Ωkvrt_114', d
    #.......................................................................................................
    return null


#===========================================================================================================
demo_improved_structure = ->
  help 'Ωkvrt_196', require '../../../apps/bricabrac-sfmodules'
  DIS = require '../../../apps/bricabrac-sfmodules/lib/_demo-improved-structure'
  help 'Ωkvrt_197', DIS
  DIS.demo_attached()
  return null


#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test @tasks
  # ( new Test guytest_cfg ).test { require_get_local_destinations: @tasks.require_get_local_destinations, }
  # ( new Test guytest_cfg ).test { require_walk_js_tokens: @tasks.require_walk_js_tokens, }
  ( new Test guytest_cfg ).test { require_parse_require_statements: @tasks.require_parse_require_statements, }
  # ( new Test guytest_cfg ).test { require_jetstream: @tasks.require_jetstream, }
  # ( new Test guytest_cfg ).test { require_path_tools: @tasks.require_path_tools, }
  # demo_improved_structure()