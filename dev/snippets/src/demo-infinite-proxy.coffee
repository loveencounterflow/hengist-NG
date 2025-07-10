


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
C                         = require 'ansis'
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
    # debug 'Ω___1', P
    R = "#{stack.join '.'}::#{rpr P}"
    stack.length = 0
    return R
  p = new_infiniproxy base, { is_initial: true, }
  debug 'Ω___2', p
  debug 'Ω___3', p.arc
  info 'Ω___4', p.arc.bo.cy 8
  #.........................................................................................................
  ### These calls will be `stack`ed but then get thrown away as soon as any property of `p` is used: ###
  p.ooops;  debug 'Ω___5', stack
  p.wat;    debug 'Ω___6', stack
  p.nö;     debug 'Ω___7', stack
  info 'Ω___8', p"some text"
  debug 'Ω___9', stack
  #.........................................................................................................
  info 'Ω__10', p.arc.bo.cy"some text"
  info 'Ω__11', p.arc.bo.cy.dean.blah"some text"
  ### Building the chain: ###
  chain = p.arc.bo.cy
  chain.dean.blah
  chain.and.then.some
  info 'Ω__12', p "finally, a call"
  return null

#===========================================================================================================
demo_colorful_proxy = ->
  class TMP_error extends Error
  stack = []
  #.........................................................................................................
  template =
    bearer:       null
    base:         null
    is_initial:   false
  #.........................................................................................................
  new_infiniproxy = nfa { template, }, ( bearer, base, is_initial, cfg ) ->
    proxy = new Proxy base,
      get: ( target, key ) ->
        return target[ key ] if ( typeof key ) is 'symbol'
        unless Reflect.has bearer, key
          throw new TMP_error "Ω__13 unknown key #{rpr key}"
        stack.length = 0 if is_initial
        stack.push key
        return R
    if is_initial then  R = new_infiniproxy { bearer, base, is_initial: false, }
    else                R = proxy
    return proxy
  #.........................................................................................................
  resolve = ( bearer, stack ) ->
    R = bearer
    while stack.length > 0
      R = R[ stack.pop() ]
    return R
  #.........................................................................................................
  base = ( P... ) ->
    # method = resolve C, stack
    # return method P[ 0 ]
    R = P[ 0 ]
    while stack.length > 0
      key = stack.pop()
      R   = C[ key ] R
    return R
  #.........................................................................................................
# @blink                    = "\x1b[5m"
# @bold                     = "\x1b[1m"
# @reverse                  = "\x1b[7m"
# @underline                = "\x1b[4m"

# #-----------------------------------------------------------------------------------------------------------
# # Effects Off
# #...........................................................................................................
# @no_blink                 = "\x1b[25m"
# @no_bold                  = "\x1b[22m"
# @no_reverse               = "\x1b[27m"
# @no_underline             = "\x1b[24m"
  #.........................................................................................................
  # C =
  #   blink: ( x ) ->
  #     debug 'Ω__15', rpr x
  #     return '---'
  # Object.setPrototypeOf C, C
  extension =
    blink: ( x ) ->
      debug 'Ω__16', rpr x
      return '---'
  #.........................................................................................................
  p = new_infiniproxy C, base, { is_initial: true, }
  info 'Ω__17', p.green.bold.inverse " holy moly "
  # info 'Ω__18', p.green.bold.inverse.blink " holy moly "
  #.........................................................................................................
  info 'Ω__19', p.yellow.italic"some text"
  info 'Ω__20', p.green.bold.inverse.underline"some text"
  ### Building the chain: ###
  chain = p.cyan.bold
  chain.underline
  info 'Ω__21', p "finally, a call"
  return null


#===========================================================================================================
if module is require.main then await do =>
  demo_proxy()
  echo '——————————————————————————————————————————————————————————————————————————————'
  echo()
  demo_colorful_proxy()
  echo()

