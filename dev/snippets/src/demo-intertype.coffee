


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
  find_owner = ( owners, name, fallback = misfit ) ->
    for owner in owners
      return owner if Reflect.has owner, name
    return fallback unless fallback is misfit
    throw new Error "Ω___1 unable to find owner of #{rpr name}"

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
        throw new Error "Ω___2 expected an instance of `Type`, got a #{@type_of R}"
      unless ( R = type.isa.call type.$typespace, x, @ ) in [ true, false, ]
        throw new Error "Ω___3 expected `true` or `false`, got a #{@type_of R}"
      return R

    #---------------------------------------------------------------------------------------------------------
    type_of: ( x ) -> 'something'

    #---------------------------------------------------------------------------------------------------------
    validate: ( type, x ) ->
      return x if @isa type, x
      throw new Error "Ω___4 expected a #{type.$name}, got a #{@type_of x}"

    #---------------------------------------------------------------------------------------------------------
    create: ( type, P... ) ->
      # unless ( method = type.parse )?
      #   throw new Error "Ω___5 expected a , got #{rpr R}"

    #---------------------------------------------------------------------------------------------------------
    # evaluate: ( ??? ) ->
    # create: ( ??? ) ->


  #===========================================================================================================
  class Type

    #---------------------------------------------------------------------------------------------------------
    constructor: ( typespace, name, declaration ) ->
      ### NOTE not doing anything for the time being ###
      ### TAINT should still implement string-valued `isa` ###
      # debug 'Ω___6', rpr declaration
      hide @, '$name',      name
      hide @, '$typespace', typespace
      ### TAINT check for accidental overwrites ###
      #.......................................................................................................
      ### Compile fields: ###
      if declaration.fields?
        do =>
          ### TAINT try to move this check to validation step ###
          if declaration.isa?
            throw new Error "Ω___7 must have exactly one of `isa` or `fields`, not both"
          # for field_name, field_declaration of declaration.fields
          #   field = new Type typespace, field_name, field_declaration
          #   debug 'Ω___8', { name, field_name, field_declaration, }, field.$name, field.isa
          debug 'Ω___9', new Typespace declaration.fields
      #.......................................................................................................
      for key, value of declaration
        nameit name, value if key is 'isa' # check that value is function?
        hide @, key, value
      return undefined


  #===========================================================================================================
  class Typespace

    #---------------------------------------------------------------------------------------------------------
    constructor: ( parents..., typespace_cfg ) ->
      refs = @_derefence_typenames parents, typespace_cfg
      info 'Ω__10', Object.keys refs
      for typename, owner of refs
        help 'Ω__11', typename, GUY.trm.truth owner is typespace_cfg
      for typename, owner of refs
        declaration = typespace_cfg[ typename ]
        urge 'Ω__12', typename, owner.constructor.name, rpr declaration
        switch true
          when $isa.text declaration
            typeref = declaration
            owner   = @ if owner is typespace_cfg
            unless ( deref = owner[ typeref ] ) instanceof Type
              ### TAINT should this error occur, its message is probably not meaningful to user ###
              throw new Error "Ω__13 expected type reference #{rpr typename} → #{rpr typeref} to dereference to a `Type`, got #{rpr deref} instead"
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

    #---------------------------------------------------------------------------------------------------------
    _derefence_typenames: ( parents, typespace_cfg ) ->
      typenames     = @_amend_and_sort_typenames typespace_cfg
      R             = {}
      owners        = [ parents..., typespace_cfg, ].reverse()
      for typename in typenames
        unless ( owner = find_owner owners, typename, null )?
          throw new Error "Ω__14 unable to dereference typename #{rpr typename}"
        R[ typename ] = owner
      return R


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
    # nonemptytext:   ( x, t ) -> ( t.isa @text, x ) and x.length > 0
    #.........................................................................................................
    # circle1:  'circle2'
    # circle2:  'circle3'
    # circle3:  'circle1'
    #.........................................................................................................
    # weird:    'strange' # declares another name for `odd`
    strange:  'odd'     # declares another name for `odd`
    # abnormal: 'weird' # declares another name for `odd`
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

  # quantity = new Typespace std,
  #   q:    'float'
  #   u:    'nonemptytext'
  #   # template:
  #   #   q:    0
  #   #   u:    'u'


  #%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  return { Types, Type, Typespace, std, types: ( new Types() ), }


#===========================================================================================================
if module is require.main then await do =>
  # f = ( P..., x ) -> info 'Ω__15', { P, x, }
  # f 7
  # f 7, 8, 9
  # return null
  { types
    std             } = require_intertype()
  # help 'Ω__16', types = new Types()
  help 'Ω__17', std
  # help 'Ω__18', std.integer
  # help 'Ω__19', std.integer.isa 5
  help 'Ω__20', GUY.trm.truth     types.isa       std.integer,  5
  help 'Ω__21', GUY.trm.truth     types.isa       std.odd,      5
  help 'Ω__22', GUY.trm.truth     types.isa       std.even,     6
  help 'Ω__23', GUY.trm.truth     types.isa       std.strange,  5
  # #.........................................................................................................
  help 'Ω__24', GUY.trm.truth     types.isa       std.integer,  5.3
  help 'Ω__25', GUY.trm.truth     types.isa       std.odd,      6
  help 'Ω__26', GUY.trm.truth     types.isa       std.odd,      5.3
  help 'Ω__27', GUY.trm.truth     types.isa       std.even,     5
  help 'Ω__28', GUY.trm.truth     types.isa       std.strange,  6
  #.........................................................................................................
  # help 'Ω__29', GUY.trm.truth     types.isa       std.weird,    6
  # help 'Ω__30', GUY.trm.truth     types.isa       std.weird,    5
  # help 'Ω__31', GUY.trm.truth     types.isa       std.cardinal, 6
  # help 'Ω__32', GUY.trm.truth     types.isa       std.cardinal, 0
  # help 'Ω__33', GUY.trm.truth     types.isa       std.cardinal, -1
  # #.........................................................................................................
  help 'Ω__34', try               types.validate  std.integer,  5       catch e then warn 'Ω__35', e.message
  help 'Ω__36', try               types.validate  std.integer,  5.3     catch e then warn 'Ω__37', e.message
  # info 'Ω__38', std.weird
  # info 'Ω__39', std.weird.isa
  # info 'Ω__40', std.weird.isa.toString()



