

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
require_list_utils = ->
  append = ( list, P... ) -> list.splice list.length, 0, P...
  return { append, }

#-----------------------------------------------------------------------------------------------------------
### NOTE Future Single-File Module ###
require_escape_html_text = ->
  escape_html_text = ( text ) ->
    R = text
    R = R.replace /&/g, '&amp;'
    R = R.replace /</g, '&lt;'
    R = R.replace />/g, '&gt;'
    return R
  return { escape_html_text, }

#-----------------------------------------------------------------------------------------------------------
### NOTE Future Single-File Module ###
require_text_from_tagged_template_call = ->
  ### NOTE When `expression_to_string` is given, it will be used to turn each expression (the parts of
  tagged templates that are within curlies) into a string; could use this to apply some escaping etc. ###
  ### TAINT should provide means to also format constant parts ###
  create_text_from_tagged_template_call = ( expression_to_string = null ) ->
    expression_to_string ?= ( expression ) -> "#{expression}"
    return ( parts, expressions... ) ->
      R = parts[ 0 ]
      for expression, idx in expressions
        R += ( expression_to_string expression ) + parts[ idx + 1 ]
      return R
  text_from_tagged_template_call = create_text_from_tagged_template_call()
  return { create_text_from_tagged_template_call, text_from_tagged_template_call, }

#-----------------------------------------------------------------------------------------------------------
### NOTE Future Single-File Module ###
require_is_tagged_template_call = ->
  is_tagged_template_call = ( P... ) ->
    return false unless Array.isArray   P[ 0 ]
    return false unless Object.isFrozen P[ 0 ]
    return false unless P[ 0 ].raw?
    return true
  return { is_tagged_template_call, }

#-----------------------------------------------------------------------------------------------------------
### NOTE Future Single-File Module ###
require_managed_properties_helpers = ->
  set_getter = ( object, name, get ) -> Object.defineProperties object, { [name]: { get, }, }
  hide = ( object, name, value ) => Object.defineProperty object, name,
      enumerable:   false
      writable:     true
      configurable: true
      value:        value
  return { set_getter, hide, }

#-----------------------------------------------------------------------------------------------------------
### NOTE Future Single-File Module ###
require_nameit = ->
  nameit = ( name, fn ) -> Object.defineProperty fn, 'name', { value: name, }; fn
  return { nameit, }


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
require_stack_classes = ->
  { set_getter,
    hide,       } = require_managed_properties_helpers()
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

#-----------------------------------------------------------------------------------------------------------
create_html_escaped_text_from_tagged_template_call = ( dont_escape = null ) ->
  ### NOTE will only escape *expressions* of tagged templates, not the constant parts ###
  { create_text_from_tagged_template_call,  } = require_text_from_tagged_template_call()
  { escape_html_text,                       } = require_escape_html_text()
  #.........................................................................................................
  html_safe_text_from_tagged_template_call = create_text_from_tagged_template_call ( expression ) ->
    R = "#{expression}"
    if dont_escape?
      R = escape_html_text R unless dont_escape expression
    return R
  #.........................................................................................................
  return { html_safe_text_from_tagged_template_call, }


#===========================================================================================================
tests = ->
  { is_tagged_template_call,                  } = require_is_tagged_template_call()
  { html_safe_text_from_tagged_template_call, } = do =>
    dont_escape_raw_instances = ( x ) -> x instanceof Raw
    return create_html_escaped_text_from_tagged_template_call dont_escape_raw_instances
  #.........................................................................................................
  do test_is_tagged_template_call = =>
    fn = ( P... ) -> is_tagged_template_call P...
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
  do test_html_safe_text_from_tagged_template_call = =>
    fn = html_safe_text_from_tagged_template_call
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
  return null

# #===========================================================================================================
# demo_managed_properties = ->
#   # new_properties = ( me, P... ) -> Object.defineProperties me.prototype, P...
#   { set_getter,
#     hide,       } = require_managed_properties_helpers()
#   class D
#     #---------------------------------------------------------------------------------------------------------
#     constructor: ->
#       hide @, 'data', []
#       return undefined
#     #---------------------------------------------------------------------------------------------------------
#     set_getter @::, 'length', -> @data.length
#   #.........................................................................................................
#   echo '——————————————————————————————————————————————————————————————————————————————'
#   d = new D()
#   d.data.push 5
#   d.data.push 6
#   d.data.push 7
#   debug 'Ωidsp__24', d
#   debug 'Ωidsp__25', d.length
#   #.........................................................................................................
#   return null

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
