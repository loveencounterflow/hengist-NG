


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
  reverse
  log     }               = GUY.trm


#===========================================================================================================
demo = ->
  { default: pLimit,
    limitFunction,        } = require 'p-limit'
  { sleep,
    after,                } = GUY.async
  SFMODULES                 = require '../../../apps/bricabrac-sfmodules'
  { Get_random,           } = SFMODULES.unstable.require_get_random()
  get_random                = new Get_random() # { seed: 88, }
  #.........................................................................................................
  mul = ( a, b ) ->
    c   = a * b
    dt  = get_random.float()
    # await sleep dt
    await sleep 0.1
    whisper 'Ωapl___1', { a, b, c, dt, }
    # help 'Ωapl___2', { a, b, c, }
    return c
  #.........................................................................................................
  # debug 'Ωapl___3', pLimit
  # debug 'Ωapl___4', limitFunction
  limit = pLimit 5
  input = [
    limit -> await sleep get_random.float(); info 'Ωapl___5', R = await mul 1, 9; return R
    limit -> await sleep get_random.float(); info 'Ωapl___6', R = await mul 2, 9; return R
    limit -> await sleep get_random.float(); info 'Ωapl___7', R = await mul 3, 9; return R
    limit -> await sleep get_random.float(); info 'Ωapl___8', R = await mul 4, 9; return R
    limit -> await sleep get_random.float(); info 'Ωapl___9', R = await mul 5, 9; return R
    limit -> await sleep get_random.float(); info 'Ωapl__10', R = await mul 6, 9; return R
    limit -> await sleep get_random.float(); info 'Ωapl__11', R = await mul 7, 9; return R
    limit -> await sleep get_random.float(); info 'Ωapl__12', R = await mul 8, 9; return R
    limit -> await sleep get_random.float(); info 'Ωapl__13', R = await mul 9, 9; return R
    limit -> await sleep get_random.float(); info 'Ωapl__14', R = await mul 10, 9; return R
    ]
  debug 'Ωapl__15', await Promise.all input
  ;null


#===========================================================================================================
if module is require.main then await do =>
  await demo()
  ;null

