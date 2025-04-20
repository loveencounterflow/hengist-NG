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
    var Typespace, cr1, flatly_1, flatly_2, mvp, ts1;
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
        $isa: function(x, t) {
          return Number.isInteger(x);
        },
        foo: 4
      },
      odd: {
        $isa: function(x, t) {
          return (t.isa(this.$typespace.integer, x)) && (modulo(x, 2) !== 0);
        }
      },
      // short form just assigns either a test method or a type name:
      even: function(x, t) {
        return (t.isa(this.$typespace.integer, x)) && (modulo(x, 2) === 0);
      },
      float: {
        $isa: function(x, t) {
          return Number.isFinite(x);
        },
        $template: 0
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
        $kind: '$record',
        q: {
          $isa: 'float',
          $template: 0
        },
        u: {
          $isa: 'nonempty_text',
          $template: 'u'
        }
      },
      //.......................................................................................................
      quantity_funs: {
        q: {
          $isa: function(x, t) {
            return t.isa(mvp.float, x);
          },
          $template: 0
        },
        u: {
          $isa: function(x, t) {
            return t.isa(mvp.nonempty_text, x);
          },
          $template: 'u'
        }
      },
      //.......................................................................................................
      street_address: {
        $kind: '$record',
        postcode: 'nonempty_text',
        city: 'nonempty_text'
      },
      //.......................................................................................................
      employee: {
        $kind: '$record',
        address: 'street_address',
        name: {
          firstname: 'nonempty_text',
          lastname: 'nonempty_text'
        }
      }
    });
    //.........................................................................................................
    ts1 = new Typespace({
      //.......................................................................................................
      quantity_typs: {
        q: {
          $isa: mvp.float,
          $template: 0
        },
        u: {
          $isa: mvp.nonempty_text,
          $template: 'u'
        }
      },
      //.......................................................................................................
      quantity_typs_float_fb: {
        q: mvp.float,
        u: {
          $isa: mvp.nonempty_text,
          $template: 'u'
        }
      },
      //.......................................................................................................
      quantity_typs_float_fb: {
        q: mvp.float,
        u: {
          $isa: mvp.nonempty_text,
          $template: 'u'
        }
      },
      //.......................................................................................................
      float_one: {
        $isa: mvp.float,
        $template: 1
      },
      //.......................................................................................................
      name: {
        firstname: mvp.nonempty_text,
        lastname: mvp.nonempty_text
      },
      //.......................................................................................................
      person: {
        address: mvp.address,
        name: 'name'
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
        $isa: function(x, t) {
          return Number.isInteger(x);
        }
      },
      int_create_zero: {
        $isa: function(x, t) {
          return Number.isInteger(x);
        },
        $template: 0
      },
      int_create_zero_fn: {
        $isa: function(x, t) {
          return Number.isInteger(x);
        },
        $template: function() {
          return 0;
        }
      },
      int_create_fn: {
        $isa: function(x, t) {
          return Number.isInteger(x);
        },
        $create: function([numeric, ...P], t) {
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
    // crt = new Typespace
    //   cNfNtN:   {}
    // cNfNtV:   { $template:{}, }
    // cNfNAPtV: { fields: 89, }
    //.........................................................................................................
    return {mvp, ts1, flatly_1, flatly_2, cr1};
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
    //=========================================================================================================
    MVP: {
      //-------------------------------------------------------------------------------------------------------
      disallow_forward_refs: function() {
        var Intertype, Type, Typespace, types;
        ({Intertype, Type, Typespace, types} = require('../../../apps/intertype'));
        (() => {          //.....................................................................................................
          var create_typespace, Ωit___3, Ωit___4, Ωit___5;
          create_typespace = function() {
            var ts1;
            return ts1 = new Typespace({
              integer: function(x, t) {
                return Number.isInteger(x);
              },
              wholenumber: 'integer'
            });
          };
          this.eq((Ωit___3 = function() {
            return create_typespace() instanceof Typespace;
          }), true);
          this.eq((Ωit___4 = function() {
            return create_typespace().integer instanceof Type;
          }), true);
          return this.eq((Ωit___5 = function() {
            return create_typespace().wholenumber instanceof Type;
          }), true);
        })();
        (() => {          //.....................................................................................................
          var create_typespace, Ωit___6;
          create_typespace = function() {
            var ts1;
            return ts1 = new Typespace({
              wholenumber: 'integer',
              integer: function(x, t) {
                return Number.isInteger(x);
              }
            });
          };
          return this.throws((Ωit___6 = function() {
            return create_typespace();
          }), /declaration for type 'wholenumber' contains forward reference to type 'integer'/);
        })();
        (() => {          //.....................................................................................................
          var create_typespace, Ωit___7;
          create_typespace = function() {
            var ts1;
            return ts1 = new Typespace({
              wholenumber: {
                $isa: 'integer',
                fields: {}
              },
              integer: function(x, t) {
                return Number.isInteger(x);
              }
            });
          };
          return this.throws((Ωit___7 = function() {
            return create_typespace();
          }), /declaration for type 'wholenumber' contains forward reference to type 'integer'/);
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      isa: function() {
        var $isa, Intertype, Type, Typespace, flatly_1, flatly_2, mvp, ts1, types, Ωit__10, Ωit__11, Ωit__12, Ωit__13, Ωit__14, Ωit__15, Ωit__16, Ωit__17, Ωit__18, Ωit__19, Ωit__20, Ωit__21, Ωit__22, Ωit__23, Ωit__24, Ωit__25, Ωit__26, Ωit__27, Ωit__28, Ωit__29, Ωit__30, Ωit__31, Ωit__32, Ωit__33, Ωit__34, Ωit__35, Ωit__36, Ωit__37, Ωit__38, Ωit__39, Ωit__40, Ωit__41, Ωit__42, Ωit__43, Ωit__44, Ωit__45, Ωit__46, Ωit__47, Ωit__48, Ωit__49, Ωit__50, Ωit__51, Ωit__52, Ωit__53, Ωit__54, Ωit__55, Ωit__56, Ωit__57, Ωit__58, Ωit__59, Ωit__60, Ωit__61, Ωit__62, Ωit__63, Ωit__64, Ωit__65, Ωit__66, Ωit__67, Ωit__68, Ωit__69, Ωit__70, Ωit__71, Ωit__72, Ωit__73, Ωit__74, Ωit__75, Ωit___8, Ωit___9;
        ({Intertype, Type, Typespace, types} = require('../../../apps/intertype'));
        ({flatly_1, flatly_2, ts1, mvp} = get_typespaces());
        $isa = sample_declarations;
        //.....................................................................................................
        this.eq((Ωit___8 = function() {
          return mvp instanceof Typespace;
        }), true);
        this.eq((Ωit___9 = function() {
          return flatly_1 instanceof Typespace;
        }), true);
        this.eq((Ωit__10 = function() {
          return flatly_2 instanceof Typespace;
        }), true);
        this.eq((Ωit__11 = function() {
          return flatly_1.flat instanceof Type;
        }), true);
        this.eq((Ωit__12 = function() {
          return flatly_2.flat instanceof Type;
        }), true);
        this.eq((Ωit__13 = function() {
          return mvp.quantity_refs instanceof Type;
        }), true);
        this.eq((Ωit__14 = function() {
          return mvp.quantity_funs instanceof Type;
        }), true);
        this.eq((Ωit__15 = function() {
          return ts1.quantity_typs instanceof Type;
        }), true);
        this.eq((Ωit__16 = function() {
          return $isa.function(mvp.quantity_refs.isa);
        }), true);
        this.eq((Ωit__17 = function() {
          return $isa.function(mvp.quantity_funs.isa);
        }), true);
        this.eq((Ωit__18 = function() {
          return $isa.function(ts1.quantity_typs.isa);
        }), true);
        this.eq((Ωit__19 = function() {
          return $isa.object(mvp.quantity_refs.fields);
        }), true);
        this.eq((Ωit__20 = function() {
          return $isa.object(mvp.quantity_funs.fields);
        }), true);
        this.eq((Ωit__21 = function() {
          return $isa.object(ts1.quantity_typs.fields);
        }), true);
        this.eq((Ωit__22 = function() {
          return mvp.quantity_refs.fields.q instanceof Type;
        }), true);
        this.eq((Ωit__23 = function() {
          return mvp.quantity_funs.fields.q instanceof Type;
        }), true);
        this.eq((Ωit__24 = function() {
          return ts1.quantity_typs.fields.q instanceof Type;
        }), true);
        this.eq((Ωit__25 = function() {
          return $isa.function(mvp.quantity_refs.fields.q.isa);
        }), true);
        this.eq((Ωit__26 = function() {
          return $isa.function(mvp.quantity_funs.fields.q.isa);
        }), true);
        this.eq((Ωit__27 = function() {
          return $isa.function(ts1.quantity_typs.fields.q.isa);
        }), true);
        //.....................................................................................................
        echo();
        this.eq((Ωit__28 = function() {
          return types.isa(mvp.integer, 5);
        }), true);
        this.eq((Ωit__29 = function() {
          return types.isa(mvp.odd, 5);
        }), true);
        this.eq((Ωit__30 = function() {
          return types.isa(mvp.even, 6);
        }), true);
        this.eq((Ωit__31 = function() {
          return types.isa(mvp.strange, 5);
        }), true);
        this.eq((Ωit__32 = function() {
          return types.isa(mvp.weird, 5);
        }), true);
        this.eq((Ωit__33 = function() {
          return types.isa(mvp.abnormal, 5);
        }), true);
        this.eq((Ωit__34 = function() {
          return types.isa(flatly_1.flat, 8);
        }), true);
        this.eq((Ωit__35 = function() {
          return types.isa(flatly_1.evenly, 8);
        }), true);
        this.eq((Ωit__36 = function() {
          return types.isa(flatly_1.plain, 8);
        }), true);
        this.eq((Ωit__37 = function() {
          return types.isa(flatly_2.flat, 8);
        }), true);
        this.eq((Ωit__38 = function() {
          return types.isa(flatly_2.evenly, 8);
        }), true);
        this.eq((Ωit__39 = function() {
          return types.isa(flatly_2.plain, 8);
        }), true);
        this.eq((Ωit__40 = function() {
          return types.isa(mvp.nonempty_text, 'abc');
        }), true);
        this.eq((Ωit__41 = function() {
          return types.isa(mvp.quantity_refs.fields.q, 123.456);
        }), true);
        this.eq((Ωit__42 = function() {
          return types.isa(mvp.quantity_funs.fields.q, 123.456);
        }), true);
        this.eq((Ωit__43 = function() {
          return types.isa(ts1.quantity_typs.fields.q, 123.456);
        }), true);
        this.eq((Ωit__44 = function() {
          return types.isa(mvp.quantity_refs.fields.u, 'm');
        }), true);
        this.eq((Ωit__45 = function() {
          return types.isa(mvp.quantity_funs.fields.u, 'm');
        }), true);
        this.eq((Ωit__46 = function() {
          return types.isa(ts1.quantity_typs.fields.u, 'm');
        }), true);
        this.eq((Ωit__47 = function() {
          return types.isa(mvp.quantity_refs, {
            q: 123.456,
            u: 'm'
          });
        }), true);
        this.eq((Ωit__48 = function() {
          return types.isa(mvp.quantity_funs, {
            q: 123.456,
            u: 'm'
          });
        }), true);
        this.eq((Ωit__49 = function() {
          return types.isa(ts1.quantity_typs, {
            q: 123.456,
            u: 'm'
          });
        }), true);
        //.....................................................................................................
        echo();
        this.eq((Ωit__50 = function() {
          return types.isa(mvp.integer, 5.3);
        }), false);
        this.eq((Ωit__51 = function() {
          return types.isa(mvp.odd, 6);
        }), false);
        this.eq((Ωit__52 = function() {
          return types.isa(mvp.odd, 5.3);
        }), false);
        this.eq((Ωit__53 = function() {
          return types.isa(mvp.even, 5);
        }), false);
        this.eq((Ωit__54 = function() {
          return types.isa(mvp.strange, 6);
        }), false);
        this.eq((Ωit__55 = function() {
          return types.isa(mvp.weird, 6);
        }), false);
        this.eq((Ωit__56 = function() {
          return types.isa(mvp.abnormal, 6);
        }), false);
        this.eq((Ωit__57 = function() {
          return types.isa(flatly_1.evenly, 5);
        }), false);
        this.eq((Ωit__58 = function() {
          return types.isa(flatly_1.flat, 5);
        }), false);
        this.eq((Ωit__59 = function() {
          return types.isa(flatly_1.plain, 5);
        }), false);
        this.eq((Ωit__60 = function() {
          return types.isa(flatly_2.flat, 5);
        }), false);
        this.eq((Ωit__61 = function() {
          return types.isa(flatly_2.evenly, 5);
        }), false);
        this.eq((Ωit__62 = function() {
          return types.isa(flatly_2.plain, 5);
        }), false);
        this.eq((Ωit__63 = function() {
          return types.isa(mvp.nonempty_text, '');
        }), false);
        this.eq((Ωit__64 = function() {
          return types.isa(mvp.quantity_refs.fields.q, '123.456');
        }), false);
        this.eq((Ωit__65 = function() {
          return types.isa(mvp.quantity_funs.fields.q, '123.456');
        }), false);
        this.eq((Ωit__66 = function() {
          return types.isa(ts1.quantity_typs.fields.q, '123.456');
        }), false);
        this.eq((Ωit__67 = function() {
          return types.isa(mvp.quantity_refs.fields.u, '');
        }), false);
        this.eq((Ωit__68 = function() {
          return types.isa(mvp.quantity_funs.fields.u, '');
        }), false);
        this.eq((Ωit__69 = function() {
          return types.isa(ts1.quantity_typs.fields.u, '');
        }), false);
        this.eq((Ωit__70 = function() {
          return types.isa(mvp.quantity_refs, {
            q: 123.456,
            u: ''
          });
        }), false);
        this.eq((Ωit__71 = function() {
          return types.isa(mvp.quantity_funs, {
            q: 123.456,
            u: ''
          });
        }), false);
        this.eq((Ωit__72 = function() {
          return types.isa(ts1.quantity_typs, {
            q: 123.456,
            u: ''
          });
        }), false);
        this.eq((Ωit__73 = function() {
          return types.isa(mvp.quantity_refs, {
            q: null,
            u: 'm'
          });
        }), false);
        this.eq((Ωit__74 = function() {
          return types.isa(mvp.quantity_funs, {
            q: null,
            u: 'm'
          });
        }), false);
        this.eq((Ωit__75 = function() {
          return types.isa(ts1.quantity_typs, {
            q: null,
            u: 'm'
          });
        }), false);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      validate: function() {
        var $isa, Intertype, Type, Typespace, flatly_1, flatly_2, mvp, ts1, types, Ωit__76, Ωit__77, Ωit__78, Ωit__79, Ωit__80, Ωit__81, Ωit__82, Ωit__83, Ωit__84;
        ({Intertype, Type, Typespace, types} = require('../../../apps/intertype'));
        ({flatly_1, flatly_2, ts1, mvp} = get_typespaces());
        $isa = sample_declarations;
        //.....................................................................................................
        this.eq((Ωit__76 = function() {
          return types.validate(mvp.integer, -5);
        }), -5);
        this.eq((Ωit__77 = function() {
          return types.validate(mvp.integer, 5);
        }), 5);
        this.throws((Ωit__78 = function() {
          return types.validate(mvp.integer, 5.3);
        }), /expected a integer/);
        this.throws((Ωit__79 = function() {
          return types.validate(mvp.quantity_refs, 5);
        }), /expected a quantity/);
        this.throws((Ωit__80 = function() {
          return types.validate(mvp.quantity_funs, 5);
        }), /expected a quantity/);
        this.throws((Ωit__81 = function() {
          return types.validate(ts1.quantity_typs, 5);
        }), /expected a quantity/);
        this.eq((Ωit__82 = function() {
          return types.validate(mvp.quantity_refs, {
            q: 123.4,
            u: 'km'
          });
        }), {
          q: 123.4,
          u: 'km'
        });
        this.eq((Ωit__83 = function() {
          return types.validate(mvp.quantity_funs, {
            q: 123.4,
            u: 'km'
          });
        }), {
          q: 123.4,
          u: 'km'
        });
        this.eq((Ωit__84 = function() {
          return types.validate(ts1.quantity_typs, {
            q: 123.4,
            u: 'km'
          });
        }), {
          q: 123.4,
          u: 'km'
        });
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      evaluate: function() {
        var $isa, Intertype, Type, Typespace, flatly_1, flatly_2, fm, i, idx, j, len, len1, matcher, mvp, probe_type, probe_value, probes_and_matchers, record, records, ts1, types, Ωit__85;
        ({Intertype, Type, Typespace, types} = require('../../../apps/intertype'));
        ({flatly_1, flatly_2, ts1, mvp} = get_typespaces());
        $isa = sample_declarations;
        //.....................................................................................................
        echo();
        probes_and_matchers = [
          [[mvp.integer,
          5],
          [['integer',
          5,
          true]]],
          [[mvp.integer,
          5.3],
          [['integer',
          5.3,
          false]]],
          [[mvp.even,
          5],
          [['even',
          5,
          false],
          ['even/integer',
          5,
          true]]],
          [[flatly_1.evenly,
          5],
          [['evenly',
          5,
          false],
          ['evenly/flat',
          5,
          false],
          ['evenly/flat/even',
          5,
          false],
          ['evenly/flat/even/integer',
          5,
          true]]],
          [[flatly_1.evenly,
          6],
          [['evenly',
          6,
          true],
          ['evenly/flat',
          6,
          true],
          ['evenly/flat/even',
          6,
          true],
          ['evenly/flat/even/integer',
          6,
          true]]],
          [[flatly_2.evenly,
          5],
          [['evenly',
          5,
          false],
          ['evenly/even',
          5,
          false],
          ['evenly/even/integer',
          5,
          true]]],
          [[flatly_2.evenly,
          6],
          [['evenly',
          6,
          true],
          ['evenly/even',
          6,
          true],
          ['evenly/even/integer',
          6,
          true]]],
          [
            [
              mvp.quantity_refs,
              {
                q: 123.456,
                u: ''
              }
            ],
            [
              [
                'quantity_refs',
                {
                  q: 123.456,
                  u: ''
                },
                false
              ],
              ['quantity_refs/quantity_refs_$q',
              123.456,
              true],
              ['quantity_refs/quantity_refs_$q/float',
              123.456,
              true],
              ['quantity_refs/quantity_refs_$u',
              '',
              false],
              ['quantity_refs/quantity_refs_$u/nonempty_text',
              '',
              false],
              ['quantity_refs/quantity_refs_$u/nonempty_text/text',
              '',
              true]
            ]
          ],
          [
            [
              mvp.quantity_funs,
              {
                q: 123.456,
                u: ''
              }
            ],
            [
              [
                'quantity_funs',
                {
                  q: 123.456,
                  u: ''
                },
                false
              ],
              ['quantity_funs/quantity_funs_$q',
              123.456,
              true],
              ['quantity_funs/quantity_funs_$q/float',
              123.456,
              true],
              ['quantity_funs/quantity_funs_$u',
              '',
              false],
              ['quantity_funs/quantity_funs_$u/nonempty_text',
              '',
              false],
              ['quantity_funs/quantity_funs_$u/nonempty_text/text',
              '',
              true]
            ]
          ],
          [
            [
              ts1.quantity_typs,
              {
                q: 123.456,
                u: ''
              }
            ],
            [
              [
                'quantity_typs',
                {
                  q: 123.456,
                  u: ''
                },
                false
              ],
              ['quantity_typs/quantity_typs_$q',
              123.456,
              true],
              ['quantity_typs/quantity_typs_$q/float',
              123.456,
              true],
              ['quantity_typs/quantity_typs_$u',
              '',
              false],
              ['quantity_typs/quantity_typs_$u/nonempty_text',
              '',
              false],
              ['quantity_typs/quantity_typs_$u/nonempty_text/text',
              '',
              true]
            ]
          ],
          [
            [
              mvp.quantity_refs,
              {
                q: 123.456,
                u: null
              }
            ],
            [
              [
                'quantity_refs',
                {
                  q: 123.456,
                  u: null
                },
                false
              ],
              ['quantity_refs/quantity_refs_$q',
              123.456,
              true],
              ['quantity_refs/quantity_refs_$q/float',
              123.456,
              true],
              ['quantity_refs/quantity_refs_$u',
              null,
              false],
              ['quantity_refs/quantity_refs_$u/nonempty_text',
              null,
              false],
              ['quantity_refs/quantity_refs_$u/nonempty_text/text',
              null,
              false]
            ]
          ],
          [
            [
              mvp.quantity_funs,
              {
                q: 123.456,
                u: null
              }
            ],
            [
              [
                'quantity_funs',
                {
                  q: 123.456,
                  u: null
                },
                false
              ],
              ['quantity_funs/quantity_funs_$q',
              123.456,
              true],
              ['quantity_funs/quantity_funs_$q/float',
              123.456,
              true],
              ['quantity_funs/quantity_funs_$u',
              null,
              false],
              ['quantity_funs/quantity_funs_$u/nonempty_text',
              null,
              false],
              ['quantity_funs/quantity_funs_$u/nonempty_text/text',
              null,
              false]
            ]
          ],
          [
            [
              ts1.quantity_typs,
              {
                q: 123.456,
                u: null
              }
            ],
            [
              [
                'quantity_typs',
                {
                  q: 123.456,
                  u: null
                },
                false
              ],
              ['quantity_typs/quantity_typs_$q',
              123.456,
              true],
              ['quantity_typs/quantity_typs_$q/float',
              123.456,
              true],
              ['quantity_typs/quantity_typs_$u',
              null,
              false],
              ['quantity_typs/quantity_typs_$u/nonempty_text',
              null,
              false],
              ['quantity_typs/quantity_typs_$u/nonempty_text/text',
              null,
              false]
            ]
          ],
          [
            [
              mvp.quantity_refs,
              {
                q: 'nan',
                u: 'm'
              }
            ],
            [
              [
                'quantity_refs',
                {
                  q: 'nan',
                  u: 'm'
                },
                false
              ],
              ['quantity_refs/quantity_refs_$q',
              'nan',
              false],
              ['quantity_refs/quantity_refs_$q/float',
              'nan',
              false]
            ]
          ],
          [
            [
              mvp.quantity_funs,
              {
                q: 'nan',
                u: 'm'
              }
            ],
            [
              [
                'quantity_funs',
                {
                  q: 'nan',
                  u: 'm'
                },
                false
              ],
              ['quantity_funs/quantity_funs_$q',
              'nan',
              false],
              ['quantity_funs/quantity_funs_$q/float',
              'nan',
              false]
            ]
          ],
          [
            [
              ts1.quantity_typs,
              {
                q: 'nan',
                u: 'm'
              }
            ],
            [
              [
                'quantity_typs',
                {
                  q: 'nan',
                  u: 'm'
                },
                false
              ],
              ['quantity_typs/quantity_typs_$q',
              'nan',
              false],
              ['quantity_typs/quantity_typs_$q/float',
              'nan',
              false]
            ]
          ],
          [
            [
              mvp.employee,
              {
                address: {
                  postcode: 'SE36',
                  city: 'London'
                },
                name: null
              }
            ],
            [
              [
                'employee',
                {
                  address: {
                    postcode: 'SE36',
                    city: 'London'
                  },
                  name: null
                },
                false
              ],
              [
                'employee/employee_$address',
                {
                  postcode: 'SE36',
                  city: 'London'
                },
                true
              ],
              [
                'employee/employee_$address/address',
                {
                  postcode: 'SE36',
                  city: 'London'
                },
                true
              ],
              ['employee/employee_$address/address/address_$postcode',
              'SE36',
              true],
              ['employee/employee_$address/address/address_$postcode/nonempty_text',
              'SE36',
              true],
              ['employee/employee_$address/address/address_$postcode/nonempty_text/text',
              'SE36',
              true],
              ['employee/employee_$address/address/address_$city',
              'London',
              true],
              ['employee/employee_$address/address/address_$city/nonempty_text',
              'London',
              true],
              ['employee/employee_$address/address/address_$city/nonempty_text/text',
              'London',
              true],
              ['employee/employee_$name',
              null,
              false]
            ]
          ],
          [
            [
              mvp.employee,
              {
                address: {
                  postcode: 'SE36',
                  city: 'London'
                },
                name: {}
              }
            ],
            [
              [
                'employee',
                {
                  address: {
                    postcode: 'SE36',
                    city: 'London'
                  },
                  name: {}
                },
                false
              ],
              [
                'employee/employee_$address',
                {
                  postcode: 'SE36',
                  city: 'London'
                },
                true
              ],
              [
                'employee/employee_$address/address',
                {
                  postcode: 'SE36',
                  city: 'London'
                },
                true
              ],
              ['employee/employee_$address/address/address_$postcode',
              'SE36',
              true],
              ['employee/employee_$address/address/address_$postcode/nonempty_text',
              'SE36',
              true],
              ['employee/employee_$address/address/address_$postcode/nonempty_text/text',
              'SE36',
              true],
              ['employee/employee_$address/address/address_$city',
              'London',
              true],
              ['employee/employee_$address/address/address_$city/nonempty_text',
              'London',
              true],
              ['employee/employee_$address/address/address_$city/nonempty_text/text',
              'London',
              true],
              ['employee/employee_$name',
              {},
              false],
              ['employee/employee_$name/employee_$name_$firstname',
              void 0,
              false],
              ['employee/employee_$name/employee_$name_$firstname/nonempty_text',
              void 0,
              false],
              ['employee/employee_$name/employee_$name_$firstname/nonempty_text/text',
              void 0,
              false]
            ]
          ],
          [
            [
              mvp.employee,
              {
                address: {
                  postcode: 'SE36',
                  city: 'London'
                },
                name: {
                  firstname: 'Bob'
                }
              }
            ],
            [
              [
                'employee',
                {
                  address: {
                    postcode: 'SE36',
                    city: 'London'
                  },
                  name: {
                    firstname: 'Bob'
                  }
                },
                false
              ],
              [
                'employee/employee_$address',
                {
                  postcode: 'SE36',
                  city: 'London'
                },
                true
              ],
              [
                'employee/employee_$address/address',
                {
                  postcode: 'SE36',
                  city: 'London'
                },
                true
              ],
              ['employee/employee_$address/address/address_$postcode',
              'SE36',
              true],
              ['employee/employee_$address/address/address_$postcode/nonempty_text',
              'SE36',
              true],
              ['employee/employee_$address/address/address_$postcode/nonempty_text/text',
              'SE36',
              true],
              ['employee/employee_$address/address/address_$city',
              'London',
              true],
              ['employee/employee_$address/address/address_$city/nonempty_text',
              'London',
              true],
              ['employee/employee_$address/address/address_$city/nonempty_text/text',
              'London',
              true],
              [
                'employee/employee_$name',
                {
                  firstname: 'Bob'
                },
                false
              ],
              ['employee/employee_$name/employee_$name_$firstname',
              'Bob',
              true],
              ['employee/employee_$name/employee_$name_$firstname/nonempty_text',
              'Bob',
              true],
              ['employee/employee_$name/employee_$name_$firstname/nonempty_text/text',
              'Bob',
              true],
              ['employee/employee_$name/employee_$name_$lastname',
              void 0,
              false],
              ['employee/employee_$name/employee_$name_$lastname/nonempty_text',
              void 0,
              false],
              ['employee/employee_$name/employee_$name_$lastname/nonempty_text/text',
              void 0,
              false]
            ]
          ],
          [
            [
              mvp.employee,
              {
                address: {
                  postcode: 'SE36',
                  city: 'London'
                },
                name: {
                  firstname: 'Bob',
                  lastname: 'Miller'
                }
              }
            ],
            [
              [
                'employee',
                {
                  address: {
                    postcode: 'SE36',
                    city: 'London'
                  },
                  name: {
                    firstname: 'Bob',
                    lastname: 'Miller'
                  }
                },
                true
              ],
              [
                'employee/employee_$address',
                {
                  postcode: 'SE36',
                  city: 'London'
                },
                true
              ],
              [
                'employee/employee_$address/address',
                {
                  postcode: 'SE36',
                  city: 'London'
                },
                true
              ],
              ['employee/employee_$address/address/address_$postcode',
              'SE36',
              true],
              ['employee/employee_$address/address/address_$postcode/nonempty_text',
              'SE36',
              true],
              ['employee/employee_$address/address/address_$postcode/nonempty_text/text',
              'SE36',
              true],
              ['employee/employee_$address/address/address_$city',
              'London',
              true],
              ['employee/employee_$address/address/address_$city/nonempty_text',
              'London',
              true],
              ['employee/employee_$address/address/address_$city/nonempty_text/text',
              'London',
              true],
              [
                'employee/employee_$name',
                {
                  firstname: 'Bob',
                  lastname: 'Miller'
                },
                true
              ],
              ['employee/employee_$name/employee_$name_$firstname',
              'Bob',
              true],
              ['employee/employee_$name/employee_$name_$firstname/nonempty_text',
              'Bob',
              true],
              ['employee/employee_$name/employee_$name_$firstname/nonempty_text/text',
              'Bob',
              true],
              ['employee/employee_$name/employee_$name_$lastname',
              'Miller',
              true],
              ['employee/employee_$name/employee_$name_$lastname/nonempty_text',
              'Miller',
              true],
              ['employee/employee_$name/employee_$name_$lastname/nonempty_text/text',
              'Miller',
              true]
            ]
          ],
          [
            [
              ts1.person,
              {
                address: {
                  postcode: 'SE36',
                  city: 'London'
                },
                name: {
                  firstname: 'Bob',
                  lastname: 'Miller'
                }
              }
            ],
            [
              [
                'person',
                {
                  address: {
                    postcode: 'SE36',
                    city: 'London'
                  },
                  name: {
                    firstname: 'Bob',
                    lastname: 'Miller'
                  }
                },
                true
              ],
              [
                'person/person_$address',
                {
                  postcode: 'SE36',
                  city: 'London'
                },
                true
              ],
              [
                'person/person_$address/address',
                {
                  postcode: 'SE36',
                  city: 'London'
                },
                true
              ],
              ['person/person_$address/address/address_$postcode',
              'SE36',
              true],
              ['person/person_$address/address/address_$postcode/nonempty_text',
              'SE36',
              true],
              ['person/person_$address/address/address_$postcode/nonempty_text/text',
              'SE36',
              true],
              ['person/person_$address/address/address_$city',
              'London',
              true],
              ['person/person_$address/address/address_$city/nonempty_text',
              'London',
              true],
              ['person/person_$address/address/address_$city/nonempty_text/text',
              'London',
              true],
              [
                'person/person_$name',
                {
                  firstname: 'Bob',
                  lastname: 'Miller'
                },
                true
              ],
              [
                'person/person_$name/name',
                {
                  firstname: 'Bob',
                  lastname: 'Miller'
                },
                true
              ],
              ['person/person_$name/name/name_$firstname',
              'Bob',
              true],
              ['person/person_$name/name/name_$firstname/nonempty_text',
              'Bob',
              true],
              ['person/person_$name/name/name_$firstname/nonempty_text/text',
              'Bob',
              true],
              ['person/person_$name/name/name_$lastname',
              'Miller',
              true],
              ['person/person_$name/name/name_$lastname/nonempty_text',
              'Miller',
              true],
              ['person/person_$name/name/name_$lastname/nonempty_text/text',
              'Miller',
              true]
            ]
          ]
        ];
        //.....................................................................................................
        fm = function(x, width = 0) {
          return ((rpr(x)) + ',').padEnd(width);
        };
        for (i = 0, len = probes_and_matchers.length; i < len; i++) {
          [[probe_type, probe_value], matcher] = probes_and_matchers[i];
          echo('[[', 'mvp.' + probe_type.$typename + ',', probe_value, '], [');
          records = types.evaluate(probe_type, probe_value);
          for (idx = j = 0, len1 = records.length; j < len1; idx = ++j) {
            record = records[idx];
            this.eq((Ωit__85 = function() {
              return [record.stack, record.value, record.verdict];
            }), matcher[idx]);
            echo('  [', fm(record.stack, 80), fm(record.value, 45), fm(record.verdict, 7), ']');
          }
          echo('  ]]');
        }
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      typenames: function() {
        var Intertype, Type, Typespace, flatly_1, flatly_2, mvp, ts1, type, types;
        ({Intertype, Type, Typespace, types} = require('../../../apps/intertype'));
        ({flatly_1, flatly_2, ts1, mvp} = get_typespaces());
        for (type in mvp) {
          //.....................................................................................................
          urge('Ωit__86', type);
        }
        for (type in ts1) {
          debug('Ωit__87', type);
        }
        debug('Ωit__88', ts1.quantity_typs);
        // debug 'Ωit__89', types.create std.integer, 7
        // debug 'Ωit__90', types.create std.integer, 7.8
        // debug 'Ωit__91', types.create std.integer, '7'
        // debug 'Ωit__92', types.create std.integer, '7.8'
        //.....................................................................................................
        return null;
      }
    },
    //=========================================================================================================
    basics: {
      //-------------------------------------------------------------------------------------------------------
      type_of: function() {
        var $isa, Intertype, Type, Typespace, types, Ωit_100, Ωit_101, Ωit_102, Ωit_103, Ωit_104, Ωit_105, Ωit_106, Ωit_107, Ωit_108, Ωit_109, Ωit_110, Ωit_111, Ωit__93, Ωit__94, Ωit__95, Ωit__96, Ωit__97, Ωit__98, Ωit__99;
        ({Intertype, Type, Typespace, types} = require('../../../apps/intertype'));
        // { mvp         } = get_typespaces()
        $isa = sample_declarations;
        //.....................................................................................................
        this.eq((Ωit__93 = function() {
          return $isa.list(Intertype.primitive_types);
        }), true);
        this.eq((Ωit__94 = function() {
          return Object.isFrozen(Intertype.primitive_types);
        }), true);
        //.....................................................................................................
        this.eq((Ωit__95 = function() {
          return Intertype.type_of(null);
        }), 'null');
        this.eq((Ωit__96 = function() {
          return Intertype.type_of(void 0);
        }), 'undefined');
        this.eq((Ωit__97 = function() {
          return Intertype.type_of(+2e308);
        }), 'infinity');
        this.eq((Ωit__98 = function() {
          return Intertype.type_of(-2e308);
        }), 'infinity');
        this.eq((Ωit__99 = function() {
          return Intertype.type_of(true);
        }), 'boolean');
        this.eq((Ωit_100 = function() {
          return Intertype.type_of(false);
        }), 'boolean');
        this.eq((Ωit_101 = function() {
          return Intertype.type_of(0/0);
        }), 'nan');
        this.eq((Ωit_102 = function() {
          return Intertype.type_of(6e78);
        }), 'float');
        this.eq((Ωit_103 = function() {
          return Intertype.type_of('wat');
        }), 'text');
        this.eq((Ωit_104 = function() {
          return Intertype.type_of([]);
        }), 'list');
        this.eq((Ωit_105 = function() {
          return Intertype.type_of((function() {
            return null;
          }));
        }), 'function');
        this.eq((Ωit_106 = function() {
          return Intertype.type_of((async function() {
            return (await null);
          }));
        }), 'asyncfunction');
        this.eq((Ωit_107 = function() {
          return Intertype.type_of((function*() {
            return (yield null);
          }));
        }), 'generatorfunction');
        this.eq((Ωit_108 = function() {
          return Intertype.type_of({});
        }), 'object');
        this.eq((Ωit_109 = function() {
          return Intertype.type_of(new Set());
        }), 'set');
        this.eq((Ωit_110 = function() {
          return Intertype.type_of(new Map());
        }), 'map');
        this.eq((Ωit_111 = function() {
          return Intertype.type_of(new WeakMap());
        }), 'weakmap');
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      types_of: function() {
        var $isa, Intertype, Myclass, Type, Typespace, mvp, types, Ωit_112, Ωit_113, Ωit_114, Ωit_115, Ωit_116, Ωit_117, Ωit_118, Ωit_119, Ωit_120, Ωit_121, Ωit_122, Ωit_123, Ωit_124, Ωit_125, Ωit_126, Ωit_127, Ωit_128, Ωit_129, Ωit_130, Ωit_131, Ωit_132;
        ({Intertype, Type, Typespace, types} = require('../../../apps/intertype'));
        ({mvp} = get_typespaces());
        $isa = sample_declarations;
        Myclass = class Myclass {};
        //.....................................................................................................
        this.eq((Ωit_112 = function() {
          return types.types_of(mvp, null);
        }), ['nothing', 'primitive', 'null']);
        this.eq((Ωit_113 = function() {
          return types.types_of(mvp, void 0);
        }), ['nothing', 'primitive', 'undefined']);
        this.eq((Ωit_114 = function() {
          return types.types_of(mvp, +2e308);
        }), ['something', 'primitive', 'infinity']);
        this.eq((Ωit_115 = function() {
          return types.types_of(mvp, -2e308);
        }), ['something', 'primitive', 'infinity']);
        this.eq((Ωit_116 = function() {
          return types.types_of(mvp, true);
        }), ['something', 'primitive', 'boolean']);
        this.eq((Ωit_117 = function() {
          return types.types_of(mvp, false);
        }), ['something', 'primitive', 'boolean']);
        this.eq((Ωit_118 = function() {
          return types.types_of(mvp, 0/0);
        }), ['something', 'primitive', 'nan']);
        this.eq((Ωit_119 = function() {
          return types.types_of(mvp, 6e78);
        }), ['something', 'primitive', 'integer', 'even', 'float', 'quantity_refs_$q', 'quantity_funs_$q']);
        this.eq((Ωit_120 = function() {
          return types.types_of(mvp, 3);
        }), ['something', 'primitive', 'integer', 'odd', 'float', 'strange', 'weird', 'abnormal', 'quantity_refs_$q', 'quantity_funs_$q']);
        this.eq((Ωit_121 = function() {
          return types.types_of(mvp, 'wat');
        }), ['something', 'primitive', 'text', 'nonempty_text', 'quantity_refs_$u', 'quantity_funs_$u', 'address_$postcode', 'address_$city', 'employee_$name_$firstname', 'employee_$name_$lastname']);
        this.eq((Ωit_122 = function() {
          return types.types_of(mvp, '');
        }), ['something', 'primitive', 'text', 'empty_text']);
        this.eq((Ωit_123 = function() {
          return types.types_of(mvp, []);
        }), ['something', 'object', 'list']);
        this.eq((Ωit_124 = function() {
          return types.types_of(mvp, (function() {
            return null;
          }));
        }), ['something', 'object', 'function']);
        this.eq((Ωit_125 = function() {
          return types.types_of(mvp, (async function() {
            return (await null);
          }));
        }), ['something', 'object', 'asyncfunction']);
        this.eq((Ωit_126 = function() {
          return types.types_of(mvp, (function*() {
            return (yield null);
          }));
        }), ['something', 'object', 'generatorfunction']);
        this.eq((Ωit_127 = function() {
          return types.types_of(mvp, {});
        }), ['something', 'object', 'pod']);
        this.eq((Ωit_128 = function() {
          return types.types_of(mvp, Object.create(null));
        }), ['something', 'object', 'pod']);
        this.eq((Ωit_129 = function() {
          return types.types_of(mvp, new Myclass());
        }), ['something', 'object']);
        this.eq((Ωit_130 = function() {
          return types.types_of(mvp, new Set());
        }), ['something', 'object', 'set']);
        this.eq((Ωit_131 = function() {
          return types.types_of(mvp, new Map());
        }), ['something', 'object', 'map']);
        this.eq((Ωit_132 = function() {
          return types.types_of(mvp, new WeakMap());
        }), ['something', 'object', 'weakmap']);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      $type_of_and_$isa: function() {
        var $isa, $type_of, A, std, Ωit_133, Ωit_134, Ωit_135, Ωit_136, Ωit_137, Ωit_138, Ωit_139, Ωit_140, Ωit_141, Ωit_142, Ωit_143, Ωit_144, Ωit_145, Ωit_146, Ωit_147, Ωit_148, Ωit_149;
        ({std, $isa, $type_of} = require('../../../apps/intertype'));
        A = class A extends Object {};
        //.....................................................................................................
        this.eq((Ωit_133 = function() {
          return $type_of('abc');
        }), 'text');
        this.eq((Ωit_134 = function() {
          return $type_of((function() {}));
        }), 'function');
        this.eq((Ωit_135 = function() {
          return $type_of({});
        }), 'object');
        this.eq((Ωit_136 = function() {
          return $isa.object({});
        }), true);
        this.eq((Ωit_137 = function() {
          return $isa.pod({});
        }), true);
        this.eq((Ωit_138 = function() {
          return $isa.pod(Object.create(null));
        }), true);
        this.eq((Ωit_139 = function() {
          return $isa.function((function() {}));
        }), true);
        this.eq((Ωit_140 = function() {
          return $isa.text('abc');
        }), true);
        this.eq((Ωit_141 = function() {
          return $isa.nonempty_text('abc');
        }), true);
        this.eq((Ωit_142 = function() {
          return $type_of(std.integer);
        }), 'object');
        this.eq((Ωit_143 = function() {
          return $isa.type(std.integer);
        }), true);
        this.eq((Ωit_144 = function() {
          return $isa.object(new A());
        }), true);
        //.....................................................................................................
        this.eq((Ωit_145 = function() {
          return $isa.nonempty_text('');
        }), false);
        this.eq((Ωit_146 = function() {
          return $isa.pod(new A());
        }), false);
        this.eq((Ωit_147 = function() {
          return $isa.function((function*() {
            return (yield 5);
          }));
        }), false);
        this.eq((Ωit_148 = function() {
          return $isa.function((function*() {
            return (yield 5);
          })());
        }), false);
        this.eq((Ωit_149 = function() {
          return $isa.function((async function() {
            return (await 5);
          }));
        }), false);
        //.....................................................................................................
        return null;
      }
    },
    //---------------------------------------------------------------------------------------------------------
    create: {
      //-------------------------------------------------------------------------------------------------------
      basics: function() {
        var Intertype, Type, Typespace, cr1, crt, mvp, ts1, types, Ωit_164, Ωit_165, Ωit_166, Ωit_167, Ωit_168, Ωit_169, Ωit_170, Ωit_175, Ωit_176, Ωit_177, Ωit_182, Ωit_183, Ωit_184, Ωit_185, Ωit_186;
        ({Intertype, Type, Typespace, types} = require('../../../apps/intertype'));
        ({mvp, ts1, cr1, crt} = get_typespaces());
        //.....................................................................................................
        // debug 'Ωit_150', ts1
        // debug 'Ωit_151', ( k for k of ts1 )
        // echo()
        // debug 'Ωit_152', ts1.quantity_typs_$q.fields
        // debug 'Ωit_153', ts1.quantity_typs_$u.fields
        // debug 'Ωit_154', ts1.quantity_typs.fields
        // debug 'Ωit_155', ts1.name.fields
        // debug 'Ωit_156', ts1.name_$firstname.fields
        // debug 'Ωit_157', ts1.name_$lastname.fields
        // echo()
        // debug 'Ωit_158', ts1.quantity_typs_$q.template
        // debug 'Ωit_159', ts1.quantity_typs_$u.template
        // debug 'Ωit_160', ts1.quantity_typs.template
        // debug 'Ωit_161', ts1.name.template
        // debug 'Ωit_162', ts1.name_$firstname.template
        // debug 'Ωit_163', ts1.name_$lastname.template
        // process.exit 111
        //.....................................................................................................
        this.eq((Ωit_164 = function() {
          return types.create(cr1.int_create_zero);
        }), 0);
        this.eq((Ωit_165 = function() {
          return types.create(cr1.int_create_zero_fn);
        }), 0);
        this.eq((Ωit_166 = function() {
          return types.create(cr1.int_create_fn);
        }), 0);
        this.eq((Ωit_167 = function() {
          return types.create(cr1.int_create_fn, 4);
        }), 4);
        this.eq((Ωit_168 = function() {
          return types.create(cr1.int_create_fn, 4.9);
        }), 4);
        this.eq((Ωit_169 = function() {
          return types.create(cr1.int_create_fn, '4');
        }), 4);
        this.eq((Ωit_170 = function() {
          return types.create(ts1.quantity_typs);
        }), {
          q: 0,
          u: 'u'
        });
        // @eq     ( Ωit_171 = -> types.create ts1.quantity_typs, { u: 's', }              ), { q: 0, u: 's' }
        // @eq     ( Ωit_172 = -> types.create ts1.quantity_typs, { q: 3214, u: 'mm', }    ), { q: 3214, u: 'mm' }
        // @eq     ( Ωit_173 = -> types.create ts1.quantity_typs, { q: 32.4, u: 'mm', }    ), { q: 32, u: 'mm' }
        // @eq     ( Ωit_174 = -> types.create ts1.quantity_typs, { q: '3214', u: 'mm', }  ), { q: 3214, u: 'mm' }
        this.eq((Ωit_175 = function() {
          return types.create(mvp.float);
        }), 0);
        this.eq((Ωit_176 = function() {
          return types.create(ts1.float_one);
        }), 1);
        this.eq((Ωit_177 = function() {
          return types.create(ts1.quantity_typs_float_fb);
        }), {
          q: 0,
          u: 'u'
        });
        // @eq     ( Ωit_178 = -> types.create ts1.quantity_typs_float_fb, { u: 's', }              ), { q: 0, u: 's' }
        // @eq     ( Ωit_179 = -> types.create ts1.quantity_typs_float_fb, { q: 3214, u: 'mm', }    ), { q: 3214, u: 'mm' }
        // @eq     ( Ωit_180 = -> types.create ts1.quantity_typs_float_fb, { q: 32.4, u: 'mm', }    ), { q: 32, u: 'mm' }
        // @eq     ( Ωit_181 = -> types.create ts1.quantity_typs_float_fb, { q: '3214', u: 'mm', }  ), { q: 3214, u: 'mm' }
        //.....................................................................................................
        this.throws((Ωit_182 = function() {
          return types.create(cr1.unknown);
        }), /expected an instance of Type, got a undefined/);
        this.throws((Ωit_183 = function() {
          return types.create(cr1.int_no_create);
        }), /condition cI/);
        this.throws((Ωit_184 = function() {
          return types.create(cr1.int_create_zero, 4);
        }), /condition cH/);
        this.throws((Ωit_185 = function() {
          return types.create(cr1.int_create_fn, '4.9');
        }), /unable to create/);
        this.throws((Ωit_186 = function() {
          return types.create(cr1.int_create_fn, 4, 6);
        }), /doesn't accept more than one argument/);
        //.....................................................................................................
        return null;
      }
    },
    //---------------------------------------------------------------------------------------------------------
    $kind: {
      //-------------------------------------------------------------------------------------------------------
      vocabulary: function() {
        var Intertype, Type, Typespace, cr1, crt, mvp, ts1, types;
        ({Intertype, Type, Typespace, types} = require('../../../apps/intertype'));
        ({mvp, ts1, cr1, crt} = get_typespaces());
        (() => {          //.....................................................................................................
          var declare_unknown_$kind, Ωit_187;
          declare_unknown_$kind = function() {
            var ts;
            return ts = new Typespace({
              foo: {
                $kind: 'whatever'
              }
            });
          };
          return this.throws((Ωit_187 = function() {
            return declare_unknown_$kind();
          }), /doesn't accept more than one argument/);
        })();
        //.....................................................................................................
        return null;
      }
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      // @use_fields_to_declare_qualifiers()
      // test @use_fields_to_declare_qualifiers
      // TT = { interface: @intertype_tasks.interface, }
      // ( new Test { throw_on_error: false, } ).test ( { Create_methods: @intertype_tasks.Create_methods, } )
      // ( new Test { throw_on_error: false, } ).test ( { on_dotted_types: @intertype_tasks.Create_methods.on_dotted_types, } )
      // ( new Test { throw_on_error: false, } ).test ( { kinds_and_roles: @intertype_tasks.kinds_and_roles, } )
      // ( new Test { throw_on_error: false, } ).test {
      //     on_dotted_types_1: @intertype_tasks.Create_methods.on_dotted_types_1
      //     # on_dotted_types_2: @intertype_tasks.Create_methods.on_dotted_types_2
      //     # on_dotted_types_3: @intertype_tasks.Create_methods.on_dotted_types_3
      //     # on_dotted_types_4: @intertype_tasks.Create_methods.on_dotted_types_4
      //     }
      // ( new Test { throw_on_error: false, } ).test { can_create_types_with_templates_and_create: @intertype_tasks.can_create_types_with_templates_and_create, }
      // ( new Test { throw_on_error: false, } ).test ( { Naming: @intertype_tasks.Naming, } )
      // ( new Test { throw_on_error: false, } ).test ( { Regexes: @intertype_tasks.Regexes, } )
      // ( new Test { throw_on_error: true, } ).test ( { demo_exception_with_lacking_stacktrace_1: @intertype_tasks.demo_exception_with_lacking_stacktrace_1, } )
      // ( new Test { throw_on_error: true, } ).test ( { demo_exception_with_lacking_stacktrace_2: @intertype_tasks.demo_exception_with_lacking_stacktrace_2, } )
      // await ( new Test { throw_on_error: true, } ).async_test { tasks: @tasks, }
      // await ( new Test { throw_on_error: true, } ).async_test { can_use_values_of_unknown_type: @tasks.can_use_values_of_unknown_type, }
      // demo_1()
      return (new Test({
        throw_on_error: false
      })).test(this.intertype_tasks);
    })();
  }

  // ( new Test { throw_on_error: true, } ).test { disallow_forward_refs: @intertype_tasks.MVP.disallow_forward_refs, }
// ( new Test { throw_on_error: false, } ).test { create: @intertype_tasks.create, }
// ( new Test { throw_on_error: false, } ).test { clone_fields_and_template: @intertype_tasks.create.clone_fields_and_template, }
// ( new Test { throw_on_error: false, } ).test { create: @intertype_tasks.create, }
// ( new Test { throw_on_error: false, } ).test { experiments: @intertype_tasks.experiments, }

}).call(this);

//# sourceMappingURL=test-basics.js.map