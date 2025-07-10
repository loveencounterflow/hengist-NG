


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
  gold
  red
  reverse
  log     }               = GUY.trm
{ f }                     = require '../../../apps/effstring'
write                     = ( p ) -> process.stdout.write p


#===========================================================================================================
demo_proxy = ->
  stack = []
  new_infiniprox = ( base ) ->
    R = new Proxy base,
      get: ( target, key ) ->
        return target[ key ] if ( typeof key ) is 'symbol'
        debug 'Ω___1', { target, key, }, stack
        stack.push key
        return R
    return R
  #.........................................................................................................
  base = ( P... ) ->
    debug 'Ω___8', P
    R = stack.join '.'
    stack.length = 0
    return R
  p = new_infiniprox base
  info 'Ω___9', p
  info 'Ω__10', p.arc
  # info 'Ω__11', p.arc.bo
  # info 'Ω__12', p.arc.bo.cy
  info 'Ω__13', p.arc.bo.cy 8
  return null


#===========================================================================================================
if module is require.main then await do =>
  demo_proxy()
