
'use strict'

GUY                       = require 'guy'
{ alert
  debug
  help
  info
  plain
  praise
  urge
  warn
  whisper }               = GUY.trm.get_loggers 'bricabrac-sfmodules/test-basics'
{ rpr
  inspect
  echo
  reverse
  log     }               = GUY.trm
# WGUY                      = require '../../../apps/webguy'
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG
{ f }                     = require '../../../apps/effstring'
{ createAsPipes,        } = require 'aspipes'
SFMODULES                 = require '../../../apps/bricabrac-sfmodules'


#===========================================================================================================
demo = ->
  { pipe,
    asPipe,
    take, } = createAsPipes()
  upper         = asPipe ( d              ) -> d.toUpperCase()
  ex            = asPipe ( d, mark = '!'  ) -> d + mark
  greeting      = pipe 'hello'
  # greeting        \
  #   | upper       \
  #   | ex '!!!'
  greeting  + upper
  greeting  + ex '!!!'
  info 'Ωap___1', greeting
  info 'Ωap___2', await greeting.run()
  info 'Ωap___3', await greeting.run()
  info 'Ωap___4', await greeting.run()
  return null

#===========================================================================================================
demo_2 = ->
  { nameit,               } = SFMODULES.require_nameit()
  { type_of,              } = SFMODULES.unstable.require_type_of()
  CFG                       = Symbol 'CFG'
  # misfit                    = Symbol 'misfit'
  #---------------------------------------------------------------------------------------------------------
  class Pipeline
    constructor: ->
      ### TAINT use Object.freeze, push sets new array ###
      @transforms = []
      ### TAINT what happens with empty pipeline? ###
      callable    = ( d ) -> yield from @transforms[ 0 ] d
      Object.setPrototypeOf callable, @
      return callable
  #---------------------------------------------------------------------------------------------------------
  $ = ( cfg, fn ) ->
    fn[CFG] = cfg
    return fn
  #---------------------------------------------------------------------------------------------------------
  push = ( pipeline, gfn ) ->
    switch type = type_of gfn
      when 'function'
        # role = 'watcher'
        original_gfn  = gfn
        gfn           = ( d ) -> original_gfn d; yield d
      when 'generatorfunction'
        null
        # role = 'transform'
      else "throw new Error expect a synchronous function or a synchronous generator function, got a #{type}"
    #.......................................................................................................
    my_idx      = pipeline.length
    first       = null
    last        = null
    has_first   = false
    has_last    = false
    #.......................................................................................................
    if ( cfg = gfn[ CFG ] )?
      has_first   = Reflect.has cfg, 'first'
      has_last    = Reflect.has cfg, 'last'
      first       = cfg.first if has_first
      last        = cfg.last  if has_last
      # debug 'Ωap___5', { first, gfn, }
    #.......................................................................................................
    nxt         = null
    has_nxt     = null
    #.......................................................................................................
    R = nameit gfn.name, ( d ) ->
      unless nxt?
        nxt             = pipeline[ my_idx + 1 ]
        has_nxt         = nxt?
      #.....................................................................................................
      if has_first
        yield from gfn first
      #.....................................................................................................
      for j from gfn d
        if has_nxt then yield from nxt j
        else            yield j
      #.....................................................................................................
      if has_last
        yield from gfn last
      #.....................................................................................................
      return null
    #.......................................................................................................
    pipeline.push R
    return R
  #.........................................................................................................
  do ->
    first                     = Symbol '(first)'
    last                      = Symbol '(last)'
    pipeline  = []
    push pipeline, upper    = ( d              ) -> yield d.toUpperCase()
    push pipeline, ex       = ( d, mark = '!'  ) -> yield d + mark
    # push pipeline, nothing  = ( d              ) -> urge 'Ωap___6', 'nothing:', rpr d; yield return null
    # push pipeline, add      = ( d              ) -> urge 'Ωap___7', 'add:    ', rpr d; yield """Let's say: \""""; yield d; yield '".'
    push pipeline, watch = ( d ) -> help 'Ωap___8', rpr d
    push pipeline, $ { first, last, }, add_2 = ( d ) ->
      # urge 'Ωap___9', 'add_2:    ', rpr d
      return yield """Let's say: \""""  if d is first
      return yield '".'                 if d is last
      yield d
    push pipeline, watch = ( d ) -> urge 'Ωap__10', rpr d
    #.........................................................................................................
    debug 'Ωap__11', pipeline
    info 'Ωap__12', [ ( d for d from pipeline[ 0 ] 'hidey-ho' )..., ]
    info 'Ωap__13', [ ( d for d from pipeline[ 0 ] 'hidey-ho' )..., ].join ''
    info 'Ωap__14', [ ( d for d from pipeline[ 0 ] 'hidey-ho' )..., ].join ''
    return null
  #.........................................................................................................
  return null


#===========================================================================================================
if module is require.main then await do =>
  # await demo()
  await demo_2()
