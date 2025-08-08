

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
  whisper }               = GUY.trm.get_loggers 'benchmark-unicode-character-width.coffee'
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
SFMODULES                 = require '../../../apps/bricabrac-single-file-modules'
PATH                      = require 'node:path'

Object.assign SFMODULES.unstable,
  #===========================================================================================================
  ### NOTE Future Single-File Module ###
  require_readline_optimized: ->

    FS  = require 'node:fs'
    nl  = '\n'.codePointAt 0

    #-----------------------------------------------------------------------------------------------------------
    walk_lines_with_positions_async = ( path ) ->
      # from mmomtchev/readcsv/readcsv-buffered-opt.js
      readstream  = FS.createReadStream path
      remainder   = ''
      #.........................................................................................................
      for await buffer from readstream
        start = 0
        stop  = null
        while ( stop = buffer.indexOf nl, start ) isnt -1
          # debug 'Ω___1', { start, stop, }, rpr ( ( buffer.slice start, stop ).toString 'utf-8' )[ .. 108 ]
          if ( start == 0 ) and ( remainder.length > 0 )
            # debug 'Ω___2', remainder + buffer.slice 0, stop
            yield remainder + buffer.slice 0, stop + 1
            remainder = ''
          else
            yield ( buffer.slice start, stop + 1 ).toString 'utf-8'
          start = stop + 1
        remainder = buffer.slice start
      #.........................................................................................................
      return null

    #===========================================================================================================
    return exports = { walk_lines_with_positions_async, }

#===========================================================================================================
@benchmarks = benchmarks =

  #---------------------------------------------------------------------------------------------------------
  run_benchmarks: ->

    #-------------------------------------------------------------------------------------------------------
    demo_fast_readline_async = ->
      { hrtime_as_bigint, } = SFMODULES.unstable.require_benchmarking()
      relpath = '../../../../../3rd-party-repos/mmomtchev-readcsv-for-read-file-benchmark'
      { walk_lines_with_positions_async, } = SFMODULES.unstable.require_readline_optimized()
      path = PATH.resolve PATH.join __dirname, relpath, 'allCountries.txt'
      count = 0
      t0 = hrtime_as_bigint()
      for await line from walk_lines_with_positions_async path
        count++
        # return null if count > 100
        echo 'Ω___3', count, ( rpr line[ .. 108 ] ) if ( count %% 1_000_000 ) is 0
      t1 = hrtime_as_bigint()
      echo 'Ω___4', 'demo_fast_readline_async', f"#{( Number t1 - t0 ) / 1_000_000}:>20,.9f;"
      return null

    #-------------------------------------------------------------------------------------------------------
    demo_fast_readline_sync = ->
      { hrtime_as_bigint, } = SFMODULES.unstable.require_benchmarking()
      relpath = '../../../../../3rd-party-repos/mmomtchev-readcsv-for-read-file-benchmark'
      { walk_lines_with_positions, } = SFMODULES.unstable.require_fast_linereader()
      path = PATH.resolve PATH.join __dirname, relpath, 'allCountries.txt'
      count = 0
      t0 = hrtime_as_bigint()
      for { line, } from walk_lines_with_positions path
        count++
        # return null if count > 100
        echo 'Ω___3', count, ( rpr line[ .. 108 ] ) if ( count %% 1_000_000 ) is 0
      t1 = hrtime_as_bigint()
      echo 'Ω___4', 'demo_fast_readline_sync', f"#{( Number t1 - t0 ) / 1_000_000}:>20,.9f;"
      return null

    #-------------------------------------------------------------------------------------------------------
    demo_guyfs_readline = ->
      { hrtime_as_bigint, } = SFMODULES.unstable.require_benchmarking()
      relpath = '../../../../../3rd-party-repos/mmomtchev-readcsv-for-read-file-benchmark'
      path = PATH.resolve PATH.join __dirname, relpath, 'allCountries.txt'
      count = 0
      t0 = hrtime_as_bigint()
      for { line, } from GUY.fs.walk_lines_with_positions path
        count++
        # return null if count > 100
        echo 'Ω___5', count, ( rpr line[ .. 108 ] ) if ( count %% 1_000_000 ) is 0
      t1 = hrtime_as_bigint()
      echo 'Ω___6', 'demo_guyfs_readline', f"#{( Number t1 - t0 ) / 1_000_000}:>20,.9f;"
      return null

    #-------------------------------------------------------------------------------------------------------
    demo_fast_readline_sync()
    # await demo_fast_readline_async()
    # demo_guyfs_readline()
    #.......................................................................................................
    return null




#===========================================================================================================
if module is require.main then await do =>
  # demo_infinite_proxy()
  # demo_colorful_proxy()
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  await ( new Test guytest_cfg ).async_test { benchmarks, }
  return null

