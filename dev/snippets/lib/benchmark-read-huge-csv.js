(async function() {
  'use strict';
  var GTNG, GUY, PATH, SFMODULES, Test, alert, benchmarks, blue, bold, debug, echo, f, gold, green, grey, help, info, inspect, log, nfa, plain, praise, red, reverse, rpr, urge, warn, whisper, white,
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

  SFMODULES = require('../../../apps/bricabrac-single-file-modules');

  PATH = require('node:path');

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
      var demo_fast_readline_async, demo_fast_readline_sync, demo_guyfs_readline, demo_read_write_big_map;
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
        var FS, _get_unique_text, get_unique_text, hrtime_as_bigint, max_count, path, read_file, walk_lines_with_positions, write_file;
        ({hrtime_as_bigint} = SFMODULES.unstable.require_benchmarking());
        ({walk_lines_with_positions} = SFMODULES.unstable.require_fast_linereader());
        ({
          default: _get_unique_text
        } = require('unique-string'));
        max_count = 1e5;
        get_unique_text = function() {
          return _get_unique_text().slice(0, +(GUY.rnd.random_integer(1, 15)) + 1 || 9e9);
        };
        path = '/tmp/map-cache.jsonl';
        FS = require('node:fs');
        //.....................................................................................................
        write_file = function() {
          var count, entry, i, map, old_size, ref, t0, t1;
          map = new Map();
          old_size = 0;
          FS.writeFileSync(path, '');
          for (count = i = 1, ref = max_count; (1 <= ref ? i <= ref : i >= ref); count = 1 <= ref ? ++i : --i) {
            while (map.size === old_size) {
              entry = [get_unique_text(), GUY.rnd.random_integer(0, 10)];
              map.set(...entry);
            }
            old_size = map.size;
          }
          t0 = hrtime_as_bigint();
          for (entry of map) {
            FS.appendFileSync(path, `${JSON.stringify(entry)}\n`);
          }
          t1 = hrtime_as_bigint();
          return echo('Ω__10', 'write_file', f`${(Number(t1 - t0)) / 1_000_000}:>20,.9f;`);
        };
        //.....................................................................................................
        read_file = function(map = null) {
          var line, t0, t1, x;
          t0 = hrtime_as_bigint();
          if (map == null) {
            map = new Map();
          }
          for (x of walk_lines_with_positions(path)) {
            ({line} = x);
            map.set(...(JSON.parse(line)));
          }
          t1 = hrtime_as_bigint();
          echo('Ω__11', 'read_file', f`${(Number(t1 - t0)) / 1_000_000}:>20,.9f;`);
          return map;
        };
        (() => {          //.....................................................................................................
          write_file();
          return null;
        })();
        (() => {          //.....................................................................................................
          var d;
          d = read_file(d);
          debug('Ω__12', d.size);
          // debug 'Ω__13', d
          return null;
        })();
        //.....................................................................................................
        return null;
      };
      //-------------------------------------------------------------------------------------------------------
      // demo_fast_readline_sync()
      demo_read_write_big_map();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JlbmNobWFyay1yZWFkLWh1Z2UtY3N2LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxVQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQTtJQUFBLDJEQUFBOzs7RUFHQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLDBDQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsS0FIRixFQUlFLEtBSkYsRUFLRSxJQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxHQVJGLEVBU0UsSUFURixFQVVFLE9BVkYsRUFXRSxHQVhGLENBQUEsR0FXNEIsR0FBRyxDQUFDLEdBWGhDOztFQVlBLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLHlCQUFSLENBQTVCLEVBekJBOzs7RUEyQkEsQ0FBQSxDQUFFLEdBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEsNENBQVIsQ0FBNUI7O0VBQ0Es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LFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsSUFBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLE1BQU0sQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxVQUF6QixDQUFvQyxDQUFFLFVBQUYsQ0FBcEM7QUFDTixhQUFPO0lBTitCLENBQUEsSUFBeEM7O0FBakxBIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbid1c2Ugc3RyaWN0J1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnYmVuY2htYXJrLXVuaWNvZGUtY2hhcmFjdGVyLXdpZHRoLmNvZmZlZSdcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICB3aGl0ZVxuICBncmVlblxuICBibHVlXG4gIGdvbGRcbiAgZ3JleVxuICByZWRcbiAgYm9sZFxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuIyB3cml0ZSAgICAgICAgICAgICAgICAgICAgID0gKCBwICkgLT4gcHJvY2Vzcy5zdGRvdXQud3JpdGUgcFxueyBuZmEgfSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zaW5nbGUtZmlsZS1tb2R1bGVzJ1xuUEFUSCAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6cGF0aCdcblxuT2JqZWN0LmFzc2lnbiBTRk1PRFVMRVMudW5zdGFibGUsXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAjIyMgTk9URSBGdXR1cmUgU2luZ2xlLUZpbGUgTW9kdWxlICMjI1xuICByZXF1aXJlX3JlYWRsaW5lX29wdGltaXplZDogLT5cblxuICAgIEZTICA9IHJlcXVpcmUgJ25vZGU6ZnMnXG4gICAgbmwgID0gJ1xcbicuY29kZVBvaW50QXQgMFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgd2Fsa19saW5lc193aXRoX3Bvc2l0aW9uc19hc3luYyA9ICggcGF0aCApIC0+XG4gICAgICAjIGZyb20gbW1vbXRjaGV2L3JlYWRjc3YvcmVhZGNzdi1idWZmZXJlZC1vcHQuanNcbiAgICAgIHJlYWRzdHJlYW0gID0gRlMuY3JlYXRlUmVhZFN0cmVhbSBwYXRoXG4gICAgICByZW1haW5kZXIgICA9ICcnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBmb3IgYXdhaXQgYnVmZmVyIGZyb20gcmVhZHN0cmVhbVxuICAgICAgICBzdGFydCA9IDBcbiAgICAgICAgc3RvcCAgPSBudWxsXG4gICAgICAgIHdoaWxlICggc3RvcCA9IGJ1ZmZlci5pbmRleE9mIG5sLCBzdGFydCApIGlzbnQgLTFcbiAgICAgICAgICAjIGRlYnVnICfOqV9fXzEnLCB7IHN0YXJ0LCBzdG9wLCB9LCBycHIgKCAoIGJ1ZmZlci5zbGljZSBzdGFydCwgc3RvcCApLnRvU3RyaW5nICd1dGYtOCcgKVsgLi4gMTA4IF1cbiAgICAgICAgICBpZiAoIHN0YXJ0ID09IDAgKSBhbmQgKCByZW1haW5kZXIubGVuZ3RoID4gMCApXG4gICAgICAgICAgICAjIGRlYnVnICfOqV9fXzInLCByZW1haW5kZXIgKyBidWZmZXIuc2xpY2UgMCwgc3RvcFxuICAgICAgICAgICAgeWllbGQgcmVtYWluZGVyICsgYnVmZmVyLnNsaWNlIDAsIHN0b3AgKyAxXG4gICAgICAgICAgICByZW1haW5kZXIgPSAnJ1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHlpZWxkICggYnVmZmVyLnNsaWNlIHN0YXJ0LCBzdG9wICsgMSApLnRvU3RyaW5nICd1dGYtOCdcbiAgICAgICAgICBzdGFydCA9IHN0b3AgKyAxXG4gICAgICAgIHJlbWFpbmRlciA9IGJ1ZmZlci5zbGljZSBzdGFydFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIHJldHVybiBleHBvcnRzID0geyB3YWxrX2xpbmVzX3dpdGhfcG9zaXRpb25zX2FzeW5jLCB9XG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQGJlbmNobWFya3MgPSBiZW5jaG1hcmtzID1cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJ1bl9iZW5jaG1hcmtzOiAtPlxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBkZW1vX2Zhc3RfcmVhZGxpbmVfYXN5bmMgPSAtPlxuICAgICAgeyBocnRpbWVfYXNfYmlnaW50LCB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfYmVuY2htYXJraW5nKClcbiAgICAgIHJlbHBhdGggPSAnLi4vLi4vLi4vLi4vLi4vM3JkLXBhcnR5LXJlcG9zL21tb210Y2hldi1yZWFkY3N2LWZvci1yZWFkLWZpbGUtYmVuY2htYXJrJ1xuICAgICAgeyB3YWxrX2xpbmVzX3dpdGhfcG9zaXRpb25zX2FzeW5jLCB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfcmVhZGxpbmVfb3B0aW1pemVkKClcbiAgICAgIHBhdGggPSBQQVRILnJlc29sdmUgUEFUSC5qb2luIF9fZGlybmFtZSwgcmVscGF0aCwgJ2FsbENvdW50cmllcy50eHQnXG4gICAgICBjb3VudCA9IDBcbiAgICAgIHQwID0gaHJ0aW1lX2FzX2JpZ2ludCgpXG4gICAgICBmb3IgYXdhaXQgbGluZSBmcm9tIHdhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnNfYXN5bmMgcGF0aFxuICAgICAgICBjb3VudCsrXG4gICAgICAgICMgcmV0dXJuIG51bGwgaWYgY291bnQgPiAxMDBcbiAgICAgICAgZWNobyAnzqlfX18zJywgY291bnQsICggcnByIGxpbmVbIC4uIDEwOCBdICkgaWYgKCBjb3VudCAlJSAxXzAwMF8wMDAgKSBpcyAwXG4gICAgICB0MSA9IGhydGltZV9hc19iaWdpbnQoKVxuICAgICAgZWNobyAnzqlfX180JywgJ2RlbW9fZmFzdF9yZWFkbGluZV9hc3luYycsIGZcIiN7KCBOdW1iZXIgdDEgLSB0MCApIC8gMV8wMDBfMDAwfTo+MjAsLjlmO1wiXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBkZW1vX2Zhc3RfcmVhZGxpbmVfc3luYyA9IC0+XG4gICAgICB7IGhydGltZV9hc19iaWdpbnQsIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9iZW5jaG1hcmtpbmcoKVxuICAgICAgcmVscGF0aCA9ICcuLi8uLi8uLi8uLi8uLi8zcmQtcGFydHktcmVwb3MvbW1vbXRjaGV2LXJlYWRjc3YtZm9yLXJlYWQtZmlsZS1iZW5jaG1hcmsnXG4gICAgICB7IHdhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnMsIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9mYXN0X2xpbmVyZWFkZXIoKVxuICAgICAgcGF0aCA9IFBBVEgucmVzb2x2ZSBQQVRILmpvaW4gX19kaXJuYW1lLCByZWxwYXRoLCAnYWxsQ291bnRyaWVzLnR4dCdcbiAgICAgIGNvdW50ID0gMFxuICAgICAgdDAgPSBocnRpbWVfYXNfYmlnaW50KClcbiAgICAgIGZvciB7IGxpbmUsIH0gZnJvbSB3YWxrX2xpbmVzX3dpdGhfcG9zaXRpb25zIHBhdGhcbiAgICAgICAgY291bnQrK1xuICAgICAgICAjIHJldHVybiBudWxsIGlmIGNvdW50ID4gMTAwXG4gICAgICAgIGVjaG8gJ86pX19fNScsIGNvdW50LCAoIHJwciBsaW5lWyAuLiAxMDggXSApIGlmICggY291bnQgJSUgMV8wMDBfMDAwICkgaXMgMFxuICAgICAgdDEgPSBocnRpbWVfYXNfYmlnaW50KClcbiAgICAgIGVjaG8gJ86pX19fNicsICdkZW1vX2Zhc3RfcmVhZGxpbmVfc3luYycsIGZcIiN7KCBOdW1iZXIgdDEgLSB0MCApIC8gMV8wMDBfMDAwfTo+MjAsLjlmO1wiXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBkZW1vX2d1eWZzX3JlYWRsaW5lID0gLT5cbiAgICAgIHsgaHJ0aW1lX2FzX2JpZ2ludCwgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2JlbmNobWFya2luZygpXG4gICAgICByZWxwYXRoID0gJy4uLy4uLy4uLy4uLy4uLzNyZC1wYXJ0eS1yZXBvcy9tbW9tdGNoZXYtcmVhZGNzdi1mb3ItcmVhZC1maWxlLWJlbmNobWFyaydcbiAgICAgIHBhdGggPSBQQVRILnJlc29sdmUgUEFUSC5qb2luIF9fZGlybmFtZSwgcmVscGF0aCwgJ2FsbENvdW50cmllcy50eHQnXG4gICAgICBjb3VudCA9IDBcbiAgICAgIHQwID0gaHJ0aW1lX2FzX2JpZ2ludCgpXG4gICAgICBmb3IgeyBsaW5lLCB9IGZyb20gR1VZLmZzLndhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnMgcGF0aFxuICAgICAgICBjb3VudCsrXG4gICAgICAgICMgcmV0dXJuIG51bGwgaWYgY291bnQgPiAxMDBcbiAgICAgICAgZWNobyAnzqlfX183JywgY291bnQsICggcnByIGxpbmVbIC4uIDEwOCBdICkgaWYgKCBjb3VudCAlJSAxXzAwMF8wMDAgKSBpcyAwXG4gICAgICB0MSA9IGhydGltZV9hc19iaWdpbnQoKVxuICAgICAgZWNobyAnzqlfX184JywgJ2RlbW9fZ3V5ZnNfcmVhZGxpbmUnLCBmXCIjeyggTnVtYmVyIHQxIC0gdDAgKSAvIDFfMDAwXzAwMH06PjIwLC45ZjtcIlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZGVtb19yZWFkX3dyaXRlX2JpZ19tYXAgPSAtPlxuICAgICAgeyBocnRpbWVfYXNfYmlnaW50LCAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2JlbmNobWFya2luZygpXG4gICAgICB7IHdhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnMsICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZmFzdF9saW5lcmVhZGVyKClcbiAgICAgIHsgZGVmYXVsdDogX2dldF91bmlxdWVfdGV4dCwgIH0gPSByZXF1aXJlICd1bmlxdWUtc3RyaW5nJ1xuICAgICAgbWF4X2NvdW50ICAgICAgICAgICAgICAgICAgICAgICA9IDFlNVxuICAgICAgZ2V0X3VuaXF1ZV90ZXh0ICAgICAgICAgICAgICAgICA9IC0+IF9nZXRfdW5pcXVlX3RleHQoKVsgLi4gKCBHVVkucm5kLnJhbmRvbV9pbnRlZ2VyIDEsIDE1ICkgXVxuICAgICAgcGF0aCAgICAgICAgICAgICAgICAgICAgICAgICAgICA9ICcvdG1wL21hcC1jYWNoZS5qc29ubCdcbiAgICAgIEZTICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOmZzJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICB3cml0ZV9maWxlID0gLT5cbiAgICAgICAgbWFwICAgICAgID0gbmV3IE1hcCgpXG4gICAgICAgIG9sZF9zaXplICA9IDBcbiAgICAgICAgRlMud3JpdGVGaWxlU3luYyBwYXRoLCAnJ1xuICAgICAgICBmb3IgY291bnQgaW4gWyAxIC4uIG1heF9jb3VudCBdXG4gICAgICAgICAgd2hpbGUgbWFwLnNpemUgaXMgb2xkX3NpemVcbiAgICAgICAgICAgIGVudHJ5ID0gWyBnZXRfdW5pcXVlX3RleHQoKSwgKCBHVVkucm5kLnJhbmRvbV9pbnRlZ2VyIDAsIDEwICksIF1cbiAgICAgICAgICAgIG1hcC5zZXQgZW50cnkuLi5cbiAgICAgICAgICBvbGRfc2l6ZSA9IG1hcC5zaXplXG4gICAgICAgIHQwID0gaHJ0aW1lX2FzX2JpZ2ludCgpXG4gICAgICAgIGZvciBlbnRyeSBmcm9tIG1hcFxuICAgICAgICAgIEZTLmFwcGVuZEZpbGVTeW5jIHBhdGgsIFwiI3tKU09OLnN0cmluZ2lmeSBlbnRyeX1cXG5cIlxuICAgICAgICB0MSA9IGhydGltZV9hc19iaWdpbnQoKVxuICAgICAgICBlY2hvICfOqV9fMTAnLCAnd3JpdGVfZmlsZScsIGZcIiN7KCBOdW1iZXIgdDEgLSB0MCApIC8gMV8wMDBfMDAwfTo+MjAsLjlmO1wiXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJlYWRfZmlsZSA9ICggbWFwID0gbnVsbCApIC0+XG4gICAgICAgIHQwICA9IGhydGltZV9hc19iaWdpbnQoKVxuICAgICAgICBtYXAgICAgICA/PSBuZXcgTWFwKClcbiAgICAgICAgZm9yIHsgbGluZSwgfSBmcm9tIHdhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnMgcGF0aFxuICAgICAgICAgIG1hcC5zZXQgKCBKU09OLnBhcnNlIGxpbmUgKS4uLlxuICAgICAgICB0MSAgPSBocnRpbWVfYXNfYmlnaW50KClcbiAgICAgICAgZWNobyAnzqlfXzExJywgJ3JlYWRfZmlsZScsIGZcIiN7KCBOdW1iZXIgdDEgLSB0MCApIC8gMV8wMDBfMDAwfTo+MjAsLjlmO1wiXG4gICAgICAgIHJldHVybiBtYXBcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgd3JpdGVfZmlsZSgpXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGQgICA9IHJlYWRfZmlsZSBkXG4gICAgICAgIGRlYnVnICfOqV9fMTInLCBkLnNpemVcbiAgICAgICAgIyBkZWJ1ZyAnzqlfXzEzJywgZFxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAjIGRlbW9fZmFzdF9yZWFkbGluZV9zeW5jKClcbiAgICBkZW1vX3JlYWRfd3JpdGVfYmlnX21hcCgpXG4gICAgIyBhd2FpdCBkZW1vX2Zhc3RfcmVhZGxpbmVfYXN5bmMoKVxuICAgICMgZGVtb19ndXlmc19yZWFkbGluZSgpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICAjIGRlbW9faW5maW5pdGVfcHJveHkoKVxuICAjIGRlbW9fY29sb3JmdWxfcHJveHkoKVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBhd2FpdCAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkuYXN5bmNfdGVzdCB7IGJlbmNobWFya3MsIH1cbiAgcmV0dXJuIG51bGxcblxuIl19
//# sourceURL=../src/benchmark-read-huge-csv.coffee