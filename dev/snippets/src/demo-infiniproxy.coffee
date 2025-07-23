
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
      whisper 'Ω__21', "colorize() context keys:  #{rpr ( k for k of @ )}"
      whisper 'Ω__22', "colorize() arguments:     #{rpr P}"
      whisper 'Ω__23', "colorize() stack:         #{rpr [ @stack..., ]}"
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
demo_show_color_effects = ->
  reset = "\x1b[0m"
  lime  = "\x1b[38;05;118m"
  show  = ( P... ) -> echo lime, P..., reset
  #.........................................................................................................
  echo "ANSI styles"
  show "\x1b[38;05;51m——————————————————————————————————————————————————————————————————————————————"
  echo "no effect"
  show "abc▄\x1b[26m DEF▄ \x1b[0mxyz▄ —— proportional  ——"
  show "abc▄\x1b[10m DEF▄ \x1b[10mxyz▄ —— font0      ——"
  show "abc▄\x1b[11m DEF▄ \x1b[10mxyz▄ —— font1      ——"
  show "abc▄\x1b[12m DEF▄ \x1b[10mxyz▄ —— font2       ——"
  show "abc▄\x1b[13m DEF▄ \x1b[10mxyz▄ —— font3       ——"
  show "abc▄\x1b[14m DEF▄ \x1b[10mxyz▄ —— font4    ——"
  show "abc▄\x1b[15m DEF▄ \x1b[10mxyz▄ —— font5  ——"
  show "abc▄\x1b[16m DEF▄ \x1b[10mxyz▄ —— font6      ——"
  show "abc▄\x1b[17m DEF▄ \x1b[10mxyz▄ —— font7       ——"
  show "abc▄\x1b[18m DEF▄ \x1b[10mxyz▄ —— font8       ——"
  show "abc▄\x1b[19m DEF▄ \x1b[10mxyz▄ —— font9    ——"
  show "abc▄\x1b[50m DEF▄ \x1b[0mxyz▄ —— framed etc  ——"
  show "abc▄\x1b[51m DEF▄ \x1b[0mxyz▄ —— framed etc  ——"
  show "abc▄\x1b[52m DEF▄ \x1b[0mxyz▄ —— framed etc  ——"
  show "abc▄\x1b[54m DEF▄ \x1b[0mxyz▄ —— framed etc  ——"
  show "abc▄\x1b[55m DEF▄ \x1b[0mxyz▄ —— framed etc  ——"
  show "abc▄\x1b[56m DEF▄ \x1b[0mxyz▄ —— framed etc  ——"
  show "abc▄\x1b[57m DEF▄ \x1b[0mxyz▄ —— framed etc  ——"
  show "abc▄\x1b[58m DEF▄ \x1b[0mxyz▄ —— framed etc  ——"
  show "abc▄\x1b[60m DEF▄ \x1b[0mxyz▄ —— CJK  ——"
  show "abc▄\x1b[61m DEF▄ \x1b[0mxyz▄ —— CJK  ——"
  show "abc▄\x1b[62m DEF▄ \x1b[0mxyz▄ —— CJK  ——"
  show "abc▄\x1b[63m DEF▄ \x1b[0mxyz▄ —— CJK  ——"
  show "abc▄\x1b[64m DEF▄ \x1b[0mxyz▄ —— CJK  ——"
  show "abc▄\x1b[70m DEF▄ \x1b[0mxyz▄ —— super/sub  ——"
  show "abc▄\x1b[71m DEF▄ \x1b[0mxyz▄ —— super/sub  ——"
  show "abc▄\x1b[72m DEF▄ \x1b[0mxyz▄ —— super/sub  ——"
  show "abc▄\x1b[73m DEF▄ \x1b[0mxyz▄ —— super/sub  ——"
  show "abc▄\x1b[74m DEF▄ \x1b[0mxyz▄ —— super/sub  ——"
  show "abc▄\x1b[75m DEF▄ \x1b[0mxyz▄ —— super/sub  ——"
  show "abc▄\x1b[76m DEF▄ \x1b[0mxyz▄ —— super/sub  ——"
  show "abc▄\x1b[77m DEF▄ \x1b[0mxyz▄ —— super/sub  ——"
  show "abc▄\x1b[78m DEF▄ \x1b[0mxyz▄ —— super/sub  ——"
  show "abc▄\x1b[79m DEF▄ \x1b[0mxyz▄ —— super/sub  ——"
  show "\x1b[38;05;51m——————————————————————————————————————————————————————————————————————————————"
  show "abc▄\x1b[1m DEF▄ \x1b[22mxyz▄ —— bold   <-> slim      ——"
  show "abc▄\x1b[21m DEF▄ \x1b[24mxyz▄ —— double underline       ——"
  show "abc▄\x1b[2m DEF▄ \x1b[22mxyz▄ —— dim    <-> nodim      ——"
  show "abc▄\x1b[3m DEF▄ \x1b[23mxyz▄ —— italic <-> straight       ——"
  show "abc▄\x1b[4m DEF▄ \x1b[24mxyz▄ —— underline    ——"
  show "abc▄\x1b[5m DEF▄ \x1b[25mxyz▄ —— blink      ——"
  show "abc▄\x1b[6m DEF▄ \x1b[25mxyz▄ —— blink      ——"
  show "abc▄\x1b[7m DEF▄ \x1b[27mxyz▄ —— reverse       ——"
  show "abc▄\x1b[8m DEF▄ \x1b[28mxyz▄ —— hide <-> reveal       ——"
  show "abc▄\x1b[9m DEF▄ \x1b[29mxyz▄ —— strike <-> nostrike    ——"
  show "abc▄\x1b[53m DEF▄ \x1b[55mxyz▄ —— overline <-> no overline  ——"
  show "abc▄\x1b[45mbg_magenta\x1b[49m DEF▄ \x1b[0mxyz▄ —— BG color off             ——"
  show "\x1b[38;05;51m——————————————————————————————————————————————————————————————————————————————"
  show "abc \x1b[36m\x1b[53m\x1b[7m DEFgjy \x1b[55m\x1b[34m\x1b[27mxyz —— overline + reverse  ——"
  show "abc \x1b[36m\x1b[53m\x1b[7m DEFgjy \x1b[55m\x1b[34m\x1b[27mxyz —— overline + reverse  ——"
  show "\x1b[38;05;51m——————————————————————————————————————————————————————————————————————————————"
  show "abc▄\x1b[30m DEF▄ \x1b[0mxyz▄ —— fg_black             ——"
  show "abc▄\x1b[31m DEF▄ \x1b[0mxyz▄ —— fg_red               ——"
  show "abc▄\x1b[32m DEF▄ \x1b[0mxyz▄ —— fg_green             ——"
  show "abc▄\x1b[33m DEF▄ \x1b[0mxyz▄ —— fg_yellow            ——"
  show "abc▄\x1b[34m DEF▄ \x1b[0mxyz▄ —— fg_blue              ——"
  show "abc▄\x1b[35m DEF▄ \x1b[0mxyz▄ —— fg_magenta           ——"
  show "abc▄\x1b[36m DEF▄ \x1b[0mxyz▄ —— fg_cyan              ——"
  show "abc▄\x1b[37m DEF▄ \x1b[0mxyz▄ —— fg_white             ——"
  show "abc▄\x1b[90m DEF▄ \x1b[0mxyz▄ —— fg_bright_black      ——"
  show "abc▄\x1b[91m DEF▄ \x1b[0mxyz▄ —— fg_bright_red        ——"
  show "abc▄\x1b[92m DEF▄ \x1b[0mxyz▄ —— fg_bright_green      ——"
  show "abc▄\x1b[93m DEF▄ \x1b[0mxyz▄ —— fg_bright_yellow     ——"
  show "abc▄\x1b[94m DEF▄ \x1b[0mxyz▄ —— fg_bright_blue       ——"
  show "abc▄\x1b[95m DEF▄ \x1b[0mxyz▄ —— fg_bright_magenta    ——"
  show "abc▄\x1b[96m DEF▄ \x1b[0mxyz▄ —— fg_bright_cyan       ——"
  show "abc▄\x1b[97m DEF▄ \x1b[0mxyz▄ —— fg_bright_white      ——"
  show "abc▄\x1b[40m DEF▄ \x1b[0mxyz▄ —— bg_black             ——"
  show "abc▄\x1b[41m DEF▄ \x1b[0mxyz▄ —— bg_red               ——"
  show "abc▄\x1b[42m DEF▄ \x1b[0mxyz▄ —— bg_green             ——"
  show "abc▄\x1b[43m DEF▄ \x1b[0mxyz▄ —— bg_yellow            ——"
  show "abc▄\x1b[44m DEF▄ \x1b[0mxyz▄ —— bg_blue              ——"
  show "abc▄\x1b[45m DEF▄ \x1b[0mxyz▄ —— bg_magenta           ——"
  show "abc▄\x1b[46m DEF▄ \x1b[0mxyz▄ —— bg_cyan              ——"
  show "abc▄\x1b[47m DEF▄ \x1b[0mxyz▄ —— bg_white             ——"
  show "abc▄\x1b[100m DEF▄ \x1b[0mxyz▄ —— bg_bright_black      ——"
  show "abc▄\x1b[101m DEF▄ \x1b[0mxyz▄ —— bg_bright_red        ——"
  show "abc▄\x1b[102m DEF▄ \x1b[0mxyz▄ —— bg_bright_green      ——"
  show "abc▄\x1b[103m DEF▄ \x1b[0mxyz▄ —— bg_bright_yellow     ——"
  show "abc▄\x1b[104m DEF▄ \x1b[0mxyz▄ —— bg_bright_blue       ——"
  show "abc▄\x1b[105m DEF▄ \x1b[0mxyz▄ —— bg_bright_magenta    ——"
  show "abc▄\x1b[106m DEF▄ \x1b[0mxyz▄ —— bg_bright_cyan       ——"
  show "abc▄\x1b[107m DEF▄ \x1b[0mxyz▄ —— bg_bright_white      ——"
  show "\x1b[38;05;51m——————————————————————————————————————————————————————————————————————————————"
  show "\x1b[9mESC[38;2;⟨r⟩;⟨g⟩;⟨b⟩m Select RGB foreground color"
  show "\x1b[9mESC[48;2;⟨r⟩;⟨g⟩;⟨b⟩m Select RGB background color"
  show "ESC[38:2:⟨???⟩:⟨r⟩:⟨g⟩:⟨b⟩:⟨unused⟩:⟨???⟩:⟨???⟩m Select RGB foreground color"
  show "ESC[48:2:⟨???⟩:⟨r⟩:⟨g⟩:⟨b⟩:⟨unused⟩:⟨???⟩:⟨???⟩m Select RGB background color"
  show "also supports CMYK; trailing colons can be omitted"
  show "\x1b[38;05;51m——————————————————————————————————————————————————————————————————————————————"
  show "abc▄\x1b[38:2::255:0:0m DEF▄ \x1b[0mxyz▄ —— RGB             ——"
  show "abc▄\x1b[38:2::200:0:0m DEF▄ \x1b[0mxyz▄ —— RGB             ——"
  show "abc▄\x1b[38:2::100:0:0m DEF▄ \x1b[0mxyz▄ —— RGB             ——"
  show "abc▄\x1b[38:2::10:0:0m DEF▄ \x1b[0mxyz▄ —— RGB             ——"
  show "abc▄\x1b[38:2::255:0:0m DEF▄ \x1b[0mxyz▄ —— RGB             ——"
  show "abc▄\x1b[38:2::200:0:200m DEF▄ \x1b[0mxyz▄ —— RGB             ——"
  show "abc▄\x1b[38:2::100:0:200m DEF▄ \x1b[0mxyz▄ —— RGB             ——"
  show "abc▄\x1b[38:2::10:0:255m DEF▄ \x1b[0mxyz▄ —— RGB             ——"
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
  demo_show_color_effects()

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
