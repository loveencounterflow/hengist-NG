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
      var C, _mahe_wcst_get_width/* mycoboco/wcwidth.js */, build_chr_gauge, gauge_60, get_wc_max_line_length, mahe_wcst_get_width/* martinheidegger/wcstring */, myco_wcwi_get_width, probes_and_matchers, siso_stwi_get_width;
      ({
        ansi_colors_and_effects: C
      } = SFMODULES.require_ansi_colors_and_effects());
      ({build_chr_gauge} = SFMODULES.require_chr_gauge());
      ({
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
      probes_and_matchers = [['xxx', 3], ['x🙋x', 4], ['x🙋🏽x', 6], ['x쒇x', 4], ['x별x', 4], ['xㅂ ㅕ ㄹx', 10], ['xㅂㅕㄹx', 8], ['xﾲￊﾩx', 5], ['x별Lx', 5], ['xa︠b︡x', 4], ['xa︠b︡x', 4], ['xâx', 3], ['x𓃵x', 3], ['x﷽x', 3], ['b͝a', 2], ['a͠o', 2], ['x͸xx', 4], ['xאבגx', 5], ['x۩۝۞x', 4], ['xདྦོང་x', 5], ['x𰂀𰂁𰂂𰂃𰂄x', 12], ['x𐋡𐋢𐋣𐋤𐋥𐋦😢😣😤😴😷🙤🙥🙲🙳🙴🙼🙽🙾🙿🚇🝖🞧𝐀𝐁𝐂𝐃⟀⟁⟂⟃x', 39], ['x⿼⿽⿾⿿⿻x', 8], ['x⿰⿱⿲⿳⿴⿵⿶⿷⿸⿹⿺⿻x', 26], ['x᝭ᄝۍஃᏓ߿ķᛜഥ፧Ք٘🍇ੇᏉ📈፭˓🕽ࢀ௽Ⴅᛇ᝖🍻ɇ᛾⛄ኚཅᚲx', 26], ['x඗Ǚર📎^̊ྑݱ଀Ȉᇟവ💁૭Ǽᛀ։ઈ̒🔑৆ǖآάڰ৶ᔾླыବணx', 26], ['xАঁААѣАܘѣॐȲАܘঁ̃ѣȲѣ̃ѣঁސݧॐ̃ॐx', 26], ['xঁАސ̃ܘॐАѣȲАݧॐܘѣȲঁܘॐܘঁॐݧݧސॐx', 26], ['x0Ã豲Û򸮍[頔쯞&ٸ𽃸U套9笗a䘫}ҭⴲɔI幙6󏴃エEf򒟀΁?牃x', 0], ['xύ΍򋁥%əʘޜ𢍬´ِ򣑥^Γ𰛥E}aӇ{Մ$G贲]𿒕Y}򷟇򢏙x', 0], ['x9󮊘ۆ󅉨򌷺󬥘کԶiޘ5罌塕Ĵ3ѷ夎uȸ򼳸󭃭񳌴Q~CK䱮᣼W>竦x', 0], ['x할S􂿚󙏰r򇜅h󈫫񅦵ۿ㙛󞝶NΕ󮀞񰑸򟞮𰊦턝䑭ш򅈺ϛɠ`°jk䂾䢯􅌱곢x', 0], ['x񉃓򍦎P𼻞ӏ9쯬ܼӬ撗򞅛߰梡𮦦惺o􎌕觾ץߏ㧤ၲԼ哋𛧦켈ۮ$픕祿ꉀx', 0], ['x😀🐱🌟🚀🍕x', 26], ['x𓀀𓁐𓃰𓆣𓂀x', 26], ['xx', 26], ['xx', 26]];
      //.......................................................................................................
      // [ ( red 'abc' ), 3, ]
      gauge_60 = build_chr_gauge({
        length: 60
      });
      (() => {
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
            whisper('Ω___1', f`${same_rpr}:>5c;                               ${gauge_60}`);
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
          for (_ = i = 0; i <= 5000; _ = ++i) {
            for (j = 0, len = probes_and_matchers.length; j < len; j++) {
              [probe, matcher] = probes_and_matchers[j];
              w1 = fn(probe);
            }
          }
          t1 = bigint_from_hrtime(process.hrtime());
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JlbmNobWFyay11bmljb2RlLWNoYXJhY3Rlci13aWR0aC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJHO0VBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFFSDtBQUZHLE1BQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxVQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQTs7O0VBS0gsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQiwwQ0FBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLEtBSEYsRUFJRSxLQUpGLEVBS0UsSUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsR0FSRixFQVNFLElBVEYsRUFVRSxPQVZGLEVBV0UsR0FYRixDQUFBLEdBVzRCLEdBQUcsQ0FBQyxHQVhoQzs7RUFZQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1QixFQTNCRzs7O0VBNkJILENBQUEsQ0FBRSxHQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLDRDQUFSLENBQTVCOztFQUNBLElBQUEsR0FBNEIsT0FBQSxDQUFRLDJCQUFSOztFQUM1QixDQUFBLENBQUUsSUFBRixDQUFBLEdBQTRCLElBQTVCOztFQUNBLFNBQUEsR0FBNEIsT0FBQSxDQUFRLDZDQUFSLEVBaEN6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWtGSCxJQUFDLENBQUEsVUFBRCxHQUFjLFVBQUEsR0FHWixDQUFBOztJQUFBLEVBQUEsRUFBSSxRQUFBLENBQUEsQ0FBQTtBQUNOLFVBQUEsQ0FBQSxFQUFBLG9CQUtrRSx5QkFMbEUsRUFBQSxlQUFBLEVBQUEsUUFBQSxFQUFBLHNCQUFBLEVBQUEsbUJBTWtFLDhCQU5sRSxFQUFBLG1CQUFBLEVBQUEsbUJBQUEsRUFBQTtNQUFJLENBQUE7UUFBRSx1QkFBQSxFQUF5QjtNQUEzQixDQUFBLEdBQWtDLFNBQVMsQ0FBQywrQkFBVixDQUFBLENBQWxDO01BQ0EsQ0FBQSxDQUFFLGVBQUYsQ0FBQSxHQUFrQyxTQUFTLENBQUMsaUJBQVYsQ0FBQSxDQUFsQztNQUdBLENBQUEsQ0FBQTs7O1FBQUUsT0FBQSxFQUFTO01BQVgsQ0FBQSxHQUFzQyxPQUFBLENBQVEsY0FBUixDQUF0QztNQUNBLENBQUE7UUFEOEQsK0JBQzVELE9BQUEsRUFBUztNQUFYLENBQUEsR0FBc0MsT0FBQSxDQUFRLFlBQVIsQ0FBdEM7TUFDQSxvQkFBQSxHQUFzQyxPQUFBLENBQVEsVUFBUjtNQUN0QyxtQkFBQSxHQUFzQyxRQUFBLENBQUUsSUFBRixDQUFBO2VBQVksQ0FBRSxvQkFBQSxDQUFxQixJQUFyQixDQUFGLENBQTZCLENBQUMsSUFBOUIsQ0FBQTtNQUFaO01BQ3RDLENBQUEsQ0FBRSxzQkFBRixDQUFBLEdBQXNDLFNBQVMsQ0FBQyxRQUFRLENBQUMsMEJBQW5CLENBQUEsQ0FBdEMsRUFSSjs7TUFVSSxtQkFBQSxHQUFzQixDQUNwQixDQUFFLEtBQUYsRUFBUyxDQUFULENBRG9CLEVBRXBCLENBQUUsTUFBRixFQUFVLENBQVYsQ0FGb0IsRUFHcEIsQ0FBRSxRQUFGLEVBQVksQ0FBWixDQUhvQixFQUlwQixDQUFFLEtBQUYsRUFBUyxDQUFULENBSm9CLEVBS3BCLENBQUUsS0FBRixFQUFTLENBQVQsQ0FMb0IsRUFNcEIsQ0FBRSxTQUFGLEVBQWEsRUFBYixDQU5vQixFQU9wQixDQUFFLE9BQUYsRUFBVyxDQUFYLENBUG9CLEVBUXBCLENBQUUsT0FBRixFQUFXLENBQVgsQ0FSb0IsRUFTcEIsQ0FBRSxNQUFGLEVBQVUsQ0FBVixDQVRvQixFQVVwQixDQUFFLFFBQUYsRUFBWSxDQUFaLENBVm9CLEVBV3BCLENBQUUsUUFBRixFQUFZLENBQVosQ0FYb0IsRUFZcEIsQ0FBRSxNQUFGLEVBQVUsQ0FBVixDQVpvQixFQWFwQixDQUFFLE1BQUYsRUFBVSxDQUFWLENBYm9CLEVBY3BCLENBQUUsS0FBRixFQUFTLENBQVQsQ0Fkb0IsRUFlcEIsQ0FBRSxLQUFGLEVBQVMsQ0FBVCxDQWZvQixFQWdCcEIsQ0FBRSxLQUFGLEVBQVMsQ0FBVCxDQWhCb0IsRUFpQnBCLENBQUUsTUFBRixFQUFVLENBQVYsQ0FqQm9CLEVBa0JwQixDQUFFLE9BQUYsRUFBVyxDQUFYLENBbEJvQixFQW1CcEIsQ0FBRSxPQUFGLEVBQVcsQ0FBWCxDQW5Cb0IsRUFvQnBCLENBQUUsU0FBRixFQUFhLENBQWIsQ0FwQm9CLEVBcUJwQixDQUFFLGNBQUYsRUFBa0IsRUFBbEIsQ0FyQm9CLEVBc0JwQixDQUFFLDhEQUFGLEVBQWtFLEVBQWxFLENBdEJvQixFQXVCcEIsQ0FBRSxTQUFGLEVBQWEsQ0FBYixDQXZCb0IsRUF3QnBCLENBQUUsZ0JBQUYsRUFBb0IsRUFBcEIsQ0F4Qm9CLEVBeUJwQixDQUFFLHdDQUFGLEVBQTRDLEVBQTVDLENBekJvQixFQTBCcEIsQ0FBRSx1Q0FBRixFQUEyQyxFQUEzQyxDQTFCb0IsRUEyQnBCLENBQUUsNkJBQUYsRUFBaUMsRUFBakMsQ0EzQm9CLEVBNEJwQixDQUFFLDZCQUFGLEVBQWlDLEVBQWpDLENBNUJvQixFQTZCcEIsQ0FBRSx3Q0FBRixFQUE0QyxDQUE1QyxDQTdCb0IsRUE4QnBCLENBQUUsMkNBQUYsRUFBK0MsQ0FBL0MsQ0E5Qm9CLEVBK0JwQixDQUFFLDJDQUFGLEVBQStDLENBQS9DLENBL0JvQixFQWdDcEIsQ0FBRSxnREFBRixFQUFvRCxDQUFwRCxDQWhDb0IsRUFpQ3BCLENBQUUsMkNBQUYsRUFBK0MsQ0FBL0MsQ0FqQ29CLEVBa0NwQixDQUFFLGNBQUYsRUFBa0IsRUFBbEIsQ0FsQ29CLEVBbUNwQixDQUFFLGNBQUYsRUFBa0IsRUFBbEIsQ0FuQ29CLEVBb0NwQixDQUFFLElBQUYsRUFBUSxFQUFSLENBcENvQixFQXFDcEIsQ0FBRSxJQUFGLEVBQVEsRUFBUixDQXJDb0IsRUFWMUI7OztNQW1ESSxRQUFBLEdBQVcsZUFBQSxDQUFnQjtRQUFFLE1BQUEsRUFBUTtNQUFWLENBQWhCO01BQ1IsQ0FBQSxDQUFBLENBQUEsR0FBQTtBQUNQLFlBQUEsWUFBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsUUFBQSxFQUFBLEVBQUEsRUFBQSxHQUFBLEVBQUEsRUFBQSxFQUFBLEdBQUEsRUFBQSxFQUFBLEVBQUEsR0FBQSxFQUFBLEVBQUEsRUFBQTtRQUFNLFlBQUEsR0FBZSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVg7UUFDZixLQUFBLHFEQUFBO1VBQUksQ0FBRSxLQUFGLEVBQVMsT0FBVDtVQUNGLEVBQUEsR0FBWSxtQkFBQSxDQUF3QixLQUF4QjtVQUErQixHQUFBLEdBQU0sT0FBQSxDQUFRLENBQUssRUFBQSxLQUFNLE9BQVQsR0FBc0IsS0FBdEIsR0FBb0MsQ0FBQSxRQUFBLENBQUEsQ0FBQTtZQUFHLFlBQVksQ0FBRSxDQUFGLENBQVo7bUJBQXFCO1VBQXhCLENBQUEsR0FBdEMsQ0FBQSxDQUFvRSxDQUFDLEVBQUEsQ0FBQSxDQUFJLEVBQUosQ0FBQSxNQUFBLENBQXJFLENBQVI7VUFDakQsRUFBQSxHQUFZLG1CQUFBLENBQXdCLEtBQXhCO1VBQStCLEdBQUEsR0FBTSxPQUFBLENBQVEsQ0FBSyxFQUFBLEtBQU0sT0FBVCxHQUFzQixLQUF0QixHQUFvQyxDQUFBLFFBQUEsQ0FBQSxDQUFBO1lBQUcsWUFBWSxDQUFFLENBQUYsQ0FBWjttQkFBcUI7VUFBeEIsQ0FBQSxHQUF0QyxDQUFBLENBQW9FLENBQUMsRUFBQSxDQUFBLENBQUksRUFBSixDQUFBLE1BQUEsQ0FBckUsQ0FBUjtVQUNqRCxFQUFBLEdBQVksbUJBQUEsQ0FBd0IsS0FBeEI7VUFBK0IsR0FBQSxHQUFNLE9BQUEsQ0FBUSxDQUFLLEVBQUEsS0FBTSxPQUFULEdBQXNCLEtBQXRCLEdBQW9DLENBQUEsUUFBQSxDQUFBLENBQUE7WUFBRyxZQUFZLENBQUUsQ0FBRixDQUFaO21CQUFxQjtVQUF4QixDQUFBLEdBQXRDLENBQUEsQ0FBb0UsQ0FBQyxFQUFBLENBQUEsQ0FBSSxFQUFKLENBQUEsTUFBQSxDQUFyRSxDQUFSO1VBQ2pELEVBQUEsR0FBWSxzQkFBQSxDQUF3QixLQUF4QjtVQUErQixHQUFBLEdBQU0sT0FBQSxDQUFRLENBQUssRUFBQSxLQUFNLE9BQVQsR0FBc0IsS0FBdEIsR0FBb0MsQ0FBQSxRQUFBLENBQUEsQ0FBQTtZQUFHLFlBQVksQ0FBRSxDQUFGLENBQVo7bUJBQXFCO1VBQXhCLENBQUEsR0FBdEMsQ0FBQSxDQUFvRSxDQUFDLEVBQUEsQ0FBQSxDQUFJLEVBQUosQ0FBQSxNQUFBLENBQXJFLENBQVI7VUFDakQsSUFBQSxHQUFZLENBQUEsQ0FBQSxDQUFBLEVBQUEsS0FBTSxFQUFOLElBQU0sRUFBTixLQUFZLEVBQVosQ0FBQSxJQUFZLEVBQVosS0FBa0IsRUFBbEIsQ0FBQSxJQUFrQixFQUFsQixLQUF3QixPQUF4QjtVQUNaLFFBQUEsR0FBWSxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQVIsQ0FBZ0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFSLENBQWMsSUFBZCxDQUFoQjtVQUNaLEtBQXNGLElBQXRGO1lBQUEsT0FBQSxDQUFRLE9BQVIsRUFBaUIsQ0FBQyxDQUFBLENBQUEsQ0FBRyxRQUFILENBQUEsb0NBQUEsQ0FBQSxDQUFrRCxRQUFsRCxDQUFBLENBQWxCLEVBQUE7O1VBQ0EsSUFBQSxDQUFRLE9BQVIsRUFBaUIsQ0FBQyxDQUFBLENBQUEsQ0FBRyxRQUFILENBQUEsTUFBQSxDQUFBLENBQW9CLE9BQXBCLENBQUEsUUFBQSxDQUFBLENBQXNDLEdBQXRDLEVBQUEsQ0FBQSxDQUE2QyxHQUE3QyxFQUFBLENBQUEsQ0FBb0QsR0FBcEQsRUFBQSxDQUFBLENBQTJELEdBQTNELEVBQUEsQ0FBQSxDQUFrRSxHQUFBLENBQUksS0FBSixDQUFsRSxDQUFBLENBQWxCO1FBUkY7UUFTQSxJQUFBLENBQVEsT0FBUixFQUFpQixDQUFDLENBQUEsQ0FBQSxDQUFHLEVBQUgsQ0FBQSxNQUFBLENBQUEsQ0FBYyxFQUFkLENBQUEsTUFBQSxDQUFBLENBQXlCLFlBQVksQ0FBQyxDQUFELENBQXJDLENBQUEsU0FBQSxDQUFBLENBQW9ELFlBQVksQ0FBQyxDQUFELENBQWhFLENBQUEsU0FBQSxDQUFBLENBQStFLFlBQVksQ0FBQyxDQUFELENBQTNGLENBQUEsU0FBQSxDQUFBLENBQTBHLFlBQVksQ0FBQyxDQUFELENBQXRILENBQUEsUUFBQSxDQUFsQjtBQUNBLGVBQU87TUFaTixDQUFBO01BY0EsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxDQUFBLEVBQUEsa0JBQUEsRUFBQSxFQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxZQUFBLEVBQUEsS0FBQSxFQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUE7UUFBTSxrQkFBQSxHQUFxQixRQUFBLENBQUMsQ0FBRSxDQUFGLEVBQUssRUFBTCxDQUFELENBQUE7aUJBQWdCLENBQUUsTUFBQSxDQUFPLENBQVAsQ0FBRixDQUFBLEdBQWUsY0FBZixHQUFnQyxDQUFFLE1BQUEsQ0FBTyxFQUFQLENBQUY7UUFBaEQ7UUFDckIsWUFBQSxHQUNFO1VBQUEsU0FBQSxFQUFZLG1CQUFaO1VBQ0EsU0FBQSxFQUFZLG1CQURaO1VBRUEsU0FBQSxFQUFZO1FBRlosRUFGUjs7UUFNTSxLQUFBLG9CQUFBOztVQUNFLEVBQUEsR0FBSyxrQkFBQSxDQUFtQixPQUFPLENBQUMsTUFBUixDQUFBLENBQW5CO1VBQ0wsS0FBUyw2QkFBVDtZQUNFLEtBQUEscURBQUE7Y0FBSSxDQUFFLEtBQUYsRUFBUyxPQUFUO2NBQ0YsRUFBQSxHQUFLLEVBQUEsQ0FBRyxLQUFIO1lBRFA7VUFERjtVQUdBLEVBQUEsR0FBSyxrQkFBQSxDQUFtQixPQUFPLENBQUMsTUFBUixDQUFBLENBQW5CO1VBQ0wsS0FBQSxDQUFNLE9BQU4sRUFBZSxJQUFmLEVBQXFCLENBQUMsQ0FBQSxDQUFBLENBQUcsQ0FBRSxNQUFBLENBQU8sRUFBQSxHQUFLLEVBQVosQ0FBRixDQUFBLEdBQXFCLFNBQXhCLENBQUEsU0FBQSxDQUF0QjtRQU5GO0FBT0EsZUFBTztNQWROLENBQUEsSUFsRVA7O0FBa0ZJLGFBQU87SUFuRkw7RUFBSixFQXJGQzs7O0VBNktILElBQUcsTUFBQSxLQUFVLE9BQU8sQ0FBQyxJQUFyQjtJQUErQixNQUFTLENBQUEsQ0FBQSxDQUFBLEdBQUE7QUFDeEMsVUFBQSxXQUFBOzs7TUFFRSxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLEtBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLElBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7YUFDZCxDQUFFLElBQUksSUFBSixDQUFTLFdBQVQsQ0FBRixDQUF3QixDQUFDLElBQXpCLENBQThCLENBQUUsVUFBRixDQUE5QjtJQUxzQyxDQUFBLElBQXhDOztBQTdLRyIsInNvdXJjZXNDb250ZW50IjpbIlxuIyMjXG5cblxuIyMgQXBwbGljYXRpb25zXG5cbiogKipSZWdFeCBCdWlsZGVyKiogKGV4YW1wbGUgZnJvbSBbUmVqaWdzIGJsb2cgcG9zdF0oaHR0cHM6Ly9tZWRpdW0uY29tL0BvbWFyemF3YWhyeS9yZWppZ3MtbWFraW5nLXJlZ3VsYXItZXhwcmVzc2lvbnMtaHVtYW4tcmVhZGFibGUtMWZhZDM3Y2IzZWFlKSlcblxuYGBgamF2YVxudmFyIGVtYWlsUmVnZXggPVxuICAgIFJlamlncy5DcmVhdGUoKVxuICAgICAgICAgIC5BdFN0YXJ0KClcbiAgICAgICAgICAuT25lT3JNb3JlKHIgPT4gci5BbnlMZXR0ZXJPckRpZ2l0KCkuT3IoKS5BbnlPZihcIi5fJSstXCIpKVxuICAgICAgICAgIC5UZXh0KFwiQFwiKVxuICAgICAgICAgIC5PbmVPck1vcmUociA9PiByLkFueUxldHRlck9yRGlnaXQoKS5PcigpLkFueU9mKFwiLi1cIikpXG4gICAgICAgICAgLlRleHQoXCIuXCIpXG4gICAgICAgICAgLkFueUxldHRlck9yRGlnaXQoKS5BdExlYXN0KDIpXG4gICAgICAgICAgLkF0RW5kKClcbiAgICAgICAgICAuQnVpbGQoKTtcbmBgYFxuXG4qICoqSFRNTC9YTUwgQnVpbGVyKipcbiogKipTUUwgQnVpbGRlcioqXG4qICoqQ0xJIENvbG9yaW5nKipcbiogc3ludGF4IGZvciBhICoqVHlwZSBDaGVja2VyKipcblxuIyMjXG5cbid1c2Ugc3RyaWN0J1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnYmVuY2htYXJrLXVuaWNvZGUtY2hhcmFjdGVyLXdpZHRoLmNvZmZlZSdcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICB3aGl0ZVxuICBncmVlblxuICBibHVlXG4gIGdvbGRcbiAgZ3JleVxuICByZWRcbiAgYm9sZFxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuIyB3cml0ZSAgICAgICAgICAgICAgICAgICAgID0gKCBwICkgLT4gcHJvY2Vzcy5zdGRvdXQud3JpdGUgcFxueyBuZmEgfSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zaW5nbGUtZmlsZS1tb2R1bGVzJ1xuXG5cblxuXG4jIyNcblxuRnJvbSBbYGNoYWxrL3N0cmlwLWFuc2lgXShodHRwczovL2dpdGh1Yi5jb20vY2hhbGsvc3RyaXAtYW5zaSkgYFJFQURNRS5tZGA6XG5cbj4gPiBbIU5PVEVdXG4+ID5cbj4gPiBOb2RlLmpzIGhhcyB0aGlzIGJ1aWx0LWluIG5vdyB3aXRoXG4+ID4gW2BzdHJpcFZUQ29udHJvbENoYXJhY3RlcnNgXShodHRwczovL25vZGVqcy5vcmcvYXBpL3V0aWwuaHRtbCN1dGlsc3RyaXB2dGNvbnRyb2xjaGFyYWN0ZXJzc3RyKS4gVGhlXG4+ID4gYmVuZWZpdCBvZiB0aGlzIHBhY2thZ2UgaXMgY29uc2lzdGVudCBiZWhhdmlvciBhY3Jvc3MgTm9kZS5qcyB2ZXJzaW9ucyBhbmQgZmFzdGVyIGltcHJvdmVtZW50cy4gVGhlXG4+ID4gTm9kZS5qcyB2ZXJzaW9uIGlzIGFjdHVhbGx5IGJhc2VkIG9uIHRoaXMgcGFja2FnZS5cblxuY29uc29sZS5sb2codXRpbC5zdHJpcFZUQ29udHJvbENoYXJhY3RlcnMoJ1xcdTAwMUJbNG12YWx1ZVxcdTAwMUJbMG0nKSlcblxuTm90ZXM6XG5cbiAgKiBbKipgc2luZHJlc29yaHVzL3N0cmluZy13aWR0aGAqKl0oaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9zdHJpbmctd2lkdGgpIGJ5IFNpbmRyZSBTb3JodXM7XG4gICAgZGVwZW5kZW5jaWVzIGluY2x1ZGUgW2BtYXRoaWFzYnluZW5zL2Vtb2ppLXJlZ2V4YF0oaHR0cHM6Ly9naXRodWIuY29tL21hdGhpYXNieW5lbnMvZW1vamktcmVnZXgpICh3aGljaFxuICAgIGNvdWxkIGJlIHJlcGxhY2VkIHdpdGggYSBzbWFsbGVyIGxpYnJhcnkgd2l0aCB0aGUgc2FtZSBBUElcbiAgICBbYHNsZXZpdGhhbi9lbW9qaS1yZWdleC14c2BdKGh0dHBzOi8vZ2l0aHViLmNvbS9zbGV2aXRoYW4vZW1vamktcmVnZXgteHMpKTsgbm90ZSB0aGUgbnVtYmVyIG9mXG4gICAgd2VsbC1rbm93biwgdHJ1c3RlZCBhdXRob3JzIGhlcmUgdGhhdCBtb3JlIG9mdGVuIHRoYW4gbm90IGRlbGl2ZXIgaGlnaC1xdWFsaXR5IHNvZnR3YXJlLlxuXG4gICAgRGVwZW5kZW5jaWVzOlxuICAgICAgKiBbYG1hdGhpYXNieW5lbnMvZW1vamktcmVnZXhgXShodHRwczovL2dpdGh1Yi5jb20vbWF0aGlhc2J5bmVucy9lbW9qaS1yZWdleClcbiAgICAgICogW2Brb21hZ2F0YS9nZXQtZWFzdC1hc2lhbi13aWR0aGBdKGh0dHBzOi8vZ2l0aHViLmNvbS9rb21hZ2F0YS9lYXN0YXNpYW53aWR0aClcbiAgICAgICogW2BjaGFsay9zdHJpcC1hbnNpYF0oaHR0cHM6Ly9naXRodWIuY29tL2NoYWxrL3N0cmlwLWFuc2kpXG4gICAgICAgICogW2BjaGFsay9hbnNpLXJlZ2V4YF0oaHR0cHM6Ly9naXRodWIuY29tL2NoYWxrL2Fuc2ktcmVnZXgpXG5cbiAgKiBbKipgbWFydGluaGVpZGVnZ2VyL3djc3RyaW5nYCoqXShodHRwczovL2dpdGh1Yi5jb20vbWFydGluaGVpZGVnZ2VyL3djc3RyaW5nKTogZG9lcyBhIGxvdCBvZiBzdHJpbmdcbiAgICBtYW5pcHVsYXRpb24gc3R1ZmYgdGhhdCB3ZSBkb24ndCBuZWVkIG9yIHBsYW4gdG8gaW1wbGVtZW50IGluIGEgc2ltaWxhciBidXQgZGlmZmVyZW50IHdheTsgdXNlcyBgd2NzaXplYFxuICAgIHNvIHByZXN1bWFibHkgYWxzbyBpbmhlcml0cyBpdHMgcHJvYmxlbXMoPylcblxuRXhjbHVkZWQ6XG5cbiAgKiBbKipgbWFydGluaGVpZGVnZ2VyL3djc2l6ZWAqKl0oaHR0cHM6Ly9naXRodWIuY29tL21hcnRpbmhlaWRlZ2dlci93Y3NpemUpOiBub3QgdmVyeSB3ZWxsIHVzYWJsZSBpblxuICAgIG1vZGVybiBlbnZpcm9ubWVudHMgYXMgYHdjc2l6ZWAsIGFjY29yZGluZyB0byB0aGUgZG9jcywgXCJkaWZmZXJbLi4uXXMgZnJvbSBib3RoIFtgd2N3aWR0aGAgYW5kXG4gICAgYHZpc3VhbHdpZHRoLWpzYF0gYnkgb25seSByZXR1cm5pbmcgdGhlIHdpZHRoIG9mIG9uZSBjaGFyYWN0ZXIgKGFzIGludGVnZXIhKVwiLCBtZWFuaW5nIHRoYXQgaXQgY2Fubm90LFxuICAgIGJ5IGNvbnN0cnVjdGlvbiwgaGFuZGxlIGNvbXBvc2VkIExhdGluIGFjY2VudGVkIGxldHRlcnMsIG9yIGxldCBhbG9uZSBtdWx0aS1jb2RlcG9pbnQgZW1vamkuIEl0IGFsc29cbiAgICBzdHJ1Z2dsZXMgd2l0aCBVbmljb2RlIHN1cnJvZ2F0ZSBoYW5kbGluZywgYXQgbGVhc3QgaW4gdHJ5aW5nIHRvIG1ha2Ugc2Vuc2Ugb2YgdGhlbSBpbiB0aGUgYFJFQURNRS5tZGAuXG5cbiAgKiBbKipgdG9rdWhpcm9tL3Zpc3VhbHdpZHRoLWpzYCoqXShodHRwczovL2dpdGh1Yi5jb20vdG9rdWhpcm9tL3Zpc3VhbHdpZHRoLWpzKTogdG9vIG9sZCwgc3RhcnRlZCBjYS5cbiAgICAyMDExLCBsYXN0IGNvbW1pdCBmcm9tIGNhLiAyMDE1XG5cbiMjI1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBiZW5jaG1hcmtzID0gYmVuY2htYXJrcyA9XG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBmbjogLT5cbiAgICB7IGFuc2lfY29sb3JzX2FuZF9lZmZlY3RzOiBDLCB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfYW5zaV9jb2xvcnNfYW5kX2VmZmVjdHMoKVxuICAgIHsgYnVpbGRfY2hyX2dhdWdlICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9jaHJfZ2F1Z2UoKVxuICAgICMgeyBBbnNpX2NodW5rZXIsICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2Fuc2lfY2h1bmtlcigpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICB7IGRlZmF1bHQ6IHNpc29fc3R3aV9nZXRfd2lkdGgsICB9ICA9IHJlcXVpcmUgJ3N0cmluZy13aWR0aCcgICMjIyBzaW5kcmVzb3JodXMvc3RyaW5nLXdpZHRoICMjI1xuICAgIHsgZGVmYXVsdDogbXljb193Y3dpX2dldF93aWR0aCwgIH0gID0gcmVxdWlyZSAnd2N3aWR0aC5qcycgICAgIyMjIG15Y29ib2NvL3djd2lkdGguanMgIyMjXG4gICAgX21haGVfd2NzdF9nZXRfd2lkdGggICAgICAgICAgICAgICAgPSByZXF1aXJlICd3Y3N0cmluZycgICAgICAjIyMgbWFydGluaGVpZGVnZ2VyL3djc3RyaW5nICMjI1xuICAgIG1haGVfd2NzdF9nZXRfd2lkdGggICAgICAgICAgICAgICAgID0gKCB0ZXh0ICkgLT4gKCBfbWFoZV93Y3N0X2dldF93aWR0aCB0ZXh0ICkuc2l6ZSgpXG4gICAgeyBnZXRfd2NfbWF4X2xpbmVfbGVuZ3RoLCB9ICAgICAgICAgPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9jb21tYW5kX2xpbmVfdG9vbHMoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcHJvYmVzX2FuZF9tYXRjaGVycyA9IFtcbiAgICAgIFsgJ3h4eCcsIDMsIF1cbiAgICAgIFsgJ3jwn5mLeCcsIDQsIF1cbiAgICAgIFsgJ3jwn5mL8J+PvXgnLCA2LCBdXG4gICAgICBbICd47JKHeCcsIDQsIF1cbiAgICAgIFsgJ3jrs4R4JywgNCwgXVxuICAgICAgWyAneOOFgiDjhZUg44S5eCcsIDEwLCBdXG4gICAgICBbICd444WC44WV44S5eCcsIDgsIF1cbiAgICAgIFsgJ3jvvrLvv4rvvql4JywgNSwgXVxuICAgICAgWyAneOuzhEx4JywgNSwgXVxuICAgICAgWyAneGHvuKBi77iheCcsIDQsIF1cbiAgICAgIFsgJ3hh77igYu+4oXgnLCA0LCBdXG4gICAgICBbICd4YcyCeCcsIDMsIF1cbiAgICAgIFsgJ3jwk4O1eCcsIDMsIF1cbiAgICAgIFsgJ3jvt714JywgMywgXVxuICAgICAgWyAnYs2dYScsIDIsIF1cbiAgICAgIFsgJ2HNoG8nLCAyLCBdXG4gICAgICBbICd4zbh4eCcsIDQsIF1cbiAgICAgIFsgJ3jXkNeR15J4JywgNSwgXVxuICAgICAgWyAneNup253bnngnLCA0LCBdXG4gICAgICBbICd44L2R4L6m4L284L2E4LyLeCcsIDUsIF1cbiAgICAgIFsgJ3jwsIKA8LCCgfCwgoLwsIKD8LCChHgnLCAxMiwgXVxuICAgICAgWyAnePCQi6HwkIui8JCLo/CQi6TwkIul8JCLpvCfmKLwn5ij8J+YpPCfmLTwn5i38J+ZpPCfmaXwn5my8J+Zs/CfmbTwn5m88J+ZvfCfmb7wn5m/8J+ah/CfnZbwn56n8J2QgPCdkIHwnZCC8J2Qg+KfgOKfgeKfguKfg3gnLCAzOSwgXVxuICAgICAgWyAneOK/vOK/veK/vuK/v+K/u3gnLCA4LCBdXG4gICAgICBbICd44r+w4r+x4r+y4r+z4r+04r+14r+24r+34r+44r+54r+64r+7eCcsIDI2LCBdXG4gICAgICBbICd4XHUwMDA34Z2t4YSd243groPhj5Pfv8S34Zuc4LSl4Y2n1ZTZmPCfjYfgqYfhj4nwn5OI4Y2ty5Pwn5W94KKA4K+94YKl4ZuH4Z2W8J+Nu8mH4Zu+4puE4Yqa4L2F4ZqyeCcsIDI2LCBdXG4gICAgICBbICd44LaXx5ngqrDwn5OOXsyK4L6R3bHgrIDIiOGHn+C0tfCfkoHgq63HvFx1MDAwNOGbgNaJ4KqIzJLwn5SR4KeGx5bYos6s2rDgp7bhlL7gvrPRi+CsrOCuo3gnLCAyNiwgXVxuICAgICAgWyAneNCQ4KaB0JDQkNGj0JDcmNGj4KWQyLLQkNyY4KaBzIPRo8iy0aPMg9Gj4KaB3pDdp+ClkMyD4KWQeCcsIDI2LCBdXG4gICAgICBbICd44KaB0JDekMyD3JjgpZDQkNGjyLLQkN2n4KWQ3JjRo8iy4KaB3JjgpZDcmOCmgeClkN2n3afekOClkHgnLCAyNiwgXVxuICAgICAgWyAneDDDg+ixssOb8riujVvpoJTsr54m2bjwvYO4VeWllznnrJdh5JirfdKt4rSyyZRJ5bmZNvOPtIPjgqhFZvKSn4DOgT/niYN4JywgMCwgXVxuICAgICAgWyAneM+Nzo3yi4GlJcmZypjenPCijazujKDCtNmQ8qORpV7Ok/Cwm6VFfWHTh3vVhCRH6LSyXfC/kpXujKRZffK3n4fvh7byoo+ZeCcsIDAsIF1cbiAgICAgIFsgJ3g5866KmNuG84WJqPKMt7rzrKWY2qnUtmnemDXnvYzloZXEtDPRt+WkjnXIuPK8s7jzrYOt8bOMtFF+7pSdQ0vksa7ho7xXPuerpngnLCAwLCBdXG4gICAgICBbICd47ZWgU/SCv5rzmY+wcvKHnIVo84irq/GFprXbv+OZm/OenbZOzpXzroCe8bCRuPKfnq7wsIqm7YSd5JGt0YjyhYi6z5vJoGDCsGpr5IK+5KKv9IWMseqzongnLCAwLCBdXG4gICAgICBbICd48YmDk/KNpo5Q8Ly7ntOPOe6NvuyvrNy806zmkpfynoWb37DmoqHwrqam5oO6b/SOjJXop77Xpd+P46ek4YGy1Lzlk4vwm6em7LyI264k7ZSV76S86omAeCcsIDAsIF1cbiAgICAgIFsgJ3jwn5iA8J+QsfCfjJ/wn5qA8J+NlXgnLCAyNiwgXVxuICAgICAgWyAnePCTgIDwk4GQ8JODsPCThqPwk4KAeCcsIDI2LCBdXG4gICAgICBbICd4eCcsIDI2LCBdXG4gICAgICBbICd4eCcsIDI2LCBdXG4gICAgICAjIFsgKCByZWQgJ2FiYycgKSwgMywgXVxuICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZ2F1Z2VfNjAgPSBidWlsZF9jaHJfZ2F1Z2UgeyBsZW5ndGg6IDYwLCB9XG4gICAgZG8gPT5cbiAgICAgIGVycm9yX2NvdW50cyA9IFsgMCwgMCwgMCwgMCwgXVxuICAgICAgZm9yIFsgcHJvYmUsIG1hdGNoZXIsIF0gaW4gcHJvYmVzX2FuZF9tYXRjaGVyc1xuICAgICAgICB3MSAgICAgICAgPSBzaXNvX3N0d2lfZ2V0X3dpZHRoICAgICBwcm9iZTsgdzFyID0gcmV2ZXJzZSAoIGlmIHcxIGlzIG1hdGNoZXIgdGhlbiBncmVlbiBlbHNlIGRvIC0+IGVycm9yX2NvdW50c1sgMCBdKys7IHJlZCApIGZcIiAje3cxfTo+M2M7IFwiXG4gICAgICAgIHcyICAgICAgICA9IG15Y29fd2N3aV9nZXRfd2lkdGggICAgIHByb2JlOyB3MnIgPSByZXZlcnNlICggaWYgdzIgaXMgbWF0Y2hlciB0aGVuIGdyZWVuIGVsc2UgZG8gLT4gZXJyb3JfY291bnRzWyAxIF0rKzsgcmVkICkgZlwiICN7dzJ9Oj4zYzsgXCJcbiAgICAgICAgdzMgICAgICAgID0gbWFoZV93Y3N0X2dldF93aWR0aCAgICAgcHJvYmU7IHczciA9IHJldmVyc2UgKCBpZiB3MyBpcyBtYXRjaGVyIHRoZW4gZ3JlZW4gZWxzZSBkbyAtPiBlcnJvcl9jb3VudHNbIDIgXSsrOyByZWQgKSBmXCIgI3t3M306PjNjOyBcIlxuICAgICAgICB3NCAgICAgICAgPSBnZXRfd2NfbWF4X2xpbmVfbGVuZ3RoICBwcm9iZTsgdzRyID0gcmV2ZXJzZSAoIGlmIHc0IGlzIG1hdGNoZXIgdGhlbiBncmVlbiBlbHNlIGRvIC0+IGVycm9yX2NvdW50c1sgMyBdKys7IHJlZCApIGZcIiAje3c0fTo+M2M7IFwiXG4gICAgICAgIHNhbWUgICAgICA9IHcxID09IHcyID09IHczID09IHc0ID09IG1hdGNoZXJcbiAgICAgICAgc2FtZV9ycHIgID0gR1VZLnRybS5yZXZlcnNlIEdVWS50cm0udHJ1dGggc2FtZVxuICAgICAgICB3aGlzcGVyICfOqV9fXzEnLCBmXCIje3NhbWVfcnByfTo+NWM7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICN7Z2F1Z2VfNjB9XCIgdW5sZXNzIHNhbWVcbiAgICAgICAgaGVscCAgICAnzqlfX18yJywgZlwiI3tzYW1lX3Jwcn06PjVjOyAje21hdGNoZXJ9Oj40LjBmOyAje3cxcn0gI3t3MnJ9ICN7dzNyfSAje3c0cn0gI3tycHIgcHJvYmV9XCJcbiAgICAgIGluZm8gICAgJ86pX19fMycsIGZcIiN7Jyd9Oj41YzsgI3snJ306PjRjOyAje2Vycm9yX2NvdW50c1swXX06PjQuMGY7ICAje2Vycm9yX2NvdW50c1sxXX06PjQuMGY7ICAje2Vycm9yX2NvdW50c1syXX06PjQuMGY7ICAje2Vycm9yX2NvdW50c1szXX06PjQuMGY7IFwiXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGJpZ2ludF9mcm9tX2hydGltZSA9IChbIHMsIG5zLCBdKSAtPiAoIEJpZ0ludCBzICkgKiAxXzAwMF8wMDBfMDAwbiArICggQmlnSW50IG5zIClcbiAgICAgIHBhcnRpY2lwYW50cyA9XG4gICAgICAgIHNpc29fc3R3aTogIHNpc29fc3R3aV9nZXRfd2lkdGhcbiAgICAgICAgbXljb193Y3dpOiAgbXljb193Y3dpX2dldF93aWR0aFxuICAgICAgICBtYWhlX3djc3Q6ICBtYWhlX3djc3RfZ2V0X3dpZHRoXG4gICAgICAgICMgd2NfbWF4X2xsOiAgZ2V0X3djX21heF9saW5lX2xlbmd0aFxuICAgICAgZm9yIG5hbWUsIGZuIG9mIHBhcnRpY2lwYW50c1xuICAgICAgICB0MCA9IGJpZ2ludF9mcm9tX2hydGltZSBwcm9jZXNzLmhydGltZSgpXG4gICAgICAgIGZvciBfIGluIFsgMCAuLiA1ZTMgXVxuICAgICAgICAgIGZvciBbIHByb2JlLCBtYXRjaGVyLCBdIGluIHByb2Jlc19hbmRfbWF0Y2hlcnNcbiAgICAgICAgICAgIHcxID0gZm4gcHJvYmVcbiAgICAgICAgdDEgPSBiaWdpbnRfZnJvbV9ocnRpbWUgcHJvY2Vzcy5ocnRpbWUoKVxuICAgICAgICBkZWJ1ZyAnzqlfX182JywgbmFtZSwgZlwiI3soIE51bWJlciB0MSAtIHQwICkgLyAxXzAwMF8wMDB9Oj4yMCwuOWY7XCJcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgIyBkZW1vX2luZmluaXRlX3Byb3h5KClcbiAgIyBkZW1vX2NvbG9yZnVsX3Byb3h5KClcbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBiZW5jaG1hcmtzLCB9XG4iXX0=
//# sourceURL=../src/benchmark-unicode-character-width.coffee