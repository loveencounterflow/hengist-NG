

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





#-----------------------------------------------------------------------------------------------------------
demo_1 = ->
  { Intertype_minimal, } = require '../../../apps/intertype'
  #.........................................................................................................
  declarations  =
    integer:
      test:     ( x ) -> Number.isInteger x
      create:   ( p = null ) -> parseInt ( p ? @declarations.integer.template ), 10
      template: 0
    text:
      template: ''
      test:     ( ( x ) -> ( typeof x ) is 'string' )
    float:
      test:     ( x ) -> Number.isFinite x
      create:   ( p = null ) -> parseFloat p ? @declarations.float.template
      template: 0
    # foo: { role: 'qualifier', }
    # 'foo.bar':
    #   template: { ima: 'foo', }
    #   fields:
    #     ima:    'text'
    #   create: ( x ) ->
    #     debug 'Ω___1', x
    #     return { @declarations.foo.bar.template..., }
  #.........................................................................................................
  declarations = { sample_declarations..., declarations..., }
  types = new Intertype_minimal declarations
  #.........................................................................................................
  debug '^233-1^', types.create.float '345.678'
  debug '^233-1^', types.create.integer '345.678'
  # debug '^233-1^', types.create.foo.bar()
  # debug '^233-1^', types.create[ 'foo.bar' ]()
  #.........................................................................................................
  return null


#===========================================================================================================
sample_declarations =
  boolean:                ( x ) -> ( x is true ) or ( x is false )
  function:               ( x ) -> ( Object::toString.call x ) is '[object Function]'
  asyncfunction:          ( x ) -> ( Object::toString.call x ) is '[object AsyncFunction]'
  symbol:                 ( x ) -> ( typeof x ) is 'symbol'
  object:                 ( x ) -> x? and ( typeof x is 'object' ) and ( ( Object::toString.call x ) is '[object Object]' )
  float:                  ( x ) -> Number.isFinite x
  text:                   ( x ) -> ( typeof x ) is 'string'
  nullary:                ( x ) -> x? and ( ( x.length is 0 ) or ( x.size is 0 ) )
  unary:                  ( x ) -> x? and ( ( x.length is 1 ) or ( x.size is 1 ) )
  binary:                 ( x ) -> x? and ( ( x.length is 2 ) or ( x.size is 2 ) )
  trinary:                ( x ) -> x? and ( ( x.length is 3 ) or ( x.size is 3 ) )
  object:                 ( x ) -> x? and ( typeof x is 'object' ) and ( ( Object::toString.call x ) is '[object Object]' )
  set:                    ( x ) -> x instanceof Set
  list:                   ( x ) -> Array.isArray x



############################################################################################################
#
#===========================================================================================================
@intertype_tasks =

  #-----------------------------------------------------------------------------------------------------------
  interface: ->
    INTERTYPE     = require '../../../apps/intertype'
    @eq ( Ωit___2 = -> debug '2312312'; TMP_types.isa.object    INTERTYPE.types                               ), true
    @eq ( Ωit___3 = -> TMP_types.isa.undefined INTERTYPE.types.get_isa                       ), true
    @eq ( Ωit___4 = -> TMP_types.isa.undefined INTERTYPE.types.get_isa_optional              ), true
    @eq ( Ωit___5 = -> TMP_types.isa.undefined INTERTYPE.types.get_validate                  ), true
    @eq ( Ωit___6 = -> TMP_types.isa.undefined INTERTYPE.types.get_validate_optional         ), true
    @eq ( Ωit___7 = -> TMP_types.isa.function  INTERTYPE.types._get_isa                      ), true
    @eq ( Ωit___8 = -> TMP_types.isa.function  INTERTYPE.types._get_isa_optional             ), true
    @eq ( Ωit___9 = -> TMP_types.isa.function  INTERTYPE.types._get_validate                 ), true
    @eq ( Ωit__10 = -> TMP_types.isa.function  INTERTYPE.types._get_validate_optional        ), true
    @eq ( Ωit__11 = -> TMP_types.isa.object    INTERTYPE.types                               ), true
    @eq ( Ωit__12 = -> TMP_types.isa.object    INTERTYPE.types.isa                           ), true
    # @eq ( Ωit__13 = -> TMP_types.isa.function  INTERTYPE.types.isa.optional                  ), true
    @eq ( Ωit__14 = -> TMP_types.isa.object    INTERTYPE.types.validate                      ), true
    # @eq ( Ωit__15 = -> TMP_types.isa.function  INTERTYPE.types.validate.optional             ), true
    @eq ( Ωit__16 = -> TMP_types.isa.function  INTERTYPE.types.isa.boolean                   ), true
    @eq ( Ωit__17 = -> TMP_types.isa.function  INTERTYPE.types.isa.optional.boolean          ), true
    @eq ( Ωit__18 = -> TMP_types.isa.function  INTERTYPE.types.validate.boolean              ), true
    @eq ( Ωit__19 = -> TMP_types.isa.function  INTERTYPE.types.validate.optional.boolean     ), true
    @eq ( Ωit__20 = -> TMP_types.isa.object    INTERTYPE.types.create                        ), true
    @eq ( Ωit__21 = -> TMP_types.isa.function  INTERTYPE.types.isa.text                      ), true
    @eq ( Ωit__22 = -> TMP_types.isa.function  INTERTYPE.types.create.text                   ), true
    @eq ( Ωit__23 = -> TMP_types.isa.object    INTERTYPE.types.declarations                  ), true
    @eq ( Ωit__24 = -> TMP_types.isa.object    INTERTYPE.types.declarations.text             ), true
    #.........................................................................................................
    # @eq ( Ωit__25 = -> INTERTYPE.types.isa.name           ), 'isa'
    # @eq ( Ωit__26 = -> INTERTYPE.types.evaluate.name      ), 'evaluate'
    # @eq ( Ωit__27 = -> INTERTYPE.types.validate.name      ), 'validate'
    # @eq ( Ωit__28 = -> INTERTYPE.types.create.name        ), 'create'
    @eq ( Ωit__29 = -> INTERTYPE.types.declare.name       ), 'declare'
    @eq ( Ωit__30 = -> INTERTYPE.types.type_of.name       ), 'type_of'
    #.........................................................................................................
    do =>
      for type of INTERTYPE.testing._isa
        continue if Reflect.has INTERTYPE.declarations, type
        @fail 'Ωit__31', "type known from `INTERTYPE.testing._isa` but missing from `INTERTYPE.default_declarations`: #{rpr type}"
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  basic_functionality_using_types_object: ->
    INTERTYPE     = require '../../../apps/intertype'
    types         = new INTERTYPE.Intertype_minimal sample_declarations
    @eq ( Ωit__32 = -> types.isa.boolean           false               ), true
    @eq ( Ωit__33 = -> types.isa.boolean           true                ), true
    @eq ( Ωit__34 = -> types.isa.boolean           null                ), false
    @eq ( Ωit__35 = -> types.isa.boolean           1                   ), false
    @eq ( Ωit__36 = -> types.isa.optional.boolean  false               ), true
    @eq ( Ωit__37 = -> types.isa.optional.boolean  true                ), true
    @eq ( Ωit__38 = -> types.isa.optional.boolean  null                ), true
    @eq ( Ωit__39 = -> types.isa.optional.boolean  1                   ), false
    #.........................................................................................................
    @eq ( Ωit__40 = -> types.validate.boolean               false      ), false
    @eq ( Ωit__41 = -> types.validate.boolean               true       ), true
    @eq ( Ωit__42 = -> types.validate.optional.boolean      true       ), true
    @eq ( Ωit__43 = -> types.validate.optional.boolean      false      ), false
    @eq ( Ωit__44 = -> types.validate.optional.boolean      undefined  ), undefined
    @eq ( Ωit__45 = -> types.validate.optional.boolean      null       ), null
    @throws ( Ωit__46 = -> types.validate.boolean           1 ), /expected a boolean/
    @throws ( Ωit__47 = -> types.validate.optional.boolean  1 ), /expected an optional boolean/
    #.........................................................................................................
    @eq ( Ωit__48 = -> types.type_of null            ), 'null'
    @eq ( Ωit__49 = -> types.type_of undefined       ), 'undefined'
    @eq ( Ωit__50 = -> types.type_of false           ), 'boolean'
    @eq ( Ωit__51 = -> types.type_of Symbol 'p'      ), 'symbol'
    @eq ( Ωit__52 = -> types.type_of {}              ), 'object'
    @eq ( Ωit__53 = -> types.type_of NaN             ), 'unknown'
    @eq ( Ωit__54 = -> types.type_of +Infinity       ), 'unknown'
    @eq ( Ωit__55 = -> types.type_of -Infinity       ), 'unknown'
    #.........................................................................................................
    debug '^4324^', 'null           ', types.declarations.null
    debug '^4324^', 'function       ', types.declarations.function
    debug '^4324^', 'boolean        ', types.declarations.boolean
    debug '^4324^', 'text           ', types.declarations.text
    debug '^4324^', 'asyncfunction  ', types.declarations.asyncfunction
    debug '^4324^'
    debug '^4324^', 'null           ', types.isa.null
    debug '^4324^', 'function       ', types.isa.function
    debug '^4324^', 'boolean        ', types.isa.boolean
    debug '^4324^', 'text           ', types.isa.text
    debug '^4324^', 'asyncfunction  ', types.isa.asyncfunction
    debug '^4324^'
    debug '^4324^', 'null           ', types.isa.optional.null
    debug '^4324^', 'function       ', types.isa.optional.function
    debug '^4324^', 'boolean        ', types.isa.optional.boolean
    debug '^4324^', 'text           ', types.isa.optional.text
    debug '^4324^', 'asyncfunction  ', types.isa.optional.asyncfunction
    debug '^4324^'
    debug '^4324^', 'null           ', types.validate.null
    debug '^4324^', 'function       ', types.validate.function
    debug '^4324^', 'boolean        ', types.validate.boolean
    debug '^4324^', 'text           ', types.validate.text
    debug '^4324^', 'asyncfunction  ', types.validate.asyncfunction
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  basic_functionality_using_standalone_methods: ->
    INTERTYPE     = require '../../../apps/intertype'
    { isa
      validate
      type_of   } = new INTERTYPE.Intertype_minimal sample_declarations
    @eq ( Ωit__56 = -> isa.boolean           false               ), true
    @eq ( Ωit__57 = -> isa.boolean           true                ), true
    @eq ( Ωit__58 = -> isa.boolean           null                ), false
    @eq ( Ωit__59 = -> isa.boolean           1                   ), false
    @eq ( Ωit__60 = -> isa.unknown           1                   ), false
    @eq ( Ωit__61 = -> isa.unknown           Infinity            ), true
    @eq ( Ωit__62 = -> isa.optional.boolean  false               ), true
    @eq ( Ωit__63 = -> isa.optional.boolean  true                ), true
    @eq ( Ωit__64 = -> isa.optional.boolean  null                ), true
    @eq ( Ωit__65 = -> isa.optional.boolean  1                   ), false
    @eq ( Ωit__66 = -> isa.optional.unknown  1                   ), false
    @eq ( Ωit__67 = -> isa.optional.unknown  Infinity            ), true
    @eq ( Ωit__68 = -> isa.optional.unknown  undefined           ), true
    @eq ( Ωit__69 = -> isa.optional.unknown  undefined           ), true
    #.........................................................................................................
    @eq ( Ωit__70 = -> validate.boolean               false      ), false
    @eq ( Ωit__71 = -> validate.boolean               true       ), true
    @eq ( Ωit__72 = -> validate.optional.boolean      true       ), true
    @eq ( Ωit__73 = -> validate.optional.boolean      false      ), false
    @eq ( Ωit__74 = -> validate.optional.boolean      undefined  ), undefined
    @eq ( Ωit__75 = -> validate.optional.boolean      null       ), null
    @throws ( Ωit__76 = -> validate.boolean           1  ), /expected a boolean/
    @throws ( Ωit__77 = -> validate.optional.boolean  1  ), /expected an optional boolean/
    #.........................................................................................................
    @eq ( Ωit__78 = -> type_of null            ), 'null'
    @eq ( Ωit__79 = -> type_of undefined       ), 'undefined'
    @eq ( Ωit__80 = -> type_of false           ), 'boolean'
    @eq ( Ωit__81 = -> type_of Symbol 'p'      ), 'symbol'
    @eq ( Ωit__82 = -> type_of {}              ), 'object'
    @eq ( Ωit__83 = -> type_of NaN             ), 'unknown'
    @eq ( Ωit__84 = -> type_of +Infinity       ), 'unknown'
    @eq ( Ωit__85 = -> type_of -Infinity       ), 'unknown'
    #.........................................................................................................
    @eq ( Ωit__86 = -> isa.asyncfunction.name               ), 'isa.asyncfunction'
    @eq ( Ωit__87 = -> isa.optional.asyncfunction.name      ), 'isa.optional.asyncfunction'
    @eq ( Ωit__88 = -> validate.asyncfunction.name          ), 'validate.asyncfunction'
    @eq ( Ωit__89 = -> validate.optional.asyncfunction.name ), 'validate.optional.asyncfunction'
    #.........................................................................................................
    @throws ( Ωit__90 = -> isa.float 3, 4 ), /method 'isa.float' expects 1 arguments, got 2/
    @throws ( Ωit__91 = -> isa.float()    ), /method 'isa.float' expects 1 arguments, got 0/
    return null

  #-----------------------------------------------------------------------------------------------------------
  methods_check_arity: ->
    INTERTYPE     = require '../../../apps/intertype'
    { isa
      validate
      type_of   } = new INTERTYPE.Intertype_minimal sample_declarations
    #.........................................................................................................
    @throws ( Ωit__92 = -> isa.float 3, 4               ), /method 'isa.float' expects 1 arguments, got 2/
    @throws ( Ωit__93 = -> isa.float()                  ), /method 'isa.float' expects 1 arguments, got 0/
    @throws ( Ωit__94 = -> isa.optional.float 3, 4      ), /method 'isa.optional.float' expects 1 arguments, got 2/
    @throws ( Ωit__95 = -> isa.optional.float()         ), /method 'isa.optional.float' expects 1 arguments, got 0/
    @throws ( Ωit__96 = -> validate.float 3, 4          ), /method 'validate.float' expects 1 arguments, got 2/
    @throws ( Ωit__97 = -> validate.float()             ), /method 'validate.float' expects 1 arguments, got 0/
    @throws ( Ωit__98 = -> validate.optional.float 3, 4 ), /method 'validate.optional.float' expects 1 arguments, got 2/
    @throws ( Ωit__99 = -> validate.optional.float()    ), /method 'validate.optional.float' expects 1 arguments, got 0/
    @throws ( Ωit_100 = -> type_of 3, 4                 ), /expected 1 arguments, got 2/
    @throws ( Ωit_101 = -> type_of()                    ), /expected 1 arguments, got 0/
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  same_basic_types: ->
    { isa
      validate
      type_of   } = require '../../../apps/intertype'
    #.........................................................................................................
    boolean                 = false
    $function               = ->
    asyncfunction           = -> await null
    generatorfunction       = ( -> yield null )
    generator               = ( -> yield null )()
    asyncgeneratorfunction  = ( -> yield await null )
    asyncgenerator          = ( -> yield await null )()
    symbol                  = Symbol 'what'
    #.........................................................................................................
    @eq ( Ωit_102 = -> isa.boolean                     boolean                 ), true
    @eq ( Ωit_103 = -> isa.function                    $function               ), true
    @eq ( Ωit_104 = -> isa.asyncfunction               asyncfunction           ), true
    @eq ( Ωit_105 = -> isa.generatorfunction           generatorfunction       ), true
    @eq ( Ωit_106 = -> isa.asyncgeneratorfunction      asyncgeneratorfunction  ), true
    @eq ( Ωit_107 = -> isa.asyncgenerator              asyncgenerator          ), true
    @eq ( Ωit_108 = -> isa.generator                   generator               ), true
    @eq ( Ωit_109 = -> isa.symbol                      symbol                  ), true
    #.........................................................................................................
    @eq ( Ωit_110 = -> validate.boolean                boolean                 ), boolean
    @eq ( Ωit_111 = -> validate.function               $function               ), $function
    @eq ( Ωit_112 = -> validate.asyncfunction          asyncfunction           ), asyncfunction
    @eq ( Ωit_113 = -> validate.generatorfunction      generatorfunction       ), generatorfunction
    @eq ( Ωit_114 = -> validate.asyncgeneratorfunction asyncgeneratorfunction  ), asyncgeneratorfunction
    @eq ( Ωit_115 = -> validate.asyncgenerator         asyncgenerator          ), asyncgenerator
    @eq ( Ωit_116 = -> validate.generator              generator               ), generator
    @eq ( Ωit_117 = -> validate.symbol                 symbol                  ), symbol
    #.........................................................................................................
    @eq ( Ωit_118 = -> type_of boolean                                         ), 'boolean'
    @eq ( Ωit_119 = -> type_of $function                                       ), 'function'
    @eq ( Ωit_120 = -> type_of asyncfunction                                   ), 'asyncfunction'
    @eq ( Ωit_121 = -> type_of generatorfunction                               ), 'generatorfunction'
    @eq ( Ωit_122 = -> type_of asyncgeneratorfunction                          ), 'asyncgeneratorfunction'
    @eq ( Ωit_123 = -> type_of asyncgenerator                                  ), 'asyncgenerator'
    @eq ( Ωit_124 = -> type_of generator                                       ), 'generator'
    @eq ( Ωit_125 = -> type_of symbol                                          ), 'symbol'
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  throw_instructive_error_on_missing_type: ->
    INTERTYPE     = require '../../../apps/intertype'
    { isa
      validate
      type_of   } = new INTERTYPE.Intertype()
    #.........................................................................................................
    @throws ( Ωit_126 = -> isa.quux                    ), /unknown type 'quux'/
    @throws ( Ωit_127 = -> isa.quux()                  ), /unknown type 'quux'/
    @throws ( Ωit_128 = -> isa.quux 3                  ), /unknown type 'quux'/
    @throws ( Ωit_129 = -> isa.quux 3, 4               ), /unknown type 'quux'/
    @throws ( Ωit_130 = -> isa.optional.quux           ), /unknown type 'quux'/
    @throws ( Ωit_131 = -> isa.optional.quux()         ), /unknown type 'quux'/
    @throws ( Ωit_132 = -> isa.optional.quux 3         ), /unknown type 'quux'/
    @throws ( Ωit_133 = -> isa.optional.quux 3, 4      ), /unknown type 'quux'/
    @throws ( Ωit_134 = -> validate.quux               ), /unknown type 'quux'/
    @throws ( Ωit_135 = -> validate.quux()             ), /unknown type 'quux'/
    @throws ( Ωit_136 = -> validate.quux 3             ), /unknown type 'quux'/
    @throws ( Ωit_137 = -> validate.quux 3, 4          ), /unknown type 'quux'/
    @throws ( Ωit_138 = -> validate.optional.quux      ), /unknown type 'quux'/
    @throws ( Ωit_139 = -> validate.optional.quux()    ), /unknown type 'quux'/
    @throws ( Ωit_140 = -> validate.optional.quux 3    ), /unknown type 'quux'/
    @throws ( Ωit_141 = -> validate.optional.quux 3, 4 ), /unknown type 'quux'/
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  throw_instructive_error_when_optional_is_declared: ->
    INTERTYPE     = require '../../../apps/intertype'
    @throws ( Ωit_142 = -> new INTERTYPE.Intertype_minimal { optional: ( ( x ) -> true ), } ), /not allowed to re-declare type 'optional'/
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  throw_instructive_error_when_wrong_type_of_isa_test_declared: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    @throws ( Ωit_143 = -> new Intertype { foo: ( -> ), }                      ), /expected function with 1 parameters, got one with 0/
    @throws ( Ωit_144 = -> new Intertype { foo: ( ( a, b ) -> ), }             ), /expected function with 1 parameters, got one with 2/
    @throws ( Ωit_145 = -> new Intertype { foo: true, }                        ), /expected type name, method, or object to indicate test method, got a boolean/
    @throws ( Ωit_146 = -> new Intertype { foo: undefined, }                   ), /expected type name, method, or object to indicate test method, got a undefined/
    @throws ( Ωit_147 = -> new Intertype { foo: null, }                        ), /expected type name, method, or object to indicate test method, got a null/
    @throws ( Ωit_148 = -> new Intertype { foo: {}, }                          ), /expected type name, method, or object to indicate test method, got a undefined/
    @throws ( Ωit_149 = -> new Intertype { foo: { test: null, }, }             ), /expected type name, method, or object to indicate test method, got a null/
    @throws ( Ωit_150 = -> new Intertype { foo: { test: false, }, }            ), /expected type name, method, or object to indicate test method, got a boolean/
    @throws ( Ωit_151 = -> new Intertype { foo: { test: ( ( a, b ) -> ), }, }  ), /expected function with 1 parameters, got one with 2/
    @throws ( Ωit_152 = -> new Intertype { foo: 'quux', }                      ), /unknown type 'quux'/
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  allow_declaration_objects: ->
    { Intertype_minimal } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      declarations  = { sample_declarations..., }
      declarations.integer =
        test:     ( x ) -> Number.isInteger x
        template: 0
      types = new Intertype_minimal declarations
      @eq ( Ωit_153 = -> TMP_types.isa.function types.isa.integer  ), true
      @eq ( Ωit_154 = -> types.isa.integer.length                  ), 1
      @eq ( Ωit_155 = -> types.isa.integer 123                     ), true
      @eq ( Ωit_156 = -> types.isa.integer 123.456                 ), false
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  create_entries_must_be_sync_functions: ->
    { Intertype_minimal } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      declarations  = { sample_declarations..., }
      declarations.integer =
        test:     ( x ) -> Number.isInteger x
        create:   -> await 0
      @throws ( Ωit_157 = -> new Intertype_minimal declarations ), /expected a function for `create` entry of type 'integer', got a asyncfunction/
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  template_methods_must_be_nullary: ->
    { Intertype_minimal } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      declarations  = { sample_declarations..., }
      declarations.foolist =
        test:     ( x ) -> true
        template: ( n ) -> [ n, ]
      @throws ( Ωit_158 = -> new Intertype_minimal declarations ), /template method for type 'foolist' has arity 1 but must be nullary/
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  intertype_knows_its_base_types: ->
    { isa } = require '../../../apps/intertype'
    #.........................................................................................................
    @eq ( Ωit_159 = -> isa.basetype 'optional'   ), false
    @eq ( Ωit_160 = -> isa.basetype 'anything'   ), true
    @eq ( Ωit_161 = -> isa.basetype 'nothing'    ), true
    @eq ( Ωit_162 = -> isa.basetype 'something'  ), true
    @eq ( Ωit_163 = -> isa.basetype 'null'       ), true
    @eq ( Ωit_164 = -> isa.basetype 'undefined'  ), true
    @eq ( Ωit_165 = -> isa.basetype 'unknown'    ), true
    @eq ( Ωit_166 = -> isa.basetype 'integer'    ), false
    @eq ( Ωit_167 = -> isa.basetype 'float'      ), false
    @eq ( Ωit_168 = -> isa.basetype 'basetype'   ), false
    @eq ( Ωit_169 = -> isa.basetype 'quux'       ), false
    @eq ( Ωit_170 = -> isa.basetype 'toString'   ), false
    @eq ( Ωit_171 = -> isa.basetype null         ), false
    @eq ( Ωit_172 = -> isa.basetype undefined    ), false
    @eq ( Ωit_173 = -> isa.basetype 4            ), false
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  disallow_licensed_overrides: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      types         = new Intertype()
      @eq ( Ωit_174 = -> types.isa.float 4 ), true
      #.......................................................................................................
      overrides     =
        float:
          test:       ( x ) -> x is 'float'
      @throws ( Ωit_175 = -> types.declare overrides ), /not allowed to re-declare type 'float'/
      #.......................................................................................................
      ### pre-existing declaration remains valid: ###
      @eq ( Ωit_176 = -> types.isa.float 4       ), true
      @eq ( Ωit_177 = -> types.isa.float 'float' ), false
      return null
    #.........................................................................................................
    do =>
      types         = new Intertype()
      @eq ( Ωit_178 = -> types.isa.float 4 ), true
      #.......................................................................................................
      overrides     =
        float:
          override:   true
          test:       ( x ) -> x is 'float'
      @throws ( Ωit_179 = -> types.declare overrides ), /not allowed to re-declare type 'float'/
      return null
    #.........................................................................................................
    do =>
      types         = new Intertype()
      @eq ( Ωit_180 = -> types.isa.float 4 ), true
      #.......................................................................................................
      overrides     =
        anything:
          override:   true
          test:       ( x ) -> true
      @throws ( Ωit_181 = -> types.declare overrides ), /not allowed to re-declare basetype 'anything'/
      #.......................................................................................................
      ### pre-existing declaration remains valid: ###
      @eq ( Ωit_182 = -> types.isa.anything 4       ), true
      @eq ( Ωit_183 = -> types.isa.anything 'float' ), true
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  can_create_types_with_templates_and_create: ->
    { Intertype
      Intertype_minimal } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      declarations  = { sample_declarations..., }
      declarations.integer =
        test:     ( x ) -> Number.isInteger x
        template: 0
      declarations.text = { template: '', test: ( ( x ) -> ( typeof x ) is 'string' ), }
      declarations.float =
        test:     ( x ) -> Number.isFinite x
        create:   ( p = null ) -> parseFloat p ? @declarations.float.template
        template: 0
      declarations.nan = ( x ) -> Number.isNaN x
      #.......................................................................................................
      types = new Intertype_minimal declarations
      @eq ( Ωit_184 = -> TMP_types.isa.object types.declarations       ), true
      @eq ( Ωit_185 = -> TMP_types.isa.object types.declarations.float ), true
      @eq ( Ωit_186 = -> TMP_types.isa.object types.declarations.text  ), true
      #.......................................................................................................
      @throws ( Ωit_187 = -> types.create.boolean() ), /type declaration of 'boolean' has no `create` and no `template` entries, cannot be created/
      @throws ( Ωit_188 = -> types.create.text 'foo' ), /expected 0 arguments, got 1/
      #.......................................................................................................
      @eq ( Ωit_189 = -> types.create.text()         ), ''
      @eq ( Ωit_190 = -> types.create.integer()      ), 0
      @eq ( Ωit_191 = -> types.create.float()        ), 0
      @eq ( Ωit_192 = -> types.create.float '123.45' ), 123.45
      @throws ( Ωit_193 = -> types.create.float '***' ), /these arguments are not suitable for `create.float\(\)`: '\*\*\*'/
      #.......................................................................................................
      return null
    #.........................................................................................................
    do =>
      declarations =
        quantity:
          test:       'object'
          template:
            q:        0
            u:        'u'
        'quantity.q': 'float'
        'quantity.u': 'text'
      { isa
        validate
        create    } = new Intertype declarations
      @eq ( Ωit_194 = -> create.quantity()    ), { q: 0, u: 'u', }
      return null
    #.........................................................................................................
    do =>
      declarations =
        quantity:
          test:       'object'
          template:
            q:        0
            u:        'u'
          fields:
            q:        'float'
            u:        'text'
      { isa
        validate
        create    } = new Intertype declarations
      @eq ( Ωit_195 = -> create.quantity()                         ), { q: 0, u: 'u', }
      @eq ( Ωit_196 = -> create.quantity { q: 123, }               ), { q: 123, u: 'u', }
      @eq ( Ωit_197 = -> create.quantity { u: 'kg', }              ), { q: 0, u: 'kg', }
      @eq ( Ωit_198 = -> create.quantity { u: 'kg', foo: 'bar', }  ), { q: 0, u: 'kg', foo: 'bar', }
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  builtin_types_support_create: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      types       = new Intertype()
      { create
        type_of } = types
      @eq ( Ωit_199 = -> create.float()         ), 0
      @eq ( Ωit_200 = -> create.boolean()       ), false
      @eq ( Ωit_201 = -> create.object()        ), {}
      @eq ( Ωit_202 = -> create.float()         ), 0
      @eq ( Ωit_203 = -> create.infinity()      ), Infinity
      @eq ( Ωit_204 = -> create.text()          ), ''
      @eq ( Ωit_205 = -> create.list()          ), []
      @eq ( Ωit_206 = -> create.regex()         ), new RegExp()
      @eq ( Ωit_207 = -> type_of create.function()      ), 'function'
      @eq ( Ωit_208 = -> type_of create.asyncfunction() ), 'asyncfunction'
      @eq ( Ωit_209 = -> type_of create.symbol()        ), 'symbol'
      @throws ( Ωit_210 = -> create.basetype() ), /type declaration of 'basetype' has no `create` and no `template` entries, cannot be created/
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  template_functions_are_called_in_template_fields: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      types       = new Intertype()
      { declare
        create
        isa
        type_of
        declarations  } = types
      declare quantity:
        test:     'object'
        fields:
          q:      'float'
          u:      'text'
        template:
          q:      -> @create.float()
          u:      -> 'u'
      debug '^3234^', create.quantity()
      debug '^3234^', declarations.quantity
      @eq ( Ωit_211 = -> create.quantity()                          ), { q: 0, u: 'u', }
      @eq ( Ωit_212 = -> isa.quantity { q: 9, }                     ), false
      @eq ( Ωit_213 = -> type_of declarations.quantity.sub_tests.q  ), 'function'
      @eq ( Ωit_214 = -> type_of declarations.quantity.sub_tests.u  ), 'function'
      return null
    #.........................................................................................................
    do =>
      types       = new Intertype()
      { declare
        create
        type_of } = types
      declare foo:
        test:     'object'
        fields:
          foo:
            test:   'object'
            fields:
              bar:
                test:     'float'
        template:
          foo:
            bar: 123
      debug '^3234^', create.foo()
      @eq ( Ωit_215 = -> create.foo() ), { foo: { bar: 123, } }
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  type_object_assumed_if_fields_present: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      types       = new Intertype()
      { declare
        declarations
        create
        type_of
        isa     } = types
      declare quantity:
        # test: 'object'
        fields:
          q:      'float'
          u:      'text'
      @eq ( Ωit_216 = -> type_of declarations.quantity.test ), 'function'
      debug '^342342^', declarations.quantity
      @eq ( Ωit_217 = -> type_of declarations.quantity.sub_tests.q ), 'function'
      @eq ( Ωit_218 = -> type_of declarations.quantity.sub_tests.u ), 'function'
      @eq ( Ωit_219 = -> isa.quantity { q: 987, u: 's', } ), true
      @eq ( Ωit_220 = -> isa.quantity { q: 987, } ), false
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  intertype_minimal_has_only_base_types: ->
    { Intertype_minimal } = require '../../../apps/intertype'
    types = new Intertype_minimal()
    @eq ( Ωit_221 = -> ( Object.keys types.declarations ).sort() ), [ 'anything', 'nothing', 'null', 'optional', 'something', 'undefined', 'unknown' ]
    types.declare { z: ( ( x ) -> ), }
    @eq ( Ωit_222 = -> ( Object.keys types.declarations ).sort() ), [ 'anything', 'nothing', 'null', 'optional', 'something', 'undefined', 'unknown', 'z' ]
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  can_use_type_name_for_test: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      types = new Intertype()
      @throws ( Ωit_223 = -> types.declare { z: 'quux', } ), /unknown type 'quux'/
      types.declare { z: 'float', }
      @eq ( Ωit_224 = -> types.isa.z 12 ), true
      @eq ( Ωit_225 = -> types.isa.float.name                ), 'isa.float'
      @eq ( Ωit_226 = -> types.declarations.float.type       ), 'float'
      @eq ( Ωit_227 = -> types.declarations.float.test.name  ), 'float'
      @eq ( Ωit_228 = -> types.isa.z.name                    ), 'isa.z'
      @eq ( Ωit_229 = -> types.declarations.z.type           ), 'z'
      @eq ( Ωit_230 = -> types.declarations.z.test.name      ), 'z' # ?
    #.........................................................................................................
    do =>
      types = new Intertype()
      @throws ( Ωit_231 = -> types.declare { z: { test: 'quux', }, } ), /unknown type 'quux'/
      types.declare { z: { test: 'float', }, }
      @eq ( Ωit_232 = -> types.isa.z 12 ), true
      @eq ( Ωit_233 = -> types.isa.float.name                ), 'isa.float'
      @eq ( Ωit_234 = -> types.declarations.float.type       ), 'float'
      @eq ( Ωit_235 = -> types.declarations.float.test.name  ), 'float'
      @eq ( Ωit_236 = -> types.isa.z.name                    ), 'isa.z'
      @eq ( Ωit_237 = -> types.declarations.z.type           ), 'z'
      @eq ( Ωit_238 = -> types.declarations.z.test.name      ), 'z'
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  resolve_dotted_type: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      types = new Intertype()
      @eq ( Ωit_239 = -> Reflect.has types.declarations, 'foo'           ), false
      types.declare { foo: 'object', }
      @eq ( Ωit_240 = -> Reflect.has types.declarations, 'foo'           ), true
      @eq ( Ωit_241 = -> Reflect.has types.declarations, 'foo.bar'       ), false
      types.declare { 'foo.bar': 'object', }
      @eq ( Ωit_242 = -> Reflect.has types.declarations, 'foo.bar'       ), true
      @eq ( Ωit_243 = -> Reflect.has types.declarations, 'foo.bar.baz'   ), false
      types.declare { 'foo.bar.baz': 'float', }
      @eq ( Ωit_244 = -> Reflect.has types.declarations, 'foo.bar.baz'   ), true
      @eq ( Ωit_245 = -> types.isa.foo.bar.baz null                      ), false
      @eq ( Ωit_246 = -> types.isa.foo.bar.baz 4                         ), true
      @eq ( Ωit_247 = -> types.isa.foo.bar.baz +Infinity                 ), false
      # T?.eq types.declarations[ 'foo.bar.baz' ].test, types.declarations.float.test
      # types.declare { 'foo.bar.baz.quux.dax.dux': 'float', }
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  dotted_types_are_test_methods: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      types = new Intertype()
      types.declare { quantity: 'object', }
      types.declare { 'quantity.q': 'float', }
      types.declare { 'quantity.u': 'text', }
      @eq ( Ωit_248 = -> types.isa[ 'quantity.q' ] ), types.declarations[ 'quantity' ].sub_tests[ 'q' ]
      @eq ( Ωit_249 = -> types.isa[ 'quantity.q' ] ), types.isa.quantity.q
      # debug '^409-1^', types.declarations
      @eq ( Ωit_250 = -> types.isa.quantity {}                 ), false
      @eq ( Ωit_251 = -> types.isa.quantity { q: {}, }         ), false
      @eq ( Ωit_252 = -> types.isa.quantity { q: 3, }          ), false
      @eq ( Ωit_253 = -> types.isa.quantity { q: 3, u: 'm', }  ), true
      @eq ( Ωit_254 = -> types.isa.quantity.q 3                ), true
      @eq ( Ωit_255 = -> types.isa.quantity.q 3.1              ), true
      @eq ( Ωit_256 = -> types.isa.quantity.q '3.1'            ), false
      @eq ( Ωit_257 = -> types.isa.quantity.u 'm'              ), true
      @eq ( Ωit_258 = -> types.isa.quantity.u null             ), false
      @eq ( Ωit_259 = -> types.isa.quantity.u 3                ), false
      debug '^433-1^', types.declarations[ 'quantity' ]
      debug '^433-1^', types.declarations[ 'quantity.q' ]
      debug '^433-1^', types.declarations[ 'quantity.u' ]
      return null
    #.........................................................................................................
    do =>
      types = new Intertype()
      types.declare { 'person':                       'object', }
      types.declare { 'person.name':                  'text',   }
      types.declare { 'person.address':               'object', }
      types.declare { 'person.address.city':          'object', }
      types.declare { 'person.address.city.name':     'text',   }
      types.declare { 'person.address.city.postcode': 'text',   }
      # T?.eq types.isa[ 'quantity.q' ], types.declarations[ 'quantity' ].sub_tests[ 'q' ]
      # T?.eq types.isa[ 'quantity.q' ], types.isa.quantity.q
      @eq ( Ωit_260 = -> types.isa.person.address.city.name 'P'  ), true
      @eq ( Ωit_261 = -> types.isa.person.address.city.name 1234 ), false
      @eq ( Ωit_262 = -> types.isa.person 1234 ), false
      @eq ( Ωit_263 = -> types.isa.person { name: 'Bob', } ), false
      @eq ( Ωit_264 = -> types.isa.person { name: 'Bob', address: {}, } ), false
      @eq ( Ωit_265 = -> types.isa.person { name: 'Bob', address: { city: {}, }, } ), false
      @eq ( Ωit_266 = -> types.isa.person { name: 'Bob', address: { city: { name: 'P', }, }, } ), false
      @eq ( Ωit_267 = -> types.isa.person { name: 'Bob', address: { city: { name: 'P', postcode: 'SO36', }, }, } ), true
      @eq ( Ωit_268 = -> types.isa.person.address.city.name     'P'                                ), true
      @eq ( Ωit_269 = -> types.isa.person.address.city.postcode 'SO36'                             ), true
      @eq ( Ωit_270 = -> types.isa.person.address.city {         name: 'P', postcode: 'SO36', }    ), true
      @eq ( Ωit_271 = -> types.isa.person.address      { city: { name: 'P', postcode: 'SO36', }, } ), true
      help '^322-1^', ( { "#{k}": f.name } for k, f of types.declarations[ 'person'               ].sub_tests )
      help '^322-2^', ( { "#{k}": f.name } for k, f of types.declarations[ 'person.address'       ].sub_tests )
      help '^322-3^', ( { "#{k}": f.name } for k, f of types.declarations[ 'person.address.city'  ].sub_tests )
      @eq ( Ωit_272 = -> Object.keys types.declarations[ 'person'               ].sub_tests ), [ 'name', 'address', ]
      @eq ( Ωit_273 = -> Object.keys types.declarations[ 'person.address'       ].sub_tests ), [ 'city', ]
      @eq ( Ωit_274 = -> Object.keys types.declarations[ 'person.address.city'  ].sub_tests ), [ 'name', 'postcode', ]
      @eq ( Ωit_275 = -> types.declarations[ 'person' ].sub_tests isnt types.declarations[ 'person.address'      ].sub_tests ), true
      @eq ( Ωit_276 = -> types.declarations[ 'person' ].sub_tests isnt types.declarations[ 'person.address.city' ].sub_tests ), true
      return null
    #.........................................................................................................
    do =>
      types = new Intertype()
      types.declare { 'foo':      'float', }
      types.declare { 'foo.bar':  'text',   }
      do =>
        d = 3
        # d.bar = '?' # Cannot create property in strict mode, so can never satisfy test
        @eq ( Ωit_277 = -> types.isa.foo d ), false
        return null
      do =>
        d = new Number 3
        d.bar = '?'
        @eq ( Ωit_278 = -> d.bar ), '?'
        # still won't work b/c `float` doesn't accept objects (which is a good thing):
        @eq ( Ωit_279 = -> types.isa.foo d ), false
        return null
      return null
    #.........................................................................................................
    do =>
      types = new Intertype()
      types.declare { 'foo':        'object', }
      types.declare { 'foo.bind':   'float',   }
      types.declare { 'foo.apply':  'float',   }
      types.declare { 'foo.call':   'float',   }
      types.declare { 'foo.name':   'float',   }
      types.declare { 'foo.length': 'float',   }
      @eq ( Ωit_280 = -> types.isa.foo {} ), false
      @eq ( Ωit_281 = -> types.isa.foo { bind: 1, apply: 2, call: 3, name: 4, length: 5, } ), true
      return null
    #.........................................................................................................
    do =>
      types = new Intertype()
      types.declare { 'foo':        'object',           }
      types.declare { 'foo.text':   ( ( x ) -> x is 1 ) }
      types.declare { 'foo.float':  ( ( x ) -> x is 2 ) }
      @eq ( Ωit_282 = -> types.isa.foo {} ), false
      @eq ( Ωit_283 = -> types.isa.foo { text: 1, float: 2, } ), true
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  can_use_refs_to_dotted_types: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      types = new Intertype()
      types.declare { 'person':                       'object', }
      types.declare { 'person.name':                  'text',   }
      types.declare { 'person.address':               'object', }
      types.declare { 'person.address.city':          'object', }
      types.declare { 'person.address.city.name':     'text',   }
      types.declare { 'person.address.city.postcode': 'text',   }
      types.declare { 'mycity':                       ( ( x ) -> @isa.person.address.city x ), }
      # debug '^434-1^', types.declarations[ 'person.address.city' ]
      # debug '^434-2^', types.declarations.mycity
      urge '^342-1^', ( types.declarations.mycity )
      @eq ( Ωit_284 = -> types.isa.person.address.city {} ), false
      @eq ( Ωit_285 = -> types.isa.person.address.city null ), false
      @eq ( Ωit_286 = -> types.isa.person.address.city { name: 'P', postcode: 'SO36', } ), true
      @eq ( Ωit_287 = -> types.isa.mycity {} ), false
      @eq ( Ωit_288 = -> types.isa.mycity null ), false
      @eq ( Ωit_289 = -> types.isa.mycity { name: 'P', postcode: 'SO36', } ), true
      return null
    #.........................................................................................................
    do =>
      types = new Intertype()
      types.declare { 'person':                       'object', }
      types.declare { 'person.name':                  'text',   }
      types.declare { 'person.address':               'object', }
      types.declare { 'person.address.city':          'object', }
      types.declare { 'person.address.city.name':     'text',   }
      types.declare { 'person.address.city.postcode': 'text',   }
      types.declare { 'mycity':                       'person.address.city', }
      # debug '^434-3^', types.declarations[ 'person.address.city' ]
      # debug '^434-4^', types.declarations.mycity
      urge '^342-2^', ( types.declarations.mycity )
      @eq ( Ωit_290 = -> types.isa.person.address.city {} ), false
      @eq ( Ωit_291 = -> types.isa.person.address.city null ), false
      @eq ( Ωit_292 = -> types.isa.person.address.city { name: 'P', postcode: 'SO36', } ), true
      @eq ( Ωit_293 = -> types.isa.mycity {} ), false
      @eq ( Ωit_294 = -> types.isa.mycity null ), false
      @eq ( Ωit_295 = -> types.isa.mycity { name: 'P', postcode: 'SO36', } ), true
      return null
    #.........................................................................................................
    do =>
      types = new Intertype()
      types.declare { 'person':                       'object', }
      types.declare { 'person.name':                  'text',   }
      types.declare { 'person.address':               'object', }
      types.declare { 'person.address.city':          'object', }
      types.declare { 'person.address.city.name':     'text',   }
      types.declare { 'person.address.city.postcode': 'text',   }
      types.declare { 'mycity':                       ( ( x ) -> @isa.optional.person.address.city x ), }
      # debug '^434-5^', types.declarations[ 'person.address.city' ]
      # debug '^434-6^', types.declarations.mycity
      urge '^342-3^', ( types.declarations.mycity )
      @eq ( Ωit_296 = -> types.isa.person.address.city {} ), false
      @eq ( Ωit_297 = -> types.isa.person.address.city null ), false
      @eq ( Ωit_298 = -> types.isa.person.address.city { name: 'P', postcode: 'SO36', } ), true
      @eq ( Ωit_299 = -> types.isa.optional.person.address.city {} ), false
      @eq ( Ωit_300 = -> types.isa.optional.person.address.city null ), true
      @eq ( Ωit_301 = -> types.isa.optional.person.address.city { name: 'P', postcode: 'SO36', } ), true
      @eq ( Ωit_302 = -> types.isa.mycity {} ), false
      @eq ( Ωit_303 = -> types.isa.mycity null ), true
      @eq ( Ωit_304 = -> types.isa.mycity { name: 'P', postcode: 'SO36', } ), true
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  forbidden_to_define_fields_on_basetypes: ->
    { Intertype
      declarations  } = require '../../../apps/intertype'
    #.........................................................................................................
    await do =>
      types         = new Intertype()
      { declare
        validate
        isa } = types
      @throws ( Ωit_305 = -> types.declare { 'optional.d':    ( ( x ) -> ), } ), /illegal use of 'optional' in declaration of type 'optional.d'/
      @throws ( Ωit_306 = -> types.declare { 'anything.d':    ( ( x ) -> ), } ), /illegal use of basetype 'anything' in declaration of type 'anything.d'/
      @throws ( Ωit_307 = -> types.declare { 'nothing.d':     ( ( x ) -> ), } ), /illegal use of basetype 'nothing' in declaration of type 'nothing.d'/
      @throws ( Ωit_308 = -> types.declare { 'something.d':   ( ( x ) -> ), } ), /illegal use of basetype 'something' in declaration of type 'something.d'/
      @throws ( Ωit_309 = -> types.declare { 'null.d':        ( ( x ) -> ), } ), /illegal use of basetype 'null' in declaration of type 'null.d'/
      @throws ( Ωit_310 = -> types.declare { 'undefined.d':   ( ( x ) -> ), } ), /illegal use of basetype 'undefined' in declaration of type 'undefined.d'/
      @throws ( Ωit_311 = -> types.declare { 'unknown.d':     ( ( x ) -> ), } ), /illegal use of basetype 'unknown' in declaration of type 'unknown.d'/
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  internal_type_of_method: ->
    { Intertype
      declarations
      __type_of     } = require '../../../apps/intertype'
    #.........................................................................................................
    _isa = Object.fromEntries ( [ type, declaration.test, ] for type, declaration of declarations )
    #.........................................................................................................
    do =>
      types         = new Intertype()
      @eq ( Ωit_312 = -> __type_of null, _isa, null          ), 'null'
      @eq ( Ωit_313 = -> __type_of null, _isa, undefined     ), 'undefined'
      @eq ( Ωit_314 = -> __type_of null, _isa, 4             ), 'float'
      @eq ( Ωit_315 = -> __type_of null, _isa, ->            ), 'function'
      @eq ( Ωit_316 = -> __type_of null, _isa, -> await null ), 'asyncfunction'
      @eq ( Ωit_317 = -> __type_of null, _isa, {}            ), 'object'
      @eq ( Ωit_318 = -> __type_of null, _isa, []            ), 'list'
      @eq ( Ωit_319 = -> __type_of null, _isa, +Infinity     ), 'infinity'
      @eq ( Ωit_320 = -> __type_of null, _isa, -Infinity     ), 'infinity'
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  deepmerge: ->
    { Intertype
      declarations
      deepmerge   } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      sub = { foo: 3, }
      probe =
        bar:
          baz:
            sub: sub
        gnu: 4
      result = deepmerge probe
      @eq ( Ωit_321 = -> result                                   ), probe
      @eq ( Ωit_322 = -> result.bar         is probe.bar          ), false
      @eq ( Ωit_323 = -> result.bar.baz     is probe.bar.baz      ), false
      @eq ( Ωit_324 = -> result.bar.baz.sub is probe.bar.baz.sub  ), false
      @eq ( Ωit_325 = -> result.bar.baz.sub is sub                ), false
      @eq ( Ωit_326 = -> probe.bar.baz.sub  is sub                ), true
      return null
    #.........................................................................................................
    do =>
      sub = { foo: 3, }
      probe =
        bar:
          baz:
            sub: sub
        gnu: 4
      types = new Intertype { q: { test: 'object', template: probe, }, }
      result = types.create.q()
      @eq ( Ωit_327 = -> result                                   ), probe
      @eq ( Ωit_328 = -> result.bar         is probe.bar          ), false
      @eq ( Ωit_329 = -> result.bar.baz     is probe.bar.baz      ), false
      @eq ( Ωit_330 = -> result.bar.baz.sub is probe.bar.baz.sub  ), false
      @eq ( Ωit_331 = -> result.bar.baz.sub is sub                ), false
      @eq ( Ωit_332 = -> probe.bar.baz.sub  is sub                ), true
      return null
    #.........................................................................................................
    do =>
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  validate_dotted_types: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      types         = new Intertype()
      { validate }  = types
      types.declare { 'person':                       'object', }
      types.declare { 'person.name':                  'text',   }
      types.declare { 'person.address':               'object', }
      types.declare { 'person.address.city':          'object', }
      types.declare { 'person.address.city.name':     'text',   }
      types.declare { 'person.address.city.postcode': 'text',   }
      #.......................................................................................................
      @throws ( Ωit_333 = -> validate.person null                        ), /expected a person, got a null/
      @throws ( Ωit_334 = -> validate.person.address null                ), /expected a person.address, got a null/
      @throws ( Ωit_335 = -> validate.person.address.city null           ), /expected a person.address.city, got a null/
      @throws ( Ωit_336 = -> validate.person.address.city.postcode null  ), /expected a person.address.city.postcode, got a null/
      #.......................................................................................................
      @eq ( Ωit_337 = -> types.isa.person.address.city.postcode 3 ), false
      @throws ( Ωit_338 = -> validate.person.address.city.postcode 3             ), /expected a person.address.city.postcode/
      #.......................................................................................................
      @eq ( Ωit_339 = -> types.isa.person.address.city { name: 'P', } ), false
      @throws ( Ωit_340 = -> validate.person.address.city { name: 'P', }         ), /expected a person.address.city/
      # #.......................................................................................................
      @eq ( Ωit_341 = -> types.isa.person.address.city { postcode: '3421', } ), false
      @throws ( Ωit_342 = -> validate.person.address.city()                      ), /method 'validate.person.address.city' expects 1 arguments, got 0/
      @throws ( Ωit_343 = -> validate.person.address.city null                   ), /expected a person.address.city/
      @throws ( Ωit_344 = -> validate.person.address.city '3421'                 ), /expected a person.address.city/
      @throws ( Ωit_345 = -> validate.person.address.city { postcode: '3421', }  ), /expected a person.address.city/
      #.......................................................................................................
      @eq ( Ωit_346 = -> types.isa.person.address.city { name: 'P', postcode: '3421', } ), true
      @eq ( Ωit_347 = -> validate.person.address.city { name: 'P', postcode: '3421', } ), { name: 'P', postcode: '3421', }
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  use_evaluate: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      types         = new Intertype()
      { validate
        isa
        evaluate }  = types
      types.declare { 'person':                       'object', }
      types.declare { 'person.name':                  'text',   }
      types.declare { 'person.address':               'object', }
      types.declare { 'person.address.city':          'object', }
      types.declare { 'person.address.city.name':     'text',   }
      types.declare { 'person.address.city.postcode': 'text',   }
      #.......................................................................................................
      @throws ( Ωit_348 = -> evaluate.optional 1         ), /`optional` is not a legal type for `evaluate` methods/
      @throws ( Ωit_349 = -> evaluate.optional.person 1  ), /`optional` is not a legal type for `evaluate` methods/
      #.......................................................................................................
      @eq ( Ωit_350 = -> isa.person       { name: 'Alice', address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), true
      @eq ( Ωit_351 = -> evaluate.person  { name: 'Alice', address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), { person: true,  'person.name': true, 'person.address': true, 'person.address.city': true, 'person.address.city.name': true, 'person.address.city.postcode': true, }
      #.......................................................................................................
      @eq ( Ωit_352 = -> isa.person       { name: 'Alice', address: { city: { name: 'Atown', postcode: 12345678 } } } ), false
      @eq ( Ωit_353 = -> evaluate.person  { name: 'Alice', address: { city: { name: 'Atown', postcode: 12345678 } } } ), { person: false,  'person.name': true, 'person.address': false, 'person.address.city': false, 'person.address.city.name': true, 'person.address.city.postcode': false, }
      #.......................................................................................................
      @eq ( Ωit_354 = -> isa.person       {                address: { city: { name: 'Atown', postcode: 12345678 } } } ), false
      @eq ( Ωit_355 = -> evaluate.person  {                address: { city: { name: 'Atown', postcode: 12345678 } } } ), { person: false,  'person.name': false, 'person.address': false, 'person.address.city': false, 'person.address.city.name': true, 'person.address.city.postcode': false, }
      #.......................................................................................................
      @eq ( Ωit_356 = -> isa.person       {                address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), false
      @eq ( Ωit_357 = -> evaluate.person  {                address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), { person: false, 'person.name': false, 'person.address': true, 'person.address.city': true, 'person.address.city.name': true, 'person.address.city.postcode': true, }
      #.......................................................................................................
      @eq ( Ωit_358 = -> isa.person       null  ), false
      @eq ( Ωit_359 = -> evaluate.person  null  ), { person: false, 'person.name': false, 'person.address': false, 'person.address.city': false, 'person.address.city.name': false, 'person.address.city.postcode': false, }
      #.......................................................................................................
      @eq ( Ωit_360 = -> isa.person       {}    ), false
      @eq ( Ωit_361 = -> evaluate.person  {}    ), { person: false, 'person.name': false, 'person.address': false, 'person.address.city': false, 'person.address.city.name': false, 'person.address.city.postcode': false, }
      return null
    #.........................................................................................................
    do =>
      types         = new Intertype()
      { validate
        isa
        evaluate }  = types
      types.declare { 'person':                       'object', }
      types.declare { 'person.address':               'object', }
      types.declare { 'person.address.city':          'object', }
      types.declare { 'person.address.city.postcode': 'text',   }
      types.declare { 'person.address.city.name':     'text',   }
      types.declare { 'person.name':                  'text',   }
      #.......................................................................................................
      @eq ( Ωit_362 = -> isa.person                   { name: 'Alice', address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), true
      @eq ( Ωit_363 = -> evaluate.person              { name: 'Alice', address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), { person: true,  'person.name': true, 'person.address': true, 'person.address.city': true, 'person.address.city.name': true, 'person.address.city.postcode': true, }
      @eq ( Ωit_364 = -> Object.keys evaluate.person  { name: 'Alice', address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), [ 'person', 'person.address', 'person.address.city', 'person.address.city.postcode', 'person.address.city.name', 'person.name' ]
      #.......................................................................................................
      @eq ( Ωit_365 = -> isa.person                   {                address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), false
      @eq ( Ωit_366 = -> evaluate.person              {                address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), { person: false, 'person.name': false, 'person.address': true, 'person.address.city': true, 'person.address.city.name': true, 'person.address.city.postcode': true, }
      @eq ( Ωit_367 = -> Object.keys evaluate.person  {                address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), [ 'person', 'person.address', 'person.address.city', 'person.address.city.postcode', 'person.address.city.name', 'person.name' ]
      #.......................................................................................................
      @eq ( Ωit_368 = -> isa.person                   null  ), false
      @eq ( Ωit_369 = -> evaluate.person              null  ), { person: false, 'person.name': false, 'person.address': false, 'person.address.city': false, 'person.address.city.name': false, 'person.address.city.postcode': false, }
      @eq ( Ωit_370 = -> Object.keys evaluate.person  null  ), [ 'person', 'person.address', 'person.address.city', 'person.address.city.postcode', 'person.address.city.name', 'person.name' ]
      #.......................................................................................................
      @eq ( Ωit_371 = -> isa.person                   {}  ), false
      @eq ( Ωit_372 = -> evaluate.person              {}  ), { person: false, 'person.name': false, 'person.address': false, 'person.address.city': false, 'person.address.city.name': false, 'person.address.city.postcode': false, }
      @eq ( Ωit_373 = -> Object.keys evaluate.person  {}  ), [ 'person', 'person.address', 'person.address.city', 'person.address.city.postcode', 'person.address.city.name', 'person.name' ]
      #.......................................................................................................
      @eq ( Ωit_374 = -> isa.person.address                   { city: { name: 'Atown', postcode: 'VA1234' } } ), true
      @eq ( Ωit_375 = -> evaluate.person.address              { city: { name: 'Atown', postcode: 'VA1234' } } ), { 'person.address': true, 'person.address.city': true, 'person.address.city.name': true, 'person.address.city.postcode': true, }
      @eq ( Ωit_376 = -> Object.keys evaluate.person.address  { city: { name: 'Atown', postcode: 'VA1234' } } ), [ 'person.address', 'person.address.city', 'person.address.city.postcode', 'person.address.city.name' ]
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  walk_prefixes: ->
    { walk_prefixes
      isa
      type_of                     } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      @eq ( Ωit_377 = -> isa.generatorfunction walk_prefixes             ), true
      @eq ( Ωit_378 = -> [ ( walk_prefixes 'one'                )..., ]  ), []
      @eq ( Ωit_379 = -> [ ( walk_prefixes 'one.two'            )..., ]  ), [ 'one' ]
      @eq ( Ωit_380 = -> [ ( walk_prefixes 'one.two.three'      )..., ]  ), [ 'one', 'one.two', ]
      @eq ( Ωit_381 = -> [ ( walk_prefixes 'one.two.three.four' )..., ]  ), [ 'one', 'one.two', 'one.two.three', ]
      ### TAINT should not allow empty namers: ###
      @eq ( Ωit_382 = -> [ ( walk_prefixes '.one.two.three'     )..., ]  ), [ '', '.one', '.one.two', ]
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  can_use_namespaces: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      declarations =
        'foo.bar':      ( x ) -> x is 'foo.bar'
        'foo.bar.baz':  ( x ) -> x is 'foo.bar.baz'
      @throws ( Ωit_383 = -> types = new Intertype declarations ), /unknown partial type 'foo'/
      return null
    #.........................................................................................................
    do =>
      declarations =
        'quantity':         'object'
        'quantity.q':       'float'
        'quantity.u':       'text'
      types = new Intertype declarations
      @eq ( Ωit_384 = -> types.isa.quantity {}                   ), false
      @eq ( Ωit_385 = -> types.isa.quantity { q: 12, u: 'kg', }  ), true
      @eq ( Ωit_386 = -> types.isa[ 'quantity.q' ] 12            ), true
      @eq ( Ωit_387 = -> types.isa[ 'quantity.u' ] 'kg'          ), true
      @eq ( Ωit_388 = -> types.isa.quantity.q 12                 ), true
      @eq ( Ωit_389 = -> types.isa.quantity.u 'kg'               ), true
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  can_use_qualifiers: ->
    { Intertype_minimal } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      declarations =
        'empty':            { test: 'object', role: 'qualifier', }
        'nonempty':         { test: 'object', role: 'qualifier', }
        'empty.list':       ( x ) -> ( @isa.list  x ) and ( x.length  is  0 )
        'empty.text':       ( x ) -> ( @isa.text  x ) and ( x.length  is  0 )
        'empty.set':        ( x ) -> ( @isa.set   x ) and ( x.size    is  0 )
        'nonempty.list':    ( x ) -> ( @isa.list  x ) and ( x.length  >   0 )
        'nonempty.text':    ( x ) -> ( @isa.text  x ) and ( x.length  >   0 )
        'nonempty.set':     ( x ) -> ( @isa.set   x ) and ( x.size    >   0 )
      types   = new Intertype_minimal sample_declarations, declarations
      { isa } = types
      @eq ( Ωit_390 = -> isa.empty.list    []          ), true
      @eq ( Ωit_391 = -> isa.empty.list    [ 'A', ]    ), false
      @eq ( Ωit_392 = -> isa.empty.list    4           ), false
      @eq ( Ωit_393 = -> isa.nonempty.list []          ), false
      @eq ( Ωit_394 = -> isa.nonempty.list [ 'A', ]    ), true
      @eq ( Ωit_395 = -> isa.nonempty.list 4           ), false
      @eq ( Ωit_396 = -> isa.empty.text    ''          ), true
      @eq ( Ωit_397 = -> isa.empty.text    'A'         ), false
      @eq ( Ωit_398 = -> isa.empty.text    4           ), false
      @eq ( Ωit_399 = -> isa.nonempty.text ''          ), false
      @eq ( Ωit_400 = -> isa.nonempty.text 'A'         ), true
      @eq ( Ωit_401 = -> isa.nonempty.text 4           ), false
      ### this doesn't make a terrible lot of sense: ###
      @eq ( Ωit_402 = -> isa.empty { list: [], text: '', set: new Set() } ), false
      return null
    #.........................................................................................................
    do =>
      declarations =
        'empty':            { role: 'qualifier', }
        'nonempty':         { role: 'qualifier', }
        'empty.list':       ( x ) -> ( @isa.list  x ) and ( x.length  is  0 )
        'empty.text':       ( x ) -> ( @isa.text  x ) and ( x.length  is  0 )
        'empty.set':        ( x ) -> ( @isa.set   x ) and ( x.size    is  0 )
        'nonempty.list':    ( x ) -> ( @isa.list  x ) and ( x.length  >   0 )
        'nonempty.text':    ( x ) -> ( @isa.text  x ) and ( x.length  >   0 )
        'nonempty.set':     ( x ) -> ( @isa.set   x ) and ( x.size    >   0 )
      types         = new Intertype_minimal sample_declarations, declarations
      { isa
        validate  } = types
      @eq ( Ωit_403 = -> isa.empty.list    []          ), true
      @eq ( Ωit_404 = -> isa.empty.list    [ 'A', ]    ), false
      @eq ( Ωit_405 = -> isa.empty.list    4           ), false
      @eq ( Ωit_406 = -> isa.nonempty.list []          ), false
      @eq ( Ωit_407 = -> isa.nonempty.list [ 'A', ]    ), true
      @eq ( Ωit_408 = -> isa.nonempty.list 4           ), false
      @eq ( Ωit_409 = -> isa.empty.text    ''          ), true
      @eq ( Ωit_410 = -> isa.empty.text    'A'         ), false
      @eq ( Ωit_411 = -> isa.empty.text    4           ), false
      @eq ( Ωit_412 = -> isa.nonempty.text ''          ), false
      @eq ( Ωit_413 = -> isa.nonempty.text 'A'         ), true
      @eq ( Ωit_414 = -> isa.nonempty.text 4           ), false
      #.......................................................................................................
      @eq ( Ωit_415 = -> isa.empty []                  ), true
      @eq ( Ωit_416 = -> isa.empty ''                  ), true
      @eq ( Ωit_417 = -> isa.empty new Set()           ), true
      @eq ( Ωit_418 = -> isa.empty [ 1, ]              ), false
      @eq ( Ωit_419 = -> isa.empty 'A'                 ), false
      @eq ( Ωit_420 = -> isa.empty new Set 'abc'       ), false
      #.......................................................................................................
      @eq ( Ωit_421 = -> validate.empty []                  ), []
      @eq ( Ωit_422 = -> validate.empty ''                  ), ''
      @eq ( Ωit_423 = -> validate.empty new Set()           ), new Set()
      @throws ( Ωit_424 = -> validate.empty [ 1, ]              ), /expected a empty, got a list/
      @throws ( Ωit_425 = -> validate.empty 'A'                 ), /expected a empty, got a text/
      @throws ( Ωit_426 = -> validate.empty new Set 'abc'       ), /expected a empty, got a set/
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  can_use_optional_with_qualifiers: ->
    { Intertype_minimal } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      declarations =
        'empty':            { role: 'qualifier', }
        'nonempty':         { role: 'qualifier', }
        'empty.list':       ( x ) -> ( @isa.list  x ) and ( x.length  is  0 )
        'empty.text':       ( x ) -> ( @isa.text  x ) and ( x.length  is  0 )
        'empty.set':        ( x ) -> ( @isa.set   x ) and ( x.size    is  0 )
        'nonempty.list':    ( x ) -> ( @isa.list  x ) and ( x.length  >   0 )
        'nonempty.text':    ( x ) -> ( @isa.text  x ) and ( x.length  >   0 )
        'nonempty.set':     ( x ) -> ( @isa.set   x ) and ( x.size    >   0 )
      types         = new Intertype_minimal sample_declarations, declarations
      { isa
        validate  } = types
      @eq ( Ωit_427 = -> isa.optional.empty.list    []          ), true
      @eq ( Ωit_428 = -> isa.optional.empty.list    [ 'A', ]    ), false
      @eq ( Ωit_429 = -> isa.optional.empty.list    4           ), false
      @eq ( Ωit_430 = -> isa.optional.nonempty.list []          ), false
      @eq ( Ωit_431 = -> isa.optional.nonempty.list [ 'A', ]    ), true
      @eq ( Ωit_432 = -> isa.optional.nonempty.list 4           ), false
      @eq ( Ωit_433 = -> isa.optional.empty.text    ''          ), true
      @eq ( Ωit_434 = -> isa.optional.empty.text    'A'         ), false
      @eq ( Ωit_435 = -> isa.optional.empty.text    4           ), false
      @eq ( Ωit_436 = -> isa.optional.nonempty.text ''          ), false
      @eq ( Ωit_437 = -> isa.optional.nonempty.text 'A'         ), true
      @eq ( Ωit_438 = -> isa.optional.nonempty.text 4           ), false
      #.......................................................................................................
      @eq ( Ωit_439 = -> isa.optional.empty []                  ), true
      @eq ( Ωit_440 = -> isa.optional.empty ''                  ), true
      @eq ( Ωit_441 = -> isa.optional.empty new Set()           ), true
      @eq ( Ωit_442 = -> isa.optional.empty [ 1, ]              ), false
      @eq ( Ωit_443 = -> isa.optional.empty 'A'                 ), false
      @eq ( Ωit_444 = -> isa.optional.empty new Set 'abc'       ), false
      #.......................................................................................................
      @eq ( Ωit_445 = -> validate.optional.empty []                   ), []
      @eq ( Ωit_446 = -> validate.optional.empty ''                   ), ''
      @eq ( Ωit_447 = -> validate.optional.empty new Set()            ), new Set()
      @eq ( Ωit_448 = -> validate.optional.empty.list  []             ), []
      @eq ( Ωit_449 = -> validate.optional.empty.text  ''             ), ''
      @eq ( Ωit_450 = -> validate.optional.empty.set   new Set()      ), new Set()
      @throws ( Ωit_451 = -> validate.optional.empty [ 1, ]           ), /expected an optional empty, got a list/
      @throws ( Ωit_452 = -> validate.optional.empty 'A'              ), /expected an optional empty, got a text/
      @throws ( Ωit_453 = -> validate.optional.empty new Set 'abc'    ), /expected an optional empty, got a set/
      #.......................................................................................................
      @eq ( Ωit_454 = -> isa.optional.empty []                        ), true
      @eq ( Ωit_455 = -> isa.optional.empty ''                        ), true
      @eq ( Ωit_456 = -> isa.optional.empty new Set()                 ), true
      @eq ( Ωit_457 = -> isa.optional.empty [ 1, ]                    ), false
      @eq ( Ωit_458 = -> isa.optional.empty 'A'                       ), false
      @eq ( Ωit_459 = -> isa.optional.empty new Set 'abc'             ), false
      @eq ( Ωit_460 = -> validate.optional.empty       null           ), null
      @eq ( Ωit_461 = -> validate.optional.empty.list  null           ), null
      @eq ( Ωit_462 = -> validate.optional.empty.text  null           ), null
      @eq ( Ωit_463 = -> validate.optional.empty.set   null           ), null
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  use_fields_to_declare_qualifiers: ->
    { Intertype_minimal } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      declarations =
        empty:
          role:     'qualifier'
          fields:
            list:     ( x ) -> ( @isa.list  x ) and ( x.length  is  0 )
            text:     ( x ) -> ( @isa.text  x ) and ( x.length  is  0 )
            set:      ( x ) -> ( @isa.set   x ) and ( x.size    is  0 )
        nonempty:
          role:     'qualifier'
          fields:
            list:     ( x ) -> ( @isa.list  x ) and ( x.length  >   0 )
            text:     ( x ) -> ( @isa.text  x ) and ( x.length  >   0 )
            set:      ( x ) -> ( @isa.set   x ) and ( x.size    >   0 )
      #.......................................................................................................
      types         = new Intertype_minimal sample_declarations, declarations
      { isa
        validate  } = types
      #.......................................................................................................
      @eq ( Ωit_464 = -> isa.empty.list    []          ), true
      @eq ( Ωit_465 = -> isa.empty.list    [ 'A', ]    ), false
      @eq ( Ωit_466 = -> isa.empty.list    4           ), false
      @eq ( Ωit_467 = -> isa.nonempty.list []          ), false
      @eq ( Ωit_468 = -> isa.nonempty.list [ 'A', ]    ), true
      @eq ( Ωit_469 = -> isa.nonempty.list 4           ), false
      @eq ( Ωit_470 = -> isa.empty.text    ''          ), true
      @eq ( Ωit_471 = -> isa.empty.text    'A'         ), false
      @eq ( Ωit_472 = -> isa.empty.text    4           ), false
      @eq ( Ωit_473 = -> isa.nonempty.text ''          ), false
      @eq ( Ωit_474 = -> isa.nonempty.text 'A'         ), true
      @eq ( Ωit_475 = -> isa.nonempty.text 4           ), false
      #.......................................................................................................
      @eq ( Ωit_476 = -> isa.empty []                  ), true
      @eq ( Ωit_477 = -> isa.empty ''                  ), true
      @eq ( Ωit_478 = -> isa.empty new Set()           ), true
      @eq ( Ωit_479 = -> isa.empty [ 1, ]              ), false
      @eq ( Ωit_480 = -> isa.empty 'A'                 ), false
      @eq ( Ωit_481 = -> isa.empty new Set 'abc'       ), false
      #.......................................................................................................
      @eq ( Ωit_482 = -> validate.empty []                   ), []
      @eq ( Ωit_483 = -> validate.empty ''                   ), ''
      @eq ( Ωit_484 = -> validate.empty new Set()            ), new Set()
      @eq ( Ωit_485 = -> validate.empty.list  []             ), []
      @eq ( Ωit_486 = -> validate.empty.text  ''             ), ''
      @eq ( Ωit_487 = -> validate.empty.set   new Set()      ), new Set()
      @throws ( Ωit_488 = -> validate.empty [ 1, ]           ), /expected a empty, got a list/
      @throws ( Ωit_489 = -> validate.empty 'A'              ), /expected a empty, got a text/
      @throws ( Ωit_490 = -> validate.empty new Set 'abc'    ), /expected a empty, got a set/
      #.......................................................................................................
      @eq ( Ωit_491 = -> isa.empty []                        ), true
      @eq ( Ωit_492 = -> isa.empty ''                        ), true
      @eq ( Ωit_493 = -> isa.empty new Set()                 ), true
      @eq ( Ωit_494 = -> isa.empty [ 1, ]                    ), false
      @eq ( Ωit_495 = -> isa.empty 'A'                       ), false
      @eq ( Ωit_496 = -> isa.empty new Set 'abc'             ), false
      @throws ( Ωit_497 = -> validate.empty       null           ), /expected a empty, got a null/
      @throws ( Ωit_498 = -> validate.empty.list  null           ), /expected a empty.list, got a null/
      @throws ( Ωit_499 = -> validate.empty.text  null           ), /expected a empty.text, got a null/
      @throws ( Ωit_500 = -> validate.empty.set   null           ), /expected a empty.set, got a null/
      #.......................................................................................................
      @eq ( Ωit_501 = -> isa.optional.empty.list    []          ), true
      @eq ( Ωit_502 = -> isa.optional.empty.list    [ 'A', ]    ), false
      @eq ( Ωit_503 = -> isa.optional.empty.list    4           ), false
      @eq ( Ωit_504 = -> isa.optional.nonempty.list []          ), false
      @eq ( Ωit_505 = -> isa.optional.nonempty.list [ 'A', ]    ), true
      @eq ( Ωit_506 = -> isa.optional.nonempty.list 4           ), false
      @eq ( Ωit_507 = -> isa.optional.empty.text    ''          ), true
      @eq ( Ωit_508 = -> isa.optional.empty.text    'A'         ), false
      @eq ( Ωit_509 = -> isa.optional.empty.text    4           ), false
      @eq ( Ωit_510 = -> isa.optional.nonempty.text ''          ), false
      @eq ( Ωit_511 = -> isa.optional.nonempty.text 'A'         ), true
      @eq ( Ωit_512 = -> isa.optional.nonempty.text 4           ), false
      #.......................................................................................................
      @eq ( Ωit_513 = -> isa.optional.empty []                  ), true
      @eq ( Ωit_514 = -> isa.optional.empty ''                  ), true
      @eq ( Ωit_515 = -> isa.optional.empty new Set()           ), true
      @eq ( Ωit_516 = -> isa.optional.empty [ 1, ]              ), false
      @eq ( Ωit_517 = -> isa.optional.empty 'A'                 ), false
      @eq ( Ωit_518 = -> isa.optional.empty new Set 'abc'       ), false
      #.......................................................................................................
      @eq ( Ωit_519 = -> validate.optional.empty []                   ), []
      @eq ( Ωit_520 = -> validate.optional.empty ''                   ), ''
      @eq ( Ωit_521 = -> validate.optional.empty new Set()            ), new Set()
      @eq ( Ωit_522 = -> validate.optional.empty.list  []             ), []
      @eq ( Ωit_523 = -> validate.optional.empty.text  ''             ), ''
      @eq ( Ωit_524 = -> validate.optional.empty.set   new Set()      ), new Set()
      @throws ( Ωit_525 = -> validate.optional.empty [ 1, ]           ), /expected an optional empty, got a list/
      @throws ( Ωit_526 = -> validate.optional.empty 'A'              ), /expected an optional empty, got a text/
      @throws ( Ωit_527 = -> validate.optional.empty new Set 'abc'    ), /expected an optional empty, got a set/
      #.......................................................................................................
      @eq ( Ωit_528 = -> isa.optional.empty []                        ), true
      @eq ( Ωit_529 = -> isa.optional.empty ''                        ), true
      @eq ( Ωit_530 = -> isa.optional.empty new Set()                 ), true
      @eq ( Ωit_531 = -> isa.optional.empty [ 1, ]                    ), false
      @eq ( Ωit_532 = -> isa.optional.empty 'A'                       ), false
      @eq ( Ωit_533 = -> isa.optional.empty new Set 'abc'             ), false
      @eq ( Ωit_534 = -> validate.optional.empty       null           ), null
      @eq ( Ωit_535 = -> validate.optional.empty.list  null           ), null
      @eq ( Ωit_536 = -> validate.optional.empty.text  null           ), null
      @eq ( Ωit_537 = -> validate.optional.empty.set   null           ), null
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  builtin_qualifiers: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      types   = new Intertype()
      { isa
        validate
        evaluate
        type_of   } = types
      #.......................................................................................................
      @eq ( Ωit_538 = -> isa.empty.list    []                             ), true
      @eq ( Ωit_539 = -> isa.empty.list    [ 'A', ]                       ), false
      @eq ( Ωit_540 = -> isa.empty.list    4                              ), false
      @eq ( Ωit_541 = -> isa.nonempty.list []                             ), false
      @eq ( Ωit_542 = -> isa.nonempty.list [ 'A', ]                       ), true
      @eq ( Ωit_543 = -> isa.nonempty.list 4                              ), false
      @eq ( Ωit_544 = -> isa.empty.text    ''                             ), true
      @eq ( Ωit_545 = -> isa.empty.text    'A'                            ), false
      @eq ( Ωit_546 = -> isa.empty.text    4                              ), false
      @eq ( Ωit_547 = -> isa.nonempty.text ''                             ), false
      @eq ( Ωit_548 = -> isa.nonempty.text 'A'                            ), true
      @eq ( Ωit_549 = -> isa.nonempty.text 4                              ), false
      @eq ( Ωit_550 = -> isa.empty { list: [], text: '', set: new Set() } ), false
      #.......................................................................................................
      @eq ( Ωit_551 = -> isa.empty []                                     ), true
      @eq ( Ωit_552 = -> isa.empty ''                                     ), true
      @eq ( Ωit_553 = -> isa.empty new Set()                              ), true
      @eq ( Ωit_554 = -> isa.empty /d/                                    ), false
      @eq ( Ωit_555 = -> isa.empty [ 1, ]                                 ), false
      @eq ( Ωit_556 = -> isa.empty 'A'                                    ), false
      @eq ( Ωit_557 = -> isa.empty new Set 'abc'                          ), false
      #.......................................................................................................
      @eq ( Ωit_558 = -> validate.empty []                                ), []
      @eq ( Ωit_559 = -> validate.empty ''                                ), ''
      @eq ( Ωit_560 = -> validate.empty new Set()                         ), new Set()
      @throws ( Ωit_561 = -> validate.empty [ 1, ]                        ), /expected a empty, got a list/
      @throws ( Ωit_562 = -> validate.empty 'A'                           ), /expected a empty, got a text/
      @throws ( Ωit_563 = -> validate.empty new Set 'abc'                 ), /expected a empty, got a set/
      #.......................................................................................................
      @eq ( Ωit_564 = -> type_of []                                       ), 'list'
      @eq ( Ωit_565 = -> type_of ''                                       ), 'text'
      @eq ( Ωit_566 = -> type_of new Set()                                ), 'set'
      @eq ( Ωit_567 = -> type_of [ 'a', ]                                 ), 'list'
      @eq ( Ωit_568 = -> type_of 'a'                                      ), 'text'
      @eq ( Ωit_569 = -> type_of new Set 'a'                              ), 'set'
      #.......................................................................................................
      @eq ( Ωit_570 = -> type_of 1234                                     ), 'float'
      @eq ( Ωit_571 = -> isa.integer 1234                                 ), true
      @eq ( Ωit_572 = -> isa.positive.integer 1234                        ), true
      @eq ( Ωit_573 = -> isa.negative.integer 1234                        ), false
      @eq ( Ωit_574 = -> isa.negative.integer -1234                       ), true
      @eq ( Ωit_575 = -> isa.negative.integer -Infinity                   ), false
      @eq ( Ωit_576 = -> isa.negative.integer -12.34                      ), false
      #.......................................................................................................
      @eq ( Ωit_577 = -> isa.positive.float     +4                        ), true
      @eq ( Ωit_578 = -> isa.positive.integer   +4                        ), true
      @eq ( Ωit_579 = -> isa.positive.infinity  +4                        ), false
      @eq ( Ωit_580 = -> isa.negative.float     +4                        ), false
      @eq ( Ωit_581 = -> isa.negative.integer   +4                        ), false
      @eq ( Ωit_582 = -> isa.negative.infinity  +4                        ), false
      @eq ( Ωit_583 = -> isa.posnaught.float    +4                        ), true
      @eq ( Ωit_584 = -> isa.posnaught.integer  +4                        ), true
      @eq ( Ωit_585 = -> isa.posnaught.infinity +4                        ), false
      @eq ( Ωit_586 = -> isa.negnaught.float    +4                        ), false
      @eq ( Ωit_587 = -> isa.negnaught.integer  +4                        ), false
      @eq ( Ωit_588 = -> isa.negnaught.infinity +4                        ), false
      #.......................................................................................................
      @eq ( Ωit_589 = -> isa.positive.float      0                        ), false
      @eq ( Ωit_590 = -> isa.positive.integer    0                        ), false
      @eq ( Ωit_591 = -> isa.positive.infinity   0                        ), false
      @eq ( Ωit_592 = -> isa.negative.float      0                        ), false
      @eq ( Ωit_593 = -> isa.negative.integer    0                        ), false
      @eq ( Ωit_594 = -> isa.negative.infinity   0                        ), false
      @eq ( Ωit_595 = -> isa.posnaught.float     0                        ), true
      @eq ( Ωit_596 = -> isa.posnaught.integer   0                        ), true
      @eq ( Ωit_597 = -> isa.posnaught.infinity  0                        ), false
      @eq ( Ωit_598 = -> isa.negnaught.float     0                        ), true
      @eq ( Ωit_599 = -> isa.negnaught.integer   0                        ), true
      @eq ( Ωit_600 = -> isa.negnaught.infinity  0                        ), false
      #.......................................................................................................
      @eq ( Ωit_601 = -> isa.positive.float      Infinity                 ), false
      @eq ( Ωit_602 = -> isa.positive.integer    Infinity                 ), false
      @eq ( Ωit_603 = -> isa.positive.infinity   Infinity                 ), true
      @eq ( Ωit_604 = -> isa.negative.float      Infinity                 ), false
      @eq ( Ωit_605 = -> isa.negative.integer    Infinity                 ), false
      @eq ( Ωit_606 = -> isa.negative.infinity   Infinity                 ), false
      @eq ( Ωit_607 = -> isa.posnaught.float     Infinity                 ), false
      @eq ( Ωit_608 = -> isa.posnaught.integer   Infinity                 ), false
      @eq ( Ωit_609 = -> isa.posnaught.infinity  Infinity                 ), true
      @eq ( Ωit_610 = -> isa.negnaught.float     Infinity                 ), false
      @eq ( Ωit_611 = -> isa.negnaught.integer   Infinity                 ), false
      @eq ( Ωit_612 = -> isa.negnaught.infinity  Infinity                 ), false
      #.......................................................................................................
      @eq ( Ωit_613 = -> isa.positive.float      +4.3                     ), true
      @eq ( Ωit_614 = -> isa.positive.integer    +4.3                     ), false
      @eq ( Ωit_615 = -> isa.positive.infinity   +4.3                     ), false
      @eq ( Ωit_616 = -> isa.negative.float      +4.3                     ), false
      @eq ( Ωit_617 = -> isa.negative.integer    +4.3                     ), false
      @eq ( Ωit_618 = -> isa.negative.infinity   +4.3                     ), false
      @eq ( Ωit_619 = -> isa.posnaught.float     +4.3                     ), true
      @eq ( Ωit_620 = -> isa.posnaught.integer   +4.3                     ), false
      @eq ( Ωit_621 = -> isa.posnaught.infinity  +4.3                     ), false
      @eq ( Ωit_622 = -> isa.negnaught.float     +4.3                     ), false
      @eq ( Ωit_623 = -> isa.negnaught.integer   +4.3                     ), false
      @eq ( Ωit_624 = -> isa.negnaught.infinity  +4.3                     ), false
      #.......................................................................................................
      @eq ( Ωit_625 = -> isa.positive.float      -4.3                     ), false
      @eq ( Ωit_626 = -> isa.positive.integer    -4.3                     ), false
      @eq ( Ωit_627 = -> isa.positive.infinity   -4.3                     ), false
      @eq ( Ωit_628 = -> isa.negative.float      -4.3                     ), true
      @eq ( Ωit_629 = -> isa.negative.integer    -4.3                     ), false
      @eq ( Ωit_630 = -> isa.negative.infinity   -4.3                     ), false
      @eq ( Ωit_631 = -> isa.posnaught.float     -4.3                     ), false
      @eq ( Ωit_632 = -> isa.posnaught.integer   -4.3                     ), false
      @eq ( Ωit_633 = -> isa.posnaught.infinity  -4.3                     ), false
      @eq ( Ωit_634 = -> isa.negnaught.float     -4.3                     ), true
      @eq ( Ωit_635 = -> isa.negnaught.integer   -4.3                     ), false
      @eq ( Ωit_636 = -> isa.negnaught.infinity  -4.3                     ), false
      #.......................................................................................................
      @eq ( Ωit_637 = -> isa.posnaught           +Infinity                ), true
      @eq ( Ωit_638 = -> isa.negnaught           +Infinity                ), false
      @eq ( Ωit_639 = -> isa.posnaught           -Infinity                ), false
      @eq ( Ωit_640 = -> isa.negnaught           -Infinity                ), true
      @eq ( Ωit_641 = -> isa.posnaught           0                        ), true
      @eq ( Ωit_642 = -> isa.negnaught           0                        ), true
      @eq ( Ωit_643 = -> isa.posnaught           0                        ), true
      @eq ( Ωit_644 = -> isa.negnaught           0                        ), true
      #.......................................................................................................
      @eq ( Ωit_645 = -> isa.frozen         Object.freeze {}              ), true
      @eq ( Ωit_646 = -> isa.frozen         Object.freeze []              ), true
      @eq ( Ωit_647 = -> isa.frozen                       {}              ), false
      @eq ( Ωit_648 = -> isa.frozen                       []              ), false
      @eq ( Ωit_649 = -> isa.frozen.object  Object.freeze {}              ), true
      @eq ( Ωit_650 = -> isa.frozen.list    Object.freeze []              ), true
      @eq ( Ωit_651 = -> isa.frozen.object                {}              ), false
      @eq ( Ωit_652 = -> isa.frozen.list                  []              ), false
      #.......................................................................................................
      @eq ( Ωit_653 = -> isa.odd.integer                  []              ), false
      @eq ( Ωit_654 = -> isa.odd.integer                  102.4           ), false
      @eq ( Ωit_655 = -> isa.odd.integer                  9997            ), true
      @eq ( Ωit_656 = -> isa.odd.integer                  '1024'          ), false
      @eq ( Ωit_657 = -> isa.odd.integer                  0               ), false
      @eq ( Ωit_658 = -> isa.odd.integer                  1024            ), false
      @eq ( Ωit_659 = -> isa.odd.positive.integer         1024            ), false
      @eq ( Ωit_660 = -> isa.odd.positive.integer         102.4           ), false
      @eq ( Ωit_661 = -> isa.odd.positive.integer         1023            ), true
      @eq ( Ωit_662 = -> isa.odd.positive.integer         -1023           ), false
      @eq ( Ωit_663 = -> isa.odd.positive.integer         103.4           ), false
      @eq ( Ωit_664 = -> isa.even.integer                 []              ), false
      @eq ( Ωit_665 = -> isa.even.integer                 102.4           ), false
      @eq ( Ωit_666 = -> isa.even.integer                 9997            ), false
      @eq ( Ωit_667 = -> isa.even.integer                 '1024'          ), false
      @eq ( Ωit_668 = -> isa.even.integer                 0               ), true
      @eq ( Ωit_669 = -> isa.even.integer                 1024            ), true
      @eq ( Ωit_670 = -> isa.even.positive.integer        1024            ), true
      @eq ( Ωit_671 = -> isa.even.positive.integer        0               ), false
      @eq ( Ωit_672 = -> isa.even.posnaught.integer       1024            ), true
      @eq ( Ωit_673 = -> isa.even.posnaught.integer       0               ), true
      #.......................................................................................................
      @eq ( Ωit_674 = -> isa.even.posnaught               0               ), true
      @eq ( Ωit_675 = -> isa.even.posnaught               1               ), false
      @eq ( Ωit_676 = -> isa.even.posnaught               2               ), true
      #.......................................................................................................
      @eq ( Ωit_677 = -> isa.cardinal                     -1024           ), false
      @eq ( Ωit_678 = -> isa.cardinal                     10              ), true
      @eq ( Ωit_679 = -> isa.cardinal                     123.7           ), false
      @eq ( Ωit_680 = -> isa.cardinal                     0               ), true
      @eq ( Ωit_681 = -> isa.cardinal                     1               ), true
      @eq ( Ωit_682 = -> isa.cardinal                     Infinity        ), false
      @eq ( Ωit_683 = -> evaluate.cardinal                Infinity        ), { cardinal: false }
      @eq ( Ωit_684 = -> evaluate.posnaught.integer       Infinity        ), { 'posnaught.integer': false }
      #.......................................................................................................
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  disallow_rhs_optional: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      ### TAINT observe the out-comment messages would perhaps make more sense as they are more specific ###
      @eq ( Ωit_685 = -> ( new Intertype() ).declare { foo: 'float', } ), null
      @eq ( Ωit_686 = -> ( new Intertype() ).declare { foo: 'text',  } ), null
      # ( new Intertype() ).declare { foo: 'optional', }
      @throws ( Ωit_687 = -> ( new Intertype() ).declare { foo: 'optional', }        ), /illegal use of 'optional' in declaration of type 'foo'/
      @throws ( Ωit_688 = -> ( new Intertype() ).declare { foo: 'qqq', }             ), /unknown type 'qqq'/
      @throws ( Ωit_689 = -> ( new Intertype() ).declare { foo: 'optional.float', }  ), /illegal use of 'optional' in declaration of type 'foo'/
      @throws ( Ωit_690 = -> ( new Intertype() ).declare { foo: 'anything.float', }  ), /illegal use of basetype 'anything' in declaration of type 'foo'/
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  parallel_behavior_of_isa_validate_mandatory_and_optional: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      { isa
        validate  } = new Intertype
          normalfloat: ( ( x ) -> ( @isa.float x ) and ( 0 <= x <= 1 ) )
      @eq ( Ωit_691 = -> isa.normalfloat                     0     ), true
      @eq ( Ωit_692 = -> isa.normalfloat                     null  ), false
      @eq ( Ωit_693 = -> isa.normalfloat                     -1    ), false
      @eq ( Ωit_694 = -> isa.normalfloat                     '?'   ), false
      @eq ( Ωit_695 = -> isa.optional.normalfloat            0     ), true
      @eq ( Ωit_696 = -> isa.optional.normalfloat            null  ), true
      @eq ( Ωit_697 = -> isa.optional.normalfloat            -1    ), false
      @eq ( Ωit_698 = -> isa.optional.normalfloat            '?'   ), false
      @eq ( Ωit_699 = -> validate.normalfloat                0     ), 0
      @eq ( Ωit_700 = -> validate.optional.normalfloat       0     ), 0
      @eq ( Ωit_701 = -> validate.optional.normalfloat       null  ), null
      @throws ( Ωit_702 = -> validate.normalfloat           null ), /expected a normalfloat, got a null/
      @throws ( Ωit_703 = -> validate.normalfloat           -1   ), /expected a normalfloat, got a float/
      @throws ( Ωit_704 = -> validate.normalfloat           '?'  ), /expected a normalfloat, got a text/
      @throws ( Ωit_705 = -> validate.optional.normalfloat  -1   ), /expected an optional normalfloat, got a float/
      @throws ( Ωit_706 = -> validate.optional.normalfloat  '?'  ), /expected an optional normalfloat, got a text/
      return null
    #.........................................................................................................
    do =>
      my_types =
        'quantity':     'object'
        'quantity.q':   'float'
        'quantity.u':   'text'
        'foo':          'object'
        'foo.bar':      'object'
        'foo.bar.baz':  'float'
      { isa
        validate  } = types = new Intertype my_types
      @eq ( Ωit_707 = -> isa.quantity            { q: 1, u: 'm', }   ), true
      @eq ( Ωit_708 = -> isa.quantity            null                ), false
      @eq ( Ωit_709 = -> isa.optional.quantity   { q: 2, u: 'm', }   ), true
      @eq ( Ωit_710 = -> isa.optional.quantity   null                ), true
      @eq ( Ωit_711 = -> validate.quantity               { q: 3, u: 'm', } ), { q: 3, u: 'm', }
      @eq ( Ωit_712 = -> validate.optional.quantity      { q: 4, u: 'm', } ), { q: 4, u: 'm', }
      @eq ( Ωit_713 = -> validate.optional.quantity.q    null  ), null
      @eq ( Ωit_714 = -> validate.optional.quantity.q    111   ), 111
      @eq ( Ωit_715 = -> isa.quantity                     null               ), false
      @eq ( Ωit_716 = -> isa.quantity                     -1                 ), false
      @eq ( Ωit_717 = -> isa.quantity                     '?'                ), false
      @eq ( Ωit_718 = -> isa.quantity.q                   '?'                ), false
      @eq ( Ωit_719 = -> isa.quantity.q                   3                  ), true
      @eq ( Ωit_720 = -> isa.optional.quantity            { q: 1, u: 'm', }  ), true
      @eq ( Ωit_721 = -> isa.optional.quantity            null               ), true
      @eq ( Ωit_722 = -> isa.optional.quantity            -1                 ), false
      @eq ( Ωit_723 = -> isa.optional.quantity            '?'                ), false
      @eq ( Ωit_724 = -> isa.optional.quantity.q          '?'                ), false
      @eq ( Ωit_725 = -> isa.optional.quantity.q          3                  ), true
      @eq ( Ωit_726 = -> validate.quantity                { q: 1, u: 'm', }  ), { q: 1, u: 'm', }
      @eq ( Ωit_727 = -> validate.optional.quantity       { q: 1, u: 'm', }  ), { q: 1, u: 'm', }
      @eq ( Ωit_728 = -> validate.optional.quantity       null               ), null
      @throws ( Ωit_729 = -> validate.quantity           { q: 5, }  ), /expected a quantity, got a object/ ### TAINT message should be more specific ###
      @throws ( Ωit_730 = -> validate.quantity            null      ), /expected a quantity, got a null/
      @throws ( Ωit_731 = -> validate.quantity            -1        ), /expected a quantity, got a float/
      @throws ( Ωit_732 = -> validate.quantity            '?'       ), /expected a quantity, got a text/
      @throws ( Ωit_733 = -> validate.quantity            { q: 1, } ), /expected a quantity, got a object/ ### TAINT message should be more specific ###
      @throws ( Ωit_734 = -> validate.optional.quantity   -1        ), /expected an optional quantity, got a float/
      @throws ( Ωit_735 = -> validate.optional.quantity   { q: 1, } ), /expected an optional quantity, got a object/ ### TAINT message should be more specific ###
      @throws ( Ωit_736 = -> validate.optional.quantity.q { q: 1, } ), /expected an optional quantity.q, got a object/
      @throws ( Ωit_737 = -> validate.optional.quantity.q 3, 4, 5   ), /method 'validate.optional.quantity.q' expects 1 arguments, got 3/
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  declaration_role_field: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      { declarations  } = new Intertype()
      @eq ( Ωit_738 = -> declarations.float.role     ), 'usertype'
      @eq ( Ωit_739 = -> declarations.null.role      ), 'basetype'
      @eq ( Ωit_740 = -> declarations.anything.role  ), 'basetype'
      @eq ( Ωit_741 = -> declarations.unknown.role   ), 'basetype'
      @eq ( Ωit_742 = -> declarations.optional.role  ), 'optional'
      # @throws T, /expected a normalfloat, got a null/,             -> validate.normalfloat           null
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  minimal_type_of_results: ->
    { Intertype_minimal } = require '../../../apps/intertype'
    { isa
      validate
      create
      declare
      type_of           } = new Intertype_minimal()
    #.........................................................................................................
    do =>
      @eq ( Ωit_743 = -> type_of null              ), 'null'
      @eq ( Ωit_744 = -> type_of undefined         ), 'undefined'
      @eq ( Ωit_745 = -> type_of +Infinity         ), 'unknown'
      @eq ( Ωit_746 = -> type_of 4                 ), 'unknown'
      return null
    #.........................................................................................................
    do =>
      @eq ( Ωit_747 = -> isa.anything   1          ), true
      @eq ( Ωit_748 = -> isa.nothing    1          ), false
      @eq ( Ωit_749 = -> isa.something  1          ), true
      @eq ( Ωit_750 = -> isa.unknown    1          ), true
      return null
    #.........................................................................................................
    do =>
      @eq ( Ωit_751 = -> isa.anything   null       ), true
      @eq ( Ωit_752 = -> isa.nothing    null       ), true
      @eq ( Ωit_753 = -> isa.something  null       ), false
      @eq ( Ωit_754 = -> isa.unknown    null       ), false
      return null
    #.........................................................................................................
    do =>
      @eq ( Ωit_755 = -> isa.anything   undefined  ), true
      @eq ( Ωit_756 = -> isa.nothing    undefined  ), true
      @eq ( Ωit_757 = -> isa.something  undefined  ), false
      @eq ( Ωit_758 = -> isa.unknown    undefined  ), false
      return null
    #.........................................................................................................
    do =>
      @throws ( Ωit_759 = -> isa.optional 1      ), /`optional` is not a legal type for `isa` methods/
      @throws ( Ωit_760 = -> validate.optional 1 ), /`optional` is not a legal type for `validate` methods/
      @throws ( Ωit_761 = -> create.optional 1   ), /`optional` is not a legal type for `create` methods/
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  can_use_null_and_undefined_in_record_create_methods: ->
    { Intertype, } = require '../../../apps/intertype'
    types = new Intertype()
    types.declare
      foobar:
        fields:
          foo:    'integer'
          bar:    'integer'
        template:
          foo:    4
          bar:    5
    @eq ( Ωit_762 = -> types.create.foobar { foo: 8, bar: 9, } ), { foo: 8, bar: 9, }
    @eq ( Ωit_763 = -> types.create.foobar { foo: 8,         } ), { foo: 8, bar: 5, }
    @eq ( Ωit_764 = -> types.create.foobar { foo: 4, bar: 5, } ), { foo: 4, bar: 5, }
    @eq ( Ωit_765 = -> types.create.foobar {                 } ), { foo: 4, bar: 5, }
    @eq ( Ωit_766 = -> types.create.foobar undefined           ), { foo: 4, bar: 5, }
    @eq ( Ωit_767 = -> types.create.foobar null                ), { foo: 4, bar: 5, }
    return null

  #---------------------------------------------------------------------------------------------------------
  can_use_values_of_unknown_type: ->
    do =>
      { Intertype_minimal, } = require '../../../apps/intertype'
      types = new Intertype_minimal()
      types.declare thirtyone: ( x ) -> x is 31
      @eq ( Ωit_768 = -> types.type_of 31        ), 'thirtyone'
      @eq ( Ωit_769 = -> types.type_of 32        ), 'unknown'
      @eq ( Ωit_770 = -> types.isa.thirtyone 31  ), true
      @eq ( Ωit_771 = -> types.isa.thirtyone 32  ), false
      @eq ( Ωit_772 = -> types.type_of new Map() ), 'unknown'
      return null
    #.......................................................................................................
    do =>
      { Intertype_minimal, } = require '../../../apps/intertype'
      types = new Intertype_minimal()
      types.declare thirtyone:  ( x ) -> ( @isa.float x ) and ( x is 31 )
      ### this used to be a problem        ^^^^ ###
      types.declare float:      ( x ) -> Number.isFinite x
      @eq ( Ωit_773 = -> types.type_of 31        ), 'thirtyone'
      @eq ( Ωit_774 = -> types.type_of 32        ), 'float'
      @eq ( Ωit_775 = -> types.isa.thirtyone 31  ), true
      @eq ( Ωit_776 = -> types.isa.thirtyone 32  ), false
      @eq ( Ωit_777 = -> types.type_of new Map() ), 'unknown'
      return null
    #.......................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  advanced_types: ->
    { Intertype, } = require '../../../apps/intertype'
    types = new Intertype()
    @eq ( Ωit_778 = -> types.type_of new Set() ), 'set'
    @eq ( Ωit_779 = -> types.type_of new Map() ), 'map'
    return null

  #-----------------------------------------------------------------------------------------------------------
  kinds_and_roles: ->
    { Intertype, } = require '../../../apps/intertype'
    types = new Intertype()
    types.declare
      foo:
        fields:
          d:      'integer'
          e:      'float'
      bar:        'foo'
    @eq ( Ωit_780 = -> types.declarations.integer.kind  ), 'float'
    @eq ( Ωit_781 = -> types.declarations.foo.type      ), 'foo'
    @eq ( Ωit_782 = -> types.declarations.foo.kind      ), 'object'
    @eq ( Ωit_783 = -> types.declarations.foo.role      ), 'usertype'
    @eq ( Ωit_784 = -> types.declarations.bar.type      ), 'bar'
    @eq ( Ωit_785 = -> types.declarations.bar.kind      ), 'foo'
    @eq ( Ωit_786 = -> types.declarations.bar.role      ), 'usertype'
    return null

  #=========================================================================================================
  Naming:

    #-------------------------------------------------------------------------------------------------------
    type: ->
      { Intertype, } = require '../../../apps/intertype'
      t2 = new Intertype()
      for type, declaration of t2.declarations
        @eq ( Ωit_787 = -> declaration.type is type ), true
      return null

    #-------------------------------------------------------------------------------------------------------
    validate_methods: ->
      { Intertype, } = require '../../../apps/intertype'
      t2 = new Intertype()
      @eq ( Ωit_788 = -> t2.validate.asyncfunction.name          ), 'validate.asyncfunction'
      @eq ( Ωit_789 = -> t2.validate.optional.asyncfunction.name ), 'validate.optional.asyncfunction'
      return null

    #-------------------------------------------------------------------------------------------------------
    isa_methods: ->
      { Intertype, } = require '../../../apps/intertype'
      t2 = new Intertype()
      @eq ( Ωit_790 = -> t2.isa.asyncfunction.name               ), 'isa.asyncfunction'
      @eq ( Ωit_791 = -> t2.isa.optional.asyncfunction.name      ), 'isa.optional.asyncfunction'
      @eq ( Ωit_792 = -> t2.isa.null?.name                       ), 'isa.null'
      @eq ( Ωit_793 = -> t2.isa.function?.name                   ), 'isa.function'
      @eq ( Ωit_794 = -> t2.isa.boolean?.name                    ), 'isa.boolean'
      @eq ( Ωit_795 = -> t2.isa.text?.name                       ), 'isa.text'
      @eq ( Ωit_796 = -> t2.isa.asyncfunction?.name              ), 'isa.asyncfunction'
      return null

    #-------------------------------------------------------------------------------------------------------
    create_methods: ->
      { Intertype, } = require '../../../apps/intertype'
      t2 = new Intertype()
      @eq ( Ωit_797 = -> t2.create.function.name               ), 'create.function'
      @eq ( Ωit_798 = -> t2.create.float.name                  ), 'create.float'
      return null

  #=========================================================================================================
  Create_methods:

    #-------------------------------------------------------------------------------------------------------
    floats: ->
      { Intertype, } = require '../../../apps/intertype'
      t2 = new Intertype()
      @eq     ( Ωit_799 = -> t2.create.float()              ), 0
      @eq     ( Ωit_800 = -> t2.create.float +0             ), 0
      @eq     ( Ωit_801 = -> t2.create.float -0             ), 0
      @eq     ( Ωit_802 = -> t2.create.float false          ), 0
      @eq     ( Ωit_803 = -> t2.create.float true           ), 1
      @eq     ( Ωit_804 = -> t2.create.float 12.34          ), 12.34
      @eq     ( Ωit_805 = -> t2.create.float '12.34'        ), 12.34
      @eq     ( Ωit_806 = -> t2.create.float +12.34         ), 12.34
      @eq     ( Ωit_807 = -> t2.create.float '+12.34'       ), 12.34
      @eq     ( Ωit_808 = -> t2.create.float -12.34         ), -12.34
      @eq     ( Ωit_809 = -> t2.create.float '-12.34'       ), -12.34
      @eq     ( Ωit_810 = -> t2.create.float null           ), 0
      @eq     ( Ωit_811 = -> t2.create.float undefined      ), 0
      @throws ( Ωit_812 = -> t2.create.float ''             ), /these arguments are not suitable for `create.float\(\)`: ''/
      return null

    #-------------------------------------------------------------------------------------------------------
    integers: ->
      { Intertype, } = require '../../../apps/intertype'
      t2 = new Intertype()
      @eq     ( Ωit_813 = -> t2.create.integer()              ), 0
      @eq     ( Ωit_814 = -> t2.create.integer +0             ), 0
      @eq     ( Ωit_815 = -> t2.create.integer -0             ), 0
      @eq     ( Ωit_816 = -> t2.create.integer false          ), 0
      @eq     ( Ωit_817 = -> t2.create.integer true           ), 1
      @eq     ( Ωit_818 = -> t2.create.integer 12.34          ), 12
      @eq     ( Ωit_819 = -> t2.create.integer '12'           ), 12
      @eq     ( Ωit_820 = -> t2.create.integer +12            ), 12
      @eq     ( Ωit_821 = -> t2.create.integer '+12'          ), 12
      @eq     ( Ωit_822 = -> t2.create.integer -12            ), -12
      @eq     ( Ωit_823 = -> t2.create.integer '-12'          ), -12
      @eq     ( Ωit_824 = -> t2.create.integer null           ), 0
      @eq     ( Ωit_825 = -> t2.create.integer undefined      ), 0
      @throws ( Ωit_826 = -> t2.create.integer ''             ), /these arguments are not suitable for `create.integer\(\)`: ''/
      return null

    #-------------------------------------------------------------------------------------------------------
    cardinals: ->
      { Intertype, } = require '../../../apps/intertype'
      t2 = new Intertype()
      @eq     ( Ωit_827 = -> t2.create.cardinal()              ), 0
      @eq     ( Ωit_828 = -> t2.create.cardinal +0             ), +0
      @eq     ( Ωit_829 = -> t2.create.cardinal -0             ), -0
      @eq     ( Ωit_830 = -> t2.create.cardinal false          ), 0
      @eq     ( Ωit_831 = -> t2.create.cardinal true           ), 1
      @eq     ( Ωit_832 = -> t2.create.cardinal 12.34          ), 12
      @eq     ( Ωit_833 = -> t2.create.cardinal '12'           ), 12
      @eq     ( Ωit_834 = -> t2.create.cardinal +12            ), 12
      @eq     ( Ωit_835 = -> t2.create.cardinal '+12'          ), 12
      @throws ( Ωit_836 = -> t2.create.cardinal -12            ), /these arguments are not suitable for `create.cardinal\(\)`: -12/
      @throws ( Ωit_837 = -> t2.create.cardinal '-12'          ), /these arguments are not suitable for `create.cardinal\(\)`: '-12'/
      @eq     ( Ωit_838 = -> t2.create.cardinal null           ), 0
      @eq     ( Ωit_839 = -> t2.create.cardinal undefined      ), 0
      @throws ( Ωit_840 = -> t2.create.cardinal ''             ), /these arguments are not suitable for `create.cardinal\(\)`: ''/
      return null

    #-------------------------------------------------------------------------------------------------------
    texts: ->
      { Intertype, } = require '../../../apps/intertype'
      t2 = new Intertype()
      @eq     ( Ωit_841 = -> t2.create.text()              ), ''
      @eq     ( Ωit_842 = -> t2.create.text +0             ), '0'
      @eq     ( Ωit_843 = -> t2.create.text -0             ), '-0'
      @eq     ( Ωit_844 = -> t2.create.text false          ), 'false'
      @eq     ( Ωit_845 = -> t2.create.text true           ), 'true'
      @eq     ( Ωit_846 = -> t2.create.text 12.34          ), '12.34'
      @eq     ( Ωit_847 = -> t2.create.text '12'           ), '12'
      @eq     ( Ωit_848 = -> t2.create.text +12            ), '12'
      @eq     ( Ωit_849 = -> t2.create.text '+12'          ), '+12'
      @eq     ( Ωit_850 = -> t2.create.text -12            ), '-12'
      @eq     ( Ωit_851 = -> t2.create.text '-12'          ), '-12'
      @eq     ( Ωit_852 = -> t2.create.text null           ), ''
      @eq     ( Ωit_853 = -> t2.create.text undefined      ), ''
      @eq     ( Ωit_854 = -> t2.create.text ''             ), ''
      return null

    #-------------------------------------------------------------------------------------------------------
    on_dotted_types_1: ->
      { Intertype, }  = require '../../../apps/intertype'
      has_been_called = { create_quantity: 0, create_quantity_q: 0, create_quantity_u: 0, }
      #.....................................................................................................
      do =>
        declarations =
          quantity:
            test:       'object'
            template:
              q:        0
              u:        'u'
            create: ( x ) ->
              has_been_called.create_quantity++
              debug 'Ω_855', "create.quantity( #{rpr x} )"
              debug 'Ω_856', { @declarations.quantity.template..., x..., }
              return { @declarations.quantity.template..., x..., }
          'quantity.q':
            test: 'float'
            create: ( x ) ->
              has_been_called.create_quantity_q++
              debug 'Ω_857', "create.quantity.q( #{rpr x} )"
              return 0
          'quantity.u':
            test: 'text'
            create: ( x ) ->
              has_been_called.create_quantity_u++
              debug 'Ω_858', "create.quantity.u( #{rpr x} )"
              return 'u'
        t2 = new Intertype declarations
        @eq     ( Ωit_859 = -> t2.create.quantity()               ), { q: 0, u: 'u', }
        @eq     ( Ωit_860 = -> has_been_called.create_quantity    ), 1
        @eq     ( Ωit_861 = -> has_been_called.create_quantity_q  ), 1
        @eq     ( Ωit_862 = -> has_been_called.create_quantity_u  ), 1
        @eq     ( Ωit_863 = -> t2.create.quantity '12.5m'         ), { q: 12.5, u: 'm', }
        @eq     ( Ωit_864 = -> t2.create.quantity.q()             ), 0
        @eq     ( Ωit_865 = -> t2.create.quantity.u()             ), 'u'
        @eq     ( Ωit_866 = -> t2.create[ 'quantity.q' ]()        ), 0
        @eq     ( Ωit_867 = -> t2.create[ 'quantity.u' ]()        ), 'u'
        return null

    #-------------------------------------------------------------------------------------------------------
    on_dotted_types_2: ->
      { Intertype, }  = require '../../../apps/intertype'
      has_been_called = { create_quantity: 0, create_quantity_q: 0, create_quantity_u: 0, }
      #.....................................................................................................
      do =>
        declarations =
          quantity:
            test:       'object'
            fields:
              q:
                test:     'float'
                create:   ( x ) -> 0
              u:
                test:     'text'
                create:   ( x ) -> 'u'
            template:
              q:        0
              u:        'u'
            create: ( x ) ->
              { q: 0, u: 'u', }
        t2 = new Intertype declarations
        @eq     ( Ωit_868 = -> t2.create.quantity()               ), { q: 0, u: 'u', }
        @eq     ( Ωit_869 = -> t2.create.quantity '12.5m'         ), { q: 12.5, u: 'm', }
        @eq     ( Ωit_870 = -> t2.create.quantity.q()             ), 0
        @eq     ( Ωit_871 = -> t2.create.quantity.u()             ), 'u'
        @eq     ( Ωit_872 = -> t2.create[ 'quantity.q' ]()        ), 0
        @eq     ( Ωit_873 = -> t2.create[ 'quantity.u' ]()        ), 'u'
        return null

    #-------------------------------------------------------------------------------------------------------
    on_dotted_types_3: ->
      { Intertype, }  = require '../../../apps/intertype'
      has_been_called = { create_quantity: 0, create_quantity_q: 0, create_quantity_u: 0, }
      #.....................................................................................................
      do =>
        declarations =
          literal:
            role:     'qualifier'
            fields:
              float:
                test:     'float'
                create:   ( x ) -> parseFloat x
              integer:
                test:     'integer'
                create:   ( x ) -> parseInt x, 10
        t2 = new Intertype declarations
        debug 'Ωit_874', t2.declarations[ 'literal.float'   ].create '123.456e4'
        debug 'Ωit_875', t2.declarations[ 'literal.integer' ].create '123.456'
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    on_dotted_types_4: ->
      { Intertype,  } = require '../../../apps/intertype'
      has_been_called = { create_quantity: 0, }
      #.....................................................................................................
      do =>
        declarations =
          float1:       'float'
          float2:       'float1'
          float3:       'float2'
          float4:       'float3'
          quantity:
            test:       'object'
            template:
              q:        0
              u:        'u'
            create: ( x ) ->
              debug 'Ω_876', { x, }
              has_been_called.create_quantity++
              { q: 0, u: 'u', x..., }
        #...................................................................................................
        t2 = new Intertype declarations
        @eq     ( Ωit_877 = -> t2.create.float()                  ), 0
        @eq     ( Ωit_878 = -> t2.create.float1()                 ), 0
        @eq     ( Ωit_879 = -> t2.create.float2()                 ), 0
        @eq     ( Ωit_880 = -> t2.create.float3()                 ), 0
        @eq     ( Ωit_881 = -> t2.create.float4()                 ), 0
        @eq     ( Ωit_882 = -> t2.create.quantity()               ), { q: 0, u: 'u', }
        @eq     ( Ωit_883 = -> t2.create.quantity { q: 1, }       ), { q: 1, u: 'u', }
        @eq     ( Ωit_884 = -> t2.create.quantity { u: 'm', }     ), { q: 0, u: 'm', }
        @eq     ( Ωit_885 = -> has_been_called.create_quantity    ), 3
        # @eq     ( Ωit_886 = -> t2.declarations.mass.kind          ), 'quantity'
        # @eq     ( Ωit_887 = -> t2.create[ 'quantity.q' ]()        ), 0
        # @eq     ( Ωit_888 = -> t2.create[ 'quantity.u' ]()        ), 'u'
        # #...................................................................................................
        # @eq     ( Ωit_889 = -> t2.create.mass()                   ), { q: 0, u: 'u', }
        # @eq     ( Ωit_890 = -> t2.create[ 'foo.bar.baz' ]()       ), { q: 0, u: 'u', }
        # @eq     ( Ωit_891 = -> t2.create.quantity.q()             ), 0
        # @eq     ( Ωit_892 = -> t2.create.quantity.u()             ), 'u'
        # @eq     ( Ωit_893 = -> t2.create.foo.bar.baz()            ), { q: 0, u: 'u', }
        # debug 'Ωit_894', t2.create.float
        # debug 'Ωit_895', t2.create.quantity
        debug 'Ωit_896', has_been_called
        debug 'Ωit_897', has_been_called.create_quantity
        return null
      #.....................................................................................................
      return null

    # #-------------------------------------------------------------------------------------------------------
    # posnaught_integers: ->
    #   { Intertype, } = require '../../../apps/intertype'
    #   t2 = new Intertype()
    #   @eq     ( Ωit_898 = -> t2.create.posnaught.integer()              ), 0
    #   @eq     ( Ωit_899 = -> t2.create.posnaught.integer +0             ), 0
    #   @eq     ( Ωit_900 = -> t2.create.posnaught.integer -0             ), 0
    #   @eq     ( Ωit_901 = -> t2.create.posnaught.integer false          ), 0
    #   @eq     ( Ωit_902 = -> t2.create.posnaught.integer true           ), 1
    #   @eq     ( Ωit_903 = -> t2.create.posnaught.integer 12.34          ), 12
    #   @eq     ( Ωit_904 = -> t2.create.posnaught.integer '12'           ), 12
    #   @eq     ( Ωit_905 = -> t2.create.posnaught.integer +12            ), 12
    #   @eq     ( Ωit_906 = -> t2.create.posnaught.integer '+12'          ), 12
    #   @eq     ( Ωit_907 = -> t2.create.posnaught.integer -12            ), -12
    #   @eq     ( Ωit_908 = -> t2.create.posnaught.integer '-12'          ), -12
    #   @eq     ( Ωit_909 = -> t2.create.posnaught.integer null           ), 0
    #   @eq     ( Ωit_910 = -> t2.create.posnaught.integer undefined      ), 0
    #   @throws ( Ωit_911 = -> t2.create.posnaught.integer ''             ), /these arguments are not suitable for `create.posnaught.integer\(\)`: \[ '' \]/
    #   return null

  Regexes:
    floats: ->
      { Intertype, }  = require '../../../apps/intertype'
      type_patterns   = require '../../../apps/intertype/lib/patterns'
      types           = new Intertype()
      types.declare is_valid_literal: ( x ) -> return x in [ true, false, null, ]
      regexes         = [
        # ///^   [-+]? (  [0-9]*[.])?[0-9]+([eE][-+]?\d+)?                                      $/// ### r0 ###
        # ///^ ( [-+]? (?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)(?:[eE][+-]?[0-9]+)?)                    $/// ### r1 ###
        # ///^ (?: (?: [-+]?[0-9]*\.?[0-9]+ ) | (?: [-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)? ) )  $/// ### r2 ###
        # ///^
        #       (?:
        #       [+-]? # optional sign
        #         (?: # start a conditional group
        #         \d+ # either a nonzero number of digits
        #         |   # or a decimal phrase
        #         \d* # optional digits preceding the decimal
        #         \.(?=\d) # a literal decimal followed by at least one digit
        #         \d* # optionally some more digits
        #         ) # note this group is mandatory!
        #         (?: # start an optional scientific notation group
        #         [eE] # the scientific notation character
        #         [+-]? # optional sign
        #         \d+ # after sci notation, you cannot go directly to a decimal
        #         )?
        #       )
        #       $ /// ### r3 ###
        # ///^   [-+]? (  [0-9]*[.])?[0-9]+([eE][-+]?\d+)?                                      $/// ### r4 ###
        # ///^[+\-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:\d[eE][+\-]?\d+)?$/// ### r5 thx to https://stackoverflow.com/a/51790561/7568091 ###
        ### thx to https://stackoverflow.com/a/51790561/7568091 ###
        # ///^[-+]?([0-9]*[.])?[0-9]+([eE][-+]?[0-9]+)?$/// ### r6 ###
        # ///^
        #   [-+]?
        #   (?:
        #     ([1-9][0-9]*[.])[0-9]+ |
        #     ([.])[0-9]+ |
        #     ([1-9][0-9]*)
        #     )
        #   ([eE][-+]?[0-9]+)?
        #   $///u ### r7 ###
        # type_patterns.patterns.any.float
        type_patterns.patterns.only.float
        # type_patterns.patterns.only.float_and_rest
        ]
      probes_and_matchers = [
        [ '123',          true,   123,           ] ### p0  ###
        [ '123.45',       true,   123.45,        ] ### p1  ###
        [ '45e43',        true,   4.5e+44,       ] ### p2  ###
        [ '.45',          true,   0.45,          ] ### p3  ###
        [ '.45e43',       true,   4.5e+42,       ] ### p4  ###
        [ '.45e+43',      true,   4.5e+42,       ] ### p5  ###
        [ '.45e-43',      true,   4.5e-44,       ] ### p6  ###
        [ '+.45',         true,   0.45,          ] ### p7  ###
        [ '+.45e43',      true,   4.5e+42,       ] ### p8  ###
        [ '+.45e+43',     true,   4.5e+42,       ] ### p9  ###
        [ '+.45e-43',     true,   4.5e-44,       ] ### p10  ###
        [ '-.45',         true,   -0.45,         ] ### p11 ###
        [ '-.45e43',      true,   -4.5e+42,      ] ### p12 ###
        [ '-.45e+43',     true,   -4.5e+42,      ] ### p13 ###
        [ '-.45e-43',     true,   -4.5e-44,      ] ### p14 ###
        [ '123e3',        true,   123000,        ] ### p15 ###
        [ '123.0e3',      true,   123000,        ] ### p16 ###
        [ '123.4e3',      true,   123400,        ] ### p17 ###
        [ '+3',           true,   3,             ] ### p18 ###
        [ '3.2e23',       true,   3.2e+23,       ] ### p19 ###
        [ '-4.70e+9',     true,   -4.7e+9,       ] ### p20 ###
        [ '-.2E-4',       true,   -0.2e-4,       ] ### p21 ###
        [ '-7.6603',      true,   -7.6603,       ] ### p22 ###

        #...................................................................................................
        [ '+0003',        false,   'Octal literals are not allowed in strict mode.',  ] ### p23 ###
        [ '0003',         false,   'Octal literals are not allowed in strict mode.',  ] ### p24 ###
        [ '-0003',        false,   'Octal literals are not allowed in strict mode.',  ] ### p25 ###
        [ '123.e3',       null,   123000,                                             ] ### p26 ? ###
        [ '4567.',        null,   null,                                               ] ### p27 ?? ###
        [ 'e123',         false,  'e123 is not defined',                              ] ### p28 ###
        [ 'e-4',          false,  'e is not defined',                                 ] ### p29 ###
        [ '.e4',          false,  "Unexpected token '.'",                             ] ### p29 ###
        [ '.45e-43.2',    false,  'Unexpected number',                                ] ### p30 ?? ###
        [ '45e4৩',        false,  'Invalid or unexpected token',                      ] ### p31  ###
        [ '37.e88',       null,   3.7e+89,                                            ] ### p32 (dot before the e) ###
        [ '123.4.e3',     null,   null,                                               ] ### p33 (parsed as attribute access) ###
        ]
      #.....................................................................................................
      ### Test whether `is_valid_literal` entries are themselves valid ###
      for [ probe, is_valid_literal, val_or_err, ], pi in probes_and_matchers
        types.validate.is_valid_literal is_valid_literal
        switch true
          when is_valid_literal is true
            @eq ( WGUY.props.nameit "Ω_912-INVALID-TEST-p#{pi}", -> eval probe ), parseFloat probe
            @eq ( WGUY.props.nameit "Ω_913-INVALID-TEST-p#{pi}", -> eval probe ), val_or_err
          when is_valid_literal is false
            @throws ( WGUY.props.nameit "Ω_914-INVALID-TEST-p#{pi}", -> eval probe ), val_or_err
          when is_valid_literal is null
            @pass 'Ω_915', "#{rpr probe} will be considered not well-formed for the purposes of this test"
      #.....................................................................................................
      for regex, ri in regexes
        for [ probe, is_valid_literal, ], pi in probes_and_matchers
          regex.lastIndex = 0
          if ( match = probe.match regex )?
            switch true
              when is_valid_literal is true   then @pass "Ω_916-r#{ri}-p#{pi}"
              when is_valid_literal is false  then @fail "Ω_917-r#{ri}-p#{pi}", "expected no match but got one"
              when is_valid_literal is null   then @fail "Ω_918-r#{ri}-p#{pi}", "expected no match but got one"
          else
            switch true
              when is_valid_literal is true   then @fail "Ω_919-r#{ri}-p#{pi}", "expected match but got none"
              when is_valid_literal is false  then @pass "Ω_920-r#{ri}-p#{pi}"
              when is_valid_literal is null   then @pass "Ω_921-r#{ri}-p#{pi}"
      #.....................................................................................................
      for regex, ri in regexes
        for [ probe, is_valid_literal, ], pi in probes_and_matchers
          regex.lastIndex = 0
          if ( match = probe.match regex )?
            switch true
              when is_valid_literal is true   then help         "Ω_922-r#{ri}-p#{pi}", match
              when is_valid_literal is false  then warn reverse "Ω_923-r#{ri}-p#{pi}", match
              when is_valid_literal is null   then urge reverse "Ω_924-r#{ri}-p#{pi}", match
          else
            switch true
              when is_valid_literal is true   then help reverse "Ω_925-r#{ri}-p#{pi}", match
              when is_valid_literal is false  then warn         "Ω_926-r#{ri}-p#{pi}", match
              when is_valid_literal is null   then urge         "Ω_927-r#{ri}-p#{pi}", match
      #.....................................................................................................
      return null


#   demo_exception_with_lacking_stacktrace_1: ->
#     { Intertype, }  = require '../../../apps/intertype'
#     types           = new Intertype()
#     types.declare
#             quantity:
#               test:       'object'
#               template:
#                 q:        0
#                 u:        'u'
#               create: ( x ) ->
#                 { q: 0, u: 'u', }
#             'quantity.q':
#               test: 'float'
#               create: ( x ) -> 0
#             'quantity.u':
#               test: 'text'
#               create: ( x ) -> 'u'
#             mass:           'quantity'
#     #.......................................................................................................
#     try
#       types.create.mass()
#     catch error
#       debug 'Ωit_928', format_error_stack error.stack
#     #.......................................................................................................
#     return null

#   demo_exception_with_lacking_stacktrace_2: ->
#     { Intertype, }  = require '../../../apps/intertype'
#     types           = new Intertype()
#     types.declare
#             quantity:
#               test:       'object'
#               template:
#                 q:        0
#                 u:        'u'
#               create: ( x ) ->
#                 { q: 0, u: 'u', }
#             'quantity.q':
#               test: 'float'
#               create: ( x ) -> 0
#             'quantity.u':
#               test: 'text'
#               create: ( x ) -> 'u'
#             mass:           'quantity'
#     #.......................................................................................................
#     try
#       @eq ( Ω_929 = -> types.create.mass() ), { q: 0, u: 'u', }
#     catch error
#       debug 'Ωit_930', format_error_stack error.stack
#     #.......................................................................................................
#     return null

# format_error_stack = ( stack ) ->
#   lines = stack.split '\n'
#   lines = ( line for line in lines when not /\bnode:/.test line )
#   lines = ( ( if /jzr\/intertype/.test line then GUY.trm.yellow GUY.trm.reverse line else GUY.trm.white line ) for line in lines )
#   return '\n\n' + ( lines.join '\n' ) + '\n'

#===========================================================================================================
if module is require.main then await do =>
  # @use_fields_to_declare_qualifiers()
  # test @use_fields_to_declare_qualifiers
  # TT = { interface: @intertype_tasks.interface, }
  # ( new Test { throw_on_error: true, } ).test { TT, }
  # ( new Test { throw_on_error: false, } ).test ( { Create_methods: @intertype_tasks.Create_methods, } )
  # ( new Test { throw_on_error: false, } ).test ( { on_dotted_types: @intertype_tasks.Create_methods.on_dotted_types, } )
  # ( new Test { throw_on_error: false, } ).test ( { kinds_and_roles: @intertype_tasks.kinds_and_roles, } )
  # ( new Test { throw_on_error: false, } ).test {
  #     on_dotted_types_1: @intertype_tasks.Create_methods.on_dotted_types_1
  #     # on_dotted_types_2: @intertype_tasks.Create_methods.on_dotted_types_2
  #     # on_dotted_types_3: @intertype_tasks.Create_methods.on_dotted_types_3
  #     # on_dotted_types_4: @intertype_tasks.Create_methods.on_dotted_types_4
  #     }
  ( new Test { throw_on_error: false, } ).test { can_create_types_with_templates_and_create: @intertype_tasks.can_create_types_with_templates_and_create, }
  # ( new Test { throw_on_error: false, } ).test ( { Naming: @intertype_tasks.Naming, } )
  # ( new Test { throw_on_error: false, } ).test ( { Regexes: @intertype_tasks.Regexes, } )
  # ( new Test { throw_on_error: true, } ).test ( { demo_exception_with_lacking_stacktrace_1: @intertype_tasks.demo_exception_with_lacking_stacktrace_1, } )
  # ( new Test { throw_on_error: true, } ).test ( { demo_exception_with_lacking_stacktrace_2: @intertype_tasks.demo_exception_with_lacking_stacktrace_2, } )
  # await ( new Test { throw_on_error: true, } ).async_test { tasks: @tasks, }
  # await ( new Test { throw_on_error: true, } ).async_test { can_use_values_of_unknown_type: @tasks.can_use_values_of_unknown_type, }
  demo_1()

