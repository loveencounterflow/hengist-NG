

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
{ f }                     = require '../../../apps/effstring'
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG


#===========================================================================================================
require_cleartype = ->
  H = require '../../../apps/cleartype/lib/helpers'

  #===========================================================================================================
  class Type

    #---------------------------------------------------------------------------------------------------------
    constructor: ( dcl = null ) ->
      throw new Error "Ω___1 not allowed" if dcl?
      # H.bind_instance_methods @
      return undefined

    #---------------------------------------------------------------------------------------------------------
    create: ( typename, dcl ) -> @constructor.from_declaration dcl

    #---------------------------------------------------------------------------------------------------------
    @from_declaration: ( typename, dcl ) ->
      ### TAINT should wrap b/c of names? ###
      return dcl if dcl instanceof @
      #.......................................................................................................
      fields = {}
      #.......................................................................................................
      ### TAINT condition should use API like 'has_property_but_value_isnt_null()' (?name?) ###
      if ( Reflect.has dcl, 'refines' ) and ( dcl.refines isnt null )
        unless ( dcl.refines instanceof @ )
          ### TAINT use `type_of()` ###
          throw new Error "Ω___2 dcl.refines must be instanceof #{rpr @}, got #{rpr dcl.refines}"
        is_extension  = true
        extension     = dcl.refines.constructor
      else
        is_extension  = false
        extension     = @
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
        switch true
          when dcl.isa instanceof @
            per_se_isa = do ( isa = dcl.isa.isa ) -> ( x ) -> isa x
          when ( Object::toString.call dcl.isa ) is '[object Function]'
            per_se_isa = dcl.isa
          else throw new Error 'Ω___3'
      #.......................................................................................................
      ### TAINT decomplect logic ###
      else
        if has_fields
          per_se_isa = ( x ) ->
            return false unless x?
            return false unless x.constructor in [ Object, undefined, ] ### stad.pod.isa x ###
            for field_name, subtype of dcl.fields
              continue if subtype.isa x[ field_name ]
              ### TAINT use type_of ###
              rejection = "expected a #{subtype.name} for field #{rpr field_name}, got #{rpr x[ field_name ]}"
              warn 'Ω___4', rejection
              return false
            return true
        else
          unless is_extension
            throw new Error "Ω___5 type declaration must have one of 'fields', 'isa' or 'refines' properties, got none"
          per_se_isa = ( x ) -> true
      #.......................................................................................................
      if is_extension
        ### TAINT review use of dcl.refines here ###
        debug 'Ωcltt___6', typename, dcl.refines, dcl.refines.isa
        isa = ( x ) -> ( dcl.refines.isa x ) and ( per_se_isa x )
      else
        isa = per_se_isa
      #.......................................................................................................
      create = dcl.create ? ( x ) -> x
      # if dcl.create?
      #   create = ( x ) -> dcl.create x
      # else
      #   ### TAINT check whether there are fields ###
      #   fields = {}
      #   for field_name, dsc of Object.getOwnPropertyDescriptors dcl
      #.......................................................................................................
      clasz = class extends extension
        name:         typename
        isa:          nameit ( @isaname_from_typename typename ), isa
        create:       create
        fields:       fields
        has_fields:   has_fields
      nameit ( clasz.classname_from_typename typename ), clasz
      return new clasz()

    #---------------------------------------------------------------------------------------------------------
    @classname_from_typename = ( typename = null ) ->
      R = ( typename ? 'anonymous' )
      ### TAINT not Unicode-compliant ###
      return ( R[ 0 ] ).toUpperCase() + R[ 1 .. ]

    #---------------------------------------------------------------------------------------------------------
    @isaname_from_typename = ( typename = null ) ->
      R = ( typename ? 'anonymous' )
      return "isa_#{typename}"

    #---------------------------------------------------------------------------------------------------------
    validate: ( x ) ->
      return x if @isa x
      throw new Error "Ω___7 Cleartype_validation_error"

    #---------------------------------------------------------------------------------------------------------
    isa: ( x ) -> x instanceof @constructor

  #===========================================================================================================
  class Typespace

    #---------------------------------------------------------------------------------------------------------
    add_types: ( dcls ) ->
      ### TAINT name collisions possible ###
      for typename, dcl of dcls
        if Reflect.has @, typename
          throw new Error "Ω___8 name collision: type / property #{rpr typename} already declared"
        @[ typename ] = Type.from_declaration typename, dcl
      return null

  #===========================================================================================================
  type  = new Type()
  std   = new Typespace()

  #===========================================================================================================
  std.add_types
    #.........................................................................................................
    text:
      isa:      ( x ) -> ( Object::toString.call x ) is '[object String]'
      create:   ( x ) -> x?.toString() ? ''
    #.........................................................................................................
    float:
      isa:      ( x ) -> Number.isFinite x
      create:   ( n = 0 ) -> if x? then ( parseFloat x ) else 0
    #.........................................................................................................
    integer:
      isa:      ( x ) -> Number.isInteger x
      create:   ( n = 0 ) -> if x? then ( parseInt n, 10 ) else 0
  #-----------------------------------------------------------------------------------------------------------
  std.add_types
    ###
    nonempty_text:
      isa:      std.text
      refine:   ( x ) -> ( x.length isnt 0 )
      create:   ( x ) -> x?.toString() ? ''
    ###
    #.........................................................................................................
    nonempty_text:
      refines:  std.text
      # isa:      ( x ) -> ( std.text.isa x ) and ( x.length isnt 0 )
      isa:      ( x ) -> ( x.length isnt 0 )
      create:   ( x ) -> x?.toString() ? ''
    #.........................................................................................................
    quantity_q:
      refines:  std.float
      # isa: std.float.isa
  #-----------------------------------------------------------------------------------------------------------
  std.add_types
    #.........................................................................................................
    quantity_u:
      refines:  std.nonempty_text
  #-----------------------------------------------------------------------------------------------------------
  std.add_types
    #.........................................................................................................
    quantity:
      create:   ( cfg ) -> { q: 0, u: 'u', cfg..., }
      fields:
        q:      std.quantity_q
        u:      std.quantity_u

  #=========================================================================================================
  return { std, Type, Typespace, }

#===========================================================================================================
@cleartype_tasks =
  basics: ->
    { Type
      std2
      std             } = require_cleartype()
    info 'Ω___9', std
    do =>
      echo()
      info 'Ω__10', std.integer
      info 'Ω__11', std.integer.isa 3.141
      info 'Ω__12', std.integer.isa 3
      info 'Ω__13', std.integer.create '3'
      info 'Ω__14', std.integer.create()
    do =>
      @eq ( Ωcltt__15 = -> std.text           instanceof Type ), true
      @eq ( Ωcltt__16 = -> std.float          instanceof Type ), true
      @eq ( Ωcltt__17 = -> std.integer        instanceof Type ), true
      @eq ( Ωcltt__18 = -> std.nonempty_text  instanceof Type ), true
      @eq ( Ωcltt__19 = -> std.quantity_q     instanceof Type ), true
      @eq ( Ωcltt__20 = -> std.quantity_u     instanceof Type ), true
      @eq ( Ωcltt__21 = -> std.quantity       instanceof Type ), true
    do =>
      @eq ( Ωcltt__22 = -> std.text.constructor.name          ), 'Text'
      @eq ( Ωcltt__23 = -> std.float.constructor.name         ), 'Float'
      @eq ( Ωcltt__24 = -> std.integer.constructor.name       ), 'Integer'
      @eq ( Ωcltt__25 = -> std.nonempty_text.constructor.name ), 'Nonempty_text'
      @eq ( Ωcltt__26 = -> std.quantity_q.constructor.name    ), 'Quantity_q'
      @eq ( Ωcltt__27 = -> std.quantity_u.constructor.name    ), 'Quantity_u'
      @eq ( Ωcltt__28 = -> std.quantity.constructor.name      ), 'Quantity'
    do =>
      @eq ( Ωcltt__29 = -> std.text.isa.name                  ), 'isa_text'
      @eq ( Ωcltt__30 = -> std.float.isa.name                 ), 'isa_float'
      @eq ( Ωcltt__31 = -> std.integer.isa.name               ), 'isa_integer'
      @eq ( Ωcltt__32 = -> std.nonempty_text.isa.name         ), 'isa_nonempty_text'
      @eq ( Ωcltt__33 = -> std.quantity_q.isa.name            ), 'isa_quantity_q'
      @eq ( Ωcltt__34 = -> std.quantity_u.isa.name            ), 'isa_quantity_u'
      @eq ( Ωcltt__35 = -> std.quantity.isa.name              ), 'isa_quantity'
    do =>
      @eq ( Ωcltt__36 = -> std.text.isa                  null ), false
      @eq ( Ωcltt__37 = -> std.float.isa                 null ), false
      @eq ( Ωcltt__38 = -> std.integer.isa               null ), false
      @eq ( Ωcltt__39 = -> std.nonempty_text.isa         null ), false
      @eq ( Ωcltt__40 = -> std.quantity_q.isa            null ), false
      @eq ( Ωcltt__41 = -> std.quantity_u.isa            null ), false
      @eq ( Ωcltt__42 = -> std.quantity.isa              null ), false
    do =>
      @eq ( Ωcltt__43 = -> std.text.isa                  Infinity ), false
      @eq ( Ωcltt__44 = -> std.float.isa                 Infinity ), false
      @eq ( Ωcltt__45 = -> std.integer.isa               Infinity ), false
      @eq ( Ωcltt__46 = -> std.nonempty_text.isa         Infinity ), false
      @eq ( Ωcltt__47 = -> std.quantity_q.isa            Infinity ), false
      @eq ( Ωcltt__48 = -> std.quantity_u.isa            Infinity ), false
      @eq ( Ωcltt__49 = -> std.quantity.isa              Infinity ), false
    do =>
      @eq ( Ωcltt__50 = -> std.text.isa           ''                        ), true
      @eq ( Ωcltt__51 = -> std.float.isa          7.56                      ), true
      @eq ( Ωcltt__52 = -> std.integer.isa        9                         ), true
      @eq ( Ωcltt__53 = -> std.nonempty_text.isa  'www'                     ), true
      @eq ( Ωcltt__54 = -> std.quantity_q.isa     1.5e32                    ), true
      @eq ( Ωcltt__55 = -> std.quantity_u.isa     'km'                      ), true
      @eq ( Ωcltt__56 = -> std.quantity.isa       { q: 1.5e32, u: 'km', }   ), true
    do =>
      echo()
      info 'Ω__57', std.nonempty_text
      @eq ( Ωcltt__58 = -> std.nonempty_text.isa 3.141                  ), false
      @eq ( Ωcltt__59 = -> std.nonempty_text.isa ''                     ), false
      @eq ( Ωcltt__60 = -> std.nonempty_text.isa 'd'                    ), true
      @eq ( Ωcltt__61 = -> std.nonempty_text.create()                   ), ''
      @eq ( Ωcltt__62 = -> std.nonempty_text.create false               ), 'false'
      @eq ( Ωcltt__63 = -> std.nonempty_text.create 'd'                 ), 'd'
    do =>
      echo()
      info 'Ω__64', std.quantity
      @eq ( Ωcltt__65 = -> std.quantity.create()                        ), { q: 0, u: 'u', }
      @eq ( Ωcltt__66 = -> std.quantity.create    { q: 4.3, u: 's', }   ), { q: 4.3, u: 's', }
      info 'Ω__67', std.nonempty_text.create      'g'
      info 'Ω__68', std.quantity_u.create         'g'
      info 'Ω__69', std.quantity.fields.u.create  'g'
    do =>
      echo()
      help 'Ω__70', std.quantity
      help 'Ω__71', std.quantity.constructor
      help 'Ω__72', std.quantity.constructor.name
      help 'Ω__73', std.quantity.isa
      help 'Ω__74', std.quantity.isa {}
      help 'Ω__75', std.quantity.isa { u: 7, q: 3, }
      help 'Ω__76', std.quantity.isa { u: '7', q: 3, }
      help 'Ω__77', std.quantity.isa { u: '7', q: Infinity, }
      @eq ( Ωcltt__78 = -> std.quantity.name                    ), 'quantity'
      @eq ( Ωcltt__79 = -> std.integer.name                     ), 'integer'
      @eq ( Ωcltt__80 = -> std.quantity_q.name                  ), 'quantity_q'
      @eq ( Ωcltt__81 = -> std.quantity_u.name                  ), 'quantity_u'
      echo()
      help 'Ω__82', std.text.isa
      help 'Ω__83', std.text.isa 'abc'
      help 'Ω__84', std.text.isa Array.from 'abc'
      echo()
      help 'Ω__85', std.nonempty_text
      help 'Ω__86', std.nonempty_text.isa
      @eq ( Ωcltt__87 = -> std.nonempty_text.isa 'abc'            ), true
      @eq ( Ωcltt__88 = -> std.nonempty_text.isa Array.from 'abc' ), false
      return null
    do =>
      echo()
      for typename, type of std
        @eq ( Ωcltt__89 = -> type.isa.name ), "isa_#{typename}"
      return null
    #.......................................................................................................
    for typename, type of std
      urge 'Ω__90', f"#{typename}:<20c; #{type.constructor.name}:<20c; #{type.isa.name}:<20c;"
    return null


#===========================================================================================================
demo_new_returns_instance_of_new_class = ->
  #=========================================================================================================
  class A
    # #-------------------------------------------------------------------------------------------------------
    # constructor: ( name ) ->
    #   @name = "A*#{name}*"
    #   return @create name
    get_names_A: -> [ @name, @constructor.name, ]

    #-------------------------------------------------------------------------------------------------------
    create: ( name ) ->
      clasz = class extends @constructor
        constructor: -> super(); @name = name; return undefined
        get_names_B: -> [ @name, clasz.name, @constructor.name, ]
      nameit name, clasz
      return new clasz()
  #=========================================================================================================
  a = new A
  debug 'Ωcltt__91', A
  debug 'Ωcltt__92', a
  debug 'Ωcltt__93', b = a.create 'b'
  debug 'Ωcltt__94', b.get_names_A()
  debug 'Ωcltt__95', b.get_names_B()
  ###
  d = new D(); <=> ( d instanceof D ) ^ ( d.constructor is D )
  ###
  #=========================================================================================================
  class POD
    constructor: ( cfg ) ->
      R = Object.create null
      Object.assign R, cfg
      return R
    isa: ->
  d = new POD { x: 76, }
  debug 'Ωcltt__96', d
  debug 'Ωcltt__97', d.constructor
  debug 'Ωcltt__98', d.isa
  #=========================================================================================================
  return null

#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: true, show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test @cleartype_tasks
  demo_new_returns_instance_of_new_class()
