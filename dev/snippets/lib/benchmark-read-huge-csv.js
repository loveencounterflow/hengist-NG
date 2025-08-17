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
  SFMODULES = require('../../../apps/bricabrac-single-file-modules');

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
      var get_app_details, get_callsite, guytest_cfg;
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
      ({get_callsite, get_app_details} = SFMODULES.unstable.require_get_callsite());
      debug('Ω__21', get_callsite());
      debug('Ω__22', get_app_details());
      debug('Ω__23', get_app_details().path);
      debug('Ω__24', get_app_details().package_path);
      debug('Ω__25', get_app_details().package_json.version);
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JlbmNobWFyay1yZWFkLWh1Z2UtY3N2LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLFVBQUEsRUFBQSxJQUFBLEVBQUEsU0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsYUFBQSxFQUFBLFVBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxrQkFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxnQkFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxNQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQTtJQUFBLDJEQUFBOzs7RUFHQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLDBDQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsS0FIRixFQUlFLEtBSkYsRUFLRSxJQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxHQVJGLEVBU0UsSUFURixFQVVFLE9BVkYsRUFXRSxHQVhGLENBQUEsR0FXNEIsR0FBRyxDQUFDLEdBWGhDOztFQVlBLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLHlCQUFSLENB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QSxDQUFNLE9BQU4sRUFBZSxZQUFBLENBQUEsQ0FBZjtNQUNBLEtBQUEsQ0FBTSxPQUFOLEVBQWUsZUFBQSxDQUFBLENBQWY7TUFDQSxLQUFBLENBQU0sT0FBTixFQUFlLGVBQUEsQ0FBQSxDQUFpQixDQUFDLElBQWpDO01BQ0EsS0FBQSxDQUFNLE9BQU4sRUFBZSxlQUFBLENBQUEsQ0FBaUIsQ0FBQyxZQUFqQztNQUNBLEtBQUEsQ0FBTSxPQUFOLEVBQWUsZUFBQSxDQUFBLENBQWlCLENBQUMsWUFBWSxDQUFDLE9BQTlDO0FBQ0EsYUFBTztJQVgrQixDQUFBLElBQXhDOztBQTdWQSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2JlbmNobWFyay11bmljb2RlLWNoYXJhY3Rlci13aWR0aC5jb2ZmZWUnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgZ3JlZW5cbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiMgd3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcbnsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG5QQVRIICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2luZ2xlLWZpbGUtbW9kdWxlcydcbnsgR2V0X3JhbmRvbSwgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfcmFuZG9tKClcbnsgaHJ0aW1lX2FzX2JpZ2ludCxcbiAgdGltZWl0LCAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9iZW5jaG1hcmtpbmcoKVxueyBuYW1laXQsICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX25hbWVpdCgpXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5PYmplY3QuYXNzaWduIFNGTU9EVUxFUy51bnN0YWJsZSxcblxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIyMjIE5PVEUgRnV0dXJlIFNpbmdsZS1GaWxlIE1vZHVsZSAjIyNcbiAgcmVxdWlyZV9yZWFkbGluZV9vcHRpbWl6ZWQ6IC0+XG5cbiAgICBGUyAgPSByZXF1aXJlICdub2RlOmZzJ1xuICAgIG5sICA9ICdcXG4nLmNvZGVQb2ludEF0IDBcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHdhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnNfYXN5bmMgPSAoIHBhdGggKSAtPlxuICAgICAgIyBmcm9tIG1tb210Y2hldi9yZWFkY3N2L3JlYWRjc3YtYnVmZmVyZWQtb3B0LmpzXG4gICAgICByZWFkc3RyZWFtICA9IEZTLmNyZWF0ZVJlYWRTdHJlYW0gcGF0aFxuICAgICAgcmVtYWluZGVyICAgPSAnJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZm9yIGF3YWl0IGJ1ZmZlciBmcm9tIHJlYWRzdHJlYW1cbiAgICAgICAgc3RhcnQgPSAwXG4gICAgICAgIHN0b3AgID0gbnVsbFxuICAgICAgICB3aGlsZSAoIHN0b3AgPSBidWZmZXIuaW5kZXhPZiBubCwgc3RhcnQgKSBpc250IC0xXG4gICAgICAgICAgIyBkZWJ1ZyAnzqlfX18xJywgeyBzdGFydCwgc3RvcCwgfSwgcnByICggKCBidWZmZXIuc2xpY2Ugc3RhcnQsIHN0b3AgKS50b1N0cmluZyAndXRmLTgnIClbIC4uIDEwOCBdXG4gICAgICAgICAgaWYgKCBzdGFydCA9PSAwICkgYW5kICggcmVtYWluZGVyLmxlbmd0aCA+IDAgKVxuICAgICAgICAgICAgIyBkZWJ1ZyAnzqlfX18yJywgcmVtYWluZGVyICsgYnVmZmVyLnNsaWNlIDAsIHN0b3BcbiAgICAgICAgICAgIHlpZWxkIHJlbWFpbmRlciArIGJ1ZmZlci5zbGljZSAwLCBzdG9wICsgMVxuICAgICAgICAgICAgcmVtYWluZGVyID0gJydcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB5aWVsZCAoIGJ1ZmZlci5zbGljZSBzdGFydCwgc3RvcCArIDEgKS50b1N0cmluZyAndXRmLTgnXG4gICAgICAgICAgc3RhcnQgPSBzdG9wICsgMVxuICAgICAgICByZW1haW5kZXIgPSBidWZmZXIuc2xpY2Ugc3RhcnRcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICByZXR1cm4gZXhwb3J0cyA9IHsgd2Fsa19saW5lc193aXRoX3Bvc2l0aW9uc19hc3luYywgfVxuXG5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICMjIyBOT1RFIEZ1dHVyZSBTaW5nbGUtRmlsZSBNb2R1bGUgIyMjXG4gIHJlcXVpcmVfZ2V0X3JhbmRvbV9hZGRpdGlvbnM6IC0+XG4gICAgeyBpbnRlcm5hbHMsIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfcmFuZG9tKClcblxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjbGFzcyBHZXRfcmFuZG9tX2V4dCBleHRlbmRzIEdldF9yYW5kb21cblxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIGdldF90ZXh0c19tYXBwZWRfdG9fd2lkdGhfbGVuZ3RoOiAoIGNmZyApIC0+XG4gICAgICAgIHsgbWluLFxuICAgICAgICAgIG1heCxcbiAgICAgICAgICBsZW5ndGgsXG4gICAgICAgICAgc2l6ZSxcbiAgICAgICAgICBtaW5fbGVuZ3RoLFxuICAgICAgICAgIG1heF9sZW5ndGgsXG4gICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgIG9uX3N0YXRzLFxuICAgICAgICAgIG9uX2V4aGF1c3Rpb24sXG4gICAgICAgICAgbWF4X3JvdW5kcyxcbiAgICAgICAgICBwcm9ncmVzcywgICAgIH0gPSB7IGludGVybmFscy50ZW1wbGF0ZXMuc2V0X29mX3RleHRzLi4uLCBjZmcuLi4sIH1cbiAgICAgICAgeyBtaW5fbGVuZ3RoLFxuICAgICAgICAgIG1heF9sZW5ndGgsICAgfSA9IEBfZ2V0X21pbl9tYXhfbGVuZ3RoIHsgbGVuZ3RoLCBtaW5fbGVuZ3RoLCBtYXhfbGVuZ3RoLCB9XG4gICAgICAgIGxlbmd0aF9pc19jb25zdCAgID0gbWluX2xlbmd0aCBpcyBtYXhfbGVuZ3RoXG4gICAgICAgIGxlbmd0aCAgICAgICAgICAgID0gbWluX2xlbmd0aFxuICAgICAgICBSICAgICAgICAgICAgICAgICA9IG5ldyBNYXAoKVxuICAgICAgICBwcm9kdWNlciAgICAgICAgICA9IEB0ZXh0X3Byb2R1Y2VyIHsgbWluLCBtYXgsIGxlbmd0aCwgbWluX2xlbmd0aCwgbWF4X2xlbmd0aCwgZmlsdGVyLCB9XG4gICAgICAgIHN0YXRzICAgICAgICAgICAgID0gQF9uZXdfc3RhdHMgeyBuYW1lOiAnc2V0X29mX3RleHRzJywgb25fc3RhdHMsIG9uX2V4aGF1c3Rpb24sIG1heF9yb3VuZHMsIH1cbiAgICAgICAgZ2V0X3dpZHRoICAgICAgICAgPSBAaW50ZWdlcl9wcm9kdWNlciB7IG1pbjogMSwgbWF4OiAxMCwgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgZm9yIHRleHQgZnJvbSBAd2Fsa191bmlxdWUgeyBwcm9kdWNlciwgbjogc2l6ZSwgb25fc3RhdHMsIG9uX2V4aGF1c3Rpb24sIG1heF9yb3VuZHMsIH1cbiAgICAgICAgICBwcm9ncmVzcygpIGlmIHByb2dyZXNzP1xuICAgICAgICAgIFIuc2V0IHRleHQsIFsgdGV4dC5sZW5ndGgsIGdldF93aWR0aCgpLCBdXG4gICAgICAgIHJldHVybiAoIHN0YXRzLmZpbmlzaCBSIClcblxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIHJldHVybiBleHBvcnRzID0geyBHZXRfcmFuZG9tX2V4dCwgaW50ZXJuYWxzLCB9XG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jYWNoZSA9IG5ldyBNYXAoKVxuZ2V0X3JhbmRvbV90d2xfbWFwID0gKHsgc2l6ZSA9IDEwIH09e30pIC0+IHRpbWVpdCB7IHRvdGFsOiBzaXplLCB9LCBnZXRfcmFuZG9tX3R3bF9tYXBfID0gKHsgcHJvZ3Jlc3MsIH0pID0+XG4gIGtleSA9IFwidHdsX21hcHtzaXplOiN7c2l6ZX19XCJcbiAgcmV0dXJuIFIgaWYgKCBSID0gY2FjaGUuZ2V0IGtleSApP1xuICB7IEdldF9yYW5kb21fZXh0LCAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X3JhbmRvbV9hZGRpdGlvbnMoKVxuICBnZXRfcmFuZG9tICAgICAgICAgICAgICAgICAgICAgID0gbmV3IEdldF9yYW5kb21fZXh0KClcbiAgUiA9IGdldF9yYW5kb20uZ2V0X3RleHRzX21hcHBlZF90b193aWR0aF9sZW5ndGgge1xuICAgIHNpemUsIG1pbl9sZW5ndGg6IDEsIG1heF9sZW5ndGg6IDIwLCBtaW46IDB4MDIxLCBtYXg6IDB4MDU4Ziwgb25fZXhoYXVzdGlvbjogJ3N0b3AnLCBwcm9ncmVzcywgfVxuICAgICMgZmlsdGVyOiAvXlxccHtMfSskL3ZpLCB9XG4gIGNhY2hlLnNldCBrZXksIFJcbiAgcmV0dXJuIFJcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AYmVuY2htYXJrcyA9IGJlbmNobWFya3MgPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcnVuX2JlbmNobWFya3M6IC0+XG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGRlbW9fZmFzdF9yZWFkbGluZV9hc3luYyA9IC0+XG4gICAgICByZWxwYXRoID0gJy4uLy4uLy4uLy4uLy4uLzNyZC1wYXJ0eS1yZXBvcy9tbW9tdGNoZXYtcmVhZGNzdi1mb3ItcmVhZC1maWxlLWJlbmNobWFyaydcbiAgICAgIHsgd2Fsa19saW5lc193aXRoX3Bvc2l0aW9uc19hc3luYywgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3JlYWRsaW5lX29wdGltaXplZCgpXG4gICAgICBwYXRoID0gUEFUSC5yZXNvbHZlIFBBVEguam9pbiBfX2Rpcm5hbWUsIHJlbHBhdGgsICdhbGxDb3VudHJpZXMudHh0J1xuICAgICAgY291bnQgPSAwXG4gICAgICB0MCA9IGhydGltZV9hc19iaWdpbnQoKVxuICAgICAgZm9yIGF3YWl0IGxpbmUgZnJvbSB3YWxrX2xpbmVzX3dpdGhfcG9zaXRpb25zX2FzeW5jIHBhdGhcbiAgICAgICAgY291bnQrK1xuICAgICAgICAjIHJldHVybiBudWxsIGlmIGNvdW50ID4gMTAwXG4gICAgICAgIGVjaG8gJ86pX19fMycsIGNvdW50LCAoIHJwciBsaW5lWyAuLiAxMDggXSApIGlmICggY291bnQgJSUgMV8wMDBfMDAwICkgaXMgMFxuICAgICAgdDEgPSBocnRpbWVfYXNfYmlnaW50KClcbiAgICAgIGVjaG8gJ86pX19fNCcsICdkZW1vX2Zhc3RfcmVhZGxpbmVfYXN5bmMnLCBmXCIjeyggTnVtYmVyIHQxIC0gdDAgKSAvIDFfMDAwXzAwMH06PjIwLC45ZjtcIlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZGVtb19mYXN0X3JlYWRsaW5lX3N5bmMgPSAtPlxuICAgICAgcmVscGF0aCA9ICcuLi8uLi8uLi8uLi8uLi8zcmQtcGFydHktcmVwb3MvbW1vbXRjaGV2LXJlYWRjc3YtZm9yLXJlYWQtZmlsZS1iZW5jaG1hcmsnXG4gICAgICB7IHdhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnMsIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9mYXN0X2xpbmVyZWFkZXIoKVxuICAgICAgcGF0aCA9IFBBVEgucmVzb2x2ZSBQQVRILmpvaW4gX19kaXJuYW1lLCByZWxwYXRoLCAnYWxsQ291bnRyaWVzLnR4dCdcbiAgICAgIGNvdW50ID0gMFxuICAgICAgdDAgPSBocnRpbWVfYXNfYmlnaW50KClcbiAgICAgIGZvciB7IGxpbmUsIH0gZnJvbSB3YWxrX2xpbmVzX3dpdGhfcG9zaXRpb25zIHBhdGhcbiAgICAgICAgY291bnQrK1xuICAgICAgICAjIHJldHVybiBudWxsIGlmIGNvdW50ID4gMTAwXG4gICAgICAgIGVjaG8gJ86pX19fNScsIGNvdW50LCAoIHJwciBsaW5lWyAuLiAxMDggXSApIGlmICggY291bnQgJSUgMV8wMDBfMDAwICkgaXMgMFxuICAgICAgdDEgPSBocnRpbWVfYXNfYmlnaW50KClcbiAgICAgIGVjaG8gJ86pX19fNicsICdkZW1vX2Zhc3RfcmVhZGxpbmVfc3luYycsIGZcIiN7KCBOdW1iZXIgdDEgLSB0MCApIC8gMV8wMDBfMDAwfTo+MjAsLjlmO1wiXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBkZW1vX2d1eWZzX3JlYWRsaW5lID0gLT5cbiAgICAgIHJlbHBhdGggPSAnLi4vLi4vLi4vLi4vLi4vM3JkLXBhcnR5LXJlcG9zL21tb210Y2hldi1yZWFkY3N2LWZvci1yZWFkLWZpbGUtYmVuY2htYXJrJ1xuICAgICAgcGF0aCA9IFBBVEgucmVzb2x2ZSBQQVRILmpvaW4gX19kaXJuYW1lLCByZWxwYXRoLCAnYWxsQ291bnRyaWVzLnR4dCdcbiAgICAgIGNvdW50ID0gMFxuICAgICAgdDAgPSBocnRpbWVfYXNfYmlnaW50KClcbiAgICAgIGZvciB7IGxpbmUsIH0gZnJvbSBHVVkuZnMud2Fsa19saW5lc193aXRoX3Bvc2l0aW9ucyBwYXRoXG4gICAgICAgIGNvdW50KytcbiAgICAgICAgIyByZXR1cm4gbnVsbCBpZiBjb3VudCA+IDEwMFxuICAgICAgICBlY2hvICfOqV9fXzcnLCBjb3VudCwgKCBycHIgbGluZVsgLi4gMTA4IF0gKSBpZiAoIGNvdW50ICUlIDFfMDAwXzAwMCApIGlzIDBcbiAgICAgIHQxID0gaHJ0aW1lX2FzX2JpZ2ludCgpXG4gICAgICBlY2hvICfOqV9fXzgnLCAnZGVtb19ndXlmc19yZWFkbGluZScsIGZcIiN7KCBOdW1iZXIgdDEgLSB0MCApIC8gMV8wMDBfMDAwfTo+MjAsLjlmO1wiXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBkZW1vX3JlYWRfd3JpdGVfYmlnX21hcCA9ICggY2ZnICkgLT5cbiAgICAgIHsgd2Fsa19saW5lc193aXRoX3Bvc2l0aW9ucywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9mYXN0X2xpbmVyZWFkZXIoKVxuICAgICAgIyBwYXRoICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gJy90bXAvbXlmcy1tb3VudC9tYXAtY2FjaGUuanNvbmwnXG4gICAgICBGUyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpmcydcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgd3JpdGVfZmlsZSA9IC0+XG4gICAgICAgICMgaGVscCBcIs6pX19fOSB1c2luZyBKU09OIGZpbGUgYXQgI3tjZmcucGF0aH1cIlxuICAgICAgICBtYXAgPSBnZXRfcmFuZG9tX3R3bF9tYXAgeyBzaXplOiBiZW5jaG1hcmtfY2ZnLm1heF9jb3VudCwgfVxuICAgICAgICBGUy53cml0ZUZpbGVTeW5jIGNmZy5wYXRoLCAnJ1xuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHRpbWVpdCB3cml0ZV9maWxlX3N5bmMgPSAtPlxuICAgICAgICAgIGZvciBlbnRyeSBmcm9tIG1hcFxuICAgICAgICAgICAgRlMuYXBwZW5kRmlsZVN5bmMgY2ZnLnBhdGgsIFwiI3tKU09OLnN0cmluZ2lmeSBlbnRyeX1cXG5cIlxuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmVhZF9maWxlID0gKCBtYXAgPSBudWxsICkgLT5cbiAgICAgICAgIyBoZWxwIFwizqlfXzEwIHVzaW5nIEpTT04gZmlsZSBhdCAje2NmZy5wYXRofVwiXG4gICAgICAgIG1hcCAgPz0gbmV3IE1hcCgpXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgdGltZWl0IHJlYWRfZmlsZV9zeW5jID0gLT5cbiAgICAgICAgICBmb3IgeyBsaW5lLCB9IGZyb20gd2Fsa19saW5lc193aXRoX3Bvc2l0aW9ucyBjZmcucGF0aFxuICAgICAgICAgICAgbWFwLnNldCAoIEpTT04ucGFyc2UgbGluZSApLi4uXG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICByZXR1cm4gbWFwXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIHdyaXRlX2ZpbGUoKVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkICAgICAgICAgPSByZWFkX2ZpbGUoKVxuICAgICAgICBjb3VudF9ycHIgPSAoIG5ldyBJbnRsLk51bWJlckZvcm1hdCAnZW4tVVMnICkuZm9ybWF0IGQuc2l6ZVxuICAgICAgICBpbmZvICfOqV9fMTEnLCBcInJlYWQgI3tjb3VudF9ycHJ9IGVudHJpZXNcIlxuICAgICAgICAjIGRlYnVnICfOqV9fMTInLCBkXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGRlbW9fcmVhZF93cml0ZV9uanNfc3FsaXRlID0gKCBjZmcgKSAtPlxuICAgICAgeyB3YWxrX2xpbmVzX3dpdGhfcG9zaXRpb25zLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2Zhc3RfbGluZXJlYWRlcigpXG4gICAgICAjIHBhdGggICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAnL3RtcC9teWZzLW1vdW50L21hcC1jYWNoZS5kYidcbiAgICAgIEZTICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOmZzJ1xuICAgICAgU1FMSVRFICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6c3FsaXRlJ1xuICAgICAgeyBTUUwgfSAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZGJheSdcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc3RhdGVtZW50cyA9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgY3JlYXRlX3RhYmxlX3NlZ21lbnRzX2ZyZWU6IFNRTFwiXCJcIlxuICAgICAgICAgIGRyb3AgdGFibGUgaWYgZXhpc3RzIHNlZ21lbnRzO1xuICAgICAgICAgIGNyZWF0ZSB0YWJsZSBzZWdtZW50cyAoXG4gICAgICAgICAgICAgIHNlZ21lbnRfdGV4dCAgICAgIHRleHQgICAgbm90IG51bGwgcHJpbWFyeSBrZXksXG4gICAgICAgICAgICAgIHNlZ21lbnRfd2lkdGggICAgIGludGVnZXIgbm90IG51bGwsXG4gICAgICAgICAgICAgIHNlZ21lbnRfbGVuZ3RoICAgIGludGVnZXIgbm90IG51bGwgKTtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBjcmVhdGVfdGFibGVfc2VnbWVudHNfY2hlY2tzOiBTUUxcIlwiXCJcbiAgICAgICAgICBkcm9wIHRhYmxlIGlmIGV4aXN0cyBzZWdtZW50cztcbiAgICAgICAgICBjcmVhdGUgdGFibGUgc2VnbWVudHMgKFxuICAgICAgICAgICAgICBzZWdtZW50X3RleHQgICAgICB0ZXh0ICAgIG5vdCBudWxsIHByaW1hcnkga2V5LFxuICAgICAgICAgICAgICBzZWdtZW50X3dpZHRoICAgICBpbnRlZ2VyIG5vdCBudWxsLFxuICAgICAgICAgICAgICBzZWdtZW50X2xlbmd0aCAgICBpbnRlZ2VyIG5vdCBudWxsLFxuICAgICAgICAgICAgY29uc3RyYWludCBzZWdtZW50X3dpZHRoX2VxZ3RfemVybyAgY2hlY2sgKCBzZWdtZW50X3dpZHRoICA+PSAwICksXG4gICAgICAgICAgICBjb25zdHJhaW50IHNlZ21lbnRfbGVuZ3RoX2VxZ3RfemVybyBjaGVjayAoIHNlZ21lbnRfbGVuZ3RoID49IDAgKSApO1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGluc2VydF9zZWdtZW50X2MwcjA6IFNRTFwiXCJcIlxuICAgICAgICAgIGluc2VydCBpbnRvIHNlZ21lbnRzICAoIHNlZ21lbnRfdGV4dCwgIHNlZ21lbnRfd2lkdGgsICAgc2VnbWVudF9sZW5ndGggKVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzICAoICRzZWdtZW50X3RleHQsICRzZWdtZW50X3dpZHRoLCAgJHNlZ21lbnRfbGVuZ3RoICk7XCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgaW5zZXJ0X3NlZ21lbnRfYzFyMTogU1FMXCJcIlwiXG4gICAgICAgICAgaW5zZXJ0IGludG8gc2VnbWVudHMgICggc2VnbWVudF90ZXh0LCAgc2VnbWVudF93aWR0aCwgICBzZWdtZW50X2xlbmd0aCApXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgICggJHNlZ21lbnRfdGV4dCwgJHNlZ21lbnRfd2lkdGgsICAkc2VnbWVudF9sZW5ndGggKVxuICAgICAgICAgICAgb24gY29uZmxpY3QgKCBzZWdtZW50X3RleHQgKSBkbyBub3RoaW5nXG4gICAgICAgICAgICByZXR1cm5pbmcgKjtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBpbnNlcnRfc2VnbWVudF9jMXIwOiBTUUxcIlwiXCJcbiAgICAgICAgICBpbnNlcnQgaW50byBzZWdtZW50cyAgKCBzZWdtZW50X3RleHQsICBzZWdtZW50X3dpZHRoLCAgIHNlZ21lbnRfbGVuZ3RoIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyAgKCAkc2VnbWVudF90ZXh0LCAkc2VnbWVudF93aWR0aCwgICRzZWdtZW50X2xlbmd0aCApXG4gICAgICAgICAgICBvbiBjb25mbGljdCAoIHNlZ21lbnRfdGV4dCApIGRvIG5vdGhpbmc7XCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgaW5zZXJ0X3NlZ21lbnRfYzByMTogU1FMXCJcIlwiXG4gICAgICAgICAgaW5zZXJ0IGludG8gc2VnbWVudHMgICggc2VnbWVudF90ZXh0LCAgc2VnbWVudF93aWR0aCwgICBzZWdtZW50X2xlbmd0aCApXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgICggJHNlZ21lbnRfdGV4dCwgJHNlZ21lbnRfd2lkdGgsICAkc2VnbWVudF9sZW5ndGggKVxuICAgICAgICAgICAgcmV0dXJuaW5nICo7XCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcmVhZF9zZWdtZW50czogU1FMXCJcIlwiXG4gICAgICAgICAgc2VsZWN0ICogZnJvbSBzZWdtZW50cztcIlwiXCJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgd3JpdGVfZGIgPSAtPlxuICAgICAgICAjIGhlbHAgXCLOqV9fMTMgdXNpbmcgREIgYXQgI3tjZmcucGF0aH1cIlxuICAgICAgICBkYiAgICAgICAgICAgICAgPSBuZXcgU1FMSVRFLkRhdGFiYXNlU3luYyBjZmcucGF0aFxuICAgICAgICBzd2l0Y2ggY2ZnLmRiX3R5cGVcbiAgICAgICAgICB3aGVuICd3aXRoX2NoZWNrcycgIHRoZW4gZGIuZXhlYyBzdGF0ZW1lbnRzLmNyZWF0ZV90YWJsZV9zZWdtZW50c19jaGVja3NcbiAgICAgICAgICB3aGVuICdub19jaGVja3MnICAgIHRoZW4gZGIuZXhlYyBzdGF0ZW1lbnRzLmNyZWF0ZV90YWJsZV9zZWdtZW50c19mcmVlXG4gICAgICAgICAgZWxzZSB0aHJvdyBuZXcgRXJyb3IgXCLOqV9fMTQgdW5rbm93biB2YWx1ZSBmb3IgY2ZnLmRiX3R5cGU6ICN7cnByIGNmZy5kYl90eXBlfVwiXG4gICAgICAgIHN3aXRjaCBjZmcuaW5zZXJ0X3R5cGVcbiAgICAgICAgICB3aGVuICdjMHIwJyAgICAgICAgIHRoZW4gaW5zZXJ0X3NlZ21lbnQgPSBkYi5wcmVwYXJlIHN0YXRlbWVudHMuaW5zZXJ0X3NlZ21lbnRfYzByMFxuICAgICAgICAgIHdoZW4gJ2MwcjEnICAgICAgICAgdGhlbiBpbnNlcnRfc2VnbWVudCA9IGRiLnByZXBhcmUgc3RhdGVtZW50cy5pbnNlcnRfc2VnbWVudF9jMHIxXG4gICAgICAgICAgd2hlbiAnYzFyMCcgICAgICAgICB0aGVuIGluc2VydF9zZWdtZW50ID0gZGIucHJlcGFyZSBzdGF0ZW1lbnRzLmluc2VydF9zZWdtZW50X2MxcjBcbiAgICAgICAgICB3aGVuICdjMXIxJyAgICAgICAgIHRoZW4gaW5zZXJ0X3NlZ21lbnQgPSBkYi5wcmVwYXJlIHN0YXRlbWVudHMuaW5zZXJ0X3NlZ21lbnRfYzFyMVxuICAgICAgICAgIGVsc2UgdGhyb3cgbmV3IEVycm9yIFwizqlfXzE1IHVua25vd24gdmFsdWUgZm9yIGNmZy5pbnNlcnRfdHlwZTogI3tycHIgY2ZnLmluc2VydF90eXBlfVwiXG4gICAgICAgIG1hcCA9IGdldF9yYW5kb21fdHdsX21hcCB7IHNpemU6IGJlbmNobWFya19jZmcubWF4X2NvdW50LCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgIyMjIFRBSU5UIHVzZSB0cmFuc2FjdGlvbiAjIyNcbiAgICAgICAgZm5fbmFtZSA9IFwid3JpdGVfZGJfc3luY18je2NmZy5kYl90eXBlfV8je2NmZy5pbnNlcnRfdHlwZX1cIlxuICAgICAgICB0aW1laXQgeyB0b3RhbDogbWFwLnNpemUsIH0sIG5hbWVpdCBmbl9uYW1lLCAoeyBwcm9ncmVzcywgfSkgLT5cbiAgICAgICAgICBkYi5leGVjIFNRTFwiYmVnaW4gdHJhbnNhY3Rpb247XCJcbiAgICAgICAgICBmb3IgWyBzZWdtZW50X3RleHQsIFsgc2VnbWVudF93aWR0aCwgc2VnbWVudF9sZW5ndGgsIF0sIF0gZnJvbSBtYXBcbiAgICAgICAgICAgIHByb2dyZXNzKClcbiAgICAgICAgICAgICMgZGVidWcgJ86pX18xNicsIHsgc2VnbWVudF90ZXh0LCBzZWdtZW50X3dpZHRoLCBzZWdtZW50X2xlbmd0aCwgfVxuICAgICAgICAgICAgaW5zZXJ0X3NlZ21lbnQucnVuIHsgc2VnbWVudF90ZXh0LCBzZWdtZW50X3dpZHRoLCBzZWdtZW50X2xlbmd0aCwgfVxuICAgICAgICAgIGRiLmV4ZWMgU1FMXCJjb21taXQ7XCJcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJlYWRfZGIgPSAoIG1hcCA9IG51bGwgKSAtPlxuICAgICAgICAjIGhlbHAgXCLOqV9fMTcgdXNpbmcgREIgYXQgI3tjZmcucGF0aH1cIlxuICAgICAgICBkYiAgICAgICAgICAgICAgPSBuZXcgU1FMSVRFLkRhdGFiYXNlU3luYyBjZmcucGF0aFxuICAgICAgICByZWFkX3NlZ21lbnRzICAgPSBkYi5wcmVwYXJlIHN0YXRlbWVudHMucmVhZF9zZWdtZW50c1xuICAgICAgICBtYXAgICAgICAgICAgICA/PSBuZXcgTWFwKClcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB0aW1laXQgbmFtZWl0IFwicmVhZF9kYl9zeW5jXyN7Y2ZnLmRiX3R5cGV9XyN7Y2ZnLmluc2VydF90eXBlfVwiLCAtPlxuICAgICAgICAgIGRiLmV4ZWMgU1FMXCJiZWdpbiB0cmFuc2FjdGlvbjtcIlxuICAgICAgICAgIGZvciB7IHNlZ21lbnRfdGV4dCwgc2VnbWVudF93aWR0aCwgc2VnbWVudF9sZW5ndGgsIH0gZnJvbSByZWFkX3NlZ21lbnRzLml0ZXJhdGUoKVxuICAgICAgICAgICAgIyBkZWJ1ZyAnzqlfXzE4Jywgc2VnbWVudF90ZXh0LCBbIHNlZ21lbnRfd2lkdGgsIHNlZ21lbnRfbGVuZ3RoLCBdXG4gICAgICAgICAgICBtYXAuc2V0IHNlZ21lbnRfdGV4dCwgWyBzZWdtZW50X3dpZHRoLCBzZWdtZW50X2xlbmd0aCwgXVxuICAgICAgICAgIGRiLmV4ZWMgU1FMXCJjb21taXQ7XCJcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHJldHVybiBtYXBcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgd3JpdGVfZGIoKVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkICAgICAgICAgPSByZWFkX2RiKClcbiAgICAgICAgY291bnRfcnByID0gKCBuZXcgSW50bC5OdW1iZXJGb3JtYXQgJ2VuLVVTJyApLmZvcm1hdCBkLnNpemVcbiAgICAgICAgaW5mbyAnzqlfXzE5JywgXCJyZWFkICN7Y291bnRfcnByfSBlbnRyaWVzXCJcbiAgICAgICAgIyBkZWJ1ZyAnzqlfXzIwJywgZFxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAjIGRlbW9fZmFzdF9yZWFkbGluZV9zeW5jKClcbiAgICAjIGRlbW9fcmVhZF93cml0ZV9iaWdfbWFwICAgICB7IHBhdGg6IGJlbmNobWFya19jZmcucGF0aHMuanNvbmwsIH1cbiAgICBkZW1vX3JlYWRfd3JpdGVfbmpzX3NxbGl0ZSAgeyBwYXRoOiBiZW5jaG1hcmtfY2ZnLnBhdGhzLmRiLCBkYl90eXBlOiAnbm9fY2hlY2tzJywgICBpbnNlcnRfdHlwZTogJ2MwcjAnLCB9XG4gICAgZGVtb19yZWFkX3dyaXRlX25qc19zcWxpdGUgIHsgcGF0aDogYmVuY2htYXJrX2NmZy5wYXRocy5kYiwgZGJfdHlwZTogJ3dpdGhfY2hlY2tzJywgaW5zZXJ0X3R5cGU6ICdjMHIwJywgfVxuICAgIGRlbW9fcmVhZF93cml0ZV9uanNfc3FsaXRlICB7IHBhdGg6IGJlbmNobWFya19jZmcucGF0aHMuZGIsIGRiX3R5cGU6ICd3aXRoX2NoZWNrcycsIGluc2VydF90eXBlOiAnYzByMScsIH1cbiAgICBkZW1vX3JlYWRfd3JpdGVfbmpzX3NxbGl0ZSAgeyBwYXRoOiBiZW5jaG1hcmtfY2ZnLnBhdGhzLmRiLCBkYl90eXBlOiAnd2l0aF9jaGVja3MnLCBpbnNlcnRfdHlwZTogJ2MxcjAnLCB9XG4gICAgZGVtb19yZWFkX3dyaXRlX25qc19zcWxpdGUgIHsgcGF0aDogYmVuY2htYXJrX2NmZy5wYXRocy5kYiwgZGJfdHlwZTogJ3dpdGhfY2hlY2tzJywgaW5zZXJ0X3R5cGU6ICdjMXIxJywgfVxuICAgICMgYXdhaXQgZGVtb19mYXN0X3JlYWRsaW5lX2FzeW5jKClcbiAgICAjIGRlbW9fZ3V5ZnNfcmVhZGxpbmUoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmJlbmNobWFya19jZmcgPVxuICAjIG1heF9jb3VudDogMTBcbiAgIyBtYXhfY291bnQ6IDFlNlxuICBtYXhfY291bnQ6IDEyMzQ1XG4gIHBhdGhzOlxuICAgIGRiOiAgICAgJy9kZXYvc2htL21hcC1jYWNoZS5kYidcbiAgICBqc29ubDogICcvZGV2L3NobS9tYXAtY2FjaGUuanNvbmwnXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICMgYXdhaXQgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLmFzeW5jX3Rlc3QgeyBiZW5jaG1hcmtzLCB9XG4gIHsgZ2V0X2NhbGxzaXRlLFxuICAgIGdldF9hcHBfZGV0YWlscywgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2dldF9jYWxsc2l0ZSgpXG4gIGRlYnVnICfOqV9fMjEnLCBnZXRfY2FsbHNpdGUoKVxuICBkZWJ1ZyAnzqlfXzIyJywgZ2V0X2FwcF9kZXRhaWxzKClcbiAgZGVidWcgJ86pX18yMycsIGdldF9hcHBfZGV0YWlscygpLnBhdGhcbiAgZGVidWcgJ86pX18yNCcsIGdldF9hcHBfZGV0YWlscygpLnBhY2thZ2VfcGF0aFxuICBkZWJ1ZyAnzqlfXzI1JywgZ2V0X2FwcF9kZXRhaWxzKCkucGFja2FnZV9qc29uLnZlcnNpb25cbiAgcmV0dXJuIG51bGxcblxuIl19
//# sourceURL=../src/benchmark-read-huge-csv.coffee