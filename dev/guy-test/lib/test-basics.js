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
  SFMODULES = require('../../../apps/bricabrac-single-file-modules');

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFNEc7RUFBQTtFQUM1RztBQUQ0RyxNQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsU0FBQSxFQUFBLElBQUEsRUFBQSxTQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUE7O0VBRzVHLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsdUJBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxPQUhGLEVBSUUsR0FKRixDQUFBLEdBSTRCLEdBQUcsQ0FBQyxHQUpoQzs7RUFLQSxDQUFBLENBQUUsS0FBRixDQUFBLEdBQTRCLEdBQUcsQ0FBQyxLQUFoQyxFQWxCNEc7OztFQW9CNUcsSUFBQSxHQUE0QixPQUFBLENBQVEsMkJBQVI7O0VBQzVCLENBQUEsQ0FBRSxTQUFGLEVBQ0UsSUFERixDQUFBLEdBQzRCLElBRDVCLEVBckI0Rzs7Ozs7Ozs7Ozs7O0VBaUM1RyxTQUFBLEdBQTRCLE9BQUEsQ0FBUSw2Q0FBUjs7RUFDNUIsQ0FBQSxDQUFFLE9BQUYsQ0FBQSxHQUE0QixTQUFTLENBQUMsUUFBUSxDQUFDLGVBQW5CLENBQUEsQ0FBNUIsRUFsQzRHOzs7Ozs7Ozs7RUEyQzVHLElBQUMsQ0FB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QUFRLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFBVixDQUFWLENBQUosRUFBNEMsSUFBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsS0FBQSxHQUFRLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFBVixDQUFWLENBQUosRUFBNEMsSUFBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsS0FBQSxHQUFRLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFBVixDQUFWLENBQUosRUFBNEMsS0FBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsS0FBQSxHQUFRLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFBVixDQUFWLENBQUosRUFBNEMsS0FBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsS0FBQSxHQUFRLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFBVixDQUFWLENBQUosRUFBNEMsR0FBNUM7QUFDQSxlQUFPO01BWE4sQ0FBQTtNQWFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsRUFBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUE7UUFBTSxFQUFBLEdBQUssSUFBSSxJQUFKLENBQVMsQ0FBQSxDQUFUO1FBQ0wsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLEtBQUEsR0FBUSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxNQUFNLENBQUMsUUFBUCxDQUFnQixFQUFFLENBQUMsR0FBbkI7UUFBSCxDQUFWLENBQUosRUFBNEMsSUFBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsS0FBQSxHQUFRLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFBVixDQUFWLENBQUosRUFBNEMsS0FBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsS0FBQSxHQUFRLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFBVixDQUFWLENBQUosRUFBNEMsSUFBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsS0FBQSxHQUFRLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFBVixDQUFWLENBQUosRUFBNEMsSUFBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsS0FBQSxHQUFRLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFBVixDQUFWLENBQUosRUFBNEMsSUFBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsS0FBQSxHQUFRLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFBVixDQUFWLENBQUosRUFBNEMsSUFBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsS0FBQSxHQUFRLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFBVixDQUFWLENBQUosRUFBNEMsS0FBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsS0FBQSxHQUFRLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFBVixDQUFWLENBQUosRUFBNEMsS0FBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsS0FBQSxHQUFRLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFBVixDQUFWLENBQUosRUFBNEMsR0FBNUM7QUFDQSxlQUFPO01BWE4sQ0FBQTtNQWFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsRUFBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVB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RUFBZ0I7TUFBbEI7TUFDTixHQUFBLEdBQU07UUFBRSxjQUFBLEVBQWdCO01BQWxCO01BQ04sTUFBTSxDQUFFLElBQUksSUFBSixDQUFTLEdBQVQsQ0FBRixDQUFnQixDQUFDLFVBQWpCLENBQTRCO1FBQUUsRUFBQSxFQUFJLElBQUMsQ0FBQTtNQUFQLENBQTVCLEVBRlI7Ozs7Ozs7O0FBVUUsYUFBTztJQVgrQixDQUFBLElBQXhDOztBQTVoQjRHIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuJ3VzZSBzdHJpY3QnXG5cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnaW50ZXJ0eXBlL3Rlc3QtYmFzaWNzJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG57IGFmdGVyIH0gICAgICAgICAgICAgICAgID0gR1VZLmFzeW5jXG4jLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBfVE1QX3Rlc3RcbiAgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG4gICMgZXF1YWxzXG4gICMgcGFzc1xuICAjIGZhaWxcbiAgIyB0ZXN0XG4gICMgZXFcbiAgIyB0aHJvd3NcbiAgIyBhc3luY190ZXN0XG4gICMgYXN5bmNfZXFcbiAgIyBhc3luY190aHJvd3MgICAgICAgICAgfSA9IEdUTkdcbiMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNpbmdsZS1maWxlLW1vZHVsZXMnXG57IHR5cGVfb2YsICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4jIHR5cGVzICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2ludGVydHlwZSdcbiMgeyAkdHlwZV9vZjogdHlwZV9vZiwgfSAgICA9IHR5cGVzXG4jIGlzYVxuIyB0eXBlX29mXG4jICRpc2FcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBUVCA9XG5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBJbnRlcmZhY2U6XG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIG1vZHVsZV9pbnN0YW5jZV9hbmRfYXNzdW1wdGlvbnNfaGF2ZV9lcXVhbHNfbWV0aG9kOiAtPlxuICAgICAgQGVxICggzqlfX18xID0gLT4gdHlwZV9vZiBHVE5HLmVxdWFscyAgICAgICAgICAgICksICdmdW5jdGlvbidcbiAgICAgIEBlcSAoIM6pX19fMiA9IC0+IHR5cGVfb2YgKCBuZXcgVGVzdCgpICkuZXF1YWxzICApLCAnZnVuY3Rpb24nXG4gICAgICBAZXEgKCDOqV9fXzMgPSAtPiB0eXBlX29mIEBlcXVhbHMgICAgICAgICAgICAgICAgKSwgJ2Z1bmN0aW9uJ1xuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAjIGNhbl91c2VfbmFtZXNfdG9fc2VsZWN0X3Rlc3RzX2FuZF9jaGVja3M6XG4gICAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgICBmZmZfMTogLT5cbiAgICAjICAgICBteXRlc3QgPSBuZXcgVGVzdCgpXG4gICAgIyAgICAgdGFza3MgPVxuICAgICMgICAgICAgdDE6IC0+XG4gICAgIyAgICAgICAgIEBlcSAoIG15dGVzdF9jaGVja18xID0gLT4gQGVxdWFscyAxLCAxICksIHRydWVcbiAgICAjICAgICAgICAgQGVxICggbXl0ZXN0X2NoZWNrXzIgPSAtPiBAZXF1YWxzIDIsIDIgKSwgdHJ1ZVxuICAgICMgICAgICAgICBAZXEgKCBteXRlc3RfY2hlY2tfMyA9IC0+IEBlcXVhbHMgMywgMyApLCB0cnVlXG4gICAgIyAgICAgbXl0ZXN0LnRlc3QgdGFza3NcbiAgICAjICAgICBAZXEgKCDOqV9fXzQgPSAtPiBteXRlc3Quc3RhdHNbICd0MS5teXRlc3RfY2hlY2tfMScgXS5wYXNzZXMgKSwgMVxuICAgICMgICAgIEBlcSAoIM6pX19fNSA9IC0+IG15dGVzdC5zdGF0c1sgJ3QxLm15dGVzdF9jaGVja18yJyBdLnBhc3NlcyApLCAxXG4gICAgIyAgICAgQGVxICggzqlfX182ID0gLT4gbXl0ZXN0LnN0YXRzWyAndDEubXl0ZXN0X2NoZWNrXzMnIF0ucGFzc2VzICksIDFcbiAgICAjICAgICByZXR1cm4gbnVsbFxuICAgICMgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjICAgZmZmXzI6IC0+XG4gICAgIyAgICAgbXl0ZXN0ID0gbmV3IFRlc3QoKVxuICAgICMgICAgIHRhc2tzID1cbiAgICAjICAgICAgIHQxOiAtPlxuICAgICMgICAgICAgICBAZXEgKCBteXRlc3RfY2hlY2tfMSA9IC0+IEBlcXVhbHMgMSwgMSApLCB0cnVlXG4gICAgIyAgICAgICAgIEBlcSAoIG15dGVzdF9jaGVja18yID0gLT4gQGVxdWFscyAyLCAyICksIHRydWVcbiAgICAjICAgICAgICAgQGVxICggbXl0ZXN0X2NoZWNrXzMgPSAtPiBAZXF1YWxzIDMsIDMgKSwgdHJ1ZVxuICAgICMgICAgIG15dGVzdC5hZGQgdGFza3NcbiAgICAjICAgICBteXRlc3Quc2VsZWN0ICcqLm15dGVzdF9jaGVja18yJ1xuICAgICMgICAgIG15dGVzdC5kZXNlbGVjdCAnKi5teXRlc3RfY2hlY2tfMidcbiAgICAjICAgICBteXRlc3QudGVzdCgpXG4gICAgIyAgICAgQGVxICggzqlfX183ID0gLT4gbXl0ZXN0LnN0YXRzWyAndDEubXl0ZXN0X2NoZWNrXzEnIF0ucGFzc2VzICksIHVuZGVmaW5lZFxuICAgICMgICAgIEBlcSAoIM6pX19fOCA9IC0+IG15dGVzdC5zdGF0c1sgJ3QxLm15dGVzdF9jaGVja18yJyBdLnBhc3NlcyApLCAxXG4gICAgIyAgICAgQGVxICggzqlfX185ID0gLT4gbXl0ZXN0LnN0YXRzWyAndDEubXl0ZXN0X2NoZWNrXzMnIF0ucGFzc2VzICksIHVuZGVmaW5lZFxuICAgICMgICAgIHJldHVybiBudWxsXG5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBFcXVhbGl0eTpcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgYmFzaWNzOiAtPlxuICAgICAgQGVxICggzqlfXzEwICA9IC0+IEBlcXVhbHMgMS4yMzQ1NiwgMS4yMzQ1NiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pX18xMSAgPSAtPiBAZXF1YWxzIDEuMjM0NTYwMDAwMDAwMDAwMDAwMDEsIDEuMjM0NTYwMDAwMDAwMDAwMDAwMDIgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqV9fMTIgID0gLT4gQGVxdWFscyAxLjIzNDU2LCAxLjIzNDU3ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6pX18xMyAgPSAtPiBAZXF1YWxzICcxLjIzNDU2JywgJzEuMjM0NTcnICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlfXzE0ICA9IC0+IEBlcXVhbHMgJzEuMjM0NTcnLCAnMS4yMzQ1NycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pX18xNSAgPSAtPiBAZXF1YWxzIHt9LCB7fSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqV9fMTYgID0gLT4gQGVxdWFscyB7IGxzdDogWyA3LCA4LCA5LCBdfSwgeyBsc3Q6IFsgNywgOCwgOSwgXSwgfSAgICAgKSwgdHJ1ZVxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZXFfd29ya3NfY29ycmVjdGx5X3dpdGhfemVybzogLT5cbiAgICAgIGRvID0+XG4gICAgICAgIHR0ID0gbmV3IFRlc3QgeyBzaWduZWRfemVybzogZmFsc2UsIH1cbiAgICAgICAgdHQuZXEgKCBxd2N3el8xID0gLT4gKzAgICAgICksICswXG4gICAgICAgIHR0LmVxICggcXdjd3pfMiA9IC0+ICswICAgICApLCAtMFxuICAgICAgICB0dC5lcSAoIHF3Y3d6XzMgPSAtPiAtMCAgICAgKSwgKzBcbiAgICAgICAgdHQuZXEgKCBxd2N3el80ID0gLT4gLTAgICAgICksIC0wXG4gICAgICAgIHR0LmVxICggcXdjd3pfNSA9IC0+IDAgICAgICApLCAxICNcbiAgICAgICAgdHQuZXEgKCBxd2N3el82ID0gLT4gMSAgICAgICksIDFcbiAgICAgICAgdHQuZXEgKCBxd2N3el83ID0gLT4gMiAgICAgICksIDEgICAgIyBva1xuICAgICAgICB0dC5lcSAoIHF3Y3d6XzggPSAtPiAzICAgICAgKSwgMSAgICAjIG9rXG4gICAgICAgIHR0LmVxICggcXdjd3pfOSA9IC0+IDAgICAgICApLCAxMjMgI1xuICAgICAgICB0dC5lcSAoIHF3Y3d6XzEwID0gLT4gMCAgICAgKSwgSW5maW5pdHkgI1xuICAgICAgICB0dC5lcSAoIHF3Y3d6XzExID0gLT4gMCAgICAgKSwgJ2FueXRoaW5nJyAjXG4gICAgICAgIHR0LmVxICggcXdjd3pfMTIgPSAtPiAxICAgICApLCAxMjMgICMgb2tcbiAgICAgICAgdHQuZXEgKCBxd2N3el8xMyA9IC0+IDIgICAgICksIDEyMyAgIyBva1xuICAgICAgICB0dC5lcSAoIHF3Y3d6XzE0ID0gLT4gMyAgICAgKSwgMTIzICAjIG9rXG4gICAgICAgIEBlcSAoIM6pX18xNyA9IC0+IHR0LnN0YXRzLnF3Y3d6XzEgKSwgeyBwYXNzZXM6IDEsIGZhaWxzOiAwLCB9XG4gICAgICAgIEBlcSAoIM6pX18xOCA9IC0+IHR0LnN0YXRzLnF3Y3d6XzIgKSwgeyBwYXNzZXM6IDEsIGZhaWxzOiAwLCB9XG4gICAgICAgIEBlcSAoIM6pX18xOSA9IC0+IHR0LnN0YXRzLnF3Y3d6XzMgKSwgeyBwYXNzZXM6IDEsIGZhaWxzOiAwLCB9XG4gICAgICAgIEBlcSAoIM6pX18yMCA9IC0+IHR0LnN0YXRzLnF3Y3d6XzQgKSwgeyBwYXNzZXM6IDEsIGZhaWxzOiAwLCB9XG4gICAgICAgIEBlcSAoIM6pX18yMSA9IC0+IHR0LnN0YXRzLnF3Y3d6XzUgKSwgeyBwYXNzZXM6IDAsIGZhaWxzOiAxLCB9XG4gICAgICAgIEBlcSAoIM6pX18yMiA9IC0+IHR0LnN0YXRzLnF3Y3d6XzYgKSwgeyBwYXNzZXM6IDEsIGZhaWxzOiAwLCB9XG4gICAgICAgIEBlcSAoIM6pX18yMyA9IC0+IHR0LnN0YXRzLnF3Y3d6XzcgKSwgeyBwYXNzZXM6IDAsIGZhaWxzOiAxLCB9XG4gICAgICAgIEBlcSAoIM6pX18yNCA9IC0+IHR0LnN0YXRzLnF3Y3d6XzggKSwgeyBwYXNzZXM6IDAsIGZhaWxzOiAxLCB9XG4gICAgICAgIEBlcSAoIM6pX18yNSA9IC0+IHR0LnN0YXRzLnF3Y3d6XzkgKSwgeyBwYXNzZXM6IDAsIGZhaWxzOiAxLCB9XG4gICAgICAgIEBlcSAoIM6pX18yNiA9IC0+IHR0LnN0YXRzLnF3Y3d6XzEwICksIHsgcGFzc2VzOiAwLCBmYWlsczogMSwgfVxuICAgICAgICBAZXEgKCDOqV9fMjcgPSAtPiB0dC5zdGF0cy5xd2N3el8xMSApLCB7IHBhc3NlczogMCwgZmFpbHM6IDEsIH1cbiAgICAgICAgQGVxICggzqlfXzI4ID0gLT4gdHQuc3RhdHMucXdjd3pfMTIgKSwgeyBwYXNzZXM6IDAsIGZhaWxzOiAxLCB9XG4gICAgICAgIEBlcSAoIM6pX18yOSA9IC0+IHR0LnN0YXRzLnF3Y3d6XzEzICksIHsgcGFzc2VzOiAwLCBmYWlsczogMSwgfVxuICAgICAgICBAZXEgKCDOqV9fMzAgPSAtPiB0dC5zdGF0cy5xd2N3el8xNCApLCB7IHBhc3NlczogMCwgZmFpbHM6IDEsIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgdHQgPSBuZXcgVGVzdCB7IHNpZ25lZF96ZXJvOiB0cnVlLCB9XG4gICAgICAgIHR0LmVxICggcXdjd3pfMSA9IC0+ICswICAgICApLCArMFxuICAgICAgICB0dC5lcSAoIHF3Y3d6XzIgPSAtPiArMCAgICAgKSwgLTBcbiAgICAgICAgdHQuZXEgKCBxd2N3el8zID0gLT4gLTAgICAgICksICswXG4gICAgICAgIHR0LmVxICggcXdjd3pfNCA9IC0+IC0wICAgICApLCAtMFxuICAgICAgICB0dC5lcSAoIHF3Y3d6XzUgPSAtPiAwICAgICAgKSwgMSAjXG4gICAgICAgIHR0LmVxICggcXdjd3pfNiA9IC0+IDEgICAgICApLCAxXG4gICAgICAgIHR0LmVxICggcXdjd3pfNyA9IC0+IDIgICAgICApLCAxICAgICMgb2tcbiAgICAgICAgdHQuZXEgKCBxd2N3el84ID0gLT4gMyAgICAgICksIDEgICAgIyBva1xuICAgICAgICB0dC5lcSAoIHF3Y3d6XzkgPSAtPiAwICAgICAgKSwgMTIzICNcbiAgICAgICAgdHQuZXEgKCBxd2N3el8xMCA9IC0+IDAgICAgICksIEluZmluaXR5ICNcbiAgICAgICAgdHQuZXEgKCBxd2N3el8xMSA9IC0+IDAgICAgICksICdhbnl0aGluZycgI1xuICAgICAgICB0dC5lcSAoIHF3Y3d6XzEyID0gLT4gMSAgICAgKSwgMTIzICAjIG9rXG4gICAgICAgIHR0LmVxICggcXdjd3pfMTMgPSAtPiAyICAgICApLCAxMjMgICMgb2tcbiAgICAgICAgdHQuZXEgKCBxd2N3el8xNCA9IC0+IDMgICAgICksIDEyMyAgIyBva1xuICAgICAgICBAZXEgKCDOqV9fMzEgPSAtPiB0dC5zdGF0cy5xd2N3el8xICksIHsgcGFzc2VzOiAxLCBmYWlsczogMCwgfVxuICAgICAgICBAZXEgKCDOqV9fMzIgPSAtPiB0dC5zdGF0cy5xd2N3el8yICksIHsgcGFzc2VzOiAwLCBmYWlsczogMSwgfVxuICAgICAgICBAZXEgKCDOqV9fMzMgPSAtPiB0dC5zdGF0cy5xd2N3el8zICksIHsgcGFzc2VzOiAwLCBmYWlsczogMSwgfVxuICAgICAgICBAZXEgKCDOqV9fMzQgPSAtPiB0dC5zdGF0cy5xd2N3el80ICksIHsgcGFzc2VzOiAxLCBmYWlsczogMCwgfVxuICAgICAgICBAZXEgKCDOqV9fMzUgPSAtPiB0dC5zdGF0cy5xd2N3el81ICksIHsgcGFzc2VzOiAwLCBmYWlsczogMSwgfVxuICAgICAgICBAZXEgKCDOqV9fMzYgPSAtPiB0dC5zdGF0cy5xd2N3el82ICksIHsgcGFzc2VzOiAxLCBmYWlsczogMCwgfVxuICAgICAgICBAZXEgKCDOqV9fMzcgPSAtPiB0dC5zdGF0cy5xd2N3el83ICksIHsgcGFzc2VzOiAwLCBmYWlsczogMSwgfVxuICAgICAgICBAZXEgKCDOqV9fMzggPSAtPiB0dC5zdGF0cy5xd2N3el84ICksIHsgcGFzc2VzOiAwLCBmYWlsczogMSwgfVxuICAgICAgICBAZXEgKCDOqV9fMzkgPSAtPiB0dC5zdGF0cy5xd2N3el85ICksIHsgcGFzc2VzOiAwLCBmYWlsczogMSwgfVxuICAgICAgICBAZXEgKCDOqV9fNDAgPSAtPiB0dC5zdGF0cy5xd2N3el8xMCApLCB7IHBhc3NlczogMCwgZmFpbHM6IDEsIH1cbiAgICAgICAgQGVxICggzqlfXzQxID0gLT4gdHQuc3RhdHMucXdjd3pfMTEgKSwgeyBwYXNzZXM6IDAsIGZhaWxzOiAxLCB9XG4gICAgICAgIEBlcSAoIM6pX180MiA9IC0+IHR0LnN0YXRzLnF3Y3d6XzEyICksIHsgcGFzc2VzOiAwLCBmYWlsczogMSwgfVxuICAgICAgICBAZXEgKCDOqV9fNDMgPSAtPiB0dC5zdGF0cy5xd2N3el8xMyApLCB7IHBhc3NlczogMCwgZmFpbHM6IDEsIH1cbiAgICAgICAgQGVxICggzqlfXzQ0ID0gLT4gdHQuc3RhdHMucXdjd3pfMTQgKSwgeyBwYXNzZXM6IDAsIGZhaWxzOiAxLCB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBzZXRfZXF1YWxpdHlfYnlfdmFsdWU6IC0+XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIEBlcSAoIM6pX180NSA9IC0+ICdhYmMnICAgICAgICAgICAgICAgICAgICApLCAnYWJjJ1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICB0MiA9IG5ldyBUZXN0IHsgb3JkZXJlZF9zZXRzOiBmYWxzZSwgb3JkZXJlZF9tYXBzOiBmYWxzZSwgfVxuICAgICAgICByZXN1bHQgICAgPSBbIDEsIFsgMiBdLCBdXG4gICAgICAgIG1hdGNoZXIxICA9IFsgMSwgWyAyIF0sIF1cbiAgICAgICAgbWF0Y2hlcjIgID0gWyAxLCBbIDMgXSwgXVxuICAgICAgICBAZXEgKCDOqV9fNDYgPSAtPiB0Mi5lcXVhbHMgcmVzdWx0LCBtYXRjaGVyMSApLCB0cnVlXG4gICAgICAgIEBlcSAoIM6pX180NyA9IC0+IHQyLmVxdWFscyByZXN1bHQsIG1hdGNoZXIyICksIGZhbHNlXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIHQyID0gbmV3IFRlc3QgeyBvcmRlcmVkX3NldHM6IGZhbHNlLCBvcmRlcmVkX21hcHM6IGZhbHNlLCB9XG4gICAgICAgIHJlc3VsdCAgICA9IG5ldyBTZXQgWyAxLCAyLCBdXG4gICAgICAgIG1hdGNoZXIxICA9IG5ldyBTZXQgWyAxLCAyLCBdXG4gICAgICAgIG1hdGNoZXIyICA9IG5ldyBTZXQgWyAxLCAzLCBdXG4gICAgICAgIEBlcSAoIM6pX180OCA9IC0+IHQyLmVxdWFscyByZXN1bHQsIG1hdGNoZXIxICksIHRydWVcbiAgICAgICAgQGVxICggzqlfXzQ5ID0gLT4gdDIuZXF1YWxzIHJlc3VsdCwgbWF0Y2hlcjIgKSwgZmFsc2UgIyMjICEhISEhISEhISEhISEhISEhISEhISEhISEhISEgIyMjXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIHQyID0gbmV3IFRlc3QgeyBvcmRlcmVkX3NldHM6IGZhbHNlLCBvcmRlcmVkX21hcHM6IGZhbHNlLCB9XG4gICAgICAgIHJlc3VsdCAgICA9IG5ldyBTZXQgWyAxLCBbIDIgXSwgXVxuICAgICAgICBtYXRjaGVyMSAgPSBuZXcgU2V0IFsgMSwgWyAyIF0sIF1cbiAgICAgICAgbWF0Y2hlcjIgID0gbmV3IFNldCBbIDEsIFsgMyBdLCBdXG4gICAgICAgIEBlcSAoIM6pX181MCA9IC0+IHQyLmVxdWFscyByZXN1bHQsIG1hdGNoZXIxICksIHRydWVcbiAgICAgICAgQGVxICggzqlfXzUxID0gLT4gdDIuZXF1YWxzIHJlc3VsdCwgbWF0Y2hlcjIgKSwgZmFsc2UgIyMjICEhISEhISEhISEhISEhISEhISEhISEhISEhISEgIyMjXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIG1hcF9lcXVhbGl0eV9ieV92YWx1ZTogLT5cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgdDIgPSBuZXcgVGVzdCB7IG9yZGVyZWRfc2V0czogZmFsc2UsIG9yZGVyZWRfbWFwczogZmFsc2UsIH1cbiAgICAgICAgeyBfdHlwZXMgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xuICAgICAgICByZXN1bHQgICAgICA9IG5ldyBNYXAgWyBbICdhJywgWyAxLCAyLCBdLCBdLCBbICdiJywgWyAxLCAyLCBdLCBdLCBdXG4gICAgICAgIG1hdGNoZXIxICAgID0gbmV3IE1hcCBbIFsgJ2EnLCBbIDEsIDIsIF0sIF0sIFsgJ2InLCBbIDEsIDIsIF0sIF0sIF1cbiAgICAgICAgbWF0Y2hlcjIgICAgPSBuZXcgTWFwIFsgWyAnYScsIFsgMSwgMywgXSwgXSwgWyAnYicsIFsgMSwgMywgXSwgXSwgXVxuICAgICAgICBAZXEgKCDOqV9fNTIgPSAtPiBfdHlwZXMudHlwZV9vZiByZXN1bHQgICAgICksICdtYXAnXG4gICAgICAgIEBlcSAoIM6pX181MyA9IC0+IHQyLmVxdWFscyByZXN1bHQsIG1hdGNoZXIxICApLCB0cnVlXG4gICAgICAgIEBlcSAoIM6pX181NCA9IC0+IHQyLmVxdWFscyByZXN1bHQsIG1hdGNoZXIyICApLCBmYWxzZSAjIyMgISEhISEhISEhISEhISEhISEhISEhISEhISEhISAjIyNcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgbWFwc19hbmRfc2V0c19hc19wcm9wZXJ0aWVzOiAtPlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICB0MiA9IG5ldyBUZXN0KClcbiAgICAgICAgcmVzdWx0ICAgICAgPSB7IG15bGlzdDogKCBBcnJheS5mcm9tICdhYmMnICksIH1cbiAgICAgICAgbWF0Y2hlciAgICAgPSB7IG15bGlzdDogKCBBcnJheS5mcm9tICdhYmMnICksIH1cbiAgICAgICAgQGVxICggzqlfXzU1ID0gLT4gdDIuZXF1YWxzIHJlc3VsdCwgbWF0Y2hlciApLCB0cnVlXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIHsgX3R5cGVzICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbiAgICAgICAgdDIgPSBuZXcgVGVzdCgpXG4gICAgICAgIHJlc3VsdCAgICAgID0geyBteXNldDogKCBuZXcgU2V0ICdhYmMnICksIH1cbiAgICAgICAgbWF0Y2hlciAgICAgPSB7IG15c2V0OiAoIG5ldyBTZXQgJ2FiYycgKSwgfVxuICAgICAgICBAZXEgKCDOqV9fNTYgPSAtPiB0Mi5jZmcub3JkZXJlZF9zZXRzICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgICBAZXEgKCDOqV9fNTcgPSAtPiBfdHlwZXMudHlwZV9vZiBtYXRjaGVyLm15c2V0ICAgICApLCAnc2V0J1xuICAgICAgICBAZXEgKCDOqV9fNTggPSAtPiB0Mi5lcXVhbHMgcmVzdWx0LCBtYXRjaGVyICAgICAgICApLCB0cnVlXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIHsgX3R5cGVzICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbiAgICAgICAgdDIgPSBuZXcgVGVzdCgpXG4gICAgICAgIHJlc3VsdCAgICAgID0geyBteW1hcDogKCBuZXcgTWFwIFsgWyAnYScsIDEsIF0sIFsgJ2InLCAyLCBdLCBdICksIH1cbiAgICAgICAgbWF0Y2hlciAgICAgPSB7IG15bWFwOiAoIG5ldyBNYXAgWyBbICdhJywgMSwgXSwgWyAnYicsIDIsIF0sIF0gKSwgfVxuICAgICAgICBAZXEgKCDOqV9fNTkgPSAtPiB0Mi5jZmcub3JkZXJlZF9tYXBzICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgICBAZXEgKCDOqV9fNjAgPSAtPiBfdHlwZXMudHlwZV9vZiBtYXRjaGVyLm15bWFwICAgICApLCAnbWFwJ1xuICAgICAgICBAZXEgKCDOqV9fNjEgPSAtPiB0Mi5lcXVhbHMgcmVzdWx0LCBtYXRjaGVyICAgICAgICApLCB0cnVlXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGNhbl9jb25maWd1cmVfZXFfb2ZfcGx1c21pbnVzX3plcm86IC0+XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIHQyID0gbmV3IFRlc3QgeyBzaWduZWRfemVybzogZmFsc2UsIH1cbiAgICAgICAgQGVxICggzqlfXzYyID0gLT4gdDIuZXF1YWxzICswLCArMCApLCB0cnVlXG4gICAgICAgIEBlcSAoIM6pX182MyA9IC0+IHQyLmVxdWFscyAtMCwgLTAgKSwgdHJ1ZVxuICAgICAgICBAZXEgKCDOqV9fNjQgPSAtPiB0Mi5lcXVhbHMgKzAsIC0wICksIHRydWVcbiAgICAgICAgQGVxICggzqlfXzY1ID0gLT4gdDIuZXF1YWxzIC0wLCArMCApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIHQyID0gbmV3IFRlc3QgeyBzaWduZWRfemVybzogdHJ1ZSwgfVxuICAgICAgICBAZXEgKCDOqV9fNjYgPSAtPiB0Mi5lcXVhbHMgKzAsICswICksIHRydWVcbiAgICAgICAgQGVxICggzqlfXzY3ID0gLT4gdDIuZXF1YWxzIC0wLCAtMCApLCB0cnVlXG4gICAgICAgIEBlcSAoIM6pX182OCA9IC0+IHQyLmVxdWFscyArMCwgLTAgKSwgZmFsc2VcbiAgICAgICAgQGVxICggzqlfXzY5ID0gLT4gdDIuZXF1YWxzIC0wLCArMCApLCBmYWxzZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBjYW5fY29uZmlndXJlX29yZGVyZWRfb2JqZWN0czogLT5cbiAgICAgIGEgPSAxMjNcbiAgICAgIGIgPSA0NTZcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgdDIgPSBuZXcgVGVzdCB7IG9yZGVyZWRfb2JqZWN0czogZmFsc2UsIH1cbiAgICAgICAgQGVxICggzqlfXzcwID0gLT4gdDIuZXF1YWxzIHsgYSwgYiwgfSwgeyBhLCBiLCB9ICksIHRydWVcbiAgICAgICAgQGVxICggzqlfXzcxID0gLT4gdDIuZXF1YWxzIHsgYSwgYiwgfSwgeyBiLCBhLCB9ICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgdDIgPSBuZXcgVGVzdCB7IG9yZGVyZWRfb2JqZWN0czogdHJ1ZSwgfVxuICAgICAgICBAZXEgKCDOqV9fNzIgPSAtPiB0Mi5lcXVhbHMgeyBhLCBiLCB9LCB7IGEsIGIsIH0gKSwgdHJ1ZVxuICAgICAgICBAZXEgKCDOqV9fNzMgPSAtPiB0Mi5lcXVhbHMgeyBhLCBiLCB9LCB7IGIsIGEsIH0gKSwgZmFsc2VcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgY2FuX2NvbmZpZ3VyZV9vcmRlcmVkX3NldHM6IC0+XG4gICAgICBhID0gMTIzXG4gICAgICBiID0gNDU2XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIHQyID0gbmV3IFRlc3QgeyBvcmRlcmVkX3NldHM6IGZhbHNlLCB9XG4gICAgICAgIEBlcSAoIM6pX183NCA9IC0+IHQyLmVxdWFscyAoIG5ldyBTZXQgJ2FiJyApLCAoIG5ldyBTZXQgJ2FiJyApICksIHRydWVcbiAgICAgICAgQGVxICggzqlfXzc1ID0gLT4gdDIuZXF1YWxzICggbmV3IFNldCAnYWInICksICggbmV3IFNldCAnYmEnICkgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICB0MiA9IG5ldyBUZXN0IHsgb3JkZXJlZF9zZXRzOiB0cnVlLCB9XG4gICAgICAgIEBlcSAoIM6pX183NiA9IC0+IHQyLmVxdWFscyAoIG5ldyBTZXQgJ2FiJyApLCAoIG5ldyBTZXQgJ2FiJyApICksIHRydWVcbiAgICAgICAgQGVxICggzqlfXzc3ID0gLT4gdDIuZXF1YWxzICggbmV3IFNldCAnYWInICksICggbmV3IFNldCAnYmEnICkgKSwgZmFsc2VcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgY2FuX2NvbmZpZ3VyZV9vcmRlcmVkX21hcHM6IC0+XG4gICAgICBhID0gMTIzXG4gICAgICBiID0gNDU2XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIHQyID0gbmV3IFRlc3QgeyBvcmRlcmVkX21hcHM6IGZhbHNlLCB9XG4gICAgICAgIEBlcSAoIM6pX183OCA9IC0+IHQyLmVxdWFscyAoIG5ldyBNYXAgWyBbICdhJywgMSwgXSwgWyAnYicsIDIsIF0sIF0gKSwgKCBuZXcgTWFwIFsgWyAnYScsIDEsIF0sIFsgJ2InLCAyLCBdLCBdICkgKSwgdHJ1ZVxuICAgICAgICBAZXEgKCDOqV9fNzkgPSAtPiB0Mi5lcXVhbHMgKCBuZXcgTWFwIFsgWyAnYScsIDEsIF0sIFsgJ2InLCAyLCBdLCBdICksICggbmV3IE1hcCBbIFsgJ2InLCAyLCBdLCBbICdhJywgMSwgXSwgXSApICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgdDIgPSBuZXcgVGVzdCB7IG9yZGVyZWRfbWFwczogdHJ1ZSwgfVxuICAgICAgICBAZXEgKCDOqV9fODAgPSAtPiB0Mi5lcXVhbHMgKCBuZXcgTWFwIFsgWyAnYScsIDEsIF0sIFsgJ2InLCAyLCBdLCBdICksICggbmV3IE1hcCBbIFsgJ2EnLCAxLCBdLCBbICdiJywgMiwgXSwgXSApICksIHRydWVcbiAgICAgICAgQGVxICggzqlfXzgxID0gLT4gdDIuZXF1YWxzICggbmV3IE1hcCBbIFsgJ2EnLCAxLCBdLCBbICdiJywgMiwgXSwgXSApLCAoIG5ldyBNYXAgWyBbICdiJywgMiwgXSwgWyAnYScsIDEsIF0sIF0gKSApLCBmYWxzZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcGFzc19hbmRfZmFpbDogLT5cbiAgICB0MiA9IG5ldyBUZXN0KClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAoIM6pX184MiA9IC0+IHR5cGVfb2YgdDIucGFzcyApLCAnZnVuY3Rpb24nXG4gICAgQGVxICggzqlfXzgzID0gLT4gdHlwZV9vZiB0Mi5mYWlsICksICdmdW5jdGlvbidcbiAgICB0YXNrcyA9XG4gICAgICBwYWZfYTogLT5cbiAgICAgICAgQHBhc3MgJ3BhZl8xJywgXCJ0aGlzIGlzIGdvb2RcIlxuICAgICAgICBAZmFpbCAncGFmXzInLCBcInRoaXMgaXMgYmFkXCJcbiAgICAgICAgQHBhc3MgJ3BhZl8zJ1xuICAgICAgICBAZmFpbCAncGFmXzQnXG4gICAgdDIudGVzdCB0YXNrc1xuICAgIHQyLnJlcG9ydCB7IHByZWZpeDogXCJURVNUIFJFU1VMVFwiLCB9XG4gICAgQGVxICggzqlfXzg0ID0gLT4gdDIuc3RhdHNbICcqJyAgICAgICAgICAgXS5wYXNzZXMgICksIDJcbiAgICBAZXEgKCDOqV9fODUgPSAtPiB0Mi5zdGF0c1sgJ3BhZl9hLnBhZl8xJyBdLnBhc3NlcyAgKSwgMVxuICAgIEBlcSAoIM6pX184NiA9IC0+IHQyLnN0YXRzWyAncGFmX2EucGFmXzInIF0ucGFzc2VzICApLCAwXG4gICAgQGVxICggzqlfXzg3ID0gLT4gdDIuc3RhdHNbICdwYWZfYS5wYWZfMycgXS5wYXNzZXMgICksIDFcbiAgICBAZXEgKCDOqV9fODggPSAtPiB0Mi5zdGF0c1sgJ3BhZl9hLnBhZl80JyBdLnBhc3NlcyAgKSwgMFxuICAgIEBlcSAoIM6pX184OSA9IC0+IHQyLnN0YXRzWyAnKicgICAgICAgICAgIF0uZmFpbHMgICApLCAyXG4gICAgQGVxICggzqlfXzkwID0gLT4gdDIuc3RhdHNbICdwYWZfYS5wYWZfMScgXS5mYWlscyAgICksIDBcbiAgICBAZXEgKCDOqV9fOTEgPSAtPiB0Mi5zdGF0c1sgJ3BhZl9hLnBhZl8yJyBdLmZhaWxzICAgKSwgMVxuICAgIEBlcSAoIM6pX185MiA9IC0+IHQyLnN0YXRzWyAncGFmX2EucGFmXzMnIF0uZmFpbHMgICApLCAwXG4gICAgQGVxICggzqlfXzkzID0gLT4gdDIuc3RhdHNbICdwYWZfYS5wYWZfNCcgXS5mYWlscyAgICksIDFcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvbmU/KClcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGFzeW5jaHJvbm91c190aHJvd3M6IC0+XG4gICAgRlMgPSByZXF1aXJlICdub2RlOmZzL3Byb21pc2VzJ1xuICAgIHQyID0gbmV3IFRlc3QoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZmV0Y2hfZmlsZXNpemUgPSAoIHBhdGggKSAtPiAoIGF3YWl0IEZTLnN0YXQgcGF0aCApLnNpemVcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgYXdhaXQgYXN5bmNfdGhyb3dzICBULCAoIM6pX185NCA9IC0+IGF3YWl0IGZldGNoX2ZpbGVzaXplIF9fZmlsZW5hbWUgICApXG4gICAgIyBhd2FpdCBhc3luY190aHJvd3MgIFQsICggzqlfXzk1ID0gLT4gYXdhaXQgZmV0Y2hfZmlsZXNpemUgX19maWxlbmFtZSAgICksIFwiZm9vYmFyXCJcbiAgICAjIGF3YWl0IGFzeW5jX3Rocm93cyAgVCwgKCDOqV9fOTYgPSAtPiBhd2FpdCBmZXRjaF9maWxlc2l6ZSBfX2ZpbGVuYW1lICAgKSwgL25vIHN1Y2ggZmlsZS9cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGF3YWl0IHQyLmFzeW5jX3Rocm93cyAoIM6pX185NyA9IC0+IGF3YWl0IGZldGNoX2ZpbGVzaXplICdub3N1Y2hwYXRoJyApLCBcImZvb2JhclwiXG4gICAgYXdhaXQgdDIuYXN5bmNfdGhyb3dzICggzqlfXzk4ID0gLT4gYXdhaXQgZmV0Y2hfZmlsZXNpemUgJ25vc3VjaHBhdGgnICksIC9ubyBzdWNoIGZpbGUvXG4gICAgYXdhaXQgdDIuYXN5bmNfdGhyb3dzICggzqlfXzk5ID0gLT4gYXdhaXQgZmV0Y2hfZmlsZXNpemUgJ25vc3VjaHBhdGgnIClcbiAgICAjIGF3YWl0IGRvID0+XG4gICAgIyAgIGF3YWl0IGFzeW5jX3Rocm93cyAoIM6pXzEwMCA9IC0+XG4gICAgIyAgICAgYXdhaXQgdDIuYXN5bmNfdGhyb3dzICggzqlfMTAxID0gLT4gYXdhaXQgZmV0Y2hfZmlsZXNpemUgJ25vc3VjaHBhdGgnICksIFwiZm9vYmFyXCJcbiAgICAjICAgICApLCAvbm8gc3VjaCBmaWxlIC4qIGRvZXNuJ3QgbWF0Y2ggJ2Zvb2JhcicvXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIGF3YWl0IGFzeW5jX3Rocm93cyAgVCwgKCDOqV8xMDIgPSAtPiBhd2FpdCBmZXRjaF9maWxlc2l6ZSAnbm9zdWNocGF0aCcgKVxuICAgICMgYXdhaXQgYXN5bmNfdGhyb3dzICBULCAoIM6pXzEwMyA9IC0+IGF3YWl0IGZldGNoX2ZpbGVzaXplICdub3N1Y2hwYXRoJyApLCAvbm8gc3VjaCBmaWxlL1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG9uZT8oKVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYXN5bmNocm9ub3VzX2Vycm9yczogLT5cbiAgICBGUyA9IHJlcXVpcmUgJ25vZGU6ZnMvcHJvbWlzZXMnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmZXRjaF9maWxlc2l6ZSA9ICggcGF0aCApIC0+ICggYXdhaXQgRlMuc3RhdCBwYXRoICkuc2l6ZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcHJvZHVjZV9maWxlc2l6ZSA9ICggcGF0aCApID0+XG4gICAgICB0cnlcbiAgICAgICAgZmlsZXNpemUgID0gYXdhaXQgZmV0Y2hfZmlsZXNpemUgcGF0aFxuICAgICAgICB1cmdlIFwizqlfMTA0XCIsIHsgZmlsZXNpemUsIH1cbiAgICAgIGNhdGNoIGVycm9yXG4gICAgICAgIHdhcm4gXCLOqV8xMDVcIiwgZXJyb3JcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBlY2hvICctLS0tLS0tLS0tLS0tLS0tLS0tJ1xuICAgICMgdHJ5IGF3YWl0IHByb2R1Y2VfZmlsZXNpemUgJ25vc3VjaHBhdGgnIGNhdGNoIGVycm9yIHRoZW4gd2FybiAnzqlfMTA2JywgZXJyb3IubWVzc2FnZVxuICAgIGF3YWl0IHByb2R1Y2VfZmlsZXNpemUgJ25vc3VjaHBhdGgnXG4gICAgZWNobyAnLS0tLS0tLS0tLS0tLS0tLS0tLSdcbiAgICBhd2FpdCBwcm9kdWNlX2ZpbGVzaXplIF9fZmlsZW5hbWVcbiAgICBlY2hvICctLS0tLS0tLS0tLS0tLS0tLS0tJ1xuICAgICMgYXdhaXQgYXN5bmNfdGhyb3dzICggzqlfMTA3ID0gLT4gYXdhaXQgZmV0Y2hfZmlsZXNpemUgX19maWxlbmFtZSApLCAnPz8/J1xuICAgIGF3YWl0IEBhc3luY190aHJvd3MgKCDOqV8xMDggPSAtPiBhd2FpdCBmZXRjaF9maWxlc2l6ZSAnbm9zdWNocGF0aCcgKSwgL25vIHN1Y2ggZmlsZS9cbiAgICBlY2hvICctLS0tLS0tLS0tLS0tLS0tLS0tJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG9uZT8oKVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdGVzdF9jZmc6IC0+XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgdDIgPSBuZXcgVGVzdCgpXG4gICAgICBAZXEgKCDOqV8xMDkgPSAtPiBPYmplY3QuaXNGcm96ZW4gdDIuY2ZnICApLCB0cnVlXG4gICAgICBAZXEgKCDOqV8xMTAgPSAtPiB0Mi5jZmcuYXV0b19yZXNldCAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlfMTExID0gLT4gdDIuY2ZnLnNob3dfcmVwb3J0ICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlfMTEyID0gLT4gdDIuY2ZnLnNob3dfcmVzdWx0cyAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlfMTEzID0gLT4gdDIuY2ZnLnNob3dfZmFpbHMgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlfMTE0ID0gLT4gdDIuY2ZnLnNob3dfcGFzc2VzICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlfMTE1ID0gLT4gdDIuY2ZnLnRocm93X29uX2Vycm9yICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6pXzExNiA9IC0+IHQyLmNmZy50aHJvd19vbl9mYWlsICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqV8xMTcgPSAtPiB0Mi5jZmcubWVzc2FnZV93aWR0aCAgICApLCAzMDBcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgdDIgPSBuZXcgVGVzdCB7fVxuICAgICAgQGVxICggzqlfMTE4ID0gLT4gT2JqZWN0LmlzRnJvemVuIHQyLmNmZyAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlfMTE5ID0gLT4gdDIuY2ZnLmF1dG9fcmVzZXQgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6pXzEyMCA9IC0+IHQyLmNmZy5zaG93X3JlcG9ydCAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pXzEyMSA9IC0+IHQyLmNmZy5zaG93X3Jlc3VsdHMgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pXzEyMiA9IC0+IHQyLmNmZy5zaG93X2ZhaWxzICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pXzEyMyA9IC0+IHQyLmNmZy5zaG93X3Bhc3NlcyAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pXzEyNCA9IC0+IHQyLmNmZy50aHJvd19vbl9lcnJvciAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqV8xMjUgPSAtPiB0Mi5jZmcudGhyb3dfb25fZmFpbCAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlfMTI2ID0gLT4gdDIuY2ZnLm1lc3NhZ2Vfd2lkdGggICAgKSwgMzAwXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHQyID0gbmV3IFRlc3QgeyBtZXNzYWdlX3dpZHRoOiAzMCwgdGhyb3dfb25fZXJyb3I6IHRydWUsIH1cbiAgICAgIEBlcSAoIM6pXzEyNyA9IC0+IE9iamVjdC5pc0Zyb3plbiB0Mi5jZmcgICksIHRydWVcbiAgICAgIEBlcSAoIM6pXzEyOCA9IC0+IHQyLmNmZy5hdXRvX3Jlc2V0ICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqV8xMjkgPSAtPiB0Mi5jZmcuc2hvd19yZXBvcnQgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqV8xMzAgPSAtPiB0Mi5jZmcuc2hvd19yZXN1bHRzICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqV8xMzEgPSAtPiB0Mi5jZmcuc2hvd19mYWlscyAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqV8xMzIgPSAtPiB0Mi5jZmcuc2hvd19wYXNzZXMgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqV8xMzMgPSAtPiB0Mi5jZmcudGhyb3dfb25fZXJyb3IgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqV8xMzQgPSAtPiB0Mi5jZmcudGhyb3dfb25fZmFpbCAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlfMTM1ID0gLT4gdDIuY2ZnLm1lc3NhZ2Vfd2lkdGggICAgKSwgMzBcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjYW5fdGhyb3dfb25fZmFpbDogLT5cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICAjIyMgZW5zdXJlIHRoYXQgYFRlc3RgIGluc3RhbmNlIGNvbXBsYWlucyB3aGVuIG5vIGVycm9yIGlzIHRocm93biBpbnNpZGUgYSBgdGhyb3dzKClgIGNoZWNrOiAjIyNcbiAgICAgIHQyID0gbmV3IFRlc3QgeyB0aHJvd19vbl9lcnJvcjogZmFsc2UsIHNob3dfcmVwb3J0OiBmYWxzZSwgcHJlZml4OiAnKipUMl8xKionLCB9XG4gICAgICB0Mi50ZXN0IGN0b2ZfMTogLT5cbiAgICAgICAgQHRocm93cyAoIGN0b2ZfMiA9IC0+IDMyICksIC9leHBlY3RlZCBhbiBlcnJvci9cbiAgICAgIEBlcSAoIM6pXzEzNiA9IC0+IHQyLnN0YXRzICAgICksIHsgJyonOiB7IHBhc3NlczogMCwgZmFpbHM6IDEgfSwgJ2N0b2ZfMS5jdG9mXzInOiB7IHBhc3NlczogMCwgZmFpbHM6IDEgfSB9XG4gICAgICBAZXEgKCDOqV8xMzcgPSAtPiB0Mi53YXJuaW5ncyApLCB7ICdjdG9mXzEuY3RvZl8yJzogWyAnKG5vZXJyKSBleHBlY3RlZCBhbiBlcnJvciBidXQgbm9uZSB3YXMgdGhyb3duJyBdIH1cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgdDIgPSBuZXcgVGVzdCB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgdGhyb3dfb25fZmFpbDogdHJ1ZSwgc2hvd19yZXBvcnQ6IGZhbHNlLCBwcmVmaXg6ICcqKlQyXzIqKicsIH1cbiAgICAgIEB0aHJvd3MgKCBjdG9mXzUgPSAtPiB0Mi5lcSAoIGN0b2ZfNiA9IC0+IDE0ICksIDE1ICksIC9uZXE6L1xuICAgICAgIyBAdGhyb3dzICggzqlfMTM4ID0gLT4gdDIuZXEgKCB4eTEgPSAtPiAxNCApLCAxNSApLCAvLS0tL1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBUVDM6XG4gICAgYXNzdW1wdGlvbnM6ICggY3R4ICkgLT5cbiAgICAgIHQyID0gbmV3IFRlc3QgeyBzaG93X3JlcG9ydDogZmFsc2UsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgYXdhaXQgdDIuYXN5bmNfdGVzdCBhc3N1bXB0aW9uc190YXNrOiAtPlxuICAgICAgICBsaW5lID0gJy0nLnJlcGVhdCAxMDhcbiAgICAgICAgZWNobyBsaW5lOyBAZXEgKCBkYXRfMSA9IC0+IDMyICksIDMyXG4gICAgICAgIGVjaG8gbGluZTsgQGVxICggZGF0XzIgPSAtPiAzMiApLCAzM1xuICAgICAgICBlY2hvIGxpbmU7IEBlcSAoIGRhdF8zID0gLT4gdGhyb3cgbmV3IEVycm9yIFwiZmluZVwiIClcbiAgICAgICAgZWNobyBsaW5lOyBAcGFzcyAnZGF0XzQnLCAndGVzdCcsIFwiYWxsIGZpbmVcIlxuICAgICAgICBlY2hvIGxpbmU7IEBwYXNzICdkYXRfNScsICd0ZXN0J1xuICAgICAgICBlY2hvIGxpbmU7IEBmYWlsICdkYXRfNicsICd0ZXN0JywgXCJhbGwgZmluZVwiXG4gICAgICAgIGVjaG8gbGluZTsgQGZhaWwgJ2RhdF83JywgJ3Rlc3QnXG4gICAgICAgIGVjaG8gbGluZTsgQHRocm93cyAoIGRhdF84ID0gLT4gJ29vcHMnICksIC9maW5lL1xuICAgICAgICBlY2hvIGxpbmU7IEB0aHJvd3MgKCBkYXRfOSA9IC0+IHRocm93IG5ldyBFcnJvciBcInRoaXMgaXMgYWN0dWFsbHkgZmluZSAxXCIgKSwgL2ZpbmUvXG4gICAgICAgIGVjaG8gbGluZTsgQHRocm93cyAoIGRhdF8xMCA9IC0+IHRocm93IG5ldyBFcnJvciBcInRoaXMgaXMgYWN0dWFsbHkgZmluZSAyXCIgKSwgL3doYXQvXG4gICAgICAgIGVjaG8gbGluZTsgQHRocm93cyAoIGRhdF8xMSA9IC0+IHRocm93IG5ldyBFcnJvciBcInRoaXMgaXMgYWN0dWFsbHkgZmluZSAzXCIgKSwgXCJub3QgdGhpc1wiXG4gICAgICAgIGVjaG8gbGluZTsgYXdhaXQgQGFzeW5jX3Rocm93cyAoIGRhdF8xMiA9IC0+IHRocm93IG5ldyBFcnJvciBcInRoaXMgaXMgYWN0dWFsbHkgZmluZSA0XCIgKVxuICAgICAgICBlY2hvIGxpbmU7IGF3YWl0IEBhc3luY190aHJvd3MgKCBkYXRfMTMgPSAtPiB0aHJvdyBuZXcgRXJyb3IgXCJ0aGlzIGlzIGFjdHVhbGx5IGZpbmUgNVwiICksIC9maW5lL1xuICAgICAgICBlY2hvIGxpbmU7IGF3YWl0IEBhc3luY190aHJvd3MgKCBkYXRfMTQgPSAtPiB0aHJvdyBuZXcgRXJyb3IgXCJ0aGlzIGlzIGFjdHVhbGx5IGZpbmUgNlwiICksIC9ub3QgdGhpcy9cbiAgICAgICAgZWNobyBsaW5lOyBhd2FpdCBAYXN5bmNfdGhyb3dzICggZGF0XzE1ID0gLT4gYWZ0ZXIgMC4xLCA9PiBhd2FpdCB0aHJvdyBuZXcgRXJyb3IgXCJ0aGlzIGlzIGFjdHVhbGx5IGZpbmUgN1wiICksIC9maW5lL1xuICAgICAgICBlY2hvIGxpbmU7IGF3YWl0IEBhc3luY190aHJvd3MgKCBkYXRfMTYgPSAtPiBhZnRlciAwLjEsID0+IGF3YWl0IHRocm93IG5ldyBFcnJvciBcInRoaXMgaXMgYWN0dWFsbHkgZmluZSA5XCIgKSwgL3doYXQvXG4gICAgICAgIGVjaG8gbGluZTsgYXdhaXQgQGFzeW5jX3Rocm93cyAoIGRhdF8xNyA9IC0+IGFmdGVyIDAuMSwgPT4gYXdhaXQgdGhyb3cgbmV3IEVycm9yIFwidGhpcyBpcyBhY3R1YWxseSBmaW5lIDEwXCIgKSwgXCJub3QgdGhpc1wiXG4gICAgICAgIGVjaG8gbGluZTsgYXdhaXQgQGFzeW5jX2VxICggZGF0XzE4ID0gLT4gYWZ0ZXIgMCwgPT4gYXdhaXQgMzIgKSwgMzJcbiAgICAgICAgZWNobyBsaW5lOyBhd2FpdCBAYXN5bmNfZXEgKCBkYXRfMTkgPSAtPiBhZnRlciAwLCA9PiBhd2FpdCAzMiApLCAzM1xuICAgICAgICBlY2hvIGxpbmU7IGF3YWl0IEBhc3luY19lcSAoIGRhdF8yMCA9IC0+IGFmdGVyIDAsID0+IGF3YWl0IHRocm93IG5ldyBFcnJvciBcImZpbmVcIiApXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pXzEzOSA9IC0+IHQyLnN0YXRzWyAnKicgICAgICAgICAgICAgICAgICAgICAgIF0gKSwgeyBwYXNzZXM6IDgsIGZhaWxzOiAxMiB9XG4gICAgICBAZXEgKCDOqV8xNDAgPSAtPiB0Mi5zdGF0c1sgJ2Fzc3VtcHRpb25zX3Rhc2suZGF0XzEnICBdICksIHsgcGFzc2VzOiAxLCBmYWlsczogMCB9XG4gICAgICBAZXEgKCDOqV8xNDEgPSAtPiB0Mi5zdGF0c1sgJ2Fzc3VtcHRpb25zX3Rhc2suZGF0XzInICBdICksIHsgcGFzc2VzOiAwLCBmYWlsczogMSB9XG4gICAgICBAZXEgKCDOqV8xNDIgPSAtPiB0Mi5zdGF0c1sgJ2Fzc3VtcHRpb25zX3Rhc2suZGF0XzMnICBdICksIHsgcGFzc2VzOiAwLCBmYWlsczogMSB9XG4gICAgICBAZXEgKCDOqV8xNDMgPSAtPiB0Mi5zdGF0c1sgJ2Fzc3VtcHRpb25zX3Rhc2suZGF0XzQnICBdICksIHsgcGFzc2VzOiAxLCBmYWlsczogMCB9XG4gICAgICBAZXEgKCDOqV8xNDQgPSAtPiB0Mi5zdGF0c1sgJ2Fzc3VtcHRpb25zX3Rhc2suZGF0XzUnICBdICksIHsgcGFzc2VzOiAxLCBmYWlsczogMCB9XG4gICAgICBAZXEgKCDOqV8xNDUgPSAtPiB0Mi5zdGF0c1sgJ2Fzc3VtcHRpb25zX3Rhc2suZGF0XzYnICBdICksIHsgcGFzc2VzOiAwLCBmYWlsczogMSB9XG4gICAgICBAZXEgKCDOqV8xNDYgPSAtPiB0Mi5zdGF0c1sgJ2Fzc3VtcHRpb25zX3Rhc2suZGF0XzcnICBdICksIHsgcGFzc2VzOiAwLCBmYWlsczogMSB9XG4gICAgICBAZXEgKCDOqV8xNDcgPSAtPiB0Mi5zdGF0c1sgJ2Fzc3VtcHRpb25zX3Rhc2suZGF0XzgnICBdICksIHsgcGFzc2VzOiAwLCBmYWlsczogMSB9XG4gICAgICBAZXEgKCDOqV8xNDggPSAtPiB0Mi5zdGF0c1sgJ2Fzc3VtcHRpb25zX3Rhc2suZGF0XzknICBdICksIHsgcGFzc2VzOiAxLCBmYWlsczogMCB9XG4gICAgICBAZXEgKCDOqV8xNDkgPSAtPiB0Mi5zdGF0c1sgJ2Fzc3VtcHRpb25zX3Rhc2suZGF0XzEwJyBdICksIHsgcGFzc2VzOiAwLCBmYWlsczogMSB9XG4gICAgICBAZXEgKCDOqV8xNTAgPSAtPiB0Mi5zdGF0c1sgJ2Fzc3VtcHRpb25zX3Rhc2suZGF0XzExJyBdICksIHsgcGFzc2VzOiAwLCBmYWlsczogMSB9XG4gICAgICBAZXEgKCDOqV8xNTEgPSAtPiB0Mi5zdGF0c1sgJ2Fzc3VtcHRpb25zX3Rhc2suZGF0XzEyJyBdICksIHsgcGFzc2VzOiAxLCBmYWlsczogMCB9XG4gICAgICBAZXEgKCDOqV8xNTIgPSAtPiB0Mi5zdGF0c1sgJ2Fzc3VtcHRpb25zX3Rhc2suZGF0XzEzJyBdICksIHsgcGFzc2VzOiAxLCBmYWlsczogMCB9XG4gICAgICBAZXEgKCDOqV8xNTMgPSAtPiB0Mi5zdGF0c1sgJ2Fzc3VtcHRpb25zX3Rhc2suZGF0XzE0JyBdICksIHsgcGFzc2VzOiAwLCBmYWlsczogMSB9XG4gICAgICBAZXEgKCDOqV8xNTQgPSAtPiB0Mi5zdGF0c1sgJ2Fzc3VtcHRpb25zX3Rhc2suZGF0XzE1JyBdICksIHsgcGFzc2VzOiAxLCBmYWlsczogMCB9XG4gICAgICBAZXEgKCDOqV8xNTUgPSAtPiB0Mi5zdGF0c1sgJ2Fzc3VtcHRpb25zX3Rhc2suZGF0XzE2JyBdICksIHsgcGFzc2VzOiAwLCBmYWlsczogMSB9XG4gICAgICBAZXEgKCDOqV8xNTYgPSAtPiB0Mi5zdGF0c1sgJ2Fzc3VtcHRpb25zX3Rhc2suZGF0XzE3JyBdICksIHsgcGFzc2VzOiAwLCBmYWlsczogMSB9XG4gICAgICBAZXEgKCDOqV8xNTcgPSAtPiB0Mi5zdGF0c1sgJ2Fzc3VtcHRpb25zX3Rhc2suZGF0XzE4JyBdICksIHsgcGFzc2VzOiAxLCBmYWlsczogMCB9XG4gICAgICBAZXEgKCDOqV8xNTggPSAtPiB0Mi5zdGF0c1sgJ2Fzc3VtcHRpb25zX3Rhc2suZGF0XzE5JyBdICksIHsgcGFzc2VzOiAwLCBmYWlsczogMSB9XG4gICAgICBAZXEgKCDOqV8xNTkgPSAtPiB0Mi5zdGF0c1sgJ2Fzc3VtcHRpb25zX3Rhc2suZGF0XzIwJyBdICksIHsgcGFzc2VzOiAwLCBmYWlsczogMSB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkZW1vX2Zvcl9yZWFkbWU6IC0+XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBteV9tYXRoX2xpYiA9XG4gICAgICBtdWw6ICggYSwgYiApIC0+IGEgKiBiXG4gICAgICBhZGQ6ICggYSwgYiApIC0+IGEgKyBiXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICB0YXNrZ3JvdXBfQSA9XG4gICAgICB0ZXN0XzE6IC0+XG4gICAgICBiZXR0ZXJfdXNlX21lYW5pbmdmdWxfbmFtZXM6IC0+XG4gICAgICAgIEBlcSAoIHRfXzIwID0gLT4gbXlfbWF0aF9saWIubXVsIDMsIDQgKSwgMTJcbiAgICAgICAgQGVxICggdF9fMjEgPSAtPiBteV9tYXRoX2xpYi5hZGQgMywgNCApLCA3XG4gICAgICBzdWJncm91cDpcbiAgICAgICAgZm9vOiAtPlxuICAgICAgICBiYXI6IC0+XG4gICAgdGFza2dyb3VwX0IgPSB7fVxuICAgICggbmV3IFRlc3QoKSApLnRlc3QgeyB0YXNrZ3JvdXBfQSwgdGFza2dyb3VwX0IsIH1cblxuXG5cbiMgQGZvb2JhciA9IC0+XG4jICAgZGVidWcgJ86pXzE2MCdcbiMgICBAZXEgKCDOqV8xNjEgPSAtPiAxICksIDFcbiMgICByZXR1cm4gbnVsbFxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICBjZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCB9XG4gIGNmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCB9XG4gIGF3YWl0ICggbmV3IFRlc3QgY2ZnICkuYXN5bmNfdGVzdCB7IFRUOiBAVFQsIH1cbiAgICAjIEludGVyZmFjZTogIEBUVC5JbnRlcmZhY2UsXG4gICAgIyBFcXVhbGl0eTogICBAVFQuRXF1YWxpdHksXG4gICAgIyBlcV93b3Jrc19jb3JyZWN0bHlfd2l0aF96ZXJvOiAgIEBUVC5FcXVhbGl0eS5lcV93b3Jrc19jb3JyZWN0bHlfd2l0aF96ZXJvLFxuICAgICMgc2V0X2VxdWFsaXR5X2J5X3ZhbHVlOiBAVFQuRXF1YWxpdHkuc2V0X2VxdWFsaXR5X2J5X3ZhbHVlLFxuICAgICMgfVxuICAjIGF3YWl0ICggbmV3IFRlc3QgY2ZnICkuYXN5bmNfdGVzdCBAVFRcbiAgIyAoIG5ldyBUZXN0IGNmZyApLnRlc3QgQFRULnBhc3NfYW5kX2ZhaWxcbiAgcmV0dXJuIG51bGxcblxuIl19
//# sourceURL=../src/test-basics.coffee