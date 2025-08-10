

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
SFMODULES                 = require '../../../apps/bricabrac-single-file-modules'
RANDOM_TOOLS              = SFMODULES.unstable.require_random_tools()


#===========================================================================================================
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
        echo 'Ω___5', count, ( rpr line[ .. 108 ] ) if ( count %% 1_000_000 ) is 0
      t1 = hrtime_as_bigint()
      echo 'Ω___6', 'demo_fast_readline_sync', f"#{( Number t1 - t0 ) / 1_000_000}:>20,.9f;"
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
        echo 'Ω___7', count, ( rpr line[ .. 108 ] ) if ( count %% 1_000_000 ) is 0
      t1 = hrtime_as_bigint()
      echo 'Ω___8', 'demo_guyfs_readline', f"#{( Number t1 - t0 ) / 1_000_000}:>20,.9f;"
      return null

    #-------------------------------------------------------------------------------------------------------
    demo_read_write_big_map = ->
      { hrtime_as_bigint,
        timeit,                     } = SFMODULES.unstable.require_benchmarking()
      { walk_lines_with_positions,  } = SFMODULES.unstable.require_fast_linereader()
      max_count                       = 1e5
      path                            = '/tmp/map-cache.jsonl'
      FS                              = require 'node:fs'
      #.....................................................................................................
      write_file = ->
        random_twl_map = RANDOM_TOOLS.get_texts_mapped_to_width_length { size: 10, }
        debug 'Ω__12', random_twl_map; process.exit 111
        FS.writeFileSync path, ''
        #...................................................................................................
        timeit write_file_sync = ->
          for entry from map
            FS.appendFileSync path, "#{JSON.stringify entry}\n"
          return null
        #...................................................................................................
        return null
      #.....................................................................................................
      read_file = ( map = null ) ->
        map  ?= new Map()
        #...................................................................................................
        timeit read_file_sync = ->
          for { line, } from walk_lines_with_positions path
            map.set ( JSON.parse line )...
          return null
        #...................................................................................................
        return map
      #.....................................................................................................
      do =>
        write_file()
        return null
      #.....................................................................................................
      do =>
        d         = read_file()
        count_rpr = ( new Intl.NumberFormat 'en-US' ).format d.size
        info 'Ω__12', "read #{count_rpr} entries"
        # debug 'Ω__13', d
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    demo_read_write_njs_sqlite = ->
      { hrtime_as_bigint,
        timeit,          } = SFMODULES.unstable.require_benchmarking()
      { walk_lines_with_positions,  } = SFMODULES.unstable.require_fast_linereader()
      max_count                       = 1e5
      path                            = '/tmp/map-cache.db'
      FS                              = require 'node:fs'
      SQLITE                          = require 'node:sqlite'
      { SQL }                         = require '../../../apps/dbay'
      #.....................................................................................................
      statements =
        #...................................................................................................
        create_table_segments_free: SQL"""
          drop table if exists segments;
          create table segments (
              segment_text      text    not null primary key,
              segment_width     integer not null,
              segment_length    integer not null );"""
        #...................................................................................................
        create_table_segments_checks: SQL"""
          drop table if exists segments;
          create table segments (
              segment_text      text    not null primary key,
              segment_width     integer not null,
              segment_length    integer not null,
            constraint segment_width_eqgt_zero  check ( segment_width  >= 0 ),
            constraint segment_length_eqgt_zero check ( segment_length >= 0 ) );"""
        #...................................................................................................
        insert_segment: SQL"""
          insert into segments  ( segment_text  )
                        values  ( $segment_text )
            on conflict ( segment_text ) do nothing
            returning *;"""
      #.....................................................................................................
      write_db = ->
        map       = new Map()
        old_size  = 0
        #...................................................................................................
        db = new SQLITE.DatabaseSync path
        db.exec statements.create_table_segments_free
        insert_segment = db.prepare statements.insert_segment
        #...................................................................................................
        for count in [ 1 .. max_count ]
          while map.size is old_size
            entry = [ get_unique_text(), ( GUY.rnd.random_integer 0, 10 ), ]
            map.set entry...
          old_size = map.size
        #...................................................................................................
        timeit write_db_sync = ->
          for entry from map
            FS.appendFileSync path, "#{JSON.stringify entry}\n"
          return null
        #...................................................................................................
        return null
      #.....................................................................................................
      read_db = ( map = null ) ->
        map  ?= new Map()
        #...................................................................................................
        timeit read_db_sync = ->
          for { line, } from walk_lines_with_positions path
            map.set ( JSON.parse line )...
          return null
        #...................................................................................................
        return map
      #.....................................................................................................
      do =>
        write_db()
        return null
      #.....................................................................................................
      do =>
        d         = read_db()
        count_rpr = ( new Intl.NumberFormat 'en-US' ).format d.size
        info 'Ω__12', "read #{count_rpr} entries"
        # debug 'Ω__13', d
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    # demo_fast_readline_sync()
    demo_read_write_big_map()
    demo_read_write_njs_sqlite()
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

