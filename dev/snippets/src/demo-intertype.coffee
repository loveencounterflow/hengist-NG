


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
WEBGUY                    = require '../../../apps/webguy'
{ hide }                  = GUY.props
{ nameit }                = WEBGUY.props
{ Ltsort }                = require '../../../apps/ltsort'
misfit                    = Symbol 'misfit'


############################################################################################################
require_intertype = ->

  #===========================================================================================================
  $isa =
    text:     ( x ) -> typeof x is 'string'
    function: ( x ) -> ( Object::toString.call x ) is '[object Function]'

  #===========================================================================================================
  class Types

    #---------------------------------------------------------------------------------------------------------
    constructor: ( cfg ) ->
      # @_types = new Map()
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
        throw new Error "Ω___1 expected an instance of `Type`, got a #{@type_of R}"
      unless ( R = type.isa.call type.$typespace, x, @ ) in [ true, false, ]
        throw new Error "Ω___2 expected `true` or `false`, got a #{@type_of R}"
      return R

    #---------------------------------------------------------------------------------------------------------
    type_of: ( x ) -> 'something'

    #---------------------------------------------------------------------------------------------------------
    validate: ( type, x ) ->
      return x if @isa type, x
      throw new Error "Ω___3 expected a #{type.$typename}, got a #{@type_of x}"

    #---------------------------------------------------------------------------------------------------------
    create: ( type, P... ) ->
      # unless ( method = type.parse )?
      #   throw new Error "Ω___4 expected a , got #{rpr R}"

    #---------------------------------------------------------------------------------------------------------
    # evaluate: ( ??? ) ->
    # create: ( ??? ) ->

  #===========================================================================================================
  class Type

    #---------------------------------------------------------------------------------------------------------
    constructor: ( typespace, typename, declaration ) ->
      ### NOTE not doing anything for the time being ###
      ### TAINT should still implement string-valued `isa` ###
      debug 'Ω___5', rpr typespace
      debug 'Ω___6', rpr typename
      debug 'Ω___7', rpr declaration
      @$typename = typename
      # hide @, '$typename',  typename
      hide @, '$typespace', typespace
      ### TAINT check for accidental overwrites ###
      #.......................................................................................................
      ### Compile fields: ###
      if declaration.fields?
        do =>
          ### TAINT try to move this check to validation step ###
          if declaration.isa?
            throw new Error "Ω___8 must have exactly one of `isa` or `fields`, not both"
          # for field_name, field_declaration of declaration.fields
          #   field = new Type typespace, field_name, field_declaration
          #   debug 'Ω___9', { typename, field_name, field_declaration, }, field.$typename, field.isa
          debug 'Ω__10', new Typespace declaration.fields
      #.......................................................................................................
      for key, value of declaration
        nameit typename, value if key is 'isa' # check that value is function?
        hide @, key, value
      return undefined

  #===========================================================================================================
  class Typespace

    #---------------------------------------------------------------------------------------------------------
    constructor: ( typespace_cfg ) ->
      typenames     = @_amend_and_sort_typenames typespace_cfg
      info 'Ω__11', typenames
      for typename in typenames
        unless ( declaration = typespace_cfg[ typename ] )?
          throw new Error "Ω__12 unknown typename #{rpr typename}"
        urge 'Ω__13', { typename, declaration, }
        switch true
          when $isa.text declaration
            typeref = declaration
            unless ( deref = @[ typeref ] ) instanceof Type
              ### TAINT should this error occur, its message is probably not meaningful to user ###
              throw new Error "Ω__14 expected type reference #{rpr typename} → #{rpr typeref} to dereference to a `Type`, got #{rpr deref} instead"
            debug 'Ω__15', { typename, typeref, deref}
            declaration = do ( deref ) => { isa: ( ( x, t ) -> t.isa deref, x ), }
          when $isa.function declaration
            declaration = { isa: declaration, }
          # else
          # ### TAINT should validate remaining possible values for typespace_cfg[ typename ] ###
        #.....................................................................................................
        @[ typename ] = new Type @, typename, declaration
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

  flatly = new Typespace
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
  return { Types, Type, Typespace, std, flatly, types: ( new Types() ), }


#===========================================================================================================
if module is require.main then await do =>
  { types
    flatly
    std             } = require_intertype()
  help 'Ω__16', std
  help 'Ω__17', flatly
  #.........................................................................................................
  help 'Ω__18', GUY.trm.truth     types.isa       std.integer,    5
  help 'Ω__19', GUY.trm.truth     types.isa       std.odd,        5
  help 'Ω__20', GUY.trm.truth     types.isa       std.even,       6
  help 'Ω__21', GUY.trm.truth     types.isa       std.strange,    5
  help 'Ω__22', GUY.trm.truth     types.isa       std.weird,      5
  help 'Ω__23', GUY.trm.truth     types.isa       std.abnormal,   5
  # help 'Ω__24', GUY.trm.truth     types.isa       flatly.flat,    8
  # help 'Ω__25', GUY.trm.truth     types.isa       flatly.evenly,  8
  # help 'Ω__26', GUY.trm.truth     types.isa       flatly.plain,   8
  #.........................................................................................................
  help 'Ω__27', GUY.trm.truth     types.isa       std.integer,    5.3
  help 'Ω__28', GUY.trm.truth     types.isa       std.odd,        6
  help 'Ω__29', GUY.trm.truth     types.isa       std.odd,        5.3
  help 'Ω__30', GUY.trm.truth     types.isa       std.even,       5
  help 'Ω__31', GUY.trm.truth     types.isa       std.strange,    6
  help 'Ω__32', GUY.trm.truth     types.isa       std.weird,      6
  help 'Ω__33', GUY.trm.truth     types.isa       std.abnormal,   6
  # help 'Ω__34', GUY.trm.truth     types.isa       flatly.evenly,  5
  # help 'Ω__35', GUY.trm.truth     types.isa       flatly.flat,    5
  # help 'Ω__36', GUY.trm.truth     types.isa       flatly.plain,   5
  #.........................................................................................................
  # help 'Ω__37', GUY.trm.truth     types.isa       std.cardinal, 6
  # help 'Ω__38', GUY.trm.truth     types.isa       std.cardinal, 0
  # help 'Ω__39', GUY.trm.truth     types.isa       std.cardinal, -1
  # #.........................................................................................................
  help 'Ω__40', try               types.validate  std.integer,  5       catch e then warn 'Ω__41', e.message
  help 'Ω__42', try               types.validate  std.integer,  5.3     catch e then warn 'Ω__43', e.message
  # info 'Ω__44', std.weird
  # info 'Ω__45', std.weird.isa
  # info 'Ω__46', std.weird.isa.toString()



