
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
  whisper }               = GUY.trm.get_loggers 'demo-proxy'
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



############################################################################################################
#
#===========================================================================================================
require_raw = ->

  #-----------------------------------------------------------------------------------------------------------
  class XXX_arity_error extends Error
  { get_first_argument, } = SFMODULES.require_tagfun_tools()
  { set_getter,         } = SFMODULES.require_managed_property_tools()

  #-----------------------------------------------------------------------------------------------------------
  class Raw extends String
    set_getter @, Symbol.species, -> Raw
  # class Raw

    #---------------------------------------------------------------------------------------------------------
    constructor: ( text ) ->
      super text
      unless ( arity = arguments.length ) is 1
        throw new XXX_arity_error "Ωidsp__10 expected 1 argument, got #{arity}"
      return undefined

  #   #---------------------------------------------------------------------------------------------------------
  #   toString: -> @data

  #-----------------------------------------------------------------------------------------------------------
  raw     = ( P... ) -> new Raw get_first_argument P...
  is_raw  = ( x ) -> x instanceof Raw

  #-----------------------------------------------------------------------------------------------------------
  return { Raw, raw, is_raw, }


#===========================================================================================================
tests =

  #---------------------------------------------------------------------------------------------------------
  test_is_tagfun_call: ->
    { is_tagfun_call,                  } = SFMODULES.require_tagfun_tools()
    fn = ( P... ) -> is_tagfun_call P...
    @eq ( Ωidsp__11 = -> fn()             ), false
    @eq ( Ωidsp__12 = -> fn [ 1, 2, 3, ]  ), false
    @eq ( Ωidsp__13 = -> fn"[ 1, 2, 3, ]" ), true
    return null

  #---------------------------------------------------------------------------------------------------------
  test_escape_html_text: ->
    { escape_html_text, } = SFMODULES.require_escape_html_text()
    @eq ( Ωidsp__14 = -> escape_html_text ''                    ), ''
    @eq ( Ωidsp__15 = -> escape_html_text 'abc'                 ), 'abc'
    @eq ( Ωidsp__16 = -> escape_html_text 'abc<tag>d&e&f</tag>' ), 'abc&lt;tag&gt;d&amp;e&amp;f&lt;/tag&gt;'
    return null

  #---------------------------------------------------------------------------------------------------------
  test_raw: ->
    { Raw, raw,         } = require_raw()
    { escape_html_text, } = SFMODULES.require_escape_html_text()
    @throws ( Ωidsp__17 = -> new Raw                ), /expected 1 argument/
    @throws ( Ωidsp__18 = -> new Raw()              ), /expected 1 argument/
    do =>
      result = raw '<&>'
      @eq ( Ωidsp__19 = -> result instanceof Raw  ), true
      @eq ( Ωidsp__20 = -> result.length          ), 3
      @eq ( Ωidsp__21 = -> Array.from result      ), [ '<', '&', '>', ]
    do =>
      result = raw'<&>'
      @eq ( Ωidsp__22 = -> result instanceof Raw  ), true
      @eq ( Ωidsp__23 = -> result.length          ), 3
      @eq ( Ωidsp__24 = -> Array.from result      ), [ '<', '&', '>', ]
    return null

  #---------------------------------------------------------------------------------------------------------
  test_doublestack: ->
    { Stack
      Doublestack, }  = SFMODULES.require_stack_classes()
    ds                = new Doublestack()
    my_stack_1        = null
    my_stack_2        = null
    @eq ( Ωidsp__25 = -> ds.data                                                  ), []
    @eq ( Ωidsp__26 = -> ds.length                                                ), 0
    @eq ( Ωidsp__27 = -> ds.peek_stack null                                       ), null
    @eq ( Ωidsp__28 = -> ( my_stack_1 = ds.push_new_stack()   ) instanceof Stack  ), true
    @eq ( Ωidsp__29 = -> ds.length                                                ), 1
    @eq ( Ωidsp__30 = -> ( my_stack_2 = ds.peek_stack()       ) instanceof Stack  ), true
    @eq ( Ωidsp__31 = -> my_stack_1 is my_stack_2                                 ), true
    return null

  #---------------------------------------------------------------------------------------------------------
  test_doublestack_infiniproxy: ->
    { is_tagfun_call,
      get_first_argument,             } = SFMODULES.require_tagfun_tools()
    { create_doublestack_infiniproxy, } = SFMODULES.require_doublestack_infiniproxy()
    #.......................................................................................................
    create_echoing_proxy = ( doublestack ) ->
      base = ( P... ) ->
        text  = get_first_argument P...
        chain = doublestack.peek_stack().data.join '.'
        return "[#{chain}:#{rpr text}]"
      { proxy, doublestack, } = create_doublestack_infiniproxy base
      return { proxy, doublestack, }
    #.......................................................................................................
    do =>
      { proxy, doublestack, } = create_echoing_proxy()
      info 'Ωidsp__32', rpr proxy.gold.bold.underlined"text 1"
      info 'Ωidsp__33', rpr proxy.red.reverse.italic"text 2"
      info 'Ωidsp__34', rpr proxy.red.reverse.italic"text 2 #{proxy.gold.bold.underlined"(embedded text)"}!!"
      #.......................................................................................................
      @eq ( Ωidsp__35 = -> proxy.gold.bold.underlined"text 1"                                                 ), """[gold.bold.underlined:'text 1']"""
      @eq ( Ωidsp__36 = -> proxy.red.reverse.italic"text 2"                                                   ), """[red.reverse.italic:'text 2']"""
      @eq ( Ωidsp__37 = -> proxy.red.reverse.italic"text 2 #{proxy.gold.bold.underlined"(embedded text)"}!!"  ), """[red.reverse.italic:"text 2 [gold.bold.underlined:'(embedded text)']!!"]"""
      ### NOTE 'unused' property chains shouldn't leave traces on stack, but they do: ###
      @eq ( Ωidsp__38 = ->                                                          doublestack.length ), 0
      @eq ( Ωidsp__39 = ->                          proxy.using_chain_2"some text"; doublestack.length ), 0
      @eq ( Ωidsp__40 = -> proxy.building.chain_1;  proxy.using_chain_2"some text"; doublestack.length ), 1 ### NOTE: should be 0 ###
      return null
    #.......................................................................................................
    do =>
      echo '——————————————————————————————————————————————————————————————————————————————'
      { proxy, doublestack, } = create_echoing_proxy()
      proxy.a.b.c
      proxy.d.e.f
      @eq ( Ωidsp__41 = -> doublestack.length   ), 2
      @eq ( Ωidsp__42 = -> proxy.g.h.i 127      ), "[g.h.i:127]"
      @eq ( Ωidsp__43 = -> doublestack.length   ), 2
      @eq ( Ωidsp__44 = -> doublestack.clear()  ), null
      @eq ( Ωidsp__45 = -> doublestack.length   ), 0
    #.......................................................................................................
    do =>
      echo '——————————————————————————————————————————————————————————————————————————————'
      { proxy, doublestack, } = create_echoing_proxy()
      @eq ( Ωidsp__46 = -> proxy.a.b.c 90              ), """[a.b.c:90]"""
      @eq ( Ωidsp__47 = -> proxy.a.b.c proxy.d.e.f 90  ), """[a.b.c:'[d.e.f:90]']"""
      @eq ( Ωidsp__48 = -> doublestack.length          ), 0
      return null
    #.......................................................................................................
    return null


#===========================================================================================================
tests_for_doublestack_infiniproxy =

  #---------------------------------------------------------------------------------------------------------
  test_1: ->
    { get_first_argument,
      is_tagfun_call,                 } = SFMODULES.require_tagfun_tools()
    { create_doublestack_infiniproxy, } = SFMODULES.require_doublestack_infiniproxy()
    { append,                         } = SFMODULES.require_list_tools()
    #.......................................................................................................
    { Raw, raw, is_raw,               } = require_raw()
    { escape_html_text,               } = SFMODULES.require_escape_html_text()
    #.......................................................................................................
    class XXX_no_tagfun_call_error extends Error
    #.......................................................................................................
    get_first_argument_for_html = get_first_argument.create Ωidsp__49 = ( x ) ->
      # debug 'Ωidsp__50', ( rpr x ), ( is_raw x ), ( rpr escape_html_text x )
      return x if is_raw x
      # return "#{x}" if is_raw x
      return escape_html_text "#{x}"
      # return raw escape_html_text "#{x}"
    #.......................................................................................................
    create_html_proxy = ->
      base = ( P... ) ->
        unless is_tagfun_call P...
          throw new XXX_no_tagfun_call_error "Ωidsp__51 expected call as tagged template, got conventional call"
        text  = get_first_argument_for_html P...
        # debug 'Ωidsp__52', rpr text
        if doublestack.is_empty
          return if is_raw text then text else escape_html_text text
        # return escape_html_text text if doublestack.is_empty
        chain = doublestack.peek_stack()
        R = []
        [ tag_name, attr_names..., ] = chain
        append R, '<', tag_name
        debug 'Ωidsp__53', { tag_name, attr_names, }
        append R, '>', text, '</', tag_name, '>'
        return raw R.join ''
      { proxy, doublestack, } = create_doublestack_infiniproxy base
      return { proxy, doublestack, }
    #.......................................................................................................
    { proxy: H, } = create_html_proxy()
    @eq     ( Ωidsp__54 = -> get_first_argument_for_html '<abc>'          ), '&lt;abc&gt;'
    @eq     ( Ωidsp__55 = -> get_first_argument_for_html"#{'<abc>'}"      ), '&lt;abc&gt;'
    @throws ( Ωidsp__56 = -> H "<abc>"                                    ), /expected call as tagged template/
    @eq     ( Ωidsp__57 = -> H"<abc>"                                     ), '&lt;abc&gt;'
    @eq     ( Ωidsp__58 = -> H"#{'<abc>'}"                                ), '&lt;abc&gt;'
    @eq     ( Ωidsp__59 = -> H"#{raw '<abc>'}"                            ), '<abc>'
    @eq     ( Ωidsp__60 = -> H"#{raw'<abc>'}"                             ), '<abc>'
    # info 'Ωidsp__61', H.a.b.c"<xyz>"
    # @eq ( Ωidsp__62 = -> "#{H '<&>'}"                                      ), "&lt;&amp;&gt;"
    # @eq ( Ωidsp__63 = -> "#{H'<&>' }"                                      ), "&lt;&amp;&gt;"

    # # @eq ( Ωidsp__64 = -> H '<&>'                                       ), '<&>'
    # # @eq ( Ωidsp__65 = -> H'<&>'                                        ), '<&>'

    # # @eq ( Ωidsp__66 = -> H"#{'<&>'}"                                   ), "&lt;&amp;&gt;"
    # # @eq ( Ωidsp__67 = -> raw '<&>'                                     ), new Raw '<&>'
    # # @eq ( Ωidsp__68 = -> H raw '<&>'                                   ), '<&>'
    # # @eq ( Ωidsp__69 = -> H raw'<&>'                                    ), '<&>'
    # # @eq ( Ωidsp__70 = -> H"<span>#{98}</span>"                         ), "<span>98</span>"
    # # @eq ( Ωidsp__71 = -> H"""<div>#{"<span>#{98}</span>"}</div>"""     ), "<div>&lt;span&gt;98&lt;/span&gt;</div>"
    # # @eq ( Ωidsp__72 = -> H"""<div>#{H"<span>#{98}</span>"}</div>"""    ), "<div><span>98</span></div>"
    # # @eq ( Ωidsp__73 = -> H"""<div>#{H "<span>#{98}</span>"}</div>"""   ), "<div><span>98</span></div>"
    # # # @eq ( Ωidsp__74 = -> H.a.b.c H.d.e.f 90  ), """[a.b.c:'[d.e.f:90]']"""
    return null


#===========================================================================================================
all_tests = { tests, tests_for_doublestack_infiniproxy, }


#===========================================================================================================
demo_proxy_as_html_producer = ->
  #.........................................................................................................
  echo '——————————————————————————————————————————————————————————————————————————————'
  return null

#===========================================================================================================
if module is require.main then await do =>
  # demo_infinite_proxy()
  # demo_colorful_proxy()
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  # ( new Test guytest_cfg ).test { all_tests, }
  ( new Test guytest_cfg ).test { tests_for_doublestack_infiniproxy, }
  # demo_proxy_as_html_producer()
  # demo_managed_properties()


