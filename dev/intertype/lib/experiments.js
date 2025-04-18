(async function() {
  'use strict';
  var GTNG, GUY, TMP_types, Test, WGUY, alert, debug, echo, get_typespaces, help, info, inspect, log, plain, praise, reverse, rpr, sample_declarations, urge, warn, whisper,
    modulo = function(a, b) { return (+a % (b = +b) + b) % b; };

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

  //===========================================================================================================
  get_typespaces = function() {
    var Typespace, cr1, crt, flatly_1, flatly_2, mvp, ts1;
    ({Typespace} = require('../../../apps/intertype'));
    //.........................................................................................................
    mvp = new Typespace({
      // anything:       ( x, t ) -> true
      nothing: function(x, t) {
        return x == null;
      },
      something: function(x, t) {
        return x != null;
      },
      primitive: function(x, t) {
        var ref;
        return (x === null || x === (void 0) || x === true || x === false) || ((ref = typeof x) === 'string' || ref === 'number');
      },
      object: function(x, t) {
        return !t.isa(mvp.primitive, x);
      },
      pod: function(x, t) {
        var ref;
        return (x != null) && ((ref = x.constructor) === Object || ref === (void 0));
      },
      //.......................................................................................................
      null: function(x, t) {
        return x === null;
      },
      undefined: function(x, t) {
        return x === void 0;
      },
      infinity: function(x, t) {
        return (x === +2e308) || (x === -2e308);
      },
      boolean: function(x, t) {
        return (x === true) || (x === false);
      },
      nan: function(x, t) {
        return Number.isNaN(x);
      },
      //.......................................................................................................
      integer: {
        isa: function(x, t) {
          return Number.isInteger(x);
        },
        foo: 4
      },
      odd: {
        isa: function(x, t) {
          return (t.isa(this.$typespace.integer, x)) && (modulo(x, 2) !== 0);
        }
      },
      // short form just assigns either a test method or a type name:
      even: function(x, t) {
        return (t.isa(this.$typespace.integer, x)) && (modulo(x, 2) === 0);
      },
      float: {
        isa: function(x, t) {
          return Number.isFinite(x);
        },
        template: 0
      },
      bigint: function(x, t) {
        return typeof x === 'bigint';
      },
      text: function(x, t) {
        return typeof x === 'string';
      },
      empty_text: function(x, t) {
        return x === '';
      },
      nonempty_text: function(x, t) {
        return (t.isa(this.$typespace.text, x)) && (x.length > 0);
      },
      //.......................................................................................................
      set: function(x, t) {
        return x instanceof Set;
      },
      map: function(x, t) {
        return x instanceof Map;
      },
      weakmap: function(x, t) {
        return x instanceof WeakMap;
      },
      list: function(x, t) {
        return Array.isArray(x);
      },
      //.......................................................................................................
      function: function(x, t) {
        return (Object.prototype.toString.call(x)) === '[object Function]';
      },
      asyncfunction: function(x, t) {
        return (Object.prototype.toString.call(x)) === '[object AsyncFunction]';
      },
      generatorfunction: function(x, t) {
        return (Object.prototype.toString.call(x)) === '[object GeneratorFunction]';
      },
      //.......................................................................................................
      // numerical:      ( x, t ) -> ( t.isa @$typespace.float, x   ) or ( t.isa @$typespace.bigint, x )
      // positive0:      ( x, t ) -> ( t.isa @$typespace.float, x   ) and ( x >= +0  )
      // positive1:      ( x, t ) -> ( t.isa @$typespace.float, x   ) and ( x >= +1  )
      // negative0:      ( x, t ) -> ( t.isa @$typespace.float, x   ) and ( x <=  0  )
      // negative1:      ( x, t ) -> ( t.isa @$typespace.float, x   ) and ( x <= -1  )
      // cardinal:       ( x, t ) -> ( t.isa @$typespace.integer, x ) and ( t.isa @$typespace.positive0, x )
      //.......................................................................................................
      // cardinalbigint: ( x, t ) -> ( t.isa @$typespace.bigint, x    ) and ( x >= +0 )
      //.......................................................................................................
      // circle1:  'circle2'
      // circle2:  'circle3'
      // circle3:  'circle1'
      //.......................................................................................................
      strange: 'odd', // declares another name for `odd`
      weird: 'strange', // declares another name for `odd`
      abnormal: 'weird', // declares another name for `odd`
      //.......................................................................................................
      quantity_refs: {
        fields: {
          // each field becomes a `Type` instance; strings may refer to names in the same typespace
          q: 'float',
          u: 'nonempty_text'
        },
        template: {
          q: 0,
          u: 'u'
        }
      },
      //.......................................................................................................
      quantity_funs: {
        fields: {
          q: function(x, t) {
            return t.isa(mvp.float, x);
          },
          u: function(x, t) {
            return t.isa(mvp.nonempty_text, x);
          }
        },
        template: {
          q: 0,
          u: 'u'
        }
      },
      //.......................................................................................................
      address: {
        fields: {
          postcode: 'nonempty_text',
          city: 'nonempty_text'
        }
      },
      //.......................................................................................................
      employee: {
        fields: {
          address: 'address',
          name: {
            fields: {
              firstname: 'nonempty_text',
              lastname: 'nonempty_text'
            }
          }
        }
      }
    });
    //.........................................................................................................
    ts1 = new Typespace({
      //.......................................................................................................
      quantity_typs: {
        fields: {
          q: mvp.float,
          u: mvp.nonempty_text
        },
        template: {
          q: 0,
          u: 'u'
        }
      },
      //.......................................................................................................
      quantity_typs_float_fb: {
        fields: {
          q: mvp.float,
          u: mvp.nonempty_text
        },
        template: {
          u: 'u'
        }
      },
      //.......................................................................................................
      quantity_typs_float_fb: {
        fields: {
          q: mvp.float,
          u: {
            isa: mvp.nonempty_text,
            template: 'u'
          }
        }
      },
      //.......................................................................................................
      float_one: {
        isa: mvp.float,
        template: 1
      },
      //.......................................................................................................
      name: {
        fields: {
          firstname: mvp.nonempty_text,
          lastname: mvp.nonempty_text
        }
      },
      //.......................................................................................................
      person: {
        fields: {
          address: mvp.address,
          name: 'name'
        }
      }
    });
    //.........................................................................................................
    flatly_1 = new Typespace({
      flat: function(x, t) {
        return t.isa(mvp.even, x);
      },
      evenly: 'flat',
      plain: 'evenly'
    });
    // foo:          'bar'
    //.........................................................................................................
    flatly_2 = new Typespace({
      flat: mvp.even,
      evenly: 'flat',
      plain: 'evenly'
    });
    //.........................................................................................................
    cr1 = new Typespace({
      int_no_create: {
        isa: function(x, t) {
          return Number.isInteger(x);
        }
      },
      int_create_zero: {
        isa: function(x, t) {
          return Number.isInteger(x);
        },
        template: 0
      },
      int_create_zero_fn: {
        isa: function(x, t) {
          return Number.isInteger(x);
        },
        template: function() {
          return 0;
        }
      },
      int_create_fn: {
        isa: function(x, t) {
          return Number.isInteger(x);
        },
        create: function([numeric, ...P], t) {
          if (P.length !== 0) {
            throw new Error(`Ωit___1 create method for ${this.$typename} doesn't accept more than one argument`);
          }
          if (numeric == null) {
            return 0;
          }
          if (t.isa(mvp.float, numeric)) {
            return Math.floor(numeric);
          }
          if ((t.isa(mvp.text, numeric)) && (/^(0|[1-9][0-9]*)$/.test(numeric))) {
            return parseInt(numeric);
          }
          throw new Error(`Ωit___2 unable to create a ${this.$typename} from value ${rpr(numeric)}`);
        }
      }
    });
    //.........................................................................................................
    crt = new Typespace({
      cNfNtN: {}
    });
    // cNfNtV:   { template: {}, }
    // cNfNAPtV: { fields: 89, }
    //.........................................................................................................
    return {mvp, ts1, flatly_1, flatly_2, crt, cr1};
  };

  //===========================================================================================================
  sample_declarations = {
    anything: function(x) {
      return true;
    },
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
    //---------------------------------------------------------------------------------------------------------
    experiments: {
      //-------------------------------------------------------------------------------------------------------
      clone_fields_and_template: function() {
        var $isa, Intertype, Type, Typespace, cfg, e, freeze, nameit, qq, t1, t2, types, typespace;
        ({$isa, Intertype, Type, Typespace, types} = require('../../../apps/intertype'));
        ({
          props: {nameit}
        } = require('../../../apps/intertype/node_modules/webguy'));
        //.....................................................................................................
        cfg = {
          freeze: true
        };
        // freeze: false
        freeze = cfg.freeze ? Object.freeze : function(x) {
          return x;
        };
        //.....................................................................................................
        qq = {
          //...................................................................................................
          get_create: function(d) {
            if ($isa.pod(d)) {
              return this._get_create_for_pods(d);
            }
            if ($isa.function(d)) {
              return this._get_create_for_functions(d);
            }
            return function(P, t) {
              return freeze(d);
            };
          },
          //...................................................................................................
          _get_create_for_pods: function(d) {
            var descriptor, i, key, len, name, ref, shadow;
            shadow = new Map();
            ref = (Object.getOwnPropertyNames(d)).concat(Object.getOwnPropertySymbols(d));
            for (i = 0, len = ref.length; i < len; i++) {
              key = ref[i];
              descriptor = Object.getOwnPropertyDescriptor(d, key);
              if (!descriptor.enumerable/* strange but important for e.g. `String::length` */) {
                continue;
              }
              name = ($isa.text(key)) ? key : Symbol.prototype.toString.call(key);
              shadow.set(key, nameit(name, this.get_create(descriptor.value)));
            }
            //.................................................................................................
            return function(P, t) {
              var R, ref1, value, y;
              R = {};
              ref1 = shadow.entries();
              for (y of ref1) {
                [key, value] = y;
                R[key] = value.call(this, P, t);
              }
              freeze(R);
              return R;
            };
          },
          //...................................................................................................
          _get_create_for_functions: function(d) {
            return function(P, t) {
              return freeze(d.call(this, P, t));
            };
          }
        };
        //.....................................................................................................
        typespace = {
          a: {
            [Symbol.for('e')]: {
              z: 'Z'
            },
            b: ['B'],
            c: function(P, t) {
              debug('Ωit_187', P);
              return ['C', ...(P != null ? P : [])];
            },
            d: 9
          }
        };
        typespace.t = {
          A: typespace.a,
          B: function() {
            return ['ä', 'ö', 'ü', 'ß'];
          }
        };
        //.....................................................................................................
        help('Ωit_188', qq.get_create(typespace.a));
        help('Ωit_189', (qq.get_create(typespace.a))());
        help('Ωit_190', t1 = (qq.get_create(typespace.t))());
        help('Ωit_191', t2 = (qq.get_create(typespace.t))([1, 2, 3]));
        info('Ωit_192', GUY.trm.truth(Object.isFrozen((qq.get_create(typespace.a))().b)));
        info('Ωit_193', GUY.trm.truth(Object.isFrozen(t1)));
        info('Ωit_194', GUY.trm.truth(Object.isFrozen(t1.A)));
        info('Ωit_195', GUY.trm.truth(Object.isFrozen(t1.B)));
        try {
          t1.B.push('t1');
        } catch (error1) {
          e = error1;
          warn('Ωit_196', e.message);
        }
        try {
          t2.B.push('t2');
        } catch (error1) {
          e = error1;
          warn('Ωit_197', e.message);
        }
        help('Ωit_198', t1.B);
        help('Ωit_199', t2.B);
        help('Ωit_200', GUY.trm.truth(t1.B === t2.B));
        help('Ωit_201', GUY.trm.truth(Object.isFrozen(t1.B)));
        help('Ωit_202', GUY.trm.truth(Object.isFrozen(t2.B)));
        try {
          t1.A.b.push('t1');
        } catch (error1) {
          e = error1;
          warn('Ωit_203', e.message);
        }
        try {
          t2.A.b.push('t2');
        } catch (error1) {
          e = error1;
          warn('Ωit_204', e.message);
        }
        help('Ωit_205', t1.A.b);
        help('Ωit_206', t2.A.b);
        help('Ωit_207', GUY.trm.truth(t1.A.b === t2.A.b));
        help('Ωit_208', GUY.trm.truth(Object.isFrozen(t1.A.b)));
        help('Ωit_209', t1.A[Symbol.for('e')]);
        help('Ωit_210', t2.A[Symbol.for('e')]);
        help('Ωit_211', GUY.trm.truth(t1.A[Symbol.for('e')] === t2.A[Symbol.for('e')]));
        help('Ωit_212', typespace.a);
        help('Ωit_213', Object.assign({}, typespace.a, typespace.t));
        help('Ωit_214', (qq.get_create(Object.assign({}, typespace.a, typespace.t)))());
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      recursive_merge: function() {
        var $isa, Intertype, Type, Typespace, nameit, types;
        ({$isa, Intertype, Type, Typespace, types} = require('../../../apps/intertype'));
        ({
          props: {nameit}
        } = require('../../../apps/intertype/node_modules/webguy'));
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      stability_with_nulls: function() {
        var Intertype, Type, Typespace, error, mvp, s, types;
        ({Intertype, Type, Typespace, types} = require('../../../apps/intertype'));
        ({mvp} = get_typespaces());
        //.....................................................................................................
        s = new Typespace({
          h: function(x, t) {
            var e;
            try {
              return t.isa(mvp.text, x.d);
            } catch (error1) {
              e = error1;
              if (e instanceof TypeError) {
                return false;
              } else {
                throw e;
              }
            }
          }
        });
        //.....................................................................................................
        debug('Ωit_215', types.isa(s.h, {
          d: 4
        }));
        debug('Ωit_216', types.isa(s.h, {
          d: 'D'
        }));
        try {
          debug('Ωit_217', types.isa(s.h, null));
        } catch (error1) {
          error = error1;
          warn('Ωit_218', error);
        }
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      key_handling: function() {
        var Intertype, Q, Type, Typespace, mvp, types;
        ({Intertype, Type, Typespace, types} = require('../../../apps/intertype'));
        ({mvp} = get_typespaces());
        //.....................................................................................................
        Q = class Q {
          //---------------------------------------------------------------------------------------------------------
          _get_own_keys(d) {
            if (d == null) {
              return [];
            }
            return (Object.getOwnPropertyNames(d)).concat(Object.getOwnPropertySymbols(d));
          }

          //---------------------------------------------------------------------------------------------------------
          _get_own_user_keys(d) {
            var i, k, len, ref, results;
            ref = this._get_own_keys(d);
            results = [];
            for (i = 0, len = ref.length; i < len; i++) {
              k = ref[i];
              if ((typeof k === 'symbol') || (!k.startsWith('$'))) {
                results.push(k);
              }
            }
            return results;
          }

          _get_own_system_keys(d) {
            var i, k, len, ref, results;
            ref = Object.getOwnPropertyNames(d);
            results = [];
            for (i = 0, len = ref.length; i < len; i++) {
              k = ref[i];
              if (k.startsWith('$')) {
                results.push(k);
              }
            }
            return results;
          }

        };
        //.....................................................................................................
        return null;
      }
    }
  };

  // #-------------------------------------------------------------------------------------------------------
  // create: ->
  //   { Intertype
  //     Type
  //     Typespace
  //     types           } = require '../../../apps/intertype'
  //   { crt             } = get_typespaces()
  //   #.....................................................................................................
  //   @throws ( Ωit_219 = -> types.create crt.cNfNtN                ), /MEH-create-/
  //   @throws ( Ωit_220 = -> types.create crt.cNfNtV                ), /expected `fields` to be a POD/
  //   @throws ( Ωit_221 = -> types.create crt.cNfNAPtV              ), /MEH-create-/
  //   #.....................................................................................................
  //   return null

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      return (new Test({
        throw_on_error: false
      })).test(this.intertype_tasks);
    })();
  }

}).call(this);

//# sourceMappingURL=experiments.js.map