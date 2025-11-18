(async function() {
  'use strict';
  var Benchmarker, GTNG, GUY, Get_random, PATH, SFMODULES, Test, _get_big_file_cfg, alert, benchmark_cfg, benchmarker, benchmarks, blue, bold, cache, debug, echo, f, get_random_twl_map, gold, green, grey, help, hrtime_as_bigint, info, inspect, log, nameit, nfa, plain, praise, red, reverse, rpr, timeit, urge, warn, whisper, white;

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

  ({hrtime_as_bigint, Benchmarker} = SFMODULES.unstable.require_benchmarking());

  ({nameit} = SFMODULES.require_nameit());

  //-----------------------------------------------------------------------------------------------------------
  benchmarker = new Benchmarker();

  timeit = function(...P) {
    return benchmarker.timeit(...P);
  };

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
  _get_big_file_cfg = function() {
    var line_count, path, relpath;
    relpath = '../../../../../3rd-party-repos/mmomtchev-readcsv-for-read-file-benchmark';
    path = PATH.resolve(PATH.join(__dirname, relpath, 'allCountries.txt'));
    line_count = 13_338_212;
    return {path, line_count};
  };

  //===========================================================================================================
  this.benchmarks = benchmarks = {
    //---------------------------------------------------------------------------------------------------------
    run_benchmarks: async function() {
      var demo_fast_readline_async, demo_fast_readline_sync, demo_guyfs_readline, demo_read_write_big_map, demo_read_write_njs_sqlite;
      //-------------------------------------------------------------------------------------------------------
      demo_fast_readline_async = async function() {
        var count, demo_fast_readline_async_fn, line_count, path, t0, t1, walk_lines_with_positions_async;
        ({walk_lines_with_positions_async} = SFMODULES.unstable.require_readline_optimized());
        ({path, line_count} = _get_big_file_cfg());
        count = 0;
        t0 = hrtime_as_bigint();
        //.....................................................................................................
        await timeit({
          total: line_count
        }, demo_fast_readline_async_fn = async function({progress}) {
          var line;
          for await (line of walk_lines_with_positions_async(path)) {
            count++;
            progress();
          }
          return null;
        });
        //.....................................................................................................
        t1 = hrtime_as_bigint();
        echo('Ω___3', 'demo_fast_readline_async', f`${(Number(t1 - t0)) / 1_000_000}:>20,.9f;`);
        return null;
      };
      //-------------------------------------------------------------------------------------------------------
      demo_fast_readline_sync = function() {
        var count, demo_fast_readline_sync_fn, line_count, path, t0, t1, walk_lines_with_positions;
        ({walk_lines_with_positions} = SFMODULES.unstable.require_fast_linereader());
        ({path, line_count} = _get_big_file_cfg());
        count = 0;
        t0 = hrtime_as_bigint();
        //.....................................................................................................
        timeit({
          total: line_count
        }, demo_fast_readline_sync_fn = function({progress}) {
          var line, x;
          for (x of walk_lines_with_positions(path)) {
            ({line} = x);
            count++;
            progress();
          }
          return null;
        });
        //.....................................................................................................
        t1 = hrtime_as_bigint();
        echo('Ω___4', 'demo_fast_readline_sync', f`${(Number(t1 - t0)) / 1_000_000}:>20,.9f;`);
        return null;
      };
      //-------------------------------------------------------------------------------------------------------
      demo_guyfs_readline = function() {
        var count, demo_guyfs_readline_fn, line_count, path, t0, t1;
        ({path, line_count} = _get_big_file_cfg());
        count = 0;
        t0 = hrtime_as_bigint();
        //.....................................................................................................
        timeit({
          total: line_count
        }, demo_guyfs_readline_fn = function({progress}) {
          var line, x;
          for (x of GUY.fs.walk_lines_with_positions(path)) {
            ({line} = x);
            count++;
            progress();
          }
          return null;
        });
        //.....................................................................................................
        t1 = hrtime_as_bigint();
        echo('Ω___5', 'demo_guyfs_readline', f`${(Number(t1 - t0)) / 1_000_000}:>20,.9f;`);
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
          // help "Ω___6 using JSON file at #{cfg.path}"
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
          // help "Ω___7 using JSON file at #{cfg.path}"
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
          info('Ω___8', `read ${count_rpr} entries`);
          // debug 'Ω___9', d
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
          // help "Ω__10 using DB at #{cfg.path}"
          db = new SQLITE.DatabaseSync(cfg.path);
          switch (cfg.db_type) {
            case 'with_checks':
              db.exec(statements.create_table_segments_checks);
              break;
            case 'no_checks':
              db.exec(statements.create_table_segments_free);
              break;
            default:
              throw new Error(`Ω__11 unknown value for cfg.db_type: ${rpr(cfg.db_type)}`);
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
              throw new Error(`Ω__12 unknown value for cfg.insert_type: ${rpr(cfg.insert_type)}`);
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
              // debug 'Ω__13', { segment_text, segment_width, segment_length, }
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
          // help "Ω__14 using DB at #{cfg.path}"
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
              // debug 'Ω__15', segment_text, [ segment_width, segment_length, ]
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
          info('Ω__16', `read ${count_rpr} entries`);
          // debug 'Ω__17', d
          return null;
        })();
        //.....................................................................................................
        return null;
      };
      //-------------------------------------------------------------------------------------------------------
      // demo_read_write_big_map     { path: benchmark_cfg.paths.jsonl, }
      // demo_read_write_njs_sqlite  { path: benchmark_cfg.paths.db, db_type: 'no_checks',   insert_type: 'c0r0', }
      // demo_read_write_njs_sqlite  { path: benchmark_cfg.paths.db, db_type: 'with_checks', insert_type: 'c0r0', }
      // demo_read_write_njs_sqlite  { path: benchmark_cfg.paths.db, db_type: 'with_checks', insert_type: 'c0r1', }
      // demo_read_write_njs_sqlite  { path: benchmark_cfg.paths.db, db_type: 'with_checks', insert_type: 'c1r0', }
      // demo_read_write_njs_sqlite  { path: benchmark_cfg.paths.db, db_type: 'with_checks', insert_type: 'c1r1', }
      //.......................................................................................................
      demo_guyfs_readline();
      await demo_fast_readline_async();
      demo_fast_readline_sync();
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
    await (async() => {
      var guytest_cfg;
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
      await (new Test(guytest_cfg)).async_test({benchmarks});
      // { require_bricabrac_cfg,    } = SFMODULES.unstable.require_get_callsite()
      // debug 'Ω__18', require_bricabrac_cfg().datastore.name
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JlbmNobWFyay1yZWFkLWh1Z2UtY3N2LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxXQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxVQUFBLEVBQUEsSUFBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsaUJBQUEsRUFBQSxLQUFBLEVBQUEsYUFBQSxFQUFBLFdBQUEsRUFBQSxVQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsa0JBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsZ0JBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsTUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUE7OztFQUdBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsMENBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdFLEdBWEYsQ0FBQSxHQVc0QixHQUFHLENBQUMsR0FYaEM7O0VBWUEsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUF6QkE7OztFQTJCQSxDQUFBLENBQUUsR0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSw0Q0FBUixDQUE1Qjs7RUFDQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixJQUE1Qjs7RUFDQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSxXQUFSLEVBOUI1Qjs7O0VBZ0NBLFNBQUEsR0FBNEIsT0FBQSxDQUFRLG1DQUFSOztFQUM1QixDQUFBLENBQUUsVUFBRixDQUFBLEdBQTRCLFNBQVMsQ0FBQyxRQUFRLENBQUMsa0JBQW5CLENBQUEsQ0FBNUI7O0VBQ0EsQ0FBQSxDQUFFLGdCQUFGLEVBQ0UsV0FERixDQUFBLEdBQzRCLFNBQVMsQ0FBQyxRQUFRLENBQUMsb0JBQW5CLENBQUEsQ0FENUI7O0VBRUEsQ0FBQSxDQUFFLE1BQUYsQ0FBQSxHQUE0QixTQUFTLENBQUMsY0FBVixDQUFBLENBQTVCLEVBcENBOzs7RUFzQ0EsV0FBQSxHQUFjLElBQUksV0FBSixDQUFBOztFQUNkLE1BQUEsR0FBUyxRQUFBLENBQUEsR0FBRSxDQUFGLENBQUE7V0FBWSxXQUFXLENBQUMsTUFBWixDQUFtQixHQUFBLENBQW5CO0VBQVosRUF2Q1Q7OztFQTJDQSxNQUFNLENBQUMsTUFBUCxDQUFjLFNBQVMsQ0FBQyxRQUF4QixFQUlFLENBQUE7OztJQUFBLDBCQUFBLEVBQTRCLFFBQUEsQ0FBQSxDQUFBO0FBRTlCLFVBQUEsRUFBQSxFQUFBLE9BQUEsRUFBQSxFQUFBLEVBQUE7TUFBSSxFQUFBLEdBQU0sT0FBQSxDQUFRLFNBQVI7TUFDTixFQUFBLEdBQU0sSUFBSSxDQUFDLFdBQUwsQ0FBaUIsQ0FBakIsRUFEVjs7TUFJSSwrQkFBQSxHQUFrQyxNQUFBLFNBQUEsQ0FBRSxJQUFGLENBQUE7QUFDdEMsWUFBQSxNQUFBLEVBQUEsVUFBQSxFQUFBLFNBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQTs7UUFDTSxVQUFBLEdBQWMsRUFBRSxDQUFDLGdCQUFILENBQW9CLElBQXBCO1FBQ2QsU0FBQSxHQUFjLEdBRnBCOztRQUlNLGdDQUFBO1VBQ0UsS0FBQSxHQUFRO1VBQ1IsSUFBQSxHQUFRO0FBQ1IsaUJBQU0sQ0FBRSxJQUFBLEdBQU8sTUFBTSxDQUFDLE9BQVAsQ0FBZSxFQUFmLEVBQW1CLEtBQW5CLENBQVQsQ0FBQSxLQUF5QyxDQUFDLENBQWhELEdBQUE7O1lBRUUsSUFBRyxDQUFFLEtBQUEsS0FBUyxDQUFYLENBQUEsSUFBbUIsQ0FBRSxTQUFTLENBQUMsTUFBVixHQUFtQixDQUFyQixDQUF0Qjs7Y0FFRSxNQUFNLFNBQUEsR0FBWSxNQUFNLENBQUMsS0FBUCxDQUFhLENBQWIsRUFBZ0IsSUFBQSxHQUFPLENBQXZCO2NBQ2xCLFNBQUEsR0FBWSxHQUhkO2FBQUEsTUFBQTtjQUtFLE1BQU0sQ0FBRSxNQUFNLENBQUMsS0FBUCxDQUFhLEtBQWIsRUFBb0IsSUFBQSxHQUFPLENBQTNCLENBQUYsQ0FBZ0MsQ0FBQyxRQUFqQyxDQUEwQyxPQUExQyxFQUxSOztZQU1BLEtBQUEsR0FBUSxJQUFBLEdBQU87VUFSakI7VUFTQSxTQUFBLEdBQVksTUFBTSxDQUFDLEtBQVAsQ0FBYSxLQUFiO1FBWmQsQ0FKTjs7QUFrQk0sZUFBTztNQW5CeUIsRUFKdEM7O0FBMEJJLGFBQU8sT0FBQSxHQUFVLENBQUUsK0JBQUY7SUE1QlMsQ0FBNUI7OztJQWlDQSw0QkFBQSxFQUE4QixRQUFBLENBQUEsQ0FBQTtBQUNoQyxVQUFBLGNBQUEsRUFBQSxPQUFBLEVBQUE7TUFBSSxDQUFBLENBQUUsU0FBRixDQUFBLEdBQWlCLFNBQVMsQ0FBQyxRQUFRLENBQUMsa0JBQW5CLENBQUEsQ0FBakIsRUFBSjs7TUFHVSxpQkFBTixNQUFBLGVBQUEsUUFBNkIsV0FBN0IsQ0FBQTs7UUFHRSxnQ0FBa0MsQ0FBRSxHQUFGLENBQUE7QUFDeEMsY0FBQSxDQUFBLEVBQUEsTUFBQSxFQUFBLFNBQUEsRUFBQSxNQUFBLEVBQUEsZUFBQSxFQUFBLEdBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLEdBQUEsRUFBQSxVQUFBLEVBQUEsYUFBQSxFQUFBLFFBQUEsRUFBQSxRQUFBLEVBQUEsUUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUE7VUFBUSxDQUFBLENBQUUsR0FBRixFQUNFLEdBREYsRUFFRSxNQUZGLEVBR0UsSUFIRixFQUlFLFVBSkYsRUFLRSxVQUxGLEVBTUUsTUFORixFQU9FLFFBUEYsRUFRRSxhQVJGLEVBU0UsVUFURixFQVVFLFFBVkYsQ0FBQSxHQVVvQixDQUFFLEdBQUEsU0FBUyxDQUFDLFNBQVMsQ0FBQyxZQUF0QixFQUF1QyxHQUFBLEdBQXZDLENBVnBCO1VBV0EsQ0FBQSxDQUFFLFVBQUYsRUFDRSxVQURGLENBQUEsR0FDb0IsSUFBQyxDQUFBLG1CQUFELENBQXFCLENBQUUsTUFBRixFQUFVLFVBQVYsRUFBc0IsVUFBdEIsQ0FBckIsQ0FEcEI7VUFFQSxlQUFBLEdBQW9CLFVBQUEsS0FBYztVQUNsQyxNQUFBLEdBQW9CO1VBQ3BCLENBQUEsR0FBb0IsSUFBSSxHQUFKLENBQUE7VUFDcEIsUUFBQSxHQUFvQixJQUFDLENBQUEsYUFBRCxDQUFlLENBQUUsR0FBRixFQUFPLEdBQVAsRUFBWSxNQUFaLEVBQW9CLFVBQXBCLEVBQWdDLFVBQWhDLEVBQTRDLE1BQTVDLENBQWY7VUFDcEIsS0FBQSxHQUFvQixJQUFDLENBQUEsVUFBRCxDQUFZO1lBQUUsSUFBQSxFQUFNLGNBQVI7WUFBd0IsUUFBeEI7WUFBa0MsYUFBbEM7WUFBaUQ7VUFBakQsQ0FBWjtVQUNwQixTQUFBLEdBQW9CLElBQUMsQ0FBQSxnQkFBRCxDQUFrQjtZQUFFLEdBQUEsRUFBSyxDQUFQO1lBQVUsR0FBQSxFQUFLO1VBQWYsQ0FBbEIsRUFsQjVCOztVQW9CUSxLQUFBOzs7Ozs7WUFBQTtZQUNFLElBQWMsZ0JBQWQ7Y0FBQSxRQUFBLENBQUEsRUFBQTs7WUFDQSxDQUFDLENBQUMsR0FBRixDQUFNLElBQU4sRUFBWSxDQUFFLElBQUksQ0FBQyxNQUFQLEVBQWUsU0FBQSxDQUFBLENBQWYsQ0FBWjtVQUZGO0FBR0EsaUJBQVMsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFiO1FBeEJ1Qjs7TUFIcEMsRUFISjs7QUFpQ0ksYUFBTyxPQUFBLEdBQVUsQ0FBRSxjQUFGLEVBQWtCLFNBQWxCO0lBbENXO0VBakM5QixDQUpGLEVBM0NBOzs7RUFzSEEsS0FBQSxHQUFRLElBQUksR0FBSixDQUFBOztFQUNSLGtCQUFBLEdBQXFCLFFBQUEsQ0FBQyxDQUFFLElBQUEsR0FBTyxFQUFULElBQWMsQ0FBQSxDQUFmLENBQUE7QUFBcUIsUUFBQTtXQUFDLE1BQUEsQ0FBTztNQUFFLEtBQUEsRUFBTztJQUFULENBQVAsRUFBeUIsbUJBQUEsR0FBc0IsQ0FBQyxDQUFFLFFBQUYsQ0FBRCxDQUFBLEdBQUE7QUFDMUYsVUFBQSxjQUFBLEVBQUEsQ0FBQSxFQUFBLFVBQUEsRUFBQTtNQUFFLEdBQUEsR0FBTSxDQUFBLGFBQUEsQ0FBQSxDQUFnQixJQUFoQixDQUFBLENBQUE7TUFDTixJQUFZLDRCQUFaO0FBQUEsZUFBTyxFQUFQOztNQUNBLENBQUEsQ0FBRSxjQUFGLENBQUEsR0FBa0MsU0FBUyxDQUFDLFFBQVEsQ0FBQyw0QkFBbkIsQ0FBQSxDQUFsQztNQUNBLFVBQUEsR0FBa0MsSUFBSSxjQUFKLENBQUE7TUFDbEMsQ0FBQSxHQUFJLFVBQVUsQ0FBQyxnQ0FBWCxDQUE0QztRQUM5QyxJQUQ4QztRQUN4QyxVQUFBLEVBQVksQ0FENEI7UUFDekIsVUFBQSxFQUFZLEVBRGE7UUFDVCxHQUFBLEVBQUssS0FESTtRQUNHLEdBQUEsRUFBSyxNQURSO1FBQ2dCLGFBQUEsRUFBZSxNQUQvQjtRQUN1QztNQUR2QyxDQUE1QyxFQUpOOztNQU9FLEtBQUssQ0FBQyxHQUFOLENBQVUsR0FBVixFQUFlLENBQWY7QUFDQSxhQUFPO0lBVGlGLENBQS9DO0VBQXRCLEVBdkhyQjs7O0VBbUlBLGlCQUFBLEdBQW9CLFFBQUEsQ0FBQSxDQUFBO0FBQ3BCLFFBQUEsVUFBQSxFQUFBLElBQUEsRUFBQTtJQUFFLE9BQUEsR0FBYztJQUNkLElBQUEsR0FBYyxJQUFJLENBQUMsT0FBTCxDQUFhLElBQUksQ0FBQyxJQUFMLENBQVUsU0FBVixFQUFxQixPQUFyQixFQUE4QixrQkFBOUIsQ0FBYjtJQUNkLFVBQUEsR0FBYztBQUNkLFdBQU8sQ0FBRSxJQUFGLEVBQVEsVUFBUjtFQUpXLEVBbklwQjs7O0VBMElBLElBQUMsQ0FBQSxVQUFELEdBQWMsVUFBQSxHQUdaLENBQUE7O0lBQUEsY0FBQSxFQUFnQixNQUFBLFFBQUEsQ0FBQSxDQUFBO0FBRWxCLFVBQUEsd0JBQUEsRUFBQSx1QkFBQSxFQUFBLG1CQUFBLEVBQUEsdUJBQUEsRUFBQSwwQkFBQTs7TUFDSSx3QkFBQSxHQUEyQixNQUFBLFFBQUEsQ0FBQSxDQUFBO0FBQy9CLFlBQUEsS0FBQSxFQUFBLDJCQUFBLEVBQUEsVUFBQSxFQUFBLElBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBO1FBQU0sQ0FBQSxDQUFFLCtCQUFGLENBQUEsR0FBd0MsU0FBUyxDQUFDLFFBQVEsQ0FBQywwQkFBbkIsQ0FBQSxDQUF4QztRQUNBLENBQUEsQ0FBRSxJQUFGLEVBQ0UsVUFERixDQUFBLEdBQ2tCLGlCQUFBLENBQUEsQ0FEbEI7UUFFQSxLQUFBLEdBQWtCO1FBQ2xCLEVBQUEsR0FBa0IsZ0JBQUEsQ0FBQSxFQUp4Qjs7UUFNTSxNQUFNLE1BQUEsQ0FBTztVQUFFLEtBQUEsRUFBTztRQUFULENBQVAsRUFBK0IsMkJBQUEsR0FBOEIsTUFBQSxRQUFBLENBQUMsQ0FBRSxRQUFGLENBQUQsQ0FBQTtBQUN6RSxjQUFBO1VBQVEseURBQUE7WUFDRSxLQUFBO1lBQ0EsUUFBQSxDQUFBO1VBRkY7aUJBR0M7UUFKZ0UsQ0FBN0QsRUFOWjs7UUFZTSxFQUFBLEdBQUssZ0JBQUEsQ0FBQTtRQUNMLElBQUEsQ0FBSyxPQUFMLEVBQWMsMEJBQWQsRUFBMEMsQ0FBQyxDQUFBLENBQUEsQ0FBRyxDQUFFLE1BQUEsQ0FBTyxFQUFBLEdBQUssRUFBWixDQUFGLENBQUEsR0FBcUIsU0FBeEIsQ0FBQSxTQUFBLENBQTNDO0FBQ0EsZUFBTztNQWZrQixFQUQvQjs7TUFtQkksdUJBQUEsR0FBMEIsUUFBQSxDQUFBLENBQUE7QUFDOUIsWUFBQSxLQUFBLEVBQUEsMEJBQUEsRUFBQSxVQUFBLEVBQUEsSUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUE7UUFBTSxDQUFBLENBQUUseUJBQUYsQ0FBQSxHQUFrQyxTQUFTLENBQUMsUUFBUSxDQUFDLHVCQUFuQixDQUFBLENBQWxDO1FBQ0EsQ0FBQSxDQUFFLElBQUYsRUFDRSxVQURGLENBQUEsR0FDa0IsaUJBQUEsQ0FBQSxDQURsQjtRQUVBLEtBQUEsR0FBa0I7UUFDbEIsRUFBQSxHQUFrQixnQkFBQSxDQUFBLEVBSnhCOztRQU1NLE1BQUEsQ0FBTztVQUFFLEtBQUEsRUFBTztRQUFULENBQVAsRUFBK0IsMEJBQUEsR0FBNkIsUUFBQSxDQUFDLENBQUUsUUFBRixDQUFELENBQUE7QUFDbEUsY0FBQSxJQUFBLEVBQUE7VUFBUSxLQUFBLG9DQUFBO2FBQUksQ0FBRSxJQUFGO1lBQ0YsS0FBQTtZQUNBLFFBQUEsQ0FBQTtVQUZGO2lCQUdDO1FBSnlELENBQTVELEVBTk47O1FBWU0sRUFBQSxHQUFLLGdCQUFBLENBQUE7UUFDTCxJQUFBLENBQUssT0FBTCxFQUFjLHlCQUFkLEVBQXlDLENBQUMsQ0FBQSxDQUFBLENBQUcsQ0FBRSxNQUFBLENBQU8sRUFBQSxHQUFLLEVBQVosQ0FBRixDQUFBLEdBQXFCLFNBQXhCLENBQUEsU0FBQSxDQUExQztBQUNBLGVBQU87TUFmaUIsRUFuQjlCOztNQXFDSSxtQkFBQSxHQUFzQixRQUFBLENBQUEsQ0FBQTtBQUMxQixZQUFBLEtBQUEsRUFBQSxzQkFBQSxFQUFBLFVBQUEsRUFBQSxJQUFBLEVBQUEsRUFBQSxFQUFBO1FBQU0sQ0FBQSxDQUFFLElBQUYsRUFDRSxVQURGLENBQUEsR0FDa0IsaUJBQUEsQ0FBQSxDQURsQjtRQUVBLEtBQUEsR0FBa0I7UUFDbEIsRUFBQSxHQUFrQixnQkFBQSxDQUFBLEVBSHhCOztRQUtNLE1BQUEsQ0FBTztVQUFFLEtBQUEsRUFBTztRQUFULENBQVAsRUFBK0Isc0JBQUEsR0FBeUIsUUFBQSxDQUFDLENBQUUsUUFBRixDQUFELENBQUE7QUFDOUQsY0FBQSxJQUFBLEVBQUE7VUFBUSxLQUFBLDJDQUFBO2FBQUksQ0FBRSxJQUFGO1lBQ0YsS0FBQTtZQUNBLFFBQUEsQ0FBQTtVQUZGO2lCQUdDO1FBSnFELENBQXhELEVBTE47O1FBV00sRUFBQSxHQUFLLGdCQUFBLENBQUE7UUFDTCxJQUFBLENBQUssT0FBTCxFQUFjLHFCQUFkLEVBQXFDLENBQUMsQ0FBQSxDQUFBLENBQUcsQ0FBRSxNQUFBLENBQU8sRUFBQSxHQUFLLEVBQVosQ0FBRixDQUFBLEdBQXFCLFNBQXhCLENBQUEsU0FBQSxDQUF0QztlQUNDO01BZG1CLEVBckMxQjs7TUFzREksdUJBQUEsR0FBMEIsUUFBQSxDQUFFLEdBQUYsQ0FBQTtBQUM5QixZQUFBLEVBQUEsRUFBQSxTQUFBLEVBQUEseUJBQUEsRUFBQTtRQUFNLENBQUEsQ0FBRSx5QkFBRixDQUFBLEdBQWtDLFNBQVMsQ0FBQyxRQUFRLENBQUMsdUJBQW5CLENBQUEsQ0FBbEMsRUFBTjs7UUFFTSxFQUFBLEdBQWtDLE9BQUEsQ0FBUSxTQUFSLEVBRnhDOztRQUlNLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtBQUNuQixjQUFBLEdBQUEsRUFBQSxlQUFBOztVQUNRLEdBQUEsR0FBTSxrQkFBQSxDQUFtQjtZQUFFLElBQUEsRUFBTSxhQUFhLENBQUM7VUFBdEIsQ0FBbkI7VUFDTixFQUFFLENBQUMsYUFBSCxDQUFpQixHQUFHLENBQUMsSUFBckIsRUFBMkIsRUFBM0IsRUFGUjs7VUFJUSxNQUFBLENBQU8sZUFBQSxHQUFrQixRQUFBLENBQUEsQ0FBQTtBQUNqQyxnQkFBQTtZQUFVLEtBQUEsWUFBQTtjQUNFLEVBQUUsQ0FBQyxjQUFILENBQWtCLEdBQUcsQ0FBQyxJQUF0QixFQUE0QixDQUFBLENBQUEsQ0FBRyxJQUFJLENBQUMsU0FBTCxDQUFlLEtBQWYsQ0FBSCxDQUFBLEVBQUEsQ0FBNUI7WUFERjtBQUVBLG1CQUFPO1VBSGdCLENBQXpCLEVBSlI7O0FBU1EsaUJBQU87UUFWSSxFQUpuQjs7UUFnQk0sU0FBQSxHQUFZLFFBQUEsQ0FBRSxNQUFNLElBQVIsQ0FBQTtBQUNsQixjQUFBLGNBQUE7OztZQUNRLE1BQVEsSUFBSSxHQUFKLENBQUE7V0FEaEI7O1VBR1EsTUFBQSxDQUFPLGNBQUEsR0FBaUIsUUFBQSxDQUFBLENBQUE7QUFDaEMsZ0JBQUEsSUFBQSxFQUFBO1lBQVUsS0FBQSx3Q0FBQTtlQUFJLENBQUUsSUFBRjtjQUNGLEdBQUcsQ0FBQyxHQUFKLENBQVEsR0FBQSxDQUFFLElBQUksQ0FBQyxLQUFMLENBQVcsSUFBWCxDQUFGLENBQVI7WUFERjtBQUVBLG1CQUFPO1VBSGUsQ0FBeEIsRUFIUjs7QUFRUSxpQkFBTztRQVRHO1FBV1QsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO1VBQ0QsVUFBQSxDQUFBO0FBQ0EsaUJBQU87UUFGTixDQUFBO1FBSUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1QsY0FBQSxTQUFBLEVBQUE7VUFBUSxDQUFBLEdBQVksU0FBQSxDQUFBO1VBQ1osU0FBQSxHQUFZLENBQUUsSUFBSSxJQUFJLENBQUMsWUFBVCxDQUFzQixPQUF0QixDQUFGLENBQWlDLENBQUMsTUFBbEMsQ0FBeUMsQ0FBQyxDQUFDLElBQTNDO1VBQ1osSUFBQSxDQUFLLE9BQUwsRUFBYyxDQUFBLEtBQUEsQ0FBQSxDQUFRLFNBQVIsQ0FBQSxRQUFBLENBQWQsRUFGUjs7QUFJUSxpQkFBTztRQUxOLENBQUEsSUEvQlQ7O0FBc0NNLGVBQU87TUF2Q2lCLEVBdEQ5Qjs7TUFnR0ksMEJBQUEsR0FBNkIsUUFBQSxDQUFFLEdBQUYsQ0FBQTtBQUNqQyxZQUFBLEVBQUEsRUFBQSxHQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxVQUFBLEVBQUEseUJBQUEsRUFBQTtRQUFNLENBQUEsQ0FBRSx5QkFBRixDQUFBLEdBQWtDLFNBQVMsQ0FBQyxRQUFRLENBQUMsdUJBQW5CLENBQUEsQ0FBbEMsRUFBTjs7UUFFTSxFQUFBLEdBQWtDLE9BQUEsQ0FBUSxTQUFSO1FBQ2xDLE1BQUEsR0FBa0MsT0FBQSxDQUFRLGFBQVI7UUFDbEMsQ0FBQSxDQUFFLEdBQUYsQ0FBQSxHQUFrQyxPQUFBLENBQVEsb0JBQVIsQ0FBbEMsRUFKTjs7UUFNTSxVQUFBLEdBRUUsQ0FBQTs7VUFBQSwwQkFBQSxFQUE0QixHQUFHLENBQUE7Ozs7eUNBQUEsQ0FBL0I7O1VBT0EsNEJBQUEsRUFBOEIsR0FBRyxDQUFBOzs7Ozs7c0VBQUEsQ0FQakM7O1VBZ0JBLG1CQUFBLEVBQXFCLEdBQUcsQ0FBQTswRUFBQSxDQWhCeEI7O1VBb0JBLG1CQUFBLEVBQXFCLEdBQUcsQ0FBQTs7O2NBQUEsQ0FwQnhCOztVQTBCQSxtQkFBQSxFQUFxQixHQUFHLENBQUE7OzBDQUFBLENBMUJ4Qjs7VUErQkEsbUJBQUEsRUFBcUIsR0FBRyxDQUFBOztjQUFBLENBL0J4Qjs7VUFvQ0EsYUFBQSxFQUFlLEdBQUcsQ0FBQSx1QkFBQTtRQXBDbEIsRUFSUjs7UUErQ00sUUFBQSxHQUFXLFFBQUEsQ0FBQSxDQUFBO0FBQ2pCLGNBQUEsRUFBQSxFQUFBLE9BQUEsRUFBQSxjQUFBLEVBQUEsR0FBQTs7VUFDUSxFQUFBLEdBQWtCLElBQUksTUFBTSxDQUFDLFlBQVgsQ0FBd0IsR0FBRyxDQUFDLElBQTVCO0FBQ2xCLGtCQUFPLEdBQUcsQ0FBQyxPQUFYO0FBQUEsaUJBQ08sYUFEUDtjQUMyQixFQUFFLENBQUMsSUFBSCxDQUFRLFVBQVUsQ0FBQyw0QkFBbkI7QUFBcEI7QUFEUCxpQkFFTyxXQUZQO2NBRTJCLEVBQUUsQ0FBQyxJQUFILENBQVEsVUFBVSxDQUFDLDBCQUFuQjtBQUFwQjtBQUZQO2NBR08sTUFBTSxJQUFJLEtBQUosQ0FBVSxDQUFBLHFDQUFBLENBQUEsQ0FBd0MsR0FBQSxDQUFJLEdBQUcsQ0FBQyxPQUFSLENBQXhDLENBQUEsQ0FBVjtBQUhiO0FBSUEsa0JBQU8sR0FBRyxDQUFDLFdBQVg7QUFBQSxpQkFDTyxNQURQO2NBQzJCLGNBQUEsR0FBaUIsRUFBRSxDQUFDLE9BQUgsQ0FBVyxVQUFVLENBQUMsbUJBQXRCO0FBQXJDO0FBRFAsaUJBRU8sTUFGUDtjQUUyQixjQUFBLEdBQWlCLEVBQUUsQ0FBQyxPQUFILENBQVcsVUFBVSxDQUFDLG1CQUF0QjtBQUFyQztBQUZQLGlCQUdPLE1BSFA7Y0FHMkIsY0FBQSxHQUFpQixFQUFFLENBQUMsT0FBSCxDQUFXLFVBQVUsQ0FBQyxtQkFBdEI7QUFBckM7QUFIUCxpQkFJTyxNQUpQO2NBSTJCLGNBQUEsR0FBaUIsRUFBRSxDQUFDLE9BQUgsQ0FBVyxVQUFVLENBQUMsbUJBQXRCO0FBQXJDO0FBSlA7Y0FLTyxNQUFNLElBQUksS0FBSixDQUFVLENBQUEseUNBQUEsQ0FBQSxDQUE0QyxHQUFBLENBQUksR0FBRyxDQUFDLFdBQVIsQ0FBNUMsQ0FBQSxDQUFWO0FBTGI7VUFNQSxHQUFBLEdBQU0sa0JBQUEsQ0FBbUI7WUFBRSxJQUFBLEVBQU0sYUFBYSxDQUFDO1VBQXRCLENBQW5CLEVBWmQ7OztVQWVRLE9BQUEsR0FBVSxDQUFBLGNBQUEsQ0FBQSxDQUFpQixHQUFHLENBQUMsT0FBckIsQ0FBQSxDQUFBLENBQUEsQ0FBZ0MsR0FBRyxDQUFDLFdBQXBDLENBQUE7VUFDVixNQUFBLENBQU87WUFBRSxLQUFBLEVBQU8sR0FBRyxDQUFDO1VBQWIsQ0FBUCxFQUE2QixNQUFBLENBQU8sT0FBUCxFQUFnQixRQUFBLENBQUMsQ0FBRSxRQUFGLENBQUQsQ0FBQTtBQUNyRCxnQkFBQSxjQUFBLEVBQUEsWUFBQSxFQUFBLGFBQUEsRUFBQTtZQUFVLEVBQUUsQ0FBQyxJQUFILENBQVEsR0FBRyxDQUFBLGtCQUFBLENBQVg7WUFDQSxLQUFBLFFBQUE7Y0FBSSxDQUFFLFlBQUYsRUFBZ0IsQ0FBRSxhQUFGLEVBQWlCLGNBQWpCLENBQWhCO2NBQ0YsUUFBQSxDQUFBLEVBQVo7O2NBRVksY0FBYyxDQUFDLEdBQWYsQ0FBbUIsQ0FBRSxZQUFGLEVBQWdCLGFBQWhCLEVBQStCLGNBQS9CLENBQW5CO1lBSEY7WUFJQSxFQUFFLENBQUMsSUFBSCxDQUFRLEdBQUcsQ0FBQSxPQUFBLENBQVg7QUFDQSxtQkFBTztVQVBvQyxDQUFoQixDQUE3QixFQWhCUjs7QUF5QlEsaUJBQU87UUExQkUsRUEvQ2pCOztRQTJFTSxPQUFBLEdBQVUsUUFBQSxDQUFFLE1BQU0sSUFBUixDQUFBO0FBQ2hCLGNBQUEsRUFBQSxFQUFBLGFBQUE7O1VBQ1EsRUFBQSxHQUFrQixJQUFJLE1BQU0sQ0FBQyxZQUFYLENBQXdCLEdBQUcsQ0FBQyxJQUE1QjtVQUNsQixhQUFBLEdBQWtCLEVBQUUsQ0FBQyxPQUFILENBQVcsVUFBVSxDQUFDLGFBQXRCOztZQUNsQixNQUFrQixJQUFJLEdBQUosQ0FBQTtXQUgxQjs7VUFLUSxNQUFBLENBQU8sTUFBQSxDQUFPLENBQUEsYUFBQSxDQUFBLENBQWdCLEdBQUcsQ0FBQyxPQUFwQixDQUFBLENBQUEsQ0FBQSxDQUErQixHQUFHLENBQUMsV0FBbkMsQ0FBQSxDQUFQLEVBQXlELFFBQUEsQ0FBQSxDQUFBO0FBQ3hFLGdCQUFBLGNBQUEsRUFBQSxZQUFBLEVBQUEsYUFBQSxFQUFBO1lBQVUsRUFBRSxDQUFDLElBQUgsQ0FBUSxHQUFHLENBQUEsa0JBQUEsQ0FBWDtZQUNBLEtBQUEsNEJBQUE7ZUFBSSxDQUFFLFlBQUYsRUFBZ0IsYUFBaEIsRUFBK0IsY0FBL0IsT0FDZDs7Y0FDWSxHQUFHLENBQUMsR0FBSixDQUFRLFlBQVIsRUFBc0IsQ0FBRSxhQUFGLEVBQWlCLGNBQWpCLENBQXRCO1lBRkY7WUFHQSxFQUFFLENBQUMsSUFBSCxDQUFRLEdBQUcsQ0FBQSxPQUFBLENBQVg7QUFDQSxtQkFBTztVQU51RCxDQUF6RCxDQUFQLEVBTFI7O0FBYVEsaUJBQU87UUFkQztRQWdCUCxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7VUFDRCxRQUFBLENBQUE7QUFDQSxpQkFBTztRQUZOLENBQUE7UUFJQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDVCxjQUFBLFNBQUEsRUFBQTtVQUFRLENBQUEsR0FBWSxPQUFBLENBQUE7VUFDWixTQUFBLEdBQVksQ0FBRSxJQUFJLElBQUksQ0FBQyxZQUFULENBQXNCLE9BQXRCLENBQUYsQ0FBaUMsQ0FBQyxNQUFsQyxDQUF5QyxDQUFDLENBQUMsSUFBM0M7VUFDWixJQUFBLENBQUssT0FBTCxFQUFjLENBQUEsS0FBQSxDQUFBLENBQVEsU0FBUixDQUFBLFFBQUEsQ0FBZCxFQUZSOztBQUlRLGlCQUFPO1FBTE4sQ0FBQSxJQS9GVDs7QUFzR00sZUFBTztNQXZHb0IsRUFoR2pDOzs7Ozs7Ozs7TUFpTkksbUJBQUEsQ0FBQTtNQUNBLE1BQU0sd0JBQUEsQ0FBQTtNQUNOLHVCQUFBLENBQUEsRUFuTko7O0FBcU5JLGFBQU87SUF2Tk87RUFBaEIsRUE3SUY7OztFQXdXQSxhQUFBLEdBR0UsQ0FBQTs7O0lBQUEsU0FBQSxFQUFXLEtBQVg7SUFDQSxLQUFBLEVBQ0U7TUFBQSxFQUFBLEVBQVEsdUJBQVI7TUFDQSxLQUFBLEVBQVE7SUFEUjtFQUZGLEVBM1dGOzs7RUFpWEEsSUFBRyxNQUFBLEtBQVUsT0FBTyxDQUFDLElBQXJCO0lBQStCLE1BQVMsQ0FBQSxLQUFBLENBQUEsQ0FBQSxHQUFBO0FBQ3hDLFVBQUE7TUFBRSxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLEtBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLElBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxNQUFNLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsVUFBekIsQ0FBb0MsQ0FBRSxVQUFGLENBQXBDLEVBRlI7OztBQUtFLGFBQU87SUFOK0IsQ0FBQSxJQUF4Qzs7QUFqWEEiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuJ3VzZSBzdHJpY3QnXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdiZW5jaG1hcmstdW5pY29kZS1jaGFyYWN0ZXItd2lkdGguY29mZmVlJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHdoaXRlXG4gIGdyZWVuXG4gIGJsdWVcbiAgZ29sZFxuICBncmV5XG4gIHJlZFxuICBib2xkXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG4jIHdyaXRlICAgICAgICAgICAgICAgICAgICAgPSAoIHAgKSAtPiBwcm9jZXNzLnN0ZG91dC53cml0ZSBwXG57IG5mYSB9ICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xuUEFUSCAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6cGF0aCdcbiMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbnsgR2V0X3JhbmRvbSwgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfcmFuZG9tKClcbnsgaHJ0aW1lX2FzX2JpZ2ludCxcbiAgQmVuY2htYXJrZXIsICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9iZW5jaG1hcmtpbmcoKVxueyBuYW1laXQsICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX25hbWVpdCgpXG4jLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmJlbmNobWFya2VyID0gbmV3IEJlbmNobWFya2VyKClcbnRpbWVpdCA9ICggUC4uLiApIC0+IGJlbmNobWFya2VyLnRpbWVpdCBQLi4uXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5PYmplY3QuYXNzaWduIFNGTU9EVUxFUy51bnN0YWJsZSxcblxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIyMjIE5PVEUgRnV0dXJlIFNpbmdsZS1GaWxlIE1vZHVsZSAjIyNcbiAgcmVxdWlyZV9yZWFkbGluZV9vcHRpbWl6ZWQ6IC0+XG5cbiAgICBGUyAgPSByZXF1aXJlICdub2RlOmZzJ1xuICAgIG5sICA9ICdcXG4nLmNvZGVQb2ludEF0IDBcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHdhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnNfYXN5bmMgPSAoIHBhdGggKSAtPlxuICAgICAgIyBmcm9tIG1tb210Y2hldi9yZWFkY3N2L3JlYWRjc3YtYnVmZmVyZWQtb3B0LmpzXG4gICAgICByZWFkc3RyZWFtICA9IEZTLmNyZWF0ZVJlYWRTdHJlYW0gcGF0aFxuICAgICAgcmVtYWluZGVyICAgPSAnJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZm9yIGF3YWl0IGJ1ZmZlciBmcm9tIHJlYWRzdHJlYW1cbiAgICAgICAgc3RhcnQgPSAwXG4gICAgICAgIHN0b3AgID0gbnVsbFxuICAgICAgICB3aGlsZSAoIHN0b3AgPSBidWZmZXIuaW5kZXhPZiBubCwgc3RhcnQgKSBpc250IC0xXG4gICAgICAgICAgIyBkZWJ1ZyAnzqlfX18xJywgeyBzdGFydCwgc3RvcCwgfSwgcnByICggKCBidWZmZXIuc2xpY2Ugc3RhcnQsIHN0b3AgKS50b1N0cmluZyAndXRmLTgnIClbIC4uIDEwOCBdXG4gICAgICAgICAgaWYgKCBzdGFydCA9PSAwICkgYW5kICggcmVtYWluZGVyLmxlbmd0aCA+IDAgKVxuICAgICAgICAgICAgIyBkZWJ1ZyAnzqlfX18yJywgcmVtYWluZGVyICsgYnVmZmVyLnNsaWNlIDAsIHN0b3BcbiAgICAgICAgICAgIHlpZWxkIHJlbWFpbmRlciArIGJ1ZmZlci5zbGljZSAwLCBzdG9wICsgMVxuICAgICAgICAgICAgcmVtYWluZGVyID0gJydcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB5aWVsZCAoIGJ1ZmZlci5zbGljZSBzdGFydCwgc3RvcCArIDEgKS50b1N0cmluZyAndXRmLTgnXG4gICAgICAgICAgc3RhcnQgPSBzdG9wICsgMVxuICAgICAgICByZW1haW5kZXIgPSBidWZmZXIuc2xpY2Ugc3RhcnRcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICByZXR1cm4gZXhwb3J0cyA9IHsgd2Fsa19saW5lc193aXRoX3Bvc2l0aW9uc19hc3luYywgfVxuXG5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICMjIyBOT1RFIEZ1dHVyZSBTaW5nbGUtRmlsZSBNb2R1bGUgIyMjXG4gIHJlcXVpcmVfZ2V0X3JhbmRvbV9hZGRpdGlvbnM6IC0+XG4gICAgeyBpbnRlcm5hbHMsIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfcmFuZG9tKClcblxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjbGFzcyBHZXRfcmFuZG9tX2V4dCBleHRlbmRzIEdldF9yYW5kb21cblxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIGdldF90ZXh0c19tYXBwZWRfdG9fd2lkdGhfbGVuZ3RoOiAoIGNmZyApIC0+XG4gICAgICAgIHsgbWluLFxuICAgICAgICAgIG1heCxcbiAgICAgICAgICBsZW5ndGgsXG4gICAgICAgICAgc2l6ZSxcbiAgICAgICAgICBtaW5fbGVuZ3RoLFxuICAgICAgICAgIG1heF9sZW5ndGgsXG4gICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgIG9uX3N0YXRzLFxuICAgICAgICAgIG9uX2V4aGF1c3Rpb24sXG4gICAgICAgICAgbWF4X3JvdW5kcyxcbiAgICAgICAgICBwcm9ncmVzcywgICAgIH0gPSB7IGludGVybmFscy50ZW1wbGF0ZXMuc2V0X29mX3RleHRzLi4uLCBjZmcuLi4sIH1cbiAgICAgICAgeyBtaW5fbGVuZ3RoLFxuICAgICAgICAgIG1heF9sZW5ndGgsICAgfSA9IEBfZ2V0X21pbl9tYXhfbGVuZ3RoIHsgbGVuZ3RoLCBtaW5fbGVuZ3RoLCBtYXhfbGVuZ3RoLCB9XG4gICAgICAgIGxlbmd0aF9pc19jb25zdCAgID0gbWluX2xlbmd0aCBpcyBtYXhfbGVuZ3RoXG4gICAgICAgIGxlbmd0aCAgICAgICAgICAgID0gbWluX2xlbmd0aFxuICAgICAgICBSICAgICAgICAgICAgICAgICA9IG5ldyBNYXAoKVxuICAgICAgICBwcm9kdWNlciAgICAgICAgICA9IEB0ZXh0X3Byb2R1Y2VyIHsgbWluLCBtYXgsIGxlbmd0aCwgbWluX2xlbmd0aCwgbWF4X2xlbmd0aCwgZmlsdGVyLCB9XG4gICAgICAgIHN0YXRzICAgICAgICAgICAgID0gQF9uZXdfc3RhdHMgeyBuYW1lOiAnc2V0X29mX3RleHRzJywgb25fc3RhdHMsIG9uX2V4aGF1c3Rpb24sIG1heF9yb3VuZHMsIH1cbiAgICAgICAgZ2V0X3dpZHRoICAgICAgICAgPSBAaW50ZWdlcl9wcm9kdWNlciB7IG1pbjogMSwgbWF4OiAxMCwgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgZm9yIHRleHQgZnJvbSBAd2Fsa191bmlxdWUgeyBwcm9kdWNlciwgbjogc2l6ZSwgb25fc3RhdHMsIG9uX2V4aGF1c3Rpb24sIG1heF9yb3VuZHMsIH1cbiAgICAgICAgICBwcm9ncmVzcygpIGlmIHByb2dyZXNzP1xuICAgICAgICAgIFIuc2V0IHRleHQsIFsgdGV4dC5sZW5ndGgsIGdldF93aWR0aCgpLCBdXG4gICAgICAgIHJldHVybiAoIHN0YXRzLmZpbmlzaCBSIClcblxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIHJldHVybiBleHBvcnRzID0geyBHZXRfcmFuZG9tX2V4dCwgaW50ZXJuYWxzLCB9XG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jYWNoZSA9IG5ldyBNYXAoKVxuZ2V0X3JhbmRvbV90d2xfbWFwID0gKHsgc2l6ZSA9IDEwIH09e30pIC0+IHRpbWVpdCB7IHRvdGFsOiBzaXplLCB9LCBnZXRfcmFuZG9tX3R3bF9tYXBfID0gKHsgcHJvZ3Jlc3MsIH0pID0+XG4gIGtleSA9IFwidHdsX21hcHtzaXplOiN7c2l6ZX19XCJcbiAgcmV0dXJuIFIgaWYgKCBSID0gY2FjaGUuZ2V0IGtleSApP1xuICB7IEdldF9yYW5kb21fZXh0LCAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X3JhbmRvbV9hZGRpdGlvbnMoKVxuICBnZXRfcmFuZG9tICAgICAgICAgICAgICAgICAgICAgID0gbmV3IEdldF9yYW5kb21fZXh0KClcbiAgUiA9IGdldF9yYW5kb20uZ2V0X3RleHRzX21hcHBlZF90b193aWR0aF9sZW5ndGgge1xuICAgIHNpemUsIG1pbl9sZW5ndGg6IDEsIG1heF9sZW5ndGg6IDIwLCBtaW46IDB4MDIxLCBtYXg6IDB4MDU4Ziwgb25fZXhoYXVzdGlvbjogJ3N0b3AnLCBwcm9ncmVzcywgfVxuICAgICMgZmlsdGVyOiAvXlxccHtMfSskL3ZpLCB9XG4gIGNhY2hlLnNldCBrZXksIFJcbiAgcmV0dXJuIFJcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5fZ2V0X2JpZ19maWxlX2NmZyA9IC0+XG4gIHJlbHBhdGggICAgID0gJy4uLy4uLy4uLy4uLy4uLzNyZC1wYXJ0eS1yZXBvcy9tbW9tdGNoZXYtcmVhZGNzdi1mb3ItcmVhZC1maWxlLWJlbmNobWFyaydcbiAgcGF0aCAgICAgICAgPSBQQVRILnJlc29sdmUgUEFUSC5qb2luIF9fZGlybmFtZSwgcmVscGF0aCwgJ2FsbENvdW50cmllcy50eHQnXG4gIGxpbmVfY291bnQgID0gMTNfMzM4XzIxMlxuICByZXR1cm4geyBwYXRoLCBsaW5lX2NvdW50LCB9XG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQGJlbmNobWFya3MgPSBiZW5jaG1hcmtzID1cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJ1bl9iZW5jaG1hcmtzOiAtPlxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBkZW1vX2Zhc3RfcmVhZGxpbmVfYXN5bmMgPSAtPlxuICAgICAgeyB3YWxrX2xpbmVzX3dpdGhfcG9zaXRpb25zX2FzeW5jLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3JlYWRsaW5lX29wdGltaXplZCgpXG4gICAgICB7IHBhdGgsXG4gICAgICAgIGxpbmVfY291bnQsIH0gPSBfZ2V0X2JpZ19maWxlX2NmZygpXG4gICAgICBjb3VudCAgICAgICAgICAgPSAwXG4gICAgICB0MCAgICAgICAgICAgICAgPSBocnRpbWVfYXNfYmlnaW50KClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgYXdhaXQgdGltZWl0IHsgdG90YWw6IGxpbmVfY291bnQsIH0sIGRlbW9fZmFzdF9yZWFkbGluZV9hc3luY19mbiA9ICh7IHByb2dyZXNzLCB9KSAtPlxuICAgICAgICBmb3IgYXdhaXQgbGluZSBmcm9tIHdhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnNfYXN5bmMgcGF0aFxuICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICBwcm9ncmVzcygpXG4gICAgICAgIDtudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHQxID0gaHJ0aW1lX2FzX2JpZ2ludCgpXG4gICAgICBlY2hvICfOqV9fXzMnLCAnZGVtb19mYXN0X3JlYWRsaW5lX2FzeW5jJywgZlwiI3soIE51bWJlciB0MSAtIHQwICkgLyAxXzAwMF8wMDB9Oj4yMCwuOWY7XCJcbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGRlbW9fZmFzdF9yZWFkbGluZV9zeW5jID0gLT5cbiAgICAgIHsgd2Fsa19saW5lc193aXRoX3Bvc2l0aW9ucywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9mYXN0X2xpbmVyZWFkZXIoKVxuICAgICAgeyBwYXRoLFxuICAgICAgICBsaW5lX2NvdW50LCB9ID0gX2dldF9iaWdfZmlsZV9jZmcoKVxuICAgICAgY291bnQgICAgICAgICAgID0gMFxuICAgICAgdDAgICAgICAgICAgICAgID0gaHJ0aW1lX2FzX2JpZ2ludCgpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHRpbWVpdCB7IHRvdGFsOiBsaW5lX2NvdW50LCB9LCBkZW1vX2Zhc3RfcmVhZGxpbmVfc3luY19mbiA9ICh7IHByb2dyZXNzLCB9KSAtPlxuICAgICAgICBmb3IgeyBsaW5lLCB9IGZyb20gd2Fsa19saW5lc193aXRoX3Bvc2l0aW9ucyBwYXRoXG4gICAgICAgICAgY291bnQrK1xuICAgICAgICAgIHByb2dyZXNzKClcbiAgICAgICAgO251bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgdDEgPSBocnRpbWVfYXNfYmlnaW50KClcbiAgICAgIGVjaG8gJ86pX19fNCcsICdkZW1vX2Zhc3RfcmVhZGxpbmVfc3luYycsIGZcIiN7KCBOdW1iZXIgdDEgLSB0MCApIC8gMV8wMDBfMDAwfTo+MjAsLjlmO1wiXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBkZW1vX2d1eWZzX3JlYWRsaW5lID0gLT5cbiAgICAgIHsgcGF0aCxcbiAgICAgICAgbGluZV9jb3VudCwgfSA9IF9nZXRfYmlnX2ZpbGVfY2ZnKClcbiAgICAgIGNvdW50ICAgICAgICAgICA9IDBcbiAgICAgIHQwICAgICAgICAgICAgICA9IGhydGltZV9hc19iaWdpbnQoKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICB0aW1laXQgeyB0b3RhbDogbGluZV9jb3VudCwgfSwgZGVtb19ndXlmc19yZWFkbGluZV9mbiA9ICh7IHByb2dyZXNzLCB9KSAtPlxuICAgICAgICBmb3IgeyBsaW5lLCB9IGZyb20gR1VZLmZzLndhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnMgcGF0aFxuICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICBwcm9ncmVzcygpXG4gICAgICAgIDtudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHQxID0gaHJ0aW1lX2FzX2JpZ2ludCgpXG4gICAgICBlY2hvICfOqV9fXzUnLCAnZGVtb19ndXlmc19yZWFkbGluZScsIGZcIiN7KCBOdW1iZXIgdDEgLSB0MCApIC8gMV8wMDBfMDAwfTo+MjAsLjlmO1wiXG4gICAgICA7bnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBkZW1vX3JlYWRfd3JpdGVfYmlnX21hcCA9ICggY2ZnICkgLT5cbiAgICAgIHsgd2Fsa19saW5lc193aXRoX3Bvc2l0aW9ucywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9mYXN0X2xpbmVyZWFkZXIoKVxuICAgICAgIyBwYXRoICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gJy90bXAvbXlmcy1tb3VudC9tYXAtY2FjaGUuanNvbmwnXG4gICAgICBGUyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpmcydcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgd3JpdGVfZmlsZSA9IC0+XG4gICAgICAgICMgaGVscCBcIs6pX19fNiB1c2luZyBKU09OIGZpbGUgYXQgI3tjZmcucGF0aH1cIlxuICAgICAgICBtYXAgPSBnZXRfcmFuZG9tX3R3bF9tYXAgeyBzaXplOiBiZW5jaG1hcmtfY2ZnLm1heF9jb3VudCwgfVxuICAgICAgICBGUy53cml0ZUZpbGVTeW5jIGNmZy5wYXRoLCAnJ1xuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHRpbWVpdCB3cml0ZV9maWxlX3N5bmMgPSAtPlxuICAgICAgICAgIGZvciBlbnRyeSBmcm9tIG1hcFxuICAgICAgICAgICAgRlMuYXBwZW5kRmlsZVN5bmMgY2ZnLnBhdGgsIFwiI3tKU09OLnN0cmluZ2lmeSBlbnRyeX1cXG5cIlxuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmVhZF9maWxlID0gKCBtYXAgPSBudWxsICkgLT5cbiAgICAgICAgIyBoZWxwIFwizqlfX183IHVzaW5nIEpTT04gZmlsZSBhdCAje2NmZy5wYXRofVwiXG4gICAgICAgIG1hcCAgPz0gbmV3IE1hcCgpXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgdGltZWl0IHJlYWRfZmlsZV9zeW5jID0gLT5cbiAgICAgICAgICBmb3IgeyBsaW5lLCB9IGZyb20gd2Fsa19saW5lc193aXRoX3Bvc2l0aW9ucyBjZmcucGF0aFxuICAgICAgICAgICAgbWFwLnNldCAoIEpTT04ucGFyc2UgbGluZSApLi4uXG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICByZXR1cm4gbWFwXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIHdyaXRlX2ZpbGUoKVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkICAgICAgICAgPSByZWFkX2ZpbGUoKVxuICAgICAgICBjb3VudF9ycHIgPSAoIG5ldyBJbnRsLk51bWJlckZvcm1hdCAnZW4tVVMnICkuZm9ybWF0IGQuc2l6ZVxuICAgICAgICBpbmZvICfOqV9fXzgnLCBcInJlYWQgI3tjb3VudF9ycHJ9IGVudHJpZXNcIlxuICAgICAgICAjIGRlYnVnICfOqV9fXzknLCBkXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGRlbW9fcmVhZF93cml0ZV9uanNfc3FsaXRlID0gKCBjZmcgKSAtPlxuICAgICAgeyB3YWxrX2xpbmVzX3dpdGhfcG9zaXRpb25zLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2Zhc3RfbGluZXJlYWRlcigpXG4gICAgICAjIHBhdGggICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAnL3RtcC9teWZzLW1vdW50L21hcC1jYWNoZS5kYidcbiAgICAgIEZTICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOmZzJ1xuICAgICAgU1FMSVRFICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6c3FsaXRlJ1xuICAgICAgeyBTUUwgfSAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZGJheSdcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc3RhdGVtZW50cyA9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgY3JlYXRlX3RhYmxlX3NlZ21lbnRzX2ZyZWU6IFNRTFwiXCJcIlxuICAgICAgICAgIGRyb3AgdGFibGUgaWYgZXhpc3RzIHNlZ21lbnRzO1xuICAgICAgICAgIGNyZWF0ZSB0YWJsZSBzZWdtZW50cyAoXG4gICAgICAgICAgICAgIHNlZ21lbnRfdGV4dCAgICAgIHRleHQgICAgbm90IG51bGwgcHJpbWFyeSBrZXksXG4gICAgICAgICAgICAgIHNlZ21lbnRfd2lkdGggICAgIGludGVnZXIgbm90IG51bGwsXG4gICAgICAgICAgICAgIHNlZ21lbnRfbGVuZ3RoICAgIGludGVnZXIgbm90IG51bGwgKTtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBjcmVhdGVfdGFibGVfc2VnbWVudHNfY2hlY2tzOiBTUUxcIlwiXCJcbiAgICAgICAgICBkcm9wIHRhYmxlIGlmIGV4aXN0cyBzZWdtZW50cztcbiAgICAgICAgICBjcmVhdGUgdGFibGUgc2VnbWVudHMgKFxuICAgICAgICAgICAgICBzZWdtZW50X3RleHQgICAgICB0ZXh0ICAgIG5vdCBudWxsIHByaW1hcnkga2V5LFxuICAgICAgICAgICAgICBzZWdtZW50X3dpZHRoICAgICBpbnRlZ2VyIG5vdCBudWxsLFxuICAgICAgICAgICAgICBzZWdtZW50X2xlbmd0aCAgICBpbnRlZ2VyIG5vdCBudWxsLFxuICAgICAgICAgICAgY29uc3RyYWludCBzZWdtZW50X3dpZHRoX2VxZ3RfemVybyAgY2hlY2sgKCBzZWdtZW50X3dpZHRoICA+PSAwICksXG4gICAgICAgICAgICBjb25zdHJhaW50IHNlZ21lbnRfbGVuZ3RoX2VxZ3RfemVybyBjaGVjayAoIHNlZ21lbnRfbGVuZ3RoID49IDAgKSApO1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGluc2VydF9zZWdtZW50X2MwcjA6IFNRTFwiXCJcIlxuICAgICAgICAgIGluc2VydCBpbnRvIHNlZ21lbnRzICAoIHNlZ21lbnRfdGV4dCwgIHNlZ21lbnRfd2lkdGgsICAgc2VnbWVudF9sZW5ndGggKVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzICAoICRzZWdtZW50X3RleHQsICRzZWdtZW50X3dpZHRoLCAgJHNlZ21lbnRfbGVuZ3RoICk7XCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgaW5zZXJ0X3NlZ21lbnRfYzFyMTogU1FMXCJcIlwiXG4gICAgICAgICAgaW5zZXJ0IGludG8gc2VnbWVudHMgICggc2VnbWVudF90ZXh0LCAgc2VnbWVudF93aWR0aCwgICBzZWdtZW50X2xlbmd0aCApXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgICggJHNlZ21lbnRfdGV4dCwgJHNlZ21lbnRfd2lkdGgsICAkc2VnbWVudF9sZW5ndGggKVxuICAgICAgICAgICAgb24gY29uZmxpY3QgKCBzZWdtZW50X3RleHQgKSBkbyBub3RoaW5nXG4gICAgICAgICAgICByZXR1cm5pbmcgKjtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBpbnNlcnRfc2VnbWVudF9jMXIwOiBTUUxcIlwiXCJcbiAgICAgICAgICBpbnNlcnQgaW50byBzZWdtZW50cyAgKCBzZWdtZW50X3RleHQsICBzZWdtZW50X3dpZHRoLCAgIHNlZ21lbnRfbGVuZ3RoIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyAgKCAkc2VnbWVudF90ZXh0LCAkc2VnbWVudF93aWR0aCwgICRzZWdtZW50X2xlbmd0aCApXG4gICAgICAgICAgICBvbiBjb25mbGljdCAoIHNlZ21lbnRfdGV4dCApIGRvIG5vdGhpbmc7XCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgaW5zZXJ0X3NlZ21lbnRfYzByMTogU1FMXCJcIlwiXG4gICAgICAgICAgaW5zZXJ0IGludG8gc2VnbWVudHMgICggc2VnbWVudF90ZXh0LCAgc2VnbWVudF93aWR0aCwgICBzZWdtZW50X2xlbmd0aCApXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgICggJHNlZ21lbnRfdGV4dCwgJHNlZ21lbnRfd2lkdGgsICAkc2VnbWVudF9sZW5ndGggKVxuICAgICAgICAgICAgcmV0dXJuaW5nICo7XCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcmVhZF9zZWdtZW50czogU1FMXCJcIlwiXG4gICAgICAgICAgc2VsZWN0ICogZnJvbSBzZWdtZW50cztcIlwiXCJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgd3JpdGVfZGIgPSAtPlxuICAgICAgICAjIGhlbHAgXCLOqV9fMTAgdXNpbmcgREIgYXQgI3tjZmcucGF0aH1cIlxuICAgICAgICBkYiAgICAgICAgICAgICAgPSBuZXcgU1FMSVRFLkRhdGFiYXNlU3luYyBjZmcucGF0aFxuICAgICAgICBzd2l0Y2ggY2ZnLmRiX3R5cGVcbiAgICAgICAgICB3aGVuICd3aXRoX2NoZWNrcycgIHRoZW4gZGIuZXhlYyBzdGF0ZW1lbnRzLmNyZWF0ZV90YWJsZV9zZWdtZW50c19jaGVja3NcbiAgICAgICAgICB3aGVuICdub19jaGVja3MnICAgIHRoZW4gZGIuZXhlYyBzdGF0ZW1lbnRzLmNyZWF0ZV90YWJsZV9zZWdtZW50c19mcmVlXG4gICAgICAgICAgZWxzZSB0aHJvdyBuZXcgRXJyb3IgXCLOqV9fMTEgdW5rbm93biB2YWx1ZSBmb3IgY2ZnLmRiX3R5cGU6ICN7cnByIGNmZy5kYl90eXBlfVwiXG4gICAgICAgIHN3aXRjaCBjZmcuaW5zZXJ0X3R5cGVcbiAgICAgICAgICB3aGVuICdjMHIwJyAgICAgICAgIHRoZW4gaW5zZXJ0X3NlZ21lbnQgPSBkYi5wcmVwYXJlIHN0YXRlbWVudHMuaW5zZXJ0X3NlZ21lbnRfYzByMFxuICAgICAgICAgIHdoZW4gJ2MwcjEnICAgICAgICAgdGhlbiBpbnNlcnRfc2VnbWVudCA9IGRiLnByZXBhcmUgc3RhdGVtZW50cy5pbnNlcnRfc2VnbWVudF9jMHIxXG4gICAgICAgICAgd2hlbiAnYzFyMCcgICAgICAgICB0aGVuIGluc2VydF9zZWdtZW50ID0gZGIucHJlcGFyZSBzdGF0ZW1lbnRzLmluc2VydF9zZWdtZW50X2MxcjBcbiAgICAgICAgICB3aGVuICdjMXIxJyAgICAgICAgIHRoZW4gaW5zZXJ0X3NlZ21lbnQgPSBkYi5wcmVwYXJlIHN0YXRlbWVudHMuaW5zZXJ0X3NlZ21lbnRfYzFyMVxuICAgICAgICAgIGVsc2UgdGhyb3cgbmV3IEVycm9yIFwizqlfXzEyIHVua25vd24gdmFsdWUgZm9yIGNmZy5pbnNlcnRfdHlwZTogI3tycHIgY2ZnLmluc2VydF90eXBlfVwiXG4gICAgICAgIG1hcCA9IGdldF9yYW5kb21fdHdsX21hcCB7IHNpemU6IGJlbmNobWFya19jZmcubWF4X2NvdW50LCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgIyMjIFRBSU5UIHVzZSB0cmFuc2FjdGlvbiAjIyNcbiAgICAgICAgZm5fbmFtZSA9IFwid3JpdGVfZGJfc3luY18je2NmZy5kYl90eXBlfV8je2NmZy5pbnNlcnRfdHlwZX1cIlxuICAgICAgICB0aW1laXQgeyB0b3RhbDogbWFwLnNpemUsIH0sIG5hbWVpdCBmbl9uYW1lLCAoeyBwcm9ncmVzcywgfSkgLT5cbiAgICAgICAgICBkYi5leGVjIFNRTFwiYmVnaW4gdHJhbnNhY3Rpb247XCJcbiAgICAgICAgICBmb3IgWyBzZWdtZW50X3RleHQsIFsgc2VnbWVudF93aWR0aCwgc2VnbWVudF9sZW5ndGgsIF0sIF0gZnJvbSBtYXBcbiAgICAgICAgICAgIHByb2dyZXNzKClcbiAgICAgICAgICAgICMgZGVidWcgJ86pX18xMycsIHsgc2VnbWVudF90ZXh0LCBzZWdtZW50X3dpZHRoLCBzZWdtZW50X2xlbmd0aCwgfVxuICAgICAgICAgICAgaW5zZXJ0X3NlZ21lbnQucnVuIHsgc2VnbWVudF90ZXh0LCBzZWdtZW50X3dpZHRoLCBzZWdtZW50X2xlbmd0aCwgfVxuICAgICAgICAgIGRiLmV4ZWMgU1FMXCJjb21taXQ7XCJcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJlYWRfZGIgPSAoIG1hcCA9IG51bGwgKSAtPlxuICAgICAgICAjIGhlbHAgXCLOqV9fMTQgdXNpbmcgREIgYXQgI3tjZmcucGF0aH1cIlxuICAgICAgICBkYiAgICAgICAgICAgICAgPSBuZXcgU1FMSVRFLkRhdGFiYXNlU3luYyBjZmcucGF0aFxuICAgICAgICByZWFkX3NlZ21lbnRzICAgPSBkYi5wcmVwYXJlIHN0YXRlbWVudHMucmVhZF9zZWdtZW50c1xuICAgICAgICBtYXAgICAgICAgICAgICA/PSBuZXcgTWFwKClcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB0aW1laXQgbmFtZWl0IFwicmVhZF9kYl9zeW5jXyN7Y2ZnLmRiX3R5cGV9XyN7Y2ZnLmluc2VydF90eXBlfVwiLCAtPlxuICAgICAgICAgIGRiLmV4ZWMgU1FMXCJiZWdpbiB0cmFuc2FjdGlvbjtcIlxuICAgICAgICAgIGZvciB7IHNlZ21lbnRfdGV4dCwgc2VnbWVudF93aWR0aCwgc2VnbWVudF9sZW5ndGgsIH0gZnJvbSByZWFkX3NlZ21lbnRzLml0ZXJhdGUoKVxuICAgICAgICAgICAgIyBkZWJ1ZyAnzqlfXzE1Jywgc2VnbWVudF90ZXh0LCBbIHNlZ21lbnRfd2lkdGgsIHNlZ21lbnRfbGVuZ3RoLCBdXG4gICAgICAgICAgICBtYXAuc2V0IHNlZ21lbnRfdGV4dCwgWyBzZWdtZW50X3dpZHRoLCBzZWdtZW50X2xlbmd0aCwgXVxuICAgICAgICAgIGRiLmV4ZWMgU1FMXCJjb21taXQ7XCJcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHJldHVybiBtYXBcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgd3JpdGVfZGIoKVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkICAgICAgICAgPSByZWFkX2RiKClcbiAgICAgICAgY291bnRfcnByID0gKCBuZXcgSW50bC5OdW1iZXJGb3JtYXQgJ2VuLVVTJyApLmZvcm1hdCBkLnNpemVcbiAgICAgICAgaW5mbyAnzqlfXzE2JywgXCJyZWFkICN7Y291bnRfcnByfSBlbnRyaWVzXCJcbiAgICAgICAgIyBkZWJ1ZyAnzqlfXzE3JywgZFxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAjIGRlbW9fcmVhZF93cml0ZV9iaWdfbWFwICAgICB7IHBhdGg6IGJlbmNobWFya19jZmcucGF0aHMuanNvbmwsIH1cbiAgICAjIGRlbW9fcmVhZF93cml0ZV9uanNfc3FsaXRlICB7IHBhdGg6IGJlbmNobWFya19jZmcucGF0aHMuZGIsIGRiX3R5cGU6ICdub19jaGVja3MnLCAgIGluc2VydF90eXBlOiAnYzByMCcsIH1cbiAgICAjIGRlbW9fcmVhZF93cml0ZV9uanNfc3FsaXRlICB7IHBhdGg6IGJlbmNobWFya19jZmcucGF0aHMuZGIsIGRiX3R5cGU6ICd3aXRoX2NoZWNrcycsIGluc2VydF90eXBlOiAnYzByMCcsIH1cbiAgICAjIGRlbW9fcmVhZF93cml0ZV9uanNfc3FsaXRlICB7IHBhdGg6IGJlbmNobWFya19jZmcucGF0aHMuZGIsIGRiX3R5cGU6ICd3aXRoX2NoZWNrcycsIGluc2VydF90eXBlOiAnYzByMScsIH1cbiAgICAjIGRlbW9fcmVhZF93cml0ZV9uanNfc3FsaXRlICB7IHBhdGg6IGJlbmNobWFya19jZmcucGF0aHMuZGIsIGRiX3R5cGU6ICd3aXRoX2NoZWNrcycsIGluc2VydF90eXBlOiAnYzFyMCcsIH1cbiAgICAjIGRlbW9fcmVhZF93cml0ZV9uanNfc3FsaXRlICB7IHBhdGg6IGJlbmNobWFya19jZmcucGF0aHMuZGIsIGRiX3R5cGU6ICd3aXRoX2NoZWNrcycsIGluc2VydF90eXBlOiAnYzFyMScsIH1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRlbW9fZ3V5ZnNfcmVhZGxpbmUoKVxuICAgIGF3YWl0IGRlbW9fZmFzdF9yZWFkbGluZV9hc3luYygpXG4gICAgZGVtb19mYXN0X3JlYWRsaW5lX3N5bmMoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmJlbmNobWFya19jZmcgPVxuICAjIG1heF9jb3VudDogMTBcbiAgIyBtYXhfY291bnQ6IDFlNlxuICBtYXhfY291bnQ6IDEyMzQ1XG4gIHBhdGhzOlxuICAgIGRiOiAgICAgJy9kZXYvc2htL21hcC1jYWNoZS5kYidcbiAgICBqc29ubDogICcvZGV2L3NobS9tYXAtY2FjaGUuanNvbmwnXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGF3YWl0ICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS5hc3luY190ZXN0IHsgYmVuY2htYXJrcywgfVxuICAjIHsgcmVxdWlyZV9icmljYWJyYWNfY2ZnLCAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X2NhbGxzaXRlKClcbiAgIyBkZWJ1ZyAnzqlfXzE4JywgcmVxdWlyZV9icmljYWJyYWNfY2ZnKCkuZGF0YXN0b3JlLm5hbWVcbiAgcmV0dXJuIG51bGxcblxuIl19
