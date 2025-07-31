
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
    @eq ( Ωidsp___1 = -> fn()             ), false
    @eq ( Ωidsp___2 = -> fn [ 1, 2, 3, ]  ), false
    @eq ( Ωidsp___3 = -> fn"[ 1, 2, 3, ]" ), true
    return null

  #---------------------------------------------------------------------------------------------------------
  escape_html_text: ->
    { escape_html_text, } = SFMODULES.require_escape_html_text()
    @eq ( Ωidsp___4 = -> escape_html_text ''                    ), ''
    @eq ( Ωidsp___5 = -> escape_html_text 'abc'                 ), 'abc'
    @eq ( Ωidsp___6 = -> escape_html_text 'abc<tag>d&e&f</tag>' ), 'abc&lt;tag&gt;d&amp;e&amp;f&lt;/tag&gt;'
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
    @eq ( Ωt___7 = -> [ ( walk_parts""                  )..., ] ), [ { chunk: '', isa: 'chunk', }, ]
    @eq ( Ωt___8 = -> [ ( walk_parts ""                 )..., ] ), [ { chunk: '', isa: 'chunk', }, ]
    @eq ( Ωt___9 = -> [ ( walk_nonempty_parts""         )..., ] ), []
    @eq ( Ωt__10 = -> [ ( walk_nonempty_parts ''        )..., ] ), []
    @eq ( Ωt__11 = -> [ ( walk_parts"a"                 )..., ] ), [ { chunk: 'a', isa: 'chunk', }, ]
    @eq ( Ωt__12 = -> [ ( walk_parts"\na"               )..., ] ), [ { chunk: '\na', isa: 'chunk', }, ]
    @eq ( Ωt__13 = -> [ ( walk_raw_parts"\na"           )..., ] ), [ { chunk: '\\na', isa: 'chunk', }, ]
    @eq ( Ωt__14 = -> [ ( walk_parts"#{1}"              )..., ] ), [ { chunk: '', isa: 'chunk', }, { value: 1, isa: 'value', }, { chunk: '', isa: 'chunk', }, ]
    @eq ( Ωt__15 = -> [ ( walk_nonempty_parts"#{1}"     )..., ] ), [ { value: 1, isa: 'value', }, ]
    @eq ( Ωt__16 = -> [ ( walk_parts"a#{1}"             )..., ] ), [ { chunk: 'a', isa: 'chunk', }, { value: 1, isa: 'value', }, { chunk: '', isa: 'chunk', }, ]
    @eq ( Ωt__17 = -> [ ( walk_parts"#{1}#{2}"          )..., ] ), [ { chunk: '', isa: 'chunk', }, { value: 1, isa: 'value', }, { chunk: '', isa: 'chunk', }, { value: 2, isa: 'value', }, { chunk: '', isa: 'chunk', } ]
    @eq ( Ωt__18 = -> [ ( walk_nonempty_parts"#{1}#{2}" )..., ] ), [ { value: 1, isa: 'value', }, { value: 2, isa: 'value', }, ]
    @eq ( Ωt__19 = -> [ ( walk_parts"a#{1}z"            )..., ] ), [ { chunk: 'a', isa: 'chunk', }, { value: 1, isa: 'value', }, { chunk: 'z', isa: 'chunk', }, ]
    @eq ( Ωt__20 = -> [ ( walk_parts"a#{1}z#{2}"        )..., ] ), [ { chunk: 'a', isa: 'chunk', }, { value: 1, isa: 'value', }, { chunk: 'z', isa: 'chunk', }, { value: 2, isa: 'value', }, { chunk: '', isa: 'chunk', }, ]
    @eq ( Ωt__21 = -> [ ( walk_parts "a#{1}z#{2}"       )..., ] ), [ { chunk: 'a1z2', isa: 'chunk', }, ]
    @eq ( Ωt__22 = -> [ ( walk_parts 12                 )..., ] ), [ { chunk: '', isa: 'chunk', }, { value: 12, isa: 'value', }, { chunk: '', isa: 'chunk', }, ]
    @eq ( Ωt__23 = -> [ ( walk_nonempty_parts 12        )..., ] ), [ { value: 12, isa: 'value', }, ]
    #.........................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  get_next_free_filename: ->
    { get_next_free_filename,
      get_next_filename,
      exists,
      cache_filename_re,      } = SFMODULES.require_next_free_filename()
    PATH                        = require 'node:path'
    #.......................................................................................................
    @throws ( Ωgnff__24 = -> get_next_free_filename null        ), /expected a text/
    @throws ( Ωgnff__25 = -> get_next_free_filename undefined   ), /expected a text/
    @throws ( Ωgnff__26 = -> get_next_free_filename true        ), /expected a text/
    @throws ( Ωgnff__27 = -> get_next_free_filename ''          ), /expected a nonempty text/
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
        @eq ( Ωgnff__28 = -> exists abs_path                    ), matcher_1
        @eq ( Ωgnff__29 = -> get_next_filename       abs_path   ), abs_matcher_2
        @eq ( Ωgnff__30 = -> get_next_free_filename  abs_path   ), abs_matcher_3
      return null
    #.......................................................................................................
    do =>
      for [ path, [ matcher_1, matcher_2, matcher_3, ], ] in probes_and_matchers
        rel_path      = PATH.relative process.cwd(), PATH.join path_prefix, path
        rel_matcher_2 = PATH.relative process.cwd(), PATH.join path_prefix, matcher_2
        rel_matcher_3 = PATH.relative process.cwd(), PATH.join path_prefix, matcher_3
        @eq ( Ωgnff__31 = -> exists rel_path                    ), matcher_1
        @eq ( Ωgnff__32 = -> get_next_filename       rel_path   ), rel_matcher_2
        @eq ( Ωgnff__33 = -> get_next_free_filename  rel_path   ), rel_matcher_3
      return null
    #.......................................................................................................
    do =>
      current_cwd = PATH.resolve process.cwd()
      process.chdir path_prefix
      try
        for [ path, [ matcher_1, matcher_2, matcher_3, ], ] in probes_and_matchers
          @eq ( Ωgnff__34 = -> exists path                    ), matcher_1
          @eq ( Ωgnff__35 = -> get_next_filename       path   ), matcher_2
          @eq ( Ωgnff__36 = -> get_next_free_filename  path   ), matcher_3
      finally
        process.chdir current_cwd
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  ANSI: ->
    { ANSI, } = SFMODULES.require_ansi()
    @eq     ( Ωgnff__37 = -> ANSI.fg_from_hex '#a0a1a2'           ), '\x1B[38:2::160:161:162m'
    @eq     ( Ωgnff__38 = -> ANSI.bg_from_hex '#a0a1a2'           ), '\x1B[48:2::160:161:162m'
    @eq     ( Ωgnff__39 = -> ANSI.fg_from_dec [ 160, 161, 162 ]   ), '\x1B[38:2::160:161:162m'
    @eq     ( Ωgnff__40 = -> ANSI.bg_from_dec [ 160, 161, 162 ]   ), '\x1B[48:2::160:161:162m'
    @eq     ( Ωgnff__41 = -> ANSI.dec_from_hex '#a0a1a2'          ), [ 160, 161, 162 ]
    @throws ( Ωgnff__42 = -> ANSI.dec_from_hex '#xxxxxx'          ), /not a proper hexadecimal RGB code: '#xxxxxx'/
    @throws ( Ωgnff__43 = -> ANSI.dec_from_hex '#aaaaa'           ), /not a proper hexadecimal RGB code: '#aaaaa'/
    @throws ( Ωgnff__44 = -> ANSI.dec_from_hex '#aaaaabb'         ), /not a proper hexadecimal RGB code: '#aaaaabb'/
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  require_ansi_colors_and_effects: ->
    { ansi_colors_and_effects: C, } = SFMODULES.require_ansi_colors_and_effects()
    @eq     ( Ωgnff__45 = -> C.red              ), '\x1B[38:2::255:0:16m'
    @eq     ( Ωgnff__46 = -> C.bg_red           ), '\x1B[48:2::255:0:16m'
    @eq     ( Ωgnff__47 = -> C.overline1        ), '\x1b[53m'
    @eq     ( Ωgnff__48 = -> C.overline0        ), '\x1b[55m'
    @eq     ( Ωgnff__49 = -> C.default          ), '\x1b[39m'
    @eq     ( Ωgnff__50 = -> C.bg_default       ), '\x1b[49m'
    @eq     ( Ωgnff__51 = -> C.reset            ), '\x1b[0m'
    #.......................................................................................................
    return null



#===========================================================================================================
if module is require.main then await do =>
  # demo_infinite_proxy()
  # demo_colorful_proxy()
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test { tests, }

  # f = ( ctx ) -> debug 'Ωidsp__52', ctx.arguments
  # g = ( P... ) -> debug 'Ωidsp__53', f { arguments, }
  # g 5, 'd'
