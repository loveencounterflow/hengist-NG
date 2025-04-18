
############################################################################################################
#
#===========================================================================================================
OLD_intertype_tasks =

  #-----------------------------------------------------------------------------------------------------------
  interface: ->
    INTERTYPE     = require '../../../apps/intertype'
    @eq ( Ωit_220 = -> debug '2312312'; TMP_types.isa.object    INTERTYPE.types                               ), true
    @eq ( Ωit_221 = -> TMP_types.isa.undefined INTERTYPE.types.get_isa                       ), true
    @eq ( Ωit_222 = -> TMP_types.isa.undefined INTERTYPE.types.get_isa_optional              ), true
    @eq ( Ωit_223 = -> TMP_types.isa.undefined INTERTYPE.types.get_validate                  ), true
    @eq ( Ωit_224 = -> TMP_types.isa.undefined INTERTYPE.types.get_validate_optional         ), true
    @eq ( Ωit_225 = -> TMP_types.isa.function  INTERTYPE.types._get_isa                      ), true
    @eq ( Ωit_226 = -> TMP_types.isa.function  INTERTYPE.types._get_isa_optional             ), true
    @eq ( Ωit_227 = -> TMP_types.isa.function  INTERTYPE.types._get_validate                 ), true
    @eq ( Ωit_228 = -> TMP_types.isa.function  INTERTYPE.types._get_validate_optional        ), true
    @eq ( Ωit_229 = -> TMP_types.isa.object    INTERTYPE.types                               ), true
    @eq ( Ωit_230 = -> TMP_types.isa.object    INTERTYPE.types.isa                           ), true
    # @eq ( Ωit_231 = -> TMP_types.isa.function  INTERTYPE.types.isa.optional                  ), true
    @eq ( Ωit_232 = -> TMP_types.isa.object    INTERTYPE.types.validate                      ), true
    # @eq ( Ωit_233 = -> TMP_types.isa.function  INTERTYPE.types.validate.optional             ), true
    @eq ( Ωit_234 = -> TMP_types.isa.function  INTERTYPE.types.isa.boolean                   ), true
    @eq ( Ωit_235 = -> TMP_types.isa.function  INTERTYPE.types.isa.optional.boolean          ), true
    @eq ( Ωit_236 = -> TMP_types.isa.function  INTERTYPE.types.validate.boolean              ), true
    @eq ( Ωit_237 = -> TMP_types.isa.function  INTERTYPE.types.validate.optional.boolean     ), true
    @eq ( Ωit_238 = -> TMP_types.isa.object    INTERTYPE.types.create                        ), true
    @eq ( Ωit_239 = -> TMP_types.isa.function  INTERTYPE.types.isa.text                      ), true
    @eq ( Ωit_240 = -> TMP_types.isa.function  INTERTYPE.types.create.text                   ), true
    @eq ( Ωit_241 = -> TMP_types.isa.object    INTERTYPE.types.declarations                  ), true
    @eq ( Ωit_242 = -> TMP_types.isa.object    INTERTYPE.types.declarations.text             ), true
    #.........................................................................................................
    # @eq ( Ωit_243 = -> INTERTYPE.types.isa.name           ), 'isa'
    # @eq ( Ωit_244 = -> INTERTYPE.types.evaluate.name      ), 'evaluate'
    # @eq ( Ωit_245 = -> INTERTYPE.types.validate.name      ), 'validate'
    # @eq ( Ωit_246 = -> INTERTYPE.types.create.name        ), 'create'
    @eq ( Ωit_247 = -> INTERTYPE.types.declare.name       ), 'declare'
    @eq ( Ωit_248 = -> INTERTYPE.types.type_of.name       ), 'type_of'
    #.........................................................................................................
    do =>
      for type of INTERTYPE.testing._isa
        continue if Reflect.has INTERTYPE.declarations, type
        @fail 'Ωit_249', "type known from `INTERTYPE.testing._isa` but missing from `INTERTYPE.default_declarations`: #{rpr type}"
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  basic_functionality_using_types_object: ->
    INTERTYPE     = require '../../../apps/intertype'
    types         = new INTERTYPE.Intertype_minimal sample_declarations
    @eq ( Ωit_250 = -> types.isa.boolean           false               ), true
    @eq ( Ωit_251 = -> types.isa.boolean           true                ), true
    @eq ( Ωit_252 = -> types.isa.boolean           null                ), false
    @eq ( Ωit_253 = -> types.isa.boolean           1                   ), false
    @eq ( Ωit_254 = -> types.isa.optional.boolean  false               ), true
    @eq ( Ωit_255 = -> types.isa.optional.boolean  true                ), true
    @eq ( Ωit_256 = -> types.isa.optional.boolean  null                ), true
    @eq ( Ωit_257 = -> types.isa.optional.boolean  1                   ), false
    #.........................................................................................................
    @eq ( Ωit_258 = -> types.validate.boolean               false      ), false
    @eq ( Ωit_259 = -> types.validate.boolean               true       ), true
    @eq ( Ωit_260 = -> types.validate.optional.boolean      true       ), true
    @eq ( Ωit_261 = -> types.validate.optional.boolean      false      ), false
    @eq ( Ωit_262 = -> types.validate.optional.boolean      undefined  ), undefined
    @eq ( Ωit_263 = -> types.validate.optional.boolean      null       ), null
    @throws ( Ωit_264 = -> types.validate.boolean           1 ), /expected a boolean/
    @throws ( Ωit_265 = -> types.validate.optional.boolean  1 ), /expected an optional boolean/
    #.........................................................................................................
    @eq ( Ωit_266 = -> types.type_of null            ), 'null'
    @eq ( Ωit_267 = -> types.type_of undefined       ), 'undefined'
    @eq ( Ωit_268 = -> types.type_of false           ), 'boolean'
    @eq ( Ωit_269 = -> types.type_of Symbol 'p'      ), 'symbol'
    @eq ( Ωit_270 = -> types.type_of {}              ), 'object'
    @eq ( Ωit_271 = -> types.type_of NaN             ), 'unknown'
    @eq ( Ωit_272 = -> types.type_of +Infinity       ), 'unknown'
    @eq ( Ωit_273 = -> types.type_of -Infinity       ), 'unknown'
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
    @eq ( Ωit_274 = -> isa.boolean           false               ), true
    @eq ( Ωit_275 = -> isa.boolean           true                ), true
    @eq ( Ωit_276 = -> isa.boolean           null                ), false
    @eq ( Ωit_277 = -> isa.boolean           1                   ), false
    @eq ( Ωit_278 = -> isa.unknown           1                   ), false
    @eq ( Ωit_279 = -> isa.unknown           Infinity            ), true
    @eq ( Ωit_280 = -> isa.optional.boolean  false               ), true
    @eq ( Ωit_281 = -> isa.optional.boolean  true                ), true
    @eq ( Ωit_282 = -> isa.optional.boolean  null                ), true
    @eq ( Ωit_283 = -> isa.optional.boolean  1                   ), false
    @eq ( Ωit_284 = -> isa.optional.unknown  1                   ), false
    @eq ( Ωit_285 = -> isa.optional.unknown  Infinity            ), true
    @eq ( Ωit_286 = -> isa.optional.unknown  undefined           ), true
    @eq ( Ωit_287 = -> isa.optional.unknown  undefined           ), true
    #.........................................................................................................
    @eq ( Ωit_288 = -> validate.boolean               false      ), false
    @eq ( Ωit_289 = -> validate.boolean               true       ), true
    @eq ( Ωit_290 = -> validate.optional.boolean      true       ), true
    @eq ( Ωit_291 = -> validate.optional.boolean      false      ), false
    @eq ( Ωit_292 = -> validate.optional.boolean      undefined  ), undefined
    @eq ( Ωit_293 = -> validate.optional.boolean      null       ), null
    @throws ( Ωit_294 = -> validate.boolean           1  ), /expected a boolean/
    @throws ( Ωit_295 = -> validate.optional.boolean  1  ), /expected an optional boolean/
    #.........................................................................................................
    @eq ( Ωit_296 = -> type_of null            ), 'null'
    @eq ( Ωit_297 = -> type_of undefined       ), 'undefined'
    @eq ( Ωit_298 = -> type_of false           ), 'boolean'
    @eq ( Ωit_299 = -> type_of Symbol 'p'      ), 'symbol'
    @eq ( Ωit_300 = -> type_of {}              ), 'object'
    @eq ( Ωit_301 = -> type_of NaN             ), 'unknown'
    @eq ( Ωit_302 = -> type_of +Infinity       ), 'unknown'
    @eq ( Ωit_303 = -> type_of -Infinity       ), 'unknown'
    #.........................................................................................................
    @eq ( Ωit_304 = -> isa.asyncfunction.name               ), 'isa.asyncfunction'
    @eq ( Ωit_305 = -> isa.optional.asyncfunction.name      ), 'isa.optional.asyncfunction'
    @eq ( Ωit_306 = -> validate.asyncfunction.name          ), 'validate.asyncfunction'
    @eq ( Ωit_307 = -> validate.optional.asyncfunction.name ), 'validate.optional.asyncfunction'
    #.........................................................................................................
    @throws ( Ωit_308 = -> isa.float 3, 4 ), /method 'isa.float' expects 1 arguments, got 2/
    @throws ( Ωit_309 = -> isa.float()    ), /method 'isa.float' expects 1 arguments, got 0/
    return null

  #-----------------------------------------------------------------------------------------------------------
  methods_check_arity: ->
    INTERTYPE     = require '../../../apps/intertype'
    { isa
      validate
      type_of   } = new INTERTYPE.Intertype_minimal sample_declarations
    #.........................................................................................................
    @throws ( Ωit_310 = -> isa.float 3, 4               ), /method 'isa.float' expects 1 arguments, got 2/
    @throws ( Ωit_311 = -> isa.float()                  ), /method 'isa.float' expects 1 arguments, got 0/
    @throws ( Ωit_312 = -> isa.optional.float 3, 4      ), /method 'isa.optional.float' expects 1 arguments, got 2/
    @throws ( Ωit_313 = -> isa.optional.float()         ), /method 'isa.optional.float' expects 1 arguments, got 0/
    @throws ( Ωit_314 = -> validate.float 3, 4          ), /method 'validate.float' expects 1 arguments, got 2/
    @throws ( Ωit_315 = -> validate.float()             ), /method 'validate.float' expects 1 arguments, got 0/
    @throws ( Ωit_316 = -> validate.optional.float 3, 4 ), /method 'validate.optional.float' expects 1 arguments, got 2/
    @throws ( Ωit_317 = -> validate.optional.float()    ), /method 'validate.optional.float' expects 1 arguments, got 0/
    @throws ( Ωit_318 = -> type_of 3, 4                 ), /expected 1 arguments, got 2/
    @throws ( Ωit_319 = -> type_of()                    ), /expected 1 arguments, got 0/
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
    @eq ( Ωit_320 = -> isa.boolean                     boolean                 ), true
    @eq ( Ωit_321 = -> isa.function                    $function               ), true
    @eq ( Ωit_322 = -> isa.asyncfunction               asyncfunction           ), true
    @eq ( Ωit_323 = -> isa.generatorfunction           generatorfunction       ), true
    @eq ( Ωit_324 = -> isa.asyncgeneratorfunction      asyncgeneratorfunction  ), true
    @eq ( Ωit_325 = -> isa.asyncgenerator              asyncgenerator          ), true
    @eq ( Ωit_326 = -> isa.generator                   generator               ), true
    @eq ( Ωit_327 = -> isa.symbol                      symbol                  ), true
    #.........................................................................................................
    @eq ( Ωit_328 = -> validate.boolean                boolean                 ), boolean
    @eq ( Ωit_329 = -> validate.function               $function               ), $function
    @eq ( Ωit_330 = -> validate.asyncfunction          asyncfunction           ), asyncfunction
    @eq ( Ωit_331 = -> validate.generatorfunction      generatorfunction       ), generatorfunction
    @eq ( Ωit_332 = -> validate.asyncgeneratorfunction asyncgeneratorfunction  ), asyncgeneratorfunction
    @eq ( Ωit_333 = -> validate.asyncgenerator         asyncgenerator          ), asyncgenerator
    @eq ( Ωit_334 = -> validate.generator              generator               ), generator
    @eq ( Ωit_335 = -> validate.symbol                 symbol                  ), symbol
    #.........................................................................................................
    @eq ( Ωit_336 = -> type_of boolean                                         ), 'boolean'
    @eq ( Ωit_337 = -> type_of $function                                       ), 'function'
    @eq ( Ωit_338 = -> type_of asyncfunction                                   ), 'asyncfunction'
    @eq ( Ωit_339 = -> type_of generatorfunction                               ), 'generatorfunction'
    @eq ( Ωit_340 = -> type_of asyncgeneratorfunction                          ), 'asyncgeneratorfunction'
    @eq ( Ωit_341 = -> type_of asyncgenerator                                  ), 'asyncgenerator'
    @eq ( Ωit_342 = -> type_of generator                                       ), 'generator'
    @eq ( Ωit_343 = -> type_of symbol                                          ), 'symbol'
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  throw_instructive_error_on_missing_type: ->
    INTERTYPE     = require '../../../apps/intertype'
    { isa
      validate
      type_of   } = new INTERTYPE.Intertype()
    #.........................................................................................................
    @throws ( Ωit_344 = -> isa.quux                    ), /unknown type 'quux'/
    @throws ( Ωit_345 = -> isa.quux()                  ), /unknown type 'quux'/
    @throws ( Ωit_346 = -> isa.quux 3                  ), /unknown type 'quux'/
    @throws ( Ωit_347 = -> isa.quux 3, 4               ), /unknown type 'quux'/
    @throws ( Ωit_348 = -> isa.optional.quux           ), /unknown type 'quux'/
    @throws ( Ωit_349 = -> isa.optional.quux()         ), /unknown type 'quux'/
    @throws ( Ωit_350 = -> isa.optional.quux 3         ), /unknown type 'quux'/
    @throws ( Ωit_351 = -> isa.optional.quux 3, 4      ), /unknown type 'quux'/
    @throws ( Ωit_352 = -> validate.quux               ), /unknown type 'quux'/
    @throws ( Ωit_353 = -> validate.quux()             ), /unknown type 'quux'/
    @throws ( Ωit_354 = -> validate.quux 3             ), /unknown type 'quux'/
    @throws ( Ωit_355 = -> validate.quux 3, 4          ), /unknown type 'quux'/
    @throws ( Ωit_356 = -> validate.optional.quux      ), /unknown type 'quux'/
    @throws ( Ωit_357 = -> validate.optional.quux()    ), /unknown type 'quux'/
    @throws ( Ωit_358 = -> validate.optional.quux 3    ), /unknown type 'quux'/
    @throws ( Ωit_359 = -> validate.optional.quux 3, 4 ), /unknown type 'quux'/
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  throw_instructive_error_when_optional_is_declared: ->
    INTERTYPE     = require '../../../apps/intertype'
    @throws ( Ωit_360 = -> new INTERTYPE.Intertype_minimal { optional: ( ( x ) -> true ), } ), /not allowed to re-declare type 'optional'/
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  throw_instructive_error_when_wrong_type_of_isa_test_declared: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    @throws ( Ωit_361 = -> new Intertype { foo: ( -> ), }                      ), /expected function with 1 parameters, got one with 0/
    @throws ( Ωit_362 = -> new Intertype { foo: ( ( a, b ) -> ), }             ), /expected function with 1 parameters, got one with 2/
    @throws ( Ωit_363 = -> new Intertype { foo: true, }                        ), /expected type name, method, or object to indicate test method, got a boolean/
    @throws ( Ωit_364 = -> new Intertype { foo: undefined, }                   ), /expected type name, method, or object to indicate test method, got a undefined/
    @throws ( Ωit_365 = -> new Intertype { foo: null, }                        ), /expected type name, method, or object to indicate test method, got a null/
    @throws ( Ωit_366 = -> new Intertype { foo: {}, }                          ), /expected type name, method, or object to indicate test method, got a undefined/
    @throws ( Ωit_367 = -> new Intertype { foo: { test: null, }, }             ), /expected type name, method, or object to indicate test method, got a null/
    @throws ( Ωit_368 = -> new Intertype { foo: { test: false, }, }            ), /expected type name, method, or object to indicate test method, got a boolean/
    @throws ( Ωit_369 = -> new Intertype { foo: { test: ( ( a, b ) -> ), }, }  ), /expected function with 1 parameters, got one with 2/
    @throws ( Ωit_370 = -> new Intertype { foo: 'quux', }                      ), /unknown type 'quux'/
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
      @eq ( Ωit_371 = -> TMP_types.isa.function types.isa.integer  ), true
      @eq ( Ωit_372 = -> types.isa.integer.length                  ), 1
      @eq ( Ωit_373 = -> types.isa.integer 123                     ), true
      @eq ( Ωit_374 = -> types.isa.integer 123.456                 ), false
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
      @throws ( Ωit_375 = -> new Intertype_minimal declarations ), /expected a function for `create` entry of type 'integer', got a asyncfunction/
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
      @throws ( Ωit_376 = -> new Intertype_minimal declarations ), /template method for type 'foolist' has arity 1 but must be nullary/
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  intertype_knows_its_base_types: ->
    { isa } = require '../../../apps/intertype'
    #.........................................................................................................
    @eq ( Ωit_377 = -> isa.basetype 'optional'   ), false
    @eq ( Ωit_378 = -> isa.basetype 'anything'   ), true
    @eq ( Ωit_379 = -> isa.basetype 'nothing'    ), true
    @eq ( Ωit_380 = -> isa.basetype 'something'  ), true
    @eq ( Ωit_381 = -> isa.basetype 'null'       ), true
    @eq ( Ωit_382 = -> isa.basetype 'undefined'  ), true
    @eq ( Ωit_383 = -> isa.basetype 'unknown'    ), true
    @eq ( Ωit_384 = -> isa.basetype 'integer'    ), false
    @eq ( Ωit_385 = -> isa.basetype 'float'      ), false
    @eq ( Ωit_386 = -> isa.basetype 'basetype'   ), false
    @eq ( Ωit_387 = -> isa.basetype 'quux'       ), false
    @eq ( Ωit_388 = -> isa.basetype 'toString'   ), false
    @eq ( Ωit_389 = -> isa.basetype null         ), false
    @eq ( Ωit_390 = -> isa.basetype undefined    ), false
    @eq ( Ωit_391 = -> isa.basetype 4            ), false
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  disallow_licensed_overrides: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      types         = new Intertype()
      @eq ( Ωit_392 = -> types.isa.float 4 ), true
      #.......................................................................................................
      overrides     =
        float:
          test:       ( x ) -> x is 'float'
      @throws ( Ωit_393 = -> types.declare overrides ), /not allowed to re-declare type 'float'/
      #.......................................................................................................
      ### pre-existing declaration remains valid: ###
      @eq ( Ωit_394 = -> types.isa.float 4       ), true
      @eq ( Ωit_395 = -> types.isa.float 'float' ), false
      return null
    #.........................................................................................................
    do =>
      types         = new Intertype()
      @eq ( Ωit_396 = -> types.isa.float 4 ), true
      #.......................................................................................................
      overrides     =
        float:
          override:   true
          test:       ( x ) -> x is 'float'
      @throws ( Ωit_397 = -> types.declare overrides ), /not allowed to re-declare type 'float'/
      return null
    #.........................................................................................................
    do =>
      types         = new Intertype()
      @eq ( Ωit_398 = -> types.isa.float 4 ), true
      #.......................................................................................................
      overrides     =
        anything:
          override:   true
          test:       ( x ) -> true
      @throws ( Ωit_399 = -> types.declare overrides ), /not allowed to re-declare basetype 'anything'/
      #.......................................................................................................
      ### pre-existing declaration remains valid: ###
      @eq ( Ωit_400 = -> types.isa.anything 4       ), true
      @eq ( Ωit_401 = -> types.isa.anything 'float' ), true
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
      @eq ( Ωit_402 = -> TMP_types.isa.object types.declarations       ), true
      @eq ( Ωit_403 = -> TMP_types.isa.object types.declarations.float ), true
      @eq ( Ωit_404 = -> TMP_types.isa.object types.declarations.text  ), true
      #.......................................................................................................
      @throws ( Ωit_405 = -> types.create.boolean() ), /type declaration of 'boolean' has no `create` and no `template` entries, cannot be created/
      @throws ( Ωit_406 = -> types.create.text 'foo' ), /expected 0 arguments, got 1/
      #.......................................................................................................
      @eq ( Ωit_407 = -> types.create.text()         ), ''
      @eq ( Ωit_408 = -> types.create.integer()      ), 0
      @eq ( Ωit_409 = -> types.create.float()        ), 0
      @eq ( Ωit_410 = -> types.create.float '123.45' ), 123.45
      @throws ( Ωit_411 = -> types.create.float '***' ), /these arguments are not suitable for `create.float\(\)`: '\*\*\*'/
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
      @eq ( Ωit_412 = -> create.quantity()    ), { q: 0, u: 'u', }
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
      @eq ( Ωit_413 = -> create.quantity()                         ), { q: 0, u: 'u', }
      @eq ( Ωit_414 = -> create.quantity { q: 123, }               ), { q: 123, u: 'u', }
      @eq ( Ωit_415 = -> create.quantity { u: 'kg', }              ), { q: 0, u: 'kg', }
      @eq ( Ωit_416 = -> create.quantity { u: 'kg', foo: 'bar', }  ), { q: 0, u: 'kg', foo: 'bar', }
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
      @eq ( Ωit_417 = -> create.float()         ), 0
      @eq ( Ωit_418 = -> create.boolean()       ), false
      @eq ( Ωit_419 = -> create.object()        ), {}
      @eq ( Ωit_420 = -> create.float()         ), 0
      @eq ( Ωit_421 = -> create.infinity()      ), Infinity
      @eq ( Ωit_422 = -> create.text()          ), ''
      @eq ( Ωit_423 = -> create.list()          ), []
      @eq ( Ωit_424 = -> create.regex()         ), new RegExp()
      @eq ( Ωit_425 = -> type_of create.function()      ), 'function'
      @eq ( Ωit_426 = -> type_of create.asyncfunction() ), 'asyncfunction'
      @eq ( Ωit_427 = -> type_of create.symbol()        ), 'symbol'
      @throws ( Ωit_428 = -> create.basetype() ), /type declaration of 'basetype' has no `create` and no `template` entries, cannot be created/
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
      @eq ( Ωit_429 = -> create.quantity()                          ), { q: 0, u: 'u', }
      @eq ( Ωit_430 = -> isa.quantity { q: 9, }                     ), false
      @eq ( Ωit_431 = -> type_of declarations.quantity.sub_tests.q  ), 'function'
      @eq ( Ωit_432 = -> type_of declarations.quantity.sub_tests.u  ), 'function'
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
      @eq ( Ωit_433 = -> create.foo() ), { foo: { bar: 123, } }
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
      @eq ( Ωit_434 = -> type_of declarations.quantity.test ), 'function'
      debug '^342342^', declarations.quantity
      @eq ( Ωit_435 = -> type_of declarations.quantity.sub_tests.q ), 'function'
      @eq ( Ωit_436 = -> type_of declarations.quantity.sub_tests.u ), 'function'
      @eq ( Ωit_437 = -> isa.quantity { q: 987, u: 's', } ), true
      @eq ( Ωit_438 = -> isa.quantity { q: 987, } ), false
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  intertype_minimal_has_only_base_types: ->
    { Intertype_minimal } = require '../../../apps/intertype'
    types = new Intertype_minimal()
    @eq ( Ωit_439 = -> ( Object.keys types.declarations ).sort() ), [ 'anything', 'nothing', 'null', 'optional', 'something', 'undefined', 'unknown' ]
    types.declare { z: ( ( x ) -> ), }
    @eq ( Ωit_440 = -> ( Object.keys types.declarations ).sort() ), [ 'anything', 'nothing', 'null', 'optional', 'something', 'undefined', 'unknown', 'z' ]
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  can_use_type_name_for_test: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      types = new Intertype()
      @throws ( Ωit_441 = -> types.declare { z: 'quux', } ), /unknown type 'quux'/
      types.declare { z: 'float', }
      @eq ( Ωit_442 = -> types.isa.z 12 ), true
      @eq ( Ωit_443 = -> types.isa.float.name                ), 'isa.float'
      @eq ( Ωit_444 = -> types.declarations.float.type       ), 'float'
      @eq ( Ωit_445 = -> types.declarations.float.test.name  ), 'float'
      @eq ( Ωit_446 = -> types.isa.z.name                    ), 'isa.z'
      @eq ( Ωit_447 = -> types.declarations.z.type           ), 'z'
      @eq ( Ωit_448 = -> types.declarations.z.test.name      ), 'z' # ?
    #.........................................................................................................
    do =>
      types = new Intertype()
      @throws ( Ωit_449 = -> types.declare { z: { test: 'quux', }, } ), /unknown type 'quux'/
      types.declare { z: { test: 'float', }, }
      @eq ( Ωit_450 = -> types.isa.z 12 ), true
      @eq ( Ωit_451 = -> types.isa.float.name                ), 'isa.float'
      @eq ( Ωit_452 = -> types.declarations.float.type       ), 'float'
      @eq ( Ωit_453 = -> types.declarations.float.test.name  ), 'float'
      @eq ( Ωit_454 = -> types.isa.z.name                    ), 'isa.z'
      @eq ( Ωit_455 = -> types.declarations.z.type           ), 'z'
      @eq ( Ωit_456 = -> types.declarations.z.test.name      ), 'z'
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  resolve_dotted_type: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      types = new Intertype()
      @eq ( Ωit_457 = -> Reflect.has types.declarations, 'foo'           ), false
      types.declare { foo: 'object', }
      @eq ( Ωit_458 = -> Reflect.has types.declarations, 'foo'           ), true
      @eq ( Ωit_459 = -> Reflect.has types.declarations, 'foo.bar'       ), false
      types.declare { 'foo.bar': 'object', }
      @eq ( Ωit_460 = -> Reflect.has types.declarations, 'foo.bar'       ), true
      @eq ( Ωit_461 = -> Reflect.has types.declarations, 'foo.bar.baz'   ), false
      types.declare { 'foo.bar.baz': 'float', }
      @eq ( Ωit_462 = -> Reflect.has types.declarations, 'foo.bar.baz'   ), true
      @eq ( Ωit_463 = -> types.isa.foo.bar.baz null                      ), false
      @eq ( Ωit_464 = -> types.isa.foo.bar.baz 4                         ), true
      @eq ( Ωit_465 = -> types.isa.foo.bar.baz +Infinity                 ), false
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
      @eq ( Ωit_466 = -> types.isa[ 'quantity.q' ] ), types.declarations[ 'quantity' ].sub_tests[ 'q' ]
      @eq ( Ωit_467 = -> types.isa[ 'quantity.q' ] ), types.isa.quantity.q
      # debug '^409-1^', types.declarations
      @eq ( Ωit_468 = -> types.isa.quantity {}                 ), false
      @eq ( Ωit_469 = -> types.isa.quantity { q: {}, }         ), false
      @eq ( Ωit_470 = -> types.isa.quantity { q: 3, }          ), false
      @eq ( Ωit_471 = -> types.isa.quantity { q: 3, u: 'm', }  ), true
      @eq ( Ωit_472 = -> types.isa.quantity.q 3                ), true
      @eq ( Ωit_473 = -> types.isa.quantity.q 3.1              ), true
      @eq ( Ωit_474 = -> types.isa.quantity.q '3.1'            ), false
      @eq ( Ωit_475 = -> types.isa.quantity.u 'm'              ), true
      @eq ( Ωit_476 = -> types.isa.quantity.u null             ), false
      @eq ( Ωit_477 = -> types.isa.quantity.u 3                ), false
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
      @eq ( Ωit_478 = -> types.isa.person.address.city.name 'P'  ), true
      @eq ( Ωit_479 = -> types.isa.person.address.city.name 1234 ), false
      @eq ( Ωit_480 = -> types.isa.person 1234 ), false
      @eq ( Ωit_481 = -> types.isa.person { name: 'Bob', } ), false
      @eq ( Ωit_482 = -> types.isa.person { name: 'Bob', address: {}, } ), false
      @eq ( Ωit_483 = -> types.isa.person { name: 'Bob', address: { city: {}, }, } ), false
      @eq ( Ωit_484 = -> types.isa.person { name: 'Bob', address: { city: { name: 'P', }, }, } ), false
      @eq ( Ωit_485 = -> types.isa.person { name: 'Bob', address: { city: { name: 'P', postcode: 'SO36', }, }, } ), true
      @eq ( Ωit_486 = -> types.isa.person.address.city.name     'P'                                ), true
      @eq ( Ωit_487 = -> types.isa.person.address.city.postcode 'SO36'                             ), true
      @eq ( Ωit_488 = -> types.isa.person.address.city {         name: 'P', postcode: 'SO36', }    ), true
      @eq ( Ωit_489 = -> types.isa.person.address      { city: { name: 'P', postcode: 'SO36', }, } ), true
      help '^322-1^', ( { "#{k}": f.name } for k, f of types.declarations[ 'person'               ].sub_tests )
      help '^322-2^', ( { "#{k}": f.name } for k, f of types.declarations[ 'person.address'       ].sub_tests )
      help '^322-3^', ( { "#{k}": f.name } for k, f of types.declarations[ 'person.address.city'  ].sub_tests )
      @eq ( Ωit_490 = -> Object.keys types.declarations[ 'person'               ].sub_tests ), [ 'name', 'address', ]
      @eq ( Ωit_491 = -> Object.keys types.declarations[ 'person.address'       ].sub_tests ), [ 'city', ]
      @eq ( Ωit_492 = -> Object.keys types.declarations[ 'person.address.city'  ].sub_tests ), [ 'name', 'postcode', ]
      @eq ( Ωit_493 = -> types.declarations[ 'person' ].sub_tests isnt types.declarations[ 'person.address'      ].sub_tests ), true
      @eq ( Ωit_494 = -> types.declarations[ 'person' ].sub_tests isnt types.declarations[ 'person.address.city' ].sub_tests ), true
      return null
    #.........................................................................................................
    do =>
      types = new Intertype()
      types.declare { 'foo':      'float', }
      types.declare { 'foo.bar':  'text',   }
      do =>
        d = 3
        # d.bar = '?' # Cannot create property in strict mode, so can never satisfy test
        @eq ( Ωit_495 = -> types.isa.foo d ), false
        return null
      do =>
        d = new Number 3
        d.bar = '?'
        @eq ( Ωit_496 = -> d.bar ), '?'
        # still won't work b/c `float` doesn't accept objects (which is a good thing):
        @eq ( Ωit_497 = -> types.isa.foo d ), false
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
      @eq ( Ωit_498 = -> types.isa.foo {} ), false
      @eq ( Ωit_499 = -> types.isa.foo { bind: 1, apply: 2, call: 3, name: 4, length: 5, } ), true
      return null
    #.........................................................................................................
    do =>
      types = new Intertype()
      types.declare { 'foo':        'object',           }
      types.declare { 'foo.text':   ( ( x ) -> x is 1 ) }
      types.declare { 'foo.float':  ( ( x ) -> x is 2 ) }
      @eq ( Ωit_500 = -> types.isa.foo {} ), false
      @eq ( Ωit_501 = -> types.isa.foo { text: 1, float: 2, } ), true
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
      @eq ( Ωit_502 = -> types.isa.person.address.city {} ), false
      @eq ( Ωit_503 = -> types.isa.person.address.city null ), false
      @eq ( Ωit_504 = -> types.isa.person.address.city { name: 'P', postcode: 'SO36', } ), true
      @eq ( Ωit_505 = -> types.isa.mycity {} ), false
      @eq ( Ωit_506 = -> types.isa.mycity null ), false
      @eq ( Ωit_507 = -> types.isa.mycity { name: 'P', postcode: 'SO36', } ), true
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
      @eq ( Ωit_508 = -> types.isa.person.address.city {} ), false
      @eq ( Ωit_509 = -> types.isa.person.address.city null ), false
      @eq ( Ωit_510 = -> types.isa.person.address.city { name: 'P', postcode: 'SO36', } ), true
      @eq ( Ωit_511 = -> types.isa.mycity {} ), false
      @eq ( Ωit_512 = -> types.isa.mycity null ), false
      @eq ( Ωit_513 = -> types.isa.mycity { name: 'P', postcode: 'SO36', } ), true
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
      @eq ( Ωit_514 = -> types.isa.person.address.city {} ), false
      @eq ( Ωit_515 = -> types.isa.person.address.city null ), false
      @eq ( Ωit_516 = -> types.isa.person.address.city { name: 'P', postcode: 'SO36', } ), true
      @eq ( Ωit_517 = -> types.isa.optional.person.address.city {} ), false
      @eq ( Ωit_518 = -> types.isa.optional.person.address.city null ), true
      @eq ( Ωit_519 = -> types.isa.optional.person.address.city { name: 'P', postcode: 'SO36', } ), true
      @eq ( Ωit_520 = -> types.isa.mycity {} ), false
      @eq ( Ωit_521 = -> types.isa.mycity null ), true
      @eq ( Ωit_522 = -> types.isa.mycity { name: 'P', postcode: 'SO36', } ), true
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
      @throws ( Ωit_523 = -> types.declare { 'optional.d':    ( ( x ) -> ), } ), /illegal use of 'optional' in declaration of type 'optional.d'/
      @throws ( Ωit_524 = -> types.declare { 'anything.d':    ( ( x ) -> ), } ), /illegal use of basetype 'anything' in declaration of type 'anything.d'/
      @throws ( Ωit_525 = -> types.declare { 'nothing.d':     ( ( x ) -> ), } ), /illegal use of basetype 'nothing' in declaration of type 'nothing.d'/
      @throws ( Ωit_526 = -> types.declare { 'something.d':   ( ( x ) -> ), } ), /illegal use of basetype 'something' in declaration of type 'something.d'/
      @throws ( Ωit_527 = -> types.declare { 'null.d':        ( ( x ) -> ), } ), /illegal use of basetype 'null' in declaration of type 'null.d'/
      @throws ( Ωit_528 = -> types.declare { 'undefined.d':   ( ( x ) -> ), } ), /illegal use of basetype 'undefined' in declaration of type 'undefined.d'/
      @throws ( Ωit_529 = -> types.declare { 'unknown.d':     ( ( x ) -> ), } ), /illegal use of basetype 'unknown' in declaration of type 'unknown.d'/
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
      @eq ( Ωit_530 = -> __type_of null, _isa, null          ), 'null'
      @eq ( Ωit_531 = -> __type_of null, _isa, undefined     ), 'undefined'
      @eq ( Ωit_532 = -> __type_of null, _isa, 4             ), 'float'
      @eq ( Ωit_533 = -> __type_of null, _isa, ->            ), 'function'
      @eq ( Ωit_534 = -> __type_of null, _isa, -> await null ), 'asyncfunction'
      @eq ( Ωit_535 = -> __type_of null, _isa, {}            ), 'object'
      @eq ( Ωit_536 = -> __type_of null, _isa, []            ), 'list'
      @eq ( Ωit_537 = -> __type_of null, _isa, +Infinity     ), 'infinity'
      @eq ( Ωit_538 = -> __type_of null, _isa, -Infinity     ), 'infinity'
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
      @eq ( Ωit_539 = -> result                                   ), probe
      @eq ( Ωit_540 = -> result.bar         is probe.bar          ), false
      @eq ( Ωit_541 = -> result.bar.baz     is probe.bar.baz      ), false
      @eq ( Ωit_542 = -> result.bar.baz.sub is probe.bar.baz.sub  ), false
      @eq ( Ωit_543 = -> result.bar.baz.sub is sub                ), false
      @eq ( Ωit_544 = -> probe.bar.baz.sub  is sub                ), true
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
      @eq ( Ωit_545 = -> result                                   ), probe
      @eq ( Ωit_546 = -> result.bar         is probe.bar          ), false
      @eq ( Ωit_547 = -> result.bar.baz     is probe.bar.baz      ), false
      @eq ( Ωit_548 = -> result.bar.baz.sub is probe.bar.baz.sub  ), false
      @eq ( Ωit_549 = -> result.bar.baz.sub is sub                ), false
      @eq ( Ωit_550 = -> probe.bar.baz.sub  is sub                ), true
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
      @throws ( Ωit_551 = -> validate.person null                        ), /expected a person, got a null/
      @throws ( Ωit_552 = -> validate.person.address null                ), /expected a person.address, got a null/
      @throws ( Ωit_553 = -> validate.person.address.city null           ), /expected a person.address.city, got a null/
      @throws ( Ωit_554 = -> validate.person.address.city.postcode null  ), /expected a person.address.city.postcode, got a null/
      #.......................................................................................................
      @eq ( Ωit_555 = -> types.isa.person.address.city.postcode 3 ), false
      @throws ( Ωit_556 = -> validate.person.address.city.postcode 3             ), /expected a person.address.city.postcode/
      #.......................................................................................................
      @eq ( Ωit_557 = -> types.isa.person.address.city { name: 'P', } ), false
      @throws ( Ωit_558 = -> validate.person.address.city { name: 'P', }         ), /expected a person.address.city/
      # #.......................................................................................................
      @eq ( Ωit_559 = -> types.isa.person.address.city { postcode: '3421', } ), false
      @throws ( Ωit_560 = -> validate.person.address.city()                      ), /method 'validate.person.address.city' expects 1 arguments, got 0/
      @throws ( Ωit_561 = -> validate.person.address.city null                   ), /expected a person.address.city/
      @throws ( Ωit_562 = -> validate.person.address.city '3421'                 ), /expected a person.address.city/
      @throws ( Ωit_563 = -> validate.person.address.city { postcode: '3421', }  ), /expected a person.address.city/
      #.......................................................................................................
      @eq ( Ωit_564 = -> types.isa.person.address.city { name: 'P', postcode: '3421', } ), true
      @eq ( Ωit_565 = -> validate.person.address.city { name: 'P', postcode: '3421', } ), { name: 'P', postcode: '3421', }
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
      @throws ( Ωit_566 = -> evaluate.optional 1         ), /`optional` is not a legal type for `evaluate` methods/
      @throws ( Ωit_567 = -> evaluate.optional.person 1  ), /`optional` is not a legal type for `evaluate` methods/
      #.......................................................................................................
      @eq ( Ωit_568 = -> isa.person       { name: 'Alice', address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), true
      @eq ( Ωit_569 = -> evaluate.person  { name: 'Alice', address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), { person: true,  'person.name': true, 'person.address': true, 'person.address.city': true, 'person.address.city.name': true, 'person.address.city.postcode': true, }
      #.......................................................................................................
      @eq ( Ωit_570 = -> isa.person       { name: 'Alice', address: { city: { name: 'Atown', postcode: 12345678 } } } ), false
      @eq ( Ωit_571 = -> evaluate.person  { name: 'Alice', address: { city: { name: 'Atown', postcode: 12345678 } } } ), { person: false,  'person.name': true, 'person.address': false, 'person.address.city': false, 'person.address.city.name': true, 'person.address.city.postcode': false, }
      #.......................................................................................................
      @eq ( Ωit_572 = -> isa.person       {                address: { city: { name: 'Atown', postcode: 12345678 } } } ), false
      @eq ( Ωit_573 = -> evaluate.person  {                address: { city: { name: 'Atown', postcode: 12345678 } } } ), { person: false,  'person.name': false, 'person.address': false, 'person.address.city': false, 'person.address.city.name': true, 'person.address.city.postcode': false, }
      #.......................................................................................................
      @eq ( Ωit_574 = -> isa.person       {                address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), false
      @eq ( Ωit_575 = -> evaluate.person  {                address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), { person: false, 'person.name': false, 'person.address': true, 'person.address.city': true, 'person.address.city.name': true, 'person.address.city.postcode': true, }
      #.......................................................................................................
      @eq ( Ωit_576 = -> isa.person       null  ), false
      @eq ( Ωit_577 = -> evaluate.person  null  ), { person: false, 'person.name': false, 'person.address': false, 'person.address.city': false, 'person.address.city.name': false, 'person.address.city.postcode': false, }
      #.......................................................................................................
      @eq ( Ωit_578 = -> isa.person       {}    ), false
      @eq ( Ωit_579 = -> evaluate.person  {}    ), { person: false, 'person.name': false, 'person.address': false, 'person.address.city': false, 'person.address.city.name': false, 'person.address.city.postcode': false, }
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
      @eq ( Ωit_580 = -> isa.person                   { name: 'Alice', address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), true
      @eq ( Ωit_581 = -> evaluate.person              { name: 'Alice', address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), { person: true,  'person.name': true, 'person.address': true, 'person.address.city': true, 'person.address.city.name': true, 'person.address.city.postcode': true, }
      @eq ( Ωit_582 = -> Object.keys evaluate.person  { name: 'Alice', address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), [ 'person', 'person.address', 'person.address.city', 'person.address.city.postcode', 'person.address.city.name', 'person.name' ]
      #.......................................................................................................
      @eq ( Ωit_583 = -> isa.person                   {                address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), false
      @eq ( Ωit_584 = -> evaluate.person              {                address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), { person: false, 'person.name': false, 'person.address': true, 'person.address.city': true, 'person.address.city.name': true, 'person.address.city.postcode': true, }
      @eq ( Ωit_585 = -> Object.keys evaluate.person  {                address: { city: { name: 'Atown', postcode: 'VA1234' } } } ), [ 'person', 'person.address', 'person.address.city', 'person.address.city.postcode', 'person.address.city.name', 'person.name' ]
      #.......................................................................................................
      @eq ( Ωit_586 = -> isa.person                   null  ), false
      @eq ( Ωit_587 = -> evaluate.person              null  ), { person: false, 'person.name': false, 'person.address': false, 'person.address.city': false, 'person.address.city.name': false, 'person.address.city.postcode': false, }
      @eq ( Ωit_588 = -> Object.keys evaluate.person  null  ), [ 'person', 'person.address', 'person.address.city', 'person.address.city.postcode', 'person.address.city.name', 'person.name' ]
      #.......................................................................................................
      @eq ( Ωit_589 = -> isa.person                   {}  ), false
      @eq ( Ωit_590 = -> evaluate.person              {}  ), { person: false, 'person.name': false, 'person.address': false, 'person.address.city': false, 'person.address.city.name': false, 'person.address.city.postcode': false, }
      @eq ( Ωit_591 = -> Object.keys evaluate.person  {}  ), [ 'person', 'person.address', 'person.address.city', 'person.address.city.postcode', 'person.address.city.name', 'person.name' ]
      #.......................................................................................................
      @eq ( Ωit_592 = -> isa.person.address                   { city: { name: 'Atown', postcode: 'VA1234' } } ), true
      @eq ( Ωit_593 = -> evaluate.person.address              { city: { name: 'Atown', postcode: 'VA1234' } } ), { 'person.address': true, 'person.address.city': true, 'person.address.city.name': true, 'person.address.city.postcode': true, }
      @eq ( Ωit_594 = -> Object.keys evaluate.person.address  { city: { name: 'Atown', postcode: 'VA1234' } } ), [ 'person.address', 'person.address.city', 'person.address.city.postcode', 'person.address.city.name' ]
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
      @eq ( Ωit_595 = -> isa.generatorfunction walk_prefixes             ), true
      @eq ( Ωit_596 = -> [ ( walk_prefixes 'one'                )..., ]  ), []
      @eq ( Ωit_597 = -> [ ( walk_prefixes 'one.two'            )..., ]  ), [ 'one' ]
      @eq ( Ωit_598 = -> [ ( walk_prefixes 'one.two.three'      )..., ]  ), [ 'one', 'one.two', ]
      @eq ( Ωit_599 = -> [ ( walk_prefixes 'one.two.three.four' )..., ]  ), [ 'one', 'one.two', 'one.two.three', ]
      ### TAINT should not allow empty namers: ###
      @eq ( Ωit_600 = -> [ ( walk_prefixes '.one.two.three'     )..., ]  ), [ '', '.one', '.one.two', ]
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
      @throws ( Ωit_601 = -> types = new Intertype declarations ), /unknown partial type 'foo'/
      return null
    #.........................................................................................................
    do =>
      declarations =
        'quantity':         'object'
        'quantity.q':       'float'
        'quantity.u':       'text'
      types = new Intertype declarations
      @eq ( Ωit_602 = -> types.isa.quantity {}                   ), false
      @eq ( Ωit_603 = -> types.isa.quantity { q: 12, u: 'kg', }  ), true
      @eq ( Ωit_604 = -> types.isa[ 'quantity.q' ] 12            ), true
      @eq ( Ωit_605 = -> types.isa[ 'quantity.u' ] 'kg'          ), true
      @eq ( Ωit_606 = -> types.isa.quantity.q 12                 ), true
      @eq ( Ωit_607 = -> types.isa.quantity.u 'kg'               ), true
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
      @eq ( Ωit_608 = -> isa.empty.list    []          ), true
      @eq ( Ωit_609 = -> isa.empty.list    [ 'A', ]    ), false
      @eq ( Ωit_610 = -> isa.empty.list    4           ), false
      @eq ( Ωit_611 = -> isa.nonempty.list []          ), false
      @eq ( Ωit_612 = -> isa.nonempty.list [ 'A', ]    ), true
      @eq ( Ωit_613 = -> isa.nonempty.list 4           ), false
      @eq ( Ωit_614 = -> isa.empty.text    ''          ), true
      @eq ( Ωit_615 = -> isa.empty.text    'A'         ), false
      @eq ( Ωit_616 = -> isa.empty.text    4           ), false
      @eq ( Ωit_617 = -> isa.nonempty.text ''          ), false
      @eq ( Ωit_618 = -> isa.nonempty.text 'A'         ), true
      @eq ( Ωit_619 = -> isa.nonempty.text 4           ), false
      ### this doesn't make a terrible lot of sense: ###
      @eq ( Ωit_620 = -> isa.empty { list: [], text: '', set: new Set() } ), false
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
      @eq ( Ωit_621 = -> isa.empty.list    []          ), true
      @eq ( Ωit_622 = -> isa.empty.list    [ 'A', ]    ), false
      @eq ( Ωit_623 = -> isa.empty.list    4           ), false
      @eq ( Ωit_624 = -> isa.nonempty.list []          ), false
      @eq ( Ωit_625 = -> isa.nonempty.list [ 'A', ]    ), true
      @eq ( Ωit_626 = -> isa.nonempty.list 4           ), false
      @eq ( Ωit_627 = -> isa.empty.text    ''          ), true
      @eq ( Ωit_628 = -> isa.empty.text    'A'         ), false
      @eq ( Ωit_629 = -> isa.empty.text    4           ), false
      @eq ( Ωit_630 = -> isa.nonempty.text ''          ), false
      @eq ( Ωit_631 = -> isa.nonempty.text 'A'         ), true
      @eq ( Ωit_632 = -> isa.nonempty.text 4           ), false
      #.......................................................................................................
      @eq ( Ωit_633 = -> isa.empty []                  ), true
      @eq ( Ωit_634 = -> isa.empty ''                  ), true
      @eq ( Ωit_635 = -> isa.empty new Set()           ), true
      @eq ( Ωit_636 = -> isa.empty [ 1, ]              ), false
      @eq ( Ωit_637 = -> isa.empty 'A'                 ), false
      @eq ( Ωit_638 = -> isa.empty new Set 'abc'       ), false
      #.......................................................................................................
      @eq ( Ωit_639 = -> validate.empty []                  ), []
      @eq ( Ωit_640 = -> validate.empty ''                  ), ''
      @eq ( Ωit_641 = -> validate.empty new Set()           ), new Set()
      @throws ( Ωit_642 = -> validate.empty [ 1, ]              ), /expected a empty, got a list/
      @throws ( Ωit_643 = -> validate.empty 'A'                 ), /expected a empty, got a text/
      @throws ( Ωit_644 = -> validate.empty new Set 'abc'       ), /expected a empty, got a set/
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
      @eq ( Ωit_645 = -> isa.optional.empty.list    []          ), true
      @eq ( Ωit_646 = -> isa.optional.empty.list    [ 'A', ]    ), false
      @eq ( Ωit_647 = -> isa.optional.empty.list    4           ), false
      @eq ( Ωit_648 = -> isa.optional.nonempty.list []          ), false
      @eq ( Ωit_649 = -> isa.optional.nonempty.list [ 'A', ]    ), true
      @eq ( Ωit_650 = -> isa.optional.nonempty.list 4           ), false
      @eq ( Ωit_651 = -> isa.optional.empty.text    ''          ), true
      @eq ( Ωit_652 = -> isa.optional.empty.text    'A'         ), false
      @eq ( Ωit_653 = -> isa.optional.empty.text    4           ), false
      @eq ( Ωit_654 = -> isa.optional.nonempty.text ''          ), false
      @eq ( Ωit_655 = -> isa.optional.nonempty.text 'A'         ), true
      @eq ( Ωit_656 = -> isa.optional.nonempty.text 4           ), false
      #.......................................................................................................
      @eq ( Ωit_657 = -> isa.optional.empty []                  ), true
      @eq ( Ωit_658 = -> isa.optional.empty ''                  ), true
      @eq ( Ωit_659 = -> isa.optional.empty new Set()           ), true
      @eq ( Ωit_660 = -> isa.optional.empty [ 1, ]              ), false
      @eq ( Ωit_661 = -> isa.optional.empty 'A'                 ), false
      @eq ( Ωit_662 = -> isa.optional.empty new Set 'abc'       ), false
      #.......................................................................................................
      @eq ( Ωit_663 = -> validate.optional.empty []                   ), []
      @eq ( Ωit_664 = -> validate.optional.empty ''                   ), ''
      @eq ( Ωit_665 = -> validate.optional.empty new Set()            ), new Set()
      @eq ( Ωit_666 = -> validate.optional.empty.list  []             ), []
      @eq ( Ωit_667 = -> validate.optional.empty.text  ''             ), ''
      @eq ( Ωit_668 = -> validate.optional.empty.set   new Set()      ), new Set()
      @throws ( Ωit_669 = -> validate.optional.empty [ 1, ]           ), /expected an optional empty, got a list/
      @throws ( Ωit_670 = -> validate.optional.empty 'A'              ), /expected an optional empty, got a text/
      @throws ( Ωit_671 = -> validate.optional.empty new Set 'abc'    ), /expected an optional empty, got a set/
      #.......................................................................................................
      @eq ( Ωit_672 = -> isa.optional.empty []                        ), true
      @eq ( Ωit_673 = -> isa.optional.empty ''                        ), true
      @eq ( Ωit_674 = -> isa.optional.empty new Set()                 ), true
      @eq ( Ωit_675 = -> isa.optional.empty [ 1, ]                    ), false
      @eq ( Ωit_676 = -> isa.optional.empty 'A'                       ), false
      @eq ( Ωit_677 = -> isa.optional.empty new Set 'abc'             ), false
      @eq ( Ωit_678 = -> validate.optional.empty       null           ), null
      @eq ( Ωit_679 = -> validate.optional.empty.list  null           ), null
      @eq ( Ωit_680 = -> validate.optional.empty.text  null           ), null
      @eq ( Ωit_681 = -> validate.optional.empty.set   null           ), null
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
      @eq ( Ωit_682 = -> isa.empty.list    []          ), true
      @eq ( Ωit_683 = -> isa.empty.list    [ 'A', ]    ), false
      @eq ( Ωit_684 = -> isa.empty.list    4           ), false
      @eq ( Ωit_685 = -> isa.nonempty.list []          ), false
      @eq ( Ωit_686 = -> isa.nonempty.list [ 'A', ]    ), true
      @eq ( Ωit_687 = -> isa.nonempty.list 4           ), false
      @eq ( Ωit_688 = -> isa.empty.text    ''          ), true
      @eq ( Ωit_689 = -> isa.empty.text    'A'         ), false
      @eq ( Ωit_690 = -> isa.empty.text    4           ), false
      @eq ( Ωit_691 = -> isa.nonempty.text ''          ), false
      @eq ( Ωit_692 = -> isa.nonempty.text 'A'         ), true
      @eq ( Ωit_693 = -> isa.nonempty.text 4           ), false
      #.......................................................................................................
      @eq ( Ωit_694 = -> isa.empty []                  ), true
      @eq ( Ωit_695 = -> isa.empty ''                  ), true
      @eq ( Ωit_696 = -> isa.empty new Set()           ), true
      @eq ( Ωit_697 = -> isa.empty [ 1, ]              ), false
      @eq ( Ωit_698 = -> isa.empty 'A'                 ), false
      @eq ( Ωit_699 = -> isa.empty new Set 'abc'       ), false
      #.......................................................................................................
      @eq ( Ωit_700 = -> validate.empty []                   ), []
      @eq ( Ωit_701 = -> validate.empty ''                   ), ''
      @eq ( Ωit_702 = -> validate.empty new Set()            ), new Set()
      @eq ( Ωit_703 = -> validate.empty.list  []             ), []
      @eq ( Ωit_704 = -> validate.empty.text  ''             ), ''
      @eq ( Ωit_705 = -> validate.empty.set   new Set()      ), new Set()
      @throws ( Ωit_706 = -> validate.empty [ 1, ]           ), /expected a empty, got a list/
      @throws ( Ωit_707 = -> validate.empty 'A'              ), /expected a empty, got a text/
      @throws ( Ωit_708 = -> validate.empty new Set 'abc'    ), /expected a empty, got a set/
      #.......................................................................................................
      @eq ( Ωit_709 = -> isa.empty []                        ), true
      @eq ( Ωit_710 = -> isa.empty ''                        ), true
      @eq ( Ωit_711 = -> isa.empty new Set()                 ), true
      @eq ( Ωit_712 = -> isa.empty [ 1, ]                    ), false
      @eq ( Ωit_713 = -> isa.empty 'A'                       ), false
      @eq ( Ωit_714 = -> isa.empty new Set 'abc'             ), false
      @throws ( Ωit_715 = -> validate.empty       null           ), /expected a empty, got a null/
      @throws ( Ωit_716 = -> validate.empty.list  null           ), /expected a empty.list, got a null/
      @throws ( Ωit_717 = -> validate.empty.text  null           ), /expected a empty.text, got a null/
      @throws ( Ωit_718 = -> validate.empty.set   null           ), /expected a empty.set, got a null/
      #.......................................................................................................
      @eq ( Ωit_719 = -> isa.optional.empty.list    []          ), true
      @eq ( Ωit_720 = -> isa.optional.empty.list    [ 'A', ]    ), false
      @eq ( Ωit_721 = -> isa.optional.empty.list    4           ), false
      @eq ( Ωit_722 = -> isa.optional.nonempty.list []          ), false
      @eq ( Ωit_723 = -> isa.optional.nonempty.list [ 'A', ]    ), true
      @eq ( Ωit_724 = -> isa.optional.nonempty.list 4           ), false
      @eq ( Ωit_725 = -> isa.optional.empty.text    ''          ), true
      @eq ( Ωit_726 = -> isa.optional.empty.text    'A'         ), false
      @eq ( Ωit_727 = -> isa.optional.empty.text    4           ), false
      @eq ( Ωit_728 = -> isa.optional.nonempty.text ''          ), false
      @eq ( Ωit_729 = -> isa.optional.nonempty.text 'A'         ), true
      @eq ( Ωit_730 = -> isa.optional.nonempty.text 4           ), false
      #.......................................................................................................
      @eq ( Ωit_731 = -> isa.optional.empty []                  ), true
      @eq ( Ωit_732 = -> isa.optional.empty ''                  ), true
      @eq ( Ωit_733 = -> isa.optional.empty new Set()           ), true
      @eq ( Ωit_734 = -> isa.optional.empty [ 1, ]              ), false
      @eq ( Ωit_735 = -> isa.optional.empty 'A'                 ), false
      @eq ( Ωit_736 = -> isa.optional.empty new Set 'abc'       ), false
      #.......................................................................................................
      @eq ( Ωit_737 = -> validate.optional.empty []                   ), []
      @eq ( Ωit_738 = -> validate.optional.empty ''                   ), ''
      @eq ( Ωit_739 = -> validate.optional.empty new Set()            ), new Set()
      @eq ( Ωit_740 = -> validate.optional.empty.list  []             ), []
      @eq ( Ωit_741 = -> validate.optional.empty.text  ''             ), ''
      @eq ( Ωit_742 = -> validate.optional.empty.set   new Set()      ), new Set()
      @throws ( Ωit_743 = -> validate.optional.empty [ 1, ]           ), /expected an optional empty, got a list/
      @throws ( Ωit_744 = -> validate.optional.empty 'A'              ), /expected an optional empty, got a text/
      @throws ( Ωit_745 = -> validate.optional.empty new Set 'abc'    ), /expected an optional empty, got a set/
      #.......................................................................................................
      @eq ( Ωit_746 = -> isa.optional.empty []                        ), true
      @eq ( Ωit_747 = -> isa.optional.empty ''                        ), true
      @eq ( Ωit_748 = -> isa.optional.empty new Set()                 ), true
      @eq ( Ωit_749 = -> isa.optional.empty [ 1, ]                    ), false
      @eq ( Ωit_750 = -> isa.optional.empty 'A'                       ), false
      @eq ( Ωit_751 = -> isa.optional.empty new Set 'abc'             ), false
      @eq ( Ωit_752 = -> validate.optional.empty       null           ), null
      @eq ( Ωit_753 = -> validate.optional.empty.list  null           ), null
      @eq ( Ωit_754 = -> validate.optional.empty.text  null           ), null
      @eq ( Ωit_755 = -> validate.optional.empty.set   null           ), null
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
      @eq ( Ωit_756 = -> isa.empty.list    []                             ), true
      @eq ( Ωit_757 = -> isa.empty.list    [ 'A', ]                       ), false
      @eq ( Ωit_758 = -> isa.empty.list    4                              ), false
      @eq ( Ωit_759 = -> isa.nonempty.list []                             ), false
      @eq ( Ωit_760 = -> isa.nonempty.list [ 'A', ]                       ), true
      @eq ( Ωit_761 = -> isa.nonempty.list 4                              ), false
      @eq ( Ωit_762 = -> isa.empty.text    ''                             ), true
      @eq ( Ωit_763 = -> isa.empty.text    'A'                            ), false
      @eq ( Ωit_764 = -> isa.empty.text    4                              ), false
      @eq ( Ωit_765 = -> isa.nonempty.text ''                             ), false
      @eq ( Ωit_766 = -> isa.nonempty.text 'A'                            ), true
      @eq ( Ωit_767 = -> isa.nonempty.text 4                              ), false
      @eq ( Ωit_768 = -> isa.empty { list: [], text: '', set: new Set() } ), false
      #.......................................................................................................
      @eq ( Ωit_769 = -> isa.empty []                                     ), true
      @eq ( Ωit_770 = -> isa.empty ''                                     ), true
      @eq ( Ωit_771 = -> isa.empty new Set()                              ), true
      @eq ( Ωit_772 = -> isa.empty /d/                                    ), false
      @eq ( Ωit_773 = -> isa.empty [ 1, ]                                 ), false
      @eq ( Ωit_774 = -> isa.empty 'A'                                    ), false
      @eq ( Ωit_775 = -> isa.empty new Set 'abc'                          ), false
      #.......................................................................................................
      @eq ( Ωit_776 = -> validate.empty []                                ), []
      @eq ( Ωit_777 = -> validate.empty ''                                ), ''
      @eq ( Ωit_778 = -> validate.empty new Set()                         ), new Set()
      @throws ( Ωit_779 = -> validate.empty [ 1, ]                        ), /expected a empty, got a list/
      @throws ( Ωit_780 = -> validate.empty 'A'                           ), /expected a empty, got a text/
      @throws ( Ωit_781 = -> validate.empty new Set 'abc'                 ), /expected a empty, got a set/
      #.......................................................................................................
      @eq ( Ωit_782 = -> type_of []                                       ), 'list'
      @eq ( Ωit_783 = -> type_of ''                                       ), 'text'
      @eq ( Ωit_784 = -> type_of new Set()                                ), 'set'
      @eq ( Ωit_785 = -> type_of [ 'a', ]                                 ), 'list'
      @eq ( Ωit_786 = -> type_of 'a'                                      ), 'text'
      @eq ( Ωit_787 = -> type_of new Set 'a'                              ), 'set'
      #.......................................................................................................
      @eq ( Ωit_788 = -> type_of 1234                                     ), 'float'
      @eq ( Ωit_789 = -> isa.integer 1234                                 ), true
      @eq ( Ωit_790 = -> isa.positive.integer 1234                        ), true
      @eq ( Ωit_791 = -> isa.negative.integer 1234                        ), false
      @eq ( Ωit_792 = -> isa.negative.integer -1234                       ), true
      @eq ( Ωit_793 = -> isa.negative.integer -Infinity                   ), false
      @eq ( Ωit_794 = -> isa.negative.integer -12.34                      ), false
      #.......................................................................................................
      @eq ( Ωit_795 = -> isa.positive.float     +4                        ), true
      @eq ( Ωit_796 = -> isa.positive.integer   +4                        ), true
      @eq ( Ωit_797 = -> isa.positive.infinity  +4                        ), false
      @eq ( Ωit_798 = -> isa.negative.float     +4                        ), false
      @eq ( Ωit_799 = -> isa.negative.integer   +4                        ), false
      @eq ( Ωit_800 = -> isa.negative.infinity  +4                        ), false
      @eq ( Ωit_801 = -> isa.posnaught.float    +4                        ), true
      @eq ( Ωit_802 = -> isa.posnaught.integer  +4                        ), true
      @eq ( Ωit_803 = -> isa.posnaught.infinity +4                        ), false
      @eq ( Ωit_804 = -> isa.negnaught.float    +4                        ), false
      @eq ( Ωit_805 = -> isa.negnaught.integer  +4                        ), false
      @eq ( Ωit_806 = -> isa.negnaught.infinity +4                        ), false
      #.......................................................................................................
      @eq ( Ωit_807 = -> isa.positive.float      0                        ), false
      @eq ( Ωit_808 = -> isa.positive.integer    0                        ), false
      @eq ( Ωit_809 = -> isa.positive.infinity   0                        ), false
      @eq ( Ωit_810 = -> isa.negative.float      0                        ), false
      @eq ( Ωit_811 = -> isa.negative.integer    0                        ), false
      @eq ( Ωit_812 = -> isa.negative.infinity   0                        ), false
      @eq ( Ωit_813 = -> isa.posnaught.float     0                        ), true
      @eq ( Ωit_814 = -> isa.posnaught.integer   0                        ), true
      @eq ( Ωit_815 = -> isa.posnaught.infinity  0                        ), false
      @eq ( Ωit_816 = -> isa.negnaught.float     0                        ), true
      @eq ( Ωit_817 = -> isa.negnaught.integer   0                        ), true
      @eq ( Ωit_818 = -> isa.negnaught.infinity  0                        ), false
      #.......................................................................................................
      @eq ( Ωit_819 = -> isa.positive.float      Infinity                 ), false
      @eq ( Ωit_820 = -> isa.positive.integer    Infinity                 ), false
      @eq ( Ωit_821 = -> isa.positive.infinity   Infinity                 ), true
      @eq ( Ωit_822 = -> isa.negative.float      Infinity                 ), false
      @eq ( Ωit_823 = -> isa.negative.integer    Infinity                 ), false
      @eq ( Ωit_824 = -> isa.negative.infinity   Infinity                 ), false
      @eq ( Ωit_825 = -> isa.posnaught.float     Infinity                 ), false
      @eq ( Ωit_826 = -> isa.posnaught.integer   Infinity                 ), false
      @eq ( Ωit_827 = -> isa.posnaught.infinity  Infinity                 ), true
      @eq ( Ωit_828 = -> isa.negnaught.float     Infinity                 ), false
      @eq ( Ωit_829 = -> isa.negnaught.integer   Infinity                 ), false
      @eq ( Ωit_830 = -> isa.negnaught.infinity  Infinity                 ), false
      #.......................................................................................................
      @eq ( Ωit_831 = -> isa.positive.float      +4.3                     ), true
      @eq ( Ωit_832 = -> isa.positive.integer    +4.3                     ), false
      @eq ( Ωit_833 = -> isa.positive.infinity   +4.3                     ), false
      @eq ( Ωit_834 = -> isa.negative.float      +4.3                     ), false
      @eq ( Ωit_835 = -> isa.negative.integer    +4.3                     ), false
      @eq ( Ωit_836 = -> isa.negative.infinity   +4.3                     ), false
      @eq ( Ωit_837 = -> isa.posnaught.float     +4.3                     ), true
      @eq ( Ωit_838 = -> isa.posnaught.integer   +4.3                     ), false
      @eq ( Ωit_839 = -> isa.posnaught.infinity  +4.3                     ), false
      @eq ( Ωit_840 = -> isa.negnaught.float     +4.3                     ), false
      @eq ( Ωit_841 = -> isa.negnaught.integer   +4.3                     ), false
      @eq ( Ωit_842 = -> isa.negnaught.infinity  +4.3                     ), false
      #.......................................................................................................
      @eq ( Ωit_843 = -> isa.positive.float      -4.3                     ), false
      @eq ( Ωit_844 = -> isa.positive.integer    -4.3                     ), false
      @eq ( Ωit_845 = -> isa.positive.infinity   -4.3                     ), false
      @eq ( Ωit_846 = -> isa.negative.float      -4.3                     ), true
      @eq ( Ωit_847 = -> isa.negative.integer    -4.3                     ), false
      @eq ( Ωit_848 = -> isa.negative.infinity   -4.3                     ), false
      @eq ( Ωit_849 = -> isa.posnaught.float     -4.3                     ), false
      @eq ( Ωit_850 = -> isa.posnaught.integer   -4.3                     ), false
      @eq ( Ωit_851 = -> isa.posnaught.infinity  -4.3                     ), false
      @eq ( Ωit_852 = -> isa.negnaught.float     -4.3                     ), true
      @eq ( Ωit_853 = -> isa.negnaught.integer   -4.3                     ), false
      @eq ( Ωit_854 = -> isa.negnaught.infinity  -4.3                     ), false
      #.......................................................................................................
      @eq ( Ωit_855 = -> isa.posnaught           +Infinity                ), true
      @eq ( Ωit_856 = -> isa.negnaught           +Infinity                ), false
      @eq ( Ωit_857 = -> isa.posnaught           -Infinity                ), false
      @eq ( Ωit_858 = -> isa.negnaught           -Infinity                ), true
      @eq ( Ωit_859 = -> isa.posnaught           0                        ), true
      @eq ( Ωit_860 = -> isa.negnaught           0                        ), true
      @eq ( Ωit_861 = -> isa.posnaught           0                        ), true
      @eq ( Ωit_862 = -> isa.negnaught           0                        ), true
      #.......................................................................................................
      @eq ( Ωit_863 = -> isa.frozen         Object.freeze {}              ), true
      @eq ( Ωit_864 = -> isa.frozen         Object.freeze []              ), true
      @eq ( Ωit_865 = -> isa.frozen                       {}              ), false
      @eq ( Ωit_866 = -> isa.frozen                       []              ), false
      @eq ( Ωit_867 = -> isa.frozen.object  Object.freeze {}              ), true
      @eq ( Ωit_868 = -> isa.frozen.list    Object.freeze []              ), true
      @eq ( Ωit_869 = -> isa.frozen.object                {}              ), false
      @eq ( Ωit_870 = -> isa.frozen.list                  []              ), false
      #.......................................................................................................
      @eq ( Ωit_871 = -> isa.odd.integer                  []              ), false
      @eq ( Ωit_872 = -> isa.odd.integer                  102.4           ), false
      @eq ( Ωit_873 = -> isa.odd.integer                  9997            ), true
      @eq ( Ωit_874 = -> isa.odd.integer                  '1024'          ), false
      @eq ( Ωit_875 = -> isa.odd.integer                  0               ), false
      @eq ( Ωit_876 = -> isa.odd.integer                  1024            ), false
      @eq ( Ωit_877 = -> isa.odd.positive.integer         1024            ), false
      @eq ( Ωit_878 = -> isa.odd.positive.integer         102.4           ), false
      @eq ( Ωit_879 = -> isa.odd.positive.integer         1023            ), true
      @eq ( Ωit_880 = -> isa.odd.positive.integer         -1023           ), false
      @eq ( Ωit_881 = -> isa.odd.positive.integer         103.4           ), false
      @eq ( Ωit_882 = -> isa.even.integer                 []              ), false
      @eq ( Ωit_883 = -> isa.even.integer                 102.4           ), false
      @eq ( Ωit_884 = -> isa.even.integer                 9997            ), false
      @eq ( Ωit_885 = -> isa.even.integer                 '1024'          ), false
      @eq ( Ωit_886 = -> isa.even.integer                 0               ), true
      @eq ( Ωit_887 = -> isa.even.integer                 1024            ), true
      @eq ( Ωit_888 = -> isa.even.positive.integer        1024            ), true
      @eq ( Ωit_889 = -> isa.even.positive.integer        0               ), false
      @eq ( Ωit_890 = -> isa.even.posnaught.integer       1024            ), true
      @eq ( Ωit_891 = -> isa.even.posnaught.integer       0               ), true
      #.......................................................................................................
      @eq ( Ωit_892 = -> isa.even.posnaught               0               ), true
      @eq ( Ωit_893 = -> isa.even.posnaught               1               ), false
      @eq ( Ωit_894 = -> isa.even.posnaught               2               ), true
      #.......................................................................................................
      @eq ( Ωit_895 = -> isa.cardinal                     -1024           ), false
      @eq ( Ωit_896 = -> isa.cardinal                     10              ), true
      @eq ( Ωit_897 = -> isa.cardinal                     123.7           ), false
      @eq ( Ωit_898 = -> isa.cardinal                     0               ), true
      @eq ( Ωit_899 = -> isa.cardinal                     1               ), true
      @eq ( Ωit_900 = -> isa.cardinal                     Infinity        ), false
      @eq ( Ωit_901 = -> evaluate.cardinal                Infinity        ), { cardinal: false }
      @eq ( Ωit_902 = -> evaluate.posnaught.integer       Infinity        ), { 'posnaught.integer': false }
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
      @eq ( Ωit_903 = -> ( new Intertype() ).declare { foo: 'float', } ), null
      @eq ( Ωit_904 = -> ( new Intertype() ).declare { foo: 'text',  } ), null
      # ( new Intertype() ).declare { foo: 'optional', }
      @throws ( Ωit_905 = -> ( new Intertype() ).declare { foo: 'optional', }        ), /illegal use of 'optional' in declaration of type 'foo'/
      @throws ( Ωit_906 = -> ( new Intertype() ).declare { foo: 'qqq', }             ), /unknown type 'qqq'/
      @throws ( Ωit_907 = -> ( new Intertype() ).declare { foo: 'optional.float', }  ), /illegal use of 'optional' in declaration of type 'foo'/
      @throws ( Ωit_908 = -> ( new Intertype() ).declare { foo: 'anything.float', }  ), /illegal use of basetype 'anything' in declaration of type 'foo'/
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
      @eq ( Ωit_909 = -> isa.normalfloat                     0     ), true
      @eq ( Ωit_910 = -> isa.normalfloat                     null  ), false
      @eq ( Ωit_911 = -> isa.normalfloat                     -1    ), false
      @eq ( Ωit_912 = -> isa.normalfloat                     '?'   ), false
      @eq ( Ωit_913 = -> isa.optional.normalfloat            0     ), true
      @eq ( Ωit_914 = -> isa.optional.normalfloat            null  ), true
      @eq ( Ωit_915 = -> isa.optional.normalfloat            -1    ), false
      @eq ( Ωit_916 = -> isa.optional.normalfloat            '?'   ), false
      @eq ( Ωit_917 = -> validate.normalfloat                0     ), 0
      @eq ( Ωit_918 = -> validate.optional.normalfloat       0     ), 0
      @eq ( Ωit_919 = -> validate.optional.normalfloat       null  ), null
      @throws ( Ωit_920 = -> validate.normalfloat           null ), /expected a normalfloat, got a null/
      @throws ( Ωit_921 = -> validate.normalfloat           -1   ), /expected a normalfloat, got a float/
      @throws ( Ωit_922 = -> validate.normalfloat           '?'  ), /expected a normalfloat, got a text/
      @throws ( Ωit_923 = -> validate.optional.normalfloat  -1   ), /expected an optional normalfloat, got a float/
      @throws ( Ωit_924 = -> validate.optional.normalfloat  '?'  ), /expected an optional normalfloat, got a text/
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
      @eq ( Ωit_925 = -> isa.quantity            { q: 1, u: 'm', }   ), true
      @eq ( Ωit_926 = -> isa.quantity            null                ), false
      @eq ( Ωit_927 = -> isa.optional.quantity   { q: 2, u: 'm', }   ), true
      @eq ( Ωit_928 = -> isa.optional.quantity   null                ), true
      @eq ( Ωit_929 = -> validate.quantity               { q: 3, u: 'm', } ), { q: 3, u: 'm', }
      @eq ( Ωit_930 = -> validate.optional.quantity      { q: 4, u: 'm', } ), { q: 4, u: 'm', }
      @eq ( Ωit_931 = -> validate.optional.quantity.q    null  ), null
      @eq ( Ωit_932 = -> validate.optional.quantity.q    111   ), 111
      @eq ( Ωit_933 = -> isa.quantity                     null               ), false
      @eq ( Ωit_934 = -> isa.quantity                     -1                 ), false
      @eq ( Ωit_935 = -> isa.quantity                     '?'                ), false
      @eq ( Ωit_936 = -> isa.quantity.q                   '?'                ), false
      @eq ( Ωit_937 = -> isa.quantity.q                   3                  ), true
      @eq ( Ωit_938 = -> isa.optional.quantity            { q: 1, u: 'm', }  ), true
      @eq ( Ωit_939 = -> isa.optional.quantity            null               ), true
      @eq ( Ωit_940 = -> isa.optional.quantity            -1                 ), false
      @eq ( Ωit_941 = -> isa.optional.quantity            '?'                ), false
      @eq ( Ωit_942 = -> isa.optional.quantity.q          '?'                ), false
      @eq ( Ωit_943 = -> isa.optional.quantity.q          3                  ), true
      @eq ( Ωit_944 = -> validate.quantity                { q: 1, u: 'm', }  ), { q: 1, u: 'm', }
      @eq ( Ωit_945 = -> validate.optional.quantity       { q: 1, u: 'm', }  ), { q: 1, u: 'm', }
      @eq ( Ωit_946 = -> validate.optional.quantity       null               ), null
      @throws ( Ωit_947 = -> validate.quantity           { q: 5, }  ), /expected a quantity, got a object/ ### TAINT message should be more specific ###
      @throws ( Ωit_948 = -> validate.quantity            null      ), /expected a quantity, got a null/
      @throws ( Ωit_949 = -> validate.quantity            -1        ), /expected a quantity, got a float/
      @throws ( Ωit_950 = -> validate.quantity            '?'       ), /expected a quantity, got a text/
      @throws ( Ωit_951 = -> validate.quantity            { q: 1, } ), /expected a quantity, got a object/ ### TAINT message should be more specific ###
      @throws ( Ωit_952 = -> validate.optional.quantity   -1        ), /expected an optional quantity, got a float/
      @throws ( Ωit_953 = -> validate.optional.quantity   { q: 1, } ), /expected an optional quantity, got a object/ ### TAINT message should be more specific ###
      @throws ( Ωit_954 = -> validate.optional.quantity.q { q: 1, } ), /expected an optional quantity.q, got a object/
      @throws ( Ωit_955 = -> validate.optional.quantity.q 3, 4, 5   ), /method 'validate.optional.quantity.q' expects 1 arguments, got 3/
      return null
    #.........................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  declaration_role_field: ->
    { Intertype } = require '../../../apps/intertype'
    #.........................................................................................................
    do =>
      { declarations  } = new Intertype()
      @eq ( Ωit_956 = -> declarations.float.role     ), 'usertype'
      @eq ( Ωit_957 = -> declarations.null.role      ), 'basetype'
      @eq ( Ωit_958 = -> declarations.anything.role  ), 'basetype'
      @eq ( Ωit_959 = -> declarations.unknown.role   ), 'basetype'
      @eq ( Ωit_960 = -> declarations.optional.role  ), 'optional'
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
      @eq ( Ωit_961 = -> type_of null              ), 'null'
      @eq ( Ωit_962 = -> type_of undefined         ), 'undefined'
      @eq ( Ωit_963 = -> type_of +Infinity         ), 'unknown'
      @eq ( Ωit_964 = -> type_of 4                 ), 'unknown'
      return null
    #.........................................................................................................
    do =>
      @eq ( Ωit_965 = -> isa.anything   1          ), true
      @eq ( Ωit_966 = -> isa.nothing    1          ), false
      @eq ( Ωit_967 = -> isa.something  1          ), true
      @eq ( Ωit_968 = -> isa.unknown    1          ), true
      return null
    #.........................................................................................................
    do =>
      @eq ( Ωit_969 = -> isa.anything   null       ), true
      @eq ( Ωit_970 = -> isa.nothing    null       ), true
      @eq ( Ωit_971 = -> isa.something  null       ), false
      @eq ( Ωit_972 = -> isa.unknown    null       ), false
      return null
    #.........................................................................................................
    do =>
      @eq ( Ωit_973 = -> isa.anything   undefined  ), true
      @eq ( Ωit_974 = -> isa.nothing    undefined  ), true
      @eq ( Ωit_975 = -> isa.something  undefined  ), false
      @eq ( Ωit_976 = -> isa.unknown    undefined  ), false
      return null
    #.........................................................................................................
    do =>
      @throws ( Ωit_977 = -> isa.optional 1      ), /`optional` is not a legal type for `isa` methods/
      @throws ( Ωit_978 = -> validate.optional 1 ), /`optional` is not a legal type for `validate` methods/
      @throws ( Ωit_979 = -> create.optional 1   ), /`optional` is not a legal type for `create` methods/
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
    @eq ( Ωit_980 = -> types.create.foobar { foo: 8, bar: 9, } ), { foo: 8, bar: 9, }
    @eq ( Ωit_981 = -> types.create.foobar { foo: 8,         } ), { foo: 8, bar: 5, }
    @eq ( Ωit_982 = -> types.create.foobar { foo: 4, bar: 5, } ), { foo: 4, bar: 5, }
    @eq ( Ωit_983 = -> types.create.foobar {                 } ), { foo: 4, bar: 5, }
    @eq ( Ωit_984 = -> types.create.foobar undefined           ), { foo: 4, bar: 5, }
    @eq ( Ωit_985 = -> types.create.foobar null                ), { foo: 4, bar: 5, }
    return null

  #---------------------------------------------------------------------------------------------------------
  can_use_values_of_unknown_type: ->
    do =>
      { Intertype_minimal, } = require '../../../apps/intertype'
      types = new Intertype_minimal()
      types.declare thirtyone: ( x ) -> x is 31
      @eq ( Ωit_986 = -> types.type_of 31        ), 'thirtyone'
      @eq ( Ωit_987 = -> types.type_of 32        ), 'unknown'
      @eq ( Ωit_988 = -> types.isa.thirtyone 31  ), true
      @eq ( Ωit_989 = -> types.isa.thirtyone 32  ), false
      @eq ( Ωit_990 = -> types.type_of new Map() ), 'unknown'
      return null
    #.......................................................................................................
    do =>
      { Intertype_minimal, } = require '../../../apps/intertype'
      types = new Intertype_minimal()
      types.declare thirtyone:  ( x ) -> ( @isa.float x ) and ( x is 31 )
      ### this used to be a problem        ^^^^ ###
      types.declare float:      ( x ) -> Number.isFinite x
      @eq ( Ωit_991 = -> types.type_of 31        ), 'thirtyone'
      @eq ( Ωit_992 = -> types.type_of 32        ), 'float'
      @eq ( Ωit_993 = -> types.isa.thirtyone 31  ), true
      @eq ( Ωit_994 = -> types.isa.thirtyone 32  ), false
      @eq ( Ωit_995 = -> types.type_of new Map() ), 'unknown'
      return null
    #.......................................................................................................
    return null

  #-----------------------------------------------------------------------------------------------------------
  advanced_types: ->
    { Intertype, } = require '../../../apps/intertype'
    types = new Intertype()
    @eq ( Ωit_996 = -> types.type_of new Set() ), 'set'
    @eq ( Ωit_997 = -> types.type_of new Map() ), 'map'
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
    @eq ( Ωit_998 = -> types.declarations.integer.kind  ), 'float'
    @eq ( Ωit_999 = -> types.declarations.foo.type      ), 'foo'
    @eq ( Ωit1000 = -> types.declarations.foo.kind      ), 'object'
    @eq ( Ωit1001 = -> types.declarations.foo.role      ), 'usertype'
    @eq ( Ωit1002 = -> types.declarations.bar.type      ), 'bar'
    @eq ( Ωit1003 = -> types.declarations.bar.kind      ), 'foo'
    @eq ( Ωit1004 = -> types.declarations.bar.role      ), 'usertype'
    return null

  #=========================================================================================================
  Naming:

    #-------------------------------------------------------------------------------------------------------
    type: ->
      { Intertype, } = require '../../../apps/intertype'
      t2 = new Intertype()
      for type, declaration of t2.declarations
        @eq ( Ωit1005 = -> declaration.type is type ), true
      return null

    #-------------------------------------------------------------------------------------------------------
    validate_methods: ->
      { Intertype, } = require '../../../apps/intertype'
      t2 = new Intertype()
      @eq ( Ωit1006 = -> t2.validate.asyncfunction.name          ), 'validate.asyncfunction'
      @eq ( Ωit1007 = -> t2.validate.optional.asyncfunction.name ), 'validate.optional.asyncfunction'
      return null

    #-------------------------------------------------------------------------------------------------------
    isa_methods: ->
      { Intertype, } = require '../../../apps/intertype'
      t2 = new Intertype()
      @eq ( Ωit1008 = -> t2.isa.asyncfunction.name               ), 'isa.asyncfunction'
      @eq ( Ωit1009 = -> t2.isa.optional.asyncfunction.name      ), 'isa.optional.asyncfunction'
      @eq ( Ωit1010 = -> t2.isa.null?.name                       ), 'isa.null'
      @eq ( Ωit1011 = -> t2.isa.function?.name                   ), 'isa.function'
      @eq ( Ωit1012 = -> t2.isa.boolean?.name                    ), 'isa.boolean'
      @eq ( Ωit1013 = -> t2.isa.text?.name                       ), 'isa.text'
      @eq ( Ωit1014 = -> t2.isa.asyncfunction?.name              ), 'isa.asyncfunction'
      return null

    #-------------------------------------------------------------------------------------------------------
    create_methods: ->
      { Intertype, } = require '../../../apps/intertype'
      t2 = new Intertype()
      @eq ( Ωit1015 = -> t2.create.function.name               ), 'create.function'
      @eq ( Ωit1016 = -> t2.create.float.name                  ), 'create.float'
      return null

  #=========================================================================================================
  Create_methods:

    #-------------------------------------------------------------------------------------------------------
    floats: ->
      { Intertype, } = require '../../../apps/intertype'
      t2 = new Intertype()
      @eq     ( Ωit1017 = -> t2.create.float()              ), 0
      @eq     ( Ωit1018 = -> t2.create.float +0             ), 0
      @eq     ( Ωit1019 = -> t2.create.float -0             ), 0
      @eq     ( Ωit1020 = -> t2.create.float false          ), 0
      @eq     ( Ωit1021 = -> t2.create.float true           ), 1
      @eq     ( Ωit1022 = -> t2.create.float 12.34          ), 12.34
      @eq     ( Ωit1023 = -> t2.create.float '12.34'        ), 12.34
      @eq     ( Ωit1024 = -> t2.create.float +12.34         ), 12.34
      @eq     ( Ωit1025 = -> t2.create.float '+12.34'       ), 12.34
      @eq     ( Ωit1026 = -> t2.create.float -12.34         ), -12.34
      @eq     ( Ωit1027 = -> t2.create.float '-12.34'       ), -12.34
      @eq     ( Ωit1028 = -> t2.create.float null           ), 0
      @eq     ( Ωit1029 = -> t2.create.float undefined      ), 0
      @throws ( Ωit1030 = -> t2.create.float ''             ), /these arguments are not suitable for `create.float\(\)`: ''/
      return null

    #-------------------------------------------------------------------------------------------------------
    integers: ->
      { Intertype, } = require '../../../apps/intertype'
      t2 = new Intertype()
      @eq     ( Ωit1031 = -> t2.create.integer()              ), 0
      @eq     ( Ωit1032 = -> t2.create.integer +0             ), 0
      @eq     ( Ωit1033 = -> t2.create.integer -0             ), 0
      @eq     ( Ωit1034 = -> t2.create.integer false          ), 0
      @eq     ( Ωit1035 = -> t2.create.integer true           ), 1
      @eq     ( Ωit1036 = -> t2.create.integer 12.34          ), 12
      @eq     ( Ωit1037 = -> t2.create.integer '12'           ), 12
      @eq     ( Ωit1038 = -> t2.create.integer +12            ), 12
      @eq     ( Ωit1039 = -> t2.create.integer '+12'          ), 12
      @eq     ( Ωit1040 = -> t2.create.integer -12            ), -12
      @eq     ( Ωit1041 = -> t2.create.integer '-12'          ), -12
      @eq     ( Ωit1042 = -> t2.create.integer null           ), 0
      @eq     ( Ωit1043 = -> t2.create.integer undefined      ), 0
      @throws ( Ωit1044 = -> t2.create.integer ''             ), /these arguments are not suitable for `create.integer\(\)`: ''/
      return null

    #-------------------------------------------------------------------------------------------------------
    cardinals: ->
      { Intertype, } = require '../../../apps/intertype'
      t2 = new Intertype()
      @eq     ( Ωit1045 = -> t2.create.cardinal()              ), 0
      @eq     ( Ωit1046 = -> t2.create.cardinal +0             ), +0
      @eq     ( Ωit1047 = -> t2.create.cardinal -0             ), -0
      @eq     ( Ωit1048 = -> t2.create.cardinal false          ), 0
      @eq     ( Ωit1049 = -> t2.create.cardinal true           ), 1
      @eq     ( Ωit1050 = -> t2.create.cardinal 12.34          ), 12
      @eq     ( Ωit1051 = -> t2.create.cardinal '12'           ), 12
      @eq     ( Ωit1052 = -> t2.create.cardinal +12            ), 12
      @eq     ( Ωit1053 = -> t2.create.cardinal '+12'          ), 12
      @throws ( Ωit1054 = -> t2.create.cardinal -12            ), /these arguments are not suitable for `create.cardinal\(\)`: -12/
      @throws ( Ωit1055 = -> t2.create.cardinal '-12'          ), /these arguments are not suitable for `create.cardinal\(\)`: '-12'/
      @eq     ( Ωit1056 = -> t2.create.cardinal null           ), 0
      @eq     ( Ωit1057 = -> t2.create.cardinal undefined      ), 0
      @throws ( Ωit1058 = -> t2.create.cardinal ''             ), /these arguments are not suitable for `create.cardinal\(\)`: ''/
      return null

    #-------------------------------------------------------------------------------------------------------
    texts: ->
      { Intertype, } = require '../../../apps/intertype'
      t2 = new Intertype()
      @eq     ( Ωit1059 = -> t2.create.text()              ), ''
      @eq     ( Ωit1060 = -> t2.create.text +0             ), '0'
      @eq     ( Ωit1061 = -> t2.create.text -0             ), '-0'
      @eq     ( Ωit1062 = -> t2.create.text false          ), 'false'
      @eq     ( Ωit1063 = -> t2.create.text true           ), 'true'
      @eq     ( Ωit1064 = -> t2.create.text 12.34          ), '12.34'
      @eq     ( Ωit1065 = -> t2.create.text '12'           ), '12'
      @eq     ( Ωit1066 = -> t2.create.text +12            ), '12'
      @eq     ( Ωit1067 = -> t2.create.text '+12'          ), '+12'
      @eq     ( Ωit1068 = -> t2.create.text -12            ), '-12'
      @eq     ( Ωit1069 = -> t2.create.text '-12'          ), '-12'
      @eq     ( Ωit1070 = -> t2.create.text null           ), ''
      @eq     ( Ωit1071 = -> t2.create.text undefined      ), ''
      @eq     ( Ωit1072 = -> t2.create.text ''             ), ''
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
              debug 'Ω1003', "create.quantity( #{rpr x} )"
              debug 'Ω1004', { @declarations.quantity.template..., x..., }
              return { @declarations.quantity.template..., x..., }
          'quantity.q':
            test: 'float'
            create: ( x ) ->
              has_been_called.create_quantity_q++
              debug 'Ω1005', "create.quantity.q( #{rpr x} )"
              return 0
          'quantity.u':
            test: 'text'
            create: ( x ) ->
              has_been_called.create_quantity_u++
              debug 'Ω1006', "create.quantity.u( #{rpr x} )"
              return 'u'
        t2 = new Intertype declarations
        @eq     ( Ωit1073 = -> t2.create.quantity()               ), { q: 0, u: 'u', }
        @eq     ( Ωit1074 = -> has_been_called.create_quantity    ), 1
        @eq     ( Ωit1075 = -> has_been_called.create_quantity_q  ), 1
        @eq     ( Ωit1076 = -> has_been_called.create_quantity_u  ), 1
        @eq     ( Ωit1077 = -> t2.create.quantity '12.5m'         ), { q: 12.5, u: 'm', }
        @eq     ( Ωit1078 = -> t2.create.quantity.q()             ), 0
        @eq     ( Ωit1079 = -> t2.create.quantity.u()             ), 'u'
        @eq     ( Ωit1080 = -> t2.create[ 'quantity.q' ]()        ), 0
        @eq     ( Ωit1081 = -> t2.create[ 'quantity.u' ]()        ), 'u'
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
        @eq     ( Ωit1082 = -> t2.create.quantity()               ), { q: 0, u: 'u', }
        @eq     ( Ωit1083 = -> t2.create.quantity '12.5m'         ), { q: 12.5, u: 'm', }
        @eq     ( Ωit1084 = -> t2.create.quantity.q()             ), 0
        @eq     ( Ωit1085 = -> t2.create.quantity.u()             ), 'u'
        @eq     ( Ωit1086 = -> t2.create[ 'quantity.q' ]()        ), 0
        @eq     ( Ωit1087 = -> t2.create[ 'quantity.u' ]()        ), 'u'
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
        debug 'Ωit1088', t2.declarations[ 'literal.float'   ].create '123.456e4'
        debug 'Ωit1089', t2.declarations[ 'literal.integer' ].create '123.456'
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
              debug 'Ω1009', { x, }
              has_been_called.create_quantity++
              { q: 0, u: 'u', x..., }
        #...................................................................................................
        t2 = new Intertype declarations
        @eq     ( Ωit1090 = -> t2.create.float()                  ), 0
        @eq     ( Ωit1091 = -> t2.create.float1()                 ), 0
        @eq     ( Ωit1092 = -> t2.create.float2()                 ), 0
        @eq     ( Ωit1093 = -> t2.create.float3()                 ), 0
        @eq     ( Ωit1094 = -> t2.create.float4()                 ), 0
        @eq     ( Ωit1095 = -> t2.create.quantity()               ), { q: 0, u: 'u', }
        @eq     ( Ωit1096 = -> t2.create.quantity { q: 1, }       ), { q: 1, u: 'u', }
        @eq     ( Ωit1097 = -> t2.create.quantity { u: 'm', }     ), { q: 0, u: 'm', }
        @eq     ( Ωit1098 = -> has_been_called.create_quantity    ), 3
        # @eq     ( Ωit1099 = -> t2.declarations.mass.kind          ), 'quantity'
        # @eq     ( Ωit1100 = -> t2.create[ 'quantity.q' ]()        ), 0
        # @eq     ( Ωit1101 = -> t2.create[ 'quantity.u' ]()        ), 'u'
        # #...................................................................................................
        # @eq     ( Ωit1102 = -> t2.create.mass()                   ), { q: 0, u: 'u', }
        # @eq     ( Ωit1103 = -> t2.create[ 'foo.bar.baz' ]()       ), { q: 0, u: 'u', }
        # @eq     ( Ωit1104 = -> t2.create.quantity.q()             ), 0
        # @eq     ( Ωit1105 = -> t2.create.quantity.u()             ), 'u'
        # @eq     ( Ωit1106 = -> t2.create.foo.bar.baz()            ), { q: 0, u: 'u', }
        # debug 'Ωit1107', t2.create.float
        # debug 'Ωit1108', t2.create.quantity
        debug 'Ωit1109', has_been_called
        debug 'Ωit1110', has_been_called.create_quantity
        return null
      #.....................................................................................................
      return null

    # #-------------------------------------------------------------------------------------------------------
    # posnaught_integers: ->
    #   { Intertype, } = require '../../../apps/intertype'
    #   t2 = new Intertype()
    #   @eq     ( Ωit1111 = -> t2.create.posnaught.integer()              ), 0
    #   @eq     ( Ωit1112 = -> t2.create.posnaught.integer +0             ), 0
    #   @eq     ( Ωit1113 = -> t2.create.posnaught.integer -0             ), 0
    #   @eq     ( Ωit1114 = -> t2.create.posnaught.integer false          ), 0
    #   @eq     ( Ωit1115 = -> t2.create.posnaught.integer true           ), 1
    #   @eq     ( Ωit1116 = -> t2.create.posnaught.integer 12.34          ), 12
    #   @eq     ( Ωit1117 = -> t2.create.posnaught.integer '12'           ), 12
    #   @eq     ( Ωit1118 = -> t2.create.posnaught.integer +12            ), 12
    #   @eq     ( Ωit1119 = -> t2.create.posnaught.integer '+12'          ), 12
    #   @eq     ( Ωit1120 = -> t2.create.posnaught.integer -12            ), -12
    #   @eq     ( Ωit1121 = -> t2.create.posnaught.integer '-12'          ), -12
    #   @eq     ( Ωit1122 = -> t2.create.posnaught.integer null           ), 0
    #   @eq     ( Ωit1123 = -> t2.create.posnaught.integer undefined      ), 0
    #   @throws ( Ωit1124 = -> t2.create.posnaught.integer ''             ), /these arguments are not suitable for `create.posnaught.integer\(\)`: \[ '' \]/
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
            @eq ( WGUY.props.nameit "Ω1022-INVALID-TEST-p#{pi}", -> eval probe ), parseFloat probe
            @eq ( WGUY.props.nameit "Ω1023-INVALID-TEST-p#{pi}", -> eval probe ), val_or_err
          when is_valid_literal is false
            @throws ( WGUY.props.nameit "Ω1024-INVALID-TEST-p#{pi}", -> eval probe ), val_or_err
          when is_valid_literal is null
            @pass 'Ω1025', "#{rpr probe} will be considered not well-formed for the purposes of this test"
      #.....................................................................................................
      for regex, ri in regexes
        for [ probe, is_valid_literal, ], pi in probes_and_matchers
          regex.lastIndex = 0
          if ( match = probe.match regex )?
            switch true
              when is_valid_literal is true   then @pass "Ω1026-r#{ri}-p#{pi}"
              when is_valid_literal is false  then @fail "Ω1027-r#{ri}-p#{pi}", "expected no match but got one"
              when is_valid_literal is null   then @fail "Ω1028-r#{ri}-p#{pi}", "expected no match but got one"
          else
            switch true
              when is_valid_literal is true   then @fail "Ω1029-r#{ri}-p#{pi}", "expected match but got none"
              when is_valid_literal is false  then @pass "Ω1030-r#{ri}-p#{pi}"
              when is_valid_literal is null   then @pass "Ω1031-r#{ri}-p#{pi}"
      #.....................................................................................................
      for regex, ri in regexes
        for [ probe, is_valid_literal, ], pi in probes_and_matchers
          regex.lastIndex = 0
          if ( match = probe.match regex )?
            switch true
              when is_valid_literal is true   then help         "Ω1032-r#{ri}-p#{pi}", match
              when is_valid_literal is false  then warn reverse "Ω1033-r#{ri}-p#{pi}", match
              when is_valid_literal is null   then urge reverse "Ω1034-r#{ri}-p#{pi}", match
          else
            switch true
              when is_valid_literal is true   then help reverse "Ω1035-r#{ri}-p#{pi}", match
              when is_valid_literal is false  then warn         "Ω1036-r#{ri}-p#{pi}", match
              when is_valid_literal is null   then urge         "Ω1037-r#{ri}-p#{pi}", match
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
#       debug 'Ωit1125', format_error_stack error.stack
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
#       @eq ( Ω1039 = -> types.create.mass() ), { q: 0, u: 'u', }
#     catch error
#       debug 'Ωit1126', format_error_stack error.stack
#     #.......................................................................................................
#     return null

# format_error_stack = ( stack ) ->
#   lines = stack.split '\n'
#   lines = ( line for line in lines when not /\bnode:/.test line )
#   lines = ( ( if /jzr\/intertype/.test line then GUY.trm.yellow GUY.trm.reverse line else GUY.trm.white line ) for line in lines )
#   return '\n\n' + ( lines.join '\n' ) + '\n'
