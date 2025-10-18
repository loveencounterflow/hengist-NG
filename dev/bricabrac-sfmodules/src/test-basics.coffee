
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
  require_dictionary_tools: ->
    SFMODULES                   = require '../../../apps/bricabrac-sfmodules'
    { type_of,                } = SFMODULES.unstable.require_type_of()
    { expand_dictionary,      } = SFMODULES.require_dictionary_tools()
    { get_local_destinations, } = SFMODULES.require_get_local_destinations()
    #.......................................................................................................
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
    #.......................................................................................................
    do =>
      strings =
        '${greet}':   "Hello ${who}"
        '${who}':     "dear ${target}"
        '${target}':  "world ${greet}"
      strings_copy  = { strings..., }
      @throws ( Ωkvrt___5 = -> expand_dictionary strings ), /cyclic reference detected for \$\{greet\}/
      @eq     ( Ωkvrt___6 = -> strings                       ), strings_copy
      return null
    #.......................................................................................................
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
    #.......................................................................................................
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
      #.....................................................................................................
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
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  require_get_local_destinations: ->
    SFMODULES                   = require '../../../apps/bricabrac-sfmodules'
    { type_of,                } = SFMODULES.unstable.require_type_of()
    { get_local_destinations, } = SFMODULES.require_get_local_destinations()
    PATH                        = require 'node:path'
    OS                          = require 'node:os'
    FS                          = require 'node:fs'
    #.......................................................................................................
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
    #.......................................................................................................
    @eq ( Ωkvrt__14 = -> type_of get_local_destinations ), 'function'
    #.......................................................................................................
    do =>
      app_name      = 'my-app-name'
      dst           = get_local_destinations { app_name, }
      user_nfo      = OS.userInfo()
      home          = FS.realpathSync OS.homedir()
      temp          = FS.realpathSync OS.tmpdir()
      #.....................................................................................................
      @eq ( Ωkvrt__15 = -> ( Object.keys dst ).sort()       ), [ 'app', 'user', ]
      @eq ( Ωkvrt__16 = -> ( Object.keys dst.app ).sort()   ), [ 'cache', 'config', 'data', 'dep_bin', 'home', 'log', 'name', 'node_modules', 'own_bin', 'temp' ]
      @eq ( Ωkvrt__17 = -> ( Object.keys dst.user ).sort()  ), [ 'home', 'name', 'temp', ]
      #.....................................................................................................
      @eq ( Ωkvrt__18 = -> type_of dst.app                  ), 'pod'
      @eq ( Ωkvrt__19 = -> type_of dst.user                 ), 'pod'
      #.....................................................................................................
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
      #.....................................................................................................
      @eq ( Ωkvrt__30 = -> dst.user.home                    ), home
      @eq ( Ωkvrt__31 = -> dst.user.name                    ), user_nfo.username
      @eq ( Ωkvrt__32 = -> dst.user.temp                    ), temp
      #.....................................................................................................
      return null
    #.......................................................................................................
    do =>
      app_name      = null
      dst           = get_local_destinations { app_name, }
      user_nfo      = OS.userInfo()
      home          = FS.realpathSync OS.homedir()
      temp          = FS.realpathSync OS.tmpdir()
      #.....................................................................................................
      @eq ( Ωkvrt__33 = -> ( Object.keys dst ).sort()       ), [ 'app', 'user', ]
      @eq ( Ωkvrt__34 = -> ( Object.keys dst.app ).sort()   ), [ 'cache', 'config', 'data', 'dep_bin', 'home', 'log', 'name', 'node_modules', 'own_bin', 'temp' ]
      @eq ( Ωkvrt__35 = -> ( Object.keys dst.user ).sort()  ), [ 'home', 'name', 'temp', ]
      #.....................................................................................................
      @eq ( Ωkvrt__36 = -> type_of dst.app                  ), 'pod'
      @eq ( Ωkvrt__37 = -> type_of dst.user                 ), 'pod'
      #.....................................................................................................
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
      #.....................................................................................................
      @eq ( Ωkvrt__48 = -> dst.user.home                    ), home
      @eq ( Ωkvrt__49 = -> dst.user.name                    ), user_nfo.username
      @eq ( Ωkvrt__50 = -> dst.user.temp                    ), temp
      #.....................................................................................................
      return null
    #.......................................................................................................
    do =>
      app_name      = 'frobulator'
      app_home      = '/path/to/projects'
      dst           = get_local_destinations { app_name, app_home }
      user_nfo      = OS.userInfo()
      home          = FS.realpathSync OS.homedir()
      temp          = FS.realpathSync OS.tmpdir()
      #.....................................................................................................
      @eq ( Ωkvrt__51 = -> ( Object.keys dst ).sort()       ), [ 'app', 'user', ]
      @eq ( Ωkvrt__52 = -> ( Object.keys dst.app ).sort()   ), [ 'cache', 'config', 'data', 'dep_bin', 'home', 'log', 'name', 'node_modules', 'own_bin', 'temp' ]
      @eq ( Ωkvrt__53 = -> ( Object.keys dst.user ).sort()  ), [ 'home', 'name', 'temp', ]
      #.....................................................................................................
      @eq ( Ωkvrt__54 = -> type_of dst.app                  ), 'pod'
      @eq ( Ωkvrt__55 = -> type_of dst.user                 ), 'pod'
      #.....................................................................................................
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
      #.....................................................................................................
      @eq ( Ωkvrt__66 = -> dst.user.home                    ), home
      @eq ( Ωkvrt__67 = -> dst.user.name                    ), user_nfo.username
      @eq ( Ωkvrt__68 = -> dst.user.temp                    ), temp
      #.....................................................................................................
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  require_rpr_string: ->
    SFMODULES                   = require '../../../apps/bricabrac-sfmodules'
    { type_of,                } = SFMODULES.unstable.require_type_of()
    { rpr_string,             } = SFMODULES.require_rpr_string()
    #.......................................................................................................
    @eq ( Ωkvrt_115 = -> type_of rpr_string ), 'function'
    #.......................................................................................................
    do =>
      @eq ( Ωkvrt_116 = -> rpr_string ''       ), """''"""
      @eq ( Ωkvrt_117 = -> rpr_string '"'      ), """'"'"""
      @eq ( Ωkvrt_118 = -> rpr_string "'"      ), """'\\''"""
      @eq ( Ωkvrt_119 = -> rpr_string 'pop'    ), """'pop'"""
      @eq ( Ωkvrt_120 = -> rpr_string '"pop"'  ), """'"pop"'"""
      @eq ( Ωkvrt_121 = -> rpr_string "'pop'"  ), """'\\'pop\\''"""
      #.....................................................................................................
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  require_path_tools: ->
    SFMODULES                   = require '../../../apps/bricabrac-sfmodules'
    { type_of,                } = SFMODULES.unstable.require_type_of()
    { is_inside,              } = SFMODULES.require_path_tools()
    #.......................................................................................................
    @eq ( Ωkvrt_122 = -> type_of is_inside ), 'function'
    #.......................................................................................................
    do =>
      @throws ( Ωkvrt_123 = -> is_inside '../path/to/file',       '/'                 ), /expected an absolute path as anchor/
      @throws ( Ωkvrt_124 = -> is_inside '../path/to/file',       'wat'               ), /expected an absolute path as anchor/
      @throws ( Ωkvrt_125 = -> is_inside '../path/to/file',       '../path/to/file'   ), /expected an absolute path as anchor/
      @throws ( Ωkvrt_126 = -> is_inside 'path/to/file',          '../path/to/file'   ), /expected an absolute path as anchor/
      #.....................................................................................................
      @eq     ( Ωkvrt_127 = -> is_inside '/',                     '/path/to/file'     ), true
      @eq     ( Ωkvrt_128 = -> is_inside '/path/to/file',         '/path/to/file'     ), true
      @eq     ( Ωkvrt_129 = -> is_inside '/path/to/file',         'oops'              ), true
      @eq     ( Ωkvrt_130 = -> is_inside '/path/../file',         '/file'             ), true
      @eq     ( Ωkvrt_131 = -> is_inside '/path/../file/.',       '/file'             ), true
      @eq     ( Ωkvrt_132 = -> is_inside '/path/../file/./././.', '/file'             ), true
      @eq     ( Ωkvrt_133 = -> is_inside '/path/to/file',         '.\\./oops'         ), true
      @eq     ( Ωkvrt_134 = -> is_inside '/path/to/file',         '..\\/oops'         ), true
      #.....................................................................................................
      @eq     ( Ωkvrt_135 = -> is_inside '/path/to/file/wat',     '/path/to/file'     ), false
      @eq     ( Ωkvrt_136 = -> is_inside '/path/to/file',         '../oops'           ), false
      @eq     ( Ωkvrt_137 = -> is_inside '/path/to/file',         '/oops'             ), false
      @eq     ( Ωkvrt_138 = -> is_inside '/path/to/file',         '/'                 ), false
      @eq     ( Ωkvrt_139 = -> is_inside '/path/../file',         '/path'             ), false
      #.....................................................................................................
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  is_tagfun_call: ->
    SFMODULES                 = require '../../../apps/bricabrac-sfmodules'
    { is_tagfun_call,                  } = SFMODULES.require_tagfun_tools()
    fn = ( P... ) -> is_tagfun_call P...
    @eq ( Ωbbsfm___1 = -> fn()             ), false
    @eq ( Ωbbsfm___2 = -> fn [ 1, 2, 3, ]  ), false
    @eq ( Ωbbsfm___3 = -> fn"[ 1, 2, 3, ]" ), true
    return null

  #---------------------------------------------------------------------------------------------------------
  escape_html_text: ->
    SFMODULES                 = require '../../../apps/bricabrac-sfmodules'
    { escape_html_text, } = SFMODULES.require_escape_html_text()
    @eq ( Ωbbsfm___4 = -> escape_html_text ''                    ), ''
    @eq ( Ωbbsfm___5 = -> escape_html_text 'abc'                 ), 'abc'
    @eq ( Ωbbsfm___6 = -> escape_html_text 'abc<tag>d&e&f</tag>' ), 'abc&lt;tag&gt;d&amp;e&amp;f&lt;/tag&gt;'
    return null

  #---------------------------------------------------------------------------------------------------------
  walk_tagfun_call_parts: ->
    SFMODULES                 = require '../../../apps/bricabrac-sfmodules'
    # { Html,                     } = require_html_class()
    # { escape_html_text,         } = require_escape_html_text()
    # { stackable_tagfun,         } = require_stackable_tagfun()
    { walk_parts,
      walk_nonempty_parts,
      walk_raw_parts,
      walk_raw_nonempty_parts,  } = SFMODULES.require_tagfun_tools()
    #-------------------------------------------------------------------------------------------------------
    @eq ( Ωbbsfm___7 = -> [ ( walk_parts""                  )..., ] ), [ { chunk: '', isa: 'chunk', }, ]
    @eq ( Ωbbsfm___8 = -> [ ( walk_parts ""                 )..., ] ), [ { chunk: '', isa: 'chunk', }, ]
    @eq ( Ωbbsfm___9 = -> [ ( walk_nonempty_parts""         )..., ] ), []
    @eq ( Ωbbsfm__10 = -> [ ( walk_nonempty_parts ''        )..., ] ), []
    @eq ( Ωbbsfm__11 = -> [ ( walk_parts"a"                 )..., ] ), [ { chunk: 'a', isa: 'chunk', }, ]
    @eq ( Ωbbsfm__12 = -> [ ( walk_parts"\na"               )..., ] ), [ { chunk: '\na', isa: 'chunk', }, ]
    @eq ( Ωbbsfm__13 = -> [ ( walk_raw_parts"\na"           )..., ] ), [ { chunk: '\\na', isa: 'chunk', }, ]
    @eq ( Ωbbsfm__14 = -> [ ( walk_parts"#{1}"              )..., ] ), [ { chunk: '', isa: 'chunk', }, { value: 1, isa: 'value', }, { chunk: '', isa: 'chunk', }, ]
    @eq ( Ωbbsfm__15 = -> [ ( walk_nonempty_parts"#{1}"     )..., ] ), [ { value: 1, isa: 'value', }, ]
    @eq ( Ωbbsfm__16 = -> [ ( walk_parts"a#{1}"             )..., ] ), [ { chunk: 'a', isa: 'chunk', }, { value: 1, isa: 'value', }, { chunk: '', isa: 'chunk', }, ]
    @eq ( Ωbbsfm__17 = -> [ ( walk_parts"#{1}#{2}"          )..., ] ), [ { chunk: '', isa: 'chunk', }, { value: 1, isa: 'value', }, { chunk: '', isa: 'chunk', }, { value: 2, isa: 'value', }, { chunk: '', isa: 'chunk', } ]
    @eq ( Ωbbsfm__18 = -> [ ( walk_nonempty_parts"#{1}#{2}" )..., ] ), [ { value: 1, isa: 'value', }, { value: 2, isa: 'value', }, ]
    @eq ( Ωbbsfm__19 = -> [ ( walk_parts"a#{1}z"            )..., ] ), [ { chunk: 'a', isa: 'chunk', }, { value: 1, isa: 'value', }, { chunk: 'z', isa: 'chunk', }, ]
    @eq ( Ωbbsfm__20 = -> [ ( walk_parts"a#{1}z#{2}"        )..., ] ), [ { chunk: 'a', isa: 'chunk', }, { value: 1, isa: 'value', }, { chunk: 'z', isa: 'chunk', }, { value: 2, isa: 'value', }, { chunk: '', isa: 'chunk', }, ]
    @eq ( Ωbbsfm__21 = -> [ ( walk_parts "a#{1}z#{2}"       )..., ] ), [ { chunk: 'a1z2', isa: 'chunk', }, ]
    @eq ( Ωbbsfm__22 = -> [ ( walk_parts 12                 )..., ] ), [ { chunk: '', isa: 'chunk', }, { value: 12, isa: 'value', }, { chunk: '', isa: 'chunk', }, ]
    @eq ( Ωbbsfm__23 = -> [ ( walk_nonempty_parts 12        )..., ] ), [ { value: 12, isa: 'value', }, ]
    #.........................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  get_next_free_filename: ->
    SFMODULES                 = require '../../../apps/bricabrac-sfmodules'
    { get_next_free_filename,
      get_next_filename,
      exists,
      cache_filename_re,      } = SFMODULES.unstable.require_next_free_filename()
    PATH                        = require 'node:path'
    #.......................................................................................................
    @throws ( Ωbbsfm__24 = -> get_next_free_filename null        ), /expected a text/
    @throws ( Ωbbsfm__25 = -> get_next_free_filename undefined   ), /expected a text/
    @throws ( Ωbbsfm__26 = -> get_next_free_filename true        ), /expected a text/
    @throws ( Ωbbsfm__27 = -> get_next_free_filename ''          ), /expected a nonempty text/
    #.......................................................................................................
    probes_and_matchers = [
      [ 'a',                                  [ false, '~.a.0001.bricabrac-cache',         '~.a.0001.bricabrac-cache', ], ]
      [ 'README.md',                          [ true,  '~.README.md.0001.bricabrac-cache', '~.README.md.0004.bricabrac-cache', ], ]
      [ '~.README.md.0001.bricabrac-cache',   [ true,  '~.README.md.0002.bricabrac-cache', '~.README.md.0004.bricabrac-cache', ], ]
      [ '~.README.md.0002.bricabrac-cache',   [ true,  '~.README.md.0003.bricabrac-cache', '~.README.md.0004.bricabrac-cache', ], ]
      [ '~.README.md.0003.bricabrac-cache',   [ true,  '~.README.md.0004.bricabrac-cache', '~.README.md.0004.bricabrac-cache', ], ]
      [ '~.README.md.0004.bricabrac-cache',   [ false, '~.README.md.0005.bricabrac-cache', '~.README.md.0005.bricabrac-cache', ], ]
      ]
    path_prefix = PATH.resolve PATH.join __dirname, '../../../assets/bricabrac/find-free-filename'
    #.......................................................................................................
    do =>
      for [ path, [ matcher_1, matcher_2, matcher_3, ], ] in probes_and_matchers
        abs_path      = PATH.join path_prefix, path
        abs_matcher_2 = PATH.join path_prefix, matcher_2
        abs_matcher_3 = PATH.join path_prefix, matcher_3
        @eq ( Ωbbsfm__28 = -> exists abs_path                    ), matcher_1
        @eq ( Ωbbsfm__29 = -> get_next_filename       abs_path   ), abs_matcher_2
        @eq ( Ωbbsfm__30 = -> get_next_free_filename  abs_path   ), abs_matcher_3
      return null
    #.......................................................................................................
    do =>
      for [ path, [ matcher_1, matcher_2, matcher_3, ], ] in probes_and_matchers
        rel_path      = PATH.relative process.cwd(), PATH.join path_prefix, path
        rel_matcher_2 = PATH.relative process.cwd(), PATH.join path_prefix, matcher_2
        rel_matcher_3 = PATH.relative process.cwd(), PATH.join path_prefix, matcher_3
        @eq ( Ωbbsfm__31 = -> exists rel_path                    ), matcher_1
        @eq ( Ωbbsfm__32 = -> get_next_filename       rel_path   ), rel_matcher_2
        @eq ( Ωbbsfm__33 = -> get_next_free_filename  rel_path   ), rel_matcher_3
      return null
    #.......................................................................................................
    do =>
      current_cwd = PATH.resolve process.cwd()
      process.chdir path_prefix
      try
        for [ path, [ matcher_1, matcher_2, matcher_3, ], ] in probes_and_matchers
          @eq ( Ωbbsfm__34 = -> exists path                    ), matcher_1
          @eq ( Ωbbsfm__35 = -> get_next_filename       path   ), matcher_2
          @eq ( Ωbbsfm__36 = -> get_next_free_filename  path   ), matcher_3
      finally
        process.chdir current_cwd
      return null
    #.......................................................................................................
    return null

  # #---------------------------------------------------------------------------------------------------------
  # get_next_free_filename_swap_suffix: ->
  #   { get_next_free_filename,
  #     swap_suffix,            } = SFMODULES.require_next_free_filename()
  #   #.......................................................................................................
  #   debug 'Ωbbsfm__37', intermediate_cache_path = get_next_free_filename '/path/to/reference.txt'
  #   debug 'Ωbbsfm__38', finalized_cache_path    = swap_suffix '.finalized'
  #   @eq     ( Ωbbsfm__39 = -> intermediate_cache_path           ), '/path/to/~.reference.txt.0001.finalized'
  #   rather use '/path/to/~.reference.txt.0001.bricabrac-cache.finalized'
  #   #.......................................................................................................
  #   return null

  #---------------------------------------------------------------------------------------------------------
  ANSI: ->
    SFMODULES                 = require '../../../apps/bricabrac-sfmodules'
    { ANSI, } = SFMODULES.require_ansi()
    @eq     ( Ωbbsfm__40 = -> ANSI.fg_from_hex '#a0a1a2'           ), '\x1B[38:2::160:161:162m'
    @eq     ( Ωbbsfm__41 = -> ANSI.bg_from_hex '#a0a1a2'           ), '\x1B[48:2::160:161:162m'
    @eq     ( Ωbbsfm__42 = -> ANSI.fg_from_dec [ 160, 161, 162 ]   ), '\x1B[38:2::160:161:162m'
    @eq     ( Ωbbsfm__43 = -> ANSI.bg_from_dec [ 160, 161, 162 ]   ), '\x1B[48:2::160:161:162m'
    @eq     ( Ωbbsfm__44 = -> ANSI.dec_from_hex '#a0a1a2'          ), [ 160, 161, 162 ]
    @throws ( Ωbbsfm__45 = -> ANSI.dec_from_hex '#xxxxxx'          ), /not a proper hexadecimal RGB code: '#xxxxxx'/
    @throws ( Ωbbsfm__46 = -> ANSI.dec_from_hex '#aaaaa'           ), /not a proper hexadecimal RGB code: '#aaaaa'/
    @throws ( Ωbbsfm__47 = -> ANSI.dec_from_hex '#aaaaabb'         ), /not a proper hexadecimal RGB code: '#aaaaabb'/
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  require_ansi_colors_and_effects: ->
    SFMODULES                 = require '../../../apps/bricabrac-sfmodules'
    { ansi_colors_and_effects: C, } = SFMODULES.require_ansi_colors_and_effects()
    @eq     ( Ωbbsfm__48 = -> C.red              ), '\x1B[38:2::255:0:16m'
    @eq     ( Ωbbsfm__49 = -> C.bg_red           ), '\x1B[48:2::255:0:16m'
    @eq     ( Ωbbsfm__50 = -> C.overline         ), '\x1b[53m'
    @eq     ( Ωbbsfm__51 = -> C.overline0        ), '\x1b[55m'
    @eq     ( Ωbbsfm__52 = -> C.default          ), '\x1b[39m'
    @eq     ( Ωbbsfm__53 = -> C.bg_default       ), '\x1b[49m'
    @eq     ( Ωbbsfm__54 = -> C.reset            ), '\x1b[0m'
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  require_ansi_chunker: ->
    SFMODULES                 = require '../../../apps/bricabrac-sfmodules'
    { ansi_colors_and_effects: C, } = SFMODULES.require_ansi_colors_and_effects()
    { Ansi_chunker,               } = SFMODULES.require_ansi_chunker()
    do =>
      echo '—————————————————————————————————————————————'
      text  = "ABC#{ C.black + C.bg_red + C.bold + 'DEF' + C.bold0 + C.default + C.bg_default }XYZ"
      ac    = new Ansi_chunker()
      urge 'Ωbbsfm__55',                ac.chunkify text
      # info 'Ωbbsfm__56', d for d from ( ac.chunkify text ).chunks
      info 'Ωbbsfm__57', d for d from ac
      info 'Ωbbsfm__58', ac.width
      info 'Ωbbsfm__59', ac.length
      info 'Ωbbsfm__60', ac.has_ansi
      info 'Ωbbsfm__61', ac.text
    do =>
      echo '—————————————————————————————————————————————'
      text  = 'ABCDEFXYZ'
      ac    = new Ansi_chunker()
      urge 'Ωbbsfm__62',                ac.chunkify text
      # info 'Ωbbsfm__63', d for d from ( ac.chunkify text ).chunks
      info 'Ωbbsfm__64', d for d from ac
      info 'Ωbbsfm__65', ac.width
      info 'Ωbbsfm__66', ac.length
      info 'Ωbbsfm__67', ac.has_ansi
      info 'Ωbbsfm__68', ac.text
    do =>
      echo '—————————————————————————————————————————————'
      text  = "#{ C.black + C.bg_red + C.bold + C.bold0 + C.default + C.bg_default }"
      ac    = new Ansi_chunker()
      urge 'Ωbbsfm__69',                ac.chunkify text
      # info 'Ωbbsfm__70', d for d from ( ac.chunkify text ).chunks
      info 'Ωbbsfm__71', d for d from ac
      info 'Ωbbsfm__72', ac.width
      info 'Ωbbsfm__73', ac.length
      info 'Ωbbsfm__74', ac.has_ansi
      info 'Ωbbsfm__75', ac.text
    do =>
      echo '—————————————————————————————————————————————'
      text  = ''
      ac    = new Ansi_chunker()
      urge 'Ωbbsfm__76',                ac.chunkify text
      # info 'Ωbbsfm__77', d for d from ( ac.chunkify text ).chunks
      info 'Ωbbsfm__78', d for d from ac
      info 'Ωbbsfm__79', ac.width
      info 'Ωbbsfm__80', ac.length
      info 'Ωbbsfm__81', ac.has_ansi
      info 'Ωbbsfm__82', ac.text
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  require_strip_ansi: ->
    SFMODULES                 = require '../../../apps/bricabrac-sfmodules'
    { strip_ansi, internals:
      { ansi_re,
        own_single_ansi_re,     } } = SFMODULES.require_strip_ansi()
    { ansi_colors_and_effects: C, } = SFMODULES.require_ansi_colors_and_effects()
    do =>
      text  = "ABC#{ C.black + C.bg_red + C.bold + 'DEF' + C.bold0 + C.default + C.bg_default }XYZ"
      urge 'Ωbbsfm__83', rpr strip_ansi text
      info 'Ωbbsfm__84', rpr text.split ansi_re
      info 'Ωbbsfm__85', rpr text.split own_single_ansi_re
      @eq ( Ωbbsfm__86 = -> strip_ansi text ), 'ABCDEFXYZ'
    do =>
      text  = 'ABCDEFXYZ'
      urge 'Ωbbsfm__87', rpr strip_ansi text
      @eq ( Ωbbsfm__88 = -> strip_ansi text ), 'ABCDEFXYZ'
    do =>
      text  = "#{ C.black + C.bg_red + C.bold + C.bold0 + C.default + C.bg_default }"
      urge 'Ωbbsfm__89', rpr strip_ansi text
      @eq ( Ωbbsfm__90 = -> strip_ansi text ), ''
    do =>
      text  = ''
      urge 'Ωbbsfm__91', rpr strip_ansi text
      @eq ( Ωbbsfm__92 = -> strip_ansi text ), ''
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  require_get_callsite: ->
    SFMODULES                 = require '../../../apps/bricabrac-sfmodules'
    { get_callsite,
      get_app_details,
      require_from_app_folder,
      get_bricabrac_cfg,        } = SFMODULES.unstable.require_get_callsite()
    PATH                          = require 'node:path'
    URL                           = require 'node:url'
    app_path                      = PATH.resolve PATH.join __dirname, '../../../'
    package_path                  = PATH.join app_path, 'package.json'
    version                       = ( require '../../../package.json' ).version
    name                          = ( require '../../../package.json' ).name
    fallback                      = Symbol 'fallback'
    bricabrac_cfg_1               = require_from_app_folder { path: 'bricabrac.cfg.js', }
    bricabrac_cfg_2               = get_bricabrac_cfg()
    app                           = get_app_details()
    datastore_path                = PATH.join app.path, 'hengist-ng.sqlite'
    callsite                      = get_callsite { sourcemapped: false, }
    debug 'Ωbbsfm__93', bricabrac_cfg_2
    # @eq ( Ωbbsfm__94 = -> URL.fileURLToPath callsite.scriptName                 ), __filename
    @eq     ( Ωbbsfm__95 = -> callsite.scriptName                                       ), __filename
    @eq     ( Ωbbsfm__96 = -> app.path                                                  ), app_path
    @eq     ( Ωbbsfm__97 = -> app.package_path                                          ), package_path
    @eq     ( Ωbbsfm__98 = -> app.version                                               ), version
    @eq     ( Ωbbsfm__99 = -> app.name                                                  ), name
    @eq     ( Ωbbsfm_100 = -> bricabrac_cfg_1.datastore.name                            ), 'hengist-ng'
    @eq     ( Ωbbsfm_101 = -> get_bricabrac_cfg { path: 'nosuchpath', fallback, }   ), fallback
    @throws ( Ωbbsfm_102 = -> get_bricabrac_cfg { path: 'nosuchpath', }             ), /Cannot find module/i
    @eq     ( Ωbbsfm_103 = -> bricabrac_cfg_2.datastore.name                            ), 'hengist-ng'
    @eq     ( Ωbbsfm_104 = -> bricabrac_cfg_2.datastore.path                            ), datastore_path
    @eq     ( Ωbbsfm_105 = -> bricabrac_cfg_2.app.name                                  ), name
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  require_get_callsite: ->
    SFMODULES                 = require '../../../apps/bricabrac-sfmodules'
    { get_callsite,
      get_callsite_path,        } = SFMODULES.unstable.require_get_callsite()
    PATH                          = require 'node:path'
    URL                           = require 'node:url'
    app_path                      = PATH.resolve PATH.join __dirname, '../../../'
    package_path                  = PATH.join app_path, 'package.json'
    version                       = ( require '../../../package.json' ).version
    name                          = ( require '../../../package.json' ).name
    fallback                      = Symbol 'fallback'
    callsite                      = get_callsite { sourcemapped: false, }
    filename                      = __filename.replace /^(.+)\/lib\/([^\/]+?)\.js/, '$1/src/$2.coffee'
    @eq     ( Ωbbsfm_106 = -> callsite.scriptName ), __filename
    @eq     ( Ωbbsfm_107 = -> get_callsite_path() ), filename
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  require_get_app_details: ->
    SFMODULES                 = require '../../../apps/bricabrac-sfmodules'
    { get_app_details,
      require_from_app_folder,
      get_bricabrac_cfg, }        = SFMODULES.unstable.require_get_app_details()
    PATH                          = require 'node:path'
    URL                           = require 'node:url'
    app_path                      = PATH.resolve PATH.join __dirname, '../../../'
    package_path                  = PATH.join app_path, 'package.json'
    version                       = ( require '../../../package.json' ).version
    name                          = ( require '../../../package.json' ).name
    fallback                      = Symbol 'fallback'
    bricabrac_cfg_1               = require_from_app_folder { path: 'bricabrac.cfg.js', }
    bricabrac_cfg_2               = get_bricabrac_cfg()
    app                           = get_app_details()
    datastore_path                = PATH.join app.path, 'hengist-ng.sqlite'
    # debug 'Ωbbsfm_108', bricabrac_cfg_2
    # @eq ( Ωbbsfm_109 = -> URL.fileURLToPath callsite.scriptName                 ), __filename
    @eq     ( Ωbbsfm_110 = -> app.path                                                  ), app_path
    @eq     ( Ωbbsfm_111 = -> app.package_path                                          ), package_path
    @eq     ( Ωbbsfm_112 = -> app.version                                               ), version
    @eq     ( Ωbbsfm_113 = -> app.name                                                  ), name
    @eq     ( Ωbbsfm_114 = -> bricabrac_cfg_1.datastore.name                            ), 'hengist-ng'
    @eq     ( Ωbbsfm_115 = -> get_bricabrac_cfg { path: 'nosuchpath', fallback, }       ), fallback
    @throws ( Ωbbsfm_116 = -> get_bricabrac_cfg { path: 'nosuchpath',           }       ), /Cannot find module/i
    @eq     ( Ωbbsfm_117 = -> bricabrac_cfg_2.datastore.name                            ), 'hengist-ng'
    @eq     ( Ωbbsfm_118 = -> bricabrac_cfg_2.datastore.path                            ), datastore_path
    @eq     ( Ωbbsfm_119 = -> bricabrac_cfg_2.app.name                                  ), name
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  require_loupe: ->
    SFMODULES                 = require '../../../apps/bricabrac-sfmodules'
    LOUPE = SFMODULES.require_loupe()
    #.......................................................................................................
    @eq     ( Ωbbsfm_120 = -> typeof LOUPE.rpr                                  ), 'function'
    @eq     ( Ωbbsfm_121 = -> LOUPE.rpr {}                                      ), '{}'
    @eq     ( Ωbbsfm_121 = -> LOUPE.rpr +0                                      ), '0'
    @eq     ( Ωbbsfm_121 = -> LOUPE.rpr -0                                      ), '0'
    @eq     ( Ωbbsfm_122 = -> LOUPE.rpr "'\n'"                                  ), "'\\'\\n\\''"
    @eq     ( Ωbbsfm_122 = -> LOUPE.rpr '"\n"'                                  ), """'"\\n"'"""
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
  ( new Test guytest_cfg ).test { require_dictionary_tools: @tasks.require_dictionary_tools, }
  # demo_improved_structure()