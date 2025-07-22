
###


## Applications

* **RegEx Builder** (example from [Rejigs blog post](https://medium.com/@omarzawahry/rejigs-making-regular-expressions-human-readable-1fad37cb3eae))

```java
var emailRegex =
    Rejigs.Create()
          .AtStart()
          .OneOrMore(r => r.AnyLetterOrDigit().Or().AnyOf("._%+-"))
          .Text("@")
          .OneOrMore(r => r.AnyLetterOrDigit().Or().AnyOf(".-"))
          .Text(".")
          .AnyLetterOrDigit().AtLeast(2)
          .AtEnd()
          .Build();
```

* **HTML/XML Builer**
* **SQL Builder**: `SQL.insert.into.employees('id','name').values(id,name)`
* **CLI Coloring**
* syntax for a **Type Checker**

###


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
  blue
  gold
  grey
  red
  bold
  reverse
  log     }               = GUY.trm
{ f }                     = require '../../../apps/effstring'
write                     = ( p ) -> process.stdout.write p
C                         = require 'ansis'
{ nfa }                   = require '../../../apps/normalize-function-arguments'
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG
SFMODULES                 = require './single-file-modules'


#===========================================================================================================
SFMODULES.require_infiniproxy = ->
  { Stack,            } = SFMODULES.require_stack_classes()
  # stack                 = new Stack()
  # get_proxy = Symbol 'get_proxy'
  #.........................................................................................................
  template =
    handler:      null
    is_initial:   true
  #.........................................................................................................
  new_infiniproxy = nfa { template, }, ( handler, is_initial, cfg ) ->
    is_initial = false unless cfg.empty_stack_on_new_chain
    proxy = new Proxy handler,
      get: ( target, key ) ->
        return new_infiniproxy { handler, is_initial: false, } if key is get_proxy
        return target[ key ] if ( typeof key ) is 'symbol'
        stack.length = 0 if is_initial
        stack.push key
        return R
    if is_initial then  R = new_infiniproxy { handler, is_initial: false, }
    else                R = proxy
    return proxy


#===========================================================================================================
demo_infinite_proxy = ->
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
    p.ooops;  debug 'Ω___2', stack
    p.wat;    debug 'Ω___3', stack
    p.nö;     debug 'Ω___4', stack
    info 'Ω___5', p.more_of_this"some text"
    debug 'Ω___6', stack
    return null
  #.........................................................................................................
  ### These calls will be `stack`ed and remain on the stack until `p` is called: ###
  do =>
    echo '——————————————————————————————————————————————————————————————————————————————'
    p = new_infiniproxy base, { empty_stack_on_new_chain: false } ### opt-in ###
    p.ooops;  debug 'Ω___7', stack
    p.wat;    debug 'Ω___8', stack
    p.nö;     debug 'Ω___9', stack
    info 'Ω__10', p.more_of_this"some text"
    debug 'Ω__11', stack
    return null
  #.........................................................................................................
  do =>
    echo '——————————————————————————————————————————————————————————————————————————————'
    p = new_infiniproxy base
    info 'Ω__12', p.red.bold.underline"some text"
    ### Some random property retrievals without call... ###
    p.bold.underline
    p.strikethrough.inverse
    ### ...won't influence the meaning of the next property chain: ###
    info 'Ω__13', p.yellow"finally, a call"
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
    info 'Ω__14', proxy"this will be printed in bold + underline + strikethrough + inverse + yellow"
    return null
  return null

# #===========================================================================================================
# demo_picocolors_chalk = ->
#   do =>
#     # info 'Ω__15',     C.yellow"█▒█"
#     # info 'Ω__16',     C.yellow"█#{ C.green"▒" }█"
#     info 'Ω__17',     C.red"█#{    C.green"▒" }█#{ C.green 'GREEN' }###"
#     # info 'Ω__18', rpr C.yellow"█▒█"
#     # info 'Ω__19', rpr C.yellow"█#{ C.green"▒" }█"
#     info 'Ω__20', rpr C.red"█#{    C.green"▒" }█#{ C.green 'GREEN' }###"
#     info 'Ω__21',     C.red"████#{C.green"████#{C.yellow"████"}████"}████"
#     info 'Ω__22', rpr C.red"████#{C.green"████#{C.yellow"████"}████"}████"
#     return null
#   do =>
#     #-----------------------------------------------------------------------------------------------------------
#     color_codes =
#       red:    '\x1B[31m'
#       green:  '\x1B[32m'
#       yellow: '\x1B[33m'
#     color_off = '\x1B[39m'
#     #.......................................................................................................
#     colorizer_from_color_code = ( color_code ) ->
#       R = ( parts, expressions... ) ->
#         R = color_code + parts[ 0 ]
#         for expression, idx in expressions
#           inner = expression.toString().replace /\x1B\[39m$/, ''
#           R += ( inner ) + ( color_code + parts[ idx + 1 ] )
#         return R + color_off
#       return R
#     #.......................................................................................................
#     red     = colorizer_from_color_code color_codes.red
#     green   = colorizer_from_color_code color_codes.green
#     yellow  = colorizer_from_color_code color_codes.yellow
#     # info 'Ω__23',     red"█#{'▒'}█#{ 'GREEN' }###"
#     # info 'Ω__24', rpr red"█#{'▒'}█#{ 'GREEN' }###"
#     info 'Ω__25',     red"████#{green"████#{yellow"████"}████"}████"
#     info 'Ω__26', rpr red"████#{green"████#{yellow"████"}████"}████"
#     return null
#   return null

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
          throw new TMP_error "Ω__27 unknown key #{rpr key}"
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
  info 'Ω__28', p.green.bold.inverse " holy moly "
  #.........................................................................................................
  info 'Ω__29', p.yellow.italic"some text"
  info 'Ω__30', p.green.bold.inverse.underline"some text"
  ### Building the chain: ###
  chain = p.cyan.bold
  chain.underline
  info 'Ω__31', p "finally, a call"
  return null


#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  # ( new Test guytest_cfg ).test { demo_proxy_as_html_producer, }
  #.........................................................................................................
  demo_infinite_proxy()
  demo_colorful_proxy()
