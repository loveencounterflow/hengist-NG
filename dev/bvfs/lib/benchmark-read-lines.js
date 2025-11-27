(async function() {
  'use strict';
  var Benchmarker, GTNG, GUY, Get_random, PATH, SFMODULES, Test, alert, benchmark_cfg, benchmarker, benchmarks, blue, bold, debug, echo, f, gold, green, grey, help, hrtime_as_bigint, info, inspect, log, nameit, nfa, plain, praise, red, reverse, rpr, timeit, urge, warn, whisper, white;

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
  this.benchmarks = benchmarks = {
    //---------------------------------------------------------------------------------------------------------
    run_benchmarks: function() {
      var bvfs_db_lines_per_s, bvfs_mount_lines_per_s, read_chunks_from_regular_fs, read_lines_from_bvfs_db, read_lines_from_bvfs_mount, read_lines_from_regular_fs, regular_fs_lines_per_s;
      //-------------------------------------------------------------------------------------------------------
      read_chunks_from_regular_fs = function() {
        var brand, count, read_meanings_txt, total, walk_buffers_with_positions;
        ({walk_buffers_with_positions} = SFMODULES.unstable.require_fast_linereader());
        total = benchmark_cfg.line_count;
        count = 0;
        brand = 'chunks';
        //.....................................................................................................
        timeit({total, brand}, read_meanings_txt = function({progress}) {
          var d;
          for (d of walk_buffers_with_positions(benchmark_cfg.paths.regular)) {
            count++;
            progress();
          }
          return null;
        });
        //.....................................................................................................
        debug('Ωbrl___1', {count});
        return null;
      };
      //-------------------------------------------------------------------------------------------------------
      read_lines_from_regular_fs = function() {
        var brand, count, read_meanings_txt, total, walk_lines_with_positions;
        ({walk_lines_with_positions} = SFMODULES.unstable.require_fast_linereader());
        total = benchmark_cfg.line_count;
        count = 0;
        brand = 'regular_fs';
        //.....................................................................................................
        timeit({total, brand}, read_meanings_txt = function({progress}) {
          var d;
          for (d of walk_lines_with_positions(benchmark_cfg.paths.regular)) {
            count++;
            progress();
          }
          return null;
        });
        //.....................................................................................................
        debug('Ωbrl___2', {count});
        return null;
      };
      //-------------------------------------------------------------------------------------------------------
      read_lines_from_bvfs_mount = function() {
        var brand, count, read_meanings_txt, total, walk_lines_with_positions;
        ({walk_lines_with_positions} = SFMODULES.unstable.require_fast_linereader());
        total = benchmark_cfg.line_count;
        count = 0;
        brand = 'bvfs_mount';
        //.....................................................................................................
        timeit({total, brand}, read_meanings_txt = function({progress}) {
          var d;
          for (d of walk_lines_with_positions(benchmark_cfg.paths.bvfs)) {
            count++;
            progress();
          }
          return null;
        });
        //.....................................................................................................
        debug('Ωbrl___3', {count});
        return null;
      };
      //-------------------------------------------------------------------------------------------------------
      read_lines_from_bvfs_db = function() {
        var Dbric, SQL, brand, bvfs, count, internals, read_lines, read_meanings_txt, total;
        ({Dbric, SQL, internals} = SFMODULES.unstable.require_dbric());
        bvfs = Dbric.open(benchmark_cfg.paths.bvfs_db);
        total = benchmark_cfg.line_count;
        count = 0;
        read_lines = bvfs.prepare(SQL`select * from bv_lines where file_id = 8 order by line_nr;`);
        brand = 'bvfs_db';
        //.....................................................................................................
        timeit({total, brand}, read_meanings_txt = function({progress}) {
          var d;
          for (d of read_lines.iterate()) {
            count++;
            progress();
          }
          return null;
        });
        //.....................................................................................................
        debug('Ωbrl___5', {count});
        return null;
      };
      //.......................................................................................................
      read_chunks_from_regular_fs();
      read_lines_from_regular_fs();
      read_lines_from_bvfs_mount();
      read_lines_from_bvfs_db();
      //.......................................................................................................
      regular_fs_lines_per_s = benchmark_cfg.line_count / (benchmarker.brands.regular_fs.read_meanings_txt[0] / 1000);
      bvfs_mount_lines_per_s = benchmark_cfg.line_count / (benchmarker.brands.bvfs_mount.read_meanings_txt[0] / 1000);
      bvfs_db_lines_per_s = benchmark_cfg.line_count / (benchmarker.brands.bvfs_db.read_meanings_txt[0] / 1000);
      echo('Ωbrl___6', f`regular_fs_lines: ${regular_fs_lines_per_s}:>20,.0f; Hz`);
      echo('Ωbrl___7', f`bvfs_mount_lines: ${bvfs_mount_lines_per_s}:>20,.0f; Hz`);
      echo('Ωbrl___8', f`bvfs_db_lines:    ${bvfs_db_lines_per_s}:>20,.0f; Hz`);
      //.......................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  benchmark_cfg = {
    // max_count: 10
    // max_count: 1e6
    // max_count: 12345
    line_count: 54012,
    paths: {
      regular: PATH.resolve(__dirname, '../../../../../io/mingkwai-rack/jizura-datasources/data/flat-files/meaning/meanings.txt'),
      bvfs: PATH.resolve(__dirname, '../../../apps/bvfs/mount/meanings.txt'),
      bvfs_db: PATH.resolve(__dirname, '../../../apps/bvfs/bvfs.db')
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
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
      (new Test(guytest_cfg)).test({benchmarks});
      // { require_bricabrac_cfg,    } = SFMODULES.unstable.require_get_callsite()
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JlbmNobWFyay1yZWFkLWxpbmVzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxXQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxVQUFBLEVBQUEsSUFBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLGFBQUEsRUFBQSxXQUFBLEVBQUEsVUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLGdCQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLE1BQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBOzs7RUFHQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLDBDQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsS0FIRixFQUlFLEtBSkYsRUFLRSxJQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxHQVJGLEVBU0UsSUFURixFQVVFLE9BVkYsRUFXRSxHQVhGLENBQUEsR0FXNEIsR0FBRyxDQUFDLEdBWGhDOztFQVlBLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLHlCQUFSLENBQTVCLEVBekJBOzs7RUEy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RUFGRixFQTNJRjs7O0VBa0pBLElBQUcsTUFBQSxLQUFVLE9BQU8sQ0FBQyxJQUFyQjtJQUErQixNQUFTLENBQUEsQ0FBQSxDQUFBLEdBQUE7QUFDeEMsVUFBQTtNQUFFLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsS0FBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsSUFBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEIsQ0FBRSxVQUFGLENBQTlCLEVBRkY7O0FBSUUsYUFBTztJQUwrQixDQUFBLElBQXhDOztBQWxKQSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2JlbmNobWFyay11bmljb2RlLWNoYXJhY3Rlci13aWR0aC5jb2ZmZWUnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgZ3JlZW5cbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiMgd3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcbnsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG5QQVRIICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xueyBHZXRfcmFuZG9tLCAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2dldF9yYW5kb20oKVxueyBocnRpbWVfYXNfYmlnaW50LFxuICBCZW5jaG1hcmtlciwgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2JlbmNobWFya2luZygpXG57IG5hbWVpdCwgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfbmFtZWl0KClcbiMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuYmVuY2htYXJrZXIgPSBuZXcgQmVuY2htYXJrZXIoKVxudGltZWl0ID0gKCBQLi4uICkgLT4gYmVuY2htYXJrZXIudGltZWl0IFAuLi5cblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQGJlbmNobWFya3MgPSBiZW5jaG1hcmtzID1cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJ1bl9iZW5jaG1hcmtzOiAtPlxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICByZWFkX2NodW5rc19mcm9tX3JlZ3VsYXJfZnMgPSAtPlxuICAgICAgeyB3YWxrX2J1ZmZlcnNfd2l0aF9wb3NpdGlvbnMsICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2Zhc3RfbGluZXJlYWRlcigpXG4gICAgICB0b3RhbCAgICAgICAgICAgICA9IGJlbmNobWFya19jZmcubGluZV9jb3VudFxuICAgICAgY291bnQgICAgICAgICAgICAgPSAwXG4gICAgICBicmFuZCAgICAgICAgICAgICA9ICdjaHVua3MnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHRpbWVpdCB7IHRvdGFsLCBicmFuZCwgfSwgcmVhZF9tZWFuaW5nc190eHQgPSAoeyBwcm9ncmVzcywgfSkgLT5cbiAgICAgICAgZm9yIGQgZnJvbSB3YWxrX2J1ZmZlcnNfd2l0aF9wb3NpdGlvbnMgYmVuY2htYXJrX2NmZy5wYXRocy5yZWd1bGFyXG4gICAgICAgICAgY291bnQrK1xuICAgICAgICAgIHByb2dyZXNzKClcbiAgICAgICAgO251bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZGVidWcgJ86pYnJsX19fMScsIHsgY291bnQsIH1cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHJlYWRfbGluZXNfZnJvbV9yZWd1bGFyX2ZzID0gLT5cbiAgICAgIHsgd2Fsa19saW5lc193aXRoX3Bvc2l0aW9ucywgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZmFzdF9saW5lcmVhZGVyKClcbiAgICAgIHRvdGFsICAgICAgICAgICAgID0gYmVuY2htYXJrX2NmZy5saW5lX2NvdW50XG4gICAgICBjb3VudCAgICAgICAgICAgICA9IDBcbiAgICAgIGJyYW5kICAgICAgICAgICAgID0gJ3JlZ3VsYXJfZnMnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHRpbWVpdCB7IHRvdGFsLCBicmFuZCwgfSwgcmVhZF9tZWFuaW5nc190eHQgPSAoeyBwcm9ncmVzcywgfSkgLT5cbiAgICAgICAgZm9yIGQgZnJvbSB3YWxrX2xpbmVzX3dpdGhfcG9zaXRpb25zIGJlbmNobWFya19jZmcucGF0aHMucmVndWxhclxuICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICBwcm9ncmVzcygpXG4gICAgICAgIDtudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRlYnVnICfOqWJybF9fXzInLCB7IGNvdW50LCB9XG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICByZWFkX2xpbmVzX2Zyb21fYnZmc19tb3VudCA9IC0+XG4gICAgICB7IHdhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnMsICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2Zhc3RfbGluZXJlYWRlcigpXG4gICAgICB0b3RhbCAgICAgICAgICAgICA9IGJlbmNobWFya19jZmcubGluZV9jb3VudFxuICAgICAgY291bnQgICAgICAgICAgICAgPSAwXG4gICAgICBicmFuZCAgICAgICAgICAgICA9ICdidmZzX21vdW50J1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICB0aW1laXQgeyB0b3RhbCwgYnJhbmQsIH0sIHJlYWRfbWVhbmluZ3NfdHh0ID0gKHsgcHJvZ3Jlc3MsIH0pIC0+XG4gICAgICAgIGZvciBkIGZyb20gd2Fsa19saW5lc193aXRoX3Bvc2l0aW9ucyBiZW5jaG1hcmtfY2ZnLnBhdGhzLmJ2ZnNcbiAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgcHJvZ3Jlc3MoKVxuICAgICAgICA7bnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkZWJ1ZyAnzqlicmxfX18zJywgeyBjb3VudCwgfVxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgcmVhZF9saW5lc19mcm9tX2J2ZnNfZGIgPSAtPlxuICAgICAgeyBEYnJpYyxcbiAgICAgICAgU1FMLFxuICAgICAgICBpbnRlcm5hbHMsICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgICBidmZzICAgICAgICAgICAgICA9IERicmljLm9wZW4gYmVuY2htYXJrX2NmZy5wYXRocy5idmZzX2RiXG4gICAgICB0b3RhbCAgICAgICAgICAgICA9IGJlbmNobWFya19jZmcubGluZV9jb3VudFxuICAgICAgY291bnQgICAgICAgICAgICAgPSAwXG4gICAgICByZWFkX2xpbmVzICAgICAgICA9IGJ2ZnMucHJlcGFyZSBTUUxcInNlbGVjdCAqIGZyb20gYnZfbGluZXMgd2hlcmUgZmlsZV9pZCA9IDggb3JkZXIgYnkgbGluZV9ucjtcIlxuICAgICAgYnJhbmQgICAgICAgICAgICAgPSAnYnZmc19kYidcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgdGltZWl0IHsgdG90YWwsIGJyYW5kLCB9LCByZWFkX21lYW5pbmdzX3R4dCA9ICh7IHByb2dyZXNzLCB9KSAtPlxuICAgICAgICBmb3IgZCBmcm9tIHJlYWRfbGluZXMuaXRlcmF0ZSgpXG4gICAgICAgICAgY291bnQrK1xuICAgICAgICAgIHByb2dyZXNzKClcbiAgICAgICAgO251bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZGVidWcgJ86pYnJsX19fNScsIHsgY291bnQsIH1cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJlYWRfY2h1bmtzX2Zyb21fcmVndWxhcl9mcygpXG4gICAgcmVhZF9saW5lc19mcm9tX3JlZ3VsYXJfZnMoKVxuICAgIHJlYWRfbGluZXNfZnJvbV9idmZzX21vdW50KClcbiAgICByZWFkX2xpbmVzX2Zyb21fYnZmc19kYigpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZWd1bGFyX2ZzX2xpbmVzX3Blcl9zID0gYmVuY2htYXJrX2NmZy5saW5lX2NvdW50IC8gKCBiZW5jaG1hcmtlci5icmFuZHMucmVndWxhcl9mcy5yZWFkX21lYW5pbmdzX3R4dFsgMCBdIC8gMTAwMCApXG4gICAgYnZmc19tb3VudF9saW5lc19wZXJfcyA9IGJlbmNobWFya19jZmcubGluZV9jb3VudCAvICggYmVuY2htYXJrZXIuYnJhbmRzLmJ2ZnNfbW91bnQucmVhZF9tZWFuaW5nc190eHRbIDAgXSAvIDEwMDAgKVxuICAgIGJ2ZnNfZGJfbGluZXNfcGVyX3MgICAgPSBiZW5jaG1hcmtfY2ZnLmxpbmVfY291bnQgLyAoIGJlbmNobWFya2VyLmJyYW5kcy5idmZzX2RiLnJlYWRfbWVhbmluZ3NfdHh0WyAwIF0gLyAxMDAwIClcbiAgICBlY2hvICfOqWJybF9fXzYnLCBmXCJyZWd1bGFyX2ZzX2xpbmVzOiAje3JlZ3VsYXJfZnNfbGluZXNfcGVyX3N9Oj4yMCwuMGY7IEh6XCJcbiAgICBlY2hvICfOqWJybF9fXzcnLCBmXCJidmZzX21vdW50X2xpbmVzOiAje2J2ZnNfbW91bnRfbGluZXNfcGVyX3N9Oj4yMCwuMGY7IEh6XCJcbiAgICBlY2hvICfOqWJybF9fXzgnLCBmXCJidmZzX2RiX2xpbmVzOiAgICAje2J2ZnNfZGJfbGluZXNfcGVyX3MgICB9Oj4yMCwuMGY7IEh6XCJcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmJlbmNobWFya19jZmcgPVxuICAjIG1heF9jb3VudDogMTBcbiAgIyBtYXhfY291bnQ6IDFlNlxuICAjIG1heF9jb3VudDogMTIzNDVcbiAgbGluZV9jb3VudDogNTQwMTJcbiAgcGF0aHM6XG4gICAgcmVndWxhcjogIFBBVEgucmVzb2x2ZSBfX2Rpcm5hbWUsICcuLi8uLi8uLi8uLi8uLi9pby9taW5na3dhaS1yYWNrL2ppenVyYS1kYXRhc291cmNlcy9kYXRhL2ZsYXQtZmlsZXMvbWVhbmluZy9tZWFuaW5ncy50eHQnXG4gICAgYnZmczogICAgIFBBVEgucmVzb2x2ZSBfX2Rpcm5hbWUsICcuLi8uLi8uLi9hcHBzL2J2ZnMvbW91bnQvbWVhbmluZ3MudHh0J1xuICAgIGJ2ZnNfZGI6ICBQQVRILnJlc29sdmUgX19kaXJuYW1lLCAnLi4vLi4vLi4vYXBwcy9idmZzL2J2ZnMuZGInXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgYmVuY2htYXJrcywgfVxuICAjIHsgcmVxdWlyZV9icmljYWJyYWNfY2ZnLCAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X2NhbGxzaXRlKClcbiAgcmV0dXJuIG51bGxcblxuIl19
