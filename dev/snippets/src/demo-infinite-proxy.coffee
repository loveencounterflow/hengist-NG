
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
  stack     = []
  get_proxy = Symbol 'get_proxy'
  #.........................................................................................................
  template =
    base:                     null
    is_initial:               true
    empty_stack_on_new_chain: true
  #.........................................................................................................
  new_infiniproxy = nfa { template, }, ( base, is_initial, cfg ) ->
    is_initial = false unless cfg.empty_stack_on_new_chain
    proxy = new Proxy base,
      get: ( target, key ) ->
        return new_infiniproxy { base, is_initial: false, } if key is get_proxy
        return target[ key ] if ( typeof key ) is 'symbol'
        stack.length = 0 if is_initial
        stack.push key
        return R
    if is_initial then  R = new_infiniproxy { base, is_initial: false, }
    else                R = proxy
    return proxy
  #.........................................................................................................
  base = ( P... ) ->
    R = "#{stack.join '.'}::#{rpr P}"
    stack.length = 0
    return R
  #.........................................................................................................
  ### These calls will be `stack`ed but then get thrown away as soon as any property of `p` is used: ###
  do =>
    echo '——————————————————————————————————————————————————————————————————————————————'
    p = new_infiniproxy base, { empty_stack_on_new_chain: true } ### default ###
    p.ooops;  debug 'Ω___1', stack
    p.wat;    debug 'Ω___2', stack
    p.nö;     debug 'Ω___3', stack
    info 'Ω___4', p.more_of_this"some text"
    debug 'Ω___5', stack
    return null
  #.........................................................................................................
  ### These calls will be `stack`ed and remain on the stack until `p` is called: ###
  do =>
    echo '——————————————————————————————————————————————————————————————————————————————'
    p = new_infiniproxy base, { empty_stack_on_new_chain: false } ### opt-in ###
    p.ooops;  debug 'Ω___6', stack
    p.wat;    debug 'Ω___7', stack
    p.nö;     debug 'Ω___8', stack
    info 'Ω___9', p.more_of_this"some text"
    debug 'Ω__10', stack
    return null
  #.........................................................................................................
  do =>
    echo '——————————————————————————————————————————————————————————————————————————————'
    p = new_infiniproxy base
    info 'Ω__11', p.red.bold.underline"some text"
    ### Some random property retrievals without call... ###
    p.bold.underline
    p.strikethrough.inverse
    ### ...won't influence the meaning of the next property chain: ###
    info 'Ω__12', p.yellow"finally, a call"
    ### But if needed, can always reference a proxy from an intermediate result and build a property chain
    on that; here we used a special unique value `get_proxy` that produces an intermediate result *without*
    adding it to the property chain: ###
    proxy = p[ get_proxy ]
    ### Imagine we go through some branching if/then clauses to decide whether to add some styles: ###
    proxy.bold.underline
    proxy.strikethrough
    proxy.inverse
    proxy.yellow
    ### Finally, we're ready to print: ###
    info 'Ω__13', proxy"this will be printed in bold + underline + strikethrough + inverse + yellow"
    return null
  return null

#===========================================================================================================
demo_proxy_as_html_producer = ->
  ### NOTE in order for nested calls to properly work, it looks like we need a stack of stacks;
  currently
  ```
  H.div"this stuff is #{H.span"cool!"}"
  ```
  returns an empty string.
  ###
  stack       = []
  properties  = new Map()
  get_proxy   = Symbol 'get_proxy'
  #.........................................................................................................
  template =
    base:                     null
    is_initial:               true
    empty_stack_on_new_chain: true
  #.........................................................................................................
  new_infiniproxy = nfa { template, }, ( base, is_initial, cfg ) ->
    is_initial = false unless cfg.empty_stack_on_new_chain
    proxy = new Proxy base,
      get: ( target, key ) ->
        return new_infiniproxy { base, is_initial: false, } if key is get_proxy
        return target[ key ] if ( typeof key ) is 'symbol'
        return target[ key ] if Reflect.has target, key
        stack.length = 0 if is_initial
        stack.push key
        return R
    if is_initial then  R = new_infiniproxy { base, is_initial: false, }
    else                R = proxy
    return proxy
  #.........................................................................................................
  do =>
    echo '——————————————————————————————————————————————————————————————————————————————'
    #.......................................................................................................
    tag_function = ( parts, expressions... ) ->
      debug 'Ω__14', arguments
      R = parts[ 0 ]
      for expression, idx in expressions
        R += expression.toString() + parts[ idx + 1 ]
      R = R.replace /&/g, '&amp;'
      R = R.replace /</g, '&lt;'
      R = R.replace />/g, '&gt;'
      return R
    #.......................................................................................................
    render_html = ( P... ) ->
      is_template_call = ( Array.isArray P[ 0 ] ) and ( Object.isFrozen P[ 0 ] ) and ( P[ 0 ].raw? )
      if is_template_call
        text = tag_function P...
      else
        switch true
          when P.length is 0 then text = ''
          when P.length is 1 then text = tag_function P
          else throw new Error "Ω__15 more than one argument not allowed"
      # debug 'Ω__16', { is_template_call, text, }
      #.....................................................................................................
      R = []
      if stack.length > 0
        tag_name    = stack.shift()
        if stack.length > 0
          class_names = stack.join ' '
          class_rpr   = " class='#{class_names}'"
        else
          class_rpr   = ''
        #...................................................................................................
        R.push "<"
        R.push tag_name
        R.push class_rpr
        #...................................................................................................
        ### properties: ###
        p = do =>
          return '' if properties.size is 0
          _p = []
          for [ property_name, property_value, ] from properties.entries()
            ### TAINT must escape, quote value ###
            property_value_rpr = property_value.replace /'/g, '&apos;'
            _p.push "#{property_name}='#{property_value_rpr}'"
          properties.clear()
          return ' ' + _p.join ' '
        #...................................................................................................
        R.push p
        R.push ">"
        R.push text
        R.push "</"
        R.push tag_name
        R.push ">"
      #.....................................................................................................
      stack.length = 0
      urge 'Ω__10', R
      return R.join ''
    #.......................................................................................................
    render_html.on_click = ( action ) ->
      action = action[ 0 ] if Array.isArray action
      properties.set 'on_click', action
      return @
    #.......................................................................................................
    H = new_infiniproxy render_html
    info 'Ω__17', H.div.big.important"some <arbitrary> text"
    info 'Ω__18', H.div.big.important "some <arbitrary> text"
    info 'Ω__19', H.on_click'send_form()'.xxx ### TAINT wrong result ###
    info 'Ω__20', H.div.on_click'send_form()'.big.important"this value is #{true}"
    info 'Ω__21', H.span"cool!"
    info 'Ω__22', H.div"this stuff is #{"cool!"}"
    info 'Ω__23', H.div"this stuff is #{H.span"cool!"}"
    info 'Ω__24', H.div.on_click'send_form()'"this stuff is #{H.span"cool!"}"
    info 'Ω__25', H.div.on_click'send_form()'.big.important"this stuff is #{H.span"cool!"}"
    return null
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
          throw new TMP_error "Ω__26 unknown key #{rpr key}"
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
  p = new_infiniproxy C, base, { is_initial: true, }
  info 'Ω__27', p.green.bold.inverse " holy moly "
  #.........................................................................................................
  info 'Ω__28', p.yellow.italic"some text"
  info 'Ω__29', p.green.bold.inverse.underline"some text"
  ### Building the chain: ###
  chain = p.cyan.bold
  chain.underline
  info 'Ω__30', p "finally, a call"
  return null




#===========================================================================================================
demo_picocolors_chalk = ->
  do =>
    # info 'Ω__35',     C.yellow"█▒█"
    # info 'Ω__36',     C.yellow"█#{ C.green"▒" }█"
    info 'Ω__37',     C.red"█#{    C.green"▒" }█#{ C.green 'GREEN' }###"
    # info 'Ω__38', rpr C.yellow"█▒█"
    # info 'Ω__39', rpr C.yellow"█#{ C.green"▒" }█"
    info 'Ω__40', rpr C.red"█#{    C.green"▒" }█#{ C.green 'GREEN' }###"
    info 'Ω__41',     C.red"████#{C.green"████#{C.yellow"████"}████"}████"
    info 'Ω__42', rpr C.red"████#{C.green"████#{C.yellow"████"}████"}████"
    return null
  do =>
    #-----------------------------------------------------------------------------------------------------------
    color_codes =
      red:    '\x1B[31m'
      green:  '\x1B[32m'
      yellow: '\x1B[33m'
    color_off = '\x1B[39m'
    #.......................................................................................................
    colorizer_from_color_code = ( color_code ) ->
      R = ( parts, expressions... ) ->
        R = color_code + parts[ 0 ]
        for expression, idx in expressions
          inner = expression.toString().replace /\x1B\[39m$/, ''
          R += ( inner ) + ( color_code + parts[ idx + 1 ] )
        return R + color_off
      return R
    #.......................................................................................................
    red     = colorizer_from_color_code color_codes.red
    green   = colorizer_from_color_code color_codes.green
    yellow  = colorizer_from_color_code color_codes.yellow
    # info 'Ω__61',     red"█#{'▒'}█#{ 'GREEN' }###"
    # info 'Ω__62', rpr red"█#{'▒'}█#{ 'GREEN' }###"
    info 'Ω__63',     red"████#{green"████#{yellow"████"}████"}████"
    info 'Ω__64', rpr red"████#{green"████#{yellow"████"}████"}████"
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
  demo_proxy_as_html_producer()
  echo()
  demo_picocolors_chalk()
  echo()

