
'use strict'

GUY                       = require 'guy'
{ alert
  debug
  help
  info
  plain
  praise
  urge
  warn
  whisper }               = GUY.trm.get_loggers 'hollerith'
{ rpr
  inspect
  echo
  reverse
  log     }               = GUY.trm
# WGUY                      = require '../../../apps/webguy'
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG
{ f }                     = require '../../../apps/effstring'
SFMODULES                 = require '../../../apps/bricabrac-sfmodules'


#===========================================================================================================
@tasks =

  #---------------------------------------------------------------------------------------------------------
  type_data_handling: ->
    { Type,
      Typespace,              } = SFMODULES.unstable.require_nanotypes()
    #.......................................................................................................
    do =>
      class My_typespace extends Typespace
        #...................................................................................................
        @integer: ( x ) ->
          return true if Number.isSafeInteger x
          return @fail "#{rpr x} is a non-integer number", { fraction: x % 1, } if Number.isFinite x
          return @fail "#{rpr x} is not even a finite number"
        #...................................................................................................
        @even_integer: ( x ) ->
          return ( @fail "not an integer"     ) unless @T.integer.isa x
          return ( @fail "detected remainder" ) unless ( x %% 2 ) is 0
          return true
      #.....................................................................................................
      T = new My_typespace()
      @eq ( Ωbbntt___1 = -> T.integer.isa 9987           ), true
      @eq ( Ωbbntt___2 = -> T.integer.data               ), {}
      @eq ( Ωbbntt___3 = -> T.integer.isa 9987.125       ), false
      @eq ( Ωbbntt___4 = -> T.integer.data               ), { message: '9987.125 is a non-integer number', fraction: 0.125, }
      @eq ( Ωbbntt___5 = -> T.even_integer.isa 33.125    ), false
      @eq ( Ωbbntt___6 = -> T.integer.data               ), { message: '33.125 is a non-integer number', fraction: 0.125, }
      @eq ( Ωbbntt___7 = -> T.even_integer.data          ), { message: 'not an integer' }
      @eq ( Ωbbntt___8 = -> T.even_integer.isa 777       ), false
      @eq ( Ωbbntt___9 = -> T.integer.data               ), {}
      @eq ( Ωbbntt__10 = -> T.even_integer.data          ), { message: 'detected remainder' }
      @eq ( Ωbbntt__11 = -> T.even_integer.isa 888       ), true
      @eq ( Ωbbntt__12 = -> T.integer.data               ), {}
      @eq ( Ωbbntt__13 = -> T.even_integer.data          ), {}
      #.....................................................................................................
      return null
    #.......................................................................................................
    do =>
      class My_typespace extends Typespace
        #...................................................................................................
        @integer: ( x ) ->
          @assign { x, }
          return true if Number.isSafeInteger x
          return @fail "#{rpr x} is a non-integer number", { fraction: x % 1, } if Number.isFinite x
          return @fail "#{rpr x} is not even a finite number"
        #...................................................................................................
        @even_integer: ( x ) ->
          # unless @T.integer.isa x, @data
          #   debug 'Ωbbntt__14', @data
          return ( @fail "not an integer"     ) unless @T.integer.isa x, @data
          return ( @fail "detected remainder" ) unless ( x %% 2 ) is 0
          return true
      #.....................................................................................................
      T = new My_typespace()
      T.even_integer.isa 'what?'
      @eq ( Ωbbntt__15 = -> T.integer.data       ), { x: 'what?', message: "'what?' is not even a finite number", }
      @eq ( Ωbbntt__16 = -> T.even_integer.data  ), { message: "not an integer", }
      #.....................................................................................................
      return null
    #.......................................................................................................
    do =>
      class My_typespace extends Typespace
        #...................................................................................................
        @integer: ( x ) ->
          @assign { me: 'integer', }
          @assign { x, }
          return true if Number.isSafeInteger x
          return @fail "#{rpr x} is a non-integer number", { fraction: x % 1, } if Number.isFinite x
          return @fail "#{rpr x} is not even a finite number"
        #...................................................................................................
        @even_integer: ( x ) ->
          @assign { me: 'even_integer', }
          unless @T.integer.dm_isa @data, { me: 'integer_me', message: 'message_from_integer', }, x
            return ( @fail "not an integer: #{rpr @data.message_from_integer}" )
          return ( @fail "detected remainder" ) unless ( x %% 2 ) is 0
          return true
      #.....................................................................................................
      T = new My_typespace()
      T.even_integer.isa 'what?'
      @eq ( Ωbbntt__17 = -> T.integer.data       ), { me: 'integer', x: 'what?', message: "'what?' is not even a finite number" }
      @eq ( Ωbbntt__18 = -> T.even_integer.data  ), {
        me:                     'even_integer',
        integer_me:             'integer',
        x:                      'what?',
        message_from_integer:   "'what?' is not even a finite number",
        message:                """not an integer: "'what?' is not even a finite number\"""", }
      #.....................................................................................................
      T.even_integer.isa 26
      debug 'Ωbbntt__19', T.integer.data
      debug 'Ωbbntt__20', T.even_integer.data
      #.....................................................................................................
      return null
    #.......................................................................................................
    do =>
      class My_typespace extends Typespace
        #...................................................................................................
        @integer: ( x ) ->
          @assign { me: 'integer', }
          @assign { x, }
          return true if Number.isSafeInteger x
          return @fail "#{rpr x} is a non-integer number", { fraction: x % 1, } if Number.isFinite x
          return @fail "#{rpr x} is not even a finite number"
        #...................................................................................................
        @even_integer: ( x ) ->
          @assign { me: 'even_integer', }
          unless @T.integer.dm_isa @data, { me: 'integer_me', message: 'message_from_integer', }, x
            return ( @fail "not an integer: #{rpr @data.message_from_integer}" )
          return ( @fail "detected remainder" ) unless ( x %% 2 ) is 0
          return true
      #.....................................................................................................
      T = new My_typespace()
      T.even_integer.isa 'what?'
      @eq ( Ωbbntt__21 = -> T.integer.data       ), { me: 'integer', x: 'what?', message: "'what?' is not even a finite number" }
      @eq ( Ωbbntt__22 = -> T.even_integer.data  ), {
        me:                     'even_integer',
        integer_me:             'integer',
        x:                      'what?',
        message_from_integer:   "'what?' is not even a finite number",
        message:                """not an integer: "'what?' is not even a finite number\"""", }
      #.....................................................................................................
      T.even_integer.isa 26
      debug 'Ωbbntt__23', T.integer.data
      debug 'Ωbbntt__24', T.even_integer.data
      #.....................................................................................................
      return null
    return null

  #---------------------------------------------------------------------------------------------------------
  nanotypes_v2_parametrized_types: ->
    { Type,
      Typespace,              } = SFMODULES.unstable.require_nanotypes_v2()
    #.......................................................................................................
    do =>
      class My_typespace extends Typespace
        #...................................................................................................
        @integer: ( x ) ->
          @assign { x, }
          return true if Number.isSafeInteger x
          return @fail "#{rpr x} is a non-integer number", { fraction: x % 1, } if Number.isFinite x
          return @fail "#{rpr x} is not even a finite number"
        #...................................................................................................
        @even_integer: ( x ) ->
          return ( @fail "#{rpr x} isn't an integer"  ) unless @T.integer.isa x
          return ( @fail "#{rpr x} isn't even"        ) unless ( x %% 2 ) is 0
          return true
        #...................................................................................................
        @list: ( x ) -> Array.isArray x
        #...................................................................................................
        @list_of: ( x, element_type = null ) ->
          # info 'Ωbbntt__25', 'list_of', { x, element_type, }
          return ( @fail "not a list" ) unless @T.list.isa x
          return true unless element_type?
          #.................................................................................................
          for element, idx in x
            unless element_type.isa element
              message   = "element at index #{idx} isn't a #{element_type.full_name}"
              message  += " – #{element_type.data.message}" if element_type?.data?.message?
              return ( @fail message )
          return true
      #.....................................................................................................
      T = new My_typespace()
      #.....................................................................................................
      do =>
        whisper 'Ωbbntt__26', '—————————————————————————————————————————————————————————————————————————————'
        help 'Ωbbntt__27', T.list_of.name
        help 'Ωbbntt__28', T.list_of.full_name
        help 'Ωbbntt__29', T.list_of.isa [ 5, ], T.integer
        info 'Ωbbntt__30', T.list_of.inputs
        info 'Ωbbntt__31', T.list_of.inputs[ 0 ]
        help 'Ωbbntt__32', T.list_of.full_name
        return null
      #.....................................................................................................
      do =>
        whisper 'Ωbbntt__33', '—————————————————————————————————————————————————————————————————————————————'
        help 'Ωbbntt__34', T.list.isa    [ 2, 4, 6, ]
        help 'Ωbbntt__35', T.list_of.isa [ 2, 4, 6, ];                 warn 'Ωbbntt__36', T.list_of.data
        help 'Ωbbntt__37', T.list_of.isa [ 2, 4, 6, ], T.even_integer; warn 'Ωbbntt__38', T.list_of.data
        help 'Ωbbntt__39', T.list_of.isa [ 2, 4, 7, ], T.even_integer; warn 'Ωbbntt__40', T.list_of.data
        return null
      #.....................................................................................................
      do =>
        whisper 'Ωbbntt__41', '—————————————————————————————————————————————————————————————————————————————'
        data = {}
        help 'Ωbbntt__42', T.list_of.dm_isa data, { message: 'msg', }, [ 2, 4, 7, ], T.even_integer
        @eq     ( Ωbbntt__43 = -> T.list_of.data ), { message: "element at index 2 isn't a even_integer – 7 isn't even" }
        @eq     ( Ωbbntt__44 = -> data           ), {     msg: "element at index 2 isn't a even_integer – 7 isn't even" }
        try T.list_of.validate [ 2, 4, 7, ],  T.even_integer catch e then warn 'Ωbbntt__45', reverse e.message
        try T.list_of.validate true,          T.even_integer catch e then warn 'Ωbbntt__46', reverse e.message
        try T.list_of.validate [],            T.even_integer catch e then warn 'Ωbbntt__47', reverse e.message
        try T.list_of.validate [ 1.3, ],      T.even_integer catch e then warn 'Ωbbntt__48', reverse e.message
      #.....................................................................................................
      do =>
        data = {}
        @throws ( Ωbbntt__49 = -> T.list_of.dm_validate data, { message: 'msg', }, [ 2, 4, 7, ], T.even_integer ), /not a valid list_of/
        @eq     ( Ωbbntt__50 = -> data ), { msg: "element at index 2 isn't a even_integer – 7 isn't even" }
        return null
      #.....................................................................................................
      do =>
        data = {}
        @eq     ( Ωbbntt__51 = -> T.even_integer.dm_isa       data, { message: 'msg', }, 123456 ), true
        @eq     ( Ωbbntt__52 = -> data ), {}
        return null
      #.....................................................................................................
      do =>
        data = {}
        @eq     ( Ωbbntt__53 = -> T.even_integer.dm_validate  data, { message: 'msg', }, 123456 ), 123456
        @eq     ( Ωbbntt__54 = -> data ), {}
        return null
      #.....................................................................................................
      do =>
        data = {}
        @eq     ( Ωbbntt__55 = -> T.list_of.dm_validate data, { message: 'msg', }, [ 2, 4, 8, ], T.even_integer ), [ 2, 4, 8, ]
        @eq     ( Ωbbntt__56 = -> data ), {}
        return null
      #.....................................................................................................
      return null
    return null

  #---------------------------------------------------------------------------------------------------------
  nanotypes_v2_validation: ->
    { Type,
      Typespace,              } = SFMODULES.unstable.require_nanotypes_v2()
    #.......................................................................................................
    class My_typespace extends Typespace
      #...................................................................................................
      @integer: ( x ) ->
        @assign { x, }
        return true if Number.isSafeInteger x
        return @fail "#{rpr x} is a non-integer number", { fraction: x % 1, } if Number.isFinite x
        return @fail "#{rpr x} is not even a finite number"
      #...................................................................................................
      @text: ( x ) ->
        @assign { x, }
        return true if ( typeof x ) is 'string'
        ;false
      #...................................................................................................
      @point: ( x ) ->
        @assign { x, }
        return true if ( @T.integer.isa x )
        return @fail "#{rpr x} is not an integer and not a text"          unless ( @T.text.isa x )
        return @fail "#{rpr x} is a text but not with a single codepoint" unless ( ( Array.from x ).length is 1 )
        ;true
        # return true if Number.isSafeInteger x
        # return @fail "#{rpr x} is a non-integer number", { fraction: x % 1, } if Number.isFinite x
        # return @fail "#{rpr x} is not even a finite number"
    #.....................................................................................................
    T = new My_typespace()
    debug 'Ωbbntt__57', T.integer
    debug 'Ωbbntt__58', T.integer.isa
    #.......................................................................................................
    @eq ( Ωbbntt__59 = -> T.integer.isa           5         ), true
    @eq ( Ωbbntt__60 = -> T.point.isa             5         ), true
    @eq ( Ωbbntt__61 = -> T.point.isa             'a'       ), true
    #.......................................................................................................
    @eq ( Ωbbntt__62 = -> T.integer.isa           55.5      ), false
    @eq ( Ωbbntt__63 = -> T.point.isa             55.5      ), false
    @eq ( Ωbbntt__64 = -> T.point.isa             'abc'     ), false
    #.......................................................................................................
    @eq ( Ωbbntt__65 = -> T.integer.validate      5         ), 5
    @eq ( Ωbbntt__66 = -> T.point.validate        5         ), 5
    @eq ( Ωbbntt__67 = -> T.point.validate        'a'       ), 'a'
    #.......................................................................................................
    @eq ( Ωbbntt__68 = -> try T.integer.validate  55.5  catch e then return e.message ), """(integer) not a valid integer: 55.5 – 55.5 is a non-integer number"""
    @eq ( Ωbbntt__69 = -> try T.point.validate    55.5  catch e then return e.message ), """(point) not a valid point: 55.5 – 55.5 is not an integer and not a text"""
    @eq ( Ωbbntt__70 = -> try T.point.validate    'abc' catch e then return e.message ), """(point) not a valid point: abc – 'abc' is a text but not with a single codepoint"""
    #.......................................................................................................
    @throws ( Ωbbntt__71 = -> T.integer.validate  55.5      ), /not a valid integer/
    @throws ( Ωbbntt__72 = -> T.point.validate    55.5      ), /not a valid point/
    @throws ( Ωbbntt__73 = -> T.point.validate    'abc'     ), /not a valid point/
    @throws ( Ωbbntt__74 = -> T.point.validate    ''        ), /not a valid point/
    #.......................................................................................................
    ;null


#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: true, report_checks: true, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test @tasks
  # ( new Test guytest_cfg ).test { type_data_handling: @tasks.type_data_handling, }
