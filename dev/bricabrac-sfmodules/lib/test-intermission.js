(async function() {
  'use strict';
  var FS, GTNG, GUY, PATH, SFMODULES, Test, alert, blue, bold, create_reducer, debug, demo_intervals_fn, echo, f, gold, green, grey, help, info, inspect, log, nfa, plain, praise, red, reverse, rpr, sum_of_data, tests, urge, warn, whisper, white;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('bricabrac-intermission'));

  ({rpr, inspect, echo, white, green, blue, gold, grey, red, bold, reverse, log} = GUY.trm);

  ({f} = require('../../../apps/effstring'));

  // write                     = ( p ) -> process.stdout.write p
  ({nfa} = require('../../../apps/normalize-function-arguments'));

  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  SFMODULES = require('../../../apps/bricabrac-sfmodules');

  FS = require('node:fs');

  PATH = require('node:path');

  //===========================================================================================================
  this.tests = tests = {
    //---------------------------------------------------------------------------------------------------------
    basic_runs: function() {
      var Run, Scatter, d, Ωimt___1, Ωimt___2, Ωimt___3, Ωimt___4, Ωimt___5, Ωimt___6, Ωimt___7, Ωimt___8, Ωimt___9;
      ({Run, Scatter} = SFMODULES.require_intermission());
      //.......................................................................................................
      d = new Run();
      this.eq((Ωimt___1 = function() {
        return [d, d.size];
      }), [
        {
          lo: 0,
          hi: 0
        },
        1
      ]);
      d = new Run(7);
      this.eq((Ωimt___2 = function() {
        return [d, d.size];
      }), [
        {
          lo: 7,
          hi: 7
        },
        1
      ]);
      d = new Run(7, 7);
      this.eq((Ωimt___3 = function() {
        return [d, d.size];
      }), [
        {
          lo: 7,
          hi: 7
        },
        1
      ]);
      d = new Run(7, 12);
      this.eq((Ωimt___4 = function() {
        return [d, d.size];
      }), [
        {
          lo: 7,
          hi: 12
        },
        6
      ]);
      d = new Run({
        lo: 7
      });
      this.eq((Ωimt___5 = function() {
        return [d, d.size];
      }), [
        {
          lo: 7,
          hi: 7
        },
        1
      ]);
      d = new Run({
        hi: 7
      });
      this.eq((Ωimt___6 = function() {
        return [d, d.size];
      }), [
        {
          lo: 7,
          hi: 7
        },
        1
      ]);
      d = new Run({
        lo: 7,
        hi: 7
      });
      this.eq((Ωimt___7 = function() {
        return [d, d.size];
      }), [
        {
          lo: 7,
          hi: 7
        },
        1
      ]);
      d = new Run({
        lo: 7,
        hi: 21
      });
      this.eq((Ωimt___8 = function() {
        return [d, d.size];
      }), [
        {
          lo: 7,
          hi: 21
        },
        15
      ]);
      //.......................................................................................................
      this.eq((Ωimt___9 = function() {
        return new Run().scatter;
      }), null);
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    basic_scatters: function() {
      var Run, Scatter;
      ({Run, Scatter} = SFMODULES.require_intermission());
      (() => {        //.......................................................................................................
        var s, Ωimt__10, Ωimt__11, Ωimt__12, Ωimt__13, Ωimt__14, Ωimt__15, Ωimt__17, Ωimt__18, Ωimt__19, Ωimt__20;
        s = new Scatter({
          data: {
            a: 1
          }
        });
        this.eq((Ωimt__10 = function() {
          return s;
        }), {
          data: {
            a: 1
          },
          runs: []
        });
        this.eq((Ωimt__11 = function() {
          return s.is_normalized;
        }), true);
        //.....................................................................................................
        s.add({
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__12 = function() {
          return s.runs.length;
        }), 1);
        s.add(1);
        this.eq((Ωimt__13 = function() {
          return s.runs.length;
        }), 2);
        s.add(new Run({
          lo: 1,
          hi: 1
        }));
        this.eq((Ωimt__14 = function() {
          return s.runs.length;
        }), 3);
        //.....................................................................................................
        this.eq((Ωimt__15 = function() {
          return s.is_normalized;
        }), false);
        // @eq ( Ωimt__16 = -> s.is_sorted       ), false
        this.eq((Ωimt__17 = function() {
          return s.data;
        }), {
          a: 1
        });
        this.eq((Ωimt__18 = function() {
          return s.runs[0];
        }), {
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__19 = function() {
          return s.runs[1];
        }), {
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__20 = function() {
          return s.runs[2];
        }), {
          lo: 1,
          hi: 1
        });
        return null;
      })();
      (() => {        //.......................................................................................................
        var s, Ωimt__21, Ωimt__23, Ωimt__24, Ωimt__25, Ωimt__26, Ωimt__27, Ωimt__28, Ωimt__29, Ωimt__30, Ωimt__31, Ωimt__32;
        s = new Scatter({
          data: {
            a: 2
          },
          sort: true
        });
        this.eq((Ωimt__21 = function() {
          return s.is_normalized;
        }), true);
        // @eq ( Ωimt__22 = -> s.is_sorted       ), false
        s.add({
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__23 = function() {
          return s.runs.length;
        }), 1);
        this.eq((Ωimt__24 = function() {
          return s.is_normalized;
        }), false);
        s.add(1);
        this.eq((Ωimt__25 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt__26 = function() {
          return s.is_normalized;
        }), false);
        s.add(new Run({
          lo: 1,
          hi: 1
        }));
        this.eq((Ωimt__27 = function() {
          return s.runs.length;
        }), 3);
        this.eq((Ωimt__28 = function() {
          return s.is_normalized;
        }), false);
        //.....................................................................................................
        this.eq((Ωimt__29 = function() {
          return s.data;
        }), {
          a: 2
        });
        this.eq((Ωimt__30 = function() {
          return s.runs[0];
        }), {
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__31 = function() {
          return s.runs[1];
        }), {
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__32 = function() {
          return s.runs[2];
        }), {
          lo: 1,
          hi: 1
        });
        return null;
      })();
      (() => {        //.......................................................................................................
        var s, Ωimt__33, Ωimt__34, Ωimt__35, Ωimt__36, Ωimt__37, Ωimt__38, Ωimt__39, Ωimt__40, Ωimt__41;
        s = new Scatter({
          data: {
            a: 3
          },
          normalize: true
        });
        this.eq((Ωimt__33 = function() {
          return s.is_normalized;
        }), true);
        s.add({
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__34 = function() {
          return s.runs.length;
        }), 1);
        this.eq((Ωimt__35 = function() {
          return s.is_normalized;
        }), true);
        s.add(1);
        this.eq((Ωimt__36 = function() {
          return s.runs.length;
        }), 1);
        this.eq((Ωimt__37 = function() {
          return s.is_normalized;
        }), true);
        s.add(new Run({
          lo: 1,
          hi: 1
        }));
        this.eq((Ωimt__38 = function() {
          return s.runs.length;
        }), 1);
        this.eq((Ωimt__39 = function() {
          return s.is_normalized;
        }), true);
        //.....................................................................................................
        this.eq((Ωimt__40 = function() {
          return s.data;
        }), {
          a: 3
        });
        this.eq((Ωimt__41 = function() {
          return s.runs[0];
        }), {
          lo: 1,
          hi: 1
        });
        return null;
      })();
      (() => {        //.......................................................................................................
        var i, len, ref, run, s, Ωimt__42, Ωimt__43, Ωimt__44, Ωimt__45, Ωimt__46, Ωimt__47, Ωimt__48, Ωimt__50, Ωimt__51, Ωimt__52;
        s = new Scatter({
          data: {
            a: 4
          },
          normalize: true
        });
        this.eq((Ωimt__42 = function() {
          return s.is_normalized;
        }), true);
        s.add(103);
        this.eq((Ωimt__43 = function() {
          return s.runs.length;
        }), 1);
        this.eq((Ωimt__44 = function() {
          return s.is_normalized;
        }), true);
        s.add(100);
        this.eq((Ωimt__45 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt__46 = function() {
          return s.is_normalized;
        }), true);
        s.add(101);
        this.eq((Ωimt__47 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt__48 = function() {
          return s.is_normalized;
        }), true);
        ref = s.runs;
        for (i = 0, len = ref.length; i < len; i++) {
          run = ref[i];
          //.....................................................................................................
          debug('Ωimt__49', run);
        }
        this.eq((Ωimt__50 = function() {
          return s.data;
        }), {
          a: 4
        });
        this.eq((Ωimt__51 = function() {
          return s.runs[0];
        }), {
          lo: 100,
          hi: 101
        });
        this.eq((Ωimt__52 = function() {
          return s.runs[1];
        }), {
          lo: 103,
          hi: 103
        });
        return null;
      })();
      (() => {        //.......................................................................................................
        var s, Ωimt__53, Ωimt__54, Ωimt__55, Ωimt__56, Ωimt__57, Ωimt__58, Ωimt__59, Ωimt__60;
        s = new Scatter({
          normalize: true
        });
        this.eq((Ωimt__53 = function() {
          return s.is_normalized;
        }), true);
        s.add(103, 109);
        this.eq((Ωimt__54 = function() {
          return s.runs.length;
        }), 1);
        this.eq((Ωimt__55 = function() {
          return s.is_normalized;
        }), true);
        s.add(111, 115);
        this.eq((Ωimt__56 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt__57 = function() {
          return s.is_normalized;
        }), true);
        s.add(110);
        this.eq((Ωimt__58 = function() {
          return s.runs.length;
        }), 1);
        this.eq((Ωimt__59 = function() {
          return s.is_normalized;
        }), true);
        //.....................................................................................................
        this.eq((Ωimt__60 = function() {
          return s.runs[0];
        }), {
          lo: 103,
          hi: 115
        });
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    containment: function() {
      var Run, Scatter;
      ({Run, Scatter} = SFMODULES.require_intermission());
      (() => {        //.......................................................................................................
        var s, Ωimt__61, Ωimt__62, Ωimt__63, Ωimt__64, Ωimt__65, Ωimt__66, Ωimt__67, Ωimt__68, Ωimt__69, Ωimt__70, Ωimt__71, Ωimt__72, Ωimt__73, Ωimt__74, Ωimt__75, Ωimt__76, Ωimt__77, Ωimt__78, Ωimt__79, Ωimt__80, Ωimt__81, Ωimt__82, Ωimt__83;
        s = new Scatter();
        s.add(25, 30);
        s.add(32, 40);
        this.eq((Ωimt__61 = function() {
          return s.has(21);
        }), false);
        this.eq((Ωimt__62 = function() {
          return s.has(22);
        }), false);
        this.eq((Ωimt__63 = function() {
          return s.has(23);
        }), false);
        this.eq((Ωimt__64 = function() {
          return s.has(24);
        }), false);
        this.eq((Ωimt__65 = function() {
          return s.has(25);
        }), true);
        this.eq((Ωimt__66 = function() {
          return s.has(26);
        }), true);
        this.eq((Ωimt__67 = function() {
          return s.has(27);
        }), true);
        this.eq((Ωimt__68 = function() {
          return s.has(28);
        }), true);
        this.eq((Ωimt__69 = function() {
          return s.has(29);
        }), true);
        this.eq((Ωimt__70 = function() {
          return s.has(30);
        }), true);
        this.eq((Ωimt__71 = function() {
          return s.has(31);
        }), false);
        this.eq((Ωimt__72 = function() {
          return s.has(32);
        }), true);
        this.eq((Ωimt__73 = function() {
          return s.has(33);
        }), true);
        this.eq((Ωimt__74 = function() {
          return s.has(34);
        }), true);
        this.eq((Ωimt__75 = function() {
          return s.has(35);
        }), true);
        this.eq((Ωimt__76 = function() {
          return s.has(36);
        }), true);
        this.eq((Ωimt__77 = function() {
          return s.has(37);
        }), true);
        this.eq((Ωimt__78 = function() {
          return s.has(38);
        }), true);
        this.eq((Ωimt__79 = function() {
          return s.has(39);
        }), true);
        this.eq((Ωimt__80 = function() {
          return s.has(40);
        }), true);
        this.eq((Ωimt__81 = function() {
          return s.has(41);
        }), false);
        this.eq((Ωimt__82 = function() {
          return s.has(42);
        }), false);
        this.eq((Ωimt__83 = function() {
          return s.has(43);
        }), false);
        return null;
      })();
      //.......................................................................................................
      return null;
    }
  };

  // #---------------------------------------------------------------------------------------------------------
  // gapped_scatters: ->
  //   { Run,
  //     Scatter,                  } = SFMODULES.require_intermission()
  //   #.......................................................................................................
  //   do =>
  //     s = new Scatter()
  //     s.subtract i for i in [ 0 .. 99 ] when ( i %% 2 ) is 0
  //     s.add 25, 30
  //     s.add 32, 40
  //     @eq ( Ωimt__84 = -> s.has 21       ), false
  //     @eq ( Ωimt__85 = -> s.has 22       ), false
  //     @eq ( Ωimt__86 = -> s.has 23       ), false
  //     @eq ( Ωimt__87 = -> s.has 24       ), false
  //     @eq ( Ωimt__88 = -> s.has 25       ), true
  //     @eq ( Ωimt__89 = -> s.has 26       ), true
  //     @eq ( Ωimt__90 = -> s.has 27       ), true
  //     @eq ( Ωimt__91 = -> s.has 28       ), true
  //     @eq ( Ωimt__92 = -> s.has 29       ), true
  //     @eq ( Ωimt__93 = -> s.has 30       ), true
  //     @eq ( Ωimt__94 = -> s.has 31       ), false
  //     @eq ( Ωimt__95 = -> s.has 32       ), true
  //     @eq ( Ωimt__96 = -> s.has 33       ), true
  //     @eq ( Ωimt__97 = -> s.has 34       ), true
  //     @eq ( Ωimt__98 = -> s.has 35       ), true
  //     @eq ( Ωimt__99 = -> s.has 36       ), true
  //     @eq ( Ωimt_100 = -> s.has 37       ), true
  //     @eq ( Ωimt_101 = -> s.has 38       ), true
  //     @eq ( Ωimt_102 = -> s.has 39       ), true
  //     @eq ( Ωimt_103 = -> s.has 40       ), true
  //     @eq ( Ωimt_104 = -> s.has 41       ), false
  //     @eq ( Ωimt_105 = -> s.has 42       ), false
  //     @eq ( Ωimt_106 = -> s.has 43       ), false
  //     ;null
  //   #.......................................................................................................
  //   return null
  f = function() {};

  //-----------------------------------------------------------------------------------------------------------
  sum_of_data = (a, b) => {
    var data, ref, ref1;
    data = [(ref = a.data) != null ? ref : [], (ref1 = b.data) != null ? ref1 : []].flat();
    // debug 'Ωimt_107', { a, b, }
    // debug 'Ωimt_108', { a..., data, }
    return {...a, data};
  };

  create_reducer = function(fn) {
    return (ranges) => {
      return ranges.reduce(fn);
    };
  };

  demo_intervals_fn = function() {
    var a, b, e, i, len, merge_data_2, merged, rng, rng_2;
    (() => {      // debug 'Ωimt_109', ( k for k of IFN ).sort()
      //=========================================================================================================
      var i, idx, len, merged, rng, rng_1;
      rng_1 = [
        {
          start: 1,
          end: 10,
          data: 5
        },
        {
          start: 4,
          end: 7,
          data: 10
        },
        {
          start: 4,
          end: 12,
          data: 12
        },
        {
          start: 0,
          end: 100,
          data: 102
        },
        {
          start: 0,
          end: 100,
          data: 101
        }
      ];
      merged = IFN.merge(create_reducer(sum_of_data), rng_1);
      //.........................................................................................................
      urge();
      for (idx = i = 0, len = merged.length; i < len; idx = ++i) {
        rng = merged[idx];
        urge('Ωimt_110', idx + 1, rng);
      }
      urge();
      return null;
    })();
    (() => {      //=========================================================================================================
      var i, idx, len, merged, ref, rng, rng_1;
      rng_1 = new Rangeset(1);
      rng_1.add({
        lo: 1,
        hi: 9
      });
      rng_1.add({
        lo: 4,
        hi: 6
      });
      rng_1.add({
        lo: 4,
        hi: 11
      });
      rng_1.add({
        lo: 0,
        hi: 99
      });
      rng_1.add({
        lo: 0,
        hi: 99
      });
      merged = rng_1.merge(create_reducer(sum_of_data));
      //.........................................................................................................
      urge();
      ref = merged.ranges;
      for (idx = i = 0, len = ref.length; i < len; idx = ++i) {
        rng = ref[idx];
        urge('Ωimt_111', idx + 1, rng);
      }
      urge();
      return null;
    })();
    //.........................................................................................................
    a = {
      start: 40,
      end: 49
    };
    b = {
      start: 50,
      end: 59
    };
    help('Ωimt_112', a, b, {
      meeting: IFN.isMeeting(a, b),
      overlapping: IFN.isOverlapping(a, b),
      overlapping_s: IFN.isOverlappingSimple(a, b)
    });
    a = {
      start: 40,
      end: 50
    };
    b = {
      start: 50,
      end: 59
    };
    help('Ωimt_113', a, b, {
      meeting: IFN.isMeeting(a, b),
      overlapping: IFN.isOverlapping(a, b),
      overlapping_s: IFN.isOverlappingSimple(a, b)
    });
    a = {
      start: 40,
      end: 51
    };
    b = {
      start: 50,
      end: 59
    };
    help('Ωimt_114', a, b, {
      meeting: IFN.isMeeting(a, b),
      overlapping: IFN.isOverlapping(a, b),
      overlapping_s: IFN.isOverlappingSimple(a, b)
    });
    a = {
      start: 40,
      end: 52
    };
    b = {
      start: 50,
      end: 59
    };
    help('Ωimt_115', a, b, {
      meeting: IFN.isMeeting(a, b),
      overlapping: IFN.isOverlapping(a, b),
      overlapping_s: IFN.isOverlappingSimple(a, b)
    });
    a = {
      start: 5,
      end: 10
    };
    b = {
      start: 0,
      end: 4
    };
    help('Ωimt_116', a, b, {
      meeting: IFN.isMeeting(a, b),
      overlapping: IFN.isOverlapping(a, b),
      overlapping_s: IFN.isOverlappingSimple(a, b)
    });
    a = {
      start: 5,
      end: 10
    };
    b = {
      start: 7,
      end: 8
    };
    help('Ωimt_117', a, b, {
      meeting: IFN.isMeeting(a, b),
      overlapping: IFN.isOverlapping(a, b),
      overlapping_s: IFN.isOverlappingSimple(a, b)
    });
    try {
      a = {
        start: 5,
        end: 10
      };
      b = [
        {
          start: 0,
          end: 4
        },
        {
          start: 7,
          end: 8
        }
      ];
      help('Ωimt_118', a, b, {
        meeting: IFN.isMeeting(a, b),
        overlapping: IFN.isOverlapping(a, b),
        overlapping_s: IFN.isOverlappingSimple(a, b)
      });
    } catch (error) {
      e = error;
      warn('Ωimt_119', e.message);
    }
    info();
    info('Ωimt_120', IFN.simplify([]));
    info('Ωimt_121', IFN.simplify([
      {
        start: 4,
        end: 20
      }
    ]));
    info('Ωimt_122', IFN.simplify([
      {
        start: 4,
        end: 18
      },
      {
        start: 19,
        end: 22
      }
    ]));
    info('Ωimt_123', IFN.simplify([
      {
        start: 4,
        end: 19
      },
      {
        start: 19,
        end: 22
      }
    ]));
    info('Ωimt_124', IFN.simplify([
      {
        start: 4,
        end: 20
      },
      {
        start: 19,
        end: 22
      }
    ]));
    info('Ωimt_125', IFN.simplify([
      {
        start: 4,
        end: 21
      },
      {
        start: 19,
        end: 22
      }
    ]));
    info('Ωimt_126', IFN.simplify([
      {
        start: 3,
        end: 9
      },
      {
        start: 9,
        end: 13
      }
    ]));
    info('Ωimt_127', IFN.simplify([
      {
        start: 3,
        end: 9
      },
      {
        start: 9,
        end: 13
      },
      {
        start: 11,
        end: 14 // [{ start: 3, end: 14 }]
      }
    ]));
    info('Ωimt_128', IFN.simplify([
      {
        start: 3,
        end: 9
      },
      {
        start: 10,
        end: 13
      },
      {
        start: 11,
        end: 14
      }
    ]));
    info();
    info('Ωimt_129', ((new Rangeset()).add()).simplify());
    info('Ωimt_130', ((new Rangeset()).add({
      start: 4,
      end: 20
    })).simplify());
    info('Ωimt_131', ((new Rangeset()).add({
      start: 4,
      end: 18
    }, {
      start: 19,
      end: 22
    })).simplify());
    info('Ωimt_132', ((new Rangeset()).add({
      start: 4,
      end: 19
    }, {
      start: 19,
      end: 22
    })).simplify());
    info('Ωimt_133', ((new Rangeset()).add({
      start: 4,
      end: 20
    }, {
      start: 19,
      end: 22
    })).simplify());
    info('Ωimt_134', ((new Rangeset()).add({
      start: 4,
      end: 21
    }, {
      start: 19,
      end: 22
    })).simplify());
    info('Ωimt_135', ((new Rangeset()).add({
      start: 3,
      end: 9
    }, {
      start: 9,
      end: 13
    })).simplify());
    info('Ωimt_136', ((new Rangeset()).add({
      start: 3,
      end: 9
    }, {
      start: 9,
      end: 13
    }, {
      start: 11,
      end: 14
    })).simplify()); // [{ start: 3, end: 14 }]
    info('Ωimt_137', ((new Rangeset()).add({
      start: 3,
      end: 9
    }, {
      start: 10,
      end: 13
    }, {
      start: 11,
      end: 14
    })).simplify());
    info();
    info('Ωimt_138', ((new Rangeset()).add()).simplify());
    info('Ωimt_139', ((new Rangeset()).add({
      lo: 4,
      hi: 19
    })).simplify());
    info('Ωimt_140', ((new Rangeset()).add({
      lo: 4,
      hi: 17
    }, {
      lo: 19,
      hi: 21
    })).simplify());
    info('Ωimt_141', ((new Rangeset()).add({
      lo: 4,
      hi: 18
    }, {
      lo: 19,
      hi: 21
    })).simplify());
    info('Ωimt_142', ((new Rangeset()).add({
      lo: 4,
      hi: 19
    }, {
      lo: 19,
      hi: 21
    })).simplify());
    info('Ωimt_143', ((new Rangeset()).add({
      lo: 4,
      hi: 20
    }, {
      lo: 19,
      hi: 21
    })).simplify());
    info('Ωimt_144', ((new Rangeset()).add({
      lo: 3,
      hi: 8
    }, {
      lo: 9,
      hi: 12
    })).simplify());
    info('Ωimt_145', ((new Rangeset()).add({
      lo: 3,
      hi: 8
    }, {
      lo: 9,
      hi: 12
    }, {
      lo: 11,
      hi: 13
    })).simplify()); // [{ lo: 3, hi: 13 }]
    info('Ωimt_146', ((new Rangeset()).add({
      lo: 3,
      hi: 8
    }, {
      lo: 10,
      hi: 12
    }, {
      lo: 11,
      hi: 13
    })).simplify());
    rng_2 = [
      {
        start: 3,
        end: 10,
        data: 2
      },
      {
        start: 9,
        end: 13,
        data: 3
      },
      {
        start: 11,
        end: 14,
        data: 5
      }
    ];
    merge_data_2 = function(a, b) {
      return {
        // debug 'Ωimt_147', { a, b, } #, { a..., b..., }
        ...a,
        data: a.data * b.data
      };
    };
    merged = IFN.merge(create_reducer(merge_data_2), rng_2); // [{ start: 3, end: 14 }]
    for (i = 0, len = merged.length; i < len; i++) {
      rng = merged[i];
      info('Ωimt_148', rng);
    }
    // urge 'Ωimt_149', rng for rng in merged_ft
    // urge()
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var guytest_cfg;
      // demo_infinite_proxy()
      // demo_colorful_proxy()
      guytest_cfg = {
        throw_on_error: true,
        show_passes: false,
        report_checks: false
      };
      guytest_cfg = {
        throw_on_error: false,
        show_passes: true,
        report_checks: true
      };
      guytest_cfg = {
        throw_on_error: false,
        show_passes: false,
        report_checks: false
      };
      return (new Test(guytest_cfg)).test({tests});
    })();
  }

  // ( new Test guytest_cfg ).test { dbric_std_generate_series: tests.dbric_std_generate_series, }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtaW50ZXJtaXNzaW9uLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxFQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsU0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxjQUFBLEVBQUEsS0FBQSxFQUFBLGlCQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsV0FBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBOzs7RUFHQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLHdCQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsS0FIRixFQUlFLEtBSkYsRUFLRSxJQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxHQVJGLEVBU0UsSUFURixFQVVFLE9BVkYsRUFXRSxHQVhGLENBQUEsR0FXNEIsR0FBRyxDQUFDLEdBWGhDOztFQVlBLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLHlCQUFSLENBQTVCLEVBekJBOzs7RUEyQkEsQ0FBQSxDQUFFLEdBQUYsQ0FBQSxHQUE0QixPQUFB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QUksRUFBTjtNQUFVLEVBQUEsRUFBSTtJQUFkLENBQTNDLENBQUYsQ0FBbUcsQ0FBQyxRQUFwRyxDQUFBLENBQWpCO0lBQ0EsSUFBQSxDQUFLLFVBQUwsRUFBaUIsQ0FBRSxDQUFFLElBQUksUUFBSixDQUFBLENBQUYsQ0FBa0IsQ0FBQyxHQUFuQixDQUF1QjtNQUFFLEVBQUEsRUFBSSxDQUFOO01BQVMsRUFBQSxFQUFJO0lBQWIsQ0FBdkIsRUFBMkM7TUFBRSxFQUFBLEVBQUksRUFBTjtNQUFVLEVBQUEsRUFBSTtJQUFkLENBQTNDLENBQUYsQ0FBbUcsQ0FBQyxRQUFwRyxDQUFBLENBQWpCO0lBQ0EsSUFBQSxDQUFLLFVBQUwsRUFBaUIsQ0FBRSxDQUFFLElBQUksUUFBSixDQUFBLENBQUYsQ0FBa0IsQ0FBQyxHQUFuQixDQUF1QjtNQUFFLEVBQUEsRUFBSSxDQUFOO01BQVMsRUFBQSxFQUFJO0lBQWIsQ0FBdkIsRUFBMkM7TUFBRSxFQUFBLEVBQUksRUFBTjtNQUFVLEVBQUEsRUFBSTtJQUFkLENBQTNDLENBQUYsQ0FBbUcsQ0FBQyxRQUFwRyxDQUFBLENBQWpCO0lBQ0EsSUFBQSxDQUFLLFVBQUwsRUFBaUIsQ0FBRSxDQUFFLElBQUksUUFBSixDQUFBLENBQUYsQ0FBa0IsQ0FBQyxHQUFuQixDQUF1QjtNQUFFLEVBQUEsRUFBSSxDQUFOO01BQVMsRUFBQSxFQUFJO0lBQWIsQ0FBdkIsRUFBMkM7TUFBRSxFQUFBLEVBQUksRUFBTjtNQUFVLEVBQUEsRUFBSTtJQUFkLENBQTNDLENBQUYsQ0FBbUcsQ0FBQyxRQUFwRyxDQUFBLENBQWpCO0lBQ0EsSUFBQSxDQUFLLFVBQUwsRUFBaUIsQ0FBRSxDQUFFLElBQUksUUFBSixDQUFBLENBQUYsQ0FBa0IsQ0FBQyxHQUFuQixDQUF1QjtNQUFFLEVBQUEsRUFBSSxDQUFOO01BQVMsRUFBQSxFQUFLO0lBQWQsQ0FBdkIsRUFBMkM7TUFBRSxFQUFBLEVBQUssQ0FBUDtNQUFVLEVBQUEsRUFBSTtJQUFkLENBQTNDLENBQUYsQ0FBbUcsQ0FBQyxRQUFwRyxDQUFBLENBQWpCO0lBQ0EsSUFBQSxDQUFLLFVBQUwsRUFBaUIsQ0FBRSxDQUFFLElBQUksUUFBSixDQUFBLENBQUYsQ0FBa0IsQ0FBQyxHQUFuQixDQUF1QjtNQUFFLEVBQUEsRUFBSSxDQUFOO01BQVMsRUFBQSxFQUFLO0lBQWQsQ0FBdkIsRUFBMkM7TUFBRSxFQUFBLEVBQUssQ0FBUDtNQUFVLEVBQUEsRUFBSTtJQUFkLENBQTNDLEVBQWdFO01BQUUsRUFBQSxFQUFJLEVBQU47TUFBVSxFQUFBLEVBQUk7SUFBZCxDQUFoRSxDQUFGLENBQW1HLENBQUMsUUFBcEcsQ0FBQSxDQUFqQixFQXBFRjtJQXFFRSxJQUFBLENBQUssVUFBTCxFQUFpQixDQUFFLENBQUUsSUFBSSxRQUFKLENBQUEsQ0FBRixDQUFrQixDQUFDLEdBQW5CLENBQXVCO01BQUUsRUFBQSxFQUFJLENBQU47TUFBUyxFQUFBLEVBQUs7SUFBZCxDQUF2QixFQUEyQztNQUFFLEVBQUEsRUFBSSxFQUFOO01BQVUsRUFBQSxFQUFJO0lBQWQsQ0FBM0MsRUFBZ0U7TUFBRSxFQUFBLEVBQUksRUFBTjtNQUFVLEVBQUEsRUFBSTtJQUFkLENBQWhFLENBQUYsQ0FBbUcsQ0FBQyxRQUFwRyxDQUFBLENBQWpCO0lBQ0EsS0FBQSxHQUFRO01BQ047UUFBRSxLQUFBLEVBQVEsQ0FBVjtRQUFhLEdBQUEsRUFBSyxFQUFsQjtRQUFzQixJQUFBLEVBQU07TUFBNUIsQ0FETTtNQUVOO1FBQUUsS0FBQSxFQUFRLENBQVY7UUFBYSxHQUFBLEVBQUssRUFBbEI7UUFBc0IsSUFBQSxFQUFNO01BQTVCLENBRk07TUFHTjtRQUFFLEtBQUEsRUFBTyxFQUFUO1FBQWEsR0FBQSxFQUFLLEVBQWxCO1FBQXNCLElBQUEsRUFBTTtNQUE1QixDQUhNOztJQUtSLFlBQUEsR0FBZSxRQUFBLENBQUUsQ0FBRixFQUFLLENBQUwsQ0FBQTtBQUViLGFBQU8sQ0FBQTs7UUFBRSxHQUFBLENBQUY7UUFBUSxJQUFBLEVBQU0sQ0FBQyxDQUFDLElBQUYsR0FBUyxDQUFDLENBQUM7TUFBekI7SUFGTTtJQUdmLE1BQUEsR0FBUyxHQUFHLENBQUMsS0FBSixDQUFZLGNBQUEsQ0FBZSxZQUFmLENBQVosRUFBMkMsS0FBM0MsRUE5RVg7SUErRUUsS0FBQSx3Q0FBQTs7TUFBQSxJQUFBLENBQUssVUFBTCxFQUFpQixHQUFqQjtJQUFBLENBL0VGOzs7V0FrRkc7RUFuRmlCLEVBcE5wQjs7O0VBMlNBLElBQUcsTUFBQSxLQUFVLE9BQU8sQ0FBQyxJQUFyQjtJQUErQixNQUFTLENBQUEsQ0FBQSxDQUFBLEdBQUE7QUFDeEMsVUFBQSxXQUFBOzs7TUFFRSxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLElBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLEtBQWxCO1FBQTBCLFdBQUEsRUFBYSxJQUF2QztRQUE2QyxhQUFBLEVBQWU7TUFBNUQ7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLEtBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7YUFDZCxDQUFFLElBQUksSUFBSixDQUFTLFdBQVQsQ0FBRixDQUF3QixDQUFDLElBQXpCLENBQThCLENBQUUsS0FBRixDQUE5QjtJQU5zQyxDQUFBLElBQXhDOzs7RUEzU0E7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2JyaWNhYnJhYy1pbnRlcm1pc3Npb24nXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgZ3JlZW5cbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiMgd3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcbnsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuRlMgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6ZnMnXG5QQVRIICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkB0ZXN0cyA9IHRlc3RzID1cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGJhc2ljX3J1bnM6IC0+XG4gICAgeyBSdW4sXG4gICAgICBTY2F0dGVyLCAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9pbnRlcm1pc3Npb24oKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZCA9IG5ldyBSdW4oKTsgICAgICAgICAgICAgICAgICBAZXEgKCDOqWltdF9fXzEgPSAtPiBbIGQsIGQuc2l6ZSwgXSApLCBbIHsgbG86IDAsIGhpOiAwLCB9LCAgMSwgXVxuICAgIGQgPSBuZXcgUnVuIDc7ICAgICAgICAgICAgICAgICAgQGVxICggzqlpbXRfX18yID0gLT4gWyBkLCBkLnNpemUsIF0gKSwgWyB7IGxvOiA3LCBoaTogNywgfSwgIDEsIF1cbiAgICBkID0gbmV3IFJ1biA3LCA3OyAgICAgICAgICAgICAgIEBlcSAoIM6paW10X19fMyA9IC0+IFsgZCwgZC5zaXplLCBdICksIFsgeyBsbzogNywgaGk6IDcsIH0sICAxLCBdXG4gICAgZCA9IG5ldyBSdW4gNywgMTI7ICAgICAgICAgICAgICBAZXEgKCDOqWltdF9fXzQgPSAtPiBbIGQsIGQuc2l6ZSwgXSApLCBbIHsgbG86IDcsIGhpOiAxMiwgfSwgNiwgXVxuICAgIGQgPSBuZXcgUnVuIHsgbG86IDcsIH07ICAgICAgICAgQGVxICggzqlpbXRfX181ID0gLT4gWyBkLCBkLnNpemUsIF0gKSwgWyB7IGxvOiA3LCBoaTogNywgfSwgIDEsIF1cbiAgICBkID0gbmV3IFJ1biB7IGhpOiA3LCB9OyAgICAgICAgIEBlcSAoIM6paW10X19fNiA9IC0+IFsgZCwgZC5zaXplLCBdICksIFsgeyBsbzogNywgaGk6IDcsIH0sICAxLCBdXG4gICAgZCA9IG5ldyBSdW4geyBsbzogNywgaGk6IDcsIH07ICBAZXEgKCDOqWltdF9fXzcgPSAtPiBbIGQsIGQuc2l6ZSwgXSApLCBbIHsgbG86IDcsIGhpOiA3LCB9LCAgMSwgXVxuICAgIGQgPSBuZXcgUnVuIHsgbG86IDcsIGhpOiAyMSwgfTsgQGVxICggzqlpbXRfX184ID0gLT4gWyBkLCBkLnNpemUsIF0gKSwgWyB7IGxvOiA3LCBoaTogMjEsIH0sIDE1LCBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgKCDOqWltdF9fXzkgPSAtPiBuZXcgUnVuKCkuc2NhdHRlciApLCBudWxsXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGJhc2ljX3NjYXR0ZXJzOiAtPlxuICAgIHsgUnVuLFxuICAgICAgU2NhdHRlciwgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfaW50ZXJtaXNzaW9uKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBzID0gbmV3IFNjYXR0ZXIgeyBkYXRhOiB7IGE6IDEsIH0gfVxuICAgICAgQGVxICggzqlpbXRfXzEwID0gLT4gcyApLCB7IGRhdGE6IHsgYTogMSwgfSwgcnVuczogW10sIH1cbiAgICAgIEBlcSAoIM6paW10X18xMSA9IC0+IHMuaXNfbm9ybWFsaXplZCAgICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcy5hZGQgeyBsbzogMSwgaGk6IDEsIH07ICAgICAgICAgIEBlcSAoIM6paW10X18xMiA9IC0+IHMucnVucy5sZW5ndGggICAgICksIDFcbiAgICAgIHMuYWRkIDE7ICAgICAgICAgICAgICAgICAgICAgICAgICBAZXEgKCDOqWltdF9fMTMgPSAtPiBzLnJ1bnMubGVuZ3RoICAgICApLCAyXG4gICAgICBzLmFkZCBuZXcgUnVuIHsgbG86IDEsIGhpOiAxLCB9OyAgQGVxICggzqlpbXRfXzE0ID0gLT4gcy5ydW5zLmxlbmd0aCAgICAgKSwgM1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWltdF9fMTUgPSAtPiBzLmlzX25vcm1hbGl6ZWQgICApLCBmYWxzZVxuICAgICAgIyBAZXEgKCDOqWltdF9fMTYgPSAtPiBzLmlzX3NvcnRlZCAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzE3ID0gLT4gcy5kYXRhICAgICAgICAgICAgKSwgeyBhOiAxLCB9XG4gICAgICBAZXEgKCDOqWltdF9fMTggPSAtPiBzLnJ1bnNbIDAgXSAgICAgICApLCB7IGxvOiAxLCBoaTogMSwgfVxuICAgICAgQGVxICggzqlpbXRfXzE5ID0gLT4gcy5ydW5zWyAxIF0gICAgICAgKSwgeyBsbzogMSwgaGk6IDEsIH1cbiAgICAgIEBlcSAoIM6paW10X18yMCA9IC0+IHMucnVuc1sgMiBdICAgICAgICksIHsgbG86IDEsIGhpOiAxLCB9XG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHMgPSBuZXcgU2NhdHRlciB7IGRhdGE6IHsgYTogMiwgfSwgc29ydDogdHJ1ZSwgfVxuICAgICAgQGVxICggzqlpbXRfXzIxID0gLT4gcy5pc19ub3JtYWxpemVkICAgKSwgdHJ1ZVxuICAgICAgIyBAZXEgKCDOqWltdF9fMjIgPSAtPiBzLmlzX3NvcnRlZCAgICAgICApLCBmYWxzZVxuICAgICAgcy5hZGQgeyBsbzogMSwgaGk6IDEsIH07ICAgICAgICAgIEBlcSAoIM6paW10X18yMyA9IC0+IHMucnVucy5sZW5ndGggICAgICksIDE7IEBlcSAoIM6paW10X18yNCA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCBmYWxzZVxuICAgICAgcy5hZGQgMTsgICAgICAgICAgICAgICAgICAgICAgICAgIEBlcSAoIM6paW10X18yNSA9IC0+IHMucnVucy5sZW5ndGggICAgICksIDI7IEBlcSAoIM6paW10X18yNiA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCBmYWxzZVxuICAgICAgcy5hZGQgbmV3IFJ1biB7IGxvOiAxLCBoaTogMSwgfTsgIEBlcSAoIM6paW10X18yNyA9IC0+IHMucnVucy5sZW5ndGggICAgICksIDM7IEBlcSAoIM6paW10X18yOCA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCBmYWxzZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWltdF9fMjkgPSAtPiBzLmRhdGEgICAgICAgICAgICApLCB7IGE6IDIsIH1cbiAgICAgIEBlcSAoIM6paW10X18zMCA9IC0+IHMucnVuc1sgMCBdICAgICAgICksIHsgbG86IDEsIGhpOiAxLCB9XG4gICAgICBAZXEgKCDOqWltdF9fMzEgPSAtPiBzLnJ1bnNbIDEgXSAgICAgICApLCB7IGxvOiAxLCBoaTogMSwgfVxuICAgICAgQGVxICggzqlpbXRfXzMyID0gLT4gcy5ydW5zWyAyIF0gICAgICAgKSwgeyBsbzogMSwgaGk6IDEsIH1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgcyA9IG5ldyBTY2F0dGVyIHsgZGF0YTogeyBhOiAzLCB9LCBub3JtYWxpemU6IHRydWUsIH1cbiAgICAgIEBlcSAoIM6paW10X18zMyA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZCB7IGxvOiAxLCBoaTogMSwgfTsgICAgICAgICAgQGVxICggzqlpbXRfXzM0ID0gLT4gcy5ydW5zLmxlbmd0aCApLCAxOyBAZXEgKCDOqWltdF9fMzUgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGQgMTsgICAgICAgICAgICAgICAgICAgICAgICAgIEBlcSAoIM6paW10X18zNiA9IC0+IHMucnVucy5sZW5ndGggKSwgMTsgQGVxICggzqlpbXRfXzM3ID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIHMuYWRkIG5ldyBSdW4geyBsbzogMSwgaGk6IDEsIH07ICBAZXEgKCDOqWltdF9fMzggPSAtPiBzLnJ1bnMubGVuZ3RoICksIDE7IEBlcSAoIM6paW10X18zOSA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6paW10X180MCA9IC0+IHMuZGF0YSAgICAgICAgICAgICksIHsgYTogMywgfVxuICAgICAgQGVxICggzqlpbXRfXzQxID0gLT4gcy5ydW5zWyAwIF0gICAgICAgKSwgeyBsbzogMSwgaGk6IDEsIH1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgcyA9IG5ldyBTY2F0dGVyIHsgZGF0YTogeyBhOiA0LCB9LCBub3JtYWxpemU6IHRydWUsIH1cbiAgICAgIEBlcSAoIM6paW10X180MiA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZCAxMDM7ICBAZXEgKCDOqWltdF9fNDMgPSAtPiBzLnJ1bnMubGVuZ3RoICksIDE7IEBlcSAoIM6paW10X180NCA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZCAxMDA7ICBAZXEgKCDOqWltdF9fNDUgPSAtPiBzLnJ1bnMubGVuZ3RoICksIDI7IEBlcSAoIM6paW10X180NiA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZCAxMDE7ICBAZXEgKCDOqWltdF9fNDcgPSAtPiBzLnJ1bnMubGVuZ3RoICksIDI7IEBlcSAoIM6paW10X180OCA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRlYnVnICfOqWltdF9fNDknLCBydW4gZm9yIHJ1biBpbiBzLnJ1bnNcbiAgICAgIEBlcSAoIM6paW10X181MCA9IC0+IHMuZGF0YSAgICAgICAgICAgICksIHsgYTogNCwgfVxuICAgICAgQGVxICggzqlpbXRfXzUxID0gLT4gcy5ydW5zWyAwIF0gICAgICAgKSwgeyBsbzogMTAwLCBoaTogMTAxLCB9XG4gICAgICBAZXEgKCDOqWltdF9fNTIgPSAtPiBzLnJ1bnNbIDEgXSAgICAgICApLCB7IGxvOiAxMDMsIGhpOiAxMDMsIH1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgcyA9IG5ldyBTY2F0dGVyIHsgbm9ybWFsaXplOiB0cnVlLCB9XG4gICAgICBAZXEgKCDOqWltdF9fNTMgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGQgMTAzLCAxMDk7ICAgQGVxICggzqlpbXRfXzU0ID0gLT4gcy5ydW5zLmxlbmd0aCApLCAxOyBAZXEgKCDOqWltdF9fNTUgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGQgMTExLCAxMTU7ICAgQGVxICggzqlpbXRfXzU2ID0gLT4gcy5ydW5zLmxlbmd0aCApLCAyOyBAZXEgKCDOqWltdF9fNTcgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGQgMTEwOyAgICAgICAgQGVxICggzqlpbXRfXzU4ID0gLT4gcy5ydW5zLmxlbmd0aCApLCAxOyBAZXEgKCDOqWltdF9fNTkgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWltdF9fNjAgPSAtPiBzLnJ1bnNbIDAgXSAgICAgICApLCB7IGxvOiAxMDMsIGhpOiAxMTUsIH1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29udGFpbm1lbnQ6IC0+XG4gICAgeyBSdW4sXG4gICAgICBTY2F0dGVyLCAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9pbnRlcm1pc3Npb24oKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHMgPSBuZXcgU2NhdHRlcigpXG4gICAgICBzLmFkZCAyNSwgMzBcbiAgICAgIHMuYWRkIDMyLCA0MFxuICAgICAgQGVxICggzqlpbXRfXzYxID0gLT4gcy5oYXMgMjEgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10X182MiA9IC0+IHMuaGFzIDIyICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF9fNjMgPSAtPiBzLmhhcyAyMyAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzY0ID0gLT4gcy5oYXMgMjQgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10X182NSA9IC0+IHMuaGFzIDI1ICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X182NiA9IC0+IHMuaGFzIDI2ICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X182NyA9IC0+IHMuaGFzIDI3ICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X182OCA9IC0+IHMuaGFzIDI4ICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X182OSA9IC0+IHMuaGFzIDI5ICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X183MCA9IC0+IHMuaGFzIDMwICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X183MSA9IC0+IHMuaGFzIDMxICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF9fNzIgPSAtPiBzLmhhcyAzMiAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fNzMgPSAtPiBzLmhhcyAzMyAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fNzQgPSAtPiBzLmhhcyAzNCAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fNzUgPSAtPiBzLmhhcyAzNSAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fNzYgPSAtPiBzLmhhcyAzNiAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fNzcgPSAtPiBzLmhhcyAzNyAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fNzggPSAtPiBzLmhhcyAzOCAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fNzkgPSAtPiBzLmhhcyAzOSAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fODAgPSAtPiBzLmhhcyA0MCAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fODEgPSAtPiBzLmhhcyA0MSAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzgyID0gLT4gcy5oYXMgNDIgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10X184MyA9IC0+IHMuaGFzIDQzICAgICAgICksIGZhbHNlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyBnYXBwZWRfc2NhdHRlcnM6IC0+XG4gICMgICB7IFJ1bixcbiAgIyAgICAgU2NhdHRlciwgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfaW50ZXJtaXNzaW9uKClcbiAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICBkbyA9PlxuICAjICAgICBzID0gbmV3IFNjYXR0ZXIoKVxuICAjICAgICBzLnN1YnRyYWN0IGkgZm9yIGkgaW4gWyAwIC4uIDk5IF0gd2hlbiAoIGkgJSUgMiApIGlzIDBcbiAgIyAgICAgcy5hZGQgMjUsIDMwXG4gICMgICAgIHMuYWRkIDMyLCA0MFxuICAjICAgICBAZXEgKCDOqWltdF9fODQgPSAtPiBzLmhhcyAyMSAgICAgICApLCBmYWxzZVxuICAjICAgICBAZXEgKCDOqWltdF9fODUgPSAtPiBzLmhhcyAyMiAgICAgICApLCBmYWxzZVxuICAjICAgICBAZXEgKCDOqWltdF9fODYgPSAtPiBzLmhhcyAyMyAgICAgICApLCBmYWxzZVxuICAjICAgICBAZXEgKCDOqWltdF9fODcgPSAtPiBzLmhhcyAyNCAgICAgICApLCBmYWxzZVxuICAjICAgICBAZXEgKCDOqWltdF9fODggPSAtPiBzLmhhcyAyNSAgICAgICApLCB0cnVlXG4gICMgICAgIEBlcSAoIM6paW10X184OSA9IC0+IHMuaGFzIDI2ICAgICAgICksIHRydWVcbiAgIyAgICAgQGVxICggzqlpbXRfXzkwID0gLT4gcy5oYXMgMjcgICAgICAgKSwgdHJ1ZVxuICAjICAgICBAZXEgKCDOqWltdF9fOTEgPSAtPiBzLmhhcyAyOCAgICAgICApLCB0cnVlXG4gICMgICAgIEBlcSAoIM6paW10X185MiA9IC0+IHMuaGFzIDI5ICAgICAgICksIHRydWVcbiAgIyAgICAgQGVxICggzqlpbXRfXzkzID0gLT4gcy5oYXMgMzAgICAgICAgKSwgdHJ1ZVxuICAjICAgICBAZXEgKCDOqWltdF9fOTQgPSAtPiBzLmhhcyAzMSAgICAgICApLCBmYWxzZVxuICAjICAgICBAZXEgKCDOqWltdF9fOTUgPSAtPiBzLmhhcyAzMiAgICAgICApLCB0cnVlXG4gICMgICAgIEBlcSAoIM6paW10X185NiA9IC0+IHMuaGFzIDMzICAgICAgICksIHRydWVcbiAgIyAgICAgQGVxICggzqlpbXRfXzk3ID0gLT4gcy5oYXMgMzQgICAgICAgKSwgdHJ1ZVxuICAjICAgICBAZXEgKCDOqWltdF9fOTggPSAtPiBzLmhhcyAzNSAgICAgICApLCB0cnVlXG4gICMgICAgIEBlcSAoIM6paW10X185OSA9IC0+IHMuaGFzIDM2ICAgICAgICksIHRydWVcbiAgIyAgICAgQGVxICggzqlpbXRfMTAwID0gLT4gcy5oYXMgMzcgICAgICAgKSwgdHJ1ZVxuICAjICAgICBAZXEgKCDOqWltdF8xMDEgPSAtPiBzLmhhcyAzOCAgICAgICApLCB0cnVlXG4gICMgICAgIEBlcSAoIM6paW10XzEwMiA9IC0+IHMuaGFzIDM5ICAgICAgICksIHRydWVcbiAgIyAgICAgQGVxICggzqlpbXRfMTAzID0gLT4gcy5oYXMgNDAgICAgICAgKSwgdHJ1ZVxuICAjICAgICBAZXEgKCDOqWltdF8xMDQgPSAtPiBzLmhhcyA0MSAgICAgICApLCBmYWxzZVxuICAjICAgICBAZXEgKCDOqWltdF8xMDUgPSAtPiBzLmhhcyA0MiAgICAgICApLCBmYWxzZVxuICAjICAgICBAZXEgKCDOqWltdF8xMDYgPSAtPiBzLmhhcyA0MyAgICAgICApLCBmYWxzZVxuICAjICAgICA7bnVsbFxuICAjICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgIyAgIHJldHVybiBudWxsXG5cbmYgPSAtPlxuIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5zdW1fb2ZfZGF0YSA9ICggYSwgYiApID0+XG4gIGRhdGEgPSBbIGEuZGF0YSA/IFtdLCBiLmRhdGEgPyBbXSwgXS5mbGF0KClcbiAgIyBkZWJ1ZyAnzqlpbXRfMTA3JywgeyBhLCBiLCB9XG4gICMgZGVidWcgJ86paW10XzEwOCcsIHsgYS4uLiwgZGF0YSwgfVxuICB7IGEuLi4sIGRhdGEsIH1cbmNyZWF0ZV9yZWR1Y2VyID0gKCBmbiApIC0+ICggcmFuZ2VzICkgPT4gcmFuZ2VzLnJlZHVjZSggZm4gKTtcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5kZW1vX2ludGVydmFsc19mbiA9IC0+XG4gICMgZGVidWcgJ86paW10XzEwOScsICggayBmb3IgayBvZiBJRk4gKS5zb3J0KClcbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBkbyA9PlxuICAgIHJuZ18xICAgICAgID0gW1xuICAgICAgeyBzdGFydDogMSwgZW5kOiAgMTAsIGRhdGE6ICAgNSwgfVxuICAgICAgeyBzdGFydDogNCwgZW5kOiAgIDcsIGRhdGE6ICAxMCwgfVxuICAgICAgeyBzdGFydDogNCwgZW5kOiAgMTIsIGRhdGE6ICAxMiwgfVxuICAgICAgeyBzdGFydDogMCwgZW5kOiAxMDAsIGRhdGE6IDEwMiwgfVxuICAgICAgeyBzdGFydDogMCwgZW5kOiAxMDAsIGRhdGE6IDEwMSwgfVxuICAgICAgXVxuICAgIG1lcmdlZCAgICAgID0gSUZOLm1lcmdlICggY3JlYXRlX3JlZHVjZXIgc3VtX29mX2RhdGEgKSwgcm5nXzFcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgdXJnZSgpXG4gICAgdXJnZSAnzqlpbXRfMTEwJywgaWR4ICsgMSwgcm5nIGZvciBybmcsIGlkeCBpbiBtZXJnZWRcbiAgICB1cmdlKClcbiAgICA7bnVsbFxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGRvID0+XG4gICAgcm5nXzEgICAgICAgPSBuZXcgUmFuZ2VzZXQgMVxuICAgIHJuZ18xLmFkZCB7IGxvOiAxLCBoaTogICA5LCB9XG4gICAgcm5nXzEuYWRkIHsgbG86IDQsIGhpOiAgIDYsIH1cbiAgICBybmdfMS5hZGQgeyBsbzogNCwgaGk6ICAxMSwgfVxuICAgIHJuZ18xLmFkZCB7IGxvOiAwLCBoaTogIDk5LCB9XG4gICAgcm5nXzEuYWRkIHsgbG86IDAsIGhpOiAgOTksIH1cbiAgICBtZXJnZWQgICAgICA9IHJuZ18xLm1lcmdlICggY3JlYXRlX3JlZHVjZXIgc3VtX29mX2RhdGEgKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICB1cmdlKClcbiAgICB1cmdlICfOqWltdF8xMTEnLCBpZHggKyAxLCBybmcgZm9yIHJuZywgaWR4IGluIG1lcmdlZC5yYW5nZXNcbiAgICB1cmdlKClcbiAgICA7bnVsbFxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGEgPSB7IHN0YXJ0OiA0MCwgZW5kOiA0OSwgfTsgYiA9IHsgc3RhcnQ6IDUwLCBlbmQ6IDU5LCB9OyBoZWxwICfOqWltdF8xMTInLCBhLCBiLCB7IG1lZXRpbmc6ICggSUZOLmlzTWVldGluZyBhLCBiICksIG92ZXJsYXBwaW5nOiAoIElGTi5pc092ZXJsYXBwaW5nIGEsIGIgKSwgb3ZlcmxhcHBpbmdfczogKCBJRk4uaXNPdmVybGFwcGluZ1NpbXBsZSBhLCBiICksIH1cbiAgYSA9IHsgc3RhcnQ6IDQwLCBlbmQ6IDUwLCB9OyBiID0geyBzdGFydDogNTAsIGVuZDogNTksIH07IGhlbHAgJ86paW10XzExMycsIGEsIGIsIHsgbWVldGluZzogKCBJRk4uaXNNZWV0aW5nIGEsIGIgKSwgb3ZlcmxhcHBpbmc6ICggSUZOLmlzT3ZlcmxhcHBpbmcgYSwgYiApLCBvdmVybGFwcGluZ19zOiAoIElGTi5pc092ZXJsYXBwaW5nU2ltcGxlIGEsIGIgKSwgfVxuICBhID0geyBzdGFydDogNDAsIGVuZDogNTEsIH07IGIgPSB7IHN0YXJ0OiA1MCwgZW5kOiA1OSwgfTsgaGVscCAnzqlpbXRfMTE0JywgYSwgYiwgeyBtZWV0aW5nOiAoIElGTi5pc01lZXRpbmcgYSwgYiApLCBvdmVybGFwcGluZzogKCBJRk4uaXNPdmVybGFwcGluZyBhLCBiICksIG92ZXJsYXBwaW5nX3M6ICggSUZOLmlzT3ZlcmxhcHBpbmdTaW1wbGUgYSwgYiApLCB9XG4gIGEgPSB7IHN0YXJ0OiA0MCwgZW5kOiA1MiwgfTsgYiA9IHsgc3RhcnQ6IDUwLCBlbmQ6IDU5LCB9OyBoZWxwICfOqWltdF8xMTUnLCBhLCBiLCB7IG1lZXRpbmc6ICggSUZOLmlzTWVldGluZyBhLCBiICksIG92ZXJsYXBwaW5nOiAoIElGTi5pc092ZXJsYXBwaW5nIGEsIGIgKSwgb3ZlcmxhcHBpbmdfczogKCBJRk4uaXNPdmVybGFwcGluZ1NpbXBsZSBhLCBiICksIH1cbiAgYSA9IHsgc3RhcnQ6ICA1LCBlbmQ6IDEwLCB9OyBiID0geyBzdGFydDogMCwgZW5kOiA0IH07IGhlbHAgJ86paW10XzExNicsIGEsIGIsIHsgbWVldGluZzogKCBJRk4uaXNNZWV0aW5nIGEsIGIgKSwgb3ZlcmxhcHBpbmc6ICggSUZOLmlzT3ZlcmxhcHBpbmcgYSwgYiApLCBvdmVybGFwcGluZ19zOiAoIElGTi5pc092ZXJsYXBwaW5nU2ltcGxlIGEsIGIgKSwgfVxuICBhID0geyBzdGFydDogIDUsIGVuZDogMTAsIH07IGIgPSB7IHN0YXJ0OiA3LCBlbmQ6IDggfTsgaGVscCAnzqlpbXRfMTE3JywgYSwgYiwgeyBtZWV0aW5nOiAoIElGTi5pc01lZXRpbmcgYSwgYiApLCBvdmVybGFwcGluZzogKCBJRk4uaXNPdmVybGFwcGluZyBhLCBiICksIG92ZXJsYXBwaW5nX3M6ICggSUZOLmlzT3ZlcmxhcHBpbmdTaW1wbGUgYSwgYiApLCB9XG4gIHRyeVxuICAgIGEgPSB7IHN0YXJ0OiAgNSwgZW5kOiAxMCwgfTsgYiA9IFsgeyBzdGFydDogMCwgZW5kOiA0IH0sIHsgc3RhcnQ6IDcsIGVuZDogOCB9LCBdOyBoZWxwICfOqWltdF8xMTgnLCBhLCBiLCB7IG1lZXRpbmc6ICggSUZOLmlzTWVldGluZyBhLCBiICksIG92ZXJsYXBwaW5nOiAoIElGTi5pc092ZXJsYXBwaW5nIGEsIGIgKSwgb3ZlcmxhcHBpbmdfczogKCBJRk4uaXNPdmVybGFwcGluZ1NpbXBsZSBhLCBiICksIH1cbiAgY2F0Y2ggZSB0aGVuIHdhcm4gJ86paW10XzExOScsIGUubWVzc2FnZVxuICBpbmZvKClcbiAgaW5mbyAnzqlpbXRfMTIwJywgSUZOLnNpbXBsaWZ5IFtdXG4gIGluZm8gJ86paW10XzEyMScsIElGTi5zaW1wbGlmeSBbIHsgc3RhcnQ6IDQsIGVuZDogMjAsIH0sIF1cbiAgaW5mbyAnzqlpbXRfMTIyJywgSUZOLnNpbXBsaWZ5IFsgeyBzdGFydDogNCwgZW5kOiAxOCwgfSwgeyBzdGFydDogMTksIGVuZDogMjIsIH0sIF1cbiAgaW5mbyAnzqlpbXRfMTIzJywgSUZOLnNpbXBsaWZ5IFsgeyBzdGFydDogNCwgZW5kOiAxOSwgfSwgeyBzdGFydDogMTksIGVuZDogMjIsIH0sIF1cbiAgaW5mbyAnzqlpbXRfMTI0JywgSUZOLnNpbXBsaWZ5IFsgeyBzdGFydDogNCwgZW5kOiAyMCwgfSwgeyBzdGFydDogMTksIGVuZDogMjIsIH0sIF1cbiAgaW5mbyAnzqlpbXRfMTI1JywgSUZOLnNpbXBsaWZ5IFsgeyBzdGFydDogNCwgZW5kOiAyMSwgfSwgeyBzdGFydDogMTksIGVuZDogMjIsIH0sIF1cbiAgaW5mbyAnzqlpbXRfMTI2JywgSUZOLnNpbXBsaWZ5IFsgeyBzdGFydDogMywgZW5kOiAgOSwgfSwgeyBzdGFydDogIDksIGVuZDogMTMsIH0sIF1cbiAgaW5mbyAnzqlpbXRfMTI3JywgSUZOLnNpbXBsaWZ5IFsgeyBzdGFydDogMywgZW5kOiAgOSwgfSwgeyBzdGFydDogIDksIGVuZDogMTMsIH0sIHsgc3RhcnQ6IDExLCBlbmQ6IDE0LCB9LCBdICMgW3sgc3RhcnQ6IDMsIGVuZDogMTQgfV1cbiAgaW5mbyAnzqlpbXRfMTI4JywgSUZOLnNpbXBsaWZ5IFsgeyBzdGFydDogMywgZW5kOiAgOSwgfSwgeyBzdGFydDogMTAsIGVuZDogMTMsIH0sIHsgc3RhcnQ6IDExLCBlbmQ6IDE0LCB9LCBdXG4gIGluZm8oKVxuICBpbmZvICfOqWltdF8xMjknLCAoICggbmV3IFJhbmdlc2V0KCkgKS5hZGQoKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkuc2ltcGxpZnkoKVxuICBpbmZvICfOqWltdF8xMzAnLCAoICggbmV3IFJhbmdlc2V0KCkgKS5hZGQgeyBzdGFydDogNCwgZW5kOiAyMCwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkuc2ltcGxpZnkoKVxuICBpbmZvICfOqWltdF8xMzEnLCAoICggbmV3IFJhbmdlc2V0KCkgKS5hZGQgeyBzdGFydDogNCwgZW5kOiAxOCwgfSwgeyBzdGFydDogMTksIGVuZDogMjIsIH0gICAgICAgICAgICAgICAgICAgICAgICAgICkuc2ltcGxpZnkoKVxuICBpbmZvICfOqWltdF8xMzInLCAoICggbmV3IFJhbmdlc2V0KCkgKS5hZGQgeyBzdGFydDogNCwgZW5kOiAxOSwgfSwgeyBzdGFydDogMTksIGVuZDogMjIsIH0gICAgICAgICAgICAgICAgICAgICAgICAgICkuc2ltcGxpZnkoKVxuICBpbmZvICfOqWltdF8xMzMnLCAoICggbmV3IFJhbmdlc2V0KCkgKS5hZGQgeyBzdGFydDogNCwgZW5kOiAyMCwgfSwgeyBzdGFydDogMTksIGVuZDogMjIsIH0gICAgICAgICAgICAgICAgICAgICAgICAgICkuc2ltcGxpZnkoKVxuICBpbmZvICfOqWltdF8xMzQnLCAoICggbmV3IFJhbmdlc2V0KCkgKS5hZGQgeyBzdGFydDogNCwgZW5kOiAyMSwgfSwgeyBzdGFydDogMTksIGVuZDogMjIsIH0gICAgICAgICAgICAgICAgICAgICAgICAgICkuc2ltcGxpZnkoKVxuICBpbmZvICfOqWltdF8xMzUnLCAoICggbmV3IFJhbmdlc2V0KCkgKS5hZGQgeyBzdGFydDogMywgZW5kOiAgOSwgfSwgeyBzdGFydDogIDksIGVuZDogMTMsIH0gICAgICAgICAgICAgICAgICAgICAgICAgICkuc2ltcGxpZnkoKVxuICBpbmZvICfOqWltdF8xMzYnLCAoICggbmV3IFJhbmdlc2V0KCkgKS5hZGQgeyBzdGFydDogMywgZW5kOiAgOSwgfSwgeyBzdGFydDogIDksIGVuZDogMTMsIH0sIHsgc3RhcnQ6IDExLCBlbmQ6IDE0LCB9ICkuc2ltcGxpZnkoKSAjIFt7IHN0YXJ0OiAzLCBlbmQ6IDE0IH1dXG4gIGluZm8gJ86paW10XzEzNycsICggKCBuZXcgUmFuZ2VzZXQoKSApLmFkZCB7IHN0YXJ0OiAzLCBlbmQ6ICA5LCB9LCB7IHN0YXJ0OiAxMCwgZW5kOiAxMywgfSwgeyBzdGFydDogMTEsIGVuZDogMTQsIH0gKS5zaW1wbGlmeSgpXG4gIGluZm8oKVxuICBpbmZvICfOqWltdF8xMzgnLCAoICggbmV3IFJhbmdlc2V0KCkgKS5hZGQoKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkuc2ltcGxpZnkoKVxuICBpbmZvICfOqWltdF8xMzknLCAoICggbmV3IFJhbmdlc2V0KCkgKS5hZGQgeyBsbzogNCwgaGk6IDE5LCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkuc2ltcGxpZnkoKVxuICBpbmZvICfOqWltdF8xNDAnLCAoICggbmV3IFJhbmdlc2V0KCkgKS5hZGQgeyBsbzogNCwgaGk6IDE3LCB9LCB7IGxvOiAxOSwgaGk6IDIxLCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkuc2ltcGxpZnkoKVxuICBpbmZvICfOqWltdF8xNDEnLCAoICggbmV3IFJhbmdlc2V0KCkgKS5hZGQgeyBsbzogNCwgaGk6IDE4LCB9LCB7IGxvOiAxOSwgaGk6IDIxLCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkuc2ltcGxpZnkoKVxuICBpbmZvICfOqWltdF8xNDInLCAoICggbmV3IFJhbmdlc2V0KCkgKS5hZGQgeyBsbzogNCwgaGk6IDE5LCB9LCB7IGxvOiAxOSwgaGk6IDIxLCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkuc2ltcGxpZnkoKVxuICBpbmZvICfOqWltdF8xNDMnLCAoICggbmV3IFJhbmdlc2V0KCkgKS5hZGQgeyBsbzogNCwgaGk6IDIwLCB9LCB7IGxvOiAxOSwgaGk6IDIxLCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkuc2ltcGxpZnkoKVxuICBpbmZvICfOqWltdF8xNDQnLCAoICggbmV3IFJhbmdlc2V0KCkgKS5hZGQgeyBsbzogMywgaGk6ICA4LCB9LCB7IGxvOiAgOSwgaGk6IDEyLCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkuc2ltcGxpZnkoKVxuICBpbmZvICfOqWltdF8xNDUnLCAoICggbmV3IFJhbmdlc2V0KCkgKS5hZGQgeyBsbzogMywgaGk6ICA4LCB9LCB7IGxvOiAgOSwgaGk6IDEyLCB9LCB7IGxvOiAxMSwgaGk6IDEzLCB9ICAgICAgICAgICAgICkuc2ltcGxpZnkoKSAjIFt7IGxvOiAzLCBoaTogMTMgfV1cbiAgaW5mbyAnzqlpbXRfMTQ2JywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkIHsgbG86IDMsIGhpOiAgOCwgfSwgeyBsbzogMTAsIGhpOiAxMiwgfSwgeyBsbzogMTEsIGhpOiAxMywgfSAgICAgICAgICAgICApLnNpbXBsaWZ5KClcbiAgcm5nXzIgPSBbXG4gICAgeyBzdGFydDogIDMsIGVuZDogMTAsIGRhdGE6IDIsIH1cbiAgICB7IHN0YXJ0OiAgOSwgZW5kOiAxMywgZGF0YTogMywgfVxuICAgIHsgc3RhcnQ6IDExLCBlbmQ6IDE0LCBkYXRhOiA1LCB9XG4gICAgXVxuICBtZXJnZV9kYXRhXzIgPSAoIGEsIGIgKSAtPlxuICAgICMgZGVidWcgJ86paW10XzE0NycsIHsgYSwgYiwgfSAjLCB7IGEuLi4sIGIuLi4sIH1cbiAgICByZXR1cm4geyBhLi4uLCBkYXRhOiBhLmRhdGEgKiBiLmRhdGEsIH1cbiAgbWVyZ2VkID0gSUZOLm1lcmdlICggY3JlYXRlX3JlZHVjZXIgbWVyZ2VfZGF0YV8yICksIHJuZ18yICMgW3sgc3RhcnQ6IDMsIGVuZDogMTQgfV1cbiAgaW5mbyAnzqlpbXRfMTQ4Jywgcm5nIGZvciBybmcgaW4gbWVyZ2VkXG4gICMgdXJnZSAnzqlpbXRfMTQ5Jywgcm5nIGZvciBybmcgaW4gbWVyZ2VkX2Z0XG4gICMgdXJnZSgpXG4gIDtudWxsXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgIyBkZW1vX2luZmluaXRlX3Byb3h5KClcbiAgIyBkZW1vX2NvbG9yZnVsX3Byb3h5KClcbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiB0cnVlLCByZXBvcnRfY2hlY2tzOiB0cnVlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdGVzdHMsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGRicmljX3N0ZF9nZW5lcmF0ZV9zZXJpZXM6IHRlc3RzLmRicmljX3N0ZF9nZW5lcmF0ZV9zZXJpZXMsIH1cblxuXG5cbiJdfQ==
