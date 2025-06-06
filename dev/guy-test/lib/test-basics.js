(async function() {
  //===========================================================================================================
  'use strict';
  var GTNG, GUY, Test, _TMP_test, after, alert, debug, echo, help, info, inspect, log, plain, praise, reverse, rpr, type_of, types, urge, warn, whisper;

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
  types = require('../../../apps/intertype');

  ({
    $type_of: type_of
  } = types);

  // isa
  // type_of
  // $isa

  //===========================================================================================================
  this.TT = {
    //=========================================================================================================
    Interface: {
      //-------------------------------------------------------------------------------------------------------
      module_instance_and_assumptions_have_equals_method: function() {
        var Ωassumptions___3, Ωinstance___2, Ωmodule___1;
        this.eq((Ωmodule___1 = function() {
          return type_of(GTNG.equals);
        }), 'function');
        this.eq((Ωinstance___2 = function() {
          return type_of((new Test()).equals);
        }), 'function');
        this.eq((Ωassumptions___3 = function() {
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
          var _types, matcher1, matcher2, result, t2, Ωmeqbv__52, Ωmeqbv__53, Ωmeqbv__54;
          t2 = new Test({
            ordered_sets: false,
            ordered_maps: false
          });
          ({_types} = require('../../../apps/guy-test-NG'));
          result = new Map([['a', [1, 2]], ['b', [1, 2]]]);
          matcher1 = new Map([['a', [1, 2]], ['b', [1, 2]]]);
          matcher2 = new Map([['a', [1, 3]], ['b', [1, 3]]]);
          this.eq((Ωmeqbv__52 = function() {
            return _types.type_of(result);
          }), 'map');
          this.eq((Ωmeqbv__53 = function() {
            return t2.equals(result, matcher1);
          }), true);
          this.eq((Ωmeqbv__54 = function() {
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
          var matcher, result, t2, Ωmeqbv__55;
          t2 = new Test();
          result = {
            mylist: Array.from('abc')
          };
          matcher = {
            mylist: Array.from('abc')
          };
          this.eq((Ωmeqbv__55 = function() {
            return t2.equals(result, matcher);
          }), true);
          return null;
        })();
        (() => {          //.....................................................................................................
          var matcher, result, t2, Ωmeqbv__56;
          t2 = new Test();
          result = {
            myset: new Set('abc')
          };
          matcher = {
            myset: new Set('abc')
          };
          this.eq((Ωmeqbv__56 = function() {
            return t2.equals(result, matcher);
          }), true);
          return null;
        })();
        (() => {          //.....................................................................................................
          var matcher, result, t2, Ωmeqbv__57;
          t2 = new Test();
          result = {
            mymap: new Map([['a', 1], ['b', 2]])
          };
          matcher = {
            mymap: new Map([['a', 1], ['b', 2]])
          };
          this.eq((Ωmeqbv__57 = function() {
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
          var t2, Ω__58, Ω__59, Ω__60, Ω__61;
          t2 = new Test({
            signed_zero: false
          });
          this.eq((Ω__58 = function() {
            return t2.equals(+0, +0);
          }), true);
          this.eq((Ω__59 = function() {
            return t2.equals(-0, -0);
          }), true);
          this.eq((Ω__60 = function() {
            return t2.equals(+0, -0);
          }), true);
          return this.eq((Ω__61 = function() {
            return t2.equals(-0, +0);
          }), true);
        })();
        (() => {          //.....................................................................................................
          var t2, Ω__62, Ω__63, Ω__64, Ω__65;
          t2 = new Test({
            signed_zero: true
          });
          this.eq((Ω__62 = function() {
            return t2.equals(+0, +0);
          }), true);
          this.eq((Ω__63 = function() {
            return t2.equals(-0, -0);
          }), true);
          this.eq((Ω__64 = function() {
            return t2.equals(+0, -0);
          }), false);
          return this.eq((Ω__65 = function() {
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
          var t2, Ω__66, Ω__67;
          t2 = new Test({
            ordered_objects: false
          });
          this.eq((Ω__66 = function() {
            return t2.equals({a, b}, {a, b});
          }), true);
          return this.eq((Ω__67 = function() {
            return t2.equals({a, b}, {b, a});
          }), true);
        })();
        (() => {          //.....................................................................................................
          var t2, Ω__68, Ω__69;
          t2 = new Test({
            ordered_objects: true
          });
          this.eq((Ω__68 = function() {
            return t2.equals({a, b}, {a, b});
          }), true);
          return this.eq((Ω__69 = function() {
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
          var t2, Ω__70, Ω__71;
          t2 = new Test({
            ordered_sets: false
          });
          this.eq((Ω__70 = function() {
            return t2.equals(new Set('ab'), new Set('ab'));
          }), true);
          return this.eq((Ω__71 = function() {
            return t2.equals(new Set('ab'), new Set('ba'));
          }), true);
        })();
        (() => {          //.....................................................................................................
          var t2, Ω__72, Ω__73;
          t2 = new Test({
            ordered_sets: true
          });
          this.eq((Ω__72 = function() {
            return t2.equals(new Set('ab'), new Set('ab'));
          }), true);
          return this.eq((Ω__73 = function() {
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
          var t2, Ω__74, Ω__75;
          t2 = new Test({
            ordered_maps: false
          });
          this.eq((Ω__74 = function() {
            return t2.equals(new Map([['a', 1], ['b', 2]]), new Map([['a', 1], ['b', 2]]));
          }), true);
          return this.eq((Ω__75 = function() {
            return t2.equals(new Map([['a', 1], ['b', 2]]), new Map([['b', 2], ['a', 1]]));
          }), true);
        })();
        (() => {          //.....................................................................................................
          var t2, Ω__76, Ω__77;
          t2 = new Test({
            ordered_maps: true
          });
          this.eq((Ω__76 = function() {
            return t2.equals(new Map([['a', 1], ['b', 2]]), new Map([['a', 1], ['b', 2]]));
          }), true);
          return this.eq((Ω__77 = function() {
            return t2.equals(new Map([['a', 1], ['b', 2]]), new Map([['b', 2], ['a', 1]]));
          }), false);
        })();
        //.....................................................................................................
        return null;
      }
    },
    //---------------------------------------------------------------------------------------------------------
    pass_and_fail: function() {
      var t2, tasks, Ω__78, Ω__79, Ω__80, Ω__81, Ω__82, Ω__83, Ω__84, Ω__85, Ω__86, Ω__87, Ω__88, Ω__89;
      t2 = new Test();
      //.......................................................................................................
      this.eq((Ω__78 = function() {
        return type_of(t2.pass);
      }), 'function');
      this.eq((Ω__79 = function() {
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
      this.eq((Ω__80 = function() {
        return t2.stats['*'].passes;
      }), 2);
      this.eq((Ω__81 = function() {
        return t2.stats['paf_a.paf_1'].passes;
      }), 1);
      this.eq((Ω__82 = function() {
        return t2.stats['paf_a.paf_2'].passes;
      }), 0);
      this.eq((Ω__83 = function() {
        return t2.stats['paf_a.paf_3'].passes;
      }), 1);
      this.eq((Ω__84 = function() {
        return t2.stats['paf_a.paf_4'].passes;
      }), 0);
      this.eq((Ω__85 = function() {
        return t2.stats['*'].fails;
      }), 2);
      this.eq((Ω__86 = function() {
        return t2.stats['paf_a.paf_1'].fails;
      }), 0);
      this.eq((Ω__87 = function() {
        return t2.stats['paf_a.paf_2'].fails;
      }), 1);
      this.eq((Ω__88 = function() {
        return t2.stats['paf_a.paf_3'].fails;
      }), 0);
      this.eq((Ω__89 = function() {
        return t2.stats['paf_a.paf_4'].fails;
      }), 1);
      return typeof done === "function" ? done() : void 0;
    },
    //---------------------------------------------------------------------------------------------------------
    asynchronous_throws: async function() {
      var FS, fetch_filesize, t2, Ω__93, Ω__94, Ω__95;
      FS = require('node:fs/promises');
      t2 = new Test();
      //.......................................................................................................
      fetch_filesize = async function(path) {
        return ((await FS.stat(path))).size;
      };
      //.......................................................................................................
      // await async_throws  T, ( Ω__90 = -> await fetch_filesize __filename   )
      // await async_throws  T, ( Ω__91 = -> await fetch_filesize __filename   ), "foobar"
      // await async_throws  T, ( Ω__92 = -> await fetch_filesize __filename   ), /no such file/
      //.......................................................................................................
      await t2.async_throws((Ω__93 = async function() {
        return (await fetch_filesize('nosuchpath'));
      }), "foobar");
      await t2.async_throws((Ω__94 = async function() {
        return (await fetch_filesize('nosuchpath'));
      }), /no such file/);
      await t2.async_throws((Ω__95 = async function() {
        return (await fetch_filesize('nosuchpath'));
      }));
      return typeof done === "function" ? done() : void 0;
    },
    //---------------------------------------------------------------------------------------------------------
    asynchronous_errors: async function() {
      var FS, fetch_filesize, produce_filesize, Ω_104;
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
          urge("Ω_100", {filesize});
        } catch (error1) {
          error = error1;
          warn("Ω_101", error);
        }
        return null;
      };
      //.......................................................................................................
      echo('-------------------');
      // try await produce_filesize 'nosuchpath' catch error then warn 'Ω_102', error.message
      await produce_filesize('nosuchpath');
      echo('-------------------');
      await produce_filesize(__filename);
      echo('-------------------');
      // await async_throws ( Ω_103 = -> await fetch_filesize __filename ), '???'
      await this.async_throws((Ω_104 = async function() {
        return (await fetch_filesize('nosuchpath'));
      }), /no such file/);
      echo('-------------------');
      return typeof done === "function" ? done() : void 0;
    },
    //---------------------------------------------------------------------------------------------------------
    test_cfg: function() {
      (() => {        //.......................................................................................................
        var t2, Ω_105, Ω_106, Ω_107, Ω_108, Ω_109, Ω_110, Ω_111, Ω_112, Ω_113;
        t2 = new Test();
        this.eq((Ω_105 = function() {
          return Object.isFrozen(t2.cfg);
        }), true);
        this.eq((Ω_106 = function() {
          return t2.cfg.auto_reset;
        }), false);
        this.eq((Ω_107 = function() {
          return t2.cfg.show_report;
        }), true);
        this.eq((Ω_108 = function() {
          return t2.cfg.show_results;
        }), true);
        this.eq((Ω_109 = function() {
          return t2.cfg.show_fails;
        }), true);
        this.eq((Ω_110 = function() {
          return t2.cfg.show_passes;
        }), true);
        this.eq((Ω_111 = function() {
          return t2.cfg.throw_on_error;
        }), false);
        this.eq((Ω_112 = function() {
          return t2.cfg.throw_on_fail;
        }), false);
        this.eq((Ω_113 = function() {
          return t2.cfg.message_width;
        }), 300);
        return null;
      })();
      (() => {        //.......................................................................................................
        var t2, Ω_114, Ω_115, Ω_116, Ω_117, Ω_118, Ω_119, Ω_120, Ω_121, Ω_122;
        t2 = new Test({});
        this.eq((Ω_114 = function() {
          return Object.isFrozen(t2.cfg);
        }), true);
        this.eq((Ω_115 = function() {
          return t2.cfg.auto_reset;
        }), false);
        this.eq((Ω_116 = function() {
          return t2.cfg.show_report;
        }), true);
        this.eq((Ω_117 = function() {
          return t2.cfg.show_results;
        }), true);
        this.eq((Ω_118 = function() {
          return t2.cfg.show_fails;
        }), true);
        this.eq((Ω_119 = function() {
          return t2.cfg.show_passes;
        }), true);
        this.eq((Ω_120 = function() {
          return t2.cfg.throw_on_error;
        }), false);
        this.eq((Ω_121 = function() {
          return t2.cfg.throw_on_fail;
        }), false);
        this.eq((Ω_122 = function() {
          return t2.cfg.message_width;
        }), 300);
        return null;
      })();
      (() => {        //.......................................................................................................
        var t2, Ω_123, Ω_124, Ω_125, Ω_126, Ω_127, Ω_128, Ω_129, Ω_130, Ω_131;
        t2 = new Test({
          message_width: 30,
          throw_on_error: true
        });
        this.eq((Ω_123 = function() {
          return Object.isFrozen(t2.cfg);
        }), true);
        this.eq((Ω_124 = function() {
          return t2.cfg.auto_reset;
        }), false);
        this.eq((Ω_125 = function() {
          return t2.cfg.show_report;
        }), true);
        this.eq((Ω_126 = function() {
          return t2.cfg.show_results;
        }), true);
        this.eq((Ω_127 = function() {
          return t2.cfg.show_fails;
        }), true);
        this.eq((Ω_128 = function() {
          return t2.cfg.show_passes;
        }), true);
        this.eq((Ω_129 = function() {
          return t2.cfg.throw_on_error;
        }), true);
        this.eq((Ω_130 = function() {
          return t2.cfg.throw_on_fail;
        }), false);
        return this.eq((Ω_131 = function() {
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
        var t2, Ω_132, Ω_133;
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
        this.eq((Ω_132 = function() {
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
        this.eq((Ω_133 = function() {
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
        // @throws ( Ω_134 = -> t2.eq ( xy1 = -> 14 ), 15 ), /---/
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    TT3: {
      assumptions: async function(ctx) {
        var t2, Ω_135, Ω_136, Ω_137, Ω_138, Ω_139, Ω_140, Ω_141, Ω_142, Ω_143, Ω_144, Ω_145, Ω_146, Ω_147, Ω_148, Ω_149, Ω_150, Ω_151, Ω_152, Ω_153, Ω_154, Ω_155;
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
        this.eq((Ω_135 = function() {
          return t2.stats['*'];
        }), {
          passes: 8,
          fails: 12
        });
        this.eq((Ω_136 = function() {
          return t2.stats['assumptions_task.dat_1'];
        }), {
          passes: 1,
          fails: 0
        });
        this.eq((Ω_137 = function() {
          return t2.stats['assumptions_task.dat_2'];
        }), {
          passes: 0,
          fails: 1
        });
        this.eq((Ω_138 = function() {
          return t2.stats['assumptions_task.dat_3'];
        }), {
          passes: 0,
          fails: 1
        });
        this.eq((Ω_139 = function() {
          return t2.stats['assumptions_task.dat_4'];
        }), {
          passes: 1,
          fails: 0
        });
        this.eq((Ω_140 = function() {
          return t2.stats['assumptions_task.dat_5'];
        }), {
          passes: 1,
          fails: 0
        });
        this.eq((Ω_141 = function() {
          return t2.stats['assumptions_task.dat_6'];
        }), {
          passes: 0,
          fails: 1
        });
        this.eq((Ω_142 = function() {
          return t2.stats['assumptions_task.dat_7'];
        }), {
          passes: 0,
          fails: 1
        });
        this.eq((Ω_143 = function() {
          return t2.stats['assumptions_task.dat_8'];
        }), {
          passes: 0,
          fails: 1
        });
        this.eq((Ω_144 = function() {
          return t2.stats['assumptions_task.dat_9'];
        }), {
          passes: 1,
          fails: 0
        });
        this.eq((Ω_145 = function() {
          return t2.stats['assumptions_task.dat_10'];
        }), {
          passes: 0,
          fails: 1
        });
        this.eq((Ω_146 = function() {
          return t2.stats['assumptions_task.dat_11'];
        }), {
          passes: 0,
          fails: 1
        });
        this.eq((Ω_147 = function() {
          return t2.stats['assumptions_task.dat_12'];
        }), {
          passes: 1,
          fails: 0
        });
        this.eq((Ω_148 = function() {
          return t2.stats['assumptions_task.dat_13'];
        }), {
          passes: 1,
          fails: 0
        });
        this.eq((Ω_149 = function() {
          return t2.stats['assumptions_task.dat_14'];
        }), {
          passes: 0,
          fails: 1
        });
        this.eq((Ω_150 = function() {
          return t2.stats['assumptions_task.dat_15'];
        }), {
          passes: 1,
          fails: 0
        });
        this.eq((Ω_151 = function() {
          return t2.stats['assumptions_task.dat_16'];
        }), {
          passes: 0,
          fails: 1
        });
        this.eq((Ω_152 = function() {
          return t2.stats['assumptions_task.dat_17'];
        }), {
          passes: 0,
          fails: 1
        });
        this.eq((Ω_153 = function() {
          return t2.stats['assumptions_task.dat_18'];
        }), {
          passes: 1,
          fails: 0
        });
        this.eq((Ω_154 = function() {
          return t2.stats['assumptions_task.dat_19'];
        }), {
          passes: 0,
          fails: 1
        });
        this.eq((Ω_155 = function() {
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
  //   debug 'Ω_156'
  //   @eq ( Ω_157 = -> 1 ), 1
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
        // TT: @TT,
        Interface: this.TT.Interface
      });
      // await ( new Test cfg ).async_test @TT
      // ( new Test cfg ).test @TT.pass_and_fail
      // Equality:   @TT.Equality,
      // eq_works_correctly_with_zero:   @TT.Equality.eq_works_correctly_with_zero,
      // set_equality_by_value: @TT.Equality.set_equality_by_value,
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=test-basics.js.map