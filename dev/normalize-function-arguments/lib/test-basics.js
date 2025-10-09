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
    },
    //---------------------------------------------------------------------------------------------------------
    unknown_bug: function() {
      var NFA, gnd, internals, nfa, object_prototype, types, walk_require_statements_cfg;
      // NFA = require '../../../apps/normalize-function-arguments'
      NFA = require('../../../apps/normalize-function-arguments');
      ({nfa, internals} = NFA);
      ({gnd} = internals);
      //.......................................................................................................
      object_prototype = Object.getPrototypeOf({});
      types = {
        pod: {
          isa: function(x) {
            var ref;
            return (x != null) && ((ref = Object.getPrototypeOf(x)) === null || ref === object_prototype);
          }
        },
        text: {
          isa: function(x) {
            return (typeof x) === 'string';
          }
        },
        nonempty_text: {
          isa: function(x) {
            return (types.text.isa(x)) && (x.length > 0);
          }
        },
        optional_nonempty_text: {
          isa: function(x) {
            return (x == null) || (types.nonempty_text.isa(x));
          }
        }
      };
      walk_require_statements_cfg = {
        template: {
          path: null,
          source: null
        },
        isa: function(x) {
          if (!types.pod.isa(x)) {
            return false;
          }
          if (!types.optional_nonempty_text.isa(x.path)) {
            return false;
          }
          if (!types.optional_nonempty_text.isa(x.source)) {
            return false;
          }
          if ((x.path != null) && (x.source != null)) {
            return true;
          }
          if ((x.path != null)) {
            return true;
          }
          if ((x.source != null)) {
            return true;
          }
          return false;
        }
      };
      (() => {        //=======================================================================================================
        var walk_require_statements, wrs, Ωnfat_118, Ωnfat_119;
        wrs = walk_require_statements = nfa(function(path, cfg) {
          return cfg;
        });
        this.eq((Ωnfat_118 = function() {
          return wrs('mypath');
        }), {
          path: 'mypath'
        });
        return this.eq((Ωnfat_119 = function() {
          return wrs({
            source: 'mysource'
          });
        }), {
          source: 'mysource',
          path: void 0
        });
      })();
      (() => {        //.......................................................................................................
        var walk_require_statements, wrs, Ωnfat_120, Ωnfat_121;
        wrs = walk_require_statements = nfa(function*(path, cfg) {
          return (yield cfg);
        });
        this.eq((Ωnfat_120 = function() {
          return [...(wrs('mypath'))];
        }), [
          {
            path: 'mypath'
          }
        ]);
        return this.eq((Ωnfat_121 = function() {
          return [
            ...(wrs({
              source: 'mysource'
            }))
          ];
        }), [
          {
            source: 'mysource',
            path: void 0
          }
        ]);
      })();
      (() => {        //.......................................................................................................
        var walk_require_statements, wrs, Ωnfat_122, Ωnfat_123;
        wrs = walk_require_statements = nfa(async function(path, cfg) {
          return (await cfg);
        });
        this.eq((Ωnfat_122 = async function() {
          return (await wrs('mypath'));
        }), {
          path: 'mypath'
        });
        return this.eq((Ωnfat_123 = async function() {
          return (await wrs({
            source: 'mysource'
          }));
        }), {
          source: 'mysource',
          path: void 0
        });
      })();
      (() => {        //-------------------------------------------------------------------------------------------------------
        var walk_require_statements, wrs, Ωnfat_124, Ωnfat_125;
        wrs = walk_require_statements = nfa(walk_require_statements_cfg, function(path, cfg) {
          return cfg;
        });
        this.eq((Ωnfat_124 = function() {
          return wrs('mypath');
        }), {
          path: 'mypath',
          source: null
        });
        return this.eq((Ωnfat_125 = function() {
          return wrs({
            source: 'mysource'
          });
        }), {
          path: null,
          source: 'mysource'
        });
      })();
      (() => {        //.......................................................................................................
        var walk_require_statements, wrs, Ωnfat_126, Ωnfat_127;
        wrs = walk_require_statements = nfa(walk_require_statements_cfg, function*(path, cfg) {
          return (yield cfg);
        });
        this.eq((Ωnfat_126 = function() {
          return [...(wrs('mypath'))];
        }), [
          {
            path: 'mypath',
            source: null
          }
        ]);
        return this.eq((Ωnfat_127 = function() {
          return [
            ...(wrs({
              source: 'mysource'
            }))
          ];
        }), [
          {
            path: null,
            source: 'mysource'
          }
        ]);
      })();
      (() => {        //.......................................................................................................
        var walk_require_statements, wrs, Ωnfat_128, Ωnfat_129;
        wrs = walk_require_statements = nfa(walk_require_statements_cfg, async function(path, cfg) {
          return (await cfg);
        });
        this.eq((Ωnfat_128 = async function() {
          return (await wrs('mypath'));
        }), {
          path: 'mypath',
          source: null
        });
        return this.eq((Ωnfat_129 = async function() {
          return (await wrs({
            source: 'mysource'
          }));
        }), {
          path: null,
          source: 'mysource'
        });
      })();
      //.......................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (async() => {
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
      return (await (new Test(guytest_cfg)).async_test(this.nfa_tasks));
    })();
  }

  // await ( new Test guytest_cfg ).async_test { unknown_bug: @nfa_tasks.unknown_bug }

  // f = -> await 994
// debug 'Ωnfat_130', f()
// debug 'Ωnfat_131', await f()
// g = -> f.call @
// debug 'Ωnfat_132', g()
// debug 'Ωnfat_133', await g()

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBO0lBQUE7O0VBRUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQix1QkFBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLE9BSEYsRUFJRSxHQUpGLENBQUEsR0FJNEIsR0FBRyxDQUFDLEdBSmhDLEVBWkE7OztFQWtCQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixJQUE1Qjs7RUFDQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1Qjs7RUFDQSxDQUFBLENBQUUsR0FBRixFQUNFLElBREYsRUFFRSxJQUZGLEVBR0UsS0FIRixFQUlFLE9BSkYsQ0FBQSxHQUk0QixHQUFHLENBQUMsR0FKaEMsRUFyQkE7Ozs7O0VBZ0NBLElBQUMsQ0FBQSxTQUFELEdBR0UsQ0FBQTs7SUFBQSxTQUFBLEVBR0UsQ0FB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LENBQUk7WUFBRSxNQUFBLEVBQVE7VUFBVixDQUFKLENBQU47UUFBSCxDQUFkLENBQUosRUFBK0Q7VUFBRSxJQUFBLEVBQU0sSUFBUjtVQUFjLE1BQUEsRUFBUTtRQUF0QixDQUEvRDtNQUhDLENBQUEsSUFoRFA7O0FBcURJLGFBQU87SUF0REk7RUF2WGIsRUFuQ0Y7OztFQW9kQSxJQUFHLE1BQUEsS0FBVSxPQUFPLENBQUMsSUFBckI7SUFBK0IsTUFBUyxDQUFBLEtBQUEsQ0FBQSxDQUFBLEdBQUE7QUFDeEMsVUFBQTtNQUFFLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsS0FBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsSUFBbEI7UUFBMEIsV0FBQSxFQUFhLElBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDthQUNkLENBQUEsTUFBTSxDQUFFLElBQUksSUFBSixDQUFTLFdBQVQsQ0FBRixDQUF3QixDQUFDLFVBQXpCLENBQW9DLElBQUMsQ0FBQSxTQUFyQyxDQUFOO0lBSHNDLENBQUEsSUFBeEM7OztFQXBkQTs7Ozs7Ozs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzdHJpY3QnXG5cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnaW50ZXJ0eXBlL3Rlc3QtYmFzaWNzJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG4jIFdHVVkgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL3dlYmd1eSdcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbnsgcmVkXG4gIGdvbGRcbiAgYm9sZFxuICB3aGl0ZVxuICByZXZlcnNlICAgICAgICAgICAgICAgfSA9IEdVWS50cm1cblxuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuI1xuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AbmZhX3Rhc2tzID1cblxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGludGVybmFsczpcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgcHVzaF9wb3Bfc2V0X2F0OiAtPlxuICAgICAgTkZBID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuICAgICAgeyBwdXNoX2F0XG4gICAgICAgIHBvcF9hdFxuICAgICAgICBzZXRfYXQgfSA9IE5GQS5pbnRlcm5hbHNcbiAgICAgIEEgPSAoIHBhcnRzICkgLT4gQXJyYXkuZnJvbSBwYXJ0cy5qb2luICcnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgQGVxICAgICAoIM6pbmZhdF9fXzEgPSAtPiBwdXNoX2F0ICBBJ2FiY2QnLCAtMSwgJ14nICAgICAgICAgICAgICAgICAgICApLCBBJ2FiY15kJ1xuICAgICAgICBAZXEgICAgICggzqluZmF0X19fMiA9IC0+IHB1c2hfYXQgIEEnYWJjZCcsIC0yLCAnXicgICAgICAgICAgICAgICAgICAgICksIEEnYWJeY2QnXG4gICAgICAgIEBlcSAgICAgKCDOqW5mYXRfX18zID0gLT4gcHVzaF9hdCAgQSdhYmNkJywgLTMsICdeJyAgICAgICAgICAgICAgICAgICAgKSwgQSdhXmJjZCdcbiAgICAgICAgQGVxICAgICAoIM6pbmZhdF9fXzQgPSAtPiBwdXNoX2F0ICBBJycsICAgICAtMSwgJ14nICAgICAgICAgICAgICAgICAgICApLCBBJ14nXG4gICAgICAgIEBlcSAgICAgKCDOqW5mYXRfX181ID0gLT4gcHVzaF9hdCAgQScnLCAgICAgLTIsICdeJyAgICAgICAgICAgICAgICAgICAgKSwgQSdeJ1xuICAgICAgICBAZXEgICAgICggzqluZmF0X19fNiA9IC0+IHB1c2hfYXQgIEEnJywgICAgIC0zLCAnXicgICAgICAgICAgICAgICAgICAgICksIEEnXidcbiAgICAgICAgQHRocm93cyAoIM6pbmZhdF9fXzcgPSAtPiBwdXNoX2F0ICBBJycsICAgICAgMSwgJz8nICAgICAgICAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgbmVnYXRpdmUgbnVtYmVyL1xuICAgICAgICBAdGhyb3dzICggzqluZmF0X19fOCA9IC0+IHB1c2hfYXQgIEEnJywgICAgICAwLCAnPycgICAgICAgICAgICAgICAgICAgICksIC9leHBlY3RlZCBuZWdhdGl2ZSBudW1iZXIvXG4gICAgICAgIEBlcSAgICAgKCDOqW5mYXRfX185ID0gLT4gWyAoIHNldF9hdCAoIGQgPSBBJ2FiY2QnICksIC0xLCAnXicgKSwgZCwgXSAgKSwgWyAnXicsIEEnYWJjXicsIF1cbiAgICAgICAgQGVxICAgICAoIM6pbmZhdF9fMTAgPSAtPiBbICggc2V0X2F0ICggZCA9IEEnYWJjZCcgKSwgLTIsICdeJyApLCBkLCBdICApLCBbICdeJywgQSdhYl5kJywgXVxuICAgICAgICBAZXEgICAgICggzqluZmF0X18xMSA9IC0+IFsgKCBzZXRfYXQgKCBkID0gQSdhYmNkJyApLCAtMywgJ14nICksIGQsIF0gICksIFsgJ14nLCBBJ2FeY2QnLCBdXG4gICAgICAgICMgQGVxICAgICAoIM6pbmZhdF9fMTIgPSAtPiBbICggcG9wX2F0ICggZCA9IEEnYWJjXicgKSwgLTEgKSwgZCwgXSAgICAgICApLCBbICdeJywgQSdhYmMnLCBdXG4gICAgICAgICMgQGVxICAgICAoIM6pbmZhdF9fMTMgPSAtPiBbICggcG9wX2F0ICggZCA9IEEnYWJeYycgKSwgLTIgKSwgZCwgXSAgICAgICApLCBbICdeJywgQSdhYmMnLCBdXG4gICAgICAgICMgQGVxICAgICAoIM6pbmZhdF9fMTQgPSAtPiBbICggcG9wX2F0ICggZCA9IEEnYV5iYycgKSwgLTMgKSwgZCwgXSAgICAgICApLCBbICdeJywgQSdhYmMnLCBdXG4gICAgICAgICMgQHRocm93cyAoIM6pbmZhdF9fMTUgPSAtPiBwb3BfYXQgICBBJycsICAgICAgMSAgICAgICAgICAgICAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgbmVnYXRpdmUgbnVtYmVyL1xuICAgICAgICAjIEB0aHJvd3MgKCDOqW5mYXRfXzE2ID0gLT4gcG9wX2F0ICAgQScnLCAgICAgIDAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgL2V4cGVjdGVkIG5lZ2F0aXZlIG51bWJlci9cbiAgICAgICAgIyBAdGhyb3dzICggzqluZmF0X18xNyA9IC0+IHBvcF9hdCAgIFtdLCAtMSAgICAgICAgICApLCAvbGlzdCB0b28gc2hvcnQvXG4gICAgICAgICMgQHRocm93cyAoIM6pbmZhdF9fMTggPSAtPiBwb3BfYXQgICBbIDEsIF0sIC0yICAgICAgKSwgL2xpc3QgdG9vIHNob3J0L1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIyAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBkbyA9PlxuICAgICAgIyAgIGQgPSBBJ2FiY2RlZidcbiAgICAgICMgICBAZXEgICAgICggzqluZmF0X18xOSA9IC0+IHB1c2hfYXQgIFsgICAgICAgICAgIF0sIC0xLCAnZycgKSwgWyAnZycsIF1cbiAgICAgICMgICBAZXEgICAgICggzqluZmF0X18yMCA9IC0+IHB1c2hfYXQgIFsgJ2InLCAgICAgIF0sIC0xLCAnYScgKSwgWyAnYScsICdiJywgXVxuICAgICAgIyAgIEBlcSAgICAgKCDOqW5mYXRfXzIxID0gLT4gcHVzaF9hdCAgWyAnYScsICdjJywgXSwgLTEsICdiJyApLCBbICdhJywgJ2InLCAnYycsIF1cbiAgICAgICMgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBiYXNpY3M6IC0+XG4gICAgTkZBID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuICAgIHsgbmZhXG4gICAgICBnZXRfc2lnbmF0dXJlIH0gPSBORkFcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBmbiA9IG5mYSAoIGEsIGIsIGMsIGNmZyApIC0+IHsgYSwgYiwgYywgY2ZnLCB9XG4gICAgICBmcnogPSBPYmplY3QuZnJlZXplXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzIyID0gLT4gZm4oKSAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHsgYTogdW5kZWZpbmVkLCBiOiB1bmRlZmluZWQsIGM6IHVuZGVmaW5lZCwgY2ZnOiB7YTogdW5kZWZpbmVkLCBiOiB1bmRlZmluZWQsIGM6IHVuZGVmaW5lZCwgfSB9XG4gICAgICBAZXEgICAgICggzqluZmF0X18yMyA9IC0+IGZuIDEgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB7IGE6IDEsICAgICAgICAgYjogdW5kZWZpbmVkLCBjOiB1bmRlZmluZWQsIGNmZzogeyBhOiAxLCAgICAgICAgYjogdW5kZWZpbmVkLCBjOiB1bmRlZmluZWQsIH0gfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fMjQgPSAtPiBmbiAxLCAyICAgICAgICAgICAgICAgICAgICAgICAgKSwgeyBhOiAxLCAgICAgICAgIGI6IDIsICAgICAgICAgYzogdW5kZWZpbmVkLCBjZmc6IHsgYTogMSwgICAgICAgIGI6IDIsICAgICAgICAgYzogdW5kZWZpbmVkLCAgfSB9XG4gICAgICBAZXEgICAgICggzqluZmF0X18yNSA9IC0+IGZuIDEsIDIsIDMgICAgICAgICAgICAgICAgICAgICApLCB7IGE6IDEsICAgICAgICAgYjogMiwgICAgICAgICBjOiAzLCAgICAgICAgIGNmZzogeyBhOiAxLCAgICAgICAgYjogMiwgICAgICAgICBjOiAzIH0gfVxuICAgICAgQHRocm93cyAoIM6pbmZhdF9fMjYgPSAtPiBmbiAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgKSwgL2V4cGVjdGVkIGFuIG9wdGlvbmFsIFBPRCBhdCBwb3NpdGlvbiAtMS9cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzI3ID0gLT4gZm4gICAgICAgICAgICAgICAgIHt9ICAgICAgICAgICksIHsgYTogdW5kZWZpbmVkLCBiOiB1bmRlZmluZWQsIGM6IHVuZGVmaW5lZCwgY2ZnOiB7IGE6IHVuZGVmaW5lZCwgYjogdW5kZWZpbmVkLCBjOiB1bmRlZmluZWQsIH0gfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fMjggPSAtPiBmbiAxLCAgICAgICAgICAgICAge30gICAgICAgICAgKSwgeyBhOiAxLCAgICAgICAgIGI6IHVuZGVmaW5lZCwgYzogdW5kZWZpbmVkLCBjZmc6IHsgYTogMSwgICAgICAgICBiOiB1bmRlZmluZWQsIGM6IHVuZGVmaW5lZCwgfSB9XG4gICAgICBAZXEgICAgICggzqluZmF0X18yOSA9IC0+IGZuIDEsIDIsICAgICAgICAgICB7fSAgICAgICAgICApLCB7IGE6IDEsICAgICAgICAgYjogMiwgICAgICAgICBjOiB1bmRlZmluZWQsIGNmZzogeyBhOiAxLCAgICAgICAgIGI6IDIsICAgICAgICAgYzogdW5kZWZpbmVkLCB9IH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzMwID0gLT4gZm4gMSwgMiwgMywgICAgICAgIHt9ICAgICAgICAgICksIHsgYTogMSwgICAgICAgICBiOiAyLCAgICAgICAgIGM6IDMsICAgICAgICAgY2ZnOiB7IGE6IDEsICAgICAgICAgYjogMiwgICAgICAgICBjOiAzLCAgICAgICAgIH0gfVxuICAgICAgQHRocm93cyAoIM6pbmZhdF9fMzEgPSAtPiBmbiAxLCAyLCAzLCA0LCAgICAge30gICAgICAgICAgKSwgL2V4cGVjdGVkIHVwIHRvIDQgYXJndW1lbnRzLCBnb3QgNS9cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzMyID0gLT4gZm4gICAgICAgICAgICAgICAgIHsgYjogODgsIH0gICksIHsgYTogdW5kZWZpbmVkLCBiOiA4OCwgICAgICAgIGM6IHVuZGVmaW5lZCwgY2ZnOiB7IGE6IHVuZGVmaW5lZCwgYjogODgsICAgICAgICBjOiB1bmRlZmluZWQsIH0gfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fMzMgPSAtPiBmbiAxLCAgICAgICAgICAgICAgeyBiOiA4OCwgfSAgKSwgeyBhOiAxLCAgICAgICAgIGI6IDg4LCAgICAgICAgYzogdW5kZWZpbmVkLCBjZmc6IHsgYTogMSwgICAgICAgICBiOiA4OCwgICAgICAgIGM6IHVuZGVmaW5lZCwgfSB9XG4gICAgICBAZXEgICAgICggzqluZmF0X18zNCA9IC0+IGZuIDEsIDIsICAgICAgICAgICB7IGI6IDg4LCB9ICApLCB7IGE6IDEsICAgICAgICAgYjogMiwgICAgICAgICBjOiB1bmRlZmluZWQsIGNmZzogeyBhOiAxLCAgICAgICAgIGI6IDIsICAgICAgICAgYzogdW5kZWZpbmVkLCB9IH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzM1ID0gLT4gZm4gMSwgMiwgMywgICAgICAgIHsgYjogODgsIH0gICksIHsgYTogMSwgICAgICAgICBiOiAyLCAgICAgICAgIGM6IDMsICAgICAgICAgY2ZnOiB7IGE6IDEsICAgICAgICAgYjogMiwgICAgICAgICBjOiAzLCAgICAgICAgIH0gfVxuICAgICAgQHRocm93cyAoIM6pbmZhdF9fMzYgPSAtPiBmbiAxLCAyLCAzLCA0LCAgICAgeyBiOiA4OCwgfSAgKSwgL2V4cGVjdGVkIHVwIHRvIDQgYXJndW1lbnRzLCBnb3QgNS9cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzM3ID0gLT4gZm4gICAgICAgICAgICAgZnJ6IHsgYjogODgsIH0gICksIHsgYTogdW5kZWZpbmVkLCBiOiA4OCwgICAgICAgIGM6IHVuZGVmaW5lZCwgY2ZnOiB7IGE6IHVuZGVmaW5lZCwgYjogODgsICAgICAgICBjOiB1bmRlZmluZWQsIH0gfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fMzggPSAtPiBmbiAxLCAgICAgICAgICBmcnogeyBiOiA4OCwgfSAgKSwgeyBhOiAxLCAgICAgICAgIGI6IDg4LCAgICAgICAgYzogdW5kZWZpbmVkLCBjZmc6IHsgYTogMSwgICAgICAgICBiOiA4OCwgICAgICAgIGM6IHVuZGVmaW5lZCwgfSB9XG4gICAgICBAZXEgICAgICggzqluZmF0X18zOSA9IC0+IGZuIDEsIDIsICAgICAgIGZyeiB7IGI6IDg4LCB9ICApLCB7IGE6IDEsICAgICAgICAgYjogMiwgICAgICAgICBjOiB1bmRlZmluZWQsIGNmZzogeyBhOiAxLCAgICAgICAgIGI6IDIsICAgICAgICAgYzogdW5kZWZpbmVkLCB9IH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzQwID0gLT4gZm4gMSwgMiwgMywgICAgZnJ6IHsgYjogODgsIH0gICksIHsgYTogMSwgICAgICAgICBiOiAyLCAgICAgICAgIGM6IDMsICAgICAgICAgY2ZnOiB7IGE6IDEsICAgICAgICAgYjogMiwgICAgICAgICBjOiAzLCAgICAgICAgIH0gfVxuICAgICAgQHRocm93cyAoIM6pbmZhdF9fNDEgPSAtPiBmbiAxLCAyLCAzLCA0LCBmcnogeyBiOiA4OCwgfSAgKSwgL2V4cGVjdGVkIHVwIHRvIDQgYXJndW1lbnRzLCBnb3QgNS9cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBmbiA9IG5mYSAoIGNmZyApIC0+IHsgY2ZnLCB9XG4gICAgICBmcnogPSBPYmplY3QuZnJlZXplXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzQyID0gLT4gZm4oKSAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHsgY2ZnOiB7fSB9XG4gICAgICBAZXEgICAgICggzqluZmF0X180MyA9IC0+IGZuICAgICAgICAgICAgICAgICB7fSAgICAgICAgICApLCB7IGNmZzoge30gfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fNDQgPSAtPiBmbiAgICAgICAgICAgICAgICAgeyBiOiA4OCwgfSAgKSwgeyBjZmc6IHsgYjogODgsIH0gfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fNDUgPSAtPiBmbiAgICAgICAgICAgICBmcnogeyBiOiA4OCwgfSAgKSwgeyBjZmc6IHsgYjogODgsIH0gfVxuICAgICAgQHRocm93cyAoIM6pbmZhdF9fNDYgPSAtPiBmbiAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgKSwgL2V4cGVjdGVkIHVwIHRvIDEgYXJndW1lbnRzLCBnb3QgNC9cbiAgICAgIEB0aHJvd3MgKCDOqW5mYXRfXzQ3ID0gLT4gZm4gMSwgMiwgMywgNCwgICAgIHt9ICAgICAgICAgICksIC9leHBlY3RlZCB1cCB0byAxIGFyZ3VtZW50cywgZ290IDUvXG4gICAgICBAdGhyb3dzICggzqluZmF0X180OCA9IC0+IGZuIDEsIDIsIDMsIDQsICAgICB7IGI6IDg4LCB9ICApLCAvZXhwZWN0ZWQgdXAgdG8gMSBhcmd1bWVudHMsIGdvdCA1L1xuICAgICAgQHRocm93cyAoIM6pbmZhdF9fNDkgPSAtPiBmbiAxLCAyLCAzLCA0LCBmcnogeyBiOiA4OCwgfSAgKSwgL2V4cGVjdGVkIHVwIHRvIDEgYXJndW1lbnRzLCBnb3QgNS9cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBhY2NlcHRzX2NhbGxhYmxlX3JlamVjdHNfb3RoZXJzOiAtPlxuICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICBORkEgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG4gICAgeyBuZmEgfSA9IE5GQVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIEB0aHJvd3MgKCDOqW5mYXRfXzUwID0gLT4gbmZhICgpIC0+IHt9ICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgL25vdCBjb21wbGlhbnQvXG4gICAgICBAdGhyb3dzICggzqluZmF0X181MSA9IC0+IG5mYSBudWxsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC9leHBlY3RlZCBhIGNhbGxhYmxlL1xuICAgICAgQGVxICAgICAoIM6pbmZhdF9fNTIgPSAtPiB0eXBlX29mIG5mYSAoIGEsIGIsIGNmZyApIC0+IDQwICAgICAgICApLCAnZnVuY3Rpb24nXG4gICAgICBAZXEgICAgICggzqluZmF0X181MyA9IC0+IHR5cGVfb2YgbmZhICggYSwgYiwgY2ZnICkgLT4gYXdhaXQgNDAgICksICdmdW5jdGlvbidcbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzU0ID0gLT4gdHlwZV9vZiBuZmEgKCBhLCBiLCBjZmcgKSAtPiB5aWVsZCA0MCAgKSwgJ2Z1bmN0aW9uJ1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBnZiA9IG5mYSAoIGEsIGNmZyApIC0+IHlpZWxkIGNmZy5hOyB5aWVsZCBjZmcuYSArIDE7IHJldHVybiBudWxsXG4gICAgICBAZXEgICAgICggzqluZmF0X181NSA9IC0+IFsgKCBnZiA0ICkuLi4sIF0gICksIFsgNCwgNSwgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIG5hbWVzX2luX2NmZ19hcmVfY3JlYXRlZDogLT5cbiAgICBORkEgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG4gICAgeyBuZmEgfSA9IE5GQVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGZuID0gbmZhICggZmlyc3RfbmFtZSwgbGFzdF9uYW1lLCBjZmcgKSAtPiBjZmdcbiAgICAgIGZyeiA9IE9iamVjdC5mcmVlemVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fNTYgPSAtPiBmbigpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgeyBmaXJzdF9uYW1lOiB1bmRlZmluZWQsIGxhc3RfbmFtZTogdW5kZWZpbmVkLCAgIH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzU3ID0gLT4gZm4gJ0FsaWNlJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHsgZmlyc3RfbmFtZTogJ0FsaWNlJywgICBsYXN0X25hbWU6IHVuZGVmaW5lZCwgICB9XG4gICAgICBAZXEgICAgICggzqluZmF0X181OCA9IC0+IGZuICdBbGljZScsICdNY01pbGxhbicgICAgICAgICAgICAgICAgICAgICApLCB7IGZpcnN0X25hbWU6ICdBbGljZScsICAgbGFzdF9uYW1lOiAnTWNNaWxsYW4nLCAgfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fNTkgPSAtPiBmbiAgICAgICAgICAgICAgICAgICAgICB7fSAgICAgICAgICAgICAgICAgKSwgeyBmaXJzdF9uYW1lOiB1bmRlZmluZWQsIGxhc3RfbmFtZTogdW5kZWZpbmVkLCAgIH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzYwID0gLT4gZm4gJ0FsaWNlJywgICAgICAgICAgICAge30gICAgICAgICAgICAgICAgICksIHsgZmlyc3RfbmFtZTogJ0FsaWNlJywgICBsYXN0X25hbWU6IHVuZGVmaW5lZCwgICB9XG4gICAgICBAZXEgICAgICggzqluZmF0X182MSA9IC0+IGZuICdBbGljZScsICdNY01pbGxhbicsIHt9ICAgICAgICAgICAgICAgICApLCB7IGZpcnN0X25hbWU6ICdBbGljZScsICAgbGFzdF9uYW1lOiAnTWNNaWxsYW4nLCAgfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fNjIgPSAtPiBmbiAgICAgICAgICAgICAgICAgICAgICB7IGNpdHk6ICdTZW91bCcsIH0gKSwgeyBmaXJzdF9uYW1lOiB1bmRlZmluZWQsIGxhc3RfbmFtZTogdW5kZWZpbmVkLCAgY2l0eTogJ1Nlb3VsJywgfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fNjMgPSAtPiBmbiAnQWxpY2UnLCAgICAgICAgICAgICB7IGNpdHk6ICdTZW91bCcsIH0gKSwgeyBmaXJzdF9uYW1lOiAnQWxpY2UnLCAgIGxhc3RfbmFtZTogdW5kZWZpbmVkLCAgY2l0eTogJ1Nlb3VsJywgfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fNjQgPSAtPiBmbiAnQWxpY2UnLCAnTWNNaWxsYW4nLCB7IGNpdHk6ICdTZW91bCcsIH0gKSwgeyBmaXJzdF9uYW1lOiAnQWxpY2UnLCAgIGxhc3RfbmFtZTogJ01jTWlsbGFuJywgY2l0eTogJ1Nlb3VsJywgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9zaWduYXR1cmU6IC0+XG4gICAgTkZBID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuICAgIHsgbmZhXG4gICAgICBnZXRfc2lnbmF0dXJlIH0gPSBORkFcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBvcHRpb25hbCA9IG51bGxcbiAgICAgIGBgYFxuICAgICAgY29uc3QgZW1wdHlfZm4gPSBmdW5jdGlvbiAoXG5cbiAgICAgICAgY2ZnXG5cbiAgICAgICAgKSB7fTtcbiAgICAgIGBgYFxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fNjUgPSAtPiBnZXRfc2lnbmF0dXJlICggYSwgY2ZnICAgICAgICAgICAgICkgLT4gICksIHsgbmFtZXM6IFsgJ2EnLCAnY2ZnJyBdLCBxX2lkeDogMSwgcV9yaWR4OiAtMSwgfVxuICAgICAgQHRocm93cyAoIM6pbmZhdF9fNjYgPSAtPiBnZXRfc2lnbmF0dXJlICggYSA9IG9wdGlvbmFsLCBjZmcgICkgLT4gICksIC9ub3QgY29tcGxpYW50L1xuICAgICAgQHRocm93cyAoIM6pbmZhdF9fNjcgPSAtPiBnZXRfc2lnbmF0dXJlICggYSAgICAgICAgICAgICAgICAgICkgLT4gICksIC9ub3QgY29tcGxpYW50L1xuICAgICAgQGVxICAgICAoIM6pbmZhdF9fNjggPSAtPiBnZXRfc2lnbmF0dXJlIGVtcHR5X2ZuICAgICAgICAgICAgICAgICAgICksIHsgbmFtZXM6IFsgJ2NmZycgXSwgcV9pZHg6IDAsIHFfcmlkeDogLTEsIH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzY5ID0gLT4gZ2V0X3NpZ25hdHVyZSAoIGNmZyApICAgICAgICAgICAgICAgIC0+ICApLCB7IG5hbWVzOiBbICdjZmcnIF0sIHFfaWR4OiAwLCBxX3JpZHg6IC0xLCB9XG4gICAgICBAZXEgICAgICggzqluZmF0X183MCA9IC0+IGdldF9zaWduYXR1cmUgKCBhLCBiLCBjLCBjZmcgICAgICAgKSAtPiAgKSwgeyBuYW1lczogWyAnYScsICdiJywgJ2MnLCAnY2ZnJyBdLCBxX2lkeDogMywgcV9yaWR4OiAtMSwgfVxuICAgICAgIyAjIyMgVEFJTlQgbGltaXRhdGlvbiBvZiBDb2ZmZWVTY3JpcHQ6IHNpZ25hdHVyZSBydW5zIHVwIHRvIHNvYWssIHRyYWlsaW5nIHBhcmFtdGVycyBoYW5kbGVkIGluc2lkZSBmdW5jdGlvbiBib2R5ICMjI1xuICAgICAgIyBAZXEgICAgICggzqluZmF0X183MSA9IC0+IGdldF9zaWduYXR1cmUgKCBhLCBiLi4uLCBjICAgICAgICkgLT4gICksIHsgYTogJ2JhcmUnLCBiOiAnc29haycsIH1cbiAgICAgIEB0aHJvd3MgKCDOqW5mYXRfXzcyID0gLT4gZ2V0X3NpZ25hdHVyZSAoIGEsIGIuLi4sIGMsIGNmZyAgICApIC0+ICApLCAvbm90IGNvbXBsaWFudC9cbiAgICAgIEB0aHJvd3MgKCDOqW5mYXRfXzczID0gLT4gZ2V0X3NpZ25hdHVyZSAoIGEsIGIgPSBudWxsLCBjZmcgICApIC0+ICApLCAvbm90IGNvbXBsaWFudC9cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgQHRocm93cyAoIM6pbmZhdF9fNzQgPSAtPiBnZXRfc2lnbmF0dXJlICggYSwgYiwgY2ZnLCBjLCAgICAgIGcgKSAtPiAgKSwgL25vdCBjb21wbGlhbnQvXG4gICAgICBAZXEgICAgICggzqluZmF0X183NSA9IC0+IGdldF9zaWduYXR1cmUgKCBhLCBiLCAgICAgIGMsIGNmZywgZyApIC0+ICApLCB7IG5hbWVzOiBbICdhJywgJ2InLCAnYycsICdjZmcnLCAnZycsIF0sIHFfaWR4OiAzLCBxX3JpZHg6IC0yLCB9XG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHRlbXBsYXRlX2NsYXNzOiAtPlxuICAgIE5GQSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbiAgICB7IFRlbXBsYXRlIH0gPSBORkFcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBAZXEgICAgICggzqluZmF0X183NiA9IC0+IG5ldyBUZW1wbGF0ZSB7IGFyYzogMTAsIGJvOiAxMSwgY3k6IDEyLCBkaW46IDEzOyBlcHM6IDE0LCBmb286IDE1LCB9ICksIHsgYXJjOiAxMCwgYm86IDExLCBjeTogMTIsIGRpbjogMTM7IGVwczogMTQsIGZvbzogMTUsIH1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBteWxpc3RfMSAgICAgID0gW11cbiAgICAgIG15bGlzdF8yICAgICAgPSBbXVxuICAgICAgdCA9IG5ldyBUZW1wbGF0ZVxuICAgICAgICBteWxpc3RfMTogICAgIG15bGlzdF8xXG4gICAgICAgIG15bGlzdF8yOiAgICAgLT4gbXlsaXN0XzJcbiAgICAgICAgbXlsaXN0XzM6ICAgICAtPiBbXVxuICAgICAgbXlsaXN0XzMxID0gdC5teWxpc3RfM1xuICAgICAgbXlsaXN0XzMyID0gdC5teWxpc3RfM1xuICAgICAgQGVxICAgICAoIM6pbmZhdF9fNzcgPSAtPiB0ICksIHsgbXlsaXN0XzE6IFtdLCBteWxpc3RfMjogW10sIG15bGlzdF8zOiBbXSwgfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fNzggPSAtPiB0Lm15bGlzdF8xICAgaXMgICAgbXlsaXN0XzEgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzc5ID0gLT4gdC5teWxpc3RfMiAgIGlzICAgIG15bGlzdF8yICApLCB0cnVlXG4gICAgICBAZXEgICAgICggzqluZmF0X184MCA9IC0+IHQubXlsaXN0XzEgICBpc250ICBteWxpc3RfMiAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fODEgPSAtPiB0Lm15bGlzdF8zMSAgaXNudCAgbXlsaXN0XzMyICksIHRydWVcbiAgICAgIG15bGlzdF8xLnB1c2ggJ0EnXG4gICAgICBteWxpc3RfMi5wdXNoICdCJ1xuICAgICAgbXlsaXN0XzMxLnB1c2ggJ0MnXG4gICAgICBAZXEgICAgICggzqluZmF0X184MiA9IC0+IHQgKSwgeyBteWxpc3RfMTogWyAnQScsIF0sIG15bGlzdF8yOiBbICdCJywgXSwgbXlsaXN0XzM6IFtdLCB9XG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGNmZyA9XG4gICAgICAgIG5hbWU6XG4gICAgICAgICAgZmlyc3Q6ICAgICdKb2huJ1xuICAgICAgICAgIGxhc3Q6ICAgICAnRG9lJ1xuICAgICAgdF8xID0gbmV3IFRlbXBsYXRlIGNmZ1xuICAgICAgdF8yID0gbmV3IFRlbXBsYXRlIGNmZ1xuICAgICAgQGVxICAgICAoIM6pbmZhdF9fODMgPSAtPiB0XzEgICAgICAgICAgICAgICAgICAgICAgICApLCB7IG5hbWU6IHsgZmlyc3Q6ICdKb2huJywgbGFzdDogJ0RvZScsIH0sIH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzg0ID0gLT4gdF8xLm5hbWUgaXNudCBjZmcubmFtZSAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fODUgPSAtPiB0XzEgICAgICAgICAgICAgICAgICAgICAgICApLCB7IG5hbWU6IHsgZmlyc3Q6ICdKb2huJywgbGFzdDogJ0RvZScsIH0sIH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzg2ID0gLT4gdF8yLm5hbWUgaXNudCBjZmcubmFtZSAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fODcgPSAtPiB0XzEubmFtZSBpc250IHRfMi5uYW1lICAgICApLCB0cnVlXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHRlbXBsYXRlX3NldHRpbmc6IC0+XG4gICAgTkZBID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuICAgIHsgbmZhXG4gICAgICBpbnRlcm5hbHMgfSA9IE5GQVxuICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjICMjIyBOT1RFIGZvciBsYXRlcjogcHJlc2VydmUgbWFuYWdlZCBwcm9wZXJ0aWVzPyAjIyNcbiAgICAjIGRvID0+XG4gICAgIyAgIHRlbXBsYXRlID1cbiAgICAjICAgICBhcmM6ICAgICAgMTBcbiAgICAjICAgICBibzogICAgICAgMTFcbiAgICAjICAgICBjeTogICAgICAgMTJcbiAgICAjICAgICBzdW06ICAgICAgLT4gQGFyYyArIEBibyArIEBjeVxuICAgICMgICBmbiA9IG5mYSB7IHRlbXBsYXRlLCB9LCAoIGFyYywgYm8sIGN5LCBjZmcgKSAtPiB7IGFyYywgYm8sIGN5LCBjZmcsIHN1bTogY2ZnLnN1bSwgfVxuICAgICMgICAjIGZuID0gbmZhICggYXJjLCBibywgY3ksIGNmZyApIC0+IHsgYXJjLCBibywgY3ksIGNmZywgc3VtOiBjZmcuc3VtLCB9XG4gICAgIyAgIGRlYnVnICfOqW5mYXRfXzg4JywgaW50ZXJuYWxzLmduZC5uZmFfY2ZnXG4gICAgIyAgIGRlYnVnICfOqW5mYXRfXzg5JywgaW50ZXJuYWxzLmduZC5uZmFfY2ZnLnRlbXBsYXRlXG4gICAgIyAgIGRlYnVnICfOqW5mYXRfXzkwJywgZm4gMSwgMiwgMywge31cbiAgICAjICAgQGVxICAgICAoIM6pbmZhdF9fOTEgPSAtPiBmbiAxLCAyLCAzLCB7fSApLCB7IGFyYzogMSwgYm86IDIsIGN5OiAzLCBjZmc6IHsgYXJjOiAxLCBibzogMiwgY3k6IDMsIHN1bTogNiwgfSwgc3VtOiA2LCB9XG4gICAgIyAgIEBlcSAgICAgKCDOqW5mYXRfXzkyID0gLT4gZm4gMSwgMiwgMyAgICAgKSwgeyBhcmM6IDEsIGJvOiAyLCBjeTogMywgY2ZnOiB7IGFyYzogMSwgYm86IDIsIGN5OiAzLCBzdW06IDYsIH0sIHN1bTogNiwgfVxuICAgICMgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHRlbXBsYXRlID1cbiAgICAgICAgYXJjOiAgICAgIDEwXG4gICAgICAgIGJvOiAgICAgICAxMVxuICAgICAgICBjeTogICAgICAgMTJcbiAgICAgIGZuID0gbmZhIHsgdGVtcGxhdGUsIH0sICggYXJjLCBibywgY3ksIGNmZyApIC0+IHsgYXJjLCBibywgY3ksIGNmZywgfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fOTMgPSAtPiBmbiAyMCwgMjEsIDIyLCB7fSApLCB7IGFyYzogMjAsIGJvOiAyMSwgY3k6IDIyLCBjZmc6IHsgYXJjOiAyMCwgYm86IDIxLCBjeTogMjIsIH0sIH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzk0ID0gLT4gZm4oKSAgICAgICAgICAgICAgKSwgeyBhcmM6IDEwLCBibzogMTEsIGN5OiAxMiwgY2ZnOiB7IGFyYzogMTAsIGJvOiAxMSwgY3k6IDEyLCB9LCB9XG4gICAgICBAZXEgICAgICggzqluZmF0X185NSA9IC0+IGZuIDIwICAgICAgICAgICAgICksIHsgYXJjOiAyMCwgYm86IDExLCBjeTogMTIsIGNmZzogeyBhcmM6IDIwLCBibzogMTEsIGN5OiAxMiwgfSwgfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fOTYgPSAtPiBmbiAyMCwgMjEgICAgICAgICApLCB7IGFyYzogMjAsIGJvOiAyMSwgY3k6IDEyLCBjZmc6IHsgYXJjOiAyMCwgYm86IDIxLCBjeTogMTIsIH0sIH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzk3ID0gLT4gZm4gMjAsIDIxLCAyMiAgICAgKSwgeyBhcmM6IDIwLCBibzogMjEsIGN5OiAyMiwgY2ZnOiB7IGFyYzogMjAsIGJvOiAyMSwgY3k6IDIyLCB9LCB9XG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNmZ19pbl9wZW51bHRpbWF0ZV9wb3NpdGlvbjogLT5cbiAgICBORkEgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG4gICAgeyBuZmFcbiAgICAgIGludGVybmFscyB9ID0gTkZBXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgdGVtcGxhdGUgPVxuICAgICAgICBuYW1lOiAgICAgbnVsbFxuICAgICAgZm4gPSBuZmEgeyB0ZW1wbGF0ZSwgfSwgKCBuYW1lLCBjZmcgKSAtPiB7IG5hbWUsIGNmZywgfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fOTggPSAtPiBmbigpICAgICAgICAgICAgICAgICAgICAgICAgICksIHsgbmFtZTogbnVsbCwgICAgICBjZmc6IHsgbmFtZTogbnVsbCAgICB9IH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzk5ID0gLT4gZm4gJ2FsaWNlJywgeyBuYW1lOiAnYm9iJywgfSApLCB7IG5hbWU6ICdhbGljZScsICAgY2ZnOiB7IG5hbWU6ICdhbGljZScgfSB9XG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHRlbXBsYXRlID1cbiAgICAgICAgbmFtZTogICAgICdjYXJsJ1xuICAgICAgIyBGICAgPSBTeW1ib2wuZm9yICdGJ1xuICAgICAgRiAgID0gKCAtPiApXG4gICAgICBmbiAgPSBuZmEgeyB0ZW1wbGF0ZSwgfSwgKCBuYW1lLCBjZmcsIGYgKSAtPiB7IG5hbWUsIGYsIGNmZywgfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF8xMDAgPSAtPiBmbigpICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB7IG5hbWU6ICdjYXJsJywgIGY6IHVuZGVmaW5lZCwgY2ZnOiB7IG5hbWU6ICdjYXJsJywgIGY6IHVuZGVmaW5lZCwgfSwgfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF8xMDEgPSAtPiBmbiAgICAgICAgICB7IG5hbWU6ICdib2InLCB9LCAgRiApLCB7IG5hbWU6ICdib2InLCAgIGY6IEYsICAgICAgICAgY2ZnOiB7IG5hbWU6ICdib2InLCAgIGY6IEYsICAgICAgICAgfSwgfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF8xMDIgPSAtPiBmbiAnYWxpY2UnLCB7IG5hbWU6ICdib2InLCB9LCAgRiApLCB7IG5hbWU6ICdhbGljZScsIGY6IEYsICAgICAgICAgY2ZnOiB7IG5hbWU6ICdhbGljZScsIGY6IEYsICAgICAgICAgfSwgfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF8xMDMgPSAtPiBmbiAnYWxpY2UnLCB7ICAgICAgICAgICAgICB9LCAgRiApLCB7IG5hbWU6ICdhbGljZScsIGY6IEYsICAgICAgICAgY2ZnOiB7IG5hbWU6ICdhbGljZScsIGY6IEYsICAgICAgICAgfSwgfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF8xMDQgPSAtPiBmbiAnYWxpY2UnLCAgICAgICAgICAgICAgICAgICAgRiApLCB7IG5hbWU6ICdhbGljZScsIGY6IEYsICAgICAgICAgY2ZnOiB7IG5hbWU6ICdhbGljZScsIGY6IEYsICAgICAgICAgfSwgfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF8xMDUgPSAtPiBmbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRiApLCB7IG5hbWU6ICdjYXJsJywgIGY6IEYsICAgICAgICAgY2ZnOiB7IG5hbWU6ICdjYXJsJywgIGY6IEYsICAgICAgICAgfSwgfVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBmdW5jdGlvbl9uYW1pbmc6IC0+XG4gICAgTkZBID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuICAgIHsgbmZhXG4gICAgICBpbnRlcm5hbHMgfSA9IE5GQVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIG15X2ZuID0gKCBjZmcgKSAtPlxuICAgICAgQGVxICAgICAoIM6pbmZhdF8xMDYgPSAtPiAgICAgICBteV9mbi5uYW1lICAgKSwgJ215X2ZuJ1xuICAgICAgQGVxICAgICAoIM6pbmZhdF8xMDcgPSAtPiAoIG5mYSBteV9mbiApLm5hbWUgKSwgJ215X2ZuJ1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1c2VfaXNhX3NldHRpbmc6IC0+XG4gICAgTkZBID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuICAgIHsgbmZhXG4gICAgICBpbnRlcm5hbHMgfSA9IE5GQVxuICAgIHsgZ25kICAgICAgIH0gPSBpbnRlcm5hbHNcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGZsb2F0ICAgICAgICAgICA9IGlzYTogKCB4ICkgLT4gTnVtYmVyLmlzRmluaXRlIHhcbiAgICB0ZXh0ICAgICAgICAgICAgPSBpc2E6ICggeCApIC0+ICggdHlwZW9mIHggKSBpcyAnc3RyaW5nJ1xuICAgIG5vbmVtcHR5X3RleHQgICA9IGlzYTogKCB4ICkgLT4gKCB0ZXh0LmlzYSB4ICkgYW5kIHgubGVuZ3RoID4gMFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHRlbXBsYXRlICA9IHsgcTogMCwgdTogJ3UnLCB9XG4gICAgICBpc2EgICAgICAgPSAoIHggKSAtPlxuICAgICAgICByZXR1cm4gZmFsc2UgdW5sZXNzIGduZC5wb2QuaXNhICAgICAgIHhcbiAgICAgICAgcmV0dXJuIGZhbHNlIHVubGVzcyBmbG9hdC5pc2EgICAgICAgICB4LnFcbiAgICAgICAgcmV0dXJuIGZhbHNlIHVubGVzcyBub25lbXB0eV90ZXh0LmlzYSB4LnVcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIGZuID0gbmZhIHsgaXNhLCB0ZW1wbGF0ZSwgfSwgcXVhbnRpdHlfY3JlYXRlID0gKCBxLCB1LCBjZmcgKSAtPiBjZmdcbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfMTA4ID0gLT4gIGZuIDMsICdzJyAgICAgICAgICksIHsgcTogMywgdTogJ3MnLCB9XG4gICAgICBAdGhyb3dzICggzqluZmF0XzEwOSA9IC0+ICBmbiAzLCAnJyAgICAgICAgICApLCAvdmFsaWRhdGlvbiBlcnJvcjogZXhwZWN0ZWQgYSBxdWFudGl0eV9jcmVhdGVfY2ZnL1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICB0cyA9XG4gICAgICAgIHF1YW50aXR5OlxuICAgICAgICAgIHRlbXBsYXRlOiB7IHE6IDAsIHU6ICd1JywgfVxuICAgICAgICAgIGlzYTogKCB4ICkgLT5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZSB1bmxlc3MgZ25kLnBvZC5pc2EgICAgICAgeFxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlIHVubGVzcyBmbG9hdC5pc2EgICAgICAgICB4LnFcbiAgICAgICAgICAgIHJldHVybiBmYWxzZSB1bmxlc3Mgbm9uZW1wdHlfdGV4dC5pc2EgeC51XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgZm4gPSBuZmEgdHMucXVhbnRpdHksIHF1YW50aXR5X2NyZWF0ZSA9ICggcSwgdSwgY2ZnICkgLT4gY2ZnXG4gICAgICBAZXEgICAgICggzqluZmF0XzExMCA9IC0+ICBmbiAzLCAncycgICAgICAgICAgICAgICAgICAgICApLCB7IHE6IDMsIHU6ICdzJywgfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF8xMTEgPSAtPiAgZm4gMywgJ3MnLCB7IHE6IDAsIHU6ICd1JywgfSAgKSwgeyBxOiAzLCB1OiAncycsIH1cbiAgICAgIEB0aHJvd3MgKCDOqW5mYXRfMTEyID0gLT4gIGZuIDMsICcnICAgICAgICAgICAgICAgICAgICAgICksIC92YWxpZGF0aW9uIGVycm9yOiBleHBlY3RlZCBhIHF1YW50aXR5X2NyZWF0ZV9jZmcvXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHVzZV9pc2Ffc2V0dGluZ19zZm1vZHVsZTogLT5cbiAgICAjIE5GQSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbiAgICBORkEgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG4gICAgeyBuZmFcbiAgICAgIGludGVybmFscyB9ID0gTkZBXG4gICAgeyBnbmQgICAgICAgfSA9IGludGVybmFsc1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZmxvYXQgICAgICAgICAgID0gaXNhOiAoIHggKSAtPiBOdW1iZXIuaXNGaW5pdGUgeFxuICAgIHRleHQgICAgICAgICAgICA9IGlzYTogKCB4ICkgLT4gKCB0eXBlb2YgeCApIGlzICdzdHJpbmcnXG4gICAgbm9uZW1wdHlfdGV4dCAgID0gaXNhOiAoIHggKSAtPiAoIHRleHQuaXNhIHggKSBhbmQgeC5sZW5ndGggPiAwXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgdGVtcGxhdGUgID0geyBxOiAwLCB1OiAndScsIH1cbiAgICAgIGlzYSAgICAgICA9ICggeCApIC0+XG4gICAgICAgIHJldHVybiBmYWxzZSB1bmxlc3MgZ25kLnBvZC5pc2EgICAgICAgeFxuICAgICAgICByZXR1cm4gZmFsc2UgdW5sZXNzIGZsb2F0LmlzYSAgICAgICAgIHgucVxuICAgICAgICByZXR1cm4gZmFsc2UgdW5sZXNzIG5vbmVtcHR5X3RleHQuaXNhIHgudVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgZm4gPSBuZmEgeyBpc2EsIHRlbXBsYXRlLCB9LCBxdWFudGl0eV9jcmVhdGUgPSAoIHEsIHUsIGNmZyApIC0+IGNmZ1xuICAgICAgQGVxICAgICAoIM6pbmZhdF8xMTMgPSAtPiAgZm4gMywgJ3MnICAgICAgICAgKSwgeyBxOiAzLCB1OiAncycsIH1cbiAgICAgIEB0aHJvd3MgKCDOqW5mYXRfMTE0ID0gLT4gIGZuIDMsICcnICAgICAgICAgICksIC92YWxpZGF0aW9uIGVycm9yOiBleHBlY3RlZCBhIHF1YW50aXR5X2NyZWF0ZV9jZmcvXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHRzID1cbiAgICAgICAgcXVhbnRpdHk6XG4gICAgICAgICAgdGVtcGxhdGU6IHsgcTogMCwgdTogJ3UnLCB9XG4gICAgICAgICAgaXNhOiAoIHggKSAtPlxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlIHVubGVzcyBnbmQucG9kLmlzYSAgICAgICB4XG4gICAgICAgICAgICByZXR1cm4gZmFsc2UgdW5sZXNzIGZsb2F0LmlzYSAgICAgICAgIHgucVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlIHVubGVzcyBub25lbXB0eV90ZXh0LmlzYSB4LnVcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICBmbiA9IG5mYSB0cy5xdWFudGl0eSwgcXVhbnRpdHlfY3JlYXRlID0gKCBxLCB1LCBjZmcgKSAtPiBjZmdcbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfMTE1ID0gLT4gIGZuIDMsICdzJyAgICAgICAgICAgICAgICAgICAgICksIHsgcTogMywgdTogJ3MnLCB9XG4gICAgICBAZXEgICAgICggzqluZmF0XzExNiA9IC0+ICBmbiAzLCAncycsIHsgcTogMCwgdTogJ3UnLCB9ICApLCB7IHE6IDMsIHU6ICdzJywgfVxuICAgICAgQHRocm93cyAoIM6pbmZhdF8xMTcgPSAtPiAgZm4gMywgJycgICAgICAgICAgICAgICAgICAgICAgKSwgL3ZhbGlkYXRpb24gZXJyb3I6IGV4cGVjdGVkIGEgcXVhbnRpdHlfY3JlYXRlX2NmZy9cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdW5rbm93bl9idWc6IC0+XG4gICAgIyBORkEgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG4gICAgTkZBID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuICAgIHsgbmZhXG4gICAgICBpbnRlcm5hbHMgfSA9IE5GQVxuICAgIHsgZ25kICAgICAgIH0gPSBpbnRlcm5hbHNcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIG9iamVjdF9wcm90b3R5cGUgICAgICAgICAgICA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB7fVxuICAgIHR5cGVzICAgICAgICAgICAgICAgICAgICAgICA9XG4gICAgICBwb2Q6ICAgICAgICAgICAgICAgICAgICAgIGlzYTogKCB4ICkgLT4geD8gYW5kICggT2JqZWN0LmdldFByb3RvdHlwZU9mIHggKSBpbiBbIG51bGwsIG9iamVjdF9wcm90b3R5cGUsIF1cbiAgICAgIHRleHQ6ICAgICAgICAgICAgICAgICAgICAgaXNhOiAoIHggKSAtPiAoIHR5cGVvZiB4ICkgaXMgJ3N0cmluZydcbiAgICAgIG5vbmVtcHR5X3RleHQ6ICAgICAgICAgICAgaXNhOiAoIHggKSAtPiAoIHR5cGVzLnRleHQuaXNhIHggKSBhbmQgKCB4Lmxlbmd0aCA+IDAgKVxuICAgICAgb3B0aW9uYWxfbm9uZW1wdHlfdGV4dDogICBpc2E6ICggeCApIC0+ICggbm90IHg/ICkgb3IgKCB0eXBlcy5ub25lbXB0eV90ZXh0LmlzYSB4IClcbiAgICB3YWxrX3JlcXVpcmVfc3RhdGVtZW50c19jZmcgPVxuICAgICAgdGVtcGxhdGU6ICAgeyBwYXRoOiBudWxsLCBzb3VyY2U6IG51bGwsIH1cbiAgICAgIGlzYTogICAgICAgICggeCApIC0+XG4gICAgICAgIHJldHVybiBmYWxzZSB1bmxlc3MgdHlwZXMucG9kLmlzYSB4XG4gICAgICAgIHJldHVybiBmYWxzZSB1bmxlc3MgdHlwZXMub3B0aW9uYWxfbm9uZW1wdHlfdGV4dC5pc2EgeC5wYXRoXG4gICAgICAgIHJldHVybiBmYWxzZSB1bmxlc3MgdHlwZXMub3B0aW9uYWxfbm9uZW1wdHlfdGV4dC5pc2EgeC5zb3VyY2VcbiAgICAgICAgcmV0dXJuIHRydWUgaWYgKCAgICAgeC5wYXRoPyApIGFuZCAoICAgICB4LnNvdXJjZT8gKVxuICAgICAgICByZXR1cm4gdHJ1ZSBpZiAoICAgICB4LnBhdGg/IClcbiAgICAgICAgcmV0dXJuIHRydWUgaWYgKCAgICAgeC5zb3VyY2U/IClcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGRvID0+XG4gICAgICB3cnMgPSB3YWxrX3JlcXVpcmVfc3RhdGVtZW50cyA9IG5mYSAoIHBhdGgsIGNmZyApIC0+IGNmZ1xuICAgICAgQGVxICggzqluZmF0XzExOCA9IC0+IHdycyAnbXlwYXRoJyAgICAgICAgICAgICAgICAgICAgICksIHsgcGF0aDogJ215cGF0aCcsIH1cbiAgICAgIEBlcSAoIM6pbmZhdF8xMTkgPSAtPiB3cnMgeyBzb3VyY2U6ICdteXNvdXJjZScsIH0gICAgICApLCB7IHNvdXJjZTogJ215c291cmNlJywgcGF0aDogdW5kZWZpbmVkIH1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICB3cnMgPSB3YWxrX3JlcXVpcmVfc3RhdGVtZW50cyA9IG5mYSAoIHBhdGgsIGNmZyApIC0+IHlpZWxkIGNmZ1xuICAgICAgQGVxICggzqluZmF0XzEyMCA9IC0+IFsgKCB3cnMgJ215cGF0aCcgICAgICAgICAgICAgICAgKS4uLiwgXSAgKSwgWyB7IHBhdGg6ICdteXBhdGgnLCB9LCBdXG4gICAgICBAZXEgKCDOqW5mYXRfMTIxID0gLT4gWyAoIHdycyB7IHNvdXJjZTogJ215c291cmNlJywgfSApLi4uLCBdICApLCBbIHsgc291cmNlOiAnbXlzb3VyY2UnLCBwYXRoOiB1bmRlZmluZWQgfSwgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHdycyA9IHdhbGtfcmVxdWlyZV9zdGF0ZW1lbnRzID0gbmZhICggcGF0aCwgY2ZnICkgLT4gYXdhaXQgY2ZnXG4gICAgICBAZXEgKCDOqW5mYXRfMTIyID0gLT4gYXdhaXQgd3JzICdteXBhdGgnICAgICAgICAgICAgICAgICAgICAgKSwgeyBwYXRoOiAnbXlwYXRoJywgfVxuICAgICAgQGVxICggzqluZmF0XzEyMyA9IC0+IGF3YWl0IHdycyB7IHNvdXJjZTogJ215c291cmNlJywgfSAgICAgICksIHsgc291cmNlOiAnbXlzb3VyY2UnLCBwYXRoOiB1bmRlZmluZWQgfVxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZG8gPT5cbiAgICAgIHdycyA9IHdhbGtfcmVxdWlyZV9zdGF0ZW1lbnRzID0gbmZhIHdhbGtfcmVxdWlyZV9zdGF0ZW1lbnRzX2NmZywgKCBwYXRoLCBjZmcgKSAtPiBjZmdcbiAgICAgIEBlcSAoIM6pbmZhdF8xMjQgPSAtPiB3cnMgJ215cGF0aCcgICAgICAgICAgICAgICAgICAgICApLCB7IHBhdGg6ICdteXBhdGgnLCBzb3VyY2U6IG51bGwgfVxuICAgICAgQGVxICggzqluZmF0XzEyNSA9IC0+IHdycyB7IHNvdXJjZTogJ215c291cmNlJywgfSAgICAgICksIHsgcGF0aDogbnVsbCwgc291cmNlOiAnbXlzb3VyY2UnIH1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICB3cnMgPSB3YWxrX3JlcXVpcmVfc3RhdGVtZW50cyA9IG5mYSB3YWxrX3JlcXVpcmVfc3RhdGVtZW50c19jZmcsICggcGF0aCwgY2ZnICkgLT4geWllbGQgY2ZnXG4gICAgICBAZXEgKCDOqW5mYXRfMTI2ID0gLT4gWyAoIHdycyAnbXlwYXRoJyAgICAgICAgICAgICAgICApLi4uLCBdICAgICApLCBbIHsgcGF0aDogJ215cGF0aCcsIHNvdXJjZTogbnVsbCB9LCBdXG4gICAgICBAZXEgKCDOqW5mYXRfMTI3ID0gLT4gWyAoIHdycyB7IHNvdXJjZTogJ215c291cmNlJywgfSApLi4uLCBdICAgICApLCBbIHsgcGF0aDogbnVsbCwgc291cmNlOiAnbXlzb3VyY2UnIH0sIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICB3cnMgPSB3YWxrX3JlcXVpcmVfc3RhdGVtZW50cyA9IG5mYSB3YWxrX3JlcXVpcmVfc3RhdGVtZW50c19jZmcsICggcGF0aCwgY2ZnICkgLT4gYXdhaXQgY2ZnXG4gICAgICBAZXEgKCDOqW5mYXRfMTI4ID0gLT4gYXdhaXQgd3JzICdteXBhdGgnICAgICAgICAgICAgICAgICAgICAgKSwgeyBwYXRoOiAnbXlwYXRoJywgc291cmNlOiBudWxsIH1cbiAgICAgIEBlcSAoIM6pbmZhdF8xMjkgPSAtPiBhd2FpdCB3cnMgeyBzb3VyY2U6ICdteXNvdXJjZScsIH0gICAgICApLCB7IHBhdGg6IG51bGwsIHNvdXJjZTogJ215c291cmNlJyB9XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogdHJ1ZSwgIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGF3YWl0ICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS5hc3luY190ZXN0IEBuZmFfdGFza3NcbiAgIyBhd2FpdCAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkuYXN5bmNfdGVzdCB7IHVua25vd25fYnVnOiBAbmZhX3Rhc2tzLnVua25vd25fYnVnIH1cblxuICAjIGYgPSAtPiBhd2FpdCA5OTRcbiAgIyBkZWJ1ZyAnzqluZmF0XzEzMCcsIGYoKVxuICAjIGRlYnVnICfOqW5mYXRfMTMxJywgYXdhaXQgZigpXG4gICMgZyA9IC0+IGYuY2FsbCBAXG4gICMgZGVidWcgJ86pbmZhdF8xMzInLCBnKClcbiAgIyBkZWJ1ZyAnzqluZmF0XzEzMycsIGF3YWl0IGcoKVxuXG5cbiJdfQ==
