(async function() {
  'use strict';
  var FS, GTNG, GUY, PATH, SFMODULES, Test, alert, blue, bold, debug, echo, f, gold, green, grey, help, info, inspect, log, nfa, plain, praise, red, reverse, rpr, tests, type_of, urge, warn, whisper, white;

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

  //===========================================================================================================
  this.tests = tests = {
    //---------------------------------------------------------------------------------------------------------
    basic_runs: function() {
      var Hoard, d, h, Ωimt__10, Ωimt___1, Ωimt___2, Ωimt___4, Ωimt___5, Ωimt___6, Ωimt___7, Ωimt___8, Ωimt___9;
      ({Hoard} = require('../../../apps/bricabrac-sfmodules/lib/intermission'));
      //.......................................................................................................
      h = new Hoard();
      this.throws((Ωimt___1 = function() {
        return h.create_run();
      }), /expected an integer or a text, got a null/);
      this.throws((Ωimt___2 = function() {
        return h.create_run({
          hi: 7
        });
      }), /expected an integer or a text, got a null/);
      // d = h.create_run();                  @eq ( Ωimt___3 = -> [ d, d.size, ] ), [ { lo: 0, hi: 0, },  1, ]
      d = h.create_run(7);
      this.eq((Ωimt___4 = function() {
        return [d, d.size];
      }), [
        {
          lo: 7,
          hi: 7
        },
        1
      ]);
      d = h.create_run(7, 7);
      this.eq((Ωimt___5 = function() {
        return [d, d.size];
      }), [
        {
          lo: 7,
          hi: 7
        },
        1
      ]);
      d = h.create_run(7, 12);
      this.eq((Ωimt___6 = function() {
        return [d, d.size];
      }), [
        {
          lo: 7,
          hi: 12
        },
        6
      ]);
      d = h.create_run({
        lo: 7
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
      d = h.create_run({
        lo: 7,
        hi: 7
      });
      this.eq((Ωimt___8 = function() {
        return [d, d.size];
      }), [
        {
          lo: 7,
          hi: 7
        },
        1
      ]);
      d = h.create_run({
        lo: 7,
        hi: 21
      });
      this.eq((Ωimt___9 = function() {
        return [d, d.size];
      }), [
        {
          lo: 7,
          hi: 21
        },
        15
      ]);
      //.......................................................................................................
      this.eq((Ωimt__10 = function() {
        return (h.create_run(1, 1)).scatter;
      }), void 0);
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    basic_scatters: function() {
      var Hoard;
      ({Hoard} = require('../../../apps/bricabrac-sfmodules/lib/intermission'));
      (() => {        //.......................................................................................................
        var h, s, Ωimt__11, Ωimt__12, Ωimt__13, Ωimt__14, Ωimt__15, Ωimt__17, Ωimt__19, Ωimt__20, Ωimt__21, Ωimt__22;
        h = new Hoard();
        s = h.create_scatter({
          data: {
            a: 1
          }
        });
        this.eq((Ωimt__11 = function() {
          return {...s};
        }), {
          data: {
            a: 1
          },
          runs: []
        });
        this.eq((Ωimt__12 = function() {
          return s.is_normalized;
        }), true);
        //.....................................................................................................
        s.add_run({
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__13 = function() {
          return s.runs.length;
        }), 1);
        s.add_run(1);
        this.eq((Ωimt__14 = function() {
          return s.runs.length;
        }), 2);
        s.add_run({
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__15 = function() {
          return s.runs.length;
        }), 3);
        // s.add_run new Run { lo: 1, hi: 1, };  @eq ( Ωimt__16 = -> s.runs.length     ), 3
        //.....................................................................................................
        this.eq((Ωimt__17 = function() {
          return s.is_normalized;
        }), false);
        // @eq ( Ωimt__18 = -> s.is_sorted       ), false
        this.eq((Ωimt__19 = function() {
          return s.data;
        }), {
          a: 1
        });
        this.eq((Ωimt__20 = function() {
          return s.runs[0];
        }), {
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__21 = function() {
          return s.runs[1];
        }), {
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__22 = function() {
          return s.runs[2];
        }), {
          lo: 1,
          hi: 1
        });
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt__23, Ωimt__25, Ωimt__26, Ωimt__27, Ωimt__28, Ωimt__29, Ωimt__30, Ωimt__33, Ωimt__34, Ωimt__35, Ωimt__36;
        h = new Hoard();
        s = h.create_scatter({
          data: {
            a: 2
          },
          sort: true
        });
        this.eq((Ωimt__23 = function() {
          return s.is_normalized;
        }), true);
        // @eq ( Ωimt__24 = -> s.is_sorted       ), false
        s.add_run({
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__25 = function() {
          return s.runs.length;
        }), 1);
        this.eq((Ωimt__26 = function() {
          return s.is_normalized;
        }), false);
        s.add_run(1);
        this.eq((Ωimt__27 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt__28 = function() {
          return s.is_normalized;
        }), false);
        s.add_run({
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__29 = function() {
          return s.runs.length;
        }), 3);
        this.eq((Ωimt__30 = function() {
          return s.is_normalized;
        }), false);
        // s.add_run new Run { lo: 1, hi: 1, };  @eq ( Ωimt__31 = -> s.runs.length     ), 3; @eq ( Ωimt__32 = -> s.is_normalized ), false
        //.....................................................................................................
        this.eq((Ωimt__33 = function() {
          return s.data;
        }), {
          a: 2
        });
        this.eq((Ωimt__34 = function() {
          return s.runs[0];
        }), {
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__35 = function() {
          return s.runs[1];
        }), {
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__36 = function() {
          return s.runs[2];
        }), {
          lo: 1,
          hi: 1
        });
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt__37, Ωimt__38, Ωimt__39, Ωimt__40, Ωimt__41, Ωimt__42, Ωimt__43, Ωimt__46, Ωimt__47;
        h = new Hoard();
        s = h.create_scatter({
          data: {
            a: 3
          },
          normalize: true
        });
        this.eq((Ωimt__37 = function() {
          return s.is_normalized;
        }), true);
        s.add_run({
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__38 = function() {
          return s.runs.length;
        }), 1);
        this.eq((Ωimt__39 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(1);
        this.eq((Ωimt__40 = function() {
          return s.runs.length;
        }), 1);
        this.eq((Ωimt__41 = function() {
          return s.is_normalized;
        }), true);
        s.add_run({
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__42 = function() {
          return s.runs.length;
        }), 1);
        this.eq((Ωimt__43 = function() {
          return s.is_normalized;
        }), true);
        // s.add_run new Run { lo: 1, hi: 1, };  @eq ( Ωimt__44 = -> s.runs.length ), 1; @eq ( Ωimt__45 = -> s.is_normalized ), true
        //.....................................................................................................
        this.eq((Ωimt__46 = function() {
          return s.data;
        }), {
          a: 3
        });
        this.eq((Ωimt__47 = function() {
          return s.runs[0];
        }), {
          lo: 1,
          hi: 1
        });
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt__48, Ωimt__49, Ωimt__50, Ωimt__51, Ωimt__52, Ωimt__53, Ωimt__54, Ωimt__56, Ωimt__57, Ωimt__58;
        h = new Hoard();
        s = h.create_scatter({
          data: {
            a: 4
          },
          normalize: true
        });
        this.eq((Ωimt__48 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(103);
        this.eq((Ωimt__49 = function() {
          return s.runs.length;
        }), 1);
        this.eq((Ωimt__50 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(100);
        this.eq((Ωimt__51 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt__52 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(101);
        this.eq((Ωimt__53 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt__54 = function() {
          return s.is_normalized;
        }), true);
        //.....................................................................................................
        // debug 'Ωimt__55', run for run in s.runs
        this.eq((Ωimt__56 = function() {
          return s.data;
        }), {
          a: 4
        });
        this.eq((Ωimt__57 = function() {
          return s.runs[0];
        }), {
          lo: 100,
          hi: 101
        });
        this.eq((Ωimt__58 = function() {
          return s.runs[1];
        }), {
          lo: 103,
          hi: 103
        });
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt__59, Ωimt__60, Ωimt__61, Ωimt__62, Ωimt__63, Ωimt__64, Ωimt__65, Ωimt__66, Ωimt__67, Ωimt__68;
        h = new Hoard();
        s = h.create_scatter({
          normalize: true
        });
        this.eq((Ωimt__59 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(103, 109);
        this.eq((Ωimt__60 = function() {
          return s.runs.length;
        }), 1);
        this.eq((Ωimt__61 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(111, 115);
        this.eq((Ωimt__62 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt__63 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(110);
        this.eq((Ωimt__64 = function() {
          return s.runs.length;
        }), 1);
        this.eq((Ωimt__65 = function() {
          return s.is_normalized;
        }), true);
        this.eq((Ωimt__66 = function() {
          return {
            min: s.min,
            max: s.max
          };
        }), {
          min: 103,
          max: 115
        });
        this.eq((Ωimt__67 = function() {
          return s.minmax;
        }), {
          min: 103,
          max: 115
        });
        //.....................................................................................................
        this.eq((Ωimt__68 = function() {
          return s.runs[0];
        }), {
          lo: 103,
          hi: 115
        });
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt__69, Ωimt__70, Ωimt__71, Ωimt__72, Ωimt__73, Ωimt__74, Ωimt__75, Ωimt__76, Ωimt__77, Ωimt__78, Ωimt__79, Ωimt__80;
        h = new Hoard();
        s = h.create_scatter({
          normalize: false
        });
        this.eq((Ωimt__69 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(103, 109);
        this.eq((Ωimt__70 = function() {
          return s.runs.length;
        }), 1);
        this.eq((Ωimt__71 = function() {
          return s.is_normalized;
        }), false);
        s.add_run(111, 115);
        this.eq((Ωimt__72 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt__73 = function() {
          return s.is_normalized;
        }), false);
        s.add_run(110);
        this.eq((Ωimt__74 = function() {
          return s.runs.length;
        }), 3);
        this.eq((Ωimt__75 = function() {
          return s.is_normalized;
        }), false);
        this.eq((Ωimt__76 = function() {
          return {
            min: s.min,
            max: s.max
          };
        }), {
          min: 103,
          max: 115
        });
        this.eq((Ωimt__77 = function() {
          return s.minmax;
        }), {
          min: 103,
          max: 115
        });
        //.....................................................................................................
        this.eq((Ωimt__78 = function() {
          return s.runs[0];
        }), {
          lo: 103,
          hi: 109
        });
        this.eq((Ωimt__79 = function() {
          return s.runs[1];
        }), {
          lo: 111,
          hi: 115
        });
        this.eq((Ωimt__80 = function() {
          return s.runs[2];
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
    overlapping: function() {
      var Hoard;
      ({Hoard} = require('../../../apps/bricabrac-sfmodules/lib/intermission'));
      (() => {        //.......................................................................................................
        var h, s, Ωimt__83, Ωimt__84, Ωimt__85, Ωimt__86, Ωimt__87;
        h = new Hoard();
        s = h.create_scatter();
        s.add_run('a', 'y');
        s.add_run('A', 'Y');
        debug('Ωimt__81', h);
        debug('Ωimt__82', h.scatters);
        this.eq((Ωimt__83 = function() {
          return s.contains('a');
        }), true);
        this.eq((Ωimt__84 = function() {
          return s.contains({
            lo: 'a'
          });
        }), true);
        this.eq((Ωimt__85 = function() {
          return s.contains({
            lo: 'a',
            hi: 'y'
          });
        }), true);
        this.eq((Ωimt__86 = function() {
          return s.contains({
            lo: 'a',
            hi: 'z'
          });
        }), true);
        this.eq((Ωimt__87 = function() {
          return s.contains('0');
        }), false);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    containment: function() {
      var Hoard;
      ({Hoard} = require('../../../apps/bricabrac-sfmodules/lib/intermission'));
      (() => {        //.......................................................................................................
        var h, r, Ωimt_100, Ωimt_101, Ωimt_102, Ωimt_103, Ωimt_104, Ωimt_105, Ωimt_106, Ωimt_107, Ωimt_108, Ωimt__88, Ωimt__89, Ωimt__90, Ωimt__91, Ωimt__92, Ωimt__93, Ωimt__94, Ωimt__95, Ωimt__96, Ωimt__97, Ωimt__98, Ωimt__99;
        h = new Hoard();
        r = h.create_run({
          lo: 25,
          hi: 30
        });
        this.eq((Ωimt__88 = function() {
          return r.contains(21);
        }), false);
        this.eq((Ωimt__89 = function() {
          return r.contains(22);
        }), false);
        this.eq((Ωimt__90 = function() {
          return r.contains(23);
        }), false);
        this.eq((Ωimt__91 = function() {
          return r.contains(24);
        }), false);
        this.eq((Ωimt__92 = function() {
          return r.contains(25);
        }), true);
        this.eq((Ωimt__93 = function() {
          return r.contains(26);
        }), true);
        this.eq((Ωimt__94 = function() {
          return r.contains(27);
        }), true);
        this.eq((Ωimt__95 = function() {
          return r.contains(28);
        }), true);
        this.eq((Ωimt__96 = function() {
          return r.contains(29);
        }), true);
        this.eq((Ωimt__97 = function() {
          return r.contains(30);
        }), true);
        this.eq((Ωimt__98 = function() {
          return r.contains(31);
        }), false);
        this.eq((Ωimt__99 = function() {
          return r.contains(41);
        }), false);
        this.eq((Ωimt_100 = function() {
          return r.contains([25]);
        }), true);
        this.eq((Ωimt_101 = function() {
          return r.contains([30]);
        }), true);
        this.eq((Ωimt_102 = function() {
          return r.contains([31]);
        }), false);
        this.eq((Ωimt_103 = function() {
          return r.contains([32]);
        }), false);
        this.eq((Ωimt_104 = function() {
          return r.contains([25, 26, 27, 28, 29, 30]);
        }), true);
        this.eq((Ωimt_105 = function() {
          return r.contains([25, 26, 27, 28, 29, 30, 31]);
        }), false);
        this.eq((Ωimt_106 = function() {
          return r.contains((function*() {
            return (yield* [25, 26, 27, 28, 29, 30]);
          })());
        }), true);
        this.eq((Ωimt_107 = function() {
          return r.contains((function*() {
            return (yield* [25, 26, 27, 28, 29, 30, 31]);
          })());
        }), false);
        this.eq((Ωimt_108 = function() {
          return r.contains((function*() {
            return (yield* [25, 26, 27, 28, 29, 30, 31, 32]);
          })());
        }), false);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, s1, Ωimt_109, Ωimt_110, Ωimt_111, Ωimt_112, Ωimt_113, Ωimt_114, Ωimt_115, Ωimt_116, Ωimt_117, Ωimt_118, Ωimt_119, Ωimt_120, Ωimt_121, Ωimt_122, Ωimt_123, Ωimt_124, Ωimt_125, Ωimt_126, Ωimt_127, Ωimt_128, Ωimt_129, Ωimt_130, Ωimt_131, Ωimt_132, Ωimt_133, Ωimt_134, Ωimt_135, Ωimt_136, Ωimt_137, Ωimt_138, Ωimt_139, Ωimt_140, Ωimt_141, Ωimt_142, Ωimt_143, Ωimt_144, Ωimt_145, Ωimt_146, Ωimt_147, Ωimt_148, Ωimt_149, Ωimt_150;
        h = new Hoard();
        s = h.create_scatter();
        s.add_run(25, 30);
        s.add_run(32, 40);
        this.eq((Ωimt_109 = function() {
          return s.contains(21);
        }), false);
        this.eq((Ωimt_110 = function() {
          return s.contains(22);
        }), false);
        this.eq((Ωimt_111 = function() {
          return s.contains(23);
        }), false);
        this.eq((Ωimt_112 = function() {
          return s.contains(24);
        }), false);
        this.eq((Ωimt_113 = function() {
          return s.contains(25);
        }), true);
        this.eq((Ωimt_114 = function() {
          return s.contains(26);
        }), true);
        this.eq((Ωimt_115 = function() {
          return s.contains(27);
        }), true);
        this.eq((Ωimt_116 = function() {
          return s.contains(28);
        }), true);
        this.eq((Ωimt_117 = function() {
          return s.contains(29);
        }), true);
        this.eq((Ωimt_118 = function() {
          return s.contains(30);
        }), true);
        this.eq((Ωimt_119 = function() {
          return s.contains(31);
        }), false);
        this.eq((Ωimt_120 = function() {
          return s.contains(32);
        }), true);
        this.eq((Ωimt_121 = function() {
          return s.contains(33);
        }), true);
        this.eq((Ωimt_122 = function() {
          return s.contains(34);
        }), true);
        this.eq((Ωimt_123 = function() {
          return s.contains(35);
        }), true);
        this.eq((Ωimt_124 = function() {
          return s.contains(36);
        }), true);
        this.eq((Ωimt_125 = function() {
          return s.contains(37);
        }), true);
        this.eq((Ωimt_126 = function() {
          return s.contains(38);
        }), true);
        this.eq((Ωimt_127 = function() {
          return s.contains(39);
        }), true);
        this.eq((Ωimt_128 = function() {
          return s.contains(40);
        }), true);
        this.eq((Ωimt_129 = function() {
          return s.contains(41);
        }), false);
        this.eq((Ωimt_130 = function() {
          return s.contains(42);
        }), false);
        this.eq((Ωimt_131 = function() {
          return s.contains(43);
        }), false);
        this.eq((Ωimt_132 = function() {
          return s.contains([25, 26, 27, 28, 29, 30]);
        }), true);
        this.eq((Ωimt_133 = function() {
          return s.contains([25, 26, 27, 28, 29, 30, 31]);
        }), false);
        this.eq((Ωimt_134 = function() {
          return s.contains([30]);
        }), true);
        this.eq((Ωimt_135 = function() {
          return s.contains([31]);
        }), false);
        this.eq((Ωimt_136 = function() {
          return s.contains([32]);
        }), true);
        this.eq((Ωimt_137 = function() {
          return s.contains((function*() {
            return (yield* [25, 26, 27, 28, 29, 30]);
          })());
        }), true);
        this.eq((Ωimt_138 = function() {
          return s.contains((function*() {
            return (yield* [25, 26, 27, 28, 29, 30, 31]);
          })());
        }), false);
        this.eq((Ωimt_139 = function() {
          return s.contains((function*() {
            return (yield* [25, 26, 27, 28, 29, 30, 31, 32]);
          })());
        }), false);
        this.eq((Ωimt_140 = function() {
          return s.contains(h.create_run(25));
        }), true);
        this.eq((Ωimt_141 = function() {
          return s.contains(h.create_run(25, 30));
        }), true);
        this.eq((Ωimt_142 = function() {
          return s.contains(h.create_run(25, 32));
        }), false);
        s1 = h.create_scatter();
        s1.add_run(26, 27);
        s1.add_run(37, 40);
        this.eq((Ωimt_143 = function() {
          return s1.is_normalized;
        }), false);
        this.eq((Ωimt_144 = function() {
          return s.contains(s1);
        }), true);
        this.eq((Ωimt_145 = function() {
          return s1.is_normalized;
        }), true);
        s1.add_run(25, 32);
        this.eq((Ωimt_146 = function() {
          return s.contains(s1);
        }), false);
        this.eq((Ωimt_147 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(31);
        this.eq((Ωimt_148 = function() {
          return s.is_normalized;
        }), false);
        this.eq((Ωimt_149 = function() {
          return s.contains(s1);
        }), true);
        this.eq((Ωimt_150 = function() {
          return s.is_normalized;
        }), true);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    iteration: function() {
      var Hoard;
      ({Hoard} = require('../../../apps/bricabrac-sfmodules/lib/intermission'));
      (() => {        //.......................................................................................................
        var h, Ωimt_151, Ωimt_152, Ωimt_153;
        h = new Hoard();
        this.eq((Ωimt_151 = function() {
          return [...(h.create_run(1))];
        }), [1]);
        this.eq((Ωimt_152 = function() {
          return [...(h.create_run(297))];
        }), [297]);
        this.eq((Ωimt_153 = function() {
          return [...(h.create_run(297, 308))];
        }), [297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308]);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_154, Ωimt_155, Ωimt_156, Ωimt_157, Ωimt_158, Ωimt_159, Ωimt_160, Ωimt_161, Ωimt_162, Ωimt_163, Ωimt_164, Ωimt_165, Ωimt_166, Ωimt_167, Ωimt_168;
        h = new Hoard();
        s = h.create_scatter();
        this.eq((Ωimt_154 = function() {
          return [...s];
        }), []);
        s.add_run(1);
        this.eq((Ωimt_155 = function() {
          return [...s];
        }), [1]);
        this.eq((Ωimt_156 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(297);
        this.eq((Ωimt_157 = function() {
          return [...s];
        }), [1, 297]);
        this.eq((Ωimt_158 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(299, 302);
        this.eq((Ωimt_159 = function() {
          return [...s];
        }), [1, 297, 299, 300, 301, 302]);
        this.eq((Ωimt_160 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(298);
        this.eq((Ωimt_161 = function() {
          return [...s];
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_162 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(300, 301);
        this.eq((Ωimt_163 = function() {
          return [...s];
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_164 = function() {
          return s.is_normalized;
        }), true);
        this.eq((Ωimt_165 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt_166 = function() {
          return s.runs[0];
        }), {
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt_167 = function() {
          return s.runs[1];
        }), {
          lo: 297,
          hi: 302
        });
        this.eq((Ωimt_168 = function() {
          return s.points;
        }), [1, 297, 298, 299, 300, 301, 302]);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_169, Ωimt_170, Ωimt_171, Ωimt_172, Ωimt_173, Ωimt_174, Ωimt_175, Ωimt_176, Ωimt_177, Ωimt_178, Ωimt_179, Ωimt_180, Ωimt_181, Ωimt_182, Ωimt_183;
        h = new Hoard();
        s = h.create_scatter();
        this.eq((Ωimt_169 = function() {
          return [...s.walk()];
        }), []);
        s.add_run(1);
        this.eq((Ωimt_170 = function() {
          return [...s.walk()];
        }), [1]);
        this.eq((Ωimt_171 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(297);
        this.eq((Ωimt_172 = function() {
          return [...s.walk()];
        }), [1, 297]);
        this.eq((Ωimt_173 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(299, 302);
        this.eq((Ωimt_174 = function() {
          return [...s.walk()];
        }), [1, 297, 299, 300, 301, 302]);
        this.eq((Ωimt_175 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(298);
        this.eq((Ωimt_176 = function() {
          return [...s.walk()];
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_177 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(300, 301);
        this.eq((Ωimt_178 = function() {
          return [...s.walk()];
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_179 = function() {
          return s.is_normalized;
        }), true);
        this.eq((Ωimt_180 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt_181 = function() {
          return s.runs[0];
        }), {
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt_182 = function() {
          return s.runs[1];
        }), {
          lo: 297,
          hi: 302
        });
        this.eq((Ωimt_183 = function() {
          return s.points;
        }), [1, 297, 298, 299, 300, 301, 302]);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_184, Ωimt_185, Ωimt_186, Ωimt_187, Ωimt_188, Ωimt_189, Ωimt_190, Ωimt_191, Ωimt_192, Ωimt_193, Ωimt_194, Ωimt_195, Ωimt_196, Ωimt_197, Ωimt_198;
        h = new Hoard();
        s = h.create_scatter();
        this.eq((Ωimt_184 = function() {
          return s.points;
        }), []);
        s.add_run(1);
        this.eq((Ωimt_185 = function() {
          return s.points;
        }), [1]);
        this.eq((Ωimt_186 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(297);
        this.eq((Ωimt_187 = function() {
          return s.points;
        }), [1, 297]);
        this.eq((Ωimt_188 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(299, 302);
        this.eq((Ωimt_189 = function() {
          return s.points;
        }), [1, 297, 299, 300, 301, 302]);
        this.eq((Ωimt_190 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(298);
        this.eq((Ωimt_191 = function() {
          return s.points;
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_192 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(300, 301);
        this.eq((Ωimt_193 = function() {
          return s.points;
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_194 = function() {
          return s.is_normalized;
        }), true);
        this.eq((Ωimt_195 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt_196 = function() {
          return s.runs[0];
        }), {
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt_197 = function() {
          return s.runs[1];
        }), {
          lo: 297,
          hi: 302
        });
        this.eq((Ωimt_198 = function() {
          return s.points;
        }), [1, 297, 298, 299, 300, 301, 302]);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    using_strings_for_bounds: function() {
      var Hoard;
      ({Hoard} = require('../../../apps/bricabrac-sfmodules/lib/intermission'));
      (() => {        //.......................................................................................................
        var h, s, Ωimt_199, Ωimt_200, Ωimt_201;
        h = new Hoard();
        s = h.create_scatter();
        this.throws((Ωimt_199 = function() {
          return s.add_run(5.8);
        }), /expected an integer or a text, got a float/);
        this.throws((Ωimt_200 = function() {
          return s.add_run(-3);
        }), /-0x3 is not between \+0x0 and \+0x10ffff/);
        this.throws((Ωimt_201 = function() {
          return s.add_run(0, -3);
        }), /-0x3 is not between \+0x0 and \+0x10ffff/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_202, Ωimt_203, Ωimt_204, Ωimt_205;
        h = new Hoard({
          first: -10,
          last: +10
        });
        s = h.create_scatter();
        s.add_run(-10);
        this.eq((Ωimt_202 = function() {
          return s.points;
        }), [-10]);
        s.add_run(+10);
        this.eq((Ωimt_203 = function() {
          return s.points;
        }), [-10, +10]);
        this.throws((Ωimt_204 = function() {
          return s.add_run(-11);
        }), /-0xb is not between -0xa and \+0xa/);
        this.throws((Ωimt_205 = function() {
          return s.add_run(+11);
        }), /\+0xb is not between -0xa and \+0xa/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_206, Ωimt_207, Ωimt_208, Ωimt_209, Ωimt_210, Ωimt_211;
        h = new Hoard();
        s = h.create_scatter();
        s.add_run('A');
        this.eq((Ωimt_206 = function() {
          return s.points;
        }), ['A'.codePointAt(0)]);
        s.add_run('A', 'Z');
        this.eq((Ωimt_207 = function() {
          return s.points;
        }), [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]);
        s.add_run('a', 'z');
        this.eq((Ωimt_208 = function() {
          return s.points;
        }), [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122]);
        this.eq((Ωimt_209 = function() {
          return s.min;
        }), 'A'.codePointAt(0));
        this.eq((Ωimt_210 = function() {
          return s.max;
        }), 'z'.codePointAt(0));
        this.eq((Ωimt_211 = function() {
          return {
            min: s.min,
            max: s.max
          };
        }), s.minmax);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_212;
        h = new Hoard();
        s = h.create_scatter();
        s.add_run('Abc');
        this.eq((Ωimt_212 = function() {
          return s.points;
        }), ['A'.codePointAt(0)]);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_213, Ωimt_214, Ωimt_215, Ωimt_216, Ωimt_217;
        h = new Hoard();
        s = h.create_scatter();
        s.add_codepoints_of('Abc');
        this.eq((Ωimt_213 = function() {
          return s.runs.length;
        }), 3);
        this.eq((Ωimt_214 = function() {
          return s.points;
        }), ['A'.codePointAt(0), 'b'.codePointAt(0), 'c'.codePointAt(0)]);
        this.eq((Ωimt_215 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt_216 = function() {
          return s.runs[0];
        }), {
          lo: 'A'.codePointAt(0),
          hi: 'A'.codePointAt(0)
        });
        this.eq((Ωimt_217 = function() {
          return s.runs[1];
        }), {
          lo: 'b'.codePointAt(0),
          hi: 'c'.codePointAt(0)
        });
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_218, Ωimt_219, Ωimt_220;
        h = new Hoard();
        s = h.create_scatter();
        s.add_codepoints_of('aeiouäöü', 'aeiouäöü', 'AEIOUÄÖÜ', 'AEIOUÄÖÜ');
        this.eq((Ωimt_218 = function() {
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
        this.eq((Ωimt_219 = function() {
          return s.runs.length;
        }), 16);
        s.normalize();
        this.eq((Ωimt_220 = function() {
          return s.runs.length;
        }), 16);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    data_retrieval: function() {
      var Hoard, summarize_data;
      ({Hoard, summarize_data} = require('../../../apps/bricabrac-sfmodules/lib/intermission'));
      (() => {        //.......................................................................................................
        var h, s_umlaut, s_vowels, Ωimt_221, Ωimt_222, Ωimt_223, Ωimt_224, Ωimt_225, Ωimt_226, Ωimt_227, Ωimt_228;
        h = new Hoard();
        s_vowels = h.add_scatter({
          data: {
            tags: ['vowel'],
            is_ascii: true
          }
        });
        s_umlaut = h.add_scatter({
          data: {
            tags: ['umlaut']
          }
        });
        s_vowels.add_codepoints_of('aeiouäöü', 'aeiouäöü', 'AEIOUÄÖÜ', 'AEIOUÄÖÜ');
        s_umlaut.add_codepoints_of('äöü', 'äöü', 'ÄÖÜ');
        this.eq((Ωimt_221 = function() {
          return s_vowels.contains('A');
        }), true);
        this.eq((Ωimt_222 = function() {
          return s_vowels.contains('A'.codePointAt(0));
        }), true);
        this.eq((Ωimt_223 = function() {
          return s_vowels.contains('B');
        }), false);
        this.eq((Ωimt_224 = function() {
          return s_vowels.contains('B'.codePointAt(0));
        }), false);
        this.eq((Ωimt_225 = function() {
          return h.summarize_data_for_point('A');
        }), {
          is_ascii: [true],
          tags: ['vowel']
        });
        this.eq((Ωimt_226 = function() {
          return h.summarize_data_for_point('ä');
        }), {
          is_ascii: [true],
          tags: ['umlaut', 'vowel']
        });
        this.eq((Ωimt_227 = function() {
          return h.summarize_data_for_point('B');
        }), null);
        this.eq((Ωimt_228 = function() {
          return h.summarize_data_for_point('y');
        }), null);
        return null;
      })();
      (() => {        //.......................................................................................................
        var Vu_hoard, h, s_ascii, s_not_ascii, s_umlaut, s_vowels, Ωimt_229, Ωimt_230, Ωimt_231, Ωimt_232, Ωimt_233, Ωimt_234, Ωimt_235, Ωimt_236, Ωimt_237, Ωimt_238, Ωimt_239, Ωimt_240, Ωimt_241, Ωimt_242, Ωimt_243, Ωimt_244, Ωimt_245, Ωimt_246, Ωimt_247, Ωimt_248, Ωimt_249, Ωimt_250, Ωimt_251, Ωimt_252;
        Vu_hoard = (function() {
          class Vu_hoard extends Hoard {};

          Vu_hoard.prototype.summarize_data_is_ascii = summarize_data.as_boolean_and;

          return Vu_hoard;

        }).call(this);
        h = new Vu_hoard();
        s_ascii = h.add_scatter({
          data: {
            is_ascii: true
          }
        });
        s_vowels = h.add_scatter({
          data: {
            tags: ['vowel']
          }
        });
        s_umlaut = h.add_scatter({
          data: {
            tags: ['umlaut']
          }
        });
        s_ascii.add_run('a', 'z');
        s_ascii.add_run('A', 'Z');
        s_vowels.add_codepoints_of('aeiouäöü', 'aeiouäöü', 'AEIOUÄÖÜ', 'AEIOUÄÖÜ');
        s_umlaut.add_codepoints_of('äöü', 'äöü', 'ÄÖÜ');
        this.eq((Ωimt_229 = function() {
          return s_ascii.contains('A');
        }), true);
        this.eq((Ωimt_230 = function() {
          return s_ascii.contains('Q');
        }), true);
        this.eq((Ωimt_231 = function() {
          return s_ascii.contains('f');
        }), true);
        this.eq((Ωimt_232 = function() {
          return s_vowels.contains('A');
        }), true);
        this.eq((Ωimt_233 = function() {
          return s_vowels.contains('A'.codePointAt(0));
        }), true);
        this.eq((Ωimt_234 = function() {
          return s_vowels.contains('B');
        }), false);
        this.eq((Ωimt_235 = function() {
          return s_vowels.contains('B'.codePointAt(0));
        }), false);
        this.eq((Ωimt_236 = function() {
          return h.get_data_for_point('A');
        }), [
          {
            is_ascii: true
          },
          {
            tags: ['vowel']
          }
        ]);
        this.eq((Ωimt_237 = function() {
          return h.get_data_for_point('A'.codePointAt(0));
        }), [
          {
            is_ascii: true
          },
          {
            tags: ['vowel']
          }
        ]);
        this.eq((Ωimt_238 = function() {
          return h.get_data_for_point('Q');
        }), [
          {
            is_ascii: true
          }
        ]);
        this.eq((Ωimt_239 = function() {
          return h.get_data_for_point('f');
        }), [
          {
            is_ascii: true
          }
        ]);
        this.eq((Ωimt_240 = function() {
          return h.get_data_for_point('B');
        }), [
          {
            is_ascii: true
          }
        ]);
        this.eq((Ωimt_241 = function() {
          return h.get_data_for_point('B'.codePointAt(0));
        }), [
          {
            is_ascii: true
          }
        ]);
        this.eq((Ωimt_242 = function() {
          return h.get_data_for_point('ä');
        }), [
          {
            tags: ['vowel']
          },
          {
            tags: ['umlaut']
          }
        ]);
        this.eq((Ωimt_243 = function() {
          return h.summarize_data_for_point('A');
        }), {
          is_ascii: true,
          tags: ['vowel']
        });
        this.eq((Ωimt_244 = function() {
          return h.summarize_data_for_point('A'.codePointAt(0));
        }), {
          is_ascii: true,
          tags: ['vowel']
        });
        this.eq((Ωimt_245 = function() {
          return h.summarize_data_for_point('Q');
        }), {
          is_ascii: true
        });
        this.eq((Ωimt_246 = function() {
          return h.summarize_data_for_point('f');
        }), {
          is_ascii: true
        });
        this.eq((Ωimt_247 = function() {
          return h.summarize_data_for_point('B');
        }), {
          is_ascii: true
        });
        this.eq((Ωimt_248 = function() {
          return h.summarize_data_for_point('B'.codePointAt(0));
        }), {
          is_ascii: true
        });
        this.eq((Ωimt_249 = function() {
          return h.summarize_data_for_point('ä');
        }), {
          tags: ['umlaut', 'vowel']
        });
        //.....................................................................................................
        s_not_ascii = h.add_scatter({
          data: {
            is_ascii: false
          }
        });
        s_not_ascii.add_run(0x80, 0x10ffff);
        this.eq((Ωimt_250 = function() {
          return h.summarize_data_for_point('B');
        }), {
          is_ascii: true
        });
        this.eq((Ωimt_251 = function() {
          return h.summarize_data_for_point('ä');
        }), {
          is_ascii: false,
          tags: ['umlaut', 'vowel']
        });
        this.throws((Ωimt_252 = function() {
          return h.summarize_data_for_point('äwhat');
        }), /not a valid point/);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    validation: function() {
      var My_typespace, T, Type, Typespace, Ωimt_255, Ωimt_256, Ωimt_257, Ωimt_258, Ωimt_259, Ωimt_260, Ωimt_261, Ωimt_262, Ωimt_263, Ωimt_264, Ωimt_265, Ωimt_266, Ωimt_267, Ωimt_268, Ωimt_269, Ωimt_270;
      ({Type, Typespace} = SFMODULES.unstable.require_nanotypes_v2());
      //.......................................................................................................
      My_typespace = class My_typespace extends Typespace {
        //...................................................................................................
        static integer(x) {
          this.assign({x});
          if (Number.isSafeInteger(x)) {
            return true;
          }
          if (Number.isFinite(x)) {
            return this.fail(`${rpr(x)} is a non-integer number`, {
              fraction: x % 1
            });
          }
          return this.fail(`${rpr(x)} is not even a finite number`);
        }

        //...................................................................................................
        static text(x) {
          this.assign({x});
          if ((typeof x) === 'string') {
            return true;
          }
          return false;
        }

        //...................................................................................................
        static point(x) {
          this.assign({x});
          if (this.T.integer.isa(x)) {
            return true;
          }
          if (!(this.T.text.isa(x))) {
            return this.fail(`${rpr(x)} is not an integer and not a text`);
          }
          if (!((Array.from(x)).length === 1)) {
            return this.fail(`${rpr(x)} is a text but not with a single codepoint`);
          }
          return true;
        }

      };
      // return true if Number.isSafeInteger x
      // return @fail "#{rpr x} is a non-integer number", { fraction: x % 1, } if Number.isFinite x
      // return @fail "#{rpr x} is not even a finite number"
      //.....................................................................................................
      T = new My_typespace();
      debug('Ωimt_253', T.integer);
      debug('Ωimt_254', T.integer.isa);
      //.......................................................................................................
      this.eq((Ωimt_255 = function() {
        return T.integer.isa(5);
      }), true);
      this.eq((Ωimt_256 = function() {
        return T.point.isa(5);
      }), true);
      this.eq((Ωimt_257 = function() {
        return T.point.isa('a');
      }), true);
      //.......................................................................................................
      this.eq((Ωimt_258 = function() {
        return T.integer.isa(55.5);
      }), false);
      this.eq((Ωimt_259 = function() {
        return T.point.isa(55.5);
      }), false);
      this.eq((Ωimt_260 = function() {
        return T.point.isa('abc');
      }), false);
      //.......................................................................................................
      this.eq((Ωimt_261 = function() {
        return T.integer.validate(5);
      }), 5);
      this.eq((Ωimt_262 = function() {
        return T.point.validate(5);
      }), 5);
      this.eq((Ωimt_263 = function() {
        return T.point.validate('a');
      }), 'a');
      //.......................................................................................................
      this.eq((Ωimt_264 = function() {
        var e;
        try {
          return T.integer.validate(55.5);
        } catch (error) {
          e = error;
          return e.message;
        }
      }), `(integer) not a valid integer: 55.5 – 55.5 is a non-integer number`);
      this.eq((Ωimt_265 = function() {
        var e;
        try {
          return T.point.validate(55.5);
        } catch (error) {
          e = error;
          return e.message;
        }
      }), `(point) not a valid point: 55.5 – 55.5 is not an integer and not a text`);
      this.eq((Ωimt_266 = function() {
        var e;
        try {
          return T.point.validate('abc');
        } catch (error) {
          e = error;
          return e.message;
        }
      }), `(point) not a valid point: abc – 'abc' is a text but not with a single codepoint`);
      //.......................................................................................................
      this.throws((Ωimt_267 = function() {
        return T.integer.validate(55.5);
      }), /not a valid integer/);
      this.throws((Ωimt_268 = function() {
        return T.point.validate(55.5);
      }), /not a valid point/);
      this.throws((Ωimt_269 = function() {
        return T.point.validate('abc');
      }), /not a valid point/);
      this.throws((Ωimt_270 = function() {
        return T.point.validate('');
      }), /not a valid point/);
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    _dbric_integration: function() {
      var Dbric, Hoard, IDN, LIT, SQL, VEC, as_bool, internals, prefix, summarize_data;
      ({Hoard, summarize_data} = require('../../../apps/bricabrac-sfmodules/lib/intermission'));
      ({Dbric, as_bool, SQL, LIT, IDN, VEC, internals} = SFMODULES.unstable.require_dbric());
      prefix = 'prfx';
      debug('Ωimt_271', Hoard);
      //.......................................................................................................
      // get_functions = ( db ) ->
      //   R = {}
      //   for { name, builtin, type, } from db.walk SQL"""select name, builtin, type from pragma_function_list() order by name;"""
      //     is_builtin = as_bool builtin
      //     R[ name ] = { name, is_builtin, type, }
      //   return R
      // #.......................................................................................................
      // get_function_names = ( db ) -> new Set ( key for key of get_functions db )
      // #.......................................................................................................
      // @eq ( Ωimt_272 = -> type_of Hoard.get_udfs                                    ), 'function'
      // @eq ( Ωimt_273 = -> type_of Hoard.get_build_statements                        ), 'function'
      // #.......................................................................................................
      // @eq ( Ωimt_274 = -> type_of Hoard.get_udfs              { prefix, }           ), 'pod'
      // @eq ( Ωimt_275 = -> type_of Hoard.get_build_statements  { prefix, }           ), 'list'
      // #.......................................................................................................
      // @eq ( Ωimt_276 = -> ( Object.keys Hoard.get_udfs        { prefix, } ).length  ), 3
      // @eq ( Ωimt_277 = -> ( Hoard.get_build_statements        { prefix, } ).length  ), 3
      // #.......................................................................................................
      // {}
      // udfs              = Hoard.get_udfs { prefix, }
      // build_statements  = Hoard.get_build_statements { prefix, }
      // db                = new Dbric ':memory:'
      // #.......................................................................................................
      // for name, definition of udfs
      //   info 'Ωimt_278', "create UDF #{definition.name}"
      //   db.create_function definition
      // debug 'Ωimt_279',  name for name from get_function_names db when name.startsWith "#{prefix}_"
      // #.......................................................................................................
      // for statement, idx in build_statements
      //   statement = db.prepare statement
      //   info 'Ωimt_280', statement.run()
      // #.......................................................................................................
      // insert_data = db.prepare SQL"""insert into #{IDN "#{prefix}_hoard_scatters"} ( data ) values ( $data )"""
      // insert_data.run { data: ( JSON.stringify { letter: 'A', arc: true, zeta: false, } ), }
      // insert_data.run { data: ( JSON.stringify { zeta: false, letter: 'A', arc: true, } ), }
      // insert_data.run { data: ( JSON.stringify { letter: 'B', arc: true, zeta: false, } ), }
      // insert_data.run { data: ( JSON.stringify { letter: 'C', arc: true, zeta: false, } ), }
      // echo { row..., } for row from db.walk SQL"""select * from #{IDN "#{prefix}_hoard_scatters"}"""
      // echo { row..., } for row from db.walk SQL"""select #{IDN "#{prefix}_normalize_data"}( $data ) as ndata;""", { data: ( JSON.stringify { letter: 'A', arc: true, zeta: false, } ), }
      // echo { row..., } for row from db.walk SQL"""select #{IDN "#{prefix}_normalize_data"}( $data ) as ndata;""", { data: ( JSON.stringify { zeta: false, letter: 'A', arc: true, } ), }
      // echo { row..., } for row from db.walk SQL"""select #{IDN "#{prefix}_normalize_data"}( $data ) as ndata;""", { data: ( JSON.stringify { letter: 'B', arc: true, zeta: false, } ), }
      // echo { row..., } for row from db.walk SQL"""select #{IDN "#{prefix}_normalize_data"}( $data ) as ndata;""", { data: ( JSON.stringify { letter: 'C', arc: true, zeta: false, } ), }
      //.......................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var guytest_cfg;
      // demo_infinite_proxy()
      // demo_colorful_proxy()
      guytest_cfg = {
        throw_on_error: false,
        show_passes: true,
        report_checks: true
      };
      guytest_cfg = {
        throw_on_error: true,
        show_passes: false,
        report_checks: false
      };
      guytest_cfg = {
        throw_on_error: false,
        show_passes: false,
        report_checks: false
      };
      (new Test(guytest_cfg)).test({tests});
      (new Test(guytest_cfg)).test({
        overlapping: tests.overlapping
      });
      // ( new Test guytest_cfg ).test { dbric_integration: tests._dbric_integration, }
      // ( new Test guytest_cfg ).test { basic_scatters: tests.basic_scatters, }
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtaW50ZXJtaXNzaW9uLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxFQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsU0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBOzs7RUFHQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLHdCQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsS0FIRixFQUlFLEtBSkYsRUFLRSxJQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxHQVJGLEVBU0UsSUFURixFQVVFLE9BVkYsRUFXRSxHQVhGLENBQUEsR0FXNEIsR0FBRyxDQUFDLEdBWGhDOztFQVlBLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLHlCQUFSLENBQTVCLEVBekJBOzs7RUEyQkEsQ0FBQSxDQUFFLEdBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEsNENBQVIsQ0FBNUI7O0VB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Ozs7O2FBdURLO0lBeERpQjtFQTNjcEIsRUExQ0Y7OztFQW1qQkEsSUFBRyxNQUFBLEtBQVUsT0FBTyxDQUFDLElBQXJCO0lBQStCLE1BQVMsQ0FBQSxDQUFBLENBQUEsR0FBQTtBQUN4QyxVQUFBLFdBQUE7OztNQUVFLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsS0FBbEI7UUFBMEIsV0FBQSxFQUFhLElBQXZDO1FBQTZDLGFBQUEsRUFBZTtNQUE1RDtNQUNkLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsSUFBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsS0FBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEIsQ0FBRSxLQUFGLENBQTlCO01BQ0EsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QjtRQUFFLFdBQUEsRUFBYSxLQUFLLENBQUM7TUFBckIsQ0FBOUIsRUFORjs7O2FBU0c7SUFWcUMsQ0FBQSxJQUF4Qzs7QUFuakJBIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbid1c2Ugc3RyaWN0J1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnYnJpY2FicmFjLWludGVybWlzc2lvbidcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICB3aGl0ZVxuICBncmVlblxuICBibHVlXG4gIGdvbGRcbiAgZ3JleVxuICByZWRcbiAgYm9sZFxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuIyB3cml0ZSAgICAgICAgICAgICAgICAgICAgID0gKCBwICkgLT4gcHJvY2Vzcy5zdGRvdXQud3JpdGUgcFxueyBuZmEgfSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG5GUyAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpmcydcblBBVEggICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG57IHR5cGVfb2YsICAgICAgICAgICAgICB9ID0gKCByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL3Vuc3RhYmxlLXJwci10eXBlX29mLWJyaWNzJyApLnJlcXVpcmVfdHlwZV9vZigpXG5cblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRlc3RzID0gdGVzdHMgPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYmFzaWNfcnVuczogLT5cbiAgICB7IEhvYXJkLCAgICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvaW50ZXJtaXNzaW9uJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgaCA9IG5ldyBIb2FyZCgpXG4gICAgQHRocm93cyAoIM6paW10X19fMSA9IC0+IGguY3JlYXRlX3J1bigpICAgICAgICAgICApLCAvZXhwZWN0ZWQgYW4gaW50ZWdlciBvciBhIHRleHQsIGdvdCBhIG51bGwvXG4gICAgQHRocm93cyAoIM6paW10X19fMiA9IC0+IGguY3JlYXRlX3J1biB7IGhpOiA3LCB9ICApLCAvZXhwZWN0ZWQgYW4gaW50ZWdlciBvciBhIHRleHQsIGdvdCBhIG51bGwvXG4gICAgIyBkID0gaC5jcmVhdGVfcnVuKCk7ICAgICAgICAgICAgICAgICAgQGVxICggzqlpbXRfX18zID0gLT4gWyBkLCBkLnNpemUsIF0gKSwgWyB7IGxvOiAwLCBoaTogMCwgfSwgIDEsIF1cbiAgICBkID0gaC5jcmVhdGVfcnVuIDc7ICAgICAgICAgICAgICAgICAgQGVxICggzqlpbXRfX180ID0gLT4gWyBkLCBkLnNpemUsIF0gKSwgWyB7IGxvOiA3LCBoaTogNywgfSwgIDEsIF1cbiAgICBkID0gaC5jcmVhdGVfcnVuIDcsIDc7ICAgICAgICAgICAgICAgQGVxICggzqlpbXRfX181ID0gLT4gWyBkLCBkLnNpemUsIF0gKSwgWyB7IGxvOiA3LCBoaTogNywgfSwgIDEsIF1cbiAgICBkID0gaC5jcmVhdGVfcnVuIDcsIDEyOyAgICAgICAgICAgICAgQGVxICggzqlpbXRfX182ID0gLT4gWyBkLCBkLnNpemUsIF0gKSwgWyB7IGxvOiA3LCBoaTogMTIsIH0sIDYsIF1cbiAgICBkID0gaC5jcmVhdGVfcnVuIHsgbG86IDcsIH07ICAgICAgICAgQGVxICggzqlpbXRfX183ID0gLT4gWyBkLCBkLnNpemUsIF0gKSwgWyB7IGxvOiA3LCBoaTogNywgfSwgIDEsIF1cbiAgICBkID0gaC5jcmVhdGVfcnVuIHsgbG86IDcsIGhpOiA3LCB9OyAgQGVxICggzqlpbXRfX184ID0gLT4gWyBkLCBkLnNpemUsIF0gKSwgWyB7IGxvOiA3LCBoaTogNywgfSwgIDEsIF1cbiAgICBkID0gaC5jcmVhdGVfcnVuIHsgbG86IDcsIGhpOiAyMSwgfTsgQGVxICggzqlpbXRfX185ID0gLT4gWyBkLCBkLnNpemUsIF0gKSwgWyB7IGxvOiA3LCBoaTogMjEsIH0sIDE1LCBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgKCDOqWltdF9fMTAgPSAtPiAoIGguY3JlYXRlX3J1biAxLCAxICkuc2NhdHRlciApLCB1bmRlZmluZWRcbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYmFzaWNfc2NhdHRlcnM6IC0+XG4gICAgeyBIb2FyZCwgICAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL2ludGVybWlzc2lvbidcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoID0gbmV3IEhvYXJkKClcbiAgICAgIHMgPSBoLmNyZWF0ZV9zY2F0dGVyIHsgZGF0YTogeyBhOiAxLCB9IH1cbiAgICAgIEBlcSAoIM6paW10X18xMSA9IC0+IHsgcy4uLiwgfSApLCB7IGRhdGE6IHsgYTogMSwgfSwgcnVuczogW10sIH1cbiAgICAgIEBlcSAoIM6paW10X18xMiA9IC0+IHMuaXNfbm9ybWFsaXplZCAgICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcy5hZGRfcnVuIHsgbG86IDEsIGhpOiAxLCB9OyAgICAgICAgICBAZXEgKCDOqWltdF9fMTMgPSAtPiBzLnJ1bnMubGVuZ3RoICAgICApLCAxXG4gICAgICBzLmFkZF9ydW4gMTsgICAgICAgICAgICAgICAgICAgICAgICAgIEBlcSAoIM6paW10X18xNCA9IC0+IHMucnVucy5sZW5ndGggICAgICksIDJcbiAgICAgIHMuYWRkX3J1biB7IGxvOiAxLCBoaTogMSwgfTsgICAgICAgICAgQGVxICggzqlpbXRfXzE1ID0gLT4gcy5ydW5zLmxlbmd0aCAgICAgKSwgM1xuICAgICAgIyBzLmFkZF9ydW4gbmV3IFJ1biB7IGxvOiAxLCBoaTogMSwgfTsgIEBlcSAoIM6paW10X18xNiA9IC0+IHMucnVucy5sZW5ndGggICAgICksIDNcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlpbXRfXzE3ID0gLT4gcy5pc19ub3JtYWxpemVkICAgKSwgZmFsc2VcbiAgICAgICMgQGVxICggzqlpbXRfXzE4ID0gLT4gcy5pc19zb3J0ZWQgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10X18xOSA9IC0+IHMuZGF0YSAgICAgICAgICAgICksIHsgYTogMSwgfVxuICAgICAgQGVxICggzqlpbXRfXzIwID0gLT4gcy5ydW5zWyAwIF0gICAgICAgKSwgeyBsbzogMSwgaGk6IDEsIH1cbiAgICAgIEBlcSAoIM6paW10X18yMSA9IC0+IHMucnVuc1sgMSBdICAgICAgICksIHsgbG86IDEsIGhpOiAxLCB9XG4gICAgICBAZXEgKCDOqWltdF9fMjIgPSAtPiBzLnJ1bnNbIDIgXSAgICAgICApLCB7IGxvOiAxLCBoaTogMSwgfVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoID0gbmV3IEhvYXJkKClcbiAgICAgIHMgPSBoLmNyZWF0ZV9zY2F0dGVyIHsgZGF0YTogeyBhOiAyLCB9LCBzb3J0OiB0cnVlLCB9XG4gICAgICBAZXEgKCDOqWltdF9fMjMgPSAtPiBzLmlzX25vcm1hbGl6ZWQgICApLCB0cnVlXG4gICAgICAjIEBlcSAoIM6paW10X18yNCA9IC0+IHMuaXNfc29ydGVkICAgICAgICksIGZhbHNlXG4gICAgICBzLmFkZF9ydW4geyBsbzogMSwgaGk6IDEsIH07ICAgICAgICAgIEBlcSAoIM6paW10X18yNSA9IC0+IHMucnVucy5sZW5ndGggICAgICksIDE7IEBlcSAoIM6paW10X18yNiA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCBmYWxzZVxuICAgICAgcy5hZGRfcnVuIDE7ICAgICAgICAgICAgICAgICAgICAgICAgICBAZXEgKCDOqWltdF9fMjcgPSAtPiBzLnJ1bnMubGVuZ3RoICAgICApLCAyOyBAZXEgKCDOqWltdF9fMjggPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgZmFsc2VcbiAgICAgIHMuYWRkX3J1biB7IGxvOiAxLCBoaTogMSwgfTsgICAgICAgICAgQGVxICggzqlpbXRfXzI5ID0gLT4gcy5ydW5zLmxlbmd0aCAgICAgKSwgMzsgQGVxICggzqlpbXRfXzMwID0gLT4gcy5pc19ub3JtYWxpemVkICksIGZhbHNlXG4gICAgICAjIHMuYWRkX3J1biBuZXcgUnVuIHsgbG86IDEsIGhpOiAxLCB9OyAgQGVxICggzqlpbXRfXzMxID0gLT4gcy5ydW5zLmxlbmd0aCAgICAgKSwgMzsgQGVxICggzqlpbXRfXzMyID0gLT4gcy5pc19ub3JtYWxpemVkICksIGZhbHNlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6paW10X18zMyA9IC0+IHMuZGF0YSAgICAgICAgICAgICksIHsgYTogMiwgfVxuICAgICAgQGVxICggzqlpbXRfXzM0ID0gLT4gcy5ydW5zWyAwIF0gICAgICAgKSwgeyBsbzogMSwgaGk6IDEsIH1cbiAgICAgIEBlcSAoIM6paW10X18zNSA9IC0+IHMucnVuc1sgMSBdICAgICAgICksIHsgbG86IDEsIGhpOiAxLCB9XG4gICAgICBAZXEgKCDOqWltdF9fMzYgPSAtPiBzLnJ1bnNbIDIgXSAgICAgICApLCB7IGxvOiAxLCBoaTogMSwgfVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoID0gbmV3IEhvYXJkKClcbiAgICAgIHMgPSBoLmNyZWF0ZV9zY2F0dGVyIHsgZGF0YTogeyBhOiAzLCB9LCBub3JtYWxpemU6IHRydWUsIH1cbiAgICAgIEBlcSAoIM6paW10X18zNyA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZF9ydW4geyBsbzogMSwgaGk6IDEsIH07ICAgICAgICAgIEBlcSAoIM6paW10X18zOCA9IC0+IHMucnVucy5sZW5ndGggKSwgMTsgQGVxICggzqlpbXRfXzM5ID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIHMuYWRkX3J1biAxOyAgICAgICAgICAgICAgICAgICAgICAgICAgQGVxICggzqlpbXRfXzQwID0gLT4gcy5ydW5zLmxlbmd0aCApLCAxOyBAZXEgKCDOqWltdF9fNDEgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGRfcnVuIHsgbG86IDEsIGhpOiAxLCB9OyAgICAgICAgICBAZXEgKCDOqWltdF9fNDIgPSAtPiBzLnJ1bnMubGVuZ3RoICksIDE7IEBlcSAoIM6paW10X180MyA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICAjIHMuYWRkX3J1biBuZXcgUnVuIHsgbG86IDEsIGhpOiAxLCB9OyAgQGVxICggzqlpbXRfXzQ0ID0gLT4gcy5ydW5zLmxlbmd0aCApLCAxOyBAZXEgKCDOqWltdF9fNDUgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWltdF9fNDYgPSAtPiBzLmRhdGEgICAgICAgICAgICApLCB7IGE6IDMsIH1cbiAgICAgIEBlcSAoIM6paW10X180NyA9IC0+IHMucnVuc1sgMCBdICAgICAgICksIHsgbG86IDEsIGhpOiAxLCB9XG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGggPSBuZXcgSG9hcmQoKVxuICAgICAgcyA9IGguY3JlYXRlX3NjYXR0ZXIgeyBkYXRhOiB7IGE6IDQsIH0sIG5vcm1hbGl6ZTogdHJ1ZSwgfVxuICAgICAgQGVxICggzqlpbXRfXzQ4ID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIHMuYWRkX3J1biAxMDM7ICBAZXEgKCDOqWltdF9fNDkgPSAtPiBzLnJ1bnMubGVuZ3RoICksIDE7IEBlcSAoIM6paW10X181MCA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZF9ydW4gMTAwOyAgQGVxICggzqlpbXRfXzUxID0gLT4gcy5ydW5zLmxlbmd0aCApLCAyOyBAZXEgKCDOqWltdF9fNTIgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGRfcnVuIDEwMTsgIEBlcSAoIM6paW10X181MyA9IC0+IHMucnVucy5sZW5ndGggKSwgMjsgQGVxICggzqlpbXRfXzU0ID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBkZWJ1ZyAnzqlpbXRfXzU1JywgcnVuIGZvciBydW4gaW4gcy5ydW5zXG4gICAgICBAZXEgKCDOqWltdF9fNTYgPSAtPiBzLmRhdGEgICAgICAgICAgICApLCB7IGE6IDQsIH1cbiAgICAgIEBlcSAoIM6paW10X181NyA9IC0+IHMucnVuc1sgMCBdICAgICAgICksIHsgbG86IDEwMCwgaGk6IDEwMSwgfVxuICAgICAgQGVxICggzqlpbXRfXzU4ID0gLT4gcy5ydW5zWyAxIF0gICAgICAgKSwgeyBsbzogMTAzLCBoaTogMTAzLCB9XG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGggPSBuZXcgSG9hcmQoKVxuICAgICAgcyA9IGguY3JlYXRlX3NjYXR0ZXIgeyBub3JtYWxpemU6IHRydWUsIH1cbiAgICAgIEBlcSAoIM6paW10X181OSA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZF9ydW4gMTAzLCAxMDk7ICAgQGVxICggzqlpbXRfXzYwID0gLT4gcy5ydW5zLmxlbmd0aCApLCAxOyBAZXEgKCDOqWltdF9fNjEgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGRfcnVuIDExMSwgMTE1OyAgIEBlcSAoIM6paW10X182MiA9IC0+IHMucnVucy5sZW5ndGggKSwgMjsgQGVxICggzqlpbXRfXzYzID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIHMuYWRkX3J1biAxMTA7ICAgICAgICBAZXEgKCDOqWltdF9fNjQgPSAtPiBzLnJ1bnMubGVuZ3RoICksIDE7IEBlcSAoIM6paW10X182NSA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fNjYgPSAtPiB7IG1pbjogcy5taW4sIG1heDogcy5tYXgsIH0gKSwgeyBtaW46IDEwMywgbWF4OiAxMTUsIH1cbiAgICAgIEBlcSAoIM6paW10X182NyA9IC0+IHMubWlubWF4ICAgICAgICAgICAgICAgICAgICApLCB7IG1pbjogMTAzLCBtYXg6IDExNSwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWltdF9fNjggPSAtPiBzLnJ1bnNbIDAgXSAgICAgICApLCB7IGxvOiAxMDMsIGhpOiAxMTUsIH1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgaCA9IG5ldyBIb2FyZCgpXG4gICAgICBzID0gaC5jcmVhdGVfc2NhdHRlciB7IG5vcm1hbGl6ZTogZmFsc2UsIH1cbiAgICAgIEBlcSAoIM6paW10X182OSA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZF9ydW4gMTAzLCAxMDk7ICAgQGVxICggzqlpbXRfXzcwID0gLT4gcy5ydW5zLmxlbmd0aCApLCAxOyBAZXEgKCDOqWltdF9fNzEgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgZmFsc2VcbiAgICAgIHMuYWRkX3J1biAxMTEsIDExNTsgICBAZXEgKCDOqWltdF9fNzIgPSAtPiBzLnJ1bnMubGVuZ3RoICksIDI7IEBlcSAoIM6paW10X183MyA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCBmYWxzZVxuICAgICAgcy5hZGRfcnVuIDExMDsgICAgICAgIEBlcSAoIM6paW10X183NCA9IC0+IHMucnVucy5sZW5ndGggKSwgMzsgQGVxICggzqlpbXRfXzc1ID0gLT4gcy5pc19ub3JtYWxpemVkICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF9fNzYgPSAtPiB7IG1pbjogcy5taW4sIG1heDogcy5tYXgsIH0gKSwgeyBtaW46IDEwMywgbWF4OiAxMTUsIH1cbiAgICAgIEBlcSAoIM6paW10X183NyA9IC0+IHMubWlubWF4ICAgICAgICAgICAgICAgICAgICApLCB7IG1pbjogMTAzLCBtYXg6IDExNSwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWltdF9fNzggPSAtPiBzLnJ1bnNbIDAgXSApLCB7IGxvOiAxMDMsIGhpOiAxMDksIH1cbiAgICAgIEBlcSAoIM6paW10X183OSA9IC0+IHMucnVuc1sgMSBdICksIHsgbG86IDExMSwgaGk6IDExNSwgfVxuICAgICAgQGVxICggzqlpbXRfXzgwID0gLT4gcy5ydW5zWyAyIF0gKSwgeyBsbzogMTEwLCBoaTogMTEwLCB9XG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIG92ZXJsYXBwaW5nOiAtPlxuICAgIHsgSG9hcmQsIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL2ludGVybWlzc2lvbidcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoID0gbmV3IEhvYXJkKClcbiAgICAgIHMgPSBoLmNyZWF0ZV9zY2F0dGVyKClcbiAgICAgIHMuYWRkX3J1biAnYScsICd5J1xuICAgICAgcy5hZGRfcnVuICdBJywgJ1knXG4gICAgICBkZWJ1ZyAnzqlpbXRfXzgxJywgaFxuICAgICAgZGVidWcgJ86paW10X184MicsIGguc2NhdHRlcnNcbiAgICAgIEBlcSAoIM6paW10X184MyA9IC0+IHMuY29udGFpbnMgJ2EnICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fODQgPSAtPiBzLmNvbnRhaW5zIHsgbG86ICdhJywgfSAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzg1ID0gLT4gcy5jb250YWlucyB7IGxvOiAnYScsIGhpOiAneScsIH0gICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X184NiA9IC0+IHMuY29udGFpbnMgeyBsbzogJ2EnLCBoaTogJ3onLCB9ICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fODcgPSAtPiBzLmNvbnRhaW5zICcwJyAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29udGFpbm1lbnQ6IC0+XG4gICAgeyBIb2FyZCwgICAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL2ludGVybWlzc2lvbidcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoID0gbmV3IEhvYXJkKClcbiAgICAgIHIgPSBoLmNyZWF0ZV9ydW4geyBsbzogMjUsIGhpOiAzMCwgfVxuICAgICAgQGVxICggzqlpbXRfXzg4ID0gLT4gci5jb250YWlucyAyMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzg5ID0gLT4gci5jb250YWlucyAyMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzkwID0gLT4gci5jb250YWlucyAyMyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzkxID0gLT4gci5jb250YWlucyAyNCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzkyID0gLT4gci5jb250YWlucyAyNSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fOTMgPSAtPiByLmNvbnRhaW5zIDI2ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X185NCA9IC0+IHIuY29udGFpbnMgMjcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzk1ID0gLT4gci5jb250YWlucyAyOCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fOTYgPSAtPiByLmNvbnRhaW5zIDI5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X185NyA9IC0+IHIuY29udGFpbnMgMzAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzk4ID0gLT4gci5jb250YWlucyAzMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzk5ID0gLT4gci5jb250YWlucyA0MSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTAwID0gLT4gci5jb250YWlucyBbIDI1LCBdICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMDEgPSAtPiByLmNvbnRhaW5zIFsgMzAsIF0gICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzEwMiA9IC0+IHIuY29udGFpbnMgWyAzMSwgXSAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10XzEwMyA9IC0+IHIuY29udGFpbnMgWyAzMiwgXSAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10XzEwNCA9IC0+IHIuY29udGFpbnMgWyAyNSAuLiAzMCBdICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTA1ID0gLT4gci5jb250YWlucyBbIDI1IC4uIDMxIF0gICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTA2ID0gLT4gci5jb250YWlucyAoIC0+IHlpZWxkIGZyb20gWyAyNSAuLiAzMCBdICkoKSApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMDcgPSAtPiByLmNvbnRhaW5zICggLT4geWllbGQgZnJvbSBbIDI1IC4uIDMxIF0gKSgpICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8xMDggPSAtPiByLmNvbnRhaW5zICggLT4geWllbGQgZnJvbSBbIDI1IC4uIDMyIF0gKSgpICksIGZhbHNlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGggPSBuZXcgSG9hcmQoKVxuICAgICAgcyA9IGguY3JlYXRlX3NjYXR0ZXIoKVxuICAgICAgcy5hZGRfcnVuIDI1LCAzMFxuICAgICAgcy5hZGRfcnVuIDMyLCA0MFxuICAgICAgQGVxICggzqlpbXRfMTA5ID0gLT4gcy5jb250YWlucyAyMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTEwID0gLT4gcy5jb250YWlucyAyMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTExID0gLT4gcy5jb250YWlucyAyMyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTEyID0gLT4gcy5jb250YWlucyAyNCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTEzID0gLT4gcy5jb250YWlucyAyNSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMTQgPSAtPiBzLmNvbnRhaW5zIDI2ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzExNSA9IC0+IHMuY29udGFpbnMgMjcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTE2ID0gLT4gcy5jb250YWlucyAyOCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMTcgPSAtPiBzLmNvbnRhaW5zIDI5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzExOCA9IC0+IHMuY29udGFpbnMgMzAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTE5ID0gLT4gcy5jb250YWlucyAzMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTIwID0gLT4gcy5jb250YWlucyAzMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMjEgPSAtPiBzLmNvbnRhaW5zIDMzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzEyMiA9IC0+IHMuY29udGFpbnMgMzQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTIzID0gLT4gcy5jb250YWlucyAzNSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMjQgPSAtPiBzLmNvbnRhaW5zIDM2ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzEyNSA9IC0+IHMuY29udGFpbnMgMzcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTI2ID0gLT4gcy5jb250YWlucyAzOCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMjcgPSAtPiBzLmNvbnRhaW5zIDM5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzEyOCA9IC0+IHMuY29udGFpbnMgNDAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTI5ID0gLT4gcy5jb250YWlucyA0MSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTMwID0gLT4gcy5jb250YWlucyA0MiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTMxID0gLT4gcy5jb250YWlucyA0MyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTMyID0gLT4gcy5jb250YWlucyBbIDI1IC4uIDMwIF0gICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMzMgPSAtPiBzLmNvbnRhaW5zIFsgMjUgLi4gMzEgXSAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8xMzQgPSAtPiBzLmNvbnRhaW5zIFsgMzAsIF0gICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzEzNSA9IC0+IHMuY29udGFpbnMgWyAzMSwgXSAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10XzEzNiA9IC0+IHMuY29udGFpbnMgWyAzMiwgXSAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTM3ID0gLT4gcy5jb250YWlucyAoIC0+IHlpZWxkIGZyb20gWyAyNSAuLiAzMCBdICkoKSApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMzggPSAtPiBzLmNvbnRhaW5zICggLT4geWllbGQgZnJvbSBbIDI1IC4uIDMxIF0gKSgpICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8xMzkgPSAtPiBzLmNvbnRhaW5zICggLT4geWllbGQgZnJvbSBbIDI1IC4uIDMyIF0gKSgpICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8xNDAgPSAtPiBzLmNvbnRhaW5zICggaC5jcmVhdGVfcnVuIDI1ICAgICAgICAgICAgICApICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzE0MSA9IC0+IHMuY29udGFpbnMgKCBoLmNyZWF0ZV9ydW4gMjUsIDMwICAgICAgICAgICkgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTQyID0gLT4gcy5jb250YWlucyAoIGguY3JlYXRlX3J1biAyNSwgMzIgICAgICAgICAgKSApLCBmYWxzZVxuICAgICAgczEgPSBoLmNyZWF0ZV9zY2F0dGVyKClcbiAgICAgIHMxLmFkZF9ydW4gMjYsIDI3XG4gICAgICBzMS5hZGRfcnVuIDM3LCA0MFxuICAgICAgQGVxICggzqlpbXRfMTQzID0gLT4gczEuaXNfbm9ybWFsaXplZCAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTQ0ID0gLT4gcy5jb250YWlucyBzMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xNDUgPSAtPiBzMS5pc19ub3JtYWxpemVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIHMxLmFkZF9ydW4gMjUsIDMyXG4gICAgICBAZXEgKCDOqWltdF8xNDYgPSAtPiBzLmNvbnRhaW5zIHMxICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8xNDcgPSAtPiBzLmlzX25vcm1hbGl6ZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIHMuYWRkX3J1biAzMVxuICAgICAgQGVxICggzqlpbXRfMTQ4ID0gLT4gcy5pc19ub3JtYWxpemVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTQ5ID0gLT4gcy5jb250YWlucyBzMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xNTAgPSAtPiBzLmlzX25vcm1hbGl6ZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXRlcmF0aW9uOiAtPlxuICAgIHsgSG9hcmQsICAgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL2xpYi9pbnRlcm1pc3Npb24nXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgaCA9IG5ldyBIb2FyZCgpXG4gICAgICBAZXEgKCDOqWltdF8xNTEgPSAtPiBbICggaC5jcmVhdGVfcnVuIDEgICAgICAgICApLi4uLCBdICAgICAgICksIFsgMSwgXVxuICAgICAgQGVxICggzqlpbXRfMTUyID0gLT4gWyAoIGguY3JlYXRlX3J1biAyOTcgICAgICAgKS4uLiwgXSAgICAgICApLCBbIDI5NywgXVxuICAgICAgQGVxICggzqlpbXRfMTUzID0gLT4gWyAoIGguY3JlYXRlX3J1biAyOTcsIDMwOCAgKS4uLiwgXSAgICAgICApLCBbIDI5NywgMjk4LCAyOTksIDMwMCwgMzAxLCAzMDIsIDMwMywgMzA0LCAzMDUsIDMwNiwgMzA3LCAzMDggXVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoID0gbmV3IEhvYXJkKClcbiAgICAgIHMgPSBoLmNyZWF0ZV9zY2F0dGVyKClcbiAgICAgIEBlcSAoIM6paW10XzE1NCA9IC0+IFsgcy4uLiwgXSAgICAgICApLCBbXVxuICAgICAgcy5hZGRfcnVuIDE7ICAgICAgICBAZXEgKCDOqWltdF8xNTUgPSAtPiBbIHMuLi4sIF0gKSwgWyAxLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdOyBAZXEgKCDOqWltdF8xNTYgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGRfcnVuIDI5NzsgICAgICBAZXEgKCDOqWltdF8xNTcgPSAtPiBbIHMuLi4sIF0gKSwgWyAxLCAyOTcsICAgICAgICAgICAgICAgICAgICAgICAgICBdOyBAZXEgKCDOqWltdF8xNTggPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGRfcnVuIDI5OSwgMzAyOyBAZXEgKCDOqWltdF8xNTkgPSAtPiBbIHMuLi4sIF0gKSwgWyAxLCAyOTcsICAgICAgMjk5LCAzMDAsIDMwMSwgMzAyLCBdOyBAZXEgKCDOqWltdF8xNjAgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGRfcnVuIDI5ODsgICAgICBAZXEgKCDOqWltdF8xNjEgPSAtPiBbIHMuLi4sIF0gKSwgWyAxLCAyOTcsIDI5OCwgMjk5LCAzMDAsIDMwMSwgMzAyLCBdOyBAZXEgKCDOqWltdF8xNjIgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGRfcnVuIDMwMCwgMzAxOyBAZXEgKCDOqWltdF8xNjMgPSAtPiBbIHMuLi4sIF0gKSwgWyAxLCAyOTcsIDI5OCwgMjk5LCAzMDAsIDMwMSwgMzAyLCBdOyBAZXEgKCDOqWltdF8xNjQgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTY1ID0gLT4gcy5ydW5zLmxlbmd0aCAgICksIDJcbiAgICAgIEBlcSAoIM6paW10XzE2NiA9IC0+IHMucnVuc1sgMCBdICAgICApLCB7IGxvOiAxLCBoaTogMSwgfVxuICAgICAgQGVxICggzqlpbXRfMTY3ID0gLT4gcy5ydW5zWyAxIF0gICAgICksIHsgbG86IDI5NywgaGk6IDMwMiwgfVxuICAgICAgQGVxICggzqlpbXRfMTY4ID0gLT4gcy5wb2ludHMgICAgICAgICksIFsgMSwgMjk3LCAyOTgsIDI5OSwgMzAwLCAzMDEsIDMwMiBdXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGggPSBuZXcgSG9hcmQoKVxuICAgICAgcyA9IGguY3JlYXRlX3NjYXR0ZXIoKVxuICAgICAgQGVxICggzqlpbXRfMTY5ID0gLT4gWyBzLndhbGsoKS4uLiwgXSAgICAgICApLCBbXVxuICAgICAgcy5hZGRfcnVuIDE7ICAgICAgICBAZXEgKCDOqWltdF8xNzAgPSAtPiBbIHMud2FsaygpLi4uLCBdICksIFsgMSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTsgQGVxICggzqlpbXRfMTcxID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIHMuYWRkX3J1biAyOTc7ICAgICAgQGVxICggzqlpbXRfMTcyID0gLT4gWyBzLndhbGsoKS4uLiwgXSApLCBbIDEsIDI5NywgICAgICAgICAgICAgICAgICAgICAgICAgIF07IEBlcSAoIM6paW10XzE3MyA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZF9ydW4gMjk5LCAzMDI7IEBlcSAoIM6paW10XzE3NCA9IC0+IFsgcy53YWxrKCkuLi4sIF0gKSwgWyAxLCAyOTcsICAgICAgMjk5LCAzMDAsIDMwMSwgMzAyLCBdOyBAZXEgKCDOqWltdF8xNzUgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGRfcnVuIDI5ODsgICAgICBAZXEgKCDOqWltdF8xNzYgPSAtPiBbIHMud2FsaygpLi4uLCBdICksIFsgMSwgMjk3LCAyOTgsIDI5OSwgMzAwLCAzMDEsIDMwMiwgXTsgQGVxICggzqlpbXRfMTc3ID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIHMuYWRkX3J1biAzMDAsIDMwMTsgQGVxICggzqlpbXRfMTc4ID0gLT4gWyBzLndhbGsoKS4uLiwgXSApLCBbIDEsIDI5NywgMjk4LCAyOTksIDMwMCwgMzAxLCAzMDIsIF07IEBlcSAoIM6paW10XzE3OSA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xODAgPSAtPiBzLnJ1bnMubGVuZ3RoICAgKSwgMlxuICAgICAgQGVxICggzqlpbXRfMTgxID0gLT4gcy5ydW5zWyAwIF0gICAgICksIHsgbG86IDEsIGhpOiAxLCB9XG4gICAgICBAZXEgKCDOqWltdF8xODIgPSAtPiBzLnJ1bnNbIDEgXSAgICAgKSwgeyBsbzogMjk3LCBoaTogMzAyLCB9XG4gICAgICBAZXEgKCDOqWltdF8xODMgPSAtPiBzLnBvaW50cyAgICAgICAgKSwgWyAxLCAyOTcsIDI5OCwgMjk5LCAzMDAsIDMwMSwgMzAyIF1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgaCA9IG5ldyBIb2FyZCgpXG4gICAgICBzID0gaC5jcmVhdGVfc2NhdHRlcigpXG4gICAgICBAZXEgKCDOqWltdF8xODQgPSAtPiBzLnBvaW50cyApLCBbXVxuICAgICAgcy5hZGRfcnVuIDE7ICAgICAgICBAZXEgKCDOqWltdF8xODUgPSAtPiBzLnBvaW50cyApLCBbIDEsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07IEBlcSAoIM6paW10XzE4NiA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZF9ydW4gMjk3OyAgICAgIEBlcSAoIM6paW10XzE4NyA9IC0+IHMucG9pbnRzICksIFsgMSwgMjk3LCAgICAgICAgICAgICAgICAgICAgICAgICAgXTsgQGVxICggzqlpbXRfMTg4ID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIHMuYWRkX3J1biAyOTksIDMwMjsgQGVxICggzqlpbXRfMTg5ID0gLT4gcy5wb2ludHMgKSwgWyAxLCAyOTcsICAgICAgMjk5LCAzMDAsIDMwMSwgMzAyLCBdOyBAZXEgKCDOqWltdF8xOTAgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGRfcnVuIDI5ODsgICAgICBAZXEgKCDOqWltdF8xOTEgPSAtPiBzLnBvaW50cyApLCBbIDEsIDI5NywgMjk4LCAyOTksIDMwMCwgMzAxLCAzMDIsIF07IEBlcSAoIM6paW10XzE5MiA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZF9ydW4gMzAwLCAzMDE7IEBlcSAoIM6paW10XzE5MyA9IC0+IHMucG9pbnRzICksIFsgMSwgMjk3LCAyOTgsIDI5OSwgMzAwLCAzMDEsIDMwMiwgXTsgQGVxICggzqlpbXRfMTk0ID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzE5NSA9IC0+IHMucnVucy5sZW5ndGggICApLCAyXG4gICAgICBAZXEgKCDOqWltdF8xOTYgPSAtPiBzLnJ1bnNbIDAgXSAgICAgKSwgeyBsbzogMSwgaGk6IDEsIH1cbiAgICAgIEBlcSAoIM6paW10XzE5NyA9IC0+IHMucnVuc1sgMSBdICAgICApLCB7IGxvOiAyOTcsIGhpOiAzMDIsIH1cbiAgICAgIEBlcSAoIM6paW10XzE5OCA9IC0+IHMucG9pbnRzICAgICAgICApLCBbIDEsIDI5NywgMjk4LCAyOTksIDMwMCwgMzAxLCAzMDIgXVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1c2luZ19zdHJpbmdzX2Zvcl9ib3VuZHM6IC0+XG4gICAgeyBIb2FyZCwgICAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL2ludGVybWlzc2lvbidcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoID0gbmV3IEhvYXJkKClcbiAgICAgIHMgPSBoLmNyZWF0ZV9zY2F0dGVyKClcbiAgICAgIEB0aHJvd3MgKCDOqWltdF8xOTkgPSAtPiBzLmFkZF9ydW4gNS44ICAgICAgICAgKSwgL2V4cGVjdGVkIGFuIGludGVnZXIgb3IgYSB0ZXh0LCBnb3QgYSBmbG9hdC9cbiAgICAgIEB0aHJvd3MgKCDOqWltdF8yMDAgPSAtPiBzLmFkZF9ydW4gLTMgICAgICAgICAgKSwgLy0weDMgaXMgbm90IGJldHdlZW4gXFwrMHgwIGFuZCBcXCsweDEwZmZmZi9cbiAgICAgIEB0aHJvd3MgKCDOqWltdF8yMDEgPSAtPiBzLmFkZF9ydW4gMCwgLTMgICAgICAgKSwgLy0weDMgaXMgbm90IGJldHdlZW4gXFwrMHgwIGFuZCBcXCsweDEwZmZmZi9cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgaCA9IG5ldyBIb2FyZCB7IGZpcnN0OiAtMTAsIGxhc3Q6ICsxMCwgfVxuICAgICAgcyA9IGguY3JlYXRlX3NjYXR0ZXIoKVxuICAgICAgcy5hZGRfcnVuIC0xMDsgQGVxICggzqlpbXRfMjAyID0gLT4gcy5wb2ludHMgICApLCBbIC0xMCwgXVxuICAgICAgcy5hZGRfcnVuICsxMDsgQGVxICggzqlpbXRfMjAzID0gLT4gcy5wb2ludHMgICApLCBbIC0xMCwgKzEwLCBdXG4gICAgICBAdGhyb3dzICggzqlpbXRfMjA0ID0gLT4gcy5hZGRfcnVuIC0xMSAgICAgICAgICksIC8tMHhiIGlzIG5vdCBiZXR3ZWVuIC0weGEgYW5kIFxcKzB4YS9cbiAgICAgIEB0aHJvd3MgKCDOqWltdF8yMDUgPSAtPiBzLmFkZF9ydW4gKzExICAgICAgICAgKSwgL1xcKzB4YiBpcyBub3QgYmV0d2VlbiAtMHhhIGFuZCBcXCsweGEvXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGggPSBuZXcgSG9hcmQoKVxuICAgICAgcyA9IGguY3JlYXRlX3NjYXR0ZXIoKVxuICAgICAgcy5hZGRfcnVuICdBJzsgICAgICBAZXEgKCDOqWltdF8yMDYgPSAtPiBzLnBvaW50cyAgICksIFsgKCAnQScuY29kZVBvaW50QXQgMCApLCBdXG4gICAgICBzLmFkZF9ydW4gJ0EnLCAnWic7IEBlcSAoIM6paW10XzIwNyA9IC0+IHMucG9pbnRzICAgKSwgWyA2NSwgNjYsIDY3LCA2OCwgNjksIDcwLCA3MSwgNzIsIDczLCA3NCwgNzUsIDc2LCA3NywgNzgsIDc5LCA4MCwgODEsIDgyLCA4MywgODQsIDg1LCA4NiwgODcsIDg4LCA4OSwgOTAgXVxuICAgICAgcy5hZGRfcnVuICdhJywgJ3onOyBAZXEgKCDOqWltdF8yMDggPSAtPiBzLnBvaW50cyAgICksIFsgNjUsIDY2LCA2NywgNjgsIDY5LCA3MCwgNzEsIDcyLCA3MywgNzQsIDc1LCA3NiwgNzcsIDc4LCA3OSwgODAsIDgxLCA4MiwgODMsIDg0LCA4NSwgODYsIDg3LCA4OCwgODksIDkwLCA5NywgOTgsIDk5LCBcXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMCwgMTAxLCAxMDIsIDEwMywgMTA0LCAxMDUsIDEwNiwgMTA3LCAxMDgsIDEwOSwgMTEwLCAxMTEsIDExMiwgMTEzLCAxMTQsIDExNSwgMTE2LCAxMTcsIDExOCwgMTE5LCAxMjAsIDEyMSwgMTIyLCBdXG4gICAgICBAZXEgKCDOqWltdF8yMDkgPSAtPiBzLm1pbiAgKSwgKCAnQScuY29kZVBvaW50QXQgMCApXG4gICAgICBAZXEgKCDOqWltdF8yMTAgPSAtPiBzLm1heCAgKSwgKCAneicuY29kZVBvaW50QXQgMCApXG4gICAgICBAZXEgKCDOqWltdF8yMTEgPSAtPiB7IG1pbjogcy5taW4sIG1heDogcy5tYXgsIH0gICksIHMubWlubWF4XG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGggPSBuZXcgSG9hcmQoKVxuICAgICAgcyA9IGguY3JlYXRlX3NjYXR0ZXIoKVxuICAgICAgcy5hZGRfcnVuICdBYmMnXG4gICAgICBAZXEgKCDOqWltdF8yMTIgPSAtPiBzLnBvaW50cyAgICksIFsgKCAnQScuY29kZVBvaW50QXQgMCApLCBdXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGggPSBuZXcgSG9hcmQoKVxuICAgICAgcyA9IGguY3JlYXRlX3NjYXR0ZXIoKVxuICAgICAgcy5hZGRfY29kZXBvaW50c19vZiAnQWJjJ1xuICAgICAgQGVxICggzqlpbXRfMjEzID0gLT4gcy5ydW5zLmxlbmd0aCApLCAzXG4gICAgICBAZXEgKCDOqWltdF8yMTQgPSAtPiBzLnBvaW50cyApLCBbICggJ0EnLmNvZGVQb2ludEF0IDAgKSwgKCAnYicuY29kZVBvaW50QXQgMCApLCAoICdjJy5jb2RlUG9pbnRBdCAwICksIF1cbiAgICAgIEBlcSAoIM6paW10XzIxNSA9IC0+IHMucnVucy5sZW5ndGggKSwgMlxuICAgICAgQGVxICggzqlpbXRfMjE2ID0gLT4gcy5ydW5zWyAwIF0gKSwgeyBsbzogKCAnQScuY29kZVBvaW50QXQgMCApLCBoaTogKCAnQScuY29kZVBvaW50QXQgMCApLCB9XG4gICAgICBAZXEgKCDOqWltdF8yMTcgPSAtPiBzLnJ1bnNbIDEgXSApLCB7IGxvOiAoICdiJy5jb2RlUG9pbnRBdCAwICksIGhpOiAoICdjJy5jb2RlUG9pbnRBdCAwICksIH1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgaCA9IG5ldyBIb2FyZCgpXG4gICAgICBzID0gaC5jcmVhdGVfc2NhdHRlcigpXG4gICAgICBzLmFkZF9jb2RlcG9pbnRzX29mICdhZWlvdcOkw7bDvCcsICdhZWlvdcOkw7bDvCcsICdBRUlPVcOEw5bDnCcsICdBRUlPVcOEw5bDnCdcbiAgICAgIEBlcSAoIM6paW10XzIxOCA9IC0+ICggKCBTdHJpbmcuZnJvbUNvZGVQb2ludCBjaWQgKSBmb3IgY2lkIGluIHMucG9pbnRzICkuam9pbiAnJyApLCAnQUVJT1VhZWlvdcOEw5bDnMOkw7bDvCdcbiAgICAgIEBlcSAoIM6paW10XzIxOSA9IC0+IHMucnVucy5sZW5ndGggKSwgMTZcbiAgICAgIHMubm9ybWFsaXplKClcbiAgICAgIEBlcSAoIM6paW10XzIyMCA9IC0+IHMucnVucy5sZW5ndGggKSwgMTZcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGF0YV9yZXRyaWV2YWw6IC0+XG4gICAgeyBIb2FyZCxcbiAgICAgIHN1bW1hcml6ZV9kYXRhLCAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvaW50ZXJtaXNzaW9uJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGggPSBuZXcgSG9hcmQoKVxuICAgICAgc192b3dlbHMgPSBoLmFkZF9zY2F0dGVyIHsgZGF0YTogeyB0YWdzOiBbICd2b3dlbCcsIF0sIGlzX2FzY2lpOiB0cnVlLCB9LCB9XG4gICAgICBzX3VtbGF1dCA9IGguYWRkX3NjYXR0ZXIgeyBkYXRhOiB7IHRhZ3M6IFsgJ3VtbGF1dCcsIF0sIH0sIH1cbiAgICAgIHNfdm93ZWxzLmFkZF9jb2RlcG9pbnRzX29mICdhZWlvdcOkw7bDvCcsICdhZWlvdcOkw7bDvCcsICdBRUlPVcOEw5bDnCcsICdBRUlPVcOEw5bDnCdcbiAgICAgIHNfdW1sYXV0LmFkZF9jb2RlcG9pbnRzX29mICfDpMO2w7wnLCAnw6TDtsO8JywgJ8OEw5bDnCdcbiAgICAgIEBlcSAoIM6paW10XzIyMSA9IC0+IHNfdm93ZWxzLmNvbnRhaW5zICdBJyAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMjIyID0gLT4gc192b3dlbHMuY29udGFpbnMgJ0EnLmNvZGVQb2ludEF0IDAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8yMjMgPSAtPiBzX3Zvd2Vscy5jb250YWlucyAnQicgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8yMjQgPSAtPiBzX3Zvd2Vscy5jb250YWlucyAnQicuY29kZVBvaW50QXQgMCAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8yMjUgPSAtPiBoLnN1bW1hcml6ZV9kYXRhX2Zvcl9wb2ludCAgJ0EnICAgICAgICksIHsgaXNfYXNjaWk6IFsgdHJ1ZSwgXSwgdGFnczogWyAndm93ZWwnLCBdLCB9XG4gICAgICBAZXEgKCDOqWltdF8yMjYgPSAtPiBoLnN1bW1hcml6ZV9kYXRhX2Zvcl9wb2ludCAgJ8OkJyAgICAgICApLCB7IGlzX2FzY2lpOiBbIHRydWUsIF0sIHRhZ3M6IFsgJ3VtbGF1dCcsICd2b3dlbCcsIF0sIH1cbiAgICAgIEBlcSAoIM6paW10XzIyNyA9IC0+IGguc3VtbWFyaXplX2RhdGFfZm9yX3BvaW50ICAnQicgICAgICAgKSwgbnVsbFxuICAgICAgQGVxICggzqlpbXRfMjI4ID0gLT4gaC5zdW1tYXJpemVfZGF0YV9mb3JfcG9pbnQgICd5JyAgICAgICApLCBudWxsXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGNsYXNzIFZ1X2hvYXJkIGV4dGVuZHMgSG9hcmRcbiAgICAgICAgc3VtbWFyaXplX2RhdGFfaXNfYXNjaWk6IHN1bW1hcml6ZV9kYXRhLmFzX2Jvb2xlYW5fYW5kXG4gICAgICBoID0gbmV3IFZ1X2hvYXJkKClcbiAgICAgIHNfYXNjaWkgICA9IGguYWRkX3NjYXR0ZXIgeyBkYXRhOiB7IGlzX2FzY2lpOiB0cnVlLCB9LCB9XG4gICAgICBzX3Zvd2VscyAgPSBoLmFkZF9zY2F0dGVyIHsgZGF0YTogeyB0YWdzOiBbICd2b3dlbCcsIF0sIH0sIH1cbiAgICAgIHNfdW1sYXV0ICA9IGguYWRkX3NjYXR0ZXIgeyBkYXRhOiB7IHRhZ3M6IFsgJ3VtbGF1dCcsIF0sIH0sIH1cbiAgICAgIHNfYXNjaWkuYWRkX3J1biAnYScsICd6J1xuICAgICAgc19hc2NpaS5hZGRfcnVuICdBJywgJ1onXG4gICAgICBzX3Zvd2Vscy5hZGRfY29kZXBvaW50c19vZiAnYWVpb3XDpMO2w7wnLCAnYWVpb3XDpMO2w7wnLCAnQUVJT1XDhMOWw5wnLCAnQUVJT1XDhMOWw5wnXG4gICAgICBzX3VtbGF1dC5hZGRfY29kZXBvaW50c19vZiAnw6TDtsO8JywgJ8Okw7bDvCcsICfDhMOWw5wnXG4gICAgICBAZXEgKCDOqWltdF8yMjkgPSAtPiBzX2FzY2lpLmNvbnRhaW5zICAgICAgJ0EnICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMjMwID0gLT4gc19hc2NpaS5jb250YWlucyAgICAgICdRJyAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzIzMSA9IC0+IHNfYXNjaWkuY29udGFpbnMgICAgICAnZicgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8yMzIgPSAtPiBzX3Zvd2Vscy5jb250YWlucyAgICAgJ0EnICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMjMzID0gLT4gc192b3dlbHMuY29udGFpbnMgICAgICdBJy5jb2RlUG9pbnRBdCAwICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzIzNCA9IC0+IHNfdm93ZWxzLmNvbnRhaW5zICAgICAnQicgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMjM1ID0gLT4gc192b3dlbHMuY29udGFpbnMgICAgICdCJy5jb2RlUG9pbnRBdCAwICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8yMzYgPSAtPiBoLmdldF9kYXRhX2Zvcl9wb2ludCAgICAgICAgJ0EnICAgICAgICAgICAgICAgKSwgWyB7IGlzX2FzY2lpOiB0cnVlIH0sIHsgdGFnczogWyAndm93ZWwnIF0gfSBdXG4gICAgICBAZXEgKCDOqWltdF8yMzcgPSAtPiBoLmdldF9kYXRhX2Zvcl9wb2ludCAgICAgICAgJ0EnLmNvZGVQb2ludEF0IDAgKSwgWyB7IGlzX2FzY2lpOiB0cnVlIH0sIHsgdGFnczogWyAndm93ZWwnIF0gfSBdXG4gICAgICBAZXEgKCDOqWltdF8yMzggPSAtPiBoLmdldF9kYXRhX2Zvcl9wb2ludCAgICAgICAgJ1EnICAgICAgICAgICAgICAgKSwgWyB7IGlzX2FzY2lpOiB0cnVlIH0sIF1cbiAgICAgIEBlcSAoIM6paW10XzIzOSA9IC0+IGguZ2V0X2RhdGFfZm9yX3BvaW50ICAgICAgICAnZicgICAgICAgICAgICAgICApLCBbIHsgaXNfYXNjaWk6IHRydWUgfSwgXVxuICAgICAgQGVxICggzqlpbXRfMjQwID0gLT4gaC5nZXRfZGF0YV9mb3JfcG9pbnQgICAgICAgICdCJyAgICAgICAgICAgICAgICksIFsgeyBpc19hc2NpaTogdHJ1ZSB9LCBdXG4gICAgICBAZXEgKCDOqWltdF8yNDEgPSAtPiBoLmdldF9kYXRhX2Zvcl9wb2ludCAgICAgICAgJ0InLmNvZGVQb2ludEF0IDAgKSwgWyB7IGlzX2FzY2lpOiB0cnVlIH0sIF1cbiAgICAgIEBlcSAoIM6paW10XzI0MiA9IC0+IGguZ2V0X2RhdGFfZm9yX3BvaW50ICAgICAgICAnw6QnICAgICAgICAgICAgICAgKSwgWyB7IHRhZ3M6IFsgJ3Zvd2VsJywgXSwgfSwgeyB0YWdzOiBbICd1bWxhdXQnLCBdLCB9LCBdXG4gICAgICBAZXEgKCDOqWltdF8yNDMgPSAtPiBoLnN1bW1hcml6ZV9kYXRhX2Zvcl9wb2ludCAgJ0EnICAgICAgICAgICAgICAgKSwgeyBpc19hc2NpaTogdHJ1ZSwgdGFnczogWyAndm93ZWwnIF0sIH1cbiAgICAgIEBlcSAoIM6paW10XzI0NCA9IC0+IGguc3VtbWFyaXplX2RhdGFfZm9yX3BvaW50ICAnQScuY29kZVBvaW50QXQgMCApLCB7IGlzX2FzY2lpOiB0cnVlLCB0YWdzOiBbICd2b3dlbCcgXSwgfVxuICAgICAgQGVxICggzqlpbXRfMjQ1ID0gLT4gaC5zdW1tYXJpemVfZGF0YV9mb3JfcG9pbnQgICdRJyAgICAgICAgICAgICAgICksIHsgaXNfYXNjaWk6IHRydWUsIH1cbiAgICAgIEBlcSAoIM6paW10XzI0NiA9IC0+IGguc3VtbWFyaXplX2RhdGFfZm9yX3BvaW50ICAnZicgICAgICAgICAgICAgICApLCB7IGlzX2FzY2lpOiB0cnVlLCB9XG4gICAgICBAZXEgKCDOqWltdF8yNDcgPSAtPiBoLnN1bW1hcml6ZV9kYXRhX2Zvcl9wb2ludCAgJ0InICAgICAgICAgICAgICAgKSwgeyBpc19hc2NpaTogdHJ1ZSwgfVxuICAgICAgQGVxICggzqlpbXRfMjQ4ID0gLT4gaC5zdW1tYXJpemVfZGF0YV9mb3JfcG9pbnQgICdCJy5jb2RlUG9pbnRBdCAwICksIHsgaXNfYXNjaWk6IHRydWUsIH1cbiAgICAgIEBlcSAoIM6paW10XzI0OSA9IC0+IGguc3VtbWFyaXplX2RhdGFfZm9yX3BvaW50ICAnw6QnICAgICAgICAgICAgICAgKSwgeyB0YWdzOiBbICd1bWxhdXQnLCAndm93ZWwnLCBdLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNfbm90X2FzY2lpID0gaC5hZGRfc2NhdHRlciB7IGRhdGE6IHsgaXNfYXNjaWk6IGZhbHNlLCB9LCB9XG4gICAgICBzX25vdF9hc2NpaS5hZGRfcnVuIDB4ODAsIDB4MTBmZmZmXG4gICAgICBAZXEgKCDOqWltdF8yNTAgPSAtPiBoLnN1bW1hcml6ZV9kYXRhX2Zvcl9wb2ludCAgJ0InICAgICAgICAgICAgICAgKSwgeyBpc19hc2NpaTogdHJ1ZSwgfVxuICAgICAgQGVxICggzqlpbXRfMjUxID0gLT4gaC5zdW1tYXJpemVfZGF0YV9mb3JfcG9pbnQgICfDpCcgICAgICAgICAgICAgICApLCB7IGlzX2FzY2lpOiBmYWxzZSwgdGFnczogWyAndW1sYXV0JywgJ3Zvd2VsJywgXSwgfVxuICAgICAgQHRocm93cyAoIM6paW10XzI1MiA9IC0+IGguc3VtbWFyaXplX2RhdGFfZm9yX3BvaW50ICAnw6R3aGF0JyAgICAgICAgKSwgL25vdCBhIHZhbGlkIHBvaW50L1xuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB2YWxpZGF0aW9uOiAtPlxuICAgIHsgVHlwZSxcbiAgICAgIFR5cGVzcGFjZSwgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9uYW5vdHlwZXNfdjIoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2xhc3MgTXlfdHlwZXNwYWNlIGV4dGVuZHMgVHlwZXNwYWNlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAaW50ZWdlcjogKCB4ICkgLT5cbiAgICAgICAgQGFzc2lnbiB7IHgsIH1cbiAgICAgICAgcmV0dXJuIHRydWUgaWYgTnVtYmVyLmlzU2FmZUludGVnZXIgeFxuICAgICAgICByZXR1cm4gQGZhaWwgXCIje3JwciB4fSBpcyBhIG5vbi1pbnRlZ2VyIG51bWJlclwiLCB7IGZyYWN0aW9uOiB4ICUgMSwgfSBpZiBOdW1iZXIuaXNGaW5pdGUgeFxuICAgICAgICByZXR1cm4gQGZhaWwgXCIje3JwciB4fSBpcyBub3QgZXZlbiBhIGZpbml0ZSBudW1iZXJcIlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQHRleHQ6ICggeCApIC0+XG4gICAgICAgIEBhc3NpZ24geyB4LCB9XG4gICAgICAgIHJldHVybiB0cnVlIGlmICggdHlwZW9mIHggKSBpcyAnc3RyaW5nJ1xuICAgICAgICA7ZmFsc2VcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBwb2ludDogKCB4ICkgLT5cbiAgICAgICAgQGFzc2lnbiB7IHgsIH1cbiAgICAgICAgcmV0dXJuIHRydWUgaWYgKCBAVC5pbnRlZ2VyLmlzYSB4IClcbiAgICAgICAgcmV0dXJuIEBmYWlsIFwiI3tycHIgeH0gaXMgbm90IGFuIGludGVnZXIgYW5kIG5vdCBhIHRleHRcIiAgICAgICAgICB1bmxlc3MgKCBAVC50ZXh0LmlzYSB4IClcbiAgICAgICAgcmV0dXJuIEBmYWlsIFwiI3tycHIgeH0gaXMgYSB0ZXh0IGJ1dCBub3Qgd2l0aCBhIHNpbmdsZSBjb2RlcG9pbnRcIiB1bmxlc3MgKCAoIEFycmF5LmZyb20geCApLmxlbmd0aCBpcyAxIClcbiAgICAgICAgO3RydWVcbiAgICAgICAgIyByZXR1cm4gdHJ1ZSBpZiBOdW1iZXIuaXNTYWZlSW50ZWdlciB4XG4gICAgICAgICMgcmV0dXJuIEBmYWlsIFwiI3tycHIgeH0gaXMgYSBub24taW50ZWdlciBudW1iZXJcIiwgeyBmcmFjdGlvbjogeCAlIDEsIH0gaWYgTnVtYmVyLmlzRmluaXRlIHhcbiAgICAgICAgIyByZXR1cm4gQGZhaWwgXCIje3JwciB4fSBpcyBub3QgZXZlbiBhIGZpbml0ZSBudW1iZXJcIlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIFQgPSBuZXcgTXlfdHlwZXNwYWNlKClcbiAgICBkZWJ1ZyAnzqlpbXRfMjUzJywgVC5pbnRlZ2VyXG4gICAgZGVidWcgJ86paW10XzI1NCcsIFQuaW50ZWdlci5pc2FcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAoIM6paW10XzI1NSA9IC0+IFQuaW50ZWdlci5pc2EgICAgICAgICAgIDUgICAgICAgICApLCB0cnVlXG4gICAgQGVxICggzqlpbXRfMjU2ID0gLT4gVC5wb2ludC5pc2EgICAgICAgICAgICAgNSAgICAgICAgICksIHRydWVcbiAgICBAZXEgKCDOqWltdF8yNTcgPSAtPiBULnBvaW50LmlzYSAgICAgICAgICAgICAnYScgICAgICAgKSwgdHJ1ZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqlpbXRfMjU4ID0gLT4gVC5pbnRlZ2VyLmlzYSAgICAgICAgICAgNTUuNSAgICAgICksIGZhbHNlXG4gICAgQGVxICggzqlpbXRfMjU5ID0gLT4gVC5wb2ludC5pc2EgICAgICAgICAgICAgNTUuNSAgICAgICksIGZhbHNlXG4gICAgQGVxICggzqlpbXRfMjYwID0gLT4gVC5wb2ludC5pc2EgICAgICAgICAgICAgJ2FiYycgICAgICksIGZhbHNlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgKCDOqWltdF8yNjEgPSAtPiBULmludGVnZXIudmFsaWRhdGUgICAgICA1ICAgICAgICAgKSwgNVxuICAgIEBlcSAoIM6paW10XzI2MiA9IC0+IFQucG9pbnQudmFsaWRhdGUgICAgICAgIDUgICAgICAgICApLCA1XG4gICAgQGVxICggzqlpbXRfMjYzID0gLT4gVC5wb2ludC52YWxpZGF0ZSAgICAgICAgJ2EnICAgICAgICksICdhJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqlpbXRfMjY0ID0gLT4gdHJ5IFQuaW50ZWdlci52YWxpZGF0ZSAgNTUuNSAgY2F0Y2ggZSB0aGVuIHJldHVybiBlLm1lc3NhZ2UgKSwgXCJcIlwiKGludGVnZXIpIG5vdCBhIHZhbGlkIGludGVnZXI6IDU1LjUg4oCTIDU1LjUgaXMgYSBub24taW50ZWdlciBudW1iZXJcIlwiXCJcbiAgICBAZXEgKCDOqWltdF8yNjUgPSAtPiB0cnkgVC5wb2ludC52YWxpZGF0ZSAgICA1NS41ICBjYXRjaCBlIHRoZW4gcmV0dXJuIGUubWVzc2FnZSApLCBcIlwiXCIocG9pbnQpIG5vdCBhIHZhbGlkIHBvaW50OiA1NS41IOKAkyA1NS41IGlzIG5vdCBhbiBpbnRlZ2VyIGFuZCBub3QgYSB0ZXh0XCJcIlwiXG4gICAgQGVxICggzqlpbXRfMjY2ID0gLT4gdHJ5IFQucG9pbnQudmFsaWRhdGUgICAgJ2FiYycgY2F0Y2ggZSB0aGVuIHJldHVybiBlLm1lc3NhZ2UgKSwgXCJcIlwiKHBvaW50KSBub3QgYSB2YWxpZCBwb2ludDogYWJjIOKAkyAnYWJjJyBpcyBhIHRleHQgYnV0IG5vdCB3aXRoIGEgc2luZ2xlIGNvZGVwb2ludFwiXCJcIlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQHRocm93cyAoIM6paW10XzI2NyA9IC0+IFQuaW50ZWdlci52YWxpZGF0ZSAgNTUuNSAgICAgICksIC9ub3QgYSB2YWxpZCBpbnRlZ2VyL1xuICAgIEB0aHJvd3MgKCDOqWltdF8yNjggPSAtPiBULnBvaW50LnZhbGlkYXRlICAgIDU1LjUgICAgICApLCAvbm90IGEgdmFsaWQgcG9pbnQvXG4gICAgQHRocm93cyAoIM6paW10XzI2OSA9IC0+IFQucG9pbnQudmFsaWRhdGUgICAgJ2FiYycgICAgICksIC9ub3QgYSB2YWxpZCBwb2ludC9cbiAgICBAdGhyb3dzICggzqlpbXRfMjcwID0gLT4gVC5wb2ludC52YWxpZGF0ZSAgICAnJyAgICAgICAgKSwgL25vdCBhIHZhbGlkIHBvaW50L1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIF9kYnJpY19pbnRlZ3JhdGlvbjogLT5cbiAgICB7IEhvYXJkLFxuICAgICAgc3VtbWFyaXplX2RhdGEsICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL2xpYi9pbnRlcm1pc3Npb24nXG4gICAgeyBEYnJpYyxcbiAgICAgIGFzX2Jvb2wsXG4gICAgICBTUUwsXG4gICAgICBMSVQsXG4gICAgICBJRE4sXG4gICAgICBWRUMsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgcHJlZml4ID0gJ3ByZngnXG4gICAgZGVidWcgJ86paW10XzI3MScsIEhvYXJkXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIGdldF9mdW5jdGlvbnMgPSAoIGRiICkgLT5cbiAgICAjICAgUiA9IHt9XG4gICAgIyAgIGZvciB7IG5hbWUsIGJ1aWx0aW4sIHR5cGUsIH0gZnJvbSBkYi53YWxrIFNRTFwiXCJcInNlbGVjdCBuYW1lLCBidWlsdGluLCB0eXBlIGZyb20gcHJhZ21hX2Z1bmN0aW9uX2xpc3QoKSBvcmRlciBieSBuYW1lO1wiXCJcIlxuICAgICMgICAgIGlzX2J1aWx0aW4gPSBhc19ib29sIGJ1aWx0aW5cbiAgICAjICAgICBSWyBuYW1lIF0gPSB7IG5hbWUsIGlzX2J1aWx0aW4sIHR5cGUsIH1cbiAgICAjICAgcmV0dXJuIFJcbiAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBnZXRfZnVuY3Rpb25fbmFtZXMgPSAoIGRiICkgLT4gbmV3IFNldCAoIGtleSBmb3Iga2V5IG9mIGdldF9mdW5jdGlvbnMgZGIgKVxuICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIEBlcSAoIM6paW10XzI3MiA9IC0+IHR5cGVfb2YgSG9hcmQuZ2V0X3VkZnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnZnVuY3Rpb24nXG4gICAgIyBAZXEgKCDOqWltdF8yNzMgPSAtPiB0eXBlX29mIEhvYXJkLmdldF9idWlsZF9zdGF0ZW1lbnRzICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ2Z1bmN0aW9uJ1xuICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIEBlcSAoIM6paW10XzI3NCA9IC0+IHR5cGVfb2YgSG9hcmQuZ2V0X3VkZnMgICAgICAgICAgICAgIHsgcHJlZml4LCB9ICAgICAgICAgICApLCAncG9kJ1xuICAgICMgQGVxICggzqlpbXRfMjc1ID0gLT4gdHlwZV9vZiBIb2FyZC5nZXRfYnVpbGRfc3RhdGVtZW50cyAgeyBwcmVmaXgsIH0gICAgICAgICAgICksICdsaXN0J1xuICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIEBlcSAoIM6paW10XzI3NiA9IC0+ICggT2JqZWN0LmtleXMgSG9hcmQuZ2V0X3VkZnMgICAgICAgIHsgcHJlZml4LCB9ICkubGVuZ3RoICApLCAzXG4gICAgIyBAZXEgKCDOqWltdF8yNzcgPSAtPiAoIEhvYXJkLmdldF9idWlsZF9zdGF0ZW1lbnRzICAgICAgICB7IHByZWZpeCwgfSApLmxlbmd0aCAgKSwgM1xuICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIHt9XG4gICAgIyB1ZGZzICAgICAgICAgICAgICA9IEhvYXJkLmdldF91ZGZzIHsgcHJlZml4LCB9XG4gICAgIyBidWlsZF9zdGF0ZW1lbnRzICA9IEhvYXJkLmdldF9idWlsZF9zdGF0ZW1lbnRzIHsgcHJlZml4LCB9XG4gICAgIyBkYiAgICAgICAgICAgICAgICA9IG5ldyBEYnJpYyAnOm1lbW9yeTonXG4gICAgIyAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgZm9yIG5hbWUsIGRlZmluaXRpb24gb2YgdWRmc1xuICAgICMgICBpbmZvICfOqWltdF8yNzgnLCBcImNyZWF0ZSBVREYgI3tkZWZpbml0aW9uLm5hbWV9XCJcbiAgICAjICAgZGIuY3JlYXRlX2Z1bmN0aW9uIGRlZmluaXRpb25cbiAgICAjIGRlYnVnICfOqWltdF8yNzknLCAgbmFtZSBmb3IgbmFtZSBmcm9tIGdldF9mdW5jdGlvbl9uYW1lcyBkYiB3aGVuIG5hbWUuc3RhcnRzV2l0aCBcIiN7cHJlZml4fV9cIlxuICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIGZvciBzdGF0ZW1lbnQsIGlkeCBpbiBidWlsZF9zdGF0ZW1lbnRzXG4gICAgIyAgIHN0YXRlbWVudCA9IGRiLnByZXBhcmUgc3RhdGVtZW50XG4gICAgIyAgIGluZm8gJ86paW10XzI4MCcsIHN0YXRlbWVudC5ydW4oKVxuICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIGluc2VydF9kYXRhID0gZGIucHJlcGFyZSBTUUxcIlwiXCJpbnNlcnQgaW50byAje0lETiBcIiN7cHJlZml4fV9ob2FyZF9zY2F0dGVyc1wifSAoIGRhdGEgKSB2YWx1ZXMgKCAkZGF0YSApXCJcIlwiXG4gICAgIyBpbnNlcnRfZGF0YS5ydW4geyBkYXRhOiAoIEpTT04uc3RyaW5naWZ5IHsgbGV0dGVyOiAnQScsIGFyYzogdHJ1ZSwgemV0YTogZmFsc2UsIH0gKSwgfVxuICAgICMgaW5zZXJ0X2RhdGEucnVuIHsgZGF0YTogKCBKU09OLnN0cmluZ2lmeSB7IHpldGE6IGZhbHNlLCBsZXR0ZXI6ICdBJywgYXJjOiB0cnVlLCB9ICksIH1cbiAgICAjIGluc2VydF9kYXRhLnJ1biB7IGRhdGE6ICggSlNPTi5zdHJpbmdpZnkgeyBsZXR0ZXI6ICdCJywgYXJjOiB0cnVlLCB6ZXRhOiBmYWxzZSwgfSApLCB9XG4gICAgIyBpbnNlcnRfZGF0YS5ydW4geyBkYXRhOiAoIEpTT04uc3RyaW5naWZ5IHsgbGV0dGVyOiAnQycsIGFyYzogdHJ1ZSwgemV0YTogZmFsc2UsIH0gKSwgfVxuICAgICMgZWNobyB7IHJvdy4uLiwgfSBmb3Igcm93IGZyb20gZGIud2FsayBTUUxcIlwiXCJzZWxlY3QgKiBmcm9tICN7SUROIFwiI3twcmVmaXh9X2hvYXJkX3NjYXR0ZXJzXCJ9XCJcIlwiXG4gICAgIyBlY2hvIHsgcm93Li4uLCB9IGZvciByb3cgZnJvbSBkYi53YWxrIFNRTFwiXCJcInNlbGVjdCAje0lETiBcIiN7cHJlZml4fV9ub3JtYWxpemVfZGF0YVwifSggJGRhdGEgKSBhcyBuZGF0YTtcIlwiXCIsIHsgZGF0YTogKCBKU09OLnN0cmluZ2lmeSB7IGxldHRlcjogJ0EnLCBhcmM6IHRydWUsIHpldGE6IGZhbHNlLCB9ICksIH1cbiAgICAjIGVjaG8geyByb3cuLi4sIH0gZm9yIHJvdyBmcm9tIGRiLndhbGsgU1FMXCJcIlwic2VsZWN0ICN7SUROIFwiI3twcmVmaXh9X25vcm1hbGl6ZV9kYXRhXCJ9KCAkZGF0YSApIGFzIG5kYXRhO1wiXCJcIiwgeyBkYXRhOiAoIEpTT04uc3RyaW5naWZ5IHsgemV0YTogZmFsc2UsIGxldHRlcjogJ0EnLCBhcmM6IHRydWUsIH0gKSwgfVxuICAgICMgZWNobyB7IHJvdy4uLiwgfSBmb3Igcm93IGZyb20gZGIud2FsayBTUUxcIlwiXCJzZWxlY3QgI3tJRE4gXCIje3ByZWZpeH1fbm9ybWFsaXplX2RhdGFcIn0oICRkYXRhICkgYXMgbmRhdGE7XCJcIlwiLCB7IGRhdGE6ICggSlNPTi5zdHJpbmdpZnkgeyBsZXR0ZXI6ICdCJywgYXJjOiB0cnVlLCB6ZXRhOiBmYWxzZSwgfSApLCB9XG4gICAgIyBlY2hvIHsgcm93Li4uLCB9IGZvciByb3cgZnJvbSBkYi53YWxrIFNRTFwiXCJcInNlbGVjdCAje0lETiBcIiN7cHJlZml4fV9ub3JtYWxpemVfZGF0YVwifSggJGRhdGEgKSBhcyBuZGF0YTtcIlwiXCIsIHsgZGF0YTogKCBKU09OLnN0cmluZ2lmeSB7IGxldHRlcjogJ0MnLCBhcmM6IHRydWUsIHpldGE6IGZhbHNlLCB9ICksIH1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gICMgZGVtb19pbmZpbml0ZV9wcm94eSgpXG4gICMgZGVtb19jb2xvcmZ1bF9wcm94eSgpXG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogdHJ1ZSwgcmVwb3J0X2NoZWNrczogdHJ1ZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHRlc3RzLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgb3ZlcmxhcHBpbmc6IHRlc3RzLm92ZXJsYXBwaW5nLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBkYnJpY19pbnRlZ3JhdGlvbjogdGVzdHMuX2RicmljX2ludGVncmF0aW9uLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBiYXNpY19zY2F0dGVyczogdGVzdHMuYmFzaWNfc2NhdHRlcnMsIH1cbiAgO251bGxcblxuIl19
