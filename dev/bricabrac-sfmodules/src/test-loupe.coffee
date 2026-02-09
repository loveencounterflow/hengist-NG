

'use strict'

#===========================================================================================================
GUY                       = require 'guy'
{ alert
  debug
  help
  info
  plain
  praise
  urge
  warn
  whisper }               = GUY.trm.get_loggers 'bricabrac-dbric'
{ rpr
  inspect
  echo
  white
  green
  blue
  gold
  grey
  red
  bold
  reverse
  log     }               = GUY.trm
{ f }                     = require '../../../apps/effstring'
# write                     = ( p ) -> process.stdout.write p
{ nfa }                   = require '../../../apps/normalize-function-arguments'
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG
SFMODULES                 = require '../../../apps/bricabrac-sfmodules'
FS                        = require 'node:fs'
PATH                      = require 'node:path'
#===========================================================================================================
# LOUPE                     = ( require '../../../apps/bricabrac-sfmodules/lib/loupe-brics' ).require_loupe()
LOUPE                     = ( require '../../../apps/bricabrac-sfmodules/lib/loupe-brics' ).require_loupe()
{ type_of,              } = ( require '../../../apps/bricabrac-sfmodules/lib/unstable-rpr-type_of-brics' ).require_type_of()


#===========================================================================================================
@tests = tests =

  #---------------------------------------------------------------------------------------------------------
  loupe_rpr: ->
    #.......................................................................................................
    @eq     ( Ωloupe___1 = -> type_of LOUPE.rpr     ), 'function'
    @eq     ( Ωloupe___2 = -> LOUPE.rpr +0          ), '0'
    @eq     ( Ωloupe___3 = -> LOUPE.rpr -0          ), '0'
    @eq     ( Ωloupe___4 = -> LOUPE.rpr 123456      ), '123456'
    #.......................................................................................................
    do =>
      d = []
      d.push d
      @eq     ( Ωloupe___5 = -> LOUPE.rpr d      ), '123456'
      ;null
    #.......................................................................................................
    do =>
      d = {}
      d.d = d
      @eq     ( Ωloupe___6 = -> LOUPE.rpr d      ), '{ d: [Circular] }'
      ;null
    #.......................................................................................................
    do =>
      d = new Set()
      d.add d
      @eq     ( Ωloupe___7 = -> LOUPE.rpr d      ), '123456'
      ;null
    #.......................................................................................................
    return null


#===========================================================================================================
if module is require.main then await do =>
  do_coverage = true
  do_coverage = false
  if do_coverage
    { Coverage_analyzer,          } = require '../../../apps/bricabrac-sfmodules/lib/coverage-analyzer'
    ca = new Coverage_analyzer()
    ca.wrap_class LOUPE
  #---------------------------------------------------------------------------------------------------------
  guytest_cfg = { throw_on_error: false,  show_passes: true, report_checks: true, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test { tests, }
  # ( new Test guytest_cfg ).test { dbric_dynamic_build_properties: tests.dbric_dynamic_build_properties, }
  #---------------------------------------------------------------------------------------------------------
  if do_coverage
    warn 'Ωloupe___8', "not covered:", reverse name for name in ca.unused_names if ca.unused_names.length > 0
    # help 'Ωloupe___9', ca.used_names
    # urge 'Ωloupe__10', count, names for count, names of ca.names_by_counts
  #=========================================================================================================
  ;null
