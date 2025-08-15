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
      demo_read_write_big_map = function() {
        var FS, path, read_file, walk_lines_with_positions, write_file;
        ({walk_lines_with_positions} = SFMODULES.unstable.require_fast_linereader());
        path = '/tmp/map-cache.jsonl';
        FS = require('node:fs');
        //.....................................................................................................
        write_file = function() {
          var map, write_file_sync;
          map = get_random_twl_map({
            size: benchmark_cfg.max_count
          });
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
          info('Ω___9', `read ${count_rpr} entries`);
          // debug 'Ω__10', d
          return null;
        })();
        //.....................................................................................................
        return null;
      };
      //-------------------------------------------------------------------------------------------------------
      demo_read_write_njs_sqlite = function() {
        var FS, SQL, SQLITE, path, read_db, statements, walk_lines_with_positions, write_db;
        ({walk_lines_with_positions} = SFMODULES.unstable.require_fast_linereader());
        path = '/dev/shm/map-cache.db';
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
          db = new SQLITE.DatabaseSync(path);
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
              // debug 'Ω__12', { segment_text, segment_width, segment_length, }
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
          db = new SQLITE.DatabaseSync(path);
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
              // debug 'Ω__13', segment_text, [ segment_width, segment_length, ]
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
          info('Ω__14', `read ${count_rpr} entries`);
          // debug 'Ω__15', d
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
  benchmark_cfg = {
    // max_count: 10
    max_count: 1e5
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JlbmNobWFyay1yZWFkLWh1Z2UtY3N2LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLFVBQUEsRUFBQSxJQUFBLEVBQUEsU0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsYUFBQSxFQUFBLFVBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxrQkFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxnQkFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLE1BQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBO0lBQUEsMkRBQUE7OztFQUdBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsMENBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdFLEdBWEYsQ0FBQSxHQVc0QixHQUFHLENBQUMsR0FYaEM7O0VBWUEsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUF6QkE7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eEM7O0FBdFRBIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbid1c2Ugc3RyaWN0J1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnYmVuY2htYXJrLXVuaWNvZGUtY2hhcmFjdGVyLXdpZHRoLmNvZmZlZSdcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICB3aGl0ZVxuICBncmVlblxuICBibHVlXG4gIGdvbGRcbiAgZ3JleVxuICByZWRcbiAgYm9sZFxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuIyB3cml0ZSAgICAgICAgICAgICAgICAgICAgID0gKCBwICkgLT4gcHJvY2Vzcy5zdGRvdXQud3JpdGUgcFxueyBuZmEgfSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcblBBVEggICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG4jLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zaW5nbGUtZmlsZS1tb2R1bGVzJ1xueyBHZXRfcmFuZG9tLCAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2dldF9yYW5kb20oKVxueyBocnRpbWVfYXNfYmlnaW50LFxuICB0aW1laXQsICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2JlbmNobWFya2luZygpXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5PYmplY3QuYXNzaWduIFNGTU9EVUxFUy51bnN0YWJsZSxcblxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIyMjIE5PVEUgRnV0dXJlIFNpbmdsZS1GaWxlIE1vZHVsZSAjIyNcbiAgcmVxdWlyZV9yZWFkbGluZV9vcHRpbWl6ZWQ6IC0+XG5cbiAgICBGUyAgPSByZXF1aXJlICdub2RlOmZzJ1xuICAgIG5sICA9ICdcXG4nLmNvZGVQb2ludEF0IDBcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHdhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnNfYXN5bmMgPSAoIHBhdGggKSAtPlxuICAgICAgIyBmcm9tIG1tb210Y2hldi9yZWFkY3N2L3JlYWRjc3YtYnVmZmVyZWQtb3B0LmpzXG4gICAgICByZWFkc3RyZWFtICA9IEZTLmNyZWF0ZVJlYWRTdHJlYW0gcGF0aFxuICAgICAgcmVtYWluZGVyICAgPSAnJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZm9yIGF3YWl0IGJ1ZmZlciBmcm9tIHJlYWRzdHJlYW1cbiAgICAgICAgc3RhcnQgPSAwXG4gICAgICAgIHN0b3AgID0gbnVsbFxuICAgICAgICB3aGlsZSAoIHN0b3AgPSBidWZmZXIuaW5kZXhPZiBubCwgc3RhcnQgKSBpc250IC0xXG4gICAgICAgICAgIyBkZWJ1ZyAnzqlfX18xJywgeyBzdGFydCwgc3RvcCwgfSwgcnByICggKCBidWZmZXIuc2xpY2Ugc3RhcnQsIHN0b3AgKS50b1N0cmluZyAndXRmLTgnIClbIC4uIDEwOCBdXG4gICAgICAgICAgaWYgKCBzdGFydCA9PSAwICkgYW5kICggcmVtYWluZGVyLmxlbmd0aCA+IDAgKVxuICAgICAgICAgICAgIyBkZWJ1ZyAnzqlfX18yJywgcmVtYWluZGVyICsgYnVmZmVyLnNsaWNlIDAsIHN0b3BcbiAgICAgICAgICAgIHlpZWxkIHJlbWFpbmRlciArIGJ1ZmZlci5zbGljZSAwLCBzdG9wICsgMVxuICAgICAgICAgICAgcmVtYWluZGVyID0gJydcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB5aWVsZCAoIGJ1ZmZlci5zbGljZSBzdGFydCwgc3RvcCArIDEgKS50b1N0cmluZyAndXRmLTgnXG4gICAgICAgICAgc3RhcnQgPSBzdG9wICsgMVxuICAgICAgICByZW1haW5kZXIgPSBidWZmZXIuc2xpY2Ugc3RhcnRcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICByZXR1cm4gZXhwb3J0cyA9IHsgd2Fsa19saW5lc193aXRoX3Bvc2l0aW9uc19hc3luYywgfVxuXG5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICMjIyBOT1RFIEZ1dHVyZSBTaW5nbGUtRmlsZSBNb2R1bGUgIyMjXG4gIHJlcXVpcmVfZ2V0X3JhbmRvbV9hZGRpdGlvbnM6IC0+XG4gICAgeyBpbnRlcm5hbHMsIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfcmFuZG9tKClcblxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjbGFzcyBHZXRfcmFuZG9tX2V4dCBleHRlbmRzIEdldF9yYW5kb21cblxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIGdldF90ZXh0c19tYXBwZWRfdG9fd2lkdGhfbGVuZ3RoOiAoIGNmZyApIC0+XG4gICAgICAgIHsgbWluLFxuICAgICAgICAgIG1heCxcbiAgICAgICAgICBsZW5ndGgsXG4gICAgICAgICAgc2l6ZSxcbiAgICAgICAgICBtaW5fbGVuZ3RoLFxuICAgICAgICAgIG1heF9sZW5ndGgsXG4gICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgIG9uX3N0YXRzLFxuICAgICAgICAgIG9uX2V4aGF1c3Rpb24sXG4gICAgICAgICAgbWF4X3JvdW5kcywgICB9ID0geyBpbnRlcm5hbHMudGVtcGxhdGVzLnNldF9vZl90ZXh0cy4uLiwgY2ZnLi4uLCB9XG4gICAgICAgIHsgbWluX2xlbmd0aCxcbiAgICAgICAgICBtYXhfbGVuZ3RoLCAgIH0gPSBAX2dldF9taW5fbWF4X2xlbmd0aCB7IGxlbmd0aCwgbWluX2xlbmd0aCwgbWF4X2xlbmd0aCwgfVxuICAgICAgICBsZW5ndGhfaXNfY29uc3QgICA9IG1pbl9sZW5ndGggaXMgbWF4X2xlbmd0aFxuICAgICAgICBsZW5ndGggICAgICAgICAgICA9IG1pbl9sZW5ndGhcbiAgICAgICAgUiAgICAgICAgICAgICAgICAgPSBuZXcgTWFwKClcbiAgICAgICAgcHJvZHVjZXIgICAgICAgICAgPSBAdGV4dF9wcm9kdWNlciB7IG1pbiwgbWF4LCBsZW5ndGgsIG1pbl9sZW5ndGgsIG1heF9sZW5ndGgsIGZpbHRlciwgfVxuICAgICAgICBzdGF0cyAgICAgICAgICAgICA9IEBfbmV3X3N0YXRzIHsgbmFtZTogJ3NldF9vZl90ZXh0cycsIG9uX3N0YXRzLCBvbl9leGhhdXN0aW9uLCBtYXhfcm91bmRzLCB9XG4gICAgICAgIGdldF93aWR0aCAgICAgICAgID0gQGludGVnZXJfcHJvZHVjZXIgeyBtaW46IDEsIG1heDogMTAsIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGZvciB0ZXh0IGZyb20gQHdhbGtfdW5pcXVlIHsgcHJvZHVjZXIsIG46IHNpemUsIG9uX3N0YXRzLCBvbl9leGhhdXN0aW9uLCBtYXhfcm91bmRzLCB9XG4gICAgICAgICAgUi5zZXQgdGV4dCwgWyB0ZXh0Lmxlbmd0aCwgZ2V0X3dpZHRoKCksIF1cbiAgICAgICAgcmV0dXJuICggc3RhdHMuZmluaXNoIFIgKVxuXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgcmV0dXJuIGV4cG9ydHMgPSB7IEdldF9yYW5kb21fZXh0LCBpbnRlcm5hbHMsIH1cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmNhY2hlID0gbmV3IE1hcCgpXG5nZXRfcmFuZG9tX3R3bF9tYXAgPSAoeyBzaXplID0gMTAgfT17fSkgLT4gdGltZWl0IGdldF9yYW5kb21fdHdsX21hcF8gPSA9PlxuICBrZXkgPSBcInR3bF9tYXB7c2l6ZToje3NpemV9fVwiXG4gIHJldHVybiBSIGlmICggUiA9IGNhY2hlLmdldCBrZXkgKT9cbiAgeyBHZXRfcmFuZG9tX2V4dCwgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2dldF9yYW5kb21fYWRkaXRpb25zKClcbiAgZ2V0X3JhbmRvbSAgICAgICAgICAgICAgICAgICAgICA9IG5ldyBHZXRfcmFuZG9tX2V4dCgpXG4gIFIgPSBnZXRfcmFuZG9tLmdldF90ZXh0c19tYXBwZWRfdG9fd2lkdGhfbGVuZ3RoIHtcbiAgICBzaXplLCBtaW5fbGVuZ3RoOiAxLCBtYXhfbGVuZ3RoOiAyMCwgbWluOiAweDAyMSwgbWF4OiAweDA1OGYsIH1cbiAgICAjIGZpbHRlcjogL15cXHB7TH0rJC92aSwgfVxuICBjYWNoZS5zZXQga2V5LCBSXG4gIHJldHVybiBSXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQGJlbmNobWFya3MgPSBiZW5jaG1hcmtzID1cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJ1bl9iZW5jaG1hcmtzOiAtPlxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBkZW1vX2Zhc3RfcmVhZGxpbmVfYXN5bmMgPSAtPlxuICAgICAgcmVscGF0aCA9ICcuLi8uLi8uLi8uLi8uLi8zcmQtcGFydHktcmVwb3MvbW1vbXRjaGV2LXJlYWRjc3YtZm9yLXJlYWQtZmlsZS1iZW5jaG1hcmsnXG4gICAgICB7IHdhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnNfYXN5bmMsIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9yZWFkbGluZV9vcHRpbWl6ZWQoKVxuICAgICAgcGF0aCA9IFBBVEgucmVzb2x2ZSBQQVRILmpvaW4gX19kaXJuYW1lLCByZWxwYXRoLCAnYWxsQ291bnRyaWVzLnR4dCdcbiAgICAgIGNvdW50ID0gMFxuICAgICAgdDAgPSBocnRpbWVfYXNfYmlnaW50KClcbiAgICAgIGZvciBhd2FpdCBsaW5lIGZyb20gd2Fsa19saW5lc193aXRoX3Bvc2l0aW9uc19hc3luYyBwYXRoXG4gICAgICAgIGNvdW50KytcbiAgICAgICAgIyByZXR1cm4gbnVsbCBpZiBjb3VudCA+IDEwMFxuICAgICAgICBlY2hvICfOqV9fXzMnLCBjb3VudCwgKCBycHIgbGluZVsgLi4gMTA4IF0gKSBpZiAoIGNvdW50ICUlIDFfMDAwXzAwMCApIGlzIDBcbiAgICAgIHQxID0gaHJ0aW1lX2FzX2JpZ2ludCgpXG4gICAgICBlY2hvICfOqV9fXzQnLCAnZGVtb19mYXN0X3JlYWRsaW5lX2FzeW5jJywgZlwiI3soIE51bWJlciB0MSAtIHQwICkgLyAxXzAwMF8wMDB9Oj4yMCwuOWY7XCJcbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGRlbW9fZmFzdF9yZWFkbGluZV9zeW5jID0gLT5cbiAgICAgIHJlbHBhdGggPSAnLi4vLi4vLi4vLi4vLi4vM3JkLXBhcnR5LXJlcG9zL21tb210Y2hldi1yZWFkY3N2LWZvci1yZWFkLWZpbGUtYmVuY2htYXJrJ1xuICAgICAgeyB3YWxrX2xpbmVzX3dpdGhfcG9zaXRpb25zLCB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZmFzdF9saW5lcmVhZGVyKClcbiAgICAgIHBhdGggPSBQQVRILnJlc29sdmUgUEFUSC5qb2luIF9fZGlybmFtZSwgcmVscGF0aCwgJ2FsbENvdW50cmllcy50eHQnXG4gICAgICBjb3VudCA9IDBcbiAgICAgIHQwID0gaHJ0aW1lX2FzX2JpZ2ludCgpXG4gICAgICBmb3IgeyBsaW5lLCB9IGZyb20gd2Fsa19saW5lc193aXRoX3Bvc2l0aW9ucyBwYXRoXG4gICAgICAgIGNvdW50KytcbiAgICAgICAgIyByZXR1cm4gbnVsbCBpZiBjb3VudCA+IDEwMFxuICAgICAgICBlY2hvICfOqV9fXzUnLCBjb3VudCwgKCBycHIgbGluZVsgLi4gMTA4IF0gKSBpZiAoIGNvdW50ICUlIDFfMDAwXzAwMCApIGlzIDBcbiAgICAgIHQxID0gaHJ0aW1lX2FzX2JpZ2ludCgpXG4gICAgICBlY2hvICfOqV9fXzYnLCAnZGVtb19mYXN0X3JlYWRsaW5lX3N5bmMnLCBmXCIjeyggTnVtYmVyIHQxIC0gdDAgKSAvIDFfMDAwXzAwMH06PjIwLC45ZjtcIlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZGVtb19ndXlmc19yZWFkbGluZSA9IC0+XG4gICAgICByZWxwYXRoID0gJy4uLy4uLy4uLy4uLy4uLzNyZC1wYXJ0eS1yZXBvcy9tbW9tdGNoZXYtcmVhZGNzdi1mb3ItcmVhZC1maWxlLWJlbmNobWFyaydcbiAgICAgIHBhdGggPSBQQVRILnJlc29sdmUgUEFUSC5qb2luIF9fZGlybmFtZSwgcmVscGF0aCwgJ2FsbENvdW50cmllcy50eHQnXG4gICAgICBjb3VudCA9IDBcbiAgICAgIHQwID0gaHJ0aW1lX2FzX2JpZ2ludCgpXG4gICAgICBmb3IgeyBsaW5lLCB9IGZyb20gR1VZLmZzLndhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnMgcGF0aFxuICAgICAgICBjb3VudCsrXG4gICAgICAgICMgcmV0dXJuIG51bGwgaWYgY291bnQgPiAxMDBcbiAgICAgICAgZWNobyAnzqlfX183JywgY291bnQsICggcnByIGxpbmVbIC4uIDEwOCBdICkgaWYgKCBjb3VudCAlJSAxXzAwMF8wMDAgKSBpcyAwXG4gICAgICB0MSA9IGhydGltZV9hc19iaWdpbnQoKVxuICAgICAgZWNobyAnzqlfX184JywgJ2RlbW9fZ3V5ZnNfcmVhZGxpbmUnLCBmXCIjeyggTnVtYmVyIHQxIC0gdDAgKSAvIDFfMDAwXzAwMH06PjIwLC45ZjtcIlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZGVtb19yZWFkX3dyaXRlX2JpZ19tYXAgPSAtPlxuICAgICAgeyB3YWxrX2xpbmVzX3dpdGhfcG9zaXRpb25zLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2Zhc3RfbGluZXJlYWRlcigpXG4gICAgICBwYXRoICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gJy90bXAvbWFwLWNhY2hlLmpzb25sJ1xuICAgICAgRlMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6ZnMnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHdyaXRlX2ZpbGUgPSAtPlxuICAgICAgICBtYXAgPSBnZXRfcmFuZG9tX3R3bF9tYXAgeyBzaXplOiBiZW5jaG1hcmtfY2ZnLm1heF9jb3VudCwgfVxuICAgICAgICBGUy53cml0ZUZpbGVTeW5jIHBhdGgsICcnXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgdGltZWl0IHdyaXRlX2ZpbGVfc3luYyA9IC0+XG4gICAgICAgICAgZm9yIGVudHJ5IGZyb20gbWFwXG4gICAgICAgICAgICBGUy5hcHBlbmRGaWxlU3luYyBwYXRoLCBcIiN7SlNPTi5zdHJpbmdpZnkgZW50cnl9XFxuXCJcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJlYWRfZmlsZSA9ICggbWFwID0gbnVsbCApIC0+XG4gICAgICAgIG1hcCAgPz0gbmV3IE1hcCgpXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgdGltZWl0IHJlYWRfZmlsZV9zeW5jID0gLT5cbiAgICAgICAgICBmb3IgeyBsaW5lLCB9IGZyb20gd2Fsa19saW5lc193aXRoX3Bvc2l0aW9ucyBwYXRoXG4gICAgICAgICAgICBtYXAuc2V0ICggSlNPTi5wYXJzZSBsaW5lICkuLi5cbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHJldHVybiBtYXBcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgd3JpdGVfZmlsZSgpXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGQgICAgICAgICA9IHJlYWRfZmlsZSgpXG4gICAgICAgIGNvdW50X3JwciA9ICggbmV3IEludGwuTnVtYmVyRm9ybWF0ICdlbi1VUycgKS5mb3JtYXQgZC5zaXplXG4gICAgICAgIGluZm8gJ86pX19fOScsIFwicmVhZCAje2NvdW50X3Jwcn0gZW50cmllc1wiXG4gICAgICAgICMgZGVidWcgJ86pX18xMCcsIGRcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZGVtb19yZWFkX3dyaXRlX25qc19zcWxpdGUgPSAtPlxuICAgICAgeyB3YWxrX2xpbmVzX3dpdGhfcG9zaXRpb25zLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2Zhc3RfbGluZXJlYWRlcigpXG4gICAgICBwYXRoICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gJy9kZXYvc2htL21hcC1jYWNoZS5kYidcbiAgICAgIEZTICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOmZzJ1xuICAgICAgU1FMSVRFICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6c3FsaXRlJ1xuICAgICAgeyBTUUwgfSAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZGJheSdcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc3RhdGVtZW50cyA9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgY3JlYXRlX3RhYmxlX3NlZ21lbnRzX2ZyZWU6IFNRTFwiXCJcIlxuICAgICAgICAgIGRyb3AgdGFibGUgaWYgZXhpc3RzIHNlZ21lbnRzO1xuICAgICAgICAgIGNyZWF0ZSB0YWJsZSBzZWdtZW50cyAoXG4gICAgICAgICAgICAgIHNlZ21lbnRfdGV4dCAgICAgIHRleHQgICAgbm90IG51bGwgcHJpbWFyeSBrZXksXG4gICAgICAgICAgICAgIHNlZ21lbnRfd2lkdGggICAgIGludGVnZXIgbm90IG51bGwsXG4gICAgICAgICAgICAgIHNlZ21lbnRfbGVuZ3RoICAgIGludGVnZXIgbm90IG51bGwgKTtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBjcmVhdGVfdGFibGVfc2VnbWVudHNfY2hlY2tzOiBTUUxcIlwiXCJcbiAgICAgICAgICBkcm9wIHRhYmxlIGlmIGV4aXN0cyBzZWdtZW50cztcbiAgICAgICAgICBjcmVhdGUgdGFibGUgc2VnbWVudHMgKFxuICAgICAgICAgICAgICBzZWdtZW50X3RleHQgICAgICB0ZXh0ICAgIG5vdCBudWxsIHByaW1hcnkga2V5LFxuICAgICAgICAgICAgICBzZWdtZW50X3dpZHRoICAgICBpbnRlZ2VyIG5vdCBudWxsLFxuICAgICAgICAgICAgICBzZWdtZW50X2xlbmd0aCAgICBpbnRlZ2VyIG5vdCBudWxsLFxuICAgICAgICAgICAgY29uc3RyYWludCBzZWdtZW50X3dpZHRoX2VxZ3RfemVybyAgY2hlY2sgKCBzZWdtZW50X3dpZHRoICA+PSAwICksXG4gICAgICAgICAgICBjb25zdHJhaW50IHNlZ21lbnRfbGVuZ3RoX2VxZ3RfemVybyBjaGVjayAoIHNlZ21lbnRfbGVuZ3RoID49IDAgKSApO1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGluc2VydF9zZWdtZW50OiBTUUxcIlwiXCJcbiAgICAgICAgICBpbnNlcnQgaW50byBzZWdtZW50cyAgKCBzZWdtZW50X3RleHQsICBzZWdtZW50X3dpZHRoLCAgIHNlZ21lbnRfbGVuZ3RoIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyAgKCAkc2VnbWVudF90ZXh0LCAkc2VnbWVudF93aWR0aCwgICRzZWdtZW50X2xlbmd0aCApXG4gICAgICAgICAgICBvbiBjb25mbGljdCAoIHNlZ21lbnRfdGV4dCApIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIHJldHVybmluZyAqO1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHJlYWRfc2VnbWVudHM6IFNRTFwiXCJcIlxuICAgICAgICAgIHNlbGVjdCAqIGZyb20gc2VnbWVudHM7XCJcIlwiXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHdyaXRlX2RiID0gLT5cbiAgICAgICAgZGIgICAgICAgICAgICAgID0gbmV3IFNRTElURS5EYXRhYmFzZVN5bmMgcGF0aFxuICAgICAgICBkYi5leGVjIHN0YXRlbWVudHMuY3JlYXRlX3RhYmxlX3NlZ21lbnRzX2ZyZWVcbiAgICAgICAgaW5zZXJ0X3NlZ21lbnQgID0gZGIucHJlcGFyZSBzdGF0ZW1lbnRzLmluc2VydF9zZWdtZW50XG4gICAgICAgIG1hcCAgICAgICAgICAgICA9IGdldF9yYW5kb21fdHdsX21hcCB7IHNpemU6IGJlbmNobWFya19jZmcubWF4X2NvdW50LCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgIyMjIFRBSU5UIHVzZSB0cmFuc2FjdGlvbiAjIyNcbiAgICAgICAgdGltZWl0IHdyaXRlX2RiX3N5bmMgPSAtPlxuICAgICAgICAgIGRiLmV4ZWMgU1FMXCJiZWdpbiB0cmFuc2FjdGlvbjtcIlxuICAgICAgICAgIGZvciBbIHNlZ21lbnRfdGV4dCwgWyBzZWdtZW50X3dpZHRoLCBzZWdtZW50X2xlbmd0aCwgXSwgXSBmcm9tIG1hcFxuICAgICAgICAgICAgIyBkZWJ1ZyAnzqlfXzEyJywgeyBzZWdtZW50X3RleHQsIHNlZ21lbnRfd2lkdGgsIHNlZ21lbnRfbGVuZ3RoLCB9XG4gICAgICAgICAgICBpbnNlcnRfc2VnbWVudC5ydW4geyBzZWdtZW50X3RleHQsIHNlZ21lbnRfd2lkdGgsIHNlZ21lbnRfbGVuZ3RoLCB9XG4gICAgICAgICAgZGIuZXhlYyBTUUxcImNvbW1pdDtcIlxuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmVhZF9kYiA9ICggbWFwID0gbnVsbCApIC0+XG4gICAgICAgIGRiICAgICAgICAgICAgICA9IG5ldyBTUUxJVEUuRGF0YWJhc2VTeW5jIHBhdGhcbiAgICAgICAgcmVhZF9zZWdtZW50cyAgID0gZGIucHJlcGFyZSBzdGF0ZW1lbnRzLnJlYWRfc2VnbWVudHNcbiAgICAgICAgbWFwICAgICAgICAgICAgPz0gbmV3IE1hcCgpXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgdGltZWl0IHJlYWRfZGJfc3luYyA9IC0+XG4gICAgICAgICAgZGIuZXhlYyBTUUxcImJlZ2luIHRyYW5zYWN0aW9uO1wiXG4gICAgICAgICAgZm9yIHsgc2VnbWVudF90ZXh0LCBzZWdtZW50X3dpZHRoLCBzZWdtZW50X2xlbmd0aCwgfSBmcm9tIHJlYWRfc2VnbWVudHMuaXRlcmF0ZSgpXG4gICAgICAgICAgICAjIGRlYnVnICfOqV9fMTMnLCBzZWdtZW50X3RleHQsIFsgc2VnbWVudF93aWR0aCwgc2VnbWVudF9sZW5ndGgsIF1cbiAgICAgICAgICAgIG1hcC5zZXQgc2VnbWVudF90ZXh0LCBbIHNlZ21lbnRfd2lkdGgsIHNlZ21lbnRfbGVuZ3RoLCBdXG4gICAgICAgICAgZGIuZXhlYyBTUUxcImNvbW1pdDtcIlxuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcmV0dXJuIG1hcFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICB3cml0ZV9kYigpXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGQgICAgICAgICA9IHJlYWRfZGIoKVxuICAgICAgICBjb3VudF9ycHIgPSAoIG5ldyBJbnRsLk51bWJlckZvcm1hdCAnZW4tVVMnICkuZm9ybWF0IGQuc2l6ZVxuICAgICAgICBpbmZvICfOqV9fMTQnLCBcInJlYWQgI3tjb3VudF9ycHJ9IGVudHJpZXNcIlxuICAgICAgICAjIGRlYnVnICfOqV9fMTUnLCBkXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICMgZGVtb19mYXN0X3JlYWRsaW5lX3N5bmMoKVxuICAgIGRlbW9fcmVhZF93cml0ZV9iaWdfbWFwKClcbiAgICBkZW1vX3JlYWRfd3JpdGVfbmpzX3NxbGl0ZSgpXG4gICAgIyBhd2FpdCBkZW1vX2Zhc3RfcmVhZGxpbmVfYXN5bmMoKVxuICAgICMgZGVtb19ndXlmc19yZWFkbGluZSgpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuYmVuY2htYXJrX2NmZyA9XG4gICMgbWF4X2NvdW50OiAxMFxuICBtYXhfY291bnQ6IDFlNVxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBhd2FpdCAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkuYXN5bmNfdGVzdCB7IGJlbmNobWFya3MsIH1cbiAgcmV0dXJuIG51bGxcblxuIl19
//# sourceURL=../src/benchmark-read-huge-csv.coffee