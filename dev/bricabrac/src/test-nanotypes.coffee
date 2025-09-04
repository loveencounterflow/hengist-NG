
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
      @eq ( Ωhllt_136 = -> T.integer.isa 9987           ), true
      @eq ( Ωhllt_137 = -> T.integer.data               ), { x: 9987, }
      @eq ( Ωhllt_138 = -> T.integer.isa 9987.125       ), false
      @eq ( Ωhllt_139 = -> T.integer.data               ), { x: 9987.125, message: '9987.125 is a non-integer number', fraction: 0.125, }
      @eq ( Ωhllt_140 = -> T.even_integer.isa 33.125    ), false
      @eq ( Ωhllt_141 = -> T.integer.data               ), { x: 33.125, message: '33.125 is a non-integer number', fraction: 0.125, }
      @eq ( Ωhllt_142 = -> T.even_integer.data          ), { message: 'not an integer' }
      @eq ( Ωhllt_143 = -> T.even_integer.isa 777       ), false
      @eq ( Ωhllt_144 = -> T.integer.data               ), { x: 777, }
      @eq ( Ωhllt_145 = -> T.even_integer.data          ), { message: 'detected remainder' }
      @eq ( Ωhllt_146 = -> T.even_integer.isa 888       ), true
      @eq ( Ωhllt_147 = -> T.integer.data               ), { x: 888, }
      @eq ( Ωhllt_148 = -> T.even_integer.data          ), {}
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
          #   debug 'Ωhllt_149', @data
          return ( @fail "not an integer"     ) unless @T.integer.isa x, @data
          return ( @fail "detected remainder" ) unless ( x %% 2 ) is 0
          return true
      #.....................................................................................................
      T = new My_typespace()
      T.even_integer.isa 'what?'
      @eq ( Ωhllt_150 = -> T.integer.data       ), { x: 'what?', message: "'what?' is not even a finite number", }
      @eq ( Ωhllt_151 = -> T.even_integer.data  ), { x: 'what?', message: "not an integer", }
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
      @eq ( Ωhllt_152 = -> T.integer.data       ), { me: 'integer', x: 'what?', message: "'what?' is not even a finite number" }
      @eq ( Ωhllt_153 = -> T.even_integer.data  ), {
        me:                     'even_integer',
        integer_me:             'integer',
        x:                      'what?',
        message_from_integer:   "'what?' is not even a finite number",
        message:                """not an integer: "'what?' is not even a finite number\"""", }
      #.....................................................................................................
      T.even_integer.isa 26
      debug 'Ωhllt_154', T.integer.data
      debug 'Ωhllt_155', T.even_integer.data
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
      @eq ( Ωhllt_156 = -> T.integer.data       ), { me: 'integer', x: 'what?', message: "'what?' is not even a finite number" }
      @eq ( Ωhllt_157 = -> T.even_integer.data  ), {
        me:                     'even_integer',
        integer_me:             'integer',
        x:                      'what?',
        message_from_integer:   "'what?' is not even a finite number",
        message:                """not an integer: "'what?' is not even a finite number\"""", }
      #.....................................................................................................
      T.even_integer.isa 26
      debug 'Ωhllt_158', T.integer.data
      debug 'Ωhllt_159', T.even_integer.data
      #.....................................................................................................
      return null
    return null


#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test @tasks
  # ( new Test guytest_cfg ).test { type_data_handling: @tasks.type_data_handling, }
