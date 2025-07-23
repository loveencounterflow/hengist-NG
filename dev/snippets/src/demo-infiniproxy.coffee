
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
demo_instance_function_as_proxy = ->

  #===========================================================================================================
  { D, } = do ->
    { create_infinyproxy,
      sys_symbol,           } = SFMODULES.require_infiniproxy()
    #=========================================================================================================
    class D

      #-------------------------------------------------------------------------------------------------------
      constructor: ( callee ) ->
        @other_prop = 'OTHER_PROP'
        Object.setPrototypeOf callee, @
        R = create_infinyproxy { callee, provider: @, }
        # ...
        return R

      #-------------------------------------------------------------------------------------------------------
      method_of_d: ( value ) ->
        whisper 'Ω___1', 'METHOD_OF_D'
        whisper 'Ω___2', ( k for k of @[ sys_symbol ] ) # .sub_level_proxy
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
      whisper 'Ω___3', @stack, @stack.is_empty, [ @stack..., ]
      chain   = [ @stack..., ].join '.'
      content = ( ( rpr p ) for p in P )
      return "[#{chain}:#{content}]"
    echo '——————————————————————————————————————————————————————————————————————————————'
    help 'Ω___4', rpr d = new D my_fn_3
    help 'Ω___5', reverse GUY.trm.truth ( d instanceof D )   # true
    help 'Ω___6', rpr Object.getPrototypeOf d
    help 'Ω___7', rpr ( typeof Object.getPrototypeOf d ) is ( typeof ( -> ) )
    help 'Ω___8', rpr typeof d
    help 'Ω___9', rpr Object::toString.call d
    help 'Ω__10', rpr d instanceof Function
    echo '——————————————————————————————————————————————————————————————————————————————'
    info 'Ω__11', rpr d.other_prop     # OTHER_PROP
    info 'Ω__12', rpr d.method_of_d()  # METHOD_OF_D
    info 'Ω__13', rpr d.property_of_d  # PROPERTY_OF_D
    info 'Ω__14', rpr d.unknown_key    # something else: 'unknown_key'
    echo '——————————————————————————————————————————————————————————————————————————————'
    info 'Ω__15', rpr d 1, 2, 'c'
    info 'Ω__16', rpr d.red
    info 'Ω__17', rpr d 1, 2, 'c'
    info 'Ω__18', rpr d.red.bold 1, 2, 'c'
    info 'Ω__19', rpr d.red.bold.method_of_d(123).hola 'ftw'
    info 'Ω__20', rpr d.red.bold.method_of_d'123'.hola 'ftw'
  return null


#===========================================================================================================
demo_colorful_proxy = ->
  class TMP_error extends Error
  { create_infinyproxy,
    sys_symbol,           } = SFMODULES.require_infiniproxy()
  #=========================================================================================================
  class Colorizer

    #-------------------------------------------------------------------------------------------------------
    @colorize: ( P... ) ->
      whisper 'Ω__21', "colorize() context:   #{rpr @}"
      whisper 'Ω__22', "colorize() arguments: #{rpr P}"
      whisper 'Ω__23', "colorize() stack:     #{rpr @stack}"
      return "*******************"

    #-------------------------------------------------------------------------------------------------------
    constructor: ->
      @other_prop = 'OTHER_PROP'
      Object.setPrototypeOf @constructor.colorize, @
      R = create_infinyproxy { callee: @constructor.colorize, provider: @, }
      return R

  #=========================================================================================================
  # base = ( P... ) ->
  #   R = P[ 0 ]
  #   while stack.length > 0
  #     key = stack.pop()
  #     R   = C[ key ] R
  #   return R
  #.........................................................................................................
  c = new Colorizer()
  info 'Ω__24', c
  info 'Ω__25', c.green.bold.inverse " holy moly "
  # #.........................................................................................................
  # info 'Ω__26', p.yellow.italic"some text"
  # info 'Ω__27', p.green.bold.inverse.underline"some text"
  # ### Building the chain: ###
  # chain = p.cyan.bold
  # chain.underline
  # info 'Ω__28', p "finally, a call"
  return null


#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  # ( new Test guytest_cfg ).test { demo_proxy_as_html_producer, }
  #.........................................................................................................
  # demo_infinite_proxy()
  demo_instance_function_as_proxy()
  demo_colorful_proxy()

  # # d = new Proxy ( ( P... ) -> urge 'Ω__29', P ),
  # provider    = {}
  # callee      = ( P... ) ->
  # callee_ctx  = {}
  # d = new Proxy callee,
  #   set: ( target, key, value ) ->
  #     warn 'Ω__30', 'set', ( rpr key ), ( rpr value )
  #     Reflect.set provider, key, "*#{value}*"
  #     return true
  #   get: ( target, key ) ->
  #     help 'Ω__31', 'get', rpr key
  #     return Reflect.get provider, key if Reflect.has provider, key
  #     return Symbol 'notavalue'
  #   apply: ( target, _, P... ) ->
  #     debug 'Ω__32', P
  #     # target.apply null, P
  # info 'Ω__33', d 'helo'
  # info 'Ω__34', d.greetings = 'helo'
  # info 'Ω__35', d.greetings
