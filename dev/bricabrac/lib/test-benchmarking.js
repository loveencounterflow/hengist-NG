(async function() {
  'use strict';
  var C, GTNG, GUY, SFMODULES, Test, alert, debug, echo, f, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper, white;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('bricabrac-benchmarking'));

  ({rpr, inspect, echo, white, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  ({f} = require('../../../apps/effstring'));

  SFMODULES = require('../../../apps/bricabrac-sfmodules');

  ({
    ansi_colors_and_effects: C
  } = SFMODULES.require_ansi_colors_and_effects());

  //###########################################################################################################

  //===========================================================================================================
  this.tasks = {
    //---------------------------------------------------------------------------------------------------------
    basics: async function() {
      var Benchmarker, bigint_from_hrtime, hrtime_as_bigint, strip_ansi, type_of, with_capture_output;
      ({bigint_from_hrtime, hrtime_as_bigint, Benchmarker} = SFMODULES.unstable.require_benchmarking());
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({with_capture_output} = SFMODULES.unstable.require_capture_output());
      ({strip_ansi} = SFMODULES.require_strip_ansi());
      (() => {        //.......................................................................................................
        var abc, bm, handler, inner_result, output;
        bm = new Benchmarker();
        output = '';
        // output_handler  = ( text ) -> output += text
        handler = function(result) {
          return debug('Ωbbbt___1', "result:", result);
        };
        inner_result = null;
        inner_result = bm.timeit(abc = function() {
          debug("Ωbbbt___2 just a test");
          return 9876;
        });
        inner_result = bm.timeit('name', function() {
          debug("Ωbbbt___3 just a test");
          return 9876;
        });
        inner_result = bm.timeit('name', 'task', function() {
          debug("Ωbbbt___4 just a test");
          return 9876;
        });
        inner_result = bm.timeit('name', 'task', {handler}, function() {
          debug("Ωbbbt___5 just a test");
          return 9876;
        });
        return inner_result = bm.timeit({'name': 'name', 'task': 'task'}, function() {
          debug("Ωbbbt___6 just a test");
          return 9876;
        });
      })();
      (() => {        //.......................................................................................................
        var bm, inner_result, outer_result, output, output_handler, Ωbbbt__10, Ωbbbt__11, Ωbbbt__12, Ωbbbt___9;
        bm = new Benchmarker();
        output = '';
        output_handler = function(text) {
          return output += text;
        };
        inner_result = null;
        outer_result = with_capture_output(output_handler, () => {
          var abc;
          return inner_result = bm.timeit(abc = function() {
            debug("Ωbbbt___7 just a test");
            return 9876;
          });
        });
        output = strip_ansi(output);
        echo('Ωbbbt___8', reverse(white(output)));
        this.eq((Ωbbbt___9 = function() {
          return /just a test/v.test(output);
        }), true);
        this.eq((Ωbbbt__10 = function() {
          return /\babc:\s+[0-9.]+/v.test(output);
        }), true);
        this.eq((Ωbbbt__11 = function() {
          return inner_result;
        }), 9876);
        this.eq((Ωbbbt__12 = function() {
          return outer_result;
        }), inner_result);
        return null;
      })();
      (() => {        //.......................................................................................................
        var blahtask, bm, handler, inner_result, mytask, othertask, outer_result, output, output_handler, timings, Ωbbbt__14, Ωbbbt__15, Ωbbbt__16, Ωbbbt__17;
        bm = new Benchmarker();
        timings = {};
        handler = function(timeit_nfo) {
          return Object.assign(timings, timeit_nfo);
        };
        // timings[ "#{timeit_nfo.name}/#{timeit_nfo.task}" ] = timeit_nfo.dt
        output = '';
        output_handler = function(text) {
          return output += text;
        };
        inner_result = null;
        outer_result = with_capture_output(output_handler, () => {
          var mytask;
          return inner_result = bm.timeit({
            handler,
            brand: 'mybrand'
          }, mytask = function() {
            debug("Ωbbbt__13 just a test");
            return 9876;
          });
        });
        output = strip_ansi(output);
        this.eq((Ωbbbt__14 = function() {
          return /just a test/v.test(output);
        }), true);
        this.eq((Ωbbbt__15 = function() {
          return /\babc:\s+[0-9.]+/v.test(output);
        }), false);
        this.eq((Ωbbbt__16 = function() {
          return inner_result;
        }), 9876);
        this.eq((Ωbbbt__17 = function() {
          return outer_result;
        }), inner_result);
        // @eq ( Ωbbbt__18 = -> type_of timings[ 'mybrand/mytask' ]       ), 'float'
        // @eq ( Ωbbbt__19 = -> type_of timings.brands.mytask.mybrand        ), 'float'
        debug('Ωbbbt__20', reverse(white(output)));
        bm.timeit({
          handler,
          brand: 'mybrand'
        }, mytask = function() {
          debug("Ωbbbt__21 just a test");
          return 9876;
        });
        bm.timeit({
          handler,
          brand: 'mybrand'
        }, othertask = function() {
          debug("Ωbbbt__22 just a test");
          return 9876;
        });
        bm.timeit({
          handler,
          brand: 'otherbrand'
        }, mytask = function() {
          debug("Ωbbbt__23 just a test");
          return 9876;
        });
        bm.timeit({
          handler,
          brand: 'otherbrand'
        }, blahtask = function() {
          debug("Ωbbbt__24 just a test");
          return 9876;
        });
        help('Ωbbbt__25', timings);
        help('Ωbbbt__26', "brands:  ", timings.brands);
        // help 'Ωbbbt__27', "tasks:   ", timings.tasks
        help('Ωbbbt__28', bm.get_averages_by_brands());
        help('Ωbbbt__29', bm.get_averages_by_tasks());
        return null;
      })();
      await (async() => {        //.......................................................................................................
        var bm, my_async_task;
        bm = new Benchmarker();
        my_async_task = async function() {
          var R, i, t;
          R = [];
          for (t = i = 1; i <= 1000000; t = ++i) {
            R.push(t ** 2);
          }
          // return R.length
          return (await R.length);
        };
        urge('Ωbbbt__30', my_async_task);
        // urge 'Ωbbbt__31', bm.timeit m_async_task
        urge('Ωbbbt__32', bm.format_dt((await bm.timeit(my_async_task))));
        help('Ωbbbt__33', bm.get_averages_by_brands());
        help('Ωbbbt__34', bm.get_averages_by_tasks());
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    fetch_example_com: function() {
      var Benchmarker, bigint_from_hrtime, hrtime_as_bigint, strip_ansi, type_of, with_capture_output;
      ({bigint_from_hrtime, hrtime_as_bigint, Benchmarker} = SFMODULES.unstable.require_benchmarking());
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({with_capture_output} = SFMODULES.unstable.require_capture_output());
      ({strip_ansi} = SFMODULES.require_strip_ansi());
      (async() => {        //.......................................................................................................
        var bm, body, brand, fetch_website, read_body, rsp;
        bm = new Benchmarker();
        brand = 'node_fetch';
        rsp = (await bm.timeit({brand}, fetch_website = async function() {
          return (await fetch('http://example.com'));
        }));
        body = (await bm.timeit({brand}, read_body = async function() {
          return (await rsp.text());
        }));
        info('Ωbbbt__35', bm.get_averages_by_brands());
        info('Ωbbbt__36', bm.get_averages_by_tasks());
        return null;
      })();
      //.......................................................................................................
      return null;
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
        report_checks: true
      };
      // ( new Test guytest_cfg ).async_test @tasks
      return (new Test(guytest_cfg)).test({
        fetch_example_com: this.tasks.fetch_example_com
      });
    })();
  }

  // nodexh ~/hengist-NG/dev/snippets/lib/benchmark-unicode-character-width.js
// nodexh ~/hengist-NG/dev/snippets/lib/demo-build-unicode-ranges.js
// nodexh ~/hengist-NG/dev/snippets/lib/benchmark-read-huge-csv.js
// nodexh ~/hengist-NG/dev/snippets/lib/demo-binary-lexicographic-sortkey.js
// nodexh ~/hengist-NG/dev/snippets/lib/demo-varint-leb128.js
// nodexh ~/hengist-NG/dev/hollerith/lib/benchmarks.js

  // debug 'Ωbbbt__37', require '../../snippets/lib/benchmark-unicode-character-width.js'
// debug 'Ωbbbt__38', require '../../snippets/lib/demo-build-unicode-ranges.js'
// debug 'Ωbbbt__39', require '../../snippets/lib/benchmark-read-huge-csv.js'
// debug 'Ωbbbt__40', require '../../snippets/lib/demo-binary-lexicographic-sortkey.js'
// debug 'Ωbbbt__41', require '../../snippets/lib/demo-varint-leb128.js'
// debug 'Ωbbbt__42', ( require '../../hollerith/lib/benchmarks.js' ).run()

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmVuY2htYXJraW5nLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBOztFQUVBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0Isd0JBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsT0FKRixFQUtFLEdBTEYsQ0FBQSxHQUs0QixHQUFHLENBQUMsR0FMaEMsRUFaQTs7O0VBbUJBLElBQUEsR0FBNEIsT0FBQSxDQUFRLDJCQUFSOztFQUM1QixDQUFBLENBQUUsSUFBRixDQUFBLEdBQTRCLElBQTVCOztFQUNBLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLHlCQUFSLENBQTVCOztFQUNBLFNBQUEsR0FBNEIsT0FBQSxDQUFRLG1DQUFSOztFQUM1QixDQUFBO0lBQUUsdUJBQUEsRUFBeUI7RUFBM0IsQ0FBQSxHQUFrQyxTQUFTLENBQUMsK0JBQVYsQ0FBQSxDQUFsQyxFQXZCQTs7Ozs7RUE2QkEsSUFBQyxDQUFBLEtBQUQsR0FHRSxDQUFBOztJQUFBLE1BQUEsRUFBUSxNQUFBLFFBQUEsQ0FBQSxDQUFBO0FBQ1YsVUFBQSxXQUFBLEVBQUEsa0JBQUEsRUFBQSxnQkFBQSxFQUFBLFVBQUEsRUFBQSxPQUFBLEVBQUE7TUFBSSxDQUFBLENBQUUsa0JBQUYsRUFDRSxnQkFERixFQUVFLFdBRkYsQ0FBQSxHQUU4QixTQUFTLENBQUMsUUFBUSxDQUFDLG9CQUFuQixDQUFBLENBRjlCO01BR0EsQ0FBQSxDQUFFLE9BQUYsQ0FBQSxHQUE4QixTQUFTLENBQUMsUUFBUSxDQUFDLGVBQW5CLENBQUEsQ0FBOUI7TUFDQSxDQUFBLENBQUUsbUJBQUYsQ0FBQSxHQUE4QixTQUFTLENBQUMsUUFBUSxDQUFDLHNCQUFuQixDQUFBLENBQTlCO01BQ0EsQ0FBQSxDQUFFLFVBQUYsQ0FBQSxHQUE4QixTQUFTLENBQUMsa0JBQVYsQ0FBQSxDQUE5QjtNQUVHLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsR0FBQSxFQUFBLEVBQUEsRUFBQSxPQUFBLEVBQUEsWUFBQSxFQUFBO1FBQU0sRUFBQSxHQUFnQixJQUFJLFdBQUosQ0FBQTtRQUNoQixNQUFBLEdBQWdCLEdBRHRCOztRQUdNLE9BQUEsR0FBZ0IsUUFBQSxDQUFFLE1BQUYsQ0FBQTtpQkFBYyxLQUFBLENBQU0sV0FBTixFQUFtQixTQUFuQixFQUE4QixNQUE5QjtRQUFkO1FBQ2hCLFlBQUEsR0FBZ0I7UUFDaEIsWUFBQSxHQUFnQixFQUFFLENBQUMsTUFBSCxDQUFtQyxHQUFBLEdBQU0sUUFBQSxDQUFBLENBQUE7VUFBRyxLQUFBLENBQU0sdUJBQU47QUFBK0IsaUJBQU87UUFBekMsQ0FBekM7UUFDaEIsWUFBQSxHQUFnQixFQUFFLENBQUMsTUFBSCxDQUFVLE1BQVYsRUFBeUMsUUFBQSxDQUFBLENBQUE7VUFBRyxLQUFBLENBQU0sdUJBQU47QUFBK0IsaUJBQU87UUFBekMsQ0FBekM7UUFDaEIsWUFBQSxHQUFnQixFQUFFLENBQUMsTUFBSCxDQUFVLE1BQVYsRUFBa0IsTUFBbEIsRUFBd0MsUUFBQSxDQUFBLENBQUE7VUFBRyxLQUFBLENBQU0sdUJBQU47QUFBK0IsaUJBQU87UUFBekMsQ0FBeEM7UUFDaEIsWUFBQSxHQUFnQixFQUFFLENBQUMsTUFBSCxDQUFVLE1BQVYsRUFBa0IsTUFBbEIsRUFBMEIsQ0FBRSxPQUFGLENBQTFCLEVBQXdDLFFBQUEsQ0FBQSxDQUFBO1VBQUcsS0FBQSxDQUFNLHVCQUFOO0FBQStCLGlCQUFPO1FBQXpDLENBQXhDO2VBQ2hCLFlBQUEsR0FBZ0IsRUFBRSxDQUFDLE1BQUgsQ0FBVSxDQUFFLFFBQUEsTUFBRixFQUFVLFFBQUEsTUFBVixDQUFWLEVBQXdDLFFBQUEsQ0FBQSxDQUFBO1VBQUcsS0FBQSxDQUFNLHVCQUFOO0FBQStCLGlCQUFPO1FBQXpDLENBQXhDO01BVmYsQ0FBQTtNQVlBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsRUFBQSxFQUFBLFlBQUEsRUFBQSxZQUFBLEVBQUEsTUFBQSxFQUFBLGNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQTtRQUFNLEVBQUEsR0FBa0IsSUFBSSxXQUFKLENBQUE7UUFDbEIsTUFBQSxHQUFrQjtRQUNsQixjQUFBLEdBQWtCLFFBQUEsQ0FBRSxJQUFGLENBQUE7aUJBQVksTUFBQSxJQUFVO1FBQXRCO1FBQ2xCLFlBQUEsR0FBa0I7UUFDbEIsWUFBQSxHQUFrQixtQkFBQSxDQUFvQixjQUFwQixFQUFvQyxDQUFBLENBQUEsR0FBQTtBQUM1RCxjQUFBO2lCQUFRLFlBQUEsR0FBZSxFQUFFLENBQUMsTUFBSCxDQUFVLEdBQUEsR0FBTSxRQUFBLENBQUEsQ0FBQTtZQUFHLEtBQUEsQ0FBTSx1QkFBTjtBQUErQixtQkFBTztVQUF6QyxDQUFoQjtRQURxQyxDQUFwQztRQUVsQixNQUFBLEdBQWtCLFVBQUEsQ0FBVyxNQUFYO1FBQ2xCLElBQUEsQ0FBSyxXQUFMLEVBQWtCLE9BQUEsQ0FBUSxLQUFBLENBQU0sTUFBTixDQUFSLENBQWxCO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxjQUFjLENBQUMsSUFBZixDQUF5QixNQUF6QjtRQUFILENBQWQsQ0FBSixFQUF5RCxJQUF6RDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsbUJBQW1CLENBQUMsSUFBcEIsQ0FBeUIsTUFBekI7UUFBSCxDQUFkLENBQUosRUFBeUQsSUFBekQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHO1FBQUgsQ0FBZCxDQUFKLEVBQXlELElBQXpEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRztRQUFILENBQWQsQ0FBSixFQUF5RCxZQUF6RDtBQUNBLGVBQU87TUFiTixDQUFBO01BZUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxRQUFBLEVBQUEsRUFBQSxFQUFBLE9BQUEsRUFBQSxZQUFBLEVBQUEsTUFBQSxFQUFBLFNBQUEsRUFBQSxZQUFBLEVBQUEsTUFBQSxFQUFBLGNBQUEsRUFBQSxPQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUE7UUFBTSxFQUFBLEdBQWtCLElBQUksV0FBSixDQUFBO1FBQ2xCLE9BQUEsR0FBa0IsQ0FBQTtRQUNsQixPQUFBLEdBQWtCLFFBQUEsQ0FBRSxVQUFGLENBQUE7aUJBQ2hCLE1BQU0sQ0FBQyxNQUFQLENBQWMsT0FBZCxFQUF1QixVQUF2QjtRQURnQixFQUZ4Qjs7UUFLTSxNQUFBLEdBQVM7UUFDVCxjQUFBLEdBQWtCLFFBQUEsQ0FBRSxJQUFGLENBQUE7aUJBQVksTUFBQSxJQUFVO1FBQXRCO1FBQ2xCLFlBQUEsR0FBa0I7UUFDbEIsWUFBQSxHQUFrQixtQkFBQSxDQUFvQixjQUFwQixFQUFvQyxDQUFBLENBQUEsR0FBQTtBQUM1RCxjQUFBO2lCQUFRLFlBQUEsR0FBZSxFQUFFLENBQUMsTUFBSCxDQUFVO1lBQUUsT0FBRjtZQUFXLEtBQUEsRUFBTztVQUFsQixDQUFWLEVBQTBDLE1BQUEsR0FBUyxRQUFBLENBQUEsQ0FBQTtZQUFHLEtBQUEsQ0FBTSx1QkFBTjtBQUErQixtQkFBTztVQUF6QyxDQUFuRDtRQURxQyxDQUFwQztRQUVsQixNQUFBLEdBQWtCLFVBQUEsQ0FBVyxNQUFYO1FBQ2xCLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsY0FBYyxDQUFDLElBQWYsQ0FBeUIsTUFBekI7UUFBSCxDQUFkLENBQUosRUFBeUQsSUFBekQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLG1CQUFtQixDQUFDLElBQXBCLENBQXlCLE1BQXpCO1FBQUgsQ0FBZCxDQUFKLEVBQXlELEtBQXpEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRztRQUFILENBQWQsQ0FBSixFQUF5RCxJQUF6RDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUc7UUFBSCxDQUFkLENBQUosRUFBeUQsWUFBekQsRUFkTjs7O1FBaUJNLEtBQUEsQ0FBTSxXQUFOLEVBQW1CLE9BQUEsQ0FBUSxLQUFBLENBQU0sTUFBTixDQUFSLENBQW5CO1FBQ0EsRUFBRSxDQUFDLE1BQUgsQ0FBVTtVQUFFLE9BQUY7VUFBVyxLQUFBLEVBQU87UUFBbEIsQ0FBVixFQUE2QyxNQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7VUFBRyxLQUFBLENBQU0sdUJBQU47QUFBK0IsaUJBQU87UUFBekMsQ0FBMUQ7UUFDQSxFQUFFLENBQUMsTUFBSCxDQUFVO1VBQUUsT0FBRjtVQUFXLEtBQUEsRUFBTztRQUFsQixDQUFWLEVBQTZDLFNBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtVQUFHLEtBQUEsQ0FBTSx1QkFBTjtBQUErQixpQkFBTztRQUF6QyxDQUExRDtRQUNBLEVBQUUsQ0FBQyxNQUFILENBQVU7VUFBRSxPQUFGO1VBQVcsS0FBQSxFQUFPO1FBQWxCLENBQVYsRUFBNkMsTUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO1VBQUcsS0FBQSxDQUFNLHVCQUFOO0FBQStCLGlCQUFPO1FBQXpDLENBQTFEO1FBQ0EsRUFBRSxDQUFDLE1BQUgsQ0FBVTtVQUFFLE9BQUY7VUFBVyxLQUFBLEVBQU87UUFBbEIsQ0FBVixFQUE2QyxRQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7VUFBRyxLQUFBLENBQU0sdUJBQU47QUFBK0IsaUJBQU87UUFBekMsQ0FBMUQ7UUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixPQUFsQjtRQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLFdBQWxCLEVBQStCLE9BQU8sQ0FBQyxNQUF2QyxFQXZCTjs7UUF5Qk0sSUFBQSxDQUFLLFdBQUwsRUFBa0IsRUFBRSxDQUFDLHNCQUFILENBQUEsQ0FBbEI7UUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixFQUFFLENBQUMscUJBQUgsQ0FBQSxDQUFsQjtBQUNBLGVBQU87TUE1Qk4sQ0FBQTtNQThCSCxNQUFTLENBQUEsS0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ2IsWUFBQSxFQUFBLEVBQUE7UUFBTSxFQUFBLEdBQUssSUFBSSxXQUFKLENBQUE7UUFDTCxhQUFBLEdBQWdCLE1BQUEsUUFBQSxDQUFBLENBQUE7QUFDdEIsY0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBO1VBQVEsQ0FBQSxHQUFJO1VBQ0osS0FBUyxnQ0FBVDtZQUNFLENBQUMsQ0FBQyxJQUFGLENBQU8sQ0FBQSxJQUFLLENBQVo7VUFERixDQURSOztBQUlRLGlCQUFPLENBQUEsTUFBTSxDQUFDLENBQUMsTUFBUjtRQUxPO1FBTWhCLElBQUEsQ0FBSyxXQUFMLEVBQWtCLGFBQWxCLEVBUE47O1FBU00sSUFBQSxDQUFLLFdBQUwsRUFBa0IsRUFBRSxDQUFDLFNBQUgsQ0FBYSxDQUFBLE1BQU0sRUFBRSxDQUFDLE1BQUgsQ0FBVSxhQUFWLENBQU4sQ0FBYixDQUFsQjtRQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLEVBQUUsQ0FBQyxzQkFBSCxDQUFBLENBQWxCO1FBQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0IsRUFBRSxDQUFDLHFCQUFILENBQUEsQ0FBbEI7QUFDQSxlQUFPO01BYkEsQ0FBQSxJQWhFYjs7QUErRUksYUFBTztJQWhGRCxDQUFSOztJQW1GQSxpQkFBQSxFQUFtQixRQUFBLENBQUEsQ0FBQTtBQUNyQixVQUFBLFdBQUEsRUFBQSxrQkFBQSxFQUFBLGdCQUFBLEVBQUEsVUFBQSxFQUFBLE9BQUEsRUFBQTtNQUFJLENBQUEsQ0FBRSxrQkFBRixFQUNFLGdCQURGLEVBRUUsV0FGRixDQUFBLEdBRThCLFNBQVMsQ0FBQyxRQUFRLENBQUMsb0JBQW5CLENBQUEsQ0FGOUI7TUFHQSxDQUFBLENBQUUsT0FBRixDQUFBLEdBQThCLFNBQVMsQ0FBQyxRQUFRLENBQUMsZUFBbkIsQ0FBQSxDQUE5QjtNQUNBLENBQUEsQ0FBRSxtQkFBRixDQUFBLEdBQThCLFNBQVMsQ0FBQyxRQUFRLENBQUMsc0JBQW5CLENBQUEsQ0FBOUI7TUFDQSxDQUFBLENBQUUsVUFBRixDQUFBLEdBQThCLFNBQVMsQ0FBQyxrQkFBVixDQUFBLENBQTlCO01BRUcsQ0FBQSxLQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDUCxZQUFBLEVBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLGFBQUEsRUFBQSxTQUFBLEVBQUE7UUFBTSxFQUFBLEdBQVUsSUFBSSxXQUFKLENBQUE7UUFDVixLQUFBLEdBQVU7UUFDVixHQUFBLEdBQVUsQ0FBQSxNQUFNLEVBQUUsQ0FBQyxNQUFILENBQVUsQ0FBRSxLQUFGLENBQVYsRUFBc0IsYUFBQSxHQUFpQixNQUFBLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUEsTUFBTSxLQUFBLENBQU0sb0JBQU4sQ0FBTjtRQUFILENBQXZDLENBQU47UUFDVixJQUFBLEdBQVUsQ0FBQSxNQUFNLEVBQUUsQ0FBQyxNQUFILENBQVUsQ0FBRSxLQUFGLENBQVYsRUFBc0IsU0FBQSxHQUFpQixNQUFBLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUEsTUFBTSxHQUFHLENBQUMsSUFBSixDQUFBLENBQU47UUFBSCxDQUF2QyxDQUFOO1FBQ1YsSUFBQSxDQUFLLFdBQUwsRUFBa0IsRUFBRSxDQUFDLHNCQUFILENBQUEsQ0FBbEI7UUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixFQUFFLENBQUMscUJBQUgsQ0FBQSxDQUFsQjtBQUNBLGVBQU87TUFQTixDQUFBLElBUFA7O0FBZ0JJLGFBQU87SUFqQlU7RUFuRm5CLEVBaENGOzs7RUF5SUEsSUFBRyxNQUFBLEtBQVUsT0FBTyxDQUFDLElBQXJCO0lBQStCLE1BQVMsQ0FBQSxDQUFBLENBQUEsR0FBQTtBQUN4QyxVQUFBO01BQUUsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixLQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixJQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdELEVBRGhCOzthQUdFLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEI7UUFBRSxpQkFBQSxFQUFtQixJQUFDLENBQUEsS0FBSyxDQUFDO01BQTVCLENBQTlCO0lBSnNDLENBQUEsSUFBeEM7OztFQXpJQTs7Ozs7Ozs7Ozs7OztBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG4ndXNlIHN0cmljdCdcblxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdicmljYWJyYWMtYmVuY2htYXJraW5nJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHdoaXRlXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG4jIFdHVVkgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL3dlYmd1eSdcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG57IGFuc2lfY29sb3JzX2FuZF9lZmZlY3RzOiBDLCB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfYW5zaV9jb2xvcnNfYW5kX2VmZmVjdHMoKVxuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuI1xuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AdGFza3MgPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYmFzaWNzOiAtPlxuICAgIHsgYmlnaW50X2Zyb21faHJ0aW1lLFxuICAgICAgaHJ0aW1lX2FzX2JpZ2ludCxcbiAgICAgIEJlbmNobWFya2VyLCAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9iZW5jaG1hcmtpbmcoKVxuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgd2l0aF9jYXB0dXJlX291dHB1dCwgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2NhcHR1cmVfb3V0cHV0KClcbiAgICB7IHN0cmlwX2Fuc2ksICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9zdHJpcF9hbnNpKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBibSAgICAgICAgICAgID0gbmV3IEJlbmNobWFya2VyKClcbiAgICAgIG91dHB1dCAgICAgICAgPSAnJ1xuICAgICAgIyBvdXRwdXRfaGFuZGxlciAgPSAoIHRleHQgKSAtPiBvdXRwdXQgKz0gdGV4dFxuICAgICAgaGFuZGxlciAgICAgICA9ICggcmVzdWx0ICkgLT4gZGVidWcgJ86pYmJidF9fXzEnLCBcInJlc3VsdDpcIiwgcmVzdWx0XG4gICAgICBpbm5lcl9yZXN1bHQgID0gbnVsbFxuICAgICAgaW5uZXJfcmVzdWx0ICA9IGJtLnRpbWVpdCAgICAgICAgICAgICAgICAgICAgICAgICAgYWJjID0gLT4gZGVidWcgXCLOqWJiYnRfX18yIGp1c3QgYSB0ZXN0XCI7IHJldHVybiA5ODc2XG4gICAgICBpbm5lcl9yZXN1bHQgID0gYm0udGltZWl0ICduYW1lJywgICAgICAgICAgICAgICAgICAgICAgICAtPiBkZWJ1ZyBcIs6pYmJidF9fXzMganVzdCBhIHRlc3RcIjsgcmV0dXJuIDk4NzZcbiAgICAgIGlubmVyX3Jlc3VsdCAgPSBibS50aW1laXQgJ25hbWUnLCAndGFzaycsICAgICAgICAgICAgICAgLT4gZGVidWcgXCLOqWJiYnRfX180IGp1c3QgYSB0ZXN0XCI7IHJldHVybiA5ODc2XG4gICAgICBpbm5lcl9yZXN1bHQgID0gYm0udGltZWl0ICduYW1lJywgJ3Rhc2snLCB7IGhhbmRsZXIsIH0sIC0+IGRlYnVnIFwizqliYmJ0X19fNSBqdXN0IGEgdGVzdFwiOyByZXR1cm4gOTg3NlxuICAgICAgaW5uZXJfcmVzdWx0ICA9IGJtLnRpbWVpdCB7ICduYW1lJywgJ3Rhc2snLCB9LCAgICAgICAgICAtPiBkZWJ1ZyBcIs6pYmJidF9fXzYganVzdCBhIHRlc3RcIjsgcmV0dXJuIDk4NzZcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBibSAgICAgICAgICAgICAgPSBuZXcgQmVuY2htYXJrZXIoKVxuICAgICAgb3V0cHV0ICAgICAgICAgID0gJydcbiAgICAgIG91dHB1dF9oYW5kbGVyICA9ICggdGV4dCApIC0+IG91dHB1dCArPSB0ZXh0XG4gICAgICBpbm5lcl9yZXN1bHQgICAgPSBudWxsXG4gICAgICBvdXRlcl9yZXN1bHQgICAgPSB3aXRoX2NhcHR1cmVfb3V0cHV0IG91dHB1dF9oYW5kbGVyLCA9PlxuICAgICAgICBpbm5lcl9yZXN1bHQgPSBibS50aW1laXQgYWJjID0gLT4gZGVidWcgXCLOqWJiYnRfX183IGp1c3QgYSB0ZXN0XCI7IHJldHVybiA5ODc2XG4gICAgICBvdXRwdXQgICAgICAgICAgPSBzdHJpcF9hbnNpIG91dHB1dFxuICAgICAgZWNobyAnzqliYmJ0X19fOCcsIHJldmVyc2Ugd2hpdGUgb3V0cHV0XG4gICAgICBAZXEgKCDOqWJiYnRfX185ID0gLT4gL2p1c3QgYSB0ZXN0L3YudGVzdCAgICAgIG91dHB1dCAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmJ0X18xMCA9IC0+IC9cXGJhYmM6XFxzK1swLTkuXSsvdi50ZXN0IG91dHB1dCAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmJ0X18xMSA9IC0+IGlubmVyX3Jlc3VsdCAgICAgICAgICAgICAgICAgICAgICksIDk4NzZcbiAgICAgIEBlcSAoIM6pYmJidF9fMTIgPSAtPiBvdXRlcl9yZXN1bHQgICAgICAgICAgICAgICAgICAgICApLCBpbm5lcl9yZXN1bHRcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgYm0gICAgICAgICAgICAgID0gbmV3IEJlbmNobWFya2VyKClcbiAgICAgIHRpbWluZ3MgICAgICAgICA9IHt9XG4gICAgICBoYW5kbGVyICAgICAgICAgPSAoIHRpbWVpdF9uZm8gKSAtPlxuICAgICAgICBPYmplY3QuYXNzaWduIHRpbWluZ3MsIHRpbWVpdF9uZm9cbiAgICAgICAgIyB0aW1pbmdzWyBcIiN7dGltZWl0X25mby5uYW1lfS8je3RpbWVpdF9uZm8udGFza31cIiBdID0gdGltZWl0X25mby5kdFxuICAgICAgb3V0cHV0ID0gJydcbiAgICAgIG91dHB1dF9oYW5kbGVyICA9ICggdGV4dCApIC0+IG91dHB1dCArPSB0ZXh0XG4gICAgICBpbm5lcl9yZXN1bHQgICAgPSBudWxsXG4gICAgICBvdXRlcl9yZXN1bHQgICAgPSB3aXRoX2NhcHR1cmVfb3V0cHV0IG91dHB1dF9oYW5kbGVyLCA9PlxuICAgICAgICBpbm5lcl9yZXN1bHQgPSBibS50aW1laXQgeyBoYW5kbGVyLCBicmFuZDogJ215YnJhbmQnLCB9LCBteXRhc2sgPSAtPiBkZWJ1ZyBcIs6pYmJidF9fMTMganVzdCBhIHRlc3RcIjsgcmV0dXJuIDk4NzZcbiAgICAgIG91dHB1dCAgICAgICAgICA9IHN0cmlwX2Fuc2kgb3V0cHV0XG4gICAgICBAZXEgKCDOqWJiYnRfXzE0ID0gLT4gL2p1c3QgYSB0ZXN0L3YudGVzdCAgICAgIG91dHB1dCAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmJ0X18xNSA9IC0+IC9cXGJhYmM6XFxzK1swLTkuXSsvdi50ZXN0IG91dHB1dCAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6pYmJidF9fMTYgPSAtPiBpbm5lcl9yZXN1bHQgICAgICAgICAgICAgICAgICAgICApLCA5ODc2XG4gICAgICBAZXEgKCDOqWJiYnRfXzE3ID0gLT4gb3V0ZXJfcmVzdWx0ICAgICAgICAgICAgICAgICAgICAgKSwgaW5uZXJfcmVzdWx0XG4gICAgICAjIEBlcSAoIM6pYmJidF9fMTggPSAtPiB0eXBlX29mIHRpbWluZ3NbICdteWJyYW5kL215dGFzaycgXSAgICAgICApLCAnZmxvYXQnXG4gICAgICAjIEBlcSAoIM6pYmJidF9fMTkgPSAtPiB0eXBlX29mIHRpbWluZ3MuYnJhbmRzLm15dGFzay5teWJyYW5kICAgICAgICApLCAnZmxvYXQnXG4gICAgICBkZWJ1ZyAnzqliYmJ0X18yMCcsIHJldmVyc2Ugd2hpdGUgb3V0cHV0XG4gICAgICBibS50aW1laXQgeyBoYW5kbGVyLCBicmFuZDogJ215YnJhbmQnLCAgICB9LCBteXRhc2sgICAgID0gLT4gZGVidWcgXCLOqWJiYnRfXzIxIGp1c3QgYSB0ZXN0XCI7IHJldHVybiA5ODc2XG4gICAgICBibS50aW1laXQgeyBoYW5kbGVyLCBicmFuZDogJ215YnJhbmQnLCAgICB9LCBvdGhlcnRhc2sgID0gLT4gZGVidWcgXCLOqWJiYnRfXzIyIGp1c3QgYSB0ZXN0XCI7IHJldHVybiA5ODc2XG4gICAgICBibS50aW1laXQgeyBoYW5kbGVyLCBicmFuZDogJ290aGVyYnJhbmQnLCB9LCBteXRhc2sgICAgID0gLT4gZGVidWcgXCLOqWJiYnRfXzIzIGp1c3QgYSB0ZXN0XCI7IHJldHVybiA5ODc2XG4gICAgICBibS50aW1laXQgeyBoYW5kbGVyLCBicmFuZDogJ290aGVyYnJhbmQnLCB9LCBibGFodGFzayAgID0gLT4gZGVidWcgXCLOqWJiYnRfXzI0IGp1c3QgYSB0ZXN0XCI7IHJldHVybiA5ODc2XG4gICAgICBoZWxwICfOqWJiYnRfXzI1JywgdGltaW5nc1xuICAgICAgaGVscCAnzqliYmJ0X18yNicsIFwiYnJhbmRzOiAgXCIsIHRpbWluZ3MuYnJhbmRzXG4gICAgICAjIGhlbHAgJ86pYmJidF9fMjcnLCBcInRhc2tzOiAgIFwiLCB0aW1pbmdzLnRhc2tzXG4gICAgICBoZWxwICfOqWJiYnRfXzI4JywgYm0uZ2V0X2F2ZXJhZ2VzX2J5X2JyYW5kcygpXG4gICAgICBoZWxwICfOqWJiYnRfXzI5JywgYm0uZ2V0X2F2ZXJhZ2VzX2J5X3Rhc2tzKClcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBhd2FpdCBkbyA9PlxuICAgICAgYm0gPSBuZXcgQmVuY2htYXJrZXIoKVxuICAgICAgbXlfYXN5bmNfdGFzayA9IC0+XG4gICAgICAgIFIgPSBbXVxuICAgICAgICBmb3IgdCBpbiBbIDEgLi4gMWU2IF1cbiAgICAgICAgICBSLnB1c2ggdCAqKiAyXG4gICAgICAgICMgcmV0dXJuIFIubGVuZ3RoXG4gICAgICAgIHJldHVybiBhd2FpdCBSLmxlbmd0aFxuICAgICAgdXJnZSAnzqliYmJ0X18zMCcsIG15X2FzeW5jX3Rhc2tcbiAgICAgICMgdXJnZSAnzqliYmJ0X18zMScsIGJtLnRpbWVpdCBtX2FzeW5jX3Rhc2tcbiAgICAgIHVyZ2UgJ86pYmJidF9fMzInLCBibS5mb3JtYXRfZHQgYXdhaXQgYm0udGltZWl0IG15X2FzeW5jX3Rhc2tcbiAgICAgIGhlbHAgJ86pYmJidF9fMzMnLCBibS5nZXRfYXZlcmFnZXNfYnlfYnJhbmRzKClcbiAgICAgIGhlbHAgJ86pYmJidF9fMzQnLCBibS5nZXRfYXZlcmFnZXNfYnlfdGFza3MoKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBmZXRjaF9leGFtcGxlX2NvbTogLT5cbiAgICB7IGJpZ2ludF9mcm9tX2hydGltZSxcbiAgICAgIGhydGltZV9hc19iaWdpbnQsXG4gICAgICBCZW5jaG1hcmtlciwgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfYmVuY2htYXJraW5nKClcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IHdpdGhfY2FwdHVyZV9vdXRwdXQsICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9jYXB0dXJlX291dHB1dCgpXG4gICAgeyBzdHJpcF9hbnNpLCAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfc3RyaXBfYW5zaSgpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgYm0gICAgICA9IG5ldyBCZW5jaG1hcmtlcigpXG4gICAgICBicmFuZCAgID0gJ25vZGVfZmV0Y2gnXG4gICAgICByc3AgICAgID0gYXdhaXQgYm0udGltZWl0IHsgYnJhbmQsIH0sIGZldGNoX3dlYnNpdGUgID0gLT4gYXdhaXQgZmV0Y2ggJ2h0dHA6Ly9leGFtcGxlLmNvbSdcbiAgICAgIGJvZHkgICAgPSBhd2FpdCBibS50aW1laXQgeyBicmFuZCwgfSwgcmVhZF9ib2R5ICAgICAgPSAtPiBhd2FpdCByc3AudGV4dCgpXG4gICAgICBpbmZvICfOqWJiYnRfXzM1JywgYm0uZ2V0X2F2ZXJhZ2VzX2J5X2JyYW5kcygpXG4gICAgICBpbmZvICfOqWJiYnRfXzM2JywgYm0uZ2V0X2F2ZXJhZ2VzX2J5X3Rhc2tzKClcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogdHJ1ZSwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS5hc3luY190ZXN0IEB0YXNrc1xuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGZldGNoX2V4YW1wbGVfY29tOiBAdGFza3MuZmV0Y2hfZXhhbXBsZV9jb20sIH1cblxuICAjIG5vZGV4aCB+L2hlbmdpc3QtTkcvZGV2L3NuaXBwZXRzL2xpYi9iZW5jaG1hcmstdW5pY29kZS1jaGFyYWN0ZXItd2lkdGguanNcbiAgIyBub2RleGggfi9oZW5naXN0LU5HL2Rldi9zbmlwcGV0cy9saWIvZGVtby1idWlsZC11bmljb2RlLXJhbmdlcy5qc1xuICAjIG5vZGV4aCB+L2hlbmdpc3QtTkcvZGV2L3NuaXBwZXRzL2xpYi9iZW5jaG1hcmstcmVhZC1odWdlLWNzdi5qc1xuICAjIG5vZGV4aCB+L2hlbmdpc3QtTkcvZGV2L3NuaXBwZXRzL2xpYi9kZW1vLWJpbmFyeS1sZXhpY29ncmFwaGljLXNvcnRrZXkuanNcbiAgIyBub2RleGggfi9oZW5naXN0LU5HL2Rldi9zbmlwcGV0cy9saWIvZGVtby12YXJpbnQtbGViMTI4LmpzXG4gICMgbm9kZXhoIH4vaGVuZ2lzdC1ORy9kZXYvaG9sbGVyaXRoL2xpYi9iZW5jaG1hcmtzLmpzXG5cbiAgIyBkZWJ1ZyAnzqliYmJ0X18zNycsIHJlcXVpcmUgJy4uLy4uL3NuaXBwZXRzL2xpYi9iZW5jaG1hcmstdW5pY29kZS1jaGFyYWN0ZXItd2lkdGguanMnXG4gICMgZGVidWcgJ86pYmJidF9fMzgnLCByZXF1aXJlICcuLi8uLi9zbmlwcGV0cy9saWIvZGVtby1idWlsZC11bmljb2RlLXJhbmdlcy5qcydcbiAgIyBkZWJ1ZyAnzqliYmJ0X18zOScsIHJlcXVpcmUgJy4uLy4uL3NuaXBwZXRzL2xpYi9iZW5jaG1hcmstcmVhZC1odWdlLWNzdi5qcydcbiAgIyBkZWJ1ZyAnzqliYmJ0X180MCcsIHJlcXVpcmUgJy4uLy4uL3NuaXBwZXRzL2xpYi9kZW1vLWJpbmFyeS1sZXhpY29ncmFwaGljLXNvcnRrZXkuanMnXG4gICMgZGVidWcgJ86pYmJidF9fNDEnLCByZXF1aXJlICcuLi8uLi9zbmlwcGV0cy9saWIvZGVtby12YXJpbnQtbGViMTI4LmpzJ1xuICAjIGRlYnVnICfOqWJiYnRfXzQyJywgKCByZXF1aXJlICcuLi8uLi9ob2xsZXJpdGgvbGliL2JlbmNobWFya3MuanMnICkucnVuKClcblxuIl19
