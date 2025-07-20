
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


#===========================================================================================================
### NOTE Future Single-File Module ###
require_nameit = ->
  nameit = ( name, fn ) -> Object.defineProperty fn, 'name', { value: name, }; fn
  #---------------------------------------------------------------------------------------------------------
  return { nameit, }

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
require_html_class = ->

  #---------------------------------------------------------------------------------------------------------
  class Html

    #-------------------------------------------------------------------------------------------------------
    constructor: ( name, atrs, content ) ->
      @name     = name
      @atrs     = atrs    ? new Map()
      @content  = content ? []
      return undefined

    #-------------------------------------------------------------------------------------------------------
    toString: ->
      R = []
      R.push "<#{name}"
      R.push " ATRs"
      R.push ">"
      R.push e for e in content
      R.push "</#{name}>"
      return R.join ''
  return { Html, }


#===========================================================================================================
require_tagfun_tools = ->

  #---------------------------------------------------------------------------------------------------------
  is_tagfun_call = ( P... ) ->
    return false unless Array.isArray   P[ 0 ]
    return false unless Object.isFrozen P[ 0 ]
    return false unless P[ 0 ].raw?
    return true

  #---------------------------------------------------------------------------------------------------------
  walk_raw_parts = ( chunks, values... ) ->
    chunks      = ( chunk for chunk in chunks.raw )
    chunks.raw  = chunks[ ... ]
    Object.freeze chunks
    yield from walk_parts chunks, values...

  #---------------------------------------------------------------------------------------------------------
  walk_parts = ( chunks, values... ) ->
    unless is_tagfun_call chunks, values...
      if values.length isnt 0
        throw new Error "Ω__16 expected 1 argument in non-template call, got #{arguments.length}"
      if typeof chunks is 'string' then [ chunks, values, ] = [ [ chunks, ], [],          ]
      else                              [ chunks, values, ] = [ [ '', '', ], [ chunks, ], ]
    #.......................................................................................................
    yield { chunk: chunks[ 0 ], isa: 'chunk', }
    for value, idx in values
      yield { value, isa: 'value', }
      yield { chunk: chunks[ idx + 1 ], isa: 'chunk', }
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  walk_raw_nonempty_parts = ( chunks, values... ) ->
    for part from walk_raw_parts chunks, values...
      yield part unless ( part.chunk is '' ) or ( part.value is '' )
    return null

  #---------------------------------------------------------------------------------------------------------
  walk_nonempty_parts = ( chunks, values... ) ->
    for part from walk_parts chunks, values...
      yield part unless ( part.chunk is '' ) or ( part.value is '' )
    return null

  #---------------------------------------------------------------------------------------------------------
  return { is_tagfun_call, walk_parts, walk_nonempty_parts, walk_raw_parts, walk_raw_nonempty_parts, }

#===========================================================================================================
tests =
  walk_tagfun_call_parts: ->
    # { Html,                     } = require_html_class()
    # { escape_html_text,         } = require_escape_html_text()
    # { stackable_tagfun,         } = require_stackable_tagfun()
    { walk_parts,
      walk_nonempty_parts,
      walk_raw_parts,
      walk_raw_nonempty_parts,  } = require_tagfun_tools()
    #-------------------------------------------------------------------------------------------------------
    @eq ( Ωt__17 = -> [ ( walk_parts""                  )..., ] ), [ { chunk: '', isa: 'chunk', }, ]
    @eq ( Ωt__18 = -> [ ( walk_parts ""                 )..., ] ), [ { chunk: '', isa: 'chunk', }, ]
    @eq ( Ωt__19 = -> [ ( walk_nonempty_parts""         )..., ] ), []
    @eq ( Ωt__20 = -> [ ( walk_nonempty_parts ''        )..., ] ), []
    @eq ( Ωt__21 = -> [ ( walk_parts"a"                 )..., ] ), [ { chunk: 'a', isa: 'chunk', }, ]
    @eq ( Ωt__22 = -> [ ( walk_parts"\na"               )..., ] ), [ { chunk: '\na', isa: 'chunk', }, ]
    @eq ( Ωt__23 = -> [ ( walk_raw_parts"\na"           )..., ] ), [ { chunk: '\\na', isa: 'chunk', }, ]
    @eq ( Ωt__24 = -> [ ( walk_parts"#{1}"              )..., ] ), [ { chunk: '', isa: 'chunk', }, { value: 1, isa: 'value', }, { chunk: '', isa: 'chunk', }, ]
    @eq ( Ωt__25 = -> [ ( walk_nonempty_parts"#{1}"     )..., ] ), [ { value: 1, isa: 'value', }, ]
    @eq ( Ωt__26 = -> [ ( walk_parts"a#{1}"             )..., ] ), [ { chunk: 'a', isa: 'chunk', }, { value: 1, isa: 'value', }, { chunk: '', isa: 'chunk', }, ]
    @eq ( Ωt__27 = -> [ ( walk_parts"#{1}#{2}"          )..., ] ), [ { chunk: '', isa: 'chunk', }, { value: 1, isa: 'value', }, { chunk: '', isa: 'chunk', }, { value: 2, isa: 'value', }, { chunk: '', isa: 'chunk', } ]
    @eq ( Ωt__28 = -> [ ( walk_nonempty_parts"#{1}#{2}" )..., ] ), [ { value: 1, isa: 'value', }, { value: 2, isa: 'value', }, ]
    @eq ( Ωt__29 = -> [ ( walk_parts"a#{1}z"            )..., ] ), [ { chunk: 'a', isa: 'chunk', }, { value: 1, isa: 'value', }, { chunk: 'z', isa: 'chunk', }, ]
    @eq ( Ωt__30 = -> [ ( walk_parts"a#{1}z#{2}"        )..., ] ), [ { chunk: 'a', isa: 'chunk', }, { value: 1, isa: 'value', }, { chunk: 'z', isa: 'chunk', }, { value: 2, isa: 'value', }, { chunk: '', isa: 'chunk', }, ]
    @eq ( Ωt__31 = -> [ ( walk_parts "a#{1}z#{2}"       )..., ] ), [ { chunk: 'a1z2', isa: 'chunk', }, ]
    @eq ( Ωt__32 = -> [ ( walk_parts 12                 )..., ] ), [ { chunk: '', isa: 'chunk', }, { value: 12, isa: 'value', }, { chunk: '', isa: 'chunk', }, ]
    @eq ( Ωt__33 = -> [ ( walk_nonempty_parts 12        )..., ] ), [ { value: 12, isa: 'value', }, ]
    #.........................................................................................................
    return null


#===========================================================================================================
if module is require.main then await do =>
  # demo_infinite_proxy()
  # demo_colorful_proxy()
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  # ( new Test guytest_cfg ).test { demo_stackable_tagfun_with_zwnbsp, }
  ( new Test guytest_cfg ).test { tests, }
