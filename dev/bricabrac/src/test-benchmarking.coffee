
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
  whisper }               = GUY.trm.get_loggers 'bricabrac-benchmarking'
{ rpr
  inspect
  echo
  white
  reverse
  log     }               = GUY.trm
# WGUY                      = require '../../../apps/webguy'
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG
{ f }                     = require '../../../apps/effstring'
SFMODULES                 = require '../../../apps/bricabrac-single-file-modules'
{ ansi_colors_and_effects: C, } = SFMODULES.require_ansi_colors_and_effects()


############################################################################################################
#
#===========================================================================================================
@tasks =

  #=========================================================================================================
  basics: ->
    { bigint_from_hrtime,
      hrtime_as_bigint,
      timeit,                 } = SFMODULES.unstable.require_benchmarking()
    { type_of,                } = SFMODULES.unstable.require_type_of()
    { with_capture_output,    } = SFMODULES.unstable.require_capture_output()
    { strip_ansi,             } = SFMODULES.require_strip_ansi()
    #.......................................................................................................
    do =>
      output = []
      output_handler = ( text ) -> output.push text
      # output_handler = ( text ) -> output += text
      result = with_capture_output output_handler, =>
        @eq ( Ωbbbt___1 = -> type_of timeit abc = -> debug "Ωbbbt___2 just a test"; return 9876 ), 'pod'
      output = strip_ansi ( output.join '' )
      echo reverse white output
      @eq ( Ωbbbt___3 = -> /\babc:\s+[0-9.]+/v.test output  ), true
      @eq ( Ωbbbt___4 = -> result                           ), 9876
      return null
    #.......................................................................................................
    return null



#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test @tasks
  # ( new Test guytest_cfg ).test @tasks.builtins
