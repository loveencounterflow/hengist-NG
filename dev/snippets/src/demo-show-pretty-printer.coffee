


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
  whisper }               = GUY.trm.get_loggers 'demo-execa'
{ rpr
  inspect
  echo
  white
  gold
  red
  reverse
  log     }               = GUY.trm
PATH                      = require 'node:path'
{ execa
  $ }                     = require 'execa'
{ f }                     = require '../../../apps/effstring'
write                     = ( p ) -> process.stdout.write p
TMPTRM                    = GUY.trm

###
black
blue
green
cyan
sepia
indigo
steel
brown
olive
lime
red
crimson
plum
pink
orange
gold
tan
yellow
grey
darkgrey
white
BASE03
BASE02
BASE01
BASE00
BASE0
BASE1
BASE2
BASE3
YELLOW
ORANGE
RED
MAGENTA
VIOLET
BLUE
CYAN
GREEN
###

# debug 'Ω___1', require 'execa'
# debug 'Ω___2', execa
# debug 'Ω___3', $
# debug 'Ω___4', $.sync
# # { $: zx, cd: zx_cd }      = require 'zx'

#===========================================================================================================
demo_execa = ->
  # debug 'Ω___5', d for d from await execa"trash nosuchfile"
  count = 0
  # for await line from ( execa { cwd: '/home/flow/jzr/bing-image-creator-downloader', } )"cat /usr/share/dict/ngerman"
  lines = ( $.sync { cwd: '/home/flow/jzr/bing-image-creator-downloader', } )"ls -AlF"
  lines = lines.stdout
  lines = lines.split '\n'
  # for line from ( $.sync { cwd: '/home/flow/jzr/bing-image-creator-downloader', } )"ls -AlF"
  for line from lines
    count++; break if count > 10000
    help 'Ω___6', rpr line
  return null

#-----------------------------------------------------------------------------------------------------------
object_prototype  = Object.getPrototypeOf {}
pod_prototypes    = [ null, object_prototype, ]

#-----------------------------------------------------------------------------------------------------------
type_of = ( x ) ->
  #.........................................................................................................
  ### Primitives: ###
  return 'null'         if x is null
  return 'undefined'    if x is undefined
  return 'infinity'     if ( x is +Infinity ) or ( x is -Infinity )
  # return 'boolean'      if ( x is true ) or ( x is false )
  return 'true'         if ( x is true )
  return 'false'        if ( x is false )
  return 'nan'          if Number.isNaN     x
  return 'float'        if Number.isFinite  x
  # return 'unset'        if x is unset
  return 'pod'          if ( Object.getPrototypeOf x ) in pod_prototypes
  #.........................................................................................................
  switch jstypeof = typeof x
    when 'string'                       then return 'text'
    when 'symbol'                       then return 'symbol'
  #.........................................................................................................
  return 'list'         if Array.isArray  x
  ### TAINT consider to return x.constructor.name ###
  switch millertype = ( ( Object::toString.call x ).replace /^\[object ([^\]]+)\]$/, '$1' ).toLowerCase()
    when 'regexp'                       then return 'regex'
  return millertype
  # switch millertype = Object::toString.call x
  #   when '[object Function]'            then return 'function'
  #   when '[object AsyncFunction]'       then return 'asyncfunction'
  #   when '[object GeneratorFunction]'   then return 'generatorfunction'

#===========================================================================================================
### thx to https://github.com/sindresorhus/identifier-regex ###
jsid_re   = ///^ [ $ _ \p{ID_Start} ] [ $ _ \u200C \u200D \p{ID_Continue} ]* $///v
isa_jsid  = ( x ) -> ( ( typeof x ) is 'string' ) and jsid_re.test x


#===========================================================================================================
class Show

  #---------------------------------------------------------------------------------------------------------
  constructor: ->
    me = ( x ) ->
      for text from me.dispatch x
        me.state.ended_with_nl = text.endsWith '\n'
        yield text
      unless me.state.ended_with_nl
        me.state.ended_with_nl = true
        yield '\n'
      return null
    Object.setPrototypeOf me, @
    @state  = { level: 0, ended_with_nl: false, }
    @spacer = '\x20\x20'
    Object.defineProperty @, 'dent',
      get: => @spacer.repeat @state.level
    return me

  #---------------------------------------------------------------------------------------------------------
  go_down: ->
    @state.level++
    return @state.level

  #---------------------------------------------------------------------------------------------------------
  go_up: ->
    if @state.level < 1
      throw new Error "Ω___7 unable to go below level 0"
    @state.level--
    return @state.level

  #---------------------------------------------------------------------------------------------------------
  dispatch: ( x ) ->
    if ( method = @[ "show_#{type_of x}" ] )?
      yield from method.call @, x
    else
      yield from @show_other x
    return null

  #---------------------------------------------------------------------------------------------------------
  _show_key: ( key ) ->
    if isa_jsid key then return TMPTRM.cyan key
    return [ ( t for t from @dispatch key )..., ].join ''

  #---------------------------------------------------------------------------------------------------------
  show_pod: ( x ) ->
    has_keys = false
    yield TMPTRM.gold '{'
    #.......................................................................................................
    for key, value of x
      ### TAINT code duplication ###
      has_keys = true
      yield ' ' + ( @_show_key key ) + TMPTRM.gold ': '
      for text from @dispatch value
        yield text
      yield TMPTRM.gold ','
    #.......................................................................................................
    yield TMPTRM.gold if ( not has_keys ) then '}' else ' }'
    return null

  #---------------------------------------------------------------------------------------------------------
  show_map: ( x ) ->
    has_keys = false
    yield TMPTRM.gold 'map{'
    #.......................................................................................................
    for [ key, value, ] from x.entries()
      ### TAINT code duplication ###
      has_keys = true
      yield ' ' + ( @_show_key key ) + TMPTRM.gold ': '
      for text from @dispatch value
        yield text
      yield TMPTRM.gold ','
    #.......................................................................................................
    yield TMPTRM.gold if ( not has_keys ) then '}' else ' }'
    return null

  #---------------------------------------------------------------------------------------------------------
  show_list: ( x ) ->
    yield TMPTRM.gold '['
    for element in x
      ### TAINT code duplication ###
      for text from @dispatch element
        yield ' ' + text + ( TMPTRM.gold ',' )
    yield TMPTRM.gold if ( x.length is 0 ) then ']' else ' ]'
    return null

  #---------------------------------------------------------------------------------------------------------
  show_set: ( x ) ->
    yield TMPTRM.gold 'set['
    for element from x.keys()
      ### TAINT code duplication ###
      for text from @dispatch element
        yield ' ' + text + TMPTRM.gold ','
    yield TMPTRM.gold if ( x.length is 0 ) then ']' else ' ]'
    return null

  #---------------------------------------------------------------------------------------------------------
  show_text: ( x ) ->
    if '"' in x then  yield ( TMPTRM.green "'" ) + ( TMPTRM.green x.replace /'/g, "\\'" ) + ( TMPTRM.green "'" )
    else              yield ( TMPTRM.green '"' ) + ( TMPTRM.green x.replace /"/g, '\\"' ) + ( TMPTRM.green '"' )
    return null

  #---------------------------------------------------------------------------------------------------------
  show_float: ( x ) ->
    yield ( TMPTRM.crimson x.toString() )
    return null

  #---------------------------------------------------------------------------------------------------------
  show_regex: ( x ) ->
    yield ( TMPTRM.plum x.toString() )
    return null

  #---------------------------------------------------------------------------------------------------------
  ### full words: ###
  show_true:      ( x ) -> yield ( TMPTRM.reverse TMPTRM.bold TMPTRM.lime   'true'      )
  show_false:     ( x ) -> yield ( TMPTRM.reverse TMPTRM.bold TMPTRM.ORANGE 'false'     )
  show_undefined: ( x ) -> yield ( TMPTRM.reverse TMPTRM.bold TMPTRM.BLUE   'null'      )
  show_null:      ( x ) -> yield ( TMPTRM.reverse TMPTRM.bold TMPTRM.pink   'undefined' )
  show_nan:       ( x ) -> yield ( TMPTRM.reverse TMPTRM.bold TMPTRM.pink   'NaN'       )
  ### (mostly) single letters: ###
  # show_true:      ( x ) -> yield ( TMPTRM.reverse TMPTRM.bold TMPTRM.lime   ' T '     )
  # show_false:     ( x ) -> yield ( TMPTRM.reverse TMPTRM.bold TMPTRM.ORANGE ' F '     )
  # show_undefined: ( x ) -> yield ( TMPTRM.reverse TMPTRM.bold TMPTRM.BLUE   ' N '     )
  # show_null:      ( x ) -> yield ( TMPTRM.reverse TMPTRM.bold TMPTRM.pink   ' U '     )
  # show_nan:       ( x ) -> yield ( TMPTRM.reverse TMPTRM.bold TMPTRM.pink   ' NaN '   )

  #---------------------------------------------------------------------------------------------------------
  show_other: ( x ) ->
    # yield '\n' unless @state.ended_with_nl
    yield TMPTRM.reverse TMPTRM.red "#{x}"
    return null

#===========================================================================================================
demo_show = ->
  show = new Show()
  debug 'Ω___8', show
  debug 'Ω___9', show.state
  debug 'Ω__10', rpr show.dent
  debug 'Ω__11', show.go_down()
  debug 'Ω__12', rpr show.dent
  echo()
  echo '-----------------------------------------------'
  write r for r from show "foo 'bar'"
  echo '-----------------------------------------------'
  write r for r from show {}
  echo '-----------------------------------------------'
  write r for r from show { kong: 108, low: 923, }
  echo '-----------------------------------------------'
  write r for r from show { kong: 108, low: 923, numbers: [ 10, 11, 12, ], }
  echo '-----------------------------------------------'
  write r for r from show []
  echo '-----------------------------------------------'
  write r for r from show [ 'some', 'words', 'to', 'show', ]
  echo '-----------------------------------------------'
  write r for r from show new Map [ [ 'kong', 108, ], [ 'low', 923, ], [ 971, 'word', ], [ true, '+1', ], [ 'a b c', false, ] ]
  echo '-----------------------------------------------'
  write r for r from show new Set [ 'some', 'words', true, false, null, undefined, 3.1415926, NaN, ]
  echo '-----------------------------------------------'
  write r for r from show /abc[de]/
  echo '-----------------------------------------------'
  echo()
  return null


#===========================================================================================================
if module is require.main then await do =>
  # await demo_execa()
  demo_show()


# f = ->
#   ### NOTE commit ID can be shortened ###
#   "https://raw.githubusercontent.com/loveencounterflow/mirror-github-file-to-local/7fccc7ec115302ab4d1e44e0a4c78b60d8215d94/index.js"
#   "https://raw.githubusercontent.com/#{user_and_repo}/7fccc7ec115302ab4d1e44e0a4c78b60d8215d94/#{relative_path}"



