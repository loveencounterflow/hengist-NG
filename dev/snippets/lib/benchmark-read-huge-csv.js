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
      var demo_fast_readline_async, demo_fast_readline_sync, demo_guyfs_readline;
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
            echo('Ω___3', count, rpr(line.slice(0, 109)));
          }
        }
        t1 = hrtime_as_bigint();
        echo('Ω___4', 'demo_fast_readline_sync', f`${(Number(t1 - t0)) / 1_000_000}:>20,.9f;`);
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
            echo('Ω___5', count, rpr(line.slice(0, 109)));
          }
        }
        t1 = hrtime_as_bigint();
        echo('Ω___6', 'demo_guyfs_readline', f`${(Number(t1 - t0)) / 1_000_000}:>20,.9f;`);
        return null;
      };
      //-------------------------------------------------------------------------------------------------------
      demo_fast_readline_sync();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JlbmNobWFyay1yZWFkLWh1Z2UtY3N2LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxVQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQTtJQUFBLDJEQUFBOzs7RUFHQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLDBDQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsS0FIRixFQUlFLEtBSkYsRUFLRSxJQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxHQVJGLEVBU0UsSUFURixFQVVFLE9BVkYsRUFXRSxHQVhGLENBQUEsR0FXNEIsR0FBRyxDQUFDLEdBWGhDOztFQVlBLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLHlCQUFSLENBQTVCLEVBekJBOzs7RUEyQkEsQ0FBQSxDQUFFLEdBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEsNENBQVIsQ0FBNUI7O0VBQ0EsSUFBQSxHQUE0QixPQUFBLENBQVEsMkJBQVI7O0VBQzVCLENBQUEsQ0FBRSxJQUFGLENBQUEsR0FBNEIsSUFBNUI7O0VBQ0EsU0FBQSxHQUE0QixPQUFBLENBQVEsNkNBQVI7O0VBQzVCLElBQUEsR0FBNEIsT0FBQSxDQUFRLFdBQVI7O0VBRTVCLE1BQU0sQ0FBQyxNQUFQLENBQWMsU0FBUyxDQUFDLFFBQXhCLEVBR0UsQ0FBQTs7O0lBQUEsMEJBQUEsRUFBNEIsUUFBQSxDQUFBLENBQUE7QUFFOUIsVUFBQSxFQUFBLEVBQUEsT0FBQSxFQUFBLEVBQUEsRUFBQTtNQUFJLEVBQUEsR0FBTSxPQUFBLENBQVEsU0FBUjtNQUNOLEVBQUEsR0FBTSxJQUFJLENBQUMsV0FBTCxDQUFpQixDQUFqQixFQURWOztNQUlJLCtCQUFBLEdBQWtDLE1BQUEsU0FBQSxDQUFFLElBQUYsQ0FBQTtBQUN0QyxZQUFBLE1BQUEsRUFBQSxVQUFBLEVBQUEsU0FBQSxFQUFBLEtBQUEsRUFBQSxJQUFBOztRQUNNLFVBQUEsR0FBYyxFQUFFLENBQUMsZ0JBQUgsQ0FBb0IsSUFBcEI7UUFDZCxTQUFBLEdBQWMsR0FGcEI7O1FBSU0sZ0NBQUE7VUFDRSxLQUFBLEdBQVE7VUFDUixJQUFBLEdBQVE7QUFDUixpQkFBTSxDQUFFLElBQUEsR0FBTyxNQUFNLENBQUMsT0FBUCxDQUFlLEVBQWYsRUFBbUIsS0FBbkIsQ0FBVCxDQUFBLEtBQXlDLENBQUMsQ0FBaEQsR0FBQTs7WUFFRSxJQUFHLENBQUUsS0FBQSxLQUFTLENBQVgsQ0FBQSxJQUFtQixDQUFFLFNBQVMsQ0FBQyxNQUFWLEdBQW1CLENBQXJCLENBQXRCOztjQUVFLE1BQU0sU0FBQSxHQUFZLE1BQU0sQ0FBQyxLQUFQLENBQWEsQ0FBYixFQUFnQixJQUFBLEdBQU8sQ0FBdkI7Y0FDbEIsU0FBQSxHQUFZLEdBSGQ7YUFBQSxNQUFBO2NBS0UsTUFBTSxDQUFFLE1BQU0sQ0FBQyxLQUFQLENBQWEsS0FBYixFQUFvQixJQUFBLEdBQU8sQ0FBM0IsQ0FBRixDQUFnQyxDQUFDLFFBQWpDLENBQTBDLE9BQTFDLEVBTFI7O1lBTUEsS0FBQSxHQUFRLElBQUEsR0FBTztVQVJqQjtVQVNBLFNBQUEsR0FBWSxNQUFNLENBQUMsS0FBUCxDQUFhLEtBQWI7UUFaZCxDQUpOOztBQWtCTSxlQUFPO01BbkJ5QixFQUp0Qzs7QUEwQkksYUFBTyxPQUFBLEdBQVUsQ0FBRSwrQkFBRjtJQTVCUztFQUE1QixDQUhGLEVBakNBOzs7RUFtRUEsSUFBQyxDQUFBLFVBQUQsR0FBYyxVQUFBLEdBR1osQ0FBQTs7SUFBQSxjQUFBLEVBQWdCLFFBQUEsQ0FBQSxDQUFBO0FBRWxCLFVBQUEsd0JBQUEsRUFBQSx1QkFBQSxFQUFBLG1CQUFBOztNQUNJLHdCQUFBLEdBQTJCLE1BQUEsUUFBQSxDQUFBLENBQUE7QUFDL0IsWUFBQSxLQUFBLEVBQUEsZ0JBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBO1FBQU0sQ0FBQSxDQUFFLGdCQUFGLENBQUEsR0FBd0IsU0FBUyxDQUFDLFFBQVEsQ0FBQyxvQkFBbkIsQ0FBQSxDQUF4QjtRQUNBLE9BQUEsR0FBVTtRQUNWLENBQUEsQ0FBRSwrQkFBRixDQUFBLEdBQXVDLFNBQVMsQ0FBQyxRQUFRLENBQUMsMEJBQW5CLENBQUEsQ0FBdkM7UUFDQSxJQUFBLEdBQU8sSUFBSSxDQUFDLE9BQUwsQ0FBYSxJQUFJLENBQUMsSUFBTCxDQUFVLFNBQVYsRUFBcUIsT0FBckIsRUFBOEIsa0JBQTlCLENBQWI7UUFDUCxLQUFBLEdBQVE7UUFDUixFQUFBLEdBQUssZ0JBQUEsQ0FBQTtRQUNMLHlEQUFBO1VBQ0UsS0FBQTtVQUVBLElBQStDLFFBQUUsT0FBUyxVQUFYLENBQUEsS0FBMEIsQ0FBekU7O1lBQUEsSUFBQSxDQUFLLE9BQUwsRUFBYyxLQUFkLEVBQXVCLEdBQUEsQ0FBSSxJQUFJLGNBQVIsQ0FBdkIsRUFBQTs7UUFIRjtRQUlBLEVBQUEsR0FBSyxnQkFBQSxDQUFBO1FBQ0wsSUFBQSxDQUFLLE9BQUwsRUFBYywwQkFBZCxFQUEwQyxDQUFDLENBQUEsQ0FBQSxDQUFHLENBQUUsTUFBQSxDQUFPLEVBQUEsR0FBSyxFQUFaLENBQUYsQ0FBQSxHQUFxQixTQUF4QixDQUFBLFNBQUEsQ0FBM0M7QUFDQSxlQUFPO01BYmtCLEVBRC9COztNQWlCSSx1QkFBQSxHQUEwQixRQUFBLENBQUEsQ0FBQTtBQUM5QixZQUFBLEtBQUEsRUFBQSxnQkFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUEseUJBQUEsRUFBQTtRQUFNLENBQUEsQ0FBRSxnQkFBRixDQUFBLEdBQXdCLFNBQVMsQ0FBQyxRQUFRLENBQUMsb0JBQW5CLENBQUEsQ0FBeEI7UUFDQSxPQUFBLEdBQVU7UUFDVixDQUFBLENBQUUseUJBQUYsQ0FBQSxHQUFpQyxTQUFTLENBQUMsUUFBUSxDQUFDLHVCQUFuQixDQUFBLENBQWpDO1FBQ0EsSUFBQSxHQUFPLElBQUksQ0FBQyxPQUFMLENBQWEsSUFBSSxDQUFDLElBQUwsQ0FBVSxTQUFWLEVBQXFCLE9BQXJCLEVBQThCLGtCQUE5QixDQUFiO1FBQ1AsS0FBQSxHQUFRO1FBQ1IsRUFBQSxHQUFLLGdCQUFBLENBQUE7UUFDTCxLQUFBLG9DQUFBO1dBQUksQ0FBRSxJQUFGO1VBQ0YsS0FBQTtVQUVBLElBQStDLFFBQUUsT0FBUyxVQUFYLENBQUEsS0FBMEIsQ0FBekU7O1lBQUEsSUFBQSxDQUFLLE9BQUwsRUFBYyxLQUFkLEVBQXVCLEdBQUEsQ0FBSSxJQUFJLGNBQVIsQ0FBdkIsRUFBQTs7UUFIRjtRQUlBLEVBQUEsR0FBSyxnQkFBQSxDQUFBO1FBQ0wsSUFBQSxDQUFLLE9BQUwsRUFBYyx5QkFBZCxFQUF5QyxDQUFDLENBQUEsQ0FBQSxDQUFHLENBQUUsTUFBQSxDQUFPLEVBQUEsR0FBSyxFQUFaLENBQUYsQ0FBQSxHQUFxQixTQUF4QixDQUFBLFNBQUEsQ0FBMUM7QUFDQSxlQUFPO01BYmlCLEVBakI5Qjs7TUFpQ0ksbUJBQUEsR0FBc0IsUUFBQSxDQUFBLENBQUE7QUFDMUIsWUFBQSxLQUFBLEVBQUEsZ0JBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBO1FBQU0sQ0FBQSxDQUFFLGdCQUFGLENBQUEsR0FBd0IsU0FBUyxDQUFDLFFBQVEsQ0FBQyxvQkFBbkIsQ0FBQSxDQUF4QjtRQUNBLE9BQUEsR0FBVTtRQUNWLElBQUEsR0FBTyxJQUFJLENBQUMsT0FBTCxDQUFhLElBQUksQ0FBQyxJQUFMLENBQVUsU0FBVixFQUFxQixPQUFyQixFQUE4QixrQkFBOUIsQ0FBYjtRQUNQLEtBQUEsR0FBUTtRQUNSLEVBQUEsR0FBSyxnQkFBQSxDQUFBO1FBQ0wsS0FBQSwyQ0FBQTtXQUFJLENBQUUsSUFBRjtVQUNGLEtBQUE7VUFFQSxJQUErQyxRQUFFLE9BQVMsVUFBWCxDQUFBLEtBQTBCLENBQXpFOztZQUFBLElBQUEsQ0FBSyxPQUFMLEVBQWMsS0FBZCxFQUF1QixHQUFBLENBQUksSUFBSSxjQUFSLENBQXZCLEVBQUE7O1FBSEY7UUFJQSxFQUFBLEdBQUssZ0JBQUEsQ0FBQTtRQUNMLElBQUEsQ0FBSyxPQUFMLEVBQWMscUJBQWQsRUFBcUMsQ0FBQyxDQUFBLENBQUEsQ0FBRyxDQUFFLE1BQUEsQ0FBTyxFQUFBLEdBQUssRUFBWixDQUFGLENBQUEsR0FBcUIsU0FBeEIsQ0FBQSxTQUFBLENBQXRDO0FBQ0EsZUFBTztNQVphLEVBakMxQjs7TUFnREksdUJBQUEsQ0FBQSxFQWhESjs7OztBQW9ESSxhQUFPO0lBdERPO0VBQWhCLEVBdEVGOzs7RUFrSUEsSUFBRyxNQUFBLEtBQVUsT0FBTyxDQUFDLElBQXJCO0lBQStCLE1BQVMsQ0FBQSxLQUFBLENBQUEsQ0FBQSxHQUFBO0FBQ3hDLFVBQUEsV0FBQTs7O01BRUUsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixLQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixJQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsTUFBTSxDQUFFLElBQUksSUFBSixDQUFTLFdBQVQsQ0FBRixDQUF3QixDQUFDLFVBQXpCLENBQW9DLENBQUUsVUFBRixDQUFwQztBQUNOLGFBQU87SUFOK0IsQ0FBQSxJQUF4Qzs7QUFsSUEiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuJ3VzZSBzdHJpY3QnXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdiZW5jaG1hcmstdW5pY29kZS1jaGFyYWN0ZXItd2lkdGguY29mZmVlJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHdoaXRlXG4gIGdyZWVuXG4gIGJsdWVcbiAgZ29sZFxuICBncmV5XG4gIHJlZFxuICBib2xkXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG4jIHdyaXRlICAgICAgICAgICAgICAgICAgICAgPSAoIHAgKSAtPiBwcm9jZXNzLnN0ZG91dC53cml0ZSBwXG57IG5mYSB9ICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNpbmdsZS1maWxlLW1vZHVsZXMnXG5QQVRIICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuXG5PYmplY3QuYXNzaWduIFNGTU9EVUxFUy51bnN0YWJsZSxcbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICMjIyBOT1RFIEZ1dHVyZSBTaW5nbGUtRmlsZSBNb2R1bGUgIyMjXG4gIHJlcXVpcmVfcmVhZGxpbmVfb3B0aW1pemVkOiAtPlxuXG4gICAgRlMgID0gcmVxdWlyZSAnbm9kZTpmcydcbiAgICBubCAgPSAnXFxuJy5jb2RlUG9pbnRBdCAwXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB3YWxrX2xpbmVzX3dpdGhfcG9zaXRpb25zX2FzeW5jID0gKCBwYXRoICkgLT5cbiAgICAgICMgZnJvbSBtbW9tdGNoZXYvcmVhZGNzdi9yZWFkY3N2LWJ1ZmZlcmVkLW9wdC5qc1xuICAgICAgcmVhZHN0cmVhbSAgPSBGUy5jcmVhdGVSZWFkU3RyZWFtIHBhdGhcbiAgICAgIHJlbWFpbmRlciAgID0gJydcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGZvciBhd2FpdCBidWZmZXIgZnJvbSByZWFkc3RyZWFtXG4gICAgICAgIHN0YXJ0ID0gMFxuICAgICAgICBzdG9wICA9IG51bGxcbiAgICAgICAgd2hpbGUgKCBzdG9wID0gYnVmZmVyLmluZGV4T2YgbmwsIHN0YXJ0ICkgaXNudCAtMVxuICAgICAgICAgICMgZGVidWcgJ86pX19fMScsIHsgc3RhcnQsIHN0b3AsIH0sIHJwciAoICggYnVmZmVyLnNsaWNlIHN0YXJ0LCBzdG9wICkudG9TdHJpbmcgJ3V0Zi04JyApWyAuLiAxMDggXVxuICAgICAgICAgIGlmICggc3RhcnQgPT0gMCApIGFuZCAoIHJlbWFpbmRlci5sZW5ndGggPiAwIClcbiAgICAgICAgICAgICMgZGVidWcgJ86pX19fMicsIHJlbWFpbmRlciArIGJ1ZmZlci5zbGljZSAwLCBzdG9wXG4gICAgICAgICAgICB5aWVsZCByZW1haW5kZXIgKyBidWZmZXIuc2xpY2UgMCwgc3RvcCArIDFcbiAgICAgICAgICAgIHJlbWFpbmRlciA9ICcnXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgeWllbGQgKCBidWZmZXIuc2xpY2Ugc3RhcnQsIHN0b3AgKyAxICkudG9TdHJpbmcgJ3V0Zi04J1xuICAgICAgICAgIHN0YXJ0ID0gc3RvcCArIDFcbiAgICAgICAgcmVtYWluZGVyID0gYnVmZmVyLnNsaWNlIHN0YXJ0XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgcmV0dXJuIGV4cG9ydHMgPSB7IHdhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnNfYXN5bmMsIH1cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AYmVuY2htYXJrcyA9IGJlbmNobWFya3MgPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcnVuX2JlbmNobWFya3M6IC0+XG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGRlbW9fZmFzdF9yZWFkbGluZV9hc3luYyA9IC0+XG4gICAgICB7IGhydGltZV9hc19iaWdpbnQsIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9iZW5jaG1hcmtpbmcoKVxuICAgICAgcmVscGF0aCA9ICcuLi8uLi8uLi8uLi8uLi8zcmQtcGFydHktcmVwb3MvbW1vbXRjaGV2LXJlYWRjc3YtZm9yLXJlYWQtZmlsZS1iZW5jaG1hcmsnXG4gICAgICB7IHdhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnNfYXN5bmMsIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9yZWFkbGluZV9vcHRpbWl6ZWQoKVxuICAgICAgcGF0aCA9IFBBVEgucmVzb2x2ZSBQQVRILmpvaW4gX19kaXJuYW1lLCByZWxwYXRoLCAnYWxsQ291bnRyaWVzLnR4dCdcbiAgICAgIGNvdW50ID0gMFxuICAgICAgdDAgPSBocnRpbWVfYXNfYmlnaW50KClcbiAgICAgIGZvciBhd2FpdCBsaW5lIGZyb20gd2Fsa19saW5lc193aXRoX3Bvc2l0aW9uc19hc3luYyBwYXRoXG4gICAgICAgIGNvdW50KytcbiAgICAgICAgIyByZXR1cm4gbnVsbCBpZiBjb3VudCA+IDEwMFxuICAgICAgICBlY2hvICfOqV9fXzMnLCBjb3VudCwgKCBycHIgbGluZVsgLi4gMTA4IF0gKSBpZiAoIGNvdW50ICUlIDFfMDAwXzAwMCApIGlzIDBcbiAgICAgIHQxID0gaHJ0aW1lX2FzX2JpZ2ludCgpXG4gICAgICBlY2hvICfOqV9fXzQnLCAnZGVtb19mYXN0X3JlYWRsaW5lX2FzeW5jJywgZlwiI3soIE51bWJlciB0MSAtIHQwICkgLyAxXzAwMF8wMDB9Oj4yMCwuOWY7XCJcbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGRlbW9fZmFzdF9yZWFkbGluZV9zeW5jID0gLT5cbiAgICAgIHsgaHJ0aW1lX2FzX2JpZ2ludCwgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2JlbmNobWFya2luZygpXG4gICAgICByZWxwYXRoID0gJy4uLy4uLy4uLy4uLy4uLzNyZC1wYXJ0eS1yZXBvcy9tbW9tdGNoZXYtcmVhZGNzdi1mb3ItcmVhZC1maWxlLWJlbmNobWFyaydcbiAgICAgIHsgd2Fsa19saW5lc193aXRoX3Bvc2l0aW9ucywgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2Zhc3RfbGluZXJlYWRlcigpXG4gICAgICBwYXRoID0gUEFUSC5yZXNvbHZlIFBBVEguam9pbiBfX2Rpcm5hbWUsIHJlbHBhdGgsICdhbGxDb3VudHJpZXMudHh0J1xuICAgICAgY291bnQgPSAwXG4gICAgICB0MCA9IGhydGltZV9hc19iaWdpbnQoKVxuICAgICAgZm9yIHsgbGluZSwgfSBmcm9tIHdhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnMgcGF0aFxuICAgICAgICBjb3VudCsrXG4gICAgICAgICMgcmV0dXJuIG51bGwgaWYgY291bnQgPiAxMDBcbiAgICAgICAgZWNobyAnzqlfX18zJywgY291bnQsICggcnByIGxpbmVbIC4uIDEwOCBdICkgaWYgKCBjb3VudCAlJSAxXzAwMF8wMDAgKSBpcyAwXG4gICAgICB0MSA9IGhydGltZV9hc19iaWdpbnQoKVxuICAgICAgZWNobyAnzqlfX180JywgJ2RlbW9fZmFzdF9yZWFkbGluZV9zeW5jJywgZlwiI3soIE51bWJlciB0MSAtIHQwICkgLyAxXzAwMF8wMDB9Oj4yMCwuOWY7XCJcbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGRlbW9fZ3V5ZnNfcmVhZGxpbmUgPSAtPlxuICAgICAgeyBocnRpbWVfYXNfYmlnaW50LCB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfYmVuY2htYXJraW5nKClcbiAgICAgIHJlbHBhdGggPSAnLi4vLi4vLi4vLi4vLi4vM3JkLXBhcnR5LXJlcG9zL21tb210Y2hldi1yZWFkY3N2LWZvci1yZWFkLWZpbGUtYmVuY2htYXJrJ1xuICAgICAgcGF0aCA9IFBBVEgucmVzb2x2ZSBQQVRILmpvaW4gX19kaXJuYW1lLCByZWxwYXRoLCAnYWxsQ291bnRyaWVzLnR4dCdcbiAgICAgIGNvdW50ID0gMFxuICAgICAgdDAgPSBocnRpbWVfYXNfYmlnaW50KClcbiAgICAgIGZvciB7IGxpbmUsIH0gZnJvbSBHVVkuZnMud2Fsa19saW5lc193aXRoX3Bvc2l0aW9ucyBwYXRoXG4gICAgICAgIGNvdW50KytcbiAgICAgICAgIyByZXR1cm4gbnVsbCBpZiBjb3VudCA+IDEwMFxuICAgICAgICBlY2hvICfOqV9fXzUnLCBjb3VudCwgKCBycHIgbGluZVsgLi4gMTA4IF0gKSBpZiAoIGNvdW50ICUlIDFfMDAwXzAwMCApIGlzIDBcbiAgICAgIHQxID0gaHJ0aW1lX2FzX2JpZ2ludCgpXG4gICAgICBlY2hvICfOqV9fXzYnLCAnZGVtb19ndXlmc19yZWFkbGluZScsIGZcIiN7KCBOdW1iZXIgdDEgLSB0MCApIC8gMV8wMDBfMDAwfTo+MjAsLjlmO1wiXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBkZW1vX2Zhc3RfcmVhZGxpbmVfc3luYygpXG4gICAgIyBhd2FpdCBkZW1vX2Zhc3RfcmVhZGxpbmVfYXN5bmMoKVxuICAgICMgZGVtb19ndXlmc19yZWFkbGluZSgpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICAjIGRlbW9faW5maW5pdGVfcHJveHkoKVxuICAjIGRlbW9fY29sb3JmdWxfcHJveHkoKVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBhd2FpdCAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkuYXN5bmNfdGVzdCB7IGJlbmNobWFya3MsIH1cbiAgcmV0dXJuIG51bGxcblxuIl19
//# sourceURL=../src/benchmark-read-huge-csv.coffee