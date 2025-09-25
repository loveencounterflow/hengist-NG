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

  SFMODULES = require('../../../apps/bricabrac-single-file-modules');

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmVuY2htYXJraW5nLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBOztFQUVBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0Isd0JBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsT0FKRixFQUtFLEdBTEYsQ0FBQSxHQUs0QixHQUFHLENBQUMsR0FMaEMsRUFaQTs7O0VBbUJBLElBQUEsR0FBNEIsT0FBQSxDQUFRLDJCQUFSOztFQUM1QixDQUFBLENBQUUsSUFBRixDQUFBLEdBQTRCLElBQTVCOztFQUNBLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLHlCQUFSLENBQTVCOztFQUNBLFNBQUEsR0FBNEIsT0FBQSxDQUFRLDZDQUFSOztFQUM1QixDQUFBO0lBQUUsdUJBQUEsRUFBeUI7RUFBM0IsQ0FBQSxHQUFrQyxTQUFTLENBQUMsK0JBQVYsQ0FBQSxDQUFsQyxFQXZCQTs7Ozs7RUE2QkEsSUFBQyxDQUFBLEtBQUQsR0FHRSxDQUFBOztJQUFB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QVUsQ0FBRSxLQUFGLENBQVYsRUFBc0IsU0FBQSxHQUFpQixNQUFBLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUEsTUFBTSxHQUFHLENBQUMsSUFBSixDQUFBLENBQU47UUFBSCxDQUF2QyxDQUFOO1FBQ1YsSUFBQSxDQUFLLFdBQUwsRUFBa0IsRUFBRSxDQUFDLHNCQUFILENBQUEsQ0FBbEI7UUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixFQUFFLENBQUMscUJBQUgsQ0FBQSxDQUFsQjtBQUNBLGVBQU87TUFQTixDQUFBLElBUFA7O0FBZ0JJLGFBQU87SUFqQlU7RUFuRm5CLEVBaENGOzs7RUF5SUEsSUFBRyxNQUFBLEtBQVUsT0FBTyxDQUFDLElBQXJCO0lBQStCLE1BQVMsQ0FBQSxDQUFBLENBQUEsR0FBQTtBQUN4QyxVQUFBO01BQUUsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixLQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixJQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdELEVBRGhCOzthQUdFLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEI7UUFBRSxpQkFBQSxFQUFtQixJQUFDLENBQUEsS0FBSyxDQUFDO01BQTVCLENBQTlCO0lBSnNDLENBQUEsSUFBeEM7OztFQXpJQTs7Ozs7Ozs7Ozs7OztBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG4ndXNlIHN0cmljdCdcblxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdicmljYWJyYWMtYmVuY2htYXJraW5nJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHdoaXRlXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG4jIFdHVVkgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL3dlYmd1eSdcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zaW5nbGUtZmlsZS1tb2R1bGVzJ1xueyBhbnNpX2NvbG9yc19hbmRfZWZmZWN0czogQywgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2Fuc2lfY29sb3JzX2FuZF9lZmZlY3RzKClcblxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiNcbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRhc2tzID1cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGJhc2ljczogLT5cbiAgICB7IGJpZ2ludF9mcm9tX2hydGltZSxcbiAgICAgIGhydGltZV9hc19iaWdpbnQsXG4gICAgICBCZW5jaG1hcmtlciwgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfYmVuY2htYXJraW5nKClcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IHdpdGhfY2FwdHVyZV9vdXRwdXQsICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9jYXB0dXJlX291dHB1dCgpXG4gICAgeyBzdHJpcF9hbnNpLCAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfc3RyaXBfYW5zaSgpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgYm0gICAgICAgICAgICA9IG5ldyBCZW5jaG1hcmtlcigpXG4gICAgICBvdXRwdXQgICAgICAgID0gJydcbiAgICAgICMgb3V0cHV0X2hhbmRsZXIgID0gKCB0ZXh0ICkgLT4gb3V0cHV0ICs9IHRleHRcbiAgICAgIGhhbmRsZXIgICAgICAgPSAoIHJlc3VsdCApIC0+IGRlYnVnICfOqWJiYnRfX18xJywgXCJyZXN1bHQ6XCIsIHJlc3VsdFxuICAgICAgaW5uZXJfcmVzdWx0ICA9IG51bGxcbiAgICAgIGlubmVyX3Jlc3VsdCAgPSBibS50aW1laXQgICAgICAgICAgICAgICAgICAgICAgICAgIGFiYyA9IC0+IGRlYnVnIFwizqliYmJ0X19fMiBqdXN0IGEgdGVzdFwiOyByZXR1cm4gOTg3NlxuICAgICAgaW5uZXJfcmVzdWx0ICA9IGJtLnRpbWVpdCAnbmFtZScsICAgICAgICAgICAgICAgICAgICAgICAgLT4gZGVidWcgXCLOqWJiYnRfX18zIGp1c3QgYSB0ZXN0XCI7IHJldHVybiA5ODc2XG4gICAgICBpbm5lcl9yZXN1bHQgID0gYm0udGltZWl0ICduYW1lJywgJ3Rhc2snLCAgICAgICAgICAgICAgIC0+IGRlYnVnIFwizqliYmJ0X19fNCBqdXN0IGEgdGVzdFwiOyByZXR1cm4gOTg3NlxuICAgICAgaW5uZXJfcmVzdWx0ICA9IGJtLnRpbWVpdCAnbmFtZScsICd0YXNrJywgeyBoYW5kbGVyLCB9LCAtPiBkZWJ1ZyBcIs6pYmJidF9fXzUganVzdCBhIHRlc3RcIjsgcmV0dXJuIDk4NzZcbiAgICAgIGlubmVyX3Jlc3VsdCAgPSBibS50aW1laXQgeyAnbmFtZScsICd0YXNrJywgfSwgICAgICAgICAgLT4gZGVidWcgXCLOqWJiYnRfX182IGp1c3QgYSB0ZXN0XCI7IHJldHVybiA5ODc2XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgYm0gICAgICAgICAgICAgID0gbmV3IEJlbmNobWFya2VyKClcbiAgICAgIG91dHB1dCAgICAgICAgICA9ICcnXG4gICAgICBvdXRwdXRfaGFuZGxlciAgPSAoIHRleHQgKSAtPiBvdXRwdXQgKz0gdGV4dFxuICAgICAgaW5uZXJfcmVzdWx0ICAgID0gbnVsbFxuICAgICAgb3V0ZXJfcmVzdWx0ICAgID0gd2l0aF9jYXB0dXJlX291dHB1dCBvdXRwdXRfaGFuZGxlciwgPT5cbiAgICAgICAgaW5uZXJfcmVzdWx0ID0gYm0udGltZWl0IGFiYyA9IC0+IGRlYnVnIFwizqliYmJ0X19fNyBqdXN0IGEgdGVzdFwiOyByZXR1cm4gOTg3NlxuICAgICAgb3V0cHV0ICAgICAgICAgID0gc3RyaXBfYW5zaSBvdXRwdXRcbiAgICAgIGVjaG8gJ86pYmJidF9fXzgnLCByZXZlcnNlIHdoaXRlIG91dHB1dFxuICAgICAgQGVxICggzqliYmJ0X19fOSA9IC0+IC9qdXN0IGEgdGVzdC92LnRlc3QgICAgICBvdXRwdXQgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJidF9fMTAgPSAtPiAvXFxiYWJjOlxccytbMC05Ll0rL3YudGVzdCBvdXRwdXQgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJidF9fMTEgPSAtPiBpbm5lcl9yZXN1bHQgICAgICAgICAgICAgICAgICAgICApLCA5ODc2XG4gICAgICBAZXEgKCDOqWJiYnRfXzEyID0gLT4gb3V0ZXJfcmVzdWx0ICAgICAgICAgICAgICAgICAgICAgKSwgaW5uZXJfcmVzdWx0XG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGJtICAgICAgICAgICAgICA9IG5ldyBCZW5jaG1hcmtlcigpXG4gICAgICB0aW1pbmdzICAgICAgICAgPSB7fVxuICAgICAgaGFuZGxlciAgICAgICAgID0gKCB0aW1laXRfbmZvICkgLT5cbiAgICAgICAgT2JqZWN0LmFzc2lnbiB0aW1pbmdzLCB0aW1laXRfbmZvXG4gICAgICAgICMgdGltaW5nc1sgXCIje3RpbWVpdF9uZm8ubmFtZX0vI3t0aW1laXRfbmZvLnRhc2t9XCIgXSA9IHRpbWVpdF9uZm8uZHRcbiAgICAgIG91dHB1dCA9ICcnXG4gICAgICBvdXRwdXRfaGFuZGxlciAgPSAoIHRleHQgKSAtPiBvdXRwdXQgKz0gdGV4dFxuICAgICAgaW5uZXJfcmVzdWx0ICAgID0gbnVsbFxuICAgICAgb3V0ZXJfcmVzdWx0ICAgID0gd2l0aF9jYXB0dXJlX291dHB1dCBvdXRwdXRfaGFuZGxlciwgPT5cbiAgICAgICAgaW5uZXJfcmVzdWx0ID0gYm0udGltZWl0IHsgaGFuZGxlciwgYnJhbmQ6ICdteWJyYW5kJywgfSwgbXl0YXNrID0gLT4gZGVidWcgXCLOqWJiYnRfXzEzIGp1c3QgYSB0ZXN0XCI7IHJldHVybiA5ODc2XG4gICAgICBvdXRwdXQgICAgICAgICAgPSBzdHJpcF9hbnNpIG91dHB1dFxuICAgICAgQGVxICggzqliYmJ0X18xNCA9IC0+IC9qdXN0IGEgdGVzdC92LnRlc3QgICAgICBvdXRwdXQgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJidF9fMTUgPSAtPiAvXFxiYWJjOlxccytbMC05Ll0rL3YudGVzdCBvdXRwdXQgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWJiYnRfXzE2ID0gLT4gaW5uZXJfcmVzdWx0ICAgICAgICAgICAgICAgICAgICAgKSwgOTg3NlxuICAgICAgQGVxICggzqliYmJ0X18xNyA9IC0+IG91dGVyX3Jlc3VsdCAgICAgICAgICAgICAgICAgICAgICksIGlubmVyX3Jlc3VsdFxuICAgICAgIyBAZXEgKCDOqWJiYnRfXzE4ID0gLT4gdHlwZV9vZiB0aW1pbmdzWyAnbXlicmFuZC9teXRhc2snIF0gICAgICAgKSwgJ2Zsb2F0J1xuICAgICAgIyBAZXEgKCDOqWJiYnRfXzE5ID0gLT4gdHlwZV9vZiB0aW1pbmdzLmJyYW5kcy5teXRhc2subXlicmFuZCAgICAgICAgKSwgJ2Zsb2F0J1xuICAgICAgZGVidWcgJ86pYmJidF9fMjAnLCByZXZlcnNlIHdoaXRlIG91dHB1dFxuICAgICAgYm0udGltZWl0IHsgaGFuZGxlciwgYnJhbmQ6ICdteWJyYW5kJywgICAgfSwgbXl0YXNrICAgICA9IC0+IGRlYnVnIFwizqliYmJ0X18yMSBqdXN0IGEgdGVzdFwiOyByZXR1cm4gOTg3NlxuICAgICAgYm0udGltZWl0IHsgaGFuZGxlciwgYnJhbmQ6ICdteWJyYW5kJywgICAgfSwgb3RoZXJ0YXNrICA9IC0+IGRlYnVnIFwizqliYmJ0X18yMiBqdXN0IGEgdGVzdFwiOyByZXR1cm4gOTg3NlxuICAgICAgYm0udGltZWl0IHsgaGFuZGxlciwgYnJhbmQ6ICdvdGhlcmJyYW5kJywgfSwgbXl0YXNrICAgICA9IC0+IGRlYnVnIFwizqliYmJ0X18yMyBqdXN0IGEgdGVzdFwiOyByZXR1cm4gOTg3NlxuICAgICAgYm0udGltZWl0IHsgaGFuZGxlciwgYnJhbmQ6ICdvdGhlcmJyYW5kJywgfSwgYmxhaHRhc2sgICA9IC0+IGRlYnVnIFwizqliYmJ0X18yNCBqdXN0IGEgdGVzdFwiOyByZXR1cm4gOTg3NlxuICAgICAgaGVscCAnzqliYmJ0X18yNScsIHRpbWluZ3NcbiAgICAgIGhlbHAgJ86pYmJidF9fMjYnLCBcImJyYW5kczogIFwiLCB0aW1pbmdzLmJyYW5kc1xuICAgICAgIyBoZWxwICfOqWJiYnRfXzI3JywgXCJ0YXNrczogICBcIiwgdGltaW5ncy50YXNrc1xuICAgICAgaGVscCAnzqliYmJ0X18yOCcsIGJtLmdldF9hdmVyYWdlc19ieV9icmFuZHMoKVxuICAgICAgaGVscCAnzqliYmJ0X18yOScsIGJtLmdldF9hdmVyYWdlc19ieV90YXNrcygpXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgYXdhaXQgZG8gPT5cbiAgICAgIGJtID0gbmV3IEJlbmNobWFya2VyKClcbiAgICAgIG15X2FzeW5jX3Rhc2sgPSAtPlxuICAgICAgICBSID0gW11cbiAgICAgICAgZm9yIHQgaW4gWyAxIC4uIDFlNiBdXG4gICAgICAgICAgUi5wdXNoIHQgKiogMlxuICAgICAgICAjIHJldHVybiBSLmxlbmd0aFxuICAgICAgICByZXR1cm4gYXdhaXQgUi5sZW5ndGhcbiAgICAgIHVyZ2UgJ86pYmJidF9fMzAnLCBteV9hc3luY190YXNrXG4gICAgICAjIHVyZ2UgJ86pYmJidF9fMzEnLCBibS50aW1laXQgbV9hc3luY190YXNrXG4gICAgICB1cmdlICfOqWJiYnRfXzMyJywgYm0uZm9ybWF0X2R0IGF3YWl0IGJtLnRpbWVpdCBteV9hc3luY190YXNrXG4gICAgICBoZWxwICfOqWJiYnRfXzMzJywgYm0uZ2V0X2F2ZXJhZ2VzX2J5X2JyYW5kcygpXG4gICAgICBoZWxwICfOqWJiYnRfXzM0JywgYm0uZ2V0X2F2ZXJhZ2VzX2J5X3Rhc2tzKClcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZmV0Y2hfZXhhbXBsZV9jb206IC0+XG4gICAgeyBiaWdpbnRfZnJvbV9ocnRpbWUsXG4gICAgICBocnRpbWVfYXNfYmlnaW50LFxuICAgICAgQmVuY2htYXJrZXIsICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2JlbmNobWFya2luZygpXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyB3aXRoX2NhcHR1cmVfb3V0cHV0LCAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfY2FwdHVyZV9vdXRwdXQoKVxuICAgIHsgc3RyaXBfYW5zaSwgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX3N0cmlwX2Fuc2koKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGJtICAgICAgPSBuZXcgQmVuY2htYXJrZXIoKVxuICAgICAgYnJhbmQgICA9ICdub2RlX2ZldGNoJ1xuICAgICAgcnNwICAgICA9IGF3YWl0IGJtLnRpbWVpdCB7IGJyYW5kLCB9LCBmZXRjaF93ZWJzaXRlICA9IC0+IGF3YWl0IGZldGNoICdodHRwOi8vZXhhbXBsZS5jb20nXG4gICAgICBib2R5ICAgID0gYXdhaXQgYm0udGltZWl0IHsgYnJhbmQsIH0sIHJlYWRfYm9keSAgICAgID0gLT4gYXdhaXQgcnNwLnRleHQoKVxuICAgICAgaW5mbyAnzqliYmJ0X18zNScsIGJtLmdldF9hdmVyYWdlc19ieV9icmFuZHMoKVxuICAgICAgaW5mbyAnzqliYmJ0X18zNicsIGJtLmdldF9hdmVyYWdlc19ieV90YXNrcygpXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IHRydWUsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkuYXN5bmNfdGVzdCBAdGFza3NcbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBmZXRjaF9leGFtcGxlX2NvbTogQHRhc2tzLmZldGNoX2V4YW1wbGVfY29tLCB9XG5cbiAgIyBub2RleGggfi9oZW5naXN0LU5HL2Rldi9zbmlwcGV0cy9saWIvYmVuY2htYXJrLXVuaWNvZGUtY2hhcmFjdGVyLXdpZHRoLmpzXG4gICMgbm9kZXhoIH4vaGVuZ2lzdC1ORy9kZXYvc25pcHBldHMvbGliL2RlbW8tYnVpbGQtdW5pY29kZS1yYW5nZXMuanNcbiAgIyBub2RleGggfi9oZW5naXN0LU5HL2Rldi9zbmlwcGV0cy9saWIvYmVuY2htYXJrLXJlYWQtaHVnZS1jc3YuanNcbiAgIyBub2RleGggfi9oZW5naXN0LU5HL2Rldi9zbmlwcGV0cy9saWIvZGVtby1iaW5hcnktbGV4aWNvZ3JhcGhpYy1zb3J0a2V5LmpzXG4gICMgbm9kZXhoIH4vaGVuZ2lzdC1ORy9kZXYvc25pcHBldHMvbGliL2RlbW8tdmFyaW50LWxlYjEyOC5qc1xuICAjIG5vZGV4aCB+L2hlbmdpc3QtTkcvZGV2L2hvbGxlcml0aC9saWIvYmVuY2htYXJrcy5qc1xuXG4gICMgZGVidWcgJ86pYmJidF9fMzcnLCByZXF1aXJlICcuLi8uLi9zbmlwcGV0cy9saWIvYmVuY2htYXJrLXVuaWNvZGUtY2hhcmFjdGVyLXdpZHRoLmpzJ1xuICAjIGRlYnVnICfOqWJiYnRfXzM4JywgcmVxdWlyZSAnLi4vLi4vc25pcHBldHMvbGliL2RlbW8tYnVpbGQtdW5pY29kZS1yYW5nZXMuanMnXG4gICMgZGVidWcgJ86pYmJidF9fMzknLCByZXF1aXJlICcuLi8uLi9zbmlwcGV0cy9saWIvYmVuY2htYXJrLXJlYWQtaHVnZS1jc3YuanMnXG4gICMgZGVidWcgJ86pYmJidF9fNDAnLCByZXF1aXJlICcuLi8uLi9zbmlwcGV0cy9saWIvZGVtby1iaW5hcnktbGV4aWNvZ3JhcGhpYy1zb3J0a2V5LmpzJ1xuICAjIGRlYnVnICfOqWJiYnRfXzQxJywgcmVxdWlyZSAnLi4vLi4vc25pcHBldHMvbGliL2RlbW8tdmFyaW50LWxlYjEyOC5qcydcbiAgIyBkZWJ1ZyAnzqliYmJ0X180MicsICggcmVxdWlyZSAnLi4vLi4vaG9sbGVyaXRoL2xpYi9iZW5jaG1hcmtzLmpzJyApLnJ1bigpXG5cbiJdfQ==
