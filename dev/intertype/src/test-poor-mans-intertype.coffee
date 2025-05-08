
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
class Intertype

  #---------------------------------------------------------------------------------------------------------
  constructor: ->
    @_contexts = if false then new WeakMap() else new Map ### TAINT this is going to be configurable for testing ###
    return undefined

  #---------------------------------------------------------------------------------------------------------
  _get_ctx: ( type ) ->
    return ( R = @_contexts.get type ) if R?
    @_contexts.set type, R = Object.freeze { me: type, types: @, }
    return R

  #---------------------------------------------------------------------------------------------------------
  isa: ( type, x ) ->
    return type.$isa.call ( @_get_ctx type ), x

  #---------------------------------------------------------------------------------------------------------
  isa_optional: ( type, x ) -> ( not x? ) or ( @isa type, x )

  #---------------------------------------------------------------------------------------------------------
  validate: ( type, x ) ->
    return x if @isa type, x
    throw new Intertype_validation_error "Ωpmi___1 validation error\n#{rpr type}\n#{rpr x}"

  #---------------------------------------------------------------------------------------------------------
  validate_optional: ( type, x ) ->
    return x if @isa_optional type, x
    throw new Intertype_validation_error "Ωpmi___2 validation error\n#{rpr type}\n#{rpr x}"

  #---------------------------------------------------------------------------------------------------------
  create: ( type, P... ) ->
    return @validate type, type.$create.call ( @_get_ctx type ), P...

#===========================================================================================================
types = new Intertype()


#===========================================================================================================
class Type

  #---------------------------------------------------------------------------------------------------------
  constructor: ( declaration ) ->
    @$isa     = declaration.$isa
    @$create  = declaration.$create
    return undefined

  # #---------------------------------------------------------------------------------------------------------
  # $isa: ->
  # $create: ->


#===========================================================================================================
t =
  anything:
    $isa: ( x ) -> true
    # $create: ( cfg ) ->
  boolean:
    $isa: ( x ) -> ( x is true ) or ( x is false )
    # $create: ( cfg ) ->
  function:
    $isa: ( x ) -> ( Object::toString.call x ) is '[object Function]'
    $create: -> ( -> null )
  asyncfunction:
    $isa: ( x ) -> ( Object::toString.call x ) is '[object AsyncFunction]'
    $create: -> ( -> await null )
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
      tt = new Intertype()
      ###
      declare.lt_constructor_cfg
        fields:
          loners:     'boolean'
        default:
          loners:     true
      ###
      t2 =
        lt_constructor_cfg:
          $isa: ( x ) ->
            return false unless @types.isa t.object, x
            return false unless @types.isa @me.loners, x.loners
            return true
          loners:
            $isa:       ( x ) -> @types.isa t.boolean, x
          $template:
            loners:     true
          $create: ( x ) ->
            return x unless @types.isa_optional t.object, x
            return { @me.$template..., x..., }
      #.....................................................................................................
      @eq ( Ωpmi___3 = -> tt.isa t.float, true                                   ), false
      @eq ( Ωpmi___4 = -> tt.isa t.float, '3'                                    ), false
      @eq ( Ωpmi___5 = -> tt.isa t.float, 337465                                 ), true
      @eq ( Ωpmi___6 = -> tt.isa t2.lt_constructor_cfg, 337465                   ), false
      @eq ( Ωpmi___7 = -> tt.isa t2.lt_constructor_cfg, {}                       ), false
      @eq ( Ωpmi___8 = -> tt.isa t2.lt_constructor_cfg, { loners: 8, }           ), false
      @eq ( Ωpmi___9 = -> tt.isa t2.lt_constructor_cfg, { loners: true, }        ), true
      @eq ( Ωpmi__10 = -> tt.validate t2.lt_constructor_cfg, { loners: true, }   ), { loners: true, }
      @eq ( Ωpmi__11 = -> tt.create t2.lt_constructor_cfg                        ), { loners: true, }
      @eq ( Ωpmi__12 = -> tt.create t2.lt_constructor_cfg, null                  ), { loners: true, }
      @eq ( Ωpmi__13 = -> tt.create t2.lt_constructor_cfg, undefined             ), { loners: true, }
      @throws ( Ωpmi__14 = -> tt.create    t2.lt_constructor_cfg, { loners: 7, } ), /validation error/
      @throws ( Ωpmi__15 = -> tt.validate  t2.lt_constructor_cfg, { loners: 8, } ), /validation error/
      do =>
        contexts = new Set tt._contexts.keys()
        @eq ( Ωpmi__16 = -> contexts.has t.float                          ), true
        @eq ( Ωpmi__17 = -> contexts.has t2.lt_constructor_cfg            ), true
        @eq ( Ωpmi__18 = -> contexts.has t2.lt_constructor_cfg.loners     ), true
        @eq ( Ωpmi__19 = -> contexts.has t.text                           ), false
      #.....................................................................................................
      return null



#===========================================================================================================
if module is require.main then await do =>
  ( new Test { throw_on_error: true, } ).test @intertype_tasks
  # ( new Test { throw_on_error: true, } ).test { mvp_isa: @intertype_tasks.MVP.isa, }

  ->
    d =
      a: ->
        foo: 1
        bar: 2
    debug 'Ωpmi__20', d
    debug 'Ωpmi__21', d.a
    debug 'Ωpmi__22', d.a.name
    debug 'Ωpmi__23', d.a()
