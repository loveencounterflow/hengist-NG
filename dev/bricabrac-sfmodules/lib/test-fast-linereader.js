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

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtZmFzdC1saW5lcmVhZGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxFQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsU0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUE7OztFQUdBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsaUJBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdFLEdBWEYsQ0FBQSxHQVc0QixHQUFHLENBQUMsR0FYaEM7O0VBWUEsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUF6QkE7OztFQTJCQSxDQUFBLENBQUUsR0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSw0Q0FBUixDQUE1Qjs7RUFDQSxJQUFB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PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnYnJpY2FicmFjLWRicmljJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHdoaXRlXG4gIGdyZWVuXG4gIGJsdWVcbiAgZ29sZFxuICBncmV5XG4gIHJlZFxuICBib2xkXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG4jIHdyaXRlICAgICAgICAgICAgICAgICAgICAgPSAoIHAgKSAtPiBwcm9jZXNzLnN0ZG91dC53cml0ZSBwXG57IG5mYSB9ICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbkZTICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOmZzJ1xuUEFUSCAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6cGF0aCdcblxuXG4jICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuIyByZW1vdmUgPSAoIHBhdGggKSAtPlxuIyAgIHRyeVxuIyAgICAgRlMudW5saW5rU3luYyBwYXRoXG4jICAgICBoZWxwICfOqWZscnRfX18xJywgXCJyZW1vdmVkICN7cnByIHBhdGh9XCJcbiMgICBjYXRjaCBlcnJvclxuIyAgICAgdGhyb3cgZXJyb3IgdW5sZXNzIGVycm9yLmNvZGUgaXMgJ0VOT0VOVCdcbiMgICAgIHVyZ2UgJ86pZmxydF9fXzInLCBcIm5vIHN1Y2ggRlMgb2JqZWN0OiAje3JwciBwYXRofVwiXG4jICAgcmV0dXJuIG51bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkB0ZXN0cyA9IHRlc3RzID1cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGJhc2ljczogLT5cbiAgICB7IHdhbGtfYnVmZmVyc193aXRoX3Bvc2l0aW9ucyxcbiAgICAgIHdhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnMsIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9mYXN0X2xpbmVyZWFkZXIoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcGF0aCAgICAgICAgICAgID0gUEFUSC5yZXNvbHZlIF9fZGlybmFtZSwgJy4uLy4uLy4uL2Fzc2V0cy9icmljYWJyYWMvZmFzdC1saW5lcmVhZGVyL+OAh+S4gOS6jOS4ieWbm+S6lOWFreS4g+WFq+S5nS50eHQnXG4gICAgdGV4dF9tYXRjaGVyICAgID0gRlMucmVhZEZpbGVTeW5jIHBhdGgsIHsgZW5jb2Rpbmc6ICd1dGYtOCcsIH1cbiAgICBwaWVjZXMgICAgICAgICAgPSBbICggdGV4dF9tYXRjaGVyLnNwbGl0IC8oXFxyXFxufFxccnxcXG4pLyApLi4uLCAnJywgXVxuICAgIHBpZWNlc19tYXRjaGVyICA9IGRvID0+XG4gICAgICBSICAgPSBbXVxuICAgICAgbG5yID0gMFxuICAgICAgZm9yIGlkeCBpbiBbIDAgLi4uIHBpZWNlcy5sZW5ndGggXSBieSArMlxuICAgICAgICBsbnIrK1xuICAgICAgICBbIGxpbmUsIGVvbCwgXSA9IHBpZWNlc1sgaWR4IC4uIGlkeCArIDEgXVxuICAgICAgICBSLnB1c2ggeyBsbnIsIGxpbmUsIGVvbCwgfVxuICAgICAgcmV0dXJuIFJcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGZvciBjaHVua19zaXplIGluIFsgMTAsIDExLCAxMDAsIF1cbiAgICAgIGVjaG8gJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgICAgIHJlc3VsdCAgPSAnJ1xuICAgICAgaWR4ICAgICA9IC0xXG4gICAgICBmb3IgZCBmcm9tIHdhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnMgcGF0aCwgeyBjaHVua19zaXplLCB9XG4gICAgICAgIGlkeCsrXG4gICAgICAgIHJlc3VsdCArPSBkLmxpbmUgKyBkLmVvbFxuICAgICAgICBAZXEgKCDOqWZscnRfX180ID0gLT4gZCApLCBwaWVjZXNfbWF0Y2hlclsgaWR4IF1cbiAgICAgIEBlcSAoIM6pZmxydF9fXzUgPSAtPiByZXN1bHQgKSwgdGV4dF9tYXRjaGVyXG4gICAgIyBAdGhyb3dzICggzqlmbHJ0X19fNiA9IC0+IGVzcWwudW5xdW90ZV9uYW1lICcnICAgICAgICAgICAgICAgICksIC9leHBlY3RlZCBhIG5hbWUvXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgIyBkZW1vX2luZmluaXRlX3Byb3h5KClcbiAgIyBkZW1vX2NvbG9yZnVsX3Byb3h5KClcbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiB0cnVlLCByZXBvcnRfY2hlY2tzOiB0cnVlLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdGVzdHMsIH1cbiAgIyAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgc2FtcGxlX2RiX3dpdGhfYnNxbDogdGVzdHMuc2FtcGxlX2RiX3dpdGhfYnNxbCwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdWRmX2Z1bmN0aW9uc193aXRoX25zcWw6IHRlc3RzLnVkZl9mdW5jdGlvbnNfd2l0aF9uc3FsLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB1ZGZfZnVuY3Rpb25zX3dpdGhfYnNxbDogdGVzdHMudWRmX2Z1bmN0aW9uc193aXRoX2JzcWwsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHVkZl9hZ2dyZWdhdGVzX3dpdGhfYnNxbDogdGVzdHMudWRmX2FnZ3JlZ2F0ZXNfd2l0aF9ic3FsLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB1ZGZfYWdncmVnYXRlc193aXRoX25zcWw6IHRlc3RzLnVkZl9hZ2dyZWdhdGVzX3dpdGhfbnNxbCwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdWRmX3RhYmxlX2Z1bmN0aW9uX3dpdGhfYnNxbDogdGVzdHMudWRmX3RhYmxlX2Z1bmN0aW9uX3dpdGhfYnNxbCwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgZmlsZV9taXJyb3JfYXNfdGFibGVfZnVuY3Rpb246IHRlc3RzLmZpbGVfbWlycm9yX2FzX3RhYmxlX2Z1bmN0aW9uLCB9XG4iXX0=
