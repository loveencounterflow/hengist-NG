(async function() {
  'use strict';
  var Benchmarker, Benchmarks, GUY, PATH, SFMODULES, alert, benchmarks, blue, debug, echo, f, gold, help, info, inspect, lime, log, plain, praise, red, reverse, rpr, timeit, urge, warn, whisper, with_capture_output;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('hollerith-benchmarks'));

  ({rpr, inspect, echo, lime, gold, red, blue, reverse, log} = GUY.trm);

  //-----------------------------------------------------------------------------------------------------------
  PATH = require('node:path');

  // WGUY                      = require '../../../apps/webguy'
  // GTNG                      = require '../../../apps/guy-test-NG'
  // { Test                  } = GTNG
  ({f} = require('../../../apps/effstring'));

  SFMODULES = require('../../../apps/bricabrac-sfmodules');

  ({Benchmarker, timeit} = SFMODULES.unstable.require_benchmarking());

  ({with_capture_output} = SFMODULES.unstable.require_capture_output());

  //===========================================================================================================
  Benchmarks = class Benchmarks {
    //---------------------------------------------------------------------------------------------------------
    run() {
      this.benchmarker = new Benchmarker();
      this._run('hollerith-reference-1201');
      this._run('../../../apps/hollerith');
      help('Ωhllt___2', this.benchmarke.rget_averages_by_brands());
      help('Ωhllt___3', this.benchmarke.rget_averages_by_tasks());
      return null;
    }

    //---------------------------------------------------------------------------------------------------------
    _run(require_path) {
      var Hollerith, Test_hollerith, brand, cfg, codec, internals, name, output, output_handler, t, task, test, test_result;
      ({internals, Hollerith, test} = require(require_path));
      ({Test_hollerith} = test);
      //.......................................................................................................
      brand = PATH.basename(require_path);
      for (name in internals) {
        cfg = internals[name];
        if (!name.startsWith('constants_')) {
          continue;
        }
        codec = new Hollerith(cfg);
        t = new Test_hollerith(codec);
        task = name.replace(/^constants_/g, '');
        output = '';
        output_handler = function(text) {
          return output += text;
        };
        test_result = this.benchmarker.timeit(brand, task, () => {
          return with_capture_output(output_handler, () => {
            return t.test_sorting();
          });
        });
        if (!(test_result != null ? test_result.success : void 0)) {
          warn('Ωhllt___1', require_path, test_result);
        }
      }
      //.......................................................................................................
      return null;
    }

  };

  //===========================================================================================================
  benchmarks = new Benchmarks();

  //===========================================================================================================
  this.run = function() {
    var show_requires;
    ({show_requires} = require('../../snippets/lib/demo-show-requires.js'));
    show_requires('../../../apps/hollerith');
    //---------------------------------------------------------------------------------------------------------
    benchmarks.run();
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (async() => {
      return (await this.run());
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JlbmNobWFya3MuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQUE7QUFBQSxNQUFBLFdBQUEsRUFBQSxVQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxTQUFBLEVBQUEsS0FBQSxFQUFBLFVBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxNQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsbUJBQUE7OztFQUdBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0Isc0JBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsSUFKRixFQUtFLEdBTEYsRUFNRSxJQU5GLEVBT0UsT0FQRixFQVFFLEdBUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FSaEMsRUFiQTs7O0VBdUJBLElBQUEsR0FBNEIsT0FBQSxDQUFRLFdBQVIsRUF2QjVCOzs7OztFQTJCQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1Qjs7RUFDQSxTQUFBLEdBQTRCLE9BQUEsQ0FBUSxtQ0FBUjs7RUFDNUIsQ0FBQSxDQUFFLFdBQUYsRUFDRSxNQURGLENBQUEsR0FDNEIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxvQkFBbkIsQ0FBQSxDQUQ1Qjs7RUFFQSxDQUFBLENBQUUsbUJBQUYsQ0FBQSxHQUE0QixTQUFTLENBQUMsUUFBUSxDQUFDLHNCQUFuQixDQUFBLENBQTVCLEVBL0JBOzs7RUFtQ00sYUFBTixNQUFBLFdBQUEsQ0FBQTs7SUFHRSxHQUFLLENBQUEsQ0FBQTtNQUNILElBQUMsQ0FBQSxXQUFELEdBQWUsSUFBSSxXQUFKLENBQUE7TUFDZixJQUFDLENBQUEsSUFBRCxDQUFNLDBCQUFOO01BQ0EsSUFBQyxDQUFBLElBQUQsQ0FBTSx5QkFBTjtNQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLElBQUMsQ0FBQSxVQUFVLENBQUMsdUJBQVosQ0FBQSxDQUFsQjtNQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLElBQUMsQ0FBQSxVQUFVLENBQUMsc0JBQVosQ0FBQSxDQUFsQjtBQUNBLGFBQU87SUFOSixDQURQOzs7SUFVRSxJQUFNLENBQUUsWUFBRixDQUFBO0FBQ1IsVUFBQSxTQUFBLEVBQUEsY0FBQSxFQUFBLEtBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsTUFBQSxFQUFBLGNBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQTtNQUFJLENBQUEsQ0FBRSxTQUFGLEVBQ0UsU0FERixFQUVFLElBRkYsQ0FBQSxHQUVrQyxPQUFBLENBQVEsWUFBUixDQUZsQztNQUdBLENBQUEsQ0FBRSxjQUFGLENBQUEsR0FBa0MsSUFBbEMsRUFISjs7TUFLSSxLQUFBLEdBQVEsSUFBSSxDQUFDLFFBQUwsQ0FBYyxZQUFkO01BQ1IsS0FBQSxpQkFBQTs7UUFDRSxLQUFnQixJQUFJLENBQUMsVUFBTCxDQUFnQixZQUFoQixDQUFoQjtBQUFBLG1CQUFBOztRQUNBLEtBQUEsR0FBa0IsSUFBSSxTQUFKLENBQWMsR0FBZDtRQUNsQixDQUFBLEdBQWtCLElBQUksY0FBSixDQUFtQixLQUFuQjtRQUNsQixJQUFBLEdBQWtCLElBQUksQ0FBQyxPQUFMLENBQWEsY0FBYixFQUE2QixFQUE3QjtRQUNsQixNQUFBLEdBQWtCO1FBQ2xCLGNBQUEsR0FBa0IsUUFBQSxDQUFFLElBQUYsQ0FBQTtpQkFBWSxNQUFBLElBQVU7UUFBdEI7UUFDbEIsV0FBQSxHQUFrQixJQUFDLENBQUEsV0FBVyxDQUFDLE1BQWIsQ0FBb0IsS0FBcEIsRUFBMkIsSUFBM0IsRUFBaUMsQ0FBQSxDQUFBLEdBQUE7aUJBQ2pELG1CQUFBLENBQW9CLGNBQXBCLEVBQW9DLENBQUEsQ0FBQSxHQUFBO21CQUFHLENBQUMsQ0FBQyxZQUFGLENBQUE7VUFBSCxDQUFwQztRQURpRCxDQUFqQztRQUVsQiw0QkFBTyxXQUFXLENBQUUsaUJBQXBCO1VBQ0UsSUFBQSxDQUFLLFdBQUwsRUFBa0IsWUFBbEIsRUFBZ0MsV0FBaEMsRUFERjs7TUFURixDQU5KOztBQWtCSSxhQUFPO0lBbkJIOztFQVpSLEVBbkNBOzs7RUFzRUEsVUFBQSxHQUFhLElBQUksVUFBSixDQUFBLEVBdEViOzs7RUF5RUEsSUFBQyxDQUFBLEdBQUQsR0FBTyxRQUFBLENBQUEsQ0FBQTtBQUNQLFFBQUE7SUFBRSxDQUFBLENBQUUsYUFBRixDQUFBLEdBQXFCLE9BQUEsQ0FBUSwwQ0FBUixDQUFyQjtJQUNBLGFBQUEsQ0FBYyx5QkFBZCxFQURGOztJQUdFLFVBQVUsQ0FBQyxHQUFYLENBQUE7QUFDQSxXQUFPO0VBTEYsRUF6RVA7OztFQWlGQSxJQUFHLE1BQUEsS0FBVSxPQUFPLENBQUMsSUFBckI7SUFBK0IsTUFBUyxDQUFBLEtBQUEsQ0FBQSxDQUFBLEdBQUE7YUFBRyxDQUFBLE1BQU0sSUFBQyxDQUFBLEdBQUQsQ0FBQSxDQUFOO0lBQUgsQ0FBQSxJQUF4Qzs7QUFqRkEiLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc3RyaWN0J1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnaG9sbGVyaXRoLWJlbmNobWFya3MnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgbGltZVxuICBnb2xkXG4gIHJlZFxuICBibHVlXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG4jLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblBBVEggICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG4jIFdHVVkgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL3dlYmd1eSdcbiMgR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG4jIHsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xueyBCZW5jaG1hcmtlcixcbiAgdGltZWl0LCAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9iZW5jaG1hcmtpbmcoKVxueyB3aXRoX2NhcHR1cmVfb3V0cHV0LCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2NhcHR1cmVfb3V0cHV0KClcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmNsYXNzIEJlbmNobWFya3NcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJ1bjogLT5cbiAgICBAYmVuY2htYXJrZXIgPSBuZXcgQmVuY2htYXJrZXIoKVxuICAgIEBfcnVuICdob2xsZXJpdGgtcmVmZXJlbmNlLTEyMDEnXG4gICAgQF9ydW4gJy4uLy4uLy4uL2FwcHMvaG9sbGVyaXRoJ1xuICAgIGhlbHAgJ86paGxsdF9fXzInLCBAYmVuY2htYXJrZS5yZ2V0X2F2ZXJhZ2VzX2J5X2JyYW5kcygpXG4gICAgaGVscCAnzqlobGx0X19fMycsIEBiZW5jaG1hcmtlLnJnZXRfYXZlcmFnZXNfYnlfdGFza3MoKVxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBfcnVuOiAoIHJlcXVpcmVfcGF0aCApIC0+XG4gICAgeyBpbnRlcm5hbHMsXG4gICAgICBIb2xsZXJpdGgsXG4gICAgICB0ZXN0LCAgICAgICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgcmVxdWlyZV9wYXRoXG4gICAgeyBUZXN0X2hvbGxlcml0aCwgICAgICAgICAgICAgfSA9IHRlc3RcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGJyYW5kID0gUEFUSC5iYXNlbmFtZSByZXF1aXJlX3BhdGhcbiAgICBmb3IgbmFtZSwgY2ZnIG9mIGludGVybmFsc1xuICAgICAgY29udGludWUgdW5sZXNzIG5hbWUuc3RhcnRzV2l0aCAnY29uc3RhbnRzXydcbiAgICAgIGNvZGVjICAgICAgICAgICA9IG5ldyBIb2xsZXJpdGggY2ZnXG4gICAgICB0ICAgICAgICAgICAgICAgPSBuZXcgVGVzdF9ob2xsZXJpdGggY29kZWNcbiAgICAgIHRhc2sgICAgICAgICAgICA9IG5hbWUucmVwbGFjZSAvXmNvbnN0YW50c18vZywgJydcbiAgICAgIG91dHB1dCAgICAgICAgICA9ICcnXG4gICAgICBvdXRwdXRfaGFuZGxlciAgPSAoIHRleHQgKSAtPiBvdXRwdXQgKz0gdGV4dFxuICAgICAgdGVzdF9yZXN1bHQgICAgID0gQGJlbmNobWFya2VyLnRpbWVpdCBicmFuZCwgdGFzaywgPT5cbiAgICAgICAgd2l0aF9jYXB0dXJlX291dHB1dCBvdXRwdXRfaGFuZGxlciwgPT4gdC50ZXN0X3NvcnRpbmcoKVxuICAgICAgdW5sZXNzIHRlc3RfcmVzdWx0Py5zdWNjZXNzXG4gICAgICAgIHdhcm4gJ86paGxsdF9fXzEnLCByZXF1aXJlX3BhdGgsIHRlc3RfcmVzdWx0XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuYmVuY2htYXJrcyA9IG5ldyBCZW5jaG1hcmtzKClcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AcnVuID0gLT5cbiAgeyBzaG93X3JlcXVpcmVzLCB9ID0gcmVxdWlyZSAnLi4vLi4vc25pcHBldHMvbGliL2RlbW8tc2hvdy1yZXF1aXJlcy5qcydcbiAgc2hvd19yZXF1aXJlcyAnLi4vLi4vLi4vYXBwcy9ob2xsZXJpdGgnXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYmVuY2htYXJrcy5ydW4oKVxuICByZXR1cm4gbnVsbFxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PiBhd2FpdCBAcnVuKClcblxuIl19
