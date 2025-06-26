(async function() {
  'use strict';
  var GTNG, GUY, Test, alert, debug, echo, f, help, info, inspect, log, plain, praise, red, reverse, rpr, urge, warn, whisper,
    splice = [].splice;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('intertype/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  ({f} = require('../../../apps/effstring'));

  ({red, reverse} = GUY.trm);

  //###########################################################################################################

  //===========================================================================================================
  this.nfa_tasks = {
    //=========================================================================================================
    basics: function() {
      var NFA, get_signature, nfa;
      NFA = require('../../../apps/normalize-function-arguments');
      ({nfa, get_signature} = NFA);
      (() => {        //.......................................................................................................
        var fn, frz, Ωnfat__10, Ωnfat__11, Ωnfat__12, Ωnfat__13, Ωnfat__14, Ωnfat__15, Ωnfat__16, Ωnfat__17, Ωnfat__18, Ωnfat__19, Ωnfat__20, Ωnfat___1, Ωnfat___2, Ωnfat___3, Ωnfat___4, Ωnfat___5, Ωnfat___6, Ωnfat___7, Ωnfat___8, Ωnfat___9;
        fn = nfa(function(a, b, c, cfg) {
          return {a, b, c, cfg};
        });
        frz = Object.freeze;
        //.....................................................................................................
        this.eq((Ωnfat___1 = function() {
          return fn();
        }), {
          a: void 0,
          b: void 0,
          c: void 0,
          cfg: {}
        });
        this.eq((Ωnfat___2 = function() {
          return fn(1);
        }), {
          a: 1,
          b: void 0,
          c: void 0,
          cfg: {
            a: 1
          }
        });
        this.eq((Ωnfat___3 = function() {
          return fn(1, 2);
        }), {
          a: 1,
          b: 2,
          c: void 0,
          cfg: {
            a: 1,
            b: 2
          }
        });
        this.eq((Ωnfat___4 = function() {
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
        this.throws((Ωnfat___5 = function() {
          return fn(1, 2, 3, 4);
        }), /expected up to 3 positional arguments, got 4/);
        this.eq((Ωnfat___6 = function() {
          return fn({});
        }), {
          a: void 0,
          b: void 0,
          c: void 0,
          cfg: {}
        });
        this.eq((Ωnfat___7 = function() {
          return fn(1, {});
        }), {
          a: 1,
          b: void 0,
          c: void 0,
          cfg: {
            a: 1
          }
        });
        this.eq((Ωnfat___8 = function() {
          return fn(1, 2, {});
        }), {
          a: 1,
          b: 2,
          c: void 0,
          cfg: {
            a: 1,
            b: 2
          }
        });
        this.eq((Ωnfat___9 = function() {
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
        this.throws((Ωnfat__10 = function() {
          return fn(1, 2, 3, 4, {});
        }), /expected up to 3 positional arguments, got 4/);
        this.eq((Ωnfat__11 = function() {
          return fn({
            b: 88
          });
        }), {
          a: void 0,
          b: 88,
          c: void 0,
          cfg: {
            b: 88
          }
        });
        this.eq((Ωnfat__12 = function() {
          return fn(1, {
            b: 88
          });
        }), {
          a: 1,
          b: 88,
          c: void 0,
          cfg: {
            b: 88,
            a: 1
          }
        });
        this.eq((Ωnfat__13 = function() {
          return fn(1, 2, {
            b: 88
          });
        }), {
          a: 1,
          b: 2,
          c: void 0,
          cfg: {
            b: 2,
            a: 1
          }
        });
        this.eq((Ωnfat__14 = function() {
          return fn(1, 2, 3, {
            b: 88
          });
        }), {
          a: 1,
          b: 2,
          c: 3,
          cfg: {
            b: 2,
            a: 1,
            c: 3
          }
        });
        this.throws((Ωnfat__15 = function() {
          return fn(1, 2, 3, 4, {
            b: 88
          });
        }), /expected up to 3 positional arguments, got 4/);
        this.eq((Ωnfat__16 = function() {
          return fn(frz({
            b: 88
          }));
        }), {
          a: void 0,
          b: 88,
          c: void 0,
          cfg: {
            b: 88
          }
        });
        this.eq((Ωnfat__17 = function() {
          return fn(1, frz({
            b: 88
          }));
        }), {
          a: 1,
          b: 88,
          c: void 0,
          cfg: {
            b: 88,
            a: 1
          }
        });
        this.eq((Ωnfat__18 = function() {
          return fn(1, 2, frz({
            b: 88
          }));
        }), {
          a: 1,
          b: 2,
          c: void 0,
          cfg: {
            b: 2,
            a: 1
          }
        });
        this.eq((Ωnfat__19 = function() {
          return fn(1, 2, 3, frz({
            b: 88
          }));
        }), {
          a: 1,
          b: 2,
          c: 3,
          cfg: {
            b: 2,
            a: 1,
            c: 3
          }
        });
        this.throws((Ωnfat__20 = function() {
          return fn(1, 2, 3, 4, frz({
            b: 88
          }));
        }), /expected up to 3 positional arguments, got 4/);
        //.....................................................................................................
        return null;
      })();
      (() => {        //.......................................................................................................
        var fn, frz, Ωnfat__21, Ωnfat__22, Ωnfat__23, Ωnfat__24, Ωnfat__25, Ωnfat__26, Ωnfat__27, Ωnfat__28;
        fn = nfa(function(cfg) {
          return {cfg};
        });
        frz = Object.freeze;
        //.....................................................................................................
        this.eq((Ωnfat__21 = function() {
          return fn();
        }), {
          cfg: {}
        });
        this.throws((Ωnfat__22 = function() {
          return fn(1, 2, 3, 4);
        }), /expected up to 0 positional arguments, got 4/);
        this.eq((Ωnfat__23 = function() {
          return fn({});
        }), {
          cfg: {}
        });
        this.throws((Ωnfat__24 = function() {
          return fn(1, 2, 3, 4, {});
        }), /expected up to 0 positional arguments, got 4/);
        this.eq((Ωnfat__25 = function() {
          return fn({
            b: 88
          });
        }), {
          cfg: {
            b: 88
          }
        });
        this.throws((Ωnfat__26 = function() {
          return fn(1, 2, 3, 4, {
            b: 88
          });
        }), /expected up to 0 positional arguments, got 4/);
        this.eq((Ωnfat__27 = function() {
          return fn(frz({
            b: 88
          }));
        }), {
          cfg: {
            b: 88
          }
        });
        this.throws((Ωnfat__28 = function() {
          return fn(1, 2, 3, 4, frz({
            b: 88
          }));
        }), /expected up to 0 positional arguments, got 4/);
        //.....................................................................................................
        return null;
      })();
      (() => {        //.......................................................................................................
        var Ωnfat__29;
        this.throws((Ωnfat__29 = function() {
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
    get_signature: function() {
      var NFA, get_signature, nfa;
      NFA = require('../../../apps/normalize-function-arguments');
      ({nfa, get_signature} = NFA);
      (() => {        //.......................................................................................................
        var optional, Ωnfat__30, Ωnfat__31, Ωnfat__32, Ωnfat__33, Ωnfat__34, Ωnfat__35, Ωnfat__37, Ωnfat__38;
        optional = null;
        
      const empty_fn = function (

        cfg

        ) {};
      ;
        this.eq((Ωnfat__30 = function() {
          return get_signature(function(a, cfg) {});
        }), {
          a: 'bare',
          cfg: 'bare'
        });
        this.throws((Ωnfat__31 = function() {
          return get_signature(function(a = optional, cfg) {});
        }), /not compliant/);
        this.throws((Ωnfat__32 = function() {
          return get_signature(function(a) {});
        }), /not compliant/);
        this.eq((Ωnfat__33 = function() {
          return get_signature(empty_fn);
        }), {
          cfg: 'bare'
        });
        this.eq((Ωnfat__34 = function() {
          return get_signature(function(cfg) {});
        }), {
          cfg: 'bare'
        });
        this.eq((Ωnfat__35 = function() {
          return get_signature(function(a, b, c, cfg) {});
        }), {
          a: 'bare',
          b: 'bare',
          c: 'bare',
          cfg: 'bare'
        });
        // ### TAINT limitation of CoffeeScript: signature runs up to soak, trailing paramters handled inside function body ###
        // @eq     ( Ωnfat__36 = -> get_signature ( a, b..., c       ) ->  ), { a: 'bare', b: 'soak', }
        this.throws((Ωnfat__37 = function() {
          return get_signature(function(a, ...b) {
            var c, cfg, ref;
            ref = b, [...b] = ref, [c, cfg] = splice.call(b, -2);
          });
        }), /not compliant/);
        return this.throws((Ωnfat__38 = function() {
          return get_signature(function(a, b = null, cfg) {});
        }), /not compliant/);
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
        var Ωnfat__40;
        return this.eq((Ωnfat__40 = function() {
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
        var mylist_1, mylist_2, mylist_31, mylist_32, t, Ωnfat__42, Ωnfat__43, Ωnfat__44, Ωnfat__45, Ωnfat__46, Ωnfat__47;
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
        this.eq((Ωnfat__42 = function() {
          return t;
        }), {
          mylist_1: [],
          mylist_2: [],
          mylist_3: []
        });
        this.eq((Ωnfat__43 = function() {
          return t.mylist_1 === mylist_1;
        }), true);
        this.eq((Ωnfat__44 = function() {
          return t.mylist_2 === mylist_2;
        }), true);
        this.eq((Ωnfat__45 = function() {
          return t.mylist_1 !== mylist_2;
        }), true);
        this.eq((Ωnfat__46 = function() {
          return t.mylist_31 !== mylist_32;
        }), true);
        mylist_1.push('A');
        mylist_2.push('B');
        mylist_31.push('C');
        this.eq((Ωnfat__47 = function() {
          return t;
        }), {
          mylist_1: ['A'],
          mylist_2: ['B'],
          mylist_3: []
        });
        return null;
      })();
      (() => {        //.......................................................................................................
        var cfg, t_1, t_2, Ωnfat__49, Ωnfat__50, Ωnfat__51, Ωnfat__52, Ωnfat__53;
        cfg = {
          name: {
            first: 'John',
            last: 'Doe'
          }
        };
        t_1 = new Template(cfg);
        t_2 = new Template(cfg);
        this.eq((Ωnfat__49 = function() {
          return t_1;
        }), {
          name: {
            first: 'John',
            last: 'Doe'
          }
        });
        this.eq((Ωnfat__50 = function() {
          return t_1.name !== cfg.name;
        }), true);
        this.eq((Ωnfat__51 = function() {
          return t_1;
        }), {
          name: {
            first: 'John',
            last: 'Doe'
          }
        });
        this.eq((Ωnfat__52 = function() {
          return t_2.name !== cfg.name;
        }), true);
        this.eq((Ωnfat__53 = function() {
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
        //   debug 'Ωnfat__54', internals.gnd.nfa_cfg
        //   debug 'Ωnfat__55', internals.gnd.nfa_cfg.template
        //   debug 'Ωnfat__56', fn 1, 2, 3, {}
        //   @eq     ( Ωnfat__57 = -> fn 1, 2, 3, {} ), { arc: 1, bo: 2, cy: 3, cfg: { arc: 1, bo: 2, cy: 3, sum: 6, }, sum: 6, }
        //   @eq     ( Ωnfat__58 = -> fn 1, 2, 3     ), { arc: 1, bo: 2, cy: 3, cfg: { arc: 1, bo: 2, cy: 3, sum: 6, }, sum: 6, }
        //   return null
        //.......................................................................................................
        var fn, template, Ωnfat__60, Ωnfat__61, Ωnfat__62, Ωnfat__63, Ωnfat__64;
        template = {
          arc: 10,
          bo: 11,
          cy: 12
        };
        fn = nfa({template}, function(arc, bo, cy, cfg) {
          return {arc, bo, cy, cfg};
        });
        this.eq((Ωnfat__60 = function() {
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
        this.eq((Ωnfat__61 = function() {
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
        this.eq((Ωnfat__62 = function() {
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
        this.eq((Ωnfat__63 = function() {
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
        this.eq((Ωnfat__64 = function() {
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
        show_passes: false,
        report_checks: false
      };
      return (new Test(guytest_cfg)).test(this.nfa_tasks);
    })();
  }

  // ( new Test guytest_cfg ).test @nfa_tasks.builtins

}).call(this);

//# sourceMappingURL=test-basics.js.map