(async function() {
  'use strict';
  var FS, GTNG, GUY, PATH, SFMODULES, Test, alert, blue, bold, debug, echo, f, gold, green, grey, help, info, inspect, log, nfa, plain, praise, red, reverse, rpr, tests, urge, warn, whisper, white;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('bricabrac-dbric'));

  ({rpr, inspect, echo, white, green, blue, gold, grey, red, bold, reverse, log} = GUY.trm);

  ({f} = require('../../../apps/effstring'));

  // write                     = ( p ) -> process.stdout.write p
  ({nfa} = require('../../../apps/normalize-function-arguments'));

  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  SFMODULES = require('../../../apps/bricabrac-sfmodules');

  FS = require('node:fs');

  PATH = require('node:path');

  // #===========================================================================================================
  // remove = ( path ) ->
  //   try
  //     FS.unlinkSync path
  //     help 'Ωflrt___1', "removed #{rpr path}"
  //   catch error
  //     throw error unless error.code is 'ENOENT'
  //     urge 'Ωflrt___2', "no such FS object: #{rpr path}"
  //   return null

  //===========================================================================================================
  this.tests = tests = {
    //---------------------------------------------------------------------------------------------------------
    basics: function() {
      var chunk_size, d, i, idx, len, path, pieces, pieces_matcher, ref, result, text_matcher, walk_buffers_with_positions, walk_lines_with_positions, Ωflrt___4, Ωflrt___5;
      ({walk_buffers_with_positions, walk_lines_with_positions} = SFMODULES.unstable.require_fast_linereader());
      //.......................................................................................................
      path = PATH.resolve(__dirname, '../../../assets/bricabrac/fast-linereader/〇一二三四五六七八九.txt');
      text_matcher = FS.readFileSync(path, {
        encoding: 'utf-8'
      });
      pieces = [...(text_matcher.split(/(\r\n|\r|\n)/)), ''];
      pieces_matcher = (() => {
        var R, eol, i, idx, line, lnr, ref;
        R = [];
        lnr = 0;
        for (idx = i = 0, ref = pieces.length; i < ref; idx = i += +2) {
          lnr++;
          [line, eol] = pieces.slice(idx, +(idx + 1) + 1 || 9e9);
          R.push({lnr, line, eol});
        }
        return R;
      })();
      ref = [10, 11, 100];
      //.......................................................................................................
      for (i = 0, len = ref.length; i < len; i++) {
        chunk_size = ref[i];
        echo('—————————————————————————————————————');
        result = '';
        idx = -1;
        for (d of walk_lines_with_positions(path, {chunk_size})) {
          idx++;
          result += d.line + d.eol;
          this.eq((Ωflrt___4 = function() {
            return d;
          }), pieces_matcher[idx]);
        }
        this.eq((Ωflrt___5 = function() {
          return result;
        }), text_matcher);
      }
      // @throws ( Ωflrt___6 = -> esql.unquote_name ''                ), /expected a name/
      //.......................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
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
        show_passes: true,
        report_checks: true
      };
      return (new Test(guytest_cfg)).test({tests});
    })();
  }

  // # ( new Test guytest_cfg ).test { sample_db_with_bsql: tests.sample_db_with_bsql, }
// ( new Test guytest_cfg ).test { udf_functions_with_nsql: tests.udf_functions_with_nsql, }
// ( new Test guytest_cfg ).test { udf_functions_with_bsql: tests.udf_functions_with_bsql, }
// ( new Test guytest_cfg ).test { udf_aggregates_with_bsql: tests.udf_aggregates_with_bsql, }
// ( new Test guytest_cfg ).test { udf_aggregates_with_nsql: tests.udf_aggregates_with_nsql, }
// ( new Test guytest_cfg ).test { udf_table_function_with_bsql: tests.udf_table_function_with_bsql, }
// ( new Test guytest_cfg ).test { file_mirror_as_table_function: tests.file_mirror_as_table_function, }

  // echo 'a\u2028b\nz'

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtZmFzdC1saW5lcmVhZGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxFQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsU0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUE7OztFQUdBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsaUJBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdFLEdBWEYsQ0FBQSxHQVc0QixHQUFHLENBQUMsR0FYaEM7O0VBWUEsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUF6QkE7OztFQTJCQSxDQUFBLENBQUUsR0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSw0Q0FBUixDQUE1Qjs7RUFDQSxJQUFB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PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdicmljYWJyYWMtZGJyaWMnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgZ3JlZW5cbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiMgd3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcbnsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuRlMgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6ZnMnXG5QQVRIICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuXG5cbiMgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4jIHJlbW92ZSA9ICggcGF0aCApIC0+XG4jICAgdHJ5XG4jICAgICBGUy51bmxpbmtTeW5jIHBhdGhcbiMgICAgIGhlbHAgJ86pZmxydF9fXzEnLCBcInJlbW92ZWQgI3tycHIgcGF0aH1cIlxuIyAgIGNhdGNoIGVycm9yXG4jICAgICB0aHJvdyBlcnJvciB1bmxlc3MgZXJyb3IuY29kZSBpcyAnRU5PRU5UJ1xuIyAgICAgdXJnZSAnzqlmbHJ0X19fMicsIFwibm8gc3VjaCBGUyBvYmplY3Q6ICN7cnByIHBhdGh9XCJcbiMgICByZXR1cm4gbnVsbFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRlc3RzID0gdGVzdHMgPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYmFzaWNzOiAtPlxuICAgIHsgd2Fsa19idWZmZXJzX3dpdGhfcG9zaXRpb25zLFxuICAgICAgd2Fsa19saW5lc193aXRoX3Bvc2l0aW9ucywgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2Zhc3RfbGluZXJlYWRlcigpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwYXRoICAgICAgICAgICAgPSBQQVRILnJlc29sdmUgX19kaXJuYW1lLCAnLi4vLi4vLi4vYXNzZXRzL2JyaWNhYnJhYy9mYXN0LWxpbmVyZWFkZXIv44CH5LiA5LqM5LiJ5Zub5LqU5YWt5LiD5YWr5LmdLnR4dCdcbiAgICB0ZXh0X21hdGNoZXIgICAgPSBGUy5yZWFkRmlsZVN5bmMgcGF0aCwgeyBlbmNvZGluZzogJ3V0Zi04JywgfVxuICAgIHBpZWNlcyAgICAgICAgICA9IFsgKCB0ZXh0X21hdGNoZXIuc3BsaXQgLyhcXHJcXG58XFxyfFxcbikvICkuLi4sICcnLCBdXG4gICAgcGllY2VzX21hdGNoZXIgID0gZG8gPT5cbiAgICAgIFIgICA9IFtdXG4gICAgICBsbnIgPSAwXG4gICAgICBmb3IgaWR4IGluIFsgMCAuLi4gcGllY2VzLmxlbmd0aCBdIGJ5ICsyXG4gICAgICAgIGxucisrXG4gICAgICAgIFsgbGluZSwgZW9sLCBdID0gcGllY2VzWyBpZHggLi4gaWR4ICsgMSBdXG4gICAgICAgIFIucHVzaCB7IGxuciwgbGluZSwgZW9sLCB9XG4gICAgICByZXR1cm4gUlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZm9yIGNodW5rX3NpemUgaW4gWyAxMCwgMTEsIDEwMCwgXVxuICAgICAgZWNobyAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUJ1xuICAgICAgcmVzdWx0ICA9ICcnXG4gICAgICBpZHggICAgID0gLTFcbiAgICAgIGZvciBkIGZyb20gd2Fsa19saW5lc193aXRoX3Bvc2l0aW9ucyBwYXRoLCB7IGNodW5rX3NpemUsIH1cbiAgICAgICAgaWR4KytcbiAgICAgICAgcmVzdWx0ICs9IGQubGluZSArIGQuZW9sXG4gICAgICAgIEBlcSAoIM6pZmxydF9fXzQgPSAtPiBkICksIHBpZWNlc19tYXRjaGVyWyBpZHggXVxuICAgICAgQGVxICggzqlmbHJ0X19fNSA9IC0+IHJlc3VsdCApLCB0ZXh0X21hdGNoZXJcbiAgICAjIEB0aHJvd3MgKCDOqWZscnRfX182ID0gLT4gZXNxbC51bnF1b3RlX25hbWUgJycgICAgICAgICAgICAgICAgKSwgL2V4cGVjdGVkIGEgbmFtZS9cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICAjIGRlbW9faW5maW5pdGVfcHJveHkoKVxuICAjIGRlbW9fY29sb3JmdWxfcHJveHkoKVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IHRydWUsIHJlcG9ydF9jaGVja3M6IHRydWUsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB0ZXN0cywgfVxuICAjICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBzYW1wbGVfZGJfd2l0aF9ic3FsOiB0ZXN0cy5zYW1wbGVfZGJfd2l0aF9ic3FsLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB1ZGZfZnVuY3Rpb25zX3dpdGhfbnNxbDogdGVzdHMudWRmX2Z1bmN0aW9uc193aXRoX25zcWwsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHVkZl9mdW5jdGlvbnNfd2l0aF9ic3FsOiB0ZXN0cy51ZGZfZnVuY3Rpb25zX3dpdGhfYnNxbCwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdWRmX2FnZ3JlZ2F0ZXNfd2l0aF9ic3FsOiB0ZXN0cy51ZGZfYWdncmVnYXRlc193aXRoX2JzcWwsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHVkZl9hZ2dyZWdhdGVzX3dpdGhfbnNxbDogdGVzdHMudWRmX2FnZ3JlZ2F0ZXNfd2l0aF9uc3FsLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB1ZGZfdGFibGVfZnVuY3Rpb25fd2l0aF9ic3FsOiB0ZXN0cy51ZGZfdGFibGVfZnVuY3Rpb25fd2l0aF9ic3FsLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBmaWxlX21pcnJvcl9hc190YWJsZV9mdW5jdGlvbjogdGVzdHMuZmlsZV9taXJyb3JfYXNfdGFibGVfZnVuY3Rpb24sIH1cblxuICAjIGVjaG8gJ2FcXHUyMDI4YlxcbnonXG4iXX0=
