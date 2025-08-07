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
    require_ansi_chunker: function() {
      (() => {        // { ansi_colors_and_effects: C, } = SFMODULES.require_ansi_colors_and_effects()
        // { Ansi_chunker,               } = SFMODULES.require_ansi_chunker()
        //.......................................................................................................
        debug('Ωbmwc___1', require('wcwidth.js'));
        /* https://github.com/mycoboco/wcwidth.js */        debug('Ωbmwc___2', require('wcstring'));
/* https://github.com/martinheidegger/wcstring */        return null;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JlbmNobWFyay11bmljb2RlLWNoYXJhY3Rlci13aWR0aC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJHO0VBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFFSDtBQUZHLE1BQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxVQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQTs7O0VBS0gsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQiwwQ0FBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLEtBSEYsRUFJRSxLQUpGLEVBS0UsSUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsR0FSRixFQVNFLElBVEYsRUFVRSxPQVZGLEVBV0UsR0FYRixDQUFBLEdBVzRCLEdBQUcsQ0FBQyxHQVhoQzs7RUFZQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1QixFQTNCRzs7O0VBNkJILENBQUEsQ0FBRSxHQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLDRDQUFSLENBQTVCOztFQUNBLElBQUEsR0FBNEIsT0FBQSxDQUFRLDJCQUFSOztFQUM1QixDQUFBLENBQUUsSUFBRixDQUFBLEdBQTRCLElBQTVCOztFQUNBLFNBQUEsR0FBNEIsT0FBQSxDQUFRLDZDQUFSLEVBaEN6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWtGSCxJQUFDLENBQUEsVUFBRCxHQUFjLFVBQUEsR0FHWixDQUFBOztJQUFBLG9CQUFBLEVBQXNCLFFBQUEsQ0FBQSxDQUFBO01BSWpCLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTs7O1FBQ0QsS0FBQSxDQUFNLFdBQU4sRUFBbUIsT0FBQSxDQUFRLFlBQVIsQ0FBbkI7QUFBd0MsNERBQ3hDLEtBQUEsQ0FBTSxXQUFOLEVBQW1CLE9BQUEsQ0FBUSxVQUFSLENBQW5CO0FBQXNDLGlEQUN0QyxlQUFPO01BSE4sQ0FBQSxJQUhQOztBQVFJLGFBQU87SUFUYTtFQUF0QixFQXJGQzs7O0VBbUdILElBQUcsTUFBQSxLQUFVLE9BQU8sQ0FBQyxJQUFyQjtJQUErQixNQUFTLENBQUEsQ0FBQSxDQUFBLEdBQUE7QUFDeEMsVUFBQSxXQUFBOzs7TUFFRSxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLEtBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLElBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7YUFDZCxDQUFFLElBQUksSUFBSixDQUFTLFdBQVQsQ0FBRixDQUF3QixDQUFDLElBQXpCLENBQThCLENBQUUsVUFBRixDQUE5QjtJQUxzQyxDQUFBLElBQXhDOztBQW5HRyIsInNvdXJjZXNDb250ZW50IjpbIlxuIyMjXG5cblxuIyMgQXBwbGljYXRpb25zXG5cbiogKipSZWdFeCBCdWlsZGVyKiogKGV4YW1wbGUgZnJvbSBbUmVqaWdzIGJsb2cgcG9zdF0oaHR0cHM6Ly9tZWRpdW0uY29tL0BvbWFyemF3YWhyeS9yZWppZ3MtbWFraW5nLXJlZ3VsYXItZXhwcmVzc2lvbnMtaHVtYW4tcmVhZGFibGUtMWZhZDM3Y2IzZWFlKSlcblxuYGBgamF2YVxudmFyIGVtYWlsUmVnZXggPVxuICAgIFJlamlncy5DcmVhdGUoKVxuICAgICAgICAgIC5BdFN0YXJ0KClcbiAgICAgICAgICAuT25lT3JNb3JlKHIgPT4gci5BbnlMZXR0ZXJPckRpZ2l0KCkuT3IoKS5BbnlPZihcIi5fJSstXCIpKVxuICAgICAgICAgIC5UZXh0KFwiQFwiKVxuICAgICAgICAgIC5PbmVPck1vcmUociA9PiByLkFueUxldHRlck9yRGlnaXQoKS5PcigpLkFueU9mKFwiLi1cIikpXG4gICAgICAgICAgLlRleHQoXCIuXCIpXG4gICAgICAgICAgLkFueUxldHRlck9yRGlnaXQoKS5BdExlYXN0KDIpXG4gICAgICAgICAgLkF0RW5kKClcbiAgICAgICAgICAuQnVpbGQoKTtcbmBgYFxuXG4qICoqSFRNTC9YTUwgQnVpbGVyKipcbiogKipTUUwgQnVpbGRlcioqXG4qICoqQ0xJIENvbG9yaW5nKipcbiogc3ludGF4IGZvciBhICoqVHlwZSBDaGVja2VyKipcblxuIyMjXG5cbid1c2Ugc3RyaWN0J1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnYmVuY2htYXJrLXVuaWNvZGUtY2hhcmFjdGVyLXdpZHRoLmNvZmZlZSdcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICB3aGl0ZVxuICBncmVlblxuICBibHVlXG4gIGdvbGRcbiAgZ3JleVxuICByZWRcbiAgYm9sZFxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuIyB3cml0ZSAgICAgICAgICAgICAgICAgICAgID0gKCBwICkgLT4gcHJvY2Vzcy5zdGRvdXQud3JpdGUgcFxueyBuZmEgfSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zaW5nbGUtZmlsZS1tb2R1bGVzJ1xuXG5cblxuXG4jIyNcblxuRnJvbSBbYGNoYWxrL3N0cmlwLWFuc2lgXShodHRwczovL2dpdGh1Yi5jb20vY2hhbGsvc3RyaXAtYW5zaSkgYFJFQURNRS5tZGA6XG5cbj4gPiBbIU5PVEVdXG4+ID5cbj4gPiBOb2RlLmpzIGhhcyB0aGlzIGJ1aWx0LWluIG5vdyB3aXRoXG4+ID4gW2BzdHJpcFZUQ29udHJvbENoYXJhY3RlcnNgXShodHRwczovL25vZGVqcy5vcmcvYXBpL3V0aWwuaHRtbCN1dGlsc3RyaXB2dGNvbnRyb2xjaGFyYWN0ZXJzc3RyKS4gVGhlXG4+ID4gYmVuZWZpdCBvZiB0aGlzIHBhY2thZ2UgaXMgY29uc2lzdGVudCBiZWhhdmlvciBhY3Jvc3MgTm9kZS5qcyB2ZXJzaW9ucyBhbmQgZmFzdGVyIGltcHJvdmVtZW50cy4gVGhlXG4+ID4gTm9kZS5qcyB2ZXJzaW9uIGlzIGFjdHVhbGx5IGJhc2VkIG9uIHRoaXMgcGFja2FnZS5cblxuY29uc29sZS5sb2codXRpbC5zdHJpcFZUQ29udHJvbENoYXJhY3RlcnMoJ1xcdTAwMUJbNG12YWx1ZVxcdTAwMUJbMG0nKSlcblxuTm90ZXM6XG5cbiAgKiBbKipgc2luZHJlc29yaHVzL3N0cmluZy13aWR0aGAqKl0oaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9zdHJpbmctd2lkdGgpIGJ5IFNpbmRyZSBTb3JodXM7XG4gICAgZGVwZW5kZW5jaWVzIGluY2x1ZGUgW2BtYXRoaWFzYnluZW5zL2Vtb2ppLXJlZ2V4YF0oaHR0cHM6Ly9naXRodWIuY29tL21hdGhpYXNieW5lbnMvZW1vamktcmVnZXgpICh3aGljaFxuICAgIGNvdWxkIGJlIHJlcGxhY2VkIHdpdGggYSBzbWFsbGVyIGxpYnJhcnkgd2l0aCB0aGUgc2FtZSBBUElcbiAgICBbYHNsZXZpdGhhbi9lbW9qaS1yZWdleC14c2BdKGh0dHBzOi8vZ2l0aHViLmNvbS9zbGV2aXRoYW4vZW1vamktcmVnZXgteHMpKTsgbm90ZSB0aGUgbnVtYmVyIG9mXG4gICAgd2VsbC1rbm93biwgdHJ1c3RlZCBhdXRob3JzIGhlcmUgdGhhdCBtb3JlIG9mdGVuIHRoYW4gbm90IGRlbGl2ZXIgaGlnaC1xdWFsaXR5IHNvZnR3YXJlLlxuXG4gICAgRGVwZW5kZW5jaWVzOlxuICAgICAgKiBbYG1hdGhpYXNieW5lbnMvZW1vamktcmVnZXhgXShodHRwczovL2dpdGh1Yi5jb20vbWF0aGlhc2J5bmVucy9lbW9qaS1yZWdleClcbiAgICAgICogW2Brb21hZ2F0YS9nZXQtZWFzdC1hc2lhbi13aWR0aGBdKGh0dHBzOi8vZ2l0aHViLmNvbS9rb21hZ2F0YS9lYXN0YXNpYW53aWR0aClcbiAgICAgICogW2BjaGFsay9zdHJpcC1hbnNpYF0oaHR0cHM6Ly9naXRodWIuY29tL2NoYWxrL3N0cmlwLWFuc2kpXG4gICAgICAgICogW2BjaGFsay9hbnNpLXJlZ2V4YF0oaHR0cHM6Ly9naXRodWIuY29tL2NoYWxrL2Fuc2ktcmVnZXgpXG5cbiAgKiBbKipgbWFydGluaGVpZGVnZ2VyL3djc3RyaW5nYCoqXShodHRwczovL2dpdGh1Yi5jb20vbWFydGluaGVpZGVnZ2VyL3djc3RyaW5nKTogZG9lcyBhIGxvdCBvZiBzdHJpbmdcbiAgICBtYW5pcHVsYXRpb24gc3R1ZmYgdGhhdCB3ZSBkb24ndCBuZWVkIG9yIHBsYW4gdG8gaW1wbGVtZW50IGluIGEgc2ltaWxhciBidXQgZGlmZmVyZW50IHdheTsgdXNlcyBgd2NzaXplYFxuICAgIHNvIHByZXN1bWFibHkgYWxzbyBpbmhlcml0cyBpdHMgcHJvYmxlbXMoPylcblxuRXhjbHVkZWQ6XG5cbiAgKiBbKipgbWFydGluaGVpZGVnZ2VyL3djc2l6ZWAqKl0oaHR0cHM6Ly9naXRodWIuY29tL21hcnRpbmhlaWRlZ2dlci93Y3NpemUpOiBub3QgdmVyeSB3ZWxsIHVzYWJsZSBpblxuICAgIG1vZGVybiBlbnZpcm9ubWVudHMgYXMgYHdjc2l6ZWAsIGFjY29yZGluZyB0byB0aGUgZG9jcywgXCJkaWZmZXJbLi4uXXMgZnJvbSBib3RoIFtgd2N3aWR0aGAgYW5kXG4gICAgYHZpc3VhbHdpZHRoLWpzYF0gYnkgb25seSByZXR1cm5pbmcgdGhlIHdpZHRoIG9mIG9uZSBjaGFyYWN0ZXIgKGFzIGludGVnZXIhKVwiLCBtZWFuaW5nIHRoYXQgaXQgY2Fubm90LFxuICAgIGJ5IGNvbnN0cnVjdGlvbiwgaGFuZGxlIGNvbXBvc2VkIExhdGluIGFjY2VudGVkIGxldHRlcnMsIG9yIGxldCBhbG9uZSBtdWx0aS1jb2RlcG9pbnQgZW1vamkuIEl0IGFsc29cbiAgICBzdHJ1Z2dsZXMgd2l0aCBVbmljb2RlIHN1cnJvZ2F0ZSBoYW5kbGluZywgYXQgbGVhc3QgaW4gdHJ5aW5nIHRvIG1ha2Ugc2Vuc2Ugb2YgdGhlbSBpbiB0aGUgYFJFQURNRS5tZGAuXG5cbiAgKiBbKipgdG9rdWhpcm9tL3Zpc3VhbHdpZHRoLWpzYCoqXShodHRwczovL2dpdGh1Yi5jb20vdG9rdWhpcm9tL3Zpc3VhbHdpZHRoLWpzKTogdG9vIG9sZCwgc3RhcnRlZCBjYS5cbiAgICAyMDExLCBsYXN0IGNvbW1pdCBmcm9tIGNhLiAyMDE1XG5cbiMjI1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBiZW5jaG1hcmtzID0gYmVuY2htYXJrcyA9XG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZXF1aXJlX2Fuc2lfY2h1bmtlcjogLT5cbiAgICAjIHsgYW5zaV9jb2xvcnNfYW5kX2VmZmVjdHM6IEMsIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9hbnNpX2NvbG9yc19hbmRfZWZmZWN0cygpXG4gICAgIyB7IEFuc2lfY2h1bmtlciwgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfYW5zaV9jaHVua2VyKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBkZWJ1ZyAnzqlibXdjX19fMScsIHJlcXVpcmUgJ3djd2lkdGguanMnICMjIyBodHRwczovL2dpdGh1Yi5jb20vbXljb2JvY28vd2N3aWR0aC5qcyAjIyNcbiAgICAgIGRlYnVnICfOqWJtd2NfX18yJywgcmVxdWlyZSAnd2NzdHJpbmcnICMjIyBodHRwczovL2dpdGh1Yi5jb20vbWFydGluaGVpZGVnZ2VyL3djc3RyaW5nICMjI1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICAjIGRlbW9faW5maW5pdGVfcHJveHkoKVxuICAjIGRlbW9fY29sb3JmdWxfcHJveHkoKVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGJlbmNobWFya3MsIH1cbiJdfQ==
//# sourceURL=../src/benchmark-unicode-character-width.coffee