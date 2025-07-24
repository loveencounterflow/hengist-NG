
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
  ANSI = new class Ansi
    #-------------------------------------------------------------------------------------------------------
    fg_color_code_from_rgb_dec: ([ r, g, b, ]) -> "\x1b[38:2::#{r}:#{g}:#{b}m"
    bg_color_code_from_rgb_dec: ([ r, g, b, ]) -> "\x1b[48:2::#{r}:#{g}:#{b}m"
    fg_color_code_from_color_name: ( name ) ->
      rgb = @colors[ name ] ? @colors.fallback
      return @fg_color_code_from_rgb_dec rgb
    rgb_from_hex: ( hex ) ->
      ### TAINT use proper typing ###
      throw new Error "Ω__25 expected text, got #{rpr hex}" unless ( typeof hex ) is 'string'
      throw new Error "Ω__25 expected '#', got #{rpr hex}" unless hex.startsWith '#'
      throw new Error "Ω__25 expected text of length 7, got #{rpr hex}" unless hex.length is 7
      [ r16, g16, b16, ] = [ hex[ 1 .. 2 ], hex[ 3 .. 4 ], hex[ 5 .. 6 ], ]
      return [ ( parseInt r16, 16 ), ( parseInt g16, 16 ), ( parseInt b16, 16 ), ]

    #-------------------------------------------------------------------------------------------------------
    colors_ansi: null
    colors:
      ### thx to: https://en.wikipedia.org/wiki/Help:Distinguishable_colors ###
      ### thx to: https://graphicdesign.stackexchange.com/questions/3682/where-can-i-find-a-large-palette-set-of-contrasting-colors-for-coloring-many-d ###
      black:            '#000000'
      white:            '#ffffff'
      amethyst:         '#f0a3ff'
      blue:             '#0075dc'
      caramel:          '#993f00'
      damson:           '#4c005c'
      ebony:            '#191919'
      forest:           '#005c31'
      green:            '#2bce48'
      honeydew:         '#ffcc99'
      iron:             '#808080'
      jade:             '#94ffb5'
      khaki:            '#8f7c00'
      lime:             '#9dcc00'
      mallow:           '#c20088'
      navy:             '#003380'
      orpiment:         '#ffa405'
      pink:             '#ffa8bb'
      quagmire:         '#426600'
      red:              '#ff0010'
      sky:              '#5ef1f2'
      turquoise:        '#00998f'
      uranium:          '#e0ff66'
      violet:           '#740aff'
      wine:             '#990000'
      xanthin:          '#ffff80'
      yellow:           '#ffe100'
      zinnia:           '#ff5005'
      #.....................................................................................................
      fallback:         [ 255,  20, 147, ]

  for name, code of ANSI.colors
    switch true
      when ( typeof code ) is 'string'
        rgb = ANSI.rgb_from_hex code
      when Array.isArray code
        rgb = code
      else throw new Error "Ω__25 format error: #{rpr code}"
    fg_code_start = ANSI.fg_color_code_from_rgb_dec rgb
    bg_code_start = ANSI.bg_color_code_from_rgb_dec rgb
    fg_code_stop  = '\x1b[0m'
    bg_code_stop  = '\x1b[0m'
    if name is 'black'
      fg_black = fg_code_start
    echo 'Ω__10', f"abc▄#{fg_code_start} DEF▄ #{fg_code_stop}xyz▄ #{fg_black}#{bg_code_start} DEF▄ #{bg_code_stop}xyz▄ —— #{name}:<20c; ——"

  return null


  #=========================================================================================================
  class Colorizer

    #-------------------------------------------------------------------------------------------------------
    @colorize: ( P... ) ->
      # whisper 'Ω__21', "colorize() context keys:  #{rpr ( k for k of @ )}"
      # whisper 'Ω__22', "colorize() arguments:     #{rpr P}"
      whisper 'Ω__23', "colorize() stack:         #{rpr [ @stack..., ]}"
      for name from @stack
        ansi = ANSI.fg_color_code_from_color_name name
        # debug 'Ω__10', ( rpr name ), ( rpr ansi )
        echo 'Ω__10', f"abc▄#{ansi} DEF▄ \x1b[0mxyz▄ —— #{name}:<20c; ——"
      return "*******************"

    #-------------------------------------------------------------------------------------------------------
    constructor: ->
      @other_prop = 'OTHER_PROP'
      Object.setPrototypeOf @constructor.colorize, @
      R = create_infinyproxy { callee: @constructor.colorize, provider: @, }
      return R

  #=========================================================================================================
  c = new Colorizer()
  info 'Ω__24', c
  info 'Ω__25', c.green.bold.inverse " holy moly "
  info 'Ω__25', c.slategray " holy moly "
  info 'Ω__25', c.darkslategray " holy moly "
  info 'Ω__25', c.darkkhaki " holy moly "
  info 'Ω__25', c.gold " holy moly "
  #.........................................................................................................
  return null


#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  # ( new Test guytest_cfg ).test { demo_proxy_as_html_producer, }
  #.........................................................................................................
  # demo_infinite_proxy()
  # demo_instance_function_as_proxy()
  demo_colorful_proxy()


