

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
  timeit,               } = SFMODULES.unstable.require_benchmarking()
{ nameit,               } = SFMODULES.require_nameit()


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
  ### NOTE Future Single-File Module ###
  require_get_random_additions: ->
    { internals, } = SFMODULES.unstable.require_get_random()

    #=========================================================================================================
    class Get_random_ext extends Get_random

      #-------------------------------------------------------------------------------------------------------
      get_texts_mapped_to_width_length: ( cfg ) ->
        { min,
          max,
          length,
          size,
          min_length,
          max_length,
          filter,
          on_stats,
          on_exhaustion,
          max_rounds,
          progress,     } = { internals.templates.set_of_texts..., cfg..., }
        { min_length,
          max_length,   } = @_get_min_max_length { length, min_length, max_length, }
        length_is_const   = min_length is max_length
        length            = min_length
        R                 = new Map()
        producer          = @text_producer { min, max, length, min_length, max_length, filter, }
        stats             = @_new_stats { name: 'set_of_texts', on_stats, on_exhaustion, max_rounds, }
        get_width         = @integer_producer { min: 1, max: 10, }
        #.....................................................................................................
        for text from @walk_unique { producer, n: size, on_stats, on_exhaustion, max_rounds, }
          progress() if progress?
          R.set text, [ text.length, get_width(), ]
        return ( stats.finish R )

    #===========================================================================================================
    return exports = { Get_random_ext, internals, }


#===========================================================================================================
cache = new Map()
get_random_twl_map = ({ size = 10 }={}) -> timeit { total: size, }, get_random_twl_map_ = ({ progress, }) =>
  key = "twl_map{size:#{size}}"
  return R if ( R = cache.get key )?
  { Get_random_ext,             } = SFMODULES.unstable.require_get_random_additions()
  get_random                      = new Get_random_ext()
  R = get_random.get_texts_mapped_to_width_length {
    size, min_length: 1, max_length: 20, min: 0x021, max: 0x058f, on_exhaustion: 'stop', progress, }
    # filter: /^\p{L}+$/vi, }
  cache.set key, R
  return R

#===========================================================================================================
@benchmarks = benchmarks =

  #---------------------------------------------------------------------------------------------------------
  run_benchmarks: ->

    #-------------------------------------------------------------------------------------------------------
    demo_fast_readline_async = ->
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
    demo_read_write_big_map = ( cfg ) ->
      { walk_lines_with_positions,  } = SFMODULES.unstable.require_fast_linereader()
      # path                            = '/tmp/myfs-mount/map-cache.jsonl'
      FS                              = require 'node:fs'
      #.....................................................................................................
      write_file = ->
        # help "Ω___9 using JSON file at #{cfg.path}"
        map = get_random_twl_map { size: benchmark_cfg.max_count, }
        FS.writeFileSync cfg.path, ''
        #...................................................................................................
        timeit write_file_sync = ->
          for entry from map
            FS.appendFileSync cfg.path, "#{JSON.stringify entry}\n"
          return null
        #...................................................................................................
        return null
      #.....................................................................................................
      read_file = ( map = null ) ->
        # help "Ω__10 using JSON file at #{cfg.path}"
        map  ?= new Map()
        #...................................................................................................
        timeit read_file_sync = ->
          for { line, } from walk_lines_with_positions cfg.path
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
        info 'Ω__11', "read #{count_rpr} entries"
        # debug 'Ω__12', d
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    demo_read_write_njs_sqlite = ( cfg ) ->
      { walk_lines_with_positions,  } = SFMODULES.unstable.require_fast_linereader()
      # path                            = '/tmp/myfs-mount/map-cache.db'
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
        insert_segment_c0r0: SQL"""
          insert into segments  ( segment_text,  segment_width,   segment_length )
                        values  ( $segment_text, $segment_width,  $segment_length );"""
        #...................................................................................................
        insert_segment_c1r1: SQL"""
          insert into segments  ( segment_text,  segment_width,   segment_length )
                        values  ( $segment_text, $segment_width,  $segment_length )
            on conflict ( segment_text ) do nothing
            returning *;"""
        #...................................................................................................
        insert_segment_c1r0: SQL"""
          insert into segments  ( segment_text,  segment_width,   segment_length )
                        values  ( $segment_text, $segment_width,  $segment_length )
            on conflict ( segment_text ) do nothing;"""
        #...................................................................................................
        insert_segment_c0r1: SQL"""
          insert into segments  ( segment_text,  segment_width,   segment_length )
                        values  ( $segment_text, $segment_width,  $segment_length )
            returning *;"""
        #...................................................................................................
        read_segments: SQL"""
          select * from segments;"""
      #.....................................................................................................
      write_db = ->
        # help "Ω__13 using DB at #{cfg.path}"
        db              = new SQLITE.DatabaseSync cfg.path
        switch cfg.db_type
          when 'with_checks'  then db.exec statements.create_table_segments_checks
          when 'no_checks'    then db.exec statements.create_table_segments_free
          else throw new Error "Ω__14 unknown value for cfg.db_type: #{rpr cfg.db_type}"
        switch cfg.insert_type
          when 'c0r0'         then insert_segment = db.prepare statements.insert_segment_c0r0
          when 'c0r1'         then insert_segment = db.prepare statements.insert_segment_c0r1
          when 'c1r0'         then insert_segment = db.prepare statements.insert_segment_c1r0
          when 'c1r1'         then insert_segment = db.prepare statements.insert_segment_c1r1
          else throw new Error "Ω__15 unknown value for cfg.insert_type: #{rpr cfg.insert_type}"
        map = get_random_twl_map { size: benchmark_cfg.max_count, }
        #...................................................................................................
        ### TAINT use transaction ###
        fn_name = "write_db_sync_#{cfg.db_type}_#{cfg.insert_type}"
        timeit { total: map.size, }, nameit fn_name, ({ progress, }) ->
          db.exec SQL"begin transaction;"
          for [ segment_text, [ segment_width, segment_length, ], ] from map
            progress()
            # debug 'Ω__16', { segment_text, segment_width, segment_length, }
            insert_segment.run { segment_text, segment_width, segment_length, }
          db.exec SQL"commit;"
          return null
        #...................................................................................................
        return null
      #.....................................................................................................
      read_db = ( map = null ) ->
        # help "Ω__17 using DB at #{cfg.path}"
        db              = new SQLITE.DatabaseSync cfg.path
        read_segments   = db.prepare statements.read_segments
        map            ?= new Map()
        #...................................................................................................
        timeit nameit "read_db_sync_#{cfg.db_type}_#{cfg.insert_type}", ->
          db.exec SQL"begin transaction;"
          for { segment_text, segment_width, segment_length, } from read_segments.iterate()
            # debug 'Ω__18', segment_text, [ segment_width, segment_length, ]
            map.set segment_text, [ segment_width, segment_length, ]
          db.exec SQL"commit;"
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
        info 'Ω__19', "read #{count_rpr} entries"
        # debug 'Ω__20', d
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    # demo_fast_readline_sync()
    # demo_read_write_big_map     { path: benchmark_cfg.paths.jsonl, }
    demo_read_write_njs_sqlite  { path: benchmark_cfg.paths.db, db_type: 'no_checks',   insert_type: 'c0r0', }
    demo_read_write_njs_sqlite  { path: benchmark_cfg.paths.db, db_type: 'with_checks', insert_type: 'c0r0', }
    demo_read_write_njs_sqlite  { path: benchmark_cfg.paths.db, db_type: 'with_checks', insert_type: 'c0r1', }
    demo_read_write_njs_sqlite  { path: benchmark_cfg.paths.db, db_type: 'with_checks', insert_type: 'c1r0', }
    demo_read_write_njs_sqlite  { path: benchmark_cfg.paths.db, db_type: 'with_checks', insert_type: 'c1r1', }
    # await demo_fast_readline_async()
    # demo_guyfs_readline()
    #.......................................................................................................
    return null


#===========================================================================================================
benchmark_cfg =
  # max_count: 10
  # max_count: 1e6
  max_count: 12345
  paths:
    db:     '/dev/shm/map-cache.db'
    jsonl:  '/dev/shm/map-cache.jsonl'

#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  # await ( new Test guytest_cfg ).async_test { benchmarks, }
  { require_bricabrac_cfg,    } = SFMODULES.unstable.require_get_callsite()
  debug 'Ω__27', require_bricabrac_cfg().datastore.name
  return null

