
###


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

###

'use strict'

#===========================================================================================================
GUY                       = require 'guy'
{ alert
  debug
  help
  info
  plain
  praise
  urge
  warn
  whisper }               = GUY.trm.get_loggers 'benchmark-unicode-character-width.coffee'
{ rpr
  inspect
  echo
  white
  green
  blue
  gold
  grey
  red
  bold
  reverse
  log     }               = GUY.trm
{ f }                     = require '../../../apps/effstring'
# write                     = ( p ) -> process.stdout.write p
{ nfa }                   = require '../../../apps/normalize-function-arguments'
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG
SFMODULES                 = require '../../../apps/bricabrac-single-file-modules'




###

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

###

#===========================================================================================================
@benchmarks = benchmarks =

  #---------------------------------------------------------------------------------------------------------
  fn: ->
    { ansi_colors_and_effects: C, } = SFMODULES.require_ansi_colors_and_effects()
    { build_chr_gauge             } = SFMODULES.require_chr_gauge()
    { internals: { js_segmentize, },
      Ansi_chunker,               } = SFMODULES.require_ansi_chunker()
    #.......................................................................................................
    { default: siso_stwi_get_width,  }  = require 'string-width'  ### sindresorhus/string-width ###
    { default: myco_wcwi_get_width,  }  = require 'wcwidth.js'    ### mycoboco/wcwidth.js ###
    _mahe_wcst_get_width                = require 'wcstring'      ### martinheidegger/wcstring ###
    mahe_wcst_get_width                 = ( text ) -> ( _mahe_wcst_get_width text ).size()
    { get_wc_max_line_length, }         = SFMODULES.unstable.require_command_line_tools()
    #.......................................................................................................
    cache_1 = new Map()
    siso_cch1_get_width = ( text ) ->
      return R if ( R = cache_1.get text )?
      cache_1.set text, R = siso_stwi_get_width text
      return R
    #.......................................................................................................
    cache_2 = new Map()
    siso_cch2_get_width = ( text ) ->
      R = 0
      for segment in segments = js_segmentize text
        unless ( width = cache_2.get segment )?
          cache_2.set segment, width = siso_stwi_get_width segment
        R += width
      return R
    #.......................................................................................................
    cache_3 = new Map()
    siso_cch3_get_width = ( text ) ->
      R = 0
      for segment in segments = Array.from text
        unless ( width = cache_3.get segment )?
          cache_3.set segment, width = siso_stwi_get_width segment
        R += width
      return R
    #.......................................................................................................
    cache_4 = new Map()
    siso_cch4_get_width = ( text ) ->
      R = 0
      for segment in segments = Array.from text
        if /^\p{Mn}$/v.test segment
          width = 0
        else unless ( width = cache_4.get segment )?
          cache_4.set segment, width = siso_stwi_get_width segment
        R += width
      return R
    #.......................................................................................................
    gauge_60 = build_chr_gauge { length: 60, }
    #.......................................................................................................
    probes_and_matchers = [
      [ 'xxx', 3, ]
      [ 'x🙋x', 4, ]
      [ 'x🙋🏽x', 6, ]
      [ 'xa︠b︡x', 4, ]
      [ 'xa︠b︡x', 4, ]
      [ 'b͝a', 2, ]
      [ 'a͠o', 2, ]
      [ 'x쒇x', 4, ]
      [ 'x별x', 4, ]
      [ 'xㅂ ㅕ ㄹx', 10, ]
      [ 'xㅂㅕㄹx', 8, ]
      [ 'xﾲￊﾩx', 5, ]
      [ 'x별Lx', 5, ]
      [ 'xâx', 3, ]
      [ 'x𓃵x', 3, ]
      [ 'x﷽x', 3, ]
      [ 'x͸xx', 4, ]
      [ 'xאבגx', 5, ]
      [ 'x۩۝۞x', 4, ]
      [ 'xདྦོང་x', 5, ]
      [ 'x𰂀𰂁𰂂𰂃𰂄x', 12, ]
      [ 'x𐋡𐋢𐋣𐋤𐋥𐋦😢😣😤😴😷🙤🙥🙲🙳🙴🙼🙽🙾🙿🚇🝖🞧𝐀𝐁𝐂𝐃⟀⟁⟂⟃x', 39, ]
      [ 'x⿼⿽⿾⿿⿻x', 8, ]
      [ 'x⿰⿱⿲⿳⿴⿵⿶⿷⿸⿹⿺⿻x', 26, ]
      [ 'x᝭ᄝۍஃᏓ߿ķᛜഥ፧Ք٘🍇ੇᏉ📈፭˓🕽ࢀ௽Ⴅᛇ᝖🍻ɇ᛾⛄ኚཅᚲx', 35, ]
      [ 'x඗Ǚર📎^̊ྑݱ଀Ȉᇟവ💁૭Ǽᛀ։ઈ̒🔑৆ǖآάڰ৶ᔾླыବணx', 26, ]
      [ 'xАঁААѣАܘѣॐȲАܘঁ̃ѣȲѣ̃ѣঁސݧॐ̃ॐx', 21, ]
      [ 'xঁАސ̃ܘॐАѣȲАݧॐܘѣȲঁܘॐܘঁॐݧݧސॐx', 23, ]
      [ 'x0Ã豲Û򸮍[頔쯞&ٸ𽃸U套9笗a䘫}ҭⴲɔI幙6󏴃エEf򒟀΁?牃x', 44, ]
      [ 'xύ΍򋁥%əʘޜ𢍬´ِ򣑥^Γ𰛥E}aӇ{Մ$G贲]𿒕Y}򷟇򢏙x', 37, ]
      [ 'x9󮊘ۆ󅉨򌷺󬥘کԶiޘ5罌塕Ĵ3ѷ夎uȸ򼳸󭃭񳌴Q~CK䱮᣼W>竦x', 39, ]
      [ 'x할S􂿚󙏰r򇜅h󈫫񅦵ۿ㙛󞝶NΕ󮀞񰑸򟞮𰊦턝䑭ш򅈺ϛɠ`°jk䂾䢯􅌱곢x', 42, ]
      [ 'x񉃓򍦎P𼻞ӏ9쯬ܼӬ撗򞅛߰梡𮦦惺o􎌕觾ץߏ㧤ၲԼ哋𛧦켈ۮ$픕祿ꉀx', 44, ]
      [ 'x😀🐱🌟🚀🍕x', 12, ]
      [ 'x𓀀𓁐𓃰𓆣𓂀x', 7, ]
      [ 'x𝐀𝐁𝐂𝐠𝐡𝐢𝑀𝑁𝑂𝑐𝑑𝑒𝒰𝒱𝒲𝓀𝓁𝓂𝔐𝔑𝔒𝔰𝔱𝔲𝕀𝕁𝕂x', 29, ]
      [ 'xx', 2, ]
      [ """Fraktur (German: [fʁakˈtuːɐ̯] ) is a calligraphic hand of the Latin alphabet and any of several blackletter typefaces derived from this hand. It is designed such that the beginnings and ends of the individual strokes that make up each letter will be clearly visible, and often emphasized; in this way it is often contrasted with the curves of the Antiqua (common) typefaces where the letters are designed to flow and strokes connect together in a continuous fashion. The word "Fraktur" derives from Latin frāctūra ("a break"), built from frāctus, passive participle of frangere ("to break"), which is also the root for the English word "fracture". In non-professional contexts, the term "Fraktur" is sometimes misused to refer to all blackletter typefaces – while Fraktur typefaces do fall under that category, not all blackletter typefaces exhibit the Fraktur characteristics described above.""", 892, ]
      [ """Fraktur was often characterized as "the German typeface", as it remained popular in Germany and much of Eastern Europe far longer than elsewhere. In Germany, utilizing more modern typefaces would prove controversial until 1941, when the Nazi government rendered any transition involuntary by banning the use of Fraktur typefaces.""", 329, ]
      [ '\x04', 0, ]
      [ '^̊ྑ', 1, ]
      [ 'x', 1, ]
      [ 'x' , 1, ]
      [ 'xঁ', 1, ]
      [ 'ǖ', 1, ]
      [ 'Ǚ', 1, ]
      [ 'Ǽ', 1, ]
      [ 'Ȉ', 1, ]
      [ 'Ȳ', 1, ]
      [ 'Ȳঁ', 1, ]
      [ 'ά', 1, ]
      [ 'А', 1, ]
      [ 'Аঁ', 1, ]
      [ 'ы', 1, ]
      [ 'ѣ', 1, ]
      [ 'ѣ̃', 1, ]
      [ 'ѣঁ', 1, ]
      [ '։', 1, ]
      [ 'آ', 1, ]
      [ 'ڰ', 1, ]
      [ 'ܘ', 1, ]
      [ 'ܘঁ', 1, ]
      [ 'ܘঁ̃', 1, ]
      [ 'ݧ', 1, ]
      [ 'ݱ', 1, ]
      [ 'ސ', 1, ]
      [ 'ސ̃', 1, ]
      [ 'ॐ', 1, ]
      [ 'ॐ̃', 1, ]
      [ '৆', 1, ]
      [ '৶', 1, ]
      [ 'ઈ̒', 1, ]
      [ 'ર', 1, ]
      [ '૭', 1, ]
      [ '଀', 1, ]
      [ 'ବ', 1, ]
      [ 'ண', 1, ]
      [ 'വ', 1, ]
      [ '඗', 1, ]
      [ '┃ᇟ┃', 2, ]
      [ '┃타ᇿ┃', 4, ]
      [ '┃객┃', 4, ]
      [ '┃퓛┃', 4, ]
      [ 'ᔾླ', 1, ]
      [ 'ᛀ', 1, ]
      [ '💁', 2, ]
      [ '📎', 2, ]
      [ '🔑', 2, ]
      [ 'ঁ', 0 ]
      [ 'ᔾ', 1 ]
      [ 'ླ', 0 ]
      [ '┃\x07┃', 2, ]
      [ '┃ķ┃', 3, ]
      [ '┃ɇ┃', 3, ]
      [ '┃˓┃', 3, ]
      [ '┃Ք٘┃', 3, ]
      [ '┃ۍ┃', 3, ]
      [ '┃߿┃', 3, ]
      [ '┃ࢀ┃', 3, ]
      [ '┃ஃ┃', 3, ]
      [ '┃௽┃', 3, ]
      [ '┃ഥ┃', 3, ]
      [ '┃ཅ┃', 3, ]
      [ '┃ᄝ┃', 4, ]
      [ '┃ኚ┃', 3, ]
      [ '┃፧┃', 3, ]
      [ '┃፭┃', 3, ]
      [ '┃ᚲ┃', 3, ]
      [ '┃ᛇ┃', 3, ]
      [ '┃ᛜ┃', 3, ]
      [ '┃᛾┃', 3, ]
      [ '┃᝖┃', 3, ]
      [ '┃᝭┃', 3, ]
      [ '┃⛄┃', 4, ]
      [ '┃Ⴅ┃', 3, ]
      [ '┃Ꮙ┃', 3, ]
      [ '┃Ꮣ┃', 3, ]
      [ '┃🍇ੇ┃', 4, ]
      [ '┃🍻┃', 4, ]
      [ '┃📈┃', 4, ]
      [ '┃🕽┃', 3, ]
      [ '┃🇦🇶┃', 4, ]
      [ '┃🇦┃', 3 ]
      [ '┃🇶┃', 3 ]
      [ '┃\u{1F636}\u{200D}\u{1F32B}\u{FE0F}┃', 3 ]
      [ '┃🤦🏾‍♂️┃', 4 ]

      # [ ( red 'abc' ), 3, ]
      ]
    #.......................................................................................................
    do =>
      error_counts  = [ 0, 0, 0, 0, 0, 0, 0, 0, ]
      fmt_width     = ( w, idx, matcher ) -> reverse ( if w is matcher then green else do -> error_counts[ idx ]++; red ) f" #{w}:>3c; "
      for [ probe, matcher, ] in probes_and_matchers
        w0        = siso_stwi_get_width     probe; w0r = fmt_width w0, 0, matcher
        w1        = siso_cch1_get_width     probe; w1r = fmt_width w1, 1, matcher
        w2        = siso_cch2_get_width     probe; w2r = fmt_width w2, 2, matcher
        w3        = siso_cch3_get_width     probe; w3r = fmt_width w3, 3, matcher
        w4        = siso_cch4_get_width     probe; w4r = fmt_width w4, 4, matcher
        w5        = myco_wcwi_get_width     probe; w5r = fmt_width w5, 5, matcher
        w6        = mahe_wcst_get_width     probe; w6r = fmt_width w6, 6, matcher
        w7        = get_wc_max_line_length  probe; w7r = fmt_width w7, 7, matcher
        same      = w0 = w1 == w2 == w3 == w4 == w5 == w6 == w7 == matcher
        same_rpr  = GUY.trm.reverse GUY.trm.truth same
        echo  'Ω___1', f"#{same_rpr}:>5c;                                                       #{gauge_60}" unless same
        echo  'Ω___2', f"#{same_rpr}:>5c; #{matcher}:>4.0f; #{w0r} #{w1r} #{w2r} #{w3r} #{w4r} #{w5r} #{w6r} #{w7r} #{rpr probe}"
      echo    'Ω___3', f"#{''}:>5c; #{''}:>4c; #{error_counts[0]}:>4.0f;  #{error_counts[1]}:>4.0f;  #{error_counts[2]}:>4.0f;  #{error_counts[3]}:>4.0f; #{error_counts[4]}:>4.0f; #{error_counts[5]}:>4.0f; #{error_counts[6]}:>4.0f; #{error_counts[7]}:>4.0f; "
      return null
    #.......................................................................................................
    do =>
      { hrtime_as_bigint, } = SFMODULES.unstable.require_benchmarking()
      participants =
        siso_stwi:  siso_stwi_get_width
        siso_cch1:  siso_cch1_get_width
        siso_cch2:  siso_cch2_get_width
        siso_cch3:  siso_cch3_get_width
        siso_cch4:  siso_cch4_get_width
        myco_wcwi:  myco_wcwi_get_width
        mahe_wcst:  mahe_wcst_get_width
        js_segmnt:  js_segmentize
        array_frm:  ( text ) -> Array.from text
        # wc_max_ll:  get_wc_max_line_length
      for name, fn of participants
        t0 = hrtime_as_bigint()
        for _ in [ 0 .. 5e2 ]
        # for _ in [ 0 .. 5e3 ]
          for [ probe, matcher, ] in probes_and_matchers
            w1 = fn probe
        t1 = hrtime_as_bigint()
        echo 'Ω___4', name, f"#{( Number t1 - t0 ) / 1_000_000}:>20,.9f;"
      info 'Ω___5', cache_1.size, ( [ cache_1.entries()..., ][ .. 10 ].flat Infinity ).join ' '
      help 'Ω___6', cache_2.size, ( [ cache_2.entries()..., ][ .. 10 ].flat Infinity ).join ' '
      urge 'Ω___7', cache_3.size, ( [ cache_3.entries()..., ][ .. 10 ].flat Infinity ).join ' '
      return null
    #.......................................................................................................
    debug 'Ω___8', js_segmentize 'x᝭ᄝۍஃᏓ߿ķᛜഥ፧Ք٘🍇ੇᏉ📈፭˓🕽ࢀ௽Ⴅᛇ᝖🍻ɇ᛾⛄ኚཅᚲx'
    debug 'Ω___9', js_segmentize 'x🇦🇶x'
    debug 'Ω__10', Array.from 'x🇦🇶x'
    # debug 'Ω__11', js_segmentize 'x඗Ǚર📎^̊ྑݱ଀Ȉᇟവ💁૭Ǽᛀ։ઈ̒🔑৆ǖآάڰ৶ᔾླыବணx'
    # debug 'Ω__12', js_segmentize 'xАঁААѣАܘѣॐȲАܘঁ̃ѣȲѣ̃ѣঁސݧॐ̃ॐx'
    # debug 'Ω__13', js_segmentize 'xঁАސ̃ܘॐАѣȲАݧॐܘѣȲঁܘॐܘঁॐݧݧސॐx'
    # debug 'Ω__14', Array.from 'Ȳঁ'
    # debug 'Ω__15', Array.from 'Аঁ'
    # debug 'Ω__16', Array.from 'ѣঁ'
    # debug 'Ω__17', ( ( Array.from 'ᔾླ' )[ 1 ].codePointAt 0 ).toString 16
    return null




#===========================================================================================================
if module is require.main then await do =>
  # demo_infinite_proxy()
  # demo_colorful_proxy()
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test { benchmarks, }
