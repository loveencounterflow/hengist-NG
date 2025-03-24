


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
{ Ltsort }                = require '../../../apps/ltsort'
misfit                    = Symbol 'misfit'


############################################################################################################
require_intertype = ->

  #===========================================================================================================
  $isa =
    text:     ( x ) -> typeof x is 'string'
    function: ( x ) -> ( Object::toString.call x ) is '[object Function]'

  #-----------------------------------------------------------------------------------------------------------
  $type_of = ( x ) -> 'something'

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
      #.......................................................................................................
      # ### Compile fields: ###
      # if declaration.fields?
      #   do =>
      #     ### TAINT try to move this check to validation step ###
      #     if declaration.isa?
      #       throw new Error "Ω___5 must have exactly one of `isa` or `fields`, not both"
      #     # for field_name, field_declaration of declaration.fields
      #     #   field = new Type typespace, field_name, field_declaration
      #     #   debug 'Ω___6', { typename, field_name, field_declaration, }, field.$typename, field.isa
      #     debug 'Ω___7', new Typespace declaration.fields
      #.......................................................................................................
      ### TAINT this is defective w/out proper validation ###
      for key, value of declaration
        nameit typename, value if key is 'isa' # check that value is function?
        hide @, key, value
      return undefined

  #===========================================================================================================
  class Typespace

    #---------------------------------------------------------------------------------------------------------
    constructor: ( typespace_cfg ) ->
      typenames     = @_amend_and_sort_typenames typespace_cfg
      for typename in typenames
        unless ( declaration = typespace_cfg[ typename ] )?
          throw new Error "Ω___8 unknown typename #{rpr typename}"
        #.....................................................................................................
        switch true
          #...................................................................................................
          when $isa.text declaration
            typeref = declaration
            unless ( deref = @[ typeref ] ) instanceof Type
              ### TAINT should this error occur, its message is probably not meaningful to user ###
              throw new Error "Ω___9 expected type reference #{rpr typename} → #{rpr typeref} to dereference to a `Type`, got #{rpr deref} instead"
            declaration = do ( deref ) => { isa: ( ( x, t ) -> t.isa deref, x ), }
          #...................................................................................................
          when $isa.function declaration
            declaration = { isa: declaration, }
          #...................................................................................................
          when declaration instanceof Type    then null
          when declaration instanceof Object  then null
          #...................................................................................................
          else
            throw new Error "Ω__10 expected a typename, a function or a type as declaration, got a #{$type_of declaration}"
        #.....................................................................................................
        declaration   = new Type @, typename, declaration unless declaration instanceof Type
        @[ typename ] = declaration
      return undefined

    #---------------------------------------------------------------------------------------------------------
    _amend_and_sort_typenames: ( typespace_cfg ) ->
      ### Given a `typespace_cfg`, return a list of names such that the declarative dependencies (where the
      type is defined by the name of another type in the typespace) can be resolved at compile time ###
      ### TAINT re-throw cycle error ###
      g = new Ltsort()
      for name, declaration of typespace_cfg
        if $isa.text declaration then g.add { name, needs: declaration, }
        else                          g.add { name, }
      return g.linearize { groups: false, }

  #===========================================================================================================
  std = new Typespace
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
    #.........................................................................................................
    # quantity:
    #   # isa: ->
    #   # each field becomes an `Type` instance; strings may refer to names in the same typespace
    #   fields:
    #     q:    'float'
    #     u:    'nonemptytext'
    #   template:
    #     q:    0
    #     u:    'u'

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

  # extras = new Typespace std,
  #   nonemptytext:   ( x, t ) -> ( t.isa @text, x ) and x.length > 0

  # quantity = new Typespace std,
  #   nonemptytext:   ( x, t ) -> ( t.isa @text, x ) and x.length > 0
  #   fields: new Typespace std,
  #   q:              'float'
  #   u:              'nonemptytext'
  #   # template:
  #   #   q:    0
  #   #   u:    'u'


  #%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  return { Types, Type, Typespace, std, flatly_1, flatly_2, types: ( new Types() ), }


#===========================================================================================================
if module is require.main then await do =>
  { types
    flatly_1
    flatly_2
    std             } = require_intertype()
  info 'Ω__11', std
  info 'Ω__12', flatly_1
  info 'Ω__13', flatly_2
  info 'Ω__14', flatly_1.flat
  info 'Ω__15', flatly_2.flat
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
  #.........................................................................................................
  echo()
  help 'Ω__28', GUY.trm.truth     types.isa       std.integer,      5.3
  help 'Ω__29', GUY.trm.truth     types.isa       std.odd,          6
  help 'Ω__30', GUY.trm.truth     types.isa       std.odd,          5.3
  help 'Ω__31', GUY.trm.truth     types.isa       std.even,         5
  help 'Ω__32', GUY.trm.truth     types.isa       std.strange,      6
  help 'Ω__33', GUY.trm.truth     types.isa       std.weird,        6
  help 'Ω__34', GUY.trm.truth     types.isa       std.abnormal,     6
  help 'Ω__35', GUY.trm.truth     types.isa       flatly_1.evenly,  5
  help 'Ω__36', GUY.trm.truth     types.isa       flatly_1.flat,    5
  help 'Ω__37', GUY.trm.truth     types.isa       flatly_1.plain,   5
  help 'Ω__38', GUY.trm.truth     types.isa       flatly_2.flat,    5
  help 'Ω__39', GUY.trm.truth     types.isa       flatly_2.evenly,  5
  help 'Ω__40', GUY.trm.truth     types.isa       flatly_2.plain,   5
  #.........................................................................................................
  echo()
  # help 'Ω__41', GUY.trm.truth     types.isa       std.cardinal, 6
  # help 'Ω__42', GUY.trm.truth     types.isa       std.cardinal, 0
  # help 'Ω__43', GUY.trm.truth     types.isa       std.cardinal, -1
  # #.........................................................................................................
  help 'Ω__44', try               types.validate  std.integer,  5       catch e then warn 'Ω__45', e.message
  help 'Ω__46', try               types.validate  std.integer,  5.3     catch e then warn 'Ω__47', e.message
  # info 'Ω__48', std.weird
  # info 'Ω__49', std.weird.isa
  # info 'Ω__50', std.weird.isa.toString()



