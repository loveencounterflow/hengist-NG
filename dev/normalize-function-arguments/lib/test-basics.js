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
      (() => {        //.......................................................................................................
        var Ωnfat__50;
        this.throws((Ωnfat__50 = function() {
          return nfa(function() {
            return {};
          });
        }), /not compliant/);
        return null;
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
        var fn, frz, Ωnfat__51, Ωnfat__52, Ωnfat__53, Ωnfat__54, Ωnfat__55, Ωnfat__56, Ωnfat__57, Ωnfat__58, Ωnfat__59;
        fn = nfa(function(first_name, last_name, cfg) {
          return cfg;
        });
        frz = Object.freeze;
        //.....................................................................................................
        this.eq((Ωnfat__51 = function() {
          return fn();
        }), {
          first_name: void 0,
          last_name: void 0
        });
        this.eq((Ωnfat__52 = function() {
          return fn('Alice');
        }), {
          first_name: 'Alice',
          last_name: void 0
        });
        this.eq((Ωnfat__53 = function() {
          return fn('Alice', 'McMillan');
        }), {
          first_name: 'Alice',
          last_name: 'McMillan'
        });
        this.eq((Ωnfat__54 = function() {
          return fn({});
        }), {
          first_name: void 0,
          last_name: void 0
        });
        this.eq((Ωnfat__55 = function() {
          return fn('Alice', {});
        }), {
          first_name: 'Alice',
          last_name: void 0
        });
        this.eq((Ωnfat__56 = function() {
          return fn('Alice', 'McMillan', {});
        }), {
          first_name: 'Alice',
          last_name: 'McMillan'
        });
        this.eq((Ωnfat__57 = function() {
          return fn({
            city: 'Seoul'
          });
        }), {
          first_name: void 0,
          last_name: void 0,
          city: 'Seoul'
        });
        this.eq((Ωnfat__58 = function() {
          return fn('Alice', {
            city: 'Seoul'
          });
        }), {
          first_name: 'Alice',
          last_name: void 0,
          city: 'Seoul'
        });
        this.eq((Ωnfat__59 = function() {
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
        var optional, Ωnfat__69, Ωnfat__70, Ωnfat__71, Ωnfat__72, Ωnfat__73, Ωnfat__74, Ωnfat__76, Ωnfat__77;
        optional = null;
        
      const empty_fn = function (

        cfg

        ) {};
      ;
        this.eq((Ωnfat__69 = function() {
          return get_signature(function(a, cfg) {});
        }), {
          names: ['a', 'cfg'],
          q_idx: 1,
          q_ridx: -1
        });
        this.throws((Ωnfat__70 = function() {
          return get_signature(function(a = optional, cfg) {});
        }), /not compliant/);
        this.throws((Ωnfat__71 = function() {
          return get_signature(function(a) {});
        }), /not compliant/);
        this.eq((Ωnfat__72 = function() {
          return get_signature(empty_fn);
        }), {
          names: ['cfg'],
          q_idx: 0,
          q_ridx: -1
        });
        this.eq((Ωnfat__73 = function() {
          return get_signature(function(cfg) {});
        }), {
          names: ['cfg'],
          q_idx: 0,
          q_ridx: -1
        });
        this.eq((Ωnfat__74 = function() {
          return get_signature(function(a, b, c, cfg) {});
        }), {
          names: ['a', 'b', 'c', 'cfg'],
          q_idx: 3,
          q_ridx: -1
        });
        // ### TAINT limitation of CoffeeScript: signature runs up to soak, trailing paramters handled inside function body ###
        // @eq     ( Ωnfat__75 = -> get_signature ( a, b..., c       ) ->  ), { a: 'bare', b: 'soak', }
        this.throws((Ωnfat__76 = function() {
          return get_signature(function(a, ...b) {
            var c, cfg, ref;
            ref = b, [...b] = ref, [c, cfg] = splice.call(b, -2);
          });
        }), /not compliant/);
        this.throws((Ωnfat__77 = function() {
          return get_signature(function(a, b = null, cfg) {});
        }), /not compliant/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var Ωnfat__78, Ωnfat__79;
        this.throws((Ωnfat__78 = function() {
          return get_signature(function(a, b, cfg, c, g) {});
        }), /not compliant/);
        this.eq((Ωnfat__79 = function() {
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
        var Ωnfat__80;
        return this.eq((Ωnfat__80 = function() {
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
        var mylist_1, mylist_2, mylist_31, mylist_32, t, Ωnfat__81, Ωnfat__82, Ωnfat__83, Ωnfat__84, Ωnfat__85, Ωnfat__86;
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
        this.eq((Ωnfat__81 = function() {
          return t;
        }), {
          mylist_1: [],
          mylist_2: [],
          mylist_3: []
        });
        this.eq((Ωnfat__82 = function() {
          return t.mylist_1 === mylist_1;
        }), true);
        this.eq((Ωnfat__83 = function() {
          return t.mylist_2 === mylist_2;
        }), true);
        this.eq((Ωnfat__84 = function() {
          return t.mylist_1 !== mylist_2;
        }), true);
        this.eq((Ωnfat__85 = function() {
          return t.mylist_31 !== mylist_32;
        }), true);
        mylist_1.push('A');
        mylist_2.push('B');
        mylist_31.push('C');
        this.eq((Ωnfat__86 = function() {
          return t;
        }), {
          mylist_1: ['A'],
          mylist_2: ['B'],
          mylist_3: []
        });
        return null;
      })();
      (() => {        //.......................................................................................................
        var cfg, t_1, t_2, Ωnfat__87, Ωnfat__88, Ωnfat__89, Ωnfat__90, Ωnfat__91;
        cfg = {
          name: {
            first: 'John',
            last: 'Doe'
          }
        };
        t_1 = new Template(cfg);
        t_2 = new Template(cfg);
        this.eq((Ωnfat__87 = function() {
          return t_1;
        }), {
          name: {
            first: 'John',
            last: 'Doe'
          }
        });
        this.eq((Ωnfat__88 = function() {
          return t_1.name !== cfg.name;
        }), true);
        this.eq((Ωnfat__89 = function() {
          return t_1;
        }), {
          name: {
            first: 'John',
            last: 'Doe'
          }
        });
        this.eq((Ωnfat__90 = function() {
          return t_2.name !== cfg.name;
        }), true);
        this.eq((Ωnfat__91 = function() {
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
        //   debug 'Ωnfat__92', internals.gnd.nfa_cfg
        //   debug 'Ωnfat__93', internals.gnd.nfa_cfg.template
        //   debug 'Ωnfat__94', fn 1, 2, 3, {}
        //   @eq     ( Ωnfat__95 = -> fn 1, 2, 3, {} ), { arc: 1, bo: 2, cy: 3, cfg: { arc: 1, bo: 2, cy: 3, sum: 6, }, sum: 6, }
        //   @eq     ( Ωnfat__96 = -> fn 1, 2, 3     ), { arc: 1, bo: 2, cy: 3, cfg: { arc: 1, bo: 2, cy: 3, sum: 6, }, sum: 6, }
        //   return null
        //.......................................................................................................
        var fn, template, Ωnfat_100, Ωnfat_101, Ωnfat__97, Ωnfat__98, Ωnfat__99;
        template = {
          arc: 10,
          bo: 11,
          cy: 12
        };
        fn = nfa({template}, function(arc, bo, cy, cfg) {
          return {arc, bo, cy, cfg};
        });
        this.eq((Ωnfat__97 = function() {
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
        this.eq((Ωnfat__98 = function() {
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
        this.eq((Ωnfat__99 = function() {
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
        this.eq((Ωnfat_100 = function() {
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
        this.eq((Ωnfat_101 = function() {
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
        var fn, template, Ωnfat_102, Ωnfat_103;
        template = {
          name: null
        };
        fn = nfa({template}, function(name, cfg) {
          return {name, cfg};
        });
        this.eq((Ωnfat_102 = function() {
          return fn();
        }), {
          name: null,
          cfg: {
            name: null
          }
        });
        this.eq((Ωnfat_103 = function() {
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
        var F, fn, template, Ωnfat_104, Ωnfat_105, Ωnfat_106, Ωnfat_107;
        template = {
          name: 'carl'
        };
        F = Symbol.for('F');
        fn = nfa({template}, function(name, cfg, f) {
          return {name, f, cfg};
        });
        this.eq((Ωnfat_104 = function() {
          return fn();
        }), {
          name: 'carl',
          f: void 0,
          cfg: {
            name: 'carl',
            f: void 0
          }
        });
        this.eq((Ωnfat_105 = function() {
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
        this.eq((Ωnfat_106 = function() {
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
        this.eq((Ωnfat_107 = function() {
          return fn({}, F);
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
        var my_fn, Ωnfat_108, Ωnfat_109;
        my_fn = function(cfg) {};
        this.eq((Ωnfat_108 = function() {
          return my_fn.name;
        }), 'my_fn');
        this.eq((Ωnfat_109 = function() {
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
        var fn, isa, quantity_create, template, Ωnfat_110, Ωnfat_111;
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
        this.eq((Ωnfat_110 = function() {
          return fn(3, 's');
        }), {
          q: 3,
          u: 's'
        });
        this.throws((Ωnfat_111 = function() {
          return fn(3, '');
        }), /validation error: expected a quantity_create_cfg/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var fn, quantity_create, ts, Ωnfat_112, Ωnfat_113, Ωnfat_114;
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
        this.eq((Ωnfat_112 = function() {
          return fn(3, 's');
        }), {
          q: 3,
          u: 's'
        });
        this.eq((Ωnfat_113 = function() {
          return fn(3, 's', {
            q: 0,
            u: 'u'
          });
        }), {
          q: 3,
          u: 's'
        });
        this.throws((Ωnfat_114 = function() {
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
        throw_on_error: true,
        show_passes: true,
        report_checks: false
      };
      // guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
      return (new Test(guytest_cfg)).test(this.nfa_tasks);
    })();
  }

  // ( new Test guytest_cfg ).test { push_pop_set_at: @nfa_tasks.internals.push_pop_set_at }

}).call(this);

//# sourceMappingURL=test-basics.js.map