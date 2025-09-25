
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
  whisper }               = GUY.trm.get_loggers 'hollerith-benchmarks'
{ rpr
  inspect
  echo
  lime
  gold
  red
  blue
  reverse
  log     }               = GUY.trm
#-----------------------------------------------------------------------------------------------------------
PATH                      = require 'node:path'
# WGUY                      = require '../../../apps/webguy'
# GTNG                      = require '../../../apps/guy-test-NG'
# { Test                  } = GTNG
{ f }                     = require '../../../apps/effstring'
SFMODULES                 = require '../../../apps/bricabrac-sfmodules'
{ Benchmarker,
  timeit,               } = SFMODULES.unstable.require_benchmarking()
{ with_capture_output,  } = SFMODULES.unstable.require_capture_output()


#===========================================================================================================
class Benchmarks

  #---------------------------------------------------------------------------------------------------------
  run: ->
    @benchmarker = new Benchmarker()
    @_run 'hollerith-reference-1201'
    @_run '../../../apps/hollerith'
    help 'Ωhllt___2', @benchmarke.rget_averages_by_brands()
    help 'Ωhllt___3', @benchmarke.rget_averages_by_tasks()
    return null

  #---------------------------------------------------------------------------------------------------------
  _run: ( require_path ) ->
    { internals,
      Hollerith,
      test,                       } = require require_path
    { Test_hollerith,             } = test
    #.......................................................................................................
    brand = PATH.basename require_path
    for name, cfg of internals
      continue unless name.startsWith 'constants_'
      codec           = new Hollerith cfg
      t               = new Test_hollerith codec
      task            = name.replace /^constants_/g, ''
      output          = ''
      output_handler  = ( text ) -> output += text
      test_result     = @benchmarker.timeit brand, task, =>
        with_capture_output output_handler, => t.test_sorting()
      unless test_result?.success
        warn 'Ωhllt___1', require_path, test_result
    #.......................................................................................................
    return null


#===========================================================================================================
benchmarks = new Benchmarks()

#===========================================================================================================
@run = ->
  { show_requires, } = require '../../snippets/lib/demo-show-requires.js'
  show_requires '../../../apps/hollerith'
  #---------------------------------------------------------------------------------------------------------
  benchmarks.run()
  return null

#===========================================================================================================
if module is require.main then await do => await @run()

