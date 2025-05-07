
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


###

# from `ltsort` which uses an outdated version of `intertype`:

get_base_types = ->
  return base_types if base_types?
  #.........................................................................................................
  base_types                = new Intertype()
  { declare }               = base_types
  #.........................................................................................................
  declare.lt_nodelist 'list.of.nonempty.text'
  #.........................................................................................................
  declare.lt_constructor_cfg
    fields:
      loners:     'boolean'
    default:
      loners:     true
  #.........................................................................................................
  declare.lt_add_cfg
    fields:
      name:       'nonempty.text'
      precedes:   'lt_nodelist'
      needs:      'lt_nodelist'
    default:
      name:       null
      precedes:     null
      needs:      null
    create: ( x ) ->
      R           = x ? {}
      return R unless @isa.object R
      R.needs      ?= []
      R.precedes   ?= []
      R.needs       = [ R.needs,    ] unless @isa.list R.needs
      R.precedes    = [ R.precedes, ] unless @isa.list R.precedes
      return R
  #.........................................................................................................
  declare.lt_linearize_cfg
    fields:
      groups:     'boolean'
    default:
      groups:     false
  #.........................................................................................................
  return base_types

###

#===========================================================================================================
class Intertype_error extends Error
class Intertype_validation_error extends Intertype_error


#===========================================================================================================
class Types

  #---------------------------------------------------------------------------------------------------------
  constructor: ->
    return undefined

  #---------------------------------------------------------------------------------------------------------
  isa:          ( type, x ) -> type.$isa x
  isa_optional: ( type, x ) -> ( not x? ) or ( @isa type, x )

  #---------------------------------------------------------------------------------------------------------
  validate: ( type, x ) ->
    return x if @isa type, x
    throw new Intertype_validation_error "Ωpmi___1 #{rpr type} #{rpr x}"

  #---------------------------------------------------------------------------------------------------------
  validate_optional: ( type, x ) ->
    return x if @isa_optional type, x
    throw new Intertype_validation_error "Ωpmi___2 #{rpr type} #{rpr x}"

  #---------------------------------------------------------------------------------------------------------
  create: ( type, P... ) -> @validate type, type.$create P...


#===========================================================================================================
class Type

  #---------------------------------------------------------------------------------------------------------
  constructor: ( declaration ) ->
    @$isa     = declaration.$isa
    @$create  = declaration.$create
    return undefined

  #---------------------------------------------------------------------------------------------------------
  $isa: ->
  $create: ->


#===========================================================================================================
declarations =
  anything:
    $isa: ( x ) -> true
    # $create: ( cfg ) ->
  boolean:
    $isa: ( x ) -> ( x is true ) or ( x is false )
    # $create: ( cfg ) ->
  function:
    $isa: ( x ) -> ( Object::toString.call x ) is '[object Function]'
    $create: -> -> null
  asyncfunction:
    $isa: ( x ) -> ( Object::toString.call x ) is '[object AsyncFunction]'
    $create: -> -> await null
  symbol:
    $isa: ( x ) -> ( typeof x ) is 'symbol'
    # $create: ( cfg ) ->
  object:
    $isa: ( x ) -> x? and ( typeof x is 'object' ) and ( ( Object::toString.call x ) is '[object Object]' )
    $create: ( cfg ) -> { cfg..., }
  float:
    $isa: ( x ) -> Number.isFinite x
    $create: -> 0
  text:
    $isa: ( x ) -> ( typeof x ) is 'string'
    $create: -> ''
  nullary:
    $isa: ( x ) -> x? and ( ( x.length is 0 ) or ( x.size is 0 ) )
    # $create: ( cfg ) ->
  unary:
    $isa: ( x ) -> x? and ( ( x.length is 1 ) or ( x.size is 1 ) )
    # $create: ( cfg ) ->
  binary:
    $isa: ( x ) -> x? and ( ( x.length is 2 ) or ( x.size is 2 ) )
    # $create: ( cfg ) ->
  trinary:
    $isa: ( x ) -> x? and ( ( x.length is 3 ) or ( x.size is 3 ) )
    # $create: ( cfg ) ->
  set:
    $isa: ( x ) -> x instanceof Set
    $create: ( cfg ) -> new Set cfg ? []
  map:
    $isa: ( x ) -> x instanceof Map
    $create: ( cfg ) -> new Map cfg ? []
  list:
    $isa: ( x ) -> Array.isArray x
    $create: ( cfg ) -> ( x for x from cfg ? [] )


############################################################################################################
#
#===========================================================================================================
@intertype_tasks =

  #=========================================================================================================
  demo:

    #-------------------------------------------------------------------------------------------------------
    isa: ->
      ###
      declare.lt_constructor_cfg
        fields:
          loners:     'boolean'
        default:
          loners:     true
      ###
      types =
        lt_constructor_cfg:
          $isa: ( x ) ->
            return false unless types.isa.object x
            return false unless @loners.$isa x.loners
            return true
          loners:
            $isa:       ( x ) -> types.isa.boolean x
          $template:
            loners:     true
          $create: ( x ) ->
            return x unless types.isa_optional.object x
            return { @$template..., x..., }
      #.....................................................................................................
      # @eq ( Ωit___3 = -> create_typespace()             instanceof Typespace  ), true
      # @throws ( Ωit___4 = -> create_typespace() ), /declaration for type 'wholenumber' contains forward reference to type 'integer'/
      #.....................................................................................................
      return null



#===========================================================================================================
if module is require.main then await do =>
  ( new Test { throw_on_error: true, } ).test @intertype_tasks
  # ( new Test { throw_on_error: true, } ).test { mvp_isa: @intertype_tasks.MVP.isa, }
