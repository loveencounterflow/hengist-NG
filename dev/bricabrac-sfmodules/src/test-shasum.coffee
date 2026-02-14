
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
  whisper }               = GUY.trm.get_loggers 'bricabrac-sfmodules/test-shasum'
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
  shasum: ->
    { get_shasum,
      get_sha1sum7d,              } = require '../../../apps/bricabrac-sfmodules/lib/shasum'
    # get_shasum = ( text, length = null, algorithm = 'sha256', encoding = 'hex' ) ->
    @eq     ( Ωbbsfm___1 = -> get_shasum    ''                ), 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
    @eq     ( Ωbbsfm___2 = -> get_shasum    '', null, 'sha1'  ), 'da39a3ee5e6b4b0d3255bfef95601890afd80709'
    @eq     ( Ωbbsfm___3 = -> get_sha1sum7d ''                ), 'da39a3e'
    @eq     ( Ωbbsfm___3 = -> get_sha1sum7d '{}'              ), 'bf21a9e'
    #.......................................................................................................
    return null


#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test @tasks
  ;null

