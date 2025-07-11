


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
  base = ( P... ) ->
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
  #     debug 'Ω__14', rpr x
  #     return '---'
  # Object.setPrototypeOf C, C
  extension =
    blink: ( x ) ->
      debug 'Ω__15', rpr x
      return '---'
  #.........................................................................................................
  p = new_infiniproxy C, base, { is_initial: true, }
  info 'Ω__16', p.green.bold.inverse " holy moly "
  # info 'Ω__17', p.green.bold.inverse.blink " holy moly "
  #.........................................................................................................
  info 'Ω__18', p.yellow.italic"some text"
  info 'Ω__19', p.green.bold.inverse.underline"some text"
  ### Building the chain: ###
  chain = p.cyan.bold
  chain.underline
  info 'Ω__20', p "finally, a call"
  return null


#===========================================================================================================
demo_commutator = ->
  class TMP_no_such_key_error extends Error
  misfit = Symbol 'misfit'
  #===========================================================================================================
  class Commutator

    #---------------------------------------------------------------------------------------------------------
    constructor: ->
      @bearers  = []
      @cache    = new Map()
      return undefined

    #---------------------------------------------------------------------------------------------------------
    add_bearer: ( x ) -> @bearers.unshift x; return null

    #---------------------------------------------------------------------------------------------------------
    get: ( key, fallback = misfit ) ->
      return R if ( R = @cache.get key )?
      for bearer in @bearers
        continue unless Reflect.has bearer, key
        @cache.set key, R = { bearer, value: bearer[ key ], }
        return R
      return fallback unless fallback is misfit
      throw new TMP_no_such_key_error "Ω__21 unknown key #{rpr key}"

  #===========================================================================================================
  a = { k: 'K', l: 'not this', }
  b = { l: 'L', }
  c = new Commutator()
  c.add_bearer a
  c.add_bearer b
  debug 'Ω__22', c.get 'ttt', null
  debug 'Ω__23', c.get 'k'
  debug 'Ω__24', c.get 'l'
  return null


#===========================================================================================================
demo_picocolors_chalk = ->
  do =>
    # info 'Ω__25',     C.yellow"█▒█"
    # info 'Ω__26',     C.yellow"█#{ C.green"▒" }█"
    info 'Ω__27',     C.red"█#{    C.green"▒" }█#{ C.green 'GREEN' }###"
    # info 'Ω__28', rpr C.yellow"█▒█"
    # info 'Ω__29', rpr C.yellow"█#{ C.green"▒" }█"
    info 'Ω__30', rpr C.red"█#{    C.green"▒" }█#{ C.green 'GREEN' }###"
    return null
  # do =>
  #   P = require 'picocolors'
  #   info 'Ω__31',     P.yellow"█▒█"
  #   info 'Ω__32',     P.yellow"█#{ P.green"▒" }█"
  #   info 'Ω__33',     P.red"█#{    P.green"▒" }█"
  #   info 'Ω__34', rpr P.yellow"█▒█"
  #   info 'Ω__35', rpr P.yellow"█#{ P.green"▒" }█"
  #   info 'Ω__36', rpr P.red"█#{    P.green"▒" }█"
  #   return null
  do =>
    H = ( require 'chalk' ).default
    #-----------------------------------------------------------------------------------------------------------
    red_on    = '\x1B[31m'
    green_on  = '\x1B[32m'
    color_off = '\x1B[39m'
    outer_on  = red_on
    inner_on  = green_on
    hcolor = ( parts, expressions... ) ->
      R = outer_on + parts[ 0 ]
      for expression, idx in expressions
        R += ( inner_on + expression.toString() ) + ( outer_on + parts[ idx + 1 ] )
      return R + color_off
    # info 'Ω__37',     hcolor"█"
    # info 'Ω__38',     hcolor"█#{'▒'}"
    info 'Ω__39',     hcolor"█#{'▒'}█#{ 'GREEN' }###"
    # info 'Ω__40', rpr hcolor"█"
    # info 'Ω__41', rpr hcolor"█#{'▒'}"
    info 'Ω__42', rpr hcolor"█#{'▒'}█#{ 'GREEN' }###"
    # info 'Ω__43',     H.yellow"█▒█"
    # info 'Ω__44',     H.yellow"█#{ H.green"▒" }█"
    # info 'Ω__45',     H.red"█#{    H.green"▒" }█"
    # info 'Ω__46', rpr H.yellow"█▒█"
    # info 'Ω__47', rpr H.yellow"█#{ H.green"▒" }█"
    # info 'Ω__48', rpr H.red"█#{    H.green"▒" }█"
    return null
  return null

# { Chalk: [class Chalk], __esModule: true,
#   backgroundColorNames: [ 'bgBlack', 'bgRed', 'bgGreen', 'bgYellow', 'bgBlue', 'bgMagenta', 'bgCyan', 'bgWhite', 'bgBlackBright', 'bgGray', 'bgGrey', 'bgRedBright', 'bgGreenBright', 'bgYellowBright', 'bgBlueBright', 'bgMagentaBright', 'bgCyanBright', 'bgWhiteBright' ],
#   backgroundColors: [ 'bgBlack', 'bgRed', 'bgGreen', 'bgYellow', 'bgBlue', 'bgMagenta', 'bgCyan', 'bgWhite', 'bgBlackBright', 'bgGray', 'bgGrey', 'bgRedBright', 'bgGreenBright', 'bgYellowBright', 'bgBlueBright', 'bgMagentaBright', 'bgCyanBright', 'bgWhiteBright' ],
#   chalkStderr: { [Function: chalk] createChalk level: 3 },
#   colorNames: [ 'black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'blackBright', 'gray', 'grey', 'redBright', 'greenBright', 'yellowBright', 'blueBright', 'magentaBright', 'cyanBright', 'whiteBright', 'bgBlack', 'bgRed', 'bgGreen', 'bgYellow', 'bgBlue', 'bgMagenta', 'bgCyan', 'bgWhite', 'bgBlackBright', 'bgGray', 'bgGrey', 'bgRedBright', 'bgGreenBright', 'bgYellowBright', 'bgBlueBright', 'bgMagentaBright', 'bgCyanBright', 'bgWhiteBright' ],
#   colors: [ 'black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'blackBright', 'gray', 'grey', 'redBright', 'greenBright', 'yellowBright', 'blueBright', 'magentaBright', 'cyanBright', 'whiteBright', 'bgBlack', 'bgRed', 'bgGreen', 'bgYellow', 'bgBlue', 'bgMagenta', 'bgCyan', 'bgWhite', 'bgBlackBright', 'bgGray', 'bgGrey', 'bgRedBright', 'bgGreenBright', 'bgYellowBright', 'bgBlueBright', 'bgMagentaBright', 'bgCyanBright', 'bgWhiteBright' ],
#   default: { [Function: chalk] createChalk level: 3 }, foregroundColorNames: [ 'black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'blackBright', 'gray', 'grey', 'redBright', 'greenBright', 'yellowBright', 'blueBright', 'magentaBright', 'cyanBright', 'whiteBright' ], foregroundColors: [ 'black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'blackBright', 'gray', 'grey', 'redBright', 'greenBright', 'yellowBright', 'blueBright', 'magentaBright', 'cyanBright', 'whiteBright' ], modifierNames: [ 'reset', 'bold', 'dim', 'italic', 'underline', 'overline', 'inverse', 'hidden', 'strikethrough' ], modifiers: [ 'reset', 'bold', 'dim', 'italic', 'underline', 'overline', 'inverse', 'hidden', 'strikethrough' ], supportsColor: { level: 3, hasBasic: true, has256: true, has16m: true }, supportsColorStderr: { level: 3, hasBasic: true, has256: true, has16m: true } }


#===========================================================================================================
if module is require.main then await do =>
  demo_proxy()
  echo '——————————————————————————————————————————————————————————————————————————————'
  echo()
  demo_colorful_proxy()
  echo()
  demo_commutator()
  echo()
  demo_picocolors_chalk()
  echo()

