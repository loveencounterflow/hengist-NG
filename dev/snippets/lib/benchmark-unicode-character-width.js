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

  SFMODULES = require('../../../apps/bricabrac-sfmodules');

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JlbmNobWFyay11bmljb2RlLWNoYXJhY3Rlci13aWR0aC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJHO0VBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFFSDtBQUZHLE1BQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxVQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQTs7O0VBS0gsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQiwwQ0FBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLEtBSEYsRUFJRSxLQUpGLEVBS0UsSUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsR0FSRixFQVNFLElBVEYsRUFVRSxPQVZGLEVBV0UsR0FYRixDQUFBLEdBVzRCLEdBQUcsQ0FBQyxHQVhoQzs7RUFZQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1QixFQTNCRzs7O0VBNkJILENBQUEsQ0FBRSxHQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFR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RUFBQSxDQUFBLENBQUksQ0FBSixDQUFBLE1BQUEsQ0FBdEUsQ0FBUjtRQUF2QjtRQUNoQixLQUFBLHFEQUFBO1VBQUksQ0FBRSxLQUFGLEVBQVMsT0FBVDtVQUNGLEVBQUEsR0FBWSxtQkFBQSxDQUF3QixLQUF4QjtVQUErQixHQUFBLEdBQU0sU0FBQSxDQUFVLEVBQVYsRUFBYyxDQUFkLEVBQWlCLE9BQWpCO1VBQ2pELEVBQUEsR0FBWSxtQkFBQSxDQUF3QixLQUF4QjtVQUErQixHQUFBLEdBQU0sU0FBQSxDQUFVLEVBQVYsRUFBYyxDQUFkLEVBQWlCLE9BQWpCO1VBQ2pELEVBQUEsR0FBWSxtQkFBQSxDQUF3QixLQUF4QjtVQUErQixHQUFBLEdBQU0sU0FBQSxDQUFVLEVBQVYsRUFBYyxDQUFkLEVBQWlCLE9BQWpCO1VBQ2pELEVBQUEsR0FBWSxtQkFBQSxDQUF3QixLQUF4QjtVQUErQixHQUFBLEdBQU0sU0FBQSxDQUFVLEVBQVYsRUFBYyxDQUFkLEVBQWlCLE9BQWpCO1VBQ2pELEVBQUEsR0FBWSxtQkFBQSxDQUF3QixLQUF4QjtVQUErQixHQUFBLEdBQU0sU0FBQSxDQUFVLEVBQVYsRUFBYyxDQUFkLEVBQWlCLE9BQWpCO1VBQ2pELEVBQUEsR0FBWSxtQkFBQSxDQUF3QixLQUF4QjtVQUErQixHQUFBLEdBQU0sU0FBQSxDQUFVLEVBQVYsRUFBYyxDQUFkLEVBQWlCLE9BQWpCO1VBQ2pELEVBQUEsR0FBWSxtQkFBQSxDQUF3QixLQUF4QjtVQUErQixHQUFBLEdBQU0sU0FBQSxDQUFVLEVBQVYsRUFBYyxDQUFkLEVBQWlCLE9BQWpCO1VBQ2pELEVBQUEsR0FBWSxzQkFBQSxDQUF3QixLQUF4QjtVQUErQixHQUFBLEdBQU0sU0FBQSxDQUFVLEVBQVYsRUFBYyxDQUFkLEVBQWlCLE9BQWpCO1VBQ2pELElBQUEsR0FBWSxFQUFBLEdBQUssQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQSxLQUFNLEVBQU4sSUFBTSxFQUFOLEtBQVksRUFBWixDQUFBLElBQVksRUFBWixLQUFrQixFQUFs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QUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixJQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QixDQUFFLFVBQUYsQ0FBOUI7YUFDQSxJQUFBLENBQUssT0FBQSxDQUFRLEdBQUEsQ0FBSSw0REFBSixDQUFSLENBQUw7SUFOc0MsQ0FBQSxJQUF4Qzs7QUF0VUciLCJzb3VyY2VzQ29udGVudCI6WyJcbiMjI1xuXG5cbiMjIEFwcGxpY2F0aW9uc1xuXG4qICoqUmVnRXggQnVpbGRlcioqIChleGFtcGxlIGZyb20gW1JlamlncyBibG9nIHBvc3RdKGh0dHBzOi8vbWVkaXVtLmNvbS9Ab21hcnphd2FocnkvcmVqaWdzLW1ha2luZy1yZWd1bGFyLWV4cHJlc3Npb25zLWh1bWFuLXJlYWRhYmxlLTFmYWQzN2NiM2VhZSkpXG5cbmBgYGphdmFcbnZhciBlbWFpbFJlZ2V4ID1cbiAgICBSZWppZ3MuQ3JlYXRlKClcbiAgICAgICAgICAuQXRTdGFydCgpXG4gICAgICAgICAgLk9uZU9yTW9yZShyID0+IHIuQW55TGV0dGVyT3JEaWdpdCgpLk9yKCkuQW55T2YoXCIuXyUrLVwiKSlcbiAgICAgICAgICAuVGV4dChcIkBcIilcbiAgICAgICAgICAuT25lT3JNb3JlKHIgPT4gci5BbnlMZXR0ZXJPckRpZ2l0KCkuT3IoKS5BbnlPZihcIi4tXCIpKVxuICAgICAgICAgIC5UZXh0KFwiLlwiKVxuICAgICAgICAgIC5BbnlMZXR0ZXJPckRpZ2l0KCkuQXRMZWFzdCgyKVxuICAgICAgICAgIC5BdEVuZCgpXG4gICAgICAgICAgLkJ1aWxkKCk7XG5gYGBcblxuKiAqKkhUTUwvWE1MIEJ1aWxlcioqXG4qICoqU1FMIEJ1aWxkZXIqKlxuKiAqKkNMSSBDb2xvcmluZyoqXG4qIHN5bnRheCBmb3IgYSAqKlR5cGUgQ2hlY2tlcioqXG5cbiMjI1xuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2JlbmNobWFyay11bmljb2RlLWNoYXJhY3Rlci13aWR0aC5jb2ZmZWUnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgZ3JlZW5cbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiMgd3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcbnsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuXG5cblxuXG4jIyNcblxuRnJvbSBbYGNoYWxrL3N0cmlwLWFuc2lgXShodHRwczovL2dpdGh1Yi5jb20vY2hhbGsvc3RyaXAtYW5zaSkgYFJFQURNRS5tZGA6XG5cbj4gPiBbIU5PVEVdXG4+ID5cbj4gPiBOb2RlLmpzIGhhcyB0aGlzIGJ1aWx0LWluIG5vdyB3aXRoXG4+ID4gW2BzdHJpcFZUQ29udHJvbENoYXJhY3RlcnNgXShodHRwczovL25vZGVqcy5vcmcvYXBpL3V0aWwuaHRtbCN1dGlsc3RyaXB2dGNvbnRyb2xjaGFyYWN0ZXJzc3RyKS4gVGhlXG4+ID4gYmVuZWZpdCBvZiB0aGlzIHBhY2thZ2UgaXMgY29uc2lzdGVudCBiZWhhdmlvciBhY3Jvc3MgTm9kZS5qcyB2ZXJzaW9ucyBhbmQgZmFzdGVyIGltcHJvdmVtZW50cy4gVGhlXG4+ID4gTm9kZS5qcyB2ZXJzaW9uIGlzIGFjdHVhbGx5IGJhc2VkIG9uIHRoaXMgcGFja2FnZS5cblxuY29uc29sZS5sb2codXRpbC5zdHJpcFZUQ29udHJvbENoYXJhY3RlcnMoJ1xcdTAwMUJbNG12YWx1ZVxcdTAwMUJbMG0nKSlcblxuTm90ZXM6XG5cbiAgKiBbKipgc2luZHJlc29yaHVzL3N0cmluZy13aWR0aGAqKl0oaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9zdHJpbmctd2lkdGgpIGJ5IFNpbmRyZSBTb3JodXM7XG4gICAgZGVwZW5kZW5jaWVzIGluY2x1ZGUgW2BtYXRoaWFzYnluZW5zL2Vtb2ppLXJlZ2V4YF0oaHR0cHM6Ly9naXRodWIuY29tL21hdGhpYXNieW5lbnMvZW1vamktcmVnZXgpICh3aGljaFxuICAgIGNvdWxkIGJlIHJlcGxhY2VkIHdpdGggYSBzbWFsbGVyIGxpYnJhcnkgd2l0aCB0aGUgc2FtZSBBUElcbiAgICBbYHNsZXZpdGhhbi9lbW9qaS1yZWdleC14c2BdKGh0dHBzOi8vZ2l0aHViLmNvbS9zbGV2aXRoYW4vZW1vamktcmVnZXgteHMpKTsgbm90ZSB0aGUgbnVtYmVyIG9mXG4gICAgd2VsbC1rbm93biwgdHJ1c3RlZCBhdXRob3JzIGhlcmUgdGhhdCBtb3JlIG9mdGVuIHRoYW4gbm90IGRlbGl2ZXIgaGlnaC1xdWFsaXR5IHNvZnR3YXJlLlxuXG4gICAgRGVwZW5kZW5jaWVzOlxuICAgICAgKiBbYG1hdGhpYXNieW5lbnMvZW1vamktcmVnZXhgXShodHRwczovL2dpdGh1Yi5jb20vbWF0aGlhc2J5bmVucy9lbW9qaS1yZWdleClcbiAgICAgICogW2Brb21hZ2F0YS9nZXQtZWFzdC1hc2lhbi13aWR0aGBdKGh0dHBzOi8vZ2l0aHViLmNvbS9rb21hZ2F0YS9lYXN0YXNpYW53aWR0aClcbiAgICAgICogW2BjaGFsay9zdHJpcC1hbnNpYF0oaHR0cHM6Ly9naXRodWIuY29tL2NoYWxrL3N0cmlwLWFuc2kpXG4gICAgICAgICogW2BjaGFsay9hbnNpLXJlZ2V4YF0oaHR0cHM6Ly9naXRodWIuY29tL2NoYWxrL2Fuc2ktcmVnZXgpXG5cbiAgKiBbKipgbWFydGluaGVpZGVnZ2VyL3djc3RyaW5nYCoqXShodHRwczovL2dpdGh1Yi5jb20vbWFydGluaGVpZGVnZ2VyL3djc3RyaW5nKTogZG9lcyBhIGxvdCBvZiBzdHJpbmdcbiAgICBtYW5pcHVsYXRpb24gc3R1ZmYgdGhhdCB3ZSBkb24ndCBuZWVkIG9yIHBsYW4gdG8gaW1wbGVtZW50IGluIGEgc2ltaWxhciBidXQgZGlmZmVyZW50IHdheTsgdXNlcyBgd2NzaXplYFxuICAgIHNvIHByZXN1bWFibHkgYWxzbyBpbmhlcml0cyBpdHMgcHJvYmxlbXMoPylcblxuRXhjbHVkZWQ6XG5cbiAgKiBbKipgbWFydGluaGVpZGVnZ2VyL3djc2l6ZWAqKl0oaHR0cHM6Ly9naXRodWIuY29tL21hcnRpbmhlaWRlZ2dlci93Y3NpemUpOiBub3QgdmVyeSB3ZWxsIHVzYWJsZSBpblxuICAgIG1vZGVybiBlbnZpcm9ubWVudHMgYXMgYHdjc2l6ZWAsIGFjY29yZGluZyB0byB0aGUgZG9jcywgXCJkaWZmZXJbLi4uXXMgZnJvbSBib3RoIFtgd2N3aWR0aGAgYW5kXG4gICAgYHZpc3VhbHdpZHRoLWpzYF0gYnkgb25seSByZXR1cm5pbmcgdGhlIHdpZHRoIG9mIG9uZSBjaGFyYWN0ZXIgKGFzIGludGVnZXIhKVwiLCBtZWFuaW5nIHRoYXQgaXQgY2Fubm90LFxuICAgIGJ5IGNvbnN0cnVjdGlvbiwgaGFuZGxlIGNvbXBvc2VkIExhdGluIGFjY2VudGVkIGxldHRlcnMsIG9yIGxldCBhbG9uZSBtdWx0aS1jb2RlcG9pbnQgZW1vamkuIEl0IGFsc29cbiAgICBzdHJ1Z2dsZXMgd2l0aCBVbmljb2RlIHN1cnJvZ2F0ZSBoYW5kbGluZywgYXQgbGVhc3QgaW4gdHJ5aW5nIHRvIG1ha2Ugc2Vuc2Ugb2YgdGhlbSBpbiB0aGUgYFJFQURNRS5tZGAuXG5cbiAgKiBbKipgdG9rdWhpcm9tL3Zpc3VhbHdpZHRoLWpzYCoqXShodHRwczovL2dpdGh1Yi5jb20vdG9rdWhpcm9tL3Zpc3VhbHdpZHRoLWpzKTogdG9vIG9sZCwgc3RhcnRlZCBjYS5cbiAgICAyMDExLCBsYXN0IGNvbW1pdCBmcm9tIGNhLiAyMDE1XG5cbiMjI1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBiZW5jaG1hcmtzID0gYmVuY2htYXJrcyA9XG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBmbjogLT5cbiAgICB7IGFuc2lfY29sb3JzX2FuZF9lZmZlY3RzOiBDLCB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfYW5zaV9jb2xvcnNfYW5kX2VmZmVjdHMoKVxuICAgIHsgYnVpbGRfY2hyX2dhdWdlICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9jaHJfZ2F1Z2UoKVxuICAgIHsgaW50ZXJuYWxzOiB7IGpzX3NlZ21lbnRpemUsIH0sXG4gICAgICBBbnNpX2NodW5rZXIsICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2Fuc2lfY2h1bmtlcigpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICB7IGRlZmF1bHQ6IHNpc29fc3R3aV9nZXRfd2lkdGgsICB9ICA9IHJlcXVpcmUgJ3N0cmluZy13aWR0aCcgICMjIyBzaW5kcmVzb3JodXMvc3RyaW5nLXdpZHRoICMjI1xuICAgIHsgZGVmYXVsdDogbXljb193Y3dpX2dldF93aWR0aCwgIH0gID0gcmVxdWlyZSAnd2N3aWR0aC5qcycgICAgIyMjIG15Y29ib2NvL3djd2lkdGguanMgIyMjXG4gICAgX21haGVfd2NzdF9nZXRfd2lkdGggICAgICAgICAgICAgICAgPSByZXF1aXJlICd3Y3N0cmluZycgICAgICAjIyMgbWFydGluaGVpZGVnZ2VyL3djc3RyaW5nICMjI1xuICAgIG1haGVfd2NzdF9nZXRfd2lkdGggICAgICAgICAgICAgICAgID0gKCB0ZXh0ICkgLT4gKCBfbWFoZV93Y3N0X2dldF93aWR0aCB0ZXh0ICkuc2l6ZSgpXG4gICAgeyBnZXRfd2NfbWF4X2xpbmVfbGVuZ3RoLCB9ICAgICAgICAgPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9jb21tYW5kX2xpbmVfdG9vbHMoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2FjaGVfMSA9IG5ldyBNYXAoKVxuICAgIHNpc29fY2NoMV9nZXRfd2lkdGggPSAoIHRleHQgKSAtPlxuICAgICAgcmV0dXJuIFIgaWYgKCBSID0gY2FjaGVfMS5nZXQgdGV4dCApP1xuICAgICAgY2FjaGVfMS5zZXQgdGV4dCwgUiA9IHNpc29fc3R3aV9nZXRfd2lkdGggdGV4dFxuICAgICAgcmV0dXJuIFJcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNhY2hlXzIgPSBuZXcgTWFwKClcbiAgICBzaXNvX2NjaDJfZ2V0X3dpZHRoID0gKCB0ZXh0ICkgLT5cbiAgICAgIFIgPSAwXG4gICAgICBmb3Igc2VnbWVudCBpbiBzZWdtZW50cyA9IGpzX3NlZ21lbnRpemUgdGV4dFxuICAgICAgICB1bmxlc3MgKCB3aWR0aCA9IGNhY2hlXzIuZ2V0IHNlZ21lbnQgKT9cbiAgICAgICAgICBjYWNoZV8yLnNldCBzZWdtZW50LCB3aWR0aCA9IHNpc29fc3R3aV9nZXRfd2lkdGggc2VnbWVudFxuICAgICAgICBSICs9IHdpZHRoXG4gICAgICByZXR1cm4gUlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2FjaGVfMyA9IG5ldyBNYXAoKVxuICAgIHNpc29fY2NoM19nZXRfd2lkdGggPSAoIHRleHQgKSAtPlxuICAgICAgUiA9IDBcbiAgICAgIGZvciBzZWdtZW50IGluIHNlZ21lbnRzID0gQXJyYXkuZnJvbSB0ZXh0XG4gICAgICAgIHVubGVzcyAoIHdpZHRoID0gY2FjaGVfMy5nZXQgc2VnbWVudCApP1xuICAgICAgICAgIGNhY2hlXzMuc2V0IHNlZ21lbnQsIHdpZHRoID0gc2lzb19zdHdpX2dldF93aWR0aCBzZWdtZW50XG4gICAgICAgIFIgKz0gd2lkdGhcbiAgICAgIHJldHVybiBSXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjYWNoZV80ID0gbmV3IE1hcCgpXG4gICAgc2lzb19jY2g0X2dldF93aWR0aCA9ICggdGV4dCApIC0+XG4gICAgICBSID0gMFxuICAgICAgZm9yIHNlZ21lbnQgaW4gc2VnbWVudHMgPSBBcnJheS5mcm9tIHRleHRcbiAgICAgICAgaWYgL15cXHB7TW59JC92LnRlc3Qgc2VnbWVudFxuICAgICAgICAgIHdpZHRoID0gMFxuICAgICAgICBlbHNlIHVubGVzcyAoIHdpZHRoID0gY2FjaGVfNC5nZXQgc2VnbWVudCApP1xuICAgICAgICAgIGNhY2hlXzQuc2V0IHNlZ21lbnQsIHdpZHRoID0gc2lzb19zdHdpX2dldF93aWR0aCBzZWdtZW50XG4gICAgICAgIFIgKz0gd2lkdGhcbiAgICAgIHJldHVybiBSXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBnYXVnZV82MCA9IGJ1aWxkX2Nocl9nYXVnZSB7IGxlbmd0aDogNjAsIH1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHByb2Jlc19hbmRfbWF0Y2hlcnMgPSBbXG4gICAgICBbICd4eHgnLCAzLCBdXG4gICAgICBbICd48J+Zi3gnLCA0LCBdXG4gICAgICBbICd48J+Zi/Cfj714JywgNiwgXVxuICAgICAgWyAneGHvuKBi77iheCcsIDQsIF1cbiAgICAgIFsgJ3hh77igYu+4oXgnLCA0LCBdXG4gICAgICBbICdizZ1hJywgMiwgXVxuICAgICAgWyAnYc2gbycsIDIsIF1cbiAgICAgIFsgJ3jskod4JywgNCwgXVxuICAgICAgWyAneOuzhHgnLCA0LCBdXG4gICAgICBbICd444WCIOOFlSDjhLl4JywgMTAsIF1cbiAgICAgIFsgJ3jjhYLjhZXjhLl4JywgOCwgXVxuICAgICAgWyAneO++su+/iu++qXgnLCA1LCBdXG4gICAgICBbICd467OETHgnLCA1LCBdXG4gICAgICBbICd4YcyCeCcsIDMsIF1cbiAgICAgIFsgJ3jwk4O1eCcsIDMsIF1cbiAgICAgIFsgJ3jvt714JywgMywgXVxuICAgICAgWyAneM24eHgnLCA0LCBdXG4gICAgICBbICd415DXkdeSeCcsIDUsIF1cbiAgICAgIFsgJ3jbqdud2554JywgNCwgXVxuICAgICAgWyAneOC9keC+puC9vOC9hOC8i3gnLCA1LCBdXG4gICAgICBbICd48LCCgPCwgoHwsIKC8LCCg/CwgoR4JywgMTIsIF1cbiAgICAgIFsgJ3jwkIuh8JCLovCQi6PwkIuk8JCLpfCQi6bwn5ii8J+Yo/CfmKTwn5i08J+Yt/CfmaTwn5ml8J+ZsvCfmbPwn5m08J+ZvPCfmb3wn5m+8J+Zv/Cfmofwn52W8J+ep/CdkIDwnZCB8J2QgvCdkIPin4Din4Hin4Lin4N4JywgMzksIF1cbiAgICAgIFsgJ3jiv7ziv73iv77iv7/iv7t4JywgOCwgXVxuICAgICAgWyAneOK/sOK/seK/suK/s+K/tOK/teK/tuK/t+K/uOK/ueK/uuK/u3gnLCAyNiwgXVxuICAgICAgWyAneFx1MDAwN+GdreGEnduN4K6D4Y+T37/Et+GbnOC0peGNp9WU2Zjwn42H4KmH4Y+J8J+TiOGNrcuT8J+VveCigOCvveGCpeGbh+GdlvCfjbvJh+GbvuKbhOGKmuC9heGasngnLCAzNSwgXVxuICAgICAgWyAneOC2l8eZ4Kqw8J+Tjl7MiuC+kd2x4KyAyIjhh5/gtLXwn5KB4Kutx7xcdTAwMDThm4DWieCqiMyS8J+UkeCnhseW2KLOrNqw4Ke24ZS+4L6z0YvgrKzgrqN4JywgMjYsIF1cbiAgICAgIFsgJ3jQkOCmgdCQ0JDRo9CQ3JjRo+ClkMiy0JDcmOCmgcyD0aPIstGjzIPRo+Cmgd6Q3afgpZDMg+ClkHgnLCAyMSwgXVxuICAgICAgWyAneOCmgdCQ3pDMg9yY4KWQ0JDRo8iy0JDdp+ClkNyY0aPIsuCmgdyY4KWQ3JjgpoHgpZDdp92n3pDgpZB4JywgMjMsIF1cbiAgICAgIFsgJ3gww4PosbLDm/K4ro1b6aCU7K+eJtm48L2DuFXlpZc556yXYeSYq33SreK0ssmUSeW5mTbzj7SD44KoRWbykp+AzoE/54mDeCcsIDQ0LCBdXG4gICAgICBbICd4z43OjfKLgaUlyZnKmN6c8KKNrO6MoMK02ZDyo5GlXs6T8LCbpUV9YdOHe9WEJEfotLJd8L+Sle6MpFl98refh++HtvKij5l4JywgMzcsIF1cbiAgICAgIFsgJ3g5866KmNuG84WJqPKMt7rzrKWY2qnUtmnemDXnvYzloZXEtDPRt+WkjnXIuPK8s7jzrYOt8bOMtFF+7pSdQ0vksa7ho7xXPuerpngnLCAzOSwgXVxuICAgICAgWyAneO2VoFP0gr+a85mPsHLyh5yFaPOIq6vxhaa127/jmZvznp22Ts6V866AnvGwkbjyn56u8LCKpu2EneSRrdGI8oWIus+byaBgwrBqa+SCvuSir/SFjLHqs6J4JywgNDIsIF1cbiAgICAgIFsgJ3jxiYOT8o2mjlDwvLue04857o2+7K+s3LzTrOaSl/KehZvfsOaiofCupqbmg7pv9I6Mleinvtel34/jp6ThgbLUvOWTi/Cbp6bsvIjbriTtlJXvpLzqiYB4JywgNDQsIF1cbiAgICAgIFsgJ3jwn5iA8J+QsfCfjJ/wn5qA8J+NlXgnLCAxMiwgXVxuICAgICAgWyAnePCTgIDwk4GQ8JODsPCThqPwk4KAeCcsIDcsIF1cbiAgICAgIFsgJ3jwnZCA8J2QgfCdkILwnZCg8J2QofCdkKLwnZGA8J2RgfCdkYLwnZGQ8J2RkfCdkZLwnZKw8J2SsfCdkrLwnZOA8J2TgfCdk4LwnZSQ8J2UkfCdlJLwnZSw8J2UsfCdlLLwnZWA8J2VgfCdlYJ4JywgMjksIF1cbiAgICAgIFsgJ3h4JywgMiwgXVxuICAgICAgWyBcIlwiXCJGcmFrdHVyIChHZXJtYW46IFtmyoFha8uIdHXLkMmQzK9dICkgaXMgYSBjYWxsaWdyYXBoaWMgaGFuZCBvZiB0aGUgTGF0aW4gYWxwaGFiZXQgYW5kIGFueSBvZiBzZXZlcmFsIGJsYWNrbGV0dGVyIHR5cGVmYWNlcyBkZXJpdmVkIGZyb20gdGhpcyBoYW5kLiBJdCBpcyBkZXNpZ25lZCBzdWNoIHRoYXQgdGhlIGJlZ2lubmluZ3MgYW5kIGVuZHMgb2YgdGhlIGluZGl2aWR1YWwgc3Ryb2tlcyB0aGF0IG1ha2UgdXAgZWFjaCBsZXR0ZXIgd2lsbCBiZSBjbGVhcmx5IHZpc2libGUsIGFuZCBvZnRlbiBlbXBoYXNpemVkOyBpbiB0aGlzIHdheSBpdCBpcyBvZnRlbiBjb250cmFzdGVkIHdpdGggdGhlIGN1cnZlcyBvZiB0aGUgQW50aXF1YSAoY29tbW9uKSB0eXBlZmFjZXMgd2hlcmUgdGhlIGxldHRlcnMgYXJlIGRlc2lnbmVkIHRvIGZsb3cgYW5kIHN0cm9rZXMgY29ubmVjdCB0b2dldGhlciBpbiBhIGNvbnRpbnVvdXMgZmFzaGlvbi4gVGhlIHdvcmQgXCJGcmFrdHVyXCIgZGVyaXZlcyBmcm9tIExhdGluIGZyxIFjdMWrcmEgKFwiYSBicmVha1wiKSwgYnVpbHQgZnJvbSBmcsSBY3R1cywgcGFzc2l2ZSBwYXJ0aWNpcGxlIG9mIGZyYW5nZXJlIChcInRvIGJyZWFrXCIpLCB3aGljaCBpcyBhbHNvIHRoZSByb290IGZvciB0aGUgRW5nbGlzaCB3b3JkIFwiZnJhY3R1cmVcIi4gSW4gbm9uLXByb2Zlc3Npb25hbCBjb250ZXh0cywgdGhlIHRlcm0gXCJGcmFrdHVyXCIgaXMgc29tZXRpbWVzIG1pc3VzZWQgdG8gcmVmZXIgdG8gYWxsIGJsYWNrbGV0dGVyIHR5cGVmYWNlcyDigJMgd2hpbGUgRnJha3R1ciB0eXBlZmFjZXMgZG8gZmFsbCB1bmRlciB0aGF0IGNhdGVnb3J5LCBub3QgYWxsIGJsYWNrbGV0dGVyIHR5cGVmYWNlcyBleGhpYml0IHRoZSBGcmFrdHVyIGNoYXJhY3RlcmlzdGljcyBkZXNjcmliZWQgYWJvdmUuXCJcIlwiLCA4OTIsIF1cbiAgICAgIFsgXCJcIlwiRnJha3R1ciB3YXMgb2Z0ZW4gY2hhcmFjdGVyaXplZCBhcyBcInRoZSBHZXJtYW4gdHlwZWZhY2VcIiwgYXMgaXQgcmVtYWluZWQgcG9wdWxhciBpbiBHZXJtYW55IGFuZCBtdWNoIG9mIEVhc3Rlcm4gRXVyb3BlIGZhciBsb25nZXIgdGhhbiBlbHNld2hlcmUuIEluIEdlcm1hbnksIHV0aWxpemluZyBtb3JlIG1vZGVybiB0eXBlZmFjZXMgd291bGQgcHJvdmUgY29udHJvdmVyc2lhbCB1bnRpbCAxOTQxLCB3aGVuIHRoZSBOYXppIGdvdmVybm1lbnQgcmVuZGVyZWQgYW55IHRyYW5zaXRpb24gaW52b2x1bnRhcnkgYnkgYmFubmluZyB0aGUgdXNlIG9mIEZyYWt0dXIgdHlwZWZhY2VzLlwiXCJcIiwgMzI5LCBdXG4gICAgICBbICdcXHgwNCcsIDAsIF1cbiAgICAgIFsgJ17MiuC+kScsIDEsIF1cbiAgICAgIFsgJ3gnLCAxLCBdXG4gICAgICBbICd4JyAsIDEsIF1cbiAgICAgIFsgJ3jgpoEnLCAxLCBdXG4gICAgICBbICfHlicsIDEsIF1cbiAgICAgIFsgJ8eZJywgMSwgXVxuICAgICAgWyAnx7wnLCAxLCBdXG4gICAgICBbICfIiCcsIDEsIF1cbiAgICAgIFsgJ8iyJywgMSwgXVxuICAgICAgWyAnyLLgpoEnLCAxLCBdXG4gICAgICBbICfOrCcsIDEsIF1cbiAgICAgIFsgJ9CQJywgMSwgXVxuICAgICAgWyAn0JDgpoEnLCAxLCBdXG4gICAgICBbICfRiycsIDEsIF1cbiAgICAgIFsgJ9GjJywgMSwgXVxuICAgICAgWyAn0aPMgycsIDEsIF1cbiAgICAgIFsgJ9Gj4KaBJywgMSwgXVxuICAgICAgWyAn1oknLCAxLCBdXG4gICAgICBbICfYoicsIDEsIF1cbiAgICAgIFsgJ9qwJywgMSwgXVxuICAgICAgWyAn3JgnLCAxLCBdXG4gICAgICBbICfcmOCmgScsIDEsIF1cbiAgICAgIFsgJ9yY4KaBzIMnLCAxLCBdXG4gICAgICBbICfdpycsIDEsIF1cbiAgICAgIFsgJ92xJywgMSwgXVxuICAgICAgWyAn3pAnLCAxLCBdXG4gICAgICBbICfekMyDJywgMSwgXVxuICAgICAgWyAn4KWQJywgMSwgXVxuICAgICAgWyAn4KWQzIMnLCAxLCBdXG4gICAgICBbICfgp4YnLCAxLCBdXG4gICAgICBbICfgp7YnLCAxLCBdXG4gICAgICBbICfgqojMkicsIDEsIF1cbiAgICAgIFsgJ+CqsCcsIDEsIF1cbiAgICAgIFsgJ+CrrScsIDEsIF1cbiAgICAgIFsgJ+CsgCcsIDEsIF1cbiAgICAgIFsgJ+CsrCcsIDEsIF1cbiAgICAgIFsgJ+CuoycsIDEsIF1cbiAgICAgIFsgJ+C0tScsIDEsIF1cbiAgICAgIFsgJ+C2lycsIDEsIF1cbiAgICAgIFsgJ+KUg+GHn+KUgycsIDIsIF1cbiAgICAgIFsgJ+KUg+GEkOGFoeGHv+KUgycsIDQsIF1cbiAgICAgIFsgJ+KUg+GEgOGFouGGqOKUgycsIDQsIF1cbiAgICAgIFsgJ+KUg+GEkeGFseGGtuKUgycsIDQsIF1cbiAgICAgIFsgJ+GUvuC+sycsIDEsIF1cbiAgICAgIFsgJ+GbgCcsIDEsIF1cbiAgICAgIFsgJ/CfkoEnLCAyLCBdXG4gICAgICBbICfwn5OOJywgMiwgXVxuICAgICAgWyAn8J+UkScsIDIsIF1cbiAgICAgIFsgJ+CmgScsIDAgXVxuICAgICAgWyAn4ZS+JywgMSBdXG4gICAgICBbICfgvrMnLCAwIF1cbiAgICAgIFsgJ+KUg1xceDA34pSDJywgMiwgXVxuICAgICAgWyAn4pSDxLfilIMnLCAzLCBdXG4gICAgICBbICfilIPJh+KUgycsIDMsIF1cbiAgICAgIFsgJ+KUg8uT4pSDJywgMywgXVxuICAgICAgWyAn4pSD1ZTZmOKUgycsIDMsIF1cbiAgICAgIFsgJ+KUg9uN4pSDJywgMywgXVxuICAgICAgWyAn4pSD37/ilIMnLCAzLCBdXG4gICAgICBbICfilIPgooDilIMnLCAzLCBdXG4gICAgICBbICfilIPgroPilIMnLCAzLCBdXG4gICAgICBbICfilIPgr73ilIMnLCAzLCBdXG4gICAgICBbICfilIPgtKXilIMnLCAzLCBdXG4gICAgICBbICfilIPgvYXilIMnLCAzLCBdXG4gICAgICBbICfilIPhhJ3ilIMnLCA0LCBdXG4gICAgICBbICfilIPhiprilIMnLCAzLCBdXG4gICAgICBbICfilIPhjafilIMnLCAzLCBdXG4gICAgICBbICfilIPhja3ilIMnLCAzLCBdXG4gICAgICBbICfilIPhmrLilIMnLCAzLCBdXG4gICAgICBbICfilIPhm4filIMnLCAzLCBdXG4gICAgICBbICfilIPhm5zilIMnLCAzLCBdXG4gICAgICBbICfilIPhm77ilIMnLCAzLCBdXG4gICAgICBbICfilIPhnZbilIMnLCAzLCBdXG4gICAgICBbICfilIPhna3ilIMnLCAzLCBdXG4gICAgICBbICfilIPim4TilIMnLCA0LCBdXG4gICAgICBbICfilIPhgqXilIMnLCAzLCBdXG4gICAgICBbICfilIPhj4nilIMnLCAzLCBdXG4gICAgICBbICfilIPhj5PilIMnLCAzLCBdXG4gICAgICBbICfilIPwn42H4KmH4pSDJywgNCwgXVxuICAgICAgWyAn4pSD8J+Nu+KUgycsIDQsIF1cbiAgICAgIFsgJ+KUg/Cfk4jilIMnLCA0LCBdXG4gICAgICBbICfilIPwn5W94pSDJywgMywgXVxuICAgICAgWyAn4pSD8J+HpvCfh7bilIMnLCA0LCBdXG4gICAgICBbICfilIPwn4em4pSDJywgMyBdXG4gICAgICBbICfilIPwn4e24pSDJywgMyBdXG4gICAgICBbICfilINcXHV7MUY2MzZ9XFx1ezIwMER9XFx1ezFGMzJCfVxcdXtGRTBGfeKUgycsIDMgXVxuICAgICAgWyAn4pSD8J+kpvCfj77igI3imYLvuI/ilIMnLCA0IF1cblxuICAgICAgIyBbICggcmVkICdhYmMnICksIDMsIF1cbiAgICAgIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBlcnJvcl9jb3VudHMgID0gWyAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCBdXG4gICAgICBmbXRfd2lkdGggICAgID0gKCB3LCBpZHgsIG1hdGNoZXIgKSAtPiByZXZlcnNlICggaWYgdyBpcyBtYXRjaGVyIHRoZW4gZ3JlZW4gZWxzZSBkbyAtPiBlcnJvcl9jb3VudHNbIGlkeCBdKys7IHJlZCApIGZcIiAje3d9Oj4zYzsgXCJcbiAgICAgIGZvciBbIHByb2JlLCBtYXRjaGVyLCBdIGluIHByb2Jlc19hbmRfbWF0Y2hlcnNcbiAgICAgICAgdzAgICAgICAgID0gc2lzb19zdHdpX2dldF93aWR0aCAgICAgcHJvYmU7IHcwciA9IGZtdF93aWR0aCB3MCwgMCwgbWF0Y2hlclxuICAgICAgICB3MSAgICAgICAgPSBzaXNvX2NjaDFfZ2V0X3dpZHRoICAgICBwcm9iZTsgdzFyID0gZm10X3dpZHRoIHcxLCAxLCBtYXRjaGVyXG4gICAgICAgIHcyICAgICAgICA9IHNpc29fY2NoMl9nZXRfd2lkdGggICAgIHByb2JlOyB3MnIgPSBmbXRfd2lkdGggdzIsIDIsIG1hdGNoZXJcbiAgICAgICAgdzMgICAgICAgID0gc2lzb19jY2gzX2dldF93aWR0aCAgICAgcHJvYmU7IHczciA9IGZtdF93aWR0aCB3MywgMywgbWF0Y2hlclxuICAgICAgICB3NCAgICAgICAgPSBzaXNvX2NjaDRfZ2V0X3dpZHRoICAgICBwcm9iZTsgdzRyID0gZm10X3dpZHRoIHc0LCA0LCBtYXRjaGVyXG4gICAgICAgIHc1ICAgICAgICA9IG15Y29fd2N3aV9nZXRfd2lkdGggICAgIHByb2JlOyB3NXIgPSBmbXRfd2lkdGggdzUsIDUsIG1hdGNoZXJcbiAgICAgICAgdzYgICAgICAgID0gbWFoZV93Y3N0X2dldF93aWR0aCAgICAgcHJvYmU7IHc2ciA9IGZtdF93aWR0aCB3NiwgNiwgbWF0Y2hlclxuICAgICAgICB3NyAgICAgICAgPSBnZXRfd2NfbWF4X2xpbmVfbGVuZ3RoICBwcm9iZTsgdzdyID0gZm10X3dpZHRoIHc3LCA3LCBtYXRjaGVyXG4gICAgICAgIHNhbWUgICAgICA9IHcwID0gdzEgPT0gdzIgPT0gdzMgPT0gdzQgPT0gdzUgPT0gdzYgPT0gdzcgPT0gbWF0Y2hlclxuICAgICAgICBzYW1lX3JwciAgPSBHVVkudHJtLnJldmVyc2UgR1VZLnRybS50cnV0aCBzYW1lXG4gICAgICAgIGVjaG8gICfOqV9fXzEnLCBmXCIje3NhbWVfcnByfTo+NWM7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICN7Z2F1Z2VfNjB9XCIgdW5sZXNzIHNhbWVcbiAgICAgICAgZWNobyAgJ86pX19fMicsIGZcIiN7c2FtZV9ycHJ9Oj41YzsgI3ttYXRjaGVyfTo+NC4wZjsgI3t3MHJ9ICN7dzFyfSAje3cycn0gI3t3M3J9ICN7dzRyfSAje3c1cn0gI3t3NnJ9ICN7dzdyfSAje3JwciBwcm9iZX1cIlxuICAgICAgZWNobyAgICAnzqlfX18zJywgZlwiI3snJ306PjVjOyAjeycnfTo+NGM7ICN7ZXJyb3JfY291bnRzWzBdfTo+NC4wZjsgICN7ZXJyb3JfY291bnRzWzFdfTo+NC4wZjsgICN7ZXJyb3JfY291bnRzWzJdfTo+NC4wZjsgICN7ZXJyb3JfY291bnRzWzNdfTo+NC4wZjsgI3tlcnJvcl9jb3VudHNbNF19Oj40LjBmOyAje2Vycm9yX2NvdW50c1s1XX06PjQuMGY7ICN7ZXJyb3JfY291bnRzWzZdfTo+NC4wZjsgI3tlcnJvcl9jb3VudHNbN119Oj40LjBmOyBcIlxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICB7IGhydGltZV9hc19iaWdpbnQsIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9iZW5jaG1hcmtpbmcoKVxuICAgICAgcGFydGljaXBhbnRzID1cbiAgICAgICAgc2lzb19zdHdpOiAgc2lzb19zdHdpX2dldF93aWR0aFxuICAgICAgICBzaXNvX2NjaDE6ICBzaXNvX2NjaDFfZ2V0X3dpZHRoXG4gICAgICAgIHNpc29fY2NoMjogIHNpc29fY2NoMl9nZXRfd2lkdGhcbiAgICAgICAgc2lzb19jY2gzOiAgc2lzb19jY2gzX2dldF93aWR0aFxuICAgICAgICBzaXNvX2NjaDQ6ICBzaXNvX2NjaDRfZ2V0X3dpZHRoXG4gICAgICAgIG15Y29fd2N3aTogIG15Y29fd2N3aV9nZXRfd2lkdGhcbiAgICAgICAgbWFoZV93Y3N0OiAgbWFoZV93Y3N0X2dldF93aWR0aFxuICAgICAgICBqc19zZWdtbnQ6ICBqc19zZWdtZW50aXplXG4gICAgICAgIGFycmF5X2ZybTogICggdGV4dCApIC0+IEFycmF5LmZyb20gdGV4dFxuICAgICAgICAjIHdjX21heF9sbDogIGdldF93Y19tYXhfbGluZV9sZW5ndGhcbiAgICAgIGZvciBuYW1lLCBmbiBvZiBwYXJ0aWNpcGFudHNcbiAgICAgICAgdDAgPSBocnRpbWVfYXNfYmlnaW50KClcbiAgICAgICAgZm9yIF8gaW4gWyAwIC4uIDVlMiBdXG4gICAgICAgICMgZm9yIF8gaW4gWyAwIC4uIDVlMyBdXG4gICAgICAgICAgZm9yIFsgcHJvYmUsIG1hdGNoZXIsIF0gaW4gcHJvYmVzX2FuZF9tYXRjaGVyc1xuICAgICAgICAgICAgdzEgPSBmbiBwcm9iZVxuICAgICAgICB0MSA9IGhydGltZV9hc19iaWdpbnQoKVxuICAgICAgICBlY2hvICfOqV9fXzQnLCBuYW1lLCBmXCIjeyggTnVtYmVyIHQxIC0gdDAgKSAvIDFfMDAwXzAwMH06PjIwLC45ZjtcIlxuICAgICAgaW5mbyAnzqlfX181JywgY2FjaGVfMS5zaXplLCAoIFsgY2FjaGVfMS5lbnRyaWVzKCkuLi4sIF1bIC4uIDEwIF0uZmxhdCBJbmZpbml0eSApLmpvaW4gJyAnXG4gICAgICBoZWxwICfOqV9fXzYnLCBjYWNoZV8yLnNpemUsICggWyBjYWNoZV8yLmVudHJpZXMoKS4uLiwgXVsgLi4gMTAgXS5mbGF0IEluZmluaXR5ICkuam9pbiAnICdcbiAgICAgIHVyZ2UgJ86pX19fNycsIGNhY2hlXzMuc2l6ZSwgKCBbIGNhY2hlXzMuZW50cmllcygpLi4uLCBdWyAuLiAxMCBdLmZsYXQgSW5maW5pdHkgKS5qb2luICcgJ1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRlYnVnICfOqV9fXzgnLCBqc19zZWdtZW50aXplICd4XHUwMDA34Z2t4YSd243groPhj5Pfv8S34Zuc4LSl4Y2n1ZTZmPCfjYfgqYfhj4nwn5OI4Y2ty5Pwn5W94KKA4K+94YKl4ZuH4Z2W8J+Nu8mH4Zu+4puE4Yqa4L2F4ZqyeCdcbiAgICBkZWJ1ZyAnzqlfX185JywganNfc2VnbWVudGl6ZSAnePCfh6bwn4e2eCdcbiAgICBkZWJ1ZyAnzqlfXzEwJywgQXJyYXkuZnJvbSAnePCfh6bwn4e2eCdcbiAgICAjIGRlYnVnICfOqV9fMTEnLCBqc19zZWdtZW50aXplICd44LaXx5ngqrDwn5OOXsyK4L6R3bHgrIDIiOGHn+C0tfCfkoHgq63HvFx1MDAwNOGbgNaJ4KqIzJLwn5SR4KeGx5bYos6s2rDgp7bhlL7gvrPRi+CsrOCuo3gnXG4gICAgIyBkZWJ1ZyAnzqlfXzEyJywganNfc2VnbWVudGl6ZSAneNCQ4KaB0JDQkNGj0JDcmNGj4KWQyLLQkNyY4KaBzIPRo8iy0aPMg9Gj4KaB3pDdp+ClkMyD4KWQeCdcbiAgICAjIGRlYnVnICfOqV9fMTMnLCBqc19zZWdtZW50aXplICd44KaB0JDekMyD3JjgpZDQkNGjyLLQkN2n4KWQ3JjRo8iy4KaB3JjgpZDcmOCmgeClkN2n3afekOClkHgnXG4gICAgIyBkZWJ1ZyAnzqlfXzE0JywgQXJyYXkuZnJvbSAnyLLgpoEnXG4gICAgIyBkZWJ1ZyAnzqlfXzE1JywgQXJyYXkuZnJvbSAn0JDgpoEnXG4gICAgIyBkZWJ1ZyAnzqlfXzE2JywgQXJyYXkuZnJvbSAn0aPgpoEnXG4gICAgIyBkZWJ1ZyAnzqlfXzE3JywgKCAoIEFycmF5LmZyb20gJ+GUvuC+sycgKVsgMSBdLmNvZGVQb2ludEF0IDAgKS50b1N0cmluZyAxNlxuICAgIHJldHVybiBudWxsXG5cblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gICMgZGVtb19pbmZpbml0ZV9wcm94eSgpXG4gICMgZGVtb19jb2xvcmZ1bF9wcm94eSgpXG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgYmVuY2htYXJrcywgfVxuICBpbmZvIHJldmVyc2UgcmVkIFwiYWxzbyBjb21wYXJlIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXdzb25odWFuZzAvV2N3aWR0aC1PMVwiXG4iXX0=
