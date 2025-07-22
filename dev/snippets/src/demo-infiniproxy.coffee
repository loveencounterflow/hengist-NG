
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

# #===========================================================================================================
# demo_picocolors_chalk = ->
#   do =>
#     # info 'Ω__14',     C.yellow"█▒█"
#     # info 'Ω__15',     C.yellow"█#{ C.green"▒" }█"
#     info 'Ω__16',     C.red"█#{    C.green"▒" }█#{ C.green 'GREEN' }###"
#     # info 'Ω__17', rpr C.yellow"█▒█"
#     # info 'Ω__18', rpr C.yellow"█#{ C.green"▒" }█"
#     info 'Ω__19', rpr C.red"█#{    C.green"▒" }█#{ C.green 'GREEN' }###"
#     info 'Ω__20',     C.red"████#{C.green"████#{C.yellow"████"}████"}████"
#     info 'Ω__21', rpr C.red"████#{C.green"████#{C.yellow"████"}████"}████"
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
#     # info 'Ω__22',     red"█#{'▒'}█#{ 'GREEN' }###"
#     # info 'Ω__23', rpr red"█#{'▒'}█#{ 'GREEN' }###"
#     info 'Ω__24',     red"████#{green"████#{yellow"████"}████"}████"
#     info 'Ω__25', rpr red"████#{green"████#{yellow"████"}████"}████"
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
demo_instance_function_as_proxy = ->
  require_infiniproxy = ->
    { hide,               } = SFMODULES.require_managed_property_tools()
    { Stack,              } = SFMODULES.require_stack_classes()
    ### TAINT in this simulation of single-file modules, a new distinct symbol is produced with each call to
    `require_infiniproxy()` ###
    sys_symbol              = Symbol 'sys'
    #===========================================================================================================
    create_infinyproxy = ( callable ) ->
      #.........................................................................................................
      new_proxy = ({ is_top_level, }) -> new Proxy callable,

        #-------------------------------------------------------------------------------------------------------
        apply: ( target, key, P ) ->
          # urge 'Ω__31', "apply #{rpr { target, key, P, is_top_level, }}"
          ctx = { is_top_level, sys..., }
          R   = Reflect.apply target, ctx, P ### NOTE: cannot use `target.apply()`, must use `Reflect` ###
          sys.stack.clear()
          return R

        #-------------------------------------------------------------------------------------------------------
        get: ( target, key ) ->
          # urge 'Ω__32', "get #{rpr { target, key, }}"
          return sys            if key            is sys_symbol
          return target[ key ]  if ( typeof key ) is 'symbol'
          return Reflect.get target, key if Reflect.has target, key
          sys.stack.clear() if is_top_level
          sys.stack.push key
          # return "[result for getting non-preset key #{rpr key}] from #{rpr target}"
          return sys.sub_level_proxy
      #.........................................................................................................
      sys =
        stack:            new Stack()
        top_level_proxy:  new_proxy { is_top_level: true,   }
        sub_level_proxy:  new_proxy { is_top_level: false,  }
      #.........................................................................................................
      return sys.top_level_proxy
    #-----------------------------------------------------------------------------------------------------------
    return exports = { create_infinyproxy, sys_symbol, }

  #===========================================================================================================
  { D, } = do ->
    { create_infinyproxy,
      sys_symbol,           } = require_infiniproxy()
    #=========================================================================================================
    class D

      #-------------------------------------------------------------------------------------------------------
      constructor: ( callable ) ->
        @other_prop = 'OTHER_PROP'
        Object.setPrototypeOf callable, @
        R = create_infinyproxy callable
        # ...
        return R

      #-------------------------------------------------------------------------------------------------------
      method_of_d: ( value ) ->
        whisper 'Ω__33', 'METHOD_OF_D'
        @[ sys_symbol ].stack.push 'generated'
        @[ sys_symbol ].stack.push 'stuff'
        @[ sys_symbol ].stack.push "value:#{rpr value}"
        return @[ sys_symbol ].sub_level_proxy

      #-------------------------------------------------------------------------------------------------------
      property_of_d: 'PROPERTY_OF_D'

    #---------------------------------------------------------------------------------------------------------
    return exports = { D, }
  #.........................................................................................................
  do =>
    my_fn_3 = ( P... ) ->
      whisper 'Ω__34', @stack, @stack.is_empty, [ @stack..., ]
      chain   = [ @stack..., ].join '.'
      content = ( ( rpr p ) for p in P )
      return "[#{chain}:#{content}]"
    echo '——————————————————————————————————————————————————————————————————————————————'
    help 'Ω__35', rpr d = new D my_fn_3
    help 'Ω__36', reverse GUY.trm.truth ( d instanceof D )   # true
    help 'Ω__37', rpr Object.getPrototypeOf d
    help 'Ω__38', rpr ( typeof Object.getPrototypeOf d ) is ( typeof ( -> ) )
    help 'Ω__39', rpr typeof d
    help 'Ω__40', rpr Object::toString.call d
    help 'Ω__41', rpr d instanceof Function
    echo '——————————————————————————————————————————————————————————————————————————————'
    info 'Ω__42', rpr d.other_prop     # OTHER_PROP
    info 'Ω__43', rpr d.method_of_d()  # METHOD_OF_D
    info 'Ω__44', rpr d.property_of_d  # PROPERTY_OF_D
    info 'Ω__45', rpr d.unknown_key    # something else: 'unknown_key'
    echo '——————————————————————————————————————————————————————————————————————————————'
    info 'Ω__46', rpr d 1, 2, 'c'
    info 'Ω__47', rpr d.red
    info 'Ω__48', rpr d 1, 2, 'c'
    info 'Ω__49', rpr d.red.bold 1, 2, 'c'
    info 'Ω__50', rpr d.red.bold.method_of_d(123).hola 'ftw'
    info 'Ω__50', rpr d.red.bold.method_of_d'123'.hola 'ftw'
  return null



#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  # ( new Test guytest_cfg ).test { demo_proxy_as_html_producer, }
  #.........................................................................................................
  # demo_infinite_proxy()
  demo_colorful_proxy()
  demo_instance_function_as_proxy()
