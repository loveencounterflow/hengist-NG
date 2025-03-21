


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
      unless ( R = type.isa.call type.$typespace, x, @ ) in [ true, false, ]
        throw new Error "Ω___1 expected `true` or `false`, got a #{@type_of R}"
      return R

    #---------------------------------------------------------------------------------------------------------
    type_of: ( x ) -> 'something'

    #---------------------------------------------------------------------------------------------------------
    validate: ( type, x ) ->
      return x if @isa type, x
      throw new Error "Ω___2 expected a #{type.$name}, got a #{@type_of x}"

    #---------------------------------------------------------------------------------------------------------
    create: ( type, P... ) ->
      # unless ( method = type.parse )?
      #   throw new Error "Ω___3 expected a , got #{rpr R}"

    #---------------------------------------------------------------------------------------------------------
    # evaluate: ( ??? ) ->
    # create: ( ??? ) ->


  #===========================================================================================================
  class Type

    #---------------------------------------------------------------------------------------------------------
    constructor: ( typespace, name, declaration ) ->
      ### NOTE not doing anything for the time being ###
      ### TAINT should still implement string-valued `isa` ###
      # debug 'Ω___4', rpr declaration
      hide @, '$name',      name
      hide @, '$typespace', typespace
      ### TAINT check for accidental overwrites ###
      for key, value of declaration
        nameit name, value if key is 'isa' # check that value is function?
        hide @, key, value
      return undefined


  #===========================================================================================================
  class Typespace

    #---------------------------------------------------------------------------------------------------------
    constructor: ( typespace_cfg ) ->
      names = @_sort_names typespace_cfg
      # info 'Ω___5', Object.keys typespace_cfg
      # info 'Ω___6', names
      for name in names
        unless ( declaration = typespace_cfg[ name ] )?
          throw new Error "Ω___7 missing declaration for type #{rpr name}"
        #.....................................................................................................
        ### De-reference named types: ###
        ### TAINT use method `_deref()` ###
        ### TAINT consider to resolve transitive dependencies ###
        if typeof declaration is 'string'
          ref         = declaration
          declaration = do =>
            deref = @[ ref ]
            R     = {}
            R.isa = ( x, t ) -> t.isa deref, x
            return R
        #.....................................................................................................
        @[ name ] = new Type @, name, declaration
      return undefined

    #---------------------------------------------------------------------------------------------------------
    _sort_names: ( typespace_cfg ) ->
      ### Given a `typespace_cfg`, return a list of names such that the declarative dependencies (where the
      type is defined by the name of another type in the typespace) can be resolved at compile time ###
      ### TAINT re-throw cycle error ###
      g = new Ltsort()
      for name, declaration of typespace_cfg
        if typeof declaration is 'string' then  g.add { name, needs: declaration, }
        else                                    g.add { name, }
      return g.linearize { groups: false, }


  #===========================================================================================================
  std = new Typespace
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
      # each field becomes an `Type` instance; strings may refer to names in the same typespace
      fields:
        q:    'float'
        u:    'nonempty_text'
###

  #%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  return { Types, Type, Typespace, std, }


#===========================================================================================================
if module is require.main then await do =>
  { Types
    std             } = require_intertype()
  help 'Ω___8', types = new Types()
  help 'Ω___9', std
  # help 'Ω__10', std.integer
  # help 'Ω__11', std.integer.isa 5
  help 'Ω__12', GUY.trm.truth     types.isa       std.integer,  5.3
  help 'Ω__13', GUY.trm.truth     types.isa       std.strange,  6
  help 'Ω__14', GUY.trm.truth     types.isa       std.weird,    6
  help 'Ω__15', GUY.trm.truth     types.isa       std.odd,      6
  help 'Ω__16', GUY.trm.truth     types.isa       std.strange,  5
  help 'Ω__17', GUY.trm.truth     types.isa       std.weird,    5
  help 'Ω__18', GUY.trm.truth     types.isa       std.odd,      5
  help 'Ω__19', GUY.trm.truth     types.isa       std.odd,      5.3
  help 'Ω__20', try               types.validate  std.integer,  5       catch e then warn 'Ω__21', e.message
  help 'Ω__22', try               types.validate  std.integer,  5.3     catch e then warn 'Ω__23', e.message
  # info 'Ω__24', std.weird
  # info 'Ω__25', std.weird.isa
  # info 'Ω__25', std.weird.isa.toString()



