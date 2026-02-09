(async function() {
  'use strict';
  var FS, GTNG, GUY, Hoard, PATH, Run, SFMODULES, Scatter, Test, alert, blue, bold, cid_of, debug, echo, f, gold, green, grey, help, info, inspect, internals, log, nfa, plain, praise, red, reverse, rpr, summarize_data, tests, type_of, urge, warn, whisper, white;

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

  ({type_of} = (require('../../../apps/bricabrac-sfmodules/lib/unstable-rpr-type_of-brics')).require_type_of());

  ({Hoard, Scatter, Run, internals, summarize_data} = require('../../../apps/bricabrac-sfmodules/lib/intermission'));

  cid_of = function(text) {
    return text.codePointAt(0);
  };

  //===========================================================================================================
  this.tests = tests = {
    //---------------------------------------------------------------------------------------------------------
    basic_runs: function() {
      var d, h, Ωimt__10, Ωimt__11, Ωimt___1, Ωimt___2, Ωimt___3, Ωimt___4, Ωimt___5, Ωimt___6, Ωimt___7, Ωimt___8, Ωimt___9;
      h = new Hoard();
      d = new Run();
      this.eq((Ωimt___1 = function() {
        return [{...d}, d.size];
      }), [
        {
          lo: 0,
          hi: 0
        },
        1
      ]);
      d = new Run({
        hi: 7
      });
      this.eq((Ωimt___2 = function() {
        return [{...d}, d.size];
      }), [
        {
          lo: 0,
          hi: 7
        },
        8
      ]);
      d = new Run(7);
      this.eq((Ωimt___3 = function() {
        return [{...d}, d.size];
      }), [
        {
          lo: 7,
          hi: 7
        },
        1
      ]);
      d = new Run(7, 7);
      this.eq((Ωimt___4 = function() {
        return [{...d}, d.size];
      }), [
        {
          lo: 7,
          hi: 7
        },
        1
      ]);
      d = new Run(7, 12);
      this.eq((Ωimt___5 = function() {
        return [{...d}, d.size];
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
      this.eq((Ωimt___6 = function() {
        return [{...d}, d.size];
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
        return [{...d}, d.size];
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
        return [{...d}, d.size];
      }), [
        {
          lo: 7,
          hi: 21
        },
        15
      ]);
      d = new Run({
        lo: 7,
        hi: 21
      });
      this.throws((Ωimt___9 = function() {
        return d.lo = 6;
      }), /cannot assign to read only property/i);
      d = new Run({
        lo: 7,
        hi: 21
      });
      this.throws((Ωimt__10 = function() {
        return d.hi = 22;
      }), /cannot assign to read only property/i);
      //.......................................................................................................
      this.eq((Ωimt__11 = function() {
        return (new Run(1, 1)).scatter;
      }), void 0);
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    basic_scatters: function() {
      (() => {
        var h, s, Ωimt__12, Ωimt__13, Ωimt__14, Ωimt__15, Ωimt__16, Ωimt__18, Ωimt__20, Ωimt__21, Ωimt__22, Ωimt__23;
        h = new Hoard();
        s = h.add_scatter({
          a: 1
        });
        this.eq((Ωimt__12 = function() {
          return {...s};
        }), {
          data: {
            a: 1
          },
          rowid: 't:hrd:scatters,R=1',
          runs: []
        });
        this.eq((Ωimt__13 = function() {
          return s.is_normalized;
        }), false);
        //.....................................................................................................
        s.add_run({
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__14 = function() {
          return s.runs.length;
        }), 1);
        s.add_run(1);
        this.eq((Ωimt__15 = function() {
          return s.runs.length;
        }), 2);
        s.add_run({
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__16 = function() {
          return s.runs.length;
        }), 3);
        // s.add_run new Run { lo: 1, hi: 1, };  @eq ( Ωimt__17 = -> s.runs.length     ), 3
        //.....................................................................................................
        this.eq((Ωimt__18 = function() {
          return s.is_normalized;
        }), false);
        // @eq ( Ωimt__19 = -> s.is_sorted       ), false
        this.eq((Ωimt__20 = function() {
          return s.data;
        }), {
          a: 1
        });
        this.eq((Ωimt__21 = function() {
          return {...s.runs[0]};
        }), {
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__22 = function() {
          return {...s.runs[1]};
        }), {
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__23 = function() {
          return {...s.runs[2]};
        }), {
          lo: 1,
          hi: 1
        });
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt__24, Ωimt__25, Ωimt__26, Ωimt__27, Ωimt__28, Ωimt__29, Ωimt__30, Ωimt__31, Ωimt__32, Ωimt__33, Ωimt__34, Ωimt__35;
        h = new Hoard();
        s = h.add_scatter();
        this.eq((Ωimt__24 = function() {
          return s.is_normalized;
        }), false);
        s.add_run(103, 109);
        this.eq((Ωimt__25 = function() {
          return s.runs.length;
        }), 1);
        this.eq((Ωimt__26 = function() {
          return s.is_normalized;
        }), false);
        s.add_run(111, 115);
        this.eq((Ωimt__27 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt__28 = function() {
          return s.is_normalized;
        }), false);
        s.add_run(110);
        this.eq((Ωimt__29 = function() {
          return s.runs.length;
        }), 3);
        this.eq((Ωimt__30 = function() {
          return s.is_normalized;
        }), false);
        this.eq((Ωimt__31 = function() {
          return {
            min: s.min,
            max: s.max
          };
        }), {
          min: 103,
          max: 115
        });
        this.eq((Ωimt__32 = function() {
          return s.minmax;
        }), {
          min: 103,
          max: 115
        });
        //.....................................................................................................
        this.eq((Ωimt__33 = function() {
          return {...s.runs[0]};
        }), {
          lo: 103,
          hi: 109
        });
        this.eq((Ωimt__34 = function() {
          return {...s.runs[1]};
        }), {
          lo: 111,
          hi: 115
        });
        this.eq((Ωimt__35 = function() {
          return {...s.runs[2]};
        }), {
          lo: 110,
          hi: 110
        });
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    _overlapping: function() {
      (() => {
        var h, s, Ωimt__38, Ωimt__39, Ωimt__40, Ωimt__41, Ωimt__42;
        h = new Hoard();
        s = h.add_scatter();
        s.add_run('a', 'y');
        s.add_run('A', 'Y');
        debug('Ωimt__36', h);
        debug('Ωimt__37', h.scatters);
        this.eq((Ωimt__38 = function() {
          return s.contains('a');
        }), true);
        this.eq((Ωimt__39 = function() {
          return s.contains({
            lo: 'a'
          });
        }), true);
        this.eq((Ωimt__40 = function() {
          return s.contains({
            lo: 'a',
            hi: 'y'
          });
        }), true);
        this.eq((Ωimt__41 = function() {
          return s.contains({
            lo: 'a',
            hi: 'z'
          });
        }), true);
        this.eq((Ωimt__42 = function() {
          return s.contains('0');
        }), false);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    containment: function() {
      (() => {
        var h, r, Ωimt__43, Ωimt__44, Ωimt__45, Ωimt__46, Ωimt__47, Ωimt__48, Ωimt__49, Ωimt__50, Ωimt__51, Ωimt__52, Ωimt__53, Ωimt__54, Ωimt__55, Ωimt__56, Ωimt__57, Ωimt__58, Ωimt__59, Ωimt__60, Ωimt__61, Ωimt__62, Ωimt__63;
        h = new Hoard();
        r = new Run({
          lo: 25,
          hi: 30
        });
        this.eq((Ωimt__43 = function() {
          return r.contains(21);
        }), false);
        this.eq((Ωimt__44 = function() {
          return r.contains(22);
        }), false);
        this.eq((Ωimt__45 = function() {
          return r.contains(23);
        }), false);
        this.eq((Ωimt__46 = function() {
          return r.contains(24);
        }), false);
        this.eq((Ωimt__47 = function() {
          return r.contains(25);
        }), true);
        this.eq((Ωimt__48 = function() {
          return r.contains(26);
        }), true);
        this.eq((Ωimt__49 = function() {
          return r.contains(27);
        }), true);
        this.eq((Ωimt__50 = function() {
          return r.contains(28);
        }), true);
        this.eq((Ωimt__51 = function() {
          return r.contains(29);
        }), true);
        this.eq((Ωimt__52 = function() {
          return r.contains(30);
        }), true);
        this.eq((Ωimt__53 = function() {
          return r.contains(31);
        }), false);
        this.eq((Ωimt__54 = function() {
          return r.contains(41);
        }), false);
        this.eq((Ωimt__55 = function() {
          return r.contains([25]);
        }), true);
        this.eq((Ωimt__56 = function() {
          return r.contains([30]);
        }), true);
        this.eq((Ωimt__57 = function() {
          return r.contains([31]);
        }), false);
        this.eq((Ωimt__58 = function() {
          return r.contains([32]);
        }), false);
        this.eq((Ωimt__59 = function() {
          return r.contains([25, 26, 27, 28, 29, 30]);
        }), true);
        this.eq((Ωimt__60 = function() {
          return r.contains([25, 26, 27, 28, 29, 30, 31]);
        }), false);
        this.eq((Ωimt__61 = function() {
          return r.contains((function*() {
            return (yield* [25, 26, 27, 28, 29, 30]);
          })());
        }), true);
        this.eq((Ωimt__62 = function() {
          return r.contains((function*() {
            return (yield* [25, 26, 27, 28, 29, 30, 31]);
          })());
        }), false);
        this.eq((Ωimt__63 = function() {
          return r.contains((function*() {
            return (yield* [25, 26, 27, 28, 29, 30, 31, 32]);
          })());
        }), false);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_100, Ωimt_101, Ωimt_102, Ωimt_103, Ωimt_104, Ωimt_105, Ωimt_106, Ωimt_107, Ωimt_108, Ωimt_109, Ωimt_110, Ωimt_111, Ωimt_112, Ωimt_113, Ωimt_114, Ωimt_115, Ωimt_116, Ωimt_117, Ωimt_118, Ωimt_119, Ωimt_120, Ωimt_121, Ωimt_122, Ωimt_123, Ωimt_124, Ωimt_125, Ωimt_126, Ωimt_127, Ωimt_128, Ωimt_129, Ωimt_130, Ωimt_131, Ωimt__64, Ωimt__65, Ωimt__66, Ωimt__67, Ωimt__68, Ωimt__69, Ωimt__70, Ωimt__71, Ωimt__72, Ωimt__73, Ωimt__74, Ωimt__75, Ωimt__76, Ωimt__77, Ωimt__78, Ωimt__79, Ωimt__80, Ωimt__81, Ωimt__82, Ωimt__83, Ωimt__84, Ωimt__85, Ωimt__86, Ωimt__87, Ωimt__88, Ωimt__89, Ωimt__90, Ωimt__91, Ωimt__92, Ωimt__93, Ωimt__94, Ωimt__95, Ωimt__96, Ωimt__97, Ωimt__98, Ωimt__99;
        h = new Hoard();
        s = h.add_scatter();
        s.add_run(25, 30);
        s.add_run(32, 40);
        this.eq((Ωimt__64 = function() {
          return s.contains(21);
        }), false);
        this.eq((Ωimt__65 = function() {
          return s.contains(22);
        }), false);
        this.eq((Ωimt__66 = function() {
          return s.contains(23);
        }), false);
        this.eq((Ωimt__67 = function() {
          return s.contains(24);
        }), false);
        this.eq((Ωimt__68 = function() {
          return s.contains(25);
        }), true);
        this.eq((Ωimt__69 = function() {
          return s.contains(26);
        }), true);
        this.eq((Ωimt__70 = function() {
          return s.contains(27);
        }), true);
        this.eq((Ωimt__71 = function() {
          return s.contains(28);
        }), true);
        this.eq((Ωimt__72 = function() {
          return s.contains(29);
        }), true);
        this.eq((Ωimt__73 = function() {
          return s.contains(30);
        }), true);
        this.eq((Ωimt__74 = function() {
          return s.contains(31);
        }), false);
        this.eq((Ωimt__75 = function() {
          return s.contains(32);
        }), true);
        this.eq((Ωimt__76 = function() {
          return s.contains(33);
        }), true);
        this.eq((Ωimt__77 = function() {
          return s.contains(34);
        }), true);
        this.eq((Ωimt__78 = function() {
          return s.contains(35);
        }), true);
        this.eq((Ωimt__79 = function() {
          return s.contains(36);
        }), true);
        this.eq((Ωimt__80 = function() {
          return s.contains(37);
        }), true);
        this.eq((Ωimt__81 = function() {
          return s.contains(38);
        }), true);
        this.eq((Ωimt__82 = function() {
          return s.contains(39);
        }), true);
        this.eq((Ωimt__83 = function() {
          return s.contains(40);
        }), true);
        this.eq((Ωimt__84 = function() {
          return s.contains(41);
        }), false);
        this.eq((Ωimt__85 = function() {
          return s.contains(42);
        }), false);
        this.eq((Ωimt__86 = function() {
          return s.contains(43);
        }), false);
        this.eq((Ωimt__87 = function() {
          return [25, 26, 27, 28, 29, 30].every(function(n) {
            return s.contains(n);
          });
        }), true);
        this.eq((Ωimt__88 = function() {
          return [25, 26, 27, 28, 29, 30, 31].every(function(n) {
            return s.contains(n);
          });
        }), false);
        this.eq((Ωimt__89 = function() {
          return [30].every(function(n) {
            return s.contains(n);
          });
        }), true);
        this.eq((Ωimt__90 = function() {
          return [31].every(function(n) {
            return s.contains(n);
          });
        }), false);
        this.eq((Ωimt__91 = function() {
          return [32].every(function(n) {
            return s.contains(n);
          });
        }), true);
        this.eq((Ωimt__92 = function() {
          return ((function*() {
            return (yield* [25, 26, 27, 28, 29, 30]);
          })()).every(function(n) {
            return s.contains(n);
          });
        }), true);
        this.eq((Ωimt__93 = function() {
          return ((function*() {
            return (yield* [25, 26, 27, 28, 29, 30, 31]);
          })()).every(function(n) {
            return s.contains(n);
          });
        }), false);
        this.eq((Ωimt__94 = function() {
          return ((function*() {
            return (yield* [25, 26, 27, 28, 29, 30, 31, 32]);
          })()).every(function(n) {
            return s.contains(n);
          });
        }), false);
        this.eq((Ωimt__95 = function() {
          return [...(new Run(25))].every(function(n) {
            return s.contains(n);
          });
        }), true);
        this.eq((Ωimt__96 = function() {
          return [...(new Run(25, 30))].every(function(n) {
            return s.contains(n);
          });
        }), true);
        this.eq((Ωimt__97 = function() {
          return [...(new Run(25, 32))].every(function(n) {
            return s.contains(n);
          });
        }), false);
        //.....................................................................................................
        this.eq((Ωimt__98 = function() {
          return h.contains(21);
        }), false);
        this.eq((Ωimt__99 = function() {
          return h.contains(22);
        }), false);
        this.eq((Ωimt_100 = function() {
          return h.contains(23);
        }), false);
        this.eq((Ωimt_101 = function() {
          return h.contains(24);
        }), false);
        this.eq((Ωimt_102 = function() {
          return h.contains(25);
        }), true);
        this.eq((Ωimt_103 = function() {
          return h.contains(26);
        }), true);
        this.eq((Ωimt_104 = function() {
          return h.contains(27);
        }), true);
        this.eq((Ωimt_105 = function() {
          return h.contains(28);
        }), true);
        this.eq((Ωimt_106 = function() {
          return h.contains(29);
        }), true);
        this.eq((Ωimt_107 = function() {
          return h.contains(30);
        }), true);
        this.eq((Ωimt_108 = function() {
          return h.contains(31);
        }), false);
        this.eq((Ωimt_109 = function() {
          return h.contains(32);
        }), true);
        this.eq((Ωimt_110 = function() {
          return h.contains(33);
        }), true);
        this.eq((Ωimt_111 = function() {
          return h.contains(34);
        }), true);
        this.eq((Ωimt_112 = function() {
          return h.contains(35);
        }), true);
        this.eq((Ωimt_113 = function() {
          return h.contains(36);
        }), true);
        this.eq((Ωimt_114 = function() {
          return h.contains(37);
        }), true);
        this.eq((Ωimt_115 = function() {
          return h.contains(38);
        }), true);
        this.eq((Ωimt_116 = function() {
          return h.contains(39);
        }), true);
        this.eq((Ωimt_117 = function() {
          return h.contains(40);
        }), true);
        this.eq((Ωimt_118 = function() {
          return h.contains(41);
        }), false);
        this.eq((Ωimt_119 = function() {
          return h.contains(42);
        }), false);
        this.eq((Ωimt_120 = function() {
          return h.contains(43);
        }), false);
        this.eq((Ωimt_121 = function() {
          return [25, 26, 27, 28, 29, 30].every(function(n) {
            return h.contains(n);
          });
        }), true);
        this.eq((Ωimt_122 = function() {
          return [25, 26, 27, 28, 29, 30, 31].every(function(n) {
            return h.contains(n);
          });
        }), false);
        this.eq((Ωimt_123 = function() {
          return [30].every(function(n) {
            return h.contains(n);
          });
        }), true);
        this.eq((Ωimt_124 = function() {
          return [31].every(function(n) {
            return h.contains(n);
          });
        }), false);
        this.eq((Ωimt_125 = function() {
          return [32].every(function(n) {
            return h.contains(n);
          });
        }), true);
        this.eq((Ωimt_126 = function() {
          return ((function*() {
            return (yield* [25, 26, 27, 28, 29, 30]);
          })()).every(function(n) {
            return h.contains(n);
          });
        }), true);
        this.eq((Ωimt_127 = function() {
          return ((function*() {
            return (yield* [25, 26, 27, 28, 29, 30, 31]);
          })()).every(function(n) {
            return h.contains(n);
          });
        }), false);
        this.eq((Ωimt_128 = function() {
          return ((function*() {
            return (yield* [25, 26, 27, 28, 29, 30, 31, 32]);
          })()).every(function(n) {
            return h.contains(n);
          });
        }), false);
        this.eq((Ωimt_129 = function() {
          return [...(new Run(25))].every(function(n) {
            return h.contains(n);
          });
        }), true);
        this.eq((Ωimt_130 = function() {
          return [...(new Run(25, 30))].every(function(n) {
            return h.contains(n);
          });
        }), true);
        this.eq((Ωimt_131 = function() {
          return [...(new Run(25, 32))].every(function(n) {
            return h.contains(n);
          });
        }), false);
        //.....................................................................................................
        // s1 = h.add_scatter()
        // s1.add_run 26, 27
        // s1.add_run 37, 40
        // @eq ( Ωimt_132 = -> s1.is_normalized                            ), false
        // @eq ( Ωimt_133 = -> s.contains s1                               ), true
        // @eq ( Ωimt_134 = -> s1.is_normalized                            ), true
        // s1.add_run 25, 32
        // @eq ( Ωimt_135 = -> s.contains s1                               ), false
        // @eq ( Ωimt_136 = -> s.is_normalized                             ), true
        // s.add_run 31
        // @eq ( Ωimt_137 = -> s.is_normalized                             ), false
        // @eq ( Ωimt_138 = -> s.contains s1                               ), true
        // @eq ( Ωimt_139 = -> s.is_normalized                             ), true
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    iteration: function() {
      (() => {
        var h, Ωimt_140, Ωimt_141, Ωimt_142;
        h = new Hoard();
        this.eq((Ωimt_140 = function() {
          return [...(new Run(1))];
        }), [1]);
        this.eq((Ωimt_141 = function() {
          return [...(new Run(297))];
        }), [297]);
        this.eq((Ωimt_142 = function() {
          return [...(new Run(297, 308))];
        }), [297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308]);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_143, Ωimt_144, Ωimt_145, Ωimt_146, Ωimt_147, Ωimt_148, Ωimt_149, Ωimt_150, Ωimt_151, Ωimt_152, Ωimt_153, Ωimt_154, Ωimt_155, Ωimt_156, Ωimt_157;
        h = new Hoard();
        s = h.add_scatter();
        this.eq((Ωimt_143 = function() {
          return [...s];
        }), []);
        s.add_run(1);
        this.eq((Ωimt_144 = function() {
          return [...s];
        }), [1]);
        this.eq((Ωimt_145 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(297);
        this.eq((Ωimt_146 = function() {
          return [...s];
        }), [1, 297]);
        this.eq((Ωimt_147 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(299, 302);
        this.eq((Ωimt_148 = function() {
          return [...s];
        }), [1, 297, 299, 300, 301, 302]);
        this.eq((Ωimt_149 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(298);
        this.eq((Ωimt_150 = function() {
          return [...s];
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_151 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(300, 301);
        this.eq((Ωimt_152 = function() {
          return [...s];
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_153 = function() {
          return s.is_normalized;
        }), true);
        this.eq((Ωimt_154 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt_155 = function() {
          return {...s.runs[0]};
        }), {
          lo: 1,
          hi: 1,
          rowid: 't:hrd:runs,R=9',
          scatter: 't:hrd:scatters,R=1'
        });
        this.eq((Ωimt_156 = function() {
          return {...s.runs[1]};
        }), {
          lo: 297,
          hi: 302,
          rowid: 't:hrd:runs,R=10',
          scatter: 't:hrd:scatters,R=1'
        });
        this.eq((Ωimt_157 = function() {
          return s.points;
        }), [1, 297, 298, 299, 300, 301, 302]);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_158, Ωimt_159, Ωimt_160, Ωimt_161, Ωimt_162, Ωimt_163, Ωimt_164, Ωimt_165, Ωimt_166, Ωimt_167, Ωimt_168, Ωimt_169, Ωimt_170, Ωimt_171, Ωimt_172;
        h = new Hoard();
        s = h.add_scatter();
        this.eq((Ωimt_158 = function() {
          return [...s.walk()];
        }), []);
        s.add_run(1);
        this.eq((Ωimt_159 = function() {
          return [...s.walk()];
        }), [1]);
        this.eq((Ωimt_160 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(297);
        this.eq((Ωimt_161 = function() {
          return [...s.walk()];
        }), [1, 297]);
        this.eq((Ωimt_162 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(299, 302);
        this.eq((Ωimt_163 = function() {
          return [...s.walk()];
        }), [1, 297, 299, 300, 301, 302]);
        this.eq((Ωimt_164 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(298);
        this.eq((Ωimt_165 = function() {
          return [...s.walk()];
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_166 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(300, 301);
        this.eq((Ωimt_167 = function() {
          return [...s.walk()];
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_168 = function() {
          return s.is_normalized;
        }), true);
        this.eq((Ωimt_169 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt_170 = function() {
          return {...s.runs[0]};
        }), {
          lo: 1,
          hi: 1,
          rowid: 't:hrd:runs,R=9',
          scatter: 't:hrd:scatters,R=1'
        });
        this.eq((Ωimt_171 = function() {
          return {...s.runs[1]};
        }), {
          lo: 297,
          hi: 302,
          rowid: 't:hrd:runs,R=10',
          scatter: 't:hrd:scatters,R=1'
        });
        this.eq((Ωimt_172 = function() {
          return s.points;
        }), [1, 297, 298, 299, 300, 301, 302]);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_173, Ωimt_174, Ωimt_175, Ωimt_176, Ωimt_177, Ωimt_178, Ωimt_179, Ωimt_180, Ωimt_181, Ωimt_182, Ωimt_183, Ωimt_184, Ωimt_185, Ωimt_186, Ωimt_187;
        h = new Hoard();
        s = h.add_scatter();
        this.eq((Ωimt_173 = function() {
          return s.points;
        }), []);
        s.add_run(1);
        this.eq((Ωimt_174 = function() {
          return s.points;
        }), [1]);
        this.eq((Ωimt_175 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(297);
        this.eq((Ωimt_176 = function() {
          return s.points;
        }), [1, 297]);
        this.eq((Ωimt_177 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(299, 302);
        this.eq((Ωimt_178 = function() {
          return s.points;
        }), [1, 297, 299, 300, 301, 302]);
        this.eq((Ωimt_179 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(298);
        this.eq((Ωimt_180 = function() {
          return s.points;
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_181 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(300, 301);
        this.eq((Ωimt_182 = function() {
          return s.points;
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_183 = function() {
          return s.is_normalized;
        }), true);
        this.eq((Ωimt_184 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt_185 = function() {
          return {...s.runs[0]};
        }), {
          lo: 1,
          hi: 1,
          rowid: 't:hrd:runs,R=9',
          scatter: 't:hrd:scatters,R=1'
        });
        this.eq((Ωimt_186 = function() {
          return {...s.runs[1]};
        }), {
          lo: 297,
          hi: 302,
          rowid: 't:hrd:runs,R=10',
          scatter: 't:hrd:scatters,R=1'
        });
        this.eq((Ωimt_187 = function() {
          return s.points;
        }), [1, 297, 298, 299, 300, 301, 302]);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    using_strings_for_bounds: function() {
      (() => {
        var h, s, Ωimt_188, Ωimt_190;
        h = new Hoard();
        s = h.add_scatter();
        this.throws((Ωimt_188 = function() {
          return s.add_run(5.8);
        }), /not a valid point/);
        // @throws ( Ωimt_189 = -> s.add_run -3          ), /-0x3 is not between \+0x0 and \+0x10ffff/
        this.throws((Ωimt_190 = function() {
          return s.add_run(0, -3);
        }), /lo must be less than or equal to hi/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_191, Ωimt_192, Ωimt_193, Ωimt_194;
        h = new Hoard({
          first: -10,
          last: +10
        });
        s = h.add_scatter();
        s.add_run(-10);
        this.eq((Ωimt_191 = function() {
          return s.points;
        }), [-10]);
        s.add_run(+10);
        this.eq((Ωimt_192 = function() {
          return s.points;
        }), [-10, +10]);
        this.throws((Ωimt_193 = function() {
          return s.add_run(-11);
        }), /expected run to be entirely between -0xa and \+0xa, got \{ lo: -0xb, -0xb, \}/);
        this.throws((Ωimt_194 = function() {
          return s.add_run(+11);
        }), /expected run to be entirely between -0xa and \+0xa, got \{ lo: \+0xb, \+0xb, \}/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_195, Ωimt_196, Ωimt_197, Ωimt_198, Ωimt_199, Ωimt_200;
        h = new Hoard();
        s = h.add_scatter();
        s.add_run(cid_of('A'));
        this.eq((Ωimt_195 = function() {
          return s.points;
        }), ['A'.codePointAt(0)]);
        s.add_run(cid_of('A'), cid_of('Z'));
        this.eq((Ωimt_196 = function() {
          return s.points;
        }), [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]);
        s.add_run(cid_of('a'), cid_of('z'));
        this.eq((Ωimt_197 = function() {
          return s.points;
        }), [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122]);
        this.eq((Ωimt_198 = function() {
          return s.min;
        }), 'A'.codePointAt(0));
        this.eq((Ωimt_199 = function() {
          return s.max;
        }), 'z'.codePointAt(0));
        this.eq((Ωimt_200 = function() {
          return {
            min: s.min,
            max: s.max
          };
        }), s.minmax);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_201, Ωimt_202, Ωimt_203, Ωimt_204, Ωimt_205;
        h = new Hoard();
        s = h.add_scatter();
        s = h.add_scatter();
        s = h.add_scatter();
        s.add_codepoints_of('Abc');
        this.eq((Ωimt_201 = function() {
          return s.runs.length;
        }), 3);
        this.eq((Ωimt_202 = function() {
          return s.points;
        }), ['A'.codePointAt(0), 'b'.codePointAt(0), 'c'.codePointAt(0)]);
        this.eq((Ωimt_203 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt_204 = function() {
          return {...s.runs[0]};
        }), {
          lo: 'A'.codePointAt(0),
          hi: 'A'.codePointAt(0),
          rowid: 't:hrd:runs,R=1',
          scatter: 't:hrd:scatters,R=3'
        });
        this.eq((Ωimt_205 = function() {
          return {...s.runs[1]};
        }), {
          lo: 'b'.codePointAt(0),
          hi: 'c'.codePointAt(0),
          rowid: 't:hrd:runs,R=2',
          scatter: 't:hrd:scatters,R=3'
        });
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_206, Ωimt_207, Ωimt_208;
        h = new Hoard();
        s = h.add_scatter();
        s.add_codepoints_of('aeiouäöü', 'aeiouäöü', 'AEIOUÄÖÜ', 'AEIOUÄÖÜ');
        this.eq((Ωimt_206 = function() {
          var cid;
          return ((function() {
            var i, len, ref, results;
            ref = s.points;
            results = [];
            for (i = 0, len = ref.length; i < len; i++) {
              cid = ref[i];
              results.push(String.fromCodePoint(cid));
            }
            return results;
          })()).join('');
        }), 'AEIOUaeiouÄÖÜäöü');
        this.eq((Ωimt_207 = function() {
          return s.runs.length;
        }), 16);
        s.normalize();
        this.eq((Ωimt_208 = function() {
          return s.runs.length;
        }), 16);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    data_retrieval: function() {
      (() => {
        var h, s_umlaut, s_vowels, Ωimt_209, Ωimt_210, Ωimt_211, Ωimt_212, Ωimt_213, Ωimt_214;
        h = new Hoard();
        s_vowels = h.add_scatter({
          tags: ['vowel'],
          is_ascii: true
        });
        s_umlaut = h.add_scatter({
          tags: ['umlaut']
        });
        s_vowels.add_codepoints_of('aeiouäöü', 'aeiouäöü', 'AEIOUÄÖÜ', 'AEIOUÄÖÜ');
        s_umlaut.add_codepoints_of('äöü', 'äöü', 'ÄÖÜ');
        this.eq((Ωimt_209 = function() {
          return s_vowels.contains(cid_of('A'));
        }), true);
        this.eq((Ωimt_210 = function() {
          return s_vowels.contains(cid_of('B'));
        }), false);
        this.eq((Ωimt_211 = function() {
          return h.summarize_data_for_point(cid_of('A'));
        }), {
          is_ascii: [true],
          tags: ['vowel']
        });
        this.eq((Ωimt_212 = function() {
          return h.summarize_data_for_point(cid_of('ä'));
        }), {
          is_ascii: [true],
          tags: ['umlaut', 'vowel']
        });
        this.eq((Ωimt_213 = function() {
          return h.summarize_data_for_point(cid_of('B'));
        }), null);
        this.eq((Ωimt_214 = function() {
          return h.summarize_data_for_point(cid_of('y'));
        }), null);
        return null;
      })();
      (() => {        //.......................................................................................................
        var Vu_hoard, h, s_ascii, s_not_ascii, s_umlaut, s_vowels, Ωimt_215, Ωimt_216, Ωimt_217, Ωimt_218, Ωimt_219, Ωimt_220, Ωimt_221, Ωimt_222, Ωimt_223, Ωimt_224, Ωimt_225, Ωimt_226, Ωimt_227, Ωimt_228, Ωimt_229, Ωimt_230, Ωimt_231, Ωimt_232;
        Vu_hoard = (function() {
          class Vu_hoard extends Hoard {};

          Vu_hoard.prototype.summarize_data_is_ascii = summarize_data.as_boolean_and;

          return Vu_hoard;

        }).call(this);
        h = new Vu_hoard();
        s_ascii = h.add_scatter({
          is_ascii: true
        });
        s_vowels = h.add_scatter({
          tags: ['vowel']
        });
        s_umlaut = h.add_scatter({
          tags: ['umlaut']
        });
        s_ascii.add_run(cid_of('a'), cid_of('z'));
        s_ascii.add_run(cid_of('A'), cid_of('Z'));
        s_vowels.add_codepoints_of('aeiouäöü', 'aeiouäöü', 'AEIOUÄÖÜ', 'AEIOUÄÖÜ');
        s_umlaut.add_codepoints_of('äöü', 'äöü', 'ÄÖÜ');
        this.eq((Ωimt_215 = function() {
          return s_ascii.contains(cid_of('A'));
        }), true);
        this.eq((Ωimt_216 = function() {
          return s_ascii.contains(cid_of('Q'));
        }), true);
        this.eq((Ωimt_217 = function() {
          return s_ascii.contains(cid_of('f'));
        }), true);
        this.eq((Ωimt_218 = function() {
          return s_vowels.contains(cid_of('A'));
        }), true);
        this.eq((Ωimt_219 = function() {
          return s_vowels.contains(cid_of('B'));
        }), false);
        this.eq((Ωimt_220 = function() {
          return h.get_data_for_point(cid_of('A'));
        }), [
          {
            is_ascii: true
          },
          {
            tags: ['vowel']
          }
        ]);
        this.eq((Ωimt_221 = function() {
          return h.get_data_for_point(cid_of('Q'));
        }), [
          {
            is_ascii: true
          }
        ]);
        this.eq((Ωimt_222 = function() {
          return h.get_data_for_point(cid_of('f'));
        }), [
          {
            is_ascii: true
          }
        ]);
        this.eq((Ωimt_223 = function() {
          return h.get_data_for_point(cid_of('B'));
        }), [
          {
            is_ascii: true
          }
        ]);
        this.eq((Ωimt_224 = function() {
          return h.get_data_for_point(cid_of('ä'));
        }), [
          {
            tags: ['vowel']
          },
          {
            tags: ['umlaut']
          }
        ]);
        this.eq((Ωimt_225 = function() {
          return h.summarize_data_for_point(cid_of('A'));
        }), {
          is_ascii: true,
          tags: ['vowel']
        });
        this.eq((Ωimt_226 = function() {
          return h.summarize_data_for_point(cid_of('Q'));
        }), {
          is_ascii: true
        });
        this.eq((Ωimt_227 = function() {
          return h.summarize_data_for_point(cid_of('f'));
        }), {
          is_ascii: true
        });
        this.eq((Ωimt_228 = function() {
          return h.summarize_data_for_point(cid_of('B'));
        }), {
          is_ascii: true
        });
        this.eq((Ωimt_229 = function() {
          return h.summarize_data_for_point(cid_of('ä'));
        }), {
          tags: ['umlaut', 'vowel']
        });
        //.....................................................................................................
        s_not_ascii = h.add_scatter({
          is_ascii: false
        });
        s_not_ascii.add_run(0x80, 0x10ffff);
        this.eq((Ωimt_230 = function() {
          return h.summarize_data_for_point(cid_of('B'));
        }), {
          is_ascii: true
        });
        this.eq((Ωimt_231 = function() {
          return h.summarize_data_for_point(cid_of('ä'));
        }), {
          is_ascii: false,
          tags: ['umlaut', 'vowel']
        });
        this.throws((Ωimt_232 = function() {
          return h.summarize_data_for_point('äwhat');
        }), /not a valid point/);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    validation: function() {
      var Ωimt_235, Ωimt_236, Ωimt_237, Ωimt_238, Ωimt_239, Ωimt_240, Ωimt_241, Ωimt_242, Ωimt_243, Ωimt_244, Ωimt_245, Ωimt_246, Ωimt_247, Ωimt_248, Ωimt_249, Ωimt_250;
      //.......................................................................................................
      this.eq((Ωimt_235 = function() {
        return internals.typespace.integer.isa(5);
      }), true);
      this.eq((Ωimt_236 = function() {
        return internals.typespace.point.isa(5);
      }), true);
      this.eq((Ωimt_237 = function() {
        return internals.typespace.point.isa('a');
      }), false);
      //.......................................................................................................
      this.eq((Ωimt_238 = function() {
        return internals.typespace.integer.isa(55.5);
      }), false);
      this.eq((Ωimt_239 = function() {
        return internals.typespace.point.isa(55.5);
      }), false);
      this.eq((Ωimt_240 = function() {
        return internals.typespace.point.isa('abc');
      }), false);
      //.......................................................................................................
      this.eq((Ωimt_241 = function() {
        return internals.typespace.integer.validate(5);
      }), 5);
      this.eq((Ωimt_242 = function() {
        return internals.typespace.point.validate(5);
      }), 5);
      this.throws((Ωimt_243 = function() {
        return internals.typespace.point.validate('a');
      }), /not a valid point/);
      //.......................................................................................................
      this.throws((Ωimt_244 = function() {
        return internals.typespace.integer.validate(55.5);
      }), /not a valid integer/);
      this.throws((Ωimt_245 = function() {
        return internals.typespace.point.validate(55.5);
      }), /not a valid point/);
      this.throws((Ωimt_246 = function() {
        return internals.typespace.point.validate('abc');
      }), /not a valid point/);
      //.......................................................................................................
      this.throws((Ωimt_247 = function() {
        return internals.typespace.integer.validate(55.5);
      }), /not a valid integer/);
      this.throws((Ωimt_248 = function() {
        return internals.typespace.point.validate(55.5);
      }), /not a valid point/);
      this.throws((Ωimt_249 = function() {
        return internals.typespace.point.validate('abc');
      }), /not a valid point/);
      this.throws((Ωimt_250 = function() {
        return internals.typespace.point.validate('');
      }), /not a valid point/);
      //.......................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var Coverage_analyzer, ca, do_coverage, guytest_cfg, i, len, name, ref;
      do_coverage = false;
      do_coverage = true;
      if (do_coverage) {
        ({Coverage_analyzer} = require('../../../apps/bricabrac-sfmodules/lib/coverage-analyzer'));
        ca = new Coverage_analyzer();
        ca.wrap_class(Hoard);
        ca.wrap_class(Scatter);
        ca.wrap_class(Run);
      }
      //.........................................................................................................
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
      guytest_cfg = {
        throw_on_error: true,
        show_passes: false,
        report_checks: false
      };
      (new Test(guytest_cfg)).test({tests});
      // ( new Test guytest_cfg ).test { containment: tests.containment, }
      //.........................................................................................................
      if (do_coverage) {
        if (ca.unused_names.length > 0) {
          ref = ca.unused_names;
          for (i = 0, len = ref.length; i < len; i++) {
            name = ref[i];
            warn('Ωimt_251', "not covered:", reverse(bold(` ${name} `)));
          }
        }
      }
      //.........................................................................................................
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtaW50ZXJtaXNzaW9uLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxFQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxNQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsU0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxjQUFBLEVBQUEsS0FBQSxFQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBOzs7RUFHQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLHdCQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsS0FIRixFQUlFLEtBSkYsRUFLRSxJQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxHQVJGLEVBU0UsSUFURixFQVVFLE9BVkYsRUFXRSxHQVhGLENBQUEsR0FXNEIsR0FBRyxDQUFDLEdBWGhDOztFQVlBLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLHlCQUFSLENBQTVCLEVBekJB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LElBQUcsV0FBSDtRQUNFLENBQUEsQ0FBRSxpQkFBRixDQUFBLEdBQWtDLE9BQUEsQ0FBUSx5REFBUixDQUFsQztRQUNBLEVBQUEsR0FBSyxJQUFJLGlCQUFKLENBQUE7UUFDTCxFQUFFLENBQUMsVUFBSCxDQUFjLEtBQWQ7UUFDQSxFQUFFLENBQUMsVUFBSCxDQUFjLE9BQWQ7UUFDQSxFQUFFLENBQUMsVUFBSCxDQUFjLEdBQWQsRUFMRjtPQUZGOztNQVNFLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsS0FBbEI7UUFBMEIsV0FBQSxFQUFhLElBQXZDO1FBQTZDLGFBQUEsRUFBZTtNQUE1RDtNQUNkLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsS0FBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsSUFBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEIsQ0FBRSxLQUFGLENBQTlCLEVBWkY7OztNQWVFLElBQUcsV0FBSDtRQUNFLElBQThGLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBaEIsR0FBeUIsQ0FBdkg7QUFBQTtVQUFBLEtBQUEscUNBQUE7O1lBQUEsSUFBQSxDQUFLLFVBQUwsRUFBaUIsY0FBakIsRUFBbUMsT0FBQSxDQUFTLElBQUEsQ0FBSyxFQUFBLENBQUEsQ0FBSSxJQUFKLEVBQUEsQ0FBTCxDQUFULENBQW5DO1VBQUEsQ0FBQTtTQURGO09BZkY7O2FBa0JHO0lBbkJxQyxDQUFBLElBQXhDOztBQWxiQSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2JyaWNhYnJhYy1pbnRlcm1pc3Npb24nXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgZ3JlZW5cbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiMgd3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcbnsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuRlMgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6ZnMnXG5QQVRIICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xueyB0eXBlX29mLCAgICAgICAgICAgICAgfSA9ICggcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL2xpYi91bnN0YWJsZS1ycHItdHlwZV9vZi1icmljcycgKS5yZXF1aXJlX3R5cGVfb2YoKVxueyBIb2FyZCxcbiAgU2NhdHRlcixcbiAgUnVuLFxuICBpbnRlcm5hbHMsXG4gIHN1bW1hcml6ZV9kYXRhLCAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL2xpYi9pbnRlcm1pc3Npb24nXG5jaWRfb2YgICAgICAgICAgICAgICAgICAgID0gKCB0ZXh0ICkgLT4gdGV4dC5jb2RlUG9pbnRBdCAwXG5cblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRlc3RzID0gdGVzdHMgPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYmFzaWNfcnVuczogLT5cbiAgICBoID0gbmV3IEhvYXJkKClcbiAgICBkID0gbmV3IFJ1bigpOyAgICAgICAgICAgICAgICAgIEBlcSAoIM6paW10X19fMSA9IC0+IFsgeyBkLi4uLCB9LCBkLnNpemUsIF0gKSwgWyB7IGxvOiAwLCBoaTogMCwgfSwgIDEsIF1cbiAgICBkID0gbmV3IFJ1biB7IGhpOiA3LCB9OyAgICAgICAgIEBlcSAoIM6paW10X19fMiA9IC0+IFsgeyBkLi4uLCB9LCBkLnNpemUsIF0gKSwgWyB7IGxvOiAwLCBoaTogNywgfSwgIDgsIF1cbiAgICBkID0gbmV3IFJ1biA3OyAgICAgICAgICAgICAgICAgIEBlcSAoIM6paW10X19fMyA9IC0+IFsgeyBkLi4uLCB9LCBkLnNpemUsIF0gKSwgWyB7IGxvOiA3LCBoaTogNywgfSwgIDEsIF1cbiAgICBkID0gbmV3IFJ1biA3LCA3OyAgICAgICAgICAgICAgIEBlcSAoIM6paW10X19fNCA9IC0+IFsgeyBkLi4uLCB9LCBkLnNpemUsIF0gKSwgWyB7IGxvOiA3LCBoaTogNywgfSwgIDEsIF1cbiAgICBkID0gbmV3IFJ1biA3LCAxMjsgICAgICAgICAgICAgIEBlcSAoIM6paW10X19fNSA9IC0+IFsgeyBkLi4uLCB9LCBkLnNpemUsIF0gKSwgWyB7IGxvOiA3LCBoaTogMTIsIH0sIDYsIF1cbiAgICBkID0gbmV3IFJ1biB7IGxvOiA3LCB9OyAgICAgICAgIEBlcSAoIM6paW10X19fNiA9IC0+IFsgeyBkLi4uLCB9LCBkLnNpemUsIF0gKSwgWyB7IGxvOiA3LCBoaTogNywgfSwgIDEsIF1cbiAgICBkID0gbmV3IFJ1biB7IGxvOiA3LCBoaTogNywgfTsgIEBlcSAoIM6paW10X19fNyA9IC0+IFsgeyBkLi4uLCB9LCBkLnNpemUsIF0gKSwgWyB7IGxvOiA3LCBoaTogNywgfSwgIDEsIF1cbiAgICBkID0gbmV3IFJ1biB7IGxvOiA3LCBoaTogMjEsIH07IEBlcSAoIM6paW10X19fOCA9IC0+IFsgeyBkLi4uLCB9LCBkLnNpemUsIF0gKSwgWyB7IGxvOiA3LCBoaTogMjEsIH0sIDE1LCBdXG4gICAgZCA9IG5ldyBSdW4geyBsbzogNywgaGk6IDIxLCB9OyBAdGhyb3dzICggzqlpbXRfX185ID0gLT4gZC5sbyA9IDYgICApLCAvY2Fubm90IGFzc2lnbiB0byByZWFkIG9ubHkgcHJvcGVydHkvaVxuICAgIGQgPSBuZXcgUnVuIHsgbG86IDcsIGhpOiAyMSwgfTsgQHRocm93cyAoIM6paW10X18xMCA9IC0+IGQuaGkgPSAyMiAgKSwgL2Nhbm5vdCBhc3NpZ24gdG8gcmVhZCBvbmx5IHByb3BlcnR5L2lcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAoIM6paW10X18xMSA9IC0+ICggbmV3IFJ1biAxLCAxICkuc2NhdHRlciApLCB1bmRlZmluZWRcbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYmFzaWNfc2NhdHRlcnM6IC0+XG4gICAgZG8gPT5cbiAgICAgIGggPSBuZXcgSG9hcmQoKVxuICAgICAgcyA9IGguYWRkX3NjYXR0ZXIgeyBhOiAxLCB9XG4gICAgICBAZXEgKCDOqWltdF9fMTIgPSAtPiB7IHMuLi4sIH0gKSwgeyBkYXRhOiB7IGE6IDEgfSwgcm93aWQ6ICd0OmhyZDpzY2F0dGVycyxSPTEnLCBydW5zOiBbXSB9XG4gICAgICBAZXEgKCDOqWltdF9fMTMgPSAtPiBzLmlzX25vcm1hbGl6ZWQgICApLCBmYWxzZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzLmFkZF9ydW4geyBsbzogMSwgaGk6IDEsIH07ICAgICAgICAgIEBlcSAoIM6paW10X18xNCA9IC0+IHMucnVucy5sZW5ndGggICAgICksIDFcbiAgICAgIHMuYWRkX3J1biAxOyAgICAgICAgICAgICAgICAgICAgICAgICAgQGVxICggzqlpbXRfXzE1ID0gLT4gcy5ydW5zLmxlbmd0aCAgICAgKSwgMlxuICAgICAgcy5hZGRfcnVuIHsgbG86IDEsIGhpOiAxLCB9OyAgICAgICAgICBAZXEgKCDOqWltdF9fMTYgPSAtPiBzLnJ1bnMubGVuZ3RoICAgICApLCAzXG4gICAgICAjIHMuYWRkX3J1biBuZXcgUnVuIHsgbG86IDEsIGhpOiAxLCB9OyAgQGVxICggzqlpbXRfXzE3ID0gLT4gcy5ydW5zLmxlbmd0aCAgICAgKSwgM1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWltdF9fMTggPSAtPiBzLmlzX25vcm1hbGl6ZWQgICApLCBmYWxzZVxuICAgICAgIyBAZXEgKCDOqWltdF9fMTkgPSAtPiBzLmlzX3NvcnRlZCAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzIwID0gLT4gcy5kYXRhICAgICAgICAgICAgKSwgeyBhOiAxLCB9XG4gICAgICBAZXEgKCDOqWltdF9fMjEgPSAtPiB7IHMucnVuc1sgMCBdLi4uLCB9ICksIHsgbG86IDEsIGhpOiAxLCB9XG4gICAgICBAZXEgKCDOqWltdF9fMjIgPSAtPiB7IHMucnVuc1sgMSBdLi4uLCB9ICksIHsgbG86IDEsIGhpOiAxLCB9XG4gICAgICBAZXEgKCDOqWltdF9fMjMgPSAtPiB7IHMucnVuc1sgMiBdLi4uLCB9ICksIHsgbG86IDEsIGhpOiAxLCB9XG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGggPSBuZXcgSG9hcmQoKVxuICAgICAgcyA9IGguYWRkX3NjYXR0ZXIoKVxuICAgICAgQGVxICggzqlpbXRfXzI0ID0gLT4gcy5pc19ub3JtYWxpemVkICksIGZhbHNlXG4gICAgICBzLmFkZF9ydW4gMTAzLCAxMDk7ICAgQGVxICggzqlpbXRfXzI1ID0gLT4gcy5ydW5zLmxlbmd0aCApLCAxOyBAZXEgKCDOqWltdF9fMjYgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgZmFsc2VcbiAgICAgIHMuYWRkX3J1biAxMTEsIDExNTsgICBAZXEgKCDOqWltdF9fMjcgPSAtPiBzLnJ1bnMubGVuZ3RoICksIDI7IEBlcSAoIM6paW10X18yOCA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCBmYWxzZVxuICAgICAgcy5hZGRfcnVuIDExMDsgICAgICAgIEBlcSAoIM6paW10X18yOSA9IC0+IHMucnVucy5sZW5ndGggKSwgMzsgQGVxICggzqlpbXRfXzMwID0gLT4gcy5pc19ub3JtYWxpemVkICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF9fMzEgPSAtPiB7IG1pbjogcy5taW4sIG1heDogcy5tYXgsIH0gKSwgeyBtaW46IDEwMywgbWF4OiAxMTUsIH1cbiAgICAgIEBlcSAoIM6paW10X18zMiA9IC0+IHMubWlubWF4ICAgICAgICAgICAgICAgICAgICApLCB7IG1pbjogMTAzLCBtYXg6IDExNSwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWltdF9fMzMgPSAtPiB7IHMucnVuc1sgMCBdLi4uLCB9ICksIHsgbG86IDEwMywgaGk6IDEwOSwgfVxuICAgICAgQGVxICggzqlpbXRfXzM0ID0gLT4geyBzLnJ1bnNbIDEgXS4uLiwgfSApLCB7IGxvOiAxMTEsIGhpOiAxMTUsIH1cbiAgICAgIEBlcSAoIM6paW10X18zNSA9IC0+IHsgcy5ydW5zWyAyIF0uLi4sIH0gKSwgeyBsbzogMTEwLCBoaTogMTEwLCB9XG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIF9vdmVybGFwcGluZzogLT5cbiAgICBkbyA9PlxuICAgICAgaCA9IG5ldyBIb2FyZCgpXG4gICAgICBzID0gaC5hZGRfc2NhdHRlcigpXG4gICAgICBzLmFkZF9ydW4gJ2EnLCAneSdcbiAgICAgIHMuYWRkX3J1biAnQScsICdZJ1xuICAgICAgZGVidWcgJ86paW10X18zNicsIGhcbiAgICAgIGRlYnVnICfOqWltdF9fMzcnLCBoLnNjYXR0ZXJzXG4gICAgICBAZXEgKCDOqWltdF9fMzggPSAtPiBzLmNvbnRhaW5zICdhJyAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzM5ID0gLT4gcy5jb250YWlucyB7IGxvOiAnYScsIH0gICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X180MCA9IC0+IHMuY29udGFpbnMgeyBsbzogJ2EnLCBoaTogJ3knLCB9ICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fNDEgPSAtPiBzLmNvbnRhaW5zIHsgbG86ICdhJywgaGk6ICd6JywgfSAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzQyID0gLT4gcy5jb250YWlucyAnMCcgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbnRhaW5tZW50OiAtPlxuICAgIGRvID0+XG4gICAgICBoID0gbmV3IEhvYXJkKClcbiAgICAgIHIgPSBuZXcgUnVuIHsgbG86IDI1LCBoaTogMzAsIH1cbiAgICAgIEBlcSAoIM6paW10X180MyA9IC0+IHIuY29udGFpbnMgMjEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10X180NCA9IC0+IHIuY29udGFpbnMgMjIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10X180NSA9IC0+IHIuY29udGFpbnMgMjMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10X180NiA9IC0+IHIuY29udGFpbnMgMjQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10X180NyA9IC0+IHIuY29udGFpbnMgMjUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzQ4ID0gLT4gci5jb250YWlucyAyNiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fNDkgPSAtPiByLmNvbnRhaW5zIDI3ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X181MCA9IC0+IHIuY29udGFpbnMgMjggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzUxID0gLT4gci5jb250YWlucyAyOSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fNTIgPSAtPiByLmNvbnRhaW5zIDMwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X181MyA9IC0+IHIuY29udGFpbnMgMzEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10X181NCA9IC0+IHIuY29udGFpbnMgNDEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10X181NSA9IC0+IHIuY29udGFpbnMgWyAyNSwgXSAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzU2ID0gLT4gci5jb250YWlucyBbIDMwLCBdICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fNTcgPSAtPiByLmNvbnRhaW5zIFsgMzEsIF0gICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF9fNTggPSAtPiByLmNvbnRhaW5zIFsgMzIsIF0gICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF9fNTkgPSAtPiByLmNvbnRhaW5zIFsgMjUgLi4gMzAgXSAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X182MCA9IC0+IHIuY29udGFpbnMgWyAyNSAuLiAzMSBdICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10X182MSA9IC0+IHIuY29udGFpbnMgKCAtPiB5aWVsZCBmcm9tIFsgMjUgLi4gMzAgXSApKCkgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzYyID0gLT4gci5jb250YWlucyAoIC0+IHlpZWxkIGZyb20gWyAyNSAuLiAzMSBdICkoKSApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzYzID0gLT4gci5jb250YWlucyAoIC0+IHlpZWxkIGZyb20gWyAyNSAuLiAzMiBdICkoKSApLCBmYWxzZVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoID0gbmV3IEhvYXJkKClcbiAgICAgIHMgPSBoLmFkZF9zY2F0dGVyKClcbiAgICAgIHMuYWRkX3J1biAyNSwgMzBcbiAgICAgIHMuYWRkX3J1biAzMiwgNDBcbiAgICAgIEBlcSAoIM6paW10X182NCA9IC0+IHMuY29udGFpbnMgMjEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10X182NSA9IC0+IHMuY29udGFpbnMgMjIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10X182NiA9IC0+IHMuY29udGFpbnMgMjMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10X182NyA9IC0+IHMuY29udGFpbnMgMjQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10X182OCA9IC0+IHMuY29udGFpbnMgMjUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzY5ID0gLT4gcy5jb250YWlucyAyNiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fNzAgPSAtPiBzLmNvbnRhaW5zIDI3ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X183MSA9IC0+IHMuY29udGFpbnMgMjggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzcyID0gLT4gcy5jb250YWlucyAyOSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fNzMgPSAtPiBzLmNvbnRhaW5zIDMwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X183NCA9IC0+IHMuY29udGFpbnMgMzEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10X183NSA9IC0+IHMuY29udGFpbnMgMzIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzc2ID0gLT4gcy5jb250YWlucyAzMyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fNzcgPSAtPiBzLmNvbnRhaW5zIDM0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X183OCA9IC0+IHMuY29udGFpbnMgMzUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzc5ID0gLT4gcy5jb250YWlucyAzNiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fODAgPSAtPiBzLmNvbnRhaW5zIDM3ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X184MSA9IC0+IHMuY29udGFpbnMgMzggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzgyID0gLT4gcy5jb250YWlucyAzOSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fODMgPSAtPiBzLmNvbnRhaW5zIDQwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X184NCA9IC0+IHMuY29udGFpbnMgNDEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10X184NSA9IC0+IHMuY29udGFpbnMgNDIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10X184NiA9IC0+IHMuY29udGFpbnMgNDMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10X184NyA9IC0+IFsgMjUgLi4gMzAgXS5ldmVyeSAoIG4gKSAtPiBzLmNvbnRhaW5zIG4gICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzg4ID0gLT4gWyAyNSAuLiAzMSBdLmV2ZXJ5ICggbiApIC0+IHMuY29udGFpbnMgbiAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzg5ID0gLT4gWyAzMCwgXS5ldmVyeSAoIG4gKSAtPiBzLmNvbnRhaW5zIG4gICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fOTAgPSAtPiBbIDMxLCBdLmV2ZXJ5ICggbiApIC0+IHMuY29udGFpbnMgbiAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF9fOTEgPSAtPiBbIDMyLCBdLmV2ZXJ5ICggbiApIC0+IHMuY29udGFpbnMgbiAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X185MiA9IC0+ICggKCAtPiB5aWVsZCBmcm9tIFsgMjUgLi4gMzAgXSApKCkgKS5ldmVyeSAoIG4gKSAtPiBzLmNvbnRhaW5zIG4gKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzkzID0gLT4gKCAoIC0+IHlpZWxkIGZyb20gWyAyNSAuLiAzMSBdICkoKSApLmV2ZXJ5ICggbiApIC0+IHMuY29udGFpbnMgbiApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzk0ID0gLT4gKCAoIC0+IHlpZWxkIGZyb20gWyAyNSAuLiAzMiBdICkoKSApLmV2ZXJ5ICggbiApIC0+IHMuY29udGFpbnMgbiApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzk1ID0gLT4gKCBbICggbmV3IFJ1biAyNSAgICAgICkuLi4sIF0gKS5ldmVyeSAoIG4gKSAtPiBzLmNvbnRhaW5zIG4gKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzk2ID0gLT4gKCBbICggbmV3IFJ1biAyNSwgMzAgICkuLi4sIF0gKS5ldmVyeSAoIG4gKSAtPiBzLmNvbnRhaW5zIG4gKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzk3ID0gLT4gKCBbICggbmV3IFJ1biAyNSwgMzIgICkuLi4sIF0gKS5ldmVyeSAoIG4gKSAtPiBzLmNvbnRhaW5zIG4gKSwgZmFsc2VcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlpbXRfXzk4ID0gLT4gaC5jb250YWlucyAyMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzk5ID0gLT4gaC5jb250YWlucyAyMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTAwID0gLT4gaC5jb250YWlucyAyMyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTAxID0gLT4gaC5jb250YWlucyAyNCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTAyID0gLT4gaC5jb250YWlucyAyNSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMDMgPSAtPiBoLmNvbnRhaW5zIDI2ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzEwNCA9IC0+IGguY29udGFpbnMgMjcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTA1ID0gLT4gaC5jb250YWlucyAyOCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMDYgPSAtPiBoLmNvbnRhaW5zIDI5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzEwNyA9IC0+IGguY29udGFpbnMgMzAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTA4ID0gLT4gaC5jb250YWlucyAzMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTA5ID0gLT4gaC5jb250YWlucyAzMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMTAgPSAtPiBoLmNvbnRhaW5zIDMzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzExMSA9IC0+IGguY29udGFpbnMgMzQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTEyID0gLT4gaC5jb250YWlucyAzNSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMTMgPSAtPiBoLmNvbnRhaW5zIDM2ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzExNCA9IC0+IGguY29udGFpbnMgMzcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTE1ID0gLT4gaC5jb250YWlucyAzOCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMTYgPSAtPiBoLmNvbnRhaW5zIDM5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzExNyA9IC0+IGguY29udGFpbnMgNDAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTE4ID0gLT4gaC5jb250YWlucyA0MSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTE5ID0gLT4gaC5jb250YWlucyA0MiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTIwID0gLT4gaC5jb250YWlucyA0MyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTIxID0gLT4gWyAyNSAuLiAzMCBdLmV2ZXJ5ICggbiApIC0+IGguY29udGFpbnMgbiAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMjIgPSAtPiBbIDI1IC4uIDMxIF0uZXZlcnkgKCBuICkgLT4gaC5jb250YWlucyBuICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8xMjMgPSAtPiBbIDMwLCBdLmV2ZXJ5ICggbiApIC0+IGguY29udGFpbnMgbiAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzEyNCA9IC0+IFsgMzEsIF0uZXZlcnkgKCBuICkgLT4gaC5jb250YWlucyBuICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10XzEyNSA9IC0+IFsgMzIsIF0uZXZlcnkgKCBuICkgLT4gaC5jb250YWlucyBuICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTI2ID0gLT4gKCAoIC0+IHlpZWxkIGZyb20gWyAyNSAuLiAzMCBdICkoKSApLmV2ZXJ5ICggbiApIC0+IGguY29udGFpbnMgbiApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMjcgPSAtPiAoICggLT4geWllbGQgZnJvbSBbIDI1IC4uIDMxIF0gKSgpICkuZXZlcnkgKCBuICkgLT4gaC5jb250YWlucyBuICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8xMjggPSAtPiAoICggLT4geWllbGQgZnJvbSBbIDI1IC4uIDMyIF0gKSgpICkuZXZlcnkgKCBuICkgLT4gaC5jb250YWlucyBuICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8xMjkgPSAtPiAoIFsgKCBuZXcgUnVuIDI1ICAgICAgKS4uLiwgXSApLmV2ZXJ5ICggbiApIC0+IGguY29udGFpbnMgbiApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMzAgPSAtPiAoIFsgKCBuZXcgUnVuIDI1LCAzMCAgKS4uLiwgXSApLmV2ZXJ5ICggbiApIC0+IGguY29udGFpbnMgbiApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMzEgPSAtPiAoIFsgKCBuZXcgUnVuIDI1LCAzMiAgKS4uLiwgXSApLmV2ZXJ5ICggbiApIC0+IGguY29udGFpbnMgbiApLCBmYWxzZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIHMxID0gaC5hZGRfc2NhdHRlcigpXG4gICAgICAjIHMxLmFkZF9ydW4gMjYsIDI3XG4gICAgICAjIHMxLmFkZF9ydW4gMzcsIDQwXG4gICAgICAjIEBlcSAoIM6paW10XzEzMiA9IC0+IHMxLmlzX25vcm1hbGl6ZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgICMgQGVxICggzqlpbXRfMTMzID0gLT4gcy5jb250YWlucyBzMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICAjIEBlcSAoIM6paW10XzEzNCA9IC0+IHMxLmlzX25vcm1hbGl6ZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgIyBzMS5hZGRfcnVuIDI1LCAzMlxuICAgICAgIyBAZXEgKCDOqWltdF8xMzUgPSAtPiBzLmNvbnRhaW5zIHMxICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICAjIEBlcSAoIM6paW10XzEzNiA9IC0+IHMuaXNfbm9ybWFsaXplZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgIyBzLmFkZF9ydW4gMzFcbiAgICAgICMgQGVxICggzqlpbXRfMTM3ID0gLT4gcy5pc19ub3JtYWxpemVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgIyBAZXEgKCDOqWltdF8xMzggPSAtPiBzLmNvbnRhaW5zIHMxICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgICMgQGVxICggzqlpbXRfMTM5ID0gLT4gcy5pc19ub3JtYWxpemVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGl0ZXJhdGlvbjogLT5cbiAgICBkbyA9PlxuICAgICAgaCA9IG5ldyBIb2FyZCgpXG4gICAgICBAZXEgKCDOqWltdF8xNDAgPSAtPiBbICggbmV3IFJ1biAxICAgICAgICAgKS4uLiwgXSAgICAgICApLCBbIDEsIF1cbiAgICAgIEBlcSAoIM6paW10XzE0MSA9IC0+IFsgKCBuZXcgUnVuIDI5NyAgICAgICApLi4uLCBdICAgICAgICksIFsgMjk3LCBdXG4gICAgICBAZXEgKCDOqWltdF8xNDIgPSAtPiBbICggbmV3IFJ1biAyOTcsIDMwOCAgKS4uLiwgXSAgICAgICApLCBbIDI5NywgMjk4LCAyOTksIDMwMCwgMzAxLCAzMDIsIDMwMywgMzA0LCAzMDUsIDMwNiwgMzA3LCAzMDggXVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoID0gbmV3IEhvYXJkKClcbiAgICAgIHMgPSBoLmFkZF9zY2F0dGVyKClcbiAgICAgIEBlcSAoIM6paW10XzE0MyA9IC0+IFsgcy4uLiwgXSAgICAgICApLCBbXVxuICAgICAgcy5hZGRfcnVuIDE7ICAgICAgICBAZXEgKCDOqWltdF8xNDQgPSAtPiBbIHMuLi4sIF0gKSwgWyAxLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdOyBAZXEgKCDOqWltdF8xNDUgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGRfcnVuIDI5NzsgICAgICBAZXEgKCDOqWltdF8xNDYgPSAtPiBbIHMuLi4sIF0gKSwgWyAxLCAyOTcsICAgICAgICAgICAgICAgICAgICAgICAgICBdOyBAZXEgKCDOqWltdF8xNDcgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGRfcnVuIDI5OSwgMzAyOyBAZXEgKCDOqWltdF8xNDggPSAtPiBbIHMuLi4sIF0gKSwgWyAxLCAyOTcsICAgICAgMjk5LCAzMDAsIDMwMSwgMzAyLCBdOyBAZXEgKCDOqWltdF8xNDkgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGRfcnVuIDI5ODsgICAgICBAZXEgKCDOqWltdF8xNTAgPSAtPiBbIHMuLi4sIF0gKSwgWyAxLCAyOTcsIDI5OCwgMjk5LCAzMDAsIDMwMSwgMzAyLCBdOyBAZXEgKCDOqWltdF8xNTEgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGRfcnVuIDMwMCwgMzAxOyBAZXEgKCDOqWltdF8xNTIgPSAtPiBbIHMuLi4sIF0gKSwgWyAxLCAyOTcsIDI5OCwgMjk5LCAzMDAsIDMwMSwgMzAyLCBdOyBAZXEgKCDOqWltdF8xNTMgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTU0ID0gLT4gcy5ydW5zLmxlbmd0aCAgICAgICApLCAyXG4gICAgICBAZXEgKCDOqWltdF8xNTUgPSAtPiB7IHMucnVuc1sgMCBdLi4uLCB9ICksIHsgbG86IDEsIGhpOiAxLCByb3dpZDogJ3Q6aHJkOnJ1bnMsUj05Jywgc2NhdHRlcjogJ3Q6aHJkOnNjYXR0ZXJzLFI9MScgfVxuICAgICAgQGVxICggzqlpbXRfMTU2ID0gLT4geyBzLnJ1bnNbIDEgXS4uLiwgfSApLCB7IGxvOiAyOTcsIGhpOiAzMDIsIHJvd2lkOiAndDpocmQ6cnVucyxSPTEwJywgc2NhdHRlcjogJ3Q6aHJkOnNjYXR0ZXJzLFI9MScgfVxuICAgICAgQGVxICggzqlpbXRfMTU3ID0gLT4gcy5wb2ludHMgICAgICAgICAgICApLCBbIDEsIDI5NywgMjk4LCAyOTksIDMwMCwgMzAxLCAzMDIgXVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoID0gbmV3IEhvYXJkKClcbiAgICAgIHMgPSBoLmFkZF9zY2F0dGVyKClcbiAgICAgIEBlcSAoIM6paW10XzE1OCA9IC0+IFsgcy53YWxrKCkuLi4sIF0gICAgICAgKSwgW11cbiAgICAgIHMuYWRkX3J1biAxOyAgICAgICAgQGVxICggzqlpbXRfMTU5ID0gLT4gWyBzLndhbGsoKS4uLiwgXSApLCBbIDEsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07IEBlcSAoIM6paW10XzE2MCA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZF9ydW4gMjk3OyAgICAgIEBlcSAoIM6paW10XzE2MSA9IC0+IFsgcy53YWxrKCkuLi4sIF0gKSwgWyAxLCAyOTcsICAgICAgICAgICAgICAgICAgICAgICAgICBdOyBAZXEgKCDOqWltdF8xNjIgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGRfcnVuIDI5OSwgMzAyOyBAZXEgKCDOqWltdF8xNjMgPSAtPiBbIHMud2FsaygpLi4uLCBdICksIFsgMSwgMjk3LCAgICAgIDI5OSwgMzAwLCAzMDEsIDMwMiwgXTsgQGVxICggzqlpbXRfMTY0ID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIHMuYWRkX3J1biAyOTg7ICAgICAgQGVxICggzqlpbXRfMTY1ID0gLT4gWyBzLndhbGsoKS4uLiwgXSApLCBbIDEsIDI5NywgMjk4LCAyOTksIDMwMCwgMzAxLCAzMDIsIF07IEBlcSAoIM6paW10XzE2NiA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZF9ydW4gMzAwLCAzMDE7IEBlcSAoIM6paW10XzE2NyA9IC0+IFsgcy53YWxrKCkuLi4sIF0gKSwgWyAxLCAyOTcsIDI5OCwgMjk5LCAzMDAsIDMwMSwgMzAyLCBdOyBAZXEgKCDOqWltdF8xNjggPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTY5ID0gLT4gcy5ydW5zLmxlbmd0aCAgICAgICApLCAyXG4gICAgICBAZXEgKCDOqWltdF8xNzAgPSAtPiB7IHMucnVuc1sgMCBdLi4uLCB9ICksIHsgbG86IDEsIGhpOiAxLCByb3dpZDogJ3Q6aHJkOnJ1bnMsUj05Jywgc2NhdHRlcjogJ3Q6aHJkOnNjYXR0ZXJzLFI9MScgfVxuICAgICAgQGVxICggzqlpbXRfMTcxID0gLT4geyBzLnJ1bnNbIDEgXS4uLiwgfSApLCB7IGxvOiAyOTcsIGhpOiAzMDIsIHJvd2lkOiAndDpocmQ6cnVucyxSPTEwJywgc2NhdHRlcjogJ3Q6aHJkOnNjYXR0ZXJzLFI9MScgfVxuICAgICAgQGVxICggzqlpbXRfMTcyID0gLT4gcy5wb2ludHMgICAgICAgICAgICApLCBbIDEsIDI5NywgMjk4LCAyOTksIDMwMCwgMzAxLCAzMDIgXVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoID0gbmV3IEhvYXJkKClcbiAgICAgIHMgPSBoLmFkZF9zY2F0dGVyKClcbiAgICAgIEBlcSAoIM6paW10XzE3MyA9IC0+IHMucG9pbnRzICksIFtdXG4gICAgICBzLmFkZF9ydW4gMTsgICAgICAgIEBlcSAoIM6paW10XzE3NCA9IC0+IHMucG9pbnRzICksIFsgMSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTsgQGVxICggzqlpbXRfMTc1ID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIHMuYWRkX3J1biAyOTc7ICAgICAgQGVxICggzqlpbXRfMTc2ID0gLT4gcy5wb2ludHMgKSwgWyAxLCAyOTcsICAgICAgICAgICAgICAgICAgICAgICAgICBdOyBAZXEgKCDOqWltdF8xNzcgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGRfcnVuIDI5OSwgMzAyOyBAZXEgKCDOqWltdF8xNzggPSAtPiBzLnBvaW50cyApLCBbIDEsIDI5NywgICAgICAyOTksIDMwMCwgMzAxLCAzMDIsIF07IEBlcSAoIM6paW10XzE3OSA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZF9ydW4gMjk4OyAgICAgIEBlcSAoIM6paW10XzE4MCA9IC0+IHMucG9pbnRzICksIFsgMSwgMjk3LCAyOTgsIDI5OSwgMzAwLCAzMDEsIDMwMiwgXTsgQGVxICggzqlpbXRfMTgxID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIHMuYWRkX3J1biAzMDAsIDMwMTsgQGVxICggzqlpbXRfMTgyID0gLT4gcy5wb2ludHMgKSwgWyAxLCAyOTcsIDI5OCwgMjk5LCAzMDAsIDMwMSwgMzAyLCBdOyBAZXEgKCDOqWltdF8xODMgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTg0ID0gLT4gcy5ydW5zLmxlbmd0aCAgICAgICApLCAyXG4gICAgICBAZXEgKCDOqWltdF8xODUgPSAtPiB7IHMucnVuc1sgMCBdLi4uLCB9ICksIHsgbG86IDEsIGhpOiAxLCByb3dpZDogJ3Q6aHJkOnJ1bnMsUj05Jywgc2NhdHRlcjogJ3Q6aHJkOnNjYXR0ZXJzLFI9MScgfVxuICAgICAgQGVxICggzqlpbXRfMTg2ID0gLT4geyBzLnJ1bnNbIDEgXS4uLiwgfSApLCB7IGxvOiAyOTcsIGhpOiAzMDIsIHJvd2lkOiAndDpocmQ6cnVucyxSPTEwJywgc2NhdHRlcjogJ3Q6aHJkOnNjYXR0ZXJzLFI9MScgfVxuICAgICAgQGVxICggzqlpbXRfMTg3ID0gLT4gcy5wb2ludHMgICAgICAgICAgICApLCBbIDEsIDI5NywgMjk4LCAyOTksIDMwMCwgMzAxLCAzMDIgXVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1c2luZ19zdHJpbmdzX2Zvcl9ib3VuZHM6IC0+XG4gICAgZG8gPT5cbiAgICAgIGggPSBuZXcgSG9hcmQoKVxuICAgICAgcyA9IGguYWRkX3NjYXR0ZXIoKVxuICAgICAgQHRocm93cyAoIM6paW10XzE4OCA9IC0+IHMuYWRkX3J1biA1LjggICAgICAgICApLCAvbm90IGEgdmFsaWQgcG9pbnQvXG4gICAgICAjIEB0aHJvd3MgKCDOqWltdF8xODkgPSAtPiBzLmFkZF9ydW4gLTMgICAgICAgICAgKSwgLy0weDMgaXMgbm90IGJldHdlZW4gXFwrMHgwIGFuZCBcXCsweDEwZmZmZi9cbiAgICAgIEB0aHJvd3MgKCDOqWltdF8xOTAgPSAtPiBzLmFkZF9ydW4gMCwgLTMgICAgICAgKSwgL2xvIG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGhpL1xuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoID0gbmV3IEhvYXJkIHsgZmlyc3Q6IC0xMCwgbGFzdDogKzEwLCB9XG4gICAgICBzID0gaC5hZGRfc2NhdHRlcigpXG4gICAgICBzLmFkZF9ydW4gLTEwOyBAZXEgKCDOqWltdF8xOTEgPSAtPiBzLnBvaW50cyAgICksIFsgLTEwLCBdXG4gICAgICBzLmFkZF9ydW4gKzEwOyBAZXEgKCDOqWltdF8xOTIgPSAtPiBzLnBvaW50cyAgICksIFsgLTEwLCArMTAsIF1cbiAgICAgIEB0aHJvd3MgKCDOqWltdF8xOTMgPSAtPiBzLmFkZF9ydW4gLTExICAgICAgICAgKSwgL2V4cGVjdGVkIHJ1biB0byBiZSBlbnRpcmVseSBiZXR3ZWVuIC0weGEgYW5kIFxcKzB4YSwgZ290IFxceyBsbzogLTB4YiwgLTB4YiwgXFx9L1xuICAgICAgQHRocm93cyAoIM6paW10XzE5NCA9IC0+IHMuYWRkX3J1biArMTEgICAgICAgICApLCAvZXhwZWN0ZWQgcnVuIHRvIGJlIGVudGlyZWx5IGJldHdlZW4gLTB4YSBhbmQgXFwrMHhhLCBnb3QgXFx7IGxvOiBcXCsweGIsIFxcKzB4YiwgXFx9L1xuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoID0gbmV3IEhvYXJkKClcbiAgICAgIHMgPSBoLmFkZF9zY2F0dGVyKClcbiAgICAgIHMuYWRkX3J1biAoIGNpZF9vZiAnQScgKTsgICAgICAgICAgICAgICAgIEBlcSAoIM6paW10XzE5NSA9IC0+IHMucG9pbnRzICAgKSwgWyAoICdBJy5jb2RlUG9pbnRBdCAwICksIF1cbiAgICAgIHMuYWRkX3J1biAoIGNpZF9vZiAnQScgKSwgKCBjaWRfb2YgJ1onICk7IEBlcSAoIM6paW10XzE5NiA9IC0+IHMucG9pbnRzICAgKSwgWyA2NSwgNjYsIDY3LCA2OCwgNjksIDcwLCA3MSwgNzIsIDczLCA3NCwgNzUsIDc2LCA3NywgNzgsIDc5LCA4MCwgODEsIDgyLCA4MywgODQsIDg1LCA4NiwgODcsIDg4LCA4OSwgOTAgXVxuICAgICAgcy5hZGRfcnVuICggY2lkX29mICdhJyApLCAoIGNpZF9vZiAneicgKTsgQGVxICggzqlpbXRfMTk3ID0gLT4gcy5wb2ludHMgICApLCBbIDY1LCA2NiwgNjcsIDY4LCA2OSwgNzAsIDcxLCA3MiwgNzMsIDc0LCA3NSwgNzYsIDc3LCA3OCwgNzksIDgwLCA4MSwgODIsIDgzLCA4NCwgODUsIDg2LCA4NywgODgsIDg5LCA5MCwgOTcsIDk4LCA5OSwgXFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAsIDEwMSwgMTAyLCAxMDMsIDEwNCwgMTA1LCAxMDYsIDEwNywgMTA4LCAxMDksIDExMCwgMTExLCAxMTIsIDExMywgMTE0LCAxMTUsIDExNiwgMTE3LCAxMTgsIDExOSwgMTIwLCAxMjEsIDEyMiwgXVxuICAgICAgQGVxICggzqlpbXRfMTk4ID0gLT4gcy5taW4gICksICggJ0EnLmNvZGVQb2ludEF0IDAgKVxuICAgICAgQGVxICggzqlpbXRfMTk5ID0gLT4gcy5tYXggICksICggJ3onLmNvZGVQb2ludEF0IDAgKVxuICAgICAgQGVxICggzqlpbXRfMjAwID0gLT4geyBtaW46IHMubWluLCBtYXg6IHMubWF4LCB9ICApLCBzLm1pbm1heFxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoID0gbmV3IEhvYXJkKClcbiAgICAgIHMgPSBoLmFkZF9zY2F0dGVyKClcbiAgICAgIHMgPSBoLmFkZF9zY2F0dGVyKClcbiAgICAgIHMgPSBoLmFkZF9zY2F0dGVyKClcbiAgICAgIHMuYWRkX2NvZGVwb2ludHNfb2YgJ0FiYydcbiAgICAgIEBlcSAoIM6paW10XzIwMSA9IC0+IHMucnVucy5sZW5ndGggKSwgM1xuICAgICAgQGVxICggzqlpbXRfMjAyID0gLT4gcy5wb2ludHMgKSwgWyAoICdBJy5jb2RlUG9pbnRBdCAwICksICggJ2InLmNvZGVQb2ludEF0IDAgKSwgKCAnYycuY29kZVBvaW50QXQgMCApLCBdXG4gICAgICBAZXEgKCDOqWltdF8yMDMgPSAtPiBzLnJ1bnMubGVuZ3RoICksIDJcbiAgICAgIEBlcSAoIM6paW10XzIwNCA9IC0+IHsgcy5ydW5zWyAwIF0uLi4sIH0gKSwgeyBsbzogKCAnQScuY29kZVBvaW50QXQgMCApLCBoaTogKCAnQScuY29kZVBvaW50QXQgMCApLCByb3dpZDogJ3Q6aHJkOnJ1bnMsUj0xJywgc2NhdHRlcjogJ3Q6aHJkOnNjYXR0ZXJzLFI9MycsIH1cbiAgICAgIEBlcSAoIM6paW10XzIwNSA9IC0+IHsgcy5ydW5zWyAxIF0uLi4sIH0gKSwgeyBsbzogKCAnYicuY29kZVBvaW50QXQgMCApLCBoaTogKCAnYycuY29kZVBvaW50QXQgMCApLCByb3dpZDogJ3Q6aHJkOnJ1bnMsUj0yJywgc2NhdHRlcjogJ3Q6aHJkOnNjYXR0ZXJzLFI9MycsIH1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgaCA9IG5ldyBIb2FyZCgpXG4gICAgICBzID0gaC5hZGRfc2NhdHRlcigpXG4gICAgICBzLmFkZF9jb2RlcG9pbnRzX29mICdhZWlvdcOkw7bDvCcsICdhZWlvdcOkw7bDvCcsICdBRUlPVcOEw5bDnCcsICdBRUlPVcOEw5bDnCdcbiAgICAgIEBlcSAoIM6paW10XzIwNiA9IC0+ICggKCBTdHJpbmcuZnJvbUNvZGVQb2ludCBjaWQgKSBmb3IgY2lkIGluIHMucG9pbnRzICkuam9pbiAnJyApLCAnQUVJT1VhZWlvdcOEw5bDnMOkw7bDvCdcbiAgICAgIEBlcSAoIM6paW10XzIwNyA9IC0+IHMucnVucy5sZW5ndGggKSwgMTZcbiAgICAgIHMubm9ybWFsaXplKClcbiAgICAgIEBlcSAoIM6paW10XzIwOCA9IC0+IHMucnVucy5sZW5ndGggKSwgMTZcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGF0YV9yZXRyaWV2YWw6IC0+XG4gICAgZG8gPT5cbiAgICAgIGggPSBuZXcgSG9hcmQoKVxuICAgICAgc192b3dlbHMgPSBoLmFkZF9zY2F0dGVyIHsgdGFnczogWyAndm93ZWwnLCBdLCBpc19hc2NpaTogdHJ1ZSwgfVxuICAgICAgc191bWxhdXQgPSBoLmFkZF9zY2F0dGVyIHsgdGFnczogWyAndW1sYXV0JywgXSwgfVxuICAgICAgc192b3dlbHMuYWRkX2NvZGVwb2ludHNfb2YgJ2FlaW91w6TDtsO8JywgJ2FlaW91w6TDtsO8JywgJ0FFSU9Vw4TDlsOcJywgJ0FFSU9Vw4TDlsOcJ1xuICAgICAgc191bWxhdXQuYWRkX2NvZGVwb2ludHNfb2YgJ8Okw7bDvCcsICfDpMO2w7wnLCAnw4TDlsOcJ1xuICAgICAgQGVxICggzqlpbXRfMjA5ID0gLT4gc192b3dlbHMuY29udGFpbnMgICAgICAgICAgICggY2lkX29mICdBJyApICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8yMTAgPSAtPiBzX3Zvd2Vscy5jb250YWlucyAgICAgICAgICAgKCBjaWRfb2YgJ0InICkgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8yMTEgPSAtPiBoLnN1bW1hcml6ZV9kYXRhX2Zvcl9wb2ludCAgKCBjaWRfb2YgJ0EnICkgICksIHsgaXNfYXNjaWk6IFsgdHJ1ZSwgXSwgdGFnczogWyAndm93ZWwnLCBdLCB9XG4gICAgICBAZXEgKCDOqWltdF8yMTIgPSAtPiBoLnN1bW1hcml6ZV9kYXRhX2Zvcl9wb2ludCAgKCBjaWRfb2YgJ8OkJyApICApLCB7IGlzX2FzY2lpOiBbIHRydWUsIF0sIHRhZ3M6IFsgJ3VtbGF1dCcsICd2b3dlbCcsIF0sIH1cbiAgICAgIEBlcSAoIM6paW10XzIxMyA9IC0+IGguc3VtbWFyaXplX2RhdGFfZm9yX3BvaW50ICAoIGNpZF9vZiAnQicgKSAgKSwgbnVsbFxuICAgICAgQGVxICggzqlpbXRfMjE0ID0gLT4gaC5zdW1tYXJpemVfZGF0YV9mb3JfcG9pbnQgICggY2lkX29mICd5JyApICApLCBudWxsXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGNsYXNzIFZ1X2hvYXJkIGV4dGVuZHMgSG9hcmRcbiAgICAgICAgc3VtbWFyaXplX2RhdGFfaXNfYXNjaWk6IHN1bW1hcml6ZV9kYXRhLmFzX2Jvb2xlYW5fYW5kXG4gICAgICBoID0gbmV3IFZ1X2hvYXJkKClcbiAgICAgIHNfYXNjaWkgICA9IGguYWRkX3NjYXR0ZXIgeyBpc19hc2NpaTogdHJ1ZSwgfVxuICAgICAgc192b3dlbHMgID0gaC5hZGRfc2NhdHRlciB7IHRhZ3M6IFsgJ3Zvd2VsJywgXSwgfVxuICAgICAgc191bWxhdXQgID0gaC5hZGRfc2NhdHRlciB7IHRhZ3M6IFsgJ3VtbGF1dCcsIF0sIH1cbiAgICAgIHNfYXNjaWkuYWRkX3J1biAoIGNpZF9vZiAnYScgKSwgKCBjaWRfb2YgJ3onIClcbiAgICAgIHNfYXNjaWkuYWRkX3J1biAoIGNpZF9vZiAnQScgKSwgKCBjaWRfb2YgJ1onIClcbiAgICAgIHNfdm93ZWxzLmFkZF9jb2RlcG9pbnRzX29mICdhZWlvdcOkw7bDvCcsICdhZWlvdcOkw7bDvCcsICdBRUlPVcOEw5bDnCcsICdBRUlPVcOEw5bDnCdcbiAgICAgIHNfdW1sYXV0LmFkZF9jb2RlcG9pbnRzX29mICfDpMO2w7wnLCAnw6TDtsO8JywgJ8OEw5bDnCdcbiAgICAgIEBlcSAoIM6paW10XzIxNSA9IC0+IHNfYXNjaWkuY29udGFpbnMgICAgICAgICAgICggY2lkX29mICdBJyApICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzIxNiA9IC0+IHNfYXNjaWkuY29udGFpbnMgICAgICAgICAgICggY2lkX29mICdRJyApICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzIxNyA9IC0+IHNfYXNjaWkuY29udGFpbnMgICAgICAgICAgICggY2lkX29mICdmJyApICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzIxOCA9IC0+IHNfdm93ZWxzLmNvbnRhaW5zICAgICAgICAgICggY2lkX29mICdBJyApICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzIxOSA9IC0+IHNfdm93ZWxzLmNvbnRhaW5zICAgICAgICAgICggY2lkX29mICdCJyApICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8yMjAgPSAtPiBoLmdldF9kYXRhX2Zvcl9wb2ludCAgICAgICAoIGNpZF9vZiAnQScgKSApLCBbIHsgaXNfYXNjaWk6IHRydWUgfSwgeyB0YWdzOiBbICd2b3dlbCcgXSB9IF1cbiAgICAgIEBlcSAoIM6paW10XzIyMSA9IC0+IGguZ2V0X2RhdGFfZm9yX3BvaW50ICAgICAgICggY2lkX29mICdRJyApICksIFsgeyBpc19hc2NpaTogdHJ1ZSB9LCBdXG4gICAgICBAZXEgKCDOqWltdF8yMjIgPSAtPiBoLmdldF9kYXRhX2Zvcl9wb2ludCAgICAgICAoIGNpZF9vZiAnZicgKSApLCBbIHsgaXNfYXNjaWk6IHRydWUgfSwgXVxuICAgICAgQGVxICggzqlpbXRfMjIzID0gLT4gaC5nZXRfZGF0YV9mb3JfcG9pbnQgICAgICAgKCBjaWRfb2YgJ0InICkgKSwgWyB7IGlzX2FzY2lpOiB0cnVlIH0sIF1cbiAgICAgIEBlcSAoIM6paW10XzIyNCA9IC0+IGguZ2V0X2RhdGFfZm9yX3BvaW50ICAgICAgICggY2lkX29mICfDpCcgKSApLCBbIHsgdGFnczogWyAndm93ZWwnLCBdLCB9LCB7IHRhZ3M6IFsgJ3VtbGF1dCcsIF0sIH0sIF1cbiAgICAgIEBlcSAoIM6paW10XzIyNSA9IC0+IGguc3VtbWFyaXplX2RhdGFfZm9yX3BvaW50ICggY2lkX29mICdBJyApICksIHsgaXNfYXNjaWk6IHRydWUsIHRhZ3M6IFsgJ3Zvd2VsJyBdLCB9XG4gICAgICBAZXEgKCDOqWltdF8yMjYgPSAtPiBoLnN1bW1hcml6ZV9kYXRhX2Zvcl9wb2ludCAoIGNpZF9vZiAnUScgKSApLCB7IGlzX2FzY2lpOiB0cnVlLCB9XG4gICAgICBAZXEgKCDOqWltdF8yMjcgPSAtPiBoLnN1bW1hcml6ZV9kYXRhX2Zvcl9wb2ludCAoIGNpZF9vZiAnZicgKSApLCB7IGlzX2FzY2lpOiB0cnVlLCB9XG4gICAgICBAZXEgKCDOqWltdF8yMjggPSAtPiBoLnN1bW1hcml6ZV9kYXRhX2Zvcl9wb2ludCAoIGNpZF9vZiAnQicgKSApLCB7IGlzX2FzY2lpOiB0cnVlLCB9XG4gICAgICBAZXEgKCDOqWltdF8yMjkgPSAtPiBoLnN1bW1hcml6ZV9kYXRhX2Zvcl9wb2ludCAoIGNpZF9vZiAnw6QnICkgKSwgeyB0YWdzOiBbICd1bWxhdXQnLCAndm93ZWwnLCBdLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNfbm90X2FzY2lpID0gaC5hZGRfc2NhdHRlciB7IGlzX2FzY2lpOiBmYWxzZSwgfVxuICAgICAgc19ub3RfYXNjaWkuYWRkX3J1biAweDgwLCAweDEwZmZmZlxuICAgICAgQGVxICggzqlpbXRfMjMwID0gLT4gaC5zdW1tYXJpemVfZGF0YV9mb3JfcG9pbnQgICAgICAoIGNpZF9vZiAnQicgKSApLCB7IGlzX2FzY2lpOiB0cnVlLCB9XG4gICAgICBAZXEgKCDOqWltdF8yMzEgPSAtPiBoLnN1bW1hcml6ZV9kYXRhX2Zvcl9wb2ludCAgICAgICggY2lkX29mICfDpCcgKSApLCB7IGlzX2FzY2lpOiBmYWxzZSwgdGFnczogWyAndW1sYXV0JywgJ3Zvd2VsJywgXSwgfVxuICAgICAgQHRocm93cyAoIM6paW10XzIzMiA9IC0+IGguc3VtbWFyaXplX2RhdGFfZm9yX3BvaW50ICAnw6R3aGF0JyAgICAgICAgKSwgL25vdCBhIHZhbGlkIHBvaW50L1xuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB2YWxpZGF0aW9uOiAtPlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqlpbXRfMjM1ID0gLT4gaW50ZXJuYWxzLnR5cGVzcGFjZS5pbnRlZ2VyLmlzYSAgICAgICAgICAgNSAgICAgICAgICksIHRydWVcbiAgICBAZXEgKCDOqWltdF8yMzYgPSAtPiBpbnRlcm5hbHMudHlwZXNwYWNlLnBvaW50LmlzYSAgICAgICAgICAgICA1ICAgICAgICAgKSwgdHJ1ZVxuICAgIEBlcSAoIM6paW10XzIzNyA9IC0+IGludGVybmFscy50eXBlc3BhY2UucG9pbnQuaXNhICAgICAgICAgICAgICdhJyAgICAgICApLCBmYWxzZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqlpbXRfMjM4ID0gLT4gaW50ZXJuYWxzLnR5cGVzcGFjZS5pbnRlZ2VyLmlzYSAgICAgICAgICAgNTUuNSAgICAgICksIGZhbHNlXG4gICAgQGVxICggzqlpbXRfMjM5ID0gLT4gaW50ZXJuYWxzLnR5cGVzcGFjZS5wb2ludC5pc2EgICAgICAgICAgICAgNTUuNSAgICAgICksIGZhbHNlXG4gICAgQGVxICggzqlpbXRfMjQwID0gLT4gaW50ZXJuYWxzLnR5cGVzcGFjZS5wb2ludC5pc2EgICAgICAgICAgICAgJ2FiYycgICAgICksIGZhbHNlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgKCDOqWltdF8yNDEgPSAtPiBpbnRlcm5hbHMudHlwZXNwYWNlLmludGVnZXIudmFsaWRhdGUgICAgICA1ICAgICAgICAgKSwgNVxuICAgIEBlcSAoIM6paW10XzI0MiA9IC0+IGludGVybmFscy50eXBlc3BhY2UucG9pbnQudmFsaWRhdGUgICAgICAgIDUgICAgICAgICApLCA1XG4gICAgQHRocm93cyAoIM6paW10XzI0MyA9IC0+IGludGVybmFscy50eXBlc3BhY2UucG9pbnQudmFsaWRhdGUgICAgICAgICdhJyAgICAgICApLCAvbm90IGEgdmFsaWQgcG9pbnQvXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAdGhyb3dzICggzqlpbXRfMjQ0ID0gLT4gaW50ZXJuYWxzLnR5cGVzcGFjZS5pbnRlZ2VyLnZhbGlkYXRlICA1NS41ICAgICAgKSwgL25vdCBhIHZhbGlkIGludGVnZXIvXG4gICAgQHRocm93cyAoIM6paW10XzI0NSA9IC0+IGludGVybmFscy50eXBlc3BhY2UucG9pbnQudmFsaWRhdGUgICAgNTUuNSAgICAgICksIC9ub3QgYSB2YWxpZCBwb2ludC9cbiAgICBAdGhyb3dzICggzqlpbXRfMjQ2ID0gLT4gaW50ZXJuYWxzLnR5cGVzcGFjZS5wb2ludC52YWxpZGF0ZSAgICAnYWJjJyAgICAgKSwgL25vdCBhIHZhbGlkIHBvaW50L1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQHRocm93cyAoIM6paW10XzI0NyA9IC0+IGludGVybmFscy50eXBlc3BhY2UuaW50ZWdlci52YWxpZGF0ZSAgNTUuNSAgICAgICksIC9ub3QgYSB2YWxpZCBpbnRlZ2VyL1xuICAgIEB0aHJvd3MgKCDOqWltdF8yNDggPSAtPiBpbnRlcm5hbHMudHlwZXNwYWNlLnBvaW50LnZhbGlkYXRlICAgIDU1LjUgICAgICApLCAvbm90IGEgdmFsaWQgcG9pbnQvXG4gICAgQHRocm93cyAoIM6paW10XzI0OSA9IC0+IGludGVybmFscy50eXBlc3BhY2UucG9pbnQudmFsaWRhdGUgICAgJ2FiYycgICAgICksIC9ub3QgYSB2YWxpZCBwb2ludC9cbiAgICBAdGhyb3dzICggzqlpbXRfMjUwID0gLT4gaW50ZXJuYWxzLnR5cGVzcGFjZS5wb2ludC52YWxpZGF0ZSAgICAnJyAgICAgICAgKSwgL25vdCBhIHZhbGlkIHBvaW50L1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgZG9fY292ZXJhZ2UgPSBmYWxzZVxuICBkb19jb3ZlcmFnZSA9IHRydWVcbiAgaWYgZG9fY292ZXJhZ2VcbiAgICB7IENvdmVyYWdlX2FuYWx5emVyLCAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL2xpYi9jb3ZlcmFnZS1hbmFseXplcidcbiAgICBjYSA9IG5ldyBDb3ZlcmFnZV9hbmFseXplcigpXG4gICAgY2Eud3JhcF9jbGFzcyBIb2FyZFxuICAgIGNhLndyYXBfY2xhc3MgU2NhdHRlclxuICAgIGNhLndyYXBfY2xhc3MgUnVuXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiB0cnVlLCByZXBvcnRfY2hlY2tzOiB0cnVlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdGVzdHMsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGNvbnRhaW5tZW50OiB0ZXN0cy5jb250YWlubWVudCwgfVxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGlmIGRvX2NvdmVyYWdlXG4gICAgd2FybiAnzqlpbXRfMjUxJywgXCJub3QgY292ZXJlZDpcIiwgKCByZXZlcnNlICBib2xkIFwiICN7bmFtZX0gXCIgKSBmb3IgbmFtZSBpbiBjYS51bnVzZWRfbmFtZXMgaWYgY2EudW51c2VkX25hbWVzLmxlbmd0aCA+IDBcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICA7bnVsbFxuXG4iXX0=
