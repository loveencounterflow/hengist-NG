
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
# WGUY                      = require '../../../apps/webguy'
# GTNG                      = require '../../../apps/guy-test-NG'
# { Test                  } = GTNG
{ f }                     = require '../../../apps/effstring'
SFMODULES                 = require '../../../apps/bricabrac-single-file-modules'
{ timeit,               } = SFMODULES.unstable.require_benchmarking()


#===========================================================================================================
capture_output = ( handler ) ->
  old_stdout_write      = process.stdout.write
  old_stderr_write      = process.stderr.write
  process.stdout.write  = ( text, P... ) -> handler text, P...
  process.stderr.write  = ( text, P... ) -> handler text, P...
  return reset_output = ->
    process.stdout.write = old_stdout_write
    process.stderr.write = old_stderr_write
    return null

#===========================================================================================================
class Benchmarks

  #---------------------------------------------------------------------------------------------------------
  run: ->
    timeit hollerith_reference_1201  = => @_run 'hollerith-reference-1201'
    timeit hollerith_current         = => @_run '../../../apps/hollerith'
    return null

  #---------------------------------------------------------------------------------------------------------
  _run: ( require_path ) ->
    { internals,
      Hollerith,
      test,                       } = require require_path
    { Test_hollerith,             } = test
    #=======================================================================================================
    for name, cfg of internals
      continue unless name.startsWith 'constants_'
      codec       = new Hollerith cfg
      t           = new Test_hollerith codec
      try
        stdout_buffer = []
        reset_output  = capture_output ( text ) -> stdout_buffer.push text
        test_result   = t.test_sorting()
      finally
        reset_output()
        # debug 'Ωhllt___1', stdout_buffer.shift().trimEnd() while stdout_buffer.length > 0
      unless test_result?.success
        warn 'Ωhllt___2', require_path, test_result
      # @eq ( Ωhllt___3 = -> type_of t.test_sorting                                 ), 'function'
      # @eq ( Ωhllt___4 = -> type_of test_result                                    ), 'pod'
      # @eq ( Ωhllt___5 = -> test_result.success                                    ), true
      # @eq ( Ωhllt___6 = -> type_of test_result.probe_count                        ), 'float'
      # @eq ( Ωhllt___7 = -> type_of test_result.hit_count                          ), 'float'
      # @eq ( Ωhllt___8 = -> type_of test_result.miss_count                         ), 'float'
      # for _ in [ 0 ... test_result.hit_count ]
      #   null
      #   # @eq ( Ωhllt___9 = -> true ), true
      # for _ in [ 0 ... test_result.miss_count ]
      #   null
        # @eq ( Ωhllt__10 = -> true ), false
      #.....................................................................................................
      # help 'Ωvdx__11', require_path
      #.....................................................................................................
      break # !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    #.......................................................................................................
    return null


#===========================================================================================================
benchmarks = new Benchmarks()

#===========================================================================================================
if module is require.main then await do =>
  { show_requires, } = require '../../snippets/lib/demo-show-requires.js'
  show_requires '../../../apps/hollerith'
  #---------------------------------------------------------------------------------------------------------
  benchmarks.run()
  return null

