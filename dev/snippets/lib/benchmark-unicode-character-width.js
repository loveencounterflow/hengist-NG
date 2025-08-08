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
      var Ansi_chunker, C, _mahe_wcst_get_width/* mycoboco/wcwidth.js */, build_chr_gauge, cache_1, cache_2, gauge_60, get_wc_max_line_length, js_segmentize, mahe_wcst_get_width/* martinheidegger/wcstring */, myco_wcwi_get_width, probes_and_matchers, siso_cch1_get_width, siso_cch2_get_width, siso_stwi_get_width;
      ({
        ansi_colors_and_effects: C
      } = SFMODULES.require_ansi_colors_and_effects());
      ({build_chr_gauge} = SFMODULES.require_chr_gauge());
      ({Ansi_chunker, js_segmentize} = SFMODULES.require_ansi_chunker());
      ({
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
      cache_1 = new Map();
      siso_cch1_get_width = function(text) {
        var R;
        if ((R = cache_1.get(text)) != null) {
          return R;
        }
        cache_1.set(text, R = siso_stwi_get_width(text));
        return R;
      };
      //.......................................................................................................
      cache_2 = new Map();
      siso_cch2_get_width = function(text) {
        var R, i, len, ref, segment, segments, width;
        R = 0;
        ref = segments = js_segmentize(text);
        for (i = 0, len = ref.length; i < len; i++) {
          segment = ref[i];
          if ((width = cache_2.get(segment)) == null) {
            cache_2.set(segment, width = siso_stwi_get_width(segment));
          }
          R += width;
        }
        return R;
      };
      //.......................................................................................................
      gauge_60 = build_chr_gauge({
        length: 60
      });
      //.......................................................................................................
      probes_and_matchers = [['xxx', 3], ['x🙋x', 4], ['x🙋🏽x', 6], ['x쒇x', 4], ['x별x', 4], ['xㅂ ㅕ ㄹx', 10], ['xㅂㅕㄹx', 8], ['xﾲￊﾩx', 5], ['x별Lx', 5], ['xa︠b︡x', 4], ['xa︠b︡x', 4], ['xâx', 3], ['x𓃵x', 3], ['x﷽x', 3], ['b͝a', 2], ['a͠o', 2], ['x͸xx', 4], ['xאבגx', 5], ['x۩۝۞x', 4], ['xདྦོང་x', 5], ['x𰂀𰂁𰂂𰂃𰂄x', 12], ['x𐋡𐋢𐋣𐋤𐋥𐋦😢😣😤😴😷🙤🙥🙲🙳🙴🙼🙽🙾🙿🚇🝖🞧𝐀𝐁𝐂𝐃⟀⟁⟂⟃x', 39], ['x⿼⿽⿾⿿⿻x', 8], ['x⿰⿱⿲⿳⿴⿵⿶⿷⿸⿹⿺⿻x', 26], ['x᝭ᄝۍஃᏓ߿ķᛜഥ፧Ք٘🍇ੇᏉ📈፭˓🕽ࢀ௽Ⴅᛇ᝖🍻ɇ᛾⛄ኚཅᚲx', 35], ['x඗Ǚર📎^̊ྑݱ଀Ȉᇟവ💁૭Ǽᛀ։ઈ̒🔑৆ǖآάڰ৶ᔾླыବணx', 26], ['xАঁААѣАܘѣॐȲАܘঁ̃ѣȲѣ̃ѣঁސݧॐ̃ॐx', 21], ['xঁАސ̃ܘॐАѣȲАݧॐܘѣȲঁܘॐܘঁॐݧݧސॐx', 23], ['x0Ã豲Û򸮍[頔쯞&ٸ𽃸U套9笗a䘫}ҭⴲɔI幙6󏴃エEf򒟀΁?牃x', 44], ['xύ΍򋁥%əʘޜ𢍬´ِ򣑥^Γ𰛥E}aӇ{Մ$G贲]𿒕Y}򷟇򢏙x', 37], ['x9󮊘ۆ󅉨򌷺󬥘کԶiޘ5罌塕Ĵ3ѷ夎uȸ򼳸󭃭񳌴Q~CK䱮᣼W>竦x', 39], ['x할S􂿚󙏰r򇜅h󈫫񅦵ۿ㙛󞝶NΕ󮀞񰑸򟞮𰊦턝䑭ш򅈺ϛɠ`°jk䂾䢯􅌱곢x', 42], ['x񉃓򍦎P𼻞ӏ9쯬ܼӬ撗򞅛߰梡𮦦惺o􎌕觾ץߏ㧤ၲԼ哋𛧦켈ۮ$픕祿ꉀx', 44], ['x😀🐱🌟🚀🍕x', 12], ['x𓀀𓁐𓃰𓆣𓂀x', 7], ['x𝐀𝐁𝐂𝐠𝐡𝐢𝑀𝑁𝑂𝑐𝑑𝑒𝒰𝒱𝒲𝓀𝓁𝓂𝔐𝔑𝔒𝔰𝔱𝔲𝕀𝕁𝕂x', 29], ['xx', 2]];
      (() => {        //.......................................................................................................
        // [ ( red 'abc' ), 3, ]
        var error_counts, i, len, matcher, probe, same, same_rpr, w0, w0r, w1, w1r, w2, w2r, w3, w3r, w4, w4r, w5, w5r;
        error_counts = [0, 0, 0, 0];
        for (i = 0, len = probes_and_matchers.length; i < len; i++) {
          [probe, matcher] = probes_and_matchers[i];
          w0 = siso_stwi_get_width(probe);
          w0r = reverse((w0 === matcher ? green : (function() {
            error_counts[0]++;
            return red;
          })())(f` ${w1}:>3c; `));
          w1 = siso_cch1_get_width(probe);
          w1r = reverse((w1 === matcher ? green : (function() {
            error_counts[1]++;
            return red;
          })())(f` ${w1}:>3c; `));
          w2 = siso_cch2_get_width(probe);
          w2r = reverse((w2 === matcher ? green : (function() {
            error_counts[2]++;
            return red;
          })())(f` ${w1}:>3c; `));
          w3 = myco_wcwi_get_width(probe);
          w3r = reverse((w3 === matcher ? green : (function() {
            error_counts[3]++;
            return red;
          })())(f` ${w2}:>3c; `));
          w4 = mahe_wcst_get_width(probe);
          w4r = reverse((w4 === matcher ? green : (function() {
            error_counts[4]++;
            return red;
          })())(f` ${w3}:>3c; `));
          w5 = get_wc_max_line_length(probe);
          w5r = reverse((w5 === matcher ? green : (function() {
            error_counts[5]++;
            return red;
          })())(f` ${w4}:>3c; `));
          same = w0 = ((((w1 === w2 && w2 === w3) && w3 === w4) && w4 === w5) && w5 === matcher);
          same_rpr = GUY.trm.reverse(GUY.trm.truth(same));
          if (!same) {
            echo('Ω___1', f`${same_rpr}:>5c;                               ${gauge_60}`);
          }
          echo('Ω___2', f`${same_rpr}:>5c; ${matcher}:>4.0f; ${w0r} ${w1r} ${w2r} ${w3r} ${w4r} ${w5r} ${rpr(probe)}`);
        }
        echo('Ω___3', f`${''}:>5c; ${''}:>4c; ${error_counts[0]}:>4.0f;  ${error_counts[1]}:>4.0f;  ${error_counts[2]}:>4.0f;  ${error_counts[3]}:>4.0f; ${error_counts[4]}:>4.0f; ${error_counts[5]}:>4.0f; `);
        return null;
      })();
      (() => {        //.......................................................................................................
        var _, bigint_from_hrtime, fn, i, j, len, matcher, name, participants, probe, t0, t1, w1;
        bigint_from_hrtime = function([s, ns]) {
          return (BigInt(s)) * 1_000_000_000n + (BigInt(ns));
        };
        participants = {
          siso_stwi: siso_stwi_get_width,
          siso_cch1: siso_cch1_get_width,
          siso_cch2: siso_cch2_get_width,
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
          echo('Ω___6', name, f`${(Number(t1 - t0)) / 1_000_000}:>20,.9f;`);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JlbmNobWFyay11bmljb2RlLWNoYXJhY3Rlci13aWR0aC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJHO0VBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFFSDtBQUZHLE1BQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxVQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQTs7O0VBS0gsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQiwwQ0FBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLEtBSEYsRUFJRSxLQUpGLEVBS0UsSUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsR0FSRixFQVNFLElBVEYsRUFVRSxPQVZGLEVBV0UsR0FYRixDQUFBLEdBVzRCLEdBQUcsQ0FBQyxHQVhoQzs7RUFZQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1QixFQTNCRzs7O0VBNkJILENBQUEsQ0FBRSxHQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFR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O0VBQUosRUFyRkM7OztFQWtNSCxJQUFHLE1BQUEsS0FBVSxPQUFPLENBQUMsSUFBckI7SUFBK0IsTUFBUyxDQUFBLENBQUEsQ0FBQSxHQUFBO0FBQ3hDLFVBQUEsV0FBQTs7O01BRUUsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixLQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixJQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO2FBQ2QsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QixDQUFFLFVBQUYsQ0FBOUI7SUFMc0MsQ0FBQSxJQUF4Qzs7QUFsTUciLCJzb3VyY2VzQ29udGVudCI6WyJcbiMjI1xuXG5cbiMjIEFwcGxpY2F0aW9uc1xuXG4qICoqUmVnRXggQnVpbGRlcioqIChleGFtcGxlIGZyb20gW1JlamlncyBibG9nIHBvc3RdKGh0dHBzOi8vbWVkaXVtLmNvbS9Ab21hcnphd2FocnkvcmVqaWdzLW1ha2luZy1yZWd1bGFyLWV4cHJlc3Npb25zLWh1bWFuLXJlYWRhYmxlLTFmYWQzN2NiM2VhZSkpXG5cbmBgYGphdmFcbnZhciBlbWFpbFJlZ2V4ID1cbiAgICBSZWppZ3MuQ3JlYXRlKClcbiAgICAgICAgICAuQXRTdGFydCgpXG4gICAgICAgICAgLk9uZU9yTW9yZShyID0+IHIuQW55TGV0dGVyT3JEaWdpdCgpLk9yKCkuQW55T2YoXCIuXyUrLVwiKSlcbiAgICAgICAgICAuVGV4dChcIkBcIilcbiAgICAgICAgICAuT25lT3JNb3JlKHIgPT4gci5BbnlMZXR0ZXJPckRpZ2l0KCkuT3IoKS5BbnlPZihcIi4tXCIpKVxuICAgICAgICAgIC5UZXh0KFwiLlwiKVxuICAgICAgICAgIC5BbnlMZXR0ZXJPckRpZ2l0KCkuQXRMZWFzdCgyKVxuICAgICAgICAgIC5BdEVuZCgpXG4gICAgICAgICAgLkJ1aWxkKCk7XG5gYGBcblxuKiAqKkhUTUwvWE1MIEJ1aWxlcioqXG4qICoqU1FMIEJ1aWxkZXIqKlxuKiAqKkNMSSBDb2xvcmluZyoqXG4qIHN5bnRheCBmb3IgYSAqKlR5cGUgQ2hlY2tlcioqXG5cbiMjI1xuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2JlbmNobWFyay11bmljb2RlLWNoYXJhY3Rlci13aWR0aC5jb2ZmZWUnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgZ3JlZW5cbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiMgd3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcbnsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2luZ2xlLWZpbGUtbW9kdWxlcydcblxuXG5cblxuIyMjXG5cbkZyb20gW2BjaGFsay9zdHJpcC1hbnNpYF0oaHR0cHM6Ly9naXRodWIuY29tL2NoYWxrL3N0cmlwLWFuc2kpIGBSRUFETUUubWRgOlxuXG4+ID4gWyFOT1RFXVxuPiA+XG4+ID4gTm9kZS5qcyBoYXMgdGhpcyBidWlsdC1pbiBub3cgd2l0aFxuPiA+IFtgc3RyaXBWVENvbnRyb2xDaGFyYWN0ZXJzYF0oaHR0cHM6Ly9ub2RlanMub3JnL2FwaS91dGlsLmh0bWwjdXRpbHN0cmlwdnRjb250cm9sY2hhcmFjdGVyc3N0cikuIFRoZVxuPiA+IGJlbmVmaXQgb2YgdGhpcyBwYWNrYWdlIGlzIGNvbnNpc3RlbnQgYmVoYXZpb3IgYWNyb3NzIE5vZGUuanMgdmVyc2lvbnMgYW5kIGZhc3RlciBpbXByb3ZlbWVudHMuIFRoZVxuPiA+IE5vZGUuanMgdmVyc2lvbiBpcyBhY3R1YWxseSBiYXNlZCBvbiB0aGlzIHBhY2thZ2UuXG5cbmNvbnNvbGUubG9nKHV0aWwuc3RyaXBWVENvbnRyb2xDaGFyYWN0ZXJzKCdcXHUwMDFCWzRtdmFsdWVcXHUwMDFCWzBtJykpXG5cbk5vdGVzOlxuXG4gICogWyoqYHNpbmRyZXNvcmh1cy9zdHJpbmctd2lkdGhgKipdKGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvc3RyaW5nLXdpZHRoKSBieSBTaW5kcmUgU29yaHVzO1xuICAgIGRlcGVuZGVuY2llcyBpbmNsdWRlIFtgbWF0aGlhc2J5bmVucy9lbW9qaS1yZWdleGBdKGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoaWFzYnluZW5zL2Vtb2ppLXJlZ2V4KSAod2hpY2hcbiAgICBjb3VsZCBiZSByZXBsYWNlZCB3aXRoIGEgc21hbGxlciBsaWJyYXJ5IHdpdGggdGhlIHNhbWUgQVBJXG4gICAgW2BzbGV2aXRoYW4vZW1vamktcmVnZXgteHNgXShodHRwczovL2dpdGh1Yi5jb20vc2xldml0aGFuL2Vtb2ppLXJlZ2V4LXhzKSk7IG5vdGUgdGhlIG51bWJlciBvZlxuICAgIHdlbGwta25vd24sIHRydXN0ZWQgYXV0aG9ycyBoZXJlIHRoYXQgbW9yZSBvZnRlbiB0aGFuIG5vdCBkZWxpdmVyIGhpZ2gtcXVhbGl0eSBzb2Z0d2FyZS5cblxuICAgIERlcGVuZGVuY2llczpcbiAgICAgICogW2BtYXRoaWFzYnluZW5zL2Vtb2ppLXJlZ2V4YF0oaHR0cHM6Ly9naXRodWIuY29tL21hdGhpYXNieW5lbnMvZW1vamktcmVnZXgpXG4gICAgICAqIFtga29tYWdhdGEvZ2V0LWVhc3QtYXNpYW4td2lkdGhgXShodHRwczovL2dpdGh1Yi5jb20va29tYWdhdGEvZWFzdGFzaWFud2lkdGgpXG4gICAgICAqIFtgY2hhbGsvc3RyaXAtYW5zaWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFsay9zdHJpcC1hbnNpKVxuICAgICAgICAqIFtgY2hhbGsvYW5zaS1yZWdleGBdKGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFsay9hbnNpLXJlZ2V4KVxuXG4gICogWyoqYG1hcnRpbmhlaWRlZ2dlci93Y3N0cmluZ2AqKl0oaHR0cHM6Ly9naXRodWIuY29tL21hcnRpbmhlaWRlZ2dlci93Y3N0cmluZyk6IGRvZXMgYSBsb3Qgb2Ygc3RyaW5nXG4gICAgbWFuaXB1bGF0aW9uIHN0dWZmIHRoYXQgd2UgZG9uJ3QgbmVlZCBvciBwbGFuIHRvIGltcGxlbWVudCBpbiBhIHNpbWlsYXIgYnV0IGRpZmZlcmVudCB3YXk7IHVzZXMgYHdjc2l6ZWBcbiAgICBzbyBwcmVzdW1hYmx5IGFsc28gaW5oZXJpdHMgaXRzIHByb2JsZW1zKD8pXG5cbkV4Y2x1ZGVkOlxuXG4gICogWyoqYG1hcnRpbmhlaWRlZ2dlci93Y3NpemVgKipdKGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJ0aW5oZWlkZWdnZXIvd2NzaXplKTogbm90IHZlcnkgd2VsbCB1c2FibGUgaW5cbiAgICBtb2Rlcm4gZW52aXJvbm1lbnRzIGFzIGB3Y3NpemVgLCBhY2NvcmRpbmcgdG8gdGhlIGRvY3MsIFwiZGlmZmVyWy4uLl1zIGZyb20gYm90aCBbYHdjd2lkdGhgIGFuZFxuICAgIGB2aXN1YWx3aWR0aC1qc2BdIGJ5IG9ubHkgcmV0dXJuaW5nIHRoZSB3aWR0aCBvZiBvbmUgY2hhcmFjdGVyIChhcyBpbnRlZ2VyISlcIiwgbWVhbmluZyB0aGF0IGl0IGNhbm5vdCxcbiAgICBieSBjb25zdHJ1Y3Rpb24sIGhhbmRsZSBjb21wb3NlZCBMYXRpbiBhY2NlbnRlZCBsZXR0ZXJzLCBvciBsZXQgYWxvbmUgbXVsdGktY29kZXBvaW50IGVtb2ppLiBJdCBhbHNvXG4gICAgc3RydWdnbGVzIHdpdGggVW5pY29kZSBzdXJyb2dhdGUgaGFuZGxpbmcsIGF0IGxlYXN0IGluIHRyeWluZyB0byBtYWtlIHNlbnNlIG9mIHRoZW0gaW4gdGhlIGBSRUFETUUubWRgLlxuXG4gICogWyoqYHRva3VoaXJvbS92aXN1YWx3aWR0aC1qc2AqKl0oaHR0cHM6Ly9naXRodWIuY29tL3Rva3VoaXJvbS92aXN1YWx3aWR0aC1qcyk6IHRvbyBvbGQsIHN0YXJ0ZWQgY2EuXG4gICAgMjAxMSwgbGFzdCBjb21taXQgZnJvbSBjYS4gMjAxNVxuXG4jIyNcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AYmVuY2htYXJrcyA9IGJlbmNobWFya3MgPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZm46IC0+XG4gICAgeyBhbnNpX2NvbG9yc19hbmRfZWZmZWN0czogQywgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2Fuc2lfY29sb3JzX2FuZF9lZmZlY3RzKClcbiAgICB7IGJ1aWxkX2Nocl9nYXVnZSAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfY2hyX2dhdWdlKClcbiAgICB7IEFuc2lfY2h1bmtlcixcbiAgICAgIGpzX3NlZ21lbnRpemUsICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfYW5zaV9jaHVua2VyKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHsgZGVmYXVsdDogc2lzb19zdHdpX2dldF93aWR0aCwgIH0gID0gcmVxdWlyZSAnc3RyaW5nLXdpZHRoJyAgIyMjIHNpbmRyZXNvcmh1cy9zdHJpbmctd2lkdGggIyMjXG4gICAgeyBkZWZhdWx0OiBteWNvX3djd2lfZ2V0X3dpZHRoLCAgfSAgPSByZXF1aXJlICd3Y3dpZHRoLmpzJyAgICAjIyMgbXljb2JvY28vd2N3aWR0aC5qcyAjIyNcbiAgICBfbWFoZV93Y3N0X2dldF93aWR0aCAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ3djc3RyaW5nJyAgICAgICMjIyBtYXJ0aW5oZWlkZWdnZXIvd2NzdHJpbmcgIyMjXG4gICAgbWFoZV93Y3N0X2dldF93aWR0aCAgICAgICAgICAgICAgICAgPSAoIHRleHQgKSAtPiAoIF9tYWhlX3djc3RfZ2V0X3dpZHRoIHRleHQgKS5zaXplKClcbiAgICB7IGdldF93Y19tYXhfbGluZV9sZW5ndGgsIH0gICAgICAgICA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2NvbW1hbmRfbGluZV90b29scygpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjYWNoZV8xID0gbmV3IE1hcCgpXG4gICAgc2lzb19jY2gxX2dldF93aWR0aCA9ICggdGV4dCApIC0+XG4gICAgICByZXR1cm4gUiBpZiAoIFIgPSBjYWNoZV8xLmdldCB0ZXh0ICk/XG4gICAgICBjYWNoZV8xLnNldCB0ZXh0LCBSID0gc2lzb19zdHdpX2dldF93aWR0aCB0ZXh0XG4gICAgICByZXR1cm4gUlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2FjaGVfMiA9IG5ldyBNYXAoKVxuICAgIHNpc29fY2NoMl9nZXRfd2lkdGggPSAoIHRleHQgKSAtPlxuICAgICAgUiA9IDBcbiAgICAgIGZvciBzZWdtZW50IGluIHNlZ21lbnRzID0ganNfc2VnbWVudGl6ZSB0ZXh0XG4gICAgICAgIHVubGVzcyAoIHdpZHRoID0gY2FjaGVfMi5nZXQgc2VnbWVudCApP1xuICAgICAgICAgIGNhY2hlXzIuc2V0IHNlZ21lbnQsIHdpZHRoID0gc2lzb19zdHdpX2dldF93aWR0aCBzZWdtZW50XG4gICAgICAgIFIgKz0gd2lkdGhcbiAgICAgIHJldHVybiBSXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBnYXVnZV82MCA9IGJ1aWxkX2Nocl9nYXVnZSB7IGxlbmd0aDogNjAsIH1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHByb2Jlc19hbmRfbWF0Y2hlcnMgPSBbXG4gICAgICBbICd4eHgnLCAzLCBdXG4gICAgICBbICd48J+Zi3gnLCA0LCBdXG4gICAgICBbICd48J+Zi/Cfj714JywgNiwgXVxuICAgICAgWyAneOySh3gnLCA0LCBdXG4gICAgICBbICd467OEeCcsIDQsIF1cbiAgICAgIFsgJ3jjhYIg44WVIOOEuXgnLCAxMCwgXVxuICAgICAgWyAneOOFguOFleOEuXgnLCA4LCBdXG4gICAgICBbICd4776y77+K776peCcsIDUsIF1cbiAgICAgIFsgJ3jrs4RMeCcsIDUsIF1cbiAgICAgIFsgJ3hh77igYu+4oXgnLCA0LCBdXG4gICAgICBbICd4Ye+4oGLvuKF4JywgNCwgXVxuICAgICAgWyAneGHMgngnLCAzLCBdXG4gICAgICBbICd48JODtXgnLCAzLCBdXG4gICAgICBbICd477e9eCcsIDMsIF1cbiAgICAgIFsgJ2LNnWEnLCAyLCBdXG4gICAgICBbICdhzaBvJywgMiwgXVxuICAgICAgWyAneM24eHgnLCA0LCBdXG4gICAgICBbICd415DXkdeSeCcsIDUsIF1cbiAgICAgIFsgJ3jbqdud2554JywgNCwgXVxuICAgICAgWyAneOC9keC+puC9vOC9hOC8i3gnLCA1LCBdXG4gICAgICBbICd48LCCgPCwgoHwsIKC8LCCg/CwgoR4JywgMTIsIF1cbiAgICAgIFsgJ3jwkIuh8JCLovCQi6PwkIuk8JCLpfCQi6bwn5ii8J+Yo/CfmKTwn5i08J+Yt/CfmaTwn5ml8J+ZsvCfmbPwn5m08J+ZvPCfmb3wn5m+8J+Zv/Cfmofwn52W8J+ep/CdkIDwnZCB8J2QgvCdkIPin4Din4Hin4Lin4N4JywgMzksIF1cbiAgICAgIFsgJ3jiv7ziv73iv77iv7/iv7t4JywgOCwgXVxuICAgICAgWyAneOK/sOK/seK/suK/s+K/tOK/teK/tuK/t+K/uOK/ueK/uuK/u3gnLCAyNiwgXVxuICAgICAgWyAneFx1MDAwN+GdreGEnduN4K6D4Y+T37/Et+GbnOC0peGNp9WU2Zjwn42H4KmH4Y+J8J+TiOGNrcuT8J+VveCigOCvveGCpeGbh+GdlvCfjbvJh+GbvuKbhOGKmuC9heGasngnLCAzNSwgXVxuICAgICAgWyAneOC2l8eZ4Kqw8J+Tjl7MiuC+kd2x4KyAyIjhh5/gtLXwn5KB4Kutx7xcdTAwMDThm4DWieCqiMyS8J+UkeCnhseW2KLOrNqw4Ke24ZS+4L6z0YvgrKzgrqN4JywgMjYsIF1cbiAgICAgIFsgJ3jQkOCmgdCQ0JDRo9CQ3JjRo+ClkMiy0JDcmOCmgcyD0aPIstGjzIPRo+Cmgd6Q3afgpZDMg+ClkHgnLCAyMSwgXVxuICAgICAgWyAneOCmgdCQ3pDMg9yY4KWQ0JDRo8iy0JDdp+ClkNyY0aPIsuCmgdyY4KWQ3JjgpoHgpZDdp92n3pDgpZB4JywgMjMsIF1cbiAgICAgIFsgJ3gww4PosbLDm/K4ro1b6aCU7K+eJtm48L2DuFXlpZc556yXYeSYq33SreK0ssmUSeW5mTbzj7SD44KoRWbykp+AzoE/54mDeCcsIDQ0LCBdXG4gICAgICBbICd4z43OjfKLgaUlyZnKmN6c8KKNrO6MoMK02ZDyo5GlXs6T8LCbpUV9YdOHe9WEJEfotLJd8L+Sle6MpFl98refh++HtvKij5l4JywgMzcsIF1cbiAgICAgIFsgJ3g5866KmNuG84WJqPKMt7rzrKWY2qnUtmnemDXnvYzloZXEtDPRt+WkjnXIuPK8s7jzrYOt8bOMtFF+7pSdQ0vksa7ho7xXPuerpngnLCAzOSwgXVxuICAgICAgWyAneO2VoFP0gr+a85mPsHLyh5yFaPOIq6vxhaa127/jmZvznp22Ts6V866AnvGwkbjyn56u8LCKpu2EneSRrdGI8oWIus+byaBgwrBqa+SCvuSir/SFjLHqs6J4JywgNDIsIF1cbiAgICAgIFsgJ3jxiYOT8o2mjlDwvLue04857o2+7K+s3LzTrOaSl/KehZvfsOaiofCupqbmg7pv9I6Mleinvtel34/jp6ThgbLUvOWTi/Cbp6bsvIjbriTtlJXvpLzqiYB4JywgNDQsIF1cbiAgICAgIFsgJ3jwn5iA8J+QsfCfjJ/wn5qA8J+NlXgnLCAxMiwgXVxuICAgICAgWyAnePCTgIDwk4GQ8JODsPCThqPwk4KAeCcsIDcsIF1cbiAgICAgIFsgJ3jwnZCA8J2QgfCdkILwnZCg8J2QofCdkKLwnZGA8J2RgfCdkYLwnZGQ8J2RkfCdkZLwnZKw8J2SsfCdkrLwnZOA8J2TgfCdk4LwnZSQ8J2UkfCdlJLwnZSw8J2UsfCdlLLwnZWA8J2VgfCdlYJ4JywgMjksIF1cbiAgICAgIFsgJ3h4JywgMiwgXVxuICAgICAgIyBbICggcmVkICdhYmMnICksIDMsIF1cbiAgICAgIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBlcnJvcl9jb3VudHMgPSBbIDAsIDAsIDAsIDAsIF1cbiAgICAgIGZvciBbIHByb2JlLCBtYXRjaGVyLCBdIGluIHByb2Jlc19hbmRfbWF0Y2hlcnNcbiAgICAgICAgdzAgICAgICAgID0gc2lzb19zdHdpX2dldF93aWR0aCAgICAgcHJvYmU7IHcwciA9IHJldmVyc2UgKCBpZiB3MCBpcyBtYXRjaGVyIHRoZW4gZ3JlZW4gZWxzZSBkbyAtPiBlcnJvcl9jb3VudHNbIDAgXSsrOyByZWQgKSBmXCIgI3t3MX06PjNjOyBcIlxuICAgICAgICB3MSAgICAgICAgPSBzaXNvX2NjaDFfZ2V0X3dpZHRoICAgICBwcm9iZTsgdzFyID0gcmV2ZXJzZSAoIGlmIHcxIGlzIG1hdGNoZXIgdGhlbiBncmVlbiBlbHNlIGRvIC0+IGVycm9yX2NvdW50c1sgMSBdKys7IHJlZCApIGZcIiAje3cxfTo+M2M7IFwiXG4gICAgICAgIHcyICAgICAgICA9IHNpc29fY2NoMl9nZXRfd2lkdGggICAgIHByb2JlOyB3MnIgPSByZXZlcnNlICggaWYgdzIgaXMgbWF0Y2hlciB0aGVuIGdyZWVuIGVsc2UgZG8gLT4gZXJyb3JfY291bnRzWyAyIF0rKzsgcmVkICkgZlwiICN7dzF9Oj4zYzsgXCJcbiAgICAgICAgdzMgICAgICAgID0gbXljb193Y3dpX2dldF93aWR0aCAgICAgcHJvYmU7IHczciA9IHJldmVyc2UgKCBpZiB3MyBpcyBtYXRjaGVyIHRoZW4gZ3JlZW4gZWxzZSBkbyAtPiBlcnJvcl9jb3VudHNbIDMgXSsrOyByZWQgKSBmXCIgI3t3Mn06PjNjOyBcIlxuICAgICAgICB3NCAgICAgICAgPSBtYWhlX3djc3RfZ2V0X3dpZHRoICAgICBwcm9iZTsgdzRyID0gcmV2ZXJzZSAoIGlmIHc0IGlzIG1hdGNoZXIgdGhlbiBncmVlbiBlbHNlIGRvIC0+IGVycm9yX2NvdW50c1sgNCBdKys7IHJlZCApIGZcIiAje3czfTo+M2M7IFwiXG4gICAgICAgIHc1ICAgICAgICA9IGdldF93Y19tYXhfbGluZV9sZW5ndGggIHByb2JlOyB3NXIgPSByZXZlcnNlICggaWYgdzUgaXMgbWF0Y2hlciB0aGVuIGdyZWVuIGVsc2UgZG8gLT4gZXJyb3JfY291bnRzWyA1IF0rKzsgcmVkICkgZlwiICN7dzR9Oj4zYzsgXCJcbiAgICAgICAgc2FtZSAgICAgID0gdzAgPSB3MSA9PSB3MiA9PSB3MyA9PSB3NCA9PSB3NSA9PSBtYXRjaGVyXG4gICAgICAgIHNhbWVfcnByICA9IEdVWS50cm0ucmV2ZXJzZSBHVVkudHJtLnRydXRoIHNhbWVcbiAgICAgICAgZWNobyAgJ86pX19fMScsIGZcIiN7c2FtZV9ycHJ9Oj41YzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI3tnYXVnZV82MH1cIiB1bmxlc3Mgc2FtZVxuICAgICAgICBlY2hvICAnzqlfX18yJywgZlwiI3tzYW1lX3Jwcn06PjVjOyAje21hdGNoZXJ9Oj40LjBmOyAje3cwcn0gI3t3MXJ9ICN7dzJyfSAje3czcn0gI3t3NHJ9ICN7dzVyfSAje3JwciBwcm9iZX1cIlxuICAgICAgZWNobyAgICAnzqlfX18zJywgZlwiI3snJ306PjVjOyAjeycnfTo+NGM7ICN7ZXJyb3JfY291bnRzWzBdfTo+NC4wZjsgICN7ZXJyb3JfY291bnRzWzFdfTo+NC4wZjsgICN7ZXJyb3JfY291bnRzWzJdfTo+NC4wZjsgICN7ZXJyb3JfY291bnRzWzNdfTo+NC4wZjsgI3tlcnJvcl9jb3VudHNbNF19Oj40LjBmOyAje2Vycm9yX2NvdW50c1s1XX06PjQuMGY7IFwiXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGJpZ2ludF9mcm9tX2hydGltZSA9IChbIHMsIG5zLCBdKSAtPiAoIEJpZ0ludCBzICkgKiAxXzAwMF8wMDBfMDAwbiArICggQmlnSW50IG5zIClcbiAgICAgIHBhcnRpY2lwYW50cyA9XG4gICAgICAgIHNpc29fc3R3aTogIHNpc29fc3R3aV9nZXRfd2lkdGhcbiAgICAgICAgc2lzb19jY2gxOiAgc2lzb19jY2gxX2dldF93aWR0aFxuICAgICAgICBzaXNvX2NjaDI6ICBzaXNvX2NjaDJfZ2V0X3dpZHRoXG4gICAgICAgIG15Y29fd2N3aTogIG15Y29fd2N3aV9nZXRfd2lkdGhcbiAgICAgICAgbWFoZV93Y3N0OiAgbWFoZV93Y3N0X2dldF93aWR0aFxuICAgICAgICAjIHdjX21heF9sbDogIGdldF93Y19tYXhfbGluZV9sZW5ndGhcbiAgICAgIGZvciBuYW1lLCBmbiBvZiBwYXJ0aWNpcGFudHNcbiAgICAgICAgdDAgPSBiaWdpbnRfZnJvbV9ocnRpbWUgcHJvY2Vzcy5ocnRpbWUoKVxuICAgICAgICBmb3IgXyBpbiBbIDAgLi4gNWUzIF1cbiAgICAgICAgICBmb3IgWyBwcm9iZSwgbWF0Y2hlciwgXSBpbiBwcm9iZXNfYW5kX21hdGNoZXJzXG4gICAgICAgICAgICB3MSA9IGZuIHByb2JlXG4gICAgICAgIHQxID0gYmlnaW50X2Zyb21faHJ0aW1lIHByb2Nlc3MuaHJ0aW1lKClcbiAgICAgICAgZWNobyAnzqlfX182JywgbmFtZSwgZlwiI3soIE51bWJlciB0MSAtIHQwICkgLyAxXzAwMF8wMDB9Oj4yMCwuOWY7XCJcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgIyBkZW1vX2luZmluaXRlX3Byb3h5KClcbiAgIyBkZW1vX2NvbG9yZnVsX3Byb3h5KClcbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBiZW5jaG1hcmtzLCB9XG4iXX0=
//# sourceURL=../src/benchmark-unicode-character-width.coffee