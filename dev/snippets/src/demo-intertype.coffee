


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
  whisper }               = GUY.trm.get_loggers 'demo-execa'
{ rpr
  inspect
  echo
  reverse
  bold
  log     }               = GUY.trm
{ hide }                  = GUY.props
{ props: {
    nameit } }            = require '../../../apps/webguy'


############################################################################################################
require_intertype = ->

  #===========================================================================================================
  $isa =
    text:     ( x ) -> typeof x is 'string'
    function: ( x ) -> ( Object::toString.call x ) is '[object Function]'

  #-----------------------------------------------------------------------------------------------------------
  $type_of = ( x ) ->
    return 'null'         if x is null
    return 'undefined'    if x is undefined
    return 'infinity'     if x is +Infinity
    return 'infinity'     if x is -Infinity
    return 'boolean'      if x is true
    return 'boolean'      if x is false
    return 'text'         if $isa.text      x
    return 'function'     if $isa.function  x
    return 'something'

  #===========================================================================================================
  class Types

    #---------------------------------------------------------------------------------------------------------
    constructor: ( cfg ) ->
      hide @, 'isa',      @isa.bind       @
      hide @, 'validate', @validate.bind  @
      hide @, 'create',   @create.bind    @
      hide @, 'type_of',  @type_of.bind   @
      hide @, 'memo',     new Map()
      return undefined

    #---------------------------------------------------------------------------------------------------------
    isa: ( type, x ) ->
      ### TAINT use proper validation ###
      unless type instanceof Type
        throw new Error "Ω___1 expected an instance of `Type`, got a #{$type_of R}"
      unless ( R = type.isa.call type.$typespace, x, @ ) in [ true, false, ]
        throw new Error "Ω___2 expected `true` or `false`, got a #{$type_of R}"
      return R

    #---------------------------------------------------------------------------------------------------------
    type_of: ( x ) -> 'something'

    #---------------------------------------------------------------------------------------------------------
    validate: ( type, x ) ->
      return x if @isa type, x
      throw new Error "Ω___3 expected a #{type.$typename}, got a #{$type_of x}"

    #---------------------------------------------------------------------------------------------------------
    create: ( type, P... ) ->
      throw new Error "Ω___4 not yet implemented"

    #---------------------------------------------------------------------------------------------------------
    # evaluate: ( ??? ) ->

  #===========================================================================================================
  class Type

    #---------------------------------------------------------------------------------------------------------
    constructor: ( typespace, typename, declaration ) ->
      @$typename = typename # hide @, '$typename',  typename
      hide @, '$typespace', typespace
      @_compile_fields typespace, typename, declaration if declaration.fields?
      #.......................................................................................................
      ### TAINT this is defective w/out proper validation ###
      for key, value of declaration
        nameit typename, value if key is 'isa' # check that value is function?
        hide @, key, value
      return undefined

    #---------------------------------------------------------------------------------------------------------
    _compile_fields: ( typespace, typename, declaration ) ->
      debug 'Ω___5', { typename, declaration, }
      # #.......................................................................................................
      # ### TAINT try to move this check to validation step ###
      # if declaration.isa?
      #   throw new Error "Ω___6 must have exactly one of `isa` or `fields`, not both"
      # # for field_name, field_declaration of declaration.fields
      # #   field = new Type typespace, field_name, field_declaration
      # #   debug 'Ω___7', { typename, field_name, field_declaration, }, field.$typename, field.isa
      # debug 'Ω___8', new Typespace declaration.fields
      return null

  #===========================================================================================================
  class Typespace

    #---------------------------------------------------------------------------------------------------------
    constructor: ( typespace_cfg ) ->
      for typename, declaration of typespace_cfg
        #.....................................................................................................
        switch true
          #...................................................................................................
          when $isa.text declaration
            declaration = do ( typeref = declaration ) => { isa: ( ( x, t ) -> t.isa @[ typeref ], x ), }
          #...................................................................................................
          when $isa.function declaration
            declaration = { isa: declaration, }
          #...................................................................................................
          when declaration instanceof Type    then null
          when declaration instanceof Object  then null
          #...................................................................................................
          else
            throw new Error "Ω___9 expected a typename, a function or a type as declaration, got a #{$type_of declaration}"
        #.....................................................................................................
        declaration   = new Type @, typename, declaration unless declaration instanceof Type
        @[ typename ] = declaration
      return undefined


  #===========================================================================================================
  std = new Typespace
    #.........................................................................................................
    quantity:
      fields:
        # each field becomes a `Type` instance; strings may refer to names in the same typespace
        q:    'float'
        u:    'nonempty_text'
      template:
        q:    0
        u:    'u'
    #.........................................................................................................
    integer:
      isa:    ( x, t ) -> Number.isInteger x
      foo:    4
    odd:
      isa:    ( x, t ) -> ( t.isa @integer, x ) and ( x %% 2 isnt 0 )
    # short form just assigns either a test method or a type name:
    even:           ( x, t ) -> ( t.isa @integer, x ) and ( x %% 2 is 0 )
    float:          ( x, t ) -> Number.isFinite x
    bigint:         ( x, t ) -> typeof x is 'bigint'
    text:           ( x, t ) -> typeof x is 'string'
    nonempty_text:  ( x, t ) -> ( t.isa @text, x ) and ( x.length > 0 )
    #.........................................................................................................
    # numerical:      ( x, t ) -> ( t.isa @float, x   ) or ( t.isa @bigint, x )
    # positive0:      ( x, t ) -> ( t.isa @float, x   ) and ( x >= +0  )
    # positive1:      ( x, t ) -> ( t.isa @float, x   ) and ( x >= +1  )
    # negative0:      ( x, t ) -> ( t.isa @float, x   ) and ( x <=  0  )
    # negative1:      ( x, t ) -> ( t.isa @float, x   ) and ( x <= -1  )
    # cardinal:       ( x, t ) -> ( t.isa @integer, x ) and ( t.isa @positive0, x )
    #.........................................................................................................
    # cardinalbigint: ( x, t ) -> ( t.isa @bigint, x    ) and ( x >= +0 )
    #.........................................................................................................
    # circle1:  'circle2'
    # circle2:  'circle3'
    # circle3:  'circle1'
    #.........................................................................................................
    weird:    'strange' # declares another name for `odd`
    strange:  'odd'     # declares another name for `odd`
    abnormal: 'weird'   # declares another name for `odd`


  #===========================================================================================================
  flatly_1 = new Typespace
    evenly:       'flat'
    flat:         ( x, t ) -> t.isa std.even, x
    plain:        'evenly'
    # foo:          'bar'

  #-----------------------------------------------------------------------------------------------------------
  flatly_2 = new Typespace
    evenly:       'flat'
    flat:         std.even
    plain:        'evenly'



  #%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  return { Types, Type, Typespace, \
    std, \
    flatly_1, flatly_2, \
    types: ( new Types() ), }


#===========================================================================================================
if module is require.main then await do =>
  { types
    flatly_1
    flatly_2
    std             } = require_intertype()
  info 'Ω__10', std
  info 'Ω__11', flatly_1
  info 'Ω__12', flatly_2
  info 'Ω__13', flatly_1.flat
  info 'Ω__14', flatly_2.flat
  info 'Ω__15', std.text.nonempty
  #.........................................................................................................
  echo()
  help 'Ω__16', GUY.trm.truth     types.isa       std.integer,      5
  help 'Ω__17', GUY.trm.truth     types.isa       std.odd,          5
  help 'Ω__18', GUY.trm.truth     types.isa       std.even,         6
  help 'Ω__19', GUY.trm.truth     types.isa       std.strange,      5
  help 'Ω__20', GUY.trm.truth     types.isa       std.weird,        5
  help 'Ω__21', GUY.trm.truth     types.isa       std.abnormal,     5
  help 'Ω__22', GUY.trm.truth     types.isa       flatly_1.flat,    8
  help 'Ω__23', GUY.trm.truth     types.isa       flatly_1.evenly,  8
  help 'Ω__24', GUY.trm.truth     types.isa       flatly_1.plain,   8
  help 'Ω__25', GUY.trm.truth     types.isa       flatly_2.flat,    8
  help 'Ω__26', GUY.trm.truth     types.isa       flatly_2.evenly,  8
  help 'Ω__27', GUY.trm.truth     types.isa       flatly_2.plain,   8
  help 'Ω__28', GUY.trm.truth     types.isa       std.nonempty_text, 'abc'
  # help 'Ω__29', GUY.trm.truth     types.isa       std.quantity.fields.q,   123.456
  # help 'Ω__30', GUY.trm.truth     types.isa       std.quantity.fields.u,   'm'
  # help 'Ω__31', GUY.trm.truth     types.isa       std.quantity,     { q: 123.456, u: 'm', }
  #.........................................................................................................
  echo()
  help 'Ω__32', GUY.trm.truth     types.isa       std.integer,      5.3
  help 'Ω__33', GUY.trm.truth     types.isa       std.odd,          6
  help 'Ω__34', GUY.trm.truth     types.isa       std.odd,          5.3
  help 'Ω__35', GUY.trm.truth     types.isa       std.even,         5
  help 'Ω__36', GUY.trm.truth     types.isa       std.strange,      6
  help 'Ω__37', GUY.trm.truth     types.isa       std.weird,        6
  help 'Ω__38', GUY.trm.truth     types.isa       std.abnormal,     6
  help 'Ω__39', GUY.trm.truth     types.isa       flatly_1.evenly,  5
  help 'Ω__40', GUY.trm.truth     types.isa       flatly_1.flat,    5
  help 'Ω__41', GUY.trm.truth     types.isa       flatly_1.plain,   5
  help 'Ω__42', GUY.trm.truth     types.isa       flatly_2.flat,    5
  help 'Ω__43', GUY.trm.truth     types.isa       flatly_2.evenly,  5
  help 'Ω__44', GUY.trm.truth     types.isa       flatly_2.plain,   5
  help 'Ω__45', GUY.trm.truth     types.isa       std.nonempty_text, ''
  # help 'Ω__46', GUY.trm.truth     types.isa       std.quantity.fields.q,   '123.456'
  # help 'Ω__47', GUY.trm.truth     types.isa       std.quantity.fields.u,   ''
  # help 'Ω__48', GUY.trm.truth     types.isa       std.quantity,     { q: 123.456, u: '', }
  # help 'Ω__49', GUY.trm.truth     types.isa       std.quantity,     { q: null, u: 'm', }
  #.........................................................................................................
  echo()
  # help 'Ω__50', GUY.trm.truth     types.isa       std.cardinal, 6
  # help 'Ω__51', GUY.trm.truth     types.isa       std.cardinal, 0
  # help 'Ω__52', GUY.trm.truth     types.isa       std.cardinal, -1
  # #.........................................................................................................
  help 'Ω__53', try               types.validate  std.integer,  5       catch e then warn 'Ω__54', e.message
  help 'Ω__55', try               types.validate  std.integer,  5.3     catch e then warn 'Ω__56', e.message
  # info 'Ω__57', std.weird
  # info 'Ω__58', std.weird.isa
  # info 'Ω__59', std.weird.isa.toString()



