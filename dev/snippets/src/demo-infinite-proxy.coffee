


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
A                         = require 'ansis'


#===========================================================================================================
demo_proxy = ->
  stack = []
  new_infiniprox_B = ( base ) ->
    R = new Proxy base,
      get: ( target, key ) ->
        return target[ key ] if ( typeof key ) is 'symbol'
        debug 'Ω___1', ( A.green.inverse.bold ' B ' ), { target, key, }, stack
        stack.push key
        return R
    return R
  new_infiniprox = ( base ) ->
    R = new_infiniprox_B base
    return new Proxy base,
      get: ( target, key ) ->
        return target[ key ] if ( typeof key ) is 'symbol'
        debug 'Ω___1', ( A.red.inverse.bold ' A ' ), { target, key, }, stack
        stack.length = 0
        stack.push key
        return R
    return R
  #.........................................................................................................
  base = ( P... ) ->
    debug 'Ω___2', P
    R = "#{stack.join '.'}::#{rpr P}"
    stack.length = 0
    return R
  p = new_infiniprox base
  info 'Ω___3', p
  info 'Ω___4', p.arc
  # info 'Ω___5', p.arc.bo
  # info 'Ω___6', p.arc.bo.cy
  info 'Ω___7', p.arc.bo.cy 8
  info 'Ω___8', p.ooops
  info 'Ω___9', p.wat
  info 'Ω___9', p.nö
  info 'Ω__10', p.arc.bo.cy"some text"
  info 'Ω__10', p.arc.bo.cy.dean.blah"some text"
  return null


#===========================================================================================================
if module is require.main then await do =>
  demo_proxy()
