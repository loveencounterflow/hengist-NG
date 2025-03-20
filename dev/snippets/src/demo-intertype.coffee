


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
    debug 'Ω___1', type
    unless ( R = type.isa x ) in [ true, false, ]
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
  constructor: ( name, declaration ) ->
    ### NOTE not doing anything for the time being ###
    debug 'Ω___5', declaration
    @name = name
    ### TAINT check for accidental overwrites ###
    for key, value of declaration
      nameit name, value if key is 'isa' # check that value is function?
      @[ key ] = value
    return undefined


#===========================================================================================================
class Intertype_namespace

  #---------------------------------------------------------------------------------------------------------
  constructor: ( namespace ) ->
    debug 'Ω___6', namespace
    for name, declaration of namespace
      @[ name ] = new Intertype_type name, declaration
    return undefined


#===========================================================================================================
std = new Intertype_namespace
  integer:
    isa:    ( x ) -> Number.isInteger x
    foo:    4


#===========================================================================================================
if module is require.main then await do =>
  help 'Ω___7', types = new Intertype()
  help 'Ω___8', std.integer
  help 'Ω___9', std.integer.isa 5
  help 'Ω__10', types.isa std.integer, 5.3
  help 'Ω__11', types
  help 'Ω__12', std
  help 'Ω__13', types.validate std.integer, 5.3



