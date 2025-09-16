(async function() {
  'use strict';
  var Benchmarks, GUY, SFMODULES, alert, benchmarks, blue, capture_output, debug, echo, f, gold, help, info, inspect, lime, log, plain, praise, red, reverse, rpr, timeit, urge, warn, whisper;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('hollerith-benchmarks'));

  ({rpr, inspect, echo, lime, gold, red, blue, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  // GTNG                      = require '../../../apps/guy-test-NG'
  // { Test                  } = GTNG
  ({f} = require('../../../apps/effstring'));

  SFMODULES = require('../../../apps/bricabrac-single-file-modules');

  ({timeit} = SFMODULES.unstable.require_benchmarking());

  //===========================================================================================================
  capture_output = function(handler) {
    var old_stderr_write, old_stdout_write, reset_output;
    old_stdout_write = process.stdout.write;
    old_stderr_write = process.stderr.write;
    process.stdout.write = function(text, ...P) {
      return handler(text, ...P);
    };
    process.stderr.write = function(text, ...P) {
      return handler(text, ...P);
    };
    return reset_output = function() {
      process.stdout.write = old_stdout_write;
      process.stderr.write = old_stderr_write;
      return null;
    };
  };

  //===========================================================================================================
  Benchmarks = class Benchmarks {
    //---------------------------------------------------------------------------------------------------------
    run() {
      var hollerith_current, hollerith_reference_1201;
      timeit(hollerith_reference_1201 = () => {
        return this._run('hollerith-reference-1201');
      });
      timeit(hollerith_current = () => {
        return this._run('../../../apps/hollerith');
      });
      return null;
    }

    //---------------------------------------------------------------------------------------------------------
    _run(require_path) {
      var Hollerith, Test_hollerith, cfg, codec, internals, name, reset_output, stdout_buffer, t, test, test_result;
      ({internals, Hollerith, test} = require(require_path));
      ({Test_hollerith} = test);
//=======================================================================================================
      for (name in internals) {
        cfg = internals[name];
        if (!name.startsWith('constants_')) {
          continue;
        }
        codec = new Hollerith(cfg);
        t = new Test_hollerith(codec);
        try {
          stdout_buffer = [];
          reset_output = capture_output(function(text) {
            return stdout_buffer.push(text);
          });
          test_result = t.test_sorting();
        } finally {
          reset_output();
        }
        // debug 'Ωhllt___1', stdout_buffer.shift().trimEnd() while stdout_buffer.length > 0
        if (!(test_result != null ? test_result.success : void 0)) {
          warn('Ωhllt___2', require_path, test_result);
        }
        // @eq ( Ωhllt___3 = -> type_of t.test_sorting                                 ), 'function'
        // @eq ( Ωhllt___4 = -> type_of test_result                                    ), 'pod'
        // @eq ( Ωhllt___5 = -> test_result.success                                    ), true
        // @eq ( Ωhllt___6 = -> type_of test_result.probe_count                        ), 'float'
        // @eq ( Ωhllt___7 = -> type_of test_result.hit_count                          ), 'float'
        // @eq ( Ωhllt___8 = -> type_of test_result.miss_count                         ), 'float'
        // for _ in [ 0 ... test_result.hit_count ]
        //   null
        //   # @eq ( Ωhllt___9 = -> true ), true
        // for _ in [ 0 ... test_result.miss_count ]
        //   null
        // @eq ( Ωhllt__10 = -> true ), false
        //.....................................................................................................
        // help 'Ωvdx__11', require_path
        //.....................................................................................................
        break; // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      }
      //.......................................................................................................
      return null;
    }

  };

  //===========================================================================================================
  benchmarks = new Benchmarks();

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var show_requires;
      ({show_requires} = require('../../snippets/lib/demo-show-requires.js'));
      show_requires('../../../apps/hollerith');
      //---------------------------------------------------------------------------------------------------------
      benchmarks.run();
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JlbmNobWFya3MuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQUE7QUFBQSxNQUFBLFVBQUEsRUFBQSxHQUFBLEVBQUEsU0FBQSxFQUFBLEtBQUEsRUFBQSxVQUFBLEVBQUEsSUFBQSxFQUFBLGNBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLE1BQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUE7OztFQUdBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0Isc0JBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsSUFKRixFQUtFLEdBTEYsRUFNRSxJQU5GLEVBT0UsT0FQRixFQVFFLEdBUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FSaEMsRUFiQTs7Ozs7RUF5QkEsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUI7O0VBQ0EsU0FBQSxHQUE0QixPQUFBLENBQVEsNkNBQVI7O0VBQzVCLENBQUEsQ0FBRSxNQUFGLENBQUEsR0FBNEIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxvQkFBbkIsQ0FBQSxDQUE1QixFQTNCQTs7O0VBK0JBLGNBQUEsR0FBaUIsUUFBQSxDQUFFLE9BQUYsQ0FBQTtBQUNqQixRQUFBLGdCQUFBLEVBQUEsZ0JBQUEsRUFBQTtJQUFFLGdCQUFBLEdBQXdCLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDdkMsZ0JBQUEsR0FBd0IsT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUN2QyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQWYsR0FBd0IsUUFBQSxDQUFFLElBQUYsRUFBQSxHQUFRLENBQVIsQ0FBQTthQUFrQixPQUFBLENBQVEsSUFBUixFQUFjLEdBQUEsQ0FBZDtJQUFsQjtJQUN4QixPQUFPLENBQUMsTUFBTSxDQUFDLEtBQWYsR0FBd0IsUUFBQSxDQUFFLElBQUYsRUFBQSxHQUFRLENBQVIsQ0FBQTthQUFrQixPQUFBLENBQVEsSUFBUixFQUFjLEdBQUEsQ0FBZDtJQUFsQjtBQUN4QixXQUFPLFlBQUEsR0FBZSxRQUFBLENBQUEsQ0FBQTtNQUNwQixPQUFPLENBQUMsTUFBTSxDQUFDLEtBQWYsR0FBdUI7TUFDdkIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFmLEdBQXVCO0FBQ3ZCLGFBQU87SUFIYTtFQUxQLEVBL0JqQjs7O0VBMENNLGFBQU4sTUFBQSxXQUFBLENBQUE7O0lBR0UsR0FBSyxDQUFBLENBQUE7QUFDUCxVQUFBLGlCQUFBLEVBQUE7TUFBSSxNQUFBLENBQU8sd0JBQUEsR0FBNEIsQ0FBQSxDQUFBLEdBQUE7ZUFBRyxJQUFDLENBQUEsSUFBRCxDQUFNLDBCQUFOO01BQUgsQ0FBbkM7TUFDQSxNQUFBLENBQU8saUJBQUEsR0FBNEIsQ0FBQSxDQUFBLEdBQUE7ZUFBRyxJQUFDLENBQUEsSUFBRCxDQUFNLHlCQUFOO01BQUgsQ0FBbkM7QUFDQSxhQUFPO0lBSEosQ0FEUDs7O0lBT0UsSUFBTSxDQUFFLFlBQUYsQ0FBQTtBQUNSLFVBQUEsU0FBQSxFQUFBLGNBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsWUFBQSxFQUFBLGFBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBO01BQUksQ0FBQSxDQUFFLFNBQUYsRUFDRSxTQURGLEVBRUUsSUFGRixDQUFBLEdBRWtDLE9BQUEsQ0FBUSxZQUFSLENBRmxDO01BR0EsQ0FBQSxDQUFFLGNBQUYsQ0FBQSxHQUFrQyxJQUFsQyxFQUhKOztNQUtJLEtBQUEsaUJBQUE7O1FBQ0UsS0FBZ0IsSUFBSSxDQUFDLFVBQUwsQ0FBZ0IsWUFBaEIsQ0FBaEI7QUFBQSxtQkFBQTs7UUFDQSxLQUFBLEdBQWMsSUFBSSxTQUFKLENBQWMsR0FBZDtRQUNkLENBQUEsR0FBYyxJQUFJLGNBQUosQ0FBbUIsS0FBbkI7QUFDZDtVQUNFLGFBQUEsR0FBZ0I7VUFDaEIsWUFBQSxHQUFnQixjQUFBLENBQWUsUUFBQSxDQUFFLElBQUYsQ0FBQTttQkFBWSxhQUFhLENBQUMsSUFBZCxDQUFtQixJQUFuQjtVQUFaLENBQWY7VUFDaEIsV0FBQSxHQUFnQixDQUFDLENBQUMsWUFBRixDQUFBLEVBSGxCO1NBQUE7VUFLRSxZQUFBLENBQUEsRUFMRjtTQUhOOztRQVVNLDRCQUFPLFdBQVcsQ0FBRSxpQkFBcEI7VUFDRSxJQUFBLENBQUssV0FBTCxFQUFrQixZQUFsQixFQUFnQyxXQUFoQyxFQURGO1NBVk47Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQk0sY0E1QkY7TUFBQSxDQUxKOztBQW1DSSxhQUFPO0lBcENIOztFQVRSLEVBMUNBOzs7RUEyRkEsVUFBQSxHQUFhLElBQUksVUFBSixDQUFBLEVBM0ZiOzs7RUE4RkEsSUFBRyxNQUFBLEtBQVUsT0FBTyxDQUFDLElBQXJCO0lBQStCLE1BQVMsQ0FBQSxDQUFBLENBQUEsR0FBQTtBQUN4QyxVQUFBO01BQUUsQ0FBQSxDQUFFLGFBQUYsQ0FBQSxHQUFxQixPQUFBLENBQVEsMENBQVIsQ0FBckI7TUFDQSxhQUFBLENBQWMseUJBQWQsRUFERjs7TUFHRSxVQUFVLENBQUMsR0FBWCxDQUFBO0FBQ0EsYUFBTztJQUwrQixDQUFBLElBQXhDOztBQTlGQSIsInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzdHJpY3QnXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdob2xsZXJpdGgtYmVuY2htYXJrcydcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICBsaW1lXG4gIGdvbGRcbiAgcmVkXG4gIGJsdWVcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbiMgV0dVWSAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvd2ViZ3V5J1xuIyBHVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbiMgeyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zaW5nbGUtZmlsZS1tb2R1bGVzJ1xueyB0aW1laXQsICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2JlbmNobWFya2luZygpXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jYXB0dXJlX291dHB1dCA9ICggaGFuZGxlciApIC0+XG4gIG9sZF9zdGRvdXRfd3JpdGUgICAgICA9IHByb2Nlc3Muc3Rkb3V0LndyaXRlXG4gIG9sZF9zdGRlcnJfd3JpdGUgICAgICA9IHByb2Nlc3Muc3RkZXJyLndyaXRlXG4gIHByb2Nlc3Muc3Rkb3V0LndyaXRlICA9ICggdGV4dCwgUC4uLiApIC0+IGhhbmRsZXIgdGV4dCwgUC4uLlxuICBwcm9jZXNzLnN0ZGVyci53cml0ZSAgPSAoIHRleHQsIFAuLi4gKSAtPiBoYW5kbGVyIHRleHQsIFAuLi5cbiAgcmV0dXJuIHJlc2V0X291dHB1dCA9IC0+XG4gICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUgPSBvbGRfc3Rkb3V0X3dyaXRlXG4gICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUgPSBvbGRfc3RkZXJyX3dyaXRlXG4gICAgcmV0dXJuIG51bGxcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jbGFzcyBCZW5jaG1hcmtzXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBydW46IC0+XG4gICAgdGltZWl0IGhvbGxlcml0aF9yZWZlcmVuY2VfMTIwMSAgPSA9PiBAX3J1biAnaG9sbGVyaXRoLXJlZmVyZW5jZS0xMjAxJ1xuICAgIHRpbWVpdCBob2xsZXJpdGhfY3VycmVudCAgICAgICAgID0gPT4gQF9ydW4gJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBfcnVuOiAoIHJlcXVpcmVfcGF0aCApIC0+XG4gICAgeyBpbnRlcm5hbHMsXG4gICAgICBIb2xsZXJpdGgsXG4gICAgICB0ZXN0LCAgICAgICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgcmVxdWlyZV9wYXRoXG4gICAgeyBUZXN0X2hvbGxlcml0aCwgICAgICAgICAgICAgfSA9IHRlc3RcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGZvciBuYW1lLCBjZmcgb2YgaW50ZXJuYWxzXG4gICAgICBjb250aW51ZSB1bmxlc3MgbmFtZS5zdGFydHNXaXRoICdjb25zdGFudHNfJ1xuICAgICAgY29kZWMgICAgICAgPSBuZXcgSG9sbGVyaXRoIGNmZ1xuICAgICAgdCAgICAgICAgICAgPSBuZXcgVGVzdF9ob2xsZXJpdGggY29kZWNcbiAgICAgIHRyeVxuICAgICAgICBzdGRvdXRfYnVmZmVyID0gW11cbiAgICAgICAgcmVzZXRfb3V0cHV0ICA9IGNhcHR1cmVfb3V0cHV0ICggdGV4dCApIC0+IHN0ZG91dF9idWZmZXIucHVzaCB0ZXh0XG4gICAgICAgIHRlc3RfcmVzdWx0ICAgPSB0LnRlc3Rfc29ydGluZygpXG4gICAgICBmaW5hbGx5XG4gICAgICAgIHJlc2V0X291dHB1dCgpXG4gICAgICAgICMgZGVidWcgJ86paGxsdF9fXzEnLCBzdGRvdXRfYnVmZmVyLnNoaWZ0KCkudHJpbUVuZCgpIHdoaWxlIHN0ZG91dF9idWZmZXIubGVuZ3RoID4gMFxuICAgICAgdW5sZXNzIHRlc3RfcmVzdWx0Py5zdWNjZXNzXG4gICAgICAgIHdhcm4gJ86paGxsdF9fXzInLCByZXF1aXJlX3BhdGgsIHRlc3RfcmVzdWx0XG4gICAgICAjIEBlcSAoIM6paGxsdF9fXzMgPSAtPiB0eXBlX29mIHQudGVzdF9zb3J0aW5nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ2Z1bmN0aW9uJ1xuICAgICAgIyBAZXEgKCDOqWhsbHRfX180ID0gLT4gdHlwZV9vZiB0ZXN0X3Jlc3VsdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdwb2QnXG4gICAgICAjIEBlcSAoIM6paGxsdF9fXzUgPSAtPiB0ZXN0X3Jlc3VsdC5zdWNjZXNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgIyBAZXEgKCDOqWhsbHRfX182ID0gLT4gdHlwZV9vZiB0ZXN0X3Jlc3VsdC5wcm9iZV9jb3VudCAgICAgICAgICAgICAgICAgICAgICAgICksICdmbG9hdCdcbiAgICAgICMgQGVxICggzqlobGx0X19fNyA9IC0+IHR5cGVfb2YgdGVzdF9yZXN1bHQuaGl0X2NvdW50ICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnZmxvYXQnXG4gICAgICAjIEBlcSAoIM6paGxsdF9fXzggPSAtPiB0eXBlX29mIHRlc3RfcmVzdWx0Lm1pc3NfY291bnQgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ2Zsb2F0J1xuICAgICAgIyBmb3IgXyBpbiBbIDAgLi4uIHRlc3RfcmVzdWx0LmhpdF9jb3VudCBdXG4gICAgICAjICAgbnVsbFxuICAgICAgIyAgICMgQGVxICggzqlobGx0X19fOSA9IC0+IHRydWUgKSwgdHJ1ZVxuICAgICAgIyBmb3IgXyBpbiBbIDAgLi4uIHRlc3RfcmVzdWx0Lm1pc3NfY291bnQgXVxuICAgICAgIyAgIG51bGxcbiAgICAgICAgIyBAZXEgKCDOqWhsbHRfXzEwID0gLT4gdHJ1ZSApLCBmYWxzZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIGhlbHAgJ86pdmR4X18xMScsIHJlcXVpcmVfcGF0aFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBicmVhayAjICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISFcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5iZW5jaG1hcmtzID0gbmV3IEJlbmNobWFya3MoKVxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICB7IHNob3dfcmVxdWlyZXMsIH0gPSByZXF1aXJlICcuLi8uLi9zbmlwcGV0cy9saWIvZGVtby1zaG93LXJlcXVpcmVzLmpzJ1xuICBzaG93X3JlcXVpcmVzICcuLi8uLi8uLi9hcHBzL2hvbGxlcml0aCdcbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBiZW5jaG1hcmtzLnJ1bigpXG4gIHJldHVybiBudWxsXG5cbiJdfQ==
