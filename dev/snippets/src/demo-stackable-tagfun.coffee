
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
  for e from ( walk_chunks_and_values""           ) then info 'Ω__17', e
  echo '——————————————————————————————————————————————————————————————————————————————'
  for e from ( walk_chunks_and_values"a"          ) then info 'Ω__18', e
  echo '——————————————————————————————————————————————————————————————————————————————'
  for e from ( walk_chunks_and_values"\na"        ) then info 'Ω__19', e
  echo '——————————————————————————————————————————————————————————————————————————————'
  for e from ( walk_raw_chunks_and_values"\na"    ) then info 'Ω__20', e
  echo '——————————————————————————————————————————————————————————————————————————————'
  for e from ( walk_chunks_and_values"#{1}"       ) then info 'Ω__21', e
  echo '——————————————————————————————————————————————————————————————————————————————'
  for e from ( walk_chunks_and_values"a#{1}"      ) then info 'Ω__22', e
  echo '——————————————————————————————————————————————————————————————————————————————'
  for e from ( walk_chunks_and_values"a#{1}z"     ) then info 'Ω__23', e
  echo '——————————————————————————————————————————————————————————————————————————————'
  for e from ( walk_chunks_and_values"a#{1}z#{2}" ) then info 'Ω__24', e
  echo '——————————————————————————————————————————————————————————————————————————————'
  for e from ( walk_chunks_and_values "atoz"      ) then info 'Ω__25', e
  echo '——————————————————————————————————————————————————————————————————————————————'
  for e from ( walk_chunks_and_values 12          ) then info 'Ω__26', e
  echo '——————————————————————————————————————————————————————————————————————————————'
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
