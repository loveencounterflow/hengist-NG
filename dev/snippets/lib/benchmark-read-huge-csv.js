(async function() {
  'use strict';
  var GTNG, GUY, PATH, RANDOM_TOOLS, SFMODULES, Test, alert, benchmarks, blue, bold, debug, echo, f, gold, green, grey, help, info, inspect, log, nfa, plain, praise, red, reverse, rpr, urge, warn, whisper, white,
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

  RANDOM_TOOLS = SFMODULES.unstable.require_random_tools();

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
    }
  });

  //===========================================================================================================
  this.benchmarks = benchmarks = {
    //---------------------------------------------------------------------------------------------------------
    run_benchmarks: function() {
      var demo_fast_readline_async, demo_fast_readline_sync, demo_guyfs_readline, demo_read_write_big_map, demo_read_write_njs_sqlite;
      //-------------------------------------------------------------------------------------------------------
      demo_fast_readline_async = async function() {
        var count, hrtime_as_bigint, line, path, relpath, t0, t1, walk_lines_with_positions_async;
        ({hrtime_as_bigint} = SFMODULES.unstable.require_benchmarking());
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
        var count, hrtime_as_bigint, line, path, relpath, t0, t1, walk_lines_with_positions, x;
        ({hrtime_as_bigint} = SFMODULES.unstable.require_benchmarking());
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
        var count, hrtime_as_bigint, line, path, relpath, t0, t1, x;
        ({hrtime_as_bigint} = SFMODULES.unstable.require_benchmarking());
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
      demo_read_write_big_map = function() {
        var FS, hrtime_as_bigint, max_count, path, read_file, timeit, walk_lines_with_positions, write_file;
        ({hrtime_as_bigint, timeit} = SFMODULES.unstable.require_benchmarking());
        ({walk_lines_with_positions} = SFMODULES.unstable.require_fast_linereader());
        max_count = 1e5;
        path = '/tmp/map-cache.jsonl';
        FS = require('node:fs');
        //.....................................................................................................
        write_file = function() {
          var random_twl_map, write_file_sync;
          random_twl_map = RANDOM_TOOLS.get_texts_mapped_to_width_length({
            size: 10
          });
          debug('Ω__12', random_twl_map);
          process.exit(111);
          FS.writeFileSync(path, '');
          //...................................................................................................
          timeit(write_file_sync = function() {
            var entry;
            for (entry of map) {
              FS.appendFileSync(path, `${JSON.stringify(entry)}\n`);
            }
            return null;
          });
          //...................................................................................................
          return null;
        };
        //.....................................................................................................
        read_file = function(map = null) {
          var read_file_sync;
          if (map == null) {
            map = new Map();
          }
          //...................................................................................................
          timeit(read_file_sync = function() {
            var line, x;
            for (x of walk_lines_with_positions(path)) {
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
          info('Ω__12', `read ${count_rpr} entries`);
          // debug 'Ω__13', d
          return null;
        })();
        //.....................................................................................................
        return null;
      };
      //-------------------------------------------------------------------------------------------------------
      demo_read_write_njs_sqlite = function() {
        var FS, SQL, SQLITE, hrtime_as_bigint, max_count, path, read_db, statements, timeit, walk_lines_with_positions, write_db;
        ({hrtime_as_bigint, timeit} = SFMODULES.unstable.require_benchmarking());
        ({walk_lines_with_positions} = SFMODULES.unstable.require_fast_linereader());
        max_count = 1e5;
        path = '/tmp/map-cache.db';
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
          insert_segment: SQL`insert into segments  ( segment_text  )
              values  ( $segment_text )
  on conflict ( segment_text ) do nothing
  returning *;`
        };
        //.....................................................................................................
        write_db = function() {
          var count, db, entry, i, insert_segment, map, old_size, ref, write_db_sync;
          map = new Map();
          old_size = 0;
          //...................................................................................................
          db = new SQLITE.DatabaseSync(path);
          db.exec(statements.create_table_segments_free);
          insert_segment = db.prepare(statements.insert_segment);
//...................................................................................................
          for (count = i = 1, ref = max_count; (1 <= ref ? i <= ref : i >= ref); count = 1 <= ref ? ++i : --i) {
            while (map.size === old_size) {
              entry = [get_unique_text(), GUY.rnd.random_integer(0, 10)];
              map.set(...entry);
            }
            old_size = map.size;
          }
          //...................................................................................................
          timeit(write_db_sync = function() {
            for (entry of map) {
              FS.appendFileSync(path, `${JSON.stringify(entry)}\n`);
            }
            return null;
          });
          //...................................................................................................
          return null;
        };
        //.....................................................................................................
        read_db = function(map = null) {
          var read_db_sync;
          if (map == null) {
            map = new Map();
          }
          //...................................................................................................
          timeit(read_db_sync = function() {
            var line, x;
            for (x of walk_lines_with_positions(path)) {
              ({line} = x);
              map.set(...(JSON.parse(line)));
            }
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
          info('Ω__12', `read ${count_rpr} entries`);
          // debug 'Ω__13', d
          return null;
        })();
        //.....................................................................................................
        return null;
      };
      //-------------------------------------------------------------------------------------------------------
      // demo_fast_readline_sync()
      demo_read_write_big_map();
      demo_read_write_njs_sqlite();
      // await demo_fast_readline_async()
      // demo_guyfs_readline()
      //.......................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (async() => {
      var guytest_cfg;
      // demo_infinite_proxy()
      // demo_colorful_proxy()
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JlbmNobWFyay1yZWFkLWh1Z2UtY3N2LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxZQUFBLEVBQUEsU0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsVUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUE7SUFBQSwyREFBQTs7O0VBR0EsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQiwwQ0FBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLEtBSEYsRUFJRSxLQUpGLEVBS0UsSUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsR0FSRixFQVNFLElBVEYsRUFVRSxPQVZGLEVBV0UsR0FYRixDQUFBLEdBVzRCLEdBQUcsQ0FBQyxHQVhoQzs7RUFZQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1QixFQXpCQTs7O0VBMkJBLENBQUEsQ0FBRSxHQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLDRDQUFSLENB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QUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxNQUFNLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsVUFBekIsQ0FBb0MsQ0FBRSxVQUFGLENBQXBDO0FBQ04sYUFBTztJQU4rQixDQUFBLElBQXhDOztBQXJRQSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2JlbmNobWFyay11bmljb2RlLWNoYXJhY3Rlci13aWR0aC5jb2ZmZWUnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgZ3JlZW5cbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiMgd3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcbnsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG5QQVRIICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2luZ2xlLWZpbGUtbW9kdWxlcydcblJBTkRPTV9UT09MUyAgICAgICAgICAgICAgPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9yYW5kb21fdG9vbHMoKVxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuT2JqZWN0LmFzc2lnbiBTRk1PRFVMRVMudW5zdGFibGUsXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAjIyMgTk9URSBGdXR1cmUgU2luZ2xlLUZpbGUgTW9kdWxlICMjI1xuICByZXF1aXJlX3JlYWRsaW5lX29wdGltaXplZDogLT5cblxuICAgIEZTICA9IHJlcXVpcmUgJ25vZGU6ZnMnXG4gICAgbmwgID0gJ1xcbicuY29kZVBvaW50QXQgMFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgd2Fsa19saW5lc193aXRoX3Bvc2l0aW9uc19hc3luYyA9ICggcGF0aCApIC0+XG4gICAgICAjIGZyb20gbW1vbXRjaGV2L3JlYWRjc3YvcmVhZGNzdi1idWZmZXJlZC1vcHQuanNcbiAgICAgIHJlYWRzdHJlYW0gID0gRlMuY3JlYXRlUmVhZFN0cmVhbSBwYXRoXG4gICAgICByZW1haW5kZXIgICA9ICcnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBmb3IgYXdhaXQgYnVmZmVyIGZyb20gcmVhZHN0cmVhbVxuICAgICAgICBzdGFydCA9IDBcbiAgICAgICAgc3RvcCAgPSBudWxsXG4gICAgICAgIHdoaWxlICggc3RvcCA9IGJ1ZmZlci5pbmRleE9mIG5sLCBzdGFydCApIGlzbnQgLTFcbiAgICAgICAgICAjIGRlYnVnICfOqV9fXzEnLCB7IHN0YXJ0LCBzdG9wLCB9LCBycHIgKCAoIGJ1ZmZlci5zbGljZSBzdGFydCwgc3RvcCApLnRvU3RyaW5nICd1dGYtOCcgKVsgLi4gMTA4IF1cbiAgICAgICAgICBpZiAoIHN0YXJ0ID09IDAgKSBhbmQgKCByZW1haW5kZXIubGVuZ3RoID4gMCApXG4gICAgICAgICAgICAjIGRlYnVnICfOqV9fXzInLCByZW1haW5kZXIgKyBidWZmZXIuc2xpY2UgMCwgc3RvcFxuICAgICAgICAgICAgeWllbGQgcmVtYWluZGVyICsgYnVmZmVyLnNsaWNlIDAsIHN0b3AgKyAxXG4gICAgICAgICAgICByZW1haW5kZXIgPSAnJ1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHlpZWxkICggYnVmZmVyLnNsaWNlIHN0YXJ0LCBzdG9wICsgMSApLnRvU3RyaW5nICd1dGYtOCdcbiAgICAgICAgICBzdGFydCA9IHN0b3AgKyAxXG4gICAgICAgIHJlbWFpbmRlciA9IGJ1ZmZlci5zbGljZSBzdGFydFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIHJldHVybiBleHBvcnRzID0geyB3YWxrX2xpbmVzX3dpdGhfcG9zaXRpb25zX2FzeW5jLCB9XG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBiZW5jaG1hcmtzID0gYmVuY2htYXJrcyA9XG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBydW5fYmVuY2htYXJrczogLT5cblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZGVtb19mYXN0X3JlYWRsaW5lX2FzeW5jID0gLT5cbiAgICAgIHsgaHJ0aW1lX2FzX2JpZ2ludCwgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2JlbmNobWFya2luZygpXG4gICAgICByZWxwYXRoID0gJy4uLy4uLy4uLy4uLy4uLzNyZC1wYXJ0eS1yZXBvcy9tbW9tdGNoZXYtcmVhZGNzdi1mb3ItcmVhZC1maWxlLWJlbmNobWFyaydcbiAgICAgIHsgd2Fsa19saW5lc193aXRoX3Bvc2l0aW9uc19hc3luYywgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3JlYWRsaW5lX29wdGltaXplZCgpXG4gICAgICBwYXRoID0gUEFUSC5yZXNvbHZlIFBBVEguam9pbiBfX2Rpcm5hbWUsIHJlbHBhdGgsICdhbGxDb3VudHJpZXMudHh0J1xuICAgICAgY291bnQgPSAwXG4gICAgICB0MCA9IGhydGltZV9hc19iaWdpbnQoKVxuICAgICAgZm9yIGF3YWl0IGxpbmUgZnJvbSB3YWxrX2xpbmVzX3dpdGhfcG9zaXRpb25zX2FzeW5jIHBhdGhcbiAgICAgICAgY291bnQrK1xuICAgICAgICAjIHJldHVybiBudWxsIGlmIGNvdW50ID4gMTAwXG4gICAgICAgIGVjaG8gJ86pX19fMycsIGNvdW50LCAoIHJwciBsaW5lWyAuLiAxMDggXSApIGlmICggY291bnQgJSUgMV8wMDBfMDAwICkgaXMgMFxuICAgICAgdDEgPSBocnRpbWVfYXNfYmlnaW50KClcbiAgICAgIGVjaG8gJ86pX19fNCcsICdkZW1vX2Zhc3RfcmVhZGxpbmVfYXN5bmMnLCBmXCIjeyggTnVtYmVyIHQxIC0gdDAgKSAvIDFfMDAwXzAwMH06PjIwLC45ZjtcIlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZGVtb19mYXN0X3JlYWRsaW5lX3N5bmMgPSAtPlxuICAgICAgeyBocnRpbWVfYXNfYmlnaW50LCB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfYmVuY2htYXJraW5nKClcbiAgICAgIHJlbHBhdGggPSAnLi4vLi4vLi4vLi4vLi4vM3JkLXBhcnR5LXJlcG9zL21tb210Y2hldi1yZWFkY3N2LWZvci1yZWFkLWZpbGUtYmVuY2htYXJrJ1xuICAgICAgeyB3YWxrX2xpbmVzX3dpdGhfcG9zaXRpb25zLCB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZmFzdF9saW5lcmVhZGVyKClcbiAgICAgIHBhdGggPSBQQVRILnJlc29sdmUgUEFUSC5qb2luIF9fZGlybmFtZSwgcmVscGF0aCwgJ2FsbENvdW50cmllcy50eHQnXG4gICAgICBjb3VudCA9IDBcbiAgICAgIHQwID0gaHJ0aW1lX2FzX2JpZ2ludCgpXG4gICAgICBmb3IgeyBsaW5lLCB9IGZyb20gd2Fsa19saW5lc193aXRoX3Bvc2l0aW9ucyBwYXRoXG4gICAgICAgIGNvdW50KytcbiAgICAgICAgIyByZXR1cm4gbnVsbCBpZiBjb3VudCA+IDEwMFxuICAgICAgICBlY2hvICfOqV9fXzUnLCBjb3VudCwgKCBycHIgbGluZVsgLi4gMTA4IF0gKSBpZiAoIGNvdW50ICUlIDFfMDAwXzAwMCApIGlzIDBcbiAgICAgIHQxID0gaHJ0aW1lX2FzX2JpZ2ludCgpXG4gICAgICBlY2hvICfOqV9fXzYnLCAnZGVtb19mYXN0X3JlYWRsaW5lX3N5bmMnLCBmXCIjeyggTnVtYmVyIHQxIC0gdDAgKSAvIDFfMDAwXzAwMH06PjIwLC45ZjtcIlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZGVtb19ndXlmc19yZWFkbGluZSA9IC0+XG4gICAgICB7IGhydGltZV9hc19iaWdpbnQsIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9iZW5jaG1hcmtpbmcoKVxuICAgICAgcmVscGF0aCA9ICcuLi8uLi8uLi8uLi8uLi8zcmQtcGFydHktcmVwb3MvbW1vbXRjaGV2LXJlYWRjc3YtZm9yLXJlYWQtZmlsZS1iZW5jaG1hcmsnXG4gICAgICBwYXRoID0gUEFUSC5yZXNvbHZlIFBBVEguam9pbiBfX2Rpcm5hbWUsIHJlbHBhdGgsICdhbGxDb3VudHJpZXMudHh0J1xuICAgICAgY291bnQgPSAwXG4gICAgICB0MCA9IGhydGltZV9hc19iaWdpbnQoKVxuICAgICAgZm9yIHsgbGluZSwgfSBmcm9tIEdVWS5mcy53YWxrX2xpbmVzX3dpdGhfcG9zaXRpb25zIHBhdGhcbiAgICAgICAgY291bnQrK1xuICAgICAgICAjIHJldHVybiBudWxsIGlmIGNvdW50ID4gMTAwXG4gICAgICAgIGVjaG8gJ86pX19fNycsIGNvdW50LCAoIHJwciBsaW5lWyAuLiAxMDggXSApIGlmICggY291bnQgJSUgMV8wMDBfMDAwICkgaXMgMFxuICAgICAgdDEgPSBocnRpbWVfYXNfYmlnaW50KClcbiAgICAgIGVjaG8gJ86pX19fOCcsICdkZW1vX2d1eWZzX3JlYWRsaW5lJywgZlwiI3soIE51bWJlciB0MSAtIHQwICkgLyAxXzAwMF8wMDB9Oj4yMCwuOWY7XCJcbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGRlbW9fcmVhZF93cml0ZV9iaWdfbWFwID0gLT5cbiAgICAgIHsgaHJ0aW1lX2FzX2JpZ2ludCxcbiAgICAgICAgdGltZWl0LCAgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9iZW5jaG1hcmtpbmcoKVxuICAgICAgeyB3YWxrX2xpbmVzX3dpdGhfcG9zaXRpb25zLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2Zhc3RfbGluZXJlYWRlcigpXG4gICAgICBtYXhfY291bnQgICAgICAgICAgICAgICAgICAgICAgID0gMWU1XG4gICAgICBwYXRoICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gJy90bXAvbWFwLWNhY2hlLmpzb25sJ1xuICAgICAgRlMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6ZnMnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHdyaXRlX2ZpbGUgPSAtPlxuICAgICAgICByYW5kb21fdHdsX21hcCA9IFJBTkRPTV9UT09MUy5nZXRfdGV4dHNfbWFwcGVkX3RvX3dpZHRoX2xlbmd0aCB7IHNpemU6IDEwLCB9XG4gICAgICAgIGRlYnVnICfOqV9fMTInLCByYW5kb21fdHdsX21hcDsgcHJvY2Vzcy5leGl0IDExMVxuICAgICAgICBGUy53cml0ZUZpbGVTeW5jIHBhdGgsICcnXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgdGltZWl0IHdyaXRlX2ZpbGVfc3luYyA9IC0+XG4gICAgICAgICAgZm9yIGVudHJ5IGZyb20gbWFwXG4gICAgICAgICAgICBGUy5hcHBlbmRGaWxlU3luYyBwYXRoLCBcIiN7SlNPTi5zdHJpbmdpZnkgZW50cnl9XFxuXCJcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJlYWRfZmlsZSA9ICggbWFwID0gbnVsbCApIC0+XG4gICAgICAgIG1hcCAgPz0gbmV3IE1hcCgpXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgdGltZWl0IHJlYWRfZmlsZV9zeW5jID0gLT5cbiAgICAgICAgICBmb3IgeyBsaW5lLCB9IGZyb20gd2Fsa19saW5lc193aXRoX3Bvc2l0aW9ucyBwYXRoXG4gICAgICAgICAgICBtYXAuc2V0ICggSlNPTi5wYXJzZSBsaW5lICkuLi5cbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHJldHVybiBtYXBcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgd3JpdGVfZmlsZSgpXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGQgICAgICAgICA9IHJlYWRfZmlsZSgpXG4gICAgICAgIGNvdW50X3JwciA9ICggbmV3IEludGwuTnVtYmVyRm9ybWF0ICdlbi1VUycgKS5mb3JtYXQgZC5zaXplXG4gICAgICAgIGluZm8gJ86pX18xMicsIFwicmVhZCAje2NvdW50X3Jwcn0gZW50cmllc1wiXG4gICAgICAgICMgZGVidWcgJ86pX18xMycsIGRcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZGVtb19yZWFkX3dyaXRlX25qc19zcWxpdGUgPSAtPlxuICAgICAgeyBocnRpbWVfYXNfYmlnaW50LFxuICAgICAgICB0aW1laXQsICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9iZW5jaG1hcmtpbmcoKVxuICAgICAgeyB3YWxrX2xpbmVzX3dpdGhfcG9zaXRpb25zLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2Zhc3RfbGluZXJlYWRlcigpXG4gICAgICBtYXhfY291bnQgICAgICAgICAgICAgICAgICAgICAgID0gMWU1XG4gICAgICBwYXRoICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gJy90bXAvbWFwLWNhY2hlLmRiJ1xuICAgICAgRlMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6ZnMnXG4gICAgICBTUUxJVEUgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpzcWxpdGUnXG4gICAgICB7IFNRTCB9ICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9kYmF5J1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzdGF0ZW1lbnRzID1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBjcmVhdGVfdGFibGVfc2VnbWVudHNfZnJlZTogU1FMXCJcIlwiXG4gICAgICAgICAgZHJvcCB0YWJsZSBpZiBleGlzdHMgc2VnbWVudHM7XG4gICAgICAgICAgY3JlYXRlIHRhYmxlIHNlZ21lbnRzIChcbiAgICAgICAgICAgICAgc2VnbWVudF90ZXh0ICAgICAgdGV4dCAgICBub3QgbnVsbCBwcmltYXJ5IGtleSxcbiAgICAgICAgICAgICAgc2VnbWVudF93aWR0aCAgICAgaW50ZWdlciBub3QgbnVsbCxcbiAgICAgICAgICAgICAgc2VnbWVudF9sZW5ndGggICAgaW50ZWdlciBub3QgbnVsbCApO1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGNyZWF0ZV90YWJsZV9zZWdtZW50c19jaGVja3M6IFNRTFwiXCJcIlxuICAgICAgICAgIGRyb3AgdGFibGUgaWYgZXhpc3RzIHNlZ21lbnRzO1xuICAgICAgICAgIGNyZWF0ZSB0YWJsZSBzZWdtZW50cyAoXG4gICAgICAgICAgICAgIHNlZ21lbnRfdGV4dCAgICAgIHRleHQgICAgbm90IG51bGwgcHJpbWFyeSBrZXksXG4gICAgICAgICAgICAgIHNlZ21lbnRfd2lkdGggICAgIGludGVnZXIgbm90IG51bGwsXG4gICAgICAgICAgICAgIHNlZ21lbnRfbGVuZ3RoICAgIGludGVnZXIgbm90IG51bGwsXG4gICAgICAgICAgICBjb25zdHJhaW50IHNlZ21lbnRfd2lkdGhfZXFndF96ZXJvICBjaGVjayAoIHNlZ21lbnRfd2lkdGggID49IDAgKSxcbiAgICAgICAgICAgIGNvbnN0cmFpbnQgc2VnbWVudF9sZW5ndGhfZXFndF96ZXJvIGNoZWNrICggc2VnbWVudF9sZW5ndGggPj0gMCApICk7XCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgaW5zZXJ0X3NlZ21lbnQ6IFNRTFwiXCJcIlxuICAgICAgICAgIGluc2VydCBpbnRvIHNlZ21lbnRzICAoIHNlZ21lbnRfdGV4dCAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzICAoICRzZWdtZW50X3RleHQgKVxuICAgICAgICAgICAgb24gY29uZmxpY3QgKCBzZWdtZW50X3RleHQgKSBkbyBub3RoaW5nXG4gICAgICAgICAgICByZXR1cm5pbmcgKjtcIlwiXCJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgd3JpdGVfZGIgPSAtPlxuICAgICAgICBtYXAgICAgICAgPSBuZXcgTWFwKClcbiAgICAgICAgb2xkX3NpemUgID0gMFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGRiID0gbmV3IFNRTElURS5EYXRhYmFzZVN5bmMgcGF0aFxuICAgICAgICBkYi5leGVjIHN0YXRlbWVudHMuY3JlYXRlX3RhYmxlX3NlZ21lbnRzX2ZyZWVcbiAgICAgICAgaW5zZXJ0X3NlZ21lbnQgPSBkYi5wcmVwYXJlIHN0YXRlbWVudHMuaW5zZXJ0X3NlZ21lbnRcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBmb3IgY291bnQgaW4gWyAxIC4uIG1heF9jb3VudCBdXG4gICAgICAgICAgd2hpbGUgbWFwLnNpemUgaXMgb2xkX3NpemVcbiAgICAgICAgICAgIGVudHJ5ID0gWyBnZXRfdW5pcXVlX3RleHQoKSwgKCBHVVkucm5kLnJhbmRvbV9pbnRlZ2VyIDAsIDEwICksIF1cbiAgICAgICAgICAgIG1hcC5zZXQgZW50cnkuLi5cbiAgICAgICAgICBvbGRfc2l6ZSA9IG1hcC5zaXplXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgdGltZWl0IHdyaXRlX2RiX3N5bmMgPSAtPlxuICAgICAgICAgIGZvciBlbnRyeSBmcm9tIG1hcFxuICAgICAgICAgICAgRlMuYXBwZW5kRmlsZVN5bmMgcGF0aCwgXCIje0pTT04uc3RyaW5naWZ5IGVudHJ5fVxcblwiXG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZWFkX2RiID0gKCBtYXAgPSBudWxsICkgLT5cbiAgICAgICAgbWFwICA/PSBuZXcgTWFwKClcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB0aW1laXQgcmVhZF9kYl9zeW5jID0gLT5cbiAgICAgICAgICBmb3IgeyBsaW5lLCB9IGZyb20gd2Fsa19saW5lc193aXRoX3Bvc2l0aW9ucyBwYXRoXG4gICAgICAgICAgICBtYXAuc2V0ICggSlNPTi5wYXJzZSBsaW5lICkuLi5cbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHJldHVybiBtYXBcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgd3JpdGVfZGIoKVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkICAgICAgICAgPSByZWFkX2RiKClcbiAgICAgICAgY291bnRfcnByID0gKCBuZXcgSW50bC5OdW1iZXJGb3JtYXQgJ2VuLVVTJyApLmZvcm1hdCBkLnNpemVcbiAgICAgICAgaW5mbyAnzqlfXzEyJywgXCJyZWFkICN7Y291bnRfcnByfSBlbnRyaWVzXCJcbiAgICAgICAgIyBkZWJ1ZyAnzqlfXzEzJywgZFxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAjIGRlbW9fZmFzdF9yZWFkbGluZV9zeW5jKClcbiAgICBkZW1vX3JlYWRfd3JpdGVfYmlnX21hcCgpXG4gICAgZGVtb19yZWFkX3dyaXRlX25qc19zcWxpdGUoKVxuICAgICMgYXdhaXQgZGVtb19mYXN0X3JlYWRsaW5lX2FzeW5jKClcbiAgICAjIGRlbW9fZ3V5ZnNfcmVhZGxpbmUoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgIyBkZW1vX2luZmluaXRlX3Byb3h5KClcbiAgIyBkZW1vX2NvbG9yZnVsX3Byb3h5KClcbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgYXdhaXQgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLmFzeW5jX3Rlc3QgeyBiZW5jaG1hcmtzLCB9XG4gIHJldHVybiBudWxsXG5cbiJdfQ==
//# sourceURL=../src/benchmark-read-huge-csv.coffee