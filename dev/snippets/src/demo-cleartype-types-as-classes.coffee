
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
        switch true
          when ( Object::toString.call dcl.isa ) is '[object Function]'
            isa = dcl.isa
          when ( Object::toString.call dcl.isa.isa ) is '[object Function]'
            ### TAINT should check with instanceof ###
            isa = dcl.isa.isa
          else throw new Error 'Ω___1'
      #.......................................................................................................
      else
        ### TAINT check whether there are fields ###
        isa = ( x ) ->
          return false unless x?
          return false unless x.constructor in [ Object, undefined, ] ### stad.pod.isa x ###
          if has_fields
            for field_name, subtype of dcl.fields
              continue if subtype.isa x[ field_name ]
              warn 'Ω___2', "x.#{field_name} is not a #{subtype.name}"
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
  type  = new Type()
  std   = {}

  #-----------------------------------------------------------------------------------------------------------
  std.text = type.create
    name:     'text'
    isa:      ( x ) -> ( Object::toString.call x ) is '[object String]'
    create:   ( x ) -> x?.toString() ? ''
  #-----------------------------------------------------------------------------------------------------------
  std.nonempty_text = type.create
    name:     'nonempty_text'
    isa:      ( x ) -> ( std.text.isa x ) and ( x.length isnt 0 )
    create:   ( x ) -> x?.toString() ? ''
  #-----------------------------------------------------------------------------------------------------------
  std.float = type.create
    name:     'float'
    isa:      ( x ) -> Number.isFinite x
    create:   ( n = 0 ) -> if x? then ( parseFloat x ) else 0
  #-----------------------------------------------------------------------------------------------------------
  std.quantity_q = type.create
    name:     'q'
    isa:      std.float
  #-----------------------------------------------------------------------------------------------------------
  std.quantity_u = type.create
    name:     'u'
    isa:      std.nonempty_text
  #-----------------------------------------------------------------------------------------------------------
  std.quantity = type.create
    name:     'quantity'
    create:   ( cfg ) -> { q: 0, u: 'u', cfg..., }
    fields:
      q:        std.quantity_q
      u:        std.quantity_u
  #-----------------------------------------------------------------------------------------------------------
  std.integer = type.create
    name:     'integer'
    isa:      ( x ) -> Number.isInteger x
    create:   ( n = 0 ) -> if x? then ( parseInt n, 10 ) else 0

  #=========================================================================================================
  return { std, Type, }


#===========================================================================================================
if module is require.main then await do =>
  { Type
    std             } = require_cleartype()
  info 'Ω___3', std
  do =>
    echo()
    info 'Ω___4', std.integer
    info 'Ω___5', std.integer.isa 3.141
    info 'Ω___6', std.integer.isa 3
    info 'Ω___7', std.integer.create '3'
    info 'Ω___8', std.integer.create()
  do =>
    echo()
    info 'Ω___9', std.nonempty_text
    info 'Ω__10', std.nonempty_text.isa 3.141
    info 'Ω__11', std.nonempty_text.isa ''
    info 'Ω__12', std.nonempty_text.isa 'd'
    info 'Ω__13', std.nonempty_text.create()
    info 'Ω__14', std.nonempty_text.create false
    info 'Ω__15', std.nonempty_text.create 'd'
  do =>
    echo()
    info 'Ω__16', std.quantity
    info 'Ω__17', std.quantity.create()
    info 'Ω__18', std.quantity.create  { q: 4.3, u: 's', }
    info 'Ω__19', std.quantity.isa     { q: 4.3, u: 's', }
    info 'Ω__20', std.quantity.fields.q.isa 7
    info 'Ω__21', std.quantity.fields.q.isa Infinity
    info 'Ω__22', std.nonempty_text.create      'g'
    info 'Ω__23', std.quantity_u.create         'g'
    info 'Ω__24', std.quantity.fields.u.create  'g'

