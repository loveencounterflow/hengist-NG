(async function() {
  //===========================================================================================================
  'use strict';
  var GTNG, GUY, Test, _TMP_test, after, alert, debug, echo, help, info, inspect, isa, log, plain, praise, reverse, rpr, type_of, types, urge, validate, warn, whisper;

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

  ({isa, type_of, validate} = types);

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
    //=========================================================================================================
    Equality: {
      //-------------------------------------------------------------------------------------------------------
      basics: function() {
        var Ω__10, Ω___4, Ω___5, Ω___6, Ω___7, Ω___8, Ω___9;
        this.eq((Ω___4 = function() {
          return this.equals(1.23456, 1.23456);
        }), true);
        this.eq((Ω___5 = function() {
          return this.equals(1.23456000000000000001, 1.23456000000000000002);
        }), true);
        this.eq((Ω___6 = function() {
          return this.equals(1.23456, 1.23457);
        }), false);
        this.eq((Ω___7 = function() {
          return this.equals('1.23456', '1.23457');
        }), false);
        this.eq((Ω___8 = function() {
          return this.equals('1.23457', '1.23457');
        }), true);
        this.eq((Ω___9 = function() {
          return this.equals({}, {});
        }), true);
        this.eq((Ω__10 = function() {
          return this.equals({
            lst: [7, 8, 9]
          }, {
            lst: [7, 8, 9]
          });
        }), true);
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      set_equality_by_value: function() {
        (() => {          //.....................................................................................................
          var Ω__11;
          this.eq((Ω__11 = function() {
            return 'abc';
          }), 'abc');
          return null;
        })();
        (() => {          //.....................................................................................................
          var matcher1, matcher2, result, t2, Ω__12, Ω__13;
          t2 = new Test({
            ordered_sets: false,
            ordered_maps: false
          });
          result = [1, [2]];
          matcher1 = [1, [2]];
          matcher2 = [1, [3]];
          this.eq((Ω__12 = function() {
            return t2.equals(result, matcher1);
          }), true);
          this.eq((Ω__13 = function() {
            return t2.equals(result, matcher2);
          }), false);
          return null;
        })();
        (() => {          //.....................................................................................................
          var matcher1, matcher2, result, t2, Ω__14, Ω__15;
          t2 = new Test({
            ordered_sets: false,
            ordered_maps: false
          });
          result = new Set([1, 2]);
          matcher1 = new Set([1, 2]);
          matcher2 = new Set([1, 3]);
          this.eq((Ω__14 = function() {
            return t2.equals(result, matcher1);
          }), true);
          this.eq((Ω__15 = function() {
            return t2.equals(result, matcher2);
          }), false);
/* !!!!!!!!!!!!!!!!!!!!!!!!!!!! */          return null;
        })();
        (() => {          //.....................................................................................................
          var matcher1, matcher2, result, t2, Ω__16, Ω__17;
          t2 = new Test({
            ordered_sets: false,
            ordered_maps: false
          });
          result = new Set([1, [2]]);
          matcher1 = new Set([1, [2]]);
          matcher2 = new Set([1, [3]]);
          this.eq((Ω__16 = function() {
            return t2.equals(result, matcher1);
          }), true);
          this.eq((Ω__17 = function() {
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
          var _types, matcher1, matcher2, result, t2, Ωmeqbv__18, Ωmeqbv__19, Ωmeqbv__20;
          t2 = new Test({
            ordered_sets: false,
            ordered_maps: false
          });
          ({_types} = require('../../../apps/guy-test-NG'));
          result = new Map([['a', [1, 2]], ['b', [1, 2]]]);
          matcher1 = new Map([['a', [1, 2]], ['b', [1, 2]]]);
          matcher2 = new Map([['a', [1, 3]], ['b', [1, 3]]]);
          this.eq((Ωmeqbv__18 = function() {
            return _types.type_of(result);
          }), 'map');
          this.eq((Ωmeqbv__19 = function() {
            return t2.equals(result, matcher1);
          }), true);
          this.eq((Ωmeqbv__20 = function() {
            return t2.equals(result, matcher2);
          }), false);
/* !!!!!!!!!!!!!!!!!!!!!!!!!!!! */          return null;
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      can_configure_eq_of_plusminus_zero: function() {
        (() => {          //.....................................................................................................
          var t2, Ω__21, Ω__22, Ω__23, Ω__24;
          t2 = new Test({
            signed_zero: false
          });
          this.eq((Ω__21 = function() {
            return t2.equals(+0, +0);
          }), true);
          this.eq((Ω__22 = function() {
            return t2.equals(-0, -0);
          }), true);
          this.eq((Ω__23 = function() {
            return t2.equals(+0, -0);
          }), true);
          return this.eq((Ω__24 = function() {
            return t2.equals(-0, +0);
          }), true);
        })();
        (() => {          //.....................................................................................................
          var t2, Ω__25, Ω__26, Ω__27, Ω__28;
          t2 = new Test({
            signed_zero: true
          });
          this.eq((Ω__25 = function() {
            return t2.equals(+0, +0);
          }), true);
          this.eq((Ω__26 = function() {
            return t2.equals(-0, -0);
          }), true);
          this.eq((Ω__27 = function() {
            return t2.equals(+0, -0);
          }), false);
          return this.eq((Ω__28 = function() {
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
          var t2, Ω__29, Ω__30;
          t2 = new Test({
            ordered_objects: false
          });
          this.eq((Ω__29 = function() {
            return t2.equals({a, b}, {a, b});
          }), true);
          return this.eq((Ω__30 = function() {
            return t2.equals({a, b}, {b, a});
          }), true);
        })();
        (() => {          //.....................................................................................................
          var t2, Ω__31, Ω__32;
          t2 = new Test({
            ordered_objects: true
          });
          this.eq((Ω__31 = function() {
            return t2.equals({a, b}, {a, b});
          }), true);
          return this.eq((Ω__32 = function() {
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
          var t2, Ω__33, Ω__34;
          t2 = new Test({
            ordered_sets: false
          });
          this.eq((Ω__33 = function() {
            return t2.equals(new Set('ab'), new Set('ab'));
          }), true);
          return this.eq((Ω__34 = function() {
            return t2.equals(new Set('ab'), new Set('ba'));
          }), true);
        })();
        (() => {          //.....................................................................................................
          var t2, Ω__35, Ω__36;
          t2 = new Test({
            ordered_sets: true
          });
          this.eq((Ω__35 = function() {
            return t2.equals(new Set('ab'), new Set('ab'));
          }), true);
          return this.eq((Ω__36 = function() {
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
          var t2, Ω__37, Ω__38;
          t2 = new Test({
            ordered_maps: false
          });
          this.eq((Ω__37 = function() {
            return t2.equals(new Map([['a', 1], ['b', 2]]), new Map([['a', 1], ['b', 2]]));
          }), true);
          return this.eq((Ω__38 = function() {
            return t2.equals(new Map([['a', 1], ['b', 2]]), new Map([['b', 2], ['a', 1]]));
          }), true);
        })();
        (() => {          //.....................................................................................................
          var t2, Ω__39, Ω__40;
          t2 = new Test({
            ordered_maps: true
          });
          this.eq((Ω__39 = function() {
            return t2.equals(new Map([['a', 1], ['b', 2]]), new Map([['a', 1], ['b', 2]]));
          }), true);
          return this.eq((Ω__40 = function() {
            return t2.equals(new Map([['a', 1], ['b', 2]]), new Map([['b', 2], ['a', 1]]));
          }), false);
        })();
        //.....................................................................................................
        return null;
      }
    },
    //---------------------------------------------------------------------------------------------------------
    pass_and_fail: function() {
      var t2, tasks, Ω__41, Ω__42, Ω__43, Ω__44, Ω__45, Ω__46, Ω__47, Ω__48, Ω__49, Ω__50, Ω__51, Ω__52;
      t2 = new Test();
      //.......................................................................................................
      this.eq((Ω__41 = function() {
        return type_of(t2.pass);
      }), 'function');
      this.eq((Ω__42 = function() {
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
      this.eq((Ω__43 = function() {
        return t2.stats['*'].passes;
      }), 2);
      this.eq((Ω__44 = function() {
        return t2.stats['paf_a.paf_1'].passes;
      }), 1);
      this.eq((Ω__45 = function() {
        return t2.stats['paf_a.paf_2'].passes;
      }), 0);
      this.eq((Ω__46 = function() {
        return t2.stats['paf_a.paf_3'].passes;
      }), 1);
      this.eq((Ω__47 = function() {
        return t2.stats['paf_a.paf_4'].passes;
      }), 0);
      this.eq((Ω__48 = function() {
        return t2.stats['*'].fails;
      }), 2);
      this.eq((Ω__49 = function() {
        return t2.stats['paf_a.paf_1'].fails;
      }), 0);
      this.eq((Ω__50 = function() {
        return t2.stats['paf_a.paf_2'].fails;
      }), 1);
      this.eq((Ω__51 = function() {
        return t2.stats['paf_a.paf_3'].fails;
      }), 0);
      this.eq((Ω__52 = function() {
        return t2.stats['paf_a.paf_4'].fails;
      }), 1);
      return typeof done === "function" ? done() : void 0;
    },
    //---------------------------------------------------------------------------------------------------------
    asynchronous_throws: async function() {
      var FS, fetch_filesize, t2, Ω__56, Ω__57, Ω__58;
      FS = require('node:fs/promises');
      t2 = new Test();
      //.......................................................................................................
      fetch_filesize = async function(path) {
        return ((await FS.stat(path))).size;
      };
      //.......................................................................................................
      // await async_throws  T, ( Ω__53 = -> await fetch_filesize __filename   )
      // await async_throws  T, ( Ω__54 = -> await fetch_filesize __filename   ), "foobar"
      // await async_throws  T, ( Ω__55 = -> await fetch_filesize __filename   ), /no such file/
      //.......................................................................................................
      await t2.async_throws((Ω__56 = async function() {
        return (await fetch_filesize('nosuchpath'));
      }), "foobar");
      await t2.async_throws((Ω__57 = async function() {
        return (await fetch_filesize('nosuchpath'));
      }), /no such file/);
      await t2.async_throws((Ω__58 = async function() {
        return (await fetch_filesize('nosuchpath'));
      }));
      return typeof done === "function" ? done() : void 0;
    },
    //---------------------------------------------------------------------------------------------------------
    asynchronous_errors: async function() {
      var FS, fetch_filesize, produce_filesize, Ω__67;
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
          urge("Ω__63", {filesize});
        } catch (error1) {
          error = error1;
          warn("Ω__64", error);
        }
        return null;
      };
      //.......................................................................................................
      echo('-------------------');
      // try await produce_filesize 'nosuchpath' catch error then warn 'Ω__65', error.message
      await produce_filesize('nosuchpath');
      echo('-------------------');
      await produce_filesize(__filename);
      echo('-------------------');
      // await async_throws ( Ω__66 = -> await fetch_filesize __filename ), '???'
      await this.async_throws((Ω__67 = async function() {
        return (await fetch_filesize('nosuchpath'));
      }), /no such file/);
      echo('-------------------');
      return typeof done === "function" ? done() : void 0;
    },
    //---------------------------------------------------------------------------------------------------------
    test_cfg: function() {
      (() => {        //.......................................................................................................
        var t2, Ω__68, Ω__69, Ω__70, Ω__71, Ω__72, Ω__73, Ω__74, Ω__75, Ω__76;
        t2 = new Test();
        this.eq((Ω__68 = function() {
          return Object.isFrozen(t2.cfg);
        }), true);
        this.eq((Ω__69 = function() {
          return t2.cfg.auto_reset;
        }), false);
        this.eq((Ω__70 = function() {
          return t2.cfg.show_report;
        }), true);
        this.eq((Ω__71 = function() {
          return t2.cfg.show_results;
        }), true);
        this.eq((Ω__72 = function() {
          return t2.cfg.show_fails;
        }), true);
        this.eq((Ω__73 = function() {
          return t2.cfg.show_passes;
        }), true);
        this.eq((Ω__74 = function() {
          return t2.cfg.throw_on_error;
        }), false);
        this.eq((Ω__75 = function() {
          return t2.cfg.throw_on_fail;
        }), false);
        this.eq((Ω__76 = function() {
          return t2.cfg.message_width;
        }), 300);
        return null;
      })();
      (() => {        //.......................................................................................................
        var t2, Ω__77, Ω__78, Ω__79, Ω__80, Ω__81, Ω__82, Ω__83, Ω__84, Ω__85;
        t2 = new Test({});
        this.eq((Ω__77 = function() {
          return Object.isFrozen(t2.cfg);
        }), true);
        this.eq((Ω__78 = function() {
          return t2.cfg.auto_reset;
        }), false);
        this.eq((Ω__79 = function() {
          return t2.cfg.show_report;
        }), true);
        this.eq((Ω__80 = function() {
          return t2.cfg.show_results;
        }), true);
        this.eq((Ω__81 = function() {
          return t2.cfg.show_fails;
        }), true);
        this.eq((Ω__82 = function() {
          return t2.cfg.show_passes;
        }), true);
        this.eq((Ω__83 = function() {
          return t2.cfg.throw_on_error;
        }), false);
        this.eq((Ω__84 = function() {
          return t2.cfg.throw_on_fail;
        }), false);
        this.eq((Ω__85 = function() {
          return t2.cfg.message_width;
        }), 300);
        return null;
      })();
      (() => {        //.......................................................................................................
        var t2, Ω__86, Ω__87, Ω__88, Ω__89, Ω__90, Ω__91, Ω__92, Ω__93, Ω__94;
        t2 = new Test({
          message_width: 30,
          throw_on_error: true
        });
        this.eq((Ω__86 = function() {
          return Object.isFrozen(t2.cfg);
        }), true);
        this.eq((Ω__87 = function() {
          return t2.cfg.auto_reset;
        }), false);
        this.eq((Ω__88 = function() {
          return t2.cfg.show_report;
        }), true);
        this.eq((Ω__89 = function() {
          return t2.cfg.show_results;
        }), true);
        this.eq((Ω__90 = function() {
          return t2.cfg.show_fails;
        }), true);
        this.eq((Ω__91 = function() {
          return t2.cfg.show_passes;
        }), true);
        this.eq((Ω__92 = function() {
          return t2.cfg.throw_on_error;
        }), true);
        this.eq((Ω__93 = function() {
          return t2.cfg.throw_on_fail;
        }), false);
        return this.eq((Ω__94 = function() {
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
        var t2, Ω__95, Ω__96;
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
        this.eq((Ω__95 = function() {
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
        this.eq((Ω__96 = function() {
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
        // @throws ( Ω__97 = -> t2.eq ( xy1 = -> 14 ), 15 ), /---/
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    TT3: {
      assumptions: async function(ctx) {
        var t2, Ω_100, Ω_101, Ω_102, Ω_103, Ω_104, Ω_105, Ω_106, Ω_107, Ω_108, Ω_109, Ω_110, Ω_111, Ω_112, Ω_113, Ω_114, Ω_115, Ω_116, Ω_117, Ω_118, Ω__98, Ω__99;
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
        this.eq((Ω__98 = function() {
          return t2.stats['*'];
        }), {
          passes: 8,
          fails: 12
        });
        this.eq((Ω__99 = function() {
          return t2.stats['assumptions_task.dat_1'];
        }), {
          passes: 1,
          fails: 0
        });
        this.eq((Ω_100 = function() {
          return t2.stats['assumptions_task.dat_2'];
        }), {
          passes: 0,
          fails: 1
        });
        this.eq((Ω_101 = function() {
          return t2.stats['assumptions_task.dat_3'];
        }), {
          passes: 0,
          fails: 1
        });
        this.eq((Ω_102 = function() {
          return t2.stats['assumptions_task.dat_4'];
        }), {
          passes: 1,
          fails: 0
        });
        this.eq((Ω_103 = function() {
          return t2.stats['assumptions_task.dat_5'];
        }), {
          passes: 1,
          fails: 0
        });
        this.eq((Ω_104 = function() {
          return t2.stats['assumptions_task.dat_6'];
        }), {
          passes: 0,
          fails: 1
        });
        this.eq((Ω_105 = function() {
          return t2.stats['assumptions_task.dat_7'];
        }), {
          passes: 0,
          fails: 1
        });
        this.eq((Ω_106 = function() {
          return t2.stats['assumptions_task.dat_8'];
        }), {
          passes: 0,
          fails: 1
        });
        this.eq((Ω_107 = function() {
          return t2.stats['assumptions_task.dat_9'];
        }), {
          passes: 1,
          fails: 0
        });
        this.eq((Ω_108 = function() {
          return t2.stats['assumptions_task.dat_10'];
        }), {
          passes: 0,
          fails: 1
        });
        this.eq((Ω_109 = function() {
          return t2.stats['assumptions_task.dat_11'];
        }), {
          passes: 0,
          fails: 1
        });
        this.eq((Ω_110 = function() {
          return t2.stats['assumptions_task.dat_12'];
        }), {
          passes: 1,
          fails: 0
        });
        this.eq((Ω_111 = function() {
          return t2.stats['assumptions_task.dat_13'];
        }), {
          passes: 1,
          fails: 0
        });
        this.eq((Ω_112 = function() {
          return t2.stats['assumptions_task.dat_14'];
        }), {
          passes: 0,
          fails: 1
        });
        this.eq((Ω_113 = function() {
          return t2.stats['assumptions_task.dat_15'];
        }), {
          passes: 1,
          fails: 0
        });
        this.eq((Ω_114 = function() {
          return t2.stats['assumptions_task.dat_16'];
        }), {
          passes: 0,
          fails: 1
        });
        this.eq((Ω_115 = function() {
          return t2.stats['assumptions_task.dat_17'];
        }), {
          passes: 0,
          fails: 1
        });
        this.eq((Ω_116 = function() {
          return t2.stats['assumptions_task.dat_18'];
        }), {
          passes: 1,
          fails: 0
        });
        this.eq((Ω_117 = function() {
          return t2.stats['assumptions_task.dat_19'];
        }), {
          passes: 0,
          fails: 1
        });
        this.eq((Ω_118 = function() {
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
  //   debug 'Ω_119'
  //   @eq ( Ω_120 = -> 1 ), 1
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
      // await ( new Test cfg ).async_test @TT
      // ( new Test cfg ).test @TT.pass_and_fail
      // Interface:  @TT.Interface,
      // Equality:   @TT.Equality,
      // set_equality_by_value: @TT.Equality.set_equality_by_value,
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=test-basics.js.map