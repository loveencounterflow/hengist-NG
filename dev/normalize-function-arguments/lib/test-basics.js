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
        var optional, Ωnfat__60, Ωnfat__61, Ωnfat__62, Ωnfat__63, Ωnfat__64, Ωnfat__65, Ωnfat__67, Ωnfat__68;
        optional = null;
        
      const empty_fn = function (

        cfg

        ) {};
      ;
        this.eq((Ωnfat__60 = function() {
          return get_signature(function(a, cfg) {});
        }), {
          names: ['a', 'cfg'],
          q_idx: 1,
          q_ridx: -1
        });
        this.throws((Ωnfat__61 = function() {
          return get_signature(function(a = optional, cfg) {});
        }), /not compliant/);
        this.throws((Ωnfat__62 = function() {
          return get_signature(function(a) {});
        }), /not compliant/);
        this.eq((Ωnfat__63 = function() {
          return get_signature(empty_fn);
        }), {
          names: ['cfg'],
          q_idx: 0,
          q_ridx: -1
        });
        this.eq((Ωnfat__64 = function() {
          return get_signature(function(cfg) {});
        }), {
          names: ['cfg'],
          q_idx: 0,
          q_ridx: -1
        });
        this.eq((Ωnfat__65 = function() {
          return get_signature(function(a, b, c, cfg) {});
        }), {
          names: ['a', 'b', 'c', 'cfg'],
          q_idx: 3,
          q_ridx: -1
        });
        // ### TAINT limitation of CoffeeScript: signature runs up to soak, trailing paramters handled inside function body ###
        // @eq     ( Ωnfat__66 = -> get_signature ( a, b..., c       ) ->  ), { a: 'bare', b: 'soak', }
        this.throws((Ωnfat__67 = function() {
          return get_signature(function(a, ...b) {
            var c, cfg, ref;
            ref = b, [...b] = ref, [c, cfg] = splice.call(b, -2);
          });
        }), /not compliant/);
        this.throws((Ωnfat__68 = function() {
          return get_signature(function(a, b = null, cfg) {});
        }), /not compliant/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var Ωnfat__69, Ωnfat__70;
        this.throws((Ωnfat__69 = function() {
          return get_signature(function(a, b, cfg, c, g) {});
        }), /not compliant/);
        this.eq((Ωnfat__70 = function() {
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
        var Ωnfat__71;
        return this.eq((Ωnfat__71 = function() {
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
        var mylist_1, mylist_2, mylist_31, mylist_32, t, Ωnfat__72, Ωnfat__73, Ωnfat__74, Ωnfat__75, Ωnfat__76, Ωnfat__77;
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
        this.eq((Ωnfat__72 = function() {
          return t;
        }), {
          mylist_1: [],
          mylist_2: [],
          mylist_3: []
        });
        this.eq((Ωnfat__73 = function() {
          return t.mylist_1 === mylist_1;
        }), true);
        this.eq((Ωnfat__74 = function() {
          return t.mylist_2 === mylist_2;
        }), true);
        this.eq((Ωnfat__75 = function() {
          return t.mylist_1 !== mylist_2;
        }), true);
        this.eq((Ωnfat__76 = function() {
          return t.mylist_31 !== mylist_32;
        }), true);
        mylist_1.push('A');
        mylist_2.push('B');
        mylist_31.push('C');
        this.eq((Ωnfat__77 = function() {
          return t;
        }), {
          mylist_1: ['A'],
          mylist_2: ['B'],
          mylist_3: []
        });
        return null;
      })();
      (() => {        //.......................................................................................................
        var cfg, t_1, t_2, Ωnfat__78, Ωnfat__79, Ωnfat__80, Ωnfat__81, Ωnfat__82;
        cfg = {
          name: {
            first: 'John',
            last: 'Doe'
          }
        };
        t_1 = new Template(cfg);
        t_2 = new Template(cfg);
        this.eq((Ωnfat__78 = function() {
          return t_1;
        }), {
          name: {
            first: 'John',
            last: 'Doe'
          }
        });
        this.eq((Ωnfat__79 = function() {
          return t_1.name !== cfg.name;
        }), true);
        this.eq((Ωnfat__80 = function() {
          return t_1;
        }), {
          name: {
            first: 'John',
            last: 'Doe'
          }
        });
        this.eq((Ωnfat__81 = function() {
          return t_2.name !== cfg.name;
        }), true);
        this.eq((Ωnfat__82 = function() {
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
        //   debug 'Ωnfat__83', internals.gnd.nfa_cfg
        //   debug 'Ωnfat__84', internals.gnd.nfa_cfg.template
        //   debug 'Ωnfat__85', fn 1, 2, 3, {}
        //   @eq     ( Ωnfat__86 = -> fn 1, 2, 3, {} ), { arc: 1, bo: 2, cy: 3, cfg: { arc: 1, bo: 2, cy: 3, sum: 6, }, sum: 6, }
        //   @eq     ( Ωnfat__87 = -> fn 1, 2, 3     ), { arc: 1, bo: 2, cy: 3, cfg: { arc: 1, bo: 2, cy: 3, sum: 6, }, sum: 6, }
        //   return null
        //.......................................................................................................
        var fn, template, Ωnfat__88, Ωnfat__89, Ωnfat__90, Ωnfat__91, Ωnfat__92;
        template = {
          arc: 10,
          bo: 11,
          cy: 12
        };
        fn = nfa({template}, function(arc, bo, cy, cfg) {
          return {arc, bo, cy, cfg};
        });
        this.eq((Ωnfat__88 = function() {
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
        this.eq((Ωnfat__89 = function() {
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
        this.eq((Ωnfat__90 = function() {
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
        this.eq((Ωnfat__91 = function() {
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
        this.eq((Ωnfat__92 = function() {
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
        var fn, template, Ωnfat__93, Ωnfat__94;
        template = {
          name: null
        };
        fn = nfa({template}, function(name, cfg) {
          return {name, cfg};
        });
        this.eq((Ωnfat__93 = function() {
          return fn();
        }), {
          name: null,
          cfg: {
            name: null
          }
        });
        this.eq((Ωnfat__94 = function() {
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
        var F, fn, template, Ωnfat_100, Ωnfat__95, Ωnfat__96, Ωnfat__97, Ωnfat__98, Ωnfat__99;
        template = {
          name: 'carl'
        };
        // F   = Symbol.for 'F'
        F = (function() {});
        fn = nfa({template}, function(name, cfg, f) {
          return {name, f, cfg};
        });
        this.eq((Ωnfat__95 = function() {
          return fn();
        }), {
          name: 'carl',
          f: void 0,
          cfg: {
            name: 'carl',
            f: void 0
          }
        });
        this.eq((Ωnfat__96 = function() {
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
        this.eq((Ωnfat__97 = function() {
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
        this.eq((Ωnfat__98 = function() {
          return fn('alice', {}, F);
        }), {
          name: 'alice',
          f: F,
          cfg: {
            name: 'alice',
            f: F
          }
        });
        this.eq((Ωnfat__99 = function() {
          return fn('alice', F);
        }), {
          name: 'alice',
          f: F,
          cfg: {
            name: 'alice',
            f: F
          }
        });
        this.eq((Ωnfat_100 = function() {
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
        var my_fn, Ωnfat_101, Ωnfat_102;
        my_fn = function(cfg) {};
        this.eq((Ωnfat_101 = function() {
          return my_fn.name;
        }), 'my_fn');
        this.eq((Ωnfat_102 = function() {
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
        var fn, isa, quantity_create, template, Ωnfat_103, Ωnfat_104;
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
        this.eq((Ωnfat_103 = function() {
          return fn(3, 's');
        }), {
          q: 3,
          u: 's'
        });
        this.throws((Ωnfat_104 = function() {
          return fn(3, '');
        }), /validation error: expected a quantity_create_cfg/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var fn, quantity_create, ts, Ωnfat_105, Ωnfat_106, Ωnfat_107;
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
        this.eq((Ωnfat_105 = function() {
          return fn(3, 's');
        }), {
          q: 3,
          u: 's'
        });
        this.eq((Ωnfat_106 = function() {
          return fn(3, 's', {
            q: 0,
            u: 'u'
          });
        }), {
          q: 3,
          u: 's'
        });
        this.throws((Ωnfat_107 = function() {
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
      guytest_cfg = {
        throw_on_error: false,
        show_passes: false,
        report_checks: false
      };
      return (new Test(guytest_cfg)).test(this.nfa_tasks);
    })();
  }

  // ( new Test guytest_cfg ).test { push_pop_set_at: @nfa_tasks.internals.push_pop_set_at }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBO0lBQUE7O0VBRUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQix1QkFBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLE9BSEYsRUFJRSxHQUpGLENBQUEsR0FJNEIsR0FBRyxDQUFDLEdBSmhDLEVBWkE7OztFQWtCQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixJQUE1Qjs7RUFDQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1Qjs7RUFDQSxDQUFBLENBQUUsR0FBRixFQUNFLElBREYsRUFFRSxJQUZGLEVBR0UsS0FIRixFQUlFLE9BSkYsQ0FBQSxHQUk0QixHQUFHLENBQUMsR0FKaEMsRUFyQkE7Ozs7O0VBZ0NBLElBQUMsQ0FBQSxTQUFELEdBR0UsQ0FBQTs7SUFBQSxTQUFBLEVBR0UsQ0FB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Q0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QixJQUFDLENBQUEsU0FBL0I7SUFIc0MsQ0FBQSxJQUF4Qzs7O0VBMVlBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc3RyaWN0J1xuXG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2ludGVydHlwZS90ZXN0LWJhc2ljcydcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxuIyBXR1VZICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy93ZWJndXknXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG57IHJlZFxuICBnb2xkXG4gIGJvbGRcbiAgd2hpdGVcbiAgcmV2ZXJzZSAgICAgICAgICAgICAgIH0gPSBHVVkudHJtXG5cblxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiNcbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQG5mYV90YXNrcyA9XG5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBpbnRlcm5hbHM6XG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHB1c2hfcG9wX3NldF9hdDogLT5cbiAgICAgIE5GQSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbiAgICAgIHsgcHVzaF9hdFxuICAgICAgICBwb3BfYXRcbiAgICAgICAgc2V0X2F0IH0gPSBORkEuaW50ZXJuYWxzXG4gICAgICBBID0gKCBwYXJ0cyApIC0+IEFycmF5LmZyb20gcGFydHMuam9pbiAnJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIEBlcSAgICAgKCDOqW5mYXRfX18xID0gLT4gcHVzaF9hdCAgQSdhYmNkJywgLTEsICdeJyAgICAgICAgICAgICAgICAgICAgKSwgQSdhYmNeZCdcbiAgICAgICAgQGVxICAgICAoIM6pbmZhdF9fXzIgPSAtPiBwdXNoX2F0ICBBJ2FiY2QnLCAtMiwgJ14nICAgICAgICAgICAgICAgICAgICApLCBBJ2FiXmNkJ1xuICAgICAgICBAZXEgICAgICggzqluZmF0X19fMyA9IC0+IHB1c2hfYXQgIEEnYWJjZCcsIC0zLCAnXicgICAgICAgICAgICAgICAgICAgICksIEEnYV5iY2QnXG4gICAgICAgIEBlcSAgICAgKCDOqW5mYXRfX180ID0gLT4gcHVzaF9hdCAgQScnLCAgICAgLTEsICdeJyAgICAgICAgICAgICAgICAgICAgKSwgQSdeJ1xuICAgICAgICBAZXEgICAgICggzqluZmF0X19fNSA9IC0+IHB1c2hfYXQgIEEnJywgICAgIC0yLCAnXicgICAgICAgICAgICAgICAgICAgICksIEEnXidcbiAgICAgICAgQGVxICAgICAoIM6pbmZhdF9fXzYgPSAtPiBwdXNoX2F0ICBBJycsICAgICAtMywgJ14nICAgICAgICAgICAgICAgICAgICApLCBBJ14nXG4gICAgICAgIEB0aHJvd3MgKCDOqW5mYXRfX183ID0gLT4gcHVzaF9hdCAgQScnLCAgICAgIDEsICc/JyAgICAgICAgICAgICAgICAgICAgKSwgL2V4cGVjdGVkIG5lZ2F0aXZlIG51bWJlci9cbiAgICAgICAgQHRocm93cyAoIM6pbmZhdF9fXzggPSAtPiBwdXNoX2F0ICBBJycsICAgICAgMCwgJz8nICAgICAgICAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgbmVnYXRpdmUgbnVtYmVyL1xuICAgICAgICBAZXEgICAgICggzqluZmF0X19fOSA9IC0+IFsgKCBzZXRfYXQgKCBkID0gQSdhYmNkJyApLCAtMSwgJ14nICksIGQsIF0gICksIFsgJ14nLCBBJ2FiY14nLCBdXG4gICAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzEwID0gLT4gWyAoIHNldF9hdCAoIGQgPSBBJ2FiY2QnICksIC0yLCAnXicgKSwgZCwgXSAgKSwgWyAnXicsIEEnYWJeZCcsIF1cbiAgICAgICAgQGVxICAgICAoIM6pbmZhdF9fMTEgPSAtPiBbICggc2V0X2F0ICggZCA9IEEnYWJjZCcgKSwgLTMsICdeJyApLCBkLCBdICApLCBbICdeJywgQSdhXmNkJywgXVxuICAgICAgICAjIEBlcSAgICAgKCDOqW5mYXRfXzEyID0gLT4gWyAoIHBvcF9hdCAoIGQgPSBBJ2FiY14nICksIC0xICksIGQsIF0gICAgICAgKSwgWyAnXicsIEEnYWJjJywgXVxuICAgICAgICAjIEBlcSAgICAgKCDOqW5mYXRfXzEzID0gLT4gWyAoIHBvcF9hdCAoIGQgPSBBJ2FiXmMnICksIC0yICksIGQsIF0gICAgICAgKSwgWyAnXicsIEEnYWJjJywgXVxuICAgICAgICAjIEBlcSAgICAgKCDOqW5mYXRfXzE0ID0gLT4gWyAoIHBvcF9hdCAoIGQgPSBBJ2FeYmMnICksIC0zICksIGQsIF0gICAgICAgKSwgWyAnXicsIEEnYWJjJywgXVxuICAgICAgICAjIEB0aHJvd3MgKCDOqW5mYXRfXzE1ID0gLT4gcG9wX2F0ICAgQScnLCAgICAgIDEgICAgICAgICAgICAgICAgICAgICAgICAgKSwgL2V4cGVjdGVkIG5lZ2F0aXZlIG51bWJlci9cbiAgICAgICAgIyBAdGhyb3dzICggzqluZmF0X18xNiA9IC0+IHBvcF9hdCAgIEEnJywgICAgICAwICAgICAgICAgICAgICAgICAgICAgICAgICksIC9leHBlY3RlZCBuZWdhdGl2ZSBudW1iZXIvXG4gICAgICAgICMgQHRocm93cyAoIM6pbmZhdF9fMTcgPSAtPiBwb3BfYXQgICBbXSwgLTEgICAgICAgICAgKSwgL2xpc3QgdG9vIHNob3J0L1xuICAgICAgICAjIEB0aHJvd3MgKCDOqW5mYXRfXzE4ID0gLT4gcG9wX2F0ICAgWyAxLCBdLCAtMiAgICAgICksIC9saXN0IHRvbyBzaG9ydC9cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgZG8gPT5cbiAgICAgICMgICBkID0gQSdhYmNkZWYnXG4gICAgICAjICAgQGVxICAgICAoIM6pbmZhdF9fMTkgPSAtPiBwdXNoX2F0ICBbICAgICAgICAgICBdLCAtMSwgJ2cnICksIFsgJ2cnLCBdXG4gICAgICAjICAgQGVxICAgICAoIM6pbmZhdF9fMjAgPSAtPiBwdXNoX2F0ICBbICdiJywgICAgICBdLCAtMSwgJ2EnICksIFsgJ2EnLCAnYicsIF1cbiAgICAgICMgICBAZXEgICAgICggzqluZmF0X18yMSA9IC0+IHB1c2hfYXQgIFsgJ2EnLCAnYycsIF0sIC0xLCAnYicgKSwgWyAnYScsICdiJywgJ2MnLCBdXG4gICAgICAjICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgYmFzaWNzOiAtPlxuICAgIE5GQSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbiAgICB7IG5mYVxuICAgICAgZ2V0X3NpZ25hdHVyZSB9ID0gTkZBXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZm4gPSBuZmEgKCBhLCBiLCBjLCBjZmcgKSAtPiB7IGEsIGIsIGMsIGNmZywgfVxuICAgICAgZnJ6ID0gT2JqZWN0LmZyZWV6ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgICAgICggzqluZmF0X18yMiA9IC0+IGZuKCkgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB7IGE6IHVuZGVmaW5lZCwgYjogdW5kZWZpbmVkLCBjOiB1bmRlZmluZWQsIGNmZzoge2E6IHVuZGVmaW5lZCwgYjogdW5kZWZpbmVkLCBjOiB1bmRlZmluZWQsIH0gfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fMjMgPSAtPiBmbiAxICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgeyBhOiAxLCAgICAgICAgIGI6IHVuZGVmaW5lZCwgYzogdW5kZWZpbmVkLCBjZmc6IHsgYTogMSwgICAgICAgIGI6IHVuZGVmaW5lZCwgYzogdW5kZWZpbmVkLCB9IH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzI0ID0gLT4gZm4gMSwgMiAgICAgICAgICAgICAgICAgICAgICAgICksIHsgYTogMSwgICAgICAgICBiOiAyLCAgICAgICAgIGM6IHVuZGVmaW5lZCwgY2ZnOiB7IGE6IDEsICAgICAgICBiOiAyLCAgICAgICAgIGM6IHVuZGVmaW5lZCwgIH0gfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fMjUgPSAtPiBmbiAxLCAyLCAzICAgICAgICAgICAgICAgICAgICAgKSwgeyBhOiAxLCAgICAgICAgIGI6IDIsICAgICAgICAgYzogMywgICAgICAgICBjZmc6IHsgYTogMSwgICAgICAgIGI6IDIsICAgICAgICAgYzogMyB9IH1cbiAgICAgIEB0aHJvd3MgKCDOqW5mYXRfXzI2ID0gLT4gZm4gMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICksIC9leHBlY3RlZCBhbiBvcHRpb25hbCBQT0QgYXQgcG9zaXRpb24gLTEvXG4gICAgICBAZXEgICAgICggzqluZmF0X18yNyA9IC0+IGZuICAgICAgICAgICAgICAgICB7fSAgICAgICAgICApLCB7IGE6IHVuZGVmaW5lZCwgYjogdW5kZWZpbmVkLCBjOiB1bmRlZmluZWQsIGNmZzogeyBhOiB1bmRlZmluZWQsIGI6IHVuZGVmaW5lZCwgYzogdW5kZWZpbmVkLCB9IH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzI4ID0gLT4gZm4gMSwgICAgICAgICAgICAgIHt9ICAgICAgICAgICksIHsgYTogMSwgICAgICAgICBiOiB1bmRlZmluZWQsIGM6IHVuZGVmaW5lZCwgY2ZnOiB7IGE6IDEsICAgICAgICAgYjogdW5kZWZpbmVkLCBjOiB1bmRlZmluZWQsIH0gfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fMjkgPSAtPiBmbiAxLCAyLCAgICAgICAgICAge30gICAgICAgICAgKSwgeyBhOiAxLCAgICAgICAgIGI6IDIsICAgICAgICAgYzogdW5kZWZpbmVkLCBjZmc6IHsgYTogMSwgICAgICAgICBiOiAyLCAgICAgICAgIGM6IHVuZGVmaW5lZCwgfSB9XG4gICAgICBAZXEgICAgICggzqluZmF0X18zMCA9IC0+IGZuIDEsIDIsIDMsICAgICAgICB7fSAgICAgICAgICApLCB7IGE6IDEsICAgICAgICAgYjogMiwgICAgICAgICBjOiAzLCAgICAgICAgIGNmZzogeyBhOiAxLCAgICAgICAgIGI6IDIsICAgICAgICAgYzogMywgICAgICAgICB9IH1cbiAgICAgIEB0aHJvd3MgKCDOqW5mYXRfXzMxID0gLT4gZm4gMSwgMiwgMywgNCwgICAgIHt9ICAgICAgICAgICksIC9leHBlY3RlZCB1cCB0byA0IGFyZ3VtZW50cywgZ290IDUvXG4gICAgICBAZXEgICAgICggzqluZmF0X18zMiA9IC0+IGZuICAgICAgICAgICAgICAgICB7IGI6IDg4LCB9ICApLCB7IGE6IHVuZGVmaW5lZCwgYjogODgsICAgICAgICBjOiB1bmRlZmluZWQsIGNmZzogeyBhOiB1bmRlZmluZWQsIGI6IDg4LCAgICAgICAgYzogdW5kZWZpbmVkLCB9IH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzMzID0gLT4gZm4gMSwgICAgICAgICAgICAgIHsgYjogODgsIH0gICksIHsgYTogMSwgICAgICAgICBiOiA4OCwgICAgICAgIGM6IHVuZGVmaW5lZCwgY2ZnOiB7IGE6IDEsICAgICAgICAgYjogODgsICAgICAgICBjOiB1bmRlZmluZWQsIH0gfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fMzQgPSAtPiBmbiAxLCAyLCAgICAgICAgICAgeyBiOiA4OCwgfSAgKSwgeyBhOiAxLCAgICAgICAgIGI6IDIsICAgICAgICAgYzogdW5kZWZpbmVkLCBjZmc6IHsgYTogMSwgICAgICAgICBiOiAyLCAgICAgICAgIGM6IHVuZGVmaW5lZCwgfSB9XG4gICAgICBAZXEgICAgICggzqluZmF0X18zNSA9IC0+IGZuIDEsIDIsIDMsICAgICAgICB7IGI6IDg4LCB9ICApLCB7IGE6IDEsICAgICAgICAgYjogMiwgICAgICAgICBjOiAzLCAgICAgICAgIGNmZzogeyBhOiAxLCAgICAgICAgIGI6IDIsICAgICAgICAgYzogMywgICAgICAgICB9IH1cbiAgICAgIEB0aHJvd3MgKCDOqW5mYXRfXzM2ID0gLT4gZm4gMSwgMiwgMywgNCwgICAgIHsgYjogODgsIH0gICksIC9leHBlY3RlZCB1cCB0byA0IGFyZ3VtZW50cywgZ290IDUvXG4gICAgICBAZXEgICAgICggzqluZmF0X18zNyA9IC0+IGZuICAgICAgICAgICAgIGZyeiB7IGI6IDg4LCB9ICApLCB7IGE6IHVuZGVmaW5lZCwgYjogODgsICAgICAgICBjOiB1bmRlZmluZWQsIGNmZzogeyBhOiB1bmRlZmluZWQsIGI6IDg4LCAgICAgICAgYzogdW5kZWZpbmVkLCB9IH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzM4ID0gLT4gZm4gMSwgICAgICAgICAgZnJ6IHsgYjogODgsIH0gICksIHsgYTogMSwgICAgICAgICBiOiA4OCwgICAgICAgIGM6IHVuZGVmaW5lZCwgY2ZnOiB7IGE6IDEsICAgICAgICAgYjogODgsICAgICAgICBjOiB1bmRlZmluZWQsIH0gfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fMzkgPSAtPiBmbiAxLCAyLCAgICAgICBmcnogeyBiOiA4OCwgfSAgKSwgeyBhOiAxLCAgICAgICAgIGI6IDIsICAgICAgICAgYzogdW5kZWZpbmVkLCBjZmc6IHsgYTogMSwgICAgICAgICBiOiAyLCAgICAgICAgIGM6IHVuZGVmaW5lZCwgfSB9XG4gICAgICBAZXEgICAgICggzqluZmF0X180MCA9IC0+IGZuIDEsIDIsIDMsICAgIGZyeiB7IGI6IDg4LCB9ICApLCB7IGE6IDEsICAgICAgICAgYjogMiwgICAgICAgICBjOiAzLCAgICAgICAgIGNmZzogeyBhOiAxLCAgICAgICAgIGI6IDIsICAgICAgICAgYzogMywgICAgICAgICB9IH1cbiAgICAgIEB0aHJvd3MgKCDOqW5mYXRfXzQxID0gLT4gZm4gMSwgMiwgMywgNCwgZnJ6IHsgYjogODgsIH0gICksIC9leHBlY3RlZCB1cCB0byA0IGFyZ3VtZW50cywgZ290IDUvXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZm4gPSBuZmEgKCBjZmcgKSAtPiB7IGNmZywgfVxuICAgICAgZnJ6ID0gT2JqZWN0LmZyZWV6ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgICAgICggzqluZmF0X180MiA9IC0+IGZuKCkgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB7IGNmZzoge30gfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fNDMgPSAtPiBmbiAgICAgICAgICAgICAgICAge30gICAgICAgICAgKSwgeyBjZmc6IHt9IH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzQ0ID0gLT4gZm4gICAgICAgICAgICAgICAgIHsgYjogODgsIH0gICksIHsgY2ZnOiB7IGI6IDg4LCB9IH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzQ1ID0gLT4gZm4gICAgICAgICAgICAgZnJ6IHsgYjogODgsIH0gICksIHsgY2ZnOiB7IGI6IDg4LCB9IH1cbiAgICAgIEB0aHJvd3MgKCDOqW5mYXRfXzQ2ID0gLT4gZm4gMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICksIC9leHBlY3RlZCB1cCB0byAxIGFyZ3VtZW50cywgZ290IDQvXG4gICAgICBAdGhyb3dzICggzqluZmF0X180NyA9IC0+IGZuIDEsIDIsIDMsIDQsICAgICB7fSAgICAgICAgICApLCAvZXhwZWN0ZWQgdXAgdG8gMSBhcmd1bWVudHMsIGdvdCA1L1xuICAgICAgQHRocm93cyAoIM6pbmZhdF9fNDggPSAtPiBmbiAxLCAyLCAzLCA0LCAgICAgeyBiOiA4OCwgfSAgKSwgL2V4cGVjdGVkIHVwIHRvIDEgYXJndW1lbnRzLCBnb3QgNS9cbiAgICAgIEB0aHJvd3MgKCDOqW5mYXRfXzQ5ID0gLT4gZm4gMSwgMiwgMywgNCwgZnJ6IHsgYjogODgsIH0gICksIC9leHBlY3RlZCB1cCB0byAxIGFyZ3VtZW50cywgZ290IDUvXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgQHRocm93cyAoIM6pbmZhdF9fNTAgPSAtPiBuZmEgKCkgLT4ge30gKSwgL25vdCBjb21wbGlhbnQvXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIG5hbWVzX2luX2NmZ19hcmVfY3JlYXRlZDogLT5cbiAgICBORkEgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG4gICAgeyBuZmEgfSA9IE5GQVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGZuID0gbmZhICggZmlyc3RfbmFtZSwgbGFzdF9uYW1lLCBjZmcgKSAtPiBjZmdcbiAgICAgIGZyeiA9IE9iamVjdC5mcmVlemVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fNTEgPSAtPiBmbigpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgeyBmaXJzdF9uYW1lOiB1bmRlZmluZWQsIGxhc3RfbmFtZTogdW5kZWZpbmVkLCAgIH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzUyID0gLT4gZm4gJ0FsaWNlJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHsgZmlyc3RfbmFtZTogJ0FsaWNlJywgICBsYXN0X25hbWU6IHVuZGVmaW5lZCwgICB9XG4gICAgICBAZXEgICAgICggzqluZmF0X181MyA9IC0+IGZuICdBbGljZScsICdNY01pbGxhbicgICAgICAgICAgICAgICAgICAgICApLCB7IGZpcnN0X25hbWU6ICdBbGljZScsICAgbGFzdF9uYW1lOiAnTWNNaWxsYW4nLCAgfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fNTQgPSAtPiBmbiAgICAgICAgICAgICAgICAgICAgICB7fSAgICAgICAgICAgICAgICAgKSwgeyBmaXJzdF9uYW1lOiB1bmRlZmluZWQsIGxhc3RfbmFtZTogdW5kZWZpbmVkLCAgIH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzU1ID0gLT4gZm4gJ0FsaWNlJywgICAgICAgICAgICAge30gICAgICAgICAgICAgICAgICksIHsgZmlyc3RfbmFtZTogJ0FsaWNlJywgICBsYXN0X25hbWU6IHVuZGVmaW5lZCwgICB9XG4gICAgICBAZXEgICAgICggzqluZmF0X181NiA9IC0+IGZuICdBbGljZScsICdNY01pbGxhbicsIHt9ICAgICAgICAgICAgICAgICApLCB7IGZpcnN0X25hbWU6ICdBbGljZScsICAgbGFzdF9uYW1lOiAnTWNNaWxsYW4nLCAgfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fNTcgPSAtPiBmbiAgICAgICAgICAgICAgICAgICAgICB7IGNpdHk6ICdTZW91bCcsIH0gKSwgeyBmaXJzdF9uYW1lOiB1bmRlZmluZWQsIGxhc3RfbmFtZTogdW5kZWZpbmVkLCAgY2l0eTogJ1Nlb3VsJywgfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fNTggPSAtPiBmbiAnQWxpY2UnLCAgICAgICAgICAgICB7IGNpdHk6ICdTZW91bCcsIH0gKSwgeyBmaXJzdF9uYW1lOiAnQWxpY2UnLCAgIGxhc3RfbmFtZTogdW5kZWZpbmVkLCAgY2l0eTogJ1Nlb3VsJywgfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fNTkgPSAtPiBmbiAnQWxpY2UnLCAnTWNNaWxsYW4nLCB7IGNpdHk6ICdTZW91bCcsIH0gKSwgeyBmaXJzdF9uYW1lOiAnQWxpY2UnLCAgIGxhc3RfbmFtZTogJ01jTWlsbGFuJywgY2l0eTogJ1Nlb3VsJywgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9zaWduYXR1cmU6IC0+XG4gICAgTkZBID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuICAgIHsgbmZhXG4gICAgICBnZXRfc2lnbmF0dXJlIH0gPSBORkFcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBvcHRpb25hbCA9IG51bGxcbiAgICAgIGBgYFxuICAgICAgY29uc3QgZW1wdHlfZm4gPSBmdW5jdGlvbiAoXG5cbiAgICAgICAgY2ZnXG5cbiAgICAgICAgKSB7fTtcbiAgICAgIGBgYFxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fNjAgPSAtPiBnZXRfc2lnbmF0dXJlICggYSwgY2ZnICAgICAgICAgICAgICkgLT4gICksIHsgbmFtZXM6IFsgJ2EnLCAnY2ZnJyBdLCBxX2lkeDogMSwgcV9yaWR4OiAtMSwgfVxuICAgICAgQHRocm93cyAoIM6pbmZhdF9fNjEgPSAtPiBnZXRfc2lnbmF0dXJlICggYSA9IG9wdGlvbmFsLCBjZmcgICkgLT4gICksIC9ub3QgY29tcGxpYW50L1xuICAgICAgQHRocm93cyAoIM6pbmZhdF9fNjIgPSAtPiBnZXRfc2lnbmF0dXJlICggYSAgICAgICAgICAgICAgICAgICkgLT4gICksIC9ub3QgY29tcGxpYW50L1xuICAgICAgQGVxICAgICAoIM6pbmZhdF9fNjMgPSAtPiBnZXRfc2lnbmF0dXJlIGVtcHR5X2ZuICAgICAgICAgICAgICAgICAgICksIHsgbmFtZXM6IFsgJ2NmZycgXSwgcV9pZHg6IDAsIHFfcmlkeDogLTEsIH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzY0ID0gLT4gZ2V0X3NpZ25hdHVyZSAoIGNmZyApICAgICAgICAgICAgICAgIC0+ICApLCB7IG5hbWVzOiBbICdjZmcnIF0sIHFfaWR4OiAwLCBxX3JpZHg6IC0xLCB9XG4gICAgICBAZXEgICAgICggzqluZmF0X182NSA9IC0+IGdldF9zaWduYXR1cmUgKCBhLCBiLCBjLCBjZmcgICAgICAgKSAtPiAgKSwgeyBuYW1lczogWyAnYScsICdiJywgJ2MnLCAnY2ZnJyBdLCBxX2lkeDogMywgcV9yaWR4OiAtMSwgfVxuICAgICAgIyAjIyMgVEFJTlQgbGltaXRhdGlvbiBvZiBDb2ZmZWVTY3JpcHQ6IHNpZ25hdHVyZSBydW5zIHVwIHRvIHNvYWssIHRyYWlsaW5nIHBhcmFtdGVycyBoYW5kbGVkIGluc2lkZSBmdW5jdGlvbiBib2R5ICMjI1xuICAgICAgIyBAZXEgICAgICggzqluZmF0X182NiA9IC0+IGdldF9zaWduYXR1cmUgKCBhLCBiLi4uLCBjICAgICAgICkgLT4gICksIHsgYTogJ2JhcmUnLCBiOiAnc29haycsIH1cbiAgICAgIEB0aHJvd3MgKCDOqW5mYXRfXzY3ID0gLT4gZ2V0X3NpZ25hdHVyZSAoIGEsIGIuLi4sIGMsIGNmZyAgICApIC0+ICApLCAvbm90IGNvbXBsaWFudC9cbiAgICAgIEB0aHJvd3MgKCDOqW5mYXRfXzY4ID0gLT4gZ2V0X3NpZ25hdHVyZSAoIGEsIGIgPSBudWxsLCBjZmcgICApIC0+ICApLCAvbm90IGNvbXBsaWFudC9cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgQHRocm93cyAoIM6pbmZhdF9fNjkgPSAtPiBnZXRfc2lnbmF0dXJlICggYSwgYiwgY2ZnLCBjLCAgICAgIGcgKSAtPiAgKSwgL25vdCBjb21wbGlhbnQvXG4gICAgICBAZXEgICAgICggzqluZmF0X183MCA9IC0+IGdldF9zaWduYXR1cmUgKCBhLCBiLCAgICAgIGMsIGNmZywgZyApIC0+ICApLCB7IG5hbWVzOiBbICdhJywgJ2InLCAnYycsICdjZmcnLCAnZycsIF0sIHFfaWR4OiAzLCBxX3JpZHg6IC0yLCB9XG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHRlbXBsYXRlX2NsYXNzOiAtPlxuICAgIE5GQSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbiAgICB7IFRlbXBsYXRlIH0gPSBORkFcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBAZXEgICAgICggzqluZmF0X183MSA9IC0+IG5ldyBUZW1wbGF0ZSB7IGFyYzogMTAsIGJvOiAxMSwgY3k6IDEyLCBkaW46IDEzOyBlcHM6IDE0LCBmb286IDE1LCB9ICksIHsgYXJjOiAxMCwgYm86IDExLCBjeTogMTIsIGRpbjogMTM7IGVwczogMTQsIGZvbzogMTUsIH1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBteWxpc3RfMSAgICAgID0gW11cbiAgICAgIG15bGlzdF8yICAgICAgPSBbXVxuICAgICAgdCA9IG5ldyBUZW1wbGF0ZVxuICAgICAgICBteWxpc3RfMTogICAgIG15bGlzdF8xXG4gICAgICAgIG15bGlzdF8yOiAgICAgLT4gbXlsaXN0XzJcbiAgICAgICAgbXlsaXN0XzM6ICAgICAtPiBbXVxuICAgICAgbXlsaXN0XzMxID0gdC5teWxpc3RfM1xuICAgICAgbXlsaXN0XzMyID0gdC5teWxpc3RfM1xuICAgICAgQGVxICAgICAoIM6pbmZhdF9fNzIgPSAtPiB0ICksIHsgbXlsaXN0XzE6IFtdLCBteWxpc3RfMjogW10sIG15bGlzdF8zOiBbXSwgfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fNzMgPSAtPiB0Lm15bGlzdF8xICAgaXMgICAgbXlsaXN0XzEgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzc0ID0gLT4gdC5teWxpc3RfMiAgIGlzICAgIG15bGlzdF8yICApLCB0cnVlXG4gICAgICBAZXEgICAgICggzqluZmF0X183NSA9IC0+IHQubXlsaXN0XzEgICBpc250ICBteWxpc3RfMiAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fNzYgPSAtPiB0Lm15bGlzdF8zMSAgaXNudCAgbXlsaXN0XzMyICksIHRydWVcbiAgICAgIG15bGlzdF8xLnB1c2ggJ0EnXG4gICAgICBteWxpc3RfMi5wdXNoICdCJ1xuICAgICAgbXlsaXN0XzMxLnB1c2ggJ0MnXG4gICAgICBAZXEgICAgICggzqluZmF0X183NyA9IC0+IHQgKSwgeyBteWxpc3RfMTogWyAnQScsIF0sIG15bGlzdF8yOiBbICdCJywgXSwgbXlsaXN0XzM6IFtdLCB9XG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGNmZyA9XG4gICAgICAgIG5hbWU6XG4gICAgICAgICAgZmlyc3Q6ICAgICdKb2huJ1xuICAgICAgICAgIGxhc3Q6ICAgICAnRG9lJ1xuICAgICAgdF8xID0gbmV3IFRlbXBsYXRlIGNmZ1xuICAgICAgdF8yID0gbmV3IFRlbXBsYXRlIGNmZ1xuICAgICAgQGVxICAgICAoIM6pbmZhdF9fNzggPSAtPiB0XzEgICAgICAgICAgICAgICAgICAgICAgICApLCB7IG5hbWU6IHsgZmlyc3Q6ICdKb2huJywgbGFzdDogJ0RvZScsIH0sIH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzc5ID0gLT4gdF8xLm5hbWUgaXNudCBjZmcubmFtZSAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fODAgPSAtPiB0XzEgICAgICAgICAgICAgICAgICAgICAgICApLCB7IG5hbWU6IHsgZmlyc3Q6ICdKb2huJywgbGFzdDogJ0RvZScsIH0sIH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzgxID0gLT4gdF8yLm5hbWUgaXNudCBjZmcubmFtZSAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fODIgPSAtPiB0XzEubmFtZSBpc250IHRfMi5uYW1lICAgICApLCB0cnVlXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHRlbXBsYXRlX3NldHRpbmc6IC0+XG4gICAgTkZBID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuICAgIHsgbmZhXG4gICAgICBpbnRlcm5hbHMgfSA9IE5GQVxuICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjICMjIyBOT1RFIGZvciBsYXRlcjogcHJlc2VydmUgbWFuYWdlZCBwcm9wZXJ0aWVzPyAjIyNcbiAgICAjIGRvID0+XG4gICAgIyAgIHRlbXBsYXRlID1cbiAgICAjICAgICBhcmM6ICAgICAgMTBcbiAgICAjICAgICBibzogICAgICAgMTFcbiAgICAjICAgICBjeTogICAgICAgMTJcbiAgICAjICAgICBzdW06ICAgICAgLT4gQGFyYyArIEBibyArIEBjeVxuICAgICMgICBmbiA9IG5mYSB7IHRlbXBsYXRlLCB9LCAoIGFyYywgYm8sIGN5LCBjZmcgKSAtPiB7IGFyYywgYm8sIGN5LCBjZmcsIHN1bTogY2ZnLnN1bSwgfVxuICAgICMgICAjIGZuID0gbmZhICggYXJjLCBibywgY3ksIGNmZyApIC0+IHsgYXJjLCBibywgY3ksIGNmZywgc3VtOiBjZmcuc3VtLCB9XG4gICAgIyAgIGRlYnVnICfOqW5mYXRfXzgzJywgaW50ZXJuYWxzLmduZC5uZmFfY2ZnXG4gICAgIyAgIGRlYnVnICfOqW5mYXRfXzg0JywgaW50ZXJuYWxzLmduZC5uZmFfY2ZnLnRlbXBsYXRlXG4gICAgIyAgIGRlYnVnICfOqW5mYXRfXzg1JywgZm4gMSwgMiwgMywge31cbiAgICAjICAgQGVxICAgICAoIM6pbmZhdF9fODYgPSAtPiBmbiAxLCAyLCAzLCB7fSApLCB7IGFyYzogMSwgYm86IDIsIGN5OiAzLCBjZmc6IHsgYXJjOiAxLCBibzogMiwgY3k6IDMsIHN1bTogNiwgfSwgc3VtOiA2LCB9XG4gICAgIyAgIEBlcSAgICAgKCDOqW5mYXRfXzg3ID0gLT4gZm4gMSwgMiwgMyAgICAgKSwgeyBhcmM6IDEsIGJvOiAyLCBjeTogMywgY2ZnOiB7IGFyYzogMSwgYm86IDIsIGN5OiAzLCBzdW06IDYsIH0sIHN1bTogNiwgfVxuICAgICMgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHRlbXBsYXRlID1cbiAgICAgICAgYXJjOiAgICAgIDEwXG4gICAgICAgIGJvOiAgICAgICAxMVxuICAgICAgICBjeTogICAgICAgMTJcbiAgICAgIGZuID0gbmZhIHsgdGVtcGxhdGUsIH0sICggYXJjLCBibywgY3ksIGNmZyApIC0+IHsgYXJjLCBibywgY3ksIGNmZywgfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fODggPSAtPiBmbiAyMCwgMjEsIDIyLCB7fSApLCB7IGFyYzogMjAsIGJvOiAyMSwgY3k6IDIyLCBjZmc6IHsgYXJjOiAyMCwgYm86IDIxLCBjeTogMjIsIH0sIH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzg5ID0gLT4gZm4oKSAgICAgICAgICAgICAgKSwgeyBhcmM6IDEwLCBibzogMTEsIGN5OiAxMiwgY2ZnOiB7IGFyYzogMTAsIGJvOiAxMSwgY3k6IDEyLCB9LCB9XG4gICAgICBAZXEgICAgICggzqluZmF0X185MCA9IC0+IGZuIDIwICAgICAgICAgICAgICksIHsgYXJjOiAyMCwgYm86IDExLCBjeTogMTIsIGNmZzogeyBhcmM6IDIwLCBibzogMTEsIGN5OiAxMiwgfSwgfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fOTEgPSAtPiBmbiAyMCwgMjEgICAgICAgICApLCB7IGFyYzogMjAsIGJvOiAyMSwgY3k6IDEyLCBjZmc6IHsgYXJjOiAyMCwgYm86IDIxLCBjeTogMTIsIH0sIH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzkyID0gLT4gZm4gMjAsIDIxLCAyMiAgICAgKSwgeyBhcmM6IDIwLCBibzogMjEsIGN5OiAyMiwgY2ZnOiB7IGFyYzogMjAsIGJvOiAyMSwgY3k6IDIyLCB9LCB9XG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNmZ19pbl9wZW51bHRpbWF0ZV9wb3NpdGlvbjogLT5cbiAgICBORkEgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG4gICAgeyBuZmFcbiAgICAgIGludGVybmFscyB9ID0gTkZBXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgdGVtcGxhdGUgPVxuICAgICAgICBuYW1lOiAgICAgbnVsbFxuICAgICAgZm4gPSBuZmEgeyB0ZW1wbGF0ZSwgfSwgKCBuYW1lLCBjZmcgKSAtPiB7IG5hbWUsIGNmZywgfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fOTMgPSAtPiBmbigpICAgICAgICAgICAgICAgICAgICAgICAgICksIHsgbmFtZTogbnVsbCwgICAgICBjZmc6IHsgbmFtZTogbnVsbCAgICB9IH1cbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfXzk0ID0gLT4gZm4gJ2FsaWNlJywgeyBuYW1lOiAnYm9iJywgfSApLCB7IG5hbWU6ICdhbGljZScsICAgY2ZnOiB7IG5hbWU6ICdhbGljZScgfSB9XG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHRlbXBsYXRlID1cbiAgICAgICAgbmFtZTogICAgICdjYXJsJ1xuICAgICAgIyBGICAgPSBTeW1ib2wuZm9yICdGJ1xuICAgICAgRiAgID0gKCAtPiApXG4gICAgICBmbiAgPSBuZmEgeyB0ZW1wbGF0ZSwgfSwgKCBuYW1lLCBjZmcsIGYgKSAtPiB7IG5hbWUsIGYsIGNmZywgfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fOTUgPSAtPiBmbigpICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB7IG5hbWU6ICdjYXJsJywgIGY6IHVuZGVmaW5lZCwgY2ZnOiB7IG5hbWU6ICdjYXJsJywgIGY6IHVuZGVmaW5lZCwgfSwgfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fOTYgPSAtPiBmbiAgICAgICAgICB7IG5hbWU6ICdib2InLCB9LCAgRiApLCB7IG5hbWU6ICdib2InLCAgIGY6IEYsICAgICAgICAgY2ZnOiB7IG5hbWU6ICdib2InLCAgIGY6IEYsICAgICAgICAgfSwgfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fOTcgPSAtPiBmbiAnYWxpY2UnLCB7IG5hbWU6ICdib2InLCB9LCAgRiApLCB7IG5hbWU6ICdhbGljZScsIGY6IEYsICAgICAgICAgY2ZnOiB7IG5hbWU6ICdhbGljZScsIGY6IEYsICAgICAgICAgfSwgfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fOTggPSAtPiBmbiAnYWxpY2UnLCB7ICAgICAgICAgICAgICB9LCAgRiApLCB7IG5hbWU6ICdhbGljZScsIGY6IEYsICAgICAgICAgY2ZnOiB7IG5hbWU6ICdhbGljZScsIGY6IEYsICAgICAgICAgfSwgfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF9fOTkgPSAtPiBmbiAnYWxpY2UnLCAgICAgICAgICAgICAgICAgICAgRiApLCB7IG5hbWU6ICdhbGljZScsIGY6IEYsICAgICAgICAgY2ZnOiB7IG5hbWU6ICdhbGljZScsIGY6IEYsICAgICAgICAgfSwgfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF8xMDAgPSAtPiBmbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRiApLCB7IG5hbWU6ICdjYXJsJywgIGY6IEYsICAgICAgICAgY2ZnOiB7IG5hbWU6ICdjYXJsJywgIGY6IEYsICAgICAgICAgfSwgfVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBmdW5jdGlvbl9uYW1pbmc6IC0+XG4gICAgTkZBID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuICAgIHsgbmZhXG4gICAgICBpbnRlcm5hbHMgfSA9IE5GQVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIG15X2ZuID0gKCBjZmcgKSAtPlxuICAgICAgQGVxICAgICAoIM6pbmZhdF8xMDEgPSAtPiAgICAgICBteV9mbi5uYW1lICAgKSwgJ215X2ZuJ1xuICAgICAgQGVxICAgICAoIM6pbmZhdF8xMDIgPSAtPiAoIG5mYSBteV9mbiApLm5hbWUgKSwgJ215X2ZuJ1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1c2VfaXNhX3NldHRpbmc6IC0+XG4gICAgTkZBID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuICAgIHsgbmZhXG4gICAgICBpbnRlcm5hbHMgfSA9IE5GQVxuICAgIHsgZ25kICAgICAgIH0gPSBpbnRlcm5hbHNcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGZsb2F0ICAgICAgICAgICA9IGlzYTogKCB4ICkgLT4gTnVtYmVyLmlzRmluaXRlIHhcbiAgICB0ZXh0ICAgICAgICAgICAgPSBpc2E6ICggeCApIC0+ICggdHlwZW9mIHggKSBpcyAnc3RyaW5nJ1xuICAgIG5vbmVtcHR5X3RleHQgICA9IGlzYTogKCB4ICkgLT4gKCB0ZXh0LmlzYSB4ICkgYW5kIHgubGVuZ3RoID4gMFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHRlbXBsYXRlICA9IHsgcTogMCwgdTogJ3UnLCB9XG4gICAgICBpc2EgICAgICAgPSAoIHggKSAtPlxuICAgICAgICByZXR1cm4gZmFsc2UgdW5sZXNzIGduZC5wb2QuaXNhICAgICAgIHhcbiAgICAgICAgcmV0dXJuIGZhbHNlIHVubGVzcyBmbG9hdC5pc2EgICAgICAgICB4LnFcbiAgICAgICAgcmV0dXJuIGZhbHNlIHVubGVzcyBub25lbXB0eV90ZXh0LmlzYSB4LnVcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIGZuID0gbmZhIHsgaXNhLCB0ZW1wbGF0ZSwgfSwgcXVhbnRpdHlfY3JlYXRlID0gKCBxLCB1LCBjZmcgKSAtPiBjZmdcbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfMTAzID0gLT4gIGZuIDMsICdzJyAgICAgICAgICksIHsgcTogMywgdTogJ3MnLCB9XG4gICAgICBAdGhyb3dzICggzqluZmF0XzEwNCA9IC0+ICBmbiAzLCAnJyAgICAgICAgICApLCAvdmFsaWRhdGlvbiBlcnJvcjogZXhwZWN0ZWQgYSBxdWFudGl0eV9jcmVhdGVfY2ZnL1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICB0cyA9XG4gICAgICAgIHF1YW50aXR5OlxuICAgICAgICAgIHRlbXBsYXRlOiB7IHE6IDAsIHU6ICd1JywgfVxuICAgICAgICAgIGlzYTogKCB4ICkgLT5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZSB1bmxlc3MgZ25kLnBvZC5pc2EgICAgICAgeFxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlIHVubGVzcyBmbG9hdC5pc2EgICAgICAgICB4LnFcbiAgICAgICAgICAgIHJldHVybiBmYWxzZSB1bmxlc3Mgbm9uZW1wdHlfdGV4dC5pc2EgeC51XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgZm4gPSBuZmEgdHMucXVhbnRpdHksIHF1YW50aXR5X2NyZWF0ZSA9ICggcSwgdSwgY2ZnICkgLT4gY2ZnXG4gICAgICBAZXEgICAgICggzqluZmF0XzEwNSA9IC0+ICBmbiAzLCAncycgICAgICAgICAgICAgICAgICAgICApLCB7IHE6IDMsIHU6ICdzJywgfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF8xMDYgPSAtPiAgZm4gMywgJ3MnLCB7IHE6IDAsIHU6ICd1JywgfSAgKSwgeyBxOiAzLCB1OiAncycsIH1cbiAgICAgIEB0aHJvd3MgKCDOqW5mYXRfMTA3ID0gLT4gIGZuIDMsICcnICAgICAgICAgICAgICAgICAgICAgICksIC92YWxpZGF0aW9uIGVycm9yOiBleHBlY3RlZCBhIHF1YW50aXR5X2NyZWF0ZV9jZmcvXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHVzZV9pc2Ffc2V0dGluZ19zZm1vZHVsZTogLT5cbiAgICAjIE5GQSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbiAgICBORkEgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMvZGlzdC9tYWluLmpzJ1xuICAgIHsgbmZhXG4gICAgICBpbnRlcm5hbHMgfSA9IE5GQVxuICAgIHsgZ25kICAgICAgIH0gPSBpbnRlcm5hbHNcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGZsb2F0ICAgICAgICAgICA9IGlzYTogKCB4ICkgLT4gTnVtYmVyLmlzRmluaXRlIHhcbiAgICB0ZXh0ICAgICAgICAgICAgPSBpc2E6ICggeCApIC0+ICggdHlwZW9mIHggKSBpcyAnc3RyaW5nJ1xuICAgIG5vbmVtcHR5X3RleHQgICA9IGlzYTogKCB4ICkgLT4gKCB0ZXh0LmlzYSB4ICkgYW5kIHgubGVuZ3RoID4gMFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHRlbXBsYXRlICA9IHsgcTogMCwgdTogJ3UnLCB9XG4gICAgICBpc2EgICAgICAgPSAoIHggKSAtPlxuICAgICAgICByZXR1cm4gZmFsc2UgdW5sZXNzIGduZC5wb2QuaXNhICAgICAgIHhcbiAgICAgICAgcmV0dXJuIGZhbHNlIHVubGVzcyBmbG9hdC5pc2EgICAgICAgICB4LnFcbiAgICAgICAgcmV0dXJuIGZhbHNlIHVubGVzcyBub25lbXB0eV90ZXh0LmlzYSB4LnVcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIGZuID0gbmZhIHsgaXNhLCB0ZW1wbGF0ZSwgfSwgcXVhbnRpdHlfY3JlYXRlID0gKCBxLCB1LCBjZmcgKSAtPiBjZmdcbiAgICAgIEBlcSAgICAgKCDOqW5mYXRfMTA4ID0gLT4gIGZuIDMsICdzJyAgICAgICAgICksIHsgcTogMywgdTogJ3MnLCB9XG4gICAgICBAdGhyb3dzICggzqluZmF0XzEwOSA9IC0+ICBmbiAzLCAnJyAgICAgICAgICApLCAvdmFsaWRhdGlvbiBlcnJvcjogZXhwZWN0ZWQgYSBxdWFudGl0eV9jcmVhdGVfY2ZnL1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICB0cyA9XG4gICAgICAgIHF1YW50aXR5OlxuICAgICAgICAgIHRlbXBsYXRlOiB7IHE6IDAsIHU6ICd1JywgfVxuICAgICAgICAgIGlzYTogKCB4ICkgLT5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZSB1bmxlc3MgZ25kLnBvZC5pc2EgICAgICAgeFxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlIHVubGVzcyBmbG9hdC5pc2EgICAgICAgICB4LnFcbiAgICAgICAgICAgIHJldHVybiBmYWxzZSB1bmxlc3Mgbm9uZW1wdHlfdGV4dC5pc2EgeC51XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgZm4gPSBuZmEgdHMucXVhbnRpdHksIHF1YW50aXR5X2NyZWF0ZSA9ICggcSwgdSwgY2ZnICkgLT4gY2ZnXG4gICAgICBAZXEgICAgICggzqluZmF0XzExMCA9IC0+ICBmbiAzLCAncycgICAgICAgICAgICAgICAgICAgICApLCB7IHE6IDMsIHU6ICdzJywgfVxuICAgICAgQGVxICAgICAoIM6pbmZhdF8xMTEgPSAtPiAgZm4gMywgJ3MnLCB7IHE6IDAsIHU6ICd1JywgfSAgKSwgeyBxOiAzLCB1OiAncycsIH1cbiAgICAgIEB0aHJvd3MgKCDOqW5mYXRfMTEyID0gLT4gIGZuIDMsICcnICAgICAgICAgICAgICAgICAgICAgICksIC92YWxpZGF0aW9uIGVycm9yOiBleHBlY3RlZCBhIHF1YW50aXR5X2NyZWF0ZV9jZmcvXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IHRydWUsICByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCBAbmZhX3Rhc2tzXG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBwdXNoX3BvcF9zZXRfYXQ6IEBuZmFfdGFza3MuaW50ZXJuYWxzLnB1c2hfcG9wX3NldF9hdCB9XG5cblxuXG4iXX0=
