


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
{ nameit }                = WEBGUY.props


#===========================================================================================================
class Intertype

  #---------------------------------------------------------------------------------------------------------
  constructor: ( cfg ) ->
    # @_types = new Map()
    GUY.props.hide @, 'isa',      @isa.bind       @
    GUY.props.hide @, 'validate', @validate.bind  @
    GUY.props.hide @, 'parse',    @parse.bind     @
    GUY.props.hide @, 'type_of',  @type_of.bind   @
    GUY.props.hide @, 'memo',     new Map()
    return undefined

  # #---------------------------------------------------------------------------------------------------------
  # _compile: ( declaration ) ->
  #   return R if ( R = @_types.get declaration )?
  #   ### NOTE not doing anything for the time being ###
  #   @_types.set declaration, R = declaration
  #   return R

  #---------------------------------------------------------------------------------------------------------
  isa: ( type, x ) ->
    # debug 'Ω___1', type
    unless ( R = type.isa.call type.namespace, x, @ ) in [ true, false, ]
    # unless ( R = ( @_compile declaration ).isa x ) in [ true, false, ]
      throw new Error "Ω___2 expected true or false, got #{rpr R}"
    return R

  #---------------------------------------------------------------------------------------------------------
  type_of: ( x ) -> 'something'

  #---------------------------------------------------------------------------------------------------------
  validate: ( type, x ) ->
    return x if @isa type, x
    throw new Error "Ω___3 expected a #{type.name}, got a #{@type_of x}"

  #---------------------------------------------------------------------------------------------------------
  parse: ( type, x ) ->
    unless ( method = type.parse )?
      throw new Error "Ω___4 expected a , got #{rpr R}"


#===========================================================================================================
class Intertype_type

  #---------------------------------------------------------------------------------------------------------
  constructor: ( namespace, name, declaration ) ->
    ### NOTE not doing anything for the time being ###
    # debug 'Ω___5', declaration
    @name = name
    @namespace = namespace
    ### TAINT check for accidental overwrites ###
    for key, value of declaration
      nameit name, value if key is 'isa' # check that value is function?
      @[ key ] = value
    return undefined


#===========================================================================================================
class Intertype_namespace

  #---------------------------------------------------------------------------------------------------------
  constructor: ( namespace ) ->
    # debug 'Ω___6', namespace
    for name, declaration of namespace
      @[ name ] = new Intertype_type namespace, name, declaration
    return undefined


#===========================================================================================================
std = new Intertype_namespace
  integer:
    isa:    ( x, t ) -> Number.isInteger x
    foo:    4
  odd:
    isa:    ( x, t ) -> ( t.isa @integer, x ) and ( x %% 2 isnt 0 )
  # short form just assigns either a test method or a type name:
  even:     ( x, t ) -> ( t.isa @integer, x ) and ( x %% 2 is 0 )
  strange:  'odd' # declares another name for `odd`
  quantity:
    # each field becomes an `Intertype_type` instance; strings may refer to names in the same namespace
    fields:
      q:    'float'
      u:    'nonempty_text'


#===========================================================================================================
if module is require.main then await do =>
  help 'Ω___8', types = new Intertype()
  help 'Ω___9', std
  # help 'Ω__10', std.integer
  # help 'Ω__11', std.integer.isa 5
  help 'Ω__12', GUY.trm.truth types.isa std.integer, 5.3
  help 'Ω__13', GUY.trm.truth types.isa std.odd, 6
  help 'Ω__14', GUY.trm.truth types.isa std.odd, 5
  help 'Ω__15', GUY.trm.truth types.isa std.odd, 5.3
  help 'Ω__16', try types.validate std.integer, 5   catch e then warn 'Ω__17', e.message
  help 'Ω__18', try types.validate std.integer, 5.3 catch e then warn 'Ω__19', e.message



