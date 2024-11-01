

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
  whisper }               = GUY.trm.get_loggers 'diatrieb/test-all'
{ rpr
  inspect
  echo
  reverse
  log     }               = GUY.trm
WGUY                      = require '../../../apps/webguy'
types                     = new ( require 'intertype' ).Intertype()
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG



############################################################################################################
#
#===========================================================================================================
@diatribe_tasks =

  #---------------------------------------------------------------------------------------------------------
  interface: ->
    DIATRIBE     = require '../../../apps/diatribe'
    @eq ( Ωit___2 = -> true ), true
    #.......................................................................................................
    return null

#===========================================================================================================
if module is require.main then await do =>
  ( new Test { throw_on_error: false, } ).test @diatribe_tasks


