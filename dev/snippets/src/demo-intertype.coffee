


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


#===========================================================================================================
class Intertype

  #---------------------------------------------------------------------------------------------------------
  constructor: ( cfg ) ->
    # @_types = new Map()
    GUY.props.hide @, 'isa', @isa.bind @
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
  validate: ( type, x ) ->
    return x if @isa type, x
    throw new Error "Ω___3 expected a , got #{rpr R}"


#===========================================================================================================
class Intertype_type

  #---------------------------------------------------------------------------------------------------------
  constructor: ( declaration ) ->
    ### NOTE not doing anything for the time being ###
    debug 'Ω___4', declaration
    @[ k ] = v for k, v of declaration
    return undefined


#===========================================================================================================
class Intertype_namespace

  #---------------------------------------------------------------------------------------------------------
  constructor: ( namespace ) ->
    debug 'Ω___5', namespace
    for type, declaration of namespace
      @[ type ] = new Intertype_type declaration
    return undefined


#===========================================================================================================
std = new Intertype_namespace
  integer:
    isa:    ( x ) -> Number.isInteger x
    foo:    4


#===========================================================================================================
if module is require.main then await do =>
  help 'Ω___6', types = new Intertype()
  help 'Ω___7', std.integer
  help 'Ω___8', std.integer.isa 5
  help 'Ω___9', types.isa std.integer, 5.3
  help 'Ω__10', types
  help 'Ω__11', std



