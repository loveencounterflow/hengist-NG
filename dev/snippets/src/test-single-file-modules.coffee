
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
  whisper }               = GUY.trm.get_loggers 'test-single-file-modules'
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
SFMODULES                 = require './single-file-modules'





#===========================================================================================================
tests =

  #---------------------------------------------------------------------------------------------------------
  test_is_tagfun_call: ->
    { is_tagfun_call,                  } = SFMODULES.require_tagfun_tools()
    fn = ( P... ) -> is_tagfun_call P...
    @eq ( Ωidsp___1 = -> fn()             ), false
    @eq ( Ωidsp___2 = -> fn [ 1, 2, 3, ]  ), false
    @eq ( Ωidsp___3 = -> fn"[ 1, 2, 3, ]" ), true
    return null

  #---------------------------------------------------------------------------------------------------------
  test_escape_html_text: ->
    { escape_html_text, } = SFMODULES.require_escape_html_text()
    @eq ( Ωidsp___4 = -> escape_html_text ''                    ), ''
    @eq ( Ωidsp___5 = -> escape_html_text 'abc'                 ), 'abc'
    @eq ( Ωidsp___6 = -> escape_html_text 'abc<tag>d&e&f</tag>' ), 'abc&lt;tag&gt;d&amp;e&amp;f&lt;/tag&gt;'
    return null

  #---------------------------------------------------------------------------------------------------------
  test_doublestack: ->
    { Stack
      Doublestack, }  = SFMODULES.require_stack_classes()
    ds                = new Doublestack()
    my_stack_1        = null
    my_stack_2        = null
    @eq ( Ωidsp___7 = -> ds.data                                                  ), []
    @eq ( Ωidsp___8 = -> ds.length                                                ), 0
    @eq ( Ωidsp___9 = -> ds.peek_stack null                                       ), null
    @eq ( Ωidsp__10 = -> ( my_stack_1 = ds.push_new_stack()   ) instanceof Stack  ), true
    @eq ( Ωidsp__11 = -> ds.length                                                ), 1
    @eq ( Ωidsp__12 = -> ( my_stack_2 = ds.peek_stack()       ) instanceof Stack  ), true
    @eq ( Ωidsp__13 = -> my_stack_1 is my_stack_2                                 ), true
    return null

  #---------------------------------------------------------------------------------------------------------
  test_doublestack_infiniproxy: ->
    { is_tagfun_call,
      walk_parts,                     } = SFMODULES.require_tagfun_tools()
    { create_doublestack_infiniproxy, } = SFMODULES.require_doublestack_infiniproxy()
    #.......................................................................................................
    create_echoing_proxy = ->
      base = ( P... ) ->
        debug 'Ωidsp__14', P
        text = ''
        for part from walk_parts P...
          if part.isa is 'chunk'
            text += part.chunk
          else
            debug 'Ωidsp__15', part
            text += "#{part.value}"
        chain = @stack.data.join '.'
        return "[#{chain}:#{text}]"
      R = create_doublestack_infiniproxy base
      return R
    #.......................................................................................................
    do =>
      PRX = create_echoing_proxy()
      info 'Ωidsp__16', rpr PRX.gold.bold.underlined"text 1"
      info 'Ωidsp__17', rpr PRX.red.reverse.italic"text 2"
      info 'Ωidsp__18', rpr PRX.red.reverse.italic"text 2 #{PRX.gold.bold.underlined"(embedded text)"}!!"
      #.......................................................................................................
      @eq ( Ωidsp__19 = -> PRX.gold.bold.underlined"text 1"                                               ), """[gold.bold.underlined:text 1]"""
      @eq ( Ωidsp__20 = -> PRX.red.reverse.italic"text 2"                                                 ), """[red.reverse.italic:text 2]"""
      @eq ( Ωidsp__21 = -> PRX.red.reverse.italic"text 2 #{PRX.gold.bold.underlined"(embedded text)"}!!"  ), """[red.reverse.italic:text 2 [gold.bold.underlined:(embedded text)]!!]"""
      ### NOTE 'unused' property chains shouldn't leave traces on stack, but they do: ###
      @eq ( Ωidsp__22 = ->                                                      PRX.doublestack.length ), 0
      @eq ( Ωidsp__23 = ->                        PRX.using_chain_2"some text"; PRX.doublestack.length ), 0
      @eq ( Ωidsp__24 = -> PRX.building.chain_1;  PRX.using_chain_2"some text"; PRX.doublestack.length ), 1 ### NOTE: should be 0 ###
      return null
    #.......................................................................................................
    do =>
      echo '——————————————————————————————————————————————————————————————————————————————'
      PRX = create_echoing_proxy()
      PRX.a.b.c
      PRX.d.e.f
      @eq ( Ωidsp__25 = -> PRX.doublestack.length   ), 2
      @eq ( Ωidsp__26 = -> PRX.g.h.i 127            ), "[g.h.i:127]"
      @eq ( Ωidsp__27 = -> PRX.doublestack.length   ), 2
      @eq ( Ωidsp__28 = -> PRX.doublestack.clear()  ), null
      @eq ( Ωidsp__29 = -> PRX.doublestack.length   ), 0
    #.......................................................................................................
    do =>
      echo '——————————————————————————————————————————————————————————————————————————————'
      PRX = create_echoing_proxy()
      @eq ( Ωidsp__30 = -> PRX.a.b.c 90             ), """[a.b.c:90]"""
      @eq ( Ωidsp__31 = -> PRX.a.b.c PRX.d.e.f 90   ), """[a.b.c:[d.e.f:90]]"""
      @eq ( Ωidsp__32 = -> PRX.doublestack.length   ), 0
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  test_walk_tagfun_call_parts: ->
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
