
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
      @eq ( Ωkvr___1 = -> type_of expand_dictionary ), 'function'
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
        @eq     ( Ωkvr___2 = -> strings             ), strings_copy
        @eq     ( Ωkvr___3 = -> expanded            ), matcher
        @eq     ( Ωkvr___4 = -> expanded is strings ), false
        return null
      #.....................................................................................................
      do =>
        strings =
          '${greet}':   "Hello ${who}"
          '${who}':     "dear ${target}"
          '${target}':  "world ${greet}"
        strings_copy  = { strings..., }
        @throws ( Ωkvr___5 = -> expand_dictionary strings ), /cyclic reference detected for \$\{greet\}/
        @eq     ( Ωkvr___6 = -> strings                       ), strings_copy
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
          debug 'Ωkvr___7', f"#{key}:<20c; #{rpr value}"
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
        # debug 'Ωkvr___8', result
        @eq ( Ωkvr___9 = -> false ), "resolve home directory with os.homedir() / local-destination.brics"
        @eq ( Ωkvr__10 = -> Object.keys result ), Object.keys _bricabrac_compiled_json
        for key, value of result.strings
          @eq ( Ωkvr__11 = -> value ), _bricabrac_compiled_json.strings[ key ]
        for key, value of result.mappings
          @eq ( Ωkvr__12 = -> value ), _bricabrac_compiled_json.mappings[ key ]
        # debug 'Ωkvr__13', ( get_local_destinations null ).home
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
      @eq ( Ωkvr__14 = -> type_of get_local_destinations ), 'function'
      #.....................................................................................................
      do =>
        app_name      = 'my-app-name'
        dst           = get_local_destinations { app_name, }
        user_nfo      = OS.userInfo()
        home          = FS.realpathSync OS.homedir()
        temp          = FS.realpathSync OS.tmpdir()
        #...................................................................................................
        @eq ( Ωgld__15 = -> ( Object.keys dst ).sort()       ), [ 'app', 'user', ]
        @eq ( Ωgld__16 = -> ( Object.keys dst.app ).sort()   ), [ 'cache', 'config', 'data', 'dep_bin', 'home', 'log', 'name', 'node_modules', 'own_bin', 'temp' ]
        @eq ( Ωgld__17 = -> ( Object.keys dst.user ).sort()  ), [ 'home', 'name', 'temp', ]
        #...................................................................................................
        @eq ( Ωgld__18 = -> type_of dst.app                  ), 'pod'
        @eq ( Ωgld__19 = -> type_of dst.user                 ), 'pod'
        #...................................................................................................
        @eq ( Ωgld__20 = -> PATH.basename dst.app.cache      ), app_name
        @eq ( Ωgld__21 = -> PATH.basename dst.app.config     ), app_name
        @eq ( Ωgld__22 = -> PATH.basename dst.app.data       ), app_name
        @eq ( Ωgld__23 = -> dst.app.dep_bin                  ), PATH.resolve home, app_name, 'node_modules', '.bin'
        @eq ( Ωgld__24 = -> dst.app.home                     ), PATH.resolve home, app_name
        @eq ( Ωgld__25 = -> PATH.basename dst.app.log        ), app_name
        @eq ( Ωgld__26 = -> dst.app.name                     ), app_name
        @eq ( Ωgld__27 = -> dst.app.node_modules             ), PATH.resolve home, app_name, 'node_modules'
        @eq ( Ωgld__28 = -> dst.app.own_bin                  ), PATH.resolve home, app_name, 'bin'
        @eq ( Ωgld__29 = -> dst.app.temp                     ), PATH.resolve dst.user.temp, dst.user.name, app_name
        #...................................................................................................
        @eq ( Ωgld__30 = -> dst.user.home                    ), home
        @eq ( Ωgld__31 = -> dst.user.name                    ), user_nfo.username
        @eq ( Ωgld__32 = -> dst.user.temp                    ), temp
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
        @eq ( Ωgld__33 = -> ( Object.keys dst ).sort()       ), [ 'app', 'user', ]
        @eq ( Ωgld__34 = -> ( Object.keys dst.app ).sort()   ), [ 'cache', 'config', 'data', 'dep_bin', 'home', 'log', 'name', 'node_modules', 'own_bin', 'temp' ]
        @eq ( Ωgld__35 = -> ( Object.keys dst.user ).sort()  ), [ 'home', 'name', 'temp', ]
        #...................................................................................................
        @eq ( Ωgld__36 = -> type_of dst.app                  ), 'pod'
        @eq ( Ωgld__37 = -> type_of dst.user                 ), 'pod'
        #...................................................................................................
        @eq ( Ωgld__38 = -> PATH.basename dst.app.cache      ), '<YOUR-APP-NAME-HERE>'
        @eq ( Ωgld__39 = -> PATH.basename dst.app.config     ), '<YOUR-APP-NAME-HERE>'
        @eq ( Ωgld__40 = -> PATH.basename dst.app.data       ), '<YOUR-APP-NAME-HERE>'
        @eq ( Ωgld__41 = -> dst.app.dep_bin                  ), PATH.resolve home, '<YOUR-APP-NAME-HERE>', 'node_modules', '.bin'
        @eq ( Ωgld__42 = -> dst.app.home                     ), PATH.resolve home, '<YOUR-APP-NAME-HERE>'
        @eq ( Ωgld__43 = -> PATH.basename dst.app.log        ), '<YOUR-APP-NAME-HERE>'
        @eq ( Ωgld__44 = -> dst.app.name                     ), '<YOUR-APP-NAME-HERE>'
        @eq ( Ωgld__45 = -> dst.app.node_modules             ), PATH.resolve home, '<YOUR-APP-NAME-HERE>', 'node_modules'
        @eq ( Ωgld__46 = -> dst.app.own_bin                  ), PATH.resolve home, '<YOUR-APP-NAME-HERE>', 'bin'
        @eq ( Ωgld__47 = -> dst.app.temp                     ), PATH.resolve dst.user.temp, dst.user.name, '<YOUR-APP-NAME-HERE>'
        #...................................................................................................
        @eq ( Ωgld__48 = -> dst.user.home                    ), home
        @eq ( Ωgld__49 = -> dst.user.name                    ), user_nfo.username
        @eq ( Ωgld__50 = -> dst.user.temp                    ), temp
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
        @eq ( Ωgld__51 = -> ( Object.keys dst ).sort()       ), [ 'app', 'user', ]
        @eq ( Ωgld__52 = -> ( Object.keys dst.app ).sort()   ), [ 'cache', 'config', 'data', 'dep_bin', 'home', 'log', 'name', 'node_modules', 'own_bin', 'temp' ]
        @eq ( Ωgld__53 = -> ( Object.keys dst.user ).sort()  ), [ 'home', 'name', 'temp', ]
        #...................................................................................................
        @eq ( Ωgld__54 = -> type_of dst.app                  ), 'pod'
        @eq ( Ωgld__55 = -> type_of dst.user                 ), 'pod'
        #...................................................................................................
        @eq ( Ωgld__56 = -> PATH.basename dst.app.cache      ), app_name
        @eq ( Ωgld__57 = -> PATH.basename dst.app.config     ), app_name
        @eq ( Ωgld__58 = -> PATH.basename dst.app.data       ), app_name
        @eq ( Ωgld__59 = -> dst.app.dep_bin                  ), PATH.resolve home, app_home, app_name, 'node_modules', '.bin'
        @eq ( Ωgld__60 = -> dst.app.home                     ), PATH.resolve home, app_home, app_name
        @eq ( Ωgld__61 = -> PATH.basename dst.app.log        ), app_name
        @eq ( Ωgld__62 = -> dst.app.name                     ), app_name
        @eq ( Ωgld__63 = -> dst.app.node_modules             ), PATH.resolve home, app_home, app_name, 'node_modules'
        @eq ( Ωgld__64 = -> dst.app.own_bin                  ), PATH.resolve home, app_home, app_name, 'bin'
        @eq ( Ωgld__65 = -> dst.app.temp                     ), PATH.resolve dst.user.temp, dst.user.name, app_name
        #...................................................................................................
        @eq ( Ωgld__66 = -> dst.user.home                    ), home
        @eq ( Ωgld__67 = -> dst.user.name                    ), user_nfo.username
        @eq ( Ωgld__68 = -> dst.user.temp                    ), temp
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
      @eq ( Ωkvr__69 = -> type_of walk_js_tokens            ), 'generatorfunction'
      @eq ( Ωkvr__70 = -> type_of walk_essential_js_tokens  ), 'generatorfunction'
      #.....................................................................................................
      do =>
        @eq ( Ωgld__71 = -> type_of walk_js_tokens ''                                 ), 'generator'
        @eq ( Ωgld__72 = -> [ ( walk_js_tokens '' )..., ]                             ), []
        @eq ( Ωgld__73 = -> summarize walk_js_tokens            'var a = 9;'          ), "&&&IdentifierName'var'&&&WhiteSpace' '&&&IdentifierName'a'&&&WhiteSpace' '&&&Punctuator'='&&&WhiteSpace' '&&&NumericLiteral'9'&&&Punctuator';'&&&"
        @eq ( Ωgld__74 = -> summarize walk_essential_js_tokens  'var a = 9;'          ), "&&&IdentifierName'var'&&&IdentifierName'a'&&&Punctuator'='&&&NumericLiteral'9'&&&Punctuator';'&&&"
        @eq ( Ωgld__75 = -> summarize walk_essential_js_tokens  '"y"'                 ), """&&&StringLiteral'"y"'&&&"""
        @eq ( Ωgld__76 = -> summarize walk_essential_js_tokens  "'y'"                 ), "&&&StringLiteral'\\'y\\''&&&"
        @eq ( Ωgld__77 = -> summarize walk_essential_js_tokens  "`A${'y'}Z`"          ), "&&&TemplateHead'`A${'&&&StringLiteral'\\'y\\''&&&TemplateTail'}Z`'&&&"
        @eq ( Ωgld__78 = -> summarize walk_essential_js_tokens  "f`A${'y'}Z`"         ), "&&&IdentifierName'f'&&&TemplateHead'`A${'&&&StringLiteral'\\'y\\''&&&TemplateTail'}Z`'&&&"
        @eq ( Ωgld__79 = -> summarize walk_essential_js_tokens  "`A${`y`}Z`"          ), "&&&TemplateHead'`A${'&&&NoSubstitutionTemplate'`y`'&&&TemplateTail'}Z`'&&&"
        @eq ( Ωgld__79 = -> summarize walk_essential_js_tokens  "`A${require(`y`)}Z`" ), "&&&TemplateHead'`A${'&&&IdentifierName'require'&&&Punctuator'('&&&NoSubstitutionTemplate'`y`'&&&Punctuator')'&&&TemplateTail'}Z`'&&&"
        @eq ( Ωgld__79 = -> summarize walk_essential_js_tokens  "require = 777"       ), "&&&IdentifierName'require'&&&Punctuator'='&&&NumericLiteral'777'&&&"
        #...................................................................................................
        source = "const { d, } = require( 'some-module' ); /* require( 'other-module' ) */"
        for token from walk_essential_js_tokens source
          info 'Ωkvr__80', f"#{token.type}:>20c; #{rpr token.value}"
        @eq ( Ωgld__81 = -> summarize walk_essential_js_tokens source ), "&&&IdentifierName'const'&&&Punctuator'{'&&&IdentifierName'd'&&&Punctuator','&&&Punctuator'}'&&&Punctuator'='&&&IdentifierName'require'&&&Punctuator'('&&&StringLiteral'\\'some-module\\''&&&Punctuator')'&&&Punctuator';'&&&"
        #...................................................................................................
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    require_parse_require_statements: ->
      FS                          = require 'node:fs'
      SFMODULES                   = require '../../../apps/bricabrac-sfmodules'
      { type_of,                } = SFMODULES.unstable.require_type_of()
      { walk_js_tokens,
        walk_essential_js_tokens,
        rpr_token,
        summarize,              } = SFMODULES.require_walk_js_tokens()
      #.....................................................................................................
      # @eq ( Ωkvr__70 = -> type_of walk_essential_js_tokens  ), 'generatorfunction'
      #.....................................................................................................
      do =>
        history     = null
        literal_pkg = null
        line_nr     = null
        reset       = -> history = literal_pkg = line_nr = null
        source      = FS.readFileSync __filename, { encoding: 'utf-8', }
        for token from walk_essential_js_tokens source
          # info 'Ωkvr__80', f"#{token.type}:>20c; #{rpr token.value}"
          #.................................................................................................
          switch history
            #...............................................................................................
            when null
              unless ( token.type is 'IdentifierName' ) and ( token.value is 'require' )
                reset()
                continue
              history = rpr_token token
              line_nr = token.line_nr
            #...............................................................................................
            when "IdentifierName'require'"
              unless ( token.type is 'Punctuator' ) and ( token.value is '(' )
                reset()
                continue
              history += ';' + rpr_token token
            #...............................................................................................
            when "IdentifierName'require';Punctuator'('"
              unless ( token.type is 'StringLiteral' )
                reset()
                continue
              literal_pkg = token.value
              history += ';' + '[literal]'
            #...............................................................................................
            when "IdentifierName'require';Punctuator'(';[literal]"
              unless ( token.type is 'Punctuator' ) and ( token.value is ')' )
                reset()
                continue
              debug 'Ωkvr___7', "line #{line_nr} found require #{literal_pkg}"
        # @eq ( Ωgld__81 = -> summarize walk_essential_js_tokens source ), "&&&IdentifierName'const'&&&Punctuator'{'&&&IdentifierName'd'&&&Punctuator','&&&Punctuator'}'&&&Punctuator'='&&&IdentifierName'require'&&&Punctuator'('&&&StringLiteral'\\'some-module\\''&&&Punctuator')'&&&Punctuator';'&&&"
        #...................................................................................................
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    require_rpr_string: ->
      SFMODULES                   = require '../../../apps/bricabrac-sfmodules'
      { type_of,                } = SFMODULES.unstable.require_type_of()
      { rpr_string,             } = SFMODULES.require_rpr_string()
      #.....................................................................................................
      @eq ( Ωkvr__82 = -> type_of rpr_string ), 'function'
      #.....................................................................................................
      do =>
        @eq ( Ωgld__83 = -> rpr_string ''       ), """''"""
        @eq ( Ωgld__84 = -> rpr_string '"'      ), """'"'"""
        @eq ( Ωgld__85 = -> rpr_string "'"      ), """'\\''"""
        @eq ( Ωgld__86 = -> rpr_string 'pop'    ), """'pop'"""
        @eq ( Ωgld__87 = -> rpr_string '"pop"'  ), """'"pop"'"""
        @eq ( Ωgld__88 = -> rpr_string "'pop'"  ), """'\\'pop\\''"""
        #...................................................................................................
        return null
      #.....................................................................................................
      return null




#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test @tasks
  # ( new Test guytest_cfg ).test { require_get_local_destinations: @tasks.require_get_local_destinations, }
  # ( new Test guytest_cfg ).test { require_walk_js_tokens: @tasks.require_walk_js_tokens, }
  ( new Test guytest_cfg ).test { require_parse_require_statements: @tasks.require_parse_require_statements, }
