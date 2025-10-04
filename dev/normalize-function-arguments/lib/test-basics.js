(async function() {
  'use strict';
  var GTNG, GUY, Test, alert, bold, debug, echo, f, gold, help, info, inspect, log, plain, praise, red, reverse, rpr, urge, warn, whisper, white,
    splice = [].splice;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('intertype/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  ({f} = require('../../../apps/effstring'));

  ({red, gold, bold, white, reverse} = GUY.trm);

  //###########################################################################################################

  //===========================================================================================================
  this.nfa_tasks = {
    //=========================================================================================================
    internals: {
      //-------------------------------------------------------------------------------------------------------
      push_pop_set_at: function() {
        var A, NFA, pop_at, push_at, set_at;
        NFA = require('../../../apps/normalize-function-arguments');
        ({push_at, pop_at, set_at} = NFA.internals);
        A = function(parts) {
          return Array.from(parts.join(''));
        };
        (() => {          //.......................................................................................................
          var Ωnfat__10, Ωnfat__11, Ωnfat___1, Ωnfat___2, Ωnfat___3, Ωnfat___4, Ωnfat___5, Ωnfat___6, Ωnfat___7, Ωnfat___8, Ωnfat___9;
          this.eq((Ωnfat___1 = function() {
            return push_at(A`abcd`, -1, '^');
          }), A`abc^d`);
          this.eq((Ωnfat___2 = function() {
            return push_at(A`abcd`, -2, '^');
          }), A`ab^cd`);
          this.eq((Ωnfat___3 = function() {
            return push_at(A`abcd`, -3, '^');
          }), A`a^bcd`);
          this.eq((Ωnfat___4 = function() {
            return push_at(A``, -1, '^');
          }), A`^`);
          this.eq((Ωnfat___5 = function() {
            return push_at(A``, -2, '^');
          }), A`^`);
          this.eq((Ωnfat___6 = function() {
            return push_at(A``, -3, '^');
          }), A`^`);
          this.throws((Ωnfat___7 = function() {
            return push_at(A``, 1, '?');
          }), /expected negative number/);
          this.throws((Ωnfat___8 = function() {
            return push_at(A``, 0, '?');
          }), /expected negative number/);
          this.eq((Ωnfat___9 = function() {
            var d;
            return [set_at((d = A`abcd`), -1, '^'), d];
          }), ['^', A`abc^`]);
          this.eq((Ωnfat__10 = function() {
            var d;
            return [set_at((d = A`abcd`), -2, '^'), d];
          }), ['^', A`ab^d`]);
          this.eq((Ωnfat__11 = function() {
            var d;
            return [set_at((d = A`abcd`), -3, '^'), d];
          }), ['^', A`a^cd`]);
          // @eq     ( Ωnfat__12 = -> [ ( pop_at ( d = A'abc^' ), -1 ), d, ]       ), [ '^', A'abc', ]
          // @eq     ( Ωnfat__13 = -> [ ( pop_at ( d = A'ab^c' ), -2 ), d, ]       ), [ '^', A'abc', ]
          // @eq     ( Ωnfat__14 = -> [ ( pop_at ( d = A'a^bc' ), -3 ), d, ]       ), [ '^', A'abc', ]
          // @throws ( Ωnfat__15 = -> pop_at   A'',      1                         ), /expected negative number/
          // @throws ( Ωnfat__16 = -> pop_at   A'',      0                         ), /expected negative number/
          // @throws ( Ωnfat__17 = -> pop_at   [], -1          ), /list too short/
          // @throws ( Ωnfat__18 = -> pop_at   [ 1, ], -2      ), /list too short/
          return null;
        })();
        // #.......................................................................................................
        // do =>
        //   d = A'abcdef'
        //   @eq     ( Ωnfat__19 = -> push_at  [           ], -1, 'g' ), [ 'g', ]
        //   @eq     ( Ωnfat__20 = -> push_at  [ 'b',      ], -1, 'a' ), [ 'a', 'b', ]
        //   @eq     ( Ωnfat__21 = -> push_at  [ 'a', 'c', ], -1, 'b' ), [ 'a', 'b', 'c', ]
        //   return null
        //.......................................................................................................
        return null;
      }
    },
    //=========================================================================================================
    basics: function() {
      var NFA, get_signature, nfa;
      NFA = require('../../../apps/normalize-function-arguments');
      ({nfa, get_signature} = NFA);
      (() => {        //.......................................................................................................
        var fn, frz, Ωnfat__22, Ωnfat__23, Ωnfat__24, Ωnfat__25, Ωnfat__26, Ωnfat__27, Ωnfat__28, Ωnfat__29, Ωnfat__30, Ωnfat__31, Ωnfat__32, Ωnfat__33, Ωnfat__34, Ωnfat__35, Ωnfat__36, Ωnfat__37, Ωnfat__38, Ωnfat__39, Ωnfat__40, Ωnfat__41;
        fn = nfa(function(a, b, c, cfg) {
          return {a, b, c, cfg};
        });
        frz = Object.freeze;
        //.....................................................................................................
        this.eq((Ωnfat__22 = function() {
          return fn();
        }), {
          a: void 0,
          b: void 0,
          c: void 0,
          cfg: {
            a: void 0,
            b: void 0,
            c: void 0
          }
        });
        this.eq((Ωnfat__23 = function() {
          return fn(1);
        }), {
          a: 1,
          b: void 0,
          c: void 0,
          cfg: {
            a: 1,
            b: void 0,
            c: void 0
          }
        });
        this.eq((Ωnfat__24 = function() {
          return fn(1, 2);
        }), {
          a: 1,
          b: 2,
          c: void 0,
          cfg: {
            a: 1,
            b: 2,
            c: void 0
          }
        });
        this.eq((Ωnfat__25 = function() {
          return fn(1, 2, 3);
        }), {
          a: 1,
          b: 2,
          c: 3,
          cfg: {
            a: 1,
            b: 2,
            c: 3
          }
        });
        this.throws((Ωnfat__26 = function() {
          return fn(1, 2, 3, 4);
        }), /expected an optional POD at position -1/);
        this.eq((Ωnfat__27 = function() {
          return fn({});
        }), {
          a: void 0,
          b: void 0,
          c: void 0,
          cfg: {
            a: void 0,
            b: void 0,
            c: void 0
          }
        });
        this.eq((Ωnfat__28 = function() {
          return fn(1, {});
        }), {
          a: 1,
          b: void 0,
          c: void 0,
          cfg: {
            a: 1,
            b: void 0,
            c: void 0
          }
        });
        this.eq((Ωnfat__29 = function() {
          return fn(1, 2, {});
        }), {
          a: 1,
          b: 2,
          c: void 0,
          cfg: {
            a: 1,
            b: 2,
            c: void 0
          }
        });
        this.eq((Ωnfat__30 = function() {
          return fn(1, 2, 3, {});
        }), {
          a: 1,
          b: 2,
          c: 3,
          cfg: {
            a: 1,
            b: 2,
            c: 3
          }
        });
        this.throws((Ωnfat__31 = function() {
          return fn(1, 2, 3, 4, {});
        }), /expected up to 4 arguments, got 5/);
        this.eq((Ωnfat__32 = function() {
          return fn({
            b: 88
          });
        }), {
          a: void 0,
          b: 88,
          c: void 0,
          cfg: {
            a: void 0,
            b: 88,
            c: void 0
          }
        });
        this.eq((Ωnfat__33 = function() {
          return fn(1, {
            b: 88
          });
        }), {
          a: 1,
          b: 88,
          c: void 0,
          cfg: {
            a: 1,
            b: 88,
            c: void 0
          }
        });
        this.eq((Ωnfat__34 = function() {
          return fn(1, 2, {
            b: 88
          });
        }), {
          a: 1,
          b: 2,
          c: void 0,
          cfg: {
            a: 1,
            b: 2,
            c: void 0
          }
        });
        this.eq((Ωnfat__35 = function() {
          return fn(1, 2, 3, {
            b: 88
          });
        }), {
          a: 1,
          b: 2,
          c: 3,
          cfg: {
            a: 1,
            b: 2,
            c: 3
          }
        });
        this.throws((Ωnfat__36 = function() {
          return fn(1, 2, 3, 4, {
            b: 88
          });
        }), /expected up to 4 arguments, got 5/);
        this.eq((Ωnfat__37 = function() {
          return fn(frz({
            b: 88
          }));
        }), {
          a: void 0,
          b: 88,
          c: void 0,
          cfg: {
            a: void 0,
            b: 88,
            c: void 0
          }
        });
        this.eq((Ωnfat__38 = function() {
          return fn(1, frz({
            b: 88
          }));
        }), {
          a: 1,
          b: 88,
          c: void 0,
          cfg: {
            a: 1,
            b: 88,
            c: void 0
          }
        });
        this.eq((Ωnfat__39 = function() {
          return fn(1, 2, frz({
            b: 88
          }));
        }), {
          a: 1,
          b: 2,
          c: void 0,
          cfg: {
            a: 1,
            b: 2,
            c: void 0
          }
        });
        this.eq((Ωnfat__40 = function() {
          return fn(1, 2, 3, frz({
            b: 88
          }));
        }), {
          a: 1,
          b: 2,
          c: 3,
          cfg: {
            a: 1,
            b: 2,
            c: 3
          }
        });
        this.throws((Ωnfat__41 = function() {
          return fn(1, 2, 3, 4, frz({
            b: 88
          }));
        }), /expected up to 4 arguments, got 5/);
        //.....................................................................................................
        return null;
      })();
      (() => {        //.......................................................................................................
        var fn, frz, Ωnfat__42, Ωnfat__43, Ωnfat__44, Ωnfat__45, Ωnfat__46, Ωnfat__47, Ωnfat__48, Ωnfat__49;
        fn = nfa(function(cfg) {
          return {cfg};
        });
        frz = Object.freeze;
        //.....................................................................................................
        this.eq((Ωnfat__42 = function() {
          return fn();
        }), {
          cfg: {}
        });
        this.eq((Ωnfat__43 = function() {
          return fn({});
        }), {
          cfg: {}
        });
        this.eq((Ωnfat__44 = function() {
          return fn({
            b: 88
          });
        }), {
          cfg: {
            b: 88
          }
        });
        this.eq((Ωnfat__45 = function() {
          return fn(frz({
            b: 88
          }));
        }), {
          cfg: {
            b: 88
          }
        });
        this.throws((Ωnfat__46 = function() {
          return fn(1, 2, 3, 4);
        }), /expected up to 1 arguments, got 4/);
        this.throws((Ωnfat__47 = function() {
          return fn(1, 2, 3, 4, {});
        }), /expected up to 1 arguments, got 5/);
        this.throws((Ωnfat__48 = function() {
          return fn(1, 2, 3, 4, {
            b: 88
          });
        }), /expected up to 1 arguments, got 5/);
        this.throws((Ωnfat__49 = function() {
          return fn(1, 2, 3, 4, frz({
            b: 88
          }));
        }), /expected up to 1 arguments, got 5/);
        //.....................................................................................................
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    accepts_callable_rejects_others: function() {
      var NFA, SFMODULES, nfa, type_of;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      NFA = require('../../../apps/normalize-function-arguments');
      ({nfa} = NFA);
      (() => {        //.......................................................................................................
        var Ωnfat__50, Ωnfat__51, Ωnfat__52, Ωnfat__53, Ωnfat__54;
        this.throws((Ωnfat__50 = function() {
          return nfa(function() {
            return {};
          });
        }), /not compliant/);
        this.throws((Ωnfat__51 = function() {
          return nfa(null);
        }), /expected a callable/);
        this.eq((Ωnfat__52 = function() {
          return type_of(nfa(function(a, b, cfg) {
            return 40;
          }));
        }), 'function');
        this.eq((Ωnfat__53 = function() {
          return type_of(nfa(async function(a, b, cfg) {
            return (await 40);
          }));
        }), 'function');
        this.eq((Ωnfat__54 = function() {
          return type_of(nfa(function*(a, b, cfg) {
            return (yield 40);
          }));
        }), 'function');
        return null;
      })();
      (() => {        //.......................................................................................................
        var gf, Ωnfat__55;
        gf = nfa(function*(a, cfg) {
          yield cfg.a;
          yield cfg.a + 1;
          return null;
        });
        return this.eq((Ωnfat__55 = function() {
          return [...(gf(4))];
        }), [4, 5]);
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    names_in_cfg_are_created: function() {
      var NFA, nfa;
      NFA = require('../../../apps/normalize-function-arguments');
      ({nfa} = NFA);
      (() => {        //.......................................................................................................
        var fn, frz, Ωnfat__56, Ωnfat__57, Ωnfat__58, Ωnfat__59, Ωnfat__60, Ωnfat__61, Ωnfat__62, Ωnfat__63, Ωnfat__64;
        fn = nfa(function(first_name, last_name, cfg) {
          return cfg;
        });
        frz = Object.freeze;
        //.....................................................................................................
        this.eq((Ωnfat__56 = function() {
          return fn();
        }), {
          first_name: void 0,
          last_name: void 0
        });
        this.eq((Ωnfat__57 = function() {
          return fn('Alice');
        }), {
          first_name: 'Alice',
          last_name: void 0
        });
        this.eq((Ωnfat__58 = function() {
          return fn('Alice', 'McMillan');
        }), {
          first_name: 'Alice',
          last_name: 'McMillan'
        });
        this.eq((Ωnfat__59 = function() {
          return fn({});
        }), {
          first_name: void 0,
          last_name: void 0
        });
        this.eq((Ωnfat__60 = function() {
          return fn('Alice', {});
        }), {
          first_name: 'Alice',
          last_name: void 0
        });
        this.eq((Ωnfat__61 = function() {
          return fn('Alice', 'McMillan', {});
        }), {
          first_name: 'Alice',
          last_name: 'McMillan'
        });
        this.eq((Ωnfat__62 = function() {
          return fn({
            city: 'Seoul'
          });
        }), {
          first_name: void 0,
          last_name: void 0,
          city: 'Seoul'
        });
        this.eq((Ωnfat__63 = function() {
          return fn('Alice', {
            city: 'Seoul'
          });
        }), {
          first_name: 'Alice',
          last_name: void 0,
          city: 'Seoul'
        });
        this.eq((Ωnfat__64 = function() {
          return fn('Alice', 'McMillan', {
            city: 'Seoul'
          });
        }), {
          first_name: 'Alice',
          last_name: 'McMillan',
          city: 'Seoul'
        });
        //.....................................................................................................
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    get_signature: function() {
      var NFA, get_signature, nfa;
      NFA = require('../../../apps/normalize-function-arguments');
      ({nfa, get_signature} = NFA);
      (() => {        //.......................................................................................................
        var optional, Ωnfat__65, Ωnfat__66, Ωnfat__67, Ωnfat__68, Ωnfat__69, Ωnfat__70, Ωnfat__72, Ωnfat__73;
        optional = null;
        
      const empty_fn = function (

        cfg

        ) {};
      ;
        this.eq((Ωnfat__65 = function() {
          return get_signature(function(a, cfg) {});
        }), {
          names: ['a', 'cfg'],
          q_idx: 1,
          q_ridx: -1
        });
        this.throws((Ωnfat__66 = function() {
          return get_signature(function(a = optional, cfg) {});
        }), /not compliant/);
        this.throws((Ωnfat__67 = function() {
          return get_signature(function(a) {});
        }), /not compliant/);
        this.eq((Ωnfat__68 = function() {
          return get_signature(empty_fn);
        }), {
          names: ['cfg'],
          q_idx: 0,
          q_ridx: -1
        });
        this.eq((Ωnfat__69 = function() {
          return get_signature(function(cfg) {});
        }), {
          names: ['cfg'],
          q_idx: 0,
          q_ridx: -1
        });
        this.eq((Ωnfat__70 = function() {
          return get_signature(function(a, b, c, cfg) {});
        }), {
          names: ['a', 'b', 'c', 'cfg'],
          q_idx: 3,
          q_ridx: -1
        });
        // ### TAINT limitation of CoffeeScript: signature runs up to soak, trailing paramters handled inside function body ###
        // @eq     ( Ωnfat__71 = -> get_signature ( a, b..., c       ) ->  ), { a: 'bare', b: 'soak', }
        this.throws((Ωnfat__72 = function() {
          return get_signature(function(a, ...b) {
            var c, cfg, ref;
            ref = b, [...b] = ref, [c, cfg] = splice.call(b, -2);
          });
        }), /not compliant/);
        this.throws((Ωnfat__73 = function() {
          return get_signature(function(a, b = null, cfg) {});
        }), /not compliant/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var Ωnfat__74, Ωnfat__75;
        this.throws((Ωnfat__74 = function() {
          return get_signature(function(a, b, cfg, c, g) {});
        }), /not compliant/);
        this.eq((Ωnfat__75 = function() {
          return get_signature(function(a, b, c, cfg, g) {});
        }), {
          names: ['a', 'b', 'c', 'cfg', 'g'],
          q_idx: 3,
          q_ridx: -2
        });
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    template_class: function() {
      var NFA, Template;
      NFA = require('../../../apps/normalize-function-arguments');
      ({Template} = NFA);
      (() => {        //.......................................................................................................
        var Ωnfat__76;
        return this.eq((Ωnfat__76 = function() {
          return new Template({
            arc: 10,
            bo: 11,
            cy: 12,
            din: 13,
            eps: 14,
            foo: 15
          });
        }), {
          arc: 10,
          bo: 11,
          cy: 12,
          din: 13,
          eps: 14,
          foo: 15
        });
      })();
      (() => {        //.......................................................................................................
        var mylist_1, mylist_2, mylist_31, mylist_32, t, Ωnfat__77, Ωnfat__78, Ωnfat__79, Ωnfat__80, Ωnfat__81, Ωnfat__82;
        mylist_1 = [];
        mylist_2 = [];
        t = new Template({
          mylist_1: mylist_1,
          mylist_2: function() {
            return mylist_2;
          },
          mylist_3: function() {
            return [];
          }
        });
        mylist_31 = t.mylist_3;
        mylist_32 = t.mylist_3;
        this.eq((Ωnfat__77 = function() {
          return t;
        }), {
          mylist_1: [],
          mylist_2: [],
          mylist_3: []
        });
        this.eq((Ωnfat__78 = function() {
          return t.mylist_1 === mylist_1;
        }), true);
        this.eq((Ωnfat__79 = function() {
          return t.mylist_2 === mylist_2;
        }), true);
        this.eq((Ωnfat__80 = function() {
          return t.mylist_1 !== mylist_2;
        }), true);
        this.eq((Ωnfat__81 = function() {
          return t.mylist_31 !== mylist_32;
        }), true);
        mylist_1.push('A');
        mylist_2.push('B');
        mylist_31.push('C');
        this.eq((Ωnfat__82 = function() {
          return t;
        }), {
          mylist_1: ['A'],
          mylist_2: ['B'],
          mylist_3: []
        });
        return null;
      })();
      (() => {        //.......................................................................................................
        var cfg, t_1, t_2, Ωnfat__83, Ωnfat__84, Ωnfat__85, Ωnfat__86, Ωnfat__87;
        cfg = {
          name: {
            first: 'John',
            last: 'Doe'
          }
        };
        t_1 = new Template(cfg);
        t_2 = new Template(cfg);
        this.eq((Ωnfat__83 = function() {
          return t_1;
        }), {
          name: {
            first: 'John',
            last: 'Doe'
          }
        });
        this.eq((Ωnfat__84 = function() {
          return t_1.name !== cfg.name;
        }), true);
        this.eq((Ωnfat__85 = function() {
          return t_1;
        }), {
          name: {
            first: 'John',
            last: 'Doe'
          }
        });
        this.eq((Ωnfat__86 = function() {
          return t_2.name !== cfg.name;
        }), true);
        this.eq((Ωnfat__87 = function() {
          return t_1.name !== t_2.name;
        }), true);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    template_setting: function() {
      var NFA, internals, nfa;
      NFA = require('../../../apps/normalize-function-arguments');
      ({nfa, internals} = NFA);
      (() => {        // #.......................................................................................................
        // ### NOTE for later: preserve managed properties? ###
        // do =>
        //   template =
        //     arc:      10
        //     bo:       11
        //     cy:       12
        //     sum:      -> @arc + @bo + @cy
        //   fn = nfa { template, }, ( arc, bo, cy, cfg ) -> { arc, bo, cy, cfg, sum: cfg.sum, }
        //   # fn = nfa ( arc, bo, cy, cfg ) -> { arc, bo, cy, cfg, sum: cfg.sum, }
        //   debug 'Ωnfat__88', internals.gnd.nfa_cfg
        //   debug 'Ωnfat__89', internals.gnd.nfa_cfg.template
        //   debug 'Ωnfat__90', fn 1, 2, 3, {}
        //   @eq     ( Ωnfat__91 = -> fn 1, 2, 3, {} ), { arc: 1, bo: 2, cy: 3, cfg: { arc: 1, bo: 2, cy: 3, sum: 6, }, sum: 6, }
        //   @eq     ( Ωnfat__92 = -> fn 1, 2, 3     ), { arc: 1, bo: 2, cy: 3, cfg: { arc: 1, bo: 2, cy: 3, sum: 6, }, sum: 6, }
        //   return null
        //.......................................................................................................
        var fn, template, Ωnfat__93, Ωnfat__94, Ωnfat__95, Ωnfat__96, Ωnfat__97;
        template = {
          arc: 10,
          bo: 11,
          cy: 12
        };
        fn = nfa({template}, function(arc, bo, cy, cfg) {
          return {arc, bo, cy, cfg};
        });
        this.eq((Ωnfat__93 = function() {
          return fn(20, 21, 22, {});
        }), {
          arc: 20,
          bo: 21,
          cy: 22,
          cfg: {
            arc: 20,
            bo: 21,
            cy: 22
          }
        });
        this.eq((Ωnfat__94 = function() {
          return fn();
        }), {
          arc: 10,
          bo: 11,
          cy: 12,
          cfg: {
            arc: 10,
            bo: 11,
            cy: 12
          }
        });
        this.eq((Ωnfat__95 = function() {
          return fn(20);
        }), {
          arc: 20,
          bo: 11,
          cy: 12,
          cfg: {
            arc: 20,
            bo: 11,
            cy: 12
          }
        });
        this.eq((Ωnfat__96 = function() {
          return fn(20, 21);
        }), {
          arc: 20,
          bo: 21,
          cy: 12,
          cfg: {
            arc: 20,
            bo: 21,
            cy: 12
          }
        });
        this.eq((Ωnfat__97 = function() {
          return fn(20, 21, 22);
        }), {
          arc: 20,
          bo: 21,
          cy: 22,
          cfg: {
            arc: 20,
            bo: 21,
            cy: 22
          }
        });
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    cfg_in_penultimate_position: function() {
      var NFA, internals, nfa;
      NFA = require('../../../apps/normalize-function-arguments');
      ({nfa, internals} = NFA);
      (() => {        //.......................................................................................................
        var fn, template, Ωnfat__98, Ωnfat__99;
        template = {
          name: null
        };
        fn = nfa({template}, function(name, cfg) {
          return {name, cfg};
        });
        this.eq((Ωnfat__98 = function() {
          return fn();
        }), {
          name: null,
          cfg: {
            name: null
          }
        });
        this.eq((Ωnfat__99 = function() {
          return fn('alice', {
            name: 'bob'
          });
        }), {
          name: 'alice',
          cfg: {
            name: 'alice'
          }
        });
        return null;
      })();
      (() => {        //.......................................................................................................
        var F, fn, template, Ωnfat_100, Ωnfat_101, Ωnfat_102, Ωnfat_103, Ωnfat_104, Ωnfat_105;
        template = {
          name: 'carl'
        };
        // F   = Symbol.for 'F'
        F = (function() {});
        fn = nfa({template}, function(name, cfg, f) {
          return {name, f, cfg};
        });
        this.eq((Ωnfat_100 = function() {
          return fn();
        }), {
          name: 'carl',
          f: void 0,
          cfg: {
            name: 'carl',
            f: void 0
          }
        });
        this.eq((Ωnfat_101 = function() {
          return fn({
            name: 'bob'
          }, F);
        }), {
          name: 'bob',
          f: F,
          cfg: {
            name: 'bob',
            f: F
          }
        });
        this.eq((Ωnfat_102 = function() {
          return fn('alice', {
            name: 'bob'
          }, F);
        }), {
          name: 'alice',
          f: F,
          cfg: {
            name: 'alice',
            f: F
          }
        });
        this.eq((Ωnfat_103 = function() {
          return fn('alice', {}, F);
        }), {
          name: 'alice',
          f: F,
          cfg: {
            name: 'alice',
            f: F
          }
        });
        this.eq((Ωnfat_104 = function() {
          return fn('alice', F);
        }), {
          name: 'alice',
          f: F,
          cfg: {
            name: 'alice',
            f: F
          }
        });
        this.eq((Ωnfat_105 = function() {
          return fn(F);
        }), {
          name: 'carl',
          f: F,
          cfg: {
            name: 'carl',
            f: F
          }
        });
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    function_naming: function() {
      var NFA, internals, nfa;
      NFA = require('../../../apps/normalize-function-arguments');
      ({nfa, internals} = NFA);
      (() => {        //.......................................................................................................
        var my_fn, Ωnfat_106, Ωnfat_107;
        my_fn = function(cfg) {};
        this.eq((Ωnfat_106 = function() {
          return my_fn.name;
        }), 'my_fn');
        this.eq((Ωnfat_107 = function() {
          return (nfa(my_fn)).name;
        }), 'my_fn');
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    use_isa_setting: function() {
      var NFA, float, gnd, internals, nfa, nonempty_text, text;
      NFA = require('../../../apps/normalize-function-arguments');
      ({nfa, internals} = NFA);
      ({gnd} = internals);
      //.......................................................................................................
      float = {
        isa: function(x) {
          return Number.isFinite(x);
        }
      };
      text = {
        isa: function(x) {
          return (typeof x) === 'string';
        }
      };
      nonempty_text = {
        isa: function(x) {
          return (text.isa(x)) && x.length > 0;
        }
      };
      (() => {        //.......................................................................................................
        var fn, isa, quantity_create, template, Ωnfat_108, Ωnfat_109;
        template = {
          q: 0,
          u: 'u'
        };
        isa = function(x) {
          if (!gnd.pod.isa(x)) {
            return false;
          }
          if (!float.isa(x.q)) {
            return false;
          }
          if (!nonempty_text.isa(x.u)) {
            return false;
          }
          return true;
        };
        fn = nfa({isa, template}, quantity_create = function(q, u, cfg) {
          return cfg;
        });
        this.eq((Ωnfat_108 = function() {
          return fn(3, 's');
        }), {
          q: 3,
          u: 's'
        });
        this.throws((Ωnfat_109 = function() {
          return fn(3, '');
        }), /validation error: expected a quantity_create_cfg/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var fn, quantity_create, ts, Ωnfat_110, Ωnfat_111, Ωnfat_112;
        ts = {
          quantity: {
            template: {
              q: 0,
              u: 'u'
            },
            isa: function(x) {
              if (!gnd.pod.isa(x)) {
                return false;
              }
              if (!float.isa(x.q)) {
                return false;
              }
              if (!nonempty_text.isa(x.u)) {
                return false;
              }
              return true;
            }
          }
        };
        fn = nfa(ts.quantity, quantity_create = function(q, u, cfg) {
          return cfg;
        });
        this.eq((Ωnfat_110 = function() {
          return fn(3, 's');
        }), {
          q: 3,
          u: 's'
        });
        this.eq((Ωnfat_111 = function() {
          return fn(3, 's', {
            q: 0,
            u: 'u'
          });
        }), {
          q: 3,
          u: 's'
        });
        this.throws((Ωnfat_112 = function() {
          return fn(3, '');
        }), /validation error: expected a quantity_create_cfg/);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    use_isa_setting_sfmodule: function() {
      var NFA, float, gnd, internals, nfa, nonempty_text, text;
      // NFA = require '../../../apps/normalize-function-arguments'
      NFA = require('../../../apps/normalize-function-arguments/dist/main.js');
      ({nfa, internals} = NFA);
      ({gnd} = internals);
      //.......................................................................................................
      float = {
        isa: function(x) {
          return Number.isFinite(x);
        }
      };
      text = {
        isa: function(x) {
          return (typeof x) === 'string';
        }
      };
      nonempty_text = {
        isa: function(x) {
          return (text.isa(x)) && x.length > 0;
        }
      };
      (() => {        //.......................................................................................................
        var fn, isa, quantity_create, template, Ωnfat_113, Ωnfat_114;
        template = {
          q: 0,
          u: 'u'
        };
        isa = function(x) {
          if (!gnd.pod.isa(x)) {
            return false;
          }
          if (!float.isa(x.q)) {
            return false;
          }
          if (!nonempty_text.isa(x.u)) {
            return false;
          }
          return true;
        };
        fn = nfa({isa, template}, quantity_create = function(q, u, cfg) {
          return cfg;
        });
        this.eq((Ωnfat_113 = function() {
          return fn(3, 's');
        }), {
          q: 3,
          u: 's'
        });
        this.throws((Ωnfat_114 = function() {
          return fn(3, '');
        }), /validation error: expected a quantity_create_cfg/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var fn, quantity_create, ts, Ωnfat_115, Ωnfat_116, Ωnfat_117;
        ts = {
          quantity: {
            template: {
              q: 0,
              u: 'u'
            },
            isa: function(x) {
              if (!gnd.pod.isa(x)) {
                return false;
              }
              if (!float.isa(x.q)) {
                return false;
              }
              if (!nonempty_text.isa(x.u)) {
                return false;
              }
              return true;
            }
          }
        };
        fn = nfa(ts.quantity, quantity_create = function(q, u, cfg) {
          return cfg;
        });
        this.eq((Ωnfat_115 = function() {
          return fn(3, 's');
        }), {
          q: 3,
          u: 's'
        });
        this.eq((Ωnfat_116 = function() {
          return fn(3, 's', {
            q: 0,
            u: 'u'
          });
        }), {
          q: 3,
          u: 's'
        });
        this.throws((Ωnfat_117 = function() {
          return fn(3, '');
        }), /validation error: expected a quantity_create_cfg/);
        return null;
      })();
      //.......................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var guytest_cfg;
      guytest_cfg = {
        throw_on_error: false,
        show_passes: false,
        report_checks: false
      };
      guytest_cfg = {
        throw_on_error: true,
        show_passes: true,
        report_checks: false
      };
      (new Test(guytest_cfg)).test(this.nfa_tasks);
      return (new Test(guytest_cfg)).test({
        accepts_callable_rejects_others: this.nfa_tasks.accepts_callable_rejects_others
      });
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBO0lBQUE7O0VBRUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQix1QkFBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLE9BSEYsRUFJRSxHQUpGLENBQUEsR0FJNEIsR0FBRyxDQUFDLEdBSmhDLEVBWkE7OztFQWtCQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixJQUE1Qjs7RUFDQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1Qjs7RUFDQSxDQUFBLENBQUUsR0FBRixFQUNFLElBREYsRUFFRSxJQUZGLEVBR0UsS0FIRixFQUlFLE9BSkYsQ0FBQSxHQUk0QixHQUFHLENBQUMsR0FKaEMsRUFyQkE7Ozs7O0VBZ0NBLElBQUMsQ0FBQSxTQUFELEdBR0UsQ0FBQTs7SUFBQSxTQUFBLEVBR0UsQ0FB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R0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBSSxFQUFBLENBQUcsQ0FBSCxFQUFNLEVBQU47UUFBSixDQUFkLENBQVIsRUFBMkQsa0RBQTNEO0FBQ0EsZUFBTztNQWJOLENBQUEsSUF0QlA7O0FBcUNJLGFBQU87SUF0Q2lCO0VBOVUxQixFQW5DRjs7O0VBMlpBLElBQUcsTUFBQSxLQUFVLE9BQU8sQ0FBQyxJQUFyQjtJQUErQixNQUFTLENBQUEsQ0FBQSxDQUFBLEdBQUE7QUFDeEMsVUFBQTtNQUFFLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsS0FBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsSUFBbEI7UUFBMEIsV0FBQSxFQUFhLElBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEIsSUFBQyxDQUFBLFNBQS9CO2FBQ0EsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QjtRQUFFLCtCQUFBLEVBQWlDLElBQUMsQ0FBQSxTQUFTLENBQUM7TUFBOUMsQ0FBOUI7SUFKc0MsQ0FBQSxJQUF4Qzs7QUEzWkEiLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc3RyaWN0J1xuXG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2ludGVydHlwZS90ZXN0LWJhc2ljcydcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxuIyBXR1VZICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy93ZWJndXknXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG57IHJlZFxuICBnb2xkXG4gIGJvbGRcbiAgd2hpdGVcbiAgcmV2ZXJzZSAgICAgICAgICAgICAgIH0gPSBHVVkudHJtXG5cblxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiNcbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQG5mYV90YXNrcyA9XG5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBpbnRlcm5hbHM6XG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHB1c2hfcG9wX3NldF9hdDogLT5cbiAgICAgIE5GQSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbiAgICAgIHsgcHVzaF9hdFxuICAgICAgICBwb3BfYXRcbiAgICAgICAgc2V0X2F0IH0gPSBORkEuaW50ZXJuYWxzXG4gICAgICBBID0gKCBwYXJ0cyApIC0+IEFycmF5LmZyb20gcGFydHMuam9pbiAnJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIEBlcSAgICAgKCDOqW5mYXRfX18xID0gLT4gcHVzaF9hdCAgQSdhYmNkJywgLTEsICdeJyAgICAgICAgICAgICAgICAgICAgKSwgQSdhYmNeZCdcbiAgICAgICAgQGVxICAgICAoIM6pbmZhdF9fXzIgPSAtPiBwdXNoX2F0ICBBJ2FiY2QnLCAtMiwgJ14nICAgICAgICAgICAgICAgICAgICApLCBBJ2FiXmNkJ1xuICAgICAgICBAZXEgICAgICggzqluZmF0X19fMyA9IC0+IHB1c2hfYXQgIEEnYWJjZCcsIC0zLCAnXicgICAgICAgICAgICAgICAgICAgICksIEEnYV5iY2QnXG4gICAgICAgIEBlcSAgICAgKCDOqW5mYXRfX180ID0gLT4gcHVzaF9hdCAgQScnLCAgICAgLTEsICdeJyAgICAgICAgICAgICAgICAgICAgKSwgQSdeJ1xuICAgICAgICBAZXEgICAgICggzqluZmF0X19fNSA9IC0+IHB1c2hfYXQgIEEnJywgICAgIC0yLCAnXicgICAgICAgICAgICAgICAgICAgICksIEEnXidcbiAgICAgICAgQGVxICAgICAoIM6pbmZhdF9fXzYgPSAtPiBwdXNoX2F0ICBBJycsICAgICAtMywgJ14nICAgICAgICAgICAgICAgICAgICApLCBBJ14nXG4gICAgICAgIEB0aHJvd3MgKCDOqW5mYXRfX183ID0gLT4gcHVzaF9hdCAgQScnLCAgICAgIDEsICc/JyAgICAgICAgICAgICAgICAgICAgKSwgL2V4cGVjdGVkIG5lZ2F0aXZlIG51bWJlci9cbiAgICAgICAgQHRocm93cyAoIM6pbmZhdF9fXzggPSAtPiBwdXNoX2F0ICBBJycsICAgICAgMCwgJz8nICAgICAgICAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgbmVnYXRpdmUgbnVtYmVyL1xuICAgICAgICBAZXEgICAgICggzqluZmF0X19fOSA9IC0+IFsgKCBzZXRfYXQgKCBkID0gQSdhYmNkJyApLCAtMSwgJ14nICksIGQsIF0gICksIFsgJ14nLCBBJ2FiY14nLCBdXG4gICAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzEwID0gLT4gWyAoIHNldF9hdCAoIGQgPSBBJ2FiY2QnICksIC0yLCAnXicgKSwgZCwgXSAgKSwgWyAnXicsIEEnYWJeZCcsIF1cbiAgICAgICAgQGVxICAgICAoIM6pbmZhdF9fMTEgPSAtPiBbICggc2V0X2F0ICggZCA9IEEnYWJjZCcgKSwgLTMsICdeJyApLCBkLCBdICApLCBbICdeJywgQSdhXmNkJywgXVxuICAgICAgICAjIEBlcSAgICAgKCDOqW5mYXRfXzEyID0gLT4gWyAoIHBvcF9hdCAoIGQgPSBBJ2FiY14nICksIC0xICksIGQsIF0gICAgICAgKSwgWyAnXicsIEEnYWJjJywgXVxuICAgICAgICAjIEBlcSAgICAgKCDOqW5mYXRfXzEzID0gLT4gWyAoIHBvcF9hdCAoIGQgPSBBJ2FiXmMnICksIC0yICksIGQsIF0gICAgICAgKSwgWyAnXicsIEEnYWJjJywgXVxuICAgICAgICAjIEBlcSAgICAgKCDOqW5mYXRfXzE0ID0gLT4gWyAoIHBvcF9hdCAoIGQgPSBBJ2FeYmMnICksIC0zICksIGQsIF0gICAgICAgKSwgWyAnXicsIEEnYWJjJywgXVxuICAgICAgICAjIEB0aHJvd3MgKCDOqW5mYXRfXzE1ID0gLT4gcG9wX2F0ICAgQScnLCAgICAgIDEgICAgICAgICAgICAgICAgICAgICAgICAgKSwgL2V4cGVjdGVkIG5lZ2F0aXZlIG51bWJlci9cbiAgICAgICAgIyBAdGhyb3dzICggzqluZmF0X18xNiA9IC0+IHBvcF9hdCAgIEEnJywgICAgICAwICAgICAgICAgICAgICAgICAgICAgICAgICksIC9leHBlY3RlZCBuZWdhdGl2ZSBudW1iZXIvXG4gICAgICAgICMgQHRocm93cyAoIM6pbmZhdF9fMTcgPSAtPiBwb3BfYXQgICBbXSwgLTEgICAgICAgICAgKSwgL2xpc3QgdG9vIHNob3J0L1xuICAgICAgICAjIEB0aHJvd3MgKCDOqW5mYXRfXzE4ID0gLT4gcG9wX2F0ICAgWyAxLCBdLCAtMiAgICAgICksIC9saXN0IHRvbyBzaG9ydC9cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgZG8gPT5cbiAgICAgICMgICBkID0gQSdhYmNkZWYnXG4gICAgICAjICAgQGVxICAgICAoIM6pbmZhdF9fMTkgPSAtPiBwdXNoX2F0ICBbICAgICAgICAgICBdLCAtMSwgJ2cnICksIFsgJ2cnLCBdXG4gICAgICAjICAgQGVxICAgICAoIM6pbmZhdF9fMjAgPSAtPiBwdXNoX2F0ICBbICdiJywgICAgICBdLCAtMSwgJ2EnICksIFsgJ2EnLCAnYicsIF1cbiAgICAgICMgICBAZXEgICAgICggzqluZmF0X18yMSA9IC0+IHB1c2hfYXQgIFsgJ2EnLCAnYycsIF0sIC0xLCAnYicgKSwgWyAnYScsICdiJywgJ2MnLCBdXG4gICAgICAjICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgYmFzaWNzOiAtPlxuICAgIE5GQSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbiAgICB7IG5mYVxuICAgICAgZ2V0X3NpZ25hdHVyZSB9ID0gTkZBXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZm4gPSBuZmEgKCBhLCBiLCBjLCBjZmcgKSAtPiB7IGEsIGIsIGMsIGNmZywgfVxuICAgICAgZnJ6ID0gT2JqZWN0LmZyZWV6ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgICAgICggzqluZmF0X18yMiA9IC0+IGZuKCkgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB7IGE6IHVuZGVmaW5lZCwgYjogdW5kZWZpbmVkLCBjOiB1bmRlZmluZWQsIGNmZzoge2E6IHVuZGVmaW5lZCwgYjogdW5kZWZpbmVkLCBjOiB1bmRlZmluZWQsIH0gfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fMjMgPSAtPiBmbiAxICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgeyBhOiAxLCAgICAgICAgIGI6IHVuZGVmaW5lZCwgYzogdW5kZWZpbmVkLCBjZmc6IHsgYTogMSwgICAgICAgIGI6IHVuZGVmaW5lZCwgYzogdW5kZWZpbmVkLCB9IH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzI0ID0gLT4gZm4gMSwgMiAgICAgICAgICAgICAgICAgICAgICAgICksIHsgYTogMSwgICAgICAgICBiOiAyLCAgICAgICAgIGM6IHVuZGVmaW5lZCwgY2ZnOiB7IGE6IDEsICAgICAgICBiOiAyLCAgICAgICAgIGM6IHVuZGVmaW5lZCwgIH0gfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fMjUgPSAtPiBmbiAxLCAyLCAzICAgICAgICAgICAgICAgICAgICAgKSwgeyBhOiAxLCAgICAgICAgIGI6IDIsICAgICAgICAgYzogMywgICAgICAgICBjZmc6IHsgYTogMSwgICAgICAgIGI6IDIsICAgICAgICAgYzogMyB9IH1cbiAgICAgIEB0aHJvd3MgKCDOqW5mYXRfXzI2ID0gLT4gZm4gMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICksIC9leHBlY3RlZCBhbiBvcHRpb25hbCBQT0QgYXQgcG9zaXRpb24gLTEvXG4gICAgICBAZXEgICAgICggzqluZmF0X18yNyA9IC0+IGZuICAgICAgICAgICAgICAgICB7fSAgICAgICAgICApLCB7IGE6IHVuZGVmaW5lZCwgYjogdW5kZWZpbmVkLCBjOiB1bmRlZmluZWQsIGNmZzogeyBhOiB1bmRlZmluZWQsIGI6IHVuZGVmaW5lZCwgYzogdW5kZWZpbmVkLCB9IH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzI4ID0gLT4gZm4gMSwgICAgICAgICAgICAgIHt9ICAgICAgICAgICksIHsgYTogMSwgICAgICAgICBiOiB1bmRlZmluZWQsIGM6IHVuZGVmaW5lZCwgY2ZnOiB7IGE6IDEsICAgICAgICAgYjogdW5kZWZpbmVkLCBjOiB1bmRlZmluZWQsIH0gfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fMjkgPSAtPiBmbiAxLCAyLCAgICAgICAgICAge30gICAgICAgICAgKSwgeyBhOiAxLCAgICAgICAgIGI6IDIsICAgICAgICAgYzogdW5kZWZpbmVkLCBjZmc6IHsgYTogMSwgICAgICAgICBiOiAyLCAgICAgICAgIGM6IHVuZGVmaW5lZCwgfSB9XG4gICAgICBAZXEgICAgICggzqluZmF0X18zMCA9IC0+IGZuIDEsIDIsIDMsICAgICAgICB7fSAgICAgICAgICApLCB7IGE6IDEsICAgICAgICAgYjogMiwgICAgICAgICBjOiAzLCAgICAgICAgIGNmZzogeyBhOiAxLCAgICAgICAgIGI6IDIsICAgICAgICAgYzogMywgICAgICAgICB9IH1cbiAgICAgIEB0aHJvd3MgKCDOqW5mYXRfXzMxID0gLT4gZm4gMSwgMiwgMywgNCwgICAgIHt9ICAgICAgICAgICksIC9leHBlY3RlZCB1cCB0byA0IGFyZ3VtZW50cywgZ290IDUvXG4gICAgICBAZXEgICAgICggzqluZmF0X18zMiA9IC0+IGZuICAgICAgICAgICAgICAgICB7IGI6IDg4LCB9ICApLCB7IGE6IHVuZGVmaW5lZCwgYjogODgsICAgICAgICBjOiB1bmRlZmluZWQsIGNmZzogeyBhOiB1bmRlZmluZWQsIGI6IDg4LCAgICAgICAgYzogdW5kZWZpbmVkLCB9IH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzMzID0gLT4gZm4gMSwgICAgICAgICAgICAgIHsgYjogODgsIH0gICksIHsgYTogMSwgICAgICAgICBiOiA4OCwgICAgICAgIGM6IHVuZGVmaW5lZCwgY2ZnOiB7IGE6IDEsICAgICAgICAgYjogODgsICAgICAgICBjOiB1bmRlZmluZWQsIH0gfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fMzQgPSAtPiBmbiAxLCAyLCAgICAgICAgICAgeyBiOiA4OCwgfSAgKSwgeyBhOiAxLCAgICAgICAgIGI6IDIsICAgICAgICAgYzogdW5kZWZpbmVkLCBjZmc6IHsgYTogMSwgICAgICAgICBiOiAyLCAgICAgICAgIGM6IHVuZGVmaW5lZCwgfSB9XG4gICAgICBAZXEgICAgICggzqluZmF0X18zNSA9IC0+IGZuIDEsIDIsIDMsICAgICAgICB7IGI6IDg4LCB9ICApLCB7IGE6IDEsICAgICAgICAgYjogMiwgICAgICAgICBjOiAzLCAgICAgICAgIGNmZzogeyBhOiAxLCAgICAgICAgIGI6IDIsICAgICAgICAgYzogMywgICAgICAgICB9IH1cbiAgICAgIEB0aHJvd3MgKCDOqW5mYXRfXzM2ID0gLT4gZm4gMSwgMiwgMywgNCwgICAgIHsgYjogODgsIH0gICksIC9leHBlY3RlZCB1cCB0byA0IGFyZ3VtZW50cywgZ290IDUvXG4gICAgICBAZXEgICAgICggzqluZmF0X18zNyA9IC0+IGZuICAgICAgICAgICAgIGZyeiB7IGI6IDg4LCB9ICApLCB7IGE6IHVuZGVmaW5lZCwgYjogODgsICAgICAgICBjOiB1bmRlZmluZWQsIGNmZzogeyBhOiB1bmRlZmluZWQsIGI6IDg4LCAgICAgICAgYzogdW5kZWZpbmVkLCB9IH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzM4ID0gLT4gZm4gMSwgICAgICAgICAgZnJ6IHsgYjogODgsIH0gICksIHsgYTogMSwgICAgICAgICBiOiA4OCwgICAgICAgIGM6IHVuZGVmaW5lZCwgY2ZnOiB7IGE6IDEsICAgICAgICAgYjogODgsICAgICAgICBjOiB1bmRlZmluZWQsIH0gfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fMzkgPSAtPiBmbiAxLCAyLCAgICAgICBmcnogeyBiOiA4OCwgfSAgKSwgeyBhOiAxLCAgICAgICAgIGI6IDIsICAgICAgICAgYzogdW5kZWZpbmVkLCBjZmc6IHsgYTogMSwgICAgICAgICBiOiAyLCAgICAgICAgIGM6IHVuZGVmaW5lZCwgfSB9XG4gICAgICBAZXEgICAgICggzqluZmF0X180MCA9IC0+IGZuIDEsIDIsIDMsICAgIGZyeiB7IGI6IDg4LCB9ICApLCB7IGE6IDEsICAgICAgICAgYjogMiwgICAgICAgICBjOiAzLCAgICAgICAgIGNmZzogeyBhOiAxLCAgICAgICAgIGI6IDIsICAgICAgICAgYzogMywgICAgICAgICB9IH1cbiAgICAgIEB0aHJvd3MgKCDOqW5mYXRfXzQxID0gLT4gZm4gMSwgMiwgMywgNCwgZnJ6IHsgYjogODgsIH0gICksIC9leHBlY3RlZCB1cCB0byA0IGFyZ3VtZW50cywgZ290IDUvXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZm4gPSBuZmEgKCBjZmcgKSAtPiB7IGNmZywgfVxuICAgICAgZnJ6ID0gT2JqZWN0LmZyZWV6ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgICAgICggzqluZmF0X180MiA9IC0+IGZuKCkgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB7IGNmZzoge30gfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fNDMgPSAtPiBmbiAgICAgICAgICAgICAgICAge30gICAgICAgICAgKSwgeyBjZmc6IHt9IH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzQ0ID0gLT4gZm4gICAgICAgICAgICAgICAgIHsgYjogODgsIH0gICksIHsgY2ZnOiB7IGI6IDg4LCB9IH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzQ1ID0gLT4gZm4gICAgICAgICAgICAgZnJ6IHsgYjogODgsIH0gICksIHsgY2ZnOiB7IGI6IDg4LCB9IH1cbiAgICAgIEB0aHJvd3MgKCDOqW5mYXRfXzQ2ID0gLT4gZm4gMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICksIC9leHBlY3RlZCB1cCB0byAxIGFyZ3VtZW50cywgZ290IDQvXG4gICAgICBAdGhyb3dzICggzqluZmF0X180NyA9IC0+IGZuIDEsIDIsIDMsIDQsICAgICB7fSAgICAgICAgICApLCAvZXhwZWN0ZWQgdXAgdG8gMSBhcmd1bWVudHMsIGdvdCA1L1xuICAgICAgQHRocm93cyAoIM6pbmZhdF9fNDggPSAtPiBmbiAxLCAyLCAzLCA0LCAgICAgeyBiOiA4OCwgfSAgKSwgL2V4cGVjdGVkIHVwIHRvIDEgYXJndW1lbnRzLCBnb3QgNS9cbiAgICAgIEB0aHJvd3MgKCDOqW5mYXRfXzQ5ID0gLT4gZm4gMSwgMiwgMywgNCwgZnJ6IHsgYjogODgsIH0gICksIC9leHBlY3RlZCB1cCB0byAxIGFyZ3VtZW50cywgZ290IDUvXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYWNjZXB0c19jYWxsYWJsZV9yZWplY3RzX290aGVyczogLT5cbiAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgTkZBID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuICAgIHsgbmZhIH0gPSBORkFcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBAdGhyb3dzICggzqluZmF0X181MCA9IC0+IG5mYSAoKSAtPiB7fSAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC9ub3QgY29tcGxpYW50L1xuICAgICAgQHRocm93cyAoIM6pbmZhdF9fNTEgPSAtPiBuZmEgbnVsbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgYSBjYWxsYWJsZS9cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzUyID0gLT4gdHlwZV9vZiBuZmEgKCBhLCBiLCBjZmcgKSAtPiA0MCAgICAgICAgKSwgJ2Z1bmN0aW9uJ1xuICAgICAgQGVxICAgICAoIM6pbmZhdF9fNTMgPSAtPiB0eXBlX29mIG5mYSAoIGEsIGIsIGNmZyApIC0+IGF3YWl0IDQwICApLCAnZnVuY3Rpb24nXG4gICAgICBAZXEgICAgICggzqluZmF0X181NCA9IC0+IHR5cGVfb2YgbmZhICggYSwgYiwgY2ZnICkgLT4geWllbGQgNDAgICksICdmdW5jdGlvbidcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZ2YgPSBuZmEgKCBhLCBjZmcgKSAtPiB5aWVsZCBjZmcuYTsgeWllbGQgY2ZnLmEgKyAxOyByZXR1cm4gbnVsbFxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fNTUgPSAtPiBbICggZ2YgNCApLi4uLCBdICApLCBbIDQsIDUsIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBuYW1lc19pbl9jZmdfYXJlX2NyZWF0ZWQ6IC0+XG4gICAgTkZBID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuICAgIHsgbmZhIH0gPSBORkFcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBmbiA9IG5mYSAoIGZpcnN0X25hbWUsIGxhc3RfbmFtZSwgY2ZnICkgLT4gY2ZnXG4gICAgICBmcnogPSBPYmplY3QuZnJlZXplXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzU2ID0gLT4gZm4oKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHsgZmlyc3RfbmFtZTogdW5kZWZpbmVkLCBsYXN0X25hbWU6IHVuZGVmaW5lZCwgICB9XG4gICAgICBAZXEgICAgICggzqluZmF0X181NyA9IC0+IGZuICdBbGljZScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB7IGZpcnN0X25hbWU6ICdBbGljZScsICAgbGFzdF9uYW1lOiB1bmRlZmluZWQsICAgfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fNTggPSAtPiBmbiAnQWxpY2UnLCAnTWNNaWxsYW4nICAgICAgICAgICAgICAgICAgICAgKSwgeyBmaXJzdF9uYW1lOiAnQWxpY2UnLCAgIGxhc3RfbmFtZTogJ01jTWlsbGFuJywgIH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzU5ID0gLT4gZm4gICAgICAgICAgICAgICAgICAgICAge30gICAgICAgICAgICAgICAgICksIHsgZmlyc3RfbmFtZTogdW5kZWZpbmVkLCBsYXN0X25hbWU6IHVuZGVmaW5lZCwgICB9XG4gICAgICBAZXEgICAgICggzqluZmF0X182MCA9IC0+IGZuICdBbGljZScsICAgICAgICAgICAgIHt9ICAgICAgICAgICAgICAgICApLCB7IGZpcnN0X25hbWU6ICdBbGljZScsICAgbGFzdF9uYW1lOiB1bmRlZmluZWQsICAgfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fNjEgPSAtPiBmbiAnQWxpY2UnLCAnTWNNaWxsYW4nLCB7fSAgICAgICAgICAgICAgICAgKSwgeyBmaXJzdF9uYW1lOiAnQWxpY2UnLCAgIGxhc3RfbmFtZTogJ01jTWlsbGFuJywgIH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzYyID0gLT4gZm4gICAgICAgICAgICAgICAgICAgICAgeyBjaXR5OiAnU2VvdWwnLCB9ICksIHsgZmlyc3RfbmFtZTogdW5kZWZpbmVkLCBsYXN0X25hbWU6IHVuZGVmaW5lZCwgIGNpdHk6ICdTZW91bCcsIH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzYzID0gLT4gZm4gJ0FsaWNlJywgICAgICAgICAgICAgeyBjaXR5OiAnU2VvdWwnLCB9ICksIHsgZmlyc3RfbmFtZTogJ0FsaWNlJywgICBsYXN0X25hbWU6IHVuZGVmaW5lZCwgIGNpdHk6ICdTZW91bCcsIH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzY0ID0gLT4gZm4gJ0FsaWNlJywgJ01jTWlsbGFuJywgeyBjaXR5OiAnU2VvdWwnLCB9ICksIHsgZmlyc3RfbmFtZTogJ0FsaWNlJywgICBsYXN0X25hbWU6ICdNY01pbGxhbicsIGNpdHk6ICdTZW91bCcsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRfc2lnbmF0dXJlOiAtPlxuICAgIE5GQSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbiAgICB7IG5mYVxuICAgICAgZ2V0X3NpZ25hdHVyZSB9ID0gTkZBXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgb3B0aW9uYWwgPSBudWxsXG4gICAgICBgYGBcbiAgICAgIGNvbnN0IGVtcHR5X2ZuID0gZnVuY3Rpb24gKFxuXG4gICAgICAgIGNmZ1xuXG4gICAgICAgICkge307XG4gICAgICBgYGBcbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzY1ID0gLT4gZ2V0X3NpZ25hdHVyZSAoIGEsIGNmZyAgICAgICAgICAgICApIC0+ICApLCB7IG5hbWVzOiBbICdhJywgJ2NmZycgXSwgcV9pZHg6IDEsIHFfcmlkeDogLTEsIH1cbiAgICAgIEB0aHJvd3MgKCDOqW5mYXRfXzY2ID0gLT4gZ2V0X3NpZ25hdHVyZSAoIGEgPSBvcHRpb25hbCwgY2ZnICApIC0+ICApLCAvbm90IGNvbXBsaWFudC9cbiAgICAgIEB0aHJvd3MgKCDOqW5mYXRfXzY3ID0gLT4gZ2V0X3NpZ25hdHVyZSAoIGEgICAgICAgICAgICAgICAgICApIC0+ICApLCAvbm90IGNvbXBsaWFudC9cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzY4ID0gLT4gZ2V0X3NpZ25hdHVyZSBlbXB0eV9mbiAgICAgICAgICAgICAgICAgICApLCB7IG5hbWVzOiBbICdjZmcnIF0sIHFfaWR4OiAwLCBxX3JpZHg6IC0xLCB9XG4gICAgICBAZXEgICAgICggzqluZmF0X182OSA9IC0+IGdldF9zaWduYXR1cmUgKCBjZmcgKSAgICAgICAgICAgICAgICAtPiAgKSwgeyBuYW1lczogWyAnY2ZnJyBdLCBxX2lkeDogMCwgcV9yaWR4OiAtMSwgfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fNzAgPSAtPiBnZXRfc2lnbmF0dXJlICggYSwgYiwgYywgY2ZnICAgICAgICkgLT4gICksIHsgbmFtZXM6IFsgJ2EnLCAnYicsICdjJywgJ2NmZycgXSwgcV9pZHg6IDMsIHFfcmlkeDogLTEsIH1cbiAgICAgICMgIyMjIFRBSU5UIGxpbWl0YXRpb24gb2YgQ29mZmVlU2NyaXB0OiBzaWduYXR1cmUgcnVucyB1cCB0byBzb2FrLCB0cmFpbGluZyBwYXJhbXRlcnMgaGFuZGxlZCBpbnNpZGUgZnVuY3Rpb24gYm9keSAjIyNcbiAgICAgICMgQGVxICAgICAoIM6pbmZhdF9fNzEgPSAtPiBnZXRfc2lnbmF0dXJlICggYSwgYi4uLiwgYyAgICAgICApIC0+ICApLCB7IGE6ICdiYXJlJywgYjogJ3NvYWsnLCB9XG4gICAgICBAdGhyb3dzICggzqluZmF0X183MiA9IC0+IGdldF9zaWduYXR1cmUgKCBhLCBiLi4uLCBjLCBjZmcgICAgKSAtPiAgKSwgL25vdCBjb21wbGlhbnQvXG4gICAgICBAdGhyb3dzICggzqluZmF0X183MyA9IC0+IGdldF9zaWduYXR1cmUgKCBhLCBiID0gbnVsbCwgY2ZnICAgKSAtPiAgKSwgL25vdCBjb21wbGlhbnQvXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIEB0aHJvd3MgKCDOqW5mYXRfXzc0ID0gLT4gZ2V0X3NpZ25hdHVyZSAoIGEsIGIsIGNmZywgYywgICAgICBnICkgLT4gICksIC9ub3QgY29tcGxpYW50L1xuICAgICAgQGVxICAgICAoIM6pbmZhdF9fNzUgPSAtPiBnZXRfc2lnbmF0dXJlICggYSwgYiwgICAgICBjLCBjZmcsIGcgKSAtPiAgKSwgeyBuYW1lczogWyAnYScsICdiJywgJ2MnLCAnY2ZnJywgJ2cnLCBdLCBxX2lkeDogMywgcV9yaWR4OiAtMiwgfVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB0ZW1wbGF0ZV9jbGFzczogLT5cbiAgICBORkEgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG4gICAgeyBUZW1wbGF0ZSB9ID0gTkZBXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fNzYgPSAtPiBuZXcgVGVtcGxhdGUgeyBhcmM6IDEwLCBibzogMTEsIGN5OiAxMiwgZGluOiAxMzsgZXBzOiAxNCwgZm9vOiAxNSwgfSApLCB7IGFyYzogMTAsIGJvOiAxMSwgY3k6IDEyLCBkaW46IDEzOyBlcHM6IDE0LCBmb286IDE1LCB9XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgbXlsaXN0XzEgICAgICA9IFtdXG4gICAgICBteWxpc3RfMiAgICAgID0gW11cbiAgICAgIHQgPSBuZXcgVGVtcGxhdGVcbiAgICAgICAgbXlsaXN0XzE6ICAgICBteWxpc3RfMVxuICAgICAgICBteWxpc3RfMjogICAgIC0+IG15bGlzdF8yXG4gICAgICAgIG15bGlzdF8zOiAgICAgLT4gW11cbiAgICAgIG15bGlzdF8zMSA9IHQubXlsaXN0XzNcbiAgICAgIG15bGlzdF8zMiA9IHQubXlsaXN0XzNcbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzc3ID0gLT4gdCApLCB7IG15bGlzdF8xOiBbXSwgbXlsaXN0XzI6IFtdLCBteWxpc3RfMzogW10sIH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzc4ID0gLT4gdC5teWxpc3RfMSAgIGlzICAgIG15bGlzdF8xICApLCB0cnVlXG4gICAgICBAZXEgICAgICggzqluZmF0X183OSA9IC0+IHQubXlsaXN0XzIgICBpcyAgICBteWxpc3RfMiAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fODAgPSAtPiB0Lm15bGlzdF8xICAgaXNudCAgbXlsaXN0XzIgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzgxID0gLT4gdC5teWxpc3RfMzEgIGlzbnQgIG15bGlzdF8zMiApLCB0cnVlXG4gICAgICBteWxpc3RfMS5wdXNoICdBJ1xuICAgICAgbXlsaXN0XzIucHVzaCAnQidcbiAgICAgIG15bGlzdF8zMS5wdXNoICdDJ1xuICAgICAgQGVxICAgICAoIM6pbmZhdF9fODIgPSAtPiB0ICksIHsgbXlsaXN0XzE6IFsgJ0EnLCBdLCBteWxpc3RfMjogWyAnQicsIF0sIG15bGlzdF8zOiBbXSwgfVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBjZmcgPVxuICAgICAgICBuYW1lOlxuICAgICAgICAgIGZpcnN0OiAgICAnSm9obidcbiAgICAgICAgICBsYXN0OiAgICAgJ0RvZSdcbiAgICAgIHRfMSA9IG5ldyBUZW1wbGF0ZSBjZmdcbiAgICAgIHRfMiA9IG5ldyBUZW1wbGF0ZSBjZmdcbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzgzID0gLT4gdF8xICAgICAgICAgICAgICAgICAgICAgICAgKSwgeyBuYW1lOiB7IGZpcnN0OiAnSm9obicsIGxhc3Q6ICdEb2UnLCB9LCB9XG4gICAgICBAZXEgICAgICggzqluZmF0X184NCA9IC0+IHRfMS5uYW1lIGlzbnQgY2ZnLm5hbWUgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzg1ID0gLT4gdF8xICAgICAgICAgICAgICAgICAgICAgICAgKSwgeyBuYW1lOiB7IGZpcnN0OiAnSm9obicsIGxhc3Q6ICdEb2UnLCB9LCB9XG4gICAgICBAZXEgICAgICggzqluZmF0X184NiA9IC0+IHRfMi5uYW1lIGlzbnQgY2ZnLm5hbWUgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzg3ID0gLT4gdF8xLm5hbWUgaXNudCB0XzIubmFtZSAgICAgKSwgdHJ1ZVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB0ZW1wbGF0ZV9zZXR0aW5nOiAtPlxuICAgIE5GQSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbiAgICB7IG5mYVxuICAgICAgaW50ZXJuYWxzIH0gPSBORkFcbiAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyAjIyMgTk9URSBmb3IgbGF0ZXI6IHByZXNlcnZlIG1hbmFnZWQgcHJvcGVydGllcz8gIyMjXG4gICAgIyBkbyA9PlxuICAgICMgICB0ZW1wbGF0ZSA9XG4gICAgIyAgICAgYXJjOiAgICAgIDEwXG4gICAgIyAgICAgYm86ICAgICAgIDExXG4gICAgIyAgICAgY3k6ICAgICAgIDEyXG4gICAgIyAgICAgc3VtOiAgICAgIC0+IEBhcmMgKyBAYm8gKyBAY3lcbiAgICAjICAgZm4gPSBuZmEgeyB0ZW1wbGF0ZSwgfSwgKCBhcmMsIGJvLCBjeSwgY2ZnICkgLT4geyBhcmMsIGJvLCBjeSwgY2ZnLCBzdW06IGNmZy5zdW0sIH1cbiAgICAjICAgIyBmbiA9IG5mYSAoIGFyYywgYm8sIGN5LCBjZmcgKSAtPiB7IGFyYywgYm8sIGN5LCBjZmcsIHN1bTogY2ZnLnN1bSwgfVxuICAgICMgICBkZWJ1ZyAnzqluZmF0X184OCcsIGludGVybmFscy5nbmQubmZhX2NmZ1xuICAgICMgICBkZWJ1ZyAnzqluZmF0X184OScsIGludGVybmFscy5nbmQubmZhX2NmZy50ZW1wbGF0ZVxuICAgICMgICBkZWJ1ZyAnzqluZmF0X185MCcsIGZuIDEsIDIsIDMsIHt9XG4gICAgIyAgIEBlcSAgICAgKCDOqW5mYXRfXzkxID0gLT4gZm4gMSwgMiwgMywge30gKSwgeyBhcmM6IDEsIGJvOiAyLCBjeTogMywgY2ZnOiB7IGFyYzogMSwgYm86IDIsIGN5OiAzLCBzdW06IDYsIH0sIHN1bTogNiwgfVxuICAgICMgICBAZXEgICAgICggzqluZmF0X185MiA9IC0+IGZuIDEsIDIsIDMgICAgICksIHsgYXJjOiAxLCBibzogMiwgY3k6IDMsIGNmZzogeyBhcmM6IDEsIGJvOiAyLCBjeTogMywgc3VtOiA2LCB9LCBzdW06IDYsIH1cbiAgICAjICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICB0ZW1wbGF0ZSA9XG4gICAgICAgIGFyYzogICAgICAxMFxuICAgICAgICBibzogICAgICAgMTFcbiAgICAgICAgY3k6ICAgICAgIDEyXG4gICAgICBmbiA9IG5mYSB7IHRlbXBsYXRlLCB9LCAoIGFyYywgYm8sIGN5LCBjZmcgKSAtPiB7IGFyYywgYm8sIGN5LCBjZmcsIH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzkzID0gLT4gZm4gMjAsIDIxLCAyMiwge30gKSwgeyBhcmM6IDIwLCBibzogMjEsIGN5OiAyMiwgY2ZnOiB7IGFyYzogMjAsIGJvOiAyMSwgY3k6IDIyLCB9LCB9XG4gICAgICBAZXEgICAgICggzqluZmF0X185NCA9IC0+IGZuKCkgICAgICAgICAgICAgICksIHsgYXJjOiAxMCwgYm86IDExLCBjeTogMTIsIGNmZzogeyBhcmM6IDEwLCBibzogMTEsIGN5OiAxMiwgfSwgfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fOTUgPSAtPiBmbiAyMCAgICAgICAgICAgICApLCB7IGFyYzogMjAsIGJvOiAxMSwgY3k6IDEyLCBjZmc6IHsgYXJjOiAyMCwgYm86IDExLCBjeTogMTIsIH0sIH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzk2ID0gLT4gZm4gMjAsIDIxICAgICAgICAgKSwgeyBhcmM6IDIwLCBibzogMjEsIGN5OiAxMiwgY2ZnOiB7IGFyYzogMjAsIGJvOiAyMSwgY3k6IDEyLCB9LCB9XG4gICAgICBAZXEgICAgICggzqluZmF0X185NyA9IC0+IGZuIDIwLCAyMSwgMjIgICAgICksIHsgYXJjOiAyMCwgYm86IDIxLCBjeTogMjIsIGNmZzogeyBhcmM6IDIwLCBibzogMjEsIGN5OiAyMiwgfSwgfVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjZmdfaW5fcGVudWx0aW1hdGVfcG9zaXRpb246IC0+XG4gICAgTkZBID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuICAgIHsgbmZhXG4gICAgICBpbnRlcm5hbHMgfSA9IE5GQVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHRlbXBsYXRlID1cbiAgICAgICAgbmFtZTogICAgIG51bGxcbiAgICAgIGZuID0gbmZhIHsgdGVtcGxhdGUsIH0sICggbmFtZSwgY2ZnICkgLT4geyBuYW1lLCBjZmcsIH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzk4ID0gLT4gZm4oKSAgICAgICAgICAgICAgICAgICAgICAgICApLCB7IG5hbWU6IG51bGwsICAgICAgY2ZnOiB7IG5hbWU6IG51bGwgICAgfSB9XG4gICAgICBAZXEgICAgICggzqluZmF0X185OSA9IC0+IGZuICdhbGljZScsIHsgbmFtZTogJ2JvYicsIH0gKSwgeyBuYW1lOiAnYWxpY2UnLCAgIGNmZzogeyBuYW1lOiAnYWxpY2UnIH0gfVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICB0ZW1wbGF0ZSA9XG4gICAgICAgIG5hbWU6ICAgICAnY2FybCdcbiAgICAgICMgRiAgID0gU3ltYm9sLmZvciAnRidcbiAgICAgIEYgICA9ICggLT4gKVxuICAgICAgZm4gID0gbmZhIHsgdGVtcGxhdGUsIH0sICggbmFtZSwgY2ZnLCBmICkgLT4geyBuYW1lLCBmLCBjZmcsIH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfMTAwID0gLT4gZm4oKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgeyBuYW1lOiAnY2FybCcsICBmOiB1bmRlZmluZWQsIGNmZzogeyBuYW1lOiAnY2FybCcsICBmOiB1bmRlZmluZWQsIH0sIH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfMTAxID0gLT4gZm4gICAgICAgICAgeyBuYW1lOiAnYm9iJywgfSwgIEYgKSwgeyBuYW1lOiAnYm9iJywgICBmOiBGLCAgICAgICAgIGNmZzogeyBuYW1lOiAnYm9iJywgICBmOiBGLCAgICAgICAgIH0sIH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfMTAyID0gLT4gZm4gJ2FsaWNlJywgeyBuYW1lOiAnYm9iJywgfSwgIEYgKSwgeyBuYW1lOiAnYWxpY2UnLCBmOiBGLCAgICAgICAgIGNmZzogeyBuYW1lOiAnYWxpY2UnLCBmOiBGLCAgICAgICAgIH0sIH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfMTAzID0gLT4gZm4gJ2FsaWNlJywgeyAgICAgICAgICAgICAgfSwgIEYgKSwgeyBuYW1lOiAnYWxpY2UnLCBmOiBGLCAgICAgICAgIGNmZzogeyBuYW1lOiAnYWxpY2UnLCBmOiBGLCAgICAgICAgIH0sIH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfMTA0ID0gLT4gZm4gJ2FsaWNlJywgICAgICAgICAgICAgICAgICAgIEYgKSwgeyBuYW1lOiAnYWxpY2UnLCBmOiBGLCAgICAgICAgIGNmZzogeyBuYW1lOiAnYWxpY2UnLCBmOiBGLCAgICAgICAgIH0sIH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfMTA1ID0gLT4gZm4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIEYgKSwgeyBuYW1lOiAnY2FybCcsICBmOiBGLCAgICAgICAgIGNmZzogeyBuYW1lOiAnY2FybCcsICBmOiBGLCAgICAgICAgIH0sIH1cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZnVuY3Rpb25fbmFtaW5nOiAtPlxuICAgIE5GQSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbiAgICB7IG5mYVxuICAgICAgaW50ZXJuYWxzIH0gPSBORkFcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBteV9mbiA9ICggY2ZnICkgLT5cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfMTA2ID0gLT4gICAgICAgbXlfZm4ubmFtZSAgICksICdteV9mbidcbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfMTA3ID0gLT4gKCBuZmEgbXlfZm4gKS5uYW1lICksICdteV9mbidcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdXNlX2lzYV9zZXR0aW5nOiAtPlxuICAgIE5GQSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbiAgICB7IG5mYVxuICAgICAgaW50ZXJuYWxzIH0gPSBORkFcbiAgICB7IGduZCAgICAgICB9ID0gaW50ZXJuYWxzXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmbG9hdCAgICAgICAgICAgPSBpc2E6ICggeCApIC0+IE51bWJlci5pc0Zpbml0ZSB4XG4gICAgdGV4dCAgICAgICAgICAgID0gaXNhOiAoIHggKSAtPiAoIHR5cGVvZiB4ICkgaXMgJ3N0cmluZydcbiAgICBub25lbXB0eV90ZXh0ICAgPSBpc2E6ICggeCApIC0+ICggdGV4dC5pc2EgeCApIGFuZCB4Lmxlbmd0aCA+IDBcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICB0ZW1wbGF0ZSAgPSB7IHE6IDAsIHU6ICd1JywgfVxuICAgICAgaXNhICAgICAgID0gKCB4ICkgLT5cbiAgICAgICAgcmV0dXJuIGZhbHNlIHVubGVzcyBnbmQucG9kLmlzYSAgICAgICB4XG4gICAgICAgIHJldHVybiBmYWxzZSB1bmxlc3MgZmxvYXQuaXNhICAgICAgICAgeC5xXG4gICAgICAgIHJldHVybiBmYWxzZSB1bmxlc3Mgbm9uZW1wdHlfdGV4dC5pc2EgeC51XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICBmbiA9IG5mYSB7IGlzYSwgdGVtcGxhdGUsIH0sIHF1YW50aXR5X2NyZWF0ZSA9ICggcSwgdSwgY2ZnICkgLT4gY2ZnXG4gICAgICBAZXEgICAgICggzqluZmF0XzEwOCA9IC0+ICBmbiAzLCAncycgICAgICAgICApLCB7IHE6IDMsIHU6ICdzJywgfVxuICAgICAgQHRocm93cyAoIM6pbmZhdF8xMDkgPSAtPiAgZm4gMywgJycgICAgICAgICAgKSwgL3ZhbGlkYXRpb24gZXJyb3I6IGV4cGVjdGVkIGEgcXVhbnRpdHlfY3JlYXRlX2NmZy9cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgdHMgPVxuICAgICAgICBxdWFudGl0eTpcbiAgICAgICAgICB0ZW1wbGF0ZTogeyBxOiAwLCB1OiAndScsIH1cbiAgICAgICAgICBpc2E6ICggeCApIC0+XG4gICAgICAgICAgICByZXR1cm4gZmFsc2UgdW5sZXNzIGduZC5wb2QuaXNhICAgICAgIHhcbiAgICAgICAgICAgIHJldHVybiBmYWxzZSB1bmxlc3MgZmxvYXQuaXNhICAgICAgICAgeC5xXG4gICAgICAgICAgICByZXR1cm4gZmFsc2UgdW5sZXNzIG5vbmVtcHR5X3RleHQuaXNhIHgudVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIGZuID0gbmZhIHRzLnF1YW50aXR5LCBxdWFudGl0eV9jcmVhdGUgPSAoIHEsIHUsIGNmZyApIC0+IGNmZ1xuICAgICAgQGVxICAgICAoIM6pbmZhdF8xMTAgPSAtPiAgZm4gMywgJ3MnICAgICAgICAgICAgICAgICAgICAgKSwgeyBxOiAzLCB1OiAncycsIH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfMTExID0gLT4gIGZuIDMsICdzJywgeyBxOiAwLCB1OiAndScsIH0gICksIHsgcTogMywgdTogJ3MnLCB9XG4gICAgICBAdGhyb3dzICggzqluZmF0XzExMiA9IC0+ICBmbiAzLCAnJyAgICAgICAgICAgICAgICAgICAgICApLCAvdmFsaWRhdGlvbiBlcnJvcjogZXhwZWN0ZWQgYSBxdWFudGl0eV9jcmVhdGVfY2ZnL1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1c2VfaXNhX3NldHRpbmdfc2Ztb2R1bGU6IC0+XG4gICAgIyBORkEgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG4gICAgTkZBID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzL2Rpc3QvbWFpbi5qcydcbiAgICB7IG5mYVxuICAgICAgaW50ZXJuYWxzIH0gPSBORkFcbiAgICB7IGduZCAgICAgICB9ID0gaW50ZXJuYWxzXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmbG9hdCAgICAgICAgICAgPSBpc2E6ICggeCApIC0+IE51bWJlci5pc0Zpbml0ZSB4XG4gICAgdGV4dCAgICAgICAgICAgID0gaXNhOiAoIHggKSAtPiAoIHR5cGVvZiB4ICkgaXMgJ3N0cmluZydcbiAgICBub25lbXB0eV90ZXh0ICAgPSBpc2E6ICggeCApIC0+ICggdGV4dC5pc2EgeCApIGFuZCB4Lmxlbmd0aCA+IDBcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICB0ZW1wbGF0ZSAgPSB7IHE6IDAsIHU6ICd1JywgfVxuICAgICAgaXNhICAgICAgID0gKCB4ICkgLT5cbiAgICAgICAgcmV0dXJuIGZhbHNlIHVubGVzcyBnbmQucG9kLmlzYSAgICAgICB4XG4gICAgICAgIHJldHVybiBmYWxzZSB1bmxlc3MgZmxvYXQuaXNhICAgICAgICAgeC5xXG4gICAgICAgIHJldHVybiBmYWxzZSB1bmxlc3Mgbm9uZW1wdHlfdGV4dC5pc2EgeC51XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICBmbiA9IG5mYSB7IGlzYSwgdGVtcGxhdGUsIH0sIHF1YW50aXR5X2NyZWF0ZSA9ICggcSwgdSwgY2ZnICkgLT4gY2ZnXG4gICAgICBAZXEgICAgICggzqluZmF0XzExMyA9IC0+ICBmbiAzLCAncycgICAgICAgICApLCB7IHE6IDMsIHU6ICdzJywgfVxuICAgICAgQHRocm93cyAoIM6pbmZhdF8xMTQgPSAtPiAgZm4gMywgJycgICAgICAgICAgKSwgL3ZhbGlkYXRpb24gZXJyb3I6IGV4cGVjdGVkIGEgcXVhbnRpdHlfY3JlYXRlX2NmZy9cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgdHMgPVxuICAgICAgICBxdWFudGl0eTpcbiAgICAgICAgICB0ZW1wbGF0ZTogeyBxOiAwLCB1OiAndScsIH1cbiAgICAgICAgICBpc2E6ICggeCApIC0+XG4gICAgICAgICAgICByZXR1cm4gZmFsc2UgdW5sZXNzIGduZC5wb2QuaXNhICAgICAgIHhcbiAgICAgICAgICAgIHJldHVybiBmYWxzZSB1bmxlc3MgZmxvYXQuaXNhICAgICAgICAgeC5xXG4gICAgICAgICAgICByZXR1cm4gZmFsc2UgdW5sZXNzIG5vbmVtcHR5X3RleHQuaXNhIHgudVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIGZuID0gbmZhIHRzLnF1YW50aXR5LCBxdWFudGl0eV9jcmVhdGUgPSAoIHEsIHUsIGNmZyApIC0+IGNmZ1xuICAgICAgQGVxICAgICAoIM6pbmZhdF8xMTUgPSAtPiAgZm4gMywgJ3MnICAgICAgICAgICAgICAgICAgICAgKSwgeyBxOiAzLCB1OiAncycsIH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfMTE2ID0gLT4gIGZuIDMsICdzJywgeyBxOiAwLCB1OiAndScsIH0gICksIHsgcTogMywgdTogJ3MnLCB9XG4gICAgICBAdGhyb3dzICggzqluZmF0XzExNyA9IC0+ICBmbiAzLCAnJyAgICAgICAgICAgICAgICAgICAgICApLCAvdmFsaWRhdGlvbiBlcnJvcjogZXhwZWN0ZWQgYSBxdWFudGl0eV9jcmVhdGVfY2ZnL1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiB0cnVlLCAgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgQG5mYV90YXNrc1xuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGFjY2VwdHNfY2FsbGFibGVfcmVqZWN0c19vdGhlcnM6IEBuZmFfdGFza3MuYWNjZXB0c19jYWxsYWJsZV9yZWplY3RzX290aGVycyB9XG5cblxuXG4iXX0=
