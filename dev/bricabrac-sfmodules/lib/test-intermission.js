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
      var Run, Scatter, Ωimt___1, Ωimt___2, Ωimt___3, Ωimt___4, Ωimt___5, Ωimt___6, Ωimt___7, Ωimt___8, Ωimt___9;
      ({Run, Scatter} = SFMODULES.require_intermission());
      //.......................................................................................................
      this.eq((Ωimt___1 = function() {
        return new Run();
      }), {
        lo: 0,
        hi: 0
      });
      this.eq((Ωimt___2 = function() {
        return new Run().scatter;
      }), null);
      this.eq((Ωimt___3 = function() {
        return new Run(7);
      }), {
        lo: 7,
        hi: 7
      });
      this.eq((Ωimt___4 = function() {
        return new Run(7, 7);
      }), {
        lo: 7,
        hi: 7
      });
      this.eq((Ωimt___5 = function() {
        return new Run(7, 12);
      }), {
        lo: 7,
        hi: 12
      });
      this.eq((Ωimt___6 = function() {
        return new Run({
          lo: 7
        });
      }), {
        lo: 7,
        hi: 7
      });
      this.eq((Ωimt___7 = function() {
        return new Run({
          hi: 7
        });
      }), {
        lo: 7,
        hi: 7
      });
      this.eq((Ωimt___8 = function() {
        return new Run({
          lo: 7,
          hi: 7
        });
      }), {
        lo: 7,
        hi: 7
      });
      this.eq((Ωimt___9 = function() {
        return new Run({
          lo: 7,
          hi: 21
        });
      }), {
        lo: 7,
        hi: 21
      });
      // # @throws ( Ωbbdbr__10 = -> esql.unquote_name false             ), /expected a text, got a boolean/
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    basic_scatters: function() {
      var Run, Scatter;
      ({Run, Scatter} = SFMODULES.require_intermission());
      (() => {        //.......................................................................................................
        var s, Ωimt__11, Ωimt__12, Ωimt__13, Ωimt__14, Ωimt__15, Ωimt__16, Ωimt__17, Ωimt__18;
        s = new Scatter({
          data: {
            a: 1
          }
        });
        this.eq((Ωimt__11 = function() {
          return s;
        }), {
          data: {
            a: 1
          },
          runs: []
        });
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
          return s.data;
        }), {
          a: 1
        });
        this.eq((Ωimt__16 = function() {
          return s.runs[0];
        }), {
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__17 = function() {
          return s.runs[1];
        }), {
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__18 = function() {
          return s.runs[2];
        }), {
          lo: 1,
          hi: 1
        });
        return null;
      })();
      (() => {        //.......................................................................................................
        var s, Ωimt__19, Ωimt__20, Ωimt__21, Ωimt__22, Ωimt__23, Ωimt__24, Ωimt__25;
        s = new Scatter({
          data: {
            a: 2
          },
          sort: true
        });
        s.add({
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__19 = function() {
          return s.runs.length;
        }), 1);
        s.add(1);
        this.eq((Ωimt__20 = function() {
          return s.runs.length;
        }), 2);
        s.add(new Run({
          lo: 1,
          hi: 1
        }));
        this.eq((Ωimt__21 = function() {
          return s.runs.length;
        }), 3);
        //.....................................................................................................
        this.eq((Ωimt__22 = function() {
          return s.data;
        }), {
          a: 2
        });
        this.eq((Ωimt__23 = function() {
          return s.runs[0];
        }), {
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__24 = function() {
          return s.runs[1];
        }), {
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__25 = function() {
          return s.runs[2];
        }), {
          lo: 1,
          hi: 1
        });
        return null;
      })();
      (() => {        //.......................................................................................................
        var s, Ωimt__26, Ωimt__27, Ωimt__28, Ωimt__29, Ωimt__30;
        s = new Scatter({
          data: {
            a: 3
          },
          normalize: true
        });
        s.add({
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__26 = function() {
          return s.runs.length;
        }), 1);
        s.add(1);
        this.eq((Ωimt__27 = function() {
          return s.runs.length;
        }), 1);
        s.add(new Run({
          lo: 1,
          hi: 1
        }));
        this.eq((Ωimt__28 = function() {
          return s.runs.length;
        }), 1);
        //.....................................................................................................
        this.eq((Ωimt__29 = function() {
          return s.data;
        }), {
          a: 3
        });
        this.eq((Ωimt__30 = function() {
          return s.runs[0];
        }), {
          lo: 1,
          hi: 1
        });
        return null;
      })();
      (() => {        //.......................................................................................................
        var i, len, ref, run, s, Ωimt__31, Ωimt__32, Ωimt__33, Ωimt__35, Ωimt__36, Ωimt__37;
        s = new Scatter({
          data: {
            a: 4
          },
          normalize: true
        });
        s.add(103);
        this.eq((Ωimt__31 = function() {
          return s.runs.length;
        }), 1);
        s.add(100);
        this.eq((Ωimt__32 = function() {
          return s.runs.length;
        }), 2);
        s.add(101);
        this.eq((Ωimt__33 = function() {
          return s.runs.length;
        }), 2);
        ref = s.runs;
        for (i = 0, len = ref.length; i < len; i++) {
          run = ref[i];
          //.....................................................................................................
          debug('Ωimt__34', run);
        }
        this.eq((Ωimt__35 = function() {
          return s.data;
        }), {
          a: 4
        });
        this.eq((Ωimt__36 = function() {
          return s.runs[0];
        }), {
          lo: 100,
          hi: 101
        });
        this.eq((Ωimt__37 = function() {
          return s.runs[1];
        }), {
          lo: 103,
          hi: 103
        });
        return null;
      })();
      (() => {        //.......................................................................................................
        var s, Ωimt__38, Ωimt__39, Ωimt__40, Ωimt__41;
        s = new Scatter({
          normalize: true
        });
        s.add(103, 109);
        this.eq((Ωimt__38 = function() {
          return s.runs.length;
        }), 1);
        s.add(111, 115);
        this.eq((Ωimt__39 = function() {
          return s.runs.length;
        }), 2);
        s.add(110);
        this.eq((Ωimt__40 = function() {
          return s.runs.length;
        }), 1);
        //.....................................................................................................
        this.eq((Ωimt__41 = function() {
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
        var s, Ωimt__42, Ωimt__43, Ωimt__44, Ωimt__45, Ωimt__46, Ωimt__47, Ωimt__48, Ωimt__49, Ωimt__50, Ωimt__51, Ωimt__52, Ωimt__53, Ωimt__54, Ωimt__55, Ωimt__56, Ωimt__57, Ωimt__58, Ωimt__59, Ωimt__60, Ωimt__61, Ωimt__62, Ωimt__63, Ωimt__64;
        s = new Scatter();
        s.add(25, 30);
        s.add(32, 40);
        this.eq((Ωimt__42 = function() {
          return s.has(21);
        }), false);
        this.eq((Ωimt__43 = function() {
          return s.has(22);
        }), false);
        this.eq((Ωimt__44 = function() {
          return s.has(23);
        }), false);
        this.eq((Ωimt__45 = function() {
          return s.has(24);
        }), false);
        this.eq((Ωimt__46 = function() {
          return s.has(25);
        }), true);
        this.eq((Ωimt__47 = function() {
          return s.has(26);
        }), true);
        this.eq((Ωimt__48 = function() {
          return s.has(27);
        }), true);
        this.eq((Ωimt__49 = function() {
          return s.has(28);
        }), true);
        this.eq((Ωimt__50 = function() {
          return s.has(29);
        }), true);
        this.eq((Ωimt__51 = function() {
          return s.has(30);
        }), true);
        this.eq((Ωimt__52 = function() {
          return s.has(31);
        }), false);
        this.eq((Ωimt__53 = function() {
          return s.has(32);
        }), true);
        this.eq((Ωimt__54 = function() {
          return s.has(33);
        }), true);
        this.eq((Ωimt__55 = function() {
          return s.has(34);
        }), true);
        this.eq((Ωimt__56 = function() {
          return s.has(35);
        }), true);
        this.eq((Ωimt__57 = function() {
          return s.has(36);
        }), true);
        this.eq((Ωimt__58 = function() {
          return s.has(37);
        }), true);
        this.eq((Ωimt__59 = function() {
          return s.has(38);
        }), true);
        this.eq((Ωimt__60 = function() {
          return s.has(39);
        }), true);
        this.eq((Ωimt__61 = function() {
          return s.has(40);
        }), true);
        this.eq((Ωimt__62 = function() {
          return s.has(41);
        }), false);
        this.eq((Ωimt__63 = function() {
          return s.has(42);
        }), false);
        this.eq((Ωimt__64 = function() {
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
  //     @eq ( Ωimt__65 = -> s.has 21       ), false
  //     @eq ( Ωimt__66 = -> s.has 22       ), false
  //     @eq ( Ωimt__67 = -> s.has 23       ), false
  //     @eq ( Ωimt__68 = -> s.has 24       ), false
  //     @eq ( Ωimt__69 = -> s.has 25       ), true
  //     @eq ( Ωimt__70 = -> s.has 26       ), true
  //     @eq ( Ωimt__71 = -> s.has 27       ), true
  //     @eq ( Ωimt__72 = -> s.has 28       ), true
  //     @eq ( Ωimt__73 = -> s.has 29       ), true
  //     @eq ( Ωimt__74 = -> s.has 30       ), true
  //     @eq ( Ωimt__75 = -> s.has 31       ), false
  //     @eq ( Ωimt__76 = -> s.has 32       ), true
  //     @eq ( Ωimt__77 = -> s.has 33       ), true
  //     @eq ( Ωimt__78 = -> s.has 34       ), true
  //     @eq ( Ωimt__79 = -> s.has 35       ), true
  //     @eq ( Ωimt__80 = -> s.has 36       ), true
  //     @eq ( Ωimt__81 = -> s.has 37       ), true
  //     @eq ( Ωimt__82 = -> s.has 38       ), true
  //     @eq ( Ωimt__83 = -> s.has 39       ), true
  //     @eq ( Ωimt__84 = -> s.has 40       ), true
  //     @eq ( Ωimt__85 = -> s.has 41       ), false
  //     @eq ( Ωimt__86 = -> s.has 42       ), false
  //     @eq ( Ωimt__87 = -> s.has 43       ), false
  //     ;null
  //   #.......................................................................................................
  //   return null
  f = function() {};

  //-----------------------------------------------------------------------------------------------------------
  sum_of_data = (a, b) => {
    var data, ref, ref1;
    data = [(ref = a.data) != null ? ref : [], (ref1 = b.data) != null ? ref1 : []].flat();
    // debug 'Ωimt__88', { a, b, }
    // debug 'Ωimt__89', { a..., data, }
    return {...a, data};
  };

  create_reducer = function(fn) {
    return (ranges) => {
      return ranges.reduce(fn);
    };
  };

  demo_intervals_fn = function() {
    var a, b, e, i, len, merge_data_2, merged, rng, rng_2;
    (() => {      // debug 'Ωimt__90', ( k for k of IFN ).sort()
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
        urge('Ωimt__91', idx + 1, rng);
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
        urge('Ωimt__92', idx + 1, rng);
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
    help('Ωimt__93', a, b, {
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
    help('Ωimt__94', a, b, {
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
    help('Ωimt__95', a, b, {
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
    help('Ωimt__96', a, b, {
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
    help('Ωimt__97', a, b, {
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
    help('Ωimt__98', a, b, {
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
      help('Ωimt__99', a, b, {
        meeting: IFN.isMeeting(a, b),
        overlapping: IFN.isOverlapping(a, b),
        overlapping_s: IFN.isOverlappingSimple(a, b)
      });
    } catch (error) {
      e = error;
      warn('Ωimt_100', e.message);
    }
    info();
    info('Ωimt_101', IFN.simplify([]));
    info('Ωimt_102', IFN.simplify([
      {
        start: 4,
        end: 20
      }
    ]));
    info('Ωimt_103', IFN.simplify([
      {
        start: 4,
        end: 18
      },
      {
        start: 19,
        end: 22
      }
    ]));
    info('Ωimt_104', IFN.simplify([
      {
        start: 4,
        end: 19
      },
      {
        start: 19,
        end: 22
      }
    ]));
    info('Ωimt_105', IFN.simplify([
      {
        start: 4,
        end: 20
      },
      {
        start: 19,
        end: 22
      }
    ]));
    info('Ωimt_106', IFN.simplify([
      {
        start: 4,
        end: 21
      },
      {
        start: 19,
        end: 22
      }
    ]));
    info('Ωimt_107', IFN.simplify([
      {
        start: 3,
        end: 9
      },
      {
        start: 9,
        end: 13
      }
    ]));
    info('Ωimt_108', IFN.simplify([
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
    info('Ωimt_109', IFN.simplify([
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
    info('Ωimt_110', ((new Rangeset()).add()).simplify());
    info('Ωimt_111', ((new Rangeset()).add({
      start: 4,
      end: 20
    })).simplify());
    info('Ωimt_112', ((new Rangeset()).add({
      start: 4,
      end: 18
    }, {
      start: 19,
      end: 22
    })).simplify());
    info('Ωimt_113', ((new Rangeset()).add({
      start: 4,
      end: 19
    }, {
      start: 19,
      end: 22
    })).simplify());
    info('Ωimt_114', ((new Rangeset()).add({
      start: 4,
      end: 20
    }, {
      start: 19,
      end: 22
    })).simplify());
    info('Ωimt_115', ((new Rangeset()).add({
      start: 4,
      end: 21
    }, {
      start: 19,
      end: 22
    })).simplify());
    info('Ωimt_116', ((new Rangeset()).add({
      start: 3,
      end: 9
    }, {
      start: 9,
      end: 13
    })).simplify());
    info('Ωimt_117', ((new Rangeset()).add({
      start: 3,
      end: 9
    }, {
      start: 9,
      end: 13
    }, {
      start: 11,
      end: 14
    })).simplify()); // [{ start: 3, end: 14 }]
    info('Ωimt_118', ((new Rangeset()).add({
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
    info('Ωimt_119', ((new Rangeset()).add()).simplify());
    info('Ωimt_120', ((new Rangeset()).add({
      lo: 4,
      hi: 19
    })).simplify());
    info('Ωimt_121', ((new Rangeset()).add({
      lo: 4,
      hi: 17
    }, {
      lo: 19,
      hi: 21
    })).simplify());
    info('Ωimt_122', ((new Rangeset()).add({
      lo: 4,
      hi: 18
    }, {
      lo: 19,
      hi: 21
    })).simplify());
    info('Ωimt_123', ((new Rangeset()).add({
      lo: 4,
      hi: 19
    }, {
      lo: 19,
      hi: 21
    })).simplify());
    info('Ωimt_124', ((new Rangeset()).add({
      lo: 4,
      hi: 20
    }, {
      lo: 19,
      hi: 21
    })).simplify());
    info('Ωimt_125', ((new Rangeset()).add({
      lo: 3,
      hi: 8
    }, {
      lo: 9,
      hi: 12
    })).simplify());
    info('Ωimt_126', ((new Rangeset()).add({
      lo: 3,
      hi: 8
    }, {
      lo: 9,
      hi: 12
    }, {
      lo: 11,
      hi: 13
    })).simplify()); // [{ lo: 3, hi: 13 }]
    info('Ωimt_127', ((new Rangeset()).add({
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
        // debug 'Ωimt_128', { a, b, } #, { a..., b..., }
        ...a,
        data: a.data * b.data
      };
    };
    merged = IFN.merge(create_reducer(merge_data_2), rng_2); // [{ start: 3, end: 14 }]
    for (i = 0, len = merged.length; i < len; i++) {
      rng = merged[i];
      info('Ωimt_129', rng);
    }
    // urge 'Ωimt_130', rng for rng in merged_ft
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtaW50ZXJtaXNzaW9uLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxFQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsU0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxjQUFBLEVBQUEsS0FBQSxFQUFBLGlCQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsV0FBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBOzs7RUFHQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLHdCQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsS0FIRixFQUlFLEtBSkYsRUFLRSxJQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxHQVJGLEVBU0UsSUFURixFQVVFLE9BVkYsRUFXRSxHQVhGLENBQUEsR0FXNEIsR0FBRyxDQUFDLEdBWGhDOztFQVlBLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLHlCQUFSLENBQTVCLEVBekJBOzs7RUEyQkEsQ0FBQSxDQUFFLEdBQUYsQ0FBQSxHQUE0QixPQUFB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LEVBQUssRUFBbEI7UUFBc0IsSUFBQSxFQUFNO01BQTVCLENBSE07O0lBS1IsWUFBQSxHQUFlLFFBQUEsQ0FBRSxDQUFGLEVBQUssQ0FBTCxDQUFBO0FBRWIsYUFBTyxDQUFBOztRQUFFLEdBQUEsQ0FBRjtRQUFRLElBQUEsRUFBTSxDQUFDLENBQUMsSUFBRixHQUFTLENBQUMsQ0FBQztNQUF6QjtJQUZNO0lBR2YsTUFBQSxHQUFTLEdBQUcsQ0FBQyxLQUFKLENBQVksY0FBQSxDQUFlLFlBQWYsQ0FBWixFQUEyQyxLQUEzQyxFQTlFWDtJQStFRSxLQUFBLHdDQUFBOztNQUFBLElBQUEsQ0FBSyxVQUFMLEVBQWlCLEdBQWpCO0lBQUEsQ0EvRUY7OztXQWtGRztFQW5GaUIsRUE3TXBCOzs7RUFvU0EsSUFBRyxNQUFBLEtBQVUsT0FBTyxDQUFDLElBQXJCO0lBQStCLE1BQVMsQ0FBQSxDQUFBLENBQUEsR0FBQTtBQUN4QyxVQUFBLFdBQUE7OztNQUVFLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsSUFBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsS0FBbEI7UUFBMEIsV0FBQSxFQUFhLElBQXZDO1FBQTZDLGFBQUEsRUFBZTtNQUE1RDtNQUNkLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsS0FBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDthQUNkLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEIsQ0FBRSxLQUFGLENBQTlCO0lBTnNDLENBQUEsSUFBeEM7OztFQXBTQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbid1c2Ugc3RyaWN0J1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnYnJpY2FicmFjLWludGVybWlzc2lvbidcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICB3aGl0ZVxuICBncmVlblxuICBibHVlXG4gIGdvbGRcbiAgZ3JleVxuICByZWRcbiAgYm9sZFxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuIyB3cml0ZSAgICAgICAgICAgICAgICAgICAgID0gKCBwICkgLT4gcHJvY2Vzcy5zdGRvdXQud3JpdGUgcFxueyBuZmEgfSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG5GUyAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpmcydcblBBVEggICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG5cblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRlc3RzID0gdGVzdHMgPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYmFzaWNfcnVuczogLT5cbiAgICB7IFJ1bixcbiAgICAgIFNjYXR0ZXIsICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2ludGVybWlzc2lvbigpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgKCDOqWltdF9fXzEgPSAtPiBuZXcgUnVuKCkgICAgICAgICAgICAgICAgICAgKSwgeyBsbzogMCwgaGk6IDAsIH1cbiAgICBAZXEgKCDOqWltdF9fXzIgPSAtPiBuZXcgUnVuKCkuc2NhdHRlciAgICAgICAgICAgKSwgbnVsbFxuICAgIEBlcSAoIM6paW10X19fMyA9IC0+IG5ldyBSdW4gNyAgICAgICAgICAgICAgICAgICApLCB7IGxvOiA3LCBoaTogNywgfVxuICAgIEBlcSAoIM6paW10X19fNCA9IC0+IG5ldyBSdW4gNywgNyAgICAgICAgICAgICAgICApLCB7IGxvOiA3LCBoaTogNywgfVxuICAgIEBlcSAoIM6paW10X19fNSA9IC0+IG5ldyBSdW4gNywgMTIgICAgICAgICAgICAgICApLCB7IGxvOiA3LCBoaTogMTIsIH1cbiAgICBAZXEgKCDOqWltdF9fXzYgPSAtPiBuZXcgUnVuIHsgbG86IDcsIH0gICAgICAgICAgKSwgeyBsbzogNywgaGk6IDcsIH1cbiAgICBAZXEgKCDOqWltdF9fXzcgPSAtPiBuZXcgUnVuIHsgaGk6IDcsIH0gICAgICAgICAgKSwgeyBsbzogNywgaGk6IDcsIH1cbiAgICBAZXEgKCDOqWltdF9fXzggPSAtPiBuZXcgUnVuIHsgbG86IDcsIGhpOiA3LCB9ICAgKSwgeyBsbzogNywgaGk6IDcsIH1cbiAgICBAZXEgKCDOqWltdF9fXzkgPSAtPiBuZXcgUnVuIHsgbG86IDcsIGhpOiAyMSwgfSAgKSwgeyBsbzogNywgaGk6IDIxLCB9XG4gICAgIyAjIEB0aHJvd3MgKCDOqWJiZGJyX18xMCA9IC0+IGVzcWwudW5xdW90ZV9uYW1lIGZhbHNlICAgICAgICAgICAgICksIC9leHBlY3RlZCBhIHRleHQsIGdvdCBhIGJvb2xlYW4vXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYmFzaWNfc2NhdHRlcnM6IC0+XG4gICAgeyBSdW4sXG4gICAgICBTY2F0dGVyLCAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9pbnRlcm1pc3Npb24oKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHMgPSBuZXcgU2NhdHRlciB7IGRhdGE6IHsgYTogMSwgfSB9XG4gICAgICBAZXEgKCDOqWltdF9fMTEgPSAtPiBzICksIHsgZGF0YTogeyBhOiAxLCB9LCBydW5zOiBbXSwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzLmFkZCB7IGxvOiAxLCBoaTogMSwgfTsgICAgICAgICAgQGVxICggzqlpbXRfXzEyID0gLT4gcy5ydW5zLmxlbmd0aCAgICAgKSwgMVxuICAgICAgcy5hZGQgMTsgICAgICAgICAgICAgICAgICAgICAgICAgIEBlcSAoIM6paW10X18xMyA9IC0+IHMucnVucy5sZW5ndGggICAgICksIDJcbiAgICAgIHMuYWRkIG5ldyBSdW4geyBsbzogMSwgaGk6IDEsIH07ICBAZXEgKCDOqWltdF9fMTQgPSAtPiBzLnJ1bnMubGVuZ3RoICAgICApLCAzXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6paW10X18xNSA9IC0+IHMuZGF0YSAgICAgICAgICAgICksIHsgYTogMSwgfVxuICAgICAgQGVxICggzqlpbXRfXzE2ID0gLT4gcy5ydW5zWyAwIF0gICAgICAgKSwgeyBsbzogMSwgaGk6IDEsIH1cbiAgICAgIEBlcSAoIM6paW10X18xNyA9IC0+IHMucnVuc1sgMSBdICAgICAgICksIHsgbG86IDEsIGhpOiAxLCB9XG4gICAgICBAZXEgKCDOqWltdF9fMTggPSAtPiBzLnJ1bnNbIDIgXSAgICAgICApLCB7IGxvOiAxLCBoaTogMSwgfVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBzID0gbmV3IFNjYXR0ZXIgeyBkYXRhOiB7IGE6IDIsIH0sIHNvcnQ6IHRydWUsIH1cbiAgICAgIHMuYWRkIHsgbG86IDEsIGhpOiAxLCB9OyAgICAgICAgICBAZXEgKCDOqWltdF9fMTkgPSAtPiBzLnJ1bnMubGVuZ3RoICAgICApLCAxXG4gICAgICBzLmFkZCAxOyAgICAgICAgICAgICAgICAgICAgICAgICAgQGVxICggzqlpbXRfXzIwID0gLT4gcy5ydW5zLmxlbmd0aCAgICAgKSwgMlxuICAgICAgcy5hZGQgbmV3IFJ1biB7IGxvOiAxLCBoaTogMSwgfTsgIEBlcSAoIM6paW10X18yMSA9IC0+IHMucnVucy5sZW5ndGggICAgICksIDNcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlpbXRfXzIyID0gLT4gcy5kYXRhICAgICAgICAgICAgKSwgeyBhOiAyLCB9XG4gICAgICBAZXEgKCDOqWltdF9fMjMgPSAtPiBzLnJ1bnNbIDAgXSAgICAgICApLCB7IGxvOiAxLCBoaTogMSwgfVxuICAgICAgQGVxICggzqlpbXRfXzI0ID0gLT4gcy5ydW5zWyAxIF0gICAgICAgKSwgeyBsbzogMSwgaGk6IDEsIH1cbiAgICAgIEBlcSAoIM6paW10X18yNSA9IC0+IHMucnVuc1sgMiBdICAgICAgICksIHsgbG86IDEsIGhpOiAxLCB9XG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHMgPSBuZXcgU2NhdHRlciB7IGRhdGE6IHsgYTogMywgfSwgbm9ybWFsaXplOiB0cnVlLCB9XG4gICAgICBzLmFkZCB7IGxvOiAxLCBoaTogMSwgfTsgICAgICAgICAgQGVxICggzqlpbXRfXzI2ID0gLT4gcy5ydW5zLmxlbmd0aCAgICAgKSwgMVxuICAgICAgcy5hZGQgMTsgICAgICAgICAgICAgICAgICAgICAgICAgIEBlcSAoIM6paW10X18yNyA9IC0+IHMucnVucy5sZW5ndGggICAgICksIDFcbiAgICAgIHMuYWRkIG5ldyBSdW4geyBsbzogMSwgaGk6IDEsIH07ICBAZXEgKCDOqWltdF9fMjggPSAtPiBzLnJ1bnMubGVuZ3RoICAgICApLCAxXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6paW10X18yOSA9IC0+IHMuZGF0YSAgICAgICAgICAgICksIHsgYTogMywgfVxuICAgICAgQGVxICggzqlpbXRfXzMwID0gLT4gcy5ydW5zWyAwIF0gICAgICAgKSwgeyBsbzogMSwgaGk6IDEsIH1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgcyA9IG5ldyBTY2F0dGVyIHsgZGF0YTogeyBhOiA0LCB9LCBub3JtYWxpemU6IHRydWUsIH1cbiAgICAgIHMuYWRkIDEwMzsgIEBlcSAoIM6paW10X18zMSA9IC0+IHMucnVucy5sZW5ndGggICAgICksIDFcbiAgICAgIHMuYWRkIDEwMDsgIEBlcSAoIM6paW10X18zMiA9IC0+IHMucnVucy5sZW5ndGggICAgICksIDJcbiAgICAgIHMuYWRkIDEwMTsgIEBlcSAoIM6paW10X18zMyA9IC0+IHMucnVucy5sZW5ndGggICAgICksIDJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZGVidWcgJ86paW10X18zNCcsIHJ1biBmb3IgcnVuIGluIHMucnVuc1xuICAgICAgQGVxICggzqlpbXRfXzM1ID0gLT4gcy5kYXRhICAgICAgICAgICAgKSwgeyBhOiA0LCB9XG4gICAgICBAZXEgKCDOqWltdF9fMzYgPSAtPiBzLnJ1bnNbIDAgXSAgICAgICApLCB7IGxvOiAxMDAsIGhpOiAxMDEsIH1cbiAgICAgIEBlcSAoIM6paW10X18zNyA9IC0+IHMucnVuc1sgMSBdICAgICAgICksIHsgbG86IDEwMywgaGk6IDEwMywgfVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBzID0gbmV3IFNjYXR0ZXIgeyBub3JtYWxpemU6IHRydWUsIH1cbiAgICAgIHMuYWRkIDEwMywgMTA5OyAgIEBlcSAoIM6paW10X18zOCA9IC0+IHMucnVucy5sZW5ndGggICAgICksIDFcbiAgICAgIHMuYWRkIDExMSwgMTE1OyAgIEBlcSAoIM6paW10X18zOSA9IC0+IHMucnVucy5sZW5ndGggICAgICksIDJcbiAgICAgIHMuYWRkIDExMDsgICAgICAgIEBlcSAoIM6paW10X180MCA9IC0+IHMucnVucy5sZW5ndGggICAgICksIDFcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlpbXRfXzQxID0gLT4gcy5ydW5zWyAwIF0gICAgICAgKSwgeyBsbzogMTAzLCBoaTogMTE1LCB9XG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbnRhaW5tZW50OiAtPlxuICAgIHsgUnVuLFxuICAgICAgU2NhdHRlciwgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfaW50ZXJtaXNzaW9uKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBzID0gbmV3IFNjYXR0ZXIoKVxuICAgICAgcy5hZGQgMjUsIDMwXG4gICAgICBzLmFkZCAzMiwgNDBcbiAgICAgIEBlcSAoIM6paW10X180MiA9IC0+IHMuaGFzIDIxICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF9fNDMgPSAtPiBzLmhhcyAyMiAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzQ0ID0gLT4gcy5oYXMgMjMgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10X180NSA9IC0+IHMuaGFzIDI0ICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF9fNDYgPSAtPiBzLmhhcyAyNSAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fNDcgPSAtPiBzLmhhcyAyNiAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fNDggPSAtPiBzLmhhcyAyNyAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fNDkgPSAtPiBzLmhhcyAyOCAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fNTAgPSAtPiBzLmhhcyAyOSAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fNTEgPSAtPiBzLmhhcyAzMCAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fNTIgPSAtPiBzLmhhcyAzMSAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzUzID0gLT4gcy5oYXMgMzIgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzU0ID0gLT4gcy5oYXMgMzMgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzU1ID0gLT4gcy5oYXMgMzQgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzU2ID0gLT4gcy5oYXMgMzUgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzU3ID0gLT4gcy5oYXMgMzYgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzU4ID0gLT4gcy5oYXMgMzcgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzU5ID0gLT4gcy5oYXMgMzggICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzYwID0gLT4gcy5oYXMgMzkgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzYxID0gLT4gcy5oYXMgNDAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzYyID0gLT4gcy5oYXMgNDEgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10X182MyA9IC0+IHMuaGFzIDQyICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF9fNjQgPSAtPiBzLmhhcyA0MyAgICAgICApLCBmYWxzZVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIyAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMgZ2FwcGVkX3NjYXR0ZXJzOiAtPlxuICAjICAgeyBSdW4sXG4gICMgICAgIFNjYXR0ZXIsICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2ludGVybWlzc2lvbigpXG4gICMgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAjICAgZG8gPT5cbiAgIyAgICAgcyA9IG5ldyBTY2F0dGVyKClcbiAgIyAgICAgcy5zdWJ0cmFjdCBpIGZvciBpIGluIFsgMCAuLiA5OSBdIHdoZW4gKCBpICUlIDIgKSBpcyAwXG4gICMgICAgIHMuYWRkIDI1LCAzMFxuICAjICAgICBzLmFkZCAzMiwgNDBcbiAgIyAgICAgQGVxICggzqlpbXRfXzY1ID0gLT4gcy5oYXMgMjEgICAgICAgKSwgZmFsc2VcbiAgIyAgICAgQGVxICggzqlpbXRfXzY2ID0gLT4gcy5oYXMgMjIgICAgICAgKSwgZmFsc2VcbiAgIyAgICAgQGVxICggzqlpbXRfXzY3ID0gLT4gcy5oYXMgMjMgICAgICAgKSwgZmFsc2VcbiAgIyAgICAgQGVxICggzqlpbXRfXzY4ID0gLT4gcy5oYXMgMjQgICAgICAgKSwgZmFsc2VcbiAgIyAgICAgQGVxICggzqlpbXRfXzY5ID0gLT4gcy5oYXMgMjUgICAgICAgKSwgdHJ1ZVxuICAjICAgICBAZXEgKCDOqWltdF9fNzAgPSAtPiBzLmhhcyAyNiAgICAgICApLCB0cnVlXG4gICMgICAgIEBlcSAoIM6paW10X183MSA9IC0+IHMuaGFzIDI3ICAgICAgICksIHRydWVcbiAgIyAgICAgQGVxICggzqlpbXRfXzcyID0gLT4gcy5oYXMgMjggICAgICAgKSwgdHJ1ZVxuICAjICAgICBAZXEgKCDOqWltdF9fNzMgPSAtPiBzLmhhcyAyOSAgICAgICApLCB0cnVlXG4gICMgICAgIEBlcSAoIM6paW10X183NCA9IC0+IHMuaGFzIDMwICAgICAgICksIHRydWVcbiAgIyAgICAgQGVxICggzqlpbXRfXzc1ID0gLT4gcy5oYXMgMzEgICAgICAgKSwgZmFsc2VcbiAgIyAgICAgQGVxICggzqlpbXRfXzc2ID0gLT4gcy5oYXMgMzIgICAgICAgKSwgdHJ1ZVxuICAjICAgICBAZXEgKCDOqWltdF9fNzcgPSAtPiBzLmhhcyAzMyAgICAgICApLCB0cnVlXG4gICMgICAgIEBlcSAoIM6paW10X183OCA9IC0+IHMuaGFzIDM0ICAgICAgICksIHRydWVcbiAgIyAgICAgQGVxICggzqlpbXRfXzc5ID0gLT4gcy5oYXMgMzUgICAgICAgKSwgdHJ1ZVxuICAjICAgICBAZXEgKCDOqWltdF9fODAgPSAtPiBzLmhhcyAzNiAgICAgICApLCB0cnVlXG4gICMgICAgIEBlcSAoIM6paW10X184MSA9IC0+IHMuaGFzIDM3ICAgICAgICksIHRydWVcbiAgIyAgICAgQGVxICggzqlpbXRfXzgyID0gLT4gcy5oYXMgMzggICAgICAgKSwgdHJ1ZVxuICAjICAgICBAZXEgKCDOqWltdF9fODMgPSAtPiBzLmhhcyAzOSAgICAgICApLCB0cnVlXG4gICMgICAgIEBlcSAoIM6paW10X184NCA9IC0+IHMuaGFzIDQwICAgICAgICksIHRydWVcbiAgIyAgICAgQGVxICggzqlpbXRfXzg1ID0gLT4gcy5oYXMgNDEgICAgICAgKSwgZmFsc2VcbiAgIyAgICAgQGVxICggzqlpbXRfXzg2ID0gLT4gcy5oYXMgNDIgICAgICAgKSwgZmFsc2VcbiAgIyAgICAgQGVxICggzqlpbXRfXzg3ID0gLT4gcy5oYXMgNDMgICAgICAgKSwgZmFsc2VcbiAgIyAgICAgO251bGxcbiAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICByZXR1cm4gbnVsbFxuXG5mID0gLT5cbiMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuc3VtX29mX2RhdGEgPSAoIGEsIGIgKSA9PlxuICBkYXRhID0gWyBhLmRhdGEgPyBbXSwgYi5kYXRhID8gW10sIF0uZmxhdCgpXG4gICMgZGVidWcgJ86paW10X184OCcsIHsgYSwgYiwgfVxuICAjIGRlYnVnICfOqWltdF9fODknLCB7IGEuLi4sIGRhdGEsIH1cbiAgeyBhLi4uLCBkYXRhLCB9XG5jcmVhdGVfcmVkdWNlciA9ICggZm4gKSAtPiAoIHJhbmdlcyApID0+IHJhbmdlcy5yZWR1Y2UoIGZuICk7XG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZGVtb19pbnRlcnZhbHNfZm4gPSAtPlxuICAjIGRlYnVnICfOqWltdF9fOTAnLCAoIGsgZm9yIGsgb2YgSUZOICkuc29ydCgpXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgZG8gPT5cbiAgICBybmdfMSAgICAgICA9IFtcbiAgICAgIHsgc3RhcnQ6IDEsIGVuZDogIDEwLCBkYXRhOiAgIDUsIH1cbiAgICAgIHsgc3RhcnQ6IDQsIGVuZDogICA3LCBkYXRhOiAgMTAsIH1cbiAgICAgIHsgc3RhcnQ6IDQsIGVuZDogIDEyLCBkYXRhOiAgMTIsIH1cbiAgICAgIHsgc3RhcnQ6IDAsIGVuZDogMTAwLCBkYXRhOiAxMDIsIH1cbiAgICAgIHsgc3RhcnQ6IDAsIGVuZDogMTAwLCBkYXRhOiAxMDEsIH1cbiAgICAgIF1cbiAgICBtZXJnZWQgICAgICA9IElGTi5tZXJnZSAoIGNyZWF0ZV9yZWR1Y2VyIHN1bV9vZl9kYXRhICksIHJuZ18xXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHVyZ2UoKVxuICAgIHVyZ2UgJ86paW10X185MScsIGlkeCArIDEsIHJuZyBmb3Igcm5nLCBpZHggaW4gbWVyZ2VkXG4gICAgdXJnZSgpXG4gICAgO251bGxcbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBkbyA9PlxuICAgIHJuZ18xICAgICAgID0gbmV3IFJhbmdlc2V0IDFcbiAgICBybmdfMS5hZGQgeyBsbzogMSwgaGk6ICAgOSwgfVxuICAgIHJuZ18xLmFkZCB7IGxvOiA0LCBoaTogICA2LCB9XG4gICAgcm5nXzEuYWRkIHsgbG86IDQsIGhpOiAgMTEsIH1cbiAgICBybmdfMS5hZGQgeyBsbzogMCwgaGk6ICA5OSwgfVxuICAgIHJuZ18xLmFkZCB7IGxvOiAwLCBoaTogIDk5LCB9XG4gICAgbWVyZ2VkICAgICAgPSBybmdfMS5tZXJnZSAoIGNyZWF0ZV9yZWR1Y2VyIHN1bV9vZl9kYXRhIClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgdXJnZSgpXG4gICAgdXJnZSAnzqlpbXRfXzkyJywgaWR4ICsgMSwgcm5nIGZvciBybmcsIGlkeCBpbiBtZXJnZWQucmFuZ2VzXG4gICAgdXJnZSgpXG4gICAgO251bGxcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBhID0geyBzdGFydDogNDAsIGVuZDogNDksIH07IGIgPSB7IHN0YXJ0OiA1MCwgZW5kOiA1OSwgfTsgaGVscCAnzqlpbXRfXzkzJywgYSwgYiwgeyBtZWV0aW5nOiAoIElGTi5pc01lZXRpbmcgYSwgYiApLCBvdmVybGFwcGluZzogKCBJRk4uaXNPdmVybGFwcGluZyBhLCBiICksIG92ZXJsYXBwaW5nX3M6ICggSUZOLmlzT3ZlcmxhcHBpbmdTaW1wbGUgYSwgYiApLCB9XG4gIGEgPSB7IHN0YXJ0OiA0MCwgZW5kOiA1MCwgfTsgYiA9IHsgc3RhcnQ6IDUwLCBlbmQ6IDU5LCB9OyBoZWxwICfOqWltdF9fOTQnLCBhLCBiLCB7IG1lZXRpbmc6ICggSUZOLmlzTWVldGluZyBhLCBiICksIG92ZXJsYXBwaW5nOiAoIElGTi5pc092ZXJsYXBwaW5nIGEsIGIgKSwgb3ZlcmxhcHBpbmdfczogKCBJRk4uaXNPdmVybGFwcGluZ1NpbXBsZSBhLCBiICksIH1cbiAgYSA9IHsgc3RhcnQ6IDQwLCBlbmQ6IDUxLCB9OyBiID0geyBzdGFydDogNTAsIGVuZDogNTksIH07IGhlbHAgJ86paW10X185NScsIGEsIGIsIHsgbWVldGluZzogKCBJRk4uaXNNZWV0aW5nIGEsIGIgKSwgb3ZlcmxhcHBpbmc6ICggSUZOLmlzT3ZlcmxhcHBpbmcgYSwgYiApLCBvdmVybGFwcGluZ19zOiAoIElGTi5pc092ZXJsYXBwaW5nU2ltcGxlIGEsIGIgKSwgfVxuICBhID0geyBzdGFydDogNDAsIGVuZDogNTIsIH07IGIgPSB7IHN0YXJ0OiA1MCwgZW5kOiA1OSwgfTsgaGVscCAnzqlpbXRfXzk2JywgYSwgYiwgeyBtZWV0aW5nOiAoIElGTi5pc01lZXRpbmcgYSwgYiApLCBvdmVybGFwcGluZzogKCBJRk4uaXNPdmVybGFwcGluZyBhLCBiICksIG92ZXJsYXBwaW5nX3M6ICggSUZOLmlzT3ZlcmxhcHBpbmdTaW1wbGUgYSwgYiApLCB9XG4gIGEgPSB7IHN0YXJ0OiAgNSwgZW5kOiAxMCwgfTsgYiA9IHsgc3RhcnQ6IDAsIGVuZDogNCB9OyBoZWxwICfOqWltdF9fOTcnLCBhLCBiLCB7IG1lZXRpbmc6ICggSUZOLmlzTWVldGluZyBhLCBiICksIG92ZXJsYXBwaW5nOiAoIElGTi5pc092ZXJsYXBwaW5nIGEsIGIgKSwgb3ZlcmxhcHBpbmdfczogKCBJRk4uaXNPdmVybGFwcGluZ1NpbXBsZSBhLCBiICksIH1cbiAgYSA9IHsgc3RhcnQ6ICA1LCBlbmQ6IDEwLCB9OyBiID0geyBzdGFydDogNywgZW5kOiA4IH07IGhlbHAgJ86paW10X185OCcsIGEsIGIsIHsgbWVldGluZzogKCBJRk4uaXNNZWV0aW5nIGEsIGIgKSwgb3ZlcmxhcHBpbmc6ICggSUZOLmlzT3ZlcmxhcHBpbmcgYSwgYiApLCBvdmVybGFwcGluZ19zOiAoIElGTi5pc092ZXJsYXBwaW5nU2ltcGxlIGEsIGIgKSwgfVxuICB0cnlcbiAgICBhID0geyBzdGFydDogIDUsIGVuZDogMTAsIH07IGIgPSBbIHsgc3RhcnQ6IDAsIGVuZDogNCB9LCB7IHN0YXJ0OiA3LCBlbmQ6IDggfSwgXTsgaGVscCAnzqlpbXRfXzk5JywgYSwgYiwgeyBtZWV0aW5nOiAoIElGTi5pc01lZXRpbmcgYSwgYiApLCBvdmVybGFwcGluZzogKCBJRk4uaXNPdmVybGFwcGluZyBhLCBiICksIG92ZXJsYXBwaW5nX3M6ICggSUZOLmlzT3ZlcmxhcHBpbmdTaW1wbGUgYSwgYiApLCB9XG4gIGNhdGNoIGUgdGhlbiB3YXJuICfOqWltdF8xMDAnLCBlLm1lc3NhZ2VcbiAgaW5mbygpXG4gIGluZm8gJ86paW10XzEwMScsIElGTi5zaW1wbGlmeSBbXVxuICBpbmZvICfOqWltdF8xMDInLCBJRk4uc2ltcGxpZnkgWyB7IHN0YXJ0OiA0LCBlbmQ6IDIwLCB9LCBdXG4gIGluZm8gJ86paW10XzEwMycsIElGTi5zaW1wbGlmeSBbIHsgc3RhcnQ6IDQsIGVuZDogMTgsIH0sIHsgc3RhcnQ6IDE5LCBlbmQ6IDIyLCB9LCBdXG4gIGluZm8gJ86paW10XzEwNCcsIElGTi5zaW1wbGlmeSBbIHsgc3RhcnQ6IDQsIGVuZDogMTksIH0sIHsgc3RhcnQ6IDE5LCBlbmQ6IDIyLCB9LCBdXG4gIGluZm8gJ86paW10XzEwNScsIElGTi5zaW1wbGlmeSBbIHsgc3RhcnQ6IDQsIGVuZDogMjAsIH0sIHsgc3RhcnQ6IDE5LCBlbmQ6IDIyLCB9LCBdXG4gIGluZm8gJ86paW10XzEwNicsIElGTi5zaW1wbGlmeSBbIHsgc3RhcnQ6IDQsIGVuZDogMjEsIH0sIHsgc3RhcnQ6IDE5LCBlbmQ6IDIyLCB9LCBdXG4gIGluZm8gJ86paW10XzEwNycsIElGTi5zaW1wbGlmeSBbIHsgc3RhcnQ6IDMsIGVuZDogIDksIH0sIHsgc3RhcnQ6ICA5LCBlbmQ6IDEzLCB9LCBdXG4gIGluZm8gJ86paW10XzEwOCcsIElGTi5zaW1wbGlmeSBbIHsgc3RhcnQ6IDMsIGVuZDogIDksIH0sIHsgc3RhcnQ6ICA5LCBlbmQ6IDEzLCB9LCB7IHN0YXJ0OiAxMSwgZW5kOiAxNCwgfSwgXSAjIFt7IHN0YXJ0OiAzLCBlbmQ6IDE0IH1dXG4gIGluZm8gJ86paW10XzEwOScsIElGTi5zaW1wbGlmeSBbIHsgc3RhcnQ6IDMsIGVuZDogIDksIH0sIHsgc3RhcnQ6IDEwLCBlbmQ6IDEzLCB9LCB7IHN0YXJ0OiAxMSwgZW5kOiAxNCwgfSwgXVxuICBpbmZvKClcbiAgaW5mbyAnzqlpbXRfMTEwJywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkKCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnNpbXBsaWZ5KClcbiAgaW5mbyAnzqlpbXRfMTExJywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkIHsgc3RhcnQ6IDQsIGVuZDogMjAsIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnNpbXBsaWZ5KClcbiAgaW5mbyAnzqlpbXRfMTEyJywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkIHsgc3RhcnQ6IDQsIGVuZDogMTgsIH0sIHsgc3RhcnQ6IDE5LCBlbmQ6IDIyLCB9ICAgICAgICAgICAgICAgICAgICAgICAgICApLnNpbXBsaWZ5KClcbiAgaW5mbyAnzqlpbXRfMTEzJywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkIHsgc3RhcnQ6IDQsIGVuZDogMTksIH0sIHsgc3RhcnQ6IDE5LCBlbmQ6IDIyLCB9ICAgICAgICAgICAgICAgICAgICAgICAgICApLnNpbXBsaWZ5KClcbiAgaW5mbyAnzqlpbXRfMTE0JywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkIHsgc3RhcnQ6IDQsIGVuZDogMjAsIH0sIHsgc3RhcnQ6IDE5LCBlbmQ6IDIyLCB9ICAgICAgICAgICAgICAgICAgICAgICAgICApLnNpbXBsaWZ5KClcbiAgaW5mbyAnzqlpbXRfMTE1JywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkIHsgc3RhcnQ6IDQsIGVuZDogMjEsIH0sIHsgc3RhcnQ6IDE5LCBlbmQ6IDIyLCB9ICAgICAgICAgICAgICAgICAgICAgICAgICApLnNpbXBsaWZ5KClcbiAgaW5mbyAnzqlpbXRfMTE2JywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkIHsgc3RhcnQ6IDMsIGVuZDogIDksIH0sIHsgc3RhcnQ6ICA5LCBlbmQ6IDEzLCB9ICAgICAgICAgICAgICAgICAgICAgICAgICApLnNpbXBsaWZ5KClcbiAgaW5mbyAnzqlpbXRfMTE3JywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkIHsgc3RhcnQ6IDMsIGVuZDogIDksIH0sIHsgc3RhcnQ6ICA5LCBlbmQ6IDEzLCB9LCB7IHN0YXJ0OiAxMSwgZW5kOiAxNCwgfSApLnNpbXBsaWZ5KCkgIyBbeyBzdGFydDogMywgZW5kOiAxNCB9XVxuICBpbmZvICfOqWltdF8xMTgnLCAoICggbmV3IFJhbmdlc2V0KCkgKS5hZGQgeyBzdGFydDogMywgZW5kOiAgOSwgfSwgeyBzdGFydDogMTAsIGVuZDogMTMsIH0sIHsgc3RhcnQ6IDExLCBlbmQ6IDE0LCB9ICkuc2ltcGxpZnkoKVxuICBpbmZvKClcbiAgaW5mbyAnzqlpbXRfMTE5JywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkKCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnNpbXBsaWZ5KClcbiAgaW5mbyAnzqlpbXRfMTIwJywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkIHsgbG86IDQsIGhpOiAxOSwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnNpbXBsaWZ5KClcbiAgaW5mbyAnzqlpbXRfMTIxJywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkIHsgbG86IDQsIGhpOiAxNywgfSwgeyBsbzogMTksIGhpOiAyMSwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnNpbXBsaWZ5KClcbiAgaW5mbyAnzqlpbXRfMTIyJywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkIHsgbG86IDQsIGhpOiAxOCwgfSwgeyBsbzogMTksIGhpOiAyMSwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnNpbXBsaWZ5KClcbiAgaW5mbyAnzqlpbXRfMTIzJywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkIHsgbG86IDQsIGhpOiAxOSwgfSwgeyBsbzogMTksIGhpOiAyMSwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnNpbXBsaWZ5KClcbiAgaW5mbyAnzqlpbXRfMTI0JywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkIHsgbG86IDQsIGhpOiAyMCwgfSwgeyBsbzogMTksIGhpOiAyMSwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnNpbXBsaWZ5KClcbiAgaW5mbyAnzqlpbXRfMTI1JywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkIHsgbG86IDMsIGhpOiAgOCwgfSwgeyBsbzogIDksIGhpOiAxMiwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnNpbXBsaWZ5KClcbiAgaW5mbyAnzqlpbXRfMTI2JywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkIHsgbG86IDMsIGhpOiAgOCwgfSwgeyBsbzogIDksIGhpOiAxMiwgfSwgeyBsbzogMTEsIGhpOiAxMywgfSAgICAgICAgICAgICApLnNpbXBsaWZ5KCkgIyBbeyBsbzogMywgaGk6IDEzIH1dXG4gIGluZm8gJ86paW10XzEyNycsICggKCBuZXcgUmFuZ2VzZXQoKSApLmFkZCB7IGxvOiAzLCBoaTogIDgsIH0sIHsgbG86IDEwLCBoaTogMTIsIH0sIHsgbG86IDExLCBoaTogMTMsIH0gICAgICAgICAgICAgKS5zaW1wbGlmeSgpXG4gIHJuZ18yID0gW1xuICAgIHsgc3RhcnQ6ICAzLCBlbmQ6IDEwLCBkYXRhOiAyLCB9XG4gICAgeyBzdGFydDogIDksIGVuZDogMTMsIGRhdGE6IDMsIH1cbiAgICB7IHN0YXJ0OiAxMSwgZW5kOiAxNCwgZGF0YTogNSwgfVxuICAgIF1cbiAgbWVyZ2VfZGF0YV8yID0gKCBhLCBiICkgLT5cbiAgICAjIGRlYnVnICfOqWltdF8xMjgnLCB7IGEsIGIsIH0gIywgeyBhLi4uLCBiLi4uLCB9XG4gICAgcmV0dXJuIHsgYS4uLiwgZGF0YTogYS5kYXRhICogYi5kYXRhLCB9XG4gIG1lcmdlZCA9IElGTi5tZXJnZSAoIGNyZWF0ZV9yZWR1Y2VyIG1lcmdlX2RhdGFfMiApLCBybmdfMiAjIFt7IHN0YXJ0OiAzLCBlbmQ6IDE0IH1dXG4gIGluZm8gJ86paW10XzEyOScsIHJuZyBmb3Igcm5nIGluIG1lcmdlZFxuICAjIHVyZ2UgJ86paW10XzEzMCcsIHJuZyBmb3Igcm5nIGluIG1lcmdlZF9mdFxuICAjIHVyZ2UoKVxuICA7bnVsbFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gICMgZGVtb19pbmZpbml0ZV9wcm94eSgpXG4gICMgZGVtb19jb2xvcmZ1bF9wcm94eSgpXG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogdHJ1ZSwgcmVwb3J0X2NoZWNrczogdHJ1ZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHRlc3RzLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBkYnJpY19zdGRfZ2VuZXJhdGVfc2VyaWVzOiB0ZXN0cy5kYnJpY19zdGRfZ2VuZXJhdGVfc2VyaWVzLCB9XG5cblxuXG4iXX0=
