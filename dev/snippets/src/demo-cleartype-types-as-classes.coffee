
###

1.  ```
    class Type
      ...
    type      = new Type type_cfg
    integer   = type.create { name: 'integer',  isa: ( -> ), ..., }
    quantity  = type.create { name: 'quantity', isa: ( -> ), ..., q: ..., u: ..., }

    # usage:
    integer.create 3.141
    ```

2.  ```
    class Integer extends Type
      isa:     ( x ) -> Number.isInteger x
      create:  ( x ) -> parseInt x, 10
    integer = new Integer()

    # usage:
    integer.create 3.141
    ```

3.  ```
    class integer extends Type
      @isa:    ( x ) -> Number.isInteger x
      @create: ( x ) -> parseInt x, 10

    # usage:
    integer.create 3.141
    ```

###


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


#===========================================================================================================
require_cleartype = ->

  #===========================================================================================================
  class Type

    #---------------------------------------------------------------------------------------------------------
    constructor: ->
      return undefined

    #---------------------------------------------------------------------------------------------------------
    create: ( dcl ) ->
      fields = {}
      has_fields = do =>
        return false unless dcl.fields?
        count = 0
        for subtype_name, subtype of dcl.fields
          count++
          fields[ subtype_name ] = subtype
        return count isnt 0
      #.......................................................................................................
      if dcl.isa?
        isa = ( x ) -> dcl.isa x
      else
        ### TAINT check whether there are fields ###
        isa = ( x ) ->
          return false unless x?
          return false unless x.constructor in [ Object, undefined, ] ### stad.pod.isa x ###
          if has_fields
            for field_name, subtype of dcl.fields
              continue if subtype.isa x[ field_name ]
              warn 'Ω___1', "x.#{field_name} is not a #{subtype.name}"
              return false
          return true
      #.......................................................................................................
      create = dcl.create ? ->
      # if dcl.create?
      #   create = ( x ) -> dcl.create x
      # else
      #   ### TAINT check whether there are fields ###
      #   fields = {}
      #   for field_name, dsc of Object.getOwnPropertyDescriptors dcl

      #.......................................................................................................
      R             = {}
      R.isa         =    isa.bind R
      R.create      = create.bind R
      R.fields      = fields
      R.has_fields  = has_fields
      return R

    #---------------------------------------------------------------------------------------------------------
    validate: ( x ) ->
    isa: ( x ) ->

  #-----------------------------------------------------------------------------------------------------------
  type = new Type()

  #-----------------------------------------------------------------------------------------------------------
  text = type.create
    name:     'text'
    isa:      ( x ) -> ( Object::toString.call x ) is '[object String]'
    create:   ( x ) -> x?.toString() ? ''
  #-----------------------------------------------------------------------------------------------------------
  nonempty_text = type.create
    name:     'nonempty_text'
    isa:      ( x ) -> ( text.isa x ) and ( x.length isnt 0 )
    create:   ( x ) -> x?.toString() ? ''
  #-----------------------------------------------------------------------------------------------------------
  float = type.create
    name:     'float'
    isa:      ( x ) -> Number.isFinite x
    create:   ( n = 0 ) -> if x? then ( parseFloat x ) else 0
  #-----------------------------------------------------------------------------------------------------------
  quantity_q = type.create
    name:     'q'
    isa:      ( x ) -> float.isa x
  #-----------------------------------------------------------------------------------------------------------
  quantity_u = type.create
    name:     'u'
    isa:      ( x ) -> nonempty_text.isa x
  #-----------------------------------------------------------------------------------------------------------
  quantity = type.create
    name:     'quantity'
    create:   ( cfg ) -> { q: 0, u: 'u', cfg..., }
    fields:
      q:        quantity_q
      u:        quantity_u
  #-----------------------------------------------------------------------------------------------------------
  integer = type.create
    name:     'integer'
    isa:      ( x ) -> Number.isInteger x
    create:   ( n = 0 ) -> if x? then ( parseInt n, 10 ) else 0

  #===========================================================================================================
  std = { text, nonempty_text, float, integer, quantity, }

  #=========================================================================================================
  return { std, Type, }


#===========================================================================================================
if module is require.main then await do =>
  { Type
    std             } = require_cleartype()
  info 'Ω___2', std
  do =>
    echo()
    info 'Ω___3', std.integer
    info 'Ω___4', std.integer.isa 3.141
    info 'Ω___5', std.integer.isa 3
    info 'Ω___6', std.integer.create '3'
    info 'Ω___7', std.integer.create()
  do =>
    echo()
    info 'Ω___8', std.nonempty_text
    info 'Ω___9', std.nonempty_text.isa 3.141
    info 'Ω__10', std.nonempty_text.isa ''
    info 'Ω__11', std.nonempty_text.isa 'd'
    info 'Ω__12', std.nonempty_text.create()
    info 'Ω__13', std.nonempty_text.create false
    info 'Ω__14', std.nonempty_text.create 'd'
  do =>
    echo()
    info 'Ω__15', std.quantity
    info 'Ω__16', std.quantity.create()
    info 'Ω__17', std.quantity.create  { q: 4.3, u: 's', }
    info 'Ω__18', std.quantity.isa     { q: 4.3, u: 's', }
    info 'Ω__19', std.quantity.fields.q.isa 7
    info 'Ω__20', std.quantity.fields.q.isa Infinity
    info 'Ω__21', std.quantity.fields.u.create 'g'

