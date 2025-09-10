
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
SFMODULES                 = require '../../../apps/bricabrac-single-file-modules'


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
          @assign { x, }
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
      @eq ( Ωhllt___1 = -> T.integer.isa 9987           ), true
      @eq ( Ωhllt___2 = -> T.integer.data               ), { x: 9987, }
      @eq ( Ωhllt___3 = -> T.integer.isa 9987.125       ), false
      @eq ( Ωhllt___4 = -> T.integer.data               ), { x: 9987.125, message: '9987.125 is a non-integer number', fraction: 0.125, }
      @eq ( Ωhllt___5 = -> T.even_integer.isa 33.125    ), false
      @eq ( Ωhllt___6 = -> T.integer.data               ), { x: 33.125, message: '33.125 is a non-integer number', fraction: 0.125, }
      @eq ( Ωhllt___7 = -> T.even_integer.data          ), { message: 'not an integer' }
      @eq ( Ωhllt___8 = -> T.even_integer.isa 777       ), false
      @eq ( Ωhllt___9 = -> T.integer.data               ), { x: 777, }
      @eq ( Ωhllt__10 = -> T.even_integer.data          ), { message: 'detected remainder' }
      @eq ( Ωhllt__11 = -> T.even_integer.isa 888       ), true
      @eq ( Ωhllt__12 = -> T.integer.data               ), { x: 888, }
      @eq ( Ωhllt__13 = -> T.even_integer.data          ), {}
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
          #   debug 'Ωhllt__14', @data
          return ( @fail "not an integer"     ) unless @T.integer.isa x, @data
          return ( @fail "detected remainder" ) unless ( x %% 2 ) is 0
          return true
      #.....................................................................................................
      T = new My_typespace()
      T.even_integer.isa 'what?'
      @eq ( Ωhllt__15 = -> T.integer.data       ), { x: 'what?', message: "'what?' is not even a finite number", }
      @eq ( Ωhllt__16 = -> T.even_integer.data  ), { x: 'what?', message: "not an integer", }
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
          unless @T.integer.isa x, @data, { me: 'integer_me', message: 'message_from_integer', }
            return ( @fail "not an integer: #{rpr @data.message_from_integer}" )
          return ( @fail "detected remainder" ) unless ( x %% 2 ) is 0
          return true
      #.....................................................................................................
      T = new My_typespace()
      T.even_integer.isa 'what?'
      @eq ( Ωhllt__17 = -> T.integer.data       ), { me: 'integer', x: 'what?', message: "'what?' is not even a finite number" }
      @eq ( Ωhllt__18 = -> T.even_integer.data  ), {
        me:                     'even_integer',
        integer_me:             'integer',
        x:                      'what?',
        message_from_integer:   "'what?' is not even a finite number",
        message:                """not an integer: "'what?' is not even a finite number\"""", }
      #.....................................................................................................
      T.even_integer.isa 26
      debug 'Ωhllt__19', T.integer.data
      debug 'Ωhllt__20', T.even_integer.data
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
          unless @T.integer.isa x, @data, { me: 'integer_me', message: 'message_from_integer', }
            return ( @fail "not an integer: #{rpr @data.message_from_integer}" )
          return ( @fail "detected remainder" ) unless ( x %% 2 ) is 0
          return true
      #.....................................................................................................
      T = new My_typespace()
      T.even_integer.isa 'what?'
      @eq ( Ωhllt__21 = -> T.integer.data       ), { me: 'integer', x: 'what?', message: "'what?' is not even a finite number" }
      @eq ( Ωhllt__22 = -> T.even_integer.data  ), {
        me:                     'even_integer',
        integer_me:             'integer',
        x:                      'what?',
        message_from_integer:   "'what?' is not even a finite number",
        message:                """not an integer: "'what?' is not even a finite number\"""", }
      #.....................................................................................................
      T.even_integer.isa 26
      debug 'Ωhllt__23', T.integer.data
      debug 'Ωhllt__24', T.even_integer.data
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
          return ( @fail "not an integer"     ) unless @T.integer.isa x
          return ( @fail "detected remainder" ) unless ( x %% 2 ) is 0
          return true
        #...................................................................................................
        @list: ( x ) -> Array.isArray x
        #...................................................................................................
        @list_of: ( x, element_type = null ) ->
          info 'Ωhllt__25', 'list_of', { x, element_type, }
          return ( @fail "not a list" ) unless @T.list.isa x
          return true unless element_type?
          for element, idx in x
            return ( @fail "element at index #{idx} isn't a #{element_type.name}" ) unless element_type.isa element
          return true
      #.....................................................................................................
      T = new My_typespace()
      do =>
        whisper 'Ωhllt__26', '—————————————————————————————————————————————————————————————————————————————'
        help 'Ωhllt__27', T.list.isa    [ 2, 4, 6, ]
        help 'Ωhllt__28', T.list_of.isa [ 2, 4, 6, ];                 warn 'Ωhllt__29', T.list_of.data
        help 'Ωhllt__30', T.list_of.isa [ 2, 4, 6, ], T.even_integer; warn 'Ωhllt__31', T.list_of.data
        help 'Ωhllt__32', T.list_of.isa [ 2, 4, 7, ], T.even_integer; warn 'Ωhllt__33', T.list_of.data
        return null
      #.....................................................................................................
      do =>
        whisper 'Ωhllt__34', '—————————————————————————————————————————————————————————————————————————————'
        data = {}
        help 'Ωhllt__35', T.list_of.isa_datmap [ [ 2, 4, 7, ], T.even_integer, ], data, { message: 'msg', }
        warn 'Ωhllt__36', T.list_of.data
        warn 'Ωhllt__37', data
        return null
      #.....................................................................................................
      do =>
        whisper 'Ωhllt__38', '—————————————————————————————————————————————————————————————————————————————'
        help 'Ωhllt__39', T.list_of.isa_datmap [ [ 2, 4, 7, ], T.even_integer, ], null, { message: 'msg', }
        warn 'Ωhllt__40', T.list_of.data
        return null
      #.....................................................................................................
      do =>
        whisper 'Ωhllt__41', '—————————————————————————————————————————————————————————————————————————————'
        help 'Ωhllt__42', T.list_of.datmap_isa null, { message: 'msg', }, [ 2, 4, 7, ], T.even_integer
        warn 'Ωhllt__43', T.list_of.data
        return null
      #.....................................................................................................
      do =>
        whisper 'Ωhllt__41', '—————————————————————————————————————————————————————————————————————————————'
        dm = ( data, mapping, fn ) ->
        help 'Ωhllt__42', dm null, { message: 'msg', }, -> T.list_of.isa [ 2, 4, 7, ], T.even_integer
        warn 'Ωhllt__43', T.list_of.data
        return null
      #.....................................................................................................
      return null
    return null


#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test @tasks
  # ( new Test guytest_cfg ).test { type_data_handling: @tasks.type_data_handling, }
