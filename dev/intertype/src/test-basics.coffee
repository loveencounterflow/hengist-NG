

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
GTNG                      = require '../../../apps/guy-test-NG'
TMP_types                 = new ( require 'intertype-203.0.0' ).Intertype()
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
  #.........................................................................................................
  declarations = { sample_declarations..., declarations..., }
  types = new Intertype_minimal declarations
  #.........................................................................................................
  debug '^233-1^', types.create.float '345.678'
  debug '^233-1^', types.create.integer '345.678'
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
    @eq ( Ωit___1 = -> debug '2312312'; TMP_types.isa.object    INTERTYPE.types                               ), true
    @eq ( Ωit___2 = -> TMP_types.isa.undefined INTERTYPE.types.get_isa                       ), true
    @eq ( Ωit___3 = -> TMP_types.isa.undefined INTERTYPE.types.get_isa_optional              ), true
    @eq ( Ωit___4 = -> TMP_types.isa.undefined INTERTYPE.types.get_validate                  ), true
    @eq ( Ωit___5 = -> TMP_types.isa.undefined INTERTYPE.types.get_validate_optional         ), true
    @eq ( Ωit___6 = -> TMP_types.isa.function  INTERTYPE.types._get_isa                      ), true
    @eq ( Ωit___7 = -> TMP_types.isa.function  INTERTYPE.types._get_isa_optional             ), true
    @eq ( Ωit___8 = -> TMP_types.isa.function  INTERTYPE.types._get_validate                 ), true
    @eq ( Ωit___9 = -> TMP_types.isa.function  INTERTYPE.types._get_validate_optional        ), true
    @eq ( Ωit__10 = -> TMP_types.isa.object    INTERTYPE.types                               ), true
    @eq ( Ωit__11 = -> TMP_types.isa.object    INTERTYPE.types.isa                           ), true
    # @eq ( Ωit__12 = -> TMP_types.isa.function  INTERTYPE.types.isa.optional                  ), true
    @eq ( Ωit__13 = -> TMP_types.isa.object    INTERTYPE.types.validate                      ), true
    # @eq ( Ωit__14 = -> TMP_types.isa.function  INTERTYPE.types.validate.optional             ), true
    @eq ( Ωit__15 = -> TMP_types.isa.function  INTERTYPE.types.isa.boolean                   ), true
    @eq ( Ωit__16 = -> TMP_types.isa.function  INTERTYPE.types.isa.optional.boolean          ), true
    @eq ( Ωit__17 = -> TMP_types.isa.function  INTERTYPE.types.validate.boolean              ), true
    @eq ( Ωit__18 = -> TMP_types.isa.function  INTERTYPE.types.validate.optional.boolean     ), true
    @eq ( Ωit__19 = -> TMP_types.isa.object    INTERTYPE.types.create                        ), true
    @eq ( Ωit__20 = -> TMP_types.isa.function  INTERTYPE.types.isa.text                      ), true
    @eq ( Ωit__21 = -> TMP_types.isa.function  INTERTYPE.types.create.text                   ), true
    @eq ( Ωit__22 = -> TMP_types.isa.object    INTERTYPE.types.declarations                  ), true
    @eq ( Ωit__23 = -> TMP_types.isa.object    INTERTYPE.types.declarations.text             ), true
    #.........................................................................................................
    # @eq ( Ωit__24 = -> INTERTYPE.types.isa.name           ), 'isa'
    # @eq ( Ωit__25 = -> INTERTYPE.types.evaluate.name      ), 'evaluate'
    # @eq ( Ωit__26 = -> INTERTYPE.types.validate.name      ), 'validate'
    # @eq ( Ωit__27 = -> INTERTYPE.types.create.name        ), 'create'
    @eq ( Ωit__28 = -> INTERTYPE.types.declare.name       ), 'declare'
    @eq ( Ωit__29 = -> INTERTYPE.types.type_of.name       ), 'type_of'
    #.........................................................................................................
    do =>
      for type of INTERTYPE.testing._isa
        continue if Reflect.has INTERTYPE.declarations, type
        @fail 'Ωit__30', "type known from `INTERTYPE.testing._isa` but missing from `INTERTYPE.default_declarations`: #{rpr type}"
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  basic_functionality_using_types_object: ->
    INTERTYPE     = require '../../../apps/intertype'
    types         = new INTERTYPE.Intertype_minimal sample_declarations
    @eq ( Ωit__31 = -> types.isa.boolean           false               ), true
    @eq ( Ωit__32 = -> types.isa.boolean           true                ), true
    @eq ( Ωit__33 = -> types.isa.boolean           null                ), false
    @eq ( Ωit__34 = -> types.isa.boolean           1                   ), false
    @eq ( Ωit__35 = -> types.isa.optional.boolean  false               ), true
    @eq ( Ωit__36 = -> types.isa.optional.boolean  true                ), true
    @eq ( Ωit__37 = -> types.isa.optional.boolean  null                ), true
    @eq ( Ωit__38 = -> types.isa.optional.boolean  1                   ), false
    #.........................................................................................................
    @eq ( Ωit__39 = -> types.validate.boolean               false      ), false
    @eq ( Ωit__40 = -> types.validate.boolean               true       ), true
    @eq ( Ωit__41 = -> types.validate.optional.boolean      true       ), true
    @eq ( Ωit__42 = -> types.validate.optional.boolean      false      ), false
    @eq ( Ωit__43 = -> types.validate.optional.boolean      undefined  ), undefined
    @eq ( Ωit__44 = -> types.validate.optional.boolean      null       ), null
    @throws ( Ωit__45 = -> types.validate.boolean           1 ), /expected a boolean/
    @throws ( Ωit__46 = -> types.validate.optional.boolean  1 ), /expected an optional boolean/
    #.........................................................................................................
    @eq ( Ωit__47 = -> types.type_of null            ), 'null'
    @eq ( Ωit__48 = -> types.type_of undefined       ), 'undefined'
    @eq ( Ωit__49 = -> types.type_of false           ), 'boolean'
    @eq ( Ωit__50 = -> types.type_of Symbol 'p'      ), 'symbol'
    @eq ( Ωit__51 = -> types.type_of {}              ), 'object'
    @eq ( Ωit__52 = -> types.type_of NaN             ), 'unknown'
    @eq ( Ωit__53 = -> types.type_of +Infinity       ), 'unknown'
    @eq ( Ωit__54 = -> types.type_of -Infinity       ), 'unknown'
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
    @eq ( Ωit__55 = -> types.isa.asyncfunction.name               ), 'isa.asyncfunction'
    @eq ( Ωit__56 = -> types.isa.optional.asyncfunction.name      ), 'isa.optional.asyncfunction'
    @eq ( Ωit__57 = -> types.validate.asyncfunction.name          ), 'validate.asyncfunction'
    @eq ( Ωit__58 = -> types.validate.optional.asyncfunction.name ), 'validate.optional.asyncfunction'
    @eq ( Ωit__59 = -> types.declarations.null?.type              ), 'null'
    @eq ( Ωit__60 = -> types.declarations.function?.type          ), 'function'
    @eq ( Ωit__61 = -> types.declarations.boolean?.type           ), 'boolean'
    @eq ( Ωit__62 = -> types.declarations.text?.type              ), 'text'
    @eq ( Ωit__63 = -> types.declarations.asyncfunction?.type     ), 'asyncfunction'
    @eq ( Ωit__64 = -> types.isa.null?.name                       ), 'isa.null'
    @eq ( Ωit__65 = -> types.isa.function?.name                   ), 'isa.function'
    @eq ( Ωit__66 = -> types.isa.boolean?.name                    ), 'isa.boolean'
    @eq ( Ωit__67 = -> types.isa.text?.name                       ), 'isa.text'
    @eq ( Ωit__68 = -> types.isa.asyncfunction?.name              ), 'isa.asyncfunction'
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  basic_functionality_using_standalone_methods: ->
    INTERTYPE     = require '../../../apps/intertype'
    { isa
      validate
      type_of   } = new INTERTYPE.Intertype_minimal sample_declarations
    @eq ( Ωit__69 = -> isa.boolean           false               ), true
    @eq ( Ωit__70 = -> isa.boolean           true                ), true
    @eq ( Ωit__71 = -> isa.boolean           null                ), false
    @eq ( Ωit__72 = -> isa.boolean           1                   ), false
    @eq ( Ωit__73 = -> isa.unknown           1                   ), false
    @eq ( Ωit__74 = -> isa.unknown           Infinity            ), true
    @eq ( Ωit__75 = -> isa.optional.boolean  false               ), true
    @eq ( Ωit__76 = -> isa.optional.boolean  true                ), true
    @eq ( Ωit__77 = -> isa.optional.boolean  null                ), true
    @eq ( Ωit__78 = -> isa.optional.boolean  1                   ), false
    @eq ( Ωit__79 = -> isa.optional.unknown  1                   ), false
    @eq ( Ωit__80 = -> isa.optional.unknown  Infinity            ), true
    @eq ( Ωit__81 = -> isa.optional.unknown  undefined           ), true
    @eq ( Ωit__82 = -> isa.optional.unknown  undefined           ), true
    #.........................................................................................................
    @eq ( Ωit__83 = -> validate.boolean               false      ), false
    @eq ( Ωit__84 = -> validate.boolean               true       ), true
    @eq ( Ωit__85 = -> validate.optional.boolean      true       ), true
    @eq ( Ωit__86 = -> validate.optional.boolean      false      ), false
    @eq ( Ωit__87 = -> validate.optional.boolean      undefined  ), undefined
    @eq ( Ωit__88 = -> validate.optional.boolean      null       ), null
    @throws ( Ωit__89 = -> validate.boolean           1  ), /expected a boolean/
    @throws ( Ωit__90 = -> validate.optional.boolean  1  ), /expected an optional boolean/
    #.........................................................................................................
    @eq ( Ωit__91 = -> type_of null            ), 'null'
    @eq ( Ωit__92 = -> type_of undefined       ), 'undefined'
    @eq ( Ωit__93 = -> type_of false           ), 'boolean'
    @eq ( Ωit__94 = -> type_of Symbol 'p'      ), 'symbol'
    @eq ( Ωit__95 = -> type_of {}              ), 'object'
    @eq ( Ωit__96 = -> type_of NaN             ), 'unknown'
    @eq ( Ωit__97 = -> type_of +Infinity       ), 'unknown'
    @eq ( Ωit__98 = -> type_of -Infinity       ), 'unknown'
    #.........................................................................................................
    @eq ( Ωit__99 = -> isa.asyncfunction.name               ), 'isa.asyncfunction'
    @eq ( Ωit_100 = -> isa.optional.asyncfunction.name      ), 'isa.optional.asyncfunction'
    @eq ( Ωit_101 = -> validate.asyncfunction.name          ), 'validate.asyncfunction'
    @eq ( Ωit_102 = -> validate.optional.asyncfunction.name ), 'validate.optional.asyncfunction'
    #.........................................................................................................
    @throws ( Ωit_103 = -> isa.float 3, 4 ), /method 'isa.float' expects 1 arguments, got 2/
    @throws ( Ωit_104 = -> isa.float()    ), /method 'isa.float' expects 1 arguments, got 0/
    return null

  #-----------------------------------------------------------------------------------------------------------
  methods_check_arity: ->
    INTERTYPE     = require '../../../apps/intertype'
    { isa
      validate
      type_of   } = new INTERTYPE.Intertype_minimal sample_declarations
    #.........................................................................................................
    @throws ( Ωit_105 = -> isa.float 3, 4               ), /method 'isa.float' expects 1 arguments, got 2/
    @throws ( Ωit_106 = -> isa.float()                  ), /method 'isa.float' expects 1 arguments, got 0/
    @throws ( Ωit_107 = -> isa.optional.float 3, 4      ), /method 'isa.optional.float' expects 1 arguments, got 2/
    @throws ( Ωit_108 = -> isa.optional.float()         ), /method 'isa.optional.float' expects 1 arguments, got 0/
    @throws ( Ωit_109 = -> validate.float 3, 4          ), /method 'validate.float' expects 1 arguments, got 2/
    @throws ( Ωit_110 = -> validate.float()             ), /method 'validate.float' expects 1 arguments, got 0/
    @throws ( Ωit_111 = -> validate.optional.float 3, 4 ), /method 'validate.optional.float' expects 1 arguments, got 2/
    @throws ( Ωit_112 = -> validate.optional.float()    ), /method 'validate.optional.float' expects 1 arguments, got 0/
    @throws ( Ωit_113 = -> type_of 3, 4                 ), /expected 1 arguments, got 2/
    @throws ( Ωit_114 = -> type_of()                    ), /expected 1 arguments, got 0/
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
    @eq ( Ωit_115 = -> isa.boolean                     boolean                 ), true
    @eq ( Ωit_116 = -> isa.function                    $function               ), true
    @eq ( Ωit_117 = -> isa.asyncfunction               asyncfunction           ), true
    @eq ( Ωit_118 = -> isa.generatorfunction           generatorfunction       ), true
    @eq ( Ωit_119 = -> isa.asyncgeneratorfunction      asyncgeneratorfunction  ), true
    @eq ( Ωit_120 = -> isa.asyncgenerator              asyncgenerator          ), true
    @eq ( Ωit_121 = -> isa.generator                   generator               ), true
    @eq ( Ωit_122 = -> isa.symbol                      symbol                  ), true
    #.........................................................................................................
    @eq ( Ωit_123 = -> validate.boolean                boolean                 ), boolean
    @eq ( Ωit_124 = -> validate.function               $function               ), $function
    @eq ( Ωit_125 = -> validate.asyncfunction          asyncfunction           ), asyncfunction
    @eq ( Ωit_126 = -> validate.generatorfunction      generatorfunction       ), generatorfunction
    @eq ( Ωit_127 = -> validate.asyncgeneratorfunction asyncgeneratorfunction  ), asyncgeneratorfunction
    @eq ( Ωit_128 = -> validate.asyncgenerator         asyncgenerator          ), asyncgenerator
    @eq ( Ωit_129 = -> validate.generator              generator               ), generator
    @eq ( Ωit_130 = -> validate.symbol                 symbol                  ), symbol
    #.........................................................................................................
    @eq ( Ωit_131 = -> type_of boolean                                         ), 'boolean'
    @eq ( Ωit_132 = -> type_of $function                                       ), 'function'
    @eq ( Ωit_133 = -> type_of asyncfunction                                   ), 'asyncfunction'
    @eq ( Ωit_134 = -> type_of generatorfunction                               ), 'generatorfunction'
    @eq ( Ωit_135 = -> type_of asyncgeneratorfunction                          ), 'asyncgeneratorfunction'
    @eq ( Ωit_136 = -> type_of asyncgenerator                                  ), 'asyncgenerator'
    @eq ( Ωit_137 = -> type_of generator                                       ), 'generator'
    @eq ( Ωit_138 = -> type_of symbol                                          ), 'symbol'
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  throw_instructive_error_on_missing_type: ->
    INTERTYPE     = require '../../../apps/intertype'
    { isa
      validate
      type_of   } = new INTERTYPE.Intertype()
    #.........................................................................................................
    @throws ( Ωit_139 = -> isa.quux                    ), /unknown type 'quux'/
    @throws ( Ωit_140 = -> isa.quux()                  ), /unknown type 'quux'/
    @throws ( Ωit_141 = -> isa.quux 3                  ), /unknown type 'quux'/
    @throws ( Ωit_142 = -> isa.quux 3, 4               ), /unknown type 'quux'/
    @throws ( Ωit_143 = -> isa.optional.quux           ), /unknown type 'quux'/
    @throws ( Ωit_144 = -> isa.optional.quux()         ), /unknown type 'quux'/
    @throws ( Ωit_145 = -> isa.optional.quux 3         ), /unknown type 'quux'/
    @throws ( Ωit_146 = -> isa.optional.quux 3, 4      ), /unknown type 'quux'/
    @throws ( Ωit_147 = -> validate.quux               ), /unknown type 'quux'/
    @throws ( Ωit_148 = -> validate.quux()             ), /unknown type 'quux'/
    @throws ( Ωit_149 = -> validate.quux 3             ), /unknown type 'quux'/
    @throws ( Ωit_150 = -> validate.quux 3, 4          ), /unknown type 'quux'/
    @throws ( Ωit_151 = -> validate.optional.quux      ), /unknown type 'quux'/
    @throws ( Ωit_152 = -> validate.optional.quux()    ), /unknown type 'quux'/
    @throws ( Ωit_153 = -> validate.optional.quux 3    ), /unknown type 'quux'/
    @throws ( Ωit_154 = -> validate.optional.quux 3, 4 ), /unknown type 'quux'/
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  throw_instructive_error_when_optional_is_declared: ->
    INTERTYPE     = require '../../../apps/intertype'
    @throws ( Ωit_155 = -> new INTERTYPE.Intertype_minimal { optional: ( ( x ) -> true ), } ), /not allowed to re-declare type 'optional'/
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  throw_instructive_error_when_wrong_type_of_isa_test_declared: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    @throws ( Ωit_156 = -> new Intertype { foo: ( -> ), }                      ), /expected function with 1 parameters, got one with 0/
    @throws ( Ωit_157 = -> new Intertype { foo: ( ( a, b ) -> ), }             ), /expected function with 1 parameters, got one with 2/
    @throws ( Ωit_158 = -> new Intertype { foo: true, }                        ), /expected type name, method, or object to indicate test method, got a boolean/
    @throws ( Ωit_159 = -> new Intertype { foo: undefined, }                   ), /expected type name, method, or object to indicate test method, got a undefined/
    @throws ( Ωit_160 = -> new Intertype { foo: null, }                        ), /expected type name, method, or object to indicate test method, got a null/
    @throws ( Ωit_161 = -> new Intertype { foo: {}, }                          ), /expected type name, method, or object to indicate test method, got a undefined/
    @throws ( Ωit_162 = -> new Intertype { foo: { test: null, }, }             ), /expected type name, method, or object to indicate test method, got a null/
    @throws ( Ωit_163 = -> new Intertype { foo: { test: false, }, }            ), /expected type name, method, or object to indicate test method, got a boolean/
    @throws ( Ωit_164 = -> new Intertype { foo: { test: ( ( a, b ) -> ), }, }  ), /expected function with 1 parameters, got one with 2/
    @throws ( Ωit_165 = -> new Intertype { foo: 'quux', }                      ), /unknown type 'quux'/
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
      @eq ( Ωit_166 = -> TMP_types.isa.function types.isa.integer  ), true
      @eq ( Ωit_167 = -> types.isa.integer.length                  ), 1
      @eq ( Ωit_168 = -> types.isa.integer 123                     ), true
      @eq ( Ωit_169 = -> types.isa.integer 123.456                 ), false
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
      @throws ( Ωit_170 = -> new Intertype_minimal declarations ), /expected a function for `create` entry of type 'integer', got a asyncfunction/
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
      @throws ( Ωit_171 = -> new Intertype_minimal declarations ), /template method for type 'foolist' has arity 1 but must be nullary/
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  intertype_knows_its_base_types: ->
    { isa } = require '../../../apps/intertype'
    #.........................................................................................................
    @eq ( Ωit_172 = -> isa.basetype 'optional'   ), false
    @eq ( Ωit_173 = -> isa.basetype 'anything'   ), true
    @eq ( Ωit_174 = -> isa.basetype 'nothing'    ), true
    @eq ( Ωit_175 = -> isa.basetype 'something'  ), true
    @eq ( Ωit_176 = -> isa.basetype 'null'       ), true
    @eq ( Ωit_177 = -> isa.basetype 'undefined'  ), true
    @eq ( Ωit_178 = -> isa.basetype 'unknown'    ), true
    @eq ( Ωit_179 = -> isa.basetype 'integer'    ), false
    @eq ( Ωit_180 = -> isa.basetype 'float'      ), false
    @eq ( Ωit_181 = -> isa.basetype 'basetype'   ), false
    @eq ( Ωit_182 = -> isa.basetype 'quux'       ), false
    @eq ( Ωit_183 = -> isa.basetype 'toString'   ), false
    @eq ( Ωit_184 = -> isa.basetype null         ), false
    @eq ( Ωit_185 = -> isa.basetype undefined    ), false
    @eq ( Ωit_186 = -> isa.basetype 4            ), false
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  disallow_licensed_overrides: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      types         = new Intertype()
      @eq ( Ωit_187 = -> types.isa.float 4 ), true
      #.......................................................................................................
      overrides     =
        float:
          test:       ( x ) -> x is 'float'
      @throws ( Ωit_188 = -> types.declare overrides ), /not allowed to re-declare type 'float'/
      #.......................................................................................................
      ### pre-existing declaration remains valid: ###
      @eq ( Ωit_189 = -> types.isa.float 4       ), true
      @eq ( Ωit_190 = -> types.isa.float 'float' ), false
      return null
    #.........................................................................................................
    do =>
      types         = new Intertype()
      @eq ( Ωit_191 = -> types.isa.float 4 ), true
      #.......................................................................................................
      overrides     =
        float:
          override:   true
          test:       ( x ) -> x is 'float'
      @throws ( Ωit_192 = -> types.declare overrides ), /not allowed to re-declare type 'float'/
      return null
    #.........................................................................................................
    do =>
      types         = new Intertype()
      @eq ( Ωit_193 = -> types.isa.float 4 ), true
      #.......................................................................................................
      overrides     =
        anything:
          override:   true
          test:       ( x ) -> true
      @throws ( Ωit_194 = -> types.declare overrides ), /not allowed to re-declare basetype 'anything'/
      #.......................................................................................................
      ### pre-existing declaration remains valid: ###
      @eq ( Ωit_195 = -> types.isa.anything 4       ), true
      @eq ( Ωit_196 = -> types.isa.anything 'float' ), true
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
      @eq ( Ωit_197 = -> TMP_types.isa.object types.declarations       ), true
      @eq ( Ωit_198 = -> TMP_types.isa.object types.declarations.float ), true
      @eq ( Ωit_199 = -> TMP_types.isa.object types.declarations.text  ), true
      #.......................................................................................................
      @throws ( Ωit_200 = -> types.create.boolean() ), /type declaration of 'boolean' has no `create` and no `template` entries, cannot be created/
      @throws ( Ωit_201 = -> types.create.text 'foo' ), /expected 0 arguments, got 1/
      #.......................................................................................................
      @eq ( Ωit_202 = -> types.create.text()         ), ''
      @eq ( Ωit_203 = -> types.create.integer()      ), 0
      @eq ( Ωit_204 = -> types.create.float()        ), 0
      @eq ( Ωit_205 = -> types.create.float '123.45' ), 123.45
      @throws ( Ωit_206 = -> types.create.float '***' ), /these arguments are not suitable for `create.float\(\)`: \[ '\*\*\*' \]/
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
      @eq ( Ωit_207 = -> create.quantity()    ), { q: 0, u: 'u', }
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
      @eq ( Ωit_208 = -> create.quantity()                         ), { q: 0, u: 'u', }
      @eq ( Ωit_209 = -> create.quantity { q: 123, }               ), { q: 123, u: 'u', }
      @eq ( Ωit_210 = -> create.quantity { u: 'kg', }              ), { q: 0, u: 'kg', }
      @eq ( Ωit_211 = -> create.quantity { u: 'kg', foo: 'bar', }  ), { q: 0, u: 'kg', foo: 'bar', }
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
      @eq ( Ωit_212 = -> create.float()         ), 0
      @eq ( Ωit_213 = -> create.boolean()       ), false
      @eq ( Ωit_214 = -> create.object()        ), {}
      @eq ( Ωit_215 = -> create.float()         ), 0
      @eq ( Ωit_216 = -> create.infinity()      ), Infinity
      @eq ( Ωit_217 = -> create.text()          ), ''
      @eq ( Ωit_218 = -> create.list()          ), []
      @eq ( Ωit_219 = -> create.regex()         ), new RegExp()
      @eq ( Ωit_220 = -> type_of create.function()      ), 'function'
      @eq ( Ωit_221 = -> type_of create.asyncfunction() ), 'asyncfunction'
      @eq ( Ωit_222 = -> type_of create.symbol()        ), 'symbol'
      @throws ( Ωit_223 = -> create.basetype() ), /type declaration of 'basetype' has no `create` and no `template` entries, cannot be created/
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
      @eq ( Ωit_224 = -> create.quantity()                          ), { q: 0, u: 'u', }
      @eq ( Ωit_225 = -> isa.quantity { q: 9, }                     ), false
      @eq ( Ωit_226 = -> type_of declarations.quantity.sub_tests.q  ), 'function'
      @eq ( Ωit_227 = -> type_of declarations.quantity.sub_tests.u  ), 'function'
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
      @eq ( Ωit_228 = -> create.foo() ), { foo: { bar: 123, } }
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
      @eq ( Ωit_229 = -> type_of declarations.quantity.test ), 'function'
      debug '^342342^', declarations.quantity
      @eq ( Ωit_230 = -> type_of declarations.quantity.sub_tests.q ), 'function'
      @eq ( Ωit_231 = -> type_of declarations.quantity.sub_tests.u ), 'function'
      @eq ( Ωit_232 = -> isa.quantity { q: 987, u: 's', } ), true
      @eq ( Ωit_233 = -> isa.quantity { q: 987, } ), false
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  intertype_minimal_has_only_base_types: ->
    { Intertype_minimal } = require '../../../apps/intertype'
    types = new Intertype_minimal()
    @eq ( Ωit_234 = -> ( Object.keys types.declarations ).sort() ), [ 'anything', 'nothing', 'null', 'optional', 'something', 'undefined', 'unknown' ]
    types.declare { z: ( ( x ) -> ), }
    @eq ( Ωit_235 = -> ( Object.keys types.declarations ).sort() ), [ 'anything', 'nothing', 'null', 'optional', 'something', 'undefined', 'unknown', 'z' ]
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  can_use_type_name_for_test: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      types = new Intertype()
      @throws ( Ωit_236 = -> types.declare { z: 'quux', } ), /unknown type 'quux'/
      types.declare { z: 'float', }
      @eq ( Ωit_237 = -> types.isa.z 12 ), true
      @eq ( Ωit_238 = -> types.isa.float.name                ), 'isa.float'
      @eq ( Ωit_239 = -> types.declarations.float.type       ), 'float'
      @eq ( Ωit_240 = -> types.declarations.float.test.name  ), 'float'
      @eq ( Ωit_241 = -> types.isa.z.name                    ), 'isa.z'
      @eq ( Ωit_242 = -> types.declarations.z.type           ), 'z'
      @eq ( Ωit_243 = -> types.declarations.z.test.name      ), 'z' # ?
    #.........................................................................................................
    do =>
      types = new Intertype()
      @throws ( Ωit_244 = -> types.declare { z: { test: 'quux', }, } ), /unknown type 'quux'/
      types.declare { z: { test: 'float', }, }
      @eq ( Ωit_245 = -> types.isa.z 12 ), true
      @eq ( Ωit_246 = -> types.isa.float.name                ), 'isa.float'
      @eq ( Ωit_247 = -> types.declarations.float.type       ), 'float'
      @eq ( Ωit_248 = -> types.declarations.float.test.name  ), 'float'
      @eq ( Ωit_249 = -> types.isa.z.name                    ), 'isa.z'
      @eq ( Ωit_250 = -> types.declarations.z.type           ), 'z'
      @eq ( Ωit_251 = -> types.declarations.z.test.name      ), 'z'
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  resolve_dotted_type: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      types = new Intertype()
      @eq ( Ωit_252 = -> Reflect.has types.declarations, 'foo'           ), false
      types.declare { foo: 'object', }
      @eq ( Ωit_253 = -> Reflect.has types.declarations, 'foo'           ), true
      @eq ( Ωit_254 = -> Reflect.has types.declarations, 'foo.bar'       ), false
      types.declare { 'foo.bar': 'object', }
      @eq ( Ωit_255 = -> Reflect.has types.declarations, 'foo.bar'       ), true
      @eq ( Ωit_256 = -> Reflect.has types.declarations, 'foo.bar.baz'   ), false
      types.declare { 'foo.bar.baz': 'float', }
      @eq ( Ωit_257 = -> Reflect.has types.declarations, 'foo.bar.baz'   ), true
      @eq ( Ωit_258 = -> types.isa.foo.bar.baz null                      ), false
      @eq ( Ωit_259 = -> types.isa.foo.bar.baz 4                         ), true
      @eq ( Ωit_260 = -> types.isa.foo.bar.baz +Infinity                 ), false
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
      @eq ( Ωit_261 = -> types.isa[ 'quantity.q' ] ), types.declarations[ 'quantity' ].sub_tests[ 'q' ]
      @eq ( Ωit_262 = -> types.isa[ 'quantity.q' ] ), types.isa.quantity.q
      # debug '^409-1^', types.declarations
      @eq ( Ωit_263 = -> types.isa.quantity {}                 ), false
      @eq ( Ωit_264 = -> types.isa.quantity { q: {}, }         ), false
      @eq ( Ωit_265 = -> types.isa.quantity { q: 3, }          ), false
      @eq ( Ωit_266 = -> types.isa.quantity { q: 3, u: 'm', }  ), true
      @eq ( Ωit_267 = -> types.isa.quantity.q 3                ), true
      @eq ( Ωit_268 = -> types.isa.quantity.q 3.1              ), true
      @eq ( Ωit_269 = -> types.isa.quantity.q '3.1'            ), false
      @eq ( Ωit_270 = -> types.isa.quantity.u 'm'              ), true
      @eq ( Ωit_271 = -> types.isa.quantity.u null             ), false
      @eq ( Ωit_272 = -> types.isa.quantity.u 3                ), false
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
      @eq ( Ωit_273 = -> types.isa.person.address.city.name 'P'  ), true
      @eq ( Ωit_274 = -> types.isa.person.address.city.name 1234 ), false
      @eq ( Ωit_275 = -> types.isa.person 1234 ), false
      @eq ( Ωit_276 = -> types.isa.person { name: 'Bob', } ), false
      @eq ( Ωit_277 = -> types.isa.person { name: 'Bob', address: {}, } ), false
      @eq ( Ωit_278 = -> types.isa.person { name: 'Bob', address: { city: {}, }, } ), false
      @eq ( Ωit_279 = -> types.isa.person { name: 'Bob', address: { city: { name: 'P', }, }, } ), false
      @eq ( Ωit_280 = -> types.isa.person { name: 'Bob', address: { city: { name: 'P', postcode: 'SO36', }, }, } ), true
      @eq ( Ωit_281 = -> types.isa.person.address.city.name     'P'                                ), true
      @eq ( Ωit_282 = -> types.isa.person.address.city.postcode 'SO36'                             ), true
      @eq ( Ωit_283 = -> types.isa.person.address.city {         name: 'P', postcode: 'SO36', }    ), true
      @eq ( Ωit_284 = -> types.isa.person.address      { city: { name: 'P', postcode: 'SO36', }, } ), true
      help '^322-1^', ( { "#{k}": f.name } for k, f of types.declarations[ 'person'               ].sub_tests )
      help '^322-2^', ( { "#{k}": f.name } for k, f of types.declarations[ 'person.address'       ].sub_tests )
      help '^322-3^', ( { "#{k}": f.name } for k, f of types.declarations[ 'person.address.city'  ].sub_tests )
      @eq ( Ωit_285 = -> Object.keys types.declarations[ 'person'               ].sub_tests ), [ 'name', 'address', ]
      @eq ( Ωit_286 = -> Object.keys types.declarations[ 'person.address'       ].sub_tests ), [ 'city', ]
      @eq ( Ωit_287 = -> Object.keys types.declarations[ 'person.address.city'  ].sub_tests ), [ 'name', 'postcode', ]
      @eq ( Ωit_288 = -> types.declarations[ 'person' ].sub_tests isnt types.declarations[ 'person.address'      ].sub_tests ), true
      @eq ( Ωit_289 = -> types.declarations[ 'person' ].sub_tests isnt types.declarations[ 'person.address.city' ].sub_tests ), true
      return null
    #.........................................................................................................
    do =>
      types = new Intertype()
      types.declare { 'foo':      'float', }
      types.declare { 'foo.bar':  'text',   }
      do =>
        d = 3
        # d.bar = '?' # Cannot create property in strict mode, so can never satisfy test
        @eq ( Ωit_290 = -> types.isa.foo d ), false
        return null
      do =>
        d = new Number 3
        d.bar = '?'
        @eq ( Ωit_291 = -> d.bar ), '?'
        # still won't work b/c `float` doesn't accept objects (which is a good thing):
        @eq ( Ωit_292 = -> types.isa.foo d ), false
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
      @eq ( Ωit_293 = -> types.isa.foo {} ), false
      @eq ( Ωit_294 = -> types.isa.foo { bind: 1, apply: 2, call: 3, name: 4, length: 5, } ), true
      return null
    #.........................................................................................................
    do =>
      types = new Intertype()
      types.declare { 'foo':        'object',           }
      types.declare { 'foo.text':   ( ( x ) -> x is 1 ) }
      types.declare { 'foo.float':  ( ( x ) -> x is 2 ) }
      @eq ( Ωit_295 = -> types.isa.foo {} ), false
      @eq ( Ωit_296 = -> types.isa.foo { text: 1, float: 2, } ), true
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
      @eq ( Ωit_297 = -> types.isa.person.address.city {} ), false
      @eq ( Ωit_298 = -> types.isa.person.address.city null ), false
      @eq ( Ωit_299 = -> types.isa.person.address.city { name: 'P', postcode: 'SO36', } ), true
      @eq ( Ωit_300 = -> types.isa.mycity {} ), false
      @eq ( Ωit_301 = -> types.isa.mycity null ), false
      @eq ( Ωit_302 = -> types.isa.mycity { name: 'P', postcode: 'SO36', } ), true
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
      @eq ( Ωit_303 = -> types.isa.person.address.city {} ), false
      @eq ( Ωit_304 = -> types.isa.person.address.city null ), false
      @eq ( Ωit_305 = -> types.isa.person.address.city { name: 'P', postcode: 'SO36', } ), true
      @eq ( Ωit_306 = -> types.isa.mycity {} ), false
      @eq ( Ωit_307 = -> types.isa.mycity null ), false
      @eq ( Ωit_308 = -> types.isa.mycity { name: 'P', postcode: 'SO36', } ), true
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
      @eq ( Ωit_309 = -> types.isa.person.address.city {} ), false
      @eq ( Ωit_310 = -> types.isa.person.address.city null ), false
      @eq ( Ωit_311 = -> types.isa.person.address.city { name: 'P', postcode: 'SO36', } ), true
      @eq ( Ωit_312 = -> types.isa.optional.person.address.city {} ), false
      @eq ( Ωit_313 = -> types.isa.optional.person.address.city null ), true
      @eq ( Ωit_314 = -> types.isa.optional.person.address.city { name: 'P', postcode: 'SO36', } ), true
      @eq ( Ωit_315 = -> types.isa.mycity {} ), false
      @eq ( Ωit_316 = -> types.isa.mycity null ), true
      @eq ( Ωit_317 = -> types.isa.mycity { name: 'P', postcode: 'SO36', } ), true
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
      @throws ( Ωit_318 = -> types.declare { 'optional.d':    ( ( x ) -> ), } ), /illegal use of 'optional' in declaration of type 'optional.d'/
      @throws ( Ωit_319 = -> types.declare { 'anything.d':    ( ( x ) -> ), } ), /illegal use of basetype 'anything' in declaration of type 'anything.d'/
      @throws ( Ωit_320 = -> types.declare { 'nothing.d':     ( ( x ) -> ), } ), /illegal use of basetype 'nothing' in declaration of type 'nothing.d'/
      @throws ( Ωit_321 = -> types.declare { 'something.d':   ( ( x ) -> ), } ), /illegal use of basetype 'something' in declaration of type 'something.d'/
      @throws ( Ωit_322 = -> types.declare { 'null.d':        ( ( x ) -> ), } ), /illegal use of basetype 'null' in declaration of type 'null.d'/
      @throws ( Ωit_323 = -> types.declare { 'undefined.d':   ( ( x ) -> ), } ), /illegal use of basetype 'undefined' in declaration of type 'undefined.d'/
      @throws ( Ωit_324 = -> types.declare { 'unknown.d':     ( ( x ) -> ), } ), /illegal use of basetype 'unknown' in declaration of type 'unknown.d'/
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
      @eq ( Ωit_325 = -> __type_of null, _isa, null          ), 'null'
      @eq ( Ωit_326 = -> __type_of null, _isa, undefined     ), 'undefined'
      @eq ( Ωit_327 = -> __type_of null, _isa, 4             ), 'float'
      @eq ( Ωit_328 = -> __type_of null, _isa, ->            ), 'function'
      @eq ( Ωit_329 = -> __type_of null, _isa, -> await null ), 'asyncfunction'
      @eq ( Ωit_330 = -> __type_of null, _isa, {}            ), 'object'
      @eq ( Ωit_331 = -> __type_of null, _isa, []            ), 'list'
      @eq ( Ωit_332 = -> __type_of null, _isa, +Infinity     ), 'infinity'
      @eq ( Ωit_333 = -> __type_of null, _isa, -Infinity     ), 'infinity'
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
      @eq ( Ωit_334 = -> result                                   ), probe
      @eq ( Ωit_335 = -> result.bar         is probe.bar          ), false
      @eq ( Ωit_336 = -> result.bar.baz     is probe.bar.baz      ), false
      @eq ( Ωit_337 = -> result.bar.baz.sub is probe.bar.baz.sub  ), false
      @eq ( Ωit_338 = -> result.bar.baz.sub is sub                ), false
      @eq ( Ωit_339 = -> probe.bar.baz.sub  is sub                ), true
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
      @eq ( Ωit_340 = -> result                                   ), probe
      @eq ( Ωit_341 = -> result.bar         is probe.bar          ), false
      @eq ( Ωit_342 = -> result.bar.baz     is probe.bar.baz      ), false
      @eq ( Ωit_343 = -> result.bar.baz.sub is probe.bar.baz.sub  ), false
      @eq ( Ωit_344 = -> result.bar.baz.sub is sub                ), false
      @eq ( Ωit_345 = -> probe.bar.baz.sub  is sub                ), true
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
      @throws ( Ωit_346 = -> validate.person null                        ), /expected a person, got a null/
      @throws ( Ωit_347 = -> validate.person.address null                ), /expected a person.address, got a null/
      @throws ( Ωit_348 = -> validate.person.address.city null           ), /expected a person.address.city, got a null/
      @throws ( Ωit_349 = -> validate.person.address.city.postcode null  ), /expected a person.address.city.postcode, got a null/
      #.......................................................................................................
      @eq ( Ωit_350 = -> types.isa.person.address.city.postcode 3 ), false
      @throws ( Ωit_351 = -> validate.person.address.city.postcode 3             ), /expected a person.address.city.postcode/
      #.......................................................................................................
      @eq ( Ωit_352 = -> types.isa.person.address.city { name: 'P', } ), false
      @throws ( Ωit_353 = -> validate.person.address.city { name: 'P', }         ), /expected a person.address.city/
      # #.......................................................................................................
      @eq ( Ωit_354 = -> types.isa.person.address.city { postcode: '3421', } ), false
      @throws ( Ωit_355 = -> validate.person.address.city()                      ), /method 'validate.person.address.city' expects 1 arguments, got 0/
      @throws ( Ωit_356 = -> validate.person.address.city null                   ), /expected a person.address.city/
      @throws ( Ωit_357 = -> validate.person.address.city '3421'                 ), /expected a person.address.city/
      @throws ( Ωit_358 = -> validate.person.address.city { postcode: '3421', }  ), /expected a person.address.city/
      #.......................................................................................................
      @eq ( Ωit_359 = -> types.isa.person.address.city { name: 'P', postcode: '3421', } ), true
      @eq ( Ωit_360 = -> validate.person.address.city { name: 'P', postcode: '3421', } ), { name: 'P', postcode: '3421', }
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
      @throws ( Ωit_361 = -> evaluate.optional 1         ), /`optional` is not a legal type for `evaluate` methods/
      @throws ( Ωit_362 = -> evaluate.optional.person 1  ), /`optional` is not a legal type for `evaluate` methods/
      #.......................................................................................................
      @eq ( Ωit_363 = -> isa.person       { name: 'Alice', address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), true
      @eq ( Ωit_364 = -> evaluate.person  { name: 'Alice', address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), { person: true,  'person.name': true, 'person.address': true, 'person.address.city': true, 'person.address.city.name': true, 'person.address.city.postcode': true, }
      #.......................................................................................................
      @eq ( Ωit_365 = -> isa.person       { name: 'Alice', address: { city: { name: 'Atown', postcode: 12345678 } } } ), false
      @eq ( Ωit_366 = -> evaluate.person  { name: 'Alice', address: { city: { name: 'Atown', postcode: 12345678 } } } ), { person: false,  'person.name': true, 'person.address': false, 'person.address.city': false, 'person.address.city.name': true, 'person.address.city.postcode': false, }
      #.......................................................................................................
      @eq ( Ωit_367 = -> isa.person       {                address: { city: { name: 'Atown', postcode: 12345678 } } } ), false
      @eq ( Ωit_368 = -> evaluate.person  {                address: { city: { name: 'Atown', postcode: 12345678 } } } ), { person: false,  'person.name': false, 'person.address': false, 'person.address.city': false, 'person.address.city.name': true, 'person.address.city.postcode': false, }
      #.......................................................................................................
      @eq ( Ωit_369 = -> isa.person       {                address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), false
      @eq ( Ωit_370 = -> evaluate.person  {                address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), { person: false, 'person.name': false, 'person.address': true, 'person.address.city': true, 'person.address.city.name': true, 'person.address.city.postcode': true, }
      #.......................................................................................................
      @eq ( Ωit_371 = -> isa.person       null  ), false
      @eq ( Ωit_372 = -> evaluate.person  null  ), { person: false, 'person.name': false, 'person.address': false, 'person.address.city': false, 'person.address.city.name': false, 'person.address.city.postcode': false, }
      #.......................................................................................................
      @eq ( Ωit_373 = -> isa.person       {}    ), false
      @eq ( Ωit_374 = -> evaluate.person  {}    ), { person: false, 'person.name': false, 'person.address': false, 'person.address.city': false, 'person.address.city.name': false, 'person.address.city.postcode': false, }
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
      @eq ( Ωit_375 = -> isa.person                   { name: 'Alice', address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), true
      @eq ( Ωit_376 = -> evaluate.person              { name: 'Alice', address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), { person: true,  'person.name': true, 'person.address': true, 'person.address.city': true, 'person.address.city.name': true, 'person.address.city.postcode': true, }
      @eq ( Ωit_377 = -> Object.keys evaluate.person  { name: 'Alice', address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), [ 'person', 'person.address', 'person.address.city', 'person.address.city.postcode', 'person.address.city.name', 'person.name' ]
      #.......................................................................................................
      @eq ( Ωit_378 = -> isa.person                   {                address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), false
      @eq ( Ωit_379 = -> evaluate.person              {                address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), { person: false, 'person.name': false, 'person.address': true, 'person.address.city': true, 'person.address.city.name': true, 'person.address.city.postcode': true, }
      @eq ( Ωit_380 = -> Object.keys evaluate.person  {                address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), [ 'person', 'person.address', 'person.address.city', 'person.address.city.postcode', 'person.address.city.name', 'person.name' ]
      #.......................................................................................................
      @eq ( Ωit_381 = -> isa.person                   null  ), false
      @eq ( Ωit_382 = -> evaluate.person              null  ), { person: false, 'person.name': false, 'person.address': false, 'person.address.city': false, 'person.address.city.name': false, 'person.address.city.postcode': false, }
      @eq ( Ωit_383 = -> Object.keys evaluate.person  null  ), [ 'person', 'person.address', 'person.address.city', 'person.address.city.postcode', 'person.address.city.name', 'person.name' ]
      #.......................................................................................................
      @eq ( Ωit_384 = -> isa.person                   {}  ), false
      @eq ( Ωit_385 = -> evaluate.person              {}  ), { person: false, 'person.name': false, 'person.address': false, 'person.address.city': false, 'person.address.city.name': false, 'person.address.city.postcode': false, }
      @eq ( Ωit_386 = -> Object.keys evaluate.person  {}  ), [ 'person', 'person.address', 'person.address.city', 'person.address.city.postcode', 'person.address.city.name', 'person.name' ]
      #.......................................................................................................
      @eq ( Ωit_387 = -> isa.person.address                   { city: { name: 'Atown', postcode: 'VA1234' } } ), true
      @eq ( Ωit_388 = -> evaluate.person.address              { city: { name: 'Atown', postcode: 'VA1234' } } ), { 'person.address': true, 'person.address.city': true, 'person.address.city.name': true, 'person.address.city.postcode': true, }
      @eq ( Ωit_389 = -> Object.keys evaluate.person.address  { city: { name: 'Atown', postcode: 'VA1234' } } ), [ 'person.address', 'person.address.city', 'person.address.city.postcode', 'person.address.city.name' ]
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
      @eq ( Ωit_390 = -> isa.generatorfunction walk_prefixes             ), true
      @eq ( Ωit_391 = -> [ ( walk_prefixes 'one'                )..., ]  ), []
      @eq ( Ωit_392 = -> [ ( walk_prefixes 'one.two'            )..., ]  ), [ 'one' ]
      @eq ( Ωit_393 = -> [ ( walk_prefixes 'one.two.three'      )..., ]  ), [ 'one', 'one.two', ]
      @eq ( Ωit_394 = -> [ ( walk_prefixes 'one.two.three.four' )..., ]  ), [ 'one', 'one.two', 'one.two.three', ]
      ### TAINT should not allow empty namers: ###
      @eq ( Ωit_395 = -> [ ( walk_prefixes '.one.two.three'     )..., ]  ), [ '', '.one', '.one.two', ]
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
      @throws ( Ωit_396 = -> types = new Intertype declarations ), /unknown partial type 'foo'/
      return null
    #.........................................................................................................
    do =>
      declarations =
        'quantity':         'object'
        'quantity.q':       'float'
        'quantity.u':       'text'
      types = new Intertype declarations
      @eq ( Ωit_397 = -> types.isa.quantity {}                   ), false
      @eq ( Ωit_398 = -> types.isa.quantity { q: 12, u: 'kg', }  ), true
      @eq ( Ωit_399 = -> types.isa[ 'quantity.q' ] 12            ), true
      @eq ( Ωit_400 = -> types.isa[ 'quantity.u' ] 'kg'          ), true
      @eq ( Ωit_401 = -> types.isa.quantity.q 12                 ), true
      @eq ( Ωit_402 = -> types.isa.quantity.u 'kg'               ), true
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
      ### this doesn't make a terrible lot of sense: ###
      @eq ( Ωit_415 = -> isa.empty { list: [], text: '', set: new Set() } ), false
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
      @eq ( Ωit_416 = -> isa.empty.list    []          ), true
      @eq ( Ωit_417 = -> isa.empty.list    [ 'A', ]    ), false
      @eq ( Ωit_418 = -> isa.empty.list    4           ), false
      @eq ( Ωit_419 = -> isa.nonempty.list []          ), false
      @eq ( Ωit_420 = -> isa.nonempty.list [ 'A', ]    ), true
      @eq ( Ωit_421 = -> isa.nonempty.list 4           ), false
      @eq ( Ωit_422 = -> isa.empty.text    ''          ), true
      @eq ( Ωit_423 = -> isa.empty.text    'A'         ), false
      @eq ( Ωit_424 = -> isa.empty.text    4           ), false
      @eq ( Ωit_425 = -> isa.nonempty.text ''          ), false
      @eq ( Ωit_426 = -> isa.nonempty.text 'A'         ), true
      @eq ( Ωit_427 = -> isa.nonempty.text 4           ), false
      #.......................................................................................................
      @eq ( Ωit_428 = -> isa.empty []                  ), true
      @eq ( Ωit_429 = -> isa.empty ''                  ), true
      @eq ( Ωit_430 = -> isa.empty new Set()           ), true
      @eq ( Ωit_431 = -> isa.empty [ 1, ]              ), false
      @eq ( Ωit_432 = -> isa.empty 'A'                 ), false
      @eq ( Ωit_433 = -> isa.empty new Set 'abc'       ), false
      #.......................................................................................................
      @eq ( Ωit_434 = -> validate.empty []                  ), []
      @eq ( Ωit_435 = -> validate.empty ''                  ), ''
      @eq ( Ωit_436 = -> validate.empty new Set()           ), new Set()
      @throws ( Ωit_437 = -> validate.empty [ 1, ]              ), /expected a empty, got a list/
      @throws ( Ωit_438 = -> validate.empty 'A'                 ), /expected a empty, got a text/
      @throws ( Ωit_439 = -> validate.empty new Set 'abc'       ), /expected a empty, got a set/
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
      @eq ( Ωit_440 = -> isa.optional.empty.list    []          ), true
      @eq ( Ωit_441 = -> isa.optional.empty.list    [ 'A', ]    ), false
      @eq ( Ωit_442 = -> isa.optional.empty.list    4           ), false
      @eq ( Ωit_443 = -> isa.optional.nonempty.list []          ), false
      @eq ( Ωit_444 = -> isa.optional.nonempty.list [ 'A', ]    ), true
      @eq ( Ωit_445 = -> isa.optional.nonempty.list 4           ), false
      @eq ( Ωit_446 = -> isa.optional.empty.text    ''          ), true
      @eq ( Ωit_447 = -> isa.optional.empty.text    'A'         ), false
      @eq ( Ωit_448 = -> isa.optional.empty.text    4           ), false
      @eq ( Ωit_449 = -> isa.optional.nonempty.text ''          ), false
      @eq ( Ωit_450 = -> isa.optional.nonempty.text 'A'         ), true
      @eq ( Ωit_451 = -> isa.optional.nonempty.text 4           ), false
      #.......................................................................................................
      @eq ( Ωit_452 = -> isa.optional.empty []                  ), true
      @eq ( Ωit_453 = -> isa.optional.empty ''                  ), true
      @eq ( Ωit_454 = -> isa.optional.empty new Set()           ), true
      @eq ( Ωit_455 = -> isa.optional.empty [ 1, ]              ), false
      @eq ( Ωit_456 = -> isa.optional.empty 'A'                 ), false
      @eq ( Ωit_457 = -> isa.optional.empty new Set 'abc'       ), false
      #.......................................................................................................
      @eq ( Ωit_458 = -> validate.optional.empty []                   ), []
      @eq ( Ωit_459 = -> validate.optional.empty ''                   ), ''
      @eq ( Ωit_460 = -> validate.optional.empty new Set()            ), new Set()
      @eq ( Ωit_461 = -> validate.optional.empty.list  []             ), []
      @eq ( Ωit_462 = -> validate.optional.empty.text  ''             ), ''
      @eq ( Ωit_463 = -> validate.optional.empty.set   new Set()      ), new Set()
      @throws ( Ωit_464 = -> validate.optional.empty [ 1, ]           ), /expected an optional empty, got a list/
      @throws ( Ωit_465 = -> validate.optional.empty 'A'              ), /expected an optional empty, got a text/
      @throws ( Ωit_466 = -> validate.optional.empty new Set 'abc'    ), /expected an optional empty, got a set/
      #.......................................................................................................
      @eq ( Ωit_467 = -> isa.optional.empty []                        ), true
      @eq ( Ωit_468 = -> isa.optional.empty ''                        ), true
      @eq ( Ωit_469 = -> isa.optional.empty new Set()                 ), true
      @eq ( Ωit_470 = -> isa.optional.empty [ 1, ]                    ), false
      @eq ( Ωit_471 = -> isa.optional.empty 'A'                       ), false
      @eq ( Ωit_472 = -> isa.optional.empty new Set 'abc'             ), false
      @eq ( Ωit_473 = -> validate.optional.empty       null           ), null
      @eq ( Ωit_474 = -> validate.optional.empty.list  null           ), null
      @eq ( Ωit_475 = -> validate.optional.empty.text  null           ), null
      @eq ( Ωit_476 = -> validate.optional.empty.set   null           ), null
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
      @eq ( Ωit_477 = -> isa.empty.list    []          ), true
      @eq ( Ωit_478 = -> isa.empty.list    [ 'A', ]    ), false
      @eq ( Ωit_479 = -> isa.empty.list    4           ), false
      @eq ( Ωit_480 = -> isa.nonempty.list []          ), false
      @eq ( Ωit_481 = -> isa.nonempty.list [ 'A', ]    ), true
      @eq ( Ωit_482 = -> isa.nonempty.list 4           ), false
      @eq ( Ωit_483 = -> isa.empty.text    ''          ), true
      @eq ( Ωit_484 = -> isa.empty.text    'A'         ), false
      @eq ( Ωit_485 = -> isa.empty.text    4           ), false
      @eq ( Ωit_486 = -> isa.nonempty.text ''          ), false
      @eq ( Ωit_487 = -> isa.nonempty.text 'A'         ), true
      @eq ( Ωit_488 = -> isa.nonempty.text 4           ), false
      #.......................................................................................................
      @eq ( Ωit_489 = -> isa.empty []                  ), true
      @eq ( Ωit_490 = -> isa.empty ''                  ), true
      @eq ( Ωit_491 = -> isa.empty new Set()           ), true
      @eq ( Ωit_492 = -> isa.empty [ 1, ]              ), false
      @eq ( Ωit_493 = -> isa.empty 'A'                 ), false
      @eq ( Ωit_494 = -> isa.empty new Set 'abc'       ), false
      #.......................................................................................................
      @eq ( Ωit_495 = -> validate.empty []                   ), []
      @eq ( Ωit_496 = -> validate.empty ''                   ), ''
      @eq ( Ωit_497 = -> validate.empty new Set()            ), new Set()
      @eq ( Ωit_498 = -> validate.empty.list  []             ), []
      @eq ( Ωit_499 = -> validate.empty.text  ''             ), ''
      @eq ( Ωit_500 = -> validate.empty.set   new Set()      ), new Set()
      @throws ( Ωit_501 = -> validate.empty [ 1, ]           ), /expected a empty, got a list/
      @throws ( Ωit_502 = -> validate.empty 'A'              ), /expected a empty, got a text/
      @throws ( Ωit_503 = -> validate.empty new Set 'abc'    ), /expected a empty, got a set/
      #.......................................................................................................
      @eq ( Ωit_504 = -> isa.empty []                        ), true
      @eq ( Ωit_505 = -> isa.empty ''                        ), true
      @eq ( Ωit_506 = -> isa.empty new Set()                 ), true
      @eq ( Ωit_507 = -> isa.empty [ 1, ]                    ), false
      @eq ( Ωit_508 = -> isa.empty 'A'                       ), false
      @eq ( Ωit_509 = -> isa.empty new Set 'abc'             ), false
      @throws ( Ωit_510 = -> validate.empty       null           ), /expected a empty, got a null/
      @throws ( Ωit_511 = -> validate.empty.list  null           ), /expected a empty.list, got a null/
      @throws ( Ωit_512 = -> validate.empty.text  null           ), /expected a empty.text, got a null/
      @throws ( Ωit_513 = -> validate.empty.set   null           ), /expected a empty.set, got a null/
      #.......................................................................................................
      @eq ( Ωit_514 = -> isa.optional.empty.list    []          ), true
      @eq ( Ωit_515 = -> isa.optional.empty.list    [ 'A', ]    ), false
      @eq ( Ωit_516 = -> isa.optional.empty.list    4           ), false
      @eq ( Ωit_517 = -> isa.optional.nonempty.list []          ), false
      @eq ( Ωit_518 = -> isa.optional.nonempty.list [ 'A', ]    ), true
      @eq ( Ωit_519 = -> isa.optional.nonempty.list 4           ), false
      @eq ( Ωit_520 = -> isa.optional.empty.text    ''          ), true
      @eq ( Ωit_521 = -> isa.optional.empty.text    'A'         ), false
      @eq ( Ωit_522 = -> isa.optional.empty.text    4           ), false
      @eq ( Ωit_523 = -> isa.optional.nonempty.text ''          ), false
      @eq ( Ωit_524 = -> isa.optional.nonempty.text 'A'         ), true
      @eq ( Ωit_525 = -> isa.optional.nonempty.text 4           ), false
      #.......................................................................................................
      @eq ( Ωit_526 = -> isa.optional.empty []                  ), true
      @eq ( Ωit_527 = -> isa.optional.empty ''                  ), true
      @eq ( Ωit_528 = -> isa.optional.empty new Set()           ), true
      @eq ( Ωit_529 = -> isa.optional.empty [ 1, ]              ), false
      @eq ( Ωit_530 = -> isa.optional.empty 'A'                 ), false
      @eq ( Ωit_531 = -> isa.optional.empty new Set 'abc'       ), false
      #.......................................................................................................
      @eq ( Ωit_532 = -> validate.optional.empty []                   ), []
      @eq ( Ωit_533 = -> validate.optional.empty ''                   ), ''
      @eq ( Ωit_534 = -> validate.optional.empty new Set()            ), new Set()
      @eq ( Ωit_535 = -> validate.optional.empty.list  []             ), []
      @eq ( Ωit_536 = -> validate.optional.empty.text  ''             ), ''
      @eq ( Ωit_537 = -> validate.optional.empty.set   new Set()      ), new Set()
      @throws ( Ωit_538 = -> validate.optional.empty [ 1, ]           ), /expected an optional empty, got a list/
      @throws ( Ωit_539 = -> validate.optional.empty 'A'              ), /expected an optional empty, got a text/
      @throws ( Ωit_540 = -> validate.optional.empty new Set 'abc'    ), /expected an optional empty, got a set/
      #.......................................................................................................
      @eq ( Ωit_541 = -> isa.optional.empty []                        ), true
      @eq ( Ωit_542 = -> isa.optional.empty ''                        ), true
      @eq ( Ωit_543 = -> isa.optional.empty new Set()                 ), true
      @eq ( Ωit_544 = -> isa.optional.empty [ 1, ]                    ), false
      @eq ( Ωit_545 = -> isa.optional.empty 'A'                       ), false
      @eq ( Ωit_546 = -> isa.optional.empty new Set 'abc'             ), false
      @eq ( Ωit_547 = -> validate.optional.empty       null           ), null
      @eq ( Ωit_548 = -> validate.optional.empty.list  null           ), null
      @eq ( Ωit_549 = -> validate.optional.empty.text  null           ), null
      @eq ( Ωit_550 = -> validate.optional.empty.set   null           ), null
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
      @eq ( Ωit_551 = -> isa.empty.list    []                             ), true
      @eq ( Ωit_552 = -> isa.empty.list    [ 'A', ]                       ), false
      @eq ( Ωit_553 = -> isa.empty.list    4                              ), false
      @eq ( Ωit_554 = -> isa.nonempty.list []                             ), false
      @eq ( Ωit_555 = -> isa.nonempty.list [ 'A', ]                       ), true
      @eq ( Ωit_556 = -> isa.nonempty.list 4                              ), false
      @eq ( Ωit_557 = -> isa.empty.text    ''                             ), true
      @eq ( Ωit_558 = -> isa.empty.text    'A'                            ), false
      @eq ( Ωit_559 = -> isa.empty.text    4                              ), false
      @eq ( Ωit_560 = -> isa.nonempty.text ''                             ), false
      @eq ( Ωit_561 = -> isa.nonempty.text 'A'                            ), true
      @eq ( Ωit_562 = -> isa.nonempty.text 4                              ), false
      @eq ( Ωit_563 = -> isa.empty { list: [], text: '', set: new Set() } ), false
      #.......................................................................................................
      @eq ( Ωit_564 = -> isa.empty []                                     ), true
      @eq ( Ωit_565 = -> isa.empty ''                                     ), true
      @eq ( Ωit_566 = -> isa.empty new Set()                              ), true
      @eq ( Ωit_567 = -> isa.empty /d/                                    ), false
      @eq ( Ωit_568 = -> isa.empty [ 1, ]                                 ), false
      @eq ( Ωit_569 = -> isa.empty 'A'                                    ), false
      @eq ( Ωit_570 = -> isa.empty new Set 'abc'                          ), false
      #.......................................................................................................
      @eq ( Ωit_571 = -> validate.empty []                                ), []
      @eq ( Ωit_572 = -> validate.empty ''                                ), ''
      @eq ( Ωit_573 = -> validate.empty new Set()                         ), new Set()
      @throws ( Ωit_574 = -> validate.empty [ 1, ]                        ), /expected a empty, got a list/
      @throws ( Ωit_575 = -> validate.empty 'A'                           ), /expected a empty, got a text/
      @throws ( Ωit_576 = -> validate.empty new Set 'abc'                 ), /expected a empty, got a set/
      #.......................................................................................................
      @eq ( Ωit_577 = -> type_of []                                       ), 'list'
      @eq ( Ωit_578 = -> type_of ''                                       ), 'text'
      @eq ( Ωit_579 = -> type_of new Set()                                ), 'set'
      @eq ( Ωit_580 = -> type_of [ 'a', ]                                 ), 'list'
      @eq ( Ωit_581 = -> type_of 'a'                                      ), 'text'
      @eq ( Ωit_582 = -> type_of new Set 'a'                              ), 'set'
      #.......................................................................................................
      @eq ( Ωit_583 = -> type_of 1234                                     ), 'float'
      @eq ( Ωit_584 = -> isa.integer 1234                                 ), true
      @eq ( Ωit_585 = -> isa.positive.integer 1234                        ), true
      @eq ( Ωit_586 = -> isa.negative.integer 1234                        ), false
      @eq ( Ωit_587 = -> isa.negative.integer -1234                       ), true
      @eq ( Ωit_588 = -> isa.negative.integer -Infinity                   ), false
      @eq ( Ωit_589 = -> isa.negative.integer -12.34                      ), false
      #.......................................................................................................
      @eq ( Ωit_590 = -> isa.positive.float     +4                        ), true
      @eq ( Ωit_591 = -> isa.positive.integer   +4                        ), true
      @eq ( Ωit_592 = -> isa.positive.infinity  +4                        ), false
      @eq ( Ωit_593 = -> isa.negative.float     +4                        ), false
      @eq ( Ωit_594 = -> isa.negative.integer   +4                        ), false
      @eq ( Ωit_595 = -> isa.negative.infinity  +4                        ), false
      @eq ( Ωit_596 = -> isa.posnaught.float    +4                        ), true
      @eq ( Ωit_597 = -> isa.posnaught.integer  +4                        ), true
      @eq ( Ωit_598 = -> isa.posnaught.infinity +4                        ), false
      @eq ( Ωit_599 = -> isa.negnaught.float    +4                        ), false
      @eq ( Ωit_600 = -> isa.negnaught.integer  +4                        ), false
      @eq ( Ωit_601 = -> isa.negnaught.infinity +4                        ), false
      #.......................................................................................................
      @eq ( Ωit_602 = -> isa.positive.float      0                        ), false
      @eq ( Ωit_603 = -> isa.positive.integer    0                        ), false
      @eq ( Ωit_604 = -> isa.positive.infinity   0                        ), false
      @eq ( Ωit_605 = -> isa.negative.float      0                        ), false
      @eq ( Ωit_606 = -> isa.negative.integer    0                        ), false
      @eq ( Ωit_607 = -> isa.negative.infinity   0                        ), false
      @eq ( Ωit_608 = -> isa.posnaught.float     0                        ), true
      @eq ( Ωit_609 = -> isa.posnaught.integer   0                        ), true
      @eq ( Ωit_610 = -> isa.posnaught.infinity  0                        ), false
      @eq ( Ωit_611 = -> isa.negnaught.float     0                        ), true
      @eq ( Ωit_612 = -> isa.negnaught.integer   0                        ), true
      @eq ( Ωit_613 = -> isa.negnaught.infinity  0                        ), false
      #.......................................................................................................
      @eq ( Ωit_614 = -> isa.positive.float      Infinity                 ), false
      @eq ( Ωit_615 = -> isa.positive.integer    Infinity                 ), false
      @eq ( Ωit_616 = -> isa.positive.infinity   Infinity                 ), true
      @eq ( Ωit_617 = -> isa.negative.float      Infinity                 ), false
      @eq ( Ωit_618 = -> isa.negative.integer    Infinity                 ), false
      @eq ( Ωit_619 = -> isa.negative.infinity   Infinity                 ), false
      @eq ( Ωit_620 = -> isa.posnaught.float     Infinity                 ), false
      @eq ( Ωit_621 = -> isa.posnaught.integer   Infinity                 ), false
      @eq ( Ωit_622 = -> isa.posnaught.infinity  Infinity                 ), true
      @eq ( Ωit_623 = -> isa.negnaught.float     Infinity                 ), false
      @eq ( Ωit_624 = -> isa.negnaught.integer   Infinity                 ), false
      @eq ( Ωit_625 = -> isa.negnaught.infinity  Infinity                 ), false
      #.......................................................................................................
      @eq ( Ωit_626 = -> isa.positive.float      +4.3                     ), true
      @eq ( Ωit_627 = -> isa.positive.integer    +4.3                     ), false
      @eq ( Ωit_628 = -> isa.positive.infinity   +4.3                     ), false
      @eq ( Ωit_629 = -> isa.negative.float      +4.3                     ), false
      @eq ( Ωit_630 = -> isa.negative.integer    +4.3                     ), false
      @eq ( Ωit_631 = -> isa.negative.infinity   +4.3                     ), false
      @eq ( Ωit_632 = -> isa.posnaught.float     +4.3                     ), true
      @eq ( Ωit_633 = -> isa.posnaught.integer   +4.3                     ), false
      @eq ( Ωit_634 = -> isa.posnaught.infinity  +4.3                     ), false
      @eq ( Ωit_635 = -> isa.negnaught.float     +4.3                     ), false
      @eq ( Ωit_636 = -> isa.negnaught.integer   +4.3                     ), false
      @eq ( Ωit_637 = -> isa.negnaught.infinity  +4.3                     ), false
      #.......................................................................................................
      @eq ( Ωit_638 = -> isa.positive.float      -4.3                     ), false
      @eq ( Ωit_639 = -> isa.positive.integer    -4.3                     ), false
      @eq ( Ωit_640 = -> isa.positive.infinity   -4.3                     ), false
      @eq ( Ωit_641 = -> isa.negative.float      -4.3                     ), true
      @eq ( Ωit_642 = -> isa.negative.integer    -4.3                     ), false
      @eq ( Ωit_643 = -> isa.negative.infinity   -4.3                     ), false
      @eq ( Ωit_644 = -> isa.posnaught.float     -4.3                     ), false
      @eq ( Ωit_645 = -> isa.posnaught.integer   -4.3                     ), false
      @eq ( Ωit_646 = -> isa.posnaught.infinity  -4.3                     ), false
      @eq ( Ωit_647 = -> isa.negnaught.float     -4.3                     ), true
      @eq ( Ωit_648 = -> isa.negnaught.integer   -4.3                     ), false
      @eq ( Ωit_649 = -> isa.negnaught.infinity  -4.3                     ), false
      #.......................................................................................................
      @eq ( Ωit_650 = -> isa.posnaught           +Infinity                ), true
      @eq ( Ωit_651 = -> isa.negnaught           +Infinity                ), false
      @eq ( Ωit_652 = -> isa.posnaught           -Infinity                ), false
      @eq ( Ωit_653 = -> isa.negnaught           -Infinity                ), true
      @eq ( Ωit_654 = -> isa.posnaught           0                        ), true
      @eq ( Ωit_655 = -> isa.negnaught           0                        ), true
      @eq ( Ωit_656 = -> isa.posnaught           0                        ), true
      @eq ( Ωit_657 = -> isa.negnaught           0                        ), true
      #.......................................................................................................
      @eq ( Ωit_658 = -> isa.frozen         Object.freeze {}              ), true
      @eq ( Ωit_659 = -> isa.frozen         Object.freeze []              ), true
      @eq ( Ωit_660 = -> isa.frozen                       {}              ), false
      @eq ( Ωit_661 = -> isa.frozen                       []              ), false
      @eq ( Ωit_662 = -> isa.frozen.object  Object.freeze {}              ), true
      @eq ( Ωit_663 = -> isa.frozen.list    Object.freeze []              ), true
      @eq ( Ωit_664 = -> isa.frozen.object                {}              ), false
      @eq ( Ωit_665 = -> isa.frozen.list                  []              ), false
      #.......................................................................................................
      @eq ( Ωit_666 = -> isa.odd.integer                  []              ), false
      @eq ( Ωit_667 = -> isa.odd.integer                  102.4           ), false
      @eq ( Ωit_668 = -> isa.odd.integer                  9997            ), true
      @eq ( Ωit_669 = -> isa.odd.integer                  '1024'          ), false
      @eq ( Ωit_670 = -> isa.odd.integer                  0               ), false
      @eq ( Ωit_671 = -> isa.odd.integer                  1024            ), false
      @eq ( Ωit_672 = -> isa.odd.positive.integer         1024            ), false
      @eq ( Ωit_673 = -> isa.odd.positive.integer         102.4           ), false
      @eq ( Ωit_674 = -> isa.odd.positive.integer         1023            ), true
      @eq ( Ωit_675 = -> isa.odd.positive.integer         -1023           ), false
      @eq ( Ωit_676 = -> isa.odd.positive.integer         103.4           ), false
      @eq ( Ωit_677 = -> isa.even.integer                 []              ), false
      @eq ( Ωit_678 = -> isa.even.integer                 102.4           ), false
      @eq ( Ωit_679 = -> isa.even.integer                 9997            ), false
      @eq ( Ωit_680 = -> isa.even.integer                 '1024'          ), false
      @eq ( Ωit_681 = -> isa.even.integer                 0               ), true
      @eq ( Ωit_682 = -> isa.even.integer                 1024            ), true
      @eq ( Ωit_683 = -> isa.even.positive.integer        1024            ), true
      @eq ( Ωit_684 = -> isa.even.positive.integer        0               ), false
      @eq ( Ωit_685 = -> isa.even.posnaught.integer       1024            ), true
      @eq ( Ωit_686 = -> isa.even.posnaught.integer       0               ), true
      #.......................................................................................................
      @eq ( Ωit_687 = -> isa.even.posnaught               0               ), true
      @eq ( Ωit_688 = -> isa.even.posnaught               1               ), false
      @eq ( Ωit_689 = -> isa.even.posnaught               2               ), true
      #.......................................................................................................
      @eq ( Ωit_690 = -> isa.cardinal                     -1024           ), false
      @eq ( Ωit_691 = -> isa.cardinal                     10              ), true
      @eq ( Ωit_692 = -> isa.cardinal                     123.7           ), false
      @eq ( Ωit_693 = -> isa.cardinal                     0               ), true
      @eq ( Ωit_694 = -> isa.cardinal                     1               ), true
      @eq ( Ωit_695 = -> isa.cardinal                     Infinity        ), false
      @eq ( Ωit_696 = -> evaluate.cardinal                Infinity        ), { cardinal: false }
      @eq ( Ωit_697 = -> evaluate.posnaught.integer       Infinity        ), { 'posnaught.integer': false }
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
      @eq ( Ωit_698 = -> ( new Intertype() ).declare { foo: 'float', } ), null
      @eq ( Ωit_699 = -> ( new Intertype() ).declare { foo: 'text',  } ), null
      # ( new Intertype() ).declare { foo: 'optional', }
      @throws ( Ωit_700 = -> ( new Intertype() ).declare { foo: 'optional', }        ), /illegal use of 'optional' in declaration of type 'foo'/
      @throws ( Ωit_701 = -> ( new Intertype() ).declare { foo: 'qqq', }             ), /unknown type 'qqq'/
      @throws ( Ωit_702 = -> ( new Intertype() ).declare { foo: 'optional.float', }  ), /illegal use of 'optional' in declaration of type 'foo'/
      @throws ( Ωit_703 = -> ( new Intertype() ).declare { foo: 'anything.float', }  ), /illegal use of basetype 'anything' in declaration of type 'foo'/
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
      @eq ( Ωit_704 = -> isa.normalfloat                     0     ), true
      @eq ( Ωit_705 = -> isa.normalfloat                     null  ), false
      @eq ( Ωit_706 = -> isa.normalfloat                     -1    ), false
      @eq ( Ωit_707 = -> isa.normalfloat                     '?'   ), false
      @eq ( Ωit_708 = -> isa.optional.normalfloat            0     ), true
      @eq ( Ωit_709 = -> isa.optional.normalfloat            null  ), true
      @eq ( Ωit_710 = -> isa.optional.normalfloat            -1    ), false
      @eq ( Ωit_711 = -> isa.optional.normalfloat            '?'   ), false
      @eq ( Ωit_712 = -> validate.normalfloat                0     ), 0
      @eq ( Ωit_713 = -> validate.optional.normalfloat       0     ), 0
      @eq ( Ωit_714 = -> validate.optional.normalfloat       null  ), null
      @throws ( Ωit_715 = -> validate.normalfloat           null ), /expected a normalfloat, got a null/
      @throws ( Ωit_716 = -> validate.normalfloat           -1   ), /expected a normalfloat, got a float/
      @throws ( Ωit_717 = -> validate.normalfloat           '?'  ), /expected a normalfloat, got a text/
      @throws ( Ωit_718 = -> validate.optional.normalfloat  -1   ), /expected an optional normalfloat, got a float/
      @throws ( Ωit_719 = -> validate.optional.normalfloat  '?'  ), /expected an optional normalfloat, got a text/
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
      @eq ( Ωit_720 = -> isa.quantity            { q: 1, u: 'm', }   ), true
      @eq ( Ωit_721 = -> isa.quantity            null                ), false
      @eq ( Ωit_722 = -> isa.optional.quantity   { q: 2, u: 'm', }   ), true
      @eq ( Ωit_723 = -> isa.optional.quantity   null                ), true
      @eq ( Ωit_724 = -> validate.quantity               { q: 3, u: 'm', } ), { q: 3, u: 'm', }
      @eq ( Ωit_725 = -> validate.optional.quantity      { q: 4, u: 'm', } ), { q: 4, u: 'm', }
      @eq ( Ωit_726 = -> validate.optional.quantity.q    null  ), null
      @eq ( Ωit_727 = -> validate.optional.quantity.q    111   ), 111
      @eq ( Ωit_728 = -> isa.quantity                     null               ), false
      @eq ( Ωit_729 = -> isa.quantity                     -1                 ), false
      @eq ( Ωit_730 = -> isa.quantity                     '?'                ), false
      @eq ( Ωit_731 = -> isa.quantity.q                   '?'                ), false
      @eq ( Ωit_732 = -> isa.quantity.q                   3                  ), true
      @eq ( Ωit_733 = -> isa.optional.quantity            { q: 1, u: 'm', }  ), true
      @eq ( Ωit_734 = -> isa.optional.quantity            null               ), true
      @eq ( Ωit_735 = -> isa.optional.quantity            -1                 ), false
      @eq ( Ωit_736 = -> isa.optional.quantity            '?'                ), false
      @eq ( Ωit_737 = -> isa.optional.quantity.q          '?'                ), false
      @eq ( Ωit_738 = -> isa.optional.quantity.q          3                  ), true
      @eq ( Ωit_739 = -> validate.quantity                { q: 1, u: 'm', }  ), { q: 1, u: 'm', }
      @eq ( Ωit_740 = -> validate.optional.quantity       { q: 1, u: 'm', }  ), { q: 1, u: 'm', }
      @eq ( Ωit_741 = -> validate.optional.quantity       null               ), null
      @throws ( Ωit_742 = -> validate.quantity           { q: 5, }  ), /expected a quantity, got a object/ ### TAINT message should be more specific ###
      @throws ( Ωit_743 = -> validate.quantity            null      ), /expected a quantity, got a null/
      @throws ( Ωit_744 = -> validate.quantity            -1        ), /expected a quantity, got a float/
      @throws ( Ωit_745 = -> validate.quantity            '?'       ), /expected a quantity, got a text/
      @throws ( Ωit_746 = -> validate.quantity            { q: 1, } ), /expected a quantity, got a object/ ### TAINT message should be more specific ###
      @throws ( Ωit_747 = -> validate.optional.quantity   -1        ), /expected an optional quantity, got a float/
      @throws ( Ωit_748 = -> validate.optional.quantity   { q: 1, } ), /expected an optional quantity, got a object/ ### TAINT message should be more specific ###
      @throws ( Ωit_749 = -> validate.optional.quantity.q { q: 1, } ), /expected an optional quantity.q, got a object/
      @throws ( Ωit_750 = -> validate.optional.quantity.q 3, 4, 5   ), /method 'validate.optional.quantity.q' expects 1 arguments, got 3/
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  declaration_role_field: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      { declarations  } = new Intertype()
      @eq ( Ωit_751 = -> declarations.float.role     ), 'usertype'
      @eq ( Ωit_752 = -> declarations.null.role      ), 'basetype'
      @eq ( Ωit_753 = -> declarations.anything.role  ), 'basetype'
      @eq ( Ωit_754 = -> declarations.unknown.role   ), 'basetype'
      @eq ( Ωit_755 = -> declarations.optional.role  ), 'optional'
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
      @eq ( Ωit_756 = -> type_of null              ), 'null'
      @eq ( Ωit_757 = -> type_of undefined         ), 'undefined'
      @eq ( Ωit_758 = -> type_of +Infinity         ), 'unknown'
      @eq ( Ωit_759 = -> type_of 4                 ), 'unknown'
      return null
    #.........................................................................................................
    do =>
      @eq ( Ωit_760 = -> isa.anything   1          ), true
      @eq ( Ωit_761 = -> isa.nothing    1          ), false
      @eq ( Ωit_762 = -> isa.something  1          ), true
      @eq ( Ωit_763 = -> isa.unknown    1          ), true
      return null
    #.........................................................................................................
    do =>
      @eq ( Ωit_764 = -> isa.anything   null       ), true
      @eq ( Ωit_765 = -> isa.nothing    null       ), true
      @eq ( Ωit_766 = -> isa.something  null       ), false
      @eq ( Ωit_767 = -> isa.unknown    null       ), false
      return null
    #.........................................................................................................
    do =>
      @eq ( Ωit_768 = -> isa.anything   undefined  ), true
      @eq ( Ωit_769 = -> isa.nothing    undefined  ), true
      @eq ( Ωit_770 = -> isa.something  undefined  ), false
      @eq ( Ωit_771 = -> isa.unknown    undefined  ), false
      return null
    #.........................................................................................................
    do =>
      @throws ( Ωit_772 = -> isa.optional 1      ), /`optional` is not a legal type for `isa` methods/
      @throws ( Ωit_773 = -> validate.optional 1 ), /`optional` is not a legal type for `validate` methods/
      @throws ( Ωit_774 = -> create.optional 1   ), /`optional` is not a legal type for `create` methods/
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
    @eq ( Ωit_775 = -> types.create.foobar { foo: 8, bar: 9, } ), { foo: 8, bar: 9, }
    @eq ( Ωit_776 = -> types.create.foobar { foo: 8,         } ), { foo: 8, bar: 5, }
    @eq ( Ωit_777 = -> types.create.foobar { foo: 4, bar: 5, } ), { foo: 4, bar: 5, }
    @eq ( Ωit_778 = -> types.create.foobar {                 } ), { foo: 4, bar: 5, }
    @eq ( Ωit_779 = -> types.create.foobar undefined           ), { foo: 4, bar: 5, }
    @eq ( Ωit_780 = -> types.create.foobar null                ), { foo: 4, bar: 5, }
    return null

  #---------------------------------------------------------------------------------------------------------
  can_use_values_of_unknown_type: ->
    do =>
      { Intertype_minimal, } = require '../../../apps/intertype'
      types = new Intertype_minimal()
      types.declare thirtyone: ( x ) -> x is 31
      @eq ( Ωit_781 = -> types.type_of 31        ), 'thirtyone'
      @eq ( Ωit_782 = -> types.type_of 32        ), 'unknown'
      @eq ( Ωit_783 = -> types.isa.thirtyone 31  ), true
      @eq ( Ωit_784 = -> types.isa.thirtyone 32  ), false
      @eq ( Ωit_785 = -> types.type_of new Map() ), 'unknown'
      return null
    #.......................................................................................................
    do =>
      { Intertype_minimal, } = require '../../../apps/intertype'
      types = new Intertype_minimal()
      types.declare thirtyone:  ( x ) -> ( @isa.float x ) and ( x is 31 )
      ### this used to be a problem        ^^^^ ###
      types.declare float:      ( x ) -> Number.isFinite x
      @eq ( Ωit_786 = -> types.type_of 31        ), 'thirtyone'
      @eq ( Ωit_787 = -> types.type_of 32        ), 'float'
      @eq ( Ωit_788 = -> types.isa.thirtyone 31  ), true
      @eq ( Ωit_789 = -> types.isa.thirtyone 32  ), false
      @eq ( Ωit_790 = -> types.type_of new Map() ), 'unknown'
      return null
    #.......................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  advanced_types: ->
    { Intertype, } = require '../../../apps/intertype'
    types = new Intertype()
    @eq ( Ωit_791 = -> types.type_of new Set() ), 'set'
    @eq ( Ωit_792 = -> types.type_of new Map() ), 'map'
    return null

  #=========================================================================================================
  Create_methods:

    #-------------------------------------------------------------------------------------------------------
    floats: ->
      { Intertype, } = require '../../../apps/intertype'
      t2 = new Intertype()
      @eq     ( Ωit_793 = -> t2.create.float()              ), 0
      @eq     ( Ωit_794 = -> t2.create.float +0             ), 0
      @eq     ( Ωit_795 = -> t2.create.float -0             ), 0
      @eq     ( Ωit_796 = -> t2.create.float false          ), 0
      @eq     ( Ωit_797 = -> t2.create.float true           ), 1
      @eq     ( Ωit_798 = -> t2.create.float 12.34          ), 12.34
      @eq     ( Ωit_799 = -> t2.create.float '12.34'        ), 12.34
      @eq     ( Ωit_800 = -> t2.create.float +12.34         ), 12.34
      @eq     ( Ωit_801 = -> t2.create.float '+12.34'       ), 12.34
      @eq     ( Ωit_802 = -> t2.create.float -12.34         ), -12.34
      @eq     ( Ωit_803 = -> t2.create.float '-12.34'       ), -12.34
      @eq     ( Ωit_804 = -> t2.create.float null           ), 0
      @eq     ( Ωit_805 = -> t2.create.float undefined      ), 0
      @throws ( Ωit_806 = -> t2.create.float ''             ), /these arguments are not suitable for `create.float\(\)`: ''/
      return null

    #-------------------------------------------------------------------------------------------------------
    integers: ->
      { Intertype, } = require '../../../apps/intertype'
      t2 = new Intertype()
      @eq     ( Ωit_807 = -> t2.create.integer()              ), 0
      @eq     ( Ωit_808 = -> t2.create.integer +0             ), 0
      @eq     ( Ωit_809 = -> t2.create.integer -0             ), 0
      @eq     ( Ωit_810 = -> t2.create.integer false          ), 0
      @eq     ( Ωit_811 = -> t2.create.integer true           ), 1
      @eq     ( Ωit_812 = -> t2.create.integer 12.34          ), 12
      @eq     ( Ωit_813 = -> t2.create.integer '12'           ), 12
      @eq     ( Ωit_814 = -> t2.create.integer +12            ), 12
      @eq     ( Ωit_815 = -> t2.create.integer '+12'          ), 12
      @eq     ( Ωit_816 = -> t2.create.integer -12            ), -12
      @eq     ( Ωit_817 = -> t2.create.integer '-12'          ), -12
      @eq     ( Ωit_818 = -> t2.create.integer null           ), 0
      @eq     ( Ωit_819 = -> t2.create.integer undefined      ), 0
      @throws ( Ωit_820 = -> t2.create.integer ''             ), /these arguments are not suitable for `create.integer\(\)`: ''/
      return null

    #-------------------------------------------------------------------------------------------------------
    cardinals: ->
      { Intertype, } = require '../../../apps/intertype'
      t2 = new Intertype()
      @eq     ( Ωit_821 = -> t2.create.cardinal()              ), 0
      @eq     ( Ωit_822 = -> t2.create.cardinal +0             ), +0
      @eq     ( Ωit_823 = -> t2.create.cardinal -0             ), -0
      @eq     ( Ωit_824 = -> t2.create.cardinal false          ), 0
      @eq     ( Ωit_825 = -> t2.create.cardinal true           ), 1
      @eq     ( Ωit_826 = -> t2.create.cardinal 12.34          ), 12
      @eq     ( Ωit_827 = -> t2.create.cardinal '12'           ), 12
      @eq     ( Ωit_828 = -> t2.create.cardinal +12            ), 12
      @eq     ( Ωit_829 = -> t2.create.cardinal '+12'          ), 12
      @throws ( Ωit_830 = -> t2.create.cardinal -12            ), /these arguments are not suitable for `create.cardinal\(\)`: -12/
      @throws ( Ωit_831 = -> t2.create.cardinal '-12'          ), /these arguments are not suitable for `create.cardinal\(\)`: '-12'/
      @eq     ( Ωit_832 = -> t2.create.cardinal null           ), 0
      @eq     ( Ωit_833 = -> t2.create.cardinal undefined      ), 0
      @throws ( Ωit_834 = -> t2.create.cardinal ''             ), /these arguments are not suitable for `create.cardinal\(\)`: ''/
      return null

    #-------------------------------------------------------------------------------------------------------
    texts: ->
      { Intertype, } = require '../../../apps/intertype'
      t2 = new Intertype()
      @eq     ( Ωit_835 = -> t2.create.text()              ), ''
      @eq     ( Ωit_836 = -> t2.create.text +0             ), '0'
      @eq     ( Ωit_837 = -> t2.create.text -0             ), '-0'
      @eq     ( Ωit_838 = -> t2.create.text false          ), 'false'
      @eq     ( Ωit_839 = -> t2.create.text true           ), 'true'
      @eq     ( Ωit_840 = -> t2.create.text 12.34          ), '12.34'
      @eq     ( Ωit_841 = -> t2.create.text '12'           ), '12'
      @eq     ( Ωit_842 = -> t2.create.text +12            ), '12'
      @eq     ( Ωit_843 = -> t2.create.text '+12'          ), '+12'
      @eq     ( Ωit_844 = -> t2.create.text -12            ), '-12'
      @eq     ( Ωit_845 = -> t2.create.text '-12'          ), '-12'
      @eq     ( Ωit_846 = -> t2.create.text null           ), ''
      @eq     ( Ωit_847 = -> t2.create.text undefined      ), ''
      @eq     ( Ωit_848 = -> t2.create.text ''             ), ''
      return null

    #-------------------------------------------------------------------------------------------------------
    on_dotted_types: ->
      { Intertype, } = require '../../../apps/intertype'
      #.....................................................................................................
      do =>
        declarations =
          quantity:
            test:       'object'
            template:
              q:        0
              u:        'u'
            create: ( x ) ->
              { q: 0, u: 'u', }
          'quantity.q':
            test: 'float'
            create: ( x ) -> 0
          'quantity.u':
            test: 'text'
            create: ( x ) -> 'u'
        t2 = new Intertype declarations
        @eq     ( Ωit_849 = -> t2.create.quantity()               ), { q: 0, u: 'u', }
        @eq     ( Ωit_850 = -> t2.create.quantity '12.5m'         ), { q: 12.5, u: 'm', }
        @eq     ( Ωit_851 = -> t2.create.quantity.q()             ), 0
        @eq     ( Ωit_852 = -> t2.create.quantity.u()             ), 'u'
        @eq     ( Ωit_853 = -> t2.create[ 'quantity.q' ]()        ), 0
        @eq     ( Ωit_854 = -> t2.create[ 'quantity.u' ]()        ), 'u'
        return null
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
        @eq     ( Ωit_855 = -> t2.create.quantity()               ), { q: 0, u: 'u', }
        @eq     ( Ωit_856 = -> t2.create.quantity '12.5m'         ), { q: 12.5, u: 'm', }
        @eq     ( Ωit_857 = -> t2.create.quantity.q()             ), 0
        @eq     ( Ωit_858 = -> t2.create.quantity.u()             ), 'u'
        @eq     ( Ωit_859 = -> t2.create[ 'quantity.q' ]()        ), 0
        @eq     ( Ωit_860 = -> t2.create[ 'quantity.u' ]()        ), 'u'
        return null
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
        debug 'Ωit_861', t2.declarations[ 'literal.float'   ].create '123.456e4'
        debug 'Ωit_862', t2.declarations[ 'literal.integer' ].create '123.456'
        return null
      #.....................................................................................................
      return null

    # #-------------------------------------------------------------------------------------------------------
    # posnaught_integers: ->
    #   { Intertype, } = require '../../../apps/intertype'
    #   t2 = new Intertype()
    #   @eq     ( Ωit_863 = -> t2.create.posnaught.integer()              ), 0
    #   @eq     ( Ωit_864 = -> t2.create.posnaught.integer +0             ), 0
    #   @eq     ( Ωit_865 = -> t2.create.posnaught.integer -0             ), 0
    #   @eq     ( Ωit_866 = -> t2.create.posnaught.integer false          ), 0
    #   @eq     ( Ωit_867 = -> t2.create.posnaught.integer true           ), 1
    #   @eq     ( Ωit_868 = -> t2.create.posnaught.integer 12.34          ), 12
    #   @eq     ( Ωit_869 = -> t2.create.posnaught.integer '12'           ), 12
    #   @eq     ( Ωit_870 = -> t2.create.posnaught.integer +12            ), 12
    #   @eq     ( Ωit_871 = -> t2.create.posnaught.integer '+12'          ), 12
    #   @eq     ( Ωit_872 = -> t2.create.posnaught.integer -12            ), -12
    #   @eq     ( Ωit_873 = -> t2.create.posnaught.integer '-12'          ), -12
    #   @eq     ( Ωit_874 = -> t2.create.posnaught.integer null           ), 0
    #   @eq     ( Ωit_875 = -> t2.create.posnaught.integer undefined      ), 0
    #   @throws ( Ωit_876 = -> t2.create.posnaught.integer ''             ), /these arguments are not suitable for `create.posnaught.integer\(\)`: \[ '' \]/
    #   return null

  Regexes:
    floats: ->
      { Intertype, }  = require '../../../apps/intertype'
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
        ///^
          [-+]?
          (?:
            ([1-9][0-9]*[.])[0-9]+ |
            ([.])[0-9]+ |
            ([1-9][0-9]*)
            )
          ([eE][-+]?[0-9]+)?
          $/// ### r7 ###
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
            @eq ( WGUY.props.nameit "Ω_877-INVALID-TEST-p#{pi}", -> eval probe ), parseFloat probe
            @eq ( WGUY.props.nameit "Ω_878-INVALID-TEST-p#{pi}", -> eval probe ), val_or_err
          when is_valid_literal is false
            @throws ( WGUY.props.nameit "Ω_879-INVALID-TEST-p#{pi}", -> eval probe ), val_or_err
          when is_valid_literal is null
            @pass 'Ω_880', "#{rpr probe} will be considered not well-formed for the purposes of this test"
      #.....................................................................................................
      for regex, ri in regexes
        for [ probe, is_valid_literal, ], pi in probes_and_matchers
          regex.lastIndex = 0
          if ( match = probe.match regex )?
            switch true
              when is_valid_literal is true   then @pass "Ω_881-r#{ri}-p#{pi}"
              when is_valid_literal is false  then @fail "Ω_882-r#{ri}-p#{pi}", "expected no match but got one"
              when is_valid_literal is null   then @fail "Ω_883-r#{ri}-p#{pi}", "expected no match but got one"
          else
            switch true
              when is_valid_literal is true   then @fail "Ω_884-r#{ri}-p#{pi}", "expected match but got none"
              when is_valid_literal is false  then @pass "Ω_885-r#{ri}-p#{pi}"
              when is_valid_literal is null   then @pass "Ω_886-r#{ri}-p#{pi}"
      #.....................................................................................................
      for regex, ri in regexes
        for [ probe, is_valid_literal, ], pi in probes_and_matchers
          regex.lastIndex = 0
          if ( match = probe.match regex )?
            switch true
              when is_valid_literal is true   then help         "Ω_887-r#{ri}-p#{pi}", match
              when is_valid_literal is false  then warn reverse "Ω_888-r#{ri}-p#{pi}", match
              when is_valid_literal is null   then urge reverse "Ω_889-r#{ri}-p#{pi}", match
          else
            switch true
              when is_valid_literal is true   then help reverse "Ω_890-r#{ri}-p#{pi}", match
              when is_valid_literal is false  then warn         "Ω_891-r#{ri}-p#{pi}", match
              when is_valid_literal is null   then urge         "Ω_892-r#{ri}-p#{pi}", match
      #.....................................................................................................
      return null



#===========================================================================================================
if module is require.main then await do =>
  # @use_fields_to_declare_qualifiers()
  # test @use_fields_to_declare_qualifiers
  # TT = { interface: @intertype_tasks.interface, }
  # ( new Test { throw_on_error: true, } ).test { TT, }
  # ( new Test { throw_on_error: false, } ).test ( { Create_methods: @intertype_tasks.Create_methods, } )
  # ( new Test { throw_on_error: false, } ).test ( { on_dotted_types: @intertype_tasks.Create_methods.on_dotted_types, } )
  ( new Test { throw_on_error: false, } ).test ( { Regexes: @intertype_tasks.Regexes, } )
  # await ( new Test { throw_on_error: true, } ).async_test { tasks: @tasks, }
  # await ( new Test { throw_on_error: true, } ).async_test { can_use_values_of_unknown_type: @tasks.can_use_values_of_unknown_type, }


