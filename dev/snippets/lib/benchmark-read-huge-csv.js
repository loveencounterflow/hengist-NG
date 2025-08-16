(async function() {
  'use strict';
  var GTNG, GUY, Get_random, PATH, SFMODULES, Test, alert, benchmark_cfg, benchmarks, blue, bold, cache, debug, echo, f, get_random_twl_map, gold, green, grey, help, hrtime_as_bigint, info, inspect, log, nfa, plain, praise, red, reverse, rpr, timeit, urge, warn, whisper, white,
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
          var R, filter, get_width, length, length_is_const, max, max_length, max_rounds, min, min_length, on_exhaustion, on_stats, producer, size, stats, text;
          ({min, max, length, size, min_length, max_length, filter, on_stats, on_exhaustion, max_rounds} = {...internals.templates.set_of_texts, ...cfg});
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
    return timeit(get_random_twl_map_ = () => {
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
        max: 0x058f
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
          help(`Ω___9 using JSON file at ${cfg.path}`);
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
          help(`Ω__10 using JSON file at ${cfg.path}`);
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
          insert_segment: SQL`insert into segments  ( segment_text,  segment_width,   segment_length )
              values  ( $segment_text, $segment_width,  $segment_length )
  on conflict ( segment_text ) do nothing
  returning *;`,
          //...................................................................................................
          read_segments: SQL`select * from segments;`
        };
        //.....................................................................................................
        write_db = function() {
          var db, insert_segment, map, write_db_sync;
          help(`Ω__13 using DB at ${cfg.path}`);
          db = new SQLITE.DatabaseSync(cfg.path);
          db.exec(statements.create_table_segments_free);
          insert_segment = db.prepare(statements.insert_segment);
          map = get_random_twl_map({
            size: benchmark_cfg.max_count
          });
          //...................................................................................................
          /* TAINT use transaction */
          timeit(write_db_sync = function() {
            var segment_length, segment_text, segment_width, x;
            db.exec(SQL`begin transaction;`);
            for (x of map) {
              [segment_text, [segment_width, segment_length]] = x;
              // debug 'Ω__14', { segment_text, segment_width, segment_length, }
              insert_segment.run({segment_text, segment_width, segment_length});
            }
            db.exec(SQL`commit;`);
            return null;
          });
          //...................................................................................................
          return null;
        };
        //.....................................................................................................
        read_db = function(map = null) {
          var db, read_db_sync, read_segments;
          help(`Ω__15 using DB at ${cfg.path}`);
          db = new SQLITE.DatabaseSync(cfg.path);
          read_segments = db.prepare(statements.read_segments);
          if (map == null) {
            map = new Map();
          }
          //...................................................................................................
          timeit(read_db_sync = function() {
            var segment_length, segment_text, segment_width, x;
            db.exec(SQL`begin transaction;`);
            for (x of read_segments.iterate()) {
              ({segment_text, segment_width, segment_length} = x);
              // debug 'Ω__16', segment_text, [ segment_width, segment_length, ]
              map.set(segment_text, [segment_width, segment_length]);
            }
            db.exec(SQL`commit;`);
            return null;
          });
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
          info('Ω__17', `read ${count_rpr} entries`);
          // debug 'Ω__18', d
          return null;
        })();
        //.....................................................................................................
        return null;
      };
      //-------------------------------------------------------------------------------------------------------
      // demo_fast_readline_sync()
      demo_read_write_big_map({
        path: benchmark_cfg.paths.jsonl
      });
      demo_read_write_njs_sqlite({
        path: benchmark_cfg.paths.db
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
    // max_count: 1e5
    max_count: 1e3,
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
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JlbmNobWFyay1yZWFkLWh1Z2UtY3N2LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLFVBQUEsRUFBQSxJQUFBLEVBQUEsU0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsYUFBQSxFQUFBLFVBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxrQkFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxnQkFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLE1BQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBO0lBQUEsMkRBQUE7OztFQUdBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsMENBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdFLEdBWEYsQ0FBQSxHQVc0QixHQUFHLENBQUMsR0FYaEM7O0VBWUEsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUF6QkE7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QVg7SUFDQSxLQUFBLEVBQ0U7TUFBQSxFQUFBLEVBQVEsdUJBQVI7TUFDQSxLQUFBLEVBQVE7SUFEUjtFQUZGLEVBeFRGOzs7RUE4VEEsSUFBRyxNQUFBLEtBQVUsT0FBTyxDQUFDLElBQXJCO0lBQStCLE1BQVMsQ0FBQSxLQUFBLENBQUEsQ0FBQSxHQUFBO0FBQ3hDLFVBQUE7TUFBRSxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLEtBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLElBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxNQUFNLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsVUFBekIsQ0FBb0MsQ0FBRSxVQUFGLENBQXBDO0FBQ04sYUFBTztJQUorQixDQUFBLElBQXhDOztBQTlUQSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2JlbmNobWFyay11bmljb2RlLWNoYXJhY3Rlci13aWR0aC5jb2ZmZWUnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgZ3JlZW5cbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiMgd3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcbnsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG5QQVRIICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2luZ2xlLWZpbGUtbW9kdWxlcydcbnsgR2V0X3JhbmRvbSwgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfcmFuZG9tKClcbnsgaHJ0aW1lX2FzX2JpZ2ludCxcbiAgdGltZWl0LCAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9iZW5jaG1hcmtpbmcoKVxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuT2JqZWN0LmFzc2lnbiBTRk1PRFVMRVMudW5zdGFibGUsXG5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICMjIyBOT1RFIEZ1dHVyZSBTaW5nbGUtRmlsZSBNb2R1bGUgIyMjXG4gIHJlcXVpcmVfcmVhZGxpbmVfb3B0aW1pemVkOiAtPlxuXG4gICAgRlMgID0gcmVxdWlyZSAnbm9kZTpmcydcbiAgICBubCAgPSAnXFxuJy5jb2RlUG9pbnRBdCAwXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB3YWxrX2xpbmVzX3dpdGhfcG9zaXRpb25zX2FzeW5jID0gKCBwYXRoICkgLT5cbiAgICAgICMgZnJvbSBtbW9tdGNoZXYvcmVhZGNzdi9yZWFkY3N2LWJ1ZmZlcmVkLW9wdC5qc1xuICAgICAgcmVhZHN0cmVhbSAgPSBGUy5jcmVhdGVSZWFkU3RyZWFtIHBhdGhcbiAgICAgIHJlbWFpbmRlciAgID0gJydcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGZvciBhd2FpdCBidWZmZXIgZnJvbSByZWFkc3RyZWFtXG4gICAgICAgIHN0YXJ0ID0gMFxuICAgICAgICBzdG9wICA9IG51bGxcbiAgICAgICAgd2hpbGUgKCBzdG9wID0gYnVmZmVyLmluZGV4T2YgbmwsIHN0YXJ0ICkgaXNudCAtMVxuICAgICAgICAgICMgZGVidWcgJ86pX19fMScsIHsgc3RhcnQsIHN0b3AsIH0sIHJwciAoICggYnVmZmVyLnNsaWNlIHN0YXJ0LCBzdG9wICkudG9TdHJpbmcgJ3V0Zi04JyApWyAuLiAxMDggXVxuICAgICAgICAgIGlmICggc3RhcnQgPT0gMCApIGFuZCAoIHJlbWFpbmRlci5sZW5ndGggPiAwIClcbiAgICAgICAgICAgICMgZGVidWcgJ86pX19fMicsIHJlbWFpbmRlciArIGJ1ZmZlci5zbGljZSAwLCBzdG9wXG4gICAgICAgICAgICB5aWVsZCByZW1haW5kZXIgKyBidWZmZXIuc2xpY2UgMCwgc3RvcCArIDFcbiAgICAgICAgICAgIHJlbWFpbmRlciA9ICcnXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgeWllbGQgKCBidWZmZXIuc2xpY2Ugc3RhcnQsIHN0b3AgKyAxICkudG9TdHJpbmcgJ3V0Zi04J1xuICAgICAgICAgIHN0YXJ0ID0gc3RvcCArIDFcbiAgICAgICAgcmVtYWluZGVyID0gYnVmZmVyLnNsaWNlIHN0YXJ0XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgcmV0dXJuIGV4cG9ydHMgPSB7IHdhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnNfYXN5bmMsIH1cblxuXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAjIyMgTk9URSBGdXR1cmUgU2luZ2xlLUZpbGUgTW9kdWxlICMjI1xuICByZXF1aXJlX2dldF9yYW5kb21fYWRkaXRpb25zOiAtPlxuICAgIHsgaW50ZXJuYWxzLCB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X3JhbmRvbSgpXG5cbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY2xhc3MgR2V0X3JhbmRvbV9leHQgZXh0ZW5kcyBHZXRfcmFuZG9tXG5cbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBnZXRfdGV4dHNfbWFwcGVkX3RvX3dpZHRoX2xlbmd0aDogKCBjZmcgKSAtPlxuICAgICAgICB7IG1pbixcbiAgICAgICAgICBtYXgsXG4gICAgICAgICAgbGVuZ3RoLFxuICAgICAgICAgIHNpemUsXG4gICAgICAgICAgbWluX2xlbmd0aCxcbiAgICAgICAgICBtYXhfbGVuZ3RoLFxuICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICBvbl9zdGF0cyxcbiAgICAgICAgICBvbl9leGhhdXN0aW9uLFxuICAgICAgICAgIG1heF9yb3VuZHMsICAgfSA9IHsgaW50ZXJuYWxzLnRlbXBsYXRlcy5zZXRfb2ZfdGV4dHMuLi4sIGNmZy4uLiwgfVxuICAgICAgICB7IG1pbl9sZW5ndGgsXG4gICAgICAgICAgbWF4X2xlbmd0aCwgICB9ID0gQF9nZXRfbWluX21heF9sZW5ndGggeyBsZW5ndGgsIG1pbl9sZW5ndGgsIG1heF9sZW5ndGgsIH1cbiAgICAgICAgbGVuZ3RoX2lzX2NvbnN0ICAgPSBtaW5fbGVuZ3RoIGlzIG1heF9sZW5ndGhcbiAgICAgICAgbGVuZ3RoICAgICAgICAgICAgPSBtaW5fbGVuZ3RoXG4gICAgICAgIFIgICAgICAgICAgICAgICAgID0gbmV3IE1hcCgpXG4gICAgICAgIHByb2R1Y2VyICAgICAgICAgID0gQHRleHRfcHJvZHVjZXIgeyBtaW4sIG1heCwgbGVuZ3RoLCBtaW5fbGVuZ3RoLCBtYXhfbGVuZ3RoLCBmaWx0ZXIsIH1cbiAgICAgICAgc3RhdHMgICAgICAgICAgICAgPSBAX25ld19zdGF0cyB7IG5hbWU6ICdzZXRfb2ZfdGV4dHMnLCBvbl9zdGF0cywgb25fZXhoYXVzdGlvbiwgbWF4X3JvdW5kcywgfVxuICAgICAgICBnZXRfd2lkdGggICAgICAgICA9IEBpbnRlZ2VyX3Byb2R1Y2VyIHsgbWluOiAxLCBtYXg6IDEwLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBmb3IgdGV4dCBmcm9tIEB3YWxrX3VuaXF1ZSB7IHByb2R1Y2VyLCBuOiBzaXplLCBvbl9zdGF0cywgb25fZXhoYXVzdGlvbiwgbWF4X3JvdW5kcywgfVxuICAgICAgICAgIFIuc2V0IHRleHQsIFsgdGV4dC5sZW5ndGgsIGdldF93aWR0aCgpLCBdXG4gICAgICAgIHJldHVybiAoIHN0YXRzLmZpbmlzaCBSIClcblxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIHJldHVybiBleHBvcnRzID0geyBHZXRfcmFuZG9tX2V4dCwgaW50ZXJuYWxzLCB9XG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jYWNoZSA9IG5ldyBNYXAoKVxuZ2V0X3JhbmRvbV90d2xfbWFwID0gKHsgc2l6ZSA9IDEwIH09e30pIC0+IHRpbWVpdCBnZXRfcmFuZG9tX3R3bF9tYXBfID0gPT5cbiAga2V5ID0gXCJ0d2xfbWFwe3NpemU6I3tzaXplfX1cIlxuICByZXR1cm4gUiBpZiAoIFIgPSBjYWNoZS5nZXQga2V5ICk/XG4gIHsgR2V0X3JhbmRvbV9leHQsICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfcmFuZG9tX2FkZGl0aW9ucygpXG4gIGdldF9yYW5kb20gICAgICAgICAgICAgICAgICAgICAgPSBuZXcgR2V0X3JhbmRvbV9leHQoKVxuICBSID0gZ2V0X3JhbmRvbS5nZXRfdGV4dHNfbWFwcGVkX3RvX3dpZHRoX2xlbmd0aCB7XG4gICAgc2l6ZSwgbWluX2xlbmd0aDogMSwgbWF4X2xlbmd0aDogMjAsIG1pbjogMHgwMjEsIG1heDogMHgwNThmLCB9XG4gICAgIyBmaWx0ZXI6IC9eXFxwe0x9KyQvdmksIH1cbiAgY2FjaGUuc2V0IGtleSwgUlxuICByZXR1cm4gUlxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBiZW5jaG1hcmtzID0gYmVuY2htYXJrcyA9XG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBydW5fYmVuY2htYXJrczogLT5cblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZGVtb19mYXN0X3JlYWRsaW5lX2FzeW5jID0gLT5cbiAgICAgIHJlbHBhdGggPSAnLi4vLi4vLi4vLi4vLi4vM3JkLXBhcnR5LXJlcG9zL21tb210Y2hldi1yZWFkY3N2LWZvci1yZWFkLWZpbGUtYmVuY2htYXJrJ1xuICAgICAgeyB3YWxrX2xpbmVzX3dpdGhfcG9zaXRpb25zX2FzeW5jLCB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfcmVhZGxpbmVfb3B0aW1pemVkKClcbiAgICAgIHBhdGggPSBQQVRILnJlc29sdmUgUEFUSC5qb2luIF9fZGlybmFtZSwgcmVscGF0aCwgJ2FsbENvdW50cmllcy50eHQnXG4gICAgICBjb3VudCA9IDBcbiAgICAgIHQwID0gaHJ0aW1lX2FzX2JpZ2ludCgpXG4gICAgICBmb3IgYXdhaXQgbGluZSBmcm9tIHdhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnNfYXN5bmMgcGF0aFxuICAgICAgICBjb3VudCsrXG4gICAgICAgICMgcmV0dXJuIG51bGwgaWYgY291bnQgPiAxMDBcbiAgICAgICAgZWNobyAnzqlfX18zJywgY291bnQsICggcnByIGxpbmVbIC4uIDEwOCBdICkgaWYgKCBjb3VudCAlJSAxXzAwMF8wMDAgKSBpcyAwXG4gICAgICB0MSA9IGhydGltZV9hc19iaWdpbnQoKVxuICAgICAgZWNobyAnzqlfX180JywgJ2RlbW9fZmFzdF9yZWFkbGluZV9hc3luYycsIGZcIiN7KCBOdW1iZXIgdDEgLSB0MCApIC8gMV8wMDBfMDAwfTo+MjAsLjlmO1wiXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBkZW1vX2Zhc3RfcmVhZGxpbmVfc3luYyA9IC0+XG4gICAgICByZWxwYXRoID0gJy4uLy4uLy4uLy4uLy4uLzNyZC1wYXJ0eS1yZXBvcy9tbW9tdGNoZXYtcmVhZGNzdi1mb3ItcmVhZC1maWxlLWJlbmNobWFyaydcbiAgICAgIHsgd2Fsa19saW5lc193aXRoX3Bvc2l0aW9ucywgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2Zhc3RfbGluZXJlYWRlcigpXG4gICAgICBwYXRoID0gUEFUSC5yZXNvbHZlIFBBVEguam9pbiBfX2Rpcm5hbWUsIHJlbHBhdGgsICdhbGxDb3VudHJpZXMudHh0J1xuICAgICAgY291bnQgPSAwXG4gICAgICB0MCA9IGhydGltZV9hc19iaWdpbnQoKVxuICAgICAgZm9yIHsgbGluZSwgfSBmcm9tIHdhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnMgcGF0aFxuICAgICAgICBjb3VudCsrXG4gICAgICAgICMgcmV0dXJuIG51bGwgaWYgY291bnQgPiAxMDBcbiAgICAgICAgZWNobyAnzqlfX181JywgY291bnQsICggcnByIGxpbmVbIC4uIDEwOCBdICkgaWYgKCBjb3VudCAlJSAxXzAwMF8wMDAgKSBpcyAwXG4gICAgICB0MSA9IGhydGltZV9hc19iaWdpbnQoKVxuICAgICAgZWNobyAnzqlfX182JywgJ2RlbW9fZmFzdF9yZWFkbGluZV9zeW5jJywgZlwiI3soIE51bWJlciB0MSAtIHQwICkgLyAxXzAwMF8wMDB9Oj4yMCwuOWY7XCJcbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGRlbW9fZ3V5ZnNfcmVhZGxpbmUgPSAtPlxuICAgICAgcmVscGF0aCA9ICcuLi8uLi8uLi8uLi8uLi8zcmQtcGFydHktcmVwb3MvbW1vbXRjaGV2LXJlYWRjc3YtZm9yLXJlYWQtZmlsZS1iZW5jaG1hcmsnXG4gICAgICBwYXRoID0gUEFUSC5yZXNvbHZlIFBBVEguam9pbiBfX2Rpcm5hbWUsIHJlbHBhdGgsICdhbGxDb3VudHJpZXMudHh0J1xuICAgICAgY291bnQgPSAwXG4gICAgICB0MCA9IGhydGltZV9hc19iaWdpbnQoKVxuICAgICAgZm9yIHsgbGluZSwgfSBmcm9tIEdVWS5mcy53YWxrX2xpbmVzX3dpdGhfcG9zaXRpb25zIHBhdGhcbiAgICAgICAgY291bnQrK1xuICAgICAgICAjIHJldHVybiBudWxsIGlmIGNvdW50ID4gMTAwXG4gICAgICAgIGVjaG8gJ86pX19fNycsIGNvdW50LCAoIHJwciBsaW5lWyAuLiAxMDggXSApIGlmICggY291bnQgJSUgMV8wMDBfMDAwICkgaXMgMFxuICAgICAgdDEgPSBocnRpbWVfYXNfYmlnaW50KClcbiAgICAgIGVjaG8gJ86pX19fOCcsICdkZW1vX2d1eWZzX3JlYWRsaW5lJywgZlwiI3soIE51bWJlciB0MSAtIHQwICkgLyAxXzAwMF8wMDB9Oj4yMCwuOWY7XCJcbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGRlbW9fcmVhZF93cml0ZV9iaWdfbWFwID0gKCBjZmcgKSAtPlxuICAgICAgeyB3YWxrX2xpbmVzX3dpdGhfcG9zaXRpb25zLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2Zhc3RfbGluZXJlYWRlcigpXG4gICAgICAjIHBhdGggICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAnL3RtcC9teWZzLW1vdW50L21hcC1jYWNoZS5qc29ubCdcbiAgICAgIEZTICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOmZzJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICB3cml0ZV9maWxlID0gLT5cbiAgICAgICAgaGVscCBcIs6pX19fOSB1c2luZyBKU09OIGZpbGUgYXQgI3tjZmcucGF0aH1cIlxuICAgICAgICBtYXAgPSBnZXRfcmFuZG9tX3R3bF9tYXAgeyBzaXplOiBiZW5jaG1hcmtfY2ZnLm1heF9jb3VudCwgfVxuICAgICAgICBGUy53cml0ZUZpbGVTeW5jIGNmZy5wYXRoLCAnJ1xuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHRpbWVpdCB3cml0ZV9maWxlX3N5bmMgPSAtPlxuICAgICAgICAgIGZvciBlbnRyeSBmcm9tIG1hcFxuICAgICAgICAgICAgRlMuYXBwZW5kRmlsZVN5bmMgY2ZnLnBhdGgsIFwiI3tKU09OLnN0cmluZ2lmeSBlbnRyeX1cXG5cIlxuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmVhZF9maWxlID0gKCBtYXAgPSBudWxsICkgLT5cbiAgICAgICAgaGVscCBcIs6pX18xMCB1c2luZyBKU09OIGZpbGUgYXQgI3tjZmcucGF0aH1cIlxuICAgICAgICBtYXAgID89IG5ldyBNYXAoKVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHRpbWVpdCByZWFkX2ZpbGVfc3luYyA9IC0+XG4gICAgICAgICAgZm9yIHsgbGluZSwgfSBmcm9tIHdhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnMgY2ZnLnBhdGhcbiAgICAgICAgICAgIG1hcC5zZXQgKCBKU09OLnBhcnNlIGxpbmUgKS4uLlxuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcmV0dXJuIG1hcFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICB3cml0ZV9maWxlKClcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZCAgICAgICAgID0gcmVhZF9maWxlKClcbiAgICAgICAgY291bnRfcnByID0gKCBuZXcgSW50bC5OdW1iZXJGb3JtYXQgJ2VuLVVTJyApLmZvcm1hdCBkLnNpemVcbiAgICAgICAgaW5mbyAnzqlfXzExJywgXCJyZWFkICN7Y291bnRfcnByfSBlbnRyaWVzXCJcbiAgICAgICAgIyBkZWJ1ZyAnzqlfXzEyJywgZFxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBkZW1vX3JlYWRfd3JpdGVfbmpzX3NxbGl0ZSA9ICggY2ZnICkgLT5cbiAgICAgIHsgd2Fsa19saW5lc193aXRoX3Bvc2l0aW9ucywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9mYXN0X2xpbmVyZWFkZXIoKVxuICAgICAgIyBwYXRoICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gJy90bXAvbXlmcy1tb3VudC9tYXAtY2FjaGUuZGInXG4gICAgICBGUyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpmcydcbiAgICAgIFNRTElURSAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnNxbGl0ZSdcbiAgICAgIHsgU1FMIH0gICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2RiYXknXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHN0YXRlbWVudHMgPVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGNyZWF0ZV90YWJsZV9zZWdtZW50c19mcmVlOiBTUUxcIlwiXCJcbiAgICAgICAgICBkcm9wIHRhYmxlIGlmIGV4aXN0cyBzZWdtZW50cztcbiAgICAgICAgICBjcmVhdGUgdGFibGUgc2VnbWVudHMgKFxuICAgICAgICAgICAgICBzZWdtZW50X3RleHQgICAgICB0ZXh0ICAgIG5vdCBudWxsIHByaW1hcnkga2V5LFxuICAgICAgICAgICAgICBzZWdtZW50X3dpZHRoICAgICBpbnRlZ2VyIG5vdCBudWxsLFxuICAgICAgICAgICAgICBzZWdtZW50X2xlbmd0aCAgICBpbnRlZ2VyIG5vdCBudWxsICk7XCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgY3JlYXRlX3RhYmxlX3NlZ21lbnRzX2NoZWNrczogU1FMXCJcIlwiXG4gICAgICAgICAgZHJvcCB0YWJsZSBpZiBleGlzdHMgc2VnbWVudHM7XG4gICAgICAgICAgY3JlYXRlIHRhYmxlIHNlZ21lbnRzIChcbiAgICAgICAgICAgICAgc2VnbWVudF90ZXh0ICAgICAgdGV4dCAgICBub3QgbnVsbCBwcmltYXJ5IGtleSxcbiAgICAgICAgICAgICAgc2VnbWVudF93aWR0aCAgICAgaW50ZWdlciBub3QgbnVsbCxcbiAgICAgICAgICAgICAgc2VnbWVudF9sZW5ndGggICAgaW50ZWdlciBub3QgbnVsbCxcbiAgICAgICAgICAgIGNvbnN0cmFpbnQgc2VnbWVudF93aWR0aF9lcWd0X3plcm8gIGNoZWNrICggc2VnbWVudF93aWR0aCAgPj0gMCApLFxuICAgICAgICAgICAgY29uc3RyYWludCBzZWdtZW50X2xlbmd0aF9lcWd0X3plcm8gY2hlY2sgKCBzZWdtZW50X2xlbmd0aCA+PSAwICkgKTtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBpbnNlcnRfc2VnbWVudDogU1FMXCJcIlwiXG4gICAgICAgICAgaW5zZXJ0IGludG8gc2VnbWVudHMgICggc2VnbWVudF90ZXh0LCAgc2VnbWVudF93aWR0aCwgICBzZWdtZW50X2xlbmd0aCApXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgICggJHNlZ21lbnRfdGV4dCwgJHNlZ21lbnRfd2lkdGgsICAkc2VnbWVudF9sZW5ndGggKVxuICAgICAgICAgICAgb24gY29uZmxpY3QgKCBzZWdtZW50X3RleHQgKSBkbyBub3RoaW5nXG4gICAgICAgICAgICByZXR1cm5pbmcgKjtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICByZWFkX3NlZ21lbnRzOiBTUUxcIlwiXCJcbiAgICAgICAgICBzZWxlY3QgKiBmcm9tIHNlZ21lbnRzO1wiXCJcIlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICB3cml0ZV9kYiA9IC0+XG4gICAgICAgIGhlbHAgXCLOqV9fMTMgdXNpbmcgREIgYXQgI3tjZmcucGF0aH1cIlxuICAgICAgICBkYiAgICAgICAgICAgICAgPSBuZXcgU1FMSVRFLkRhdGFiYXNlU3luYyBjZmcucGF0aFxuICAgICAgICBkYi5leGVjIHN0YXRlbWVudHMuY3JlYXRlX3RhYmxlX3NlZ21lbnRzX2ZyZWVcbiAgICAgICAgaW5zZXJ0X3NlZ21lbnQgID0gZGIucHJlcGFyZSBzdGF0ZW1lbnRzLmluc2VydF9zZWdtZW50XG4gICAgICAgIG1hcCAgICAgICAgICAgICA9IGdldF9yYW5kb21fdHdsX21hcCB7IHNpemU6IGJlbmNobWFya19jZmcubWF4X2NvdW50LCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgIyMjIFRBSU5UIHVzZSB0cmFuc2FjdGlvbiAjIyNcbiAgICAgICAgdGltZWl0IHdyaXRlX2RiX3N5bmMgPSAtPlxuICAgICAgICAgIGRiLmV4ZWMgU1FMXCJiZWdpbiB0cmFuc2FjdGlvbjtcIlxuICAgICAgICAgIGZvciBbIHNlZ21lbnRfdGV4dCwgWyBzZWdtZW50X3dpZHRoLCBzZWdtZW50X2xlbmd0aCwgXSwgXSBmcm9tIG1hcFxuICAgICAgICAgICAgIyBkZWJ1ZyAnzqlfXzE0JywgeyBzZWdtZW50X3RleHQsIHNlZ21lbnRfd2lkdGgsIHNlZ21lbnRfbGVuZ3RoLCB9XG4gICAgICAgICAgICBpbnNlcnRfc2VnbWVudC5ydW4geyBzZWdtZW50X3RleHQsIHNlZ21lbnRfd2lkdGgsIHNlZ21lbnRfbGVuZ3RoLCB9XG4gICAgICAgICAgZGIuZXhlYyBTUUxcImNvbW1pdDtcIlxuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmVhZF9kYiA9ICggbWFwID0gbnVsbCApIC0+XG4gICAgICAgIGhlbHAgXCLOqV9fMTUgdXNpbmcgREIgYXQgI3tjZmcucGF0aH1cIlxuICAgICAgICBkYiAgICAgICAgICAgICAgPSBuZXcgU1FMSVRFLkRhdGFiYXNlU3luYyBjZmcucGF0aFxuICAgICAgICByZWFkX3NlZ21lbnRzICAgPSBkYi5wcmVwYXJlIHN0YXRlbWVudHMucmVhZF9zZWdtZW50c1xuICAgICAgICBtYXAgICAgICAgICAgICA/PSBuZXcgTWFwKClcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB0aW1laXQgcmVhZF9kYl9zeW5jID0gLT5cbiAgICAgICAgICBkYi5leGVjIFNRTFwiYmVnaW4gdHJhbnNhY3Rpb247XCJcbiAgICAgICAgICBmb3IgeyBzZWdtZW50X3RleHQsIHNlZ21lbnRfd2lkdGgsIHNlZ21lbnRfbGVuZ3RoLCB9IGZyb20gcmVhZF9zZWdtZW50cy5pdGVyYXRlKClcbiAgICAgICAgICAgICMgZGVidWcgJ86pX18xNicsIHNlZ21lbnRfdGV4dCwgWyBzZWdtZW50X3dpZHRoLCBzZWdtZW50X2xlbmd0aCwgXVxuICAgICAgICAgICAgbWFwLnNldCBzZWdtZW50X3RleHQsIFsgc2VnbWVudF93aWR0aCwgc2VnbWVudF9sZW5ndGgsIF1cbiAgICAgICAgICBkYi5leGVjIFNRTFwiY29tbWl0O1wiXG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICByZXR1cm4gbWFwXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIHdyaXRlX2RiKClcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZCAgICAgICAgID0gcmVhZF9kYigpXG4gICAgICAgIGNvdW50X3JwciA9ICggbmV3IEludGwuTnVtYmVyRm9ybWF0ICdlbi1VUycgKS5mb3JtYXQgZC5zaXplXG4gICAgICAgIGluZm8gJ86pX18xNycsIFwicmVhZCAje2NvdW50X3Jwcn0gZW50cmllc1wiXG4gICAgICAgICMgZGVidWcgJ86pX18xOCcsIGRcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgIyBkZW1vX2Zhc3RfcmVhZGxpbmVfc3luYygpXG4gICAgZGVtb19yZWFkX3dyaXRlX2JpZ19tYXAgICAgIHsgcGF0aDogYmVuY2htYXJrX2NmZy5wYXRocy5qc29ubCwgfVxuICAgIGRlbW9fcmVhZF93cml0ZV9uanNfc3FsaXRlICB7IHBhdGg6IGJlbmNobWFya19jZmcucGF0aHMuZGIsIH1cbiAgICAjIGF3YWl0IGRlbW9fZmFzdF9yZWFkbGluZV9hc3luYygpXG4gICAgIyBkZW1vX2d1eWZzX3JlYWRsaW5lKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5iZW5jaG1hcmtfY2ZnID1cbiAgIyBtYXhfY291bnQ6IDEwXG4gICMgbWF4X2NvdW50OiAxZTVcbiAgbWF4X2NvdW50OiAxZTNcbiAgcGF0aHM6XG4gICAgZGI6ICAgICAnL2Rldi9zaG0vbWFwLWNhY2hlLmRiJ1xuICAgIGpzb25sOiAgJy9kZXYvc2htL21hcC1jYWNoZS5qc29ubCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgYXdhaXQgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLmFzeW5jX3Rlc3QgeyBiZW5jaG1hcmtzLCB9XG4gIHJldHVybiBudWxsXG5cbiJdfQ==
//# sourceURL=../src/benchmark-read-huge-csv.coffee