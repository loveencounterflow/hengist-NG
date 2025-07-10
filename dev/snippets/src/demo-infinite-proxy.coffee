


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
{ nfa }                   = require '../../../apps/normalize-function-arguments'


#===========================================================================================================
demo_proxy = ->
  stack = []
  #.........................................................................................................
  template =
    base:         null
    is_initial:   false
  #.........................................................................................................
  new_infiniproxy = nfa { template, }, ( base, is_initial, cfg ) ->
    proxy = new Proxy base,
      get: ( target, key ) ->
        return target[ key ] if ( typeof key ) is 'symbol'
        stack.length = 0 if is_initial
        stack.push key
        return R
    if is_initial then  R = new_infiniproxy { base, is_initial: false, }
    else                R = proxy
    return proxy
  #.........................................................................................................
  base = ( P... ) ->
    # debug 'Ω___3', P
    R = "#{stack.join '.'}::#{rpr P}"
    stack.length = 0
    return R
  p = new_infiniproxy base, { is_initial: true, }
  debug 'Ω___4', p
  debug 'Ω___5', p.arc
  info 'Ω___8', p.arc.bo.cy 8
  #.........................................................................................................
  ### These calls will be `stack`ed but then get thrown away as soon as any property of `p` is used: ###
  p.ooops;  debug 'Ω___9', stack
  p.wat;    debug 'Ω__10', stack
  p.nö;     debug 'Ω__11', stack
  info 'Ω__13', p"some text"
  debug 'Ω__14', stack
  #.........................................................................................................
  info 'Ω__15', p.arc.bo.cy"some text"
  info 'Ω__16', p.arc.bo.cy.dean.blah"some text"
  ### Building the chain: ###
  chain = p.arc.bo.cy
  chain.dean.blah
  chain.and.then.some
  info 'Ω__16', p "finally, a call"
  return null


#===========================================================================================================
if module is require.main then await do =>
  demo_proxy()
