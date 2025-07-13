

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

#===========================================================================================================
class Raw
  constructor: ( text ) ->
    @data = text
    return undefined
  toString: -> @data

#-----------------------------------------------------------------------------------------------------------
create_html_escaped_text_from_tagged_template_call = ( dont_escape = null ) ->
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
demo_proxy_as_html_producer = ->
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
  #.........................................................................................................
  echo '——————————————————————————————————————————————————————————————————————————————'
  return null

#===========================================================================================================
if module is require.main then await do =>
  # demo_infinite_proxy()
  # demo_colorful_proxy()
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test { demo_proxy_as_html_producer, }
