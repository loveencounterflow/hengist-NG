
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
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG


#===========================================================================================================
require_cleartype = ->
  H = require '../../../apps/cleartype/lib/helpers'

  #===========================================================================================================
  class Type

    #---------------------------------------------------------------------------------------------------------
    constructor: ->
      # H.bind_instance_methods @
      return undefined

    #---------------------------------------------------------------------------------------------------------
    create: ( dcl ) ->
      fields = {}
      #.......................................................................................................
      if dcl.refines?
        unless ( dcl.refines instanceof @constructor )
          throw new Error "Ω___1 dcl.refines must be instanceof #{rpr @constructor}"
        is_extension  = true
        extension     = dcl.refines.constructor
      else
        is_extension  = false
        extension     = @constructor
      #.......................................................................................................
      has_fields = do =>
        return false unless dcl.fields?
        count = 0
        for subtype_name, subtype of dcl.fields
          count++
          fields[ subtype_name ] = subtype
        return count isnt 0
      #.......................................................................................................
      if dcl.isa?
        # debug 'Ω___2', dcl instanceof @constructor
        # debug 'Ω___3', @isa dcl
        switch true
          when ( Object::toString.call dcl.isa ) is '[object Function]'
            per_se_isa = dcl.isa
          when ( Object::toString.call dcl.isa.isa ) is '[object Function]'
            ### TAINT should check with instanceof ###
            per_se_isa = dcl.isa.isa
          else throw new Error 'Ω___4'
      #.......................................................................................................
      else
        ### TAINT check whether there are fields ###
        per_se_isa = ( x ) ->
          return false unless x?
          return false unless x.constructor in [ Object, undefined, ] ### stad.pod.isa x ###
          if has_fields
            for field_name, subtype of dcl.fields
              continue if subtype.isa x[ field_name ]
              # warn 'Ω___5', "x.#{field_name}: #{rpr x[ field_name ]} is not a #{subtype.name}"
              warn 'Ω___6', "expected a #{subtype.name} for field #{field_name}, got #{rpr x[ field_name ]}"
              return false
          return true
      #.......................................................................................................
      if is_extension
        ### TAINT review use of dcl.refines here ###
        isa = ( x ) -> ( dcl.refines.isa x ) and ( per_se_isa x )
      else
        isa = per_se_isa
      #.......................................................................................................
      create = dcl.create ? ->
      # if dcl.create?
      #   create = ( x ) -> dcl.create x
      # else
      #   ### TAINT check whether there are fields ###
      #   fields = {}
      #   for field_name, dsc of Object.getOwnPropertyDescriptors dcl
      #.......................................................................................................
      clasz = class extends extension
        name:         dcl.name
        isa:          nameit "isa_#{dcl.name}", isa
        create:       create
        fields:       fields
        has_fields:   has_fields
      nameit ( clasz.classname_from_typename dcl.name ), clasz
      return new clasz()

    #---------------------------------------------------------------------------------------------------------
    @classname_from_typename = ( classname = null ) ->
      R = ( classname ? 'anonymous' )
      return ( R[ 0 ] ).toUpperCase() + R[ 1 .. ]

    #---------------------------------------------------------------------------------------------------------
    validate: ( x ) ->
      return x if @isa x
      throw new Error "Ω___7 Cleartype_validation_error"

    #---------------------------------------------------------------------------------------------------------
    isa: ( x ) -> x instanceof @constructor

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
    refines:  std.text # .constructor
    # isa:      ( x ) -> ( std.text.isa x ) and ( x.length isnt 0 )
    isa:      ( x ) -> ( x.length isnt 0 )
    create:   ( x ) -> x?.toString() ? ''
  #-----------------------------------------------------------------------------------------------------------
  std.float = type.create
    name:     'float'
    isa:      ( x ) -> Number.isFinite x
    create:   ( n = 0 ) -> if x? then ( parseFloat x ) else 0
  #-----------------------------------------------------------------------------------------------------------
  std.quantity_q = type.create
    name:     'quantity_q'
    isa:      std.float
  #-----------------------------------------------------------------------------------------------------------
  std.quantity_u = type.create
    name:     'quantity_u'
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
@cleartype_tasks =
  basics: ->
    { Type
      std             } = require_cleartype()
    info 'Ω___8', std
    do =>
      echo()
      info 'Ω___9', std.integer
      info 'Ω__10', std.integer.isa 3.141
      info 'Ω__11', std.integer.isa 3
      info 'Ω__12', std.integer.create '3'
      info 'Ω__13', std.integer.create()
    do =>
      echo()
      info 'Ω__14', std.nonempty_text
      @eq ( Ωcltt__15 = -> std.nonempty_text.isa 3.141                  ), false
      @eq ( Ωcltt__16 = -> std.nonempty_text.isa ''                     ), false
      @eq ( Ωcltt__17 = -> std.nonempty_text.isa 'd'                    ), true
      @eq ( Ωcltt__18 = -> std.nonempty_text.create()                   ), ''
      @eq ( Ωcltt__19 = -> std.nonempty_text.create false               ), 'false'
      @eq ( Ωcltt__20 = -> std.nonempty_text.create 'd'                 ), 'd'
    do =>
      echo()
      info 'Ω__21', std.quantity
      @eq ( Ωcltt__22 = -> std.quantity.create()                        ), { q: 0, u: 'u', }
      @eq ( Ωcltt__23 = -> std.quantity.create    { q: 4.3, u: 's', }   ), { q: 4.3, u: 's', }
      @eq ( Ωcltt__24 = -> std.quantity.isa       { q: 4.3, u: 's', }   ), true
      @eq ( Ωcltt__25 = -> std.quantity.validate  { q: 4.3, u: 's', }   ), { q: 4.3, u: 's', }
      @eq ( Ωcltt__26 = -> std.quantity.fields.q.isa 7                  ), true
      @eq ( Ωcltt__27 = -> std.quantity.fields.q.isa Infinity           ), false
      info 'Ω__28', std.nonempty_text.create      'g'
      info 'Ω__29', std.quantity_u.create         'g'
      info 'Ω__30', std.quantity.fields.u.create  'g'
    do =>
      echo()
      help 'Ω__31', std.quantity
      help 'Ω__32', std.quantity.constructor
      help 'Ω__33', std.quantity.constructor.name
      help 'Ω__34', std.quantity.isa
      help 'Ω__35', std.quantity.isa {}
      help 'Ω__36', std.quantity.isa { u: 7, q: 3, }
      help 'Ω__37', std.quantity.isa { u: '7', q: 3, }
      help 'Ω__38', std.quantity.isa { u: '7', q: Infinity, }
      @eq ( Ωcltt__39 = -> std.quantity.name                    ), 'quantity'
      @eq ( Ωcltt__40 = -> std.integer.name                     ), 'integer'
      @eq ( Ωcltt__41 = -> std.quantity_q.name                  ), 'quantity_q'
      @eq ( Ωcltt__42 = -> std.quantity_u.name                  ), 'quantity_u'
      echo()
      help 'Ω__43', std.text.isa
      help 'Ω__44', std.text.isa 'abc'
      help 'Ω__45', std.text.isa Array.from 'abc'
      echo()
      help 'Ω__46', std.nonempty_text
      help 'Ω__47', std.nonempty_text.isa
      @eq ( Ωcltt__48 = -> std.nonempty_text.isa 'abc'            ), true
      @eq ( Ωcltt__49 = -> std.nonempty_text.isa Array.from 'abc' ), false
      return null
    do =>
      echo()
      for type_name, type of std
        debug 'Ω__50', ( rpr type_name ), ( rpr type.isa.name ), ( rpr "isa_#{type_name}" )
        @eq ( Ωcltt__51 = -> type.isa.name ), "isa_#{type_name}"
      return null
    return null

#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: true, show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test @cleartype_tasks

