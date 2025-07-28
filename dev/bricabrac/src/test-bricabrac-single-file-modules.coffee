
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
    @eq ( Ωt__33 = -> [ ( walk_parts""                  )..., ] ), [ { chunk: '', isa: 'chunk', }, ]
    @eq ( Ωt__34 = -> [ ( walk_parts ""                 )..., ] ), [ { chunk: '', isa: 'chunk', }, ]
    @eq ( Ωt__35 = -> [ ( walk_nonempty_parts""         )..., ] ), []
    @eq ( Ωt__36 = -> [ ( walk_nonempty_parts ''        )..., ] ), []
    @eq ( Ωt__37 = -> [ ( walk_parts"a"                 )..., ] ), [ { chunk: 'a', isa: 'chunk', }, ]
    @eq ( Ωt__38 = -> [ ( walk_parts"\na"               )..., ] ), [ { chunk: '\na', isa: 'chunk', }, ]
    @eq ( Ωt__39 = -> [ ( walk_raw_parts"\na"           )..., ] ), [ { chunk: '\\na', isa: 'chunk', }, ]
    @eq ( Ωt__40 = -> [ ( walk_parts"#{1}"              )..., ] ), [ { chunk: '', isa: 'chunk', }, { value: 1, isa: 'value', }, { chunk: '', isa: 'chunk', }, ]
    @eq ( Ωt__41 = -> [ ( walk_nonempty_parts"#{1}"     )..., ] ), [ { value: 1, isa: 'value', }, ]
    @eq ( Ωt__42 = -> [ ( walk_parts"a#{1}"             )..., ] ), [ { chunk: 'a', isa: 'chunk', }, { value: 1, isa: 'value', }, { chunk: '', isa: 'chunk', }, ]
    @eq ( Ωt__43 = -> [ ( walk_parts"#{1}#{2}"          )..., ] ), [ { chunk: '', isa: 'chunk', }, { value: 1, isa: 'value', }, { chunk: '', isa: 'chunk', }, { value: 2, isa: 'value', }, { chunk: '', isa: 'chunk', } ]
    @eq ( Ωt__44 = -> [ ( walk_nonempty_parts"#{1}#{2}" )..., ] ), [ { value: 1, isa: 'value', }, { value: 2, isa: 'value', }, ]
    @eq ( Ωt__45 = -> [ ( walk_parts"a#{1}z"            )..., ] ), [ { chunk: 'a', isa: 'chunk', }, { value: 1, isa: 'value', }, { chunk: 'z', isa: 'chunk', }, ]
    @eq ( Ωt__46 = -> [ ( walk_parts"a#{1}z#{2}"        )..., ] ), [ { chunk: 'a', isa: 'chunk', }, { value: 1, isa: 'value', }, { chunk: 'z', isa: 'chunk', }, { value: 2, isa: 'value', }, { chunk: '', isa: 'chunk', }, ]
    @eq ( Ωt__47 = -> [ ( walk_parts "a#{1}z#{2}"       )..., ] ), [ { chunk: 'a1z2', isa: 'chunk', }, ]
    @eq ( Ωt__48 = -> [ ( walk_parts 12                 )..., ] ), [ { chunk: '', isa: 'chunk', }, { value: 12, isa: 'value', }, { chunk: '', isa: 'chunk', }, ]
    @eq ( Ωt__49 = -> [ ( walk_nonempty_parts 12        )..., ] ), [ { value: 12, isa: 'value', }, ]
    #.........................................................................................................
    return null

  get_next_free_filename: ->
    { get_next_free_filename,
      get_next_filename,
      exists,
      cache_filename_re,      } = SFMODULES.require_next_free_filename()
    PATH                        = require 'node:path'
    #.......................................................................................................
    @throws ( Ωgnff___1 = -> get_next_free_filename null        ), /expected a text/
    @throws ( Ωgnff___2 = -> get_next_free_filename undefined   ), /expected a text/
    @throws ( Ωgnff___3 = -> get_next_free_filename true        ), /expected a text/
    @throws ( Ωgnff___4 = -> get_next_free_filename ''          ), /expected a nonempty text/
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
        @eq ( Ωgnff___5 = -> exists abs_path                    ), matcher_1
        @eq ( Ωgnff___6 = -> get_next_filename       abs_path   ), abs_matcher_2
        @eq ( Ωgnff___7 = -> get_next_free_filename  abs_path   ), abs_matcher_3
      return null
    #.......................................................................................................
    do =>
      for [ path, [ matcher_1, matcher_2, matcher_3, ], ] in probes_and_matchers
        rel_path      = PATH.relative process.cwd(), PATH.join path_prefix, path
        rel_matcher_2 = PATH.relative process.cwd(), PATH.join path_prefix, matcher_2
        rel_matcher_3 = PATH.relative process.cwd(), PATH.join path_prefix, matcher_3
        @eq ( Ωgnff___8 = -> exists rel_path                    ), matcher_1
        @eq ( Ωgnff___9 = -> get_next_filename       rel_path   ), rel_matcher_2
        @eq ( Ωgnff__10 = -> get_next_free_filename  rel_path   ), rel_matcher_3
      return null
    #.......................................................................................................
    do =>
      current_cwd = PATH.resolve process.cwd()
      process.chdir path_prefix
      try
        for [ path, [ matcher_1, matcher_2, matcher_3, ], ] in probes_and_matchers
          @eq ( Ωgnff__11 = -> exists path                    ), matcher_1
          @eq ( Ωgnff__12 = -> get_next_filename       path   ), matcher_2
          @eq ( Ωgnff__13 = -> get_next_free_filename  path   ), matcher_3
      finally
        process.chdir current_cwd
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

  # f = ( ctx ) -> debug 'Ωidsp__50', ctx.arguments
  # g = ( P... ) -> debug 'Ωidsp__51', f { arguments, }
  # g 5, 'd'
