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
    //=========================================================================================================
    basics: function() {
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
        // help 'Ωbbbt__29', bm.get_averages_by_tasks()
        return null;
      })();
      (() => {        //.......................................................................................................
        var bm;
        bm = new Benchmarker();
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
      return (new Test(guytest_cfg)).test(this.tasks);
    })();
  }

  // ( new Test guytest_cfg ).test @tasks.builtins

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmVuY2htYXJraW5nLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBOztFQUVBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0Isd0JBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsT0FKRixFQUtFLEdBTEYsQ0FBQSxHQUs0QixHQUFHLENBQUMsR0FMaEMsRUFaQTs7O0VBbUJBLElBQUEsR0FBNEIsT0FBQSxDQUFRLDJCQUFSOztFQUM1QixDQUFBLENBQUUsSUFBRixDQUFBLEdBQTRCLElBQTVCOztFQUNBLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLHlCQUFSLENBQTVCOztFQUNBLFNBQUEsR0FBNEIsT0FBQSxDQUFRLDZDQUFSOztFQUM1QixDQUFBO0lBQUUsdUJBQUEsRUFBeUI7RUFBM0IsQ0FBQSxHQUFrQyxTQUFTLENBQUMsK0JBQVYsQ0FBQSxDQUFsQyxFQXZCQTs7Ozs7RUE2QkEsSUFBQyxDQUFBLEtBQUQsR0FHRSxDQUFBOztJQUFB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QUEvQjtJQUhzQyxDQUFBLElBQXhDOzs7RUExR0E7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzdHJpY3QnXG5cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnYnJpY2FicmFjLWJlbmNobWFya2luZydcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICB3aGl0ZVxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxuIyBXR1VZICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy93ZWJndXknXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2luZ2xlLWZpbGUtbW9kdWxlcydcbnsgYW5zaV9jb2xvcnNfYW5kX2VmZmVjdHM6IEMsIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9hbnNpX2NvbG9yc19hbmRfZWZmZWN0cygpXG5cblxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4jXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkB0YXNrcyA9XG5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBiYXNpY3M6IC0+XG4gICAgeyBiaWdpbnRfZnJvbV9ocnRpbWUsXG4gICAgICBocnRpbWVfYXNfYmlnaW50LFxuICAgICAgQmVuY2htYXJrZXIsICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2JlbmNobWFya2luZygpXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyB3aXRoX2NhcHR1cmVfb3V0cHV0LCAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfY2FwdHVyZV9vdXRwdXQoKVxuICAgIHsgc3RyaXBfYW5zaSwgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX3N0cmlwX2Fuc2koKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGJtICAgICAgICAgICAgPSBuZXcgQmVuY2htYXJrZXIoKVxuICAgICAgb3V0cHV0ICAgICAgICA9ICcnXG4gICAgICAjIG91dHB1dF9oYW5kbGVyICA9ICggdGV4dCApIC0+IG91dHB1dCArPSB0ZXh0XG4gICAgICBoYW5kbGVyICAgICAgID0gKCByZXN1bHQgKSAtPiBkZWJ1ZyAnzqliYmJ0X19fMScsIFwicmVzdWx0OlwiLCByZXN1bHRcbiAgICAgIGlubmVyX3Jlc3VsdCAgPSBudWxsXG4gICAgICBpbm5lcl9yZXN1bHQgID0gYm0udGltZWl0ICAgICAgICAgICAgICAgICAgICAgICAgICBhYmMgPSAtPiBkZWJ1ZyBcIs6pYmJidF9fXzIganVzdCBhIHRlc3RcIjsgcmV0dXJuIDk4NzZcbiAgICAgIGlubmVyX3Jlc3VsdCAgPSBibS50aW1laXQgJ25hbWUnLCAgICAgICAgICAgICAgICAgICAgICAgIC0+IGRlYnVnIFwizqliYmJ0X19fMyBqdXN0IGEgdGVzdFwiOyByZXR1cm4gOTg3NlxuICAgICAgaW5uZXJfcmVzdWx0ICA9IGJtLnRpbWVpdCAnbmFtZScsICd0YXNrJywgICAgICAgICAgICAgICAtPiBkZWJ1ZyBcIs6pYmJidF9fXzQganVzdCBhIHRlc3RcIjsgcmV0dXJuIDk4NzZcbiAgICAgIGlubmVyX3Jlc3VsdCAgPSBibS50aW1laXQgJ25hbWUnLCAndGFzaycsIHsgaGFuZGxlciwgfSwgLT4gZGVidWcgXCLOqWJiYnRfX181IGp1c3QgYSB0ZXN0XCI7IHJldHVybiA5ODc2XG4gICAgICBpbm5lcl9yZXN1bHQgID0gYm0udGltZWl0IHsgJ25hbWUnLCAndGFzaycsIH0sICAgICAgICAgIC0+IGRlYnVnIFwizqliYmJ0X19fNiBqdXN0IGEgdGVzdFwiOyByZXR1cm4gOTg3NlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGJtICAgICAgICAgICAgICA9IG5ldyBCZW5jaG1hcmtlcigpXG4gICAgICBvdXRwdXQgICAgICAgICAgPSAnJ1xuICAgICAgb3V0cHV0X2hhbmRsZXIgID0gKCB0ZXh0ICkgLT4gb3V0cHV0ICs9IHRleHRcbiAgICAgIGlubmVyX3Jlc3VsdCAgICA9IG51bGxcbiAgICAgIG91dGVyX3Jlc3VsdCAgICA9IHdpdGhfY2FwdHVyZV9vdXRwdXQgb3V0cHV0X2hhbmRsZXIsID0+XG4gICAgICAgIGlubmVyX3Jlc3VsdCA9IGJtLnRpbWVpdCBhYmMgPSAtPiBkZWJ1ZyBcIs6pYmJidF9fXzcganVzdCBhIHRlc3RcIjsgcmV0dXJuIDk4NzZcbiAgICAgIG91dHB1dCAgICAgICAgICA9IHN0cmlwX2Fuc2kgb3V0cHV0XG4gICAgICBlY2hvICfOqWJiYnRfX184JywgcmV2ZXJzZSB3aGl0ZSBvdXRwdXRcbiAgICAgIEBlcSAoIM6pYmJidF9fXzkgPSAtPiAvanVzdCBhIHRlc3Qvdi50ZXN0ICAgICAgb3V0cHV0ICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiYnRfXzEwID0gLT4gL1xcYmFiYzpcXHMrWzAtOS5dKy92LnRlc3Qgb3V0cHV0ICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiYnRfXzExID0gLT4gaW5uZXJfcmVzdWx0ICAgICAgICAgICAgICAgICAgICAgKSwgOTg3NlxuICAgICAgQGVxICggzqliYmJ0X18xMiA9IC0+IG91dGVyX3Jlc3VsdCAgICAgICAgICAgICAgICAgICAgICksIGlubmVyX3Jlc3VsdFxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBibSAgICAgICAgICAgICAgPSBuZXcgQmVuY2htYXJrZXIoKVxuICAgICAgdGltaW5ncyAgICAgICAgID0ge31cbiAgICAgIGhhbmRsZXIgICAgICAgICA9ICggdGltZWl0X25mbyApIC0+XG4gICAgICAgIE9iamVjdC5hc3NpZ24gdGltaW5ncywgdGltZWl0X25mb1xuICAgICAgICAjIHRpbWluZ3NbIFwiI3t0aW1laXRfbmZvLm5hbWV9LyN7dGltZWl0X25mby50YXNrfVwiIF0gPSB0aW1laXRfbmZvLmR0XG4gICAgICBvdXRwdXQgPSAnJ1xuICAgICAgb3V0cHV0X2hhbmRsZXIgID0gKCB0ZXh0ICkgLT4gb3V0cHV0ICs9IHRleHRcbiAgICAgIGlubmVyX3Jlc3VsdCAgICA9IG51bGxcbiAgICAgIG91dGVyX3Jlc3VsdCAgICA9IHdpdGhfY2FwdHVyZV9vdXRwdXQgb3V0cHV0X2hhbmRsZXIsID0+XG4gICAgICAgIGlubmVyX3Jlc3VsdCA9IGJtLnRpbWVpdCB7IGhhbmRsZXIsIGJyYW5kOiAnbXlicmFuZCcsIH0sIG15dGFzayA9IC0+IGRlYnVnIFwizqliYmJ0X18xMyBqdXN0IGEgdGVzdFwiOyByZXR1cm4gOTg3NlxuICAgICAgb3V0cHV0ICAgICAgICAgID0gc3RyaXBfYW5zaSBvdXRwdXRcbiAgICAgIEBlcSAoIM6pYmJidF9fMTQgPSAtPiAvanVzdCBhIHRlc3Qvdi50ZXN0ICAgICAgb3V0cHV0ICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiYnRfXzE1ID0gLT4gL1xcYmFiYzpcXHMrWzAtOS5dKy92LnRlc3Qgb3V0cHV0ICApLCBmYWxzZVxuICAgICAgQGVxICggzqliYmJ0X18xNiA9IC0+IGlubmVyX3Jlc3VsdCAgICAgICAgICAgICAgICAgICAgICksIDk4NzZcbiAgICAgIEBlcSAoIM6pYmJidF9fMTcgPSAtPiBvdXRlcl9yZXN1bHQgICAgICAgICAgICAgICAgICAgICApLCBpbm5lcl9yZXN1bHRcbiAgICAgICMgQGVxICggzqliYmJ0X18xOCA9IC0+IHR5cGVfb2YgdGltaW5nc1sgJ215YnJhbmQvbXl0YXNrJyBdICAgICAgICksICdmbG9hdCdcbiAgICAgICMgQGVxICggzqliYmJ0X18xOSA9IC0+IHR5cGVfb2YgdGltaW5ncy5icmFuZHMubXl0YXNrLm15YnJhbmQgICAgICAgICksICdmbG9hdCdcbiAgICAgIGRlYnVnICfOqWJiYnRfXzIwJywgcmV2ZXJzZSB3aGl0ZSBvdXRwdXRcbiAgICAgIGJtLnRpbWVpdCB7IGhhbmRsZXIsIGJyYW5kOiAnbXlicmFuZCcsICAgIH0sIG15dGFzayAgICAgPSAtPiBkZWJ1ZyBcIs6pYmJidF9fMjEganVzdCBhIHRlc3RcIjsgcmV0dXJuIDk4NzZcbiAgICAgIGJtLnRpbWVpdCB7IGhhbmRsZXIsIGJyYW5kOiAnbXlicmFuZCcsICAgIH0sIG90aGVydGFzayAgPSAtPiBkZWJ1ZyBcIs6pYmJidF9fMjIganVzdCBhIHRlc3RcIjsgcmV0dXJuIDk4NzZcbiAgICAgIGJtLnRpbWVpdCB7IGhhbmRsZXIsIGJyYW5kOiAnb3RoZXJicmFuZCcsIH0sIG15dGFzayAgICAgPSAtPiBkZWJ1ZyBcIs6pYmJidF9fMjMganVzdCBhIHRlc3RcIjsgcmV0dXJuIDk4NzZcbiAgICAgIGJtLnRpbWVpdCB7IGhhbmRsZXIsIGJyYW5kOiAnb3RoZXJicmFuZCcsIH0sIGJsYWh0YXNrICAgPSAtPiBkZWJ1ZyBcIs6pYmJidF9fMjQganVzdCBhIHRlc3RcIjsgcmV0dXJuIDk4NzZcbiAgICAgIGhlbHAgJ86pYmJidF9fMjUnLCB0aW1pbmdzXG4gICAgICBoZWxwICfOqWJiYnRfXzI2JywgXCJicmFuZHM6ICBcIiwgdGltaW5ncy5icmFuZHNcbiAgICAgICMgaGVscCAnzqliYmJ0X18yNycsIFwidGFza3M6ICAgXCIsIHRpbWluZ3MudGFza3NcbiAgICAgIGhlbHAgJ86pYmJidF9fMjgnLCBibS5nZXRfYXZlcmFnZXNfYnlfYnJhbmRzKClcbiAgICAgICMgaGVscCAnzqliYmJ0X18yOScsIGJtLmdldF9hdmVyYWdlc19ieV90YXNrcygpXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGJtID0gbmV3IEJlbmNobWFya2VyKClcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogdHJ1ZSwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCBAdGFza3NcbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCBAdGFza3MuYnVpbHRpbnNcbiJdfQ==
