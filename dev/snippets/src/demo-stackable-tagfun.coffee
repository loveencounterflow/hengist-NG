
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
demo_stackable_tagfun_with_zwnbsp = ->
  #===========================================================================================================
  require_stackable_tagfun = ->
    { nameit, } = require_nameit()
    template    =
      name:       '(anonymous)'
      as_text:    ( x ) -> "#{x}"
      transform:  ( x ) -> x
    #.........................................................................................................
    create_stackable_tagfun = ( cfg ) ->
      { name,
        as_text,
        transform, }  = { template..., cfg..., }
      #.......................................................................................................
      stackable_tagfun = ( parts, expressions... ) ->
        debug 'Ω___1', ( rpr parts[ 0 ] )
        R = parts[ 0 ]
        for expression, idx in expressions
          R += ( as_text expression ) + parts[ idx + 1 ]
        R = transform R
        return R
      #.......................................................................................................
      nameit name, stackable_tagfun
      stackable_tagfun.create = create_stackable_tagfun
      return stackable_tagfun
    #.........................................................................................................
    return { stackable_tagfun: create_stackable_tagfun(), }
  #===========================================================================================================
  echo '——————————————————————————————————————————————————————————————————————————————'
  { stackable_tagfun, } = require_stackable_tagfun()
  P = stackable_tagfun.create
    name:       'parenthesize'
    as_text:    ( expression  ) ->
      expression = "#{expression}" unless ( typeof expression ) is 'string'
      expression = expression[ 1 .. ] if expression.startsWith zwnbsp
      return expression
    transform:  ( result      ) -> "#{zwnbsp}(#{result})"
  zwnbsp = '\ufeff' ### Zero-Width Non-Breaking Space; a no-op at the start of a text ###
  info 'Ω___2', rpr P"first!"
  info 'Ω___3',     P"second"
  info 'Ω___4', rpr P"abc#{P"jkl"}xyz"
  info 'Ω___5', rpr P"abc#{P"jkl"}mno#{P"pqr#{P"stu"}"}xyz"
  info 'Ω___6', rpr P"abc#{P"jkl"}mno#{P"pqr#{P"stu"}"}xyz".replace /\ufeff/gv, '█'
  info 'Ω___7', rpr Array.from P"abc"
  info 'Ω___8', rpr ( ( Array.from P"abc" )[ 0 ].codePointAt 0 ).toString 16
  #.........................................................................................................
  return null

#===========================================================================================================
demo_stackable_tagfun_with_object = ->
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
  require_stackable_tagfun = ->
    { nameit,           } = require_nameit()
    template =
      name:       '(anonymous)'
      as_text:    ( x ) -> "#{x}"
      transform:  ( x ) -> x
    #.........................................................................................................
    create_stackable_tagfun = ( cfg ) ->
      { name,
        as_text,
        transform, }  = { template..., cfg..., }
      #.......................................................................................................
      stackable_tagfun = ( parts, expressions... ) ->
        debug 'Ω___9', ( rpr parts[ 0 ] )
        R = ( as_text parts[ 0 ] )
        for expression, idx in expressions
          R += ( as_text expression ) + ( as_text parts[ idx + 1 ] )
        R = transform R
        return R
      #.......................................................................................................
      nameit name, stackable_tagfun
      stackable_tagfun.create = create_stackable_tagfun
      return stackable_tagfun
    #.........................................................................................................
    return { stackable_tagfun: create_stackable_tagfun(), }
  #===========================================================================================================
  { Html,             } = require_html_class()
  { escape_html_text, } = require_escape_html_text()
  { stackable_tagfun, } = require_stackable_tagfun()
  # P = stackable_tagfun.create
  #   name:       'parenthesize'
  #   as_text:    ( expression  ) ->
  #     return expression if expression instanceof Html
  #     expression = "#{expression}" unless typeof expression is 'string'
  #     return escape_html_text expression
  #   transform:  ( result      ) -> "#{zwnbsp}(#{result})"
  # info 'Ω__10', rpr P"first!"
  # info 'Ω__11',     P"second"
  # info 'Ω__12', rpr P"abc#{P"jkl"}xyz"
  # info 'Ω__13', rpr P"abc#{P"jkl"}mno#{P"pqr#{P"stu"}"}xyz"
  # info 'Ω__14', rpr Array.from P"abc"
  # info 'Ω__15', rpr ( ( Array.from P"abc" )[ 0 ].codePointAt 0 ).toString 16
  #---------------------------------------------------------------------------------------------------------
  is_tagfun_call = ( P... ) ->
    return false unless Array.isArray   P[ 0 ]
    return false unless Object.isFrozen P[ 0 ]
    return false unless P[ 0 ].raw?
    return true
  #---------------------------------------------------------------------------------------------------------
  walk_raw_chunks_and_values = ( chunks, values... ) ->
    chunks      = ( chunk for chunk in chunks.raw )
    chunks.raw  = chunks[ ... ]
    Object.freeze chunks
    return walk_chunks_and_values chunks, values...
  #---------------------------------------------------------------------------------------------------------
  walk_chunks_and_values = ( chunks, values... ) ->
    unless is_tagfun_call chunks, values...
      if values.length isnt 0
        throw new Error "Ω__16 expected 1 argument in non-template call, got #{arguments.length}"
      if typeof chunks is 'string' then [ chunks, values, ] = [ [ chunks, ], [],          ]
      else                              [ chunks, values, ] = [ [ '', '', ], [ chunks, ], ]
    #.......................................................................................................
    lidx = -1
    ridx = chunks.length + values.length
    #.......................................................................................................
    lidx++; ridx--
    yield { chunk: chunks[ 0 ], isa: 'chunk', lidx, ridx, }
    for value, idx in values
      lidx++; ridx--
      yield { value, isa: 'value', lidx, ridx, }
      lidx++; ridx--
      yield { chunk: chunks[ idx + 1 ], isa: 'chunk', lidx, ridx, }
    #.......................................................................................................
    return null
  echo '——————————————————————————————————————————————————————————————————————————————'
  @eq ( Ωt__17 = -> [ ( walk_chunks_and_values""           )..., ] ), [ { chunk: '', isa: 'chunk', lidx: 0, ridx: 0 }, ]
  @eq ( Ωt__18 = -> [ ( walk_chunks_and_values"a"          )..., ] ), [ { chunk: 'a', isa: 'chunk', lidx: 0, ridx: 0 }, ]
  @eq ( Ωt__19 = -> [ ( walk_chunks_and_values"\na"        )..., ] ), [ { chunk: '\na', isa: 'chunk', lidx: 0, ridx: 0 }, ]
  @eq ( Ωt__20 = -> [ ( walk_raw_chunks_and_values"\na"    )..., ] ), [ { chunk: '\\na', isa: 'chunk', lidx: 0, ridx: 0 }, ]
  @eq ( Ωt__21 = -> [ ( walk_chunks_and_values"#{1}"       )..., ] ), [ { chunk: '', isa: 'chunk', lidx: 0, ridx: 2 }, { value: 1, isa: 'value', lidx: 1, ridx: 1 }, { chunk: '', isa: 'chunk', lidx: 2, ridx: 0 }, ]
  @eq ( Ωt__22 = -> [ ( walk_chunks_and_values"a#{1}"      )..., ] ), [ { chunk: 'a', isa: 'chunk', lidx: 0, ridx: 2 }, { value: 1, isa: 'value', lidx: 1, ridx: 1 }, { chunk: '', isa: 'chunk', lidx: 2, ridx: 0 }, ]
  @eq ( Ωt__23 = -> [ ( walk_chunks_and_values"a#{1}z"     )..., ] ), [ { chunk: 'a', isa: 'chunk', lidx: 0, ridx: 2 }, { value: 1, isa: 'value', lidx: 1, ridx: 1 }, { chunk: 'z', isa: 'chunk', lidx: 2, ridx: 0 }, ]
  @eq ( Ωt__24 = -> [ ( walk_chunks_and_values"a#{1}z#{2}" )..., ] ), [ { chunk: 'a', isa: 'chunk', lidx: 0, ridx: 4 }, { value: 1, isa: 'value', lidx: 1, ridx: 3 }, { chunk: 'z', isa: 'chunk', lidx: 2, ridx: 2 }, { value: 2, isa: 'value', lidx: 3, ridx: 1 }, { chunk: '', isa: 'chunk', lidx: 4, ridx: 0 }, ]
  @eq ( Ωt__25 = -> [ ( walk_chunks_and_values "atoz"      )..., ] ), [ { chunk: 'atoz', isa: 'chunk', lidx: 0, ridx: 0 }, ]
  @eq ( Ωt__26 = -> [ ( walk_chunks_and_values 12          )..., ] ), [ { chunk: '', isa: 'chunk', lidx: 0, ridx: 2 }, { value: 12, isa: 'value', lidx: 1, ridx: 1 }, { chunk: '', isa: 'chunk', lidx: 2, ridx: 0 }, ]










  #.........................................................................................................
  return null


#===========================================================================================================
if module is require.main then await do =>
  # demo_infinite_proxy()
  # demo_colorful_proxy()
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  # ( new Test guytest_cfg ).test { demo_stackable_tagfun_with_zwnbsp, }
  ( new Test guytest_cfg ).test { demo_stackable_tagfun_with_object, }
