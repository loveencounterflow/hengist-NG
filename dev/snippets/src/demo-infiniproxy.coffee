
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
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  # ( new Test guytest_cfg ).test { demo_proxy_as_html_producer, }
  #.........................................................................................................
  # demo_infinite_proxy()
  demo_instance_function_as_proxy()
  demo_colorful_proxy()
