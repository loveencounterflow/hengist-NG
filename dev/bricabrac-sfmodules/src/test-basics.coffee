
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
    require_expand_recursive_keys: ->
      SFMODULES                   = require '../../../apps/bricabrac-sfmodules'
      { type_of,                } = SFMODULES.unstable.require_type_of()
      { expand_recursive_keys,  } = SFMODULES.require_expand_recursive_keys()
      #.....................................................................................................
      @eq ( Ωkvr___1 = -> type_of expand_recursive_keys ), 'function'
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
        expanded      = expand_recursive_keys strings
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
        @throws ( Ωkvr___5 = -> expand_recursive_keys strings ), /cyclic reference detected for \$\{greet\}/
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
        for key, value of expand_recursive_keys strings
          debug 'Ωkvr___7', f"#{key}:<20c; #{rpr value}"
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    require_get_local_destinations: ->
      SFMODULES                   = require '../../../apps/bricabrac-sfmodules'
      { type_of,                } = SFMODULES.unstable.require_type_of()
      { get_local_destinations, } = SFMODULES.require_get_local_destinations()
      PATH                        = require 'node:path'
      #.....................................................................................................
      @eq ( Ωkvr___8 = -> type_of get_local_destinations ), 'function'
      do =>
        app_name      = 'my-app-name'
        destinations  = get_local_destinations app_name
        @eq ( Ωgld___9 = -> type_of destinations.data               ), 'text'
        @eq ( Ωgld__10 = -> type_of destinations.config             ), 'text'
        @eq ( Ωgld__11 = -> type_of destinations.cache              ), 'text'
        @eq ( Ωgld__12 = -> type_of destinations.log                ), 'text'
        @eq ( Ωgld__13 = -> type_of destinations.temp               ), 'text'
        @eq ( Ωgld__14 = -> PATH.basename destinations.data         ), app_name
        @eq ( Ωgld__15 = -> PATH.basename destinations.config       ), app_name
        @eq ( Ωgld__16 = -> PATH.basename destinations.cache        ), app_name
        @eq ( Ωgld__17 = -> PATH.basename destinations.log          ), app_name
        @eq ( Ωgld__18 = -> PATH.basename destinations.temp         ), app_name
        return null
      #.....................................................................................................
      return null




#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test @tasks
  # ( new Test guytest_cfg ).test @tasks.builtins
