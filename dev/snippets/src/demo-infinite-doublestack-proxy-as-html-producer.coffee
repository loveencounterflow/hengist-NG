

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


############################################################################################################
#
#===========================================================================================================
class Raw

  #---------------------------------------------------------------------------------------------------------
  constructor: ( text ) ->
    @data = text
    return undefined
  toString: -> @data

#-----------------------------------------------------------------------------------------------------------
class Stack

  #---------------------------------------------------------------------------------------------------------
  constructor: ->
    @data = []
    return undefined

  #---------------------------------------------------------------------------------------------------------
  push:     ( x ) -> @data.push x; null
  unshift:  ( x ) -> @data.unshift x; null
  #---------------------------------------------------------------------------------------------------------
  pop:   ( fallback = misfit ) ->
  shift: ( fallback = misfit ) ->
  peek:  ( fallback = misfit ) ->

#-----------------------------------------------------------------------------------------------------------
class Doublestack

  #---------------------------------------------------------------------------------------------------------
  constructor: ->
    @stacks = []
    return undefined

  #---------------------------------------------------------------------------------------------------------
  push_new_stack:     -> @stacks.push    []; null
  # unshift_new_stack:  -> @stacks.unshift []; null
  #---------------------------------------------------------------------------------------------------------
  pop_old_stack:    ( fallback = misfit ) ->
  shift_old_stack:  ( fallback = misfit ) ->
  peek_stack:       ( fallback = misfit ) -> @stacks.at -1

  stackofstacks     = []
  get_stack         = -> stackofstacks.at -1
  push_new_stack    = -> stackofstacks.push []; get_stack()
  pop_old_stack     = -> stackofstacks.pop()
  get_stack_length  = -> stackofstacks.length

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
    @eq ( Ωidsp___1 = -> fn()             ), false
    @eq ( Ωidsp___2 = -> fn [ 1, 2, 3, ]  ), false
    @eq ( Ωidsp___3 = -> fn"[ 1, 2, 3, ]" ), true
    return null
  #.........................................................................................................
  do test_escape_html_text = =>
    { escape_html_text, } = require_escape_html_text()
    @eq ( Ωidsp___4 = -> escape_html_text ''                    ), ''
    @eq ( Ωidsp___5 = -> escape_html_text 'abc'                 ), 'abc'
    @eq ( Ωidsp___6 = -> escape_html_text 'abc<tag>d&e&f</tag>' ), 'abc&lt;tag&gt;d&amp;e&amp;f&lt;/tag&gt;'
    return null
  #.........................................................................................................
  do test_html_safe_text_from_tagged_template_call = =>
    fn = html_safe_text_from_tagged_template_call
    @eq ( Ωidsp___7 = -> fn''                           ), ''
    @eq ( Ωidsp___8 = -> fn'abc'                        ), 'abc'
    @eq ( Ωidsp___9 = -> fn'abc<tag>d&e&f</tag>'        ), 'abc<tag>d&e&f</tag>'
    @eq ( Ωidsp__10 = -> fn"(#{'abc<tag>d&e&f</tag>'})" ), '(abc&lt;tag&gt;d&amp;e&amp;f&lt;/tag&gt;)'
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

