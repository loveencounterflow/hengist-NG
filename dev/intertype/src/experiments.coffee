

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
  whisper }               = GUY.trm.get_loggers 'intertype/test-basics'
{ rpr
  inspect
  echo
  reverse
  log     }               = GUY.trm
WGUY                      = require '../../../apps/webguy'
TMP_types                 = new ( require 'intertype-203.0.0' ).Intertype()
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG
# test_mode                 = 'throw_failures'
# test_mode                 = 'throw_errors'
# test_mode                 = 'failsafe'


#===========================================================================================================
get_typespaces = ->
  { Typespace } = require '../../../apps/intertype'
  #.........................................................................................................
  mvp = new Typespace
    # anything:       ( x, t ) -> true
    nothing:        ( x, t ) -> not x?
    something:      ( x, t ) -> x?
    primitive:      ( x, t ) -> ( x in [ null, undefined, true, false, ] ) or ( typeof x in [ 'string', 'number', ] )
    object:         ( x, t ) -> not t.isa mvp.primitive, x
    pod:            ( x, t ) -> x? and x.constructor in [ Object, undefined, ]
    #.......................................................................................................
    null:           ( x, t ) -> x is null
    undefined:      ( x, t ) -> x is undefined
    infinity:       ( x, t ) -> ( x is +Infinity ) or ( x is -Infinity )
    boolean:        ( x, t ) -> ( x is true ) or ( x is false )
    nan:            ( x, t ) -> Number.isNaN x
    #.......................................................................................................
    integer:
      isa:    ( x, t ) -> Number.isInteger x
      foo:    4
    odd:
      isa:    ( x, t ) -> ( t.isa @$typespace.integer, x ) and ( x %% 2 isnt 0 )
    # short form just assigns either a test method or a type name:
    even:           ( x, t ) -> ( t.isa @$typespace.integer, x ) and ( x %% 2 is 0 )
    float:
      isa:            ( x, t ) -> Number.isFinite x
      template:       0
    bigint:         ( x, t ) -> typeof x is 'bigint'
    text:           ( x, t ) -> typeof x is 'string'
    empty_text:     ( x, t ) -> x is ''
    nonempty_text:  ( x, t ) -> ( t.isa @$typespace.text, x ) and ( x.length > 0 )
    #.......................................................................................................
    set:            ( x, t ) -> x instanceof Set
    map:            ( x, t ) -> x instanceof Map
    weakmap:        ( x, t ) -> x instanceof WeakMap
    list:           ( x, t ) -> Array.isArray x
    #.......................................................................................................
    function:           ( x, t ) -> ( Object::toString.call x ) is '[object Function]'
    asyncfunction:      ( x, t ) -> ( Object::toString.call x ) is '[object AsyncFunction]'
    generatorfunction:  ( x, t ) -> ( Object::toString.call x ) is '[object GeneratorFunction]'
    #.......................................................................................................
    # numerical:      ( x, t ) -> ( t.isa @$typespace.float, x   ) or ( t.isa @$typespace.bigint, x )
    # positive0:      ( x, t ) -> ( t.isa @$typespace.float, x   ) and ( x >= +0  )
    # positive1:      ( x, t ) -> ( t.isa @$typespace.float, x   ) and ( x >= +1  )
    # negative0:      ( x, t ) -> ( t.isa @$typespace.float, x   ) and ( x <=  0  )
    # negative1:      ( x, t ) -> ( t.isa @$typespace.float, x   ) and ( x <= -1  )
    # cardinal:       ( x, t ) -> ( t.isa @$typespace.integer, x ) and ( t.isa @$typespace.positive0, x )
    #.......................................................................................................
    # cardinalbigint: ( x, t ) -> ( t.isa @$typespace.bigint, x    ) and ( x >= +0 )
    #.......................................................................................................
    # circle1:  'circle2'
    # circle2:  'circle3'
    # circle3:  'circle1'
    #.......................................................................................................
    strange:  'odd'     # declares another name for `odd`
    weird:    'strange' # declares another name for `odd`
    abnormal: 'weird'   # declares another name for `odd`
    #.......................................................................................................
    quantity_refs:
      fields:
        # each field becomes a `Type` instance; strings may refer to names in the same typespace
        q:    'float'
        u:    'nonempty_text'
      template:
        q:    0
        u:    'u'
    #.......................................................................................................
    quantity_funs:
      fields:
        q:    ( x, t ) -> t.isa mvp.float,          x
        u:    ( x, t ) -> t.isa mvp.nonempty_text,  x
      template:
        q:    0
        u:    'u'
    #.......................................................................................................
    address:
      fields:
        postcode:   'nonempty_text'
        city:       'nonempty_text'
    #.......................................................................................................
    employee:
      fields:
        address:    'address'
        name:
          fields:
            firstname:  'nonempty_text'
            lastname:   'nonempty_text'
  #.........................................................................................................
  ts1 = new Typespace
    #.......................................................................................................
    quantity_typs:
      fields:
        q:    mvp.float
        u:    mvp.nonempty_text
      template:
        q:    0
        u:    'u'
    #.......................................................................................................
    quantity_typs_float_fb:
      fields:
        q:    mvp.float
        u:    mvp.nonempty_text
      template:
        u:    'u'
    #.......................................................................................................
    quantity_typs_float_fb:
      fields:
        q:    mvp.float
        u:
          isa:      mvp.nonempty_text
          template: 'u'
    #.......................................................................................................
    float_one:
      isa:          mvp.float
      template:     1
    #.......................................................................................................
    name:
      fields:
        firstname:  mvp.nonempty_text
        lastname:   mvp.nonempty_text
    #.......................................................................................................
    person:
      fields:
        address:    mvp.address
        name:       'name'
  #.........................................................................................................
  flatly_1 = new Typespace
    flat:         ( x, t ) -> t.isa mvp.even, x
    evenly:       'flat'
    plain:        'evenly'
    # foo:          'bar'
  #.........................................................................................................
  flatly_2 = new Typespace
    flat:         mvp.even
    evenly:       'flat'
    plain:        'evenly'
  #.........................................................................................................
  cr1 = new Typespace
    int_no_create:
      isa:      ( x, t ) -> Number.isInteger x
    int_create_zero:
      isa:      ( x, t ) -> Number.isInteger x
      template: 0
    int_create_zero_fn:
      isa:      ( x, t ) -> Number.isInteger x
      template: -> 0
    int_create_fn:
      isa:      ( x, t ) -> Number.isInteger x
      create:   ( [ numeric, P..., ], t ) ->
        unless P.length is 0
          throw new Error "Ωit___1 create method for #{@$typename} doesn't accept more than one argument"
        return 0 unless numeric?
        return Math.floor numeric if t.isa mvp.float, numeric
        return parseInt numeric if ( t.isa mvp.text, numeric ) and ( /^(0|[1-9][0-9]*)$/.test numeric )
        throw new Error "Ωit___2 unable to create a #{@$typename} from value #{rpr numeric}"
  #.........................................................................................................
  crt = new Typespace
    cNfNtN:   {}
    # cNfNtV:   { template: {}, }
    # cNfNAPtV: { fields: 89, }
  #.........................................................................................................
  return { mvp, ts1, flatly_1, flatly_2, crt, cr1, }


#===========================================================================================================
sample_declarations =
  anything:               ( x ) -> true
  boolean:                ( x ) -> ( x is true ) or ( x is false )
  function:               ( x ) -> ( Object::toString.call x ) is '[object Function]'
  asyncfunction:          ( x ) -> ( Object::toString.call x ) is '[object AsyncFunction]'
  symbol:                 ( x ) -> ( typeof x ) is 'symbol'
  object:                 ( x ) -> x? and ( typeof x is 'object' ) and ( ( Object::toString.call x ) is '[object Object]' )
  float:                  ( x ) -> Number.isFinite x
  text:                   ( x ) -> ( typeof x ) is 'string'
  nullary:                ( x ) -> x? and ( ( x.length is 0 ) or ( x.size is 0 ) )
  unary:                  ( x ) -> x? and ( ( x.length is 1 ) or ( x.size is 1 ) )
  binary:                 ( x ) -> x? and ( ( x.length is 2 ) or ( x.size is 2 ) )
  trinary:                ( x ) -> x? and ( ( x.length is 3 ) or ( x.size is 3 ) )
  object:                 ( x ) -> x? and ( typeof x is 'object' ) and ( ( Object::toString.call x ) is '[object Object]' )
  set:                    ( x ) -> x instanceof Set
  list:                   ( x ) -> Array.isArray x



############################################################################################################
#
#===========================================================================================================
@intertype_tasks =


  #---------------------------------------------------------------------------------------------------------
  experiments:

    #-------------------------------------------------------------------------------------------------------
    clone_fields_and_template: ->
      { $isa
        Intertype
        Type
        Typespace
        types           } = require '../../../apps/intertype'
      { props: {
          nameit } }      = require '../../../apps/intertype/node_modules/webguy'
      #.....................................................................................................
      cfg =
        freeze: true
        # freeze: false
      freeze = if cfg.freeze then Object.freeze else ( x ) -> x
      #.....................................................................................................
      qq =
        #...................................................................................................
        get_create: ( d ) ->
          return @_get_create_for_pods      d if $isa.pod       d
          return @_get_create_for_functions d if $isa.function  d
          return ( P, t ) -> freeze d
        #...................................................................................................
        _get_create_for_pods: ( d ) ->
          shadow    = new Map()
          for key in ( Object.getOwnPropertyNames d ).concat Object.getOwnPropertySymbols d
            descriptor = Object.getOwnPropertyDescriptor d, key
            continue unless descriptor.enumerable ### strange but important for e.g. `String::length` ###
            name = if ( $isa.text key ) then key else Symbol::toString.call key
            shadow.set key, nameit name, @get_create descriptor.value
          #.................................................................................................
          return ( P, t ) ->
            R = {}
            for [ key, value, ] from shadow.entries()
              R[ key ] = value.call @, P, t
            freeze R
            return R
        #...................................................................................................
        _get_create_for_functions: ( d ) ->
          return ( P, t ) -> freeze d.call @, P, t
      #.....................................................................................................
      typespace =
        a:
          [Symbol.for 'e']: { z: 'Z', }
          b: [ 'B', ]
          c: ( P, t ) -> debug 'Ωit_187', P; [ 'C', ( P ? [] )..., ]
          d: 9
      typespace.t =
        A: typespace.a
        B: -> [ 'ä', 'ö', 'ü', 'ß', ]
      #.....................................................................................................
      help 'Ωit_188', qq.get_create typespace.a
      help 'Ωit_189', ( qq.get_create typespace.a )()
      help 'Ωit_190', t1 = ( qq.get_create typespace.t )()
      help 'Ωit_191', t2 = ( qq.get_create typespace.t ) [ 1, 2, 3, ]
      info 'Ωit_192', GUY.trm.truth Object.isFrozen ( qq.get_create typespace.a )().b
      info 'Ωit_193', GUY.trm.truth Object.isFrozen t1
      info 'Ωit_194', GUY.trm.truth Object.isFrozen t1.A
      info 'Ωit_195', GUY.trm.truth Object.isFrozen t1.B
      try t1.B.push 't1' catch e then warn 'Ωit_196', e.message
      try t2.B.push 't2' catch e then warn 'Ωit_197', e.message
      help 'Ωit_198', t1.B
      help 'Ωit_199', t2.B
      help 'Ωit_200', GUY.trm.truth t1.B is t2.B
      help 'Ωit_201', GUY.trm.truth Object.isFrozen t1.B
      help 'Ωit_202', GUY.trm.truth Object.isFrozen t2.B
      try t1.A.b.push 't1' catch e then warn 'Ωit_203', e.message
      try t2.A.b.push 't2' catch e then warn 'Ωit_204', e.message
      help 'Ωit_205', t1.A.b
      help 'Ωit_206', t2.A.b
      help 'Ωit_207', GUY.trm.truth t1.A.b is t2.A.b
      help 'Ωit_208', GUY.trm.truth Object.isFrozen t1.A.b
      help 'Ωit_209', t1.A[ Symbol.for 'e' ]
      help 'Ωit_210', t2.A[ Symbol.for 'e' ]
      help 'Ωit_211', GUY.trm.truth t1.A[ Symbol.for 'e' ] is t2.A[ Symbol.for 'e' ]
      help 'Ωit_212', typespace.a
      help 'Ωit_213', Object.assign {}, typespace.a, typespace.t
      help 'Ωit_214', ( qq.get_create Object.assign {}, typespace.a, typespace.t )()
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    recursive_merge: ->
      { $isa
        Intertype
        Type
        Typespace
        types           } = require '../../../apps/intertype'
      { props: {
          nameit } }      = require '../../../apps/intertype/node_modules/webguy'
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    stability_with_nulls: ->
      { Intertype
        Type
        Typespace
        types           } = require '../../../apps/intertype'
      { mvp             } = get_typespaces()
      #.....................................................................................................
      s = new Typespace
        h: ( x, t ) -> try t.isa mvp.text, x.d catch e then ( if e instanceof TypeError then false else throw e )
      #.....................................................................................................
      debug 'Ωit_215', types.isa s.h, { d: 4, }
      debug 'Ωit_216', types.isa s.h, { d: 'D', }
      try debug 'Ωit_217', types.isa s.h, null catch error then warn 'Ωit_218', error
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    key_handling: ->
      { Intertype
        Type
        Typespace
        types           } = require '../../../apps/intertype'
      { mvp             } = get_typespaces()
      #.....................................................................................................
      class Q
        #---------------------------------------------------------------------------------------------------------
        _get_own_keys: ( d ) ->
          return [] unless d?
          return ( Object.getOwnPropertyNames d ).concat Object.getOwnPropertySymbols d
        #---------------------------------------------------------------------------------------------------------
        _get_own_user_keys: ( d ) -> ( k for k in @_get_own_keys d when ( typeof k is 'symbol' ) or ( not k.startsWith '$' ) )
        _get_own_system_keys: ( d ) -> ( k for k in Object.getOwnPropertyNames d when k.startsWith '$' )
      #.....................................................................................................
      return null

    # #-------------------------------------------------------------------------------------------------------
    # create: ->
    #   { Intertype
    #     Type
    #     Typespace
    #     types           } = require '../../../apps/intertype'
    #   { crt             } = get_typespaces()
    #   #.....................................................................................................
    #   @throws ( Ωit_219 = -> types.create crt.cNfNtN                ), /MEH-create-/
    #   @throws ( Ωit_220 = -> types.create crt.cNfNtV                ), /expected `fields` to be a POD/
    #   @throws ( Ωit_221 = -> types.create crt.cNfNAPtV              ), /MEH-create-/
    #   #.....................................................................................................
    #   return null


#===========================================================================================================
if module is require.main then await do =>
  ( new Test { throw_on_error: false, } ).test @intertype_tasks
