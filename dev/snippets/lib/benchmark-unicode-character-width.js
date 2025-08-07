(async function() {
  /*

  ## Applications

  * **RegEx Builder** (example from [Rejigs blog post](https://medium.com/@omarzawahry/rejigs-making-regular-expressions-human-readable-1fad37cb3eae))

  ```java
  var emailRegex =
      Rejigs.Create()
            .AtStart()
            .OneOrMore(r => r.AnyLetterOrDigit().Or().AnyOf("._%+-"))
            .Text("@")
            .OneOrMore(r => r.AnyLetterOrDigit().Or().AnyOf(".-"))
            .Text(".")
            .AnyLetterOrDigit().AtLeast(2)
            .AtEnd()
            .Build();
  ```

  * **HTML/XML Builer**
  * **SQL Builder**
  * **CLI Coloring**
  * syntax for a **Type Checker**

   */
  'use strict';
  var GTNG, GUY, SFMODULES, Test, alert, benchmarks, blue, bold, debug, echo, f, gold, green, grey, help, info, inspect, log, nfa, plain, praise, red, reverse, rpr, urge, warn, whisper, white;

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

  /*

  From [`chalk/strip-ansi`](https://github.com/chalk/strip-ansi) `README.md`:

  > > [!NOTE]
  > >
  > > Node.js has this built-in now with
  > > [`stripVTControlCharacters`](https://nodejs.org/api/util.html#utilstripvtcontrolcharactersstr). The
  > > benefit of this package is consistent behavior across Node.js versions and faster improvements. The
  > > Node.js version is actually based on this package.

  console.log(util.stripVTControlCharacters('\u001B[4mvalue\u001B[0m'))

  Notes:

    * [**`sindresorhus/string-width`**](https://github.com/sindresorhus/string-width) by Sindre Sorhus;
      dependencies include [`mathiasbynens/emoji-regex`](https://github.com/mathiasbynens/emoji-regex) (which
      could be replaced with a smaller library with the same API
      [`slevithan/emoji-regex-xs`](https://github.com/slevithan/emoji-regex-xs)); note the number of
      well-known, trusted authors here that more often than not deliver high-quality software.

      Dependencies:
        * [`mathiasbynens/emoji-regex`](https://github.com/mathiasbynens/emoji-regex)
        * [`komagata/get-east-asian-width`](https://github.com/komagata/eastasianwidth)
        * [`chalk/strip-ansi`](https://github.com/chalk/strip-ansi)
          * [`chalk/ansi-regex`](https://github.com/chalk/ansi-regex)

    * [**`martinheidegger/wcstring`**](https://github.com/martinheidegger/wcstring): does a lot of string
      manipulation stuff that we don't need or plan to implement in a similar but different way; uses `wcsize`
      so presumably also inherits its problems(?)

  Excluded:

    * [**`martinheidegger/wcsize`**](https://github.com/martinheidegger/wcsize): not very well usable in
      modern environments as `wcsize`, according to the docs, "differ[...]s from both [`wcwidth` and
      `visualwidth-js`] by only returning the width of one character (as integer!)", meaning that it cannot,
      by construction, handle composed Latin accented letters, or let alone multi-codepoint emoji. It also
      struggles with Unicode surrogate handling, at least in trying to make sense of them in the `README.md`.

    * [**`tokuhirom/visualwidth-js`**](https://github.com/tokuhirom/visualwidth-js): too old, started ca.
      2011, last commit from ca. 2015

   */
  //===========================================================================================================
  this.benchmarks = benchmarks = {
    //---------------------------------------------------------------------------------------------------------
    fn: function() {
      var _mahe_wcst_get_width/* mycoboco/wcwidth.js */, get_wc_max_line_length, mahe_wcst_get_width/* martinheidegger/wcstring */, myco_wcwi_get_width, probes_and_matchers, siso_stwi_get_width;
      ({
        // { ansi_colors_and_effects: C, } = SFMODULES.require_ansi_colors_and_effects()
        // { Ansi_chunker,               } = SFMODULES.require_ansi_chunker()
        //.......................................................................................................
        default: siso_stwi_get_width
      } = require('string-width'));
      ({
        /* sindresorhus/string-width */default: myco_wcwi_get_width
      } = require('wcwidth.js'));
      _mahe_wcst_get_width = require('wcstring');
      mahe_wcst_get_width = function(text) {
        return (_mahe_wcst_get_width(text)).size();
      };
      ({get_wc_max_line_length} = SFMODULES.unstable.require_command_line_tools());
      //.......................................................................................................
      probes_and_matchers = [['xxx', 3], ['x🙋x', 4], ['x🙋🏽x', 6], ['x쒇x', 4], ['x별x', 4], ['xㅂ ㅕ ㄹx', 10], ['xㅂㅕㄹx', 8], ['xﾲￊﾩx', 5], ['x별Lx', 5], ['xa︠b︡x', 4], ['xa︠b︡x', 4], ['xâx', 3], ['x𓃵x', 3], ['x﷽x', 3], ['b͝a', 2], ['a͠o', 2], ['x͸xx', 4], ['xאבגx', 5], ['x۩۝۞x', 4], ['xདྦོང་x', 5]];
      (() => {        //.......................................................................................................
        // [ ( red 'abc' ), 3, ]
        var error_counts, i, len, matcher, probe, same, same_rpr, w1, w1r, w2, w2r, w3, w3r, w4, w4r;
        error_counts = [0, 0, 0, 0];
        for (i = 0, len = probes_and_matchers.length; i < len; i++) {
          [probe, matcher] = probes_and_matchers[i];
          w1 = siso_stwi_get_width(probe);
          w1r = reverse((w1 === matcher ? green : (function() {
            error_counts[0]++;
            return red;
          })())(f` ${w1}:>3c; `));
          w2 = myco_wcwi_get_width(probe);
          w2r = reverse((w2 === matcher ? green : (function() {
            error_counts[1]++;
            return red;
          })())(f` ${w2}:>3c; `));
          w3 = mahe_wcst_get_width(probe);
          w3r = reverse((w3 === matcher ? green : (function() {
            error_counts[2]++;
            return red;
          })())(f` ${w3}:>3c; `));
          w4 = get_wc_max_line_length(probe);
          w4r = reverse((w4 === matcher ? green : (function() {
            error_counts[3]++;
            return red;
          })())(f` ${w4}:>3c; `));
          same = (((w1 === w2 && w2 === w3) && w3 === w4) && w4 === matcher);
          same_rpr = GUY.trm.reverse(GUY.trm.truth(same));
          if (!same) {
            whisper('Ω___1', f`${same_rpr}:>5c;                               12345678901234567890`);
          }
          help('Ω___2', f`${same_rpr}:>5c; ${matcher}:>4.0f; ${w1r} ${w2r} ${w3r} ${w4r} ${rpr(probe)}`);
        }
        info('Ω___3', f`${''}:>5c; ${''}:>4c; ${error_counts[0]}:>4.0f;  ${error_counts[1]}:>4.0f;  ${error_counts[2]}:>4.0f;  ${error_counts[3]}:>4.0f; `);
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
      return (new Test(guytest_cfg)).test({benchmarks});
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JlbmNobWFyay11bmljb2RlLWNoYXJhY3Rlci13aWR0aC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJHO0VBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFFSDtBQUZHLE1BQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxVQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQTs7O0VBS0gsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQiwwQ0FBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLEtBSEYsRUFJRSxLQUpGLEVBS0UsSUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsR0FSRixFQVNFLElBVEYsRUFVRSxPQVZGLEVBV0UsR0FYRixDQUFBLEdBVzRCLEdBQUcsQ0FBQyxHQVhoQzs7RUFZQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1QixFQTNCRzs7O0VBNkJILENBQUEsQ0FBRSxHQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFR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YUFDZCxDQUFFLElBQUksSUFBSixDQUFTLFdBQVQsQ0FBRixDQUF3QixDQUFDLElBQXpCLENBQThCLENBQUUsVUFBRixDQUE5QjtJQUxzQyxDQUFBLElBQXhDOztBQTFJRyIsInNvdXJjZXNDb250ZW50IjpbIlxuIyMjXG5cblxuIyMgQXBwbGljYXRpb25zXG5cbiogKipSZWdFeCBCdWlsZGVyKiogKGV4YW1wbGUgZnJvbSBbUmVqaWdzIGJsb2cgcG9zdF0oaHR0cHM6Ly9tZWRpdW0uY29tL0BvbWFyemF3YWhyeS9yZWppZ3MtbWFraW5nLXJlZ3VsYXItZXhwcmVzc2lvbnMtaHVtYW4tcmVhZGFibGUtMWZhZDM3Y2IzZWFlKSlcblxuYGBgamF2YVxudmFyIGVtYWlsUmVnZXggPVxuICAgIFJlamlncy5DcmVhdGUoKVxuICAgICAgICAgIC5BdFN0YXJ0KClcbiAgICAgICAgICAuT25lT3JNb3JlKHIgPT4gci5BbnlMZXR0ZXJPckRpZ2l0KCkuT3IoKS5BbnlPZihcIi5fJSstXCIpKVxuICAgICAgICAgIC5UZXh0KFwiQFwiKVxuICAgICAgICAgIC5PbmVPck1vcmUociA9PiByLkFueUxldHRlck9yRGlnaXQoKS5PcigpLkFueU9mKFwiLi1cIikpXG4gICAgICAgICAgLlRleHQoXCIuXCIpXG4gICAgICAgICAgLkFueUxldHRlck9yRGlnaXQoKS5BdExlYXN0KDIpXG4gICAgICAgICAgLkF0RW5kKClcbiAgICAgICAgICAuQnVpbGQoKTtcbmBgYFxuXG4qICoqSFRNTC9YTUwgQnVpbGVyKipcbiogKipTUUwgQnVpbGRlcioqXG4qICoqQ0xJIENvbG9yaW5nKipcbiogc3ludGF4IGZvciBhICoqVHlwZSBDaGVja2VyKipcblxuIyMjXG5cbid1c2Ugc3RyaWN0J1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnYmVuY2htYXJrLXVuaWNvZGUtY2hhcmFjdGVyLXdpZHRoLmNvZmZlZSdcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICB3aGl0ZVxuICBncmVlblxuICBibHVlXG4gIGdvbGRcbiAgZ3JleVxuICByZWRcbiAgYm9sZFxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuIyB3cml0ZSAgICAgICAgICAgICAgICAgICAgID0gKCBwICkgLT4gcHJvY2Vzcy5zdGRvdXQud3JpdGUgcFxueyBuZmEgfSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zaW5nbGUtZmlsZS1tb2R1bGVzJ1xuXG5cblxuXG4jIyNcblxuRnJvbSBbYGNoYWxrL3N0cmlwLWFuc2lgXShodHRwczovL2dpdGh1Yi5jb20vY2hhbGsvc3RyaXAtYW5zaSkgYFJFQURNRS5tZGA6XG5cbj4gPiBbIU5PVEVdXG4+ID5cbj4gPiBOb2RlLmpzIGhhcyB0aGlzIGJ1aWx0LWluIG5vdyB3aXRoXG4+ID4gW2BzdHJpcFZUQ29udHJvbENoYXJhY3RlcnNgXShodHRwczovL25vZGVqcy5vcmcvYXBpL3V0aWwuaHRtbCN1dGlsc3RyaXB2dGNvbnRyb2xjaGFyYWN0ZXJzc3RyKS4gVGhlXG4+ID4gYmVuZWZpdCBvZiB0aGlzIHBhY2thZ2UgaXMgY29uc2lzdGVudCBiZWhhdmlvciBhY3Jvc3MgTm9kZS5qcyB2ZXJzaW9ucyBhbmQgZmFzdGVyIGltcHJvdmVtZW50cy4gVGhlXG4+ID4gTm9kZS5qcyB2ZXJzaW9uIGlzIGFjdHVhbGx5IGJhc2VkIG9uIHRoaXMgcGFja2FnZS5cblxuY29uc29sZS5sb2codXRpbC5zdHJpcFZUQ29udHJvbENoYXJhY3RlcnMoJ1xcdTAwMUJbNG12YWx1ZVxcdTAwMUJbMG0nKSlcblxuTm90ZXM6XG5cbiAgKiBbKipgc2luZHJlc29yaHVzL3N0cmluZy13aWR0aGAqKl0oaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9zdHJpbmctd2lkdGgpIGJ5IFNpbmRyZSBTb3JodXM7XG4gICAgZGVwZW5kZW5jaWVzIGluY2x1ZGUgW2BtYXRoaWFzYnluZW5zL2Vtb2ppLXJlZ2V4YF0oaHR0cHM6Ly9naXRodWIuY29tL21hdGhpYXNieW5lbnMvZW1vamktcmVnZXgpICh3aGljaFxuICAgIGNvdWxkIGJlIHJlcGxhY2VkIHdpdGggYSBzbWFsbGVyIGxpYnJhcnkgd2l0aCB0aGUgc2FtZSBBUElcbiAgICBbYHNsZXZpdGhhbi9lbW9qaS1yZWdleC14c2BdKGh0dHBzOi8vZ2l0aHViLmNvbS9zbGV2aXRoYW4vZW1vamktcmVnZXgteHMpKTsgbm90ZSB0aGUgbnVtYmVyIG9mXG4gICAgd2VsbC1rbm93biwgdHJ1c3RlZCBhdXRob3JzIGhlcmUgdGhhdCBtb3JlIG9mdGVuIHRoYW4gbm90IGRlbGl2ZXIgaGlnaC1xdWFsaXR5IHNvZnR3YXJlLlxuXG4gICAgRGVwZW5kZW5jaWVzOlxuICAgICAgKiBbYG1hdGhpYXNieW5lbnMvZW1vamktcmVnZXhgXShodHRwczovL2dpdGh1Yi5jb20vbWF0aGlhc2J5bmVucy9lbW9qaS1yZWdleClcbiAgICAgICogW2Brb21hZ2F0YS9nZXQtZWFzdC1hc2lhbi13aWR0aGBdKGh0dHBzOi8vZ2l0aHViLmNvbS9rb21hZ2F0YS9lYXN0YXNpYW53aWR0aClcbiAgICAgICogW2BjaGFsay9zdHJpcC1hbnNpYF0oaHR0cHM6Ly9naXRodWIuY29tL2NoYWxrL3N0cmlwLWFuc2kpXG4gICAgICAgICogW2BjaGFsay9hbnNpLXJlZ2V4YF0oaHR0cHM6Ly9naXRodWIuY29tL2NoYWxrL2Fuc2ktcmVnZXgpXG5cbiAgKiBbKipgbWFydGluaGVpZGVnZ2VyL3djc3RyaW5nYCoqXShodHRwczovL2dpdGh1Yi5jb20vbWFydGluaGVpZGVnZ2VyL3djc3RyaW5nKTogZG9lcyBhIGxvdCBvZiBzdHJpbmdcbiAgICBtYW5pcHVsYXRpb24gc3R1ZmYgdGhhdCB3ZSBkb24ndCBuZWVkIG9yIHBsYW4gdG8gaW1wbGVtZW50IGluIGEgc2ltaWxhciBidXQgZGlmZmVyZW50IHdheTsgdXNlcyBgd2NzaXplYFxuICAgIHNvIHByZXN1bWFibHkgYWxzbyBpbmhlcml0cyBpdHMgcHJvYmxlbXMoPylcblxuRXhjbHVkZWQ6XG5cbiAgKiBbKipgbWFydGluaGVpZGVnZ2VyL3djc2l6ZWAqKl0oaHR0cHM6Ly9naXRodWIuY29tL21hcnRpbmhlaWRlZ2dlci93Y3NpemUpOiBub3QgdmVyeSB3ZWxsIHVzYWJsZSBpblxuICAgIG1vZGVybiBlbnZpcm9ubWVudHMgYXMgYHdjc2l6ZWAsIGFjY29yZGluZyB0byB0aGUgZG9jcywgXCJkaWZmZXJbLi4uXXMgZnJvbSBib3RoIFtgd2N3aWR0aGAgYW5kXG4gICAgYHZpc3VhbHdpZHRoLWpzYF0gYnkgb25seSByZXR1cm5pbmcgdGhlIHdpZHRoIG9mIG9uZSBjaGFyYWN0ZXIgKGFzIGludGVnZXIhKVwiLCBtZWFuaW5nIHRoYXQgaXQgY2Fubm90LFxuICAgIGJ5IGNvbnN0cnVjdGlvbiwgaGFuZGxlIGNvbXBvc2VkIExhdGluIGFjY2VudGVkIGxldHRlcnMsIG9yIGxldCBhbG9uZSBtdWx0aS1jb2RlcG9pbnQgZW1vamkuIEl0IGFsc29cbiAgICBzdHJ1Z2dsZXMgd2l0aCBVbmljb2RlIHN1cnJvZ2F0ZSBoYW5kbGluZywgYXQgbGVhc3QgaW4gdHJ5aW5nIHRvIG1ha2Ugc2Vuc2Ugb2YgdGhlbSBpbiB0aGUgYFJFQURNRS5tZGAuXG5cbiAgKiBbKipgdG9rdWhpcm9tL3Zpc3VhbHdpZHRoLWpzYCoqXShodHRwczovL2dpdGh1Yi5jb20vdG9rdWhpcm9tL3Zpc3VhbHdpZHRoLWpzKTogdG9vIG9sZCwgc3RhcnRlZCBjYS5cbiAgICAyMDExLCBsYXN0IGNvbW1pdCBmcm9tIGNhLiAyMDE1XG5cbiMjI1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBiZW5jaG1hcmtzID0gYmVuY2htYXJrcyA9XG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBmbjogLT5cbiAgICAjIHsgYW5zaV9jb2xvcnNfYW5kX2VmZmVjdHM6IEMsIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9hbnNpX2NvbG9yc19hbmRfZWZmZWN0cygpXG4gICAgIyB7IEFuc2lfY2h1bmtlciwgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfYW5zaV9jaHVua2VyKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHsgZGVmYXVsdDogc2lzb19zdHdpX2dldF93aWR0aCwgIH0gID0gcmVxdWlyZSAnc3RyaW5nLXdpZHRoJyAgIyMjIHNpbmRyZXNvcmh1cy9zdHJpbmctd2lkdGggIyMjXG4gICAgeyBkZWZhdWx0OiBteWNvX3djd2lfZ2V0X3dpZHRoLCAgfSAgPSByZXF1aXJlICd3Y3dpZHRoLmpzJyAgICAjIyMgbXljb2JvY28vd2N3aWR0aC5qcyAjIyNcbiAgICBfbWFoZV93Y3N0X2dldF93aWR0aCAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ3djc3RyaW5nJyAgICAgICMjIyBtYXJ0aW5oZWlkZWdnZXIvd2NzdHJpbmcgIyMjXG4gICAgbWFoZV93Y3N0X2dldF93aWR0aCAgICAgICAgICAgICAgICAgPSAoIHRleHQgKSAtPiAoIF9tYWhlX3djc3RfZ2V0X3dpZHRoIHRleHQgKS5zaXplKClcbiAgICB7IGdldF93Y19tYXhfbGluZV9sZW5ndGgsIH0gICAgICAgICA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2NvbW1hbmRfbGluZV90b29scygpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwcm9iZXNfYW5kX21hdGNoZXJzID0gW1xuICAgICAgWyAneHh4JywgMywgXVxuICAgICAgWyAnePCfmYt4JywgNCwgXVxuICAgICAgWyAnePCfmYvwn4+9eCcsIDYsIF1cbiAgICAgIFsgJ3jskod4JywgNCwgXVxuICAgICAgWyAneOuzhHgnLCA0LCBdXG4gICAgICBbICd444WCIOOFlSDjhLl4JywgMTAsIF1cbiAgICAgIFsgJ3jjhYLjhZXjhLl4JywgOCwgXVxuICAgICAgWyAneO++su+/iu++qXgnLCA1LCBdXG4gICAgICBbICd467OETHgnLCA1LCBdXG4gICAgICBbICd4Ye+4oGLvuKF4JywgNCwgXVxuICAgICAgWyAneGHvuKBi77iheCcsIDQsIF1cbiAgICAgIFsgJ3hhzIJ4JywgMywgXVxuICAgICAgWyAnePCTg7V4JywgMywgXVxuICAgICAgWyAneO+3vXgnLCAzLCBdXG4gICAgICBbICdizZ1hJywgMiwgXVxuICAgICAgWyAnYc2gbycsIDIsIF1cbiAgICAgIFsgJ3jNuHh4JywgNCwgXVxuICAgICAgWyAneNeQ15HXkngnLCA1LCBdXG4gICAgICBbICd426nbndueeCcsIDQsIF1cbiAgICAgIFsgJ3jgvZHgvqbgvbzgvYTgvIt4JywgNSwgXVxuICAgICAgIyBbICggcmVkICdhYmMnICksIDMsIF1cbiAgICAgIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBlcnJvcl9jb3VudHMgPSBbIDAsIDAsIDAsIDAsIF1cbiAgICAgIGZvciBbIHByb2JlLCBtYXRjaGVyLCBdIGluIHByb2Jlc19hbmRfbWF0Y2hlcnNcbiAgICAgICAgdzEgICAgICAgID0gc2lzb19zdHdpX2dldF93aWR0aCAgICAgcHJvYmU7IHcxciA9IHJldmVyc2UgKCBpZiB3MSBpcyBtYXRjaGVyIHRoZW4gZ3JlZW4gZWxzZSBkbyAtPiBlcnJvcl9jb3VudHNbIDAgXSsrOyByZWQgKSBmXCIgI3t3MX06PjNjOyBcIlxuICAgICAgICB3MiAgICAgICAgPSBteWNvX3djd2lfZ2V0X3dpZHRoICAgICBwcm9iZTsgdzJyID0gcmV2ZXJzZSAoIGlmIHcyIGlzIG1hdGNoZXIgdGhlbiBncmVlbiBlbHNlIGRvIC0+IGVycm9yX2NvdW50c1sgMSBdKys7IHJlZCApIGZcIiAje3cyfTo+M2M7IFwiXG4gICAgICAgIHczICAgICAgICA9IG1haGVfd2NzdF9nZXRfd2lkdGggICAgIHByb2JlOyB3M3IgPSByZXZlcnNlICggaWYgdzMgaXMgbWF0Y2hlciB0aGVuIGdyZWVuIGVsc2UgZG8gLT4gZXJyb3JfY291bnRzWyAyIF0rKzsgcmVkICkgZlwiICN7dzN9Oj4zYzsgXCJcbiAgICAgICAgdzQgICAgICAgID0gZ2V0X3djX21heF9saW5lX2xlbmd0aCAgcHJvYmU7IHc0ciA9IHJldmVyc2UgKCBpZiB3NCBpcyBtYXRjaGVyIHRoZW4gZ3JlZW4gZWxzZSBkbyAtPiBlcnJvcl9jb3VudHNbIDMgXSsrOyByZWQgKSBmXCIgI3t3NH06PjNjOyBcIlxuICAgICAgICBzYW1lICAgICAgPSB3MSA9PSB3MiA9PSB3MyA9PSB3NCA9PSBtYXRjaGVyXG4gICAgICAgIHNhbWVfcnByICA9IEdVWS50cm0ucmV2ZXJzZSBHVVkudHJtLnRydXRoIHNhbWVcbiAgICAgICAgd2hpc3BlciAnzqlfX18xJywgZlwiI3tzYW1lX3Jwcn06PjVjOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMjM0NTY3ODkwMTIzNDU2Nzg5MFwiIHVubGVzcyBzYW1lXG4gICAgICAgIGhlbHAgICAgJ86pX19fMicsIGZcIiN7c2FtZV9ycHJ9Oj41YzsgI3ttYXRjaGVyfTo+NC4wZjsgI3t3MXJ9ICN7dzJyfSAje3czcn0gI3t3NHJ9ICN7cnByIHByb2JlfVwiXG4gICAgICBpbmZvICAgICfOqV9fXzMnLCBmXCIjeycnfTo+NWM7ICN7Jyd9Oj40YzsgI3tlcnJvcl9jb3VudHNbMF19Oj40LjBmOyAgI3tlcnJvcl9jb3VudHNbMV19Oj40LjBmOyAgI3tlcnJvcl9jb3VudHNbMl19Oj40LjBmOyAgI3tlcnJvcl9jb3VudHNbM119Oj40LjBmOyBcIlxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICAjIGRlbW9faW5maW5pdGVfcHJveHkoKVxuICAjIGRlbW9fY29sb3JmdWxfcHJveHkoKVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGJlbmNobWFya3MsIH1cbiJdfQ==
//# sourceURL=../src/benchmark-unicode-character-width.coffee