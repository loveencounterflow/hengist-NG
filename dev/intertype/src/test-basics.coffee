

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
get_MVP_typespaces = ->
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
    float:          ( x, t ) -> Number.isFinite x
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
    weird:    'strange' # declares another name for `odd`
    strange:  'odd'     # declares another name for `odd`
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
  qqq = new Typespace
    #.......................................................................................................
    quantity_typs:
      fields:
        q:    mvp.float
        u:    mvp.nonempty_text
      template:
        q:    0
        u:    'u'
  #.........................................................................................................
  flatly_1 = new Typespace
    evenly:       'flat'
    flat:         ( x, t ) -> t.isa mvp.even, x
    plain:        'evenly'
    # foo:          'bar'
  #.........................................................................................................
  flatly_2 = new Typespace
    evenly:       'flat'
    flat:         mvp.even
    plain:        'evenly'
  #.........................................................................................................
  return { mvp, qqq, flatly_1, flatly_2, }

#===========================================================================================================
get_create_typespaces = ->
  { Typespace } = require '../../../apps/intertype'
  #.........................................................................................................
  crt = new Typespace
    cNfNtN:   {}
    cNfNtV:   { template: {}, }
    cNfNAPtV: { fields: 89, }
  #.........................................................................................................
  return { crt, }


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

  #=========================================================================================================
  MVP:

    #-------------------------------------------------------------------------------------------------------
    isa: ->
      { Intertype
        Type
        Typespace
        types           } = require '../../../apps/intertype'
      { flatly_1
        flatly_2
        qqq
        mvp         } = get_MVP_typespaces()
      $isa = sample_declarations
      #.....................................................................................................
      @eq ( Ωit___1 = -> mvp            instanceof Typespace          ), true
      @eq ( Ωit___2 = -> flatly_1       instanceof Typespace          ), true
      @eq ( Ωit___3 = -> flatly_2       instanceof Typespace          ), true
      @eq ( Ωit___4 = -> flatly_1.flat  instanceof Type               ), true
      @eq ( Ωit___5 = -> flatly_2.flat  instanceof Type               ), true
      @eq ( Ωit___6 = -> mvp.quantity_refs   instanceof Type               ), true
      @eq ( Ωit___7 = -> mvp.quantity_funs   instanceof Type               ), true
      @eq ( Ωit___8 = -> qqq.quantity_typs   instanceof Type               ), true
      @eq ( Ωit___9 = -> $isa.function  mvp.quantity_refs.isa              ), true
      @eq ( Ωit__10 = -> $isa.function  mvp.quantity_funs.isa              ), true
      @eq ( Ωit__11 = -> $isa.function  qqq.quantity_typs.isa              ), true
      @eq ( Ωit__12 = -> $isa.object    mvp.quantity_refs.fields           ), true
      @eq ( Ωit__13 = -> $isa.object    mvp.quantity_funs.fields           ), true
      @eq ( Ωit__14 = -> $isa.object    qqq.quantity_typs.fields           ), true
      @eq ( Ωit__15 = -> mvp.quantity_refs.fields.q instanceof Type        ), true
      @eq ( Ωit__16 = -> mvp.quantity_funs.fields.q instanceof Type        ), true
      @eq ( Ωit__17 = -> qqq.quantity_typs.fields.q instanceof Type        ), true
      @eq ( Ωit__18 = -> $isa.function  mvp.quantity_refs.fields.q.isa     ), true
      @eq ( Ωit__19 = -> $isa.function  mvp.quantity_funs.fields.q.isa     ), true
      @eq ( Ωit__20 = -> $isa.function  qqq.quantity_typs.fields.q.isa     ), true
      #.....................................................................................................
      echo()
      @eq ( Ωit__21 = -> types.isa mvp.integer,              5                          ), true
      @eq ( Ωit__22 = -> types.isa mvp.odd,                  5                          ), true
      @eq ( Ωit__23 = -> types.isa mvp.even,                 6                          ), true
      @eq ( Ωit__24 = -> types.isa mvp.strange,              5                          ), true
      @eq ( Ωit__25 = -> types.isa mvp.weird,                5                          ), true
      @eq ( Ωit__26 = -> types.isa mvp.abnormal,             5                          ), true
      @eq ( Ωit__27 = -> types.isa flatly_1.flat,            8                          ), true
      @eq ( Ωit__28 = -> types.isa flatly_1.evenly,          8                          ), true
      @eq ( Ωit__29 = -> types.isa flatly_1.plain,           8                          ), true
      @eq ( Ωit__30 = -> types.isa flatly_2.flat,            8                          ), true
      @eq ( Ωit__31 = -> types.isa flatly_2.evenly,          8                          ), true
      @eq ( Ωit__32 = -> types.isa flatly_2.plain,           8                          ), true
      @eq ( Ωit__33 = -> types.isa mvp.nonempty_text,        'abc'                      ), true
      @eq ( Ωit__34 = -> types.isa mvp.quantity_refs.fields.q,    123.456                    ), true
      @eq ( Ωit__35 = -> types.isa mvp.quantity_funs.fields.q,    123.456                    ), true
      @eq ( Ωit__36 = -> types.isa qqq.quantity_typs.fields.q,    123.456                    ), true
      @eq ( Ωit__37 = -> types.isa mvp.quantity_refs.fields.u,    'm'                        ), true
      @eq ( Ωit__38 = -> types.isa mvp.quantity_funs.fields.u,    'm'                        ), true
      @eq ( Ωit__39 = -> types.isa qqq.quantity_typs.fields.u,    'm'                        ), true
      @eq ( Ωit__40 = -> types.isa mvp.quantity_refs,             { q: 123.456, u: 'm', }    ), true
      @eq ( Ωit__41 = -> types.isa mvp.quantity_funs,             { q: 123.456, u: 'm', }    ), true
      @eq ( Ωit__42 = -> types.isa qqq.quantity_typs,             { q: 123.456, u: 'm', }    ), true
      #.....................................................................................................
      echo()
      @eq ( Ωit__43 = -> types.isa mvp.integer,              5.3                        ), false
      @eq ( Ωit__44 = -> types.isa mvp.odd,                  6                          ), false
      @eq ( Ωit__45 = -> types.isa mvp.odd,                  5.3                        ), false
      @eq ( Ωit__46 = -> types.isa mvp.even,                 5                          ), false
      @eq ( Ωit__47 = -> types.isa mvp.strange,              6                          ), false
      @eq ( Ωit__48 = -> types.isa mvp.weird,                6                          ), false
      @eq ( Ωit__49 = -> types.isa mvp.abnormal,             6                          ), false
      @eq ( Ωit__50 = -> types.isa flatly_1.evenly,          5                          ), false
      @eq ( Ωit__51 = -> types.isa flatly_1.flat,            5                          ), false
      @eq ( Ωit__52 = -> types.isa flatly_1.plain,           5                          ), false
      @eq ( Ωit__53 = -> types.isa flatly_2.flat,            5                          ), false
      @eq ( Ωit__54 = -> types.isa flatly_2.evenly,          5                          ), false
      @eq ( Ωit__55 = -> types.isa flatly_2.plain,           5                          ), false
      @eq ( Ωit__56 = -> types.isa mvp.nonempty_text,        ''                         ), false
      @eq ( Ωit__57 = -> types.isa mvp.quantity_refs.fields.q,    '123.456'                  ), false
      @eq ( Ωit__58 = -> types.isa mvp.quantity_funs.fields.q,    '123.456'                  ), false
      @eq ( Ωit__59 = -> types.isa qqq.quantity_typs.fields.q,    '123.456'                  ), false
      @eq ( Ωit__60 = -> types.isa mvp.quantity_refs.fields.u,    ''                         ), false
      @eq ( Ωit__61 = -> types.isa mvp.quantity_funs.fields.u,    ''                         ), false
      @eq ( Ωit__62 = -> types.isa qqq.quantity_typs.fields.u,    ''                         ), false
      @eq ( Ωit__63 = -> types.isa mvp.quantity_refs,             { q: 123.456, u: '', }     ), false
      @eq ( Ωit__64 = -> types.isa mvp.quantity_funs,             { q: 123.456, u: '', }     ), false
      @eq ( Ωit__65 = -> types.isa qqq.quantity_typs,             { q: 123.456, u: '', }     ), false
      @eq ( Ωit__66 = -> types.isa mvp.quantity_refs,             { q: null, u: 'm', }       ), false
      @eq ( Ωit__67 = -> types.isa mvp.quantity_funs,             { q: null, u: 'm', }       ), false
      @eq ( Ωit__68 = -> types.isa qqq.quantity_typs,             { q: null, u: 'm', }       ), false
      #.....................................................................................................
      return null


    #-------------------------------------------------------------------------------------------------------
    validate: ->
      { Intertype
        Type
        Typespace
        types           } = require '../../../apps/intertype'
      { flatly_1
        flatly_2
        qqq
        mvp         } = get_MVP_typespaces()
      $isa = sample_declarations
      #.....................................................................................................
      @eq     ( Ωit__69 = -> types.validate mvp.integer,  -5                      ), -5
      @eq     ( Ωit__70 = -> types.validate mvp.integer,  5                       ), 5
      @throws ( Ωit__71 = -> types.validate mvp.integer,  5.3                     ), /expected a integer/
      @throws ( Ωit__72 = -> types.validate mvp.quantity_refs,  5                      ), /expected a quantity/
      @throws ( Ωit__73 = -> types.validate mvp.quantity_funs,  5                      ), /expected a quantity/
      @throws ( Ωit__74 = -> types.validate qqq.quantity_typs,  5                      ), /expected a quantity/
      @eq     ( Ωit__75 = -> types.validate mvp.quantity_refs, { q: 123.4, u: 'km', }  ), { q: 123.4, u: 'km', }
      @eq     ( Ωit__76 = -> types.validate mvp.quantity_funs, { q: 123.4, u: 'km', }  ), { q: 123.4, u: 'km', }
      @eq     ( Ωit__77 = -> types.validate qqq.quantity_typs, { q: 123.4, u: 'km', }  ), { q: 123.4, u: 'km', }
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    evaluate: ->
      { Intertype
        Type
        Typespace
        types           } = require '../../../apps/intertype'
      { flatly_1
        flatly_2
        qqq
        mvp         } = get_MVP_typespaces()
      $isa = sample_declarations
      #.....................................................................................................
      echo()
      probes_and_matchers = [
        [[ mvp.integer, 5 ], [
          [ 'integer',                                                                       5,                                            true,   ]
          ]]
        [[ mvp.integer, 5.3 ], [
          [ 'integer',                                                                       5.3,                                          false,  ]
          ]]
        [[ mvp.even, 5 ], [
          [ 'even',                                                                          5,                                            false,  ]
          [ 'even/integer',                                                                  5,                                            true,   ]
          ]]
        [[ flatly_1.evenly, 5 ], [
          [ 'evenly',                                                                        5,                                            false,  ]
          [ 'evenly/flat',                                                                   5,                                            false,  ]
          [ 'evenly/flat/even',                                                              5,                                            false,  ]
          [ 'evenly/flat/even/integer',                                                      5,                                            true,   ]
          ]]
        [[ flatly_1.evenly, 6 ], [
          [ 'evenly',                                                                        6,                                            true,   ]
          [ 'evenly/flat',                                                                   6,                                            true,   ]
          [ 'evenly/flat/even',                                                              6,                                            true,   ]
          [ 'evenly/flat/even/integer',                                                      6,                                            true,   ]
          ]]
        [[ flatly_2.evenly, 5 ], [
          [ 'evenly',                                                                        5,                                            false,  ]
          [ 'evenly/even',                                                                   5,                                            false,  ]
          [ 'evenly/even/integer',                                                           5,                                            true,   ]
          ]]
        [[ flatly_2.evenly, 6 ], [
          [ 'evenly',                                                                        6,                                            true,   ]
          [ 'evenly/even',                                                                   6,                                            true,   ]
          [ 'evenly/even/integer',                                                           6,                                            true,   ]
          ]]
        [[ mvp.quantity_refs, { q: 123.456, u: '' } ], [
          [ 'quantity_refs',                                                                 { q: 123.456, u: '' },                        false,  ]
          [ 'quantity_refs/quantity_refs_$q',                                                123.456,                                      true,   ]
          [ 'quantity_refs/quantity_refs_$q/float',                                          123.456,                                      true,   ]
          [ 'quantity_refs/quantity_refs_$u',                                                '',                                           false,  ]
          [ 'quantity_refs/quantity_refs_$u/nonempty_text',                                  '',                                           false,  ]
          [ 'quantity_refs/quantity_refs_$u/nonempty_text/text',                             '',                                           true,   ]
          ]]
        [[ mvp.quantity_funs, { q: 123.456, u: '' } ], [
          [ 'quantity_funs',                                                                 { q: 123.456, u: '' },                        false,  ]
          [ 'quantity_funs/quantity_funs_$q',                                                123.456,                                      true,   ]
          [ 'quantity_funs/quantity_funs_$q/float',                                          123.456,                                      true,   ]
          [ 'quantity_funs/quantity_funs_$u',                                                '',                                           false,  ]
          [ 'quantity_funs/quantity_funs_$u/nonempty_text',                                  '',                                           false,  ]
          [ 'quantity_funs/quantity_funs_$u/nonempty_text/text',                             '',                                           true,   ]
          ]]
        [[ qqq.quantity_typs, { q: 123.456, u: '' } ], [
          [ 'quantity_typs',                                                                 { q: 123.456, u: '' },                        false,  ]
          [ 'quantity_typs/quantity_typs_$q',                                                123.456,                                      true,   ]
          [ 'quantity_typs/quantity_typs_$q/float',                                          123.456,                                      true,   ]
          [ 'quantity_typs/quantity_typs_$u',                                                '',                                           false,  ]
          [ 'quantity_typs/quantity_typs_$u/nonempty_text',                                  '',                                           false,  ]
          [ 'quantity_typs/quantity_typs_$u/nonempty_text/text',                             '',                                           true,   ]
          ]]
        [[ mvp.quantity_refs, { q: 123.456, u: null } ], [
          [ 'quantity_refs',                                                                 { q: 123.456, u: null },                      false,  ]
          [ 'quantity_refs/quantity_refs_$q',                                                123.456,                                      true,   ]
          [ 'quantity_refs/quantity_refs_$q/float',                                          123.456,                                      true,   ]
          [ 'quantity_refs/quantity_refs_$u',                                                null,                                         false,  ]
          [ 'quantity_refs/quantity_refs_$u/nonempty_text',                                  null,                                         false,  ]
          [ 'quantity_refs/quantity_refs_$u/nonempty_text/text',                             null,                                         false,  ]
          ]]
        [[ mvp.quantity_funs, { q: 123.456, u: null } ], [
          [ 'quantity_funs',                                                                 { q: 123.456, u: null },                      false,  ]
          [ 'quantity_funs/quantity_funs_$q',                                                123.456,                                      true,   ]
          [ 'quantity_funs/quantity_funs_$q/float',                                          123.456,                                      true,   ]
          [ 'quantity_funs/quantity_funs_$u',                                                null,                                         false,  ]
          [ 'quantity_funs/quantity_funs_$u/nonempty_text',                                  null,                                         false,  ]
          [ 'quantity_funs/quantity_funs_$u/nonempty_text/text',                             null,                                         false,  ]
          ]]
        [[ qqq.quantity_typs, { q: 123.456, u: null } ], [
          [ 'quantity_typs',                                                                 { q: 123.456, u: null },                      false,  ]
          [ 'quantity_typs/quantity_typs_$q',                                                123.456,                                      true,   ]
          [ 'quantity_typs/quantity_typs_$q/float',                                          123.456,                                      true,   ]
          [ 'quantity_typs/quantity_typs_$u',                                                null,                                         false,  ]
          [ 'quantity_typs/quantity_typs_$u/nonempty_text',                                  null,                                         false,  ]
          [ 'quantity_typs/quantity_typs_$u/nonempty_text/text',                             null,                                         false,  ]
          ]]
        [[ mvp.quantity_refs, { q: 'nan', u: 'm' } ], [
          [ 'quantity_refs',                                                                 { q: 'nan', u: 'm' },                         false,  ]
          [ 'quantity_refs/quantity_refs_$q',                                                'nan',                                        false,  ]
          [ 'quantity_refs/quantity_refs_$q/float',                                          'nan',                                        false,  ]
          ]]
        [[ mvp.quantity_funs, { q: 'nan', u: 'm' } ], [
          [ 'quantity_funs',                                                                 { q: 'nan', u: 'm' },                         false,  ]
          [ 'quantity_funs/quantity_funs_$q',                                                'nan',                                        false,  ]
          [ 'quantity_funs/quantity_funs_$q/float',                                          'nan',                                        false,  ]
          ]]
        [[ qqq.quantity_typs, { q: 'nan', u: 'm' } ], [
          [ 'quantity_typs',                                                                 { q: 'nan', u: 'm' },                         false,  ]
          [ 'quantity_typs/quantity_typs_$q',                                                'nan',                                        false,  ]
          [ 'quantity_typs/quantity_typs_$q/float',                                          'nan',                                        false,  ]
          ]]
        [[ mvp.employee, { address: { postcode: 'SE36', city: 'London' }, name: null } ], [
          [ 'employee',                                                                      { address: { postcode: 'SE36', city: 'London' }, name: null }, false,  ]
          [ 'employee/employee_$address',                                                    { postcode: 'SE36', city: 'London' },         true,   ]
          [ 'employee/employee_$address/address',                                            { postcode: 'SE36', city: 'London' },         true,   ]
          [ 'employee/employee_$address/address/address_$postcode',                          'SE36',                                       true,   ]
          [ 'employee/employee_$address/address/address_$postcode/nonempty_text',            'SE36',                                       true,   ]
          [ 'employee/employee_$address/address/address_$postcode/nonempty_text/text',       'SE36',                                       true,   ]
          [ 'employee/employee_$address/address/address_$city',                              'London',                                     true,   ]
          [ 'employee/employee_$address/address/address_$city/nonempty_text',                'London',                                     true,   ]
          [ 'employee/employee_$address/address/address_$city/nonempty_text/text',           'London',                                     true,   ]
          [ 'employee/employee_$name',                                                       null,                                         false,  ]
          ]]
        [[ mvp.employee, { address: { postcode: 'SE36', city: 'London' }, name: {} } ], [
          [ 'employee',                                                                      { address: { postcode: 'SE36', city: 'London' }, name: {} }, false,  ]
          [ 'employee/employee_$address',                                                    { postcode: 'SE36', city: 'London' },         true,   ]
          [ 'employee/employee_$address/address',                                            { postcode: 'SE36', city: 'London' },         true,   ]
          [ 'employee/employee_$address/address/address_$postcode',                          'SE36',                                       true,   ]
          [ 'employee/employee_$address/address/address_$postcode/nonempty_text',            'SE36',                                       true,   ]
          [ 'employee/employee_$address/address/address_$postcode/nonempty_text/text',       'SE36',                                       true,   ]
          [ 'employee/employee_$address/address/address_$city',                              'London',                                     true,   ]
          [ 'employee/employee_$address/address/address_$city/nonempty_text',                'London',                                     true,   ]
          [ 'employee/employee_$address/address/address_$city/nonempty_text/text',           'London',                                     true,   ]
          [ 'employee/employee_$name',                                                       {},                                           false,  ]
          [ 'employee/employee_$name/employee_$name_$firstname',                             undefined,                                    false,  ]
          [ 'employee/employee_$name/employee_$name_$firstname/nonempty_text',               undefined,                                    false,  ]
          [ 'employee/employee_$name/employee_$name_$firstname/nonempty_text/text',          undefined,                                    false,  ]
          ]]
        [[ mvp.employee, { address: { postcode: 'SE36', city: 'London' }, name: { firstname: 'Bob' } } ], [
          [ 'employee',                                                                      { address: { postcode: 'SE36', city: 'London' }, name: { firstname: 'Bob' } }, false,  ]
          [ 'employee/employee_$address',                                                    { postcode: 'SE36', city: 'London' },         true,   ]
          [ 'employee/employee_$address/address',                                            { postcode: 'SE36', city: 'London' },         true,   ]
          [ 'employee/employee_$address/address/address_$postcode',                          'SE36',                                       true,   ]
          [ 'employee/employee_$address/address/address_$postcode/nonempty_text',            'SE36',                                       true,   ]
          [ 'employee/employee_$address/address/address_$postcode/nonempty_text/text',       'SE36',                                       true,   ]
          [ 'employee/employee_$address/address/address_$city',                              'London',                                     true,   ]
          [ 'employee/employee_$address/address/address_$city/nonempty_text',                'London',                                     true,   ]
          [ 'employee/employee_$address/address/address_$city/nonempty_text/text',           'London',                                     true,   ]
          [ 'employee/employee_$name',                                                       { firstname: 'Bob' },                         false,  ]
          [ 'employee/employee_$name/employee_$name_$firstname',                             'Bob',                                        true,   ]
          [ 'employee/employee_$name/employee_$name_$firstname/nonempty_text',               'Bob',                                        true,   ]
          [ 'employee/employee_$name/employee_$name_$firstname/nonempty_text/text',          'Bob',                                        true,   ]
          [ 'employee/employee_$name/employee_$name_$lastname',                              undefined,                                    false,  ]
          [ 'employee/employee_$name/employee_$name_$lastname/nonempty_text',                undefined,                                    false,  ]
          [ 'employee/employee_$name/employee_$name_$lastname/nonempty_text/text',           undefined,                                    false,  ]
          ]]
        [[ mvp.employee, { address: { postcode: 'SE36', city: 'London' }, name: { firstname: 'Bob', lastname: 'Miller' } } ], [
          [ 'employee',                                                                      { address: { postcode: 'SE36', city: 'London' }, name: { firstname: 'Bob', lastname: 'Miller' } }, true,   ]
          [ 'employee/employee_$address',                                                    { postcode: 'SE36', city: 'London' },         true,   ]
          [ 'employee/employee_$address/address',                                            { postcode: 'SE36', city: 'London' },         true,   ]
          [ 'employee/employee_$address/address/address_$postcode',                          'SE36',                                       true,   ]
          [ 'employee/employee_$address/address/address_$postcode/nonempty_text',            'SE36',                                       true,   ]
          [ 'employee/employee_$address/address/address_$postcode/nonempty_text/text',       'SE36',                                       true,   ]
          [ 'employee/employee_$address/address/address_$city',                              'London',                                     true,   ]
          [ 'employee/employee_$address/address/address_$city/nonempty_text',                'London',                                     true,   ]
          [ 'employee/employee_$address/address/address_$city/nonempty_text/text',           'London',                                     true,   ]
          [ 'employee/employee_$name',                                                       { firstname: 'Bob', lastname: 'Miller' },     true,   ]
          [ 'employee/employee_$name/employee_$name_$firstname',                             'Bob',                                        true,   ]
          [ 'employee/employee_$name/employee_$name_$firstname/nonempty_text',               'Bob',                                        true,   ]
          [ 'employee/employee_$name/employee_$name_$firstname/nonempty_text/text',          'Bob',                                        true,   ]
          [ 'employee/employee_$name/employee_$name_$lastname',                              'Miller',                                     true,   ]
          [ 'employee/employee_$name/employee_$name_$lastname/nonempty_text',                'Miller',                                     true,   ]
          [ 'employee/employee_$name/employee_$name_$lastname/nonempty_text/text',           'Miller',                                     true,   ]
          ]]
        ]
      #.....................................................................................................
      fm = ( x, width = 0 ) -> ( ( rpr x ) + ',' ).padEnd width
      for [ [ probe_type, probe_value, ], matcher, ] in probes_and_matchers
        echo '[[', ( 'mvp.' + probe_type.$typename + ',' ), ( probe_value ), '], ['
        records = types.evaluate probe_type, probe_value
        for record, idx in records
          # @eq ( Ωit__78 = -> [ record.stack, record.value, record.verdict, ] ), matcher[ idx ]
          echo '  [', ( fm record.stack, 80 ), ( fm record.value, 45 ), ( fm record.verdict, 7 ), ']'
        echo '  ]]'
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    typenames: ->
      { Intertype
        Type
        Typespace
        types           } = require '../../../apps/intertype'
      { flatly_1
        flatly_2
        qqq
        mvp         } = get_MVP_typespaces()
      #.....................................................................................................
      urge 'Ωit__79', type for type of mvp
      debug 'Ωit__80', type for type of qqq
      debug 'Ωit__81', qqq.quantity_typs
      # debug 'Ωit__82', types.create std.integer, 7
      # debug 'Ωit__83', types.create std.integer, 7.8
      # debug 'Ωit__84', types.create std.integer, '7'
      # debug 'Ωit__85', types.create std.integer, '7.8'
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    create: ->
      { Intertype
        Type
        Typespace
        types           } = require '../../../apps/intertype'
      { flatly_1
        flatly_2
        mvp         } = get_MVP_typespaces()
      $isa = sample_declarations
      #.....................................................................................................
      # debug 'Ωit__86', types.create std.integer
      # debug 'Ωit__87', types.create std.integer, 7
      # debug 'Ωit__88', types.create std.integer, 7.8
      # debug 'Ωit__89', types.create std.integer, '7'
      # debug 'Ωit__90', types.create std.integer, '7.8'
      #.....................................................................................................
      return null


  #=========================================================================================================
  basics:

    #-------------------------------------------------------------------------------------------------------
    type_of: ->
      { Intertype
        Type
        Typespace
        types           } = require '../../../apps/intertype'
      # { mvp         } = get_MVP_typespaces()
      $isa = sample_declarations
      #.....................................................................................................
      @eq ( Ωit__91 = -> $isa.list Intertype.primitive_types        ), true
      @eq ( Ωit__92 = -> Object.isFrozen Intertype.primitive_types  ), true
      #.....................................................................................................
      @eq ( Ωit__93 = -> Intertype.type_of null               ), 'null'
      @eq ( Ωit__94 = -> Intertype.type_of undefined          ), 'undefined'
      @eq ( Ωit__95 = -> Intertype.type_of +Infinity          ), 'infinity'
      @eq ( Ωit__96 = -> Intertype.type_of -Infinity          ), 'infinity'
      @eq ( Ωit__97 = -> Intertype.type_of true               ), 'boolean'
      @eq ( Ωit__98 = -> Intertype.type_of false              ), 'boolean'
      @eq ( Ωit__99 = -> Intertype.type_of NaN                ), 'nan'
      @eq ( Ωit_100 = -> Intertype.type_of 6e78               ), 'float'
      @eq ( Ωit_101 = -> Intertype.type_of 'wat'              ), 'text'
      @eq ( Ωit_102 = -> Intertype.type_of []                 ), 'list'
      @eq ( Ωit_103 = -> Intertype.type_of ( -> null )        ), 'function'
      @eq ( Ωit_104 = -> Intertype.type_of ( -> await null )  ), 'asyncfunction'
      @eq ( Ωit_105 = -> Intertype.type_of ( -> yield null )  ), 'generatorfunction'
      @eq ( Ωit_106 = -> Intertype.type_of {}                 ), 'object'
      @eq ( Ωit_107 = -> Intertype.type_of new Set()          ), 'set'
      @eq ( Ωit_108 = -> Intertype.type_of new Map()          ), 'map'
      @eq ( Ωit_109 = -> Intertype.type_of new WeakMap()      ), 'weakmap'
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    types_of: ->
      { Intertype
        Type
        Typespace
        types           } = require '../../../apps/intertype'
      { mvp         } = get_MVP_typespaces()
      $isa = sample_declarations
      class Myclass
      #.....................................................................................................
      @eq ( Ωit_110 = -> types.types_of mvp, null               ), [ 'nothing', 'primitive', 'null', ]
      @eq ( Ωit_111 = -> types.types_of mvp, undefined          ), [ 'nothing', 'primitive', 'undefined', ]
      @eq ( Ωit_112 = -> types.types_of mvp, +Infinity          ), [ 'something', 'primitive', 'infinity', ]
      @eq ( Ωit_113 = -> types.types_of mvp, -Infinity          ), [ 'something', 'primitive', 'infinity', ]
      @eq ( Ωit_114 = -> types.types_of mvp, true               ), [ 'something', 'primitive', 'boolean', ]
      @eq ( Ωit_115 = -> types.types_of mvp, false              ), [ 'something', 'primitive', 'boolean', ]
      @eq ( Ωit_116 = -> types.types_of mvp, NaN                ), [ 'something', 'primitive', 'nan', ]
      @eq ( Ωit_117 = -> types.types_of mvp, 6e78               ), [ 'something', 'primitive', 'integer', 'even', 'float', 'quantity_refs_$q', 'quantity_funs_$q' ]
      @eq ( Ωit_118 = -> types.types_of mvp, 3                  ), [ 'something', 'primitive', 'integer', 'odd', 'float', 'weird', 'strange', 'abnormal', 'quantity_refs_$q', 'quantity_funs_$q' ]
      @eq ( Ωit_119 = -> types.types_of mvp, 'wat'              ), [ 'something', 'primitive', 'text', 'nonempty_text', 'quantity_refs_$u', 'quantity_funs_$u', 'address_$postcode', 'address_$city', 'employee_$name_$firstname', 'employee_$name_$lastname' ]
      @eq ( Ωit_120 = -> types.types_of mvp, ''                 ), [ 'something', 'primitive', 'text', 'empty_text', ]
      @eq ( Ωit_121 = -> types.types_of mvp, []                 ), [ 'something', 'object', 'list', ]
      @eq ( Ωit_122 = -> types.types_of mvp, ( -> null )        ), [ 'something', 'object', 'function', ]
      @eq ( Ωit_123 = -> types.types_of mvp, ( -> await null )  ), [ 'something', 'object', 'asyncfunction', ]
      @eq ( Ωit_124 = -> types.types_of mvp, ( -> yield null )  ), [ 'something', 'object', 'generatorfunction', ]
      @eq ( Ωit_125 = -> types.types_of mvp, {}                 ), [ 'something', 'object', 'pod', ]
      @eq ( Ωit_126 = -> types.types_of mvp, Object.create null ), [ 'something', 'object', 'pod', ]
      @eq ( Ωit_127 = -> types.types_of mvp, new Myclass()      ), [ 'something', 'object', ]
      @eq ( Ωit_128 = -> types.types_of mvp, new Set()          ), [ 'something', 'object', 'set', ]
      @eq ( Ωit_129 = -> types.types_of mvp, new Map()          ), [ 'something', 'object', 'map', ]
      @eq ( Ωit_130 = -> types.types_of mvp, new WeakMap()      ), [ 'something', 'object', 'weakmap', ]
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    $type_of_and_$isa: ->
      { std
        $isa
        $type_of        } = require '../../../apps/intertype'
      class A extends Object
      #.....................................................................................................
      @eq ( Ωit_131 = -> $type_of 'abc'                         ), 'text'
      @eq ( Ωit_132 = -> $type_of ( -> )                        ), 'function'
      @eq ( Ωit_133 = -> $type_of {}                            ), 'object'
      @eq ( Ωit_134 = -> $isa.object {}                         ), true
      @eq ( Ωit_135 = -> $isa.pod {}                            ), true
      @eq ( Ωit_136 = -> $isa.pod ( Object.create null )        ), true
      @eq ( Ωit_137 = -> $isa.function ( -> )                   ), true
      @eq ( Ωit_138 = -> $isa.text 'abc'                        ), true
      @eq ( Ωit_139 = -> $isa.nonempty_text 'abc'               ), true
      @eq ( Ωit_140 = -> $type_of std.integer                   ), 'object'
      @eq ( Ωit_141 = -> $isa.type std.integer                  ), true
      @eq ( Ωit_142 = -> $isa.object new A()                    ), true
      #.....................................................................................................
      @eq ( Ωit_143 = -> $isa.nonempty_text ''                  ), false
      @eq ( Ωit_144 = -> $isa.pod new A()                       ), false
      @eq ( Ωit_145 = -> $isa.function ( -> yield 5 )           ), false
      @eq ( Ωit_146 = -> $isa.function ( -> yield 5 )()         ), false
      @eq ( Ωit_147 = -> $isa.function ( -> await 5 )           ), false
      #.....................................................................................................
      return null

    # #-------------------------------------------------------------------------------------------------------
    # create: ->
    #   { Intertype
    #     Type
    #     Typespace
    #     types           } = require '../../../apps/intertype'
    #   { crt             } = get_create_typespaces()
    #   #.....................................................................................................
    #   @throws ( Ωit_148 = -> types.create crt.cNfNtN                ), /MEH-create-/
    #   @throws ( Ωit_149 = -> types.create crt.cNfNtV                ), /expected `fields` to be a POD/
    #   @throws ( Ωit_150 = -> types.create crt.cNfNAPtV              ), /MEH-create-/
    #   #.....................................................................................................
    #   return null


############################################################################################################
#
#===========================================================================================================
@OLD_intertype_tasks =

  #-----------------------------------------------------------------------------------------------------------
  interface: ->
    INTERTYPE     = require '../../../apps/intertype'
    @eq ( Ωit_151 = -> debug '2312312'; TMP_types.isa.object    INTERTYPE.types                               ), true
    @eq ( Ωit_152 = -> TMP_types.isa.undefined INTERTYPE.types.get_isa                       ), true
    @eq ( Ωit_153 = -> TMP_types.isa.undefined INTERTYPE.types.get_isa_optional              ), true
    @eq ( Ωit_154 = -> TMP_types.isa.undefined INTERTYPE.types.get_validate                  ), true
    @eq ( Ωit_155 = -> TMP_types.isa.undefined INTERTYPE.types.get_validate_optional         ), true
    @eq ( Ωit_156 = -> TMP_types.isa.function  INTERTYPE.types._get_isa                      ), true
    @eq ( Ωit_157 = -> TMP_types.isa.function  INTERTYPE.types._get_isa_optional             ), true
    @eq ( Ωit_158 = -> TMP_types.isa.function  INTERTYPE.types._get_validate                 ), true
    @eq ( Ωit_159 = -> TMP_types.isa.function  INTERTYPE.types._get_validate_optional        ), true
    @eq ( Ωit_160 = -> TMP_types.isa.object    INTERTYPE.types                               ), true
    @eq ( Ωit_161 = -> TMP_types.isa.object    INTERTYPE.types.isa                           ), true
    # @eq ( Ωit_162 = -> TMP_types.isa.function  INTERTYPE.types.isa.optional                  ), true
    @eq ( Ωit_163 = -> TMP_types.isa.object    INTERTYPE.types.validate                      ), true
    # @eq ( Ωit_164 = -> TMP_types.isa.function  INTERTYPE.types.validate.optional             ), true
    @eq ( Ωit_165 = -> TMP_types.isa.function  INTERTYPE.types.isa.boolean                   ), true
    @eq ( Ωit_166 = -> TMP_types.isa.function  INTERTYPE.types.isa.optional.boolean          ), true
    @eq ( Ωit_167 = -> TMP_types.isa.function  INTERTYPE.types.validate.boolean              ), true
    @eq ( Ωit_168 = -> TMP_types.isa.function  INTERTYPE.types.validate.optional.boolean     ), true
    @eq ( Ωit_169 = -> TMP_types.isa.object    INTERTYPE.types.create                        ), true
    @eq ( Ωit_170 = -> TMP_types.isa.function  INTERTYPE.types.isa.text                      ), true
    @eq ( Ωit_171 = -> TMP_types.isa.function  INTERTYPE.types.create.text                   ), true
    @eq ( Ωit_172 = -> TMP_types.isa.object    INTERTYPE.types.declarations                  ), true
    @eq ( Ωit_173 = -> TMP_types.isa.object    INTERTYPE.types.declarations.text             ), true
    #.........................................................................................................
    # @eq ( Ωit_174 = -> INTERTYPE.types.isa.name           ), 'isa'
    # @eq ( Ωit_175 = -> INTERTYPE.types.evaluate.name      ), 'evaluate'
    # @eq ( Ωit_176 = -> INTERTYPE.types.validate.name      ), 'validate'
    # @eq ( Ωit_177 = -> INTERTYPE.types.create.name        ), 'create'
    @eq ( Ωit_178 = -> INTERTYPE.types.declare.name       ), 'declare'
    @eq ( Ωit_179 = -> INTERTYPE.types.type_of.name       ), 'type_of'
    #.........................................................................................................
    do =>
      for type of INTERTYPE.testing._isa
        continue if Reflect.has INTERTYPE.declarations, type
        @fail 'Ωit_180', "type known from `INTERTYPE.testing._isa` but missing from `INTERTYPE.default_declarations`: #{rpr type}"
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  basic_functionality_using_types_object: ->
    INTERTYPE     = require '../../../apps/intertype'
    types         = new INTERTYPE.Intertype_minimal sample_declarations
    @eq ( Ωit_181 = -> types.isa.boolean           false               ), true
    @eq ( Ωit_182 = -> types.isa.boolean           true                ), true
    @eq ( Ωit_183 = -> types.isa.boolean           null                ), false
    @eq ( Ωit_184 = -> types.isa.boolean           1                   ), false
    @eq ( Ωit_185 = -> types.isa.optional.boolean  false               ), true
    @eq ( Ωit_186 = -> types.isa.optional.boolean  true                ), true
    @eq ( Ωit_187 = -> types.isa.optional.boolean  null                ), true
    @eq ( Ωit_188 = -> types.isa.optional.boolean  1                   ), false
    #.........................................................................................................
    @eq ( Ωit_189 = -> types.validate.boolean               false      ), false
    @eq ( Ωit_190 = -> types.validate.boolean               true       ), true
    @eq ( Ωit_191 = -> types.validate.optional.boolean      true       ), true
    @eq ( Ωit_192 = -> types.validate.optional.boolean      false      ), false
    @eq ( Ωit_193 = -> types.validate.optional.boolean      undefined  ), undefined
    @eq ( Ωit_194 = -> types.validate.optional.boolean      null       ), null
    @throws ( Ωit_195 = -> types.validate.boolean           1 ), /expected a boolean/
    @throws ( Ωit_196 = -> types.validate.optional.boolean  1 ), /expected an optional boolean/
    #.........................................................................................................
    @eq ( Ωit_197 = -> types.type_of null            ), 'null'
    @eq ( Ωit_198 = -> types.type_of undefined       ), 'undefined'
    @eq ( Ωit_199 = -> types.type_of false           ), 'boolean'
    @eq ( Ωit_200 = -> types.type_of Symbol 'p'      ), 'symbol'
    @eq ( Ωit_201 = -> types.type_of {}              ), 'object'
    @eq ( Ωit_202 = -> types.type_of NaN             ), 'unknown'
    @eq ( Ωit_203 = -> types.type_of +Infinity       ), 'unknown'
    @eq ( Ωit_204 = -> types.type_of -Infinity       ), 'unknown'
    #.........................................................................................................
    debug '^4324^', 'null           ', types.declarations.null
    debug '^4324^', 'function       ', types.declarations.function
    debug '^4324^', 'boolean        ', types.declarations.boolean
    debug '^4324^', 'text           ', types.declarations.text
    debug '^4324^', 'asyncfunction  ', types.declarations.asyncfunction
    debug '^4324^'
    debug '^4324^', 'null           ', types.isa.null
    debug '^4324^', 'function       ', types.isa.function
    debug '^4324^', 'boolean        ', types.isa.boolean
    debug '^4324^', 'text           ', types.isa.text
    debug '^4324^', 'asyncfunction  ', types.isa.asyncfunction
    debug '^4324^'
    debug '^4324^', 'null           ', types.isa.optional.null
    debug '^4324^', 'function       ', types.isa.optional.function
    debug '^4324^', 'boolean        ', types.isa.optional.boolean
    debug '^4324^', 'text           ', types.isa.optional.text
    debug '^4324^', 'asyncfunction  ', types.isa.optional.asyncfunction
    debug '^4324^'
    debug '^4324^', 'null           ', types.validate.null
    debug '^4324^', 'function       ', types.validate.function
    debug '^4324^', 'boolean        ', types.validate.boolean
    debug '^4324^', 'text           ', types.validate.text
    debug '^4324^', 'asyncfunction  ', types.validate.asyncfunction
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  basic_functionality_using_standalone_methods: ->
    INTERTYPE     = require '../../../apps/intertype'
    { isa
      validate
      type_of   } = new INTERTYPE.Intertype_minimal sample_declarations
    @eq ( Ωit_205 = -> isa.boolean           false               ), true
    @eq ( Ωit_206 = -> isa.boolean           true                ), true
    @eq ( Ωit_207 = -> isa.boolean           null                ), false
    @eq ( Ωit_208 = -> isa.boolean           1                   ), false
    @eq ( Ωit_209 = -> isa.unknown           1                   ), false
    @eq ( Ωit_210 = -> isa.unknown           Infinity            ), true
    @eq ( Ωit_211 = -> isa.optional.boolean  false               ), true
    @eq ( Ωit_212 = -> isa.optional.boolean  true                ), true
    @eq ( Ωit_213 = -> isa.optional.boolean  null                ), true
    @eq ( Ωit_214 = -> isa.optional.boolean  1                   ), false
    @eq ( Ωit_215 = -> isa.optional.unknown  1                   ), false
    @eq ( Ωit_216 = -> isa.optional.unknown  Infinity            ), true
    @eq ( Ωit_217 = -> isa.optional.unknown  undefined           ), true
    @eq ( Ωit_218 = -> isa.optional.unknown  undefined           ), true
    #.........................................................................................................
    @eq ( Ωit_219 = -> validate.boolean               false      ), false
    @eq ( Ωit_220 = -> validate.boolean               true       ), true
    @eq ( Ωit_221 = -> validate.optional.boolean      true       ), true
    @eq ( Ωit_222 = -> validate.optional.boolean      false      ), false
    @eq ( Ωit_223 = -> validate.optional.boolean      undefined  ), undefined
    @eq ( Ωit_224 = -> validate.optional.boolean      null       ), null
    @throws ( Ωit_225 = -> validate.boolean           1  ), /expected a boolean/
    @throws ( Ωit_226 = -> validate.optional.boolean  1  ), /expected an optional boolean/
    #.........................................................................................................
    @eq ( Ωit_227 = -> type_of null            ), 'null'
    @eq ( Ωit_228 = -> type_of undefined       ), 'undefined'
    @eq ( Ωit_229 = -> type_of false           ), 'boolean'
    @eq ( Ωit_230 = -> type_of Symbol 'p'      ), 'symbol'
    @eq ( Ωit_231 = -> type_of {}              ), 'object'
    @eq ( Ωit_232 = -> type_of NaN             ), 'unknown'
    @eq ( Ωit_233 = -> type_of +Infinity       ), 'unknown'
    @eq ( Ωit_234 = -> type_of -Infinity       ), 'unknown'
    #.........................................................................................................
    @eq ( Ωit_235 = -> isa.asyncfunction.name               ), 'isa.asyncfunction'
    @eq ( Ωit_236 = -> isa.optional.asyncfunction.name      ), 'isa.optional.asyncfunction'
    @eq ( Ωit_237 = -> validate.asyncfunction.name          ), 'validate.asyncfunction'
    @eq ( Ωit_238 = -> validate.optional.asyncfunction.name ), 'validate.optional.asyncfunction'
    #.........................................................................................................
    @throws ( Ωit_239 = -> isa.float 3, 4 ), /method 'isa.float' expects 1 arguments, got 2/
    @throws ( Ωit_240 = -> isa.float()    ), /method 'isa.float' expects 1 arguments, got 0/
    return null

  #-----------------------------------------------------------------------------------------------------------
  methods_check_arity: ->
    INTERTYPE     = require '../../../apps/intertype'
    { isa
      validate
      type_of   } = new INTERTYPE.Intertype_minimal sample_declarations
    #.........................................................................................................
    @throws ( Ωit_241 = -> isa.float 3, 4               ), /method 'isa.float' expects 1 arguments, got 2/
    @throws ( Ωit_242 = -> isa.float()                  ), /method 'isa.float' expects 1 arguments, got 0/
    @throws ( Ωit_243 = -> isa.optional.float 3, 4      ), /method 'isa.optional.float' expects 1 arguments, got 2/
    @throws ( Ωit_244 = -> isa.optional.float()         ), /method 'isa.optional.float' expects 1 arguments, got 0/
    @throws ( Ωit_245 = -> validate.float 3, 4          ), /method 'validate.float' expects 1 arguments, got 2/
    @throws ( Ωit_246 = -> validate.float()             ), /method 'validate.float' expects 1 arguments, got 0/
    @throws ( Ωit_247 = -> validate.optional.float 3, 4 ), /method 'validate.optional.float' expects 1 arguments, got 2/
    @throws ( Ωit_248 = -> validate.optional.float()    ), /method 'validate.optional.float' expects 1 arguments, got 0/
    @throws ( Ωit_249 = -> type_of 3, 4                 ), /expected 1 arguments, got 2/
    @throws ( Ωit_250 = -> type_of()                    ), /expected 1 arguments, got 0/
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  same_basic_types: ->
    { isa
      validate
      type_of   } = require '../../../apps/intertype'
    #.........................................................................................................
    boolean                 = false
    $function               = ->
    asyncfunction           = -> await null
    generatorfunction       = ( -> yield null )
    generator               = ( -> yield null )()
    asyncgeneratorfunction  = ( -> yield await null )
    asyncgenerator          = ( -> yield await null )()
    symbol                  = Symbol 'what'
    #.........................................................................................................
    @eq ( Ωit_251 = -> isa.boolean                     boolean                 ), true
    @eq ( Ωit_252 = -> isa.function                    $function               ), true
    @eq ( Ωit_253 = -> isa.asyncfunction               asyncfunction           ), true
    @eq ( Ωit_254 = -> isa.generatorfunction           generatorfunction       ), true
    @eq ( Ωit_255 = -> isa.asyncgeneratorfunction      asyncgeneratorfunction  ), true
    @eq ( Ωit_256 = -> isa.asyncgenerator              asyncgenerator          ), true
    @eq ( Ωit_257 = -> isa.generator                   generator               ), true
    @eq ( Ωit_258 = -> isa.symbol                      symbol                  ), true
    #.........................................................................................................
    @eq ( Ωit_259 = -> validate.boolean                boolean                 ), boolean
    @eq ( Ωit_260 = -> validate.function               $function               ), $function
    @eq ( Ωit_261 = -> validate.asyncfunction          asyncfunction           ), asyncfunction
    @eq ( Ωit_262 = -> validate.generatorfunction      generatorfunction       ), generatorfunction
    @eq ( Ωit_263 = -> validate.asyncgeneratorfunction asyncgeneratorfunction  ), asyncgeneratorfunction
    @eq ( Ωit_264 = -> validate.asyncgenerator         asyncgenerator          ), asyncgenerator
    @eq ( Ωit_265 = -> validate.generator              generator               ), generator
    @eq ( Ωit_266 = -> validate.symbol                 symbol                  ), symbol
    #.........................................................................................................
    @eq ( Ωit_267 = -> type_of boolean                                         ), 'boolean'
    @eq ( Ωit_268 = -> type_of $function                                       ), 'function'
    @eq ( Ωit_269 = -> type_of asyncfunction                                   ), 'asyncfunction'
    @eq ( Ωit_270 = -> type_of generatorfunction                               ), 'generatorfunction'
    @eq ( Ωit_271 = -> type_of asyncgeneratorfunction                          ), 'asyncgeneratorfunction'
    @eq ( Ωit_272 = -> type_of asyncgenerator                                  ), 'asyncgenerator'
    @eq ( Ωit_273 = -> type_of generator                                       ), 'generator'
    @eq ( Ωit_274 = -> type_of symbol                                          ), 'symbol'
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  throw_instructive_error_on_missing_type: ->
    INTERTYPE     = require '../../../apps/intertype'
    { isa
      validate
      type_of   } = new INTERTYPE.Intertype()
    #.........................................................................................................
    @throws ( Ωit_275 = -> isa.quux                    ), /unknown type 'quux'/
    @throws ( Ωit_276 = -> isa.quux()                  ), /unknown type 'quux'/
    @throws ( Ωit_277 = -> isa.quux 3                  ), /unknown type 'quux'/
    @throws ( Ωit_278 = -> isa.quux 3, 4               ), /unknown type 'quux'/
    @throws ( Ωit_279 = -> isa.optional.quux           ), /unknown type 'quux'/
    @throws ( Ωit_280 = -> isa.optional.quux()         ), /unknown type 'quux'/
    @throws ( Ωit_281 = -> isa.optional.quux 3         ), /unknown type 'quux'/
    @throws ( Ωit_282 = -> isa.optional.quux 3, 4      ), /unknown type 'quux'/
    @throws ( Ωit_283 = -> validate.quux               ), /unknown type 'quux'/
    @throws ( Ωit_284 = -> validate.quux()             ), /unknown type 'quux'/
    @throws ( Ωit_285 = -> validate.quux 3             ), /unknown type 'quux'/
    @throws ( Ωit_286 = -> validate.quux 3, 4          ), /unknown type 'quux'/
    @throws ( Ωit_287 = -> validate.optional.quux      ), /unknown type 'quux'/
    @throws ( Ωit_288 = -> validate.optional.quux()    ), /unknown type 'quux'/
    @throws ( Ωit_289 = -> validate.optional.quux 3    ), /unknown type 'quux'/
    @throws ( Ωit_290 = -> validate.optional.quux 3, 4 ), /unknown type 'quux'/
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  throw_instructive_error_when_optional_is_declared: ->
    INTERTYPE     = require '../../../apps/intertype'
    @throws ( Ωit_291 = -> new INTERTYPE.Intertype_minimal { optional: ( ( x ) -> true ), } ), /not allowed to re-declare type 'optional'/
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  throw_instructive_error_when_wrong_type_of_isa_test_declared: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    @throws ( Ωit_292 = -> new Intertype { foo: ( -> ), }                      ), /expected function with 1 parameters, got one with 0/
    @throws ( Ωit_293 = -> new Intertype { foo: ( ( a, b ) -> ), }             ), /expected function with 1 parameters, got one with 2/
    @throws ( Ωit_294 = -> new Intertype { foo: true, }                        ), /expected type name, method, or object to indicate test method, got a boolean/
    @throws ( Ωit_295 = -> new Intertype { foo: undefined, }                   ), /expected type name, method, or object to indicate test method, got a undefined/
    @throws ( Ωit_296 = -> new Intertype { foo: null, }                        ), /expected type name, method, or object to indicate test method, got a null/
    @throws ( Ωit_297 = -> new Intertype { foo: {}, }                          ), /expected type name, method, or object to indicate test method, got a undefined/
    @throws ( Ωit_298 = -> new Intertype { foo: { test: null, }, }             ), /expected type name, method, or object to indicate test method, got a null/
    @throws ( Ωit_299 = -> new Intertype { foo: { test: false, }, }            ), /expected type name, method, or object to indicate test method, got a boolean/
    @throws ( Ωit_300 = -> new Intertype { foo: { test: ( ( a, b ) -> ), }, }  ), /expected function with 1 parameters, got one with 2/
    @throws ( Ωit_301 = -> new Intertype { foo: 'quux', }                      ), /unknown type 'quux'/
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  allow_declaration_objects: ->
    { Intertype_minimal } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      declarations  = { sample_declarations..., }
      declarations.integer =
        test:     ( x ) -> Number.isInteger x
        template: 0
      types = new Intertype_minimal declarations
      @eq ( Ωit_302 = -> TMP_types.isa.function types.isa.integer  ), true
      @eq ( Ωit_303 = -> types.isa.integer.length                  ), 1
      @eq ( Ωit_304 = -> types.isa.integer 123                     ), true
      @eq ( Ωit_305 = -> types.isa.integer 123.456                 ), false
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  create_entries_must_be_sync_functions: ->
    { Intertype_minimal } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      declarations  = { sample_declarations..., }
      declarations.integer =
        test:     ( x ) -> Number.isInteger x
        create:   -> await 0
      @throws ( Ωit_306 = -> new Intertype_minimal declarations ), /expected a function for `create` entry of type 'integer', got a asyncfunction/
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  template_methods_must_be_nullary: ->
    { Intertype_minimal } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      declarations  = { sample_declarations..., }
      declarations.foolist =
        test:     ( x ) -> true
        template: ( n ) -> [ n, ]
      @throws ( Ωit_307 = -> new Intertype_minimal declarations ), /template method for type 'foolist' has arity 1 but must be nullary/
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  intertype_knows_its_base_types: ->
    { isa } = require '../../../apps/intertype'
    #.........................................................................................................
    @eq ( Ωit_308 = -> isa.basetype 'optional'   ), false
    @eq ( Ωit_309 = -> isa.basetype 'anything'   ), true
    @eq ( Ωit_310 = -> isa.basetype 'nothing'    ), true
    @eq ( Ωit_311 = -> isa.basetype 'something'  ), true
    @eq ( Ωit_312 = -> isa.basetype 'null'       ), true
    @eq ( Ωit_313 = -> isa.basetype 'undefined'  ), true
    @eq ( Ωit_314 = -> isa.basetype 'unknown'    ), true
    @eq ( Ωit_315 = -> isa.basetype 'integer'    ), false
    @eq ( Ωit_316 = -> isa.basetype 'float'      ), false
    @eq ( Ωit_317 = -> isa.basetype 'basetype'   ), false
    @eq ( Ωit_318 = -> isa.basetype 'quux'       ), false
    @eq ( Ωit_319 = -> isa.basetype 'toString'   ), false
    @eq ( Ωit_320 = -> isa.basetype null         ), false
    @eq ( Ωit_321 = -> isa.basetype undefined    ), false
    @eq ( Ωit_322 = -> isa.basetype 4            ), false
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  disallow_licensed_overrides: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      types         = new Intertype()
      @eq ( Ωit_323 = -> types.isa.float 4 ), true
      #.......................................................................................................
      overrides     =
        float:
          test:       ( x ) -> x is 'float'
      @throws ( Ωit_324 = -> types.declare overrides ), /not allowed to re-declare type 'float'/
      #.......................................................................................................
      ### pre-existing declaration remains valid: ###
      @eq ( Ωit_325 = -> types.isa.float 4       ), true
      @eq ( Ωit_326 = -> types.isa.float 'float' ), false
      return null
    #.........................................................................................................
    do =>
      types         = new Intertype()
      @eq ( Ωit_327 = -> types.isa.float 4 ), true
      #.......................................................................................................
      overrides     =
        float:
          override:   true
          test:       ( x ) -> x is 'float'
      @throws ( Ωit_328 = -> types.declare overrides ), /not allowed to re-declare type 'float'/
      return null
    #.........................................................................................................
    do =>
      types         = new Intertype()
      @eq ( Ωit_329 = -> types.isa.float 4 ), true
      #.......................................................................................................
      overrides     =
        anything:
          override:   true
          test:       ( x ) -> true
      @throws ( Ωit_330 = -> types.declare overrides ), /not allowed to re-declare basetype 'anything'/
      #.......................................................................................................
      ### pre-existing declaration remains valid: ###
      @eq ( Ωit_331 = -> types.isa.anything 4       ), true
      @eq ( Ωit_332 = -> types.isa.anything 'float' ), true
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  can_create_types_with_templates_and_create: ->
    { Intertype
      Intertype_minimal } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      declarations  = { sample_declarations..., }
      declarations.integer =
        test:     ( x ) -> Number.isInteger x
        template: 0
      declarations.text = { template: '', test: ( ( x ) -> ( typeof x ) is 'string' ), }
      declarations.float =
        test:     ( x ) -> Number.isFinite x
        create:   ( p = null ) -> parseFloat p ? @declarations.float.template
        template: 0
      declarations.nan = ( x ) -> Number.isNaN x
      #.......................................................................................................
      types = new Intertype_minimal declarations
      @eq ( Ωit_333 = -> TMP_types.isa.object types.declarations       ), true
      @eq ( Ωit_334 = -> TMP_types.isa.object types.declarations.float ), true
      @eq ( Ωit_335 = -> TMP_types.isa.object types.declarations.text  ), true
      #.......................................................................................................
      @throws ( Ωit_336 = -> types.create.boolean() ), /type declaration of 'boolean' has no `create` and no `template` entries, cannot be created/
      @throws ( Ωit_337 = -> types.create.text 'foo' ), /expected 0 arguments, got 1/
      #.......................................................................................................
      @eq ( Ωit_338 = -> types.create.text()         ), ''
      @eq ( Ωit_339 = -> types.create.integer()      ), 0
      @eq ( Ωit_340 = -> types.create.float()        ), 0
      @eq ( Ωit_341 = -> types.create.float '123.45' ), 123.45
      @throws ( Ωit_342 = -> types.create.float '***' ), /these arguments are not suitable for `create.float\(\)`: '\*\*\*'/
      #.......................................................................................................
      return null
    #.........................................................................................................
    do =>
      declarations =
        quantity:
          test:       'object'
          template:
            q:        0
            u:        'u'
        'quantity.q': 'float'
        'quantity.u': 'text'
      { isa
        validate
        create    } = new Intertype declarations
      @eq ( Ωit_343 = -> create.quantity()    ), { q: 0, u: 'u', }
      return null
    #.........................................................................................................
    do =>
      declarations =
        quantity:
          test:       'object'
          template:
            q:        0
            u:        'u'
          fields:
            q:        'float'
            u:        'text'
      { isa
        validate
        create    } = new Intertype declarations
      @eq ( Ωit_344 = -> create.quantity()                         ), { q: 0, u: 'u', }
      @eq ( Ωit_345 = -> create.quantity { q: 123, }               ), { q: 123, u: 'u', }
      @eq ( Ωit_346 = -> create.quantity { u: 'kg', }              ), { q: 0, u: 'kg', }
      @eq ( Ωit_347 = -> create.quantity { u: 'kg', foo: 'bar', }  ), { q: 0, u: 'kg', foo: 'bar', }
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  builtin_types_support_create: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      types       = new Intertype()
      { create
        type_of } = types
      @eq ( Ωit_348 = -> create.float()         ), 0
      @eq ( Ωit_349 = -> create.boolean()       ), false
      @eq ( Ωit_350 = -> create.object()        ), {}
      @eq ( Ωit_351 = -> create.float()         ), 0
      @eq ( Ωit_352 = -> create.infinity()      ), Infinity
      @eq ( Ωit_353 = -> create.text()          ), ''
      @eq ( Ωit_354 = -> create.list()          ), []
      @eq ( Ωit_355 = -> create.regex()         ), new RegExp()
      @eq ( Ωit_356 = -> type_of create.function()      ), 'function'
      @eq ( Ωit_357 = -> type_of create.asyncfunction() ), 'asyncfunction'
      @eq ( Ωit_358 = -> type_of create.symbol()        ), 'symbol'
      @throws ( Ωit_359 = -> create.basetype() ), /type declaration of 'basetype' has no `create` and no `template` entries, cannot be created/
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  template_functions_are_called_in_template_fields: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      types       = new Intertype()
      { declare
        create
        isa
        type_of
        declarations  } = types
      declare quantity:
        test:     'object'
        fields:
          q:      'float'
          u:      'text'
        template:
          q:      -> @create.float()
          u:      -> 'u'
      debug '^3234^', create.quantity()
      debug '^3234^', declarations.quantity
      @eq ( Ωit_360 = -> create.quantity()                          ), { q: 0, u: 'u', }
      @eq ( Ωit_361 = -> isa.quantity { q: 9, }                     ), false
      @eq ( Ωit_362 = -> type_of declarations.quantity.sub_tests.q  ), 'function'
      @eq ( Ωit_363 = -> type_of declarations.quantity.sub_tests.u  ), 'function'
      return null
    #.........................................................................................................
    do =>
      types       = new Intertype()
      { declare
        create
        type_of } = types
      declare foo:
        test:     'object'
        fields:
          foo:
            test:   'object'
            fields:
              bar:
                test:     'float'
        template:
          foo:
            bar: 123
      debug '^3234^', create.foo()
      @eq ( Ωit_364 = -> create.foo() ), { foo: { bar: 123, } }
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  type_object_assumed_if_fields_present: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      types       = new Intertype()
      { declare
        declarations
        create
        type_of
        isa     } = types
      declare quantity:
        # test: 'object'
        fields:
          q:      'float'
          u:      'text'
      @eq ( Ωit_365 = -> type_of declarations.quantity.test ), 'function'
      debug '^342342^', declarations.quantity
      @eq ( Ωit_366 = -> type_of declarations.quantity.sub_tests.q ), 'function'
      @eq ( Ωit_367 = -> type_of declarations.quantity.sub_tests.u ), 'function'
      @eq ( Ωit_368 = -> isa.quantity { q: 987, u: 's', } ), true
      @eq ( Ωit_369 = -> isa.quantity { q: 987, } ), false
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  intertype_minimal_has_only_base_types: ->
    { Intertype_minimal } = require '../../../apps/intertype'
    types = new Intertype_minimal()
    @eq ( Ωit_370 = -> ( Object.keys types.declarations ).sort() ), [ 'anything', 'nothing', 'null', 'optional', 'something', 'undefined', 'unknown' ]
    types.declare { z: ( ( x ) -> ), }
    @eq ( Ωit_371 = -> ( Object.keys types.declarations ).sort() ), [ 'anything', 'nothing', 'null', 'optional', 'something', 'undefined', 'unknown', 'z' ]
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  can_use_type_name_for_test: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      types = new Intertype()
      @throws ( Ωit_372 = -> types.declare { z: 'quux', } ), /unknown type 'quux'/
      types.declare { z: 'float', }
      @eq ( Ωit_373 = -> types.isa.z 12 ), true
      @eq ( Ωit_374 = -> types.isa.float.name                ), 'isa.float'
      @eq ( Ωit_375 = -> types.declarations.float.type       ), 'float'
      @eq ( Ωit_376 = -> types.declarations.float.test.name  ), 'float'
      @eq ( Ωit_377 = -> types.isa.z.name                    ), 'isa.z'
      @eq ( Ωit_378 = -> types.declarations.z.type           ), 'z'
      @eq ( Ωit_379 = -> types.declarations.z.test.name      ), 'z' # ?
    #.........................................................................................................
    do =>
      types = new Intertype()
      @throws ( Ωit_380 = -> types.declare { z: { test: 'quux', }, } ), /unknown type 'quux'/
      types.declare { z: { test: 'float', }, }
      @eq ( Ωit_381 = -> types.isa.z 12 ), true
      @eq ( Ωit_382 = -> types.isa.float.name                ), 'isa.float'
      @eq ( Ωit_383 = -> types.declarations.float.type       ), 'float'
      @eq ( Ωit_384 = -> types.declarations.float.test.name  ), 'float'
      @eq ( Ωit_385 = -> types.isa.z.name                    ), 'isa.z'
      @eq ( Ωit_386 = -> types.declarations.z.type           ), 'z'
      @eq ( Ωit_387 = -> types.declarations.z.test.name      ), 'z'
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  resolve_dotted_type: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      types = new Intertype()
      @eq ( Ωit_388 = -> Reflect.has types.declarations, 'foo'           ), false
      types.declare { foo: 'object', }
      @eq ( Ωit_389 = -> Reflect.has types.declarations, 'foo'           ), true
      @eq ( Ωit_390 = -> Reflect.has types.declarations, 'foo.bar'       ), false
      types.declare { 'foo.bar': 'object', }
      @eq ( Ωit_391 = -> Reflect.has types.declarations, 'foo.bar'       ), true
      @eq ( Ωit_392 = -> Reflect.has types.declarations, 'foo.bar.baz'   ), false
      types.declare { 'foo.bar.baz': 'float', }
      @eq ( Ωit_393 = -> Reflect.has types.declarations, 'foo.bar.baz'   ), true
      @eq ( Ωit_394 = -> types.isa.foo.bar.baz null                      ), false
      @eq ( Ωit_395 = -> types.isa.foo.bar.baz 4                         ), true
      @eq ( Ωit_396 = -> types.isa.foo.bar.baz +Infinity                 ), false
      # T?.eq types.declarations[ 'foo.bar.baz' ].test, types.declarations.float.test
      # types.declare { 'foo.bar.baz.quux.dax.dux': 'float', }
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  dotted_types_are_test_methods: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      types = new Intertype()
      types.declare { quantity: 'object', }
      types.declare { 'quantity.q': 'float', }
      types.declare { 'quantity.u': 'text', }
      @eq ( Ωit_397 = -> types.isa[ 'quantity.q' ] ), types.declarations[ 'quantity' ].sub_tests[ 'q' ]
      @eq ( Ωit_398 = -> types.isa[ 'quantity.q' ] ), types.isa.quantity.q
      # debug '^409-1^', types.declarations
      @eq ( Ωit_399 = -> types.isa.quantity {}                 ), false
      @eq ( Ωit_400 = -> types.isa.quantity { q: {}, }         ), false
      @eq ( Ωit_401 = -> types.isa.quantity { q: 3, }          ), false
      @eq ( Ωit_402 = -> types.isa.quantity { q: 3, u: 'm', }  ), true
      @eq ( Ωit_403 = -> types.isa.quantity.q 3                ), true
      @eq ( Ωit_404 = -> types.isa.quantity.q 3.1              ), true
      @eq ( Ωit_405 = -> types.isa.quantity.q '3.1'            ), false
      @eq ( Ωit_406 = -> types.isa.quantity.u 'm'              ), true
      @eq ( Ωit_407 = -> types.isa.quantity.u null             ), false
      @eq ( Ωit_408 = -> types.isa.quantity.u 3                ), false
      debug '^433-1^', types.declarations[ 'quantity' ]
      debug '^433-1^', types.declarations[ 'quantity.q' ]
      debug '^433-1^', types.declarations[ 'quantity.u' ]
      return null
    #.........................................................................................................
    do =>
      types = new Intertype()
      types.declare { 'person':                       'object', }
      types.declare { 'person.name':                  'text',   }
      types.declare { 'person.address':               'object', }
      types.declare { 'person.address.city':          'object', }
      types.declare { 'person.address.city.name':     'text',   }
      types.declare { 'person.address.city.postcode': 'text',   }
      # T?.eq types.isa[ 'quantity.q' ], types.declarations[ 'quantity' ].sub_tests[ 'q' ]
      # T?.eq types.isa[ 'quantity.q' ], types.isa.quantity.q
      @eq ( Ωit_409 = -> types.isa.person.address.city.name 'P'  ), true
      @eq ( Ωit_410 = -> types.isa.person.address.city.name 1234 ), false
      @eq ( Ωit_411 = -> types.isa.person 1234 ), false
      @eq ( Ωit_412 = -> types.isa.person { name: 'Bob', } ), false
      @eq ( Ωit_413 = -> types.isa.person { name: 'Bob', address: {}, } ), false
      @eq ( Ωit_414 = -> types.isa.person { name: 'Bob', address: { city: {}, }, } ), false
      @eq ( Ωit_415 = -> types.isa.person { name: 'Bob', address: { city: { name: 'P', }, }, } ), false
      @eq ( Ωit_416 = -> types.isa.person { name: 'Bob', address: { city: { name: 'P', postcode: 'SO36', }, }, } ), true
      @eq ( Ωit_417 = -> types.isa.person.address.city.name     'P'                                ), true
      @eq ( Ωit_418 = -> types.isa.person.address.city.postcode 'SO36'                             ), true
      @eq ( Ωit_419 = -> types.isa.person.address.city {         name: 'P', postcode: 'SO36', }    ), true
      @eq ( Ωit_420 = -> types.isa.person.address      { city: { name: 'P', postcode: 'SO36', }, } ), true
      help '^322-1^', ( { "#{k}": f.name } for k, f of types.declarations[ 'person'               ].sub_tests )
      help '^322-2^', ( { "#{k}": f.name } for k, f of types.declarations[ 'person.address'       ].sub_tests )
      help '^322-3^', ( { "#{k}": f.name } for k, f of types.declarations[ 'person.address.city'  ].sub_tests )
      @eq ( Ωit_421 = -> Object.keys types.declarations[ 'person'               ].sub_tests ), [ 'name', 'address', ]
      @eq ( Ωit_422 = -> Object.keys types.declarations[ 'person.address'       ].sub_tests ), [ 'city', ]
      @eq ( Ωit_423 = -> Object.keys types.declarations[ 'person.address.city'  ].sub_tests ), [ 'name', 'postcode', ]
      @eq ( Ωit_424 = -> types.declarations[ 'person' ].sub_tests isnt types.declarations[ 'person.address'      ].sub_tests ), true
      @eq ( Ωit_425 = -> types.declarations[ 'person' ].sub_tests isnt types.declarations[ 'person.address.city' ].sub_tests ), true
      return null
    #.........................................................................................................
    do =>
      types = new Intertype()
      types.declare { 'foo':      'float', }
      types.declare { 'foo.bar':  'text',   }
      do =>
        d = 3
        # d.bar = '?' # Cannot create property in strict mode, so can never satisfy test
        @eq ( Ωit_426 = -> types.isa.foo d ), false
        return null
      do =>
        d = new Number 3
        d.bar = '?'
        @eq ( Ωit_427 = -> d.bar ), '?'
        # still won't work b/c `float` doesn't accept objects (which is a good thing):
        @eq ( Ωit_428 = -> types.isa.foo d ), false
        return null
      return null
    #.........................................................................................................
    do =>
      types = new Intertype()
      types.declare { 'foo':        'object', }
      types.declare { 'foo.bind':   'float',   }
      types.declare { 'foo.apply':  'float',   }
      types.declare { 'foo.call':   'float',   }
      types.declare { 'foo.name':   'float',   }
      types.declare { 'foo.length': 'float',   }
      @eq ( Ωit_429 = -> types.isa.foo {} ), false
      @eq ( Ωit_430 = -> types.isa.foo { bind: 1, apply: 2, call: 3, name: 4, length: 5, } ), true
      return null
    #.........................................................................................................
    do =>
      types = new Intertype()
      types.declare { 'foo':        'object',           }
      types.declare { 'foo.text':   ( ( x ) -> x is 1 ) }
      types.declare { 'foo.float':  ( ( x ) -> x is 2 ) }
      @eq ( Ωit_431 = -> types.isa.foo {} ), false
      @eq ( Ωit_432 = -> types.isa.foo { text: 1, float: 2, } ), true
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  can_use_refs_to_dotted_types: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      types = new Intertype()
      types.declare { 'person':                       'object', }
      types.declare { 'person.name':                  'text',   }
      types.declare { 'person.address':               'object', }
      types.declare { 'person.address.city':          'object', }
      types.declare { 'person.address.city.name':     'text',   }
      types.declare { 'person.address.city.postcode': 'text',   }
      types.declare { 'mycity':                       ( ( x ) -> @isa.person.address.city x ), }
      # debug '^434-1^', types.declarations[ 'person.address.city' ]
      # debug '^434-2^', types.declarations.mycity
      urge '^342-1^', ( types.declarations.mycity )
      @eq ( Ωit_433 = -> types.isa.person.address.city {} ), false
      @eq ( Ωit_434 = -> types.isa.person.address.city null ), false
      @eq ( Ωit_435 = -> types.isa.person.address.city { name: 'P', postcode: 'SO36', } ), true
      @eq ( Ωit_436 = -> types.isa.mycity {} ), false
      @eq ( Ωit_437 = -> types.isa.mycity null ), false
      @eq ( Ωit_438 = -> types.isa.mycity { name: 'P', postcode: 'SO36', } ), true
      return null
    #.........................................................................................................
    do =>
      types = new Intertype()
      types.declare { 'person':                       'object', }
      types.declare { 'person.name':                  'text',   }
      types.declare { 'person.address':               'object', }
      types.declare { 'person.address.city':          'object', }
      types.declare { 'person.address.city.name':     'text',   }
      types.declare { 'person.address.city.postcode': 'text',   }
      types.declare { 'mycity':                       'person.address.city', }
      # debug '^434-3^', types.declarations[ 'person.address.city' ]
      # debug '^434-4^', types.declarations.mycity
      urge '^342-2^', ( types.declarations.mycity )
      @eq ( Ωit_439 = -> types.isa.person.address.city {} ), false
      @eq ( Ωit_440 = -> types.isa.person.address.city null ), false
      @eq ( Ωit_441 = -> types.isa.person.address.city { name: 'P', postcode: 'SO36', } ), true
      @eq ( Ωit_442 = -> types.isa.mycity {} ), false
      @eq ( Ωit_443 = -> types.isa.mycity null ), false
      @eq ( Ωit_444 = -> types.isa.mycity { name: 'P', postcode: 'SO36', } ), true
      return null
    #.........................................................................................................
    do =>
      types = new Intertype()
      types.declare { 'person':                       'object', }
      types.declare { 'person.name':                  'text',   }
      types.declare { 'person.address':               'object', }
      types.declare { 'person.address.city':          'object', }
      types.declare { 'person.address.city.name':     'text',   }
      types.declare { 'person.address.city.postcode': 'text',   }
      types.declare { 'mycity':                       ( ( x ) -> @isa.optional.person.address.city x ), }
      # debug '^434-5^', types.declarations[ 'person.address.city' ]
      # debug '^434-6^', types.declarations.mycity
      urge '^342-3^', ( types.declarations.mycity )
      @eq ( Ωit_445 = -> types.isa.person.address.city {} ), false
      @eq ( Ωit_446 = -> types.isa.person.address.city null ), false
      @eq ( Ωit_447 = -> types.isa.person.address.city { name: 'P', postcode: 'SO36', } ), true
      @eq ( Ωit_448 = -> types.isa.optional.person.address.city {} ), false
      @eq ( Ωit_449 = -> types.isa.optional.person.address.city null ), true
      @eq ( Ωit_450 = -> types.isa.optional.person.address.city { name: 'P', postcode: 'SO36', } ), true
      @eq ( Ωit_451 = -> types.isa.mycity {} ), false
      @eq ( Ωit_452 = -> types.isa.mycity null ), true
      @eq ( Ωit_453 = -> types.isa.mycity { name: 'P', postcode: 'SO36', } ), true
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  forbidden_to_define_fields_on_basetypes: ->
    { Intertype
      declarations  } = require '../../../apps/intertype'
    #.........................................................................................................
    await do =>
      types         = new Intertype()
      { declare
        validate
        isa } = types
      @throws ( Ωit_454 = -> types.declare { 'optional.d':    ( ( x ) -> ), } ), /illegal use of 'optional' in declaration of type 'optional.d'/
      @throws ( Ωit_455 = -> types.declare { 'anything.d':    ( ( x ) -> ), } ), /illegal use of basetype 'anything' in declaration of type 'anything.d'/
      @throws ( Ωit_456 = -> types.declare { 'nothing.d':     ( ( x ) -> ), } ), /illegal use of basetype 'nothing' in declaration of type 'nothing.d'/
      @throws ( Ωit_457 = -> types.declare { 'something.d':   ( ( x ) -> ), } ), /illegal use of basetype 'something' in declaration of type 'something.d'/
      @throws ( Ωit_458 = -> types.declare { 'null.d':        ( ( x ) -> ), } ), /illegal use of basetype 'null' in declaration of type 'null.d'/
      @throws ( Ωit_459 = -> types.declare { 'undefined.d':   ( ( x ) -> ), } ), /illegal use of basetype 'undefined' in declaration of type 'undefined.d'/
      @throws ( Ωit_460 = -> types.declare { 'unknown.d':     ( ( x ) -> ), } ), /illegal use of basetype 'unknown' in declaration of type 'unknown.d'/
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  internal_type_of_method: ->
    { Intertype
      declarations
      __type_of     } = require '../../../apps/intertype'
    #.........................................................................................................
    _isa = Object.fromEntries ( [ type, declaration.test, ] for type, declaration of declarations )
    #.........................................................................................................
    do =>
      types         = new Intertype()
      @eq ( Ωit_461 = -> __type_of null, _isa, null          ), 'null'
      @eq ( Ωit_462 = -> __type_of null, _isa, undefined     ), 'undefined'
      @eq ( Ωit_463 = -> __type_of null, _isa, 4             ), 'float'
      @eq ( Ωit_464 = -> __type_of null, _isa, ->            ), 'function'
      @eq ( Ωit_465 = -> __type_of null, _isa, -> await null ), 'asyncfunction'
      @eq ( Ωit_466 = -> __type_of null, _isa, {}            ), 'object'
      @eq ( Ωit_467 = -> __type_of null, _isa, []            ), 'list'
      @eq ( Ωit_468 = -> __type_of null, _isa, +Infinity     ), 'infinity'
      @eq ( Ωit_469 = -> __type_of null, _isa, -Infinity     ), 'infinity'
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  deepmerge: ->
    { Intertype
      declarations
      deepmerge   } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      sub = { foo: 3, }
      probe =
        bar:
          baz:
            sub: sub
        gnu: 4
      result = deepmerge probe
      @eq ( Ωit_470 = -> result                                   ), probe
      @eq ( Ωit_471 = -> result.bar         is probe.bar          ), false
      @eq ( Ωit_472 = -> result.bar.baz     is probe.bar.baz      ), false
      @eq ( Ωit_473 = -> result.bar.baz.sub is probe.bar.baz.sub  ), false
      @eq ( Ωit_474 = -> result.bar.baz.sub is sub                ), false
      @eq ( Ωit_475 = -> probe.bar.baz.sub  is sub                ), true
      return null
    #.........................................................................................................
    do =>
      sub = { foo: 3, }
      probe =
        bar:
          baz:
            sub: sub
        gnu: 4
      types = new Intertype { q: { test: 'object', template: probe, }, }
      result = types.create.q()
      @eq ( Ωit_476 = -> result                                   ), probe
      @eq ( Ωit_477 = -> result.bar         is probe.bar          ), false
      @eq ( Ωit_478 = -> result.bar.baz     is probe.bar.baz      ), false
      @eq ( Ωit_479 = -> result.bar.baz.sub is probe.bar.baz.sub  ), false
      @eq ( Ωit_480 = -> result.bar.baz.sub is sub                ), false
      @eq ( Ωit_481 = -> probe.bar.baz.sub  is sub                ), true
      return null
    #.........................................................................................................
    do =>
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  validate_dotted_types: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      types         = new Intertype()
      { validate }  = types
      types.declare { 'person':                       'object', }
      types.declare { 'person.name':                  'text',   }
      types.declare { 'person.address':               'object', }
      types.declare { 'person.address.city':          'object', }
      types.declare { 'person.address.city.name':     'text',   }
      types.declare { 'person.address.city.postcode': 'text',   }
      #.......................................................................................................
      @throws ( Ωit_482 = -> validate.person null                        ), /expected a person, got a null/
      @throws ( Ωit_483 = -> validate.person.address null                ), /expected a person.address, got a null/
      @throws ( Ωit_484 = -> validate.person.address.city null           ), /expected a person.address.city, got a null/
      @throws ( Ωit_485 = -> validate.person.address.city.postcode null  ), /expected a person.address.city.postcode, got a null/
      #.......................................................................................................
      @eq ( Ωit_486 = -> types.isa.person.address.city.postcode 3 ), false
      @throws ( Ωit_487 = -> validate.person.address.city.postcode 3             ), /expected a person.address.city.postcode/
      #.......................................................................................................
      @eq ( Ωit_488 = -> types.isa.person.address.city { name: 'P', } ), false
      @throws ( Ωit_489 = -> validate.person.address.city { name: 'P', }         ), /expected a person.address.city/
      # #.......................................................................................................
      @eq ( Ωit_490 = -> types.isa.person.address.city { postcode: '3421', } ), false
      @throws ( Ωit_491 = -> validate.person.address.city()                      ), /method 'validate.person.address.city' expects 1 arguments, got 0/
      @throws ( Ωit_492 = -> validate.person.address.city null                   ), /expected a person.address.city/
      @throws ( Ωit_493 = -> validate.person.address.city '3421'                 ), /expected a person.address.city/
      @throws ( Ωit_494 = -> validate.person.address.city { postcode: '3421', }  ), /expected a person.address.city/
      #.......................................................................................................
      @eq ( Ωit_495 = -> types.isa.person.address.city { name: 'P', postcode: '3421', } ), true
      @eq ( Ωit_496 = -> validate.person.address.city { name: 'P', postcode: '3421', } ), { name: 'P', postcode: '3421', }
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  use_evaluate: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      types         = new Intertype()
      { validate
        isa
        evaluate }  = types
      types.declare { 'person':                       'object', }
      types.declare { 'person.name':                  'text',   }
      types.declare { 'person.address':               'object', }
      types.declare { 'person.address.city':          'object', }
      types.declare { 'person.address.city.name':     'text',   }
      types.declare { 'person.address.city.postcode': 'text',   }
      #.......................................................................................................
      @throws ( Ωit_497 = -> evaluate.optional 1         ), /`optional` is not a legal type for `evaluate` methods/
      @throws ( Ωit_498 = -> evaluate.optional.person 1  ), /`optional` is not a legal type for `evaluate` methods/
      #.......................................................................................................
      @eq ( Ωit_499 = -> isa.person       { name: 'Alice', address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), true
      @eq ( Ωit_500 = -> evaluate.person  { name: 'Alice', address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), { person: true,  'person.name': true, 'person.address': true, 'person.address.city': true, 'person.address.city.name': true, 'person.address.city.postcode': true, }
      #.......................................................................................................
      @eq ( Ωit_501 = -> isa.person       { name: 'Alice', address: { city: { name: 'Atown', postcode: 12345678 } } } ), false
      @eq ( Ωit_502 = -> evaluate.person  { name: 'Alice', address: { city: { name: 'Atown', postcode: 12345678 } } } ), { person: false,  'person.name': true, 'person.address': false, 'person.address.city': false, 'person.address.city.name': true, 'person.address.city.postcode': false, }
      #.......................................................................................................
      @eq ( Ωit_503 = -> isa.person       {                address: { city: { name: 'Atown', postcode: 12345678 } } } ), false
      @eq ( Ωit_504 = -> evaluate.person  {                address: { city: { name: 'Atown', postcode: 12345678 } } } ), { person: false,  'person.name': false, 'person.address': false, 'person.address.city': false, 'person.address.city.name': true, 'person.address.city.postcode': false, }
      #.......................................................................................................
      @eq ( Ωit_505 = -> isa.person       {                address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), false
      @eq ( Ωit_506 = -> evaluate.person  {                address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), { person: false, 'person.name': false, 'person.address': true, 'person.address.city': true, 'person.address.city.name': true, 'person.address.city.postcode': true, }
      #.......................................................................................................
      @eq ( Ωit_507 = -> isa.person       null  ), false
      @eq ( Ωit_508 = -> evaluate.person  null  ), { person: false, 'person.name': false, 'person.address': false, 'person.address.city': false, 'person.address.city.name': false, 'person.address.city.postcode': false, }
      #.......................................................................................................
      @eq ( Ωit_509 = -> isa.person       {}    ), false
      @eq ( Ωit_510 = -> evaluate.person  {}    ), { person: false, 'person.name': false, 'person.address': false, 'person.address.city': false, 'person.address.city.name': false, 'person.address.city.postcode': false, }
      return null
    #.........................................................................................................
    do =>
      types         = new Intertype()
      { validate
        isa
        evaluate }  = types
      types.declare { 'person':                       'object', }
      types.declare { 'person.address':               'object', }
      types.declare { 'person.address.city':          'object', }
      types.declare { 'person.address.city.postcode': 'text',   }
      types.declare { 'person.address.city.name':     'text',   }
      types.declare { 'person.name':                  'text',   }
      #.......................................................................................................
      @eq ( Ωit_511 = -> isa.person                   { name: 'Alice', address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), true
      @eq ( Ωit_512 = -> evaluate.person              { name: 'Alice', address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), { person: true,  'person.name': true, 'person.address': true, 'person.address.city': true, 'person.address.city.name': true, 'person.address.city.postcode': true, }
      @eq ( Ωit_513 = -> Object.keys evaluate.person  { name: 'Alice', address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), [ 'person', 'person.address', 'person.address.city', 'person.address.city.postcode', 'person.address.city.name', 'person.name' ]
      #.......................................................................................................
      @eq ( Ωit_514 = -> isa.person                   {                address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), false
      @eq ( Ωit_515 = -> evaluate.person              {                address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), { person: false, 'person.name': false, 'person.address': true, 'person.address.city': true, 'person.address.city.name': true, 'person.address.city.postcode': true, }
      @eq ( Ωit_516 = -> Object.keys evaluate.person  {                address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), [ 'person', 'person.address', 'person.address.city', 'person.address.city.postcode', 'person.address.city.name', 'person.name' ]
      #.......................................................................................................
      @eq ( Ωit_517 = -> isa.person                   null  ), false
      @eq ( Ωit_518 = -> evaluate.person              null  ), { person: false, 'person.name': false, 'person.address': false, 'person.address.city': false, 'person.address.city.name': false, 'person.address.city.postcode': false, }
      @eq ( Ωit_519 = -> Object.keys evaluate.person  null  ), [ 'person', 'person.address', 'person.address.city', 'person.address.city.postcode', 'person.address.city.name', 'person.name' ]
      #.......................................................................................................
      @eq ( Ωit_520 = -> isa.person                   {}  ), false
      @eq ( Ωit_521 = -> evaluate.person              {}  ), { person: false, 'person.name': false, 'person.address': false, 'person.address.city': false, 'person.address.city.name': false, 'person.address.city.postcode': false, }
      @eq ( Ωit_522 = -> Object.keys evaluate.person  {}  ), [ 'person', 'person.address', 'person.address.city', 'person.address.city.postcode', 'person.address.city.name', 'person.name' ]
      #.......................................................................................................
      @eq ( Ωit_523 = -> isa.person.address                   { city: { name: 'Atown', postcode: 'VA1234' } } ), true
      @eq ( Ωit_524 = -> evaluate.person.address              { city: { name: 'Atown', postcode: 'VA1234' } } ), { 'person.address': true, 'person.address.city': true, 'person.address.city.name': true, 'person.address.city.postcode': true, }
      @eq ( Ωit_525 = -> Object.keys evaluate.person.address  { city: { name: 'Atown', postcode: 'VA1234' } } ), [ 'person.address', 'person.address.city', 'person.address.city.postcode', 'person.address.city.name' ]
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  walk_prefixes: ->
    { walk_prefixes
      isa
      type_of                     } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      @eq ( Ωit_526 = -> isa.generatorfunction walk_prefixes             ), true
      @eq ( Ωit_527 = -> [ ( walk_prefixes 'one'                )..., ]  ), []
      @eq ( Ωit_528 = -> [ ( walk_prefixes 'one.two'            )..., ]  ), [ 'one' ]
      @eq ( Ωit_529 = -> [ ( walk_prefixes 'one.two.three'      )..., ]  ), [ 'one', 'one.two', ]
      @eq ( Ωit_530 = -> [ ( walk_prefixes 'one.two.three.four' )..., ]  ), [ 'one', 'one.two', 'one.two.three', ]
      ### TAINT should not allow empty namers: ###
      @eq ( Ωit_531 = -> [ ( walk_prefixes '.one.two.three'     )..., ]  ), [ '', '.one', '.one.two', ]
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  can_use_namespaces: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      declarations =
        'foo.bar':      ( x ) -> x is 'foo.bar'
        'foo.bar.baz':  ( x ) -> x is 'foo.bar.baz'
      @throws ( Ωit_532 = -> types = new Intertype declarations ), /unknown partial type 'foo'/
      return null
    #.........................................................................................................
    do =>
      declarations =
        'quantity':         'object'
        'quantity.q':       'float'
        'quantity.u':       'text'
      types = new Intertype declarations
      @eq ( Ωit_533 = -> types.isa.quantity {}                   ), false
      @eq ( Ωit_534 = -> types.isa.quantity { q: 12, u: 'kg', }  ), true
      @eq ( Ωit_535 = -> types.isa[ 'quantity.q' ] 12            ), true
      @eq ( Ωit_536 = -> types.isa[ 'quantity.u' ] 'kg'          ), true
      @eq ( Ωit_537 = -> types.isa.quantity.q 12                 ), true
      @eq ( Ωit_538 = -> types.isa.quantity.u 'kg'               ), true
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  can_use_qualifiers: ->
    { Intertype_minimal } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      declarations =
        'empty':            { test: 'object', role: 'qualifier', }
        'nonempty':         { test: 'object', role: 'qualifier', }
        'empty.list':       ( x ) -> ( @isa.list  x ) and ( x.length  is  0 )
        'empty.text':       ( x ) -> ( @isa.text  x ) and ( x.length  is  0 )
        'empty.set':        ( x ) -> ( @isa.set   x ) and ( x.size    is  0 )
        'nonempty.list':    ( x ) -> ( @isa.list  x ) and ( x.length  >   0 )
        'nonempty.text':    ( x ) -> ( @isa.text  x ) and ( x.length  >   0 )
        'nonempty.set':     ( x ) -> ( @isa.set   x ) and ( x.size    >   0 )
      types   = new Intertype_minimal sample_declarations, declarations
      { isa } = types
      @eq ( Ωit_539 = -> isa.empty.list    []          ), true
      @eq ( Ωit_540 = -> isa.empty.list    [ 'A', ]    ), false
      @eq ( Ωit_541 = -> isa.empty.list    4           ), false
      @eq ( Ωit_542 = -> isa.nonempty.list []          ), false
      @eq ( Ωit_543 = -> isa.nonempty.list [ 'A', ]    ), true
      @eq ( Ωit_544 = -> isa.nonempty.list 4           ), false
      @eq ( Ωit_545 = -> isa.empty.text    ''          ), true
      @eq ( Ωit_546 = -> isa.empty.text    'A'         ), false
      @eq ( Ωit_547 = -> isa.empty.text    4           ), false
      @eq ( Ωit_548 = -> isa.nonempty.text ''          ), false
      @eq ( Ωit_549 = -> isa.nonempty.text 'A'         ), true
      @eq ( Ωit_550 = -> isa.nonempty.text 4           ), false
      ### this doesn't make a terrible lot of sense: ###
      @eq ( Ωit_551 = -> isa.empty { list: [], text: '', set: new Set() } ), false
      return null
    #.........................................................................................................
    do =>
      declarations =
        'empty':            { role: 'qualifier', }
        'nonempty':         { role: 'qualifier', }
        'empty.list':       ( x ) -> ( @isa.list  x ) and ( x.length  is  0 )
        'empty.text':       ( x ) -> ( @isa.text  x ) and ( x.length  is  0 )
        'empty.set':        ( x ) -> ( @isa.set   x ) and ( x.size    is  0 )
        'nonempty.list':    ( x ) -> ( @isa.list  x ) and ( x.length  >   0 )
        'nonempty.text':    ( x ) -> ( @isa.text  x ) and ( x.length  >   0 )
        'nonempty.set':     ( x ) -> ( @isa.set   x ) and ( x.size    >   0 )
      types         = new Intertype_minimal sample_declarations, declarations
      { isa
        validate  } = types
      @eq ( Ωit_552 = -> isa.empty.list    []          ), true
      @eq ( Ωit_553 = -> isa.empty.list    [ 'A', ]    ), false
      @eq ( Ωit_554 = -> isa.empty.list    4           ), false
      @eq ( Ωit_555 = -> isa.nonempty.list []          ), false
      @eq ( Ωit_556 = -> isa.nonempty.list [ 'A', ]    ), true
      @eq ( Ωit_557 = -> isa.nonempty.list 4           ), false
      @eq ( Ωit_558 = -> isa.empty.text    ''          ), true
      @eq ( Ωit_559 = -> isa.empty.text    'A'         ), false
      @eq ( Ωit_560 = -> isa.empty.text    4           ), false
      @eq ( Ωit_561 = -> isa.nonempty.text ''          ), false
      @eq ( Ωit_562 = -> isa.nonempty.text 'A'         ), true
      @eq ( Ωit_563 = -> isa.nonempty.text 4           ), false
      #.......................................................................................................
      @eq ( Ωit_564 = -> isa.empty []                  ), true
      @eq ( Ωit_565 = -> isa.empty ''                  ), true
      @eq ( Ωit_566 = -> isa.empty new Set()           ), true
      @eq ( Ωit_567 = -> isa.empty [ 1, ]              ), false
      @eq ( Ωit_568 = -> isa.empty 'A'                 ), false
      @eq ( Ωit_569 = -> isa.empty new Set 'abc'       ), false
      #.......................................................................................................
      @eq ( Ωit_570 = -> validate.empty []                  ), []
      @eq ( Ωit_571 = -> validate.empty ''                  ), ''
      @eq ( Ωit_572 = -> validate.empty new Set()           ), new Set()
      @throws ( Ωit_573 = -> validate.empty [ 1, ]              ), /expected a empty, got a list/
      @throws ( Ωit_574 = -> validate.empty 'A'                 ), /expected a empty, got a text/
      @throws ( Ωit_575 = -> validate.empty new Set 'abc'       ), /expected a empty, got a set/
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  can_use_optional_with_qualifiers: ->
    { Intertype_minimal } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      declarations =
        'empty':            { role: 'qualifier', }
        'nonempty':         { role: 'qualifier', }
        'empty.list':       ( x ) -> ( @isa.list  x ) and ( x.length  is  0 )
        'empty.text':       ( x ) -> ( @isa.text  x ) and ( x.length  is  0 )
        'empty.set':        ( x ) -> ( @isa.set   x ) and ( x.size    is  0 )
        'nonempty.list':    ( x ) -> ( @isa.list  x ) and ( x.length  >   0 )
        'nonempty.text':    ( x ) -> ( @isa.text  x ) and ( x.length  >   0 )
        'nonempty.set':     ( x ) -> ( @isa.set   x ) and ( x.size    >   0 )
      types         = new Intertype_minimal sample_declarations, declarations
      { isa
        validate  } = types
      @eq ( Ωit_576 = -> isa.optional.empty.list    []          ), true
      @eq ( Ωit_577 = -> isa.optional.empty.list    [ 'A', ]    ), false
      @eq ( Ωit_578 = -> isa.optional.empty.list    4           ), false
      @eq ( Ωit_579 = -> isa.optional.nonempty.list []          ), false
      @eq ( Ωit_580 = -> isa.optional.nonempty.list [ 'A', ]    ), true
      @eq ( Ωit_581 = -> isa.optional.nonempty.list 4           ), false
      @eq ( Ωit_582 = -> isa.optional.empty.text    ''          ), true
      @eq ( Ωit_583 = -> isa.optional.empty.text    'A'         ), false
      @eq ( Ωit_584 = -> isa.optional.empty.text    4           ), false
      @eq ( Ωit_585 = -> isa.optional.nonempty.text ''          ), false
      @eq ( Ωit_586 = -> isa.optional.nonempty.text 'A'         ), true
      @eq ( Ωit_587 = -> isa.optional.nonempty.text 4           ), false
      #.......................................................................................................
      @eq ( Ωit_588 = -> isa.optional.empty []                  ), true
      @eq ( Ωit_589 = -> isa.optional.empty ''                  ), true
      @eq ( Ωit_590 = -> isa.optional.empty new Set()           ), true
      @eq ( Ωit_591 = -> isa.optional.empty [ 1, ]              ), false
      @eq ( Ωit_592 = -> isa.optional.empty 'A'                 ), false
      @eq ( Ωit_593 = -> isa.optional.empty new Set 'abc'       ), false
      #.......................................................................................................
      @eq ( Ωit_594 = -> validate.optional.empty []                   ), []
      @eq ( Ωit_595 = -> validate.optional.empty ''                   ), ''
      @eq ( Ωit_596 = -> validate.optional.empty new Set()            ), new Set()
      @eq ( Ωit_597 = -> validate.optional.empty.list  []             ), []
      @eq ( Ωit_598 = -> validate.optional.empty.text  ''             ), ''
      @eq ( Ωit_599 = -> validate.optional.empty.set   new Set()      ), new Set()
      @throws ( Ωit_600 = -> validate.optional.empty [ 1, ]           ), /expected an optional empty, got a list/
      @throws ( Ωit_601 = -> validate.optional.empty 'A'              ), /expected an optional empty, got a text/
      @throws ( Ωit_602 = -> validate.optional.empty new Set 'abc'    ), /expected an optional empty, got a set/
      #.......................................................................................................
      @eq ( Ωit_603 = -> isa.optional.empty []                        ), true
      @eq ( Ωit_604 = -> isa.optional.empty ''                        ), true
      @eq ( Ωit_605 = -> isa.optional.empty new Set()                 ), true
      @eq ( Ωit_606 = -> isa.optional.empty [ 1, ]                    ), false
      @eq ( Ωit_607 = -> isa.optional.empty 'A'                       ), false
      @eq ( Ωit_608 = -> isa.optional.empty new Set 'abc'             ), false
      @eq ( Ωit_609 = -> validate.optional.empty       null           ), null
      @eq ( Ωit_610 = -> validate.optional.empty.list  null           ), null
      @eq ( Ωit_611 = -> validate.optional.empty.text  null           ), null
      @eq ( Ωit_612 = -> validate.optional.empty.set   null           ), null
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  use_fields_to_declare_qualifiers: ->
    { Intertype_minimal } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      declarations =
        empty:
          role:     'qualifier'
          fields:
            list:     ( x ) -> ( @isa.list  x ) and ( x.length  is  0 )
            text:     ( x ) -> ( @isa.text  x ) and ( x.length  is  0 )
            set:      ( x ) -> ( @isa.set   x ) and ( x.size    is  0 )
        nonempty:
          role:     'qualifier'
          fields:
            list:     ( x ) -> ( @isa.list  x ) and ( x.length  >   0 )
            text:     ( x ) -> ( @isa.text  x ) and ( x.length  >   0 )
            set:      ( x ) -> ( @isa.set   x ) and ( x.size    >   0 )
      #.......................................................................................................
      types         = new Intertype_minimal sample_declarations, declarations
      { isa
        validate  } = types
      #.......................................................................................................
      @eq ( Ωit_613 = -> isa.empty.list    []          ), true
      @eq ( Ωit_614 = -> isa.empty.list    [ 'A', ]    ), false
      @eq ( Ωit_615 = -> isa.empty.list    4           ), false
      @eq ( Ωit_616 = -> isa.nonempty.list []          ), false
      @eq ( Ωit_617 = -> isa.nonempty.list [ 'A', ]    ), true
      @eq ( Ωit_618 = -> isa.nonempty.list 4           ), false
      @eq ( Ωit_619 = -> isa.empty.text    ''          ), true
      @eq ( Ωit_620 = -> isa.empty.text    'A'         ), false
      @eq ( Ωit_621 = -> isa.empty.text    4           ), false
      @eq ( Ωit_622 = -> isa.nonempty.text ''          ), false
      @eq ( Ωit_623 = -> isa.nonempty.text 'A'         ), true
      @eq ( Ωit_624 = -> isa.nonempty.text 4           ), false
      #.......................................................................................................
      @eq ( Ωit_625 = -> isa.empty []                  ), true
      @eq ( Ωit_626 = -> isa.empty ''                  ), true
      @eq ( Ωit_627 = -> isa.empty new Set()           ), true
      @eq ( Ωit_628 = -> isa.empty [ 1, ]              ), false
      @eq ( Ωit_629 = -> isa.empty 'A'                 ), false
      @eq ( Ωit_630 = -> isa.empty new Set 'abc'       ), false
      #.......................................................................................................
      @eq ( Ωit_631 = -> validate.empty []                   ), []
      @eq ( Ωit_632 = -> validate.empty ''                   ), ''
      @eq ( Ωit_633 = -> validate.empty new Set()            ), new Set()
      @eq ( Ωit_634 = -> validate.empty.list  []             ), []
      @eq ( Ωit_635 = -> validate.empty.text  ''             ), ''
      @eq ( Ωit_636 = -> validate.empty.set   new Set()      ), new Set()
      @throws ( Ωit_637 = -> validate.empty [ 1, ]           ), /expected a empty, got a list/
      @throws ( Ωit_638 = -> validate.empty 'A'              ), /expected a empty, got a text/
      @throws ( Ωit_639 = -> validate.empty new Set 'abc'    ), /expected a empty, got a set/
      #.......................................................................................................
      @eq ( Ωit_640 = -> isa.empty []                        ), true
      @eq ( Ωit_641 = -> isa.empty ''                        ), true
      @eq ( Ωit_642 = -> isa.empty new Set()                 ), true
      @eq ( Ωit_643 = -> isa.empty [ 1, ]                    ), false
      @eq ( Ωit_644 = -> isa.empty 'A'                       ), false
      @eq ( Ωit_645 = -> isa.empty new Set 'abc'             ), false
      @throws ( Ωit_646 = -> validate.empty       null           ), /expected a empty, got a null/
      @throws ( Ωit_647 = -> validate.empty.list  null           ), /expected a empty.list, got a null/
      @throws ( Ωit_648 = -> validate.empty.text  null           ), /expected a empty.text, got a null/
      @throws ( Ωit_649 = -> validate.empty.set   null           ), /expected a empty.set, got a null/
      #.......................................................................................................
      @eq ( Ωit_650 = -> isa.optional.empty.list    []          ), true
      @eq ( Ωit_651 = -> isa.optional.empty.list    [ 'A', ]    ), false
      @eq ( Ωit_652 = -> isa.optional.empty.list    4           ), false
      @eq ( Ωit_653 = -> isa.optional.nonempty.list []          ), false
      @eq ( Ωit_654 = -> isa.optional.nonempty.list [ 'A', ]    ), true
      @eq ( Ωit_655 = -> isa.optional.nonempty.list 4           ), false
      @eq ( Ωit_656 = -> isa.optional.empty.text    ''          ), true
      @eq ( Ωit_657 = -> isa.optional.empty.text    'A'         ), false
      @eq ( Ωit_658 = -> isa.optional.empty.text    4           ), false
      @eq ( Ωit_659 = -> isa.optional.nonempty.text ''          ), false
      @eq ( Ωit_660 = -> isa.optional.nonempty.text 'A'         ), true
      @eq ( Ωit_661 = -> isa.optional.nonempty.text 4           ), false
      #.......................................................................................................
      @eq ( Ωit_662 = -> isa.optional.empty []                  ), true
      @eq ( Ωit_663 = -> isa.optional.empty ''                  ), true
      @eq ( Ωit_664 = -> isa.optional.empty new Set()           ), true
      @eq ( Ωit_665 = -> isa.optional.empty [ 1, ]              ), false
      @eq ( Ωit_666 = -> isa.optional.empty 'A'                 ), false
      @eq ( Ωit_667 = -> isa.optional.empty new Set 'abc'       ), false
      #.......................................................................................................
      @eq ( Ωit_668 = -> validate.optional.empty []                   ), []
      @eq ( Ωit_669 = -> validate.optional.empty ''                   ), ''
      @eq ( Ωit_670 = -> validate.optional.empty new Set()            ), new Set()
      @eq ( Ωit_671 = -> validate.optional.empty.list  []             ), []
      @eq ( Ωit_672 = -> validate.optional.empty.text  ''             ), ''
      @eq ( Ωit_673 = -> validate.optional.empty.set   new Set()      ), new Set()
      @throws ( Ωit_674 = -> validate.optional.empty [ 1, ]           ), /expected an optional empty, got a list/
      @throws ( Ωit_675 = -> validate.optional.empty 'A'              ), /expected an optional empty, got a text/
      @throws ( Ωit_676 = -> validate.optional.empty new Set 'abc'    ), /expected an optional empty, got a set/
      #.......................................................................................................
      @eq ( Ωit_677 = -> isa.optional.empty []                        ), true
      @eq ( Ωit_678 = -> isa.optional.empty ''                        ), true
      @eq ( Ωit_679 = -> isa.optional.empty new Set()                 ), true
      @eq ( Ωit_680 = -> isa.optional.empty [ 1, ]                    ), false
      @eq ( Ωit_681 = -> isa.optional.empty 'A'                       ), false
      @eq ( Ωit_682 = -> isa.optional.empty new Set 'abc'             ), false
      @eq ( Ωit_683 = -> validate.optional.empty       null           ), null
      @eq ( Ωit_684 = -> validate.optional.empty.list  null           ), null
      @eq ( Ωit_685 = -> validate.optional.empty.text  null           ), null
      @eq ( Ωit_686 = -> validate.optional.empty.set   null           ), null
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  builtin_qualifiers: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      types   = new Intertype()
      { isa
        validate
        evaluate
        type_of   } = types
      #.......................................................................................................
      @eq ( Ωit_687 = -> isa.empty.list    []                             ), true
      @eq ( Ωit_688 = -> isa.empty.list    [ 'A', ]                       ), false
      @eq ( Ωit_689 = -> isa.empty.list    4                              ), false
      @eq ( Ωit_690 = -> isa.nonempty.list []                             ), false
      @eq ( Ωit_691 = -> isa.nonempty.list [ 'A', ]                       ), true
      @eq ( Ωit_692 = -> isa.nonempty.list 4                              ), false
      @eq ( Ωit_693 = -> isa.empty.text    ''                             ), true
      @eq ( Ωit_694 = -> isa.empty.text    'A'                            ), false
      @eq ( Ωit_695 = -> isa.empty.text    4                              ), false
      @eq ( Ωit_696 = -> isa.nonempty.text ''                             ), false
      @eq ( Ωit_697 = -> isa.nonempty.text 'A'                            ), true
      @eq ( Ωit_698 = -> isa.nonempty.text 4                              ), false
      @eq ( Ωit_699 = -> isa.empty { list: [], text: '', set: new Set() } ), false
      #.......................................................................................................
      @eq ( Ωit_700 = -> isa.empty []                                     ), true
      @eq ( Ωit_701 = -> isa.empty ''                                     ), true
      @eq ( Ωit_702 = -> isa.empty new Set()                              ), true
      @eq ( Ωit_703 = -> isa.empty /d/                                    ), false
      @eq ( Ωit_704 = -> isa.empty [ 1, ]                                 ), false
      @eq ( Ωit_705 = -> isa.empty 'A'                                    ), false
      @eq ( Ωit_706 = -> isa.empty new Set 'abc'                          ), false
      #.......................................................................................................
      @eq ( Ωit_707 = -> validate.empty []                                ), []
      @eq ( Ωit_708 = -> validate.empty ''                                ), ''
      @eq ( Ωit_709 = -> validate.empty new Set()                         ), new Set()
      @throws ( Ωit_710 = -> validate.empty [ 1, ]                        ), /expected a empty, got a list/
      @throws ( Ωit_711 = -> validate.empty 'A'                           ), /expected a empty, got a text/
      @throws ( Ωit_712 = -> validate.empty new Set 'abc'                 ), /expected a empty, got a set/
      #.......................................................................................................
      @eq ( Ωit_713 = -> type_of []                                       ), 'list'
      @eq ( Ωit_714 = -> type_of ''                                       ), 'text'
      @eq ( Ωit_715 = -> type_of new Set()                                ), 'set'
      @eq ( Ωit_716 = -> type_of [ 'a', ]                                 ), 'list'
      @eq ( Ωit_717 = -> type_of 'a'                                      ), 'text'
      @eq ( Ωit_718 = -> type_of new Set 'a'                              ), 'set'
      #.......................................................................................................
      @eq ( Ωit_719 = -> type_of 1234                                     ), 'float'
      @eq ( Ωit_720 = -> isa.integer 1234                                 ), true
      @eq ( Ωit_721 = -> isa.positive.integer 1234                        ), true
      @eq ( Ωit_722 = -> isa.negative.integer 1234                        ), false
      @eq ( Ωit_723 = -> isa.negative.integer -1234                       ), true
      @eq ( Ωit_724 = -> isa.negative.integer -Infinity                   ), false
      @eq ( Ωit_725 = -> isa.negative.integer -12.34                      ), false
      #.......................................................................................................
      @eq ( Ωit_726 = -> isa.positive.float     +4                        ), true
      @eq ( Ωit_727 = -> isa.positive.integer   +4                        ), true
      @eq ( Ωit_728 = -> isa.positive.infinity  +4                        ), false
      @eq ( Ωit_729 = -> isa.negative.float     +4                        ), false
      @eq ( Ωit_730 = -> isa.negative.integer   +4                        ), false
      @eq ( Ωit_731 = -> isa.negative.infinity  +4                        ), false
      @eq ( Ωit_732 = -> isa.posnaught.float    +4                        ), true
      @eq ( Ωit_733 = -> isa.posnaught.integer  +4                        ), true
      @eq ( Ωit_734 = -> isa.posnaught.infinity +4                        ), false
      @eq ( Ωit_735 = -> isa.negnaught.float    +4                        ), false
      @eq ( Ωit_736 = -> isa.negnaught.integer  +4                        ), false
      @eq ( Ωit_737 = -> isa.negnaught.infinity +4                        ), false
      #.......................................................................................................
      @eq ( Ωit_738 = -> isa.positive.float      0                        ), false
      @eq ( Ωit_739 = -> isa.positive.integer    0                        ), false
      @eq ( Ωit_740 = -> isa.positive.infinity   0                        ), false
      @eq ( Ωit_741 = -> isa.negative.float      0                        ), false
      @eq ( Ωit_742 = -> isa.negative.integer    0                        ), false
      @eq ( Ωit_743 = -> isa.negative.infinity   0                        ), false
      @eq ( Ωit_744 = -> isa.posnaught.float     0                        ), true
      @eq ( Ωit_745 = -> isa.posnaught.integer   0                        ), true
      @eq ( Ωit_746 = -> isa.posnaught.infinity  0                        ), false
      @eq ( Ωit_747 = -> isa.negnaught.float     0                        ), true
      @eq ( Ωit_748 = -> isa.negnaught.integer   0                        ), true
      @eq ( Ωit_749 = -> isa.negnaught.infinity  0                        ), false
      #.......................................................................................................
      @eq ( Ωit_750 = -> isa.positive.float      Infinity                 ), false
      @eq ( Ωit_751 = -> isa.positive.integer    Infinity                 ), false
      @eq ( Ωit_752 = -> isa.positive.infinity   Infinity                 ), true
      @eq ( Ωit_753 = -> isa.negative.float      Infinity                 ), false
      @eq ( Ωit_754 = -> isa.negative.integer    Infinity                 ), false
      @eq ( Ωit_755 = -> isa.negative.infinity   Infinity                 ), false
      @eq ( Ωit_756 = -> isa.posnaught.float     Infinity                 ), false
      @eq ( Ωit_757 = -> isa.posnaught.integer   Infinity                 ), false
      @eq ( Ωit_758 = -> isa.posnaught.infinity  Infinity                 ), true
      @eq ( Ωit_759 = -> isa.negnaught.float     Infinity                 ), false
      @eq ( Ωit_760 = -> isa.negnaught.integer   Infinity                 ), false
      @eq ( Ωit_761 = -> isa.negnaught.infinity  Infinity                 ), false
      #.......................................................................................................
      @eq ( Ωit_762 = -> isa.positive.float      +4.3                     ), true
      @eq ( Ωit_763 = -> isa.positive.integer    +4.3                     ), false
      @eq ( Ωit_764 = -> isa.positive.infinity   +4.3                     ), false
      @eq ( Ωit_765 = -> isa.negative.float      +4.3                     ), false
      @eq ( Ωit_766 = -> isa.negative.integer    +4.3                     ), false
      @eq ( Ωit_767 = -> isa.negative.infinity   +4.3                     ), false
      @eq ( Ωit_768 = -> isa.posnaught.float     +4.3                     ), true
      @eq ( Ωit_769 = -> isa.posnaught.integer   +4.3                     ), false
      @eq ( Ωit_770 = -> isa.posnaught.infinity  +4.3                     ), false
      @eq ( Ωit_771 = -> isa.negnaught.float     +4.3                     ), false
      @eq ( Ωit_772 = -> isa.negnaught.integer   +4.3                     ), false
      @eq ( Ωit_773 = -> isa.negnaught.infinity  +4.3                     ), false
      #.......................................................................................................
      @eq ( Ωit_774 = -> isa.positive.float      -4.3                     ), false
      @eq ( Ωit_775 = -> isa.positive.integer    -4.3                     ), false
      @eq ( Ωit_776 = -> isa.positive.infinity   -4.3                     ), false
      @eq ( Ωit_777 = -> isa.negative.float      -4.3                     ), true
      @eq ( Ωit_778 = -> isa.negative.integer    -4.3                     ), false
      @eq ( Ωit_779 = -> isa.negative.infinity   -4.3                     ), false
      @eq ( Ωit_780 = -> isa.posnaught.float     -4.3                     ), false
      @eq ( Ωit_781 = -> isa.posnaught.integer   -4.3                     ), false
      @eq ( Ωit_782 = -> isa.posnaught.infinity  -4.3                     ), false
      @eq ( Ωit_783 = -> isa.negnaught.float     -4.3                     ), true
      @eq ( Ωit_784 = -> isa.negnaught.integer   -4.3                     ), false
      @eq ( Ωit_785 = -> isa.negnaught.infinity  -4.3                     ), false
      #.......................................................................................................
      @eq ( Ωit_786 = -> isa.posnaught           +Infinity                ), true
      @eq ( Ωit_787 = -> isa.negnaught           +Infinity                ), false
      @eq ( Ωit_788 = -> isa.posnaught           -Infinity                ), false
      @eq ( Ωit_789 = -> isa.negnaught           -Infinity                ), true
      @eq ( Ωit_790 = -> isa.posnaught           0                        ), true
      @eq ( Ωit_791 = -> isa.negnaught           0                        ), true
      @eq ( Ωit_792 = -> isa.posnaught           0                        ), true
      @eq ( Ωit_793 = -> isa.negnaught           0                        ), true
      #.......................................................................................................
      @eq ( Ωit_794 = -> isa.frozen         Object.freeze {}              ), true
      @eq ( Ωit_795 = -> isa.frozen         Object.freeze []              ), true
      @eq ( Ωit_796 = -> isa.frozen                       {}              ), false
      @eq ( Ωit_797 = -> isa.frozen                       []              ), false
      @eq ( Ωit_798 = -> isa.frozen.object  Object.freeze {}              ), true
      @eq ( Ωit_799 = -> isa.frozen.list    Object.freeze []              ), true
      @eq ( Ωit_800 = -> isa.frozen.object                {}              ), false
      @eq ( Ωit_801 = -> isa.frozen.list                  []              ), false
      #.......................................................................................................
      @eq ( Ωit_802 = -> isa.odd.integer                  []              ), false
      @eq ( Ωit_803 = -> isa.odd.integer                  102.4           ), false
      @eq ( Ωit_804 = -> isa.odd.integer                  9997            ), true
      @eq ( Ωit_805 = -> isa.odd.integer                  '1024'          ), false
      @eq ( Ωit_806 = -> isa.odd.integer                  0               ), false
      @eq ( Ωit_807 = -> isa.odd.integer                  1024            ), false
      @eq ( Ωit_808 = -> isa.odd.positive.integer         1024            ), false
      @eq ( Ωit_809 = -> isa.odd.positive.integer         102.4           ), false
      @eq ( Ωit_810 = -> isa.odd.positive.integer         1023            ), true
      @eq ( Ωit_811 = -> isa.odd.positive.integer         -1023           ), false
      @eq ( Ωit_812 = -> isa.odd.positive.integer         103.4           ), false
      @eq ( Ωit_813 = -> isa.even.integer                 []              ), false
      @eq ( Ωit_814 = -> isa.even.integer                 102.4           ), false
      @eq ( Ωit_815 = -> isa.even.integer                 9997            ), false
      @eq ( Ωit_816 = -> isa.even.integer                 '1024'          ), false
      @eq ( Ωit_817 = -> isa.even.integer                 0               ), true
      @eq ( Ωit_818 = -> isa.even.integer                 1024            ), true
      @eq ( Ωit_819 = -> isa.even.positive.integer        1024            ), true
      @eq ( Ωit_820 = -> isa.even.positive.integer        0               ), false
      @eq ( Ωit_821 = -> isa.even.posnaught.integer       1024            ), true
      @eq ( Ωit_822 = -> isa.even.posnaught.integer       0               ), true
      #.......................................................................................................
      @eq ( Ωit_823 = -> isa.even.posnaught               0               ), true
      @eq ( Ωit_824 = -> isa.even.posnaught               1               ), false
      @eq ( Ωit_825 = -> isa.even.posnaught               2               ), true
      #.......................................................................................................
      @eq ( Ωit_826 = -> isa.cardinal                     -1024           ), false
      @eq ( Ωit_827 = -> isa.cardinal                     10              ), true
      @eq ( Ωit_828 = -> isa.cardinal                     123.7           ), false
      @eq ( Ωit_829 = -> isa.cardinal                     0               ), true
      @eq ( Ωit_830 = -> isa.cardinal                     1               ), true
      @eq ( Ωit_831 = -> isa.cardinal                     Infinity        ), false
      @eq ( Ωit_832 = -> evaluate.cardinal                Infinity        ), { cardinal: false }
      @eq ( Ωit_833 = -> evaluate.posnaught.integer       Infinity        ), { 'posnaught.integer': false }
      #.......................................................................................................
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  disallow_rhs_optional: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      ### TAINT observe the out-comment messages would perhaps make more sense as they are more specific ###
      @eq ( Ωit_834 = -> ( new Intertype() ).declare { foo: 'float', } ), null
      @eq ( Ωit_835 = -> ( new Intertype() ).declare { foo: 'text',  } ), null
      # ( new Intertype() ).declare { foo: 'optional', }
      @throws ( Ωit_836 = -> ( new Intertype() ).declare { foo: 'optional', }        ), /illegal use of 'optional' in declaration of type 'foo'/
      @throws ( Ωit_837 = -> ( new Intertype() ).declare { foo: 'qqq', }             ), /unknown type 'qqq'/
      @throws ( Ωit_838 = -> ( new Intertype() ).declare { foo: 'optional.float', }  ), /illegal use of 'optional' in declaration of type 'foo'/
      @throws ( Ωit_839 = -> ( new Intertype() ).declare { foo: 'anything.float', }  ), /illegal use of basetype 'anything' in declaration of type 'foo'/
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  parallel_behavior_of_isa_validate_mandatory_and_optional: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      { isa
        validate  } = new Intertype
          normalfloat: ( ( x ) -> ( @isa.float x ) and ( 0 <= x <= 1 ) )
      @eq ( Ωit_840 = -> isa.normalfloat                     0     ), true
      @eq ( Ωit_841 = -> isa.normalfloat                     null  ), false
      @eq ( Ωit_842 = -> isa.normalfloat                     -1    ), false
      @eq ( Ωit_843 = -> isa.normalfloat                     '?'   ), false
      @eq ( Ωit_844 = -> isa.optional.normalfloat            0     ), true
      @eq ( Ωit_845 = -> isa.optional.normalfloat            null  ), true
      @eq ( Ωit_846 = -> isa.optional.normalfloat            -1    ), false
      @eq ( Ωit_847 = -> isa.optional.normalfloat            '?'   ), false
      @eq ( Ωit_848 = -> validate.normalfloat                0     ), 0
      @eq ( Ωit_849 = -> validate.optional.normalfloat       0     ), 0
      @eq ( Ωit_850 = -> validate.optional.normalfloat       null  ), null
      @throws ( Ωit_851 = -> validate.normalfloat           null ), /expected a normalfloat, got a null/
      @throws ( Ωit_852 = -> validate.normalfloat           -1   ), /expected a normalfloat, got a float/
      @throws ( Ωit_853 = -> validate.normalfloat           '?'  ), /expected a normalfloat, got a text/
      @throws ( Ωit_854 = -> validate.optional.normalfloat  -1   ), /expected an optional normalfloat, got a float/
      @throws ( Ωit_855 = -> validate.optional.normalfloat  '?'  ), /expected an optional normalfloat, got a text/
      return null
    #.........................................................................................................
    do =>
      my_types =
        'quantity':     'object'
        'quantity.q':   'float'
        'quantity.u':   'text'
        'foo':          'object'
        'foo.bar':      'object'
        'foo.bar.baz':  'float'
      { isa
        validate  } = types = new Intertype my_types
      @eq ( Ωit_856 = -> isa.quantity            { q: 1, u: 'm', }   ), true
      @eq ( Ωit_857 = -> isa.quantity            null                ), false
      @eq ( Ωit_858 = -> isa.optional.quantity   { q: 2, u: 'm', }   ), true
      @eq ( Ωit_859 = -> isa.optional.quantity   null                ), true
      @eq ( Ωit_860 = -> validate.quantity               { q: 3, u: 'm', } ), { q: 3, u: 'm', }
      @eq ( Ωit_861 = -> validate.optional.quantity      { q: 4, u: 'm', } ), { q: 4, u: 'm', }
      @eq ( Ωit_862 = -> validate.optional.quantity.q    null  ), null
      @eq ( Ωit_863 = -> validate.optional.quantity.q    111   ), 111
      @eq ( Ωit_864 = -> isa.quantity                     null               ), false
      @eq ( Ωit_865 = -> isa.quantity                     -1                 ), false
      @eq ( Ωit_866 = -> isa.quantity                     '?'                ), false
      @eq ( Ωit_867 = -> isa.quantity.q                   '?'                ), false
      @eq ( Ωit_868 = -> isa.quantity.q                   3                  ), true
      @eq ( Ωit_869 = -> isa.optional.quantity            { q: 1, u: 'm', }  ), true
      @eq ( Ωit_870 = -> isa.optional.quantity            null               ), true
      @eq ( Ωit_871 = -> isa.optional.quantity            -1                 ), false
      @eq ( Ωit_872 = -> isa.optional.quantity            '?'                ), false
      @eq ( Ωit_873 = -> isa.optional.quantity.q          '?'                ), false
      @eq ( Ωit_874 = -> isa.optional.quantity.q          3                  ), true
      @eq ( Ωit_875 = -> validate.quantity                { q: 1, u: 'm', }  ), { q: 1, u: 'm', }
      @eq ( Ωit_876 = -> validate.optional.quantity       { q: 1, u: 'm', }  ), { q: 1, u: 'm', }
      @eq ( Ωit_877 = -> validate.optional.quantity       null               ), null
      @throws ( Ωit_878 = -> validate.quantity           { q: 5, }  ), /expected a quantity, got a object/ ### TAINT message should be more specific ###
      @throws ( Ωit_879 = -> validate.quantity            null      ), /expected a quantity, got a null/
      @throws ( Ωit_880 = -> validate.quantity            -1        ), /expected a quantity, got a float/
      @throws ( Ωit_881 = -> validate.quantity            '?'       ), /expected a quantity, got a text/
      @throws ( Ωit_882 = -> validate.quantity            { q: 1, } ), /expected a quantity, got a object/ ### TAINT message should be more specific ###
      @throws ( Ωit_883 = -> validate.optional.quantity   -1        ), /expected an optional quantity, got a float/
      @throws ( Ωit_884 = -> validate.optional.quantity   { q: 1, } ), /expected an optional quantity, got a object/ ### TAINT message should be more specific ###
      @throws ( Ωit_885 = -> validate.optional.quantity.q { q: 1, } ), /expected an optional quantity.q, got a object/
      @throws ( Ωit_886 = -> validate.optional.quantity.q 3, 4, 5   ), /method 'validate.optional.quantity.q' expects 1 arguments, got 3/
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  declaration_role_field: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      { declarations  } = new Intertype()
      @eq ( Ωit_887 = -> declarations.float.role     ), 'usertype'
      @eq ( Ωit_888 = -> declarations.null.role      ), 'basetype'
      @eq ( Ωit_889 = -> declarations.anything.role  ), 'basetype'
      @eq ( Ωit_890 = -> declarations.unknown.role   ), 'basetype'
      @eq ( Ωit_891 = -> declarations.optional.role  ), 'optional'
      # @throws T, /expected a normalfloat, got a null/,             -> validate.normalfloat           null
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  minimal_type_of_results: ->
    { Intertype_minimal } = require '../../../apps/intertype'
    { isa
      validate
      create
      declare
      type_of           } = new Intertype_minimal()
    #.........................................................................................................
    do =>
      @eq ( Ωit_892 = -> type_of null              ), 'null'
      @eq ( Ωit_893 = -> type_of undefined         ), 'undefined'
      @eq ( Ωit_894 = -> type_of +Infinity         ), 'unknown'
      @eq ( Ωit_895 = -> type_of 4                 ), 'unknown'
      return null
    #.........................................................................................................
    do =>
      @eq ( Ωit_896 = -> isa.anything   1          ), true
      @eq ( Ωit_897 = -> isa.nothing    1          ), false
      @eq ( Ωit_898 = -> isa.something  1          ), true
      @eq ( Ωit_899 = -> isa.unknown    1          ), true
      return null
    #.........................................................................................................
    do =>
      @eq ( Ωit_900 = -> isa.anything   null       ), true
      @eq ( Ωit_901 = -> isa.nothing    null       ), true
      @eq ( Ωit_902 = -> isa.something  null       ), false
      @eq ( Ωit_903 = -> isa.unknown    null       ), false
      return null
    #.........................................................................................................
    do =>
      @eq ( Ωit_904 = -> isa.anything   undefined  ), true
      @eq ( Ωit_905 = -> isa.nothing    undefined  ), true
      @eq ( Ωit_906 = -> isa.something  undefined  ), false
      @eq ( Ωit_907 = -> isa.unknown    undefined  ), false
      return null
    #.........................................................................................................
    do =>
      @throws ( Ωit_908 = -> isa.optional 1      ), /`optional` is not a legal type for `isa` methods/
      @throws ( Ωit_909 = -> validate.optional 1 ), /`optional` is not a legal type for `validate` methods/
      @throws ( Ωit_910 = -> create.optional 1   ), /`optional` is not a legal type for `create` methods/
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  can_use_null_and_undefined_in_record_create_methods: ->
    { Intertype, } = require '../../../apps/intertype'
    types = new Intertype()
    types.declare
      foobar:
        fields:
          foo:    'integer'
          bar:    'integer'
        template:
          foo:    4
          bar:    5
    @eq ( Ωit_911 = -> types.create.foobar { foo: 8, bar: 9, } ), { foo: 8, bar: 9, }
    @eq ( Ωit_912 = -> types.create.foobar { foo: 8,         } ), { foo: 8, bar: 5, }
    @eq ( Ωit_913 = -> types.create.foobar { foo: 4, bar: 5, } ), { foo: 4, bar: 5, }
    @eq ( Ωit_914 = -> types.create.foobar {                 } ), { foo: 4, bar: 5, }
    @eq ( Ωit_915 = -> types.create.foobar undefined           ), { foo: 4, bar: 5, }
    @eq ( Ωit_916 = -> types.create.foobar null                ), { foo: 4, bar: 5, }
    return null

  #---------------------------------------------------------------------------------------------------------
  can_use_values_of_unknown_type: ->
    do =>
      { Intertype_minimal, } = require '../../../apps/intertype'
      types = new Intertype_minimal()
      types.declare thirtyone: ( x ) -> x is 31
      @eq ( Ωit_917 = -> types.type_of 31        ), 'thirtyone'
      @eq ( Ωit_918 = -> types.type_of 32        ), 'unknown'
      @eq ( Ωit_919 = -> types.isa.thirtyone 31  ), true
      @eq ( Ωit_920 = -> types.isa.thirtyone 32  ), false
      @eq ( Ωit_921 = -> types.type_of new Map() ), 'unknown'
      return null
    #.......................................................................................................
    do =>
      { Intertype_minimal, } = require '../../../apps/intertype'
      types = new Intertype_minimal()
      types.declare thirtyone:  ( x ) -> ( @isa.float x ) and ( x is 31 )
      ### this used to be a problem        ^^^^ ###
      types.declare float:      ( x ) -> Number.isFinite x
      @eq ( Ωit_922 = -> types.type_of 31        ), 'thirtyone'
      @eq ( Ωit_923 = -> types.type_of 32        ), 'float'
      @eq ( Ωit_924 = -> types.isa.thirtyone 31  ), true
      @eq ( Ωit_925 = -> types.isa.thirtyone 32  ), false
      @eq ( Ωit_926 = -> types.type_of new Map() ), 'unknown'
      return null
    #.......................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  advanced_types: ->
    { Intertype, } = require '../../../apps/intertype'
    types = new Intertype()
    @eq ( Ωit_927 = -> types.type_of new Set() ), 'set'
    @eq ( Ωit_928 = -> types.type_of new Map() ), 'map'
    return null

  #-----------------------------------------------------------------------------------------------------------
  kinds_and_roles: ->
    { Intertype, } = require '../../../apps/intertype'
    types = new Intertype()
    types.declare
      foo:
        fields:
          d:      'integer'
          e:      'float'
      bar:        'foo'
    @eq ( Ωit_929 = -> types.declarations.integer.kind  ), 'float'
    @eq ( Ωit_930 = -> types.declarations.foo.type      ), 'foo'
    @eq ( Ωit_931 = -> types.declarations.foo.kind      ), 'object'
    @eq ( Ωit_932 = -> types.declarations.foo.role      ), 'usertype'
    @eq ( Ωit_933 = -> types.declarations.bar.type      ), 'bar'
    @eq ( Ωit_934 = -> types.declarations.bar.kind      ), 'foo'
    @eq ( Ωit_935 = -> types.declarations.bar.role      ), 'usertype'
    return null

  #=========================================================================================================
  Naming:

    #-------------------------------------------------------------------------------------------------------
    type: ->
      { Intertype, } = require '../../../apps/intertype'
      t2 = new Intertype()
      for type, declaration of t2.declarations
        @eq ( Ωit_936 = -> declaration.type is type ), true
      return null

    #-------------------------------------------------------------------------------------------------------
    validate_methods: ->
      { Intertype, } = require '../../../apps/intertype'
      t2 = new Intertype()
      @eq ( Ωit_937 = -> t2.validate.asyncfunction.name          ), 'validate.asyncfunction'
      @eq ( Ωit_938 = -> t2.validate.optional.asyncfunction.name ), 'validate.optional.asyncfunction'
      return null

    #-------------------------------------------------------------------------------------------------------
    isa_methods: ->
      { Intertype, } = require '../../../apps/intertype'
      t2 = new Intertype()
      @eq ( Ωit_939 = -> t2.isa.asyncfunction.name               ), 'isa.asyncfunction'
      @eq ( Ωit_940 = -> t2.isa.optional.asyncfunction.name      ), 'isa.optional.asyncfunction'
      @eq ( Ωit_941 = -> t2.isa.null?.name                       ), 'isa.null'
      @eq ( Ωit_942 = -> t2.isa.function?.name                   ), 'isa.function'
      @eq ( Ωit_943 = -> t2.isa.boolean?.name                    ), 'isa.boolean'
      @eq ( Ωit_944 = -> t2.isa.text?.name                       ), 'isa.text'
      @eq ( Ωit_945 = -> t2.isa.asyncfunction?.name              ), 'isa.asyncfunction'
      return null

    #-------------------------------------------------------------------------------------------------------
    create_methods: ->
      { Intertype, } = require '../../../apps/intertype'
      t2 = new Intertype()
      @eq ( Ωit_946 = -> t2.create.function.name               ), 'create.function'
      @eq ( Ωit_947 = -> t2.create.float.name                  ), 'create.float'
      return null

  #=========================================================================================================
  Create_methods:

    #-------------------------------------------------------------------------------------------------------
    floats: ->
      { Intertype, } = require '../../../apps/intertype'
      t2 = new Intertype()
      @eq     ( Ωit_948 = -> t2.create.float()              ), 0
      @eq     ( Ωit_949 = -> t2.create.float +0             ), 0
      @eq     ( Ωit_950 = -> t2.create.float -0             ), 0
      @eq     ( Ωit_951 = -> t2.create.float false          ), 0
      @eq     ( Ωit_952 = -> t2.create.float true           ), 1
      @eq     ( Ωit_953 = -> t2.create.float 12.34          ), 12.34
      @eq     ( Ωit_954 = -> t2.create.float '12.34'        ), 12.34
      @eq     ( Ωit_955 = -> t2.create.float +12.34         ), 12.34
      @eq     ( Ωit_956 = -> t2.create.float '+12.34'       ), 12.34
      @eq     ( Ωit_957 = -> t2.create.float -12.34         ), -12.34
      @eq     ( Ωit_958 = -> t2.create.float '-12.34'       ), -12.34
      @eq     ( Ωit_959 = -> t2.create.float null           ), 0
      @eq     ( Ωit_960 = -> t2.create.float undefined      ), 0
      @throws ( Ωit_961 = -> t2.create.float ''             ), /these arguments are not suitable for `create.float\(\)`: ''/
      return null

    #-------------------------------------------------------------------------------------------------------
    integers: ->
      { Intertype, } = require '../../../apps/intertype'
      t2 = new Intertype()
      @eq     ( Ωit_962 = -> t2.create.integer()              ), 0
      @eq     ( Ωit_963 = -> t2.create.integer +0             ), 0
      @eq     ( Ωit_964 = -> t2.create.integer -0             ), 0
      @eq     ( Ωit_965 = -> t2.create.integer false          ), 0
      @eq     ( Ωit_966 = -> t2.create.integer true           ), 1
      @eq     ( Ωit_967 = -> t2.create.integer 12.34          ), 12
      @eq     ( Ωit_968 = -> t2.create.integer '12'           ), 12
      @eq     ( Ωit_969 = -> t2.create.integer +12            ), 12
      @eq     ( Ωit_970 = -> t2.create.integer '+12'          ), 12
      @eq     ( Ωit_971 = -> t2.create.integer -12            ), -12
      @eq     ( Ωit_972 = -> t2.create.integer '-12'          ), -12
      @eq     ( Ωit_973 = -> t2.create.integer null           ), 0
      @eq     ( Ωit_974 = -> t2.create.integer undefined      ), 0
      @throws ( Ωit_975 = -> t2.create.integer ''             ), /these arguments are not suitable for `create.integer\(\)`: ''/
      return null

    #-------------------------------------------------------------------------------------------------------
    cardinals: ->
      { Intertype, } = require '../../../apps/intertype'
      t2 = new Intertype()
      @eq     ( Ωit_976 = -> t2.create.cardinal()              ), 0
      @eq     ( Ωit_977 = -> t2.create.cardinal +0             ), +0
      @eq     ( Ωit_978 = -> t2.create.cardinal -0             ), -0
      @eq     ( Ωit_979 = -> t2.create.cardinal false          ), 0
      @eq     ( Ωit_980 = -> t2.create.cardinal true           ), 1
      @eq     ( Ωit_981 = -> t2.create.cardinal 12.34          ), 12
      @eq     ( Ωit_982 = -> t2.create.cardinal '12'           ), 12
      @eq     ( Ωit_983 = -> t2.create.cardinal +12            ), 12
      @eq     ( Ωit_984 = -> t2.create.cardinal '+12'          ), 12
      @throws ( Ωit_985 = -> t2.create.cardinal -12            ), /these arguments are not suitable for `create.cardinal\(\)`: -12/
      @throws ( Ωit_986 = -> t2.create.cardinal '-12'          ), /these arguments are not suitable for `create.cardinal\(\)`: '-12'/
      @eq     ( Ωit_987 = -> t2.create.cardinal null           ), 0
      @eq     ( Ωit_988 = -> t2.create.cardinal undefined      ), 0
      @throws ( Ωit_989 = -> t2.create.cardinal ''             ), /these arguments are not suitable for `create.cardinal\(\)`: ''/
      return null

    #-------------------------------------------------------------------------------------------------------
    texts: ->
      { Intertype, } = require '../../../apps/intertype'
      t2 = new Intertype()
      @eq     ( Ωit_990 = -> t2.create.text()              ), ''
      @eq     ( Ωit_991 = -> t2.create.text +0             ), '0'
      @eq     ( Ωit_992 = -> t2.create.text -0             ), '-0'
      @eq     ( Ωit_993 = -> t2.create.text false          ), 'false'
      @eq     ( Ωit_994 = -> t2.create.text true           ), 'true'
      @eq     ( Ωit_995 = -> t2.create.text 12.34          ), '12.34'
      @eq     ( Ωit_996 = -> t2.create.text '12'           ), '12'
      @eq     ( Ωit_997 = -> t2.create.text +12            ), '12'
      @eq     ( Ωit_998 = -> t2.create.text '+12'          ), '+12'
      @eq     ( Ωit_999 = -> t2.create.text -12            ), '-12'
      @eq     ( Ωit1000 = -> t2.create.text '-12'          ), '-12'
      @eq     ( Ωit1001 = -> t2.create.text null           ), ''
      @eq     ( Ωit1002 = -> t2.create.text undefined      ), ''
      @eq     ( Ωit1003 = -> t2.create.text ''             ), ''
      return null

    #-------------------------------------------------------------------------------------------------------
    on_dotted_types_1: ->
      { Intertype, }  = require '../../../apps/intertype'
      has_been_called = { create_quantity: 0, create_quantity_q: 0, create_quantity_u: 0, }
      #.....................................................................................................
      do =>
        declarations =
          quantity:
            test:       'object'
            template:
              q:        0
              u:        'u'
            create: ( x ) ->
              has_been_called.create_quantity++
              debug 'Ω1003', "create.quantity( #{rpr x} )"
              debug 'Ω1004', { @declarations.quantity.template..., x..., }
              return { @declarations.quantity.template..., x..., }
          'quantity.q':
            test: 'float'
            create: ( x ) ->
              has_been_called.create_quantity_q++
              debug 'Ω1005', "create.quantity.q( #{rpr x} )"
              return 0
          'quantity.u':
            test: 'text'
            create: ( x ) ->
              has_been_called.create_quantity_u++
              debug 'Ω1006', "create.quantity.u( #{rpr x} )"
              return 'u'
        t2 = new Intertype declarations
        @eq     ( Ωit1004 = -> t2.create.quantity()               ), { q: 0, u: 'u', }
        @eq     ( Ωit1005 = -> has_been_called.create_quantity    ), 1
        @eq     ( Ωit1006 = -> has_been_called.create_quantity_q  ), 1
        @eq     ( Ωit1007 = -> has_been_called.create_quantity_u  ), 1
        @eq     ( Ωit1008 = -> t2.create.quantity '12.5m'         ), { q: 12.5, u: 'm', }
        @eq     ( Ωit1009 = -> t2.create.quantity.q()             ), 0
        @eq     ( Ωit1010 = -> t2.create.quantity.u()             ), 'u'
        @eq     ( Ωit1011 = -> t2.create[ 'quantity.q' ]()        ), 0
        @eq     ( Ωit1012 = -> t2.create[ 'quantity.u' ]()        ), 'u'
        return null

    #-------------------------------------------------------------------------------------------------------
    on_dotted_types_2: ->
      { Intertype, }  = require '../../../apps/intertype'
      has_been_called = { create_quantity: 0, create_quantity_q: 0, create_quantity_u: 0, }
      #.....................................................................................................
      do =>
        declarations =
          quantity:
            test:       'object'
            fields:
              q:
                test:     'float'
                create:   ( x ) -> 0
              u:
                test:     'text'
                create:   ( x ) -> 'u'
            template:
              q:        0
              u:        'u'
            create: ( x ) ->
              { q: 0, u: 'u', }
        t2 = new Intertype declarations
        @eq     ( Ωit1013 = -> t2.create.quantity()               ), { q: 0, u: 'u', }
        @eq     ( Ωit1014 = -> t2.create.quantity '12.5m'         ), { q: 12.5, u: 'm', }
        @eq     ( Ωit1015 = -> t2.create.quantity.q()             ), 0
        @eq     ( Ωit1016 = -> t2.create.quantity.u()             ), 'u'
        @eq     ( Ωit1017 = -> t2.create[ 'quantity.q' ]()        ), 0
        @eq     ( Ωit1018 = -> t2.create[ 'quantity.u' ]()        ), 'u'
        return null

    #-------------------------------------------------------------------------------------------------------
    on_dotted_types_3: ->
      { Intertype, }  = require '../../../apps/intertype'
      has_been_called = { create_quantity: 0, create_quantity_q: 0, create_quantity_u: 0, }
      #.....................................................................................................
      do =>
        declarations =
          literal:
            role:     'qualifier'
            fields:
              float:
                test:     'float'
                create:   ( x ) -> parseFloat x
              integer:
                test:     'integer'
                create:   ( x ) -> parseInt x, 10
        t2 = new Intertype declarations
        debug 'Ωit1019', t2.declarations[ 'literal.float'   ].create '123.456e4'
        debug 'Ωit1020', t2.declarations[ 'literal.integer' ].create '123.456'
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    on_dotted_types_4: ->
      { Intertype,  } = require '../../../apps/intertype'
      has_been_called = { create_quantity: 0, }
      #.....................................................................................................
      do =>
        declarations =
          float1:       'float'
          float2:       'float1'
          float3:       'float2'
          float4:       'float3'
          quantity:
            test:       'object'
            template:
              q:        0
              u:        'u'
            create: ( x ) ->
              debug 'Ω1009', { x, }
              has_been_called.create_quantity++
              { q: 0, u: 'u', x..., }
        #...................................................................................................
        t2 = new Intertype declarations
        @eq     ( Ωit1021 = -> t2.create.float()                  ), 0
        @eq     ( Ωit1022 = -> t2.create.float1()                 ), 0
        @eq     ( Ωit1023 = -> t2.create.float2()                 ), 0
        @eq     ( Ωit1024 = -> t2.create.float3()                 ), 0
        @eq     ( Ωit1025 = -> t2.create.float4()                 ), 0
        @eq     ( Ωit1026 = -> t2.create.quantity()               ), { q: 0, u: 'u', }
        @eq     ( Ωit1027 = -> t2.create.quantity { q: 1, }       ), { q: 1, u: 'u', }
        @eq     ( Ωit1028 = -> t2.create.quantity { u: 'm', }     ), { q: 0, u: 'm', }
        @eq     ( Ωit1029 = -> has_been_called.create_quantity    ), 3
        # @eq     ( Ωit1030 = -> t2.declarations.mass.kind          ), 'quantity'
        # @eq     ( Ωit1031 = -> t2.create[ 'quantity.q' ]()        ), 0
        # @eq     ( Ωit1032 = -> t2.create[ 'quantity.u' ]()        ), 'u'
        # #...................................................................................................
        # @eq     ( Ωit1033 = -> t2.create.mass()                   ), { q: 0, u: 'u', }
        # @eq     ( Ωit1034 = -> t2.create[ 'foo.bar.baz' ]()       ), { q: 0, u: 'u', }
        # @eq     ( Ωit1035 = -> t2.create.quantity.q()             ), 0
        # @eq     ( Ωit1036 = -> t2.create.quantity.u()             ), 'u'
        # @eq     ( Ωit1037 = -> t2.create.foo.bar.baz()            ), { q: 0, u: 'u', }
        # debug 'Ωit1038', t2.create.float
        # debug 'Ωit1039', t2.create.quantity
        debug 'Ωit1040', has_been_called
        debug 'Ωit1041', has_been_called.create_quantity
        return null
      #.....................................................................................................
      return null

    # #-------------------------------------------------------------------------------------------------------
    # posnaught_integers: ->
    #   { Intertype, } = require '../../../apps/intertype'
    #   t2 = new Intertype()
    #   @eq     ( Ωit1042 = -> t2.create.posnaught.integer()              ), 0
    #   @eq     ( Ωit1043 = -> t2.create.posnaught.integer +0             ), 0
    #   @eq     ( Ωit1044 = -> t2.create.posnaught.integer -0             ), 0
    #   @eq     ( Ωit1045 = -> t2.create.posnaught.integer false          ), 0
    #   @eq     ( Ωit1046 = -> t2.create.posnaught.integer true           ), 1
    #   @eq     ( Ωit1047 = -> t2.create.posnaught.integer 12.34          ), 12
    #   @eq     ( Ωit1048 = -> t2.create.posnaught.integer '12'           ), 12
    #   @eq     ( Ωit1049 = -> t2.create.posnaught.integer +12            ), 12
    #   @eq     ( Ωit1050 = -> t2.create.posnaught.integer '+12'          ), 12
    #   @eq     ( Ωit1051 = -> t2.create.posnaught.integer -12            ), -12
    #   @eq     ( Ωit1052 = -> t2.create.posnaught.integer '-12'          ), -12
    #   @eq     ( Ωit1053 = -> t2.create.posnaught.integer null           ), 0
    #   @eq     ( Ωit1054 = -> t2.create.posnaught.integer undefined      ), 0
    #   @throws ( Ωit1055 = -> t2.create.posnaught.integer ''             ), /these arguments are not suitable for `create.posnaught.integer\(\)`: \[ '' \]/
    #   return null

  Regexes:
    floats: ->
      { Intertype, }  = require '../../../apps/intertype'
      type_patterns   = require '../../../apps/intertype/lib/patterns'
      types           = new Intertype()
      types.declare is_valid_literal: ( x ) -> return x in [ true, false, null, ]
      regexes         = [
        # ///^   [-+]? (  [0-9]*[.])?[0-9]+([eE][-+]?\d+)?                                      $/// ### r0 ###
        # ///^ ( [-+]? (?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)(?:[eE][+-]?[0-9]+)?)                    $/// ### r1 ###
        # ///^ (?: (?: [-+]?[0-9]*\.?[0-9]+ ) | (?: [-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)? ) )  $/// ### r2 ###
        # ///^
        #       (?:
        #       [+-]? # optional sign
        #         (?: # start a conditional group
        #         \d+ # either a nonzero number of digits
        #         |   # or a decimal phrase
        #         \d* # optional digits preceding the decimal
        #         \.(?=\d) # a literal decimal followed by at least one digit
        #         \d* # optionally some more digits
        #         ) # note this group is mandatory!
        #         (?: # start an optional scientific notation group
        #         [eE] # the scientific notation character
        #         [+-]? # optional sign
        #         \d+ # after sci notation, you cannot go directly to a decimal
        #         )?
        #       )
        #       $ /// ### r3 ###
        # ///^   [-+]? (  [0-9]*[.])?[0-9]+([eE][-+]?\d+)?                                      $/// ### r4 ###
        # ///^[+\-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:\d[eE][+\-]?\d+)?$/// ### r5 thx to https://stackoverflow.com/a/51790561/7568091 ###
        ### thx to https://stackoverflow.com/a/51790561/7568091 ###
        # ///^[-+]?([0-9]*[.])?[0-9]+([eE][-+]?[0-9]+)?$/// ### r6 ###
        # ///^
        #   [-+]?
        #   (?:
        #     ([1-9][0-9]*[.])[0-9]+ |
        #     ([.])[0-9]+ |
        #     ([1-9][0-9]*)
        #     )
        #   ([eE][-+]?[0-9]+)?
        #   $///u ### r7 ###
        # type_patterns.patterns.any.float
        type_patterns.patterns.only.float
        # type_patterns.patterns.only.float_and_rest
        ]
      probes_and_matchers = [
        [ '123',          true,   123,           ] ### p0  ###
        [ '123.45',       true,   123.45,        ] ### p1  ###
        [ '45e43',        true,   4.5e+44,       ] ### p2  ###
        [ '.45',          true,   0.45,          ] ### p3  ###
        [ '.45e43',       true,   4.5e+42,       ] ### p4  ###
        [ '.45e+43',      true,   4.5e+42,       ] ### p5  ###
        [ '.45e-43',      true,   4.5e-44,       ] ### p6  ###
        [ '+.45',         true,   0.45,          ] ### p7  ###
        [ '+.45e43',      true,   4.5e+42,       ] ### p8  ###
        [ '+.45e+43',     true,   4.5e+42,       ] ### p9  ###
        [ '+.45e-43',     true,   4.5e-44,       ] ### p10  ###
        [ '-.45',         true,   -0.45,         ] ### p11 ###
        [ '-.45e43',      true,   -4.5e+42,      ] ### p12 ###
        [ '-.45e+43',     true,   -4.5e+42,      ] ### p13 ###
        [ '-.45e-43',     true,   -4.5e-44,      ] ### p14 ###
        [ '123e3',        true,   123000,        ] ### p15 ###
        [ '123.0e3',      true,   123000,        ] ### p16 ###
        [ '123.4e3',      true,   123400,        ] ### p17 ###
        [ '+3',           true,   3,             ] ### p18 ###
        [ '3.2e23',       true,   3.2e+23,       ] ### p19 ###
        [ '-4.70e+9',     true,   -4.7e+9,       ] ### p20 ###
        [ '-.2E-4',       true,   -0.2e-4,       ] ### p21 ###
        [ '-7.6603',      true,   -7.6603,       ] ### p22 ###

        #...................................................................................................
        [ '+0003',        false,   'Octal literals are not allowed in strict mode.',  ] ### p23 ###
        [ '0003',         false,   'Octal literals are not allowed in strict mode.',  ] ### p24 ###
        [ '-0003',        false,   'Octal literals are not allowed in strict mode.',  ] ### p25 ###
        [ '123.e3',       null,   123000,                                             ] ### p26 ? ###
        [ '4567.',        null,   null,                                               ] ### p27 ?? ###
        [ 'e123',         false,  'e123 is not defined',                              ] ### p28 ###
        [ 'e-4',          false,  'e is not defined',                                 ] ### p29 ###
        [ '.e4',          false,  "Unexpected token '.'",                             ] ### p29 ###
        [ '.45e-43.2',    false,  'Unexpected number',                                ] ### p30 ?? ###
        [ '45e4৩',        false,  'Invalid or unexpected token',                      ] ### p31  ###
        [ '37.e88',       null,   3.7e+89,                                            ] ### p32 (dot before the e) ###
        [ '123.4.e3',     null,   null,                                               ] ### p33 (parsed as attribute access) ###
        ]
      #.....................................................................................................
      ### Test whether `is_valid_literal` entries are themselves valid ###
      for [ probe, is_valid_literal, val_or_err, ], pi in probes_and_matchers
        types.validate.is_valid_literal is_valid_literal
        switch true
          when is_valid_literal is true
            @eq ( WGUY.props.nameit "Ω1022-INVALID-TEST-p#{pi}", -> eval probe ), parseFloat probe
            @eq ( WGUY.props.nameit "Ω1023-INVALID-TEST-p#{pi}", -> eval probe ), val_or_err
          when is_valid_literal is false
            @throws ( WGUY.props.nameit "Ω1024-INVALID-TEST-p#{pi}", -> eval probe ), val_or_err
          when is_valid_literal is null
            @pass 'Ω1025', "#{rpr probe} will be considered not well-formed for the purposes of this test"
      #.....................................................................................................
      for regex, ri in regexes
        for [ probe, is_valid_literal, ], pi in probes_and_matchers
          regex.lastIndex = 0
          if ( match = probe.match regex )?
            switch true
              when is_valid_literal is true   then @pass "Ω1026-r#{ri}-p#{pi}"
              when is_valid_literal is false  then @fail "Ω1027-r#{ri}-p#{pi}", "expected no match but got one"
              when is_valid_literal is null   then @fail "Ω1028-r#{ri}-p#{pi}", "expected no match but got one"
          else
            switch true
              when is_valid_literal is true   then @fail "Ω1029-r#{ri}-p#{pi}", "expected match but got none"
              when is_valid_literal is false  then @pass "Ω1030-r#{ri}-p#{pi}"
              when is_valid_literal is null   then @pass "Ω1031-r#{ri}-p#{pi}"
      #.....................................................................................................
      for regex, ri in regexes
        for [ probe, is_valid_literal, ], pi in probes_and_matchers
          regex.lastIndex = 0
          if ( match = probe.match regex )?
            switch true
              when is_valid_literal is true   then help         "Ω1032-r#{ri}-p#{pi}", match
              when is_valid_literal is false  then warn reverse "Ω1033-r#{ri}-p#{pi}", match
              when is_valid_literal is null   then urge reverse "Ω1034-r#{ri}-p#{pi}", match
          else
            switch true
              when is_valid_literal is true   then help reverse "Ω1035-r#{ri}-p#{pi}", match
              when is_valid_literal is false  then warn         "Ω1036-r#{ri}-p#{pi}", match
              when is_valid_literal is null   then urge         "Ω1037-r#{ri}-p#{pi}", match
      #.....................................................................................................
      return null


#   demo_exception_with_lacking_stacktrace_1: ->
#     { Intertype, }  = require '../../../apps/intertype'
#     types           = new Intertype()
#     types.declare
#             quantity:
#               test:       'object'
#               template:
#                 q:        0
#                 u:        'u'
#               create: ( x ) ->
#                 { q: 0, u: 'u', }
#             'quantity.q':
#               test: 'float'
#               create: ( x ) -> 0
#             'quantity.u':
#               test: 'text'
#               create: ( x ) -> 'u'
#             mass:           'quantity'
#     #.......................................................................................................
#     try
#       types.create.mass()
#     catch error
#       debug 'Ωit1056', format_error_stack error.stack
#     #.......................................................................................................
#     return null

#   demo_exception_with_lacking_stacktrace_2: ->
#     { Intertype, }  = require '../../../apps/intertype'
#     types           = new Intertype()
#     types.declare
#             quantity:
#               test:       'object'
#               template:
#                 q:        0
#                 u:        'u'
#               create: ( x ) ->
#                 { q: 0, u: 'u', }
#             'quantity.q':
#               test: 'float'
#               create: ( x ) -> 0
#             'quantity.u':
#               test: 'text'
#               create: ( x ) -> 'u'
#             mass:           'quantity'
#     #.......................................................................................................
#     try
#       @eq ( Ω1039 = -> types.create.mass() ), { q: 0, u: 'u', }
#     catch error
#       debug 'Ωit1057', format_error_stack error.stack
#     #.......................................................................................................
#     return null

# format_error_stack = ( stack ) ->
#   lines = stack.split '\n'
#   lines = ( line for line in lines when not /\bnode:/.test line )
#   lines = ( ( if /jzr\/intertype/.test line then GUY.trm.yellow GUY.trm.reverse line else GUY.trm.white line ) for line in lines )
#   return '\n\n' + ( lines.join '\n' ) + '\n'

#===========================================================================================================
if module is require.main then await do =>
  # @use_fields_to_declare_qualifiers()
  # test @use_fields_to_declare_qualifiers
  # TT = { interface: @intertype_tasks.interface, }
  # ( new Test { throw_on_error: false, } ).test ( { Create_methods: @intertype_tasks.Create_methods, } )
  # ( new Test { throw_on_error: false, } ).test ( { on_dotted_types: @intertype_tasks.Create_methods.on_dotted_types, } )
  # ( new Test { throw_on_error: false, } ).test ( { kinds_and_roles: @intertype_tasks.kinds_and_roles, } )
  # ( new Test { throw_on_error: false, } ).test {
  #     on_dotted_types_1: @intertype_tasks.Create_methods.on_dotted_types_1
  #     # on_dotted_types_2: @intertype_tasks.Create_methods.on_dotted_types_2
  #     # on_dotted_types_3: @intertype_tasks.Create_methods.on_dotted_types_3
  #     # on_dotted_types_4: @intertype_tasks.Create_methods.on_dotted_types_4
  #     }
  # ( new Test { throw_on_error: false, } ).test { can_create_types_with_templates_and_create: @intertype_tasks.can_create_types_with_templates_and_create, }
  # ( new Test { throw_on_error: false, } ).test ( { Naming: @intertype_tasks.Naming, } )
  # ( new Test { throw_on_error: false, } ).test ( { Regexes: @intertype_tasks.Regexes, } )
  # ( new Test { throw_on_error: true, } ).test ( { demo_exception_with_lacking_stacktrace_1: @intertype_tasks.demo_exception_with_lacking_stacktrace_1, } )
  # ( new Test { throw_on_error: true, } ).test ( { demo_exception_with_lacking_stacktrace_2: @intertype_tasks.demo_exception_with_lacking_stacktrace_2, } )
  # await ( new Test { throw_on_error: true, } ).async_test { tasks: @tasks, }
  # await ( new Test { throw_on_error: true, } ).async_test { can_use_values_of_unknown_type: @tasks.can_use_values_of_unknown_type, }
  # demo_1()
  ( new Test { throw_on_error: true, } ).test @intertype_tasks

