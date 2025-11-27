

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
PATH                      = require 'node:path'
#-----------------------------------------------------------------------------------------------------------
SFMODULES                 = require '../../../apps/bricabrac-sfmodules'
{ Get_random,           } = SFMODULES.unstable.require_get_random()
{ hrtime_as_bigint,
  Benchmarker,          } = SFMODULES.unstable.require_benchmarking()
{ nameit,               } = SFMODULES.require_nameit()
#-----------------------------------------------------------------------------------------------------------
benchmarker = new Benchmarker()
timeit = ( P... ) -> benchmarker.timeit P...



#===========================================================================================================
@benchmarks = benchmarks =

  #---------------------------------------------------------------------------------------------------------
  run_benchmarks: ->

    #-------------------------------------------------------------------------------------------------------
    read_chunks_from_regular_fs = ->
      { walk_buffers_with_positions,   } = SFMODULES.unstable.require_fast_linereader()
      total             = benchmark_cfg.line_count
      count             = 0
      brand             = 'chunks'
      #.....................................................................................................
      timeit { total, brand, }, read_meanings_txt = ({ progress, }) ->
        for d from walk_buffers_with_positions benchmark_cfg.paths.regular
          count++
          progress()
        ;null
      #.....................................................................................................
      debug 'Ωbrl___1', { count, }
      return null

    #-------------------------------------------------------------------------------------------------------
    read_lines_from_regular_fs = ->
      { walk_lines_with_positions,   } = SFMODULES.unstable.require_fast_linereader()
      total             = benchmark_cfg.line_count
      count             = 0
      brand             = 'regular_fs'
      #.....................................................................................................
      timeit { total, brand, }, read_meanings_txt = ({ progress, }) ->
        for d from walk_lines_with_positions benchmark_cfg.paths.regular
          count++
          progress()
        ;null
      #.....................................................................................................
      debug 'Ωbrl___2', { count, }
      return null

    #-------------------------------------------------------------------------------------------------------
    read_lines_from_bvfs_mount = ->
      { walk_lines_with_positions,   } = SFMODULES.unstable.require_fast_linereader()
      total             = benchmark_cfg.line_count
      count             = 0
      brand             = 'bvfs_mount'
      #.....................................................................................................
      timeit { total, brand, }, read_meanings_txt = ({ progress, }) ->
        for d from walk_lines_with_positions benchmark_cfg.paths.bvfs
          count++
          progress()
        ;null
      #.....................................................................................................
      debug 'Ωbrl___3', { count, }
      return null

    #-------------------------------------------------------------------------------------------------------
    read_lines_from_bvfs_db = ->
      { Dbric,
        SQL,
        internals,    } = SFMODULES.unstable.require_dbric()
      bvfs              = Dbric.open benchmark_cfg.paths.bvfs_db
      total             = benchmark_cfg.line_count
      count             = 0
      read_lines        = bvfs.prepare SQL"select * from bv_lines where file_id = 8 order by line_nr;"
      brand             = 'bvfs_db'
      #.....................................................................................................
      timeit { total, brand, }, read_meanings_txt = ({ progress, }) ->
        for d from read_lines.iterate()
          count++
          progress()
        ;null
      #.....................................................................................................
      debug 'Ωbrl___5', { count, }
      return null

    #.......................................................................................................
    read_chunks_from_regular_fs()
    read_lines_from_regular_fs()
    read_lines_from_bvfs_mount()
    read_lines_from_bvfs_db()
    #.......................................................................................................
    regular_fs_lines_per_s = benchmark_cfg.line_count / ( benchmarker.brands.regular_fs.read_meanings_txt[ 0 ] / 1000 )
    bvfs_mount_lines_per_s = benchmark_cfg.line_count / ( benchmarker.brands.bvfs_mount.read_meanings_txt[ 0 ] / 1000 )
    bvfs_db_lines_per_s    = benchmark_cfg.line_count / ( benchmarker.brands.bvfs_db.read_meanings_txt[ 0 ] / 1000 )
    echo 'Ωbrl___6', f"regular_fs_lines: #{regular_fs_lines_per_s}:>20,.0f; Hz"
    echo 'Ωbrl___7', f"bvfs_mount_lines: #{bvfs_mount_lines_per_s}:>20,.0f; Hz"
    echo 'Ωbrl___8', f"bvfs_db_lines:    #{bvfs_db_lines_per_s   }:>20,.0f; Hz"
    #.......................................................................................................
    return null



#===========================================================================================================
benchmark_cfg =
  # max_count: 10
  # max_count: 1e6
  # max_count: 12345
  line_count: 54012
  paths:
    regular:  PATH.resolve __dirname, '../../../../../io/mingkwai-rack/jizura-datasources/data/flat-files/meaning/meanings.txt'
    bvfs:     PATH.resolve __dirname, '../../../apps/bvfs/mount/meanings.txt'
    bvfs_db:  PATH.resolve __dirname, '../../../apps/bvfs/bvfs.db'

#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test { benchmarks, }
  # { require_bricabrac_cfg,    } = SFMODULES.unstable.require_get_callsite()
  return null

