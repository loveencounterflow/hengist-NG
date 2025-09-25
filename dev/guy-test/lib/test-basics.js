(async function() {
  //===========================================================================================================
  'use strict';
  var GTNG, GUY, SFMODULES, Test, _TMP_test, after, alert, debug, echo, help, info, inspect, log, plain, praise, reverse, rpr, type_of, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('intertype/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  ({after} = GUY.async);

  //-----------------------------------------------------------------------------------------------------------
  GTNG = require('../../../apps/guy-test-NG');

  ({_TMP_test, Test} = GTNG);

  // equals
  // pass
  // fail
  // test
  // eq
  // throws
  // async_test
  // async_eq
  // async_throws          } = GTNG
  //-----------------------------------------------------------------------------------------------------------
  SFMODULES = require('../../../apps/bricabrac-sfmodules');

  ({type_of} = SFMODULES.unstable.require_type_of());

  // types                     = require '../../../apps/intertype'
  // { $type_of: type_of, }    = types
  // isa
  // type_of
  // $isa

  //===========================================================================================================
  this.TT = {
    //=========================================================================================================
    Interface: {
      //-------------------------------------------------------------------------------------------------------
      module_instance_and_assumptions_have_equals_method: function() {
        var Ω___1, Ω___2, Ω___3;
        this.eq((Ω___1 = function() {
          return type_of(GTNG.equals);
        }), 'function');
        this.eq((Ω___2 = function() {
          return type_of((new Test()).equals);
        }), 'function');
        this.eq((Ω___3 = function() {
          return type_of(this.equals);
        }), 'function');
        return null;
      }
    },
    // #-------------------------------------------------------------------------------------------------------
    // can_use_names_to_select_tests_and_checks:
    //   #.....................................................................................................
    //   fff_1: ->
    //     mytest = new Test()
    //     tasks =
    //       t1: ->
    //         @eq ( mytest_check_1 = -> @equals 1, 1 ), true
    //         @eq ( mytest_check_2 = -> @equals 2, 2 ), true
    //         @eq ( mytest_check_3 = -> @equals 3, 3 ), true
    //     mytest.test tasks
    //     @eq ( Ω___4 = -> mytest.stats[ 't1.mytest_check_1' ].passes ), 1
    //     @eq ( Ω___5 = -> mytest.stats[ 't1.mytest_check_2' ].passes ), 1
    //     @eq ( Ω___6 = -> mytest.stats[ 't1.mytest_check_3' ].passes ), 1
    //     return null
    //   #.....................................................................................................
    //   fff_2: ->
    //     mytest = new Test()
    //     tasks =
    //       t1: ->
    //         @eq ( mytest_check_1 = -> @equals 1, 1 ), true
    //         @eq ( mytest_check_2 = -> @equals 2, 2 ), true
    //         @eq ( mytest_check_3 = -> @equals 3, 3 ), true
    //     mytest.add tasks
    //     mytest.select '*.mytest_check_2'
    //     mytest.deselect '*.mytest_check_2'
    //     mytest.test()
    //     @eq ( Ω___7 = -> mytest.stats[ 't1.mytest_check_1' ].passes ), undefined
    //     @eq ( Ω___8 = -> mytest.stats[ 't1.mytest_check_2' ].passes ), 1
    //     @eq ( Ω___9 = -> mytest.stats[ 't1.mytest_check_3' ].passes ), undefined
    //     return null

    //=========================================================================================================
    Equality: {
      //-------------------------------------------------------------------------------------------------------
      basics: function() {
        var Ω__10, Ω__11, Ω__12, Ω__13, Ω__14, Ω__15, Ω__16;
        this.eq((Ω__10 = function() {
          return this.equals(1.23456, 1.23456);
        }), true);
        this.eq((Ω__11 = function() {
          return this.equals(1.23456000000000000001, 1.23456000000000000002);
        }), true);
        this.eq((Ω__12 = function() {
          return this.equals(1.23456, 1.23457);
        }), false);
        this.eq((Ω__13 = function() {
          return this.equals('1.23456', '1.23457');
        }), false);
        this.eq((Ω__14 = function() {
          return this.equals('1.23457', '1.23457');
        }), true);
        this.eq((Ω__15 = function() {
          return this.equals({}, {});
        }), true);
        this.eq((Ω__16 = function() {
          return this.equals({
            lst: [7, 8, 9]
          }, {
            lst: [7, 8, 9]
          });
        }), true);
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      eq_works_correctly_with_zero: function() {
        (() => {
          var qwcwz_1, qwcwz_10, qwcwz_11, qwcwz_12, qwcwz_13, qwcwz_14, qwcwz_2, qwcwz_3, qwcwz_4, qwcwz_5, qwcwz_6, qwcwz_7, qwcwz_8, qwcwz_9, tt, Ω__17, Ω__18, Ω__19, Ω__20, Ω__21, Ω__22, Ω__23, Ω__24, Ω__25, Ω__26, Ω__27, Ω__28, Ω__29, Ω__30;
          tt = new Test({
            signed_zero: false
          });
          tt.eq((qwcwz_1 = function() {
            return +0;
          }), +0);
          tt.eq((qwcwz_2 = function() {
            return +0;
          }), -0);
          tt.eq((qwcwz_3 = function() {
            return -0;
          }), +0);
          tt.eq((qwcwz_4 = function() {
            return -0;
          }), -0);
          tt.eq((qwcwz_5 = function() {
            return 0;
          }), 1); 
          tt.eq((qwcwz_6 = function() {
            return 1;
          }), 1);
          tt.eq((qwcwz_7 = function() {
            return 2;
          }), 1); // ok
          tt.eq((qwcwz_8 = function() {
            return 3;
          }), 1); // ok
          tt.eq((qwcwz_9 = function() {
            return 0;
          }), 123); 
          tt.eq((qwcwz_10 = function() {
            return 0;
          }), 2e308); 
          tt.eq((qwcwz_11 = function() {
            return 0;
          }), 'anything'); 
          tt.eq((qwcwz_12 = function() {
            return 1;
          }), 123); // ok
          tt.eq((qwcwz_13 = function() {
            return 2;
          }), 123); // ok
          tt.eq((qwcwz_14 = function() {
            return 3;
          }), 123); // ok
          this.eq((Ω__17 = function() {
            return tt.stats.qwcwz_1;
          }), {
            passes: 1,
            fails: 0
          });
          this.eq((Ω__18 = function() {
            return tt.stats.qwcwz_2;
          }), {
            passes: 1,
            fails: 0
          });
          this.eq((Ω__19 = function() {
            return tt.stats.qwcwz_3;
          }), {
            passes: 1,
            fails: 0
          });
          this.eq((Ω__20 = function() {
            return tt.stats.qwcwz_4;
          }), {
            passes: 1,
            fails: 0
          });
          this.eq((Ω__21 = function() {
            return tt.stats.qwcwz_5;
          }), {
            passes: 0,
            fails: 1
          });
          this.eq((Ω__22 = function() {
            return tt.stats.qwcwz_6;
          }), {
            passes: 1,
            fails: 0
          });
          this.eq((Ω__23 = function() {
            return tt.stats.qwcwz_7;
          }), {
            passes: 0,
            fails: 1
          });
          this.eq((Ω__24 = function() {
            return tt.stats.qwcwz_8;
          }), {
            passes: 0,
            fails: 1
          });
          this.eq((Ω__25 = function() {
            return tt.stats.qwcwz_9;
          }), {
            passes: 0,
            fails: 1
          });
          this.eq((Ω__26 = function() {
            return tt.stats.qwcwz_10;
          }), {
            passes: 0,
            fails: 1
          });
          this.eq((Ω__27 = function() {
            return tt.stats.qwcwz_11;
          }), {
            passes: 0,
            fails: 1
          });
          this.eq((Ω__28 = function() {
            return tt.stats.qwcwz_12;
          }), {
            passes: 0,
            fails: 1
          });
          this.eq((Ω__29 = function() {
            return tt.stats.qwcwz_13;
          }), {
            passes: 0,
            fails: 1
          });
          this.eq((Ω__30 = function() {
            return tt.stats.qwcwz_14;
          }), {
            passes: 0,
            fails: 1
          });
          return null;
        })();
        (() => {          //.....................................................................................................
          var qwcwz_1, qwcwz_10, qwcwz_11, qwcwz_12, qwcwz_13, qwcwz_14, qwcwz_2, qwcwz_3, qwcwz_4, qwcwz_5, qwcwz_6, qwcwz_7, qwcwz_8, qwcwz_9, tt, Ω__31, Ω__32, Ω__33, Ω__34, Ω__35, Ω__36, Ω__37, Ω__38, Ω__39, Ω__40, Ω__41, Ω__42, Ω__43, Ω__44;
          tt = new Test({
            signed_zero: true
          });
          tt.eq((qwcwz_1 = function() {
            return +0;
          }), +0);
          tt.eq((qwcwz_2 = function() {
            return +0;
          }), -0);
          tt.eq((qwcwz_3 = function() {
            return -0;
          }), +0);
          tt.eq((qwcwz_4 = function() {
            return -0;
          }), -0);
          tt.eq((qwcwz_5 = function() {
            return 0;
          }), 1); 
          tt.eq((qwcwz_6 = function() {
            return 1;
          }), 1);
          tt.eq((qwcwz_7 = function() {
            return 2;
          }), 1); // ok
          tt.eq((qwcwz_8 = function() {
            return 3;
          }), 1); // ok
          tt.eq((qwcwz_9 = function() {
            return 0;
          }), 123); 
          tt.eq((qwcwz_10 = function() {
            return 0;
          }), 2e308); 
          tt.eq((qwcwz_11 = function() {
            return 0;
          }), 'anything'); 
          tt.eq((qwcwz_12 = function() {
            return 1;
          }), 123); // ok
          tt.eq((qwcwz_13 = function() {
            return 2;
          }), 123); // ok
          tt.eq((qwcwz_14 = function() {
            return 3;
          }), 123); // ok
          this.eq((Ω__31 = function() {
            return tt.stats.qwcwz_1;
          }), {
            passes: 1,
            fails: 0
          });
          this.eq((Ω__32 = function() {
            return tt.stats.qwcwz_2;
          }), {
            passes: 0,
            fails: 1
          });
          this.eq((Ω__33 = function() {
            return tt.stats.qwcwz_3;
          }), {
            passes: 0,
            fails: 1
          });
          this.eq((Ω__34 = function() {
            return tt.stats.qwcwz_4;
          }), {
            passes: 1,
            fails: 0
          });
          this.eq((Ω__35 = function() {
            return tt.stats.qwcwz_5;
          }), {
            passes: 0,
            fails: 1
          });
          this.eq((Ω__36 = function() {
            return tt.stats.qwcwz_6;
          }), {
            passes: 1,
            fails: 0
          });
          this.eq((Ω__37 = function() {
            return tt.stats.qwcwz_7;
          }), {
            passes: 0,
            fails: 1
          });
          this.eq((Ω__38 = function() {
            return tt.stats.qwcwz_8;
          }), {
            passes: 0,
            fails: 1
          });
          this.eq((Ω__39 = function() {
            return tt.stats.qwcwz_9;
          }), {
            passes: 0,
            fails: 1
          });
          this.eq((Ω__40 = function() {
            return tt.stats.qwcwz_10;
          }), {
            passes: 0,
            fails: 1
          });
          this.eq((Ω__41 = function() {
            return tt.stats.qwcwz_11;
          }), {
            passes: 0,
            fails: 1
          });
          this.eq((Ω__42 = function() {
            return tt.stats.qwcwz_12;
          }), {
            passes: 0,
            fails: 1
          });
          this.eq((Ω__43 = function() {
            return tt.stats.qwcwz_13;
          }), {
            passes: 0,
            fails: 1
          });
          this.eq((Ω__44 = function() {
            return tt.stats.qwcwz_14;
          }), {
            passes: 0,
            fails: 1
          });
          return null;
        })();
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      set_equality_by_value: function() {
        (() => {          //.....................................................................................................
          var Ω__45;
          this.eq((Ω__45 = function() {
            return 'abc';
          }), 'abc');
          return null;
        })();
        (() => {          //.....................................................................................................
          var matcher1, matcher2, result, t2, Ω__46, Ω__47;
          t2 = new Test({
            ordered_sets: false,
            ordered_maps: false
          });
          result = [1, [2]];
          matcher1 = [1, [2]];
          matcher2 = [1, [3]];
          this.eq((Ω__46 = function() {
            return t2.equals(result, matcher1);
          }), true);
          this.eq((Ω__47 = function() {
            return t2.equals(result, matcher2);
          }), false);
          return null;
        })();
        (() => {          //.....................................................................................................
          var matcher1, matcher2, result, t2, Ω__48, Ω__49;
          t2 = new Test({
            ordered_sets: false,
            ordered_maps: false
          });
          result = new Set([1, 2]);
          matcher1 = new Set([1, 2]);
          matcher2 = new Set([1, 3]);
          this.eq((Ω__48 = function() {
            return t2.equals(result, matcher1);
          }), true);
          this.eq((Ω__49 = function() {
            return t2.equals(result, matcher2);
          }), false);
/* !!!!!!!!!!!!!!!!!!!!!!!!!!!! */          return null;
        })();
        (() => {          //.....................................................................................................
          var matcher1, matcher2, result, t2, Ω__50, Ω__51;
          t2 = new Test({
            ordered_sets: false,
            ordered_maps: false
          });
          result = new Set([1, [2]]);
          matcher1 = new Set([1, [2]]);
          matcher2 = new Set([1, [3]]);
          this.eq((Ω__50 = function() {
            return t2.equals(result, matcher1);
          }), true);
          this.eq((Ω__51 = function() {
            return t2.equals(result, matcher2);
          }), false);
/* !!!!!!!!!!!!!!!!!!!!!!!!!!!! */          return null;
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      map_equality_by_value: function() {
        (() => {          //.....................................................................................................
          var _types, matcher1, matcher2, result, t2, Ω__52, Ω__53, Ω__54;
          t2 = new Test({
            ordered_sets: false,
            ordered_maps: false
          });
          ({_types} = require('../../../apps/guy-test-NG'));
          result = new Map([['a', [1, 2]], ['b', [1, 2]]]);
          matcher1 = new Map([['a', [1, 2]], ['b', [1, 2]]]);
          matcher2 = new Map([['a', [1, 3]], ['b', [1, 3]]]);
          this.eq((Ω__52 = function() {
            return _types.type_of(result);
          }), 'map');
          this.eq((Ω__53 = function() {
            return t2.equals(result, matcher1);
          }), true);
          this.eq((Ω__54 = function() {
            return t2.equals(result, matcher2);
          }), false);
/* !!!!!!!!!!!!!!!!!!!!!!!!!!!! */          return null;
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      maps_and_sets_as_properties: function() {
        (() => {          //.....................................................................................................
          var matcher, result, t2, Ω__55;
          t2 = new Test();
          result = {
            mylist: Array.from('abc')
          };
          matcher = {
            mylist: Array.from('abc')
          };
          this.eq((Ω__55 = function() {
            return t2.equals(result, matcher);
          }), true);
          return null;
        })();
        (() => {          //.....................................................................................................
          var _types, matcher, result, t2, Ω__56, Ω__57, Ω__58;
          ({_types} = require('../../../apps/guy-test-NG'));
          t2 = new Test();
          result = {
            myset: new Set('abc')
          };
          matcher = {
            myset: new Set('abc')
          };
          this.eq((Ω__56 = function() {
            return t2.cfg.ordered_sets;
          }), false);
          this.eq((Ω__57 = function() {
            return _types.type_of(matcher.myset);
          }), 'set');
          this.eq((Ω__58 = function() {
            return t2.equals(result, matcher);
          }), true);
          return null;
        })();
        (() => {          //.....................................................................................................
          var _types, matcher, result, t2, Ω__59, Ω__60, Ω__61;
          ({_types} = require('../../../apps/guy-test-NG'));
          t2 = new Test();
          result = {
            mymap: new Map([['a', 1], ['b', 2]])
          };
          matcher = {
            mymap: new Map([['a', 1], ['b', 2]])
          };
          this.eq((Ω__59 = function() {
            return t2.cfg.ordered_maps;
          }), false);
          this.eq((Ω__60 = function() {
            return _types.type_of(matcher.mymap);
          }), 'map');
          this.eq((Ω__61 = function() {
            return t2.equals(result, matcher);
          }), true);
          return null;
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      can_configure_eq_of_plusminus_zero: function() {
        (() => {          //.....................................................................................................
          var t2, Ω__62, Ω__63, Ω__64, Ω__65;
          t2 = new Test({
            signed_zero: false
          });
          this.eq((Ω__62 = function() {
            return t2.equals(+0, +0);
          }), true);
          this.eq((Ω__63 = function() {
            return t2.equals(-0, -0);
          }), true);
          this.eq((Ω__64 = function() {
            return t2.equals(+0, -0);
          }), true);
          return this.eq((Ω__65 = function() {
            return t2.equals(-0, +0);
          }), true);
        })();
        (() => {          //.....................................................................................................
          var t2, Ω__66, Ω__67, Ω__68, Ω__69;
          t2 = new Test({
            signed_zero: true
          });
          this.eq((Ω__66 = function() {
            return t2.equals(+0, +0);
          }), true);
          this.eq((Ω__67 = function() {
            return t2.equals(-0, -0);
          }), true);
          this.eq((Ω__68 = function() {
            return t2.equals(+0, -0);
          }), false);
          return this.eq((Ω__69 = function() {
            return t2.equals(-0, +0);
          }), false);
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      can_configure_ordered_objects: function() {
        var a, b;
        a = 123;
        b = 456;
        (() => {          //.....................................................................................................
          var t2, Ω__70, Ω__71;
          t2 = new Test({
            ordered_objects: false
          });
          this.eq((Ω__70 = function() {
            return t2.equals({a, b}, {a, b});
          }), true);
          return this.eq((Ω__71 = function() {
            return t2.equals({a, b}, {b, a});
          }), true);
        })();
        (() => {          //.....................................................................................................
          var t2, Ω__72, Ω__73;
          t2 = new Test({
            ordered_objects: true
          });
          this.eq((Ω__72 = function() {
            return t2.equals({a, b}, {a, b});
          }), true);
          return this.eq((Ω__73 = function() {
            return t2.equals({a, b}, {b, a});
          }), false);
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      can_configure_ordered_sets: function() {
        var a, b;
        a = 123;
        b = 456;
        (() => {          //.....................................................................................................
          var t2, Ω__74, Ω__75;
          t2 = new Test({
            ordered_sets: false
          });
          this.eq((Ω__74 = function() {
            return t2.equals(new Set('ab'), new Set('ab'));
          }), true);
          return this.eq((Ω__75 = function() {
            return t2.equals(new Set('ab'), new Set('ba'));
          }), true);
        })();
        (() => {          //.....................................................................................................
          var t2, Ω__76, Ω__77;
          t2 = new Test({
            ordered_sets: true
          });
          this.eq((Ω__76 = function() {
            return t2.equals(new Set('ab'), new Set('ab'));
          }), true);
          return this.eq((Ω__77 = function() {
            return t2.equals(new Set('ab'), new Set('ba'));
          }), false);
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      can_configure_ordered_maps: function() {
        var a, b;
        a = 123;
        b = 456;
        (() => {          //.....................................................................................................
          var t2, Ω__78, Ω__79;
          t2 = new Test({
            ordered_maps: false
          });
          this.eq((Ω__78 = function() {
            return t2.equals(new Map([['a', 1], ['b', 2]]), new Map([['a', 1], ['b', 2]]));
          }), true);
          return this.eq((Ω__79 = function() {
            return t2.equals(new Map([['a', 1], ['b', 2]]), new Map([['b', 2], ['a', 1]]));
          }), true);
        })();
        (() => {          //.....................................................................................................
          var t2, Ω__80, Ω__81;
          t2 = new Test({
            ordered_maps: true
          });
          this.eq((Ω__80 = function() {
            return t2.equals(new Map([['a', 1], ['b', 2]]), new Map([['a', 1], ['b', 2]]));
          }), true);
          return this.eq((Ω__81 = function() {
            return t2.equals(new Map([['a', 1], ['b', 2]]), new Map([['b', 2], ['a', 1]]));
          }), false);
        })();
        //.....................................................................................................
        return null;
      }
    },
    //---------------------------------------------------------------------------------------------------------
    pass_and_fail: function() {
      var t2, tasks, Ω__82, Ω__83, Ω__84, Ω__85, Ω__86, Ω__87, Ω__88, Ω__89, Ω__90, Ω__91, Ω__92, Ω__93;
      t2 = new Test();
      //.......................................................................................................
      this.eq((Ω__82 = function() {
        return type_of(t2.pass);
      }), 'function');
      this.eq((Ω__83 = function() {
        return type_of(t2.fail);
      }), 'function');
      tasks = {
        paf_a: function() {
          this.pass('paf_1', "this is good");
          this.fail('paf_2', "this is bad");
          this.pass('paf_3');
          return this.fail('paf_4');
        }
      };
      t2.test(tasks);
      t2.report({
        prefix: "TEST RESULT"
      });
      this.eq((Ω__84 = function() {
        return t2.stats['*'].passes;
      }), 2);
      this.eq((Ω__85 = function() {
        return t2.stats['paf_a.paf_1'].passes;
      }), 1);
      this.eq((Ω__86 = function() {
        return t2.stats['paf_a.paf_2'].passes;
      }), 0);
      this.eq((Ω__87 = function() {
        return t2.stats['paf_a.paf_3'].passes;
      }), 1);
      this.eq((Ω__88 = function() {
        return t2.stats['paf_a.paf_4'].passes;
      }), 0);
      this.eq((Ω__89 = function() {
        return t2.stats['*'].fails;
      }), 2);
      this.eq((Ω__90 = function() {
        return t2.stats['paf_a.paf_1'].fails;
      }), 0);
      this.eq((Ω__91 = function() {
        return t2.stats['paf_a.paf_2'].fails;
      }), 1);
      this.eq((Ω__92 = function() {
        return t2.stats['paf_a.paf_3'].fails;
      }), 0);
      this.eq((Ω__93 = function() {
        return t2.stats['paf_a.paf_4'].fails;
      }), 1);
      return typeof done === "function" ? done() : void 0;
    },
    //---------------------------------------------------------------------------------------------------------
    asynchronous_throws: async function() {
      var FS, fetch_filesize, t2, Ω__97, Ω__98, Ω__99;
      FS = require('node:fs/promises');
      t2 = new Test();
      //.......................................................................................................
      fetch_filesize = async function(path) {
        return ((await FS.stat(path))).size;
      };
      //.......................................................................................................
      // await async_throws  T, ( Ω__94 = -> await fetch_filesize __filename   )
      // await async_throws  T, ( Ω__95 = -> await fetch_filesize __filename   ), "foobar"
      // await async_throws  T, ( Ω__96 = -> await fetch_filesize __filename   ), /no such file/
      //.......................................................................................................
      await t2.async_throws((Ω__97 = async function() {
        return (await fetch_filesize('nosuchpath'));
      }), "foobar");
      await t2.async_throws((Ω__98 = async function() {
        return (await fetch_filesize('nosuchpath'));
      }), /no such file/);
      await t2.async_throws((Ω__99 = async function() {
        return (await fetch_filesize('nosuchpath'));
      }));
      return typeof done === "function" ? done() : void 0;
    },
    //---------------------------------------------------------------------------------------------------------
    asynchronous_errors: async function() {
      var FS, fetch_filesize, produce_filesize, Ω_108;
      FS = require('node:fs/promises');
      //.......................................................................................................
      fetch_filesize = async function(path) {
        return ((await FS.stat(path))).size;
      };
      //.......................................................................................................
      produce_filesize = async(path) => {
        var error, filesize;
        try {
          filesize = (await fetch_filesize(path));
          urge("Ω_104", {filesize});
        } catch (error1) {
          error = error1;
          warn("Ω_105", error);
        }
        return null;
      };
      //.......................................................................................................
      echo('-------------------');
      // try await produce_filesize 'nosuchpath' catch error then warn 'Ω_106', error.message
      await produce_filesize('nosuchpath');
      echo('-------------------');
      await produce_filesize(__filename);
      echo('-------------------');
      // await async_throws ( Ω_107 = -> await fetch_filesize __filename ), '???'
      await this.async_throws((Ω_108 = async function() {
        return (await fetch_filesize('nosuchpath'));
      }), /no such file/);
      echo('-------------------');
      return typeof done === "function" ? done() : void 0;
    },
    //---------------------------------------------------------------------------------------------------------
    test_cfg: function() {
      (() => {        //.......................................................................................................
        var t2, Ω_109, Ω_110, Ω_111, Ω_112, Ω_113, Ω_114, Ω_115, Ω_116, Ω_117;
        t2 = new Test();
        this.eq((Ω_109 = function() {
          return Object.isFrozen(t2.cfg);
        }), true);
        this.eq((Ω_110 = function() {
          return t2.cfg.auto_reset;
        }), false);
        this.eq((Ω_111 = function() {
          return t2.cfg.show_report;
        }), true);
        this.eq((Ω_112 = function() {
          return t2.cfg.show_results;
        }), true);
        this.eq((Ω_113 = function() {
          return t2.cfg.show_fails;
        }), true);
        this.eq((Ω_114 = function() {
          return t2.cfg.show_passes;
        }), true);
        this.eq((Ω_115 = function() {
          return t2.cfg.throw_on_error;
        }), false);
        this.eq((Ω_116 = function() {
          return t2.cfg.throw_on_fail;
        }), false);
        this.eq((Ω_117 = function() {
          return t2.cfg.message_width;
        }), 300);
        return null;
      })();
      (() => {        //.......................................................................................................
        var t2, Ω_118, Ω_119, Ω_120, Ω_121, Ω_122, Ω_123, Ω_124, Ω_125, Ω_126;
        t2 = new Test({});
        this.eq((Ω_118 = function() {
          return Object.isFrozen(t2.cfg);
        }), true);
        this.eq((Ω_119 = function() {
          return t2.cfg.auto_reset;
        }), false);
        this.eq((Ω_120 = function() {
          return t2.cfg.show_report;
        }), true);
        this.eq((Ω_121 = function() {
          return t2.cfg.show_results;
        }), true);
        this.eq((Ω_122 = function() {
          return t2.cfg.show_fails;
        }), true);
        this.eq((Ω_123 = function() {
          return t2.cfg.show_passes;
        }), true);
        this.eq((Ω_124 = function() {
          return t2.cfg.throw_on_error;
        }), false);
        this.eq((Ω_125 = function() {
          return t2.cfg.throw_on_fail;
        }), false);
        this.eq((Ω_126 = function() {
          return t2.cfg.message_width;
        }), 300);
        return null;
      })();
      (() => {        //.......................................................................................................
        var t2, Ω_127, Ω_128, Ω_129, Ω_130, Ω_131, Ω_132, Ω_133, Ω_134, Ω_135;
        t2 = new Test({
          message_width: 30,
          throw_on_error: true
        });
        this.eq((Ω_127 = function() {
          return Object.isFrozen(t2.cfg);
        }), true);
        this.eq((Ω_128 = function() {
          return t2.cfg.auto_reset;
        }), false);
        this.eq((Ω_129 = function() {
          return t2.cfg.show_report;
        }), true);
        this.eq((Ω_130 = function() {
          return t2.cfg.show_results;
        }), true);
        this.eq((Ω_131 = function() {
          return t2.cfg.show_fails;
        }), true);
        this.eq((Ω_132 = function() {
          return t2.cfg.show_passes;
        }), true);
        this.eq((Ω_133 = function() {
          return t2.cfg.throw_on_error;
        }), true);
        this.eq((Ω_134 = function() {
          return t2.cfg.throw_on_fail;
        }), false);
        return this.eq((Ω_135 = function() {
          return t2.cfg.message_width;
        }), 30);
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    can_throw_on_fail: function() {
      (() => {        //.......................................................................................................
        /* ensure that `Test` instance complains when no error is thrown inside a `throws()` check: */
        var t2, Ω_136, Ω_137;
        t2 = new Test({
          throw_on_error: false,
          show_report: false,
          prefix: '**T2_1**'
        });
        t2.test({
          ctof_1: function() {
            var ctof_2;
            return this.throws((ctof_2 = function() {
              return 32;
            }), /expected an error/);
          }
        });
        this.eq((Ω_136 = function() {
          return t2.stats;
        }), {
          '*': {
            passes: 0,
            fails: 1
          },
          'ctof_1.ctof_2': {
            passes: 0,
            fails: 1
          }
        });
        this.eq((Ω_137 = function() {
          return t2.warnings;
        }), {
          'ctof_1.ctof_2': ['(noerr) expected an error but none was thrown']
        });
        return null;
      })();
      (() => {        //.......................................................................................................
        var ctof_5, t2;
        t2 = new Test({
          throw_on_error: false,
          throw_on_fail: true,
          show_report: false,
          prefix: '**T2_2**'
        });
        this.throws((ctof_5 = function() {
          var ctof_6;
          return t2.eq((ctof_6 = function() {
            return 14;
          }), 15);
        }), /neq:/);
        // @throws ( Ω_138 = -> t2.eq ( xy1 = -> 14 ), 15 ), /---/
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    TT3: {
      assumptions: async function(ctx) {
        var t2, Ω_139, Ω_140, Ω_141, Ω_142, Ω_143, Ω_144, Ω_145, Ω_146, Ω_147, Ω_148, Ω_149, Ω_150, Ω_151, Ω_152, Ω_153, Ω_154, Ω_155, Ω_156, Ω_157, Ω_158, Ω_159;
        t2 = new Test({
          show_report: false
        });
        //.....................................................................................................
        await t2.async_test({
          assumptions_task: async function() {
            var dat_1, dat_10, dat_11, dat_12, dat_13, dat_14, dat_15, dat_16, dat_17, dat_18, dat_19, dat_2, dat_20, dat_3, dat_8, dat_9, line;
            line = '-'.repeat(108);
            echo(line);
            this.eq((dat_1 = function() {
              return 32;
            }), 32);
            echo(line);
            this.eq((dat_2 = function() {
              return 32;
            }), 33);
            echo(line);
            this.eq((dat_3 = function() {
              throw new Error("fine");
            }));
            echo(line);
            this.pass('dat_4', 'test', "all fine");
            echo(line);
            this.pass('dat_5', 'test');
            echo(line);
            this.fail('dat_6', 'test', "all fine");
            echo(line);
            this.fail('dat_7', 'test');
            echo(line);
            this.throws((dat_8 = function() {
              return 'oops';
            }), /fine/);
            echo(line);
            this.throws((dat_9 = function() {
              throw new Error("this is actually fine 1");
            }), /fine/);
            echo(line);
            this.throws((dat_10 = function() {
              throw new Error("this is actually fine 2");
            }), /what/);
            echo(line);
            this.throws((dat_11 = function() {
              throw new Error("this is actually fine 3");
            }), "not this");
            echo(line);
            await this.async_throws((dat_12 = function() {
              throw new Error("this is actually fine 4");
            }));
            echo(line);
            await this.async_throws((dat_13 = function() {
              throw new Error("this is actually fine 5");
            }), /fine/);
            echo(line);
            await this.async_throws((dat_14 = function() {
              throw new Error("this is actually fine 6");
            }), /not this/);
            echo(line);
            await this.async_throws((dat_15 = function() {
              return after(0.1, async() => {
                return (await (function() {
                  throw new Error("this is actually fine 7");
                })());
              });
            }), /fine/);
            echo(line);
            await this.async_throws((dat_16 = function() {
              return after(0.1, async() => {
                return (await (function() {
                  throw new Error("this is actually fine 9");
                })());
              });
            }), /what/);
            echo(line);
            await this.async_throws((dat_17 = function() {
              return after(0.1, async() => {
                return (await (function() {
                  throw new Error("this is actually fine 10");
                })());
              });
            }), "not this");
            echo(line);
            await this.async_eq((dat_18 = function() {
              return after(0, async() => {
                return (await 32);
              });
            }), 32);
            echo(line);
            await this.async_eq((dat_19 = function() {
              return after(0, async() => {
                return (await 32);
              });
            }), 33);
            echo(line);
            return (await this.async_eq((dat_20 = function() {
              return after(0, async() => {
                return (await (function() {
                  throw new Error("fine");
                })());
              });
            })));
          }
        });
        //.....................................................................................................
        this.eq((Ω_139 = function() {
          return t2.stats['*'];
        }), {
          passes: 8,
          fails: 12
        });
        this.eq((Ω_140 = function() {
          return t2.stats['assumptions_task.dat_1'];
        }), {
          passes: 1,
          fails: 0
        });
        this.eq((Ω_141 = function() {
          return t2.stats['assumptions_task.dat_2'];
        }), {
          passes: 0,
          fails: 1
        });
        this.eq((Ω_142 = function() {
          return t2.stats['assumptions_task.dat_3'];
        }), {
          passes: 0,
          fails: 1
        });
        this.eq((Ω_143 = function() {
          return t2.stats['assumptions_task.dat_4'];
        }), {
          passes: 1,
          fails: 0
        });
        this.eq((Ω_144 = function() {
          return t2.stats['assumptions_task.dat_5'];
        }), {
          passes: 1,
          fails: 0
        });
        this.eq((Ω_145 = function() {
          return t2.stats['assumptions_task.dat_6'];
        }), {
          passes: 0,
          fails: 1
        });
        this.eq((Ω_146 = function() {
          return t2.stats['assumptions_task.dat_7'];
        }), {
          passes: 0,
          fails: 1
        });
        this.eq((Ω_147 = function() {
          return t2.stats['assumptions_task.dat_8'];
        }), {
          passes: 0,
          fails: 1
        });
        this.eq((Ω_148 = function() {
          return t2.stats['assumptions_task.dat_9'];
        }), {
          passes: 1,
          fails: 0
        });
        this.eq((Ω_149 = function() {
          return t2.stats['assumptions_task.dat_10'];
        }), {
          passes: 0,
          fails: 1
        });
        this.eq((Ω_150 = function() {
          return t2.stats['assumptions_task.dat_11'];
        }), {
          passes: 0,
          fails: 1
        });
        this.eq((Ω_151 = function() {
          return t2.stats['assumptions_task.dat_12'];
        }), {
          passes: 1,
          fails: 0
        });
        this.eq((Ω_152 = function() {
          return t2.stats['assumptions_task.dat_13'];
        }), {
          passes: 1,
          fails: 0
        });
        this.eq((Ω_153 = function() {
          return t2.stats['assumptions_task.dat_14'];
        }), {
          passes: 0,
          fails: 1
        });
        this.eq((Ω_154 = function() {
          return t2.stats['assumptions_task.dat_15'];
        }), {
          passes: 1,
          fails: 0
        });
        this.eq((Ω_155 = function() {
          return t2.stats['assumptions_task.dat_16'];
        }), {
          passes: 0,
          fails: 1
        });
        this.eq((Ω_156 = function() {
          return t2.stats['assumptions_task.dat_17'];
        }), {
          passes: 0,
          fails: 1
        });
        this.eq((Ω_157 = function() {
          return t2.stats['assumptions_task.dat_18'];
        }), {
          passes: 1,
          fails: 0
        });
        this.eq((Ω_158 = function() {
          return t2.stats['assumptions_task.dat_19'];
        }), {
          passes: 0,
          fails: 1
        });
        this.eq((Ω_159 = function() {
          return t2.stats['assumptions_task.dat_20'];
        }), {
          passes: 0,
          fails: 1
        });
        //.....................................................................................................
        return null;
      }
    },
    //---------------------------------------------------------------------------------------------------------
    demo_for_readme: function() {
      var my_math_lib, taskgroup_A, taskgroup_B;
      //.......................................................................................................
      my_math_lib = {
        mul: function(a, b) {
          return a * b;
        },
        add: function(a, b) {
          return a + b;
        }
      };
      //.......................................................................................................
      taskgroup_A = {
        test_1: function() {},
        better_use_meaningful_names: function() {
          var t__20, t__21;
          this.eq((t__20 = function() {
            return my_math_lib.mul(3, 4);
          }), 12);
          return this.eq((t__21 = function() {
            return my_math_lib.add(3, 4);
          }), 7);
        },
        subgroup: {
          foo: function() {},
          bar: function() {}
        }
      };
      taskgroup_B = {};
      return (new Test()).test({taskgroup_A, taskgroup_B});
    }
  };

  // @foobar = ->
  //   debug 'Ω_160'
  //   @eq ( Ω_161 = -> 1 ), 1
  //   return null

  //===========================================================================================================
  if (module === require.main) {
    await (async() => {
      var cfg;
      cfg = {
        throw_on_error: true
      };
      cfg = {
        throw_on_error: false
      };
      await (new Test(cfg)).async_test({
        TT: this.TT
      });
      // Interface:  @TT.Interface,
      // Equality:   @TT.Equality,
      // eq_works_correctly_with_zero:   @TT.Equality.eq_works_correctly_with_zero,
      // set_equality_by_value: @TT.Equality.set_equality_by_value,
      // }
      // await ( new Test cfg ).async_test @TT
      // ( new Test cfg ).test @TT.pass_and_fail
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFNEc7RUFBQTtFQUM1RztBQUQ0RyxNQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsU0FBQSxFQUFBLElBQUEsRUFBQSxTQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUE7O0VBRzVHLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsdUJBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxPQUhGLEVBSUUsR0FKRixDQUFBLEdBSTRCLEdBQUcsQ0FBQyxHQUpoQzs7RUFLQSxDQUFBLENBQUUsS0FBRixDQUFBLEdBQTRCLEdBQUcsQ0FBQyxLQUFoQyxFQWxCNEc7OztFQW9CNUcsSUFBQSxHQUE0QixPQUFBLENBQVEsMkJBQVI7O0VBQzVCLENBQUEsQ0FBRSxTQUFGLEVBQ0UsSUFERixDQUFBLEdBQzRCLElBRDVCLEVBckI0Rzs7Ozs7Ozs7Ozs7O0VBaUM1RyxTQUFBLEdBQTRCLE9BQUEsQ0FBUSxtQ0FBUjs7RUFDNUIsQ0FBQSxDQUFFLE9BQUYsQ0FBQSxHQUE0QixTQUFTLENBQUMsUUFBUSxDQUFDLGVBQW5CLENBQUEsQ0FBNUIsRUFsQzRHOzs7Ozs7Ozs7RUEyQzVHLElBQUMsQ0FB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QUFRLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFBVixDQUFWLENBQUosRUFBNEMsSUFBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsS0FBQSxHQUFRLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFBVixDQUFWLENBQUosRUFBNEMsSUFBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsS0FBQSxHQUFRLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFBVixDQUFWLENBQUosRUFBNEMsS0FBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsS0FBQSxHQUFRLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFBVixDQUFWLENBQUosRUFBNEMsS0FBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsS0FBQSxHQUFRLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFBVixDQUFWLENBQUosRUFBNEMsR0FBNUM7QUFDQSxlQUFPO01BWE4sQ0FBQTtNQWFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsRUFBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUE7UUFBTSxFQUFBLEdBQUssSUFBSSxJQUFKLENBQVMsQ0FBQSxDQUFUO1FBQ0wsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLEtBQUEsR0FBUSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxNQUFNLENBQUMsUUFBUCxDQUFnQixFQUFFLENBQUMsR0FBbkI7UUFBSCxDQUFWLENBQUosRUFBNEMsSUFBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsS0FBQSxHQUFRLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFBVixDQUFWLENBQUosRUFBNEMsS0FBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsS0FBQSxHQUFRLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFBVixDQUFWLENBQUosRUFBNEMsSUFBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsS0FBQSxHQUFRLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFBVixDQUFWLENBQUosRUFBNEMsSUFBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsS0FBQSxHQUFRLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFBVixDQUFWLENBQUosRUFBNEMsSUFBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsS0FBQSxHQUFRLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFBVixDQUFWLENBQUosRUFBNEMsSUFBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsS0FBQSxHQUFRLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFBVixDQUFWLENBQUosRUFBNEMsS0FBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsS0FBQSxHQUFRLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFBVixDQUFWLENBQUosRUFBNEMsS0FBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsS0FBQSxHQUFRLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFBVixDQUFWLENBQUosRUFBNEMsR0FBNUM7QUFDQSxlQUFPO01BWE4sQ0FBQTtNQWFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsRUFBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVB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RUFBZ0I7TUFBbEI7TUFDTixHQUFBLEdBQU07UUFBRSxjQUFBLEVBQWdCO01BQWxCO01BQ04sTUFBTSxDQUFFLElBQUksSUFBSixDQUFTLEdBQVQsQ0FBRixDQUFnQixDQUFDLFVBQWpCLENBQTRCO1FBQUUsRUFBQSxFQUFJLElBQUMsQ0FBQTtNQUFQLENBQTVCLEVBRlI7Ozs7Ozs7O0FBVUUsYUFBTztJQVgrQixDQUFBLElBQXhDOztBQTVoQjRHIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuJ3VzZSBzdHJpY3QnXG5cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnaW50ZXJ0eXBlL3Rlc3QtYmFzaWNzJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG57IGFmdGVyIH0gICAgICAgICAgICAgICAgID0gR1VZLmFzeW5jXG4jLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBfVE1QX3Rlc3RcbiAgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG4gICMgZXF1YWxzXG4gICMgcGFzc1xuICAjIGZhaWxcbiAgIyB0ZXN0XG4gICMgZXFcbiAgIyB0aHJvd3NcbiAgIyBhc3luY190ZXN0XG4gICMgYXN5bmNfZXFcbiAgIyBhc3luY190aHJvd3MgICAgICAgICAgfSA9IEdUTkdcbiMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbnsgdHlwZV9vZiwgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiMgdHlwZXMgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaW50ZXJ0eXBlJ1xuIyB7ICR0eXBlX29mOiB0eXBlX29mLCB9ICAgID0gdHlwZXNcbiMgaXNhXG4jIHR5cGVfb2ZcbiMgJGlzYVxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQFRUID1cblxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIEludGVyZmFjZTpcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgbW9kdWxlX2luc3RhbmNlX2FuZF9hc3N1bXB0aW9uc19oYXZlX2VxdWFsc19tZXRob2Q6IC0+XG4gICAgICBAZXEgKCDOqV9fXzEgPSAtPiB0eXBlX29mIEdUTkcuZXF1YWxzICAgICAgICAgICAgKSwgJ2Z1bmN0aW9uJ1xuICAgICAgQGVxICggzqlfX18yID0gLT4gdHlwZV9vZiAoIG5ldyBUZXN0KCkgKS5lcXVhbHMgICksICdmdW5jdGlvbidcbiAgICAgIEBlcSAoIM6pX19fMyA9IC0+IHR5cGVfb2YgQGVxdWFscyAgICAgICAgICAgICAgICApLCAnZnVuY3Rpb24nXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIyAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICMgY2FuX3VzZV9uYW1lc190b19zZWxlY3RfdGVzdHNfYW5kX2NoZWNrczpcbiAgICAjICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyAgIGZmZl8xOiAtPlxuICAgICMgICAgIG15dGVzdCA9IG5ldyBUZXN0KClcbiAgICAjICAgICB0YXNrcyA9XG4gICAgIyAgICAgICB0MTogLT5cbiAgICAjICAgICAgICAgQGVxICggbXl0ZXN0X2NoZWNrXzEgPSAtPiBAZXF1YWxzIDEsIDEgKSwgdHJ1ZVxuICAgICMgICAgICAgICBAZXEgKCBteXRlc3RfY2hlY2tfMiA9IC0+IEBlcXVhbHMgMiwgMiApLCB0cnVlXG4gICAgIyAgICAgICAgIEBlcSAoIG15dGVzdF9jaGVja18zID0gLT4gQGVxdWFscyAzLCAzICksIHRydWVcbiAgICAjICAgICBteXRlc3QudGVzdCB0YXNrc1xuICAgICMgICAgIEBlcSAoIM6pX19fNCA9IC0+IG15dGVzdC5zdGF0c1sgJ3QxLm15dGVzdF9jaGVja18xJyBdLnBhc3NlcyApLCAxXG4gICAgIyAgICAgQGVxICggzqlfX181ID0gLT4gbXl0ZXN0LnN0YXRzWyAndDEubXl0ZXN0X2NoZWNrXzInIF0ucGFzc2VzICksIDFcbiAgICAjICAgICBAZXEgKCDOqV9fXzYgPSAtPiBteXRlc3Quc3RhdHNbICd0MS5teXRlc3RfY2hlY2tfMycgXS5wYXNzZXMgKSwgMVxuICAgICMgICAgIHJldHVybiBudWxsXG4gICAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgICBmZmZfMjogLT5cbiAgICAjICAgICBteXRlc3QgPSBuZXcgVGVzdCgpXG4gICAgIyAgICAgdGFza3MgPVxuICAgICMgICAgICAgdDE6IC0+XG4gICAgIyAgICAgICAgIEBlcSAoIG15dGVzdF9jaGVja18xID0gLT4gQGVxdWFscyAxLCAxICksIHRydWVcbiAgICAjICAgICAgICAgQGVxICggbXl0ZXN0X2NoZWNrXzIgPSAtPiBAZXF1YWxzIDIsIDIgKSwgdHJ1ZVxuICAgICMgICAgICAgICBAZXEgKCBteXRlc3RfY2hlY2tfMyA9IC0+IEBlcXVhbHMgMywgMyApLCB0cnVlXG4gICAgIyAgICAgbXl0ZXN0LmFkZCB0YXNrc1xuICAgICMgICAgIG15dGVzdC5zZWxlY3QgJyoubXl0ZXN0X2NoZWNrXzInXG4gICAgIyAgICAgbXl0ZXN0LmRlc2VsZWN0ICcqLm15dGVzdF9jaGVja18yJ1xuICAgICMgICAgIG15dGVzdC50ZXN0KClcbiAgICAjICAgICBAZXEgKCDOqV9fXzcgPSAtPiBteXRlc3Quc3RhdHNbICd0MS5teXRlc3RfY2hlY2tfMScgXS5wYXNzZXMgKSwgdW5kZWZpbmVkXG4gICAgIyAgICAgQGVxICggzqlfX184ID0gLT4gbXl0ZXN0LnN0YXRzWyAndDEubXl0ZXN0X2NoZWNrXzInIF0ucGFzc2VzICksIDFcbiAgICAjICAgICBAZXEgKCDOqV9fXzkgPSAtPiBteXRlc3Quc3RhdHNbICd0MS5teXRlc3RfY2hlY2tfMycgXS5wYXNzZXMgKSwgdW5kZWZpbmVkXG4gICAgIyAgICAgcmV0dXJuIG51bGxcblxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIEVxdWFsaXR5OlxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBiYXNpY3M6IC0+XG4gICAgICBAZXEgKCDOqV9fMTAgID0gLT4gQGVxdWFscyAxLjIzNDU2LCAxLjIzNDU2ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlfXzExICA9IC0+IEBlcXVhbHMgMS4yMzQ1NjAwMDAwMDAwMDAwMDAwMSwgMS4yMzQ1NjAwMDAwMDAwMDAwMDAwMiAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pX18xMiAgPSAtPiBAZXF1YWxzIDEuMjM0NTYsIDEuMjM0NTcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlfXzEzICA9IC0+IEBlcXVhbHMgJzEuMjM0NTYnLCAnMS4yMzQ1NycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqV9fMTQgID0gLT4gQGVxdWFscyAnMS4yMzQ1NycsICcxLjIzNDU3JyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlfXzE1ICA9IC0+IEBlcXVhbHMge30sIHt9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pX18xNiAgPSAtPiBAZXF1YWxzIHsgbHN0OiBbIDcsIDgsIDksIF19LCB7IGxzdDogWyA3LCA4LCA5LCBdLCB9ICAgICApLCB0cnVlXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBlcV93b3Jrc19jb3JyZWN0bHlfd2l0aF96ZXJvOiAtPlxuICAgICAgZG8gPT5cbiAgICAgICAgdHQgPSBuZXcgVGVzdCB7IHNpZ25lZF96ZXJvOiBmYWxzZSwgfVxuICAgICAgICB0dC5lcSAoIHF3Y3d6XzEgPSAtPiArMCAgICAgKSwgKzBcbiAgICAgICAgdHQuZXEgKCBxd2N3el8yID0gLT4gKzAgICAgICksIC0wXG4gICAgICAgIHR0LmVxICggcXdjd3pfMyA9IC0+IC0wICAgICApLCArMFxuICAgICAgICB0dC5lcSAoIHF3Y3d6XzQgPSAtPiAtMCAgICAgKSwgLTBcbiAgICAgICAgdHQuZXEgKCBxd2N3el81ID0gLT4gMCAgICAgICksIDEgI1xuICAgICAgICB0dC5lcSAoIHF3Y3d6XzYgPSAtPiAxICAgICAgKSwgMVxuICAgICAgICB0dC5lcSAoIHF3Y3d6XzcgPSAtPiAyICAgICAgKSwgMSAgICAjIG9rXG4gICAgICAgIHR0LmVxICggcXdjd3pfOCA9IC0+IDMgICAgICApLCAxICAgICMgb2tcbiAgICAgICAgdHQuZXEgKCBxd2N3el85ID0gLT4gMCAgICAgICksIDEyMyAjXG4gICAgICAgIHR0LmVxICggcXdjd3pfMTAgPSAtPiAwICAgICApLCBJbmZpbml0eSAjXG4gICAgICAgIHR0LmVxICggcXdjd3pfMTEgPSAtPiAwICAgICApLCAnYW55dGhpbmcnICNcbiAgICAgICAgdHQuZXEgKCBxd2N3el8xMiA9IC0+IDEgICAgICksIDEyMyAgIyBva1xuICAgICAgICB0dC5lcSAoIHF3Y3d6XzEzID0gLT4gMiAgICAgKSwgMTIzICAjIG9rXG4gICAgICAgIHR0LmVxICggcXdjd3pfMTQgPSAtPiAzICAgICApLCAxMjMgICMgb2tcbiAgICAgICAgQGVxICggzqlfXzE3ID0gLT4gdHQuc3RhdHMucXdjd3pfMSApLCB7IHBhc3NlczogMSwgZmFpbHM6IDAsIH1cbiAgICAgICAgQGVxICggzqlfXzE4ID0gLT4gdHQuc3RhdHMucXdjd3pfMiApLCB7IHBhc3NlczogMSwgZmFpbHM6IDAsIH1cbiAgICAgICAgQGVxICggzqlfXzE5ID0gLT4gdHQuc3RhdHMucXdjd3pfMyApLCB7IHBhc3NlczogMSwgZmFpbHM6IDAsIH1cbiAgICAgICAgQGVxICggzqlfXzIwID0gLT4gdHQuc3RhdHMucXdjd3pfNCApLCB7IHBhc3NlczogMSwgZmFpbHM6IDAsIH1cbiAgICAgICAgQGVxICggzqlfXzIxID0gLT4gdHQuc3RhdHMucXdjd3pfNSApLCB7IHBhc3NlczogMCwgZmFpbHM6IDEsIH1cbiAgICAgICAgQGVxICggzqlfXzIyID0gLT4gdHQuc3RhdHMucXdjd3pfNiApLCB7IHBhc3NlczogMSwgZmFpbHM6IDAsIH1cbiAgICAgICAgQGVxICggzqlfXzIzID0gLT4gdHQuc3RhdHMucXdjd3pfNyApLCB7IHBhc3NlczogMCwgZmFpbHM6IDEsIH1cbiAgICAgICAgQGVxICggzqlfXzI0ID0gLT4gdHQuc3RhdHMucXdjd3pfOCApLCB7IHBhc3NlczogMCwgZmFpbHM6IDEsIH1cbiAgICAgICAgQGVxICggzqlfXzI1ID0gLT4gdHQuc3RhdHMucXdjd3pfOSApLCB7IHBhc3NlczogMCwgZmFpbHM6IDEsIH1cbiAgICAgICAgQGVxICggzqlfXzI2ID0gLT4gdHQuc3RhdHMucXdjd3pfMTAgKSwgeyBwYXNzZXM6IDAsIGZhaWxzOiAxLCB9XG4gICAgICAgIEBlcSAoIM6pX18yNyA9IC0+IHR0LnN0YXRzLnF3Y3d6XzExICksIHsgcGFzc2VzOiAwLCBmYWlsczogMSwgfVxuICAgICAgICBAZXEgKCDOqV9fMjggPSAtPiB0dC5zdGF0cy5xd2N3el8xMiApLCB7IHBhc3NlczogMCwgZmFpbHM6IDEsIH1cbiAgICAgICAgQGVxICggzqlfXzI5ID0gLT4gdHQuc3RhdHMucXdjd3pfMTMgKSwgeyBwYXNzZXM6IDAsIGZhaWxzOiAxLCB9XG4gICAgICAgIEBlcSAoIM6pX18zMCA9IC0+IHR0LnN0YXRzLnF3Y3d6XzE0ICksIHsgcGFzc2VzOiAwLCBmYWlsczogMSwgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICB0dCA9IG5ldyBUZXN0IHsgc2lnbmVkX3plcm86IHRydWUsIH1cbiAgICAgICAgdHQuZXEgKCBxd2N3el8xID0gLT4gKzAgICAgICksICswXG4gICAgICAgIHR0LmVxICggcXdjd3pfMiA9IC0+ICswICAgICApLCAtMFxuICAgICAgICB0dC5lcSAoIHF3Y3d6XzMgPSAtPiAtMCAgICAgKSwgKzBcbiAgICAgICAgdHQuZXEgKCBxd2N3el80ID0gLT4gLTAgICAgICksIC0wXG4gICAgICAgIHR0LmVxICggcXdjd3pfNSA9IC0+IDAgICAgICApLCAxICNcbiAgICAgICAgdHQuZXEgKCBxd2N3el82ID0gLT4gMSAgICAgICksIDFcbiAgICAgICAgdHQuZXEgKCBxd2N3el83ID0gLT4gMiAgICAgICksIDEgICAgIyBva1xuICAgICAgICB0dC5lcSAoIHF3Y3d6XzggPSAtPiAzICAgICAgKSwgMSAgICAjIG9rXG4gICAgICAgIHR0LmVxICggcXdjd3pfOSA9IC0+IDAgICAgICApLCAxMjMgI1xuICAgICAgICB0dC5lcSAoIHF3Y3d6XzEwID0gLT4gMCAgICAgKSwgSW5maW5pdHkgI1xuICAgICAgICB0dC5lcSAoIHF3Y3d6XzExID0gLT4gMCAgICAgKSwgJ2FueXRoaW5nJyAjXG4gICAgICAgIHR0LmVxICggcXdjd3pfMTIgPSAtPiAxICAgICApLCAxMjMgICMgb2tcbiAgICAgICAgdHQuZXEgKCBxd2N3el8xMyA9IC0+IDIgICAgICksIDEyMyAgIyBva1xuICAgICAgICB0dC5lcSAoIHF3Y3d6XzE0ID0gLT4gMyAgICAgKSwgMTIzICAjIG9rXG4gICAgICAgIEBlcSAoIM6pX18zMSA9IC0+IHR0LnN0YXRzLnF3Y3d6XzEgKSwgeyBwYXNzZXM6IDEsIGZhaWxzOiAwLCB9XG4gICAgICAgIEBlcSAoIM6pX18zMiA9IC0+IHR0LnN0YXRzLnF3Y3d6XzIgKSwgeyBwYXNzZXM6IDAsIGZhaWxzOiAxLCB9XG4gICAgICAgIEBlcSAoIM6pX18zMyA9IC0+IHR0LnN0YXRzLnF3Y3d6XzMgKSwgeyBwYXNzZXM6IDAsIGZhaWxzOiAxLCB9XG4gICAgICAgIEBlcSAoIM6pX18zNCA9IC0+IHR0LnN0YXRzLnF3Y3d6XzQgKSwgeyBwYXNzZXM6IDEsIGZhaWxzOiAwLCB9XG4gICAgICAgIEBlcSAoIM6pX18zNSA9IC0+IHR0LnN0YXRzLnF3Y3d6XzUgKSwgeyBwYXNzZXM6IDAsIGZhaWxzOiAxLCB9XG4gICAgICAgIEBlcSAoIM6pX18zNiA9IC0+IHR0LnN0YXRzLnF3Y3d6XzYgKSwgeyBwYXNzZXM6IDEsIGZhaWxzOiAwLCB9XG4gICAgICAgIEBlcSAoIM6pX18zNyA9IC0+IHR0LnN0YXRzLnF3Y3d6XzcgKSwgeyBwYXNzZXM6IDAsIGZhaWxzOiAxLCB9XG4gICAgICAgIEBlcSAoIM6pX18zOCA9IC0+IHR0LnN0YXRzLnF3Y3d6XzggKSwgeyBwYXNzZXM6IDAsIGZhaWxzOiAxLCB9XG4gICAgICAgIEBlcSAoIM6pX18zOSA9IC0+IHR0LnN0YXRzLnF3Y3d6XzkgKSwgeyBwYXNzZXM6IDAsIGZhaWxzOiAxLCB9XG4gICAgICAgIEBlcSAoIM6pX180MCA9IC0+IHR0LnN0YXRzLnF3Y3d6XzEwICksIHsgcGFzc2VzOiAwLCBmYWlsczogMSwgfVxuICAgICAgICBAZXEgKCDOqV9fNDEgPSAtPiB0dC5zdGF0cy5xd2N3el8xMSApLCB7IHBhc3NlczogMCwgZmFpbHM6IDEsIH1cbiAgICAgICAgQGVxICggzqlfXzQyID0gLT4gdHQuc3RhdHMucXdjd3pfMTIgKSwgeyBwYXNzZXM6IDAsIGZhaWxzOiAxLCB9XG4gICAgICAgIEBlcSAoIM6pX180MyA9IC0+IHR0LnN0YXRzLnF3Y3d6XzEzICksIHsgcGFzc2VzOiAwLCBmYWlsczogMSwgfVxuICAgICAgICBAZXEgKCDOqV9fNDQgPSAtPiB0dC5zdGF0cy5xd2N3el8xNCApLCB7IHBhc3NlczogMCwgZmFpbHM6IDEsIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHNldF9lcXVhbGl0eV9ieV92YWx1ZTogLT5cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgQGVxICggzqlfXzQ1ID0gLT4gJ2FiYycgICAgICAgICAgICAgICAgICAgICksICdhYmMnXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIHQyID0gbmV3IFRlc3QgeyBvcmRlcmVkX3NldHM6IGZhbHNlLCBvcmRlcmVkX21hcHM6IGZhbHNlLCB9XG4gICAgICAgIHJlc3VsdCAgICA9IFsgMSwgWyAyIF0sIF1cbiAgICAgICAgbWF0Y2hlcjEgID0gWyAxLCBbIDIgXSwgXVxuICAgICAgICBtYXRjaGVyMiAgPSBbIDEsIFsgMyBdLCBdXG4gICAgICAgIEBlcSAoIM6pX180NiA9IC0+IHQyLmVxdWFscyByZXN1bHQsIG1hdGNoZXIxICksIHRydWVcbiAgICAgICAgQGVxICggzqlfXzQ3ID0gLT4gdDIuZXF1YWxzIHJlc3VsdCwgbWF0Y2hlcjIgKSwgZmFsc2VcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgdDIgPSBuZXcgVGVzdCB7IG9yZGVyZWRfc2V0czogZmFsc2UsIG9yZGVyZWRfbWFwczogZmFsc2UsIH1cbiAgICAgICAgcmVzdWx0ICAgID0gbmV3IFNldCBbIDEsIDIsIF1cbiAgICAgICAgbWF0Y2hlcjEgID0gbmV3IFNldCBbIDEsIDIsIF1cbiAgICAgICAgbWF0Y2hlcjIgID0gbmV3IFNldCBbIDEsIDMsIF1cbiAgICAgICAgQGVxICggzqlfXzQ4ID0gLT4gdDIuZXF1YWxzIHJlc3VsdCwgbWF0Y2hlcjEgKSwgdHJ1ZVxuICAgICAgICBAZXEgKCDOqV9fNDkgPSAtPiB0Mi5lcXVhbHMgcmVzdWx0LCBtYXRjaGVyMiApLCBmYWxzZSAjIyMgISEhISEhISEhISEhISEhISEhISEhISEhISEhISAjIyNcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgdDIgPSBuZXcgVGVzdCB7IG9yZGVyZWRfc2V0czogZmFsc2UsIG9yZGVyZWRfbWFwczogZmFsc2UsIH1cbiAgICAgICAgcmVzdWx0ICAgID0gbmV3IFNldCBbIDEsIFsgMiBdLCBdXG4gICAgICAgIG1hdGNoZXIxICA9IG5ldyBTZXQgWyAxLCBbIDIgXSwgXVxuICAgICAgICBtYXRjaGVyMiAgPSBuZXcgU2V0IFsgMSwgWyAzIF0sIF1cbiAgICAgICAgQGVxICggzqlfXzUwID0gLT4gdDIuZXF1YWxzIHJlc3VsdCwgbWF0Y2hlcjEgKSwgdHJ1ZVxuICAgICAgICBAZXEgKCDOqV9fNTEgPSAtPiB0Mi5lcXVhbHMgcmVzdWx0LCBtYXRjaGVyMiApLCBmYWxzZSAjIyMgISEhISEhISEhISEhISEhISEhISEhISEhISEhISAjIyNcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgbWFwX2VxdWFsaXR5X2J5X3ZhbHVlOiAtPlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICB0MiA9IG5ldyBUZXN0IHsgb3JkZXJlZF9zZXRzOiBmYWxzZSwgb3JkZXJlZF9tYXBzOiBmYWxzZSwgfVxuICAgICAgICB7IF90eXBlcyAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG4gICAgICAgIHJlc3VsdCAgICAgID0gbmV3IE1hcCBbIFsgJ2EnLCBbIDEsIDIsIF0sIF0sIFsgJ2InLCBbIDEsIDIsIF0sIF0sIF1cbiAgICAgICAgbWF0Y2hlcjEgICAgPSBuZXcgTWFwIFsgWyAnYScsIFsgMSwgMiwgXSwgXSwgWyAnYicsIFsgMSwgMiwgXSwgXSwgXVxuICAgICAgICBtYXRjaGVyMiAgICA9IG5ldyBNYXAgWyBbICdhJywgWyAxLCAzLCBdLCBdLCBbICdiJywgWyAxLCAzLCBdLCBdLCBdXG4gICAgICAgIEBlcSAoIM6pX181MiA9IC0+IF90eXBlcy50eXBlX29mIHJlc3VsdCAgICAgKSwgJ21hcCdcbiAgICAgICAgQGVxICggzqlfXzUzID0gLT4gdDIuZXF1YWxzIHJlc3VsdCwgbWF0Y2hlcjEgICksIHRydWVcbiAgICAgICAgQGVxICggzqlfXzU0ID0gLT4gdDIuZXF1YWxzIHJlc3VsdCwgbWF0Y2hlcjIgICksIGZhbHNlICMjIyAhISEhISEhISEhISEhISEhISEhISEhISEhISEhICMjI1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBtYXBzX2FuZF9zZXRzX2FzX3Byb3BlcnRpZXM6IC0+XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIHQyID0gbmV3IFRlc3QoKVxuICAgICAgICByZXN1bHQgICAgICA9IHsgbXlsaXN0OiAoIEFycmF5LmZyb20gJ2FiYycgKSwgfVxuICAgICAgICBtYXRjaGVyICAgICA9IHsgbXlsaXN0OiAoIEFycmF5LmZyb20gJ2FiYycgKSwgfVxuICAgICAgICBAZXEgKCDOqV9fNTUgPSAtPiB0Mi5lcXVhbHMgcmVzdWx0LCBtYXRjaGVyICksIHRydWVcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgeyBfdHlwZXMgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xuICAgICAgICB0MiA9IG5ldyBUZXN0KClcbiAgICAgICAgcmVzdWx0ICAgICAgPSB7IG15c2V0OiAoIG5ldyBTZXQgJ2FiYycgKSwgfVxuICAgICAgICBtYXRjaGVyICAgICA9IHsgbXlzZXQ6ICggbmV3IFNldCAnYWJjJyApLCB9XG4gICAgICAgIEBlcSAoIM6pX181NiA9IC0+IHQyLmNmZy5vcmRlcmVkX3NldHMgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICAgIEBlcSAoIM6pX181NyA9IC0+IF90eXBlcy50eXBlX29mIG1hdGNoZXIubXlzZXQgICAgICksICdzZXQnXG4gICAgICAgIEBlcSAoIM6pX181OCA9IC0+IHQyLmVxdWFscyByZXN1bHQsIG1hdGNoZXIgICAgICAgICksIHRydWVcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgeyBfdHlwZXMgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xuICAgICAgICB0MiA9IG5ldyBUZXN0KClcbiAgICAgICAgcmVzdWx0ICAgICAgPSB7IG15bWFwOiAoIG5ldyBNYXAgWyBbICdhJywgMSwgXSwgWyAnYicsIDIsIF0sIF0gKSwgfVxuICAgICAgICBtYXRjaGVyICAgICA9IHsgbXltYXA6ICggbmV3IE1hcCBbIFsgJ2EnLCAxLCBdLCBbICdiJywgMiwgXSwgXSApLCB9XG4gICAgICAgIEBlcSAoIM6pX181OSA9IC0+IHQyLmNmZy5vcmRlcmVkX21hcHMgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICAgIEBlcSAoIM6pX182MCA9IC0+IF90eXBlcy50eXBlX29mIG1hdGNoZXIubXltYXAgICAgICksICdtYXAnXG4gICAgICAgIEBlcSAoIM6pX182MSA9IC0+IHQyLmVxdWFscyByZXN1bHQsIG1hdGNoZXIgICAgICAgICksIHRydWVcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgY2FuX2NvbmZpZ3VyZV9lcV9vZl9wbHVzbWludXNfemVybzogLT5cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgdDIgPSBuZXcgVGVzdCB7IHNpZ25lZF96ZXJvOiBmYWxzZSwgfVxuICAgICAgICBAZXEgKCDOqV9fNjIgPSAtPiB0Mi5lcXVhbHMgKzAsICswICksIHRydWVcbiAgICAgICAgQGVxICggzqlfXzYzID0gLT4gdDIuZXF1YWxzIC0wLCAtMCApLCB0cnVlXG4gICAgICAgIEBlcSAoIM6pX182NCA9IC0+IHQyLmVxdWFscyArMCwgLTAgKSwgdHJ1ZVxuICAgICAgICBAZXEgKCDOqV9fNjUgPSAtPiB0Mi5lcXVhbHMgLTAsICswICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgdDIgPSBuZXcgVGVzdCB7IHNpZ25lZF96ZXJvOiB0cnVlLCB9XG4gICAgICAgIEBlcSAoIM6pX182NiA9IC0+IHQyLmVxdWFscyArMCwgKzAgKSwgdHJ1ZVxuICAgICAgICBAZXEgKCDOqV9fNjcgPSAtPiB0Mi5lcXVhbHMgLTAsIC0wICksIHRydWVcbiAgICAgICAgQGVxICggzqlfXzY4ID0gLT4gdDIuZXF1YWxzICswLCAtMCApLCBmYWxzZVxuICAgICAgICBAZXEgKCDOqV9fNjkgPSAtPiB0Mi5lcXVhbHMgLTAsICswICksIGZhbHNlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGNhbl9jb25maWd1cmVfb3JkZXJlZF9vYmplY3RzOiAtPlxuICAgICAgYSA9IDEyM1xuICAgICAgYiA9IDQ1NlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICB0MiA9IG5ldyBUZXN0IHsgb3JkZXJlZF9vYmplY3RzOiBmYWxzZSwgfVxuICAgICAgICBAZXEgKCDOqV9fNzAgPSAtPiB0Mi5lcXVhbHMgeyBhLCBiLCB9LCB7IGEsIGIsIH0gKSwgdHJ1ZVxuICAgICAgICBAZXEgKCDOqV9fNzEgPSAtPiB0Mi5lcXVhbHMgeyBhLCBiLCB9LCB7IGIsIGEsIH0gKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICB0MiA9IG5ldyBUZXN0IHsgb3JkZXJlZF9vYmplY3RzOiB0cnVlLCB9XG4gICAgICAgIEBlcSAoIM6pX183MiA9IC0+IHQyLmVxdWFscyB7IGEsIGIsIH0sIHsgYSwgYiwgfSApLCB0cnVlXG4gICAgICAgIEBlcSAoIM6pX183MyA9IC0+IHQyLmVxdWFscyB7IGEsIGIsIH0sIHsgYiwgYSwgfSApLCBmYWxzZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBjYW5fY29uZmlndXJlX29yZGVyZWRfc2V0czogLT5cbiAgICAgIGEgPSAxMjNcbiAgICAgIGIgPSA0NTZcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgdDIgPSBuZXcgVGVzdCB7IG9yZGVyZWRfc2V0czogZmFsc2UsIH1cbiAgICAgICAgQGVxICggzqlfXzc0ID0gLT4gdDIuZXF1YWxzICggbmV3IFNldCAnYWInICksICggbmV3IFNldCAnYWInICkgKSwgdHJ1ZVxuICAgICAgICBAZXEgKCDOqV9fNzUgPSAtPiB0Mi5lcXVhbHMgKCBuZXcgU2V0ICdhYicgKSwgKCBuZXcgU2V0ICdiYScgKSApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIHQyID0gbmV3IFRlc3QgeyBvcmRlcmVkX3NldHM6IHRydWUsIH1cbiAgICAgICAgQGVxICggzqlfXzc2ID0gLT4gdDIuZXF1YWxzICggbmV3IFNldCAnYWInICksICggbmV3IFNldCAnYWInICkgKSwgdHJ1ZVxuICAgICAgICBAZXEgKCDOqV9fNzcgPSAtPiB0Mi5lcXVhbHMgKCBuZXcgU2V0ICdhYicgKSwgKCBuZXcgU2V0ICdiYScgKSApLCBmYWxzZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBjYW5fY29uZmlndXJlX29yZGVyZWRfbWFwczogLT5cbiAgICAgIGEgPSAxMjNcbiAgICAgIGIgPSA0NTZcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgdDIgPSBuZXcgVGVzdCB7IG9yZGVyZWRfbWFwczogZmFsc2UsIH1cbiAgICAgICAgQGVxICggzqlfXzc4ID0gLT4gdDIuZXF1YWxzICggbmV3IE1hcCBbIFsgJ2EnLCAxLCBdLCBbICdiJywgMiwgXSwgXSApLCAoIG5ldyBNYXAgWyBbICdhJywgMSwgXSwgWyAnYicsIDIsIF0sIF0gKSApLCB0cnVlXG4gICAgICAgIEBlcSAoIM6pX183OSA9IC0+IHQyLmVxdWFscyAoIG5ldyBNYXAgWyBbICdhJywgMSwgXSwgWyAnYicsIDIsIF0sIF0gKSwgKCBuZXcgTWFwIFsgWyAnYicsIDIsIF0sIFsgJ2EnLCAxLCBdLCBdICkgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICB0MiA9IG5ldyBUZXN0IHsgb3JkZXJlZF9tYXBzOiB0cnVlLCB9XG4gICAgICAgIEBlcSAoIM6pX184MCA9IC0+IHQyLmVxdWFscyAoIG5ldyBNYXAgWyBbICdhJywgMSwgXSwgWyAnYicsIDIsIF0sIF0gKSwgKCBuZXcgTWFwIFsgWyAnYScsIDEsIF0sIFsgJ2InLCAyLCBdLCBdICkgKSwgdHJ1ZVxuICAgICAgICBAZXEgKCDOqV9fODEgPSAtPiB0Mi5lcXVhbHMgKCBuZXcgTWFwIFsgWyAnYScsIDEsIF0sIFsgJ2InLCAyLCBdLCBdICksICggbmV3IE1hcCBbIFsgJ2InLCAyLCBdLCBbICdhJywgMSwgXSwgXSApICksIGZhbHNlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBwYXNzX2FuZF9mYWlsOiAtPlxuICAgIHQyID0gbmV3IFRlc3QoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqlfXzgyID0gLT4gdHlwZV9vZiB0Mi5wYXNzICksICdmdW5jdGlvbidcbiAgICBAZXEgKCDOqV9fODMgPSAtPiB0eXBlX29mIHQyLmZhaWwgKSwgJ2Z1bmN0aW9uJ1xuICAgIHRhc2tzID1cbiAgICAgIHBhZl9hOiAtPlxuICAgICAgICBAcGFzcyAncGFmXzEnLCBcInRoaXMgaXMgZ29vZFwiXG4gICAgICAgIEBmYWlsICdwYWZfMicsIFwidGhpcyBpcyBiYWRcIlxuICAgICAgICBAcGFzcyAncGFmXzMnXG4gICAgICAgIEBmYWlsICdwYWZfNCdcbiAgICB0Mi50ZXN0IHRhc2tzXG4gICAgdDIucmVwb3J0IHsgcHJlZml4OiBcIlRFU1QgUkVTVUxUXCIsIH1cbiAgICBAZXEgKCDOqV9fODQgPSAtPiB0Mi5zdGF0c1sgJyonICAgICAgICAgICBdLnBhc3NlcyAgKSwgMlxuICAgIEBlcSAoIM6pX184NSA9IC0+IHQyLnN0YXRzWyAncGFmX2EucGFmXzEnIF0ucGFzc2VzICApLCAxXG4gICAgQGVxICggzqlfXzg2ID0gLT4gdDIuc3RhdHNbICdwYWZfYS5wYWZfMicgXS5wYXNzZXMgICksIDBcbiAgICBAZXEgKCDOqV9fODcgPSAtPiB0Mi5zdGF0c1sgJ3BhZl9hLnBhZl8zJyBdLnBhc3NlcyAgKSwgMVxuICAgIEBlcSAoIM6pX184OCA9IC0+IHQyLnN0YXRzWyAncGFmX2EucGFmXzQnIF0ucGFzc2VzICApLCAwXG4gICAgQGVxICggzqlfXzg5ID0gLT4gdDIuc3RhdHNbICcqJyAgICAgICAgICAgXS5mYWlscyAgICksIDJcbiAgICBAZXEgKCDOqV9fOTAgPSAtPiB0Mi5zdGF0c1sgJ3BhZl9hLnBhZl8xJyBdLmZhaWxzICAgKSwgMFxuICAgIEBlcSAoIM6pX185MSA9IC0+IHQyLnN0YXRzWyAncGFmX2EucGFmXzInIF0uZmFpbHMgICApLCAxXG4gICAgQGVxICggzqlfXzkyID0gLT4gdDIuc3RhdHNbICdwYWZfYS5wYWZfMycgXS5mYWlscyAgICksIDBcbiAgICBAZXEgKCDOqV9fOTMgPSAtPiB0Mi5zdGF0c1sgJ3BhZl9hLnBhZl80JyBdLmZhaWxzICAgKSwgMVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG9uZT8oKVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYXN5bmNocm9ub3VzX3Rocm93czogLT5cbiAgICBGUyA9IHJlcXVpcmUgJ25vZGU6ZnMvcHJvbWlzZXMnXG4gICAgdDIgPSBuZXcgVGVzdCgpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmZXRjaF9maWxlc2l6ZSA9ICggcGF0aCApIC0+ICggYXdhaXQgRlMuc3RhdCBwYXRoICkuc2l6ZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBhd2FpdCBhc3luY190aHJvd3MgIFQsICggzqlfXzk0ID0gLT4gYXdhaXQgZmV0Y2hfZmlsZXNpemUgX19maWxlbmFtZSAgIClcbiAgICAjIGF3YWl0IGFzeW5jX3Rocm93cyAgVCwgKCDOqV9fOTUgPSAtPiBhd2FpdCBmZXRjaF9maWxlc2l6ZSBfX2ZpbGVuYW1lICAgKSwgXCJmb29iYXJcIlxuICAgICMgYXdhaXQgYXN5bmNfdGhyb3dzICBULCAoIM6pX185NiA9IC0+IGF3YWl0IGZldGNoX2ZpbGVzaXplIF9fZmlsZW5hbWUgICApLCAvbm8gc3VjaCBmaWxlL1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgYXdhaXQgdDIuYXN5bmNfdGhyb3dzICggzqlfXzk3ID0gLT4gYXdhaXQgZmV0Y2hfZmlsZXNpemUgJ25vc3VjaHBhdGgnICksIFwiZm9vYmFyXCJcbiAgICBhd2FpdCB0Mi5hc3luY190aHJvd3MgKCDOqV9fOTggPSAtPiBhd2FpdCBmZXRjaF9maWxlc2l6ZSAnbm9zdWNocGF0aCcgKSwgL25vIHN1Y2ggZmlsZS9cbiAgICBhd2FpdCB0Mi5hc3luY190aHJvd3MgKCDOqV9fOTkgPSAtPiBhd2FpdCBmZXRjaF9maWxlc2l6ZSAnbm9zdWNocGF0aCcgKVxuICAgICMgYXdhaXQgZG8gPT5cbiAgICAjICAgYXdhaXQgYXN5bmNfdGhyb3dzICggzqlfMTAwID0gLT5cbiAgICAjICAgICBhd2FpdCB0Mi5hc3luY190aHJvd3MgKCDOqV8xMDEgPSAtPiBhd2FpdCBmZXRjaF9maWxlc2l6ZSAnbm9zdWNocGF0aCcgKSwgXCJmb29iYXJcIlxuICAgICMgICAgICksIC9ubyBzdWNoIGZpbGUgLiogZG9lc24ndCBtYXRjaCAnZm9vYmFyJy9cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgYXdhaXQgYXN5bmNfdGhyb3dzICBULCAoIM6pXzEwMiA9IC0+IGF3YWl0IGZldGNoX2ZpbGVzaXplICdub3N1Y2hwYXRoJyApXG4gICAgIyBhd2FpdCBhc3luY190aHJvd3MgIFQsICggzqlfMTAzID0gLT4gYXdhaXQgZmV0Y2hfZmlsZXNpemUgJ25vc3VjaHBhdGgnICksIC9ubyBzdWNoIGZpbGUvXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkb25lPygpXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBhc3luY2hyb25vdXNfZXJyb3JzOiAtPlxuICAgIEZTID0gcmVxdWlyZSAnbm9kZTpmcy9wcm9taXNlcydcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGZldGNoX2ZpbGVzaXplID0gKCBwYXRoICkgLT4gKCBhd2FpdCBGUy5zdGF0IHBhdGggKS5zaXplXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwcm9kdWNlX2ZpbGVzaXplID0gKCBwYXRoICkgPT5cbiAgICAgIHRyeVxuICAgICAgICBmaWxlc2l6ZSAgPSBhd2FpdCBmZXRjaF9maWxlc2l6ZSBwYXRoXG4gICAgICAgIHVyZ2UgXCLOqV8xMDRcIiwgeyBmaWxlc2l6ZSwgfVxuICAgICAgY2F0Y2ggZXJyb3JcbiAgICAgICAgd2FybiBcIs6pXzEwNVwiLCBlcnJvclxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGVjaG8gJy0tLS0tLS0tLS0tLS0tLS0tLS0nXG4gICAgIyB0cnkgYXdhaXQgcHJvZHVjZV9maWxlc2l6ZSAnbm9zdWNocGF0aCcgY2F0Y2ggZXJyb3IgdGhlbiB3YXJuICfOqV8xMDYnLCBlcnJvci5tZXNzYWdlXG4gICAgYXdhaXQgcHJvZHVjZV9maWxlc2l6ZSAnbm9zdWNocGF0aCdcbiAgICBlY2hvICctLS0tLS0tLS0tLS0tLS0tLS0tJ1xuICAgIGF3YWl0IHByb2R1Y2VfZmlsZXNpemUgX19maWxlbmFtZVxuICAgIGVjaG8gJy0tLS0tLS0tLS0tLS0tLS0tLS0nXG4gICAgIyBhd2FpdCBhc3luY190aHJvd3MgKCDOqV8xMDcgPSAtPiBhd2FpdCBmZXRjaF9maWxlc2l6ZSBfX2ZpbGVuYW1lICksICc/Pz8nXG4gICAgYXdhaXQgQGFzeW5jX3Rocm93cyAoIM6pXzEwOCA9IC0+IGF3YWl0IGZldGNoX2ZpbGVzaXplICdub3N1Y2hwYXRoJyApLCAvbm8gc3VjaCBmaWxlL1xuICAgIGVjaG8gJy0tLS0tLS0tLS0tLS0tLS0tLS0nXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkb25lPygpXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB0ZXN0X2NmZzogLT5cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICB0MiA9IG5ldyBUZXN0KClcbiAgICAgIEBlcSAoIM6pXzEwOSA9IC0+IE9iamVjdC5pc0Zyb3plbiB0Mi5jZmcgICksIHRydWVcbiAgICAgIEBlcSAoIM6pXzExMCA9IC0+IHQyLmNmZy5hdXRvX3Jlc2V0ICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqV8xMTEgPSAtPiB0Mi5jZmcuc2hvd19yZXBvcnQgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqV8xMTIgPSAtPiB0Mi5jZmcuc2hvd19yZXN1bHRzICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqV8xMTMgPSAtPiB0Mi5jZmcuc2hvd19mYWlscyAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqV8xMTQgPSAtPiB0Mi5jZmcuc2hvd19wYXNzZXMgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqV8xMTUgPSAtPiB0Mi5jZmcudGhyb3dfb25fZXJyb3IgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlfMTE2ID0gLT4gdDIuY2ZnLnRocm93X29uX2ZhaWwgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6pXzExNyA9IC0+IHQyLmNmZy5tZXNzYWdlX3dpZHRoICAgICksIDMwMFxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICB0MiA9IG5ldyBUZXN0IHt9XG4gICAgICBAZXEgKCDOqV8xMTggPSAtPiBPYmplY3QuaXNGcm96ZW4gdDIuY2ZnICApLCB0cnVlXG4gICAgICBAZXEgKCDOqV8xMTkgPSAtPiB0Mi5jZmcuYXV0b19yZXNldCAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlfMTIwID0gLT4gdDIuY2ZnLnNob3dfcmVwb3J0ICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlfMTIxID0gLT4gdDIuY2ZnLnNob3dfcmVzdWx0cyAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlfMTIyID0gLT4gdDIuY2ZnLnNob3dfZmFpbHMgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlfMTIzID0gLT4gdDIuY2ZnLnNob3dfcGFzc2VzICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlfMTI0ID0gLT4gdDIuY2ZnLnRocm93X29uX2Vycm9yICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6pXzEyNSA9IC0+IHQyLmNmZy50aHJvd19vbl9mYWlsICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqV8xMjYgPSAtPiB0Mi5jZmcubWVzc2FnZV93aWR0aCAgICApLCAzMDBcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgdDIgPSBuZXcgVGVzdCB7IG1lc3NhZ2Vfd2lkdGg6IDMwLCB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgfVxuICAgICAgQGVxICggzqlfMTI3ID0gLT4gT2JqZWN0LmlzRnJvemVuIHQyLmNmZyAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlfMTI4ID0gLT4gdDIuY2ZnLmF1dG9fcmVzZXQgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6pXzEyOSA9IC0+IHQyLmNmZy5zaG93X3JlcG9ydCAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pXzEzMCA9IC0+IHQyLmNmZy5zaG93X3Jlc3VsdHMgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pXzEzMSA9IC0+IHQyLmNmZy5zaG93X2ZhaWxzICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pXzEzMiA9IC0+IHQyLmNmZy5zaG93X3Bhc3NlcyAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pXzEzMyA9IC0+IHQyLmNmZy50aHJvd19vbl9lcnJvciAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pXzEzNCA9IC0+IHQyLmNmZy50aHJvd19vbl9mYWlsICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqV8xMzUgPSAtPiB0Mi5jZmcubWVzc2FnZV93aWR0aCAgICApLCAzMFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNhbl90aHJvd19vbl9mYWlsOiAtPlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgICMjIyBlbnN1cmUgdGhhdCBgVGVzdGAgaW5zdGFuY2UgY29tcGxhaW5zIHdoZW4gbm8gZXJyb3IgaXMgdGhyb3duIGluc2lkZSBhIGB0aHJvd3MoKWAgY2hlY2s6ICMjI1xuICAgICAgdDIgPSBuZXcgVGVzdCB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgc2hvd19yZXBvcnQ6IGZhbHNlLCBwcmVmaXg6ICcqKlQyXzEqKicsIH1cbiAgICAgIHQyLnRlc3QgY3RvZl8xOiAtPlxuICAgICAgICBAdGhyb3dzICggY3RvZl8yID0gLT4gMzIgKSwgL2V4cGVjdGVkIGFuIGVycm9yL1xuICAgICAgQGVxICggzqlfMTM2ID0gLT4gdDIuc3RhdHMgICAgKSwgeyAnKic6IHsgcGFzc2VzOiAwLCBmYWlsczogMSB9LCAnY3RvZl8xLmN0b2ZfMic6IHsgcGFzc2VzOiAwLCBmYWlsczogMSB9IH1cbiAgICAgIEBlcSAoIM6pXzEzNyA9IC0+IHQyLndhcm5pbmdzICksIHsgJ2N0b2ZfMS5jdG9mXzInOiBbICcobm9lcnIpIGV4cGVjdGVkIGFuIGVycm9yIGJ1dCBub25lIHdhcyB0aHJvd24nIF0gfVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICB0MiA9IG5ldyBUZXN0IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCB0aHJvd19vbl9mYWlsOiB0cnVlLCBzaG93X3JlcG9ydDogZmFsc2UsIHByZWZpeDogJyoqVDJfMioqJywgfVxuICAgICAgQHRocm93cyAoIGN0b2ZfNSA9IC0+IHQyLmVxICggY3RvZl82ID0gLT4gMTQgKSwgMTUgKSwgL25lcTovXG4gICAgICAjIEB0aHJvd3MgKCDOqV8xMzggPSAtPiB0Mi5lcSAoIHh5MSA9IC0+IDE0ICksIDE1ICksIC8tLS0vXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFRUMzpcbiAgICBhc3N1bXB0aW9uczogKCBjdHggKSAtPlxuICAgICAgdDIgPSBuZXcgVGVzdCB7IHNob3dfcmVwb3J0OiBmYWxzZSwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBhd2FpdCB0Mi5hc3luY190ZXN0IGFzc3VtcHRpb25zX3Rhc2s6IC0+XG4gICAgICAgIGxpbmUgPSAnLScucmVwZWF0IDEwOFxuICAgICAgICBlY2hvIGxpbmU7IEBlcSAoIGRhdF8xID0gLT4gMzIgKSwgMzJcbiAgICAgICAgZWNobyBsaW5lOyBAZXEgKCBkYXRfMiA9IC0+IDMyICksIDMzXG4gICAgICAgIGVjaG8gbGluZTsgQGVxICggZGF0XzMgPSAtPiB0aHJvdyBuZXcgRXJyb3IgXCJmaW5lXCIgKVxuICAgICAgICBlY2hvIGxpbmU7IEBwYXNzICdkYXRfNCcsICd0ZXN0JywgXCJhbGwgZmluZVwiXG4gICAgICAgIGVjaG8gbGluZTsgQHBhc3MgJ2RhdF81JywgJ3Rlc3QnXG4gICAgICAgIGVjaG8gbGluZTsgQGZhaWwgJ2RhdF82JywgJ3Rlc3QnLCBcImFsbCBmaW5lXCJcbiAgICAgICAgZWNobyBsaW5lOyBAZmFpbCAnZGF0XzcnLCAndGVzdCdcbiAgICAgICAgZWNobyBsaW5lOyBAdGhyb3dzICggZGF0XzggPSAtPiAnb29wcycgKSwgL2ZpbmUvXG4gICAgICAgIGVjaG8gbGluZTsgQHRocm93cyAoIGRhdF85ID0gLT4gdGhyb3cgbmV3IEVycm9yIFwidGhpcyBpcyBhY3R1YWxseSBmaW5lIDFcIiApLCAvZmluZS9cbiAgICAgICAgZWNobyBsaW5lOyBAdGhyb3dzICggZGF0XzEwID0gLT4gdGhyb3cgbmV3IEVycm9yIFwidGhpcyBpcyBhY3R1YWxseSBmaW5lIDJcIiApLCAvd2hhdC9cbiAgICAgICAgZWNobyBsaW5lOyBAdGhyb3dzICggZGF0XzExID0gLT4gdGhyb3cgbmV3IEVycm9yIFwidGhpcyBpcyBhY3R1YWxseSBmaW5lIDNcIiApLCBcIm5vdCB0aGlzXCJcbiAgICAgICAgZWNobyBsaW5lOyBhd2FpdCBAYXN5bmNfdGhyb3dzICggZGF0XzEyID0gLT4gdGhyb3cgbmV3IEVycm9yIFwidGhpcyBpcyBhY3R1YWxseSBmaW5lIDRcIiApXG4gICAgICAgIGVjaG8gbGluZTsgYXdhaXQgQGFzeW5jX3Rocm93cyAoIGRhdF8xMyA9IC0+IHRocm93IG5ldyBFcnJvciBcInRoaXMgaXMgYWN0dWFsbHkgZmluZSA1XCIgKSwgL2ZpbmUvXG4gICAgICAgIGVjaG8gbGluZTsgYXdhaXQgQGFzeW5jX3Rocm93cyAoIGRhdF8xNCA9IC0+IHRocm93IG5ldyBFcnJvciBcInRoaXMgaXMgYWN0dWFsbHkgZmluZSA2XCIgKSwgL25vdCB0aGlzL1xuICAgICAgICBlY2hvIGxpbmU7IGF3YWl0IEBhc3luY190aHJvd3MgKCBkYXRfMTUgPSAtPiBhZnRlciAwLjEsID0+IGF3YWl0IHRocm93IG5ldyBFcnJvciBcInRoaXMgaXMgYWN0dWFsbHkgZmluZSA3XCIgKSwgL2ZpbmUvXG4gICAgICAgIGVjaG8gbGluZTsgYXdhaXQgQGFzeW5jX3Rocm93cyAoIGRhdF8xNiA9IC0+IGFmdGVyIDAuMSwgPT4gYXdhaXQgdGhyb3cgbmV3IEVycm9yIFwidGhpcyBpcyBhY3R1YWxseSBmaW5lIDlcIiApLCAvd2hhdC9cbiAgICAgICAgZWNobyBsaW5lOyBhd2FpdCBAYXN5bmNfdGhyb3dzICggZGF0XzE3ID0gLT4gYWZ0ZXIgMC4xLCA9PiBhd2FpdCB0aHJvdyBuZXcgRXJyb3IgXCJ0aGlzIGlzIGFjdHVhbGx5IGZpbmUgMTBcIiApLCBcIm5vdCB0aGlzXCJcbiAgICAgICAgZWNobyBsaW5lOyBhd2FpdCBAYXN5bmNfZXEgKCBkYXRfMTggPSAtPiBhZnRlciAwLCA9PiBhd2FpdCAzMiApLCAzMlxuICAgICAgICBlY2hvIGxpbmU7IGF3YWl0IEBhc3luY19lcSAoIGRhdF8xOSA9IC0+IGFmdGVyIDAsID0+IGF3YWl0IDMyICksIDMzXG4gICAgICAgIGVjaG8gbGluZTsgYXdhaXQgQGFzeW5jX2VxICggZGF0XzIwID0gLT4gYWZ0ZXIgMCwgPT4gYXdhaXQgdGhyb3cgbmV3IEVycm9yIFwiZmluZVwiIClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlfMTM5ID0gLT4gdDIuc3RhdHNbICcqJyAgICAgICAgICAgICAgICAgICAgICAgXSApLCB7IHBhc3NlczogOCwgZmFpbHM6IDEyIH1cbiAgICAgIEBlcSAoIM6pXzE0MCA9IC0+IHQyLnN0YXRzWyAnYXNzdW1wdGlvbnNfdGFzay5kYXRfMScgIF0gKSwgeyBwYXNzZXM6IDEsIGZhaWxzOiAwIH1cbiAgICAgIEBlcSAoIM6pXzE0MSA9IC0+IHQyLnN0YXRzWyAnYXNzdW1wdGlvbnNfdGFzay5kYXRfMicgIF0gKSwgeyBwYXNzZXM6IDAsIGZhaWxzOiAxIH1cbiAgICAgIEBlcSAoIM6pXzE0MiA9IC0+IHQyLnN0YXRzWyAnYXNzdW1wdGlvbnNfdGFzay5kYXRfMycgIF0gKSwgeyBwYXNzZXM6IDAsIGZhaWxzOiAxIH1cbiAgICAgIEBlcSAoIM6pXzE0MyA9IC0+IHQyLnN0YXRzWyAnYXNzdW1wdGlvbnNfdGFzay5kYXRfNCcgIF0gKSwgeyBwYXNzZXM6IDEsIGZhaWxzOiAwIH1cbiAgICAgIEBlcSAoIM6pXzE0NCA9IC0+IHQyLnN0YXRzWyAnYXNzdW1wdGlvbnNfdGFzay5kYXRfNScgIF0gKSwgeyBwYXNzZXM6IDEsIGZhaWxzOiAwIH1cbiAgICAgIEBlcSAoIM6pXzE0NSA9IC0+IHQyLnN0YXRzWyAnYXNzdW1wdGlvbnNfdGFzay5kYXRfNicgIF0gKSwgeyBwYXNzZXM6IDAsIGZhaWxzOiAxIH1cbiAgICAgIEBlcSAoIM6pXzE0NiA9IC0+IHQyLnN0YXRzWyAnYXNzdW1wdGlvbnNfdGFzay5kYXRfNycgIF0gKSwgeyBwYXNzZXM6IDAsIGZhaWxzOiAxIH1cbiAgICAgIEBlcSAoIM6pXzE0NyA9IC0+IHQyLnN0YXRzWyAnYXNzdW1wdGlvbnNfdGFzay5kYXRfOCcgIF0gKSwgeyBwYXNzZXM6IDAsIGZhaWxzOiAxIH1cbiAgICAgIEBlcSAoIM6pXzE0OCA9IC0+IHQyLnN0YXRzWyAnYXNzdW1wdGlvbnNfdGFzay5kYXRfOScgIF0gKSwgeyBwYXNzZXM6IDEsIGZhaWxzOiAwIH1cbiAgICAgIEBlcSAoIM6pXzE0OSA9IC0+IHQyLnN0YXRzWyAnYXNzdW1wdGlvbnNfdGFzay5kYXRfMTAnIF0gKSwgeyBwYXNzZXM6IDAsIGZhaWxzOiAxIH1cbiAgICAgIEBlcSAoIM6pXzE1MCA9IC0+IHQyLnN0YXRzWyAnYXNzdW1wdGlvbnNfdGFzay5kYXRfMTEnIF0gKSwgeyBwYXNzZXM6IDAsIGZhaWxzOiAxIH1cbiAgICAgIEBlcSAoIM6pXzE1MSA9IC0+IHQyLnN0YXRzWyAnYXNzdW1wdGlvbnNfdGFzay5kYXRfMTInIF0gKSwgeyBwYXNzZXM6IDEsIGZhaWxzOiAwIH1cbiAgICAgIEBlcSAoIM6pXzE1MiA9IC0+IHQyLnN0YXRzWyAnYXNzdW1wdGlvbnNfdGFzay5kYXRfMTMnIF0gKSwgeyBwYXNzZXM6IDEsIGZhaWxzOiAwIH1cbiAgICAgIEBlcSAoIM6pXzE1MyA9IC0+IHQyLnN0YXRzWyAnYXNzdW1wdGlvbnNfdGFzay5kYXRfMTQnIF0gKSwgeyBwYXNzZXM6IDAsIGZhaWxzOiAxIH1cbiAgICAgIEBlcSAoIM6pXzE1NCA9IC0+IHQyLnN0YXRzWyAnYXNzdW1wdGlvbnNfdGFzay5kYXRfMTUnIF0gKSwgeyBwYXNzZXM6IDEsIGZhaWxzOiAwIH1cbiAgICAgIEBlcSAoIM6pXzE1NSA9IC0+IHQyLnN0YXRzWyAnYXNzdW1wdGlvbnNfdGFzay5kYXRfMTYnIF0gKSwgeyBwYXNzZXM6IDAsIGZhaWxzOiAxIH1cbiAgICAgIEBlcSAoIM6pXzE1NiA9IC0+IHQyLnN0YXRzWyAnYXNzdW1wdGlvbnNfdGFzay5kYXRfMTcnIF0gKSwgeyBwYXNzZXM6IDAsIGZhaWxzOiAxIH1cbiAgICAgIEBlcSAoIM6pXzE1NyA9IC0+IHQyLnN0YXRzWyAnYXNzdW1wdGlvbnNfdGFzay5kYXRfMTgnIF0gKSwgeyBwYXNzZXM6IDEsIGZhaWxzOiAwIH1cbiAgICAgIEBlcSAoIM6pXzE1OCA9IC0+IHQyLnN0YXRzWyAnYXNzdW1wdGlvbnNfdGFzay5kYXRfMTknIF0gKSwgeyBwYXNzZXM6IDAsIGZhaWxzOiAxIH1cbiAgICAgIEBlcSAoIM6pXzE1OSA9IC0+IHQyLnN0YXRzWyAnYXNzdW1wdGlvbnNfdGFzay5kYXRfMjAnIF0gKSwgeyBwYXNzZXM6IDAsIGZhaWxzOiAxIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRlbW9fZm9yX3JlYWRtZTogLT5cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIG15X21hdGhfbGliID1cbiAgICAgIG11bDogKCBhLCBiICkgLT4gYSAqIGJcbiAgICAgIGFkZDogKCBhLCBiICkgLT4gYSArIGJcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHRhc2tncm91cF9BID1cbiAgICAgIHRlc3RfMTogLT5cbiAgICAgIGJldHRlcl91c2VfbWVhbmluZ2Z1bF9uYW1lczogLT5cbiAgICAgICAgQGVxICggdF9fMjAgPSAtPiBteV9tYXRoX2xpYi5tdWwgMywgNCApLCAxMlxuICAgICAgICBAZXEgKCB0X18yMSA9IC0+IG15X21hdGhfbGliLmFkZCAzLCA0ICksIDdcbiAgICAgIHN1Ymdyb3VwOlxuICAgICAgICBmb286IC0+XG4gICAgICAgIGJhcjogLT5cbiAgICB0YXNrZ3JvdXBfQiA9IHt9XG4gICAgKCBuZXcgVGVzdCgpICkudGVzdCB7IHRhc2tncm91cF9BLCB0YXNrZ3JvdXBfQiwgfVxuXG5cblxuIyBAZm9vYmFyID0gLT5cbiMgICBkZWJ1ZyAnzqlfMTYwJ1xuIyAgIEBlcSAoIM6pXzE2MSA9IC0+IDEgKSwgMVxuIyAgIHJldHVybiBudWxsXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGNmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsIH1cbiAgY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsIH1cbiAgYXdhaXQgKCBuZXcgVGVzdCBjZmcgKS5hc3luY190ZXN0IHsgVFQ6IEBUVCwgfVxuICAgICMgSW50ZXJmYWNlOiAgQFRULkludGVyZmFjZSxcbiAgICAjIEVxdWFsaXR5OiAgIEBUVC5FcXVhbGl0eSxcbiAgICAjIGVxX3dvcmtzX2NvcnJlY3RseV93aXRoX3plcm86ICAgQFRULkVxdWFsaXR5LmVxX3dvcmtzX2NvcnJlY3RseV93aXRoX3plcm8sXG4gICAgIyBzZXRfZXF1YWxpdHlfYnlfdmFsdWU6IEBUVC5FcXVhbGl0eS5zZXRfZXF1YWxpdHlfYnlfdmFsdWUsXG4gICAgIyB9XG4gICMgYXdhaXQgKCBuZXcgVGVzdCBjZmcgKS5hc3luY190ZXN0IEBUVFxuICAjICggbmV3IFRlc3QgY2ZnICkudGVzdCBAVFQucGFzc19hbmRfZmFpbFxuICByZXR1cm4gbnVsbFxuXG4iXX0=
