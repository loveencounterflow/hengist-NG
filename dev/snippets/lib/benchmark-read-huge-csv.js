(async function() {
  'use strict';
  var GTNG, GUY, Get_random, PATH, SFMODULES, Test, alert, benchmark_cfg, benchmarks, blue, bold, debug, echo, f, get_random_twl_map, gold, green, grey, help, info, inspect, log, nfa, plain, praise, red, reverse, rpr, urge, warn, whisper, white,
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
  get_random_twl_map = function({size = 10} = {}) {
    var Get_random_ext, get_random;
    ({Get_random_ext} = SFMODULES.unstable.require_get_random_additions());
    get_random = new Get_random_ext();
    return get_random.get_texts_mapped_to_width_length({
      size,
      min_length: 1,
      max_length: 20,
      min: 0x021,
      max: 0xffff
    });
  };

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
        var FS, hrtime_as_bigint, path, read_file, timeit, walk_lines_with_positions, write_file;
        ({hrtime_as_bigint, timeit} = SFMODULES.unstable.require_benchmarking());
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
        var FS, SQL, SQLITE, hrtime_as_bigint, path, read_db, statements, timeit, walk_lines_with_positions, write_db;
        ({hrtime_as_bigint, timeit} = SFMODULES.unstable.require_benchmarking());
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
            for (x of map) {
              [segment_text, [segment_width, segment_length]] = x;
              debug('Ω__11', {segment_text, segment_width, segment_length});
              insert_segment.run({segment_text, segment_width, segment_length});
            }
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
            for (x of read_segments.iterate()) {
              ({segment_text, segment_width, segment_length} = x);
              debug('Ω__12', segment_text, [segment_width, segment_length]);
              map.set(segment_text, [segment_width, segment_length]);
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
          info('Ω__13', `read ${count_rpr} entries`);
          // debug 'Ω__14', d
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
    max_count: 1e2
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JlbmNobWFyay1yZWFkLWh1Z2UtY3N2LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLFVBQUEsRUFBQSxJQUFBLEVBQUEsU0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsYUFBQSxFQUFBLFVBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLGtCQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUE7SUFBQSwyREFBQTs7O0VBR0EsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQiwwQ0FBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLEtBSEYsRUFJRSxLQUpGLEVBS0UsSUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsR0FSRixFQVNFLElBVEYsRUFVRSxPQVZGLEVBV0UsR0FYRixDQUFBLEdBVzRCLEdBQUcsQ0FBQyxHQVhoQzs7RUFZQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1QixFQXpCQTs7O0VBMkJBLENBQUEsQ0FBRSxHQUFGLENBQUEsR0FB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Q0FBQSxJQUF4Qzs7QUFqVEEiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuJ3VzZSBzdHJpY3QnXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdiZW5jaG1hcmstdW5pY29kZS1jaGFyYWN0ZXItd2lkdGguY29mZmVlJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHdoaXRlXG4gIGdyZWVuXG4gIGJsdWVcbiAgZ29sZFxuICBncmV5XG4gIHJlZFxuICBib2xkXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG4jIHdyaXRlICAgICAgICAgICAgICAgICAgICAgPSAoIHAgKSAtPiBwcm9jZXNzLnN0ZG91dC53cml0ZSBwXG57IG5mYSB9ICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xuUEFUSCAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6cGF0aCdcbiMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNpbmdsZS1maWxlLW1vZHVsZXMnXG57IEdldF9yYW5kb20sICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X3JhbmRvbSgpXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5PYmplY3QuYXNzaWduIFNGTU9EVUxFUy51bnN0YWJsZSxcblxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIyMjIE5PVEUgRnV0dXJlIFNpbmdsZS1GaWxlIE1vZHVsZSAjIyNcbiAgcmVxdWlyZV9yZWFkbGluZV9vcHRpbWl6ZWQ6IC0+XG5cbiAgICBGUyAgPSByZXF1aXJlICdub2RlOmZzJ1xuICAgIG5sICA9ICdcXG4nLmNvZGVQb2ludEF0IDBcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHdhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnNfYXN5bmMgPSAoIHBhdGggKSAtPlxuICAgICAgIyBmcm9tIG1tb210Y2hldi9yZWFkY3N2L3JlYWRjc3YtYnVmZmVyZWQtb3B0LmpzXG4gICAgICByZWFkc3RyZWFtICA9IEZTLmNyZWF0ZVJlYWRTdHJlYW0gcGF0aFxuICAgICAgcmVtYWluZGVyICAgPSAnJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZm9yIGF3YWl0IGJ1ZmZlciBmcm9tIHJlYWRzdHJlYW1cbiAgICAgICAgc3RhcnQgPSAwXG4gICAgICAgIHN0b3AgID0gbnVsbFxuICAgICAgICB3aGlsZSAoIHN0b3AgPSBidWZmZXIuaW5kZXhPZiBubCwgc3RhcnQgKSBpc250IC0xXG4gICAgICAgICAgIyBkZWJ1ZyAnzqlfX18xJywgeyBzdGFydCwgc3RvcCwgfSwgcnByICggKCBidWZmZXIuc2xpY2Ugc3RhcnQsIHN0b3AgKS50b1N0cmluZyAndXRmLTgnIClbIC4uIDEwOCBdXG4gICAgICAgICAgaWYgKCBzdGFydCA9PSAwICkgYW5kICggcmVtYWluZGVyLmxlbmd0aCA+IDAgKVxuICAgICAgICAgICAgIyBkZWJ1ZyAnzqlfX18yJywgcmVtYWluZGVyICsgYnVmZmVyLnNsaWNlIDAsIHN0b3BcbiAgICAgICAgICAgIHlpZWxkIHJlbWFpbmRlciArIGJ1ZmZlci5zbGljZSAwLCBzdG9wICsgMVxuICAgICAgICAgICAgcmVtYWluZGVyID0gJydcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB5aWVsZCAoIGJ1ZmZlci5zbGljZSBzdGFydCwgc3RvcCArIDEgKS50b1N0cmluZyAndXRmLTgnXG4gICAgICAgICAgc3RhcnQgPSBzdG9wICsgMVxuICAgICAgICByZW1haW5kZXIgPSBidWZmZXIuc2xpY2Ugc3RhcnRcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICByZXR1cm4gZXhwb3J0cyA9IHsgd2Fsa19saW5lc193aXRoX3Bvc2l0aW9uc19hc3luYywgfVxuXG5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICMjIyBOT1RFIEZ1dHVyZSBTaW5nbGUtRmlsZSBNb2R1bGUgIyMjXG4gIHJlcXVpcmVfZ2V0X3JhbmRvbV9hZGRpdGlvbnM6IC0+XG4gICAgeyBpbnRlcm5hbHMsIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfcmFuZG9tKClcblxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjbGFzcyBHZXRfcmFuZG9tX2V4dCBleHRlbmRzIEdldF9yYW5kb21cblxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIGdldF90ZXh0c19tYXBwZWRfdG9fd2lkdGhfbGVuZ3RoOiAoIGNmZyApIC0+XG4gICAgICAgIHsgbWluLFxuICAgICAgICAgIG1heCxcbiAgICAgICAgICBsZW5ndGgsXG4gICAgICAgICAgc2l6ZSxcbiAgICAgICAgICBtaW5fbGVuZ3RoLFxuICAgICAgICAgIG1heF9sZW5ndGgsXG4gICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgIG9uX3N0YXRzLFxuICAgICAgICAgIG9uX2V4aGF1c3Rpb24sXG4gICAgICAgICAgbWF4X3JvdW5kcywgICB9ID0geyBpbnRlcm5hbHMudGVtcGxhdGVzLnNldF9vZl90ZXh0cy4uLiwgY2ZnLi4uLCB9XG4gICAgICAgIHsgbWluX2xlbmd0aCxcbiAgICAgICAgICBtYXhfbGVuZ3RoLCAgIH0gPSBAX2dldF9taW5fbWF4X2xlbmd0aCB7IGxlbmd0aCwgbWluX2xlbmd0aCwgbWF4X2xlbmd0aCwgfVxuICAgICAgICBsZW5ndGhfaXNfY29uc3QgICA9IG1pbl9sZW5ndGggaXMgbWF4X2xlbmd0aFxuICAgICAgICBsZW5ndGggICAgICAgICAgICA9IG1pbl9sZW5ndGhcbiAgICAgICAgUiAgICAgICAgICAgICAgICAgPSBuZXcgTWFwKClcbiAgICAgICAgcHJvZHVjZXIgICAgICAgICAgPSBAdGV4dF9wcm9kdWNlciB7IG1pbiwgbWF4LCBsZW5ndGgsIG1pbl9sZW5ndGgsIG1heF9sZW5ndGgsIGZpbHRlciwgfVxuICAgICAgICBzdGF0cyAgICAgICAgICAgICA9IEBfbmV3X3N0YXRzIHsgbmFtZTogJ3NldF9vZl90ZXh0cycsIG9uX3N0YXRzLCBvbl9leGhhdXN0aW9uLCBtYXhfcm91bmRzLCB9XG4gICAgICAgIGdldF93aWR0aCAgICAgICAgID0gQGludGVnZXJfcHJvZHVjZXIgeyBtaW46IDEsIG1heDogMTAsIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGZvciB0ZXh0IGZyb20gQHdhbGtfdW5pcXVlIHsgcHJvZHVjZXIsIG46IHNpemUsIG9uX3N0YXRzLCBvbl9leGhhdXN0aW9uLCBtYXhfcm91bmRzLCB9XG4gICAgICAgICAgUi5zZXQgdGV4dCwgWyB0ZXh0Lmxlbmd0aCwgZ2V0X3dpZHRoKCksIF1cbiAgICAgICAgcmV0dXJuICggc3RhdHMuZmluaXNoIFIgKVxuXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgcmV0dXJuIGV4cG9ydHMgPSB7IEdldF9yYW5kb21fZXh0LCBpbnRlcm5hbHMsIH1cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmdldF9yYW5kb21fdHdsX21hcCA9ICh7IHNpemUgPSAxMCB9PXt9KSAtPlxuICB7IEdldF9yYW5kb21fZXh0LCAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X3JhbmRvbV9hZGRpdGlvbnMoKVxuICBnZXRfcmFuZG9tICAgICAgICAgICAgICAgICAgICAgID0gbmV3IEdldF9yYW5kb21fZXh0KClcbiAgcmV0dXJuIGdldF9yYW5kb20uZ2V0X3RleHRzX21hcHBlZF90b193aWR0aF9sZW5ndGgge1xuICAgIHNpemUsIG1pbl9sZW5ndGg6IDEsIG1heF9sZW5ndGg6IDIwLCBtaW46IDB4MDIxLCBtYXg6IDB4ZmZmZiwgfVxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQGJlbmNobWFya3MgPSBiZW5jaG1hcmtzID1cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJ1bl9iZW5jaG1hcmtzOiAtPlxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBkZW1vX2Zhc3RfcmVhZGxpbmVfYXN5bmMgPSAtPlxuICAgICAgeyBocnRpbWVfYXNfYmlnaW50LCB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfYmVuY2htYXJraW5nKClcbiAgICAgIHJlbHBhdGggPSAnLi4vLi4vLi4vLi4vLi4vM3JkLXBhcnR5LXJlcG9zL21tb210Y2hldi1yZWFkY3N2LWZvci1yZWFkLWZpbGUtYmVuY2htYXJrJ1xuICAgICAgeyB3YWxrX2xpbmVzX3dpdGhfcG9zaXRpb25zX2FzeW5jLCB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfcmVhZGxpbmVfb3B0aW1pemVkKClcbiAgICAgIHBhdGggPSBQQVRILnJlc29sdmUgUEFUSC5qb2luIF9fZGlybmFtZSwgcmVscGF0aCwgJ2FsbENvdW50cmllcy50eHQnXG4gICAgICBjb3VudCA9IDBcbiAgICAgIHQwID0gaHJ0aW1lX2FzX2JpZ2ludCgpXG4gICAgICBmb3IgYXdhaXQgbGluZSBmcm9tIHdhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnNfYXN5bmMgcGF0aFxuICAgICAgICBjb3VudCsrXG4gICAgICAgICMgcmV0dXJuIG51bGwgaWYgY291bnQgPiAxMDBcbiAgICAgICAgZWNobyAnzqlfX18zJywgY291bnQsICggcnByIGxpbmVbIC4uIDEwOCBdICkgaWYgKCBjb3VudCAlJSAxXzAwMF8wMDAgKSBpcyAwXG4gICAgICB0MSA9IGhydGltZV9hc19iaWdpbnQoKVxuICAgICAgZWNobyAnzqlfX180JywgJ2RlbW9fZmFzdF9yZWFkbGluZV9hc3luYycsIGZcIiN7KCBOdW1iZXIgdDEgLSB0MCApIC8gMV8wMDBfMDAwfTo+MjAsLjlmO1wiXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBkZW1vX2Zhc3RfcmVhZGxpbmVfc3luYyA9IC0+XG4gICAgICB7IGhydGltZV9hc19iaWdpbnQsIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9iZW5jaG1hcmtpbmcoKVxuICAgICAgcmVscGF0aCA9ICcuLi8uLi8uLi8uLi8uLi8zcmQtcGFydHktcmVwb3MvbW1vbXRjaGV2LXJlYWRjc3YtZm9yLXJlYWQtZmlsZS1iZW5jaG1hcmsnXG4gICAgICB7IHdhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnMsIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9mYXN0X2xpbmVyZWFkZXIoKVxuICAgICAgcGF0aCA9IFBBVEgucmVzb2x2ZSBQQVRILmpvaW4gX19kaXJuYW1lLCByZWxwYXRoLCAnYWxsQ291bnRyaWVzLnR4dCdcbiAgICAgIGNvdW50ID0gMFxuICAgICAgdDAgPSBocnRpbWVfYXNfYmlnaW50KClcbiAgICAgIGZvciB7IGxpbmUsIH0gZnJvbSB3YWxrX2xpbmVzX3dpdGhfcG9zaXRpb25zIHBhdGhcbiAgICAgICAgY291bnQrK1xuICAgICAgICAjIHJldHVybiBudWxsIGlmIGNvdW50ID4gMTAwXG4gICAgICAgIGVjaG8gJ86pX19fNScsIGNvdW50LCAoIHJwciBsaW5lWyAuLiAxMDggXSApIGlmICggY291bnQgJSUgMV8wMDBfMDAwICkgaXMgMFxuICAgICAgdDEgPSBocnRpbWVfYXNfYmlnaW50KClcbiAgICAgIGVjaG8gJ86pX19fNicsICdkZW1vX2Zhc3RfcmVhZGxpbmVfc3luYycsIGZcIiN7KCBOdW1iZXIgdDEgLSB0MCApIC8gMV8wMDBfMDAwfTo+MjAsLjlmO1wiXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBkZW1vX2d1eWZzX3JlYWRsaW5lID0gLT5cbiAgICAgIHsgaHJ0aW1lX2FzX2JpZ2ludCwgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2JlbmNobWFya2luZygpXG4gICAgICByZWxwYXRoID0gJy4uLy4uLy4uLy4uLy4uLzNyZC1wYXJ0eS1yZXBvcy9tbW9tdGNoZXYtcmVhZGNzdi1mb3ItcmVhZC1maWxlLWJlbmNobWFyaydcbiAgICAgIHBhdGggPSBQQVRILnJlc29sdmUgUEFUSC5qb2luIF9fZGlybmFtZSwgcmVscGF0aCwgJ2FsbENvdW50cmllcy50eHQnXG4gICAgICBjb3VudCA9IDBcbiAgICAgIHQwID0gaHJ0aW1lX2FzX2JpZ2ludCgpXG4gICAgICBmb3IgeyBsaW5lLCB9IGZyb20gR1VZLmZzLndhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnMgcGF0aFxuICAgICAgICBjb3VudCsrXG4gICAgICAgICMgcmV0dXJuIG51bGwgaWYgY291bnQgPiAxMDBcbiAgICAgICAgZWNobyAnzqlfX183JywgY291bnQsICggcnByIGxpbmVbIC4uIDEwOCBdICkgaWYgKCBjb3VudCAlJSAxXzAwMF8wMDAgKSBpcyAwXG4gICAgICB0MSA9IGhydGltZV9hc19iaWdpbnQoKVxuICAgICAgZWNobyAnzqlfX184JywgJ2RlbW9fZ3V5ZnNfcmVhZGxpbmUnLCBmXCIjeyggTnVtYmVyIHQxIC0gdDAgKSAvIDFfMDAwXzAwMH06PjIwLC45ZjtcIlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZGVtb19yZWFkX3dyaXRlX2JpZ19tYXAgPSAtPlxuICAgICAgeyBocnRpbWVfYXNfYmlnaW50LFxuICAgICAgICB0aW1laXQsICAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2JlbmNobWFya2luZygpXG4gICAgICB7IHdhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZmFzdF9saW5lcmVhZGVyKClcbiAgICAgIHBhdGggICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAnL3RtcC9tYXAtY2FjaGUuanNvbmwnXG4gICAgICBGUyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpmcydcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgd3JpdGVfZmlsZSA9IC0+XG4gICAgICAgIG1hcCA9IGdldF9yYW5kb21fdHdsX21hcCB7IHNpemU6IGJlbmNobWFya19jZmcubWF4X2NvdW50LCB9XG4gICAgICAgIEZTLndyaXRlRmlsZVN5bmMgcGF0aCwgJydcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB0aW1laXQgd3JpdGVfZmlsZV9zeW5jID0gLT5cbiAgICAgICAgICBmb3IgZW50cnkgZnJvbSBtYXBcbiAgICAgICAgICAgIEZTLmFwcGVuZEZpbGVTeW5jIHBhdGgsIFwiI3tKU09OLnN0cmluZ2lmeSBlbnRyeX1cXG5cIlxuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmVhZF9maWxlID0gKCBtYXAgPSBudWxsICkgLT5cbiAgICAgICAgbWFwICA/PSBuZXcgTWFwKClcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB0aW1laXQgcmVhZF9maWxlX3N5bmMgPSAtPlxuICAgICAgICAgIGZvciB7IGxpbmUsIH0gZnJvbSB3YWxrX2xpbmVzX3dpdGhfcG9zaXRpb25zIHBhdGhcbiAgICAgICAgICAgIG1hcC5zZXQgKCBKU09OLnBhcnNlIGxpbmUgKS4uLlxuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcmV0dXJuIG1hcFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICB3cml0ZV9maWxlKClcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZCAgICAgICAgID0gcmVhZF9maWxlKClcbiAgICAgICAgY291bnRfcnByID0gKCBuZXcgSW50bC5OdW1iZXJGb3JtYXQgJ2VuLVVTJyApLmZvcm1hdCBkLnNpemVcbiAgICAgICAgaW5mbyAnzqlfX185JywgXCJyZWFkICN7Y291bnRfcnByfSBlbnRyaWVzXCJcbiAgICAgICAgIyBkZWJ1ZyAnzqlfXzEwJywgZFxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBkZW1vX3JlYWRfd3JpdGVfbmpzX3NxbGl0ZSA9IC0+XG4gICAgICB7IGhydGltZV9hc19iaWdpbnQsXG4gICAgICAgIHRpbWVpdCwgICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfYmVuY2htYXJraW5nKClcbiAgICAgIHsgd2Fsa19saW5lc193aXRoX3Bvc2l0aW9ucywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9mYXN0X2xpbmVyZWFkZXIoKVxuICAgICAgcGF0aCAgICAgICAgICAgICAgICAgICAgICAgICAgICA9ICcvZGV2L3NobS9tYXAtY2FjaGUuZGInXG4gICAgICBGUyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpmcydcbiAgICAgIFNRTElURSAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnNxbGl0ZSdcbiAgICAgIHsgU1FMIH0gICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2RiYXknXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHN0YXRlbWVudHMgPVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGNyZWF0ZV90YWJsZV9zZWdtZW50c19mcmVlOiBTUUxcIlwiXCJcbiAgICAgICAgICBkcm9wIHRhYmxlIGlmIGV4aXN0cyBzZWdtZW50cztcbiAgICAgICAgICBjcmVhdGUgdGFibGUgc2VnbWVudHMgKFxuICAgICAgICAgICAgICBzZWdtZW50X3RleHQgICAgICB0ZXh0ICAgIG5vdCBudWxsIHByaW1hcnkga2V5LFxuICAgICAgICAgICAgICBzZWdtZW50X3dpZHRoICAgICBpbnRlZ2VyIG5vdCBudWxsLFxuICAgICAgICAgICAgICBzZWdtZW50X2xlbmd0aCAgICBpbnRlZ2VyIG5vdCBudWxsICk7XCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgY3JlYXRlX3RhYmxlX3NlZ21lbnRzX2NoZWNrczogU1FMXCJcIlwiXG4gICAgICAgICAgZHJvcCB0YWJsZSBpZiBleGlzdHMgc2VnbWVudHM7XG4gICAgICAgICAgY3JlYXRlIHRhYmxlIHNlZ21lbnRzIChcbiAgICAgICAgICAgICAgc2VnbWVudF90ZXh0ICAgICAgdGV4dCAgICBub3QgbnVsbCBwcmltYXJ5IGtleSxcbiAgICAgICAgICAgICAgc2VnbWVudF93aWR0aCAgICAgaW50ZWdlciBub3QgbnVsbCxcbiAgICAgICAgICAgICAgc2VnbWVudF9sZW5ndGggICAgaW50ZWdlciBub3QgbnVsbCxcbiAgICAgICAgICAgIGNvbnN0cmFpbnQgc2VnbWVudF93aWR0aF9lcWd0X3plcm8gIGNoZWNrICggc2VnbWVudF93aWR0aCAgPj0gMCApLFxuICAgICAgICAgICAgY29uc3RyYWludCBzZWdtZW50X2xlbmd0aF9lcWd0X3plcm8gY2hlY2sgKCBzZWdtZW50X2xlbmd0aCA+PSAwICkgKTtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBpbnNlcnRfc2VnbWVudDogU1FMXCJcIlwiXG4gICAgICAgICAgaW5zZXJ0IGludG8gc2VnbWVudHMgICggc2VnbWVudF90ZXh0LCAgc2VnbWVudF93aWR0aCwgICBzZWdtZW50X2xlbmd0aCApXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgICggJHNlZ21lbnRfdGV4dCwgJHNlZ21lbnRfd2lkdGgsICAkc2VnbWVudF9sZW5ndGggKVxuICAgICAgICAgICAgb24gY29uZmxpY3QgKCBzZWdtZW50X3RleHQgKSBkbyBub3RoaW5nXG4gICAgICAgICAgICByZXR1cm5pbmcgKjtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICByZWFkX3NlZ21lbnRzOiBTUUxcIlwiXCJcbiAgICAgICAgICBzZWxlY3QgKiBmcm9tIHNlZ21lbnRzO1wiXCJcIlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICB3cml0ZV9kYiA9IC0+XG4gICAgICAgIGRiICAgICAgICAgICAgICA9IG5ldyBTUUxJVEUuRGF0YWJhc2VTeW5jIHBhdGhcbiAgICAgICAgZGIuZXhlYyBzdGF0ZW1lbnRzLmNyZWF0ZV90YWJsZV9zZWdtZW50c19mcmVlXG4gICAgICAgIGluc2VydF9zZWdtZW50ICA9IGRiLnByZXBhcmUgc3RhdGVtZW50cy5pbnNlcnRfc2VnbWVudFxuICAgICAgICBtYXAgICAgICAgICAgICAgPSBnZXRfcmFuZG9tX3R3bF9tYXAgeyBzaXplOiBiZW5jaG1hcmtfY2ZnLm1heF9jb3VudCwgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgICMjIyBUQUlOVCB1c2UgdHJhbnNhY3Rpb24gIyMjXG4gICAgICAgIHRpbWVpdCB3cml0ZV9kYl9zeW5jID0gLT5cbiAgICAgICAgICBmb3IgWyBzZWdtZW50X3RleHQsIFsgc2VnbWVudF93aWR0aCwgc2VnbWVudF9sZW5ndGgsIF0sIF0gZnJvbSBtYXBcbiAgICAgICAgICAgIGRlYnVnICfOqV9fMTEnLCB7IHNlZ21lbnRfdGV4dCwgc2VnbWVudF93aWR0aCwgc2VnbWVudF9sZW5ndGgsIH1cbiAgICAgICAgICAgIGluc2VydF9zZWdtZW50LnJ1biB7IHNlZ21lbnRfdGV4dCwgc2VnbWVudF93aWR0aCwgc2VnbWVudF9sZW5ndGgsIH1cbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJlYWRfZGIgPSAoIG1hcCA9IG51bGwgKSAtPlxuICAgICAgICBkYiAgICAgICAgICAgICAgPSBuZXcgU1FMSVRFLkRhdGFiYXNlU3luYyBwYXRoXG4gICAgICAgIHJlYWRfc2VnbWVudHMgICA9IGRiLnByZXBhcmUgc3RhdGVtZW50cy5yZWFkX3NlZ21lbnRzXG4gICAgICAgIG1hcCAgICAgICAgICAgID89IG5ldyBNYXAoKVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHRpbWVpdCByZWFkX2RiX3N5bmMgPSAtPlxuICAgICAgICAgIGZvciB7IHNlZ21lbnRfdGV4dCwgc2VnbWVudF93aWR0aCwgc2VnbWVudF9sZW5ndGgsIH0gZnJvbSByZWFkX3NlZ21lbnRzLml0ZXJhdGUoKVxuICAgICAgICAgICAgZGVidWcgJ86pX18xMicsIHNlZ21lbnRfdGV4dCwgWyBzZWdtZW50X3dpZHRoLCBzZWdtZW50X2xlbmd0aCwgXVxuICAgICAgICAgICAgbWFwLnNldCBzZWdtZW50X3RleHQsIFsgc2VnbWVudF93aWR0aCwgc2VnbWVudF9sZW5ndGgsIF1cbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHJldHVybiBtYXBcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgd3JpdGVfZGIoKVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkICAgICAgICAgPSByZWFkX2RiKClcbiAgICAgICAgY291bnRfcnByID0gKCBuZXcgSW50bC5OdW1iZXJGb3JtYXQgJ2VuLVVTJyApLmZvcm1hdCBkLnNpemVcbiAgICAgICAgaW5mbyAnzqlfXzEzJywgXCJyZWFkICN7Y291bnRfcnByfSBlbnRyaWVzXCJcbiAgICAgICAgIyBkZWJ1ZyAnzqlfXzE0JywgZFxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAjIGRlbW9fZmFzdF9yZWFkbGluZV9zeW5jKClcbiAgICBkZW1vX3JlYWRfd3JpdGVfYmlnX21hcCgpXG4gICAgZGVtb19yZWFkX3dyaXRlX25qc19zcWxpdGUoKVxuICAgICMgYXdhaXQgZGVtb19mYXN0X3JlYWRsaW5lX2FzeW5jKClcbiAgICAjIGRlbW9fZ3V5ZnNfcmVhZGxpbmUoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmJlbmNobWFya19jZmcgPVxuICBtYXhfY291bnQ6IDFlMlxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICAjIGRlbW9faW5maW5pdGVfcHJveHkoKVxuICAjIGRlbW9fY29sb3JmdWxfcHJveHkoKVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBhd2FpdCAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkuYXN5bmNfdGVzdCB7IGJlbmNobWFya3MsIH1cbiAgcmV0dXJuIG51bGxcblxuIl19
//# sourceURL=../src/benchmark-read-huge-csv.coffee