(async function() {
  'use strict';
  var GTNG, GUY, Get_random, PATH, SFMODULES, Test, alert, benchmark_cfg, benchmarks, blue, bold, cache, debug, echo, f, get_random_twl_map, gold, green, grey, help, hrtime_as_bigint, info, inspect, log, nameit, nfa, plain, praise, red, reverse, rpr, timeit, urge, warn, whisper, white,
    modulo = function(a, b) { return (+a % (b = +b) + b) % b; };

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('benchmark-unicode-character-width.coffee'));

  ({rpr, inspect, echo, white, green, blue, gold, grey, red, bold, reverse, log} = GUY.trm);

  ({f} = require('../../../apps/effstring'));

  // write                     = ( p ) -> process.stdout.write p
  ({nfa} = require('../../../apps/normalize-function-arguments'));

  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  PATH = require('node:path');

  //-----------------------------------------------------------------------------------------------------------
  SFMODULES = require('../../../apps/bricabrac-sfmodules');

  ({Get_random} = SFMODULES.unstable.require_get_random());

  ({hrtime_as_bigint, timeit} = SFMODULES.unstable.require_benchmarking());

  ({nameit} = SFMODULES.require_nameit());

  //===========================================================================================================
  Object.assign(SFMODULES.unstable, {
    //===========================================================================================================
    /* NOTE Future Single-File Module */
    require_readline_optimized: function() {
      var FS, exports, nl, walk_lines_with_positions_async;
      FS = require('node:fs');
      nl = '\n'.codePointAt(0);
      //-----------------------------------------------------------------------------------------------------------
      walk_lines_with_positions_async = async function*(path) {
        var buffer, readstream, remainder, start, stop;
        // from mmomtchev/readcsv/readcsv-buffered-opt.js
        readstream = FS.createReadStream(path);
        remainder = '';
//.........................................................................................................
        for await (buffer of readstream) {
          start = 0;
          stop = null;
          while ((stop = buffer.indexOf(nl, start)) !== -1) {
            // debug 'Ω___1', { start, stop, }, rpr ( ( buffer.slice start, stop ).toString 'utf-8' )[ .. 108 ]
            if ((start === 0) && (remainder.length > 0)) {
              // debug 'Ω___2', remainder + buffer.slice 0, stop
              yield remainder + buffer.slice(0, stop + 1);
              remainder = '';
            } else {
              yield (buffer.slice(start, stop + 1)).toString('utf-8');
            }
            start = stop + 1;
          }
          remainder = buffer.slice(start);
        }
        //.........................................................................................................
        return null;
      };
      //===========================================================================================================
      return exports = {walk_lines_with_positions_async};
    },
    //===========================================================================================================
    /* NOTE Future Single-File Module */
    require_get_random_additions: function() {
      var Get_random_ext, exports, internals;
      ({internals} = SFMODULES.unstable.require_get_random());
      //=========================================================================================================
      Get_random_ext = class Get_random_ext extends Get_random {
        //-------------------------------------------------------------------------------------------------------
        get_texts_mapped_to_width_length(cfg) {
          var R, filter, get_width, length, length_is_const, max, max_length, max_rounds, min, min_length, on_exhaustion, on_stats, producer, progress, size, stats, text;
          ({min, max, length, size, min_length, max_length, filter, on_stats, on_exhaustion, max_rounds, progress} = {...internals.templates.set_of_texts, ...cfg});
          ({min_length, max_length} = this._get_min_max_length({length, min_length, max_length}));
          length_is_const = min_length === max_length;
          length = min_length;
          R = new Map();
          producer = this.text_producer({min, max, length, min_length, max_length, filter});
          stats = this._new_stats({
            name: 'set_of_texts',
            on_stats,
            on_exhaustion,
            max_rounds
          });
          get_width = this.integer_producer({
            min: 1,
            max: 10
          });
//.....................................................................................................
          for (text of this.walk_unique({
            producer,
            n: size,
            on_stats,
            on_exhaustion,
            max_rounds
          })) {
            if (progress != null) {
              progress();
            }
            R.set(text, [text.length, get_width()]);
          }
          return stats.finish(R);
        }

      };
      //===========================================================================================================
      return exports = {Get_random_ext, internals};
    }
  });

  //===========================================================================================================
  cache = new Map();

  get_random_twl_map = function({size = 10} = {}) {
    var get_random_twl_map_;
    return timeit({
      total: size
    }, get_random_twl_map_ = ({progress}) => {
      var Get_random_ext, R, get_random, key;
      key = `twl_map{size:${size}}`;
      if ((R = cache.get(key)) != null) {
        return R;
      }
      ({Get_random_ext} = SFMODULES.unstable.require_get_random_additions());
      get_random = new Get_random_ext();
      R = get_random.get_texts_mapped_to_width_length({
        size,
        min_length: 1,
        max_length: 20,
        min: 0x021,
        max: 0x058f,
        on_exhaustion: 'stop',
        progress
      });
      // filter: /^\p{L}+$/vi, }
      cache.set(key, R);
      return R;
    });
  };

  //===========================================================================================================
  this.benchmarks = benchmarks = {
    //---------------------------------------------------------------------------------------------------------
    run_benchmarks: function() {
      var demo_fast_readline_async, demo_fast_readline_sync, demo_guyfs_readline, demo_read_write_big_map, demo_read_write_njs_sqlite;
      //-------------------------------------------------------------------------------------------------------
      demo_fast_readline_async = async function() {
        var count, line, path, relpath, t0, t1, walk_lines_with_positions_async;
        relpath = '../../../../../3rd-party-repos/mmomtchev-readcsv-for-read-file-benchmark';
        ({walk_lines_with_positions_async} = SFMODULES.unstable.require_readline_optimized());
        path = PATH.resolve(PATH.join(__dirname, relpath, 'allCountries.txt'));
        count = 0;
        t0 = hrtime_as_bigint();
        for await (line of walk_lines_with_positions_async(path)) {
          count++;
          if ((modulo(count, 1_000_000)) === 0) {
            // return null if count > 100
            echo('Ω___3', count, rpr(line.slice(0, 109)));
          }
        }
        t1 = hrtime_as_bigint();
        echo('Ω___4', 'demo_fast_readline_async', f`${(Number(t1 - t0)) / 1_000_000}:>20,.9f;`);
        return null;
      };
      //-------------------------------------------------------------------------------------------------------
      demo_fast_readline_sync = function() {
        var count, line, path, relpath, t0, t1, walk_lines_with_positions, x;
        relpath = '../../../../../3rd-party-repos/mmomtchev-readcsv-for-read-file-benchmark';
        ({walk_lines_with_positions} = SFMODULES.unstable.require_fast_linereader());
        path = PATH.resolve(PATH.join(__dirname, relpath, 'allCountries.txt'));
        count = 0;
        t0 = hrtime_as_bigint();
        for (x of walk_lines_with_positions(path)) {
          ({line} = x);
          count++;
          if ((modulo(count, 1_000_000)) === 0) {
            // return null if count > 100
            echo('Ω___5', count, rpr(line.slice(0, 109)));
          }
        }
        t1 = hrtime_as_bigint();
        echo('Ω___6', 'demo_fast_readline_sync', f`${(Number(t1 - t0)) / 1_000_000}:>20,.9f;`);
        return null;
      };
      //-------------------------------------------------------------------------------------------------------
      demo_guyfs_readline = function() {
        var count, line, path, relpath, t0, t1, x;
        relpath = '../../../../../3rd-party-repos/mmomtchev-readcsv-for-read-file-benchmark';
        path = PATH.resolve(PATH.join(__dirname, relpath, 'allCountries.txt'));
        count = 0;
        t0 = hrtime_as_bigint();
        for (x of GUY.fs.walk_lines_with_positions(path)) {
          ({line} = x);
          count++;
          if ((modulo(count, 1_000_000)) === 0) {
            // return null if count > 100
            echo('Ω___7', count, rpr(line.slice(0, 109)));
          }
        }
        t1 = hrtime_as_bigint();
        echo('Ω___8', 'demo_guyfs_readline', f`${(Number(t1 - t0)) / 1_000_000}:>20,.9f;`);
        return null;
      };
      //-------------------------------------------------------------------------------------------------------
      demo_read_write_big_map = function(cfg) {
        var FS, read_file, walk_lines_with_positions, write_file;
        ({walk_lines_with_positions} = SFMODULES.unstable.require_fast_linereader());
        // path                            = '/tmp/myfs-mount/map-cache.jsonl'
        FS = require('node:fs');
        //.....................................................................................................
        write_file = function() {
          var map, write_file_sync;
          // help "Ω___9 using JSON file at #{cfg.path}"
          map = get_random_twl_map({
            size: benchmark_cfg.max_count
          });
          FS.writeFileSync(cfg.path, '');
          //...................................................................................................
          timeit(write_file_sync = function() {
            var entry;
            for (entry of map) {
              FS.appendFileSync(cfg.path, `${JSON.stringify(entry)}\n`);
            }
            return null;
          });
          //...................................................................................................
          return null;
        };
        //.....................................................................................................
        read_file = function(map = null) {
          var read_file_sync;
          // help "Ω__10 using JSON file at #{cfg.path}"
          if (map == null) {
            map = new Map();
          }
          //...................................................................................................
          timeit(read_file_sync = function() {
            var line, x;
            for (x of walk_lines_with_positions(cfg.path)) {
              ({line} = x);
              map.set(...(JSON.parse(line)));
            }
            return null;
          });
          //...................................................................................................
          return map;
        };
        (() => {          //.....................................................................................................
          write_file();
          return null;
        })();
        (() => {          //.....................................................................................................
          var count_rpr, d;
          d = read_file();
          count_rpr = (new Intl.NumberFormat('en-US')).format(d.size);
          info('Ω__11', `read ${count_rpr} entries`);
          // debug 'Ω__12', d
          return null;
        })();
        //.....................................................................................................
        return null;
      };
      //-------------------------------------------------------------------------------------------------------
      demo_read_write_njs_sqlite = function(cfg) {
        var FS, SQL, SQLITE, read_db, statements, walk_lines_with_positions, write_db;
        ({walk_lines_with_positions} = SFMODULES.unstable.require_fast_linereader());
        // path                            = '/tmp/myfs-mount/map-cache.db'
        FS = require('node:fs');
        SQLITE = require('node:sqlite');
        ({SQL} = require('../../../apps/dbay'));
        //.....................................................................................................
        statements = {
          //...................................................................................................
          create_table_segments_free: SQL`drop table if exists segments;
create table segments (
    segment_text      text    not null primary key,
    segment_width     integer not null,
    segment_length    integer not null );`,
          //...................................................................................................
          create_table_segments_checks: SQL`drop table if exists segments;
create table segments (
    segment_text      text    not null primary key,
    segment_width     integer not null,
    segment_length    integer not null,
  constraint segment_width_eqgt_zero  check ( segment_width  >= 0 ),
  constraint segment_length_eqgt_zero check ( segment_length >= 0 ) );`,
          //...................................................................................................
          insert_segment_c0r0: SQL`insert into segments  ( segment_text,  segment_width,   segment_length )
              values  ( $segment_text, $segment_width,  $segment_length );`,
          //...................................................................................................
          insert_segment_c1r1: SQL`insert into segments  ( segment_text,  segment_width,   segment_length )
              values  ( $segment_text, $segment_width,  $segment_length )
  on conflict ( segment_text ) do nothing
  returning *;`,
          //...................................................................................................
          insert_segment_c1r0: SQL`insert into segments  ( segment_text,  segment_width,   segment_length )
              values  ( $segment_text, $segment_width,  $segment_length )
  on conflict ( segment_text ) do nothing;`,
          //...................................................................................................
          insert_segment_c0r1: SQL`insert into segments  ( segment_text,  segment_width,   segment_length )
              values  ( $segment_text, $segment_width,  $segment_length )
  returning *;`,
          //...................................................................................................
          read_segments: SQL`select * from segments;`
        };
        //.....................................................................................................
        write_db = function() {
          var db, fn_name, insert_segment, map;
          // help "Ω__13 using DB at #{cfg.path}"
          db = new SQLITE.DatabaseSync(cfg.path);
          switch (cfg.db_type) {
            case 'with_checks':
              db.exec(statements.create_table_segments_checks);
              break;
            case 'no_checks':
              db.exec(statements.create_table_segments_free);
              break;
            default:
              throw new Error(`Ω__14 unknown value for cfg.db_type: ${rpr(cfg.db_type)}`);
          }
          switch (cfg.insert_type) {
            case 'c0r0':
              insert_segment = db.prepare(statements.insert_segment_c0r0);
              break;
            case 'c0r1':
              insert_segment = db.prepare(statements.insert_segment_c0r1);
              break;
            case 'c1r0':
              insert_segment = db.prepare(statements.insert_segment_c1r0);
              break;
            case 'c1r1':
              insert_segment = db.prepare(statements.insert_segment_c1r1);
              break;
            default:
              throw new Error(`Ω__15 unknown value for cfg.insert_type: ${rpr(cfg.insert_type)}`);
          }
          map = get_random_twl_map({
            size: benchmark_cfg.max_count
          });
          //...................................................................................................
          /* TAINT use transaction */
          fn_name = `write_db_sync_${cfg.db_type}_${cfg.insert_type}`;
          timeit({
            total: map.size
          }, nameit(fn_name, function({progress}) {
            var segment_length, segment_text, segment_width, x;
            db.exec(SQL`begin transaction;`);
            for (x of map) {
              [segment_text, [segment_width, segment_length]] = x;
              progress();
              // debug 'Ω__16', { segment_text, segment_width, segment_length, }
              insert_segment.run({segment_text, segment_width, segment_length});
            }
            db.exec(SQL`commit;`);
            return null;
          }));
          //...................................................................................................
          return null;
        };
        //.....................................................................................................
        read_db = function(map = null) {
          var db, read_segments;
          // help "Ω__17 using DB at #{cfg.path}"
          db = new SQLITE.DatabaseSync(cfg.path);
          read_segments = db.prepare(statements.read_segments);
          if (map == null) {
            map = new Map();
          }
          //...................................................................................................
          timeit(nameit(`read_db_sync_${cfg.db_type}_${cfg.insert_type}`, function() {
            var segment_length, segment_text, segment_width, x;
            db.exec(SQL`begin transaction;`);
            for (x of read_segments.iterate()) {
              ({segment_text, segment_width, segment_length} = x);
              // debug 'Ω__18', segment_text, [ segment_width, segment_length, ]
              map.set(segment_text, [segment_width, segment_length]);
            }
            db.exec(SQL`commit;`);
            return null;
          }));
          //...................................................................................................
          return map;
        };
        (() => {          //.....................................................................................................
          write_db();
          return null;
        })();
        (() => {          //.....................................................................................................
          var count_rpr, d;
          d = read_db();
          count_rpr = (new Intl.NumberFormat('en-US')).format(d.size);
          info('Ω__19', `read ${count_rpr} entries`);
          // debug 'Ω__20', d
          return null;
        })();
        //.....................................................................................................
        return null;
      };
      //-------------------------------------------------------------------------------------------------------
      // demo_fast_readline_sync()
      // demo_read_write_big_map     { path: benchmark_cfg.paths.jsonl, }
      demo_read_write_njs_sqlite({
        path: benchmark_cfg.paths.db,
        db_type: 'no_checks',
        insert_type: 'c0r0'
      });
      demo_read_write_njs_sqlite({
        path: benchmark_cfg.paths.db,
        db_type: 'with_checks',
        insert_type: 'c0r0'
      });
      demo_read_write_njs_sqlite({
        path: benchmark_cfg.paths.db,
        db_type: 'with_checks',
        insert_type: 'c0r1'
      });
      demo_read_write_njs_sqlite({
        path: benchmark_cfg.paths.db,
        db_type: 'with_checks',
        insert_type: 'c1r0'
      });
      demo_read_write_njs_sqlite({
        path: benchmark_cfg.paths.db,
        db_type: 'with_checks',
        insert_type: 'c1r1'
      });
      // await demo_fast_readline_async()
      // demo_guyfs_readline()
      //.......................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  benchmark_cfg = {
    // max_count: 10
    // max_count: 1e6
    max_count: 12345,
    paths: {
      db: '/dev/shm/map-cache.db',
      jsonl: '/dev/shm/map-cache.jsonl'
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var guytest_cfg, require_bricabrac_cfg;
      guytest_cfg = {
        throw_on_error: false,
        show_passes: false,
        report_checks: false
      };
      guytest_cfg = {
        throw_on_error: true,
        show_passes: false,
        report_checks: false
      };
      // await ( new Test guytest_cfg ).async_test { benchmarks, }
      ({require_bricabrac_cfg} = SFMODULES.unstable.require_get_callsite());
      debug('Ω__27', require_bricabrac_cfg().datastore.name);
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JlbmNobWFyay1yZWFkLWh1Z2UtY3N2LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLFVBQUEsRUFBQSxJQUFBLEVBQUEsU0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsYUFBQSxFQUFBLFVBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxrQkFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxnQkFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxNQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQTtJQUFBLDJEQUFBOzs7RUFHQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLDBDQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsS0FIRixFQUlFLEtBSkYsRUFLRSxJQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxHQVJGLEVBU0UsSUFURixFQVVFLE9BVkYsRUFXRSxHQVhGLENBQUEsR0FXNEIsR0FBRyxDQUFDLEdBWGhDOztFQVlBLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLHlCQUFSLENB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QUFBLENBQUEsQ0FBdUIsQ0FBQyxTQUFTLENBQUMsSUFBakQ7QUFDQSxhQUFPO0lBTitCLENBQUEsSUFBeEM7O0FBN1ZBIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbid1c2Ugc3RyaWN0J1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnYmVuY2htYXJrLXVuaWNvZGUtY2hhcmFjdGVyLXdpZHRoLmNvZmZlZSdcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICB3aGl0ZVxuICBncmVlblxuICBibHVlXG4gIGdvbGRcbiAgZ3JleVxuICByZWRcbiAgYm9sZFxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuIyB3cml0ZSAgICAgICAgICAgICAgICAgICAgID0gKCBwICkgLT4gcHJvY2Vzcy5zdGRvdXQud3JpdGUgcFxueyBuZmEgfSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcblBBVEggICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG4jLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG57IEdldF9yYW5kb20sICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X3JhbmRvbSgpXG57IGhydGltZV9hc19iaWdpbnQsXG4gIHRpbWVpdCwgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfYmVuY2htYXJraW5nKClcbnsgbmFtZWl0LCAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9uYW1laXQoKVxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuT2JqZWN0LmFzc2lnbiBTRk1PRFVMRVMudW5zdGFibGUsXG5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICMjIyBOT1RFIEZ1dHVyZSBTaW5nbGUtRmlsZSBNb2R1bGUgIyMjXG4gIHJlcXVpcmVfcmVhZGxpbmVfb3B0aW1pemVkOiAtPlxuXG4gICAgRlMgID0gcmVxdWlyZSAnbm9kZTpmcydcbiAgICBubCAgPSAnXFxuJy5jb2RlUG9pbnRBdCAwXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB3YWxrX2xpbmVzX3dpdGhfcG9zaXRpb25zX2FzeW5jID0gKCBwYXRoICkgLT5cbiAgICAgICMgZnJvbSBtbW9tdGNoZXYvcmVhZGNzdi9yZWFkY3N2LWJ1ZmZlcmVkLW9wdC5qc1xuICAgICAgcmVhZHN0cmVhbSAgPSBGUy5jcmVhdGVSZWFkU3RyZWFtIHBhdGhcbiAgICAgIHJlbWFpbmRlciAgID0gJydcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGZvciBhd2FpdCBidWZmZXIgZnJvbSByZWFkc3RyZWFtXG4gICAgICAgIHN0YXJ0ID0gMFxuICAgICAgICBzdG9wICA9IG51bGxcbiAgICAgICAgd2hpbGUgKCBzdG9wID0gYnVmZmVyLmluZGV4T2YgbmwsIHN0YXJ0ICkgaXNudCAtMVxuICAgICAgICAgICMgZGVidWcgJ86pX19fMScsIHsgc3RhcnQsIHN0b3AsIH0sIHJwciAoICggYnVmZmVyLnNsaWNlIHN0YXJ0LCBzdG9wICkudG9TdHJpbmcgJ3V0Zi04JyApWyAuLiAxMDggXVxuICAgICAgICAgIGlmICggc3RhcnQgPT0gMCApIGFuZCAoIHJlbWFpbmRlci5sZW5ndGggPiAwIClcbiAgICAgICAgICAgICMgZGVidWcgJ86pX19fMicsIHJlbWFpbmRlciArIGJ1ZmZlci5zbGljZSAwLCBzdG9wXG4gICAgICAgICAgICB5aWVsZCByZW1haW5kZXIgKyBidWZmZXIuc2xpY2UgMCwgc3RvcCArIDFcbiAgICAgICAgICAgIHJlbWFpbmRlciA9ICcnXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgeWllbGQgKCBidWZmZXIuc2xpY2Ugc3RhcnQsIHN0b3AgKyAxICkudG9TdHJpbmcgJ3V0Zi04J1xuICAgICAgICAgIHN0YXJ0ID0gc3RvcCArIDFcbiAgICAgICAgcmVtYWluZGVyID0gYnVmZmVyLnNsaWNlIHN0YXJ0XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgcmV0dXJuIGV4cG9ydHMgPSB7IHdhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnNfYXN5bmMsIH1cblxuXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAjIyMgTk9URSBGdXR1cmUgU2luZ2xlLUZpbGUgTW9kdWxlICMjI1xuICByZXF1aXJlX2dldF9yYW5kb21fYWRkaXRpb25zOiAtPlxuICAgIHsgaW50ZXJuYWxzLCB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X3JhbmRvbSgpXG5cbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY2xhc3MgR2V0X3JhbmRvbV9leHQgZXh0ZW5kcyBHZXRfcmFuZG9tXG5cbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBnZXRfdGV4dHNfbWFwcGVkX3RvX3dpZHRoX2xlbmd0aDogKCBjZmcgKSAtPlxuICAgICAgICB7IG1pbixcbiAgICAgICAgICBtYXgsXG4gICAgICAgICAgbGVuZ3RoLFxuICAgICAgICAgIHNpemUsXG4gICAgICAgICAgbWluX2xlbmd0aCxcbiAgICAgICAgICBtYXhfbGVuZ3RoLFxuICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICBvbl9zdGF0cyxcbiAgICAgICAgICBvbl9leGhhdXN0aW9uLFxuICAgICAgICAgIG1heF9yb3VuZHMsXG4gICAgICAgICAgcHJvZ3Jlc3MsICAgICB9ID0geyBpbnRlcm5hbHMudGVtcGxhdGVzLnNldF9vZl90ZXh0cy4uLiwgY2ZnLi4uLCB9XG4gICAgICAgIHsgbWluX2xlbmd0aCxcbiAgICAgICAgICBtYXhfbGVuZ3RoLCAgIH0gPSBAX2dldF9taW5fbWF4X2xlbmd0aCB7IGxlbmd0aCwgbWluX2xlbmd0aCwgbWF4X2xlbmd0aCwgfVxuICAgICAgICBsZW5ndGhfaXNfY29uc3QgICA9IG1pbl9sZW5ndGggaXMgbWF4X2xlbmd0aFxuICAgICAgICBsZW5ndGggICAgICAgICAgICA9IG1pbl9sZW5ndGhcbiAgICAgICAgUiAgICAgICAgICAgICAgICAgPSBuZXcgTWFwKClcbiAgICAgICAgcHJvZHVjZXIgICAgICAgICAgPSBAdGV4dF9wcm9kdWNlciB7IG1pbiwgbWF4LCBsZW5ndGgsIG1pbl9sZW5ndGgsIG1heF9sZW5ndGgsIGZpbHRlciwgfVxuICAgICAgICBzdGF0cyAgICAgICAgICAgICA9IEBfbmV3X3N0YXRzIHsgbmFtZTogJ3NldF9vZl90ZXh0cycsIG9uX3N0YXRzLCBvbl9leGhhdXN0aW9uLCBtYXhfcm91bmRzLCB9XG4gICAgICAgIGdldF93aWR0aCAgICAgICAgID0gQGludGVnZXJfcHJvZHVjZXIgeyBtaW46IDEsIG1heDogMTAsIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGZvciB0ZXh0IGZyb20gQHdhbGtfdW5pcXVlIHsgcHJvZHVjZXIsIG46IHNpemUsIG9uX3N0YXRzLCBvbl9leGhhdXN0aW9uLCBtYXhfcm91bmRzLCB9XG4gICAgICAgICAgcHJvZ3Jlc3MoKSBpZiBwcm9ncmVzcz9cbiAgICAgICAgICBSLnNldCB0ZXh0LCBbIHRleHQubGVuZ3RoLCBnZXRfd2lkdGgoKSwgXVxuICAgICAgICByZXR1cm4gKCBzdGF0cy5maW5pc2ggUiApXG5cbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICByZXR1cm4gZXhwb3J0cyA9IHsgR2V0X3JhbmRvbV9leHQsIGludGVybmFscywgfVxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuY2FjaGUgPSBuZXcgTWFwKClcbmdldF9yYW5kb21fdHdsX21hcCA9ICh7IHNpemUgPSAxMCB9PXt9KSAtPiB0aW1laXQgeyB0b3RhbDogc2l6ZSwgfSwgZ2V0X3JhbmRvbV90d2xfbWFwXyA9ICh7IHByb2dyZXNzLCB9KSA9PlxuICBrZXkgPSBcInR3bF9tYXB7c2l6ZToje3NpemV9fVwiXG4gIHJldHVybiBSIGlmICggUiA9IGNhY2hlLmdldCBrZXkgKT9cbiAgeyBHZXRfcmFuZG9tX2V4dCwgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2dldF9yYW5kb21fYWRkaXRpb25zKClcbiAgZ2V0X3JhbmRvbSAgICAgICAgICAgICAgICAgICAgICA9IG5ldyBHZXRfcmFuZG9tX2V4dCgpXG4gIFIgPSBnZXRfcmFuZG9tLmdldF90ZXh0c19tYXBwZWRfdG9fd2lkdGhfbGVuZ3RoIHtcbiAgICBzaXplLCBtaW5fbGVuZ3RoOiAxLCBtYXhfbGVuZ3RoOiAyMCwgbWluOiAweDAyMSwgbWF4OiAweDA1OGYsIG9uX2V4aGF1c3Rpb246ICdzdG9wJywgcHJvZ3Jlc3MsIH1cbiAgICAjIGZpbHRlcjogL15cXHB7TH0rJC92aSwgfVxuICBjYWNoZS5zZXQga2V5LCBSXG4gIHJldHVybiBSXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQGJlbmNobWFya3MgPSBiZW5jaG1hcmtzID1cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJ1bl9iZW5jaG1hcmtzOiAtPlxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBkZW1vX2Zhc3RfcmVhZGxpbmVfYXN5bmMgPSAtPlxuICAgICAgcmVscGF0aCA9ICcuLi8uLi8uLi8uLi8uLi8zcmQtcGFydHktcmVwb3MvbW1vbXRjaGV2LXJlYWRjc3YtZm9yLXJlYWQtZmlsZS1iZW5jaG1hcmsnXG4gICAgICB7IHdhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnNfYXN5bmMsIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9yZWFkbGluZV9vcHRpbWl6ZWQoKVxuICAgICAgcGF0aCA9IFBBVEgucmVzb2x2ZSBQQVRILmpvaW4gX19kaXJuYW1lLCByZWxwYXRoLCAnYWxsQ291bnRyaWVzLnR4dCdcbiAgICAgIGNvdW50ID0gMFxuICAgICAgdDAgPSBocnRpbWVfYXNfYmlnaW50KClcbiAgICAgIGZvciBhd2FpdCBsaW5lIGZyb20gd2Fsa19saW5lc193aXRoX3Bvc2l0aW9uc19hc3luYyBwYXRoXG4gICAgICAgIGNvdW50KytcbiAgICAgICAgIyByZXR1cm4gbnVsbCBpZiBjb3VudCA+IDEwMFxuICAgICAgICBlY2hvICfOqV9fXzMnLCBjb3VudCwgKCBycHIgbGluZVsgLi4gMTA4IF0gKSBpZiAoIGNvdW50ICUlIDFfMDAwXzAwMCApIGlzIDBcbiAgICAgIHQxID0gaHJ0aW1lX2FzX2JpZ2ludCgpXG4gICAgICBlY2hvICfOqV9fXzQnLCAnZGVtb19mYXN0X3JlYWRsaW5lX2FzeW5jJywgZlwiI3soIE51bWJlciB0MSAtIHQwICkgLyAxXzAwMF8wMDB9Oj4yMCwuOWY7XCJcbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGRlbW9fZmFzdF9yZWFkbGluZV9zeW5jID0gLT5cbiAgICAgIHJlbHBhdGggPSAnLi4vLi4vLi4vLi4vLi4vM3JkLXBhcnR5LXJlcG9zL21tb210Y2hldi1yZWFkY3N2LWZvci1yZWFkLWZpbGUtYmVuY2htYXJrJ1xuICAgICAgeyB3YWxrX2xpbmVzX3dpdGhfcG9zaXRpb25zLCB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZmFzdF9saW5lcmVhZGVyKClcbiAgICAgIHBhdGggPSBQQVRILnJlc29sdmUgUEFUSC5qb2luIF9fZGlybmFtZSwgcmVscGF0aCwgJ2FsbENvdW50cmllcy50eHQnXG4gICAgICBjb3VudCA9IDBcbiAgICAgIHQwID0gaHJ0aW1lX2FzX2JpZ2ludCgpXG4gICAgICBmb3IgeyBsaW5lLCB9IGZyb20gd2Fsa19saW5lc193aXRoX3Bvc2l0aW9ucyBwYXRoXG4gICAgICAgIGNvdW50KytcbiAgICAgICAgIyByZXR1cm4gbnVsbCBpZiBjb3VudCA+IDEwMFxuICAgICAgICBlY2hvICfOqV9fXzUnLCBjb3VudCwgKCBycHIgbGluZVsgLi4gMTA4IF0gKSBpZiAoIGNvdW50ICUlIDFfMDAwXzAwMCApIGlzIDBcbiAgICAgIHQxID0gaHJ0aW1lX2FzX2JpZ2ludCgpXG4gICAgICBlY2hvICfOqV9fXzYnLCAnZGVtb19mYXN0X3JlYWRsaW5lX3N5bmMnLCBmXCIjeyggTnVtYmVyIHQxIC0gdDAgKSAvIDFfMDAwXzAwMH06PjIwLC45ZjtcIlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZGVtb19ndXlmc19yZWFkbGluZSA9IC0+XG4gICAgICByZWxwYXRoID0gJy4uLy4uLy4uLy4uLy4uLzNyZC1wYXJ0eS1yZXBvcy9tbW9tdGNoZXYtcmVhZGNzdi1mb3ItcmVhZC1maWxlLWJlbmNobWFyaydcbiAgICAgIHBhdGggPSBQQVRILnJlc29sdmUgUEFUSC5qb2luIF9fZGlybmFtZSwgcmVscGF0aCwgJ2FsbENvdW50cmllcy50eHQnXG4gICAgICBjb3VudCA9IDBcbiAgICAgIHQwID0gaHJ0aW1lX2FzX2JpZ2ludCgpXG4gICAgICBmb3IgeyBsaW5lLCB9IGZyb20gR1VZLmZzLndhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnMgcGF0aFxuICAgICAgICBjb3VudCsrXG4gICAgICAgICMgcmV0dXJuIG51bGwgaWYgY291bnQgPiAxMDBcbiAgICAgICAgZWNobyAnzqlfX183JywgY291bnQsICggcnByIGxpbmVbIC4uIDEwOCBdICkgaWYgKCBjb3VudCAlJSAxXzAwMF8wMDAgKSBpcyAwXG4gICAgICB0MSA9IGhydGltZV9hc19iaWdpbnQoKVxuICAgICAgZWNobyAnzqlfX184JywgJ2RlbW9fZ3V5ZnNfcmVhZGxpbmUnLCBmXCIjeyggTnVtYmVyIHQxIC0gdDAgKSAvIDFfMDAwXzAwMH06PjIwLC45ZjtcIlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZGVtb19yZWFkX3dyaXRlX2JpZ19tYXAgPSAoIGNmZyApIC0+XG4gICAgICB7IHdhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZmFzdF9saW5lcmVhZGVyKClcbiAgICAgICMgcGF0aCAgICAgICAgICAgICAgICAgICAgICAgICAgICA9ICcvdG1wL215ZnMtbW91bnQvbWFwLWNhY2hlLmpzb25sJ1xuICAgICAgRlMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6ZnMnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHdyaXRlX2ZpbGUgPSAtPlxuICAgICAgICAjIGhlbHAgXCLOqV9fXzkgdXNpbmcgSlNPTiBmaWxlIGF0ICN7Y2ZnLnBhdGh9XCJcbiAgICAgICAgbWFwID0gZ2V0X3JhbmRvbV90d2xfbWFwIHsgc2l6ZTogYmVuY2htYXJrX2NmZy5tYXhfY291bnQsIH1cbiAgICAgICAgRlMud3JpdGVGaWxlU3luYyBjZmcucGF0aCwgJydcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB0aW1laXQgd3JpdGVfZmlsZV9zeW5jID0gLT5cbiAgICAgICAgICBmb3IgZW50cnkgZnJvbSBtYXBcbiAgICAgICAgICAgIEZTLmFwcGVuZEZpbGVTeW5jIGNmZy5wYXRoLCBcIiN7SlNPTi5zdHJpbmdpZnkgZW50cnl9XFxuXCJcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJlYWRfZmlsZSA9ICggbWFwID0gbnVsbCApIC0+XG4gICAgICAgICMgaGVscCBcIs6pX18xMCB1c2luZyBKU09OIGZpbGUgYXQgI3tjZmcucGF0aH1cIlxuICAgICAgICBtYXAgID89IG5ldyBNYXAoKVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHRpbWVpdCByZWFkX2ZpbGVfc3luYyA9IC0+XG4gICAgICAgICAgZm9yIHsgbGluZSwgfSBmcm9tIHdhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnMgY2ZnLnBhdGhcbiAgICAgICAgICAgIG1hcC5zZXQgKCBKU09OLnBhcnNlIGxpbmUgKS4uLlxuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcmV0dXJuIG1hcFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICB3cml0ZV9maWxlKClcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZCAgICAgICAgID0gcmVhZF9maWxlKClcbiAgICAgICAgY291bnRfcnByID0gKCBuZXcgSW50bC5OdW1iZXJGb3JtYXQgJ2VuLVVTJyApLmZvcm1hdCBkLnNpemVcbiAgICAgICAgaW5mbyAnzqlfXzExJywgXCJyZWFkICN7Y291bnRfcnByfSBlbnRyaWVzXCJcbiAgICAgICAgIyBkZWJ1ZyAnzqlfXzEyJywgZFxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBkZW1vX3JlYWRfd3JpdGVfbmpzX3NxbGl0ZSA9ICggY2ZnICkgLT5cbiAgICAgIHsgd2Fsa19saW5lc193aXRoX3Bvc2l0aW9ucywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9mYXN0X2xpbmVyZWFkZXIoKVxuICAgICAgIyBwYXRoICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gJy90bXAvbXlmcy1tb3VudC9tYXAtY2FjaGUuZGInXG4gICAgICBGUyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpmcydcbiAgICAgIFNRTElURSAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnNxbGl0ZSdcbiAgICAgIHsgU1FMIH0gICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2RiYXknXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHN0YXRlbWVudHMgPVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGNyZWF0ZV90YWJsZV9zZWdtZW50c19mcmVlOiBTUUxcIlwiXCJcbiAgICAgICAgICBkcm9wIHRhYmxlIGlmIGV4aXN0cyBzZWdtZW50cztcbiAgICAgICAgICBjcmVhdGUgdGFibGUgc2VnbWVudHMgKFxuICAgICAgICAgICAgICBzZWdtZW50X3RleHQgICAgICB0ZXh0ICAgIG5vdCBudWxsIHByaW1hcnkga2V5LFxuICAgICAgICAgICAgICBzZWdtZW50X3dpZHRoICAgICBpbnRlZ2VyIG5vdCBudWxsLFxuICAgICAgICAgICAgICBzZWdtZW50X2xlbmd0aCAgICBpbnRlZ2VyIG5vdCBudWxsICk7XCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgY3JlYXRlX3RhYmxlX3NlZ21lbnRzX2NoZWNrczogU1FMXCJcIlwiXG4gICAgICAgICAgZHJvcCB0YWJsZSBpZiBleGlzdHMgc2VnbWVudHM7XG4gICAgICAgICAgY3JlYXRlIHRhYmxlIHNlZ21lbnRzIChcbiAgICAgICAgICAgICAgc2VnbWVudF90ZXh0ICAgICAgdGV4dCAgICBub3QgbnVsbCBwcmltYXJ5IGtleSxcbiAgICAgICAgICAgICAgc2VnbWVudF93aWR0aCAgICAgaW50ZWdlciBub3QgbnVsbCxcbiAgICAgICAgICAgICAgc2VnbWVudF9sZW5ndGggICAgaW50ZWdlciBub3QgbnVsbCxcbiAgICAgICAgICAgIGNvbnN0cmFpbnQgc2VnbWVudF93aWR0aF9lcWd0X3plcm8gIGNoZWNrICggc2VnbWVudF93aWR0aCAgPj0gMCApLFxuICAgICAgICAgICAgY29uc3RyYWludCBzZWdtZW50X2xlbmd0aF9lcWd0X3plcm8gY2hlY2sgKCBzZWdtZW50X2xlbmd0aCA+PSAwICkgKTtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBpbnNlcnRfc2VnbWVudF9jMHIwOiBTUUxcIlwiXCJcbiAgICAgICAgICBpbnNlcnQgaW50byBzZWdtZW50cyAgKCBzZWdtZW50X3RleHQsICBzZWdtZW50X3dpZHRoLCAgIHNlZ21lbnRfbGVuZ3RoIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyAgKCAkc2VnbWVudF90ZXh0LCAkc2VnbWVudF93aWR0aCwgICRzZWdtZW50X2xlbmd0aCApO1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGluc2VydF9zZWdtZW50X2MxcjE6IFNRTFwiXCJcIlxuICAgICAgICAgIGluc2VydCBpbnRvIHNlZ21lbnRzICAoIHNlZ21lbnRfdGV4dCwgIHNlZ21lbnRfd2lkdGgsICAgc2VnbWVudF9sZW5ndGggKVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzICAoICRzZWdtZW50X3RleHQsICRzZWdtZW50X3dpZHRoLCAgJHNlZ21lbnRfbGVuZ3RoIClcbiAgICAgICAgICAgIG9uIGNvbmZsaWN0ICggc2VnbWVudF90ZXh0ICkgZG8gbm90aGluZ1xuICAgICAgICAgICAgcmV0dXJuaW5nICo7XCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgaW5zZXJ0X3NlZ21lbnRfYzFyMDogU1FMXCJcIlwiXG4gICAgICAgICAgaW5zZXJ0IGludG8gc2VnbWVudHMgICggc2VnbWVudF90ZXh0LCAgc2VnbWVudF93aWR0aCwgICBzZWdtZW50X2xlbmd0aCApXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgICggJHNlZ21lbnRfdGV4dCwgJHNlZ21lbnRfd2lkdGgsICAkc2VnbWVudF9sZW5ndGggKVxuICAgICAgICAgICAgb24gY29uZmxpY3QgKCBzZWdtZW50X3RleHQgKSBkbyBub3RoaW5nO1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGluc2VydF9zZWdtZW50X2MwcjE6IFNRTFwiXCJcIlxuICAgICAgICAgIGluc2VydCBpbnRvIHNlZ21lbnRzICAoIHNlZ21lbnRfdGV4dCwgIHNlZ21lbnRfd2lkdGgsICAgc2VnbWVudF9sZW5ndGggKVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzICAoICRzZWdtZW50X3RleHQsICRzZWdtZW50X3dpZHRoLCAgJHNlZ21lbnRfbGVuZ3RoIClcbiAgICAgICAgICAgIHJldHVybmluZyAqO1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHJlYWRfc2VnbWVudHM6IFNRTFwiXCJcIlxuICAgICAgICAgIHNlbGVjdCAqIGZyb20gc2VnbWVudHM7XCJcIlwiXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHdyaXRlX2RiID0gLT5cbiAgICAgICAgIyBoZWxwIFwizqlfXzEzIHVzaW5nIERCIGF0ICN7Y2ZnLnBhdGh9XCJcbiAgICAgICAgZGIgICAgICAgICAgICAgID0gbmV3IFNRTElURS5EYXRhYmFzZVN5bmMgY2ZnLnBhdGhcbiAgICAgICAgc3dpdGNoIGNmZy5kYl90eXBlXG4gICAgICAgICAgd2hlbiAnd2l0aF9jaGVja3MnICB0aGVuIGRiLmV4ZWMgc3RhdGVtZW50cy5jcmVhdGVfdGFibGVfc2VnbWVudHNfY2hlY2tzXG4gICAgICAgICAgd2hlbiAnbm9fY2hlY2tzJyAgICB0aGVuIGRiLmV4ZWMgc3RhdGVtZW50cy5jcmVhdGVfdGFibGVfc2VnbWVudHNfZnJlZVxuICAgICAgICAgIGVsc2UgdGhyb3cgbmV3IEVycm9yIFwizqlfXzE0IHVua25vd24gdmFsdWUgZm9yIGNmZy5kYl90eXBlOiAje3JwciBjZmcuZGJfdHlwZX1cIlxuICAgICAgICBzd2l0Y2ggY2ZnLmluc2VydF90eXBlXG4gICAgICAgICAgd2hlbiAnYzByMCcgICAgICAgICB0aGVuIGluc2VydF9zZWdtZW50ID0gZGIucHJlcGFyZSBzdGF0ZW1lbnRzLmluc2VydF9zZWdtZW50X2MwcjBcbiAgICAgICAgICB3aGVuICdjMHIxJyAgICAgICAgIHRoZW4gaW5zZXJ0X3NlZ21lbnQgPSBkYi5wcmVwYXJlIHN0YXRlbWVudHMuaW5zZXJ0X3NlZ21lbnRfYzByMVxuICAgICAgICAgIHdoZW4gJ2MxcjAnICAgICAgICAgdGhlbiBpbnNlcnRfc2VnbWVudCA9IGRiLnByZXBhcmUgc3RhdGVtZW50cy5pbnNlcnRfc2VnbWVudF9jMXIwXG4gICAgICAgICAgd2hlbiAnYzFyMScgICAgICAgICB0aGVuIGluc2VydF9zZWdtZW50ID0gZGIucHJlcGFyZSBzdGF0ZW1lbnRzLmluc2VydF9zZWdtZW50X2MxcjFcbiAgICAgICAgICBlbHNlIHRocm93IG5ldyBFcnJvciBcIs6pX18xNSB1bmtub3duIHZhbHVlIGZvciBjZmcuaW5zZXJ0X3R5cGU6ICN7cnByIGNmZy5pbnNlcnRfdHlwZX1cIlxuICAgICAgICBtYXAgPSBnZXRfcmFuZG9tX3R3bF9tYXAgeyBzaXplOiBiZW5jaG1hcmtfY2ZnLm1heF9jb3VudCwgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgICMjIyBUQUlOVCB1c2UgdHJhbnNhY3Rpb24gIyMjXG4gICAgICAgIGZuX25hbWUgPSBcIndyaXRlX2RiX3N5bmNfI3tjZmcuZGJfdHlwZX1fI3tjZmcuaW5zZXJ0X3R5cGV9XCJcbiAgICAgICAgdGltZWl0IHsgdG90YWw6IG1hcC5zaXplLCB9LCBuYW1laXQgZm5fbmFtZSwgKHsgcHJvZ3Jlc3MsIH0pIC0+XG4gICAgICAgICAgZGIuZXhlYyBTUUxcImJlZ2luIHRyYW5zYWN0aW9uO1wiXG4gICAgICAgICAgZm9yIFsgc2VnbWVudF90ZXh0LCBbIHNlZ21lbnRfd2lkdGgsIHNlZ21lbnRfbGVuZ3RoLCBdLCBdIGZyb20gbWFwXG4gICAgICAgICAgICBwcm9ncmVzcygpXG4gICAgICAgICAgICAjIGRlYnVnICfOqV9fMTYnLCB7IHNlZ21lbnRfdGV4dCwgc2VnbWVudF93aWR0aCwgc2VnbWVudF9sZW5ndGgsIH1cbiAgICAgICAgICAgIGluc2VydF9zZWdtZW50LnJ1biB7IHNlZ21lbnRfdGV4dCwgc2VnbWVudF93aWR0aCwgc2VnbWVudF9sZW5ndGgsIH1cbiAgICAgICAgICBkYi5leGVjIFNRTFwiY29tbWl0O1wiXG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZWFkX2RiID0gKCBtYXAgPSBudWxsICkgLT5cbiAgICAgICAgIyBoZWxwIFwizqlfXzE3IHVzaW5nIERCIGF0ICN7Y2ZnLnBhdGh9XCJcbiAgICAgICAgZGIgICAgICAgICAgICAgID0gbmV3IFNRTElURS5EYXRhYmFzZVN5bmMgY2ZnLnBhdGhcbiAgICAgICAgcmVhZF9zZWdtZW50cyAgID0gZGIucHJlcGFyZSBzdGF0ZW1lbnRzLnJlYWRfc2VnbWVudHNcbiAgICAgICAgbWFwICAgICAgICAgICAgPz0gbmV3IE1hcCgpXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgdGltZWl0IG5hbWVpdCBcInJlYWRfZGJfc3luY18je2NmZy5kYl90eXBlfV8je2NmZy5pbnNlcnRfdHlwZX1cIiwgLT5cbiAgICAgICAgICBkYi5leGVjIFNRTFwiYmVnaW4gdHJhbnNhY3Rpb247XCJcbiAgICAgICAgICBmb3IgeyBzZWdtZW50X3RleHQsIHNlZ21lbnRfd2lkdGgsIHNlZ21lbnRfbGVuZ3RoLCB9IGZyb20gcmVhZF9zZWdtZW50cy5pdGVyYXRlKClcbiAgICAgICAgICAgICMgZGVidWcgJ86pX18xOCcsIHNlZ21lbnRfdGV4dCwgWyBzZWdtZW50X3dpZHRoLCBzZWdtZW50X2xlbmd0aCwgXVxuICAgICAgICAgICAgbWFwLnNldCBzZWdtZW50X3RleHQsIFsgc2VnbWVudF93aWR0aCwgc2VnbWVudF9sZW5ndGgsIF1cbiAgICAgICAgICBkYi5leGVjIFNRTFwiY29tbWl0O1wiXG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICByZXR1cm4gbWFwXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIHdyaXRlX2RiKClcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZCAgICAgICAgID0gcmVhZF9kYigpXG4gICAgICAgIGNvdW50X3JwciA9ICggbmV3IEludGwuTnVtYmVyRm9ybWF0ICdlbi1VUycgKS5mb3JtYXQgZC5zaXplXG4gICAgICAgIGluZm8gJ86pX18xOScsIFwicmVhZCAje2NvdW50X3Jwcn0gZW50cmllc1wiXG4gICAgICAgICMgZGVidWcgJ86pX18yMCcsIGRcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgIyBkZW1vX2Zhc3RfcmVhZGxpbmVfc3luYygpXG4gICAgIyBkZW1vX3JlYWRfd3JpdGVfYmlnX21hcCAgICAgeyBwYXRoOiBiZW5jaG1hcmtfY2ZnLnBhdGhzLmpzb25sLCB9XG4gICAgZGVtb19yZWFkX3dyaXRlX25qc19zcWxpdGUgIHsgcGF0aDogYmVuY2htYXJrX2NmZy5wYXRocy5kYiwgZGJfdHlwZTogJ25vX2NoZWNrcycsICAgaW5zZXJ0X3R5cGU6ICdjMHIwJywgfVxuICAgIGRlbW9fcmVhZF93cml0ZV9uanNfc3FsaXRlICB7IHBhdGg6IGJlbmNobWFya19jZmcucGF0aHMuZGIsIGRiX3R5cGU6ICd3aXRoX2NoZWNrcycsIGluc2VydF90eXBlOiAnYzByMCcsIH1cbiAgICBkZW1vX3JlYWRfd3JpdGVfbmpzX3NxbGl0ZSAgeyBwYXRoOiBiZW5jaG1hcmtfY2ZnLnBhdGhzLmRiLCBkYl90eXBlOiAnd2l0aF9jaGVja3MnLCBpbnNlcnRfdHlwZTogJ2MwcjEnLCB9XG4gICAgZGVtb19yZWFkX3dyaXRlX25qc19zcWxpdGUgIHsgcGF0aDogYmVuY2htYXJrX2NmZy5wYXRocy5kYiwgZGJfdHlwZTogJ3dpdGhfY2hlY2tzJywgaW5zZXJ0X3R5cGU6ICdjMXIwJywgfVxuICAgIGRlbW9fcmVhZF93cml0ZV9uanNfc3FsaXRlICB7IHBhdGg6IGJlbmNobWFya19jZmcucGF0aHMuZGIsIGRiX3R5cGU6ICd3aXRoX2NoZWNrcycsIGluc2VydF90eXBlOiAnYzFyMScsIH1cbiAgICAjIGF3YWl0IGRlbW9fZmFzdF9yZWFkbGluZV9hc3luYygpXG4gICAgIyBkZW1vX2d1eWZzX3JlYWRsaW5lKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5iZW5jaG1hcmtfY2ZnID1cbiAgIyBtYXhfY291bnQ6IDEwXG4gICMgbWF4X2NvdW50OiAxZTZcbiAgbWF4X2NvdW50OiAxMjM0NVxuICBwYXRoczpcbiAgICBkYjogICAgICcvZGV2L3NobS9tYXAtY2FjaGUuZGInXG4gICAganNvbmw6ICAnL2Rldi9zaG0vbWFwLWNhY2hlLmpzb25sJ1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAjIGF3YWl0ICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS5hc3luY190ZXN0IHsgYmVuY2htYXJrcywgfVxuICB7IHJlcXVpcmVfYnJpY2FicmFjX2NmZywgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2dldF9jYWxsc2l0ZSgpXG4gIGRlYnVnICfOqV9fMjcnLCByZXF1aXJlX2JyaWNhYnJhY19jZmcoKS5kYXRhc3RvcmUubmFtZVxuICByZXR1cm4gbnVsbFxuXG4iXX0=
