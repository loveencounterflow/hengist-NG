
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
      @eq ( Ωrxrk___1 = -> type_of expand_recursive_keys               ), 'function'
      strings =
        '${greet}':   "Hello ${who}"
        '${who}':     "dear ${target}"
        '${target}':  "world"
      strings_error =
        '${greet}':   "Hello ${who}"
        '${who}':     "dear ${target}"
        '${target}':  "world ${greet}"
      do =>
        expanded = expand_recursive_keys strings
        info 'Ωkvr___2', strings
        help 'Ωkvr___3', expanded
        help 'Ωkvr___4', expanded is strings
        return null
      # =>
      # { greet: "Hello dear world"
      #   who:   "dear world"
      #   target:"world" }
      do ( strings = strings_error ) =>
        error = null
        try expanded = expand_recursive_keys strings
        catch error then warn 'Ωkvr___5', error.message
        warn 'Ωkvr___6', "expected error, none was thrown" unless error?
        info 'Ωkvr___7', strings
        help 'Ωkvr___8', expanded
        return null
      #.....................................................................................................
      return null




#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test @tasks
  # ( new Test guytest_cfg ).test @tasks.builtins
