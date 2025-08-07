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
      (() => {        //.......................................................................................................
        var _, bigint_from_hrtime, fn, i, j, len, matcher, name, participants, probe, t0, t1, w1;
        bigint_from_hrtime = function([s, ns]) {
          return (BigInt(s)) * 1_000_000_000n + (BigInt(ns));
        };
        participants = {
          siso_stwi: siso_stwi_get_width,
          myco_wcwi: myco_wcwi_get_width,
          mahe_wcst: mahe_wcst_get_width
        };
// wc_max_ll:  get_wc_max_line_length
        for (name in participants) {
          fn = participants[name];
          t0 = bigint_from_hrtime(process.hrtime());
          console.time(name);
          for (_ = i = 0; i <= 10000; _ = ++i) {
            for (j = 0, len = probes_and_matchers.length; j < len; j++) {
              [probe, matcher] = probes_and_matchers[j];
              w1 = fn(probe);
            }
          }
          // console.timeLog name
          console.timeEnd(name);
          t1 = bigint_from_hrtime(process.hrtime());
          debug('Ω___6', name, t1 - t0);
        }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JlbmNobWFyay11bmljb2RlLWNoYXJhY3Rlci13aWR0aC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJHO0VBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFFSDtBQUZHLE1BQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxVQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQTs7O0VBS0gsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQiwwQ0FBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLEtBSEYsRUFJRSxLQUpGLEVBS0UsSUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsR0FSRixFQVNFLElBVEYsRUFVRSxPQVZGLEVBV0UsR0FYRixDQUFBLEdBVzRCLEdBQUcsQ0FBQyxHQVhoQzs7RUFZQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1QixFQTNCRzs7O0VBNkJILENBQUEsQ0FBRSxHQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFR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KiAqKlJlZ0V4IEJ1aWxkZXIqKiAoZXhhbXBsZSBmcm9tIFtSZWppZ3MgYmxvZyBwb3N0XShodHRwczovL21lZGl1bS5jb20vQG9tYXJ6YXdhaHJ5L3Jlamlncy1tYWtpbmctcmVndWxhci1leHByZXNzaW9ucy1odW1hbi1yZWFkYWJsZS0xZmFkMzdjYjNlYWUpKVxuXG5gYGBqYXZhXG52YXIgZW1haWxSZWdleCA9XG4gICAgUmVqaWdzLkNyZWF0ZSgpXG4gICAgICAgICAgLkF0U3RhcnQoKVxuICAgICAgICAgIC5PbmVPck1vcmUociA9PiByLkFueUxldHRlck9yRGlnaXQoKS5PcigpLkFueU9mKFwiLl8lKy1cIikpXG4gICAgICAgICAgLlRleHQoXCJAXCIpXG4gICAgICAgICAgLk9uZU9yTW9yZShyID0+IHIuQW55TGV0dGVyT3JEaWdpdCgpLk9yKCkuQW55T2YoXCIuLVwiKSlcbiAgICAgICAgICAuVGV4dChcIi5cIilcbiAgICAgICAgICAuQW55TGV0dGVyT3JEaWdpdCgpLkF0TGVhc3QoMilcbiAgICAgICAgICAuQXRFbmQoKVxuICAgICAgICAgIC5CdWlsZCgpO1xuYGBgXG5cbiogKipIVE1ML1hNTCBCdWlsZXIqKlxuKiAqKlNRTCBCdWlsZGVyKipcbiogKipDTEkgQ29sb3JpbmcqKlxuKiBzeW50YXggZm9yIGEgKipUeXBlIENoZWNrZXIqKlxuXG4jIyNcblxuJ3VzZSBzdHJpY3QnXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdiZW5jaG1hcmstdW5pY29kZS1jaGFyYWN0ZXItd2lkdGguY29mZmVlJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHdoaXRlXG4gIGdyZWVuXG4gIGJsdWVcbiAgZ29sZFxuICBncmV5XG4gIHJlZFxuICBib2xkXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG4jIHdyaXRlICAgICAgICAgICAgICAgICAgICAgPSAoIHAgKSAtPiBwcm9jZXNzLnN0ZG91dC53cml0ZSBwXG57IG5mYSB9ICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNpbmdsZS1maWxlLW1vZHVsZXMnXG5cblxuXG5cbiMjI1xuXG5Gcm9tIFtgY2hhbGsvc3RyaXAtYW5zaWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFsay9zdHJpcC1hbnNpKSBgUkVBRE1FLm1kYDpcblxuPiA+IFshTk9URV1cbj4gPlxuPiA+IE5vZGUuanMgaGFzIHRoaXMgYnVpbHQtaW4gbm93IHdpdGhcbj4gPiBbYHN0cmlwVlRDb250cm9sQ2hhcmFjdGVyc2BdKGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvdXRpbC5odG1sI3V0aWxzdHJpcHZ0Y29udHJvbGNoYXJhY3RlcnNzdHIpLiBUaGVcbj4gPiBiZW5lZml0IG9mIHRoaXMgcGFja2FnZSBpcyBjb25zaXN0ZW50IGJlaGF2aW9yIGFjcm9zcyBOb2RlLmpzIHZlcnNpb25zIGFuZCBmYXN0ZXIgaW1wcm92ZW1lbnRzLiBUaGVcbj4gPiBOb2RlLmpzIHZlcnNpb24gaXMgYWN0dWFsbHkgYmFzZWQgb24gdGhpcyBwYWNrYWdlLlxuXG5jb25zb2xlLmxvZyh1dGlsLnN0cmlwVlRDb250cm9sQ2hhcmFjdGVycygnXFx1MDAxQls0bXZhbHVlXFx1MDAxQlswbScpKVxuXG5Ob3RlczpcblxuICAqIFsqKmBzaW5kcmVzb3JodXMvc3RyaW5nLXdpZHRoYCoqXShodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL3N0cmluZy13aWR0aCkgYnkgU2luZHJlIFNvcmh1cztcbiAgICBkZXBlbmRlbmNpZXMgaW5jbHVkZSBbYG1hdGhpYXNieW5lbnMvZW1vamktcmVnZXhgXShodHRwczovL2dpdGh1Yi5jb20vbWF0aGlhc2J5bmVucy9lbW9qaS1yZWdleCkgKHdoaWNoXG4gICAgY291bGQgYmUgcmVwbGFjZWQgd2l0aCBhIHNtYWxsZXIgbGlicmFyeSB3aXRoIHRoZSBzYW1lIEFQSVxuICAgIFtgc2xldml0aGFuL2Vtb2ppLXJlZ2V4LXhzYF0oaHR0cHM6Ly9naXRodWIuY29tL3NsZXZpdGhhbi9lbW9qaS1yZWdleC14cykpOyBub3RlIHRoZSBudW1iZXIgb2ZcbiAgICB3ZWxsLWtub3duLCB0cnVzdGVkIGF1dGhvcnMgaGVyZSB0aGF0IG1vcmUgb2Z0ZW4gdGhhbiBub3QgZGVsaXZlciBoaWdoLXF1YWxpdHkgc29mdHdhcmUuXG5cbiAgICBEZXBlbmRlbmNpZXM6XG4gICAgICAqIFtgbWF0aGlhc2J5bmVucy9lbW9qaS1yZWdleGBdKGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoaWFzYnluZW5zL2Vtb2ppLXJlZ2V4KVxuICAgICAgKiBbYGtvbWFnYXRhL2dldC1lYXN0LWFzaWFuLXdpZHRoYF0oaHR0cHM6Ly9naXRodWIuY29tL2tvbWFnYXRhL2Vhc3Rhc2lhbndpZHRoKVxuICAgICAgKiBbYGNoYWxrL3N0cmlwLWFuc2lgXShodHRwczovL2dpdGh1Yi5jb20vY2hhbGsvc3RyaXAtYW5zaSlcbiAgICAgICAgKiBbYGNoYWxrL2Fuc2ktcmVnZXhgXShodHRwczovL2dpdGh1Yi5jb20vY2hhbGsvYW5zaS1yZWdleClcblxuICAqIFsqKmBtYXJ0aW5oZWlkZWdnZXIvd2NzdHJpbmdgKipdKGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJ0aW5oZWlkZWdnZXIvd2NzdHJpbmcpOiBkb2VzIGEgbG90IG9mIHN0cmluZ1xuICAgIG1hbmlwdWxhdGlvbiBzdHVmZiB0aGF0IHdlIGRvbid0IG5lZWQgb3IgcGxhbiB0byBpbXBsZW1lbnQgaW4gYSBzaW1pbGFyIGJ1dCBkaWZmZXJlbnQgd2F5OyB1c2VzIGB3Y3NpemVgXG4gICAgc28gcHJlc3VtYWJseSBhbHNvIGluaGVyaXRzIGl0cyBwcm9ibGVtcyg/KVxuXG5FeGNsdWRlZDpcblxuICAqIFsqKmBtYXJ0aW5oZWlkZWdnZXIvd2NzaXplYCoqXShodHRwczovL2dpdGh1Yi5jb20vbWFydGluaGVpZGVnZ2VyL3djc2l6ZSk6IG5vdCB2ZXJ5IHdlbGwgdXNhYmxlIGluXG4gICAgbW9kZXJuIGVudmlyb25tZW50cyBhcyBgd2NzaXplYCwgYWNjb3JkaW5nIHRvIHRoZSBkb2NzLCBcImRpZmZlclsuLi5dcyBmcm9tIGJvdGggW2B3Y3dpZHRoYCBhbmRcbiAgICBgdmlzdWFsd2lkdGgtanNgXSBieSBvbmx5IHJldHVybmluZyB0aGUgd2lkdGggb2Ygb25lIGNoYXJhY3RlciAoYXMgaW50ZWdlciEpXCIsIG1lYW5pbmcgdGhhdCBpdCBjYW5ub3QsXG4gICAgYnkgY29uc3RydWN0aW9uLCBoYW5kbGUgY29tcG9zZWQgTGF0aW4gYWNjZW50ZWQgbGV0dGVycywgb3IgbGV0IGFsb25lIG11bHRpLWNvZGVwb2ludCBlbW9qaS4gSXQgYWxzb1xuICAgIHN0cnVnZ2xlcyB3aXRoIFVuaWNvZGUgc3Vycm9nYXRlIGhhbmRsaW5nLCBhdCBsZWFzdCBpbiB0cnlpbmcgdG8gbWFrZSBzZW5zZSBvZiB0aGVtIGluIHRoZSBgUkVBRE1FLm1kYC5cblxuICAqIFsqKmB0b2t1aGlyb20vdmlzdWFsd2lkdGgtanNgKipdKGh0dHBzOi8vZ2l0aHViLmNvbS90b2t1aGlyb20vdmlzdWFsd2lkdGgtanMpOiB0b28gb2xkLCBzdGFydGVkIGNhLlxuICAgIDIwMTEsIGxhc3QgY29tbWl0IGZyb20gY2EuIDIwMTVcblxuIyMjXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQGJlbmNobWFya3MgPSBiZW5jaG1hcmtzID1cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGZuOiAtPlxuICAgICMgeyBhbnNpX2NvbG9yc19hbmRfZWZmZWN0czogQywgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2Fuc2lfY29sb3JzX2FuZF9lZmZlY3RzKClcbiAgICAjIHsgQW5zaV9jaHVua2VyLCAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9hbnNpX2NodW5rZXIoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgeyBkZWZhdWx0OiBzaXNvX3N0d2lfZ2V0X3dpZHRoLCAgfSAgPSByZXF1aXJlICdzdHJpbmctd2lkdGgnICAjIyMgc2luZHJlc29yaHVzL3N0cmluZy13aWR0aCAjIyNcbiAgICB7IGRlZmF1bHQ6IG15Y29fd2N3aV9nZXRfd2lkdGgsICB9ICA9IHJlcXVpcmUgJ3djd2lkdGguanMnICAgICMjIyBteWNvYm9jby93Y3dpZHRoLmpzICMjI1xuICAgIF9tYWhlX3djc3RfZ2V0X3dpZHRoICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnd2NzdHJpbmcnICAgICAgIyMjIG1hcnRpbmhlaWRlZ2dlci93Y3N0cmluZyAjIyNcbiAgICBtYWhlX3djc3RfZ2V0X3dpZHRoICAgICAgICAgICAgICAgICA9ICggdGV4dCApIC0+ICggX21haGVfd2NzdF9nZXRfd2lkdGggdGV4dCApLnNpemUoKVxuICAgIHsgZ2V0X3djX21heF9saW5lX2xlbmd0aCwgfSAgICAgICAgID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfY29tbWFuZF9saW5lX3Rvb2xzKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHByb2Jlc19hbmRfbWF0Y2hlcnMgPSBbXG4gICAgICBbICd4eHgnLCAzLCBdXG4gICAgICBbICd48J+Zi3gnLCA0LCBdXG4gICAgICBbICd48J+Zi/Cfj714JywgNiwgXVxuICAgICAgWyAneOySh3gnLCA0LCBdXG4gICAgICBbICd467OEeCcsIDQsIF1cbiAgICAgIFsgJ3jjhYIg44WVIOOEuXgnLCAxMCwgXVxuICAgICAgWyAneOOFguOFleOEuXgnLCA4LCBdXG4gICAgICBbICd4776y77+K776peCcsIDUsIF1cbiAgICAgIFsgJ3jrs4RMeCcsIDUsIF1cbiAgICAgIFsgJ3hh77igYu+4oXgnLCA0LCBdXG4gICAgICBbICd4Ye+4oGLvuKF4JywgNCwgXVxuICAgICAgWyAneGHMgngnLCAzLCBdXG4gICAgICBbICd48JODtXgnLCAzLCBdXG4gICAgICBbICd477e9eCcsIDMsIF1cbiAgICAgIFsgJ2LNnWEnLCAyLCBdXG4gICAgICBbICdhzaBvJywgMiwgXVxuICAgICAgWyAneM24eHgnLCA0LCBdXG4gICAgICBbICd415DXkdeSeCcsIDUsIF1cbiAgICAgIFsgJ3jbqdud2554JywgNCwgXVxuICAgICAgWyAneOC9keC+puC9vOC9hOC8i3gnLCA1LCBdXG4gICAgICAjIFsgKCByZWQgJ2FiYycgKSwgMywgXVxuICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGVycm9yX2NvdW50cyA9IFsgMCwgMCwgMCwgMCwgXVxuICAgICAgZm9yIFsgcHJvYmUsIG1hdGNoZXIsIF0gaW4gcHJvYmVzX2FuZF9tYXRjaGVyc1xuICAgICAgICB3MSAgICAgICAgPSBzaXNvX3N0d2lfZ2V0X3dpZHRoICAgICBwcm9iZTsgdzFyID0gcmV2ZXJzZSAoIGlmIHcxIGlzIG1hdGNoZXIgdGhlbiBncmVlbiBlbHNlIGRvIC0+IGVycm9yX2NvdW50c1sgMCBdKys7IHJlZCApIGZcIiAje3cxfTo+M2M7IFwiXG4gICAgICAgIHcyICAgICAgICA9IG15Y29fd2N3aV9nZXRfd2lkdGggICAgIHByb2JlOyB3MnIgPSByZXZlcnNlICggaWYgdzIgaXMgbWF0Y2hlciB0aGVuIGdyZWVuIGVsc2UgZG8gLT4gZXJyb3JfY291bnRzWyAxIF0rKzsgcmVkICkgZlwiICN7dzJ9Oj4zYzsgXCJcbiAgICAgICAgdzMgICAgICAgID0gbWFoZV93Y3N0X2dldF93aWR0aCAgICAgcHJvYmU7IHczciA9IHJldmVyc2UgKCBpZiB3MyBpcyBtYXRjaGVyIHRoZW4gZ3JlZW4gZWxzZSBkbyAtPiBlcnJvcl9jb3VudHNbIDIgXSsrOyByZWQgKSBmXCIgI3t3M306PjNjOyBcIlxuICAgICAgICB3NCAgICAgICAgPSBnZXRfd2NfbWF4X2xpbmVfbGVuZ3RoICBwcm9iZTsgdzRyID0gcmV2ZXJzZSAoIGlmIHc0IGlzIG1hdGNoZXIgdGhlbiBncmVlbiBlbHNlIGRvIC0+IGVycm9yX2NvdW50c1sgMyBdKys7IHJlZCApIGZcIiAje3c0fTo+M2M7IFwiXG4gICAgICAgIHNhbWUgICAgICA9IHcxID09IHcyID09IHczID09IHc0ID09IG1hdGNoZXJcbiAgICAgICAgc2FtZV9ycHIgID0gR1VZLnRybS5yZXZlcnNlIEdVWS50cm0udHJ1dGggc2FtZVxuICAgICAgICB3aGlzcGVyICfOqV9fXzEnLCBmXCIje3NhbWVfcnByfTo+NWM7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEyMzQ1Njc4OTAxMjM0NTY3ODkwXCIgdW5sZXNzIHNhbWVcbiAgICAgICAgaGVscCAgICAnzqlfX18yJywgZlwiI3tzYW1lX3Jwcn06PjVjOyAje21hdGNoZXJ9Oj40LjBmOyAje3cxcn0gI3t3MnJ9ICN7dzNyfSAje3c0cn0gI3tycHIgcHJvYmV9XCJcbiAgICAgIGluZm8gICAgJ86pX19fMycsIGZcIiN7Jyd9Oj41YzsgI3snJ306PjRjOyAje2Vycm9yX2NvdW50c1swXX06PjQuMGY7ICAje2Vycm9yX2NvdW50c1sxXX06PjQuMGY7ICAje2Vycm9yX2NvdW50c1syXX06PjQuMGY7ICAje2Vycm9yX2NvdW50c1szXX06PjQuMGY7IFwiXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGJpZ2ludF9mcm9tX2hydGltZSA9IChbIHMsIG5zLCBdKSAtPiAoIEJpZ0ludCBzICkgKiAxXzAwMF8wMDBfMDAwbiArICggQmlnSW50IG5zIClcbiAgICAgIHBhcnRpY2lwYW50cyA9XG4gICAgICAgIHNpc29fc3R3aTogIHNpc29fc3R3aV9nZXRfd2lkdGhcbiAgICAgICAgbXljb193Y3dpOiAgbXljb193Y3dpX2dldF93aWR0aFxuICAgICAgICBtYWhlX3djc3Q6ICBtYWhlX3djc3RfZ2V0X3dpZHRoXG4gICAgICAgICMgd2NfbWF4X2xsOiAgZ2V0X3djX21heF9saW5lX2xlbmd0aFxuICAgICAgZm9yIG5hbWUsIGZuIG9mIHBhcnRpY2lwYW50c1xuICAgICAgICB0MCA9IGJpZ2ludF9mcm9tX2hydGltZSBwcm9jZXNzLmhydGltZSgpXG4gICAgICAgIGNvbnNvbGUudGltZSBuYW1lXG4gICAgICAgIGZvciBfIGluIFsgMCAuLiAxZTQgXVxuICAgICAgICAgIGZvciBbIHByb2JlLCBtYXRjaGVyLCBdIGluIHByb2Jlc19hbmRfbWF0Y2hlcnNcbiAgICAgICAgICAgIHcxID0gZm4gcHJvYmVcbiAgICAgICAgICAjIGNvbnNvbGUudGltZUxvZyBuYW1lXG4gICAgICAgIGNvbnNvbGUudGltZUVuZCBuYW1lXG4gICAgICAgIHQxID0gYmlnaW50X2Zyb21faHJ0aW1lIHByb2Nlc3MuaHJ0aW1lKClcbiAgICAgICAgZGVidWcgJ86pX19fNicsIG5hbWUsIHQxIC0gdDBcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgIyBkZW1vX2luZmluaXRlX3Byb3h5KClcbiAgIyBkZW1vX2NvbG9yZnVsX3Byb3h5KClcbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBiZW5jaG1hcmtzLCB9XG4iXX0=
//# sourceURL=../src/benchmark-unicode-character-width.coffee