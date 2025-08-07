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
      probes_and_matchers = [['xxx', 3], ['x🙋x', 4], ['x🙋🏽x', 6], ['x쒇x', 4], ['x별x', 4], ['xㅂ ㅕ ㄹx', 10], ['xㅂㅕㄹx', 8], ['xﾲￊﾩx', 5], ['x별Lx', 5], ['xa︠b︡x', 4], ['xa︠b︡x', 4], ['xâx', 3], ['x𓃵x', 3], ['x﷽x', 3], ['b͝a', 2], ['a͠o', 2], ['x͸xx', 4], ['xאבגx', 5], ['x۩۝۞x', 4], ['xདྦོང་x', 5], ['x𰂀𰂁𰂂𰂃𰂄x', 12]];
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
// console.time name
          for (_ = i = 0; i <= 5000; _ = ++i) {
            for (j = 0, len = probes_and_matchers.length; j < len; j++) {
              [probe, matcher] = probes_and_matchers[j];
              w1 = fn(probe);
            }
          }
          // console.timeLog name
          // console.timeEnd name
          t1 = bigint_from_hrtime(process.hrtime());
          // debug 'Ω___6', name, t1 - t0
          debug('Ω___6', name, f`${(Number(t1 - t0)) / 1_000_000}:>20,.9f;`);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JlbmNobWFyay11bmljb2RlLWNoYXJhY3Rlci13aWR0aC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJHO0VBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFFSDtBQUZHLE1BQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxVQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQTs7O0VBS0gsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQiwwQ0FBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLEtBSEYsRUFJRSxLQUpGLEVBS0UsSUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsR0FSRixFQVNFLElBVEYsRUFVRSxPQVZGLEVBV0UsR0FYRixDQUFBLEdBVzRCLEdBQUcsQ0FBQyxHQVhoQzs7RUFZQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1QixFQTNCRzs7O0VBNkJILENBQUEsQ0FBRSxHQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLDRDQUFSLENBQTVCOztFQUNBLElBQUEsR0FBNEIsT0FBQSxDQUFRLDJCQUFSOztFQUM1QixDQUFBLENBQUUsSUFBRixDQUFBLEdBQTRCLElBQTVCOztFQUNBLFNBQUEsR0FBNEIsT0FBQSxDQUFRLDZDQUFSLEVBaEN6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWtGSCxJQUFDLENBQUEsVUFBRCxHQUFjLFVBQUEsR0FHWixDQUFBOztJQUFBLEVBQUEsRUFBSSxRQUFBLENBQUEsQ0FBQTtBQUNOLFVBQUEsb0JBSWtFLHlCQUpsRSxFQUFBLHNCQUFBLEVBQUEsbUJBS2tFLDhCQUxsRSxFQUFBLG1CQUFBLEVBQUEsbUJBQUEsRUFBQTtNQUdJLENBQUEsQ0FBQTs7OztRQUFFLE9BQUEsRUFBUztNQUFYLENBQUEsR0FBc0MsT0FBQSxDQUFRLGNBQVIsQ0FBdEM7TUFDQSxDQUFBO1FBRDhELCtCQUM1RCxPQUFBLEVBQVM7TUFBWCxDQUFBLEdBQXNDLE9BQUEsQ0FBUSxZQUFSLENBQXRDO01BQ0Esb0JBQUEsR0FBc0MsT0FBQSxDQUFRLFVBQVI7TUFDdEMsbUJBQUEsR0FBc0MsUUFBQSxDQUFFLElBQUYsQ0FBQTtlQUFZLENBQUUsb0JBQUEsQ0FBcUIsSUFBckIsQ0FBRixDQUE2QixDQUFDLElBQTlCLENBQUE7TUFBWjtNQUN0QyxDQUFBLENBQUUsc0JBQUYsQ0FBQSxHQUFzQyxTQUFTLENBQUMsUUFBUSxDQUFDLDBCQUFuQixDQUFBLENBQXRDLEVBUEo7O01BU0ksbUJBQUEsR0FBc0IsQ0FDcEIsQ0FBRSxLQUFGLEVBQVMsQ0FBVCxDQURvQixFQUVwQixDQUFFLE1BQUYsRUFBVSxDQUFWLENBRm9CLEVBR3BCLENBQUUsUUFBRixFQUFZLENBQVosQ0FIb0IsRUFJcEIsQ0FBRSxLQUFGLEVBQVMsQ0FBVCxDQUpvQixFQUtwQixDQUFFLEtBQUYsRUFBUyxDQUFULENBTG9CLEVBTXBCLENBQUUsU0FBRixFQUFhLEVBQWIsQ0FOb0IsRUFPcEIsQ0FBRSxPQUFGLEVBQVcsQ0FBWCxDQVBvQixFQVFwQixDQUFFLE9BQUYsRUFBVyxDQUFYLENBUm9CLEVBU3BCLENBQUUsTUFBRixFQUFVLENBQVYsQ0FUb0IsRUFVcEIsQ0FBRSxRQUFGLEVBQVksQ0FBWixDQVZvQixFQVdwQixDQUFFLFFBQUYsRUFBWSxDQUFaLENBWG9CLEVBWXBCLENBQUUsTUFBRixFQUFVLENBQVYsQ0Fab0IsRUFhcEIsQ0FBRSxNQUFGLEVBQVUsQ0FBVixDQWJvQixFQWNwQixDQUFFLEtBQUYsRUFBUyxDQUFULENBZG9CLEVBZXBCLENBQUUsS0FBRixFQUFTLENBQVQsQ0Fmb0IsRUFnQnBCLENBQUUsS0FBRixFQUFTLENBQVQsQ0FoQm9CLEVBaUJwQixDQUFFLE1BQUYsRUFBVSxDQUFWLENBakJvQixFQWtCcEIsQ0FBRSxPQUFGLEVBQVcsQ0FBWCxDQWxCb0IsRUFtQnBCLENBQUUsT0FBRixFQUFXLENBQVgsQ0FuQm9CLEVBb0JwQixDQUFFLFNBQUYsRUFBYSxDQUFiLENBcEJvQixFQXFCcEIsQ0FBRSxjQUFGLEVBQWtCLEVBQWxCLENBckJvQjtNQXlCbkIsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBOztBQUNQLFlBQUEsWUFBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsUUFBQSxFQUFBLEVBQUEsRUFBQSxHQUFBLEVBQUEsRUFBQSxFQUFBLEdBQUEsRUFBQSxFQUFBLEVBQUEsR0FBQSxFQUFBLEVBQUEsRUFBQTtRQUFNLFlBQUEsR0FBZSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVg7UUFDZixLQUFBLHFEQUFBO1VBQUksQ0FBRSxLQUFGLEVBQVMsT0FBVDtVQUNGLEVBQUEsR0FBWSxtQkFBQSxDQUF3QixLQUF4QjtVQUErQixHQUFBLEdBQU0sT0FBQSxDQUFRLENBQUssRUFBQSxLQUFNLE9BQVQsR0FBc0IsS0FBdEIsR0FBb0MsQ0FBQSxRQUFBLENBQUEsQ0FBQTtZQUFHLFlBQVksQ0FBRSxDQUFGLENBQVo7bUJBQXFCO1VBQXhCLENBQUEsR0FBdEMsQ0FBQSxDQUFvRSxDQUFDLEVBQUEsQ0FBQSxDQUFJLEVBQUosQ0FBQSxNQUFBLENBQXJFLENBQVI7VUFDakQsRUFBQSxHQUFZLG1CQUFBLENBQXdCLEtBQXhCO1VBQStCLEdBQUEsR0FBTSxPQUFBLENBQVEsQ0FBSyxFQUFBLEtBQU0sT0FBVCxHQUFzQixLQUF0QixHQUFvQyxDQUFBLFFBQUEsQ0FBQSxDQUFBO1lBQUcsWUFBWSxDQUFFLENBQUYsQ0FBWjttQkFBcUI7VUFBeEIsQ0FBQSxHQUF0QyxDQUFBLENBQW9FLENBQUMsRUFBQSxDQUFBLENBQUksRUFBSixDQUFBLE1BQUEsQ0FBckUsQ0FBUjtVQUNqRCxFQUFBLEdBQVksbUJBQUEsQ0FBd0IsS0FBeEI7VUFBK0IsR0FBQSxHQUFNLE9BQUEsQ0FBUSxDQUFLLEVBQUEsS0FBTSxPQUFULEdBQXNCLEtBQXRCLEdBQW9DLENBQUEsUUFBQSxDQUFBLENBQUE7WUFBRyxZQUFZLENBQUUsQ0FBRixDQUFaO21CQUFxQjtVQUF4QixDQUFBLEdBQXRDLENBQUEsQ0FBb0UsQ0FBQyxFQUFBLENBQUEsQ0FBSSxFQUFKLENBQUEsTUFBQSxDQUFyRSxDQUFSO1VBQ2pELEVBQUEsR0FBWSxzQkFBQSxDQUF3QixLQUF4QjtVQUErQixHQUFBLEdBQU0sT0FBQSxDQUFRLENBQUssRUFBQSxLQUFNLE9BQVQsR0FBc0IsS0FBdEIsR0FBb0MsQ0FBQSxRQUFBLENBQUEsQ0FBQTtZQUFHLFlBQVksQ0FBRSxDQUFGLENBQVo7bUJBQXFCO1VBQXhCLENBQUEsR0FBdEMsQ0FBQSxDQUFvRSxDQUFDLEVBQUEsQ0FBQSxDQUFJLEVBQUosQ0FBQSxNQUFBLENBQXJFLENBQVI7VUFDakQsSUFBQSxHQUFZLENBQUEsQ0FBQSxDQUFBLEVBQUEsS0FBTSxFQUFOLElBQU0sRUFBTixLQUFZLEVBQVosQ0FBQSxJQUFZLEVBQVosS0FBa0IsRUFBbEIsQ0FBQSxJQUFrQixFQUFsQixLQUF3QixPQUF4QjtVQUNaLFFBQUEsR0FBWSxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQVIsQ0FBZ0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFSLENBQWMsSUFBZCxDQUFoQjtVQUNaLEtBQStGLElBQS9GO1lBQUEsT0FBQSxDQUFRLE9BQVIsRUFBaUIsQ0FBQyxDQUFBLENBQUEsQ0FBRyxRQUFILENBQUEsd0RBQUEsQ0FBbEIsRUFBQTs7VUFDQSxJQUFBLENBQVEsT0FBUixFQUFpQixDQUFDLENBQUEsQ0FBQSxDQUFHLFFBQUgsQ0FBQSxNQUFBLENBQUEsQ0FBb0IsT0FBcEIsQ0FBQSxRQUFBLENBQUEsQ0FBc0MsR0FBdEMsRUFBQSxDQUFBLENBQTZDLEdBQTdDLEVBQUEsQ0FBQSxDQUFvRCxHQUFwRCxFQUFBLENBQUEsQ0FBMkQsR0FBM0QsRUFBQSxDQUFBLENBQWtFLEdBQUEsQ0FBSSxLQUFKLENBQWxFLENBQUEsQ0FBbEI7UUFSRjtRQVNBLElBQUEsQ0FBUSxPQUFSLEVBQWlCLENBQUMsQ0FBQSxDQUFBLENBQUcsRUFBSCxDQUFBLE1BQUEsQ0FBQSxDQUFjLEVBQWQsQ0FBQSxNQUFBLENBQUEsQ0FBeUIsWUFBWSxDQUFDLENBQUQsQ0FBckMsQ0FBQSxTQUFBLENBQUEsQ0FBb0QsWUFBWSxDQUFDLENBQUQsQ0FBaEUsQ0FBQSxTQUFBLENBQUEsQ0FBK0UsWUFBWSxDQUFDLENBQUQsQ0FBM0YsQ0FBQSxTQUFBLENBQUEsQ0FBMEcsWUFBWSxDQUFDLENBQUQsQ0FBdEgsQ0FBQSxRQUFBLENBQWxCO0FBQ0EsZUFBTztNQVpOLENBQUE7TUFjQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDUCxZQUFBLENBQUEsRUFBQSxrQkFBQSxFQUFBLEVBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBLFlBQUEsRUFBQSxLQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQTtRQUFNLGtCQUFBLEdBQXFCLFFBQUEsQ0FBQyxDQUFFLENBQUYsRUFBSyxFQUFMLENBQUQsQ0FBQTtpQkFBZ0IsQ0FBRSxNQUFBLENBQU8sQ0FBUCxDQUFGLENBQUEsR0FBZSxjQUFmLEdBQWdDLENBQUUsTUFBQSxDQUFPLEVBQVAsQ0FBRjtRQUFoRDtRQUNyQixZQUFBLEdBQ0U7VUFBQSxTQUFBLEVBQVksbUJBQVo7VUFDQSxTQUFBLEVBQVksbUJBRFo7VUFFQSxTQUFBLEVBQVk7UUFGWixFQUZSOztRQU1NLEtBQUEsb0JBQUE7O1VBQ0UsRUFBQSxHQUFLLGtCQUFBLENBQW1CLE9BQU8sQ0FBQyxNQUFSLENBQUEsQ0FBbkIsRUFBYjs7VUFFUSxLQUFTLDZCQUFUO1lBQ0UsS0FBQSxxREFBQTtjQUFJLENBQUUsS0FBRixFQUFTLE9BQVQ7Y0FDRixFQUFBLEdBQUssRUFBQSxDQUFHLEtBQUg7WUFEUDtVQURGLENBRlI7OztVQU9RLEVBQUEsR0FBSyxrQkFBQSxDQUFtQixPQUFPLENBQUMsTUFBUixDQUFBLENBQW5CLEVBUGI7O1VBU1EsS0FBQSxDQUFNLE9BQU4sRUFBZSxJQUFmLEVBQXFCLENBQUMsQ0FBQSxDQUFBLENBQUcsQ0FBRSxNQUFBLENBQU8sRUFBQSxHQUFLLEVBQVosQ0FBRixDQUFBLEdBQXFCLFNBQXhCLENBQUEsU0FBQSxDQUF0QjtRQVZGO0FBV0EsZUFBTztNQWxCTixDQUFBLElBaERQOztBQW9FSSxhQUFPO0lBckVMO0VBQUosRUFyRkM7OztFQStKSCxJQUFHLE1BQUEsS0FBVSxPQUFPLENBQUMsSUFBckI7SUFBK0IsTUFBUyxDQUFBLENBQUEsQ0FBQSxHQUFBO0FBQ3hDLFVBQUEsV0FBQTs7O01BRUUsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixLQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixJQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO2FBQ2QsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QixDQUFFLFVBQUYsQ0FBOUI7SUFMc0MsQ0FBQSxJQUF4Qzs7QUEvSkciLCJzb3VyY2VzQ29udGVudCI6WyJcbiMjI1xuXG5cbiMjIEFwcGxpY2F0aW9uc1xuXG4qICoqUmVnRXggQnVpbGRlcioqIChleGFtcGxlIGZyb20gW1JlamlncyBibG9nIHBvc3RdKGh0dHBzOi8vbWVkaXVtLmNvbS9Ab21hcnphd2FocnkvcmVqaWdzLW1ha2luZy1yZWd1bGFyLWV4cHJlc3Npb25zLWh1bWFuLXJlYWRhYmxlLTFmYWQzN2NiM2VhZSkpXG5cbmBgYGphdmFcbnZhciBlbWFpbFJlZ2V4ID1cbiAgICBSZWppZ3MuQ3JlYXRlKClcbiAgICAgICAgICAuQXRTdGFydCgpXG4gICAgICAgICAgLk9uZU9yTW9yZShyID0+IHIuQW55TGV0dGVyT3JEaWdpdCgpLk9yKCkuQW55T2YoXCIuXyUrLVwiKSlcbiAgICAgICAgICAuVGV4dChcIkBcIilcbiAgICAgICAgICAuT25lT3JNb3JlKHIgPT4gci5BbnlMZXR0ZXJPckRpZ2l0KCkuT3IoKS5BbnlPZihcIi4tXCIpKVxuICAgICAgICAgIC5UZXh0KFwiLlwiKVxuICAgICAgICAgIC5BbnlMZXR0ZXJPckRpZ2l0KCkuQXRMZWFzdCgyKVxuICAgICAgICAgIC5BdEVuZCgpXG4gICAgICAgICAgLkJ1aWxkKCk7XG5gYGBcblxuKiAqKkhUTUwvWE1MIEJ1aWxlcioqXG4qICoqU1FMIEJ1aWxkZXIqKlxuKiAqKkNMSSBDb2xvcmluZyoqXG4qIHN5bnRheCBmb3IgYSAqKlR5cGUgQ2hlY2tlcioqXG5cbiMjI1xuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2JlbmNobWFyay11bmljb2RlLWNoYXJhY3Rlci13aWR0aC5jb2ZmZWUnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgZ3JlZW5cbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiMgd3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcbnsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2luZ2xlLWZpbGUtbW9kdWxlcydcblxuXG5cblxuIyMjXG5cbkZyb20gW2BjaGFsay9zdHJpcC1hbnNpYF0oaHR0cHM6Ly9naXRodWIuY29tL2NoYWxrL3N0cmlwLWFuc2kpIGBSRUFETUUubWRgOlxuXG4+ID4gWyFOT1RFXVxuPiA+XG4+ID4gTm9kZS5qcyBoYXMgdGhpcyBidWlsdC1pbiBub3cgd2l0aFxuPiA+IFtgc3RyaXBWVENvbnRyb2xDaGFyYWN0ZXJzYF0oaHR0cHM6Ly9ub2RlanMub3JnL2FwaS91dGlsLmh0bWwjdXRpbHN0cmlwdnRjb250cm9sY2hhcmFjdGVyc3N0cikuIFRoZVxuPiA+IGJlbmVmaXQgb2YgdGhpcyBwYWNrYWdlIGlzIGNvbnNpc3RlbnQgYmVoYXZpb3IgYWNyb3NzIE5vZGUuanMgdmVyc2lvbnMgYW5kIGZhc3RlciBpbXByb3ZlbWVudHMuIFRoZVxuPiA+IE5vZGUuanMgdmVyc2lvbiBpcyBhY3R1YWxseSBiYXNlZCBvbiB0aGlzIHBhY2thZ2UuXG5cbmNvbnNvbGUubG9nKHV0aWwuc3RyaXBWVENvbnRyb2xDaGFyYWN0ZXJzKCdcXHUwMDFCWzRtdmFsdWVcXHUwMDFCWzBtJykpXG5cbk5vdGVzOlxuXG4gICogWyoqYHNpbmRyZXNvcmh1cy9zdHJpbmctd2lkdGhgKipdKGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvc3RyaW5nLXdpZHRoKSBieSBTaW5kcmUgU29yaHVzO1xuICAgIGRlcGVuZGVuY2llcyBpbmNsdWRlIFtgbWF0aGlhc2J5bmVucy9lbW9qaS1yZWdleGBdKGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoaWFzYnluZW5zL2Vtb2ppLXJlZ2V4KSAod2hpY2hcbiAgICBjb3VsZCBiZSByZXBsYWNlZCB3aXRoIGEgc21hbGxlciBsaWJyYXJ5IHdpdGggdGhlIHNhbWUgQVBJXG4gICAgW2BzbGV2aXRoYW4vZW1vamktcmVnZXgteHNgXShodHRwczovL2dpdGh1Yi5jb20vc2xldml0aGFuL2Vtb2ppLXJlZ2V4LXhzKSk7IG5vdGUgdGhlIG51bWJlciBvZlxuICAgIHdlbGwta25vd24sIHRydXN0ZWQgYXV0aG9ycyBoZXJlIHRoYXQgbW9yZSBvZnRlbiB0aGFuIG5vdCBkZWxpdmVyIGhpZ2gtcXVhbGl0eSBzb2Z0d2FyZS5cblxuICAgIERlcGVuZGVuY2llczpcbiAgICAgICogW2BtYXRoaWFzYnluZW5zL2Vtb2ppLXJlZ2V4YF0oaHR0cHM6Ly9naXRodWIuY29tL21hdGhpYXNieW5lbnMvZW1vamktcmVnZXgpXG4gICAgICAqIFtga29tYWdhdGEvZ2V0LWVhc3QtYXNpYW4td2lkdGhgXShodHRwczovL2dpdGh1Yi5jb20va29tYWdhdGEvZWFzdGFzaWFud2lkdGgpXG4gICAgICAqIFtgY2hhbGsvc3RyaXAtYW5zaWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFsay9zdHJpcC1hbnNpKVxuICAgICAgICAqIFtgY2hhbGsvYW5zaS1yZWdleGBdKGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFsay9hbnNpLXJlZ2V4KVxuXG4gICogWyoqYG1hcnRpbmhlaWRlZ2dlci93Y3N0cmluZ2AqKl0oaHR0cHM6Ly9naXRodWIuY29tL21hcnRpbmhlaWRlZ2dlci93Y3N0cmluZyk6IGRvZXMgYSBsb3Qgb2Ygc3RyaW5nXG4gICAgbWFuaXB1bGF0aW9uIHN0dWZmIHRoYXQgd2UgZG9uJ3QgbmVlZCBvciBwbGFuIHRvIGltcGxlbWVudCBpbiBhIHNpbWlsYXIgYnV0IGRpZmZlcmVudCB3YXk7IHVzZXMgYHdjc2l6ZWBcbiAgICBzbyBwcmVzdW1hYmx5IGFsc28gaW5oZXJpdHMgaXRzIHByb2JsZW1zKD8pXG5cbkV4Y2x1ZGVkOlxuXG4gICogWyoqYG1hcnRpbmhlaWRlZ2dlci93Y3NpemVgKipdKGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJ0aW5oZWlkZWdnZXIvd2NzaXplKTogbm90IHZlcnkgd2VsbCB1c2FibGUgaW5cbiAgICBtb2Rlcm4gZW52aXJvbm1lbnRzIGFzIGB3Y3NpemVgLCBhY2NvcmRpbmcgdG8gdGhlIGRvY3MsIFwiZGlmZmVyWy4uLl1zIGZyb20gYm90aCBbYHdjd2lkdGhgIGFuZFxuICAgIGB2aXN1YWx3aWR0aC1qc2BdIGJ5IG9ubHkgcmV0dXJuaW5nIHRoZSB3aWR0aCBvZiBvbmUgY2hhcmFjdGVyIChhcyBpbnRlZ2VyISlcIiwgbWVhbmluZyB0aGF0IGl0IGNhbm5vdCxcbiAgICBieSBjb25zdHJ1Y3Rpb24sIGhhbmRsZSBjb21wb3NlZCBMYXRpbiBhY2NlbnRlZCBsZXR0ZXJzLCBvciBsZXQgYWxvbmUgbXVsdGktY29kZXBvaW50IGVtb2ppLiBJdCBhbHNvXG4gICAgc3RydWdnbGVzIHdpdGggVW5pY29kZSBzdXJyb2dhdGUgaGFuZGxpbmcsIGF0IGxlYXN0IGluIHRyeWluZyB0byBtYWtlIHNlbnNlIG9mIHRoZW0gaW4gdGhlIGBSRUFETUUubWRgLlxuXG4gICogWyoqYHRva3VoaXJvbS92aXN1YWx3aWR0aC1qc2AqKl0oaHR0cHM6Ly9naXRodWIuY29tL3Rva3VoaXJvbS92aXN1YWx3aWR0aC1qcyk6IHRvbyBvbGQsIHN0YXJ0ZWQgY2EuXG4gICAgMjAxMSwgbGFzdCBjb21taXQgZnJvbSBjYS4gMjAxNVxuXG4jIyNcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AYmVuY2htYXJrcyA9IGJlbmNobWFya3MgPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZm46IC0+XG4gICAgIyB7IGFuc2lfY29sb3JzX2FuZF9lZmZlY3RzOiBDLCB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfYW5zaV9jb2xvcnNfYW5kX2VmZmVjdHMoKVxuICAgICMgeyBBbnNpX2NodW5rZXIsICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2Fuc2lfY2h1bmtlcigpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICB7IGRlZmF1bHQ6IHNpc29fc3R3aV9nZXRfd2lkdGgsICB9ICA9IHJlcXVpcmUgJ3N0cmluZy13aWR0aCcgICMjIyBzaW5kcmVzb3JodXMvc3RyaW5nLXdpZHRoICMjI1xuICAgIHsgZGVmYXVsdDogbXljb193Y3dpX2dldF93aWR0aCwgIH0gID0gcmVxdWlyZSAnd2N3aWR0aC5qcycgICAgIyMjIG15Y29ib2NvL3djd2lkdGguanMgIyMjXG4gICAgX21haGVfd2NzdF9nZXRfd2lkdGggICAgICAgICAgICAgICAgPSByZXF1aXJlICd3Y3N0cmluZycgICAgICAjIyMgbWFydGluaGVpZGVnZ2VyL3djc3RyaW5nICMjI1xuICAgIG1haGVfd2NzdF9nZXRfd2lkdGggICAgICAgICAgICAgICAgID0gKCB0ZXh0ICkgLT4gKCBfbWFoZV93Y3N0X2dldF93aWR0aCB0ZXh0ICkuc2l6ZSgpXG4gICAgeyBnZXRfd2NfbWF4X2xpbmVfbGVuZ3RoLCB9ICAgICAgICAgPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9jb21tYW5kX2xpbmVfdG9vbHMoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcHJvYmVzX2FuZF9tYXRjaGVycyA9IFtcbiAgICAgIFsgJ3h4eCcsIDMsIF1cbiAgICAgIFsgJ3jwn5mLeCcsIDQsIF1cbiAgICAgIFsgJ3jwn5mL8J+PvXgnLCA2LCBdXG4gICAgICBbICd47JKHeCcsIDQsIF1cbiAgICAgIFsgJ3jrs4R4JywgNCwgXVxuICAgICAgWyAneOOFgiDjhZUg44S5eCcsIDEwLCBdXG4gICAgICBbICd444WC44WV44S5eCcsIDgsIF1cbiAgICAgIFsgJ3jvvrLvv4rvvql4JywgNSwgXVxuICAgICAgWyAneOuzhEx4JywgNSwgXVxuICAgICAgWyAneGHvuKBi77iheCcsIDQsIF1cbiAgICAgIFsgJ3hh77igYu+4oXgnLCA0LCBdXG4gICAgICBbICd4YcyCeCcsIDMsIF1cbiAgICAgIFsgJ3jwk4O1eCcsIDMsIF1cbiAgICAgIFsgJ3jvt714JywgMywgXVxuICAgICAgWyAnYs2dYScsIDIsIF1cbiAgICAgIFsgJ2HNoG8nLCAyLCBdXG4gICAgICBbICd4zbh4eCcsIDQsIF1cbiAgICAgIFsgJ3jXkNeR15J4JywgNSwgXVxuICAgICAgWyAneNup253bnngnLCA0LCBdXG4gICAgICBbICd44L2R4L6m4L284L2E4LyLeCcsIDUsIF1cbiAgICAgIFsgJ3jwsIKA8LCCgfCwgoLwsIKD8LCChHgnLCAxMiwgXVxuICAgICAgIyBbICggcmVkICdhYmMnICksIDMsIF1cbiAgICAgIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBlcnJvcl9jb3VudHMgPSBbIDAsIDAsIDAsIDAsIF1cbiAgICAgIGZvciBbIHByb2JlLCBtYXRjaGVyLCBdIGluIHByb2Jlc19hbmRfbWF0Y2hlcnNcbiAgICAgICAgdzEgICAgICAgID0gc2lzb19zdHdpX2dldF93aWR0aCAgICAgcHJvYmU7IHcxciA9IHJldmVyc2UgKCBpZiB3MSBpcyBtYXRjaGVyIHRoZW4gZ3JlZW4gZWxzZSBkbyAtPiBlcnJvcl9jb3VudHNbIDAgXSsrOyByZWQgKSBmXCIgI3t3MX06PjNjOyBcIlxuICAgICAgICB3MiAgICAgICAgPSBteWNvX3djd2lfZ2V0X3dpZHRoICAgICBwcm9iZTsgdzJyID0gcmV2ZXJzZSAoIGlmIHcyIGlzIG1hdGNoZXIgdGhlbiBncmVlbiBlbHNlIGRvIC0+IGVycm9yX2NvdW50c1sgMSBdKys7IHJlZCApIGZcIiAje3cyfTo+M2M7IFwiXG4gICAgICAgIHczICAgICAgICA9IG1haGVfd2NzdF9nZXRfd2lkdGggICAgIHByb2JlOyB3M3IgPSByZXZlcnNlICggaWYgdzMgaXMgbWF0Y2hlciB0aGVuIGdyZWVuIGVsc2UgZG8gLT4gZXJyb3JfY291bnRzWyAyIF0rKzsgcmVkICkgZlwiICN7dzN9Oj4zYzsgXCJcbiAgICAgICAgdzQgICAgICAgID0gZ2V0X3djX21heF9saW5lX2xlbmd0aCAgcHJvYmU7IHc0ciA9IHJldmVyc2UgKCBpZiB3NCBpcyBtYXRjaGVyIHRoZW4gZ3JlZW4gZWxzZSBkbyAtPiBlcnJvcl9jb3VudHNbIDMgXSsrOyByZWQgKSBmXCIgI3t3NH06PjNjOyBcIlxuICAgICAgICBzYW1lICAgICAgPSB3MSA9PSB3MiA9PSB3MyA9PSB3NCA9PSBtYXRjaGVyXG4gICAgICAgIHNhbWVfcnByICA9IEdVWS50cm0ucmV2ZXJzZSBHVVkudHJtLnRydXRoIHNhbWVcbiAgICAgICAgd2hpc3BlciAnzqlfX18xJywgZlwiI3tzYW1lX3Jwcn06PjVjOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMjM0NTY3ODkwMTIzNDU2Nzg5MFwiIHVubGVzcyBzYW1lXG4gICAgICAgIGhlbHAgICAgJ86pX19fMicsIGZcIiN7c2FtZV9ycHJ9Oj41YzsgI3ttYXRjaGVyfTo+NC4wZjsgI3t3MXJ9ICN7dzJyfSAje3czcn0gI3t3NHJ9ICN7cnByIHByb2JlfVwiXG4gICAgICBpbmZvICAgICfOqV9fXzMnLCBmXCIjeycnfTo+NWM7ICN7Jyd9Oj40YzsgI3tlcnJvcl9jb3VudHNbMF19Oj40LjBmOyAgI3tlcnJvcl9jb3VudHNbMV19Oj40LjBmOyAgI3tlcnJvcl9jb3VudHNbMl19Oj40LjBmOyAgI3tlcnJvcl9jb3VudHNbM119Oj40LjBmOyBcIlxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBiaWdpbnRfZnJvbV9ocnRpbWUgPSAoWyBzLCBucywgXSkgLT4gKCBCaWdJbnQgcyApICogMV8wMDBfMDAwXzAwMG4gKyAoIEJpZ0ludCBucyApXG4gICAgICBwYXJ0aWNpcGFudHMgPVxuICAgICAgICBzaXNvX3N0d2k6ICBzaXNvX3N0d2lfZ2V0X3dpZHRoXG4gICAgICAgIG15Y29fd2N3aTogIG15Y29fd2N3aV9nZXRfd2lkdGhcbiAgICAgICAgbWFoZV93Y3N0OiAgbWFoZV93Y3N0X2dldF93aWR0aFxuICAgICAgICAjIHdjX21heF9sbDogIGdldF93Y19tYXhfbGluZV9sZW5ndGhcbiAgICAgIGZvciBuYW1lLCBmbiBvZiBwYXJ0aWNpcGFudHNcbiAgICAgICAgdDAgPSBiaWdpbnRfZnJvbV9ocnRpbWUgcHJvY2Vzcy5ocnRpbWUoKVxuICAgICAgICAjIGNvbnNvbGUudGltZSBuYW1lXG4gICAgICAgIGZvciBfIGluIFsgMCAuLiA1ZTMgXVxuICAgICAgICAgIGZvciBbIHByb2JlLCBtYXRjaGVyLCBdIGluIHByb2Jlc19hbmRfbWF0Y2hlcnNcbiAgICAgICAgICAgIHcxID0gZm4gcHJvYmVcbiAgICAgICAgICAjIGNvbnNvbGUudGltZUxvZyBuYW1lXG4gICAgICAgICMgY29uc29sZS50aW1lRW5kIG5hbWVcbiAgICAgICAgdDEgPSBiaWdpbnRfZnJvbV9ocnRpbWUgcHJvY2Vzcy5ocnRpbWUoKVxuICAgICAgICAjIGRlYnVnICfOqV9fXzYnLCBuYW1lLCB0MSAtIHQwXG4gICAgICAgIGRlYnVnICfOqV9fXzYnLCBuYW1lLCBmXCIjeyggTnVtYmVyIHQxIC0gdDAgKSAvIDFfMDAwXzAwMH06PjIwLC45ZjtcIlxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICAjIGRlbW9faW5maW5pdGVfcHJveHkoKVxuICAjIGRlbW9fY29sb3JmdWxfcHJveHkoKVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGJlbmNobWFya3MsIH1cbiJdfQ==
//# sourceURL=../src/benchmark-unicode-character-width.coffee