


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


############################################################################################################
require_intertype = ->

  #===========================================================================================================
  class Intertype

    #---------------------------------------------------------------------------------------------------------
    constructor: ( cfg ) ->
      # @_types = new Map()
      hide @, 'isa',      @isa.bind       @
      hide @, 'validate', @validate.bind  @
      hide @, 'parse',    @parse.bind     @
      hide @, 'type_of',  @type_of.bind   @
      hide @, 'memo',     new Map()
      return undefined

    #---------------------------------------------------------------------------------------------------------
    isa: ( type, x ) ->
      unless ( R = type.isa.call type.$namespace, x, @ ) in [ true, false, ]
        throw new Error "Ω___2 expected `true` or `false`, got a #{@type_of R}"
      return R

    #---------------------------------------------------------------------------------------------------------
    type_of: ( x ) -> 'something'

    #---------------------------------------------------------------------------------------------------------
    validate: ( type, x ) ->
      return x if @isa type, x
      throw new Error "Ω___3 expected a #{type.$name}, got a #{@type_of x}"

    #---------------------------------------------------------------------------------------------------------
    parse: ( type, x ) ->
      unless ( method = type.parse )?
        throw new Error "Ω___4 expected a , got #{rpr R}"

    #---------------------------------------------------------------------------------------------------------
    # evaluate: ( ??? ) ->
    # create: ( ??? ) ->


  #===========================================================================================================
  class Intertype_type

    #---------------------------------------------------------------------------------------------------------
    constructor: ( namespace, name, declaration ) ->
      ### NOTE not doing anything for the time being ###
      ### TAINT should still implement string-valued `isa` ###
      # debug 'Ω___5', rpr declaration
      @$name = name
      hide @, '$namespace', namespace
      ### TAINT check for accidental overwrites ###
      for key, value of declaration
        nameit name, value if key is 'isa' # check that value is function?
        hide @, key, value
      return undefined



  #===========================================================================================================
  class Intertype_namespace

    #---------------------------------------------------------------------------------------------------------
    constructor: ( namespace_cfg ) ->
      ### Given a `namespace_cfg`, return a list of names such that the declarative dependencies (where the
      type is defined by the name of another type in the namespace) can be resolved at compile time ###
      names = @_sort_names namespace_cfg
      # info 'Ω___6', Object.keys namespace_cfg
      # info 'Ω___7', names
      for name in names
        unless ( declaration = namespace_cfg[ name ] )?
          throw new Error "Ω___8 missing declaration for type #{rpr name}"
        @[ name ] = new Intertype_type @, name, declaration
      return undefined

    #---------------------------------------------------------------------------------------------------------
    _sort_names: ( namespace_cfg ) ->
      ### TAINT check here or in constructor that names can be resolved ###
      ### TAINT re-throw cycle error ###
      g = new Ltsort()
      for name, declaration of namespace_cfg
        if typeof declaration is 'string'
          g.add { name, needs: declaration, }
        else
          g.add { name, }
      return g.linearize { groups: false, }


  #===========================================================================================================
  std = new Intertype_namespace
    # circle1:  'circle2'
    # circle2:  'circle3'
    # circle3:  'circle1'
    weird:    'strange' # declares another name for `odd`
    strange:  'odd'     # declares another name for `odd`
    integer:
      isa:    ( x, t ) -> Number.isInteger x
      foo:    4
    odd:
      isa:    ( x, t ) -> ( t.isa @integer, x ) and ( x %% 2 isnt 0 )
    abnormal: 'weird' # declares another name for `odd`
    # short form just assigns either a test method or a type name:
###
    even:     ( x, t ) -> ( t.isa @integer, x ) and ( x %% 2 is 0 )
    quantity:
      # each field becomes an `Intertype_type` instance; strings may refer to names in the same namespace
      fields:
        q:    'float'
        u:    'nonempty_text'
###

  #%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  return { Intertype, Intertype_type, Intertype_namespace, std, }


#===========================================================================================================
if module is require.main then await do =>
  { Intertype
    std             } = require_intertype()
  help 'Ω___9', types = new Intertype()
  help 'Ω__10', std
  # help 'Ω__11', std.integer
  # help 'Ω__12', std.integer.isa 5
  help 'Ω__13', GUY.trm.truth     types.isa       std.integer,  5.3
  # help 'Ω__14', GUY.trm.truth     types.isa       std.strange,  6
  # help 'Ω__15', GUY.trm.truth     types.isa       std.weird,    6
  help 'Ω__16', GUY.trm.truth     types.isa       std.odd,      6
  # help 'Ω__17', GUY.trm.truth     types.isa       std.strange,  5
  # help 'Ω__18', GUY.trm.truth     types.isa       std.weird,    5
  help 'Ω__19', GUY.trm.truth     types.isa       std.odd,      5
  help 'Ω__20', GUY.trm.truth     types.isa       std.odd,      5.3
  help 'Ω__21', try               types.validate  std.integer,  5       catch e then warn 'Ω__22', e.message
  help 'Ω__23', try               types.validate  std.integer,  5.3     catch e then warn 'Ω__24', e.message



