
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
  whisper }               = GUY.trm.get_loggers 'bricabrac-single-file-modules'
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





#===========================================================================================================
@tests = tests =

  #---------------------------------------------------------------------------------------------------------
  is_tagfun_call: ->
    { is_tagfun_call,                  } = SFMODULES.require_tagfun_tools()
    fn = ( P... ) -> is_tagfun_call P...
    @eq ( Ωbbsfm___1 = -> fn()             ), false
    @eq ( Ωbbsfm___2 = -> fn [ 1, 2, 3, ]  ), false
    @eq ( Ωbbsfm___3 = -> fn"[ 1, 2, 3, ]" ), true
    return null

  #---------------------------------------------------------------------------------------------------------
  escape_html_text: ->
    { escape_html_text, } = SFMODULES.require_escape_html_text()
    @eq ( Ωbbsfm___4 = -> escape_html_text ''                    ), ''
    @eq ( Ωbbsfm___5 = -> escape_html_text 'abc'                 ), 'abc'
    @eq ( Ωbbsfm___6 = -> escape_html_text 'abc<tag>d&e&f</tag>' ), 'abc&lt;tag&gt;d&amp;e&amp;f&lt;/tag&gt;'
    return null

  #---------------------------------------------------------------------------------------------------------
  walk_tagfun_call_parts: ->
    # { Html,                     } = require_html_class()
    # { escape_html_text,         } = require_escape_html_text()
    # { stackable_tagfun,         } = require_stackable_tagfun()
    { walk_parts,
      walk_nonempty_parts,
      walk_raw_parts,
      walk_raw_nonempty_parts,  } = SFMODULES.require_tagfun_tools()
    #-------------------------------------------------------------------------------------------------------
    @eq ( Ωbbsfm___7 = -> [ ( walk_parts""                  )..., ] ), [ { chunk: '', isa: 'chunk', }, ]
    @eq ( Ωbbsfm___8 = -> [ ( walk_parts ""                 )..., ] ), [ { chunk: '', isa: 'chunk', }, ]
    @eq ( Ωbbsfm___9 = -> [ ( walk_nonempty_parts""         )..., ] ), []
    @eq ( Ωbbsfm__10 = -> [ ( walk_nonempty_parts ''        )..., ] ), []
    @eq ( Ωbbsfm__11 = -> [ ( walk_parts"a"                 )..., ] ), [ { chunk: 'a', isa: 'chunk', }, ]
    @eq ( Ωbbsfm__12 = -> [ ( walk_parts"\na"               )..., ] ), [ { chunk: '\na', isa: 'chunk', }, ]
    @eq ( Ωbbsfm__13 = -> [ ( walk_raw_parts"\na"           )..., ] ), [ { chunk: '\\na', isa: 'chunk', }, ]
    @eq ( Ωbbsfm__14 = -> [ ( walk_parts"#{1}"              )..., ] ), [ { chunk: '', isa: 'chunk', }, { value: 1, isa: 'value', }, { chunk: '', isa: 'chunk', }, ]
    @eq ( Ωbbsfm__15 = -> [ ( walk_nonempty_parts"#{1}"     )..., ] ), [ { value: 1, isa: 'value', }, ]
    @eq ( Ωbbsfm__16 = -> [ ( walk_parts"a#{1}"             )..., ] ), [ { chunk: 'a', isa: 'chunk', }, { value: 1, isa: 'value', }, { chunk: '', isa: 'chunk', }, ]
    @eq ( Ωbbsfm__17 = -> [ ( walk_parts"#{1}#{2}"          )..., ] ), [ { chunk: '', isa: 'chunk', }, { value: 1, isa: 'value', }, { chunk: '', isa: 'chunk', }, { value: 2, isa: 'value', }, { chunk: '', isa: 'chunk', } ]
    @eq ( Ωbbsfm__18 = -> [ ( walk_nonempty_parts"#{1}#{2}" )..., ] ), [ { value: 1, isa: 'value', }, { value: 2, isa: 'value', }, ]
    @eq ( Ωbbsfm__19 = -> [ ( walk_parts"a#{1}z"            )..., ] ), [ { chunk: 'a', isa: 'chunk', }, { value: 1, isa: 'value', }, { chunk: 'z', isa: 'chunk', }, ]
    @eq ( Ωbbsfm__20 = -> [ ( walk_parts"a#{1}z#{2}"        )..., ] ), [ { chunk: 'a', isa: 'chunk', }, { value: 1, isa: 'value', }, { chunk: 'z', isa: 'chunk', }, { value: 2, isa: 'value', }, { chunk: '', isa: 'chunk', }, ]
    @eq ( Ωbbsfm__21 = -> [ ( walk_parts "a#{1}z#{2}"       )..., ] ), [ { chunk: 'a1z2', isa: 'chunk', }, ]
    @eq ( Ωbbsfm__22 = -> [ ( walk_parts 12                 )..., ] ), [ { chunk: '', isa: 'chunk', }, { value: 12, isa: 'value', }, { chunk: '', isa: 'chunk', }, ]
    @eq ( Ωbbsfm__23 = -> [ ( walk_nonempty_parts 12        )..., ] ), [ { value: 12, isa: 'value', }, ]
    #.........................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  get_next_free_filename: ->
    { get_next_free_filename,
      get_next_filename,
      exists,
      cache_filename_re,      } = SFMODULES.unstable.require_next_free_filename()
    PATH                        = require 'node:path'
    #.......................................................................................................
    @throws ( Ωbbsfm__24 = -> get_next_free_filename null        ), /expected a text/
    @throws ( Ωbbsfm__25 = -> get_next_free_filename undefined   ), /expected a text/
    @throws ( Ωbbsfm__26 = -> get_next_free_filename true        ), /expected a text/
    @throws ( Ωbbsfm__27 = -> get_next_free_filename ''          ), /expected a nonempty text/
    #.......................................................................................................
    probes_and_matchers = [
      [ 'a',                                  [ false, '~.a.0001.bricabrac-cache',         '~.a.0001.bricabrac-cache', ], ]
      [ 'README.md',                          [ true,  '~.README.md.0001.bricabrac-cache', '~.README.md.0004.bricabrac-cache', ], ]
      [ '~.README.md.0001.bricabrac-cache',   [ true,  '~.README.md.0002.bricabrac-cache', '~.README.md.0004.bricabrac-cache', ], ]
      [ '~.README.md.0002.bricabrac-cache',   [ true,  '~.README.md.0003.bricabrac-cache', '~.README.md.0004.bricabrac-cache', ], ]
      [ '~.README.md.0003.bricabrac-cache',   [ true,  '~.README.md.0004.bricabrac-cache', '~.README.md.0004.bricabrac-cache', ], ]
      [ '~.README.md.0004.bricabrac-cache',   [ false, '~.README.md.0005.bricabrac-cache', '~.README.md.0005.bricabrac-cache', ], ]
      ]
    path_prefix = PATH.resolve PATH.join __dirname, '../../../assets/bricabrac/find-free-filename'
    #.......................................................................................................
    do =>
      for [ path, [ matcher_1, matcher_2, matcher_3, ], ] in probes_and_matchers
        abs_path      = PATH.join path_prefix, path
        abs_matcher_2 = PATH.join path_prefix, matcher_2
        abs_matcher_3 = PATH.join path_prefix, matcher_3
        @eq ( Ωbbsfm__28 = -> exists abs_path                    ), matcher_1
        @eq ( Ωbbsfm__29 = -> get_next_filename       abs_path   ), abs_matcher_2
        @eq ( Ωbbsfm__30 = -> get_next_free_filename  abs_path   ), abs_matcher_3
      return null
    #.......................................................................................................
    do =>
      for [ path, [ matcher_1, matcher_2, matcher_3, ], ] in probes_and_matchers
        rel_path      = PATH.relative process.cwd(), PATH.join path_prefix, path
        rel_matcher_2 = PATH.relative process.cwd(), PATH.join path_prefix, matcher_2
        rel_matcher_3 = PATH.relative process.cwd(), PATH.join path_prefix, matcher_3
        @eq ( Ωbbsfm__31 = -> exists rel_path                    ), matcher_1
        @eq ( Ωbbsfm__32 = -> get_next_filename       rel_path   ), rel_matcher_2
        @eq ( Ωbbsfm__33 = -> get_next_free_filename  rel_path   ), rel_matcher_3
      return null
    #.......................................................................................................
    do =>
      current_cwd = PATH.resolve process.cwd()
      process.chdir path_prefix
      try
        for [ path, [ matcher_1, matcher_2, matcher_3, ], ] in probes_and_matchers
          @eq ( Ωbbsfm__34 = -> exists path                    ), matcher_1
          @eq ( Ωbbsfm__35 = -> get_next_filename       path   ), matcher_2
          @eq ( Ωbbsfm__36 = -> get_next_free_filename  path   ), matcher_3
      finally
        process.chdir current_cwd
      return null
    #.......................................................................................................
    return null

  # #---------------------------------------------------------------------------------------------------------
  # get_next_free_filename_swap_suffix: ->
  #   { get_next_free_filename,
  #     swap_suffix,            } = SFMODULES.require_next_free_filename()
  #   #.......................................................................................................
  #   debug 'Ωbbsfm__52', intermediate_cache_path = get_next_free_filename '/path/to/reference.txt'
  #   debug 'Ωbbsfm__52', finalized_cache_path    = swap_suffix '.finalized'
  #   @eq     ( Ωbbsfm__37 = -> intermediate_cache_path           ), '/path/to/~.reference.txt.0001.finalized'
  #   rather use '/path/to/~.reference.txt.0001.bricabrac-cache.finalized'
  #   #.......................................................................................................
  #   return null

  #---------------------------------------------------------------------------------------------------------
  ANSI: ->
    { ANSI, } = SFMODULES.require_ansi()
    @eq     ( Ωbbsfm__37 = -> ANSI.fg_from_hex '#a0a1a2'           ), '\x1B[38:2::160:161:162m'
    @eq     ( Ωbbsfm__38 = -> ANSI.bg_from_hex '#a0a1a2'           ), '\x1B[48:2::160:161:162m'
    @eq     ( Ωbbsfm__39 = -> ANSI.fg_from_dec [ 160, 161, 162 ]   ), '\x1B[38:2::160:161:162m'
    @eq     ( Ωbbsfm__40 = -> ANSI.bg_from_dec [ 160, 161, 162 ]   ), '\x1B[48:2::160:161:162m'
    @eq     ( Ωbbsfm__41 = -> ANSI.dec_from_hex '#a0a1a2'          ), [ 160, 161, 162 ]
    @throws ( Ωbbsfm__42 = -> ANSI.dec_from_hex '#xxxxxx'          ), /not a proper hexadecimal RGB code: '#xxxxxx'/
    @throws ( Ωbbsfm__43 = -> ANSI.dec_from_hex '#aaaaa'           ), /not a proper hexadecimal RGB code: '#aaaaa'/
    @throws ( Ωbbsfm__44 = -> ANSI.dec_from_hex '#aaaaabb'         ), /not a proper hexadecimal RGB code: '#aaaaabb'/
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  require_ansi_colors_and_effects: ->
    { ansi_colors_and_effects: C, } = SFMODULES.require_ansi_colors_and_effects()
    @eq     ( Ωbbsfm__45 = -> C.red              ), '\x1B[38:2::255:0:16m'
    @eq     ( Ωbbsfm__46 = -> C.bg_red           ), '\x1B[48:2::255:0:16m'
    @eq     ( Ωbbsfm__47 = -> C.overline1        ), '\x1b[53m'
    @eq     ( Ωbbsfm__48 = -> C.overline0        ), '\x1b[55m'
    @eq     ( Ωbbsfm__49 = -> C.default          ), '\x1b[39m'
    @eq     ( Ωbbsfm__50 = -> C.bg_default       ), '\x1b[49m'
    @eq     ( Ωbbsfm__51 = -> C.reset            ), '\x1b[0m'
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  require_ansi_chunker: ->
    { ansi_colors_and_effects: C, } = SFMODULES.require_ansi_colors_and_effects()
    { Ansi_chunker,               } = SFMODULES.require_ansi_chunker()
    do =>
      echo '—————————————————————————————————————————————'
      text  = "ABC#{ C.black + C.bg_red + C.bold + 'DEF' + C.bold0 + C.default + C.bg_default }XYZ"
      ac    = new Ansi_chunker()
      urge 'Ωbbsfm__52',                ac.chunkify text
      # info 'Ωbbsfm__53', d for d from ( ac.chunkify text ).chunks
      info 'Ωbbsfm__54', d for d from ac
      info 'Ωbbsfm__55', ac.width
      info 'Ωbbsfm__56', ac.length
      info 'Ωbbsfm__57', ac.has_ansi
      info 'Ωbbsfm__58', ac.text
    do =>
      echo '—————————————————————————————————————————————'
      text  = 'ABCDEFXYZ'
      ac    = new Ansi_chunker()
      urge 'Ωbbsfm__59',                ac.chunkify text
      # info 'Ωbbsfm__60', d for d from ( ac.chunkify text ).chunks
      info 'Ωbbsfm__61', d for d from ac
      info 'Ωbbsfm__62', ac.width
      info 'Ωbbsfm__63', ac.length
      info 'Ωbbsfm__64', ac.has_ansi
      info 'Ωbbsfm__65', ac.text
    do =>
      echo '—————————————————————————————————————————————'
      text  = "#{ C.black + C.bg_red + C.bold + C.bold0 + C.default + C.bg_default }"
      ac    = new Ansi_chunker()
      urge 'Ωbbsfm__66',                ac.chunkify text
      # info 'Ωbbsfm__67', d for d from ( ac.chunkify text ).chunks
      info 'Ωbbsfm__68', d for d from ac
      info 'Ωbbsfm__69', ac.width
      info 'Ωbbsfm__70', ac.length
      info 'Ωbbsfm__71', ac.has_ansi
      info 'Ωbbsfm__72', ac.text
    do =>
      echo '—————————————————————————————————————————————'
      text  = ''
      ac    = new Ansi_chunker()
      urge 'Ωbbsfm__73',                ac.chunkify text
      # info 'Ωbbsfm__74', d for d from ( ac.chunkify text ).chunks
      info 'Ωbbsfm__75', d for d from ac
      info 'Ωbbsfm__76', ac.width
      info 'Ωbbsfm__77', ac.length
      info 'Ωbbsfm__78', ac.has_ansi
      info 'Ωbbsfm__79', ac.text
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  require_ansi_chunker: ->
    { ansi_colors_and_effects: C, } = SFMODULES.require_ansi_colors_and_effects()
    { Ansi_chunker,               } = SFMODULES.require_ansi_chunker()
    #.......................................................................................................
    do =>
      debug 'Ωbbsfm__52', require 'wcwidth.js'
      debug 'Ωbbsfm__52', require 'wcstring'
      ###
      Excluded:

        * [**`wcsize`**](https://github.com/martinheidegger/wcsize): not very well usable in modern
          environments as `wcsize`, according to the docs, "differ[...]s from both [`wcwidth` and
          `visualwidth-js`] by only returning the width of one character (as integer!)", meaning that it
          cannot, by construction, handle composed Latin accented letters, or let alone multi-codepoint
          emoji. It also struggles with Unicode surrogate handling, at least in trying to make sense of them
          in the `README.md`.

        * [**`visualwidth-js`**](https://github.com/tokuhirom/visualwidth-js): too old, started ca. 2011,
          last commit from ca. 2015

      ###
      return null
    #.......................................................................................................
    return null



#===========================================================================================================
if module is require.main then await do =>
  # demo_infinite_proxy()
  # demo_colorful_proxy()
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test { tests, }
