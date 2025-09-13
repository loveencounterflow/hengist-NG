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
      var Ansi_chunker, C, _mahe_wcst_get_width/* mycoboco/wcwidth.js */, build_chr_gauge, cache_1, cache_2, cache_3, cache_4, gauge_60, get_wc_max_line_length, js_segmentize, mahe_wcst_get_width/* martinheidegger/wcstring */, myco_wcwi_get_width, probes_and_matchers, siso_cch1_get_width, siso_cch2_get_width, siso_cch3_get_width, siso_cch4_get_width, siso_stwi_get_width;
      ({
        ansi_colors_and_effects: C
      } = SFMODULES.require_ansi_colors_and_effects());
      ({build_chr_gauge} = SFMODULES.require_chr_gauge());
      ({
        internals: {js_segmentize},
        Ansi_chunker
      } = SFMODULES.require_ansi_chunker());
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
      cache_3 = new Map();
      siso_cch3_get_width = function(text) {
        var R, i, len, ref, segment, segments, width;
        R = 0;
        ref = segments = Array.from(text);
        for (i = 0, len = ref.length; i < len; i++) {
          segment = ref[i];
          if ((width = cache_3.get(segment)) == null) {
            cache_3.set(segment, width = siso_stwi_get_width(segment));
          }
          R += width;
        }
        return R;
      };
      //.......................................................................................................
      cache_4 = new Map();
      siso_cch4_get_width = function(text) {
        var R, i, len, ref, segment, segments, width;
        R = 0;
        ref = segments = Array.from(text);
        for (i = 0, len = ref.length; i < len; i++) {
          segment = ref[i];
          if (/^\p{Mn}$/v.test(segment)) {
            width = 0;
          } else if ((width = cache_4.get(segment)) == null) {
            cache_4.set(segment, width = siso_stwi_get_width(segment));
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
      probes_and_matchers = [['xxx', 3], ['x🙋x', 4], ['x🙋🏽x', 6], ['xa︠b︡x', 4], ['xa︠b︡x', 4], ['b͝a', 2], ['a͠o', 2], ['x쒇x', 4], ['x별x', 4], ['xㅂ ㅕ ㄹx', 10], ['xㅂㅕㄹx', 8], ['xﾲￊﾩx', 5], ['x별Lx', 5], ['xâx', 3], ['x𓃵x', 3], ['x﷽x', 3], ['x͸xx', 4], ['xאבגx', 5], ['x۩۝۞x', 4], ['xདྦོང་x', 5], ['x𰂀𰂁𰂂𰂃𰂄x', 12], ['x𐋡𐋢𐋣𐋤𐋥𐋦😢😣😤😴😷🙤🙥🙲🙳🙴🙼🙽🙾🙿🚇🝖🞧𝐀𝐁𝐂𝐃⟀⟁⟂⟃x', 39], ['x⿼⿽⿾⿿⿻x', 8], ['x⿰⿱⿲⿳⿴⿵⿶⿷⿸⿹⿺⿻x', 26], ['x᝭ᄝۍஃᏓ߿ķᛜഥ፧Ք٘🍇ੇᏉ📈፭˓🕽ࢀ௽Ⴅᛇ᝖🍻ɇ᛾⛄ኚཅᚲx', 35], ['x඗Ǚર📎^̊ྑݱ଀Ȉᇟവ💁૭Ǽᛀ։ઈ̒🔑৆ǖآάڰ৶ᔾླыବணx', 26], ['xАঁААѣАܘѣॐȲАܘঁ̃ѣȲѣ̃ѣঁސݧॐ̃ॐx', 21], ['xঁАސ̃ܘॐАѣȲАݧॐܘѣȲঁܘॐܘঁॐݧݧސॐx', 23], ['x0Ã豲Û򸮍[頔쯞&ٸ𽃸U套9笗a䘫}ҭⴲɔI幙6󏴃エEf򒟀΁?牃x', 44], ['xύ΍򋁥%əʘޜ𢍬´ِ򣑥^Γ𰛥E}aӇ{Մ$G贲]𿒕Y}򷟇򢏙x', 37], ['x9󮊘ۆ󅉨򌷺󬥘کԶiޘ5罌塕Ĵ3ѷ夎uȸ򼳸󭃭񳌴Q~CK䱮᣼W>竦x', 39], ['x할S􂿚󙏰r򇜅h󈫫񅦵ۿ㙛󞝶NΕ󮀞񰑸򟞮𰊦턝䑭ш򅈺ϛɠ`°jk䂾䢯􅌱곢x', 42], ['x񉃓򍦎P𼻞ӏ9쯬ܼӬ撗򞅛߰梡𮦦惺o􎌕觾ץߏ㧤ၲԼ哋𛧦켈ۮ$픕祿ꉀx', 44], ['x😀🐱🌟🚀🍕x', 12], ['x𓀀𓁐𓃰𓆣𓂀x', 7], ['x𝐀𝐁𝐂𝐠𝐡𝐢𝑀𝑁𝑂𝑐𝑑𝑒𝒰𝒱𝒲𝓀𝓁𝓂𝔐𝔑𝔒𝔰𝔱𝔲𝕀𝕁𝕂x', 29], ['xx', 2], [`Fraktur (German: [fʁakˈtuːɐ̯] ) is a calligraphic hand of the Latin alphabet and any of several blackletter typefaces derived from this hand. It is designed such that the beginnings and ends of the individual strokes that make up each letter will be clearly visible, and often emphasized; in this way it is often contrasted with the curves of the Antiqua (common) typefaces where the letters are designed to flow and strokes connect together in a continuous fashion. The word "Fraktur" derives from Latin frāctūra ("a break"), built from frāctus, passive participle of frangere ("to break"), which is also the root for the English word "fracture". In non-professional contexts, the term "Fraktur" is sometimes misused to refer to all blackletter typefaces – while Fraktur typefaces do fall under that category, not all blackletter typefaces exhibit the Fraktur characteristics described above.`, 892], [`Fraktur was often characterized as "the German typeface", as it remained popular in Germany and much of Eastern Europe far longer than elsewhere. In Germany, utilizing more modern typefaces would prove controversial until 1941, when the Nazi government rendered any transition involuntary by banning the use of Fraktur typefaces.`, 329], ['\x04', 0], ['^̊ྑ', 1], ['x', 1], ['x', 1], ['xঁ', 1], ['ǖ', 1], ['Ǚ', 1], ['Ǽ', 1], ['Ȉ', 1], ['Ȳ', 1], ['Ȳঁ', 1], ['ά', 1], ['А', 1], ['Аঁ', 1], ['ы', 1], ['ѣ', 1], ['ѣ̃', 1], ['ѣঁ', 1], ['։', 1], ['آ', 1], ['ڰ', 1], ['ܘ', 1], ['ܘঁ', 1], ['ܘঁ̃', 1], ['ݧ', 1], ['ݱ', 1], ['ސ', 1], ['ސ̃', 1], ['ॐ', 1], ['ॐ̃', 1], ['৆', 1], ['৶', 1], ['ઈ̒', 1], ['ર', 1], ['૭', 1], ['଀', 1], ['ବ', 1], ['ண', 1], ['വ', 1], ['඗', 1], ['┃ᇟ┃', 2], ['┃타ᇿ┃', 4], ['┃객┃', 4], ['┃퓛┃', 4], ['ᔾླ', 1], ['ᛀ', 1], ['💁', 2], ['📎', 2], ['🔑', 2], ['ঁ', 0], ['ᔾ', 1], ['ླ', 0], ['┃\x07┃', 2], ['┃ķ┃', 3], ['┃ɇ┃', 3], ['┃˓┃', 3], ['┃Ք٘┃', 3], ['┃ۍ┃', 3], ['┃߿┃', 3], ['┃ࢀ┃', 3], ['┃ஃ┃', 3], ['┃௽┃', 3], ['┃ഥ┃', 3], ['┃ཅ┃', 3], ['┃ᄝ┃', 4], ['┃ኚ┃', 3], ['┃፧┃', 3], ['┃፭┃', 3], ['┃ᚲ┃', 3], ['┃ᛇ┃', 3], ['┃ᛜ┃', 3], ['┃᛾┃', 3], ['┃᝖┃', 3], ['┃᝭┃', 3], ['┃⛄┃', 4], ['┃Ⴅ┃', 3], ['┃Ꮙ┃', 3], ['┃Ꮣ┃', 3], ['┃🍇ੇ┃', 4], ['┃🍻┃', 4], ['┃📈┃', 4], ['┃🕽┃', 3], ['┃🇦🇶┃', 4], ['┃🇦┃', 3], ['┃🇶┃', 3], ['┃\u{1F636}\u{200D}\u{1F32B}\u{FE0F}┃', 3], ['┃🤦🏾‍♂️┃', 4]];
      (() => {        //.......................................................................................................
        // [ ( red 'abc' ), 3, ]
        var error_counts, fmt_width, i, len, matcher, probe, same, same_rpr, w0, w0r, w1, w1r, w2, w2r, w3, w3r, w4, w4r, w5, w5r, w6, w6r, w7, w7r;
        error_counts = [0, 0, 0, 0, 0, 0, 0, 0];
        fmt_width = function(w, idx, matcher) {
          return reverse((w === matcher ? green : (function() {
            error_counts[idx]++;
            return red;
          })())(f` ${w}:>3c; `));
        };
        for (i = 0, len = probes_and_matchers.length; i < len; i++) {
          [probe, matcher] = probes_and_matchers[i];
          w0 = siso_stwi_get_width(probe);
          w0r = fmt_width(w0, 0, matcher);
          w1 = siso_cch1_get_width(probe);
          w1r = fmt_width(w1, 1, matcher);
          w2 = siso_cch2_get_width(probe);
          w2r = fmt_width(w2, 2, matcher);
          w3 = siso_cch3_get_width(probe);
          w3r = fmt_width(w3, 3, matcher);
          w4 = siso_cch4_get_width(probe);
          w4r = fmt_width(w4, 4, matcher);
          w5 = myco_wcwi_get_width(probe);
          w5r = fmt_width(w5, 5, matcher);
          w6 = mahe_wcst_get_width(probe);
          w6r = fmt_width(w6, 6, matcher);
          w7 = get_wc_max_line_length(probe);
          w7r = fmt_width(w7, 7, matcher);
          same = w0 = ((((((w1 === w2 && w2 === w3) && w3 === w4) && w4 === w5) && w5 === w6) && w6 === w7) && w7 === matcher);
          same_rpr = GUY.trm.reverse(GUY.trm.truth(same));
          if (!same) {
            echo('Ω___1', f`${same_rpr}:>5c;                                                       ${gauge_60}`);
          }
          echo('Ω___2', f`${same_rpr}:>5c; ${matcher}:>4.0f; ${w0r} ${w1r} ${w2r} ${w3r} ${w4r} ${w5r} ${w6r} ${w7r} ${rpr(probe)}`);
        }
        echo('Ω___3', f`${''}:>5c; ${''}:>4c; ${error_counts[0]}:>4.0f;  ${error_counts[1]}:>4.0f;  ${error_counts[2]}:>4.0f;  ${error_counts[3]}:>4.0f; ${error_counts[4]}:>4.0f; ${error_counts[5]}:>4.0f; ${error_counts[6]}:>4.0f; ${error_counts[7]}:>4.0f; `);
        return null;
      })();
      (() => {        //.......................................................................................................
        var _, fn, hrtime_as_bigint, i, j, len, matcher, name, participants, probe, t0, t1, w1;
        ({hrtime_as_bigint} = SFMODULES.unstable.require_benchmarking());
        participants = {
          siso_stwi: siso_stwi_get_width,
          siso_cch1: siso_cch1_get_width,
          siso_cch2: siso_cch2_get_width,
          siso_cch3: siso_cch3_get_width,
          siso_cch4: siso_cch4_get_width,
          myco_wcwi: myco_wcwi_get_width,
          mahe_wcst: mahe_wcst_get_width,
          js_segmnt: js_segmentize,
          array_frm: function(text) {
            return Array.from(text);
          }
        };
// wc_max_ll:  get_wc_max_line_length
        for (name in participants) {
          fn = participants[name];
          t0 = hrtime_as_bigint();
          for (_ = i = 0; i <= 500; _ = ++i) {
// for _ in [ 0 .. 5e3 ]
            for (j = 0, len = probes_and_matchers.length; j < len; j++) {
              [probe, matcher] = probes_and_matchers[j];
              w1 = fn(probe);
            }
          }
          t1 = hrtime_as_bigint();
          echo('Ω___4', name, f`${(Number(t1 - t0)) / 1_000_000}:>20,.9f;`);
        }
        info('Ω___5', cache_1.size, ([...cache_1.entries()].slice(0, 11).flat(2e308)).join(' '));
        help('Ω___6', cache_2.size, ([...cache_2.entries()].slice(0, 11).flat(2e308)).join(' '));
        urge('Ω___7', cache_3.size, ([...cache_3.entries()].slice(0, 11).flat(2e308)).join(' '));
        return null;
      })();
      //.......................................................................................................
      debug('Ω___8', js_segmentize('x᝭ᄝۍஃᏓ߿ķᛜഥ፧Ք٘🍇ੇᏉ📈፭˓🕽ࢀ௽Ⴅᛇ᝖🍻ɇ᛾⛄ኚཅᚲx'));
      debug('Ω___9', js_segmentize('x🇦🇶x'));
      debug('Ω__10', Array.from('x🇦🇶x'));
      // debug 'Ω__11', js_segmentize 'x඗Ǚર📎^̊ྑݱ଀Ȉᇟവ💁૭Ǽᛀ։ઈ̒🔑৆ǖآάڰ৶ᔾླыବணx'
      // debug 'Ω__12', js_segmentize 'xАঁААѣАܘѣॐȲАܘঁ̃ѣȲѣ̃ѣঁސݧॐ̃ॐx'
      // debug 'Ω__13', js_segmentize 'xঁАސ̃ܘॐАѣȲАݧॐܘѣȲঁܘॐܘঁॐݧݧސॐx'
      // debug 'Ω__14', Array.from 'Ȳঁ'
      // debug 'Ω__15', Array.from 'Аঁ'
      // debug 'Ω__16', Array.from 'ѣঁ'
      // debug 'Ω__17', ( ( Array.from 'ᔾླ' )[ 1 ].codePointAt 0 ).toString 16
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
      (new Test(guytest_cfg)).test({benchmarks});
      return info(reverse(red("also compare to https://github.com/dawsonhuang0/Wcwidth-O1")));
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JlbmNobWFyay11bmljb2RlLWNoYXJhY3Rlci13aWR0aC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJHO0VBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFFSDtBQUZHLE1BQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxVQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQTs7O0VBS0gsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQiwwQ0FBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLEtBSEYsRUFJRSxLQUpGLEVBS0UsSUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsR0FSRixFQVNFLElBVEYsRUFVRSxPQVZGLEVBV0UsR0FYRixDQUFBLEdBVzRCLEdBQUcsQ0FBQyxHQVhoQzs7RUFZQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1QixFQTNCRzs7O0VBNkJILENBQUEsQ0FBRSxHQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFR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RUFBQSxDQUFBLENBQUksQ0FBSixDQUFBLE1BQUEsQ0FBdEUsQ0FBUjtRQUF2QjtRQUNoQixLQUFBLHFEQUFBO1VBQUksQ0FBRSxLQUFGLEVBQVMsT0FBVDtVQUNGLEVBQUEsR0FBWSxtQkFBQSxDQUF3QixLQUF4QjtVQUErQixHQUFBLEdBQU0sU0FBQSxDQUFVLEVBQVYsRUFBYyxDQUFkLEVBQWlCLE9BQWpCO1VBQ2pELEVBQUEsR0FBWSxtQkFBQSxDQUF3QixLQUF4QjtVQUErQixHQUFBLEdBQU0sU0FBQSxDQUFVLEVBQVYsRUFBYyxDQUFkLEVBQWlCLE9BQWpCO1VBQ2pELEVBQUEsR0FBWSxtQkFBQSxDQUF3QixLQUF4QjtVQUErQixHQUFBLEdBQU0sU0FBQSxDQUFVLEVBQVYsRUFBYyxDQUFkLEVBQWlCLE9BQWpCO1VBQ2pELEVBQUEsR0FBWSxtQkFBQSxDQUF3QixLQUF4QjtVQUErQixHQUFBLEdBQU0sU0FBQSxDQUFVLEVBQVYsRUFBYyxDQUFkLEVBQWlCLE9BQWpCO1VBQ2pELEVBQUEsR0FBWSxtQkFBQSxDQUF3QixLQUF4QjtVQUErQixHQUFBLEdBQU0sU0FBQSxDQUFVLEVBQVYsRUFBYyxDQUFkLEVBQWlCLE9BQWpCO1VBQ2pELEVBQUEsR0FBWSxtQkFBQSxDQUF3QixLQUF4QjtVQUErQixHQUFBLEdBQU0sU0FBQSxDQUFVLEVBQVYsRUFBYyxDQUFkLEVBQWlCLE9BQWpCO1VBQ2pELEVBQUEsR0FBWSxtQkFBQSxDQUF3QixLQUF4QjtVQUErQixHQUFBLEdBQU0sU0FBQSxDQUFVLEVBQVYsRUFBYyxDQUFkLEVBQWlCLE9BQWpCO1VBQ2pELEVBQUEsR0FBWSxzQkFBQSxDQUF3QixLQUF4QjtVQUErQixHQUFBLEdBQU0sU0FBQSxDQUFVLEVBQVYsRUFBYyxDQUFkLEVBQWlCLE9BQWpCO1VBQ2pELElBQUEsR0FBWSxFQUFBLEdBQUssQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQSxLQUFNLEVBQU4sSUFBTSxFQUFOLEtBQVksRUFBWixDQUFBLElBQVksRUFBWixLQUFrQixFQUFs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QUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixJQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QixDQUFFLFVBQUYsQ0FBOUI7YUFDQSxJQUFBLENBQUssT0FBQSxDQUFRLEdBQUEsQ0FBSSw0REFBSixDQUFSLENBQUw7SUFOc0MsQ0FBQSxJQUF4Qzs7QUF0VUciLCJzb3VyY2VzQ29udGVudCI6WyJcbiMjI1xuXG5cbiMjIEFwcGxpY2F0aW9uc1xuXG4qICoqUmVnRXggQnVpbGRlcioqIChleGFtcGxlIGZyb20gW1JlamlncyBibG9nIHBvc3RdKGh0dHBzOi8vbWVkaXVtLmNvbS9Ab21hcnphd2FocnkvcmVqaWdzLW1ha2luZy1yZWd1bGFyLWV4cHJlc3Npb25zLWh1bWFuLXJlYWRhYmxlLTFmYWQzN2NiM2VhZSkpXG5cbmBgYGphdmFcbnZhciBlbWFpbFJlZ2V4ID1cbiAgICBSZWppZ3MuQ3JlYXRlKClcbiAgICAgICAgICAuQXRTdGFydCgpXG4gICAgICAgICAgLk9uZU9yTW9yZShyID0+IHIuQW55TGV0dGVyT3JEaWdpdCgpLk9yKCkuQW55T2YoXCIuXyUrLVwiKSlcbiAgICAgICAgICAuVGV4dChcIkBcIilcbiAgICAgICAgICAuT25lT3JNb3JlKHIgPT4gci5BbnlMZXR0ZXJPckRpZ2l0KCkuT3IoKS5BbnlPZihcIi4tXCIpKVxuICAgICAgICAgIC5UZXh0KFwiLlwiKVxuICAgICAgICAgIC5BbnlMZXR0ZXJPckRpZ2l0KCkuQXRMZWFzdCgyKVxuICAgICAgICAgIC5BdEVuZCgpXG4gICAgICAgICAgLkJ1aWxkKCk7XG5gYGBcblxuKiAqKkhUTUwvWE1MIEJ1aWxlcioqXG4qICoqU1FMIEJ1aWxkZXIqKlxuKiAqKkNMSSBDb2xvcmluZyoqXG4qIHN5bnRheCBmb3IgYSAqKlR5cGUgQ2hlY2tlcioqXG5cbiMjI1xuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2JlbmNobWFyay11bmljb2RlLWNoYXJhY3Rlci13aWR0aC5jb2ZmZWUnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgZ3JlZW5cbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiMgd3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcbnsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2luZ2xlLWZpbGUtbW9kdWxlcydcblxuXG5cblxuIyMjXG5cbkZyb20gW2BjaGFsay9zdHJpcC1hbnNpYF0oaHR0cHM6Ly9naXRodWIuY29tL2NoYWxrL3N0cmlwLWFuc2kpIGBSRUFETUUubWRgOlxuXG4+ID4gWyFOT1RFXVxuPiA+XG4+ID4gTm9kZS5qcyBoYXMgdGhpcyBidWlsdC1pbiBub3cgd2l0aFxuPiA+IFtgc3RyaXBWVENvbnRyb2xDaGFyYWN0ZXJzYF0oaHR0cHM6Ly9ub2RlanMub3JnL2FwaS91dGlsLmh0bWwjdXRpbHN0cmlwdnRjb250cm9sY2hhcmFjdGVyc3N0cikuIFRoZVxuPiA+IGJlbmVmaXQgb2YgdGhpcyBwYWNrYWdlIGlzIGNvbnNpc3RlbnQgYmVoYXZpb3IgYWNyb3NzIE5vZGUuanMgdmVyc2lvbnMgYW5kIGZhc3RlciBpbXByb3ZlbWVudHMuIFRoZVxuPiA+IE5vZGUuanMgdmVyc2lvbiBpcyBhY3R1YWxseSBiYXNlZCBvbiB0aGlzIHBhY2thZ2UuXG5cbmNvbnNvbGUubG9nKHV0aWwuc3RyaXBWVENvbnRyb2xDaGFyYWN0ZXJzKCdcXHUwMDFCWzRtdmFsdWVcXHUwMDFCWzBtJykpXG5cbk5vdGVzOlxuXG4gICogWyoqYHNpbmRyZXNvcmh1cy9zdHJpbmctd2lkdGhgKipdKGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvc3RyaW5nLXdpZHRoKSBieSBTaW5kcmUgU29yaHVzO1xuICAgIGRlcGVuZGVuY2llcyBpbmNsdWRlIFtgbWF0aGlhc2J5bmVucy9lbW9qaS1yZWdleGBdKGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoaWFzYnluZW5zL2Vtb2ppLXJlZ2V4KSAod2hpY2hcbiAgICBjb3VsZCBiZSByZXBsYWNlZCB3aXRoIGEgc21hbGxlciBsaWJyYXJ5IHdpdGggdGhlIHNhbWUgQVBJXG4gICAgW2BzbGV2aXRoYW4vZW1vamktcmVnZXgteHNgXShodHRwczovL2dpdGh1Yi5jb20vc2xldml0aGFuL2Vtb2ppLXJlZ2V4LXhzKSk7IG5vdGUgdGhlIG51bWJlciBvZlxuICAgIHdlbGwta25vd24sIHRydXN0ZWQgYXV0aG9ycyBoZXJlIHRoYXQgbW9yZSBvZnRlbiB0aGFuIG5vdCBkZWxpdmVyIGhpZ2gtcXVhbGl0eSBzb2Z0d2FyZS5cblxuICAgIERlcGVuZGVuY2llczpcbiAgICAgICogW2BtYXRoaWFzYnluZW5zL2Vtb2ppLXJlZ2V4YF0oaHR0cHM6Ly9naXRodWIuY29tL21hdGhpYXNieW5lbnMvZW1vamktcmVnZXgpXG4gICAgICAqIFtga29tYWdhdGEvZ2V0LWVhc3QtYXNpYW4td2lkdGhgXShodHRwczovL2dpdGh1Yi5jb20va29tYWdhdGEvZWFzdGFzaWFud2lkdGgpXG4gICAgICAqIFtgY2hhbGsvc3RyaXAtYW5zaWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFsay9zdHJpcC1hbnNpKVxuICAgICAgICAqIFtgY2hhbGsvYW5zaS1yZWdleGBdKGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFsay9hbnNpLXJlZ2V4KVxuXG4gICogWyoqYG1hcnRpbmhlaWRlZ2dlci93Y3N0cmluZ2AqKl0oaHR0cHM6Ly9naXRodWIuY29tL21hcnRpbmhlaWRlZ2dlci93Y3N0cmluZyk6IGRvZXMgYSBsb3Qgb2Ygc3RyaW5nXG4gICAgbWFuaXB1bGF0aW9uIHN0dWZmIHRoYXQgd2UgZG9uJ3QgbmVlZCBvciBwbGFuIHRvIGltcGxlbWVudCBpbiBhIHNpbWlsYXIgYnV0IGRpZmZlcmVudCB3YXk7IHVzZXMgYHdjc2l6ZWBcbiAgICBzbyBwcmVzdW1hYmx5IGFsc28gaW5oZXJpdHMgaXRzIHByb2JsZW1zKD8pXG5cbkV4Y2x1ZGVkOlxuXG4gICogWyoqYG1hcnRpbmhlaWRlZ2dlci93Y3NpemVgKipdKGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJ0aW5oZWlkZWdnZXIvd2NzaXplKTogbm90IHZlcnkgd2VsbCB1c2FibGUgaW5cbiAgICBtb2Rlcm4gZW52aXJvbm1lbnRzIGFzIGB3Y3NpemVgLCBhY2NvcmRpbmcgdG8gdGhlIGRvY3MsIFwiZGlmZmVyWy4uLl1zIGZyb20gYm90aCBbYHdjd2lkdGhgIGFuZFxuICAgIGB2aXN1YWx3aWR0aC1qc2BdIGJ5IG9ubHkgcmV0dXJuaW5nIHRoZSB3aWR0aCBvZiBvbmUgY2hhcmFjdGVyIChhcyBpbnRlZ2VyISlcIiwgbWVhbmluZyB0aGF0IGl0IGNhbm5vdCxcbiAgICBieSBjb25zdHJ1Y3Rpb24sIGhhbmRsZSBjb21wb3NlZCBMYXRpbiBhY2NlbnRlZCBsZXR0ZXJzLCBvciBsZXQgYWxvbmUgbXVsdGktY29kZXBvaW50IGVtb2ppLiBJdCBhbHNvXG4gICAgc3RydWdnbGVzIHdpdGggVW5pY29kZSBzdXJyb2dhdGUgaGFuZGxpbmcsIGF0IGxlYXN0IGluIHRyeWluZyB0byBtYWtlIHNlbnNlIG9mIHRoZW0gaW4gdGhlIGBSRUFETUUubWRgLlxuXG4gICogWyoqYHRva3VoaXJvbS92aXN1YWx3aWR0aC1qc2AqKl0oaHR0cHM6Ly9naXRodWIuY29tL3Rva3VoaXJvbS92aXN1YWx3aWR0aC1qcyk6IHRvbyBvbGQsIHN0YXJ0ZWQgY2EuXG4gICAgMjAxMSwgbGFzdCBjb21taXQgZnJvbSBjYS4gMjAxNVxuXG4jIyNcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AYmVuY2htYXJrcyA9IGJlbmNobWFya3MgPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZm46IC0+XG4gICAgeyBhbnNpX2NvbG9yc19hbmRfZWZmZWN0czogQywgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2Fuc2lfY29sb3JzX2FuZF9lZmZlY3RzKClcbiAgICB7IGJ1aWxkX2Nocl9nYXVnZSAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfY2hyX2dhdWdlKClcbiAgICB7IGludGVybmFsczogeyBqc19zZWdtZW50aXplLCB9LFxuICAgICAgQW5zaV9jaHVua2VyLCAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9hbnNpX2NodW5rZXIoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgeyBkZWZhdWx0OiBzaXNvX3N0d2lfZ2V0X3dpZHRoLCAgfSAgPSByZXF1aXJlICdzdHJpbmctd2lkdGgnICAjIyMgc2luZHJlc29yaHVzL3N0cmluZy13aWR0aCAjIyNcbiAgICB7IGRlZmF1bHQ6IG15Y29fd2N3aV9nZXRfd2lkdGgsICB9ICA9IHJlcXVpcmUgJ3djd2lkdGguanMnICAgICMjIyBteWNvYm9jby93Y3dpZHRoLmpzICMjI1xuICAgIF9tYWhlX3djc3RfZ2V0X3dpZHRoICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnd2NzdHJpbmcnICAgICAgIyMjIG1hcnRpbmhlaWRlZ2dlci93Y3N0cmluZyAjIyNcbiAgICBtYWhlX3djc3RfZ2V0X3dpZHRoICAgICAgICAgICAgICAgICA9ICggdGV4dCApIC0+ICggX21haGVfd2NzdF9nZXRfd2lkdGggdGV4dCApLnNpemUoKVxuICAgIHsgZ2V0X3djX21heF9saW5lX2xlbmd0aCwgfSAgICAgICAgID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfY29tbWFuZF9saW5lX3Rvb2xzKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNhY2hlXzEgPSBuZXcgTWFwKClcbiAgICBzaXNvX2NjaDFfZ2V0X3dpZHRoID0gKCB0ZXh0ICkgLT5cbiAgICAgIHJldHVybiBSIGlmICggUiA9IGNhY2hlXzEuZ2V0IHRleHQgKT9cbiAgICAgIGNhY2hlXzEuc2V0IHRleHQsIFIgPSBzaXNvX3N0d2lfZ2V0X3dpZHRoIHRleHRcbiAgICAgIHJldHVybiBSXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjYWNoZV8yID0gbmV3IE1hcCgpXG4gICAgc2lzb19jY2gyX2dldF93aWR0aCA9ICggdGV4dCApIC0+XG4gICAgICBSID0gMFxuICAgICAgZm9yIHNlZ21lbnQgaW4gc2VnbWVudHMgPSBqc19zZWdtZW50aXplIHRleHRcbiAgICAgICAgdW5sZXNzICggd2lkdGggPSBjYWNoZV8yLmdldCBzZWdtZW50ICk/XG4gICAgICAgICAgY2FjaGVfMi5zZXQgc2VnbWVudCwgd2lkdGggPSBzaXNvX3N0d2lfZ2V0X3dpZHRoIHNlZ21lbnRcbiAgICAgICAgUiArPSB3aWR0aFxuICAgICAgcmV0dXJuIFJcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNhY2hlXzMgPSBuZXcgTWFwKClcbiAgICBzaXNvX2NjaDNfZ2V0X3dpZHRoID0gKCB0ZXh0ICkgLT5cbiAgICAgIFIgPSAwXG4gICAgICBmb3Igc2VnbWVudCBpbiBzZWdtZW50cyA9IEFycmF5LmZyb20gdGV4dFxuICAgICAgICB1bmxlc3MgKCB3aWR0aCA9IGNhY2hlXzMuZ2V0IHNlZ21lbnQgKT9cbiAgICAgICAgICBjYWNoZV8zLnNldCBzZWdtZW50LCB3aWR0aCA9IHNpc29fc3R3aV9nZXRfd2lkdGggc2VnbWVudFxuICAgICAgICBSICs9IHdpZHRoXG4gICAgICByZXR1cm4gUlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2FjaGVfNCA9IG5ldyBNYXAoKVxuICAgIHNpc29fY2NoNF9nZXRfd2lkdGggPSAoIHRleHQgKSAtPlxuICAgICAgUiA9IDBcbiAgICAgIGZvciBzZWdtZW50IGluIHNlZ21lbnRzID0gQXJyYXkuZnJvbSB0ZXh0XG4gICAgICAgIGlmIC9eXFxwe01ufSQvdi50ZXN0IHNlZ21lbnRcbiAgICAgICAgICB3aWR0aCA9IDBcbiAgICAgICAgZWxzZSB1bmxlc3MgKCB3aWR0aCA9IGNhY2hlXzQuZ2V0IHNlZ21lbnQgKT9cbiAgICAgICAgICBjYWNoZV80LnNldCBzZWdtZW50LCB3aWR0aCA9IHNpc29fc3R3aV9nZXRfd2lkdGggc2VnbWVudFxuICAgICAgICBSICs9IHdpZHRoXG4gICAgICByZXR1cm4gUlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZ2F1Z2VfNjAgPSBidWlsZF9jaHJfZ2F1Z2UgeyBsZW5ndGg6IDYwLCB9XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwcm9iZXNfYW5kX21hdGNoZXJzID0gW1xuICAgICAgWyAneHh4JywgMywgXVxuICAgICAgWyAnePCfmYt4JywgNCwgXVxuICAgICAgWyAnePCfmYvwn4+9eCcsIDYsIF1cbiAgICAgIFsgJ3hh77igYu+4oXgnLCA0LCBdXG4gICAgICBbICd4Ye+4oGLvuKF4JywgNCwgXVxuICAgICAgWyAnYs2dYScsIDIsIF1cbiAgICAgIFsgJ2HNoG8nLCAyLCBdXG4gICAgICBbICd47JKHeCcsIDQsIF1cbiAgICAgIFsgJ3jrs4R4JywgNCwgXVxuICAgICAgWyAneOOFgiDjhZUg44S5eCcsIDEwLCBdXG4gICAgICBbICd444WC44WV44S5eCcsIDgsIF1cbiAgICAgIFsgJ3jvvrLvv4rvvql4JywgNSwgXVxuICAgICAgWyAneOuzhEx4JywgNSwgXVxuICAgICAgWyAneGHMgngnLCAzLCBdXG4gICAgICBbICd48JODtXgnLCAzLCBdXG4gICAgICBbICd477e9eCcsIDMsIF1cbiAgICAgIFsgJ3jNuHh4JywgNCwgXVxuICAgICAgWyAneNeQ15HXkngnLCA1LCBdXG4gICAgICBbICd426nbndueeCcsIDQsIF1cbiAgICAgIFsgJ3jgvZHgvqbgvbzgvYTgvIt4JywgNSwgXVxuICAgICAgWyAnePCwgoDwsIKB8LCCgvCwgoPwsIKEeCcsIDEyLCBdXG4gICAgICBbICd48JCLofCQi6LwkIuj8JCLpPCQi6XwkIum8J+YovCfmKPwn5ik8J+YtPCfmLfwn5mk8J+ZpfCfmbLwn5mz8J+ZtPCfmbzwn5m98J+ZvvCfmb/wn5qH8J+dlvCfnqfwnZCA8J2QgfCdkILwnZCD4p+A4p+B4p+C4p+DeCcsIDM5LCBdXG4gICAgICBbICd44r+84r+94r++4r+/4r+7eCcsIDgsIF1cbiAgICAgIFsgJ3jiv7Div7Hiv7Liv7Piv7Tiv7Xiv7biv7fiv7jiv7niv7riv7t4JywgMjYsIF1cbiAgICAgIFsgJ3hcdTAwMDfhna3hhJ3bjeCug+GPk9+/xLfhm5zgtKXhjafVlNmY8J+Nh+Cph+GPifCfk4jhja3Lk/Cflb3gooDgr73hgqXhm4fhnZbwn427yYfhm77im4ThiprgvYXhmrJ4JywgMzUsIF1cbiAgICAgIFsgJ3jgtpfHmeCqsPCfk45ezIrgvpHdseCsgMiI4Yef4LS18J+SgeCrrce8XHUwMDA04ZuA1ongqojMkvCflJHgp4bHltiizqzasOCntuGUvuC+s9GL4Kys4K6jeCcsIDI2LCBdXG4gICAgICBbICd40JDgpoHQkNCQ0aPQkNyY0aPgpZDIstCQ3JjgpoHMg9GjyLLRo8yD0aPgpoHekN2n4KWQzIPgpZB4JywgMjEsIF1cbiAgICAgIFsgJ3jgpoHQkN6QzIPcmOClkNCQ0aPIstCQ3afgpZDcmNGjyLLgpoHcmOClkNyY4KaB4KWQ3afdp96Q4KWQeCcsIDIzLCBdXG4gICAgICBbICd4MMOD6LGyw5vyuK6NW+mglOyvnibZuPC9g7hV5aWXOeesl2HkmKt90q3itLLJlEnluZk284+0g+OCqEVm8pKfgM6BP+eJg3gnLCA0NCwgXVxuICAgICAgWyAneM+Nzo3yi4GlJcmZypjenPCijazujKDCtNmQ8qORpV7Ok/Cwm6VFfWHTh3vVhCRH6LSyXfC/kpXujKRZffK3n4fvh7byoo+ZeCcsIDM3LCBdXG4gICAgICBbICd4OfOuipjbhvOFiajyjLe686ylmNqp1LZp3pg1572M5aGVxLQz0bflpI51yLjyvLO4862DrfGzjLRRfu6UnUNL5LGu4aO8Vz7nq6Z4JywgMzksIF1cbiAgICAgIFsgJ3jtlaBT9IK/mvOZj7By8oechWjziKur8YWmtdu/45mb856dtk7OlfOugJ7xsJG48p+ervCwiqbthJ3kka3RiPKFiLrPm8mgYMKwamvkgr7koq/0hYyx6rOieCcsIDQyLCBdXG4gICAgICBbICd48YmDk/KNpo5Q8Ly7ntOPOe6NvuyvrNy806zmkpfynoWb37DmoqHwrqam5oO6b/SOjJXop77Xpd+P46ek4YGy1Lzlk4vwm6em7LyI264k7ZSV76S86omAeCcsIDQ0LCBdXG4gICAgICBbICd48J+YgPCfkLHwn4yf8J+agPCfjZV4JywgMTIsIF1cbiAgICAgIFsgJ3jwk4CA8JOBkPCTg7Dwk4aj8JOCgHgnLCA3LCBdXG4gICAgICBbICd48J2QgPCdkIHwnZCC8J2QoPCdkKHwnZCi8J2RgPCdkYHwnZGC8J2RkPCdkZHwnZGS8J2SsPCdkrHwnZKy8J2TgPCdk4HwnZOC8J2UkPCdlJHwnZSS8J2UsPCdlLHwnZSy8J2VgPCdlYHwnZWCeCcsIDI5LCBdXG4gICAgICBbICd4eCcsIDIsIF1cbiAgICAgIFsgXCJcIlwiRnJha3R1ciAoR2VybWFuOiBbZsqBYWvLiHR1y5DJkMyvXSApIGlzIGEgY2FsbGlncmFwaGljIGhhbmQgb2YgdGhlIExhdGluIGFscGhhYmV0IGFuZCBhbnkgb2Ygc2V2ZXJhbCBibGFja2xldHRlciB0eXBlZmFjZXMgZGVyaXZlZCBmcm9tIHRoaXMgaGFuZC4gSXQgaXMgZGVzaWduZWQgc3VjaCB0aGF0IHRoZSBiZWdpbm5pbmdzIGFuZCBlbmRzIG9mIHRoZSBpbmRpdmlkdWFsIHN0cm9rZXMgdGhhdCBtYWtlIHVwIGVhY2ggbGV0dGVyIHdpbGwgYmUgY2xlYXJseSB2aXNpYmxlLCBhbmQgb2Z0ZW4gZW1waGFzaXplZDsgaW4gdGhpcyB3YXkgaXQgaXMgb2Z0ZW4gY29udHJhc3RlZCB3aXRoIHRoZSBjdXJ2ZXMgb2YgdGhlIEFudGlxdWEgKGNvbW1vbikgdHlwZWZhY2VzIHdoZXJlIHRoZSBsZXR0ZXJzIGFyZSBkZXNpZ25lZCB0byBmbG93IGFuZCBzdHJva2VzIGNvbm5lY3QgdG9nZXRoZXIgaW4gYSBjb250aW51b3VzIGZhc2hpb24uIFRoZSB3b3JkIFwiRnJha3R1clwiIGRlcml2ZXMgZnJvbSBMYXRpbiBmcsSBY3TFq3JhIChcImEgYnJlYWtcIiksIGJ1aWx0IGZyb20gZnLEgWN0dXMsIHBhc3NpdmUgcGFydGljaXBsZSBvZiBmcmFuZ2VyZSAoXCJ0byBicmVha1wiKSwgd2hpY2ggaXMgYWxzbyB0aGUgcm9vdCBmb3IgdGhlIEVuZ2xpc2ggd29yZCBcImZyYWN0dXJlXCIuIEluIG5vbi1wcm9mZXNzaW9uYWwgY29udGV4dHMsIHRoZSB0ZXJtIFwiRnJha3R1clwiIGlzIHNvbWV0aW1lcyBtaXN1c2VkIHRvIHJlZmVyIHRvIGFsbCBibGFja2xldHRlciB0eXBlZmFjZXMg4oCTIHdoaWxlIEZyYWt0dXIgdHlwZWZhY2VzIGRvIGZhbGwgdW5kZXIgdGhhdCBjYXRlZ29yeSwgbm90IGFsbCBibGFja2xldHRlciB0eXBlZmFjZXMgZXhoaWJpdCB0aGUgRnJha3R1ciBjaGFyYWN0ZXJpc3RpY3MgZGVzY3JpYmVkIGFib3ZlLlwiXCJcIiwgODkyLCBdXG4gICAgICBbIFwiXCJcIkZyYWt0dXIgd2FzIG9mdGVuIGNoYXJhY3Rlcml6ZWQgYXMgXCJ0aGUgR2VybWFuIHR5cGVmYWNlXCIsIGFzIGl0IHJlbWFpbmVkIHBvcHVsYXIgaW4gR2VybWFueSBhbmQgbXVjaCBvZiBFYXN0ZXJuIEV1cm9wZSBmYXIgbG9uZ2VyIHRoYW4gZWxzZXdoZXJlLiBJbiBHZXJtYW55LCB1dGlsaXppbmcgbW9yZSBtb2Rlcm4gdHlwZWZhY2VzIHdvdWxkIHByb3ZlIGNvbnRyb3ZlcnNpYWwgdW50aWwgMTk0MSwgd2hlbiB0aGUgTmF6aSBnb3Zlcm5tZW50IHJlbmRlcmVkIGFueSB0cmFuc2l0aW9uIGludm9sdW50YXJ5IGJ5IGJhbm5pbmcgdGhlIHVzZSBvZiBGcmFrdHVyIHR5cGVmYWNlcy5cIlwiXCIsIDMyOSwgXVxuICAgICAgWyAnXFx4MDQnLCAwLCBdXG4gICAgICBbICdezIrgvpEnLCAxLCBdXG4gICAgICBbICd4JywgMSwgXVxuICAgICAgWyAneCcgLCAxLCBdXG4gICAgICBbICd44KaBJywgMSwgXVxuICAgICAgWyAnx5YnLCAxLCBdXG4gICAgICBbICfHmScsIDEsIF1cbiAgICAgIFsgJ8e8JywgMSwgXVxuICAgICAgWyAnyIgnLCAxLCBdXG4gICAgICBbICfIsicsIDEsIF1cbiAgICAgIFsgJ8iy4KaBJywgMSwgXVxuICAgICAgWyAnzqwnLCAxLCBdXG4gICAgICBbICfQkCcsIDEsIF1cbiAgICAgIFsgJ9CQ4KaBJywgMSwgXVxuICAgICAgWyAn0YsnLCAxLCBdXG4gICAgICBbICfRoycsIDEsIF1cbiAgICAgIFsgJ9GjzIMnLCAxLCBdXG4gICAgICBbICfRo+CmgScsIDEsIF1cbiAgICAgIFsgJ9aJJywgMSwgXVxuICAgICAgWyAn2KInLCAxLCBdXG4gICAgICBbICfasCcsIDEsIF1cbiAgICAgIFsgJ9yYJywgMSwgXVxuICAgICAgWyAn3JjgpoEnLCAxLCBdXG4gICAgICBbICfcmOCmgcyDJywgMSwgXVxuICAgICAgWyAn3acnLCAxLCBdXG4gICAgICBbICfdsScsIDEsIF1cbiAgICAgIFsgJ96QJywgMSwgXVxuICAgICAgWyAn3pDMgycsIDEsIF1cbiAgICAgIFsgJ+ClkCcsIDEsIF1cbiAgICAgIFsgJ+ClkMyDJywgMSwgXVxuICAgICAgWyAn4KeGJywgMSwgXVxuICAgICAgWyAn4Ke2JywgMSwgXVxuICAgICAgWyAn4KqIzJInLCAxLCBdXG4gICAgICBbICfgqrAnLCAxLCBdXG4gICAgICBbICfgq60nLCAxLCBdXG4gICAgICBbICfgrIAnLCAxLCBdXG4gICAgICBbICfgrKwnLCAxLCBdXG4gICAgICBbICfgrqMnLCAxLCBdXG4gICAgICBbICfgtLUnLCAxLCBdXG4gICAgICBbICfgtpcnLCAxLCBdXG4gICAgICBbICfilIPhh5/ilIMnLCAyLCBdXG4gICAgICBbICfilIPhhJDhhaHhh7/ilIMnLCA0LCBdXG4gICAgICBbICfilIPhhIDhhaLhhqjilIMnLCA0LCBdXG4gICAgICBbICfilIPhhJHhhbHhhrbilIMnLCA0LCBdXG4gICAgICBbICfhlL7gvrMnLCAxLCBdXG4gICAgICBbICfhm4AnLCAxLCBdXG4gICAgICBbICfwn5KBJywgMiwgXVxuICAgICAgWyAn8J+TjicsIDIsIF1cbiAgICAgIFsgJ/CflJEnLCAyLCBdXG4gICAgICBbICfgpoEnLCAwIF1cbiAgICAgIFsgJ+GUvicsIDEgXVxuICAgICAgWyAn4L6zJywgMCBdXG4gICAgICBbICfilINcXHgwN+KUgycsIDIsIF1cbiAgICAgIFsgJ+KUg8S34pSDJywgMywgXVxuICAgICAgWyAn4pSDyYfilIMnLCAzLCBdXG4gICAgICBbICfilIPLk+KUgycsIDMsIF1cbiAgICAgIFsgJ+KUg9WU2ZjilIMnLCAzLCBdXG4gICAgICBbICfilIPbjeKUgycsIDMsIF1cbiAgICAgIFsgJ+KUg9+/4pSDJywgMywgXVxuICAgICAgWyAn4pSD4KKA4pSDJywgMywgXVxuICAgICAgWyAn4pSD4K6D4pSDJywgMywgXVxuICAgICAgWyAn4pSD4K+94pSDJywgMywgXVxuICAgICAgWyAn4pSD4LSl4pSDJywgMywgXVxuICAgICAgWyAn4pSD4L2F4pSDJywgMywgXVxuICAgICAgWyAn4pSD4YSd4pSDJywgNCwgXVxuICAgICAgWyAn4pSD4Yqa4pSDJywgMywgXVxuICAgICAgWyAn4pSD4Y2n4pSDJywgMywgXVxuICAgICAgWyAn4pSD4Y2t4pSDJywgMywgXVxuICAgICAgWyAn4pSD4Zqy4pSDJywgMywgXVxuICAgICAgWyAn4pSD4ZuH4pSDJywgMywgXVxuICAgICAgWyAn4pSD4Zuc4pSDJywgMywgXVxuICAgICAgWyAn4pSD4Zu+4pSDJywgMywgXVxuICAgICAgWyAn4pSD4Z2W4pSDJywgMywgXVxuICAgICAgWyAn4pSD4Z2t4pSDJywgMywgXVxuICAgICAgWyAn4pSD4puE4pSDJywgNCwgXVxuICAgICAgWyAn4pSD4YKl4pSDJywgMywgXVxuICAgICAgWyAn4pSD4Y+J4pSDJywgMywgXVxuICAgICAgWyAn4pSD4Y+T4pSDJywgMywgXVxuICAgICAgWyAn4pSD8J+Nh+Cph+KUgycsIDQsIF1cbiAgICAgIFsgJ+KUg/CfjbvilIMnLCA0LCBdXG4gICAgICBbICfilIPwn5OI4pSDJywgNCwgXVxuICAgICAgWyAn4pSD8J+VveKUgycsIDMsIF1cbiAgICAgIFsgJ+KUg/Cfh6bwn4e24pSDJywgNCwgXVxuICAgICAgWyAn4pSD8J+HpuKUgycsIDMgXVxuICAgICAgWyAn4pSD8J+HtuKUgycsIDMgXVxuICAgICAgWyAn4pSDXFx1ezFGNjM2fVxcdXsyMDBEfVxcdXsxRjMyQn1cXHV7RkUwRn3ilIMnLCAzIF1cbiAgICAgIFsgJ+KUg/CfpKbwn4++4oCN4pmC77iP4pSDJywgNCBdXG5cbiAgICAgICMgWyAoIHJlZCAnYWJjJyApLCAzLCBdXG4gICAgICBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZXJyb3JfY291bnRzICA9IFsgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgXVxuICAgICAgZm10X3dpZHRoICAgICA9ICggdywgaWR4LCBtYXRjaGVyICkgLT4gcmV2ZXJzZSAoIGlmIHcgaXMgbWF0Y2hlciB0aGVuIGdyZWVuIGVsc2UgZG8gLT4gZXJyb3JfY291bnRzWyBpZHggXSsrOyByZWQgKSBmXCIgI3t3fTo+M2M7IFwiXG4gICAgICBmb3IgWyBwcm9iZSwgbWF0Y2hlciwgXSBpbiBwcm9iZXNfYW5kX21hdGNoZXJzXG4gICAgICAgIHcwICAgICAgICA9IHNpc29fc3R3aV9nZXRfd2lkdGggICAgIHByb2JlOyB3MHIgPSBmbXRfd2lkdGggdzAsIDAsIG1hdGNoZXJcbiAgICAgICAgdzEgICAgICAgID0gc2lzb19jY2gxX2dldF93aWR0aCAgICAgcHJvYmU7IHcxciA9IGZtdF93aWR0aCB3MSwgMSwgbWF0Y2hlclxuICAgICAgICB3MiAgICAgICAgPSBzaXNvX2NjaDJfZ2V0X3dpZHRoICAgICBwcm9iZTsgdzJyID0gZm10X3dpZHRoIHcyLCAyLCBtYXRjaGVyXG4gICAgICAgIHczICAgICAgICA9IHNpc29fY2NoM19nZXRfd2lkdGggICAgIHByb2JlOyB3M3IgPSBmbXRfd2lkdGggdzMsIDMsIG1hdGNoZXJcbiAgICAgICAgdzQgICAgICAgID0gc2lzb19jY2g0X2dldF93aWR0aCAgICAgcHJvYmU7IHc0ciA9IGZtdF93aWR0aCB3NCwgNCwgbWF0Y2hlclxuICAgICAgICB3NSAgICAgICAgPSBteWNvX3djd2lfZ2V0X3dpZHRoICAgICBwcm9iZTsgdzVyID0gZm10X3dpZHRoIHc1LCA1LCBtYXRjaGVyXG4gICAgICAgIHc2ICAgICAgICA9IG1haGVfd2NzdF9nZXRfd2lkdGggICAgIHByb2JlOyB3NnIgPSBmbXRfd2lkdGggdzYsIDYsIG1hdGNoZXJcbiAgICAgICAgdzcgICAgICAgID0gZ2V0X3djX21heF9saW5lX2xlbmd0aCAgcHJvYmU7IHc3ciA9IGZtdF93aWR0aCB3NywgNywgbWF0Y2hlclxuICAgICAgICBzYW1lICAgICAgPSB3MCA9IHcxID09IHcyID09IHczID09IHc0ID09IHc1ID09IHc2ID09IHc3ID09IG1hdGNoZXJcbiAgICAgICAgc2FtZV9ycHIgID0gR1VZLnRybS5yZXZlcnNlIEdVWS50cm0udHJ1dGggc2FtZVxuICAgICAgICBlY2hvICAnzqlfX18xJywgZlwiI3tzYW1lX3Jwcn06PjVjOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAje2dhdWdlXzYwfVwiIHVubGVzcyBzYW1lXG4gICAgICAgIGVjaG8gICfOqV9fXzInLCBmXCIje3NhbWVfcnByfTo+NWM7ICN7bWF0Y2hlcn06PjQuMGY7ICN7dzByfSAje3cxcn0gI3t3MnJ9ICN7dzNyfSAje3c0cn0gI3t3NXJ9ICN7dzZyfSAje3c3cn0gI3tycHIgcHJvYmV9XCJcbiAgICAgIGVjaG8gICAgJ86pX19fMycsIGZcIiN7Jyd9Oj41YzsgI3snJ306PjRjOyAje2Vycm9yX2NvdW50c1swXX06PjQuMGY7ICAje2Vycm9yX2NvdW50c1sxXX06PjQuMGY7ICAje2Vycm9yX2NvdW50c1syXX06PjQuMGY7ICAje2Vycm9yX2NvdW50c1szXX06PjQuMGY7ICN7ZXJyb3JfY291bnRzWzRdfTo+NC4wZjsgI3tlcnJvcl9jb3VudHNbNV19Oj40LjBmOyAje2Vycm9yX2NvdW50c1s2XX06PjQuMGY7ICN7ZXJyb3JfY291bnRzWzddfTo+NC4wZjsgXCJcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgeyBocnRpbWVfYXNfYmlnaW50LCB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfYmVuY2htYXJraW5nKClcbiAgICAgIHBhcnRpY2lwYW50cyA9XG4gICAgICAgIHNpc29fc3R3aTogIHNpc29fc3R3aV9nZXRfd2lkdGhcbiAgICAgICAgc2lzb19jY2gxOiAgc2lzb19jY2gxX2dldF93aWR0aFxuICAgICAgICBzaXNvX2NjaDI6ICBzaXNvX2NjaDJfZ2V0X3dpZHRoXG4gICAgICAgIHNpc29fY2NoMzogIHNpc29fY2NoM19nZXRfd2lkdGhcbiAgICAgICAgc2lzb19jY2g0OiAgc2lzb19jY2g0X2dldF93aWR0aFxuICAgICAgICBteWNvX3djd2k6ICBteWNvX3djd2lfZ2V0X3dpZHRoXG4gICAgICAgIG1haGVfd2NzdDogIG1haGVfd2NzdF9nZXRfd2lkdGhcbiAgICAgICAganNfc2VnbW50OiAganNfc2VnbWVudGl6ZVxuICAgICAgICBhcnJheV9mcm06ICAoIHRleHQgKSAtPiBBcnJheS5mcm9tIHRleHRcbiAgICAgICAgIyB3Y19tYXhfbGw6ICBnZXRfd2NfbWF4X2xpbmVfbGVuZ3RoXG4gICAgICBmb3IgbmFtZSwgZm4gb2YgcGFydGljaXBhbnRzXG4gICAgICAgIHQwID0gaHJ0aW1lX2FzX2JpZ2ludCgpXG4gICAgICAgIGZvciBfIGluIFsgMCAuLiA1ZTIgXVxuICAgICAgICAjIGZvciBfIGluIFsgMCAuLiA1ZTMgXVxuICAgICAgICAgIGZvciBbIHByb2JlLCBtYXRjaGVyLCBdIGluIHByb2Jlc19hbmRfbWF0Y2hlcnNcbiAgICAgICAgICAgIHcxID0gZm4gcHJvYmVcbiAgICAgICAgdDEgPSBocnRpbWVfYXNfYmlnaW50KClcbiAgICAgICAgZWNobyAnzqlfX180JywgbmFtZSwgZlwiI3soIE51bWJlciB0MSAtIHQwICkgLyAxXzAwMF8wMDB9Oj4yMCwuOWY7XCJcbiAgICAgIGluZm8gJ86pX19fNScsIGNhY2hlXzEuc2l6ZSwgKCBbIGNhY2hlXzEuZW50cmllcygpLi4uLCBdWyAuLiAxMCBdLmZsYXQgSW5maW5pdHkgKS5qb2luICcgJ1xuICAgICAgaGVscCAnzqlfX182JywgY2FjaGVfMi5zaXplLCAoIFsgY2FjaGVfMi5lbnRyaWVzKCkuLi4sIF1bIC4uIDEwIF0uZmxhdCBJbmZpbml0eSApLmpvaW4gJyAnXG4gICAgICB1cmdlICfOqV9fXzcnLCBjYWNoZV8zLnNpemUsICggWyBjYWNoZV8zLmVudHJpZXMoKS4uLiwgXVsgLi4gMTAgXS5mbGF0IEluZmluaXR5ICkuam9pbiAnICdcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkZWJ1ZyAnzqlfX184JywganNfc2VnbWVudGl6ZSAneFx1MDAwN+GdreGEnduN4K6D4Y+T37/Et+GbnOC0peGNp9WU2Zjwn42H4KmH4Y+J8J+TiOGNrcuT8J+VveCigOCvveGCpeGbh+GdlvCfjbvJh+GbvuKbhOGKmuC9heGasngnXG4gICAgZGVidWcgJ86pX19fOScsIGpzX3NlZ21lbnRpemUgJ3jwn4em8J+HtngnXG4gICAgZGVidWcgJ86pX18xMCcsIEFycmF5LmZyb20gJ3jwn4em8J+HtngnXG4gICAgIyBkZWJ1ZyAnzqlfXzExJywganNfc2VnbWVudGl6ZSAneOC2l8eZ4Kqw8J+Tjl7MiuC+kd2x4KyAyIjhh5/gtLXwn5KB4Kutx7xcdTAwMDThm4DWieCqiMyS8J+UkeCnhseW2KLOrNqw4Ke24ZS+4L6z0YvgrKzgrqN4J1xuICAgICMgZGVidWcgJ86pX18xMicsIGpzX3NlZ21lbnRpemUgJ3jQkOCmgdCQ0JDRo9CQ3JjRo+ClkMiy0JDcmOCmgcyD0aPIstGjzIPRo+Cmgd6Q3afgpZDMg+ClkHgnXG4gICAgIyBkZWJ1ZyAnzqlfXzEzJywganNfc2VnbWVudGl6ZSAneOCmgdCQ3pDMg9yY4KWQ0JDRo8iy0JDdp+ClkNyY0aPIsuCmgdyY4KWQ3JjgpoHgpZDdp92n3pDgpZB4J1xuICAgICMgZGVidWcgJ86pX18xNCcsIEFycmF5LmZyb20gJ8iy4KaBJ1xuICAgICMgZGVidWcgJ86pX18xNScsIEFycmF5LmZyb20gJ9CQ4KaBJ1xuICAgICMgZGVidWcgJ86pX18xNicsIEFycmF5LmZyb20gJ9Gj4KaBJ1xuICAgICMgZGVidWcgJ86pX18xNycsICggKCBBcnJheS5mcm9tICfhlL7gvrMnIClbIDEgXS5jb2RlUG9pbnRBdCAwICkudG9TdHJpbmcgMTZcbiAgICByZXR1cm4gbnVsbFxuXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICAjIGRlbW9faW5maW5pdGVfcHJveHkoKVxuICAjIGRlbW9fY29sb3JmdWxfcHJveHkoKVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGJlbmNobWFya3MsIH1cbiAgaW5mbyByZXZlcnNlIHJlZCBcImFsc28gY29tcGFyZSB0byBodHRwczovL2dpdGh1Yi5jb20vZGF3c29uaHVhbmcwL1djd2lkdGgtTzFcIlxuIl19
