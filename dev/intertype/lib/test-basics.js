(async function() {
  'use strict';
  var GTNG, GUY, TMP_types, Test, WGUY, alert, debug, demo_1, echo, help, info, inspect, log, plain, praise, reverse, rpr, sample_declarations, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('intertype/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  WGUY = require('../../../apps/webguy');

  TMP_types = new (require('intertype-203.0.0')).Intertype();

  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  // test_mode                 = 'throw_failures'
  // test_mode                 = 'throw_errors'
  // test_mode                 = 'failsafe'

  //-----------------------------------------------------------------------------------------------------------
  demo_1 = function() {
    var Intertype_minimal, declarations, types;
    ({Intertype_minimal} = require('../../../apps/intertype'));
    //.........................................................................................................
    declarations = {
      integer: {
        test: function(x) {
          return Number.isInteger(x);
        },
        create: function(p = null) {
          return parseInt(p != null ? p : this.declarations.integer.template, 10);
        },
        template: 0
      },
      text: {
        template: '',
        test: (function(x) {
          return (typeof x) === 'string';
        })
      },
      float: {
        test: function(x) {
          return Number.isFinite(x);
        },
        create: function(p = null) {
          return parseFloat(p != null ? p : this.declarations.float.template);
        },
        template: 0
      }
    };
    // foo: { role: 'qualifier', }
    // 'foo.bar':
    //   template: { ima: 'foo', }
    //   fields:
    //     ima:    'text'
    //   create: ( x ) ->
    //     debug 'Ω___1', x
    //     return { @declarations.foo.bar.template..., }
    //.........................................................................................................
    declarations = {...sample_declarations, ...declarations};
    types = new Intertype_minimal(declarations);
    //.........................................................................................................
    debug('^233-1^', types.create.float('345.678'));
    debug('^233-1^', types.create.integer('345.678'));
    // debug '^233-1^', types.create.foo.bar()
    // debug '^233-1^', types.create[ 'foo.bar' ]()
    //.........................................................................................................
    return null;
  };

  //===========================================================================================================
  sample_declarations = {
    boolean: function(x) {
      return (x === true) || (x === false);
    },
    function: function(x) {
      return (Object.prototype.toString.call(x)) === '[object Function]';
    },
    asyncfunction: function(x) {
      return (Object.prototype.toString.call(x)) === '[object AsyncFunction]';
    },
    symbol: function(x) {
      return (typeof x) === 'symbol';
    },
    object: function(x) {
      return (x != null) && (typeof x === 'object') && ((Object.prototype.toString.call(x)) === '[object Object]');
    },
    float: function(x) {
      return Number.isFinite(x);
    },
    text: function(x) {
      return (typeof x) === 'string';
    },
    nullary: function(x) {
      return (x != null) && ((x.length === 0) || (x.size === 0));
    },
    unary: function(x) {
      return (x != null) && ((x.length === 1) || (x.size === 1));
    },
    binary: function(x) {
      return (x != null) && ((x.length === 2) || (x.size === 2));
    },
    trinary: function(x) {
      return (x != null) && ((x.length === 3) || (x.size === 3));
    },
    object: function(x) {
      return (x != null) && (typeof x === 'object') && ((Object.prototype.toString.call(x)) === '[object Object]');
    },
    set: function(x) {
      return x instanceof Set;
    },
    list: function(x) {
      return Array.isArray(x);
    }
  };

  //###########################################################################################################

  //===========================================================================================================
  this.intertype_tasks = {
    //-----------------------------------------------------------------------------------------------------------
    interface: function() {
      var INTERTYPE, Ωit__10, Ωit__11, Ωit__12, Ωit__14, Ωit__16, Ωit__17, Ωit__18, Ωit__19, Ωit__20, Ωit__21, Ωit__22, Ωit__23, Ωit__24, Ωit__29, Ωit__30, Ωit___2, Ωit___3, Ωit___4, Ωit___5, Ωit___6, Ωit___7, Ωit___8, Ωit___9;
      INTERTYPE = require('../../../apps/intertype');
      this.eq((Ωit___2 = function() {
        debug('2312312');
        return TMP_types.isa.object(INTERTYPE.types);
      }), true);
      this.eq((Ωit___3 = function() {
        return TMP_types.isa.undefined(INTERTYPE.types.get_isa);
      }), true);
      this.eq((Ωit___4 = function() {
        return TMP_types.isa.undefined(INTERTYPE.types.get_isa_optional);
      }), true);
      this.eq((Ωit___5 = function() {
        return TMP_types.isa.undefined(INTERTYPE.types.get_validate);
      }), true);
      this.eq((Ωit___6 = function() {
        return TMP_types.isa.undefined(INTERTYPE.types.get_validate_optional);
      }), true);
      this.eq((Ωit___7 = function() {
        return TMP_types.isa.function(INTERTYPE.types._get_isa);
      }), true);
      this.eq((Ωit___8 = function() {
        return TMP_types.isa.function(INTERTYPE.types._get_isa_optional);
      }), true);
      this.eq((Ωit___9 = function() {
        return TMP_types.isa.function(INTERTYPE.types._get_validate);
      }), true);
      this.eq((Ωit__10 = function() {
        return TMP_types.isa.function(INTERTYPE.types._get_validate_optional);
      }), true);
      this.eq((Ωit__11 = function() {
        return TMP_types.isa.object(INTERTYPE.types);
      }), true);
      this.eq((Ωit__12 = function() {
        return TMP_types.isa.object(INTERTYPE.types.isa);
      }), true);
      // @eq ( Ωit__13 = -> TMP_types.isa.function  INTERTYPE.types.isa.optional                  ), true
      this.eq((Ωit__14 = function() {
        return TMP_types.isa.object(INTERTYPE.types.validate);
      }), true);
      // @eq ( Ωit__15 = -> TMP_types.isa.function  INTERTYPE.types.validate.optional             ), true
      this.eq((Ωit__16 = function() {
        return TMP_types.isa.function(INTERTYPE.types.isa.boolean);
      }), true);
      this.eq((Ωit__17 = function() {
        return TMP_types.isa.function(INTERTYPE.types.isa.optional.boolean);
      }), true);
      this.eq((Ωit__18 = function() {
        return TMP_types.isa.function(INTERTYPE.types.validate.boolean);
      }), true);
      this.eq((Ωit__19 = function() {
        return TMP_types.isa.function(INTERTYPE.types.validate.optional.boolean);
      }), true);
      this.eq((Ωit__20 = function() {
        return TMP_types.isa.object(INTERTYPE.types.create);
      }), true);
      this.eq((Ωit__21 = function() {
        return TMP_types.isa.function(INTERTYPE.types.isa.text);
      }), true);
      this.eq((Ωit__22 = function() {
        return TMP_types.isa.function(INTERTYPE.types.create.text);
      }), true);
      this.eq((Ωit__23 = function() {
        return TMP_types.isa.object(INTERTYPE.types.declarations);
      }), true);
      this.eq((Ωit__24 = function() {
        return TMP_types.isa.object(INTERTYPE.types.declarations.text);
      }), true);
      //.........................................................................................................
      // @eq ( Ωit__25 = -> INTERTYPE.types.isa.name           ), 'isa'
      // @eq ( Ωit__26 = -> INTERTYPE.types.evaluate.name      ), 'evaluate'
      // @eq ( Ωit__27 = -> INTERTYPE.types.validate.name      ), 'validate'
      // @eq ( Ωit__28 = -> INTERTYPE.types.create.name        ), 'create'
      this.eq((Ωit__29 = function() {
        return INTERTYPE.types.declare.name;
      }), 'declare');
      this.eq((Ωit__30 = function() {
        return INTERTYPE.types.type_of.name;
      }), 'type_of');
      (() => {        //.........................................................................................................
        var results, type;
        results = [];
        for (type in INTERTYPE.testing._isa) {
          if (Reflect.has(INTERTYPE.declarations, type)) {
            continue;
          }
          results.push(this.fail('Ωit__31', `type known from \`INTERTYPE.testing._isa\` but missing from \`INTERTYPE.default_declarations\`: ${rpr(type)}`));
        }
        return results;
      })();
      //.........................................................................................................
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    basic_functionality_using_types_object: function() {
      var INTERTYPE, types, Ωit__32, Ωit__33, Ωit__34, Ωit__35, Ωit__36, Ωit__37, Ωit__38, Ωit__39, Ωit__40, Ωit__41, Ωit__42, Ωit__43, Ωit__44, Ωit__45, Ωit__46, Ωit__47, Ωit__48, Ωit__49, Ωit__50, Ωit__51, Ωit__52, Ωit__53, Ωit__54, Ωit__55;
      INTERTYPE = require('../../../apps/intertype');
      types = new INTERTYPE.Intertype_minimal(sample_declarations);
      this.eq((Ωit__32 = function() {
        return types.isa.boolean(false);
      }), true);
      this.eq((Ωit__33 = function() {
        return types.isa.boolean(true);
      }), true);
      this.eq((Ωit__34 = function() {
        return types.isa.boolean(null);
      }), false);
      this.eq((Ωit__35 = function() {
        return types.isa.boolean(1);
      }), false);
      this.eq((Ωit__36 = function() {
        return types.isa.optional.boolean(false);
      }), true);
      this.eq((Ωit__37 = function() {
        return types.isa.optional.boolean(true);
      }), true);
      this.eq((Ωit__38 = function() {
        return types.isa.optional.boolean(null);
      }), true);
      this.eq((Ωit__39 = function() {
        return types.isa.optional.boolean(1);
      }), false);
      //.........................................................................................................
      this.eq((Ωit__40 = function() {
        return types.validate.boolean(false);
      }), false);
      this.eq((Ωit__41 = function() {
        return types.validate.boolean(true);
      }), true);
      this.eq((Ωit__42 = function() {
        return types.validate.optional.boolean(true);
      }), true);
      this.eq((Ωit__43 = function() {
        return types.validate.optional.boolean(false);
      }), false);
      this.eq((Ωit__44 = function() {
        return types.validate.optional.boolean(void 0);
      }), void 0);
      this.eq((Ωit__45 = function() {
        return types.validate.optional.boolean(null);
      }), null);
      this.throws((Ωit__46 = function() {
        return types.validate.boolean(1);
      }), /expected a boolean/);
      this.throws((Ωit__47 = function() {
        return types.validate.optional.boolean(1);
      }), /expected an optional boolean/);
      //.........................................................................................................
      this.eq((Ωit__48 = function() {
        return types.type_of(null);
      }), 'null');
      this.eq((Ωit__49 = function() {
        return types.type_of(void 0);
      }), 'undefined');
      this.eq((Ωit__50 = function() {
        return types.type_of(false);
      }), 'boolean');
      this.eq((Ωit__51 = function() {
        return types.type_of(Symbol('p'));
      }), 'symbol');
      this.eq((Ωit__52 = function() {
        return types.type_of({});
      }), 'object');
      this.eq((Ωit__53 = function() {
        return types.type_of(0/0);
      }), 'unknown');
      this.eq((Ωit__54 = function() {
        return types.type_of(+2e308);
      }), 'unknown');
      this.eq((Ωit__55 = function() {
        return types.type_of(-2e308);
      }), 'unknown');
      //.........................................................................................................
      debug('^4324^', 'null           ', types.declarations.null);
      debug('^4324^', 'function       ', types.declarations.function);
      debug('^4324^', 'boolean        ', types.declarations.boolean);
      debug('^4324^', 'text           ', types.declarations.text);
      debug('^4324^', 'asyncfunction  ', types.declarations.asyncfunction);
      debug('^4324^');
      debug('^4324^', 'null           ', types.isa.null);
      debug('^4324^', 'function       ', types.isa.function);
      debug('^4324^', 'boolean        ', types.isa.boolean);
      debug('^4324^', 'text           ', types.isa.text);
      debug('^4324^', 'asyncfunction  ', types.isa.asyncfunction);
      debug('^4324^');
      debug('^4324^', 'null           ', types.isa.optional.null);
      debug('^4324^', 'function       ', types.isa.optional.function);
      debug('^4324^', 'boolean        ', types.isa.optional.boolean);
      debug('^4324^', 'text           ', types.isa.optional.text);
      debug('^4324^', 'asyncfunction  ', types.isa.optional.asyncfunction);
      debug('^4324^');
      debug('^4324^', 'null           ', types.validate.null);
      debug('^4324^', 'function       ', types.validate.function);
      debug('^4324^', 'boolean        ', types.validate.boolean);
      debug('^4324^', 'text           ', types.validate.text);
      debug('^4324^', 'asyncfunction  ', types.validate.asyncfunction);
      //.........................................................................................................
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    basic_functionality_using_standalone_methods: function() {
      var INTERTYPE, isa, type_of, validate, Ωit__56, Ωit__57, Ωit__58, Ωit__59, Ωit__60, Ωit__61, Ωit__62, Ωit__63, Ωit__64, Ωit__65, Ωit__66, Ωit__67, Ωit__68, Ωit__69, Ωit__70, Ωit__71, Ωit__72, Ωit__73, Ωit__74, Ωit__75, Ωit__76, Ωit__77, Ωit__78, Ωit__79, Ωit__80, Ωit__81, Ωit__82, Ωit__83, Ωit__84, Ωit__85, Ωit__86, Ωit__87, Ωit__88, Ωit__89, Ωit__90, Ωit__91;
      INTERTYPE = require('../../../apps/intertype');
      ({isa, validate, type_of} = new INTERTYPE.Intertype_minimal(sample_declarations));
      this.eq((Ωit__56 = function() {
        return isa.boolean(false);
      }), true);
      this.eq((Ωit__57 = function() {
        return isa.boolean(true);
      }), true);
      this.eq((Ωit__58 = function() {
        return isa.boolean(null);
      }), false);
      this.eq((Ωit__59 = function() {
        return isa.boolean(1);
      }), false);
      this.eq((Ωit__60 = function() {
        return isa.unknown(1);
      }), false);
      this.eq((Ωit__61 = function() {
        return isa.unknown(2e308);
      }), true);
      this.eq((Ωit__62 = function() {
        return isa.optional.boolean(false);
      }), true);
      this.eq((Ωit__63 = function() {
        return isa.optional.boolean(true);
      }), true);
      this.eq((Ωit__64 = function() {
        return isa.optional.boolean(null);
      }), true);
      this.eq((Ωit__65 = function() {
        return isa.optional.boolean(1);
      }), false);
      this.eq((Ωit__66 = function() {
        return isa.optional.unknown(1);
      }), false);
      this.eq((Ωit__67 = function() {
        return isa.optional.unknown(2e308);
      }), true);
      this.eq((Ωit__68 = function() {
        return isa.optional.unknown(void 0);
      }), true);
      this.eq((Ωit__69 = function() {
        return isa.optional.unknown(void 0);
      }), true);
      //.........................................................................................................
      this.eq((Ωit__70 = function() {
        return validate.boolean(false);
      }), false);
      this.eq((Ωit__71 = function() {
        return validate.boolean(true);
      }), true);
      this.eq((Ωit__72 = function() {
        return validate.optional.boolean(true);
      }), true);
      this.eq((Ωit__73 = function() {
        return validate.optional.boolean(false);
      }), false);
      this.eq((Ωit__74 = function() {
        return validate.optional.boolean(void 0);
      }), void 0);
      this.eq((Ωit__75 = function() {
        return validate.optional.boolean(null);
      }), null);
      this.throws((Ωit__76 = function() {
        return validate.boolean(1);
      }), /expected a boolean/);
      this.throws((Ωit__77 = function() {
        return validate.optional.boolean(1);
      }), /expected an optional boolean/);
      //.........................................................................................................
      this.eq((Ωit__78 = function() {
        return type_of(null);
      }), 'null');
      this.eq((Ωit__79 = function() {
        return type_of(void 0);
      }), 'undefined');
      this.eq((Ωit__80 = function() {
        return type_of(false);
      }), 'boolean');
      this.eq((Ωit__81 = function() {
        return type_of(Symbol('p'));
      }), 'symbol');
      this.eq((Ωit__82 = function() {
        return type_of({});
      }), 'object');
      this.eq((Ωit__83 = function() {
        return type_of(0/0);
      }), 'unknown');
      this.eq((Ωit__84 = function() {
        return type_of(+2e308);
      }), 'unknown');
      this.eq((Ωit__85 = function() {
        return type_of(-2e308);
      }), 'unknown');
      //.........................................................................................................
      this.eq((Ωit__86 = function() {
        return isa.asyncfunction.name;
      }), 'isa.asyncfunction');
      this.eq((Ωit__87 = function() {
        return isa.optional.asyncfunction.name;
      }), 'isa.optional.asyncfunction');
      this.eq((Ωit__88 = function() {
        return validate.asyncfunction.name;
      }), 'validate.asyncfunction');
      this.eq((Ωit__89 = function() {
        return validate.optional.asyncfunction.name;
      }), 'validate.optional.asyncfunction');
      //.........................................................................................................
      this.throws((Ωit__90 = function() {
        return isa.float(3, 4);
      }), /method 'isa.float' expects 1 arguments, got 2/);
      this.throws((Ωit__91 = function() {
        return isa.float();
      }), /method 'isa.float' expects 1 arguments, got 0/);
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    methods_check_arity: function() {
      var INTERTYPE, isa, type_of, validate, Ωit_100, Ωit_101, Ωit__92, Ωit__93, Ωit__94, Ωit__95, Ωit__96, Ωit__97, Ωit__98, Ωit__99;
      INTERTYPE = require('../../../apps/intertype');
      ({isa, validate, type_of} = new INTERTYPE.Intertype_minimal(sample_declarations));
      //.........................................................................................................
      this.throws((Ωit__92 = function() {
        return isa.float(3, 4);
      }), /method 'isa.float' expects 1 arguments, got 2/);
      this.throws((Ωit__93 = function() {
        return isa.float();
      }), /method 'isa.float' expects 1 arguments, got 0/);
      this.throws((Ωit__94 = function() {
        return isa.optional.float(3, 4);
      }), /method 'isa.optional.float' expects 1 arguments, got 2/);
      this.throws((Ωit__95 = function() {
        return isa.optional.float();
      }), /method 'isa.optional.float' expects 1 arguments, got 0/);
      this.throws((Ωit__96 = function() {
        return validate.float(3, 4);
      }), /method 'validate.float' expects 1 arguments, got 2/);
      this.throws((Ωit__97 = function() {
        return validate.float();
      }), /method 'validate.float' expects 1 arguments, got 0/);
      this.throws((Ωit__98 = function() {
        return validate.optional.float(3, 4);
      }), /method 'validate.optional.float' expects 1 arguments, got 2/);
      this.throws((Ωit__99 = function() {
        return validate.optional.float();
      }), /method 'validate.optional.float' expects 1 arguments, got 0/);
      this.throws((Ωit_100 = function() {
        return type_of(3, 4);
      }), /expected 1 arguments, got 2/);
      this.throws((Ωit_101 = function() {
        return type_of();
      }), /expected 1 arguments, got 0/);
      //.........................................................................................................
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    same_basic_types: function() {
      var $function, asyncfunction, asyncgenerator, asyncgeneratorfunction, boolean, generator, generatorfunction, isa, symbol, type_of, validate, Ωit_102, Ωit_103, Ωit_104, Ωit_105, Ωit_106, Ωit_107, Ωit_108, Ωit_109, Ωit_110, Ωit_111, Ωit_112, Ωit_113, Ωit_114, Ωit_115, Ωit_116, Ωit_117, Ωit_118, Ωit_119, Ωit_120, Ωit_121, Ωit_122, Ωit_123, Ωit_124, Ωit_125;
      ({isa, validate, type_of} = require('../../../apps/intertype'));
      //.........................................................................................................
      boolean = false;
      $function = function() {};
      asyncfunction = async function() {
        return (await null);
      };
      generatorfunction = (function*() {
        return (yield null);
      });
      generator = (function*() {
        return (yield null);
      })();
      asyncgeneratorfunction = (async function*() {
        return (yield (await null));
      });
      asyncgenerator = (async function*() {
        return (yield (await null));
      })();
      symbol = Symbol('what');
      //.........................................................................................................
      this.eq((Ωit_102 = function() {
        return isa.boolean(boolean);
      }), true);
      this.eq((Ωit_103 = function() {
        return isa.function($function);
      }), true);
      this.eq((Ωit_104 = function() {
        return isa.asyncfunction(asyncfunction);
      }), true);
      this.eq((Ωit_105 = function() {
        return isa.generatorfunction(generatorfunction);
      }), true);
      this.eq((Ωit_106 = function() {
        return isa.asyncgeneratorfunction(asyncgeneratorfunction);
      }), true);
      this.eq((Ωit_107 = function() {
        return isa.asyncgenerator(asyncgenerator);
      }), true);
      this.eq((Ωit_108 = function() {
        return isa.generator(generator);
      }), true);
      this.eq((Ωit_109 = function() {
        return isa.symbol(symbol);
      }), true);
      //.........................................................................................................
      this.eq((Ωit_110 = function() {
        return validate.boolean(boolean);
      }), boolean);
      this.eq((Ωit_111 = function() {
        return validate.function($function);
      }), $function);
      this.eq((Ωit_112 = function() {
        return validate.asyncfunction(asyncfunction);
      }), asyncfunction);
      this.eq((Ωit_113 = function() {
        return validate.generatorfunction(generatorfunction);
      }), generatorfunction);
      this.eq((Ωit_114 = function() {
        return validate.asyncgeneratorfunction(asyncgeneratorfunction);
      }), asyncgeneratorfunction);
      this.eq((Ωit_115 = function() {
        return validate.asyncgenerator(asyncgenerator);
      }), asyncgenerator);
      this.eq((Ωit_116 = function() {
        return validate.generator(generator);
      }), generator);
      this.eq((Ωit_117 = function() {
        return validate.symbol(symbol);
      }), symbol);
      //.........................................................................................................
      this.eq((Ωit_118 = function() {
        return type_of(boolean);
      }), 'boolean');
      this.eq((Ωit_119 = function() {
        return type_of($function);
      }), 'function');
      this.eq((Ωit_120 = function() {
        return type_of(asyncfunction);
      }), 'asyncfunction');
      this.eq((Ωit_121 = function() {
        return type_of(generatorfunction);
      }), 'generatorfunction');
      this.eq((Ωit_122 = function() {
        return type_of(asyncgeneratorfunction);
      }), 'asyncgeneratorfunction');
      this.eq((Ωit_123 = function() {
        return type_of(asyncgenerator);
      }), 'asyncgenerator');
      this.eq((Ωit_124 = function() {
        return type_of(generator);
      }), 'generator');
      this.eq((Ωit_125 = function() {
        return type_of(symbol);
      }), 'symbol');
      //.........................................................................................................
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    throw_instructive_error_on_missing_type: function() {
      var INTERTYPE, isa, type_of, validate, Ωit_126, Ωit_127, Ωit_128, Ωit_129, Ωit_130, Ωit_131, Ωit_132, Ωit_133, Ωit_134, Ωit_135, Ωit_136, Ωit_137, Ωit_138, Ωit_139, Ωit_140, Ωit_141;
      INTERTYPE = require('../../../apps/intertype');
      ({isa, validate, type_of} = new INTERTYPE.Intertype());
      //.........................................................................................................
      this.throws((Ωit_126 = function() {
        return isa.quux;
      }), /unknown type 'quux'/);
      this.throws((Ωit_127 = function() {
        return isa.quux();
      }), /unknown type 'quux'/);
      this.throws((Ωit_128 = function() {
        return isa.quux(3);
      }), /unknown type 'quux'/);
      this.throws((Ωit_129 = function() {
        return isa.quux(3, 4);
      }), /unknown type 'quux'/);
      this.throws((Ωit_130 = function() {
        return isa.optional.quux;
      }), /unknown type 'quux'/);
      this.throws((Ωit_131 = function() {
        return isa.optional.quux();
      }), /unknown type 'quux'/);
      this.throws((Ωit_132 = function() {
        return isa.optional.quux(3);
      }), /unknown type 'quux'/);
      this.throws((Ωit_133 = function() {
        return isa.optional.quux(3, 4);
      }), /unknown type 'quux'/);
      this.throws((Ωit_134 = function() {
        return validate.quux;
      }), /unknown type 'quux'/);
      this.throws((Ωit_135 = function() {
        return validate.quux();
      }), /unknown type 'quux'/);
      this.throws((Ωit_136 = function() {
        return validate.quux(3);
      }), /unknown type 'quux'/);
      this.throws((Ωit_137 = function() {
        return validate.quux(3, 4);
      }), /unknown type 'quux'/);
      this.throws((Ωit_138 = function() {
        return validate.optional.quux;
      }), /unknown type 'quux'/);
      this.throws((Ωit_139 = function() {
        return validate.optional.quux();
      }), /unknown type 'quux'/);
      this.throws((Ωit_140 = function() {
        return validate.optional.quux(3);
      }), /unknown type 'quux'/);
      this.throws((Ωit_141 = function() {
        return validate.optional.quux(3, 4);
      }), /unknown type 'quux'/);
      //.........................................................................................................
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    throw_instructive_error_when_optional_is_declared: function() {
      var INTERTYPE, Ωit_142;
      INTERTYPE = require('../../../apps/intertype');
      this.throws((Ωit_142 = function() {
        return new INTERTYPE.Intertype_minimal({
          optional: (function(x) {
            return true;
          })
        });
      }), /not allowed to re-declare type 'optional'/);
      //.........................................................................................................
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    throw_instructive_error_when_wrong_type_of_isa_test_declared: function() {
      var Intertype, Ωit_143, Ωit_144, Ωit_145, Ωit_146, Ωit_147, Ωit_148, Ωit_149, Ωit_150, Ωit_151, Ωit_152;
      ({Intertype} = require('../../../apps/intertype'));
      //.........................................................................................................
      this.throws((Ωit_143 = function() {
        return new Intertype({
          foo: (function() {})
        });
      }), /expected function with 1 parameters, got one with 0/);
      this.throws((Ωit_144 = function() {
        return new Intertype({
          foo: (function(a, b) {})
        });
      }), /expected function with 1 parameters, got one with 2/);
      this.throws((Ωit_145 = function() {
        return new Intertype({
          foo: true
        });
      }), /expected type name, method, or object to indicate test method, got a boolean/);
      this.throws((Ωit_146 = function() {
        return new Intertype({
          foo: void 0
        });
      }), /expected type name, method, or object to indicate test method, got a undefined/);
      this.throws((Ωit_147 = function() {
        return new Intertype({
          foo: null
        });
      }), /expected type name, method, or object to indicate test method, got a null/);
      this.throws((Ωit_148 = function() {
        return new Intertype({
          foo: {}
        });
      }), /expected type name, method, or object to indicate test method, got a undefined/);
      this.throws((Ωit_149 = function() {
        return new Intertype({
          foo: {
            test: null
          }
        });
      }), /expected type name, method, or object to indicate test method, got a null/);
      this.throws((Ωit_150 = function() {
        return new Intertype({
          foo: {
            test: false
          }
        });
      }), /expected type name, method, or object to indicate test method, got a boolean/);
      this.throws((Ωit_151 = function() {
        return new Intertype({
          foo: {
            test: (function(a, b) {})
          }
        });
      }), /expected function with 1 parameters, got one with 2/);
      this.throws((Ωit_152 = function() {
        return new Intertype({
          foo: 'quux'
        });
      }), /unknown type 'quux'/);
      //.........................................................................................................
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    allow_declaration_objects: function() {
      var Intertype_minimal;
      ({Intertype_minimal} = require('../../../apps/intertype'));
      (() => {        //.........................................................................................................
        var declarations, types, Ωit_153, Ωit_154, Ωit_155, Ωit_156;
        declarations = {...sample_declarations};
        declarations.integer = {
          test: function(x) {
            return Number.isInteger(x);
          },
          template: 0
        };
        types = new Intertype_minimal(declarations);
        this.eq((Ωit_153 = function() {
          return TMP_types.isa.function(types.isa.integer);
        }), true);
        this.eq((Ωit_154 = function() {
          return types.isa.integer.length;
        }), 1);
        this.eq((Ωit_155 = function() {
          return types.isa.integer(123);
        }), true);
        this.eq((Ωit_156 = function() {
          return types.isa.integer(123.456);
        }), false);
        return null;
      })();
      //.........................................................................................................
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    create_entries_must_be_sync_functions: function() {
      var Intertype_minimal;
      ({Intertype_minimal} = require('../../../apps/intertype'));
      (() => {        //.........................................................................................................
        var declarations, Ωit_157;
        declarations = {...sample_declarations};
        declarations.integer = {
          test: function(x) {
            return Number.isInteger(x);
          },
          create: async function() {
            return (await 0);
          }
        };
        this.throws((Ωit_157 = function() {
          return new Intertype_minimal(declarations);
        }), /expected a function for `create` entry of type 'integer', got a asyncfunction/);
        return null;
      })();
      //.........................................................................................................
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    template_methods_must_be_nullary: function() {
      var Intertype_minimal;
      ({Intertype_minimal} = require('../../../apps/intertype'));
      (() => {        //.........................................................................................................
        var declarations, Ωit_158;
        declarations = {...sample_declarations};
        declarations.foolist = {
          test: function(x) {
            return true;
          },
          template: function(n) {
            return [n];
          }
        };
        this.throws((Ωit_158 = function() {
          return new Intertype_minimal(declarations);
        }), /template method for type 'foolist' has arity 1 but must be nullary/);
        return null;
      })();
      //.........................................................................................................
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    intertype_knows_its_base_types: function() {
      var isa, Ωit_159, Ωit_160, Ωit_161, Ωit_162, Ωit_163, Ωit_164, Ωit_165, Ωit_166, Ωit_167, Ωit_168, Ωit_169, Ωit_170, Ωit_171, Ωit_172, Ωit_173;
      ({isa} = require('../../../apps/intertype'));
      //.........................................................................................................
      this.eq((Ωit_159 = function() {
        return isa.basetype('optional');
      }), false);
      this.eq((Ωit_160 = function() {
        return isa.basetype('anything');
      }), true);
      this.eq((Ωit_161 = function() {
        return isa.basetype('nothing');
      }), true);
      this.eq((Ωit_162 = function() {
        return isa.basetype('something');
      }), true);
      this.eq((Ωit_163 = function() {
        return isa.basetype('null');
      }), true);
      this.eq((Ωit_164 = function() {
        return isa.basetype('undefined');
      }), true);
      this.eq((Ωit_165 = function() {
        return isa.basetype('unknown');
      }), true);
      this.eq((Ωit_166 = function() {
        return isa.basetype('integer');
      }), false);
      this.eq((Ωit_167 = function() {
        return isa.basetype('float');
      }), false);
      this.eq((Ωit_168 = function() {
        return isa.basetype('basetype');
      }), false);
      this.eq((Ωit_169 = function() {
        return isa.basetype('quux');
      }), false);
      this.eq((Ωit_170 = function() {
        return isa.basetype('toString');
      }), false);
      this.eq((Ωit_171 = function() {
        return isa.basetype(null);
      }), false);
      this.eq((Ωit_172 = function() {
        return isa.basetype(void 0);
      }), false);
      this.eq((Ωit_173 = function() {
        return isa.basetype(4);
      }), false);
      //.........................................................................................................
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    disallow_licensed_overrides: function() {
      var Intertype;
      ({Intertype} = require('../../../apps/intertype'));
      (() => {        //.........................................................................................................
        var overrides, types, Ωit_174, Ωit_175, Ωit_176, Ωit_177;
        types = new Intertype();
        this.eq((Ωit_174 = function() {
          return types.isa.float(4);
        }), true);
        //.......................................................................................................
        overrides = {
          float: {
            test: function(x) {
              return x === 'float';
            }
          }
        };
        this.throws((Ωit_175 = function() {
          return types.declare(overrides);
        }), /not allowed to re-declare type 'float'/);
        //.......................................................................................................
        /* pre-existing declaration remains valid: */
        this.eq((Ωit_176 = function() {
          return types.isa.float(4);
        }), true);
        this.eq((Ωit_177 = function() {
          return types.isa.float('float');
        }), false);
        return null;
      })();
      (() => {        //.........................................................................................................
        var overrides, types, Ωit_178, Ωit_179;
        types = new Intertype();
        this.eq((Ωit_178 = function() {
          return types.isa.float(4);
        }), true);
        //.......................................................................................................
        overrides = {
          float: {
            override: true,
            test: function(x) {
              return x === 'float';
            }
          }
        };
        this.throws((Ωit_179 = function() {
          return types.declare(overrides);
        }), /not allowed to re-declare type 'float'/);
        return null;
      })();
      (() => {        //.........................................................................................................
        var overrides, types, Ωit_180, Ωit_181, Ωit_182, Ωit_183;
        types = new Intertype();
        this.eq((Ωit_180 = function() {
          return types.isa.float(4);
        }), true);
        //.......................................................................................................
        overrides = {
          anything: {
            override: true,
            test: function(x) {
              return true;
            }
          }
        };
        this.throws((Ωit_181 = function() {
          return types.declare(overrides);
        }), /not allowed to re-declare basetype 'anything'/);
        //.......................................................................................................
        /* pre-existing declaration remains valid: */
        this.eq((Ωit_182 = function() {
          return types.isa.anything(4);
        }), true);
        this.eq((Ωit_183 = function() {
          return types.isa.anything('float');
        }), true);
        return null;
      })();
      //.........................................................................................................
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    can_create_types_with_templates_and_create: function() {
      var Intertype, Intertype_minimal;
      ({Intertype, Intertype_minimal} = require('../../../apps/intertype'));
      (() => {        //.........................................................................................................
        var declarations, types, Ωit_184, Ωit_185, Ωit_186, Ωit_187, Ωit_188, Ωit_189, Ωit_190, Ωit_191, Ωit_192, Ωit_193;
        declarations = {...sample_declarations};
        declarations.integer = {
          test: function(x) {
            return Number.isInteger(x);
          },
          template: 0
        };
        declarations.text = {
          template: '',
          test: (function(x) {
            return (typeof x) === 'string';
          })
        };
        declarations.float = {
          test: function(x) {
            return Number.isFinite(x);
          },
          create: function(p = null) {
            return parseFloat(p != null ? p : this.declarations.float.template);
          },
          template: 0
        };
        declarations.nan = function(x) {
          return Number.isNaN(x);
        };
        //.......................................................................................................
        types = new Intertype_minimal(declarations);
        this.eq((Ωit_184 = function() {
          return TMP_types.isa.object(types.declarations);
        }), true);
        this.eq((Ωit_185 = function() {
          return TMP_types.isa.object(types.declarations.float);
        }), true);
        this.eq((Ωit_186 = function() {
          return TMP_types.isa.object(types.declarations.text);
        }), true);
        //.......................................................................................................
        this.throws((Ωit_187 = function() {
          return types.create.boolean();
        }), /type declaration of 'boolean' has no `create` and no `template` entries, cannot be created/);
        this.throws((Ωit_188 = function() {
          return types.create.text('foo');
        }), /expected 0 arguments, got 1/);
        //.......................................................................................................
        this.eq((Ωit_189 = function() {
          return types.create.text();
        }), '');
        this.eq((Ωit_190 = function() {
          return types.create.integer();
        }), 0);
        this.eq((Ωit_191 = function() {
          return types.create.float();
        }), 0);
        this.eq((Ωit_192 = function() {
          return types.create.float('123.45');
        }), 123.45);
        this.throws((Ωit_193 = function() {
          return types.create.float('***');
        }), /these arguments are not suitable for `create.float\(\)`: '\*\*\*'/);
        //.......................................................................................................
        return null;
      })();
      (() => {        //.........................................................................................................
        var create, declarations, isa, validate, Ωit_194;
        declarations = {
          quantity: {
            test: 'object',
            template: {
              q: 0,
              u: 'u'
            }
          },
          'quantity.q': 'float',
          'quantity.u': 'text'
        };
        ({isa, validate, create} = new Intertype(declarations));
        this.eq((Ωit_194 = function() {
          return create.quantity();
        }), {
          q: 0,
          u: 'u'
        });
        return null;
      })();
      (() => {        //.........................................................................................................
        var create, declarations, isa, validate, Ωit_195, Ωit_196, Ωit_197, Ωit_198;
        declarations = {
          quantity: {
            test: 'object',
            template: {
              q: 0,
              u: 'u'
            },
            fields: {
              q: 'float',
              u: 'text'
            }
          }
        };
        ({isa, validate, create} = new Intertype(declarations));
        this.eq((Ωit_195 = function() {
          return create.quantity();
        }), {
          q: 0,
          u: 'u'
        });
        this.eq((Ωit_196 = function() {
          return create.quantity({
            q: 123
          });
        }), {
          q: 123,
          u: 'u'
        });
        this.eq((Ωit_197 = function() {
          return create.quantity({
            u: 'kg'
          });
        }), {
          q: 0,
          u: 'kg'
        });
        this.eq((Ωit_198 = function() {
          return create.quantity({
            u: 'kg',
            foo: 'bar'
          });
        }), {
          q: 0,
          u: 'kg',
          foo: 'bar'
        });
        return null;
      })();
      //.........................................................................................................
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    builtin_types_support_create: function() {
      var Intertype;
      ({Intertype} = require('../../../apps/intertype'));
      (() => {        //.........................................................................................................
        var create, type_of, types, Ωit_199, Ωit_200, Ωit_201, Ωit_202, Ωit_203, Ωit_204, Ωit_205, Ωit_206, Ωit_207, Ωit_208, Ωit_209, Ωit_210;
        types = new Intertype();
        ({create, type_of} = types);
        this.eq((Ωit_199 = function() {
          return create.float();
        }), 0);
        this.eq((Ωit_200 = function() {
          return create.boolean();
        }), false);
        this.eq((Ωit_201 = function() {
          return create.object();
        }), {});
        this.eq((Ωit_202 = function() {
          return create.float();
        }), 0);
        this.eq((Ωit_203 = function() {
          return create.infinity();
        }), 2e308);
        this.eq((Ωit_204 = function() {
          return create.text();
        }), '');
        this.eq((Ωit_205 = function() {
          return create.list();
        }), []);
        this.eq((Ωit_206 = function() {
          return create.regex();
        }), new RegExp());
        this.eq((Ωit_207 = function() {
          return type_of(create.function());
        }), 'function');
        this.eq((Ωit_208 = function() {
          return type_of(create.asyncfunction());
        }), 'asyncfunction');
        this.eq((Ωit_209 = function() {
          return type_of(create.symbol());
        }), 'symbol');
        this.throws((Ωit_210 = function() {
          return create.basetype();
        }), /type declaration of 'basetype' has no `create` and no `template` entries, cannot be created/);
        return null;
      })();
      //.........................................................................................................
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    template_functions_are_called_in_template_fields: function() {
      var Intertype;
      ({Intertype} = require('../../../apps/intertype'));
      (() => {        //.........................................................................................................
        var create, declarations, declare, isa, type_of, types, Ωit_211, Ωit_212, Ωit_213, Ωit_214;
        types = new Intertype();
        ({declare, create, isa, type_of, declarations} = types);
        declare({
          quantity: {
            test: 'object',
            fields: {
              q: 'float',
              u: 'text'
            },
            template: {
              q: function() {
                return this.create.float();
              },
              u: function() {
                return 'u';
              }
            }
          }
        });
        debug('^3234^', create.quantity());
        debug('^3234^', declarations.quantity);
        this.eq((Ωit_211 = function() {
          return create.quantity();
        }), {
          q: 0,
          u: 'u'
        });
        this.eq((Ωit_212 = function() {
          return isa.quantity({
            q: 9
          });
        }), false);
        this.eq((Ωit_213 = function() {
          return type_of(declarations.quantity.sub_tests.q);
        }), 'function');
        this.eq((Ωit_214 = function() {
          return type_of(declarations.quantity.sub_tests.u);
        }), 'function');
        return null;
      })();
      (() => {        //.........................................................................................................
        var create, declare, type_of, types, Ωit_215;
        types = new Intertype();
        ({declare, create, type_of} = types);
        declare({
          foo: {
            test: 'object',
            fields: {
              foo: {
                test: 'object',
                fields: {
                  bar: {
                    test: 'float'
                  }
                }
              }
            },
            template: {
              foo: {
                bar: 123
              }
            }
          }
        });
        debug('^3234^', create.foo());
        this.eq((Ωit_215 = function() {
          return create.foo();
        }), {
          foo: {
            bar: 123
          }
        });
        return null;
      })();
      //.........................................................................................................
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    type_object_assumed_if_fields_present: function() {
      var Intertype;
      ({Intertype} = require('../../../apps/intertype'));
      (() => {        //.........................................................................................................
        var create, declarations, declare, isa, type_of, types, Ωit_216, Ωit_217, Ωit_218, Ωit_219, Ωit_220;
        types = new Intertype();
        ({declare, declarations, create, type_of, isa} = types);
        declare({
          quantity: {
            // test: 'object'
            fields: {
              q: 'float',
              u: 'text'
            }
          }
        });
        this.eq((Ωit_216 = function() {
          return type_of(declarations.quantity.test);
        }), 'function');
        debug('^342342^', declarations.quantity);
        this.eq((Ωit_217 = function() {
          return type_of(declarations.quantity.sub_tests.q);
        }), 'function');
        this.eq((Ωit_218 = function() {
          return type_of(declarations.quantity.sub_tests.u);
        }), 'function');
        this.eq((Ωit_219 = function() {
          return isa.quantity({
            q: 987,
            u: 's'
          });
        }), true);
        this.eq((Ωit_220 = function() {
          return isa.quantity({
            q: 987
          });
        }), false);
        return null;
      })();
      //.........................................................................................................
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    intertype_minimal_has_only_base_types: function() {
      var Intertype_minimal, types, Ωit_221, Ωit_222;
      ({Intertype_minimal} = require('../../../apps/intertype'));
      types = new Intertype_minimal();
      this.eq((Ωit_221 = function() {
        return (Object.keys(types.declarations)).sort();
      }), ['anything', 'nothing', 'null', 'optional', 'something', 'undefined', 'unknown']);
      types.declare({
        z: (function(x) {})
      });
      this.eq((Ωit_222 = function() {
        return (Object.keys(types.declarations)).sort();
      }), ['anything', 'nothing', 'null', 'optional', 'something', 'undefined', 'unknown', 'z']);
      //.........................................................................................................
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    can_use_type_name_for_test: function() {
      var Intertype;
      ({Intertype} = require('../../../apps/intertype'));
      (() => {        //.........................................................................................................
        var types, Ωit_223, Ωit_224, Ωit_225, Ωit_226, Ωit_227, Ωit_228, Ωit_229, Ωit_230;
        types = new Intertype();
        this.throws((Ωit_223 = function() {
          return types.declare({
            z: 'quux'
          });
        }), /unknown type 'quux'/);
        types.declare({
          z: 'float'
        });
        this.eq((Ωit_224 = function() {
          return types.isa.z(12);
        }), true);
        this.eq((Ωit_225 = function() {
          return types.isa.float.name;
        }), 'isa.float');
        this.eq((Ωit_226 = function() {
          return types.declarations.float.type;
        }), 'float');
        this.eq((Ωit_227 = function() {
          return types.declarations.float.test.name;
        }), 'float');
        this.eq((Ωit_228 = function() {
          return types.isa.z.name;
        }), 'isa.z');
        this.eq((Ωit_229 = function() {
          return types.declarations.z.type;
        }), 'z');
        return this.eq((Ωit_230 = function() {
          return types.declarations.z.test.name;
        }), 'z'); // ?
      })();
      (() => {        //.........................................................................................................
        var types, Ωit_231, Ωit_232, Ωit_233, Ωit_234, Ωit_235, Ωit_236, Ωit_237, Ωit_238;
        types = new Intertype();
        this.throws((Ωit_231 = function() {
          return types.declare({
            z: {
              test: 'quux'
            }
          });
        }), /unknown type 'quux'/);
        types.declare({
          z: {
            test: 'float'
          }
        });
        this.eq((Ωit_232 = function() {
          return types.isa.z(12);
        }), true);
        this.eq((Ωit_233 = function() {
          return types.isa.float.name;
        }), 'isa.float');
        this.eq((Ωit_234 = function() {
          return types.declarations.float.type;
        }), 'float');
        this.eq((Ωit_235 = function() {
          return types.declarations.float.test.name;
        }), 'float');
        this.eq((Ωit_236 = function() {
          return types.isa.z.name;
        }), 'isa.z');
        this.eq((Ωit_237 = function() {
          return types.declarations.z.type;
        }), 'z');
        return this.eq((Ωit_238 = function() {
          return types.declarations.z.test.name;
        }), 'z');
      })();
      //.........................................................................................................
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    resolve_dotted_type: function() {
      var Intertype;
      ({Intertype} = require('../../../apps/intertype'));
      (() => {        //.........................................................................................................
        var types, Ωit_239, Ωit_240, Ωit_241, Ωit_242, Ωit_243, Ωit_244, Ωit_245, Ωit_246, Ωit_247;
        types = new Intertype();
        this.eq((Ωit_239 = function() {
          return Reflect.has(types.declarations, 'foo');
        }), false);
        types.declare({
          foo: 'object'
        });
        this.eq((Ωit_240 = function() {
          return Reflect.has(types.declarations, 'foo');
        }), true);
        this.eq((Ωit_241 = function() {
          return Reflect.has(types.declarations, 'foo.bar');
        }), false);
        types.declare({
          'foo.bar': 'object'
        });
        this.eq((Ωit_242 = function() {
          return Reflect.has(types.declarations, 'foo.bar');
        }), true);
        this.eq((Ωit_243 = function() {
          return Reflect.has(types.declarations, 'foo.bar.baz');
        }), false);
        types.declare({
          'foo.bar.baz': 'float'
        });
        this.eq((Ωit_244 = function() {
          return Reflect.has(types.declarations, 'foo.bar.baz');
        }), true);
        this.eq((Ωit_245 = function() {
          return types.isa.foo.bar.baz(null);
        }), false);
        this.eq((Ωit_246 = function() {
          return types.isa.foo.bar.baz(4);
        }), true);
        this.eq((Ωit_247 = function() {
          return types.isa.foo.bar.baz(+2e308);
        }), false);
        // T?.eq types.declarations[ 'foo.bar.baz' ].test, types.declarations.float.test
        // types.declare { 'foo.bar.baz.quux.dax.dux': 'float', }
        return null;
      })();
      //.........................................................................................................
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    dotted_types_are_test_methods: function() {
      var Intertype;
      ({Intertype} = require('../../../apps/intertype'));
      (() => {        //.........................................................................................................
        var types, Ωit_248, Ωit_249, Ωit_250, Ωit_251, Ωit_252, Ωit_253, Ωit_254, Ωit_255, Ωit_256, Ωit_257, Ωit_258, Ωit_259;
        types = new Intertype();
        types.declare({
          quantity: 'object'
        });
        types.declare({
          'quantity.q': 'float'
        });
        types.declare({
          'quantity.u': 'text'
        });
        this.eq((Ωit_248 = function() {
          return types.isa['quantity.q'];
        }), types.declarations['quantity'].sub_tests['q']);
        this.eq((Ωit_249 = function() {
          return types.isa['quantity.q'];
        }), types.isa.quantity.q);
        // debug '^409-1^', types.declarations
        this.eq((Ωit_250 = function() {
          return types.isa.quantity({});
        }), false);
        this.eq((Ωit_251 = function() {
          return types.isa.quantity({
            q: {}
          });
        }), false);
        this.eq((Ωit_252 = function() {
          return types.isa.quantity({
            q: 3
          });
        }), false);
        this.eq((Ωit_253 = function() {
          return types.isa.quantity({
            q: 3,
            u: 'm'
          });
        }), true);
        this.eq((Ωit_254 = function() {
          return types.isa.quantity.q(3);
        }), true);
        this.eq((Ωit_255 = function() {
          return types.isa.quantity.q(3.1);
        }), true);
        this.eq((Ωit_256 = function() {
          return types.isa.quantity.q('3.1');
        }), false);
        this.eq((Ωit_257 = function() {
          return types.isa.quantity.u('m');
        }), true);
        this.eq((Ωit_258 = function() {
          return types.isa.quantity.u(null);
        }), false);
        this.eq((Ωit_259 = function() {
          return types.isa.quantity.u(3);
        }), false);
        debug('^433-1^', types.declarations['quantity']);
        debug('^433-1^', types.declarations['quantity.q']);
        debug('^433-1^', types.declarations['quantity.u']);
        return null;
      })();
      (() => {        //.........................................................................................................
        var f, k, types, Ωit_260, Ωit_261, Ωit_262, Ωit_263, Ωit_264, Ωit_265, Ωit_266, Ωit_267, Ωit_268, Ωit_269, Ωit_270, Ωit_271, Ωit_272, Ωit_273, Ωit_274, Ωit_275, Ωit_276;
        types = new Intertype();
        types.declare({
          'person': 'object'
        });
        types.declare({
          'person.name': 'text'
        });
        types.declare({
          'person.address': 'object'
        });
        types.declare({
          'person.address.city': 'object'
        });
        types.declare({
          'person.address.city.name': 'text'
        });
        types.declare({
          'person.address.city.postcode': 'text'
        });
        // T?.eq types.isa[ 'quantity.q' ], types.declarations[ 'quantity' ].sub_tests[ 'q' ]
        // T?.eq types.isa[ 'quantity.q' ], types.isa.quantity.q
        this.eq((Ωit_260 = function() {
          return types.isa.person.address.city.name('P');
        }), true);
        this.eq((Ωit_261 = function() {
          return types.isa.person.address.city.name(1234);
        }), false);
        this.eq((Ωit_262 = function() {
          return types.isa.person(1234);
        }), false);
        this.eq((Ωit_263 = function() {
          return types.isa.person({
            name: 'Bob'
          });
        }), false);
        this.eq((Ωit_264 = function() {
          return types.isa.person({
            name: 'Bob',
            address: {}
          });
        }), false);
        this.eq((Ωit_265 = function() {
          return types.isa.person({
            name: 'Bob',
            address: {
              city: {}
            }
          });
        }), false);
        this.eq((Ωit_266 = function() {
          return types.isa.person({
            name: 'Bob',
            address: {
              city: {
                name: 'P'
              }
            }
          });
        }), false);
        this.eq((Ωit_267 = function() {
          return types.isa.person({
            name: 'Bob',
            address: {
              city: {
                name: 'P',
                postcode: 'SO36'
              }
            }
          });
        }), true);
        this.eq((Ωit_268 = function() {
          return types.isa.person.address.city.name('P');
        }), true);
        this.eq((Ωit_269 = function() {
          return types.isa.person.address.city.postcode('SO36');
        }), true);
        this.eq((Ωit_270 = function() {
          return types.isa.person.address.city({
            name: 'P',
            postcode: 'SO36'
          });
        }), true);
        this.eq((Ωit_271 = function() {
          return types.isa.person.address({
            city: {
              name: 'P',
              postcode: 'SO36'
            }
          });
        }), true);
        help('^322-1^', (function() {
          var ref, results;
          ref = types.declarations['person'].sub_tests;
          results = [];
          for (k in ref) {
            f = ref[k];
            results.push({
              [`${k}`]: f.name
            });
          }
          return results;
        })());
        help('^322-2^', (function() {
          var ref, results;
          ref = types.declarations['person.address'].sub_tests;
          results = [];
          for (k in ref) {
            f = ref[k];
            results.push({
              [`${k}`]: f.name
            });
          }
          return results;
        })());
        help('^322-3^', (function() {
          var ref, results;
          ref = types.declarations['person.address.city'].sub_tests;
          results = [];
          for (k in ref) {
            f = ref[k];
            results.push({
              [`${k}`]: f.name
            });
          }
          return results;
        })());
        this.eq((Ωit_272 = function() {
          return Object.keys(types.declarations['person'].sub_tests);
        }), ['name', 'address']);
        this.eq((Ωit_273 = function() {
          return Object.keys(types.declarations['person.address'].sub_tests);
        }), ['city']);
        this.eq((Ωit_274 = function() {
          return Object.keys(types.declarations['person.address.city'].sub_tests);
        }), ['name', 'postcode']);
        this.eq((Ωit_275 = function() {
          return types.declarations['person'].sub_tests !== types.declarations['person.address'].sub_tests;
        }), true);
        this.eq((Ωit_276 = function() {
          return types.declarations['person'].sub_tests !== types.declarations['person.address.city'].sub_tests;
        }), true);
        return null;
      })();
      (() => {        //.........................................................................................................
        var types;
        types = new Intertype();
        types.declare({
          'foo': 'float'
        });
        types.declare({
          'foo.bar': 'text'
        });
        (() => {
          var d, Ωit_277;
          d = 3;
          // d.bar = '?' # Cannot create property in strict mode, so can never satisfy test
          this.eq((Ωit_277 = function() {
            return types.isa.foo(d);
          }), false);
          return null;
        })();
        (() => {
          var d, Ωit_278, Ωit_279;
          d = new Number(3);
          d.bar = '?';
          this.eq((Ωit_278 = function() {
            return d.bar;
          }), '?');
          // still won't work b/c `float` doesn't accept objects (which is a good thing):
          this.eq((Ωit_279 = function() {
            return types.isa.foo(d);
          }), false);
          return null;
        })();
        return null;
      })();
      (() => {        //.........................................................................................................
        var types, Ωit_280, Ωit_281;
        types = new Intertype();
        types.declare({
          'foo': 'object'
        });
        types.declare({
          'foo.bind': 'float'
        });
        types.declare({
          'foo.apply': 'float'
        });
        types.declare({
          'foo.call': 'float'
        });
        types.declare({
          'foo.name': 'float'
        });
        types.declare({
          'foo.length': 'float'
        });
        this.eq((Ωit_280 = function() {
          return types.isa.foo({});
        }), false);
        this.eq((Ωit_281 = function() {
          return types.isa.foo({
            bind: 1,
            apply: 2,
            call: 3,
            name: 4,
            length: 5
          });
        }), true);
        return null;
      })();
      (() => {        //.........................................................................................................
        var types, Ωit_282, Ωit_283;
        types = new Intertype();
        types.declare({
          'foo': 'object'
        });
        types.declare({
          'foo.text': (function(x) {
            return x === 1;
          })
        });
        types.declare({
          'foo.float': (function(x) {
            return x === 2;
          })
        });
        this.eq((Ωit_282 = function() {
          return types.isa.foo({});
        }), false);
        this.eq((Ωit_283 = function() {
          return types.isa.foo({
            text: 1,
            float: 2
          });
        }), true);
        return null;
      })();
      //.........................................................................................................
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    can_use_refs_to_dotted_types: function() {
      var Intertype;
      ({Intertype} = require('../../../apps/intertype'));
      (() => {        //.........................................................................................................
        var types, Ωit_284, Ωit_285, Ωit_286, Ωit_287, Ωit_288, Ωit_289;
        types = new Intertype();
        types.declare({
          'person': 'object'
        });
        types.declare({
          'person.name': 'text'
        });
        types.declare({
          'person.address': 'object'
        });
        types.declare({
          'person.address.city': 'object'
        });
        types.declare({
          'person.address.city.name': 'text'
        });
        types.declare({
          'person.address.city.postcode': 'text'
        });
        types.declare({
          'mycity': (function(x) {
            return this.isa.person.address.city(x);
          })
        });
        // debug '^434-1^', types.declarations[ 'person.address.city' ]
        // debug '^434-2^', types.declarations.mycity
        urge('^342-1^', types.declarations.mycity);
        this.eq((Ωit_284 = function() {
          return types.isa.person.address.city({});
        }), false);
        this.eq((Ωit_285 = function() {
          return types.isa.person.address.city(null);
        }), false);
        this.eq((Ωit_286 = function() {
          return types.isa.person.address.city({
            name: 'P',
            postcode: 'SO36'
          });
        }), true);
        this.eq((Ωit_287 = function() {
          return types.isa.mycity({});
        }), false);
        this.eq((Ωit_288 = function() {
          return types.isa.mycity(null);
        }), false);
        this.eq((Ωit_289 = function() {
          return types.isa.mycity({
            name: 'P',
            postcode: 'SO36'
          });
        }), true);
        return null;
      })();
      (() => {        //.........................................................................................................
        var types, Ωit_290, Ωit_291, Ωit_292, Ωit_293, Ωit_294, Ωit_295;
        types = new Intertype();
        types.declare({
          'person': 'object'
        });
        types.declare({
          'person.name': 'text'
        });
        types.declare({
          'person.address': 'object'
        });
        types.declare({
          'person.address.city': 'object'
        });
        types.declare({
          'person.address.city.name': 'text'
        });
        types.declare({
          'person.address.city.postcode': 'text'
        });
        types.declare({
          'mycity': 'person.address.city'
        });
        // debug '^434-3^', types.declarations[ 'person.address.city' ]
        // debug '^434-4^', types.declarations.mycity
        urge('^342-2^', types.declarations.mycity);
        this.eq((Ωit_290 = function() {
          return types.isa.person.address.city({});
        }), false);
        this.eq((Ωit_291 = function() {
          return types.isa.person.address.city(null);
        }), false);
        this.eq((Ωit_292 = function() {
          return types.isa.person.address.city({
            name: 'P',
            postcode: 'SO36'
          });
        }), true);
        this.eq((Ωit_293 = function() {
          return types.isa.mycity({});
        }), false);
        this.eq((Ωit_294 = function() {
          return types.isa.mycity(null);
        }), false);
        this.eq((Ωit_295 = function() {
          return types.isa.mycity({
            name: 'P',
            postcode: 'SO36'
          });
        }), true);
        return null;
      })();
      (() => {        //.........................................................................................................
        var types, Ωit_296, Ωit_297, Ωit_298, Ωit_299, Ωit_300, Ωit_301, Ωit_302, Ωit_303, Ωit_304;
        types = new Intertype();
        types.declare({
          'person': 'object'
        });
        types.declare({
          'person.name': 'text'
        });
        types.declare({
          'person.address': 'object'
        });
        types.declare({
          'person.address.city': 'object'
        });
        types.declare({
          'person.address.city.name': 'text'
        });
        types.declare({
          'person.address.city.postcode': 'text'
        });
        types.declare({
          'mycity': (function(x) {
            return this.isa.optional.person.address.city(x);
          })
        });
        // debug '^434-5^', types.declarations[ 'person.address.city' ]
        // debug '^434-6^', types.declarations.mycity
        urge('^342-3^', types.declarations.mycity);
        this.eq((Ωit_296 = function() {
          return types.isa.person.address.city({});
        }), false);
        this.eq((Ωit_297 = function() {
          return types.isa.person.address.city(null);
        }), false);
        this.eq((Ωit_298 = function() {
          return types.isa.person.address.city({
            name: 'P',
            postcode: 'SO36'
          });
        }), true);
        this.eq((Ωit_299 = function() {
          return types.isa.optional.person.address.city({});
        }), false);
        this.eq((Ωit_300 = function() {
          return types.isa.optional.person.address.city(null);
        }), true);
        this.eq((Ωit_301 = function() {
          return types.isa.optional.person.address.city({
            name: 'P',
            postcode: 'SO36'
          });
        }), true);
        this.eq((Ωit_302 = function() {
          return types.isa.mycity({});
        }), false);
        this.eq((Ωit_303 = function() {
          return types.isa.mycity(null);
        }), true);
        this.eq((Ωit_304 = function() {
          return types.isa.mycity({
            name: 'P',
            postcode: 'SO36'
          });
        }), true);
        return null;
      })();
      //.........................................................................................................
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    forbidden_to_define_fields_on_basetypes: async function() {
      var Intertype, declarations;
      ({Intertype, declarations} = require('../../../apps/intertype'));
      await (() => {        //.........................................................................................................
        var declare, isa, types, validate, Ωit_305, Ωit_306, Ωit_307, Ωit_308, Ωit_309, Ωit_310, Ωit_311;
        types = new Intertype();
        ({declare, validate, isa} = types);
        this.throws((Ωit_305 = function() {
          return types.declare({
            'optional.d': (function(x) {})
          });
        }), /illegal use of 'optional' in declaration of type 'optional.d'/);
        this.throws((Ωit_306 = function() {
          return types.declare({
            'anything.d': (function(x) {})
          });
        }), /illegal use of basetype 'anything' in declaration of type 'anything.d'/);
        this.throws((Ωit_307 = function() {
          return types.declare({
            'nothing.d': (function(x) {})
          });
        }), /illegal use of basetype 'nothing' in declaration of type 'nothing.d'/);
        this.throws((Ωit_308 = function() {
          return types.declare({
            'something.d': (function(x) {})
          });
        }), /illegal use of basetype 'something' in declaration of type 'something.d'/);
        this.throws((Ωit_309 = function() {
          return types.declare({
            'null.d': (function(x) {})
          });
        }), /illegal use of basetype 'null' in declaration of type 'null.d'/);
        this.throws((Ωit_310 = function() {
          return types.declare({
            'undefined.d': (function(x) {})
          });
        }), /illegal use of basetype 'undefined' in declaration of type 'undefined.d'/);
        this.throws((Ωit_311 = function() {
          return types.declare({
            'unknown.d': (function(x) {})
          });
        }), /illegal use of basetype 'unknown' in declaration of type 'unknown.d'/);
        return null;
      })();
      //.........................................................................................................
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    internal_type_of_method: function() {
      var Intertype, __type_of, _isa, declaration, declarations, type;
      ({Intertype, declarations, __type_of} = require('../../../apps/intertype'));
      //.........................................................................................................
      _isa = Object.fromEntries((function() {
        var results;
        results = [];
        for (type in declarations) {
          declaration = declarations[type];
          results.push([type, declaration.test]);
        }
        return results;
      })());
      (() => {        //.........................................................................................................
        var types, Ωit_312, Ωit_313, Ωit_314, Ωit_315, Ωit_316, Ωit_317, Ωit_318, Ωit_319, Ωit_320;
        types = new Intertype();
        this.eq((Ωit_312 = function() {
          return __type_of(null, _isa, null);
        }), 'null');
        this.eq((Ωit_313 = function() {
          return __type_of(null, _isa, void 0);
        }), 'undefined');
        this.eq((Ωit_314 = function() {
          return __type_of(null, _isa, 4);
        }), 'float');
        this.eq((Ωit_315 = function() {
          return __type_of(null, _isa, function() {});
        }), 'function');
        this.eq((Ωit_316 = function() {
          return __type_of(null, _isa, async function() {
            return (await null);
          });
        }), 'asyncfunction');
        this.eq((Ωit_317 = function() {
          return __type_of(null, _isa, {});
        }), 'object');
        this.eq((Ωit_318 = function() {
          return __type_of(null, _isa, []);
        }), 'list');
        this.eq((Ωit_319 = function() {
          return __type_of(null, _isa, +2e308);
        }), 'infinity');
        this.eq((Ωit_320 = function() {
          return __type_of(null, _isa, -2e308);
        }), 'infinity');
        return null;
      })();
      //.........................................................................................................
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    deepmerge: function() {
      var Intertype, declarations, deepmerge;
      ({Intertype, declarations, deepmerge} = require('../../../apps/intertype'));
      (() => {        //.........................................................................................................
        var probe, result, sub, Ωit_321, Ωit_322, Ωit_323, Ωit_324, Ωit_325, Ωit_326;
        sub = {
          foo: 3
        };
        probe = {
          bar: {
            baz: {
              sub: sub
            }
          },
          gnu: 4
        };
        result = deepmerge(probe);
        this.eq((Ωit_321 = function() {
          return result;
        }), probe);
        this.eq((Ωit_322 = function() {
          return result.bar === probe.bar;
        }), false);
        this.eq((Ωit_323 = function() {
          return result.bar.baz === probe.bar.baz;
        }), false);
        this.eq((Ωit_324 = function() {
          return result.bar.baz.sub === probe.bar.baz.sub;
        }), false);
        this.eq((Ωit_325 = function() {
          return result.bar.baz.sub === sub;
        }), false);
        this.eq((Ωit_326 = function() {
          return probe.bar.baz.sub === sub;
        }), true);
        return null;
      })();
      (() => {        //.........................................................................................................
        var probe, result, sub, types, Ωit_327, Ωit_328, Ωit_329, Ωit_330, Ωit_331, Ωit_332;
        sub = {
          foo: 3
        };
        probe = {
          bar: {
            baz: {
              sub: sub
            }
          },
          gnu: 4
        };
        types = new Intertype({
          q: {
            test: 'object',
            template: probe
          }
        });
        result = types.create.q();
        this.eq((Ωit_327 = function() {
          return result;
        }), probe);
        this.eq((Ωit_328 = function() {
          return result.bar === probe.bar;
        }), false);
        this.eq((Ωit_329 = function() {
          return result.bar.baz === probe.bar.baz;
        }), false);
        this.eq((Ωit_330 = function() {
          return result.bar.baz.sub === probe.bar.baz.sub;
        }), false);
        this.eq((Ωit_331 = function() {
          return result.bar.baz.sub === sub;
        }), false);
        this.eq((Ωit_332 = function() {
          return probe.bar.baz.sub === sub;
        }), true);
        return null;
      })();
      (() => {        //.........................................................................................................
        return null;
      })();
      //.........................................................................................................
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    validate_dotted_types: function() {
      var Intertype;
      ({Intertype} = require('../../../apps/intertype'));
      (() => {        //.........................................................................................................
        var types, validate, Ωit_333, Ωit_334, Ωit_335, Ωit_336, Ωit_337, Ωit_338, Ωit_339, Ωit_340, Ωit_341, Ωit_342, Ωit_343, Ωit_344, Ωit_345, Ωit_346, Ωit_347;
        types = new Intertype();
        ({validate} = types);
        types.declare({
          'person': 'object'
        });
        types.declare({
          'person.name': 'text'
        });
        types.declare({
          'person.address': 'object'
        });
        types.declare({
          'person.address.city': 'object'
        });
        types.declare({
          'person.address.city.name': 'text'
        });
        types.declare({
          'person.address.city.postcode': 'text'
        });
        //.......................................................................................................
        this.throws((Ωit_333 = function() {
          return validate.person(null);
        }), /expected a person, got a null/);
        this.throws((Ωit_334 = function() {
          return validate.person.address(null);
        }), /expected a person.address, got a null/);
        this.throws((Ωit_335 = function() {
          return validate.person.address.city(null);
        }), /expected a person.address.city, got a null/);
        this.throws((Ωit_336 = function() {
          return validate.person.address.city.postcode(null);
        }), /expected a person.address.city.postcode, got a null/);
        //.......................................................................................................
        this.eq((Ωit_337 = function() {
          return types.isa.person.address.city.postcode(3);
        }), false);
        this.throws((Ωit_338 = function() {
          return validate.person.address.city.postcode(3);
        }), /expected a person.address.city.postcode/);
        //.......................................................................................................
        this.eq((Ωit_339 = function() {
          return types.isa.person.address.city({
            name: 'P'
          });
        }), false);
        this.throws((Ωit_340 = function() {
          return validate.person.address.city({
            name: 'P'
          });
        }), /expected a person.address.city/);
        // #.......................................................................................................
        this.eq((Ωit_341 = function() {
          return types.isa.person.address.city({
            postcode: '3421'
          });
        }), false);
        this.throws((Ωit_342 = function() {
          return validate.person.address.city();
        }), /method 'validate.person.address.city' expects 1 arguments, got 0/);
        this.throws((Ωit_343 = function() {
          return validate.person.address.city(null);
        }), /expected a person.address.city/);
        this.throws((Ωit_344 = function() {
          return validate.person.address.city('3421');
        }), /expected a person.address.city/);
        this.throws((Ωit_345 = function() {
          return validate.person.address.city({
            postcode: '3421'
          });
        }), /expected a person.address.city/);
        //.......................................................................................................
        this.eq((Ωit_346 = function() {
          return types.isa.person.address.city({
            name: 'P',
            postcode: '3421'
          });
        }), true);
        this.eq((Ωit_347 = function() {
          return validate.person.address.city({
            name: 'P',
            postcode: '3421'
          });
        }), {
          name: 'P',
          postcode: '3421'
        });
        return null;
      })();
      //.........................................................................................................
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    use_evaluate: function() {
      var Intertype;
      ({Intertype} = require('../../../apps/intertype'));
      (() => {        //.........................................................................................................
        var evaluate, isa, types, validate, Ωit_348, Ωit_349, Ωit_350, Ωit_351, Ωit_352, Ωit_353, Ωit_354, Ωit_355, Ωit_356, Ωit_357, Ωit_358, Ωit_359, Ωit_360, Ωit_361;
        types = new Intertype();
        ({validate, isa, evaluate} = types);
        types.declare({
          'person': 'object'
        });
        types.declare({
          'person.name': 'text'
        });
        types.declare({
          'person.address': 'object'
        });
        types.declare({
          'person.address.city': 'object'
        });
        types.declare({
          'person.address.city.name': 'text'
        });
        types.declare({
          'person.address.city.postcode': 'text'
        });
        //.......................................................................................................
        this.throws((Ωit_348 = function() {
          return evaluate.optional(1);
        }), /`optional` is not a legal type for `evaluate` methods/);
        this.throws((Ωit_349 = function() {
          return evaluate.optional.person(1);
        }), /`optional` is not a legal type for `evaluate` methods/);
        //.......................................................................................................
        this.eq((Ωit_350 = function() {
          return isa.person({
            name: 'Alice',
            address: {
              city: {
                name: 'Atown',
                postcode: 'VA1234'
              }
            }
          });
        }), true);
        this.eq((Ωit_351 = function() {
          return evaluate.person({
            name: 'Alice',
            address: {
              city: {
                name: 'Atown',
                postcode: 'VA1234'
              }
            }
          });
        }), {
          person: true,
          'person.name': true,
          'person.address': true,
          'person.address.city': true,
          'person.address.city.name': true,
          'person.address.city.postcode': true
        });
        //.......................................................................................................
        this.eq((Ωit_352 = function() {
          return isa.person({
            name: 'Alice',
            address: {
              city: {
                name: 'Atown',
                postcode: 12345678
              }
            }
          });
        }), false);
        this.eq((Ωit_353 = function() {
          return evaluate.person({
            name: 'Alice',
            address: {
              city: {
                name: 'Atown',
                postcode: 12345678
              }
            }
          });
        }), {
          person: false,
          'person.name': true,
          'person.address': false,
          'person.address.city': false,
          'person.address.city.name': true,
          'person.address.city.postcode': false
        });
        //.......................................................................................................
        this.eq((Ωit_354 = function() {
          return isa.person({
            address: {
              city: {
                name: 'Atown',
                postcode: 12345678
              }
            }
          });
        }), false);
        this.eq((Ωit_355 = function() {
          return evaluate.person({
            address: {
              city: {
                name: 'Atown',
                postcode: 12345678
              }
            }
          });
        }), {
          person: false,
          'person.name': false,
          'person.address': false,
          'person.address.city': false,
          'person.address.city.name': true,
          'person.address.city.postcode': false
        });
        //.......................................................................................................
        this.eq((Ωit_356 = function() {
          return isa.person({
            address: {
              city: {
                name: 'Atown',
                postcode: 'VA1234'
              }
            }
          });
        }), false);
        this.eq((Ωit_357 = function() {
          return evaluate.person({
            address: {
              city: {
                name: 'Atown',
                postcode: 'VA1234'
              }
            }
          });
        }), {
          person: false,
          'person.name': false,
          'person.address': true,
          'person.address.city': true,
          'person.address.city.name': true,
          'person.address.city.postcode': true
        });
        //.......................................................................................................
        this.eq((Ωit_358 = function() {
          return isa.person(null);
        }), false);
        this.eq((Ωit_359 = function() {
          return evaluate.person(null);
        }), {
          person: false,
          'person.name': false,
          'person.address': false,
          'person.address.city': false,
          'person.address.city.name': false,
          'person.address.city.postcode': false
        });
        //.......................................................................................................
        this.eq((Ωit_360 = function() {
          return isa.person({});
        }), false);
        this.eq((Ωit_361 = function() {
          return evaluate.person({});
        }), {
          person: false,
          'person.name': false,
          'person.address': false,
          'person.address.city': false,
          'person.address.city.name': false,
          'person.address.city.postcode': false
        });
        return null;
      })();
      (() => {        //.........................................................................................................
        var evaluate, isa, types, validate, Ωit_362, Ωit_363, Ωit_364, Ωit_365, Ωit_366, Ωit_367, Ωit_368, Ωit_369, Ωit_370, Ωit_371, Ωit_372, Ωit_373, Ωit_374, Ωit_375, Ωit_376;
        types = new Intertype();
        ({validate, isa, evaluate} = types);
        types.declare({
          'person': 'object'
        });
        types.declare({
          'person.address': 'object'
        });
        types.declare({
          'person.address.city': 'object'
        });
        types.declare({
          'person.address.city.postcode': 'text'
        });
        types.declare({
          'person.address.city.name': 'text'
        });
        types.declare({
          'person.name': 'text'
        });
        //.......................................................................................................
        this.eq((Ωit_362 = function() {
          return isa.person({
            name: 'Alice',
            address: {
              city: {
                name: 'Atown',
                postcode: 'VA1234'
              }
            }
          });
        }), true);
        this.eq((Ωit_363 = function() {
          return evaluate.person({
            name: 'Alice',
            address: {
              city: {
                name: 'Atown',
                postcode: 'VA1234'
              }
            }
          });
        }), {
          person: true,
          'person.name': true,
          'person.address': true,
          'person.address.city': true,
          'person.address.city.name': true,
          'person.address.city.postcode': true
        });
        this.eq((Ωit_364 = function() {
          return Object.keys(evaluate.person({
            name: 'Alice',
            address: {
              city: {
                name: 'Atown',
                postcode: 'VA1234'
              }
            }
          }));
        }), ['person', 'person.address', 'person.address.city', 'person.address.city.postcode', 'person.address.city.name', 'person.name']);
        //.......................................................................................................
        this.eq((Ωit_365 = function() {
          return isa.person({
            address: {
              city: {
                name: 'Atown',
                postcode: 'VA1234'
              }
            }
          });
        }), false);
        this.eq((Ωit_366 = function() {
          return evaluate.person({
            address: {
              city: {
                name: 'Atown',
                postcode: 'VA1234'
              }
            }
          });
        }), {
          person: false,
          'person.name': false,
          'person.address': true,
          'person.address.city': true,
          'person.address.city.name': true,
          'person.address.city.postcode': true
        });
        this.eq((Ωit_367 = function() {
          return Object.keys(evaluate.person({
            address: {
              city: {
                name: 'Atown',
                postcode: 'VA1234'
              }
            }
          }));
        }), ['person', 'person.address', 'person.address.city', 'person.address.city.postcode', 'person.address.city.name', 'person.name']);
        //.......................................................................................................
        this.eq((Ωit_368 = function() {
          return isa.person(null);
        }), false);
        this.eq((Ωit_369 = function() {
          return evaluate.person(null);
        }), {
          person: false,
          'person.name': false,
          'person.address': false,
          'person.address.city': false,
          'person.address.city.name': false,
          'person.address.city.postcode': false
        });
        this.eq((Ωit_370 = function() {
          return Object.keys(evaluate.person(null));
        }), ['person', 'person.address', 'person.address.city', 'person.address.city.postcode', 'person.address.city.name', 'person.name']);
        //.......................................................................................................
        this.eq((Ωit_371 = function() {
          return isa.person({});
        }), false);
        this.eq((Ωit_372 = function() {
          return evaluate.person({});
        }), {
          person: false,
          'person.name': false,
          'person.address': false,
          'person.address.city': false,
          'person.address.city.name': false,
          'person.address.city.postcode': false
        });
        this.eq((Ωit_373 = function() {
          return Object.keys(evaluate.person({}));
        }), ['person', 'person.address', 'person.address.city', 'person.address.city.postcode', 'person.address.city.name', 'person.name']);
        //.......................................................................................................
        this.eq((Ωit_374 = function() {
          return isa.person.address({
            city: {
              name: 'Atown',
              postcode: 'VA1234'
            }
          });
        }), true);
        this.eq((Ωit_375 = function() {
          return evaluate.person.address({
            city: {
              name: 'Atown',
              postcode: 'VA1234'
            }
          });
        }), {
          'person.address': true,
          'person.address.city': true,
          'person.address.city.name': true,
          'person.address.city.postcode': true
        });
        this.eq((Ωit_376 = function() {
          return Object.keys(evaluate.person.address({
            city: {
              name: 'Atown',
              postcode: 'VA1234'
            }
          }));
        }), ['person.address', 'person.address.city', 'person.address.city.postcode', 'person.address.city.name']);
        return null;
      })();
      //.........................................................................................................
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    walk_prefixes: function() {
      var isa, type_of, walk_prefixes;
      ({walk_prefixes, isa, type_of} = require('../../../apps/intertype'));
      (() => {        //.........................................................................................................
        var Ωit_377, Ωit_378, Ωit_379, Ωit_380, Ωit_381, Ωit_382;
        this.eq((Ωit_377 = function() {
          return isa.generatorfunction(walk_prefixes);
        }), true);
        this.eq((Ωit_378 = function() {
          return [...(walk_prefixes('one'))];
        }), []);
        this.eq((Ωit_379 = function() {
          return [...(walk_prefixes('one.two'))];
        }), ['one']);
        this.eq((Ωit_380 = function() {
          return [...(walk_prefixes('one.two.three'))];
        }), ['one', 'one.two']);
        this.eq((Ωit_381 = function() {
          return [...(walk_prefixes('one.two.three.four'))];
        }), ['one', 'one.two', 'one.two.three']);
        /* TAINT should not allow empty namers: */
        this.eq((Ωit_382 = function() {
          return [...(walk_prefixes('.one.two.three'))];
        }), ['', '.one', '.one.two']);
        return null;
      })();
      //.........................................................................................................
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    can_use_namespaces: function() {
      var Intertype;
      ({Intertype} = require('../../../apps/intertype'));
      (() => {        //.........................................................................................................
        var declarations, Ωit_383;
        declarations = {
          'foo.bar': function(x) {
            return x === 'foo.bar';
          },
          'foo.bar.baz': function(x) {
            return x === 'foo.bar.baz';
          }
        };
        this.throws((Ωit_383 = function() {
          var types;
          return types = new Intertype(declarations);
        }), /unknown partial type 'foo'/);
        return null;
      })();
      (() => {        //.........................................................................................................
        var declarations, types, Ωit_384, Ωit_385, Ωit_386, Ωit_387, Ωit_388, Ωit_389;
        declarations = {
          'quantity': 'object',
          'quantity.q': 'float',
          'quantity.u': 'text'
        };
        types = new Intertype(declarations);
        this.eq((Ωit_384 = function() {
          return types.isa.quantity({});
        }), false);
        this.eq((Ωit_385 = function() {
          return types.isa.quantity({
            q: 12,
            u: 'kg'
          });
        }), true);
        this.eq((Ωit_386 = function() {
          return types.isa['quantity.q'](12);
        }), true);
        this.eq((Ωit_387 = function() {
          return types.isa['quantity.u']('kg');
        }), true);
        this.eq((Ωit_388 = function() {
          return types.isa.quantity.q(12);
        }), true);
        this.eq((Ωit_389 = function() {
          return types.isa.quantity.u('kg');
        }), true);
        return null;
      })();
      //.........................................................................................................
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    can_use_qualifiers: function() {
      var Intertype_minimal;
      ({Intertype_minimal} = require('../../../apps/intertype'));
      (() => {        //.........................................................................................................
        var declarations, isa, types, Ωit_390, Ωit_391, Ωit_392, Ωit_393, Ωit_394, Ωit_395, Ωit_396, Ωit_397, Ωit_398, Ωit_399, Ωit_400, Ωit_401, Ωit_402;
        declarations = {
          'empty': {
            test: 'object',
            role: 'qualifier'
          },
          'nonempty': {
            test: 'object',
            role: 'qualifier'
          },
          'empty.list': function(x) {
            return (this.isa.list(x)) && (x.length === 0);
          },
          'empty.text': function(x) {
            return (this.isa.text(x)) && (x.length === 0);
          },
          'empty.set': function(x) {
            return (this.isa.set(x)) && (x.size === 0);
          },
          'nonempty.list': function(x) {
            return (this.isa.list(x)) && (x.length > 0);
          },
          'nonempty.text': function(x) {
            return (this.isa.text(x)) && (x.length > 0);
          },
          'nonempty.set': function(x) {
            return (this.isa.set(x)) && (x.size > 0);
          }
        };
        types = new Intertype_minimal(sample_declarations, declarations);
        ({isa} = types);
        this.eq((Ωit_390 = function() {
          return isa.empty.list([]);
        }), true);
        this.eq((Ωit_391 = function() {
          return isa.empty.list(['A']);
        }), false);
        this.eq((Ωit_392 = function() {
          return isa.empty.list(4);
        }), false);
        this.eq((Ωit_393 = function() {
          return isa.nonempty.list([]);
        }), false);
        this.eq((Ωit_394 = function() {
          return isa.nonempty.list(['A']);
        }), true);
        this.eq((Ωit_395 = function() {
          return isa.nonempty.list(4);
        }), false);
        this.eq((Ωit_396 = function() {
          return isa.empty.text('');
        }), true);
        this.eq((Ωit_397 = function() {
          return isa.empty.text('A');
        }), false);
        this.eq((Ωit_398 = function() {
          return isa.empty.text(4);
        }), false);
        this.eq((Ωit_399 = function() {
          return isa.nonempty.text('');
        }), false);
        this.eq((Ωit_400 = function() {
          return isa.nonempty.text('A');
        }), true);
        this.eq((Ωit_401 = function() {
          return isa.nonempty.text(4);
        }), false);
        /* this doesn't make a terrible lot of sense: */
        this.eq((Ωit_402 = function() {
          return isa.empty({
            list: [],
            text: '',
            set: new Set()
          });
        }), false);
        return null;
      })();
      (() => {        //.........................................................................................................
        var declarations, isa, types, validate, Ωit_403, Ωit_404, Ωit_405, Ωit_406, Ωit_407, Ωit_408, Ωit_409, Ωit_410, Ωit_411, Ωit_412, Ωit_413, Ωit_414, Ωit_415, Ωit_416, Ωit_417, Ωit_418, Ωit_419, Ωit_420, Ωit_421, Ωit_422, Ωit_423, Ωit_424, Ωit_425, Ωit_426;
        declarations = {
          'empty': {
            role: 'qualifier'
          },
          'nonempty': {
            role: 'qualifier'
          },
          'empty.list': function(x) {
            return (this.isa.list(x)) && (x.length === 0);
          },
          'empty.text': function(x) {
            return (this.isa.text(x)) && (x.length === 0);
          },
          'empty.set': function(x) {
            return (this.isa.set(x)) && (x.size === 0);
          },
          'nonempty.list': function(x) {
            return (this.isa.list(x)) && (x.length > 0);
          },
          'nonempty.text': function(x) {
            return (this.isa.text(x)) && (x.length > 0);
          },
          'nonempty.set': function(x) {
            return (this.isa.set(x)) && (x.size > 0);
          }
        };
        types = new Intertype_minimal(sample_declarations, declarations);
        ({isa, validate} = types);
        this.eq((Ωit_403 = function() {
          return isa.empty.list([]);
        }), true);
        this.eq((Ωit_404 = function() {
          return isa.empty.list(['A']);
        }), false);
        this.eq((Ωit_405 = function() {
          return isa.empty.list(4);
        }), false);
        this.eq((Ωit_406 = function() {
          return isa.nonempty.list([]);
        }), false);
        this.eq((Ωit_407 = function() {
          return isa.nonempty.list(['A']);
        }), true);
        this.eq((Ωit_408 = function() {
          return isa.nonempty.list(4);
        }), false);
        this.eq((Ωit_409 = function() {
          return isa.empty.text('');
        }), true);
        this.eq((Ωit_410 = function() {
          return isa.empty.text('A');
        }), false);
        this.eq((Ωit_411 = function() {
          return isa.empty.text(4);
        }), false);
        this.eq((Ωit_412 = function() {
          return isa.nonempty.text('');
        }), false);
        this.eq((Ωit_413 = function() {
          return isa.nonempty.text('A');
        }), true);
        this.eq((Ωit_414 = function() {
          return isa.nonempty.text(4);
        }), false);
        //.......................................................................................................
        this.eq((Ωit_415 = function() {
          return isa.empty([]);
        }), true);
        this.eq((Ωit_416 = function() {
          return isa.empty('');
        }), true);
        this.eq((Ωit_417 = function() {
          return isa.empty(new Set());
        }), true);
        this.eq((Ωit_418 = function() {
          return isa.empty([1]);
        }), false);
        this.eq((Ωit_419 = function() {
          return isa.empty('A');
        }), false);
        this.eq((Ωit_420 = function() {
          return isa.empty(new Set('abc'));
        }), false);
        //.......................................................................................................
        this.eq((Ωit_421 = function() {
          return validate.empty([]);
        }), []);
        this.eq((Ωit_422 = function() {
          return validate.empty('');
        }), '');
        this.eq((Ωit_423 = function() {
          return validate.empty(new Set());
        }), new Set());
        this.throws((Ωit_424 = function() {
          return validate.empty([1]);
        }), /expected a empty, got a list/);
        this.throws((Ωit_425 = function() {
          return validate.empty('A');
        }), /expected a empty, got a text/);
        this.throws((Ωit_426 = function() {
          return validate.empty(new Set('abc'));
        }), /expected a empty, got a set/);
        return null;
      })();
      //.........................................................................................................
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    can_use_optional_with_qualifiers: function() {
      var Intertype_minimal;
      ({Intertype_minimal} = require('../../../apps/intertype'));
      (() => {        //.........................................................................................................
        var declarations, isa, types, validate, Ωit_427, Ωit_428, Ωit_429, Ωit_430, Ωit_431, Ωit_432, Ωit_433, Ωit_434, Ωit_435, Ωit_436, Ωit_437, Ωit_438, Ωit_439, Ωit_440, Ωit_441, Ωit_442, Ωit_443, Ωit_444, Ωit_445, Ωit_446, Ωit_447, Ωit_448, Ωit_449, Ωit_450, Ωit_451, Ωit_452, Ωit_453, Ωit_454, Ωit_455, Ωit_456, Ωit_457, Ωit_458, Ωit_459, Ωit_460, Ωit_461, Ωit_462, Ωit_463;
        declarations = {
          'empty': {
            role: 'qualifier'
          },
          'nonempty': {
            role: 'qualifier'
          },
          'empty.list': function(x) {
            return (this.isa.list(x)) && (x.length === 0);
          },
          'empty.text': function(x) {
            return (this.isa.text(x)) && (x.length === 0);
          },
          'empty.set': function(x) {
            return (this.isa.set(x)) && (x.size === 0);
          },
          'nonempty.list': function(x) {
            return (this.isa.list(x)) && (x.length > 0);
          },
          'nonempty.text': function(x) {
            return (this.isa.text(x)) && (x.length > 0);
          },
          'nonempty.set': function(x) {
            return (this.isa.set(x)) && (x.size > 0);
          }
        };
        types = new Intertype_minimal(sample_declarations, declarations);
        ({isa, validate} = types);
        this.eq((Ωit_427 = function() {
          return isa.optional.empty.list([]);
        }), true);
        this.eq((Ωit_428 = function() {
          return isa.optional.empty.list(['A']);
        }), false);
        this.eq((Ωit_429 = function() {
          return isa.optional.empty.list(4);
        }), false);
        this.eq((Ωit_430 = function() {
          return isa.optional.nonempty.list([]);
        }), false);
        this.eq((Ωit_431 = function() {
          return isa.optional.nonempty.list(['A']);
        }), true);
        this.eq((Ωit_432 = function() {
          return isa.optional.nonempty.list(4);
        }), false);
        this.eq((Ωit_433 = function() {
          return isa.optional.empty.text('');
        }), true);
        this.eq((Ωit_434 = function() {
          return isa.optional.empty.text('A');
        }), false);
        this.eq((Ωit_435 = function() {
          return isa.optional.empty.text(4);
        }), false);
        this.eq((Ωit_436 = function() {
          return isa.optional.nonempty.text('');
        }), false);
        this.eq((Ωit_437 = function() {
          return isa.optional.nonempty.text('A');
        }), true);
        this.eq((Ωit_438 = function() {
          return isa.optional.nonempty.text(4);
        }), false);
        //.......................................................................................................
        this.eq((Ωit_439 = function() {
          return isa.optional.empty([]);
        }), true);
        this.eq((Ωit_440 = function() {
          return isa.optional.empty('');
        }), true);
        this.eq((Ωit_441 = function() {
          return isa.optional.empty(new Set());
        }), true);
        this.eq((Ωit_442 = function() {
          return isa.optional.empty([1]);
        }), false);
        this.eq((Ωit_443 = function() {
          return isa.optional.empty('A');
        }), false);
        this.eq((Ωit_444 = function() {
          return isa.optional.empty(new Set('abc'));
        }), false);
        //.......................................................................................................
        this.eq((Ωit_445 = function() {
          return validate.optional.empty([]);
        }), []);
        this.eq((Ωit_446 = function() {
          return validate.optional.empty('');
        }), '');
        this.eq((Ωit_447 = function() {
          return validate.optional.empty(new Set());
        }), new Set());
        this.eq((Ωit_448 = function() {
          return validate.optional.empty.list([]);
        }), []);
        this.eq((Ωit_449 = function() {
          return validate.optional.empty.text('');
        }), '');
        this.eq((Ωit_450 = function() {
          return validate.optional.empty.set(new Set());
        }), new Set());
        this.throws((Ωit_451 = function() {
          return validate.optional.empty([1]);
        }), /expected an optional empty, got a list/);
        this.throws((Ωit_452 = function() {
          return validate.optional.empty('A');
        }), /expected an optional empty, got a text/);
        this.throws((Ωit_453 = function() {
          return validate.optional.empty(new Set('abc'));
        }), /expected an optional empty, got a set/);
        //.......................................................................................................
        this.eq((Ωit_454 = function() {
          return isa.optional.empty([]);
        }), true);
        this.eq((Ωit_455 = function() {
          return isa.optional.empty('');
        }), true);
        this.eq((Ωit_456 = function() {
          return isa.optional.empty(new Set());
        }), true);
        this.eq((Ωit_457 = function() {
          return isa.optional.empty([1]);
        }), false);
        this.eq((Ωit_458 = function() {
          return isa.optional.empty('A');
        }), false);
        this.eq((Ωit_459 = function() {
          return isa.optional.empty(new Set('abc'));
        }), false);
        this.eq((Ωit_460 = function() {
          return validate.optional.empty(null);
        }), null);
        this.eq((Ωit_461 = function() {
          return validate.optional.empty.list(null);
        }), null);
        this.eq((Ωit_462 = function() {
          return validate.optional.empty.text(null);
        }), null);
        this.eq((Ωit_463 = function() {
          return validate.optional.empty.set(null);
        }), null);
        return null;
      })();
      //.........................................................................................................
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    use_fields_to_declare_qualifiers: function() {
      var Intertype_minimal;
      ({Intertype_minimal} = require('../../../apps/intertype'));
      (() => {        //.........................................................................................................
        var declarations, isa, types, validate, Ωit_464, Ωit_465, Ωit_466, Ωit_467, Ωit_468, Ωit_469, Ωit_470, Ωit_471, Ωit_472, Ωit_473, Ωit_474, Ωit_475, Ωit_476, Ωit_477, Ωit_478, Ωit_479, Ωit_480, Ωit_481, Ωit_482, Ωit_483, Ωit_484, Ωit_485, Ωit_486, Ωit_487, Ωit_488, Ωit_489, Ωit_490, Ωit_491, Ωit_492, Ωit_493, Ωit_494, Ωit_495, Ωit_496, Ωit_497, Ωit_498, Ωit_499, Ωit_500, Ωit_501, Ωit_502, Ωit_503, Ωit_504, Ωit_505, Ωit_506, Ωit_507, Ωit_508, Ωit_509, Ωit_510, Ωit_511, Ωit_512, Ωit_513, Ωit_514, Ωit_515, Ωit_516, Ωit_517, Ωit_518, Ωit_519, Ωit_520, Ωit_521, Ωit_522, Ωit_523, Ωit_524, Ωit_525, Ωit_526, Ωit_527, Ωit_528, Ωit_529, Ωit_530, Ωit_531, Ωit_532, Ωit_533, Ωit_534, Ωit_535, Ωit_536, Ωit_537;
        declarations = {
          empty: {
            role: 'qualifier',
            fields: {
              list: function(x) {
                return (this.isa.list(x)) && (x.length === 0);
              },
              text: function(x) {
                return (this.isa.text(x)) && (x.length === 0);
              },
              set: function(x) {
                return (this.isa.set(x)) && (x.size === 0);
              }
            }
          },
          nonempty: {
            role: 'qualifier',
            fields: {
              list: function(x) {
                return (this.isa.list(x)) && (x.length > 0);
              },
              text: function(x) {
                return (this.isa.text(x)) && (x.length > 0);
              },
              set: function(x) {
                return (this.isa.set(x)) && (x.size > 0);
              }
            }
          }
        };
        //.......................................................................................................
        types = new Intertype_minimal(sample_declarations, declarations);
        ({isa, validate} = types);
        //.......................................................................................................
        this.eq((Ωit_464 = function() {
          return isa.empty.list([]);
        }), true);
        this.eq((Ωit_465 = function() {
          return isa.empty.list(['A']);
        }), false);
        this.eq((Ωit_466 = function() {
          return isa.empty.list(4);
        }), false);
        this.eq((Ωit_467 = function() {
          return isa.nonempty.list([]);
        }), false);
        this.eq((Ωit_468 = function() {
          return isa.nonempty.list(['A']);
        }), true);
        this.eq((Ωit_469 = function() {
          return isa.nonempty.list(4);
        }), false);
        this.eq((Ωit_470 = function() {
          return isa.empty.text('');
        }), true);
        this.eq((Ωit_471 = function() {
          return isa.empty.text('A');
        }), false);
        this.eq((Ωit_472 = function() {
          return isa.empty.text(4);
        }), false);
        this.eq((Ωit_473 = function() {
          return isa.nonempty.text('');
        }), false);
        this.eq((Ωit_474 = function() {
          return isa.nonempty.text('A');
        }), true);
        this.eq((Ωit_475 = function() {
          return isa.nonempty.text(4);
        }), false);
        //.......................................................................................................
        this.eq((Ωit_476 = function() {
          return isa.empty([]);
        }), true);
        this.eq((Ωit_477 = function() {
          return isa.empty('');
        }), true);
        this.eq((Ωit_478 = function() {
          return isa.empty(new Set());
        }), true);
        this.eq((Ωit_479 = function() {
          return isa.empty([1]);
        }), false);
        this.eq((Ωit_480 = function() {
          return isa.empty('A');
        }), false);
        this.eq((Ωit_481 = function() {
          return isa.empty(new Set('abc'));
        }), false);
        //.......................................................................................................
        this.eq((Ωit_482 = function() {
          return validate.empty([]);
        }), []);
        this.eq((Ωit_483 = function() {
          return validate.empty('');
        }), '');
        this.eq((Ωit_484 = function() {
          return validate.empty(new Set());
        }), new Set());
        this.eq((Ωit_485 = function() {
          return validate.empty.list([]);
        }), []);
        this.eq((Ωit_486 = function() {
          return validate.empty.text('');
        }), '');
        this.eq((Ωit_487 = function() {
          return validate.empty.set(new Set());
        }), new Set());
        this.throws((Ωit_488 = function() {
          return validate.empty([1]);
        }), /expected a empty, got a list/);
        this.throws((Ωit_489 = function() {
          return validate.empty('A');
        }), /expected a empty, got a text/);
        this.throws((Ωit_490 = function() {
          return validate.empty(new Set('abc'));
        }), /expected a empty, got a set/);
        //.......................................................................................................
        this.eq((Ωit_491 = function() {
          return isa.empty([]);
        }), true);
        this.eq((Ωit_492 = function() {
          return isa.empty('');
        }), true);
        this.eq((Ωit_493 = function() {
          return isa.empty(new Set());
        }), true);
        this.eq((Ωit_494 = function() {
          return isa.empty([1]);
        }), false);
        this.eq((Ωit_495 = function() {
          return isa.empty('A');
        }), false);
        this.eq((Ωit_496 = function() {
          return isa.empty(new Set('abc'));
        }), false);
        this.throws((Ωit_497 = function() {
          return validate.empty(null);
        }), /expected a empty, got a null/);
        this.throws((Ωit_498 = function() {
          return validate.empty.list(null);
        }), /expected a empty.list, got a null/);
        this.throws((Ωit_499 = function() {
          return validate.empty.text(null);
        }), /expected a empty.text, got a null/);
        this.throws((Ωit_500 = function() {
          return validate.empty.set(null);
        }), /expected a empty.set, got a null/);
        //.......................................................................................................
        this.eq((Ωit_501 = function() {
          return isa.optional.empty.list([]);
        }), true);
        this.eq((Ωit_502 = function() {
          return isa.optional.empty.list(['A']);
        }), false);
        this.eq((Ωit_503 = function() {
          return isa.optional.empty.list(4);
        }), false);
        this.eq((Ωit_504 = function() {
          return isa.optional.nonempty.list([]);
        }), false);
        this.eq((Ωit_505 = function() {
          return isa.optional.nonempty.list(['A']);
        }), true);
        this.eq((Ωit_506 = function() {
          return isa.optional.nonempty.list(4);
        }), false);
        this.eq((Ωit_507 = function() {
          return isa.optional.empty.text('');
        }), true);
        this.eq((Ωit_508 = function() {
          return isa.optional.empty.text('A');
        }), false);
        this.eq((Ωit_509 = function() {
          return isa.optional.empty.text(4);
        }), false);
        this.eq((Ωit_510 = function() {
          return isa.optional.nonempty.text('');
        }), false);
        this.eq((Ωit_511 = function() {
          return isa.optional.nonempty.text('A');
        }), true);
        this.eq((Ωit_512 = function() {
          return isa.optional.nonempty.text(4);
        }), false);
        //.......................................................................................................
        this.eq((Ωit_513 = function() {
          return isa.optional.empty([]);
        }), true);
        this.eq((Ωit_514 = function() {
          return isa.optional.empty('');
        }), true);
        this.eq((Ωit_515 = function() {
          return isa.optional.empty(new Set());
        }), true);
        this.eq((Ωit_516 = function() {
          return isa.optional.empty([1]);
        }), false);
        this.eq((Ωit_517 = function() {
          return isa.optional.empty('A');
        }), false);
        this.eq((Ωit_518 = function() {
          return isa.optional.empty(new Set('abc'));
        }), false);
        //.......................................................................................................
        this.eq((Ωit_519 = function() {
          return validate.optional.empty([]);
        }), []);
        this.eq((Ωit_520 = function() {
          return validate.optional.empty('');
        }), '');
        this.eq((Ωit_521 = function() {
          return validate.optional.empty(new Set());
        }), new Set());
        this.eq((Ωit_522 = function() {
          return validate.optional.empty.list([]);
        }), []);
        this.eq((Ωit_523 = function() {
          return validate.optional.empty.text('');
        }), '');
        this.eq((Ωit_524 = function() {
          return validate.optional.empty.set(new Set());
        }), new Set());
        this.throws((Ωit_525 = function() {
          return validate.optional.empty([1]);
        }), /expected an optional empty, got a list/);
        this.throws((Ωit_526 = function() {
          return validate.optional.empty('A');
        }), /expected an optional empty, got a text/);
        this.throws((Ωit_527 = function() {
          return validate.optional.empty(new Set('abc'));
        }), /expected an optional empty, got a set/);
        //.......................................................................................................
        this.eq((Ωit_528 = function() {
          return isa.optional.empty([]);
        }), true);
        this.eq((Ωit_529 = function() {
          return isa.optional.empty('');
        }), true);
        this.eq((Ωit_530 = function() {
          return isa.optional.empty(new Set());
        }), true);
        this.eq((Ωit_531 = function() {
          return isa.optional.empty([1]);
        }), false);
        this.eq((Ωit_532 = function() {
          return isa.optional.empty('A');
        }), false);
        this.eq((Ωit_533 = function() {
          return isa.optional.empty(new Set('abc'));
        }), false);
        this.eq((Ωit_534 = function() {
          return validate.optional.empty(null);
        }), null);
        this.eq((Ωit_535 = function() {
          return validate.optional.empty.list(null);
        }), null);
        this.eq((Ωit_536 = function() {
          return validate.optional.empty.text(null);
        }), null);
        this.eq((Ωit_537 = function() {
          return validate.optional.empty.set(null);
        }), null);
        return null;
      })();
      //.........................................................................................................
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    builtin_qualifiers: function() {
      var Intertype;
      ({Intertype} = require('../../../apps/intertype'));
      (() => {        //.........................................................................................................
        var evaluate, isa, type_of, types, validate, Ωit_538, Ωit_539, Ωit_540, Ωit_541, Ωit_542, Ωit_543, Ωit_544, Ωit_545, Ωit_546, Ωit_547, Ωit_548, Ωit_549, Ωit_550, Ωit_551, Ωit_552, Ωit_553, Ωit_554, Ωit_555, Ωit_556, Ωit_557, Ωit_558, Ωit_559, Ωit_560, Ωit_561, Ωit_562, Ωit_563, Ωit_564, Ωit_565, Ωit_566, Ωit_567, Ωit_568, Ωit_569, Ωit_570, Ωit_571, Ωit_572, Ωit_573, Ωit_574, Ωit_575, Ωit_576, Ωit_577, Ωit_578, Ωit_579, Ωit_580, Ωit_581, Ωit_582, Ωit_583, Ωit_584, Ωit_585, Ωit_586, Ωit_587, Ωit_588, Ωit_589, Ωit_590, Ωit_591, Ωit_592, Ωit_593, Ωit_594, Ωit_595, Ωit_596, Ωit_597, Ωit_598, Ωit_599, Ωit_600, Ωit_601, Ωit_602, Ωit_603, Ωit_604, Ωit_605, Ωit_606, Ωit_607, Ωit_608, Ωit_609, Ωit_610, Ωit_611, Ωit_612, Ωit_613, Ωit_614, Ωit_615, Ωit_616, Ωit_617, Ωit_618, Ωit_619, Ωit_620, Ωit_621, Ωit_622, Ωit_623, Ωit_624, Ωit_625, Ωit_626, Ωit_627, Ωit_628, Ωit_629, Ωit_630, Ωit_631, Ωit_632, Ωit_633, Ωit_634, Ωit_635, Ωit_636, Ωit_637, Ωit_638, Ωit_639, Ωit_640, Ωit_641, Ωit_642, Ωit_643, Ωit_644, Ωit_645, Ωit_646, Ωit_647, Ωit_648, Ωit_649, Ωit_650, Ωit_651, Ωit_652, Ωit_653, Ωit_654, Ωit_655, Ωit_656, Ωit_657, Ωit_658, Ωit_659, Ωit_660, Ωit_661, Ωit_662, Ωit_663, Ωit_664, Ωit_665, Ωit_666, Ωit_667, Ωit_668, Ωit_669, Ωit_670, Ωit_671, Ωit_672, Ωit_673, Ωit_674, Ωit_675, Ωit_676, Ωit_677, Ωit_678, Ωit_679, Ωit_680, Ωit_681, Ωit_682, Ωit_683, Ωit_684;
        types = new Intertype();
        ({isa, validate, evaluate, type_of} = types);
        //.......................................................................................................
        this.eq((Ωit_538 = function() {
          return isa.empty.list([]);
        }), true);
        this.eq((Ωit_539 = function() {
          return isa.empty.list(['A']);
        }), false);
        this.eq((Ωit_540 = function() {
          return isa.empty.list(4);
        }), false);
        this.eq((Ωit_541 = function() {
          return isa.nonempty.list([]);
        }), false);
        this.eq((Ωit_542 = function() {
          return isa.nonempty.list(['A']);
        }), true);
        this.eq((Ωit_543 = function() {
          return isa.nonempty.list(4);
        }), false);
        this.eq((Ωit_544 = function() {
          return isa.empty.text('');
        }), true);
        this.eq((Ωit_545 = function() {
          return isa.empty.text('A');
        }), false);
        this.eq((Ωit_546 = function() {
          return isa.empty.text(4);
        }), false);
        this.eq((Ωit_547 = function() {
          return isa.nonempty.text('');
        }), false);
        this.eq((Ωit_548 = function() {
          return isa.nonempty.text('A');
        }), true);
        this.eq((Ωit_549 = function() {
          return isa.nonempty.text(4);
        }), false);
        this.eq((Ωit_550 = function() {
          return isa.empty({
            list: [],
            text: '',
            set: new Set()
          });
        }), false);
        //.......................................................................................................
        this.eq((Ωit_551 = function() {
          return isa.empty([]);
        }), true);
        this.eq((Ωit_552 = function() {
          return isa.empty('');
        }), true);
        this.eq((Ωit_553 = function() {
          return isa.empty(new Set());
        }), true);
        this.eq((Ωit_554 = function() {
          return isa.empty(/d/);
        }), false);
        this.eq((Ωit_555 = function() {
          return isa.empty([1]);
        }), false);
        this.eq((Ωit_556 = function() {
          return isa.empty('A');
        }), false);
        this.eq((Ωit_557 = function() {
          return isa.empty(new Set('abc'));
        }), false);
        //.......................................................................................................
        this.eq((Ωit_558 = function() {
          return validate.empty([]);
        }), []);
        this.eq((Ωit_559 = function() {
          return validate.empty('');
        }), '');
        this.eq((Ωit_560 = function() {
          return validate.empty(new Set());
        }), new Set());
        this.throws((Ωit_561 = function() {
          return validate.empty([1]);
        }), /expected a empty, got a list/);
        this.throws((Ωit_562 = function() {
          return validate.empty('A');
        }), /expected a empty, got a text/);
        this.throws((Ωit_563 = function() {
          return validate.empty(new Set('abc'));
        }), /expected a empty, got a set/);
        //.......................................................................................................
        this.eq((Ωit_564 = function() {
          return type_of([]);
        }), 'list');
        this.eq((Ωit_565 = function() {
          return type_of('');
        }), 'text');
        this.eq((Ωit_566 = function() {
          return type_of(new Set());
        }), 'set');
        this.eq((Ωit_567 = function() {
          return type_of(['a']);
        }), 'list');
        this.eq((Ωit_568 = function() {
          return type_of('a');
        }), 'text');
        this.eq((Ωit_569 = function() {
          return type_of(new Set('a'));
        }), 'set');
        //.......................................................................................................
        this.eq((Ωit_570 = function() {
          return type_of(1234);
        }), 'float');
        this.eq((Ωit_571 = function() {
          return isa.integer(1234);
        }), true);
        this.eq((Ωit_572 = function() {
          return isa.positive.integer(1234);
        }), true);
        this.eq((Ωit_573 = function() {
          return isa.negative.integer(1234);
        }), false);
        this.eq((Ωit_574 = function() {
          return isa.negative.integer(-1234);
        }), true);
        this.eq((Ωit_575 = function() {
          return isa.negative.integer(-2e308);
        }), false);
        this.eq((Ωit_576 = function() {
          return isa.negative.integer(-12.34);
        }), false);
        //.......................................................................................................
        this.eq((Ωit_577 = function() {
          return isa.positive.float(+4);
        }), true);
        this.eq((Ωit_578 = function() {
          return isa.positive.integer(+4);
        }), true);
        this.eq((Ωit_579 = function() {
          return isa.positive.infinity(+4);
        }), false);
        this.eq((Ωit_580 = function() {
          return isa.negative.float(+4);
        }), false);
        this.eq((Ωit_581 = function() {
          return isa.negative.integer(+4);
        }), false);
        this.eq((Ωit_582 = function() {
          return isa.negative.infinity(+4);
        }), false);
        this.eq((Ωit_583 = function() {
          return isa.posnaught.float(+4);
        }), true);
        this.eq((Ωit_584 = function() {
          return isa.posnaught.integer(+4);
        }), true);
        this.eq((Ωit_585 = function() {
          return isa.posnaught.infinity(+4);
        }), false);
        this.eq((Ωit_586 = function() {
          return isa.negnaught.float(+4);
        }), false);
        this.eq((Ωit_587 = function() {
          return isa.negnaught.integer(+4);
        }), false);
        this.eq((Ωit_588 = function() {
          return isa.negnaught.infinity(+4);
        }), false);
        //.......................................................................................................
        this.eq((Ωit_589 = function() {
          return isa.positive.float(0);
        }), false);
        this.eq((Ωit_590 = function() {
          return isa.positive.integer(0);
        }), false);
        this.eq((Ωit_591 = function() {
          return isa.positive.infinity(0);
        }), false);
        this.eq((Ωit_592 = function() {
          return isa.negative.float(0);
        }), false);
        this.eq((Ωit_593 = function() {
          return isa.negative.integer(0);
        }), false);
        this.eq((Ωit_594 = function() {
          return isa.negative.infinity(0);
        }), false);
        this.eq((Ωit_595 = function() {
          return isa.posnaught.float(0);
        }), true);
        this.eq((Ωit_596 = function() {
          return isa.posnaught.integer(0);
        }), true);
        this.eq((Ωit_597 = function() {
          return isa.posnaught.infinity(0);
        }), false);
        this.eq((Ωit_598 = function() {
          return isa.negnaught.float(0);
        }), true);
        this.eq((Ωit_599 = function() {
          return isa.negnaught.integer(0);
        }), true);
        this.eq((Ωit_600 = function() {
          return isa.negnaught.infinity(0);
        }), false);
        //.......................................................................................................
        this.eq((Ωit_601 = function() {
          return isa.positive.float(2e308);
        }), false);
        this.eq((Ωit_602 = function() {
          return isa.positive.integer(2e308);
        }), false);
        this.eq((Ωit_603 = function() {
          return isa.positive.infinity(2e308);
        }), true);
        this.eq((Ωit_604 = function() {
          return isa.negative.float(2e308);
        }), false);
        this.eq((Ωit_605 = function() {
          return isa.negative.integer(2e308);
        }), false);
        this.eq((Ωit_606 = function() {
          return isa.negative.infinity(2e308);
        }), false);
        this.eq((Ωit_607 = function() {
          return isa.posnaught.float(2e308);
        }), false);
        this.eq((Ωit_608 = function() {
          return isa.posnaught.integer(2e308);
        }), false);
        this.eq((Ωit_609 = function() {
          return isa.posnaught.infinity(2e308);
        }), true);
        this.eq((Ωit_610 = function() {
          return isa.negnaught.float(2e308);
        }), false);
        this.eq((Ωit_611 = function() {
          return isa.negnaught.integer(2e308);
        }), false);
        this.eq((Ωit_612 = function() {
          return isa.negnaught.infinity(2e308);
        }), false);
        //.......................................................................................................
        this.eq((Ωit_613 = function() {
          return isa.positive.float(+4.3);
        }), true);
        this.eq((Ωit_614 = function() {
          return isa.positive.integer(+4.3);
        }), false);
        this.eq((Ωit_615 = function() {
          return isa.positive.infinity(+4.3);
        }), false);
        this.eq((Ωit_616 = function() {
          return isa.negative.float(+4.3);
        }), false);
        this.eq((Ωit_617 = function() {
          return isa.negative.integer(+4.3);
        }), false);
        this.eq((Ωit_618 = function() {
          return isa.negative.infinity(+4.3);
        }), false);
        this.eq((Ωit_619 = function() {
          return isa.posnaught.float(+4.3);
        }), true);
        this.eq((Ωit_620 = function() {
          return isa.posnaught.integer(+4.3);
        }), false);
        this.eq((Ωit_621 = function() {
          return isa.posnaught.infinity(+4.3);
        }), false);
        this.eq((Ωit_622 = function() {
          return isa.negnaught.float(+4.3);
        }), false);
        this.eq((Ωit_623 = function() {
          return isa.negnaught.integer(+4.3);
        }), false);
        this.eq((Ωit_624 = function() {
          return isa.negnaught.infinity(+4.3);
        }), false);
        //.......................................................................................................
        this.eq((Ωit_625 = function() {
          return isa.positive.float(-4.3);
        }), false);
        this.eq((Ωit_626 = function() {
          return isa.positive.integer(-4.3);
        }), false);
        this.eq((Ωit_627 = function() {
          return isa.positive.infinity(-4.3);
        }), false);
        this.eq((Ωit_628 = function() {
          return isa.negative.float(-4.3);
        }), true);
        this.eq((Ωit_629 = function() {
          return isa.negative.integer(-4.3);
        }), false);
        this.eq((Ωit_630 = function() {
          return isa.negative.infinity(-4.3);
        }), false);
        this.eq((Ωit_631 = function() {
          return isa.posnaught.float(-4.3);
        }), false);
        this.eq((Ωit_632 = function() {
          return isa.posnaught.integer(-4.3);
        }), false);
        this.eq((Ωit_633 = function() {
          return isa.posnaught.infinity(-4.3);
        }), false);
        this.eq((Ωit_634 = function() {
          return isa.negnaught.float(-4.3);
        }), true);
        this.eq((Ωit_635 = function() {
          return isa.negnaught.integer(-4.3);
        }), false);
        this.eq((Ωit_636 = function() {
          return isa.negnaught.infinity(-4.3);
        }), false);
        //.......................................................................................................
        this.eq((Ωit_637 = function() {
          return isa.posnaught(+2e308);
        }), true);
        this.eq((Ωit_638 = function() {
          return isa.negnaught(+2e308);
        }), false);
        this.eq((Ωit_639 = function() {
          return isa.posnaught(-2e308);
        }), false);
        this.eq((Ωit_640 = function() {
          return isa.negnaught(-2e308);
        }), true);
        this.eq((Ωit_641 = function() {
          return isa.posnaught(0);
        }), true);
        this.eq((Ωit_642 = function() {
          return isa.negnaught(0);
        }), true);
        this.eq((Ωit_643 = function() {
          return isa.posnaught(0);
        }), true);
        this.eq((Ωit_644 = function() {
          return isa.negnaught(0);
        }), true);
        //.......................................................................................................
        this.eq((Ωit_645 = function() {
          return isa.frozen(Object.freeze({}));
        }), true);
        this.eq((Ωit_646 = function() {
          return isa.frozen(Object.freeze([]));
        }), true);
        this.eq((Ωit_647 = function() {
          return isa.frozen({});
        }), false);
        this.eq((Ωit_648 = function() {
          return isa.frozen([]);
        }), false);
        this.eq((Ωit_649 = function() {
          return isa.frozen.object(Object.freeze({}));
        }), true);
        this.eq((Ωit_650 = function() {
          return isa.frozen.list(Object.freeze([]));
        }), true);
        this.eq((Ωit_651 = function() {
          return isa.frozen.object({});
        }), false);
        this.eq((Ωit_652 = function() {
          return isa.frozen.list([]);
        }), false);
        //.......................................................................................................
        this.eq((Ωit_653 = function() {
          return isa.odd.integer([]);
        }), false);
        this.eq((Ωit_654 = function() {
          return isa.odd.integer(102.4);
        }), false);
        this.eq((Ωit_655 = function() {
          return isa.odd.integer(9997);
        }), true);
        this.eq((Ωit_656 = function() {
          return isa.odd.integer('1024');
        }), false);
        this.eq((Ωit_657 = function() {
          return isa.odd.integer(0);
        }), false);
        this.eq((Ωit_658 = function() {
          return isa.odd.integer(1024);
        }), false);
        this.eq((Ωit_659 = function() {
          return isa.odd.positive.integer(1024);
        }), false);
        this.eq((Ωit_660 = function() {
          return isa.odd.positive.integer(102.4);
        }), false);
        this.eq((Ωit_661 = function() {
          return isa.odd.positive.integer(1023);
        }), true);
        this.eq((Ωit_662 = function() {
          return isa.odd.positive.integer(-1023);
        }), false);
        this.eq((Ωit_663 = function() {
          return isa.odd.positive.integer(103.4);
        }), false);
        this.eq((Ωit_664 = function() {
          return isa.even.integer([]);
        }), false);
        this.eq((Ωit_665 = function() {
          return isa.even.integer(102.4);
        }), false);
        this.eq((Ωit_666 = function() {
          return isa.even.integer(9997);
        }), false);
        this.eq((Ωit_667 = function() {
          return isa.even.integer('1024');
        }), false);
        this.eq((Ωit_668 = function() {
          return isa.even.integer(0);
        }), true);
        this.eq((Ωit_669 = function() {
          return isa.even.integer(1024);
        }), true);
        this.eq((Ωit_670 = function() {
          return isa.even.positive.integer(1024);
        }), true);
        this.eq((Ωit_671 = function() {
          return isa.even.positive.integer(0);
        }), false);
        this.eq((Ωit_672 = function() {
          return isa.even.posnaught.integer(1024);
        }), true);
        this.eq((Ωit_673 = function() {
          return isa.even.posnaught.integer(0);
        }), true);
        //.......................................................................................................
        this.eq((Ωit_674 = function() {
          return isa.even.posnaught(0);
        }), true);
        this.eq((Ωit_675 = function() {
          return isa.even.posnaught(1);
        }), false);
        this.eq((Ωit_676 = function() {
          return isa.even.posnaught(2);
        }), true);
        //.......................................................................................................
        this.eq((Ωit_677 = function() {
          return isa.cardinal(-1024);
        }), false);
        this.eq((Ωit_678 = function() {
          return isa.cardinal(10);
        }), true);
        this.eq((Ωit_679 = function() {
          return isa.cardinal(123.7);
        }), false);
        this.eq((Ωit_680 = function() {
          return isa.cardinal(0);
        }), true);
        this.eq((Ωit_681 = function() {
          return isa.cardinal(1);
        }), true);
        this.eq((Ωit_682 = function() {
          return isa.cardinal(2e308);
        }), false);
        this.eq((Ωit_683 = function() {
          return evaluate.cardinal(2e308);
        }), {
          cardinal: false
        });
        this.eq((Ωit_684 = function() {
          return evaluate.posnaught.integer(2e308);
        }), {
          'posnaught.integer': false
        });
        //.......................................................................................................
        return null;
      })();
      //.........................................................................................................
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    disallow_rhs_optional: function() {
      var Intertype;
      ({Intertype} = require('../../../apps/intertype'));
      (() => {        //.........................................................................................................
        var Ωit_685, Ωit_686, Ωit_687, Ωit_688, Ωit_689, Ωit_690;
        /* TAINT observe the out-comment messages would perhaps make more sense as they are more specific */
        this.eq((Ωit_685 = function() {
          return (new Intertype()).declare({
            foo: 'float'
          });
        }), null);
        this.eq((Ωit_686 = function() {
          return (new Intertype()).declare({
            foo: 'text'
          });
        }), null);
        // ( new Intertype() ).declare { foo: 'optional', }
        this.throws((Ωit_687 = function() {
          return (new Intertype()).declare({
            foo: 'optional'
          });
        }), /illegal use of 'optional' in declaration of type 'foo'/);
        this.throws((Ωit_688 = function() {
          return (new Intertype()).declare({
            foo: 'qqq'
          });
        }), /unknown type 'qqq'/);
        this.throws((Ωit_689 = function() {
          return (new Intertype()).declare({
            foo: 'optional.float'
          });
        }), /illegal use of 'optional' in declaration of type 'foo'/);
        this.throws((Ωit_690 = function() {
          return (new Intertype()).declare({
            foo: 'anything.float'
          });
        }), /illegal use of basetype 'anything' in declaration of type 'foo'/);
        return null;
      })();
      //.........................................................................................................
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    parallel_behavior_of_isa_validate_mandatory_and_optional: function() {
      var Intertype;
      ({Intertype} = require('../../../apps/intertype'));
      (() => {        //.........................................................................................................
        var isa, validate, Ωit_691, Ωit_692, Ωit_693, Ωit_694, Ωit_695, Ωit_696, Ωit_697, Ωit_698, Ωit_699, Ωit_700, Ωit_701, Ωit_702, Ωit_703, Ωit_704, Ωit_705, Ωit_706;
        ({isa, validate} = new Intertype({
          normalfloat: (function(x) {
            return (this.isa.float(x)) && ((0 <= x && x <= 1));
          })
        }));
        this.eq((Ωit_691 = function() {
          return isa.normalfloat(0);
        }), true);
        this.eq((Ωit_692 = function() {
          return isa.normalfloat(null);
        }), false);
        this.eq((Ωit_693 = function() {
          return isa.normalfloat(-1);
        }), false);
        this.eq((Ωit_694 = function() {
          return isa.normalfloat('?');
        }), false);
        this.eq((Ωit_695 = function() {
          return isa.optional.normalfloat(0);
        }), true);
        this.eq((Ωit_696 = function() {
          return isa.optional.normalfloat(null);
        }), true);
        this.eq((Ωit_697 = function() {
          return isa.optional.normalfloat(-1);
        }), false);
        this.eq((Ωit_698 = function() {
          return isa.optional.normalfloat('?');
        }), false);
        this.eq((Ωit_699 = function() {
          return validate.normalfloat(0);
        }), 0);
        this.eq((Ωit_700 = function() {
          return validate.optional.normalfloat(0);
        }), 0);
        this.eq((Ωit_701 = function() {
          return validate.optional.normalfloat(null);
        }), null);
        this.throws((Ωit_702 = function() {
          return validate.normalfloat(null);
        }), /expected a normalfloat, got a null/);
        this.throws((Ωit_703 = function() {
          return validate.normalfloat(-1);
        }), /expected a normalfloat, got a float/);
        this.throws((Ωit_704 = function() {
          return validate.normalfloat('?');
        }), /expected a normalfloat, got a text/);
        this.throws((Ωit_705 = function() {
          return validate.optional.normalfloat(-1);
        }), /expected an optional normalfloat, got a float/);
        this.throws((Ωit_706 = function() {
          return validate.optional.normalfloat('?');
        }), /expected an optional normalfloat, got a text/);
        return null;
      })();
      (() => {        //.........................................................................................................
        var isa, my_types, types, validate, Ωit_707, Ωit_708, Ωit_709, Ωit_710, Ωit_711, Ωit_712, Ωit_713, Ωit_714, Ωit_715, Ωit_716, Ωit_717, Ωit_718, Ωit_719, Ωit_720, Ωit_721, Ωit_722, Ωit_723, Ωit_724, Ωit_725, Ωit_726, Ωit_727, Ωit_728, Ωit_729, Ωit_730, Ωit_731, Ωit_732, Ωit_733, Ωit_734, Ωit_735, Ωit_736, Ωit_737;
        my_types = {
          'quantity': 'object',
          'quantity.q': 'float',
          'quantity.u': 'text',
          'foo': 'object',
          'foo.bar': 'object',
          'foo.bar.baz': 'float'
        };
        ({isa, validate} = types = new Intertype(my_types));
        this.eq((Ωit_707 = function() {
          return isa.quantity({
            q: 1,
            u: 'm'
          });
        }), true);
        this.eq((Ωit_708 = function() {
          return isa.quantity(null);
        }), false);
        this.eq((Ωit_709 = function() {
          return isa.optional.quantity({
            q: 2,
            u: 'm'
          });
        }), true);
        this.eq((Ωit_710 = function() {
          return isa.optional.quantity(null);
        }), true);
        this.eq((Ωit_711 = function() {
          return validate.quantity({
            q: 3,
            u: 'm'
          });
        }), {
          q: 3,
          u: 'm'
        });
        this.eq((Ωit_712 = function() {
          return validate.optional.quantity({
            q: 4,
            u: 'm'
          });
        }), {
          q: 4,
          u: 'm'
        });
        this.eq((Ωit_713 = function() {
          return validate.optional.quantity.q(null);
        }), null);
        this.eq((Ωit_714 = function() {
          return validate.optional.quantity.q(111);
        }), 111);
        this.eq((Ωit_715 = function() {
          return isa.quantity(null);
        }), false);
        this.eq((Ωit_716 = function() {
          return isa.quantity(-1);
        }), false);
        this.eq((Ωit_717 = function() {
          return isa.quantity('?');
        }), false);
        this.eq((Ωit_718 = function() {
          return isa.quantity.q('?');
        }), false);
        this.eq((Ωit_719 = function() {
          return isa.quantity.q(3);
        }), true);
        this.eq((Ωit_720 = function() {
          return isa.optional.quantity({
            q: 1,
            u: 'm'
          });
        }), true);
        this.eq((Ωit_721 = function() {
          return isa.optional.quantity(null);
        }), true);
        this.eq((Ωit_722 = function() {
          return isa.optional.quantity(-1);
        }), false);
        this.eq((Ωit_723 = function() {
          return isa.optional.quantity('?');
        }), false);
        this.eq((Ωit_724 = function() {
          return isa.optional.quantity.q('?');
        }), false);
        this.eq((Ωit_725 = function() {
          return isa.optional.quantity.q(3);
        }), true);
        this.eq((Ωit_726 = function() {
          return validate.quantity({
            q: 1,
            u: 'm'
          });
        }), {
          q: 1,
          u: 'm'
        });
        this.eq((Ωit_727 = function() {
          return validate.optional.quantity({
            q: 1,
            u: 'm'
          });
        }), {
          q: 1,
          u: 'm'
        });
        this.eq((Ωit_728 = function() {
          return validate.optional.quantity(null);
        }), null);
        this.throws((Ωit_729 = function() {
          return validate.quantity({
            q: 5
          });
        }), /expected a quantity, got a object/);
        this./* TAINT message should be more specific */throws((Ωit_730 = function() {
          return validate.quantity(null);
        }), /expected a quantity, got a null/);
        this.throws((Ωit_731 = function() {
          return validate.quantity(-1);
        }), /expected a quantity, got a float/);
        this.throws((Ωit_732 = function() {
          return validate.quantity('?');
        }), /expected a quantity, got a text/);
        this.throws((Ωit_733 = function() {
          return validate.quantity({
            q: 1
          });
        }), /expected a quantity, got a object/);
        this./* TAINT message should be more specific */throws((Ωit_734 = function() {
          return validate.optional.quantity(-1);
        }), /expected an optional quantity, got a float/);
        this.throws((Ωit_735 = function() {
          return validate.optional.quantity({
            q: 1
          });
        }), /expected an optional quantity, got a object/);
        this./* TAINT message should be more specific */throws((Ωit_736 = function() {
          return validate.optional.quantity.q({
            q: 1
          });
        }), /expected an optional quantity.q, got a object/);
        this.throws((Ωit_737 = function() {
          return validate.optional.quantity.q(3, 4, 5);
        }), /method 'validate.optional.quantity.q' expects 1 arguments, got 3/);
        return null;
      })();
      //.........................................................................................................
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    declaration_role_field: function() {
      var Intertype;
      ({Intertype} = require('../../../apps/intertype'));
      (() => {        //.........................................................................................................
        var declarations, Ωit_738, Ωit_739, Ωit_740, Ωit_741, Ωit_742;
        ({declarations} = new Intertype());
        this.eq((Ωit_738 = function() {
          return declarations.float.role;
        }), 'usertype');
        this.eq((Ωit_739 = function() {
          return declarations.null.role;
        }), 'basetype');
        this.eq((Ωit_740 = function() {
          return declarations.anything.role;
        }), 'basetype');
        this.eq((Ωit_741 = function() {
          return declarations.unknown.role;
        }), 'basetype');
        this.eq((Ωit_742 = function() {
          return declarations.optional.role;
        }), 'optional');
        // @throws T, /expected a normalfloat, got a null/,             -> validate.normalfloat           null
        return null;
      })();
      //.........................................................................................................
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    minimal_type_of_results: function() {
      var Intertype_minimal, create, declare, isa, type_of, validate;
      ({Intertype_minimal} = require('../../../apps/intertype'));
      ({isa, validate, create, declare, type_of} = new Intertype_minimal());
      (() => {        //.........................................................................................................
        var Ωit_743, Ωit_744, Ωit_745, Ωit_746;
        this.eq((Ωit_743 = function() {
          return type_of(null);
        }), 'null');
        this.eq((Ωit_744 = function() {
          return type_of(void 0);
        }), 'undefined');
        this.eq((Ωit_745 = function() {
          return type_of(+2e308);
        }), 'unknown');
        this.eq((Ωit_746 = function() {
          return type_of(4);
        }), 'unknown');
        return null;
      })();
      (() => {        //.........................................................................................................
        var Ωit_747, Ωit_748, Ωit_749, Ωit_750;
        this.eq((Ωit_747 = function() {
          return isa.anything(1);
        }), true);
        this.eq((Ωit_748 = function() {
          return isa.nothing(1);
        }), false);
        this.eq((Ωit_749 = function() {
          return isa.something(1);
        }), true);
        this.eq((Ωit_750 = function() {
          return isa.unknown(1);
        }), true);
        return null;
      })();
      (() => {        //.........................................................................................................
        var Ωit_751, Ωit_752, Ωit_753, Ωit_754;
        this.eq((Ωit_751 = function() {
          return isa.anything(null);
        }), true);
        this.eq((Ωit_752 = function() {
          return isa.nothing(null);
        }), true);
        this.eq((Ωit_753 = function() {
          return isa.something(null);
        }), false);
        this.eq((Ωit_754 = function() {
          return isa.unknown(null);
        }), false);
        return null;
      })();
      (() => {        //.........................................................................................................
        var Ωit_755, Ωit_756, Ωit_757, Ωit_758;
        this.eq((Ωit_755 = function() {
          return isa.anything(void 0);
        }), true);
        this.eq((Ωit_756 = function() {
          return isa.nothing(void 0);
        }), true);
        this.eq((Ωit_757 = function() {
          return isa.something(void 0);
        }), false);
        this.eq((Ωit_758 = function() {
          return isa.unknown(void 0);
        }), false);
        return null;
      })();
      (() => {        //.........................................................................................................
        var Ωit_759, Ωit_760, Ωit_761;
        this.throws((Ωit_759 = function() {
          return isa.optional(1);
        }), /`optional` is not a legal type for `isa` methods/);
        this.throws((Ωit_760 = function() {
          return validate.optional(1);
        }), /`optional` is not a legal type for `validate` methods/);
        this.throws((Ωit_761 = function() {
          return create.optional(1);
        }), /`optional` is not a legal type for `create` methods/);
        return null;
      })();
      //.........................................................................................................
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    can_use_null_and_undefined_in_record_create_methods: function() {
      var Intertype, types, Ωit_762, Ωit_763, Ωit_764, Ωit_765, Ωit_766, Ωit_767;
      ({Intertype} = require('../../../apps/intertype'));
      types = new Intertype();
      types.declare({
        foobar: {
          fields: {
            foo: 'integer',
            bar: 'integer'
          },
          template: {
            foo: 4,
            bar: 5
          }
        }
      });
      this.eq((Ωit_762 = function() {
        return types.create.foobar({
          foo: 8,
          bar: 9
        });
      }), {
        foo: 8,
        bar: 9
      });
      this.eq((Ωit_763 = function() {
        return types.create.foobar({
          foo: 8
        });
      }), {
        foo: 8,
        bar: 5
      });
      this.eq((Ωit_764 = function() {
        return types.create.foobar({
          foo: 4,
          bar: 5
        });
      }), {
        foo: 4,
        bar: 5
      });
      this.eq((Ωit_765 = function() {
        return types.create.foobar({});
      }), {
        foo: 4,
        bar: 5
      });
      this.eq((Ωit_766 = function() {
        return types.create.foobar(void 0);
      }), {
        foo: 4,
        bar: 5
      });
      this.eq((Ωit_767 = function() {
        return types.create.foobar(null);
      }), {
        foo: 4,
        bar: 5
      });
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    can_use_values_of_unknown_type: function() {
      (() => {
        var Intertype_minimal, types, Ωit_768, Ωit_769, Ωit_770, Ωit_771, Ωit_772;
        ({Intertype_minimal} = require('../../../apps/intertype'));
        types = new Intertype_minimal();
        types.declare({
          thirtyone: function(x) {
            return x === 31;
          }
        });
        this.eq((Ωit_768 = function() {
          return types.type_of(31);
        }), 'thirtyone');
        this.eq((Ωit_769 = function() {
          return types.type_of(32);
        }), 'unknown');
        this.eq((Ωit_770 = function() {
          return types.isa.thirtyone(31);
        }), true);
        this.eq((Ωit_771 = function() {
          return types.isa.thirtyone(32);
        }), false);
        this.eq((Ωit_772 = function() {
          return types.type_of(new Map());
        }), 'unknown');
        return null;
      })();
      (() => {        //.......................................................................................................
        var Intertype_minimal, types, Ωit_773, Ωit_774, Ωit_775, Ωit_776, Ωit_777;
        ({Intertype_minimal} = require('../../../apps/intertype'));
        types = new Intertype_minimal();
        types.declare({
          thirtyone: function(x) {
            return (this.isa.float(x)) && (x === 31);
          }
        });
        /* this used to be a problem        ^^^^ */
        types.declare({
          float: function(x) {
            return Number.isFinite(x);
          }
        });
        this.eq((Ωit_773 = function() {
          return types.type_of(31);
        }), 'thirtyone');
        this.eq((Ωit_774 = function() {
          return types.type_of(32);
        }), 'float');
        this.eq((Ωit_775 = function() {
          return types.isa.thirtyone(31);
        }), true);
        this.eq((Ωit_776 = function() {
          return types.isa.thirtyone(32);
        }), false);
        this.eq((Ωit_777 = function() {
          return types.type_of(new Map());
        }), 'unknown');
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    advanced_types: function() {
      var Intertype, types, Ωit_778, Ωit_779;
      ({Intertype} = require('../../../apps/intertype'));
      types = new Intertype();
      this.eq((Ωit_778 = function() {
        return types.type_of(new Set());
      }), 'set');
      this.eq((Ωit_779 = function() {
        return types.type_of(new Map());
      }), 'map');
      return null;
    },
    //-----------------------------------------------------------------------------------------------------------
    kinds_and_roles: function() {
      var Intertype, types, Ωit_780, Ωit_781, Ωit_782, Ωit_783, Ωit_784, Ωit_785, Ωit_786;
      ({Intertype} = require('../../../apps/intertype'));
      types = new Intertype();
      types.declare({
        foo: {
          fields: {
            d: 'integer',
            e: 'float'
          }
        },
        bar: 'foo'
      });
      this.eq((Ωit_780 = function() {
        return types.declarations.integer.kind;
      }), 'float');
      this.eq((Ωit_781 = function() {
        return types.declarations.foo.type;
      }), 'foo');
      this.eq((Ωit_782 = function() {
        return types.declarations.foo.kind;
      }), 'object');
      this.eq((Ωit_783 = function() {
        return types.declarations.foo.role;
      }), 'usertype');
      this.eq((Ωit_784 = function() {
        return types.declarations.bar.type;
      }), 'bar');
      this.eq((Ωit_785 = function() {
        return types.declarations.bar.kind;
      }), 'foo');
      this.eq((Ωit_786 = function() {
        return types.declarations.bar.role;
      }), 'usertype');
      return null;
    },
    //=========================================================================================================
    Naming: {
      //-------------------------------------------------------------------------------------------------------
      type: function() {
        var Intertype, declaration, ref, t2, type, Ωit_787;
        ({Intertype} = require('../../../apps/intertype'));
        t2 = new Intertype();
        ref = t2.declarations;
        for (type in ref) {
          declaration = ref[type];
          this.eq((Ωit_787 = function() {
            return declaration.type === type;
          }), true);
        }
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      validate_methods: function() {
        var Intertype, t2, Ωit_788, Ωit_789;
        ({Intertype} = require('../../../apps/intertype'));
        t2 = new Intertype();
        this.eq((Ωit_788 = function() {
          return t2.validate.asyncfunction.name;
        }), 'validate.asyncfunction');
        this.eq((Ωit_789 = function() {
          return t2.validate.optional.asyncfunction.name;
        }), 'validate.optional.asyncfunction');
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      isa_methods: function() {
        var Intertype, t2, Ωit_790, Ωit_791, Ωit_792, Ωit_793, Ωit_794, Ωit_795, Ωit_796;
        ({Intertype} = require('../../../apps/intertype'));
        t2 = new Intertype();
        this.eq((Ωit_790 = function() {
          return t2.isa.asyncfunction.name;
        }), 'isa.asyncfunction');
        this.eq((Ωit_791 = function() {
          return t2.isa.optional.asyncfunction.name;
        }), 'isa.optional.asyncfunction');
        this.eq((Ωit_792 = function() {
          var ref;
          return (ref = t2.isa.null) != null ? ref.name : void 0;
        }), 'isa.null');
        this.eq((Ωit_793 = function() {
          var ref;
          return (ref = t2.isa.function) != null ? ref.name : void 0;
        }), 'isa.function');
        this.eq((Ωit_794 = function() {
          var ref;
          return (ref = t2.isa.boolean) != null ? ref.name : void 0;
        }), 'isa.boolean');
        this.eq((Ωit_795 = function() {
          var ref;
          return (ref = t2.isa.text) != null ? ref.name : void 0;
        }), 'isa.text');
        this.eq((Ωit_796 = function() {
          var ref;
          return (ref = t2.isa.asyncfunction) != null ? ref.name : void 0;
        }), 'isa.asyncfunction');
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      create_methods: function() {
        var Intertype, t2, Ωit_797, Ωit_798;
        ({Intertype} = require('../../../apps/intertype'));
        t2 = new Intertype();
        this.eq((Ωit_797 = function() {
          return t2.create.function.name;
        }), 'create.function');
        this.eq((Ωit_798 = function() {
          return t2.create.float.name;
        }), 'create.float');
        return null;
      }
    },
    //=========================================================================================================
    Create_methods: {
      //-------------------------------------------------------------------------------------------------------
      floats: function() {
        var Intertype, t2, Ωit_799, Ωit_800, Ωit_801, Ωit_802, Ωit_803, Ωit_804, Ωit_805, Ωit_806, Ωit_807, Ωit_808, Ωit_809, Ωit_810, Ωit_811, Ωit_812;
        ({Intertype} = require('../../../apps/intertype'));
        t2 = new Intertype();
        this.eq((Ωit_799 = function() {
          return t2.create.float();
        }), 0);
        this.eq((Ωit_800 = function() {
          return t2.create.float(+0);
        }), 0);
        this.eq((Ωit_801 = function() {
          return t2.create.float(-0);
        }), 0);
        this.eq((Ωit_802 = function() {
          return t2.create.float(false);
        }), 0);
        this.eq((Ωit_803 = function() {
          return t2.create.float(true);
        }), 1);
        this.eq((Ωit_804 = function() {
          return t2.create.float(12.34);
        }), 12.34);
        this.eq((Ωit_805 = function() {
          return t2.create.float('12.34');
        }), 12.34);
        this.eq((Ωit_806 = function() {
          return t2.create.float(+12.34);
        }), 12.34);
        this.eq((Ωit_807 = function() {
          return t2.create.float('+12.34');
        }), 12.34);
        this.eq((Ωit_808 = function() {
          return t2.create.float(-12.34);
        }), -12.34);
        this.eq((Ωit_809 = function() {
          return t2.create.float('-12.34');
        }), -12.34);
        this.eq((Ωit_810 = function() {
          return t2.create.float(null);
        }), 0);
        this.eq((Ωit_811 = function() {
          return t2.create.float(void 0);
        }), 0);
        this.throws((Ωit_812 = function() {
          return t2.create.float('');
        }), /these arguments are not suitable for `create.float\(\)`: ''/);
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      integers: function() {
        var Intertype, t2, Ωit_813, Ωit_814, Ωit_815, Ωit_816, Ωit_817, Ωit_818, Ωit_819, Ωit_820, Ωit_821, Ωit_822, Ωit_823, Ωit_824, Ωit_825, Ωit_826;
        ({Intertype} = require('../../../apps/intertype'));
        t2 = new Intertype();
        this.eq((Ωit_813 = function() {
          return t2.create.integer();
        }), 0);
        this.eq((Ωit_814 = function() {
          return t2.create.integer(+0);
        }), 0);
        this.eq((Ωit_815 = function() {
          return t2.create.integer(-0);
        }), 0);
        this.eq((Ωit_816 = function() {
          return t2.create.integer(false);
        }), 0);
        this.eq((Ωit_817 = function() {
          return t2.create.integer(true);
        }), 1);
        this.eq((Ωit_818 = function() {
          return t2.create.integer(12.34);
        }), 12);
        this.eq((Ωit_819 = function() {
          return t2.create.integer('12');
        }), 12);
        this.eq((Ωit_820 = function() {
          return t2.create.integer(+12);
        }), 12);
        this.eq((Ωit_821 = function() {
          return t2.create.integer('+12');
        }), 12);
        this.eq((Ωit_822 = function() {
          return t2.create.integer(-12);
        }), -12);
        this.eq((Ωit_823 = function() {
          return t2.create.integer('-12');
        }), -12);
        this.eq((Ωit_824 = function() {
          return t2.create.integer(null);
        }), 0);
        this.eq((Ωit_825 = function() {
          return t2.create.integer(void 0);
        }), 0);
        this.throws((Ωit_826 = function() {
          return t2.create.integer('');
        }), /these arguments are not suitable for `create.integer\(\)`: ''/);
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      cardinals: function() {
        var Intertype, t2, Ωit_827, Ωit_828, Ωit_829, Ωit_830, Ωit_831, Ωit_832, Ωit_833, Ωit_834, Ωit_835, Ωit_836, Ωit_837, Ωit_838, Ωit_839, Ωit_840;
        ({Intertype} = require('../../../apps/intertype'));
        t2 = new Intertype();
        this.eq((Ωit_827 = function() {
          return t2.create.cardinal();
        }), 0);
        this.eq((Ωit_828 = function() {
          return t2.create.cardinal(+0);
        }), +0);
        this.eq((Ωit_829 = function() {
          return t2.create.cardinal(-0);
        }), -0);
        this.eq((Ωit_830 = function() {
          return t2.create.cardinal(false);
        }), 0);
        this.eq((Ωit_831 = function() {
          return t2.create.cardinal(true);
        }), 1);
        this.eq((Ωit_832 = function() {
          return t2.create.cardinal(12.34);
        }), 12);
        this.eq((Ωit_833 = function() {
          return t2.create.cardinal('12');
        }), 12);
        this.eq((Ωit_834 = function() {
          return t2.create.cardinal(+12);
        }), 12);
        this.eq((Ωit_835 = function() {
          return t2.create.cardinal('+12');
        }), 12);
        this.throws((Ωit_836 = function() {
          return t2.create.cardinal(-12);
        }), /these arguments are not suitable for `create.cardinal\(\)`: -12/);
        this.throws((Ωit_837 = function() {
          return t2.create.cardinal('-12');
        }), /these arguments are not suitable for `create.cardinal\(\)`: '-12'/);
        this.eq((Ωit_838 = function() {
          return t2.create.cardinal(null);
        }), 0);
        this.eq((Ωit_839 = function() {
          return t2.create.cardinal(void 0);
        }), 0);
        this.throws((Ωit_840 = function() {
          return t2.create.cardinal('');
        }), /these arguments are not suitable for `create.cardinal\(\)`: ''/);
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      texts: function() {
        var Intertype, t2, Ωit_841, Ωit_842, Ωit_843, Ωit_844, Ωit_845, Ωit_846, Ωit_847, Ωit_848, Ωit_849, Ωit_850, Ωit_851, Ωit_852, Ωit_853, Ωit_854;
        ({Intertype} = require('../../../apps/intertype'));
        t2 = new Intertype();
        this.eq((Ωit_841 = function() {
          return t2.create.text();
        }), '');
        this.eq((Ωit_842 = function() {
          return t2.create.text(+0);
        }), '0');
        this.eq((Ωit_843 = function() {
          return t2.create.text(-0);
        }), '-0');
        this.eq((Ωit_844 = function() {
          return t2.create.text(false);
        }), 'false');
        this.eq((Ωit_845 = function() {
          return t2.create.text(true);
        }), 'true');
        this.eq((Ωit_846 = function() {
          return t2.create.text(12.34);
        }), '12.34');
        this.eq((Ωit_847 = function() {
          return t2.create.text('12');
        }), '12');
        this.eq((Ωit_848 = function() {
          return t2.create.text(+12);
        }), '12');
        this.eq((Ωit_849 = function() {
          return t2.create.text('+12');
        }), '+12');
        this.eq((Ωit_850 = function() {
          return t2.create.text(-12);
        }), '-12');
        this.eq((Ωit_851 = function() {
          return t2.create.text('-12');
        }), '-12');
        this.eq((Ωit_852 = function() {
          return t2.create.text(null);
        }), '');
        this.eq((Ωit_853 = function() {
          return t2.create.text(void 0);
        }), '');
        this.eq((Ωit_854 = function() {
          return t2.create.text('');
        }), '');
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      on_dotted_types_1: function() {
        var Intertype, has_been_called;
        ({Intertype} = require('../../../apps/intertype'));
        has_been_called = {
          create_quantity: 0,
          create_quantity_q: 0,
          create_quantity_u: 0
        };
        return (() => {          //.....................................................................................................
          var declarations, t2, Ωit_859, Ωit_860, Ωit_861, Ωit_862, Ωit_863, Ωit_864, Ωit_865, Ωit_866, Ωit_867;
          declarations = {
            quantity: {
              test: 'object',
              template: {
                q: 0,
                u: 'u'
              },
              create: function(x) {
                has_been_called.create_quantity++;
                debug('Ω_855', `create.quantity( ${rpr(x)} )`);
                debug('Ω_856', {...this.declarations.quantity.template, ...x});
                return {...this.declarations.quantity.template, ...x};
              }
            },
            'quantity.q': {
              test: 'float',
              create: function(x) {
                has_been_called.create_quantity_q++;
                debug('Ω_857', `create.quantity.q( ${rpr(x)} )`);
                return 0;
              }
            },
            'quantity.u': {
              test: 'text',
              create: function(x) {
                has_been_called.create_quantity_u++;
                debug('Ω_858', `create.quantity.u( ${rpr(x)} )`);
                return 'u';
              }
            }
          };
          t2 = new Intertype(declarations);
          this.eq((Ωit_859 = function() {
            return t2.create.quantity();
          }), {
            q: 0,
            u: 'u'
          });
          this.eq((Ωit_860 = function() {
            return has_been_called.create_quantity;
          }), 1);
          this.eq((Ωit_861 = function() {
            return has_been_called.create_quantity_q;
          }), 1);
          this.eq((Ωit_862 = function() {
            return has_been_called.create_quantity_u;
          }), 1);
          this.eq((Ωit_863 = function() {
            return t2.create.quantity('12.5m');
          }), {
            q: 12.5,
            u: 'm'
          });
          this.eq((Ωit_864 = function() {
            return t2.create.quantity.q();
          }), 0);
          this.eq((Ωit_865 = function() {
            return t2.create.quantity.u();
          }), 'u');
          this.eq((Ωit_866 = function() {
            return t2.create['quantity.q']();
          }), 0);
          this.eq((Ωit_867 = function() {
            return t2.create['quantity.u']();
          }), 'u');
          return null;
        })();
      },
      //-------------------------------------------------------------------------------------------------------
      on_dotted_types_2: function() {
        var Intertype, has_been_called;
        ({Intertype} = require('../../../apps/intertype'));
        has_been_called = {
          create_quantity: 0,
          create_quantity_q: 0,
          create_quantity_u: 0
        };
        return (() => {          //.....................................................................................................
          var declarations, t2, Ωit_868, Ωit_869, Ωit_870, Ωit_871, Ωit_872, Ωit_873;
          declarations = {
            quantity: {
              test: 'object',
              fields: {
                q: {
                  test: 'float',
                  create: function(x) {
                    return 0;
                  }
                },
                u: {
                  test: 'text',
                  create: function(x) {
                    return 'u';
                  }
                }
              },
              template: {
                q: 0,
                u: 'u'
              },
              create: function(x) {
                return {
                  q: 0,
                  u: 'u'
                };
              }
            }
          };
          t2 = new Intertype(declarations);
          this.eq((Ωit_868 = function() {
            return t2.create.quantity();
          }), {
            q: 0,
            u: 'u'
          });
          this.eq((Ωit_869 = function() {
            return t2.create.quantity('12.5m');
          }), {
            q: 12.5,
            u: 'm'
          });
          this.eq((Ωit_870 = function() {
            return t2.create.quantity.q();
          }), 0);
          this.eq((Ωit_871 = function() {
            return t2.create.quantity.u();
          }), 'u');
          this.eq((Ωit_872 = function() {
            return t2.create['quantity.q']();
          }), 0);
          this.eq((Ωit_873 = function() {
            return t2.create['quantity.u']();
          }), 'u');
          return null;
        })();
      },
      //-------------------------------------------------------------------------------------------------------
      on_dotted_types_3: function() {
        var Intertype, has_been_called;
        ({Intertype} = require('../../../apps/intertype'));
        has_been_called = {
          create_quantity: 0,
          create_quantity_q: 0,
          create_quantity_u: 0
        };
        (() => {          //.....................................................................................................
          var declarations, t2;
          declarations = {
            literal: {
              role: 'qualifier',
              fields: {
                float: {
                  test: 'float',
                  create: function(x) {
                    return parseFloat(x);
                  }
                },
                integer: {
                  test: 'integer',
                  create: function(x) {
                    return parseInt(x, 10);
                  }
                }
              }
            }
          };
          t2 = new Intertype(declarations);
          debug('Ωit_874', t2.declarations['literal.float'].create('123.456e4'));
          debug('Ωit_875', t2.declarations['literal.integer'].create('123.456'));
          return null;
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      on_dotted_types_4: function() {
        var Intertype, has_been_called;
        ({Intertype} = require('../../../apps/intertype'));
        has_been_called = {
          create_quantity: 0
        };
        (() => {          //.....................................................................................................
          var declarations, t2, Ωit_877, Ωit_878, Ωit_879, Ωit_880, Ωit_881, Ωit_882, Ωit_883, Ωit_884, Ωit_885;
          declarations = {
            float1: 'float',
            float2: 'float1',
            float3: 'float2',
            float4: 'float3',
            quantity: {
              test: 'object',
              template: {
                q: 0,
                u: 'u'
              },
              create: function(x) {
                debug('Ω_876', {x});
                has_been_called.create_quantity++;
                return {
                  q: 0,
                  u: 'u',
                  ...x
                };
              }
            }
          };
          //...................................................................................................
          t2 = new Intertype(declarations);
          this.eq((Ωit_877 = function() {
            return t2.create.float();
          }), 0);
          this.eq((Ωit_878 = function() {
            return t2.create.float1();
          }), 0);
          this.eq((Ωit_879 = function() {
            return t2.create.float2();
          }), 0);
          this.eq((Ωit_880 = function() {
            return t2.create.float3();
          }), 0);
          this.eq((Ωit_881 = function() {
            return t2.create.float4();
          }), 0);
          this.eq((Ωit_882 = function() {
            return t2.create.quantity();
          }), {
            q: 0,
            u: 'u'
          });
          this.eq((Ωit_883 = function() {
            return t2.create.quantity({
              q: 1
            });
          }), {
            q: 1,
            u: 'u'
          });
          this.eq((Ωit_884 = function() {
            return t2.create.quantity({
              u: 'm'
            });
          }), {
            q: 0,
            u: 'm'
          });
          this.eq((Ωit_885 = function() {
            return has_been_called.create_quantity;
          }), 3);
          // @eq     ( Ωit_886 = -> t2.declarations.mass.kind          ), 'quantity'
          // @eq     ( Ωit_887 = -> t2.create[ 'quantity.q' ]()        ), 0
          // @eq     ( Ωit_888 = -> t2.create[ 'quantity.u' ]()        ), 'u'
          // #...................................................................................................
          // @eq     ( Ωit_889 = -> t2.create.mass()                   ), { q: 0, u: 'u', }
          // @eq     ( Ωit_890 = -> t2.create[ 'foo.bar.baz' ]()       ), { q: 0, u: 'u', }
          // @eq     ( Ωit_891 = -> t2.create.quantity.q()             ), 0
          // @eq     ( Ωit_892 = -> t2.create.quantity.u()             ), 'u'
          // @eq     ( Ωit_893 = -> t2.create.foo.bar.baz()            ), { q: 0, u: 'u', }
          // debug 'Ωit_894', t2.create.float
          // debug 'Ωit_895', t2.create.quantity
          debug('Ωit_896', has_been_called);
          debug('Ωit_897', has_been_called.create_quantity);
          return null;
        })();
        //.....................................................................................................
        return null;
      }
    },
    // #-------------------------------------------------------------------------------------------------------
    // posnaught_integers: ->
    //   { Intertype, } = require '../../../apps/intertype'
    //   t2 = new Intertype()
    //   @eq     ( Ωit_898 = -> t2.create.posnaught.integer()              ), 0
    //   @eq     ( Ωit_899 = -> t2.create.posnaught.integer +0             ), 0
    //   @eq     ( Ωit_900 = -> t2.create.posnaught.integer -0             ), 0
    //   @eq     ( Ωit_901 = -> t2.create.posnaught.integer false          ), 0
    //   @eq     ( Ωit_902 = -> t2.create.posnaught.integer true           ), 1
    //   @eq     ( Ωit_903 = -> t2.create.posnaught.integer 12.34          ), 12
    //   @eq     ( Ωit_904 = -> t2.create.posnaught.integer '12'           ), 12
    //   @eq     ( Ωit_905 = -> t2.create.posnaught.integer +12            ), 12
    //   @eq     ( Ωit_906 = -> t2.create.posnaught.integer '+12'          ), 12
    //   @eq     ( Ωit_907 = -> t2.create.posnaught.integer -12            ), -12
    //   @eq     ( Ωit_908 = -> t2.create.posnaught.integer '-12'          ), -12
    //   @eq     ( Ωit_909 = -> t2.create.posnaught.integer null           ), 0
    //   @eq     ( Ωit_910 = -> t2.create.posnaught.integer undefined      ), 0
    //   @throws ( Ωit_911 = -> t2.create.posnaught.integer ''             ), /these arguments are not suitable for `create.posnaught.integer\(\)`: \[ '' \]/
    //   return null
    Regexes: {
      floats: function() {
        var Intertype, i, is_valid_literal, j, l, len, len1, len2, len3, len4, m, match, o, pi, probe, probes_and_matchers, regex, regexes, ri, type_patterns, types, val_or_err;
        ({Intertype} = require('../../../apps/intertype'));
        type_patterns = require('../../../apps/intertype/lib/patterns');
        types = new Intertype();
        types.declare({
          is_valid_literal: function(x) {
            return x === true || x === false || x === null;
          }
        });
        // ///^   [-+]? (  [0-9]*[.])?[0-9]+([eE][-+]?\d+)?                                      $/// ### r0 ###
        // ///^ ( [-+]? (?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)(?:[eE][+-]?[0-9]+)?)                    $/// ### r1 ###
        // ///^ (?: (?: [-+]?[0-9]*\.?[0-9]+ ) | (?: [-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)? ) )  $/// ### r2 ###
        // ///^
        //       (?:
        //       [+-]? # optional sign
        //         (?: # start a conditional group
        //         \d+ # either a nonzero number of digits
        //         |   # or a decimal phrase
        //         \d* # optional digits preceding the decimal
        //         \.(?=\d) # a literal decimal followed by at least one digit
        //         \d* # optionally some more digits
        //         ) # note this group is mandatory!
        //         (?: # start an optional scientific notation group
        //         [eE] # the scientific notation character
        //         [+-]? # optional sign
        //         \d+ # after sci notation, you cannot go directly to a decimal
        //         )?
        //       )
        //       $ /// ### r3 ###
        // ///^   [-+]? (  [0-9]*[.])?[0-9]+([eE][-+]?\d+)?                                      $/// ### r4 ###
        // ///^[+\-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:\d[eE][+\-]?\d+)?$/// ### r5 thx to https://stackoverflow.com/a/51790561/7568091 ###
        /* thx to https://stackoverflow.com/a/51790561/7568091 */
        // ///^[-+]?([0-9]*[.])?[0-9]+([eE][-+]?[0-9]+)?$/// ### r6 ###
        // ///^
        //   [-+]?
        //   (?:
        //     ([1-9][0-9]*[.])[0-9]+ |
        //     ([.])[0-9]+ |
        //     ([1-9][0-9]*)
        //     )
        //   ([eE][-+]?[0-9]+)?
        //   $///u ### r7 ###
        // type_patterns.patterns.any.float
        regexes = [type_patterns.patterns.only.float];
        // type_patterns.patterns.only.float_and_rest
        probes_and_matchers = [
          ['123',
          true,
          123],
          [/* p0  */
          '123.45',
          true,
          123.45],
          [/* p1  */
          '45e43',
          true,
          4.5e+44],
          [/* p2  */
          '.45',
          true,
          0.45],
          [/* p3  */
          '.45e43',
          true,
          4.5e+42],
          [/* p4  */
          '.45e+43',
          true,
          4.5e+42],
          [/* p5  */
          '.45e-43',
          true,
          4.5e-44],
          [/* p6  */
          '+.45',
          true,
          0.45],
          [/* p7  */
          '+.45e43',
          true,
          4.5e+42],
          [/* p8  */
          '+.45e+43',
          true,
          4.5e+42],
          [/* p9  */
          '+.45e-43',
          true,
          4.5e-44],
          [/* p10  */
          '-.45',
          true,
          -0.45],
          [/* p11 */
          '-.45e43',
          true,
          -4.5e+42],
          [/* p12 */
          '-.45e+43',
          true,
          -4.5e+42],
          [/* p13 */
          '-.45e-43',
          true,
          -4.5e-44],
          [/* p14 */
          '123e3',
          true,
          123000],
          [/* p15 */
          '123.0e3',
          true,
          123000],
          [/* p16 */
          '123.4e3',
          true,
          123400],
          [/* p17 */
          '+3',
          true,
          3],
          [/* p18 */
          '3.2e23',
          true,
          3.2e+23],
          [/* p19 */
          '-4.70e+9',
          true,
          -4.7e+9],
          [/* p20 */
          '-.2E-4',
          true,
          -0.2e-4],
          [/* p21 */
          '-7.6603',
          true,
          -7.6603],
          [/* p22 */
          //...................................................................................................
          '+0003',
          false,
          'Octal literals are not allowed in strict mode.'],
          [/* p23 */
          '0003',
          false,
          'Octal literals are not allowed in strict mode.'],
          [/* p24 */
          '-0003',
          false,
          'Octal literals are not allowed in strict mode.'],
          [/* p25 */
          '123.e3',
          null,
          123000],
          [/* p26 ? */
          '4567.',
          null,
          null],
          [/* p27 ?? */
          'e123',
          false,
          'e123 is not defined'],
          [/* p28 */
          'e-4',
          false,
          'e is not defined'],
          [/* p29 */
          '.e4',
          false,
          "Unexpected token '.'"],
          [/* p29 */
          '.45e-43.2',
          false,
          'Unexpected number'],
          [/* p30 ?? */
          '45e4৩',
          false,
          'Invalid or unexpected token'],
          [/* p31  */
          '37.e88',
          null,
          3.7e+89],
          [/* p32 (dot before the e) */
          '123.4.e3',
          null,
          null]
        ];
//.....................................................................................................
/* Test whether `is_valid_literal` entries are themselves valid */
/* p33 (parsed as attribute access) */
        for (pi = i = 0, len = probes_and_matchers.length; i < len; pi = ++i) {
          [probe, is_valid_literal, val_or_err] = probes_and_matchers[pi];
          types.validate.is_valid_literal(is_valid_literal);
          switch (true) {
            case is_valid_literal === true:
              this.eq(WGUY.props.nameit(`Ω_912-INVALID-TEST-p${pi}`, function() {
                return eval(probe);
              }), parseFloat(probe));
              this.eq(WGUY.props.nameit(`Ω_913-INVALID-TEST-p${pi}`, function() {
                return eval(probe);
              }), val_or_err);
              break;
            case is_valid_literal === false:
              this.throws(WGUY.props.nameit(`Ω_914-INVALID-TEST-p${pi}`, function() {
                return eval(probe);
              }), val_or_err);
              break;
            case is_valid_literal === null:
              this.pass('Ω_915', `${rpr(probe)} will be considered not well-formed for the purposes of this test`);
          }
        }
//.....................................................................................................
        for (ri = j = 0, len1 = regexes.length; j < len1; ri = ++j) {
          regex = regexes[ri];
          for (pi = l = 0, len2 = probes_and_matchers.length; l < len2; pi = ++l) {
            [probe, is_valid_literal] = probes_and_matchers[pi];
            regex.lastIndex = 0;
            if ((match = probe.match(regex)) != null) {
              switch (true) {
                case is_valid_literal === true:
                  this.pass(`Ω_916-r${ri}-p${pi}`);
                  break;
                case is_valid_literal === false:
                  this.fail(`Ω_917-r${ri}-p${pi}`, "expected no match but got one");
                  break;
                case is_valid_literal === null:
                  this.fail(`Ω_918-r${ri}-p${pi}`, "expected no match but got one");
              }
            } else {
              switch (true) {
                case is_valid_literal === true:
                  this.fail(`Ω_919-r${ri}-p${pi}`, "expected match but got none");
                  break;
                case is_valid_literal === false:
                  this.pass(`Ω_920-r${ri}-p${pi}`);
                  break;
                case is_valid_literal === null:
                  this.pass(`Ω_921-r${ri}-p${pi}`);
              }
            }
          }
        }
//.....................................................................................................
        for (ri = m = 0, len3 = regexes.length; m < len3; ri = ++m) {
          regex = regexes[ri];
          for (pi = o = 0, len4 = probes_and_matchers.length; o < len4; pi = ++o) {
            [probe, is_valid_literal] = probes_and_matchers[pi];
            regex.lastIndex = 0;
            if ((match = probe.match(regex)) != null) {
              switch (true) {
                case is_valid_literal === true:
                  help(`Ω_922-r${ri}-p${pi}`, match);
                  break;
                case is_valid_literal === false:
                  warn(reverse(`Ω_923-r${ri}-p${pi}`, match));
                  break;
                case is_valid_literal === null:
                  urge(reverse(`Ω_924-r${ri}-p${pi}`, match));
              }
            } else {
              switch (true) {
                case is_valid_literal === true:
                  help(reverse(`Ω_925-r${ri}-p${pi}`, match));
                  break;
                case is_valid_literal === false:
                  warn(`Ω_926-r${ri}-p${pi}`, match);
                  break;
                case is_valid_literal === null:
                  urge(`Ω_927-r${ri}-p${pi}`, match);
              }
            }
          }
        }
        //.....................................................................................................
        return null;
      }
    }
  };

  //   demo_exception_with_lacking_stacktrace_1: ->
  //     { Intertype, }  = require '../../../apps/intertype'
  //     types           = new Intertype()
  //     types.declare
  //             quantity:
  //               test:       'object'
  //               template:
  //                 q:        0
  //                 u:        'u'
  //               create: ( x ) ->
  //                 { q: 0, u: 'u', }
  //             'quantity.q':
  //               test: 'float'
  //               create: ( x ) -> 0
  //             'quantity.u':
  //               test: 'text'
  //               create: ( x ) -> 'u'
  //             mass:           'quantity'
  //     #.......................................................................................................
  //     try
  //       types.create.mass()
  //     catch error
  //       debug 'Ωit_928', format_error_stack error.stack
  //     #.......................................................................................................
  //     return null

  //   demo_exception_with_lacking_stacktrace_2: ->
  //     { Intertype, }  = require '../../../apps/intertype'
  //     types           = new Intertype()
  //     types.declare
  //             quantity:
  //               test:       'object'
  //               template:
  //                 q:        0
  //                 u:        'u'
  //               create: ( x ) ->
  //                 { q: 0, u: 'u', }
  //             'quantity.q':
  //               test: 'float'
  //               create: ( x ) -> 0
  //             'quantity.u':
  //               test: 'text'
  //               create: ( x ) -> 'u'
  //             mass:           'quantity'
  //     #.......................................................................................................
  //     try
  //       @eq ( Ω_929 = -> types.create.mass() ), { q: 0, u: 'u', }
  //     catch error
  //       debug 'Ωit_930', format_error_stack error.stack
  //     #.......................................................................................................
  //     return null

  // format_error_stack = ( stack ) ->
  //   lines = stack.split '\n'
  //   lines = ( line for line in lines when not /\bnode:/.test line )
  //   lines = ( ( if /jzr\/intertype/.test line then GUY.trm.yellow GUY.trm.reverse line else GUY.trm.white line ) for line in lines )
  //   return '\n\n' + ( lines.join '\n' ) + '\n'

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      // @use_fields_to_declare_qualifiers()
      // test @use_fields_to_declare_qualifiers
      // TT = { interface: @intertype_tasks.interface, }
      // ( new Test { throw_on_error: true, } ).test { TT, }
      // ( new Test { throw_on_error: false, } ).test ( { Create_methods: @intertype_tasks.Create_methods, } )
      // ( new Test { throw_on_error: false, } ).test ( { on_dotted_types: @intertype_tasks.Create_methods.on_dotted_types, } )
      // ( new Test { throw_on_error: false, } ).test ( { kinds_and_roles: @intertype_tasks.kinds_and_roles, } )
      // ( new Test { throw_on_error: false, } ).test {
      //     on_dotted_types_1: @intertype_tasks.Create_methods.on_dotted_types_1
      //     # on_dotted_types_2: @intertype_tasks.Create_methods.on_dotted_types_2
      //     # on_dotted_types_3: @intertype_tasks.Create_methods.on_dotted_types_3
      //     # on_dotted_types_4: @intertype_tasks.Create_methods.on_dotted_types_4
      //     }
      (new Test({
        throw_on_error: false
      })).test({
        can_create_types_with_templates_and_create: this.intertype_tasks.can_create_types_with_templates_and_create
      });
      // ( new Test { throw_on_error: false, } ).test ( { Naming: @intertype_tasks.Naming, } )
      // ( new Test { throw_on_error: false, } ).test ( { Regexes: @intertype_tasks.Regexes, } )
      // ( new Test { throw_on_error: true, } ).test ( { demo_exception_with_lacking_stacktrace_1: @intertype_tasks.demo_exception_with_lacking_stacktrace_1, } )
      // ( new Test { throw_on_error: true, } ).test ( { demo_exception_with_lacking_stacktrace_2: @intertype_tasks.demo_exception_with_lacking_stacktrace_2, } )
      // await ( new Test { throw_on_error: true, } ).async_test { tasks: @tasks, }
      // await ( new Test { throw_on_error: true, } ).async_test { can_use_values_of_unknown_type: @tasks.can_use_values_of_unknown_type, }
      return demo_1();
    })();
  }

}).call(this);

//# sourceMappingURL=test-basics.js.map