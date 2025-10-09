
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

    #-------------------------------------------------------------------------------------------------------
    require_dictionary_tools: ->
      SFMODULES                   = require '../../../apps/bricabrac-sfmodules'
      { type_of,                } = SFMODULES.unstable.require_type_of()
      { expand_dictionary,      } = SFMODULES.require_dictionary_tools()
      { get_local_destinations, } = SFMODULES.require_get_local_destinations()
      #.....................................................................................................
      @eq ( Ωkvrt___1 = -> type_of expand_dictionary ), 'function'
      do =>
        strings =
          '${greet}':   "Hello ${who}"
          '${who}':     "dear ${target}"
          '${target}':  "world"
        matcher =
          '${greet}':   "Hello dear world"
          '${who}':     "dear world"
          '${target}':  "world"
        strings_copy  = { strings..., }
        expanded      = expand_dictionary strings
        @eq     ( Ωkvrt___2 = -> strings             ), strings_copy
        @eq     ( Ωkvrt___3 = -> expanded            ), matcher
        @eq     ( Ωkvrt___4 = -> expanded is strings ), false
        return null
      #.....................................................................................................
      do =>
        strings =
          '${greet}':   "Hello ${who}"
          '${who}':     "dear ${target}"
          '${target}':  "world ${greet}"
        strings_copy  = { strings..., }
        @throws ( Ωkvrt___5 = -> expand_dictionary strings ), /cyclic reference detected for \$\{greet\}/
        @eq     ( Ωkvrt___6 = -> strings                       ), strings_copy
        return null
      #.....................................................................................................
      do =>
        strings =
          '/(user)/':     "/Alice/"
          '(schema)//':   "https://"
          '(server)/':    "(schema)//example.com/"
          '(folder)':     "(server)/(user)/data"
          '::file::':     "(folder)/file.txt"
        for key, value of expand_dictionary strings
          debug 'Ωkvrt___7', f"#{key}:<20c; #{rpr value}"
        return null
      #.....................................................................................................
      do =>
        bricabrac_json = {
          "strings": {
            "(gh)": "https://raw.githubusercontent.com",
            "(flow)/": "(gh)/loveencounterflow/",
            "(sfmodules)": "(flow)/bricabrac-sfmodules/refs/heads/main/src"
            },
          "mappings": {
            "a": "--(gh)--"
            "b": "--(flow)/--"
            "c": "--(sfmodules)--"
            "d": "~/--(sfmodules)--" } }
        _bricabrac_compiled_json = {
          "strings": {
            "(gh)": "https://raw.githubusercontent.com",
            "(flow)/": "https://raw.githubusercontent.com/loveencounterflow/",
            "(sfmodules)": "https://raw.githubusercontent.com/loveencounterflow/bricabrac-sfmodules/refs/heads/main/src"
            },
          "mappings": {
            "a": "--https://raw.githubusercontent.com--"
            "b": "--https://raw.githubusercontent.com/loveencounterflow/--"
            "c": "--https://raw.githubusercontent.com/loveencounterflow/bricabrac-sfmodules/refs/heads/main/src--"
            "d": "~/--https://raw.githubusercontent.com/loveencounterflow/bricabrac-sfmodules/refs/heads/main/src--" } }
        #...................................................................................................
        result          = {}
        result.strings  = expand_dictionary bricabrac_json.strings
        result.mappings = {}
        for target_path, source_spec of bricabrac_json.mappings
          result.mappings[ target_path ] = source_spec
          for pattern_key, pattern_value of result.strings
            result.mappings[ target_path ] = result.mappings[ target_path ].replaceAll pattern_key, pattern_value
        # debug 'Ωkvrt___8', result
        @eq ( Ωkvrt___9 = -> false ), "resolve home directory with os.homedir() / local-destination.brics"
        @eq ( Ωkvrt__10 = -> Object.keys result ), Object.keys _bricabrac_compiled_json
        for key, value of result.strings
          @eq ( Ωkvrt__11 = -> value ), _bricabrac_compiled_json.strings[ key ]
        for key, value of result.mappings
          @eq ( Ωkvrt__12 = -> value ), _bricabrac_compiled_json.mappings[ key ]
        # debug 'Ωkvrt__13', ( get_local_destinations null ).home
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    require_get_local_destinations: ->
      SFMODULES                   = require '../../../apps/bricabrac-sfmodules'
      { type_of,                } = SFMODULES.unstable.require_type_of()
      { get_local_destinations, } = SFMODULES.require_get_local_destinations()
      PATH                        = require 'node:path'
      OS                          = require 'node:os'
      FS                          = require 'node:fs'
      #.....................................................................................................
      # {
      #   app: {
      #     name: 'my-app-name',
      #     data: '/home/flow/.local/share/my-app-name',
      #     config: '/home/flow/.config/my-app-name',
      #     cache: '/home/flow/.cache/my-app-name',
      #     log: '/home/flow/.local/state/my-app-name',
      #     temp: '/tmp/flow/my-app-name',
      #     home: '/home/flow/my-app-name',
      #     node_modules: '/home/flow/my-app-name/node_modules',
      #     dep_bin: '/home/flow/my-app-name/node_modules/.bin',
      #     own_bin: '/home/flow/my-app-name/bin'
      #   },
      #   user: { name: 'flow', home: '/home/flow', temp: '/tmp' }
      # }
      #.....................................................................................................
      @eq ( Ωkvrt__14 = -> type_of get_local_destinations ), 'function'
      #.....................................................................................................
      do =>
        app_name      = 'my-app-name'
        dst           = get_local_destinations { app_name, }
        user_nfo      = OS.userInfo()
        home          = FS.realpathSync OS.homedir()
        temp          = FS.realpathSync OS.tmpdir()
        #...................................................................................................
        @eq ( Ωkvrt__15 = -> ( Object.keys dst ).sort()       ), [ 'app', 'user', ]
        @eq ( Ωkvrt__16 = -> ( Object.keys dst.app ).sort()   ), [ 'cache', 'config', 'data', 'dep_bin', 'home', 'log', 'name', 'node_modules', 'own_bin', 'temp' ]
        @eq ( Ωkvrt__17 = -> ( Object.keys dst.user ).sort()  ), [ 'home', 'name', 'temp', ]
        #...................................................................................................
        @eq ( Ωkvrt__18 = -> type_of dst.app                  ), 'pod'
        @eq ( Ωkvrt__19 = -> type_of dst.user                 ), 'pod'
        #...................................................................................................
        @eq ( Ωkvrt__20 = -> PATH.basename dst.app.cache      ), app_name
        @eq ( Ωkvrt__21 = -> PATH.basename dst.app.config     ), app_name
        @eq ( Ωkvrt__22 = -> PATH.basename dst.app.data       ), app_name
        @eq ( Ωkvrt__23 = -> dst.app.dep_bin                  ), PATH.resolve home, app_name, 'node_modules', '.bin'
        @eq ( Ωkvrt__24 = -> dst.app.home                     ), PATH.resolve home, app_name
        @eq ( Ωkvrt__25 = -> PATH.basename dst.app.log        ), app_name
        @eq ( Ωkvrt__26 = -> dst.app.name                     ), app_name
        @eq ( Ωkvrt__27 = -> dst.app.node_modules             ), PATH.resolve home, app_name, 'node_modules'
        @eq ( Ωkvrt__28 = -> dst.app.own_bin                  ), PATH.resolve home, app_name, 'bin'
        @eq ( Ωkvrt__29 = -> dst.app.temp                     ), PATH.resolve dst.user.temp, dst.user.name, app_name
        #...................................................................................................
        @eq ( Ωkvrt__30 = -> dst.user.home                    ), home
        @eq ( Ωkvrt__31 = -> dst.user.name                    ), user_nfo.username
        @eq ( Ωkvrt__32 = -> dst.user.temp                    ), temp
        #...................................................................................................
        return null
      #.....................................................................................................
      do =>
        app_name      = null
        dst           = get_local_destinations { app_name, }
        user_nfo      = OS.userInfo()
        home          = FS.realpathSync OS.homedir()
        temp          = FS.realpathSync OS.tmpdir()
        #...................................................................................................
        @eq ( Ωkvrt__33 = -> ( Object.keys dst ).sort()       ), [ 'app', 'user', ]
        @eq ( Ωkvrt__34 = -> ( Object.keys dst.app ).sort()   ), [ 'cache', 'config', 'data', 'dep_bin', 'home', 'log', 'name', 'node_modules', 'own_bin', 'temp' ]
        @eq ( Ωkvrt__35 = -> ( Object.keys dst.user ).sort()  ), [ 'home', 'name', 'temp', ]
        #...................................................................................................
        @eq ( Ωkvrt__36 = -> type_of dst.app                  ), 'pod'
        @eq ( Ωkvrt__37 = -> type_of dst.user                 ), 'pod'
        #...................................................................................................
        @eq ( Ωkvrt__38 = -> PATH.basename dst.app.cache      ), '<YOUR-APP-NAME-HERE>'
        @eq ( Ωkvrt__39 = -> PATH.basename dst.app.config     ), '<YOUR-APP-NAME-HERE>'
        @eq ( Ωkvrt__40 = -> PATH.basename dst.app.data       ), '<YOUR-APP-NAME-HERE>'
        @eq ( Ωkvrt__41 = -> dst.app.dep_bin                  ), PATH.resolve home, '<YOUR-APP-NAME-HERE>', 'node_modules', '.bin'
        @eq ( Ωkvrt__42 = -> dst.app.home                     ), PATH.resolve home, '<YOUR-APP-NAME-HERE>'
        @eq ( Ωkvrt__43 = -> PATH.basename dst.app.log        ), '<YOUR-APP-NAME-HERE>'
        @eq ( Ωkvrt__44 = -> dst.app.name                     ), '<YOUR-APP-NAME-HERE>'
        @eq ( Ωkvrt__45 = -> dst.app.node_modules             ), PATH.resolve home, '<YOUR-APP-NAME-HERE>', 'node_modules'
        @eq ( Ωkvrt__46 = -> dst.app.own_bin                  ), PATH.resolve home, '<YOUR-APP-NAME-HERE>', 'bin'
        @eq ( Ωkvrt__47 = -> dst.app.temp                     ), PATH.resolve dst.user.temp, dst.user.name, '<YOUR-APP-NAME-HERE>'
        #...................................................................................................
        @eq ( Ωkvrt__48 = -> dst.user.home                    ), home
        @eq ( Ωkvrt__49 = -> dst.user.name                    ), user_nfo.username
        @eq ( Ωkvrt__50 = -> dst.user.temp                    ), temp
        #...................................................................................................
        return null
      #.....................................................................................................
      do =>
        app_name      = 'frobulator'
        app_home      = '/path/to/projects'
        dst           = get_local_destinations { app_name, app_home }
        user_nfo      = OS.userInfo()
        home          = FS.realpathSync OS.homedir()
        temp          = FS.realpathSync OS.tmpdir()
        #...................................................................................................
        @eq ( Ωkvrt__51 = -> ( Object.keys dst ).sort()       ), [ 'app', 'user', ]
        @eq ( Ωkvrt__52 = -> ( Object.keys dst.app ).sort()   ), [ 'cache', 'config', 'data', 'dep_bin', 'home', 'log', 'name', 'node_modules', 'own_bin', 'temp' ]
        @eq ( Ωkvrt__53 = -> ( Object.keys dst.user ).sort()  ), [ 'home', 'name', 'temp', ]
        #...................................................................................................
        @eq ( Ωkvrt__54 = -> type_of dst.app                  ), 'pod'
        @eq ( Ωkvrt__55 = -> type_of dst.user                 ), 'pod'
        #...................................................................................................
        @eq ( Ωkvrt__56 = -> PATH.basename dst.app.cache      ), app_name
        @eq ( Ωkvrt__57 = -> PATH.basename dst.app.config     ), app_name
        @eq ( Ωkvrt__58 = -> PATH.basename dst.app.data       ), app_name
        @eq ( Ωkvrt__59 = -> dst.app.dep_bin                  ), PATH.resolve home, app_home, app_name, 'node_modules', '.bin'
        @eq ( Ωkvrt__60 = -> dst.app.home                     ), PATH.resolve home, app_home, app_name
        @eq ( Ωkvrt__61 = -> PATH.basename dst.app.log        ), app_name
        @eq ( Ωkvrt__62 = -> dst.app.name                     ), app_name
        @eq ( Ωkvrt__63 = -> dst.app.node_modules             ), PATH.resolve home, app_home, app_name, 'node_modules'
        @eq ( Ωkvrt__64 = -> dst.app.own_bin                  ), PATH.resolve home, app_home, app_name, 'bin'
        @eq ( Ωkvrt__65 = -> dst.app.temp                     ), PATH.resolve dst.user.temp, dst.user.name, app_name
        #...................................................................................................
        @eq ( Ωkvrt__66 = -> dst.user.home                    ), home
        @eq ( Ωkvrt__67 = -> dst.user.name                    ), user_nfo.username
        @eq ( Ωkvrt__68 = -> dst.user.temp                    ), temp
        #...................................................................................................
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    require_walk_js_tokens: ->
      SFMODULES                   = require '../../../apps/bricabrac-sfmodules'
      { type_of,                } = SFMODULES.unstable.require_type_of()
      { walk_js_tokens,
        walk_essential_js_tokens,
        summarize,              } = SFMODULES.require_walk_js_tokens()
      #.....................................................................................................
      @eq ( Ωkvrt__69 = -> type_of walk_js_tokens            ), 'generatorfunction'
      @eq ( Ωkvrt__70 = -> type_of walk_essential_js_tokens  ), 'generatorfunction'
      #.....................................................................................................
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
        #...................................................................................................
        source = "const { d, } = require( 'some-module' ); /* require( 'other-module' ) */"
        for token from walk_essential_js_tokens source
          info 'Ωkvrt__88', f"#{token.type}:>20c; #{rpr token.value}"
        @eq ( Ωkvrt__89 = -> summarize walk_essential_js_tokens source ), "&&&IdentifierName'const'&&&Punctuator'{'&&&IdentifierName'd'&&&Punctuator','&&&Punctuator'}'&&&Punctuator'='&&&IdentifierName'require'&&&Punctuator'('&&&StringLiteral'\\'some-module\\''&&&Punctuator')'&&&Punctuator';'&&&eof&&&"
        #...................................................................................................
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    require_parse_require_statements: ->
      SFMODULES                     = require '../../../apps/bricabrac-sfmodules'
      { type_of,                  } = SFMODULES.unstable.require_type_of()
      { walk_require_statements,  } = SFMODULES.require_parse_require_statements()
      { walk_js_tokens,
        walk_essential_js_tokens,
        summarize,                } = SFMODULES.require_walk_js_tokens()
      PATH                          = require 'node:path'
      FS                            = require 'node:fs'
      #.....................................................................................................
      @eq ( Ωkvrt__90 = -> type_of walk_require_statements ), 'function'
      #.....................................................................................................
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
        #...................................................................................................
        return null
      #.....................................................................................................
      do =>
        #...................................................................................................
        whisper '————————————————————————————————————–'
        for d from walk_require_statements { source: 'require("xxx");', }
          info 'Ωkvrt_111', d
        #...................................................................................................
        whisper '————————————————————————————————————–'
        for d from walk_require_statements { source: 'require("xxx") // semver: 5.6.7', }
          urge 'Ωkvrt_112', d
        #...................................................................................................
        whisper '————————————————————————————————————–'
        for token from walk_js_tokens 'require("xxx"); // semver: 5.6.7'
          help 'Ωkvrt_113', token
        #...................................................................................................
        whisper '————————————————————————————————————–'
        for d from walk_require_statements { source: 'require("xxx"); // semver: 5.6.7', }
          info 'Ωkvrt_114', d
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    require_rpr_string: ->
      SFMODULES                   = require '../../../apps/bricabrac-sfmodules'
      { type_of,                } = SFMODULES.unstable.require_type_of()
      { rpr_string,             } = SFMODULES.require_rpr_string()
      #.....................................................................................................
      @eq ( Ωkvrt_115 = -> type_of rpr_string ), 'function'
      #.....................................................................................................
      do =>
        @eq ( Ωkvrt_116 = -> rpr_string ''       ), """''"""
        @eq ( Ωkvrt_117 = -> rpr_string '"'      ), """'"'"""
        @eq ( Ωkvrt_118 = -> rpr_string "'"      ), """'\\''"""
        @eq ( Ωkvrt_119 = -> rpr_string 'pop'    ), """'pop'"""
        @eq ( Ωkvrt_120 = -> rpr_string '"pop"'  ), """'"pop"'"""
        @eq ( Ωkvrt_121 = -> rpr_string "'pop'"  ), """'\\'pop\\''"""
        #...................................................................................................
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    require_path_tools: ->
      SFMODULES                   = require '../../../apps/bricabrac-sfmodules'
      { type_of,                } = SFMODULES.unstable.require_type_of()
      { is_inside,              } = SFMODULES.require_path_tools()
      #.....................................................................................................
      @eq ( Ωkvrt_122 = -> type_of is_inside ), 'function'
      #.....................................................................................................
      do =>
        @throws ( Ωkvrt_123 = -> is_inside '../path/to/file',       '/'                 ), /expected an absolute path as anchor/
        @throws ( Ωkvrt_124 = -> is_inside '../path/to/file',       'wat'               ), /expected an absolute path as anchor/
        @throws ( Ωkvrt_125 = -> is_inside '../path/to/file',       '../path/to/file'   ), /expected an absolute path as anchor/
        @throws ( Ωkvrt_126 = -> is_inside 'path/to/file',          '../path/to/file'   ), /expected an absolute path as anchor/
        #...................................................................................................
        @eq     ( Ωkvrt_127 = -> is_inside '/',                     '/path/to/file'     ), true
        @eq     ( Ωkvrt_128 = -> is_inside '/path/to/file',         '/path/to/file'     ), true
        @eq     ( Ωkvrt_129 = -> is_inside '/path/to/file',         'oops'              ), true
        @eq     ( Ωkvrt_130 = -> is_inside '/path/../file',         '/file'             ), true
        @eq     ( Ωkvrt_131 = -> is_inside '/path/../file/.',       '/file'             ), true
        @eq     ( Ωkvrt_132 = -> is_inside '/path/../file/./././.', '/file'             ), true
        @eq     ( Ωkvrt_133 = -> is_inside '/path/to/file',         '.\\./oops'         ), true
        @eq     ( Ωkvrt_134 = -> is_inside '/path/to/file',         '..\\/oops'         ), true
        #...................................................................................................
        @eq     ( Ωkvrt_135 = -> is_inside '/path/to/file/wat',     '/path/to/file'     ), false
        @eq     ( Ωkvrt_136 = -> is_inside '/path/to/file',         '../oops'           ), false
        @eq     ( Ωkvrt_137 = -> is_inside '/path/to/file',         '/oops'             ), false
        @eq     ( Ωkvrt_138 = -> is_inside '/path/to/file',         '/'                 ), false
        @eq     ( Ωkvrt_139 = -> is_inside '/path/../file',         '/path'             ), false
        #...................................................................................................
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    require_jetstream: ->
      SFMODULES                   = require '../../../apps/bricabrac-sfmodules'
      { type_of,                } = SFMODULES.unstable.require_type_of()
      { Jetstream,
        $,                      } = SFMODULES.require_jetstream()
      #.....................................................................................................
      @eq ( Ωkvrt_140 = -> type_of ( new Jetstream() )          ), 'function'
      @eq ( Ωkvrt_141 = -> type_of ( new Jetstream() ) 'data'   ), 'generator'
      #.....................................................................................................
      do =>
        first     = Symbol 'first'
        last      = Symbol 'last'
        stream    = new Jetstream()
        #...................................................................................................
        @eq ( Ωap_142 = -> stream.size                                         ), 0
        @eq ( Ωap_143 = -> stream.is_empty                                     ), true
        #...................................................................................................
        stream.push upper    = ( d              ) -> debug 'Ωap_144 upper'; yield d.toUpperCase()
        stream.push ex       = ( d, mark = '!'  ) -> debug 'Ωap_145 ex'; yield d + mark
        stream.push watch = ( d ) -> help 'Ωap_146', rpr d
        stream.push $ { first, last, }, add_2 = ( d ) ->
          debug 'Ωkvrt_147', 'add_2', ( rpr d ), d is first, d is last
          return yield """Let's say: \""""  if d is first
          return yield '".'                 if d is last
          yield d
        # stream.push $ { first, last, }, add_2 = ( d ) ->
        #   return null if d in [ first, last, ]
        #   yield """Let's say: \""""  # if d is first
        #   yield d
        #   yield '".'                 # if d is last
        # stream.push watch = ( d ) -> urge 'Ωap_148', rpr d
        #...................................................................................................
        @eq ( Ωap_149 = -> stream.size                                         ), 5
        @eq ( Ωap_150 = -> stream.is_empty                                     ), false
        @eq ( Ωap_151 = -> [ ( d for d from stream 'hidey-ho' )..., ]          ), [ """Let's say: \"""", 'HIDEY-HO!', '".' ]
        # @eq ( Ωap_152 = -> [ ( d for d from stream 'hidey-ho' )..., ].join ''  ), """Let's say: "HIDEY-HO!"."""
        # @eq ( Ωap_153 = -> [ ( d for d from stream 'hidey-ho' )..., ].join ''  ), """Let's say: "HIDEY-HO!"."""
        return null
      #.....................................................................................................
      do =>
        stream    = new Jetstream()
        #...................................................................................................
        stream.push add_1    = ( d              ) -> debug 'Ωap_154 add_1'; yield d + 1
        stream.push add_1    = ( d              ) -> debug 'Ωap_155 add_1'; yield d + 1
        stream.push add_1    = ( d              ) -> debug 'Ωap_156 add_1'; yield d + 1
        stream.push add_1    = ( d              ) -> debug 'Ωap_157 add_1'; yield d + 1
        stream.push add_1    = ( d              ) -> debug 'Ωap_158 add_1'; yield d + 1
        #...................................................................................................
        @eq ( Ωap_161 = -> [ ( d for d from stream 0 )..., ]          ), [ 5, ]
        return null
      #.....................................................................................................
      do =>
        ### empty pipeline is a pipeline without transforms, so data is passed through untransformed: ###
        debug 'Ωap_164', [ ( ( new Jetstream() ) 'data' )..., ]
        collector = []
        #...................................................................................................
        p_1 = new Jetstream()
        p_1.push ( d ) -> collector.push 'p1-t1'; yield d + ' № 1'
        p_1.push ( d ) -> collector.push 'p1-t2'; yield d + ' № 2'
        #...................................................................................................
        p_2 = new Jetstream()
        p_2.push ( d ) -> collector.push 'p2-t1'; yield d + ' № 3'
        p_2.push p_1
        p_2.push ( d ) -> collector.push 'p2-t2'; yield d + ' № 4'
        #...................................................................................................
        p_3 = new Jetstream()
        p_3.push ( d ) -> collector.push 'p3-t1'; yield d + ' № 5'
        p_3.push p_2
        p_3.push ( d ) -> collector.push 'p3-t2'; yield d + ' № 6'
        info 'Ωap_165', d for d from p_3 'my-data'
        help 'Ωap_166', collector
        #...................................................................................................
        return null
      #.....................................................................................................
      return null


#===========================================================================================================
demo_improved_structure = ->
  help 'Ωkvrt_167', require '../../../apps/bricabrac-sfmodules'
  DIS = require '../../../apps/bricabrac-sfmodules/lib/_demo-improved-structure'
  help 'Ωkvrt_168', DIS
  DIS.demo_attached()
  return null


#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test @tasks
  # ( new Test guytest_cfg ).test { require_get_local_destinations: @tasks.require_get_local_destinations, }
  # ( new Test guytest_cfg ).test { require_walk_js_tokens: @tasks.require_walk_js_tokens, }
  # ( new Test guytest_cfg ).test { require_parse_require_statements: @tasks.require_parse_require_statements, }
  ( new Test guytest_cfg ).test { require_jetstream: @tasks.require_jetstream, }
  # ( new Test guytest_cfg ).test { require_path_tools: @tasks.require_path_tools, }
  # demo_improved_structure()