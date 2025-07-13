

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



############################################################################################################
#
#===========================================================================================================
### NOTE Future Single-File Module ###
require_list_tools = ->
  append = ( list, P... ) -> list.splice list.length, 0, P...
  return { append, }

#===========================================================================================================
### NOTE Future Single-File Module ###
require_escape_html_text = ->
  escape_html_text = ( text ) ->
    R = text
    R = R.replace /&/g, '&amp;'
    R = R.replace /</g, '&lt;'
    R = R.replace />/g, '&gt;'
    return R
  return { escape_html_text, }

#===========================================================================================================
### NOTE Future Single-File Module ###
require_tagfun_tools = ->
  ### NOTE When `expression_to_string` is given, it will be used to turn each expression (the parts of
  tagged templates that are within curlies) into a string; could use this to apply some escaping etc. ###
  ### TAINT should provide means to also format constant parts ###
  create_text_from_tagfun_call = ( expression_to_string = null ) ->
    expression_to_string ?= ( expression ) -> "#{expression}"
    return ( parts, expressions... ) ->
      R = parts[ 0 ]
      for expression, idx in expressions
        R += ( expression_to_string expression ) + parts[ idx + 1 ]
      return R
  text_from_tagfun_call = create_text_from_tagfun_call()

  #---------------------------------------------------------------------------------------------------------
  is_tagfun_call = ( P... ) ->
    return false unless Array.isArray   P[ 0 ]
    return false unless Object.isFrozen P[ 0 ]
    return false unless P[ 0 ].raw?
    return true

  #---------------------------------------------------------------------------------------------------------
  return { create_text_from_tagfun_call, text_from_tagfun_call, is_tagfun_call, }

#===========================================================================================================
### NOTE Future Single-File Module ###
require_managed_property_tools = ->
  set_getter = ( object, name, get ) -> Object.defineProperties object, { [name]: { get, }, }
  hide = ( object, name, value ) => Object.defineProperty object, name,
      enumerable:   false
      writable:     true
      configurable: true
      value:        value

  #---------------------------------------------------------------------------------------------------------
  return { set_getter, hide, }

#===========================================================================================================
### NOTE Future Single-File Module ###
require_nameit = ->
  nameit = ( name, fn ) -> Object.defineProperty fn, 'name', { value: name, }; fn
  #---------------------------------------------------------------------------------------------------------
  return { nameit, }

#===========================================================================================================
### NOTE Future Single-File Module ###
require_stack_classes = ->
  { set_getter,
    hide,       } = require_managed_property_tools()
  misfit          = Symbol 'misfit'
  class XXX_Stack_error extends Error

  #===========================================================================================================
  class Stack

    #---------------------------------------------------------------------------------------------------------
    constructor: ->
      @data = []
      return undefined

    #---------------------------------------------------------------------------------------------------------
    set_getter @::, 'length', -> @data.length

    #---------------------------------------------------------------------------------------------------------
    push:     ( x ) -> @data.push x;    null
    unshift:  ( x ) -> @data.unshift x; null

    #---------------------------------------------------------------------------------------------------------
    pop: ( fallback = misfit ) ->
      if @length < 1
        return fallback unless fallback is misfit
        throw new XXX_Stack_error "Ωidsp___1 unable to pop value from empty stack"
      return @data.pop()

    #---------------------------------------------------------------------------------------------------------
    shift: ( fallback = misfit ) ->
      if @length < 1
        return fallback unless fallback is misfit
        throw new XXX_Stack_error "Ωidsp___2 unable to shift value from empty stack"
      return @data.shift()

    #---------------------------------------------------------------------------------------------------------
    peek: ( fallback = misfit ) ->
      if @length < 1
        return fallback unless fallback is misfit
        throw new XXX_Stack_error "Ωidsp___3 unable to peek value of empty stack"
      return @data.at -1

  #===========================================================================================================
  class Doublestack

    #---------------------------------------------------------------------------------------------------------
    constructor: ->
      @data = []
      return undefined

    #---------------------------------------------------------------------------------------------------------
    set_getter @::, 'length', -> @data.length

    #---------------------------------------------------------------------------------------------------------
    push_new_stack: -> @data.push ( new Stack() ); @peek_stack()
    # unshift_new_stack:  -> @data.unshift []; null

    #---------------------------------------------------------------------------------------------------------
    pop_old_stack: ( fallback = misfit ) ->
      if @length < 1
        return fallback unless fallback is misfit
        throw new XXX_Stack_error "Ωidsp___4 unable to peek value of empty stack"
      return @data.pop()

    # #---------------------------------------------------------------------------------------------------------
    # shift_old_stack:  ( fallback = misfit ) ->
    #   if @length < 1
    #     return fallback unless fallback is misfit
    #     throw new XXX_Stack_error "Ωidsp___5 unable to peek value of empty stack"
    #   return @data.shift()

    #---------------------------------------------------------------------------------------------------------
    peek_stack: ( fallback = misfit ) ->
      if @length < 1
        return fallback unless fallback is misfit
        throw new XXX_Stack_error "Ωidsp___6 unable to peek value of empty stack"
      return @data.at -1

  #-----------------------------------------------------------------------------------------------------------
  return { Stack, Doublestack, }

#===========================================================================================================
### NOTE Future Single-File Module ###
require_doublestack_infiniproxy = ->
  { Stack,
    Doublestack,  } = require_stack_classes()
  #...........................................................................................................
  dsip_cfg_template =
    base:                     null
    is_initial:               true
    # empty_stack_on_new_chain: true
  #-----------------------------------------------------------------------------------------------------------
  create_doublestack_infiniproxy = ( base ) ->
    doublestack = new Doublestack()
    get_proxy   = Symbol 'get_proxy'
    #.........................................................................................................
    extendended_base = ( P... ) ->
      R = base P...
      doublestack.pop_old_stack()
      return R
    #---------------------------------------------------------------------------------------------------------
    new_doublestack_infiniproxy = ( cfg ) ->
      cfg = { dsip_cfg_template..., cfg..., }
      # cfg.is_initial = false unless cfg.empty_stack_on_new_chain
      #.......................................................................................................
      proxy = new Proxy extendended_base,
        get: ( target, key ) ->
          return new_doublestack_infiniproxy { base, is_initial: false, } if key is get_proxy
          return target[ key ]                                            if ( typeof key ) is 'symbol'
          return target[ key ]                                            if Reflect.has target, key
          doublestack.push_new_stack()                                    if cfg.is_initial
          doublestack.peek_stack().push key
          return R
      if cfg.is_initial then  R = new_doublestack_infiniproxy { base, is_initial: false, }
      else                    R = proxy
      return proxy
    #.........................................................................................................
    return do ( proxy = new_doublestack_infiniproxy base ) => { proxy, doublestack, }

  #-----------------------------------------------------------------------------------------------------------
  return { create_doublestack_infiniproxy, }


############################################################################################################
#
#===========================================================================================================
class Raw

  #---------------------------------------------------------------------------------------------------------
  constructor: ( text ) ->
    @data = text
    return undefined
  toString: -> @data

#===========================================================================================================
create_html_escaped_text_from_tagfun_call = ( dont_escape = null ) ->
  ### NOTE will only escape *expressions* of tagged templates, not the constant parts ###
  { create_text_from_tagfun_call, } = require_tagfun_tools()
  { escape_html_text,             } = require_escape_html_text()
  #.........................................................................................................
  html_safe_text_from_tagfun_call = create_text_from_tagfun_call ( expression ) ->
    R = "#{expression}"
    R = escape_html_text R if ( dont_escape? ) and ( not dont_escape expression )
    return R
  #.........................................................................................................
  return { html_safe_text_from_tagfun_call, }


#===========================================================================================================
tests = ->
  #.........................................................................................................
  do test_is_tagfun_call = =>
    { is_tagfun_call,                  } = require_tagfun_tools()
    fn = ( P... ) -> is_tagfun_call P...
    @eq ( Ωidsp___7 = -> fn()             ), false
    @eq ( Ωidsp___8 = -> fn [ 1, 2, 3, ]  ), false
    @eq ( Ωidsp___9 = -> fn"[ 1, 2, 3, ]" ), true
    return null
  #.........................................................................................................
  do test_escape_html_text = =>
    { escape_html_text, } = require_escape_html_text()
    @eq ( Ωidsp__10 = -> escape_html_text ''                    ), ''
    @eq ( Ωidsp__11 = -> escape_html_text 'abc'                 ), 'abc'
    @eq ( Ωidsp__12 = -> escape_html_text 'abc<tag>d&e&f</tag>' ), 'abc&lt;tag&gt;d&amp;e&amp;f&lt;/tag&gt;'
    return null
  #.........................................................................................................
  do test_html_safe_text_from_tagfun_call = =>
    { html_safe_text_from_tagfun_call, } = do =>
      dont_escape_raw_instances = ( x ) -> x instanceof Raw
      return create_html_escaped_text_from_tagfun_call dont_escape_raw_instances
    fn = html_safe_text_from_tagfun_call
    @eq ( Ωidsp__13 = -> fn''                           ), ''
    @eq ( Ωidsp__14 = -> fn'abc'                        ), 'abc'
    @eq ( Ωidsp__15 = -> fn'abc<tag>d&e&f</tag>'        ), 'abc<tag>d&e&f</tag>'
    @eq ( Ωidsp__16 = -> fn"(#{'abc<tag>d&e&f</tag>'})" ), '(abc&lt;tag&gt;d&amp;e&amp;f&lt;/tag&gt;)'
    return null
  #.........................................................................................................
  do test_doublestack = =>
    { Stack
      Doublestack, }  = require_stack_classes()
    ds                = new Doublestack()
    my_stack_1        = null
    my_stack_2        = null
    @eq ( Ωidsp__17 = -> ds.data                                                  ), []
    @eq ( Ωidsp__18 = -> ds.length                                                ), 0
    @eq ( Ωidsp__19 = -> ds.peek_stack null                                       ), null
    @eq ( Ωidsp__20 = -> ( my_stack_1 = ds.push_new_stack()   ) instanceof Stack  ), true
    @eq ( Ωidsp__21 = -> ds.length                                                ), 1
    @eq ( Ωidsp__22 = -> ( my_stack_2 = ds.peek_stack()       ) instanceof Stack  ), true
    @eq ( Ωidsp__23 = -> my_stack_1 is my_stack_2                                 ), true
    return null
  #.........................................................................................................
  do test_doublestack_infiniproxy = =>
    { is_tagfun_call,                 } = require_tagfun_tools()
    { create_doublestack_infiniproxy, } = require_doublestack_infiniproxy()
    { text_from_tagfun_call,          } = require_tagfun_tools()
    #.......................................................................................................
    base = ( P... ) ->
      unless is_tagfun_call P...
        throw new Error "Ωidsp__24 only allowed to be used as tagged template function call (tagfun call)"
      # debug 'Ωidsp__25', text_from_tagfun_call P...
      return '[' + ( doublestack.peek_stack().data.join '.' ) + ':' + ( text_from_tagfun_call P... ) + ']'
    #.......................................................................................................
    { proxy,
      doublestack,                    } = create_doublestack_infiniproxy base
    info 'Ωidsp__26', rpr proxy.gold.bold.underlined"text 1"
    info 'Ωidsp__27', rpr proxy.red.reverse.italic"text 2"
    info 'Ωidsp__28', rpr proxy.red.reverse.italic"text 2 #{proxy.gold.bold.underlined"(embedded text)"}!!"
    #.......................................................................................................
    @eq ( Ωidsp__29 = -> proxy.gold.bold.underlined"text 1"                                                 ), '[gold.bold.underlined:text 1]'
    @eq ( Ωidsp__30 = -> proxy.red.reverse.italic"text 2"                                                   ), '[red.reverse.italic:text 2]'
    @eq ( Ωidsp__31 = -> proxy.red.reverse.italic"text 2 #{proxy.gold.bold.underlined"(embedded text)"}!!"  ), '[red.reverse.italic:text 2 [gold.bold.underlined:(embedded text)]!!]'
    @eq ( Ωidsp__32 = ->                                                          doublestack.length ), 0
    @eq ( Ωidsp__33 = ->                          proxy.using_chain_2"some text"; doublestack.length ), 0
    @eq ( Ωidsp__34 = -> proxy.building.chain_1;  proxy.using_chain_2"some text"; doublestack.length ), 0
    #.......................................................................................................
    info 'Ωidsp__35', doublestack.length, doublestack
    info 'Ωidsp__36', rpr proxy.building.chain_1
    info 'Ωidsp__37', doublestack.length, doublestack
    info 'Ωidsp__38', rpr proxy.using_chain_2"some text"
    info 'Ωidsp__39', doublestack.length, doublestack
    return null
  #.........................................................................................................
  return null


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
  ( new Test guytest_cfg ).test { tests, }
  demo_proxy_as_html_producer()
  # demo_managed_properties()
