

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
      $isa:   ( x, t ) -> Number.isInteger x
      foo:    4
    odd:
      $isa:   ( x, t ) -> ( t.isa @$typespace.integer, x ) and ( x %% 2 isnt 0 )
    # short form just assigns either a test method or a type name:
    even:           ( x, t ) -> ( t.isa @$typespace.integer, x ) and ( x %% 2 is 0 )
    float:
      $isa:           ( x, t ) -> Number.isFinite x
      $template:      0
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
      $kind:  '$record'
      q:
        $isa:       'float'
        $template:  0
      u:
        $isa:       'nonempty_text'
        $template:  'u'
    #.......................................................................................................
    quantity_funs:
      q:
        $isa:       ( x, t ) -> t.isa mvp.float,          x
        $template:  0
      u:
        $isa:       ( x, t ) -> t.isa mvp.nonempty_text,  x
        $template:  'u'
    #.......................................................................................................
    street_address:
      $kind:      '$record'
      postcode:   'nonempty_text'
      city:       'nonempty_text'
    #.......................................................................................................
    employee:
      $kind:      '$record'
      address:    'street_address'
      name:
        firstname:  'nonempty_text'
        lastname:   'nonempty_text'
  #.........................................................................................................
  ts1 = new Typespace
    #.......................................................................................................
    quantity_typs:
      q:
        $isa:       mvp.float
        $template:  0
      u:
        $isa:       mvp.nonempty_text
        $template:  'u'
    #.......................................................................................................
    quantity_typs_float_fb:
      q:          mvp.float
      u:
        $isa:       mvp.nonempty_text
        $template:  'u'
    #.......................................................................................................
    quantity_typs_float_fb:
      q:            mvp.float
      u:
        $isa:       mvp.nonempty_text
        $template:  'u'
    #.......................................................................................................
    float_one:
      $isa:         mvp.float
      $template:    1
    #.......................................................................................................
    name:
      firstname:  mvp.nonempty_text
      lastname:   mvp.nonempty_text
    #.......................................................................................................
    person:
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
      $isa:           ( x, t ) -> Number.isInteger x
    int_create_zero:
      $isa:           ( x, t ) -> Number.isInteger x
      $template:0
    int_create_zero_fn:
      $isa:           ( x, t ) -> Number.isInteger x
      $template:      -> 0
    int_create_fn:
      $isa:           ( x, t ) -> Number.isInteger x
      $create:        ( [ numeric, P..., ], t ) ->
        unless P.length is 0
          throw new Error "Ωit___1 create method for #{@$typename} doesn't accept more than one argument"
        return 0 unless numeric?
        return Math.floor numeric if t.isa mvp.float, numeric
        return parseInt numeric if ( t.isa mvp.text, numeric ) and ( /^(0|[1-9][0-9]*)$/.test numeric )
        throw new Error "Ωit___2 unable to create a #{@$typename} from value #{rpr numeric}"
  #.........................................................................................................
  # crt = new Typespace
  #   cNfNtN:   {}
    # cNfNtV:   { $template:{}, }
    # cNfNAPtV: { fields: 89, }
  #.........................................................................................................
  return { mvp, ts1, flatly_1, flatly_2, cr1, }


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
    disallow_forward_refs: ->
      { Intertype
        Type
        Typespace
        types           } = require '../../../apps/intertype'
      #.....................................................................................................
      do =>
        create_typespace = ->
          ts1 = new Typespace
            integer:            ( x, t ) -> Number.isInteger x
            wholenumber:        'integer'
        @eq ( Ωit___3 = -> create_typespace()             instanceof Typespace  ), true
        @eq ( Ωit___4 = -> create_typespace().integer     instanceof Type       ), true
        @eq ( Ωit___5 = -> create_typespace().wholenumber instanceof Type       ), true
      #.....................................................................................................
      do =>
        create_typespace = ->
          ts1 = new Typespace
            wholenumber:        'integer'
            integer:            ( x, t ) -> Number.isInteger x
        @throws ( Ωit___6 = -> create_typespace() ), /declaration for type 'wholenumber' contains forward reference to type 'integer'/
      #.....................................................................................................
      do =>
        create_typespace = ->
          ts1 = new Typespace
            wholenumber:
              $isa:               'integer'
              fields:             {}
            integer:            ( x, t ) -> Number.isInteger x
        @throws ( Ωit___7 = -> create_typespace() ), /declaration for type 'wholenumber' contains forward reference to type 'integer'/
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    isa: ->
      { Intertype
        Type
        Typespace
        types           } = require '../../../apps/intertype'
      { flatly_1
        flatly_2
        ts1
        mvp         } = get_typespaces()
      $isa = sample_declarations
      #.....................................................................................................
      @eq ( Ωit___8 = -> mvp            instanceof Typespace          ), true
      @eq ( Ωit___9 = -> flatly_1       instanceof Typespace          ), true
      @eq ( Ωit__10 = -> flatly_2       instanceof Typespace          ), true
      @eq ( Ωit__11 = -> flatly_1.flat  instanceof Type               ), true
      @eq ( Ωit__12 = -> flatly_2.flat  instanceof Type               ), true
      @eq ( Ωit__13 = -> mvp.quantity_refs   instanceof Type               ), true
      @eq ( Ωit__14 = -> mvp.quantity_funs   instanceof Type               ), true
      @eq ( Ωit__15 = -> ts1.quantity_typs   instanceof Type               ), true
      @eq ( Ωit__16 = -> $isa.function  mvp.quantity_refs.isa              ), true
      @eq ( Ωit__17 = -> $isa.function  mvp.quantity_funs.isa              ), true
      @eq ( Ωit__18 = -> $isa.function  ts1.quantity_typs.isa              ), true
      @eq ( Ωit__19 = -> $isa.object    mvp.quantity_refs.fields           ), true
      @eq ( Ωit__20 = -> $isa.object    mvp.quantity_funs.fields           ), true
      @eq ( Ωit__21 = -> $isa.object    ts1.quantity_typs.fields           ), true
      @eq ( Ωit__22 = -> mvp.quantity_refs.$fields.q instanceof Type        ), true
      @eq ( Ωit__23 = -> mvp.quantity_funs.$fields.q instanceof Type        ), true
      @eq ( Ωit__24 = -> ts1.quantity_typs.$fields.q instanceof Type        ), true
      @eq ( Ωit__25 = -> $isa.function  mvp.quantity_refs.$fields.q.isa     ), true
      @eq ( Ωit__26 = -> $isa.function  mvp.quantity_funs.$fields.q.isa     ), true
      @eq ( Ωit__27 = -> $isa.function  ts1.quantity_typs.$fields.q.isa     ), true
      #.....................................................................................................
      echo()
      @eq ( Ωit__28 = -> types.isa mvp.integer,              5                          ), true
      @eq ( Ωit__29 = -> types.isa mvp.odd,                  5                          ), true
      @eq ( Ωit__30 = -> types.isa mvp.even,                 6                          ), true
      @eq ( Ωit__31 = -> types.isa mvp.strange,              5                          ), true
      @eq ( Ωit__32 = -> types.isa mvp.weird,                5                          ), true
      @eq ( Ωit__33 = -> types.isa mvp.abnormal,             5                          ), true
      @eq ( Ωit__34 = -> types.isa flatly_1.flat,            8                          ), true
      @eq ( Ωit__35 = -> types.isa flatly_1.evenly,          8                          ), true
      @eq ( Ωit__36 = -> types.isa flatly_1.plain,           8                          ), true
      @eq ( Ωit__37 = -> types.isa flatly_2.flat,            8                          ), true
      @eq ( Ωit__38 = -> types.isa flatly_2.evenly,          8                          ), true
      @eq ( Ωit__39 = -> types.isa flatly_2.plain,           8                          ), true
      @eq ( Ωit__40 = -> types.isa mvp.nonempty_text,        'abc'                      ), true
      @eq ( Ωit__41 = -> types.isa mvp.quantity_refs.fields.q,    123.456                    ), true
      @eq ( Ωit__42 = -> types.isa mvp.quantity_funs.fields.q,    123.456                    ), true
      @eq ( Ωit__43 = -> types.isa ts1.quantity_typs.fields.q,    123.456                    ), true
      @eq ( Ωit__44 = -> types.isa mvp.quantity_refs.fields.u,    'm'                        ), true
      @eq ( Ωit__45 = -> types.isa mvp.quantity_funs.fields.u,    'm'                        ), true
      @eq ( Ωit__46 = -> types.isa ts1.quantity_typs.fields.u,    'm'                        ), true
      @eq ( Ωit__47 = -> types.isa mvp.quantity_refs,             { q: 123.456, u: 'm', }    ), true
      @eq ( Ωit__48 = -> types.isa mvp.quantity_funs,             { q: 123.456, u: 'm', }    ), true
      @eq ( Ωit__49 = -> types.isa ts1.quantity_typs,             { q: 123.456, u: 'm', }    ), true
      #.....................................................................................................
      echo()
      @eq ( Ωit__50 = -> types.isa mvp.integer,              5.3                        ), false
      @eq ( Ωit__51 = -> types.isa mvp.odd,                  6                          ), false
      @eq ( Ωit__52 = -> types.isa mvp.odd,                  5.3                        ), false
      @eq ( Ωit__53 = -> types.isa mvp.even,                 5                          ), false
      @eq ( Ωit__54 = -> types.isa mvp.strange,              6                          ), false
      @eq ( Ωit__55 = -> types.isa mvp.weird,                6                          ), false
      @eq ( Ωit__56 = -> types.isa mvp.abnormal,             6                          ), false
      @eq ( Ωit__57 = -> types.isa flatly_1.evenly,          5                          ), false
      @eq ( Ωit__58 = -> types.isa flatly_1.flat,            5                          ), false
      @eq ( Ωit__59 = -> types.isa flatly_1.plain,           5                          ), false
      @eq ( Ωit__60 = -> types.isa flatly_2.flat,            5                          ), false
      @eq ( Ωit__61 = -> types.isa flatly_2.evenly,          5                          ), false
      @eq ( Ωit__62 = -> types.isa flatly_2.plain,           5                          ), false
      @eq ( Ωit__63 = -> types.isa mvp.nonempty_text,        ''                         ), false
      @eq ( Ωit__64 = -> types.isa mvp.quantity_refs.$fields.q,   '123.456'                  ), false
      @eq ( Ωit__65 = -> types.isa mvp.quantity_funs.$fields.q,   '123.456'                  ), false
      @eq ( Ωit__66 = -> types.isa ts1.quantity_typs.$fields.q,   '123.456'                  ), false
      @eq ( Ωit__67 = -> types.isa mvp.quantity_refs.$fields.u,   ''                         ), false
      @eq ( Ωit__68 = -> types.isa mvp.quantity_funs.$fields.u,   ''                         ), false
      @eq ( Ωit__69 = -> types.isa ts1.quantity_typs.$fields.u,   ''                         ), false
      @eq ( Ωit__70 = -> types.isa mvp.quantity_refs,             { q: 123.456, u: '', }     ), false
      @eq ( Ωit__71 = -> types.isa mvp.quantity_funs,             { q: 123.456, u: '', }     ), false
      @eq ( Ωit__72 = -> types.isa ts1.quantity_typs,             { q: 123.456, u: '', }     ), false
      @eq ( Ωit__73 = -> types.isa mvp.quantity_refs,             { q: null, u: 'm', }       ), false
      @eq ( Ωit__74 = -> types.isa mvp.quantity_funs,             { q: null, u: 'm', }       ), false
      @eq ( Ωit__75 = -> types.isa ts1.quantity_typs,             { q: null, u: 'm', }       ), false
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
        ts1
        mvp         } = get_typespaces()
      $isa = sample_declarations
      #.....................................................................................................
      @eq     ( Ωit__76 = -> types.validate mvp.integer,  -5                      ), -5
      @eq     ( Ωit__77 = -> types.validate mvp.integer,  5                       ), 5
      @throws ( Ωit__78 = -> types.validate mvp.integer,  5.3                     ), /expected a integer/
      @throws ( Ωit__79 = -> types.validate mvp.quantity_refs,  5                      ), /expected a quantity/
      @throws ( Ωit__80 = -> types.validate mvp.quantity_funs,  5                      ), /expected a quantity/
      @throws ( Ωit__81 = -> types.validate ts1.quantity_typs,  5                      ), /expected a quantity/
      @eq     ( Ωit__82 = -> types.validate mvp.quantity_refs, { q: 123.4, u: 'km', }  ), { q: 123.4, u: 'km', }
      @eq     ( Ωit__83 = -> types.validate mvp.quantity_funs, { q: 123.4, u: 'km', }  ), { q: 123.4, u: 'km', }
      @eq     ( Ωit__84 = -> types.validate ts1.quantity_typs, { q: 123.4, u: 'km', }  ), { q: 123.4, u: 'km', }
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
        ts1
        mvp         } = get_typespaces()
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
        [[ ts1.quantity_typs, { q: 123.456, u: '' } ], [
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
        [[ ts1.quantity_typs, { q: 123.456, u: null } ], [
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
        [[ ts1.quantity_typs, { q: 'nan', u: 'm' } ], [
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
        [[ ts1.person, { address: { postcode: 'SE36', city: 'London' }, name: { firstname: 'Bob', lastname: 'Miller' } } ], [
          [ 'person',                                                                        { address: { postcode: 'SE36', city: 'London' }, name: { firstname: 'Bob', lastname: 'Miller' } }, true,   ]
          [ 'person/person_$address',                                                        { postcode: 'SE36', city: 'London' },         true,   ]
          [ 'person/person_$address/address',                                                { postcode: 'SE36', city: 'London' },         true,   ]
          [ 'person/person_$address/address/address_$postcode',                              'SE36',                                       true,   ]
          [ 'person/person_$address/address/address_$postcode/nonempty_text',                'SE36',                                       true,   ]
          [ 'person/person_$address/address/address_$postcode/nonempty_text/text',           'SE36',                                       true,   ]
          [ 'person/person_$address/address/address_$city',                                  'London',                                     true,   ]
          [ 'person/person_$address/address/address_$city/nonempty_text',                    'London',                                     true,   ]
          [ 'person/person_$address/address/address_$city/nonempty_text/text',               'London',                                     true,   ]
          [ 'person/person_$name',                                                           { firstname: 'Bob', lastname: 'Miller' },     true,   ]
          [ 'person/person_$name/name',                                                      { firstname: 'Bob', lastname: 'Miller' },     true,   ]
          [ 'person/person_$name/name/name_$firstname',                                      'Bob',                                        true,   ]
          [ 'person/person_$name/name/name_$firstname/nonempty_text',                        'Bob',                                        true,   ]
          [ 'person/person_$name/name/name_$firstname/nonempty_text/text',                   'Bob',                                        true,   ]
          [ 'person/person_$name/name/name_$lastname',                                       'Miller',                                     true,   ]
          [ 'person/person_$name/name/name_$lastname/nonempty_text',                         'Miller',                                     true,   ]
          [ 'person/person_$name/name/name_$lastname/nonempty_text/text',                    'Miller',                                     true,   ]
          ]]
        ]
      #.....................................................................................................
      fm = ( x, width = 0 ) -> ( ( rpr x ) + ',' ).padEnd width
      for [ [ probe_type, probe_value, ], matcher, ] in probes_and_matchers
        echo '[[', ( 'mvp.' + probe_type.$typename + ',' ), ( probe_value ), '], ['
        records = types.evaluate probe_type, probe_value
        for record, idx in records
          @eq ( Ωit__85 = -> [ record.stack, record.value, record.verdict, ] ), matcher[ idx ]
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
        ts1
        mvp         } = get_typespaces()
      #.....................................................................................................
      urge 'Ωit__86', type for type of mvp
      debug 'Ωit__87', type for type of ts1
      debug 'Ωit__88', ts1.quantity_typs
      # debug 'Ωit__89', types.create std.integer, 7
      # debug 'Ωit__90', types.create std.integer, 7.8
      # debug 'Ωit__91', types.create std.integer, '7'
      # debug 'Ωit__92', types.create std.integer, '7.8'
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
      # { mvp         } = get_typespaces()
      $isa = sample_declarations
      #.....................................................................................................
      @eq ( Ωit__93 = -> $isa.list Intertype.primitive_types        ), true
      @eq ( Ωit__94 = -> Object.isFrozen Intertype.primitive_types  ), true
      #.....................................................................................................
      @eq ( Ωit__95 = -> Intertype.type_of null               ), 'null'
      @eq ( Ωit__96 = -> Intertype.type_of undefined          ), 'undefined'
      @eq ( Ωit__97 = -> Intertype.type_of +Infinity          ), 'infinity'
      @eq ( Ωit__98 = -> Intertype.type_of -Infinity          ), 'infinity'
      @eq ( Ωit__99 = -> Intertype.type_of true               ), 'boolean'
      @eq ( Ωit_100 = -> Intertype.type_of false              ), 'boolean'
      @eq ( Ωit_101 = -> Intertype.type_of NaN                ), 'nan'
      @eq ( Ωit_102 = -> Intertype.type_of 6e78               ), 'float'
      @eq ( Ωit_103 = -> Intertype.type_of 'wat'              ), 'text'
      @eq ( Ωit_104 = -> Intertype.type_of []                 ), 'list'
      @eq ( Ωit_105 = -> Intertype.type_of ( -> null )        ), 'function'
      @eq ( Ωit_106 = -> Intertype.type_of ( -> await null )  ), 'asyncfunction'
      @eq ( Ωit_107 = -> Intertype.type_of ( -> yield null )  ), 'generatorfunction'
      @eq ( Ωit_108 = -> Intertype.type_of {}                 ), 'object'
      @eq ( Ωit_109 = -> Intertype.type_of new Set()          ), 'set'
      @eq ( Ωit_110 = -> Intertype.type_of new Map()          ), 'map'
      @eq ( Ωit_111 = -> Intertype.type_of new WeakMap()      ), 'weakmap'
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    types_of: ->
      { Intertype
        Type
        Typespace
        types           } = require '../../../apps/intertype'
      { mvp         } = get_typespaces()
      $isa = sample_declarations
      class Myclass
      #.....................................................................................................
      @eq ( Ωit_112 = -> types.types_of mvp, null               ), [ 'nothing', 'primitive', 'null', ]
      @eq ( Ωit_113 = -> types.types_of mvp, undefined          ), [ 'nothing', 'primitive', 'undefined', ]
      @eq ( Ωit_114 = -> types.types_of mvp, +Infinity          ), [ 'something', 'primitive', 'infinity', ]
      @eq ( Ωit_115 = -> types.types_of mvp, -Infinity          ), [ 'something', 'primitive', 'infinity', ]
      @eq ( Ωit_116 = -> types.types_of mvp, true               ), [ 'something', 'primitive', 'boolean', ]
      @eq ( Ωit_117 = -> types.types_of mvp, false              ), [ 'something', 'primitive', 'boolean', ]
      @eq ( Ωit_118 = -> types.types_of mvp, NaN                ), [ 'something', 'primitive', 'nan', ]
      @eq ( Ωit_119 = -> types.types_of mvp, 6e78               ), [ 'something', 'primitive', 'integer', 'even', 'float', 'quantity_refs_$q', 'quantity_funs_$q' ]
      @eq ( Ωit_120 = -> types.types_of mvp, 3                  ), [ 'something', 'primitive', 'integer', 'odd', 'float', 'strange', 'weird', 'abnormal', 'quantity_refs_$q', 'quantity_funs_$q' ]
      @eq ( Ωit_121 = -> types.types_of mvp, 'wat'              ), [ 'something', 'primitive', 'text', 'nonempty_text', 'quantity_refs_$u', 'quantity_funs_$u', 'address_$postcode', 'address_$city', 'employee_$name_$firstname', 'employee_$name_$lastname' ]
      @eq ( Ωit_122 = -> types.types_of mvp, ''                 ), [ 'something', 'primitive', 'text', 'empty_text', ]
      @eq ( Ωit_123 = -> types.types_of mvp, []                 ), [ 'something', 'object', 'list', ]
      @eq ( Ωit_124 = -> types.types_of mvp, ( -> null )        ), [ 'something', 'object', 'function', ]
      @eq ( Ωit_125 = -> types.types_of mvp, ( -> await null )  ), [ 'something', 'object', 'asyncfunction', ]
      @eq ( Ωit_126 = -> types.types_of mvp, ( -> yield null )  ), [ 'something', 'object', 'generatorfunction', ]
      @eq ( Ωit_127 = -> types.types_of mvp, {}                 ), [ 'something', 'object', 'pod', ]
      @eq ( Ωit_128 = -> types.types_of mvp, Object.create null ), [ 'something', 'object', 'pod', ]
      @eq ( Ωit_129 = -> types.types_of mvp, new Myclass()      ), [ 'something', 'object', ]
      @eq ( Ωit_130 = -> types.types_of mvp, new Set()          ), [ 'something', 'object', 'set', ]
      @eq ( Ωit_131 = -> types.types_of mvp, new Map()          ), [ 'something', 'object', 'map', ]
      @eq ( Ωit_132 = -> types.types_of mvp, new WeakMap()      ), [ 'something', 'object', 'weakmap', ]
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    $type_of_and_$isa: ->
      { std
        $isa
        $type_of        } = require '../../../apps/intertype'
      class A extends Object
      #.....................................................................................................
      @eq ( Ωit_133 = -> $type_of 'abc'                         ), 'text'
      @eq ( Ωit_134 = -> $type_of ( -> )                        ), 'function'
      @eq ( Ωit_135 = -> $type_of {}                            ), 'object'
      @eq ( Ωit_136 = -> $isa.object {}                         ), true
      @eq ( Ωit_137 = -> $isa.pod {}                            ), true
      @eq ( Ωit_138 = -> $isa.pod ( Object.create null )        ), true
      @eq ( Ωit_139 = -> $isa.function ( -> )                   ), true
      @eq ( Ωit_140 = -> $isa.text 'abc'                        ), true
      @eq ( Ωit_141 = -> $isa.nonempty_text 'abc'               ), true
      @eq ( Ωit_142 = -> $type_of std.integer                   ), 'object'
      @eq ( Ωit_143 = -> $isa.type std.integer                  ), true
      @eq ( Ωit_144 = -> $isa.object new A()                    ), true
      #.....................................................................................................
      @eq ( Ωit_145 = -> $isa.nonempty_text ''                  ), false
      @eq ( Ωit_146 = -> $isa.pod new A()                       ), false
      @eq ( Ωit_147 = -> $isa.function ( -> yield 5 )           ), false
      @eq ( Ωit_148 = -> $isa.function ( -> yield 5 )()         ), false
      @eq ( Ωit_149 = -> $isa.function ( -> await 5 )           ), false
      #.....................................................................................................
      return null

  #---------------------------------------------------------------------------------------------------------
  create:

    #-------------------------------------------------------------------------------------------------------
    basics: ->
      { Intertype
        Type
        Typespace
        types           } = require '../../../apps/intertype'
      { mvp
        ts1
        cr1
        crt             } = get_typespaces()
      #.....................................................................................................
      # debug 'Ωit_150', ts1
      # debug 'Ωit_151', ( k for k of ts1 )
      # echo()
      # debug 'Ωit_152', ts1.quantity_typs_$q.fields
      # debug 'Ωit_153', ts1.quantity_typs_$u.fields
      # debug 'Ωit_154', ts1.quantity_typs.fields
      # debug 'Ωit_155', ts1.name.fields
      # debug 'Ωit_156', ts1.name_$firstname.fields
      # debug 'Ωit_157', ts1.name_$lastname.fields
      # echo()
      # debug 'Ωit_158', ts1.quantity_typs_$q.template
      # debug 'Ωit_159', ts1.quantity_typs_$u.template
      # debug 'Ωit_160', ts1.quantity_typs.template
      # debug 'Ωit_161', ts1.name.template
      # debug 'Ωit_162', ts1.name_$firstname.template
      # debug 'Ωit_163', ts1.name_$lastname.template
      # process.exit 111
      #.....................................................................................................
      @eq     ( Ωit_164 = -> types.create cr1.int_create_zero                         ), 0
      @eq     ( Ωit_165 = -> types.create cr1.int_create_zero_fn                      ), 0
      @eq     ( Ωit_166 = -> types.create cr1.int_create_fn                           ), 0
      @eq     ( Ωit_167 = -> types.create cr1.int_create_fn, 4                        ), 4
      @eq     ( Ωit_168 = -> types.create cr1.int_create_fn, 4.9                      ), 4
      @eq     ( Ωit_169 = -> types.create cr1.int_create_fn, '4'                      ), 4
      @eq     ( Ωit_170 = -> types.create ts1.quantity_typs                           ), { q: 0, u: 'u' }
      # @eq     ( Ωit_171 = -> types.create ts1.quantity_typs, { u: 's', }              ), { q: 0, u: 's' }
      # @eq     ( Ωit_172 = -> types.create ts1.quantity_typs, { q: 3214, u: 'mm', }    ), { q: 3214, u: 'mm' }
      # @eq     ( Ωit_173 = -> types.create ts1.quantity_typs, { q: 32.4, u: 'mm', }    ), { q: 32, u: 'mm' }
      # @eq     ( Ωit_174 = -> types.create ts1.quantity_typs, { q: '3214', u: 'mm', }  ), { q: 3214, u: 'mm' }
      @eq     ( Ωit_175 = -> types.create mvp.float                                   ), 0
      @eq     ( Ωit_176 = -> types.create ts1.float_one                               ), 1
      @eq     ( Ωit_177 = -> types.create ts1.quantity_typs_float_fb                  ), { q: 0, u: 'u' }
      # @eq     ( Ωit_178 = -> types.create ts1.quantity_typs_float_fb, { u: 's', }              ), { q: 0, u: 's' }
      # @eq     ( Ωit_179 = -> types.create ts1.quantity_typs_float_fb, { q: 3214, u: 'mm', }    ), { q: 3214, u: 'mm' }
      # @eq     ( Ωit_180 = -> types.create ts1.quantity_typs_float_fb, { q: 32.4, u: 'mm', }    ), { q: 32, u: 'mm' }
      # @eq     ( Ωit_181 = -> types.create ts1.quantity_typs_float_fb, { q: '3214', u: 'mm', }  ), { q: 3214, u: 'mm' }
      #.....................................................................................................
      @throws ( Ωit_182 = -> types.create cr1.unknown                       ), /expected an instance of Type, got a undefined/
      @throws ( Ωit_183 = -> types.create cr1.int_no_create                 ), /condition cI/
      @throws ( Ωit_184 = -> types.create cr1.int_create_zero, 4            ), /condition cH/
      @throws ( Ωit_185 = -> types.create cr1.int_create_fn, '4.9'          ), /unable to create/
      @throws ( Ωit_186 = -> types.create cr1.int_create_fn, 4, 6           ), /doesn't accept more than one argument/
      #.....................................................................................................
      return null

  #---------------------------------------------------------------------------------------------------------
  $kind:

    #-------------------------------------------------------------------------------------------------------
    vocabulary: ->
      { Intertype
        Type
        Typespace
        types           } = require '../../../apps/intertype'
      { mvp
        ts1
        cr1
        crt             } = get_typespaces()
      #.....................................................................................................
      do =>
        declare_unknown_$kind = ->
          ts = new Typespace
            foo:
              $kind: 'whatever'
        @throws ( Ωit_187 = -> declare_unknown_$kind() ), /doesn't accept more than one argument/
      #.....................................................................................................
      return null

  #---------------------------------------------------------------------------------------------------------
  type_instantiation:

    #-------------------------------------------------------------------------------------------------------
    $kind_and_members: ->
      { Intertype
        Type
        Typespace
        types           } = require '../../../apps/intertype'
      #.....................................................................................................
      keys = [
        '$typespace',
        '$members',
        '$fields',
        '$variants',
        '$member_names',
        '$field_names',
        '$variant_names',
        '$has_members',
        '$has_fields',
        '$has_variants',
        '$kind',
        '$isa',
        ]
      #.....................................................................................................
      show_ts = ( ts, typename ) ->
        debug 'Ωit_188', ( "t:".padEnd 20 ), ts[ typename ]
        for key in keys
          debug 'Ωit_189', ( GUY.fmt.format '>20s', "t.#{key}:" ), ts[ typename ][ key ]
        return null
      #.....................................................................................................
      do =>
        declaration =
          t: ( x ) -> true
        ts          = new Typespace declaration
        @eq ( Ωit_190 = -> ts.t.$kind           ), '$unspecified'
        @eq ( Ωit_191 = -> ts.t.$members        ), {}
        @eq ( Ωit_192 = -> ts.t.$fields         ), {}
        @eq ( Ωit_193 = -> ts.t.$variants       ), {}
        @eq ( Ωit_194 = -> ts.t.$member_names   ), []
        @eq ( Ωit_195 = -> ts.t.$field_names    ), []
        @eq ( Ωit_196 = -> ts.t.$variant_names  ), []
        # show_ts ts, 't'
      #.....................................................................................................
      do =>
        declaration =
          t: [ 1, 3, 5, ]
        ts          = new Typespace declaration
        @eq ( Ωit_197 = -> ts.t.$kind           ), '$enumeration'
        @eq ( Ωit_198 = -> ts.t.$fields         ), {}
        @eq ( Ωit_199 = -> ts.t.$variants       ), {}
        @eq ( Ωit_200 = -> ts.t.$member_names   ), []
        @eq ( Ωit_201 = -> ts.t.$field_names    ), []
        @eq ( Ωit_202 = -> ts.t.$variant_names  ), []
        # show_ts ts, 't'
      #.....................................................................................................
      do =>
        declaration =
          t:
            $isa:   [ 1, 3, 5, ]
            $kind:  '$record'
        @throws ( Ωit_203 = -> new Typespace declaration ), /expected \$kind to be '\$enumeration', got '\$record'/
      #.....................................................................................................
      do =>
        declaration =
          t:
            field1:   ( x ) ->
            field2:   ( x ) ->
        ts          = new Typespace declaration
        @eq ( Ωit_204 = -> ts.t.$kind           ), '$record'
        @eq ( Ωit_205 = -> ts.t.$has_members    ), true
        @eq ( Ωit_206 = -> ts.t.$has_fields     ), true
        @eq ( Ωit_207 = -> ts.t.$has_variants   ), false
        @eq ( Ωit_208 = -> Object.keys ts.t.$fields ), [ 'field1', 'field2', ]
        @eq ( Ωit_209 = -> ts.t.$variants       ), {}
        @eq ( Ωit_210 = -> ts.t.$member_names   ), [ 'field1', 'field2', ]
        @eq ( Ωit_211 = -> ts.t.$field_names    ), [ 'field1', 'field2', ]
        @eq ( Ωit_212 = -> ts.t.$variant_names  ), []
        # show_ts ts, 't'
      #.....................................................................................................
      do =>
        declaration =
          t:
            field1:   ( x ) ->
            field2:   ( x ) ->
            $kind:    '$record'
        ts          = new Typespace declaration
        @eq ( Ωit_213 = -> ts.t.$kind               ), '$record'
        @eq ( Ωit_214 = -> ts.t.$has_members        ), true
        @eq ( Ωit_215 = -> ts.t.$has_fields         ), true
        @eq ( Ωit_216 = -> ts.t.$has_variants       ), false
        @eq ( Ωit_217 = -> Object.keys ts.t.$fields ), [ 'field1', 'field2', ]
        @eq ( Ωit_218 = -> ts.t.$variants           ), {}
        @eq ( Ωit_219 = -> ts.t.$member_names       ), [ 'field1', 'field2', ]
        @eq ( Ωit_220 = -> ts.t.$field_names        ), [ 'field1', 'field2', ]
        @eq ( Ωit_221 = -> ts.t.$variant_names      ), []
        # show_ts ts, 't'
      #.....................................................................................................
      do =>
        declaration =
          t:
            $kind:    '$variant'
            t1:       ( x ) ->
            t2:       ( x ) ->
        ts          = new Typespace declaration
        @eq ( Ωit_222 = -> ts.t.$kind                 ), '$variant'
        @eq ( Ωit_223 = -> ts.t.$has_members          ), true
        @eq ( Ωit_224 = -> ts.t.$has_fields           ), false
        @eq ( Ωit_225 = -> ts.t.$has_variants         ), true
        @eq ( Ωit_226 = -> Object.keys ts.t.$variants ), [ 't1', 't2', ]
        @eq ( Ωit_227 = -> ts.t.$fields               ), {}
        @eq ( Ωit_228 = -> ts.t.$member_names         ), [ 't1', 't2', ]
        @eq ( Ωit_229 = -> ts.t.$variant_names        ), [ 't1', 't2', ]
        @eq ( Ωit_230 = -> ts.t.$field_names          ), []
        show_ts ts, 't'
      #.....................................................................................................
      return null

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
  # ( new Test { throw_on_error: true, } ).test @intertype_tasks
  ( new Test { throw_on_error: true, } ).test { mvp_isa: @intertype_tasks.MVP.isa, }
  # ( new Test { throw_on_error: true, } ).test { type_instantiation: @intertype_tasks.type_instantiation, }
  # ( new Test { throw_on_error: true, } ).test { disallow_forward_refs: @intertype_tasks.MVP.disallow_forward_refs, }
  # ( new Test { throw_on_error: false, } ).test { create: @intertype_tasks.create, }
  # ( new Test { throw_on_error: false, } ).test { clone_fields_and_template: @intertype_tasks.create.clone_fields_and_template, }
  # ( new Test { throw_on_error: false, } ).test { create: @intertype_tasks.create, }
  # ( new Test { throw_on_error: false, } ).test { experiments: @intertype_tasks.experiments, }

