
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
  dec       = ( pipeline, gfn ) ->
    my_idx = pipeline.length
    pipeline.push ( d ) ->
      unless ( successor = pipeline[ my_idx + 1 ] )?
        yield from gfn d
        return null
      for e from gfn d
        yield from successor e
    return null
  pipeline  = []
  dec pipeline, ( d              ) -> debug 'Ωap___5', 'upper:  ', rpr d; yield d.toUpperCase()
  dec pipeline, ( d, mark = '!'  ) -> urge  'Ωap___6', 'ex:     ', rpr d; yield d; yield mark
  debug 'Ωap___7', pipeline
  debug 'Ωap___7', d for d from pipeline[ 0 ] 'hidey-ho'
  return null


#===========================================================================================================
if module is require.main then await do =>
  # await demo()
  await demo_2()
