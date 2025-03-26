

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


#-----------------------------------------------------------------------------------------------------------
demo_1 = ->
  { types
    flatly_1
    flatly_2
    std             } = require '../../../apps/intertype'
  #.........................................................................................................
  info 'Ω___1', std
  info 'Ω___2', flatly_1
  info 'Ω___3', flatly_2
  info 'Ω___4', flatly_1.flat
  info 'Ω___5', flatly_2.flat
  info 'Ω___6', std.text.nonempty
  info 'Ω___7', 'std.quantity:              ', rpr std.quantity
  info 'Ω___8', 'std.quantity.isa:          ', rpr std.quantity.isa
  info 'Ω___9', 'std.quantity.fields:       ', rpr std.quantity.fields
  info 'Ω__10', 'std.quantity.fields.q:     ', rpr std.quantity.fields.q
  info 'Ω__11', 'std.quantity.fields.q.isa: ', rpr std.quantity.fields.q.isa
  #.........................................................................................................
  echo()
  help 'Ω__12', GUY.trm.truth     types.isa       std.integer,              5
  help 'Ω__13', GUY.trm.truth     types.isa       std.odd,                  5
  help 'Ω__14', GUY.trm.truth     types.isa       std.even,                 6
  help 'Ω__15', GUY.trm.truth     types.isa       std.strange,              5
  help 'Ω__16', GUY.trm.truth     types.isa       std.weird,                5
  help 'Ω__17', GUY.trm.truth     types.isa       std.abnormal,             5
  help 'Ω__18', GUY.trm.truth     types.isa       flatly_1.flat,            8
  help 'Ω__19', GUY.trm.truth     types.isa       flatly_1.evenly,          8
  help 'Ω__20', GUY.trm.truth     types.isa       flatly_1.plain,           8
  help 'Ω__21', GUY.trm.truth     types.isa       flatly_2.flat,            8
  help 'Ω__22', GUY.trm.truth     types.isa       flatly_2.evenly,          8
  help 'Ω__23', GUY.trm.truth     types.isa       flatly_2.plain,           8
  help 'Ω__24', GUY.trm.truth     types.isa       std.nonempty_text,        'abc'
  help 'Ω__25', GUY.trm.truth     types.isa       std.quantity.fields.q,    123.456
  help 'Ω__26', GUY.trm.truth     types.isa       std.quantity.fields.u,    'm'
  help 'Ω__27', GUY.trm.truth     types.isa       std.quantity,             { q: 123.456, u: 'm', }
  #.........................................................................................................
  echo()
  help 'Ω__28', GUY.trm.truth     types.isa       std.integer,              5.3
  help 'Ω__29', GUY.trm.truth     types.isa       std.odd,                  6
  help 'Ω__30', GUY.trm.truth     types.isa       std.odd,                  5.3
  help 'Ω__31', GUY.trm.truth     types.isa       std.even,                 5
  help 'Ω__32', GUY.trm.truth     types.isa       std.strange,              6
  help 'Ω__33', GUY.trm.truth     types.isa       std.weird,                6
  help 'Ω__34', GUY.trm.truth     types.isa       std.abnormal,             6
  help 'Ω__35', GUY.trm.truth     types.isa       flatly_1.evenly,          5
  help 'Ω__36', GUY.trm.truth     types.isa       flatly_1.flat,            5
  help 'Ω__37', GUY.trm.truth     types.isa       flatly_1.plain,           5
  help 'Ω__38', GUY.trm.truth     types.isa       flatly_2.flat,            5
  help 'Ω__39', GUY.trm.truth     types.isa       flatly_2.evenly,          5
  help 'Ω__40', GUY.trm.truth     types.isa       flatly_2.plain,           5
  help 'Ω__41', GUY.trm.truth     types.isa       std.nonempty_text,        ''
  help 'Ω__42', GUY.trm.truth     types.isa       std.quantity.fields.q,    '123.456'
  help 'Ω__43', GUY.trm.truth     types.isa       std.quantity.fields.u,    ''
  help 'Ω__44', GUY.trm.truth     types.isa       std.quantity,             { q: 123.456, u: '', }
  help 'Ω__45', GUY.trm.truth     types.isa       std.quantity,             { q: null, u: 'm', }
  #.........................................................................................................
  echo()
  probes_and_matchers = [
    [ [ std.integer,      5                         ], null, ]
    [ [ std.integer,      5.3                       ], null, ]
    [ [ std.even,         5                         ], null, ]
    [ [ flatly_1.evenly,  5                         ], null, ]
    [ [ flatly_1.evenly,  6                         ], null, ]
    [ [ flatly_2.evenly,  5                         ], null, ]
    [ [ flatly_2.evenly,  6                         ], null, ]
    [ [ std.quantity,     { q: 123.456, u: '', }    ], null, ]
    [ [ std.quantity,     { q: 123.456, u: null, }  ], null, ]
    [ [ std.quantity,     { q: 'nan', u: 'm', }     ], null, ]
    [ [ std.employee,     { address: { postcode: 'SE36', city: 'London', }, name: null, }     ], null, ]
    [ [ std.employee,     { address: { postcode: 'SE36', city: 'London', }, name: {}, }     ], null, ]
    [ [ std.employee,     { address: { postcode: 'SE36', city: 'London', }, name: { firstname: 'Bob', }, }     ], null, ]
    ]
  for [ [ type, value, ], matcher, ] in probes_and_matchers
    info 'Ω__46', type.$typename, rpr value
    records = types.evaluate type, value
    for record in records
      urge '', 'Ω__47', ( record.stack.padEnd 55 ), ( ( rpr record.value ).padEnd 35 ), GUY.trm.truth record.verdict
  #.........................................................................................................
  echo()
  # help 'Ω__48', GUY.trm.truth     types.isa       std.cardinal, 6
  # help 'Ω__49', GUY.trm.truth     types.isa       std.cardinal, 0
  # help 'Ω__50', GUY.trm.truth     types.isa       std.cardinal, -1
  # #.........................................................................................................
  help 'Ω__51', try               types.validate  std.integer,  5       catch e then warn 'Ω__52', e.message
  help 'Ω__53', try               types.validate  std.integer,  5.3     catch e then warn 'Ω__54', e.message
  # info 'Ω__55', std.weird
  # info 'Ω__56', std.weird.isa
  # info 'Ω__57', std.weird.isa.toString()





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

  #-----------------------------------------------------------------------------------------------------------
  MVP_isa: ->
    # INTERTYPE     = require '../../../apps/intertype'
    { Types
      Type
      Typespace
      types
      flatly_1
      flatly_2
      std             } = require '../../../apps/intertype'
    $isa = sample_declarations
    #.......................................................................................................
    @eq ( Ωit__58 = -> std            instanceof Typespace          ), true
    @eq ( Ωit__59 = -> flatly_1       instanceof Typespace          ), true
    @eq ( Ωit__60 = -> flatly_2       instanceof Typespace          ), true
    @eq ( Ωit__61 = -> flatly_1.flat  instanceof Type               ), true
    @eq ( Ωit__62 = -> flatly_2.flat  instanceof Type               ), true
    @eq ( Ωit__63 = -> std.quantity   instanceof Type               ), true
    @eq ( Ωit__64 = -> $isa.function  std.quantity.isa              ), true
    @eq ( Ωit__65 = -> $isa.object    std.quantity.fields           ), true
    @eq ( Ωit__66 = -> std.quantity.fields.q instanceof Type        ), true
    @eq ( Ωit__67 = -> $isa.function  std.quantity.fields.q.isa     ), true
    #.......................................................................................................
    echo()
    @eq ( Ωit__68 = -> types.isa std.integer,              5                          ), true
    @eq ( Ωit__69 = -> types.isa std.odd,                  5                          ), true
    @eq ( Ωit__70 = -> types.isa std.even,                 6                          ), true
    @eq ( Ωit__71 = -> types.isa std.strange,              5                          ), true
    @eq ( Ωit__72 = -> types.isa std.weird,                5                          ), true
    @eq ( Ωit__73 = -> types.isa std.abnormal,             5                          ), true
    @eq ( Ωit__74 = -> types.isa flatly_1.flat,            8                          ), true
    @eq ( Ωit__75 = -> types.isa flatly_1.evenly,          8                          ), true
    @eq ( Ωit__76 = -> types.isa flatly_1.plain,           8                          ), true
    @eq ( Ωit__77 = -> types.isa flatly_2.flat,            8                          ), true
    @eq ( Ωit__78 = -> types.isa flatly_2.evenly,          8                          ), true
    @eq ( Ωit__79 = -> types.isa flatly_2.plain,           8                          ), true
    @eq ( Ωit__80 = -> types.isa std.nonempty_text,        'abc'                      ), true
    @eq ( Ωit__81 = -> types.isa std.quantity.fields.q,    123.456                    ), true
    @eq ( Ωit__82 = -> types.isa std.quantity.fields.u,    'm'                        ), true
    @eq ( Ωit__83 = -> types.isa std.quantity,             { q: 123.456, u: 'm', }    ), true
    #.......................................................................................................
    echo()
    @eq ( Ωit__84 = -> types.isa std.integer,              5.3                        ), false
    @eq ( Ωit__85 = -> types.isa std.odd,                  6                          ), false
    @eq ( Ωit__86 = -> types.isa std.odd,                  5.3                        ), false
    @eq ( Ωit__87 = -> types.isa std.even,                 5                          ), false
    @eq ( Ωit__88 = -> types.isa std.strange,              6                          ), false
    @eq ( Ωit__89 = -> types.isa std.weird,                6                          ), false
    @eq ( Ωit__90 = -> types.isa std.abnormal,             6                          ), false
    @eq ( Ωit__91 = -> types.isa flatly_1.evenly,          5                          ), false
    @eq ( Ωit__92 = -> types.isa flatly_1.flat,            5                          ), false
    @eq ( Ωit__93 = -> types.isa flatly_1.plain,           5                          ), false
    @eq ( Ωit__94 = -> types.isa flatly_2.flat,            5                          ), false
    @eq ( Ωit__95 = -> types.isa flatly_2.evenly,          5                          ), false
    @eq ( Ωit__96 = -> types.isa flatly_2.plain,           5                          ), false
    @eq ( Ωit__97 = -> types.isa std.nonempty_text,        ''                         ), false
    @eq ( Ωit__98 = -> types.isa std.quantity.fields.q,    '123.456'                  ), false
    @eq ( Ωit__99 = -> types.isa std.quantity.fields.u,    ''                         ), false
    @eq ( Ωit_100 = -> types.isa std.quantity,             { q: 123.456, u: '', }     ), false
    @eq ( Ωit_101 = -> types.isa std.quantity,             { q: null, u: 'm', }       ), false
    #.......................................................................................................
    return null


  #-----------------------------------------------------------------------------------------------------------
  MVP_validate: ->
    # INTERTYPE     = require '../../../apps/intertype'
    { Types
      Type
      Typespace
      types
      flatly_1
      flatly_2
      std             } = require '../../../apps/intertype'
    $isa = sample_declarations
    #.......................................................................................................
    @eq     ( Ωit_102 = -> types.validate  std.integer,  -5   ), -5
    @eq     ( Ωit_103 = -> types.validate  std.integer,  5    ), 5
    @throws ( Ωit_104 = -> types.validate  std.integer,  5.3  ), /expected a integer/
    #.......................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  MVP_evaluate: ->
    # INTERTYPE     = require '../../../apps/intertype'
    { Types
      Type
      Typespace
      types
      flatly_1
      flatly_2
      std             } = require '../../../apps/intertype'
    $isa = sample_declarations
    #.......................................................................................................
    echo()
    probes_and_matchers = [
      [[ std.integer, 5, ], [
        [ 'integer',                                              5,                                            true,   ]
        ]]
      [[ std.integer, 5.3, ], [
        [ 'integer',                                              5.3,                                          false,  ]
        ]]
      [[ std.even, 5, ], [
        [ 'even',                                                 5,                                            false,  ]
        [ 'even.integer',                                         5,                                            true,   ]
        ]]
      [[ flatly_1.evenly, 5, ], [
        [ 'evenly',                                               5,                                            false,  ]
        [ 'evenly.flat',                                          5,                                            false,  ]
        [ 'evenly.flat.even',                                     5,                                            false,  ]
        [ 'evenly.flat.even.integer',                             5,                                            true,   ]
        ]]
      [[ flatly_1.evenly, 6, ], [
        [ 'evenly',                                               6,                                            true,   ]
        [ 'evenly.flat',                                          6,                                            true,   ]
        [ 'evenly.flat.even',                                     6,                                            true,   ]
        [ 'evenly.flat.even.integer',                             6,                                            true,   ]
        ]]
      [[ flatly_2.evenly, 5, ], [
        [ 'evenly',                                               5,                                            false,  ]
        [ 'evenly.even',                                          5,                                            false,  ]
        [ 'evenly.even.integer',                                  5,                                            true,   ]
        ]]
      [[ flatly_2.evenly, 6, ], [
        [ 'evenly',                                               6,                                            true,   ]
        [ 'evenly.even',                                          6,                                            true,   ]
        [ 'evenly.even.integer',                                  6,                                            true,   ]
        ]]
      [[ std.quantity, { q: 123.456, u: '' }, ], [
        [ 'quantity',                                             { q: 123.456, u: '' },                        false,  ]
        [ 'quantity.q',                                           123.456,                                      true,   ]
        [ 'quantity.q.float',                                     123.456,                                      true,   ]
        [ 'quantity.u',                                           '',                                           false,  ]
        [ 'quantity.u.nonempty_text',                             '',                                           false,  ]
        [ 'quantity.u.nonempty_text.text',                        '',                                           true,   ]
        ]]
      [[ std.quantity, { q: 123.456, u: null }, ], [
        [ 'quantity',                                             { q: 123.456, u: null },                      false,  ]
        [ 'quantity.q',                                           123.456,                                      true,   ]
        [ 'quantity.q.float',                                     123.456,                                      true,   ]
        [ 'quantity.u',                                           null,                                         false,  ]
        [ 'quantity.u.nonempty_text',                             null,                                         false,  ]
        [ 'quantity.u.nonempty_text.text',                        null,                                         false,  ]
        ]]
      [[ std.quantity, { q: 'nan', u: 'm' }, ], [
        [ 'quantity',                                             { q: 'nan', u: 'm' },                         false,  ]
        [ 'quantity.q',                                           'nan',                                        false,  ]
        [ 'quantity.q.float',                                     'nan',                                        false,  ]
        ]]
      [[ std.employee, { address: { postcode: 'SE36', city: 'London' }, name: null }, ], [
        [ 'employee',                                             { address: { postcode: 'SE36', city: 'London' }, name: null }, false,  ]
        [ 'employee.address',                                     { postcode: 'SE36', city: 'London' },         true,   ]
        [ 'employee.address.address',                             { postcode: 'SE36', city: 'London' },         true,   ]
        [ 'employee.address.address.postcode',                    'SE36',                                       true,   ]
        [ 'employee.address.address.postcode.nonempty_text',      'SE36',                                       true,   ]
        [ 'employee.address.address.postcode.nonempty_text.text', 'SE36',                                       true,   ]
        [ 'employee.address.address.city',                        'London',                                     true,   ]
        [ 'employee.address.address.city.nonempty_text',          'London',                                     true,   ]
        [ 'employee.address.address.city.nonempty_text.text',     'London',                                     true,   ]
        [ 'employee.name',                                        null,                                         false,  ]
        ]]
      [[ std.employee, { address: { postcode: 'SE36', city: 'London' }, name: {} }, ], [
        [ 'employee',                                             { address: { postcode: 'SE36', city: 'London' }, name: {} }, false,  ]
        [ 'employee.address',                                     { postcode: 'SE36', city: 'London' },         true,   ]
        [ 'employee.address.address',                             { postcode: 'SE36', city: 'London' },         true,   ]
        [ 'employee.address.address.postcode',                    'SE36',                                       true,   ]
        [ 'employee.address.address.postcode.nonempty_text',      'SE36',                                       true,   ]
        [ 'employee.address.address.postcode.nonempty_text.text', 'SE36',                                       true,   ]
        [ 'employee.address.address.city',                        'London',                                     true,   ]
        [ 'employee.address.address.city.nonempty_text',          'London',                                     true,   ]
        [ 'employee.address.address.city.nonempty_text.text',     'London',                                     true,   ]
        [ 'employee.name',                                        {},                                           false,  ]
        [ 'employee.name.firstname',                              undefined,                                    false,  ]
        [ 'employee.name.firstname.nonempty_text',                undefined,                                    false,  ]
        [ 'employee.name.firstname.nonempty_text.text',           undefined,                                    false,  ]
        ]]
      [[ std.employee, { address: { postcode: 'SE36', city: 'London' }, name: { firstname: 'Bob' } }, ], [
        [ 'employee',                                             { address: { postcode: 'SE36', city: 'London' }, name: { firstname: 'Bob' } }, false,  ]
        [ 'employee.address',                                     { postcode: 'SE36', city: 'London' },         true,   ]
        [ 'employee.address.address',                             { postcode: 'SE36', city: 'London' },         true,   ]
        [ 'employee.address.address.postcode',                    'SE36',                                       true,   ]
        [ 'employee.address.address.postcode.nonempty_text',      'SE36',                                       true,   ]
        [ 'employee.address.address.postcode.nonempty_text.text', 'SE36',                                       true,   ]
        [ 'employee.address.address.city',                        'London',                                     true,   ]
        [ 'employee.address.address.city.nonempty_text',          'London',                                     true,   ]
        [ 'employee.address.address.city.nonempty_text.text',     'London',                                     true,   ]
        [ 'employee.name',                                        { firstname: 'Bob' },                         false,  ]
        [ 'employee.name.firstname',                              'Bob',                                        true,   ]
        [ 'employee.name.firstname.nonempty_text',                'Bob',                                        true,   ]
        [ 'employee.name.firstname.nonempty_text.text',           'Bob',                                        true,   ]
        [ 'employee.name.lastname',                               undefined,                                    false,  ]
        [ 'employee.name.lastname.nonempty_text',                 undefined,                                    false,  ]
        [ 'employee.name.lastname.nonempty_text.text',            undefined,                                    false,  ]
        ]]
      [[ std.employee, { address: { postcode: 'SE36', city: 'London' }, name: { firstname: 'Bob', lastname: 'Miller' } }, ], [
        [ 'employee',                                             { address: { postcode: 'SE36', city: 'London' }, name: { firstname: 'Bob', lastname: 'Miller' } }, true,   ]
        [ 'employee.address',                                     { postcode: 'SE36', city: 'London' },         true,   ]
        [ 'employee.address.address',                             { postcode: 'SE36', city: 'London' },         true,   ]
        [ 'employee.address.address.postcode',                    'SE36',                                       true,   ]
        [ 'employee.address.address.postcode.nonempty_text',      'SE36',                                       true,   ]
        [ 'employee.address.address.postcode.nonempty_text.text', 'SE36',                                       true,   ]
        [ 'employee.address.address.city',                        'London',                                     true,   ]
        [ 'employee.address.address.city.nonempty_text',          'London',                                     true,   ]
        [ 'employee.address.address.city.nonempty_text.text',     'London',                                     true,   ]
        [ 'employee.name',                                        { firstname: 'Bob', lastname: 'Miller' },     true,   ]
        [ 'employee.name.firstname',                              'Bob',                                        true,   ]
        [ 'employee.name.firstname.nonempty_text',                'Bob',                                        true,   ]
        [ 'employee.name.firstname.nonempty_text.text',           'Bob',                                        true,   ]
        [ 'employee.name.lastname',                               'Miller',                                     true,   ]
        [ 'employee.name.lastname.nonempty_text',                 'Miller',                                     true,   ]
        [ 'employee.name.lastname.nonempty_text.text',            'Miller',                                     true,   ]
        ]]
      ]
    #.......................................................................................................
    # fm = ( x, width = 0 ) -> ( ( rpr x ) + ',' ).padEnd width
    for [ [ probe_type, probe_value, ], matcher, ] in probes_and_matchers
      # echo '[', ( fm probe_type ), ( fm rpr probe_value ), '], ['
      records = types.evaluate probe_type, probe_value
      for record, idx in records
        @eq ( Ωit_105 = -> [ record.stack, record.value, record.verdict, ] ), matcher[ idx ]
      #   echo '  [', ( fm record.stack, 55 ), ( fm record.value, 45 ), ( fm record.verdict, 7 ), ']'
      # echo '  ]'
    #.......................................................................................................
    return null

############################################################################################################
#
#===========================================================================================================
@OLD_intertype_tasks =

  #-----------------------------------------------------------------------------------------------------------
  interface: ->
    INTERTYPE     = require '../../../apps/intertype'
    @eq ( Ωit_106 = -> debug '2312312'; TMP_types.isa.object    INTERTYPE.types                               ), true
    @eq ( Ωit_107 = -> TMP_types.isa.undefined INTERTYPE.types.get_isa                       ), true
    @eq ( Ωit_108 = -> TMP_types.isa.undefined INTERTYPE.types.get_isa_optional              ), true
    @eq ( Ωit_109 = -> TMP_types.isa.undefined INTERTYPE.types.get_validate                  ), true
    @eq ( Ωit_110 = -> TMP_types.isa.undefined INTERTYPE.types.get_validate_optional         ), true
    @eq ( Ωit_111 = -> TMP_types.isa.function  INTERTYPE.types._get_isa                      ), true
    @eq ( Ωit_112 = -> TMP_types.isa.function  INTERTYPE.types._get_isa_optional             ), true
    @eq ( Ωit_113 = -> TMP_types.isa.function  INTERTYPE.types._get_validate                 ), true
    @eq ( Ωit_114 = -> TMP_types.isa.function  INTERTYPE.types._get_validate_optional        ), true
    @eq ( Ωit_115 = -> TMP_types.isa.object    INTERTYPE.types                               ), true
    @eq ( Ωit_116 = -> TMP_types.isa.object    INTERTYPE.types.isa                           ), true
    # @eq ( Ωit_117 = -> TMP_types.isa.function  INTERTYPE.types.isa.optional                  ), true
    @eq ( Ωit_118 = -> TMP_types.isa.object    INTERTYPE.types.validate                      ), true
    # @eq ( Ωit_119 = -> TMP_types.isa.function  INTERTYPE.types.validate.optional             ), true
    @eq ( Ωit_120 = -> TMP_types.isa.function  INTERTYPE.types.isa.boolean                   ), true
    @eq ( Ωit_121 = -> TMP_types.isa.function  INTERTYPE.types.isa.optional.boolean          ), true
    @eq ( Ωit_122 = -> TMP_types.isa.function  INTERTYPE.types.validate.boolean              ), true
    @eq ( Ωit_123 = -> TMP_types.isa.function  INTERTYPE.types.validate.optional.boolean     ), true
    @eq ( Ωit_124 = -> TMP_types.isa.object    INTERTYPE.types.create                        ), true
    @eq ( Ωit_125 = -> TMP_types.isa.function  INTERTYPE.types.isa.text                      ), true
    @eq ( Ωit_126 = -> TMP_types.isa.function  INTERTYPE.types.create.text                   ), true
    @eq ( Ωit_127 = -> TMP_types.isa.object    INTERTYPE.types.declarations                  ), true
    @eq ( Ωit_128 = -> TMP_types.isa.object    INTERTYPE.types.declarations.text             ), true
    #.........................................................................................................
    # @eq ( Ωit_129 = -> INTERTYPE.types.isa.name           ), 'isa'
    # @eq ( Ωit_130 = -> INTERTYPE.types.evaluate.name      ), 'evaluate'
    # @eq ( Ωit_131 = -> INTERTYPE.types.validate.name      ), 'validate'
    # @eq ( Ωit_132 = -> INTERTYPE.types.create.name        ), 'create'
    @eq ( Ωit_133 = -> INTERTYPE.types.declare.name       ), 'declare'
    @eq ( Ωit_134 = -> INTERTYPE.types.type_of.name       ), 'type_of'
    #.........................................................................................................
    do =>
      for type of INTERTYPE.testing._isa
        continue if Reflect.has INTERTYPE.declarations, type
        @fail 'Ωit_135', "type known from `INTERTYPE.testing._isa` but missing from `INTERTYPE.default_declarations`: #{rpr type}"
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  basic_functionality_using_types_object: ->
    INTERTYPE     = require '../../../apps/intertype'
    types         = new INTERTYPE.Intertype_minimal sample_declarations
    @eq ( Ωit_136 = -> types.isa.boolean           false               ), true
    @eq ( Ωit_137 = -> types.isa.boolean           true                ), true
    @eq ( Ωit_138 = -> types.isa.boolean           null                ), false
    @eq ( Ωit_139 = -> types.isa.boolean           1                   ), false
    @eq ( Ωit_140 = -> types.isa.optional.boolean  false               ), true
    @eq ( Ωit_141 = -> types.isa.optional.boolean  true                ), true
    @eq ( Ωit_142 = -> types.isa.optional.boolean  null                ), true
    @eq ( Ωit_143 = -> types.isa.optional.boolean  1                   ), false
    #.........................................................................................................
    @eq ( Ωit_144 = -> types.validate.boolean               false      ), false
    @eq ( Ωit_145 = -> types.validate.boolean               true       ), true
    @eq ( Ωit_146 = -> types.validate.optional.boolean      true       ), true
    @eq ( Ωit_147 = -> types.validate.optional.boolean      false      ), false
    @eq ( Ωit_148 = -> types.validate.optional.boolean      undefined  ), undefined
    @eq ( Ωit_149 = -> types.validate.optional.boolean      null       ), null
    @throws ( Ωit_150 = -> types.validate.boolean           1 ), /expected a boolean/
    @throws ( Ωit_151 = -> types.validate.optional.boolean  1 ), /expected an optional boolean/
    #.........................................................................................................
    @eq ( Ωit_152 = -> types.type_of null            ), 'null'
    @eq ( Ωit_153 = -> types.type_of undefined       ), 'undefined'
    @eq ( Ωit_154 = -> types.type_of false           ), 'boolean'
    @eq ( Ωit_155 = -> types.type_of Symbol 'p'      ), 'symbol'
    @eq ( Ωit_156 = -> types.type_of {}              ), 'object'
    @eq ( Ωit_157 = -> types.type_of NaN             ), 'unknown'
    @eq ( Ωit_158 = -> types.type_of +Infinity       ), 'unknown'
    @eq ( Ωit_159 = -> types.type_of -Infinity       ), 'unknown'
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
    @eq ( Ωit_160 = -> isa.boolean           false               ), true
    @eq ( Ωit_161 = -> isa.boolean           true                ), true
    @eq ( Ωit_162 = -> isa.boolean           null                ), false
    @eq ( Ωit_163 = -> isa.boolean           1                   ), false
    @eq ( Ωit_164 = -> isa.unknown           1                   ), false
    @eq ( Ωit_165 = -> isa.unknown           Infinity            ), true
    @eq ( Ωit_166 = -> isa.optional.boolean  false               ), true
    @eq ( Ωit_167 = -> isa.optional.boolean  true                ), true
    @eq ( Ωit_168 = -> isa.optional.boolean  null                ), true
    @eq ( Ωit_169 = -> isa.optional.boolean  1                   ), false
    @eq ( Ωit_170 = -> isa.optional.unknown  1                   ), false
    @eq ( Ωit_171 = -> isa.optional.unknown  Infinity            ), true
    @eq ( Ωit_172 = -> isa.optional.unknown  undefined           ), true
    @eq ( Ωit_173 = -> isa.optional.unknown  undefined           ), true
    #.........................................................................................................
    @eq ( Ωit_174 = -> validate.boolean               false      ), false
    @eq ( Ωit_175 = -> validate.boolean               true       ), true
    @eq ( Ωit_176 = -> validate.optional.boolean      true       ), true
    @eq ( Ωit_177 = -> validate.optional.boolean      false      ), false
    @eq ( Ωit_178 = -> validate.optional.boolean      undefined  ), undefined
    @eq ( Ωit_179 = -> validate.optional.boolean      null       ), null
    @throws ( Ωit_180 = -> validate.boolean           1  ), /expected a boolean/
    @throws ( Ωit_181 = -> validate.optional.boolean  1  ), /expected an optional boolean/
    #.........................................................................................................
    @eq ( Ωit_182 = -> type_of null            ), 'null'
    @eq ( Ωit_183 = -> type_of undefined       ), 'undefined'
    @eq ( Ωit_184 = -> type_of false           ), 'boolean'
    @eq ( Ωit_185 = -> type_of Symbol 'p'      ), 'symbol'
    @eq ( Ωit_186 = -> type_of {}              ), 'object'
    @eq ( Ωit_187 = -> type_of NaN             ), 'unknown'
    @eq ( Ωit_188 = -> type_of +Infinity       ), 'unknown'
    @eq ( Ωit_189 = -> type_of -Infinity       ), 'unknown'
    #.........................................................................................................
    @eq ( Ωit_190 = -> isa.asyncfunction.name               ), 'isa.asyncfunction'
    @eq ( Ωit_191 = -> isa.optional.asyncfunction.name      ), 'isa.optional.asyncfunction'
    @eq ( Ωit_192 = -> validate.asyncfunction.name          ), 'validate.asyncfunction'
    @eq ( Ωit_193 = -> validate.optional.asyncfunction.name ), 'validate.optional.asyncfunction'
    #.........................................................................................................
    @throws ( Ωit_194 = -> isa.float 3, 4 ), /method 'isa.float' expects 1 arguments, got 2/
    @throws ( Ωit_195 = -> isa.float()    ), /method 'isa.float' expects 1 arguments, got 0/
    return null

  #-----------------------------------------------------------------------------------------------------------
  methods_check_arity: ->
    INTERTYPE     = require '../../../apps/intertype'
    { isa
      validate
      type_of   } = new INTERTYPE.Intertype_minimal sample_declarations
    #.........................................................................................................
    @throws ( Ωit_196 = -> isa.float 3, 4               ), /method 'isa.float' expects 1 arguments, got 2/
    @throws ( Ωit_197 = -> isa.float()                  ), /method 'isa.float' expects 1 arguments, got 0/
    @throws ( Ωit_198 = -> isa.optional.float 3, 4      ), /method 'isa.optional.float' expects 1 arguments, got 2/
    @throws ( Ωit_199 = -> isa.optional.float()         ), /method 'isa.optional.float' expects 1 arguments, got 0/
    @throws ( Ωit_200 = -> validate.float 3, 4          ), /method 'validate.float' expects 1 arguments, got 2/
    @throws ( Ωit_201 = -> validate.float()             ), /method 'validate.float' expects 1 arguments, got 0/
    @throws ( Ωit_202 = -> validate.optional.float 3, 4 ), /method 'validate.optional.float' expects 1 arguments, got 2/
    @throws ( Ωit_203 = -> validate.optional.float()    ), /method 'validate.optional.float' expects 1 arguments, got 0/
    @throws ( Ωit_204 = -> type_of 3, 4                 ), /expected 1 arguments, got 2/
    @throws ( Ωit_205 = -> type_of()                    ), /expected 1 arguments, got 0/
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
    @eq ( Ωit_206 = -> isa.boolean                     boolean                 ), true
    @eq ( Ωit_207 = -> isa.function                    $function               ), true
    @eq ( Ωit_208 = -> isa.asyncfunction               asyncfunction           ), true
    @eq ( Ωit_209 = -> isa.generatorfunction           generatorfunction       ), true
    @eq ( Ωit_210 = -> isa.asyncgeneratorfunction      asyncgeneratorfunction  ), true
    @eq ( Ωit_211 = -> isa.asyncgenerator              asyncgenerator          ), true
    @eq ( Ωit_212 = -> isa.generator                   generator               ), true
    @eq ( Ωit_213 = -> isa.symbol                      symbol                  ), true
    #.........................................................................................................
    @eq ( Ωit_214 = -> validate.boolean                boolean                 ), boolean
    @eq ( Ωit_215 = -> validate.function               $function               ), $function
    @eq ( Ωit_216 = -> validate.asyncfunction          asyncfunction           ), asyncfunction
    @eq ( Ωit_217 = -> validate.generatorfunction      generatorfunction       ), generatorfunction
    @eq ( Ωit_218 = -> validate.asyncgeneratorfunction asyncgeneratorfunction  ), asyncgeneratorfunction
    @eq ( Ωit_219 = -> validate.asyncgenerator         asyncgenerator          ), asyncgenerator
    @eq ( Ωit_220 = -> validate.generator              generator               ), generator
    @eq ( Ωit_221 = -> validate.symbol                 symbol                  ), symbol
    #.........................................................................................................
    @eq ( Ωit_222 = -> type_of boolean                                         ), 'boolean'
    @eq ( Ωit_223 = -> type_of $function                                       ), 'function'
    @eq ( Ωit_224 = -> type_of asyncfunction                                   ), 'asyncfunction'
    @eq ( Ωit_225 = -> type_of generatorfunction                               ), 'generatorfunction'
    @eq ( Ωit_226 = -> type_of asyncgeneratorfunction                          ), 'asyncgeneratorfunction'
    @eq ( Ωit_227 = -> type_of asyncgenerator                                  ), 'asyncgenerator'
    @eq ( Ωit_228 = -> type_of generator                                       ), 'generator'
    @eq ( Ωit_229 = -> type_of symbol                                          ), 'symbol'
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  throw_instructive_error_on_missing_type: ->
    INTERTYPE     = require '../../../apps/intertype'
    { isa
      validate
      type_of   } = new INTERTYPE.Intertype()
    #.........................................................................................................
    @throws ( Ωit_230 = -> isa.quux                    ), /unknown type 'quux'/
    @throws ( Ωit_231 = -> isa.quux()                  ), /unknown type 'quux'/
    @throws ( Ωit_232 = -> isa.quux 3                  ), /unknown type 'quux'/
    @throws ( Ωit_233 = -> isa.quux 3, 4               ), /unknown type 'quux'/
    @throws ( Ωit_234 = -> isa.optional.quux           ), /unknown type 'quux'/
    @throws ( Ωit_235 = -> isa.optional.quux()         ), /unknown type 'quux'/
    @throws ( Ωit_236 = -> isa.optional.quux 3         ), /unknown type 'quux'/
    @throws ( Ωit_237 = -> isa.optional.quux 3, 4      ), /unknown type 'quux'/
    @throws ( Ωit_238 = -> validate.quux               ), /unknown type 'quux'/
    @throws ( Ωit_239 = -> validate.quux()             ), /unknown type 'quux'/
    @throws ( Ωit_240 = -> validate.quux 3             ), /unknown type 'quux'/
    @throws ( Ωit_241 = -> validate.quux 3, 4          ), /unknown type 'quux'/
    @throws ( Ωit_242 = -> validate.optional.quux      ), /unknown type 'quux'/
    @throws ( Ωit_243 = -> validate.optional.quux()    ), /unknown type 'quux'/
    @throws ( Ωit_244 = -> validate.optional.quux 3    ), /unknown type 'quux'/
    @throws ( Ωit_245 = -> validate.optional.quux 3, 4 ), /unknown type 'quux'/
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  throw_instructive_error_when_optional_is_declared: ->
    INTERTYPE     = require '../../../apps/intertype'
    @throws ( Ωit_246 = -> new INTERTYPE.Intertype_minimal { optional: ( ( x ) -> true ), } ), /not allowed to re-declare type 'optional'/
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  throw_instructive_error_when_wrong_type_of_isa_test_declared: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    @throws ( Ωit_247 = -> new Intertype { foo: ( -> ), }                      ), /expected function with 1 parameters, got one with 0/
    @throws ( Ωit_248 = -> new Intertype { foo: ( ( a, b ) -> ), }             ), /expected function with 1 parameters, got one with 2/
    @throws ( Ωit_249 = -> new Intertype { foo: true, }                        ), /expected type name, method, or object to indicate test method, got a boolean/
    @throws ( Ωit_250 = -> new Intertype { foo: undefined, }                   ), /expected type name, method, or object to indicate test method, got a undefined/
    @throws ( Ωit_251 = -> new Intertype { foo: null, }                        ), /expected type name, method, or object to indicate test method, got a null/
    @throws ( Ωit_252 = -> new Intertype { foo: {}, }                          ), /expected type name, method, or object to indicate test method, got a undefined/
    @throws ( Ωit_253 = -> new Intertype { foo: { test: null, }, }             ), /expected type name, method, or object to indicate test method, got a null/
    @throws ( Ωit_254 = -> new Intertype { foo: { test: false, }, }            ), /expected type name, method, or object to indicate test method, got a boolean/
    @throws ( Ωit_255 = -> new Intertype { foo: { test: ( ( a, b ) -> ), }, }  ), /expected function with 1 parameters, got one with 2/
    @throws ( Ωit_256 = -> new Intertype { foo: 'quux', }                      ), /unknown type 'quux'/
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
      @eq ( Ωit_257 = -> TMP_types.isa.function types.isa.integer  ), true
      @eq ( Ωit_258 = -> types.isa.integer.length                  ), 1
      @eq ( Ωit_259 = -> types.isa.integer 123                     ), true
      @eq ( Ωit_260 = -> types.isa.integer 123.456                 ), false
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
      @throws ( Ωit_261 = -> new Intertype_minimal declarations ), /expected a function for `create` entry of type 'integer', got a asyncfunction/
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
      @throws ( Ωit_262 = -> new Intertype_minimal declarations ), /template method for type 'foolist' has arity 1 but must be nullary/
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  intertype_knows_its_base_types: ->
    { isa } = require '../../../apps/intertype'
    #.........................................................................................................
    @eq ( Ωit_263 = -> isa.basetype 'optional'   ), false
    @eq ( Ωit_264 = -> isa.basetype 'anything'   ), true
    @eq ( Ωit_265 = -> isa.basetype 'nothing'    ), true
    @eq ( Ωit_266 = -> isa.basetype 'something'  ), true
    @eq ( Ωit_267 = -> isa.basetype 'null'       ), true
    @eq ( Ωit_268 = -> isa.basetype 'undefined'  ), true
    @eq ( Ωit_269 = -> isa.basetype 'unknown'    ), true
    @eq ( Ωit_270 = -> isa.basetype 'integer'    ), false
    @eq ( Ωit_271 = -> isa.basetype 'float'      ), false
    @eq ( Ωit_272 = -> isa.basetype 'basetype'   ), false
    @eq ( Ωit_273 = -> isa.basetype 'quux'       ), false
    @eq ( Ωit_274 = -> isa.basetype 'toString'   ), false
    @eq ( Ωit_275 = -> isa.basetype null         ), false
    @eq ( Ωit_276 = -> isa.basetype undefined    ), false
    @eq ( Ωit_277 = -> isa.basetype 4            ), false
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  disallow_licensed_overrides: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      types         = new Intertype()
      @eq ( Ωit_278 = -> types.isa.float 4 ), true
      #.......................................................................................................
      overrides     =
        float:
          test:       ( x ) -> x is 'float'
      @throws ( Ωit_279 = -> types.declare overrides ), /not allowed to re-declare type 'float'/
      #.......................................................................................................
      ### pre-existing declaration remains valid: ###
      @eq ( Ωit_280 = -> types.isa.float 4       ), true
      @eq ( Ωit_281 = -> types.isa.float 'float' ), false
      return null
    #.........................................................................................................
    do =>
      types         = new Intertype()
      @eq ( Ωit_282 = -> types.isa.float 4 ), true
      #.......................................................................................................
      overrides     =
        float:
          override:   true
          test:       ( x ) -> x is 'float'
      @throws ( Ωit_283 = -> types.declare overrides ), /not allowed to re-declare type 'float'/
      return null
    #.........................................................................................................
    do =>
      types         = new Intertype()
      @eq ( Ωit_284 = -> types.isa.float 4 ), true
      #.......................................................................................................
      overrides     =
        anything:
          override:   true
          test:       ( x ) -> true
      @throws ( Ωit_285 = -> types.declare overrides ), /not allowed to re-declare basetype 'anything'/
      #.......................................................................................................
      ### pre-existing declaration remains valid: ###
      @eq ( Ωit_286 = -> types.isa.anything 4       ), true
      @eq ( Ωit_287 = -> types.isa.anything 'float' ), true
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
      @eq ( Ωit_288 = -> TMP_types.isa.object types.declarations       ), true
      @eq ( Ωit_289 = -> TMP_types.isa.object types.declarations.float ), true
      @eq ( Ωit_290 = -> TMP_types.isa.object types.declarations.text  ), true
      #.......................................................................................................
      @throws ( Ωit_291 = -> types.create.boolean() ), /type declaration of 'boolean' has no `create` and no `template` entries, cannot be created/
      @throws ( Ωit_292 = -> types.create.text 'foo' ), /expected 0 arguments, got 1/
      #.......................................................................................................
      @eq ( Ωit_293 = -> types.create.text()         ), ''
      @eq ( Ωit_294 = -> types.create.integer()      ), 0
      @eq ( Ωit_295 = -> types.create.float()        ), 0
      @eq ( Ωit_296 = -> types.create.float '123.45' ), 123.45
      @throws ( Ωit_297 = -> types.create.float '***' ), /these arguments are not suitable for `create.float\(\)`: '\*\*\*'/
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
      @eq ( Ωit_298 = -> create.quantity()    ), { q: 0, u: 'u', }
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
      @eq ( Ωit_299 = -> create.quantity()                         ), { q: 0, u: 'u', }
      @eq ( Ωit_300 = -> create.quantity { q: 123, }               ), { q: 123, u: 'u', }
      @eq ( Ωit_301 = -> create.quantity { u: 'kg', }              ), { q: 0, u: 'kg', }
      @eq ( Ωit_302 = -> create.quantity { u: 'kg', foo: 'bar', }  ), { q: 0, u: 'kg', foo: 'bar', }
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
      @eq ( Ωit_303 = -> create.float()         ), 0
      @eq ( Ωit_304 = -> create.boolean()       ), false
      @eq ( Ωit_305 = -> create.object()        ), {}
      @eq ( Ωit_306 = -> create.float()         ), 0
      @eq ( Ωit_307 = -> create.infinity()      ), Infinity
      @eq ( Ωit_308 = -> create.text()          ), ''
      @eq ( Ωit_309 = -> create.list()          ), []
      @eq ( Ωit_310 = -> create.regex()         ), new RegExp()
      @eq ( Ωit_311 = -> type_of create.function()      ), 'function'
      @eq ( Ωit_312 = -> type_of create.asyncfunction() ), 'asyncfunction'
      @eq ( Ωit_313 = -> type_of create.symbol()        ), 'symbol'
      @throws ( Ωit_314 = -> create.basetype() ), /type declaration of 'basetype' has no `create` and no `template` entries, cannot be created/
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
      @eq ( Ωit_315 = -> create.quantity()                          ), { q: 0, u: 'u', }
      @eq ( Ωit_316 = -> isa.quantity { q: 9, }                     ), false
      @eq ( Ωit_317 = -> type_of declarations.quantity.sub_tests.q  ), 'function'
      @eq ( Ωit_318 = -> type_of declarations.quantity.sub_tests.u  ), 'function'
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
      @eq ( Ωit_319 = -> create.foo() ), { foo: { bar: 123, } }
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
      @eq ( Ωit_320 = -> type_of declarations.quantity.test ), 'function'
      debug '^342342^', declarations.quantity
      @eq ( Ωit_321 = -> type_of declarations.quantity.sub_tests.q ), 'function'
      @eq ( Ωit_322 = -> type_of declarations.quantity.sub_tests.u ), 'function'
      @eq ( Ωit_323 = -> isa.quantity { q: 987, u: 's', } ), true
      @eq ( Ωit_324 = -> isa.quantity { q: 987, } ), false
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  intertype_minimal_has_only_base_types: ->
    { Intertype_minimal } = require '../../../apps/intertype'
    types = new Intertype_minimal()
    @eq ( Ωit_325 = -> ( Object.keys types.declarations ).sort() ), [ 'anything', 'nothing', 'null', 'optional', 'something', 'undefined', 'unknown' ]
    types.declare { z: ( ( x ) -> ), }
    @eq ( Ωit_326 = -> ( Object.keys types.declarations ).sort() ), [ 'anything', 'nothing', 'null', 'optional', 'something', 'undefined', 'unknown', 'z' ]
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  can_use_type_name_for_test: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      types = new Intertype()
      @throws ( Ωit_327 = -> types.declare { z: 'quux', } ), /unknown type 'quux'/
      types.declare { z: 'float', }
      @eq ( Ωit_328 = -> types.isa.z 12 ), true
      @eq ( Ωit_329 = -> types.isa.float.name                ), 'isa.float'
      @eq ( Ωit_330 = -> types.declarations.float.type       ), 'float'
      @eq ( Ωit_331 = -> types.declarations.float.test.name  ), 'float'
      @eq ( Ωit_332 = -> types.isa.z.name                    ), 'isa.z'
      @eq ( Ωit_333 = -> types.declarations.z.type           ), 'z'
      @eq ( Ωit_334 = -> types.declarations.z.test.name      ), 'z' # ?
    #.........................................................................................................
    do =>
      types = new Intertype()
      @throws ( Ωit_335 = -> types.declare { z: { test: 'quux', }, } ), /unknown type 'quux'/
      types.declare { z: { test: 'float', }, }
      @eq ( Ωit_336 = -> types.isa.z 12 ), true
      @eq ( Ωit_337 = -> types.isa.float.name                ), 'isa.float'
      @eq ( Ωit_338 = -> types.declarations.float.type       ), 'float'
      @eq ( Ωit_339 = -> types.declarations.float.test.name  ), 'float'
      @eq ( Ωit_340 = -> types.isa.z.name                    ), 'isa.z'
      @eq ( Ωit_341 = -> types.declarations.z.type           ), 'z'
      @eq ( Ωit_342 = -> types.declarations.z.test.name      ), 'z'
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  resolve_dotted_type: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      types = new Intertype()
      @eq ( Ωit_343 = -> Reflect.has types.declarations, 'foo'           ), false
      types.declare { foo: 'object', }
      @eq ( Ωit_344 = -> Reflect.has types.declarations, 'foo'           ), true
      @eq ( Ωit_345 = -> Reflect.has types.declarations, 'foo.bar'       ), false
      types.declare { 'foo.bar': 'object', }
      @eq ( Ωit_346 = -> Reflect.has types.declarations, 'foo.bar'       ), true
      @eq ( Ωit_347 = -> Reflect.has types.declarations, 'foo.bar.baz'   ), false
      types.declare { 'foo.bar.baz': 'float', }
      @eq ( Ωit_348 = -> Reflect.has types.declarations, 'foo.bar.baz'   ), true
      @eq ( Ωit_349 = -> types.isa.foo.bar.baz null                      ), false
      @eq ( Ωit_350 = -> types.isa.foo.bar.baz 4                         ), true
      @eq ( Ωit_351 = -> types.isa.foo.bar.baz +Infinity                 ), false
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
      @eq ( Ωit_352 = -> types.isa[ 'quantity.q' ] ), types.declarations[ 'quantity' ].sub_tests[ 'q' ]
      @eq ( Ωit_353 = -> types.isa[ 'quantity.q' ] ), types.isa.quantity.q
      # debug '^409-1^', types.declarations
      @eq ( Ωit_354 = -> types.isa.quantity {}                 ), false
      @eq ( Ωit_355 = -> types.isa.quantity { q: {}, }         ), false
      @eq ( Ωit_356 = -> types.isa.quantity { q: 3, }          ), false
      @eq ( Ωit_357 = -> types.isa.quantity { q: 3, u: 'm', }  ), true
      @eq ( Ωit_358 = -> types.isa.quantity.q 3                ), true
      @eq ( Ωit_359 = -> types.isa.quantity.q 3.1              ), true
      @eq ( Ωit_360 = -> types.isa.quantity.q '3.1'            ), false
      @eq ( Ωit_361 = -> types.isa.quantity.u 'm'              ), true
      @eq ( Ωit_362 = -> types.isa.quantity.u null             ), false
      @eq ( Ωit_363 = -> types.isa.quantity.u 3                ), false
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
      @eq ( Ωit_364 = -> types.isa.person.address.city.name 'P'  ), true
      @eq ( Ωit_365 = -> types.isa.person.address.city.name 1234 ), false
      @eq ( Ωit_366 = -> types.isa.person 1234 ), false
      @eq ( Ωit_367 = -> types.isa.person { name: 'Bob', } ), false
      @eq ( Ωit_368 = -> types.isa.person { name: 'Bob', address: {}, } ), false
      @eq ( Ωit_369 = -> types.isa.person { name: 'Bob', address: { city: {}, }, } ), false
      @eq ( Ωit_370 = -> types.isa.person { name: 'Bob', address: { city: { name: 'P', }, }, } ), false
      @eq ( Ωit_371 = -> types.isa.person { name: 'Bob', address: { city: { name: 'P', postcode: 'SO36', }, }, } ), true
      @eq ( Ωit_372 = -> types.isa.person.address.city.name     'P'                                ), true
      @eq ( Ωit_373 = -> types.isa.person.address.city.postcode 'SO36'                             ), true
      @eq ( Ωit_374 = -> types.isa.person.address.city {         name: 'P', postcode: 'SO36', }    ), true
      @eq ( Ωit_375 = -> types.isa.person.address      { city: { name: 'P', postcode: 'SO36', }, } ), true
      help '^322-1^', ( { "#{k}": f.name } for k, f of types.declarations[ 'person'               ].sub_tests )
      help '^322-2^', ( { "#{k}": f.name } for k, f of types.declarations[ 'person.address'       ].sub_tests )
      help '^322-3^', ( { "#{k}": f.name } for k, f of types.declarations[ 'person.address.city'  ].sub_tests )
      @eq ( Ωit_376 = -> Object.keys types.declarations[ 'person'               ].sub_tests ), [ 'name', 'address', ]
      @eq ( Ωit_377 = -> Object.keys types.declarations[ 'person.address'       ].sub_tests ), [ 'city', ]
      @eq ( Ωit_378 = -> Object.keys types.declarations[ 'person.address.city'  ].sub_tests ), [ 'name', 'postcode', ]
      @eq ( Ωit_379 = -> types.declarations[ 'person' ].sub_tests isnt types.declarations[ 'person.address'      ].sub_tests ), true
      @eq ( Ωit_380 = -> types.declarations[ 'person' ].sub_tests isnt types.declarations[ 'person.address.city' ].sub_tests ), true
      return null
    #.........................................................................................................
    do =>
      types = new Intertype()
      types.declare { 'foo':      'float', }
      types.declare { 'foo.bar':  'text',   }
      do =>
        d = 3
        # d.bar = '?' # Cannot create property in strict mode, so can never satisfy test
        @eq ( Ωit_381 = -> types.isa.foo d ), false
        return null
      do =>
        d = new Number 3
        d.bar = '?'
        @eq ( Ωit_382 = -> d.bar ), '?'
        # still won't work b/c `float` doesn't accept objects (which is a good thing):
        @eq ( Ωit_383 = -> types.isa.foo d ), false
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
      @eq ( Ωit_384 = -> types.isa.foo {} ), false
      @eq ( Ωit_385 = -> types.isa.foo { bind: 1, apply: 2, call: 3, name: 4, length: 5, } ), true
      return null
    #.........................................................................................................
    do =>
      types = new Intertype()
      types.declare { 'foo':        'object',           }
      types.declare { 'foo.text':   ( ( x ) -> x is 1 ) }
      types.declare { 'foo.float':  ( ( x ) -> x is 2 ) }
      @eq ( Ωit_386 = -> types.isa.foo {} ), false
      @eq ( Ωit_387 = -> types.isa.foo { text: 1, float: 2, } ), true
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
      @eq ( Ωit_388 = -> types.isa.person.address.city {} ), false
      @eq ( Ωit_389 = -> types.isa.person.address.city null ), false
      @eq ( Ωit_390 = -> types.isa.person.address.city { name: 'P', postcode: 'SO36', } ), true
      @eq ( Ωit_391 = -> types.isa.mycity {} ), false
      @eq ( Ωit_392 = -> types.isa.mycity null ), false
      @eq ( Ωit_393 = -> types.isa.mycity { name: 'P', postcode: 'SO36', } ), true
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
      @eq ( Ωit_394 = -> types.isa.person.address.city {} ), false
      @eq ( Ωit_395 = -> types.isa.person.address.city null ), false
      @eq ( Ωit_396 = -> types.isa.person.address.city { name: 'P', postcode: 'SO36', } ), true
      @eq ( Ωit_397 = -> types.isa.mycity {} ), false
      @eq ( Ωit_398 = -> types.isa.mycity null ), false
      @eq ( Ωit_399 = -> types.isa.mycity { name: 'P', postcode: 'SO36', } ), true
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
      @eq ( Ωit_400 = -> types.isa.person.address.city {} ), false
      @eq ( Ωit_401 = -> types.isa.person.address.city null ), false
      @eq ( Ωit_402 = -> types.isa.person.address.city { name: 'P', postcode: 'SO36', } ), true
      @eq ( Ωit_403 = -> types.isa.optional.person.address.city {} ), false
      @eq ( Ωit_404 = -> types.isa.optional.person.address.city null ), true
      @eq ( Ωit_405 = -> types.isa.optional.person.address.city { name: 'P', postcode: 'SO36', } ), true
      @eq ( Ωit_406 = -> types.isa.mycity {} ), false
      @eq ( Ωit_407 = -> types.isa.mycity null ), true
      @eq ( Ωit_408 = -> types.isa.mycity { name: 'P', postcode: 'SO36', } ), true
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
      @throws ( Ωit_409 = -> types.declare { 'optional.d':    ( ( x ) -> ), } ), /illegal use of 'optional' in declaration of type 'optional.d'/
      @throws ( Ωit_410 = -> types.declare { 'anything.d':    ( ( x ) -> ), } ), /illegal use of basetype 'anything' in declaration of type 'anything.d'/
      @throws ( Ωit_411 = -> types.declare { 'nothing.d':     ( ( x ) -> ), } ), /illegal use of basetype 'nothing' in declaration of type 'nothing.d'/
      @throws ( Ωit_412 = -> types.declare { 'something.d':   ( ( x ) -> ), } ), /illegal use of basetype 'something' in declaration of type 'something.d'/
      @throws ( Ωit_413 = -> types.declare { 'null.d':        ( ( x ) -> ), } ), /illegal use of basetype 'null' in declaration of type 'null.d'/
      @throws ( Ωit_414 = -> types.declare { 'undefined.d':   ( ( x ) -> ), } ), /illegal use of basetype 'undefined' in declaration of type 'undefined.d'/
      @throws ( Ωit_415 = -> types.declare { 'unknown.d':     ( ( x ) -> ), } ), /illegal use of basetype 'unknown' in declaration of type 'unknown.d'/
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
      @eq ( Ωit_416 = -> __type_of null, _isa, null          ), 'null'
      @eq ( Ωit_417 = -> __type_of null, _isa, undefined     ), 'undefined'
      @eq ( Ωit_418 = -> __type_of null, _isa, 4             ), 'float'
      @eq ( Ωit_419 = -> __type_of null, _isa, ->            ), 'function'
      @eq ( Ωit_420 = -> __type_of null, _isa, -> await null ), 'asyncfunction'
      @eq ( Ωit_421 = -> __type_of null, _isa, {}            ), 'object'
      @eq ( Ωit_422 = -> __type_of null, _isa, []            ), 'list'
      @eq ( Ωit_423 = -> __type_of null, _isa, +Infinity     ), 'infinity'
      @eq ( Ωit_424 = -> __type_of null, _isa, -Infinity     ), 'infinity'
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
      @eq ( Ωit_425 = -> result                                   ), probe
      @eq ( Ωit_426 = -> result.bar         is probe.bar          ), false
      @eq ( Ωit_427 = -> result.bar.baz     is probe.bar.baz      ), false
      @eq ( Ωit_428 = -> result.bar.baz.sub is probe.bar.baz.sub  ), false
      @eq ( Ωit_429 = -> result.bar.baz.sub is sub                ), false
      @eq ( Ωit_430 = -> probe.bar.baz.sub  is sub                ), true
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
      @eq ( Ωit_431 = -> result                                   ), probe
      @eq ( Ωit_432 = -> result.bar         is probe.bar          ), false
      @eq ( Ωit_433 = -> result.bar.baz     is probe.bar.baz      ), false
      @eq ( Ωit_434 = -> result.bar.baz.sub is probe.bar.baz.sub  ), false
      @eq ( Ωit_435 = -> result.bar.baz.sub is sub                ), false
      @eq ( Ωit_436 = -> probe.bar.baz.sub  is sub                ), true
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
      @throws ( Ωit_437 = -> validate.person null                        ), /expected a person, got a null/
      @throws ( Ωit_438 = -> validate.person.address null                ), /expected a person.address, got a null/
      @throws ( Ωit_439 = -> validate.person.address.city null           ), /expected a person.address.city, got a null/
      @throws ( Ωit_440 = -> validate.person.address.city.postcode null  ), /expected a person.address.city.postcode, got a null/
      #.......................................................................................................
      @eq ( Ωit_441 = -> types.isa.person.address.city.postcode 3 ), false
      @throws ( Ωit_442 = -> validate.person.address.city.postcode 3             ), /expected a person.address.city.postcode/
      #.......................................................................................................
      @eq ( Ωit_443 = -> types.isa.person.address.city { name: 'P', } ), false
      @throws ( Ωit_444 = -> validate.person.address.city { name: 'P', }         ), /expected a person.address.city/
      # #.......................................................................................................
      @eq ( Ωit_445 = -> types.isa.person.address.city { postcode: '3421', } ), false
      @throws ( Ωit_446 = -> validate.person.address.city()                      ), /method 'validate.person.address.city' expects 1 arguments, got 0/
      @throws ( Ωit_447 = -> validate.person.address.city null                   ), /expected a person.address.city/
      @throws ( Ωit_448 = -> validate.person.address.city '3421'                 ), /expected a person.address.city/
      @throws ( Ωit_449 = -> validate.person.address.city { postcode: '3421', }  ), /expected a person.address.city/
      #.......................................................................................................
      @eq ( Ωit_450 = -> types.isa.person.address.city { name: 'P', postcode: '3421', } ), true
      @eq ( Ωit_451 = -> validate.person.address.city { name: 'P', postcode: '3421', } ), { name: 'P', postcode: '3421', }
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
      @throws ( Ωit_452 = -> evaluate.optional 1         ), /`optional` is not a legal type for `evaluate` methods/
      @throws ( Ωit_453 = -> evaluate.optional.person 1  ), /`optional` is not a legal type for `evaluate` methods/
      #.......................................................................................................
      @eq ( Ωit_454 = -> isa.person       { name: 'Alice', address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), true
      @eq ( Ωit_455 = -> evaluate.person  { name: 'Alice', address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), { person: true,  'person.name': true, 'person.address': true, 'person.address.city': true, 'person.address.city.name': true, 'person.address.city.postcode': true, }
      #.......................................................................................................
      @eq ( Ωit_456 = -> isa.person       { name: 'Alice', address: { city: { name: 'Atown', postcode: 12345678 } } } ), false
      @eq ( Ωit_457 = -> evaluate.person  { name: 'Alice', address: { city: { name: 'Atown', postcode: 12345678 } } } ), { person: false,  'person.name': true, 'person.address': false, 'person.address.city': false, 'person.address.city.name': true, 'person.address.city.postcode': false, }
      #.......................................................................................................
      @eq ( Ωit_458 = -> isa.person       {                address: { city: { name: 'Atown', postcode: 12345678 } } } ), false
      @eq ( Ωit_459 = -> evaluate.person  {                address: { city: { name: 'Atown', postcode: 12345678 } } } ), { person: false,  'person.name': false, 'person.address': false, 'person.address.city': false, 'person.address.city.name': true, 'person.address.city.postcode': false, }
      #.......................................................................................................
      @eq ( Ωit_460 = -> isa.person       {                address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), false
      @eq ( Ωit_461 = -> evaluate.person  {                address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), { person: false, 'person.name': false, 'person.address': true, 'person.address.city': true, 'person.address.city.name': true, 'person.address.city.postcode': true, }
      #.......................................................................................................
      @eq ( Ωit_462 = -> isa.person       null  ), false
      @eq ( Ωit_463 = -> evaluate.person  null  ), { person: false, 'person.name': false, 'person.address': false, 'person.address.city': false, 'person.address.city.name': false, 'person.address.city.postcode': false, }
      #.......................................................................................................
      @eq ( Ωit_464 = -> isa.person       {}    ), false
      @eq ( Ωit_465 = -> evaluate.person  {}    ), { person: false, 'person.name': false, 'person.address': false, 'person.address.city': false, 'person.address.city.name': false, 'person.address.city.postcode': false, }
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
      @eq ( Ωit_466 = -> isa.person                   { name: 'Alice', address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), true
      @eq ( Ωit_467 = -> evaluate.person              { name: 'Alice', address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), { person: true,  'person.name': true, 'person.address': true, 'person.address.city': true, 'person.address.city.name': true, 'person.address.city.postcode': true, }
      @eq ( Ωit_468 = -> Object.keys evaluate.person  { name: 'Alice', address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), [ 'person', 'person.address', 'person.address.city', 'person.address.city.postcode', 'person.address.city.name', 'person.name' ]
      #.......................................................................................................
      @eq ( Ωit_469 = -> isa.person                   {                address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), false
      @eq ( Ωit_470 = -> evaluate.person              {                address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), { person: false, 'person.name': false, 'person.address': true, 'person.address.city': true, 'person.address.city.name': true, 'person.address.city.postcode': true, }
      @eq ( Ωit_471 = -> Object.keys evaluate.person  {                address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), [ 'person', 'person.address', 'person.address.city', 'person.address.city.postcode', 'person.address.city.name', 'person.name' ]
      #.......................................................................................................
      @eq ( Ωit_472 = -> isa.person                   null  ), false
      @eq ( Ωit_473 = -> evaluate.person              null  ), { person: false, 'person.name': false, 'person.address': false, 'person.address.city': false, 'person.address.city.name': false, 'person.address.city.postcode': false, }
      @eq ( Ωit_474 = -> Object.keys evaluate.person  null  ), [ 'person', 'person.address', 'person.address.city', 'person.address.city.postcode', 'person.address.city.name', 'person.name' ]
      #.......................................................................................................
      @eq ( Ωit_475 = -> isa.person                   {}  ), false
      @eq ( Ωit_476 = -> evaluate.person              {}  ), { person: false, 'person.name': false, 'person.address': false, 'person.address.city': false, 'person.address.city.name': false, 'person.address.city.postcode': false, }
      @eq ( Ωit_477 = -> Object.keys evaluate.person  {}  ), [ 'person', 'person.address', 'person.address.city', 'person.address.city.postcode', 'person.address.city.name', 'person.name' ]
      #.......................................................................................................
      @eq ( Ωit_478 = -> isa.person.address                   { city: { name: 'Atown', postcode: 'VA1234' } } ), true
      @eq ( Ωit_479 = -> evaluate.person.address              { city: { name: 'Atown', postcode: 'VA1234' } } ), { 'person.address': true, 'person.address.city': true, 'person.address.city.name': true, 'person.address.city.postcode': true, }
      @eq ( Ωit_480 = -> Object.keys evaluate.person.address  { city: { name: 'Atown', postcode: 'VA1234' } } ), [ 'person.address', 'person.address.city', 'person.address.city.postcode', 'person.address.city.name' ]
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
      @eq ( Ωit_481 = -> isa.generatorfunction walk_prefixes             ), true
      @eq ( Ωit_482 = -> [ ( walk_prefixes 'one'                )..., ]  ), []
      @eq ( Ωit_483 = -> [ ( walk_prefixes 'one.two'            )..., ]  ), [ 'one' ]
      @eq ( Ωit_484 = -> [ ( walk_prefixes 'one.two.three'      )..., ]  ), [ 'one', 'one.two', ]
      @eq ( Ωit_485 = -> [ ( walk_prefixes 'one.two.three.four' )..., ]  ), [ 'one', 'one.two', 'one.two.three', ]
      ### TAINT should not allow empty namers: ###
      @eq ( Ωit_486 = -> [ ( walk_prefixes '.one.two.three'     )..., ]  ), [ '', '.one', '.one.two', ]
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
      @throws ( Ωit_487 = -> types = new Intertype declarations ), /unknown partial type 'foo'/
      return null
    #.........................................................................................................
    do =>
      declarations =
        'quantity':         'object'
        'quantity.q':       'float'
        'quantity.u':       'text'
      types = new Intertype declarations
      @eq ( Ωit_488 = -> types.isa.quantity {}                   ), false
      @eq ( Ωit_489 = -> types.isa.quantity { q: 12, u: 'kg', }  ), true
      @eq ( Ωit_490 = -> types.isa[ 'quantity.q' ] 12            ), true
      @eq ( Ωit_491 = -> types.isa[ 'quantity.u' ] 'kg'          ), true
      @eq ( Ωit_492 = -> types.isa.quantity.q 12                 ), true
      @eq ( Ωit_493 = -> types.isa.quantity.u 'kg'               ), true
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
      @eq ( Ωit_494 = -> isa.empty.list    []          ), true
      @eq ( Ωit_495 = -> isa.empty.list    [ 'A', ]    ), false
      @eq ( Ωit_496 = -> isa.empty.list    4           ), false
      @eq ( Ωit_497 = -> isa.nonempty.list []          ), false
      @eq ( Ωit_498 = -> isa.nonempty.list [ 'A', ]    ), true
      @eq ( Ωit_499 = -> isa.nonempty.list 4           ), false
      @eq ( Ωit_500 = -> isa.empty.text    ''          ), true
      @eq ( Ωit_501 = -> isa.empty.text    'A'         ), false
      @eq ( Ωit_502 = -> isa.empty.text    4           ), false
      @eq ( Ωit_503 = -> isa.nonempty.text ''          ), false
      @eq ( Ωit_504 = -> isa.nonempty.text 'A'         ), true
      @eq ( Ωit_505 = -> isa.nonempty.text 4           ), false
      ### this doesn't make a terrible lot of sense: ###
      @eq ( Ωit_506 = -> isa.empty { list: [], text: '', set: new Set() } ), false
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
      @eq ( Ωit_507 = -> isa.empty.list    []          ), true
      @eq ( Ωit_508 = -> isa.empty.list    [ 'A', ]    ), false
      @eq ( Ωit_509 = -> isa.empty.list    4           ), false
      @eq ( Ωit_510 = -> isa.nonempty.list []          ), false
      @eq ( Ωit_511 = -> isa.nonempty.list [ 'A', ]    ), true
      @eq ( Ωit_512 = -> isa.nonempty.list 4           ), false
      @eq ( Ωit_513 = -> isa.empty.text    ''          ), true
      @eq ( Ωit_514 = -> isa.empty.text    'A'         ), false
      @eq ( Ωit_515 = -> isa.empty.text    4           ), false
      @eq ( Ωit_516 = -> isa.nonempty.text ''          ), false
      @eq ( Ωit_517 = -> isa.nonempty.text 'A'         ), true
      @eq ( Ωit_518 = -> isa.nonempty.text 4           ), false
      #.......................................................................................................
      @eq ( Ωit_519 = -> isa.empty []                  ), true
      @eq ( Ωit_520 = -> isa.empty ''                  ), true
      @eq ( Ωit_521 = -> isa.empty new Set()           ), true
      @eq ( Ωit_522 = -> isa.empty [ 1, ]              ), false
      @eq ( Ωit_523 = -> isa.empty 'A'                 ), false
      @eq ( Ωit_524 = -> isa.empty new Set 'abc'       ), false
      #.......................................................................................................
      @eq ( Ωit_525 = -> validate.empty []                  ), []
      @eq ( Ωit_526 = -> validate.empty ''                  ), ''
      @eq ( Ωit_527 = -> validate.empty new Set()           ), new Set()
      @throws ( Ωit_528 = -> validate.empty [ 1, ]              ), /expected a empty, got a list/
      @throws ( Ωit_529 = -> validate.empty 'A'                 ), /expected a empty, got a text/
      @throws ( Ωit_530 = -> validate.empty new Set 'abc'       ), /expected a empty, got a set/
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
      @eq ( Ωit_531 = -> isa.optional.empty.list    []          ), true
      @eq ( Ωit_532 = -> isa.optional.empty.list    [ 'A', ]    ), false
      @eq ( Ωit_533 = -> isa.optional.empty.list    4           ), false
      @eq ( Ωit_534 = -> isa.optional.nonempty.list []          ), false
      @eq ( Ωit_535 = -> isa.optional.nonempty.list [ 'A', ]    ), true
      @eq ( Ωit_536 = -> isa.optional.nonempty.list 4           ), false
      @eq ( Ωit_537 = -> isa.optional.empty.text    ''          ), true
      @eq ( Ωit_538 = -> isa.optional.empty.text    'A'         ), false
      @eq ( Ωit_539 = -> isa.optional.empty.text    4           ), false
      @eq ( Ωit_540 = -> isa.optional.nonempty.text ''          ), false
      @eq ( Ωit_541 = -> isa.optional.nonempty.text 'A'         ), true
      @eq ( Ωit_542 = -> isa.optional.nonempty.text 4           ), false
      #.......................................................................................................
      @eq ( Ωit_543 = -> isa.optional.empty []                  ), true
      @eq ( Ωit_544 = -> isa.optional.empty ''                  ), true
      @eq ( Ωit_545 = -> isa.optional.empty new Set()           ), true
      @eq ( Ωit_546 = -> isa.optional.empty [ 1, ]              ), false
      @eq ( Ωit_547 = -> isa.optional.empty 'A'                 ), false
      @eq ( Ωit_548 = -> isa.optional.empty new Set 'abc'       ), false
      #.......................................................................................................
      @eq ( Ωit_549 = -> validate.optional.empty []                   ), []
      @eq ( Ωit_550 = -> validate.optional.empty ''                   ), ''
      @eq ( Ωit_551 = -> validate.optional.empty new Set()            ), new Set()
      @eq ( Ωit_552 = -> validate.optional.empty.list  []             ), []
      @eq ( Ωit_553 = -> validate.optional.empty.text  ''             ), ''
      @eq ( Ωit_554 = -> validate.optional.empty.set   new Set()      ), new Set()
      @throws ( Ωit_555 = -> validate.optional.empty [ 1, ]           ), /expected an optional empty, got a list/
      @throws ( Ωit_556 = -> validate.optional.empty 'A'              ), /expected an optional empty, got a text/
      @throws ( Ωit_557 = -> validate.optional.empty new Set 'abc'    ), /expected an optional empty, got a set/
      #.......................................................................................................
      @eq ( Ωit_558 = -> isa.optional.empty []                        ), true
      @eq ( Ωit_559 = -> isa.optional.empty ''                        ), true
      @eq ( Ωit_560 = -> isa.optional.empty new Set()                 ), true
      @eq ( Ωit_561 = -> isa.optional.empty [ 1, ]                    ), false
      @eq ( Ωit_562 = -> isa.optional.empty 'A'                       ), false
      @eq ( Ωit_563 = -> isa.optional.empty new Set 'abc'             ), false
      @eq ( Ωit_564 = -> validate.optional.empty       null           ), null
      @eq ( Ωit_565 = -> validate.optional.empty.list  null           ), null
      @eq ( Ωit_566 = -> validate.optional.empty.text  null           ), null
      @eq ( Ωit_567 = -> validate.optional.empty.set   null           ), null
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
      @eq ( Ωit_568 = -> isa.empty.list    []          ), true
      @eq ( Ωit_569 = -> isa.empty.list    [ 'A', ]    ), false
      @eq ( Ωit_570 = -> isa.empty.list    4           ), false
      @eq ( Ωit_571 = -> isa.nonempty.list []          ), false
      @eq ( Ωit_572 = -> isa.nonempty.list [ 'A', ]    ), true
      @eq ( Ωit_573 = -> isa.nonempty.list 4           ), false
      @eq ( Ωit_574 = -> isa.empty.text    ''          ), true
      @eq ( Ωit_575 = -> isa.empty.text    'A'         ), false
      @eq ( Ωit_576 = -> isa.empty.text    4           ), false
      @eq ( Ωit_577 = -> isa.nonempty.text ''          ), false
      @eq ( Ωit_578 = -> isa.nonempty.text 'A'         ), true
      @eq ( Ωit_579 = -> isa.nonempty.text 4           ), false
      #.......................................................................................................
      @eq ( Ωit_580 = -> isa.empty []                  ), true
      @eq ( Ωit_581 = -> isa.empty ''                  ), true
      @eq ( Ωit_582 = -> isa.empty new Set()           ), true
      @eq ( Ωit_583 = -> isa.empty [ 1, ]              ), false
      @eq ( Ωit_584 = -> isa.empty 'A'                 ), false
      @eq ( Ωit_585 = -> isa.empty new Set 'abc'       ), false
      #.......................................................................................................
      @eq ( Ωit_586 = -> validate.empty []                   ), []
      @eq ( Ωit_587 = -> validate.empty ''                   ), ''
      @eq ( Ωit_588 = -> validate.empty new Set()            ), new Set()
      @eq ( Ωit_589 = -> validate.empty.list  []             ), []
      @eq ( Ωit_590 = -> validate.empty.text  ''             ), ''
      @eq ( Ωit_591 = -> validate.empty.set   new Set()      ), new Set()
      @throws ( Ωit_592 = -> validate.empty [ 1, ]           ), /expected a empty, got a list/
      @throws ( Ωit_593 = -> validate.empty 'A'              ), /expected a empty, got a text/
      @throws ( Ωit_594 = -> validate.empty new Set 'abc'    ), /expected a empty, got a set/
      #.......................................................................................................
      @eq ( Ωit_595 = -> isa.empty []                        ), true
      @eq ( Ωit_596 = -> isa.empty ''                        ), true
      @eq ( Ωit_597 = -> isa.empty new Set()                 ), true
      @eq ( Ωit_598 = -> isa.empty [ 1, ]                    ), false
      @eq ( Ωit_599 = -> isa.empty 'A'                       ), false
      @eq ( Ωit_600 = -> isa.empty new Set 'abc'             ), false
      @throws ( Ωit_601 = -> validate.empty       null           ), /expected a empty, got a null/
      @throws ( Ωit_602 = -> validate.empty.list  null           ), /expected a empty.list, got a null/
      @throws ( Ωit_603 = -> validate.empty.text  null           ), /expected a empty.text, got a null/
      @throws ( Ωit_604 = -> validate.empty.set   null           ), /expected a empty.set, got a null/
      #.......................................................................................................
      @eq ( Ωit_605 = -> isa.optional.empty.list    []          ), true
      @eq ( Ωit_606 = -> isa.optional.empty.list    [ 'A', ]    ), false
      @eq ( Ωit_607 = -> isa.optional.empty.list    4           ), false
      @eq ( Ωit_608 = -> isa.optional.nonempty.list []          ), false
      @eq ( Ωit_609 = -> isa.optional.nonempty.list [ 'A', ]    ), true
      @eq ( Ωit_610 = -> isa.optional.nonempty.list 4           ), false
      @eq ( Ωit_611 = -> isa.optional.empty.text    ''          ), true
      @eq ( Ωit_612 = -> isa.optional.empty.text    'A'         ), false
      @eq ( Ωit_613 = -> isa.optional.empty.text    4           ), false
      @eq ( Ωit_614 = -> isa.optional.nonempty.text ''          ), false
      @eq ( Ωit_615 = -> isa.optional.nonempty.text 'A'         ), true
      @eq ( Ωit_616 = -> isa.optional.nonempty.text 4           ), false
      #.......................................................................................................
      @eq ( Ωit_617 = -> isa.optional.empty []                  ), true
      @eq ( Ωit_618 = -> isa.optional.empty ''                  ), true
      @eq ( Ωit_619 = -> isa.optional.empty new Set()           ), true
      @eq ( Ωit_620 = -> isa.optional.empty [ 1, ]              ), false
      @eq ( Ωit_621 = -> isa.optional.empty 'A'                 ), false
      @eq ( Ωit_622 = -> isa.optional.empty new Set 'abc'       ), false
      #.......................................................................................................
      @eq ( Ωit_623 = -> validate.optional.empty []                   ), []
      @eq ( Ωit_624 = -> validate.optional.empty ''                   ), ''
      @eq ( Ωit_625 = -> validate.optional.empty new Set()            ), new Set()
      @eq ( Ωit_626 = -> validate.optional.empty.list  []             ), []
      @eq ( Ωit_627 = -> validate.optional.empty.text  ''             ), ''
      @eq ( Ωit_628 = -> validate.optional.empty.set   new Set()      ), new Set()
      @throws ( Ωit_629 = -> validate.optional.empty [ 1, ]           ), /expected an optional empty, got a list/
      @throws ( Ωit_630 = -> validate.optional.empty 'A'              ), /expected an optional empty, got a text/
      @throws ( Ωit_631 = -> validate.optional.empty new Set 'abc'    ), /expected an optional empty, got a set/
      #.......................................................................................................
      @eq ( Ωit_632 = -> isa.optional.empty []                        ), true
      @eq ( Ωit_633 = -> isa.optional.empty ''                        ), true
      @eq ( Ωit_634 = -> isa.optional.empty new Set()                 ), true
      @eq ( Ωit_635 = -> isa.optional.empty [ 1, ]                    ), false
      @eq ( Ωit_636 = -> isa.optional.empty 'A'                       ), false
      @eq ( Ωit_637 = -> isa.optional.empty new Set 'abc'             ), false
      @eq ( Ωit_638 = -> validate.optional.empty       null           ), null
      @eq ( Ωit_639 = -> validate.optional.empty.list  null           ), null
      @eq ( Ωit_640 = -> validate.optional.empty.text  null           ), null
      @eq ( Ωit_641 = -> validate.optional.empty.set   null           ), null
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
      @eq ( Ωit_642 = -> isa.empty.list    []                             ), true
      @eq ( Ωit_643 = -> isa.empty.list    [ 'A', ]                       ), false
      @eq ( Ωit_644 = -> isa.empty.list    4                              ), false
      @eq ( Ωit_645 = -> isa.nonempty.list []                             ), false
      @eq ( Ωit_646 = -> isa.nonempty.list [ 'A', ]                       ), true
      @eq ( Ωit_647 = -> isa.nonempty.list 4                              ), false
      @eq ( Ωit_648 = -> isa.empty.text    ''                             ), true
      @eq ( Ωit_649 = -> isa.empty.text    'A'                            ), false
      @eq ( Ωit_650 = -> isa.empty.text    4                              ), false
      @eq ( Ωit_651 = -> isa.nonempty.text ''                             ), false
      @eq ( Ωit_652 = -> isa.nonempty.text 'A'                            ), true
      @eq ( Ωit_653 = -> isa.nonempty.text 4                              ), false
      @eq ( Ωit_654 = -> isa.empty { list: [], text: '', set: new Set() } ), false
      #.......................................................................................................
      @eq ( Ωit_655 = -> isa.empty []                                     ), true
      @eq ( Ωit_656 = -> isa.empty ''                                     ), true
      @eq ( Ωit_657 = -> isa.empty new Set()                              ), true
      @eq ( Ωit_658 = -> isa.empty /d/                                    ), false
      @eq ( Ωit_659 = -> isa.empty [ 1, ]                                 ), false
      @eq ( Ωit_660 = -> isa.empty 'A'                                    ), false
      @eq ( Ωit_661 = -> isa.empty new Set 'abc'                          ), false
      #.......................................................................................................
      @eq ( Ωit_662 = -> validate.empty []                                ), []
      @eq ( Ωit_663 = -> validate.empty ''                                ), ''
      @eq ( Ωit_664 = -> validate.empty new Set()                         ), new Set()
      @throws ( Ωit_665 = -> validate.empty [ 1, ]                        ), /expected a empty, got a list/
      @throws ( Ωit_666 = -> validate.empty 'A'                           ), /expected a empty, got a text/
      @throws ( Ωit_667 = -> validate.empty new Set 'abc'                 ), /expected a empty, got a set/
      #.......................................................................................................
      @eq ( Ωit_668 = -> type_of []                                       ), 'list'
      @eq ( Ωit_669 = -> type_of ''                                       ), 'text'
      @eq ( Ωit_670 = -> type_of new Set()                                ), 'set'
      @eq ( Ωit_671 = -> type_of [ 'a', ]                                 ), 'list'
      @eq ( Ωit_672 = -> type_of 'a'                                      ), 'text'
      @eq ( Ωit_673 = -> type_of new Set 'a'                              ), 'set'
      #.......................................................................................................
      @eq ( Ωit_674 = -> type_of 1234                                     ), 'float'
      @eq ( Ωit_675 = -> isa.integer 1234                                 ), true
      @eq ( Ωit_676 = -> isa.positive.integer 1234                        ), true
      @eq ( Ωit_677 = -> isa.negative.integer 1234                        ), false
      @eq ( Ωit_678 = -> isa.negative.integer -1234                       ), true
      @eq ( Ωit_679 = -> isa.negative.integer -Infinity                   ), false
      @eq ( Ωit_680 = -> isa.negative.integer -12.34                      ), false
      #.......................................................................................................
      @eq ( Ωit_681 = -> isa.positive.float     +4                        ), true
      @eq ( Ωit_682 = -> isa.positive.integer   +4                        ), true
      @eq ( Ωit_683 = -> isa.positive.infinity  +4                        ), false
      @eq ( Ωit_684 = -> isa.negative.float     +4                        ), false
      @eq ( Ωit_685 = -> isa.negative.integer   +4                        ), false
      @eq ( Ωit_686 = -> isa.negative.infinity  +4                        ), false
      @eq ( Ωit_687 = -> isa.posnaught.float    +4                        ), true
      @eq ( Ωit_688 = -> isa.posnaught.integer  +4                        ), true
      @eq ( Ωit_689 = -> isa.posnaught.infinity +4                        ), false
      @eq ( Ωit_690 = -> isa.negnaught.float    +4                        ), false
      @eq ( Ωit_691 = -> isa.negnaught.integer  +4                        ), false
      @eq ( Ωit_692 = -> isa.negnaught.infinity +4                        ), false
      #.......................................................................................................
      @eq ( Ωit_693 = -> isa.positive.float      0                        ), false
      @eq ( Ωit_694 = -> isa.positive.integer    0                        ), false
      @eq ( Ωit_695 = -> isa.positive.infinity   0                        ), false
      @eq ( Ωit_696 = -> isa.negative.float      0                        ), false
      @eq ( Ωit_697 = -> isa.negative.integer    0                        ), false
      @eq ( Ωit_698 = -> isa.negative.infinity   0                        ), false
      @eq ( Ωit_699 = -> isa.posnaught.float     0                        ), true
      @eq ( Ωit_700 = -> isa.posnaught.integer   0                        ), true
      @eq ( Ωit_701 = -> isa.posnaught.infinity  0                        ), false
      @eq ( Ωit_702 = -> isa.negnaught.float     0                        ), true
      @eq ( Ωit_703 = -> isa.negnaught.integer   0                        ), true
      @eq ( Ωit_704 = -> isa.negnaught.infinity  0                        ), false
      #.......................................................................................................
      @eq ( Ωit_705 = -> isa.positive.float      Infinity                 ), false
      @eq ( Ωit_706 = -> isa.positive.integer    Infinity                 ), false
      @eq ( Ωit_707 = -> isa.positive.infinity   Infinity                 ), true
      @eq ( Ωit_708 = -> isa.negative.float      Infinity                 ), false
      @eq ( Ωit_709 = -> isa.negative.integer    Infinity                 ), false
      @eq ( Ωit_710 = -> isa.negative.infinity   Infinity                 ), false
      @eq ( Ωit_711 = -> isa.posnaught.float     Infinity                 ), false
      @eq ( Ωit_712 = -> isa.posnaught.integer   Infinity                 ), false
      @eq ( Ωit_713 = -> isa.posnaught.infinity  Infinity                 ), true
      @eq ( Ωit_714 = -> isa.negnaught.float     Infinity                 ), false
      @eq ( Ωit_715 = -> isa.negnaught.integer   Infinity                 ), false
      @eq ( Ωit_716 = -> isa.negnaught.infinity  Infinity                 ), false
      #.......................................................................................................
      @eq ( Ωit_717 = -> isa.positive.float      +4.3                     ), true
      @eq ( Ωit_718 = -> isa.positive.integer    +4.3                     ), false
      @eq ( Ωit_719 = -> isa.positive.infinity   +4.3                     ), false
      @eq ( Ωit_720 = -> isa.negative.float      +4.3                     ), false
      @eq ( Ωit_721 = -> isa.negative.integer    +4.3                     ), false
      @eq ( Ωit_722 = -> isa.negative.infinity   +4.3                     ), false
      @eq ( Ωit_723 = -> isa.posnaught.float     +4.3                     ), true
      @eq ( Ωit_724 = -> isa.posnaught.integer   +4.3                     ), false
      @eq ( Ωit_725 = -> isa.posnaught.infinity  +4.3                     ), false
      @eq ( Ωit_726 = -> isa.negnaught.float     +4.3                     ), false
      @eq ( Ωit_727 = -> isa.negnaught.integer   +4.3                     ), false
      @eq ( Ωit_728 = -> isa.negnaught.infinity  +4.3                     ), false
      #.......................................................................................................
      @eq ( Ωit_729 = -> isa.positive.float      -4.3                     ), false
      @eq ( Ωit_730 = -> isa.positive.integer    -4.3                     ), false
      @eq ( Ωit_731 = -> isa.positive.infinity   -4.3                     ), false
      @eq ( Ωit_732 = -> isa.negative.float      -4.3                     ), true
      @eq ( Ωit_733 = -> isa.negative.integer    -4.3                     ), false
      @eq ( Ωit_734 = -> isa.negative.infinity   -4.3                     ), false
      @eq ( Ωit_735 = -> isa.posnaught.float     -4.3                     ), false
      @eq ( Ωit_736 = -> isa.posnaught.integer   -4.3                     ), false
      @eq ( Ωit_737 = -> isa.posnaught.infinity  -4.3                     ), false
      @eq ( Ωit_738 = -> isa.negnaught.float     -4.3                     ), true
      @eq ( Ωit_739 = -> isa.negnaught.integer   -4.3                     ), false
      @eq ( Ωit_740 = -> isa.negnaught.infinity  -4.3                     ), false
      #.......................................................................................................
      @eq ( Ωit_741 = -> isa.posnaught           +Infinity                ), true
      @eq ( Ωit_742 = -> isa.negnaught           +Infinity                ), false
      @eq ( Ωit_743 = -> isa.posnaught           -Infinity                ), false
      @eq ( Ωit_744 = -> isa.negnaught           -Infinity                ), true
      @eq ( Ωit_745 = -> isa.posnaught           0                        ), true
      @eq ( Ωit_746 = -> isa.negnaught           0                        ), true
      @eq ( Ωit_747 = -> isa.posnaught           0                        ), true
      @eq ( Ωit_748 = -> isa.negnaught           0                        ), true
      #.......................................................................................................
      @eq ( Ωit_749 = -> isa.frozen         Object.freeze {}              ), true
      @eq ( Ωit_750 = -> isa.frozen         Object.freeze []              ), true
      @eq ( Ωit_751 = -> isa.frozen                       {}              ), false
      @eq ( Ωit_752 = -> isa.frozen                       []              ), false
      @eq ( Ωit_753 = -> isa.frozen.object  Object.freeze {}              ), true
      @eq ( Ωit_754 = -> isa.frozen.list    Object.freeze []              ), true
      @eq ( Ωit_755 = -> isa.frozen.object                {}              ), false
      @eq ( Ωit_756 = -> isa.frozen.list                  []              ), false
      #.......................................................................................................
      @eq ( Ωit_757 = -> isa.odd.integer                  []              ), false
      @eq ( Ωit_758 = -> isa.odd.integer                  102.4           ), false
      @eq ( Ωit_759 = -> isa.odd.integer                  9997            ), true
      @eq ( Ωit_760 = -> isa.odd.integer                  '1024'          ), false
      @eq ( Ωit_761 = -> isa.odd.integer                  0               ), false
      @eq ( Ωit_762 = -> isa.odd.integer                  1024            ), false
      @eq ( Ωit_763 = -> isa.odd.positive.integer         1024            ), false
      @eq ( Ωit_764 = -> isa.odd.positive.integer         102.4           ), false
      @eq ( Ωit_765 = -> isa.odd.positive.integer         1023            ), true
      @eq ( Ωit_766 = -> isa.odd.positive.integer         -1023           ), false
      @eq ( Ωit_767 = -> isa.odd.positive.integer         103.4           ), false
      @eq ( Ωit_768 = -> isa.even.integer                 []              ), false
      @eq ( Ωit_769 = -> isa.even.integer                 102.4           ), false
      @eq ( Ωit_770 = -> isa.even.integer                 9997            ), false
      @eq ( Ωit_771 = -> isa.even.integer                 '1024'          ), false
      @eq ( Ωit_772 = -> isa.even.integer                 0               ), true
      @eq ( Ωit_773 = -> isa.even.integer                 1024            ), true
      @eq ( Ωit_774 = -> isa.even.positive.integer        1024            ), true
      @eq ( Ωit_775 = -> isa.even.positive.integer        0               ), false
      @eq ( Ωit_776 = -> isa.even.posnaught.integer       1024            ), true
      @eq ( Ωit_777 = -> isa.even.posnaught.integer       0               ), true
      #.......................................................................................................
      @eq ( Ωit_778 = -> isa.even.posnaught               0               ), true
      @eq ( Ωit_779 = -> isa.even.posnaught               1               ), false
      @eq ( Ωit_780 = -> isa.even.posnaught               2               ), true
      #.......................................................................................................
      @eq ( Ωit_781 = -> isa.cardinal                     -1024           ), false
      @eq ( Ωit_782 = -> isa.cardinal                     10              ), true
      @eq ( Ωit_783 = -> isa.cardinal                     123.7           ), false
      @eq ( Ωit_784 = -> isa.cardinal                     0               ), true
      @eq ( Ωit_785 = -> isa.cardinal                     1               ), true
      @eq ( Ωit_786 = -> isa.cardinal                     Infinity        ), false
      @eq ( Ωit_787 = -> evaluate.cardinal                Infinity        ), { cardinal: false }
      @eq ( Ωit_788 = -> evaluate.posnaught.integer       Infinity        ), { 'posnaught.integer': false }
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
      @eq ( Ωit_789 = -> ( new Intertype() ).declare { foo: 'float', } ), null
      @eq ( Ωit_790 = -> ( new Intertype() ).declare { foo: 'text',  } ), null
      # ( new Intertype() ).declare { foo: 'optional', }
      @throws ( Ωit_791 = -> ( new Intertype() ).declare { foo: 'optional', }        ), /illegal use of 'optional' in declaration of type 'foo'/
      @throws ( Ωit_792 = -> ( new Intertype() ).declare { foo: 'qqq', }             ), /unknown type 'qqq'/
      @throws ( Ωit_793 = -> ( new Intertype() ).declare { foo: 'optional.float', }  ), /illegal use of 'optional' in declaration of type 'foo'/
      @throws ( Ωit_794 = -> ( new Intertype() ).declare { foo: 'anything.float', }  ), /illegal use of basetype 'anything' in declaration of type 'foo'/
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
      @eq ( Ωit_795 = -> isa.normalfloat                     0     ), true
      @eq ( Ωit_796 = -> isa.normalfloat                     null  ), false
      @eq ( Ωit_797 = -> isa.normalfloat                     -1    ), false
      @eq ( Ωit_798 = -> isa.normalfloat                     '?'   ), false
      @eq ( Ωit_799 = -> isa.optional.normalfloat            0     ), true
      @eq ( Ωit_800 = -> isa.optional.normalfloat            null  ), true
      @eq ( Ωit_801 = -> isa.optional.normalfloat            -1    ), false
      @eq ( Ωit_802 = -> isa.optional.normalfloat            '?'   ), false
      @eq ( Ωit_803 = -> validate.normalfloat                0     ), 0
      @eq ( Ωit_804 = -> validate.optional.normalfloat       0     ), 0
      @eq ( Ωit_805 = -> validate.optional.normalfloat       null  ), null
      @throws ( Ωit_806 = -> validate.normalfloat           null ), /expected a normalfloat, got a null/
      @throws ( Ωit_807 = -> validate.normalfloat           -1   ), /expected a normalfloat, got a float/
      @throws ( Ωit_808 = -> validate.normalfloat           '?'  ), /expected a normalfloat, got a text/
      @throws ( Ωit_809 = -> validate.optional.normalfloat  -1   ), /expected an optional normalfloat, got a float/
      @throws ( Ωit_810 = -> validate.optional.normalfloat  '?'  ), /expected an optional normalfloat, got a text/
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
      @eq ( Ωit_811 = -> isa.quantity            { q: 1, u: 'm', }   ), true
      @eq ( Ωit_812 = -> isa.quantity            null                ), false
      @eq ( Ωit_813 = -> isa.optional.quantity   { q: 2, u: 'm', }   ), true
      @eq ( Ωit_814 = -> isa.optional.quantity   null                ), true
      @eq ( Ωit_815 = -> validate.quantity               { q: 3, u: 'm', } ), { q: 3, u: 'm', }
      @eq ( Ωit_816 = -> validate.optional.quantity      { q: 4, u: 'm', } ), { q: 4, u: 'm', }
      @eq ( Ωit_817 = -> validate.optional.quantity.q    null  ), null
      @eq ( Ωit_818 = -> validate.optional.quantity.q    111   ), 111
      @eq ( Ωit_819 = -> isa.quantity                     null               ), false
      @eq ( Ωit_820 = -> isa.quantity                     -1                 ), false
      @eq ( Ωit_821 = -> isa.quantity                     '?'                ), false
      @eq ( Ωit_822 = -> isa.quantity.q                   '?'                ), false
      @eq ( Ωit_823 = -> isa.quantity.q                   3                  ), true
      @eq ( Ωit_824 = -> isa.optional.quantity            { q: 1, u: 'm', }  ), true
      @eq ( Ωit_825 = -> isa.optional.quantity            null               ), true
      @eq ( Ωit_826 = -> isa.optional.quantity            -1                 ), false
      @eq ( Ωit_827 = -> isa.optional.quantity            '?'                ), false
      @eq ( Ωit_828 = -> isa.optional.quantity.q          '?'                ), false
      @eq ( Ωit_829 = -> isa.optional.quantity.q          3                  ), true
      @eq ( Ωit_830 = -> validate.quantity                { q: 1, u: 'm', }  ), { q: 1, u: 'm', }
      @eq ( Ωit_831 = -> validate.optional.quantity       { q: 1, u: 'm', }  ), { q: 1, u: 'm', }
      @eq ( Ωit_832 = -> validate.optional.quantity       null               ), null
      @throws ( Ωit_833 = -> validate.quantity           { q: 5, }  ), /expected a quantity, got a object/ ### TAINT message should be more specific ###
      @throws ( Ωit_834 = -> validate.quantity            null      ), /expected a quantity, got a null/
      @throws ( Ωit_835 = -> validate.quantity            -1        ), /expected a quantity, got a float/
      @throws ( Ωit_836 = -> validate.quantity            '?'       ), /expected a quantity, got a text/
      @throws ( Ωit_837 = -> validate.quantity            { q: 1, } ), /expected a quantity, got a object/ ### TAINT message should be more specific ###
      @throws ( Ωit_838 = -> validate.optional.quantity   -1        ), /expected an optional quantity, got a float/
      @throws ( Ωit_839 = -> validate.optional.quantity   { q: 1, } ), /expected an optional quantity, got a object/ ### TAINT message should be more specific ###
      @throws ( Ωit_840 = -> validate.optional.quantity.q { q: 1, } ), /expected an optional quantity.q, got a object/
      @throws ( Ωit_841 = -> validate.optional.quantity.q 3, 4, 5   ), /method 'validate.optional.quantity.q' expects 1 arguments, got 3/
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  declaration_role_field: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      { declarations  } = new Intertype()
      @eq ( Ωit_842 = -> declarations.float.role     ), 'usertype'
      @eq ( Ωit_843 = -> declarations.null.role      ), 'basetype'
      @eq ( Ωit_844 = -> declarations.anything.role  ), 'basetype'
      @eq ( Ωit_845 = -> declarations.unknown.role   ), 'basetype'
      @eq ( Ωit_846 = -> declarations.optional.role  ), 'optional'
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
      @eq ( Ωit_847 = -> type_of null              ), 'null'
      @eq ( Ωit_848 = -> type_of undefined         ), 'undefined'
      @eq ( Ωit_849 = -> type_of +Infinity         ), 'unknown'
      @eq ( Ωit_850 = -> type_of 4                 ), 'unknown'
      return null
    #.........................................................................................................
    do =>
      @eq ( Ωit_851 = -> isa.anything   1          ), true
      @eq ( Ωit_852 = -> isa.nothing    1          ), false
      @eq ( Ωit_853 = -> isa.something  1          ), true
      @eq ( Ωit_854 = -> isa.unknown    1          ), true
      return null
    #.........................................................................................................
    do =>
      @eq ( Ωit_855 = -> isa.anything   null       ), true
      @eq ( Ωit_856 = -> isa.nothing    null       ), true
      @eq ( Ωit_857 = -> isa.something  null       ), false
      @eq ( Ωit_858 = -> isa.unknown    null       ), false
      return null
    #.........................................................................................................
    do =>
      @eq ( Ωit_859 = -> isa.anything   undefined  ), true
      @eq ( Ωit_860 = -> isa.nothing    undefined  ), true
      @eq ( Ωit_861 = -> isa.something  undefined  ), false
      @eq ( Ωit_862 = -> isa.unknown    undefined  ), false
      return null
    #.........................................................................................................
    do =>
      @throws ( Ωit_863 = -> isa.optional 1      ), /`optional` is not a legal type for `isa` methods/
      @throws ( Ωit_864 = -> validate.optional 1 ), /`optional` is not a legal type for `validate` methods/
      @throws ( Ωit_865 = -> create.optional 1   ), /`optional` is not a legal type for `create` methods/
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
    @eq ( Ωit_866 = -> types.create.foobar { foo: 8, bar: 9, } ), { foo: 8, bar: 9, }
    @eq ( Ωit_867 = -> types.create.foobar { foo: 8,         } ), { foo: 8, bar: 5, }
    @eq ( Ωit_868 = -> types.create.foobar { foo: 4, bar: 5, } ), { foo: 4, bar: 5, }
    @eq ( Ωit_869 = -> types.create.foobar {                 } ), { foo: 4, bar: 5, }
    @eq ( Ωit_870 = -> types.create.foobar undefined           ), { foo: 4, bar: 5, }
    @eq ( Ωit_871 = -> types.create.foobar null                ), { foo: 4, bar: 5, }
    return null

  #---------------------------------------------------------------------------------------------------------
  can_use_values_of_unknown_type: ->
    do =>
      { Intertype_minimal, } = require '../../../apps/intertype'
      types = new Intertype_minimal()
      types.declare thirtyone: ( x ) -> x is 31
      @eq ( Ωit_872 = -> types.type_of 31        ), 'thirtyone'
      @eq ( Ωit_873 = -> types.type_of 32        ), 'unknown'
      @eq ( Ωit_874 = -> types.isa.thirtyone 31  ), true
      @eq ( Ωit_875 = -> types.isa.thirtyone 32  ), false
      @eq ( Ωit_876 = -> types.type_of new Map() ), 'unknown'
      return null
    #.......................................................................................................
    do =>
      { Intertype_minimal, } = require '../../../apps/intertype'
      types = new Intertype_minimal()
      types.declare thirtyone:  ( x ) -> ( @isa.float x ) and ( x is 31 )
      ### this used to be a problem        ^^^^ ###
      types.declare float:      ( x ) -> Number.isFinite x
      @eq ( Ωit_877 = -> types.type_of 31        ), 'thirtyone'
      @eq ( Ωit_878 = -> types.type_of 32        ), 'float'
      @eq ( Ωit_879 = -> types.isa.thirtyone 31  ), true
      @eq ( Ωit_880 = -> types.isa.thirtyone 32  ), false
      @eq ( Ωit_881 = -> types.type_of new Map() ), 'unknown'
      return null
    #.......................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  advanced_types: ->
    { Intertype, } = require '../../../apps/intertype'
    types = new Intertype()
    @eq ( Ωit_882 = -> types.type_of new Set() ), 'set'
    @eq ( Ωit_883 = -> types.type_of new Map() ), 'map'
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
    @eq ( Ωit_884 = -> types.declarations.integer.kind  ), 'float'
    @eq ( Ωit_885 = -> types.declarations.foo.type      ), 'foo'
    @eq ( Ωit_886 = -> types.declarations.foo.kind      ), 'object'
    @eq ( Ωit_887 = -> types.declarations.foo.role      ), 'usertype'
    @eq ( Ωit_888 = -> types.declarations.bar.type      ), 'bar'
    @eq ( Ωit_889 = -> types.declarations.bar.kind      ), 'foo'
    @eq ( Ωit_890 = -> types.declarations.bar.role      ), 'usertype'
    return null

  #=========================================================================================================
  Naming:

    #-------------------------------------------------------------------------------------------------------
    type: ->
      { Intertype, } = require '../../../apps/intertype'
      t2 = new Intertype()
      for type, declaration of t2.declarations
        @eq ( Ωit_891 = -> declaration.type is type ), true
      return null

    #-------------------------------------------------------------------------------------------------------
    validate_methods: ->
      { Intertype, } = require '../../../apps/intertype'
      t2 = new Intertype()
      @eq ( Ωit_892 = -> t2.validate.asyncfunction.name          ), 'validate.asyncfunction'
      @eq ( Ωit_893 = -> t2.validate.optional.asyncfunction.name ), 'validate.optional.asyncfunction'
      return null

    #-------------------------------------------------------------------------------------------------------
    isa_methods: ->
      { Intertype, } = require '../../../apps/intertype'
      t2 = new Intertype()
      @eq ( Ωit_894 = -> t2.isa.asyncfunction.name               ), 'isa.asyncfunction'
      @eq ( Ωit_895 = -> t2.isa.optional.asyncfunction.name      ), 'isa.optional.asyncfunction'
      @eq ( Ωit_896 = -> t2.isa.null?.name                       ), 'isa.null'
      @eq ( Ωit_897 = -> t2.isa.function?.name                   ), 'isa.function'
      @eq ( Ωit_898 = -> t2.isa.boolean?.name                    ), 'isa.boolean'
      @eq ( Ωit_899 = -> t2.isa.text?.name                       ), 'isa.text'
      @eq ( Ωit_900 = -> t2.isa.asyncfunction?.name              ), 'isa.asyncfunction'
      return null

    #-------------------------------------------------------------------------------------------------------
    create_methods: ->
      { Intertype, } = require '../../../apps/intertype'
      t2 = new Intertype()
      @eq ( Ωit_901 = -> t2.create.function.name               ), 'create.function'
      @eq ( Ωit_902 = -> t2.create.float.name                  ), 'create.float'
      return null

  #=========================================================================================================
  Create_methods:

    #-------------------------------------------------------------------------------------------------------
    floats: ->
      { Intertype, } = require '../../../apps/intertype'
      t2 = new Intertype()
      @eq     ( Ωit_903 = -> t2.create.float()              ), 0
      @eq     ( Ωit_904 = -> t2.create.float +0             ), 0
      @eq     ( Ωit_905 = -> t2.create.float -0             ), 0
      @eq     ( Ωit_906 = -> t2.create.float false          ), 0
      @eq     ( Ωit_907 = -> t2.create.float true           ), 1
      @eq     ( Ωit_908 = -> t2.create.float 12.34          ), 12.34
      @eq     ( Ωit_909 = -> t2.create.float '12.34'        ), 12.34
      @eq     ( Ωit_910 = -> t2.create.float +12.34         ), 12.34
      @eq     ( Ωit_911 = -> t2.create.float '+12.34'       ), 12.34
      @eq     ( Ωit_912 = -> t2.create.float -12.34         ), -12.34
      @eq     ( Ωit_913 = -> t2.create.float '-12.34'       ), -12.34
      @eq     ( Ωit_914 = -> t2.create.float null           ), 0
      @eq     ( Ωit_915 = -> t2.create.float undefined      ), 0
      @throws ( Ωit_916 = -> t2.create.float ''             ), /these arguments are not suitable for `create.float\(\)`: ''/
      return null

    #-------------------------------------------------------------------------------------------------------
    integers: ->
      { Intertype, } = require '../../../apps/intertype'
      t2 = new Intertype()
      @eq     ( Ωit_917 = -> t2.create.integer()              ), 0
      @eq     ( Ωit_918 = -> t2.create.integer +0             ), 0
      @eq     ( Ωit_919 = -> t2.create.integer -0             ), 0
      @eq     ( Ωit_920 = -> t2.create.integer false          ), 0
      @eq     ( Ωit_921 = -> t2.create.integer true           ), 1
      @eq     ( Ωit_922 = -> t2.create.integer 12.34          ), 12
      @eq     ( Ωit_923 = -> t2.create.integer '12'           ), 12
      @eq     ( Ωit_924 = -> t2.create.integer +12            ), 12
      @eq     ( Ωit_925 = -> t2.create.integer '+12'          ), 12
      @eq     ( Ωit_926 = -> t2.create.integer -12            ), -12
      @eq     ( Ωit_927 = -> t2.create.integer '-12'          ), -12
      @eq     ( Ωit_928 = -> t2.create.integer null           ), 0
      @eq     ( Ωit_929 = -> t2.create.integer undefined      ), 0
      @throws ( Ωit_930 = -> t2.create.integer ''             ), /these arguments are not suitable for `create.integer\(\)`: ''/
      return null

    #-------------------------------------------------------------------------------------------------------
    cardinals: ->
      { Intertype, } = require '../../../apps/intertype'
      t2 = new Intertype()
      @eq     ( Ωit_931 = -> t2.create.cardinal()              ), 0
      @eq     ( Ωit_932 = -> t2.create.cardinal +0             ), +0
      @eq     ( Ωit_933 = -> t2.create.cardinal -0             ), -0
      @eq     ( Ωit_934 = -> t2.create.cardinal false          ), 0
      @eq     ( Ωit_935 = -> t2.create.cardinal true           ), 1
      @eq     ( Ωit_936 = -> t2.create.cardinal 12.34          ), 12
      @eq     ( Ωit_937 = -> t2.create.cardinal '12'           ), 12
      @eq     ( Ωit_938 = -> t2.create.cardinal +12            ), 12
      @eq     ( Ωit_939 = -> t2.create.cardinal '+12'          ), 12
      @throws ( Ωit_940 = -> t2.create.cardinal -12            ), /these arguments are not suitable for `create.cardinal\(\)`: -12/
      @throws ( Ωit_941 = -> t2.create.cardinal '-12'          ), /these arguments are not suitable for `create.cardinal\(\)`: '-12'/
      @eq     ( Ωit_942 = -> t2.create.cardinal null           ), 0
      @eq     ( Ωit_943 = -> t2.create.cardinal undefined      ), 0
      @throws ( Ωit_944 = -> t2.create.cardinal ''             ), /these arguments are not suitable for `create.cardinal\(\)`: ''/
      return null

    #-------------------------------------------------------------------------------------------------------
    texts: ->
      { Intertype, } = require '../../../apps/intertype'
      t2 = new Intertype()
      @eq     ( Ωit_945 = -> t2.create.text()              ), ''
      @eq     ( Ωit_946 = -> t2.create.text +0             ), '0'
      @eq     ( Ωit_947 = -> t2.create.text -0             ), '-0'
      @eq     ( Ωit_948 = -> t2.create.text false          ), 'false'
      @eq     ( Ωit_949 = -> t2.create.text true           ), 'true'
      @eq     ( Ωit_950 = -> t2.create.text 12.34          ), '12.34'
      @eq     ( Ωit_951 = -> t2.create.text '12'           ), '12'
      @eq     ( Ωit_952 = -> t2.create.text +12            ), '12'
      @eq     ( Ωit_953 = -> t2.create.text '+12'          ), '+12'
      @eq     ( Ωit_954 = -> t2.create.text -12            ), '-12'
      @eq     ( Ωit_955 = -> t2.create.text '-12'          ), '-12'
      @eq     ( Ωit_956 = -> t2.create.text null           ), ''
      @eq     ( Ωit_957 = -> t2.create.text undefined      ), ''
      @eq     ( Ωit_958 = -> t2.create.text ''             ), ''
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
              debug 'Ω_959', "create.quantity( #{rpr x} )"
              debug 'Ω_960', { @declarations.quantity.template..., x..., }
              return { @declarations.quantity.template..., x..., }
          'quantity.q':
            test: 'float'
            create: ( x ) ->
              has_been_called.create_quantity_q++
              debug 'Ω_961', "create.quantity.q( #{rpr x} )"
              return 0
          'quantity.u':
            test: 'text'
            create: ( x ) ->
              has_been_called.create_quantity_u++
              debug 'Ω_962', "create.quantity.u( #{rpr x} )"
              return 'u'
        t2 = new Intertype declarations
        @eq     ( Ωit_963 = -> t2.create.quantity()               ), { q: 0, u: 'u', }
        @eq     ( Ωit_964 = -> has_been_called.create_quantity    ), 1
        @eq     ( Ωit_965 = -> has_been_called.create_quantity_q  ), 1
        @eq     ( Ωit_966 = -> has_been_called.create_quantity_u  ), 1
        @eq     ( Ωit_967 = -> t2.create.quantity '12.5m'         ), { q: 12.5, u: 'm', }
        @eq     ( Ωit_968 = -> t2.create.quantity.q()             ), 0
        @eq     ( Ωit_969 = -> t2.create.quantity.u()             ), 'u'
        @eq     ( Ωit_970 = -> t2.create[ 'quantity.q' ]()        ), 0
        @eq     ( Ωit_971 = -> t2.create[ 'quantity.u' ]()        ), 'u'
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
        @eq     ( Ωit_972 = -> t2.create.quantity()               ), { q: 0, u: 'u', }
        @eq     ( Ωit_973 = -> t2.create.quantity '12.5m'         ), { q: 12.5, u: 'm', }
        @eq     ( Ωit_974 = -> t2.create.quantity.q()             ), 0
        @eq     ( Ωit_975 = -> t2.create.quantity.u()             ), 'u'
        @eq     ( Ωit_976 = -> t2.create[ 'quantity.q' ]()        ), 0
        @eq     ( Ωit_977 = -> t2.create[ 'quantity.u' ]()        ), 'u'
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
        debug 'Ωit_978', t2.declarations[ 'literal.float'   ].create '123.456e4'
        debug 'Ωit_979', t2.declarations[ 'literal.integer' ].create '123.456'
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
              debug 'Ω_980', { x, }
              has_been_called.create_quantity++
              { q: 0, u: 'u', x..., }
        #...................................................................................................
        t2 = new Intertype declarations
        @eq     ( Ωit_981 = -> t2.create.float()                  ), 0
        @eq     ( Ωit_982 = -> t2.create.float1()                 ), 0
        @eq     ( Ωit_983 = -> t2.create.float2()                 ), 0
        @eq     ( Ωit_984 = -> t2.create.float3()                 ), 0
        @eq     ( Ωit_985 = -> t2.create.float4()                 ), 0
        @eq     ( Ωit_986 = -> t2.create.quantity()               ), { q: 0, u: 'u', }
        @eq     ( Ωit_987 = -> t2.create.quantity { q: 1, }       ), { q: 1, u: 'u', }
        @eq     ( Ωit_988 = -> t2.create.quantity { u: 'm', }     ), { q: 0, u: 'm', }
        @eq     ( Ωit_989 = -> has_been_called.create_quantity    ), 3
        # @eq     ( Ωit_990 = -> t2.declarations.mass.kind          ), 'quantity'
        # @eq     ( Ωit_991 = -> t2.create[ 'quantity.q' ]()        ), 0
        # @eq     ( Ωit_992 = -> t2.create[ 'quantity.u' ]()        ), 'u'
        # #...................................................................................................
        # @eq     ( Ωit_993 = -> t2.create.mass()                   ), { q: 0, u: 'u', }
        # @eq     ( Ωit_994 = -> t2.create[ 'foo.bar.baz' ]()       ), { q: 0, u: 'u', }
        # @eq     ( Ωit_995 = -> t2.create.quantity.q()             ), 0
        # @eq     ( Ωit_996 = -> t2.create.quantity.u()             ), 'u'
        # @eq     ( Ωit_997 = -> t2.create.foo.bar.baz()            ), { q: 0, u: 'u', }
        # debug 'Ωit_998', t2.create.float
        # debug 'Ωit_999', t2.create.quantity
        debug 'Ωit1000', has_been_called
        debug 'Ωit1001', has_been_called.create_quantity
        return null
      #.....................................................................................................
      return null

    # #-------------------------------------------------------------------------------------------------------
    # posnaught_integers: ->
    #   { Intertype, } = require '../../../apps/intertype'
    #   t2 = new Intertype()
    #   @eq     ( Ωit1002 = -> t2.create.posnaught.integer()              ), 0
    #   @eq     ( Ωit1003 = -> t2.create.posnaught.integer +0             ), 0
    #   @eq     ( Ωit1004 = -> t2.create.posnaught.integer -0             ), 0
    #   @eq     ( Ωit1005 = -> t2.create.posnaught.integer false          ), 0
    #   @eq     ( Ωit1006 = -> t2.create.posnaught.integer true           ), 1
    #   @eq     ( Ωit1007 = -> t2.create.posnaught.integer 12.34          ), 12
    #   @eq     ( Ωit1008 = -> t2.create.posnaught.integer '12'           ), 12
    #   @eq     ( Ωit1009 = -> t2.create.posnaught.integer +12            ), 12
    #   @eq     ( Ωit1010 = -> t2.create.posnaught.integer '+12'          ), 12
    #   @eq     ( Ωit1011 = -> t2.create.posnaught.integer -12            ), -12
    #   @eq     ( Ωit1012 = -> t2.create.posnaught.integer '-12'          ), -12
    #   @eq     ( Ωit1013 = -> t2.create.posnaught.integer null           ), 0
    #   @eq     ( Ωit1014 = -> t2.create.posnaught.integer undefined      ), 0
    #   @throws ( Ωit1015 = -> t2.create.posnaught.integer ''             ), /these arguments are not suitable for `create.posnaught.integer\(\)`: \[ '' \]/
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
#       debug 'Ωit1016', format_error_stack error.stack
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
#       debug 'Ωit1017', format_error_stack error.stack
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

